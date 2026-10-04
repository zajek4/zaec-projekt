<?php
/**
 * Zadani predložak (arhive, pretraga).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wrap page-prose">
	<?php zaec_render_breadcrumbs(); ?>
	<h1 class="h2" style="margin-top:20px">
		<?php
		if ( is_search() ) {
			echo 'Rezultati za: ' . esc_html( get_search_query() );
		} elseif ( is_archive() ) {
			echo esc_html( wp_strip_all_tags( get_the_archive_title() ) );
		} else {
			echo 'Objave';
		}
		?>
	</h1>
	<div style="margin:28px 0"><?php get_search_form(); ?></div>
	<?php if ( have_posts() ) : ?>
		<ul class="guide-cards" role="list" style="margin-top:30px">
			<?php while ( have_posts() ) : the_post(); ?>
				<li><a class="guide-card" href="<?php the_permalink(); ?>"><span class="meta mono"><span><?php echo esc_html( get_post_type_object( get_post_type() )->labels->singular_name ); ?></span></span><h2><?php the_title(); ?></h2><p><?php echo esc_html( get_the_excerpt() ); ?></p></a></li>
			<?php endwhile; ?>
		</ul>
		<div class="pager"><?php the_posts_pagination(); ?></div>
	<?php else : ?>
		<p class="lead">Nema rezultata. Pokušajte drugim pojmom ili <a href="<?php echo esc_url( zaec_url( 'kontakt' ) ); ?>">nam se javite</a>.</p>
	<?php endif; ?>
</section>
<?php
get_footer();
