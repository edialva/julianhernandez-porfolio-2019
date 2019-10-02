<?php

/**
 * Enqueue Scripts
 */
function jh_enqueue_scripts(){

  wp_enqueue_style( 'style', get_stylesheet_uri() );

  wp_enqueue_script('landing_page', get_template_directory_uri() . '/assets/js/dist/landing.bundle.js', null, null, true);

  wp_enqueue_style('julianhernandez', get_template_directory_uri() . '/assets/css/dist/main.css');

  // Enqueue google fonts
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Oswald:300,400,700&display=swap', array('main') );

}

add_action('wp_enqueue_scripts', 'jh_enqueue_scripts');

/**
 * Theme Support
 */
// Add Thumbnail Support
add_theme_support('post-thumbnails');

/**
 * Functions
 */
require('functions/custom-post-types.php');
