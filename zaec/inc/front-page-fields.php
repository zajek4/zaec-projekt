<?php
/**
 * Native WordPress fields for the homepage business/content layer.
 * No ACF Pro dependency; repeaters are stored as sanitized post meta arrays.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_front_field_groups() {
	return array(
		'Mreža · globus (prva sekcija)' => array(
			'net_kicker'         => array( 'label' => 'Kicker', 'type' => 'text' ),
			'net_title'          => array( 'label' => 'H1', 'type' => 'textarea' ),
			'net_lead'           => array( 'label' => 'Lead', 'type' => 'textarea' ),
			'net_proof'          => array( 'label' => 'Mikro-dokaz', 'type' => 'textarea' ),
			'net_primary_text'   => array( 'label' => 'Primarni CTA — tekst', 'type' => 'text' ),
			'net_primary_url'    => array( 'label' => 'Primarni CTA — URL/anchor', 'type' => 'text' ),
			'net_secondary_text' => array( 'label' => 'Sekundarni CTA — tekst', 'type' => 'text' ),
			'net_secondary_url'  => array( 'label' => 'Sekundarni CTA — URL/anchor', 'type' => 'text' ),
		),
		'Hero' => array(
			'hero_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'hero_title' => array( 'label' => 'H1', 'type' => 'textarea' ),
			'hero_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
			'hero_primary_text' => array( 'label' => 'Primarni CTA — tekst', 'type' => 'text' ),
			'hero_primary_url' => array( 'label' => 'Primarni CTA — URL/anchor', 'type' => 'text' ),
			'hero_secondary_text' => array( 'label' => 'Sekundarni CTA — tekst', 'type' => 'text' ),
			'hero_secondary_url' => array( 'label' => 'Sekundarni CTA — URL/anchor', 'type' => 'text' ),
			'hero_note' => array( 'label' => 'Napomena ispod CTA-a', 'type' => 'text' ),
			'hero_hint' => array( 'label' => '3D hint', 'type' => 'text' ),
		),
		'Za koga gradimo' => array(
			'services_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'services_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'services_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
			'services_note_title' => array( 'label' => 'Google profil — naslov', 'type' => 'text' ),
			'services_note' => array( 'label' => 'Google profil — objašnjenje', 'type' => 'textarea' ),
		),
		'Poznato' => array(
			'poznato_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'poznato_title' => array( 'label' => 'Naslov', 'type' => 'text' ),
			'poznato_bridge' => array( 'label' => 'Prijelazni tekst', 'type' => 'textarea' ),
			'poznato_boundary_kicker' => array( 'label' => 'Iskren odgovor — kicker', 'type' => 'text' ),
			'poznato_boundary_title' => array( 'label' => 'Iskren odgovor — naslov', 'type' => 'text' ),
			'poznato_boundary_text' => array( 'label' => 'Iskren odgovor — tekst', 'type' => 'textarea' ),
		),
		'Metoda' => array(
			'metoda_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'metoda_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'metoda_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'Proces' => array(
			'proces_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'proces_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'proces_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'Mobile-first' => array(
			'ekran_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'ekran_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'ekran_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'Cijene' => array(
			'cijene_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'cijene_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'cijene_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
			'cijene_roi' => array( 'label' => 'Logika isplativosti', 'type' => 'textarea' ),
			'band_kicker' => array( 'label' => 'Poseban opseg — kicker', 'type' => 'text' ),
			'band_title' => array( 'label' => 'Poseban opseg — naslov', 'type' => 'text' ),
			'band_text' => array( 'label' => 'Poseban opseg — tekst', 'type' => 'textarea' ),
			'band_price' => array( 'label' => 'Poseban opseg — cijena/oznaka', 'type' => 'text' ),
			'band_price_meta' => array( 'label' => 'Poseban opseg — meta', 'type' => 'text' ),
			'band_cta' => array( 'label' => 'Poseban opseg — link CTA', 'type' => 'text' ),
			'band_next_cta' => array( 'label' => 'Poseban opseg — sljedeći korak', 'type' => 'text' ),
			'maintenance_kicker' => array( 'label' => 'Održavanje — kicker', 'type' => 'text' ),
			'maintenance_title' => array( 'label' => 'Održavanje — naslov', 'type' => 'text' ),
			'maintenance_lead' => array( 'label' => 'Održavanje — lead', 'type' => 'textarea' ),
		),
		'Stack / Google / Shop' => array(
			'stack_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'stack_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'stack_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'Radovi' => array(
			'radovi_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'radovi_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'radovi_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'Studio' => array(
			'studio_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'studio_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'studio_text' => array( 'label' => 'Tekst', 'type' => 'textarea' ),
		),
		'Recenzije' => array(
			'klijenti_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
'klijenti_title'         => array( 'label' => 'Naslov', 'type' => 'text' ),
			'klijenti_lead'          => array( 'label' => 'Lead', 'type' => 'textarea' ),
		),
		'FAQ' => array(
			'faq_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'faq_title' => array( 'label' => 'Naslov', 'type' => 'text' ),
		),
		'Kontakt' => array(
			'upit_kicker' => array( 'label' => 'Kicker', 'type' => 'text' ),
			'upit_title' => array( 'label' => 'Naslov', 'type' => 'textarea' ),
			'upit_lead' => array( 'label' => 'Lead', 'type' => 'textarea' ),
			'upit_privacy' => array( 'label' => 'Napomena o privatnosti', 'type' => 'textarea' ),
			'call_kicker' => array( 'label' => 'Kartica poziva — kicker', 'type' => 'text' ),
			'call_note' => array( 'label' => 'Kartica poziva — tekst', 'type' => 'textarea' ),
		),
	);
}

function zaec_repeater_schemas() {
	return array(
		'hero_stats' => array( 'title' => 'Hero statistike', 'fixed' => true, 'fields' => array( 'count' => 'Broj', 'suffix' => 'Sufiks', 'label' => 'Opis' ) ),
		'services' => array( 'title' => 'Usluge', 'fixed' => true, 'fields' => array( 'number' => 'Broj', 'title' => 'Naslov', 'text' => 'Tekst', 'layer' => '3D sloj (0–5)' ) ),
		'occupations' => array( 'title' => 'Djelatnosti uz 3D kuću — mora ostati točno 8 redaka', 'fixed' => true, 'fields' => array( 'tab' => 'Tab', 'title' => 'Naslov', 'sub' => 'Opis', 'q' => 'Što web može riješiti / mikrocopy', 'cta' => 'CTA prema upitu', 'activity' => 'Vrijednost djelatnosti u formi' ) ),
		'pain_points' => array( 'title' => 'Poznato — kartice', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'title' => 'Naslov', 'text' => 'Tekst' ) ),
		'method_points' => array( 'title' => 'Metoda — točke', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'title' => 'Naslov', 'text' => 'Tekst' ) ),
		'process_steps' => array( 'title' => 'Proces — koraci', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'title' => 'Naslov', 'text' => 'Tekst', 'meta' => 'Meta' ) ),
		'screen_points' => array( 'title' => 'Mobile-first — točke', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'title' => 'Naslov', 'text' => 'Tekst' ) ),
		'pricing' => array( 'title' => 'Cijene — 2× Predložak + 2× Po nacrtu', 'fixed' => true, 'fields' => array( 'track' => 'Staza (Predložak / Po nacrtu)', 'code' => 'Oznaka', 'name' => 'Naziv', 'price' => 'Cijena', 'meta' => 'Cijena meta', 'tag' => 'Podnaslov', 'badge' => 'Badge', 'featured' => 'Featured (1/0)', 'package' => 'Vrijednost paketa', 'cta' => 'CTA tekst', 'features' => 'Stavke — jedna po retku' ) ),
		'pricing_notes' => array( 'title' => 'Cijene — pravila opsega', 'fixed' => true, 'fields' => array( 'label' => 'Oznaka', 'text' => 'Tekst' ) ),
		'maintenance_plans' => array( 'title' => 'Održavanje — Osnov + Plus', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'name' => 'Naziv', 'price' => 'Cijena', 'meta' => 'Meta', 'tag' => 'Podnaslov', 'features' => 'Stavke — jedna po retku' ) ),
		'maintenance_notes' => array( 'title' => 'Održavanje — napomene i granice', 'fixed' => true, 'fields' => array( 'label' => 'Oznaka', 'text' => 'Tekst' ) ),
		'testimonials' => array( 'title' => 'Recenzije — samo potvrđene izjave', 'fields' => array( 'quote' => 'Izjava', 'name' => 'Ime', 'role' => 'Djelatnost / uloga', 'company' => 'Tvrtka / grad' ) ),
		'trust_stats' => array( 'title' => 'Trust traka — samo potvrđene tvrdnje', 'fixed' => true, 'fields' => array( 'value' => 'Vrijednost', 'label' => 'Opis' ) ),
		'stack_items' => array( 'title' => 'Stack kartice (Google / shop)', 'fixed' => true, 'fields' => array( 'code' => 'Oznaka', 'title' => 'Naslov', 'text' => 'Tekst' ) ),
		'faqs' => array( 'title' => 'FAQ', 'fields' => array( 'question' => 'Pitanje', 'answer' => 'Odgovor' ) ),
	);
}

function zaec_add_front_meta_box( $post ) {
	$front_id = (int) get_option( 'page_on_front' );
	if ( $front_id && ( ! $post instanceof WP_Post || (int) $post->ID !== $front_id ) ) {
		return;
	}
	add_meta_box(
		'zaec-front-content',
		__( 'ZAEC — sadržaj naslovnice', 'zaec' ),
		'zaec_render_front_meta_box',
		'page',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes_page', 'zaec_add_front_meta_box' );

function zaec_render_front_meta_box( $post ) {
	wp_nonce_field( 'zaec_save_front_fields', 'zaec_front_nonce' );
	?>
	<p><strong><?php esc_html_e( 'Ovaj panel se koristi kada je stranica postavljena kao naslovnica.', 'zaec' ); ?></strong> <?php esc_html_e( 'Animacijska koreografija, 3D geometrija, breakpoints i design tokeni namjerno nisu CMS polja.', 'zaec' ); ?></p>
	<div class="zaec-admin-grid">
	<?php foreach ( zaec_front_field_groups() as $group => $fields ) : ?>
		<details class="zaec-admin-group" open>
			<summary><?php echo esc_html( $group ); ?></summary>
			<div class="zaec-admin-group__body">
			<?php foreach ( $fields as $key => $field ) : $value = zaec_front_field( $key, $post->ID ); ?>
				<label class="zaec-admin-field" for="zaec-<?php echo esc_attr( $key ); ?>">
					<span><?php echo esc_html( $field['label'] ); ?></span>
					<?php if ( 'textarea' === $field['type'] ) : ?>
						<textarea id="zaec-<?php echo esc_attr( $key ); ?>" name="zaec_front[<?php echo esc_attr( $key ); ?>]" rows="3"><?php echo esc_textarea( $value ); ?></textarea>
					<?php else : ?>
						<input id="zaec-<?php echo esc_attr( $key ); ?>" type="text" name="zaec_front[<?php echo esc_attr( $key ); ?>]" value="<?php echo esc_attr( $value ); ?>">
					<?php endif; ?>
				</label>
			<?php endforeach; ?>
			</div>
		</details>
	<?php endforeach; ?>
	</div>
	<hr>
	<h3><?php esc_html_e( 'Ponavljajući sadržaj', 'zaec' ); ?></h3>
	<?php foreach ( zaec_repeater_schemas() as $key => $schema ) : zaec_render_repeater( $key, $schema, zaec_front_repeater( $key, $post->ID ) ); endforeach; ?>
	<?php
}

function zaec_render_repeater( $key, $schema, $rows ) {
	$fixed = ! empty( $schema['fixed'] );
	?>
	<details class="zaec-repeater" data-repeater="<?php echo esc_attr( $key ); ?>" data-fixed="<?php echo $fixed ? '1' : '0'; ?>">
		<summary><?php echo esc_html( $schema['title'] ); ?></summary>
		<div class="zaec-repeater__rows">
			<?php foreach ( $rows as $index => $row ) : zaec_render_repeater_row( $key, $schema, $row, $index ); endforeach; ?>
		</div>
		<?php if ( ! $fixed ) : ?><button type="button" class="button zaec-add-row"><?php esc_html_e( 'Dodaj redak', 'zaec' ); ?></button><?php endif; ?>
		<template><?php zaec_render_repeater_row( $key, $schema, array(), '__INDEX__' ); ?></template>
	</details>
	<?php
}

function zaec_render_repeater_row( $key, $schema, $row, $index ) {
	?>
	<div class="zaec-repeater__row">
		<div class="zaec-repeater__fields">
		<?php foreach ( $schema['fields'] as $field_key => $label ) :
			$value = isset( $row[ $field_key ] ) ? $row[ $field_key ] : '';
			$textarea = in_array( $field_key, array( 'text', 'sub', 'q', 'features', 'quote', 'answer', 'tag', 'result' ), true );
			?>
			<label><span><?php echo esc_html( $label ); ?></span>
			<?php if ( $textarea ) : ?>
				<textarea rows="2" name="zaec_repeaters[<?php echo esc_attr( $key ); ?>][<?php echo esc_attr( $index ); ?>][<?php echo esc_attr( $field_key ); ?>]"><?php echo esc_textarea( $value ); ?></textarea>
			<?php else : ?>
				<input type="text" name="zaec_repeaters[<?php echo esc_attr( $key ); ?>][<?php echo esc_attr( $index ); ?>][<?php echo esc_attr( $field_key ); ?>]" value="<?php echo esc_attr( $value ); ?>">
			<?php endif; ?>
			</label>
		<?php endforeach; ?>
		</div>
		<?php if ( empty( $schema['fixed'] ) ) : ?><button type="button" class="button-link-delete zaec-remove-row"><?php esc_html_e( 'Ukloni', 'zaec' ); ?></button><?php endif; ?>
	</div>
	<?php
}

function zaec_save_front_fields( $post_id ) {
	if ( ! isset( $_POST['zaec_front_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zaec_front_nonce'] ) ), 'zaec_save_front_fields' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( wp_is_post_revision( $post_id ) || 'page' !== get_post_type( $post_id ) || ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$groups = zaec_front_field_groups();
	$input  = isset( $_POST['zaec_front'] ) && is_array( $_POST['zaec_front'] ) ? wp_unslash( $_POST['zaec_front'] ) : array();
	foreach ( $groups as $fields ) {
		foreach ( $fields as $key => $field ) {
			if ( ! array_key_exists( $key, $input ) ) {
				continue;
			}
			$value = 'textarea' === $field['type'] ? sanitize_textarea_field( $input[ $key ] ) : sanitize_text_field( $input[ $key ] );
			update_post_meta( $post_id, '_zaec_' . $key, $value );
		}
	}

	$repeaters = isset( $_POST['zaec_repeaters'] ) && is_array( $_POST['zaec_repeaters'] ) ? wp_unslash( $_POST['zaec_repeaters'] ) : array();
	foreach ( zaec_repeater_schemas() as $key => $schema ) {
		if ( ! isset( $repeaters[ $key ] ) || ! is_array( $repeaters[ $key ] ) ) {
			continue;
		}
		$clean_rows = array();
		foreach ( $repeaters[ $key ] as $row ) {
			if ( ! is_array( $row ) ) {
				continue;
			}
			$clean = array();
			$has_content = false;
			foreach ( $schema['fields'] as $field_key => $label ) {
				$value = isset( $row[ $field_key ] ) ? $row[ $field_key ] : '';
				$clean[ $field_key ] = sanitize_textarea_field( $value );
				if ( '' !== trim( $clean[ $field_key ] ) ) {
					$has_content = true;
				}
			}
			if ( $has_content ) {
				$clean_rows[] = $clean;
			}
		}
		if ( 'occupations' === $key ) {
			$clean_rows = array_slice( $clean_rows, 0, 8 );
		}
		update_post_meta( $post_id, '_zaec_' . $key, $clean_rows );
	}
}
add_action( 'save_post_page', 'zaec_save_front_fields' );

function zaec_admin_front_assets( $hook ) {
	if ( ! in_array( $hook, array( 'post.php', 'post-new.php' ), true ) ) {
		return;
	}
	$screen = get_current_screen();
	if ( ! $screen || 'page' !== $screen->post_type ) {
		return;
	}
	$front_id = (int) get_option( 'page_on_front' );
	$post_id  = isset( $_GET['post'] ) ? absint( $_GET['post'] ) : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	if ( $front_id && $post_id !== $front_id ) {
		return;
	}
	wp_enqueue_style( 'zaec-admin-fields', get_theme_file_uri( 'assets/css/admin-fields.css' ), array(), zaec_asset_version( 'assets/css/admin-fields.css' ) );
	wp_enqueue_script( 'zaec-admin-fields', get_theme_file_uri( 'assets/js/admin-fields.js' ), array(), zaec_asset_version( 'assets/js/admin-fields.js' ), true );
}
add_action( 'admin_enqueue_scripts', 'zaec_admin_front_assets' );
