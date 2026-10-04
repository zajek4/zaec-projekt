<?php
/**
 * Vodiči = WordPress objave u kategoriji "Vodiči". Tema jednokratno kreira početne vodiče
 * (inc/seed/guides) — postojeće objave istog sluga se ne diraju.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const ZAEC_GUIDES_VERSION = '2.0.0';

function zaec_guides_manifest() {
	$file = ZAEC_THEME_DIR . '/inc/seed/guides/guides.json';
	return file_exists( $file ) ? (array) json_decode( (string) file_get_contents( $file ), true ) : array();
}

function zaec_seed_guides( $force = false ) {
	if ( ! $force && ! current_user_can( 'publish_posts' ) ) {
		return;
	}
	if ( ! $force && version_compare( (string) get_option( 'zaec_guides_version', '0' ), ZAEC_GUIDES_VERSION, '>=' ) ) {
		return;
	}
	$term = term_exists( 'vodici', 'category' );
	if ( ! $term ) {
		$term = wp_insert_term( 'Vodiči', 'category', array( 'slug' => 'vodici' ) );
	}
	$cat_id = is_array( $term ) ? (int) $term['term_id'] : (int) $term;
	$base   = strtotime( '2026-10-04 09:00:00' );
	foreach ( array_reverse( zaec_guides_manifest() ) as $i => $g ) {
		if ( get_page_by_path( $g['slug'], OBJECT, 'post' ) ) {
			continue;
		}
		$html = (string) file_get_contents( ZAEC_THEME_DIR . '/inc/seed/guides/' . $g['slug'] . '.html' );
		$id   = wp_insert_post(
			array(
				'post_type'     => 'post',
				'post_status'   => 'publish',
				'post_title'    => $g['title'],
				'post_name'     => $g['slug'],
				'post_excerpt'  => $g['description'],
				'post_content'  => $html,
				'post_date'     => gmdate( 'Y-m-d H:i:s', $base + $i * 60 ),
				'post_category' => $cat_id ? array( $cat_id ) : array(),
				'meta_input'    => array(
					'_zaec_read_min' => (int) $g['readMin'],
					'_zaec_kicker'   => $g['kicker'],
					'_zaec_short'    => $g['short'],
				),
			),
			true
		);
	}
	update_option( 'zaec_guides_version', ZAEC_GUIDES_VERSION, false );
}
add_action( 'admin_init', 'zaec_seed_guides', 40 );

/** guide:slug i page:putanja poveznice u sadržaju → stvarni URL-ovi. */
function zaec_resolve_content_links( $content ) {
	if ( false === strpos( $content, 'guide:' ) && false === strpos( $content, 'page:' ) ) {
		return $content;
	}
	return preg_replace_callback(
		'#href="(guide|page):([a-z0-9/_\-]+)(\#[a-z0-9\-]+)?"#i',
		static function ( $m ) {
			$hash = $m[3] ?? '';
			if ( 'guide' === $m[1] ) {
				$p   = get_page_by_path( $m[2], OBJECT, 'post' );
				$url = $p ? get_permalink( $p ) : home_url( '/' . $m[2] . '/' );
			} else {
				$url = zaec_url( $m[2] );
			}
			return 'href="' . esc_url( $url . $hash ) . '"';
		},
		$content
	);
}
add_filter( 'the_content', 'zaec_resolve_content_links', 9 );

/** Procijenjeno vrijeme čitanja. */
function zaec_read_minutes( $post_id = 0 ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	$saved   = (int) get_post_meta( $post_id, '_zaec_read_min', true );
	if ( $saved ) {
		return $saved;
	}
	$words = str_word_count( wp_strip_all_tags( (string) get_post_field( 'post_content', $post_id ) ) );
	return max( 1, (int) round( $words / 200 ) );
}

/** H2 naslovi članka za sadržaj (TOC) — dodaje id-eve ako nedostaju. */
function zaec_add_heading_ids( $content ) {
	if ( ! is_singular( 'post' ) || ! in_the_loop() ) {
		return $content;
	}
	return preg_replace_callback(
		'#<h2(?![^>]*\bid=)([^>]*)>(.*?)</h2>#is',
		static function ( $m ) {
			return '<h2 id="' . esc_attr( sanitize_title( wp_strip_all_tags( $m[2] ) ) ) . '"' . $m[1] . '>' . $m[2] . '</h2>';
		},
		$content
	);
}
add_filter( 'the_content', 'zaec_add_heading_ids', 12 );

function zaec_toc( $post_id = 0 ) {
	$content = (string) get_post_field( 'post_content', $post_id ? $post_id : get_the_ID() );
	preg_match_all( '#<h2([^>]*)>(.*?)</h2>#is', $content, $m, PREG_SET_ORDER );
	$out = array();
	foreach ( $m as $h ) {
		$text  = wp_strip_all_tags( $h[2] );
		$id    = preg_match( '#\bid="([^"]+)"#', $h[1], $idm ) ? $idm[1] : sanitize_title( $text );
		$out[] = array( $text, $id );
	}
	return $out;
}
