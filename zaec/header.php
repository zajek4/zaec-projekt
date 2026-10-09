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
						<?php $zaec_grouped = ! empty( $item['children'][0]['children'] ); ?>
						<li class="has-sub<?php echo $zaec_grouped ? ' has-sub--groups' : ''; ?>" data-sub>
							<button class="nav-trigger" type="button" aria-expanded="false" aria-controls="subnav-<?php echo (int) $i; ?>">
								<?php echo esc_html( $item['label'] ); ?> <?php zaec_the_icon( 'alt-arrow-down', 14 ); ?>
							</button>
							<div class="subnav subnav--wide<?php echo $zaec_grouped ? ' subnav--groups' : ''; ?>" id="subnav-<?php echo (int) $i; ?>">
								<?php if ( $zaec_grouped ) : // skupine (zadani izbornik ili WP izbornik s tri razine) ?>
									<div class="subnav-cols">
										<?php foreach ( $item['children'] as $g => $grp ) : ?>
											<div class="subnav-col">
												<p class="subnav-h" id="subnav-<?php echo (int) $i; ?>-<?php echo (int) $g; ?>"><span class="mono"><?php echo esc_html( zaec_pad( $g + 1 ) ); ?></span> <?php echo esc_html( $grp['label'] ); ?><?php if ( ! empty( $grp['note'] ) ) : ?><small><?php echo esc_html( $grp['note'] ); ?></small><?php endif; ?></p>
												<ul aria-labelledby="subnav-<?php echo (int) $i; ?>-<?php echo (int) $g; ?>">
													<?php foreach ( $grp['children'] as $c ) : ?>
														<li><a href="<?php echo esc_url( $c['url'] ); ?>"<?php echo zaec_is_current_url( $c['url'] ) ? ' aria-current="page"' : ''; ?>><b><?php echo esc_html( $c['label'] ); ?></b><?php if ( ! empty( $c['note'] ) ) : ?><small><?php echo esc_html( $c['note'] ); ?></small><?php endif; ?></a></li>
													<?php endforeach; ?>
												</ul>
											</div>
										<?php endforeach; ?>
									</div>
								<?php else : ?>
								<ul>
									<?php foreach ( $item['children'] as $c ) : ?>
										<li><a href="<?php echo esc_url( $c['url'] ); ?>"<?php echo zaec_is_current_url( $c['url'] ) ? ' aria-current="page"' : ''; ?>><b><?php echo esc_html( $c['label'] ); ?></b><?php if ( ! empty( $c['note'] ) ) : ?><small><?php echo esc_html( $c['note'] ); ?></small><?php endif; ?><?php zaec_the_icon( 'arrow-right', 18 ); ?></a></li>
									<?php endforeach; ?>
								</ul>
								<?php endif; ?>
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
			<?php echo zaec_button( 'Pošaljite upit', zaec_inquiry_url(), '', array( 'class' => 'btn--sm btn--header', 'track' => 'cta_header' ) ); // phpcs:ignore ?>
		</div>

		<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobilni-izbornik" data-menu-toggle>
			<span></span><span></span><b class="sr-only">Izbornik</b>
		</button>
	</div>
</header>

<div class="mobile-menu" id="mobilni-izbornik" role="dialog" aria-label="Izbornik" data-mobile-menu>
	<nav aria-label="Mobilna navigacija">
		<ul class="mm-main">
			<?php $zaec_n = 0; ?>
			<?php foreach ( zaec_nav() as $item ) : ?>
				<?php $zaec_n++; ?>
				<li><a href="<?php echo esc_url( $item['url'] ); ?>"><small><?php echo esc_html( zaec_pad( $zaec_n ) ); ?></small><?php echo esc_html( $item['label'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>
		<?php foreach ( zaec_nav_service_groups() as $g => $grp ) : ?>
			<p class="mm-h mono" id="mm-usluge-<?php echo (int) $g; ?>"><?php echo esc_html( $grp['label'] ); ?></p>
			<ul class="mm-sub" aria-labelledby="mm-usluge-<?php echo (int) $g; ?>">
				<?php foreach ( $grp['children'] as $c ) : ?>
					<li><a href="<?php echo esc_url( $c['url'] ); ?>"><?php echo esc_html( $c['label'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		<?php endforeach; ?>
	</nav>
	<div class="mm-foot">
		<?php echo zaec_button( 'Pošaljite upit', zaec_inquiry_url(), 'signal', array( 'track' => 'cta_menu' ) ); // phpcs:ignore ?>
		<p class="mm-note mono">Pisana procjena, bez obveze · <?php echo esc_html( zaec_option( 'city' ) ); ?></p>
	</div>
</div>

<main id="sadrzaj" tabindex="-1">
