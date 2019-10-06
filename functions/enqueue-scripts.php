<?php

function jh_enqueue_scripts(){

  wp_enqueue_style( 'style', get_stylesheet_uri() );

  wp_enqueue_style('julianhernandez', get_template_directory_uri() . '/assets/css/dist/main.css');

  if(is_singular('portfolio')){
    wp_enqueue_script('single_portfolio', get_template_directory_uri() . '/assets/js/dist/single-portfolio.bundle.js', null, null, true);
  }

  if(is_front_page()){
    wp_enqueue_script('landing_page', get_template_directory_uri() . '/assets/js/dist/landing.bundle.js', null, null, true);
  }

}

add_action('wp_enqueue_scripts', 'jh_enqueue_scripts');
