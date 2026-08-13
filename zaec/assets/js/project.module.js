/*
 * ZAEC blueprint case study — single projekt.
 * Nativni scroll + ScrollTrigger scrub; bez smooth-scroll wrappera (Lenis).
 * Statični sadržaj ostaje potpun bez JS-a; GSAP samo dodaje ulaze, rail i
 * pinanu galeriju ekrana.
 */
(function () {
	'use strict';

	var root = document.querySelector('.zaec-case');
	if (!root) {
		return;
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	var gsap = window.gsap;
	var ScrollTrigger = window.ScrollTrigger;
	var revealItems = Array.prototype.slice.call(root.querySelectorAll('[data-case-reveal]'));
	var scenes = Array.prototype.slice.call(root.querySelectorAll('[data-case-scene]'));
	var code = root.querySelector('[data-case-code]');
	var preview = root.querySelector('[data-case-preview]');
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
		root.querySelectorAll('[data-case-story-progress], [data-case-railfill]').forEach(function (p) {
			p.style.transform = 'scaleY(1)';
		});
		var topProgress = root.querySelector('[data-case-progress]');
		if (topProgress) {
			topProgress.style.transform = 'scaleX(1)';
		}
	}

	function initRail() {
		var links = Array.prototype.slice.call(root.querySelectorAll('[data-case-rail]'));
		if (!links.length) {
			return;
		}
		var fill = root.querySelector('[data-case-railfill]');
		var targets = links
			.map(function (link) {
				var id = link.getAttribute('data-case-rail');
				var el = id ? document.getElementById(id) : null;
				return el ? { link: link, el: el } : null;
			})
			.filter(Boolean);

		var activate = function (id) {
			links.forEach(function (link) {
				link.classList.toggle('on', link.getAttribute('data-case-rail') === id);
			});
		};

		// Čiste #id veze + native smooth scroll — bez ovisnosti o wrapperu.
		links.forEach(function (link) {
			link.addEventListener('click', function (event) {
				var id = link.getAttribute('data-case-rail');
				var target = document.getElementById(id);
				if (!target) {
					return;
				}
				event.preventDefault();
				if (reduce) {
					target.scrollIntoView({ block: 'start' });
				} else {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
				activate(id);
			});
		});

		if ('IntersectionObserver' in window) {
			var observer = new IntersectionObserver(
				function (entries) {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
							activate(entry.target.id);
						}
					});
				},
				{ rootMargin: '-42% 0px -52% 0px', threshold: 0 }
			);
			targets.forEach(function (t) {
				observer.observe(t.el);
			});
		}

		if (fill && ScrollTrigger && !reduce) {
			gsap.fromTo(
				fill,
				{ scaleY: 0 },
				{
					scaleY: 1,
					ease: 'none',
					scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
				}
			);
		}
	}

	function initProgress() {
		var bar = root.querySelector('[data-case-progress]');
		if (!bar) {
			return;
		}
		if (reduce) {
			bar.style.transform = 'scaleX(1)';
			return;
		}
		if (ScrollTrigger) {
			gsap.fromTo(
				bar,
				{ scaleX: 0 },
				{
					scaleX: 1,
					ease: 'none',
					scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
				}
			);
			return;
		}
		var tick = function () {
			var doc = document.documentElement;
			var max = Math.max(1, doc.scrollHeight - window.innerHeight);
			bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, (window.scrollY || 0) / max)) + ')';
		};
		window.addEventListener('scroll', tick, { passive: true });
		tick();
	}

	function setupGallery() {
		var gallery = root.querySelector('[data-case-gallery]');
		var viewport = root.querySelector('[data-case-gallery-viewport]');
		var track = root.querySelector('[data-case-gallery-track]');
		if (!gallery || !viewport || !track || !window.matchMedia('(min-width: 768px)').matches) {
			return;
		}

		var cards = Array.prototype.slice.call(track.querySelectorAll('.zaec-case-shot'));
		if (cards.length < 2) {
			return;
		}
		track.classList.add('is-horizontal');
		viewport.classList.add('is-horizontal');
		var indexLabel = gallery.querySelector('[data-case-gallery-index]');
		var progressBar = gallery.querySelector('[data-case-gallery-progress]');
		var distance = function () {
			return Math.max(0, track.scrollWidth - viewport.clientWidth);
		};
		var updateUi = function (progress) {
			var current = Math.min(cards.length, Math.max(1, Math.round(progress * (cards.length - 1)) + 1));
			if (indexLabel) {
				indexLabel.textContent = ('0' + current).slice(-2) + ' / ' + ('0' + cards.length).slice(-2);
			}
			if (progressBar) {
				progressBar.style.transform = 'scaleX(' + progress + ')';
			}
		};
		// scrub:true → track prati scroll 1:1, bez zaostajanja.
		var galleryTween = gsap.to(track, {
			x: function () {
				return -distance();
			},
			ease: 'none',
			scrollTrigger: {
				trigger: gallery,
				start: 'top top',
				end: function () {
					return '+=' + distance();
				},
				pin: true,
				scrub: true,
				invalidateOnRefresh: true,
				onUpdate: function (self) {
					updateUi(self.progress);
				},
			},
		});
		var trigger = galleryTween.scrollTrigger;
		updateUi(0);

		var drag = null;
		viewport.addEventListener(
			'pointerdown',
			function (event) {
				if (event.pointerType === 'mouse' && event.button !== 0) {
					return;
				}
				if (distance() <= 0) {
					return;
				}
				drag = { startX: event.clientX, startProgress: trigger.progress };
				viewport.classList.add('is-dragging');
				document.documentElement.style.scrollBehavior = 'auto';
				try {
					viewport.setPointerCapture(event.pointerId);
				} catch (captureError) {}
			},
			{ passive: true }
		);
		viewport.addEventListener(
			'pointermove',
			function (event) {
				if (!drag) {
					return;
				}
				var delta = (drag.startX - event.clientX) / Math.max(distance(), 1);
				var nextProgress = Math.max(0, Math.min(1, drag.startProgress + delta));
				trigger.scroll(trigger.start + nextProgress * (trigger.end - trigger.start));
				event.preventDefault();
			},
			{ passive: false }
		);
		var endDrag = function (event) {
			if (!drag) {
				return;
			}
			drag = null;
			viewport.classList.remove('is-dragging');
			document.documentElement.style.scrollBehavior = '';
			if (event) {
				try {
					viewport.releasePointerCapture(event.pointerId);
				} catch (releaseError) {}
			}
		};
		viewport.addEventListener('pointerup', endDrag, { passive: true });
		viewport.addEventListener('pointercancel', endDrag, { passive: true });
		window.addEventListener(
			'load',
			function () {
				ScrollTrigger.refresh();
			},
			{ once: true }
		);
	}

	if (!gsap || !ScrollTrigger || reduce) {
		staticState();
		initRail();
		initProgress();
		return;
	}

	gsap.registerPlugin(ScrollTrigger);
	var refreshTimer = null;
	window.addEventListener(
		'resize',
		function () {
			clearTimeout(refreshTimer);
			refreshTimer = setTimeout(function () {
				ScrollTrigger.refresh();
			}, 180);
		},
		{ passive: true }
	);

	var canClip = window.CSS && (CSS.supports('clip-path', 'inset(0)') || CSS.supports('-webkit-clip-path', 'inset(0)'));
	var codeText = code ? code.textContent : '';
	if (code) {
		code.textContent = '';
	}

	// Hero boot-up: intro → preview, ukupno ispod 1 sekunde.
	revealItems.forEach(function (item, index) {
		var from = { opacity: 0, y: 18 };
		if (canClip) {
			from.clipPath = 'inset(0 0 100% 0)';
		}
		gsap.fromTo(
			item,
			from,
			{
				opacity: 1,
				y: 0,
				clipPath: canClip ? 'inset(0 0 0% 0)' : undefined,
				webkitClipPath: canClip ? 'inset(0 0 0% 0)' : undefined,
				duration: 0.42,
				delay: Math.min(index * 0.07, 0.28),
				ease: 'power3.out',
				overwrite: 'auto',
				onComplete: function () {
					item.style.opacity = '1';
					item.style.transform = 'none';
					item.style.clipPath = 'none';
					item.style.webkitClipPath = 'none';
				},
			}
		);
	});

	if (code && codeText) {
		var counter = { value: 0 };
		gsap.to(counter, {
			value: codeText.length,
			duration: 0.42,
			delay: 0.08,
			ease: 'none',
			onUpdate: function () {
				code.textContent = codeText.slice(0, Math.round(counter.value));
			},
		});
	}

	// Preview: blagi scrub parallax na browser frame + vrlo mali tilt samo na finim pokazivačima.
	if (preview) {
		var browser = preview.querySelector('.zaec-case-browser');
		if (browser) {
			gsap.fromTo(
				browser,
				{ y: 26 },
				{
					y: -26,
					ease: 'none',
					scrollTrigger: { trigger: preview, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
				}
			);
		}
		if (finePointer) {
			var pX = gsap.quickTo(preview, 'rotationX', { duration: 0.5, ease: 'power3.out' });
			var pY = gsap.quickTo(preview, 'rotationY', { duration: 0.5, ease: 'power3.out' });
			preview.addEventListener(
				'pointermove',
				function (event) {
					var rect = preview.getBoundingClientRect();
					var nx = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
					var ny = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)));
					pX(-ny * 1.6);
					pY(nx * 2.4);
				},
				{ passive: true }
			);
			preview.addEventListener(
				'pointerleave',
				function () {
					pX(0);
					pY(0);
				},
				{ passive: true }
			);
		}
	}

	initRail();
	initProgress();
	setupGallery();

	scenes.forEach(function (scene) {
		var pieces = scene.querySelectorAll(
			'.zaec-case-spec__row, .zaec-case-outcome, .zaec-case-story__body, .zaec-case-shot, .zaec-case-outro__cta, .zaec-case-next'
		);
		if (!pieces.length) {
			return;
		}
		gsap.fromTo(
			pieces,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.06,
				duration: 0.42,
				ease: 'power2.out',
				scrollTrigger: { trigger: scene, start: 'top 82%', once: true },
			}
		);
	});

	var storyProgress = root.querySelector('[data-case-story-progress]');
	var story = root.querySelector('.zaec-case-story');
	if (storyProgress && story) {
		gsap.fromTo(
			storyProgress,
			{ scaleY: 0 },
			{
				scaleY: 1,
				ease: 'none',
				scrollTrigger: { trigger: story, start: 'top 72%', end: 'bottom 72%', scrub: 0.35 },
			}
		);
	}
})();
