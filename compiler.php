<?php

require_once(JH_VENDOR . '/autoload.php');

use Pug\Pug;

$options = [
  'paths' => [
    JH_THEME_PATH . '/views/',
  ]
];

return $pug = new Pug($options);
