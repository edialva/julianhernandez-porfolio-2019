<?php

/**
 * Define Constants
 */

define('JH_THEME_DIR', get_template_directory_uri());
define('JH_THEME_PATH', get_template_directory());
define('JH_THEME_ASSETS', JH_THEME_DIR . '/assets');
define('JH_IMAGES', JH_THEME_ASSETS . '/images');
define('JH_SCRIPTS', JH_THEME_ASSETS . '/js');
define('JH_STYLES', JH_THEME_ASSETS . '/css');
define('JH_VENDOR', JH_THEME_PATH . '/vendor');
define('JH_FUNCTIONS', JH_THEME_PATH . '/functions');

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
require(JH_FUNCTIONS . '/custom-post-types.php');
require(JH_FUNCTIONS . '/shortcodes.php');

/**
 * Register Menu
 */
register_nav_menus(
    array('primary-menu' => __('Primary Menu'))
);
