<?php
$steps = zaec_front_repeater( 'process_steps' );
?>
<section id="proces" class="sec sec-paper2" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="deco deco-level" viewBox="0 0 340 64" data-spin="-7" data-plx="30" aria-hidden="true"><rect x="10" y="16" width="320" height="32" rx="3" class="d-o"/><path d="M122 16v32M218 16v32" class="d-o"/><circle cx="170" cy="32" r="11" class="d-o"/><path d="M170 21a11 11 0 0 0 7 19" class="d-o d-dash"/><path d="M30 24v9M44 24v9M58 24v9M310 24v9M296 24v9" class="d-o"/><path d="M68 32h40M232 32h40" class="d-o d-dash"/></svg>
	<span class="sec-num" data-plx="70" aria-hidden="true">04</span>
	<div class="wrap proces-grid">
		<div class="proces-left">
			<div class="sec-head">
				<p class="kicker"><?php echo esc_html( zaec_front_field( 'proces_kicker' ) ); ?></p>
				<h2><?php echo esc_html( zaec_front_field( 'proces_title' ) ); ?></h2>
				<p class="lead"><?php echo esc_html( zaec_front_field( 'proces_lead' ) ); ?></p>
			</div>
			<div class="timeline" id="timeline">
				<i class="tl-line" aria-hidden="true"></i><i class="tl-fill" id="tlFill" aria-hidden="true"></i>
				<?php foreach ( $steps as $step ) : ?>
					<div class="tl-item">
						<i class="tl-num"><?php echo esc_html( $step['code'] ); ?></i>
						<div class="tl-copy">
							<h3><?php echo esc_html( $step['title'] ); ?></h3>
							<p><?php echo esc_html( $step['text'] ); ?></p>
							<span class="tl-meta"><?php echo esc_html( $step['meta'] ); ?></span>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="ps-col">
			<div class="ps-wrap">
				<svg id="psScene" viewBox="0 0 460 460" aria-label="Animirana shema procesa: razgovor, struktura, izgradnja i objava." role="img">
					<rect x="8" y="8" width="444" height="444" class="ps-frame"/>
					<path d="M230 8v444M8 230h444" class="ps-frame"/>

					<!-- K.01 · BRIEF / razgovor -->
					<g class="ps-cell" data-step="0">
						<rect x="8" y="8" width="222" height="222" class="ps-bg"/>
						<text x="30" y="44" class="ps-lab">K.01</text><text x="146" y="44" class="ps-copy">BRIEF</text>
						<path d="M42 74h112a11 11 0 0 1 11 11v42a11 11 0 0 1-11 11H91l-21 17v-17H42a11 11 0 0 1-11-11V85a11 11 0 0 1 11-11z" class="ps-st"/>
						<circle class="an an-typ" cx="72" cy="106" r="4"/><circle class="an an-typ d2" cx="96" cy="106" r="4"/><circle class="an an-typ d3" cx="120" cy="106" r="4"/>
						<path d="M111 166h78M111 184h64M111 202h48" class="ps-st an an-checkline"/>
						<path d="M84 164l7 7 13-15M84 182l7 7 13-15M84 200l7 7 13-15" class="ps-st2 an an-check"/>
					</g>

					<!-- K.02 · NACRT / struktura -->
					<g class="ps-cell" data-step="1">
						<rect x="230" y="8" width="222" height="222" class="ps-bg"/>
						<text x="252" y="44" class="ps-lab">K.02</text><text x="359" y="44" class="ps-copy">NACRT</text>
						<rect x="260" y="72" width="162" height="118" rx="2" class="ps-st"/>
						<path d="M260 92h162M278 82h4M289 82h4M300 82h4" class="ps-st"/>
						<path d="M278 110h52v62h-52zM342 110h62v25h-62zM342 146h62v26h-62z" class="ps-st an an-wire"/>
						<path d="M278 182h126" class="ps-st an an-wire"/>
						<path d="M389 102l16 6-11 13-3-8-8-3z" class="ps-st2 an an-cursor"/>
					</g>

					<!-- K.03 · BUILD / moduli se slažu -->
					<g class="ps-cell" data-step="2">
						<rect x="8" y="230" width="222" height="222" class="ps-bg"/>
						<text x="30" y="266" class="ps-lab">K.03</text><text x="144" y="266" class="ps-copy">BUILD</text>
						<rect x="36" y="292" width="166" height="118" rx="2" class="ps-st"/>
						<path d="M36 312h166M52 302h4M63 302h4M74 302h4" class="ps-st"/>
						<rect x="52" y="330" width="52" height="62" class="ps-st2 an an-module m1"/>
						<rect x="114" y="330" width="72" height="26" class="ps-st2 an an-module m2"/>
						<rect x="114" y="366" width="72" height="26" class="ps-st2 an an-module m3"/>
						<path d="M52 420h134" class="ps-progress"/><path d="M52 420h134" class="ps-progress ps-progress--fill an an-progress"/>
					</g>

					<!-- K.04 · LIVE / objava i primopredaja -->
					<g class="ps-cell" data-step="3">
						<rect x="230" y="230" width="222" height="222" class="ps-bg"/>
						<text x="252" y="266" class="ps-lab">K.04</text><text x="373" y="266" class="ps-copy">LIVE</text>
						<rect x="260" y="296" width="162" height="100" rx="2" class="ps-st"/>
						<path d="M260 316h162M276 306h4M287 306h4M298 306h4" class="ps-st"/>
						<circle cx="310" cy="352" r="22" class="ps-st an an-orb"/><path d="M288 352h44M310 330c8 8 11 15 11 22s-3 14-11 22M310 330c-8 8-11 15-11 22s3 14 11 22" class="ps-st"/>
						<path d="M354 348l10 10 22-26" class="ps-st2 an an-livecheck"/>
						<circle cx="365" cy="346" r="31" class="ps-pulse an an-pulse"/><circle cx="365" cy="346" r="43" class="ps-pulse an an-pulse d2"/>
						<text x="278" y="421" class="ps-status">OBJAVLJENO · PRISTUPI PREDANI</text>
					</g>
				</svg>
				<p class="bp-cap">Proces · od briefa do objave</p>
			</div>
		</div>
	</div>
</section>
