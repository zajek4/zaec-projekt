<?php get_header(); ?>
<main id="main" class="zaec-main zaec-project-single">
<?php while ( have_posts() ) : the_post(); $project = zaec_get_project_data( get_the_ID() ); $meta = array_filter( array( $project['service'], $project['location'], $project['year'] ) ); ?>
	<article <?php post_class(); ?>>
		<header class="zaec-page-head zaec-project-head"><div class="wrap">
			<p class="zaec-meta"><?php if ( $project['code'] ) : ?>[ <?php echo esc_html( $project['code'] ); ?> ]<?php else : ?>[ PROJEKT ]<?php endif; ?><?php if ( $meta ) : ?> · <?php echo esc_html( implode( ' · ', $meta ) ); ?><?php endif; ?></p>
			<h1><?php the_title(); ?></h1>
			<?php if ( has_excerpt() ) : ?><p class="zaec-lead"><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?>
		</div></header>
		<?php if ( has_post_thumbnail() ) : ?>
			<figure class="single-hero-image"><?php the_post_thumbnail( 'zaec-hero', array( 'sizes' => '(max-width: 1440px) 100vw, 1440px', 'loading' => 'eager', 'fetchpriority' => 'high' ) ); ?></figure>
		<?php elseif ( ! empty( $project['image'] ) ) : ?>
			<figure class="single-hero-image"><img src="<?php echo esc_url( get_theme_file_uri( $project['image'] ) ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" loading="eager" fetchpriority="high" decoding="async"></figure>
		<?php endif; ?>
		<div class="zaec-content zaec-project-content">
			<?php if ( $project['result'] || $project['technologies'] || $project['website_url'] ) : ?>
			<aside class="project-dossier">
				<?php if ( $project['result'] ) : ?><div><span>[ ISHOD ]</span><p><?php echo esc_html( $project['result'] ); ?></p></div><?php endif; ?>
				<?php if ( $project['technologies'] ) : ?><div><span>[ TEHNOLOGIJE ]</span><p><?php echo esc_html( $project['technologies'] ); ?></p></div><?php endif; ?>
				<?php if ( $project['website_url'] ) : ?><div><span>[ LIVE ]</span><p><a href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Otvori projekt ↗', 'zaec' ); ?></a></p></div><?php endif; ?>
			</aside>
			<?php endif; ?>
			<?php the_content(); wp_link_pages(); ?>
			<nav class="zaec-post-nav" aria-label="<?php esc_attr_e( 'Navigacija projekata', 'zaec' ); ?>"><div><?php previous_post_link( '%link', '← %title' ); ?></div><div><?php next_post_link( '%link', '%title →' ); ?></div></nav>
		</div>
	</article>
<?php endwhile; ?>
</main>
<?php get_footer(); ?>
