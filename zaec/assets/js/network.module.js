/*
 * ZAEC — HERO 01 "SIGNAL GRID" (cover / mreža).
 * Blueprint globus: dot-matrix, obris Hrvatske, čvorovi (gradovi + remote) i
 * "signali" (lukovi s pulsom) koji skaču od čvora do čvora u ZAEC hub.
 * Nativni rAF, bez GSAP ovisnosti. Statičan SVG fallback + reduced-motion
 * bez render petlje. Render se pauzira izvan viewporta i kad je tab skriven.
 */
import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.module.js';

(function () {
	'use strict';

	var section = document.querySelector('.net');
	var stage = document.getElementById('netStage');
	var canvas = document.getElementById('netCanvas');
	var fallback = document.getElementById('netFallback');
	if (!section || !stage || !canvas) {
		return;
	}

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
	var low = (window.navigator.hardwareConcurrency || 8) < 4 || coarse;

	function showFallback() {
		section.classList.add('net--no-gl');
	}

	try {
		if (!window.WebGLRenderingContext) {
			showFallback();
			return;
		}
		var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
	} catch (err) {
		showFallback();
		return;
	}

	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2));
	renderer.setClearColor(0x000000, 0);

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
	camera.position.set(0, 0.15, 3.1);
	camera.lookAt(0, 0, 0);

	var root = new THREE.Group();
	scene.add(root);

	var controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.dampingFactor = 0.06;
	controls.minPolarAngle = Math.PI * 0.22;
	controls.maxPolarAngle = Math.PI * 0.78;
	controls.rotateSpeed = 0.55;
	controls.enableRotate = fine; // touch ne smije oteti scroll stranice
	var dragging = false;
	controls.addEventListener('start', function () { dragging = true; });
	controls.addEventListener('end', function () { dragging = false; });

	function llToVec(lat, lng, r) {
		var phi = (90 - lat) * Math.PI / 180;
		var theta = (lng + 180) * Math.PI / 180;
		return new THREE.Vector3(
			-r * Math.sin(phi) * Math.cos(theta),
			r * Math.cos(phi),
			r * Math.sin(phi) * Math.sin(theta)
		);
	}

	/* ---------- globus ---------- */
	var GLOBE_R = 1.0;
	var core = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R, 72, 48), new THREE.MeshBasicMaterial({ color: 0x0b0f15 }));
	root.add(core);

	var wire = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R + 0.002, 48, 32), new THREE.MeshBasicMaterial({ color: 0x7dd3ff, wireframe: true, transparent: true, opacity: 0.09 }));
	root.add(wire);

	var ringGeo = new THREE.RingGeometry(GLOBE_R + 0.02, GLOBE_R + 0.023, 128);
	[
		{ y: 0, color: 0x7dd3ff },
		{ y: 0.5, color: 0x4d80ff },
		{ y: -0.5, color: 0x4d80ff }
	].forEach(function (rng) {
		var m = new THREE.Mesh(ringGeo.clone(), new THREE.MeshBasicMaterial({ color: rng.color, side: THREE.DoubleSide, transparent: true, opacity: 0.14 }));
		m.position.y = rng.y * GLOBE_R;
		m.rotation.x = Math.PI / 2;
		m.scale.setScalar(1 - 0.08 * Math.abs(rng.y));
		root.add(m);
	});

	// dot-matrix površina (Stripe stil)
	var DOT_N = low ? 1000 : 1600;
	var dotPos = new Float32Array(DOT_N * 3);
	var golden = Math.PI * (3 - Math.sqrt(5));
	for (var i = 0; i < DOT_N; i++) {
		var yy = 1 - (i / (DOT_N - 1)) * 2;
		var rr = Math.sqrt(Math.max(0, 1 - yy * yy));
		var th = golden * i;
		dotPos[i * 3] = Math.cos(th) * rr;
		dotPos[i * 3 + 1] = yy;
		dotPos[i * 3 + 2] = Math.sin(th) * rr;
	}
	var dotGeo = new THREE.BufferGeometry();
	dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
	var dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0xa3a39d, size: 0.0085, transparent: true, opacity: 0.45 }));
	root.add(dots);

	// klaster "domaće" regije (svjetlije točke)
	var HR_N = low ? 160 : 260;
	var hrPos = new Float32Array(HR_N * 3);
	for (var h = 0; h < HR_N; h++) {
		var lat = 42.4 + Math.random() * 4.3;
		var lng = 13.5 + Math.random() * 6.0;
		var v = llToVec(lat, lng, GLOBE_R + 0.004);
		hrPos[h * 3] = v.x; hrPos[h * 3 + 1] = v.y; hrPos[h * 3 + 2] = v.z;
	}
	var hrGeo = new THREE.BufferGeometry();
	hrGeo.setAttribute('position', new THREE.BufferAttribute(hrPos, 3));
	var hrDots = new THREE.Points(hrGeo, new THREE.PointsMaterial({ color: 0x7dd3ff, size: 0.013, transparent: true, opacity: 0.85 }));
	root.add(hrDots);

	/* ---------- obris Hrvatske (stiliziran) ---------- */
	var HR_OUTLINE = [
		[46.55, 16.40], [46.28, 17.00], [45.92, 18.90], [45.25, 19.00],
		[44.82, 18.60], [43.50, 17.00], [42.90, 17.60], [42.42, 18.70],
		[43.00, 16.50], [43.50, 15.85], [44.10, 15.20], [44.55, 14.40],
		[45.10, 14.20], [45.40, 13.60], [45.62, 13.92], [45.80, 15.00],
		[46.20, 16.00], [46.55, 16.40]
	];
	var outlinePts = HR_OUTLINE.map(function (p) { return llToVec(p[0], p[1], GLOBE_R + 0.012); });
	var outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePts);
	var outline = new THREE.Line(outlineGeo, new THREE.LineBasicMaterial({ color: 0x1e5eff, transparent: true, opacity: 0.9 }));
	root.add(outline);
	var outlineHalo = new THREE.Line(outlineGeo, new THREE.LineBasicMaterial({ color: 0x7dd3ff, transparent: true, opacity: 0.22 }));
	outlineHalo.scale.setScalar(1.008);
	root.add(outlineHalo);

	/* ---------- čvorovi ---------- */
	function glowTexture(hex, size) {
		var c = document.createElement('canvas');
		c.width = c.height = size;
		var ctx = c.getContext('2d');
		var g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
		g.addColorStop(0, 'rgba(255,255,255,1)');
		g.addColorStop(0.25, hex + 'e6');
		g.addColorStop(1, hex + '00');
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, size, size);
		return new THREE.CanvasTexture(c);
	}

	var nodes = [
		{ lat: 45.55, lng: 18.68, label: 'ZAEC · Osijek', type: 'hub' },
		{ lat: 45.81, lng: 15.98, label: 'Zagreb', type: 'city' },
		{ lat: 43.51, lng: 16.44, label: 'Split', type: 'city' },
		{ lat: 45.33, lng: 14.44, label: 'Rijeka', type: 'city' },
		{ lat: 48.21, lng: 16.37, label: 'Beč', type: 'remote' },
		{ lat: 48.14, lng: 11.58, label: 'München', type: 'remote' },
		{ lat: 45.46, lng: 9.19, label: 'Milano', type: 'remote' },
		{ lat: 51.51, lng: -0.13, label: 'London', type: 'remote' },
		{ lat: 40.71, lng: -74.01, label: 'New York', type: 'remote' },
		{ lat: 25.20, lng: 55.27, label: 'Dubai', type: 'remote' }
	];

	var texHub = glowTexture('#7dd3ff', 128);
	var texCity = glowTexture('#4d80ff', 128);
	var texRemote = glowTexture('#a3a39d', 128);
	var nodeObjs = [];
	nodes.forEach(function (n) {
		var tex = n.type === 'hub' ? texHub : (n.type === 'city' ? texCity : texRemote);
		var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xffffff, transparent: true, opacity: 0.95, depthWrite: false }));
		var s = n.type === 'hub' ? 0.16 : (n.type === 'city' ? 0.1 : 0.075);
		sp.scale.set(s, s, 1);
		sp.position.copy(llToVec(n.lat, n.lng, GLOBE_R + 0.012));
		sp.userData = { node: n, base: s };
		root.add(sp);
		nodeObjs.push(sp);
	});

	/* ---------- lukovi (signali) ---------- */
	function makeCurve(a, b) {
		var va = llToVec(a.lat, a.lng, GLOBE_R + 0.008);
		var vb = llToVec(b.lat, b.lng, GLOBE_R + 0.008);
		var dist = va.distanceTo(vb);
		var alt = 0.14 + dist * 0.24;
		var c1 = va.clone().lerp(vb, 0.33).normalize().multiplyScalar(GLOBE_R + alt * 1.55);
		var c2 = va.clone().lerp(vb, 0.66).normalize().multiplyScalar(GLOBE_R + alt * 1.55);
		return new THREE.CubicBezierCurve3(va, c1, c2, vb);
	}

	var hub = nodes[0];
	var arcs = [];
	nodes.slice(1).forEach(function (n) {
		var curve = makeCurve(n, hub);
		var geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(72));
		var line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x7dd3ff, transparent: true, opacity: 0.14 }));
		line.userData.curve = curve;
		root.add(line);
		arcs.push(line);
	});

	var pulseMat = new THREE.SpriteMaterial({ map: texHub, color: 0xffffff, transparent: true, depthWrite: false, opacity: 1 });
	var pulses = [];
	var PULSE_N = low ? 2 : 3;
	for (var p = 0; p < PULSE_N; p++) {
		var sp = new THREE.Sprite(pulseMat);
		sp.scale.set(0.05, 0.05, 1);
		sp.visible = false;
		root.add(sp);
		pulses.push({ sp: sp, arcIndex: (p * 2 + 1) % arcs.length, phase: p / PULSE_N });
	}

	var ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: texHub, color: 0xffffff, transparent: true, depthWrite: false, opacity: 0 }));
	ring.position.copy(llToVec(hub.lat, hub.lng, GLOBE_R + 0.014));
	root.add(ring);
	var ringT = 1;
	function fireRing() { ringT = 0; }

	/* ---------- hover ---------- */
	var tip = document.createElement('div');
	tip.className = 'net-tip';
	tip.setAttribute('aria-hidden', 'true');
	section.appendChild(tip);

	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(-10, -10);
	var hovered = null;
	if (fine) {
		canvas.addEventListener('pointermove', function (e) {
			var r = canvas.getBoundingClientRect();
			mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
			mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
		}, { passive: true });
	}
	function raycastHover() {
		if (!fine) { return; }
		raycaster.setFromCamera(mouse, camera);
		var hits = raycaster.intersectObjects(nodeObjs, false);
		var hit = hits.length ? hits[0].object : null;
		hovered = hit;
		if (hit) {
			tip.textContent = hit.userData.node.label;
			tip.classList.add('show');
			var v = hit.position.clone().project(camera);
			var r = canvas.getBoundingClientRect();
			tip.style.left = ((v.x * 0.5 + 0.5) * r.width + r.left) + 'px';
			tip.style.top = ((-v.y * 0.5 + 0.5) * r.height + r.top) + 'px';
		} else {
			tip.classList.remove('show');
		}
	}

	/* ---------- resize / vidljivost ---------- */
	function resize() {
		var w = stage.clientWidth || window.innerWidth;
		var h = stage.clientHeight || window.innerHeight;
		renderer.setSize(w, h, false);
		camera.aspect = w / h;
		camera.updateProjectionMatrix();
	}
	window.addEventListener('resize', resize, { passive: true });
	resize();

	var inView = true;
	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (es) { inView = es[0].isIntersecting; }, { threshold: 0 }).observe(section);
	}
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) { inView = false; } else { inView = true; }
	});

	/* ---------- exit handoff (globus odlazi, kuća dolazi) ---------- */
	var copyWrap = section.querySelector('.net-inner');
	var exitTarget = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };
	var exitCur = { stage: { o: 1, y: 0, s: 1 }, copy: { o: 1, y: 0 } };
	function computeExit() {
		var sc = window.scrollY || window.pageYOffset || 0;
		var h = section.offsetHeight || window.innerHeight;
		var p = Math.max(0, Math.min(1, sc / h));
		exitTarget.stage.o = Math.max(0, 1 - p * 1.5);
		exitTarget.stage.y = -p * 9;
		exitTarget.stage.s = 1 - p * 0.06;
		exitTarget.copy.o = Math.max(0, 1 - p * 1.7);
		exitTarget.copy.y = -p * 3;
	}
	window.addEventListener('scroll', computeExit, { passive: true });
	computeExit();

	function applyExit() {
		stage.style.opacity = exitCur.stage.o.toFixed(3);
		stage.style.transform = 'translate3d(0,' + exitCur.stage.y.toFixed(2) + 'vh,0) scale(' + exitCur.stage.s.toFixed(3) + ')';
		if (copyWrap) {
			copyWrap.style.opacity = exitCur.copy.o.toFixed(3);
			copyWrap.style.transform = 'translate3d(0,' + exitCur.copy.y.toFixed(2) + 'vh,0)';
		}
	}

	/* ---------- copy reveal (koordinirano s preloaderom) ---------- */
	var revealed = false;
	function revealCopy() {
		if (!revealed) {
			revealed = true;
			section.classList.add('net-live');
		}
	}
	if (document.body.classList.contains('loaded')) {
		revealCopy(); // preloader već gotov
	} else if ('MutationObserver' in window) {
		var bodyWatch = new MutationObserver(function () {
			if (document.body.classList.contains('loaded')) {
				revealCopy();
			}
		});
		bodyWatch.observe(document.body, { attributes: true, attributeFilter: ['class'] });
	}
	window.addEventListener('load', revealCopy);
	setTimeout(revealCopy, 2600); // failsafe

	/* ---------- petlja ---------- */
	var clock = new THREE.Clock();
	var lastTip = 0;

	function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
	function lerp(a, b, t) { return a + (b - a) * t; }

	function animate() {
		requestAnimationFrame(animate);
		if (!inView || document.hidden) {
			return;
		}
		var dt = Math.min(clock.getDelta(), 0.05);
		var t = clock.elapsedTime;

		// exit lerp
		exitCur.stage.o = lerp(exitCur.stage.o, exitTarget.stage.o, 0.14);
		exitCur.stage.y = lerp(exitCur.stage.y, exitTarget.stage.y, 0.14);
		exitCur.stage.s = lerp(exitCur.stage.s, exitTarget.stage.s, 0.14);
		exitCur.copy.o = lerp(exitCur.copy.o, exitTarget.copy.o, 0.14);
		exitCur.copy.y = lerp(exitCur.copy.y, exitTarget.copy.y, 0.14);
		applyExit();

		if (!reduce) {
			if (!dragging) { root.rotation.y += dt * 0.08; }
			dots.rotation.y += dt * 0.012;
			hrDots.rotation.y += dt * 0.012;
			pulses.forEach(function (pu, idx) {
				pu.phase += dt * (0.16 + idx * 0.02);
				if (pu.phase >= 1) {
					pu.phase = 0;
					pu.arcIndex = (pu.arcIndex + 1) % arcs.length;
					fireRing();
				}
				var curve = arcs[pu.arcIndex].userData.curve;
				var pos = curve.getPointAt(easeOut(pu.phase));
				pu.sp.position.copy(pos);
				pu.sp.visible = true;
				var s = 0.035 + 0.02 * Math.sin(t * 6 + idx);
				pu.sp.scale.set(s, s, 1);
			});
			if (ringT < 1) {
				ringT = Math.min(1, ringT + dt * 1.6);
				var rr = 0.05 + ringT * 0.22;
				ring.scale.set(rr, rr, 1);
				ring.material.opacity = (1 - ringT) * 0.9;
			} else {
				ring.material.opacity = 0;
			}
			nodeObjs.forEach(function (sp) {
				var target = (hovered === sp) ? sp.userData.base * 1.5 : sp.userData.base;
				sp.scale.x = lerp(sp.scale.x, target, 0.12);
				sp.scale.y = lerp(sp.scale.y, target, 0.12);
			});
		}

		if (t - lastTip > 0.05) {
			lastTip = t;
			raycastHover();
		}
		controls.update();
		renderer.render(scene, camera);
	}

	if (reduce) {
		controls.update();
		renderer.render(scene, camera);
	} else {
		animate();
	}
})();
