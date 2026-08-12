<?php $faqs = zaec_front_repeater( 'faqs' ); ?>
<section id="faq" class="sec sec-paper2" data-theme="light">
	<div class="crops" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="deco deco-q" viewBox="0 0 220 330" data-plx="24" aria-hidden="true"><text x="66" y="296" font-size="320" class="d-big">?</text></svg>
	<span class="sec-num" data-plx="60" aria-hidden="true">09</span>
	<svg class="wm wm-br" viewBox="0 0 100 100" data-plx="40" aria-hidden="true"><use href="#zMon"/></svg>
	<div class="wrap wrap-narrow">
		<div class="sec-head"><p class="kicker"><?php echo esc_html( zaec_front_field( 'faq_kicker' ) ); ?></p><h2><?php echo esc_html( zaec_front_field( 'faq_title' ) ); ?></h2></div>
		<div class="faq-list">
			<?php foreach ( $faqs as $index => $faq ) : $answer_id = 'faq-answer-' . ( $index + 1 ); ?>
				<div class="faq-item">
					<button type="button" class="faq-q" aria-expanded="false" aria-controls="<?php echo esc_attr( $answer_id ); ?>"><span><i>Q.<?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></i><?php echo esc_html( $faq['question'] ); ?></span><em class="faq-plus" aria-hidden="true"></em></button>
					<div class="faq-a" id="<?php echo esc_attr( $answer_id ); ?>"><p><?php echo esc_html( $faq['answer'] ); ?></p></div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
<div class="marquee mq-rev" data-theme="dark" aria-hidden="true"><div class="mq-track"><span>Predložak // Po nacrtu // Google Business // Analytics // WooCommerce // Corvus Pay // Transparentan opseg //&nbsp;</span><span>Predložak // Po nacrtu // Google Business // Analytics // WooCommerce // Corvus Pay // Transparentan opseg //&nbsp;</span></div></div>
