<?php
/**
 * Reusable project card for the front page and project archive.
 *
 * @package ZAEC
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
$project = isset( $args['project'] ) && is_array( $args['project'] ) ? $args['project'] : array();
$variant = isset( $args['variant'] ) ? absint( $args['variant'] ) : 0;
$post_id = ! empty( $project['id'] ) ? absint( $project['id'] ) : 0;
$link    = ! empty( $project['permalink'] ) ? $project['permalink'] : ( $post_id ? get_permalink( $post_id ) : '' );
$meta    = array_filter( array( $project['service'] ?? '', $project['location'] ?? '', $project['year'] ?? '' ) );
?>
<article class="proj">
	<a class="proj-visual" href="<?php echo esc_url( $link ); ?>" aria-label="<?php echo esc_attr( sprintf( __( 'Pogledaj projekt: %s', 'zaec' ), $project['title'] ?? '' ) ); ?>">
		<?php if ( $post_id && has_post_thumbnail( $post_id ) ) : ?>
			<figure class="proj-mock proj-mock--image"><?php echo get_the_post_thumbnail( $post_id, 'zaec-card', array( 'sizes' => '(max-width: 760px) 100vw, 33vw', 'loading' => 'lazy' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></figure>
		<?php else : ?>
			<?php get_template_part( 'template-parts/front-page/project-mock', null, array( 'variant' => $variant ) ); ?>
		<?php endif; ?>
	</a>
	<div class="proj-info">
		<?php if ( ! empty( $project['code'] ) ) : ?><p class="proj-tag"><?php echo esc_html( $project['code'] ); ?></p><?php endif; ?>
		<h3><a href="<?php echo esc_url( $link ); ?>"><?php echo esc_html( $project['title'] ?? '' ); ?></a></h3>
		<?php if ( $meta ) : ?><p class="proj-pack"><?php echo esc_html( implode( ' · ', $meta ) ); ?></p><?php endif; ?>
		<?php if ( ! empty( $project['result'] ) ) : ?><p class="proj-res"><?php echo esc_html( $project['result'] ); ?></p><?php endif; ?>
		<a class="proj-link" href="<?php echo esc_url( $link ); ?>"><?php esc_html_e( 'Case study', 'zaec' ); ?> →</a>
	</div>
</article>
