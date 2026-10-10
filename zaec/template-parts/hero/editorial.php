<?php
/**
 * Urednički hero (razina 2): usluge, djelatnosti, hubovi, Osijek, provjera, cijene, radovi.
 * Kadar je prevelik za rešetku i izlazi preko desnog ruba ekrana (na mobitelu: kadar od ruba do ruba na vrhu).
 * Naslov je jedan tekst koji prelazi s papira u kadar: mix-blend-mode: difference ga na papiru crta tamno,
 * a u noćnom kadru svijetlo (istaknuta riječ: plava na papiru, zlatna u kadru). Uz kadar ide "slate" —
 * oznaka kadra i opis scene. Hubovi umjesto niza jamstava dobivaju kontaktni arak: kadrove svojih stranica.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l     = $args['landing'];
$dark  = ! empty( $l['dark'] );
$cta   = $l['cta'] ?? array( 'Složite svoj projekt', 'cijene#konfigurator' );
$href  = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );
$title = $l['h1'] ?? $l['title'];
$nacrt = zaec_nacrt( $l );
// Cijene: umjesto slike kartica „Vaša procjena“ iz procjene na stranici (slika ostaje za dijeljenje, og:image)
$est   = 'pricing' === ( $l['type'] ?? '' ) && in_array( 'configurator', array_column( (array) ( $l['blocks'] ?? array() ), 'type' ), true );
$img   = $nacrt || $est ? '' : ( $l['image'] ?? '' );
$kick  = (string) ( $l['kicker'] ?? $l['title'] );
// oznaka kadra: "U.04" iz kickera ("Usluga · U.04"), inače naziv stranice
$code = preg_match( '~([A-ZČĆŽŠĐ]\.\d{2})~u', $kick, $zaec_m ) ? $zaec_m[1] : $kick;

// kontaktni arak za hubove: kadrovi podstranica iz registra
$sheet = array();
if ( in_array( $l['type'] ?? '', array( 'hub', 'hub-industries' ), true ) && ! empty( $l['key'] ) ) {
	foreach ( zaec_landing_registry() as $zaec_k => $zaec_r ) {
		if ( 0 !== strpos( $zaec_k, $l['key'] . '/' ) ) {
			continue;
		}
		// djelatnosti: kazalo listova nacrta (sitni list bez oznaka), ostalo: kadar stranice
		$zaec_r['thumb'] = zaec_nacrt_thumb( $zaec_r );
		if ( $zaec_r['thumb'] || ! empty( $zaec_r['image'] ) ) {
			$sheet[ $zaec_k ] = $zaec_r;
		}
	}
}
?>
<section class="eh<?php echo $dark ? ' eh--dark' : ''; ?><?php echo $img || $nacrt || $est ? '' : ' eh--noimg'; ?><?php echo $est ? ' eh--est' : ''; ?><?php echo $nacrt ? ' eh--nacrt' : ''; ?><?php echo $sheet ? ' eh--hub' : ''; ?>" data-hero="editorial"<?php echo $dark ? ' data-header-theme="night"' : ''; ?> aria-labelledby="eh-title">
	<div class="eh-stage">
		<div class="wrap eh-copy">
			<div class="eh-head">
				<?php zaec_render_breadcrumbs(); ?>
				<p class="kicker"><?php echo esc_html( $kick ); ?></p>
			</div>
			<?php if ( $nacrt ) : ?>
				<figure class="eh-frame nacrt">
					<?php echo $nacrt[0] . $nacrt[1]; // phpcs:ignore -- generirani SVG iz teme (tools/art/nacrt) ?>
				</figure>
			<?php elseif ( $est ) : ?>
				<div class="eh-frame eh-frame--est">
					<?php get_template_part( 'template-parts/configurator', null, array( 'mirror' => 'konfigurator' ) ); ?>
				</div>
			<?php elseif ( $img ) : ?>
				<figure class="eh-frame">
					<?php $zaec_srcset = zaec_img_srcset( $img ); ?>
					<img class="eh-img" src="<?php echo esc_url( zaec_img( $img ) ); ?>"<?php if ( $zaec_srcset ) : ?> srcset="<?php echo esc_attr( $zaec_srcset ); ?>" sizes="(max-aspect-ratio: 4/5) 100vw, (max-width: 760px) 100vw, (max-width: 1100px) and (max-aspect-ratio: 1/1) 100vw, 58vw"<?php endif; ?> alt="<?php echo esc_attr( $l['image_alt'] ?? '' ); ?>" width="1400" height="1050" fetchpriority="high" decoding="async">
					<?php if ( ! empty( $l['image_alt'] ) ) : ?>
						<figcaption class="eh-slate mono" aria-hidden="true"><b><?php echo esc_html( $code ); ?></b><span><?php echo esc_html( $l['image_alt'] ); ?></span></figcaption>
					<?php endif; ?>
				</figure>
			<?php endif; ?>
			<h1 class="h1 eh-title" id="eh-title"><?php echo zaec_kses_title( $title ); // phpcs:ignore ?></h1>
			<div class="eh-body">
				<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
				<?php zaec_hero_ctas( $cta, $href ); ?>
				<?php if ( ! $sheet ) : ?>
					<ul class="phero-trust mono" role="list">
						<li><?php zaec_the_icon( 'document', 16 ); ?> Fiksna cijena u ponudi</li>
						<li><?php zaec_the_icon( 'key', 16 ); ?> Sve na vaše ime</li>
						<li><?php zaec_the_icon( 'chat-round-dots', 16 ); ?> Prvi razgovor besplatno</li>
					</ul>
				<?php endif; ?>
				<?php if ( 'industry' === ( $l['type'] ?? '' ) && false === strpos( $cta[1], 'provjera-vidljivosti' ) ) : ?>
					<?php // manji korak za posjetitelja koji još nije spreman za cijeli web (strategy/03, ljestvica ulaza) ?>
					<p class="phero-more"><a class="link-arrow" href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>" data-track="cta_industry_audit">Ili prvo besplatna provjera vidljivosti <?php zaec_the_icon( 'arrow-right', 16 ); ?></a></p>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php if ( $sheet ) : ?>
		<nav class="eh-sheet" aria-label="<?php echo esc_attr( $l['title'] ); ?>">
			<ol class="eh-sheet-list" role="list">
				<?php
				$zaec_i = 0;
				foreach ( $sheet as $zaec_k => $zaec_r ) :
					$zaec_i++;
					?>
					<li>
						<a href="<?php echo esc_url( zaec_url( $zaec_k ) ); ?>">
							<?php if ( $zaec_r['thumb'] ) : ?>
								<span class="eh-sheet-img eh-sheet-img--nacrt"><img src="<?php echo esc_url( $zaec_r['thumb'] ); ?>" alt="" width="800" height="600" loading="lazy" decoding="async"></span>
							<?php else : ?>
								<span class="eh-sheet-img"><img src="<?php echo esc_url( zaec_img( preg_replace( '/\.webp$/', '-800.webp', $zaec_r['image'] ) ) ); ?>" alt="" width="800" height="600" loading="lazy" decoding="async"></span>
							<?php endif; ?>
							<span class="eh-sheet-n mono"><?php echo esc_html( zaec_pad( $zaec_i ) ); ?></span>
							<b><?php echo esc_html( $zaec_r['title'] ); ?></b>
						</a>
					</li>
				<?php endforeach; ?>
			</ol>
		</nav>
	<?php endif; ?>
</section>
