<?php
/**
 * Djelatnosti i posebne stranice.
 *
 * Dvije razine (docs/signature/subpages.md, strategija: 01-djelatnosti-nomenklatura):
 *  - sektor: 8 skupina + "Nešto drugo" — koristi se gdje kupac bira čime se bavi (procjena, forma, hub);
 *  - stranica djelatnosti: postojećih 8 landing stranica (URL-ovi ostaju), svaka pripada jednom sektoru.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Sektori (redoslijed = prikaz): stručne usluge i ustanove prvi, zatim energetika i instalacije, gradnja i završni
 * radovi, proizvodnja; trgovina, ugostiteljstvo i saloni na kraju (istraživanje tržišta, listopad 2026).
 * short = chip u procjeni i kicker, name = puni naziv (forma, sažetak upita, hub), about = rečenica za hub.
 */
function zaec_sectors() {
	return array(
		'strucne-usluge' => array(
			'short'    => 'Stručne usluge',
			'name'     => 'Stručne i poslovne usluge',
			'icon'     => 'clipboard-check',
			'examples' => 'knjigovodstvo, arhitekti i geodeti, inženjering, zaštita na radu, laboratoriji i certifikacija, IT',
			'about'    => 'Prije nego što vas nazovu, provjere vas na webu. Ako tamo nema jasnih usluga, referenci i ljudi iza posla, zovu nekoga drugog.',
			'proof'    => 'eurokontrola.hr',
		),
		'ustanove'       => array(
			'short'    => 'Ustanove i udruge',
			'name'     => 'Ustanove, udruge i obrazovanje',
			'icon'     => 'users-group-rounded',
			'examples' => 'javne ustanove, privatni vrtići, škole jezika i autoškole, udruge s projektima, sportski klubovi',
			'about'    => 'Mnogo različitih posjetitelja i puno sadržaja: roditelji, korisnici, partneri i javnost moraju naći svoje bez lutanja.',
			'proof'    => 'cza-os.hr',
		),
		'instalacije'    => array(
			'short'    => 'Instalacije',
			'name'     => 'Energetika, grijanje i instalacije',
			'icon'     => 'bolt',
			'examples' => 'sunčane elektrane, dizalice topline i klima, elektroinstalacije, punionice, vodo- i plinoinstalacije',
			'about'    => 'Kad Fond otvori poziv za solare ili dizalice topline, ljudi traže tko ugrađuje u svojem kraju. Posao dobiva onaj tko najjasnije objasni postupak.',
		),
		'gradnja'        => array(
			'short'    => 'Gradnja i obnova',
			'name'     => 'Gradnja, obnova i završni radovi',
			'icon'     => 'buildings',
			'examples' => 'stolarija i kuhinje po mjeri, krovovi i fasade, adaptacije, kupaonice i keramika',
			'about'    => 'Kupac traži tri ponude i gleda radove. Pobjeđuje onaj čiji su projekti stvarni, proces jasan, a ponuda usporediva.',
		),
		'proizvodnja'    => array(
			'short'    => 'Proizvodnja i industrija',
			'name'     => 'Proizvodnja i industrija',
			'icon'     => 'box-minimalistic',
			'examples' => 'proizvođači, prerada hrane, metal i drvo, distribucija i veleprodaja',
			'about'    => 'Kupac je često nabava ili partner iz inozemstva: traži program proizvodnje, certifikate, kapacitete i kontakt prave osobe, po mogućnosti na engleskom.',
		),
		'trgovina'       => array(
			'short'    => 'Trgovina',
			'name'     => 'Trgovina i webshopovi',
			'icon'     => 'shop',
			'examples' => 'specijalizirane trgovine, oprema i rezervni dijelovi, lokalni proizvodi, katalog s upitom',
			'about'    => 'Nišni proizvod kupac traži po nazivu. Katalog s upitom često je brži put do prodaje od webshopa.',
		),
		'ugostiteljstvo' => array(
			'short'    => 'Ugostiteljstvo',
			'name'     => 'Ugostiteljstvo i turizam',
			'icon'     => 'bed',
			'examples' => 'smještaj i kuće za odmor, vinarije i kušaonice, restorani, catering',
			'about'    => 'Gost vas prvo vidi na karti. Počinjemo od Google profila, a web dodajemo kad donosi rezervacije bez provizije.',
		),
		'ljepota'        => array(
			'short'    => 'Ljepota i njega',
			'name'     => 'Ljepota, njega i wellness',
			'icon'     => 'star',
			'examples' => 'frizeri, kozmetički saloni, manikura i pedikura, masaže',
			'about'    => 'Fotografije, cjenik, recenzije i slobodan termin. Najčešće je dovoljan uređen Google profil s poveznicom na rezervacije.',
		),
	);
}

/** "Nešto drugo" — izvan popisa sektora; strukturu složimo u razgovoru. */
const ZAEC_SECTOR_OTHER = array( 'key' => 'ostalo', 'short' => 'Nešto drugo', 'name' => 'Nešto drugo', 'icon' => 'add-circle' );

/** Stari tabovi → sektor (već podijeljene poveznice ?djelatnost=Klima i sl.). */
function zaec_sector_legacy_map() {
	return array( 'Klima' => 'instalacije', 'Voda' => 'instalacije', 'Struja' => 'instalacije', 'Krov' => 'gradnja', 'Građevina' => 'gradnja', 'Smještaj' => 'ugostiteljstvo', 'Shop' => 'trgovina', 'Salon' => 'ljepota', 'Ostalo' => 'ostalo' );
}

/**
 * Vrijednost ?djelatnost= → array( sektor, stranica|null ). Prihvaća, tim redom: ključ sektora, slug stranice
 * djelatnosti (sektor + detalj), stari tab. Nepoznato → null.
 */
function zaec_sector_resolve( $value ) {
	$value = trim( (string) $value );
	if ( '' === $value ) {
		return null;
	}
	if ( isset( zaec_sectors()[ $value ] ) || 'ostalo' === $value ) {
		return array( $value, null );
	}
	foreach ( zaec_industries() as $ind ) {
		if ( $ind['slug'] === $value ) {
			return array( $ind['sector'], $ind );
		}
	}
	$legacy = zaec_sector_legacy_map();
	return isset( $legacy[ $value ] ) ? array( $legacy[ $value ], null ) : null;
}

/** Stranice djelatnosti jednog sektora (redoslijed iz registra). */
function zaec_sector_pages( $sector ) {
	return array_values( array_filter( zaec_industries(), static fn( $i ) => ( $i['sector'] ?? '' ) === $sector ) );
}

/**
 * Mapa za procjenu (JS): slug stranice i stari tab → sektor (+ naziv stranice). Vrijednosti su iz registra,
 * pa JS ne mora znati popis djelatnosti.
 */
function zaec_sector_js_map() {
	$map = array();
	foreach ( zaec_industries() as $ind ) {
		$map[ $ind['slug'] ] = array( $ind['sector'], $ind['label'] );
	}
	foreach ( zaec_sector_legacy_map() as $tab => $sector ) {
		$map[ $tab ] = array( $sector, '' );
	}
	return $map;
}

/** Objavljeni projekt po domeni (dokaz uz sektor na hubu) ili null. Samo stvarni, javni projekti. */
function zaec_project_by_host( $host ) {
	static $cache = array();
	if ( ! array_key_exists( $host, $cache ) ) {
		$cache[ $host ] = null;
		foreach ( zaec_get_projects( 12 ) as $p ) {
			$h = preg_replace( '/^www\./', '', strtolower( (string) wp_parse_url( (string) ( $p['website_url'] ?? '' ), PHP_URL_HOST ) ) );
			if ( $h === $host ) {
				$cache[ $host ] = $p;
				break;
			}
		}
	}
	return $cache[ $host ];
}

/** Zajednički FAQ za djelatnosti. */
/**
 * „Kako do subvencije“: četiri koraka do sufinanciranja (dizalice topline, sunčane elektrane).
 * Bez iznosa i rokova na webu: uvjeti se mijenjaju po pozivu, pa web vodi na službenu objavu Fonda.
 */
function zaec_industry_subsidy_block( $what ) {
	return array(
		'type'   => 'process',
		'kicker' => 'Subvencije',
		'title'  => 'Kako do <em>subvencije</em>.',
		'lead'   => 'Tko traži ' . $what . ', pita dvije stvari: tko je ugrađuje i kako doći do sufinanciranja. Web to objasni u četiri koraka, a uvjete poveže sa službenom objavom Fonda.',
		'items'  => array(
			array( 'S.01', 'Provjera kuće', 'Kupac pošalje mjesto, kvadraturu i sadašnje stanje. Vi odmah vidite je li upit ozbiljan.', 'upit s podacima' ),
			array( 'S.02', 'Ponuda i dokumentacija', 'Ponuda i papiri koje poziv traži, složeni tako da ih kupac može odmah predati.', 'za prijavu na poziv' ),
			array( 'S.03', 'Prijava na poziv', 'Na webu piše kad je poziv otvoren i gdje je službena objava, pa kupac ne propusti rok.', 'rokovi Fonda' ),
			array( 'S.04', 'Ugradnja i isplata', 'Nakon odobrenja slijedi ugradnja, pa zahtjev za isplatu. Kupac zna što ga čeka do kraja.', 'nakon odobrenja' ),
		),
	);
}

function zaec_industry_common_faq() {
	return array(
		array( 'Koliko košta web za moju djelatnost?', 'Ovisi o broju usluga, stranica i funkcija (npr. rezervacije ili webshop). Složite procjenu projekta — vaša djelatnost je već odabrana — i dobit ćete pisanu ponudu.' ),
		array( 'Što ako već imam web?', 'Prvo napravimo besplatnu provjeru vidljivosti. Često je dovoljno urediti Google profil, dodati stranice za usluge i prikupiti recenzije — bez izrade novog weba.' ),
	);
}

function zaec_registry_industries() {
	$r = array();

	$r['djelatnosti'] = array(
		'type'        => 'hub-industries',
		'title'       => 'Djelatnosti',
		'seo_title'   => 'Web stranice po djelatnostima: od obrta do industrije | ZAEC',
		'description' => 'Web i Google profil prema tome kako vaši kupci biraju: stručne usluge, ustanove, energetika i instalacije, gradnja i stolarija, proizvodnja, trgovina, smještaj i saloni.',
		'kicker'      => 'Djelatnosti',
		'h1'          => 'Svaka djelatnost ima svoja <em>pitanja</em>.',
		'lead'        => 'Računovođu provjere na webu prije poziva, solare biraju između tri ponude, a kuhinju po izvedenim radovima. Web složimo prema tome kako vaši kupci biraju. Odaberite svoje područje.',
		'answer'      => 'Web stranice i Google profile slažemo prema djelatnosti: za stručne usluge i ustanove jasnu strukturu usluga, reference i upit prema opsegu; za solare i dizalice topline postupak do subvencije; za stolariju, krovove i adaptacije galeriju radova i ponudu koju kupac može usporediti; za hitne intervencije, smještaj i salone najprije Google profil.',
		'image'       => 'world/usluga-web.webp',
		'image_alt'   => 'Web stranica kao svijetleći ekran u noći: pola gotov dizajn, pola plavi nacrt; tragovi upita vode do gumba za kontakt.',
		'cta'         => array( 'Besplatna provjera vidljivosti', 'provjera-vidljivosti' ),
		'blocks'      => array( array( 'type' => 'trades', 'title' => '', 'full' => true ) ),
		'faq'         => array(
			array( 'Moje djelatnosti nema na popisu.', 'Odaberite „Nešto drugo” ili najbliži sektor. Isti pristup radi za svaki posao koji kupci traže i uspoređuju na webu. Strukturu za vaš posao složimo u razgovoru.' ),
		),
		'related'     => array( 'izrada-web-stranica-osijek', 'provjera-vidljivosti', 'cijene' ),
	);

	$industries = array(
		'klima-i-grijanje'          => array(
			'tab' => 'Klima', 'sector' => 'instalacije', 'label' => 'Klima i dizalice topline', 'icon' => 'snowflake', 'prop' => 2, 'sign' => 'KLIMA SERVIS',
			'title' => 'Klima, grijanje i dizalice topline', 'name' => 'klima servise i dizalice topline',
			'seo_title' => 'Web za klima servise i dizalice topline | ZAEC',
			'description' => 'Web za klima servise i ugradnju dizalica topline: stranica „Kako do subvencije”, montaža i servis, upit s podacima o kući i lokalni SEO prije sezone.',
			'h1' => 'Web za klimu i dizalice topline: budite <em>prvi</em>&nbsp;izbor.',
			'lead' => 'Najviše upita donesu prvi vrući tjedan, prvi hladni dan i svaki novi poziv Fonda za dizalice topline. Tko je tada vidljiv na karti i jasno objasni postupak, dobiva poslove od nekoliko tisuća eura.',
			'short' => 'Dizalice topline, montaža i servis klima. Kupac mora vidjeti što radite, kako do subvencije i kako do izvida, prije nego što nazove konkurenciju.',
			'onweb' => array( 'Dizalice topline · klime', 'Kako do subvencije', 'Područje rada', 'Upit s podacima o kući' ),
			'searches' => array( 'dizalica topline ugradnja', 'subvencija dizalica topline', 'montaža klime + grad', 'servis klime cijena', 'klima ne hladi' ),
			'problems' => array(
				array( 'Dizalica topline u istoj rečenici sa servisom', 'Kupac koji ulaže nekoliko tisuća eura želi stranicu baš za to: opremu, postupak i izvedene radove.' ),
				array( 'Postupak subvencije nije objašnjen', 'Prijava, ponuda, ugradnja, isplata. Ako web to ne objasni, na isto pitanje odgovarate u svakom pozivu.' ),
				array( 'Sezona vas zatekne', 'Profil i web treba urediti prije sezone i prije poziva Fonda, a ne kad telefon već zvoni.' ),
			),
			'deliver' => array(
				array( 'Stranica za dizalice topline', 'Oprema, za kakve je kuće, što ulazi u ugradnju te izvedeni radovi s mjestom i snagom.' ),
				array( 'Kako do subvencije', 'Koraci od prijave do isplate i što kupac treba pripremiti. Uvjete povezujemo sa službenom objavom Fonda.' ),
				array( 'Upit s podacima o kući', 'Mjesto, kvadratura i sadašnje grijanje. Na izvid dolazite pripremljeni.' ),
				array( 'Montaža, servis i sezona', 'Stranice za montažu i servis klima te sezonske objave na webu i u Google profilu: servis prije ljeta, grijanje prije zime.' ),
			),
			'structure' => array( 'Prvi ekran: dizalice topline i klime + područje', 'Kako do subvencije', 'Usluge: dizalice topline, montaža, servis', 'Izvedeni radovi i recenzije', 'FAQ: postupak, rokovi, servis', 'Upit s podacima o kući + poziv' ),
			'faq' => array(
				array( 'Trebam li stranicu o subvenciji ako se uvjeti mijenjaju?', 'Da. Ljudi traže „subvencija dizalica topline” čim se poziv najavi. Na stranici objasnimo korake, a iznose i rokove povežemo sa službenom objavom Fonda, pa se mijenjaju jednim retkom.' ),
				array( 'Isplati li se web ako imam dovoljno posla ljeti?', 'Web pomaže i izvan sezone: dizalice topline, servisi i grijanje popune mirnije mjesece.' ),
				array( 'Što napisati na stranici za montažu klime?', 'Što ulazi u standardnu montažu (duljina cijevi, nosači, prodor kroz zid), što se naplaćuje dodatno i koliko traje. To su pitanja koja inače dobivate telefonom.' ),
			),
			'extra' => array( zaec_industry_subsidy_block( 'dizalicu topline' ) ),
			'related' => array( 'djelatnosti/elektricari', 'djelatnosti/vodoinstalateri', 'usluge/lokalni-seo' ),
		),
		'vodoinstalateri'           => array(
			'tab' => 'Voda', 'sector' => 'instalacije', 'label' => 'Vodoinstalateri', 'icon' => 'waterdrop', 'prop' => 7, 'sign' => 'VODOINSTALATER',
			'title' => 'Vodoinstalateri i plinoinstalateri', 'name' => 'vodoinstalatere',
			'seo_title' => 'Google profil i web za vodoinstalatere | ZAEC',
			'description' => 'Za vodoinstalaterske tvrtke s hitnom službom: Google profil i lokalni SEO za hitne pretrage, a web s intervencijama, područjem rada i hitnim pozivom kad imate više ekipa.',
			'h1' => 'Web za vodoinstalatere: kad curi, zovu onoga koga <em>prvog</em> nađu.',
			'lead' => 'Kod kvara nitko ne čita roman. Čovjek otvori Google, pogleda kartu i recenzije i nazove. Zato počinjemo od Google profila i lokalnog SEO-a, a web složimo kad imate ekipe i hitnu službu koju treba pokazati.',
			'short' => 'Kod hitnog kvara odlučuje karta: profil s radnim vremenom, područjem i recenzijama. Web s intervencijama dolazi kad imate više ekipa.',
			'onweb' => array( 'Google profil', 'Hitni poziv', 'Intervencije', 'Područje rada' ),
			'searches' => array( 'vodoinstalater + grad', 'hitni vodoinstalater', 'curi bojler', 'odčepljenje odvoda', 'plinoinstalater + grad' ),
			'problems' => array(
				array( 'Hitni poziv je zakopan', 'Ako je broj na dnu stranice, čovjek s poplavom u kupaonici već zove sljedećeg.' ),
				array( 'Nije jasno kamo dolazite', 'Ljudi žele odmah znati pokrivate li njihov kvart ili mjesto.' ),
				array( 'Profil nije uređen', 'Krivo radno vrijeme, bez područja dolaska i s malo recenzija. Na karti vas preskoče prije nego što vide web.' ),
			),
			'deliver' => array(
				array( 'Google profil za hitne pozive', 'Kategorija, radno vrijeme hitne službe, područje dolaska i fotografije. To je prvo što čovjek s kvarom vidi.' ),
				array( 'Gumb „Hitno — nazovi”', 'Na webu prikovan za dno ekrana na mobitelu, uz jasnu oznaku radite li hitno i kada.' ),
				array( 'Stranica za svaku intervenciju', 'Hitne intervencije, bojleri, odvodi, kupaonice, plin — svaka sa svojim pitanjima.' ),
				array( 'Recenzije nakon svakog posla', 'QR kartica ili WhatsApp poruka dok je klijent zadovoljan.' ),
			),
			'structure' => array( 'Prvi ekran: hitni poziv + područje', 'Intervencije (kartice)', 'Ekipe i recenzije', 'Područje rada', 'FAQ: izlazak, obračun, rokovi', 'Poziv + upit s fotografijom' ),
			'faq' => array(
				array( 'Trebam li odmah novi web?', 'Ne nužno. Ako vas kupci nalaze preko karte, prvo složimo Google profil i lokalni SEO. Web dolazi kad želite pokazati više ekipa, područja i usluga.' ),
				array( 'Trebam li objaviti cijene?', 'Ne morate objaviti točne cijene, ali objavljen način obračuna (izlazak, sat rada) smanjuje nepotrebne pozive i gradi povjerenje.' ),
				array( 'Kako da me nađu kad netko ima hitan kvar?', 'Broj telefona na prvom ekranu mobitela, Google profil s točnim radnim vremenom i područjem dolaska te stranica za hitne intervencije. Kod hitnog kvara ljudi zovu, ne čitaju.' ),
			),
			'cta' => array( 'Besplatna provjera profila', 'provjera-vidljivosti' ),
			'related' => array( 'usluge/google-business-profil', 'usluge/lokalni-seo', 'djelatnosti/klima-i-grijanje' ),
		),
		'elektricari'               => array(
			'tab' => 'Struja', 'sector' => 'instalacije', 'label' => 'Električari i solari', 'icon' => 'bolt', 'prop' => 3, 'sign' => 'ELEKTRO',
			'title' => 'Električari i sunčane elektrane', 'name' => 'elektroinstalaterske tvrtke',
			'seo_title' => 'Web za električare i sunčane elektrane | ZAEC',
			'description' => 'Web za elektroinstalaterske tvrtke: sunčane elektrane, baterije, punionice i instalacije kao zasebne usluge, postupak subvencije, reference i upit prema krovu i potrošnji.',
			'h1' => 'Web za električare: kad ljudi traže <em>solare</em>, budite prvi.',
			'lead' => 'Kad Fond otvori poziv za sunčane elektrane, ljudi traže tko ih ugrađuje u svojem kraju i uspoređuju tri ponude. Jasna stranica s postupkom, izvedenim elektranama i ekipom koja radi posao dovodi upite za poslove od nekoliko tisuća eura.',
			'short' => 'Sunčane elektrane, baterije, punionice i instalacije kao zasebne usluge, s postupkom, referencama i ekipom koja radi posao.',
			'onweb' => array( 'Solari · baterije · punionice', 'Kako do subvencije', 'Reference i ekipa', 'Upit prema krovu' ),
			'searches' => array( 'solarni paneli + grad', 'subvencija za solare', 'ugradnja solarnih panela', 'ugradnja punjača za auto', 'električar + grad' ),
			'problems' => array(
				array( 'Solari skriveni pod „elektroinstalacije”', 'Kupac koji traži sunčanu elektranu ne prepozna se u općenitom opisu i zove onoga tko ima stranicu baš za to.' ),
				array( 'Postupak nije objašnjen', 'Prijava na poziv, projekt, ugradnja, priključak. Ako web to ne objasni, na isto pitanje odgovarate u svakom pozivu.' ),
				array( 'Ne vide se ni ekipa ni radovi', 'Za posao od nekoliko tisuća eura kupac želi vidjeti izvedene elektrane, ovlaštenja i tko dolazi na krov.' ),
			),
			'deliver' => array(
				array( 'Stranica za svaku uslugu', 'Sunčane elektrane, baterije, punionice, instalacije i atesti. Svaka odgovara na pitanja svog kupca.' ),
				array( 'Kako do subvencije', 'Koraci od prijave do priključka i što kupac treba pripremiti. Uvjete povezujemo sa službenom objavom Fonda.' ),
				array( 'Reference, ekipa i ovlaštenja', 'Fotografije sa snagom elektrane, vrstom krova i mjestom, a uz njih tko radi posao i s kojim ovlaštenjima.' ),
				array( 'Upit prema krovu i potrošnji', 'Mjesto, vrsta krova i mjesečni račun za struju. Na prvi razgovor dolazite s okvirnim prijedlogom.' ),
			),
			'structure' => array( 'Prvi ekran: solari, punionice, instalacije + područje', 'Usluge (stranica za svaku)', 'Kako do subvencije', 'Reference i ekipa', 'FAQ', 'Upit prema krovu i potrošnji' ),
			'faq' => array(
				array( 'Isplati li se web ako posao dobivam preko izvođača?', 'Ako radite samo preko izvođača i preporuka, Google profil je često dovoljan. Web se isplati kad želite poslove izravno od kućanstava i tvrtki, posebno za solare, baterije i punionice.' ),
				array( 'Trebam li posebnu stranicu za solare i punjače?', 'Da, ako ih radite. Ljudi ih traže odvojeno od kvarova i instalacija, a zasebna stranica odgovara na njihova pitanja: što uključuje ugradnja, koja dokumentacija treba i koliko traje.' ),
				array( 'Gdje istaknuti ovlaštenja i atest?', 'Na stranici usluge i uz kontakt. Za veće radove i atest kupac želi znati da imate ovlaštenje prije nego što pošalje upit.' ),
			),
			'extra' => array( zaec_industry_subsidy_block( 'sunčanu elektranu' ) ),
			'related' => array( 'djelatnosti/klima-i-grijanje', 'usluge/lokalni-seo', 'usluge/izrada-web-stranica' ),
		),
		'krovopokrivaci'            => array(
			'tab' => 'Krov', 'sector' => 'gradnja', 'label' => 'Krovopokrivači', 'icon' => 'home', 'prop' => 5, 'sign' => 'KROVOVI',
			'title' => 'Krovopokrivači i limari', 'name' => 'krovopokrivače i limare',
			'seo_title' => 'Web stranica za krovopokrivače i limare | ZAEC',
			'description' => 'Web za krovopokrivače i limare: galerija prije/poslije, vrste krovova i materijala, hitne sanacije nakon nevremena i upit za procjenu s fotografijama.',
			'h1' => 'Web za krovopokrivače: krov se prodaje <em>povjerenjem</em>.',
			'lead' => 'Krov je velika investicija i kupac traži tri ponude. Pobjeđuje onaj čije radove može vidjeti, čiju ponudu razumije i za koga zna tko dolazi na krov. Upravo to pokazuje dobar web.',
			'short' => 'Krov se prodaje povjerenjem: galerija izvedenih radova, ponuda koju kupac može usporediti i jednostavan put do procjene.',
			'onweb' => array( 'Galerija prije / poslije', 'Usporediva ponuda', 'Hitne sanacije', 'Upit za procjenu' ),
			'searches' => array( 'krovopokrivač + grad', 'sanacija krova cijena', 'izmjena crijepa', 'limarski radovi oluci', 'popravak krova nakon nevremena' ),
			'problems' => array(
				array( 'Nema fotografija radova', 'Bez usporedbe prije i poslije kupac ne može procijeniti kvalitetu.' ),
				array( 'Nevrijeme donese val upita', 'Nakon oluje svi traže krovopokrivača odjednom — tko je vidljiv tog dana, dobiva posao.' ),
				array( 'Usporedba samo po cijeni', 'Ako kupac ne vidi razliku u materijalu, limariji i jamstvu, bira najjeftiniju ponudu.' ),
			),
			'deliver' => array(
				array( 'Galerija prije / poslije', 'S kratkim opisom: lokacija, vrsta krova, materijal.' ),
				array( 'Stranice po vrsti posla', 'Sanacije, novi krovovi, limarija i oluci, ravni krovovi.' ),
				array( 'Upit za procjenu', 'Mjesto, vrsta krova, površina i fotografije — dolazite pripremljeni.' ),
				array( 'Ponuda koju kupac može usporediti', 'Što ulazi u posao: materijal, limarija, odvoz i jamstvo. Kupac uspoređuje stavke, a ne samo iznos.' ),
			),
			'structure' => array( 'Prvi ekran: vrste radova + područje', 'Prije / poslije', 'Materijali i vrste krova', 'Proces i jamstvo', 'FAQ', 'Upit za procjenu' ),
			'faq' => array(
				array( 'Kakve fotografije trebam za web?', 'Najbolje rade fotografije prije i poslije s istog kuta, detalji opšava i limarije te krov nakon završetka. Mobitel je dovoljan ako su fotografije oštre i snimljene po danu.' ),
				array( 'Kako da kupac ne bira samo po cijeni?', 'Pokažite izvedene krovove s materijalom i godinom i objasnite što ulazi u ponudu. Kad kupac uspoređuje stavke, a ne iznos, ozbiljnija ponuda ima prednost.' ),
				array( 'Kako dobiti upite za hitne sanacije?', 'Zasebna stranica za sanacije nakon nevremena, broj telefona na vrhu i ažuran Google profil. Nakon oluje ljudi traže brzo i zovu one do kojih odmah dođu.' ),
			),
			'related' => array( 'djelatnosti/gradevina-i-adaptacije', 'usluge/izrada-web-stranica', 'usluge/lokalni-seo' ),
		),
		'gradevina-i-adaptacije'    => array(
			'tab' => 'Građevina', 'sector' => 'gradnja', 'label' => 'Izvođači radova', 'icon' => 'buildings', 'prop' => 6, 'sign' => 'GRADNJA',
			'title' => 'Građevina i adaptacije', 'name' => 'građevinske obrte i adaptacije',
			'seo_title' => 'Web stranica za građevinske obrte i adaptacije | ZAEC',
			'description' => 'Web za građevinske obrte: adaptacije stanova i kupaonica, fasade, keramika i završni radovi. Projekti kao studije, jasan proces i upit prema opsegu.',
			'h1' => 'Web za građevinu: pokažite kako radite <em>prije</em> prvog poziva.',
			'lead' => 'Kod adaptacije kupac uspoređuje tri izvođača i boji se kašnjenja, skrivenih troškova i nereda. Galerija stvarnih projekata, jasan proces i ponuda koju može usporediti uklanjaju taj strah i privlače ozbiljnije klijente.',
			'short' => 'Kupac želi vidjeti što preuzimate, kako izgleda proces i stvarne projekte — prije prvog poziva. Dobar web filtrira ozbiljne upite.',
			'onweb' => array( 'Galerija projekata', 'Proces i ponuda', 'Usluge', 'Upit prema opsegu' ),
			'searches' => array( 'adaptacija stana + grad', 'adaptacija kupaonice cijena', 'keramičar + grad', 'fasaderski radovi', 'građevinska firma + grad' ),
			'problems' => array(
				array( 'Projekti nisu prikazani', 'Fotografije su na Facebooku od prije tri godine, a na webu ništa.' ),
				array( 'Nejasan proces', 'Kupac ne zna kako izgleda suradnja: izvid, ponuda, rokovi, plaćanje.' ),
				array( 'Pogrešni upiti', 'Bez jasnog opisa što preuzimate javljaju se ljudi za poslove koje ne želite.' ),
			),
			'deliver' => array(
				array( 'Projekti kao studije', 'Što je bilo, što je napravljeno i koliko je trajalo — uz fotografije.' ),
				array( 'Proces i ponuda po stavkama', 'Koraci od izvida do primopredaje i ponuda koju kupac može stavku po stavku usporediti s drugima.' ),
				array( 'Stranice po vrsti radova', 'Stanovi, kupaonice, fasade, keramika, suhomontažni radovi.' ),
				array( 'Upit s fotografijama', 'Fotografije prostora i okvirne mjere već u prvom upitu.' ),
			),
			'structure' => array( 'Prvi ekran: što preuzimate', 'Usluge', 'Projekti (studije)', 'Proces', 'FAQ', 'Upit prema opsegu' ),
			'faq' => array(
				array( 'Kako prikazati radove bez profesionalnog fotografa?', 'Kao kratke studije: stanje prije, što je napravljeno, koliko je trajalo i završne fotografije. Iskren opis procesa često uvjeri više od savršene fotografije.' ),
				array( 'Kupci uspoređuju ponude. Kako da ne izgubim na cijeni?', 'Pokažite usporedive stvari: što ulazi u posao, rok i tko radi. Kupac koji vidi stavke i stvarne projekte rjeđe bira samo najniži iznos.' ),
				array( 'Može li forma tražiti podatke o opsegu radova?', 'Da. Forma može pitati vrstu radova, kvadraturu, lokaciju i željeni rok te primiti fotografije, pa ozbiljnije upite odmah razlikujete od usputnih.' ),
			),
			'related' => array( 'djelatnosti/stolarija-kuhinje-i-interijeri', 'djelatnosti/krovopokrivaci', 'usluge/izrada-web-stranica' ),
		),
		'stolarija-kuhinje-i-interijeri' => array(
			'tab' => 'Stolarija', 'sector' => 'gradnja', 'label' => 'Stolarija i interijeri', 'icon' => 'window-frame', 'prop' => 4, 'sign' => 'STOLARIJA',
			'title' => 'Stolarija, kuhinje i interijeri', 'name' => 'stolarije, kuhinje po mjeri i interijere',
			'seo_title' => 'Web stranica za stolariju, kuhinje i interijere | ZAEC',
			'description' => 'Web za stolarije i proizvođače namještaja: PVC, ALU i drvena stolarija, kuhinje i interijeri po mjeri. Galerija radova, usporedba materijala i upit s mjerama.',
			'h1' => 'Web za stolariju i interijere: neka radovi <em>prodaju</em> umjesto vas.',
			'lead' => 'Kupac prozora ili kuhinje po mjeri uspoređuje nekoliko ponuda i dugo odlučuje. Bira onoga čije je radove vidio, čije materijale razumije i kome je lako poslati mjere. Web to pokaže prije nego što kupac nazove konkurenciju.',
			'short' => 'Galerija gotovih radova, materijali objašnjeni jezikom kupca i upit s mjerama. Tako kupac ponude ne uspoređuje samo po cijeni.',
			'onweb' => array( 'Galerija radova', 'Materijali i usporedba', 'Usluge', 'Upit s mjerama' ),
			'searches' => array( 'pvc stolarija + grad', 'kuhinje po mjeri + grad', 'zamjena prozora cijena', 'alu stolarija ili pvc', 'namještaj po mjeri' ),
			'problems' => array(
				array( 'Radovi su samo na Facebooku', 'Najbolje kuhinje i prozori ostanu u objavama od prije dvije godine, a tko traži na Googleu, ne vidi ništa.' ),
				array( 'Kupac ne razumije razliku', 'PVC, ALU, drvo, profili i stakla. Bez jasnog objašnjenja bira po najnižoj cijeni.' ),
				array( 'Upit bez mjera', 'Prvi poziv ode na pitanja koja je forma mogla postaviti: koliko prozora, kakve mjere, koji materijal.' ),
			),
			'deliver' => array(
				array( 'Galerija po vrsti radova', 'Prozori, vrata, kuhinje i interijeri odvojeno, s mjestom i kratkim opisom svakog posla.' ),
				array( 'Materijali i usporedba', 'Što nudite i kad se što isplati, jezikom kupca. Ponude se tada uspoređuju po sadržaju, a ne samo po iznosu.' ),
				array( 'Stranice po uslugama', 'Stolarija, ugradnja, kuhinje i namještaj po mjeri, svaka sa svojim radovima i pitanjima.' ),
				array( 'Upit s mjerama i fotografijama', 'Broj otvora, okvirne mjere, materijal i fotografija prostora već u prvom upitu.' ),
			),
			'structure' => array( 'Prvi ekran: što izrađujete + područje', 'Galerija radova', 'Materijali i usporedba', 'Postupak od mjerenja do ugradnje', 'FAQ', 'Upit s mjerama' ),
			'faq' => array(
				array( 'Kako prikazati radove ako nemam profesionalne fotografije?', 'Dobre fotografije mobitelom na dnevnom svjetlu su dovoljne za početak. Važnije je da su radovi složeni po vrsti i da uz svaki piše što je napravljeno i gdje.' ),
				array( 'Treba li cjenik na webu?', 'Ne mora. Za rad po mjeri bolje je objasniti o čemu cijena ovisi i tražiti mjere u upitu. Kupac tada dobiva ponudu koju razumije.' ),
				array( 'Može li upit primiti mjere i fotografije?', 'Da. Forma pita broj otvora ili vrstu namještaja, okvirne mjere, materijal i lokaciju te prima fotografije, pa ponudu možete pripremiti bez dodatnih poziva.' ),
			),
			'related' => array( 'djelatnosti/gradevina-i-adaptacije', 'djelatnosti/krovopokrivaci', 'usluge/izrada-web-stranica' ),
		),
		'ugostiteljstvo-i-smjestaj' => array(
			'tab' => 'Smještaj', 'sector' => 'ugostiteljstvo', 'label' => 'Smještaj i vinarije', 'icon' => 'bed', 'prop' => 9, 'sign' => 'APARTMANI',
			'title' => 'Smještaj, vinarije i restorani', 'name' => 'smještaj, vinarije i restorane',
			'seo_title' => 'Web za smještaj, vinarije i restorane | ZAEC',
			'description' => 'Za smještaj, vinarije, kušaonice i restorane: prvo Google profil, zatim web s ponudom, više jezika i direktnom rezervacijom ili terminom kušanja bez provizije platformi.',
			'h1' => 'Za smještaj i vinarije: više <em>direktnih</em> gostiju.',
			'lead' => 'Gost vas najčešće prvo vidi na Google karti ili platformi, zato počinjemo od Google profila. Vlastiti web s ponudom, fotografijama i direktnim upitom dodajemo kad donosi rezervacije bez provizije: za smještaj, vinarije i kušaonice, restorane, catering i događanja.',
			'short' => 'Prvo uređen Google profil, a web kad donosi direktne rezervacije: smještaj, kušanja, catering i događanja bez provizije.',
			'onweb' => array( 'Google profil', 'Sobe / kušanja', 'Rezervacija', 'Više jezika' ),
			'searches' => array( 'apartmani + mjesto', 'kušaonica vina + mjesto', 'vinarija + mjesto', 'smještaj s bazenom', 'catering + grad' ),
			'problems' => array(
				array( 'Meni kao PDF', 'Na mobitelu je PDF spor i nečitljiv. Ljudi zatvore stranicu.' ),
				array( 'Sve preko platformi', 'Provizija na svaku rezervaciju — čak i za goste koji se vraćaju.' ),
				array( 'Zastarjeli podaci', 'Krivo radno vrijeme na Googleu znači gosta pred zatvorenim vratima i lošu recenziju.' ),
			),
			'deliver' => array(
				array( 'Google profil kao prvi korak', 'Točno radno vrijeme, fotografije, ponuda i recenzije. To je prvo što gost vidi na karti.' ),
				array( 'Direktan upit ili rezervacija', 'Datumi i broj gostiju ili termin kušanja u prvom koraku; povezivanje sa sustavom za rezervacije po potrebi.' ),
				array( 'Fotografije i lokacija', 'Prostor, jela ili smještaj, karta, parking i kako doći.' ),
				array( 'Više jezika', 'Engleski i njemački za ključne stranice — bez strojnog prijevoda koji odbija goste.' ),
			),
			'structure' => array( 'Prvi ekran: fotografija + upit/rezervacija', 'Smještaj, kušanja ili meni', 'Galerija', 'Lokacija i kako doći', 'Recenzije', 'Upit / rezervacija' ),
			'faq' => array(
				array( 'Imam vinariju. Treba li mi web ili webshop?', 'Za kušanja i posjete dovoljan je web s rezervacijom termina. Ako vino prodajete izravno, dodajemo katalog s upitom ili mali webshop, u skladu s pravilima o prodaji alkohola koja vrijede za vas.' ),
				array( 'Trebam li vlastiti web ako sam na Bookingu?', 'Platforme donose goste, ali uzimaju proviziju. Vlastiti web je mjesto za povratne goste i direktne upite.' ),
				array( 'Treba li web na više jezika?', 'Ako dolaze gosti iz inozemstva, da — barem engleski. Svaki jezik dobiva svoju adresu, pa ga Google može prikazati gostima koji pretražuju na tom jeziku.' ),
			),
			'cta' => array( 'Besplatna provjera profila', 'provjera-vidljivosti' ),
			'related' => array( 'usluge/google-business-profil', 'usluge/izrada-web-stranica', 'djelatnosti/saloni-ljepote' ),
		),
		'trgovine-i-webshop'        => array(
			'tab' => 'Shop', 'sector' => 'trgovina', 'label' => 'Specijalizirane trgovine', 'icon' => 'shop', 'prop' => 8, 'sign' => 'TRGOVINA',
			'title' => 'Specijalizirane trgovine', 'name' => 'specijalizirane trgovine',
			'seo_title' => 'Katalog i webshop za specijalizirane trgovine | ZAEC',
			'description' => 'Web za specijalizirane trgovine: katalog s upitom, webshop kad su cijene i dostava jasne, lokalni podaci i GA4 mjerenje prodaje. Za nišne proizvode, opremu i dijelove.',
			'h1' => 'Za specijalizirane trgovine: <em>katalog</em> koji donosi upite.',
			'lead' => 'Opća trgovina teško se natječe s velikima na cijeni. Specijalizirana može: nišne proizvode, opremu, rezervne dijelove ili lokalne proizvode kupac traži po nazivu. Katalog s upitom često je brži put do prodaje, a webshop dolazi kad su cijene i dostava jasne.',
			'short' => 'Za nišne proizvode, opremu i dijelove: katalog s upitom, a webshop kad su cijene i dostava jasne.',
			'onweb' => array( 'Katalog s upitom', 'Webshop po potrebi', 'Lokalni podaci', 'GA4 prodaja' ),
			'searches' => array( 'naziv proizvoda + kupiti', 'rezervni dijelovi + model', 'agro oprema + grad', 'domaći proizvodi + grad', 'trgovina + grad' ),
			'problems' => array(
				array( 'Webshop koji se natječe s velikima', 'Ista roba po istoj cijeni, a dovesti kupca košta više od marže. Bez niše webshop rijetko vrati uloženo.' ),
				array( 'Proizvod se ne može naći po nazivu', 'Kupac nišnog proizvoda traži točan naziv ili šifru. Ako ga vaš katalog nema, kupuje drugdje.' ),
				array( 'Ne znate što se prodaje', 'Bez e-commerce praćenja ne znate koji kanal i proizvod donosi prihod.' ),
			),
			'deliver' => array(
				array( 'Katalog s upitom', 'Proizvodi s opisom i šifrom, a kupac šalje upit za cijenu, količinu ili dostupnost. Brz početak bez košarice.' ),
				array( 'Webshop kad ima smisla', 'Kartično plaćanje i dostava kad su cijene i zalihe jasne. Proizvodi iz kataloga ostaju.' ),
				array( 'Lokalni podaci', 'Radno vrijeme, adresa i Google profil za kupce koji dolaze u trgovinu.' ),
				array( 'GA4 e-commerce', 'Prihod po proizvodu i kanalu, odustajanja u košarici.' ),
			),
			'structure' => array( 'Prvi ekran: kategorije + pretraga po nazivu', 'Istaknuti proizvodi', 'Upit ili dostava i plaćanje', 'O trgovini i lokacija', 'FAQ', 'Kontakt' ),
			'faq' => array(
				array( 'Isplati li se meni webshop?', 'Ako prodajete ono što kupac nađe kod velikih trgovaca po istoj cijeni, rijetko. Ako imate nišu, točne nazive i jasnu dostavu, da. U besplatnoj provjeri kažemo što od toga vrijedi za vas.' ),
				array( 'Radite li fiskalizaciju i ERP integracije?', 'To ide kao poseban opseg — prvo definiramo što točno treba povezati, a zatim slijede procjena i ponuda.' ),
				array( 'Mogu li početi s katalogom pa kasnije dodati webshop?', 'Da. Katalog s upitom je brži početak, a proizvodi i struktura ostaju kad se kasnije uključe košarica i plaćanje.' ),
			),
			'related' => array( 'usluge/webshop', 'usluge/ga4-i-pracenje-konverzija', 'usluge/izrada-web-stranica' ),
		),
		'saloni-ljepote'            => array(
			'tab' => 'Salon', 'sector' => 'ljepota', 'label' => 'Saloni ljepote', 'icon' => 'star', 'prop' => 10, 'sign' => 'SALON',
			'title' => 'Saloni ljepote i frizeri', 'name' => 'salone ljepote i frizere',
			'seo_title' => 'Google profil i web za salone ljepote | ZAEC',
			'description' => 'Za salone ljepote, frizere i kozmetičare: Google profil s cjenikom, fotografijama i poveznicom na rezervacije, a web za veće salone s više djelatnika.',
			'h1' => 'Web za salone: da novi klijent <em>rezervira</em>, a ne samo pogleda.',
			'lead' => 'Kod salona odluka pada brzo: fotografije, cjenik, recenzije i slobodan termin. Najčešće sve to stane u Google profil i sustav za rezervacije koji već koristite. Web ima smisla za veće salone s više djelatnika i usluga.',
			'short' => 'Fotografije, cjenik, recenzije i slobodan termin — ako nešto nedostaje, klijent ode na sljedeći profil.',
			'onweb' => array( 'Google profil', 'Online rezervacija', 'Galerija i tim', 'Recenzije' ),
			'searches' => array( 'frizer + grad', 'kozmetički salon + kvart', 'manikura + grad', 'trajno uklanjanje dlačica', 'pedikura' ),
			'problems' => array(
				array( 'Cjenik nije online', 'Ljudi ne žele zvati samo da pitaju cijenu — biraju salon koji ga ima.' ),
				array( 'Termini samo telefonom', 'Mnogi rezerviraju navečer. Ako ne mogu, rezerviraju drugdje.' ),
				array( 'Instagram nije dovoljan', 'Instagram je izlog, a Google karta je mjesto gdje vas nađu novi klijenti iz okolice.' ),
			),
			'deliver' => array(
				array( 'Google profil kao izlog', 'Usluge s cijenama, fotografije, radno vrijeme i poveznica na rezervaciju, na karti gdje vas traže novi klijenti.' ),
				array( 'Online rezervacija', 'Povezivanje sa sustavom koji već koristite ili postavljanje novog.' ),
				array( 'Galerija i tim', 'Stvarni radovi i ljudi koji ih rade — klijenti biraju osobu, ne samo salon.' ),
				array( 'Recenzije koje rastu', 'Podsjetnik za recenziju nakon termina i odgovori na recenzije.' ),
			),
			'structure' => array( 'Prvi ekran: usluge + rezervacija', 'Cjenik', 'Galerija radova', 'Tim', 'Recenzije', 'Rezervacija / upit' ),
			'faq' => array(
				array( 'Treba li malom salonu web?', 'Često ne. Uređen Google profil s cjenikom i poveznicom na rezervacije dovoljan je za prvi korak. Web dodajemo kad imate više djelatnika, usluga ili lokacija.' ),
				array( 'Može li web raditi sa sustavom za rezervacije koji već koristim?', 'Najčešće da: ugrađuje se poveznica ili widget postojećeg sustava. Ako sustava nemate, predložimo jednostavan sustav za svakodnevni rad.' ),
				array( 'Trebaju li cijene biti na webu?', 'Preporučujemo barem raspon cijena po usluzi. Klijent koji salon bira na mobitelu usporedi cjenik prije nego što rezervira.' ),
			),
			'cta' => array( 'Besplatna provjera profila', 'provjera-vidljivosti' ),
			'related' => array( 'usluge/google-business-profil', 'djelatnosti/ugostiteljstvo-i-smjestaj', 'usluge/izrada-web-stranica' ),
		),
		// Nove stranice (strategija 03, točka 3): svaka ima stvaran projekt kao dokaz.
		'strucne-usluge'            => array(
			'tab' => 'Struka', 'sector' => 'strucne-usluge', 'label' => 'Stručne usluge', 'icon' => 'clipboard-check', 'prop' => 0, 'sign' => 'URED',
			'title' => 'Stručne i poslovne usluge', 'name' => 'stručne i poslovne usluge',
			'service_type' => 'Web stranica za stručne i poslovne usluge',
			'seo_title' => 'Web stranica za stručne i poslovne usluge | ZAEC',
			'description' => 'Web za knjigovodstvo, arhitekte, geodete, inženjering, zaštitu na radu i laboratorije: usluge jezikom klijenta, ljudi iza posla, reference i upit prema opsegu.',
			'h1' => 'Web za stručne usluge: stručno, a <em>razumljivo</em>.',
			'lead' => 'Prije nego što vas nazovu, provjere vas na webu. Klijent bira po stručnosti koju sam ne može procijeniti, pa traži znakove: jasno opisane usluge, ljude iza posla, ovlaštenja i reference. Ako ih ne nađe, zove nekoga drugog.',
			'short' => 'Klijent bira po stručnosti koju ne može sam provjeriti: jasne usluge, ljudi iza posla, ovlaštenja i reference, uz kratak put do upita.',
			'onweb' => array( 'Usluge jezikom klijenta', 'Tim i ovlaštenja', 'Reference', 'Upit prema opsegu' ),
			'searches' => array( 'knjigovodstvo za obrt', 'računovodstveni servis + grad', 'geodet + grad', 'laboratorijska analiza hrane', 'zaštita na radu za firme' ),
			'problems' => array(
				array( 'Usluge opisane jezikom struke', 'Klijent traži „knjigovodstvo za obrt”, a web nudi „računovodstvene usluge sukladno propisima”. Ne prepozna se i ode.' ),
				array( 'Ne vidi se tko radi posao', 'Kod stručnih usluga ljudi kupuju povjerenje u osobu. Web bez imena, iskustva i ovlaštenja ne gradi ga.' ),
				array( 'Svi upiti izgledaju isto', 'Bez nekoliko pitanja o opsegu na prvi razgovor dolaze i oni kojima ne možete pomoći.' ),
			),
			'deliver' => array(
				array( 'Usluga po potrebi klijenta', 'Svaka usluga sa svojom stranicom: kome je namijenjena, što uključuje i kako izgleda suradnja.' ),
				array( 'Ljudi, ovlaštenja i članstva', 'Tko radi posao, s kojim iskustvom i ovlaštenjima, vidljivo uz usluge i kontakt.' ),
				array( 'Reference i primjeri rada', 'Projekti i klijenti koje smijete pokazati, s kratkim opisom problema i rješenja.' ),
				array( 'Upit prema opsegu', 'Vrsta usluge, veličina tvrtke ili projekta i rok. Na prvi razgovor dolazite pripremljeni.' ),
			),
			'structure' => array( 'Prvi ekran: usluge i kome su namijenjene', 'Usluge (stranica za svaku)', 'Tim i ovlaštenja', 'Reference', 'Kako izgleda suradnja', 'FAQ', 'Upit prema opsegu' ),
			'faq' => array(
				// vlasnik potvrdio (10. 10. 2026); bez pravnog savjeta: pravila komore donosi klijent
				array( 'Smijem li kao regulirana profesija predstavljati usluge na webu?', 'Ovisi o pravilima vaše komore, a neke regulirane profesije (npr. odvjetnici) imaju stroža pravila o oglašavanju. Prije izrade nam recite koja vrijede za vas, pa web složimo tako da informira o uslugama u okviru tih pravila.' ),
				array( 'Trebam li web i na engleskom?', 'Ako radite sa stranim klijentima ili partnerima, da, barem za ključne usluge. Svaki jezik dobiva svoju adresu, pa ga Google može prikazati klijentima na tom jeziku.' ),
			),
			'proof' => 'eurokontrola.hr',
			'related' => array( 'usluge/izrada-web-stranica', 'djelatnosti/ustanove-i-udruge', 'usluge/seo' ),
		),
		'ustanove-i-udruge'         => array(
			'tab' => 'Ustanove', 'sector' => 'ustanove', 'label' => 'Ustanove i udruge', 'icon' => 'users-group-rounded', 'prop' => 1, 'sign' => 'USTANOVA',
			'title' => 'Ustanove, udruge i obrazovanje', 'name' => 'ustanove i udruge',
			'service_type' => 'Web stranica za ustanove i udruge',
			'seo_title' => 'Web stranica za ustanove, udruge i škole | ZAEC',
			'description' => 'Web za ustanove, udruge, vrtiće, škole jezika i autoškole: sadržaj složen po posjetiteljima, novosti i EU projekti koje sami uređujete, pristupačnost i jasni dokumenti.',
			'h1' => 'Web za ustanove i udruge: da <em>svatko</em>&nbsp;nađe svoje.',
			'lead' => 'Roditelji, korisnici, financijeri i mediji traže vas na webu, svatko sa svojim pitanjem. Web složen po posjetiteljima, a ne po unutarnjoj organizaciji, odgovara svakome od njih, štedi vam pozive i pokazuje da ste ozbiljni.',
			'short' => 'Puno posjetitelja i puno sadržaja: svatko mora naći svoje bez lutanja, a novosti i projekte uređujete sami.',
			'onweb' => array( 'Sadržaj po posjetiteljima', 'Novosti i projekti', 'Pristupačnost', 'Dokumenti' ),
			'searches' => array( 'upis u vrtić + grad', 'škola stranih jezika + grad', 'autoškola + grad', 'udruga + grad', 'naziv ustanove' ),
			'problems' => array(
				array( 'Web složen po organizacijskoj shemi', 'Posjetitelj ne zna u kojem je odjelu ono što traži. Traži odgovor, ne organigram.' ),
				array( 'Novosti koje nitko ne ažurira', 'Ako je za svaku objavu potreban vanjski programer, web zastari za nekoliko mjeseci.' ),
				array( 'Dokumenti zakopani u PDF-ovima', 'Pravilnici, obrasci i natječaji bez reda i pretrage, a na mobitelu nečitljivi.' ),
			),
			'deliver' => array(
				array( 'Ulaz za svakog posjetitelja', 'Roditelji, korisnici, stručnjaci i partneri odmah vide svoj put kroz sadržaj.' ),
				array( 'Novosti i projekti koje uređujete sami', 'WordPress bez programera, uz kratku edukaciju pri primopredaji. Stranice EU projekata s oznakama financiranja.' ),
				// Zakon o pristupačnosti mrežnih stranica (NN 17/19); vlasnik potvrdio (10. 10. 2026). „Većinu“ jer zakon ima iznimke.
				array( 'Pristupačnost', 'Kontrast, veličina slova, rad tipkovnicom i čitačima ekrana. Za većinu tijela javnog sektora to je i zakonska obveza, uz izjavu o pristupačnosti.' ),
				array( 'Dokumenti s redom', 'Obrasci, pravilnici i natječaji po kategorijama i datumu, s pretragom.' ),
			),
			'structure' => array( 'Prvi ekran: tko ste i ulazi za posjetitelje', 'Programi i usluge', 'Novosti i projekti', 'Dokumenti', 'O ustanovi i tim', 'Kontakt i lokacija' ),
			'faq' => array(
				// vlasnik potvrdio (10. 10. 2026); cijena kao u svakoj ponudi, bez obećanja proizvoljnog obrasca
				array( 'Možete li poslati ponudu za jednostavnu nabavu ili projekt?', 'Da. Pisana ponuda sadrži opseg, rok i cijenu. Ako nabava ili projekt traže određeni obrazac ili prilog, pošaljite ga uz upit.' ),
				array( 'Hoćemo li sami objavljivati novosti?', 'Da. Pri primopredaji pokažemo kako objavljujete novosti, projekte, galerije i dokumente, bez programera.' ),
			),
			'faq_price' => array( 'Koliko košta web za ustanovu?', 'Ovisi o broju stranica i funkcija (npr. dokumenti s pretragom, novosti ili više jezika). Složite procjenu projekta — vaše područje je već odabrano — i dobit ćete pisanu ponudu.' ),
			'proof' => 'cza-os.hr',
			'related' => array( 'usluge/izrada-web-stranica', 'usluge/odrzavanje-weba', 'djelatnosti/strucne-usluge' ),
		),
	);

	// Po djelatnosti: opis kadra (alt) i podnaslovi s nazivom zanata (umjesto istih H2 na svih osam stranica).
	$copy = array(
		'klima-i-grijanje'          => array( 'Vanjska jedinica dizalice topline noću: topli i hladni tok zraka izlaze iz ventilatora, pola uređaja je tehnički nacrt.', 'Gdje klima servisi <em>gube</em> upite.', 'Što web za klimu i dizalice topline <em>mora</em> imati.' ),
		'vodoinstalateri'           => array( 'Bakrene cijevi s ventilima, manometrom i razdjelnikom podnog grijanja; topla i hladna voda teku kao svjetlo, bojler je nacrt.', 'Gdje vodoinstalateri <em>gube</em> pozive.', 'Što web vodoinstalatera <em>mora</em> imati.' ),
		'elektricari'               => array( 'Kuća sa solarnim panelima i punjačem za auto noću; dalekovod iza nje je plavi nacrt, a impulsi struje putuju do kuće.', 'Gdje električari <em>gube</em> upite.', 'Što web električara <em>mora</em> imati.' ),
		'krovopokrivaci'            => array( 'Krov u tri faze: položen crijep, letve i rogovi s ljestvama te plavi nacrt krovišta s kotom nagiba.', 'Gdje krovopokrivači <em>gube</em> pozive.', 'Što web krovopokrivača <em>mora</em> imati.' ),
		'gradevina-i-adaptacije'    => array( 'Zgrada u gradnji noću: gotovi donji katovi, betonski skelet s iskrama zavarivanja, gornji katovi kao nacrt i toranjski kran.', 'Gdje izvođači radova <em>gube</em> upite.', 'Što web izvođača radova <em>mora</em> imati.' ),
		'stolarija-kuhinje-i-interijeri' => array( 'Prozor u nacrtu: krila sa simbolom otvaranja, kote i toplo osvijetljeno okno.', 'Gdje stolarije <em>gube</em> upite.', 'Što web stolarije <em>mora</em> imati.' ),
		'ugostiteljstvo-i-smjestaj' => array( 'Kuća za odmor s osvijetljenim bazenom i terasom pod lampicama; krilo sa sobama je tlocrt do kojeg stižu tragovi rezervacija.', 'Gdje smještaj i vinarije <em>gube</em> goste.', 'Što web za smještaj i vinarije <em>mora</em> imati.' ),
		'trgovine-i-webshop'        => array( 'Osvijetljeni izlog trgovine s plavom tendom; paketi odlijeću svjetlosnim lukovima prema kupcima, dio dućana je nacrt webshopa.', 'Gdje specijalizirane trgovine <em>gube</em> kupce.', 'Što web specijalizirane trgovine <em>mora</em> imati.' ),
		'saloni-ljepote'            => array( 'Salon noću: stolica i okruglo ogledalo s prstenastim svjetlom; sljedeća radna mjesta su nacrt, a tragovi rezervacija stižu do ogledala.', 'Gdje saloni <em>gube</em> termine.', 'Što web salona <em>mora</em> imati.' ),
		'strucne-usluge'            => array( 'Tlocrt ureda: prijem, sala za sastanke, radna mjesta i arhiva.', 'Gdje stručne usluge <em>gube</em> klijente.', 'Što web za stručne usluge <em>mora</em> imati.' ),
		'ustanove-i-udruge'         => array( 'Tlocrt prizemlja ustanove: ulaz s rampom, info pult s oglasnom pločom, dvorana i arhiva.', 'Gdje ustanove <em>gube</em> posjetitelje.', 'Što web ustanove <em>mora</em> imati.' ),
	);

	// cilj stranice po djelatnosti (podnaslov strukture)
	$goal = array( 'saloni-ljepote' => 'rezervacije', 'ugostiteljstvo-i-smjestaj' => 'rezervacije', 'trgovine-i-webshop' => 'upita', 'gradevina-i-adaptacije' => 'upita', 'strucne-usluge' => 'upita', 'ustanove-i-udruge' => 'upita', 'klima-i-grijanje' => 'upita', 'elektricari' => 'upita', 'stolarija-kuhinje-i-interijeri' => 'upita' );

	foreach ( $industries as $slug => $d ) {
		$c      = $copy[ $slug ] ?? array( $d['title'] . ': noćni kadar djelatnosti, pola stvarno, pola tehnički nacrt.', 'Gdje se <em>gube</em> pozivi.', 'Što vaš web <em>mora</em> imati.' );
		$sector = zaec_sectors()[ $d['sector'] ];
		$blocks = array(
			array( 'type' => 'searches', 'items' => $d['searches'] ),
			array( 'type' => 'problems', 'title' => $c[1], 'items' => $d['problems'] ),
			array( 'type' => 'deliver', 'title' => $c[2], 'items' => array_map( static fn( $x ) => array( '', $x[0], $x[1] ), $d['deliver'] ), 'cols' => 2, 'numbered' => true ),
		);
		// dodatni blokovi djelatnosti (npr. „Kako do subvencije“ za dizalice topline i solare)
		foreach ( $d['extra'] ?? array() as $x ) {
			$blocks[] = $x;
		}
		if ( ! empty( $d['proof'] ) ) {
			// dokaz: samo stvaran, objavljen projekt (blok se ne prikaže ako ga nema)
			$blocks[] = array( 'type' => 'projects', 'host' => $d['proof'], 'title' => 'Iz <em>prakse</em>.', 'lead' => 'Stvaran projekt iz ovog područja, s problemom, rješenjem i ishodom.' );
		}
		$blocks[] = array( 'type' => 'anatomy', 'title' => 'Struktura koja vodi do <em>' . ( $goal[ $slug ] ?? 'poziva' ) . '</em>.', 'lead' => 'Predložak redoslijeda za naslovnicu — prilagođavamo ga vašim uslugama, ali logika ostaje.', 'label' => 'nacrt — ' . $slug . '.pdf', 'parts' => array_map( null, $d['structure'] ) );
		$faq_common = zaec_industry_common_faq();
		if ( ! empty( $d['faq_price'] ) ) {
			$faq_common[0] = $d['faq_price'];
		}
		$img = 'world/djelatnost-' . $slug . '.webp';
		$r[ 'djelatnosti/' . $slug ] = array(
			'type'         => 'industry',
			'parent'       => 'djelatnosti',
			'slug'         => $slug,
			'title'        => $d['title'],
			'name'         => $d['name'],
			'service_type' => $d['service_type'] ?? 'Web stranica i lokalni SEO za ' . $d['name'],
			'seo_title'    => $d['seo_title'],
			'description'  => $d['description'],
			// sektor se ne ponavlja kad je naziv iz istog korijena („Trgovina · Trgovine“)
			'kicker'       => 0 === strncasecmp( $sector['short'], $d['label'], 6 ) ? $d['label'] : $sector['short'] . ' · ' . $d['label'],
			'h1'           => $d['h1'],
			'lead'         => $d['lead'],
			'short'        => $d['short'],
			'tab'          => $d['tab'],
			'sector'       => $d['sector'],
			'label'        => $d['label'],
			'icon'         => $d['icon'],
			'prop'         => $d['prop'],
			'sign'         => $d['sign'],
			'onweb'        => $d['onweb'],
			'image'        => is_readable( ZAEC_THEME_DIR . '/assets/img/' . $img ) ? $img : '',
			'image_alt'    => $c[0],
			// djelatnosti kojima je prvi korak Google profil (hitne intervencije, smještaj, saloni) vode na provjeru
			'cta'          => $d['cta'] ?? array( 'Složite svoj projekt', 'cijene?djelatnost=' . rawurlencode( $slug ) . '#konfigurator' ),
			'blocks'       => $blocks,
			'faq'          => array_merge( $d['faq'], $faq_common ),
			'related'      => $d['related'],
		);
	}

	return $r;
}

/** Posebne stranice: lokalno, cijene/procjena, provjera, kontakt, o nama, hvala, privatnost. */
function zaec_registry_special() {
	$r = array();

	$r['izrada-web-stranica-osijek'] = array(
		'type'         => 'local',
		'title'        => 'Izrada web stranica Osijek',
		'service_type' => 'Izrada web stranica i lokalni SEO',
		'area'         => array( 'Osijek', 'Osječko-baranjska županija', 'Slavonija' ),
		'seo_title'    => 'Izrada web stranica Osijek — za obrte i tvrtke | ZAEC',
		'description'  => 'Izrada web stranica u Osijeku: web, SEO, Google Business profil i GA4 na jednom mjestu. Sastanak uživo u Osijeku i Slavoniji, na daljinu za cijelu Hrvatsku.',
		'kicker'       => 'Osijek · Slavonija',
		'h1'           => 'Izrada web stranica u <em>Osijeku</em>.', // design/04 §2: naslov završava gradom, cilj ide u uvod
		'lead'         => 'Za tvrtke koje žele više poziva, ne samo novi izgled. Radimo web stranice, SEO i Google profile za obrte i tvrtke u Osijeku, Osječko-baranjskoj županiji i Slavoniji — uživo, za istim stolom. Klijente iz ostatka Hrvatske vodimo na daljinu.',
		'answer'       => 'ZAEC je web studio sa sjedištem u Osijeku (Čvrsnička ulica 29 A). Izrađuje web stranice, webshopove i landing stranice te radi SEO, Google Business profil i GA4 mjerenje za tvrtke u Osijeku, Osječko-baranjskoj županiji i cijeloj Hrvatskoj.',
		'image'        => 'world/usluga-kontakt.webp',
		'nacrt'        => true,
		'image_alt'    => 'Osijek noću iz zraka: grad u plavom nacrtu, osvijetljena konkatedrala i svjetlosni signal s njezina tornja.',
		'cta'          => array( 'Dogovorimo kratak razgovor', 'kontakt#upit' ),
		'blocks'       => array(
			array(
				'type'  => 'problems',
				'title' => 'Zašto lokalni <em>partner</em>.',
				'items' => array(
					array( 'Agencija iz drugog grada', 'Teško ju je dobiti na telefon, ne poznaje lokalno tržište, a svaka izmjena traje tjednima.' ),
					array( 'Prijatelj koji „zna napraviti web”', 'Web postoji, ali nitko ne zna tko ima pristupe i kako se mijenja.' ),
					array( 'Konkurencija je vidljivija', 'Lokalni kupci zovu onoga tko je na karti — ne nužno najboljeg majstora.' ),
				),
			),
			array(
				'type'  => 'deliver',
				'title' => 'Što dobivate <em>u Osijeku</em>.',
				'items' => array(
					array( 'hand-shake', 'Sastanak uživo', 'Kod vas, u radionici ili na kavi — pogledamo posao na licu mjesta.' ),
					array( 'map-point', 'Poznavanje tržišta', 'Znamo kako ljudi u Slavoniji traže usluge i koja mjesta trebate pokriti.' ),
					array( 'layers', 'Web, SEO i mjerenje zajedno', 'Sve što je potrebno da vas lokalni kupci nađu — na jednom mjestu.' ),
				),
			),
			array( 'type' => 'projects', 'title' => 'Radovi iz <em>Slavonije</em>.' ),
		),
		'faq'          => array(
			array( 'Radite li i izvan Osijeka?', 'Da. Za Osijek, Osječko-baranjsku županiju i Slavoniju možemo se naći uživo, a s ostatkom Hrvatske radimo telefonom i videopozivom.' ),
			array( 'Koliko košta izrada web stranice u Osijeku?', 'Kao i drugdje, ovisi o opsegu. Nakon kratkog razgovora dobivate pisanu ponudu. Okvirni opseg vidite u procjeni projekta.' ),
			array( 'Gdje ste točno?', 'Sjedište je u Osijeku, Čvrsnička ulica 29 A. Sastanke dogovaramo unaprijed.' ),
		),
		'related'      => array( 'usluge/izrada-web-stranica', 'usluge/lokalni-seo', 'djelatnosti' ),
	);

	$r['cijene'] = array(
		'type'        => 'pricing',
		'title'       => 'Cijene i procjena',
		'seo_title'   => 'Koliko košta web stranica? Procjena u 60 sekundi | ZAEC',
		'description' => 'Koliko košta web stranica, landing ili webshop? Složite projekt i odmah vidite opseg i okvirni rok. Točna cijena stiže u pisanoj ponudi, bez obveze.',
		'kicker'      => 'Cijene · procjena u 60 sekundi',
		'h1'          => 'Složite svoj web. <em>Cijenu</em> dobivate na papiru.',
		'lead'        => 'Odaberite što trebate i odmah vidite razinu opsega i okvirni rok. Pošaljite konfiguraciju — dobivate pisanu ponudu, bez obveze.',
		'answer'      => 'Cijena izrade web stranice ovisi o opsegu: broju stranica, funkcijama (rezervacije, webshop, više jezika, integracije) i tome imate li tekstove i fotografije. Ne objavljujemo paušalne „od” cijene; nakon kratkog razgovora šaljemo pisanu ponudu s cijenom i rokom. Plaćanje je 50 % na početku i 50 % prije objave.',
		'image'       => 'world/usluga-procjena.webp',
		'image_alt'   => 'Svjetlosni skener prolazi kroz web stranicu: iza njega ostaje plavi nacrt s mjernim oznakama i pet slojeva provjere.',
		'cta'         => array( 'Na procjenu', '#konfigurator' ),
		'blocks'      => array(
			array( 'type' => 'configurator' ),
			array( 'type' => 'guarantees' ),
			array( 'type' => 'contact', 'title' => 'Pošaljite <em>konfiguraciju</em>.' ),
		),
		'faq'         => array(
			array( 'Zašto na webu nema cjenika?', 'Jer cijena bez opsega ne znači ništa — dvije „web stranice” mogu se razlikovati po trudu nekoliko puta. Umjesto „od” iznosa koji navodi na krivi zaključak, dobivate pisanu ponudu za točno ono što trebate.' ),
			array( 'Je li procjena obvezujuća?', 'Ne. Procjena vam pomaže razumjeti opseg i rok, a ni ponuda koju dobijete ne obvezuje vas ni na što.' ),
			array( 'Kako se plaća?', 'Standardno 50 % za rezervaciju termina i početak rada, 50 % prije objave. Veći projekti mogu se podijeliti u faze.' ),
			array( 'Kada počinje teći rok?', 'Od dana kad je sadržaj kompletan: tekstovi, fotografije i podaci za svaku stranicu. Rok u procjeni je rok izrade, bez čekanja na sadržaj. Ako trebate pomoć s tekstovima, ona je već uračunata u rok.' ),
			array( 'Može li se cijena promijeniti tijekom rada?', 'Cijena iz ponude vrijedi za dogovoreni opseg. Sve izvan njega prvo dobiva zasebnu procjenu i ide u rad tek uz vašu potvrdu.' ),
			array( 'Jesu li domena i hosting uključeni?', 'Ne. Registriraju se na vas i plaćate ih izravno pružatelju; mi odradimo tehničko postavljanje. Tako vlasništvo i trošak ostaju transparentni.' ),
		),
		'related'     => array( 'usluge/izrada-web-stranica', 'usluge/webshop', 'provjera-vidljivosti' ),
	);

	$r['provjera-vidljivosti'] = array(
		'type'        => 'check',
		'title'       => 'Besplatna provjera vidljivosti',
		'seo_title'   => 'Besplatna provjera vidljivosti: Google i AI | ZAEC',
		'description' => 'Besplatna SEO i AI provjera: kako vas vide Google karta, pretraga, ChatGPT i Google AI te kako stojite naspram tri konkurenta. Izvješće i tri koraka.',
		'kicker'      => 'Besplatno · bez obveze',
		'h1'          => 'Kako vas vide <em>Google</em> i AI? Provjerimo besplatno.',
		// ispod gumba: što provjera jest (iz uvoda), umjesto oznaka o ponudi i izradi
		'trust'       => array( array( 'magnifer', 'Ručna provjera' ), array( 'users-group-rounded', 'Usporedba s tri konkurenta' ), array( 'checklist', 'Tri koraka koja najviše donose' ) ),
		'lead'        => 'Pošaljite naziv tvrtke i grad. Ručno provjeravamo Google profil, recenzije, web, brzinu i što o vama kažu ChatGPT i Google AI — uz usporedbu s tri konkurenta i tri koraka koja najviše donose.',
		'answer'      => 'Besplatna provjera vidljivosti uključuje ručnu analizu Google Business profila, recenzija, web stranice (sadržaj, brzina, mobitel, mjerenje) i odgovora AI asistenata o vašoj tvrtki, usporedbu s tri lokalna konkurenta i kratko izvješće s tri prioritetna koraka.',
		'image'       => 'world/usluga-provjera.webp',
		'nacrt'       => true,
		'image_alt'   => 'Vaš obrt osvijetljen sprijeda, iza njega tri konkurenta u nacrtu; uz svaku zgradu kota visine, crta mjerila spaja vrhove.',
		'cta'         => array( 'Pošaljite za provjeru', '#upit' ),
		'blocks'      => array(
			array(
				'type'  => 'deliver',
				'title' => 'Što <em>točno</em> provjeravamo.',
				'items' => array(
					array( 'map-point', 'Google karta', 'Pojavljujete li se za glavne pretrage u svom mjestu i tko je ispred vas.' ),
					array( 'shield-check', 'Google profil', 'Kategorije, usluge, fotografije, radno vrijeme — i što nedostaje.' ),
					array( 'star', 'Recenzije', 'Broj i svježina recenzija naspram tri lokalna konkurenta.' ),
					array( 'smartphone', 'Web i brzina', 'Odgovara li web na pretrage, je li brz i je li kontakt lako naći na mobitelu.' ),
					array( 'chat-round-dots', 'AI asistenti', 'Spominju li vas ChatGPT i Google AI i jesu li podaci točni.' ),
					array( 'checklist', '3 konkretna koraka', 'Što napraviti prvo — sami ili s nama.' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'audit' ),
		),
		'faq'         => array(
			array( 'Zašto je besplatno? Gdje je kvaka?', 'Nema kvake. Provjera vam pokaže kako radimo. Ako se odlučite za suradnju, odlično. Ako ne, izvješće ostaje vaše.' ),
			array( 'Hoćete li me zvati i nagovarati?', 'Ne. Pošaljemo izvješće na kontakt koji ostavite. Ako imate pitanja, javite se vi.' ),
			array( 'Koliko traje?', 'Obično do pet radnih dana od upita. Provjeru radimo ručno i samo nekoliko tjedno, pa vam, ako je tjedan popunjen, javimo datum.' ),
			array( 'Trebate li moje lozinke ili pristupe?', 'Ne. Provjera koristi samo ono što vidi i vaš kupac: pretragu, kartu, profil, web i AI odgovore.' ),
			array( 'Mogu li tri koraka napraviti sam?', 'Da. Barem jedan korak uvijek je napisan tako da ga možete napraviti sami, danas i besplatno.' ),
			array( 'Konkurent je prvi na karti. Kako?', 'U izvješću piše što on ima, a vi nemate: recenzije, kategoriju, stranicu za uslugu. Tako znate što popraviti prvo.' ),
			array( 'Je li to potpuni SEO audit?', 'Ne. Provjera pokazuje najveće rupe. Cijeli tehnički pregled weba je SEO audit, koji radimo kao zasebnu uslugu.' ),
		),
	);

	$r['kontakt'] = array(
		'type'        => 'contact',
		'hero'        => 'kontakt',
		'title'       => 'Kontakt',
		'seo_title'   => 'Kontakt — ZAEC web studio, Osijek',
		'description' => 'Pošaljite upit ili nazovite. ZAEC, web studio iz Osijeka — web stranice, SEO, AI vidljivost i GA4 mjerenje za obrte i tvrtke diljem Hrvatske.',
		'kicker'      => 'Kontakt',
		'h1'          => 'Recite nam čime se <em>bavite</em>.',
		'lead'        => 'Ne trebate tehničke izraze. Dovoljne su dvije rečenice o poslu i o tome što želite da web radi bolje. Javljamo se u radno vrijeme sa smjerom i sljedećim korakom, bez obveze.',
		'image'       => 'world/usluga-kontakt.webp',
		'image_alt'   => 'Osijek noću iz zraka: grad u plavom nacrtu, osvijetljena konkatedrala i svjetlosni signal s njezina tornja.',
		'cta'         => array( 'Na formu', '#upit' ),
		'blocks'      => array( array( 'type' => 'contact', 'title' => '' ) ),
	);

	$r['o-nama'] = array(
		'type'        => 'about',
		'hero'        => 'editorial',
		'nacrt'       => true, // list 00: pročelje zvonika konkatedrale, 90 m, sastavnica sa sjedištem (tools/art/nacrt/o-nama.mjs)
		'title'       => 'O nama',
		'seo_title'   => 'O nama — ZAEC web studio iz Osijeka',
		'description' => 'ZAEC je web studio iz Osijeka s više od deset godina na webu: pisana ponuda prije početka i web koji donosi upite.',
		'kicker'      => 'O nama',
		'h1'          => 'Mali studio. <em>Velika</em> odgovornost.',
		'lead'        => 'Web studio iz Osijeka s više od deset godina rada na webu: WordPress, UX, SEO i mjerenje. Gradimo web stranice za ljude koji grade sve ostalo.',
		'answer'      => 'ZAEC je web studio iz Osijeka koji izrađuje web stranice, webshopove i landing stranice te radi SEO, lokalni SEO, AI vidljivost i GA4 mjerenje za obrte i tvrtke u Hrvatskoj.',
		'image'       => 'world/usluga-onama.webp',
		'image_alt'   => 'Konkatedrala sv. Petra i Pavla u Osijeku noću, s osvijetljenim vitrajima i svjetlosnim signalom s tornja.',
		'cta'         => array( 'Upoznajmo se', 'kontakt#upit' ),
		'blocks'      => array(
			array( 'type' => 'about', 'part' => 'intro' ),
			array(
				'type'  => 'principles',
				'title' => 'Kako <em>radimo</em>.',
				'lead'  => 'Šest pravila koja vrijede za svaki projekt, od jedne stranice do složenog weba.',
				'items' => array(
					array( 'Bez prepričavanja.', 'Tko s vama razgovara, taj crta nacrt i piše kod. Nema prenošenja poruka između prodaje i razvoja.' ),
					array( 'Nacrt prije dizajna.', 'Prvo crtamo što posjetitelj mora vidjeti i kojim redom. Boja i animacija dolaze na čvrst temelj.' ),
					array( 'Dogovor na papiru.', 'Opseg, rok i cijena na papiru prije početka. Sve izvan dogovora prvo dobiva procjenu.' ),
					array( 'Tehnika koju možete provjeriti.', 'Brzina, mobitel, pristupačnost i mjerenje provjeravaju se prije objave, a popis provjera dobivate i vi.' ),
					array( 'Sve je vaše.', 'Domena, hosting, pristupi i sadržaj registrirani su na vas. Možete otići kad god želite.' ),
					array( 'Iskreno, i kad to znači manji posao.', 'Ako vam novi web ne treba, reći ćemo vam prije nego što išta potpišete.' ),
				),
			),
			array( 'type' => 'projects', 'title' => 'Izbor <em>radova</em>.' ),
			array( 'type' => 'about', 'part' => 'facts' ), // „Šest razloga“ ostaje samo na Cijenama (design/04 #10)
		),
		'related'     => array( 'usluge/izrada-web-stranica', 'djelatnosti', 'cijene' ),
	);

	$r['hvala'] = array(
		'type'        => 'thanks',
		'title'       => 'Hvala',
		'seo_title'   => 'Hvala — upit je stigao | ZAEC',
		'description' => 'Vaš upit je zaprimljen. Javljamo se u radno vrijeme.',
		'noindex'     => true,
	);

	return $r;
}
