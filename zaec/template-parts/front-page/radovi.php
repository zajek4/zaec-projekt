<?php
/**
 * Odabrani stvarni projekti.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$projects_query = zaec_get_home_projects( 3 );
?>
<section id="radovi" class="sec sec-ink" data-theme="dark">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="deco deco-hatch" viewBox="0 0 600 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 140L140 0M75 140L215 0M150 140L290 0M225 140L365 0M300 140L440 0M375 140L515 0M450 140L590 0M525 140L665 0M600 140L740 0" class="d-o"/></svg>
	<span class="sec-num" data-plx="90" aria-hidden="true">07</span>
	<div class="wrap">
		<div class="sec-head">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'radovi_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'radovi_title' ) ); ?></h2>
			<p class="lead"><?php echo esc_html( zaec_front_field( 'radovi_lead' ) ); ?></p>
		</div>

		<?php if ( $projects_query->have_posts() ) : ?>
			<div class="projects">
				<?php
				$index = 0;
				while ( $projects_query->have_posts() ) :
					$projects_query->the_post();
					get_template_part(
						'template-parts/project-card',
						null,
						array(
							'project' => zaec_get_project_data( get_the_ID() ),
							'variant' => $index % 3,
						)
					);
					$index++;
				endwhile;
				wp_reset_postdata();
				?>
			</div>
			<?php
			$radovi_all = get_post_type_archive_link( 'projekti' );
			if ( ! $radovi_all ) {
				$radovi_all = zaec_home_anchor( 'radovi' );
			}
			?>
			<p class="projects-more"><a class="btn btn-line btn-arrow" href="<?php echo esc_url( $radovi_all ); ?>"><span><?php esc_html_e( 'Svi projekti', 'zaec' ); ?></span><svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg></a></p>
		<?php else : ?>
			<div class="projects-empty">
				<p class="kicker">[ STVARNI PROJEKTI ]</p>
				<h3><?php esc_html_e( 'Ne izmišljamo dokaze.', 'zaec' ); ?></h3>
				<p><?php esc_html_e( 'Ovdje prikazujemo projekte tek kada možemo jasno pokazati što je trebalo riješiti, što je isporučeno i koji je ishod stvarno potvrđen.', 'zaec' ); ?></p>
				<?php if ( current_user_can( 'edit_posts' ) ) : ?>
					<p class="projects-empty__admin"><?php esc_html_e( 'Admin: dodajte projekt kroz Projekti → Dodaj projekt i označite ga za naslovnicu.', 'zaec' ); ?></p>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
