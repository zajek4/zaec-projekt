<?php
/**
 * Template Name: ZAEC — Landing
 *
 * Stranice usluga, djelatnosti i posebne stranice. Sadržaj iz registra (inc/landing-*.php);
 * tekst iz WordPress editora prikazuje se dodatno, ispod strukturiranog sadržaja.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$l = zaec_get_landing();
if ( ! $l ) {
	get_template_part( 'page' );
	return;
}

get_header();

if ( 'thanks' === $l['type'] ) :
	?>
	<section class="nf thanks">
		<div>
			<img src="<?php echo esc_url( zaec_img( 'world/usluga-landing.webp' ) ); ?>" alt="" width="1400" height="1050">
			<p class="kicker" style="justify-content:center">Upit zaprimljen</p>
			<h1 class="h2" style="margin-top:16px">Hvala! <em>Javljamo</em> se uskoro.</h1>
			<p>Odgovaramo u radno vrijeme (<?php echo esc_html( zaec_option( 'hours' ) ); ?>). Ako je hitno, slobodno nazovite <a href="<?php echo esc_attr( zaec_phone_href() ); ?>"><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>.</p>
			<div class="links">
				<?php echo zaec_button( 'Na naslovnicu', home_url( '/' ) ); // phpcs:ignore ?>
				<?php
				$guides = get_posts( array( 'post_type' => 'post', 'posts_per_page' => 1, 'category_name' => 'vodici' ) );
				if ( $guides ) :
					?>
					<a class="btn btn--ghost" href="<?php echo esc_url( get_permalink( $guides[0] ) ); ?>">Dok čekate: vodič</a>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<?php
	get_footer();
	return;
endif;

$l = zaec_hero_prepare( $l );
get_template_part( 'template-parts/page-hero', null, array( 'landing' => $l ) );
zaec_render_blocks( $l );

while ( have_posts() ) :
	the_post();
	if ( '' !== trim( (string) get_the_content() ) ) :
		?>
		<section class="block"><div class="wrap"><div class="prose prose--page"><?php the_content(); ?></div></div></section>
		<?php
	endif;
endwhile;

zaec_render_related( $l );
if ( ! empty( $l['faq'] ) ) {
	get_template_part( 'template-parts/faq', null, array( 'items' => $l['faq'], 'title' => 'Česta <em>pitanja</em>', 'page' => $l['key'] ?? '' ) );
}
if ( ! in_array( $l['type'], array( 'contact', 'check', 'pricing' ), true ) ) {
	get_template_part( 'template-parts/cta-band' );
}

get_footer();
