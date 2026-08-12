<?php
/**
 * Digital Earth hero stage.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


?>
<section id="hero" class="earth-mode" data-theme="dark" aria-label="<?php esc_attr_e( 'Uvod', 'zaec' ); ?>">
	<div class="pin-space" id="heroPinSpace">
		<div class="pin-stage" id="heroPin">
			<div class="bp-grid-dark" aria-hidden="true"></div>
			<div class="hero-grid">
				<div class="hero-copy earth-copy" id="heroCopy">
					<p class="kicker"><?php echo esc_html( zaec_front_field( 'earth_kicker' ) ); ?></p>
					<h1><?php echo esc_html( zaec_front_field( 'earth_title' ) ); ?></h1>
					<p class="lead"><?php echo esc_html( zaec_front_field( 'earth_lead' ) ); ?></p>
					<div class="hero-ctas">
						<a class="btn btn-signal btn-arrow" href="<?php echo esc_url( 0 === strpos( (string) zaec_front_field( 'earth_primary_url' ), '#' ) ? zaec_home_anchor( zaec_front_field( 'earth_primary_url' ) ) : zaec_front_field( 'earth_primary_url' ) ); ?>">
							<span><?php echo esc_html( zaec_front_field( 'earth_primary_text' ) ); ?></span>
							<svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg>
						</a>
						<a class="btn btn-line btn-arrow" href="<?php echo esc_url( 0 === strpos( (string) zaec_front_field( 'earth_secondary_url' ), '#' ) ? zaec_home_anchor( zaec_front_field( 'earth_secondary_url' ) ) : zaec_front_field( 'earth_secondary_url' ) ); ?>">
							<span><?php echo esc_html( zaec_front_field( 'earth_secondary_text' ) ); ?></span>
							<svg class="ar" aria-hidden="true"><use href="#ic-arrow-d"/></svg>
						</a>
					</div>
					<p class="cta-note"><?php echo esc_html( zaec_front_field( 'earth_note' ) ); ?></p>
					<p class="earth-copy__signal"><i></i> Jasna ponuda · dokaz · sljedeći korak</p>
				</div>

				<div class="hero-stage">
					<div
						id="earthHero"
						class="earth-hero"
						data-topology="<?php echo esc_url( get_theme_file_uri( 'assets/textures/earth-topology.jpg' ) ); ?>"
						data-borders="<?php echo esc_url( get_theme_file_uri( 'assets/data/countries.json' ) ); ?>"
						data-nodes="<?php echo esc_url( get_theme_file_uri( 'assets/data/nodes.json' ) ); ?>"
						aria-busy="true"
					>
						<p class="earth-sr-description"><?php esc_html_e( 'Interaktivna hologramska Zemlja s mrežom 65 svjetskih gradova. Osijek je označen kao sjedište. Mrežni promet je vizualna simulacija.', 'zaec' ); ?></p>
						<canvas id="earthCanvas" role="img" aria-label="<?php esc_attr_e( 'Interaktivna hologramska Zemlja s mrežom gradova i Osijekom kao sjedištem.', 'zaec' ); ?>"></canvas>
						<div class="earth-scanlines" aria-hidden="true"></div>
						<div class="earth-vignette" aria-hidden="true"></div>
						<div class="earth-grid-glow" aria-hidden="true"></div>

						<div id="earthFallbackD" class="earth-fallback" aria-hidden="true">
							<svg viewBox="0 0 560 560" class="earth-fallback__globe">
								<defs>
									<radialGradient id="earthFallbackCore" cx="42%" cy="35%">
										<stop offset="0" stop-color="#06364a" stop-opacity=".9" />
										<stop offset=".72" stop-color="#001c2d" stop-opacity=".5" />
										<stop offset="1" stop-color="#000814" stop-opacity="0" />
									</radialGradient>
								</defs>
								<circle cx="280" cy="280" r="188" fill="url(#earthFallbackCore)" stroke="#00e5ff" stroke-width="1.5" />
								<ellipse cx="280" cy="280" rx="190" ry="58" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".48" />
								<ellipse cx="280" cy="280" rx="190" ry="118" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".28" />
								<ellipse cx="280" cy="280" rx="76" ry="188" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".34" />
								<ellipse cx="280" cy="280" rx="148" ry="188" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".2" />
								<path d="M131 245c42-56 88-56 112-87 33-42 80-17 102 8 21 24 55 21 75 51 20 31-24 48-29 81-6 36-49 48-75 67-28 21-75 15-95-17-21-34-72-20-91-57-12-22-12-31 1-46z" fill="none" stroke="#00e5ff" stroke-width="1.4" opacity=".68" />
								<path d="M163 336c32-22 56-13 83 16 27 29 64 38 95 18 29-19 65-4 78 25" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".48" />
								<path d="M161 192c29 10 50 4 70-12 23-18 53-16 77-1 24 16 61 10 89-12" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".42" />
								<g fill="#00e5ff">
									<circle cx="246" cy="220" r="3" /><circle cx="319" cy="196" r="2.3" /><circle cx="365" cy="279" r="2.6" /><circle cx="209" cy="303" r="2.1" /><circle cx="300" cy="355" r="2.2" />
								</g>
								<g class="earth-fallback__hq" fill="none" stroke="#ffb700">
									<circle cx="282" cy="263" r="5" /><circle cx="282" cy="263" r="15" opacity=".55" /><circle cx="282" cy="263" r="26" opacity=".25" />
									<path d="M282 263v-46M277 217h10" opacity=".65" />
								</g>
								<text x="302" y="258" fill="#ffcf58" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.6">OSIJEK · HR</text>
							</svg>
						</div>

						<div class="earth-hud earth-hud--tl" aria-hidden="true">
							<span class="earth-hud__eyebrow">EARTHNET // VISUAL SIMULATION</span>
							<b>GLOBAL LINK ACTIVE</b>
						</div>
						<div class="earth-hud earth-hud--tr" aria-hidden="true">
							<span class="earth-hud__eyebrow">NODES</span>
							<b id="earthNodeCount">00</b>
							<small><span id="earthCountryCount">00</span> COUNTRIES · WORLD CITIES</small>
						</div>
						<div class="earth-hud earth-hud--bl" aria-hidden="true">
							<span class="earth-hud__eyebrow">PACKETS</span>
							<b id="earthPacketCount">00</b>
							<small>SIMULATED / 80–260 MS · GLOBAL MIX</small>
						</div>
						<div class="earth-hud earth-hud--br" aria-hidden="true">
							<span class="earth-hud__eyebrow">LOCAL ORIGIN</span>
							<b>OSIJEK · HR</b>
							<small>one node in a wider network</small>
						</div>

						<div class="earth-legend" aria-hidden="true">
							<span><i class="earth-legend__dot earth-legend__dot--hq"></i> HQ</span>
							<span><i class="earth-legend__dot earth-legend__dot--tech"></i> TECH</span>
							<span><i class="earth-legend__dot earth-legend__dot--trade"></i> TRADE</span>
							<span><i class="earth-legend__dot earth-legend__dot--partner"></i> PARTNER</span>
						</div>

						<div id="earthTooltip" class="earth-tooltip" role="status" aria-live="polite">
							<strong data-earth-tooltip-name>NODE</strong>
							<span data-earth-tooltip-category>NETWORK</span>
							<small data-earth-tooltip-meta>00.0000 N / 00.0000 E</small>
						</div>

						<div id="earthLoader" class="earth-loader" role="status" aria-live="polite">
							<div class="earth-loader__top"><span>PLANETARY SYSTEM</span><b id="earthProgressLabel">000</b></div>
							<div class="earth-loader__track"><i id="earthProgress"></i></div>
							<p id="earthStatus">INITIALIZING RENDERER</p>
						</div>
						<p class="earth-interaction-hint" aria-hidden="true">DRAG = ORBIT · SCROLL = ZOOM · HOVER = NODE DATA</p>
					</div>
				</div>
			</div>
						<svg class="wm wm-hero" viewBox="0 0 100 100" aria-hidden="true"><use href="#zMon"/></svg>
		</div>
	</div>
</section>
<div class="marquee" data-theme="dark" aria-hidden="true">
	<div class="mq-track">
		<span>Obrti // Tvrtke // Hrvatska // Remote // Landing // Google Business // WooCommerce // Corvus // Klimatizacija // Gradnja // Shop //&nbsp;</span>
		<span>Obrti // Tvrtke // Hrvatska // Remote // Landing // Google Business // WooCommerce // Corvus // Klimatizacija // Gradnja // Shop //&nbsp;</span>
	</div>
</div>
