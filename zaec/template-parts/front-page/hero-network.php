<?php
/**
 * HERO 01 — MREŽA (karta povezanosti).
 *
 * Prepoznatljiv vektorski obris Hrvatske koji se iscrtava pri učitavanju,
 * Europa-konstelacija, ikonice tvrtki, ljudi i Google Businessa povezane
 * linijama. Kuća ostaje sljedeća (prva numerirana) sekcija.
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

// Točan vektorski obris Hrvatske (Natural Earth), glatka Bézier putanja.
$hr_path_d = 'M 13.430 -45.909 C 13.504 -45.869 13.537 -45.634 13.604 -45.522 C 13.670 -45.409 13.838 -45.347 13.830 -45.237 C 13.822 -45.126 13.655 -44.886 13.556 -44.860 C 13.456 -44.834 13.369 -45.047 13.233 -45.082 C 13.097 -45.116 12.924 -45.042 12.740 -45.068 C 12.556 -45.093 12.285 -45.210 12.127 -45.234 C 11.969 -45.258 11.875 -45.250 11.794 -45.212 C 11.712 -45.173 11.707 -45.000 11.639 -45.004 C 11.571 -45.008 11.451 -45.265 11.383 -45.234 C 11.315 -45.203 11.200 -44.966 11.234 -44.819 C 11.267 -44.672 11.499 -44.481 11.583 -44.351 C 11.667 -44.222 11.657 -44.155 11.738 -44.041 C 11.818 -43.927 11.965 -43.767 12.065 -43.668 C 12.165 -43.569 12.247 -43.553 12.337 -43.446 C 12.428 -43.340 12.457 -43.161 12.607 -43.029 C 12.757 -42.896 13.146 -42.741 13.238 -42.650 C 13.330 -42.559 13.284 -42.447 13.159 -42.480 C 13.035 -42.513 12.670 -42.728 12.489 -42.850 C 12.308 -42.972 12.253 -43.100 12.075 -43.210 C 11.898 -43.320 11.632 -43.335 11.423 -43.507 C 11.214 -43.679 10.899 -44.108 10.823 -44.243 C 10.747 -44.378 10.997 -44.235 10.967 -44.318 C 10.937 -44.400 10.698 -44.612 10.642 -44.738 C 10.585 -44.865 10.707 -44.994 10.629 -45.076 C 10.550 -45.159 10.283 -45.279 10.170 -45.234 C 10.057 -45.188 10.023 -44.818 9.951 -44.802 C 9.880 -44.786 9.773 -45.023 9.741 -45.137 C 9.708 -45.251 9.750 -45.424 9.757 -45.484 C 9.764 -45.545 9.695 -45.503 9.782 -45.500 C 9.869 -45.497 10.175 -45.444 10.279 -45.466 C 10.384 -45.489 10.348 -45.634 10.410 -45.635 C 10.472 -45.636 10.565 -45.502 10.653 -45.472 C 10.740 -45.441 10.886 -45.409 10.932 -45.452 C 10.979 -45.496 10.889 -45.668 10.930 -45.732 C 10.971 -45.795 11.125 -45.750 11.178 -45.834 C 11.231 -45.919 11.141 -46.127 11.247 -46.238 C 11.353 -46.350 11.682 -46.480 11.815 -46.504 C 11.947 -46.528 11.915 -46.473 12.041 -46.381 C 12.168 -46.289 12.388 -46.055 12.575 -45.952 C 12.762 -45.848 13.021 -45.767 13.164 -45.759 C 13.306 -45.752 13.357 -45.949 13.430 -45.909 Z';
?>
<section id="mreza" class="net" data-theme="dark" aria-label="<?php esc_attr_e( 'Povezivanje — Hrvatska, Europa i Google Business', 'zaec' ); ?>">
	<div class="net-stage" id="netStage">
		<canvas id="netCanvas" role="img" aria-label="<?php esc_attr_e( 'Karta povezanosti: obris Hrvatske koji se crta, gradovi, radovi, Google Business i europska tržišta povezani linijama.', 'zaec' ); ?>"></canvas>
		<svg class="net-outline" id="netOutline" viewBox="9.741 -46.504 4.089 4.024" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
			<path class="net-outline-fill" d="<?php echo esc_attr( $hr_path_d ); ?>"/>
			<path class="net-outline-stroke" pathLength="1" d="<?php echo esc_attr( $hr_path_d ); ?>"/>
		</svg>
		<div class="net-fallback" id="netFallback" aria-hidden="true">
			<svg viewBox="9.741 -46.504 4.089 4.024" style="width:min(62vh,78vw);height:auto;overflow:visible">
				<path d="<?php echo esc_attr( $hr_path_d ); ?>" fill="rgba(30,94,255,.06)" stroke="#4d80ff" stroke-width="2.2px" stroke-linejoin="round" vector-effect="non-scaling-stroke" style="filter:drop-shadow(0 0 12px rgba(77,128,255,.7))"/>
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

	<div class="net-meta" aria-hidden="true"><span>ZAEC · <b>45.55° N</b> · <b>18.68° E</b></span><span><?php esc_html_e( 'Hrvatska · Europa · Google Business', 'zaec' ); ?></span></div>
	<div class="net-cue" aria-hidden="true"><span><?php esc_html_e( 'Scroll', 'zaec' ); ?></span><i></i></div>
</section>
