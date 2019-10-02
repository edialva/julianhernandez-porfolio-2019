<?php

require('compiler.php');
require('inc/helpers.php');
$data = require('page-data.php');
global $post;
$data['custom'] = jh_post_meta();

get_header();

echo $pug->renderFile('single-portfolio', $data, $options);

get_footer();
