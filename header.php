<!DOCTYPE html>
<html>
  <head>
    <?php $siteName = get_bloginfo('name'); ?>
    <title><?php echo $siteName; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hey friend! My name is Julian Hernandez, I am full stack developer in Philadelphia. Come check out my portfolio!">
    <meta name="keywords" content="julian hernandez, full stack developer, wordpress, node.js">
    <meta charset="UTF-8">
    <meta name="og:title" content="This is Julian Hernandez">
    <meta property="og:image" content=<?php echo JH_IMAGES . '/julianhernandez_compressed_415x450.jpg' ?> />
    <meta property="og:site_name" content="<?php echo $siteName; ?>" />
    <base href="<?php echo site_url(); ?>/">
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?> >
