<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$options = zaec_get_options();
$front = is_front_page();
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0e0e0d">
<?php if ( ! has_site_icon() ) : ?><link rel="icon" type="image/png" href="<?php echo esc_url( get_theme_file_uri( 'assets/images/favicon.png' ) ); ?>"><?php endif; ?>
<?php if ( $front ) : ?><noscript><style>#preloader,.scanlines,#cursorWrap,#rail,#holoCanvas,#earthCanvas{display:none!important}#heroPinSpace{height:auto!important}#heroPin{position:static!important;height:auto!important;overflow:visible!important}#holoWrap,#earthHero{display:block!important}.hero-grid{grid-template-columns:1fr!important;height:auto!important;padding-top:calc(var(--nav-h) + 56px)!important}.hero-copy,.hero-stage,.svc-panel{grid-area:auto!important}.hero-copy{order:1!important;opacity:1!important;transform:none!important}.hero-stage{order:2!important}.svc-panel{order:3!important;opacity:1!important;transform:none!important}#holoFallbackD,#earthFallbackD{display:flex!important}#earthLoader{display:none!important}</style></noscript><?php endif; ?>
<?php wp_head(); ?>
</head>
<body <?php body_class( $front ? array( 'on-dark' ) : array( 'on-dark', 'zaec-interior' ) ); ?> id="top">
<?php wp_body_open(); ?>
<a class="skip-link" href="#main"><?php esc_html_e( 'Preskoči na sadržaj', 'zaec' ); ?></a>
<?php get_template_part( 'template-parts/global/svg-sprite' ); ?>
<?php if ( $front ) : ?>
<div id="preloader" role="status" aria-label="<?php esc_attr_e( 'Učitavanje stranice', 'zaec' ); ?>"><div class="pl-grid" aria-hidden="true"></div><div class="pl-center"><svg class="pl-logo" viewBox="0 0 100 100" aria-hidden="true"><use href="#zMon"/></svg><div class="pl-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i id="plFill"></i></div><div class="pl-row"><span>ZAEC</span><span id="plNum">000</span></div><div class="pl-coords"><?php echo esc_html( $options['latitude'] . '° N · ' . $options['longitude'] . '° E' ); ?></div></div></div>
<div id="cursorWrap" aria-hidden="true"><div id="cursor"><i class="c-ring"></i><i class="c-h"></i><i class="c-v"></i><i class="c-dot"></i></div></div>
<aside id="rail" aria-label="<?php esc_attr_e( 'Sekcije stranice', 'zaec' ); ?>"><div class="rail-line" aria-hidden="true"><i id="railFill"></i></div><nav class="rail-dots"><?php foreach ( array('hero'=>'00','za-koga'=>'01','poznato'=>'02','metoda'=>'03','proces'=>'04','ekran'=>'05','cijene'=>'06','radovi'=>'07','klijenti'=>'08','faq'=>'09','upit'=>'10') as $id=>$n ) : ?><a href="#<?php echo esc_attr($id); ?>" data-target="<?php echo esc_attr($id); ?>"<?php echo 'hero'===$id?' class="on"':''; ?>><i></i><span><?php echo esc_html($n); ?></span></a><?php endforeach; ?></nav><span id="railPct" aria-hidden="true">00</span></aside>
<?php endif; ?>
<header id="nav">
<a class="brand" href="<?php echo esc_url( $front ? '#top' : home_url('/') ); ?>" aria-label="<?php esc_attr_e( 'ZAEC — naslovnica', 'zaec' ); ?>"><?php zaec_brand_mark( 'brand-mark' ); ?><span class="brand-txt">ZAEC<em>Web studio</em></span></a>
<nav class="nav-links" aria-label="<?php esc_attr_e( 'Glavna navigacija', 'zaec' ); ?>"><?php wp_nav_menu(array('theme_location'=>'primary','container'=>false,'items_wrap'=>'%3$s','fallback_cb'=>'zaec_primary_menu_fallback','walker'=>new ZAEC_Anchor_Walker_Nav_Menu())); ?></nav>
<div class="nav-right"><a class="nav-tel" href="tel:<?php echo esc_attr( zaec_phone_href($options['phone_raw']) ); ?>"><?php echo esc_html($options['phone_display']); ?></a><a class="btn btn-signal btn-sm btn-arrow nav-upit" href="<?php echo esc_url( zaec_home_anchor('upit') ); ?>"><span><?php esc_html_e('Upit','zaec'); ?></span><svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg></a><a class="nav-call-m" href="tel:<?php echo esc_attr( zaec_phone_href( $options['phone_raw'] ) ); ?>" aria-label="<?php esc_attr_e( 'Nazovi ZAEC', 'zaec' ); ?>" title="<?php esc_attr_e( 'Nazovi ZAEC', 'zaec' ); ?>"><svg class="nav-call-m__ic" aria-hidden="true" focusable="false"><use href="#ic-phone"/></svg><span><?php esc_html_e( 'Poziv', 'zaec' ); ?></span></a><button type="button" id="burger" aria-controls="mobileMenu" aria-label="<?php esc_attr_e('Otvori izbornik','zaec'); ?>" aria-expanded="false"><i></i><i></i><i></i></button></div>
</header>
<div id="mobileMenu" aria-hidden="true" inert><nav aria-label="<?php esc_attr_e('Mobilna navigacija','zaec'); ?>"><?php wp_nav_menu(array('theme_location'=>'primary','container'=>false,'items_wrap'=>'%3$s','fallback_cb'=>'zaec_primary_menu_fallback','walker'=>new ZAEC_Anchor_Walker_Nav_Menu())); ?><a href="<?php echo esc_url(zaec_home_anchor('upit')); ?>" class="mm-cta"><?php esc_html_e('Upit','zaec'); ?></a></nav><div class="mm-foot"><a href="tel:<?php echo esc_attr(zaec_phone_href($options['phone_raw'])); ?>"><?php echo esc_html($options['phone_display']); ?></a><?php if ( ! empty( $options['show_public_email'] ) && '0' !== $options['show_public_email'] && ! empty( $options['email'] ) ) : ?><a href="mailto:<?php echo esc_attr( $options['email'] ); ?>"><?php echo esc_html( $options['email'] ); ?></a><?php endif; ?><span><?php echo esc_html($options['location']); ?></span></div>
<?php if ( ! empty( $options['phone_raw'] ) ) : ?>
<a class="m-call-bar" href="tel:<?php echo esc_attr( zaec_phone_href( $options['phone_raw'] ) ); ?>">
  <svg class="m-call-bar__ic" aria-hidden="true" focusable="false"><use href="#ic-phone"/></svg>
  <span class="m-call-bar__txt"><b><?php esc_html_e( 'Nazovi sada', 'zaec' ); ?></b><em><?php echo esc_html( $options['phone_display'] ); ?></em></span>
</a>
<?php endif; ?>
</div>
