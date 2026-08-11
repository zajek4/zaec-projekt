<?php
/**
 * Contact / inquiry section.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$options    = zaec_get_options();
$form_state = isset( $_GET['zaec_form'] ) ? sanitize_key( wp_unslash( $_GET['zaec_form'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
$form_sent  = ( 'sent' === $form_state );
$form_error = ( 'error' === $form_state );
$success_msg = ! empty( $options['form_success_message'] )
	? $options['form_success_message']
	: __( 'Upit je stigao. Javimo se u radno vrijeme.', 'zaec' );

$activities = array(
	'Klimatizacija, grijanje, hlađenje',
	'Vodovod i instalacije',
	'Elektrika',
	'Krovopokrivanje i limarija',
	'Građevina i adaptacije',
	'Ugostiteljstvo, smještaj, turizam',
	'Trgovina, proizvodnja, webshop',
	'Uslužne djelatnosti',
	'Nešto sasvim drugo',
);
?>
<section id="upit" class="sec sec-ink sec-final" data-theme="dark">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<canvas id="upitParticles" aria-hidden="true"></canvas>
	<div class="final-veil" aria-hidden="true"></div>
	<svg class="wm wm-upit" viewBox="0 0 100 100" data-plx="60" aria-hidden="true"><use href="#zMon"/></svg>
	<span class="sec-num" data-plx="70" aria-hidden="true">10</span>

	<div class="wrap final-grid">
		<div class="final-left">
			<div class="sec-head">
				<p class="kicker"><?php echo esc_html( zaec_front_field( 'upit_kicker' ) ); ?></p>
				<h2><?php echo esc_html( zaec_front_field( 'upit_title' ) ); ?></h2>
				<p class="lead"><?php echo esc_html( zaec_front_field( 'upit_lead' ) ); ?></p>
			</div>

			<form
				id="inquiryForm"
				class="form-wrap"
				action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>"
				method="post"
				novalidate
				<?php echo $form_sent ? ' hidden' : ''; ?>
			>
				<input type="hidden" name="action" value="zaec_inquiry">
				<input type="hidden" name="zaec_nonce" value="<?php echo esc_attr( wp_create_nonce( 'zaec_inquiry' ) ); ?>">
				<input type="hidden" name="started_at" value="<?php echo esc_attr( (string) time() ); ?>">
				<input type="hidden" id="fPaket" name="paket" value="">

				<div class="zaec-hp" aria-hidden="true">
					<label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>
				</div>

				<div class="f-row">
					<div class="f-field">
						<label for="fIme"><?php esc_html_e( 'Ime i prezime', 'zaec' ); ?></label>
						<input type="text" id="fIme" name="ime" autocomplete="name" aria-describedby="fImeErr" required>
						<span class="f-err" id="fImeErr"><?php esc_html_e( 'Upišite ime.', 'zaec' ); ?></span>
					</div>
					<div class="f-field">
						<label for="fKontakt"><?php esc_html_e( 'Telefon ili email', 'zaec' ); ?></label>
						<input type="text" id="fKontakt" name="kontakt" autocomplete="tel" aria-describedby="fKontaktErr" required>
						<span class="f-err" id="fKontaktErr"><?php esc_html_e( 'Upišite ispravan telefon ili email.', 'zaec' ); ?></span>
					</div>
				</div>

				<div class="f-field">
					<label for="fDjelatnost"><?php esc_html_e( 'Čime se bavite', 'zaec' ); ?></label>
					<div class="f-select">
						<select id="fDjelatnost" name="djelatnost" aria-describedby="fDjelatnostErr" required>
							<option value="" selected disabled><?php esc_html_e( 'Odaberite djelatnost', 'zaec' ); ?></option>
							<?php foreach ( $activities as $activity ) : ?>
								<option value="<?php echo esc_attr( $activity ); ?>"><?php echo esc_html( $activity ); ?></option>
							<?php endforeach; ?>
						</select>
						<svg class="ar ar-d" aria-hidden="true"><use href="#ic-arrow-d"/></svg>
					</div>
					<span class="f-err" id="fDjelatnostErr"><?php esc_html_e( 'Odaberite djelatnost.', 'zaec' ); ?></span>
				</div>

				<div class="f-field">
					<label for="fSmjer"><?php esc_html_e( 'Što vam treba', 'zaec' ); ?></label>
					<div class="f-select">
						<select id="fSmjer" name="smjer">
							<option value="ne-znam" selected><?php esc_html_e( 'Još ne znam — savjetujte me', 'zaec' ); ?></option>
							<option value="predlozak"><?php esc_html_e( 'Predložak (brže / povoljnije)', 'zaec' ); ?></option>
							<option value="po-nacrtu"><?php esc_html_e( 'Po nacrtu (custom)', 'zaec' ); ?></option>
						</select>
						<svg class="ar ar-d" aria-hidden="true"><use href="#ic-arrow-d"/></svg>
					</div>
				</div>

				<div class="f-field">
					<label for="fPoruka"><?php esc_html_e( 'Poruka', 'zaec' ); ?> <span class="f-opt"><?php esc_html_e( '(nije obavezno)', 'zaec' ); ?></span></label>
					<textarea id="fPoruka" name="poruka" rows="4" placeholder="<?php esc_attr_e( 'Opišite što nudite, kome se trebaju javiti i što vam danas nedostaje.', 'zaec' ); ?>"></textarea>
				</div>

				<button type="submit" class="btn btn-signal btn-arrow f-submit" id="fSubmit">
					<span><?php esc_html_e( 'Pošalji upit', 'zaec' ); ?></span>
					<svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg>
				</button>

				<p class="f-fine"><?php echo esc_html( zaec_front_field( 'upit_privacy' ) ); ?></p>
				<p id="formStatus" class="f-status" role="status" aria-live="polite">
					<?php
					if ( $form_error ) {
						esc_html_e( 'Upit nije poslan. Provjerite podatke ili pokušajte ponovno.', 'zaec' );
					}
					?>
				</p>
			</form>

			<div class="form-success" id="formSuccess" tabindex="-1"<?php echo $form_sent ? '' : ' hidden'; ?>>
				<svg class="fs-anim" viewBox="0 0 72 72" aria-hidden="true">
					<rect class="fs-box" x="6" y="6" width="60" height="60" fill="none" stroke-width="2"/>
					<path class="fs-tick" d="M22 37.5l10 10L51 27" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<h3><?php echo esc_html( $success_msg ); ?></h3>
				<p>
					<?php esc_html_e( 'Hitno?', 'zaec' ); ?>
					<?php esc_html_e( 'Nazovite', 'zaec' ); ?>
					<a href="tel:<?php echo esc_attr( zaec_phone_href( $options['phone_raw'] ) ); ?>"><?php echo esc_html( $options['phone_display'] ); ?></a>.
				</p>
			</div>
		</div>

		<aside class="call-card">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'call_kicker' ) ); ?></p>
			<a class="call-tel" href="tel:<?php echo esc_attr( zaec_phone_href( $options['phone_raw'] ) ); ?>"><?php echo esc_html( $options['phone_display'] ); ?></a>
			<p class="call-meta"><?php echo esc_html( $options['hours'] . ' · ' . $options['location'] ); ?></p>
			<i class="call-sep" aria-hidden="true"></i>
			<?php if ( ! empty( $options['show_public_email'] ) && '1' === (string) $options['show_public_email'] && ! empty( $options['email'] ) ) : ?>
				<a class="call-mail" href="mailto:<?php echo esc_attr( $options['email'] ); ?>"><?php echo esc_html( $options['email'] ); ?></a>
			<?php else : ?>
				<p class="call-mail call-mail--private"><?php esc_html_e( 'Email nije javni — odgovaramo na upit s forme.', 'zaec' ); ?></p>
			<?php endif; ?>
			<p class="call-note"><?php echo esc_html( zaec_front_field( 'call_note' ) ); ?></p>
		</aside>
	</div>
</section>
