<?php
/**
 * Minimal theme-level SEO/schema. Disabled when a major SEO plugin is active.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_meta_description() {
	if ( zaec_is_seo_plugin_active() ) {
		return;
	}
	$description = '';
	if ( is_front_page() ) {
		$description = zaec_front_field( 'hero_lead' );
	} elseif ( is_singular() ) {
		$post = get_queried_object();
		if ( $post instanceof WP_Post ) {
			$description = has_excerpt( $post ) ? get_the_excerpt( $post ) : wp_trim_words( wp_strip_all_tags( strip_shortcodes( $post->post_content ) ), 30 );
		}
	} elseif ( is_category() || is_tag() || is_tax() ) {
		$description = term_description();
	}
	$description = trim( wp_strip_all_tags( $description ) );
	if ( $description ) {
		printf( '<meta name="description" content="%s">' . "\n", esc_attr( $description ) );
	}
	printf( '<meta property="og:title" content="%s">' . "\n", esc_attr( wp_get_document_title() ) );
	if ( $description ) {
		printf( '<meta property="og:description" content="%s">' . "\n", esc_attr( $description ) );
	}
	printf( '<meta property="og:type" content="%s">' . "\n", is_singular( 'post' ) ? 'article' : 'website' );
	printf( '<meta property="og:locale" content="%s">' . "\n", esc_attr( str_replace( '-', '_', get_locale() ) ) );
}
add_action( 'wp_head', 'zaec_meta_description', 3 );

function zaec_front_schema() {
	if ( ! is_front_page() ) {
		return;
	}
	$options = zaec_get_options();
	$faqs    = zaec_front_repeater( 'faqs' );
	$graph   = array();

	// Avoid duplicating business/organization schema owned by an active SEO plugin.
	if ( ! zaec_is_seo_plugin_active() ) {
		$graph[] = array(
			'@type'       => 'LocalBusiness',
			'name'        => get_bloginfo( 'name' ),
			'legalName'   => $options['legal_name'],
			'description' => zaec_front_field( 'hero_lead' ),
			'url'         => home_url( '/' ),
			'address'     => array_filter(
				array(
					'@type'           => 'PostalAddress',
					'streetAddress'   => $options['address'],
					'postalCode'     => isset( $options['postal_code'] ) ? $options['postal_code'] : '',
					'addressLocality' => $options['city'],
					'addressCountry'  => strtoupper( $options['country_code'] ),
				)
			),
			'geo'         => array( '@type' => 'GeoCoordinates', 'latitude' => $options['latitude'], 'longitude' => $options['longitude'] ),
			'telephone'   => $options['phone_raw'],
			'priceRange'  => $options['price_range'],
			'areaServed'  => array( 'HR', 'Hrvatska' ),
		);
		if ( ! empty( $options['email'] ) && ! empty( $options['show_public_email'] ) && '0' !== $options['show_public_email'] ) {
			$graph[ count( $graph ) - 1 ]['email'] = $options['email'];
		}
		if ( ! empty( $options['mb'] ) ) {
			$graph[ count( $graph ) - 1 ]['identifier'] = array(
				array( '@type' => 'PropertyValue', 'name' => 'MB', 'value' => $options['mb'] ),
			);
		}
	}

	$entity = array();
	foreach ( $faqs as $faq ) {
		$question = isset( $faq['question'] ) ? trim( wp_strip_all_tags( $faq['question'] ) ) : '';
		$answer   = isset( $faq['answer'] ) ? trim( wp_strip_all_tags( $faq['answer'] ) ) : '';
		if ( $question && $answer ) {
			$entity[] = array(
				'@type'          => 'Question',
				'name'           => $question,
				'acceptedAnswer' => array( '@type' => 'Answer', 'text' => $answer ),
			);
		}
	}
	// FAQ is sourced from the same native fields as the visible accordion, so markup stays in sync.
	if ( $entity ) {
		$graph[] = array( '@type' => 'FAQPage', 'mainEntity' => $entity );
	}
	if ( ! $graph ) {
		return;
	}
	$data = array( '@context' => 'https://schema.org', '@graph' => $graph );
	printf( '<script type="application/ld+json">%s</script>' . "\n", wp_json_encode( $data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
add_action( 'wp_head', 'zaec_front_schema', 20 );
