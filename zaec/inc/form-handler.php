<?php
/**
 * Upiti: admin-post (bez JS-a) + admin-ajax (JSON). Isključivo wp_mail() → radi sa SMTP dodacima.
 * Zaštita: nonce (+ osvježavanje za page cache), honeypot, minimalno vrijeme ispunjavanja, rate limit, ograničenje
 * poveznica u imenu i poruci.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_field( $key, $type = 'text' ) {
	if ( ! isset( $_POST[ $key ] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
		return '';
	}
	$v = wp_unslash( $_POST[ $key ] ); // phpcs:ignore
	return 'textarea' === $type ? sanitize_textarea_field( $v ) : sanitize_text_field( $v );
}

function zaec_process_inquiry( $is_ajax = false ) {
	$fail = static function ( $message, $status = 400 ) use ( $is_ajax ) {
		if ( $is_ajax ) {
			zaec_ajax_prepare_response();
			wp_send_json_error( array( 'message' => $message ), $status );
		}
		wp_safe_redirect( zaec_form_redirect_url( 'error' ) );
		exit;
	};

	if ( ! isset( $_POST['zaec_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zaec_nonce'] ) ), 'zaec_inquiry' ) ) {
		$fail( 'Sigurnosna provjera nije prošla. Osvježite stranicu i pokušajte ponovno.', 403 );
	}

	// Honeypot: tihi "uspjeh" za botove.
	if ( '' !== trim( zaec_field( 'website' ) ) ) {
		if ( $is_ajax ) {
			zaec_ajax_prepare_response();
			wp_send_json_success( array( 'message' => 'Upit je stigao.' ) );
		}
		wp_safe_redirect( zaec_form_redirect_url( 'sent' ) );
		exit;
	}

	$started = absint( zaec_field( 'started_at' ) );
	if ( $started && ( time() - $started ) < 2 ) {
		$fail( 'Upit je poslan prebrzo. Pokušajte ponovno.', 429 );
	}

	$ip       = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
	$rate_key = 'zaec_form_' . md5( (string) wp_salt( 'nonce' ) . $ip );
	$count    = (int) get_transient( $rate_key );
	if ( $count >= 8 ) {
		$fail( 'Previše pokušaja u kratkom vremenu. Pokušajte ponovno kasnije ili nazovite.', 429 );
	}
	set_transient( $rate_key, $count + 1, 15 * MINUTE_IN_SECONDS );

	$kind     = 'provjera' === zaec_field( 'vrsta' ) ? 'provjera' : 'upit';
	$name     = zaec_field( 'ime' );
	$contact  = zaec_field( 'kontakt' );
	$activity = zaec_field( 'djelatnost' );
	$service  = zaec_field( 'usluga' );
	$message  = zaec_field( 'poruka', 'textarea' );
	$config   = zaec_field( 'konfiguracija', 'textarea' );
	$company  = zaec_field( 'tvrtka' );
	$goals    = isset( $_POST['ciljevi'] ) ? array_values( array_intersect( array_map( 'sanitize_text_field', (array) wp_unslash( $_POST['ciljevi'] ) ), zaec_home_goals() ) ) : array(); // phpcs:ignore
	$place    = zaec_field( 'mjesto' );
	$web      = esc_url_raw( zaec_field( 'web' ) );
	$source   = esc_url_raw( zaec_field( 'izvor' ) );
	if ( $source && 0 !== strpos( $source, home_url() ) ) {
		$source = '';
	}

	$valid_email = (bool) is_email( $contact );
	$valid_phone = (bool) preg_match( '/^[+0-9(][0-9\s\-\/\(\)]{5,}$/', $contact );
	if ( mb_strlen( $name ) < 2 ) {
		$fail( 'Upišite ime da znamo kako vam se obratiti.' );
	}
	if ( ! $valid_email && ! $valid_phone ) {
		$fail( 'Upišite ispravan telefon ili email.' );
	}
	if ( 'provjera' === $kind && mb_strlen( $company ) < 2 ) {
		$fail( 'Upišite naziv tvrtke za provjeru.' );
	}
	// Spam s poveznicama: ime s adresom ili poruka s više od tri poveznice / BBCode / HTML poveznicom. Poruka o
	// grešci je vidljiva (stvaran klijent je može ispraviti), za razliku od honeypota.
	if ( preg_match( '~https?://|www\.~i', $name ) ) {
		$fail( 'Ime ne može sadržavati poveznicu.' );
	}
	if ( preg_match_all( '~https?://|www\.~i', $message ) > 3 || preg_match( '~\[url[=\]]|<a\s~i', (string) wp_unslash( $_POST['poruka'] ?? '' ) ) ) { // phpcs:ignore
		$fail( 'Poruka smije imati najviše tri poveznice. Ostalo pošaljite u odgovoru na naš email.' );
	}

	$o         = zaec_get_options();
	$recipient = ! empty( $o['form_recipient'] ) && is_email( $o['form_recipient'] ) ? $o['form_recipient'] : get_option( 'admin_email' );
	$subject   = 'provjera' === $kind
		? sprintf( '[ZAEC provjera vidljivosti] %s — %s', $company, $place ? $place : $name )
		: sprintf( '[ZAEC upit] %s%s', $name, $company ? ' — ' . $company : ( $activity ? ' — ' . $activity : '' ) );

	$lines = array(
		'provjera' === $kind ? 'Zahtjev za besplatnu provjeru vidljivosti' : 'Novi upit s web stranice',
		'',
		'Ime: ' . $name,
		'Kontakt: ' . $contact,
	);
	foreach ( array( 'Ciljevi' => implode( ', ', $goals ), 'Tvrtka' => $company, 'Mjesto' => $place, 'Web' => $web, 'Djelatnost' => $activity, 'Usluga' => $service ) as $label => $val ) {
		if ( $val ) {
			$lines[] = $label . ': ' . $val;
		}
	}
	if ( $message ) {
		$lines[] = '';
		$lines[] = 'Poruka:';
		$lines[] = $message;
	}
	if ( $config ) {
		$lines[] = '';
		$lines[] = 'Konfiguracija iz procjene:';
		$lines[] = $config;
	}
	$lines[] = '';
	$lines[] = '---';
	$lines[] = 'Izvor: ' . ( $source ? $source : home_url( '/' ) );
	$lines[] = 'Vrijeme: ' . wp_date( 'Y-m-d H:i:s' );

	$headers = array( 'Content-Type: text/plain; charset=UTF-8' );
	if ( $valid_email ) {
		$headers[] = 'Reply-To: ' . sprintf( '%s <%s>', $name, $contact );
	}
	$from_email = ! empty( $o['form_from_email'] ) && is_email( $o['form_from_email'] ) ? $o['form_from_email'] : '';
	$from_name  = ! empty( $o['form_from_name'] ) ? $o['form_from_name'] : wp_specialchars_decode( get_bloginfo( 'name' ), ENT_QUOTES );

	$mail = apply_filters(
		'zaec_inquiry_mail_args',
		array( 'to' => $recipient, 'subject' => $subject, 'message' => implode( "\n", $lines ), 'headers' => $headers, 'from_email' => $from_email, 'from_name' => $from_name )
	);
	if ( ! zaec_send_mail( $mail['to'], $mail['subject'], $mail['message'], $mail['headers'], $mail['from_email'], $mail['from_name'] ) ) {
		$fail( 'Poruka trenutačno nije poslana. Pokušajte ponovno ili nazovite.', 500 );
	}

	if ( $valid_email && '1' === (string) $o['form_autorespond'] ) {
		$body = str_replace( array( '{ime}', '{djelatnost}' ), array( $name, $activity ), (string) $o['form_autorespond_body'] );
		zaec_send_mail( $contact, (string) $o['form_autorespond_subject'], $body, array( 'Content-Type: text/plain; charset=UTF-8' ), $from_email, $from_name );
	}

	do_action( 'zaec_inquiry_sent', compact( 'kind', 'name', 'contact', 'activity', 'service', 'goals', 'company', 'place', 'web', 'message', 'config', 'source' ) );

	if ( $is_ajax ) {
		zaec_ajax_prepare_response();
		wp_send_json_success( array( 'message' => ! empty( $o['form_success_message'] ) ? $o['form_success_message'] : 'Upit je stigao.' ) );
	}
	wp_safe_redirect( zaec_form_redirect_url( 'sent' ) );
	exit;
}

function zaec_form_redirect_url( $state ) {
	if ( 'sent' === $state ) {
		return zaec_url( 'hvala' );
	}
	$base = home_url( '/' );
	if ( isset( $_POST['return_to'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
		$return = wp_validate_redirect( esc_url_raw( wp_unslash( $_POST['return_to'] ) ), '' ); // phpcs:ignore
		if ( $return && 0 === strpos( $return, home_url() ) ) {
			$base = strtok( $return, '#' );
		}
	}
	return add_query_arg( 'zaec_form', sanitize_key( $state ), $base ) . '#upit';
}

function zaec_send_mail( $to, $subject, $message, $headers = array(), $from_email = '', $from_name = '' ) {
	$headers = is_array( $headers ) ? $headers : ( $headers ? array( $headers ) : array() );
	$f1      = $from_email && is_email( $from_email ) ? static fn() => $from_email : null;
	$f2      = $from_name ? static fn() => $from_name : null;
	if ( $f1 ) {
		add_filter( 'wp_mail_from', $f1, 20 );
	}
	if ( $f2 ) {
		add_filter( 'wp_mail_from_name', $f2, 20 );
	}
	$sent = wp_mail( $to, $subject, $message, $headers );
	if ( $f1 ) {
		remove_filter( 'wp_mail_from', $f1, 20 );
	}
	if ( $f2 ) {
		remove_filter( 'wp_mail_from_name', $f2, 20 );
	}
	return (bool) $sent;
}

add_action( 'admin_post_nopriv_zaec_inquiry', static fn() => zaec_process_inquiry( false ) );
add_action( 'admin_post_zaec_inquiry', static fn() => zaec_process_inquiry( false ) );

function zaec_ajax_prepare_response() {
	while ( ob_get_level() > 0 ) {
		$noise = ob_get_clean();
		if ( $noise && defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( '[ZAEC AJAX output before JSON] ' . wp_strip_all_tags( $noise ) ); // phpcs:ignore
		}
	}
}

function zaec_handle_inquiry_ajax() {
	ob_start();
	zaec_process_inquiry( true );
}
add_action( 'wp_ajax_nopriv_zaec_inquiry', 'zaec_handle_inquiry_ajax' );
add_action( 'wp_ajax_zaec_inquiry', 'zaec_handle_inquiry_ajax' );

function zaec_refresh_inquiry_nonce() {
	zaec_ajax_prepare_response();
	wp_send_json_success( array( 'nonce' => wp_create_nonce( 'zaec_inquiry' ) ) );
}
add_action( 'wp_ajax_nopriv_zaec_refresh_nonce', 'zaec_refresh_inquiry_nonce' );
add_action( 'wp_ajax_zaec_refresh_nonce', 'zaec_refresh_inquiry_nonce' );

add_action(
	'wp_mail_failed',
	static function ( $error ) {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_wp_error( $error ) ) {
			error_log( '[ZAEC wp_mail failed] ' . $error->get_error_message() ); // phpcs:ignore
		}
	}
);
