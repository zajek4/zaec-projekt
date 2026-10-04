<?php
/**
 * Global business / form settings (Appearance → ZAEC postavke).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_options_defaults() {
	return array(
		// Kontakt.
		'phone_display'            => '095 561 2522',
		'phone_raw'                => '+385955612522',
		'email'                    => '',
		'show_public_email'        => '0',
		'location'                 => 'Osijek · Hrvatska',
		'address'                  => 'Čvrsnička ulica 29 A',
		'postal_code'             => '31000',
		'city'                     => 'Osijek',
		'country_code'             => 'HR',
		'hours'                    => 'pon–pet · 9–17 h',
		// Pravno.
		'legal_name'               => 'ZAEC, obrt za računalne djelatnosti, vl. Filip Zajec',
		'owner_name'               => 'Filip Zajec',
		'mb'                       => '98216295',
		'oib'                      => '',
		'nkd'                      => '6201',
		// Schema / SEO pomoć.
		'latitude'                 => '45.5550',
		'longitude'                => '18.6955',
		'price_range'              => '390€ - 1490€',
		'privacy_url'              => '',
		'terms_url'                => '',
		// Forma / mail (wp_mail → SMTP plugin friendly).
		'form_recipient'           => 'zajecos12@gmail.com',
		'form_from_name'           => 'ZAEC',
		'form_from_email'          => '',
		'form_success_message'     => 'Upit je stigao. Javimo se u radno vrijeme.',
		'form_autorespond'         => '0',
		'form_autorespond_subject' => 'Primili smo vaš upit — ZAEC',
		'form_autorespond_body'    => "Pozdrav {ime},\n\nhvala na upitu u vezi: {djelatnost}.\nJavimo se u radno vrijeme.\n\n— ZAEC",
	);
}

function zaec_get_options() {
	return wp_parse_args( get_option( 'zaec_options', array() ), zaec_options_defaults() );
}

function zaec_register_options() {
	register_setting(
		'zaec_options_group',
		'zaec_options',
		array(
			'type'              => 'array',
			'sanitize_callback' => 'zaec_sanitize_options',
			'default'           => zaec_options_defaults(),
		)
	);
}
add_action( 'admin_init', 'zaec_register_options' );

function zaec_sanitize_options( $input ) {
	$defaults = zaec_options_defaults();
	$output   = array();
	$input    = is_array( $input ) ? $input : array();

	$email_keys = array( 'email', 'form_recipient', 'form_from_email' );
	$url_keys   = array( 'privacy_url', 'terms_url' );
	$bool_keys  = array( 'show_public_email', 'form_autorespond' );
	$area_keys  = array( 'form_autorespond_body', 'form_success_message' );

	foreach ( $defaults as $key => $default ) {
		$raw = array_key_exists( $key, $input ) ? $input[ $key ] : $default;

		if ( in_array( $key, $email_keys, true ) ) {
			$output[ $key ] = $raw ? sanitize_email( wp_unslash( $raw ) ) : '';
		} elseif ( in_array( $key, $url_keys, true ) ) {
			$output[ $key ] = $raw ? esc_url_raw( wp_unslash( $raw ) ) : '';
		} elseif ( in_array( $key, $bool_keys, true ) ) {
			$output[ $key ] = ( '1' === (string) $raw || 1 === $raw || true === $raw ) ? '1' : '0';
		} elseif ( in_array( $key, $area_keys, true ) ) {
			$output[ $key ] = sanitize_textarea_field( wp_unslash( $raw ) );
		} else {
			$output[ $key ] = sanitize_text_field( wp_unslash( $raw ) );
		}
	}

	return $output;
}

function zaec_options_menu() {
	add_theme_page(
		__( 'ZAEC postavke', 'zaec' ),
		__( 'ZAEC postavke', 'zaec' ),
		'edit_theme_options',
		'zaec-options',
		'zaec_render_options_page'
	);
}
add_action( 'admin_menu', 'zaec_options_menu' );

function zaec_render_options_page() {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	$options = zaec_get_options();
	$groups  = array(
		'kontakt' => array(
			'title'  => __( 'Kontakt', 'zaec' ),
			'fields' => array(
				'phone_display'     => array( 'label' => 'Telefon — prikaz', 'type' => 'text' ),
				'phone_raw'         => array( 'label' => 'Telefon — međunarodni (tel: link)', 'type' => 'text', 'help' => 'npr. +385955612522' ),
				'email'             => array( 'label' => 'Javni email (opcionalno)', 'type' => 'email', 'help' => 'Prazno = ne prikazuje se na stranici.' ),
				'show_public_email' => array( 'label' => 'Prikaži javni email', 'type' => 'checkbox', 'help' => 'Uključi samo ako želiš mailto na frontu.' ),
				'hours'             => array( 'label' => 'Radno vrijeme', 'type' => 'text' ),
				'location'          => array( 'label' => 'Lokacija — kratki prikaz', 'type' => 'text' ),
				'address'           => array( 'label' => 'Ulica i kućni broj', 'type' => 'text' ),
				'postal_code'       => array( 'label' => 'Poštanski broj', 'type' => 'text' ),
				'city'              => array( 'label' => 'Grad', 'type' => 'text' ),
				'country_code'      => array( 'label' => 'Država (ISO)', 'type' => 'text', 'help' => 'HR' ),
			),
		),
		'forma'   => array(
			'title'  => __( 'Kontakt forma i email', 'zaec' ),
			'intro'  => __( 'Slanje ide isključivo preko WordPress wp_mail(). Za pouzdanu dostavu kasnije instaliraj SMTP plugin (WP Mail SMTP, FluentSMTP, Post SMTP…) — tema ne hardkodira SMTP i ne konflikta s njima.', 'zaec' ),
			'fields' => array(
				'form_recipient'           => array( 'label' => 'Primatelj upita', 'type' => 'email', 'help' => 'Interni inbox (npr. Gmail). Ne mora biti javan.' ),
				'form_from_name'           => array( 'label' => 'From ime', 'type' => 'text', 'help' => 'SMTP plugin može ovo prepisati svojim postavkama — to je u redu.' ),
				'form_from_email'          => array( 'label' => 'From email (opcionalno)', 'type' => 'email', 'help' => 'Najbolje adresa s tvoje domene kad SMTP krene. Ostavi prazno da WP/SMTP odluči.' ),
				'form_success_message'     => array( 'label' => 'Poruka nakon uspješnog slanja', 'type' => 'text' ),
				'form_autorespond'         => array( 'label' => 'Automatski odgovor posjetitelju', 'type' => 'checkbox', 'help' => 'Šalje se samo ako je u kontaktu upisan email.' ),
				'form_autorespond_subject' => array( 'label' => 'Auto-odgovor — subject', 'type' => 'text' ),
				'form_autorespond_body'    => array( 'label' => 'Auto-odgovor — tijelo', 'type' => 'textarea', 'help' => 'Placeholders: {ime} {djelatnost}' ),
			),
		),
		'pravno'  => array(
			'title'  => __( 'Pravni podaci (footer)', 'zaec' ),
			'fields' => array(
				'legal_name'  => array( 'label' => 'Pravni naziv obrta', 'type' => 'text' ),
				'owner_name'  => array( 'label' => 'Nositelj', 'type' => 'text' ),
				'mb'          => array( 'label' => 'Matični broj (MB)', 'type' => 'text' ),
				'oib'         => array( 'label' => 'OIB (opcionalno)', 'type' => 'text' ),
				'nkd'         => array( 'label' => 'NKD (glavna)', 'type' => 'text' ),
				'privacy_url' => array( 'label' => 'URL privatnosti', 'type' => 'url' ),
				'terms_url'   => array( 'label' => 'URL uvjeta', 'type' => 'url' ),
			),
		),
		'schema'  => array(
			'title'  => __( 'Schema / karte', 'zaec' ),
			'fields' => array(
				'latitude'    => array( 'label' => 'Latitude', 'type' => 'text' ),
				'longitude'   => array( 'label' => 'Longitude', 'type' => 'text' ),
				'price_range' => array( 'label' => 'Raspon cijena (schema)', 'type' => 'text' ),
			),
		),
	);
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'ZAEC — postavke', 'zaec' ); ?></h1>
		<p><?php esc_html_e( 'Globalni podaci za header, footer, formu, schema markup i kontakt karticu.', 'zaec' ); ?></p>

		<form action="options.php" method="post">
			<?php settings_fields( 'zaec_options_group' ); ?>

			<?php foreach ( $groups as $group ) : ?>
				<h2 style="margin-top:2rem;"><?php echo esc_html( $group['title'] ); ?></h2>
				<?php if ( ! empty( $group['intro'] ) ) : ?>
					<p class="description" style="max-width:52rem;"><?php echo esc_html( $group['intro'] ); ?></p>
				<?php endif; ?>
				<table class="form-table" role="presentation">
					<?php foreach ( $group['fields'] as $key => $field ) : ?>
						<tr>
							<th scope="row">
								<label for="zaec-<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $field['label'] ); ?></label>
							</th>
							<td>
								<?php
								$val  = isset( $options[ $key ] ) ? $options[ $key ] : '';
								$type = isset( $field['type'] ) ? $field['type'] : 'text';
								if ( 'checkbox' === $type ) :
									?>
									<label>
										<input id="zaec-<?php echo esc_attr( $key ); ?>" type="checkbox" name="zaec_options[<?php echo esc_attr( $key ); ?>]" value="1" <?php checked( '1', (string) $val ); ?>>
										<?php esc_html_e( 'Uključeno', 'zaec' ); ?>
									</label>
								<?php elseif ( 'textarea' === $type ) : ?>
									<textarea class="large-text" rows="5" id="zaec-<?php echo esc_attr( $key ); ?>" name="zaec_options[<?php echo esc_attr( $key ); ?>]"><?php echo esc_textarea( $val ); ?></textarea>
								<?php else : ?>
									<input class="regular-text" id="zaec-<?php echo esc_attr( $key ); ?>" type="<?php echo esc_attr( $type ); ?>" name="zaec_options[<?php echo esc_attr( $key ); ?>]" value="<?php echo esc_attr( $val ); ?>">
								<?php endif; ?>
								<?php if ( ! empty( $field['help'] ) ) : ?>
									<p class="description"><?php echo esc_html( $field['help'] ); ?></p>
								<?php endif; ?>
							</td>
						</tr>
					<?php endforeach; ?>
				</table>
			<?php endforeach; ?>

			<?php submit_button( __( 'Spremi postavke', 'zaec' ) ); ?>
		</form>

		<hr>
		<p class="description">
			<?php esc_html_e( 'SMTP: Appearance → ZAEC postavke ne sadrži SMTP lozinke. Instaliraj plugin (npr. WP Mail SMTP), poveži Gmail/SendGrid/itd. — forma automatski koristi taj transport jer šalje preko wp_mail().', 'zaec' ); ?>
		</p>
	</div>
	<?php
}
