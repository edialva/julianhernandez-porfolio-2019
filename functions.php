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
 * Theme Support
 */
// Add Thumbnail Support
add_theme_support('post-thumbnails');

/**
 * Functions
 */
require(JH_FUNCTIONS . '/enqueue-scripts.php');
require(JH_FUNCTIONS . '/custom-post-types.php');
require(JH_FUNCTIONS . '/shortcodes.php');

/**
 * Register Menu
 */
register_nav_menus(
    array('primary-menu' => __('Primary Menu'))
);
