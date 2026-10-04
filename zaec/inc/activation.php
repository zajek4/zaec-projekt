<?php
/**
 * Aktivacija teme: stranice, naslovnica, stranica vodiča, permalinkovi.
 * Postojeće postavke se ne prepisuju (npr. ako je naslovnica već postavljena).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_ensure_page( $path, $title ) {
	$p = get_page_by_path( $path, OBJECT, 'page' );
	if ( $p ) {
		return (int) $p->ID;
	}
	$id = wp_insert_post( array( 'post_type' => 'page', 'post_status' => 'publish', 'post_title' => $title, 'post_name' => $path ), true );
	return is_wp_error( $id ) ? 0 : (int) $id;
}

function zaec_after_switch_theme() {
	update_option( 'zaec_setup_version', ZAEC_VERSION, false );
	// Naslovnica + vodiči (samo ako čitanje još nije podešeno).
	if ( 'page' !== get_option( 'show_on_front' ) || ! (int) get_option( 'page_on_front' ) ) {
		$front = zaec_ensure_page( 'naslovnica', 'Naslovnica' );
		if ( $front ) {
			update_option( 'show_on_front', 'page' );
			update_option( 'page_on_front', $front );
		}
	}
	if ( ! (int) get_option( 'page_for_posts' ) ) {
		$blog = zaec_ensure_page( 'vodici', 'Vodiči' );
		if ( $blog ) {
			update_option( 'page_for_posts', $blog );
		}
	}
	if ( '' === (string) get_option( 'permalink_structure' ) ) {
		update_option( 'permalink_structure', '/%postname%/' );
	}
	zaec_register_projects_cpt();
	zaec_llms_rewrite();
	zaec_seed_landing_pages( true );
	zaec_seed_default_projects();
	zaec_seed_guides( true );
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'zaec_after_switch_theme' );

/** Nadogradnja iste teme (zamjena datoteka) ne okida after_switch_theme — zato i jednom po verziji u adminu. */
function zaec_upgrade_setup() {
	if ( ! current_user_can( 'manage_options' ) || get_option( 'zaec_setup_version' ) === ZAEC_VERSION ) {
		return;
	}
	update_option( 'zaec_setup_version', ZAEC_VERSION, false );
	zaec_after_switch_theme();
}
add_action( 'admin_init', 'zaec_upgrade_setup', 5 );

/** Jednokratni flush nakon nadogradnje teme (nova pravila, npr. /llms.txt). */
function zaec_maybe_flush() {
	if ( get_option( 'zaec_rewrite_version' ) !== ZAEC_VERSION ) {
		flush_rewrite_rules( false );
		update_option( 'zaec_rewrite_version', ZAEC_VERSION, false );
	}
}
add_action( 'init', 'zaec_maybe_flush', 99 );
