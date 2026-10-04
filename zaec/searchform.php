<?php
/**
 * Obrazac pretrage.
 *
 * @package ZAEC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="sr-only" for="s-<?php echo esc_attr( wp_unique_id() ); ?>">Pretraži</label>
	<input class="input" type="search" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" placeholder="Pretražite vodiče i stranice…">
	<button class="btn btn--sm" type="submit">Traži</button>
</form>
