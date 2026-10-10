<?php
/**
 * Potpisni hero: Kontakt — svako polje pali jedan kat.
 * Kuća stoji u lijevoj trećini kadra, a forma je staklena ploča desno od nje (na mobitelu ispod kuće). Polja su
 * obične veličine (oznaka 12 px, polje 54 px, poruka šest redaka); kat po kat odozgo: ime, kontakt, djelatnost,
 * usluga, poruka. Svako ispravno ispunjeno polje pali svoj kat (maska po etažama nad osvijetljenim izrezom iste
 * kamere). Naslov je natpis na krovu (živi SVG tekst poravnat na konstrukciju iz kadra): čitljiv od početka, nakon
 * slanja se pali toplim svjetlom, a potvrda ostaje na stranici.
 * Forma je ista kao drugdje (template-parts/contact-form.php): radi bez JS-a.
 *
 * @package ZAEC
 * @var array $args { landing }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$l  = $args['landing'];
$md = zaec_hero_meta( 'kontakt-d' );
$mm = zaec_hero_meta( 'kontakt-m' );
$o  = zaec_get_options();
$h1 = (string) ( $l['h1'] ?? $l['title'] );

/** Maska osvijetljenog izreza: traka po etaži (--f0…--f4, odozgo), prizemlje (--fg), krov (--fc). */
$zaec_mask = static function ( $m ) {
	$c  = $m['crop'];
	$y  = static fn( $v ) => round( ( $v - $c['y'] ) / $c['h'] * 100, 2 );
	$e  = 0.3;
	$st = array( 'rgb(0 0 0/var(--fc,0)) 0%', 'rgb(0 0 0/var(--fc,0)) ' . ( $y( $m['floors'][0]['top'] ) - $e ) . '%' );
	foreach ( $m['floors'] as $i => $f ) {
		$st[] = "rgb(0 0 0/var(--f{$i},0)) " . ( $y( $f['top'] ) + $e ) . '%';
		$st[] = "rgb(0 0 0/var(--f{$i},0)) " . ( $y( $f['bottom'] ) - $e ) . '%';
	}
	$st[] = 'rgb(0 0 0/var(--fg,0)) ' . ( $y( $m['ground']['top'] ) + $e ) . '%';
	$st[] = 'rgb(0 0 0/var(--fg,0)) 100%';
	$g    = 'linear-gradient(180deg,' . implode( ',', $st ) . ')';
	return sprintf( 'left:%s%%;top:%s%%;width:%s%%;height:%s%%;-webkit-mask-image:%s;mask-image:%s', $c['x'], $c['y'], $c['w'], $c['h'], $g, $g );
};

/** Neonski natpis (H1) jedne kompozicije: dva retka poravnata na konstrukciju na krovu. */
$zaec_sign = static function ( $c, $m ) use ( $h1 ) {
	$s     = $m['sign'];
	$plain = trim( wp_strip_all_tags( $h1 ) );
	// "Recite nam čime se <em>bavite</em>." → 1. redak "Recite nam čime", 2. "se " + "bavite."
	$line1 = 'Recite nam čime';
	$rest  = trim( mb_substr( $plain, mb_strlen( $line1 ) ) );
	if ( 0 !== strpos( $plain, $line1 ) || ! preg_match( '~^(\S+\s)(.+)$~u', $rest, $zaec_r ) ) {
		$zaec_r = array( '', '', $rest );
		$line1  = '';
	}
	printf(
		'<svg class="kt-sign kt-sign--%1$s" viewBox="0 0 %2$d %3$d" preserveAspectRatio="none" aria-hidden="true" focusable="false">%4$s<text class="kt-neon" x="%5$s" y="%6$s" font-size="%7$s" textLength="%8$s" lengthAdjust="spacing"><tspan class="kt-neon-s">%9$s</tspan><tspan class="kt-neon-em">%10$s</tspan></text></svg>',
		esc_attr( $c ),
		(int) $m['w'],
		(int) $m['h'],
		$line1 ? sprintf( '<text class="kt-neon kt-neon-s" x="%1$s" y="%2$s" font-size="%3$s" textLength="%4$s" lengthAdjust="spacing">%5$s</text>', esc_attr( $s['x'] ), esc_attr( $s['lines'][0]['base'] ), esc_attr( $s['lines'][0]['fs'] ), esc_attr( $s['w'] ), esc_html( $line1 ) ) : '', // phpcs:ignore
		esc_attr( $s['x'] ),
		esc_attr( $s['lines'][1]['base'] ),
		esc_attr( $s['lines'][1]['fs'] ),
		esc_attr( $s['w'] ),
		esc_html( $zaec_r[1] ),
		esc_html( $zaec_r[2] )
	);
};

$zaec_direct = static function () use ( $o ) {
	?>
	<ul class="kt-direct" role="list">
		<li><a href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <span><b><?php echo esc_html( $o['phone_display'] ); ?></b><small><?php echo esc_html( $o['hours'] ); ?></small></span></a></li>
		<?php if ( zaec_whatsapp_href() ) : ?>
			<li><a href="<?php echo esc_url( zaec_whatsapp_href() ); ?>" target="_blank" rel="noopener" data-track="click_whatsapp"><?php zaec_the_icon( 'chat-round-dots', 18 ); ?> <span><b>WhatsApp</b><small>Poruka ili fotografija</small></span></a></li>
		<?php endif; ?>
		<?php if ( $o['email'] && '1' === (string) $o['show_public_email'] ) : ?>
			<li><a href="mailto:<?php echo esc_attr( $o['email'] ); ?>"><?php zaec_the_icon( 'letter', 18 ); ?> <span><b><?php echo esc_html( $o['email'] ); ?></b><small>Email</small></span></a></li>
		<?php endif; ?>
		<li><a href="<?php echo esc_url( zaec_maps_href() ); ?>" target="_blank" rel="noopener"><?php zaec_the_icon( 'map-point', 18 ); ?> <span><b><?php echo esc_html( $o['address'] ); ?></b><small><?php echo esc_html( $o['postal_code'] . ' ' . $o['city'] ); ?></small></span></a></li>
	</ul>
	<?php
};
?>
<section class="sh sh-kontakt" data-hero="kontakt" data-header-theme="night" aria-labelledby="sh-title">
	<div class="sh-stage kt-stage">
		<div class="sh-frame">
			<div class="sh-scene">
				<?php zaec_hero_picture( 'kontakt-bg', array( 'class' => 'sh-layer sh-bg', 'priority' => true ) ); ?>
				<?php if ( $md && $mm ) : ?>
					<?php foreach ( array( 'd' => $md, 'm' => $mm ) as $zaec_c => $zaec_m ) : ?>
						<div class="kt-lit kt-lit--<?php echo esc_attr( $zaec_c ); ?>" style="<?php echo esc_attr( $zaec_mask( $zaec_m ) ); ?>" aria-hidden="true">
							<img src="<?php echo esc_url( zaec_img( "hero/kontakt-lit-{$zaec_c}.webp" ) ); ?>" alt="" width="<?php echo 'd' === $zaec_c ? 502 : 629; ?>" height="<?php echo 'd' === $zaec_c ? 871 : 1165; ?>" loading="lazy" decoding="async">
						</div>
					<?php endforeach; ?>
					<h1 class="kt-title" id="sh-title">
						<span class="sr-only"><?php echo esc_html( wp_strip_all_tags( $h1 ) ); ?></span>
						<?php
						$zaec_sign( 'd', $md );
						$zaec_sign( 'm', $mm );
						?>
					</h1>
				<?php else : ?>
					<h1 class="kt-title kt-title--text" id="sh-title"><?php echo wp_kses( $h1, array( 'em' => array() ) ); ?></h1>
				<?php endif; ?>
			</div>
		</div>
		<div class="wrap kt-col">
			<div class="kt-main">
				<?php zaec_render_breadcrumbs(); ?>
				<?php if ( ! empty( $l['lead'] ) ) : ?><p class="kt-lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
				<div class="kt-panel" id="upit">
					<p class="kt-how">Svako polje pali jedan kat. Dva su obavezna.</p>
					<?php get_template_part( 'template-parts/contact-form', null, array( 'id' => 'upit-forma-kontakt', 'theme' => 'dark', 'rows' => 6, 'inline' => true ) ); ?>
				</div>
				<?php $zaec_direct(); ?>
			</div>
		</div>
	</div>
</section>
