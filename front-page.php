<?php

require(JH_THEME_PATH . '/compiler.php');
require(JH_THEME_PATH . '/inc/helpers.php');
$data = require('page-data.php');

$portfolioQuery = array(
  'post_type' => 'portfolio',
  'nopaging' => true,
  'orderby' => 'menu_order',
);

$result = new WP_Query($portfolioQuery);
$projects = $result->posts;

$data['projects'] = array();
foreach ($projects as $project) {
  $p = array();
  // get featured image url
  $p['logo_url'] = get_the_post_thumbnail_url($project);
  // get the environment and bg color
  $meta = jh_get_post_meta($project->ID);
  $p['environment'] = $meta['environment'];
  $p['background_color'] = $meta['background_color'];
  $p['permalink'] = get_post_permalink($project->ID);
  $p['title'] = $project->post_title;
  // inject into data
  $data['projects'][$project->post_title] = $p;
}

// get contact form
$data['contact_form'] = do_shortcode('[forminator_form id="25"]');

// get skills
$data['skills'] = get_field('skills', 'option');

$data['social_media_links'] = get_field('social_media', 'option');

get_header();

echo $pug->renderFile('front-page', $data, $options);

get_footer();
