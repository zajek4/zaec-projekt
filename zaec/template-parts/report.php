<?php
/**
 * Što sadrži mjesečni pregled — opis sadržaja, bez ikakvih brojki.
 * (Prije: primjer izvještaja s ilustrativnim podacima — uklonjeno jer izgleda kao dokaz.)
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$rows = array(
	array( 'phone', 'Pozivi, upiti i WhatsApp', 'Koliko se ljudi javilo i preko kojeg kanala — Google, karta, oglasi, preporuka ili AI pretraga.' ),
	array( 'map-point', 'Vidljivost na Googleu i karti', 'Prikazi i klikovi iz Search Consolea i Google Business profila, po uslugama i mjestima.' ),
	array( 'cart', 'Prodaja (za webshop)', 'Pregledi proizvoda, košarice i kupnje s vrijednošću — iz GA4 e-commerce praćenja.' ),
	array( 'document', 'Što smo promijenili i zašto', 'Kratak zapis izmjena na webu, da se rezultat može povezati s uzrokom.' ),
	array( 'arrow-right', 'Sljedeći korak', 'Jedna konkretna preporuka za idući mjesec — bez žargona i bez 40 tablica.' ),
);
?>
<figure class="report report--spec" data-reveal aria-label="Što sadrži mjesečni pregled">
	<div class="report-head">
		<span class="report-dot" aria-hidden="true"></span>
		<b>Mjesečni pregled — što sadrži</b>
	</div>
	<ul class="report-spec" role="list">
		<?php foreach ( $rows as $r ) : ?>
			<li><?php zaec_the_icon( $r[0], 20 ); ?><div><b><?php echo esc_html( $r[1] ); ?></b><p><?php echo esc_html( $r[2] ); ?></p></div></li>
		<?php endforeach; ?>
	</ul>
	<figcaption class="mono">Brojke u pregledu su isključivo vaše — iz vašeg GA4, Search Consolea i Google profila.</figcaption>
</figure>
