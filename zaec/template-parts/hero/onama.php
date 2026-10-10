<?php
/**
 * Potpisni hero: O nama — "Mali studio. Velika odgovornost." Tipografija kao mjera.
 * Naslov je kota iz arhitektonskog nacrta: "Velika odgovornost." stoji okomito i dugačak je točno kao toranj
 * konkatedrale od tla do vrha šiljka (pomoćne crte s tornja, kotna crta, 90 m). "Mali studio." je visok kao jedini
 * upaljeni prozor na istom trgu, s vlastitom malom kotom. Omjer veličina slova je omjer odgovornosti i studija.
 * Mjere dolaze iz kadra (tools/art/scenes/hero-onama.js); tekst je živ (SVG <text>), H1 je cijela rečenica.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l     = $args['landing'];
$md    = zaec_hero_meta( 'onama-d' );
$mm    = zaec_hero_meta( 'onama-m' );
$h1    = (string) ( $l['h1'] ?? $l['title'] );
$parts = preg_match( '~^\s*(.+?\.)\s*<em>(.+?)</em>\s*(.+)$~u', $h1, $zaec_m ) ? array( trim( $zaec_m[1] ), trim( $zaec_m[2] ), trim( $zaec_m[3] ) ) : null;
$cta   = $l['cta'] ?? array( 'Upoznajmo se', 'kontakt#upit' );
$href  = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );

/** Kota jedne kompozicije (pikseli kadra = viewBox). */
$zaec_dim = static function ( $c, $m ) use ( $parts ) {
	$top  = $m['spire']['y'];
	$base = $m['base']['y'];
	$len  = $base - $top;
	$xd   = $m['bodyLeft'] - ( 'd' === $c ? 40 : 30 ); // kotna crta lijevo od crkve
	$xt   = $xd - ( 'd' === $c ? 18 : 14 );            // osnovna linija okomitog naslova
	$fs   = round( $len / 9.57, 1 );                    // izmjereno: "Velika odgovornost." ≈ 9,57 em
	$w    = $m['window'];
	$fsm  = round( $w['h'] / 0.72, 1 );                 // visina verzala = visina prozora
	$xm   = $w['right'] + $w['h'] * 1.6;
	$tick = 'd' === $c ? 9 : 12;
	ob_start();
	?>
	<svg class="on-type on-type--<?php echo esc_attr( $c ); ?>" viewBox="0 0 <?php echo (int) $m['w']; ?> <?php echo (int) $m['h']; ?>" preserveAspectRatio="none" aria-hidden="true" focusable="false" data-len="<?php echo esc_attr( $len ); ?>" data-base="<?php echo esc_attr( $base ); ?>">
		<defs><clipPath id="on-clip-<?php echo esc_attr( $c ); ?>"><rect data-reveal-rect x="0" y="<?php echo esc_attr( $top - 40 ); ?>" width="<?php echo (int) $m['w']; ?>" height="<?php echo esc_attr( $len + 80 ); ?>"/></clipPath></defs>
		<g class="on-ext">
			<line x1="<?php echo esc_attr( $m['spire']['x'] - 6 ); ?>" y1="<?php echo esc_attr( $top ); ?>" x2="<?php echo esc_attr( $xd - $tick ); ?>" y2="<?php echo esc_attr( $top ); ?>"/>
			<line x1="<?php echo esc_attr( $m['bodyLeft'] - 6 ); ?>" y1="<?php echo esc_attr( $base ); ?>" x2="<?php echo esc_attr( $xd - $tick ); ?>" y2="<?php echo esc_attr( $base ); ?>"/>
		</g>
		<line class="on-dim" pathLength="1" x1="<?php echo esc_attr( $xd ); ?>" y1="<?php echo esc_attr( $base ); ?>" x2="<?php echo esc_attr( $xd ); ?>" y2="<?php echo esc_attr( $top ); ?>"/>
		<g class="on-ticks">
			<line x1="<?php echo esc_attr( $xd - $tick ); ?>" y1="<?php echo esc_attr( $base + $tick ); ?>" x2="<?php echo esc_attr( $xd + $tick ); ?>" y2="<?php echo esc_attr( $base - $tick ); ?>"/>
			<line x1="<?php echo esc_attr( $xd - $tick ); ?>" y1="<?php echo esc_attr( $top + $tick ); ?>" x2="<?php echo esc_attr( $xd + $tick ); ?>" y2="<?php echo esc_attr( $top - $tick ); ?>"/>
		</g>
		<text class="on-dim-label" transform="translate(<?php echo esc_attr( $xd + ( 'd' === $c ? 30 : 34 ) ); ?> <?php echo esc_attr( $top + $len * 0.5 ); ?>) rotate(-90)" text-anchor="middle" font-size="<?php echo 'd' === $c ? 19 : 24; ?>">90 m</text>
		<?php if ( $parts ) : ?>
			<g clip-path="url(#on-clip-<?php echo esc_attr( $c ); ?>)">
				<text class="on-v" transform="translate(<?php echo esc_attr( $xt ); ?> <?php echo esc_attr( $base ); ?>) rotate(-90)" font-size="<?php echo esc_attr( $fs ); ?>" textLength="<?php echo esc_attr( $len ); ?>" lengthAdjust="spacing"><tspan class="on-v-em"><?php echo esc_html( wp_strip_all_tags( $parts[1] ) ); ?></tspan><tspan class="on-v-b"> <?php echo esc_html( wp_strip_all_tags( $parts[2] ) ); ?></tspan></text>
			</g>
			<g class="on-small">
				<line class="on-small-dim" x1="<?php echo esc_attr( $w['right'] + $w['h'] * 0.7 ); ?>" y1="<?php echo esc_attr( $w['y'] - $w['h'] / 2 ); ?>" x2="<?php echo esc_attr( $w['right'] + $w['h'] * 0.7 ); ?>" y2="<?php echo esc_attr( $w['y'] + $w['h'] / 2 ); ?>"/>
				<?php if ( 'd' === $c ) : ?>
					<text class="on-m" x="<?php echo esc_attr( $xm ); ?>" y="<?php echo esc_attr( $w['y'] + $w['h'] / 2 ); ?>" font-size="<?php echo esc_attr( $fsm ); ?>"><?php echo esc_html( wp_strip_all_tags( $parts[0] ) ); ?></text>
				<?php else : // uski kadar: dva retka, da ne dira okomiti naslov ?>
					<?php $zaec_w = preg_split( '~\s+~u', wp_strip_all_tags( $parts[0] ), 2 ); ?>
					<text class="on-m" x="<?php echo esc_attr( $xm ); ?>" y="<?php echo esc_attr( $w['y'] + $w['h'] / 2 ); ?>" font-size="<?php echo esc_attr( $fsm ); ?>"><tspan x="<?php echo esc_attr( $xm ); ?>" dy="<?php echo esc_attr( -$fsm * 0.98 ); ?>"><?php echo esc_html( $zaec_w[0] ); ?></tspan><tspan x="<?php echo esc_attr( $xm ); ?>" dy="<?php echo esc_attr( $fsm * 0.98 ); ?>"><?php echo esc_html( $zaec_w[1] ?? '' ); ?></tspan></text>
				<?php endif; ?>
			</g>
		<?php endif; ?>
	</svg>
	<?php
	echo ob_get_clean(); // phpcs:ignore -- vrijednosti su escapirane gore
};
$vars = $md && $mm ? sprintf( '--wx:%s;--wy:%s;--wxm:%s;--wym:%s', round( $md['window']['x'] / $md['w'] * 100, 3 ), round( $md['window']['y'] / $md['h'] * 100, 3 ), round( $mm['window']['x'] / $mm['w'] * 100, 3 ), round( $mm['window']['y'] / $mm['h'] * 100, 3 ) ) : '';
?>
<section class="sh sh-onama" data-hero="onama" data-header-theme="night" aria-labelledby="sh-title" style="<?php echo esc_attr( $vars ); ?>">
	<div class="sh-stage">
		<div class="sh-frame">
			<div class="sh-scene">
				<?php zaec_hero_picture( 'onama-bg', array( 'class' => 'sh-layer sh-bg', 'priority' => true ) ); ?>
				<span class="on-window" aria-hidden="true"></span>
				<h1 class="on-title" id="sh-title">
					<span class="sr-only"><?php echo esc_html( wp_strip_all_tags( $h1 ) ); ?></span>
					<?php
					if ( $md && $mm ) {
						$zaec_dim( 'd', $md );
						$zaec_dim( 'm', $mm );
					}
					?>
				</h1>
			</div>
		</div>
		<div class="wrap on-copy">
			<?php zaec_render_breadcrumbs(); ?>
			<div class="on-aside">
				<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?> · Osijek</p>
				<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
				<?php zaec_hero_ctas( $cta, $href ); ?>
			</div>
			<p class="on-caption mono" aria-hidden="true">Konkatedrala sv. Petra i Pavla, Osijek</p>
		</div>
	</div>
</section>
