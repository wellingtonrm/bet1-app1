<?php

namespace app\helpers;

use app\core\crud\Conn;
use app\core\Model;
use app\models\CampeonatosModel;
use app\models\DadosModel;
use app\models\helpers\OptionsModel;
use app\models\JogosModel;
use app\traits\vo\urlAmigavel;
use app\vo\JogoVO;
use GuzzleHttp\Client;

class APIMarjo
{

    /**
     * @var Client
     */
    private $client;

    public function __construct(string $prefixo = null)
    {
        $this->client = new Client([
            'base_url' => 'https://apimarjosports.lifeweb.com.br/' . ($prefixo ?: DadosModel::get()->getApiPrefixo()) . '/',
            'verify' => false,
        ]);
    }

    public function importarJogos()
    {
        try {

            ini_set('memory_limit', '1024M');
            ini_set('max_execution_time', 0.5 * 60 * 60);

            $response = $this->getJogos();

            if ($response['result'] != 1) {
                throw new \Exception($response['message']);
            }

            $this->atualizaTimes($response['times']);
            $this->atualizaCampeonatos($response['paises']);

            $termos = <<<SQL
INSERT INTO 
    `sis_jogos` (`insert`, `update`, `token`, `campeonato`, `datacadastro`, `data`, `hora`, `timecasa`, `timefora`, `status`, `cotacoes`, `refimport`, `limite1`, `limite2`, `limite3`)

SELECT 
    NOW(), NOW(), :token, campeonato.id, CURDATE(), :data, :hora, timecasa.id, timefora.id, 1, :cotacoes, :refimport, 300, 500, 1000

FROM 
    `sis_times` AS timecasa, `sis_times` AS timefora, `sis_campeonatos` AS campeonato, `sis_options` AS pais
    
WHERE 
    timecasa.title = :timecasa     
    AND timefora.title = :timefora 
    AND campeonato.title = :campeonato
    AND pais.id = campeonato.pais AND pais.title = :pais

LIMIT 1

ON DUPLICATE KEY UPDATE 
    `data` = :data,
    `hora` = :hora,
    `update` = NOW(),
    `campeonato` = campeonato.id,
    `cotacoes` = IF(`alteroucotacoes` = 0, :cotacoes, `cotacoes`);     
SQL;

            $jogos = $response['jogos'];

            $prepare = Conn::getConn()->prepare($termos);

            $novos = $antigos = $erros = 0;

            foreach ($jogos as $i => $v) {

                $prepare->execute([
                    'token' => Utils::gerarToken(),
                    'data' => $v['data'],
                    'campeonato' => $v['campeonato'],
                    'pais' => $v['pais'],
                    'timecasa' => $v['timecasa'],
                    'timefora' => $v['timefora'],
                    'hora' => $v['hora'],
                    'cotacoes' => json_encode($v['cotacoes']),
                    'refimport' => $v['refid'],
                ]);

                if ($prepare->rowCount() == 1) {
                    $novos++;
                } else if ($prepare->rowCount() == 2) {
                    $antigos++;
                } else {
                    $erros++;
                }

                if ($i % 50 == 0) {
                    sleep(1);
                }
            }

            return [
                'novos' => $novos,
                'antigos' => $antigos,
                'erros' => $erros,
                'message' => "{$novos} novos jogos e {$antigos} jogos atualizados.",
                'result' => 1,
            ];
        } catch (\Exception $exception) {
            return $exception;
        }
    }

    /**
     * @return array
     */
    public function getJogos()
    {
        $response = json_decode($this->client->get('jogos', [
            'verify' => false,
        ])->getBody()->getContents(), true);
        if (!$response) {
            throw new \Exception("Não foi possível decodificar o retorno da API");
        }

        $limiteCotacao = DadosModel::get()->getLimiteCotacao();

        if ($limiteCotacao > 0) {
            foreach ($response['jogos'] as $index => $jogo) {
                foreach ($jogo['cotacoes'] as $tempo => $cotacoes) {
                    foreach ($cotacoes as $campo => $valor) {
                        $response['jogos'][$index]['cotacoes'][$tempo][$campo] = min($limiteCotacao, Number::float($valor));
                    }
                }
            }
        }

        return $response;
    }

    /**
     * Atualiza a lista de times
     * @param array $times
     */
    private function atualizaTimes(array $times)
    {

        $termos = <<<SQL
INSERT INTO `sis_times` (`insert`, `update`, `token`, `title`, `status`)
SELECT NOW(), NOW(), :token, :time, 1 FROM DUAL
WHERE NOT EXISTS (SELECT b.title FROM `sis_times` AS b WHERE b.title = :time LIMIT 1)
LIMIT 1
SQL;

        $prepare = Conn::getConn()->prepare($termos);

        $total = 0;

        foreach ($times as $time) {
            $prepare->execute([
                'token' => Utils::gerarToken(),
                'time' => $time,
            ]);

            $total += $prepare->rowCount();
        }

    }

    /**
     * @param array $campeonatos
     */
    private function atualizaCampeonatos(array $campeonatos)
    {

        $termos = (clone CampeonatosModel::getBuildQuery())
            ->addInnerJoin(OptionsModel::getTable(), 'pais', 'pais.id = a.pais AND pais.title = :pais')
            ->setWhere('a.title = :campeonato AND a.status != 99')
            ->setLimit(1);

        $total = 0;

        foreach ($campeonatos as $pais => $listaCampeonatos) {

            foreach ($listaCampeonatos as $campeonato) {

                if ($pais and $campeonato) {

                    if (!CampeonatosModel::lista($termos, ['pais' => $pais, 'campeonato' => $campeonato])) {

                        $paisVo = current(OptionsModel::lista('WHERE a.title = :pais AND a.ref = :ref AND a.status != 99 LIMIT 1', [
                            'pais' => $pais,
                            'ref' => 'paises',
                        ]));

                        if (!$paisVo) {
                            $paisVo = OptionsModel::newValueObject([
                                'title' => $pais,
                                'ref' => 'paises',
                                'urlamigavel' => url_paranformat($pais),
                            ]);
                        }

                        $values = [
                            'title' => $campeonato,
                            'pais' => $paisVo->getId(),
                        ];

                        var_dump($values);

                        CampeonatosModel::newValueObject($values)->save();

                    }

                }
            }

        }

    }

    /**
     * Importar placares
     * @return []
     * @throws \Exception
     */
    public function importarPlacares()
    {

        ini_set('memory_limit', '500M');
        ini_set('max_input_vars', 5000);
        ini_set('max_execution_time', 10 * 60);

        $termos = <<<SQL
WHERE 
    a.refimport IS NOT NULL AND a.refimport != '' 
    AND a.status = 1 
    AND (a.data BETWEEN :inicio AND :fim OR a.data = curdate() AND a.hora < curtime())
    
ORDER BY 
    a.data ASC, a.hora ASC
    
LIMIT 500;
SQL;

        /** @var JogoVO[] $listagem */
        $listagem = JogosModel::lista($termos, [
            'inicio' => date('Y-m-d', strtotime('-10days')),
            'fim' => date('Y-m-d'),
        ]);

        /** @var JogoVO[] $jogos */
        $jogos = [];

        foreach ($listagem as $jogo) {
            $jogos[$jogo->getRefImport()] = $jogo;
        }

        if (!$jogos) {
            throw new \Exception("Nenhum jogo foi alterado.");
        }

        $totalJogos = count($jogos);
        $totalDefinidos = 0;

        $message = '';

        $response = json_decode($this->client->post('resultados', [
            'verify' => false,
            'body' => [
                'referencias' => array_keys($jogos),
            ]
        ])->getBody()->getContents(), true);

        if ($response['result'] !== 1) {
            throw new \Exception($response['message'] ?? 'Não foi possível decodificar o retorno');
        }

        foreach ($response['resultados'] as $placar) {

            $jogo = $jogos[$placar['refid']];

            if ($jogo instanceof JogoVO and $jogo->getStatus() == 1) {

                if ($placar['refid'] == $jogo->getRefImport()) {

                    $jogo->setTimeCasaPlacarPrimeiro($placar['timecasaplacarprimeiro']);
                    $jogo->setTimeCasaPlacarSegundo($placar['timecasaplacarsegundo']);
                    $jogo->setTimeForaPlacarPrimeiro($placar['timeforaplacarprimeiro']);
                    $jogo->setTimeForaPlacarSegundo($placar['timeforaplacarsegundo']);

                    JogosModel::definePlacar($jogo, false);

                    $totalDefinidos++;

                    $message .= "{$jogo->getTimeCasaTitle()} {$jogo->getTimeCasaPlacar()}x{$jogo->getTimeForaPlacar()} {$jogo->getTimeForaTitle()}\n";

                }

                sleep(1);

            }

        }

        return [
            'message' => "{$message}{$totalDefinidos}/{$totalJogos} jogos foram definidos os placares.",
            'result' => 1,
        ];
    }

}
