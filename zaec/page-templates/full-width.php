<?php
/**
 * Template Name: ZAEC — Full Width
 * Template Post Type: page
 */
get_header(); ?>
<main id="main" class="zaec-main"><?php while(have_posts()):the_post(); ?><header class="zaec-page-head"><div class="wrap"><p class="zaec-kicker">[ FULL WIDTH ]</p><h1><?php the_title(); ?></h1><?php if(has_excerpt()): ?><p class="zaec-lead"><?php echo esc_html(get_the_excerpt()); ?></p><?php endif; ?></div></header><article <?php post_class('zaec-content zaec-content--wide'); ?>><?php the_content(); wp_link_pages(); ?></article><?php endwhile; ?></main>
<?php get_footer(); ?>
