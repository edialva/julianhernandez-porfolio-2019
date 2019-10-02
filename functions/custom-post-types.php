<?php

/**
 * Create Custom Post Types
 */

// PORTFOLIO POST TYPE
function portfolio_register(){

  $labels = array(
		'name' => _x('Portfolio', 'post type general name'),
		'singular_name' => _x('Portfolio Item', 'post type singular name'),
		'add_new' => _x('Add New', 'portfolio item'),
		'add_new_item' => __('Add New Portfolio Item'),
		'edit_item' => __('Edit Portfolio Item'),
		'new_item' => __('New Portfolio Item'),
		'view_item' => __('View Portfolio Item'),
		'search_items' => __('Search Portfolio'),
		'not_found' =>  __('Nothing found'),
		'not_found_in_trash' => __('Nothing found in Trash'),
		'parent_item_colon' => ''
  );

	$args = array(
  	'labels' => $labels,
  	'public' => true,
  	'publicly_queryable' => true,
  	'show_ui' => true,
  	'query_var' => true,
  	'rewrite' => true,
  	'capability_type' => 'post',
  	'hierarchical' => false,
  	'menu_position' => null,
  	'supports' => array('title','editor','thumbnail')
  );

  register_post_type('portfolio', $args);

}

add_action('init', 'portfolio_register');

// meta fields

function year_completed(){
  global $post;
  $custom = get_post_custom($post->ID);
  $yearCompleted = $custom["year_completed"][0];
  ?>
  <input name="year_completed" value="<?php echo $yearCompleted; ?>" />
  <?php
}

function role(){
  global $post;
  $custom = get_post_custom($post->ID);
  $year_completed = $custom["role"][0];
  ?>
  <p><input name="role" value="<?php echo $year_completed; ?>" /></p>
  <?php
}

function add_meta_boxes(){

  add_meta_box('year_completed_meta', 'Year Completed', 'year_completed', 'portfolio', 'side', 'low');
  add_meta_box('role_meta', 'Role', 'role', 'portfolio', 'normal', 'low');
  add_meta_box( 'project_logo', 'Portfolio Logo', 'logo', 'portfolio', 'side', 'low');

}

add_action('admin_init', 'add_meta_boxes');

function save_details(){
  global $post;

  update_post_meta($post->ID, "year_completed", $_POST["year_completed"]);
  update_post_meta($post->ID, "role", $_POST["role"]);
}

add_action('save_post', 'save_details');

// register tag taxonomies

//create two taxonomies, genres and techonologies for the post type "tag"
function create_tag_taxonomies()
{
  // Add new taxonomy, NOT hierarchical (like techonologies)
  $labels = array(
    'name' => _x( 'Technologies Used', 'taxonomy general name' ),
    'singular_name' => _x( 'Technology', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Technologies' ),
    'popular_items' => __( 'Popular Technologies' ),
    'all_items' => __( 'All Technologies' ),
    'parent_item' => null,
    'parent_item_colon' => null,
    'edit_item' => __( 'Edit Technology' ),
    'update_item' => __( 'Update Technology' ),
    'add_new_item' => __( 'Add New Technology' ),
    'new_item_name' => __( 'New Technology Name' ),
    'separate_items_with_commas' => __( 'Separate names with commas' ),
    'add_or_remove_items' => __( 'Add or remove technologies' ),
    'choose_from_most_used' => __( 'Choose from the most used techonologies' ),
    'menu_name' => __( 'Technologies' ),
  );

  register_taxonomy('tag','portfolio',array(
    'hierarchical' => false,
    'labels' => $labels,
    'show_ui' => true,
    'update_count_callback' => '_update_post_term_count',
    'query_var' => true,
    'rewrite' => array( 'slug' => 'tag' ),
  ));
}

add_action( 'init', 'create_tag_taxonomies', 0 );
