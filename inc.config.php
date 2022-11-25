<?php

use app\APP;
use app\core\crud\Conn;
use app\helpers\Cache;
use app\helpers\Seo;
use app\helpers\Session;
use app\modules\admin\Admin;
use app\modules\api\API;
use app\modules\auth\Auth;
use app\modules\cron\Cron;
use app\modules\website\Site;
use app\modules\website2\Site2;
use app\modules\website3\Site3;

include __DIR__ . '/vendor/autoload.php';
include __DIR__ . '/app/boot.inc.php';

Cache::setDirectory(__DIR__ . DIRECTORY_SEPARATOR . '_temp' . DIRECTORY_SEPARATOR . 'cache');
Session::setDirectory(__DIR__ . DIRECTORY_SEPARATOR . '_temp' . DIRECTORY_SEPARATOR . 'session');

$config = [
    'config' => [
        'title' => 'Apostas Online LW',
        'dominio' => '',
        'email' => 'alexsandro.pereira@gmail.com',
        'uri' => 'http://localhost/public_html',
        'api' => '',
        'redes' => [
            'facebook' => '',
            'twitter' => '',
            'instagram' => '',
        ],
        'upload' => [
            'imagens' => 'imagens',
            'arquivos' => 'arquivos',
        ]
    ],
];

$config['modules'] = [
    'site' => null,
    'site1' => ['path' => 'app\\modules\\website', 'class' => Site::class],    
    'entrar' => ['path' => 'app\\modules\\auth', 'class' => Auth::class],
    'cron' => ['path' => 'app\\modules\\cron', 'class' => Cron::class],
    'localizacao' => ['path' => 'app\\modules\\localizacao'],
    'admin' => ['path' => 'app\\modules\\admin', 'class' => Admin::class],
    'cdn' => ['path' => 'app\\modules\\cdn'],
    'notificacoes' => ['path' => 'app\\modules\\notificacoes'],
    'api' => ['path' => 'app\\modules\\api', 'class' => API::class],
];

$config['db'] = [
    'production' => [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'database' => 'bet',
    ],
    'localhost' => [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'database' => 'bet',
    ]
];

// Domínio da aplicação
$domain = str_replace('www.', null, getenv('SERVER_NAME'));

// Configurações por domínio
$config['config']['uri'] = 'http://localhost';
            $config['db']['localhost']['database'] = 'bet';
            $config['config']['upload'] = [
                'imagens' => 'imagens/',
                'arquivos' => 'arquivos/',
            ];

if (!$config['modules']['site'])
    $config['modules']['site'] = $config['modules']['site1'];

Seo::setFavicon('favicon.ico');

// Criando pasta de imagens
if (!file_exists($config['config']['upload']['imagens'])) {
    mkdir($config['config']['upload']['imagens'], 0777, true);
    mkdir($config['config']['upload']['arquivos'], 0777, true);
    copy('imagens/default.jpg', $config['config']['upload']['imagens'] . '/default.jpg');
}

Conn::setConfig($config['db'][IS_LOCAL ? 'localhost' : 'production']);
APP::setModules($config['modules']);
APP::setConfig($config['config']);

return $config;