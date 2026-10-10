<?php
/**
 * Procjena projekta — opseg + okvirni rok → pisana ponuda (bez javne cijene).
 *
 * Šest pitanja, svako s odgovorom u zaglavlju (stanje odabira se vidi i kad je korak zatvoren pogledu). Desno je
 * rezultat: presjek zgrade, razina opsega s objašnjenjem, okvirni rok i ono što opseg najviše pomiče. Na mobitelu
 * rezultat prati traka pri dnu dok je procjena na ekranu.
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
	array( 'web', 'Web stranica', 'Tvrtka, obrt ili ustanova, više stranica', 'widget' ),
	array( 'shop', 'Webshop', 'Prodaja proizvoda online', 'cart' ),
	array( 'redesign', 'Redizajn', 'Postojeći web ne donosi upite', 'refresh' ),
);

// Kartica „Vaša procjena“ u heroju Cijena (design/04 #12, 05-reference): isti rezultat kao procjena ispod, živ.
// Vrsta projekta bira se i ovdje (mijenja prvo pitanje procjene); ostalih pet pitanja je ispod.
if ( ! empty( $args['mirror'] ) ) :
	?>
	<div class="est cfg-out-inner" data-cfg-mirror="<?php echo esc_attr( $args['mirror'] ); ?>">
		<p class="mono cfg-out-k">Vaša procjena</p>
		<div class="est-types" role="group" aria-label="Vrsta projekta" data-est-types hidden>
			<?php foreach ( $types as $zaec_i => $zaec_t ) : ?>
				<button type="button" class="est-type" data-type="<?php echo esc_attr( $zaec_t[0] ); ?>" aria-pressed="<?php echo 1 === $zaec_i ? 'true' : 'false'; ?>"><?php echo esc_html( strtok( $zaec_t[1], ' ' ) ); ?></button>
			<?php endforeach; ?>
		</div>
		<div class="cfg-stack" aria-hidden="true" data-stack><span class="cfg-ground"></span></div>
		<div class="cfg-result">
			<div><p class="cfg-label">Opseg</p><p class="cfg-tier"><b data-tier>M</b> <span data-tier-name>Poslovno</span></p></div>
			<div><p class="cfg-label">Okvirni rok izrade</p><p class="cfg-weeks" data-weeks>2–4 tjedna</p></div>
		</div>
		<div class="cfg-meter" aria-hidden="true"><span data-meter></span><i style="left:28%"></i><i style="left:48%"></i><i style="left:75%"></i></div>
		<p class="est-more"><a class="link-arrow" href="#<?php echo esc_attr( $args['mirror'] ); ?>">Još pet pitanja ispod <?php zaec_the_icon( 'arrow-down', 16 ); ?></a><span class="est-q">Djelatnost, opseg, funkcije, rok i sadržaj</span></p>
	</div>
	<?php
	return;
endif;
// Funkcije po skupinama (strategija 05, nalaz 5). [vrijednost, naziv, ikona, kratko, utjecaj na opseg 1–3]
// Utjecaj je samo oznaka za čitatelja; računa se u configurator.js (FEAT), ovdje se ne zbraja ništa.
$groups = array(
	'Sadržaj'               => array(
		array( 'galerija', 'Galerija radova / prije-poslije', 'gallery', 'Galerija', 1 ),
		array( 'blog', 'Blog / vodiči', 'notebook', 'Blog', 1 ),
		array( 'seo', 'SEO sadržaj za usluge i mjesta', 'magnifer', 'SEO sadržaj', 2 ),
	),
	'Funkcije'              => array(
		array( 'booking', 'Online rezervacije / termini', 'calendar', 'Rezervacije', 3 ),
		array( 'jezici', 'Više jezika', 'translation', 'Više jezika', 2 ),
		array( 'kartice', 'Plaćanje karticama', 'card', 'Plaćanje', 2 ),
		array( 'integracije', 'Integracije (CRM, ERP…)', 'routing', 'Integracije', 3 ),
		array( 'animacije', 'Animacije i 3D', 'layers', 'Animacije / 3D', 2 ),
	),
	'Vidljivost i mjerenje' => array(
		array( 'gbp', 'Google Business profil', 'map-point', 'Google profil', 1 ),
		array( 'ai', 'AI vidljivost (ChatGPT, Google AI)', 'chat-round-dots', 'AI vidljivost', 1 ),
		array( 'ga4', 'Napredno mjerenje (oglasi, e-commerce, izvještaj)', 'graph-up', 'Napredno mjerenje', 1 ),
	),
);
$impact = array( 1 => 'Manji utjecaj na opseg', 2 => 'Srednji utjecaj na opseg', 3 => 'Veći utjecaj na opseg' );
$step   = static function ( $n, $q, $ans, $help = '' ) use ( $cid ) {
	printf(
		'<legend class="cfg-q"><span class="cfg-n">%1$s</span><span class="cfg-q-t">%2$s</span><output class="cfg-ans" data-ans="%3$s" aria-hidden="true"></output></legend>%4$s',
		esc_html( $n ),
		wp_kses( $q, array( 'span' => array( 'data-size-legend' => array() ) ) ),
		esc_attr( $ans ),
		$help ? '<p class="cfg-hint" id="' . esc_attr( $cid . '-h-' . $ans ) . '">' . wp_kses( $help, array( 'span' => array( 'data-size-help' => array() ) ) ) . '</p>' : '' // phpcs:ignore
	);
};
?>
<div class="cfg" id="<?php echo esc_attr( $cid ); ?>" data-configurator data-form-target="<?php echo esc_attr( $target ); ?>" data-sectors="<?php echo esc_attr( wp_json_encode( zaec_sector_js_map() ) ); ?>">
	<form class="cfg-form" onsubmit="return false" aria-describedby="<?php echo esc_attr( $cid ); ?>-help">
		<p class="sr-only" id="<?php echo esc_attr( $cid ); ?>-help">Odabirom opcija procjena opsega i okvirnog roka ažurira se odmah, u panelu s rezultatom.</p>

		<fieldset class="cfg-step" data-step="type">
			<?php $step( '01', 'Što trebate?', 'type' ); ?>
			<div class="cfg-types">
				<?php foreach ( $types as $i => $t ) : ?>
					<label class="cfg-type">
						<input type="radio" name="type" value="<?php echo esc_attr( $t[0] ); ?>" data-name="<?php echo esc_attr( $t[1] ); ?>" <?php checked( 1, $i ); ?>>
						<span class="cfg-type-box"><?php zaec_the_icon( $t[3], 22 ); ?><b><?php echo esc_html( $t[1] ); ?></b><small><?php echo esc_html( $t[2] ); ?></small></span>
					</label>
				<?php endforeach; ?>
			</div>
		</fieldset>

		<fieldset class="cfg-step" data-step="trade" aria-describedby="<?php echo esc_attr( $cid ); ?>-h-trade">
			<?php $step( '02', 'Čime se bavite?', 'trade', 'Odaberite najbliže. Pojedinosti dogovorimo u razgovoru.' ); ?>
			<div class="cfg-chips cfg-chips--sectors">
				<?php foreach ( zaec_sectors() as $key => $sec ) : ?>
					<label class="cfg-chip"><input type="radio" name="trade" value="<?php echo esc_attr( $key ); ?>" data-name="<?php echo esc_attr( $sec['name'] ); ?>" data-short="<?php echo esc_attr( $sec['short'] ); ?>"><span><?php echo esc_html( $sec['short'] ); ?></span></label>
				<?php endforeach; ?>
				<label class="cfg-chip"><input type="radio" name="trade" value="<?php echo esc_attr( ZAEC_SECTOR_OTHER['key'] ); ?>" data-name="<?php echo esc_attr( ZAEC_SECTOR_OTHER['name'] ); ?>" data-short="<?php echo esc_attr( ZAEC_SECTOR_OTHER['short'] ); ?>"><span><?php echo esc_html( ZAEC_SECTOR_OTHER['short'] ); ?></span></label>
			</div>
			<div class="cfg-other" data-other hidden>
				<label for="<?php echo esc_attr( $cid ); ?>-other">Čime točno? <span class="opt">(opcionalno)</span></label>
				<input class="input" id="<?php echo esc_attr( $cid ); ?>-other" name="trade_other" type="text" maxlength="60" autocomplete="off" placeholder="npr. autoservis, fizioterapija, prijevoz">
			</div>
		</fieldset>

		<fieldset class="cfg-step" data-step="size" aria-describedby="<?php echo esc_attr( $cid ); ?>-h-size">
			<?php $step( '03', '<span data-size-legend>Koliko stranica?</span>', 'size', '<span data-size-help>Otprilike: naslovnica, o nama, kontakt i po jedna stranica za svaku uslugu.</span>' ); ?>
			<div class="cfg-range" data-range-wrap>
				<input type="range" name="pages" min="3" max="20" value="6" step="1" data-pages aria-label="Broj stranica" aria-describedby="<?php echo esc_attr( $cid ); ?>-pages-out">
				<output id="<?php echo esc_attr( $cid ); ?>-pages-out" data-pages-out>6 stranica</output>
			</div>
			<div class="cfg-chips" data-products hidden>
				<label class="cfg-chip"><input type="radio" name="products" value="do 50" checked><span>do 50 proizvoda</span></label>
				<label class="cfg-chip"><input type="radio" name="products" value="50–300"><span>50–300</span></label>
				<label class="cfg-chip"><input type="radio" name="products" value="300+"><span>300+</span></label>
			</div>
			<p class="cfg-note" data-landing-note hidden>Landing je jedna duga stranica sa sekcijama, pa broj stranica ne treba.</p>
		</fieldset>

		<fieldset class="cfg-step" data-step="features">
			<?php $step( '04', 'Što web još treba imati?', 'features' ); ?>
			<p class="cfg-included"><?php zaec_the_icon( 'check-circle', 16 ); ?> <span><b>Uvijek uključeno:</b> mobilna izvedba, poziv jednim dodirom, tehnički SEO, schema, Search Console i mjerenje upita i poziva.</span></p>
			<?php foreach ( $groups as $g => $items ) : ?>
				<div class="cfg-group" role="group" aria-label="<?php echo esc_attr( $g ); ?>">
					<p class="cfg-group-t mono" aria-hidden="true"><?php echo esc_html( $g ); ?></p>
					<div class="cfg-feats">
						<?php foreach ( $items as $f ) : ?>
							<label class="cfg-feat" title="<?php echo esc_attr( $impact[ $f[4] ] ); ?>">
								<input type="checkbox" name="features" value="<?php echo esc_attr( $f[0] ); ?>" data-label="<?php echo esc_attr( $f[1] ); ?>" data-short="<?php echo esc_attr( $f[3] ); ?>">
								<span><?php zaec_the_icon( $f[2], 18 ); ?><em><?php echo esc_html( $f[1] ); ?></em><i class="cfg-imp" data-imp="<?php echo (int) $f[4]; ?>" aria-hidden="true"><b></b><b></b><b></b></i><span class="sr-only">, <?php echo esc_html( mb_strtolower( $impact[ $f[4] ] ) ); ?></span></span>
							</label>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endforeach; ?>
			<p class="cfg-legend mono" aria-hidden="true"><i class="cfg-imp" data-imp="1"><b></b><b></b><b></b></i> manji <i class="cfg-imp" data-imp="3"><b></b><b></b><b></b></i> veći utjecaj na opseg</p>
		</fieldset>

		<div class="cfg-row">
			<fieldset class="cfg-step" data-step="deadline">
				<?php $step( '05', 'Rok', 'deadline' ); ?>
				<div class="cfg-chips">
					<label class="cfg-chip"><input type="radio" name="deadline" value="Fleksibilno" checked><span>Fleksibilno</span></label>
					<label class="cfg-chip"><input type="radio" name="deadline" value="Unutar mjesec dana"><span>Unutar mjesec dana</span></label>
					<label class="cfg-chip"><input type="radio" name="deadline" value="Hitno"><span>Hitno</span></label>
				</div>
			</fieldset>
			<fieldset class="cfg-step" data-step="content">
				<?php $step( '06', 'Tekstovi i fotografije', 'content' ); ?>
				<div class="cfg-chips">
					<label class="cfg-chip"><input type="radio" name="content" value="Imam sve"><span>Imam sve</span></label>
					<label class="cfg-chip"><input type="radio" name="content" value="Imam dio" checked><span>Imam dio</span></label>
					<label class="cfg-chip"><input type="radio" name="content" value="Trebam pomoć s tekstovima"><span>Trebam pomoć s tekstovima</span></label>
				</div>
			</fieldset>
		</div>
	</form>

	<aside class="cfg-out" aria-label="Vaša procjena" data-cfg-out>
		<p class="sr-only" aria-live="polite" data-cfg-live></p>
		<div class="cfg-out-inner">
			<p class="mono cfg-out-k">Vaša procjena</p>
			<div class="cfg-stack" aria-hidden="true" data-stack><span class="cfg-ground"></span></div>
			<div class="cfg-result">
				<div><p class="cfg-label">Opseg</p><p class="cfg-tier"><b data-tier>M</b> <span data-tier-name>Poslovno</span></p></div>
				<div><p class="cfg-label">Okvirni rok izrade</p><p class="cfg-weeks" data-weeks>2–4 tjedna</p></div>
				<p class="cfg-tier-desc" data-tier-desc></p>
			</div>
			<div class="cfg-meter" aria-hidden="true"><span data-meter></span><i style="left:28%"></i><i style="left:48%"></i><i style="left:75%"></i></div>
			<div class="cfg-drivers" data-drivers-wrap hidden>
				<p class="cfg-label">Opseg najviše pomiče</p>
				<ul role="list" data-drivers></ul>
			</div>
			<ul class="cfg-sum" data-summary role="list"></ul>
			<p class="cfg-urgent" data-urgent hidden><?php zaec_the_icon( 'clock-circle', 16 ); ?> Hitni rok ovisi o slobodnom terminu, pa ga potvrđujemo u ponudi.</p>
			<button type="button" class="btn btn--signal cfg-send" data-cfg-send data-magnetic>Zatražite fiksnu ponudu <?php zaec_the_icon( 'arrow-right', 18, 'icon-arrow' ); ?></button>
			<p class="cfg-why"><b>Zašto ovdje nema cijene?</b> Cijena bez opsega ne znači ništa. Za ovu konfiguraciju šaljemo pisanu ponudu s fiksnom cijenom i rokom, bez obveze i bez „sitnih izmjena” poslije.</p>
		</div>
	</aside>

	<div class="cfg-dock" data-cfg-dock aria-hidden="true">
		<span class="cfg-dock-r"><b data-dock-tier>M</b><span data-dock-weeks>2–4 tjedna</span></span>
		<button type="button" class="cfg-dock-btn" tabindex="-1" data-dock-go>Procjena <?php zaec_the_icon( 'arrow-down', 16 ); ?></button>
	</div>
</div>
