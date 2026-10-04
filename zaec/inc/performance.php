<?php
/**
 * Performance-focused defaults.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_disable_emoji_assets() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'zaec_disable_emoji_assets' );

function zaec_front_image_loading( $attr, $attachment, $size ) {
	if ( is_front_page() && 'zaec-hero' === $size ) {
		$attr['loading']       = 'eager';
		$attr['fetchpriority'] = 'high';
	}
	return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', 'zaec_front_image_loading', 10, 3 );
