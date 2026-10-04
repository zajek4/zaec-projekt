<?php
/**
 * Vodiči (stranica objava).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
$hero = array(
	'kicker'    => 'Vodiči',
	'h1'        => 'Znanje koje <em>donosi</em> posao.',
	'lead'      => 'Bez generičkih savjeta i prodajnih trikova. Konkretni koraci koje obrtnik ili mala tvrtka može napraviti — s nama ili bez nas.',
	'image'     => 'world/usluga-procjena.webp',
	'image_alt' => 'Nacrt otoka u plavom blueprint prikazu',
	'cta'       => array( 'Besplatna provjera vidljivosti', 'provjera-vidljivosti' ),
	'title'     => 'Vodiči',
);
get_template_part( 'template-parts/page-hero', null, array( 'landing' => $hero ) );
?>
<section class="block">
	<div class="wrap">
		<?php if ( have_posts() ) : ?>
			<ul class="guide-cards" role="list" data-stagger="0.06">
				<?php while ( have_posts() ) : the_post(); ?>
					<li data-reveal>
						<a class="guide-card" href="<?php the_permalink(); ?>">
							<span class="meta mono"><span><?php echo esc_html( get_post_meta( get_the_ID(), '_zaec_kicker', true ) ? get_post_meta( get_the_ID(), '_zaec_kicker', true ) : 'Vodič' ); ?></span><span><?php echo esc_html( zaec_read_minutes() ); ?> min</span></span>
							<h2><?php the_title(); ?></h2>
							<p><?php echo esc_html( get_the_excerpt() ); ?></p>
							<span class="go">Pročitajte <?php zaec_the_icon( 'arrow-right', 16 ); ?></span>
						</a>
					</li>
				<?php endwhile; ?>
			</ul>
			<div class="pager"><?php the_posts_pagination( array( 'mid_size' => 1, 'prev_text' => '←', 'next_text' => '→' ) ); ?></div>
		<?php else : ?>
			<p class="lead">Vodiči su u pripremi.</p>
		<?php endif; ?>
	</div>
</section>
<?php
get_template_part( 'template-parts/cta-band' );
get_footer();
