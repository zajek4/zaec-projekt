<?php
$plans              = zaec_front_repeater( 'pricing' );
$notes              = zaec_front_repeater( 'pricing_notes' );
$maintenance_plans  = zaec_front_repeater( 'maintenance_plans' );
$maintenance_notes  = zaec_front_repeater( 'maintenance_notes' );
$tracks = array();
foreach ( $plans as $plan ) {
	$track = ! empty( $plan['track'] ) ? $plan['track'] : __( 'Ponuda', 'zaec' );
	if ( ! isset( $tracks[ $track ] ) ) {
		$tracks[ $track ] = array();
	}
	$tracks[ $track ][] = $plan;
}
?>
<section id="cijene" class="sec sec-paper" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="deco deco-plan" viewBox="0 0 320 246" data-plx="30" aria-hidden="true"><rect x="16" y="16" width="288" height="204" class="d-o"/><path d="M160 16v88M160 156v64M16 110h64M224 110h80" class="d-o"/><path d="M160 104a26 26 0 0 1 26 -26" class="d-o d-dash"/><path d="M80 110a24 24 0 0 1 -24 -24" class="d-o d-dash"/><path d="M16 234h288M16 226v12M304 226v12" class="d-o"/><text x="148" y="231" class="d-t">4.60</text></svg>
	<span class="sec-num" data-plx="80" aria-hidden="true">06</span>
	<svg class="wm wm-l" viewBox="0 0 100 100" data-plx="56" aria-hidden="true"><use href="#zMon"/></svg>
	<div class="wrap">
		<div class="sec-head offset">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'cijene_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'cijene_title' ) ); ?></h2>
			<p class="lead"><?php echo esc_html( zaec_front_field( 'cijene_lead' ) ); ?></p>
			<a class="pricing-scope-link" href="#poseban-opseg"><span><?php echo esc_html( zaec_front_field( 'band_cta' ) ); ?></span><svg class="ar" aria-hidden="true"><use href="#ic-arrow-d"/></svg></a>
		</div>

		<div class="pricing-tracks">
			<?php foreach ( $tracks as $track_name => $track_plans ) : ?>
				<section class="pricing-track">
					<header class="pricing-track__head">
						<p class="pricing-track__index">[ <?php echo esc_html( 'Predložak' === $track_name ? 'A' : 'B' ); ?> ]</p>
						<h3><?php echo esc_html( $track_name ); ?></h3>
						<p><?php echo esc_html( 'Predložak' === $track_name ? 'Brže, povoljnije i s unaprijed definiranim sustavom stranica.' : 'Struktura i vizualni smjer crtaju se za konkretan posao prije razvoja.' ); ?></p>
					</header>
					<div class="pricing-track__cards">
						<?php foreach ( $track_plans as $plan ) :
							$featured = ! empty( $plan['featured'] ) && '0' !== $plan['featured'];
							$features = preg_split( '/\r\n|\r|\n/', isset( $plan['features'] ) ? $plan['features'] : '' );
							?>
							<article class="plan<?php echo $featured ? ' plan-hot' : ''; ?>">
								<?php if ( ! empty( $plan['badge'] ) ) : ?><p class="plan-badge"><?php echo esc_html( $plan['badge'] ); ?></p><?php endif; ?>
								<p class="plan-num"><?php echo esc_html( $plan['code'] ); ?></p>
								<h4 class="plan-name"><?php echo esc_html( $plan['name'] ); ?></h4>
								<p class="plan-price"><b><?php echo esc_html( $plan['price'] ); ?></b><span><?php echo esc_html( $plan['meta'] ); ?></span></p>
								<p class="plan-tag"><?php echo esc_html( $plan['tag'] ); ?></p>
								<ul class="plan-feats">
									<?php foreach ( $features as $feature ) : if ( '' === trim( $feature ) ) { continue; } ?>
										<li><svg class="ck"><use href="#ic-check"/></svg><?php echo esc_html( trim( $feature ) ); ?></li>
									<?php endforeach; ?>
								</ul>
								<a href="#upit" class="btn <?php echo $featured ? 'btn-signal btn-arrow' : 'btn-line'; ?> plan-cta" data-package="<?php echo esc_attr( $plan['package'] ); ?>">
									<span><?php echo esc_html( $plan['cta'] ); ?></span><?php if ( $featured ) : ?><svg class="ar"><use href="#ic-arrow"/></svg><?php endif; ?>
								</a>
							</article>
						<?php endforeach; ?>
					</div>
				</section>
			<?php endforeach; ?>
		</div>

		<div class="plan-band" id="poseban-opseg">
			<p class="pb-kick"><?php echo esc_html( zaec_front_field( 'band_kicker' ) ); ?></p>
			<div class="pb-mid"><h3><?php echo esc_html( zaec_front_field( 'band_title' ) ); ?></h3><p><?php echo esc_html( zaec_front_field( 'band_text' ) ); ?></p><p class="pb-feats"><span>Opseg prije razvoja</span><span>Cijena prije koda</span><span>Bez skrivenih dodataka</span></p>
				<p class="pb-brands" aria-label="WooCommerce">
					<img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/brands/woocommerce.png' ) ); ?>" width="140" height="16" alt="WooCommerce" decoding="async" loading="lazy"/>
					<span class="pb-brands__note"><?php esc_html_e( 'WooCommerce webshop', 'zaec' ); ?></span>
				</p>
			</div>
			<div class="pb-side"><p class="plan-price"><b><?php echo esc_html( zaec_front_field( 'band_price' ) ); ?></b><span><?php echo esc_html( zaec_front_field( 'band_price_meta' ) ); ?></span></p><a href="#upit" class="btn btn-line plan-cta" data-package="Poseban opseg"><span><?php echo esc_html( zaec_front_field( 'band_next_cta' ) ); ?></span></a></div>
		</div>

		<?php if ( $maintenance_plans ) : ?>
			<section id="odrzavanje" class="zaec-maintenance" aria-labelledby="zaec-maintenance-title">
				<div class="zaec-maintenance__head">
					<p class="kicker"><?php echo esc_html( zaec_front_field( 'maintenance_kicker' ) ); ?></p>
					<h3 id="zaec-maintenance-title"><?php echo esc_html( zaec_front_field( 'maintenance_title' ) ); ?></h3>
					<p><?php echo esc_html( zaec_front_field( 'maintenance_lead' ) ); ?></p>
				</div>
				<div class="zaec-maintenance__plans">
					<?php foreach ( $maintenance_plans as $plan ) : ?>
						<article class="zaec-maintenance-plan">
							<p class="plan-num"><?php echo esc_html( $plan['code'] ); ?></p>
							<h4><?php echo esc_html( $plan['name'] ); ?></h4>
							<p class="zaec-maintenance-plan__price"><b><?php echo esc_html( $plan['price'] ); ?></b><span><?php echo esc_html( $plan['meta'] ); ?></span></p>
							<p class="zaec-maintenance-plan__tag"><?php echo esc_html( $plan['tag'] ); ?></p>
							<ul>
								<?php foreach ( preg_split( '/\r\n|\r|\n/', $plan['features'] ) as $feature ) : if ( '' === trim( $feature ) ) { continue; } ?>
									<li><svg class="ck" aria-hidden="true"><use href="#ic-check"/></svg><?php echo esc_html( trim( $feature ) ); ?></li>
								<?php endforeach; ?>
							</ul>
						</article>
					<?php endforeach; ?>
				</div>
				<?php if ( $maintenance_notes ) : ?>
					<div class="zaec-maintenance__notes">
						<?php foreach ( $maintenance_notes as $note ) : ?><p><b>[ <?php echo esc_html( $note['label'] ); ?> ]</b><?php echo esc_html( $note['text'] ); ?></p><?php endforeach; ?>
					</div>
				<?php endif; ?>
			</section>
		<?php endif; ?>

		<?php if ( $notes ) : ?>
			<div class="price-notes">
				<?php foreach ( $notes as $note ) : ?><p class="price-note"><b>[ <?php echo esc_html( $note['label'] ); ?> ]</b><?php echo esc_html( $note['text'] ); ?></p><?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
