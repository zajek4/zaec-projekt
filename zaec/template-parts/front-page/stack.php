<?php
/**
 * Stack / capability traka — Google + Woo + Corvus (istinite integracije).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$items = zaec_front_repeater( 'stack_items' );
if ( ! $items ) {
	return;
}
?>
<section id="stack" class="sec sec-paper sec-stack" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<span class="sec-num" data-plx="70" aria-hidden="true">G</span>
	<div class="wrap">
		<div class="sec-head offset">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'stack_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'stack_title' ) ); ?></h2>
			<p class="lead"><?php echo esc_html( zaec_front_field( 'stack_lead' ) ); ?></p>
		</div>

		<div class="stack-grid" role="list">
			<?php foreach ( $items as $item ) : ?>
				<article class="stack-card" role="listitem">
					<p class="stack-code"><?php echo esc_html( isset( $item['code'] ) ? $item['code'] : '' ); ?></p>
					<h3><?php echo esc_html( isset( $item['title'] ) ? $item['title'] : '' ); ?></h3>
					<p><?php echo esc_html( isset( $item['text'] ) ? $item['text'] : '' ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>

		<div class="stack-marks" aria-label="<?php esc_attr_e( 'Tehnologije koje koristimo u projektima', 'zaec' ); ?>">
			<span class="stack-mark"><i aria-hidden="true">G</i> Google Business</span>
			<span class="stack-mark"><i aria-hidden="true">A</i> Analytics 4</span>
			<span class="stack-mark"><i aria-hidden="true">S</i> Search Console</span>
			<span class="stack-mark"><i aria-hidden="true">W</i> WooCommerce</span>
			<span class="stack-mark"><i aria-hidden="true">C</i> Corvus Pay</span>
		</div>
		<p class="stack-note mono-note"><?php esc_html_e( 'Oznake su alati koje ugrađujemo — ne partnerski certifikati ni jamstvo pozicija na Googleu.', 'zaec' ); ?></p>
	</div>
</section>
