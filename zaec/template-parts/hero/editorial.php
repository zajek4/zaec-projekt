<?php
/**
 * Hero podstranice (landing). Koristi podatke iz registra.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l     = $args['landing'];
$dark  = ! empty( $l['dark'] );
$cta   = $l['cta'] ?? array( 'Složite svoj projekt', 'cijene#konfigurator' );
$href  = 0 === strpos( $cta[1], '#' ) ? $cta[1] : zaec_url( $cta[1] );
$title = $l['h1'] ?? $l['title'];
?>
<section class="phero<?php echo $dark ? ' phero--dark' : ''; ?>"<?php echo $dark ? ' data-header-theme="night"' : ''; ?>>
	<div class="wrap phero-grid">
		<div class="phero-copy">
			<?php zaec_render_breadcrumbs(); ?>
			<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?></p>
			<?php zaec_heading( $title, 'h1', 'h1 phero-title' ); ?>
			<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead" data-reveal><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
			<div class="phero-cta" data-reveal>
				<?php echo zaec_button( $cta[0], $href, 'signal', array( 'magnetic' => true, 'track' => 'cta_subpage' ) ); // phpcs:ignore ?>
				<a class="btn btn--ghost" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
			<ul class="phero-trust mono" role="list" data-reveal>
				<li><?php zaec_the_icon( 'document', 16 ); ?> Fiksna cijena u ponudi</li>
				<li><?php zaec_the_icon( 'key', 16 ); ?> Sve na vaše ime</li>
				<li><?php zaec_the_icon( 'chat-round-dots', 16 ); ?> Prvi razgovor besplatno</li>
			</ul>
		</div>
		<?php if ( ! empty( $l['image'] ) ) : ?>
			<figure class="phero-art<?php echo ( ! empty( $l['image_card'] ) || $dark ) ? ' is-card' : ''; ?>" data-parallax>
				<?php $zaec_srcset = zaec_img_srcset( $l['image'] ); ?>
				<img src="<?php echo esc_url( zaec_img( $l['image'] ) ); ?>"<?php if ( $zaec_srcset ) : ?> srcset="<?php echo esc_attr( $zaec_srcset ); ?>" sizes="(max-width: 900px) min(560px, 92vw), min(46vw, 680px)"<?php endif; ?> alt="<?php echo esc_attr( $l['image_alt'] ?? '' ); ?>" width="1400" height="1050" fetchpriority="high" decoding="async">
			</figure>
		<?php endif; ?>
	</div>
	<?php if ( ! empty( $l['answer'] ) ) : ?>
		<div class="wrap">
			<div class="answer" data-reveal>
				<p class="mono answer-k"><?php zaec_the_icon( 'lightbulb', 16 ); ?> Kratki odgovor</p>
				<p><?php echo esc_html( $l['answer'] ); ?></p>
			</div>
		</div>
	<?php endif; ?>
</section>
