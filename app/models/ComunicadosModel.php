<?php

namespace app\models;

use app\core\Model;
use app\helpers\Pagination;
use app\vo\ComunicadoVO;
use app\vo\UserVO;

class ComunicadosModel extends Model
{

    function __construct()
    {
        $this->table = 'sis_comunicados';
        $this->valueObject = ComunicadoVO::class;
    }

    /**
     * @param array $parans
     * @param int $page
     * @param int $perpage
     * @return Pagination
     */
    static function busca(array $parans = null, $page = 1, $perpage = 10)
    {
        $termos = 'WHERE a.status != 99';
        $places = [];
        $orderby = 'a.status DESC, a.data DESC, a.hora DESC';
        if ($parans) {
            foreach ($parans as $key => $value) {
                if (!isEmpty($value) and !empty($key)) {
                    switch ($key) {
                        case 'id':
                        case 'token':
                        case 'status':
                        case 'user':
                            $termos .= " AND a.{$key} = :{$key}";
                            $places[$key] = $value;
                            break;
                        case 'search':
                            $l = "LIKE CONCAT('%',:{$key},'%')";
                            $termos .= " AND (a.title {$l} OR a.mensagem {$l})";
                            $places[$key] = $value;
                            break;
                    }
                }
            }
        }
        return self::listaPagination("{$termos} ORDER BY {$orderby}", $places, $page, $perpage);
    }

    /**
     * @return ComunicadoVO[]
     */
    static function getComunicados(UserVO $user = null)
    {
        return self::lista('WHERE a.status = 1 AND (a.user = :user OR a.user = 0) ORDER BY a.data DESC, a.hora DESC', [
            'user' => $user ? $user->getId() : 0,
        ]);
    }

}