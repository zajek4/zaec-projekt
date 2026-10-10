<?php
/**
 * FAQ blok (isti sadržaj ide u FAQPage schemu).
 *
 * @package ZAEC
 * @var array $args { items, title, kicker }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$items = $args['items'] ?? array();
if ( ! $items ) {
	return;
}
?>
<section class="section sub-faq" id="pitanja">
	<div class="wrap sub-faq-grid">
		<div class="stack" style="--stack:20px">
			<p class="kicker"><?php echo esc_html( $args['kicker'] ?? 'Pitanja' ); ?></p>
			<?php zaec_heading( $args['title'] ?? 'Česta <em>pitanja</em>' ); ?>
			<?php if ( 'kontakt' === ( $args['page'] ?? '' ) ) : ?>
				<p class="muted" data-reveal>Niste našli odgovor? Nazovite <a href="<?php echo esc_attr( zaec_phone_href() ); ?>"><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>, <?php echo esc_html( zaec_option( 'hours' ) ); ?>.</p>
			<?php else : ?>
				<p class="muted" data-reveal>Niste našli odgovor? <a href="<?php echo esc_url( zaec_inquiry_url() ); ?>">Pošaljite pitanje</a>, odgovaramo u radno vrijeme.</p>
			<?php endif; ?>
		</div>
		<div class="faq-list" data-reveal>
			<?php foreach ( $items as $i => $f ) : ?>
				<details class="faq-item"<?php echo 0 === $i ? ' open' : ''; ?>>
					<summary><?php echo esc_html( $f[0] ); ?><span class="plus" aria-hidden="true"></span></summary>
					<div class="faq-answer"><p><?php echo esc_html( $f[1] ); ?></p></div>
				</details>
			<?php endforeach; ?>
		</div>
	</div>
</section>
