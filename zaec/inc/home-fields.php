<?php
/**
 * Izgled → ZAEC naslovnica: uređivanje tekstova naslovnice bez diranja koda.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function zaec_home_fields_menu() {
	add_theme_page( 'ZAEC naslovnica', 'ZAEC naslovnica', 'edit_theme_options', 'zaec-home', 'zaec_render_home_fields' );
}
add_action( 'admin_menu', 'zaec_home_fields_menu' );

function zaec_home_fields_register() {
	register_setting(
		'zaec_home_group',
		'zaec_home_texts',
		array(
			'type'              => 'array',
			'sanitize_callback' => 'zaec_home_fields_sanitize',
			'default'           => array(),
		)
	);
}
add_action( 'admin_init', 'zaec_home_fields_register' );

function zaec_home_fields_sanitize( $input ) {
	$out  = array();
	$keys = array_merge( array_keys( zaec_home_defaults() ), array( 'faq_custom' ) );
	foreach ( $keys as $k ) {
		if ( ! isset( $input[ $k ] ) ) {
			continue;
		}
		$v = wp_unslash( $input[ $k ] );
		$out[ $k ] = 'faq_custom' === $k ? sanitize_textarea_field( $v ) : wp_kses( $v, array( 'em' => array(), 'strong' => array(), 'br' => array() ) );
	}
	return $out;
}

function zaec_render_home_fields() {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}
	$saved    = (array) get_option( 'zaec_home_texts', array() );
	$defaults = zaec_home_defaults();
	$groups   = array();
	foreach ( $defaults as $k => $v ) {
		$groups[ strtok( $k, '_' ) ][ $k ] = $v;
	}
	$names = array( 'hero' => 'Hero', 'problem' => 'Problem', 'trades' => 'Djelatnosti', 'system' => 'Sustav (5 slojeva)', 'night' => 'Noć / 0–24', 'process' => 'Proces', 'work' => 'Radovi', 'cfg' => 'Procjena', 'services' => 'Usluge', 'who' => 'Tko', 'faq' => 'Pitanja', 'final' => 'Završni upit' );
	?>
	<div class="wrap">
		<h1>ZAEC — tekstovi naslovnice</h1>
		<p>Prazno polje = zadani tekst (prikazan kao placeholder). U naslovima možete koristiti <code>&lt;em&gt;riječ&lt;/em&gt;</code> za istaknutu (kurziv, plava) riječ.</p>
		<form action="options.php" method="post">
			<?php settings_fields( 'zaec_home_group' ); ?>
			<?php foreach ( $groups as $g => $fields ) : ?>
				<h2 style="margin-top:2rem"><?php echo esc_html( $names[ $g ] ?? ucfirst( $g ) ); ?></h2>
				<table class="form-table" role="presentation">
					<?php foreach ( $fields as $k => $def ) :
						$val = isset( $saved[ $k ] ) ? $saved[ $k ] : '';
						?>
						<tr>
							<th scope="row"><label for="zh-<?php echo esc_attr( $k ); ?>"><?php echo esc_html( $k ); ?></label></th>
							<td>
								<?php if ( strlen( $def ) > 90 ) : ?>
									<textarea class="large-text" rows="3" id="zh-<?php echo esc_attr( $k ); ?>" name="zaec_home_texts[<?php echo esc_attr( $k ); ?>]" placeholder="<?php echo esc_attr( $def ); ?>"><?php echo esc_textarea( $val ); ?></textarea>
								<?php else : ?>
									<input class="large-text" type="text" id="zh-<?php echo esc_attr( $k ); ?>" name="zaec_home_texts[<?php echo esc_attr( $k ); ?>]" value="<?php echo esc_attr( $val ); ?>" placeholder="<?php echo esc_attr( $def ); ?>">
								<?php endif; ?>
							</td>
						</tr>
					<?php endforeach; ?>
				</table>
			<?php endforeach; ?>
			<h2 style="margin-top:2rem">Pitanja (FAQ)</h2>
			<p class="description">Jedno pitanje po retku u obliku <code>Pitanje | Odgovor</code>. Prazno = zadana pitanja. FAQ schema se generira iz istog sadržaja.</p>
			<textarea class="large-text code" rows="10" name="zaec_home_texts[faq_custom]"><?php echo esc_textarea( $saved['faq_custom'] ?? '' ); ?></textarea>
			<?php submit_button( 'Spremi tekstove' ); ?>
		</form>
	</div>
	<?php
}
