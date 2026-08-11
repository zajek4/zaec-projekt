/*
 * ZAEC project HUD intro.
 * Statični HTML je uvijek čitljiv; GSAP samo dodaje kratki boot-up sloj.
 */
(function () {
	'use strict';

	var root = document.querySelector('.zaec-project-hero');
	if (!root) {
		return;
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var items = Array.prototype.slice.call(root.querySelectorAll('[data-project-reveal]'));
	var code = root.querySelector('[data-project-code]');
	var image = root.querySelector('.zaec-project-hero__media img');
	var hasGsap = !!(window.gsap && !reduce);

	if ( image ) {
		image.addEventListener('error', function () {
			image.hidden = true;
			root.classList.add('zaec-project-hero--no-image');
		});
	}

	function showStatic() {
		items.forEach(function (item) {
			item.style.opacity = '1';
			item.style.transform = 'none';
			item.style.clipPath = 'none';
			item.style.webkitClipPath = 'none';
		});
		if (code) {
			code.style.opacity = '1';
		}
	}

	if (!hasGsap) {
		showStatic();
		return;
	}

	var clipSupported = window.CSS && (CSS.supports('clip-path', 'inset(0)') || CSS.supports('-webkit-clip-path', 'inset(0)'));
	var codeText = code ? code.textContent : '';

	if (code) {
		code.textContent = '';
	}

	items.forEach(function (item, index) {
		var from = { opacity: 0, y: 16 };
		if (clipSupported) {
			from.clipPath = 'inset(0 0 100% 0)';
		}
		window.gsap.fromTo(
			item,
			from,
			{
				opacity: 1,
				y: 0,
				clipPath: clipSupported ? 'inset(0 0 0% 0)' : undefined,
				webkitClipPath: clipSupported ? 'inset(0 0 0% 0)' : undefined,
				duration: 0.42,
				delay: index * 0.07,
				ease: 'power3.out',
				overwrite: 'auto'
			}
		);
	});

	if (code && codeText) {
		var counter = { value: 0 };
		window.gsap.to(counter, {
			value: codeText.length,
			duration: 0.42,
			delay: 0.08,
			ease: 'none',
			onUpdate: function () {
				code.textContent = codeText.slice(0, Math.round(counter.value));
			}
		});
	}
})();
