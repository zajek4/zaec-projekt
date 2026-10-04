<?php
/**
 * Radovi (arhiva projekata).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
$hero = array(
	'kicker'    => 'Radovi',
	'h1'        => 'Stvarni projekti. <em>Stvarni</em> ljudi.',
	'lead'      => 'Bez izmišljenih klijenata i lažnih brojki. Svaki rad možete otvoriti i provjeriti — a rezultate objavljujemo samo uz potvrdu i dopuštenje klijenta.',
	'image'     => 'world/usluga-onama.webp',
	'image_alt' => 'Low-poly lebdeći otok s gradićem',
	'cta'       => array( 'Složite svoj projekt', 'cijene#konfigurator' ),
	'title'     => 'Radovi',
);
get_template_part( 'template-parts/page-hero', null, array( 'landing' => $hero ) );
?>
<section class="block">
	<div class="wrap">
		<?php if ( have_posts() ) : ?>
			<div class="pgrid">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'template-parts/project-card', null, array( 'p' => zaec_get_project_data( get_the_ID() ) ) ); ?>
				<?php endwhile; ?>
			</div>
			<div class="pager"><?php the_posts_pagination( array( 'mid_size' => 1, 'prev_text' => '←', 'next_text' => '→' ) ); ?></div>
		<?php else : ?>
			<p class="lead">Projekti se uskoro dodaju.</p>
		<?php endif; ?>
		<div style="margin-top:60px"><?php get_template_part( 'template-parts/proof', null, array( 'report' => false ) ); ?></div>
	</div>
</section>
<?php
get_template_part( 'template-parts/cta-band', null, array( 'title' => 'Sljedeći projekt može biti <em>vaš</em>.' ) );
get_footer();
