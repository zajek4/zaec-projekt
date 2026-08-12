<?php get_header(); ?>
<main id="main" class="zaec-main"><header class="zaec-page-head"><div class="wrap"><p class="zaec-kicker">[ INDEX ]</p><h1><?php bloginfo('name'); ?></h1></div></header><section class="zaec-archive"><div class="wrap"><?php if(have_posts()): ?><div class="zaec-grid"><?php while(have_posts()):the_post();get_template_part('template-parts/post-card');endwhile; ?></div><?php the_posts_pagination(); else:get_template_part('template-parts/content-none');endif; ?></div></section></main>
<?php get_footer(); ?>
