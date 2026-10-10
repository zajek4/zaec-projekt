<?php
/**
 * Projekt — tehnički dosje (studija slučaja).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	$p    = zaec_get_project_data( get_the_ID() );
	$host = $p['website_url'] ? preg_replace( '#^https?://(www\.)?#', '', untrailingslashit( $p['website_url'] ) ) : '';
	$rows = array_filter( array( 'Usluga' => $p['service'], 'Lokacija' => $p['location'], 'Godina' => $p['year'], 'Tehnologije' => $p['technologies'] ) );
	$next = get_adjacent_post( false, '', false );
	if ( ! $next ) {
		$first = get_posts( array( 'post_type' => 'projekti', 'posts_per_page' => 1, 'orderby' => array( 'menu_order' => 'ASC', 'date' => 'DESC' ), 'post__not_in' => array( get_the_ID() ) ) );
		$next  = $first ? $first[0] : null;
	}
	?>
	<section class="case">
		<div class="wrap case-grid">
			<div class="case-copy">
				<?php zaec_render_breadcrumbs(); ?>
				<p class="kicker"><?php echo esc_html( $p['code'] ? $p['code'] : 'Projekt' ); ?></p>
				<h1 class="h1 case-title" data-split><?php the_title(); ?></h1>
				<?php if ( $p['excerpt'] ) : ?><p class="lead" data-reveal><?php echo esc_html( $p['excerpt'] ); ?></p><?php endif; ?>
				<?php if ( $p['website_url'] ) : ?>
					<div data-reveal><?php echo zaec_button( 'Otvorite web stranicu', $p['website_url'], 'signal', array( 'icon' => 'arrow-right-up' ) ); // phpcs:ignore ?></div>
				<?php endif; ?>
			</div>
			<figure class="case-shot" data-reveal>
				<span class="pcard-bar" aria-hidden="true"><i></i><i></i><i></i><em><?php echo esc_html( $host ? $host : $p['title'] ); ?></em></span>
				<?php if ( $p['image'] ) : ?><img src="<?php echo esc_url( $p['image'] ); ?>" alt="<?php echo esc_attr( 'Snimka zaslona: ' . $p['title'] ); ?>" width="1200" height="760"><?php endif; ?>
			</figure>
		</div>
	</section>

	<section class="block">
		<div class="wrap two-col">
			<dl class="dossier" data-reveal>
				<?php $i = 0; foreach ( $rows as $k => $v ) : $i++; ?>
					<div><dt class="mono"><?php echo esc_html( zaec_pad( $i ) . ' · ' . $k ); ?></dt><dd><?php echo esc_html( $v ); ?></dd></div>
				<?php endforeach; ?>
				<?php if ( $p['result'] ) : ?>
					<div class="dossier-result"><dt class="mono">[ Ishod ]</dt><dd><?php echo esc_html( $p['result'] ); ?></dd></div>
				<?php endif; ?>
			</dl>
			<div class="prose" data-reveal><?php the_content(); ?></div>
		</div>
	</section>

	<?php if ( $p['quote'] || $p['metric'] || $p['proof_image'] ) : ?>
		<section class="block block--paper2">
			<div class="wrap">
				<div class="proof proof--single">
					<figure class="quote">
						<?php zaec_the_icon( 'chat-round-dots', 26, 'quote-ico' ); ?>
						<?php if ( $p['quote'] ) : ?><blockquote><p>„<?php echo esc_html( $p['quote'] ); ?>”</p></blockquote><figcaption><b><?php echo esc_html( $p['quote_author'] ); ?></b><span><?php echo esc_html( $p['quote_role'] ); ?></span></figcaption><?php endif; ?>
						<?php if ( $p['metric'] ) : ?><div class="quote-metric"><span class="mono"><?php echo esc_html( $p['metric'][0] ); ?></span><p><s><?php echo esc_html( $p['metric'][1] ); ?></s> → <b><?php echo esc_html( $p['metric'][2] ); ?></b></p></div><?php endif; ?>
						<?php if ( $p['proof_image'] ) : ?><a class="quote-shot" href="<?php echo esc_url( $p['proof_image'] ); ?>" target="_blank" rel="noopener"><img src="<?php echo esc_url( $p['proof_image'] ); ?>" alt="<?php echo esc_attr( 'Snimka rezultata: ' . $p['title'] ); ?>" loading="lazy"><span class="mono"><?php echo esc_html( $p['proof_note'] ? $p['proof_note'] : 'Potvrđeni rezultat' ); ?></span></a><?php endif; ?>
					</figure>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if ( $next ) : ?>
		<section class="block next-project">
			<div class="wrap">
				<a class="next-card" href="<?php echo esc_url( get_permalink( $next ) ); ?>">
					<span class="mono">Sljedeći projekt</span>
					<b><?php echo esc_html( get_the_title( $next ) ); ?></b>
					<?php zaec_the_icon( 'arrow-right', 32 ); ?>
				</a>
			</div>
		</section>
	<?php endif; ?>
	<?php
endwhile;
get_template_part( 'template-parts/cta-band', null, array( 'title' => 'Želite ovakav <em>rezultat</em>?' ) );
get_footer();
