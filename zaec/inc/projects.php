<?php
/**
 * Projects custom post type and project metadata.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the Projects CPT used by the homepage and case-study archive.
 */
function zaec_register_projects_cpt() {
	$labels = array(
		'name'                  => __( 'Projekti', 'zaec' ),
		'singular_name'         => __( 'Projekt', 'zaec' ),
		'menu_name'             => __( 'Projekti', 'zaec' ),
		'name_admin_bar'        => __( 'Projekt', 'zaec' ),
		'add_new'               => __( 'Dodaj projekt', 'zaec' ),
		'add_new_item'          => __( 'Dodaj novi projekt', 'zaec' ),
		'edit_item'             => __( 'Uredi projekt', 'zaec' ),
		'new_item'              => __( 'Novi projekt', 'zaec' ),
		'view_item'             => __( 'Pogledaj projekt', 'zaec' ),
		'search_items'          => __( 'Pretraži projekte', 'zaec' ),
		'not_found'             => __( 'Nema projekata.', 'zaec' ),
		'not_found_in_trash'    => __( 'Nema projekata u smeću.', 'zaec' ),
		'all_items'             => __( 'Svi projekti', 'zaec' ),
		'archives'              => __( 'Arhiva projekata', 'zaec' ),
		'featured_image'        => __( 'Naslovna slika projekta', 'zaec' ),
		'set_featured_image'    => __( 'Postavi naslovnu sliku', 'zaec' ),
		'remove_featured_image' => __( 'Ukloni naslovnu sliku', 'zaec' ),
	);

	register_post_type(
		'projekti',
		array(
			'labels'             => $labels,
			'public'             => true,
			'show_in_rest'       => true,
			'menu_icon'          => 'dashicons-portfolio',
			'has_archive'        => 'radovi',
			'rewrite'            => array( 'slug' => 'radovi', 'with_front' => false ),
			'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes' ),
			'menu_position'      => 21,
			'publicly_queryable' => true,
			'query_var'          => true,
			'show_ui'            => true,
			'show_in_nav_menus'  => true,
			'capability_type'    => 'post',
		)
	);
}
add_action( 'init', 'zaec_register_projects_cpt' );

/**
 * Flush rewrite rules once when the theme is activated.
 */
function zaec_projects_flush_rewrite_rules() {
	zaec_register_projects_cpt();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'zaec_projects_flush_rewrite_rules' );

/**
 * Project content/business fields. Design and layout stay in the theme.
 */
function zaec_project_fields() {
	return array(
		'code'         => array( 'label' => 'Oznaka projekta', 'type' => 'text', 'placeholder' => 'PROJ.001' ),
		'service'      => array( 'label' => 'Usluga / tip projekta', 'type' => 'text', 'placeholder' => 'Web po nacrtu · WordPress' ),
		'location'     => array( 'label' => 'Lokacija', 'type' => 'text', 'placeholder' => 'Osijek' ),
		'year'         => array( 'label' => 'Godina', 'type' => 'text', 'placeholder' => '2026' ),
		'result'       => array( 'label' => 'Potvrđeni rezultat / ishod', 'type' => 'textarea', 'placeholder' => 'Upisati samo ako je rezultat stvarno izmjeren i potvrđen.' ),
		'technologies' => array( 'label' => 'Tehnologije', 'type' => 'text', 'placeholder' => 'WordPress, WooCommerce, GSAP' ),
		'website_url'  => array( 'label' => 'URL projekta', 'type' => 'url', 'placeholder' => 'https://...' ),
	);
}

function zaec_add_project_meta_box() {
	add_meta_box(
		'zaec-project-details',
		__( 'ZAEC — podaci projekta', 'zaec' ),
		'zaec_render_project_meta_box',
		'projekti',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes_projekti', 'zaec_add_project_meta_box' );

function zaec_render_project_meta_box( $post ) {
	wp_nonce_field( 'zaec_save_project', 'zaec_project_nonce' );
	?>
	<p><?php esc_html_e( 'Naslov, opis/case study i naslovnu sliku uređujte standardnim WordPress poljima. Ovdje su samo strukturirani poslovni podaci.', 'zaec' ); ?></p>
	<table class="form-table" role="presentation"><tbody>
	<?php foreach ( zaec_project_fields() as $key => $field ) :
		$value = get_post_meta( $post->ID, '_zaec_project_' . $key, true );
		?>
		<tr>
			<th scope="row"><label for="zaec-project-<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $field['label'] ); ?></label></th>
			<td>
			<?php if ( 'textarea' === $field['type'] ) : ?>
				<textarea class="large-text" rows="3" id="zaec-project-<?php echo esc_attr( $key ); ?>" name="zaec_project[<?php echo esc_attr( $key ); ?>]" placeholder="<?php echo esc_attr( $field['placeholder'] ); ?>"><?php echo esc_textarea( $value ); ?></textarea>
			<?php else : ?>
				<input class="regular-text" type="<?php echo esc_attr( $field['type'] ); ?>" id="zaec-project-<?php echo esc_attr( $key ); ?>" name="zaec_project[<?php echo esc_attr( $key ); ?>]" value="<?php echo esc_attr( $value ); ?>" placeholder="<?php echo esc_attr( $field['placeholder'] ); ?>">
			<?php endif; ?>
			</td>
		</tr>
	<?php endforeach; ?>
		<tr>
			<th scope="row"><?php esc_html_e( 'Istakni na naslovnici', 'zaec' ); ?></th>
			<td><label><input type="checkbox" name="zaec_project_featured" value="1" <?php checked( '1', get_post_meta( $post->ID, '_zaec_project_featured', true ) ); ?>> <?php esc_html_e( 'Prikaži među odabranim radovima na naslovnici', 'zaec' ); ?></label></td>
		</tr>
	</tbody></table>
	<?php
}

function zaec_save_project_meta( $post_id ) {
	if ( ! isset( $_POST['zaec_project_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zaec_project_nonce'] ) ), 'zaec_save_project' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( wp_is_post_revision( $post_id ) || 'projekti' !== get_post_type( $post_id ) || ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$input = isset( $_POST['zaec_project'] ) && is_array( $_POST['zaec_project'] ) ? wp_unslash( $_POST['zaec_project'] ) : array();
	foreach ( zaec_project_fields() as $key => $field ) {
		$value = isset( $input[ $key ] ) ? $input[ $key ] : '';
		if ( 'url' === $field['type'] ) {
			$value = esc_url_raw( $value );
		} elseif ( 'textarea' === $field['type'] ) {
			$value = sanitize_textarea_field( $value );
		} else {
			$value = sanitize_text_field( $value );
		}
		if ( '' === $value ) {
			delete_post_meta( $post_id, '_zaec_project_' . $key );
		} else {
			update_post_meta( $post_id, '_zaec_project_' . $key, $value );
		}
	}

	update_post_meta( $post_id, '_zaec_project_featured', isset( $_POST['zaec_project_featured'] ) ? '1' : '0' );
}
add_action( 'save_post_projekti', 'zaec_save_project_meta' );

/**
 * Return normalized project-card data for front page and archives.
 */
function zaec_get_project_data( $post_id ) {
	$post_id = absint( $post_id );
	return array(
		'id'           => $post_id,
		'code'         => (string) get_post_meta( $post_id, '_zaec_project_code', true ),
		'title'        => get_the_title( $post_id ),
		'service'      => (string) get_post_meta( $post_id, '_zaec_project_service', true ),
		'location'     => (string) get_post_meta( $post_id, '_zaec_project_location', true ),
		'year'         => (string) get_post_meta( $post_id, '_zaec_project_year', true ),
		'result'       => (string) get_post_meta( $post_id, '_zaec_project_result', true ),
		'technologies' => (string) get_post_meta( $post_id, '_zaec_project_technologies', true ),
		'website_url'  => (string) get_post_meta( $post_id, '_zaec_project_website_url', true ),
		'image'       => (string) get_post_meta( $post_id, '_zaec_project_image', true ),
		'permalink'    => get_permalink( $post_id ),
	);
}

/**
 * Homepage projects: explicit featured selection first, then newest published projects.
 */
function zaec_get_home_projects( $limit = 3 ) {
	$limit = max( 1, absint( $limit ) );
	$args  = array(
		'post_type'           => 'projekti',
		'post_status'         => 'publish',
		'posts_per_page'      => $limit,
		'ignore_sticky_posts' => true,
		'orderby'             => array( 'menu_order' => 'ASC', 'date' => 'DESC' ),
		'meta_query'          => array(
			array(
				'key'   => '_zaec_project_featured',
				'value' => '1',
			),
		),
	);
	$query = new WP_Query( $args );
	if ( ! $query->have_posts() ) {
		unset( $args['meta_query'] );
		$query = new WP_Query( $args );
	}
	return $query;
}

/**
 * Keep project archive ordering intentional and stable.
 */
function zaec_project_archive_order( $query ) {
	if ( is_admin() || ! $query->is_main_query() || ! $query->is_post_type_archive( 'projekti' ) ) {
		return;
	}
	$query->set( 'posts_per_page', 12 );
	$query->set( 'orderby', array( 'menu_order' => 'ASC', 'date' => 'DESC' ) );
}
add_action( 'pre_get_posts', 'zaec_project_archive_order' );

/**
 * Početni stvarni projekti koje je vlasnik teme naveo za javni prikaz.
 *
 * Seed se izvršava samo jednom i samo ako u CPT-u još nema projekata.
 * Ako klijent već ima vlastiti portfolio, tema ga ne dira.
 */
function zaec_default_project_seed_data() {
	return array(
		array(
			'code'         => 'CZA.01',
			'title'        => 'Centar za autizam Osijek',
			'service'      => 'Web stranica · ustanova',
			'location'     => 'Osijek',
			'year'         => '',
			'technologies' => 'UX · sadržajna struktura · responsive web',
			'website_url'  => 'https://cza-os.hr/',
			'image'       => 'assets/images/projects/cza-osijek.png',
			'result'      => 'Lakši i bolji način prikazivanja objava, programa i pomoći za djecu.',
			'excerpt'      => 'Jasna digitalna prezentacija Centra, njegovih programa, projekata, novosti i načina kontakta.',
			'content'      => "Web stranica Centra za autizam Osijek okuplja ono što roditelji, učenici i lokalna zajednica trebaju pronaći: informacije o Centru, programe, terapijske postupke, projekte, novosti, galeriju i kontakt.\n\nSadržaj je organiziran tako da važna informacija ne ostane skrivena iza općenite priče.",
		),
		array(
			'code'         => 'EKO.02',
			'title'        => 'Eurokontrola',
			'service'      => 'Web stranica · B2B',
			'location'     => 'Osijek',
			'year'         => '',
			'technologies' => 'UX · usluge · sadržajna struktura',
			'website_url'  => 'https://eurokontrola.hr/',
			'image'       => 'assets/images/projects/eurokontrola.png',
			'result'      => 'Ozbiljan identitet i jasnije objašnjeno što Eurokontrola radi.',
			'excerpt'      => 'Stručna kontrola kvalitete i laboratorijske analize hrane, sirovina i poljoprivrednih proizvoda.',
			'content'      => "Web stranica Eurokontrole razdvaja usluge kontrole kvalitete i laboratorijskih analiza u razumljive cjeline.\n\nPosjetitelj može brzo doći do relevantne usluge, saznati što Eurokontrola radi i nastaviti prema kontaktu bez prolaska kroz nevažan sadržaj.",
		),
		array(
			'code'         => 'DGR.03',
			'title'        => 'Daj Gric',
			'service'      => 'Web stranica · restoran i catering',
			'location'     => 'Bilje',
			'year'         => '',
			'technologies' => 'UX · meni · narudžbe · catering',
			'website_url'  => 'https://dajgric.com/',
			'image'       => 'assets/images/projects/daj-gric.jpg',
			'result'      => 'Veći promet i prepoznatljivost hrane u lokalnom mjestu.',
			'excerpt'      => 'Web mjesto restorana brze hrane i cateringa s menijem, narudžbama, lokacijom i galerijom.',
			'content'      => "Daj Gric treba biti brz i konkretan: što je na meniju, gdje se restoran nalazi, kako naručiti i što catering nudi za veće događaje.\n\nStranica te informacije stavlja ispred ukrasa i vodi posjetitelja prema narudžbi ili kontaktu.",
		),
	);
}

function zaec_seed_default_projects() {
	if ( get_option( 'zaec_project_seed_version', '' ) ) {
		return;
	}

	$existing = get_posts(
		array(
			'post_type'      => 'projekti',
			'post_status'    => 'any',
			'posts_per_page' => 1,
			'fields'         => 'ids',
		)
	);
	if ( $existing ) {
		update_option( 'zaec_project_seed_version', 'skipped-existing', false );
		return;
	}

	$created = 0;
	foreach ( zaec_default_project_seed_data() as $project ) {
		$post_id = wp_insert_post(
			array(
				'post_type'    => 'projekti',
				'post_status'  => 'publish',
				'post_title'   => $project['title'],
				'post_excerpt' => $project['excerpt'],
				'post_content' => $project['content'],
				'menu_order'   => $created,
			),
			true
		);

		if ( is_wp_error( $post_id ) ) {
			continue;
		}

		foreach ( array( 'code', 'service', 'location', 'year', 'result', 'technologies', 'website_url', 'image' ) as $key ) {
			$value = isset( $project[ $key ] ) ? $project[ $key ] : '';
			if ( '' !== $value ) {
				update_post_meta( $post_id, '_zaec_project_' . $key, $value );
			}
		}
		update_post_meta( $post_id, '_zaec_project_featured', '1' );
		$created++;
	}

	if ( $created ) {
		update_option( 'zaec_project_seed_version', '1.0.0', false );
	}
}
add_action( 'admin_init', 'zaec_seed_default_projects', 30 );

/**
 * Nadopuni preview slike za već ranije seedane projekte, ali samo ako slika
 * još nije postavljena. Ručno odabrane featured slike nikad se ne prepisuju.
 */
function zaec_backfill_project_previews() {
	foreach ( zaec_default_project_seed_data() as $project ) {
		$posts = get_posts(
			array(
				'post_type'      => 'projekti',
				'post_status'    => 'any',
				'posts_per_page' => 1,
				'fields'         => 'ids',
				'meta_query'     => array(
					array(
						'key'   => '_zaec_project_website_url',
						'value' => $project['website_url'],
					),
				),
			)
		);
		if ( ! empty( $posts ) ) {
			$project_id = $posts[0];
			if ( ! get_post_meta( $project_id, '_zaec_project_image', true ) ) {
				update_post_meta( $project_id, '_zaec_project_image', $project['image'] );
			}
			if ( get_post_meta( $project_id, '_zaec_project_code', true ) === $project['code'] && ! get_post_meta( $project_id, '_zaec_project_result', true ) ) {
				update_post_meta( $project_id, '_zaec_project_result', $project['result'] );
			}
		}
	}
}
add_action( 'admin_init', 'zaec_backfill_project_previews', 31 );
