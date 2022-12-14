<?php

namespace app\models\helpers;

use app\core\Model;
use app\helpers\Pagination;
use app\vo\helpers\OptionVO;

class OptionsModel extends Model
{

    public function __construct()
    {
        $this->table = 'sis_options';
        $this->valueObject = OptionVO::class;
    }

    /**
     *
     * @param string $ref
     * @param string $orderby
     * @param int $setValue
     * @return string HTML
     */
    static function options(string $ref = null, string $orderby = null, $setValue = 0, int $refid = 0)
    {
        return self::optionsByRef($ref, $orderby, $setValue, $refid);
    }

    /**
     * Retorna a lista de options para select
     * @param string $Ref
     * @param string $Ordem
     * @param int $setValue
     * @param int $refId
     * @return string HTML
     */
    static function optionsByRef($Ref = null, $OrderBY = null, $setValue = 0, $refId = 0)
    {
        $html = '';
        foreach (self::listByRef($Ref, 1, $OrderBY, $refId) as $v) {
            $html .= formOption($v->getTitle(), $v->getId(), $v->getId() == $setValue);
        }
        return $html;
    }

    /**
     * Busca Complexa
     * @param array $parans
     * @param int $page
     * @param int $forPage
     * @return Pagination
     */
    function busca(array $parans = null, $page = 1, $forPage = 20)
    {
        $termos = 'WHERE a.status != 99';
        $places = [];
        if ($parans) {
            foreach ($parans as $key => $value) {
                if (!isEmpty($value) and !is_int($key)) {
                    switch (strtolower($key)) {
                        case 'urlamigavel':
                        case 'ref':
                        case 'refid':
                        case 'status':
                        case 'id':
                            $termos .= " AND a.{$key} = :{$key}";
                            $places[$key] = $value;
                            break;
                    }
                }
            }
        }
        return self::listaPagination("{$termos} ORDER BY a.ordem ASC, a.title ASC", $places, $page, $forPage);
    }

    /**
     * Reorganiza a Ordem pela refer??ncia
     * @param string $Ref
     * @return boolean
     */
    function organizaOrdemReferencia($Ref)
    {
        foreach ($this->listByRef($Ref) as $i => $v) {
            self::update($this->table, ['ordem' => (int)$i + 1], 'WHERE `id` = :id LIMIT 1', ['id' => (int)$v->getId()]);
        }
        return true;
    }

    /**
     * Lista pela refer??ncia
     * @param string $ref
     * @param string $orderby
     * @param int $refId
     * @return OptionVO[]
     */
    static function listByRef(string $ref, int $status = 1, string $orderby = null, int $refId = 0)
    {
        $termos = 'WHERE a.ref = :ref AND a.refid = :refid AND (:status IS NULL OR a.status = :status) ORDER BY ';

        $orderby = $orderby ? $orderby : 'a.ordem ASC, a.title ASC';

        $places = [
            'ref' => $ref,
            'refid' => $refId,
            'status' => $status,
        ];

        return self::lista($termos . $orderby, $places, false, true);
    }

    /**
     * Retorna o t??tulo pelo ID
     * @param int $ID
     * @return string|null
     */
    function titleById($ID)
    {
        $vo = $this->getByLabel('id', $ID);
        return $vo instanceof OptionVO ? $vo->getTitle() : null;
    }

    /**
     * Last Ordem By Ref
     * @param string $Ref
     * @return int
     */
    function getLastOrdem($Ref)
    {
        /** @var OptionVO $v */
        foreach (self::lista('WHERE a.ref = :ref ORDER BY a.ordem DESC LIMIT 1', ['ref' => $Ref]) as $v) {
            return $v->getOrdem() + 1;
        }
        return 1;
    }

}
    