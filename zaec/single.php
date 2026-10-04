<?php
/**
 * Vodič / objava.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	$toc    = zaec_toc();
	$kicker = get_post_meta( get_the_ID(), '_zaec_kicker', true );
	?>
	<header class="wrap article-head">
		<?php zaec_render_breadcrumbs(); ?>
		<p class="kicker" style="margin-top:28px"><?php echo esc_html( $kicker ? $kicker : 'Vodič' ); ?></p>
		<h1 data-split><?php the_title(); ?></h1>
		<?php if ( has_excerpt() ) : ?><p class="lead" style="margin-top:22px;max-width:60ch" data-reveal><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?>
		<div class="article-meta mono">
			<span>Autor: <a href="<?php echo esc_url( zaec_url( 'o-nama' ) ); ?>"><?php echo esc_html( zaec_option( 'owner_name' ) ); ?></a></span>
			<span>Objavljeno: <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date( 'j. F Y.' ) ); ?></time></span>
			<?php if ( get_the_modified_date( 'Ymd' ) !== get_the_date( 'Ymd' ) ) : ?><span>Ažurirano: <time datetime="<?php echo esc_attr( get_the_modified_date( 'c' ) ); ?>"><?php echo esc_html( get_the_modified_date( 'j. F Y.' ) ); ?></time></span><?php endif; ?>
			<span><?php echo esc_html( zaec_read_minutes() ); ?> min čitanja</span>
		</div>
	</header>
	<div class="wrap article-body">
		<article class="prose"><?php the_content(); ?></article>
		<aside class="article-aside">
			<?php if ( count( $toc ) > 2 ) : ?>
				<nav class="toc" aria-label="Sadržaj članka">
					<p class="mono">Sadržaj</p>
					<ol><?php foreach ( $toc as $t ) : ?><li><a href="#<?php echo esc_attr( $t[1] ); ?>"><?php echo esc_html( $t[0] ); ?></a></li><?php endforeach; ?></ol>
				</nav>
			<?php endif; ?>
			<div class="box">
				<p class="mono" style="color:#a9a49a">Trebate pomoć?</p>
				<p>Besplatna provjera vidljivosti: Google profil, web, recenzije i AI odgovori — uz tri konkretna koraka.</p>
				<?php echo zaec_button( 'Zatražite provjeru', zaec_url( 'provjera-vidljivosti' ), 'light', array( 'class' => 'btn--sm', 'track' => 'cta_article_audit' ) ); // phpcs:ignore ?>
			</div>
		</aside>
	</div>
	<?php
	$others = get_posts( array( 'post_type' => 'post', 'posts_per_page' => 3, 'post__not_in' => array( get_the_ID() ), 'category_name' => 'vodici' ) );
	if ( $others ) :
		?>
		<section class="block block--paper2">
			<div class="wrap">
				<div class="block-head"><div class="stack" style="--stack:18px"><p class="kicker">Još vodiča</p><h2 class="h2">Čitajte <em>dalje</em>.</h2></div></div>
				<ul class="guide-cards" role="list">
					<?php foreach ( $others as $g ) : ?>
						<li><a class="guide-card" href="<?php echo esc_url( get_permalink( $g ) ); ?>"><span class="meta mono"><span><?php echo esc_html( get_post_meta( $g->ID, '_zaec_kicker', true ) ); ?></span><span><?php echo esc_html( zaec_read_minutes( $g->ID ) ); ?> min</span></span><h3><?php echo esc_html( $g->post_title ); ?></h3><span class="go">Pročitajte <?php zaec_the_icon( 'arrow-right', 16 ); ?></span></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		</section>
		<?php
	endif;
endwhile;
get_template_part( 'template-parts/cta-band' );
get_footer();
