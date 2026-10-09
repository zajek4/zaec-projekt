<?php
/**
 * Blokovi landing stranica. Svaka stranica u registru ima listu blokova (type + podaci).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_render_blocks( $landing ) {
	$i = 0;
	foreach ( (array) ( $landing['blocks'] ?? array() ) as $b ) {
		$fn = 'zaec_block_' . str_replace( '-', '_', $b['type'] );
		if ( function_exists( $fn ) ) {
			$i++;
			$alt = 0 === $i % 2 ? ' block--paper2' : '';
			call_user_func( $fn, $b, $landing, $alt );
			if ( 1 === $i ) {
				zaec_answer_block( $landing ); // „Ukratko“ iza druge sekcije stranice (hero je prva)
			}
		}
	}
	zaec_answer_block( $landing ); // stranica bez blokova: odmah iza heroja
}

function zaec_block_head( $title, $lead = '', $kicker = '' ) {
	if ( ! $title && ! $lead ) {
		return;
	}
	echo '<div class="block-head"><div class="stack" style="--stack:18px">';
	if ( $kicker ) {
		echo '<p class="kicker">' . esc_html( $kicker ) . '</p>';
	}
	if ( $title ) {
		zaec_heading( $title );
	}
	echo '</div>';
	if ( $lead ) {
		echo '<p class="lead" data-reveal>' . esc_html( $lead ) . '</p>';
	}
	echo '</div>';
}

function zaec_block_open( $alt = '', $id = '', $extra = '' ) {
	printf( '<section class="block%s%s"%s><div class="wrap">', esc_attr( $alt ), $extra ? ' ' . esc_attr( $extra ) : '', $id ? ' id="' . esc_attr( $id ) . '"' : '' );
}
function zaec_block_close() {
	echo '</div></section>';
}

/* ───────── blokovi ───────── */

function zaec_block_problems( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'] ?? 'Gdje se <em>gube</em> upiti.', $b['lead'] ?? '', 'Problem' );
	echo '<ol class="problems" role="list" data-stagger="0.07">';
	foreach ( $b['items'] as $i => $it ) {
		printf( '<li data-reveal><span class="code-tag">P.%s</span><h3>%s</h3><p>%s</p></li>', esc_html( zaec_pad( $i + 1 ) ), esc_html( $it[0] ), esc_html( $it[1] ) );
	}
	echo '</ol>';
	zaec_block_close();
}

function zaec_block_deliver( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'] ?? 'Što <em>dobivate</em>.', $b['lead'] ?? '', 'Rješenje' );
	$cols = (int) ( $b['cols'] ?? 4 );
	echo '<ul class="feat-grid feat-grid--' . (int) $cols . '" role="list" data-stagger="0.05">';
	foreach ( $b['items'] as $i => $it ) {
		echo '<li data-reveal>';
		if ( ! empty( $b['numbered'] ) || '' === $it[0] ) {
			echo '<span class="code-tag" style="justify-self:start">' . esc_html( zaec_pad( $i + 1 ) ) . '</span>';
		} else {
			zaec_the_icon( $it[0], 24 );
		}
		printf( '<h3>%s</h3><p>%s</p></li>', esc_html( $it[1] ), esc_html( $it[2] ) );
	}
	echo '</ul>';
	zaec_block_close();
}

function zaec_block_compare( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Odluka' );
	echo '<div class="compare" data-stagger="0.1">';
	foreach ( $b['cols'] as $c ) {
		echo '<div class="compare-col' . ( ! empty( $c['feat'] ) ? ' compare-col--feat' : '' ) . '" data-reveal>';
		if ( ! empty( $c['best'] ) ) {
			echo '<p class="best">' . esc_html( $c['best'] ) . '</p>';
		}
		echo '<h3>' . esc_html( $c['title'] ) . ( ! empty( $c['tag'] ) ? ' <span class="tag">' . esc_html( $c['tag'] ) . '</span>' : '' ) . '</h3>';
		if ( ! empty( $c['text'] ) ) {
			echo '<p>' . esc_html( $c['text'] ) . '</p>';
		}
		echo '<ul class="checklist" role="list">';
		foreach ( $c['items'] as $it ) {
			echo '<li>' . zaec_icon( 'check-circle', 18 ) . '<span>' . esc_html( $it ) . '</span></li>'; // phpcs:ignore
		}
		echo '</ul></div>';
	}
	echo '</div>';
	if ( ! empty( $b['note'] ) ) {
		echo '<p class="muted" style="margin-top:22px" data-reveal>' . esc_html( $b['note'] ) . '</p>';
	}
	zaec_block_close();
}

function zaec_block_anatomy( $b, $l, $alt ) {
	$kinds = array( 'hero', 'cards', 'proof', 'gallery', 'map', 'faq', 'form' );
	$parts = array();
	foreach ( $b['parts'] as $i => $p ) {
		$parts[] = is_array( $p ) ? array( $p[0], $p[1] ?? '', $p[2] ?? 'text' ) : array( $p, '', $kinds[ min( $i, 6 ) ] );
	}
	if ( ! is_array( $b['parts'][0] ) ) {
		$parts[ count( $parts ) - 1 ][2] = 'form';
	}
	if ( ! empty( $b['tower'] ) && zaec_hero_meta( 'izrada-m' ) ) {
		zaec_block_anatomy_tower( $b, $parts );
		return;
	}
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Nacrt' );
	echo '<div class="anat" data-reveal><div class="anat-sheet" aria-hidden="true"><div class="anat-bar"><span></span><span></span><span></span><b>' . esc_html( $b['label'] ?? 'nacrt.pdf' ) . '</b></div><div class="anat-page">';
	foreach ( $parts as $i => $p ) {
		echo '<div class="anat-block anat-' . esc_attr( $p[2] ) . '"><span class="anat-n">' . esc_html( zaec_pad( $i + 1 ) ) . '</span>';
		switch ( $p[2] ) {
			case 'hero':
				echo '<i class="l w60"></i><i class="l w40"></i><i class="btnx"></i>';
				break;
			case 'cards':
				echo '<div class="cards3"><i></i><i></i><i></i></div>';
				break;
			case 'proof':
				echo '<div class="stars"><i></i><i></i><i></i><i></i><i></i></div>';
				break;
			case 'gallery':
				echo '<div class="gal"><i></i><i></i><i></i><i></i></div>';
				break;
			case 'map':
				echo '<div class="mapx"><i></i></div>';
				break;
			case 'faq':
				echo '<i class="l w80"></i><i class="l w70"></i><i class="l w75"></i>';
				break;
			case 'form':
				echo '<div class="formx"><i></i><i></i><i class="go"></i></div>';
				break;
			default:
				echo '<i class="l w70"></i><i class="l w50"></i>';
		}
		echo '</div>';
	}
	echo '</div></div><ol class="anat-notes" role="list">';
	foreach ( $parts as $i => $p ) {
		echo '<li><span class="anat-n">' . esc_html( zaec_pad( $i + 1 ) ) . '</span><div><b>' . esc_html( $p[0] ) . '</b>' . ( $p[1] ? '<p>' . esc_html( $p[1] ) . '</p>' : '' ) . '</div></li>';
	}
	echo '</ol></div>';
	zaec_block_close();
}

/**
 * Izrada: „Kako izgleda stranica koja zove“ kao nastavak heroja (design/03, 4.5): u noći, lijevo kula iz heroja
 * (sagrađeni kadar ispod nacrta, isti natpisi), desno sedam dijelova stranice. Dio stranice odozgo pali svoju
 * etažu odozgo (zadnji, upit i poziv, pali ulaz). Bez JS-a i uz smanjeno kretanje kula je cijela sagrađena.
 */
function zaec_block_anatomy_tower( $b, $parts ) {
	$m = zaec_hero_meta( 'izrada-m' );
	// pojasevi etaža bez praznina (granica je sredina ploče između dviju etaža): krov ide s gornjom etažom, tlo s ulazom
	$tops    = array_column( $m['floors'], 'top' );
	$bottoms = array_column( $m['floors'], 'bottom' );
	$tops[]  = $m['lobby']['top'];
	$cuts    = array( 0 );
	for ( $i = 1; $i < count( $tops ); $i++ ) {
		$cuts[] = round( ( $bottoms[ $i - 1 ] + $tops[ $i ] ) / 2, 3 );
	}
	$cuts[] = 100;
	$stops  = array();
	for ( $i = 0; $i < count( $cuts ) - 1; $i++ ) {
		$stops[] = "rgb(0 0 0/var(--f{$i},1)) {$cuts[ $i ]}%";
		$stops[] = "rgb(0 0 0/var(--f{$i},1)) {$cuts[ $i + 1 ]}%";
	}
	$mask  = 'linear-gradient(180deg,' . implode( ',', $stops ) . ')';
	$words = '';
	foreach ( $m['floors'] as $i => $f ) {
		$words .= sprintf(
			'<text class="it-w at-w%1$s" data-f="%2$d" x="%3$s" y="%4$s" font-size="%5$s" textLength="%6$s" lengthAdjust="spacingAndGlyphs">%7$s</text>',
			'serif' === $f['kind'] ? ' it-w--serif' : '',
			(int) $i,
			esc_attr( $m['textX'] ),
			esc_attr( $f['base'] ),
			esc_attr( $f['fs'] ),
			esc_attr( $m['textW'] ),
			esc_html( $f['word'] )
		);
	}
	$img = static fn( $n ) => sprintf( 'src="%1$s" srcset="%1$s 720w, %2$s 1080w" sizes="(max-width: 900px) 46vw, 600px"', esc_url( zaec_img( "hero/{$n}-m-720.webp" ) ), esc_url( zaec_img( "hero/{$n}-m.webp" ) ) );
	echo '<section class="block block--ink anat-night" data-header-theme="night" data-anat-tower><div class="wrap">';
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Nacrt' );
	echo '<div class="anat anat--tower"><figure class="at-tower" aria-hidden="true"><div class="at-scene">';
	echo '<img class="at-plan" ' . $img( 'izrada-plan' ) . ' alt="" width="720" height="1280" loading="lazy" decoding="async">'; // phpcs:ignore -- esc_url u $img
	echo '<div class="at-real" style="' . esc_attr( '-webkit-mask-image:' . $mask . ';mask-image:' . $mask ) . '"><img ' . $img( 'izrada-real' ) . ' alt="" width="720" height="1280" loading="lazy" decoding="async"></div>'; // phpcs:ignore
	printf( '<svg viewBox="0 0 %1$d %2$d" preserveAspectRatio="none" focusable="false">%3$s</svg>', (int) $m['w'], (int) $m['h'], $words ); // phpcs:ignore -- izgrađeno iz esc_* gore
	echo '</div></figure><ol class="anat-notes" role="list">';
	$last = count( $cuts ) - 2; // ulaz
	foreach ( $parts as $i => $p ) {
		$f = $i === count( $parts ) - 1 ? $last : min( $i, $last - 1 );
		echo '<li data-f="' . (int) $f . '"><span class="anat-n">' . esc_html( zaec_pad( $i + 1 ) ) . '</span><div><b>' . esc_html( $p[0] ) . '</b>' . ( $p[1] ? '<p>' . esc_html( $p[1] ) . '</p>' : '' ) . '</div></li>';
	}
	echo '</ol></div></div></section>';
}

function zaec_block_process( $b, $l, $alt ) {
	echo '<section class="block block--ink" data-header-theme="night"><div class="wrap">';
	zaec_block_head( $b['title'] ?? 'Četiri koraka, <em>bez</em> iznenađenja.', $b['lead'] ?? 'Cijenu i opseg znate prije prvog retka koda. Sve izvan dogovora prvo dobiva procjenu — tek onda rad.', 'Proces' );
	echo '<ol class="steps-row steps-row--ink" role="list" data-stagger="0.08">';
	foreach ( zaec_home_process() as $s ) {
		printf( '<li data-reveal><span class="code-tag">%s</span><h3>%s</h3><p>%s</p><span class="mono meta">%s</span></li>', esc_html( $s[0] ), esc_html( $s[1] ), esc_html( $s[2] ), esc_html( $s[3] ) );
	}
	echo '</ol></div></section>';
}

/**
 * „Što kupujete“: šest koraka procesa s onim što klijent dobiva na kraju svakog (zaec_home_steps, treći stupac).
 * Zamjenjuje blok process na Izradi (strategy/05, sekcija 2).
 */
function zaec_block_decisions( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Proces' );
	echo '<ol class="decisions" role="list" data-stagger="0.06">';
	foreach ( zaec_home_steps() as $i => $st ) {
		printf(
			'<li data-reveal><span class="mono dec-n">%1$s</span><div class="dec-step"><h3>%2$s</h3><p>%3$s</p></div><p class="dec-get"><span class="mono">Dobivate</span>%4$s</p></li>',
			esc_html( zaec_pad( $i + 1 ) ),
			esc_html( $st[0] ),
			esc_html( $st[1] ),
			esc_html( $st[2] )
		);
	}
	echo '</ol>';
	zaec_block_close();
}

/** „Primopredaja“: popis provjera prije predaje (koraci Testiramo i Lansiramo), s pragovima Core Web Vitals. */
function zaec_block_handover( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Primopredaja' );
	echo '<ul class="handover" role="list" data-stagger="0.05">';
	foreach ( $b['items'] as $it ) {
		printf(
			'<li data-reveal><span class="ho-box" aria-hidden="true"></span><div><b>%1$s</b><p>%2$s</p>%3$s</div></li>',
			esc_html( $it[0] ),
			esc_html( $it[1] ),
			! empty( $it[2] ) ? '<p class="mono ho-v">' . esc_html( $it[2] ) . '</p>' : ''
		);
	}
	echo '</ul>';
	zaec_block_close();
}

function zaec_block_guarantees( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'] ?? 'Šest razloga da se <em>javite</em> danas.', $b['lead'] ?? 'Ne riskirate ništa: prvi razgovor je besplatan, a odluku donosite tek kad vidite pisanu ponudu.', 'Bez rizika' );
	echo '<ul class="guarantees" role="list" data-stagger="0.06">';
	foreach ( zaec_guarantees() as $g ) {
		echo '<li data-reveal>' . zaec_icon( $g[0], 24 ) . '<div><b>' . esc_html( $g[1] ) . '</b><p>' . esc_html( $g[2] ) . '</p></div></li>'; // phpcs:ignore
	}
	echo '</ul>';
	zaec_block_close();
}

function zaec_block_projects( $b, $l, $alt ) {
	// host: samo taj objavljeni projekt (dokaz uz djelatnost); bez njega nema bloka
	$projects = ! empty( $b['host'] ) ? array_filter( array( zaec_project_by_host( $b['host'] ) ) ) : zaec_get_projects( 3 );
	if ( ! $projects ) {
		return;
	}
	zaec_block_open( $alt );
	zaec_block_head( $b['title'] ?? 'Radovi koje možete <em>otvoriti</em>.', $b['lead'] ?? 'Stvarni projekti — bez izmišljenih klijenata i brojki.', 'Radovi' );
	echo '<div class="pgrid' . ( 1 === count( $projects ) ? ' pgrid--one' : '' ) . '">';
	foreach ( $projects as $p ) {
		get_template_part( 'template-parts/project-card', null, array( 'p' => $p ) );
	}
	echo '</div>';
	get_template_part( 'template-parts/proof', null, array( 'report' => false ) );
	echo '<p style="margin-top:28px" data-reveal><a class="link-arrow" href="' . esc_url( (string) get_post_type_archive_link( 'projekti' ) ) . '">Svi radovi ' . zaec_icon( 'arrow-right', 16 ) . '</a></p>'; // phpcs:ignore
	zaec_block_close();
}

function zaec_block_report( $b, $l, $alt ) {
	zaec_block_open( $alt );
	echo '<div class="two-col two-col--center"><div class="stack" style="--stack:18px"><p class="kicker">Mjerenje</p>';
	zaec_heading( $b['title'] ?? 'Brojke koje <em>razumijete</em>.' );
	echo '<p class="lead" data-reveal>' . esc_html( $b['lead'] ?? '' ) . '</p></div>';
	get_template_part( 'template-parts/report' );
	echo '</div>';
	zaec_block_close();
}

function zaec_block_stats( $b, $l, $alt ) {
	zaec_block_open( $alt, '', 'block--stats' );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Podaci' );
	$words = ! array_filter( (array) $b['items'], static fn( $s ) => preg_match( '/\d/', $s[0] ) );
	echo '<ul class="stats' . ( $words ? ' stats--words' : '' ) . '" role="list" data-stagger="0.08">';
	foreach ( $b['items'] as $s ) {
		printf( '<li data-reveal><b>%s</b><span>%s</span><p>%s</p></li>', esc_html( $s[0] ), esc_html( $s[1] ), esc_html( $s[2] ) );
	}
	echo '</ul>';
	if ( ! empty( $b['note'] ) ) {
		echo '<p class="stats-note">' . esc_html( $b['note'] );
		foreach ( (array) ( $b['sources'] ?? array() ) as $src ) {
			echo ' <a href="' . esc_url( $src[1] ) . '" target="_blank" rel="noopener nofollow">' . esc_html( $src[0] ) . '</a>';
		}
		echo '</p>';
	}
	zaec_block_close();
}

function zaec_gbp_checklist() {
	return array(
		'Naziv na profilu je stvarni naziv tvrtke — bez nabrajanja ključnih riječi.',
		'Primarna kategorija točno opisuje glavnu uslugu.',
		'Dodane su sve usluge, s kratkim opisom.',
		'Područje rada odgovara mjestima u koja stvarno dolazite.',
		'Radno vrijeme je točno, uključujući praznike.',
		'Imate barem desetak stvarnih fotografija radova i ekipe.',
		'Telefon i adresa isti su na profilu, webu i imenicima.',
		'Odgovarate na recenzije — i na dobre i na loše.',
		'Poveznica s profila vodi na relevantnu stranicu weba.',
		'Profil je otvoren na račun tvrtke kojem imate pristup.',
	);
}

function zaec_block_checklist( $b, $l, $alt ) {
	$items = $b['items'] ?? zaec_gbp_checklist();
	zaec_block_open( $alt );
	echo '<div class="two-col"><div class="stack" style="--stack:18px"><p class="kicker">Provjera</p>';
	zaec_heading( $b['title'] );
	if ( ! empty( $b['lead'] ) ) {
		echo '<p class="lead" data-reveal>' . esc_html( $b['lead'] ) . '</p>';
	}
	if ( ! empty( $b['cta'] ) ) {
		$href = 0 === strpos( $b['cta'][1], 'guide:' ) ? ( ( $p = get_page_by_path( substr( $b['cta'][1], 6 ), OBJECT, 'post' ) ) ? get_permalink( $p ) : '#' ) : zaec_url( $b['cta'][1] );
		echo '<div data-reveal>' . zaec_button( $b['cta'][0], $href ) . '</div>'; // phpcs:ignore
	}
	echo '</div><ol class="anat-notes check-list" role="list" data-stagger="0.04">';
	foreach ( $items as $i => $c ) {
		echo '<li data-reveal><span class="anat-n">' . esc_html( zaec_pad( $i + 1 ) ) . '</span><div><p>' . esc_html( $c ) . '</p></div></li>';
	}
	echo '</ol></div>';
	zaec_block_close();
}

function zaec_block_fit( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Je li ovo za vas?' );
	echo '<ul class="fit" role="list" data-stagger="0.07">';
	foreach ( $b['items'] as $i => $it ) {
		printf( '<li data-reveal><span class="n">%s</span><div><h3>%s</h3><p>%s</p></div></li>', esc_html( zaec_pad( $i + 1 ) ), esc_html( $it[0] ), esc_html( $it[1] ) );
	}
	echo '</ul>';
	zaec_block_close();
}

function zaec_block_scope( $b, $l, $alt ) {
	zaec_block_open( $alt );
	echo '<div class="two-col"><div class="stack" style="--stack:18px"><p class="kicker">Opseg</p>';
	zaec_heading( $b['title'] );
	echo '</div><div class="scope" data-reveal><div class="yes"><h3>' . zaec_icon( 'check-circle', 22 ) . ' ' . esc_html( $b['yes_title'] ?? 'Uključeno' ) . '</h3><ul class="checklist" role="list">'; // phpcs:ignore
	foreach ( $b['yes'] as $it ) {
		echo '<li>' . zaec_icon( 'check-circle', 18 ) . '<span>' . esc_html( $it ) . '</span></li>'; // phpcs:ignore
	}
	echo '</ul></div><div class="no"><h3>' . zaec_icon( 'info-circle', 22 ) . ' ' . esc_html( $b['no_title'] ?? 'Posebno' ) . '</h3><ul class="checklist" role="list">'; // phpcs:ignore
	foreach ( $b['no'] as $it ) {
		echo '<li>' . zaec_icon( 'add-circle', 18 ) . '<span>' . esc_html( $it ) . '</span></li>'; // phpcs:ignore
	}
	echo '</ul></div></div></div>';
	zaec_block_close();
}

function zaec_block_tiers( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Razine' );
	echo '<div class="tiers" data-stagger="0.08">';
	foreach ( $b['items'] as $t ) {
		echo '<div class="tier' . ( ! empty( $t['feat'] ) ? ' tier--feat' : '' ) . '" data-reveal><h3>' . esc_html( $t['name'] ) . '</h3><p class="for">' . esc_html( $t['for'] ) . '</p><ul class="checklist" role="list">';
		foreach ( $t['items'] as $it ) {
			echo '<li>' . zaec_icon( 'check-circle', 18 ) . '<span>' . esc_html( $it ) . '</span></li>'; // phpcs:ignore
		}
		echo '</ul><p class="price-note">Cijena u ponudi · prema opsegu</p></div>';
	}
	echo '</div>';
	zaec_block_close();
}

function zaec_block_table( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'], $b['lead'] ?? '', 'Detalji' );
	echo '<div class="table-wrap" data-reveal><table class="dtable"><thead><tr>';
	foreach ( $b['head'] as $h ) {
		echo '<th scope="col">' . esc_html( $h ) . '</th>';
	}
	echo '</tr></thead><tbody>';
	foreach ( $b['rows'] as $row ) {
		echo '<tr>';
		foreach ( $row as $j => $cell ) {
			echo 0 === $j ? '<th scope="row"><code>' . esc_html( $cell ) . '</code></th>' : '<td>' . esc_html( $cell ) . '</td>';
		}
		echo '</tr>';
	}
	echo '</tbody></table></div>';
	if ( ! empty( $b['note'] ) ) {
		echo '<p class="stats-note">' . esc_html( $b['note'] ) . '</p>';
	}
	zaec_block_close();
}

function zaec_block_statement( $b, $l, $alt ) {
	zaec_block_open( $alt );
	echo '<p class="statement" data-reveal>' . zaec_kses_title( $b['text'] ) . '</p>'; // phpcs:ignore
	zaec_block_close();
}

function zaec_block_searches( $b, $l, $alt ) {
	zaec_block_open( $alt );
	echo '<div class="two-col"><div class="stack" style="--stack:18px"><p class="kicker">Kako vas traže</p>';
	zaec_heading( $b['title'] ?? 'Prije poziva, kupac <em>pretražuje</em>.' );
	echo '<p class="lead" data-reveal>Tipične pretrage za ovu djelatnost. Vaš web treba jasan odgovor na svaku — na stranici koja se lako nađe.</p></div><div class="stack" style="--stack:26px" data-reveal><ul class="search-chips" role="list">';
	foreach ( $b['items'] as $s ) {
		echo '<li>' . zaec_icon( 'magnifer', 18 ) . esc_html( $s ) . '</li>'; // phpcs:ignore
	}
	echo '</ul><p class="muted" style="font-size:.9rem">Primjeri namjere pretrage, ne podaci o broju pretraga. Stvarne pojmove za vaše područje pratimo u Search Consoleu nakon objave.</p></div></div>';
	zaec_block_close();
}

function zaec_block_services( $b, $l, $alt ) {
	zaec_block_open( $alt );
	zaec_block_head( $b['title'] ?? '', $b['lead'] ?? '', 'Usluge' );
	echo '<ul class="svc-grid" role="list" data-stagger="0.05">';
	foreach ( zaec_services() as $s ) {
		echo '<li data-reveal><a class="svc card" href="' . esc_url( zaec_url( $s['key'] ) ) . '"><span class="svc-top"><span class="code-tag">' . esc_html( $s['code'] ) . '</span>' . zaec_icon( zaec_service_icon( $s['key'] ), 26 ) . '</span><h3>' . esc_html( $s['title'] ) . '</h3><p>' . esc_html( zaec_service_blurb( $s['key'] ) ) . '</p><span class="svc-go">Saznajte više ' . zaec_icon( 'arrow-right', 16 ) . '</span></a></li>'; // phpcs:ignore
	}
	echo '</ul>';
	zaec_block_close();
}

/**
 * Djelatnosti po sektorima (strategija 01): hub (full) prikazuje svih 8 sektora sa stranicama, dokazom i CTA-om;
 * drugdje kompaktna mreža sektora koja vodi na stranicu ili na sektor na hubu. Bez sintetičkih slika.
 */
function zaec_block_trades( $b, $l, $alt ) {
	$full = ! empty( $b['full'] );
	zaec_block_open( $alt );
	if ( ! empty( $b['title'] ) || ! isset( $b['title'] ) ) {
		zaec_block_head( $b['title'] ?? 'Web prema tome kako <em>vaši</em> kupci biraju.', $b['lead'] ?? 'Osam područja, od obrta do industrije. Svako ima svoja pitanja i svoj put do upita.', 'Djelatnosti' );
	}
	$n = 0;
	if ( $full ) {
		echo '<ol class="sectors" role="list" data-stagger="0.05">';
		foreach ( zaec_sectors() as $key => $sec ) {
			$pages = zaec_sector_pages( $key );
			$proof = ! empty( $sec['proof'] ) ? zaec_project_by_host( $sec['proof'] ) : null;
			echo '<li class="sector" id="sektor-' . esc_attr( $key ) . '" data-reveal>';
			echo '<div class="sector-id"><span class="code-tag">S.' . esc_html( zaec_pad( ++$n ) ) . '</span>' . zaec_icon( $sec['icon'], 22 ) . '</div>'; // phpcs:ignore
			echo '<div class="sector-name"><h3>' . esc_html( $sec['name'] ) . '</h3><p class="sector-ex">' . esc_html( $sec['examples'] ) . '</p></div>';
			echo '<div class="sector-body"><p>' . esc_html( $sec['about'] ) . '</p>';
			if ( $pages ) {
				echo '<ul class="sector-pages" role="list">';
				foreach ( $pages as $t ) {
					echo '<li><a href="' . esc_url( zaec_url( $t['key'] ) ) . '"><b>' . esc_html( $t['label'] ) . '</b><span>' . esc_html( implode( ' · ', array_slice( $t['onweb'], 0, 2 ) ) ) . '</span>' . zaec_icon( 'arrow-right', 16 ) . '</a></li>'; // phpcs:ignore
				}
				echo '</ul>';
			}
			if ( $proof ) {
				echo '<p class="sector-proof"><span class="mono">Iz prakse</span> <a href="' . esc_url( $proof['permalink'] ) . '">' . esc_html( $proof['title'] ) . '</a></p>';
			}
			echo '<a class="sector-cta" href="' . esc_url( zaec_url( 'cijene?djelatnost=' . $key . '#konfigurator' ) ) . '">Procjena za ovo područje ' . zaec_icon( 'arrow-right', 16 ) . '</a>'; // phpcs:ignore
			echo '</div></li>';
		}
		echo '<li class="sector sector--other" id="sektor-ostalo" data-reveal><div class="sector-id"><span class="code-tag">S.' . esc_html( zaec_pad( ++$n ) ) . '</span>' . zaec_icon( ZAEC_SECTOR_OTHER['icon'], 22 ) . '</div>'; // phpcs:ignore
		echo '<div class="sector-name"><h3>Nešto drugo</h3><p class="sector-ex">autoservisi, zdravstvo, prijevoz, IT i sve ostalo</p></div>';
		echo '<div class="sector-body"><p>Isti pristup radi za svaki posao koji kupci traže i uspoređuju na webu. Strukturu za vaš složimo u razgovoru.</p>';
		echo '<a class="sector-cta" href="' . esc_url( zaec_url( 'cijene?djelatnost=ostalo#konfigurator' ) ) . '">Procjena za vaš posao ' . zaec_icon( 'arrow-right', 16 ) . '</a></div></li>'; // phpcs:ignore
		echo '</ol>';
	} else {
		echo '<ul class="sector-grid" role="list" data-stagger="0.04">';
		foreach ( zaec_sectors() as $key => $sec ) {
			$pages = zaec_sector_pages( $key );
			$href  = 1 === count( $pages ) ? zaec_url( $pages[0]['key'] ) : zaec_url( 'djelatnosti#sektor-' . $key );
			echo '<li data-reveal><a class="sector-tile" href="' . esc_url( $href ) . '"><span class="sector-tile-top"><span class="code-tag">S.' . esc_html( zaec_pad( ++$n ) ) . '</span>' . zaec_icon( $sec['icon'], 20 ) . '</span><b>' . esc_html( $sec['short'] ) . '</b><span class="sector-tile-sub">' . esc_html( $sec['examples'] ) . '</span></a></li>'; // phpcs:ignore
		}
		echo '</ul>';
		echo '<p class="sector-more" data-reveal><a class="link-arrow" href="' . esc_url( zaec_url( 'djelatnosti' ) ) . '">Sva područja i stranice djelatnosti ' . zaec_icon( 'arrow-right', 16 ) . '</a></p>'; // phpcs:ignore
	}
	zaec_block_close();
}

function zaec_block_configurator( $b, $l, $alt ) {
	echo '<section class="block" style="padding-top:24px"><div class="wrap">';
	get_template_part( 'template-parts/configurator', null, array( 'id' => 'konfigurator', 'form_target' => '#upit' ) );
	echo '</div></section>';
}

function zaec_block_contact( $b, $l, $alt ) {
	$o = zaec_get_options();
	if ( ! empty( $b['after'] ) ) {
		zaec_block_contact_after( $o );
		return;
	}
	echo '<section class="block' . esc_attr( $alt ) . '" id="upit"><div class="wrap">';
	if ( ! empty( $b['title'] ) ) {
		zaec_block_head( $b['title'], '', 'Upit' );
	}
	echo '<div class="contact-grid"><div class="contact-card"><h2 class="h3" style="margin-bottom:6px">Upit</h2><p class="muted" style="margin-bottom:22px">Dva obavezna polja. Ostalo po želji.</p>';
	get_template_part( 'template-parts/contact-form', null, array( 'id' => 'upit-forma-' . sanitize_key( $l['key'] ?? 'x' ) ) );
	echo '</div><div class="contact-aside">';
	if ( zaec_whatsapp_href() ) {
		echo '<a class="item" href="' . esc_url( zaec_whatsapp_href() ) . '" target="_blank" rel="noopener" data-track="click_whatsapp"><span class="ic">' . zaec_icon( 'chat-round-dots', 20 ) . '</span><div><b>WhatsApp</b><span>Pošaljite poruku ili fotografiju</span></div></a>'; // phpcs:ignore
	}
	if ( $o['email'] && '1' === (string) $o['show_public_email'] ) {
		echo '<a class="item" href="mailto:' . esc_attr( $o['email'] ) . '"><span class="ic">' . zaec_icon( 'letter', 20 ) . '</span><div><b>' . esc_html( $o['email'] ) . '</b><span>Email</span></div></a>'; // phpcs:ignore
	}
	echo '<a class="item" href="' . esc_url( zaec_maps_href() ) . '" target="_blank" rel="noopener"><span class="ic">' . zaec_icon( 'map-point', 20 ) . '</span><div><b>' . esc_html( $o['address'] ) . '</b><span>' . esc_html( $o['postal_code'] . ' ' . $o['city'] ) . ' · otvori kartu</span></div></a>'; // phpcs:ignore
	echo '<a class="item" href="' . esc_url( zaec_url( 'kontakt' ) ) . '"><span class="ic">' . zaec_icon( 'phone', 20 ) . '</span><div><b>Telefon i radno vrijeme</b><span>Na stranici Kontakt</span></div></a>'; // phpcs:ignore
	echo '<div><p class="kicker" style="margin:18px 0 12px">Što se događa nakon upita</p><ol class="anat-notes" role="list">';
	foreach ( array( array( 'Javimo se', 'U radno vrijeme, telefonom ili emailom — kako ste naveli.' ), array( 'Kratak razgovor', 'Oko 20 minuta: kako radite i što vam treba.' ), array( 'Pisana ponuda', 'Opseg, rok i fiksna cijena. Odlučujete bez pritiska.' ) ) as $i => $s ) {
		echo '<li><span class="anat-n">' . esc_html( zaec_pad( $i + 1 ) ) . '</span><div><b>' . esc_html( $s[0] ) . '</b><p>' . esc_html( $s[1] ) . '</p></div></li>';
	}
	echo '</ol></div></div></div></div></section>';
}

/**
 * Nastavak potpisnog heroja Kontakt (forma je već u heroju): ista noć, a koraci nakon upita pale se kao
 * etaže — redom, dok prolaze sredinom ekrana. Ispod su drugi putevi do nas.
 */
function zaec_block_contact_after( $o ) {
	$steps = array( array( 'Javimo se', 'U radno vrijeme, telefonom ili emailom — kako ste naveli.' ), array( 'Kratak razgovor', 'Oko 20 minuta: kako radite i što vam treba.' ), array( 'Pisana ponuda', 'Opseg, rok i fiksna cijena. Odlučujete bez pritiska.' ) );
	echo '<section class="block kt-after" data-header-theme="night" aria-labelledby="kt-after-h"><div class="wrap kt-after-grid"><div class="kt-after-head"><p class="kicker">Nakon upita</p><h2 class="h2" id="kt-after-h">Što se događa <em>dalje</em>.</h2></div><ol class="kt-steps" role="list">';
	foreach ( $steps as $i => $st ) {
		echo '<li class="kt-step"><span class="kt-step-n mono">' . esc_html( zaec_pad( $i + 1 ) ) . '</span><div><b>' . esc_html( $st[0] ) . '</b><p>' . esc_html( $st[1] ) . '</p></div></li>';
	}
	echo '</ol><div class="kt-ways"><p class="kicker">Radije izravno</p><ul class="kt-ways-list" role="list">';
	echo '<li><a href="' . esc_attr( zaec_phone_href() ) . '" data-track="click_to_call">' . zaec_icon( 'phone', 20 ) . '<span><b>' . esc_html( $o['phone_display'] ) . '</b><small>' . esc_html( $o['hours'] ) . '</small></span></a></li>'; // phpcs:ignore
	if ( zaec_whatsapp_href() ) {
		echo '<li><a href="' . esc_url( zaec_whatsapp_href() ) . '" target="_blank" rel="noopener" data-track="click_whatsapp">' . zaec_icon( 'chat-round-dots', 20 ) . '<span><b>WhatsApp</b><small>Pošaljite poruku ili fotografiju</small></span></a></li>'; // phpcs:ignore
	}
	if ( $o['email'] && '1' === (string) $o['show_public_email'] ) {
		echo '<li><a href="mailto:' . esc_attr( $o['email'] ) . '">' . zaec_icon( 'letter', 20 ) . '<span><b>' . esc_html( $o['email'] ) . '</b><small>Email</small></span></a></li>'; // phpcs:ignore
	}
	echo '<li><a href="' . esc_url( zaec_maps_href() ) . '" target="_blank" rel="noopener">' . zaec_icon( 'map-point', 20 ) . '<span><b>' . esc_html( $o['address'] ) . '</b><small>' . esc_html( $o['postal_code'] . ' ' . $o['city'] ) . ' · otvori kartu</small></span></a></li>'; // phpcs:ignore
	echo '</ul></div></div></section>';
}

function zaec_block_audit( $b, $l, $alt ) {
	echo '<section class="block' . esc_attr( $alt ) . '" id="upit"><div class="wrap contact-grid"><div class="contact-card"><h2 class="h3" style="margin-bottom:6px">Zatražite besplatnu provjeru</h2><p class="muted" style="margin-bottom:22px">Naziv tvrtke i kontakt su dovoljni. Izvješće šaljemo na kontakt koji ostavite.</p>';
	get_template_part( 'template-parts/contact-form', null, array( 'id' => 'provjera-forma', 'kind' => 'provjera' ) );
	echo '</div><div class="contact-aside"><p class="kicker">Što dobivate</p>';
	foreach ( array( array( 'document', 'Kratko izvješće', 'Pregled profila, weba, recenzija i AI odgovora — bez žargona.' ), array( 'users-group-rounded', 'Usporedba s 3 konkurenta', 'Gdje ste ispred, a gdje zaostajete.' ), array( 'checklist', '3 prioritetna koraka', 'Što napraviti prvo — sami ili s nama.' ), array( 'shield-check', 'Bez obveze i bez poziva', 'Javljamo se samo izvješćem. Dalje odlučujete vi.' ) ) as $it ) {
		echo '<div class="item"><span class="ic">' . zaec_icon( $it[0], 20 ) . '</span><div><b>' . esc_html( $it[1] ) . '</b><span>' . esc_html( $it[2] ) . '</span></div></div>'; // phpcs:ignore
	}
	echo '</div></div></section>';
}

function zaec_block_about( $b, $l, $alt ) {
	$o    = zaec_get_options();
	$part = $b['part'] ?? 'all';
	if ( 'facts' !== $part ) {
		echo '<section class="block' . esc_attr( $alt ) . '"><div class="wrap two-col"><div class="stack" style="--stack:18px"><p class="kicker">Zašto ZAEC</p>';
		zaec_heading( 'Prvo nacrt. Onda <em>sve</em> ostalo.' );
		echo '</div><div class="prose" data-reveal><p>Previše tvrtki platilo je web koji nikad nije zaživio: lijepe slike, nula upita, a nitko ne zna zašto. Ili pretplatu koja traje, a nitko ne zna na što odlazi.</p><p>ZAEC radi drukčije. Prvo slušamo kako stvarno radite i tko vas zove. Zatim crtamo nacrt: što kupac mora vidjeti, što ga uvjerava i gdje klikne. Tek onda dizajn i kod — s cijenom i rokom na papiru, i mjerenjem koje pokazuje što radi.</p><p>Sjedište je u Osijeku, a projekte vodimo za klijente diljem Hrvatske — uživo kad ima smisla, inače video-pozivom i jasnim pisanim dogovorom.</p></div></div></section>';
	}
	if ( 'intro' === $part ) {
		return;
	}
	echo '<section class="block' . esc_attr( 'facts' === $part ? $alt : ' block--paper2' ) . '"><div class="wrap two-col"><div class="stack" style="--stack:18px"><p class="kicker">Podaci</p><h2 class="h3">Tko stoji iza ZAEC-a</h2></div><div class="prose" data-reveal><table><tbody>';
	$rows = array( 'Naziv' => $o['legal_name'], 'Nositelj' => $o['owner_name'], 'Sjedište' => $o['address'] . ', ' . $o['postal_code'] . ' ' . $o['city'], 'Matični broj' => $o['mb'], 'OIB' => $o['oib'], 'Djelatnost (NKD)' => $o['nkd'] ? $o['nkd'] . ' — računalno programiranje' : '', 'Radno vrijeme' => $o['hours'], 'Iskustvo' => $o['experience'] ? $o['experience'] . ' godina rada na webu' : '' );
	foreach ( $rows as $k => $v ) {
		if ( $v ) {
			echo '<tr><th scope="row">' . esc_html( $k ) . '</th><td>' . esc_html( $v ) . '</td></tr>';
		}
	}
	echo '</tbody></table></div></div></section>';
}

/**
 * Načela rada (O nama): šest stavki kao članci ugovora — svaka je obećanje koje web već daje negdje drugdje
 * (strategija 05 §3), ovdje skupljeno na jedno mjesto.
 */
function zaec_block_principles( $b, $l, $alt ) {
	zaec_block_open( $alt, 'kako-radimo', 'block--principles' );
	zaec_block_head( $b['title'] ?? 'Kako <em>radimo</em>.', $b['lead'] ?? '', 'Načela' );
	echo '<ol class="principles" role="list" data-stagger="0.06">';
	foreach ( (array) $b['items'] as $i => $it ) {
		echo '<li data-reveal><span class="principle-n mono" aria-hidden="true">N.' . esc_html( zaec_pad( $i + 1 ) ) . '</span><h3 class="h4">' . esc_html( $it[0] ) . '</h3><p>' . esc_html( $it[1] ) . '</p></li>';
	}
	echo '</ol>';
	zaec_block_close();
}

/** Povezane stranice (interno povezivanje). */
function zaec_render_related( $l ) {
	if ( empty( $l['related'] ) ) {
		return;
	}
	$reg = zaec_landing_registry();
	echo '<section class="block block--related"><div class="wrap"><p class="kicker">Povezano</p><ul class="related" role="list">';
	foreach ( $l['related'] as $key ) {
		if ( empty( $reg[ $key ] ) ) {
			continue;
		}
		$r = $reg[ $key ];
		echo '<li><a href="' . esc_url( zaec_url( $key ) ) . '"><span class="mono">' . esc_html( $r['kicker'] ?? '' ) . '</span><b>' . esc_html( $r['title'] ) . '</b><span class="go">' . zaec_icon( 'arrow-right', 18 ) . '</span></a></li>'; // phpcs:ignore
	}
	echo '</ul></div></section>';
}
