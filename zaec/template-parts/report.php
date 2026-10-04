<?php
/**
 * Primjer mjesečnog izvještaja — ilustrativni podaci, jasno označeno.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$r   = zaec_sample_report();
$max = max( $r['bars'] );
?>
<figure class="report" data-reveal aria-label="Primjer mjesečnog izvještaja s ilustrativnim podacima">
	<div class="report-head">
		<span class="report-dot" aria-hidden="true"></span>
		<b>Mjesečni izvještaj</b>
		<span class="report-badge mono">Primjer · ilustrativni podaci</span>
	</div>
	<div class="report-kpis">
		<?php foreach ( $r['kpis'] as $k ) : ?>
			<div><span class="mono"><?php echo esc_html( $k[0] ); ?></span><b><?php echo esc_html( $k[1] ); ?></b><em><?php echo esc_html( $k[2] ); ?></em></div>
		<?php endforeach; ?>
	</div>
	<div class="report-chart" aria-hidden="true">
		<?php foreach ( $r['bars'] as $i => $b ) : ?>
			<i style="--h:<?php echo esc_attr( (string) round( $b / $max * 100 ) ); ?>%;--i:<?php echo (int) $i; ?>"></i>
		<?php endforeach; ?>
	</div>
	<ul class="report-src" role="list">
		<?php foreach ( $r['sources'] as $s ) : ?>
			<li><span><?php echo esc_html( $s[0] ); ?></span><i style="--w:<?php echo (int) $s[1]; ?>%"></i><b><?php echo (int) $s[1]; ?> %</b></li>
		<?php endforeach; ?>
	</ul>
	<figcaption class="mono">Ovako izgleda izvještaj koji dobivate — vaš koristi vaše stvarne brojke iz GA4 i Search Consolea.</figcaption>
</figure>
