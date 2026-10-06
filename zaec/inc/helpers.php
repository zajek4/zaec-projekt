<?php
/**
 * Pomoćne funkcije: opcije, ikone, logo, URL-ovi, sigurni naslovi.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Jedna vrijednost iz ZAEC postavki. */
function zaec_option( $key, $fallback = '' ) {
	$options = zaec_get_options();
	return isset( $options[ $key ] ) && '' !== $options[ $key ] ? $options[ $key ] : $fallback;
}

function zaec_phone_href( $phone = '' ) {
	$phone = $phone ? $phone : zaec_option( 'phone_raw' );
	return 'tel:' . preg_replace( '/[^0-9+]/', '', (string) $phone );
}

function zaec_whatsapp_href() {
	$wa = preg_replace( '/[^0-9]/', '', (string) zaec_option( 'whatsapp' ) );
	return $wa ? 'https://wa.me/' . $wa : '';
}

function zaec_maps_href() {
	$q = trim( zaec_option( 'address' ) . ', ' . zaec_option( 'postal_code' ) . ' ' . zaec_option( 'city' ) );
	return 'https://www.google.com/maps/search/?api=1&query=' . rawurlencode( $q );
}

function zaec_asset( $path ) {
	return ZAEC_THEME_URI . '/assets/' . ltrim( $path, '/' );
}

function zaec_img( $file ) {
	return zaec_asset( 'img/' . ltrim( $file, '/' ) );
}

/** srcset za kadrove podstranica koji imaju manju inačicu (<ime>-800.webp, tools/art/derive.mjs); inače ''. */
function zaec_img_srcset( $file ) {
	$file  = ltrim( (string) $file, '/' );
	$small = preg_replace( '/\.webp$/', '-800.webp', $file );
	if ( $small === $file || ! file_exists( ZAEC_THEME_DIR . '/assets/img/' . $small ) ) {
		return '';
	}
	return zaec_img( $small ) . ' 800w, ' . zaec_img( $file ) . ' 1400w';
}

/** URL stranice prema putanji (landing ključu) s fallbackom na home_url(putanja). */
function zaec_url( $path ) {
	$path = trim( (string) $path, '/' );
	if ( '' === $path ) {
		return home_url( '/' );
	}
	if ( 0 === strpos( $path, '#' ) ) {
		return home_url( '/' . $path );
	}
	if ( preg_match( '#^https?://#', $path ) ) {
		return $path;
	}
	$hash = '';
	if ( false !== strpos( $path, '#' ) ) {
		list( $path, $hash ) = explode( '#', $path, 2 );
		$hash = '#' . $hash;
	}
	$url = function_exists( 'zaec_landing_url' ) ? zaec_landing_url( $path ) : '';
	return ( $url ? $url : home_url( '/' . $path . '/' ) ) . $hash;
}

/** Dopušta samo <em>, <strong>, <br> u naslovima. */
function zaec_kses_title( $html ) {
	return wp_kses( (string) $html, array( 'em' => array(), 'strong' => array(), 'br' => array() ) );
}

function zaec_kses_text( $html ) {
	return wp_kses( (string) $html, array( 'em' => array(), 'strong' => array(), 'br' => array(), 'a' => array( 'href' => array(), 'target' => array(), 'rel' => array() ) ) );
}

/** Inline Solar ikona (generirano u inc/icons-data.php). */
function zaec_icon( $name, $size = 20, $class = '', $variant = '' ) {
	static $icons = null;
	if ( null === $icons ) {
		$file  = ZAEC_THEME_DIR . '/inc/icons-data.php';
		$icons = file_exists( $file ) ? include $file : array();
	}
	$key = $variant ? $name . '@' . $variant : $name;
	if ( empty( $icons[ $key ] ) ) {
		$key = $name;
	}
	if ( empty( $icons[ $key ] ) ) {
		return '';
	}
	return sprintf(
		'<svg class="icon %1$s" width="%2$d" height="%2$d" viewBox="0 0 24 24" aria-hidden="true" focusable="false">%3$s</svg>',
		esc_attr( $class ),
		(int) $size,
		$icons[ $key ] // phpcs:ignore -- statični, provjereni SVG iz build skripte.
	);
}

function zaec_the_icon( $name, $size = 20, $class = '', $variant = '' ) {
	echo zaec_icon( $name, $size, $class, $variant ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/** ZAEC znak — čisti vektor rekonstruiran iz originalnog logotipa. */
function zaec_logo( $variant = 'full', $class = 'zaec-logo', $title = '' ) {
	$vb    = 'full' === $variant ? '127 98 938 720' : '252 225 691 467';
	$frame = 'full' === $variant ? '<path class="zl-frame" d="M254 98h685v11H254zM254 807h685v11H254zM127 226h11v465h-11zM1054 226h11v465h-11z"/>' : '';
	$label = $title ? ' role="img" aria-label="' . esc_attr( $title ) . '"' : ' aria-hidden="true"';
	return '<svg class="' . esc_attr( $class ) . '" viewBox="' . $vb . '"' . $label . ' focusable="false">' . $frame
		. '<path class="zl-z1" d="M252 225h167l-38 60c-9.5.8-18 1.4-26.5 2-23.9 1.9-40.2 7.7-52.4 18.7-14.8 13.4-27.5 40.5-33.6 71.7-2.4 12.4-4.6 15.7-16.5 17.6z"/>'
		. '<path class="zl-z2" d="M544 225h115L375 692H254z"/>'
		. '<path class="zl-e1" d="M781 225h158v154l-1.4-1.2c-4.5-15-6.2-19.5-9.9-26-12.4-21.7-41.3-50.7-57.9-58.3-14.9-6.8-47.1-9.3-95.9-7.7L741 287z"/>'
		. '<path class="zl-e2" d="M657 419h156v66H619z"/>'
		. '<path class="zl-e3" d="M490 692h453V527h-4.4c-9.6 0-15.2 8-25.6 37-14.6 41-28.7 57.6-53.5 63.1-6.7 1.5-20 1.3-33.5 1.3L531 628z"/>'
		. '</svg>';
}

/** Gumb (paralelogram). */
function zaec_button( $label, $href, $variant = '', $args = array() ) {
	$classes = trim( 'btn ' . ( $variant ? 'btn--' . $variant : '' ) . ' ' . ( $args['class'] ?? '' ) );
	$icon    = $args['icon'] ?? 'arrow-right';
	$before  = ! empty( $args['icon_before'] ) ? zaec_icon( $args['icon_before'], 18 ) . ' ' : '';
	$after   = $icon ? ' ' . zaec_icon( $icon, 18, 'icon-arrow' ) : '';
	$attrs   = '';
	foreach ( array( 'track', 'magnetic' ) as $a ) {
		if ( ! empty( $args[ $a ] ) ) {
			$attrs .= ' data-' . $a . '="' . esc_attr( true === $args[ $a ] ? '' : $args[ $a ] ) . '"';
		}
	}
	return sprintf( '<a class="%s" href="%s"%s>%s%s%s</a>', esc_attr( $classes ), esc_url( $href ), $attrs, $before, esc_html( $label ), $after );
}

/** Je li aktivan SEO plugin (tada dio meta sloja prepuštamo pluginu). */
function zaec_is_seo_plugin_active() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) || defined( 'AIOSEO_VERSION' ) || class_exists( 'SEOPress\\Core\\Kernel' ) || defined( 'THE_SEO_FRAMEWORK_VERSION' );
}

/** Splitter-friendly naslov s klasom i data-split atributom. */
function zaec_heading( $html, $tag = 'h2', $class = 'h2', $split = true, $id = '' ) {
	printf(
		'<%1$s class="%2$s"%3$s%4$s>%5$s</%1$s>',
		tag_escape( $tag ),
		esc_attr( $class ),
		$split ? ' data-split' : '',
		$id ? ' id="' . esc_attr( $id ) . '"' : '',
		zaec_kses_title( $html ) // phpcs:ignore
	);
}

/** Code tag broj (01, 02…). */
function zaec_pad( $i ) {
	return str_pad( (string) $i, 2, '0', STR_PAD_LEFT );
}
