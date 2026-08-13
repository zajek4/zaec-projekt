/*
 * ZAEC — HERO 01 "MREŽA" (2D karta povezanosti).
 *
 * Prepoznatljiv obris Hrvatske (SVG vektor, draw-in preko stroke-dashoffset),
 * blijeda Europa-konstelacija, ikonice tvrtki / ljudi / Google Businessa i
 * linije s pulsom — sve na canvasu. Interakcija = samo suptilni nagib po mišu.
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
	   OBRIS HRVATSKE (Natural Earth — točan vektor, [lat, lng])
	============================================================ */
	var HR = [
		[45.90888, 18.82984], [45.52151, 19.07277], [45.23652, 19.39048],
		[44.86023, 19.00549], [45.08159, 18.55321], [45.06774, 17.86178],
		[45.23378, 17.00215], [45.21161, 16.53494], [45.00413, 16.31816],
		[45.23378, 15.95937], [44.81871, 15.75003], [44.35114, 16.23966],
		[44.04124, 16.45644], [43.66772, 16.91616], [43.44634, 17.29737],
		[43.02856, 17.67492], [42.65000, 18.56000], [42.47999, 18.45002],
		[42.84999, 17.50997], [43.21000, 16.93001], [43.50722, 16.01538],
		[44.24319, 15.17445], [44.31791, 15.37625], [44.73848, 14.92031],
		[45.07606, 14.90160], [45.23378, 14.25875], [44.80212, 13.95225],
		[45.13694, 13.65698], [45.48415, 13.67940], [45.50032, 13.71506],
		[45.46617, 14.41197], [45.63494, 14.59511], [45.47169, 14.93524],
		[45.45232, 15.32767], [45.73178, 15.32395], [45.83415, 15.67153],
		[46.23811, 15.76873], [46.50375, 16.56481], [46.38063, 16.88252],
		[45.95177, 17.63007], [45.75948, 18.45606]
	];

	// equirectangular projekcija (ista za canvas i SVG → savršeno poravnanje)
	var COS = Math.cos(44.5 * Math.PI / 180);
	function projX(lng) { return lng * COS; }
	function projY(lat) { return -lat; }

	var GEO = (function () {
		var xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
		HR.forEach(function (p) {
			var x = projX(p[1]), y = projY(p[0]);
			if (x < xmin) xmin = x; if (x > xmax) xmax = x;
			if (y < ymin) ymin = y; if (y > ymax) ymax = y;
		});
		return { xmin: xmin, xmax: xmax, ymin: ymin, ymax: ymax, cx: (xmin + xmax) / 2, cy: (ymin + ymax) / 2, spanX: xmax - xmin, spanY: ymax - ymin };
	})();

	/* ============================================================
	   EUROPA (konstelacija) + ČVOROVI
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

	var people = [
		{ lat: 45.55, lng: 18.68, label: 'Osijek' },
		{ lat: 45.81, lng: 15.98, label: 'Zagreb' },
		{ lat: 43.51, lng: 16.44, label: 'Split' },
		{ lat: 45.33, lng: 14.44, label: 'Rijeka' }
	];

	var companies = [
		{ label: 'Centar za autizam', code: 'CZA' },
		{ label: 'Eurokontrola', code: 'EKO' },
		{ label: 'Daj Gric', code: 'DGR' }
	];

	var europe = [
		{ label: 'Beč', dx: -0.62, dy: -0.30 },
		{ label: 'München', dx: -0.84, dy: -0.16 },
		{ label: 'Milano', dx: -0.72, dy: 0.22 },
		{ label: 'London', dx: -1.12, dy: -0.50 }
	];

	/* ============================================================
	   PROJEKCIJE / LAYOUT
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
		CRO.x = W * (mobile ? 0.5 : 0.60);
		CRO.y = H * (mobile ? 0.62 : 0.5);
		// visina obrisa = dio najmanje dimenzije
		var oh = Math.min(W, H) * (mobile ? 0.52 : 0.44);
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

	/* ---------- SVG obris: pozicija i veličina ---------- */
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
	   ČVOROVI + LINIJE
	============================================================ */
	var NODES = [];
	var LINKS = [];
	var byId = {};

	function buildNodes() {
		var m = Math.min(W, H);
		var hub = geoToXy(45.55, 18.68);
		var list = [];
		list.push({ id: 'hub', type: 'hub', x: hub.x, y: hub.y, label: 'ZAEC · Osijek', delay: 0.5 });
		people.forEach(function (p, i) {
			var xy = geoToXy(p.lat, p.lng);
			list.push({ id: 'p-' + p.label, type: 'person', x: xy.x, y: xy.y, label: p.label, delay: 0.75 + i * 0.06 });
		});
		companies.forEach(function (c, i) {
			list.push({ id: 'c-' + c.code, type: 'company', x: CRO.x + m * 0.46, y: CRO.y + (i - 1) * m * 0.24, label: c.label, sub: c.code, delay: 1.25 + i * 0.12 });
		});
		list.push({ id: 'gmb', type: 'gmb', x: CRO.x - m * 0.02, y: CRO.y + m * 0.46, label: 'Google Business', delay: 1.45 });
		europe.forEach(function (e, i) {
			list.push({ id: 'e-' + e.label, type: 'city', x: CRO.x + e.dx * m, y: CRO.y + e.dy * m, label: e.label, delay: 1.9 + i * 0.1 });
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
		people.forEach(function (p) { LINKS.push({ a: 'p-' + p.label, b: 'hub', tone: 'in' }); });
		companies.forEach(function (c) { LINKS.push({ a: 'hub', b: 'c-' + c.code, tone: 'out' }); });
		LINKS.push({ a: 'hub', b: 'gmb', tone: 'gmb' });
		europe.forEach(function (e) { LINKS.push({ a: 'e-' + e.label, b: 'hub', tone: 'eu' }); });
	}

	/* ============================================================
	   STANJA ANIMACIJE
	============================================================ */
	var revealed = false;
	var t0 = 0;
	var LINKS_ANIM = {};
	var pulses = [];
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

	function font(size, weight) {
		return (weight || 500) + ' ' + size + 'px "IBM Plex Mono", ui-monospace, monospace';
	}

	function label(x, y, text, color, align, alpha, size, bg) {
		if (!text) return;
		ctx.save();
		ctx.globalAlpha = alpha === undefined ? 1 : alpha;
		ctx.font = font(size || 10, 500);
		ctx.textAlign = align || 'center';
		ctx.textBaseline = 'top';
		if (bg) {
			var w = ctx.measureText(text).width + 14;
			ctx.fillStyle = 'rgba(8,11,16,0.72)';
			var bx = (align === 'left') ? x : x - w / 2;
			ctx.fillRect(bx, y - 2, w, (size || 10) + 8);
		}
		ctx.fillStyle = color || '#a3a39d';
		ctx.fillText(text, x, y + 2);
		ctx.restore();
	}

	function icon(type, x, y, s, alpha) {
		ctx.save();
		ctx.globalAlpha = alpha === undefined ? 1 : alpha;
		var stroke = '#eaf6ff';
		ctx.strokeStyle = stroke;
		ctx.fillStyle = stroke;
		ctx.lineWidth = 1.5;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';

		if (type === 'hub') {
			ctx.beginPath(); ctx.arc(x, y, s * 0.55, 0, Math.PI * 2); ctx.fillStyle = '#7dd3ff'; ctx.fill();
			ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.strokeStyle = '#7dd3ff'; ctx.stroke();
		} else if (type === 'person') {
			ctx.beginPath(); ctx.arc(x, y - s * 0.35, s * 0.3, 0, Math.PI * 2); ctx.stroke();
			ctx.beginPath(); ctx.arc(x, y + s * 0.15, s * 0.42, Math.PI, 0); ctx.stroke();
		} else if (type === 'company') {
			ctx.beginPath(); ctx.rect(x - s * 0.5, y - s * 0.35, s, s * 0.7); ctx.stroke();
			ctx.beginPath(); ctx.rect(x - s * 0.3, y - s * 0.18, s * 0.24, s * 0.24); ctx.stroke();
			ctx.beginPath(); ctx.rect(x + s * 0.06, y - s * 0.18, s * 0.24, s * 0.24); ctx.stroke();
			ctx.beginPath(); ctx.moveTo(x, y + s * 0.35); ctx.lineTo(x, y + s * 0.45); ctx.stroke();
		} else if (type === 'gmb') {
			ctx.beginPath();
			ctx.arc(x, y - s * 0.25, s * 0.3, 0, Math.PI * 2);
			ctx.moveTo(x - s * 0.22, y + s * 0.35);
			ctx.quadraticCurveTo(x, y + s * 0.05, x, y - s * 0.05);
			ctx.quadraticCurveTo(x, y - s * 0.15, x - s * 0.05, y - s * 0.25);
			ctx.stroke();
			ctx.beginPath(); ctx.arc(x, y - s * 0.25, s * 0.09, 0, Math.PI * 2); ctx.fill();
		} else if (type === 'city') {
			ctx.beginPath(); ctx.arc(x, y, s * 0.3, 0, Math.PI * 2); ctx.fill();
			ctx.beginPath(); ctx.arc(x, y, s * 0.52, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(234,246,255,0.55)'; ctx.stroke();
		}
		ctx.restore();
	}

	function nodeColor(type) {
		if (type === 'hub') return '#7dd3ff';
		if (type === 'person') return '#4d80ff';
		if (type === 'company') return '#eaf6ff';
		if (type === 'gmb') return '#ffb84d';
		return '#a3a39d';
	}

	function drawEurope(t, parX, parY) {
		ctx.save();
		var alpha = 0.14 * easeOut(clamp01(t / 0.8));
		ctx.globalAlpha = alpha;
		ctx.fillStyle = '#9fc3ff';
		for (var lat = 35.5; lat <= 70; lat += 1.05) {
			for (var lng = -9.5; lng <= 39; lng += 1.05) {
				var jitter = Math.sin(lat * 12.9898 + lng * 78.233) * 43758.5453;
				jitter = jitter - Math.floor(jitter);
				if (jitter < 0.4 && pointInPoly(lat, lng, EU)) {
					var x = parX + ((lng + 9.5) / 48.5) * W;
					var y = parY + ((70 - lat) / 34.5) * H;
					ctx.fillRect(x, y, 1.1, 1.1);
				}
			}
		}
		ctx.restore();
	}

	function drawLink(a, b, tone, parX, parY, alpha) {
		var dx = b.x - a.x, dy = b.y - a.y;
		var dist = Math.hypot(dx, dy);
		if (dist < 1) return;
		var prog = LINKS_ANIM[a.id + '-' + b.id] || 0;
		var len = dist * prog;
		var nx = dx / dist, ny = dy / dist;

		ctx.save();
		ctx.globalAlpha = alpha * (tone === 'eu' ? 0.4 : 0.6);
		var color = tone === 'gmb' ? '#ffb84d' : (tone === 'eu' ? '#a3a39d' : '#7dd3ff');
		ctx.strokeStyle = color;
		ctx.lineWidth = 1.1;
		ctx.beginPath();
		ctx.moveTo(a.x + parX, a.y + parY);
		ctx.lineTo(a.x + parX + nx * len, a.y + parY + ny * len);
		ctx.stroke();
		ctx.restore();

		if (prog < 0.85) return;
		pulses.forEach(function (pu) {
			if (pu.linkKey !== (a.id + '-' + b.id)) return;
			var pp = (pu.t + pu.offset) % 1;
			var px = a.x + nx * dist * pp;
			var py = a.y + ny * dist * pp;
			glow(px + parX, py + parY, 10, color, 0.8 * alpha);
			ctx.beginPath();
			ctx.arc(px + parX, py + parY, 2.2, 0, Math.PI * 2);
			ctx.fillStyle = color;
			ctx.globalAlpha = alpha;
			ctx.fill();
			ctx.globalAlpha = 1;
		});
	}

	function drawNode(n, introT, parX, parY) {
		var delay = n.delay || 0;
		var local = clamp01((introT - delay) / 0.4);
		if (local <= 0) return;
		var pop = easeOutBack(local);
		var color = nodeColor(n.type);
		var x = n.x + parX, y = n.y + parY;
		var r = n.type === 'hub' ? 15 : (n.type === 'person' ? 9 : (n.type === 'company' ? 12 : (n.type === 'gmb' ? 12 : 6)));

		glow(x, y, r * 2.4, color, 0.5 * pop);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fillStyle = 'rgba(8,11,16,0.9)';
		ctx.fill();
		ctx.lineWidth = 1.3;
		ctx.strokeStyle = color;
		ctx.stroke();
		icon(n.type, x, y, r * 1.5, pop);

		var labA = clamp01((introT - delay - 0.1) / 0.3);
		if (labA > 0 && !(mobile && (n.type === 'city' || n.type === 'company'))) {
			label(x, y + r + 7, n.label, color, 'center', labA, mobile ? 8.5 : 10, true);
		}
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
	if (document.body.classList.contains('loaded')) revealCopy();
	else if ('MutationObserver' in window) {
		var bodyWatch = new MutationObserver(function () { if (document.body.classList.contains('loaded')) revealCopy(); });
		bodyWatch.observe(document.body, { attributes: true, attributeFilter: ['class'] });
	}
	window.addEventListener('load', revealCopy);
	setTimeout(revealCopy, 2600);

	if (fine) {
		window.addEventListener('mousemove', function (e) {
			mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
			mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
		}, { passive: true });
	}
	window.addEventListener('scroll', computeExit, { passive: true });
	window.addEventListener('resize', function () {
		resize();
		computeExit();
	}, { passive: true });

	resize();
	computeExit();

	pulses = [];
	var pIdx = 0;
	LINKS.forEach(function (l) {
		var count = (l.tone === 'eu') ? 1 : 2;
		for (var c = 0; c < count; c++) {
			pulses.push({ linkKey: l.a + '-' + l.b, t: 0, offset: (pIdx % 5) / 5 });
			pIdx++;
		}
	});

	function frame(now) {
		if (!inView || document.hidden) {
			requestAnimationFrame(frame);
			return;
		}
		var t = revealed ? (now - t0) / 1000 : 0;

		mouse.ax = lerp(mouse.ax, mouse.cx, 0.06);
		mouse.ay = lerp(mouse.ay, mouse.cy, 0.06);
		var tiltX = fine ? mouse.x * 2.2 : 0;
		var tiltY = fine ? -mouse.y * 1.6 : 0;

		exitCur.stage.o = lerp(exitCur.stage.o, exit.stage.o, 0.14);
		exitCur.stage.y = lerp(exitCur.stage.y, exit.stage.y, 0.14);
		exitCur.stage.s = lerp(exitCur.stage.s, exit.stage.s, 0.14);
		exitCur.copy.o = lerp(exitCur.copy.o, exit.copy.o, 0.14);
		exitCur.copy.y = lerp(exitCur.copy.y, exit.copy.y, 0.14);
		applyExit(tiltX, tiltY);

		var parFarX = mouse.ax * 0.4, parFarY = mouse.ay * 0.4;
		var parNearX = mouse.ax * 1.0, parNearY = mouse.ay * 1.0;
		applyOutlineParallax(parNearX, parNearY);

		ctx.clearRect(0, 0, W, H);

		if (revealed) {
			drawEurope(t, parFarX, parFarY);

			LINKS.forEach(function (l) {
				var ld = l.tone === 'eu' ? 2.0 : (l.tone === 'gmb' ? 1.5 : 1.0);
				LINKS_ANIM[l.a + '-' + l.b] = easeOut(clamp01((t - ld) / 0.5));
			});
			pulses.forEach(function (pu) { pu.t += 0.006; });

			LINKS.forEach(function (l) {
				var a = byId[l.a], b = byId[l.b];
				if (!a || !b) return;
				drawLink(a, b, l.tone, parNearX, parNearY, 1);
			});
			NODES.forEach(function (n) { drawNode(n, t, parNearX, parNearY); });
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
		LINKS.forEach(function (l) {
			var a = byId[l.a], b = byId[l.b];
			if (a && b) drawLink(a, b, l.tone, 0, 0, 1);
		});
		NODES.forEach(function (n) { drawNode(n, 4, 0, 0); });
	} else {
		requestAnimationFrame(frame);
	}
})();
