<?php
/**
 * ZAEC front page.
 *
 * @package ZAEC
 */
get_header();
?>
<main id="main">
<?php
foreach ( array( 'hero', 'marquee', 'poznato', 'metoda', 'proces', 'ekran', 'cijene', 'radovi', 'testimonials', 'faq', 'contact' ) as $part ) {
	get_template_part( 'template-parts/front-page/' . $part );
}
?>
</main>
<?php get_footer(); ?>
