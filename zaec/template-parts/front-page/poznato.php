<?php
/**
 * Problemi koje posjetitelj prepoznaje i poštena granica kada web nema smisla.
 *
 * @package ZAEC
 */

$points = zaec_front_repeater( 'pain_points' );
$icons  = array(
	'<circle cx="19" cy="17" r="10.5" fill="none"/><path d="M27 25l9 9"/><path d="M13.5 15l3 2.5-2.5 2 3 2.5-2 2"/>',
	'<circle cx="10" cy="10" r="3.4" fill="none"/><circle cx="34" cy="12" r="3.4" fill="none"/><circle cx="22" cy="24" r="3.4" fill="none"/><circle cx="10" cy="36" r="3.4" fill="none"/><circle cx="34" cy="34" r="3.4" fill="none"/><path d="M13 12l6 9M31 14l-6 8M21 27l-8 7M24 27l7 5"/>',
	'<path d="M3 22c4.5 0 4.5-11 9-11s4.5 22 9 22 4.5-22 9-22 4.5 11 9 11" fill="none"/>',
	'<path d="M22 4l14 5v10c0 9.5-6 16.5-14 21-8-4.5-14-11.5-14-21V9l14-5z" fill="none"/><path d="M18 12l8 7-4 3 7 8" fill="none"/><path d="M26 12l-4 5" fill="none"/>',
);
?>
<section id="poznato" class="sec sec-paper" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<span class="sec-num" data-plx="70" aria-hidden="true">02</span>
	<svg class="wm wm-tr" viewBox="0 0 100 100" data-plx="46" aria-hidden="true"><use href="#zMon"/></svg>
	<div class="wrap">
		<div class="sec-head">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'poznato_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'poznato_title' ) ); ?></h2>
		</div>
		<div class="pain-grid">
			<?php foreach ( $points as $index => $point ) : ?>
				<article class="pain-card">
					<p class="pain-num"><?php echo esc_html( $point['code'] ); ?></p>
					<svg class="pain-ic" viewBox="0 0 44 44" aria-hidden="true"><?php echo isset( $icons[ $index ] ) ? $icons[ $index ] : $icons[0]; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></svg>
					<h3><?php echo esc_html( $point['title'] ); ?></h3>
					<p><?php echo esc_html( $point['text'] ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
		<p class="bridge"><?php echo esc_html( zaec_front_field( 'poznato_bridge' ) ); ?> <svg class="ar ar-d" aria-hidden="true"><use href="#ic-arrow-d"/></svg></p>
		<aside class="zaec-boundary" data-plx="18">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'poznato_boundary_kicker' ) ); ?></p>
			<h3><?php echo esc_html( zaec_front_field( 'poznato_boundary_title' ) ); ?></h3>
			<p><?php echo esc_html( zaec_front_field( 'poznato_boundary_text' ) ); ?></p>
		</aside>
	</div>
</section>
