<?php
/**
 * Wireframe kuća — poslovna metafora i način rada.
 *
 * The hero now belongs to the Earth network. This section keeps the original
 * ZAEC house story and its interactive occupation overlays.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$services = zaec_front_repeater( 'services' );
$occ      = array_slice( zaec_front_repeater( 'occupations' ), 0, 8 );
$first    = isset( $occ[0] ) ? $occ[0] : array( 'title' => '', 'sub' => '', 'q' => '' );
?>
<section id="house" class="house-section sec sec-ink" data-theme="dark" aria-labelledby="houseTitle">
	<div class="house-pin-space" id="housePinSpace">
		<div class="house-pin-stage pin-stage" id="housePin">
			<div class="bp-grid-dark" aria-hidden="true"></div>
			<div class="house-grid">
				<div class="house-copy" id="houseCopy">
					<p class="kicker"><?php echo esc_html( zaec_front_field( 'hero_kicker' ) ); ?></p>
					<h2 id="houseTitle"><?php echo esc_html( zaec_front_field( 'hero_title' ) ); ?></h2>
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
					<p class="house-copy__signal"><i></i> Slojevi weba · sadržaj · UX · funkcije · objava</p>
				</div>

				<span id="za-koga" class="house-anchor" aria-hidden="true"></span>
				<div class="house-services-panel" id="houseServices">
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

				<div class="house-stage">
					<div id="holoWrap">
						<canvas id="holoCanvas" role="img" aria-label="<?php esc_attr_e( 'Interaktivna aksonometrijska wireframe kuća koja prikazuje slojeve web projekta.', 'zaec' ); ?>"></canvas>
						<div class="scanlines" aria-hidden="true"></div>
						<div id="layerLabels" aria-hidden="true"></div>
						<div id="holoFallbackD" aria-hidden="true">
							<svg viewBox="0 0 520 380" class="house-fallback-art" aria-hidden="true">
								<g fill="none" stroke="#7dd3ff" stroke-linecap="round" stroke-linejoin="round">
									<path d="M100 310V172l136-88 136 88v138z" stroke-width="2"/>
									<path d="M372 172l78-39v128l-78 49M236 84l214 49-78 39" stroke-width="1.5"/>
									<path d="M78 172L236 68l158 104M236 68V42M230 42h12" stroke-width="2"/>
									<path d="M134 310v-76h47v76M181 310v-98h50v98M279 310v-84h52v84M331 310v-58h25v58"/>
									<path d="M134 272h47M181 262h50M279 268h52M331 280h25M157 234v76M206 212v98M305 226v84M343 252v58" opacity=".75"/>
									<path d="M100 218h272M372 218l78-39" stroke-dasharray="3 6" opacity=".7"/>
									<path d="M208 310v-62h48v62M208 276h48M232 248v62" stroke="#aee6ff" stroke-width="1.8"/>
									<path d="M62 322h390M88 336h338" stroke-dasharray="4 7" opacity=".5"/>
									<path d="M388 88v-42h19v45M384 46h27" opacity=".7"/>
								</g>
								<g fill="#aee6ff" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="1.4">
									<text x="84" y="362">VILLA N · WIREFRAME / AXON 1:50</text>
								</g>
							</svg>
						</div>
						<p class="holo-hint" aria-hidden="true">DRAG = ORBIT · SCROLL = SLOJEVI · KLIK = IZOLACIJA</p>
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
					<p class="phase-cap" id="housePhase"><?php esc_html_e( 'Svaki zanat na svom sloju · Aksonometrija 1:50', 'zaec' ); ?></p>
				</div>
			</div>
		</div>
	</div>
</section>
