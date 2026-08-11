<?php
/**
 * Source-of-truth defaults migrated from src/template.html and src/main.module.js.
 * The templates fall back to these values until an editor overrides them in WP admin.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_front_defaults() {
	return array(
		'hero_kicker'            => '[ Web studio · Osijek ]',
		'hero_title'             => 'Web koji vaš posao objašnjava — i otvara put do kontakta.',
		'hero_lead'              => 'Dobra web stranica nije ukras. Objasni što nudite, pokaže zašto vam vjerovati i vodi posjetitelja do poziva ili upita. Po predlošku ili po nacrtu — opseg i cijena prije početka.',
		'hero_primary_text'      => 'Javite nam se',
		'hero_primary_url'       => '#upit',
		'hero_secondary_text'    => 'Kako web radi',
		'hero_secondary_url'     => '#metoda',
		'hero_note'              => 'Bez pritiska · prvo razumijemo posao, zatim predlažemo smjer.',
		'hero_hint'              => '',
		'services_kicker'        => '[ 01 — Za koga gradimo ]',
		'services_title'         => 'Web koji razumije vaš posao.',
		'services_lead'          => 'Web nije online letak. Njegov posao je da u nekoliko sekundi objasni što nudite, kome pomažete, gdje radite i kako vam se osoba može javiti.',
		'services_note'          => 'Struktura, sadržaj i poziv na akciju slažu se prema vašem poslu — ne prema generičkom paketu.',
		'poznato_kicker'         => '[ 02 — Znamo kako izgleda ]',
		'poznato_title'          => 'Kada web ne služi samo sebi.',
		'poznato_bridge'         => 'Web prvo smanjuje nedoumicu, zatim pokazuje razlog za povjerenje i završava jasnim pozivom ili upitom.',
		'metoda_kicker'          => '[ 03 — Metoda ]',
		'metoda_title'           => 'Svaka stranica kreće od razloga za kontakt.',
		'metoda_lead'            => 'Prije dizajna razumijemo što prodajete, što klijent mora znati i koji je sljedeći korak: poziv, upit, rezervacija ili kupnja.',
		'proces_kicker'          => '[ 04 — Način rada ]',
		'proces_title'           => 'Od stvarnog problema do objave.',
		'proces_lead'            => 'Ne gradimo stranice da samo izgledaju dobro. Dogovorimo što trebaju objasniti, kamo trebaju voditi i kako provjeravamo da to radi.',
		'ekran_kicker'           => '[ 05 — Mobile-first ]',
		'ekran_title'            => 'Prvo mobitel. Onda jasan put do kontakta.',
		'ekran_lead'             => 'Na malom ekranu nema prostora za lutanje. Posjetitelj mora odmah razumjeti što radite, vidjeti zašto vam može vjerovati i u jednom dodiru nazvati ili poslati upit.',
		'cijene_kicker'          => '[ 06 — Cijene ]',
		'cijene_title'           => 'Biramo način izrade prema poslu, ne prema trendu.',
		'cijene_lead'            => 'Predložak je brži kada je standardni smjer dovoljan. Po nacrtu prvo rješavamo strukturu i UX za konkretan posao. U oba slučaja opseg i cijena su jasni prije rada.',
		'band_kicker'            => 'Poseban opseg',
		'band_title'             => 'Webshop, booking i integracije.',
		'band_text'              => 'Webshop, rezervacije, višejezičnost, naplata i nestandardne integracije ne guramo u paket na silu. Prvo funkcije i opseg, zatim cijena prije razvoja.',
		'band_price'             => 'Po procjeni',
		'band_price_meta'        => 'nakon opsega',
		'band_cta'               => 'Definirajmo opseg',
		'radovi_kicker'          => '[ 07 — Dokazi ]',
		'radovi_title'           => 'Radovi koji pokazuju kako razmišljamo.',
		'radovi_lead'            => 'Ne pokazujemo ukrasne makete kao rezultate. Objavljujemo stvarne projekte, njihov opseg i samo potvrđene ishode.',
		'klijenti_kicker'        => '[ 08 — Povjerenje ]',
		'klijenti_title'         => 'Riječ majstora.',
		'faq_kicker'             => '[ 09 — Pitanja ]',
		'faq_title'              => 'Prije nego pitate.',
		'upit_kicker'            => '[ 10 — Upit ]',
		'upit_title'             => 'Recite nam što vaš web treba postići.',
		'upit_lead'              => 'Vi najbolje znate svoj posao. Mi pomažemo prevesti ga u jasnu ponudu, dokaz i put do poziva ili upita.',
		'upit_privacy'           => 'Podatke koristimo isključivo za odgovor na upit. Bez newslettera i bez ustupanja trećima.',
		'call_kicker'            => '[ Razgovor bez pritiska ]',
		'call_note'              => 'Ne trebate pripremiti tehnički jezik. Dovoljno je reći što nudite, kome se obraćate i gdje danas zapinje.',
		'stack_kicker'           => '[ Alati koje spajamo ]',
		'stack_title'            => 'Alati koji imaju razlog biti na vašem webu.',
		'stack_lead'             => 'Google alati, trgovina i naplata ulaze samo kada pomažu poslu — ne kao ukrasni logotipi.',
	);
}

function zaec_front_repeater_defaults() {
	return array(
		'hero_stats' => array(), // namjerno prazno — hero ne treba brojke; trust strip niže nosi dokaz
		'services' => array(
			array( 'number' => '01', 'title' => 'Poslovne web stranice', 'text' => 'Jasna ponuda, dokaz i put do kontakta.', 'layer' => '1' ),
			array( 'number' => '02', 'title' => 'Struktura i UX', 'text' => 'Prvo rješavamo što posjetitelj treba znati i napraviti.', 'layer' => '2' ),
			array( 'number' => '03', 'title' => 'Lokalna vidljivost', 'text' => 'Temelji koji pomažu da vas pravi ljudi pronađu.', 'layer' => '4' ),
			array( 'number' => '04', 'title' => 'Landing stranice', 'text' => 'Jedna ponuda, jedan cilj i jasan sljedeći korak.', 'layer' => '5' ),
			array( 'number' => '05', 'title' => 'Mjerenje i povezivanje', 'text' => 'Kontakt, analitika i alati koji imaju razlog.', 'layer' => '3' ),
			array( 'number' => '06', 'title' => 'Postavljanje i primopredaja', 'text' => 'Sustav koji možete koristiti i nakon objave.', 'layer' => '0' ),
		),
		'occupations' => array(
			array( 'tab' => 'Klima', 'title' => 'Za klimatizaciju', 'sub' => 'Servis, montaža i čišćenje. Klijent mora odmah pronaći što radite, gdje dolazite i kako do termina.', 'q' => 'Na webu: usluge · područje rada · poziv/WhatsApp · upit za termin' ),
			array( 'tab' => 'Voda', 'title' => 'Za vodoinstalatere', 'sub' => 'Kod curenja se ne čita roman. Hitni kontakt, područje rada i vrsta intervencije moraju biti jasni u nekoliko sekundi.', 'q' => 'Na webu: hitni poziv · intervencije · fotografija problema · lokalne stranice' ),
			array( 'tab' => 'Struja', 'title' => 'Za električare', 'sub' => 'Od sitnog kvara do instalacija i atesta — jasno odvojimo usluge, reference i područje na koje izlazite.', 'q' => 'Na webu: usluge · reference/certifikati · područje rada · brzi upit' ),
			array( 'tab' => 'Krov', 'title' => 'Za krovopokrivače i limare', 'sub' => 'Krov se prodaje povjerenjem: izvedeni radovi, materijali, područje rada i jednostavan put do procjene.', 'q' => 'Na webu: prije/poslije · vrste krova · reference · zahtjev za ponudu' ),
			array( 'tab' => 'Građevina', 'title' => 'Za građevinu i adaptacije', 'sub' => 'Kupac želi vidjeti što preuzimate, kako izgleda proces i možete li pokazati stvarne projekte prije prvog poziva.', 'q' => 'Na webu: projekti · usluge · proces · upit prema opsegu projekta' ),
			array( 'tab' => 'Smještaj', 'title' => 'Za smještaj i turizam', 'sub' => 'Gost mora brzo vidjeti smještaj, lokaciju, sadržaje i najjednostavniji način rezervacije.', 'q' => 'Na webu: sobe · galerija · karta · booking/upit · više jezika' ),
			array( 'tab' => 'Shop', 'title' => 'Za trgovine i webshopove', 'sub' => 'Proizvod mora biti lako pronaći, razumjeti i kupiti — posebno na mobitelu.', 'q' => 'Na webu: katalog/webshop · filteri · dostava i plaćanje · analitika' ),
			array( 'tab' => '+', 'title' => 'Za ostale usluge i struke', 'sub' => 'Odvjetnik, računovođa, ordinacija, studio, škola… Ako klijenti prije odluke uvijek pitaju isto, stranica može dati jasan odgovor i uputiti na poziv ili upit.', 'q' => 'Na webu: usluge · cijene/okvir · FAQ · jasan CTA — bez generičkog paketa' ),
		),
		'pain_points' => array(
			array( 'code' => 'F.01', 'title' => 'Ljudi ne razumiju što nudite.', 'text' => 'Ako posjetitelj brzo ne shvati kome pomažete i kako vas dobiti, odlazi prije razgovora.' ),
			array( 'code' => 'F.02', 'title' => 'Preporuke nisu dovoljne same po sebi.', 'text' => 'Preporuka dovede osobu do vašeg imena; web joj pomaže provjeriti ponudu, radove i sljedeći korak.' ),
			array( 'code' => 'F.03', 'title' => 'Upiti ne dolaze slučajno.', 'text' => 'Web ne može zamijeniti dobru uslugu, ali može jasno odgovoriti na ista pitanja prije prvog poziva i smanjiti trenje.' ),
			array( 'code' => 'F.04', 'title' => 'Oprezni ste — s razlogom.', 'text' => 'Možda ste već platili web koji nikad nije zaživio. Razumije se. Zato kod nas cijenu, rok i opseg dobivate na papir prije početka — i slobodno možete reći ne.' ),
		),
		'method_points' => array(
			array( 'code' => '3.1', 'title' => 'Razumijemo posao prije dizajna', 'text' => 'Što prodajete, kome pomažete i gdje nastaje odluka.' ),
			array( 'code' => '3.2', 'title' => 'Sadržaj koji vodi do kontakta', 'text' => 'Odgovor na pitanja, dokaz i jasan sljedeći korak.' ),
			array( 'code' => '3.3', 'title' => 'Mjerenje bez magle', 'text' => 'Pratimo klikove, pozive i upite kada je mjerenje postavljeno.' ),
		),
		'process_steps' => array(
			array( 'code' => 'K.01', 'title' => 'Razgovor', 'text' => 'Kratak poziv. Saslušamo, posavjetujemo i pošteno kažemo što vam se isplati: predložak ili izrada po mjeri.', 'meta' => 'poziv ne košta ništa' ),
			array( 'code' => 'K.02', 'title' => 'Smjer i opseg', 'text' => 'Kod predloška biramo postojeći smjer. Kod izrade po mjeri prvo crtamo nacrt. U oba slučaja opseg potvrđujemo prije razvoja.', 'meta' => 'predložak ili nacrt · opseg potvrđen' ),
			array( 'code' => 'K.03', 'title' => 'Izgradnja i testiranje', 'text' => 'Gradimo dogovorene stranice i funkcije, zatim ih provjeravamo na mobitelu, tabletu i desktopu.', 'meta' => 'rok i opseg potvrđeni prije početka' ),
			array( 'code' => 'K.04', 'title' => 'Objava i primopredaja', 'text' => 'Stranicu objavljujemo, predajemo pristupe i pokazujemo što sami možete uređivati. Tehničke greške vezane uz isporučeni rad pokrivamo još 14 dana.', 'meta' => 'pristupi + kratka edukacija + 14 dana jamstva' ),
		),
		'screen_points' => array(
			array( 'code' => '5.1', 'title' => 'Odgovor u prvim sekundama', 'text' => 'Posjetitelj odmah vidi što nudite, kome pomažete i zašto vam se može javiti.' ),
			array( 'code' => '5.2', 'title' => 'Kontakt bez traženja', 'text' => 'Poziv i upit ostaju dostupni tamo gdje ih osoba očekuje — bez kopanja po stranici.' ),
			array( 'code' => '5.3', 'title' => 'Sadržaj koji vodi', 'text' => 'Usluge, dokaz, često pitanje i sljedeći korak slažu se u razumljiv put do razgovora.' ),
		),
		'pricing' => array(
			array( 'track' => 'Predložak', 'code' => 'PR.01', 'name' => 'Landing', 'price' => '390 €', 'meta' => 'fiksno', 'tag' => 'Za jednu jasnu ponudu i jedan glavni cilj.', 'badge' => 'Najbrže', 'featured' => '', 'package' => 'Landing po predlošku', 'cta' => 'Landing po predlošku', 'features' => "Provjeren ZAEC layout prilagođen vašem brandu\nJedna landing stranica i kontakt forma\nVaš sadržaj, logo, boje i fotografije\nResponsive izvedba i osnovni tehnički SEO\nJedna objedinjena runda korekcija\n14 dana tehničkog jamstva nakon objave" ),
			array( 'track' => 'Predložak', 'code' => 'PR.02', 'name' => 'Web stranica', 'price' => '690 €', 'meta' => 'od', 'tag' => 'Za mali poslovni web bez custom dizajna od nule.', 'badge' => '', 'featured' => '', 'package' => 'Web po predlošku', 'cta' => 'Web po predlošku', 'features' => "Do 5 standardnih stranica iz provjerenog sustava\nPrilagodba sadržaja, boja i vizualnog identiteta\nKontakt, karta i osnovne Google integracije\nResponsive izvedba i osnovni tehnički SEO\nJedna objedinjena runda korekcija\n14 dana tehničkog jamstva nakon objave" ),
			array( 'track' => 'Po nacrtu', 'code' => 'NA.01', 'name' => 'Landing', 'price' => '790 €', 'meta' => 'od', 'tag' => 'Za kampanju, proizvod ili uslugu kojoj treba vlastita struktura.', 'badge' => '', 'featured' => '', 'package' => 'Landing po nacrtu', 'cta' => 'Landing po nacrtu', 'features' => "Struktura i UX nacrt prema vašoj ponudi\nCustom vizualni smjer umjesto gotovog predloška\nJedna landing stranica s custom sekcijama\nResponsive izvedba i tehnički SEO\nDo dvije objedinjene runde korekcija nacrta\n14 dana tehničkog jamstva nakon objave" ),
			array( 'track' => 'Po nacrtu', 'code' => 'NA.02', 'name' => 'Web stranica', 'price' => '1.490 €', 'meta' => 'od', 'tag' => 'Za tvrtku kojoj predložak više nije dovoljno dobar.', 'badge' => 'Najviše kontrole', 'featured' => '1', 'package' => 'Web po nacrtu', 'cta' => 'Web po nacrtu', 'features' => "Sitemap, struktura i UX nacrt prije razvoja\nCustom dizajn sustav u ZAEC kvaliteti izvedbe\nDo 5 sadržajnih stranica / 3 ključna layouta\nSustav za uređivanje sadržaja, responsive izvedba i tehnički SEO\nDo dvije objedinjene runde korekcija nacrta\n14 dana tehničkog jamstva nakon objave" ),
		),
		'pricing_notes' => array(
			array( 'label' => 'Plaćanje', 'text' => '50% za rezervaciju termina i početak rada, 50% prije objave. Veći projekti mogu se podijeliti po jasno definiranim fazama.' ),
			array( 'label' => 'Domena + hosting', 'text' => 'Nisu uključeni u cijenu izrade. Registriraju se na klijenta i klijent ih plaća direktno pružatelju; mi odradimo tehničko postavljanje.' ),
			array( 'label' => 'Podrška', 'text' => '14 dana tehničkog jamstva za greške na isporučenom radu. Novi sadržaj, nove funkcije i trajno održavanje — zasebno, s jasnim opsegom.' ),
			array( 'label' => 'Opseg', 'text' => 'Sve izvan dogovorenog nacrta prvo dobiva procjenu i cijenu. Dodatna stranica ili funkcija nije skrivena „sitna izmjena”.' ),
		),
		'testimonials' => array(),
		'trust_stats' => array(
			array( 'value' => '4.9', 'label' => 'Google ocjena' ),
			array( 'value' => 'JASNO', 'label' => 'što web treba postići' ),
			array( 'value' => 'DIREKTNO', 'label' => 'do poziva ili upita' ),
			array( 'value' => 'STVARNO', 'label' => 'radovi i izjave' ),
		),
		'stack_items' => array(
			array( 'code' => 'G.01', 'title' => 'Google Business Profile', 'text' => 'Profil, kategorije, usluge, fotografije i put do recenzija — da vas lokalni upit stvarno nađe.' ),
			array( 'code' => 'G.02', 'title' => 'Analytics i Search Console', 'text' => 'Mjerenje prometa i tehnički uvid u pretragu. Bez magle, s pristupima na vama.' ),
			array( 'code' => 'G.03', 'title' => 'Tehnički SEO temelj', 'text' => 'Brzina, struktura, meta sloj i schema u okviru izrade stranice — ne kao prazno obećanje pozicija.' ),
			array( 'code' => 'S.01', 'title' => 'WooCommerce', 'text' => 'Katalog, košarica i narudžbe kada shop ima smisla i jasan opseg.' ),
			array( 'code' => 'S.02', 'title' => 'Corvus Pay', 'text' => 'Kartično plaćanje za hrvatske webshopove — povezivanje nakon što su proizvodi, dostava i pravila definirani.' ),
		),
		'faqs' => array(
			array( 'question' => 'Koliko traje izrada?', 'answer' => 'Predložak je najbrža opcija, a izrada po nacrtu traži više vremena jer prvo potvrđujemo strukturu i dizajn. Konkretan rok ulazi u ponudu prije početka rada.' ),
			array( 'question' => 'Što ako mi se dizajn ne svidi?', 'answer' => 'Kod predloška birate postojeći smjer i prilagođavamo ga vašem brandu. Kod izrade po nacrtu prvo potvrđujemo nacrt i vizualni smjer, uz dogovoreni broj korekcija prije razvoja.' ),
			array( 'question' => 'Tko radi moju stranicu?', 'answer' => 'Vi imate jednu odgovornu osobu — ne lanac podizvođača. Iza ZAEC-a stoji više od deset godina rada na webu, uz UX, sadržaj i Google integracije.' ),
			array( 'question' => 'Trebam li znati o tehnologiji?', 'answer' => 'Ne. Mi vodimo tehnički dio, a pri primopredaji dobijete pristupe i kratke upute za ono što stvarno trebate uređivati.' ),
			array( 'question' => 'Radite li marketing i Google oglase?', 'answer' => 'Ne prodajemo marketinške pakete niti obećavamo pozicije. Postavljamo tehničke i sadržajne temelje, a ako plaćeni oglas ima smisla za vaš posao, reći ćemo to otvoreno i odvojeno.' ),
			array( 'question' => 'Kako se plaća?', 'answer' => 'Standardno 50% za rezervaciju termina i početak rada, a 50% prije objave. Veće projekte možemo podijeliti u faze ako je to smislenije za opseg.' ),
			array( 'question' => 'Radite li webshop i kartično plaćanje?', 'answer' => 'Da, kada je opseg jasan: WooCommerce i kartično plaćanje preko Corvus Paya za hrvatsko tržište. To ide kao poseban opseg — prvo funkcije i pravila, zatim cijena, nikad "shop u pola dana".' ),
			array( 'question' => 'Jesu li domena i hosting uključeni?', 'answer' => 'Ne uključujemo ih u cijenu izrade. Registriraju se na vas i plaćate ih direktno pružatelju, a mi odradimo tehničko postavljanje. Tako vlasništvo i trošak ostaju potpuno transparentni.' ),
			array( 'question' => 'Radite li samo lokalno ili za cijelu Hrvatsku?', 'answer' => 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom. Radili smo s obrtnicima i s većim tvrtkama, uključujući suradnje na daljinu s klijentima izvan Hrvatske kad opseg to traži.' ),
			array( 'question' => 'Što točno radite oko Googlea?', 'answer' => 'U sklopu izrade postavljamo ili uredimo Google Business Profile, tehničke SEO temelje, Analytics i Search Console. Ne prodajemo vođenje oglasnih kampanja kao mjesečni paket — ako jednokratna pomoć oko oglasa ima smisla, kažemo to odvojeno.' ),
		),
	);
}
