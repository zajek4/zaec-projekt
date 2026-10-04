<?php
/**
 * 404.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="nf">
	<div>
		<img src="<?php echo esc_url( zaec_img( 'world/islet.webp' ) ); ?>" alt="" width="900" height="900">
		<p class="kicker" style="justify-content:center">Greška 404</p>
		<h1 class="h2" style="margin-top:16px">Ovaj otočić je <em>odlutao</em>.</h1>
		<p>Stranica koju tražite ne postoji ili je premještena. Upiti su ipak i dalje dobrodošli.</p>
		<div class="links">
			<?php echo zaec_button( 'Na naslovnicu', home_url( '/' ) ); // phpcs:ignore ?>
			<a class="btn btn--ghost" href="<?php echo esc_url( zaec_url( 'usluge' ) ); ?>">Usluge</a>
			<a class="btn btn--ghost" href="<?php echo esc_url( zaec_url( 'kontakt' ) ); ?>">Kontakt</a>
		</div>
	</div>
</section>
<?php
get_footer();
