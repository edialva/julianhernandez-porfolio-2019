<?php

/**
 * Use with pug to catch printed output and return
 * @param  String $function Function to catch input from
 * @param  array  $args     Arguments to pass to function
 * @return mixed            Function output contents
 */
function jh_output_buffer_contents($function, $args = array()){
  ob_start();
  $function($args);
  $contents = ob_get_contents();
  ob_end_clean();
  return $contents;
}

/**
 * Get current post's custom meta and attach to array
 * @param  array  $data Array to attach data to
 * @return array  Post custom meta
 */
function jh_get_post_meta($postId){
  $custom = get_post_custom($postId);
  $meta = [];
  foreach ($custom as $key => $value) {
    $meta[$key] = $value[0];
  }
  return $meta;
}

/**
 * Get current post's custom meta and attach to array
 * @param  array  $data Array to attach data to
 * @return array  Post custom meta
 */
function jh_post_meta(){
  global $post;
  return jh_get_post_meta($post->ID);
}
