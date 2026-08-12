<?php
/**
 * Global footer — jasan sitemap + minimalni pravni podaci obrta (RH).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options       = zaec_get_options();
$show_email    = ! empty( $options['show_public_email'] ) && '0' !== $options['show_public_email'] && ! empty( $options['email'] );
$legal_bits    = array_filter(
	array(
		! empty( $options['mb'] ) ? sprintf( /* translators: %s: company registration number */ __( 'MB %s', 'zaec' ), $options['mb'] ) : '',
		! empty( $options['oib'] ) ? sprintf( /* translators: %s: OIB */ __( 'OIB %s', 'zaec' ), $options['oib'] ) : '',
		! empty( $options['nkd'] ) ? sprintf( /* translators: %s: NKD code */ __( 'NKD %s', 'zaec' ), $options['nkd'] ) : '',
	)
);
$address_line  = trim( implode( ', ', array_filter( array( $options['address'], trim( $options['postal_code'] . ' ' . $options['city'] ) ) ) ) );
?>
<footer data-theme="dark" class="site-footer">
	<div class="wrap foot-grid">
		<div class="foot-col foot-brand">
			<?php zaec_brand_mark( 'foot-mark' ); ?>
			<p class="foot-tag">ZAEC · Web studio</p>
			<p class="foot-line"><?php esc_html_e( 'Web koji objasni vaš posao, izgradi povjerenje i olakša prvi kontakt — za obrte i tvrtke diljem Hrvatske.', 'zaec' ); ?></p>
			<p class="foot-loc"><?php echo esc_html( $options['location'] ); ?></p>
		</div>

		<div class="foot-col">
			<p class="foot-h"><?php esc_html_e( 'Što radimo', 'zaec' ); ?></p>
			<a href="<?php echo esc_url( zaec_home_anchor( 'za-koga' ) ); ?>"><?php esc_html_e( 'Za koga radimo', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'cijene' ) ); ?>"><?php esc_html_e( 'Cijene', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'poseban-opseg' ) ); ?>"><?php esc_html_e( 'Webshop i integracije', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'proces' ) ); ?>"><?php esc_html_e( 'Kako radimo', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'odrzavanje' ) ); ?>"><?php esc_html_e( 'Održavanje', 'zaec' ); ?></a>
		</div>

		<div class="foot-col">
			<p class="foot-h"><?php esc_html_e( 'Studio', 'zaec' ); ?></p>
			<?php $radovi_url = get_post_type_archive_link( 'projekti' ); if ( ! $radovi_url ) { $radovi_url = zaec_home_anchor( 'radovi' ); } ?>
			<a href="<?php echo esc_url( $radovi_url ); ?>"><?php esc_html_e( 'Radovi', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'faq' ) ); ?>"><?php esc_html_e( 'Pitanja', 'zaec' ); ?></a>
			<a href="<?php echo esc_url( zaec_home_anchor( 'upit' ) ); ?>"><?php esc_html_e( 'Upit', 'zaec' ); ?></a>
		</div>

		<div class="foot-col">
			<p class="foot-h"><?php esc_html_e( 'Kontakt', 'zaec' ); ?></p>
			<a href="tel:<?php echo esc_attr( zaec_phone_href( $options['phone_raw'] ) ); ?>"><?php echo esc_html( $options['phone_display'] ); ?></a>
			<?php if ( $show_email ) : ?>
				<a href="mailto:<?php echo esc_attr( $options['email'] ); ?>"><?php echo esc_html( $options['email'] ); ?></a>
			<?php else : ?>
				<span class="foot-muted"><?php esc_html_e( 'Upit šaljete formom — email nije javni.', 'zaec' ); ?></span>
			<?php endif; ?>
			<?php if ( $address_line ) : ?>
				<span class="foot-coords"><?php echo esc_html( $address_line ); ?></span>
			<?php endif; ?>
			<span class="foot-coords"><?php echo esc_html( $options['hours'] ); ?></span>
		</div>
	</div>

	<div class="wrap foot-legal-bar">
		<p class="foot-legal-name"><?php echo esc_html( $options['legal_name'] ); ?></p>
		<?php if ( $legal_bits ) : ?>
			<p class="foot-legal-meta"><?php echo esc_html( implode( ' · ', $legal_bits ) ); ?></p>
		<?php endif; ?>
		<?php if ( ! empty( $options['owner_name'] ) ) : ?>
			<p class="foot-legal-meta"><?php echo esc_html( sprintf( /* translators: %s: owner name */ __( 'Nositelj: %s', 'zaec' ), $options['owner_name'] ) ); ?></p>
		<?php endif; ?>
	</div>

	<div class="wrap foot-bottom">
		<span>© <?php echo esc_html( wp_date( 'Y' ) ); ?> <?php echo esc_html( $options['legal_name'] ); ?></span>
		<span class="foot-legal">
			<?php if ( ! empty( $options['terms_url'] ) ) : ?><a href="<?php echo esc_url( $options['terms_url'] ); ?>"><?php esc_html_e( 'Uvjeti', 'zaec' ); ?></a><?php endif; ?>
			<?php if ( ! empty( $options['privacy_url'] ) ) : ?><a href="<?php echo esc_url( $options['privacy_url'] ); ?>"><?php esc_html_e( 'Privatnost', 'zaec' ); ?></a><?php endif; ?>
		</span>
	</div>
	<div class="wrap foot-giant-wrap">
		<svg class="foot-giant" viewBox="0 0 1200 190" aria-hidden="true"><text x="600" y="160" text-anchor="middle">ZAEC</text></svg>
	</div>
</footer>
<div id="toast" role="status" aria-live="polite"></div>
<?php if ( is_front_page() ) : ?>
<script>
/* The module owns the WebGL fallback. Do not turn a slow first frame into a
 * false negative: on Safari/iOS a cold module can take longer than six seconds. */
window.addEventListener('error',function(e){if(e&&e.target&&e.target.tagName==='SCRIPT'&&e.target.type==='module'){document.documentElement.classList.add('no-3d');}},true);
</script>
<?php endif; ?>
<?php wp_footer(); ?>
</body>
</html>
