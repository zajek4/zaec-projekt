<?php
/**
 * Sadržaj stranica usluga i posebnih stranica (registar).
 * Ključ = putanja stranice. Stranice se kreiraju automatski (inc/landings.php).
 *
 * Pravila: bez izmišljenih brojki, klijenata i obećanja pozicija. Bez javnog cjenika —
 * cijena uvijek ide u pisanu ponudu nakon definiranog opsega.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_landing_registry() {
	static $r = null;
	if ( null !== $r ) {
		return $r;
	}
	$r = array_merge( zaec_registry_services(), zaec_registry_industries(), zaec_registry_special() );
	return apply_filters( 'zaec_landing_registry', $r );
}

/** Zajednički FAQ o cijeni (bez javnog cjenika). $what: izrada, landing ili usluga (SEO, profil, brzina — bez stranica i procjene projekta). */
function zaec_faq_price( $what = 'izrada' ) {
	$scope = array(
		'izrada'  => 'broju stranica, funkcijama i tome što već imate',
		'landing' => 'sadržaju, funkcijama i tome što već imate',
		'usluga'  => 'tome što treba napraviti i što već imate',
	);
	return array(
		'Koliko košta?',
		'Ovisi o opsegu: ' . ( $scope[ $what ] ?? $scope['izrada'] ) . '. Zato ne objavljujemo „od” cijene koje ništa ne znače. Nakon kratkog razgovora dobivate pisanu ponudu s fiksnom cijenom i rokom — bez obveze.' . ( 'usluga' === $what ? '' : ' Okvirni opseg i rok vidite odmah u procjeni projekta.' ),
	);
}

/* ═════════════════════════════════ USLUGE ═════════════════════════════════ */

function zaec_registry_services() {
	$r = array();

	$r['usluge'] = array(
		'type'        => 'hub',
		'title'       => 'Usluge',
		'seo_title'   => 'Usluge — web stranice, SEO, AI vidljivost i analitika | ZAEC',
		'description' => 'Web stranice i webshopovi, SEO, lokalni SEO, Google Business profil, AI vidljivost, GA4 praćenje i održavanje — jedan sustav koji donosi upite i mjeri ih.',
		'kicker'      => 'Usluge',
		'h1'          => 'Sve potrebno da vas <em>nađu</em>, odaberu i nazovu.',
		'lead'        => 'Kupac prolazi tri koraka: pretraga, usporedba, kontakt. Gradimo cijeli put — od Google karte i AI odgovora do stranice koja pretvara posjet u poziv, i mjerenja koje pokazuje što radi.',
		'answer'      => 'ZAEC radi izradu web stranica, webshopova i landing stranica, SEO i lokalni SEO, Google Business profil, AI vidljivost (ChatGPT, Gemini, Google AI) te postavljanje GA4 i e-commerce praćenja. Sve usluge mogu se uzeti zasebno ili kao jedan sustav.',
		'image'       => 'world/usluga-web.webp',
		'image_alt'   => 'Web stranica kao svijetleći ekran u noći: pola gotov dizajn, pola plavi nacrt; tragovi upita vode do gumba za kontakt.',
		'cta'         => array( 'Besplatna provjera vidljivosti', 'provjera-vidljivosti' ),
		'blocks'      => array(
			array( 'type' => 'services', 'title' => 'Usluge koje rade <em>zajedno</em>.', 'lead' => 'Svaka usluga rješava jedan dio puta od pretrage do poziva. Krenemo od one koja kod vas najbrže donosi kontakt.' ),
			array(
				'type'  => 'problems',
				'title' => 'Gdje se upiti najčešće <em>gube</em>.',
				'items' => array(
					array( 'Niste na karti', 'Za lokalne usluge Google prvo pokaže kartu s tri tvrtke. Bez uređenog profila tamo vas nema.' ),
					array( 'Web ne uvjerava', 'Posjetitelj u pet sekundi ne shvati što radite i gdje — i vrati se na pretragu.' ),
					array( 'Nitko ne mjeri', 'Ne znate koliko je poziva došlo s weba, pa ne znate što popraviti ni gdje ulagati.' ),
				),
			),
			array( 'type' => 'process' ), // „Šest razloga“ ostaje samo na Cijenama (design/04 #10)
		),
		'faq'         => array(
			array( 'Moram li uzeti sve usluge?', 'Ne. Prvo pogledamo gdje je najveća rupa — kod nekih je to Google profil, kod drugih web koji ne objašnjava ponudu ili nedostatak mjerenja. Krenemo od onoga što najbrže donosi kontakt.' ),
			array( 'Imam web, ali nema upita. Što sad?', 'Krenite od besplatne provjere vidljivosti: pogledamo profil, web, pretragu i AI odgovore te pošaljemo tri konkretna koraka. Često nije potreban novi web, nego pravi popravci.' ),
			zaec_faq_price(),
		),
	);

	$r['usluge/izrada-web-stranica'] = array(
		'type'         => 'service',
		'hero'         => 'izrada',
		'parent'       => 'usluge',
		'title'        => 'Izrada web stranica',
		'service_type' => 'Izrada web stranica',
		'seo_title'    => 'Izrada web stranica koje donose upite | ZAEC',
		'description'  => 'Izrada web stranica za obrte i tvrtke: nacrt, tekstovi, dizajn, brzina na mobitelu, SEO i GA4 mjerenje upita. Sve na vaše ime, fiksna cijena u ponudi.',
		'kicker'       => 'Usluga · U.01',
		'h1'           => 'Izrada web stranica koje <em>donose</em> upite.',
		'lead'         => 'Posjetitelj u pet sekundi mora shvatiti što radite, gdje radite i kako vas dobiti. Gradimo stranice koje to rješavaju prvo na mobitelu — sa stranicom za svaku uslugu koju ljudi traže i mjerenjem svakog poziva.',
		'answer'       => 'Izrada web stranice kod ZAEC-a uključuje nacrt strukture, pomoć s tekstovima, dizajn (predložak ili po mjeri), WordPress razvoj, tehnički SEO, schema markup, GA4 mjerenje poziva i upita te edukaciju. Domena i hosting su na vaše ime, a cijena je fiksna u pisanoj ponudi prije početka.',
		'image'        => 'world/usluga-web.webp',
		'image_alt'    => 'Monitor i mobitel s istom web stranicom u noći; dio ekrana je plavi nacrt rasporeda, a tragovi upita stižu do gumba.',
		'cta'          => array( 'Složite svoj projekt', 'cijene#konfigurator' ),
		'blocks'       => array(
			array(
				'type'  => 'anatomy',
				'tower' => true, // nastavak heroja: u noći, uz kulu (design/03, 4.5)
				'title' => 'Kako izgleda stranica koja <em>zove</em>.',
				'lead'  => 'Redoslijed koji odgovara na pitanja kupca prije nego ih postavi.',
				'label' => 'nacrt — naslovnica.pdf',
				'parts' => array(
					array( 'Prvi ekran: što, gdje, kako do vas', 'Jedna rečenica o usluzi, područje rada i gumb za poziv — iznad pregiba, na mobitelu.', 'hero' ),
					array( 'Usluge jezikom kupca', 'Kartice s uslugama koje želite prodavati, svaka vodi na vlastitu stranicu.', 'cards' ),
					array( 'Dokazi', 'Recenzije, jamstva i podaci o tvrtki. Bez izmišljenih brojki i lažnih logotipa.', 'proof' ),
					array( 'Radovi', 'Fotografije s kratkim opisom — rade i za ljude i za Google.', 'gallery' ),
					array( 'Područje rada', 'Gdje dolazite i u kojem roku. Ključno za lokalnu pretragu.', 'map' ),
					array( 'Česta pitanja', 'Odgovori na ono što vas pitaju na telefonu — i ono što AI asistenti citiraju.', 'faq' ),
					array( 'Kratki upit + poziv', 'Dva do četiri polja, ne dvanaest. Broj prikovan za dno ekrana na mobitelu.', 'form' ),
				),
			),
			array(
				'type'  => 'decisions',
				'title' => 'Što kupujete: <em>odluke</em>, ne stranice.',
				'lead'  => 'Ne prodajemo broj stranica. Prodajemo odluke koje se donose prije prvog retka koda, i papir na kojem piše što ste dobili.',
			),
			array(
				'type'  => 'deliver',
				'title' => 'Web koji radi <em>posao</em>, ne samo izgleda.',
				'lead'  => 'Svaki blok ispod postoji da bi posjetitelj lakše odlučio i javio se. Ako nešto ne pomaže tome — nema ga.',
				'items' => array(
					array( 'ruler', 'Nacrt prije dizajna', 'Sitemap i raspored sekcija prema tome što vaši kupci traže. Znate što dobivate prije prvog piksela.' ),
					array( 'pen', 'Tekstovi koji prodaju', 'Pomažemo složiti poruku jezikom vaših kupaca — bez „kvalitete i pouzdanosti od 2005.”.' ),
					array( 'widget', 'Stranica za svaku uslugu', 'Ljudi traže „servis klime”, ne „naše usluge”. Svaka važna usluga dobiva vlastitu stranicu.' ),
					array( 'smartphone', 'Prvo mobitel', 'Poziv i upit na dohvat palca. Testiramo na stvarnim mobitelima, ne samo na računalu.' ),
					array( 'bolt', 'Brzina', 'Lagan kod i optimizirane slike. Dobri Core Web Vitals pomažu i kupcima i Googleu.' ),
					array( 'magnifer', 'SEO i schema', 'Meta podaci, struktura naslova, sitemap, schema za tvrtku, usluge i pitanja.' ),
					array( 'chart', 'GA4 mjerenje', 'Klikovi na poziv, WhatsApp i poslani upiti bilježe se od prvog dana.' ),
					array( 'key', 'Sve na vaše ime', 'Domena, hosting, WordPress i pristupi su vaši. Možete otići kad god želite.' ),
				),
			),
			array(
				'type'  => 'compare',
				'title' => 'Predložak ili <em>po mjeri</em>?',
				'lead'  => 'Oba vode do istog cilja. Razlika je koliko strukture i dizajna treba nacrtati od nule — i koliko vremena to traži.',
				'cols'  => array(
					array( 'best' => 'Najbrži put do ozbiljnog weba', 'title' => 'Predložak', 'text' => 'Provjeren raspored koji vodi do upita, prilagođen vašem brandu, sadržaju i djelatnosti.', 'items' => array( 'Za obrt ili malu tvrtku koja treba web brzo', 'Struktura koja je već dokazala da radi', 'Vaše boje, logo, fotografije i tekstovi', 'Kraći rok i kontroliran opseg' ) ),
					array( 'best' => 'Najviše kontrole', 'title' => 'Po nacrtu', 'tag' => 'Po mjeri', 'feat' => true, 'text' => 'Struktura, UX i vizualni sustav crtaju se za vaš posao — kad predložak više nije dovoljan.', 'items' => array( 'Istraživanje ponude, kupaca i konkurencije', 'UX nacrt i dizajn sustav prije razvoja', 'Složenija logika i više tipova stranica', 'Animacije, 3D i interaktivni elementi' ) ),
				),
				'note'  => 'U oba slučaja: opseg i fiksna cijena u pisanoj ponudi prije početka, a domena i hosting registrirani na vas.',
			),
			array(
				'type'  => 'handover',
				'title' => 'Primopredaja koju možete <em>provjeriti</em>.',
				'lead'  => 'Prije predaje stranicu prolazimo po popisu. Popis dobivate i vi, pa ga možete proći sami.',
				'items' => array(
					array( 'Stvarni mobiteli', 'Stranicu prolazimo na stvarnim mobitelima, ne samo na računalu.' ),
					array( 'Brzina na mobitelu', 'Provjeravamo Core Web Vitals. Dobre vrijednosti prema Googleu:', 'LCP do 2,5 s · INP do 200 ms · CLS do 0,1' ),
					array( 'Svaki obrazac i gumb za poziv', 'Šaljemo probne upite i dodirujemo svaki poziv i WhatsApp.' ),
					array( 'Svaki događaj u GA4', 'Klikovi na poziv, WhatsApp i poslani upiti bilježe se od prvog dana.' ),
					array( 'Search Console i Google profil', 'Stranica je prijavljena Googleu, a profil povezan s webom.' ),
					array( 'Pristupi na vaše ime', 'Domena, hosting, WordPress i svi pristupi su vaši.' ),
					array( 'Edukacija i 14 dana jamstva', 'Pokažemo kako sami mijenjate tekstove, slike i radove.' ),
					array( 'Prvi izvještaj', 'Prve brojke: odakle dolaze posjetitelji i koliko ih se javilo.' ),
				),
			),
			array( 'type' => 'projects', 'title' => 'Radovi koje možete <em>otvoriti</em>.' ),
			array( 'type' => 'trades' ),
		),
		'faq'          => array(
			zaec_faq_price(),
			array( 'Koliko traje izrada?', 'Manji poslovni web obično nekoliko tjedana od potvrde nacrta, veći projekti dulje. Najviše vremena uštedi pripremljen sadržaj. Točan rok piše u ponudi prije početka.' ),
			array( 'Radite li na WordPressu?', 'Da. WordPress omogućuje da sami mijenjate tekstove, slike i radove, a dobro složen ostaje brz. Pri primopredaji pokažemo sve što trebate.' ),
			array( 'Što ako mi se dizajn ne svidi?', 'Zato prvo ide nacrt i vizualni smjer, uz dogovoreni broj korekcija prije razvoja. Dizajn ne radimo „naslijepo” pa ga onda mijenjamo iz temelja.' ),
			array( 'Pišete li i tekstove?', 'Pomažemo složiti strukturu i poruku, a pisanje cijelih tekstova može ući u opseg. Vi date znanje o poslu, mi ga pretvorimo u jasnu stranicu.' ),
			array( 'Imam stari web — trebam li novi?', 'Ne nužno. Prvo napravimo besplatnu provjeru i iskreno kažemo isplati li se popravak ili nova izrada.' ),
		),
		'related'      => array( 'izrada-web-stranica-osijek', 'usluge/seo', 'usluge/ga4-i-pracenje-konverzija' ),
	);

	$r['usluge/webshop'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Izrada webshopa',
		'service_type' => 'Izrada webshopa',
		'seo_title'    => 'Izrada webshopa (WooCommerce) — plaćanje i GA4 | ZAEC',
		'description'  => 'Izrada webshopa na WooCommerceu: katalog, kartično plaćanje, dostava, pravila prodaje i GA4 e-commerce praćenje od prvog dana. Opseg prije cijene.',
		'kicker'       => 'Usluga · U.02',
		'h1'           => 'Webshop koji <em>prodaje</em> — i zna koliko.',
		'lead'         => 'Katalog, plaćanje, dostava i mjerenje prodaje kao jedna cjelina. Prvo definiramo funkcije i pravila, zatim fiksnu cijenu — jer webshop nije „samo još jedna stranica”.',
		'answer'       => 'ZAEC radi webshopove na WooCommerceu: katalog i varijacije, kartično plaćanje preko pružatelja za hrvatsko tržište, dostavu, pravne stranice i GA4 e-commerce praćenje (pregled proizvoda, košarica, kupnja). Opseg se definira prije cijene, a cijena je fiksna u pisanoj ponudi.',
		'image'        => 'world/usluga-webshop.webp',
		'nacrt'        => true,
		'image_alt'    => 'Mobitel s webshopom i kartica za plaćanje; paketi izlaze iz ekrana i odlaze svjetlosnim lukovima prema kupcima.',
		'cta'          => array( 'Definirajmo opseg', 'cijene#konfigurator' ),
		'blocks'       => array(
			array(
				'type'  => 'deliver',
				'title' => 'Osam stvari koje <em>određuju</em> webshop.',
				'lead'  => 'Upravo ovdje nastaju skriveni troškovi i projekti koji traju mjesecima. Zato ih rješavamo na početku, na papiru.',
				'items' => array(
					array( 'box-minimalistic', 'Katalog i varijacije', 'Kategorije, filteri, veličine, boje, zalihe — i odakle dolaze podaci o proizvodima.' ),
					array( 'card', 'Plaćanje', 'Kartice (npr. CorvusPay), pouzeće ili uplata — i što se događa kad plaćanje ne prođe.' ),
					array( 'delivery', 'Dostava', 'Dostavne službe, cijene po težini ili zoni, besplatna dostava, osobno preuzimanje.' ),
					array( 'bill-list', 'Računi i integracije', 'Fiskalizacija, knjigovodstvo ili ERP kao zaseban, jasno definiran dio opsega.' ),
					array( 'refresh-circle', 'Povrati i reklamacije', 'Pravila, obrasci i obavijesti kupcima u skladu s propisima o zaštiti potrošača.' ),
					array( 'document', 'Pravne stranice', 'Uvjeti kupnje, privatnost, kolačići. Sadržaj pripremate s pravnikom, mi ga ugradimo.' ),
					array( 'graph-up', 'GA4 e-commerce', 'Pregledi, košarice, checkout i kupnje s vrijednošću — vidite gdje gubite kupce.' ),
					array( 'settings', 'Održavanje', 'Shop traži ažuriranja i sigurnosne kopije. Dogovaramo to unaprijed, ne nakon kvara.' ),
				),
			),
			array(
				'type'  => 'compare',
				'title' => 'Katalog ili <em>pravi</em> webshop?',
				'lead'  => 'Ne treba svaka trgovina košaricu. Ponekad je brži put do prodaje dobar katalog s gumbom za upit.',
				'cols'  => array(
					array( 'best' => 'Brže i jednostavnije', 'title' => 'Katalog s upitom', 'items' => array( 'Proizvodi uz savjet, montažu ili po mjeri', 'Cijene ovise o količini ili lokaciji', 'Manje pravila i održavanja', 'Može kasnije prerasti u webshop' ) ),
					array( 'best' => 'Prodaja 0–24', 'title' => 'Webshop', 'tag' => 'WooCommerce', 'feat' => true, 'items' => array( 'Standardni proizvodi i jasne cijene', 'Kartično plaćanje i dostava', 'Narudžbe bez vašeg sudjelovanja', 'Mjerenje prihoda po kanalu' ) ),
				),
			),
			array( 'type' => 'report', 'title' => 'Prodaja koju <em>vidite</em> u brojkama.', 'lead' => 'Uz svaki webshop postavljamo GA4 e-commerce praćenje. Ovo je ono što svaki mjesec vidite — s vašim stvarnim brojkama.' ),
			array( 'type' => 'process' ),
		),
		'faq'          => array(
			array( 'Koliko košta izrada webshopa?', 'Webshop je najzahtjevniji format jer uključuje plaćanje, dostavu, pravila i integracije. Zato prvo zajedno definiramo opseg, a zatim dobivate pisanu ponudu s fiksnom cijenom. Okvirnu razinu i rok vidite odmah u procjeni projekta.' ),
			array( 'Radite li kartično plaćanje za Hrvatsku?', 'Da, povezujemo kartična plaćanja preko pružatelja za hrvatsko tržište (npr. CorvusPay) — nakon što imate ugovor s pružateljem i definirana pravila prodaje.' ),
			array( 'Hoću li vidjeti koliko zarađujem i s kojeg kanala?', 'Da. GA4 e-commerce praćenje bilježi prihod po proizvodu i po izvoru prometa (Google, oglasi, društvene mreže, e-mail), uz Consent Mode v2 i poštivanje privole.' ),
			array( 'Mogu li sam dodavati proizvode?', 'Da. WooCommerce je jednostavan za svakodnevni rad, a pri primopredaji pokazujemo dodavanje proizvoda, promjenu cijene i obradu narudžbe.' ),
			array( 'Što s velikim brojem proizvoda?', 'Za stotine ili tisuće proizvoda planiramo uvoz iz tablice ili povezivanje sa sustavom koji već koristite, kao zaseban dio opsega.' ),
		),
		'related'      => array( 'usluge/ga4-i-pracenje-konverzija', 'djelatnosti/trgovine-i-webshop', 'usluge/odrzavanje-weba' ),
	);

	$r['usluge/landing-stranice'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Landing stranice',
		'service_type' => 'Izrada landing stranica',
		'seo_title'    => 'Izrada landing stranica za Google i Meta oglase | ZAEC',
		'description'  => 'Landing stranica s jednim ciljem: više upita iz Google i Meta oglasa, akcija i novih usluga. Struktura, tekst, brzina i praćenje konverzija.',
		'kicker'       => 'Usluga · U.03',
		'h1'           => 'Landing stranice s <em>jednim</em> ciljem.',
		'lead'         => 'Jedna ponuda, jedna poruka, jedan gumb. Za oglase, kampanje i nove usluge — stranica koja posjetitelja vodi ravno do upita i javlja oglasnom sustavu svaki rezultat.',
		'answer'       => 'Landing stranica je jedna stranica s jednim ciljem (upit, poziv, prijava ili kupnja), bez izbornika i sadržaja koji odvlači pažnju. ZAEC je slaže uz tekst usklađen s oglasom, brzu mobilnu izvedbu i praćenje konverzija za Google Ads i Meta.',
		'image'        => 'world/usluga-landing.webp',
		'nacrt'        => true,
		'image_alt'    => 'Jedan jantarni gumb sa strelicom u noći prema kojem se slijevaju deseci svjetlosnih tragova — jedna ponuda, jedan cilj.',
		'cta'          => array( 'Procijenite landing', 'cijene#konfigurator' ),
		'blocks'       => array(
			array(
				'type'  => 'fit',
				'title' => 'Kada landing ima <em>smisla</em>.',
				'lead'  => 'Landing nije jeftinija web stranica. To je drugi alat — za trenutak kad točno znate što posjetitelj treba napraviti.',
				'items' => array(
					array( 'Plaćate oglase', 'Oglas koji vodi na naslovnicu troši novac. Landing vodi posjetitelja ravno do upita.' ),
					array( 'Nova usluga ili proizvod', 'Kad nešto želite gurnuti na tržište, a ne želite mijenjati cijeli web.' ),
					array( 'Sezonska akcija', 'Servis klima u proljeće, zimske akcije, rezervacije za sezonu — jedna poruka, jedan rok.' ),
					array( 'Prvi korak online', 'Dobro složen landing je brz i ozbiljan početak koji kasnije prerasta u cijeli web.' ),
				),
			),
			array(
				'type'  => 'anatomy',
				'title' => 'Od klika na oglas do <em>upita</em>.',
				'lead'  => 'Redoslijed koji ne daje posjetitelju razlog da ode.',
				'label' => 'nacrt — landing.pdf',
				'parts' => array(
					array( 'Obećanje iz oglasa', 'Naslov ponavlja ono što je obećao oglas — posjetitelj odmah zna da je na pravom mjestu.', 'hero' ),
					array( 'Zašto baš vi', 'Tri konkretna razloga. Ne deset.', 'cards' ),
					array( 'Dokaz', 'Stvarne recenzije, radovi ili brojke koje možete potvrditi.', 'proof' ),
					array( 'Uklanjanje sumnje', 'Kako se formira cijena, rok, što je uključeno.', 'faq' ),
					array( 'Jedan gumb', 'Isti poziv na akciju kroz cijelu stranicu, bez izbornika koji odvlači.', 'form' ),
				),
			),
			array(
				'type'     => 'scope',
				'title'    => 'Što dobivate <em>uz</em> landing.',
				'yes_title'=> 'U opsegu',
				'yes'      => array( 'Struktura i tekst usklađeni s oglasom', 'Prilagođeno svim ekranima, prvo mobitelu', 'Forma za upit i poziv jednim dodirom', 'Praćenje konverzija za Google Ads i Meta', 'Tehnički SEO i brzina' ),
				'no_title' => 'Po dogovoru',
				'no'       => array( 'Vođenje oglasnih kampanja', 'A/B testiranje više verzija', 'Integracija s CRM-om', 'Više jezika' ),
			),
		),
		'faq'          => array(
			array( 'Koja je razlika između landing stranice i web stranice?', 'Web stranica predstavlja cijeli posao kroz više stranica. Landing ima jedan cilj — jedan upit, prijavu ili kupnju — i namjerno uklanja sve što odvlači pažnju.' ),
			array( 'Postavljate li praćenje konverzija za oglase?', 'Da. Postavljamo mjerenje poziva i poslanih upita te ga povezujemo s Google Ads i Meta, kako biste znali koliko upita donosi svaki euro.' ),
			array( 'Može li landing raditi bez oglasa?', 'Može, ali najviše vrijedi uz promet koji već dolazi: oglase, QR kod, email ili društvene mreže. Za organsku pretragu obično je bolja web stranica s više sadržaja.' ),
			zaec_faq_price( 'landing' ),
		),
		'related'      => array( 'usluge/ga4-i-pracenje-konverzija', 'usluge/izrada-web-stranica', 'usluge/seo' ),
	);

	$r['usluge/seo'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'SEO optimizacija',
		'service_type' => 'SEO optimizacija',
		'seo_title'    => 'SEO optimizacija web stranice — tehnika i sadržaj | ZAEC',
		'description'  => 'SEO bez praznih obećanja: tehnički SEO, struktura, sadržaj koji odgovara na pretrage, schema, brzina i mjesečni izvještaj iz Search Consolea i GA4.',
		'kicker'       => 'Usluga · U.04',
		'h1'           => 'SEO koji se mjeri <em>pozivima</em>, ne pozicijama.',
		'lead'         => 'Pozicije su sredstvo, a ne cilj. Radimo na onome što Google stvarno nagrađuje — tehnički ispravnoj, brzoj stranici koja jasno odgovara na ono što ljudi traže — i mjerimo koliko upita iz toga nastaje.',
		'answer'       => 'SEO optimizacija kod ZAEC-a uključuje tehnički audit (indeksiranje, brzina, struktura), strukturu stranica po uslugama i lokacijama, sadržaj koji odgovara na stvarne pretrage, schema markup i interno povezivanje. Napredak se prati kroz Search Console i GA4 — prikazi, klikovi i upiti.',
		'image'        => 'world/usluga-seo.webp',
		'nacrt'        => true,
		'image_alt'    => 'Povećalo iznad grada u nacrtu izdvaja jednu osvijetljenu zgradu — vaš obrt — prema kojoj stižu upiti.',
		'cta'          => array( 'Besplatna SEO provjera', 'provjera-vidljivosti' ),
		'blocks'       => array(
			array(
				'type'  => 'deliver',
				'title' => 'Šest dijelova SEO-a — <em>svih</em> šest.',
				'lead'  => 'Tehnika bez sadržaja ne rangira. Sadržaj bez tehnike se ne vidi. A ni jedno ni drugo ne vrijedi bez mjerenja.',
				'items' => array(
					array( 'settings', 'Tehnički SEO', 'Indeksiranje, sitemap, canonical, preusmjeravanja, greške, brzina i Core Web Vitals.' ),
					array( 'structure', 'Struktura', 'Stranica za svaku uslugu i područje, logični URL-ovi, interno povezivanje.' ),
					array( 'document', 'Sadržaj', 'Odgovori na stvarna pitanja kupaca, napisani jasno i provjereno — ne tekst „za Google”.' ),
					array( 'code', 'Schema markup', 'Strukturirani podaci o tvrtki, uslugama, pitanjima i člancima.' ),
					array( 'link', 'Ugled', 'Spominjanja u imenicima, lokalnim medijima i kod partnera — bez kupljenih linkova.' ),
					array( 'chart', 'Mjerenje', 'Search Console i GA4: prikazi, klikovi, pozicije i — najvažnije — upiti.' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'report', 'title' => 'Mjesečno znate <em>što</em> se mijenja.', 'lead' => 'Pregled bez žargona: koliko vas ljudi vidi, koliko klikne i koliko se javi — iz vaših podataka.' ),
			array( 'type' => 'statement', 'text' => 'Bježite od svakoga tko vam <em>garantira</em> prvo mjesto. Mi garantiramo da su temelji napravljeni ispravno — i da vidite brojke.' ),
		),
		'faq'          => array(
			array( 'Garantirate li prvo mjesto na Googleu?', 'Ne — i nitko pošten ne može. Pozicije ovise o konkurenciji, lokaciji korisnika i stotinama signala. Garantiramo ispravno postavljene temelje, jasan plan i mjesečne brojke.' ),
			array( 'Za koliko se vide rezultati?', 'Tehnički popravci često se primijete u nekoliko tjedana, a stabilan rast traje mjesecima. Ovisi o konkurenciji u vašoj djelatnosti i mjestu.' ),
			array( 'Radite li SEO za stranice koje niste vi izradili?', 'Da. Krenemo od tehničkog pregleda i kažemo što se isplati popraviti, a što ne.' ),
			array( 'Kupujete li linkove?', 'Ne. Kupljeni linkovi krše Googleove smjernice i mogu naštetiti. Radimo na stvarnim spominjanjima i sadržaju koji zaslužuje poveznicu.' ),
			zaec_faq_price( 'usluga' ),
		),
		'related'      => array( 'usluge/lokalni-seo', 'usluge/ai-vidljivost', 'usluge/brzina-web-stranice' ),
	);

	$r['usluge/lokalni-seo'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Lokalni SEO',
		'service_type' => 'Lokalni SEO',
		'seo_title'    => 'Lokalni SEO — više poziva s Google karte | ZAEC',
		'description'  => 'Lokalni SEO za obrte i uslužne tvrtke: Google Business profil, recenzije, stranice za usluge i mjesta, dosljedni podaci i mjesečno praćenje poziva.',
		'kicker'       => 'Usluga · U.05',
		'h1'           => 'Da vas nađu ljudi iz <em>vašeg</em> grada — kad vas trebaju.',
		'lead'         => 'Kad netko upiše „električar Osijek”, Google prvo pokaže kartu s tri tvrtke. O tome tko je tamo najviše odlučuju profil, recenzije i web. Radimo na sva tri — redom kojim donose najviše.',
		'answer'       => 'Lokalni SEO je optimizacija za pretrage s lokalnom namjerom („usluga + grad”, „u blizini”). Uključuje Google Business profil, sustav za recenzije, stranice za usluge i mjesta, dosljedne podatke (naziv, adresa, telefon) i mjerenje poziva s karte i weba.',
		'image'        => 'world/usluga-lokalno.webp',
		'nacrt'        => true,
		'image_alt'    => 'Osijek u plavom nacrtu: oznaka na karti s krugom područja rada, prema kojoj iz okolice stižu upiti; desno osvijetljena konkatedrala.',
		'cta'          => array( 'Besplatna provjera vidljivosti', 'provjera-vidljivosti' ),
		'blocks'       => array(
			array(
				'type'       => 'stats',
				'title'      => 'Što odlučuje tko je na <em>karti</em>.',
				'items'      => array(
					array( 'Relevantnost', 'koliko profil odgovara pretrazi', 'kategorije, usluge i opis koji točno kažu što radite' ),
					array( 'Udaljenost', 'koliko ste blizu onome tko traži', 'na to ne utječete, ali područje rada mora biti točno upisano' ),
					array( 'Istaknutost', 'koliko ste poznati i provjereni', 'recenzije, spomeni na drugim stranicama i sadržaj weba' ),
				),
				'note'       => 'Google za lokalne rezultate navodi tri glavna čimbenika: relevantnost, udaljenost i istaknutost. Na prvi i treći možete utjecati.',
				'sources'    => array( array( 'Google: kako se određuje lokalni poredak', 'https://support.google.com/business/answer/7091?hl=hr' ) ),
			),
			array(
				'type'  => 'deliver',
				'title' => 'Pet poluga <em>lokalne</em> vidljivosti.',
				// strategy/03 §2: obje stranice jednom rečenicom kažu kako se odnose i vode jedna na drugu
				'lead'  => 'Prva poluga je Google Business profil. Ako vam za početak treba samo on, postavljamo ga i kao zasebnu uslugu: <a href="' . esc_url( zaec_url( 'usluge/google-business-profil' ) ) . '">Google Business profil</a>.',
				'items' => array(
					array( 'map-point', 'Google Business profil', 'Kategorije, usluge, područje rada, radno vrijeme, fotografije stvarnih radova.' ),
					array( 'star', 'Sustav za recenzije', 'QR kartica i gotova poruka za WhatsApp: recenzija u 30 sekundi. Bez kupljenih ocjena.' ),
					array( 'streets-map-point', 'Stranice s vrijednošću', 'Za usluge i mjesta koja stvarno pokrivate — ne stotine praznih „grad” stranica.' ),
					array( 'clipboard-check', 'Dosljedni podaci', 'Isti naziv, adresa i telefon na webu, profilu i imenicima.' ),
					array( 'chart', 'Mjesečni izvještaj', 'Pozivi, upiti, prikazi na karti, nove recenzije — jednostavno i bez žargona.' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'checklist', 'title' => 'Provjerite svoj profil za <em>10 minuta</em>.', 'lead' => 'Deset stavki koje većina obrtnika preskoči. Svaki „ne” je posao koji ste možda izgubili.', 'cta' => array( 'Cijeli vodič', 'guide:google-business-profil-vodic' ) ),
		),
		'faq'          => array(
			array( 'Za koliko se vide rezultati?', 'Uređen profil i nove recenzije obično prve pomake pokažu unutar nekoliko tjedana. Stranice i sadržaj trebaju više vremena, najčešće nekoliko mjeseci.' ),
			array( 'Trebam li stranicu za svaki grad?', 'Samo za mjesta u kojima stvarno radite i o kojima imate što korisno reći. Prazne kopije s promijenjenim imenom grada mogu više naštetiti nego pomoći.' ),
			array( 'Smijete li kupiti ili napisati recenzije?', 'Ne. Lažne recenzije krše pravila platforme i propise o zaštiti potrošača. Pomažemo da stvarni klijenti lakše ostave recenziju.' ),
			zaec_faq_price( 'usluga' ),
		),
		'related'      => array( 'usluge/google-business-profil', 'usluge/ai-vidljivost', 'izrada-web-stranica-osijek' ),
	);

	$r['usluge/google-business-profil'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Google Business profil',
		'service_type' => 'Postavljanje i optimizacija Google Business profila',
		'seo_title'    => 'Google Business profil — postavljanje i recenzije | ZAEC',
		'description'  => 'Postavljanje i optimizacija Google Business profila (Google Moja tvrtka) za obrte: kategorije, usluge, fotografije, objave i sustav za recenzije.',
		'kicker'       => 'Usluga · U.06',
		'h1'           => 'Google Business profil koji vas stavlja na <em>kartu</em>.',
		'lead'         => 'Za većinu lokalnih usluga profil na Google karti donosi više poziva od same web stranice. Postavimo ga ispravno, povežemo s webom i održavamo ga živim.',
		'answer'       => 'Google Business profil (bivši Google Moja tvrtka) je besplatni profil tvrtke na Google pretrazi i Kartama. ZAEC ga postavlja ili popravlja: primarna i sporedne kategorije, usluge, područje rada, fotografije, objave, poveznica na pravu stranicu weba i sustav za prikupljanje stvarnih recenzija.',
		'image'        => 'world/usluga-gbp.webp',
		'nacrt'        => true,
		'image_alt'    => 'Kartica profila nad oznakom na karti u nacrtu: fotografija radnje, zvjezdice, gumbi za poziv, rutu i web, radno vrijeme i recenzije.',
		'cta'          => array( 'Želim uređen profil', 'kontakt#upit' ),
		'blocks'       => array(
			array(
				'type'  => 'problems',
				'title' => 'Tri greške koje <em>koštaju</em> pozive.',
				'items' => array(
					array( 'Pogrešna kategorija', 'Primarna kategorija je najvažnija postavka profila. Pogrešna znači da se ne pojavljujete za ono što radite.' ),
					array( 'Prazan profil', 'Bez usluga, fotografija i radnog vremena profil izgleda napušteno — i ljudima i Googleu.' ),
					array( 'Stare recenzije', 'Ljudi gledaju recenzije iz zadnjih mjeseci. Pet zvjezdica od prije tri godine nije dovoljno.' ),
				),
			),
			array(
				'type'  => 'deliver',
				'title' => 'Što radimo na <em>profilu</em>.',
				'lead'  => 'Profil je prvi korak lokalnog SEO-a. Kad je uređen, sljedeći je web koji odgovara na iste pretrage po uslugama i mjestima: to radimo kroz <a href="' . esc_url( zaec_url( 'usluge/lokalni-seo' ) ) . '">lokalni SEO</a>.',
				'items' => array(
					array( 'shield-check', 'Postavljanje ili preuzimanje', 'Potvrda vlasništva, kategorije, područje rada, radno vrijeme, kontakt.' ),
					array( 'list', 'Usluge i opis', 'Usluge onako kako ih ljudi traže i opis koji jasno kaže što radite i gdje.' ),
					array( 'camera', 'Fotografije stvarnih radova', 'Upute kako snimiti radove mobitelom, a mi ih uredimo i objavimo.' ),
					array( 'star', 'Recenzije bez muke', 'QR kartica, gotove poruke za klijente i predlošci odgovora — i na negativne.' ),
					array( 'link', 'Povezivanje s webom', 'Profil vodi na stranicu koja odgovara pretrazi, s mjerenjem poziva.' ),
					array( 'calendar', 'Redovite objave', 'Novosti, radovi i ponude da profil izgleda aktivno (u održavanju).' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'checklist', 'title' => 'Kontrolna lista za <em>10 minuta</em>.', 'cta' => array( 'Cijeli vodič', 'guide:google-business-profil-vodic' ) ),
		),
		'faq'          => array(
			array( 'Je li Google Business profil besplatan?', 'Da, profil je besplatan. Plaćate naše vrijeme za postavljanje, fotografije, sustav za recenzije i održavanje.' ),
			array( 'Mogu li imati profil ako radim na terenu?', 'Da. Uslužne tvrtke koje dolaze kod klijenta mogu sakriti adresu i postaviti područje rada.' ),
			array( 'Profil je otvorio netko drugi. Što sad?', 'Postoji postupak za preuzimanje vlasništva preko Googlea. Provedemo vas kroz njega.' ),
			zaec_faq_price( 'usluga' ),
		),
		'related'      => array( 'usluge/lokalni-seo', 'usluge/ai-vidljivost', 'provjera-vidljivosti' ),
	);

	$r['usluge/ai-vidljivost'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'AI vidljivost',
		'service_type' => 'Optimizacija vidljivosti u AI pretraživačima (GEO)',
		'seo_title'    => 'AI vidljivost (GEO) — ChatGPT, Gemini i Google AI | ZAEC',
		'description'  => 'Optimizacija za AI pretraživače (GEO): kako vašu tvrtku opisuju i preporučuju ChatGPT, Gemini, Perplexity i Google AI. Stvarni signali, mjesečna provjera.',
		'kicker'       => 'Usluga · U.07',
		'h1'           => 'Kad netko pita <em>ChatGPT</em> za preporuku — spominje li vas?',
		'lead'         => 'Sve više ljudi pita AI asistente „tko je dobar vodoinstalater u Osijeku”. Google AI odgovori prikazuju se i u Hrvatskoj. Provjeravamo što AI zna o vama, ispravljamo pogrešne podatke i jačamo signale koje AI stvarno koristi.',
		'answer'       => 'AI vidljivost (GEO — Generative Engine Optimization) znači da vas AI asistenti poput ChatGPT-a, Geminija, Perplexityja i Google AI odgovora mogu pronaći, točno opisati i preporučiti. Temelji su isti kao kod SEO-a — jasan sadržaj, schema, dosljedni podaci i recenzije — uz redovitu provjeru što AI stvarno odgovara.',
		'image'        => 'world/usluga-ai.webp',
		'nacrt'        => true,
		'image_alt'    => 'Odgovor AI asistenta u kojem je istaknut vaš obrt; svjetlo do njega teče iz tri izvora u nacrtu: web stranice, karte i recenzija.',
		'cta'          => array( 'Provjerite kako vas AI vidi', 'provjera-vidljivosti' ),
		'blocks'       => array(
			array(
				'type'    => 'stats',
				'title'   => 'Što AI gleda kad <em>preporučuje</em>.',
				'items'   => array(
					array( '133 : 11', 'prosjek Google recenzija', 'tvrtke koje AI preporučuje naspram onih koje ne preporučuje' ),
					array( '2×', 'više stranica na webu', 'kod tvrtki koje AI preporučuje' ),
					array( '55 %', 'točnih podataka', 'samo toliko tvrtki AI opisuje bez greške' ),
				),
				'note'    => 'Insites, analiza 10.000 lokalnih tvrtki u ChatGPT-u i Perplexityju (2026., tržište SAD-a). Na hrvatskom tržištu mjerimo za svakog klijenta posebno.',
				'sources' => array( array( 'Insites: što AI koristi za odabir lokalnih tvrtki', 'https://insites.com/what-ai-uses-to-choose-local-businesses-and-what-it-ignores' ) ),
			),
			array(
				'type'  => 'deliver',
				'title' => 'Kako radimo na <em>AI</em> vidljivosti.',
				'items' => array(
					array( 'chat-round-dots', 'Mjesečna provjera odgovora', 'Ista pitanja postavljamo ChatGPT-u, Geminiju, Perplexityju i Google AI-u i bilježimo spominju li vas.' ),
					array( 'clipboard-check', 'Ispravak podataka', 'Usklađujemo podatke na webu, Google profilu i imenicima — odatle AI uči.' ),
					array( 'code', 'Schema i entiteti', 'Strukturirani podaci o tvrtki, osobi, uslugama i pitanjima povezani u jedan graf.' ),
					array( 'document', 'Sadržaj koji se citira', 'Kratki, provjerljivi odgovori na vrhu stranica i FAQ — format koji AI rado citira.' ),
					array( 'star', 'Recenzije s kontekstom', 'Klijente potičemo da spomenu uslugu i mjesto — AI-u to daje razlog za preporuku.' ),
					array( 'global', 'Pristup za AI crawlere', 'robots.txt i llms.txt koji ne blokiraju asistente, brza i čista HTML struktura.' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'statement', 'text' => 'Nitko ne može <em>garantirati</em> da će vas ChatGPT preporučiti. Možemo povećati šanse, ispraviti greške — i svaki mjesec vam pokazati što AI odgovara.' ),
		),
		'faq'          => array(
			array( 'Je li to isto što i SEO?', 'Velikim dijelom da. AI asistenti oslanjaju se na iste podatke kao Google: web, profil, recenzije i spominjanja. Razlika je u tome što redovito provjeravamo i što AI odgovara te prilagođavamo format sadržaja.' ),
			array( 'Možete li garantirati da će me ChatGPT preporučiti?', 'Ne. Odgovori ovise o pitanju, korisniku i vremenu. Možemo povećati šanse i ispraviti pogrešne podatke te vam to pokazati u izvještaju.' ),
			array( 'Pomaže li llms.txt?', 'Datoteka llms.txt sama po sebi nije pokazala velik utjecaj na preporuke, ali je jeftina i ne šteti — pa je postavljamo. Novac i vrijeme idu na signale koji stvarno vrijede: sadržaj, podatke i recenzije.' ),
			array( 'Pišete li sadržaj pomoću AI-a?', 'AI koristimo za istraživanje i nacrte, ali svaku činjenicu provjeravamo ručno. Masovno generirane stranice ne radimo.' ),
		),
		'related'      => array( 'usluge/seo', 'usluge/google-business-profil', 'provjera-vidljivosti' ),
	);

	$r['usluge/ga4-i-pracenje-konverzija'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'GA4 i praćenje konverzija',
		'service_type' => 'Postavljanje Google Analytics 4, Google Tag Managera i e-commerce praćenja',
		'seo_title'    => 'GA4, GTM i e-commerce praćenje konverzija | ZAEC',
		'description'  => 'GA4 i Google Tag Manager: praćenje poziva, upita i prodaje, Consent Mode v2 i konverzije za Google Ads i Metu — uz izvještaje koje razumijete.',
		'kicker'       => 'Usluga · U.08',
		'h1'           => 'Znajte koji euro donosi <em>posao</em>.', // naglasak u drugom retku: prvi je na mobitelu u kadru (design/09, B)
		'lead'         => 'Bez mjerenja svaka odluka je nagađanje. Postavljamo GA4 i Google Tag Manager tako da vidite pozive, upite i prodaju — po kanalu, kampanji i stranici — uz poštivanje privole posjetitelja.',
		'answer'       => 'ZAEC postavlja Google Analytics 4 i Google Tag Manager: praćenje klikova na poziv i WhatsApp, poslanih formi, GA4 e-commerce događaja (view_item, add_to_cart, begin_checkout, purchase s vrijednošću), Consent Mode v2, konverzije za Google Ads i Meta te pregledan izvještaj u Looker Studiju.',
		'image'        => 'world/usluga-ga4.webp',
		'nacrt'        => true,
		'image_alt'    => 'Tokovi posjeta ulaze u nacrt izvještaja i postaju stupci; najviši, jantarni stupac označava kanal koji donosi upite.',
		'cta'          => array( 'Provjera postojećeg mjerenja', 'kontakt#upit' ),
		'blocks'       => array(
			array(
				'type'  => 'problems',
				'title' => 'Imate GA, a i dalje ne <em>znate</em>.',
				'items' => array(
					array( 'Mjerite posjete, ne posao', 'Broj posjeta ne plaća račune. Važni su pozivi, upiti i prodaja — a oni se često uopće ne bilježe.' ),
					array( 'Prodaja ne odgovara', 'GA pokazuje jedan prihod, shop drugi. Duple kupnje, izgubljeni povrati, krivi porez ili valuta.' ),
					array( 'Oglasi optimiziraju naslijepo', 'Google Ads i Meta bez ispravnih konverzija optimiziraju za klikove, ne za kupce.' ),
				),
			),
			array(
				'type'  => 'table',
				'title' => 'Što <em>točno</em> pratimo.',
				'lead'  => 'Standardni GA4 događaji, imenovani prema Googleovim preporukama, da rade i s izvještajima i s oglasima.',
				'head'  => array( 'Događaj', 'Kada se bilježi', 'Za koga' ),
				'rows'  => array(
					array( 'generate_lead', 'Poslan upit ili forma', 'Svi' ),
					array( 'click_to_call · click_whatsapp', 'Klik na broj telefona ili WhatsApp', 'Svi' ),
					array( 'view_item · view_item_list', 'Pregled proizvoda ili kategorije', 'Webshop' ),
					array( 'add_to_cart · begin_checkout', 'Dodavanje u košaricu, početak naplate', 'Webshop' ),
					array( 'purchase (s vrijednošću)', 'Uspješna kupnja: prihod, porez, dostava, artikli', 'Webshop' ),
					array( 'Konverzije oglasa', 'Upiti i kupnje proslijeđeni Google Ads i Meta', 'Oglašivači' ),
				),
			),
			array(
				'type'  => 'deliver',
				'title' => 'Postavljeno <em>kako treba</em>.',
				'items' => array(
					array( 'tag', 'Google Tag Manager', 'Sve oznake na jednom mjestu, bez diranja koda za svaku promjenu.' ),
					array( 'shield-check', 'Consent Mode v2', 'Traka privole u skladu s GDPR-om; mjerenje poštuje izbor posjetitelja.' ),
					array( 'cart', 'E-commerce dataLayer', 'Ispravni podaci o proizvodima, vrijednosti i valuti iz WooCommercea.' ),
					array( 'target', 'Konverzije za oglase', 'Google Ads i Meta primaju stvarne upite i kupnje — bolja optimizacija kampanja.' ),
					array( 'chart', 'Pregledan izvještaj', 'Looker Studio izvještaj s brojkama koje su vam važne, bez 40 tablica.' ),
					array( 'checklist', 'Test i dokumentacija', 'Svaki događaj testiran u DebugViewu i zapisan — znate što se mjeri i zašto.' ),
				),
				'cols'  => 3,
			),
			array( 'type' => 'report', 'title' => 'Što sadrži <em>pregled</em>.', 'lead' => 'Pet stvari koje vlasniku tvrtke trebaju — iz vaših stvarnih podataka, bez primjera i izmišljenih brojki.' ),
		),
		'faq'          => array(
			array( 'Radite li ovo i za web koji niste vi izradili?', 'Da. Krenemo od revizije postojećeg mjerenja (što se bilježi, a što ne) i dobivate popis popravaka prije bilo kakvog rada.' ),
			array( 'Treba li mi traka za kolačiće?', 'Ako koristite analitiku ili oglasne oznake koje postavljaju kolačiće — da. Postavljamo Consent Mode v2 tako da se mjerenje prilagođava privoli posjetitelja.' ),
			array( 'Prelazim s Universal Analyticsa ili nemam ništa — gdje krenuti?', 'S osnovnim GA4 postavljanjem i praćenjem upita. To je najveća vrijednost za najmanje vremena; e-commerce i oglase dodajemo nakon toga.' ),
			array( 'Koliko košta?', 'Ovisi o broju događaja, platformi i oglasnih sustava. Nakon kratke revizije dobivate pisanu ponudu s fiksnom cijenom.' ),
		),
		'related'      => array( 'usluge/webshop', 'usluge/landing-stranice', 'usluge/seo' ),
	);

	$r['usluge/brzina-web-stranice'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Brzina web stranice',
		'service_type' => 'Optimizacija brzine i Core Web Vitals',
		'seo_title'    => 'Ubrzanje web stranice i Core Web Vitals optimizacija | ZAEC',
		'description'  => 'Ubrzanje WordPress stranica: Core Web Vitals (LCP, INP, CLS), slike, fontovi, skripte i cache. Brža stranica znači manje odustajanja i bolji SEO.',
		'kicker'       => 'Usluga · U.09',
		'h1'           => 'Svaka sekunda <em>čekanja</em> košta upite.',
		'lead'         => 'Spora stranica gubi posjetitelje prije nego vide ijednu riječ — posebno na mobitelu i slabom signalu. Mjerimo stvarne Core Web Vitals i popravljamo ono što ih ruši.',
		'answer'       => 'Ubrzanje web stranice kod ZAEC-a počinje mjerenjem Core Web Vitals (LCP, INP, CLS) iz stvarnih podataka korisnika, a zatim optimiziramo slike (moderni formati, prave dimenzije), fontove, skripte, dodatke i cache. Cilj su dobre vrijednosti na mobitelu, ne samo visok broj u alatu.',
		'image'        => 'world/usluga-brzina.webp',
		'nacrt'        => true,
		'image_alt'    => 'Web stranica u pokretu: svjetlosni tragovi brzine prolaze kroz ekran koji se učitava od nacrta do gotovog prikaza.',
		'cta'          => array( 'Besplatno mjerenje brzine', 'provjera-vidljivosti' ),
		'blocks'       => array(
			array(
				'type'  => 'deliver',
				'title' => 'Gdje se gubi <em>brzina</em>.',
				'items' => array(
					array( 'gallery', 'Slike', 'Ogromne fotografije s mobitela. Rješenje: WebP/AVIF, prave dimenzije, lazy load.' ),
					array( 'text-field', 'Fontovi', 'Fontovi s vanjskih servisa blokiraju prikaz. Rješenje: lokalno učitani, s predučitavanjem (preload).' ),
					array( 'code', 'Skripte i dodaci', 'Deseci dodataka koji se učitavaju posvuda. Rješenje: čišćenje i uvjetno učitavanje.' ),
					array( 'server', 'Hosting i cache', 'Spor server bez cachea. Rješenje: ispravan cache, CDN po potrebi, bolji hosting.' ),
				),
			),
			array(
				'type'  => 'table',
				'title' => 'Što mjerimo — i <em>koji</em> je cilj.',
				'head'  => array( 'Metrika', 'Što znači', 'Dobra vrijednost' ),
				'rows'  => array(
					array( 'LCP', 'Koliko brzo se prikaže glavni sadržaj', 'do 2,5 s' ),
					array( 'INP', 'Koliko brzo stranica reagira na dodir/klik', 'do 200 ms' ),
					array( 'CLS', 'Koliko „skače” sadržaj pri učitavanju', 'do 0,1' ),
				),
				'note'  => 'Pragovi prema Googleovim smjernicama za Core Web Vitals (web.dev).',
			),
		),
		'faq'          => array(
			array( 'Je li važan rezultat u alatu PageSpeed Insights?', 'Rezultat je koristan putokaz, ali važniji su stvarni podaci korisnika (Core Web Vitals) — posebno na mobitelu. Ciljamo stvarno brzu stranicu, ne samo broj.' ),
			array( 'Hoće li se nešto pokvariti?', 'Radimo na kopiji ili uz sigurnosnu kopiju i testiramo ključne funkcije (forme, shop, izbornike) nakon svake promjene.' ),
			zaec_faq_price( 'usluga' ),
		),
		'related'      => array( 'usluge/seo', 'usluge/odrzavanje-weba', 'usluge/izrada-web-stranica' ),
	);

	$r['usluge/odrzavanje-weba'] = array(
		'type'         => 'service',
		'parent'       => 'usluge',
		'title'        => 'Održavanje weba',
		'service_type' => 'Održavanje web stranica',
		'seo_title'    => 'Održavanje WordPress weba bez obvezne pretplate | ZAEC',
		'description'  => 'Održavanje weba s jasnim opsegom: ažuriranja, sigurnosne kopije, nadzor, provjera forme i brzine, izmjene i mjesečni pregled. Bez neograničenih obećanja.',
		'kicker'       => 'Usluga · U.10',
		'h1'           => 'Mir <em>nakon</em> objave.',
		'lead'         => 'Web koji nitko ne održava s vremenom postaje spor, nesiguran ili prestaje slati upite — a to nitko ne primijeti. Održavanje je izbor, ne uvjet izrade, s opsegom crno na bijelo.',
		'answer'       => 'Održavanje web stranice kod ZAEC-a uključuje ažuriranja WordPressa i dodataka uz provjeru rada, sigurnosne kopije izvan servera, nadzor dostupnosti, provjeru forme i brzine te, ovisno o razini, izmjene sadržaja i mjesečni pregled upita. Bez ugovorne obveze.',
		'image'        => 'world/usluga-odrzavanje.webp',
		'nacrt'        => true,
		'image_alt'    => 'Slojevi web stranice složeni jedan iznad drugog; svjetlosni prsten ih provjerava, a iza su sigurnosne kopije u nacrtu.',
		'image_card'   => true,
		'dark'         => true,
		'cta'          => array( 'Dogovorimo održavanje', 'kontakt#upit' ),
		'blocks'       => array(
			array(
				'type'  => 'problems',
				'title' => 'Kvarovi koje <em>ne</em> vidite.',
				'items' => array(
					array( 'Forma ne šalje', 'Najskuplji kvar je onaj koji ne primijetite: upiti tjednima odlaze u prazno.' ),
					array( 'Zastarjeli dodaci', 'Neažurirani WordPress i dodaci najčešći su ulaz za napade.' ),
					array( 'Nema kopije', 'Bez sigurnosne kopije jedan kvar može značiti izradu ispočetka.' ),
				),
			),
			array(
				'type'  => 'tiers',
				'title' => 'Tri razine. <em>Jasan</em> opseg.',
				'lead'  => 'Cijena ovisi o veličini weba i broju sati izmjena, pa je dobivate u ponudi. Ono što je uključeno — piše crno na bijelo.',
				'items' => array(
					array( 'name' => 'Osnovno', 'for' => 'Za web koji se rijetko mijenja, a mora biti siguran.', 'items' => array( 'Ažuriranja s provjerom rada', 'Sigurnosne kopije izvan servera', 'Nadzor dostupnosti', 'Mjesečna provjera forme' ) ),
					array( 'name' => 'Aktivno', 'for' => 'Za posao koji redovito dodaje radove i novosti.', 'feat' => true, 'items' => array( 'Sve iz razine Osnovno', 'Izmjene sadržaja u dogovorenom opsegu', 'Provjera brzine', 'Prioritetni odgovor u radno vrijeme' ) ),
					array( 'name' => 'Rast', 'for' => 'Za tvrtke kojima je web glavni izvor upita.', 'items' => array( 'Sve iz razine Aktivno', 'Mjesečni izvještaj (GA4 i Search Console)', 'Manji SEO i UX zahvati', 'Prijedlozi sljedećeg koraka' ) ),
				),
			),
			array(
				'type'      => 'scope',
				'title'     => 'Što <em>nije</em> „sitna izmjena”.',
				'yes_title' => 'Održavanje',
				'yes'       => array( 'Zamjena teksta, slike ili radnog vremena', 'Dodavanje novog rada ili novosti', 'Ažuriranja i sigurnost', 'Ispravak greške na isporučenom radu' ),
				'no_title'  => 'Nova procjena',
				'no'        => array( 'Nova stranica ili sekcija', 'Nova funkcija (rezervacije, shop, jezik)', 'Redizajn postojećih dijelova', 'Integracija s drugim sustavom' ),
			),
		),
		'faq'          => array(
			array( 'Moram li ugovoriti održavanje?', 'Ne. 14 dana tehničkog jamstva uključeno je u svaku izradu, a održavanje je izbor koji možete prekinuti krajem svakog mjeseca.' ),
			array( 'Održavate li stranice koje niste vi izradili?', 'Nakon kratke besplatne provjere — često da. Ako je stranica u lošem stanju, prvo kažemo što popraviti.' ),
			array( 'Koliko košta održavanje?', 'Ovisi o veličini weba i razini. Cijenu dobivate u ponudi, bez skrivenih stavki i bez dugoročne obveze.' ),
		),
		'related'      => array( 'usluge/brzina-web-stranice', 'usluge/ga4-i-pracenje-konverzija', 'usluge/izrada-web-stranica' ),
	);

	return $r;
}
