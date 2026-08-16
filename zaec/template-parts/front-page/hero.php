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
								<path d="M134 222c31-45 64-51 94-70 39-24 72-24 105 2 25 20 67 22 91 59 16 25 5 52-18 70-30 23-49 58-83 65-34 8-73-5-93-31-19-25-51-27-75-48-19-16-32-26-21-47z" fill="none" stroke="#00e5ff" stroke-width="1.2" opacity=".64" />
								<path d="M157 334c35-21 58-11 86 16 29 29 61 35 92 18 32-17 68-3 84 27" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".44" />
								<path d="M164 178c25 14 45 12 72-3 27-15 53-11 76 2 25 15 54 11 86-7" fill="none" stroke="#00e5ff" stroke-width="1" opacity=".42" />
								<path d="M217 258l8-5 9 3 5 8-9 4-10-2z" fill="none" stroke="#ffb700" stroke-width="1.2" opacity=".72" />
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
							<span class="earth-hud__eyebrow">INFO FLOW // VISUAL SIMULATION</span>
							<b>GLOBAL LINK ACTIVE</b>
						</div>
						<div class="earth-hud earth-hud--tr" aria-hidden="true">
							<span class="earth-hud__eyebrow">GLOBAL NODES</span>
							<b id="earthNodeCount">00</b>
							<small>CONTINENT OUTLINES · WORLD CITIES</small>
						</div>
						<div class="earth-hud earth-hud--bl" aria-hidden="true">
							<span class="earth-hud__eyebrow">INFO FLOW</span>
							<b id="earthFlowCount">00</b>
							<small>INFORMATION SPREAD · ARRIVAL RIPPLE</small>
						</div>
						<div class="earth-hud earth-hud--br" aria-hidden="true">
							<span class="earth-hud__eyebrow">FOCUS</span>
							<b>HRVATSKA</b>
							<small>EUROPE · OSIJEK LOCAL ORIGIN</small>
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
						<p class="earth-interaction-hint" aria-hidden="true">AUTO ORBIT · HOVER = NODE DATA</p>
						<p class="earth-mobile-hint" aria-hidden="true">SCROLL PAGE · MAP AUTO-ROTATES</p>
					</div>
				</div>
			</div>
						<svg class="wm wm-hero" viewBox="0 0 100 100" aria-hidden="true"><use href="#zMon"/></svg>
		</div>
	</div>
</section>
