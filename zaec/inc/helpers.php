<?php
/**
 * Shared helpers.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_asset_version( $relative_path ) {
	$file = ZAEC_THEME_DIR . '/' . ltrim( $relative_path, '/' );
	return file_exists( $file ) ? (string) filemtime( $file ) : ZAEC_THEME_VERSION;
}

function zaec_front_page_id() {
	$id = (int) get_option( 'page_on_front' );
	if ( $id > 0 ) {
		return $id;
	}
	return is_singular( 'page' ) ? get_queried_object_id() : 0;
}

function zaec_front_field( $key, $post_id = 0 ) {
	$defaults = zaec_front_defaults();
	$fallback = isset( $defaults[ $key ] ) ? $defaults[ $key ] : '';
	$post_id  = $post_id ? (int) $post_id : zaec_front_page_id();
	if ( ! $post_id ) {
		return $fallback;
	}
	$value = get_post_meta( $post_id, '_zaec_' . $key, true );
	return '' !== $value ? $value : $fallback;
}

function zaec_front_repeater( $key, $post_id = 0 ) {
	$defaults = zaec_front_repeater_defaults();
	$fallback = isset( $defaults[ $key ] ) ? $defaults[ $key ] : array();
	$post_id  = $post_id ? (int) $post_id : zaec_front_page_id();
	if ( ! $post_id ) {
		return $fallback;
	}
	$value = get_post_meta( $post_id, '_zaec_' . $key, true );
	return is_array( $value ) && ! empty( $value ) ? $value : $fallback;
}

function zaec_option( $key, $fallback = '' ) {
	$options = get_option( 'zaec_options', array() );
	return isset( $options[ $key ] ) && '' !== $options[ $key ] ? $options[ $key ] : $fallback;
}

function zaec_phone_href( $phone ) {
	return preg_replace( '/[^+0-9]/', '', (string) $phone );
}

function zaec_home_anchor( $anchor ) {
	$anchor = '#' . ltrim( (string) $anchor, '#' );
	// Off-front: home URL + hash (ne path "/#id" kao segment).
	return is_front_page() ? $anchor : trailingslashit( home_url( '/' ) ) . $anchor;
}

function zaec_primary_category( $post_id = 0 ) {
	$post_id    = $post_id ? (int) $post_id : get_the_ID();
	$categories = get_the_category( $post_id );
	return ! empty( $categories ) ? $categories[0] : null;
}


function zaec_brand_mark( $class = 'brand-mark' ) {
	$logo_id = (int) get_theme_mod( 'custom_logo' );
	if ( $logo_id ) {
		echo wp_get_attachment_image(
			$logo_id,
			'full',
			false,
			array(
				'class'    => esc_attr( $class ),
				'alt'      => '',
				'decoding' => 'async',
			)
		); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Core image API returns escaped markup.
		return;
	}
	printf( '<svg class="%1$s" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><use href="#zMon"/></svg>', esc_attr( $class ) );
}

function zaec_svg_icon( $id, $class = '' ) {
	printf(
		'<svg class="%1$s" aria-hidden="true" focusable="false"><use href="#%2$s"></use></svg>',
		esc_attr( $class ),
		esc_attr( $id )
	);
}

function zaec_is_seo_plugin_active() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) || defined( 'AIOSEO_VERSION' );
}
