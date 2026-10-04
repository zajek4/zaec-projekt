<?php
/**
 * Projekti / Radovi (CPT kompatibilan s v1.x) + polja za dokaze (izjava, metrika, screenshot).
 * Dokaz (metrika i screenshot) prikazuje se samo kad je označen kao potvrđen i odobren za objavu.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_register_projects_cpt() {
	register_post_type(
		'projekti',
		array(
			'labels'             => array(
				'name'               => 'Projekti',
				'singular_name'      => 'Projekt',
				'menu_name'          => 'Projekti',
				'add_new'            => 'Dodaj projekt',
				'add_new_item'       => 'Dodaj novi projekt',
				'edit_item'          => 'Uredi projekt',
				'view_item'          => 'Pogledaj projekt',
				'all_items'          => 'Svi projekti',
				'archives'           => 'Radovi',
				'featured_image'     => 'Naslovna slika projekta',
				'set_featured_image' => 'Postavi naslovnu sliku',
			),
			'public'             => true,
			'show_in_rest'       => true,
			'menu_icon'          => 'dashicons-portfolio',
			'has_archive'        => 'radovi',
			'rewrite'            => array( 'slug' => 'radovi', 'with_front' => false ),
			'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes' ),
			'menu_position'      => 21,
		)
	);
}
add_action( 'init', 'zaec_register_projects_cpt' );

function zaec_project_fields() {
	return array(
		'code'           => array( 'Oznaka projekta', 'text', 'npr. DGR.03' ),
		'service'        => array( 'Usluga / tip projekta', 'text', 'Web stranica · restoran' ),
		'location'       => array( 'Lokacija', 'text', 'Osijek' ),
		'year'           => array( 'Godina', 'text', '2026' ),
		'technologies'   => array( 'Tehnologije', 'text', 'WordPress, GA4, schema' ),
		'website_url'    => array( 'URL projekta (live)', 'url', 'https://…' ),
		'challenge'      => array( 'Problem / izazov', 'textarea', 'S čime je klijent došao — bez preuveličavanja.' ),
		'approach'       => array( 'Razmišljanje', 'textarea', 'Kako smo pristupili problemu.' ),
		'solution'       => array( 'Rješenje', 'textarea', 'Što je konkretno napravljeno.' ),
		'result'         => array( 'Ishod (samo potvrđen)', 'textarea', 'Upisati samo ako je stvarno potvrđen.' ),
		'quote'          => array( 'Izjava klijenta', 'textarea', 'Doslovno, uz dopuštenje klijenta.' ),
		'quote_author'   => array( 'Izjava — ime', 'text', 'npr. Dominik' ),
		'quote_role'     => array( 'Izjava — uloga / tvrtka', 'text', 'npr. vlasnik, Daj Gric' ),
		'metric_label'   => array( 'Metrika — naziv', 'text', 'npr. Upiti mjesečno' ),
		'metric_before'  => array( 'Metrika — prije', 'text', 'npr. 12' ),
		'metric_after'   => array( 'Metrika — poslije', 'text', 'npr. 31' ),
		'proof_image'    => array( 'Screenshot dokaza (URL iz Media Library)', 'url', 'GA4, Search Console, prihod webshopa…' ),
		'proof_note'     => array( 'Izvor i razdoblje', 'text', 'npr. GA4, ožujak–svibanj 2026. naspram istog razdoblja 2025.' ),
		'image'          => array( 'Slika (putanja u temi, ako nema naslovne)', 'text', '' ),
	);
}

function zaec_add_project_meta_box() {
	add_meta_box( 'zaec-project-details', 'ZAEC — podaci projekta i dokazi', 'zaec_render_project_meta_box', 'projekti', 'normal', 'high' );
}
add_action( 'add_meta_boxes_projekti', 'zaec_add_project_meta_box' );

function zaec_render_project_meta_box( $post ) {
	wp_nonce_field( 'zaec_save_project', 'zaec_project_nonce' );
	echo '<p>Naslov, priču i naslovnu sliku uređujte standardnim poljima. <strong>Metrika i screenshot prikazuju se javno samo ako je označeno „Potvrđeno”.</strong> Ne objavljujte rezultate bez pisanog dopuštenja klijenta.</p><table class="form-table" role="presentation"><tbody>';
	foreach ( zaec_project_fields() as $key => $f ) {
		$v  = get_post_meta( $post->ID, '_zaec_project_' . $key, true );
		$id = 'zaec-project-' . $key;
		echo '<tr><th scope="row"><label for="' . esc_attr( $id ) . '">' . esc_html( $f[0] ) . '</label></th><td>';
		if ( 'textarea' === $f[1] ) {
			echo '<textarea class="large-text" rows="3" id="' . esc_attr( $id ) . '" name="zaec_project[' . esc_attr( $key ) . ']" placeholder="' . esc_attr( $f[2] ) . '">' . esc_textarea( $v ) . '</textarea>';
		} else {
			echo '<input class="regular-text" type="' . esc_attr( $f[1] ) . '" id="' . esc_attr( $id ) . '" name="zaec_project[' . esc_attr( $key ) . ']" value="' . esc_attr( $v ) . '" placeholder="' . esc_attr( $f[2] ) . '">';
		}
		echo '</td></tr>';
	}
	$checks = array(
		'featured'       => 'Istakni na naslovnici',
		'proof_verified' => 'Potvrđeno: metrika i screenshot su stvarni i klijent je odobrio objavu',
	);
	foreach ( $checks as $k => $label ) {
		echo '<tr><th scope="row">' . esc_html( 'featured' === $k ? 'Naslovnica' : 'Dokaz' ) . '</th><td><label><input type="checkbox" name="zaec_project_' . esc_attr( $k ) . '" value="1" ' . checked( '1', get_post_meta( $post->ID, '_zaec_project_' . $k, true ), false ) . '> ' . esc_html( $label ) . '</label></td></tr>';
	}
	echo '</tbody></table>';
}

function zaec_save_project_meta( $post_id ) {
	if ( ! isset( $_POST['zaec_project_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zaec_project_nonce'] ) ), 'zaec_save_project' ) ) {
		return;
	}
	if ( ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) || wp_is_post_revision( $post_id ) || ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	$in = isset( $_POST['zaec_project'] ) && is_array( $_POST['zaec_project'] ) ? wp_unslash( $_POST['zaec_project'] ) : array();
	foreach ( zaec_project_fields() as $key => $f ) {
		$v = $in[ $key ] ?? '';
		$v = 'url' === $f[1] ? esc_url_raw( $v ) : ( 'textarea' === $f[1] ? sanitize_textarea_field( $v ) : sanitize_text_field( $v ) );
		'' === $v ? delete_post_meta( $post_id, '_zaec_project_' . $key ) : update_post_meta( $post_id, '_zaec_project_' . $key, $v );
	}
	foreach ( array( 'featured', 'proof_verified' ) as $k ) {
		update_post_meta( $post_id, '_zaec_project_' . $k, isset( $_POST[ 'zaec_project_' . $k ] ) ? '1' : '0' );
	}
}
add_action( 'save_post_projekti', 'zaec_save_project_meta' );

/** Normalizirani podaci projekta. */
function zaec_get_project_data( $post_id ) {
	$post_id = absint( $post_id );
	$m       = static fn( $k ) => (string) get_post_meta( $post_id, '_zaec_project_' . $k, true );
	$image   = '';
	if ( has_post_thumbnail( $post_id ) ) {
		$image = (string) get_the_post_thumbnail_url( $post_id, 'zaec-hero' );
	} elseif ( $m( 'image' ) ) {
		$rel = str_replace( 'assets/images/projects/', 'assets/img/projects/', $m( 'image' ) );
		$image = file_exists( ZAEC_THEME_DIR . '/' . $rel ) ? ZAEC_THEME_URI . '/' . $rel : '';
	}
	$verified = '1' === $m( 'proof_verified' );
	return array(
		'id'          => $post_id,
		'code'        => $m( 'code' ),
		'title'       => get_the_title( $post_id ),
		'excerpt'     => get_the_excerpt( $post_id ),
		'service'     => $m( 'service' ),
		'location'    => $m( 'location' ),
		'year'        => $m( 'year' ),
		'technologies'=> $m( 'technologies' ),
		'website_url' => $m( 'website_url' ),
		'result'      => $m( 'result' ),
		'challenge'   => $m( 'challenge' ),
		'approach'    => $m( 'approach' ),
		'solution'    => $m( 'solution' ),
		'quote'       => $m( 'quote' ),
		'quote_author'=> $m( 'quote_author' ),
		'quote_role'  => $m( 'quote_role' ),
		'verified'    => $verified,
		'metric'      => $verified && $m( 'metric_label' ) ? array( $m( 'metric_label' ), $m( 'metric_before' ), $m( 'metric_after' ) ) : null,
		'proof_image' => $verified ? $m( 'proof_image' ) : '',
		'proof_note'  => $verified ? $m( 'proof_note' ) : '',
		'image'       => $image,
		'permalink'   => get_permalink( $post_id ),
	);
}

/** Projekti za naslovnicu/sekcije: istaknuti prvo, zatim najnoviji. */
function zaec_get_projects( $limit = 3 ) {
	$args = array(
		'post_type'           => 'projekti',
		'post_status'         => 'publish',
		'posts_per_page'      => max( 1, absint( $limit ) ),
		'ignore_sticky_posts' => true,
		'orderby'             => array( 'menu_order' => 'ASC', 'date' => 'DESC' ),
		'fields'              => 'ids',
		'meta_query'          => array( array( 'key' => '_zaec_project_featured', 'value' => '1' ) ),
	);
	$ids  = get_posts( $args );
	if ( ! $ids ) {
		unset( $args['meta_query'] );
		$ids = get_posts( $args );
	}
	return array_map( 'zaec_get_project_data', $ids );
}

function zaec_project_archive_order( $q ) {
	if ( ! is_admin() && $q->is_main_query() && $q->is_post_type_archive( 'projekti' ) ) {
		$q->set( 'posts_per_page', 12 );
		$q->set( 'orderby', array( 'menu_order' => 'ASC', 'date' => 'DESC' ) );
	}
}
add_action( 'pre_get_posts', 'zaec_project_archive_order' );

/** Stvarni projekti (iz v1.x) — seed samo ako projekata još nema. */
function zaec_default_project_seed_data() {
	return array(
		array(
			'code' => 'CZA.01', 'title' => 'Centar za autizam Osijek', 'service' => 'Web stranica · ustanova', 'location' => 'Osijek',
			'technologies' => 'UX · sadržajna struktura · responsive', 'website_url' => 'https://cza-os.hr/', 'image' => 'assets/img/projects/cza-osijek.png',
			'result' => 'Lakši i pregledniji način prikazivanja objava, programa i pomoći za djecu.',
			'challenge' => 'Mnogo različitih posjetitelja — roditelji, učenici, stručnjaci i lokalna zajednica — i puno sadržaja koji svatko od njih treba pronaći bez lutanja.',
			'approach' => 'Sadržaj složiti prema pitanjima posjetitelja, a ne prema unutarnjoj organizaciji ustanove. Važna informacija ne smije ostati skrivena iza općenite priče.',
			'solution' => 'Jasne cjeline: o Centru, programi, terapijski postupci, projekti, novosti, galerija i kontakt — pregledno na mobitelu i računalu.',
			'excerpt' => 'Jasna digitalna prezentacija Centra, programa, projekata, novosti i kontakta.',
			'content' => "Web stranica Centra za autizam Osijek okuplja ono što roditelji, učenici i lokalna zajednica trebaju pronaći: informacije o Centru, programe, terapijske postupke, projekte, novosti, galeriju i kontakt.\n\nSadržaj je organiziran tako da važna informacija ne ostane skrivena iza općenite priče.",
		),
		array(
			'code' => 'EKO.02', 'title' => 'Eurokontrola', 'service' => 'Web stranica · B2B', 'location' => 'Osijek',
			'technologies' => 'UX · usluge · sadržajna struktura', 'website_url' => 'https://eurokontrola.hr/', 'image' => 'assets/img/projects/eurokontrola.png',
			'result' => 'Ozbiljan identitet i jasnije objašnjeno što Eurokontrola radi.',
			'challenge' => 'Stručne usluge kontrole kvalitete i laboratorijskih analiza moraju biti razumljive i kupcu koji nije stručnjak.',
			'approach' => 'Razdvojiti usluge u razumljive cjeline i skratiti put od dolaska na web do prave usluge i kontakta.',
			'solution' => 'Struktura usluga kontrole kvalitete i laboratorijskih analiza, ozbiljan vizualni identitet i jasan put prema kontaktu.',
			'excerpt' => 'Kontrola kvalitete i laboratorijske analize hrane, sirovina i poljoprivrednih proizvoda.',
			'content' => "Web stranica Eurokontrole razdvaja usluge kontrole kvalitete i laboratorijskih analiza u razumljive cjeline.\n\nPosjetitelj brzo dolazi do relevantne usluge i nastavlja prema kontaktu bez prolaska kroz nevažan sadržaj.",
		),
		array(
			'code' => 'DGR.03', 'title' => 'Daj Gric', 'service' => 'Web stranica · restoran i catering', 'location' => 'Bilje',
			'technologies' => 'UX · meni · narudžbe · catering', 'website_url' => 'https://dajgric.com/', 'image' => 'assets/img/projects/daj-gric.jpg',
			'result' => 'Veći promet i prepoznatljivost hrane u lokalnom mjestu.',
			'challenge' => 'Gost restorana brze hrane treba odmah znati što je na meniju, gdje je restoran i kako naručiti — a catering kupac što dobiva za veći događaj.',
			'approach' => 'Informacije ispred ukrasa. Svaki ekran vodi prema narudžbi ili kontaktu, bez prolaska kroz nevažan sadržaj.',
			'solution' => 'Meni, narudžbe, lokacija, catering ponuda i galerija — brzo i konkretno, prvo za mobitel.',
			'quote' => 'Stvarno sam zadovoljan, svaka čast. Promet je veći nego prije.', 'quote_author' => 'Dominik', 'quote_role' => 'Daj Gric, Bilje',
			'excerpt' => 'Restoran brze hrane i catering: meni, narudžbe, lokacija i galerija.',
			'content' => "Daj Gric treba biti brz i konkretan: što je na meniju, gdje se restoran nalazi, kako naručiti i što catering nudi za veće događaje.\n\nStranica te informacije stavlja ispred ukrasa i vodi posjetitelja prema narudžbi ili kontaktu.",
		),
	);
}

function zaec_seed_default_projects() {
	if ( get_option( 'zaec_project_seed_version', '' ) ) {
		zaec_backfill_project_quotes();
		return;
	}
	$existing = get_posts( array( 'post_type' => 'projekti', 'post_status' => 'any', 'posts_per_page' => 1, 'fields' => 'ids' ) );
	if ( $existing ) {
		update_option( 'zaec_project_seed_version', 'skipped-existing', false );
		zaec_backfill_project_quotes();
		return;
	}
	foreach ( zaec_default_project_seed_data() as $i => $p ) {
		$id = wp_insert_post( array( 'post_type' => 'projekti', 'post_status' => 'publish', 'post_title' => $p['title'], 'post_excerpt' => $p['excerpt'], 'post_content' => $p['content'], 'menu_order' => $i ), true );
		if ( is_wp_error( $id ) ) {
			continue;
		}
		foreach ( array( 'code', 'service', 'location', 'technologies', 'website_url', 'image', 'result', 'challenge', 'approach', 'solution', 'quote', 'quote_author', 'quote_role' ) as $k ) {
			if ( ! empty( $p[ $k ] ) ) {
				update_post_meta( $id, '_zaec_project_' . $k, $p[ $k ] );
			}
		}
		update_post_meta( $id, '_zaec_project_featured', '1' );
	}
	update_option( 'zaec_project_seed_version', '2.0.0', false );
}
add_action( 'admin_init', 'zaec_seed_default_projects', 30 );

/** v2: postojećem projektu Daj Gric dodaj potvrđenu izjavu ako je još nema. */
function zaec_backfill_project_quotes() {
	if ( get_option( 'zaec_quotes_backfill' ) ) {
		return;
	}
	foreach ( zaec_default_project_seed_data() as $p ) {
		if ( empty( $p['quote'] ) ) {
			continue;
		}
		$ids = get_posts( array( 'post_type' => 'projekti', 'post_status' => 'any', 'posts_per_page' => 1, 'fields' => 'ids', 'meta_key' => '_zaec_project_website_url', 'meta_value' => $p['website_url'] ) );
		if ( $ids && ! get_post_meta( $ids[0], '_zaec_project_quote', true ) ) {
			update_post_meta( $ids[0], '_zaec_project_quote', $p['quote'] );
			update_post_meta( $ids[0], '_zaec_project_quote_author', $p['quote_author'] );
			update_post_meta( $ids[0], '_zaec_project_quote_role', $p['quote_role'] );
		}
	}
	update_option( 'zaec_quotes_backfill', '1', false );
}

/** v2.1: polja studije slučaja (izazov, razmišljanje, rješenje) za poznate projekte — samo ako su prazna. */
function zaec_backfill_project_cases() {
	if ( get_option( 'zaec_cases_backfill' ) ) {
		return;
	}
	foreach ( zaec_default_project_seed_data() as $p ) {
		$ids = get_posts( array( 'post_type' => 'projekti', 'post_status' => 'any', 'posts_per_page' => 1, 'fields' => 'ids', 'meta_key' => '_zaec_project_website_url', 'meta_value' => $p['website_url'] ) );
		if ( ! $ids ) {
			continue;
		}
		foreach ( array( 'challenge', 'approach', 'solution' ) as $k ) {
			if ( ! empty( $p[ $k ] ) && ! get_post_meta( $ids[0], '_zaec_project_' . $k, true ) ) {
				update_post_meta( $ids[0], '_zaec_project_' . $k, $p[ $k ] );
			}
		}
	}
	update_option( 'zaec_cases_backfill', '1', false );
}
add_action( 'admin_init', 'zaec_backfill_project_cases', 40 );

/** Sve izjave klijenata (za sekciju preporuka). */
function zaec_get_testimonials( $limit = 6 ) {
	$ids = get_posts(
		array(
			'post_type'      => 'projekti',
			'post_status'    => 'publish',
			'posts_per_page' => $limit,
			'fields'         => 'ids',
			'meta_query'     => array( array( 'key' => '_zaec_project_quote', 'compare' => '!=', 'value' => '' ) ),
		)
	);
	return array_map( 'zaec_get_project_data', $ids );
}
