<?php
/**
 * Procjena projekta — opseg + okvirni rok → pisana ponuda (bez javne cijene).
 *
 * @package ZAEC
 * @var array $args { id, form_target }
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$cid    = $args['id'] ?? 'konfigurator';
$target = $args['form_target'] ?? '#upit';
$types  = array(
	array( 'landing', 'Landing stranica', 'Jedna ponuda, kampanja ili oglas', 'target' ),
	array( 'web', 'Web stranica', 'Obrt ili tvrtka, više stranica', 'widget' ),
	array( 'shop', 'Webshop', 'Prodaja proizvoda online', 'cart' ),
	array( 'redesign', 'Redizajn', 'Postojeći web ne donosi upite', 'refresh' ),
);
$feats  = array(
	array( 'galerija', 'Galerija radova / prije-poslije', 'gallery', 'Galerija' ),
	array( 'gbp', 'Google Business profil', 'map-point', 'Google profil' ),
	array( 'ga4', 'GA4 i praćenje konverzija', 'graph-up', 'GA4 mjerenje' ),
	array( 'ai', 'AI vidljivost (ChatGPT, Google AI)', 'chat-round-dots', 'AI vidljivost' ),
	array( 'booking', 'Online rezervacije / termini', 'calendar', 'Rezervacije' ),
	array( 'jezici', 'Više jezika', 'translation', 'Više jezika' ),
	array( 'blog', 'Blog / vodiči', 'notebook', 'Blog' ),
	array( 'kartice', 'Plaćanje karticama', 'card', 'Plaćanje' ),
	array( 'integracije', 'Integracije (CRM, ERP…)', 'routing', 'Integracije' ),
	array( 'tekstovi', 'Pisanje tekstova', 'pen', 'Tekstovi' ),
	array( 'seo', 'SEO sadržaj za usluge i mjesta', 'magnifer', 'SEO sadržaj' ),
	array( 'animacije', 'Premium animacije / 3D', 'layers', 'Animacije / 3D' ),
);
?>
<div class="cfg" id="<?php echo esc_attr( $cid ); ?>" data-configurator data-form-target="<?php echo esc_attr( $target ); ?>" data-sectors="<?php echo esc_attr( wp_json_encode( zaec_sector_js_map() ) ); ?>">
	<form class="cfg-form" onsubmit="return false" aria-describedby="<?php echo esc_attr( $cid ); ?>-help">
		<p class="sr-only" id="<?php echo esc_attr( $cid ); ?>-help">Odabirom opcija procjena opsega i okvirnog roka ažurira se odmah, u panelu s rezultatom.</p>

		<fieldset class="cfg-step">
			<legend><span class="cfg-n">01</span> Što trebate?</legend>
			<div class="cfg-types">
				<?php foreach ( $types as $i => $t ) : ?>
					<label class="cfg-type">
						<input type="radio" name="type" value="<?php echo esc_attr( $t[0] ); ?>" <?php checked( 1, $i ); ?>>
						<span class="cfg-type-box"><?php zaec_the_icon( $t[3], 22 ); ?><b><?php echo esc_html( $t[1] ); ?></b><small><?php echo esc_html( $t[2] ); ?></small></span>
					</label>
				<?php endforeach; ?>
			</div>
		</fieldset>

		<fieldset class="cfg-step" aria-describedby="<?php echo esc_attr( $cid ); ?>-sector-help">
			<legend><span class="cfg-n">02</span> Čime se bavite?</legend>
			<p class="cfg-hint" id="<?php echo esc_attr( $cid ); ?>-sector-help">Odaberite najbliže. Pojedinosti dogovorimo u razgovoru.</p>
			<div class="cfg-chips cfg-chips--sectors">
				<?php foreach ( zaec_sectors() as $key => $sec ) : ?>
					<label class="cfg-chip"><input type="radio" name="trade" value="<?php echo esc_attr( $key ); ?>" data-name="<?php echo esc_attr( $sec['name'] ); ?>"><span><?php echo esc_html( $sec['short'] ); ?></span></label>
				<?php endforeach; ?>
				<label class="cfg-chip"><input type="radio" name="trade" value="<?php echo esc_attr( ZAEC_SECTOR_OTHER['key'] ); ?>" data-name="<?php echo esc_attr( ZAEC_SECTOR_OTHER['name'] ); ?>"><span><?php echo esc_html( ZAEC_SECTOR_OTHER['short'] ); ?></span></label>
			</div>
		</fieldset>

		<fieldset class="cfg-step">
			<legend><span class="cfg-n">03</span> <span data-size-legend>Koliko stranica?</span></legend>
			<div class="cfg-range" data-range-wrap>
				<input type="range" name="pages" min="3" max="20" value="6" step="1" data-pages aria-describedby="<?php echo esc_attr( $cid ); ?>-pages-out">
				<output id="<?php echo esc_attr( $cid ); ?>-pages-out" data-pages-out>6 stranica</output>
			</div>
			<div class="cfg-chips" data-products hidden>
				<label class="cfg-chip"><input type="radio" name="products" value="do 50" checked><span>do 50 proizvoda</span></label>
				<label class="cfg-chip"><input type="radio" name="products" value="50–300"><span>50–300</span></label>
				<label class="cfg-chip"><input type="radio" name="products" value="300+"><span>300+</span></label>
			</div>
			<p class="cfg-note" data-landing-note hidden>Landing je jedna duga stranica sa sekcijama — broj stranica ne treba.</p>
		</fieldset>

		<fieldset class="cfg-step">
			<legend><span class="cfg-n">04</span> Što još treba raditi?</legend>
			<p class="cfg-included"><?php zaec_the_icon( 'check-circle', 16 ); ?> Uvijek uključeno: mobilna izvedba, poziv jednim dodirom, tehnički SEO, schema, Search Console i mjerenje upita.</p>
			<div class="cfg-feats">
				<?php foreach ( $feats as $f ) : ?>
					<label class="cfg-feat"><input type="checkbox" name="features" value="<?php echo esc_attr( $f[0] ); ?>" data-label="<?php echo esc_attr( $f[1] ); ?>" data-short="<?php echo esc_attr( $f[3] ); ?>"><span><?php zaec_the_icon( $f[2], 18 ); ?><?php echo esc_html( $f[1] ); ?></span></label>
				<?php endforeach; ?>
			</div>
		</fieldset>

		<div class="cfg-row">
			<fieldset class="cfg-step">
				<legend><span class="cfg-n">05</span> Rok</legend>
				<div class="cfg-chips">
					<label class="cfg-chip"><input type="radio" name="deadline" value="Fleksibilno" checked><span>Fleksibilno</span></label>
					<label class="cfg-chip"><input type="radio" name="deadline" value="Unutar mjesec dana"><span>Unutar mjesec dana</span></label>
					<label class="cfg-chip"><input type="radio" name="deadline" value="Hitno"><span>Hitno</span></label>
				</div>
			</fieldset>
			<fieldset class="cfg-step">
				<legend><span class="cfg-n">06</span> Tekstovi i slike</legend>
				<div class="cfg-chips">
					<label class="cfg-chip"><input type="radio" name="content" value="Imam sve"><span>Imam sve</span></label>
					<label class="cfg-chip"><input type="radio" name="content" value="Djelomično" checked><span>Djelomično</span></label>
					<label class="cfg-chip"><input type="radio" name="content" value="Trebam pomoć"><span>Trebam pomoć</span></label>
				</div>
			</fieldset>
		</div>
	</form>

	<aside class="cfg-out" aria-label="Vaša procjena">
		<p class="sr-only" aria-live="polite" data-cfg-live></p>
		<div class="cfg-out-inner">
			<p class="mono cfg-out-k">Vaša procjena</p>
			<div class="cfg-stack" aria-hidden="true" data-stack><span class="cfg-ground"></span></div>
			<div class="cfg-result">
				<div><p class="cfg-label">Opseg</p><p class="cfg-tier"><b data-tier>M</b> <span data-tier-name>Poslovno</span></p></div>
				<div><p class="cfg-label">Okvirni rok izrade</p><p class="cfg-weeks" data-weeks>3–5 tjedana</p></div>
			</div>
			<div class="cfg-meter" aria-hidden="true"><span data-meter></span></div>
			<ul class="cfg-sum" data-summary role="list"></ul>
			<p class="cfg-urgent" data-urgent hidden><?php zaec_the_icon( 'clock-circle', 16 ); ?> Hitni rok ovisi o slobodnom terminu — potvrđujemo ga u ponudi.</p>
			<button type="button" class="btn btn--signal cfg-send" data-cfg-send data-magnetic>Pošalji i dobij fiksnu ponudu <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?></button>
			<p class="cfg-why"><b>Zašto ovdje nema cijene?</b> Cijena bez opsega ne znači ništa. Za ovu konfiguraciju šaljemo pisanu ponudu s fiksnom cijenom i rokom — bez obveze i bez „sitnih izmjena” poslije.</p>
		</div>
	</aside>
</div>
