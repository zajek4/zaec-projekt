<?php
/**
 * HERO 01 — SIGNAL GRID (cover / mreža).
 *
 * Blueprint globus koji povezuje ZAEC, gradove Hrvatske i remote tržišta.
 * Kinematografski uvod; kuća ostaje sljedeća (prva numerirana) sekcija.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$net_primary_text   = (string) zaec_front_field( 'net_primary_text' );
$net_primary_url    = (string) zaec_front_field( 'net_primary_url' );
$net_secondary_text = (string) zaec_front_field( 'net_secondary_text' );
$net_secondary_url  = (string) zaec_front_field( 'net_secondary_url' );
?>
<section id="mreza" class="net" data-theme="dark" aria-label="<?php esc_attr_e( 'Povezivanje — signal grid', 'zaec' ); ?>">
	<div class="net-stage" id="netStage">
		<canvas id="netCanvas" role="img" aria-label="<?php esc_attr_e( '3D globus: mreža povezuje Osijek, gradove Hrvatske i remote tržišta linijama koje predstavljaju put od upita do kontakta.', 'zaec' ); ?>"></canvas>
		<div class="net-fallback" id="netFallback" aria-hidden="true">
			<svg width="min(78vw,640px)" height="min(78vw,640px)" viewBox="0 0 640 640">
				<g fill="none" stroke="#f4f4f1" opacity=".14">
					<circle cx="320" cy="320" r="300"/><circle cx="320" cy="320" r="220"/><circle cx="320" cy="320" r="140"/>
					<path d="M320 20v600M20 320h600M108 108l424 424M532 108L108 532"/>
				</g>
				<g fill="#7dd3ff">
					<circle cx="320" cy="320" r="7"/><circle cx="320" cy="320" r="3" fill="#fff"/>
					<circle cx="470" cy="210" r="4"/><circle cx="180" cy="150" r="4"/><circle cx="120" cy="430" r="4"/>
					<circle cx="520" cy="470" r="4"/><circle cx="240" cy="520" r="4"/><circle cx="430" cy="90" r="4"/>
				</g>
				<g stroke="#1e5eff" stroke-width="1.4" opacity=".7" fill="none">
					<path d="M320 320 C 400 250, 440 240, 470 210"/>
					<path d="M320 320 C 250 210, 200 190, 180 150"/>
					<path d="M320 320 C 240 380, 180 400, 120 430"/>
					<path d="M320 320 C 420 400, 470 430, 520 470"/>
				</g>
			</svg>
		</div>
	</div>
	<div class="net-veil" aria-hidden="true"></div>

	<div class="wrap net-inner">
		<div class="net-copy">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'net_kicker' ) ); ?></p>
			<h1><?php echo esc_html( zaec_front_field( 'net_title' ) ); ?></h1>
			<p class="lead"><?php echo esc_html( zaec_front_field( 'net_lead' ) ); ?></p>
			<div class="net-ctas">
				<a class="btn btn-signal btn-arrow" href="<?php echo esc_url( 0 === strpos( $net_primary_url, '#' ) ? zaec_home_anchor( $net_primary_url ) : $net_primary_url ); ?>">
					<span><?php echo esc_html( $net_primary_text ); ?></span>
					<svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg>
				</a>
				<a class="btn btn-line btn-arrow" href="<?php echo esc_url( 0 === strpos( $net_secondary_url, '#' ) ? zaec_home_anchor( $net_secondary_url ) : $net_secondary_url ); ?>">
					<span><?php echo esc_html( $net_secondary_text ); ?></span>
					<svg class="ar" aria-hidden="true"><use href="#ic-arrow-d"/></svg>
				</a>
			</div>
		</div>
	</div>

	<div class="net-meta" aria-hidden="true"><span>ZAEC · <b>45.55° N</b> · <b>18.68° E</b></span><span><?php esc_html_e( 'Signal grid', 'zaec' ); ?></span></div>
	<div class="net-cue" aria-hidden="true"><span><?php esc_html_e( 'Scroll', 'zaec' ); ?></span><i></i></div>
</section>
