<?php
/**
 * ZAEC tema v2.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ZAEC_VERSION', '2.3.0' );
define( 'ZAEC_THEME_DIR', get_template_directory() );
define( 'ZAEC_THEME_URI', get_template_directory_uri() );

$zaec_includes = array(
	'helpers',
	'setup',
	'options',
	'content-home',
	'landing-content',
	'landing-industries',
	'landings',
	'blocks',
	'hero',
	'projects',
	'guides',
	'navigation',
	'assets',
	'seo',
	'form-handler',
	'home-fields',
	'activation',
	'performance',
);
foreach ( $zaec_includes as $zaec_file ) {
	require_once ZAEC_THEME_DIR . '/inc/' . $zaec_file . '.php';
}
