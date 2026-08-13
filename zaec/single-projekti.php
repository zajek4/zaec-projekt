<?php
/**
 * Single projekt — Tehnički dosje (Blueprint Case Study v2).
 *
 * Projekt je dokaz: browser preview, strukturirani dosje, priča, ekrani i
 * sljedeći korak. Sve sekcije su uvjetne prema stvarnim podacima — nema
 * praznih scena ni izmišljenih ishoda.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main" class="zaec-case">
	<?php while ( have_posts() ) : the_post(); ?>
		<?php
		$project       = zaec_get_project_data( get_the_ID() );
		$desktop_image = has_post_thumbnail() ? get_the_post_thumbnail_url( get_the_ID(), 'full' ) : '';
		if ( ! $desktop_image && ! empty( $project['image'] ) ) {
			$desktop_image = get_theme_file_uri( $project['image'] );
		}

		$mobile_image    = ! empty( $project['shot_mobile'] ) ? $project['shot_mobile'] : '';
		$post_content    = (string) get_post_field( 'post_content', get_the_ID() );
		$has_story       = '' !== trim( wp_strip_all_tags( $post_content ) );
		$content_img_urls = array();
		if ( $post_content && preg_match_all( '/<img[^>]+src=["\']([^"\']+)["\']/i', $post_content, $matches ) ) {
			$content_img_urls = array_values( array_unique( array_filter( array_map( 'esc_url_raw', $matches[1] ) ) ) );
		}

		$screen_items = array();
		if ( $desktop_image ) {
			$screen_items[] = array( 'url' => $desktop_image, 'label' => '[ DESKTOP ]', 'class' => '' );
		}
		if ( $mobile_image ) {
			$screen_items[] = array( 'url' => esc_url_raw( $mobile_image ), 'label' => '[ MOBILE ]', 'class' => ' zaec-case-shot--mobile' );
		}
		foreach ( $content_img_urls as $content_img_url ) {
			$screen_items[] = array( 'url' => $content_img_url, 'label' => '[ DETALJ ]', 'class' => '' );
		}
		$screen_items     = array_slice( $screen_items, 0, 6 );
		$gallery_items    = $screen_items;
		if ( $desktop_image && count( $gallery_items ) === 1 ) {
			$gallery_items = array(); // Samo desktop screenshot — heroj ga već prikazuje.
		}
		$has_screens      = count( $gallery_items ) > 0;
		$technology_chips = ! empty( $project['technologies'] ) ? preg_split( '/\s*[·,|]\s*/u', $project['technologies'], -1, PREG_SPLIT_NO_EMPTY ) : array();
		$has_spec_rows    = ! empty( $project['service'] ) || ! empty( $project['location'] ) || ! empty( $project['year'] ) || ! empty( $technology_chips );
		$has_result       = ! empty( $project['result'] );
		$has_spec         = $has_spec_rows || $has_result;
		$spec_grid_class  = 'zaec-case-spec__grid';
		if ( $has_spec_rows && ! $has_result ) {
			$spec_grid_class .= ' zaec-case-spec__grid--single';
		} elseif ( ! $has_spec_rows && $has_result ) {
			$spec_grid_class .= ' zaec-case-spec__grid--result';
		}

		$host = '';
		if ( ! empty( $project['website_url'] ) ) {
			$parsed = wp_parse_url( $project['website_url'] );
			$host   = isset( $parsed['host'] ) ? $parsed['host'] : '';
		}

		$next_post     = get_next_post();
		$next_project  = $next_post instanceof WP_Post ? zaec_get_project_data( $next_post->ID ) : array();
		$next_image    = $next_post instanceof WP_Post && has_post_thumbnail( $next_post->ID ) ? get_the_post_thumbnail_url( $next_post->ID, 'zaec-card' ) : '';
		if ( ! $next_image && ! empty( $next_project['image'] ) ) {
			$next_image = get_theme_file_uri( $next_project['image'] );
		}
		$has_outro = ! empty( $project['website_url'] ) || $next_post instanceof WP_Post;

		/*
		 * Rail i progress ovise o stvarno renderiranim sekcijama.
		 * Redoslijed je fiksan; preskaču se samo prazne sekcije.
		 */
		$sections = array(
			'pregled' => array( 'num' => '00', 'label' => __( 'Pregled', 'zaec' ), 'on' => true ),
			'dosje'   => array( 'num' => '01', 'label' => __( 'Dosje', 'zaec' ), 'on' => $has_spec ),
			'prica'   => array( 'num' => '02', 'label' => __( 'Priča', 'zaec' ), 'on' => $has_story ),
			'ekrani'  => array( 'num' => '03', 'label' => __( 'Ekrani', 'zaec' ), 'on' => $has_screens ),
			'outro'   => array( 'num' => '04', 'label' => __( 'Dalje', 'zaec' ), 'on' => $has_outro ),
		);
		?>
		<article <?php post_class(); ?>>
			<div class="zaec-case-progress" aria-hidden="true"><i data-case-progress></i></div>

			<?php $rail_count = count( array_filter( wp_list_pluck( $sections, 'on' ) ) ); if ( $rail_count > 1 ) : ?>
			<nav class="zaec-case-rail" aria-label="<?php esc_attr_e( 'Sekcije projekta', 'zaec' ); ?>">
				<div class="zaec-case-rail__line" aria-hidden="true"><i data-case-railfill></i></div>
				<div class="zaec-case-rail__dots">
					<?php foreach ( $sections as $id => $sec ) : ?>
						<?php if ( $sec['on'] ) : ?>
							<a href="#<?php echo esc_attr( $id ); ?>" data-case-rail="<?php echo esc_attr( $id ); ?>"<?php echo 'pregled' === $id ? ' class="on"' : ''; ?>><span><?php echo esc_html( $sec['num'] ); ?></span><em><?php echo esc_html( $sec['label'] ); ?></em></a>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			</nav>
			<?php endif; ?>

			<section id="pregled" class="zaec-case-hero<?php echo $desktop_image ? '' : ' zaec-case-hero--no-preview'; ?>" aria-labelledby="zaec-case-title">
				<div class="zaec-case-hero__bg" aria-hidden="true"></div>
				<span class="zaec-case-sec-num" aria-hidden="true">00</span>
				<div class="wrap zaec-case-hero__inner">
					<header class="zaec-case-intro" data-case-reveal>
						<p class="zaec-case-kicker"><span>[</span><span><?php esc_html_e( 'PROJEKT · ', 'zaec' ); ?></span><?php if ( ! empty( $project['code'] ) ) : ?><span data-case-code><?php echo esc_html( $project['code'] ); ?></span><?php else : ?><span><?php esc_html_e( 'CASE STUDY', 'zaec' ); ?></span><?php endif; ?><span> ]</span></p>
						<h1 id="zaec-case-title"><?php echo esc_html( get_the_title() ); ?></h1>
						<?php if ( has_excerpt() ) : ?><p class="zaec-case-lead"><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?>
						<?php if ( ! empty( $project['website_url'] ) ) : ?>
							<div class="zaec-case-hero__actions">
								<a class="zaec-case-live" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><span><?php esc_html_e( 'Posjeti live', 'zaec' ); ?></span><b aria-hidden="true">↗</b></a>
							</div>
						<?php endif; ?>
					</header>

					<?php if ( $desktop_image ) : ?>
						<div class="zaec-case-preview" data-case-reveal data-case-preview>
							<figure class="zaec-case-browser">
								<div class="zaec-case-browser__bar" aria-hidden="true"><i></i><i></i><i></i><?php if ( $host ) : ?><span><?php echo esc_html( $host ); ?></span><?php endif; ?></div>
								<div class="zaec-case-browser__screen">
									<img src="<?php echo esc_url( $desktop_image ); ?>" alt="<?php echo esc_attr( sprintf( __( 'Desktop prikaz projekta %s', 'zaec' ), get_the_title() ) ); ?>" fetchpriority="high" decoding="async">
								</div>
							</figure>
							<span class="zaec-case-crops" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
						</div>
					<?php endif; ?>
				</div>
				<div class="zaec-case-scrollcue" aria-hidden="true"><span><?php esc_html_e( 'Scroll', 'zaec' ); ?></span><i></i></div>
			</section>

			<?php if ( $has_spec ) : ?>
				<section id="dosje" class="zaec-case-sec zaec-case-spec" data-case-scene aria-labelledby="zaec-case-spec-title">
					<span class="zaec-case-sec-num" aria-hidden="true">01</span>
					<div class="wrap">
						<header class="zaec-case-head">
							<p class="zaec-case-kicker" id="zaec-case-spec-title"><?php esc_html_e( '[ DOSJE ]', 'zaec' ); ?></p>
							<h2><?php esc_html_e( 'Ključni podaci', 'zaec' ); ?></h2>
						</header>
						<div class="<?php echo esc_attr( $spec_grid_class ); ?>">
							<dl class="zaec-case-spec__list">
								<?php
								$spec_rows = array(
									__( 'Usluga', 'zaec' )   => $project['service'],
									__( 'Lokacija', 'zaec' ) => $project['location'],
									__( 'Godina', 'zaec' )   => $project['year'],
								);
								$row_i = 0;
								foreach ( $spec_rows as $spec_label => $spec_value ) :
									if ( '' === (string) $spec_value ) {
										continue;
									}
									$row_i++;
									?>
									<div class="zaec-case-spec__row">
										<dt><span><?php echo esc_html( str_pad( (string) $row_i, 2, '0', STR_PAD_LEFT ) ); ?></span><?php echo esc_html( $spec_label ); ?></dt>
										<dd><?php echo esc_html( $spec_value ); ?></dd>
									</div>
								<?php endforeach; ?>
								<?php if ( $technology_chips ) : $row_i++; ?>
									<div class="zaec-case-spec__row">
										<dt><span><?php echo esc_html( str_pad( (string) $row_i, 2, '0', STR_PAD_LEFT ) ); ?></span><?php esc_html_e( 'Tehnologije', 'zaec' ); ?></dt>
										<dd><div class="zaec-case-chips"><?php foreach ( $technology_chips as $chip ) : ?><span><?php echo esc_html( trim( $chip ) ); ?></span><?php endforeach; ?></div></dd>
									</div>
								<?php endif; ?>
							</dl>

							<?php if ( $has_result ) : ?>
								<aside class="zaec-case-outcome">
									<p class="zaec-case-kicker"><?php esc_html_e( '[ ISHOD ]', 'zaec' ); ?></p>
									<blockquote><p><?php echo esc_html( $project['result'] ); ?></p></blockquote>
								</aside>
							<?php endif; ?>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( $has_story ) : ?>
				<section id="prica" class="zaec-case-sec zaec-case-story" data-case-scene aria-labelledby="zaec-case-story-title">
					<span class="zaec-case-sec-num" aria-hidden="true">02</span>
					<div class="zaec-case-story__progress" aria-hidden="true"><i data-case-story-progress></i></div>
					<div class="wrap">
						<header class="zaec-case-head">
							<p class="zaec-case-kicker" id="zaec-case-story-title"><?php esc_html_e( '[ PRIČA ]', 'zaec' ); ?></p>
							<h2><?php esc_html_e( 'Kako je projekt nastao', 'zaec' ); ?></h2>
						</header>
						<div class="zaec-case-story__body">
							<?php the_content(); ?>
							<?php wp_link_pages(); ?>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( $has_screens ) : ?>
				<section id="ekrani" class="zaec-case-sec zaec-case-screens" data-case-scene aria-labelledby="zaec-case-screens-title">
					<span class="zaec-case-sec-num" aria-hidden="true">03</span>
					<div class="wrap">
						<header class="zaec-case-head">
							<p class="zaec-case-kicker" id="zaec-case-screens-title"><?php esc_html_e( '[ EKRANI ]', 'zaec' ); ?></p>
							<h2><?php esc_html_e( 'Izvedba', 'zaec' ); ?></h2>
							<p class="zaec-case-head__note"><?php esc_html_e( 'Svaki ekran nosi svoj dio priče.', 'zaec' ); ?></p>
						</header>
						<div class="zaec-case-gallery" data-case-gallery>
							<div class="zaec-case-gallery__viewport" data-case-gallery-viewport>
								<div class="zaec-case-gallery__track" data-case-gallery-track>
									<?php foreach ( $gallery_items as $screen_item ) : ?>
										<figure class="zaec-case-shot<?php echo esc_attr( $screen_item['class'] ); ?>">
											<div class="zaec-case-shot__media"><img src="<?php echo esc_url( $screen_item['url'] ); ?>" alt="<?php echo esc_attr( sprintf( __( 'Prikaz projekta %s', 'zaec' ), get_the_title() ) ); ?>" loading="lazy" decoding="async"></div>
											<figcaption><?php echo esc_html( $screen_item['label'] ); ?></figcaption>
										</figure>
									<?php endforeach; ?>
								</div>
							</div>
							<div class="zaec-case-gallery__ui" aria-hidden="true"><span data-case-gallery-index>01 / <?php echo esc_html( str_pad( (string) count( $gallery_items ), 2, '0', STR_PAD_LEFT ) ); ?></span><i><b data-case-gallery-progress></b></i></div>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( $has_outro ) : ?>
				<section id="outro" class="zaec-case-sec zaec-case-outro" data-case-scene aria-labelledby="zaec-case-outro-title">
					<span class="zaec-case-sec-num" aria-hidden="true">04</span>
					<div class="wrap">
						<?php if ( ! empty( $project['website_url'] ) ) : ?>
							<div class="zaec-case-outro__cta">
								<p class="zaec-case-kicker" id="zaec-case-outro-title"><?php esc_html_e( '[ DALJE ]', 'zaec' ); ?></p>
								<h2><?php esc_html_e( 'Pogledajte ga uživo.', 'zaec' ); ?></h2>
								<a class="zaec-case-live zaec-case-live--large" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><span><?php esc_html_e( 'Posjeti projekt uživo', 'zaec' ); ?></span><b aria-hidden="true">↗</b></a>
							</div>
						<?php elseif ( $next_post instanceof WP_Post ) : ?>
							<p class="zaec-case-kicker" id="zaec-case-outro-title"><?php esc_html_e( '[ DALJE ]', 'zaec' ); ?></p>
						<?php endif; ?>

						<?php if ( $next_post instanceof WP_Post ) : ?>
							<a class="zaec-case-next" href="<?php echo esc_url( get_permalink( $next_post ) ); ?>">
								<div class="zaec-case-next__media"><?php if ( $next_image ) : ?><img src="<?php echo esc_url( $next_image ); ?>" alt="" loading="lazy" decoding="async"><?php endif; ?></div>
								<div class="zaec-case-next__copy">
									<span class="zaec-case-kicker"><?php esc_html_e( '[ SLJEDEĆI PROJEKT ]', 'zaec' ); ?></span>
									<strong><?php echo esc_html( get_the_title( $next_post ) ); ?></strong>
									<b aria-hidden="true">↗</b>
								</div>
							</a>
						<?php endif; ?>
					</div>
				</section>
			<?php endif; ?>
		</article>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
