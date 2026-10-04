<?php
/**
 * Dokazi: izjave klijenata + potvrđene metrike/screenshotovi + (opcionalno) primjer izvještaja.
 *
 * @package ZAEC
 * @var array $args { report: bool }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$quotes = zaec_get_testimonials( 6 );
?>
<div class="proof">
	<?php foreach ( $quotes as $q ) : ?>
		<figure class="quote" data-reveal>
			<?php zaec_the_icon( 'chat-round-dots', 26, 'quote-ico' ); ?>
			<blockquote><p>„<?php echo esc_html( $q['quote'] ); ?>”</p></blockquote>
			<figcaption><b><?php echo esc_html( $q['quote_author'] ); ?></b><span><?php echo esc_html( $q['quote_role'] ); ?></span><a href="<?php echo esc_url( $q['permalink'] ); ?>">Projekt: <?php echo esc_html( $q['title'] ); ?></a></figcaption>
			<?php if ( $q['metric'] ) : ?>
				<div class="quote-metric">
					<span class="mono"><?php echo esc_html( $q['metric'][0] ); ?></span>
					<p><s><?php echo esc_html( $q['metric'][1] ); ?></s> → <b><?php echo esc_html( $q['metric'][2] ); ?></b></p>
				</div>
			<?php endif; ?>
			<?php if ( $q['proof_image'] ) : ?>
				<a class="quote-shot" href="<?php echo esc_url( $q['proof_image'] ); ?>" target="_blank" rel="noopener">
					<img src="<?php echo esc_url( $q['proof_image'] ); ?>" alt="<?php echo esc_attr( 'Snimka rezultata: ' . $q['title'] ); ?>" loading="lazy">
					<span class="mono"><?php echo esc_html( $q['proof_note'] ? $q['proof_note'] : 'Potvrđeni rezultat' ); ?></span>
				</a>
			<?php endif; ?>
		</figure>
	<?php endforeach; ?>
	<?php if ( ! empty( $args['report'] ) ) : ?>
		<?php get_template_part( 'template-parts/report' ); ?>
	<?php endif; ?>
</div>
