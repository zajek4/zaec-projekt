<?php
/**
 * Potpisni hero: O nama — "Mali studio. Velika odgovornost."
 * Omjer kao ideja: jedan upaljeni prozor malog studija i toranj konkatedrale od 90 m. "Velika odgovornost."
 * stoji iza tornja (prednji sloj je toranj izrezan iz iste slike), "Mali studio." sitno uz prozor.
 * Špica pri učitavanju; pri scrollu se slojevi razdvajaju po dubini, a signal s tornja nastavlja kao crta
 * niz stranicu u sekciju "Zašto ZAEC".
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l  = $args['landing'];
$md = zaec_hero_meta( 'onama-d' );
$mm = zaec_hero_meta( 'onama-m' );
$h1 = (string) ( $l['h1'] ?? $l['title'] );
// "Mali studio. <em>Velika</em> odgovornost." → sitni dio, istaknuta riječ, velika riječ
$parts = preg_match( '~^\s*(.+?\.)\s*(<em>.+?</em>)\s*(.+)$~u', $h1, $m ) ? array( $m[1], $m[2], $m[3] ) : null;
$cta   = $l['cta'] ?? array( 'Upoznajmo se', 'kontakt#upit' );
$href  = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );
$vars  = $md && $mm ? sprintf(
	'--wx:%s;--wy:%s;--sx:%s;--sy:%s;--wxm:%s;--wym:%s;--sxm:%s;--sym:%s',
	$md['window']['x'],
	$md['window']['y'],
	$md['spire']['x'],
	$md['spire']['y'],
	$mm['window']['x'],
	$mm['window']['y'],
	$mm['spire']['x'],
	$mm['spire']['y']
) : '';
?>
<section class="sh sh-onama" data-hero="onama" data-header-theme="night" aria-labelledby="sh-title" style="<?php echo esc_attr( $vars ); ?>">
	<div class="sh-stage">
		<div class="sh-frame">
			<div class="sh-scene">
				<?php zaec_hero_picture( 'onama-bg', array( 'class' => 'sh-layer sh-bg', 'priority' => true ) ); ?>
				<span class="on-window" aria-hidden="true"></span>
				<?php if ( $parts ) : ?>
					<h1 class="on-title" id="sh-title">
						<span class="on-small"><?php echo esc_html( trim( wp_strip_all_tags( $parts[0] ) ) ); ?></span>
						<span class="on-a"><?php echo zaec_kses_title( $parts[1] ); // phpcs:ignore ?></span>
						<span class="on-b"><?php echo esc_html( trim( wp_strip_all_tags( $parts[2] ) ) ); ?></span>
					</h1>
				<?php endif; ?>
				<?php zaec_hero_picture( 'onama-tower', array( 'class' => 'sh-layer sh-fg' ) ); ?>
				<span class="on-signal" aria-hidden="true"></span>
			</div>
		</div>
		<div class="wrap sh-copy on-copy">
			<?php zaec_render_breadcrumbs(); ?>
			<?php if ( ! $parts ) : ?>
				<h1 class="h1 sh-title" id="sh-title"><?php echo zaec_kses_title( $h1 ); // phpcs:ignore ?></h1>
			<?php endif; ?>
			<p class="on-caption mono" aria-hidden="true">Konkatedrala sv. Petra i Pavla · 90 m<br>Studio · jedan prozor</p>
		</div>
	</div>
	<div class="wrap on-aside-wrap">
		<div class="on-aside">
			<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?> · Osijek</p>
			<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
			<div class="phero-cta">
				<?php echo zaec_button( $cta[0], $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore ?>
				<a class="btn btn--ghost" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
		</div>
	</div>
</section>
<?php zaec_hero_answer( $l, 'sh-answer on-answer' ); ?>
