<?php
/**
 * SEO + AI vidljivost: meta opis, canonical, Open Graph, JSON-LD graf entiteta,
 * robots.txt (dopušta pretraživače i AI asistente), /llms.txt.
 * Uz aktivan SEO dodatak (Yoast, Rank Math…) tema prepušta meta/OG/organizaciju dodatku,
 * a zadržava samo specifičnu schemu (Service, FAQ) da se ništa ne duplicira.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_org_id() {
	return home_url( '/#organizacija' );
}

/** Opis trenutne stranice. */
function zaec_meta_description() {
	if ( is_front_page() ) {
		return 'Izrada web stranica, webshopova i landing stranica koje donose upite. SEO, lokalni SEO, AI vidljivost i GA4 praćenje za obrte i tvrtke — Osijek i cijela Hrvatska. Fiksna cijena u pisanoj ponudi.';
	}
	$l = zaec_get_landing();
	if ( $l && ! empty( $l['description'] ) ) {
		return $l['description'];
	}
	if ( is_singular() ) {
		$p = get_queried_object();
		if ( $p instanceof WP_Post ) {
			$d = has_excerpt( $p ) ? get_the_excerpt( $p ) : wp_trim_words( wp_strip_all_tags( strip_shortcodes( $p->post_content ) ), 28, '…' );
			return trim( wp_strip_all_tags( $d ) );
		}
	}
	if ( is_post_type_archive( 'projekti' ) ) {
		return 'Radovi ZAEC web studija: web stranice za ustanove i B2B tvrtke. Stvarni projekti koje možete otvoriti i provjeriti, s problemom, rješenjem i ishodom.';
	}
	if ( is_home() ) {
		return 'Vodiči za obrtnike i male tvrtke: web koji donosi upite, Google Business profil, AI vidljivost, GA4 praćenje i priprema za izradu weba.';
	}
	return get_bloginfo( 'description' );
}

function zaec_is_noindex() {
	$l = zaec_get_landing();
	return ( $l && ! empty( $l['noindex'] ) ) || is_search() || is_404() || is_attachment() || ( is_archive() && ! is_post_type_archive( 'projekti' ) && ! is_category( 'vodici' ) );
}

function zaec_og_image() {
	if ( is_singular() && has_post_thumbnail() ) {
		return (string) get_the_post_thumbnail_url( null, 'zaec-hero' );
	}
	// landing stranice: JPG 1200×630 izrezan iz kadra stranice (tools/art/og.mjs), inače zadana slika
	$l = zaec_get_landing();
	if ( $l && ! empty( $l['image'] ) ) {
		$og = 'og/' . pathinfo( (string) $l['image'], PATHINFO_FILENAME ) . '.jpg';
		if ( file_exists( ZAEC_THEME_DIR . '/assets/img/' . $og ) ) {
			return zaec_img( $og );
		}
	}
	return zaec_img( 'og/default.png' );
}

function zaec_canonical() {
	if ( is_front_page() ) {
		return home_url( '/' );
	}
	if ( is_singular() ) {
		return (string) wp_get_canonical_url();
	}
	if ( is_post_type_archive( 'projekti' ) ) {
		return (string) get_post_type_archive_link( 'projekti' );
	}
	if ( is_home() ) {
		$pp = (int) get_option( 'page_for_posts' );
		return $pp ? get_permalink( $pp ) : home_url( '/' );
	}
	return '';
}

function zaec_head_meta() {
	if ( zaec_is_noindex() ) {
		echo '<meta name="robots" content="noindex, follow">' . "\n";
	}
	if ( zaec_is_seo_plugin_active() ) {
		return;
	}
	$desc  = zaec_meta_description();
	$title = wp_get_document_title();
	$url   = zaec_canonical();
	if ( $desc ) {
		printf( '<meta name="description" content="%s">' . "\n", esc_attr( $desc ) );
	}
	if ( ! zaec_is_noindex() ) {
		echo '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">' . "\n";
	}
	// Canonical za singular ispisuje WP core (rel_canonical); za ostale ispisujemo mi.
	if ( $url && ! is_singular() ) {
		printf( '<link rel="canonical" href="%s">' . "\n", esc_url( $url ) );
	}
	$img = zaec_og_image();
	$og  = array(
		'og:type'        => is_singular( 'post' ) ? 'article' : 'website',
		'og:locale'      => 'hr_HR',
		'og:site_name'   => 'ZAEC',
		'og:title'       => $title,
		'og:description' => $desc,
		'og:url'         => $url ? $url : home_url( add_query_arg( array() ) ),
		'og:image'       => $img,
	);
	// vlastite slike za dijeljenje su uvijek 1200×630
	if ( false !== strpos( $img, '/assets/img/og/' ) ) {
		$og['og:image:width']  = '1200';
		$og['og:image:height'] = '630';
	}
	foreach ( $og as $p => $c ) {
		if ( $c ) {
			printf( '<meta property="%s" content="%s">' . "\n", esc_attr( $p ), esc_attr( $c ) );
		}
	}
	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	printf( '<meta name="geo.region" content="HR-14"><meta name="geo.placename" content="%s"><meta name="geo.position" content="%s;%s">' . "\n", esc_attr( zaec_option( 'city' ) ), esc_attr( zaec_option( 'latitude' ) ), esc_attr( zaec_option( 'longitude' ) ) );
}
add_action( 'wp_head', 'zaec_head_meta', 3 );

/* ───────────────────────── JSON-LD ───────────────────────── */

function zaec_schema_org() {
	$o       = zaec_get_options();
	$same_as = array_values( array_filter( array_map( 'trim', preg_split( '/\r?\n/', (string) $o['same_as'] ) ), static fn( $u ) => (bool) filter_var( $u, FILTER_VALIDATE_URL ) ) );
	$offers  = array();
	foreach ( zaec_services() as $s ) {
		$offers[] = array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => $s['title'], 'url' => zaec_url( $s['key'] ) ) );
	}
	$org = array(
		'@type'                     => array( 'ProfessionalService', 'LocalBusiness' ),
		'@id'                       => zaec_org_id(),
		'name'                      => 'ZAEC',
		'alternateName'             => 'ZAEC web studio',
		'legalName'                 => $o['legal_name'],
		'description'               => 'Web studio iz Osijeka: izrada web stranica, webshopova i landing stranica, SEO, lokalni SEO, Google Business profil, AI vidljivost i GA4 praćenje konverzija za obrte i tvrtke u Hrvatskoj.',
		'url'                       => home_url( '/' ),
		'logo'                      => zaec_img( 'logo.png' ),
		'image'                     => zaec_img( 'og/default.png' ),
		'telephone'                 => $o['phone_raw'],
		'founder'                   => array( '@type' => 'Person', '@id' => home_url( '/#osoba' ), 'name' => $o['owner_name'] ),
		'address'                   => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => $o['address'],
			'postalCode'      => $o['postal_code'],
			'addressLocality' => $o['city'],
			'addressRegion'   => $o['region'],
			'addressCountry'  => strtoupper( $o['country_code'] ),
		),
		'geo'                       => array( '@type' => 'GeoCoordinates', 'latitude' => (float) $o['latitude'], 'longitude' => (float) $o['longitude'] ),
		'areaServed'                => array(
			array( '@type' => 'City', 'name' => 'Osijek' ),
			array( '@type' => 'AdministrativeArea', 'name' => $o['region'] ),
			array( '@type' => 'Country', 'name' => 'Hrvatska' ),
		),
		'openingHoursSpecification' => array(
			array( '@type' => 'OpeningHoursSpecification', 'dayOfWeek' => array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ), 'opens' => '09:00', 'closes' => '17:00' ),
		),
		'identifier'                => array( array( '@type' => 'PropertyValue', 'name' => 'MB', 'value' => $o['mb'] ) ),
		'knowsAbout'                => array( 'Izrada web stranica', 'WordPress', 'WooCommerce', 'SEO', 'Lokalni SEO', 'Google Business Profile', 'Generative Engine Optimization', 'Google Analytics 4', 'Google Tag Manager', 'Core Web Vitals', 'UX dizajn' ),
		'knowsLanguage'             => array( 'hr', 'en' ),
		'hasOfferCatalog'           => array( '@type' => 'OfferCatalog', 'name' => 'Usluge', 'itemListElement' => $offers ),
	);
	if ( $same_as ) {
		$org['sameAs'] = $same_as;
	}
	if ( ! empty( $o['email'] ) && '1' === (string) $o['show_public_email'] ) {
		$org['email'] = $o['email'];
	}
	// Namjerno bez Review/aggregateRating: Google ne prikazuje "self-serving" recenzije tvrtke na vlastitoj stranici.
	return $org;
}

function zaec_schema_graph() {
	$graph = array();
	$plugin = zaec_is_seo_plugin_active();
	$url    = zaec_canonical() ? zaec_canonical() : home_url( add_query_arg( array() ) );

	if ( ! $plugin ) {
		$graph[] = zaec_schema_org();
		$graph[] = array( '@type' => 'WebSite', '@id' => home_url( '/#web' ), 'url' => home_url( '/' ), 'name' => 'ZAEC', 'inLanguage' => 'hr-HR', 'publisher' => array( '@id' => zaec_org_id() ) );
		$graph[] = array( '@type' => 'Person', '@id' => home_url( '/#osoba' ), 'name' => zaec_option( 'owner_name' ), 'jobTitle' => 'Web developer i dizajner', 'worksFor' => array( '@id' => zaec_org_id() ), 'url' => zaec_url( 'o-nama' ) );
		$type = 'WebPage';
		$l    = zaec_get_landing();
		if ( $l ) {
			$type = array( 'contact' => 'ContactPage', 'about' => 'AboutPage', 'hub' => 'CollectionPage', 'hub-industries' => 'CollectionPage' )[ $l['type'] ] ?? 'WebPage';
		} elseif ( is_home() || is_post_type_archive() ) {
			$type = 'CollectionPage';
		}
		$page = array(
			'@type'      => $type,
			'@id'        => $url . '#stranica',
			'url'        => $url,
			'name'       => wp_get_document_title(),
			'description'=> zaec_meta_description(),
			'inLanguage' => 'hr-HR',
			'isPartOf'   => array( '@id' => home_url( '/#web' ) ),
			'about'      => array( '@id' => zaec_org_id() ),
		);
		if ( $l && ! empty( $l['answer'] ) ) {
			$page['speakable'] = array( '@type' => 'SpeakableSpecification', 'cssSelector' => array( '.answer p' ) );
		}
		$graph[] = $page;
		$crumbs = zaec_breadcrumbs();
		if ( count( $crumbs ) > 1 ) {
			$items = array();
			foreach ( $crumbs as $i => $c ) {
				$items[] = array( '@type' => 'ListItem', 'position' => $i + 1, 'name' => $c[0], 'item' => $c[1] );
			}
			$graph[] = array( '@type' => 'BreadcrumbList', 'itemListElement' => $items );
		}
	}

	// Usluga.
	$l = zaec_get_landing();
	if ( $l && in_array( $l['type'], array( 'service', 'industry', 'local' ), true ) ) {
		$svc = array(
			'@type'            => 'Service',
			'@id'              => $url . '#usluga',
			'name'             => $l['service_type'] ?? $l['title'],
			'serviceType'      => $l['service_type'] ?? $l['title'],
			'description'      => $l['answer'] ?? $l['description'],
			'url'              => $url,
			'provider'         => array( '@id' => zaec_org_id() ),
			'areaServed'       => ! empty( $l['area'] ) ? array_map( static fn( $n ) => array( '@type' => 'Place', 'name' => $n ), $l['area'] ) : array( '@type' => 'Country', 'name' => 'Hrvatska' ),
			'availableChannel' => array( '@type' => 'ServiceChannel', 'serviceUrl' => zaec_url( 'kontakt' ), 'servicePhone' => zaec_option( 'phone_raw' ) ),
		);
		if ( $plugin ) {
			$svc['provider'] = array( '@type' => 'LocalBusiness', 'name' => 'ZAEC', 'url' => home_url( '/' ) );
		}
		$graph[] = $svc;
	}

	// FAQ (isti sadržaj kao vidljivi FAQ).
	$faq = array();
	if ( is_front_page() ) {
		$faq = zaec_home_faq();
	} elseif ( $l && ! empty( $l['faq'] ) ) {
		$faq = $l['faq'];
	}
	if ( $faq ) {
		$graph[] = array(
			'@type'      => 'FAQPage',
			'@id'        => $url . '#pitanja',
			'mainEntity' => array_map( static fn( $f ) => array( '@type' => 'Question', 'name' => $f[0], 'acceptedAnswer' => array( '@type' => 'Answer', 'text' => $f[1] ) ), $faq ),
		);
	}

	// Članak (vodič).
	if ( is_singular( 'post' ) && ! $plugin ) {
		$graph[] = array(
			'@type'            => 'Article',
			'@id'              => $url . '#clanak',
			'headline'         => get_the_title(),
			'description'      => zaec_meta_description(),
			'datePublished'    => get_the_date( 'c' ),
			'dateModified'     => get_the_modified_date( 'c' ),
			'inLanguage'       => 'hr-HR',
			'mainEntityOfPage' => array( '@id' => $url . '#stranica' ),
			'author'           => array( '@id' => home_url( '/#osoba' ) ),
			'publisher'        => array( '@id' => zaec_org_id() ),
			'image'            => zaec_og_image(),
		);
	}

	// Projekt.
	if ( is_singular( 'projekti' ) && ! $plugin ) {
		$d       = zaec_get_project_data( get_the_ID() );
		$graph[] = array_filter(
			array(
				'@type'       => 'CreativeWork',
				'@id'         => $url . '#projekt',
				'name'        => $d['title'],
				'description' => $d['excerpt'],
				'creator'     => array( '@id' => zaec_org_id() ),
				'url'         => $d['website_url'] ? $d['website_url'] : $url,
				'image'       => $d['image'],
			)
		);
	}
	return $graph;
}

function zaec_print_schema() {
	if ( is_404() || is_search() ) {
		return;
	}
	$graph = zaec_schema_graph();
	if ( ! $graph ) {
		return;
	}
	$json = wp_json_encode( array( '@context' => 'https://schema.org', '@graph' => $graph ), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	echo '<script type="application/ld+json">' . str_replace( '</', '<\/', $json ) . '</script>' . "\n"; // phpcs:ignore
}
add_action( 'wp_head', 'zaec_print_schema', 30 );

/* ───────────────────────── robots.txt i llms.txt ───────────────────────── */

function zaec_robots_txt( $output, $public ) {
	if ( ! $public ) {
		return $output;
	}
	$lines   = array( '', '# Pretraživači i AI asistenti su dobrodošli (ZAEC).' );
	foreach ( array( 'Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'Applebot' ) as $bot ) {
		$lines[] = 'User-agent: ' . $bot;
		$lines[] = 'Allow: /';
		$lines[] = 'Disallow: /wp-admin/';
		$lines[] = '';
	}
	$lines[] = 'Sitemap: ' . home_url( '/wp-sitemap.xml' );
	return $output . implode( "\n", $lines ) . "\n";
}
add_filter( 'robots_txt', 'zaec_robots_txt', 20, 2 );

/** Sitemap: bez stranice Hvala i bez autora. */
add_filter(
	'wp_sitemaps_posts_query_args',
	static function ( $args, $post_type ) {
		if ( 'page' === $post_type ) {
			$hvala = get_page_by_path( 'hvala', OBJECT, 'page' );
			if ( $hvala ) {
				$args['post__not_in'] = array_merge( $args['post__not_in'] ?? array(), array( $hvala->ID ) );
			}
		}
		return $args;
	},
	10,
	2
);
add_filter( 'wp_sitemaps_add_provider', static fn( $provider, $name ) => 'users' === $name ? false : $provider, 10, 2 );

/** /llms.txt — sažet opis tvrtke i ključnih stranica za AI asistente. */
function zaec_llms_rewrite() {
	add_rewrite_rule( '^llms\.txt$', 'index.php?zaec_llms=1', 'top' );
}
add_action( 'init', 'zaec_llms_rewrite' );
add_filter( 'query_vars', static fn( $v ) => array_merge( $v, array( 'zaec_llms' ) ) );

function zaec_llms_output() {
	if ( ! get_query_var( 'zaec_llms' ) ) {
		return;
	}
	$o   = zaec_get_options();
	$out = "# ZAEC — web studio, Osijek (Hrvatska)\n\n> Izrada web stranica, webshopova i landing stranica koje donose upite; SEO, lokalni SEO, Google Business profil, AI vidljivost (GEO) i GA4/GTM praćenje konverzija za obrte i tvrtke u Hrvatskoj. Cijena se daje u pisanoj ponudi nakon definiranog opsega.\n\n";
	$out .= '- Vlasnik: ' . $o['owner_name'] . "\n- Pravni naziv: " . $o['legal_name'] . "\n- Adresa: " . $o['address'] . ', ' . $o['postal_code'] . ' ' . $o['city'] . "\n- Telefon: " . $o['phone_display'] . "\n- Radno vrijeme: " . $o['hours'] . "\n- Područje rada: Osijek, Osječko-baranjska županija, cijela Hrvatska (na daljinu)\n\n## Usluge\n\n";
	foreach ( zaec_services() as $s ) {
		$out .= '- [' . $s['title'] . '](' . zaec_url( $s['key'] ) . '): ' . wp_strip_all_tags( $s['answer'] ?? $s['description'] ) . "\n";
	}
	$out .= "\n## Djelatnosti\n\n[Sva područja](" . zaec_url( 'djelatnosti' ) . ")\n";
	foreach ( zaec_sectors() as $key => $sec ) {
		$out .= "\n### " . $sec['name'] . "\n\n" . $sec['about'] . "\n";
		foreach ( zaec_sector_pages( $key ) as $i ) {
			$out .= '- [' . $i['title'] . '](' . zaec_url( $i['key'] ) . '): ' . $i['description'] . "\n";
		}
	}
	$out .= "\n## Ostalo\n\n- [Cijene i procjena projekta](" . zaec_url( 'cijene' ) . ")\n- [Besplatna provjera vidljivosti](" . zaec_url( 'provjera-vidljivosti' ) . ")\n- [Radovi](" . get_post_type_archive_link( 'projekti' ) . ")\n- [O nama](" . zaec_url( 'o-nama' ) . ")\n- [Kontakt](" . zaec_url( 'kontakt' ) . ")\n";
	$guides = get_posts( array( 'post_type' => 'post', 'posts_per_page' => 20, 'category_name' => 'vodici' ) );
	if ( $guides ) {
		$out .= "\n## Vodiči\n\n";
		foreach ( $guides as $g ) {
			$out .= '- [' . $g->post_title . '](' . get_permalink( $g ) . '): ' . wp_strip_all_tags( $g->post_excerpt ) . "\n";
		}
	}
	header( 'Content-Type: text/plain; charset=utf-8' );
	header( 'X-Robots-Tag: noindex' );
	echo $out; // phpcs:ignore
	exit;
}
add_action( 'template_redirect', 'zaec_llms_output', 0 );

/** Naslovi dokumenata za naslovnicu, radove i vodiče (bez SEO dodatka). */
function zaec_document_titles( $title ) {
	if ( zaec_is_seo_plugin_active() ) {
		return $title;
	}
	if ( is_front_page() ) {
		return 'Izrada web stranica Osijek — web koji donosi upite | ZAEC';
	}
	if ( is_post_type_archive( 'projekti' ) ) {
		return 'Radovi — stvarni projekti ZAEC web studija | ZAEC';
	}
	if ( is_home() ) {
		return 'Vodiči: web, SEO, AI vidljivost i GA4 za obrtnike | ZAEC';
	}
	return $title;
}
add_filter( 'pre_get_document_title', 'zaec_document_titles', 15 );
add_filter( 'document_title_separator', static fn() => '|' );
add_filter(
	'document_title_parts',
	static function ( $parts ) {
		$parts['site'] = 'ZAEC';
		unset( $parts['tagline'] );
		return $parts;
	}
);
