<?php
/**
 * Potvrđene izjave klijenata i trust poruke.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$quotes = zaec_front_repeater( 'testimonials' );
$trust  = zaec_front_repeater( 'trust_stats' );
$total  = count( $quotes );
?>
<section id="klijenti" class="sec sec-paper" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="deco deco-quote" viewBox="0 0 260 320" data-plx="28" aria-hidden="true"><text x="24" y="288" font-size="300" class="d-big">“</text></svg>
	<span class="sec-num" data-plx="70" aria-hidden="true">08</span>
	<div class="wrap">
		<div class="sec-head offset">
			<p class="kicker"><?php echo esc_html( zaec_front_field( 'klijenti_kicker' ) ); ?></p>
			<h2><?php echo esc_html( zaec_front_field( 'klijenti_title' ) ); ?></h2>
			<p class="lead"><?php echo esc_html( zaec_front_field( 'klijenti_lead' ) ); ?></p>
		</div>

		<?php if ( $quotes ) : ?>
			<div class="carousel" id="carousel">
				<div class="car-viewport">
					<div class="car-track" id="carTrack">
						<?php foreach ( $quotes as $index => $quote ) : ?>
							<blockquote class="quote-card" id="quote-<?php echo esc_attr( $index + 1 ); ?>">
								<div class="quote-proof" aria-label="<?php esc_attr_e( 'Potvrđena izjava klijenta', 'zaec' ); ?>"><?php esc_html_e( '[ POTVRĐENA IZJAVA ]', 'zaec' ); ?></div>
								<p>“<?php echo esc_html( $quote['quote'] ); ?>”</p>
								<footer><b><?php echo esc_html( $quote['name'] ); ?></b><span class="q-role"><i><?php echo esc_html( $quote['role'] ); ?></i><i><?php echo esc_html( $quote['company'] ); ?></i></span></footer>
							</blockquote>
						<?php endforeach; ?>
					</div>
				</div>
				<div class="car-controls">
					<button type="button" id="carPrev" aria-label="<?php esc_attr_e( 'Prethodna izjava', 'zaec' ); ?>"><svg class="ar ar-flip" aria-hidden="true"><use href="#ic-arrow"/></svg></button>
					<div class="car-dots" id="carDots" role="tablist" aria-label="<?php esc_attr_e( 'Izjava', 'zaec' ); ?>">
						<?php foreach ( $quotes as $index => $quote ) : ?>
							<button type="button" role="tab"<?php echo 0 === $index ? ' class="active" aria-selected="true"' : ' aria-selected="false"'; ?> aria-controls="quote-<?php echo esc_attr( $index + 1 ); ?>" aria-label="<?php echo esc_attr( sprintf( 'Izjava %1$d od %2$d', $index + 1, $total ) ); ?>"></button>
						<?php endforeach; ?>
					</div>
					<button type="button" id="carNext" aria-label="<?php esc_attr_e( 'Sljedeća izjava', 'zaec' ); ?>"><svg class="ar" aria-hidden="true"><use href="#ic-arrow"/></svg></button>
				</div>
			</div>
		<?php else : ?>
			<div class="testimonials-empty">
				<p class="kicker">[ POTVRĐENE RIJEČI ]</p>
				<h3><?php esc_html_e( 'Povjerenje nećemo izmišljati.', 'zaec' ); ?></h3>
				<p><?php esc_html_e( 'Ovdje objavljujemo samo izjave stvarnih klijenata koje su potvrđene za objavu. Dok ih ne unesemo, radije ćemo pokazati kako radimo nego popuniti prostor izmišljenim imenima.', 'zaec' ); ?></p>
			</div>
		<?php endif; ?>

		<?php if ( $trust ) : ?>
			<div class="trust-strip" data-plx="22">
				<?php foreach ( $trust as $item ) : ?>
					<?php
					$value     = isset( $item['value'] ) ? trim( $item['value'] ) : '';
					$countable = preg_match( '/^(\d+)(\+?)$/', $value, $match );
					?>
					<div class="trust-cell"><b><?php if ( $countable ) : ?><span><?php echo esc_html( $match[1] ); ?></span><?php echo esc_html( $match[2] ); ?><?php else : ?><?php echo esc_html( $value ); ?><?php endif; ?></b><span><?php echo esc_html( $item['label'] ); ?></span></div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>
