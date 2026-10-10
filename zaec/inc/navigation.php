<?php
/**
 * Navigacija: WP izbornik (ako je dodijeljen) ili zadani izbornik iz registra.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Usluge grupirane kao na naslovnici (Izgradnja → Vidljivost → Rast): deset jednakih stavki djelovalo je
 * kao katalog velike agencije. URL-ovi se ne mijenjaju; usluga koja nije ni u jednoj skupini ide u zadnju.
 */
function zaec_nav_service_groups() {
	$by_key = array();
	foreach ( zaec_services() as $s ) {
		$by_key[ $s['key'] ] = array( 'label' => $s['title'], 'url' => zaec_url( $s['key'] ), 'note' => zaec_service_blurb( $s['key'] ) );
	}
	$groups = array();
	foreach ( zaec_service_clusters() as $c ) {
		$items = array();
		foreach ( $c['keys'] as $k ) {
			if ( isset( $by_key[ $k ] ) ) {
				$items[] = $by_key[ $k ];
				unset( $by_key[ $k ] );
			}
		}
		if ( $items ) {
			$groups[] = array( 'label' => $c['name'], 'note' => $c['note'], 'children' => $items );
		}
	}
	if ( $by_key && $groups ) {
		$last = count( $groups ) - 1;
		$groups[ $last ]['children'] = array_merge( $groups[ $last ]['children'], array_values( $by_key ) );
	} elseif ( $by_key ) {
		$groups[] = array( 'label' => 'Usluge', 'note' => '', 'children' => array_values( $by_key ) );
	}
	return $groups;
}

/**
 * Kamo vodi glavni poziv "Pošaljite upit": forma na istoj stranici (naslovnica, Kontakt) ili forma na Kontaktu.
 * Upit preko forme je primarni cilj; telefon je na stranici Kontakt, ne u glavnim pozivima.
 */
function zaec_inquiry_url() {
	if ( is_front_page() ) {
		return '#kontakt';
	}
	$kontakt = zaec_url( 'kontakt' );
	return ( zaec_is_current_url( $kontakt ) ? '' : $kontakt ) . '#upit';
}

/** Zadana struktura navigacije. */
function zaec_nav_items() {
	$posts_page = (int) get_option( 'page_for_posts' );
	return array(
		array( 'label' => 'Usluge', 'url' => zaec_url( 'usluge' ), 'children' => zaec_nav_service_groups() ),
		array( 'label' => 'Djelatnosti', 'url' => zaec_url( 'djelatnosti' ) ),
		array( 'label' => 'Radovi', 'url' => get_post_type_archive_link( 'projekti' ) ?: home_url( '/radovi/' ) ),
		array( 'label' => 'Cijene', 'url' => zaec_url( 'cijene' ) ),
		array( 'label' => 'Vodiči', 'url' => $posts_page ? get_permalink( $posts_page ) : home_url( '/vodici/' ) ),
		array( 'label' => 'O nama', 'url' => zaec_url( 'o-nama' ) ),
		array( 'label' => 'Kontakt', 'url' => zaec_url( 'kontakt' ) ),
	);
}

/** Struktura iz dodijeljenog WP izbornika (ako postoji). */
function zaec_nav_from_menu( $location = 'primary' ) {
	$locations = get_nav_menu_locations();
	if ( empty( $locations[ $location ] ) ) {
		return null;
	}
	$items = wp_get_nav_menu_items( $locations[ $location ] );
	if ( ! $items ) {
		return null;
	}
	$tree = array();
	$map  = array();
	foreach ( $items as $it ) {
		$map[ $it->ID ] = array( 'label' => $it->title, 'url' => $it->url, 'note' => $it->description, 'children' => array() );
	}
	foreach ( $items as $it ) {
		if ( $it->menu_item_parent && isset( $map[ $it->menu_item_parent ] ) ) {
			$map[ $it->menu_item_parent ]['children'][] = &$map[ $it->ID ];
		}
	}
	foreach ( $items as $it ) {
		if ( ! $it->menu_item_parent ) {
			$tree[] = $map[ $it->ID ];
		}
	}
	return $tree;
}

function zaec_nav() {
	$menu = zaec_nav_from_menu();
	return $menu ? $menu : zaec_nav_items();
}

function zaec_is_current_url( $url ) {
	$req  = trailingslashit( strtok( (string) ( $_SERVER['REQUEST_URI'] ?? '/' ), '?' ) ); // phpcs:ignore
	$path = trailingslashit( (string) wp_parse_url( $url, PHP_URL_PATH ) );
	return '/' !== $path && 0 === strpos( $req, $path );
}
