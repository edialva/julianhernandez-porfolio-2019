<?php

require_once('vendor/autoload.php');

use Pug\Pug;

$options = [
  'paths' => [
    '/Users/julian1729/Documents/LOCAL_SITES/julianhernandez2019/wp-content/themes/julianhernandez/views/',
  ],
  // 'expressionLanguage' => 'php',
];

$pug = new Pug($options);
