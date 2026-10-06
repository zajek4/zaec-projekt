<?php
/**
 * Hero podstranice — usmjerava na vrstu heroja (potpisni, urednički, tihi). Vidi inc/hero.php.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$zaec_kind = zaec_hero_kind( $args['landing'] );
if ( ! in_array( $zaec_kind, array_merge( ZAEC_SIGNATURE_HEROES, array( 'editorial', 'quiet' ) ), true ) ) {
	$zaec_kind = 'editorial';
}
get_template_part( 'template-parts/hero/' . $zaec_kind, null, $args );
