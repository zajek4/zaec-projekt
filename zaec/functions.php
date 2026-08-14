<?php
/**
 * ZAEC theme bootstrap.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ZAEC_THEME_VERSION', '1.11.7' );
define( 'ZAEC_THEME_DIR', get_template_directory() );
define( 'ZAEC_THEME_URI', get_template_directory_uri() );

$zaec_includes = array(
	'/inc/defaults.php',
	'/inc/helpers.php',
	'/inc/setup.php',
	'/inc/assets.php',
	'/inc/navigation.php',
	'/inc/options.php',
	'/inc/front-page-fields.php',
	'/inc/projects.php',
	'/inc/migrations.php',
	'/inc/form-handler.php',
	'/inc/seo.php',
	'/inc/performance.php',
);

foreach ( $zaec_includes as $zaec_file ) {
	require_once ZAEC_THEME_DIR . $zaec_file;
}
