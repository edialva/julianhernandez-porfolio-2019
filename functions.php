<?php

function output_buffer_contents($function, $args = array()){
  ob_start();
  $function($args);
  $contents = ob_get_contents();
  ob_end_clean();
  return $contents;
}
