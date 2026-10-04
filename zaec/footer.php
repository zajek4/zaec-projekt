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
	<div class="wrap">
		<div class="foot-top">
			<div class="foot-brand">
				<?php echo zaec_logo(); // phpcs:ignore ?>
				<p>Web stranice koje donose upite — s jasnim opsegom, fiksnom cijenom u pisanoj ponudi i mjerenjem svakog poziva. Za obrte i tvrtke diljem Hrvatske.</p>
				<?php echo zaec_button( 'Besplatna provjera vidljivosti', zaec_url( 'provjera-vidljivosti' ), 'light', array( 'class' => 'btn--sm', 'track' => 'cta_footer_audit' ) ); // phpcs:ignore ?>
			</div>
			<div class="foot-col">
				<p class="foot-h">Usluge</p>
				<ul>
					<?php foreach ( zaec_services() as $s ) : ?>
						<li><a href="<?php echo esc_url( zaec_url( $s['key'] ) ); ?>"><?php echo esc_html( $s['title'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
			<div class="foot-col">
				<p class="foot-h">Djelatnosti</p>
				<ul>
					<?php foreach ( zaec_industries() as $i ) : ?>
						<li><a href="<?php echo esc_url( zaec_url( $i['key'] ) ); ?>"><?php echo esc_html( $i['title'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
				<p class="foot-h" style="margin-top:28px">Studio</p>
				<ul>
					<li><a href="<?php echo esc_url( (string) get_post_type_archive_link( 'projekti' ) ); ?>">Radovi</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'cijene' ) ); ?>">Cijene i procjena</a></li>
					<li><a href="<?php echo esc_url( $posts_page ? get_permalink( $posts_page ) : home_url( '/vodici/' ) ); ?>">Vodiči</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'o-nama' ) ); ?>">O nama</a></li>
					<li><a href="<?php echo esc_url( zaec_url( 'izrada-web-stranica-osijek' ) ); ?>">Izrada web stranica Osijek</a></li>
				</ul>
			</div>
			<div class="foot-col">
				<p class="foot-h">Kontakt</p>
				<ul>
					<li><a href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php echo esc_html( $o['phone_display'] ); ?></a></li>
					<?php if ( zaec_whatsapp_href() ) : ?><li><a href="<?php echo esc_url( zaec_whatsapp_href() ); ?>" rel="noopener" target="_blank" data-track="click_whatsapp">WhatsApp</a></li><?php endif; ?>
					<?php if ( $o['email'] && '1' === (string) $o['show_public_email'] ) : ?><li><a href="mailto:<?php echo esc_attr( $o['email'] ); ?>"><?php echo esc_html( $o['email'] ); ?></a></li><?php endif; ?>
					<li><a href="<?php echo esc_url( zaec_url( 'kontakt' ) . '#upit' ); ?>">Pošaljite upit</a></li>
					<li><a href="<?php echo esc_url( zaec_maps_href() ); ?>" rel="noopener" target="_blank"><?php echo esc_html( $o['address'] ); ?><br><?php echo esc_html( $o['postal_code'] . ' ' . $o['city'] ); ?></a></li>
					<li><?php echo esc_html( $o['hours'] ); ?></li>
				</ul>
				<p class="foot-h" style="margin-top:28px">Pravno</p>
				<ul>
					<li><a href="<?php echo esc_url( $privacy ); ?>">Privatnost</a></li>
					<?php if ( $o['terms_url'] ) : ?><li><a href="<?php echo esc_url( $o['terms_url'] ); ?>">Uvjeti</a></li><?php endif; ?>
					<?php if ( $o['gtm_id'] ) : ?><li><button type="button" class="link-btn" data-consent-open>Postavke kolačića</button></li><?php endif; ?>
				</ul>
			</div>
		</div>
		<div class="foot-legal">
			<p>© <?php echo esc_html( wp_date( 'Y' ) ); ?> <?php echo esc_html( $o['legal_name'] ); ?><?php echo $legal_bits ? '. ' . esc_html( implode( ' · ', $legal_bits ) ) : ''; ?>. Sjedište: <?php echo esc_html( $o['address'] . ', ' . $o['postal_code'] . ' ' . $o['city'] ); ?>.</p>
			<p><?php echo $o['gtm_id'] ? 'Analitika samo uz privolu' : 'Bez kolačića za praćenje'; ?> · izrađeno u Osijeku</p>
		</div>
	</div>
	<svg class="foot-giant" viewBox="0 0 1000 205" aria-hidden="true" focusable="false"><text x="500" y="186" text-anchor="middle" font-family="Archivo Variable, Archivo, sans-serif" font-weight="900" font-size="250" letter-spacing="-8" style="font-variation-settings:'wdth' 125">ZAEC</text></svg>
</footer>

<nav class="call-bar" data-call-bar aria-label="Brzi kontakt">
	<a class="cb-call" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18, '', 'bold' ); ?> Nazovite</a>
	<a class="cb-form" href="<?php echo esc_url( zaec_url( 'kontakt' ) . '#upit' ); ?>" data-track="cta_callbar"><?php zaec_the_icon( 'letter', 18, '', 'bold' ); ?> Pošaljite upit</a>
</nav>
<?php wp_footer(); ?>
</body>
</html>
