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
 * Sektori (redoslijed = prikaz): B2B i stručne usluge prvi, obrti odmah iza.
 * short = chip u procjeni i kicker, name = puni naziv (forma, sažetak upita, hub), about = rečenica za hub.
 */
function zaec_sectors() {
	return array(
		'strucne-usluge' => array(
			'short'    => 'Stručne usluge',
			'name'     => 'Stručne i poslovne usluge',
			'icon'     => 'clipboard-check',
			'examples' => 'računovodstvo, pravo, arhitektura i inženjering, laboratoriji i certifikacija, savjetovanje',
			'about'    => 'Klijent vas bira po stručnosti koju ne može sam provjeriti, pa web mora jasno razdvojiti usluge, pokazati tko radi posao i skratiti put do upita.',
			'proof'    => 'eurokontrola.hr',
		),
		'proizvodnja'    => array(
			'short'    => 'Proizvodnja i industrija',
			'name'     => 'Proizvodnja i industrija',
			'icon'     => 'box-minimalistic',
			'examples' => 'proizvođači, prerada hrane, metal i drvo, distribucija i veleprodaja',
			'about'    => 'Kupac je često nabava ili partner iz inozemstva: traži program proizvodnje, certifikate, kapacitete i kontakt prave osobe, po mogućnosti na engleskom.',
		),
		'gradnja'        => array(
			'short'    => 'Gradnja i obnova',
			'name'     => 'Gradnja, obnova i završni radovi',
			'icon'     => 'buildings',
			'examples' => 'građevinske tvrtke, adaptacije, krovovi i limarija, fasade, keramika',
			'about'    => 'Krov, fasada ili adaptacija prodaju se povjerenjem: stvarni projekti, jasan proces i upit s fotografijama i mjerama.',
		),
		'instalacije'    => array(
			'short'    => 'Instalacije',
			'name'     => 'Instalacije, grijanje i energetika',
			'icon'     => 'bolt',
			'examples' => 'klima i dizalice topline, vodo- i plinoinstalacije, elektroinstalacije, solari, punionice',
			'about'    => 'Kod kvara se zove onoga koga se prvog nađe, a kod solara i dizalica topline onoga tko najjasnije objasni što ulazi u posao.',
		),
		'trgovina'       => array(
			'short'    => 'Trgovina',
			'name'     => 'Trgovina i webshopovi',
			'icon'     => 'shop',
			'examples' => 'lokalne i specijalizirane trgovine, izložbeni saloni, webshopovi',
			'about'    => 'Proizvod mora biti lako pronaći, razumjeti i kupiti, u trgovini ili online, uz mjerenje onoga što stvarno prodaje.',
		),
		'ugostiteljstvo' => array(
			'short'    => 'Ugostiteljstvo',
			'name'     => 'Ugostiteljstvo i turizam',
			'icon'     => 'bed',
			'examples' => 'restorani, kafići, catering, hoteli, apartmani i kuće za odmor',
			'about'    => 'Meni ili smještaj, lokacija i najkraći put do rezervacije, bez provizije platforme za svakog gosta.',
		),
		'ljepota'        => array(
			'short'    => 'Ljepota i njega',
			'name'     => 'Ljepota, njega i wellness',
			'icon'     => 'star',
			'examples' => 'frizeri, kozmetički saloni, manikura i pedikura, masaže',
			'about'    => 'Fotografije, cjenik, recenzije i slobodan termin. Ako nešto od toga nedostaje, klijent ode na sljedeći profil.',
		),
		'ustanove'       => array(
			'short'    => 'Ustanove i udruge',
			'name'     => 'Ustanove, udruge i obrazovanje',
			'icon'     => 'users-group-rounded',
			'examples' => 'javne ustanove, centri, škole i vrtići, udruge, kultura i sport',
			'about'    => 'Puno različitih posjetitelja i puno sadržaja: roditelji, korisnici, partneri i javnost moraju naći svoje bez lutanja.',
			'proof'    => 'cza-os.hr',
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
function zaec_industry_common_faq() {
	return array(
		array( 'Koliko košta web za moju djelatnost?', 'Ovisi o broju usluga, stranica i funkcija (npr. rezervacije ili webshop). Složite procjenu projekta — vaša djelatnost je već odabrana — i dobit ćete pisanu ponudu s fiksnom cijenom.' ),
		array( 'Što ako već imam web?', 'Prvo napravimo besplatnu provjeru vidljivosti. Često je dovoljno popraviti profil, dodati stranice za usluge i složiti recenzije — bez izrade novog weba.' ),
	);
}

function zaec_registry_industries() {
	$r = array();

	$r['djelatnosti'] = array(
		'type'        => 'hub-industries',
		'title'       => 'Djelatnosti',
		'seo_title'   => 'Web stranice po djelatnostima: od obrta do industrije | ZAEC',
		'description' => 'Web i Google profil prema tome kako vaši kupci biraju: instalacije, gradnja, trgovina, ugostiteljstvo, saloni, stručne usluge, proizvodnja i ustanove.',
		'kicker'      => 'Djelatnosti',
		'h1'          => 'Svaka djelatnost ima svoja <em>pitanja</em>.',
		'lead'        => 'Kod kvara se zove odmah, salon se bira po fotografijama, a dobavljač po tome koliko ozbiljno izgleda prije prvog sastanka. Web složimo prema pitanjima vaših kupaca. Odaberite svoje područje.',
		'answer'      => 'ZAEC slaže web stranice i Google profile prema djelatnosti: hitni poziv i područje rada za instalatere, galerije i proces za izvođače radova, rezervacije za ugostiteljstvo i salone, webshop za trgovine, a za stručne usluge, proizvodnju i ustanove jasnu strukturu usluga, reference i upit prema opsegu.',
		'image'       => 'world/usluga-web.webp',
		'image_alt'   => 'Web stranica kao svijetleći ekran u noći: pola gotov dizajn, pola plavi nacrt; tragovi upita vode do gumba za kontakt.',
		'cta'         => array( 'Besplatna provjera vidljivosti', 'provjera-vidljivosti' ),
		'blocks'      => array( array( 'type' => 'trades', 'title' => '', 'full' => true ) ),
		'faq'         => array(
			array( 'Moje djelatnosti nema na popisu.', 'Odaberite „Nešto drugo” ili najbliži sektor. Isti pristup radi za svaki posao koji kupci traže i uspoređuju na webu. U razgovoru složimo strukturu za vaš.' ),
		),
	);

	$industries = array(
		'klima-i-grijanje'          => array(
			'tab' => 'Klima', 'sector' => 'instalacije', 'label' => 'Klima i grijanje', 'icon' => 'snowflake', 'prop' => 0, 'sign' => 'KLIMA SERVIS',
			'title' => 'Klima i grijanje', 'name' => 'klima servise',
			'seo_title' => 'Web stranica i Google profil za klima servise | ZAEC',
			'description' => 'Web za klima servise: montaža, servis i čišćenje klima, dizalice topline, upit za termin u dva koraka i lokalni SEO prije sezone. Fiksna cijena u ponudi.',
			'h1' => 'Web za klima servise: budite <em>prvi</em>&nbsp;izbor prije sezone.',
			'lead' => 'Prvi vrući tjedan i prvi hladni dan donesu najviše poziva. Tko je tada vidljiv na karti i ima jasnu ponudu — puni raspored. Ostali gledaju kako konkurencija radi.',
			'short' => 'Servis, montaža i čišćenje. Kupac mora odmah vidjeti što radite, gdje dolazite i kako do termina — prije nego nazove konkurenciju.',
			'onweb' => array( 'Montaža · servis · čišćenje', 'Područje rada', 'Poziv / WhatsApp', 'Upit za termin' ),
			'searches' => array( 'montaža klime + grad', 'servis klime cijena', 'čišćenje klime', 'klima ne hladi', 'dizalica topline ugradnja' ),
			'problems' => array(
				array( 'Sezona vas zatekne', 'Profil i web treba urediti prije sezone, a ne kad telefon već zvoni.' ),
				array( 'Nejasno što ulazi u montažu', 'Najčešće pitanje. Ako web ne odgovori, odgovarate na telefonu deset puta dnevno.' ),
				array( 'Samo poziv u radno vrijeme', 'Ljudi žele poslati upit u 22 sata, kad sjednu doma.' ),
			),
			'deliver' => array(
				array( 'Stranice za montažu, servis i čišćenje', 'Svaka usluga sa svojim opisom, onim što uključuje i načinom formiranja cijene.' ),
				array( 'Upit za termin u dva koraka', 'Usluga i mjesto — sve ostalo pitate na telefonu. Kraća forma, više upita.' ),
				array( 'Sezonske stranice i objave', 'Servis prije ljeta, grijanje prije zime — na webu i u Google profilu.' ),
				array( 'Marke i ovlaštenja', 'Ako ste ovlašteni serviser proizvođača, ističemo to. Ljudi traže po marki.' ),
			),
			'structure' => array( 'Hero: usluga + područje + „Naruči servis”', 'Usluge: montaža, servis, čišćenje', 'Radovi i recenzije', 'Područje rada (mjesta + radijus)', 'FAQ: koliko često servis, što uključuje', 'Upit za termin + poziv' ),
			'faq' => array(
				array( 'Isplati li se web ako imam dovoljno posla ljeti?', 'Web pomaže i izvan sezone: servisi, čišćenje i grijanje mogu popuniti mirnije mjesece.' ),
				array( 'Što napisati na stranici za montažu klime?', 'Što ulazi u standardnu montažu (duljina cijevi, nosači, prodor kroz zid), što se naplaćuje dodatno i koliko traje. To su pitanja koja inače dobivate telefonom.' ),
			),
			'related' => array( 'djelatnosti/elektricari', 'djelatnosti/vodoinstalateri', 'usluge/lokalni-seo' ),
		),
		'vodoinstalateri'           => array(
			'tab' => 'Voda', 'sector' => 'instalacije', 'label' => 'Vodoinstalateri', 'icon' => 'waterdrop', 'prop' => 1, 'sign' => 'VODOINSTALATER',
			'title' => 'Vodoinstalateri i plinoinstalateri', 'name' => 'vodoinstalatere',
			'seo_title' => 'Web stranica za vodoinstalatere — hitni pozivi | ZAEC',
			'description' => 'Web za vodoinstalatere i plinoinstalatere: hitni poziv na prvom ekranu, stranice za intervencije, područje rada, upit s fotografijom i recenzije.',
			'h1' => 'Web za vodoinstalatere: kad curi, zovu onoga koga <em>prvog</em> nađu.',
			'lead' => 'Kod kvara nitko ne čita roman. Čovjek otvori Google, pogleda kartu i recenzije — i nazove. Složimo profil i web tako da ste vi taj prvi poziv u svom području.',
			'short' => 'Kod curenja nitko ne čita roman. Hitni kontakt, područje rada i vrsta intervencije moraju biti jasni u nekoliko sekundi — na mobitelu, s mokrim rukama.',
			'onweb' => array( 'Hitni poziv', 'Intervencije', 'Upit s fotografijom', 'Područje rada' ),
			'searches' => array( 'vodoinstalater + grad', 'hitni vodoinstalater', 'curi bojler', 'odčepljenje odvoda', 'plinoinstalater + grad' ),
			'problems' => array(
				array( 'Hitni poziv je zakopan', 'Ako je broj na dnu stranice, čovjek s poplavom u kupaonici već zove sljedećeg.' ),
				array( 'Nije jasno gdje dolazite', 'Ljudi žele odmah znati pokrivate li njihov kvart ili mjesto.' ),
				array( 'Sve usluge u jednoj rečenici', 'Odčepljenja, bojleri, kupaonice i plin su različite pretrage — i trebaju različite stranice.' ),
			),
			'deliver' => array(
				array( 'Gumb „Hitno — nazovi”', 'Prikovan za dno ekrana na mobitelu, uz jasnu oznaku radite li hitno i kada.' ),
				array( 'Pošalji fotografiju kvara', 'Upit s fotografijom štedi izlazak na teren i daje bolju procjenu.' ),
				array( 'Stranica za svaku intervenciju', 'Hitne intervencije, bojleri, odvodi, kupaonice, plin — svaka sa svojim pitanjima.' ),
				array( 'Recenzije nakon svakog posla', 'QR kartica ili WhatsApp poruka dok je klijent zadovoljan.' ),
			),
			'structure' => array( 'Hero: hitni poziv + područje', 'Intervencije (kartice)', 'Prije / poslije', 'Područje rada', 'FAQ: izlazak, obračun, rokovi', 'Upit s fotografijom + poziv' ),
			'faq' => array(
				array( 'Trebam li objaviti cijene?', 'Ne morate točne cijene, ali način obračuna (izlazak, sat rada) smanjuje nepotrebne pozive i gradi povjerenje.' ),
				array( 'Kako da me nađu kad netko ima hitan kvar?', 'Broj telefona na prvom ekranu mobitela, Google profil s točnim radnim vremenom i područjem dolaska te stranica za hitne intervencije. Kod hitnog kvara ljudi zovu, ne čitaju.' ),
			),
			'related' => array( 'djelatnosti/klima-i-grijanje', 'usluge/google-business-profil', 'usluge/lokalni-seo' ),
		),
		'elektricari'               => array(
			'tab' => 'Struja', 'sector' => 'instalacije', 'label' => 'Električari', 'icon' => 'bolt', 'prop' => 2, 'sign' => 'ELEKTRO',
			'title' => 'Električari', 'name' => 'električare',
			'seo_title' => 'Web stranica i Google profil za električare | ZAEC',
			'description' => 'Web za električare: kvarovi, instalacije, atesti, solari i punionice kao zasebne usluge, ovlaštenja, područje rada i brz upit. Fiksna cijena u ponudi.',
			'h1' => 'Web za električare: od <em>sitnog</em> kvara do solara.',
			'lead' => 'Netko traži električara za kvar, netko za nove instalacije, a netko za atest ili punjač za auto. To su različiti kupci — kad ih web razdvoji, dobivate bolje upite.',
			'short' => 'Od sitnog kvara do instalacija, atesta i solara — jasno odvojene usluge, reference i područje rada, da vas zovu za poslove koje želite.',
			'onweb' => array( 'Kvarovi · instalacije · solari', 'Ovlaštenja', 'Područje rada', 'Brzi upit' ),
			'searches' => array( 'električar + grad', 'hitni električar', 'atest električnih instalacija', 'ugradnja punjača za auto', 'ugradnja solarnih panela' ),
			'problems' => array(
				array( 'Sve pod „elektroinstalacije”', 'Kupac koji traži atest ili punjač ne prepozna se u općenitom opisu.' ),
				array( 'Nema dokaza stručnosti', 'Kod struje ljudi žele sigurnost: ovlaštenja, iskustvo i stvarne radove.' ),
				array( 'Pozivi za poslove koje ne radite', 'Jasan popis usluga i područja smanjuje pozive koji samo troše vrijeme.' ),
			),
			'deliver' => array(
				array( 'Usluge razdvojene po potrebi', 'Kvarovi, nove instalacije, atesti, pametna kuća, punionice, solari — svaka sa svojom stranicom.' ),
				array( 'Ovlaštenja i jamstvo', 'Vidljivo istaknute licence, ovlaštenja i jamstvo na rad.' ),
				array( 'Radovi s opisom', 'Što je bio problem i kako je riješen — kratko i provjerljivo.' ),
				array( 'Upit prema opsegu', 'Za veće radove: vrsta objekta, kvadratura, rok. Ozbiljniji upiti.' ),
			),
			'structure' => array( 'Hero: usluge + područje', 'Usluge: kvar / instalacija / solar', 'Ovlaštenja i reference', 'Radovi', 'FAQ', 'Upit prema opsegu' ),
			'faq' => array(
				array( 'Trebam li posebnu stranicu za solare i punjače?', 'Da, ako ih radite. Ljudi ih traže odvojeno od kvarova i instalacija, a zasebna stranica odgovara na njihova pitanja: što uključuje ugradnja, koja dokumentacija treba i koliko traje.' ),
				array( 'Gdje istaknuti ovlaštenja i atest?', 'Na stranici usluge i uz kontakt. Za veće radove i atest kupac želi znati da imate ovlaštenje prije nego što pošalje upit.' ),
			),
			'related' => array( 'djelatnosti/klima-i-grijanje', 'djelatnosti/gradevina-i-adaptacije', 'usluge/google-business-profil' ),
		),
		'krovopokrivaci'            => array(
			'tab' => 'Krov', 'sector' => 'gradnja', 'label' => 'Krovopokrivači', 'icon' => 'home', 'prop' => 3, 'sign' => 'KROVOVI',
			'title' => 'Krovopokrivači i limari', 'name' => 'krovopokrivače i limare',
			'seo_title' => 'Web stranica za krovopokrivače i limare | ZAEC',
			'description' => 'Web za krovopokrivače i limare: galerija prije/poslije, vrste krovova i materijala, hitne sanacije nakon nevremena i upit za procjenu s fotografijama.',
			'h1' => 'Web za krovopokrivače: krov se prodaje <em>povjerenjem</em>.',
			'lead' => 'Krov je velika investicija i nitko ne bira naslijepo. Prije poziva ljudi žele vidjeti vaše radove, materijale i da ste stvarna, ozbiljna firma. Upravo to pokazuje dobar web.',
			'short' => 'Krov se prodaje povjerenjem: izvedeni radovi, materijali, područje rada i jednostavan put do procjene.',
			'onweb' => array( 'Prije / poslije', 'Vrste krova', 'Hitne sanacije', 'Zahtjev za procjenu' ),
			'searches' => array( 'krovopokrivač + grad', 'sanacija krova cijena', 'izmjena crijepa', 'limarski radovi oluci', 'popravak krova nakon nevremena' ),
			'problems' => array(
				array( 'Nema fotografija radova', 'Bez prije i poslije kupac ne može procijeniti kvalitetu.' ),
				array( 'Nevrijeme donese val upita', 'Nakon oluje svi traže krovopokrivača odjednom — tko je vidljiv tog dana, dobiva posao.' ),
				array( 'Upit bez podataka', 'Ako forma ne traži osnovno, procjena traje dulje i gubite vrijeme.' ),
			),
			'deliver' => array(
				array( 'Galerija prije / poslije', 'S kratkim opisom: lokacija, vrsta krova, materijal.' ),
				array( 'Stranice po vrsti posla', 'Sanacije, novi krovovi, limarija i oluci, ravni krovovi.' ),
				array( 'Upit za procjenu', 'Mjesto, vrsta krova, površina i fotografije — dolazite pripremljeni.' ),
				array( 'Hitne sanacije', 'Jasno istaknuta mogućnost hitnog izlaska nakon nevremena, ako je nudite.' ),
			),
			'structure' => array( 'Hero: vrste radova + područje', 'Prije / poslije', 'Materijali i vrste krova', 'Proces i jamstvo', 'FAQ', 'Zahtjev za procjenu' ),
			'faq' => array(
				array( 'Kakve fotografije trebam za web?', 'Najbolje rade fotografije prije i poslije s istog kuta, detalji opšava i limarije te krov nakon završetka. Mobitel je dovoljan ako su fotografije oštre i snimljene po danu.' ),
				array( 'Kako dobiti upite za hitne sanacije?', 'Zasebna stranica za sanacije nakon nevremena, broj telefona na vrhu i ažuran Google profil. Nakon oluje ljudi traže brzo i zovu one do kojih odmah dođu.' ),
			),
			'related' => array( 'djelatnosti/gradevina-i-adaptacije', 'usluge/izrada-web-stranica', 'usluge/lokalni-seo' ),
		),
		'gradevina-i-adaptacije'    => array(
			'tab' => 'Građevina', 'sector' => 'gradnja', 'label' => 'Izvođači radova', 'icon' => 'buildings', 'prop' => 4, 'sign' => 'GRADNJA',
			'title' => 'Građevina i adaptacije', 'name' => 'građevinske obrte i adaptacije',
			'seo_title' => 'Web stranica za građevinske obrte i adaptacije | ZAEC',
			'description' => 'Web za građevinske obrte: adaptacije stanova i kupaonica, fasade, keramika i završni radovi. Projekti kao studije, jasan proces i upit prema opsegu.',
			'h1' => 'Web za građevinu: pokažite kako radite <em>prije</em> prvog poziva.',
			'lead' => 'Kod adaptacije kupac se boji kašnjenja, skrivenih troškova i nereda. Web koji pokazuje stvarne projekte, jasan proces i tko radi posao uklanja taj strah — i privlači ozbiljnije klijente.',
			'short' => 'Kupac želi vidjeti što preuzimate, kako izgleda proces i stvarne projekte — prije prvog poziva. Dobar web filtrira ozbiljne upite.',
			'onweb' => array( 'Projekti', 'Proces', 'Usluge', 'Upit prema opsegu' ),
			'searches' => array( 'adaptacija stana + grad', 'adaptacija kupaonice cijena', 'keramičar + grad', 'fasaderski radovi', 'građevinska firma + grad' ),
			'problems' => array(
				array( 'Projekti nisu prikazani', 'Fotografije su na Facebooku od prije tri godine, a na webu ništa.' ),
				array( 'Nejasan proces', 'Kupac ne zna kako izgleda suradnja: izvid, ponuda, rokovi, plaćanje.' ),
				array( 'Pogrešni upiti', 'Bez jasnog opisa što preuzimate javljaju se ljudi za poslove koje ne želite.' ),
			),
			'deliver' => array(
				array( 'Projekti kao studije', 'Što je bilo, što je napravljeno i koliko je trajalo — uz fotografije.' ),
				array( 'Proces u koracima', 'Od izvida do primopredaje, da kupac zna što ga čeka.' ),
				array( 'Stranice po vrsti radova', 'Stanovi, kupaonice, fasade, keramika, suhi radovi.' ),
				array( 'Upit s fotografijama', 'Fotografije prostora i okvirne mjere već u prvom upitu.' ),
			),
			'structure' => array( 'Hero: što preuzimate', 'Usluge', 'Projekti (studije)', 'Proces', 'FAQ', 'Upit prema opsegu' ),
			'faq' => array(
				array( 'Kako prikazati radove bez profesionalnog fotografa?', 'Kao kratke studije: stanje prije, što je napravljeno, koliko je trajalo i završne fotografije. Iskren opis procesa često uvjeri više od savršene fotografije.' ),
				array( 'Može li forma tražiti podatke o opsegu radova?', 'Da. Forma može pitati vrstu radova, kvadraturu, lokaciju i željeni rok te primiti fotografije, pa ozbiljnije upite odmah razlikujete od usputnih.' ),
			),
			'related' => array( 'djelatnosti/krovopokrivaci', 'djelatnosti/elektricari', 'usluge/izrada-web-stranica' ),
		),
		'ugostiteljstvo-i-smjestaj' => array(
			'tab' => 'Smještaj', 'sector' => 'ugostiteljstvo', 'label' => 'Restorani i smještaj', 'icon' => 'bed', 'prop' => 5, 'sign' => 'APARTMANI',
			'title' => 'Ugostiteljstvo i smještaj', 'name' => 'restorane i smještaj',
			'seo_title' => 'Web za restorane i apartmane — direktne rezervacije | ZAEC',
			'description' => 'Web stranica za restorane, apartmane i kuće za odmor: meni, galerija, lokacija, više jezika i direktan upit ili rezervacija bez provizije platformi.',
			'h1' => 'Web za restorane i smještaj: više <em>direktnih</em> gostiju.',
			'lead' => 'Gost vas najčešće prvo vidi na Google karti ili platformi. Vlastiti web s menijem, fotografijama, lokacijom i direktnim upitom pretvara taj pogled u rezervaciju — bez provizije.',
			'short' => 'Gost mora brzo vidjeti smještaj ili meni, lokaciju i najjednostavniji način rezervacije. Svaki direktni upit je rezervacija bez provizije.',
			'onweb' => array( 'Meni / sobe', 'Galerija', 'Rezervacija', 'Više jezika' ),
			'searches' => array( 'restoran + grad', 'apartmani + mjesto', 'smještaj s bazenom', 'catering + grad', 'sobe za najam' ),
			'problems' => array(
				array( 'Meni kao PDF', 'Na mobitelu je PDF spor i nečitljiv. Ljudi zatvore stranicu.' ),
				array( 'Sve preko platformi', 'Provizija na svaku rezervaciju — čak i za goste koji se vraćaju.' ),
				array( 'Zastarjeli podaci', 'Krivo radno vrijeme na Googleu znači gost pred zatvorenim vratima i loša recenzija.' ),
			),
			'deliver' => array(
				array( 'Meni i ponuda na webu', 'Brzo čitljivo na mobitelu i lako za ažurirati.' ),
				array( 'Direktan upit ili rezervacija', 'Datumi i broj gostiju u prvom koraku; povezivanje s booking sustavom po potrebi.' ),
				array( 'Fotografije i lokacija', 'Prostor, jela ili smještaj, karta, parking i kako doći.' ),
				array( 'Više jezika', 'Engleski i njemački za ključne stranice — bez strojnog prijevoda koji odbija goste.' ),
			),
			'structure' => array( 'Hero: fotografija + upit/rezervacija', 'Smještaj ili meni', 'Galerija', 'Lokacija', 'Recenzije', 'Upit / rezervacija' ),
			'faq' => array(
				array( 'Trebam li vlastiti web ako sam na Bookingu?', 'Platforme donose goste, ali uzimaju proviziju. Vlastiti web je mjesto za povratne goste i direktne upite.' ),
				array( 'Treba li web na više jezika?', 'Ako dolaze gosti iz inozemstva, da — barem engleski. Svaki jezik dobiva svoju adresu, pa ga Google može prikazati gostima koji pretražuju na tom jeziku.' ),
			),
			'related' => array( 'djelatnosti/saloni-ljepote', 'usluge/google-business-profil', 'usluge/izrada-web-stranica' ),
		),
		'trgovine-i-webshop'        => array(
			'tab' => 'Shop', 'sector' => 'trgovina', 'label' => 'Trgovine', 'icon' => 'shop', 'prop' => 6, 'sign' => 'TRGOVINA',
			'title' => 'Trgovine i webshopovi', 'name' => 'trgovine',
			'seo_title' => 'Web i webshop za trgovine — WooCommerce i GA4 | ZAEC',
			'description' => 'Web i webshop za lokalne trgovine: katalog ili košarica, kartično plaćanje, dostava, lokalni podaci i GA4 e-commerce praćenje prodaje po kanalu.',
			'h1' => 'Web i webshop za trgovine: <em>prodaja</em> i kad je zatvoreno.',
			'lead' => 'Proizvod mora biti lako pronaći, razumjeti i kupiti — posebno na mobitelu. Katalog, plaćanje, dostava i mjerenje prodaje rade kao jedna cjelina, a ne kao dodatak.',
			'short' => 'Proizvod mora biti lako pronaći, razumjeti i kupiti. Katalog, dostava, plaćanje i mjerenje prodaje kao jedna cjelina.',
			'onweb' => array( 'Katalog / webshop', 'Plaćanje karticama', 'Dostava', 'GA4 prodaja' ),
			'searches' => array( 'naziv proizvoda + kupiti', 'trgovina + grad', 'webshop dostava Hrvatska', 'radno vrijeme trgovine', 'proizvod + cijena' ),
			'problems' => array(
				array( 'Webshop bez plana', 'Dostava, povrati i plaćanje dogovaraju se usput — i projekt traje mjesecima.' ),
				array( 'Spore stranice proizvoda', 'Velike slike i previše dodataka — kupac odustane prije košarice.' ),
				array( 'Ne znate što prodaje', 'Bez e-commerce praćenja ne znate koji kanal i proizvod donosi prihod.' ),
			),
			'deliver' => array(
				array( 'Katalog ili webshop', 'Ponekad je katalog s upitom brži put do prodaje. Odlučujemo prema vašem načinu rada.' ),
				array( 'Plaćanje i dostava', 'Kartice za hrvatsko tržište, dostavne službe, osobno preuzimanje.' ),
				array( 'Lokalni podaci', 'Radno vrijeme, adresa i Google profil za kupce koji dolaze u trgovinu.' ),
				array( 'GA4 e-commerce', 'Prihod po proizvodu i kanalu, odustajanja u košarici.' ),
			),
			'structure' => array( 'Hero: kategorije + ponuda', 'Istaknuti proizvodi', 'Dostava i plaćanje', 'O trgovini i lokacija', 'FAQ', 'Kontakt' ),
			'faq' => array(
				array( 'Radite li fiskalizaciju i ERP integracije?', 'To ide kao poseban opseg — prvo definiramo što točno treba povezati, zatim procjena i cijena.' ),
				array( 'Mogu li početi s katalogom pa kasnije dodati webshop?', 'Da. Katalog s upitom je brži početak, a proizvodi i struktura ostaju kad se kasnije uključe košarica i plaćanje.' ),
			),
			'related' => array( 'usluge/webshop', 'usluge/ga4-i-pracenje-konverzija', 'djelatnosti/ugostiteljstvo-i-smjestaj' ),
		),
		'saloni-ljepote'            => array(
			'tab' => 'Salon', 'sector' => 'ljepota', 'label' => 'Saloni ljepote', 'icon' => 'star', 'prop' => 7, 'sign' => 'SALON',
			'title' => 'Saloni ljepote i frizeri', 'name' => 'salone ljepote i frizere',
			'seo_title' => 'Web stranica za salone ljepote i frizere | ZAEC',
			'description' => 'Web stranica za salone ljepote, frizere i kozmetičare: usluge s cijenama, online rezervacija termina, galerija radova i recenzije koje pune raspored.',
			'h1' => 'Web za salone: da novi klijent <em>rezervira</em>, a ne samo pogleda.',
			'lead' => 'Kod salona odluka pada brzo: fotografije, cjenik, recenzije i slobodan termin. Ako nešto od toga nedostaje, klijent ode na sljedeći profil. Složimo put od pretrage do rezervacije.',
			'short' => 'Fotografije, cjenik, recenzije i slobodan termin — ako nešto nedostaje, klijent ode na sljedeći profil.',
			'onweb' => array( 'Cjenik', 'Online rezervacija', 'Galerija i tim', 'Recenzije' ),
			'searches' => array( 'frizer + grad', 'kozmetički salon + kvart', 'manikura + grad', 'trajno uklanjanje dlačica', 'pedikura' ),
			'problems' => array(
				array( 'Cjenik nije online', 'Ljudi ne žele zvati samo da pitaju cijenu — biraju salon koji ga ima.' ),
				array( 'Termini samo telefonom', 'Mnogi rezerviraju navečer. Ako ne mogu, rezerviraju drugdje.' ),
				array( 'Instagram nije dovoljan', 'Instagram je izlog, a Google karta je mjesto gdje vas nađu novi klijenti iz okolice.' ),
			),
			'deliver' => array(
				array( 'Usluge s cijenama', 'Jasan cjenik po kategorijama, jednostavan za ažuriranje.' ),
				array( 'Online rezervacija', 'Povezivanje sa sustavom koji već koristite ili postavljanje novog.' ),
				array( 'Galerija i tim', 'Stvarni radovi i ljudi koji ih rade — ljudi biraju osobu, ne samo salon.' ),
				array( 'Recenzije koje rastu', 'Podsjetnik za recenziju nakon termina i odgovori na recenzije.' ),
			),
			'structure' => array( 'Hero: usluge + rezervacija', 'Cjenik', 'Galerija radova', 'Tim', 'Recenzije', 'Rezervacija / upit' ),
			'faq' => array(
				array( 'Može li web raditi sa sustavom za rezervacije koji već koristim?', 'Najčešće da: ugrađuje se poveznica ili widget postojećeg sustava. Ako sustava nemate, predložimo jednostavan za svakodnevno korištenje.' ),
				array( 'Trebaju li cijene biti na webu?', 'Preporučujemo barem raspon cijena po usluzi. Klijent koji salon bira na mobitelu usporedi cjenik prije nego što rezervira.' ),
			),
			'related' => array( 'usluge/google-business-profil', 'djelatnosti/ugostiteljstvo-i-smjestaj', 'usluge/izrada-web-stranica' ),
		),
		// Nove stranice (strategija 03, točka 3): svaka ima stvaran projekt kao dokaz. Tvrdnje označene ⚑ vlasnik potvrđuje prije objave.
		'strucne-usluge'            => array(
			'tab' => 'Struka', 'sector' => 'strucne-usluge', 'label' => 'Stručne usluge', 'icon' => 'clipboard-check', 'prop' => 8, 'sign' => 'URED',
			'title' => 'Stručne i poslovne usluge', 'name' => 'stručne i poslovne usluge',
			'service_type' => 'Web stranica za stručne i poslovne usluge',
			'seo_title' => 'Web stranica za stručne i poslovne usluge | ZAEC',
			'description' => 'Web za računovodstvo, inženjering, laboratorije i savjetovanje: usluge jezikom klijenta, stručnost koja se vidi, reference i upit prema opsegu posla.',
			'h1' => 'Web za stručne usluge: stručno, a <em>razumljivo</em>.',
			'lead' => 'Klijent vas bira po stručnosti koju sam ne može procijeniti. Zato traži znakove: jasno opisane usluge, ljude iza posla, ovlaštenja i reference. Web koji ih pokaže prije prvog sastanka dovodi ozbiljnije upite.',
			'short' => 'Klijent bira po stručnosti koju ne može sam provjeriti: jasne usluge, ljudi iza posla, ovlaštenja i reference, uz kratak put do upita.',
			'onweb' => array( 'Usluge jezikom klijenta', 'Tim i ovlaštenja', 'Reference', 'Upit prema opsegu' ),
			'searches' => array( 'knjigovodstvo za obrt', 'računovodstveni servis + grad', 'energetski certifikat cijena', 'laboratorijska analiza hrane', 'statičar + grad' ),
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
			'structure' => array( 'Hero: usluge i kome su namijenjene', 'Usluge (stranica za svaku)', 'Tim i ovlaštenja', 'Reference', 'Kako izgleda suradnja', 'FAQ', 'Upit prema opsegu' ),
			'faq' => array(
				// ⚑ obećanje procesa: vlasnik potvrđuje
				array( 'Smijem li kao regulirana profesija predstavljati usluge na webu?', 'Pravila ovise o komori: odvjetnici, revizori i druge regulirane profesije imaju vlastita. Prije izrade ih zajedno pročitamo i web složimo tako da informira u okviru tih pravila.' ),
				array( 'Trebam li web i na engleskom?', 'Ako radite sa stranim klijentima ili partnerima, da, barem za ključne usluge. Svaki jezik dobiva svoju adresu, pa ga Google može prikazati klijentima na tom jeziku.' ),
			),
			'proof' => 'eurokontrola.hr',
			'related' => array( 'usluge/izrada-web-stranica', 'djelatnosti/ustanove-i-udruge', 'usluge/seo' ),
		),
		'ustanove-i-udruge'         => array(
			'tab' => 'Ustanove', 'sector' => 'ustanove', 'label' => 'Ustanove i udruge', 'icon' => 'users-group-rounded', 'prop' => 9, 'sign' => 'USTANOVA',
			'title' => 'Ustanove, udruge i obrazovanje', 'name' => 'ustanove i udruge',
			'service_type' => 'Web stranica za ustanove i udruge',
			'seo_title' => 'Web stranica za ustanove, udruge i škole | ZAEC',
			'description' => 'Web za ustanove, udruge i obrazovanje: sadržaj složen po posjetiteljima, novosti i projekti koje sami uređujete, pristupačnost i jasni dokumenti.',
			'h1' => 'Web za ustanove i udruge: da <em>svatko</em>&nbsp;nađe svoje.',
			'lead' => 'Roditelji, korisnici, partneri, donatori i mediji dolaze s različitim pitanjima. Web složen po posjetiteljima, a ne po unutarnjoj organizaciji, odgovara svakome od njih i ne zatrpava ostale.',
			'short' => 'Puno posjetitelja i puno sadržaja: svatko mora naći svoje bez lutanja, a novosti i projekte uređujete sami.',
			'onweb' => array( 'Sadržaj po posjetiteljima', 'Novosti i projekti', 'Pristupačnost', 'Dokumenti' ),
			'searches' => array( 'naziv ustanove', 'udruga + grad', 'upis u vrtić + grad', 'program + naziv ustanove', 'radno vrijeme + naziv ustanove' ),
			'problems' => array(
				array( 'Web složen po organizacijskoj shemi', 'Posjetitelj ne zna u kojem je odjelu ono što traži. Traži odgovor, ne organigram.' ),
				array( 'Novosti koje nitko ne ažurira', 'Ako je za svaku objavu potreban vanjski programer, web zastari za nekoliko mjeseci.' ),
				array( 'Dokumenti zakopani u PDF-ovima', 'Pravilnici, obrasci i natječaji bez reda i pretrage, i nečitljivi na mobitelu.' ),
			),
			'deliver' => array(
				array( 'Ulaz za svakog posjetitelja', 'Roditelji, korisnici, stručnjaci i partneri odmah vide svoj put kroz sadržaj.' ),
				array( 'Novosti i projekti koje uređujete sami', 'WordPress bez programera, uz kratku edukaciju pri primopredaji. Stranice EU projekata s oznakama financiranja.' ),
				// ⚑ formulacija prema Zakonu o pristupačnosti mrežnih stranica (NN 17/19): vlasnik potvrđuje
				array( 'Pristupačnost', 'Kontrast, veličina slova, rad tipkovnicom i čitačima ekrana. Tijela javnog sektora po zakonu moraju imati pristupačan web i izjavu o pristupačnosti.' ),
				array( 'Dokumenti s redom', 'Obrasci, pravilnici i natječaji po kategorijama i datumu, s pretragom.' ),
			),
			'structure' => array( 'Hero: tko ste i ulazi za posjetitelje', 'Programi i usluge', 'Novosti i projekti', 'Dokumenti', 'O ustanovi i tim', 'Kontakt i lokacija' ),
			'faq' => array(
				// ⚑ vlasnik potvrđuje
				array( 'Možete li poslati ponudu za jednostavnu nabavu ili projekt?', 'Da. Ponuda sadrži opseg, rok i fiksnu cijenu, u obliku koji vam treba za nabavu ili projektnu dokumentaciju.' ),
				array( 'Hoćemo li sami objavljivati novosti?', 'Da. Pri primopredaji pokažemo kako objavljujete novosti, projekte, galerije i dokumente, bez programera.' ),
			),
			'faq_price' => array( 'Koliko košta web za ustanovu?', 'Ovisi o broju stranica i funkcija (npr. dokumenti s pretragom, novosti ili više jezika). Složite procjenu projekta — vaše područje je već odabrano — i dobit ćete pisanu ponudu s fiksnom cijenom.' ),
			'proof' => 'cza-os.hr',
			'related' => array( 'usluge/izrada-web-stranica', 'usluge/odrzavanje-weba', 'djelatnosti/strucne-usluge' ),
		),
	);

	// Po djelatnosti: opis kadra (alt) i podnaslovi s nazivom zanata (umjesto istih H2 na svih osam stranica).
	$copy = array(
		'klima-i-grijanje'          => array( 'Vanjska jedinica dizalice topline noću: topli i hladni tok zraka izlaze iz ventilatora, pola uređaja je tehnički nacrt.', 'Gdje klima servisi <em>gube</em> pozive.', 'Što web klima servisa <em>mora</em> imati.' ),
		'vodoinstalateri'           => array( 'Bakrene cijevi s ventilima, manometrom i razdjelnikom podnog grijanja; topla i hladna voda teku kao svjetlo, bojler je nacrt.', 'Gdje vodoinstalateri <em>gube</em> pozive.', 'Što web vodoinstalatera <em>mora</em> imati.' ),
		'elektricari'               => array( 'Kuća sa solarnim panelima i punjačem za auto noću; dalekovod iza nje je plavi nacrt, a impulsi struje putuju do kuće.', 'Gdje električari <em>gube</em> pozive.', 'Što web električara <em>mora</em> imati.' ),
		'krovopokrivaci'            => array( 'Krov u tri faze: položen crijep, letve i rogovi s ljestvama te plavi nacrt krovišta s kotom nagiba.', 'Gdje krovopokrivači <em>gube</em> pozive.', 'Što web krovopokrivača <em>mora</em> imati.' ),
		'gradevina-i-adaptacije'    => array( 'Zgrada u gradnji noću: gotovi donji katovi, betonski skelet s iskrama zavarivanja, gornji katovi kao nacrt i toranjski kran.', 'Gdje izvođači radova <em>gube</em> upite.', 'Što web izvođača radova <em>mora</em> imati.' ),
		'ugostiteljstvo-i-smjestaj' => array( 'Kuća za odmor s osvijetljenim bazenom i terasom pod lampicama; krilo sa sobama je tlocrt do kojeg stižu tragovi rezervacija.', 'Gdje restorani i smještaj <em>gube</em> goste.', 'Što web restorana i smještaja <em>mora</em> imati.' ),
		'trgovine-i-webshop'        => array( 'Osvijetljeni izlog trgovine s plavom tendom; paketi odlijeću svjetlosnim lukovima prema kupcima, dio dućana je nacrt webshopa.', 'Gdje trgovine <em>gube</em> kupce.', 'Što web trgovine <em>mora</em> imati.' ),
		'saloni-ljepote'            => array( 'Salon noću: stolica i okruglo ogledalo s prstenastim svjetlom; sljedeća radna mjesta su nacrt, a tragovi rezervacija stižu do ogledala.', 'Gdje saloni <em>gube</em> termine.', 'Što web salona <em>mora</em> imati.' ),		'strucne-usluge'            => array( 'Tlocrt ureda: prijem, sala za sastanke, radna mjesta i arhiva.', 'Gdje stručne usluge <em>gube</em> klijente.', 'Što web stručne usluge <em>mora</em> imati.' ),
		'ustanove-i-udruge'         => array( 'Tlocrt prizemlja ustanove: ulaz s rampom, info pult s oglasnom pločom, dvorana i arhiva.', 'Gdje ustanove <em>gube</em> posjetitelje.', 'Što web ustanove <em>mora</em> imati.' ),
	);

	// cilj stranice po djelatnosti (podnaslov strukture)
	$goal = array( 'saloni-ljepote' => 'rezervacije', 'ugostiteljstvo-i-smjestaj' => 'rezervacije', 'trgovine-i-webshop' => 'kupnje', 'gradevina-i-adaptacije' => 'upita', 'strucne-usluge' => 'upita', 'ustanove-i-udruge' => 'upita' );

	foreach ( $industries as $slug => $d ) {
		$c      = $copy[ $slug ] ?? array( $d['title'] . ': noćni kadar djelatnosti, pola stvarno, pola tehnički nacrt.', 'Gdje se <em>gube</em> pozivi.', 'Što vaš web <em>mora</em> imati.' );
		$sector = zaec_sectors()[ $d['sector'] ];
		$blocks = array(
			array( 'type' => 'searches', 'items' => $d['searches'] ),
			array( 'type' => 'problems', 'title' => $c[1], 'items' => $d['problems'] ),
			array( 'type' => 'deliver', 'title' => $c[2], 'items' => array_map( static fn( $x ) => array( '', $x[0], $x[1] ), $d['deliver'] ), 'cols' => 2, 'numbered' => true ),
		);
		if ( ! empty( $d['proof'] ) ) {
			// dokaz: samo stvaran, objavljen projekt (blok se ne prikaže ako ga nema)
			$blocks[] = array( 'type' => 'projects', 'host' => $d['proof'], 'title' => 'Iz <em>prakse</em>.', 'lead' => 'Stvaran projekt iz ovog područja, s problemom, rješenjem i adresom koju možete otvoriti.' );
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
			'kicker'       => $sector['short'] === $d['label'] ? $d['label'] : $sector['short'] . ' · ' . $d['label'],
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
			'cta'          => array( 'Složite svoj projekt', 'cijene?djelatnost=' . rawurlencode( $slug ) . '#konfigurator' ),
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
		'description'  => 'Izrada web stranica u Osijeku: web, SEO, Google Business profil i GA4 iz jednog mjesta. Sastanak uživo u Osijeku i Slavoniji, na daljinu za cijelu Hrvatsku.',
		'kicker'       => 'Osijek · Slavonija',
		'h1'           => 'Izrada web stranica u <em>Osijeku</em> — za tvrtke koje žele više poziva.',
		'lead'         => 'ZAEC je web studio iz Osijeka. Radimo web stranice, SEO i Google profile za obrte i tvrtke u Osijeku, Osječko-baranjskoj županiji i Slavoniji — uživo, za istim stolom. Za ostatak Hrvatske radimo na daljinu.',
		'answer'       => 'ZAEC je web studio sa sjedištem u Osijeku (Čvrsnička ulica 29 A). Izrađuje web stranice, webshopove i landing stranice te radi SEO, Google Business profil i GA4 mjerenje za tvrtke u Osijeku, Osječko-baranjskoj županiji i cijeloj Hrvatskoj.',
		'image'        => 'world/usluga-kontakt.webp',
		'image_alt'    => 'Osijek noću iz zraka: grad u plavom nacrtu, osvijetljena konkatedrala i svjetlosni signal s njezina tornja.',
		'cta'          => array( 'Dogovorimo kratak razgovor', 'kontakt#upit' ),
		'blocks'       => array(
			array(
				'type'  => 'problems',
				'title' => 'Zašto lokalni <em>partner</em>.',
				'items' => array(
					array( 'Agencija iz drugog grada', 'Teško ih je dobiti, ne poznaju lokalno tržište, a svaka izmjena traje tjednima.' ),
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
					array( 'user-check', 'Jedna osoba od početka do kraja', 'Bez prebacivanja između prodaje, dizajna i razvoja.' ),
					array( 'layers', 'Web, SEO i mjerenje zajedno', 'Sve što treba da vas lokalni kupci nađu — na jednom mjestu.' ),
				),
			),
			array( 'type' => 'projects', 'title' => 'Radovi iz <em>Slavonije</em>.' ),
		),
		'faq'          => array(
			array( 'Radite li i izvan Osijeka?', 'Da. Za Osijek, Osječko-baranjsku županiju i Slavoniju možemo se naći uživo, a za ostatak Hrvatske radimo preko poziva i videopoziva.' ),
			array( 'Koliko košta izrada web stranice u Osijeku?', 'Jednako kao i drugdje — ovisi o opsegu. Nakon kratkog razgovora dobivate pisanu ponudu s fiksnom cijenom. Okvirni opseg vidite u procjeni projekta.' ),
			array( 'Gdje ste točno?', 'Sjedište je u Osijeku, Čvrsnička ulica 29 A. Sastanke dogovaramo unaprijed.' ),
		),
		'related'      => array( 'usluge/izrada-web-stranica', 'usluge/lokalni-seo', 'djelatnosti' ),
	);

	$r['cijene'] = array(
		'type'        => 'pricing',
		'title'       => 'Cijene i procjena',
		'seo_title'   => 'Koliko košta web stranica? Procjena u 60 sekundi | ZAEC',
		'description' => 'Koliko košta web stranica, landing ili webshop? Složite projekt i odmah vidite opseg i okvirni rok. Točna cijena stiže u pisanoj ponudi — fiksno, bez obveze.',
		'kicker'      => 'Cijene · procjena u 60 sekundi',
		'h1'          => 'Složite svoj web. <em>Cijenu</em> dobivate na papiru.',
		'lead'        => 'Odaberite što trebate i odmah vidite razinu opsega i okvirni rok. Pošaljite konfiguraciju — dobivate pisanu ponudu s fiksnom cijenom, bez obveze.',
		'answer'      => 'Cijena izrade web stranice ovisi o opsegu: broju stranica, funkcijama (rezervacije, webshop, više jezika, integracije) i tome imate li tekstove i fotografije. ZAEC ne objavljuje paušalne „od” cijene; nakon kratkog razgovora šalje pisanu ponudu s fiksnom cijenom i rokom. Plaćanje je 50 % na početku i 50 % prije objave.',
		'image'       => 'world/usluga-procjena.webp',
		'image_alt'   => 'Svjetlosni skener prolazi kroz web stranicu: iza njega ostaje plavi nacrt s mjernim oznakama i pet slojeva provjere.',
		'cta'         => array( 'Na procjenu', '#konfigurator' ),
		'blocks'      => array(
			array( 'type' => 'configurator' ),
			array( 'type' => 'guarantees' ),
			array( 'type' => 'contact', 'title' => 'Pošaljite <em>konfiguraciju</em>.' ),
		),
		'faq'         => array(
			array( 'Zašto na webu nema cjenika?', 'Jer cijena bez opsega ne znači ništa — dvije „web stranice” mogu se razlikovati po trudu nekoliko puta. Umjesto „od” iznosa koji navodi na krivi zaključak, dobivate pisanu ponudu s fiksnom cijenom za točno ono što trebate.' ),
			array( 'Je li procjena obvezujuća?', 'Ne. Procjena vam pomaže razumjeti opseg i rok, a ni ponuda koju dobijete ne obvezuje vas ni na što.' ),
			array( 'Kako se plaća?', 'Standardno 50 % za rezervaciju termina i početak rada, 50 % prije objave. Veći projekti mogu se podijeliti u faze.' ),
			array( 'Može li se cijena promijeniti tijekom rada?', 'Cijena iz ponude vrijedi za dogovoreni opseg. Sve izvan njega prvo dobiva zasebnu procjenu i ide u rad tek uz vašu potvrdu.' ),
			array( 'Jesu li domena i hosting uključeni?', 'Registriraju se na vas i plaćate ih izravno pružatelju; mi odradimo tehničko postavljanje. Tako vlasništvo i trošak ostaju transparentni.' ),
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
		'lead'        => 'Pošaljite naziv tvrtke i grad. Ručno provjeravamo Google profil, recenzije, web, brzinu i što o vama kažu ChatGPT i Google AI — uz usporedbu s tri konkurenta i tri koraka koja najviše donose.',
		'answer'      => 'Besplatna provjera vidljivosti uključuje ručnu analizu Google Business profila, recenzija, web stranice (sadržaj, brzina, mobitel, mjerenje) i odgovora AI asistenata o vašoj tvrtki, usporedbu s tri lokalna konkurenta i kratko izvješće s tri prioritetna koraka.',
		'image'       => 'world/usluga-seo.webp',
		'image_alt'   => 'Povećalo iznad grada u nacrtu izdvaja jednu osvijetljenu zgradu — vaš obrt — prema kojoj stižu upiti.',
		'cta'         => array( 'Pošalji za provjeru', '#upit' ),
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
			array( 'Zašto je besplatno?', 'Jer je to najbolji način da vidite kako radimo. Ako se odlučite za suradnju — odlično. Ako ne, izvješće ostaje vaše.' ),
			array( 'Hoćete li me zvati i nagovarati?', 'Ne. Pošaljemo izvješće na kontakt koji ostavite. Ako imate pitanja, javite se vi.' ),
			array( 'Koliko traje?', 'Provjeru radimo ručno, obično u roku od nekoliko radnih dana, ovisno o broju zahtjeva.' ),
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
		'lead'        => 'Kratko opišite posao. Javljamo se u radno vrijeme sa smjerom, opsegom i sljedećim korakom — bez obveze i bez prodajnog pritiska.',
		'image'       => 'world/usluga-kontakt.webp',
		'image_alt'   => 'Osijek noću iz zraka: grad u plavom nacrtu, osvijetljena konkatedrala i svjetlosni signal s njezina tornja.',
		'cta'         => array( 'Na formu', '#upit' ),
		'blocks'      => array( array( 'type' => 'contact', 'title' => '' ) ),
	);

	$r['o-nama'] = array(
		'type'        => 'about',
		'hero'        => 'onama',
		'title'       => 'O nama',
		'seo_title'   => 'O nama — ZAEC web studio iz Osijeka',
		'description' => 'ZAEC je web studio iz Osijeka koji vodi Filip Zajec: 10+ godina na webu, jedna odgovorna osoba, fiksna cijena u pisanoj ponudi i web koji donosi upite.',
		'kicker'      => 'O nama',
		'h1'          => 'Mali studio. <em>Velika</em> odgovornost.',
		'lead'        => 'ZAEC je web studio iz Osijeka koji vodi Filip Zajec — više od deset godina na webu, s fokusom na WordPress, UX, SEO i mjerenje. Gradimo web stranice za ljude koji grade sve ostalo.',
		'answer'      => 'ZAEC (obrt za računalne djelatnosti, vl. Filip Zajec) je web studio iz Osijeka koji izrađuje web stranice, webshopove i landing stranice te radi SEO, lokalni SEO, AI vidljivost i GA4 mjerenje za obrte i tvrtke u Hrvatskoj.',
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
					array( 'Jedna osoba odgovara za cijeli projekt.', 'Razgovor, nacrt, dizajn, kod i mjerenje su u istim rukama. Nema prenošenja poruka između prodaje i razvoja.' ),
					array( 'Nacrt prije dizajna.', 'Prvo crtamo što posjetitelj mora vidjeti i kojim redom. Boja i animacija dolaze na čvrst temelj.' ),
					array( 'Dogovor na papiru.', 'Opseg, rok i fiksna cijena prije početka. Sve izvan dogovora prvo dobiva procjenu.' ),
					array( 'Tehnika koju možete provjeriti.', 'Brzina, mobitel, pristupačnost i mjerenje provjeravaju se prije objave, a popis provjera dobivate i vi.' ),
					array( 'Sve je vaše.', 'Domena, hosting, pristupi i sadržaj registrirani su na vas. Možete otići kad god želite.' ),
					array( 'Iskreno, i kad to znači manji posao.', 'Ako vam novi web ne treba, reći ćemo vam prije nego išta potpišete.' ),
				),
			),
			array( 'type' => 'projects', 'title' => 'Radovi koje možete <em>otvoriti</em>.' ),
			array( 'type' => 'about', 'part' => 'facts' ),
			array( 'type' => 'guarantees' ),
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
