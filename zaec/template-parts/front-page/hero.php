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
							<svg viewBox="0 0 440 300" class="fb-house" aria-hidden="true">
								<g fill="none" stroke="#7dd3ff" stroke-width="1.4">
									<path d="M150 260V150l110-80 110 80v110z"/>
									<path d="M138 152L260 64l122 88"/>
									<path d="M212 260v-60h44v60zM300 208h44v36h-44zM176 208h26v32h-26z"/>
									<path d="M212 230h44M234 200v60M300 226h44M322 208v36M176 224h26M189 208v32"/>
									<path d="M170 260V172h-64v88zM170 172h-64"/>
									<path d="M162 260v-52h-48v52zM162 224h-48M162 240h-48" opacity="0.7"/>
									<path d="M298 108l16-12 16 12zM314 96V74h8v16z" opacity="0.7"/>
									<path d="M236 120l24-18 24 18zM248 138l12-9 12 9" opacity="0.7"/>
									<path d="M60 260h340" stroke-dasharray="4 5" opacity="0.55"/>
								</g>
							</svg>
						</div>
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
<div class="marquee" data-theme="dark" aria-hidden="true">
	<div class="mq-track">
		<span>Obrti // Tvrtke // Hrvatska // Remote // Landing // Google Business // WooCommerce // Corvus // Klimatizacija // Gradnja // Shop //&nbsp;</span>
		<span>Obrti // Tvrtke // Hrvatska // Remote // Landing // Google Business // WooCommerce // Corvus // Klimatizacija // Gradnja // Shop //&nbsp;</span>
	</div>
</div>
