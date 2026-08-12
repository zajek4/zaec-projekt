<?php
/**
 * Conditional asset loading.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_enqueue_assets() {
	wp_enqueue_style(
		'zaec-fonts',
		'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap',
		array(),
		null
	);

	if ( is_front_page() ) {
		wp_enqueue_style( 'zaec-front', get_theme_file_uri( 'assets/css/front-page.css' ), array( 'zaec-fonts' ), zaec_asset_version( 'assets/css/front-page.css' ) );

		wp_enqueue_script( 'zaec-gsap', get_theme_file_uri( 'assets/js/vendor/gsap.min.js' ), array(), zaec_asset_version( 'assets/js/vendor/gsap.min.js' ), true );
		wp_enqueue_script( 'zaec-scrolltrigger', get_theme_file_uri( 'assets/js/vendor/ScrollTrigger.min.js' ), array( 'zaec-gsap' ), zaec_asset_version( 'assets/js/vendor/ScrollTrigger.min.js' ), true );
		wp_enqueue_script( 'zaec-scrollto', get_theme_file_uri( 'assets/js/vendor/ScrollToPlugin.min.js' ), array( 'zaec-gsap' ), zaec_asset_version( 'assets/js/vendor/ScrollToPlugin.min.js' ), true );
		wp_enqueue_script( 'zaec-lenis', get_theme_file_uri( 'assets/js/vendor/lenis.min.js' ), array(), zaec_asset_version( 'assets/js/vendor/lenis.min.js' ), true );
		wp_enqueue_script( 'zaec-home', get_theme_file_uri( 'assets/js/home.module.js' ), array( 'zaec-scrolltrigger', 'zaec-scrollto', 'zaec-lenis' ), zaec_asset_version( 'assets/js/home.module.js' ), true );

		$occupations = zaec_front_repeater( 'occupations' );
		$js_occ      = array();
		foreach ( array_slice( $occupations, 0, 8 ) as $occupation ) {
			$js_occ[] = array(
				'title' => isset( $occupation['title'] ) ? wp_strip_all_tags( $occupation['title'] ) : '',
				'sub'   => isset( $occupation['sub'] ) ? wp_strip_all_tags( $occupation['sub'] ) : '',
				'q'     => isset( $occupation['q'] ) ? wp_strip_all_tags( $occupation['q'] ) : '',
			);
		}
		$opts = zaec_get_options();
		wp_add_inline_script( 'zaec-home', 'window.ZAEC_HOME=' . wp_json_encode( array( 'occupations' => $js_occ ) ) . ';', 'before' );
		wp_add_inline_script(
			'zaec-home',
			'window.ZAEC_WP=' . wp_json_encode(
				array(
					'ajaxUrl'         => admin_url( 'admin-ajax.php' ),
					'submitLabel'     => __( 'Pošalji upit', 'zaec' ),
					'sendingLabel'    => __( 'Šaljemo…', 'zaec' ),
					'nonceMessage'      => __( 'Sigurnosna provjera je zastarjela. Osvježavamo obrazac…', 'zaec' ),
					'invalidResponse'   => __( 'Server nije vratio valjan odgovor. Pokušajte ponovno.', 'zaec' ),
					'ajaxActionMessage' => __( 'Kontakt forma trenutno nije povezana s AJAX handlerom. Provjerite aktivnu temu.', 'zaec' ),
					'sendingMessage'    => __( 'Šaljemo upit…', 'zaec' ),
					'successMessage'    => ! empty( $opts['form_success_message'] ) ? $opts['form_success_message'] : __( 'Upit je stigao.', 'zaec' ),
					'phoneDisplay'    => isset( $opts['phone_display'] ) ? $opts['phone_display'] : '',
				)
			) . ';',
			'before'
		);
	} else {
		wp_enqueue_style( 'zaec-global', get_theme_file_uri( 'assets/css/global.css' ), array( 'zaec-fonts' ), zaec_asset_version( 'assets/css/global.css' ) );
		wp_enqueue_style( 'zaec-content', get_theme_file_uri( 'assets/css/content.css' ), array( 'zaec-global' ), zaec_asset_version( 'assets/css/content.css' ) );
		wp_enqueue_script( 'zaec-global', get_theme_file_uri( 'assets/js/global.js' ), array(), zaec_asset_version( 'assets/js/global.js' ), true );
	}

	if ( is_post_type_archive( 'projekti' ) || is_singular( 'projekti' ) ) {
		wp_enqueue_style( 'zaec-projects', get_theme_file_uri( 'assets/css/projects.css' ), array( 'zaec-content' ), zaec_asset_version( 'assets/css/projects.css' ) );
	}

	if ( is_singular( 'projekti' ) ) {
		wp_enqueue_script( 'zaec-project-gsap', get_theme_file_uri( 'assets/js/vendor/gsap.min.js' ), array(), zaec_asset_version( 'assets/js/vendor/gsap.min.js' ), true );
		wp_enqueue_script( 'zaec-project-scrolltrigger', get_theme_file_uri( 'assets/js/vendor/ScrollTrigger.min.js' ), array( 'zaec-project-gsap' ), zaec_asset_version( 'assets/js/vendor/ScrollTrigger.min.js' ), true );
		wp_enqueue_script( 'zaec-project-lenis', get_theme_file_uri( 'assets/js/vendor/lenis.min.js' ), array( 'zaec-project-scrolltrigger' ), zaec_asset_version( 'assets/js/vendor/lenis.min.js' ), true );
		wp_enqueue_script( 'zaec-project', get_theme_file_uri( 'assets/js/project.module.js' ), array( 'zaec-project-lenis' ), zaec_asset_version( 'assets/js/project.module.js' ), true );
	}

	if ( is_404() ) {
		wp_enqueue_style( 'zaec-404', get_theme_file_uri( 'assets/css/404.css' ), array( 'zaec-global' ), zaec_asset_version( 'assets/css/404.css' ) );
		wp_enqueue_script( 'zaec-404', get_theme_file_uri( 'assets/js/404.module.js' ), array(), zaec_asset_version( 'assets/js/404.module.js' ), true );
	}
}
add_action( 'wp_enqueue_scripts', 'zaec_enqueue_assets' );

function zaec_module_script_tag( $tag, $handle, $src ) {
	if ( in_array( $handle, array( 'zaec-home', 'zaec-404', 'zaec-project' ), true ) ) {
		return '<script type="module" src="' . esc_url( $src ) . '"></script>' . "\n";
	}
	if ( 'zaec-global' === $handle ) {
		return '<script defer src="' . esc_url( $src ) . '"></script>' . "\n";
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'zaec_module_script_tag', 10, 3 );

function zaec_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = 'https://fonts.googleapis.com';
		$urls[] = array( 'href' => 'https://fonts.gstatic.com', 'crossorigin' => 'anonymous' );
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'zaec_resource_hints', 10, 2 );
