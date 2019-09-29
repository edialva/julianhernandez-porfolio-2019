<?php

/**
 * Use with pug to catch printed output and return
 * @param  String $function Function to catch input from
 * @param  array  $args     Arguments to pass to function
 * @return mixed            Function output contents
 */
function output_buffer_contents($function, $args = array()){
  ob_start();
  $function($args);
  $contents = ob_get_contents();
  ob_end_clean();
  return $contents;
}
