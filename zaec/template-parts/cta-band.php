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
$text  = $args['text'] ?? 'Kratko opišite posao. Javljamo se u radno vrijeme sa smjerom, a nakon razgovora šaljemo pisanu ponudu s opsegom, rokom i fiksnom cijenom.';
$label = $args['label'] ?? 'Pošaljite upit';
$href  = $args['href'] ?? zaec_url( 'kontakt' ) . '#upit';
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
				<?php echo zaec_button( $label, $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_band' ) ); // phpcs:ignore ?>
			</div>
			<p class="mono cta-hours">Ili prvo <a href="<?php echo esc_url( zaec_url( 'cijene' ) . '#konfigurator' ); ?>">procjena projekta</a> · <a href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>">besplatna provjera vidljivosti</a></p>
		</div>
	</div>
</section>
