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

$points = zaec_front_repeater( 'screen_points' );
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
										<span class="ms-cta">Pozovi</span>
									</div>

									<div class="ms-hero">
										<span class="ms-kick">Umag · Buje · Novigrad · Istra</span>
										<h4>Temperatura vani. Mir unutra.</h4>
										<p>Servis, čišćenje i montaža klima uređaja. Prvo utvrdimo što prostoru treba, zatim dogovorimo termin.</p>
										<div class="ms-btns"><span class="ms-b1">Zatraži procjenu</span><span class="ms-b2">Nazovi</span></div>
										<div class="ms-proof"><svg class="ms-star" aria-hidden="true"><use href="#ic-star"/></svg><span>4.9/5 · Google recenzije</span></div>
									</div>

									<div class="ms-gal"><i>Klima ne hladi</i><i>Osjeti se miris</i><i>Trebam novu klimu</i><i>Vrijeme za servis</i></div>

									<div class="ms-list">
										<div><b>Dijagnostika na licu mjesta</b><span>Zakaži →</span></div>
										<div><b>Čišćenje &amp; dezinfekcija</b><span>Zakaži →</span></div>
										<div><b>Montaža &amp; skrivena rješenja</b><span>Zakaži →</span></div>
										<div><b>Redovito održavanje</b><span>Zakaži →</span></div>
									</div>

									<div class="ms-band"><h5>Razgovarajmo o prostoru.</h5><span class="ms-b1">Zatraži procjenu</span></div>

									<div class="ms-foot"><b>KLIMA SERVIS</b><span>Umag · Buje · Novigrad · Istra</span><span>poziv · upit · termin</span></div>
								</div>
							</div>

							<div class="ms-sticky"><svg class="ph-ic" aria-hidden="true"><use href="#ic-phone"/></svg><span>Pozovi · jasan kontakt</span></div>
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
					<span class="pf-rating" aria-label="Google ocjena 4.9 od 5"><b class="pf-rating__n">4.9</b><span class="pf-rating__s">/5</span></span>
					<span class="pf-stars"><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg><svg aria-hidden="true"><use href="#ic-star"/></svg></span>
				</div>
			</div>

			<div class="ph-float pf-2" data-depth="30" aria-hidden="true">
				<div class="pf-card">
					<span class="pf-lab"><svg class="pf-ic" aria-hidden="true"><use href="#ic-arrow"/></svg> Zatraži procjenu</span>
					<b>„Bez obveze.”</b>
					<span class="pf-sub">kratak upit · jasan termin</span>
				</div>
			</div>

			<div class="ph-float pf-3" data-depth="10" aria-hidden="true">
				<div class="pf-card pf-call">
					<svg class="pf-ic" aria-hidden="true"><use href="#ic-phone"/></svg>
					<span><b>Kontakt na jednom mjestu</b><span class="pf-sub">poziv · poruka · lokacija</span></span>
				</div>
			</div>

			<p class="ph-cap" aria-hidden="true">Mobile-first · usluga → povjerenje → kontakt</p>
		</div>
	</div>
</section>
