<?php
/**
 * Mobile-first sekcija.
 *
 * Telefon pokazuje logiku stvarne lokalne usluge: problem, rješenje,
 * povjerenje i kontakt — bez lažnih cijena, termina ili obavijesti.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$points      = zaec_front_repeater( 'screen_points' );
$options      = zaec_get_options();
$phone_href   = zaec_phone_href( $options['phone_raw'] );
$phone_display = $options['phone_display'];
?>
<section id="ekran" class="sec sec-ink" data-theme="dark">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<span class="sec-num" data-plx="80" aria-hidden="true">05</span>
	<div class="ek-glow" aria-hidden="true"></div>
	<div class="ek-rings" aria-hidden="true"><i></i><i></i><i></i></div>

	<div class="wrap ekran-grid">
		<div class="ekran-copy">
			<div class="sec-head">
				<p class="kicker"><?php echo esc_html( zaec_front_field( 'ekran_kicker' ) ); ?></p>
				<h2><?php echo esc_html( zaec_front_field( 'ekran_title' ) ); ?></h2>
				<p class="lead"><?php echo esc_html( zaec_front_field( 'ekran_lead' ) ); ?></p>
			</div>

			<div class="m-points ek-points">
				<?php foreach ( $points as $point ) : ?>
					<div class="m-point ek-pt">
						<i><?php echo esc_html( $point['code'] ); ?></i>
						<div>
							<b><?php echo esc_html( $point['title'] ); ?></b>
							<p><?php echo esc_html( $point['text'] ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="ph-stage" id="phStage">
			<div class="ph-move" id="phMove">
				<div class="ph3d" id="ph3d">
					<div class="ph-body">
						<i class="ph-side ph-s1" aria-hidden="true"></i>
						<i class="ph-side ph-s2" aria-hidden="true"></i>
						<i class="ph-side ph-s3" aria-hidden="true"></i>

						<div class="ph-screen">
							<div class="ms-bar" aria-hidden="true">
								<span>9:41</span>
								<span class="ms-ico"><i class="ms-sig"></i><i class="ms-batt"></i></span>
							</div>

							<div class="ms-view">
								<div class="ms-scroll" id="msScroll">
									<div class="ms-nav">
										<b>KLIMA SERVIS<em>servis · montaža · čišćenje</em></b>
										<a class="ms-cta" href="tel:<?php echo esc_attr( $phone_href ); ?>">Pozovi</a>
									</div>

									<div class="ms-hero">
										<span class="ms-kick">Umag · Buje · Novigrad · Istra</span>
										<h4>Temperatura vani. Mir unutra.</h4>
										<p>Servis, čišćenje i montaža klima uređaja. Prvo utvrdimo što prostoru treba, zatim dogovorimo termin.</p>
										<div class="ms-btns"><a class="ms-b1" href="#upit">Zatraži procjenu</a><a class="ms-b2" href="tel:<?php echo esc_attr( $phone_href ); ?>">Nazovi</a></div>
										<div class="ms-proof"><svg class="ms-star" aria-hidden="true"><use href="#ic-star"/></svg><span>Google recenzije</span></div>
									</div>

									<div class="ms-gal"><i>Klima ne hladi</i><i>Osjeti se miris</i><i>Trebam novu klimu</i><i>Vrijeme za servis</i></div>

									<div class="ms-list">
										<div><b>Dijagnostika na licu mjesta</b><a href="#upit">Zakaži →</a></div>
										<div><b>Čišćenje &amp; dezinfekcija</b><a href="#upit">Zakaži →</a></div>
										<div><b>Montaža &amp; skrivena rješenja</b><a href="#upit">Zakaži →</a></div>
										<div><b>Redovito održavanje</b><a href="#upit">Zakaži →</a></div>
									</div>

									<div class="ms-band"><h5>Razgovarajmo o prostoru.</h5><a class="ms-b1" href="#upit">Zatraži procjenu</a></div>

									<div class="ms-foot"><b>KLIMA SERVIS</b><span>Umag · Buje · Novigrad · Istra</span><span>poziv · upit · termin</span></div>
								</div>
							</div>

							<a class="ms-sticky" href="tel:<?php echo esc_attr( $phone_href ); ?>"><svg class="ph-ic" aria-hidden="true"><use href="#ic-phone"/></svg><span>Pozovi · <?php echo esc_html( $phone_display ); ?></span></a>
							<div class="ph-island" aria-hidden="true"></div>
							<div class="ph-glare" aria-hidden="true"></div>
						</div>
					</div>
				<div class="ph-shadow" aria-hidden="true"></div>
			</div>
		</div>

			<div class="ph-float pf-1" data-depth="14" aria-hidden="true">
				<div class="pf-card pf-google">
					<span class="pf-lab">Google recenzije</span>
					<span class="pf-rating pf-rating--word" aria-label="Google recenzije"><b class="pf-rating__n">Google</b><span class="pf-rating__s">recenzije</span></span>
					<span class="pf-stars"><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg></span>
				</div>
			</div>

			<div class="ph-float pf-2" data-depth="30">
				<a class="pf-card" href="#upit">
					<span class="pf-lab"><svg class="pf-ic" aria-hidden="true"><use href="#ic-arrow"/></svg> Zatraži procjenu</span>
					<b>„Bez obveze.”</b>
					<span class="pf-sub">kratak upit · jasan termin</span>
				</a>
			</div>

			<div class="ph-float pf-3" data-depth="10">
				<a class="pf-card pf-call" href="tel:<?php echo esc_attr( $phone_href ); ?>">
					<svg class="pf-ic" aria-hidden="true"><use href="#ic-phone"/></svg>
					<span><b>Kontakt na jednom mjestu</b><span class="pf-sub">poziv · poruka · lokacija</span></span>
				</a>
			</div>

			<p class="ph-cap" aria-hidden="true">Mobile-first · usluga → povjerenje → kontakt</p>
		</div>
	</div>
</section>
