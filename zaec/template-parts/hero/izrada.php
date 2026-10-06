<?php
/**
 * Potpisni hero: Izrada web stranica — naslov je zgrada.
 * Svaka riječ naslova je jedna etaža: riječ ispunjava širinu pročelja, visina etaže je visina riječi (kadar je
 * izgrađen iz mjera fonta, tools/art/scenes/hero-izrada.js). Natpis je živi tekst (SVG <text> s textLength) na
 * staklu svake etaže; u ulazu stoji gumb. Skener scrollom gradi zgradu od ulaza prema vrhu: iznad crte nacrt
 * (obris), ispod crte sagrađeno (staklo toplo, slova kao natpis na staklu).
 * Bez JS-a / uz smanjeno kretanje: završno stanje (sagrađeno), bez pinanja.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l    = $args['landing'];
$md   = zaec_hero_meta( 'izrada-d' );
$mm   = zaec_hero_meta( 'izrada-m' );
$h1   = (string) ( $l['h1'] ?? $l['title'] );
$cta  = $l['cta'] ?? array( 'Složite svoj projekt', 'cijene#konfigurator' );
$href = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );
$meta = array();
foreach ( array( 'd' => $md, 'm' => $mm ) as $zaec_c => $zaec_m ) {
	if ( $zaec_m ) {
		$meta[ $zaec_c ] = array(
			'w'      => $zaec_m['w'],
			'h'      => $zaec_m['h'],
			'start'  => $zaec_m['lobby']['top'],
			'end'    => $zaec_m['top'],
			'floors' => array_map( static fn( $f ) => array( $f['top'], $f['bottom'] ), $zaec_m['floors'] ),
		);
	}
}

/** Natpis jedne kompozicije: dvije kopije teksta (obris iznad skenera, tinta ispod), iste koordinate. */
$zaec_type = static function ( $c, $m ) {
	$texts = '';
	foreach ( $m['floors'] as $f ) {
		$texts .= sprintf(
			'<text class="it-w%1$s" x="%2$s" y="%3$s" font-size="%4$s" textLength="%5$s" lengthAdjust="spacingAndGlyphs">%6$s</text>',
			'serif' === $f['kind'] ? ' it-w--serif' : '',
			esc_attr( $m['textX'] ),
			esc_attr( $f['base'] ),
			esc_attr( $f['fs'] ),
			esc_attr( $m['textW'] ),
			esc_html( $f['word'] )
		);
	}
	printf(
		'<svg class="it-type it-type--%1$s" viewBox="0 0 %2$d %3$d" preserveAspectRatio="none" aria-hidden="true" focusable="false"><defs><clipPath id="it-up-%1$s"><rect data-up x="0" y="0" width="%2$d" height="0"/></clipPath><clipPath id="it-dn-%1$s"><rect data-dn x="0" y="0" width="%2$d" height="%3$d"/></clipPath></defs><g class="it-out" clip-path="url(#it-up-%1$s)">%4$s</g><g class="it-ink" clip-path="url(#it-dn-%1$s)">%4$s</g></svg>',
		esc_attr( $c ),
		(int) $m['w'],
		(int) $m['h'],
		$texts // phpcs:ignore -- izgrađeno iz esc_* gore
	);
};
$style = $md && $mm ? sprintf(
	'--tx:%s;--tw:%s;--lt:%s;--lb:%s;--txm:%s;--twm:%s;--ltm:%s;--lbm:%s',
	round( $md['textX'] / $md['w'] * 100, 3 ),
	round( $md['textW'] / $md['w'] * 100, 3 ),
	$md['lobby']['top'],
	$md['lobby']['bottom'],
	round( $mm['textX'] / $mm['w'] * 100, 3 ),
	round( $mm['textW'] / $mm['w'] * 100, 3 ),
	$mm['lobby']['top'],
	$mm['lobby']['bottom']
) : '';
?>
<section class="sh sh-izrada" data-hero="izrada" data-header-theme="night" aria-labelledby="sh-title" data-meta="<?php echo esc_attr( wp_json_encode( $meta ) ); ?>" style="<?php echo esc_attr( $style ); ?>">
	<div class="sh-stage">
		<div class="sh-frame">
			<div class="sh-scene">
				<?php zaec_hero_picture( 'izrada-plan', array( 'class' => 'sh-layer sh-plan', 'priority' => true ) ); ?>
				<div class="sh-layer sh-real" aria-hidden="true"><?php zaec_hero_picture( 'izrada-real', array( 'class' => 'sh-layer' ) ); ?></div>
				<h1 class="it-title" id="sh-title">
					<span class="sr-only"><?php echo esc_html( wp_strip_all_tags( $h1 ) ); ?></span>
					<?php
					if ( $md && $mm ) {
						$zaec_type( 'd', $md );
						$zaec_type( 'm', $mm );
					}
					?>
				</h1>
				<div class="it-door">
					<?php echo zaec_button( $cta[0], $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore ?>
				</div>
			</div>
		</div>
		<div class="sh-scan" aria-hidden="true"></div>
		<p class="sh-hint mono" aria-hidden="true"><span></span><b>Skrolajte — gradimo od ulaza prema vrhu</b></p>
	</div>
	<div class="it-run" aria-hidden="true"></div>
	<div class="wrap sh-copy it-copy">
		<?php zaec_render_breadcrumbs(); ?>
		<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?></p>
		<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
		<a class="it-phone mono" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 16 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
		<p class="it-note mono" aria-hidden="true">Etaža = riječ · visina etaže = visina slova</p>
	</div>
</section>
<?php zaec_hero_answer( $l, 'sh-answer' ); ?>
