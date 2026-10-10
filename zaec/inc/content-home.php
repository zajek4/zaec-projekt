<?php
/**
 * Sadržaj naslovnice (zadane vrijednosti). Tekstovi se mogu urediti u
 * Izgled → ZAEC naslovnica (inc/home-fields.php) — prazno polje = zadana vrijednost.
 *
 * Ritam naslovnice: kino (mreža → Hrvatska → Osijek → konkatedrala → nacrt → put → sustav)
 * → mirno (prepoznavanje, lijepo vs učinkovito) → interakcija (usluge) → dokaz (radovi)
 * → iskrenost (možda vam ne treba) → proces → ulaganje → pitanja → upit.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_home_defaults() {
	return array(
		// Hero.
		'hero_kicker'     => 'Izrada web stranica · SEO · mjerenje · Osijek',
		'hero_title'      => 'Web koji donosi <em>upite</em>, ne samo dojam.',
		'hero_lead'       => 'ZAEC je web studio iz Osijeka. Projektiramo, gradimo i mjerimo web stranice, webshopove i SEO za tvrtke kojima web mora donositi pozive, upite i prodaju.',
		'hero_cta'        => 'Recite nam što želite postići',
		'hero_trust_1'    => 'Fiksna cijena u pisanoj ponudi',
		'hero_trust_2'    => 'Domena, hosting i pristupi na vaše ime',
		'hero_trust_3'    => 'Mjerimo pozive, upite i prodaju',
		'hero_cue'        => 'Od mreže do upita — pomaknite',
		// Mreža.
		'net_kicker'      => '01 — Mreža',
		'net_title'       => 'Svaki dan netko traži <em>baš ono</em> što vi radite.',
		'net_lead'        => 'Na Googleu, na karti, u preporuci prijatelja, na društvenim mrežama i sve češće u ChatGPT-u. Svaka pretraga je nit u mreži odluka — i svaka završava na nečijoj web stranici.',
		'net_note'        => 'Pitanje nije postoji li potražnja. Pitanje je gdje završava.',
		// Hrvatska.
		'hr_kicker'       => '02 — Odakle radimo',
		'hr_title'        => 'Iz Osijeka, za tvrtke diljem <em>Hrvatske</em>.',
		'hr_lead'         => 'Projekte vodimo uživo kad ima smisla, a inače video-pozivom i jasnim pisanim dogovorom. Lokalno tržište poznajemo iznutra: kako ljudi ovdje traže, uspoređuju i odlučuju.',
		'hr_title_2'      => 'Malo tržište ne nagrađuje <em>glasnoću</em>.',
		'hr_lead_2'       => 'Nagrađuje jasnoću. Tko prvi jasno odgovori na pitanje kupca — što, gdje, koliko brzo i zašto baš vi — dobiva poziv.',
		// Slavonija (svjetla naselja).
		'slav_kicker'     => 'Slavonija · noću',
		'slav_title'      => 'Svako svjetlo je nečiji <em>posao</em>.',
		'slav_lead'       => 'Pekara u Đakovu, servis klima u Vinkovcima, laboratorij u Osijeku. Svatko se svaki dan natječe za svoje pretrage. Posao dobiva onaj kojeg kupac prvi razumije.',
		// Osijek.
		'os_kicker'       => '03 — Osijek',
		'os_title'        => 'Dobri gradovi nastaju iz <em>plana</em>.',
		'os_lead'         => 'Tvrđa je projektirana prije nego što je sagrađena. Ulice, trgovi i šetnica uz Dravu vode ljude bez putokaza. Isti princip vrijedi za web: plan prije cigle.',
		// Konkatedrala.
		'cath_kicker'     => '04 — Arhitektura',
		'cath_title'      => 'Devedeset metara <em>nacrta</em>.',
		'cath_lead'       => 'Konkatedrala sv. Petra i Pavla stoji nad Osijekom od kraja 19. stoljeća. Prije prve cigle postojao je nacrt: osi, nosivi zidovi, proporcije. Ono što vidite je ljepota. Ono što traje je struktura.',
		// Nacrt → web.
		'plan_kicker'     => '05 — Nacrt',
		'plan_title'      => 'Iste linije. <em>Drugi</em> materijal.',
		'plan_lead'       => 'Web stranica je zgrada u koju kupac ulazi. Ima ulaz, hodnike, putokaze i vrata kroz koja izlazi kao klijent — ili ne izlazi.',
		'plan_grid_title' => 'Mjere zgrade postaju <em>mreža</em>.',
		'plan_grid_lead'  => 'Raspored, ritam i proporcije: ista pravila koja drže zgradu drže i dobar web. Na toj mreži slažemo sadržaj.',
		'plan_title_2'    => 'Prvo struktura, onda <em>boja</em>.',
		'plan_lead_2'     => 'Prije fotografija i boja crtamo nacrt: što posjetitelj mora vidjeti, kojim redom i gdje donosi odluku. Dizajn dolazi na čvrst temelj — nikad obrnuto.',
		// Put posjetitelja.
		'path_kicker'     => '06 — Put do upita',
		'path_title'      => 'Ista stranica. Drugačija <em>struktura</em>.',
		'path_lead'       => 'Posjetitelji dolaze s Googlea, preporuke, mreža, oglasa i AI pretrage. Na stranici prolaze kroz pet vrata i na svakima dio njih odustane. Popravite vrata jedna po jedna i gledajte što se događa.',
		'path_note'       => 'Ilustrativni model, ne obećanje. Omjeri su pojednostavljeni kako bi pokazali princip: male razlike na svakim vratima se množe. Stvarne brojke ovise o djelatnosti, ponudi i prometu — zato ih mjerimo na vašem webu.',
		// Sustav.
		'sys_kicker'      => '07 — Ispod površine',
		'sys_title'       => 'Sedam slojeva između pretrage i <em>poziva</em>.',
		'sys_lead'        => 'Svaki sloj ima svoj posao. Ako jedan zakaže, ostali ga ne mogu sakriti.',
		'sys_statement'   => 'Web koji radi nije jedan lijep ekran. <em>To je sustav.</em>',
		// 08 — ZAEC: osmo poglavlje filma, most iz priče u ponudu (tko smo, što radimo, za koga, kako, što dobivate,
		// kako početi). Smjernice: /mnt/project-files/zaec-signature/strategy/04-naslovnica.md.
		'recog_kicker'    => '08 — ZAEC',
		'recog_title'     => 'Svako svjetlo je nečiji posao. <em>Naš</em> je da se vaš vidi.',
		'recog_lead'      => 'ZAEC je web studio iz Osijeka. Projektiramo, gradimo i mjerimo web stranice za tvrtke kojima web mora donositi posao: od obrta i trgovina do stručnih usluga, proizvodnje i ustanova.',
		'recog_cta'       => 'Recite nam što želite postići',
		'recog_start'     => 'Prvi korak: razgovor od dvadesetak minuta i pisana procjena, bez obveze.',
		// Lijepo vs učinkovito.
		'cmp_kicker'      => 'Lijepo vs učinkovito',
		'cmp_title'       => 'Obje su lijepe. Samo jedna <em>radi</em>.',
		'cmp_lead'        => 'Povucite razdjelnik. Isti obrt, iste fotografije, isti budžet — drugačije odluke o tome što posjetitelj vidi prvo.',
		// Usluge.
		'services_kicker' => 'Usluge',
		'services_title'  => 'Usluge koje rade <em>zajedno</em>.',
		'services_lead'   => 'Ne prodajemo pakete radi paketa. Svaka usluga rješava jedan dio puta od pretrage do poziva — a najbolje radi spojena s ostalima. Odaberite uslugu i pogledajte s čime se povezuje.',
		// Radovi.
		'work_kicker'     => 'Radovi',
		'work_title'      => 'Stvarni projekti. <em>Stvarni</em> ljudi.',
		'work_lead'       => 'Bez izmišljenih klijenata i lažnih brojki. Ovo su radovi koje možete otvoriti i provjeriti — s problemom, razmišljanjem, rješenjem i ishodom.',
		// Možda ne.
		'maybe_kicker'    => 'Iskreno',
		'maybe_title'     => 'Možda vam novi web <em>još ne treba</em>.',
		'maybe_lead'      => 'Reći ćemo vam to prije nego što išta potpišete. Ponekad je pametniji prvi korak manji, brži i jeftiniji.',
		// Proces.
		'process_kicker'  => 'Proces',
		'process_title'   => 'Šest koraka. <em>Nula</em> iznenađenja.',
		'process_lead'    => 'Opseg, rok i cijenu znate prije prvog retka koda. Nakon svakog koraka znate što ste dobili.',
		// Ulaganje.
		'invest_kicker'   => 'Ulaganje',
		'invest_title'    => 'Cijena prema opsegu. <em>Napisana</em> unaprijed.',
		'invest_lead'     => 'Već ste se jednom opekli? Zato opseg, rok i cijenu dobivate na papiru prije početka. „Od” cijene ne objavljujemo jer ništa ne znače: web za obrt i webshop s integracijama nisu isti posao. Ponuda je fiksna i bez obveze.',
		// FAQ.
		'faq_kicker'      => 'Pitanja',
		'faq_title'       => 'Prije nego <em>pitate</em>.',
		// Završni upit.
		'final_kicker'    => 'Upit',
		'final_title'     => 'Ne morate znati što vam tehnički treba. <em>Recite nam što želite postići.</em>',
		'final_lead'      => 'Odaberite cilj, ostavite kontakt i javljamo se u radno vrijeme sa smjerom, opsegom i sljedećim korakom — bez obveze i bez prodajnog pritiska.',
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

/**
 * 08 — ZAEC: četiri retka legende nacrta. [ broj, naslov, tekst, [ [ putanja, naziv ], … ] ]
 * Sve tvrdnje već postoje drugdje na webu (usluge, proces, jamstva, stranica za Osijek).
 */
function zaec_home_about_rows() {
	return array(
		array(
			'01',
			'Što radimo',
			'Web stranice, webshopove i landing stranice. SEO, Google profil i AI vidljivost. Mjerenje poziva, upita i prodaje u GA4.',
			array( array( 'usluge/izrada-web-stranica', 'Izrada web stranica' ), array( 'usluge/webshop', 'Webshop' ), array( 'usluge/seo', 'SEO' ), array( 'usluge/ga4-i-pracenje-konverzija', 'GA4 i mjerenje' ) ),
		),
		array(
			'02',
			'Za koga',
			'Za tvrtke kojima web mora donositi upite: instalacije i gradnja, trgovina i ugostiteljstvo, stručne usluge, proizvodnja i ustanove.',
			array( array( 'djelatnosti', 'Pogledajte djelatnosti' ) ),
		),
		array(
			'03',
			'Kako radimo',
			'Nacrt prije dizajna. Fiksna cijena u pisanoj ponudi prije početka. Jedna osoba odgovara za projekt od prvog razgovora do objave.',
			array( array( '#proces', 'Proces u šest koraka' ) ),
		),
		array(
			'04',
			'Što dobivate',
			'Web koji kupac razumije u pet sekundi, mjerenje koje pokazuje što donosi posao i sve pristupe na vaše ime.',
			array( array( '#radovi', 'Pogledajte radove' ) ),
		),
	);
}

/** Sedam slojeva (redoslijed i nazivi prate 3D objekt u wire.js). */
function zaec_home_layers() {
	return array(
		array( '01', 'Poruka', 'Što radite, za koga i zašto baš vi — jasno u prvih pet sekundi, jezikom kupca, ne agencije.', 'chat-round-dots' ),
		array( '02', 'Struktura', 'Stranice i redoslijed sadržaja složeni prema pitanjima koja kupac postavlja prije odluke.', 'widget' ),
		array( '03', 'UX', 'Putokazi, ritam i jedan jasan sljedeći korak na svakom ekranu. Prvo za palac, onda za miš.', 'smartphone' ),
		array( '04', 'Tehnologija', 'WordPress po mjeri, brz kod, sigurnost i sigurnosne kopije. Sadržaj uređujete sami, bez programera.', 'shield-check' ),
		array( '05', 'SEO', 'Tehnički SEO, schema, lokalni signali i sadržaj koji Google i AI asistenti mogu razumjeti i citirati.', 'magnifer' ),
		array( '06', 'Mjerenje', 'GA4, Google Tag Manager i praćenje konverzija: pozivi, forme, WhatsApp i e-commerce prodaja.', 'graph-up' ),
		array( '07', 'Konverzija', 'Sve iznad postoji zbog ovoga: poziv, upit, rezervacija ili kupnja — izmjereno, ne naslućeno.', 'target' ),
	);
}

/** Pet "vrata" u vizualizaciji puta posjetitelja (omjeri u src/js/world3/flow.js). */
function zaec_home_gates() {
	return array(
		array( 'Brzina', 'Učitava se šest sekundi', 'Otvara se odmah, i na mobitelu' ),
		array( 'Poruka', 'Slider i „Dobrodošli na naš web”', 'U pet sekundi: što, gdje i za koga' ),
		array( 'Povjerenje', 'Nema radova, lica ni jamstva', 'Stvarni radovi, recenzije i jamstva' ),
		array( 'Poziv na akciju', 'Kontakt skriven u podnožju', 'Jedan jasan sljedeći korak na svakom ekranu' ),
		array( 'Kontakt', 'Forma s dvanaest polja', 'Poziv, WhatsApp ili kratka forma' ),
	);
}

/** Lijepo vs učinkovito — što se promijenilo. */
function zaec_home_compare() {
	return array(
		array( 'Prvi ekran', 'Atmosferska fotografija i „Dobrodošli”', 'Usluga, mjesto i rok dolaska u jednoj rečenici' ),
		array( 'Izbornik', 'Devet stavki, sve jednako važne', 'Četiri stavke i istaknut kontakt' ),
		array( 'Dokaz', 'Nema ga ili je na dnu', 'Radovi, recenzije i jamstvo odmah ispod naslova' ),
		array( 'Poziv na akciju', '„Saznaj više”', '„Nazovite” i „Zatražite termin” — na mobitelu jednim dodirom' ),
		array( 'Mjerenje', 'Brojač posjeta', 'Svaki poziv i upit zabilježen u GA4' ),
	);
}

/** Usluge grupirane u sustav: izgradnja → vidljivost → rast, s vezama. */
function zaec_service_clusters() {
	return array(
		array(
			'name' => 'Izgradnja',
			'note' => 'Mjesto gdje kupac odlučuje.',
			'keys' => array( 'usluge/izrada-web-stranica', 'usluge/webshop', 'usluge/landing-stranice' ),
		),
		array(
			'name' => 'Vidljivost',
			'note' => 'Da vas nađu kad traže.',
			'keys' => array( 'usluge/seo', 'usluge/lokalni-seo', 'usluge/google-business-profil', 'usluge/ai-vidljivost' ),
		),
		array(
			'name' => 'Rast',
			'note' => 'Da znate što radi — i da radi i sutra.',
			'keys' => array( 'usluge/ga4-i-pracenje-konverzija', 'usluge/brzina-web-stranice', 'usluge/odrzavanje-weba' ),
		),
	);
}

/** Veze između usluga (za interaktivni prikaz sustava). */
function zaec_service_links() {
	return array(
		'usluge/izrada-web-stranica'       => array( 'usluge/seo', 'usluge/ga4-i-pracenje-konverzija', 'usluge/brzina-web-stranice', 'usluge/odrzavanje-weba' ),
		'usluge/webshop'                   => array( 'usluge/ga4-i-pracenje-konverzija', 'usluge/seo', 'usluge/brzina-web-stranice', 'usluge/odrzavanje-weba' ),
		'usluge/landing-stranice'          => array( 'usluge/ga4-i-pracenje-konverzija', 'usluge/brzina-web-stranice' ),
		'usluge/seo'                       => array( 'usluge/izrada-web-stranica', 'usluge/ai-vidljivost', 'usluge/brzina-web-stranice' ),
		'usluge/lokalni-seo'               => array( 'usluge/google-business-profil', 'usluge/izrada-web-stranica', 'usluge/ai-vidljivost' ),
		'usluge/google-business-profil'    => array( 'usluge/lokalni-seo', 'usluge/ga4-i-pracenje-konverzija' ),
		'usluge/ai-vidljivost'             => array( 'usluge/seo', 'usluge/lokalni-seo', 'usluge/google-business-profil' ),
		'usluge/ga4-i-pracenje-konverzija' => array( 'usluge/webshop', 'usluge/izrada-web-stranica', 'usluge/landing-stranice' ),
		'usluge/brzina-web-stranice'       => array( 'usluge/seo', 'usluge/izrada-web-stranica' ),
		'usluge/odrzavanje-weba'           => array( 'usluge/izrada-web-stranica', 'usluge/webshop' ),
	);
}

/** Kada vam novi web (još) ne treba — i što umjesto toga. */
function zaec_home_maybe() {
	return array(
		array( 'Ako vam Google profil nije sređen', 'Krenite od profila: kategorije, fotografije, radno vrijeme i recenzije. Za lokalne usluge to je često najbrži put do poziva.', 'usluge/google-business-profil', 'Google Business profil' ),
		array( 'Ako je posao pun i ne stižete', 'Novi web neka pričeka. Uložite u ljude i procese, pa se vratite kad budete spremni rasti — reći ćemo vam isto.', '', '' ),
		array( 'Ako web postoji, ali ništa ne mjerite', 'Prvo postavite mjerenje poziva i upita. Tek s brojkama znamo što popraviti, a često je popravak dovoljan.', 'usluge/ga4-i-pracenje-konverzija', 'GA4 i praćenje konverzija' ),
		array( 'Ako vam treba samo jedna kampanja', 'Landing stranica je brža i jeftinija od cijelog weba — i lakše se mjeri.', 'usluge/landing-stranice', 'Landing stranice' ),
	);
}

/** Šest koraka procesa (naslovnica). */
function zaec_home_steps() {
	return array(
		array( 'Razumijemo posao', 'Kratki razgovor od dvadesetak minuta: kako radite, tko su vam kupci, odakle dolaze upiti i gdje se gube.', 'Iskrenu procjenu — i preporuku da ne radite ništa, ako je to pametnije.' ),
		array( 'Projektiramo put korisnika', 'Mapiramo pitanja kupca i redoslijed odluke: s kojih kanala dolazi, što mora vidjeti i gdje se odlučuje.', 'Strukturu stranica i pisanu ponudu s fiksnom cijenom i rokom.' ),
		array( 'Dizajniramo sustav', 'Vizualni smjer, tipografija, komponente i ključni ekrani — prvo za mobitel.', 'Pregled dizajna i dogovoreni broj korekcija prije razvoja.' ),
		array( 'Gradimo', 'WordPress po mjeri, tekstovi, SEO temelji, schema i mjerenje — sve prema nacrtu.', 'Pristup radnoj verziji tijekom izrade.' ),
		array( 'Testiramo', 'Stvarni mobiteli, brzina, svaki obrazac, svaki gumb za poziv i svaki događaj u GA4.', 'Popis provjera koji možete proći i sami.' ),
		array( 'Lansiramo', 'Objava, Search Console, Google profil, edukacija i 14 dana jamstva. Onda gledamo brojke.', 'Pristupe na vaše ime i prvi izvještaj.' ),
	);
}

/** Četiri koraka (za landing stranice — blocks.php). */
function zaec_home_process() {
	return array(
		array( 'K.01', 'Besplatan razgovor', 'Saznamo kako radite, tko su vam kupci i gdje gubite upite. Ako vam ne trebamo — reći ćemo.', '20 minuta · bez obveze' ),
		array( 'K.02', 'Nacrt i fiksna ponuda', 'Struktura stranica, sadržaj, funkcije i mjerenje — na papiru, uz fiksnu cijenu i rok.', 'opseg potvrđen pisano' ),
		array( 'K.03', 'Izrada i testiranje', 'Dizajn, tekstovi i razvoj prema nacrtu. Testiramo na stvarnim mobitelima, brzinu i svaki obrazac.', 'pregled u tijeku rada' ),
		array( 'K.04', 'Objava, mjerenje, rast', 'Objava, Search Console, GA4 i Google profil. Pristupi, edukacija i 14 dana jamstva.', 'brojke od prvog dana' ),
	);
}

/** Tri tipa opsega (bez cijena — cijena ide u pisanu ponudu). */
function zaec_home_scopes() {
	return array(
		array( 'Fokusirani web', 'Landing ili manji poslovni web za jasnu ponudu. Najbrži put do mjerljivih upita.', array( 'Jedna ponuda ili djelatnost', 'Poziv, WhatsApp i kratka forma', 'Lokalni SEO temelji i mjerenje' ) ),
		array( 'Poslovni web po mjeri', 'Više usluga, lokacija ili djelatnosti — sadržaj i struktura složeni za pretragu i odluku.', array( 'Stranica za svaku uslugu', 'Radovi, recenzije, vodiči', 'SEO struktura, schema i GA4' ) ),
		array( 'Webshop i integracije', 'Prodaja 0–24 na WooCommerceu, s plaćanjem i dostavom za hrvatsko tržište.', array( 'Katalog, plaćanje, dostava', 'GA4 e-commerce praćenje', 'Pravila prodaje i obrada narudžbi' ) ),
	);
}

/** Što određuje cijenu. */
function zaec_home_price_factors() {
	return array( 'Broj stranica i predložaka', 'Imate li tekstove i fotografije', 'Funkcije: rezervacije, webshop, integracije', 'Željeni rok' );
}

/** Ciljevi za progresivnu formu (vrijednosti idu u email). */
function zaec_home_goals() {
	return array(
		'Više poziva i upita',
		'Prodaja preko weba',
		'Bolja vidljivost na Googleu',
		'Pojaviti se u AI pretrazi',
		'Znati što radi, a što ne',
		'Novi web umjesto zastarjelog',
		'Još ne znam — trebam savjet',
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
		array( 'Koliko košta izrada web stranice?', 'Ovisi o opsegu: broju stranica, funkcijama i tome imate li sadržaj. Zato ne objavljujemo „od” cijene koje ništa ne znače. Nakon kratkog razgovora dobivate pisanu ponudu s fiksnom cijenom i rokom, bez obveze. Okvirni opseg i rok možete odmah složiti u procjeni projekta.' ),
		array( 'Koliko traje izrada?', 'Landing stranica je najbrža, webshop i integracije traju najdulje. Okvirni rok vidite u procjeni projekta, a točan rok piše u ponudi prije početka.' ),
		array( 'Garantirate li prvo mjesto na Googleu?', 'Ne — i bježite od svakoga tko to garantira. Garantiramo ispravno postavljene temelje (brzina, struktura, schema, Google profil, mjerenje) i brojke koje pokazuju napredak.' ),
		array( 'Što ako mi se dizajn ne svidi?', 'Zato prvo ide nacrt i vizualni smjer, uz dogovoreni broj korekcija prije razvoja. Ne gradimo naslijepo pa onda mijenjamo iz temelja.' ),
		array( 'Imam web — trebam li novi?', 'Ne nužno. Napravimo besplatnu provjeru vidljivosti i iskreno kažemo isplati li se popravak ili nova izrada.' ),
		array( 'Tko je vlasnik weba?', 'Vi. Domena, hosting, pristupi i sadržaj registrirani su na vas. Možete otići kad god želite — bez otkupa i ucjene.' ),
		array( 'Hoću li moći sam uređivati sadržaj?', 'Da. Web je na WordPressu, a pri primopredaji pokažemo kako mijenjate tekstove, slike, radove i cijene.' ),
		array( 'Što je s ChatGPT-om i AI pretragom?', 'Postavljamo ono što AI asistenti koriste: jasan sadržaj s odgovorima, schema markup, dosljedne podatke o tvrtki i recenzije. Preporuku ne može garantirati nitko, ali šanse možemo bitno povećati — i mjeriti.' ),
		array( 'Radite li webshop i praćenje prodaje?', 'Da: WooCommerce, kartično plaćanje za hrvatsko tržište i GA4 e-commerce praćenje (od pregleda proizvoda do kupnje), uz Consent Mode v2.' ),
		array( 'Radite li samo u Osijeku?', 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom.' ),
	);
}
