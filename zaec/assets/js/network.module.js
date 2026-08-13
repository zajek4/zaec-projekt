/*
 * ZAEC — HERO 01 "MREŽA" (2D karta povezanosti).
 *
 * Namjerno 2D canvas (bez WebGL): prepoznatljiv obris Hrvatske koji se
 * crtanjem zatvara, blijeda Europa-konstelacija u pozadini, ikonice tvrtki,
 * ljudi i Google Businessa, te linije s pulsom. Interakcija = samo suptilni
 * nagib/parallax po mišu (bez drag/orbit kontrole).
 *
 * Nativni rAF. Pauza izvan viewporta. Reduced-motion = statičan kadar.
 */
(function () {
	'use strict';

	var section = document.querySelector('.net');
	var stage = document.getElementById('netStage');
	var canvas = document.getElementById('netCanvas');
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
	var CRO = { x: 0, y: 0, k: 1 }; // centar i mjerilo Hrvatske
	var mobile = false;

	/* ============================================================
	   PODACI
	============================================================ */

	// Obris Hrvatske (lat, lng) — dovoljno točan da je prepoznatljiv.
	var HR = [
		[46.47, 16.30], [46.52, 16.05], [46.30, 15.55], [46.28, 15.65],
		[46.15, 15.50], [45.95, 15.30], [45.80, 15.10], [45.60, 14.90],
		[45.42, 14.60], [45.30, 14.20], [45.45, 13.90], [45.35, 13.55],
		[45.05, 13.75], [44.95, 14.30], [44.80, 14.60], [44.60, 14.90],
		[44.30, 15.10], [43.90, 15.30], [43.50, 15.90], [43.10, 16.40],
		[42.90, 16.60], [42.60, 17.30], [42.55, 18.10], [42.40, 18.70],
		[42.60, 18.90], [42.90, 19.00], [43.20, 18.60], [43.60, 18.10],
		[44.10, 17.70], [44.60, 17.60], [45.10, 18.10], [45.30, 18.90],
		[45.50, 19.00], [45.80, 18.80], [46.10, 17.70], [46.40, 16.90]
	];

	// Grubi obris Europe (za konstelaciju točaka u pozadini).
	var EU = [
		[38.7, -9.5], [43.8, -9.0], [46.0, -2.0], [48.5, -4.5], [50.5, -1.0],
		[51.5, 1.5], [53.0, 5.0], [56.0, 8.0], [58.0, 5.0], [63.0, 5.0],
		[65.0, 12.0], [70.0, 20.0], [69.0, 28.0], [64.0, 30.0], [60.0, 28.0],
		[60.0, 32.0], [56.0, 40.0], [46.0, 32.0], [45.0, 30.0], [41.0, 28.0],
		[40.0, 24.0], [38.0, 22.0], [36.0, 22.0], [36.0, 15.0], [40.0, 18.0],
		[43.0, 10.0], [44.0, 9.0], [43.0, 3.0], [40.0, 0.0], [36.0, -6.0],
		[37.0, -8.5]
	];

	// Gradovi HR → "ljudi" (korisnici unutar Hrvatske)
	var people = [
		{ lat: 45.55, lng: 18.68, label: 'Osijek' },
		{ lat: 45.81, lng: 15.98, label: 'Zagreb' },
		{ lat: 43.51, lng: 16.44, label: 'Split' },
		{ lat: 45.33, lng: 14.44, label: 'Rijeka' }
	];

	// Radovi (tvrtke) — desno od Hrvatske
	var companies = [
		{ label: 'Centar za autizam', code: 'CZA' },
		{ label: 'Eurokontrola', code: 'EKO' },
		{ label: 'Daj Gric', code: 'DGR' }
	];

	// Europa — čvorovi (smjerovi od Hrvatske)
	var europe = [
		{ label: 'Beč', dx: -0.62, dy: -0.30 },
		{ label: 'München', dx: -0.84, dy: -0.16 },
		{ label: 'Milano', dx: -0.72, dy: 0.22 },
		{ label: 'London', dx: -1.12, dy: -0.50 }
	];

	/* ============================================================
	   PROJEKCIJE
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
		// centar Hrvatske: desno na desktopu, niže na mobitelu
		CRO.x = W * (mobile ? 0.5 : 0.60);
		CRO.y = H * (mobile ? 0.62 : 0.5);
		CRO.k = (Math.min(W, H) * (mobile ? 0.30 : 0.38)) / 4.3;
	}

	function crToXy(lat, lng) {
		return {
			x: CRO.x + (lng - 16.6) * CRO.k * Math.cos(45 * Math.PI / 180),
			y: CRO.y - (lat - 45.2) * CRO.k
		};
	}

	/* ============================================================
	   ČVOROVI (pozicije se računaju po resize)
	============================================================ */
	function buildNodes() {
		var m = Math.min(W, H);
		var hub = crToXy(45.55, 18.68);
		var list = [];
		// hub
		list.push({ id: 'hub', type: 'hub', x: hub.x, y: hub.y, label: 'ZAEC · Osijek', delay: 0.5 });
		// ljudi unutar HR
		people.forEach(function (p, i) {
			var xy = crToXy(p.lat, p.lng);
			list.push({ id: 'p-' + p.label, type: 'person', x: xy.x, y: xy.y, label: p.label, delay: 0.75 + i * 0.06 });
		});
		// radovi desno
		companies.forEach(function (c, i) {
			list.push({
				id: 'c-' + c.code, type: 'company', x: CRO.x + m * 0.46, y: CRO.y + (i - 1) * m * 0.24,
				label: c.label, sub: c.code, delay: 1.25 + i * 0.12
			});
		});
		// Google Business lijevo-dolje
		list.push({ id: 'gmb', type: 'gmb', x: CRO.x - m * 0.02, y: CRO.y + m * 0.46, label: 'Google Business', delay: 1.45 });
		// Europa
		europe.forEach(function (e, i) {
			list.push({
				id: 'e-' + e.label, type: 'city', x: CRO.x + e.dx * m, y: CRO.y + e.dy * m, label: e.label, delay: 1.9 + i * 0.1
			});
		});
		// clamp u canvas
		list.forEach(function (n) {
			n.x = Math.max(46, Math.min(W - 46, n.x));
			n.y = Math.max(40, Math.min(H - 34, n.y));
		});
		return list;
	}

	var NODES = [];
	var LINKS = [];
	function buildLinks() {
		var byId = {};
		NODES.forEach(function (n) { byId[n.id] = n; });
		LINKS = [];
		people.forEach(function (p) {
			LINKS.push({ a: 'p-' + p.label, b: 'hub', tone: 'in' });
		});
		companies.forEach(function (c) {
			LINKS.push({ a: 'hub', b: 'c-' + c.code, tone: 'out' });
		});
		LINKS.push({ a: 'hub', b: 'gmb', tone: 'gmb' });
		europe.forEach(function (e) {
			LINKS.push({ a: 'e-' + e.label, b: 'hub', tone: 'eu' });
		});
	}

	/* ============================================================
	   ANIMACIJSKA STANJA
	============================================================ */
	var revealed = false;
	var t0 = 0;           // vrijeme reveal-a
	var drawP = 0;        // napredak crtanja Hrvatske
	var NODES_ANIM = {};  // per-node pop scale
	var LINKS_ANIM = {};  // per-link draw progress
	var pulses = [];
	var mouse = { x: 0, y: 0, cx: 0, cy: 0, ax: 0, ay: 0 };
	var exit = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };
	var exitCur = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };

	/* ============================================================
	   POMOĆNICI CRTANJA
	============================================================ */
	function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
	function easeOutBack(t) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
	function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
	function lerp(a, b, t) { return a + (b - a) * t; }
	function clamp01(t) { return Math.max(0, Math.min(1, t)); }

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
			if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
				inside = !inside;
			}
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

	/* ---------- ikone ---------- */
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
			// središnji puls — krug + prsten
			ctx.beginPath(); ctx.arc(x, y, s * 0.55, 0, Math.PI * 2); ctx.fillStyle = '#7dd3ff'; ctx.fill();
			ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.strokeStyle = '#7dd3ff'; ctx.stroke();
		} else if (type === 'person') {
			ctx.beginPath(); ctx.arc(x, y - s * 0.35, s * 0.3, 0, Math.PI * 2); ctx.stroke();
			ctx.beginPath(); ctx.arc(x, y + s * 0.15, s * 0.42, Math.PI, 0); ctx.stroke();
		} else if (type === 'company') {
			// zgrada / tvrtka
			ctx.beginPath(); ctx.rect(x - s * 0.5, y - s * 0.35, s, s * 0.7); ctx.stroke();
			ctx.beginPath(); ctx.rect(x - s * 0.3, y - s * 0.18, s * 0.24, s * 0.24); ctx.stroke();
			ctx.beginPath(); ctx.rect(x + s * 0.06, y - s * 0.18, s * 0.24, s * 0.24); ctx.stroke();
			ctx.beginPath(); ctx.moveTo(x, y + s * 0.35); ctx.lineTo(x, y + s * 0.45); ctx.stroke();
		} else if (type === 'gmb') {
			// pin lokacije
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

	/* ============================================================
	   CRTANJE SCENE
	============================================================ */
	function nodeColor(type) {
		if (type === 'hub') return '#7dd3ff';
		if (type === 'person') return '#4d80ff';
		if (type === 'company') return '#eaf6ff';
		if (type === 'gmb') return '#ffb84d';
		return '#a3a39d';
	}

	function drawEurope(t, parX, parY) {
		// konstelacija točaka u obliku Europe
		ctx.save();
		var alpha = 0.14 * easeOut(clamp01(t / 0.8));
		ctx.globalAlpha = alpha;
		ctx.fillStyle = '#9fc3ff';
		var step = 7;
		var i = 0;
		for (var lat = 35.5; lat <= 70; lat += 1.05) {
			for (var lng = -9.5; lng <= 39; lng += 1.05) {
				var jitter = Math.sin(lat * 12.9898 + lng * 78.233) * 43758.5453;
				jitter = jitter - Math.floor(jitter);
				if (jitter < 0.4 && pointInPoly(lat, lng, EU)) {
					var x = parX + ((lng + 9.5) / 48.5) * W;
					var y = parY + ((70 - lat) / 34.5) * H;
					ctx.fillRect(x, y, step / 6, step / 6);
				}
				i++;
			}
		}
		ctx.restore();
	}

	function drawCroatia(t, parX, parY) {
		var pts = HR.map(function (p) { return crToXy(p[0], p[1]); });
		var N = pts.length;
		// duljine
		var lens = [];
		var total = 0;
		for (var i = 0; i < N; i++) {
			var a = pts[i], b = pts[(i + 1) % N];
			var d = Math.hypot(b.x - a.x, b.y - a.y);
			lens.push(d);
			total += d;
		}
		var prog = easeInOut(clamp01(t / 1.15));
		var target = prog * total;

		ctx.save();
		ctx.translate(parX, parY);

		// tihi fill
		if (prog > 0.02) {
			ctx.beginPath();
			ctx.moveTo(pts[0].x, pts[0].y);
			for (var k = 1; k < N; k++) ctx.lineTo(pts[k].x, pts[k].y);
			ctx.closePath();
			ctx.fillStyle = 'rgba(30,94,255,0.05)';
			ctx.fill();
		}

		// crtanje obrisa (zatvara krug)
		var drawn = 0;
		ctx.beginPath();
		ctx.moveTo(pts[0].x, pts[0].y);
		var lead = { x: pts[0].x, y: pts[0].y };
		for (var s = 0; s < N && drawn < target; s++) {
			var b = pts[(s + 1) % N];
			if (drawn + lens[s] <= target) {
				ctx.lineTo(b.x, b.y);
				lead = b;
			} else {
				var f = (target - drawn) / lens[s];
				var px = pts[s].x + (b.x - pts[s].x) * f;
				var py = pts[s].y + (b.y - pts[s].y) * f;
				ctx.lineTo(px, py);
				lead = { x: px, y: py };
			}
			drawn += lens[s];
		}
		ctx.strokeStyle = '#4d80ff';
		ctx.lineWidth = 2.2;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.shadowColor = 'rgba(77,128,255,0.8)';
		ctx.shadowBlur = 14;
		ctx.stroke();
		ctx.shadowBlur = 0;

		// vodeća točka
		if (prog < 1) {
			glow(lead.x, lead.y, 12, '#7dd3ff', 0.9);
			ctx.beginPath(); ctx.arc(lead.x, lead.y, 3, 0, Math.PI * 2); ctx.fillStyle = '#ffffff'; ctx.fill();
		} else {
			// zatvoren: suptilni halo puls po rubu
			var shimmer = 0.25 + 0.15 * Math.sin(t * 2.4);
			ctx.beginPath();
			ctx.moveTo(pts[0].x, pts[0].y);
			for (var q = 1; q < N; q++) ctx.lineTo(pts[q].x, pts[q].y);
			ctx.closePath();
			ctx.strokeStyle = 'rgba(125,211,255,' + shimmer.toFixed(2) + ')';
			ctx.lineWidth = 4.5;
			ctx.globalAlpha = 0.35;
			ctx.stroke();
			ctx.globalAlpha = 1;
		}
		ctx.restore();
		return lead;
	}

	function drawLink(a, b, tone, t, parX, parY, alpha) {
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

		// puls (tek kad je linija uglavnom nacrtana)
		if (prog < 0.85) {
			return;
		}
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

	function drawNode(n, t, parX, parY, introT) {
		var delay = n.delay || 0;
		var local = clamp01((introT - delay) / 0.4);
		if (local <= 0) return;
		var pop = easeOutBack(local);
		var color = nodeColor(n.type);
		var x = n.x + parX, y = n.y + parY;
		var r = n.type === 'hub' ? 15 : (n.type === 'person' ? 9 : (n.type === 'company' ? 12 : (n.type === 'gmb' ? 12 : 6)));

		// pozadinski krug
		glow(x, y, r * 2.4, color, 0.5 * pop);
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fillStyle = 'rgba(8,11,16,0.9)';
		ctx.fill();
		ctx.lineWidth = 1.3;
		ctx.strokeStyle = color;
		ctx.stroke();

		icon(n.type, x, y, r * 1.5, pop);

		// label
		var labA = clamp01((introT - delay - 0.1) / 0.3);
		if (labA > 0 && !(mobile && (n.type === 'city' || n.type === 'company'))) {
			label(x, y + r + 7, n.label, color, 'center', labA, mobile ? 8.5 : 10, true);
		}
	}

	/* ============================================================
	   PARALLAX (samo nagib po mišu)
	============================================================ */
	function computeParallax() {
		var k = 16;
		mouse.cx = mouse.x * k;
		mouse.cy = mouse.y * k;
	}

	/* ============================================================
	   EXIT (scroll → kuća)
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
	document.addEventListener('visibilitychange', function () {
		inView = !document.hidden;
	});

	function revealCopy() {
		if (revealed) return;
		revealed = true;
		t0 = performance.now();
		section.classList.add('net-live');
	}
	if (document.body.classList.contains('loaded')) {
		revealCopy();
	} else if ('MutationObserver' in window) {
		var bodyWatch = new MutationObserver(function () {
			if (document.body.classList.contains('loaded')) revealCopy();
		});
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
		buildNodes();
		buildLinks();
		computeExit();
	}, { passive: true });

	// inicijalizacija
	resize();
	buildNodes();
	buildLinks();
	computeExit();

	// pulse raspored
	pulses = [];
	var pIdx = 0;
	LINKS.forEach(function (l, i) {
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

		// parallax lerp
		mouse.ax = lerp(mouse.ax, mouse.cx, 0.06);
		mouse.ay = lerp(mouse.ay, mouse.cy, 0.06);
		computeParallax();
		// tilt (CSS)
		var tiltX = fine ? mouse.x * 2.2 : 0;
		var tiltY = fine ? -mouse.y * 1.6 : 0;

		// exit lerp
		exitCur.stage.o = lerp(exitCur.stage.o, exit.stage.o, 0.14);
		exitCur.stage.y = lerp(exitCur.stage.y, exit.stage.y, 0.14);
		exitCur.stage.s = lerp(exitCur.stage.s, exit.stage.s, 0.14);
		exitCur.copy.o = lerp(exitCur.copy.o, exit.copy.o, 0.14);
		exitCur.copy.y = lerp(exitCur.copy.y, exit.copy.y, 0.14);
		applyExit(tiltX, tiltY);

		// parallax po slojevima
		var parFarX = mouse.ax * 0.4, parFarY = mouse.ay * 0.4;
		var parMidX = mouse.ax * 0.7, parMidY = mouse.ay * 0.7;
		var parNearX = mouse.ax * 1.0, parNearY = mouse.ay * 1.0;

		ctx.clearRect(0, 0, W, H);

		if (revealed) {
			drawEurope(t, parFarX, parFarY);
			drawCroatia(t, parMidX, parMidY);

			// linkovi (draw-in po tipu)
			LINKS.forEach(function (l) {
				var ld = l.tone === 'eu' ? 2.0 : (l.tone === 'gmb' ? 1.5 : 1.0);
				LINKS_ANIM[l.a + '-' + l.b] = easeOut(clamp01((t - ld) / 0.5));
			});
			// pulsi se miču
			pulses.forEach(function (pu) { pu.t += 0.006; });

			// linkovi
			LINKS.forEach(function (l) {
				var a = NODES.find(function (n) { return n.id === l.a; });
				var b = NODES.find(function (n) { return n.id === l.b; });
				if (!a || !b) return;
				drawLink(a, b, l.tone, t, parNearX, parNearY, 1);
			});

			// čvorovi
			NODES.forEach(function (n) {
				drawNode(n, t, parNearX, parNearY, t);
			});
		} else {
			// dok traje preloader — tihi kadar
			drawEurope(0.8, 0, 0);
		}

		requestAnimationFrame(frame);
	}

	if (reduce) {
		// statičan kadar
		revealCopy();
		t0 = performance.now();
		var t = 4; // "gotov" timeline
		mouse.ax = 0; mouse.ay = 0;
		exitCur.stage.o = 1; exitCur.stage.y = 0; exitCur.stage.s = 1;
		exitCur.copy.o = 1; exitCur.copy.y = 0;
		applyExit(0, 0);
		ctx.clearRect(0, 0, W, H);
		drawEurope(4, 0, 0);
		drawCroatia(4, 0, 0);
		NODES.forEach(function (n) {
			LINKS.forEach(function (l) { LINKS_ANIM[l.a + '-' + l.b] = 1; });
		});
		LINKS.forEach(function (l) {
			var a = NODES.find(function (n) { return n.id === l.a; });
			var b = NODES.find(function (n) { return n.id === l.b; });
			if (a && b) drawLink(a, b, l.tone, t, 0, 0, 1);
		});
		NODES.forEach(function (n) { drawNode(n, t, 0, 0, 4); });
	} else {
		requestAnimationFrame(frame);
	}
})();
