<?php

require('compiler.php');
$data = require('page-data.php');

get_header();

echo $pug->renderFile('index', $data, $options);

get_footer();
