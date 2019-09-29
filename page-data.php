<?php

require_once('inc/helpers.php');

$data = array(

  'BASE_URI' => site_url('/'),

  'bloginfo' => [
    'name' => get_bloginfo('name'),
    'description' => get_bloginfo('description'),
    'charset' => get_bloginfo('charset'),
    'language' => get_bloginfo('language'),
  ],

  'wp_title' => wp_title('', false),
  'wp_footer' => output_buffer_contents(wp_footer),

  'template_directory_uri' => get_template_directory_uri(),
  'stylesheet_url' => get_bloginfo('stylesheet_url'),
  'home_url' => esc_url( home_url( '/' ) ),
  'blog_title' => get_bloginfo(),

  'pages' => get_pages(),
  'categories' => get_categories('show_count=0&title_li=&hide_empty=0&exclude=1')

);

// To compensate for WordPress not providing a url for each post
foreach ( $data['pages'] as $page ) {
  $page->permalink = get_permalink($page->ID);
}

// To compensate for WordPress not providing a url for each category
foreach ( $data['categories'] as $category ) {
  $category->link = get_category_link( $category->term_id );
}

return $data;
