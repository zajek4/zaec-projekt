/*
 * ZAEC — HERO 01 "SIGNAL GRID" v2 (hologramski planet).
 *
 * Namjerno stilizirani blueprint/hologram globus (NE lažna Zemlja):
 *   - čitljiva sfera s fresnel rubom + atmosferski halo + zvjezdano polje
 *   - ravnomjerna "digitalna površina" (Fibonacci sfera, bez točkastih mrlja)
 *   - blueprint mreža širina/dužina
 *   - obris Hrvatske + gradovi kao oznake, ZAEC · Osijek hub
 *   - lukovi (cijevi) + kometi koji "skaču" od čvora do čvora u hub
 * Nativni rAF, bez GSAP ovisnosti. Render se pauzira izvan viewporta.
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

	var renderer;
	try {
		if (!window.WebGLRenderingContext) {
			showFallback();
			return;
		}
		renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
	} catch (err) {
		showFallback();
		return;
	}
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2));
	renderer.setClearColor(0x000000, 0);

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
	camera.position.set(0, 0.12, 3.25);
	camera.lookAt(0, 0, 0);

	var root = new THREE.Group();
	root.rotation.y = 0.35; // Hrvatska/hub u kadar
	scene.add(root);

	var controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.dampingFactor = 0.06;
	controls.rotateSpeed = 0.5;
	controls.minPolarAngle = Math.PI * 0.25;
	controls.maxPolarAngle = Math.PI * 0.75;
	controls.enableRotate = fine; // touch ne smije oteti scroll
	var dragging = false;
	controls.addEventListener('start', function () { dragging = true; });
	controls.addEventListener('end', function () { dragging = false; });

	var GLOBE_R = 1.0;

	function llToVec(lat, lng, r) {
		var phi = (90 - lat) * Math.PI / 180;
		var theta = (lng + 180) * Math.PI / 180;
		return new THREE.Vector3(
			-r * Math.sin(phi) * Math.cos(theta),
			r * Math.cos(phi),
			r * Math.sin(phi) * Math.sin(theta)
		);
	}

	/* ---------- teksture ---------- */
	function radialTexture(hex, core) {
		var c = document.createElement('canvas');
		c.width = c.height = 256;
		var ctx = c.getContext('2d');
		var g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
		g.addColorStop(0, core);
		g.addColorStop(0.25, hex + 'e6');
		g.addColorStop(0.6, hex + '55');
		g.addColorStop(1, hex + '00');
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, 256, 256);
		return new THREE.CanvasTexture(c);
	}
	function sphereGradientTexture() {
		var c = document.createElement('canvas');
		c.width = 1; c.height = 256;
		var ctx = c.getContext('2d');
		var g = ctx.createLinearGradient(0, 0, 0, 256);
		g.addColorStop(0, '#24334f');
		g.addColorStop(0.5, '#111c30');
		g.addColorStop(1, '#070d18');
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, 1, 256);
		return new THREE.CanvasTexture(c);
	}

	var texAtmo = radialTexture('#7dd3ff', 'rgba(255,255,255,0.9)');
	var texNodeHub = radialTexture('#7dd3ff', '#ffffff');
	var texNodeCity = radialTexture('#4d80ff', '#ffffff');
	var texNodeRemote = radialTexture('#a3a39d', '#ffffff');

	/* ---------- atmosfera + zvijezde (scena nikad nije prazna) ---------- */
	var atmosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: texAtmo, color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false }));
	atmosphere.scale.set(3.3, 3.3, 1);
	scene.add(atmosphere);

	var STAR_N = low ? 260 : 460;
	var starPos = new Float32Array(STAR_N * 3);
	for (var s = 0; s < STAR_N; s++) {
		var v = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(6 + Math.random() * 5);
		starPos[s * 3] = v.x; starPos[s * 3 + 1] = v.y; starPos[s * 3 + 2] = v.z;
	}
	var starGeo = new THREE.BufferGeometry();
	starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
	var stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x4d80ff, size: 0.02, transparent: true, opacity: 0.4, depthWrite: false }));
	scene.add(stars);

	/* ---------- tijelo sfere (čitljivo) ---------- */
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R, 72, 48), new THREE.MeshBasicMaterial({ map: sphereGradientTexture() }));
	root.add(sphere);

	/* ---------- fresnel rub svjetla (3D pop) ---------- */
	var rimMat = new THREE.ShaderMaterial({
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		uniforms: { uColor: { value: new THREE.Color(0x7dd3ff) }, uOpacity: { value: 0.55 } },
		vertexShader: [
			'varying float vRim;',
			'void main(){',
			'  vec4 wp = modelMatrix * vec4(position,1.0);',
			'  vec3 n = normalize(mat3(modelMatrix) * normal);',
			'  vec3 v = normalize(cameraPosition - wp.xyz);',
			'  vRim = pow(1.0 - abs(dot(n, v)), 3.0);',
			'  gl_Position = projectionMatrix * viewMatrix * wp;',
			'}'
		].join('\n'),
		fragmentShader: [
			'uniform vec3 uColor;',
			'uniform float uOpacity;',
			'varying float vRim;',
			'void main(){ gl_FragColor = vec4(uColor, vRim * uOpacity); }'
		].join('\n')
	});
	var rim = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_R + 0.02, 72, 48), rimMat);
	root.add(rim);

	/* ---------- blueprint mreža (širine/dužine) ---------- */
	function graticulePoints(radius) {
		var pts = [];
		var i, a0, a1, p0, p1, lat, theta;
		for (lat = -75; lat <= 75; lat += 15) {
			var phi = (90 - lat) * Math.PI / 180;
			var rr = radius * Math.cos(phi);
			var yy = radius * Math.sin(phi);
			for (i = 0; i < 64; i++) {
				a0 = (i / 64) * Math.PI * 2;
				a1 = ((i + 1) / 64) * Math.PI * 2;
				pts.push(new THREE.Vector3(rr * Math.cos(a0), yy, rr * Math.sin(a0)));
				pts.push(new THREE.Vector3(rr * Math.cos(a1), yy, rr * Math.sin(a1)));
			}
		}
		for (theta = 0; theta < 180; theta += 30) {
			var t = theta * Math.PI / 180;
			for (i = 0; i < 64; i++) {
				p0 = (90 - (i / 64) * 180) * Math.PI / 180;
				p1 = (90 - ((i + 1) / 64) * 180) * Math.PI / 180;
				pts.push(new THREE.Vector3(-radius * Math.sin(p0) * Math.cos(t), radius * Math.cos(p0), radius * Math.sin(p0) * Math.sin(t)));
				pts.push(new THREE.Vector3(-radius * Math.sin(p1) * Math.cos(t), radius * Math.cos(p1), radius * Math.sin(p1) * Math.sin(t)));
			}
		}
		return pts;
	}
	var graticuleMat = new THREE.LineBasicMaterial({ color: 0x7dd3ff, transparent: true, opacity: 0.16 });
	var graticule = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(graticulePoints(GLOBE_R + 0.006)), graticuleMat);
	root.add(graticule);

	/* ---------- digitalna površina (ravnomjerna gustoća!) ---------- */
	var DOT_N = low ? 1500 : 2600;
	var dotPos = new Float32Array(DOT_N * 3);
	var golden = Math.PI * (3 - Math.sqrt(5));
	for (var d = 0; d < DOT_N; d++) {
		var yy = 1 - (d / (DOT_N - 1)) * 2;
		var rr = Math.sqrt(Math.max(0, 1 - yy * yy));
		var th = golden * d;
		dotPos[d * 3] = Math.cos(th) * rr;
		dotPos[d * 3 + 1] = yy;
		dotPos[d * 3 + 2] = Math.sin(th) * rr;
	}
	var dotGeo = new THREE.BufferGeometry();
	dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
	var dotsMat = new THREE.PointsMaterial({ color: 0x9fc3ff, size: 0.009, transparent: true, opacity: 0.6, depthWrite: false });
	var dots = new THREE.Points(dotGeo, dotsMat);
	root.add(dots);

	/* ---------- obris Hrvatske (čista crta, bez mrlje) ---------- */
	var HR_OUTLINE = [
		[46.55, 16.40], [46.28, 17.00], [45.92, 18.90], [45.25, 19.00],
		[44.82, 18.60], [43.50, 17.00], [42.90, 17.60], [42.42, 18.70],
		[43.00, 16.50], [43.50, 15.85], [44.10, 15.20], [44.55, 14.40],
		[45.10, 14.20], [45.40, 13.60], [45.62, 13.92], [45.80, 15.00],
		[46.20, 16.00], [46.55, 16.40]
	];
	var outlinePts = HR_OUTLINE.map(function (p) { return llToVec(p[0], p[1], GLOBE_R + 0.014); });
	var outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePts);
	var outlineMat = new THREE.LineBasicMaterial({ color: 0x1e5eff, transparent: true, opacity: 0.95 });
	var outline = new THREE.Line(outlineGeo, outlineMat);
	root.add(outline);
	var outlineHalo = new THREE.Line(outlineGeo, new THREE.LineBasicMaterial({ color: 0x7dd3ff, transparent: true, opacity: 0.25 }));
	outlineHalo.scale.setScalar(1.012);
	root.add(outlineHalo);

	/* ---------- čvorovi ---------- */
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

	var nodeObjs = [];
	nodes.forEach(function (n) {
		var tex = n.type === 'hub' ? texNodeHub : (n.type === 'city' ? texNodeCity : texNodeRemote);
		var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xffffff, transparent: true, opacity: 0.95, depthWrite: false }));
		var s = n.type === 'hub' ? 0.2 : (n.type === 'city' ? 0.11 : 0.08);
		sp.scale.set(s, s, 1);
		sp.position.copy(llToVec(n.lat, n.lng, GLOBE_R + 0.016));
		sp.userData = { node: n, base: s };
		root.add(sp);
		nodeObjs.push(sp);
	});

	/* ---------- lukovi (cijevi) + kometi ---------- */
	function makeCurve(a, b) {
		var va = llToVec(a.lat, a.lng, GLOBE_R + 0.012);
		var vb = llToVec(b.lat, b.lng, GLOBE_R + 0.012);
		var dist = va.distanceTo(vb);
		var alt = 0.12 + dist * 0.26;
		var c1 = va.clone().lerp(vb, 0.33).normalize().multiplyScalar(GLOBE_R + alt * 1.55);
		var c2 = va.clone().lerp(vb, 0.66).normalize().multiplyScalar(GLOBE_R + alt * 1.55);
		return new THREE.CubicBezierCurve3(va, c1, c2, vb);
	}

	var hub = nodes[0];
	var arcSpecs = [];
	nodes.slice(1).forEach(function (n) { arcSpecs.push({ a: n, b: hub }); });
	// par dodatnih veza između remote čvorova — bogatija mreža
	arcSpecs.push({ a: nodes[8], b: nodes[7] }); // NY ↔ London
	arcSpecs.push({ a: nodes[4], b: nodes[5] }); // Beč ↔ München

	var arcs = [];
	arcSpecs.forEach(function (spec) {
		var curve = makeCurve(spec.a, spec.b);
		var tube = new THREE.Mesh(
			new THREE.TubeGeometry(curve, 64, 0.0055, 8, false),
			new THREE.MeshBasicMaterial({ color: 0x7dd3ff, transparent: true, opacity: 0.5, depthWrite: false })
		);
		root.add(tube);
		arcs.push({ curve: curve, tube: tube });
	});

	var cometTex = texNodeHub;
	var cometMat = new THREE.SpriteMaterial({ map: cometTex, color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 1 });
	var comets = [];
	var COMET_N = low ? 2 : 3;
	for (var c2 = 0; c2 < COMET_N; c2++) {
		var sp = new THREE.Sprite(cometMat);
		sp.scale.set(0.09, 0.09, 1);
		sp.visible = false;
		var tail = new THREE.Sprite(new THREE.SpriteMaterial({ map: cometTex, color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 }));
		tail.scale.set(0.05, 0.05, 1);
		tail.visible = false;
		root.add(sp);
		root.add(tail);
		comets.push({ sp: sp, tail: tail, arcIndex: (c2 * 2 + 1) % (nodes.length - 1), phase: c2 / COMET_N });
	}

	var ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: texNodeHub, color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
	ring.position.copy(llToVec(hub.lat, hub.lng, GLOBE_R + 0.02));
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

	/* ---------- copy reveal + cinematic ulaz (koordinirano s preloaderom) ---------- */
	var revealed = false;
	var intro = 0;
	function revealCopy() {
		if (!revealed) {
			revealed = true;
			section.classList.add('net-live');
			intro = 0;
		}
	}
	if (document.body.classList.contains('loaded')) {
		revealCopy();
	} else if ('MutationObserver' in window) {
		var bodyWatch = new MutationObserver(function () {
			if (document.body.classList.contains('loaded')) { revealCopy(); }
		});
		bodyWatch.observe(document.body, { attributes: true, attributeFilter: ['class'] });
	}
	window.addEventListener('load', revealCopy);
	setTimeout(revealCopy, 2600); // failsafe

	function easeOutBack(t) { var c1 = 1.70158; var c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
	function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
	function lerp(a, b, t) { return a + (b - a) * t; }

	/* ---------- petlja ---------- */
	var clock = new THREE.Clock();
	var lastTip = 0;

	function animate() {
		requestAnimationFrame(animate);
		if (!inView || document.hidden) {
			return;
		}
		var dt = Math.min(clock.getDelta(), 0.05);
		var t = clock.elapsedTime;

		// cinematic ulaz
		if (revealed && intro < 1) {
			intro = Math.min(1, intro + dt * 0.7);
		}
		var introE = easeOut(intro);
		var pop = easeOutBack(intro);
		root.scale.setScalar(0.86 + 0.14 * pop);
		atmosphere.material.opacity = 0.55 * introE;
		rimMat.uniforms.uOpacity.value = 0.55 * introE;
		dotsMat.opacity = 0.6 * introE;
		graticuleMat.opacity = 0.16 * introE;
		stars.material.opacity = 0.4 * introE;
		outlineMat.opacity = 0.95 * introE;
		outlineHalo.material.opacity = 0.25 * introE;
		arcs.forEach(function (a) { a.tube.material.opacity = 0.5 * introE; });

		// exit lerp
		exitCur.stage.o = lerp(exitCur.stage.o, exitTarget.stage.o, 0.14);
		exitCur.stage.y = lerp(exitCur.stage.y, exitTarget.stage.y, 0.14);
		exitCur.stage.s = lerp(exitCur.stage.s, exitTarget.stage.s, 0.14);
		exitCur.copy.o = lerp(exitCur.copy.o, exitTarget.copy.o, 0.14);
		exitCur.copy.y = lerp(exitCur.copy.y, exitTarget.copy.y, 0.14);
		applyExit();

		if (!reduce && revealed) {
			if (!dragging) { root.rotation.y += dt * 0.05; }
			dots.rotation.y += dt * 0.008;
			comets.forEach(function (cm, idx) {
				cm.phase += dt * (0.17 + idx * 0.02);
				if (cm.phase >= 1) {
					cm.phase = 0;
					cm.arcIndex = (cm.arcIndex + 1) % (nodes.length - 1);
					fireRing();
				}
				var arc = arcs[cm.arcIndex];
				var curve = arc.curve;
				var pos = curve.getPointAt(easeOut(cm.phase));
				cm.sp.position.copy(pos);
				cm.sp.visible = intro > 0.4;
				var tailPos = curve.getPointAt(Math.max(0, easeOut(cm.phase) - 0.05));
				cm.tail.position.copy(tailPos);
				cm.tail.visible = cm.sp.visible;
				var s = 0.07 + 0.02 * Math.sin(t * 6 + idx);
				cm.sp.scale.set(s, s, 1);
				cm.tail.scale.set(s * 0.6, s * 0.6, 1);
			});
			if (ringT < 1) {
				ringT = Math.min(1, ringT + dt * 1.5);
				var rr = 0.06 + ringT * 0.3;
				ring.scale.set(rr, rr, 1);
				ring.material.opacity = (1 - ringT) * 0.95;
			} else {
				ring.material.opacity = 0;
			}
			nodeObjs.forEach(function (sp) {
				var base = sp.userData.base;
				var target = (hovered === sp) ? base * 1.5 : base;
				if (sp.userData.node.type === 'hub') { target = base * (1 + 0.08 * Math.sin(t * 2.2)); }
				sp.scale.x = lerp(sp.scale.x, target, 0.12);
				sp.scale.y = lerp(sp.scale.y, target, 0.12);
			});
		} else if (!revealed) {
			// dok traje preloader, tihi idle kadar
			root.rotation.y += dt * 0.03;
		}

		if (t - lastTip > 0.05) {
			lastTip = t;
			raycastHover();
		}
		controls.update();
		renderer.render(scene, camera);
	}

	if (reduce) {
		// statičan kadar bez petlje
		intro = 1;
		root.scale.setScalar(1);
		rimMat.uniforms.uOpacity.value = 0.55;
		dotsMat.opacity = 0.6;
		graticuleMat.opacity = 0.16;
		arcs.forEach(function (a) { a.tube.material.opacity = 0.5; });
		controls.update();
		renderer.render(scene, camera);
	} else {
		animate();
	}
})();
