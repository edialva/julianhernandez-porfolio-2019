<?php

require_once(JH_VENDOR . '/autoload.php');

use Pug\Pug;

function pdf_link( $atts ) {

  $pug = require(JH_THEME_PATH . '/compiler.php');

  $vars = shortcode_atts( array(
    'name' => 'PDF File',
    'href' => site_url(),
    'download' => "JulianHernandez",
  ), $atts );

  return $pug->renderFile('inc/download-pdf.pug', $vars);

}

add_shortcode('pdf', 'pdf_link');
