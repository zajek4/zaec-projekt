<?php
/**
 * Single projekt — Showroom predložak.
 *
 * Projekt je glavni sadržaj: screenshotovi, priča, stvarni ishod i live link.
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
		$project          = zaec_get_project_data( get_the_ID() );
		$meta             = array_filter( array( $project['service'], $project['location'], $project['year'] ) );
		$desktop_image    = has_post_thumbnail() ? get_the_post_thumbnail_url( get_the_ID(), 'full' ) : '';
		if ( ! $desktop_image && ! empty( $project['image'] ) ) {
			$desktop_image = get_theme_file_uri( $project['image'] );
		}
		$mobile_image    = ! empty( $project['shot_mobile'] ) ? $project['shot_mobile'] : $desktop_image;
		$mobile_fallback  = empty( $project['shot_mobile'] ) && ! empty( $desktop_image );
		$post_content     = (string) get_post_field( 'post_content', get_the_ID() );
		$content_img_urls = array();
		if ( $post_content && preg_match_all( '/<img[^>]+src=["\']([^"\']+)["\']/i', $post_content, $matches ) ) {
			$content_img_urls = array_values( array_unique( array_filter( array_map( 'esc_url_raw', $matches[1] ) ) ) );
		}
		$screen_images = $content_img_urls;
		if ( ! empty( $project['shot_mobile'] ) ) {
			array_unshift( $screen_images, esc_url_raw( $project['shot_mobile'] ) );
		}
		$screen_images      = array_slice( array_values( array_unique( array_filter( $screen_images ) ) ), 0, 4 );
		$has_screen_scene   = ! empty( $screen_images );
		$technology_chips   = ! empty( $project['technologies'] ) ? preg_split( '/\s*[·,|]\s*/u', $project['technologies'], -1, PREG_SPLIT_NO_EMPTY ) : array();
		$has_data_scene     = ! empty( $project['result'] ) || ! empty( $project['service'] ) || ! empty( $project['location'] ) || ! empty( $project['year'] ) || ! empty( $technology_chips );
		$next_post          = get_next_post();
		$next_project       = $next_post instanceof WP_Post ? zaec_get_project_data( $next_post->ID ) : array();
		$next_image         = $next_post instanceof WP_Post && has_post_thumbnail( $next_post->ID ) ? get_the_post_thumbnail_url( $next_post->ID, 'zaec-card' ) : '';
		if ( ! $next_image && ! empty( $next_project['image'] ) ) {
			$next_image = get_theme_file_uri( $next_project['image'] );
		}
		?>
		<article <?php post_class( 'zaec-project-showroom' ); ?>>
			<section class="zaec-project-showroom-hero<?php echo $desktop_image ? '' : ' zaec-project-showroom-hero--no-device'; ?>" aria-labelledby="zaec-project-showroom-title">
				<div class="zaec-project-showroom-hero__media" aria-hidden="true">
					<?php if ( $desktop_image ) : ?><img src="<?php echo esc_url( $desktop_image ); ?>" alt="" fetchpriority="high" decoding="async"><?php endif; ?>
				</div>
				<div class="zaec-project-showroom-hero__veil" aria-hidden="true"></div>
				<div class="zaec-project-showroom-hero__grain" aria-hidden="true"></div>
				<div class="wrap zaec-project-showroom-hero__inner">
					<header class="zaec-project-showroom-intro" data-project-reveal>
						<?php if ( ! empty( $project['code'] ) ) : ?>
							<p class="zaec-project-kicker"><span>[ </span><span data-project-code><?php echo esc_html( $project['code'] ); ?></span><span> ]</span></p>
						<?php else : ?>
							<p class="zaec-project-kicker"><?php esc_html_e( '[ PROJEKT ]', 'zaec' ); ?></p>
						<?php endif; ?>
						<h1 id="zaec-project-showroom-title"><?php echo esc_html( get_the_title() ); ?></h1>
						<?php if ( $meta ) : ?><p class="zaec-project-showroom-meta"><?php echo esc_html( implode( ' · ', $meta ) ); ?></p><?php endif; ?>
						<?php if ( has_excerpt() ) : ?><p class="zaec-project-showroom-lead"><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?>
					</header>

					<?php if ( $desktop_image || $mobile_image ) : ?>
						<div class="zaec-project-showroom-devices" data-project-reveal aria-label="<?php esc_attr_e( 'Prikaz projekta na desktopu i mobitelu', 'zaec' ); ?>">
							<?php if ( $desktop_image ) : ?>
								<figure class="zaec-project-device zaec-project-device--laptop">
									<div class="zaec-project-device__screen"><img src="<?php echo esc_url( $desktop_image ); ?>" alt="<?php echo esc_attr( sprintf( __( 'Desktop prikaz projekta %s', 'zaec' ), get_the_title() ) ); ?>" fetchpriority="high" decoding="async"></div>
									<div class="zaec-project-device__base" aria-hidden="true"></div>
								</figure>
							<?php endif; ?>
							<?php if ( $mobile_image ) : ?>
								<figure class="zaec-project-device zaec-project-device--phone<?php echo $mobile_fallback ? ' zaec-project-device--crop-fallback' : ''; ?>">
									<div class="zaec-project-device__screen"><img src="<?php echo esc_url( $mobile_image ); ?>" alt="<?php echo esc_attr( sprintf( __( 'Mobilni prikaz projekta %s', 'zaec' ), get_the_title() ) ); ?>" loading="eager" decoding="async"></div>
								</figure>
							<?php endif; ?>
						</div>
					<?php endif; ?>

					<?php if ( ! empty( $project['website_url'] ) ) : ?>
						<div class="zaec-project-showroom-hero__cta" data-project-reveal>
							<a class="zaec-project-live" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><span><?php esc_html_e( 'Posjeti live', 'zaec' ); ?></span><b aria-hidden="true">↗</b></a>
						</div>
					<?php endif; ?>
				</div>
			</section>

			<?php if ( $has_data_scene ) : ?>
				<section class="zaec-project-showroom-data" aria-labelledby="zaec-project-data-title" data-project-scene>
					<div class="wrap">
						<p class="zaec-project-kicker" id="zaec-project-data-title"><?php esc_html_e( '[ KLJUČNI PODACI ]', 'zaec' ); ?></p>
						<div class="zaec-project-bento">
							<?php if ( ! empty( $project['result'] ) ) : ?><article class="zaec-project-bento__result"><span class="zaec-project-label"><?php esc_html_e( '[ ISHOD ]', 'zaec' ); ?></span><p><?php echo esc_html( $project['result'] ); ?></p></article><?php endif; ?>
							<?php if ( ! empty( $project['service'] ) ) : ?><article><span class="zaec-project-label"><?php esc_html_e( '[ DJELATNOST ]', 'zaec' ); ?></span><p><?php echo esc_html( $project['service'] ); ?></p></article><?php endif; ?>
							<?php if ( ! empty( $project['location'] ) ) : ?><article><span class="zaec-project-label"><?php esc_html_e( '[ LOKACIJA ]', 'zaec' ); ?></span><p><?php echo esc_html( $project['location'] ); ?></p></article><?php endif; ?>
							<?php if ( ! empty( $project['year'] ) ) : ?><article><span class="zaec-project-label"><?php esc_html_e( '[ GODINA ]', 'zaec' ); ?></span><p><?php echo esc_html( $project['year'] ); ?></p></article><?php endif; ?>
							<?php if ( $technology_chips ) : ?><article class="zaec-project-bento__tech"><span class="zaec-project-label"><?php esc_html_e( '[ TEHNOLOGIJE ]', 'zaec' ); ?></span><div class="zaec-project-chips"><?php foreach ( $technology_chips as $chip ) : ?><span><?php echo esc_html( trim( $chip ) ); ?></span><?php endforeach; ?></div></article><?php endif; ?>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( $has_screen_scene ) : ?>
				<section class="zaec-project-showroom-screens" aria-labelledby="zaec-project-screens-title" data-project-scene>
					<div class="wrap">
						<div class="zaec-project-showroom-scene-head"><p class="zaec-project-kicker" id="zaec-project-screens-title"><?php esc_html_e( '[ EKRANI ]', 'zaec' ); ?></p><p><?php esc_html_e( 'Detalj koji se vidi prije objašnjenja.', 'zaec' ); ?></p></div>
						<div class="zaec-project-screen-grid">
							<?php foreach ( $screen_images as $index => $screen_image ) : ?>
								<figure class="zaec-project-screen-card<?php echo 0 === $index && ! empty( $project['shot_mobile'] ) ? ' zaec-project-screen-card--mobile' : ''; ?>"><img src="<?php echo esc_url( $screen_image ); ?>" alt="<?php echo esc_attr( sprintf( __( 'Detalj ekrana projekta %s', 'zaec' ), get_the_title() ) ); ?>" loading="lazy" decoding="async"></figure>
							<?php endforeach; ?>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<section class="zaec-project-showroom-story" aria-labelledby="zaec-project-story-title" data-project-scene>
				<div class="zaec-project-story__progress" aria-hidden="true"><i data-story-progress></i></div>
				<div class="wrap">
					<p class="zaec-project-kicker" id="zaec-project-story-title"><?php esc_html_e( '[ PRIČA ]', 'zaec' ); ?></p>
					<div class="zaec-project-story__body">
						<?php the_content(); ?>
						<?php wp_link_pages(); ?>
					</div>
				</div>
			</section>

			<?php if ( ! empty( $project['website_url'] ) || $next_post instanceof WP_Post ) : ?>
				<section class="zaec-project-showroom-outro" data-project-scene>
					<div class="wrap">
						<?php if ( ! empty( $project['website_url'] ) ) : ?><a class="zaec-project-live zaec-project-live--large" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><span><?php esc_html_e( 'Posjeti projekt uživo', 'zaec' ); ?></span><b aria-hidden="true">↗</b></a><?php endif; ?>
						<?php if ( $next_post instanceof WP_Post ) : ?>
							<a class="zaec-project-next" href="<?php echo esc_url( get_permalink( $next_post ) ); ?>">
								<div class="zaec-project-next__media"><?php if ( $next_image ) : ?><img src="<?php echo esc_url( $next_image ); ?>" alt="" loading="lazy" decoding="async"><?php endif; ?></div>
								<div class="zaec-project-next__copy"><span class="zaec-project-kicker"><?php esc_html_e( '[ SLJEDEĆI PROJEKT ]', 'zaec' ); ?></span><strong><?php echo esc_html( get_the_title( $next_post ) ); ?></strong><b aria-hidden="true">↗</b></div>
							</a>
						<?php endif; ?>
					</div>
				</section>
			<?php endif; ?>
		</article>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
