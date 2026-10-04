<?php
/**
 * Naslovnica — trajni low-poly 3D svijet kojim dirigira scroll.
 * Sav sadržaj je statični HTML; 3D je nadogradnja (poster ako WebGL nije dostupan).
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();

$h          = 'zaec_home';
$industries = zaec_industries();
$layers     = zaec_home_layers();
$projects   = zaec_get_projects( 3 );
$guides     = get_posts( array( 'post_type' => 'post', 'posts_per_page' => 3, 'category_name' => 'vodici' ) );
?>
<div class="world" aria-hidden="true" style="--poster:url('<?php echo esc_url( zaec_img( 'world/poster.webp' ) ); ?>');--poster-m:url('<?php echo esc_url( zaec_img( 'world/poster-m.webp' ) ); ?>')">
	<div class="world-poster"></div>
	<canvas class="world-canvas" data-world-canvas></canvas>
</div>
<div class="world-labels" data-world-labels aria-hidden="true">
	<span class="wl wl--you" data-label="W" data-when="hero,problem,trades,final"><b>Vaš obrt</b></span>
	<span class="wl wl--comp" data-label="C" data-when="problem"><b>Konkurent</b><small>bliže pretrazi</small></span>
	<span class="wl wl--lens" data-label="lens" data-when="hero,problem"><b>Google · AI pretraga</b></span>
	<?php foreach ( $layers as $i => $ly ) : ?>
		<span class="wl wl--layer" data-label="L<?php echo (int) $i + 1; ?>" data-when="system,system2"><em><?php echo esc_html( $ly[0] ); ?></em><b><?php echo esc_html( $ly[1] ); ?></b></span>
	<?php endforeach; ?>
</div>

<nav class="chapter-rail" aria-label="Poglavlja naslovnice" data-rail>
	<ol>
		<?php $zaec_rail = array( 'upiti' => 'Upiti', 'problem' => 'Problem', 'djelatnosti' => 'Djelatnosti', 'sustav' => 'Sustav', 'noc' => '0–24', 'proces' => 'Proces', 'radovi' => 'Radovi', 'procjena' => 'Procjena', 'upit' => 'Upit' ); ?>
		<?php $zaec_r = 0; ?>
		<?php foreach ( $zaec_rail as $id => $label ) : ?>
			<?php $zaec_r++; ?>
			<li><a href="#<?php echo esc_attr( $id ); ?>"><span><?php echo esc_html( zaec_pad( $zaec_r ) ); ?></span><b><?php echo esc_html( $label ); ?></b></a></li>
		<?php endforeach; ?>
	</ol>
</nav>

<!-- 01 HERO -->
<section class="ch ch-hero" id="upiti" data-cam="hero" data-world aria-labelledby="hero-title">
	<div class="wrap hero-grid">
		<div class="hero-copy">
			<p class="kicker hero-kicker" data-hero-in><?php echo esc_html( $h( 'hero_kicker' ) ); ?></p>
			<h1 id="hero-title" class="h1 hero-title" data-split="manual"><?php echo zaec_kses_title( $h( 'hero_title' ) ); // phpcs:ignore ?></h1>
			<p class="lead hero-lead" data-hero-in><?php echo esc_html( $h( 'hero_lead' ) ); ?></p>
			<div class="hero-cta" data-hero-in>
				<?php echo zaec_button( $h( 'hero_cta' ), '#procjena', 'signal', array( 'magnetic' => true, 'track' => 'cta_hero_config' ) ); // phpcs:ignore ?>
				<a class="btn btn--ghost" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><?php zaec_the_icon( 'phone', 18 ); ?> <?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
			</div>
			<a class="hero-audit link-arrow" href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>" data-hero-in data-track="cta_hero_audit"><?php zaec_the_icon( 'magnifer', 16 ); ?> <?php echo esc_html( $h( 'hero_audit' ) ); ?> <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
		</div>
		<ul class="hero-trust" role="list" data-hero-in>
			<li><?php zaec_the_icon( 'document', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_1' ) ); ?></span></li>
			<li><?php zaec_the_icon( 'key', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_2' ) ); ?></span></li>
			<li><?php zaec_the_icon( 'chart', 18 ); ?><span><?php echo esc_html( $h( 'hero_trust_3' ) ); ?></span></li>
		</ul>
		<div class="hero-legend" data-hero-in>
			<span class="legend-dot" aria-hidden="true"></span>
			<p><b>Svaka plava točka je upit.</b> <span class="legend-hint">Kliknite kartu i pošaljite svoj.</span></p>
			<p class="legend-count mono">Na karti: <b data-lead-count>0</b></p>
		</div>
		<a class="scroll-cue" href="#problem" aria-label="Na sljedeće poglavlje"><span></span>Pratite put upita</a>
	</div>
</section>

<!-- 02 PROBLEM -->
<section class="ch ch-problem" id="problem" data-cam="problem" data-world aria-labelledby="problem-title">
	<div class="wrap ch-grid ch-grid--right">
		<div class="ch-copy panel">
			<p class="kicker"><?php echo esc_html( $h( 'problem_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'problem_title' ), 'h2', 'h2', true, 'problem-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'problem_lead' ) ); ?></p>
			<ol class="pains" role="list" data-stagger="0.08">
				<?php foreach ( zaec_home_pains() as $p ) : ?>
					<li class="pain" data-reveal><span class="code-tag"><?php echo esc_html( $p[0] ); ?></span><h3><?php echo esc_html( $p[1] ); ?></h3><p><?php echo esc_html( $p[2] ); ?></p></li>
				<?php endforeach; ?>
			</ol>
			<p class="bridge" data-reveal><?php zaec_the_icon( 'arrow-right', 18 ); ?> <?php echo esc_html( $h( 'problem_bridge' ) ); ?></p>
		</div>
	</div>
</section>

<!-- 03 DJELATNOSTI -->
<section class="ch ch-trades" id="djelatnosti" data-cam="trades" data-world aria-labelledby="trades-title">
	<div class="wrap ch-grid">
		<div class="ch-copy panel">
			<p class="kicker"><?php echo esc_html( $h( 'trades_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'trades_title' ), 'h2', 'h2', true, 'trades-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'trades_lead' ) ); ?></p>
			<div class="trades" data-trades data-reveal>
				<div class="trade-tabs" role="tablist" aria-label="Djelatnosti">
					<?php foreach ( $industries as $i => $t ) : ?>
						<button class="trade-tab" role="tab" type="button" id="tab-<?php echo esc_attr( $t['slug'] ); ?>" aria-controls="panel-<?php echo esc_attr( $t['slug'] ); ?>" aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>" tabindex="<?php echo 0 === $i ? '0' : '-1'; ?>" data-trade="<?php echo (int) $t['prop']; ?>" data-sign="<?php echo esc_attr( $t['sign'] ); ?>"><?php zaec_the_icon( $t['icon'], 18 ); ?><span><?php echo esc_html( $t['tab'] ); ?></span></button>
					<?php endforeach; ?>
					<span class="trade-progress" aria-hidden="true"><i data-trade-progress></i></span>
				</div>
				<?php foreach ( $industries as $i => $t ) : ?>
					<div class="trade-panel" role="tabpanel" id="panel-<?php echo esc_attr( $t['slug'] ); ?>" aria-labelledby="tab-<?php echo esc_attr( $t['slug'] ); ?>"<?php echo 0 !== $i ? ' hidden' : ''; ?> tabindex="0">
						<h3><?php echo esc_html( $t['title'] ); ?></h3>
						<p><?php echo esc_html( $t['short'] ); ?></p>
						<p class="mono trade-on">Na webu:</p>
						<ul class="chips" role="list"><?php foreach ( $t['onweb'] as $o ) : ?><li class="chip"><?php echo esc_html( $o ); ?></li><?php endforeach; ?></ul>
						<a class="link-arrow" href="<?php echo esc_url( zaec_url( $t['key'] ) ); ?>">Web za <?php echo esc_html( $t['name'] ); ?> <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<!-- 04 SUSTAV -->
<section class="ch ch-system on-dark" id="sustav" data-world data-header-theme="night" aria-labelledby="system-title">
	<div class="wrap ch-grid" data-cam="system">
		<div class="ch-copy">
			<p class="kicker"><?php echo esc_html( $h( 'system_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'system_title' ), 'h2', 'h2', true, 'system-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'system_lead' ) ); ?></p>
		</div>
	</div>
	<div class="wrap ch-grid sys-list-wrap" data-cam="system2">
		<ol class="sys-list" role="list" data-stagger="0.07">
			<?php foreach ( $layers as $ly ) : ?>
				<li data-reveal><span class="sys-code"><?php echo esc_html( $ly[0] ); ?></span><div><h3><?php zaec_the_icon( $ly[3], 20 ); ?> <?php echo esc_html( $ly[1] ); ?></h3><p><?php echo esc_html( $ly[2] ); ?></p></div></li>
			<?php endforeach; ?>
		</ol>
	</div>
</section>

<!-- 05 NOĆ -->
<section class="ch ch-night on-dark" id="noc" data-cam="night" data-world data-header-theme="night" aria-labelledby="night-title">
	<div class="wrap ch-grid night-grid">
		<div class="ch-copy">
			<p class="kicker"><?php echo esc_html( $h( 'night_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'night_title' ), 'h2', 'h2', true, 'night-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'night_lead' ) ); ?></p>
			<ul class="night-points" role="list" data-stagger="0.08">
				<?php foreach ( zaec_home_night_points() as $p ) : ?>
					<li data-reveal><span class="night-code"><?php echo esc_html( $p[0] ); ?></span><div><h3><?php echo esc_html( $p[1] ); ?></h3><p><?php echo esc_html( $p[2] ); ?></p></div></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<figure class="phone" data-reveal aria-label="Primjer: mobilni prikaz web stranice klima servisa s gumbom za poziv">
			<div class="phone-frame">
				<div class="phone-notch"></div>
				<div class="phone-screen">
					<div class="ps-bar"><span>22:47</span><span>4G ▪▪▪</span></div>
					<div class="ps-site">
						<div class="ps-nav"><b>KLIMA·OS</b><span>☰</span></div>
						<p class="ps-kick">Servis i montaža · Osijek +30 km</p>
						<p class="ps-h">Klima ne hladi? Javite se — dolazimo brzo.</p>
						<div class="ps-cards"><span>Servis</span><span>Montaža</span><span>Čišćenje</span></div>
						<div class="ps-img"></div>
						<p class="ps-small">Recenzije · Područje rada · Što uključuje servis</p>
					</div>
					<div class="ps-call"><?php zaec_the_icon( 'phone', 16, '', 'bold' ); ?> Nazovite odmah</div>
					<div class="ps-notif" data-notif>
						<span class="ps-notif-ico"><?php zaec_the_icon( 'letter', 14, '', 'bold' ); ?></span>
						<div><b>Novi upit</b><span data-notif-text>Servis klime · Osijek</span></div>
					</div>
				</div>
			</div>
			<figcaption class="mono">Primjer prikaza — izmišljeni obrt</figcaption>
		</figure>
	</div>
</section>

<!-- 06 PROCES -->
<section class="ch ch-process" id="proces" data-world aria-labelledby="process-title">
	<div class="wrap ch-grid">
		<div class="ch-copy process-head">
			<p class="kicker"><?php echo esc_html( $h( 'process_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'process_title' ), 'h2', 'h2', true, 'process-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'process_lead' ) ); ?></p>
		</div>
	</div>
	<ol class="wrap steps" role="list">
		<?php foreach ( zaec_home_process() as $i => $s ) : ?>
			<li class="step" data-cam="p<?php echo (int) $i + 1; ?>" data-step="<?php echo (int) $i; ?>">
				<div class="step-card panel">
					<div class="step-top"><span class="code-tag"><?php echo esc_html( $s[0] ); ?></span><span class="step-meta mono"><?php echo esc_html( $s[3] ); ?></span></div>
					<h3><?php echo esc_html( $s[1] ); ?></h3>
					<p><?php echo esc_html( $s[2] ); ?></p>
					<div class="step-bar" aria-hidden="true"><i style="--p:<?php echo esc_attr( (string) ( ( $i + 1 ) / 4 ) ); ?>"></i></div>
				</div>
			</li>
		<?php endforeach; ?>
	</ol>
</section>

<!-- 07 RADOVI -->
<section class="sheet section work" id="radovi" aria-labelledby="work-title">
	<div class="wrap">
		<div class="section-head section-head--split">
			<div class="stack" style="--stack:22px">
				<p class="kicker"><?php echo esc_html( $h( 'work_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'work_title' ), 'h2', 'h2', true, 'work-title' ); ?>
			</div>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'work_lead' ) ); ?></p>
		</div>
		<?php if ( $projects ) : ?>
			<div class="pgrid">
				<?php foreach ( $projects as $p ) : ?>
					<?php get_template_part( 'template-parts/project-card', null, array( 'p' => $p ) ); ?>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
		<?php get_template_part( 'template-parts/proof', null, array( 'report' => true ) ); ?>
		<p class="work-more" data-reveal><a class="link-arrow" href="<?php echo esc_url( (string) get_post_type_archive_link( 'projekti' ) ); ?>">Svi radovi <?php zaec_the_icon( 'arrow-right', 16 ); ?></a></p>
	</div>
</section>

<!-- 08 PROCJENA -->
<section class="sheet section" id="procjena" aria-labelledby="cfg-title">
	<div class="wrap">
		<div class="section-head section-head--split">
			<div class="stack" style="--stack:22px">
				<p class="kicker"><?php echo esc_html( $h( 'cfg_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'cfg_title' ), 'h2', 'h2', true, 'cfg-title' ); ?>
			</div>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'cfg_lead' ) ); ?></p>
		</div>
		<?php get_template_part( 'template-parts/configurator', null, array( 'id' => 'cfg-home', 'form_target' => '#upit' ) ); ?>
	</div>
</section>

<!-- 09 USLUGE + BEZ RIZIKA -->
<section class="sheet section services" id="usluge" aria-labelledby="services-title">
	<div class="wrap">
		<div class="section-head section-head--split">
			<div class="stack" style="--stack:22px">
				<p class="kicker"><?php echo esc_html( $h( 'services_kicker' ) ); ?></p>
				<?php zaec_heading( $h( 'services_title' ), 'h2', 'h2', true, 'services-title' ); ?>
			</div>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'services_lead' ) ); ?></p>
		</div>
		<ul class="svc-grid" role="list" data-stagger="0.05">
			<?php foreach ( zaec_services() as $s ) : ?>
				<li data-reveal>
					<a class="svc card" href="<?php echo esc_url( zaec_url( $s['key'] ) ); ?>">
						<span class="svc-top"><span class="code-tag"><?php echo esc_html( $s['code'] ); ?></span><?php zaec_the_icon( zaec_service_icon( $s['key'] ), 26 ); ?></span>
						<h3><?php echo esc_html( $s['title'] ); ?></h3>
						<p><?php echo esc_html( zaec_service_blurb( $s['key'] ) ); ?></p>
						<span class="svc-go">Saznajte više <?php zaec_the_icon( 'arrow-right', 16 ); ?></span>
					</a>
				</li>
			<?php endforeach; ?>
			<li data-reveal>
				<a class="svc svc--cta card" href="<?php echo esc_url( zaec_url( 'provjera-vidljivosti' ) ); ?>">
					<span class="svc-top"><span class="code-tag">0 €</span><?php zaec_the_icon( 'magnifer', 26 ); ?></span>
					<h3>Ne znate odakle krenuti?</h3>
					<p>Besplatna provjera vidljivosti: Google, karta, AI i tri konkurenta — uz tri konkretna koraka.</p>
					<span class="svc-go">Zatražite provjeru <?php zaec_the_icon( 'arrow-right', 16 ); ?></span>
				</a>
			</li>
		</ul>

		<div class="principles">
			<div class="principles-head">
				<p class="kicker">Bez rizika za vas</p>
				<h3 class="h3">Šest razloga da se javite — danas.</h3>
			</div>
			<ul class="principles-list" role="list" data-stagger="0.06">
				<?php foreach ( zaec_guarantees() as $g ) : ?>
					<li data-reveal><?php zaec_the_icon( $g[0], 22 ); ?><div><b><?php echo esc_html( $g[1] ); ?></b><p><?php echo esc_html( $g[2] ); ?></p></div></li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</section>

<!-- 10 TKO -->
<section class="sheet sheet--ink section who" id="tko" data-header-theme="night" aria-labelledby="who-title">
	<div class="wrap who-grid">
		<div class="stack" style="--stack:24px">
			<p class="kicker"><?php echo esc_html( $h( 'who_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'who_title' ), 'h2', 'h2', true, 'who-title' ); ?>
		</div>
		<div class="who-body stack" style="--stack:20px">
			<p class="lead" data-reveal><?php echo esc_html( $h( 'who_lead' ) ); ?></p>
			<p data-reveal><?php echo esc_html( $h( 'who_text' ) ); ?></p>
			<ul class="who-facts" role="list" data-stagger="0.08">
				<li data-reveal><b><?php echo esc_html( zaec_option( 'experience', '10+' ) ); ?></b><span>godina rada na webu</span></li>
				<li data-reveal><b>1</b><span>osoba odgovorna za vaš projekt</span></li>
				<li data-reveal><b>0 €</b><span>obaveznih mjesečnih pretplata</span></li>
			</ul>
			<a class="link-arrow" href="<?php echo esc_url( zaec_url( 'o-nama' ) ); ?>" data-reveal>Više o nama <?php zaec_the_icon( 'arrow-right', 16 ); ?></a>
		</div>
	</div>
</section>

<!-- 11 FAQ -->
<section class="sheet section faq" id="pitanja" aria-labelledby="faq-title">
	<div class="wrap faq-grid">
		<div class="faq-side">
			<p class="kicker"><?php echo esc_html( $h( 'faq_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'faq_title' ), 'h2', 'h2', true, 'faq-title' ); ?>
			<p class="muted" data-reveal>Nema odgovora koji tražite? Nazovite <a href="<?php echo esc_attr( zaec_phone_href() ); ?>"><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a> — <?php echo esc_html( zaec_option( 'hours' ) ); ?>.</p>
			<?php if ( $guides ) : ?>
				<div class="guides-mini" data-reveal>
					<p class="mono">Vodiči</p>
					<ul role="list">
						<?php foreach ( $guides as $g ) : ?>
							<li><a class="link-arrow" href="<?php echo esc_url( get_permalink( $g ) ); ?>"><?php echo esc_html( get_post_meta( $g->ID, '_zaec_short', true ) ? get_post_meta( $g->ID, '_zaec_short', true ) : $g->post_title ); ?> <?php zaec_the_icon( 'arrow-right', 16 ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endif; ?>
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

<!-- 12 UPIT -->
<section class="ch ch-final" id="upit" data-cam="final" data-world aria-labelledby="final-title">
	<div class="wrap final-grid">
		<div class="final-copy">
			<p class="kicker"><?php echo esc_html( $h( 'final_kicker' ) ); ?></p>
			<?php zaec_heading( $h( 'final_title' ), 'h2', 'h2', true, 'final-title' ); ?>
			<p class="lead" data-reveal><?php echo esc_html( $h( 'final_lead' ) ); ?></p>
			<div class="final-contact" data-reveal>
				<a class="tel-big" href="<?php echo esc_attr( zaec_phone_href() ); ?>" data-track="click_to_call"><span class="dot" aria-hidden="true"></span><?php echo esc_html( zaec_option( 'phone_display' ) ); ?></a>
				<p class="mono"><?php echo esc_html( zaec_option( 'hours' ) . ' · ' . zaec_option( 'city' ) ); ?></p>
			</div>
		</div>
		<div class="final-form panel panel--solid" data-reveal>
			<?php get_template_part( 'template-parts/contact-form', null, array( 'id' => 'upit-forma' ) ); ?>
		</div>
	</div>
</section>

<?php
get_footer();
