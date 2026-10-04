<?php
/**
 * Progresivna forma: prvo cilj ("Što želite postići?"), zatim kontakt.
 * Bez JS-a oba koraka su vidljiva i forma radi kao klasični POST (admin-post.php).
 *
 * @package ZAEC
 * @var array $args { id }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$fid   = $args['id'] ?? 'kontakt-forma';
$state = isset( $_GET['zaec_form'] ) ? sanitize_key( wp_unslash( $_GET['zaec_form'] ) ) : ''; // phpcs:ignore
?>
<form class="cform cform--dark gform" id="<?php echo esc_attr( $fid ); ?>" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" novalidate data-contact-form data-goal-form data-kind="upit">
	<input type="hidden" name="action" value="zaec_inquiry">
	<input type="hidden" name="vrsta" value="upit">
	<input type="hidden" name="zaec_nonce" value="<?php echo esc_attr( wp_create_nonce( 'zaec_inquiry' ) ); ?>">
	<input type="hidden" name="izvor" value="">
	<input type="hidden" name="return_to" value="<?php echo esc_url( home_url( add_query_arg( array() ) ) ); ?>">
	<input type="hidden" name="started_at" value="<?php echo esc_attr( (string) time() ); ?>">
	<input type="hidden" name="konfiguracija" value="" data-config-field>
	<div class="hp" aria-hidden="true"><label>Ne ispunjavajte <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>

	<fieldset class="gform-step gform-step--goals" data-gstep="1">
		<legend class="gform-legend"><span class="mono">1 / 2</span> Što želite postići?</legend>
		<p class="gform-hint">Odaberite jedno ili više. Tehničke detalje složimo mi.</p>
		<div class="goals">
			<?php foreach ( zaec_home_goals() as $i => $g ) : ?>
				<label class="goal"><input type="checkbox" name="ciljevi[]" value="<?php echo esc_attr( $g ); ?>"><span><?php echo esc_html( $g ); ?></span></label>
			<?php endforeach; ?>
		</div>
		<div class="gform-nav">
			<button class="btn btn--light gform-next" type="button" data-gform-next>Dalje <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?></button>
			<span class="gform-picked mono" data-gform-picked aria-live="polite"></span>
		</div>
	</fieldset>

	<fieldset class="gform-step gform-step--contact" data-gstep="2" id="<?php echo esc_attr( $fid ); ?>-korak-2">
		<legend class="gform-legend"><span class="mono">2 / 2</span> Kome se javljamo?</legend>
		<div class="cform-config" data-config-chip hidden>
			<?php zaec_the_icon( 'clipboard-check', 18 ); ?>
			<div><b>Konfiguracija je priložena</b><span data-config-text></span></div>
			<button type="button" class="cform-x" data-config-clear aria-label="Ukloni priloženu konfiguraciju"><?php zaec_the_icon( 'close', 16 ); ?></button>
		</div>
		<div class="cform-grid">
			<div class="field field--full">
				<label for="<?php echo esc_attr( $fid ); ?>-tvrtka">Tvrtka ili obrt <span class="opt">(opcionalno)</span></label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-tvrtka" name="tvrtka" type="text" autocomplete="organization" maxlength="120" data-you-input>
			</div>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-ime">Ime i prezime</label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-ime" name="ime" type="text" autocomplete="name" required maxlength="80">
				<p class="field-error">Upišite ime da znamo kako vam se obratiti.</p>
			</div>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-kontakt">Telefon ili email</label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-kontakt" name="kontakt" type="text" inputmode="email" autocomplete="tel" required maxlength="120" placeholder="09x xxx xxxx">
				<p class="field-error">Trebamo broj telefona ili email za odgovor.</p>
			</div>
			<div class="field field--full">
				<label for="<?php echo esc_attr( $fid ); ?>-poruka">Kratko o poslu <span class="opt">(opcionalno)</span></label>
				<textarea class="textarea" id="<?php echo esc_attr( $fid ); ?>-poruka" name="poruka" rows="3" maxlength="3000" placeholder="npr. servis klima u Osijeku i okolici, želimo više upita za montažu…"></textarea>
			</div>
		</div>
		<div class="cform-foot">
			<button class="btn btn--signal cform-submit" type="submit" data-magnetic>
				<span class="btn-spin" aria-hidden="true"></span>
				Pošaljite upit <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?>
			</button>
			<p class="cform-privacy">Odgovaramo u radno vrijeme. Podatke koristimo samo za odgovor — bez newslettera i ustupanja trećima. <a href="<?php echo esc_url( zaec_url( 'privatnost' ) ); ?>">Privatnost</a></p>
		</div>
	</fieldset>
	<div class="cform-status<?php echo 'error' === $state ? ' is-error' : ''; ?>" role="status" aria-live="polite" data-status><?php echo 'error' === $state ? esc_html( 'Slanje nije uspjelo. Pokušajte ponovno ili nazovite ' . zaec_option( 'phone_display' ) . '.' ) : ''; ?></div>
</form>
