<?php
/**
 * Reusable project card for the front page and project archive.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$project = isset( $args['project'] ) && is_array( $args['project'] ) ? $args['project'] : array();
$variant = isset( $args['variant'] ) ? absint( $args['variant'] ) : 0;
$post_id = ! empty( $project['id'] ) ? absint( $project['id'] ) : 0;
$link    = ! empty( $project['permalink'] ) ? $project['permalink'] : ( ! empty( $project['website_url'] ) ? $project['website_url'] : '' );
$meta    = array_filter( array( $project['service'] ?? '', $project['location'] ?? '', $project['year'] ?? '' ) );
$title   = isset( $project['title'] ) ? (string) $project['title'] : '';
$image   = isset( $project['image'] ) ? (string) $project['image'] : '';
$image   = $image && 0 === strpos( $image, 'http' ) ? $image : ( $image ? get_theme_file_uri( $image ) : '' );
?>
<article class="proj">
	<a class="proj-visual" href="<?php echo esc_url( $link ); ?>" aria-label="<?php echo esc_attr( sprintf( __( 'Pogledaj projekt: %s', 'zaec' ), $title ) ); ?>">
		<?php if ( $post_id && has_post_thumbnail( $post_id ) ) : ?>
			<figure class="proj-mock proj-mock--image"><?php echo get_the_post_thumbnail( $post_id, 'zaec-card', array( 'sizes' => '(max-width: 760px) 100vw, 33vw', 'loading' => 'lazy' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></figure>
		<?php elseif ( $image ) : ?>
			<figure class="proj-mock proj-mock--image"><img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $title ); ?>" loading="lazy" decoding="async"></figure>
		<?php else : ?>
			<?php get_template_part( 'template-parts/front-page/project-mock', null, array( 'variant' => $variant ) ); ?>
		<?php endif; ?>
	</a>
	<div class="proj-info">
		<?php if ( ! empty( $project['code'] ) ) : ?><p class="proj-tag"><?php echo esc_html( $project['code'] ); ?></p><?php endif; ?>
		<h3><a href="<?php echo esc_url( $link ); ?>"><?php echo esc_html( $title ); ?></a></h3>
		<?php if ( $meta ) : ?><p class="proj-pack"><?php echo esc_html( implode( ' · ', $meta ) ); ?></p><?php endif; ?>
		<?php if ( ! empty( $project['result'] ) ) : ?><p class="proj-res"><?php echo esc_html( $project['result'] ); ?></p><?php endif; ?>
		<div class="proj-links">
			<?php if ( $post_id && ! empty( $project['permalink'] ) ) : ?><a class="proj-link" href="<?php echo esc_url( $project['permalink'] ); ?>"><?php esc_html_e( 'Case study', 'zaec' ); ?> →</a><?php endif; ?>
			<?php if ( ! empty( $project['website_url'] ) ) : ?>
				<a class="proj-link proj-link--live" href="<?php echo esc_url( $project['website_url'] ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Live', 'zaec' ); ?> ↗</a>
			<?php endif; ?>
		</div>
	</div>
</article>
