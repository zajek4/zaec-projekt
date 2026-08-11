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
		'hero_kicker'            => '[ Web studio · Osijek · Hrvatska ]',
		'hero_title'             => 'Gradimo web stranice za ljude koji grade sve ostalo.',
		'hero_lead'              => 'Web treba napraviti više od dobrog prvog dojma: u nekoliko sekundi objasniti što radite, pokazati zašto vam vjerovati i dovesti čovjeka do poziva, upita ili rezervacije. Po predlošku ili po nacrtu — opseg i cijena prije početka.',
		'hero_primary_text'      => 'Javite nam se',
		'hero_primary_url'       => '#upit',
		'hero_secondary_text'    => 'Za koga radimo',
		'hero_secondary_url'     => '#za-koga',
		'hero_note'              => 'Kratak razgovor ne košta ništa · bez obaveze.',
		'hero_hint'              => '',
		'services_kicker'        => '[ 01 — Za koga gradimo ]',
		'services_title'         => 'Web koji razumije vaš zanat.',
		'services_lead'          => 'Majstor, restoran, ustanova ili stručna tvrtka — ljudi vas prvo pokušaju razumjeti. Složimo web koji tu priču pretvara u povjerenje i kontakt.',
		'services_note'          => 'U izradu ulaze brzina, jasna struktura, Google Business Profile i mjerenje. Shop i integracije — samo kada vašem poslu stvarno trebaju.',
		'poznato_kicker'         => '[ 02 — Znamo kako izgleda ]',
		'poznato_title'          => 'Zvuči poznato?',
		'poznato_bridge'         => 'Dobar web ne glumi veću tvrtku. Samo jasno pokaže pravu vrijednost vašeg posla — i olakša prvi kontakt.',
		'metoda_kicker'          => '[ 03 — Metoda ]',
		'metoda_title'           => 'Prije koda, razlog zbog kojeg će vas netko kontaktirati.',
		'metoda_lead'            => 'Ne počinjemo od boje gumba. Počinjemo od vašeg posla, pitanja klijenta i odluke koju treba donijeti.',
		'proces_kicker'          => '[ 04 — Način rada ]',
		'proces_title'           => 'Od prvog razgovora do weba koji radi.',
		'proces_lead'            => 'Dogovorimo cilj, složimo strukturu, izradimo i provjerimo svaki važan put do kontakta.',
		'ekran_kicker'           => '[ 05 — Mobile-first ]',
		'ekran_title'            => 'Prvo mobitel. Onda sve ostalo.',
		'ekran_lead'             => 'Na mobitelu posjetitelj ne želi obilazak. Želi odgovor: što radite, gdje ste, možete li mu pomoći i kako da vas dobije. Zato svaki važan put prema pozivu ili upitu rješavamo prvo tamo.',
		'cijene_kicker'          => '[ 06 — Cijene ]',
		'cijene_title'           => 'Predložak ili nacrt. Prvo biramo razinu izrade.',
		'cijene_lead'            => 'Ako je provjeren smjer dovoljan, predložak štedi vrijeme. Ako vaš posao traži vlastitu logiku, crtamo nacrt. U oba slučaja znate što dobivate prije početka.',
		'band_kicker'            => 'Poseban opseg',
		'band_title'             => 'Webshop, booking i integracije.',
		'band_text'              => 'Webshop, rezervacije, višejezičnost, naplata i nestandardne integracije ne guramo u paket na silu. Prvo funkcije i opseg, zatim cijena prije razvoja.',
		'band_price'             => 'Po procjeni',
		'band_price_meta'        => 'nakon opsega',
		'band_cta'               => 'Definirajmo opseg',
		'radovi_kicker'          => '[ 07 — Radovi ]',
		'radovi_title'           => 'Radovi iz stvarnog svijeta.',
		'radovi_lead'            => 'Tri različita posla, tri različita razloga za dobar web. Ne pokazujemo makete — pokazujemo ono što je stvarno online.',
		'klijenti_kicker'        => '[ 08 — Riječ majstora ]',
		'klijenti_title'         => 'Kad web radi svoj posao, to se osjeti.',
		'klijenti_lead'          => 'Stvarna iskustva, kada ih možemo potpisati i objaviti bez uljepšavanja.',
		'faq_kicker'             => '[ 09 — Pitanja ]',
		'faq_title'              => 'Prije nego pitate.',
		'upit_kicker'            => '[ 10 — Upit ]',
		'upit_title'             => 'Recite nam čime se bavite. Mi crtamo ostalo.',
		'upit_lead'              => 'Ne morate znati tehničke izraze. Dovoljne su dvije rečenice o poslu, trenutnom problemu i kontaktu koji želite dobivati.',
		'upit_privacy'           => 'Podatke koristimo isključivo za odgovor na upit. Bez newslettera i bez ustupanja trećima.',
		'call_kicker'            => '[ Radije razgovor? ]',
		'call_note'              => 'Poziv ne košta ništa. Na kraju znate smjer — i možete stati.',
		'stack_kicker'           => '[ Alati koje spajamo ]',
		'stack_title'            => 'Alati koji imaju razlog biti na vašem webu.',
		'stack_lead'             => 'Google alati, trgovina i naplata ulaze samo kada pomažu poslu — ne kao ukrasni logotipi.',
	);
}

function zaec_front_repeater_defaults() {
	return array(
		'hero_stats' => array(), // namjerno prazno — hero ne treba brojke; trust strip niže nosi dokaz
		'services' => array(
			array( 'number' => '01', 'title' => 'Poslovne web stranice', 'text' => 'Da vas ljudi razumiju, zapamte i jave vam se.', 'layer' => '1' ),
			array( 'number' => '02', 'title' => 'Dizajn i UX', 'text' => 'Pravi redoslijed informacija prije ukrasa.', 'layer' => '2' ),
			array( 'number' => '03', 'title' => 'Lokalna vidljivost', 'text' => 'Da vas pronađu kada im vaša usluga stvarno treba.', 'layer' => '4' ),
			array( 'number' => '04', 'title' => 'Landing stranice', 'text' => 'Jedna ponuda, jedan razlog i jedan jasan korak.', 'layer' => '5' ),
			array( 'number' => '05', 'title' => 'Google i mjerenje', 'text' => 'Da znate što ljudi traže i gdje se javljaju.', 'layer' => '3' ),
			array( 'number' => '06', 'title' => 'Postavljanje i primopredaja', 'text' => 'Uredan završetak i pristupi koji ostaju vama.', 'layer' => '0' ),
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
			array( 'code' => 'F.01', 'title' => 'Imate dobar posao, ali to se online ne vidi.', 'text' => 'Posjetitelj ne zna koliko ste dobri ako mu web u nekoliko sekundi ne pokaže što radite i kako mu možete pomoći.' ),
			array( 'code' => 'F.02', 'title' => 'Preporuka otvori vrata. Web treba otvoriti razgovor.', 'text' => 'Kada vas netko potraži, stranica treba potvrditi da ste pravi izbor — bez velikih riječi i bez traženja po društvenim mrežama.' ),
			array( 'code' => 'F.03', 'title' => 'Ista pitanja ponavljate svaki dan.', 'text' => 'Usluge, područje rada, cijena, termin, proces — dobar web dio tih odgovora daje prije prvog poziva.' ),
			array( 'code' => 'F.04', 'title' => 'Oprezni ste — s razlogom.', 'text' => 'Web nije mala odluka. Zato prije početka razgovaramo o opsegu, cijeni i onome što vam se stvarno isplati — i slobodno možete reći ne.' ),
		),
		'method_points' => array(
			array( 'code' => '3.1', 'title' => 'Prava poruka', 'text' => 'Što nudite, kome pomažete i zašto baš vi.' ),
			array( 'code' => '3.2', 'title' => 'Jasan sljedeći korak', 'text' => 'Poziv, upit, rezervacija ili kupnja — bez nagađanja.' ),
			array( 'code' => '3.3', 'title' => 'Dokaz koji ima težinu', 'text' => 'Radovi, proces i iskustva samo kada ih možemo potvrditi.' ),
		),
		'process_steps' => array(
			array( 'code' => 'K.01', 'title' => 'Razgovor', 'text' => 'Kratak poziv. Saslušamo, posavjetujemo i pošteno kažemo što vam se isplati: predložak ili izrada po mjeri.', 'meta' => 'poziv ne košta ništa' ),
			array( 'code' => 'K.02', 'title' => 'Smjer i opseg', 'text' => 'Kod predloška biramo postojeći smjer. Kod izrade po mjeri prvo crtamo nacrt. U oba slučaja opseg potvrđujemo prije razvoja.', 'meta' => 'predložak ili nacrt · opseg potvrđen' ),
			array( 'code' => 'K.03', 'title' => 'Izgradnja i testiranje', 'text' => 'Gradimo dogovorene stranice i funkcije, zatim ih provjeravamo na mobitelu, tabletu i desktopu.', 'meta' => 'rok i opseg potvrđeni prije početka' ),
			array( 'code' => 'K.04', 'title' => 'Objava i primopredaja', 'text' => 'Stranicu objavljujemo, predajemo pristupe i pokazujemo što sami možete uređivati. Tehničke greške vezane uz isporučeni rad pokrivamo još 14 dana.', 'meta' => 'pristupi + kratka edukacija + 14 dana jamstva' ),
		),
		'screen_points' => array(
			array( 'code' => '5.1', 'title' => 'Što nudite u jednom pogledu', 'text' => 'Prvi ekran mora odgovoriti na najvažnije pitanje: možete li mi vi pomoći?' ),
			array( 'code' => '5.2', 'title' => 'Kontakt na dohvat palca', 'text' => 'Poziv, poruka ili upit dostupni su onda kada se osoba odluči javiti.' ),
			array( 'code' => '5.3', 'title' => 'Bez praznog hoda', 'text' => 'Brzina, čitljivost i sadržaj rade zajedno — na vezi koja je stvarna, ne idealna.' ),
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
		'testimonials' => array(
			array( 'quote' => 'Nova stranica je moderna i privlačna, ali najvažnije je da radi svoj posao. Povećala je promet restoranu i pokazala da se ulaganje u dobar web isplati.', 'name' => 'Dominik', 'role' => 'CEO', 'company' => 'Daj Gric' ),
		),
		'trust_stats' => array(
			array( 'value' => '3', 'label' => 'objavljena projekta' ),
			array( 'value' => '4.9', 'label' => 'Google ocjena' ),
			array( 'value' => 'JASNO', 'label' => 'što web treba postići' ),
			array( 'value' => 'DIREKTNO', 'label' => 'do poziva ili upita' ),
		),
		'stack_items' => array(
			array( 'code' => 'G.01', 'title' => 'Google Business Profile', 'text' => 'Profil, kategorije, usluge, fotografije i put do recenzija — da vas lokalni upit stvarno nađe.' ),
			array( 'code' => 'G.02', 'title' => 'Analytics i Search Console', 'text' => 'Mjerenje prometa i tehnički uvid u pretragu. Bez magle, s pristupima na vama.' ),
			array( 'code' => 'G.03', 'title' => 'Tehnički SEO temelj', 'text' => 'Brzina, struktura, meta sloj i schema u okviru izrade stranice — ne kao prazno obećanje pozicija.' ),
			array( 'code' => 'S.01', 'title' => 'WooCommerce', 'text' => 'Katalog, košarica i narudžbe kada shop ima smisla i jasan opseg.' ),
			array( 'code' => 'S.02', 'title' => 'Corvus Pay', 'text' => 'Kartično plaćanje za hrvatske webshopove — povezivanje nakon što su proizvodi, dostava i pravila definirani.' ),
		),
		'faqs' => array(
			array( 'question' => 'Koliko traje izrada?', 'answer' => 'Ovisi o opsegu i brzini kojom imamo sadržaj i odluke. Predložak je najbrži smjer, dok izrada po nacrtu uključuje strukturu i vizualni smjer prije razvoja. Konkretan rok piše u ponudi.' ),
			array( 'question' => 'Što ako mi se dizajn ne svidi?', 'answer' => 'Kod predloška birate provjeren smjer prije početka. Kod izrade po nacrtu prvo potvrđujemo strukturu i vizualni smjer, uz unaprijed dogovoren broj korekcija prije razvoja.' ),
			array( 'question' => 'Tko radi moju stranicu?', 'answer' => 'Jedna osoba vodi vas kroz razgovor, strukturu, izradu i primopredaju. Nema prebacivanja između prodaje, dizajna i razvoja bez konteksta.' ),
			array( 'question' => 'Trebam li znati o tehnologiji?', 'answer' => 'Ne. Vi najbolje poznajete posao; mi vodimo tehnički dio. Na kraju dobijete pristupe i kratke upute za ono što stvarno trebate uređivati.' ),
			array( 'question' => 'Radite li marketing i Google oglase?', 'answer' => 'Web i oglašavanje nisu ista stvar. Postavljamo dobre tehničke i sadržajne temelje, a oglase nećemo predlagati ako za vaš posao nema jasnog razloga.' ),
			array( 'question' => 'Kako se plaća?', 'answer' => 'Standardno 50% za rezervaciju termina i početak rada, a 50% prije objave. Veće projekte možemo podijeliti u faze ako je to smislenije za opseg.' ),
			array( 'question' => 'Radite li webshop i kartično plaćanje?', 'answer' => 'Da, kada je opseg jasan: katalog, narudžbe, dostava, plaćanje i pravila poslovanja prvo se definiraju, a zatim dobivate ponudu. Ne prodajemo "shop u pola dana".' ),
			array( 'question' => 'Jesu li domena i hosting uključeni?', 'answer' => 'Ne uključujemo ih u cijenu izrade. Registriraju se na vas i plaćate ih direktno pružatelju, a mi odradimo tehničko postavljanje. Tako vlasništvo i trošak ostaju potpuno transparentni.' ),
			array( 'question' => 'Radite li samo lokalno ili za cijelu Hrvatsku?', 'answer' => 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske. Kada ima smisla, sastanemo se uživo; inače radimo kroz video-poziv i jasan pisani dogovor.' ),
			array( 'question' => 'Što točno radite oko Googlea?', 'answer' => 'Postavljamo ili uredimo Google Business Profile, tehničke SEO temelje, Analytics i Search Console u opsegu koji projektu stvarno treba. Ne obećavamo pozicije; postavljamo temelje i jasno kažemo što dalje ima smisla.' ),
		),
	);
}
