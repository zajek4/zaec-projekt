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

}
add_action( 'admin_init', 'zaec_migrate_theme_data' );
