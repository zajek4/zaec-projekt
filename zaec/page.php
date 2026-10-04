<?php
/**
 * Obična stranica (npr. Pravila privatnosti).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( zaec_get_landing() ) {
	require ZAEC_THEME_DIR . '/page-templates/landing.php';
	return;
}

get_header();
while ( have_posts() ) :
	the_post();
	?>
	<article class="wrap page-prose">
		<?php zaec_render_breadcrumbs(); ?>
		<h1 class="h2" style="margin-top:20px" data-split><?php the_title(); ?></h1>
		<div class="prose"><?php the_content(); ?></div>
	</article>
	<?php
endwhile;
get_footer();
