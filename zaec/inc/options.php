<?php
/**
 * Globalne postavke (Izgled → ZAEC postavke). Ključevi su kompatibilni s v1.x.
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
		'whatsapp'                 => '',
		'email'                    => '',
		'show_public_email'        => '0',
		'location'                 => 'Osijek · Hrvatska',
		'address'                  => 'Čvrsnička ulica 29 A',
		'postal_code'              => '31000',
		'city'                     => 'Osijek',
		'region'                   => 'Osječko-baranjska županija',
		'country_code'             => 'HR',
		'hours'                    => 'pon–pet · 9–17 h',
		// Pravno.
		'legal_name'               => 'ZAEC, obrt za računalne djelatnosti, vl. Filip Zajec',
		'owner_name'               => 'Filip Zajec',
		'mb'                       => '98216295',
		'oib'                      => '',
		'nkd'                      => '6201',
		'experience'               => '10+',
		// Schema / SEO.
		'latitude'                 => '45.5550',
		'longitude'                => '18.6955',
		'same_as'                  => '',
		'privacy_url'              => '',
		'terms_url'                => '',
		// Analitika (prazno = bez skripti i bez kolačića).
		'gtm_id'                   => '',
		// Forma.
		'form_recipient'           => '',
		'form_from_name'           => 'ZAEC',
		'form_from_email'          => '',
		'form_success_message'     => 'Upit je stigao. Javljamo se u radno vrijeme.',
		'form_autorespond'         => '0',
		'form_autorespond_subject' => 'Primili smo vaš upit — ZAEC',
		'form_autorespond_body'    => "Pozdrav {ime},\n\nhvala na upitu. Javljamo se u radno vrijeme s prijedlogom sljedećeg koraka.\n\n— ZAEC",
	);
}

function zaec_get_options() {
	static $cache = null;
	if ( null === $cache || doing_action( 'update_option_zaec_options' ) ) {
		$cache = wp_parse_args( (array) get_option( 'zaec_options', array() ), zaec_options_defaults() );
	}
	return $cache;
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
	$email    = array( 'email', 'form_recipient', 'form_from_email' );
	$urls     = array( 'privacy_url', 'terms_url' );
	$bools    = array( 'show_public_email', 'form_autorespond' );
	$areas    = array( 'form_autorespond_body', 'form_success_message', 'same_as' );

	foreach ( $defaults as $key => $default ) {
		$raw = array_key_exists( $key, $input ) ? $input[ $key ] : ( in_array( $key, $bools, true ) ? '0' : $default );
		if ( in_array( $key, $email, true ) ) {
			$output[ $key ] = $raw ? sanitize_email( wp_unslash( $raw ) ) : '';
		} elseif ( in_array( $key, $urls, true ) ) {
			$output[ $key ] = $raw ? esc_url_raw( wp_unslash( $raw ) ) : '';
		} elseif ( in_array( $key, $bools, true ) ) {
			$output[ $key ] = ( '1' === (string) $raw ) ? '1' : '0';
		} elseif ( in_array( $key, $areas, true ) ) {
			$output[ $key ] = sanitize_textarea_field( wp_unslash( $raw ) );
		} elseif ( 'gtm_id' === $key ) {
			$output[ $key ] = preg_match( '/^GTM-[A-Z0-9]+$/', strtoupper( trim( (string) $raw ) ) ) ? strtoupper( trim( (string) $raw ) ) : '';
		} else {
			$output[ $key ] = sanitize_text_field( wp_unslash( $raw ) );
		}
	}
	return $output;
}

function zaec_options_menu() {
	add_theme_page( __( 'ZAEC postavke', 'zaec' ), __( 'ZAEC postavke', 'zaec' ), 'edit_theme_options', 'zaec-options', 'zaec_render_options_page' );
}
add_action( 'admin_menu', 'zaec_options_menu' );

function zaec_options_groups() {
	return array(
		array(
			'title'  => 'Kontakt',
			'fields' => array(
				'phone_display'     => array( 'Telefon — prikaz', 'text' ),
				'phone_raw'         => array( 'Telefon — međunarodni (tel: link)', 'text', 'npr. +385955612522' ),
				'whatsapp'          => array( 'WhatsApp broj (opcionalno)', 'text', 'npr. 385955612522 — prazno = bez WhatsApp gumba' ),
				'email'             => array( 'Javni email (opcionalno)', 'email' ),
				'show_public_email' => array( 'Prikaži javni email', 'checkbox' ),
				'hours'             => array( 'Radno vrijeme', 'text' ),
				'location'          => array( 'Lokacija — kratko', 'text' ),
				'address'           => array( 'Ulica i broj', 'text' ),
				'postal_code'       => array( 'Poštanski broj', 'text' ),
				'city'              => array( 'Grad', 'text' ),
				'region'            => array( 'Županija', 'text' ),
				'country_code'      => array( 'Država (ISO)', 'text' ),
			),
		),
		array(
			'title'  => 'Forma i email',
			'intro'  => 'Slanje ide preko wp_mail(). Za pouzdanu dostavu instalirajte SMTP dodatak (WP Mail SMTP, FluentSMTP…). Prazan primatelj = email administratora.',
			'fields' => array(
				'form_recipient'           => array( 'Primatelj upita', 'email' ),
				'form_from_name'           => array( 'From ime', 'text' ),
				'form_from_email'          => array( 'From email (opcionalno)', 'email' ),
				'form_success_message'     => array( 'Poruka nakon slanja', 'text' ),
				'form_autorespond'         => array( 'Automatski odgovor posjetitelju', 'checkbox' ),
				'form_autorespond_subject' => array( 'Auto-odgovor — naslov', 'text' ),
				'form_autorespond_body'    => array( 'Auto-odgovor — tekst', 'textarea', 'Zamjene: {ime}' ),
			),
		),
		array(
			'title'  => 'Analitika',
			'intro'  => 'Upišite Google Tag Manager ID (GTM-XXXX) da se učita GTM uz Consent Mode v2 i traku privole. Prazno = stranica ne učitava nikakve skripte za praćenje i ne postavlja kolačiće.',
			'fields' => array(
				'gtm_id' => array( 'Google Tag Manager ID', 'text', 'GTM-XXXXXXX' ),
			),
		),
		array(
			'title'  => 'Pravni podaci i schema',
			'fields' => array(
				'legal_name'  => array( 'Pravni naziv obrta', 'text' ),
				'owner_name'  => array( 'Nositelj', 'text' ),
				'mb'          => array( 'Matični broj (MB)', 'text' ),
				'oib'         => array( 'OIB (opcionalno)', 'text' ),
				'nkd'         => array( 'NKD', 'text' ),
				'experience'  => array( 'Godine iskustva (prikaz)', 'text', 'npr. 10+' ),
				'latitude'    => array( 'Latitude', 'text' ),
				'longitude'   => array( 'Longitude', 'text' ),
				'same_as'     => array( 'Profili (sameAs) — jedan URL po retku', 'textarea', 'Google Business profil, LinkedIn, Facebook… Pomaže Googleu i AI asistentima povezati podatke o tvrtki.' ),
				'privacy_url' => array( 'URL privatnosti (prazno = /privatnost/)', 'url' ),
				'terms_url'   => array( 'URL uvjeta', 'url' ),
			),
		),
	);
}

function zaec_render_options_page() {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}
	$o = zaec_get_options();
	?>
	<div class="wrap">
		<h1>ZAEC — postavke</h1>
		<p>Podaci za header, footer, forme, schema markup i analitiku.</p>
		<form action="options.php" method="post">
			<?php settings_fields( 'zaec_options_group' ); ?>
			<?php foreach ( zaec_options_groups() as $group ) : ?>
				<h2 style="margin-top:2rem"><?php echo esc_html( $group['title'] ); ?></h2>
				<?php if ( ! empty( $group['intro'] ) ) : ?><p class="description" style="max-width:52rem"><?php echo esc_html( $group['intro'] ); ?></p><?php endif; ?>
				<table class="form-table" role="presentation">
				<?php foreach ( $group['fields'] as $key => $f ) :
					$val  = isset( $o[ $key ] ) ? $o[ $key ] : '';
					$id   = 'zaec-' . $key;
					$name = 'zaec_options[' . $key . ']';
					?>
					<tr>
						<th scope="row"><label for="<?php echo esc_attr( $id ); ?>"><?php echo esc_html( $f[0] ); ?></label></th>
						<td>
							<?php if ( 'checkbox' === $f[1] ) : ?>
								<input type="hidden" name="<?php echo esc_attr( $name ); ?>" value="0">
								<label><input id="<?php echo esc_attr( $id ); ?>" type="checkbox" name="<?php echo esc_attr( $name ); ?>" value="1" <?php checked( '1', (string) $val ); ?>> Uključeno</label>
							<?php elseif ( 'textarea' === $f[1] ) : ?>
								<textarea class="large-text" rows="4" id="<?php echo esc_attr( $id ); ?>" name="<?php echo esc_attr( $name ); ?>"><?php echo esc_textarea( $val ); ?></textarea>
							<?php else : ?>
								<input class="regular-text" id="<?php echo esc_attr( $id ); ?>" type="<?php echo esc_attr( $f[1] ); ?>" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( $val ); ?>">
							<?php endif; ?>
							<?php if ( ! empty( $f[2] ) ) : ?><p class="description"><?php echo esc_html( $f[2] ); ?></p><?php endif; ?>
						</td>
					</tr>
				<?php endforeach; ?>
				</table>
			<?php endforeach; ?>
			<?php submit_button( 'Spremi postavke' ); ?>
		</form>
	</div>
	<?php
}
