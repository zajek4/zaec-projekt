<?php
/**
 * Inquiry form — admin-post (no-JS) + admin-ajax (JSON).
 * Koristi isključivo wp_mail() → kompatibilno s WP Mail SMTP / FluentSMTP / Post SMTP.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Shared processing for inquiry submissions.
 *
 * @param bool $is_ajax Whether request expects JSON.
 */
function zaec_process_inquiry( $is_ajax = false ) {
	$fail = static function ( $message, $status = 400 ) use ( $is_ajax ) {
		if ( $is_ajax ) {
			wp_send_json_error( array( 'message' => $message ), $status );
		}
		$redirect = zaec_form_redirect_url( 'error' );
		wp_safe_redirect( $redirect );
		exit;
	};

	if ( ! isset( $_POST['zaec_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['zaec_nonce'] ) ), 'zaec_inquiry' ) ) {
		$fail( __( 'Sigurnosna provjera nije prošla. Osvježite stranicu i pokušajte ponovno.', 'zaec' ), 403 );
	}

	// Honeypot.
	$honeypot = isset( $_POST['website'] ) ? trim( sanitize_text_field( wp_unslash( $_POST['website'] ) ) ) : '';
	if ( '' !== $honeypot ) {
		// Tihi uspjeh za botove.
		if ( $is_ajax ) {
			wp_send_json_success( array( 'message' => __( 'Upit je stigao.', 'zaec' ) ) );
		}
		wp_safe_redirect( zaec_form_redirect_url( 'sent' ) );
		exit;
	}

	$started = isset( $_POST['started_at'] ) ? absint( $_POST['started_at'] ) : 0;
	if ( $started && ( time() - $started ) < 2 ) {
		$fail( __( 'Upit je poslan prebrzo. Pokušajte ponovno.', 'zaec' ), 429 );
	}

	$ip         = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
	$rate_key   = 'zaec_form_' . md5( (string) wp_salt( 'nonce' ) . $ip );
	$rate_count = (int) get_transient( $rate_key );
	if ( $rate_count >= 8 ) {
		$fail( __( 'Previše pokušaja u kratkom vremenu. Pokušajte ponovno kasnije.', 'zaec' ), 429 );
	}
	set_transient( $rate_key, $rate_count + 1, 15 * MINUTE_IN_SECONDS );

	$name     = isset( $_POST['ime'] ) ? sanitize_text_field( wp_unslash( $_POST['ime'] ) ) : '';
	$contact  = isset( $_POST['kontakt'] ) ? sanitize_text_field( wp_unslash( $_POST['kontakt'] ) ) : '';
	$activity = isset( $_POST['djelatnost'] ) ? sanitize_text_field( wp_unslash( $_POST['djelatnost'] ) ) : '';
	$track    = isset( $_POST['smjer'] ) ? sanitize_text_field( wp_unslash( $_POST['smjer'] ) ) : '';
	$message  = isset( $_POST['poruka'] ) ? sanitize_textarea_field( wp_unslash( $_POST['poruka'] ) ) : '';
	$package  = isset( $_POST['paket'] ) ? sanitize_text_field( wp_unslash( $_POST['paket'] ) ) : '';

	$allowed_tracks = array( 'predlozak', 'po-nacrtu', 'ne-znam', '' );
	if ( ! in_array( $track, $allowed_tracks, true ) ) {
		$track = '';
	}

	$valid_email = (bool) is_email( $contact );
	$valid_phone = (bool) preg_match( '/^[+0-9][0-9\s\-\/\(\)]{5,}$/', $contact );

	if ( strlen( $name ) < 2 ) {
		$fail( __( 'Upišite ime i prezime.', 'zaec' ) );
	}
	if ( ! $activity ) {
		$fail( __( 'Odaberite djelatnost.', 'zaec' ) );
	}
	if ( ! $valid_email && ! $valid_phone ) {
		$fail( __( 'Upišite ispravan telefon ili email.', 'zaec' ) );
	}

	$options   = zaec_get_options();
	$recipient = ! empty( $options['form_recipient'] ) && is_email( $options['form_recipient'] )
		? $options['form_recipient']
		: get_option( 'admin_email' );

	$track_labels = array(
		'predlozak'  => 'Predložak',
		'po-nacrtu'  => 'Po nacrtu',
		'ne-znam'    => 'Ne znam / savjetujte me',
	);
	$track_label = isset( $track_labels[ $track ] ) ? $track_labels[ $track ] : '—';

	$subject = sprintf(
		/* translators: 1: name, 2: activity */
		__( '[ZAEC upit] %1$s — %2$s', 'zaec' ),
		$name,
		$activity
	);

	$body  = __( 'Novi upit s web stranice', 'zaec' ) . "\n\n";
	$body .= 'Ime: ' . $name . "\n";
	$body .= 'Kontakt: ' . $contact . "\n";
	$body .= 'Djelatnost: ' . $activity . "\n";
	$body .= 'Smjer: ' . $track_label . "\n";
	if ( $package ) {
		$body .= 'Paket / CTA: ' . $package . "\n";
	}
	if ( $message ) {
		$body .= "\nPoruka:\n" . $message . "\n";
	}
	$body .= "\n---\n";
	$body .= 'Izvor: ' . home_url( '/' ) . "\n";
	$body .= 'Vrijeme: ' . wp_date( 'Y-m-d H:i:s' ) . "\n";
	$body .= 'IP: ' . $ip . "\n";

	$headers = array( 'Content-Type: text/plain; charset=UTF-8' );
	if ( $valid_email ) {
		$headers[] = 'Reply-To: ' . sprintf( '%s <%s>', $name, $contact );
	}

	// Optional From — SMTP plugini i dalje mogu prepisati kroz phpmailer_init.
	$from_email = ! empty( $options['form_from_email'] ) && is_email( $options['form_from_email'] )
		? $options['form_from_email']
		: '';
	$from_name  = ! empty( $options['form_from_name'] )
		? $options['form_from_name']
		: wp_specialchars_decode( get_bloginfo( 'name' ), ENT_QUOTES );

	$mail_args = array(
		'to'         => $recipient,
		'subject'    => $subject,
		'message'    => $body,
		'headers'    => $headers,
		'from_email' => $from_email,
		'from_name'  => $from_name,
		'reply_to'   => $valid_email ? $contact : '',
		'reply_name' => $name,
	);

	/**
	 * Filter before sending inquiry mail (SMTP plugins listen to wp_mail).
	 *
	 * @param array $mail_args Mail payload.
	 */
	$mail_args = apply_filters( 'zaec_inquiry_mail_args', $mail_args );

	$sent = zaec_send_mail(
		$mail_args['to'],
		$mail_args['subject'],
		$mail_args['message'],
		$mail_args['headers'],
		$mail_args['from_email'],
		$mail_args['from_name']
	);

	if ( ! $sent ) {
		$fail( __( 'Poruka trenutačno nije poslana. Pokušajte ponovno ili nazovite.', 'zaec' ), 500 );
	}

	// Optional auto-reply to visitor (also via wp_mail → SMTP).
	if ( $valid_email && ! empty( $options['form_autorespond'] ) && '1' === (string) $options['form_autorespond'] ) {
		$auto_subject = ! empty( $options['form_autorespond_subject'] )
			? $options['form_autorespond_subject']
			: __( 'Primili smo vaš upit — ZAEC', 'zaec' );
		$auto_body    = ! empty( $options['form_autorespond_body'] )
			? $options['form_autorespond_body']
			: __( "Pozdrav,\n\nhvala na upitu. Javimo se u radno vrijeme.\n\n— ZAEC", 'zaec' );
		$auto_body    = str_replace(
			array( '{ime}', '{djelatnost}' ),
			array( $name, $activity ),
			$auto_body
		);
		zaec_send_mail( $contact, $auto_subject, $auto_body, array( 'Content-Type: text/plain; charset=UTF-8' ), $from_email, $from_name );
	}

	/**
	 * Fires after a successful inquiry (CRM hooks, logging…).
	 *
	 * @param array $payload Sanitized submission.
	 */
	do_action(
		'zaec_inquiry_sent',
		array(
			'name'     => $name,
			'contact'  => $contact,
			'activity' => $activity,
			'track'    => $track,
			'package'  => $package,
			'message'  => $message,
		)
	);

	if ( $is_ajax ) {
		$success_msg = ! empty( $options['form_success_message'] )
			? $options['form_success_message']
			: __( 'Upit je stigao.', 'zaec' );
		wp_send_json_success( array( 'message' => $success_msg ) );
	}

	wp_safe_redirect( zaec_form_redirect_url( 'sent' ) );
	exit;
}

/**
 * @param string $state sent|error
 */
function zaec_form_redirect_url( $state ) {
	$base = trailingslashit( home_url( '/' ) ) . '#upit';
	return add_query_arg( 'zaec_form', sanitize_key( $state ), $base );
}

/**
 * Thin wp_mail wrapper with optional From header.
 * SMTP plugini (WP Mail SMTP itd.) hookaju wp_mail / phpmailer_init — ne diramo SMTP ovdje.
 *
 * @param string       $to         Recipient.
 * @param string       $subject    Subject.
 * @param string       $message    Body.
 * @param string|array $headers    Headers.
 * @param string       $from_email Optional From email.
 * @param string       $from_name  Optional From name.
 * @return bool
 */
function zaec_send_mail( $to, $subject, $message, $headers = array(), $from_email = '', $from_name = '' ) {
	if ( ! is_array( $headers ) ) {
		$headers = $headers ? array( $headers ) : array();
	}

	$cb_from      = null;
	$cb_from_name = null;

	if ( $from_email && is_email( $from_email ) ) {
		$cb_from = static function () use ( $from_email ) {
			return $from_email;
		};
		add_filter( 'wp_mail_from', $cb_from, 20 );
	}
	if ( $from_name ) {
		$cb_from_name = static function () use ( $from_name ) {
			return $from_name;
		};
		add_filter( 'wp_mail_from_name', $cb_from_name, 20 );
	}

	$sent = wp_mail( $to, $subject, $message, $headers );

	if ( $cb_from ) {
		remove_filter( 'wp_mail_from', $cb_from, 20 );
	}
	if ( $cb_from_name ) {
		remove_filter( 'wp_mail_from_name', $cb_from_name, 20 );
	}

	return (bool) $sent;
}

function zaec_handle_inquiry_post() {
	zaec_process_inquiry( false );
}
add_action( 'admin_post_nopriv_zaec_inquiry', 'zaec_handle_inquiry_post' );
add_action( 'admin_post_zaec_inquiry', 'zaec_handle_inquiry_post' );

function zaec_handle_inquiry_ajax() {
	zaec_process_inquiry( true );
}
add_action( 'wp_ajax_nopriv_zaec_inquiry', 'zaec_handle_inquiry_ajax' );
add_action( 'wp_ajax_zaec_inquiry', 'zaec_handle_inquiry_ajax' );
