<?php

require('compiler.php');
require('inc/helpers.php');
$data = require('page-data.php');
global $post;
$data['custom'] = jh_post_meta();

// get project technologies
$data['technologies'] = array_map(function($term){
  return $term->name;
}, wp_get_post_terms($post->ID, 'technologies', $args));

// get featured image url
$data['logo_url'] = get_the_post_thumbnail_url($post->ID, 'full');

get_header();

echo $pug->renderFile('single-portfolio', $data, $options);

get_footer();
