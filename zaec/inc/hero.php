<?php
/**
 * Heroji podstranica — infrastruktura (razine, slojevi slika, metapodaci kadra, preload).
 * Režija pojedinih heroja je u template-parts/hero/*.php i src/js/hero/*.js. Vidi docs/hero-art-direction.md.
 *
 * Razine:
 *  - potpis (izrada, onama, kontakt): vlastiti kadar i pokret, zasebna mobilna kompozicija;
 *  - editorial: usluge, djelatnosti, hubovi, lokalno, provjera, cijene, radovi;
 *  - quiet: vodiči, članci, pravne i pomoćne stranice.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const ZAEC_SIGNATURE_HEROES = array( 'izrada', 'onama', 'kontakt' );

/** Vrsta heroja za landing: izričito ('hero' u registru) ili prema tipu stranice. */
function zaec_hero_kind( $l ) {
	if ( ! empty( $l['hero'] ) ) {
		return (string) $l['hero'];
	}
	return in_array( $l['type'] ?? '', array( 'service', 'industry', 'local', 'hub-services', 'hub-industries', 'check', 'pricing', 'projects' ), true ) ? 'editorial' : 'quiet';
}

/** Metapodaci kadra (položaji u postocima slike) iz alata za kadrove (tools/art). */
function zaec_hero_meta( $name ) {
	static $cache = array();
	if ( ! array_key_exists( $name, $cache ) ) {
		$file           = ZAEC_THEME_DIR . '/assets/img/hero/' . sanitize_file_name( $name ) . '.json';
		$cache[ $name ] = file_exists( $file ) ? json_decode( (string) file_get_contents( $file ), true ) : null;
	}
	return $cache[ $name ];
}

/**
 * Sloj kadra: <picture> s dvije kompozicije — uspravna (mobitel, 9:16) i široka (16:9). Nije izrez iste slike,
 * nego zaseban kadar. Datoteke: hero/<ime>-d.webp (2400w) + -d-1600.webp, hero/<ime>-m.webp (1080w) + -m-720.webp.
 */
function zaec_hero_picture( $name, $args = array() ) {
	$a    = wp_parse_args( $args, array( 'class' => '', 'alt' => '', 'priority' => false, 'ext' => 'webp' ) );
	$ext  = $a['ext'];
	$d    = zaec_img( "hero/{$name}-d.{$ext}" );
	$d16  = zaec_img( "hero/{$name}-d-1600.{$ext}" );
	$m    = zaec_img( "hero/{$name}-m.{$ext}" );
	$m7   = zaec_img( "hero/{$name}-m-720.{$ext}" );
	$load = $a['priority'] ? ' fetchpriority="high"' : ' loading="eager"';
	printf(
		'<picture class="%1$s"><source media="(max-aspect-ratio: 4/5)" srcset="%2$s 720w, %3$s 1080w" sizes="100vw"><img src="%4$s" srcset="%5$s 1600w, %4$s 2400w" sizes="100vw" alt="%6$s" width="2400" height="1350" decoding="async"%7$s></picture>',
		esc_attr( $a['class'] ),
		esc_url( $m7 ),
		esc_url( $m ),
		esc_url( $d ),
		esc_url( $d16 ),
		esc_attr( $a['alt'] ),
		$load // phpcs:ignore
	);
}

/** Prvi sloj kadra učitava se odmah (LCP) — svaki uređaj samo svoju kompoziciju. */
function zaec_hero_preload() {
	if ( ! is_page() ) {
		return;
	}
	$l = zaec_get_landing();
	if ( ! $l ) {
		return;
	}
	$first = array( 'izrada' => 'izrada-plan', 'onama' => 'onama-bg', 'kontakt' => 'kontakt-bg' );
	$kind  = zaec_hero_kind( $l );
	if ( empty( $first[ $kind ] ) ) {
		return;
	}
	$n = $first[ $kind ];
	printf( '<link rel="preload" as="image" type="image/webp" fetchpriority="high" media="(min-aspect-ratio: 4/5)" imagesrcset="%s 1600w, %s 2400w" imagesizes="100vw">' . "\n", esc_url( zaec_img( "hero/{$n}-d-1600.webp" ) ), esc_url( zaec_img( "hero/{$n}-d.webp" ) ) );
	printf( '<link rel="preload" as="image" type="image/webp" fetchpriority="high" media="(max-aspect-ratio: 4/5)" imagesrcset="%s 720w, %s 1080w" imagesizes="100vw">' . "\n", esc_url( zaec_img( "hero/{$n}-m-720.webp" ) ), esc_url( zaec_img( "hero/{$n}-m.webp" ) ) );
}
add_action( 'wp_head', 'zaec_hero_preload', 2 );

/** Blokovi koje potpisni hero preuzima u svoju scenu (npr. anatomija na Izradi) ne ponavljaju se ispod. */
function zaec_hero_prepare( $l ) {
	$kind = zaec_hero_kind( $l );
	if ( 'izrada' === $kind ) {
		$l['blocks'] = array_values( array_filter( (array) $l['blocks'], static fn( $b ) => 'anatomy' !== ( $b['type'] ?? '' ) ) );
	}
	// Kontakt: forma je u heroju (#upit), blok ispod postaje nastavak — koraci nakon upita i izravni kontakti
	if ( 'kontakt' === $kind ) {
		$l['blocks'] = array_map( static fn( $b ) => 'contact' === ( $b['type'] ?? '' ) ? array_merge( $b, array( 'after' => true ) ) : $b, (array) $l['blocks'] );
	}
	return $l;
}

/** Blok "Kratki odgovor" (za AI pretraživače i brze čitače) — dijele ga sve vrste heroja. */
function zaec_hero_answer( $l, $class = '' ) {
	if ( empty( $l['answer'] ) ) {
		return;
	}
	echo '<div class="wrap ' . esc_attr( $class ) . '"><div class="answer" data-reveal><p class="mono answer-k">';
	zaec_the_icon( 'lightbulb', 16 );
	echo ' Kratki odgovor</p><p>' . esc_html( $l['answer'] ) . '</p></div></div>';
}
