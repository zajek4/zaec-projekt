<?php
/**
 * HERO 01 — MREŽA (karta povezanosti).
 *
 * Prepoznatljiv obris Hrvatske koji se crtanjem zatvara, Europa-konstelacija,
 * ikonice tvrtki, ljudi i Google Businessa povezane linijama. Kuća ostaje
 * sljedeća (prva numerirana) sekcija.
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
<section id="mreza" class="net" data-theme="dark" aria-label="<?php esc_attr_e( 'Povezivanje — Hrvatska, Europa i Google Business', 'zaec' ); ?>">
	<div class="net-stage" id="netStage">
		<canvas id="netCanvas" role="img" aria-label="<?php esc_attr_e( 'Karta povezanosti: obris Hrvatske koji se crta, gradovi, radovi, Google Business i europska tržišta povezani linijama.', 'zaec' ); ?>"></canvas>
		<div class="net-fallback" id="netFallback" aria-hidden="true">
			<svg width="min(86vw,720px)" height="min(86vw,720px)" viewBox="0 0 720 720">
				<g fill="none">
					<path d="M360 96 L402 118 L430 96 L428 132 L410 154 L398 150 L382 162 L374 152 L350 156 L334 168 L320 160 L300 170 L286 166 L276 178 L262 172 L246 184 L240 200 L232 222 L226 248 L230 268 L242 282 L252 296 L268 300 L288 294 L306 288 L324 280 L338 272 L352 262 L362 250 L366 236 L364 220 L370 208 L382 198 L394 190 L408 184 L420 178 L432 170 L444 158 L440 142 L428 132 L414 124 L396 116 L380 106 L366 98 Z" stroke="#4d80ff" stroke-width="3" stroke-linejoin="round" style="filter:drop-shadow(0 0 8px rgba(77,128,255,.8))"/>
					<circle cx="360" cy="196" r="10" fill="#7dd3ff"/><circle cx="360" cy="196" r="18" stroke="#7dd3ff"/>
					<circle cx="332" cy="150" r="5" fill="#4d80ff"/><circle cx="288" cy="270" r="5" fill="#4d80ff"/><circle cx="300" cy="180" r="5" fill="#4d80ff"/>
					<circle cx="150" cy="150" r="6" fill="#a3a39d"/><circle cx="96" cy="240" r="6" fill="#a3a39d"/><circle cx="140" cy="320" r="6" fill="#a3a39d"/><circle cx="60" cy="110" r="6" fill="#a3a39d"/>
					<path d="M360 196 C 260 170, 190 160, 150 150" stroke="#7dd3ff" stroke-width="1.5" opacity=".6"/>
					<path d="M360 196 C 240 260, 160 290, 140 320" stroke="#7dd3ff" stroke-width="1.5" opacity=".6"/>
					<path d="M360 196 C 200 250, 120 250, 96 240" stroke="#a3a39d" stroke-width="1.5" opacity=".5"/>
					<path d="M360 196 C 180 180, 90 130, 60 110" stroke="#a3a39d" stroke-width="1.5" opacity=".5"/>
					<rect x="470" y="120" width="34" height="34" stroke="#eaf6ff" stroke-width="2"/><rect x="482" y="132" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/><rect x="482" y="120" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/>
					<rect x="470" y="188" width="34" height="34" stroke="#eaf6ff" stroke-width="2"/><rect x="482" y="200" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/><rect x="482" y="188" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/>
					<rect x="470" y="256" width="34" height="34" stroke="#eaf6ff" stroke-width="2"/><rect x="482" y="268" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/><rect x="482" y="256" width="10" height="10" stroke="#eaf6ff" stroke-width="1.4"/>
					<path d="M360 196 C 430 170, 470 150, 487 137" stroke="#eaf6ff" stroke-width="1.5" opacity=".5"/>
					<path d="M360 196 C 440 210, 470 210, 487 205" stroke="#eaf6ff" stroke-width="1.5" opacity=".5"/>
					<path d="M360 196 C 440 250, 470 270, 487 273" stroke="#eaf6ff" stroke-width="1.5" opacity=".5"/>
					<g fill="#ffb84d">
						<path d="M300 380 a14 14 0 0 1 28 0 c0 12 -14 22 -14 22 s-14 -10 -14 -22 z"/>
						<circle cx="314" cy="378" r="4" fill="#0e0e0d"/>
					</g>
					<path d="M360 196 C 330 320, 320 360, 318 380" stroke="#ffb84d" stroke-width="1.5" opacity=".6"/>
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

	<div class="net-meta" aria-hidden="true"><span>ZAEC · <b>45.55° N</b> · <b>18.68° E</b></span><span><?php esc_html_e( 'Hrvatska · Europa · Google Business', 'zaec' ); ?></span></div>
	<div class="net-cue" aria-hidden="true"><span><?php esc_html_e( 'Scroll', 'zaec' ); ?></span><i></i></div>
</section>
