<?php
/**
 * Hero + services panel + 3D stage.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$services = zaec_front_repeater( 'services' );
$occ      = array_slice( zaec_front_repeater( 'occupations' ), 0, 8 );
$first    = isset( $occ[0] ) ? $occ[0] : array(
	'title' => '',
	'sub'   => '',
	'q'     => '',
);
$hint     = trim( (string) zaec_front_field( 'hero_hint' ) );
?>
<section id="hero" data-theme="dark" aria-label="<?php esc_attr_e( 'Uvod', 'zaec' ); ?>">
	<div class="pin-space" id="heroPinSpace">
		<div class="pin-stage" id="heroPin">
			<div class="bp-grid-dark" aria-hidden="true"></div>
			<div class="hero-grid">
				<div class="hero-copy" id="heroCopy">
					<p class="kicker"><?php echo esc_html( zaec_front_field( 'hero_kicker' ) ); ?></p>
					<h1><?php echo esc_html( zaec_front_field( 'hero_title' ) ); ?></h1>
					<p class="lead"><?php echo esc_html( zaec_front_field( 'hero_lead' ) ); ?></p>
					<div class="hero-ctas">
						<a class="btn btn-signal btn-arrow" href="<?php echo esc_url( 0 === strpos( (string) zaec_front_field( 'hero_primary_url' ), '#' ) ? zaec_home_anchor( zaec_front_field( 'hero_primary_url' ) ) : zaec_front_field( 'hero_primary_url' ) ); ?>">
							<span><?php echo esc_html( zaec_front_field( 'hero_primary_text' ) ); ?></span>
							<svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg>
						</a>
						<a class="btn btn-line btn-arrow" href="<?php echo esc_url( 0 === strpos( (string) zaec_front_field( 'hero_secondary_url' ), '#' ) ? zaec_home_anchor( zaec_front_field( 'hero_secondary_url' ) ) : zaec_front_field( 'hero_secondary_url' ) ); ?>">
							<span><?php echo esc_html( zaec_front_field( 'hero_secondary_text' ) ); ?></span>
							<svg class="ar" aria-hidden="true"><use href="#ic-arrow-d"/></svg>
						</a>
					</div>
					<p class="cta-note"><?php echo esc_html( zaec_front_field( 'hero_note' ) ); ?></p>
					<?php if ( '' !== $hint ) : ?>
						<p class="hero-hint"><?php echo esc_html( $hint ); ?></p>
					<?php endif; ?>
				</div>

				<div class="svc-panel" id="za-koga">
					<p class="kicker"><?php echo esc_html( zaec_front_field( 'services_kicker' ) ); ?></p>
					<h2 class="svc-h"><?php echo esc_html( zaec_front_field( 'services_title' ) ); ?></h2>
					<p class="lead svc-lead"><?php echo esc_html( zaec_front_field( 'services_lead' ) ); ?></p>
					<div class="svc-minis">
						<?php foreach ( $services as $service ) : ?>
							<button type="button" class="svc-mini" data-layer="<?php echo esc_attr( absint( $service['layer'] ) ); ?>">
								<i><?php echo esc_html( $service['number'] ); ?></i>
								<b><?php echo esc_html( $service['title'] ); ?></b>
								<span><?php echo esc_html( $service['text'] ); ?></span>
							</button>
						<?php endforeach; ?>
					</div>
					<p class="mono-note"><?php echo esc_html( zaec_front_field( 'services_note' ) ); ?></p>
				</div>

				<div class="hero-stage">
					<div id="holoWrap">
						<canvas id="holoCanvas" role="img" aria-label="<?php esc_attr_e( 'Hologramska 3D vizualizacija obiteljske kuće koja se transformira i prikazuje različite djelatnosti.', 'zaec' ); ?>"></canvas>
						<div class="scanlines" aria-hidden="true"></div>
						<div id="layerLabels" aria-hidden="true"></div>
						<div id="holoFallbackD" aria-hidden="true">
							<svg viewBox="0 0 560 430" class="fb-house" aria-hidden="true">
								<defs>
									<linearGradient id="fbHouseGlow" x1="0" x2="1" y1="0" y2="1">
										<stop offset="0" stop-color="#b9efff"/>
										<stop offset="1" stop-color="#4d80ff"/>
									</linearGradient>
								</defs>
								<g class="fb-hud" fill="none" stroke="#7dd3ff" stroke-width="1">
									<path class="fb-ground" d="M52 335h430M84 350h358M116 365h294" stroke-dasharray="4 8"/>
									<path d="M74 331l-12 12M454 331l12 12M104 361l-10 10M406 361l10 10"/>
									<path class="fb-dimension" d="M188 315v27M394 315v27M188 333h206" stroke-dasharray="2 5"/>
									<text x="291" y="351">6.40 m · FRONT ELEVATION</text>
									<text x="414" y="82">N / 01</text>
								</g>
								<g class="fb-house-art" fill="none" stroke="url(#fbHouseGlow)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
									<!-- main volume: two floors, front facade and right return -->
									<path class="fb-shell" d="M188 312V151L291 76 394 151v161z"/>
									<path class="fb-shell fb-side" d="M394 151l96-45v151l-96 55z"/>
									<path class="fb-roof" d="M171 151L291 62l121 89M291 62l216 42-113 47"/>
									<path class="fb-roof-detail" d="M184 143l107-79 113 79M291 69l204 39" stroke-dasharray="3 6"/>
									<path d="M188 223h206M394 223l96-45" opacity=".6"/>
									<!-- lower side wing with a proper gable and porch -->
									<path class="fb-wing" d="M104 312V199l83-50 82 50v113"/>
									<path class="fb-wing-roof" d="M88 199l99-61 98 61M187 138v-18"/>
									<path d="M104 312h165M104 285h84M187 285h82" opacity=".55"/>
									<!-- consistent main facade windows -->
									<g class="fb-window">
										<rect x="215" y="171" width="46" height="53" rx="1"/><path d="M238 171v53M215 197.5h46"/>
										<rect x="329" y="171" width="46" height="53" rx="1"/><path d="M352 171v53M329 197.5h46"/>
										<rect x="215" y="242" width="46" height="39" rx="1"/><path d="M238 242v39M215 261.5h46"/>
										<path d="M210 226h56M324 226h56" opacity=".55"/>
									</g>
									<!-- centered entry and aligned upper French doors -->
									<g class="fb-door">
										<rect x="278" y="238" width="44" height="74" rx="1"/><path d="M300 238v74M278 261h44M278 284h44"/>
										<circle cx="294" cy="275" r="1.8" fill="#7dd3ff"/>
										<rect x="279" y="137" width="42" height="55" rx="1"/><path d="M300 137v55M279 164.5h42"/>
										<path d="M270 197h61v6h-61zM270 203l9 9M331 203l-9 9"/>
									</g>
									<!-- bay window: depth is visible, not a floating flat rectangle -->
									<path class="fb-bay" d="M345 238l30-12 22 10v54l-22 12-30-11z"/>
									<path d="M375 226v76M345 265h52M375 265l22-9M345 265l30 11"/>
									<!-- arched side entrance, columns and steps -->
									<path class="fb-arch" d="M130 312v-67a27 27 0 0 1 54 0v67M130 245h54"/>
									<path d="M124 312v-71M190 312v-71M118 312h78M118 321h78M126 330h62"/>
									<path d="M124 241h66M130 234h54" opacity=".65"/>
									<!-- two dormers, chimney, eaves and foundation -->
									<path class="fb-dormer" d="M233 110v-24l18-14 18 14v24M239 108V91h24v17M333 135v-27l18-14 18 14v27M339 133v-19h24v19"/>
									<path class="fb-chimney" d="M413 102V54h23v53M409 54h31M414 48h21"/>
									<path d="M178 312h228M178 319h228M188 326h206" opacity=".7"/>
									<!-- construction ticks / architectural axes -->
									<path class="fb-axis" d="M291 55v276M196 158h190M198 232h192" stroke-dasharray="2 7"/>
								</g>
								<g class="fb-labels" fill="#aee6ff" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="1.3">
									<text x="84" y="389">VILLA N / STRUCTURE 01</text>
									<text x="383" y="389">AXON / 1:50</text>
								</g>
							</svg>
						</div>
										<p class="holo-hint" aria-hidden="true">DRAG = ORBIT · SCROLL = AKSONOMETRIJA · KLIK = SLOJ</p>
									</div>

									<div class="occ-controls" id="occControls">
						<div class="occ-tabs" id="occTabs" role="tablist" aria-label="<?php esc_attr_e( 'Odaberite djelatnost i pogledajte što web može riješiti', 'zaec' ); ?>">
							<?php foreach ( $occ as $i => $o ) : ?>
								<button type="button" class="occ-tab<?php echo 0 === $i ? ' active' : ''; ?>" role="tab" aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>" data-occ="<?php echo esc_attr( $i ); ?>"><?php echo esc_html( $o['tab'] ); ?></button>
							<?php endforeach; ?>
						</div>
						<p class="occ-kbd" aria-hidden="true">← → promjena · Space pauza</p>
						<aside class="occ-card" id="occCard" aria-live="polite">
							<p class="occ-meta"><span id="occIdx">01</span>/08 · <?php esc_html_e( 'Pronađite svoju djelatnost', 'zaec' ); ?></p>
							<div class="occ-swap" id="occSwap">
								<h3 id="occTitle"><?php echo esc_html( $first['title'] ); ?></h3>
								<p class="occ-sub" id="occSub"><?php echo esc_html( $first['sub'] ); ?></p>
								<p class="occ-query" id="occQueryWrap"><svg class="ic" aria-hidden="true"><use href="#ic-query"/></svg><span id="occQuery"><?php echo esc_html( $first['q'] ); ?></span></p>
							</div>
							<div class="occ-bar" aria-hidden="true"><i id="occBarFill"></i></div>
						</aside>
					</div>
					<p class="phase-cap" id="phaseCaption"><?php esc_html_e( 'Svaki zanat na svom sloju · Aksonometrija 1:50', 'zaec' ); ?></p>
				</div>
			</div>
			<svg class="wm wm-hero" viewBox="0 0 100 100" aria-hidden="true"><use href="#zMon"/></svg>
		</div>
	</div>
</section>
