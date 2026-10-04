<?php
/**
 * Navigation helpers.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_nav_anchor_urls( $atts ) {
	if ( ! empty( $atts['href'] ) && 0 === strpos( $atts['href'], '#' ) && ! is_front_page() ) {
		$atts['href'] = trailingslashit( home_url( '/' ) ) . $atts['href'];
	}
	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'zaec_nav_anchor_urls' );

function zaec_primary_menu_fallback() {
	$items = array(
		'Za koga radimo' => 'za-koga',
		'Cijene'         => 'cijene',
		'Radovi'         => 'radovi',
		'Pitanja'        => 'faq',
	);
	foreach ( $items as $label => $anchor ) {
		printf( '<a href="%1$s">%2$s</a>', esc_url( zaec_home_anchor( $anchor ) ), esc_html( $label ) );
	}
}

function zaec_mobile_menu_fallback() {
	zaec_primary_menu_fallback();
	printf( '<a class="mm-cta" href="%1$s">%2$s</a>', esc_url( zaec_home_anchor( 'upit' ) ), esc_html__( 'Upit', 'zaec' ) );
}

class ZAEC_Anchor_Walker_Nav_Menu extends Walker_Nav_Menu {
	public function start_lvl( &$output, $depth = 0, $args = null ) {}
	public function end_lvl( &$output, $depth = 0, $args = null ) {}
	public function end_el( &$output, $data_object, $depth = 0, $args = null ) {}
	public function start_el( &$output, $data_object, $depth = 0, $args = null, $current_object_id = 0 ) {
		$menu_item = $data_object;
		$atts = array(
			'href'   => ! empty( $menu_item->url ) ? $menu_item->url : '',
			'target' => ! empty( $menu_item->target ) ? $menu_item->target : '',
			'rel'    => ! empty( $menu_item->xfn ) ? $menu_item->xfn : '',
		);
		$atts = apply_filters( 'nav_menu_link_attributes', $atts, $menu_item, $args, $depth );
		$attributes = '';
		foreach ( $atts as $attr => $value ) {
			if ( '' !== $value ) {
				$attributes .= ' ' . $attr . '="' . ( 'href' === $attr ? esc_url( $value ) : esc_attr( $value ) ) . '"';
			}
		}
		$title = apply_filters( 'the_title', $menu_item->title, $menu_item->ID );
		$output .= '<a' . $attributes . '>' . esc_html( $title ) . '</a>';
	}
}
