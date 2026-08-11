<?php
/**
 * HUD case-study predložak za CPT Projekti.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main" class="zaec-main zaec-project-single">
	<?php while ( have_posts() ) : the_post(); ?>
		<?php
		$project       = zaec_get_project_data( get_the_ID() );
		$meta          = array_filter( array( $project['service'], $project['location'], $project['year'] ) );
		$previous      = get_previous_post();
		$next          = get_next_post();
		$has_dossier   = ! empty( $project['result'] ) || ! empty( $project['technologies'] );
		$has_navigation = ! empty( $project['website_url'] ) || $previous instanceof WP_Post || $next instanceof WP_Post;
		$hero_image    = has_post_thumbnail() ? get_the_post_thumbnail_url( get_the_ID(), 'full' ) : '';
		if ( ! $hero_image && ! empty( $project['image'] ) ) {
			$hero_image = get_theme_file_uri( $project['image'] );
		}
		$technology_chips = array();
		if ( ! empty( $project['technologies'] ) ) {
			$technology_chips = preg_split( '/\s*[·,|]\s*/u', $project['technologies'], -1, PREG_SPLIT_NO_EMPTY );
		}
		?>
		<article <?php post_class( 'zaec-project-shell' ); ?>>
			<section class="zaec-project-hero<?php echo $hero_image ? '' : ' zaec-project-hero--no-image'; ?><?php echo $has_dossier ? '' : ' zaec-project-hero--no-dossier'; ?>" aria-labelledby="zaec-project-title">
				<div class="zaec-project-hero__media" aria-hidden="true">
					<?php if ( $hero_image ) : ?>
						<img src="<?php echo esc_url( $hero_image ); ?>" alt="" fetchpriority="high" decoding="async">
					<?php endif; ?>
				</div>
				<div class="zaec-project-hero__veil" aria-hidden="true"></div>
				<div class="zaec-project-hero__scanlines" aria-hidden="true"></div>

				<div class="wrap zaec-project-hud">
					<header class="zaec-project-panel zaec-project-intro" data-project-reveal>
						<?php if ( ! empty( $project['code'] ) ) : ?>
							<p class="zaec-project-kicker"><span>[ </span><span data-project-code><?php echo esc_html( $project['code'] ); ?></span><span> ]</span></p>
						<?php else : ?>
							<p class="zaec-project-kicker"><?php esc_html_e( '[ PROJEKT ]', 'zaec' ); ?></p>
						<?php endif; ?>
						<h1 id="zaec-project-title"><?php echo esc_html( get_the_title() ); ?></h1>
						<?php if ( $meta ) : ?>
							<p class="zaec-project-meta"><?php echo esc_html( implode( ' · ', $meta ) ); ?></p>
						<?php endif; ?>
					</header>

					<?php if ( $has_dossier ) : ?>
						<section class="zaec-project-panel zaec-project-dossier" aria-label="<?php esc_attr_e( 'Ishod i tehnologije projekta', 'zaec' ); ?>" data-project-reveal>
							<?php if ( ! empty( $project['result'] ) ) : ?>
								<div class="zaec-project-dossier__result">
									<span class="zaec-project-label"><?php esc_html_e( '[ ISHOD ]', 'zaec' ); ?></span>
									<p><?php echo esc_html( $project['result'] ); ?></p>
								</div>
							<?php endif; ?>
							<?php if ( $technology_chips ) : ?>
								<div class="zaec-project-dossier__tech">
									<span class="zaec-project-label"><?php esc_html_e( '[ TEHNOLOGIJE ]', 'zaec' ); ?></span>
									<div class="zaec-project-chips">
										<?php foreach ( $technology_chips as $chip ) : ?>
											<span><?php echo esc_html( trim( $chip ) ); ?></span>
										<?php endforeach; ?>
									</div>
								</div>
							<?php endif; ?>
						</section>
					<?php endif; ?>

					<?php if ( $has_navigation ) : ?>
						<aside class="zaec-project-panel zaec-project-actions" aria-label="<?php esc_attr_e( 'Akcije projekta', 'zaec' ); ?>" data-project-reveal>
							<?php if ( ! empty( $project['website_url'] ) ) : ?>
								<a class="zaec-project-live" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><span><?php esc_html_e( 'LIVE', 'zaec' ); ?></span><b aria-hidden="true">↗</b></a>
							<?php endif; ?>
							<?php if ( $previous instanceof WP_Post || $next instanceof WP_Post ) : ?>
								<nav class="zaec-project-adjacent" aria-label="<?php esc_attr_e( 'Prethodni i sljedeći projekt', 'zaec' ); ?>">
									<?php if ( $previous instanceof WP_Post ) : ?>
										<a href="<?php echo esc_url( get_permalink( $previous ) ); ?>"><span><?php esc_html_e( '← Prethodni', 'zaec' ); ?></span><b><?php echo esc_html( get_the_title( $previous ) ); ?></b></a>
									<?php endif; ?>
									<?php if ( $next instanceof WP_Post ) : ?>
										<a href="<?php echo esc_url( get_permalink( $next ) ); ?>"><span><?php esc_html_e( 'Sljedeći →', 'zaec' ); ?></span><b><?php echo esc_html( get_the_title( $next ) ); ?></b></a>
									<?php endif; ?>
								</nav>
							<?php endif; ?>
						</aside>
					<?php endif; ?>

					<section class="zaec-project-panel zaec-project-content-panel" aria-labelledby="zaec-project-content-title" data-project-reveal>
						<p class="zaec-project-label" id="zaec-project-content-title"><?php esc_html_e( '[ CASE STUDY ]', 'zaec' ); ?></p>
						<div class="zaec-project-content-scroll">
							<?php if ( has_excerpt() ) : ?><p class="zaec-project-excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?>
							<div class="zaec-project-content">
								<?php the_content(); ?>
								<?php wp_link_pages(); ?>
							</div>
						</div>
					</section>
				</div>
			</section>
		</article>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
