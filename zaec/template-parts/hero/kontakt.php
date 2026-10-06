<?php
/**
 * Potpisni hero: Kontakt — "Vaše svjetlo je sljedeće".
 * Na naslovnici svako svjetlo u gradu je nečiji posao. Ovdje je u nizu osvijetljenih kuća jedna tamna — vaša.
 * Forma je dio kadra: svako ispunjeno polje pali jednu etažu (maska po etažama nad osvijetljenim izrezom iste
 * kamere), slanje pali krunu na krovu i signal. Bez JS-a forma radi klasično, a kuća ostaje tamna — obećanje.
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

// etaže odozdo prema gore = polja forme redom
$floors = array(
	array( 'ime', 'Ime' ),
	array( 'kontakt', 'Kontakt' ),
	array( 'djelatnost', 'Djelatnost' ),
	array( 'usluga', 'Usluga' ),
	array( 'poruka', 'O poslu' ),
);

/**
 * Maska osvijetljenog izreza: vodoravne trake po etažama (gore kruna), prozirnost svake trake je varijabla
 * (--f0…--f4, --fc) koju pali forma. Granice su u postocima izreza, s mekim prijelazom od ±0,35 %.
 */
$zaec_mask = static function ( $m ) {
	$c   = $m['crop'];
	$y   = static fn( $v ) => round( ( $v - $c['y'] ) / $c['h'] * 100, 2 );
	$e   = 0.35;
	$top = $y( $m['levels'][4]['top'] );
	$st  = array( 'rgb(0 0 0/var(--fc,0)) 0%', 'rgb(0 0 0/var(--fc,0)) ' . ( $top - $e ) . '%' );
	for ( $i = 4; $i >= 0; $i-- ) {
		$t    = $y( $m['levels'][ $i ]['top'] );
		$b    = $y( $m['levels'][ $i ]['bottom'] );
		$st[] = "rgb(0 0 0/var(--f{$i},0)) " . ( $t + $e ) . '%';
		$st[] = "rgb(0 0 0/var(--f{$i},0)) " . ( 0 === $i ? 100 : $b - $e ) . '%';
	}
	$g = 'linear-gradient(180deg,' . implode( ',', $st ) . ')';
	return sprintf( 'left:%s%%;top:%s%%;width:%s%%;height:%s%%;-webkit-mask-image:%s;mask-image:%s', $c['x'], $c['y'], $c['w'], $c['h'], $g, $g );
};

$vars = $md && $mm ? sprintf(
	'--hl:%s;--hr:%s;--cx:%s;--cy:%s;--hlm:%s;--hrm:%s;--cxm:%s;--cym:%s',
	$md['left'],
	$md['right'],
	$md['crown']['x'],
	$md['crown']['top'],
	$mm['left'],
	$mm['right'],
	$mm['crown']['x'],
	$mm['crown']['top']
) : '';
?>
<section class="sh sh-kontakt" data-hero="kontakt" data-header-theme="night" aria-labelledby="sh-title" style="<?php echo esc_attr( $vars ); ?>">
	<div class="sh-stage kt-stage">
		<div class="sh-frame">
			<div class="sh-scene">
				<?php zaec_hero_picture( 'kontakt-bg', array( 'class' => 'sh-layer sh-bg', 'priority' => true ) ); ?>
				<?php if ( $md && $mm ) : ?>
					<?php foreach ( array( 'd' => $md, 'm' => $mm ) as $zaec_c => $zaec_m ) : ?>
						<div class="kt-lit kt-lit--<?php echo esc_attr( $zaec_c ); ?>" style="<?php echo esc_attr( $zaec_mask( $zaec_m ) ); ?>" aria-hidden="true">
							<img src="<?php echo esc_url( zaec_img( "hero/kontakt-lit-{$zaec_c}.webp" ) ); ?>" alt="" width="<?php echo 'd' === $zaec_c ? 477 : 486; ?>" height="<?php echo 'd' === $zaec_c ? 992 : 1071; ?>" loading="lazy" decoding="async">
						</div>
					<?php endforeach; ?>
					<ol class="kt-floors" aria-hidden="true">
						<?php foreach ( $floors as $zaec_i => $zaec_f ) : ?>
							<li class="kt-floor" data-floor="<?php echo esc_attr( $zaec_f[0] ); ?>" style="<?php echo esc_attr( sprintf( '--t:%s;--b:%s;--tm:%s;--bm:%s', $md['levels'][ $zaec_i ]['top'], $md['levels'][ $zaec_i ]['bottom'], $mm['levels'][ $zaec_i ]['top'], $mm['levels'][ $zaec_i ]['bottom'] ) ); ?>"><i><?php echo esc_html( zaec_pad( $zaec_i + 1 ) ); ?></i><b><?php echo esc_html( $zaec_f[1] ); ?></b></li>
						<?php endforeach; ?>
					</ol>
					<p class="kt-pin mono" aria-hidden="true"><span data-pin>Vaš obrt · svjetlo je sljedeće</span></p>
					<span class="kt-beacon" aria-hidden="true"></span>
				<?php endif; ?>
			</div>
		</div>
		<div class="kt-grid">
			<div class="kt-copy">
				<div class="kt-head">
					<?php zaec_render_breadcrumbs(); ?>
					<p class="kicker"><?php echo esc_html( $l['kicker'] ?? $l['title'] ); ?> · <?php echo esc_html( $o['city'] ); ?></p>
					<h1 class="h1 sh-title kt-title" id="sh-title"><?php echo zaec_kses_title( $h1 ); // phpcs:ignore ?></h1>
				</div>
				<div class="kt-more">
				<?php if ( ! empty( $l['lead'] ) ) : ?><p class="lead kt-lead"><?php echo esc_html( $l['lead'] ); ?></p><?php endif; ?>
				<ul class="kt-direct" role="list">
					<li><a href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <span><b><?php echo esc_html( $o['phone_display'] ); ?></b><small><?php echo esc_html( $o['hours'] ); ?></small></span></a></li>
					<?php if ( zaec_whatsapp_href() ) : ?>
						<li><a href="<?php echo esc_url( zaec_whatsapp_href() ); ?>" target="_blank" rel="noopener" data-track="click_whatsapp"><?php zaec_the_icon( 'chat-round-dots', 18 ); ?> <span><b>WhatsApp</b><small>Poruka ili fotografija</small></span></a></li>
					<?php endif; ?>
				</ul>
				</div>
			</div>
			<div class="kt-card" id="upit">
				<div class="kt-card-head">
					<div>
						<h2 class="h3">Upit</h2>
						<p class="kt-note" data-meter-note>Dva obavezna polja. Ostalo po želji.</p>
					</div>
					<span class="kt-meter" aria-hidden="true"><i class="c"></i><i></i><i></i><i></i><i></i><i class="g"></i></span>
				</div>
				<?php get_template_part( 'template-parts/contact-form', null, array( 'id' => 'upit-forma-kontakt', 'theme' => 'dark', 'rows' => 3 ) ); ?>
			</div>
		</div>
	</div>
</section>
<?php zaec_hero_answer( $l, 'sh-answer' ); ?>
