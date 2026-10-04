<?php
/**
 * Performanse: bez emoji skripti, bez nepotrebnih oznaka u <head>.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'init',
	static function () {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_action( 'wp_head', 'wp_generator' );
		remove_action( 'wp_head', 'wlwmanifest_link' );
		remove_action( 'wp_head', 'rsd_link' );
		remove_action( 'wp_head', 'wp_shortlink_wp_head' );
	}
);

/** Lazy-load i async dekodiranje za slike u sadržaju. */
add_filter(
	'wp_get_attachment_image_attributes',
	static function ( $attr ) {
		$attr['decoding'] = 'async';
		return $attr;
	}
);
