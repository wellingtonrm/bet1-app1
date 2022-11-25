<?php

namespace app\modules\admin\controllers\users;

use app\models\HistoricoModel;
use app\modules\admin\Admin;
use Exception;

class euController extends \app\core\Controller
{

    function indexAction()
    {
        $this->view('admin/sys/meu_cadastro', [
            'user' => Admin::getLogged(),
            'title' => 'Meu Perfil',
        ]);
    }

    function atualizarAction()
    {
        try {

            $v = Admin::getLogged();

            # Verificando senha do cadastro
            if ($v->getSenha() != password(inputPost('senha'))) {
                throw new \Exception('Senha incorreta.');
            }

            $v
                ->input('nome')
                ->input('telefone')
                ->input('celular')
                ->input('whatsapp')
                ->input('email');

            # Atualizando senha
            if (inputPost('nsenha')) {
                if (inputPost('nsenha') != inputPost('nsenhar')) {
                    throw new \Exception('Senhas incompatíveis.');
                } else {
                    $v->setSenha(inputPost('nsenha'), true);
                }
            }

            # Salvando
            $v->Save();

            HistoricoModel::add("Alterou os dados do usuário #{$v->getId()}", $v, Admin::getLogged());

            return [
                'message' => 'Dados atualizados com sucesso.',
                'result' => 1,
            ];
        } catch (Exception $ex) {
            return $ex;
        }
    }

}
    