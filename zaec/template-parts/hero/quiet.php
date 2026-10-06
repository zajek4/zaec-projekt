<?php
/**
 * Tihi hero (razina 3): vodiči, pomoćne stranice. Bez slike — tipografija i kotna crta nacrta.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l     = $args['landing'];
$title = $l['h1'] ?? $l['title'];
$kick  = (string) ( $l['kicker'] ?? $l['title'] );
$cta   = $l['cta'] ?? null;
?>
<section class="qh" aria-labelledby="qh-title">
	<div class="wrap qh-in">
		<?php zaec_render_breadcrumbs(); ?>
		<p class="kicker"><?php echo esc_html( $kick ); ?></p>
		<h1 class="h1 qh-title" id="qh-title"><?php echo zaec_kses_title( $title ); // phpcs:ignore ?></h1>
		<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
		<?php if ( $cta ) : ?>
			<div class="phero-cta">
				<?php echo zaec_button( $cta[0], 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] ), 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore ?>
			</div>
		<?php endif; ?>
		<p class="qh-rule mono" aria-hidden="true"><span>ZAEC · <?php echo esc_html( $kick ); ?></span><i></i><span>Osijek · 45°33′ N 18°41′ E</span></p>
	</div>
</section>
<?php zaec_hero_answer( $l ); ?>
