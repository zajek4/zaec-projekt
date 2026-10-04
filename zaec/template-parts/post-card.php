<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$category = zaec_primary_category();
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-card' ); ?>>
<?php if ( has_post_thumbnail() ) : ?><a class="post-card__image" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true"><?php the_post_thumbnail( 'zaec-card', array( 'sizes' => '(max-width: 760px) 100vw, 50vw' ) ); ?></a><?php endif; ?>
<div class="post-card__meta"><?php if ( $category ) : ?><a href="<?php echo esc_url( get_category_link( $category ) ); ?>">[ <?php echo esc_html( $category->name ); ?> ]</a><?php endif; ?><time datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time></div>
<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
<?php if ( has_excerpt() ) : ?><p><?php echo esc_html( get_the_excerpt() ); ?></p><?php else : ?><p><?php echo esc_html( wp_trim_words( wp_strip_all_tags( get_the_content() ), 28 ) ); ?></p><?php endif; ?>
<a class="post-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Otvori zapis →', 'zaec' ); ?></a>
</article>
