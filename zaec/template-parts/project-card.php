<?php
/**
 * Kartica projekta (browser okvir + podaci).
 *
 * @package ZAEC
 * @var array $args { p }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$p    = $args['p'];
$host = $p['website_url'] ? preg_replace( '#^https?://(www\.)?#', '', untrailingslashit( $p['website_url'] ) ) : '';
?>
<article class="pcard" data-reveal>
	<a class="pcard-shot" href="<?php echo esc_url( $p['permalink'] ); ?>" aria-label="<?php echo esc_attr( 'Projekt: ' . $p['title'] ); ?>">
		<span class="pcard-bar" aria-hidden="true"><i></i><i></i><i></i><em><?php echo esc_html( $host ? $host : $p['title'] ); ?></em></span>
		<?php if ( $p['image'] ) : ?>
			<img src="<?php echo esc_url( $p['image'] ); ?>" alt="<?php echo esc_attr( 'Snimka zaslona: ' . $p['title'] ); ?>" loading="lazy" decoding="async" width="1200" height="760">
		<?php else : ?>
			<span class="pcard-ph" aria-hidden="true"><?php echo zaec_logo( 'glyph' ); // phpcs:ignore ?></span>
		<?php endif; ?>
	</a>
	<div class="pcard-body">
		<p class="pcard-meta mono"><?php echo esc_html( implode( ' · ', array_filter( array( $p['code'], $p['location'], $p['year'] ) ) ) ); ?></p>
		<h3><a href="<?php echo esc_url( $p['permalink'] ); ?>"><?php echo esc_html( $p['title'] ); ?></a></h3>
		<?php if ( $p['service'] ) : ?><p class="pcard-service"><?php echo esc_html( $p['service'] ); ?></p><?php endif; ?>
		<?php if ( $p['result'] ) : ?><p class="pcard-result"><?php zaec_the_icon( 'graph-up', 16 ); ?> <?php echo esc_html( $p['result'] ); ?></p><?php endif; ?>
		<div class="pcard-links">
			<a class="link-arrow" href="<?php echo esc_url( $p['permalink'] ); ?>">Studija <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
			<?php if ( $p['website_url'] ) : ?><a class="link-arrow pcard-live" href="<?php echo esc_url( $p['website_url'] ); ?>" target="_blank" rel="noopener">Web <?php zaec_the_icon( 'arrow-right-up', 16 ); ?></a><?php endif; ?>
		</div>
	</div>
</article>
