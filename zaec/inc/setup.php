<?php
/**
 * Theme supports and image sizes.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_theme_setup() {
	load_theme_textdomain( 'zaec', ZAEC_THEME_DIR . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 96, 'width' => 124, 'flex-height' => true, 'flex-width' => true ) );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );

	register_nav_menus(
		array(
			'primary' => __( 'Glavna navigacija', 'zaec' ),
			'footer'  => __( 'Footer navigacija', 'zaec' ),
		)
	);

	add_image_size( 'zaec-card', 960, 640, true );
	add_image_size( 'zaec-hero', 1800, 1125, true );
	add_editor_style( array( 'assets/css/editor.css' ) );
}
add_action( 'after_setup_theme', 'zaec_theme_setup' );

function zaec_content_width() {
	$GLOBALS['content_width'] = 920;
}
add_action( 'after_setup_theme', 'zaec_content_width', 0 );
