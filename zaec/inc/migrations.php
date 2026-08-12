<?php
/**
 * Small, safe content-model migrations between ZAEC theme revisions.
 *
 * Migrations only replace values that still exactly match a known previous
 * default. Client edits are never overwritten.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_migrate_theme_data() {
	$version  = (string) get_option( 'zaec_theme_data_version', '1.0.0' );
	$front_id = (int) get_option( 'page_on_front' );

	if ( $front_id && version_compare( $version, '1.1.0', '<' ) ) {
		$defaults  = zaec_front_defaults();
		$repeaters = zaec_front_repeater_defaults();
		$pricing   = get_post_meta( $front_id, '_zaec_pricing', true );

		// Old 1.0 pricing rows had no `track` key. Migrate only that known shape.
		if ( is_array( $pricing ) && ! empty( $pricing ) && ! array_key_exists( 'track', $pricing[0] ) ) {
			update_post_meta( $front_id, '_zaec_pricing', $repeaters['pricing'] );
		}
		if ( ! get_post_meta( $front_id, '_zaec_pricing_notes', true ) ) {
			update_post_meta( $front_id, '_zaec_pricing_notes', $repeaters['pricing_notes'] );
		}

		$known_old = array(
			'cijene_title'    => 'Cijena kao u građevini: dogovorena unaprijed.',
			'cijene_lead'     => 'Tri paketa i brza varijanta po predlošku — sve fiksne cijene. Ako nešto poskupi u tijeku posla, to je naš problem, ne vaš.',
			'band_kicker'     => 'Najbrža opcija',
			'band_title'      => 'Landing po predlošku.',
			'band_text'       => 'Odaberete jedan od 12 provjerenih predložaka, mi ugradimo vaš sadržaj, boje i logo — bez čekanja na nacrt. Cijena je poznata odmah i ne miče se.',
			'band_price'      => '240 €',
			'band_price_meta' => 'jednokratno',
			'band_cta'        => 'Zanima me predložak',
		);
		foreach ( $known_old as $key => $old_value ) {
			$current = get_post_meta( $front_id, '_zaec_' . $key, true );
			if ( '' === $current || $old_value === $current ) {
				update_post_meta( $front_id, '_zaec_' . $key, $defaults[ $key ] );
			}
		}
	}

	if ( $front_id && version_compare( $version, '1.2.0', '<' ) ) {
		$repeaters = zaec_front_repeater_defaults();
		$defaults  = zaec_front_defaults();

		$old_occupations = array(
			array( 'tab' => 'Klima', 'title' => 'Za klimatizaciju', 'sub' => 'Servis, ugradnja, čišćenje — vaš klijent traži baš vas.', 'q' => 'Najčešći Google upit: "klima servis + grad"' ),
			array( 'tab' => 'Voda', 'title' => 'Za vodoinstalatere', 'sub' => 'Popravci, adaptacije, hitne intervencije — 0-24.', 'q' => 'Najčešći Google upit: "vodoinstalater hitno"' ),
			array( 'tab' => 'Struja', 'title' => 'Za električare', 'sub' => 'Instalacije, popravci, atesti — posao ide njemu tko se vidi.', 'q' => 'Najčešći Google upit: "električar + grad"' ),
			array( 'tab' => 'Krov', 'title' => 'Za krovopokrivače i limare', 'sub' => 'Sanacije, nove izvedbe, rekonstrukcije — sezona traje kratko.', 'q' => 'Najčešći Google upit: "krovopokrivač Osijek"' ),
			array( 'tab' => 'Građevina', 'title' => 'Za građevinare', 'sub' => 'Novogradnja i adaptacije, od temelja do krova — posao ide onom tko izgleda ozbiljno.', 'q' => 'Najčešći Google upit: "građevinar + adaptacija"' ),
			array( 'tab' => 'Hotel', 'title' => 'Za hotele i smještaj', 'sub' => 'Sobe, termini, gosti — direktne rezervacije bez provizija bookinga.', 'q' => 'Najčešći Google upit: "apartmani + grad + booking"' ),
			array( 'tab' => 'Shop', 'title' => 'Za trgovine i webshopove', 'sub' => 'Prodaja online 0-24 — vaš dućan ne zatvara vrata.', 'q' => 'Najčešći Google upit: "kupiti + proizvod + dostava"' ),
			array( 'tab' => '+', 'title' => 'Za sve ostale', 'sub' => 'Odvjetnik, računovođa, terapeut, škola — svima treba dom online.', 'q' => 'Web stranica je vaša digitalna vizit-karta.' ),
		);
		$current_occupations = get_post_meta( $front_id, '_zaec_occupations', true );
		if ( is_array( $current_occupations ) && $old_occupations === $current_occupations ) {
			update_post_meta( $front_id, '_zaec_occupations', $repeaters['occupations'] );
		}

		$old_process = array(
			array( 'code' => 'K.01', 'title' => 'Razgovor', 'text' => 'Poziv od 20 minuta. Saslušamo, posavjetujemo — i pošteno kažemo što vam se isplati: predložak ili izrada po mjeri.', 'meta' => '20 min · besplatno' ),
			array( 'code' => 'K.02', 'title' => 'Smjer i opseg', 'text' => 'Kod predloška biramo postojeći smjer. Kod izrade po mjeri prvo crtamo nacrt. U oba slučaja opseg potvrđujemo prije razvoja.', 'meta' => 'predložak ili nacrt · opseg potvrđen' ),
			array( 'code' => 'K.03', 'title' => 'Izgradnja', 'text' => 'WordPress, responsive izvedba i testiranje prema odobrenom opsegu.', 'meta' => 'rok prema opsegu · bez otvorenog scopea' ),
			array( 'code' => 'K.04', 'title' => 'Objava i primopredaja', 'text' => 'Objava, pristupi i kratka primopredaja. Nakon toga slijedi tehničko jamstvo za isporučeni rad.', 'meta' => '14 dana tehničkog jamstva' ),
		);
		$current_process = get_post_meta( $front_id, '_zaec_process_steps', true );
		if ( is_array( $current_process ) && $old_process === $current_process ) {
			update_post_meta( $front_id, '_zaec_process_steps', $repeaters['process_steps'] );
		}

		$old_screen_points = array(
			array( 'code' => '5.1', 'title' => 'Dizajnirano za palac', 'text' => 'Svaki gumb, svaka slika i svaki redak prvo stane na mali ekran — bez štipanja i zumiranja.' ),
			array( 'code' => '5.2', 'title' => 'Poziv u jednom dodirom', 'text' => 'Vaš broj prikovan za dno ekrana — klijent ne traži, nego zove.' ),
			array( 'code' => '5.3', 'title' => 'Brže od kave', 'text' => 'Cilj je učitavanje ispod 2 sekunde i na slabijem signalu. Google to nagradi, klijent ostane.' ),
		);
		$current_screen_points = get_post_meta( $front_id, '_zaec_screen_points', true );
		if ( is_array( $current_screen_points ) && $old_screen_points === $current_screen_points ) {
			update_post_meta( $front_id, '_zaec_screen_points', $repeaters['screen_points'] );
		}

		$old_screen_lead = 'Više od polovice upita dolazi s mobitela — iz kombija, s gradilišta, s kauča. Zato svaku stranicu prvo gradimo za mali ekran, pa tek onda za veliki stolni.';
		$current_screen_lead = get_post_meta( $front_id, '_zaec_ekran_lead', true );
		if ( $old_screen_lead === $current_screen_lead ) {
			update_post_meta( $front_id, '_zaec_ekran_lead', $defaults['ekran_lead'] );
		}

		$old_testimonials = array(
			array( 'quote' => 'Tražio sam nešto kao za velike firme, ali normalne cijene. Dobio točno to. Troje ljudi mi se javilo već prvi tjedan.', 'name' => 'Marko Kovač', 'role' => 'Klimatizacija', 'company' => 'Zagreb' ),
			array( 'quote' => 'Poslao sam slike s mobitela i za tjedan dana imao stranicu. Da je ovako lako, napravio bih prije pet godina.', 'name' => 'Ivan Perić', 'role' => 'Vodoinstalacije', 'company' => 'Split' ),
			array( 'quote' => 'Najviše mi znači što mi je sve objašnjeno ljudski, bez stranih riječi. Gosti sad rezerviraju direktno — bez provizija.', 'name' => 'Petra Babić', 'role' => 'Pansion', 'company' => 'Zadar' ),
			array( 'quote' => 'Konkurencija me nedavno pitala tko mi radi web. Nisam rekao.', 'name' => 'Josip Horvat', 'role' => 'Krovopokrivač', 'company' => 'Osijek' ),
		);
		$current_testimonials = get_post_meta( $front_id, '_zaec_testimonials', true );
		if ( is_array( $current_testimonials ) && $old_testimonials === $current_testimonials ) {
			delete_post_meta( $front_id, '_zaec_testimonials' );
		}
	}

	if ( version_compare( $version, '1.2.0', '<' ) ) {
		update_option( 'zaec_theme_data_version', '1.2.0', false );
	}

	// v1.3 — kontakt, pravni podaci, FAQ omekšavanje samo ako još stoji stari default.
	if ( version_compare( $version, '1.3.0', '<' ) ) {
		$opts = get_option( 'zaec_options', array() );
		if ( ! is_array( $opts ) ) {
			$opts = array();
		}
		$opt_defaults = zaec_options_defaults();
		// Demo telefon → produkcijski samo ako je ostao factory demo.
		if ( empty( $opts['phone_display'] ) || '099 123 4567' === $opts['phone_display'] ) {
			$opts['phone_display'] = $opt_defaults['phone_display'];
			$opts['phone_raw']     = $opt_defaults['phone_raw'];
		}
		if ( empty( $opts['form_recipient'] ) || get_option( 'admin_email' ) === $opts['form_recipient'] ) {
			$opts['form_recipient'] = $opt_defaults['form_recipient'];
		}
		// Makni javni demo email ako je ostao.
		if ( isset( $opts['email'] ) && in_array( $opts['email'], array( 'info@zaec.hr', '' ), true ) ) {
			$opts['email'] = '';
			$opts['show_public_email'] = '0';
		}
		foreach ( array( 'mb', 'owner_name', 'postal_code', 'nkd', 'address', 'legal_name' ) as $k ) {
			if ( empty( $opts[ $k ] ) && ! empty( $opt_defaults[ $k ] ) ) {
				$opts[ $k ] = $opt_defaults[ $k ];
			}
		}
		if ( empty( $opts['show_public_email'] ) ) {
			$opts['show_public_email'] = '0';
		}
		update_option( 'zaec_options', $opts, false );

		if ( $front_id ) {
			$old_city_faq_q = 'Zašto ste iz Osijeka a radite za cijelu Hrvatsku?';
			$faqs = get_post_meta( $front_id, '_zaec_faqs', true );
			if ( is_array( $faqs ) ) {
				$changed = false;
				foreach ( $faqs as $i => $faq ) {
					if ( isset( $faq['question'] ) && $old_city_faq_q === $faq['question'] ) {
						$faqs[ $i ] = array(
							'question' => 'Radite li samo lokalno ili za cijelu Hrvatsku?',
							'answer'   => 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom. Radili smo s obrtnicima i s većim tvrtkama, uključujući suradnje na daljinu s klijentima izvan Hrvatske kad opseg to traži.',
						);
						$changed = true;
					}
				}
				if ( $changed ) {
					update_post_meta( $front_id, '_zaec_faqs', $faqs );
				}
			}
		}

		update_option( 'zaec_theme_data_version', '1.3.0', false );
	}

	if ( version_compare( $version, '1.3.1', '<' ) ) {
		if ( $front_id ) {
			$old_plus = array(
				'tab'   => '+',
				'title' => 'Za druge uslužne djelatnosti',
				'sub'   => 'Ako kupci prije odluke stalno postavljaju ista pitanja, web ih može odgovoriti prije prvog poziva.',
				'q'     => 'Na webu: struktura prema vašem načinu prodaje — bez generičkog paketa',
			);
			$occ = get_post_meta( $front_id, '_zaec_occupations', true );
			if ( is_array( $occ ) ) {
				foreach ( $occ as $i => $row ) {
					if ( is_array( $row ) && isset( $row['title'], $row['sub'] ) && $row['title'] === $old_plus['title'] && $row['sub'] === $old_plus['sub'] ) {
						$occ[ $i ] = array(
							'tab'   => '+',
							'title' => 'Za ostale usluge i struke',
							'sub'   => 'Odvjetnik, računovođa, ordinacija, studio, škola… Ako klijenti prije odluke uvijek pitaju isto, stranica može dati jasan odgovor i uputiti na poziv ili upit.',
							'q'     => 'Na webu: usluge · cijene/okvir · FAQ · jasan CTA — bez generičkog paketa',
						);
					}
				}
				update_post_meta( $front_id, '_zaec_occupations', $occ );
			}
		}
		update_option( 'zaec_theme_data_version', '1.3.1', false );
	}

	if ( version_compare( $version, '1.3.4', '<' ) ) {
		if ( $front_id ) {
			$stats = get_post_meta( $front_id, '_zaec_hero_stats', true );
			$old_two = array(
				array( 'count' => '2', 'suffix' => '', 'label' => 'načina izrade' ),
				array( 'count' => '1', 'suffix' => '', 'label' => 'cijena prije koda' ),
			);
			if ( is_array( $stats ) && $stats === $old_two ) {
				update_post_meta( $front_id, '_zaec_hero_stats', zaec_front_repeater_defaults()['hero_stats'] );
			}
			$lead = get_post_meta( $front_id, '_zaec_hero_lead', true );
			$old_leads = array(
				'WordPress i landing pageovi — po predlošku ili po nacrtu. Za obrte i tvrtke diljem Hrvatske. Opseg i cijena prije početka.',
				'WordPress stranice, landingi i Google prisutnost — po predlošku ili po nacrtu. Radimo s obrtima i tvrtkama u Hrvatskoj, a po potrebi i na daljinu s klijentima izvan nje. Opseg i cijenu dogovorimo prije početka.',
			);
			if ( in_array( $lead, $old_leads, true ) ) {
				update_post_meta( $front_id, '_zaec_hero_lead', zaec_front_defaults()['hero_lead'] );
			}
		}
		update_option( 'zaec_theme_data_version', '1.3.4', false );
	}

	if ( version_compare( $version, '1.3.5', '<' ) ) {
		if ( $front_id ) {
			// Hero stats uklonjeni s UI-ja — obriši meta da se ne vraćaju.
			delete_post_meta( $front_id, '_zaec_hero_stats' );
			$lead = get_post_meta( $front_id, '_zaec_hero_lead', true );
			if ( is_string( $lead ) && false !== strpos( $lead, '10+ godina na webu, 8 na WordPressu' ) ) {
				update_post_meta( $front_id, '_zaec_hero_lead', zaec_front_defaults()['hero_lead'] );
			}
		}
		update_option( 'zaec_theme_data_version', '1.3.5', false );
	}

	/*
	 * v1.4.4 — poslovni copy, kontaktni put i pošteni proof sloj.
	 *
	 * Postojeće ručne izmjene ostaju netaknute. Zamjenjujemo samo vrijednosti
	 * koje se još uvijek točno podudaraju s poznatim starim defaultima.
	 */
	if ( version_compare( $version, '1.4.4', '<' ) ) {
		if ( $front_id ) {
			$defaults  = zaec_front_defaults();
			$repeaters = zaec_front_repeater_defaults();

			$old_scalars = array(
				'hero_title'          => 'Gradimo web stranice za ljude koji grade sve ostalo.',
				'hero_lead'           => 'WordPress i landing pageovi — po predlošku ili po nacrtu. Opseg i cijena prije početka. Jedna odgovorna osoba, 10+ godina na webu.',
				'hero_secondary_text' => 'Za koga radimo',
				'hero_secondary_url'  => '#za-koga',
				'hero_note'           => 'Poziv ne košta ništa · bez obaveze.',
				'services_title'      => 'Web koji razumije vaš zanat.',
				'services_lead'       => 'Od majstora do uređenog tima — klijent vas prvo traži online. Mi složimo stranicu tako da vas pronađe, razumije i javi se.',
				'services_note'       => 'U izradu: brzina, struktura, Google Business Profile i Analytics. Shop i Corvus Pay — poseban opseg kad treba.',
				'poznato_title'       => 'Zvuči poznato?',
				'poznato_bridge'      => 'Prepoznajete se? Dalje: nacrt → opseg → cijena → izrada.',
				'metoda_title'        => 'Svaka stranica kreće od nacrta.',
				'metoda_lead'         => 'Prije koda dolazi nacrt: što kupac traži, što ga uvjerava i gdje klikne.',
				'proces_title'        => 'Četiri koraka do objave.',
				'proces_lead'         => 'Bez žargona. Predložak: cijena unaprijed. Po nacrtu: fiksna ponuda uz nacrt, prije razvoja.',
				'ekran_title'         => 'Prvo mobitel. Onda sve ostalo.',
				'ekran_lead'          => 'Upiti dolaze s malog ekrana. Zato prvo rješavamo poziv, upit i čitljivost na mobitelu — desktop dolazi poslije.',
				'cijene_title'        => 'Predložak ili nacrt. Prvo biramo razinu izrade.',
				'cijene_lead'         => 'Predložak je brži i jeftiniji. Po nacrtu je skuplje jer se struktura i dizajn crtaju po mjeri. Domena i hosting nisu u cijeni izrade.',
				'band_text'           => 'WooCommerce shop, Corvus Pay, rezervacije, višejezičnost i nestandardne integracije ne guramo u paket na silu. Prvo funkcije i opseg, zatim cijena prije razvoja.',
				'radovi_title'        => 'Radovi koji govore umjesto nas.',
				'radovi_lead'         => 'Samo stvarni projekti. Bez izmišljenih klijenata i lažnih rezultata.',
				'klijenti_kicker'     => '[ 08 — Klijenti ]',
				'upit_title'          => 'Recite nam čime se bavite. Mi crtamo ostalo.',
				'upit_lead'           => 'Kratko opišite posao. Potvrdimo smjer, opseg i cijenu — prije razvoja.',
				'call_kicker'         => '[ Radije razgovor? ]',
				'call_note'           => 'Poziv ne košta ništa. Na kraju znate smjer — i možete stati.',
				'stack_title'         => 'Google, WordPress shop i kartično plaćanje — kad projektu trebaju.',
				'stack_lead'          => 'Ne skupljamo logotipe radi dojma. Navedeno je ono što stvarno ugrađujemo u projekte: vidljivost na Googleu, webshop na WordPressu i plaćanje prilagođeno hrvatskom tržištu.',
			);
			foreach ( $old_scalars as $key => $old_value ) {
				$current = get_post_meta( $front_id, '_zaec_' . $key, true );
				if ( $old_value === $current && isset( $defaults[ $key ] ) ) {
					update_post_meta( $front_id, '_zaec_' . $key, $defaults[ $key ] );
				}
			}

			$old_services = array(
				array( 'number' => '01', 'title' => 'WordPress web stranice', 'text' => 'Osnova. Brz sustav, uređiv, siguran.', 'layer' => '1' ),
				array( 'number' => '02', 'title' => 'Dizajn i UX', 'text' => 'Prve tri sekunde odlučuju hoće li ostati.', 'layer' => '2' ),
				array( 'number' => '03', 'title' => 'Lokalni SEO', 'text' => 'Da vas nađu kad upišu "majstor + vaš grad".', 'layer' => '4' ),
				array( 'number' => '04', 'title' => 'Landing pageovi', 'text' => 'Jedna ponuda, jedan cilj, jedan gumb.', 'layer' => '5' ),
				array( 'number' => '05', 'title' => 'Google integracije', 'text' => 'Business profil, mapa, recenzije, analitika.', 'layer' => '3' ),
				array( 'number' => '06', 'title' => 'Hosting i održavanje', 'text' => 'Server koji radi. Backup koji čuva. Vi mirni.', 'layer' => '0' ),
			);
			$old_pain_points = array(
				array( 'code' => 'F.01', 'title' => 'Google vas ne nalazi.', 'text' => 'Klijenti prvo traže online. Ako vas nema na prvoj stranici, posao ide nekome tko jest — čak i ako radi lošije od vas.' ),
				array( 'code' => 'F.02', 'title' => 'Facebook nije stranica.', 'text' => 'Profil je posjetnica, ne dućan. Nema ponude, referenci ni upita koji sami dolaze — a algoritam mijenja pravila kad njemu paše.' ),
				array( 'code' => 'F.03', 'title' => 'Preporuka dolazi u valovima.', 'text' => 'Jedan mjesec odbijate poslove, drugi gledate u prazan kalendar. Web radi 0–24, i kad vi spavate, i kad je Božić.' ),
				array( 'code' => 'F.04', 'title' => 'Oprezni ste — s razlogom.', 'text' => 'Možda ste već platili web koji nikad nije zaživio. Razumije se. Zato kod nas cijenu, rok i opseg dobivate na papir prije početka — i slobodno možete reći ne.' ),
			);
			$old_method_points = array(
				array( 'code' => '3.1', 'title' => 'Struktura prije dizajna', 'text' => 'Sitemap i poruka prvo, ukrasi poslije.' ),
				array( 'code' => '3.2', 'title' => 'Sadržaj koji prodaje', 'text' => 'Tekstovi jezikom vaših klijenata.' ),
				array( 'code' => '3.3', 'title' => 'Mjerljivi rezultati', 'text' => 'Svaki gumb i svaka forma se mjere.' ),
			);
			$old_screen_points = array(
				array( 'code' => '5.1', 'title' => 'Dizajnirano za palac', 'text' => 'Svaki gumb, svaka slika i svaki redak prvo stane na mali ekran — bez štipanja i zumiranja.' ),
				array( 'code' => '5.2', 'title' => 'Poziv u jednom dodirom', 'text' => 'Vaš broj prikovan za dno ekrana — klijent ne traži, nego zove.' ),
				array( 'code' => '5.3', 'title' => 'Bez čekanja', 'text' => 'Slike, fontove i skripte optimiziramo tako da stranica ostane brza i na slabijoj vezi — bez nepotrebnog tereta.' ),
			);
			$old_trust_stats = array(
				array( 'value' => '2', 'label' => 'načina izrade' ),
				array( 'value' => '1', 'label' => 'odgovorna osoba' ),
				array( 'value' => '14 d', 'label' => 'tehničkog jamstva' ),
				array( 'value' => '0 €', 'label' => 'obaveznih mjesečnih paketa' ),
			);
			$old_repeaters = array(
				'services'      => $old_services,
				'pain_points'   => $old_pain_points,
				'method_points' => $old_method_points,
				'screen_points' => $old_screen_points,
				'trust_stats'   => $old_trust_stats,
			);
			foreach ( $old_repeaters as $key => $old_rows ) {
				$current_rows = get_post_meta( $front_id, '_zaec_' . $key, true );
				if ( is_array( $current_rows ) && $old_rows === $current_rows ) {
					update_post_meta( $front_id, '_zaec_' . $key, $repeaters[ $key ] );
				}
			}

			// Ažuriraj samo staru stavku cijene; dodatne ručne stavke ostaju netaknute.
			$pricing = get_post_meta( $front_id, '_zaec_pricing', true );
			if ( is_array( $pricing ) ) {
				$old_feature = 'WordPress CMS, responsive izvedba i tehnički SEO';
				foreach ( $pricing as $index => $plan ) {
					if ( isset( $plan['features'] ) && false !== strpos( $plan['features'], $old_feature ) ) {
						$pricing[ $index ]['features'] = str_replace( $old_feature, 'Sustav za uređivanje sadržaja, responsive izvedba i tehnički SEO', $plan['features'] );
					}
				}
				update_post_meta( $front_id, '_zaec_pricing', $pricing );
			}

			// FAQ migrira samo redove koji su još uvijek potpuno jednaki starom defaultu.
			$legacy_faqs = array(
				'Tko radi moju stranicu?' => 'Vi imate jednu odgovornu osobu — ne lanac podizvođača. Iza ZAEC-a stoji 10+ godina rada na webu i 8 godina fokusa na WordPress, uz UX, sadržaj i Google integracije.',
				'Radite li marketing i Google oglase?' => 'Ne prodajemo marketinške pakete. Ali sve je podešeno da vas Google rado pokazuje organski. Ako plaćeni oglas ima smisla za vaš posao, reći ćemo i pomoći ga postaviti — bez skrivanja iza pretplata.',
				'Radite li webshop i kartično plaćanje?' => 'Da, kad je opseg jasan: WooCommerce na WordPressu i kartično plaćanje preko Corvus Paya za hrvatsko tržište. To ide kao poseban opseg — prvo funkcije i pravila, zatim cijena, nikad "shop u pola dana".',
				'Što točno radite oko Googlea?' => 'U sklopu izrade postavljamo ili uredimo Google Business Profile, tehnički SEO temelje, Analytics i Search Console. Ne prodajemo vođenje oglasnih kampanja kao mjesečni paket — ako jednokratna pomoć oko oglasa ima smisla, kažemo to odvojeno.',
			);
			$faqs = get_post_meta( $front_id, '_zaec_faqs', true );
			if ( is_array( $faqs ) ) {
				foreach ( $faqs as $index => $faq ) {
					$question = isset( $faq['question'] ) ? $faq['question'] : '';
					$answer   = isset( $faq['answer'] ) ? $faq['answer'] : '';
					if ( isset( $legacy_faqs[ $question ] ) && $legacy_faqs[ $question ] === $answer ) {
						foreach ( $repeaters['faqs'] as $new_faq ) {
							if ( isset( $new_faq['question'] ) && $new_faq['question'] === $question ) {
								$faqs[ $index ] = $new_faq;
								break;
							}
						}
					}
				}
				update_post_meta( $front_id, '_zaec_faqs', $faqs );
			}
		}

		update_option( 'zaec_theme_data_version', '1.4.4', false );
	}


	/* v1.5.0 — povratak jasnijem, autentičnijem prodajnom copyju. */
	if ( version_compare( $version, '1.5.0', '<' ) ) {
		if ( $front_id ) {
			$defaults  = zaec_front_defaults();
			$repeaters = zaec_front_repeater_defaults();

			$old_scalars = array(
				'hero_kicker'          => '[ Web studio · Osijek ]',
				'hero_title'           => 'Web koji vaš posao objašnjava — i otvara put do kontakta.',
				'hero_lead'            => 'Dobra web stranica nije ukras. Objasni što nudite, pokaže zašto vam vjerovati i vodi posjetitelja do poziva ili upita. Po predlošku ili po nacrtu — opseg i cijena prije početka.',
				'hero_secondary_text'  => 'Kako web radi',
				'hero_secondary_url'   => '#metoda',
				'hero_note'            => 'Bez pritiska · prvo razumijemo posao, zatim predlažemo smjer.',
				'services_title'       => 'Web koji razumije vaš posao.',
				'services_lead'        => 'Web nije online letak. Njegov posao je da u nekoliko sekundi objasni što nudite, kome pomažete, gdje radite i kako vam se osoba može javiti.',
				'services_note'        => 'Struktura, sadržaj i poziv na akciju slažu se prema vašem poslu — ne prema generičkom paketu.',
				'poznato_title'        => 'Kada web ne služi samo sebi.',
				'poznato_bridge'       => 'Web prvo smanjuje nedoumicu, zatim pokazuje razlog za povjerenje i završava jasnim pozivom ili upitom.',
				'metoda_title'         => 'Prije koda, razlog zbog kojeg će vas netko kontaktirati.',
				'metoda_lead'          => 'Prije dizajna razumijemo što prodajete, što klijent mora znati i koji je sljedeći korak: poziv, upit, rezervacija ili kupnja.',
				'proces_title'         => 'Od stvarnog problema do objave.',
				'proces_lead'          => 'Ne gradimo stranice da samo izgledaju dobro. Dogovorimo što trebaju objasniti, kamo trebaju voditi i kako provjeravamo da to radi.',
				'ekran_title'          => 'Prvo mobitel. Onda jasan put do kontakta.',
				'ekran_lead'           => 'Na malom ekranu nema prostora za lutanje. Posjetitelj mora odmah razumjeti što radite, vidjeti zašto vam može vjerovati i u jednom dodiru nazvati ili poslati upit.',
				'cijene_title'         => 'Biramo način izrade prema poslu, ne prema trendu.',
				'cijene_lead'          => 'Predložak je brži kada je standardni smjer dovoljan. Po nacrtu prvo rješavamo strukturu i UX za konkretan posao. U oba slučaja opseg i cijena su jasni prije rada.',
				'radovi_kicker'        => '[ 07 — Dokazi ]',
				'radovi_title'         => 'Radovi koji pokazuju kako razmišljamo.',
				'radovi_lead'          => 'Ne pokazujemo ukrasne makete kao rezultate. Objavljujemo stvarne projekte, njihov opseg i samo potvrđene ishode.',
				'klijenti_kicker'      => '[ 08 — Povjerenje ]',
				'klijenti_title'       => 'Riječ majstora.',
				'upit_title'           => 'Recite nam što vaš web treba postići.',
				'upit_lead'            => 'Vi najbolje znate svoj posao. Mi pomažemo prevesti ga u jasnu ponudu, dokaz i put do poziva ili upita.',
				'call_kicker'          => '[ Razgovor bez pritiska ]',
				'call_note'            => 'Ne trebate pripremiti tehnički jezik. Dovoljno je reći što nudite, kome se obraćate i gdje danas zapinje.',
			);
			foreach ( $old_scalars as $key => $old_value ) {
				$current = get_post_meta( $front_id, '_zaec_' . $key, true );
				if ( $old_value === $current && isset( $defaults[ $key ] ) ) {
					update_post_meta( $front_id, '_zaec_' . $key, $defaults[ $key ] );
				}
			}

			$old_repeaters = array(
				'services' => array(
					array( 'number' => '01', 'title' => 'Poslovne web stranice', 'text' => 'Jasna ponuda, dokaz i put do kontakta.', 'layer' => '1' ),
					array( 'number' => '02', 'title' => 'Struktura i UX', 'text' => 'Prvo rješavamo što posjetitelj treba znati i napraviti.', 'layer' => '2' ),
					array( 'number' => '03', 'title' => 'Lokalna vidljivost', 'text' => 'Temelji koji pomažu da vas pravi ljudi pronađu.', 'layer' => '4' ),
					array( 'number' => '04', 'title' => 'Landing stranice', 'text' => 'Jedna ponuda, jedan cilj i jasan sljedeći korak.', 'layer' => '5' ),
					array( 'number' => '05', 'title' => 'Mjerenje i povezivanje', 'text' => 'Kontakt, analitika i alati koji imaju razlog.', 'layer' => '3' ),
					array( 'number' => '06', 'title' => 'Postavljanje i primopredaja', 'text' => 'Sustav koji možete koristiti i nakon objave.', 'layer' => '0' ),
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
				'screen_points' => array(
					array( 'code' => '5.1', 'title' => 'Odgovor u prvim sekundama', 'text' => 'Posjetitelj odmah vidi što nudite, kome pomažete i zašto vam se može javiti.' ),
					array( 'code' => '5.2', 'title' => 'Kontakt bez traženja', 'text' => 'Poziv i upit ostaju dostupni tamo gdje ih osoba očekuje — bez kopanja po stranici.' ),
					array( 'code' => '5.3', 'title' => 'Sadržaj koji vodi', 'text' => 'Usluge, dokaz, često pitanje i sljedeći korak slažu se u razumljiv put do razgovora.' ),
				),
				'trust_stats' => array(
					array( 'value' => '4.9', 'label' => 'Google ocjena' ),
					array( 'value' => 'JASNO', 'label' => 'što web treba postići' ),
					array( 'value' => 'DIREKTNO', 'label' => 'do poziva ili upita' ),
					array( 'value' => 'STVARNO', 'label' => 'radovi i izjave' ),
				),
			);
			foreach ( $old_repeaters as $key => $old_rows ) {
				$current_rows = get_post_meta( $front_id, '_zaec_' . $key, true );
				if ( is_array( $current_rows ) && $old_rows === $current_rows ) {
					update_post_meta( $front_id, '_zaec_' . $key, $repeaters[ $key ] );
				}
			}

			$old_faq_answers = array(
				'Koliko traje izrada?' => 'Predložak je najbrža opcija, a izrada po nacrtu traži više vremena jer prvo potvrđujemo strukturu i dizajn. Konkretan rok ulazi u ponudu prije početka rada.',
				'Što ako mi se dizajn ne svidi?' => 'Kod predloška birate postojeći smjer i prilagođavamo ga vašem brandu. Kod izrade po nacrtu prvo potvrđujemo nacrt i vizualni smjer, uz dogovoreni broj korekcija prije razvoja.',
				'Tko radi moju stranicu?' => 'Vi imate jednu odgovornu osobu — ne lanac podizvođača. Iza ZAEC-a stoji više od deset godina rada na webu, uz UX, sadržaj i Google integracije.',
				'Trebam li znati o tehnologiji?' => 'Ne. Mi vodimo tehnički dio, a pri primopredaji dobijete pristupe i kratke upute za ono što stvarno trebate uređivati.',
				'Radite li marketing i Google oglase?' => 'Ne prodajemo marketinške pakete niti obećavamo pozicije. Postavljamo tehničke i sadržajne temelje, a ako plaćeni oglas ima smisla za vaš posao, reći ćemo to otvoreno i odvojeno.',
				'Radite li webshop i kartično plaćanje?' => 'Da, kada je opseg jasan: WooCommerce i kartično plaćanje preko Corvus Paya za hrvatsko tržište. To ide kao poseban opseg — prvo funkcije i pravila, zatim cijena, nikad "shop u pola dana".',
				'Radite li samo lokalno ili za cijelu Hrvatsku?' => 'Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom. Radili smo s obrtnicima i s većim tvrtkama, uključujući suradnje na daljinu s klijentima izvan Hrvatske kad opseg to traži.',
				'Što točno radite oko Googlea?' => 'U sklopu izrade postavljamo ili uredimo Google Business Profile, tehničke SEO temelje, Analytics i Search Console. Ne prodajemo vođenje oglasnih kampanja kao mjesečni paket — ako jednokratna pomoć oko oglasa ima smisla, kažemo to odvojeno.',
			);
			$faqs = get_post_meta( $front_id, '_zaec_faqs', true );
			if ( is_array( $faqs ) ) {
				foreach ( $faqs as $index => $faq ) {
					$question = isset( $faq['question'] ) ? $faq['question'] : '';
					$answer   = isset( $faq['answer'] ) ? $faq['answer'] : '';
					if ( isset( $old_faq_answers[ $question ] ) && $old_faq_answers[ $question ] === $answer ) {
						foreach ( $repeaters['faqs'] as $new_faq ) {
							if ( isset( $new_faq['question'] ) && $new_faq['question'] === $question ) {
								$faqs[ $index ] = $new_faq;
								break;
							}
						}
					}
				}
				update_post_meta( $front_id, '_zaec_faqs', $faqs );
			}
		}

		update_option( 'zaec_theme_data_version', '1.5.0', false );
	}


	/* v1.6.0 — projekti, mobile prikaz i dugoročni odnos s klijentom. */
	if ( version_compare( $version, '1.6.0', '<' ) ) {
		if ( $front_id ) {
			$repeaters = zaec_front_repeater_defaults();

			$faqs = get_post_meta( $front_id, '_zaec_faqs', true );
			if ( is_array( $faqs ) ) {
				$has_long_term = false;
				foreach ( $faqs as $faq ) {
					if ( isset( $faq['question'] ) && 'Možemo li dugoročno surađivati?' === $faq['question'] ) {
						$has_long_term = true;
						break;
					}
				}
				if ( ! $has_long_term ) {
					foreach ( $repeaters['faqs'] as $faq ) {
						if ( isset( $faq['question'] ) && 'Možemo li dugoročno surađivati?' === $faq['question'] ) {
							$faqs[] = $faq;
							break;
						}
					}
					update_post_meta( $front_id, '_zaec_faqs', $faqs );
				}
			}

			$quotes = get_post_meta( $front_id, '_zaec_testimonials', true );
			$old_quote = 'Nova stranica je moderna i privlačna, ali najvažnije je da radi svoj posao. Povećala je promet restoranu i pokazala da se ulaganje u dobar web isplati.';
			if ( is_array( $quotes ) ) {
				foreach ( $quotes as $index => $quote ) {
					if ( isset( $quote['quote'] ) && $old_quote === $quote['quote'] && isset( $repeaters['testimonials'][0] ) ) {
						$quotes[ $index ]['quote'] = $repeaters['testimonials'][0]['quote'];
						update_post_meta( $front_id, '_zaec_testimonials', $quotes );
						break;
					}
				}
			}

			$pricing = get_post_meta( $front_id, '_zaec_pricing', true );
			if ( is_array( $pricing ) ) {
				foreach ( $pricing as $index => $plan ) {
					if ( ! isset( $plan['features'] ) ) {
						continue;
					}
					$pricing[ $index ]['features'] = str_replace(
						array( 'Provjeren ZAEC layout prilagođen vašem brandu', 'Custom dizajn sustav u ZAEC kvaliteti izvedbe' ),
						array( 'Provjeren layout prilagođen vašem brandu', 'Dosljedan dizajn sustav prilagođen vašem poslu' ),
						$plan['features']
					);
				}
				update_post_meta( $front_id, '_zaec_pricing', $pricing );
			}
		}

		update_option( 'zaec_theme_data_version', '1.6.0', false );
	}


	/* v1.7.1 — truth audit: uklanjanje nepotvrđene Google ocjene iz trust trake. */
	if ( version_compare( $version, '1.7.1', '<' ) ) {
		if ( $front_id ) {
			$repeaters = zaec_front_repeater_defaults();
			$trust     = get_post_meta( $front_id, '_zaec_trust_stats', true );
			$old_trust = array(
				array( 'value' => '3', 'label' => 'objavljena projekta' ),
				array( 'value' => '4.9', 'label' => 'Google ocjena' ),
				array( 'value' => 'JASNO', 'label' => 'što web treba postići' ),
				array( 'value' => 'DIREKTNO', 'label' => 'do poziva ili upita' ),
			);
			if ( is_array( $trust ) && $old_trust === $trust ) {
				update_post_meta( $front_id, '_zaec_trust_stats', $repeaters['trust_stats'] );
			}

			$old_hero_lead = 'Web treba napraviti više od dobrog prvog dojma: u nekoliko sekundi objasniti što radite, pokazati zašto vam vjerovati i dovesti čovjeka do poziva, upita ili rezervacije. Po predlošku ili po nacrtu — opseg i cijena prije početka.';
			if ( $old_hero_lead === get_post_meta( $front_id, '_zaec_hero_lead', true ) ) {
				update_post_meta( $front_id, '_zaec_hero_lead', zaec_front_defaults()['hero_lead'] );
			}
		}
		update_option( 'zaec_theme_data_version', '1.7.1', false );
	}


	/* v1.8.0 — truth-first copy i opcionalno održavanje. */
	if ( version_compare( $version, '1.8.0', '<' ) ) {
		if ( $front_id ) {
			$defaults  = zaec_front_defaults();
			$repeaters = zaec_front_repeater_defaults();

			$old_scalars = array(
				'hero_lead'     => 'Web treba napraviti više od dobrog prvog dojma: jasno objasniti što radite, pokazati zašto vam vjerovati i dovesti čovjeka do poziva, upita ili rezervacije. Po predlošku ili po nacrtu — opseg i cijena prije početka.',
				'services_note' => 'U izradu ulaze brzina, jasna struktura, Google Business Profile i mjerenje. Shop i integracije — samo kada vašem poslu stvarno trebaju.',
				'metoda_title'  => 'Prije koda, razlog zbog kojeg će vas netko kontaktirati.',
				'metoda_lead'   => 'Ne počinjemo od boje gumba. Počinjemo od vašeg posla, pitanja klijenta i odluke koju treba donijeti.',
				'radovi_title'  => 'Radovi iz stvarnog svijeta.',
				'radovi_lead'   => 'Tri različita posla, tri različita razloga za dobar web. Ne pokazujemo makete — pokazujemo ono što je stvarno online.',
			);
			foreach ( $old_scalars as $key => $old_value ) {
				if ( $old_value === get_post_meta( $front_id, '_zaec_' . $key, true ) ) {
					update_post_meta( $front_id, '_zaec_' . $key, $defaults[ $key ] );
				}
			}

			$trust = get_post_meta( $front_id, '_zaec_trust_stats', true );
			$old_trust = array(
				array( 'value' => '3', 'label' => 'objavljena projekta' ),
				array( 'value' => '4.9', 'label' => 'Google ocjena' ),
				array( 'value' => 'JASNO', 'label' => 'što web treba postići' ),
				array( 'value' => 'DIREKTNO', 'label' => 'do poziva ili upita' ),
			);
			if ( is_array( $trust ) && $old_trust === $trust ) {
				update_post_meta( $front_id, '_zaec_trust_stats', $repeaters['trust_stats'] );
			}

			$method_points = get_post_meta( $front_id, '_zaec_method_points', true );
			if ( is_array( $method_points ) ) {
				foreach ( $method_points as $index => $point ) {
					if ( isset( $point['code'], $point['title'] ) && '3.3' === $point['code'] && 'Dokaz koji ima težinu' === $point['title'] ) {
						$method_points[ $index ] = $repeaters['method_points'][2];
					}
				}
				update_post_meta( $front_id, '_zaec_method_points', $method_points );
			}

			$process = get_post_meta( $front_id, '_zaec_process_steps', true );
			if ( is_array( $process ) ) {
				foreach ( $process as $index => $step ) {
					if ( isset( $step['code'], $step['text'] ) && 'K.02' === $step['code'] && in_array( $step['text'], array( 'Kod predloška biramo postojeći smjer. Kod izrade po mjeri prvo potvrđujemo vlastitu strukturu. U oba slučaja opseg je jasan prije razvoja.', 'Kod predloška biramo postojeći smjer. Kod izrade po mjeri prvo crtamo nacrt. U oba slučaja opseg potvrđujemo prije razvoja.' ), true ) ) {
						$process[ $index ] = $repeaters['process_steps'][1];
					}
				}
				update_post_meta( $front_id, '_zaec_process_steps', $process );
			}

			$faqs = get_post_meta( $front_id, '_zaec_faqs', true );
			if ( is_array( $faqs ) ) {
				foreach ( $faqs as $faq_index => $faq ) {
					if ( isset( $faq['question'], $faq['answer'] ) && 'Tko radi moju stranicu?' === $faq['question'] && 'Vi imate jednu odgovornu osobu — ne lanac podizvođača. Iza ZAEC-a stoji više od deset godina rada na webu, uz UX, sadržaj i Google integracije.' === $faq['answer'] ) {
						$faqs[ $faq_index ] = $repeaters['faqs'][2];
					}
				}
				$questions = array_map(
					static function ( $faq ) {
						return isset( $faq['question'] ) ? $faq['question'] : '';
					},
					$faqs
				);
				foreach ( $repeaters['faqs'] as $faq ) {
					if ( isset( $faq['question'] ) && ! in_array( $faq['question'], $questions, true ) && in_array( $faq['question'], array( 'Nudite li mjesečno održavanje?', 'Preuzimate li održavanje tuđe stranice?', 'Trebam li uopće web stranicu?', 'Što znači tehnički SEO temelj?' ), true ) ) {
						$faqs[] = $faq;
					}
				}
				update_post_meta( $front_id, '_zaec_faqs', $faqs );
			}
		}
		update_option( 'zaec_theme_data_version', '1.8.0', false );
	}

	/* v1.8.1 — vraća arhitektonski hero i jasne mikro-savjete bez obećanja prihoda. */
	if ( version_compare( $version, '1.8.1', '<' ) ) {
		if ( $front_id ) {
			$occupations = get_post_meta( $front_id, '_zaec_occupations', true );
			$copy_map    = array(
				'Na webu: usluge · područje rada · poziv/WhatsApp · upit za termin' => 'Mali potez: usluge · područje rada · poziv/WhatsApp · termin',
				'Na webu: usluge · reference/certifikati · područje rada · brzi upit' => 'Mali potez: usluga po problemu · reference · područje rada · brzi upit',
				'Na webu: prije/poslije · vrste krova · reference · zahtjev za ponudu' => 'Mali potez: prije/poslije · materijali · područje rada · procjena',
			);
			if ( is_array( $occupations ) ) {
				foreach ( $occupations as $index => $occupation ) {
					if ( isset( $occupation['q'], $copy_map[ $occupation['q'] ] ) ) {
						$occupations[ $index ]['q'] = $copy_map[ $occupation['q'] ];
					}
				}
				update_post_meta( $front_id, '_zaec_occupations', $occupations );
			}
		}
		update_option( 'zaec_theme_data_version', '1.8.1', false );
	}

	/* v1.9.2 — izravno obraćanje klijentima iz klima-servisa. */
	if ( ! get_option( 'zaec_climate_copy_v192_done', false ) && $front_id ) {
		$occupations = get_post_meta( $front_id, '_zaec_occupations', true );
		if ( is_array( $occupations ) ) {
			foreach ( $occupations as $index => $occupation ) {
				if ( isset( $occupation['title'] ) && 'Za klimatizaciju' === $occupation['title'] ) {
					$occupations[ $index ]['title'] = 'Za klima-servise';
					$occupations[ $index ]['tab']   = 'Klima-servisi';
				}
			}
			update_post_meta( $front_id, '_zaec_occupations', $occupations );
		}
		update_option( 'zaec_theme_data_version', '1.9.2', false );
		update_option( 'zaec_climate_copy_v192_done', 1, false );
	}

	/* v1.9.5 — novi hero copy govori Hrvatskoj i remote klijentima bez napuhanog dosega. */
	if ( ! get_option( 'zaec_hero_copy_v195_done', false ) && $front_id ) {
		$copy = array(
			'earth_kicker'       => '[ 01 — Hrvatska · remote ]',
			'earth_title'        => 'Web koji vas učini jasnim kad vas ljudi traže.',
			'earth_lead'         => 'Ne trebate biti svugdje. Trebate jasno pokazati što radite, kome pomažete i kako do vas. Prije dizajna zajedno složimo poruku, dokaz i sljedeći korak — za ljude iz Hrvatske i projekte na daljinu.',
			'earth_primary_text' => 'Prvo razumijmo posao',
			'earth_primary_url'  => '#metoda',
			'earth_secondary_text' => 'Pogledajmo radove',
			'earth_secondary_url'  => '#radovi',
			'earth_note'         => 'Bez obećanja prve pozicije · s jasnim opsegom i dokazima.',
		);
		$old = array(
			'earth_kicker'       => '[ 01 — Pravi ljudi · pravo mjesto ]',
			'earth_title'        => 'Web koji vas dovodi do pravog razgovora.',
			'earth_lead'         => 'Ne trebate biti svugdje. Trebate biti jasni ondje gdje vas traže: što radite, kome pomažete i koji je sljedeći korak. Gradimo stranice koje taj put skraćuju — od prve pretrage do poziva, upita ili rezervacije.',
			'earth_primary_text' => 'Pogledajmo vaš posao',
			'earth_primary_url'  => '#upit',
			'earth_secondary_text' => 'Kako gradimo',
			'earth_secondary_url'  => '#metoda',
			'earth_note'         => 'Bez obećanja prve pozicije. S jasnim opsegom, dokazima i mjerenjem.',
		);
		foreach ( $copy as $key => $value ) {
			if ( $old[ $key ] === get_post_meta( $front_id, '_zaec_' . $key, true ) ) {
				update_post_meta( $front_id, '_zaec_' . $key, $value );
			}
		}
		update_option( 'zaec_hero_copy_v195_done', 1, false );
	}

}
add_action( 'admin_init', 'zaec_migrate_theme_data' );
