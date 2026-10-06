<?php
/**
 * Header.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$zaec_landing     = is_page() ? zaec_get_landing() : null;
$zaec_dark_header = $zaec_landing && ! empty( $zaec_landing['dark'] );
// potpisni heroji su noćni kadrovi: zaglavlje kreće tamno već u HTML-u (prvi prikaz i bez JS-a); dalje ga vodi site.js
$zaec_night_top = $zaec_dark_header || ( $zaec_landing && in_array( zaec_hero_kind( $zaec_landing ), ZAEC_SIGNATURE_HEROES, true ) );
?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
	<meta name="format-detection" content="telephone=no">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php if ( zaec_option( 'gtm_id' ) ) : ?>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr( zaec_option( 'gtm_id' ) ); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<?php endif; ?>
<a class="skip-link" href="#sadrzaj">Preskoči na sadržaj</a>

<header class="site-header<?php echo $zaec_night_top ? ' is-night' : ''; ?>" data-header data-theme-default="<?php echo $zaec_dark_header ? 'night' : 'light'; ?>">
	<div class="wrap header-inner">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="ZAEC — naslovnica">
			<?php echo zaec_logo(); // phpcs:ignore ?>
			<span class="brand-word"><b>ZAEC</b><span>web studio</span></span>
		</a>

		<nav class="main-nav" aria-label="Glavna navigacija">
			<ul>
				<?php foreach ( zaec_nav() as $i => $item ) : ?>
					<?php if ( ! empty( $item['children'] ) ) : ?>
						<li class="has-sub" data-sub>
							<button class="nav-trigger" type="button" aria-expanded="false" aria-controls="subnav-<?php echo (int) $i; ?>">
								<?php echo esc_html( $item['label'] ); ?> <?php zaec_the_icon( 'alt-arrow-down', 14 ); ?>
							</button>
							<div class="subnav subnav--wide" id="subnav-<?php echo (int) $i; ?>">
								<ul>
									<?php foreach ( $item['children'] as $c ) : ?>
										<li><a href="<?php echo esc_url( $c['url'] ); ?>"<?php echo zaec_is_current_url( $c['url'] ) ? ' aria-current="page"' : ''; ?>><b><?php echo esc_html( $c['label'] ); ?></b><?php if ( ! empty( $c['note'] ) ) : ?><small><?php echo esc_html( $c['note'] ); ?></small><?php endif; ?><?php zaec_the_icon( 'arrow-right', 18 ); ?></a></li>
									<?php endforeach; ?>
								</ul>
								<a class="subnav-all" href="<?php echo esc_url( $item['url'] ); ?>">Sve usluge <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
							</div>
						</li>
					<?php else : ?>
						<li><a href="<?php echo esc_url( $item['url'] ); ?>"<?php echo zaec_is_current_url( $item['url'] ) ? ' aria-current="page"' : ''; ?>><?php echo esc_html( $item['label'] ); ?></a></li>
					<?php endif; ?>
				<?php endforeach; ?>
			</ul>
		</nav>

		<div class="header-cta">
			<a class="tel-link" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><span class="dot" aria-hidden="true"></span><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			<?php echo zaec_button( 'Procjena projekta', zaec_url( 'cijene' ) . '#konfigurator', '', array( 'class' => 'btn--sm btn--header', 'track' => 'cta_header' ) ); // phpcs:ignore ?>
		</div>

		<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobilni-izbornik" data-menu-toggle>
			<span></span><span></span><b class="sr-only">Izbornik</b>
		</button>
	</div>
</header>

<div class="mobile-menu" id="mobilni-izbornik" data-mobile-menu>
	<nav aria-label="Mobilna navigacija">
		<ul class="mm-main">
			<?php $zaec_n = 0; ?>
			<?php foreach ( zaec_nav() as $item ) : ?>
				<?php $zaec_n++; ?>
				<li><a href="<?php echo esc_url( $item['url'] ); ?>"><small><?php echo esc_html( zaec_pad( $zaec_n ) ); ?></small><?php echo esc_html( $item['label'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>
		<ul class="mm-sub">
			<?php foreach ( zaec_services() as $s ) : ?>
				<li><a href="<?php echo esc_url( zaec_url( $s['key'] ) ); ?>"><?php echo esc_html( $s['title'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>
	</nav>
	<div class="mm-foot">
		<a class="btn btn--light" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
		<p class="mono" style="opacity:.55"><?php echo esc_html( zaec_option( 'city' ) . ' · ' . zaec_option( 'hours' ) ); ?></p>
	</div>
</div>

<main id="sadrzaj" tabindex="-1">
