<?php
/**
 * Footer.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$o          = zaec_get_options();
$legal_bits = array_filter( array( $o['mb'] ? 'MB ' . $o['mb'] : '', $o['oib'] ? 'OIB ' . $o['oib'] : '', $o['nkd'] ? 'NKD ' . $o['nkd'] : '' ) );
$privacy    = $o['privacy_url'] ? $o['privacy_url'] : zaec_url( 'privatnost' );
$posts_page = (int) get_option( 'page_for_posts' );
?>
</main>

<footer class="site-footer" data-header-theme="night">
	<div class="foot-horizon" aria-hidden="true"></div>
	<div class="wrap">
		<div class="foot-top">
			<div class="foot-brand">
				<a class="foot-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="ZAEC — naslovnica"><?php echo zaec_logo(); // phpcs:ignore ?></a>
				<p>Web studio iz Osijeka. Projektiramo, gradimo i mjerimo web stranice za tvrtke i obrte diljem Hrvatske.</p>
				<a class="foot-audit" href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>" data-track="cta_footer_audit">Besplatna provjera vidljivosti <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
			</div>
			<nav class="foot-col foot-col--svc" aria-label="Usluge">
				<p class="foot-h">Usluge</p>
				<ul>
					<?php foreach ( zaec_services() as $s ) : ?>
						<li><a href="<?php echo esc_url( zaec_url( $s['key'] ) ); ?>"><?php echo esc_html( $s['title'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</nav>
			<nav class="foot-col" aria-label="Djelatnosti">
				<p class="foot-h">Djelatnosti</p>
				<ul>
					<?php foreach ( zaec_industries() as $i ) : ?>
						<li><a href="<?php echo esc_url( zaec_url( $i['key'] ) ); ?>"><?php echo esc_html( $i['title'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</nav>
			<nav class="foot-col" aria-label="Studio">
				<p class="foot-h">Studio</p>
				<ul>
					<li><a href="<?php echo esc_url( (string) get_post_type_archive_link( 'projekti' ) ); ?>">Radovi</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'cijene' ) ); ?>">Cijene i procjena</a></li>
					<li><a href="<?php echo esc_url( $posts_page ? get_permalink( $posts_page ) : home_url( '/vodici/' ) ); ?>">Vodiči</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'o-nama' ) ); ?>">O nama</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'izrada-web-stranica-osijek' ) ); ?>">Web stranice u Osijeku</a></li>
				</ul>
			</nav>
			<div class="foot-col foot-col--contact">
				<p class="foot-h">Kontakt</p>
				<address>
					<a class="foot-contact-tel" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php echo esc_html( $o['phone_display'] ); ?></a>
					<?php if ( $o['email'] && '1' === (string) $o['show_public_email'] ) : ?><a href="mailto:<?php echo esc_attr( $o['email'] ); ?>"><?php echo esc_html( $o['email'] ); ?></a><?php endif; ?>
					<?php if ( zaec_whatsapp_href() ) : ?><a href="<?php echo esc_url( zaec_whatsapp_href() ); ?>" rel="noopener" target="_blank" data-track="click_whatsapp">WhatsApp<span class="sr-only"> (nova kartica)</span></a><?php endif; ?>
					<a href="<?php echo esc_url( zaec_maps_href() ); ?>" rel="noopener" target="_blank"><?php echo esc_html( $o['address'] ); ?><br><?php echo esc_html( $o['postal_code'] . ' ' . $o['city'] ); ?><span class="sr-only"> (karta, nova kartica)</span></a>
					<span class="foot-hours"><?php echo esc_html( $o['hours'] ); ?></span>
				</address>
			</div>
		</div>
		<div class="foot-legal">
			<p>© <?php echo esc_html( wp_date( 'Y' ) ); ?> <?php echo esc_html( $o['legal_name'] ); ?><?php echo $legal_bits ? '. ' . esc_html( implode( ' · ', $legal_bits ) ) : ''; ?>. Sjedište: <?php echo esc_html( $o['address'] . ', ' . $o['postal_code'] . ' ' . $o['city'] ); ?>.</p>
			<ul class="foot-legal-links" role="list">
				<li><a href="<?php echo esc_url( $privacy ); ?>">Privatnost</a></li>
				<?php if ( $o['terms_url'] ) : ?><li><a href="<?php echo esc_url( $o['terms_url'] ); ?>">Uvjeti</a></li><?php endif; ?>
				<?php if ( $o['gtm_id'] ) : ?><li><button type="button" class="link-btn" data-consent-open>Postavke kolačića</button></li><?php else : ?><li>Bez kolačića za praćenje</li><?php endif; ?>
				<?php if ( is_front_page() ) : ?><li>Karta Osijeka: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> suradnici · noćna svjetla: NASA/NOAA</li><?php endif; ?>
			</ul>
		</div>
	</div>
	<svg class="foot-giant" viewBox="0 0 1000 205" aria-hidden="true" focusable="false"><defs><linearGradient id="foot-giant-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#96a8ff" stop-opacity="0.11"/><stop offset="1" stop-color="#96a8ff" stop-opacity="0"/></linearGradient></defs><text x="500" y="186" text-anchor="middle" font-family="Archivo Variable, Archivo, sans-serif" font-weight="900" font-size="250" letter-spacing="-8" fill="url(#foot-giant-fade)" style="font-variation-settings:'wdth' 125">ZAEC</text></svg>
</footer>

<nav class="call-bar" data-call-bar aria-label="Upit">
	<a class="cb-form" href="<?php echo esc_url( zaec_inquiry_url() ); ?>" data-track="cta_callbar">
		<span class="cb-copy"><i class="cb-lamp" aria-hidden="true"></i><small><span class="cb-long">Pisana procjena, </span>bez obveze</small></span>
		<span class="cb-go">Pošaljite upit <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?></span>
	</a>
</nav>
<?php wp_footer(); ?>
</body>
</html>
