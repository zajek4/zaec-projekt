<?php
/**
 * Forma za upit ili provjeru vidljivosti. Radi i bez JS-a (admin-post.php).
 *
 * @package ZAEC
 * @var array $args { id, kind: upit|provjera, theme: light|dark, rows, inline: potvrda na mjestu umjesto /hvala/ }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$fid   = $args['id'] ?? 'upit-forma';
$kind  = $args['kind'] ?? 'upit';
$dark  = 'dark' === ( $args['theme'] ?? 'light' );
$state = isset( $_GET['zaec_form'] ) ? sanitize_key( wp_unslash( $_GET['zaec_form'] ) ) : ''; // phpcs:ignore
$audit = 'provjera' === $kind;
$rows  = max( 2, (int) ( $args['rows'] ?? 4 ) );
$err   = static fn( $f ) => esc_attr( $fid . '-' . $f . '-err' );
?>
<form class="cform<?php echo $dark ? ' cform--dark' : ''; ?>" id="<?php echo esc_attr( $fid ); ?>" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post" novalidate data-contact-form data-kind="<?php echo esc_attr( $kind ); ?>"<?php echo ! empty( $args['inline'] ) ? ' data-inline-success' : ''; ?>>
	<?php if ( ! $audit ) : ?>
		<div class="cform-config" data-config-chip hidden>
			<?php zaec_the_icon( 'clipboard-check', 18 ); ?>
			<div><b>Konfiguracija je priložena</b><span data-config-text></span></div>
			<button type="button" class="cform-x" data-config-clear aria-label="Ukloni priloženu konfiguraciju"><?php zaec_the_icon( 'close', 16 ); ?></button>
		</div>
		<input type="hidden" name="konfiguracija" value="" data-config-field>
	<?php endif; ?>
	<input type="hidden" name="action" value="zaec_inquiry">
	<input type="hidden" name="vrsta" value="<?php echo esc_attr( $kind ); ?>">
	<input type="hidden" name="zaec_nonce" value="<?php echo esc_attr( wp_create_nonce( 'zaec_inquiry' ) ); ?>">
	<input type="hidden" name="izvor" value="">
	<input type="hidden" name="return_to" value="<?php echo esc_url( home_url( add_query_arg( array() ) ) ); ?>">
	<input type="hidden" name="started_at" value="<?php echo esc_attr( (string) time() ); ?>">
	<div class="hp" aria-hidden="true"><label>Ne ispunjavajte <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>

	<div class="cform-grid">
		<?php if ( $audit ) : ?>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-tvrtka">Naziv tvrtke ili obrta</label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-tvrtka" name="tvrtka" type="text" autocomplete="organization" required aria-required="true" maxlength="120">
				<p class="field-error" id="<?php echo $err( 'tvrtka' ); // phpcs:ignore ?>">Upišite naziv tvrtke koju provjeravamo.</p>
			</div>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-mjesto">Grad / mjesto</label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-mjesto" name="mjesto" type="text" autocomplete="address-level2" maxlength="80" placeholder="npr. Osijek">
			</div>
			<div class="field field--full">
				<label for="<?php echo esc_attr( $fid ); ?>-web">Web adresa <span class="opt">(ako postoji)</span></label>
				<input class="input" id="<?php echo esc_attr( $fid ); ?>-web" name="web" type="url" inputmode="url" maxlength="200" placeholder="https://">
			</div>
		<?php endif; ?>
		<div class="field">
			<label for="<?php echo esc_attr( $fid ); ?>-ime">Ime i prezime</label>
			<input class="input" id="<?php echo esc_attr( $fid ); ?>-ime" name="ime" type="text" autocomplete="name" required aria-required="true" maxlength="80">
			<p class="field-error" id="<?php echo $err( 'ime' ); // phpcs:ignore ?>">Upišite ime da znamo kako vam se obratiti.</p>
		</div>
		<div class="field">
			<label for="<?php echo esc_attr( $fid ); ?>-kontakt">Telefon ili email</label>
			<input class="input" id="<?php echo esc_attr( $fid ); ?>-kontakt" name="kontakt" type="text" autocomplete="tel" required aria-required="true" aria-describedby="<?php echo esc_attr( $fid ); ?>-kontakt-hint" maxlength="120" placeholder="09x xxx xxxx ili ime@tvrtka.hr" spellcheck="false" autocapitalize="off">
			<p class="field-error" id="<?php echo $err( 'kontakt' ); // phpcs:ignore ?>">Trebamo broj telefona ili email za odgovor.</p>
			<p class="field-hint" id="<?php echo esc_attr( $fid ); ?>-kontakt-hint" data-kontakt-hint></p>
		</div>
		<?php if ( ! $audit ) : ?>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-djelatnost">Djelatnost <span class="opt">(opcionalno)</span></label>
				<select class="select" id="<?php echo esc_attr( $fid ); ?>-djelatnost" name="djelatnost">
					<option value="">Odaberite…</option>
					<?php foreach ( zaec_sectors() as $key => $sec ) : ?>
						<option value="<?php echo esc_attr( $sec['name'] ); ?>" data-sector="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $sec['name'] ); ?></option>
					<?php endforeach; ?>
					<option value="<?php echo esc_attr( ZAEC_SECTOR_OTHER['name'] ); ?>" data-sector="<?php echo esc_attr( ZAEC_SECTOR_OTHER['key'] ); ?>"><?php echo esc_html( ZAEC_SECTOR_OTHER['name'] ); ?></option>
				</select>
			</div>
			<div class="field">
				<label for="<?php echo esc_attr( $fid ); ?>-usluga">Što trebate? <span class="opt">(opcionalno)</span></label>
				<select class="select" id="<?php echo esc_attr( $fid ); ?>-usluga" name="usluga">
					<option value="">Još ne znam</option>
					<option>Web stranica</option>
					<option>Landing stranica</option>
					<option>Webshop</option>
					<option>Redizajn postojećeg weba</option>
					<option>SEO / lokalni SEO</option>
					<option>Google Business profil</option>
					<option>AI vidljivost</option>
					<option>GA4 i praćenje konverzija</option>
					<option>Održavanje</option>
				</select>
			</div>
		<?php endif; ?>
		<div class="field field--full">
			<label for="<?php echo esc_attr( $fid ); ?>-poruka"><?php echo $audit ? 'Što vas najviše zanima?' : 'Kratko o poslu'; ?> <span class="opt">(opcionalno)</span></label>
			<textarea class="textarea" id="<?php echo esc_attr( $fid ); ?>-poruka" name="poruka" rows="<?php echo esc_attr( (string) $rows ); ?>" maxlength="3000" placeholder="<?php echo esc_attr( $audit ? 'npr. zašto nas nema na karti, koliko zaostajemo za konkurencijom…' : 'npr. čime se bavite, za koga i što želite da web radi bolje' ); ?>"></textarea>
			<p class="field-error" id="<?php echo $err( 'poruka' ); // phpcs:ignore ?>">Poruka smije imati najviše tri poveznice.</p>
		</div>
	</div>

	<div class="cform-foot">
		<button class="btn btn--signal cform-submit" type="submit" data-magnetic>
			<span class="btn-spin" aria-hidden="true"></span>
			<?php echo $audit ? 'Pošalji za besplatnu provjeru' : 'Pošaljite upit'; ?> <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?>
		</button>
		<p class="cform-privacy">Podatke koristimo samo za odgovor. Bez newslettera i ustupanja trećima. <a href="<?php echo esc_url( zaec_url( 'privatnost' ) ); ?>">Privatnost</a></p>
	</div>
	<?php if ( ! empty( $args['inline'] ) ) : ?>
		<div class="cform-done" data-done data-hours="<?php echo esc_attr( (string) zaec_option( 'hours' ) ); ?>" hidden tabindex="-1">
			<p class="cform-done-t">Upit je stigao.</p>
			<p data-done-via>Javljamo se u radno vrijeme.</p>
		</div>
	<?php endif; ?>
	<div class="cform-status<?php echo 'error' === $state ? ' is-error' : ''; ?>" role="status" aria-live="polite" data-status><?php echo 'error' === $state ? esc_html( 'Slanje nije uspjelo. Pokušajte ponovno ili nazovite ' . zaec_option( 'phone_display' ) . '.' ) : ''; ?></div>
</form>
