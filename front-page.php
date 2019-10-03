<?php

require('compiler.php');
$data = require('page-data.php');

get_header();

echo $pug->renderFile('front-page', $data, $options);

get_footer();
