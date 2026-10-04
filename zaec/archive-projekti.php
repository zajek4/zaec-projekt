<?php get_header(); ?>
<main id="main" class="zaec-main zaec-projects-main">
	<header class="zaec-page-head zaec-projects-head"><div class="wrap"><p class="zaec-kicker">[ PROJEKTI · CASE STUDY ]</p><h1><?php post_type_archive_title(); ?></h1><p class="zaec-lead">Odabrani projekti, proces i stvarni ishodi. Rezultate prikazujemo samo kada ih možemo potkrijepiti.</p></div></header>
	<section class="zaec-project-archive"><div class="wrap">
	<?php if ( have_posts() ) : ?><div class="zaec-project-grid">
		<?php $i = 0; while ( have_posts() ) : the_post(); get_template_part( 'template-parts/project-card', null, array( 'project' => zaec_get_project_data( get_the_ID() ), 'variant' => $i % 3 ) ); $i++; endwhile; ?>
	</div><nav class="zaec-pagination" aria-label="<?php esc_attr_e( 'Navigacija projekata', 'zaec' ); ?>"><?php the_posts_pagination( array( 'mid_size' => 1, 'prev_text' => '←', 'next_text' => '→' ) ); ?></nav>
	<?php else : get_template_part( 'template-parts/content-none' ); endif; ?>
	</div></section>
</main>
<?php get_footer(); ?>
