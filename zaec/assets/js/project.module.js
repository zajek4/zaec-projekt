/*
 * ZAEC project showroom.
 * Statični sadržaj ostaje potpun; GSAP samo dodaje kratke, reverzibilne ulaze.
 */
(function () {
	'use strict';

	var root = document.querySelector('.zaec-project-showroom');
	if (!root) {
		return;
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	var gsap = window.gsap;
	var ScrollTrigger = window.ScrollTrigger;
	var revealItems = Array.prototype.slice.call(root.querySelectorAll('[data-project-reveal]'));
	var scenes = Array.prototype.slice.call(root.querySelectorAll('[data-project-scene]'));
	var code = root.querySelector('[data-project-code]');
	var devices = root.querySelector('.zaec-project-showroom-devices');
	var images = Array.prototype.slice.call(root.querySelectorAll('img'));

	images.forEach(function (image) {
		image.addEventListener('error', function () {
			image.hidden = true;
		});
	});

	function staticState() {
		revealItems.forEach(function (item) {
			item.style.opacity = '1';
			item.style.transform = 'none';
			item.style.clipPath = 'none';
			item.style.webkitClipPath = 'none';
		});
		if (code) {
			code.style.opacity = '1';
		}
		var progress = root.querySelector('[data-story-progress]');
		if (progress) {
			progress.style.transform = 'scaleY(1)';
		}
	}

	if (!gsap || !ScrollTrigger || reduce) {
		staticState();
		return;
	}

	gsap.registerPlugin(ScrollTrigger);

	var canClip = window.CSS && (CSS.supports('clip-path', 'inset(0)') || CSS.supports('-webkit-clip-path', 'inset(0)'));
	var codeText = code ? code.textContent : '';
	if (code) {
		code.textContent = '';
	}

	// Hero boot-up: naslov → meta → uređaji → CTA, ukupno ispod 1.2 sekunde.
	revealItems.forEach(function (item, index) {
		var from = { opacity: 0, y: 18 };
		if (canClip) {
			from.clipPath = 'inset(0 0 100% 0)';
		}
		gsap.fromTo(item, from, {
			opacity: 1,
			y: 0,
			clipPath: canClip ? 'inset(0 0 0% 0)' : undefined,
			webkitClipPath: canClip ? 'inset(0 0 0% 0)' : undefined,
			duration: .42,
			delay: Math.min(index * .07, .28),
				ease: 'power3.out',
				overwrite: 'auto',
				onComplete: function () {
					item.style.opacity = '1';
					item.style.transform = 'none';
					item.style.clipPath = 'none';
					item.style.webkitClipPath = 'none';
				}
			});
	});

	if (code && codeText) {
		var counter = { value: 0 };
		gsap.to(counter, {
			value: codeText.length,
			duration: .42,
			delay: .08,
			ease: 'none',
			onUpdate: function () {
				code.textContent = codeText.slice(0, Math.round(counter.value));
			}
		});
	}

	// Samo desktop dobiva vrlo mali tilt uređaja; touch ostaje potpuno miran.
	if (devices && finePointer) {
		var laptop = devices.querySelector('.zaec-project-device--laptop');
		var phone = devices.querySelector('.zaec-project-device--phone');
		var laptopX = laptop ? gsap.quickTo(laptop, 'rotationX', { duration: .42, ease: 'power3.out' }) : null;
		var laptopY = laptop ? gsap.quickTo(laptop, 'rotationY', { duration: .42, ease: 'power3.out' }) : null;
		var phoneX = phone ? gsap.quickTo(phone, 'rotationX', { duration: .42, ease: 'power3.out' }) : null;
		var phoneY = phone ? gsap.quickTo(phone, 'rotationY', { duration: .42, ease: 'power3.out' }) : null;
		devices.addEventListener('pointermove', function (event) {
			var rect = devices.getBoundingClientRect();
			var nx = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
			var ny = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
			if (laptopX) laptopX(-ny * 2.2);
			if (laptopY) laptopY(-7 + nx * 2.8);
			if (phoneX) phoneX(ny * 1.8);
			if (phoneY) phoneY(-17 + nx * 2.2);
		}, { passive: true });
		devices.addEventListener('pointerleave', function () {
			if (laptopX) laptopX(0);
			if (laptopY) laptopY(-7);
			if (phoneX) phoneX(0);
			if (phoneY) phoneY(-17);
		}, { passive: true });
	}

	if (ScrollTrigger) {
		scenes.forEach(function (scene) {
			var pieces = scene.querySelectorAll('.zaec-project-bento article, .zaec-project-screen-card, .zaec-project-story__body, .zaec-project-next');
			if (!pieces.length) return;
			gsap.fromTo(pieces, { opacity: 0, y: 20 }, {
				opacity: 1,
				y: 0,
				stagger: .06,
				duration: .42,
				ease: 'power2.out',
				scrollTrigger: { trigger: scene, start: 'top 82%', once: true }
			});
		});

		var progress = root.querySelector('[data-story-progress]');
		var story = root.querySelector('.zaec-project-showroom-story');
		if (progress && story) {
			gsap.fromTo(progress, { scaleY: 0 }, {
				scaleY: 1,
				ease: 'none',
				scrollTrigger: { trigger: story, start: 'top 72%', end: 'bottom 72%', scrub: .35 }
			});
		}
	}
})();
