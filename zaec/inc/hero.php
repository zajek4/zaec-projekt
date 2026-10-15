<?php
/**
 * Heroji podstranica — infrastruktura (razine, slojevi slika, metapodaci kadra, preload).
 * Režija pojedinih heroja je u template-parts/hero/*.php i src/js/hero/*.js. Vidi docs/hero-art-direction.md.
 *
 * Razine:
 *  - potpis (izrada, kontakt): vlastiti kadar i pokret, zasebna mobilna kompozicija;
 *  - editorial: usluge, djelatnosti, hubovi, lokalno, provjera, cijene, radovi, O nama (list nacrta);
 *  - quiet: vodiči, članci, pravne i pomoćne stranice.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const ZAEC_SIGNATURE_HEROES = array( 'izrada', 'kontakt' );

/** Vrsta heroja za landing: izričito ('hero' u registru) ili prema tipu stranice. */
function zaec_hero_kind( $l ) {
	if ( ! empty( $l['hero'] ) ) {
		return (string) $l['hero'];
	}
	return in_array( $l['type'] ?? '', array( 'service', 'industry', 'local', 'hub', 'hub-industries', 'check', 'pricing', 'projects' ), true ) ? 'editorial' : 'quiet';
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
	// fade: slika se pojavi tek kad je učitana (hero.css, img.hero-fade), bez čekanja na skriptu stranice
	$a    = wp_parse_args( $args, array( 'class' => '', 'alt' => '', 'priority' => false, 'ext' => 'webp', 'fade' => false ) );
	$ext  = $a['ext'];
	$d    = zaec_img( "hero/{$name}-d.{$ext}" );
	$d16  = zaec_img( "hero/{$name}-d-1600.{$ext}" );
	$m    = zaec_img( "hero/{$name}-m.{$ext}" );
	$m7   = zaec_img( "hero/{$name}-m-720.{$ext}" );
	$load = $a['priority'] ? ' fetchpriority="high"' : ' loading="eager"';
	if ( $a['fade'] ) {
		$load .= ' class="hero-fade" ' . zaec_hero_fade_onload();
	}
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

/**
 * Slika kadra koja se pojavi tek kad je učitana (klasa hero-fade + ovaj onload). Handler je inline, pa ne čeka module
 * skripte na dnu stranice. Stil je u hero.css (img.hero-fade); bez kretanja ili bez JS-a slika je odmah vidljiva.
 * Nakon 3 s CSS sliku pokaže i bez onloada, pa kasniji onload samo označi (is-late) i ne pokreće ulaz ponovno.
 */
function zaec_hero_fade_onload() {
	return 'onload="this.classList.add(performance.now()<3e3?\'is-in\':\'is-late\')"';
}

/**
 * Naglašena riječ naslova ostaje na papiru: u kadru je difference boji zlatno, a zlatno je svjetlo (design/02).
 * Ako bi riječ ušla u kadar, prijelom ide ispred nje (najviše redak više; design/09, B): s kadrom desno riječ
 * počinje redak uz lijevi rub, a u složenom rasporedu prelazi iz prvog retka (na rubu kadra) na papir.
 * Inline odmah iza naslova, prije prvog iscrtavanja: dok je bio u skripti stranice, prijelom je stizao nakon
 * iscrtavanja i naslov je dobivao redak, a sve ispod skočilo (CLS do 0,05). Ponovi se kad stignu fontovi (druge
 * širine riječi) i kad se promijeni širina prozora. Naslov se pri ulazu diže (translateY u hero.css), pa se taj
 * pomak oduzima od okomitog preklapanja.
 */
function zaec_hero_em_fit() {
	?>
<script>(function(){var s=document.currentScript.closest('.eh'),t=s&&s.querySelector('.eh-title'),e=t&&t.querySelector('em'),f=s&&s.querySelector('.eh-frame'),w=0;if(!e||!f||s.classList.contains('eh--dark'))return;function fit(all){if(!all&&innerWidth===w)return;w=innerWidth;var b=t.querySelector('br.eh-br');if(b)b.remove();var F=f.getBoundingClientRect(),T=t.getBoundingClientRect(),tr=getComputedStyle(t).transform,dy=tr&&tr!=='none'?new DOMMatrixReadOnly(tr).m42:0,r=[].slice.call(e.getClientRects());var hit=r.some(function(q){return q.right>F.left+2&&q.left<F.right&&Math.min(q.bottom-dy,F.bottom)-Math.max(q.top-dy,F.top)>q.height/3;});if(hit&&r[0]&&r[0].left>T.left+2){b=document.createElement('br');b.className='eh-br';e.before(b);}}fit(1);if(document.fonts)document.fonts.ready.then(function(){fit(1);});addEventListener('resize',function(){fit();});})();</script>
	<?php
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
	$first = array( 'izrada' => 'izrada-plan', 'kontakt' => 'kontakt-bg' );
	$kind  = zaec_hero_kind( $l );
	if ( empty( $first[ $kind ] ) ) {
		return;
	}
	$n = $first[ $kind ];
	printf( '<link rel="preload" as="image" type="image/webp" fetchpriority="high" media="(min-aspect-ratio: 4/5)" imagesrcset="%s 1600w, %s 2400w" imagesizes="100vw">' . "\n", esc_url( zaec_img( "hero/{$n}-d-1600.webp" ) ), esc_url( zaec_img( "hero/{$n}-d.webp" ) ) );
	printf( '<link rel="preload" as="image" type="image/webp" fetchpriority="high" media="(max-aspect-ratio: 4/5)" imagesrcset="%s 720w, %s 1080w" imagesizes="100vw">' . "\n", esc_url( zaec_img( "hero/{$n}-m-720.webp" ) ), esc_url( zaec_img( "hero/{$n}-m.webp" ) ) );
}
add_action( 'wp_head', 'zaec_hero_preload', 2 );

/**
 * Nacrt djelatnosti (design/02): oba pogleda lista kao inline SVG (stilovi i fontovi stranice moraju djelovati
 * na tekst u crtežu, zato ne <img>). Generira ih tools/art/nacrt/build.mjs. Nema lista → null.
 */
/** Sličica lista (arak na hubu): stranica čiji list ima sličicu (<slug>-t.svg); URL ili ''. Slug kao u zaec_nacrt(). */
function zaec_nacrt_thumb( $l ) {
	$slug = (string) ( $l['slug'] ?? basename( (string) ( $l['key'] ?? '' ) ) );
	if ( '' === $slug ) {
		return '';
	}
	$file = 'nacrt/' . sanitize_file_name( $slug ) . '-t.svg';
	return is_readable( ZAEC_THEME_DIR . '/assets/img/' . $file ) ? zaec_img( $file ) : '';
}

function zaec_nacrt( $l ) {
	// stranica djelatnosti: njezin list; hub djelatnosti: naslovni list kompleta (kazalo); stranica s 'nacrt' u
	// registru (O nama): list istog imena kao slug
	$type = (string) ( $l['type'] ?? '' );
	$slug = 'hub-industries' === $type ? 'djelatnosti' : (string) ( $l['slug'] ?? ( empty( $l['nacrt'] ) ? '' : basename( (string) ( $l['key'] ?? '' ) ) ) );
	if ( '' === $slug || ( ! in_array( $type, array( 'industry', 'hub-industries' ), true ) && empty( $l['nacrt'] ) ) ) {
		return null;
	}
	$dir = ZAEC_THEME_DIR . '/assets/img/nacrt/' . sanitize_file_name( $slug );
	if ( ! is_readable( $dir . '-d.svg' ) || ! is_readable( $dir . '-m.svg' ) ) {
		return null;
	}
	// podaci studija u listu (sastavnica i svjetlo lista O nama) dolaze iz postavki, kao i na ostatku weba
	$o   = zaec_get_options();
	$fit = array(
		'{owner}'  => esc_html( (string) $o['owner_name'] ),
		'{adresa}' => esc_html( mb_strtoupper( $o['address'] . ' · ' . $o['postal_code'] . ' ' . $o['city'] ) ),
		'{sati}'   => esc_html( mb_strtoupper( (string) $o['hours'] ) ),
	);
	return array( strtr( (string) file_get_contents( $dir . '-d.svg' ), $fit ), strtr( (string) file_get_contents( $dir . '-m.svg' ), $fit ) );
}

/** Blokovi koje potpisni hero preuzima u svoju scenu (npr. anatomija na Izradi) ne ponavljaju se ispod. */
function zaec_hero_prepare( $l ) {
	$kind = zaec_hero_kind( $l );
	// Kontakt: forma je u heroju (#upit), blok ispod postaje nastavak — koraci nakon upita i izravni kontakti
	if ( 'kontakt' === $kind ) {
		$l['blocks'] = array_map( static fn( $b ) => 'contact' === ( $b['type'] ?? '' ) ? array_merge( $b, array( 'after' => true ) ) : $b, (array) $l['blocks'] );
	}
	return $l;
}

/**
 * Blok „Ukratko“: sažetak stranice (koristan i tražilicama i AI-ju) kao tipografski blok, bez kartice, okvira i
 * ikone (design/04, točka 9). Ispisuje ga zaec_render_blocks iza prvog bloka (druga sekcija stranice; bez blokova
 * odmah iza heroja), najviše jednom po stranici.
 */
function zaec_answer_block( $l ) {
	static $done = false;
	if ( $done || empty( $l['answer'] ) ) {
		return;
	}
	$done = true;
	echo '<section class="block block--ukratko"><div class="wrap"><div class="ukratko" data-reveal><p class="kicker">Ukratko</p><p class="ukratko-t">' . esc_html( $l['answer'] ) . '</p></div></div></section>';
}

/**
 * Pozivi u heroju podstranice: glavni (iz registra) + drugi korak "Pošaljite upit". Telefon nije u primarnim
 * pozicijama (odluka vlasnika 8. 10. 2026: cilj je ispunjen upit); broj je na stranici Kontakt.
 * Ako glavni poziv već vodi na upit, drugog nema.
 */
function zaec_hero_ctas( $cta, $href ) {
	echo '<div class="phero-cta">';
	echo zaec_button( $cta[0], $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore
	if ( false === strpos( (string) $cta[1], 'kontakt' ) ) {
		echo '<a class="btn btn--ghost" href="' . esc_url( zaec_inquiry_url() ) . '" data-track="cta_inquiry">Pošaljite upit</a>'; // phpcs:ignore
	}
	echo '</div>';
}
