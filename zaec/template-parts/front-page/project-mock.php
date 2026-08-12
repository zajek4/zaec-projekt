<?php
/**
 * Static architectural browser mockups from the original ZAEC source.
 * These are visual-system assets, not CMS content. Future project CPT data can
 * reuse the same presentation without coupling content to this SVG markup.
 *
 * @package ZAEC
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
$variant = isset( $args['variant'] ) ? absint( $args['variant'] ) % 3 : 0;
switch ( $variant ) {
	case 0:
?>
<div class="proj-mock">
          <svg viewBox="0 0 320 200">
            <g fill="none" class="mk">
              <rect x="52" y="18" width="216" height="140" rx="4"/>
              <path d="M40 172h240l-12-14H52z"/>
              <path d="M52 38h216"/><circle cx="62" cy="28" r="2.4"/><circle cx="72" cy="28" r="2.4"/><circle cx="82" cy="28" r="2.4"/>
              <rect x="92" y="24" width="140" height="8" rx="2" class="mk-dim"/>
              <rect x="66" y="50" width="90" height="10" class="mk-hi"/>
              <rect x="66" y="66" width="70" height="5" class="mk-dim"/><rect x="66" y="75" width="80" height="5" class="mk-dim"/>
              <rect x="66" y="90" width="46" height="14" class="mk-acc"/>
              <rect x="176" y="50" width="78" height="58"/>
              <circle cx="215" cy="76" r="10" class="mk-acc"/><path d="M215 70v12M209 76h12" class="mk-acc"/>
              <path d="M66 118h188M66 128h120M66 138h150" class="mk-dim"/>
            </g>
          </svg>
        </div>
<?php
		break;
	case 1:
?>
<div class="proj-mock">
          <svg viewBox="0 0 320 200">
            <g fill="none" class="mk">
              <rect x="20" y="16" width="280" height="168" rx="4"/>
              <path d="M20 36h280"/><circle cx="30" cy="26" r="2.4"/><circle cx="40" cy="26" r="2.4"/><circle cx="50" cy="26" r="2.4"/>
              <rect x="34" y="48" width="120" height="74"/>
              <rect x="166" y="48" width="120" height="34"/>
              <rect x="166" y="88" width="120" height="34"/>
              <path d="M44 110l26-32 18 20 14-14 28 26" class="mk-hi"/>
              <path d="M176 60h100M176 70h70M176 100h100M176 110h60" class="mk-dim"/>
              <rect x="34" y="134" width="76" height="36"/><rect x="122" y="134" width="76" height="36"/><rect x="210" y="134" width="76" height="36"/>
              <path d="M42 146h60M42 156h44M130 146h60M130 156h40M218 146h60M218 156h48" class="mk-dim"/>
            </g>
          </svg>
        </div>
<?php
		break;
	case 2:
?>
<div class="proj-mock">
          <svg viewBox="0 0 320 200">
            <g fill="none" class="mk">
              <rect x="20" y="16" width="280" height="168" rx="4"/>
              <path d="M20 36h280"/><circle cx="30" cy="26" r="2.4"/><circle cx="40" cy="26" r="2.4"/><circle cx="50" cy="26" r="2.4"/>
              <rect x="34" y="50" width="120" height="120"/>
              <path d="M44 66h90M44 66v14M44 80h90" class="mk-dim"/>
              <rect x="44" y="92" width="90" height="12" class="mk-dim"/>
              <rect x="44" y="112" width="90" height="12" class="mk-dim"/>
              <rect x="44" y="136" width="56" height="20" class="mk-acc"/>
              <rect x="166" y="50" width="120" height="56"/>
              <rect x="166" y="114" width="56" height="56"/>
              <rect x="230" y="114" width="56" height="56"/>
              <path d="M176 78l22-16 22 16 20-14 24 16" class="mk-hi"/>
              <path d="M176 130h36M176 140h26M240 130h36M240 140h24" class="mk-dim"/>
            </g>
          </svg>
        </div>
<?php
		break;
}
?>
