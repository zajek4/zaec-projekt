<?php
/**
 * Sadržaj naslovnice (zadane vrijednosti). Tekstovi se mogu urediti u
 * Izgled → ZAEC naslovnica (inc/home-fields.php) — prazno polje = zadana vrijednost.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_home_defaults() {
	return array(
		// Hero.
		'hero_kicker'     => 'Web · SEO · AI vidljivost · Osijek → cijela Hrvatska',
		'hero_title'      => 'Web stranice koje <em>donose</em> upite.',
		'hero_lead'       => 'Gradimo web, SEO i Google temelje za obrte i tvrtke kojima treba posao — ne samo lijepa stranica. Svaki poziv i upit se mjeri, a cijenu znate na papiru prije prvog retka koda.',
		'hero_cta'        => 'Složite svoj projekt',
		'hero_audit'      => 'Besplatna provjera vidljivosti',
		'hero_trust_1'    => 'Fiksna cijena u pisanoj ponudi',
		'hero_trust_2'    => 'Sve na vaše ime — bez zaključavanja',
		'hero_trust_3'    => 'Mjerimo pozive, upite i prodaju',
		// Problem.
		'problem_kicker'  => '01 — Zvuči poznato?',
		'problem_title'   => 'Dobar ste majstor. <em>Google</em> to još ne zna.',
		'problem_lead'    => 'Kupci biraju u tri koraka: pretraga, karta, prvi uvjerljiv web. Ako ispadnete u bilo kojem, posao ode — ne nužno boljem, nego vidljivijem.',
		'problem_bridge'  => 'Dobra vijest: sve se to popravlja — redom kojim donosi najviše.',
		// Djelatnosti.
		'trades_kicker'   => '02 — Za koga gradimo',
		'trades_title'    => 'Web koji razumije <em>vaš</em> zanat.',
		'trades_lead'     => 'Kod kvara se zove odmah, salon se bira po fotografijama, krov po povjerenju. Odaberite djelatnost i pogledajte što vaš web mora imati.',
		// Sustav.
		'system_kicker'   => '03 — Ispod površine',
		'system_title'    => 'Pet slojeva između pretrage i <em>poziva</em>.',
		'system_lead'     => 'Lijep dizajn je vrh. Upite donosi ono ispod — i svaki sloj ima svoj posao. Ovako je složena svaka stranica koju isporučimo.',
		// Noć.
		'night_kicker'    => '04 — Radi 0–24',
		'night_title'     => 'Vi spavate. <em>Web</em> prima upite.',
		'night_lead'      => 'Kupci traže navečer, vikendom i s mobitela — kad vi ne možete odgovoriti. Web tada mora sam objasniti, uvjeriti i zaprimiti upit.',
		// Proces.
		'process_kicker'  => '05 — Kako radimo',
		'process_title'   => 'Od prvog poziva do prvog <em>upita</em>.',
		'process_lead'    => 'Četiri koraka, bez žargona i bez iznenađenja. Cijenu i opseg znate prije prvog retka koda.',
		// Radovi.
		'work_kicker'     => '06 — Radovi i rezultati',
		'work_title'      => 'Stvarni projekti. <em>Stvarni</em> ljudi.',
		'work_lead'       => 'Bez izmišljenih klijenata i lažnih brojki. Ovo su radovi koje možete otvoriti i provjeriti.',
		// Procjena.
		'cfg_kicker'      => '07 — Procjena projekta',
		'cfg_title'       => 'Složite svoj web. <em>Cijenu</em> dobivate na papiru.',
		'cfg_lead'        => 'Odaberite što trebate i odmah vidite opseg i okvirni rok. Za točnu cijenu pošaljite konfiguraciju — pisana ponuda s fiksnom cijenom, bez obveze.',
		// Usluge.
		'services_kicker' => '08 — Usluge',
		'services_title'  => 'Sve što treba da vas <em>nađu</em> i nazovu.',
		'services_lead'   => 'Ne prodajemo pakete radi paketa. Svaka usluga rješava konkretan dio puta od pretrage do poziva — i mjeri se.',
		// Tko.
		'who_kicker'      => '09 — Tko radi vaš web',
		'who_title'       => 'Jedna odgovorna osoba. <em>Bez</em> lanca podizvođača.',
		'who_lead'        => 'ZAEC je web studio iz Osijeka koji vodi Filip Zajec — više od deset godina na webu, s fokusom na WordPress, UX, SEO i mjerenje.',
		'who_text'        => 'Od prvog razgovora do objave razgovarate s istom osobom koja crta nacrt i piše kod. Nema prepričavanja ni „to je rekao prodavač”. Kad nešto ne vrijedi vašeg novca — reći ćemo vam.',
		// FAQ.
		'faq_kicker'      => '10 — Pitanja',
		'faq_title'       => 'Prije nego <em>pitate</em>.',
		// Završni upit.
		'final_kicker'    => '11 — Upit',
		'final_title'     => 'Recite nam čime se bavite. <em>Ostalo</em> složimo mi.',
		'final_lead'      => 'Dva polja i kratka poruka. Javljamo se u radno vrijeme sa smjerom, opsegom i sljedećim korakom — bez obveze i bez prodajnog pritiska.',
	);
}

/** Tekst naslovnice (uređeni ili zadani). */
function zaec_home( $key ) {
	static $saved = null;
	if ( null === $saved ) {
		$saved = (array) get_option( 'zaec_home_texts', array() );
	}
	$d = zaec_home_defaults();
	$v = isset( $saved[ $key ] ) && '' !== trim( (string) $saved[ $key ] ) ? $saved[ $key ] : ( $d[ $key ] ?? '' );
	return (string) $v;
}

function zaec_home_pains() {
	return array(
		array( 'F.01', 'Nema vas tamo gdje vas traže.', 'Google karta, pretraga i sve češće ChatGPT. Ako vas ondje nema, ne postojite za kupca koji uslugu treba sada.' ),
		array( 'F.02', 'Web postoji, telefon šuti.', 'Lijep dizajn bez jasne ponude, poziva na akciju i brzine na mobitelu je skupa posjetnica.' ),
		array( 'F.03', 'Ne znate što radi.', 'Bez mjerenja ne znate dolaze li upiti s weba, oglasa ili preporuke — pa novac ulažete naslijepo.' ),
		array( 'F.04', 'Već ste se jednom opekli.', 'Rok probijen, cijena narasla, pristupi kod agencije. Zato kod nas opseg, rok i cijena idu na papir prije početka — i sve je na vaše ime.' ),
	);
}

function zaec_home_layers() {
	return array(
		array( 'L.01', 'Poziv na akciju i mjerenje', 'Gumb za poziv, WhatsApp i kratki upit na svakom ekranu. Svaki klik i svaka poslana forma bilježe se u GA4.', 'phone' ),
		array( 'L.02', 'Poruka i povjerenje', 'U pet sekundi: što radite, gdje i zašto baš vi. Stvarni radovi, recenzije i jamstva — bez praznih fraza.', 'hand-shake' ),
		array( 'L.03', 'Brzina i mobitel', 'Prvo mobitel. Lagan kod, optimizirane slike i dobri Core Web Vitals.', 'smartphone' ),
		array( 'L.04', 'Google i AI vidljivost', 'Tehnički SEO, schema, Google Business profil i sadržaj koji AI asistenti mogu citirati.', 'magnifer' ),
		array( 'L.05', 'Čvrst temelj', 'Domena, hosting i pristupi na vaše ime. SSL, sigurnosne kopije, uređivanje bez programera.', 'shield-check' ),
	);
}

function zaec_home_night_points() {
	return array(
		array( '0–24', 'Dizajnirano za palac', 'Svaki gumb i svaki redak prvo stane na mali ekran — bez štipanja i zumiranja.' ),
		array( '1 dodir', 'Poziv jednim dodirom', 'Broj prikovan za dno ekrana. Kupac ne traži kontakt — samo zove.' ),
		array( 'AI', 'Odgovori i za AI asistente', 'Jasni podaci i odgovori na webu povećavaju šansu da vas ChatGPT i Google AI preporuče.' ),
	);
}

function zaec_home_process() {
	return array(
		array( 'K.01', 'Besplatan razgovor', 'Saznamo kako radite, tko su vam kupci i gdje gubite upite. Ako vam ne trebamo — reći ćemo.', '20 minuta · bez obveze' ),
		array( 'K.02', 'Nacrt i fiksna ponuda', 'Struktura stranica, sadržaj, funkcije i mjerenje — na papiru, uz fiksnu cijenu i rok.', 'opseg potvrđen pisano' ),
		array( 'K.03', 'Izrada i testiranje', 'Dizajn, tekstovi i razvoj prema nacrtu. Testiramo na stvarnim mobitelima, brzinu i svaki obrazac.', 'pregled u tijeku rada' ),
		array( 'K.04', 'Objava, mjerenje, rast', 'Objava, Search Console, GA4 i Google profil. Pristupi, edukacija i 14 dana jamstva.', 'brojke od prvog dana' ),
	);
}

/** Bez rizika — razlozi da se javite (prikazuje se na više mjesta). */
function zaec_guarantees() {
	return array(
		array( 'chat-round-dots', 'Besplatan prvi razgovor', '20 minuta, bez obveze. Ako vam ne trebamo, reći ćemo.' ),
		array( 'document', 'Fiksna cijena na papiru', 'Opseg, rok i cijena u pisanoj ponudi prije početka.' ),
		array( 'card', '50 % na početku, 50 % prije objave', 'Ne plaćate cijeli iznos unaprijed.' ),
		array( 'key', 'Sve na vaše ime', 'Domena, hosting, pristupi i sadržaj su vaši. Bez zaključavanja.' ),
		array( 'shield-check', '14 dana jamstva', 'Tehničke greške na isporučenom radu ispravljamo bez naplate.' ),
		array( 'refresh-circle', 'Bez obvezne pretplate', 'Održavanje je izbor — prekid krajem bilo kojeg mjeseca.' ),
	);
}

function zaec_home_faq() {
	$saved = trim( (string) zaec_home( 'faq_custom' ) );
	if ( $saved ) {
		$out = array();
		foreach ( preg_split( '/\r?\n/', $saved ) as $line ) {
			$parts = array_map( 'trim', explode( '|', $line, 2 ) );
			if ( 2 === count( $parts ) && $parts[0] && $parts[1] ) {
				$out[] = $parts;
			}
		}
		if ( $out ) {
			return $out;
		}
	}
	return array(
		array( 'Koliko košta izrada web stranice?', 'Ovisi o opsegu: broju stranica, funkcijama i tome imate li sadržaj. Zato ne objavljujemo „od” cijene koje ništa ne znače. Složite projekt u procjeni ili nazovite — nakon kratkog razgovora dobivate pisanu ponudu s fiksnom cijenom i rokom, bez obveze.' ),
		array( 'Koliko traje izrada?', 'Landing stranica je najbrža, webshop i integracije traju najdulje. Okvirni rok vidite odmah u procjeni projekta, a točan rok piše u ponudi prije početka.' ),
		array( 'Garantirate li prvo mjesto na Googleu?', 'Ne — i bježite od svakoga tko to garantira. Garantiramo ispravno postavljene temelje (brzina, struktura, schema, Google profil, mjerenje) i mjesečne brojke koje pokazuju napredak.' ),
		array( 'Što ako mi se dizajn ne svidi?', 'Zato prvo ide nacrt i vizualni smjer, uz dogovoreni broj korekcija prije razvoja. Ne gradimo naslijepo pa onda mijenjamo iz temelja.' ),
		array( 'Imam web — trebam li novi?', 'Ne nužno. Napravimo besplatnu provjeru vidljivosti i iskreno kažemo isplati li se popravak ili nova izrada.' ),
		array( 'Tko je vlasnik weba?', 'Vi. Domena, hosting, pristupi i sadržaj registrirani su na vas. Možete otići kad god želite — bez otkupa i ucjene.' ),
		array( 'Hoću li moći sam uređivati sadržaj?', 'Da. Web je na WordPressu, a pri primopredaji pokažemo kako mijenjate tekstove, slike, radove i cijene.' ),
		array( 'Što je s ChatGPT-om i AI pretragom?', 'Postavljamo ono što AI asistenti koriste: jasan sadržaj s odgovorima, schema markup, dosljedne podatke o tvrtki i recenzije. Preporuku ne može garantirati nitko, ali šanse možemo bitno povećati — i mjeriti.' ),
		array( 'Radite li webshop i praćenje prodaje?', 'Da: WooCommerce, kartično plaćanje za hrvatsko tržište i GA4 e-commerce praćenje (od pregleda proizvoda do kupnje), uz Consent Mode v2.' ),
		array( 'Radite li samo u Osijeku?', 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom.' ),
	);
}

/** Primjer mjesečnog izvještaja (ilustrativni podaci — jasno označeno u prikazu). */
function zaec_sample_report() {
	return array(
		'period'  => 'Primjer · 30 dana',
		'kpis'    => array(
			array( 'Upiti s weba', '38', '+12' ),
			array( 'Klikovi na poziv', '64', '+19' ),
			array( 'Prikazi na Google karti', '2.140', '+31 %' ),
			array( 'Prihod webshopa', '4.860 €', '+18 %' ),
		),
		'bars'    => array( 42, 55, 48, 61, 58, 72, 69, 80, 77, 86, 83, 95 ),
		'sources' => array( array( 'Google pretraga', 46 ), array( 'Google karta', 27 ), array( 'Izravno', 14 ), array( 'Društvene mreže', 9 ), array( 'Ostalo', 4 ) ),
	);
}
