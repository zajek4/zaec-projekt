/*
 * ZAEC — HERO 01 "MREŽA" (2D karta povezanosti).
 *
 * Obris Hrvatske (SVG vektor, draw-in pri učitavanju) + Europa-konstelacija,
 * pulsirajuće točke (bez teksta i ikonica) i linije s pulsom koji s vremena
 * "skaču" s veze na vezu. Interakcija = suptilni nagib/parallax po mišu.
 *
 * Nativni rAF. Pauza izvan viewporta. Reduced-motion = statičan kadar.
 */
(function () {
	'use strict';

	var section = document.querySelector('.net');
	var stage = document.getElementById('netStage');
	var canvas = document.getElementById('netCanvas');
	var outlineEl = document.getElementById('netOutline');
	if (!section || !stage || !canvas) {
		return;
	}
	var ctx = canvas.getContext('2d');
	if (!ctx) {
		section.classList.add('net--no-gl');
		return;
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

	var W = 0, H = 0, DPR = 1;
	var CRO = { x: 0, y: 0, k: 1 };
	var mobile = false;

	/* ============================================================
	   GEO-BOUNDS Hrvatske (obuhvaća kopno + otoke).
	   Ista projekcija kao SVG obris → čvorovi točno sjedaju na kartu.
	============================================================ */
	var HR_GEO = { xmin: 9.63440, xmax: 13.86880, ymin: -46.55500, ymax: -42.38590, cx: 11.75160, cy: -44.47045, spanX: 4.23440, spanY: 4.16910 };

	var COS = Math.cos(44.5 * Math.PI / 180);
	function projX(lng) { return lng * COS; }
	function projY(lat) { return -lat; }

	var GEO = HR_GEO;

	/* ============================================================
	   EUROPA (konstelacija) + pozicije točaka
	============================================================ */
	var EU = [
		[38.7, -9.5], [43.8, -9.0], [46.0, -2.0], [48.5, -4.5], [50.5, -1.0],
		[51.5, 1.5], [53.0, 5.0], [56.0, 8.0], [58.0, 5.0], [63.0, 5.0],
		[65.0, 12.0], [70.0, 20.0], [69.0, 28.0], [64.0, 30.0], [60.0, 28.0],
		[60.0, 32.0], [56.0, 40.0], [46.0, 32.0], [45.0, 30.0], [41.0, 28.0],
		[40.0, 24.0], [38.0, 22.0], [36.0, 22.0], [36.0, 15.0], [40.0, 18.0],
		[43.0, 10.0], [44.0, 9.0], [43.0, 3.0], [40.0, 0.0], [36.0, -6.0],
		[37.0, -8.5]
	];

	// gradovi unutar Hrvatske (bez oznaka — samo pulsirajuće točke)
	var hrCities = [
		{ lat: 45.55, lng: 18.68 },  // Osijek
		{ lat: 45.81, lng: 15.98 },  // Zagreb
		{ lat: 43.51, lng: 16.44 },  // Split
		{ lat: 45.33, lng: 14.44 },  // Rijeka
		{ lat: 44.12, lng: 15.23 },  // Zadar
		{ lat: 42.64, lng: 18.11 }   // Dubrovnik
	];

	// djelatnosti (desno, bez oznaka)
	var bizOffsets = [
		{ dx: 0.47, dy: -0.27 },
		{ dx: 0.47, dy: 0.0 },
		{ dx: 0.47, dy: 0.27 }
	];

	// Europa
	var euOffsets = [
		{ dx: -0.62, dy: -0.30 },
		{ dx: -0.84, dy: -0.16 },
		{ dx: -0.72, dy: 0.22 },
		{ dx: -1.12, dy: -0.50 }
	];

	/* ============================================================
	   LAYOUT
	============================================================ */
	function resize() {
		var rect = stage.getBoundingClientRect();
		W = Math.max(320, rect.width);
		H = Math.max(320, rect.height);
		DPR = Math.min(window.devicePixelRatio || 1, 2);
		canvas.width = Math.round(W * DPR);
		canvas.height = Math.round(H * DPR);
		canvas.style.width = W + 'px';
		canvas.style.height = H + 'px';
		ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
		mobile = W < 900;
		// Desktop: karta desno od sadržaja. Mobile: karta centrirana iza teksta.
		CRO.x = W * (mobile ? 0.5 : 0.62);
		CRO.y = H * (mobile ? 0.5 : 0.5);
		var oh = Math.min(W, H) * (mobile ? 0.66 : 0.56);
		CRO.k = oh / GEO.spanY;
		buildNodes();
		buildLinks();
		layoutOutline();
	}

	function geoToXy(lat, lng) {
		return {
			x: CRO.x + (projX(lng) - GEO.cx) * CRO.k,
			y: CRO.y + (projY(lat) - GEO.cy) * CRO.k
		};
	}

	var outlineW = 0, outlineH = 0;
	function layoutOutline() {
		if (!outlineEl) return;
		outlineW = GEO.spanX * CRO.k;
		outlineH = GEO.spanY * CRO.k;
		outlineEl.style.width = outlineW + 'px';
		outlineEl.style.height = outlineH + 'px';
		outlineEl.style.left = (CRO.x - outlineW / 2) + 'px';
		outlineEl.style.top = (CRO.y - outlineH / 2) + 'px';
	}
	function applyOutlineParallax(px, py) {
		if (!outlineEl) return;
		outlineEl.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px)';
	}

	/* ============================================================
	   ČVOROVI + LINIJE (bez teksta)
	============================================================ */
	var NODES = [];
	var LINKS = [];
	var byId = {};

	function buildNodes() {
		var m = Math.min(W, H);
		var sc = mobile ? 0.45 : 1; // mobile: vanjski čvorovi bliže karti
		var list = [];
		hrCities.forEach(function (c, i) {
			var xy = geoToXy(c.lat, c.lng);
			list.push({ id: 'c' + i, x: xy.x, y: xy.y, size: 1, delay: 0.55 + i * 0.06, ph: i * 1.7 });
		});
		bizOffsets.forEach(function (b, i) {
			list.push({ id: 'b' + i, x: CRO.x + b.dx * m * sc, y: CRO.y + b.dy * m * sc, size: 1.25, delay: 1.2 + i * 0.12, ph: 5 + i * 2.1 });
		});
		euOffsets.forEach(function (e, i) {
			list.push({ id: 'e' + i, x: CRO.x + e.dx * m * sc, y: CRO.y + e.dy * m * sc, size: 0.7, delay: 1.8 + i * 0.1, ph: 8 + i * 1.3 });
		});
		list.forEach(function (n) {
			n.x = Math.max(46, Math.min(W - 46, n.x));
			n.y = Math.max(40, Math.min(H - 34, n.y));
		});
		NODES = list;
		byId = {};
		NODES.forEach(function (n) { byId[n.id] = n; });
	}

	function buildLinks() {
		LINKS = [];
		// unutra: mreža grad ↔ grad
		LINKS.push({ a: 'c1', b: 'c0', tone: 'in' });  // Zagreb–Osijek
		LINKS.push({ a: 'c1', b: 'c2', tone: 'in' });  // Zagreb–Split
		LINKS.push({ a: 'c1', b: 'c3', tone: 'in' });  // Zagreb–Rijeka
		LINKS.push({ a: 'c1', b: 'c4', tone: 'in' });  // Zagreb–Zadar
		LINKS.push({ a: 'c2', b: 'c5', tone: 'in' });  // Split–Dubrovnik
		LINKS.push({ a: 'c3', b: 'c4', tone: 'in' });  // Rijeka–Zadar
		LINKS.push({ a: 'c0', b: 'c3', tone: 'in' });  // Osijek–Rijeka
		LINKS.push({ a: 'c2', b: 'c4', tone: 'in' });  // Split–Zadar
		LINKS.push({ a: 'c4', b: 'c5', tone: 'in' });  // Zadar–Dubrovnik
		LINKS.push({ a: 'c3', b: 'c2', tone: 'in' });  // Rijeka–Split (obala)
		LINKS.push({ a: 'c0', b: 'c4', tone: 'in' });  // Osijek–Zadar
		// izvana: Europa → gradovi
		LINKS.push({ a: 'e0', b: 'c1', tone: 'eu' });  // Beč–Zagreb
		LINKS.push({ a: 'e0', b: 'c0', tone: 'eu' });  // Beč–Osijek
		LINKS.push({ a: 'e1', b: 'c1', tone: 'eu' });  // München–Zagreb
		LINKS.push({ a: 'e1', b: 'c3', tone: 'eu' });  // München–Rijeka
		LINKS.push({ a: 'e2', b: 'c3', tone: 'eu' });  // Milano–Rijeka
		LINKS.push({ a: 'e3', b: 'c1', tone: 'eu' });  // London–Zagreb
		// djelatnosti → gradovi
		LINKS.push({ a: 'b0', b: 'c1', tone: 'out' });
		LINKS.push({ a: 'b0', b: 'c2', tone: 'out' });
		LINKS.push({ a: 'b1', b: 'c0', tone: 'out' });
		LINKS.push({ a: 'b1', b: 'c3', tone: 'out' });
		LINKS.push({ a: 'b2', b: 'c2', tone: 'out' });
		LINKS.push({ a: 'b2', b: 'c4', tone: 'out' });
	}

	/* ============================================================
	   STANJA ANIMACIJE
	============================================================ */
	var revealed = false;
	var t0 = 0;
	var LINKS_ANIM = {};
	var pulses = [];
	var pings = [];
	var pingTimer = 0;
	var mouse = { x: 0, y: 0, cx: 0, cy: 0, ax: 0, ay: 0 };
	var exit = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };
	var exitCur = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };

	function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
	function easeOutBack(t) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
	function lerp(a, b, t) { return a + (b - a) * t; }
	function clamp01(t) { return Math.max(0, Math.min(1, t)); }

	/* ============================================================
	   CRTANJE
	============================================================ */
	function glow(x, y, r, color, alpha) {
		var g = ctx.createRadialGradient(x, y, 0, x, y, r);
		g.addColorStop(0, color + 'cc');
		g.addColorStop(0.4, color + '33');
		g.addColorStop(1, color + '00');
		ctx.globalAlpha = alpha;
		ctx.fillStyle = g;
		ctx.fillRect(x - r, y - r, r * 2, r * 2);
		ctx.globalAlpha = 1;
	}

	function pointInPoly(lat, lng, poly) {
		var inside = false;
		for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
			var xi = poly[i][1], yi = poly[i][0];
			var xj = poly[j][1], yj = poly[j][0];
			if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
		}
		return inside;
	}

	function drawEurope(t, parX, parY) {
		ctx.save();
		var alpha = 0.15 * easeOut(clamp01(t / 0.8));
		ctx.globalAlpha = alpha;
		ctx.fillStyle = '#9fc3ff';
		for (var lat = 35.5; lat <= 70; lat += 1.05) {
			for (var lng = -9.5; lng <= 39; lng += 1.05) {
				var jitter = Math.sin(lat * 12.9898 + lng * 78.233) * 43758.5453;
				jitter = jitter - Math.floor(jitter);
				if (jitter < 0.4 && pointInPoly(lat, lng, EU)) {
					ctx.fillRect(parX + ((lng + 9.5) / 48.5) * W, parY + ((70 - lat) / 34.5) * H, 1.1, 1.1);
				}
			}
		}
		ctx.restore();
	}

	function linkColor(tone) {
		if (tone === 'in') return '#7dd3ff';
		if (tone === 'eu') return '#a3a39d';
		return '#4d80ff';
	}

	function drawLinks(parX, parY) {
		LINKS.forEach(function (l) {
			var a = byId[l.a], b = byId[l.b];
			if (!a || !b) return;
			var prog = LINKS_ANIM[l.a + '-' + l.b] || 0;
			if (prog <= 0) return;
			var dx = b.x - a.x, dy = b.y - a.y;
			var dist = Math.hypot(dx, dy);
			var nx = dx / dist, ny = dy / dist;
			var len = dist * prog;
			var color = linkColor(l.tone);
			ctx.save();
			ctx.globalAlpha = l.tone === 'eu' ? 0.4 : 0.6;
			ctx.strokeStyle = color;
			ctx.lineWidth = 1.15;
			ctx.beginPath();
			ctx.moveTo(a.x + parX, a.y + parY);
			ctx.lineTo(a.x + parX + nx * len, a.y + parY + ny * len);
			ctx.stroke();
			ctx.restore();
		});
	}

	function drawPulses(parX, parY) {
		pulses.forEach(function (pu) {
			var l = LINKS[pu.linkIndex];
			if (!l) return;
			var a = byId[l.a], b = byId[l.b];
			if (!a || !b) return;
			var prog = LINKS_ANIM[l.a + '-' + l.b] || 0;
			if (prog < 0.9) return;
			var pp = easeOut(pu.phase);
			var px = a.x + (b.x - a.x) * pp;
			var py = a.y + (b.y - a.y) * pp;
			var color = linkColor(l.tone);
			glow(px + parX, py + parY, 14, color, 0.9);
			ctx.beginPath();
			ctx.arc(px + parX, py + parY, 2.6, 0, Math.PI * 2);
			ctx.fillStyle = color;
			ctx.globalAlpha = 0.95;
			ctx.fill();
			ctx.globalAlpha = 1;
		});
	}

	function drawPings(parX, parY) {
		pings.forEach(function (pg) {
			var n = NODES[pg.nodeIndex];
			if (!n) return;
			var r = 8 + pg.t * 26;
			ctx.save();
			ctx.globalAlpha = (1 - pg.t) * 0.55;
			ctx.strokeStyle = '#7dd3ff';
			ctx.lineWidth = 1.4;
			ctx.beginPath();
			ctx.arc(n.x + parX, n.y + parY, r, 0, Math.PI * 2);
			ctx.stroke();
			ctx.restore();
		});
	}

	// pulsirajuća točka / krug — bez ikonica i teksta
	function drawNode(n, introT, parX, parY, t) {
		var delay = n.delay || 0;
		var local = clamp01((introT - delay) / 0.4);
		if (local <= 0) return;
		var pop = easeOutBack(local);
		var x = n.x + parX, y = n.y + parY;
		var base = (n.size === 0.7 ? 4.5 : (n.size === 1.25 ? 7 : 6)) * pop;
		var pulse = 1 + Math.sin(t * 2.4 + (n.ph || 0)) * 0.18;
		var r = base * pulse;
		var color = n.size === 0.7 ? '#7d8aa6' : '#7dd3ff';

		glow(x, y, r * 3.4, color, 0.75);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fillStyle = 'rgba(8,11,16,0.9)';
		ctx.fill();
		ctx.lineWidth = 1.6;
		ctx.strokeStyle = color;
		ctx.stroke();
		// svijetla jezgra
		ctx.beginPath();
		ctx.arc(x, y, r * 0.32, 0, Math.PI * 2);
		ctx.fillStyle = color;
		ctx.fill();
	}

	/* ============================================================
	   PARALLAX + EXIT
	============================================================ */
	var copyWrap = section.querySelector('.net-inner');
	function computeExit() {
		var sc = window.scrollY || window.pageYOffset || 0;
		var h = section.offsetHeight || window.innerHeight;
		var p = clamp01(sc / h);
		exit.stage.o = Math.max(0, 1 - p * 1.5);
		exit.stage.y = -p * 9;
		exit.stage.s = 1 - p * 0.05;
		exit.copy.o = Math.max(0, 1 - p * 1.7);
		exit.copy.y = -p * 3;
	}
	function applyExit(tiltX, tiltY) {
		stage.style.opacity = exitCur.stage.o.toFixed(3);
		stage.style.transform = 'translate3d(0,' + exitCur.stage.y.toFixed(2) + 'vh,0) scale(' + exitCur.stage.s.toFixed(3) + ') rotateX(' + tiltY.toFixed(2) + 'deg) rotateY(' + tiltX.toFixed(2) + 'deg)';
		if (copyWrap) {
			copyWrap.style.opacity = exitCur.copy.o.toFixed(3);
			copyWrap.style.transform = 'translate3d(0,' + exitCur.copy.y.toFixed(2) + 'vh,0)';
		}
	}

	/* ============================================================
	   PETLJA
	============================================================ */
	var inView = true;
	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { threshold: 0 }).observe(section);
	}
	document.addEventListener('visibilitychange', function () { inView = !document.hidden; });

	function revealCopy() {
		if (revealed) return;
		revealed = true;
		t0 = performance.now();
		section.classList.add('net-live');
	}
	// Rani reveal (LCP): kratki vizualni delay, bez čekanja na load.
	setTimeout(revealCopy, 350);
	window.addEventListener('load', function () { if (!revealed) revealCopy(); });

	if (fine) {
		window.addEventListener('mousemove', function (e) {
			mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
			mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
		}, { passive: true });
	}
	window.addEventListener('scroll', computeExit, { passive: true });
	window.addEventListener('resize', function () { resize(); computeExit(); }, { passive: true });

	resize();
	computeExit();

	pulses = [];
	var PULSE_N = 10;
	for (var p = 0; p < PULSE_N; p++) {
		pulses.push({ linkIndex: p % LINKS.length, phase: p / PULSE_N, speed: 0.2 + (p % 3) * 0.04 });
	}

	function frame(now) {
		if (!inView || document.hidden) {
			requestAnimationFrame(frame);
			return;
		}
		var t = revealed ? (now - t0) / 1000 : 0;
		var dt = 1 / 60;

		mouse.ax = lerp(mouse.ax, mouse.cx, 0.07);
		mouse.ay = lerp(mouse.ay, mouse.cy, 0.07);
		var tiltX = fine ? mouse.x * 3.4 : 0;
		var tiltY = fine ? -mouse.y * 2.5 : 0;

		exitCur.stage.o = lerp(exitCur.stage.o, exit.stage.o, 0.14);
		exitCur.stage.y = lerp(exitCur.stage.y, exit.stage.y, 0.14);
		exitCur.stage.s = lerp(exitCur.stage.s, exit.stage.s, 0.14);
		exitCur.copy.o = lerp(exitCur.copy.o, exit.copy.o, 0.14);
		exitCur.copy.y = lerp(exitCur.copy.y, exit.copy.y, 0.14);
		applyExit(tiltX, tiltY);

		var amb = Math.sin(t * 0.5) * 3;
		var parFarX = mouse.ax * 0.5 + amb * 0.2, parFarY = mouse.ay * 0.5 + amb * 0.2;
		var parNearX = mouse.ax * 1.5 + amb * 0.35, parNearY = mouse.ay * 1.5 + amb * 0.35;
		applyOutlineParallax(parNearX * 0.6, parNearY * 0.6);

		ctx.clearRect(0, 0, W, H);

		if (revealed) {
			drawEurope(t, parFarX, parFarY);

			LINKS.forEach(function (l) {
				var ld = l.tone === 'eu' ? 2.0 : (l.tone === 'in' ? 0.8 : 1.1);
				LINKS_ANIM[l.a + '-' + l.b] = easeOut(clamp01((t - ld) / 0.5));
			});

			pulses.forEach(function (pu) {
				pu.phase += dt * pu.speed;
				if (pu.phase >= 1) {
					pu.phase = 0;
					if (LINKS.length > 1) {
						var ni = pu.linkIndex;
						while (ni === pu.linkIndex) ni = Math.floor(Math.random() * LINKS.length);
						pu.linkIndex = ni;
					}
				}
			});

			pingTimer += dt;
			if (pingTimer > 1.3 && pings.length < 3) {
				pingTimer = 0;
				pings.push({ nodeIndex: Math.floor(Math.random() * NODES.length), t: 0 });
			}
			pings.forEach(function (pg) { pg.t += dt * 0.7; });
			pings = pings.filter(function (pg) { return pg.t < 1; });

			drawLinks(parNearX, parNearY);
			drawPulses(parNearX, parNearY);
			drawPings(parNearX, parNearY);
			NODES.forEach(function (n) { drawNode(n, t, parNearX, parNearY, t); });
		} else {
			drawEurope(0.8, 0, 0);
		}

		requestAnimationFrame(frame);
	}

	if (reduce) {
		revealCopy();
		t0 = performance.now();
		var t = 4;
		mouse.ax = 0; mouse.ay = 0;
		exitCur.stage.o = 1; exitCur.stage.y = 0; exitCur.stage.s = 1;
		exitCur.copy.o = 1; exitCur.copy.y = 0;
		applyExit(0, 0);
		applyOutlineParallax(0, 0);
		ctx.clearRect(0, 0, W, H);
		drawEurope(4, 0, 0);
		LINKS.forEach(function (l) { LINKS_ANIM[l.a + '-' + l.b] = 1; });
		drawLinks(0, 0);
		NODES.forEach(function (n) { drawNode(n, 4, 0, 0, 0); });
	} else {
		requestAnimationFrame(frame);
	}
})();
