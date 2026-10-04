<?php
/**
 * Završna CTA traka.
 *
 * @package ZAEC
 * @var array $args { title, text, label, href }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$title = $args['title'] ?? 'Spremni za web koji <em>zove</em>?';
$text  = $args['text'] ?? 'Kratak razgovor bez obveze. Nakon njega znate smjer, opseg i — u pisanoj ponudi — fiksnu cijenu.';
$label = $args['label'] ?? 'Složite svoj projekt';
$href  = $args['href'] ?? zaec_url( 'cijene' ) . '#konfigurator';
?>
<section class="cta-band" data-header-theme="night">
	<div class="wrap cta-grid">
		<div>
			<p class="kicker">Sljedeći korak</p>
			<?php zaec_heading( $title ); ?>
		</div>
		<div class="cta-side" data-reveal>
			<p><?php echo esc_html( $text ); ?></p>
			<div class="cta-actions">
				<?php echo zaec_button( $label, $href, 'light', array( 'magnetic' => true, 'track' => 'cta_band' ) ); // phpcs:ignore ?>
				<a class="tel-link cta-tel" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><span class="dot" aria-hidden="true"></span><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
			<p class="mono cta-hours"><?php echo esc_html( zaec_option( 'hours' ) ); ?> · ili <a href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>">besplatna provjera vidljivosti</a></p>
		</div>
	</div>
</section>
