<?php
/**
 * Landing stranice: automatsko kreiranje, dohvat sadržaja, naslovi i putanja (breadcrumbs).
 * Kompatibilno s v1.x: isti predložak (page-templates/landing.php) i meta ključ _zaec_landing_key.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const ZAEC_LANDING_TEMPLATE = 'page-templates/landing.php';
const ZAEC_LANDING_VERSION  = '2.0.0';

function zaec_landing_key( $post_id = 0 ) {
	$post_id = $post_id ? (int) $post_id : (int) get_queried_object_id();
	if ( ! $post_id || 'page' !== get_post_type( $post_id ) ) {
		return '';
	}
	$key = (string) get_post_meta( $post_id, '_zaec_landing_key', true );
	if ( ! $key ) {
		$path = trim( (string) get_page_uri( $post_id ), '/' );
		if ( isset( zaec_landing_registry()[ $path ] ) ) {
			$key = $path;
		}
	}
	return $key;
}

function zaec_get_landing( $post_id = 0 ) {
	$key = zaec_landing_key( $post_id );
	$reg = zaec_landing_registry();
	if ( ! $key || ! isset( $reg[ $key ] ) ) {
		return null;
	}
	$data        = $reg[ $key ];
	$data['key'] = $key;
	return $data;
}

function zaec_is_landing() {
	return is_page() && null !== zaec_get_landing();
}

function zaec_landing_url( $key ) {
	static $cache = array();
	$key = trim( (string) $key, '/' );
	if ( isset( $cache[ $key ] ) ) {
		return $cache[ $key ];
	}
	$page          = get_page_by_path( $key, OBJECT, 'page' );
	$cache[ $key ] = ( $page && 'publish' === $page->post_status ) ? get_permalink( $page ) : '';
	return $cache[ $key ];
}

function zaec_landing_title( $key ) {
	$reg = zaec_landing_registry();
	return isset( $reg[ $key ]['title'] ) ? $reg[ $key ]['title'] : '';
}

/**
 * Kreira stranice iz registra koje još ne postoje (postojeće se ne diraju).
 * Pokreće se pri aktivaciji teme i jednom po verziji u adminu.
 */
function zaec_seed_landing_pages( $force = false ) {
	if ( ! $force && ! current_user_can( 'edit_pages' ) ) {
		return;
	}
	$done = (string) get_option( 'zaec_landings_version', '0' );
	if ( ! $force && version_compare( $done, ZAEC_LANDING_VERSION, '>=' ) ) {
		return;
	}
	$order = 0;
	foreach ( zaec_landing_registry() as $key => $landing ) {
		$order++;
		$existing = get_page_by_path( $key, OBJECT, 'page' );
		if ( $existing ) {
			// Postojeću stranicu (npr. iz v1.x) samo povežemo s registrom ako još nije.
			if ( ! get_post_meta( $existing->ID, '_zaec_landing_key', true ) && '' === trim( (string) $existing->post_content ) ) {
				update_post_meta( $existing->ID, '_zaec_landing_key', $key );
				update_post_meta( $existing->ID, '_wp_page_template', ZAEC_LANDING_TEMPLATE );
			}
			continue;
		}
		$parent_id = 0;
		if ( ! empty( $landing['parent'] ) ) {
			$parent = get_page_by_path( $landing['parent'], OBJECT, 'page' );
			if ( ! $parent ) {
				continue;
			}
			$parent_id = (int) $parent->ID;
		}
		$segments = explode( '/', $key );
		wp_insert_post(
			array(
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_title'   => $landing['title'],
				'post_name'    => end( $segments ),
				'post_parent'  => $parent_id,
				'post_excerpt' => $landing['description'] ?? '',
				'post_content' => '',
				'menu_order'   => $order,
				'meta_input'   => array(
					'_wp_page_template' => ZAEC_LANDING_TEMPLATE,
					'_zaec_landing_key' => $key,
				),
			),
			true
		);
	}
	zaec_seed_privacy_page();
	update_option( 'zaec_landings_version', ZAEC_LANDING_VERSION, false );
}
add_action( 'admin_init', 'zaec_seed_landing_pages', 20 );

/** Stranica Privatnost (obična stranica sa sadržajem, uređuje se u editoru). */
function zaec_seed_privacy_page() {
	$page = get_page_by_path( 'privatnost', OBJECT, 'page' );
	if ( $page ) {
		if ( ! (int) get_option( 'wp_page_for_privacy_policy' ) ) {
			update_option( 'wp_page_for_privacy_policy', (int) $page->ID );
		}
		return;
	}
	$file    = ZAEC_THEME_DIR . '/inc/seed/privatnost.html';
	$content = file_exists( $file ) ? (string) file_get_contents( $file ) : '';
	$id      = wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => 'Pravila privatnosti',
			'post_name'    => 'privatnost',
			'post_content' => $content,
		),
		true
	);
	if ( ! is_wp_error( $id ) ) {
		update_option( 'wp_page_for_privacy_policy', (int) $id );
	}
}

/** Naslov dokumenta iz registra. */
function zaec_landing_document_title( $title ) {
	if ( zaec_is_seo_plugin_active() ) {
		return $title;
	}
	$l = zaec_get_landing();
	if ( $l && ! empty( $l['seo_title'] ) ) {
		return $l['seo_title'];
	}
	return $title;
}
add_filter( 'pre_get_document_title', 'zaec_landing_document_title', 20 );

/** Putanja (breadcrumbs) za trenutnu stranicu: lista [naziv, url]. */
function zaec_breadcrumbs() {
	$c = array( array( 'Naslovnica', home_url( '/' ) ) );
	if ( is_front_page() ) {
		return array();
	}
	if ( is_page() ) {
		$id  = get_queried_object_id();
		$anc = array_reverse( get_post_ancestors( $id ) );
		foreach ( $anc as $a ) {
			$c[] = array( get_the_title( $a ), get_permalink( $a ) );
		}
		$c[] = array( get_the_title( $id ), get_permalink( $id ) );
	} elseif ( is_singular( 'projekti' ) ) {
		$c[] = array( 'Radovi', get_post_type_archive_link( 'projekti' ) );
		$c[] = array( get_the_title(), get_permalink() );
	} elseif ( is_post_type_archive( 'projekti' ) ) {
		$c[] = array( 'Radovi', get_post_type_archive_link( 'projekti' ) );
	} elseif ( is_singular( 'post' ) ) {
		$posts_page = (int) get_option( 'page_for_posts' );
		if ( $posts_page ) {
			$c[] = array( get_the_title( $posts_page ), get_permalink( $posts_page ) );
		}
		$c[] = array( get_the_title(), get_permalink() );
	} elseif ( is_home() ) {
		$posts_page = (int) get_option( 'page_for_posts' );
		$c[]        = array( $posts_page ? get_the_title( $posts_page ) : 'Vodiči', $posts_page ? get_permalink( $posts_page ) : home_url( '/' ) );
	} elseif ( is_category() || is_tag() ) {
		$c[] = array( single_term_title( '', false ), get_term_link( get_queried_object() ) );
	}
	return $c;
}

function zaec_render_breadcrumbs( $class = 'crumbs' ) {
	$c = zaec_breadcrumbs();
	if ( count( $c ) < 2 ) {
		return;
	}
	echo '<nav class="' . esc_attr( $class ) . '" aria-label="Putanja"><ol>';
	$last = count( $c ) - 1;
	foreach ( $c as $i => $item ) {
		echo '<li>';
		if ( $i < $last ) {
			echo '<a href="' . esc_url( $item[1] ) . '">' . esc_html( $item[0] ) . '</a>';
		} else {
			echo '<span aria-current="page">' . esc_html( $item[0] ) . '</span>';
		}
		echo '</li>';
	}
	echo '</ol></nav>';
}

/** Djelatnosti iz registra (za tabove na naslovnici, forme i rešetke). */
function zaec_industries() {
	$out = array();
	foreach ( zaec_landing_registry() as $key => $l ) {
		if ( 'industry' === ( $l['type'] ?? '' ) ) {
			$l['key'] = $key;
			$out[]    = $l;
		}
	}
	usort( $out, static fn( $a, $b ) => $a['prop'] <=> $b['prop'] );
	return $out;
}

/** Usluge iz registra. */
function zaec_services() {
	$out = array();
	$i   = 0;
	foreach ( zaec_landing_registry() as $key => $l ) {
		if ( 'service' === ( $l['type'] ?? '' ) ) {
			$l['key']  = $key;
			$l['code'] = 'U.' . zaec_pad( ++$i );
			$out[]     = $l;
		}
	}
	return $out;
}

/** Ikona za uslugu (kartice). */
function zaec_service_icon( $key ) {
	$map = array(
		'usluge/izrada-web-stranica'          => 'widget',
		'usluge/webshop'                      => 'cart',
		'usluge/landing-stranice'             => 'target',
		'usluge/seo'                          => 'magnifer',
		'usluge/lokalni-seo'                  => 'map-point',
		'usluge/google-business-profil'       => 'shop',
		'usluge/ai-vidljivost'                => 'chat-round-dots',
		'usluge/ga4-i-pracenje-konverzija'    => 'graph-up',
		'usluge/brzina-web-stranice'          => 'bolt',
		'usluge/odrzavanje-weba'              => 'settings',
	);
	return $map[ $key ] ?? 'widget';
}

/** Kratki opis usluge za kartice. */
function zaec_service_blurb( $key ) {
	$map = array(
		'usluge/izrada-web-stranica'       => 'Poslovni web koji objašnjava, uvjerava i mjeri svaki upit.',
		'usluge/webshop'                   => 'WooCommerce, kartice, dostava i GA4 praćenje prodaje.',
		'usluge/landing-stranice'          => 'Jedna ponuda, jedan gumb — za oglase i kampanje.',
		'usluge/seo'                       => 'Tehnika, sadržaj i struktura koje Google nagrađuje.',
		'usluge/lokalni-seo'               => 'Da vas nađu ljudi iz vašeg grada kad vas trebaju.',
		'usluge/google-business-profil'    => 'Profil koji vas stavlja na kartu — i recenzije.',
		'usluge/ai-vidljivost'             => 'Da vas ChatGPT i Google AI točno opisuju i preporučuju.',
		'usluge/ga4-i-pracenje-konverzija' => 'GA4, GTM i e-commerce praćenje — znajte što donosi posao.',
		'usluge/brzina-web-stranice'       => 'Core Web Vitals i brzina na mobitelu.',
		'usluge/odrzavanje-weba'           => 'Ažuriranja, kopije i izmjene s jasnim opsegom.',
	);
	return $map[ $key ] ?? '';
}
