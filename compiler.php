<?php

require_once(JH_VENDOR . '/autoload.php');

use Pug\Pug;

$options = [
  'paths' => [
    '/Users/julian1729/Documents/LOCAL_SITES/julianhernandez2019/wp-content/themes/julianhernandez/views/',
  ],
  // 'expressionLanguage' => 'php',
];

return $pug = new Pug($options);
