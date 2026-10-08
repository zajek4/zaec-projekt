<?php
/**
 * Naslovnica — kino-uvod u jednom 3D svijetu (scroll je dirigent), zatim mirni "papirni" dio
 * s dokazima i procesom, i završna mreža s upitom.
 * Sav sadržaj je semantički HTML; 3D je nadogradnja (poster bez WebGL-a ili uz smanjeno kretanje).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();

$h        = 'zaec_home';
$layers   = zaec_home_layers();
$gates    = zaec_home_gates();
$projects = zaec_get_projects( 3 );
$svc_map  = array();
foreach ( zaec_services() as $s ) {
	$svc_map[ $s['key'] ] = $s;
}
$svc_links = zaec_service_links();
$channels  = array( 'Google pretraga', 'Preporuka', 'Društvene mreže', 'Oglasi', 'AI pretraga' );
$outcomes  = array( 'Poziv', 'Upit', 'Rezervacija', 'Kupnja' );
?>
<div class="stage" aria-hidden="true" style="--poster:url('<?php echo esc_url( zaec_img( 'world/poster.webp' ) ); ?>');--poster-m:url('<?php echo esc_url( zaec_img( 'world/poster-m.webp' ) ); ?>')">
	<div class="stage-poster"></div>
	<canvas class="stage-canvas" data-stage-canvas></canvas>
	<p class="stage-credit">Karta i zgrade Osijeka: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> suradnici</p>
	<div class="stage-vignette"></div>
</div>
<div class="stage-labels" data-stage-labels aria-hidden="true">
	<span class="sl sl--pin" data-l="osijek"><b>Osijek</b><small>45,55° N · 18,70° E</small></span>
	<span class="sl sl--you" data-l="you"><i></i><b data-you-name>Vaša tvrtka</b></span>
	<?php foreach ( array( 'Osijek', 'Zagreb', 'Split', 'Rijeka', 'Zadar', 'Dubrovnik', 'Varaždin', 'Pula' ) as $c ) : ?>
		<span class="sl sl--city<?php echo 'Osijek' === $c ? ' sl--home' : ''; ?>" data-l="city-<?php echo esc_attr( $c ); ?>"><b><?php echo esc_html( $c ); ?></b></span>
	<?php endforeach; ?>
	<?php foreach ( array( 'Đakovo', 'Vukovar', 'Vinkovci', 'Valpovo', 'Belišće', 'Našice', 'Beli Manastir', 'Donji Miholjac', 'Čepin', 'Tenja', 'Bilje', 'Darda' ) as $i => $t ) : ?>
		<span class="sl sl--town<?php echo $i < 8 ? ( 4 === $i ? ' sl--m-hide' : '' ) : ' sl--minor'; ?>" data-l="town-<?php echo (int) $i; ?>"><b><?php echo esc_html( $t ); ?></b></span>
	<?php endforeach; ?>
	<span class="sl sl--pin" data-l="cath"><b>Konkatedrala<span class="sl-long"> sv. Petra i Pavla</span></b><small>toranj 90 m</small></span>
	<span class="sl sl--dim" data-l="dim"><b>90 m</b><small>visina tornja</small></span>
	<span class="sl sl--soft" data-l="drava"><b>Drava</b></span>
	<span class="sl sl--pin sl--small" data-l="hotel"><b>Hotel Osijek</b></span>
	<span class="sl sl--soft sl--trg" data-l="trg"><b>Trg Ante Starčevića</b></span>
	<?php foreach ( $channels as $i => $c ) : ?>
		<span class="sl sl--ch" data-l="ch-<?php echo (int) $i; ?>"><b><?php echo esc_html( $c ); ?></b></span>
	<?php endforeach; ?>
	<?php foreach ( $outcomes as $i => $c ) : ?>
		<span class="sl sl--out" data-l="out-<?php echo (int) $i; ?>"><b><?php echo esc_html( $c ); ?></b></span>
	<?php endforeach; ?>
	<?php foreach ( $gates as $i => $g ) : ?>
		<span class="sl sl--gate" data-l="gate-<?php echo (int) $i; ?>" data-gate-label="<?php echo (int) $i; ?>"><b><?php echo esc_html( $g[0] ); ?></b></span>
	<?php endforeach; ?>
	<?php foreach ( $layers as $i => $ly ) : ?>
		<span class="sl sl--layer" data-l="layer-<?php echo (int) $i; ?>"><em><?php echo esc_html( $ly[0] ); ?></em><b><?php echo esc_html( $ly[1] ); ?></b></span>
	<?php endforeach; ?>
</div>

<nav class="film-rail" aria-label="Poglavlja uvoda" data-rail>
	<ol>
		<?php
		$zaec_rail = array( 'mreza' => 'Mreža', 'hrvatska' => 'Hrvatska', 'osijek' => 'Osijek', 'konkatedrala' => 'Arhitektura', 'nacrt' => 'Nacrt', 'put' => 'Put do upita', 'sustav' => 'Sustav' );
		$zaec_r    = 0;
		foreach ( $zaec_rail as $id => $label ) :
			$zaec_r++;
			?>
			<li><a href="#<?php echo esc_attr( $id ); ?>"><span><?php echo esc_html( zaec_pad( $zaec_r ) ); ?></span><b><?php echo esc_html( $label ); ?></b></a></li>
		<?php endforeach; ?>
	</ol>
</nav>

<!-- ═════════ KINO ═════════ -->
<section class="cine cine-hero" id="uvod" data-cam="hero" data-header-theme="night" aria-labelledby="hero-title">
	<div class="wrap cine-grid">
		<div class="cine-copy hero-copy">
			<p class="kicker" data-hero-in><?php echo esc_html( $h( 'hero_kicker' ) ); ?></p>
			<h1 id="hero-title" class="h1 hero-title" data-split="manual"><?php echo zaec_kses_title( $h( 'hero_title' ) ); // phpcs:ignore ?></h1>
			<p class="lead" data-hero-in><?php echo esc_html( $h( 'hero_lead' ) ); ?></p>
			<div class="hero-cta" data-hero-in>
				<?php echo zaec_button( $h( 'hero_cta' ), '#kontakt', 'signal', array( 'magnetic' => true, 'track' => 'cta_hero_goal' ) ); // phpcs:ignore ?>
				<a class="btn btn--ghost-light" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
			<ul class="hero-trust" role="list" data-hero-in>
				<li><?php zaec_the_icon( 'document', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_1' ) ); ?></span></li>
				<li><?php zaec_the_icon( 'key', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_2' ) ); ?></span></li>
				<li><?php zaec_the_icon( 'chart', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_3' ) ); ?></span></li>
			</ul>
		</div>
	</div>
	<a class="scroll-cue" href="#mreza" data-hero-in><span aria-hidden="true"></span><?php echo esc_html( $h( 'hero_cue' ) ); ?></a>
</section>

<section class="cine" id="mreza" data-cam="world" data-header-theme="night" aria-labelledby="net-title">
	<div class="wrap cine-grid cine-grid--right">
		<div class="cine-copy">
			<p class="kicker"><?php echo esc_html( $h( 'net_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'net_title' ), 'h2', 'h2', true, 'net-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'net_lead' ) ); ?></p>
			<p class="cine-note" data-reveal><?php echo esc_html( $h( 'net_note' ) ); ?></p>
		</div>
	</div>
</section>

<section class="cine cine--duo" id="hrvatska" data-header-theme="night" data-lens aria-labelledby="hr-title">
	<div class="cine-beat" data-cam="europe">
		<div class="wrap cine-grid">
			<div class="cine-copy">
				<p class="kicker"><?php echo esc_html( $h( 'hr_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'hr_title' ), 'h2', 'h2', true, 'hr-title' ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'hr_lead' ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="cine-beat" data-cam="croatia">
		<div class="wrap cine-grid">
			<div class="cine-copy">
				<?php zaec_heading( $h( 'hr_title_2' ), 'h3', 'h2 h2--sub', true ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'hr_lead_2' ) ); ?></p>
			</div>
		</div>
	</div>
</section>

<section class="cine cine--duo" id="osijek" data-header-theme="night" data-lens aria-labelledby="os-title">
	<div class="cine-beat" data-cam="slavonia">
		<div class="wrap cine-grid cine-grid--right">
			<div class="cine-copy">
				<p class="kicker"><?php echo esc_html( $h( 'slav_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'slav_title' ), 'h2', 'h2 h2--sub', true ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'slav_lead' ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="cine-beat" data-cam="osijek">
		<div class="wrap cine-grid cine-grid--low">
			<div class="cine-copy">
				<p class="kicker"><?php echo esc_html( $h( 'os_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'os_title' ), 'h2', 'h2', true, 'os-title' ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'os_lead' ) ); ?></p>
			</div>
		</div>
	</div>
</section>

<section class="cine" id="konkatedrala" data-cam="cathedral" data-header-theme="night" data-lens aria-labelledby="cath-title">
	<div class="wrap cine-grid cine-grid--right">
		<div class="cine-copy">
			<p class="kicker"><?php echo esc_html( $h( 'cath_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'cath_title' ), 'h2', 'h2', true, 'cath-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'cath_lead' ) ); ?></p>
		</div>
	</div>
</section>

<section class="cine cine--duo" id="nacrt" data-header-theme="night" data-lens aria-labelledby="plan-title">
	<div class="cine-beat" data-cam="arch">
		<div class="wrap cine-grid">
			<div class="cine-copy">
				<p class="kicker"><?php echo esc_html( $h( 'plan_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'plan_title' ), 'h2', 'h2', true, 'plan-title' ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'plan_lead' ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="cine-beat" data-cam="grid">
		<div class="wrap cine-grid">
			<div class="cine-copy">
				<?php zaec_heading( $h( 'plan_grid_title' ), 'h3', 'h2 h2--sub', true ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'plan_grid_lead' ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="cine-beat" data-cam="web">
		<div class="wrap cine-grid">
			<div class="cine-copy">
				<?php zaec_heading( $h( 'plan_title_2' ), 'h3', 'h2 h2--sub', true ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'plan_lead_2' ) ); ?></p>
			</div>
		</div>
	</div>
</section>

<section class="cine cine-path" id="put" data-header-theme="night" aria-labelledby="path-title">
	<span class="cam-mark cam-mark--top" data-cam="flow" aria-hidden="true"></span>
	<span class="cam-mark cam-mark--bottom" data-cam="flow" aria-hidden="true"></span>
	<div class="path-sticky">
		<div class="wrap path-grid">
			<header class="path-head">
				<p class="kicker"><?php echo esc_html( $h( 'path_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'path_title' ), 'h2', 'h2 h2--path', true, 'path-title' ); ?>
				<p class="path-lead" data-reveal><?php echo esc_html( $h( 'path_lead' ) ); ?></p>
			</header>
			<div class="path-panel" data-path data-reveal>
				<div class="path-gates" role="group" aria-label="Pet vrata na putu do upita">
					<?php foreach ( $gates as $i => $g ) : ?>
						<button class="gate" type="button" aria-pressed="false" data-gate="<?php echo (int) $i; ?>">
							<span class="gate-sw" aria-hidden="true"><i></i></span>
							<span class="gate-txt"><b><?php echo esc_html( $g[0] ); ?></b><small class="gate-bad"><?php echo esc_html( $g[1] ); ?></small><small class="gate-good"><?php echo esc_html( $g[2] ); ?></small></span>
							<span class="gate-rate mono" data-gate-rate></span>
						</button>
					<?php endforeach; ?>
				</div>
				<div class="path-out">
					<p class="mono path-of">Od 1.000 posjetitelja</p>
					<p class="path-num" aria-hidden="true"><b data-path-num>12</b> <span data-path-unit>upita</span></p>
					<p class="sr-only" aria-live="polite" data-path-live></p>
					<ol class="path-funnel" role="list" aria-label="Koliko posjetitelja prođe kroz svaka vrata" data-path-funnel>
						<?php foreach ( $gates as $i => $g ) : ?>
							<li><span class="mono"><?php echo esc_html( $g[0] ); ?></span><i style="--w:0"></i><b></b></li>
						<?php endforeach; ?>
					</ol>
					<div class="path-presets">
						<button type="button" class="chip-btn" data-path-preset="bad">Sve loše</button>
						<button type="button" class="chip-btn" data-path-preset="good">Sve dobro</button>
					</div>
				</div>
				<?php
				// prva rečenica (napomena "ilustrativni model") uvijek je vidljiva; ostatak se skraćuje na niskim ekranima
				$zaec_note  = (string) $h( 'path_note' );
				$zaec_parts = preg_split( '/(?<=\.)\s+/u', $zaec_note, 2 );
				?>
				<p class="path-note"><?php echo esc_html( $zaec_parts[0] ); ?><?php if ( ! empty( $zaec_parts[1] ) ) : ?> <span class="path-note-more"><?php echo esc_html( $zaec_parts[1] ); ?></span><?php endif; ?></p>
			</div>
		</div>
	</div>
</section>

<section class="cine cine-sys" id="sustav" data-header-theme="night" aria-labelledby="sys-title">
	<div class="wrap sys-grid">
		<header class="sys-head">
			<p class="kicker"><?php echo esc_html( $h( 'sys_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'sys_title' ), 'h2', 'h2', true, 'sys-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'sys_lead' ) ); ?></p>
		</header>
		<ol class="sys-layers" role="list">
			<?php foreach ( $layers as $i => $ly ) : ?>
				<li class="sys-layer" data-layer="<?php echo (int) $i; ?>"<?php echo 0 === $i ? ' data-cam="layers-a"' : ( 6 === $i ? ' data-cam="layers-b"' : '' ); ?> tabindex="0">
					<span class="sys-n mono"><?php echo esc_html( $ly[0] ); ?></span>
					<div>
						<h3><?php zaec_the_icon( $ly[3], 20 ); ?> <?php echo esc_html( $ly[1] ); ?></h3>
						<p><?php echo esc_html( $ly[2] ); ?></p>
					</div>
				</li>
			<?php endforeach; ?>
		</ol>
		<div class="sys-statement" data-cam="layers-c">
			<p class="sys-line" data-split><?php echo zaec_kses_title( $h( 'sys_statement' ) ); // phpcs:ignore ?></p>
			<a class="link-arrow link-arrow--light" href="#usluge" data-reveal>Što od toga radimo za vas <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
		</div>
	</div>
</section>

<!-- ═════════ PAPIR ═════════ -->
<div class="paper" data-cover data-cam="layers-c" data-cam-at="top">

	<section class="sec recog" id="prepoznajete" aria-labelledby="recog-title">
		<div class="wrap recog-grid">
			<div class="recog-head">
				<p class="kicker"><?php echo esc_html( $h( 'recog_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'recog_title' ), 'h2', 'h2', true, 'recog-title' ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'recog_lead' ) ); ?></p>
				<div class="recog-id" data-reveal>
					<p class="recog-who"><?php echo esc_html( $h( 'recog_who' ) ); ?></p>
					<p class="recog-diff"><?php echo esc_html( $h( 'recog_diff' ) ); ?></p>
					<div class="recog-start">
						<?php echo zaec_button( $h( 'recog_cta' ), '#kontakt', 'signal', array( 'track' => 'cta_recog_goal' ) ); // phpcs:ignore ?>
						<p class="recog-note"><?php echo esc_html( $h( 'recog_start' ) ); ?></p>
					</div>
				</div>
			</div>
			<ol class="recog-list" role="list" data-stagger="0.08">
				<?php foreach ( zaec_home_pains() as $p ) : ?>
					<li class="recog-row" data-reveal>
						<span class="recog-n mono" aria-hidden="true"><i class="recog-win"></i><?php echo esc_html( $p[0] ); ?></span>
						<div class="recog-pain">
							<h3><?php echo esc_html( $p[1] ); ?></h3>
							<p><?php echo esc_html( $p[2] ); ?></p>
						</div>
						<dl class="recog-fix">
							<div>
								<dt>Radimo</dt>
								<dd>
									<ul class="recog-tags" role="list">
										<?php foreach ( $p[3] as $l ) : ?>
											<li><a href="<?php echo esc_url( 0 === strpos( $l[0], '#' ) ? $l[0] : zaec_url( $l[0] ) ); ?>"><?php echo esc_html( $l[1] ); ?></a></li>
										<?php endforeach; ?>
									</ul>
								</dd>
							</div>
							<div>
								<dt>Dobivate</dt>
								<dd><?php echo esc_html( $p[4] ); ?></dd>
							</div>
						</dl>
					</li>
				<?php endforeach; ?>
			</ol>
		</div>
	</section>

	<section class="sec cmp" id="lijepo-ucinkovito" aria-labelledby="cmp-title">
		<div class="wrap">
			<div class="sec-head sec-head--split">
				<div>
					<p class="kicker"><?php echo esc_html( $h( 'cmp_kicker' ) ); ?></p>
					<?php zaec_heading( $h( 'cmp_title' ), 'h2', 'h2', true, 'cmp-title' ); ?>
				</div>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'cmp_lead' ) ); ?></p>
			</div>
			<figure class="cmp-stage" data-compare data-reveal style="--pos:50%">
				<div class="cmp-pane cmp-pane--pretty">
					<div class="mk mk--pretty">
						<div class="mk-bar"><i></i><i></i><i></i><span>vasobrt.hr</span></div>
						<div class="mk-nav"><b class="mk-logo">VAŠ OBRT</b><span>Početna</span><span>O nama</span><span>Povijest</span><span>Usluge</span><span>Galerija</span><span>Novosti</span><span>Partneri</span><span>Karijere</span><span>Kontakt</span></div>
						<div class="mk-hero">
							<div class="mk-shot" aria-hidden="true"></div>
							<p class="mk-h">Dobrodošli na naš web</p>
							<p class="mk-p">Kvaliteta, tradicija i povjerenje.</p>
							<span class="mk-ghost">Saznaj više</span>
							<span class="mk-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
						</div>
					</div>
					<span class="cmp-tag mono">Lijepo</span>
				</div>
				<div class="cmp-pane cmp-pane--works" data-compare-works>
					<div class="mk mk--works">
						<div class="mk-bar"><i></i><i></i><i></i><span>vasobrt.hr</span></div>
						<div class="mk-nav"><b class="mk-logo">VAŠ OBRT</b><span>Usluge</span><span>Radovi</span><span>Cijene</span><span class="mk-call"><?php zaec_the_icon( 'phone', 14, '', 'bold' ); ?> Nazovite <i class="mk-pin">2</i></span></div>
						<div class="mk-hero mk-hero--split">
							<div class="mk-main">
								<p class="mk-k">Klima uređaji · Osijek i okolica</p>
								<p class="mk-h">Servis i montaža klima — dolazimo isti ili sljedeći radni dan. <i class="mk-pin">1</i></p>
								<p class="mk-p">Cijena servisa poznata unaprijed. Jamstvo na rad.</p>
								<span class="mk-btns"><span class="mk-btn"><?php zaec_the_icon( 'phone', 14, '', 'bold' ); ?> Nazovite</span><span class="mk-btn mk-btn--ghost">Zatražite termin</span><i class="mk-pin">4</i></span>
								<span class="mk-proof"><span>Radovi</span><span>Recenzije</span><span>Jamstvo</span><i class="mk-pin">3</i></span>
							</div>
							<div class="mk-form">
								<b>Zatražite termin</b>
								<span class="mk-in">Ime i prezime</span>
								<span class="mk-in">Telefon</span>
								<span class="mk-in mk-in--sel">Servis klime</span>
								<span class="mk-btn mk-btn--full">Pošaljite upit</span>
								<small class="mk-ga">GA4 · generate_lead <i class="mk-pin">5</i></small>
							</div>
						</div>
						<div class="mk-cards"><span><b>Servis</b>Čišćenje i provjera</span><span><b>Montaža</b>S materijalom</span><span><b>Hitno</b>Isti dan</span></div>
					</div>
					<span class="cmp-tag cmp-tag--works mono">Učinkovito</span>
				</div>
				<div class="cmp-handle" aria-hidden="true"><span><?php zaec_the_icon( 'alt-arrow-left', 14 ); ?><?php zaec_the_icon( 'alt-arrow-right', 14 ); ?></span></div>
				<label class="sr-only" for="cmp-range">Pomak razdjelnika između lijepe i učinkovite verzije</label>
				<input id="cmp-range" class="cmp-range" type="range" min="0" max="100" value="50" step="1" data-compare-range data-cursor="Povucite">
				<figcaption class="mono">Primjer prikaza — izmišljeni obrt, isti sadržaj u dvije strukture</figcaption>
			</figure>
			<table class="cmp-table" data-reveal>
				<caption class="sr-only">Što se promijenilo između lijepe i učinkovite verzije</caption>
				<thead><tr><th scope="col"><span class="sr-only">Element</span></th><th scope="col">Lijepo</th><th scope="col">Učinkovito</th></tr></thead>
				<tbody>
					<?php foreach ( zaec_home_compare() as $i => $row ) : ?>
						<tr><th scope="row"><span class="mono"><?php echo esc_html( (string) ( $i + 1 ) ); ?></span> <?php echo esc_html( $row[0] ); ?></th><td><?php echo esc_html( $row[1] ); ?></td><td><?php echo esc_html( $row[2] ); ?></td></tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>
	</section>

	<section class="sec sec--night svc" id="usluge" data-header-theme="night" aria-labelledby="services-title">
		<div class="wrap">
			<div class="sec-head sec-head--split">
				<div>
					<p class="kicker"><?php echo esc_html( $h( 'services_kicker' ) ); ?></p>
					<?php zaec_heading( $h( 'services_title' ), 'h2', 'h2', true, 'services-title' ); ?>
				</div>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'services_lead' ) ); ?></p>
			</div>
			<div class="svc-map" data-svc-map>
				<svg class="svc-links" aria-hidden="true" data-svc-links></svg>
				<?php foreach ( zaec_service_clusters() as $ci => $cl ) : ?>
					<div class="svc-cluster" data-reveal style="--d:<?php echo esc_attr( (string) ( $ci * 0.08 ) ); ?>s">
						<p class="svc-cl"><span class="mono"><?php echo esc_html( zaec_pad( $ci + 1 ) ); ?></span> <b><?php echo esc_html( $cl['name'] ); ?></b></p>
						<p class="svc-cl-note"><?php echo esc_html( $cl['note'] ); ?></p>
						<ul role="list">
							<?php foreach ( $cl['keys'] as $k ) : ?>
								<?php if ( empty( $svc_map[ $k ] ) ) { continue; } ?>
								<?php $s = $svc_map[ $k ]; ?>
								<li>
									<a class="svc-node" href="<?php echo esc_url( zaec_url( $k ) ); ?>" data-svc="<?php echo esc_attr( $k ); ?>" data-links="<?php echo esc_attr( implode( ' ', $svc_links[ $k ] ?? array() ) ); ?>">
										<span class="svc-poly" aria-hidden="true"><?php zaec_the_icon( zaec_service_icon( $k ), 20 ); ?></span>
										<span class="svc-t"><b><?php echo esc_html( $s['title'] ); ?></b><small><?php echo esc_html( zaec_service_blurb( $k ) ); ?></small></span>
										<?php zaec_the_icon( 'arrow-right', 18, 'svc-go' ); ?>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
				<?php endforeach; ?>
			</div>
			<p class="svc-foot" data-reveal>
				<span>Ne znate odakle krenuti?</span>
				<a class="link-arrow" href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>" data-track="cta_services_audit">Besplatna provjera vidljivosti <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
			</p>
		</div>
	</section>

	<section class="sec work" id="radovi" aria-labelledby="work-title">
		<div class="wrap">
			<div class="sec-head sec-head--split">
				<div>
					<p class="kicker"><?php echo esc_html( $h( 'work_kicker' ) ); ?></p>
					<?php zaec_heading( $h( 'work_title' ), 'h2', 'h2', true, 'work-title' ); ?>
				</div>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'work_lead' ) ); ?></p>
			</div>
			<div class="hcs">
				<?php foreach ( $projects as $i => $p ) : ?>
					<article class="hc<?php echo 1 === $i % 2 ? ' hc--flip' : ''; ?>" data-case aria-labelledby="case-<?php echo (int) $p['id']; ?>">
						<a class="hc-media" href="<?php echo esc_url( $p['permalink'] ); ?>" tabindex="-1" aria-hidden="true" data-cursor="Projekt">
							<?php if ( $p['image'] ) : ?>
								<img src="<?php echo esc_url( $p['image'] ); ?>" alt="" loading="lazy" decoding="async" width="1600" height="1000" data-case-img>
							<?php endif; ?>
							<span class="hc-code mono"><?php echo esc_html( $p['code'] ); ?></span>
						</a>
						<div class="hc-body">
							<p class="mono hc-meta"><?php echo esc_html( trim( $p['service'] . ' · ' . $p['location'], ' ·' ) ); ?></p>
							<h3 class="hc-title" id="case-<?php echo (int) $p['id']; ?>"><a href="<?php echo esc_url( $p['permalink'] ); ?>"><?php echo esc_html( $p['title'] ); ?></a></h3>
							<dl class="hc-steps">
								<?php
								$zaec_steps = array(
									'Problem'      => $p['challenge'] ? $p['challenge'] : $p['excerpt'],
									'Razmišljanje' => $p['approach'],
									'Rješenje'     => $p['solution'],
									'Ishod'        => $p['result'],
								);
								$zaec_k     = 0;
								foreach ( $zaec_steps as $label => $text ) :
									if ( ! $text ) {
										continue;
									}
									$zaec_k++;
									?>
									<div><dt><span class="mono"><?php echo esc_html( zaec_pad( $zaec_k ) ); ?></span> <?php echo esc_html( $label ); ?></dt><dd><?php echo esc_html( $text ); ?></dd></div>
								<?php endforeach; ?>
							</dl>
							<?php if ( $p['quote'] ) : ?>
								<figure class="hc-quote">
									<blockquote><p>„<?php echo esc_html( $p['quote'] ); ?>”</p></blockquote>
									<figcaption><b><?php echo esc_html( $p['quote_author'] ); ?></b><?php echo $p['quote_role'] ? ', ' . esc_html( $p['quote_role'] ) : ''; ?></figcaption>
								</figure>
							<?php endif; ?>
							<?php if ( $p['metric'] ) : ?>
								<p class="hc-metric"><span class="mono"><?php echo esc_html( $p['metric'][0] ); ?></span> <s><?php echo esc_html( $p['metric'][1] ); ?></s> → <b><?php echo esc_html( $p['metric'][2] ); ?></b><?php echo $p['proof_note'] ? ' <small>' . esc_html( $p['proof_note'] ) . '</small>' : ''; ?></p>
							<?php endif; ?>
							<p class="hc-links">
								<a class="link-arrow" href="<?php echo esc_url( $p['permalink'] ); ?>">Cijeli projekt <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
								<?php if ( $p['website_url'] ) : ?>
									<a class="hc-live" href="<?php echo esc_url( $p['website_url'] ); ?>" target="_blank" rel="noopener">Otvorite web <?php zaec_the_icon( 'arrow-right-up', 14 ); ?><span class="sr-only"> (nova kartica)</span></a>
								<?php endif; ?>
							</p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
			<p class="work-more" data-reveal><a class="link-arrow" href="<?php echo esc_url( (string) get_post_type_archive_link( 'projekti' ) ); ?>">Svi radovi <?php zaec_the_icon( 'arrow-right', 16 ); ?></a></p>
		</div>
	</section>

	<section class="sec maybe" id="mozda-ne" aria-labelledby="maybe-title">
		<div class="wrap maybe-grid">
			<div class="sec-head">
				<p class="kicker"><?php echo esc_html( $h( 'maybe_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'maybe_title' ), 'h2', 'h2', true, 'maybe-title' ); ?>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'maybe_lead' ) ); ?></p>
				<p data-reveal><?php echo zaec_button( 'Besplatna provjera vidljivosti', zaec_url( 'provjera-vidljivosti' ), '', array( 'track' => 'cta_maybe_audit' ) ); // phpcs:ignore ?></p>
			</div>
			<ul class="maybe-list" role="list" data-stagger="0.07">
				<?php foreach ( zaec_home_maybe() as $m ) : ?>
					<li data-reveal>
						<h3><?php echo esc_html( $m[0] ); ?></h3>
						<p><?php echo esc_html( $m[1] ); ?></p>
						<?php if ( $m[2] ) : ?>
							<a class="link-arrow" href="<?php echo esc_url( zaec_url( $m[2] ) ); ?>"><?php echo esc_html( $m[3] ); ?> <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
						<?php endif; ?>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
	</section>

	<section class="sec sec--night proc" id="proces" data-header-theme="night" aria-labelledby="process-title">
		<div class="wrap proc-grid">
			<div class="proc-side">
				<div class="proc-sticky">
					<p class="kicker"><?php echo esc_html( $h( 'process_kicker' ) ); ?></p>
					<?php zaec_heading( $h( 'process_title' ), 'h2', 'h2', true, 'process-title' ); ?>
					<p class="lead" data-reveal><?php echo esc_html( $h( 'process_lead' ) ); ?></p>
					<div class="proc-meter" aria-hidden="true">
						<span class="proc-num" data-proc-num>01</span><span class="proc-of">/ 06</span>
						<span class="proc-bar"><i data-proc-bar></i></span>
					</div>
				</div>
			</div>
			<ol class="proc-steps" role="list">
				<?php foreach ( zaec_home_steps() as $i => $s ) : ?>
					<li class="proc-step" data-proc-step="<?php echo (int) $i; ?>">
						<span class="proc-n mono"><?php echo esc_html( zaec_pad( $i + 1 ) ); ?></span>
						<h3><?php echo esc_html( $s[0] ); ?></h3>
						<p><?php echo esc_html( $s[1] ); ?></p>
						<p class="proc-get"><span class="mono">Dobivate</span> <?php echo esc_html( $s[2] ); ?></p>
					</li>
				<?php endforeach; ?>
			</ol>
		</div>
	</section>

	<section class="sec invest" id="ulaganje" aria-labelledby="invest-title">
		<div class="wrap">
			<div class="sec-head sec-head--split">
				<div>
					<p class="kicker"><?php echo esc_html( $h( 'invest_kicker' ) ); ?></p>
					<?php zaec_heading( $h( 'invest_title' ), 'h2', 'h2', true, 'invest-title' ); ?>
				</div>
				<p class="lead" data-reveal><?php echo esc_html( $h( 'invest_lead' ) ); ?></p>
			</div>
			<ul class="inv-cards" role="list" data-stagger="0.08">
				<?php foreach ( zaec_home_scopes() as $i => $sc ) : ?>
					<li class="inv-card" data-reveal>
						<span class="mono inv-n"><?php echo esc_html( zaec_pad( $i + 1 ) ); ?></span>
						<h3><?php echo esc_html( $sc[0] ); ?></h3>
						<p><?php echo esc_html( $sc[1] ); ?></p>
						<ul class="checklist" role="list">
							<?php foreach ( $sc[2] as $it ) : ?>
								<li><?php zaec_the_icon( 'check-circle', 18 ); ?><span><?php echo esc_html( $it ); ?></span></li>
							<?php endforeach; ?>
						</ul>
					</li>
				<?php endforeach; ?>
			</ul>
			<div class="invest-row">
				<div class="factors" data-reveal>
					<h3 class="h3">Što određuje cijenu</h3>
					<ol role="list">
						<?php foreach ( zaec_home_price_factors() as $i => $f ) : ?>
							<li><span class="mono"><?php echo esc_html( zaec_pad( $i + 1 ) ); ?></span><?php echo esc_html( $f ); ?></li>
						<?php endforeach; ?>
					</ol>
					<div class="invest-cta">
						<?php echo zaec_button( 'Složite opseg u procjeni', zaec_url( 'cijene' ) . '#konfigurator', 'signal', array( 'track' => 'cta_invest_config' ) ); // phpcs:ignore ?>
						<a class="link-arrow" href="#kontakt">ili samo recite cilj <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
					</div>
				</div>
				<ul class="guar" role="list" data-stagger="0.05">
					<?php foreach ( zaec_guarantees() as $g ) : ?>
						<li data-reveal><?php zaec_the_icon( $g[0], 22 ); ?><div><b><?php echo esc_html( $g[1] ); ?></b><p><?php echo esc_html( $g[2] ); ?></p></div></li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</section>

	<section class="sec faq" id="pitanja" data-cam="final" data-cam-at="bottom" aria-labelledby="faq-title">
		<div class="wrap faq-grid">
			<div class="faq-side">
				<p class="kicker"><?php echo esc_html( $h( 'faq_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'faq_title' ), 'h2', 'h2', true, 'faq-title' ); ?>
				<p class="muted" data-reveal>Nema odgovora koji tražite? Nazovite <a href="<?php echo esc_attr( zaec_phone_href() ); ?>"><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a> — <?php echo esc_html( zaec_option( 'hours' ) ); ?>.</p>
			</div>
			<div class="faq-list" data-reveal>
				<?php foreach ( zaec_home_faq() as $i => $f ) : ?>
					<details class="faq-item"<?php echo 0 === $i ? ' open' : ''; ?>>
						<summary><?php echo esc_html( $f[0] ); ?><span class="plus" aria-hidden="true"></span></summary>
						<div class="faq-answer"><p><?php echo esc_html( $f[1] ); ?></p></div>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
</div>

<!-- ═════════ MREŽA SE VRAĆA ═════════ -->
<section class="cine cine-final" id="kontakt" data-cam="final" data-cam-at="top" data-header-theme="night" aria-labelledby="final-title">
	<span id="upit" class="anchor-alias" aria-hidden="true"></span>
	<div class="wrap final-grid">
		<div class="final-copy">
			<p class="kicker"><?php echo esc_html( $h( 'final_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'final_title' ), 'h2', 'h2 h2--final', true, 'final-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'final_lead' ) ); ?></p>
		</div>
		<div class="final-form" data-reveal>
			<?php get_template_part( 'template-parts/goal-form', null, array( 'id' => 'kontakt-forma' ) ); ?>
		</div>
		<div class="final-contact" data-reveal>
			<a class="tel-big" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><span class="dot" aria-hidden="true"></span><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			<p class="mono"><?php echo esc_html( zaec_option( 'hours' ) . ' · ' . zaec_option( 'city' ) ); ?></p>
		</div>
	</div>
</section>

<?php
get_footer();
