<?php
/**
 * Kratko predstavljanje studija bez osobnog imena.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section id="studio" class="sec sec-paper2 zaec-studio" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<span class="sec-num" data-plx="60" aria-hidden="true">07.1</span>
	<svg class="zaec-studio__mark" viewBox="0 0 720 180" aria-hidden="true" focusable="false">
		<text x="360" y="148" text-anchor="middle">ZAEC</text>
	</svg>
	<div class="wrap zaec-studio__grid">
		<header class="zaec-studio__head">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'studio_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'studio_title' ) ); ?></h2>
		</header>
		<div class="zaec-studio__body">
			<p><?php echo esc_html( zaec_front_field( 'studio_text' ) ); ?></p>
		</div>
	</div>
</section>
