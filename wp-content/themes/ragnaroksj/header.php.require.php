<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?> style="margin-top:0px !important">
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>

<link rel="stylesheet" href="<?php echo get_bloginfo("template_url");?>/bgstretcher.css" />
<!--script type="text/javascript" src="<?php //echo get_bloginfo("template_url")?>/js/jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="<?php //echo get_bloginfo("template_url");?>/js/bgstretcher.js"></script>
<script type="text/javascript" src="<?php //echo get_bloginfo("template_url");?>/js/jquery.cycle.all.js" ></script>
<script type="text/javascript" src="<?php //echo get_bloginfo("template_url");?>/js/music.js"></script>
<script type="text/javascript" src="<?php //echo get_bloginfo("template_url");?>/js/ragnaroksj.js" ></script-->
<script data-main="<?php echo get_template_directory_uri(); ?>/js/main" src="<?php echo get_bloginfo("template_url");?>/js/require.js" ></script>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<div id="masthead" class="site-header" role="banner">
		<div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></div>
		<div class="nav">
			<div><a href="<?php echo get_bloginfo("url") ?>">HOME</a></div>
			<div><a href="<?php echo get_permalink(2) ?>" >VIDEO</a></div>
			<div><a href="<?php echo get_permalink(80) ?>" >PROFILE</a></div>
		</div>
	<div class="clear"></div>
	</div><!-- #masthead -->

	<div id="main" class="wrapper">