<?php
/**
 * Potpisni hero: Izrada web stranica — "Od nacrta do zgrade".
 * Sedam etaža = sedam dijelova stranice koja zove. Skener scrollom gradi zgradu od temelja (upit) do krune (hero)
 * i istom crtom "gradi" naslov. Zatim se kadar zatvara oko zgrade, a dijelovi stranice prolaze pored nje
 * (sekcija "Kako izgleda stranica koja zove" je nastavak iste scene).
 * Bez JS-a / uz smanjeno kretanje: završno stanje (sagrađeno), bez pinanja.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l   = $args['landing'];
$md  = zaec_hero_meta( 'izrada-d' );
$mm  = zaec_hero_meta( 'izrada-m' );
$reg = zaec_landing_registry()[ $l['key'] ] ?? $l;
$an  = null;
foreach ( (array) ( $reg['blocks'] ?? array() ) as $b ) {
	if ( 'anatomy' === ( $b['type'] ?? '' ) ) {
		$an = $b;
	}
}
$parts = array();
foreach ( (array) ( $an['parts'] ?? array() ) as $p ) {
	$parts[] = is_array( $p ) ? array( $p[0], $p[1] ?? '' ) : array( $p, '' );
}
$n     = count( $parts );
$cta   = $l['cta'] ?? array( 'Složite svoj projekt', 'cijene#konfigurator' );
$href  = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );
$meta  = array(
	'd' => $md ? array( 'levels' => $md['levels'], 'crown' => $md['crown'], 'left' => $md['left'], 'right' => $md['right'] ) : null,
	'm' => $mm ? array( 'levels' => $mm['levels'], 'crown' => $mm['crown'], 'left' => $mm['left'], 'right' => $mm['right'] ) : null,
);
$style = $md && $mm ? sprintf( '--bl:%s;--br:%s;--blm:%s;--brm:%s', $md['left'], $md['right'], $mm['left'], $mm['right'] ) : '';
?>
<section class="sh sh-izrada" data-hero="izrada" data-header-theme="night" aria-labelledby="sh-title" data-meta="<?php echo esc_attr( wp_json_encode( $meta ) ); ?>" style="<?php echo esc_attr( $style ); ?>">
	<div class="sh-stage">
		<div class="sh-frame">
			<div class="sh-scene" aria-hidden="true">
				<?php zaec_hero_picture( 'izrada-plan', array( 'class' => 'sh-layer sh-plan', 'priority' => true ) ); ?>
				<div class="sh-layer sh-real"><?php zaec_hero_picture( 'izrada-real', array( 'class' => 'sh-layer' ) ); ?></div>
				<?php if ( $md && $mm ) : ?>
					<div class="sh-floors">
						<?php
						foreach ( $md['levels'] as $i => $lv ) :
							$k    = $n - 1 - $i; // etaža 1 (temelj) = zadnji dio stranice (upit)
							$part = $parts[ $k ] ?? array( $lv['label'], '' );
							printf(
								'<span class="sh-floor" data-level="%1$d" style="--b:%2$s;--t:%3$s;--bm:%4$s;--tm:%5$s"><i>%6$s</i><b>%7$s</b></span>',
								(int) $i,
								esc_attr( $lv['bottom'] ),
								esc_attr( $lv['top'] ),
								esc_attr( $mm['levels'][ $i ]['bottom'] ),
								esc_attr( $mm['levels'][ $i ]['top'] ),
								esc_html( zaec_pad( $k + 1 ) ),
								esc_html( $part[0] )
							);
						endforeach;
						?>
					</div>
					<span class="sh-hl"></span>
				<?php endif; ?>
			</div>
		</div>
		<div class="sh-scan" aria-hidden="true"></div>
		<div class="wrap sh-copy">
			<div class="sh-top">
				<?php zaec_render_breadcrumbs(); ?>
				<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?></p>
				<h1 class="h1 sh-title" id="sh-title"><?php echo zaec_kses_title( $l['h1'] ?? $l['title'] ); // phpcs:ignore ?></h1>
			</div>
			<div class="sh-bottom">
			<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead sh-lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
			<div class="phero-cta">
				<?php echo zaec_button( $cta[0], $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore ?>
				<a class="btn btn--ghost" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
			</div>
			<p class="sh-hint mono" aria-hidden="true"><span></span><b data-scan-label>Skrolajte — gradimo od temelja</b></p>
		</div>
	</div>
	<?php if ( $parts ) : ?>
		<div class="sh-anat" id="nacrt">
			<div class="wrap">
				<div class="sh-anat-col">
					<p class="kicker">Nacrt · sedam etaža</p>
					<?php zaec_heading( $an['title'] ?? 'Kako izgleda stranica koja <em>zove</em>.', 'h2', 'h2' ); ?>
					<?php if ( ! empty( $an['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $an['lead'] ); ?> Gradimo je od temelja: prvo put do upita, na kraju izlog.</p><?php endif; ?>
					<div class="sh-anat-intro" data-lead-slot></div>
					<ol class="sh-anat-list" role="list">
						<?php foreach ( $parts as $k => $p ) : ?>
							<li data-level="<?php echo (int) ( $n - 1 - $k ); ?>"><span class="anat-n"><?php echo esc_html( zaec_pad( $k + 1 ) ); ?></span><div><b><?php echo esc_html( $p[0] ); ?></b><?php if ( $p[1] ) : ?><p><?php echo esc_html( $p[1] ); ?></p><?php endif; ?></div></li>
						<?php endforeach; ?>
					</ol>
				</div>
			</div>
		</div>
	<?php endif; ?>
</section>
<?php zaec_hero_answer( $l, 'sh-answer' ); ?>
