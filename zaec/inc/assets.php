<?php
/**
 * Učitavanje stilova i skripti (Vite build u assets/build), konfiguracija za JS, GTM + Consent Mode v2.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_build_url( $file ) {
	return ZAEC_THEME_URI . '/assets/build/' . $file;
}

function zaec_build_ver( $file ) {
	$path = ZAEC_THEME_DIR . '/assets/build/' . $file;
	return file_exists( $path ) ? ZAEC_VERSION . '.' . filemtime( $path ) : ZAEC_VERSION;
}

function zaec_enqueue_assets() {
	wp_enqueue_style( 'zaec-app', zaec_build_url( 'app.css' ), array(), zaec_build_ver( 'app.css' ) );
	// naslovnica ima svoj home.css; stilovi podstranica (landing, heroji, WP sadržaj) su u pages.css,
	// pa naslovnica ne blokira prvi prikaz na ~60 % CSS-a koji ne koristi
	if ( is_front_page() ) {
		wp_enqueue_style( 'zaec-home', zaec_build_url( 'home.css' ), array( 'zaec-app' ), zaec_build_ver( 'home.css' ) );
	} else {
		wp_enqueue_style( 'zaec-pages', zaec_build_url( 'pages.css' ), array( 'zaec-app' ), zaec_build_ver( 'pages.css' ) );
	}
	// Bez WP blok stilova na stranicama koje ih ne trebaju (naslovnica i landing stranice).
	if ( is_front_page() || zaec_is_landing() ) {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'global-styles' );
		wp_dequeue_style( 'classic-theme-styles' );
	}
}
add_action( 'wp_enqueue_scripts', 'zaec_enqueue_assets', 20 );

/** ES moduli (app.js na svim stranicama, home.js na naslovnici). */
function zaec_print_modules() {
	$mods = array( 'app.js' );
	if ( is_front_page() ) {
		$mods[] = 'home.js';
	}
	foreach ( $mods as $m ) {
		printf( '<script type="module" src="%s"></script>' . "\n", esc_url( add_query_arg( 'ver', zaec_build_ver( $m ), zaec_build_url( $m ) ) ) );
	}
}
add_action( 'wp_footer', 'zaec_print_modules', 20 );

/** Rano u <head>: klase za JS/motion, konfiguracija, preload fonta. */
function zaec_head_early() {
	$cfg = array(
		'ajax'   => admin_url( 'admin-ajax.php' ),
		'thanks' => zaec_url( 'hvala' ),
		'phone'  => zaec_option( 'phone_display' ),
		'home'   => home_url( '/' ),
		'theme'  => ZAEC_THEME_URI,
		'ver'    => ZAEC_VERSION,
	);
	if ( is_front_page() ) {
		// datoteke 3D svijeta: verzija iz vremena izmjene, pa nova inačica s istim imenom ne ostaje u predmemoriji
		// (npr. sky-stars.bin novog formata uz stari iz predmemorije: nebo se ne bi prikazalo)
		$cfg['world'] = array();
		foreach ( array( 'img/world/land.png', 'img/world/land-eu.png', 'img/world/lights.webp', 'data/osijek-city.bin', 'models/konkatedrala.glb', 'img/world/sky-mw.webp', 'data/sky-stars.bin' ) as $f ) {
			$path               = ZAEC_THEME_DIR . '/assets/' . $f;
			$cfg['world'][ $f ] = file_exists( $path ) ? base_convert( (string) filemtime( $path ), 10, 36 ) : ZAEC_VERSION;
		}
	}
	// grain: tekstura papira (body::after) pokaže se tek kad je cijela učitana, bez pruga djelomičnog uzorka;
	// eh-go: ulaz heroja podstranica kreće kad stignu fontovi naslova a najkasnije 2,4 s nakon početka (hero.css)
	$grain = glob( ZAEC_THEME_DIR . '/assets/build/assets/grain-*.png' );
	$grain = $grain ? zaec_build_url( 'assets/' . basename( $grain[0] ) ) : '';
	echo "<script>(function(){var d=document.documentElement;d.classList.remove('no-js');d.classList.add('js');if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('motion-ok');"
		. "var g=" . wp_json_encode( $grain ) . ";if(g){var i=new Image();i.onload=i.onerror=function(){d.classList.add('grain-ok');};i.src=g;}else d.classList.add('grain-ok');"
		. "var go=function(){d.classList.add('eh-go');};setTimeout(go,2400);document.addEventListener('DOMContentLoaded',function(){var f=document.fonts;if(!f||!f.load){go();return;}Promise.all([f.load('700 64px \"Archivo Variable\"'),f.load('italic 400 64px \"Instrument Serif\"')]).then(function(){requestAnimationFrame(function(){requestAnimationFrame(go);});},go);});"
		. "})();window.ZAEC_CFG=" . wp_json_encode( $cfg ) . ";</script>\n"; // phpcs:ignore
	$font = glob( ZAEC_THEME_DIR . '/assets/build/assets/archivo-latin-standard-normal-*.woff2' );
	if ( $font ) {
		printf( '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n", esc_url( zaec_build_url( 'assets/' . basename( $font[0] ) ) ) );
	}
	if ( is_front_page() ) {
		// svaki uređaj učitava samo svoj poster (isto pravilo za uspravne ekrane kao u CSS-u i world3);
		// AVIF (type: preglednik bez AVIF-a preskače preload i CSS mu daje WebP)
		printf( '<link rel="preload" href="%s" as="image" type="image/avif" fetchpriority="high" media="(min-width: 760px) and (min-aspect-ratio: 82/100)">' . "\n", esc_url( zaec_img( 'world/poster.avif' ) ) );
		printf( '<link rel="preload" href="%s" as="image" type="image/avif" fetchpriority="high" media="(max-width: 759px), (max-aspect-ratio: 82/100)">' . "\n", esc_url( zaec_img( 'world/poster-m.avif' ) ) );
	}
	printf( '<meta name="theme-color" content="%s">' . "\n", is_front_page() ? '#04060c' : '#efebe3' );
	printf( '<link rel="icon" href="%s" type="image/svg+xml">' . "\n", esc_url( zaec_img( 'favicon.svg' ) ) );
	printf( '<link rel="icon" href="%s" sizes="32x32" type="image/png">' . "\n", esc_url( zaec_img( 'favicon-32.png' ) ) );
	printf( '<link rel="apple-touch-icon" href="%s">' . "\n", esc_url( zaec_img( 'apple-touch-icon.png' ) ) );
}
add_action( 'wp_head', 'zaec_head_early', 1 );

/** Google Tag Manager + Consent Mode v2 (samo ako je upisan GTM ID). */
function zaec_gtm_head() {
	$id = zaec_option( 'gtm_id' );
	if ( ! $id ) {
		return;
	}
	?>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{var c=localStorage.getItem('zaec-consent');if(c){c=JSON.parse(c);gtag('consent','update',{analytics_storage:c.a?'granted':'denied',ad_storage:c.m?'granted':'denied',ad_user_data:c.m?'granted':'denied',ad_personalization:c.m?'granted':'denied'});}}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','<?php echo esc_js( $id ); ?>');
</script>
	<?php
}
add_action( 'wp_head', 'zaec_gtm_head', 2 );

function zaec_consent_banner() {
	if ( ! zaec_option( 'gtm_id' ) ) {
		return;
	}
	$privacy = zaec_option( 'privacy_url' ) ? zaec_option( 'privacy_url' ) : zaec_url( 'privatnost' );
	?>
	<div class="consent" data-consent hidden role="dialog" aria-live="polite" aria-label="Postavke kolačića">
		<p><b>Kolačići za analitiku?</b> Koristimo ih samo uz vašu privolu, da vidimo što na webu pomaže. <a href="<?php echo esc_url( $privacy ); ?>">Više</a></p>
		<div class="consent-actions">
			<button type="button" class="btn btn--sm btn--ghost" data-consent-choice="deny">Samo nužni</button>
			<button type="button" class="btn btn--sm" data-consent-choice="analytics">Dopusti analitiku</button>
			<button type="button" class="btn btn--sm btn--signal" data-consent-choice="all">Dopusti sve</button>
		</div>
	</div>
	<?php
}
add_action( 'wp_footer', 'zaec_consent_banner', 5 );
