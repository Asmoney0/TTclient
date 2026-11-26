var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, c0, c1, gb, gc, gd, ge, gf, gg, gh, gi,
	gj, gk, gl, gm, gn, j3, jS, jT, aCv, mk, ku, a5l, zE, a2D, aHY, a95, a96, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em",
		"50%", "0.5em", "email", "click", "Data", " / ", "territorial.io", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "undefined", "pointer", "middle", "fixed", "break-word",
		"bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "function", "button", "Value", "Enter", "20%", "1.5em", "0.0em 0.9em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)",
		"string", "round", "rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseover", "mouseout", "mouseleave", "left", "keydown", "https://", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Redacted ",
		"Battle Royale", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", " voted with ", "  • ", "   Gold: ", "✅ OK", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui",
		"style", "right", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "repeat(", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mousemove", "long", "logo",
		"loading", "italic ", "https://territorial.io/", "grid", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "block", "battleRoyale", "arraybuffer",
		"aria-pressed", "arena", "account", "accept", "_blank", "^[0-9]+$", "[Redacted Message]", "Seed", "Report", "Reload", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "GET", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%",
		"255,255,255", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1.3em", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,",
		"-1px -1px 0 lightgray,", ",0,0.85)", ", 1fr)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
	];

function a() {
	var b, c;

	function r() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a4, b.onclose = function() {
			a5()
		}
	}

	function a4() {
		if (b && b.readyState === b.OPEN) {
			var j = new a7;
			j.a8(1608), j.a9(1, 0), j.a9(6, 7), j.a9(2, a1 ? a1.id : 3), j.a9(1, m.aA ? 1 : 0), j.a9(1, m.aB ? 1 : 0), j.a9(1, m ? m.n : 0);
			for (var aC = 0; aC < c.length && aC < 228; aC++) j.a9(7, c.charCodeAt(aC) % 128);
			b.send(j.aD), a5()
		}
	}

	function a5() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		c = "";
		try {
			var h, f = function(e) {
				if (!e.error) return 0;
				var stack = e.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a6 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a6.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(e);
			if (0 === f || e.lineno <= 3) return void console.log("Error: External Code | " + f);
			if (window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + f, performance.memory && ((h = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), h.push(Math.floor(performance.memory.totalJSHeapSize /
					1e5)), h.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c = c + "|" + h.join(" ")), c = (c = i ? c + "|R" + i.j + "," + i.k + "," + i.l.toFixed(2) : c) + "|" + e.message, m && 1 === m.n) {
				if (c = m.o + "|" + p.q.join(",") + "|" + c, e.lineno < 62) return void r();
				var s = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error.";
				s += "<br>Error Message: " + c, p.t(), u.v(4, 5, new w("🤖 Beep Boop! An error occurred.", s, !0, [new x("Close", function() {
					u.y(), u.z.a0()
				}), new x("Reload", function() {
					a1.a2.a3()
				})]))
			}
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		r()
	})
}

function c2(c3) {
	m && !c3 || (c5(), bO = new c6, bN = new c7, bD = new c8, bE = new c9, aE = new cA, bA = new cB, bI = new cC, bJ = new cD, aF = new cE, aG = new cF, aH = new cG, aI = new cH, aJ = new cI, aK = new cJ, aL = new cK, aM = new cL, aN = new cM, aO =
		new cN, aP = new cO, aQ = new cP, aR = new cQ, aS = new cR, aT = new cS, aU = new cT, aV = new cU, aW = new cV, aX = new cW, aY = new cX, aZ = new cY, aa = new cZ, ab = new ca, ac = new cb, ad = new cc, al = new cd, am = new ce, ao =
		new cf, an = new cg, ae = new ch, af = new ci, ai = new cj, ag = new ck, ah = new cl, aj = new cm, b0 = new cn, ak = new co, aq = new cp, ar = new cq, at = new cr, b1 = new cs, az = new ct, ap = new cu, au = new cv, av = new cw, aw =
		new cx, i = new cy, ax = new cz, ay = new d0, b2 = new d1, b3 = new d2, b4 = new d3, b5 = new d4, b6 = new d5, b7 = new d6, b8 = new d7, b9 = new d8, bB = new d9, bC = new dA, bF = new dB, bG = new a7, bH = new dC, bK = new dD, bL =
		new dE, bM = new dF, bP = new dG, bQ = new dH, bR = new dI, bS = new dJ, bT = new dK, bU = new dL, bV = new dM, bW = new dN, u = new dO, bX = new dP, a1 = new dQ, m = new dR, bl = new dS, bm = new dT, bj = new dU, bk = new dV, bd =
		new dW, be = new dX, bY = new dY, bZ = new dZ, bg = new da, bh = new db, bi = new dc, bn = new dd, bf = new de, p = new df, bo = new dg, bp = new dh, bq = new di, bs = new dj, bt = new dk, bu = new dl, bv = new dm, bw = new dn, bx =
		new dp, by = new dq, bz = new dr, c0 = new ds, c1 = new dt, m.dv(), a1.dv(), i.dw(), bm.dv(), bA.dv(), bA.dx(), (ba = new dy).dv(), bD.dv(), bY.dv(), b1.dv(), bI.dv(), bJ.dv(), bV.dv(), u.dv(), bb = new dz, i.dv(), bi.dv(), bf.dv(), bZ
		.dv(), bc = new e0, az.dv(), af.e1(), bX.dv(), aq.dv(), ab.dv(), aU.dv(), aj.dv(), bM.dv(), ac.dv(), bi.e2 = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.e3() || a1.a2.e4(), i.e5(), m.n = 1)
}

function dR() {
	this.e6 = 2, this.e7 = 1780, this.e8 = 0;
	this.rVersion = 27, this.eC = "26 Nov 2026", this.eD = 0, this.eE = 2, this.dv = function() {
		this.o = "2.17.18", this.eC = this.eC + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eG = 0 <= this.hostname.indexOf("github.io"), this.eH = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eJ = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.eG)
	}, this.n = 0
}

function eK() {
	var eL = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eM = [100, 60, 30, 15, 6, 1],
		eN = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eO = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eQ = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eR = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eS = function(id, eT, eU) {
		eT = this.eV(eT);
		return +(eN[eT][id] > eU)
	}, this.eV = function(eT) {
		for (var aC = 0; aC < eM.length; aC++)
			if (eM[aC] <= eT) return aC;
		return eM.length
	}, this.eW = function(eT) {
		return eL[this.eV(eT)]
	}, this.eX = function(id, eY) {
		return eO[id].replace(new RegExp("x", "g"), eY)
	}, this.eZ = function(id, eY) {
		return eQ[id].replace(new RegExp("x", "g"), eY)
	}, this.ea = function(id, eb) {
		return this.eR[5][id]
	}
}

function dP() {
	this.ec = new ed, this.ee = new ef, this.turnstile = new eg, this.dv = function() {
		a1.a2.eh(), this.turnstile.dv()
	}, this.ei = function() {
		return bm.buffer.data[160].value
	}
}

function ed() {
	var ej = 12e3;
	this.show = function(ek) {
		return !ek && !bX.ei() && (0 === a1.id ? bX.ee.show() : !(bi.el < ej) && (ek = 1 === a1.id ? 72e4 : 108e4, ej = bi.el + ek, 2 === m.e6) && a1.a2.en(Math.floor(ek)))
	}
}

function ef() {
	var eo = null,
		ej = 2e4,
		ep = 0;
	this.eq = function() {
		bi.el < ej || (ej = bi.el + 1e4, 0 !== a1.id) || eo || bX.ei() || (b1.z.er(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.es.et(5) : ej = bi.el + 1e3)
	}, this.eu = function(ev) {
		eo = ev
	}, this.show = function() {
		return !(!eo || bi.el < ep) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ep = bi.el + 6e4, (new ew).show(eo.ex, eo.colors, eo.id), !(eo = null)))
	}
}

function eg() {
	this.ey = 0;
	var f1, ez = null,
		f0 = 0,
		f2 = "",
		f3 = 0,
		f4 = null,
		f5 = -1,
		f6 = -1,
		f7 = 0;

	function fH() {
		if (null !== f4 && null !== ez) {
			f0 = 0;
			try {
				window.turnstile.remove(ez), f4.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			ez = f4 = null
		}
	}

	function fB(fL) {
		return "" !== f2 && f3 + 1e3 * (300 - fL) > performance.now()
	}
	this.dv = function() {
		var f9;
		m.e8 || !m.aA && !m.eG ? (console.log("turnstile cannot be loaded"), this.ey = -1) : ((f9 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f9.async = !0, f9.onload =
			function() {
				bX.turnstile.ey = 1, console.log("turnstile onload"), bX.turnstile.fA()
			}, f9.onerror = function() {
				bX.turnstile.ey = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f9))
	}, this.fA = function() {
		var em;
		return !(1 !== this.ey || (window.turnstile ? f0 ? (console.log("turnstile error 246"), 1) : fB(30) || (em = performance.now()) < f7 && f5 === bJ.fC.fD(bm.buffer.data[105].value, 5) && f6 === aa.fE || (f2 = "", f0 = 1, f1 = em, (f4 =
			document.createElement("div")).style.position = "fixed", f4.style.left = "0", f4.style.top = "0", f4.style.zIndex = "100", document.body.appendChild(f4), console.log("turnstile render"), ez = window.turnstile.render(
			f4, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(fF) {
					console.log("turnstile success " + Math.floor(performance.now() - f1)), f2 = fF, f3 = performance.now(), bX.turnstile.fG(), fH()
				},
				"expired-callback": function() {
					fH(), console.log("turnstile expired " + Math.floor(performance.now() - f1))
				},
				"error-callback": function() {
					fH(), console.log("turnstile callback error " + Math.floor(performance.now() - f1)), bX.turnstile.ey = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		fH()
	}, this.fG = function() {
		fB(8) && bq.fI && b1.z.er(b1.z.fJ) && (f7 = performance.now() + 36e5 - 1e4, f5 = bJ.fC.fD(bm.buffer.data[105].value, 5), f6 = aa.fE, b1.es.fK(f2), f2 = "", console.log("sendTokenToLobby success"))
	}
}

function cg() {
	this.fM = new fN
}

function fN() {
	this.fO = function(fP) {
		var fS;
		return bV.fQ(bV.fR) && aE.data.passableMountains && (fS = ad.fT(fP), this.fU(aE.fV, fS) || this.fW(aE.fV, fS)) && 0 !== (fS = function(fr) {
			for (var fs = bP.ft(fr), fu = bP.fv(fr), max = Math.max(bV.fw, bV.fx) - 2, fy = max * max, fz = !1, g0 = 0, g1 = 0; g1 < max; g1++) {
				var g2, fX = function(fs, fu, g1) {
					for (var aC = 0; aC <= g1; aC++)
						for (var g4 = -1; g4 < 2; g4 += 2)
							for (var g5 = -1; g5 < 2; g5 += 2)
								for (var ev = 0; ev < 2; ev++) {
									var fP = function(fs, fu) {
										if (bP.g7(fs, fu)) {
											fs = bP.g8(fs, fu), fu = bP.fb(fs);
											if (ad.fg(fu) && ad.g9(fu)) return fs
										}
										return 0
									}(fs + ev * g4 * aC + (1 - ev) * g5 * g1, fu + ev * g5 * g1 + (1 - ev) * g4 * aC);
									if (fP) return fP
								}
					return 0
				}(fs, fu, g1);
				fX && (g2 = bP.g3(fs, fu, fX)) < fy && (g0 = fX, fy = g2, fz || (fz = !0, max = Math.floor(Math.sqrt(g2)) + 1))
			}
			return g0
		}(bP.fZ(fP))) && (fP = bP.fb(fS), ad.fc(fP) || (fP = ad.fd(fP)) !== aE.fV && bw.fe(fP, aE.fV)) ? fS : 0
	}, this.ff = function(player, fX) {
		fX = bP.fb(fX);
		if (ad.fg(fX)) {
			if (ad.fc(fX)) bR.fh[0] = aE.fi;
			else if (ad.fd(fX) !== bR.fh[0]) return !1;
			for (var fj = function(fP) {
					var fn = ad.fn,
						fj = [];
					loop: for (var fo = 3; 0 <= fo; fo--) {
						var fp = fP + fn[fo];
						if (ad.fq(fp)) {
							for (var id = ad.fT(fp), aC = 0; aC < fj.length; aC++)
								if (id === fj[aC]) continue loop;
							bR.fm[fj.length] = fp, fj.push(id)
						}
					}
					return fj
				}(fX), fl = fj.length, aC = 0; aC < fl; aC++)
				if (this.fU(player, fj[aC]) || this.fW(player, fj[aC])) return bR.fm[0] = bR.fm[aC], !0
		}
		return !1
	}, this.fU = function(player, fS) {
		for (var gA = ah.gA[player], fl = gA.length, gB = Math.max(bO.gC(fl, 12), 1), fn = ad.fn, aC = 0; aC < fl; aC += gB)
			for (var fa = gA[aC], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp) && fS === ad.fT(fp)) return !0
			}
		return !1
	}, this.fW = function(player, fS) {
		for (var gA = ah.gA[player], fl = gA.length, fn = ad.fn, aC = 0; aC < fl; aC++)
			for (var fa = gA[aC], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp) && fS === ad.fT(fp)) return !0
			}
		return !1
	}
}

function dI() {
	this.h = new Array(4), this.gF = new Uint16Array(2), this.gG = new Uint16Array(2), this.gH = new Int32Array(2), this.gI = new Uint32Array(2), this.gJ = new Uint32Array(2), this.gK = new Uint8Array(4), this.gL = new Uint8Array(4), this.fm =
		new Uint32Array(4), this.gM = new Uint32Array(5), this.fh = new Uint32Array(8), this.gN = new Uint32Array(8), this.gO = new Uint16Array(16), this.gP = new Uint16Array(512), this.gQ = new Uint16Array(512), this.gR = new Uint16Array(512), this
		.gS = new Uint16Array(0), this.dv = function() {
			var fl = bV.fw * bV.fx;
			this.gS.length !== fl && (this.gS = new Uint16Array(fl))
		}, this.gT = function(h, gU) {
			return h[0] = gU, h
		}, this.gV = function(h, gU, gW) {
			return h[0] = gU, h[1] = gW, h
		}, this.gX = function(h, gU, gW, gY) {
			return h[0] = gU, h[1] = gW, h[2] = gY, h
		}, this.gZ = function(h, gU, gW, gY, ga) {
			return h[0] = gU, h[1] = gW, h[2] = gY, h[3] = ga, h
		}
}

function go() {
	gh = 0, gi = 2048, gj = new Uint32Array(4 * gi), gk = 0, gl = new Uint32Array(gi), gm = new Uint8Array(bV.fw * bV.fx)
}

function gp(player) {
	gc = player, gn = !1, gq(), gr();
	for (var aC = ae.gs(gc) - 1; 0 <= aC; aC--) gb = aC, gt();
	gn && gu()
}

function gu() {
	bw.gv(), bw.gw()
}

function gt() {
	gg = ae.gx(gc, gb), gd = ae.gy(gc, gb), ge = ae.gz(gc, gb), h0(), (0 !== gh && (h2(), h3()) ? h4 : h1)()
}

function h3() {
	if (!((gf = bO.gC(gd, gh)) > aE.h5)) {
		if (!ge) return !1;
		var h6 = gh * (1 + aE.h5);
		gd += bD.h7.h8(gc, h6 - gd), gf = bO.gC(gd, gh)
	}
	return !0
}

function h2() {
	for (var aC = gh - 1; 0 <= aC; aC--) gm[bO.gC(gj[aC], 4)] = 0
}

function h1() {
	1 === ae.gs(gc) && aG.h9(gc);
	var em = bD.h7.hA(gc, gd);
	bg.hB(gc, gd - em, 12), ae.hC(gc, gb)
}

function gq() {
	for (var player = gc, hD = ah.hD, fl = Math.min(hD[player].length, gi), hE = 0, hF = gl, aC = fl - 1; 0 <= aC; aC--) hF[hE++] = hD[player][aC];
	gk = hE
}

function gr() {
	for (var aC = ah.hD[gc].length - 1; 0 <= aC; aC--) ad.fg(ah.hD[gc][aC]) && ad.hG(ah.hD[gc][aC], gc);
	ah.hD[gc] = []
}

function h0() {
	gh = 0, (gg === aE.fi ? hH : hI)()
}

function hI() {
	for (var hJ, hK, aC, fn = ad.fn, fo = 3; 0 <= fo; fo--)
		for (aC = gk - 1; 0 <= aC; aC--) hJ = gl[aC] + fn[fo], hK = bO.gC(hJ, 4), 0 === gm[hK] && ad.hL(hJ) && ad.fd(hJ) === gg && (gm[hK] = 1, gj[gh++] = hJ)
}

function hH() {
	for (var hJ, hK, aC, fn = ad.fn, fo = 3; 0 <= fo; fo--)
		for (aC = gk - 1; 0 <= aC; aC--) hJ = gl[aC] + fn[fo], hK = bO.gC(hJ, 4), 0 === gm[hK] && ad.fc(hJ) && (gm[hK] = 1, gj[gh++] = hJ)
}

function h4() {
	hM() ? (hN(), gg !== aE.fi && hO()) : h1()
}

function hO() {
	bw.hP(), bw.hQ(ah.hR[gg]), bw.hQ(ah.hS[gg]), bV.fQ(bV.fR) && bw.hQ(ah.gA[gg]), bw.hT(ah.hD[gg]), bw.hU(ah.hS[gg]), bw.hU(ah.gA[gg]), bw.hV(), bw.hW()
}

function hN() {
	gn = !0, ae.hX(gc, gb, gd), ae.hY(gc, gb), ah.hZ[gc] += gh, bw.ha(), hb()
}

function hM() {
	return (gg === aE.fi ? hc : hd)()
}

function hd() {
	var he = gh * aE.h5,
		hf = hg(),
		hh = hi(),
		hf = he + 2 * hf + hh,
		hk = gf * gh;
	return hf < hk ? (gd -= hf, bg.hB(gc, hf, 13), hl(hf - he, hh), !0) : ge && 0 === hh ? (gd -= hk, hk += bD.h7.h8(gc, hf - hk + 1), bg.hB(gc, hk, 13), hl(hk - he, 0), !0) : (gd -= hk, bg.hB(gc, hk, 13), hl(hk - he, hh), !1)
}

function hl(hk, hh) {
	if (0 < hh) {
		if (hk <= hh) return bg.hB(gg, hk, 13), void ae.hm(gg, gc, hh - hk);
		ae.hm(gg, gc, 0), hk -= hh
	}
	hk = bO.gC(hk, 2), hk = Math.min(ah.hn[gg], hk), bg.hB(gg, hk, 13), ah.hn[gg] -= hk
}

function hi() {
	return ae.ho(gg, gc)
}

function hg() {
	return bO.gC(gh * ah.hn[gg], 1 + bO.gC(10 * ah.hZ[gg], 16))
}

function hc() {
	var hp = gh * aE.h5;
	return gd -= hp, bg.hB(gc, hp, 13), !0
}

function hb() {
	for (var aC = gh - 1; 0 <= aC; aC--) ah.hD[gc].push(gj[aC]), ah.hR[gc].push(gj[aC]), ad.hG(gj[aC], gc)
}

function dN() {
	var hq = 0,
		hr = 0;
	this.hs = function(fs, fu) {
		hq = fs, hr = fu
	}, this.ht = function(code) {
		var i1, i3, fX;
		aE.hu || aE.hv || aN.hw || (bD.h7.hx(0) || bD.h7.hx(1)) && bD.h7.hy(aE.fV) && (aS.hz(hq, hr) ? aS.i0 = !1 : aQ.hz(hq, hr) || (i1 = bP.i2(hq), i3 = bP.i4(hr), fX = bP.g8(i1, i3), bP.i5(i1, i3) && (0 === code ? function(fX) {
			var iA, fP, fa;
			aE.iB ? -1 !== (iA = bv.iC(fX)) && bB.iD.iE(fX) : (fP = bP.fb(fX), ad.fq(fP) ? (iA = an.fM.fO(fP)) && (fa = bP.fb(iA), fa = ad.fc(fa) ? aE.fi : ad.fd(fa), bB.iD.iG(aS.iH(), iA, fa)) : (iA = bv.iI(fX)) < 0 || (fP = bP
				.fb(iA), ad.fc(fP) ? bw.iJ(aE.fV) ? bB.iD.iK(aS.iH(), aE.fi) : ae.gs(aE.fV) && b2.iL(aE.fi, aS.iH()) : (fa = ad.fd(fP), bw.fe(fa, aE.fV) && (bw.iM(aE.fV, fa) ? bB.iD.iK(aS.iH(), fa) : ae.gs(aE.fV) && b2.iL(
					fa, aS.iH())))))
		}(fX) : 1 === code ? function(fX) {
			bQ.iN.iO(aE.fV, fX) && bB.iD.iP(aS.iH(), bR.gN[7])
		}(fX) : 2 === code ? function(fX) {
			bQ.iQ.iR(aE.fV, fX) && bQ.iQ.iS(aS.iH())
		}(fX) : 3 === code && function(fX) {
			var player = aE.fV;
			player = ad.iT(bP.fb(fX)) ? bQ.iN.iU(player, fX) : bQ.iN.iO(player, fX);
			player && bB.iD.iP(aS.iH(), bR.gN[7])
		}(fX))))
	}, this.iV = function() {
		if (!(aE.hu || aE.hv || aN.hw) && bD.h7.hx(1)) {
			var hJ = aE.fV;
			if (bD.h7.hy(hJ)) {
				var fl = ae.gs(hJ);
				if (fl < 1) ! function() {
					var hJ = aE.fV;
					if (bw.iJ(hJ)) bB.iD.iK(aS.iH(), aE.fi);
					else
						for (var fn = ad.fn, hR = ah.hR, fl = hR[hJ].length, ih = Math.floor(Math.random() * fl), aC = 0; aC < fl; aC++)
							for (var ii = 3; 0 <= ii; ii--) {
								var ij = hR[hJ][(aC + ih) % fl] + fn[ii];
								if (ad.hL(ij)) {
									ij = ad.fd(ij);
									if (ij !== hJ && (!aE.il || bw.fe(hJ, ij))) return bB.iD.iK(aS.iH(), ij)
								}
							}
				}();
				else {
					for (var iX = 0, iY = ae.gy(hJ, 0), aC = 1; aC < fl; aC++) {
						var iZ = ae.gy(hJ, aC);
						iZ < iY && (iY = iZ, iX = aC)
					}
					bB.iD.iK(aS.iH(), ae.gx(hJ, iX))
				}
			}
		}
	}, this.ia = function() {
		if (!(aE.hu || aE.hv || aN.hw) && bD.h7.hy(aE.fV) && bD.h7.hx(1)) return ax.ib ? ax.ic(aE.fV) ? void bB.iD.ie(1) : void 0 : void(ax.ig(aE.fV) && bB.iD.ia())
	}
}

function im(io, size, ip, iq, font) {
	var aC, it = .2,
		canvas = document.createElement("canvas"),
		iu = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = io, canvas.height = io, iu.font = size + font, iu.textAlign = "center", iu.textBaseline = "middle", iu.fillStyle = "red", aC = 0; aC < ip.length; aC++) iu.fillText(ip[aC], .5 * io, .5 * io);
	return -1 < (canvas = function(ir) {
		var aC, eT, fo = ir.data;
		for (aC = fo.length - 4; 0 <= aC; aC -= 4)
			if (eT = fo[aC], iq <= eT) return Math.floor(aC / (4 * io));
		return -1
	}(iu.getImageData(0, 0, io, io))) && (it = (canvas - .5 * io + .1 * size) / size), Math.max(it, 0)
}

function dG() {
	this.iw = new Int16Array(4), this.ix = new Int16Array(4), this.iy = null, this.dv = function() {
		var aC;
		for (this.iw[0] = -bV.fw, this.iw[1] = 1, this.iw[2] = bV.fw, this.iw[3] = -1, this.iy = new Int16Array([-bV.fw, 1 - bV.fw, 1, bV.fw + 1, bV.fw, bV.fw - 1, -1, -bV.fw - 1]), aC = 0; aC < 4; aC++) this.ix[aC] = 4 * this.iw[aC]
	}, this.iz = function() {
		return bO.j0(Math.floor(.15 * (1 + .25 * a1.a2.j1()) * i.j2 / j3), 4, 128)
	}, this.j4 = function(fP, id) {
		for (var j5 = this.ix, aC = 0; aC < 4; aC++) {
			var fa = fP + j5[aC];
			if (ad.iT(fa) && ad.fT(fa) === id) return !0
		}
		return !1
	}, this.j6 = function(player, fP) {
		return !ad.fc(fP) && player === ad.fd(fP)
	}, this.g3 = function(i1, i3, fX) {
		return (i1 -= this.ft(fX)) * i1 + (i3 -= this.fv(fX)) * i3
	}, this.j7 = function(j8, j9, jA) {
		j8 = this.jC(j8) - this.jD(jA), j9 = this.jF(j9) - this.jG(jA);
		return Math.sqrt(j8 * j8 + j9 * j9)
	}, this.jH = function(jI, jJ) {
		var jB = this.ft(jI) - this.ft(jJ),
			jI = this.fv(jI) - this.fv(jJ);
		return ~~Math.sqrt(jB * jB + jI * jI + .5)
	}, this.jK = function(jI, jJ) {
		var jB = this.ft(jI) - this.ft(jJ),
			jI = this.fv(jI) - this.fv(jJ);
		return jB * jB + jI * jI
	}, this.jL = function(jM, jN, jO, jP) {
		return (jM -= jO) * jM + (jN -= jP) * jN
	}, this.jQ = function(hJ, jR) {
		return bO.gC(jR * ah.hn[hJ], 1e3)
	}, this.jC = function(j8) {
		return 16 * (j8 + jS) / j3
	}, this.jF = function(j9) {
		return 16 * (j9 + jT) / j3
	}, this.jU = function(fo) {
		return 16 * fo / j3
	}, this.i2 = function(j8) {
		return Math.floor((j8 + jS) / j3)
	}, this.i4 = function(j9) {
		return Math.floor((j9 + jT) / j3)
	}, this.i5 = function(i1, i3) {
		return 1 <= i1 && 1 <= i3 && i1 < bV.fw - 1 && i3 < bV.fx - 1
	}, this.ft = function(fX) {
		return fX % bV.fw
	}, this.fv = function(fX) {
		return bO.gC(fX, bV.fw)
	}, this.g8 = function(i1, i3) {
		return i3 * bV.fw + i1
	}, this.jV = function(i1, i3) {
		return 4 * this.g8(i1, i3)
	}, this.jW = function(fX) {
		return this.g7(this.ft(fX), this.fv(fX))
	}, this.g7 = function(i1, i3) {
		return 0 < i1 && i1 < bV.fw - 1 && 0 < i3 && i3 < bV.fx - 1
	}, this.fb = function(fX) {
		return fX << 2
	}, this.fZ = function(fP) {
		return fP >> 2
	}, this.jX = function(fX) {
		return bV.fw * this.fv(fX) * 256 + (this.ft(fX) << 4)
	}, this.jY = function(fX) {
		return this.jX(fX) + 8 + (bV.fw << 7)
	}, this.jZ = function(jA) {
		return bV.fw * (this.jG(jA) >> 4) + (this.jD(jA) >> 4)
	}, this.ja = function(jA) {
		var jA = this.jZ(jA),
			shift = bQ.jb.shift,
			j = bQ.jb.jc;
		return (this.ft(jA) >> shift) + j * (this.fv(jA) >> shift)
	}, this.jD = function(jA) {
		return jA % (bV.fw << 4)
	}, this.jG = function(jA) {
		return bO.gC(jA, bV.fw << 4)
	}, this.jd = function(fX, ii) {
		return fX + this.iw[ii]
	}, this.je = function(fP, ii) {
		return fP + this.ix[ii]
	}, this.jf = function(jI, jJ) {
		var jB = this.ft(jJ) - this.ft(jI),
			jJ = this.fv(jJ) - this.fv(jI);
		return Math.abs(jB) >= Math.abs(jJ) ? 1 + 2 * (jB < 0) : 2 * (0 < jJ)
	}, this.jg = function(player) {
		return this.g8(ah.jh[player] + ah.ji[player] >> 1, ah.jj[player] + ah.jk[player] >> 1)
	}, this.jl = function(player) {
		return this.g8(az.jm(ah.jh[player], ah.ji[player]), az.jm(ah.jj[player], ah.jk[player]))
	}
}

function cu() {
	this.jn = new jo, this.jp = new jq, this.jr = new js, this.performance = new jt, this.ju = new jv, this.jw = new jx, this.jy = new jz, this.k0 = new k1, this.k2 = new k3, this.dv = function() {
		this.jn.dv(), this.jr.dv(), this.performance.dv(), this.ju.dv(), this.jw.dv()
	}, this.eq = function() {
		this.performance.eq(), this.jn.eq(), this.jr.k4()
	}
}

function jv() {
	var k5, k7 = new Uint16Array(8);

	function kF(size, player) {
		for (var aC = ah.hD[player].length - 1; size <= aC; aC--) ad.kL(ah.hD[player][aC], player)
	}
	this.dv = function() {
		k5 = 0
	}, this.k8 = function(player, k9) {
		return bR.fh[1] = ah.hD[player].length, bR.fh[0] === aE.fi ? ap.ju.kA(player) : this.kB(player, bR.fh[0]), (0 !== bR.fh[1] || 0 !== ah.hD[player].length) && !(!k9 && bR.fh[1] === ah.hD[player].length || (bR.fh[0] === aE.fi ? ah.kC[
			player]++ : ah.kD[player]++, 0))
	}, this.kE = function(player) {
		kF(bR.fh[1], player), ae.eu(player, bR.gI[0], bR.fh[0]), aG.kG(player, !1)
	}, this.kH = function(player, kI, fl, iY) {
		var kJ = bO.gC(12 * ah.hn[player], 1024);
		iY -= iY >= bO.gC(ah.hn[player], 2) ? kJ : 0, kF(fl, player), ae.eu(player, iY, kI), ah.hn[player] -= iY + kJ, aG.kG(player, !1)
	}, this.kB = function(player, kI) {
		for (var ii, fn = ad.fn, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			if (ad.kK(ah.hR[player][aC]))
				for (ii = 3; 0 <= ii; ii--)
					if (ad.hL(ah.hR[player][aC] + fn[ii]) && ad.fd(ah.hR[player][aC] + fn[ii]) === kI) {
						ah.hD[player].push(ah.hR[player][aC]);
						break
					}
	}, this.kA = function(player) {
		for (var fn = ad.fn, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			if (ad.kK(ah.hR[player][aC]))
				for (var ii = 3; 0 <= ii; ii--)
					if (ad.fc(ah.hR[player][aC] + fn[ii])) {
						ah.hD[player].push(ah.hR[player][aC]);
						break
					}
	}, this.kM = function(player, kN) {
		var aC, g4, ii, ik, fl = ah.hR[player].length,
			kO = 256 <= fl ? 12 : 32 <= fl ? 6 : 1,
			kP = fl - 1 - az.kQ(kO),
			fn = ad.fn;
		k5 = 0;
		loop: for (aC = kP; 0 <= aC; aC -= kO)
			for (ii = 3; 0 <= ii; ii--)
				if ((ik = ad.fc(ah.hR[player][aC] + fn[ii]) ? aE.fi : ad.fd(ah.hR[player][aC] + fn[ii])) === aE.fi || ad.hL(ah.hR[player][aC] + fn[ii]) && ik !== player && (kN || bw.fe(player, ik))) {
					for (g4 = k5 - 1; 0 <= g4; g4--)
						if (k7[g4] === ik) continue loop;
					if (k7[k5] = ik, 8 <= ++k5) return !0
				}
		return 0 < k5
	}, this.kR = function(player, kN) {
		var aC, ii, ik, fn = ad.fn;
		for (k5 = 0, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			for (ii = 3; 0 <= ii; ii--)
				if ((ik = ad.fc(ah.hR[player][aC] + fn[ii]) ? aE.fi : ad.fd(ah.hR[player][aC] + fn[ii])) === aE.fi || ad.hL(ah.hR[player][aC] + fn[ii]) && ik !== player && (kN || bw.fe(player, ik))) return k7[k5++] = ik, !0;
		return !1
	}, this.kS = function() {
		for (var g5, aC = k5 - 1; 0 <= aC; aC--)
			if (k7[aC] === aE.fi) {
				for (k5--, g5 = aC; g5 < k5; g5++) k7[g5] = k7[g5 + 1];
				return !0
			} return !1
	}, this.kT = function(player) {
		for (var g5, aC = k5 - 1; 0 <= aC; aC--)
			if (ae.kU(player, k7[aC]))
				for (k5--, g5 = aC; g5 < k5; g5++) k7[g5] = k7[g5 + 1];
		return 0 === k5
	}, this.kV = function() {
		for (var aC = k5 - 1; 0 <= aC; aC--)
			if (bD.h7.kW(k7[aC])) return !0;
		return !1
	}, this.kX = function() {
		for (var aC = k5 - 1; 0 <= aC; aC--) bD.h7.kW(k7[aC]) || (k7[aC] = k7[--k5]);
		return 0 < k5
	}, this.kY = function(player) {
		for (var g5, kZ = k7[0], ka = ah.hn[kZ] + ae.ho(kZ, player), aC = k5 - 1; 1 <= aC; aC--)(g5 = ah.hn[k7[aC]] + ae.ho(k7[aC], player)) < ka && (kZ = k7[aC], ka = g5);
		return kZ
	}, this.kb = function(player) {
		var k, kc = k7[0];
		if (1 !== k5)
			for (var kd = bO.gC(ah.ji[player] + ah.jh[player], 2), ke = bO.gC(ah.jk[player] + ah.jj[player], 2), g1 = kf(kd - bO.gC(ah.ji[kc] + ah.jh[kc], 2)) + kf(ke - bO.gC(ah.jk[kc] + ah.jj[kc], 2)), aC = k5 - 1; 1 <= aC; aC--)(k = kf(kd - bO
				.gC(ah.ji[k7[aC]] + ah.jh[k7[aC]], 2)) + kf(ke - bO.gC(ah.jk[k7[aC]] + ah.jj[k7[aC]], 2))) < g1 && (g1 = k, kc = k7[aC]);
		return kc
	}, this.kg = function() {
		for (var kh = k7, ki = kh[0], hn = ah.hn, kj = hn[ki], aC = k5 - 1; 1 <= aC; aC--) {
			var hJ = kh[aC],
				g5 = hn[hJ];
			kj < g5 && (ki = hJ, kj = g5)
		}
		return ki
	}, this.kk = function() {
		return k7[az.kQ(k5)]
	}
}

function jx() {
	function l0(player, kI, kq) {
		3 <= kq && 2142 < bi.l6() && (kI === aE.fi || ah.hn[kI] < bO.gC(ah.hn[player], 20)) && aF.kv(player, 20)
	}

	function l3(player, iY, kI, kq) {
		3 <= kq && kq < 6 && bO.gC(ah.hn[player], 8) > ah.hn[kI] && (iY = Math.max(bO.gC(11 * ah.hn[kI], 5), bO.gC(ah.hn[player], 10)));
		kq = ah.hD[player].length;
		ap.ju.kB(player, kI), ap.ju.kH(player, kI, kq, iY)
	}

	function kz(player, iY) {
		var kI = aE.fi,
			fl = ah.hD[player].length;
		ap.ju.kA(player), ah.hD[player].length !== fl && ap.ju.kH(player, kI, fl, iY)
	}
	this.kl = new Uint8Array(aE.fi), this.dv = function() {
		this.kl.fill(0)
	}, this.km = function(player, iY) {
		var ko, kq, kr, ks;
		ae.kn(player) && (ko = af.kp(player), 3 <= (kq = aF.iY[player]) && kq < 6 && (iY = Math.max(ah.hn[player] - ko, iY)), kr = ah.hS[player].length, ks = ah.hR[player].length, 30 * ah.hZ[player] > aE.kt && ku[player] < 10 && 100 * ks <= kr &&
			aF.kv(player, 10), aE.il ? function(player, iY, kq, ko) {
				var kI;
				if (ap.ju.kM(player, !1) || ap.ju.kR(player, !1)) {
					if (!ap.ju.kT(player))
						if (ap.ju.kS()) kz(player, iY), l0(player, aE.fi, kq);
						else {
							if (az.l1(aF.l2[kq])) kI = ap.ju.kY(player);
							else {
								if (ap.ju.kV() && az.l1(aF.l4[kq]) && ap.ju.kX(), 6 === kq) return l3(player, iY, ap.ju.kk(), kq);
								kI = ap.ju.kb(player)
							}
							l3(player, iY, kI, kq), l0(player, kI, kq)
						}
				} else bQ.kx.eq(player) || ap.jy.eq(player) || ! function(player, iY, kq, ko) {
					var kl = ap.jw.kl;
					kl[player] = 0;
					var l7 = bj.fj[player];
					if (0 !== l7) {
						var l8 = ah.hn[player],
							hZ = ah.hZ;
						if (player < aE.l9 && (iY = l8), !(l8 < hZ[player] || 5 === kq && l8 < ko || 4 === kq && l8 < bO.gC(ko, 2))) {
							bk.lA(l7);
							for (var fl = bR.gG[0], gP = bR.gP, aC = az.kQ(fl), g5 = 0; g5 < fl; g5++) {
								var ev = gP[(g5 + aC) % fl];
								if (kl[ev]) return bB.lB.lC(player, ev, iY)
							}
							var lD = bQ.z.lD;
							for (g5 = 0; g5 < fl; g5++)
								if (ev = gP[(g5 + aC) % fl], lD[ev] && ev !== player) return bB.lB.lC(player, ev, iY)
						}
					}
				}(player, iY, kq, ko)
			}(player, iY, kq, ko) : (!ks || kr && (kr < ks && !az.kQ(10) || 100 * ks <= kr && az.kQ(3) || !az.kQ(8))) && bQ.kx.eq(player) || function(player, iY, kq) {
				ap.ju.kM(player, !0) || ap.ju.kR(player, !0) ? ap.ju.kT(player) || (ap.ju.kS() ? kz(player, iY) : az.l1(aF.l2[kq]) ? l3(player, iY, ap.ju.kY(player), kq) : 5 === kq ? l3(player, iY, ap.ju.kg(), kq) : (ap.ju.kV() && az.l1(aF
					.l4[kq]) && ap.ju.kX(), l3(player, iY, 6 === kq ? ap.ju.kk() : ap.ju.kb(player), kq))) : ap.jy.eq(player)
			}(player, iY, kq))
	}
}

function cE() {
	var lE = new Uint8Array(aE.fi),
		lF = new Uint16Array(aE.fi),
		lG = new Uint16Array(aE.fi),
		lH = new Uint8Array(aE.fi),
		lI = (this.iY = new Uint8Array(aE.fi), new Uint16Array(aE.fi)),
		lJ = new Uint16Array(aE.fi);

	function lY(aC) {
		lE[aC] = 1 + bO.gC(lI[aC] * az.random(), 10 * az.value(100))
	}
	this.lK = null, this.l4 = [97, 94, 70, 40, 20, 0, 100], this.lL = [500, 450, 400, 300, 80, 50, 100], this.l2 = [0, 0, 5, 25, 50, 100, 0], this.lM = [60, 74, 112, 200, 256, 512, 512], this.lN = [1, 2, 3, 4, 6, 8, 1], this.lO = [500, 450, 400, 300,
		80, 50, 100
	], this.lP = [100, 150, 250, 400, 600, 1e3, 100], this.dw = function() {
		this.lK = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dv = function() {
		lE.fill(0), lF.fill(0), lG.fill(0), lH.fill(0), this.iY.fill(0), lI.fill(0), lJ.fill(0);
		var lQ = aE.l9;
		if (9 === aE.lR) this.lS();
		else if (aE.lT)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lV - 1; 0 <= aC; aC--) {
					var ij = aC + lQ;
					this.iY[ij] = aE.data.botDifficultyData[ij]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lV - 1; 0 <= aC; aC--) this.iY[ij = aC + lQ] = aE.data.botDifficultyTeam[bj.lW[bj.fj[ij]]];
				else if (1 === aE.data.botDifficultyType) {
			var lX = this.lK.length;
			for (aC = aE.lV - 1; 0 <= aC; aC--) this.iY[aC + lQ] = aC % lX
		} else
			for (lX = aE.data.botDifficultyValue, aC = aE.lV - 1; 0 <= aC; aC--) this.iY[aC + lQ] = lX;
		else
			for (var lU = 8 === aE.lR ? 1 : 0, aC = aE.lV - 1; 0 <= aC; aC--) this.iY[aC + lQ] = lU;
		for (aC = 0; aC < lQ; aC++) this.iY[aC] = 6;
		var fl = aE.fi;
		for (aC = 0; aC < fl; aC++) this.iY[aC] <= 2 ? (lH[aC] = 5, lI[aC] = lJ[aC] = 1040, 0 === this.iY[aC] ? (lF[aC] = 980, lG[aC] = 980) : 1 === this.iY[aC] ? (lF[aC] = 980, lG[aC] = 920, lI[aC] = lJ[aC] = 1100) : (lF[aC] = 825, lG[aC] =
			750)) : this.iY[aC] <= 4 ? (lH[aC] = 1 + az.kQ(20), 3 === this.iY[aC] ? (lF[aC] = lG[aC] = 500, lI[aC] = lJ[aC] = 1e3) : (lJ[aC] = 250 + az.kQ(1501), lI[aC] = 500 + az.kQ(501), lF[aC] = 300 + az.kQ(201), lG[aC] = 100 + az.kQ(
			201))) : this.iY[aC] <= 5 ? (lI[aC] = 1e3, lJ[aC] = 1e3, lH[aC] = 35 + az.kQ(16), lF[aC] = 300 + az.kQ(201), lG[aC] = 50 + az.kQ(101)) : (lI[aC] = lJ[aC] = 800, lH[aC] = 5, lF[aC] = 10, lG[aC] = 250), lY(aC)
	}, this.lS = function() {
		for (var fP = b0.lZ, lQ = aE.l9, aC = fP - 1; 0 <= aC; aC--) this.iY[aC + lQ] = 0;
		for (var g5 = 0; g5 < 6; g5++) {
			for (aC = fP + b0.la[g5] - 1; fP <= aC; aC--) this.iY[aC + lQ] = g5;
			fP += b0.la[g5]
		}
	}, this.kv = function(hJ, value) {
		lE[hJ] = Math.min(value, lE[hJ])
	}, this.eq = function(hJ) {
		0 == --lE[hJ] && ! function(hJ) {
			(function(hJ) {
				lI[hJ] !== lJ[hJ] && (lI[hJ] += lI[hJ] < lJ[hJ] ? 3 : -3);
				lF[hJ] !== lG[hJ] && (lF[hJ] += lF[hJ] < lG[hJ] ? lH[hJ] : -lH[hJ], lF[hJ] = (Math.abs(lF[hJ] - lG[hJ]) <= lH[hJ] ? lG : lF)[hJ]);
				lE[hJ] = bO.gC(lI[hJ], 10)
			})(hJ), ap.jw.km(hJ, bO.gC(lF[hJ] * ah.hn[hJ], 1e3))
		}(hJ)
	}, this.ld = function(hJ, hE) {
		lI[hJ] = lJ[hJ] = hE
	}
}

function js() {
	var le = new Uint16Array(aE.fi);

	function lt(player, lr) {
		for (var fl = bR.gG[0], gO = bR.gO, m5 = -1, m6 = aE.fi, aC = 0; aC < fl; aC++) {
			var g1, hJ = gO[aC];
			bw.fe(player, hJ) && (g1 = bP.jK(lr, bP.jg(hJ)), -1 === m5 || g1 < m5) && (m5 = g1, m6 = hJ)
		}
		return m6
	}

	function lv(ls, lr) {
		if (ls === aE.fi) return 0;
		var hS = ah.hS[ls],
			m4 = hS.length;
		if (0 === m4) return 0;
		for (var fl = Math.min(m4, 10), m6 = 0, m5 = bP.jK(hS[m6] >> 2, lr), aC = 0; aC < fl; aC++) {
			var ij = az.kQ(m4),
				g1 = bP.jK(hS[ij] >> 2, lr);
			g1 < m5 && (m5 = g1, m6 = ij)
		}
		return hS[m6] >> 2
	}

	function m0(player, lr, kI, m8) {
		var m9;
		(m8 === aE.fi || (m9 = bP.jg(kI), m8 = bP.jg(m8), bP.jK(lr, m9) < bP.jK(lr, m8))) && (le[player] = kI)
	}
	this.dv = function() {
		le.fill(aE.fi)
	}, this.k4 = function() {
		if (bi.l6() % 109 == 9 && !(am.lf < 20) && aE.il && !(bk.lg() < bO.gC(8 * aE.kt, 10))) {
			var lh = bk.li();
			if (bj.lW[lh]) {
				bk.lj(lh);
				var fl = bR.gG[0];
				if (0 !== fl)
					for (var h = bR.gP, lk = am.lk, lf = am.lf, ll = le, ij = az.kQ(fl), aC = 0; aC < lf; aC++) {
						var iF = lk[aC],
							lm = h[ij];
						bD.h7.ln(iF, lm) && 512 === ll[iF] && (ll[iF] = lm, ij = (ij + 1) % fl)
					}
			}
		}
	}, this.eq = function(player) {
		var lr, lu, ls, lo = function(player) {
			var kI = le[player];
			if (kI !== aE.fi) {
				if (bD.h7.m7(kI) && ah.hS[kI]) return kI;
				le[player] = aE.fi
			}
			return aE.fi
		}(player);
		return function(player) {
			for (var m3 = am.lk, m4 = am.lf, fl = Math.min(m4, m4 < 17 && 5 === az.kQ(20) ? 1 : 16), hK = az.kQ(m4), gO = bR.gO, hS = ah.hS, hE = 0, aC = 0; aC < fl; aC++) {
				var hJ = m3[(aC + hK) % m4];
				hJ !== player && hS[hJ].length && (gO[hE++] = hJ)
			}
			bR.gG[0] = hE
		}(player), 0 !== bR.gG[0] && (0 < (lu = lv(ls = lt(player, lr = bP.jl(player)), lr)) && bQ.lw.lx(player, bQ.ly.lz(lu, lr)) ? (m0(player, lr, ls, lo), !0) : 0 < (ls = function(player, lr) {
			for (var fl = bR.gG[0], gO = bR.gO, ll = le, hK = 0, aC = 0; aC < fl; aC++) {
				var hJ = gO[aC],
					hJ = ll[hJ];
				hJ !== aE.fi && bD.h7.m7(hJ) && player !== hJ && bw.fe(player, hJ) && (gO[hK++] = hJ)
			}
			return 0 !== (bR.gG[0] = hK) ? lv(lt(player, lr), lr) : 0
		}(player, lr)) && bQ.lw.lx(player, bQ.ly.lz(ls, lr)) ? (m0(player, lr, ad.fd(ls << 2), lo), !0) : !!(0 < (lu = lv(lo, lr)) && bQ.lw.lx(player, bQ.ly.lz(lu, lr))))
	}
}

function jz() {
	function mD(player) {
		for (var gA = ah.gA[player], fl = gA.length, gB = Math.max(bO.gC(fl, 12), 1), fn = ad.fn, eT = az.kQ(fl), aC = 0; aC < fl; aC += gB)
			for (var fa = gA[(aC + eT) % fl], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp)) return {
					fP: fp,
					id: ad.fT(fp),
					hJ: player
				}
			}
		return null
	}

	function mI(player, mK) {
		var iY = bD.h7.mL(player, aF.lO[aF.iY[player]]);
		ah.hD[player].push(mK.fP), ae.eu(player, iY, mK.hJ), aG.kG(player, !0)
	}
	this.eq = function(player) {
		return !!bV.fQ(bV.fR) && !!aE.data.passableMountains && 0 !== ah.gA[player].length && function(player) {
			var mC = mD(player);
			if (null === mC) return !1;
			! function(player) {
				for (var lk = am.lk, lf = am.lf, fl = Math.min(lf, 12), hK = az.kQ(lf), gO = bR.gO, gA = ah.gA, hE = 0, aC = 0; aC < fl; aC++) {
					var hJ = lk[(aC + hK) % lf];
					hJ !== player && gA[hJ].length && bw.fe(player, hJ) && (gO[hE++] = hJ)
				}
				bR.gG[0] = hE
			}(player);
			var mF = function(fS) {
				for (var fl = bR.gG[0], gO = bR.gO, aC = 0; aC < fl; aC++) {
					var mK = mD(gO[aC]);
					if (null !== mK && mK.id === fS) return mK
				}
				return null
			}(mC.id);
			return null !== mF ? (mI(player, mF), !0) : function(player, fS) {
				var fl = ap.jn.mJ;
				if (0 !== fl)
					for (var fP = ap.jn.buffer[az.kQ(fl)] << 2, fn = ad.fn, fo = az.kQ(4);;) {
						if (fP += fn[fo], ad.fq(fP)) {
							if (ad.fT(fP) === fS) return mI(player, {
								fP: fP,
								hJ: aE.fi
							}), !0;
							break
						}
						if (!ad.fc(fP)) break
					}
				return !1
			}(player, mC.id)
		}(player)
	}
}

function jq() {
	this.eq = function(player) {
		return bQ.lw.lx(player, function(player) {
			var fl = ap.jn.mJ;
			if (0 === fl) return -1;
			for (var m4 = Math.min(fl, ap.performance.mN ? fl : 10), buffer = ap.jn.buffer, kP = bO.gC(az.random() * fl, az.value(100)), e = kP + m4, mO = az.jm(ah.jh[player], ah.ji[player]), mP = az.jm(ah.jj[player], ah.jk[player]),
					m6 = -1, g1 = bP.jL(0, 0, bV.fw, bV.fx), aC = kP; aC < e; aC++) {
				var hK = aC % fl,
					mQ = bP.g3(mO, mP, buffer[hK]);
				mQ < g1 && (g1 = mQ, m6 = hK)
			}
			return -1 !== m6 ? function(fX, mO, mP) {
				var i1 = bP.ft(fX),
					i3 = bP.fv(fX),
					jB = mO - i1,
					jE = mP - i3;
				Math.abs(jB) >= Math.abs(jE) ? (jE = 0, jB = Math.sign(jB)) : (jB = 0, jE = Math.sign(jE));
				jB === jE && (jB = 1);
				for (;;) {
					if (i1 += jB, i3 += jE, !bP.g7(i1, i3)) break;
					if (fX = bP.g8(i1, i3), ad.iT(bP.fb(fX))) return fX
				}
				return -1
			}(buffer[m6], mO, mP) : -1
		}(player))
	}
}

function k1() {
	this.eq = function(player) {
		var mS = function(player) {
			for (var mV = bQ.mV.mX(), fl = mV.length, m4 = Math.min(fl, 32), ij = az.kQ(fl), aC = 0; aC < m4; aC++) {
				var mS = (aC + ij) % fl,
					mU = mV[mS],
					jI = mU[0],
					jJ = mU[mU.length - 1];
				if (bQ.ly.mY(player, jI) && bQ.ly.mZ(player, jJ)) return mS;
				if (bQ.ly.mY(player, jJ) && bQ.ly.mZ(player, jI)) return 0 <= (mS = bQ.mV.ma(jJ, jI)) ? mS : bQ.mV.mb() ? -1 : bQ.mV.mc(bQ.mV.md(mU))
			}
			return -1
		}(player);
		return -1 !== mS && (mS = bQ.mV.get(mS), !bQ.ly.mW(player, mS)) && (bR.h[0] = mS, !0)
	}
}

function jt() {
	this.mN = 0, this.dv = function() {
		this.mN = 0
	}, this.eq = function() {
		if (!this.mN && bi.l6() % 30 == 7 && bD.h7.mg(90) && (ap.performance.mN = 1)) {
			if (aE.il) {
				var lh = bk.li();
				if (bj.lW[lh]) {
					bk.lA(lh);
					var h = bR.gP,
						fl = bR.gG[0];
					if (0 !== fl)
						for (var mj = Math.min(100 + 10 * (fl - 1), 400), aC = 0; aC < fl; aC++) aF.ld(h[aC], mj)
				}
			}
			aF.ld(mk[0], 100)
		}
	}
}

function jo() {
	var ml = 0,
		mm = 0,
		mn = 300,
		mo = 300,
		mp = 0;
	this.mJ = 0, this.buffer = new Uint32Array(512), this.dv = function() {
		mm = ml = 0, this.mJ = 0, mp = 0
	}, this.eq = function() {
		if (function() {
				var fl = ap.jn.mJ;
				if (0 === fl) return 1;
				var buffer = ap.jn.buffer;
				if (bi.l6() % 35 == 6) {
					for (var aC = fl - 1; 0 <= aC; aC--) ad.fc(buffer[aC] << 2) || (fl--, buffer[aC] = buffer[fl]);
					ap.jn.mJ = fl
				}
				return fl < buffer.length
			}())
			if (mn <= ml) {
				var mt = ap.jn.mJ;
				if (mt) {
					if (bi.l6() % 350 != 1) return;
					if (mp !== mt) return void(mp = mt);
					if (!bD.h7.kW(mk[0])) return
				} else if (bi.l6() % 12 != 8) return;
				bD.h7.mu() || ap.jn.dv()
			} else {
				var aC, j = bV.fw,
					mv = j - 2,
					mt = mv * (bV.fx - 2),
					mw = mn,
					buffer = ap.jn.buffer,
					m4 = ap.jn.mJ,
					mx = buffer.length,
					hK = Math.min(mm + mw * ((1 + 19 * ap.performance.mN) * mo), mt);
				for (aC = mm; aC < hK; aC += mw) {
					var fP = 4 * (aC % mv + (bO.gC(aC, mv) + 1) * j + 1);
					if (ad.fc(fP) && (buffer[m4] = fP >> 2, ++m4 === mx)) {
						aC += mw;
						break
					}
				}(mm = aC) >= mt && (mm = ++ml), ap.jn.mJ = m4
			}
	}
}

function k3() {
	this.eq = function() {
		if (bi.l6() % 51 == 45)
			for (var fl = bQ.z.mz, n0 = bQ.z.n0, n1 = bQ.z.n1, n2 = bQ.z.n2, n3 = bQ.z.n3, lP = aF.lP, iY = aF.iY, aC = 0; aC < fl; aC++) {
				var mU, player, n7, n4 = n0[aC];
				n4 % 64 == 6 || (mU = n1[aC], (player = bQ.ly.n5(mU[mU.length - 1])) < 0) || !bD.h7.ln(player, n3[aC] >> 3) || az.kQ(1e3) >= lP[iY[player]] || ! function(nB, mU) {
					for (var fl = mU.length - 1, nC = bQ.z.nD[nB], g1 = 0, aC = nC + 1; aC < fl; aC++) g1 += bP.jH(mU[aC], mU[aC + 1]);
					return (g1 += bP.jH(bP.jZ(bQ.z.nE[nB]), mU[nC + 1])) <= 60
				}(aC, mU) || (n7 = n2[aC], 64 <= n4 && bQ.n8.n9(player, n7)) || function(player, mU, n7, nB, n4) {
					bQ.nF.nG(player) && bD.h7.nH(player, aF.lL[aF.iY[player]], 32, 0) && (bQ.z.n0[nB] = 64 + n4 % 64, bQ.n8.eu(n7, bQ.z.nI), bR.h[0] = bQ.mV.md(mU), bR.gN[1] = 6, bD.h7.nJ(player), nB = aF.lL[aF.iY[player]], bQ.z.nK(player,
						nB))
				}(player, mU, n7, aC, n4)
			}
	}
}

function nL() {
	bU.nM.nN(), aO.eq(), ag.eq(), aX.nO(), b1.z.eq()
}

function nP() {
	bQ.iQ.eq(), b2.eq(), aH.eq(), ao.eq(), bU.nM.nN(), af.eq(), b5.eq(), aG.eq(), ap.eq(), bQ.z.eq(), am.nQ(), aW.eq(), b0.eq(), bY.eq(), ag.eq(), ag.nR(), aX.eq(), bS.eq(), aV.eq(), aQ.eq(), b9.nS(), aO.eq(), b6.eq(), aS.eq(), ax.eq(), bg.eq(), bk
		.eq(), b1.z.eq(), b1.nT.eq(), u.eq(), bX.ee.eq(), bC.eq(), bi.eq()
}

function nU() {
	aI.eq(), aY.eq(), aR.eq(), aw.eq(), bF.eq(), b8.eq(), b9.eq(), ay.nV()
}

function nW() {
	aW.nX(!1), aQ.nX(), aX.nX(!1), aV.nX(), aS.nX(), ax.nX(), ag.nX(!1), bk.nY()
}

function nZ() {
	ag.nX(!1) && (bi.e2 = !0), b1.z.eq()
}

function cF() {
	var na, nb, nc;

	function ne(ng) {
		for (var aC = na - 1; 0 <= aC; aC--) 0 === nc[nb[aC]] && ah.hZ[nb[aC]] >= ng && gp(nb[aC])
	}

	function nd(player) {
		var em;
		64 === nc[player] ? nc[player] = 6 : (em = ah.hZ[player], nc[player] = em < 1e3 ? 3 : em < 1e4 ? 2 : em < 6e4 ? 1 : 0)
	}
	this.dv = function() {
		na = 0, nb = new Uint16Array(aE.fi), nc = new Uint8Array(aE.fi)
	}, this.eq = function() {
		for (var aC = na - 1; 0 <= aC; aC--) 64 === nc[nb[aC]] ? nd(nb[aC]) : 0 == nc[nb[aC]]-- && (nd(nb[aC]), gp(nb[aC]));
		16e4 <= ah.hZ[mk[0]] && (ne(16e4), 3e5 <= ah.hZ[mk[0]]) && ne(3e5), bD.h7.m7(aE.fV) && (bg.nh[7] = Math.max(ah.hZ[aE.fV], bg.nh[7]))
	}, this.h9 = function(player) {
		for (var g4, aC = na - 1; 0 <= aC; aC--)
			if (player === nb[aC]) {
				for (na--, g4 = aC; g4 < na; g4++) nb[g4] = nb[g4 + 1];
				return
			}
	}, this.kG = function(player, ni) {
		for (var aC = na - 1; 0 <= aC; aC--)
			if (player === nb[aC]) return;
		nb[na++] = player, nc[player] = ni ? 2 : 64
	}
}

function cG() {
	var size, kx;
	this.dv = function() {
		size = aE.lV, kx = new Uint16Array(aE.fi);
		for (var l9 = aE.l9, aC = aE.lV - 1; 0 <= aC; aC--) kx[aC] = l9 + aC
	}, this.eq = function() {
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nl[kx[aC]]) {
				g4 = void 0;
				var g4 = aC;
				size--, kx[g4] = kx[size]
			} else aF.eq(kx[aC])
	}, this.nk = function(hJ) {
		kx[size++] = hJ
	}
}

function cH() {
	var nn, no, np, nq, nr, ns, nt, nu, nv, nw, nx, ny, nz, o0 = !1,
		o1 = !1;

	function o2(o3) {
		ny = bi.el, np = nq = no = 0, nr = (nz = 33) / o3, nn = 1 / (o3 / nz / 4), ns = (i.j / 2 + jS) / j3, nt = (i.k / 2 + jT) / j3, nu = j3
	}

	function oA(aC) {
		var oC; - 1 !== aC && (aC = bP.jZ(bQ.z.nE[aC]), oC = bP.ft(aC) - 15, aC = bP.fv(aC) - 15, aI.o6(oC, aC, 29 + oC, 29 + aC))
	}

	function oN(eY) {
		Math.abs(Math.log(nx / nu)) < .125 && (nx = eY * nu)
	}

	function oM(oC, oD, oP, oQ) {
		nv = (oC + oP + 1) / 2, nw = (oD + oQ + 1) / 2;
		oP = i.j / (oP - oC + 1), oC = i.k / (oQ - oD + 1);
		nx = .9 * (oP < oC ? oP : oC)
	}
	this.o4 = function() {
		return o0
	}, this.o5 = function() {
		o2(1), this.o6(0, 0, bV.fw - 1, bV.fx - 1), aE.iB || aE.hu || aE.hv || this.o7(aE.fV, 3e3, !0, .3)
	}, this.o8 = function(player, o9) {
		oA(bQ.ly.oB(player, o9))
	}, this.o7 = function(player, o3, oE, zoom) {
		aE.oF || o0 && !oE && o1 || (0 === ah.hZ[player] ? oA(bQ.ly.oG(player)) : (aT.oH = !1, o1 = oE, o2(o3), function(player) {
			nv = (ah.jh[player] + ah.ji[player] + 1) / 2, nw = (ah.jj[player] + ah.jk[player] + 1) / 2
		}(player), function(zoom, player) {
			var jB = ah.ji[player] - ah.jh[player] + 1,
				player = ah.jk[player] - ah.jj[player] + 1,
				g4 = i.j / jB,
				g5 = i.k / player,
				g4 = (nx = g4 < g5 ? g4 : g5, 0 !== zoom ? zoom : jB < 20 && player < 20 ? .5 : .9);
			nx *= g4, oN(7 / 8)
		}(zoom, player), o0 = !0, at.oK()))
	}, this.oL = function(o3) {
		aE.hu || aE.oF || (aT.oH = !1, o1 = !1, o2(o3), oM(0, 0, bV.fw - 1, bV.fx - 1), oN(7 / 8), o0 = !0, at.oK())
	}, this.o6 = function(oC, oD, oP, oQ) {
		o0 = !1, oM(oC, oD, oP, oQ), j3 = nx, aT.oR(nv, i.j / 2), aT.oS(nw, i.k / 2), bd.oT(), bi.e2 = !0
	}, this.oU = function() {
		return !(o0 && o1 || (o0 = !1))
	}, this.eq = function() {
		var oX, oY, fo, ob;
		o0 && (no < .5 ? nq < nr && (nq += nr * nn, np = no) : 1 - np < no && (nq = (nq -= nr * nn) < nr * nn ? nr * nn : nq), ny = ny >= bi.el ? bi.el - 1 : ny, fo = bi.el - ny, no = 1e3 < fo || 1 < (no += nq * fo / nz) ? 1 : no, ny = bi.el,
			fo = j3, oX = jS, oY = jT, fo = (j3 = nu * Math.pow(nx / nu, no)) / fo, ob = 1 - (nu * Math.pow(nx / nu, 1 - no) - nu) / (nx - nu), aT.oR(ns + ob * (nv - ns), i.j / 2), aT.oS(nt + ob * (nw - nt), i.k / 2), ag.zoom(fo, (oX * fo -
				jS) / (1 - fo), (oY * fo - jT) / (1 - fo)), bd.oT(), 1 <= no && (o0 = !1, be.oc = !0), bi.e2 = !0)
	}
}

function dp() {
	this.od = -1, this.pow = -1;
	var oe = null,
		og = null,
		oh = null,
		oi = null,
		ok = [],
		ol = 0,
		om = null,
		on = null,
		oo = null,
		op = null,
		oq = this,
		or = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255,
		os = 4294967295;

	function oz(p0, p1, className) {
		p0 = document.createElement(p0);
		return className && (p0.className = className), p1 && p1.appendChild(p0), p0
	}

	function p2(ex, p1, action) {
		p1 = oz("button", p1);
		return p1.type = "button", p1.textContent = ex, p1.addEventListener("click", action), p1
	}

	function p3(p1) {
		p1 = oz("canvas", p1);
		return p1.width = 128, p1.height = 128, p1
	}

	function ow(canvas, data) {
		canvas = canvas.getContext("2d");
		on || (on = canvas.createImageData(128, 128), oo = new Uint32Array(on.data.buffer)),
			function(data, p5) {
				for (var fl = data.length, p6 = 0, position = 0, color = 0; position < 16384;) {
					var eU = p6 >> 3;
					if (fl <= eU) break;
					for (var eU = data[eU] << 8 | (1 + eU < fl ? data[1 + eU] : 0), oU = Math.min(16384, position + (eU >> 10 - (7 & p6) & 63)), p8 = color ? or : os, aC = position; aC < oU; aC++) p5[aC] = p8;
					position = oU, p6 += 6, color ^= 1
				}
				for (aC = position; aC < 16384; aC++) p5[aC] = os
			}(data, oo), canvas.putImageData(on, 0, 0)
	}

	function ox() {
		if (oe) {
			oi.disabled = !ol;
			for (var aC = 0; aC < ok.length; aC++) ok[aC].setAttribute("aria-pressed", String(Boolean(ol & 1 << aC)))
		}
	}

	function pB(e) {
		var pD, pC;
		"Escape" === e.key ? (e.preventDefault(), oq.close()) : "Tab" === e.key && oe && (pD = (pC = oe.querySelectorAll("button:not(:disabled)"))[0], pC = pC[pC.length - 1], e.shiftKey && document.activeElement === pD ? (e.preventDefault(), pC
			.focus()) : e.shiftKey || document.activeElement !== pC || (e.preventDefault(), pD.focus()))
	}

	function pK() {
		oq.close(), b1.es.pM(0, 0, oq.od, oq.pow)
	}

	function pL() {
		var pN, ou;
		ol && (pN = ol, ou = om, oq.close(), b1.es.pM(pN, ou, oq.od, oq.pow))
	}
	this.show = function(ot, ou, od, pow) {
		this.od = od, this.pow = pow, om = ou, oe || function() {
			op = document.activeElement, (oe = oz("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oe.setAttribute("aria-modal", "true"), oe.setAttribute("aria-label", L(14)), oz("style", oe).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var pG = oz("div", oe, "captcha-reference-row");
			oz("span", pG, "captcha-reference-label").textContent = L(15), (oh = p3(pG)).className = "captcha-reference", oh.setAttribute("aria-label", L(16)), og = oz("div", oe, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) ok.push(function(eU) {
				var e = p2("", og, function() {
					ol ^= 1 << eU, ox()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eU + 1])), e.setAttribute("aria-pressed", "false"), p3(e).setAttribute("aria-hidden", "true"), e
			}(aC));
			var pG = oz("div", oe, "captcha-actions"),
				pJ = p2(L(17), pG, function() {
					oq.close()
				});
			p2(L(18), pG, pK), oi = p2(L(19), pG, pL), oe.addEventListener("keydown", pB), oq.resize(), ox(), pJ.focus()
		}(), ow(oh, ot[0]);
		for (var aC = 0; aC < 16; aC++) ow(ok[aC].firstChild, ot[aC + 1]);
		ol = 0, ox()
	}, this.resize = function() {
		var size;
		oe && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oe.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oe) {
			for (var oy = oe.querySelectorAll("canvas"), aC = 0; aC < oy.length; aC++) oy[aC].width = 0, oy[aC].height = 0;
			oe.remove(), ok = [], oo = on = om = oi = oh = og = oe = null, ol = 0, op && document.body.contains(op) && op.focus(), op = null
		}
	}
}

function ds() {
	this.nM = new pO, this.pP = new pQ, this.pR = new pS, this.dv = function(pT, pU) {
		this.pP.dv(pT, pU), this.nM.dv(pU), this.pR.dv()
	}
}

function pS() {
	var pV = 0,
		pW = [],
		pX = [],
		pY = "";

	function pi(pj, name) {
		var po = bq.pp;
		return po && pj === po.pj || 0 <= pW.indexOf(pj) || (pX.length && (po = function(pj, name) {
			pj = bq.pr.ps(pj), pj = pj ? pj.username : name;
			return pj ? bD.pf.pt(pj) : null
		}(pj, name)) ? 0 <= pX.indexOf(po) : void 0)
	}
	this.dv = function() {
		pV = 0, pW = [], pX = [], pY = ""
	}, this.pZ = function() {
		return pV
	}, this.pa = function(pb) {
		pV = 1 - pV, pY = "", pW = [], pX = [], this.pc(pb), c0.nM.reset()
	}, this.pc = function(pb) {
		if (pV && bq.fI) {
			var h = bq.pd.pe(pb),
				pb = h.join(" ");
			if (pb !== pY) {
				pY = pb, pW = [], pX = [];
				for (var aC = 0; aC < h.length; aC++) bD.pf.startsWith(h[aC], "@[") ? pX.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pW.push(bJ.fC.fD(h[aC].substring(1), 5));
				c0.nM.reset()
			}
		}
	}, this.pg = function(ph) {
		if (!pV || !pW.length && !pX.length || 4 < ph.id) return 1;
		if (pi(ph.pj, ph.pk)) return 1;
		if (void 0 !== ph.target && pi(ph.target, ph.pl)) return 1;
		if (0 === ph.id)
			for (var h = bq.pd.pe(ph.s), aC = 0; aC < h.length; aC++)
				if (bD.pf.startsWith(h[aC], "@[")) {
					var pm = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pX.indexOf(pm) || pm === (pm = void 0, (pm = bq.pp) ? bD.pf.pt(pm.username) : null)) return 1
				} else if (pi(bJ.fC.fD(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pO() {
	var pu = null,
		pv = 1048575;

	function q5() {
		var hE = pu.childNodes.length - bq.z.q8;
		if (!(hE <= 0)) {
			for (var aC = 0; aC < hE; aC++) bq.px.py(pu.firstChild), pu.removeChild(pu.firstChild);
			c0.pP.q9()
		}
	}

	function q2(q1, qA) {
		qA && (qA.qB = 1, q1.appendChild(bq.px.transform(qA)))
	}
	this.dv = function(pU) {
		pu = pU, pv = 1048575
	}, this.reset = function(pw) {
		if (pv = 1048575, bq.px)
			for (var e = pu.firstChild; e; e = e.nextSibling) bq.px.py(e);
		pu.textContent = "", pw || this.nY()
	}, this.nY = function() {
		var pz = bq.z.pz,
			q0 = bq.z.q0,
			fl = pz.length,
			kP = 1048575 === pv ? 0 : fl - (q0 - pv + 1048575) % 1048575;
		if (pv = q0, !(fl <= (kP = Math.max(kP, 0)))) {
			for (var q1 = document.createDocumentFragment(), aC = kP; aC < fl; aC++) c0.pR.pg(pz[aC]) && q2(q1, bq.ly.q3(pz[aC], bq.ly.q4(pz[aC])));
			pu.appendChild(q1), q5(), c0.pP.q6()
		}
	}, this.q7 = function(s) {
		var q1 = document.createDocumentFragment();
		q2(q1, s), pu.appendChild(q1), q5(), c0.pP.q6()
	}
}

function pQ() {
	var qC = null,
		pu = null,
		qD = 1,
		qE = null,
		qF = 0;

	function qH() {
		qE && qE.parentNode === pu || (qE = pu.firstChild, qF = 0), qE && (qC.scrollTop = qE.offsetTop + qF)
	}
	this.dv = function(pT, pU) {
		pu = pU, qD = 1, qE = null, qF = 0, (qC = pT).addEventListener("scroll", function() {
			if (qC.scrollTop < qC.scrollHeight - qC.clientHeight - 2) {
				qD = 0;
				for (var qI = pu.childNodes, qJ = qC.scrollTop, aC = 0; aC < qI.length; aC++)
					if (qI[aC].offsetTop + qI[aC].offsetHeight > qJ) return void(qE = qI[aC], qF = qJ - qI[aC].offsetTop);
				qE = null
			} else qD = 1
		})
	}, this.q9 = function() {
		qD || qH()
	}, this.q6 = function(c3) {
		qD ? qC.scrollTop = qC.scrollHeight : c3 && qH()
	}
}

function c9() {
	var ev = bD.color;
	this.qK = ev.qL(0, 0, 0), this.qM = ev.qN(0, 0, 0, .7), this.qO = ev.qN(0, 0, 0, .5), this.qP = ev.qN(0, 0, 0, .85), this.qQ = ev.qN(0, 0, 0, .75), this.qR = ev.qN(0, 0, 0, .6), this.qS = ev.qN(0, 0, 0, .35), this.qT = ev.qL(255, 255, 255), this
		.qU = ev.qN(255, 255, 255, .3), this.qV = ev.qN(255, 255, 255, .6), this.qW = ev.qN(255, 255, 255, .4), this.qX = ev.qN(255, 255, 255, .25), this.qY = ev.qN(255, 255, 255, .85), this.qZ = ev.qN(255, 255, 255, .75), this.qa = ev.qN(255, 255,
			255, .15), this.qb = ev.qN(255, 255, 255, .11), this.qc = ev.qL(128, 128, 128), this.qd = ev.qN(64, 64, 64, .75), this.qe = ev.qN(88, 88, 88, .83), this.qf = ev.qN(60, 60, 60, .85), this.qg = ev.qN(80, 60, 60, .85), this.qh = ev.qL(170,
			170, 170), this.qi = ev.qL(200, 235, 245), this.qj = ev.qL(30, 255, 30), this.qk = ev.qL(0, 200, 0), this.ql = ev.qL(128, 255, 128), this.qm = ev.qN(10, 65, 10, .75), this.qn = ev.qN(0, 255, 0, .6), this.qo = ev.qN(0, 255, 0, .5), this
		.qp = ev.qN(0, 200, 0, .5), this.qq = ev.qN(0, 100, 0, .75), this.qr = ev.qN(0, 60, 0, .8), this.qs = ev.qN(0, 255, 0, .3), this.qt = ev.qN(0, 180, 0, .6), this.qu = ev.qN(0, 120, 0, .85), this.qv = ev.qL(0, 120, 0), this.qw = ev.qN(0, 70, 0,
			.85), this.qx = ev.qL(190, 230, 190), this.qy = ev.qL(0, 255, 0), this.qz = ev.qN(10, 120, 10, .9), this.r0 = ev.qL(200, 255, 200), this.r1 = ev.qL(255, 120, 120), this.r2 = ev.qL(255, 160, 160), this.r3 = ev.qL(255, 70, 70), this.r4 = ev
		.qL(230, 0, 0), this.r5 = ev.qN(220, 0, 0, .6), this.r6 = ev.qN(255, 100, 100, .8), this.r7 = ev.qN(100, 0, 0, .85), this.r8 = ev.qN(60, 0, 0, .85), this.r9 = ev.qN(200, 0, 0, .6), this.rA = ev.qN(120, 0, 0, .85), this.rB = ev.qL(255, 70,
		10), this.rC = ev.qL(230, 190, 190), this.rD = ev.qL(255, 0, 0), this.rE = ev.qL(255, 0, 255), this.rF = ev.qN(60, 0, 60, .85), this.rG = ev.qN(0, 60, 60, .85), this.rH = ev.qN(10, 60, 60, .9), this.rI = ev.qN(0, 96, 96, .75), this.rJ = ev
		.qL(0, 255, 255), this.rK = ev.qL(160, 160, 255), this.rL = ev.qN(0, 40, 90, .75), this.rM = ev.qN(0, 0, 255, .6), this.rN = ev.qL(200, 200, 255), this.rO = ev.qN(50, 50, 255, .83), this.rP = ev.qN(20, 90, 150, .75), this.rQ = ev.qN(10, 10,
			120, .75), this.rR = ev.qN(10, 60, 160, .9), this.rS = ev.qL(200, 220, 255), this.rT = ev.qN(0, 120, 255, .35), this.rU = ev.qL(70, 150, 255), this.rV = ev.qN(90, 90, 255, .9), this.rW = ev.qL(255, 120, 100), this.rX = ev.qN(255, 255, 0,
			.5), this.rY = ev.qN(255, 255, 150, .2), this.rZ = ev.qL(255, 255, 0), this.ra = ev.qL(255, 255, 200), this.rb = ev.qN(200, 200, 0, .6), this.rc = ev.qN(140, 120, 0, .75), this.rd = ev.qN(180, 160, 40, .75), this.re = ev.qN(70, 50, 20,
			.85), this.rf = ev.qN(30, 30, 0, .85), this.rg = ev.qN(60, 60, 0, .85), this.rh = ev.qL(255, 255, 100), this.ri = ev.qL(255, 255, 140), this.rj = ev.qN(255, 140, 0, .75), this.rk = ev.qN(70, 40, 0, .85), this.rl = ev.qL(255, 150, 0), this
		.rm = ev.qN(255, 200, 80, .85), this.rn = ev.qN(0, 0, 0, 0), this.ro = ev.qN(255, 255, 255, 0), this.rp = ev.qN(254, 254, 254, 0)
}

function d9() {
	this.iD = new rq, this.h7 = new rr, this.rs = new rt, this.ru = new rv, this.lB = new rw
}

function rq() {
	this.rx = 1, this.iE = function(fX) {
		aE.hv || (aE.lT ? bB.rs.iE(aE.fV, fX) : b1.ry.rz(fX))
	}, this.iK = function(jR, kI) {
		aE.hv || (this.rx && (this.rx = 0, bm.s0.q6(182, jR)), aE.lT ? bB.rs.iK(aE.fV, jR, kI) : b1.ry.s1(jR, kI))
	}, this.s2 = function(jR, s3) {
		aE.hv || (aE.lT ? bB.rs.s4(aE.fV, jR, s3) : b1.ry.s5(jR, s3))
	}, this.iP = function(jR, fX) {
		aE.hv || (fX = (fX << 3) + bR.gN[6], aE.lT ? bB.rs.iP(aE.fV, jR, fX) : bQ.nF.nG(aE.fV) && b1.ry.s7(jR, fX))
	}, this.s8 = function(jR) {
		var o9;
		aE.hv || (849 === jR && (jR = 850), o9 = bR.gN[3], aE.lT ? bB.rs.s8(aE.fV, jR, o9) : bQ.s9.sA(aE.fV, o9) && b1.ry.sB(jR, o9))
	}, this.sC = function(o9) {
		aE.hv || bQ.sD.sE(aE.fV, o9, 0) && (aE.lT ? bB.rs.sC(aE.fV, o9) : b1.ry.sB(849, o9))
	}, this.sF = function(jR, o9) {
		var player;
		aE.hv || (player = aE.fV, bQ.sD.sE(player, o9, (jR = 849 === jR ? 850 : jR) + 1) && (aE.lT ? bB.rs.s8(aE.fV, jR, o9) : b1.ry.sB(jR, o9)))
	}, this.sG = function(o9, s6) {
		aE.hv || (aE.lT ? bB.rs.sG(aE.fV, o9, s6) : b1.ry.sH(o9, s6))
	}, this.sI = function(kI) {
		aE.hv || (aE.lT ? bB.rs.sI(aE.fV, kI) : b1.ry.sJ(kI))
	}, this.sK = function(sL) {
		aE.hv || (aE.lT ? bB.rs.sM(aE.fV, sL) : b1.ry.sN(sL))
	}, this.ie = function(sO) {
		aE.hv || (aE.lT ? bB.rs.ie(aE.fV, sO) : b1.ry.sP(sO))
	}, this.sQ = function() {
		aE.hv || (aE.lT ? bB.rs.sQ(aE.fV) : b1.ry.sR())
	}, this.ia = function() {
		aE.hv || (aE.lT ? bB.rs.ia(aE.fV) : b1.ry.sJ(513))
	}, this.iG = function(jR, fX, kI) {
		aE.hv || (aE.lT ? bB.rs.iG(aE.fV, jR, fX, kI) : b1.ry.sS(jR, fX, kI))
	}
}

function rw() {
	this.lC = function(player, s3, iY) {
		bD.h7.sT(player, iY, s3) && (af.s2(player, s3), !bD.h7.kW(s3)) && ap.jw.kl[s3] && ap.jw.kl[s3]--
	}, this.sU = function(player, s3, iY) {
		bD.h7.sV(iY, s3) ? ao.eu(s3, bR.gI[0]) && (bu.sW(player, s3, bR.gI[0], 1), bD.h7.hA(s3, bR.gI[0]), bg.sX(player, s3), ag.sY(s3, bR.gI[0])) : bg.hB(player, iY, 12)
	}
}

function rr() {
	this.sZ = function(sL, player) {
		aE.hv || (aO.sK(aE.fV, player, sL), b1.ry.sa(sL, player))
	}, this.sb = function(player) {
		aE.hv || (aO.sc(player, 0), b1.ry.sd(player))
	}, this.se = function(sf, player) {
		aE.hv || (aO.sg(sf, player), b1.ry.sh(sf, player))
	}, this.si = function() {
		aE.lT || aE.hu || aE.hv || b1.sj.si()
	}
}

function rv() {
	this.eq = function(aD) {
		var id, gU, oU;
		for (bK.dv(aD), bK.eU += 2, oU = 8 * bK.size; bK.eU + 8 <= oU;) id = bK.sk(4), gU = bK.sk(9), 0 === id ? this.sl(id, gU, bK.sk(22)) : 1 === id ? this.sl(id, gU, bK.sk(10), bK.sk(10)) : 2 === id ? this.sl(id, gU, bK.sk(10), bK.sk(9)) :
			3 === id ? this.sl(id, gU, bK.sk(10), bK.sk(27)) : 4 === id ? this.sl(id, gU, bK.sk(10), bK.sk(16)) : 5 === id || 6 === id ? this.sl(id, gU, bK.sk(10)) : 7 === id ? this.sl(id, gU, bK.sk(1)) : 10 === id ? this.sl(id, gU, bK.sk(20), bK
				.sk(22)) : 11 === id ? this.sl(id, gU, bK.sk(16), bK.sk(27)) : this.sl(id, gU)
	}, this.sm = [], this.sn = function() {
		for (var sp = 0, sq = 0, sr = 0, ss = 0, st = 0, su = 0, aC = 0; aC < 512; aC++) sp += ah.nl[aC], sq += ah.hZ[aC], sr += ah.hn[aC], ss += bQ.z.lD[aC];
		st += bQ.z.mz, su += am.lf, this.sm.push(sr % 1073741824 * 4 + (sp + sq + ss + st + su) % 4)
	}, this.sl = function(id, gU, gW, gY) {
		0 === id ? bB.rs.iE(gU, gW) : 1 === id ? bB.rs.iK(gU, gW, gY) : 2 === id ? bB.rs.s4(gU, gW, gY) : 3 === id ? bB.rs.iP(gU, gW, gY) : 4 === id ? bB.rs.s8(gU, gW, gY) : 5 === id ? bB.rs.sI(gU, gW) : 6 === id ? bB.rs.sM(gU, gW) : 7 === id ?
			bB.rs.ie(gU, gW) : 8 === id ? bB.rs.sQ(gU) : 9 === id ? bB.rs.sv(gU) : 10 === id ? bB.rs.iG(gU, gW >> 10, gY, gW % 1024) : 11 === id && bB.rs.sG(gU, gW, gY)
	}
}

function rt() {
	this.iE = function(player, fX) {
		bD.h7.hx(0) && bD.h7.hy(player) && bP.jW(fX) && (bC.sw.sx(0, player, fX), aE.sy.eu(player, fX))
	}, this.iK = function(player, jR, kI) {
		bD.h7.hx(1) && bD.h7.hy(player) && bD.h7.sz(player, kI) && bD.h7.nH(player, jR, 12, 0) && bD.h7.t0(player, kI) && ((kI = ae.kU(player, bR.fh[0])) || ae.kn(player)) && (ah.t1[player]++, bC.sw.sx(1, player, jR, bR.fh[0]), ap.ju.k8(player,
			kI)) && (bD.h7.nJ(player), bg.t2(player, jR), ap.ju.kE(player))
	}, this.s4 = function(player, jR, s3) {
		bD.h7.hx(1) && bD.h7.hy(player) && aE.il && bD.h7.sz(player, s3) && bD.h7.t3(player, s3) && bD.h7.sT(player, bD.h7.jQ(player, jR), s3) && ao.eu(s3, bR.gI[0]) && (bC.sw.sx(2, player, jR, s3), af.s2(player, s3))
	}, this.iP = function(player, jR, s6) {
		bR.gN[1] = 7 & s6;
		var fX = s6 >> 3;
		bD.h7.hx(1) && bD.h7.hy(player) && bP.jW(fX) && bQ.nF.nG(player) && bQ.nF.t4(fX) && bD.h7.nH(player, jR, 32, 0) && bQ.lw.t5(player, fX, 1, bR.gN[1] < 4) && (bg.t6(player), bC.sw.sx(3, player, jR, s6), bD.h7.nJ(player), bo.t7.iP(player),
			bQ.z.nK(player, jR))
	}, this.s8 = function(player, jR, o9) {
		849 === jR ? this.sC(player, o9) : bD.h7.hx(1) && bD.h7.hy(player) && bQ.sD.t8(player, o9, jR) && bC.sw.sx(4, player, jR, o9)
	}, this.sC = function(player, o9) {
		bD.h7.hx(1) && bD.h7.hy(player) && bQ.t9.eq(player, o9) && bC.sw.sx(4, player, 849, o9)
	}, this.sG = function(player, o9, s6) {
		var nB;
		bD.h7.hx(1) && bD.h7.hy(player) && bQ.tA.has(player) && !((nB = bQ.sD.e3(player, o9, s6)) < 0) && bQ.sD.tB(player, nB, s6) && (bQ.tA.tC(player), nB = ah.hn[player], nB = bO.gC(bQ.tF.tG * nB, 1e4), ah.hn[player] -= nB, bC.sw.sx(11, player,
			o9, s6))
	}, this.sI = function(player, kI) {
		513 === kI ? this.ia(player) : bD.h7.hx(1) && bD.h7.hy(player) && (kI = Math.min(kI, aE.fi), ae.kU(player, kI)) && (bC.sw.sx(5, player, kI), ae.tH(player, kI))
	}, this.sM = function(player, sL) {
		(bD.h7.hx(1) || bD.h7.hx(2)) && bD.h7.hy(player) && (sL = bO.j0(sL, 0, 1023), bC.sw.sx(6, player, sL), ag.tI(player, 0, sL))
	}, this.ie = function(player, sO) {
		ax.ic(player) && (bC.sw.sx(7, player, sO), ax.tJ(player, sO))
	}, this.sQ = function(player) {
		(bD.h7.hx(0) || bD.h7.hx(1)) && bD.h7.hy(player) && aN.tK(player) && (bC.sw.sx(8, player), bT.sQ(player))
	}, this.sv = function(player) {
		bC.sw.sx(9, player), bT.sv(player)
	}, this.ia = function(player) {
		ax.ig(player) && (bC.sw.sx(5, player, 513), ax.ia(player))
	}, this.iG = function(player, jR, fX, kI) {
		bD.h7.hx(1) && bD.h7.hy(player) && bD.h7.sz(player, kI) && bD.h7.t0(player, kI) && bP.jW(fX) && an.fM.ff(player, fX) && (ae.kU(player, bR.fh[0]) || ae.kn(player)) && (bC.sw.sx(10, player, (jR << 10) + bR.fh[0], fX), kI = bD.h7.mL(player,
			jR), ah.hD[player].push(bR.fm[0]), ae.eu(player, kI, bR.fh[0]), aG.kG(player, !0), bg.tL(player))
	}
}

function tM() {
	var tO;
	this.tN = [], this.tO = document.createElement("div"), this.tP = function(pb, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pb, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tO.appendChild(
			title), title
	}, this.tQ = function(pb, marginBottom) {
		var tR = document.createElement("p");
		return tR.textContent = pb, tR.style.fontSize = "0.75em", tR.style.lineHeight = "1.2em", tR.style.marginBottom = marginBottom || "0", this.tO.appendChild(tR), tR
	}, this.tS = function(pb) {
		var tT = document.createElement("p");
		return tT.textContent = pb, tT.style.fontSize = "1em", tT.style.marginBottom = "0", tT.style.whiteSpace = "pre-wrap", tT.style.overflowWrap = "break-word", this.tO.appendChild(tT), tT
	}, this.tU = function(tV, fontSize) {
		var tO = document.createElement("div");
		return tO.innerHTML = tV, tO.style.fontSize = fontSize || "1em", tO.style.lineHeight = "1.2em", this.tO.appendChild(tO), tO
	}, this.tW = function(tX) {
		for (var tY = tX.tY, fl = tY.length, aC = 0; aC < fl; aC++) this.tO.appendChild(tY[aC])
	}, this.tZ = function(qA) {
		return this.tN.push(qA), this.tO.appendChild(qA.e), qA
	}, this.resize = function() {
		for (var fl = this.tN.length, aC = 0; aC < fl; aC++) this.tN[aC].resize && this.tN[aC].resize()
	}, (tO = this.tO).style.position = "absolute", tO.style.height = "auto", tO.style.padding = "0.5em"
}

function ta(tb, tc) {
	var tO = document.createElement("div");

	function tk() {
		var aC, qJ, k, hK, fo, tg = i.l * tO.offsetWidth,
			tl = new Float64Array(function(tg) {
				var j = .25 * bD.th.ti(.6) * i.j2;
				return Math.max(Math.floor(tg / j), 1)
			}(tg)),
			tm = bf.tm,
			tn = (tg - (tl.length + 1) * bf.gap) / (tl.length * i.l);
		for (tl.fill(tm), aC = 0; aC < tc.length; aC++) qJ = (fo = tc[aC].tO).style, k = bD.tp.min(tl), hK = tl.indexOf(k), qJ.top = bD.th.tq(k), qJ.left = bD.th.tq(tm + hK * (tn + tm)), qJ.width = bD.th.tq(tn), bD.th.tr(fo, 5), tl[hK] += fo
			.offsetHeight + 3 * tm;
		tO.style.height = bD.th.tq(bD.tp.max(tl) - 2 * tm)
	}
	this.td = tO, this.te = tc, this.resize = function() {
		var aC;
		for (aC = 0; aC < tc.length; aC++) tc[aC].resize();
		tk(), tk()
	}, tO.style.width = "100%", tO.style.maxWidth = "100%", tb.style.lineHeight = "1.5em", tb.style.overflowX = "hidden", tb.style.overflowY = "auto";
	for (var aC = 0; aC < tc.length; aC++) tO.appendChild(tc[aC].tO);
	tb.appendChild(tO)
}

function x(ts, tt, tu, tv, tw) {
	var self, tx = document.createElement("button"),
		u0 = (this.button = tx, this.ty = tt, this.tz = tu, 0);

	function u5() {
		var uB;
		bM.uA() || (u0 = 1, uB = bD.color.uC(tu), !1 !== tv && 0 < uB[0] && uB[0] < 255 && uB[0] === uB[1] && uB[0] === uB[2]) || (128 < uB[0] && 128 < uB[1] && 128 < uB[2] ? tx.style.backgroundColor = bD.color.uD(tu, -50) : tx.style
			.backgroundColor = bD.color.uD(tu, uB[3] && uB[3] < 120 ? 150 : 50))
	}

	function u4() {
		if (tv) {
			var uB = bD.color.uC(tu);
			if (uB[0] === uB[1] && uB[0] === uB[2]) return
		}
		tt && ((uB = tt(this)) ? 2 === uB && u5() : uF(this))
	}

	function u7() {
		u0 = 0, this.style.backgroundColor = tu
	}

	function u6() {
		uF(this)
	}

	function uF(fo) {
		u0 = 0, fo.style.backgroundColor = tu, fo.blur()
	}
	this.u3 = function(u8) {
		u8 = 1.1 - Math.min(.01 * ts.length, .6) + .2 * u8;
		tx.style.fontSize = u8.toFixed(1) + "em"
	}, this.u2 = function(ev) {
		ev ? 1 === ev ? ev = bE.qf : 2 === ev && (tv = 1, ev = bE.qf) : (tv = 0, ev = bE.qP), this.tz = tu = ev, tx.style.backgroundColor = ev, u0 && u5()
	}, self = this, tx.innerHTML = ts, tx.style.color = tw ? bE.rZ : bE.qT, tx.style.userSelect = "none", tx.style.outline = "none", tx.style.overflowWrap = "break-word", self.u2(tu), tx.style.border = "none", tx.style.font = "inherit", self.u3(
		0), tx.style.padding = "0em 0.3em", tx.onclick = u4, tx.addEventListener("mouseover", u5), tx.addEventListener("mouseout", u6), tx.addEventListener("focus", u5), tx.addEventListener("blur", u7)
}

function uG(pC, tb) {
	var tO;
	this.resize = function() {
		for (var aC = 0; aC < pC.length; aC++) bD.th.tr(pC[aC].button);
		tO.style.gap = tO.style.padding = bD.th.tq(bf.tm)
	}, (tO = document.createElement("div")).style.display = "grid", tO.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tO.style.overflowY = "auto", tO.style.gridAutoRows = "5.3em", tO.style.maxHeight = "100%";
	for (var aC = 0; aC < pC.length; aC++) pC[aC].u3(1), tO.appendChild(pC[aC].button);
	tb.appendChild(tO)
}

function uI(uJ, uK, uL) {
	this.fs = 0, this.fu = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.th.ti(uL || .5) * uJ[1] * i.j2, i.k - 2 * bf.gap), this.j = Math.min(this.k * (uJ[0] / uJ[1]), i.j - 2 * bf.gap), this.k = uJ[1] * this.j / uJ[0], this.fs = bf.gap + uK[0] * (i.j - this.j - 2 * bf.gap), this.fu = bf
			.gap + uK[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uM = function() {
		return this.fs + .5 * this.j
	}
}

function uN(uO, uP) {
	var uX, uY, self, qC = document.createElement("div"),
		uQ = document.createElement("div"),
		uR = document.createElement("div"),
		uS = null,
		uZ = (this.uT = new uU({
			value: "",
			eU: -1
		}, 0, uV, function(e) {
			e.target.value = bD.pf.uf(e.target.value), uS.ue.textContent = 255 - e.target.value.length, c0.pR.pc(e.target.value)
		}), new ua(0)),
		ub = 0;

	function uV() {
		uO()
	}
	this.ud = function() {
			uS.ue.textContent = 255 - this.uT.e.value.length, c0.pR.pc(this.uT.e.value)
		}, this.show = function(tb) {
			tb.appendChild(qC), tb.appendChild(uR), this.resize(tb)
		}, this.ug = function(tb) {
			u.removeChild(tb, qC), u.removeChild(tb, uR)
		}, this.resize = function(tb) {
			ub = tb ? tb.offsetHeight : ub;
			var tb = bD.th.ui(.04, .75),
				uj = Math.max(tb, ub - tb),
				uk = i.j / i.l,
				ul = .7 * uk,
				um = bD.th.tq(ub - tb - uj),
				uj = (uR.style.height = bD.th.tq(tb), qC.style.height = bD.th.tq(uj), i.k > i.j || a1.a2.j1() ? (uR.style.top = um, qC.style.top = bD.th.tq(ub - uj), bD.th.tr(qC, 8)) : (qC.style.top = um, uR.style.top = bD.th.tq(ub - tb), bD.th.tr(
						qC, 2)), uY.button.style.width = bD.th.tq(tb), uZ.resize(.6 * tb), this.uT.e.style.left = bD.th.tq(tb), this.uT.e.style.width = bD.th.tq(ul - tb), this.uT.e.style.fontSize = uX.button.style.fontSize = bD.th.tq(.5 * tb), bD.th
					.tr(this.uT.e, 6), uX.button.style.left = bD.th.tq(ul), uX.button.style.width = bD.th.tq(uk - ul), .385 * tb);
			a1.a2.j1() && (uj *= .8 - .12 * (i.j > i.k)), uQ.style.marginLeft = uQ.style.marginRight = bD.th.tq(.5 * uj), uQ.style.fontSize = bD.th.tq(uj), c0.pP.q6(1)
		}, (self = this).uT.e.maxLength = 255, qC.style.position = "absolute", qC.style.left = "0", qC.style.width = "100%", qC.style.overflowX = "hidden", qC.style.overflowY = "auto", qC.style.font = "inherit", qC.style.backgroundColor = bE.qR, uQ
		.style.font = "inherit", uR.style.position = "absolute", uR.style.left = "0", uR.style.width = "100%", self.uT.e.setAttribute("placeholder", L(20)), self.uT.e.style.position = "absolute", self.uT.e.style.top = "0", self.uT.e.style.height =
		"100%", self.uT.e.style.backgroundColor = bE.qO, self.uT.e.style.textAlign = "center", (uX = new x(L(21), uV)).button.top = "0", uX.button.style.position = "absolute", uX.button.style.height = "100%", uX.u2(bE.ro), uS = new uc("255", uX
			.button, 1, 1), (uY = new x("", function() {
			return c0.pR.pa(self.uT.e.value), uY.u2(c0.pR.pZ() ? bE.qs : bE.ro), 0
		})).button.style.position = "absolute", uY.button.style.top = "0", uY.button.style.left = "0", uY.button.style.height = "100%", uY.button.style.padding = "0", uY.u2(bE.ro), uZ.canvas.style.display = "block", uZ.canvas.style.margin = "auto",
		uY.button.appendChild(uZ.canvas), qC.appendChild(uQ), uR.appendChild(uY.button), uR.appendChild(self.uT.e), uR.appendChild(uX.button), c0.dv(qC, uQ)
}

function uo(up, ts, uq) {
	function click() {
		var value = 1 - up.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + ts, void 0 !== up.eU ? bm.s0.q6(up.eU, value) : up.value = value, uq && uq(value)
	}
	var e;
	ts = ts || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (up.value ? "🟩 " : "⬜ ") + ts, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ur(tb, tV) {
	var tO = document.createElement("div");
	this.td = tO, this.resize = function() {
		tO.style.padding = bD.th.tq(bf.tm), tO.style.lineHeight = bD.th.tq(bD.th.ui(.035))
	}, tb.style.overflowX = "hidden", tb.style.overflowY = "auto", tO.innerHTML = tV, tb.appendChild(tO)
}

function us(ut) {
	var tO = document.createElement("div");
	this.e = tO, this.uu = ut, this.resize = function() {
		for (var fl = ut.length, aC = 1; aC < fl; aC++) bD.th.tr(ut[aC], 4)
	};
	var aC, fl = ut.length;
	for (tO.style.width = "100%", tO.style.height = "2.7em", tO.style.marginTop = "0.6em", tO.style.border = "inherit", aC = 0; aC < fl; aC++) ut[aC].style.verticalAlign = "top", ut[aC].style.width = (100 / fl).toFixed(2) + "%", ut[aC].style.height =
		"100%", ut[aC].style.fontSize = "0.75em", tO.appendChild(ut[aC])
}

function uv(uw, tu, ux, uy) {
	this.tO = document.createElement("div"), this.pC = uw;
	var uz = 0;
	this.resize = function(tb, v1) {
		var fl = uw.length;
		if (!ux)
			for (var aC = 1; aC < fl; aC++) bD.th.tr(uw[aC].button, 4);
		if (uy)
			for (aC = 0; aC < fl; aC++) uw[aC].button.style.width = uy[aC] + "%";
		else {
			for (var v2 = 0, aC = 0; aC < fl; aC++) v2 += uw[aC].button.offsetWidth;
			if (tb && (uz = tb.offsetWidth), v1 && v2 < uz)
				for (aC = 0; aC < fl; aC++) uw[aC].button.style.width = (100 * uw[aC].button.offsetWidth / v2).toFixed(2) + "%";
			else
				for (aC = 0; aC < fl; aC++) uw[aC].button.style.width = "auto";
			v1 || this.resize(tb, 1)
		}
	};
	var v0 = this;
	v0.tO.style.height = v0.tO.style.maxHeight = "100%";
	for (var aC = 0; aC < uw.length; aC++) uw[aC].u2(tu), uw[aC].button.style.height = "100%", uw[aC].button.style.padding = "0.0em 0.9em", uw[aC].button.style.whiteSpace = "pre", v0.tO.appendChild(uw[aC].button)
}

function dq() {
	var v3 = 2e3,
		v4 = 2,
		v5 = document.createElement("div"),
		v6 = 0,
		v7 = "",
		v8 = 0,
		v9 = 0,
		vA = 0;

	function vD(vC) {
		clearTimeout(vA), v8 = vC.clientX, v9 = vC.clientY, vA = setTimeout(vF, v3)
	}

	function vE(vC) {
		var jB;
		!v7 || (jB = vC.clientX - v8) * jB + (jB = vC.clientY - v9) * jB < v4 * v4 || (fH(), vD(vC))
	}

	function vF() {
		var j, gap, vH, k;
		v7 && !bM.uA() && (v5.textContent = v7, v5.style.font = bD.th.vG(0, bD.th.ui(.014)), v5.style.maxWidth = bD.th.ui(.3) + "px", bD.th.tr(v5, 5), v6 = 1, document.body.appendChild(v5), j = v5.offsetWidth, k = v5.offsetHeight, gap = bD.th.ui(
			.012), vH = i.j / i.l, (k = v9 - k - gap) < 0 && (k = v9 + 2 * gap), v5.style.left = bO.j0(v8 - j / 2, 0, Math.max(0, vH - j)) + "px", v5.style.top = k + "px")
	}

	function fH() {
		v6 && (v6 = 0, u.removeChild(document.body, v5))
	}
	this.vB = function(e, pb) {
		e.addEventListener("mouseover", function(vC) {
			v7 = pb, vD(vC)
		}), e.addEventListener("mousemove", vE), e.addEventListener("mouseout", by.ug), e.addEventListener("click", by.ug)
	}, this.ug = function() {
		clearTimeout(vA), v7 = "", fH()
	}, v5.style.position = "fixed", v5.style.backgroundColor = bE.qP, v5.style.color = bE.qT, v5.style.pointerEvents = "none", v5.style.zIndex = "6", v5.style.padding = "0.2em 0.5em"
}

function vI() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.th.tr(this.e, 8, bE.qc)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function vJ() {
	var v8, v9, v5 = document.createElement("div"),
		vK = document.createElement("div"),
		v6 = 0,
		vL = 0;
	this.show = function(fs, fu, pb, vM, vN, ev) {
			if (v6) {
				if (!vM) return;
				this.ug()
			}
			fs === fu && -1 === fs ? (fs = v8, fu = v9) : (v8 = fs, v9 = fu);
			var vO = Math.floor(bD.th.ui(.018)),
				vN = (fs = Math.max(vO + 2, fs), vN || (vL = vM), v6 = 1, i.j / i.l),
				vM = (v5.style.whiteSpace = "pre", v5.textContent = pb, bD.th.tr(v5, 5), v5.style.font = bD.th.vG(0, bD.th.ui(.015)), v5.style.padding = "0.3em 0.6em", v5.style.left = fs + "px", v5.style.top = "0px", document.body.appendChild(v5),
					fs + v5.offsetWidth - vN),
				pb = (0 < vM && (fs -= vM, fs = Math.max(vO + 1, fs), v5.style.left = fs + "px", fs < vO + 2) && (v5.style.whiteSpace = "pre-wrap"), v5.offsetHeight);
			v5.style.top = fu - pb + vL * bf.vR + "px", fs -= vO, vK.style.backgroundColor = bD.color.qL(ev >> 12 << 2, (ev >> 6 & 63) << 2, (63 & ev) << 2), vK.style.left = fs + "px", vK.style.top = v5.style.top, vK.style.width = vO + "px", vK.style
				.height = pb + "px", bD.th.tr(vK, 4), bD.th.tr(vK, 8), bD.th.tr(vK, 2), document.body.appendChild(vK)
		}, this.ug = function(vS) {
			if (v6) {
				if (vS && vL) return 0;
				v6 = 0, u.removeChild(document.body, v5), u.removeChild(document.body, vK)
			}
			return 1
		}, v5.style.position = "absolute", v5.style.backgroundColor = bE.qP, v5.style.color = bE.qT, v5.style.pointerEvents = "none", v5.style.zIndex = "5", v5.style.maxWidth = "100%", vK.style.position = "absolute", vK.style.color = bE.qT, vK.style
		.pointerEvents = "none", vK.style.zIndex = "5"
}

function uU(vT, type, vU, vV) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vW++, e.value = vT.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qT, e.style.backgroundColor = bE.qM, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vX++
		}), e.addEventListener("blur", function() {
			i.vX--, -1 !== vT.eU && bm.s0.q6(vT.eU, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vT.eU && bm.s0.q6(vT.eU, e.value), vU ? vU() : e.blur())
		}), vV && e.addEventListener("input", function(qA) {
			vV(qA)
		})
}

function vY(tb, data, vZ) {
	var fl = data.va.length,
		vb = document.createElement("div"),
		vc = document.createElement("div"),
		pU = document.createElement("div"),
		vd = new Array(fl),
		tc = new Array(fl),
		ve = new Array(data.vf.length),
		vg = bD.color.qN(70, 70, 0, .35);

	function uD() {
		this.style.backgroundColor = bD.color.uD(vg, 160)
	}

	function vn() {
		this.style.backgroundColor = vg
	}

	function tk() {
		var g4;
		for (tb.style.font = bD.th.vG(0, bD.th.vu(.026, .5, .03)), aC = 1; aC < ve.length; aC++) bD.th.tr(ve[aC], 4);
		if (bD.th.tr(vb, 2), fl) {
			for (var iF, vv = vb.offsetWidth, vw = pU.offsetWidth, aC = 0; aC < ve.length; aC++) iF = .01 * data.vm[aC] * vw, ve[aC].style.width = (100 * iF / vv).toFixed(2) + "%";
			var m4 = data.va[0].length;
			for (aC = 0; aC < fl; aC++)
				for (bD.th.tr(vd[aC], 2), g4 = 1; g4 < m4; g4++) bD.th.tr(tc[aC][g4], 4);
			vc.vh && (vc.scrollTop = vc.vh)
		}
	}
	this.resize = function() {
			tk(), tk()
		}, tb.style.display = "flex", tb.style.flexDirection = "column", vc.style.overflowX = "hidden", vc.style.overflowY = "auto", vc.addEventListener("scroll", function() {
			this.vh = this.scrollTop, vZ && vZ.vi && (u.z.vj[vZ.vi] = this.scrollTop)
		}),
		function() {
			var fo, aC, va = data.va,
				m4 = fl ? va[0].length : 0;
			for (aC = 0; aC < fl; aC++) {
				vd[aC] = document.createElement("div"), vd[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qN(130, 130, 130, .35) : bE.qS
				}(aC), vd[aC].style.width = "100%", vd[aC].style.display = "flex", tc[aC] = new Array(m4);
				for (var g4 = 0; g4 < m4; g4++) tc[aC][g4] = fo = document.createElement("div"), fo.style.display = "flex", fo.style.justifyContent = "center", fo.style.wordBreak = "break-all", fo.style.padding = "0.4em 0em", fo.style.width = data
					.vm[g4] + "%", fo.textContent = va[aC][g4].gD, 1 === va[aC][g4].em && (fo.name = "" + aC, fo.style.color = bE.rZ, fo.style.backgroundColor = vg, fo.addEventListener("mouseover", uD), fo.addEventListener("mouseout", vn), function(
						fo, pj, vp) {
						2147483647 !== vp && fo.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pj), bK.dv(bG.aD), this.style.backgroundColor = vg, u.v(8, u.vq, new vr(25, {
								action: 0,
								pj: bI.fC.vs(bI.fC.vt(5)),
								vp: vp
							}))
						})
					}(fo, va[aC][g4].pj, va[aC][g4].vp)), vd[aC].appendChild(fo)
			}
			for (vb.style.display = "flex", vb.style.backgroundColor = bD.color.qN(0, 120, 0, .35), aC = 0; aC < ve.length; aC++) ve[aC] = fo = document.createElement("div"), fo.style.display = "flex", fo.style.justifyContent = "center", fo.style
				.wordBreak = "break-all", fo.style.padding = "0.4em 0em", fo.style.width = data.vm[aC] + "%", fo.innerHTML = data.vf[aC], vb.appendChild(fo)
		}();
	for (var aC = 0; aC < fl; aC++) pU.appendChild(vd[aC]);
	vc.appendChild(pU), tb.appendChild(vb), tb.appendChild(vc), vZ && vZ.vi && (vc.vh = u.z.vj[vZ.vi])
}

function vx() {
	var w1, w2, vy = document.createElement("div"),
		vz = document.createElement("div"),
		w0 = document.createElement("div"),
		pU = document.createElement("div"),
		pC = [],
		eP = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		w3 = [1, 2, 3, 0, 9, 10, 11, 13];

	function w5(aC) {
		u.v(8, 0, new vr(21, {
			w7: w3[aC],
			w8: 0,
			w9: 10
		}))
	}
	this.show = function() {
			this.q6(u.z.wA), document.body.appendChild(vy)
		}, this.ug = function() {
			u.removeChild(document.body, vy)
		}, this.q6 = function(wA) {
			for (var wB = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < pC.length; aC++) {
				var j = wA[aC];
				w1[wB[aC]][1].ue.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, wC = bf.gap,
				k = bD.th.wD(.085),
				j = Math.min(4 * k, i.j - 2 * wC),
				fl = pC.length;
			for (bD.th.wE(vy, wC, i.k - wC - k, j, k), bD.th.tr(vy), bD.th.tr(vz, 6), aC = 0; aC < fl - 1; aC++) bD.th.tr(pC[aC].button, 6);
			for (aC = 0; aC < fl; aC++) w1[aC][0].resize(), w1[aC][1].resize();
			for (pC[0].fs = 0, pC[0].button.style.left = bD.th.tq(pC[0].fs), pC[0].button.style.width = bD.th.wF(1.7 * k), aC = 1; aC < fl; aC++) pC[aC].fs = pC[aC - 1].fs + pC[aC - 1].button.offsetWidth, pC[aC].button.style.left = bD.th.tq(pC[aC]
				.fs);
			if (!w2) {
				if (!ac.wG()) return;
				(w2 = ac.get(14)).style.width = "24%", w2.style.position = "absolute", vz.appendChild(w2)
			}
			w2.style.left = bD.th.tq(0), w2.style.top = "7%", w0.wH && (w0.scrollLeft = w0.wH)
		}, vy.style.position = "absolute", vz.style.width = "25%", vz.style.height = "100%", vz.style.backgroundColor = bE.qP, w0.style.position = "absolute", w0.style.width = "75%", w0.style.height = "100%", w0.style.backgroundColor = bE.qP, w0
		.style.top = w0.style.right = bD.th.tq(0), bD.th.w4(w0), pU.style.height = pU.style.maxHeight = "100%", pC.push(new x("", function() {
			w5(0)
		}, bE.rF)), pC.push(new x("", function() {
			w5(1)
		}, bE.rG)), pC.push(new x("", function() {
			w5(2)
		}, bE.r8)), pC.push(new x("", function() {
			w5(3)
		}, bE.qr)), pC.push(new x("", function() {
			w5(4)
		}, bE.rk)), pC.push(new x("", function() {
			w5(5)
		}, bE.rg)), pC.push(new x("", function() {
			w5(6)
		}, bE.rk)), pC.push(new x("", function() {
			w5(7)
		}, bE.qK)), w1 = new Array(pC.length);
	for (var aC = 0; aC < pC.length; aC++) pC[aC].button.style.position = "absolute", w1[aC] = [new w6(eP[aC], pC[aC].button, .25, .45), new w6("", pC[aC].button, .53, .84, 1)], pC[aC].button.style.height = pC[aC].button.style.maxHeight = "100%", pC[
		aC].button.top = bD.th.tq(0), pU.appendChild(pC[aC].button);
	w0.appendChild(pU), vy.appendChild(vz), vy.appendChild(w0)
}

function wI(wJ, wK, uO, uP, wL) {
	var wM = document.createElement("div"),
		wN = document.createElement("div"),
		wO = document.createElement("div"),
		pu = document.createElement("div"),
		wP = document.createElement("div"),
		wQ = document.createElement("div"),
		wR = document.createElement("span"),
		wS = document.createElement("div"),
		wY = (this.wT = new uN(uO, uP), this.wU = new wV(uP), this.wW = new wX(wL), 2);
	this.wc = function(wd) {
		wd = (wd / 10).toFixed(1) + "%";
		wQ.style.width = wd, wR.innerHTML = wd
	}, this.we = function(wf) {
		(0 === wY ? this.wT : 1 === wY ? this.wU : this.wW).ug(pu), (0 === (wY = wf) ? this.wT : 1 === wf ? this.wU : this.wW).show(pu)
	}, this.wg = function() {
		return wN
	}, this.show = function() {
		document.body.appendChild(wM)
	}, this.ug = function() {
		u.removeChild(document.body, wM)
	}, this.resize = function() {
		var wh = 1 - .4 * a1.a2.j1() * (i.j > 1.6 * i.k),
			wi = bD.th.ui(.05 * wh),
			wj = 1.3 * wi,
			wk = i.k > i.j,
			wl = bD.th.ui(.06 * wh + .03 * wk),
			wk = bD.th.ui(.02 * wh + .01 * wk),
			wn = bD.th.ui(.025);
		wM.style.font = bD.th.vG(0, wn), wO.style.font = bD.th.vG(0, .9 * wn), wS.style.font = bD.th.vG(0, .9 * wn), wh < 1 && (wh = bD.th.vG(0, wh * wn), wO.style.font = wh, wS.style.font = wh, wP.style.font = wh), wN.style.height = bD.th.tq(
			wj), wN.style.font = bD.th.vG(0, .72 * wi), bD.th.tr(wN, 2), wO.style.top = bD.th.tq(wj), wO.style.height = bD.th.tq(wl), bD.th.tr(wO, 2), pu.style.top = bD.th.tq(wj + wl), pu.style.height = bD.th.tq(i.k / i.l - wj - 2 * wl - wk), wP
			.style.top = bD.th.tq(i.k / i.l - wl - wk), wP.style.height = bD.th.tq(wk), bD.th.tr(wP, 8), wR.style.font = bD.th.vG(0, .8 * wk), wS.style.top = bD.th.tq(i.k / i.l - wl), wS.style.height = bD.th.tq(wl), bD.th.tr(wS, 8), wJ.resize(
			wM), wK.resize(wM), 0 === wY ? this.wT.resize(pu) : (1 === wY ? this.wU : this.wW).resize()
	};
	uO = this;
	wM.style.position = "absolute", wM.style.top = "0", wM.style.left = "0", wM.style.width = "100%", wM.style.height = "100%", wM.style.backgroundColor = bE.qS, bM.uA() || (wM.style.backdropFilter = "blur(4px)", wM.style.webkitBackdropFilter =
		"blur(4px)"), wN.style.position = "absolute", wN.style.top = "0", wN.style.left = "0", wN.style.width = "100%", wN.style.display = "flex", wN.style.alignItems = "center", wN.translate = !1;
	for (var h = [wO, wS], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.th.w4(h[aC]);
	pu.style.position = "absolute", pu.style.left = "0", pu.style.width = "100%", pu.style.font = "inherit", wP.style.position = "absolute", wP.style.left = "0", wP.style.width = "100%", wQ.style.position = "absolute", wQ.style.top = "0", wQ.style
		.left = "0", wQ.style.height = "100%", wQ.style.width = "50%", wQ.style.backgroundColor = bE.qp, wR.innerHTML = "", wR.style.position = "absolute", wR.style.top = "50%", wR.style.left = "50%", wR.style.transform = "translate(-50%, -50%)", wR
		.translate = !1, wN.appendChild(function() {
			var wb = document.createElement("h1");
			return wb.textContent = L(31), wb.style.margin = "0 auto 0.55em auto", wb.style.fontFamily = "Arial Black, system-ui", wb.style.fontSize = "inherit", wb.style.fontWeight = "inherit", wb
		}()), wO.appendChild(wJ.tO), wP.appendChild(wQ), wP.appendChild(wR), wS.appendChild(wK.tO), wM.appendChild(wN), wM.appendChild(wO), wM.appendChild(pu), wM.appendChild(wP), wM.appendChild(wS), uO.wW.show(pu)
}

function wX(wL) {
	var wM = document.createElement("div"),
		wp = [],
		wq = 96,
		wr = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function x7(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wv(button, xL) {
		var tO = document.createElement("div");
		return tO.style.position = "absolute", tO.style.left = "0", tO.style.width = "100%", tO.style.height = "20%", tO.style.pointerEvents = "none", tO.style.backgroundColor = bE.qM, xL ? tO.style.top = "0" : tO.style.bottom = "0", button
			.appendChild(tO), tO
	}

	function wy(xM, xN) {
		var tO = document.createElement("div");
		return tO.style.position = "absolute", tO.style.top = "0", tO.style.width = "20%", tO.style.height = "100%", xN ? tO.style.left = "0" : tO.style.right = "0", xM.appendChild(tO), tO
	}

	function x9(xO) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, x7(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", xO.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function x2(xM, left, right, width) {
		var tO = document.createElement("div");
		return tO.style.position = "absolute", tO.style.top = "50%", tO.style.transform = "translateY(-50%)", tO.style.left = left, tO.style.right = right, tO.style.width = width, tO.style.textAlign = "left", xM.appendChild(tO), {
			tO: tO,
			xG: xR(tO, 1.9),
			x5: xR(tO, 1)
		}
	}

	function xR(p1, fontSize) {
		var tO = document.createElement("div");
		return tO.style.fontSize = fontSize + "em", tO.style.lineHeight = "1.1", tO.style.whiteSpace = "nowrap", tO.style.overflow = "hidden", tO.style.textOverflow = "ellipsis", tO.style.textShadow = "0 0 0.25em black", p1.appendChild(tO), tO
	}

	function xS(e, pb) {
		e.textContent !== pb && (e.textContent = pb)
	}

	function xT(qA) {
		qA.canvas && (bq.xU.py(qA.canvas), qA.canvas = null), qA.xF = ""
	}
	this.nY = function() {
		var tc = bq.tc.tc,
			fl = tc.length;
		if (fl !== wp.length) {
			for (var aC = 0; aC < wp.length; aC++) xT(wp[aC]);
			for (wM.textContent = "", wp = new Array(fl), aC = 0; aC < fl; aC++) wp[aC] = function(eU) {
				var button = document.createElement("button"),
					wu = (button.style.position = "absolute", button.style.backgroundColor = bE.qS, button.style.color = bE.qT, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.th.wt(button, function() {
							wL(eU, 0)
						}, function() {
							wL(eU, 1)
						}), bD.th.tr(button), wv(button, 1)),
					ww = wv(button, 0),
					wx = wy(wu, 0),
					wz = wy(ww, 1),
					x0 = wy(ww, 0),
					x1 = x2(wu, "3%", "", "74%"),
					x3 = x2(ww, "20%", "", "30%"),
					x4 = x2(ww, "", "20%", "30%"),
					x6 = (x4.tO.style.textAlign = "right", x3.x5.textContent = "Starts in", document.createElement("canvas"));
				return x6.width = x6.height = wq, x7(x6), wx.appendChild(x6), (button = {
					button: button,
					wu: wu,
					ww: ww,
					x8: x9(wz),
					xA: x9(x0),
					xB: 0,
					isContest: 0,
					xC: null,
					wx: wx,
					x6: x6,
					xD: x6.getContext("2d", {
						alpha: !0
					}),
					xE: -1,
					canvas: null,
					xF: "",
					map: x1.xG,
					xH: x1.x5,
					xI: x3.xG,
					xJ: x4.xG,
					xK: x4.x5,
					hw: -1
				}).map.translate = !1, button.xH.translate = !1, button.xI.translate = !1, x3.x5.translate = !1, button
			}(aC), wM.appendChild(wp[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fl; aC++) wp[aC].xF !== bq.xU.xV(tc[aC].fR, tc[aC].mapSeed) && xT(wp[aC]);
		for (aC = 0; aC < fl; aC++) {
			var xW = tc[aC],
				qA = wp[aC],
				hw = xW.id === bq.tc.xX ? 1 + bq.tc.xY : 0,
				hE = bq.tc.xZ(xW);
			xS(qA.map, bV.xa.xb[xW.fR]), xS(qA.xH, bq.tc.xc(xW.xH)), xS(qA.xI, bq.tc.xd(xW.xe)), xS(qA.xJ, hE + (bq.tc.xf(xW) ? "/" + xW.ng : "")), xS(qA.xK, L(1 === hE ? 32 : 33)), qA.hw !== hw && (qA.hw = hw, qA.wu.style.backgroundColor = qA.ww
				.style.backgroundColor = [bE.qM, bE.qz, bE.rR][hw], bD.th.tr(qA.button, 5, [bE.qT, bE.r0, bE.rS][hw])), ! function(qA) {
				!qA.xB && ac.wG() && (qA.xB = 1, qA.x8.drawImage(ac.xQ("clock"), 0, 0), qA.xA.drawImage(ac.xQ("userIcon"), 0, 0))
			}(qA), ! function(qA, xH) {
				qA.xE === xH || 7 <= xH && !ac.wG() || ((qA.xE = xH) < 7 ? bk.xm(qA.xD, xH + 2, wq) : (qA.xD.clearRect(0, 0, wq, wq), qA.xD.drawImage(ac.xQ(wr[xH - 7]), 0, 0, wq, wq)))
			}(qA, xW.xH), ! function(qA, isContest) {
				qA.isContest === isContest || isContest && !ac.wG() || ((qA.isContest = isContest) ? (qA.xC || (qA.xC = function(qA) {
					var xl = ac.xQ("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xl.width, canvas.height = xl.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xl, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", qA.button.insertBefore(canvas, qA.wu), canvas
				}(qA)), qA.xC.hidden = !1) : qA.xC.hidden = !0)
			}(qA, xW.xi), ! function(qA, xW) {
				var canvas;
				qA.canvas || (canvas = bq.xU.xn(xW.fR, xW.mapSeed)) && (qA.canvas = canvas, qA.xF = bq.xU.xV(xW.fR, xW.mapSeed), x7(canvas), qA.button.insertBefore(canvas, qA.button.firstChild))
			}(qA, xW)
		}
	}, this.resize = function() {
		var fl = wp.length,
			j = wM.offsetWidth,
			k = wM.offsetHeight;
		if (0 !== fl && 0 !== j && 0 !== k) {
			for (var gap = bD.th.ui(.012), xo = 0, xp = 1, ev = 1; ev <= fl; ev++) {
				var rows = bO.gC(fl + ev - 1, ev),
					rows = Math.min((j - (ev + 1) * gap) / ev, (k - (rows + 1) * gap) / rows);
				xo < rows && (xo = rows, xp = ev)
			}
			for (var xq = bO.gC(fl + xp - 1, xp), oC = (j - xp * xo - (xp - 1) * gap) / 2, oD = (k - xq * xo - (xq - 1) * gap) / 2, aC = 0; aC < fl; aC++) {
				var qJ = wp[aC].button.style;
				qJ.left = bD.th.tq(oC + aC % xp * (xo + gap)), qJ.top = bD.th.tq(oD + bO.gC(aC, xp) * (xo + gap)), qJ.width = qJ.height = bD.th.tq(xo), qJ.fontSize = bD.th.tq(.05 * xo)
			}
		}
	}, this.show = function(tb) {
		tb.appendChild(wM), this.nY(), this.resize()
	}, this.ug = function(tb) {
		u.removeChild(tb, wM)
	}, wM.style.position = "absolute", wM.style.top = "0", wM.style.left = "0", wM.style.width = wM.style.height = "100%", wM.style.overflow = "hidden", wM.style.font = "inherit"
}

function wV(uP) {
	var ue, xO, wM = document.createElement("div"),
		pu = document.createElement("div"),
		xr = null,
		xs = null;
	this.nY = function() {
			pu.textContent = "", bq.xv.xw && bq.xv.ug(1);
			for (var q1 = document.createDocumentFragment(), xJ = bq.pr.xx, tc = bq.tc.tc, xy = 0, aC = 0; aC < tc.length; aC++) xy = xy || 8 === tc[aC].xH;
			for (xr.style.width = xr.style.maxWidth = xy ? "11.3em" : "10.3em", aC = 0; aC < xJ.length; aC++) {
				var eU = bq.tc.xz(xJ[aC].y0);
				! function(q1, qA, eU, y2) {
					var ue = xr.cloneNode(!0),
						xO = ue.firstChild;
					xO.style.backgroundColor = 0 <= eU && qA.y3 ? bE.rU : xs[eU < 0 ? 15 : Math.min(eU, 14)], 0 <= eU && (xO.textContent = "" + (eU + 1));
					ue.lastChild.textContent = bq.ly.y4(qA, y2), ue.style.color = bq.ly.y5(qA.y6), 11 === qA.y6 && (ue.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					bq.ly.y7(qA) && (ue.style.textDecoration = "underline"), qA.y8 && (ue.style.textDecorationLine = "underline", ue.style.textDecorationStyle = "dotted");
					ue.onclick = function(e) {
						uP(e, qA)
					}, bM.uA() || (ue.onmouseover = function(e) {
						bq.xv.y9(ue, qA, 1)
					}), q1.appendChild(ue)
				}(q1, xJ[aC], eU, 0 <= eU && 8 === tc[eU].xH)
			}
			pu.appendChild(q1)
		}, this.show = function(tb) {
			tb.appendChild(wM)
		}, this.ug = function(tb) {
			u.removeChild(tb, wM)
		}, this.resize = function() {
			pu.style.fontSize = bD.th.tq(bD.th.ui(.02, .3))
		}, wM.style.top = "0", wM.style.left = "0", wM.style.width = wM.style.height = "100%", wM.style.overflowX = "hidden", wM.style.overflowY = "auto", wM.style.font = "inherit", pu.style.font = "inherit", pu.style.margin = "0.4em", wM
		.appendChild(pu), (ue = document.createElement("span")).style.cursor = "pointer", ue.style.margin = "0.2em 0.2em 0.2em 0.2em", ue.style.height = ue.style.maxHeight = "1.4em", ue.style.whiteSpace = "nowrap", ue.style.overflow = "hidden", ue
		.style.textOverflow = "ellipsis", ue.style.font = "inherit", ue.style.display = "inline-block", (xO = document.createElement("span")).style.display = "inline-block", xO.style.width = xO.style.height = xO.style.lineHeight = "1.3em", xO.style
		.marginRight = "0.4em", xO.style.fontSize = "0.8em", xO.style.fontWeight = "bold", xO.style.textAlign = "center", xO.style.color = bE.qK, xO.style.textShadow = "none", xO.style.textDecoration = "none", xO.style.pointerEvents = "none", xO
		.translate = !1, ue.appendChild(xO), ue.appendChild(document.createTextNode("")), xr = ue, xs = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function yA(yB) {
	var wM = document.createElement("div"),
		uR = document.createElement("div"),
		yC = [];

	function u5() {
		bM.uA() || (this.style.backgroundColor = bD.color.uD(bE.qP, 50))
	}

	function u6() {
		this.style.backgroundColor = bE.qP
	}
	this.q6 = function(yE, yF) {
			yC[2].textContent = yE + 1 + " / " + yF
		}, this.show = function(qA) {
			qA = bq.ly.q3(qA, bq.ly.q4(qA)), uR.appendChild(bq.px.transform(qA)), document.body.appendChild(wM)
		}, this.resize = function() {
			var k = bD.th.ui(.03, .5);
			wM.style.width = 10 * k + "px", wM.style.font = bD.th.vG(1, .75 * k), bD.th.tr(wM, 4), uR.style.top = k + "px", uR.style.font = bD.th.vG(0, .55 * k), bD.th.tr(uR, 2), wM.style.height = k + uR.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.th.tr(yC[aC], 6), yC[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) yC[aC].style.height = k + "px", bD.th.tr(yC[aC], 2);
			yC[2].style.width = 4 * k + "px", yC[1].style.left = 2 * k + "px", yC[2].style.left = 4 * k + "px", yC[3].style.left = 8 * k + "px"
		}, this.yG = function() {
			for (var aC = 0; aC < 4; aC++) yC[aC].onclick = null, yC[aC].onmouseover = null, yC[aC].onmouseout = null;
			bq.px && uR.firstChild && bq.px.py(uR.firstChild), u.removeChild(document.body, wM), wM = uR = yC = null
		}, wM.style.position = "absolute", wM.style.color = bE.qT, wM.style.zIndex = "3", wM.style.right = "0", wM.style.top = "0", uR.style.position = "absolute", uR.style.height = "auto", uR.style.color = bE.qT, uR.style.backgroundColor = bE.qP, uR
		.style.left = "0", uR.style.width = "100%", uR.style.overflowWrap = "break-word", wM.appendChild(uR);
	for (var aC = 0; aC < 4; aC++) yC[aC] = document.createElement("div"), yC[aC].style.position = "absolute", yC[aC].style.backgroundColor = bE.qP, yC[aC].style.color = bE.qT, yC[aC].style.top = "0", yC[aC].style.display = "flex", yC[aC].style
		.justifyContent = "center", yC[aC].style.alignItems = "center", yC[aC].style.userSelect = "none", yC[aC].style.outline = "none", yC[aC].style.font = "inherit", 2 !== (yC[aC].yD = aC) && (yC[aC].onclick = yB, yC[aC].onmouseover = u5, yC[aC]
			.onmouseout = u6), wM.appendChild(yC[aC]);
	yC[0].textContent = "◀", yC[1].textContent = "▶", yC[3].textContent = "✖"
}

function yH(yB) {
	var v5 = document.createElement("div");

	function u5() {
		bM.uA() || (v5.style.backgroundColor = bD.color.uD(bE.qP, 50))
	}

	function u6() {
		v5.style.backgroundColor = bE.qP
	}
	this.q6 = function(yF) {
			v5.textContent = yF
		}, this.show = function() {
			document.body.appendChild(v5)
		}, this.resize = function() {
			var k = bD.th.ui(.03, .5);
			v5.style.width = 2 * k + "px", v5.style.height = k + "px", v5.style.font = bD.th.vG(1, .75 * k), bD.th.tr(v5, 4), bD.th.tr(v5, 2)
		}, this.yG = function() {
			v5.onclick = null, v5.onmouseover = null, v5.onmouseout = null, u.removeChild(document.body, v5), v5 = null
		}, v5.style.position = "absolute", u6(), v5.style.color = bE.qT, v5.style.zIndex = "3", v5.style.right = "0", v5.style.top = "0", v5.style.display = "flex", v5.style.justifyContent = "center", v5.style.alignItems = "center", v5.style
		.userSelect = "none", v5.style.outline = "none", v5.onclick = yB, v5.onmouseover = u5, v5.onmouseout = u6
}

function yI(uw, yJ) {
	var wM = document.createElement("div"),
		yK = document.createElement("div"),
		yL = (yJ = yJ || 1, Math.floor((uw.length + yJ - 1) / yJ)),
		yM = [],
		yN = [],
		v6 = (this.fs = 0, this.fu = 0);

	function yQ() {
		bq.yR.ug()
	}
	this.pC = uw, this.show = function(fs, fu, yU) {
			if (v6) return [0, 0];
			v6 = 1, this.fs = fs, this.fu = fu,
				function(self, yU) {
					var j = bD.th.ui(.16, .7),
						k = yL * j / 3,
						vH = (j *= yJ, i.j / i.l),
						yW = i.k / i.l,
						oO = Math.min(1, Math.min(vH / j, yW / k));
					j *= oO, k *= oO, yU && (self.fs += bD.th.ui(.03, .5)), self.fs = bO.j0(self.fs, 0, vH - j), self.fu = bO.j0(self.fu, 0, yW - k), yK.style.left = self.fs + "px", yK.style.top = self.fu + "px", yK.style.width = j + "px", yK.style
						.height = k + "px", yK.style.font = bD.th.vG(0, .3 * k / yL), bD.th.tr(yK, 5);
					for (var aC = 1; aC < yM.length; aC++) yN[aC][0] && bD.th.tr(yM[aC], 8), yN[aC][1] && bD.th.tr(yM[aC], 4)
				}(this, yU), document.body.appendChild(wM)
		}, this.ug = function() {
			v6 && (v6 = 0, wM.removeEventListener("click", yQ), u.removeChild(document.body, wM))
		},
		function() {
			var aC, fl = uw.length;
			for (aC = 0; aC < fl; aC++) yM.push(uw[aC].button);
			for (aC = fl; 1 < yJ && aC < yL * yJ; aC++) {
				var e = document.createElement("div");
				e.style.backgroundColor = bE.qP, yM.push(e)
			}
			for (aC = 0; aC < yM.length; aC++) yN.push([aC % yL, Math.floor(aC / yL)])
		}();
	for (var aC = 0; aC < uw.length; aC++) new uc("" + (1 + aC), uw[aC].button, 0, 1);
	wM.style.position = "fixed", wM.style.top = "0", wM.style.left = "0", wM.style.width = "100%", wM.style.height = "100%", wM.style.zIndex = "5", yK.style.position = "absolute",
		function() {
			if (1 < yJ) ! function() {
				yK.style.display = "grid", yK.style.gridTemplateColumns = "repeat(" + yJ + ", 1fr)", yK.style.gridTemplateRows = "repeat(" + yL + ", 1fr)";
				for (var aC = 0; aC < yM.length; aC++) {
					var qJ = yM[aC].style;
					qJ.width = qJ.height = qJ.maxHeight = "100%", qJ.padding = "0.0em 0.9em", qJ.gridRow = "" + (yN[aC][0] + 1), qJ.gridColumn = "" + (yN[aC][1] + 1), yK.appendChild(yM[aC])
				}
			}();
			else
				for (var yT = (100 / uw.length).toFixed(2) + "%", aC = 0; aC < uw.length; aC++) uw[aC].button.style.width = "100%", uw[aC].button.style.height = uw[aC].button.style.maxHeight = yT, uw[aC].button.style.padding = "0.0em 0.9em", yK
					.appendChild(uw[aC].button)
		}(), wM.appendChild(yK), wM.addEventListener("click", yQ)
}

function ew() {
	var yX, yY, yZ;

	function yf(aC) {
		return bD.color.qL(yY[aC][0], yY[aC][1], yY[aC][2])
	}

	function yl(g4, g5) {
		return bD.color.yu(yY[g4], yY[g5]), yf(g5)
	}

	function yd() {
		yX && (yX.remove(), yX = null)
	}
	this.show = function(ex, colors, id) {
		0 <= (yZ = id) && b1.z.er(0) && b1.es.ya(0, id), ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = ex.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yY = colors, (yX = document.createElement("div")).style.position = "fixed", yX.style.top = "0", yX.style.left = "0", yX.style.width = "100%", yX.style.height = "100%", yX.style.backgroundColor = bD.color.qN(yY[0][0], yY[0][1], yY[0][
				2], .6), yX.style.zIndex = "6", yX.onclick = function(e) {
				e.target === yX && yd()
			},
			function(ex) {
				var io, ye = document.createElement("div");
				ye.style.position = "absolute", ye.style.display = "flex", ye.style.flexDirection = "column", ye.style.top = "50%", ye.style.left = "50%", ye.style.backgroundColor = yf(2), io = a1.a2.j1() ? bD.th.yg(i.min) : bD.th.ui(.4);
				io = Math.max(io, 200), ye.style.width = bD.th.tq(io), ye.style.height = bD.th.tq(io), ye.style.transform = "translate(-50%, -50%)",
					function(ye, io) {
						var yk = document.createElement("div");
						yk.style.flex = "0 0 10%", yk.style.overflow = "hidden", yk.style.backgroundColor = yf(1), yk.style.color = yl(1, 7), yk.style.font = bD.th.vG(1, .05 * io), yk.style.display = "flex", yk.style.alignItems = "center", yk
							.style.justifyContent = "center", yk.innerHTML = L(34), ye.appendChild(yk)
					}(ye, io),
					function(ye, ex, io) {
						var ym = document.createElement("div");
						ym.style.flex = "0 0 70%", ym.style.overflowY = "auto", ym.style.overflowX = "hidden", ym.style.whiteSpace = "pre-wrap", ym.style.wordWrap = "break-word", ym.style.padding = bD.th.tq(.02 * io), ym.style.backgroundColor =
							yf(2), ym.style.color = yl(2, 8), ym.style.font = bD.th.vG(0, .07 * io), ym.innerHTML = ex, ym.innerHTML = "<style>a { color: inherit; }</style>" + ym.innerHTML, ye.appendChild(ym)
					}(ye, ex, io),
					function(ye, io) {
						var p1 = document.createElement("div"),
							yn = (p1.style.display = "flex", p1.style.flexDirection = "row", p1.style.justifyContent = "space-between", p1.style.alignItems = "stretch", p1.style.backgroundColor = yf(3), p1.style.flex = "1", p1.style.padding = bD
								.th.tq(.01 * io), p1.style.gap = bD.th.tq(.01 * io), document.createElement("div")),
							yo = (yn.style.flex = "0 0 60%", yn.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yd()
							}, yf(4), !1)),
							yo = (yo.button.style.width = "100%", yo.button.style.height = "100%", yo.button.style.color = yl(4, 9), yo.button.style.font = bD.th.vG(1, .05 * io), yn.appendChild(yo.button), document.createElement("div")),
							yq = (yo.style.flex = "0 0 15%", yo.style.height = "100%", yo.style.backgroundColor = yf(5), document.createElement("div")),
							yr = (yq.style.flex = "1", yq.style.height = "100%", new x(L(36), function(e) {
								return bD.th.ys(e), yZ < 0 || b1.z.er(0) && (b1.es.ya(1, yZ), yZ = -1), !0
							}, yf(6), !1));
						yr.button.style.width = "100%", yr.button.style.height = "100%", yr.button.style.color = yl(6, 10), yr.button.style.font = bD.th.vG(1, .035 * io), yq.appendChild(yr.button), p1.appendChild(yn), p1.appendChild(yo), p1
							.appendChild(yq), ye.appendChild(p1)
					}(ye, io), yX.appendChild(ye)
			}(ex), document.body.appendChild(yX)
	}
}

function yv(vT, yw) {
	this.tY = [];
	var yx = this.tY;

	function click() {
		for (var aC = 0; aC < yx.length; aC++) yx[aC].textContent = yx[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eU = parseInt(this.name);
		void 0 !== vT.eU && bm.s0.q6(vT.eU, eU), yw && yw(eU)
	}
	for (var yy, fl = vT.vZ.length, aC = 0; aC < fl; aC++)(yy = document.createElement("p")).textContent = "⚪ " + vT.vZ[aC], yy.style.margin = "0", yy.name = "" + aC, yy.style.cursor = "pointer", yy.style.fontSize = "1em", yy.addEventListener(
		"click", click), yx.push(yy);
	yx[vT.value].textContent = yx[vT.value].textContent.replace("⚪", "🟢")
}

function yz(title, z0, z1) {
	var vy = document.createElement("div"),
		pT = document.createElement("div"),
		pU = document.createElement("div"),
		z2 = document.createElement("div"),
		z3 = document.createElement("div");
	this.z4 = pU, this.z5 = z0, this.show = function() {
			!1 !== z1 ? document.body.appendChild(vy) : (document.body.appendChild(pT), document.body.appendChild(z2))
		}, this.ug = function() {
			!1 !== z1 ? u.removeChild(document.body, vy) : (u.removeChild(document.body, pT), u.removeChild(document.body, z2))
		}, this.z9 = function() {
			var uj = bD.th.ui(.1),
				uh = bD.th.ui(.08 + .04 * (i.zA < 1), .3);
			return {
				uj: uj,
				uh: uh,
				zB: i.k / i.l - uj - uh
			}
		}, this.resize = function(v1) {
			var fl = z0.length,
				zC = this.z9(),
				uj = zC.uj,
				uh = zC.uh;
			for (pT.style.height = bD.th.tq(uj), bD.th.tr(pT, 2), z2.style.top = bD.th.tq(i.k / i.l - uh), z2.style.height = bD.th.tq(uh), bD.th.tr(z2, 8), pU.style.top = bD.th.tq(uj), pU.style.height = pU.style.maxHeight = bD.th.tq(zC.zB), pT.style
				.font = bD.th.vG(0, bD.th.ui(.02, .15)), z2.style.font = bD.th.vG(0, bD.th.ui(.02, .7)), pU.style.font = bD.th.vG(0, bD.th.ui(.02, .35)), aC = 1; aC < fl; aC++) bD.th.tr(z0[aC].button, 4);
			for (var v2 = 0, aC = 0; aC < fl; aC++) v2 += z0[aC].button.offsetWidth;
			if (v1 && v2 < z2.offsetWidth)
				for (aC = 0; aC < fl; aC++) z0[aC].button.style.width = (100 * z0[aC].button.offsetWidth / v2).toFixed(2) + "%";
			else
				for (aC = 0; aC < fl; aC++) z0[aC].button.style.width = "auto";
			z2.wH && (z2.scrollLeft = z2.wH), v1 || this.resize(!0)
		}, this.zD = function() {
			var zC = this.z9(),
				ev = i.l;
			zE.fillStyle = bE.qP, zE.fillRect(0, ev * zC.uj, i.j, ev * zC.zB)
		}, vy.style.position = "absolute", vy.style.top = "0", vy.style.left = "0", vy.style.width = "100%", vy.style.height = "100%", pT.style.position = "absolute", pT.style.top = "0", pT.style.left = "0", pT.style.width = "100%", pT.style
		.display = "flex", pT.style.backgroundColor = bE.qP, z2.style.position = "absolute", z2.style.left = "0", z2.style.width = "100%", bD.th.w4(z2), z3.style.height = z3.style.maxHeight = "100%", pU.style.position = "absolute", pU.style.width =
		"100%", pU.style.backgroundColor = bE.qP,
		function() {
			for (var aC = 0; aC < z0.length; aC++) z0[aC].button.style.height = "100%", z0[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < z0.length; aC++) z3.appendChild(z0[aC].button);
	pT.appendChild(function() {
		var z8 = document.createElement("h1");
		return z8.textContent = title, z8.style.margin = "auto", z8.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", z8.style.fontFamily = "Arial Black, system-ui", z8
	}()), z2.appendChild(z3), !1 !== z1 && (vy.appendChild(pU), vy.appendChild(pT), vy.appendChild(z2))
}

function uc(zF, zG, zH, zI) {
	var self;
	this.ue = document.createElement("span"), (self = this).ue.textContent = zF, self.ue.style.color = bE.qT, self.ue.style.position = "absolute", self.ue.style.font = "inherit", zI ? self.ue.style.bottom = "0.06em" : self.ue.style.top = "0.12em",
		zH ? self.ue.style.left = "0.2em" : self.ue.style.right = "0.2em", self.ue.style.fontSize = "0.6em", self.ue.style.pointerEvents = "none", self.ue.style.whiteSpace = "pre", zG.style.position = "relative", zG.style.overflow = "hidden", zG
		.appendChild(self.ue)
}

function w6(zF, zG, zJ, zK, zL) {
	var self;
	this.ue = document.createElement("span"), this.resize = function() {
			this.ue.style.fontSize = ((zK - zJ) * zG.offsetHeight).toFixed(1) + "px"
		}, (self = this).ue.textContent = zF, self.ue.style.color = bE.qT, self.ue.style.font = "inherit", self.ue.style.margin = "0.1em 0.6em", self.ue.style.pointerEvents = "none", zL && (self.ue.style.fontWeight = "bold"), self.ue.style
		.whiteSpace = "nowrap", self.ue.style.display = "block", zG.appendChild(self.ue)
}

function zM(zN, zO, zP, zQ) {
	var zR = document.createElement("textarea"),
		zS = (this.e = zR, !0);

	function zX() {
		zR.select(), document.execCommand("copy")
	}
	this.resize = function() {
			zO && bD.th.tr(zR, 5)
		}, this.zT = function(ex) {
			zR.value = ex
		}, this.zU = function() {
			return zR.value
		}, this.zV = function() {
			zR.select()
		}, this.clear = function() {
			zR.value = ""
		}, this.zW = function() {
			zS && navigator.clipboard ? (zR.select(), navigator.clipboard.writeText(zR.value).catch(function() {
				zS = !1, zX()
			})) : zX()
		}, zR.setAttribute("id", "textArea" + u.z.vW++), zR.setAttribute("autocomplete", "off"), zN && zR.setAttribute("placeholder", zN), zR.style.top = "0", zR.style.left = "0", zR.style.width = "100%", zR.style.height = "100%", zR.style
		.userSelect = "none", zR.style.outline = "none", zR.style.resize = "none", zR.style.border = "none", zR.style.color = bE.qT, zR.style.backgroundColor = bE.qM, zQ ? (zR.style.fontSize = "1em", zR.rows = 6, zR.style.padding = "0.25em") : (zR
			.style.padding = "0.45em", zR.style.fontSize = "1.2em"), zP && zR.addEventListener("input", function(e) {
			zP(e)
		}), zR.addEventListener("focus", function() {
			i.vX++
		}), zR.addEventListener("blur", function() {
			i.vX--
		})
}

function dT() {
	this.ty = new zY, this.buffer = new zZ, this.s0 = new za, this.z = new zb, this.zc = new zd, this.dv = function() {
		this.buffer.dv(), (new ze).dv(), this.zc.dv(), this.z.zf()
	}
}

function zZ() {
	function zg(aC, type, zm, eC) {
		bm.buffer.data.push({
			eU: aC,
			type: type || 0,
			value: zm || 0,
			zm: zm || 0,
			eC: eC || 0
		})
	}

	function zh(aC, type, zm, eC) {
		bm.buffer.data.push({
			eU: aC,
			type: type,
			value: zm || "",
			zm: zm || "",
			eC: eC || 0
		})
	}

	function zi(oU) {
		for (var aC = bm.buffer.data.length; aC < oU; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dv = function() {
		zg(0, 1, 0, 5), zg(1, 1, 1), zg(2, 0), zh(3, 2), zg(4, 1), zh(5, 2, "system-ui", 2), zg(6, 0), zg(7, 0, 0), zg(8, 0), zg(9, 1, 1), zg(10, 1), zg(11, 1, 1), zh(12, 2, navigator.language), zg(13), zg(14), zg(15, 0, 1), zg(16, 0, 3), zi(
			100), zh(100, 2), zh(101, 2), zh(102, 2), zh(103, 2), zh(104, 2), zh(105, 2), zh(106, 2), zg(107), zg(108), zg(109), zh(110, 2), zg(111), zg(112), zg(113), zh(114, 2), zg(115), zh(116, 2), zg(117, 1), zh(118, 2, "", 2), zg(119, 1, 0,
				1), zh(120, 2), zg(121, 1, ~~(262144 * Math.random())), zh(122, 2, "Player " + Math.floor(1e3 * Math.random())), zg(123), zh(124), zg(125, 1), zh(126, 2), zg(127, 0, 1), zg(128), zg(129), zg(130), zg(131), zg(132), zh(133, 2), zg(
				134, 0, 5), zh(135, 2), zh(136, 2), zg(137), zg(138), zg(139), zg(140), zg(141), zg(142), zg(143), zg(144), zh(145, 2), zg(146), zg(147), zh(148, 2), zg(149), zg(150, 0, 1), zh(151, 2), zg(152, 0, 5), zg(153, 1), zg(154, 1), zh(
				155, 2), zh(156, 2), zg(157), zg(158), zg(159), zg(160), zh(161, 2), zg(162, 0, 1024), zh(163, 2, "0,0,0"), zh(164, 2, "100,100,100"), zh(165, 2, "30,30,30"), zh(166, 2, "70,70,70"), zh(167, 2, "100,100,100"), zh(168, 2,
				"85,85,85"), zh(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zh(170 + aC, 2, "255,255,255");
		zh(174, 2), zh(175, 2), zg(176, 0, 200), zi(180), zg(180, 0), zg(181, 0), zg(182, 0, 1023), zh(183, 2), zg(184, 0, 100), zh(185, 2)
	}, this.q6 = function(eU, value) {
		this.data[eU].value = value
	}, this.zj = function(eU, value) {
		this.q6(eU, value);
		var value = String(value),
			fl = value.length;
		5e4 < fl ? console.log("storage value too large: index " + eU + " size " + fl) : (bm.ty.save(eU, value), bm.ty.save(eU, String(this.data[eU].eC), !0))
	}, this.zk = function(eU) {
		return Number(this.data[eU].value)
	}, this.zl = function(eU) {
		return String(this.data[eU].value)
	}
}

function zd() {
	var zn = [];

	function zq(pj) {
		zn.unshift(pj), bm.s0.q6(161, zn.join(";"))
	}

	function fH(pj) {
		for (var zs = zn, fl = zs.length, aC = 0; aC < fl; aC++)
			if (zs[aC] === pj) return zs.splice(aC, 1), bm.s0.q6(161, zs.join(";")), 1
	}
	this.dv = function() {
		var pb = bm.buffer.data[161].value;
		pb.length && (zn = pb.split(";"))
	}, this.get = function() {
		return zn
	}, this.zo = function() {
		return {
			vZ: zn,
			value: 0
		}
	}, this.y8 = function(pj) {
		return bD.tp.has(zn, pj)
	}, this.zp = function(pj) {
		return fH(pj) ? 0 : (zq(pj), 1)
	}, this.nY = function(pj) {
		fH(pj) && zq(pj)
	}, this.zr = function(eU) {
		eU < zn.length && (zn.splice(eU, 1), bm.s0.q6(161, zn.join(";")))
	}
}

function zY() {
	this.zt = function(eU, eC) {
		return Number(this.zu(eU, eC))
	}, this.zu = function(eU, eC) {
		var gD = null;
		return 0 === a1.id ? a1.zv && (gD = a1.zv.getItem((eC ? "v" : "d") + eU)) : 1 === a1.id ? gD = a1.zw.loadString((eC ? 1e3 : 2e3) + eU) : 2 === a1.id && (gD = a1.zx[(eC ? "v" : "d") + eU]), gD && 0 !== gD.length ? gD : null
	}, this.zy = function(fl, zz) {
		var h = [],
			a00 = zz ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zv)
				for (aC = 0; aC < fl; aC++) h.push(a1.zv.getItem(a00 + aC))
		} else if (1 === a1.id)
			for (var a01 = zz ? 5e3 : 3e3, aC = 0; aC < fl; aC++) h.push(a1.zw.loadString(a01 + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fl; aC++) h.push(a1.zx[a00 + aC]);
		return h
	}, this.save = function(eU, value, eC) {
		var a02 = (eC ? "v" : "d") + eU;
		if (0 === a1.id) {
			if (a1.zv && bm.buffer.data[140].value) try {
				a1.zv.setItem(a02, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zw.saveString((eC ? 1e3 : 2e3) + eU, value) : 2 === a1.id && (a1.zx[a02] = value, a1.a03.postMessage(a02 + " " + value))
	}, this.a04 = function(h, zz) {
		var fl = h.length,
			a00 = zz ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zv && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fl; aC++) a1.zv.setItem(a00 + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var a01 = zz ? 5e3 : 3e3, aC = 0; aC < fl; aC++) a1.zw.saveString(a01 + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fl; aC++) a1.zx[a00 + aC] = h[aC], a1.a03.postMessage(a00 + aC + " " + h[aC])
	}
}

function ze() {
	this.dv = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eC && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zm = 1);
			0 === data[100].eC && (data[100].value = data[100].zm = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fl = data.length;
		for (aC = 0; aC < fl; aC++) {
			var a07 = bm.ty.zt(aC, !0);
			data[aC] && data[aC].eC === a07 && (null === (a07 = bm.ty.zu(aC)) ? data[aC].value = data[aC].zm : 2 === data[aC].type ? data[aC].value = a07 : (a07 = Number(a07), isNaN(a07) ? data[aC].value = data[aC].zm : data[aC].value = a07))
		}
	}
}

function zb() {
	function a0C(h) {
		if (0 === h.length) bm.s0.q6(116, "");
		else {
			for (var a0G = h[0], aC = 1; aC < h.length; aC++) a0G += ";" + h[aC];
			bm.s0.q6(116, a0G)
		}
	}
	this.a09 = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.s0.q6(110, ""), this.a0A())
	}, this.a0A = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var a0B = [], aC = 0; aC < h.length; aC += 2) a0B.push(h[aC]);
		a0C(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vZ = a0B
	}, this.a0D = function(eU) {
		bm.buffer.data[117].vZ.splice(eU, 1), bm.buffer.data[117].value = Math.min(eU, bm.buffer.data[117].vZ.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eU, 2), a0C(h)
	}, this.a0E = function(pj, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pj) return h[aC + 1] = password, void a0C(h);
		h.push(pj, password), a0C(h)
	}, this.a0F = function(eU) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eU + 1) ? null : {
			pj: h[2 * eU],
			password: h[2 * eU + 1]
		}
	}, this.a0H = function() {
		var gD = bO.j0(bm.buffer.data[121].value, -1, 262143);
		return gD = -1 === gD ? ~~(262144 * Math.random()) : gD
	}, this.zf = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var a0I, pb = h[aC].trim();
			0 !== pb.length && (a0I = 0 <= (a0I = pb.indexOf("=")) ? pb.substring(0, a0I) : pb, document.cookie = a0I + "=;expires=0;path=/", document.cookie = a0I + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a0I +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function za() {
	this.q6 = function(eU, value) {
		2 !== bm.buffer.data[eU].type && (value = Math.floor(value)), bm.buffer.data[eU].value !== value && (bm.buffer.zj(eU, value), 0 === eU ? (u.y(), bA.dv(), u.v(2)) : 1 === eU ? i.e5(1) : 2 === eU ? i.e5(0) : 5 === eU && (bD.th.a0J(), i.e5(
			0)))
	}, this.a0K = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zj(aC, data[aC].zm);
		bD.th.a0J(), i.e5(1)
	}, this.a0L = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.q6(aC, data[aC].zm)
	}, this.a0M = function() {
		for (var g5 = bm.buffer, aC = 128; aC < 135; aC++) g5.zj(aC, g5.data[aC].zm)
	}, this.a0N = function(data) {
		bm.s0.q6(109, data.vp), bm.s0.q6(107, data.a0O), bm.s0.q6(108, data.a0P), bm.s0.q6(112, data.a0Q), bm.s0.q6(111, data.a0R), bm.s0.q6(113, data.a0S), bm.s0.q6(135, data.a0T), bm.s0.q6(136, data.a0U), bm.s0.q6(137, data.a0V), bm.s0.q6(138,
			data.a0W), bm.s0.q6(139, data.a0X), bm.s0.q6(141, data.a0Y), bm.s0.q6(142, data.a0Z), bm.s0.q6(143, data.a0a), bm.s0.q6(144, data.a0b)
	}
}

function cD() {
	this.fC = new a0c, this.a0d = new a0e, this.a0f = new a0g, this.dv = function() {
		this.fC.dv()
	}
}

function a0e() {
	this.a0h = function(size) {
		for (var a0i = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0i.sk(16)));
		return h.join("")
	}, this.a0j = function(pb) {
		return 20 < (pb = pb.trim()).length ? pb.substring(0, 20) : pb
	}
}

function a0c() {
	var a0k = new Uint8Array(78);
	this.dv = function() {
		var aC;
		for (a0k[50] = 37, aC = 0; aC < 10; aC++) a0k[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0k[aC + 20] = aC + 11, a0k[aC + 52] = aC + 38
	}, this.a0l = function(pb) {
		return pb || (console.log("validateString error: " + pb), pb = ""), pb.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0m = function(pb, size) {
		if ((pb = this.a0l(pb)).length > size) return pb.substring(0, size);
		for (; pb.length < size;) pb = "-" + pb;
		return pb
	}, this.a0n = function(pb) {
		for (var a0o = a0k, fl = pb.length, h = new Uint8Array(fl), aC = 0; aC < fl; aC++) h[aC] = a0o[pb.charCodeAt(aC) - 45];
		return h
	}, this.a0p = function(a0q) {
		bG.a8(6 * a0q.length), this.a0r(a0q), bK.dv(bG.aD)
	}, this.a0r = function(a0q) {
		for (var fl = a0q.length, j = bG, aC = 0; aC < fl; aC++) j.a9(6, a0q[aC])
	}, this.a0s = function(pb) {
		this.a0r(this.a0n(pb))
	}, this.a0t = function(pb, size) {
		this.a0r(this.a0n(this.a0m(pb, size)))
	}, this.fD = function(pb, size) {
		for (var h = this.a0n(this.a0m(pb, size)), gD = 0, oO = 1, aC = h.length - 1; 0 <= aC; aC--) gD += oO * h[aC], oO *= 64;
		return gD
	}
}

function a0g() {
	this.a0u = function(a0v) {
		for (var a0i = bK, size = a0i.sk(a0v), a0w = 7 + 9 * a0i.sk(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0i.sk(a0w)));
		return h.join("")
	}
}

function cI() {
	var v8, v9, a0x, a0y, a0z, a10, a11, a12, a13, a14;

	function a16() {
		var a19 = aE.a19;
		for (a13 = a19; a13 < aE.fi; a13++) a15();
		for (a13 = aE.iB ? aE.l9 : 0; a13 < a19; a13++) {
			if (!a1A()) {
				for (var g5 = aE.a1E = a13; g5 < a19; g5++) a13 = g5, a15();
				return
			}
			a1D(a10 + v8 * a0z + bO.gC(a0z, 2), a11 + v9 * a0z + bO.gC(a0z, 2))
		}
	}

	function a1g(player) {
		for (var jh = ah.jh, jj = ah.jj, ji = ah.ji, jk = ah.jk, fu = jj[player]; fu <= jk[player]; fu++)
			for (var fs = jh[player]; fs <= ji[player]; fs++) {
				var fP = ad.a1h(fs, fu);
				ad.hL(fP) && (ad.kK(fP) ? ad.hG(fP, player) : ad.a1i(fP, player))
			}
	}

	function a1f(h, w8, w9) {
		var em = h[w8];
		h[w8] = h[w9], h[w9] = em
	}

	function a1A() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (v8 = bO.gC(a0x * az.random(), az.value(100)), v9 = bO.gC(a0y * az.random(), az.value(100)), a1n()) return 1;
			return
		}() || function() {
			var jB, jE, g4, a1C, g5, a1B;
			for (jB = bO.gC(a0x * az.random(), az.value(100)), jE = bO.gC(a0y * az.random(), az.value(100)), g4 = 40; 1 <= g4; g4--)
				for (a1C = a0y - g4; 0 <= a1C; a1C -= 40)
					for (v9 = (a1C + jE) % a0y, g5 = 40; 1 <= g5; g5--)
						for (a1B = a0x - g5; 0 <= a1B; a1B -= 40)
							if (v8 = (a1B + jB) % a0x, a1n()) return 1;
			return
		}()
	}

	function a1n() {
		for (var hJ, a1p, gap = bO.gC(a0z - a12, 2), a1q = a11 + v9 * a0z + gap, a1r = a10 + v8 * a0z + gap, a1o = a1q + a12 - 1; a1q <= a1o; a1o--)
			for (a1p = a1r + a12 - 1; a1r <= a1p; a1p--)
				if (hJ = ad.a1h(a1p, a1o), !ad.fg(hJ) || ad.kK(hJ)) return;
		return 1
	}

	function a1D(a1B, a1C) {
		a15(), a1s(a1B - 2, a1C - 2)
	}

	function a15() {
		ah.nl[a13] = 0, ah.hZ[a13] = ah.a1d[a13] = 0, ah.hD[a13] = [], ah.hR[a13] = [], ah.hS[a13] = [], ah.gA[a13] = [], ah.jh[a13] = ah.jj[a13] = ah.ji[a13] = ah.jk[a13] = 0
	}

	function a1s(a1B, a1C) {
		var hJ, aC, a1t, a1u;
		for (ah.nl[a13] = 1, ah.jh[a13] = a1B + 10, ah.jj[a13] = a1C + 10, ah.jk[a13] = ah.ji[a13] = 0, a1t = a1B; a1t < a1B + 4; a1t++)
			for (a1u = a1C; a1u < a1C + 4; a1u++)(a1B < a1t && a1t < a1B + 3 || a1C < a1u && a1u < a1C + 3) && (hJ = ad.a1h(a1t, a1u), ad.fg(hJ)) && (ah.jh[a13] = Math.min(a1t, ah.jh[a13]), ah.ji[a13] = Math.max(a1t, ah.ji[a13]), ah.jj[a13] = Math
				.min(a1u, ah.jj[a13]), ah.jk[a13] = Math.max(a1u, ah.jk[a13]), a14[ah.hZ[a13]] = hJ, ah.hZ[a13]++, ad.a1i(hJ, a13));
		for (ah.a1d[a13] = ah.hZ[a13], aC = ah.hZ[a13] - 1; 0 <= aC; aC--) ad.a1v(a14[aC], a13) ? (ad.hG(a14[aC], a13), ah.hR[a13].push(a14[aC])) : ad.a1w(a14[aC]) ? (ad.hG(a14[aC], a13), ah.hS[a13].push(a14[aC])) : ad.a1x(a14[aC]) && (ad.hG(a14[aC],
			a13), ah.gA[a13].push(a14[aC]))
	}
	this.dv = function() {
		if (a14 = new Array(12), a12 = 6, a0z = 10, a0x = bO.gC(bV.fw, a0z), a0y = bO.gC(bV.fx, a0z), a10 = bO.gC(bV.fw - a0z * a0x, 2), a11 = bO.gC(bV.fx - a0z * a0y, 2), aE.iB)
			for (var aC = 0; aC < aE.l9; aC++) a13 = aC, a15(), ah.nl[a13] = 1;
		(0 === aE.data.spawningType ? a16 : 1 === aE.data.spawningType ? (a16(), function() {
			var a1F = aE.a1G;
			aE.a1H || a1F++;
			if (!(a1F < 3)) {
				for (var data = aE.data, kP = (aE.iB ? aE.l9 : 0) + data.teamPlayerCount[0], oU = aE.a1E, a1I = new Uint32Array(a1F), a1J = new Uint32Array(a1F), a1K = new Uint16Array(a1F), a1L = new Uint16Array(a1F), fj = bj.fj, jh = ah
						.jh, jj = ah.jj, ji = ah.ji, jk = ah.jk, gQ = bR.gQ, gR = bR.gR, aC = kP; aC < oU; aC++) gQ[aC] = jh[aC] + ji[aC] >> 1, gR[aC] = jj[aC] + jk[aC] >> 1;
				for (aC = kP; aC < oU; aC++) {
					var id = fj[aC];
					a1I[id] += gQ[aC], a1J[id] += gR[aC]
				}
				var lW = bj.lW;
				for (aC = 1; aC < a1F; aC++) {
					var hE = Math.max(data.teamPlayerCount[lW[aC]], 1);
					a1K[aC] = bO.gC(a1I[aC], hE), a1L[aC] = bO.gC(a1J[aC], hE)
				}
				var a1M = bj.a1M,
					a1N = bj.a1N,
					a1O = bj.a1O,
					gP = bR.gP;
				for (aC = 0; aC < 512; aC++) gP[aC] = aC;
				for (var eT = 0; eT < 2 + (4 <= a1F); eT++)
					for (aC = kP; aC < oU; aC++) {
						for (var iF = aC, a1P = gP[iF], a1Q = 1, g1 = bO.a1R(gQ[a1P] - a1K[1], gR[a1P] - a1L[1]), g4 = 2; g4 < a1F; g4++) {
							var a1S = bO.a1R(gQ[a1P] - a1K[g4], gR[a1P] - a1L[g4]);
							a1S < g1 && (g1 = a1S, a1Q = g4)
						}
						var a1T = fj[iF];
						if (a1Q !== a1T) {
							if (2 === eT && 4 <= a1F) {
								var a1U = Math.max((a1Q + 1) % a1F, 1),
									a1V = bO.a1R(gQ[a1P] - a1K[a1U], gR[a1P] - a1L[a1U]);
								for (g4 = 1; g4 < a1F; g4++) a1S = bO.a1R(gQ[a1P] - a1K[g4], gR[a1P] - a1L[g4]), g1 < a1S && a1S < a1V && (a1V = a1S, a1U = g4);
								a1U !== a1T && bO.a1R(a1K[a1T] - a1K[a1U], a1L[a1T] - a1L[a1U]) < bO.a1R(a1K[a1T] - a1K[a1Q], a1L[a1T] - a1L[a1Q]) && (a1Q = a1U)
							}
							var a1W = lW[a1Q],
								a1X = a1N[a1W] + (aE.iB ? 0 : a1O[a1W]),
								lm = a1M[a1X],
								a1Y = gP[lm],
								a1Z = a1N[a1W + 1];
							g1 = bO.a1R(gQ[a1Y] - a1K[a1T], gR[a1Y] - a1L[a1T]);
							for (var ev = a1X + 1; ev < a1Z; ev++) {
								var a1a = a1M[ev],
									a1b = gP[a1a];
								(a1S = bO.a1R(gQ[a1b] - a1K[a1T], gR[a1b] - a1L[a1T])) < g1 && (g1 = a1S, lm = a1a)
							}
							lm < kP || oU <= lm || (a1Y = gP[lm], a1I[a1T] += gQ[a1Y] - gQ[a1P], a1J[a1T] += gR[a1Y] - gR[a1P], a1I[a1Q] += gQ[a1P] - gQ[a1Y], a1J[a1Q] += gR[a1P] - gR[a1Y], hE = data.teamPlayerCount[lW[a1T]], a1K[a1T] =
								bO.gC(a1I[a1T], hE), a1L[a1T] = bO.gC(a1J[a1T], hE), hE = data.teamPlayerCount[a1W], a1K[a1Q] = bO.gC(a1I[a1Q], hE), a1L[a1Q] = bO.gC(a1J[a1Q], hE), gP[iF] = a1Y, gP[lm] = a1P)
						}
					}! function() {
						for (var gP = bR.gP, jh = ah.jh, jj = ah.jj, ji = ah.ji, jk = ah.jk, hZ = ah.hZ, a1d = ah.a1d, hR = ah.hR, hS = ah.hS, gA = ah.gA, aC = 0; aC < 512; aC++) {
							var a1e = gP[aC];
							if (a1e !== aC) {
								a1f(jh, aC, a1e), a1f(jj, aC, a1e), a1f(ji, aC, a1e), a1f(jk, aC, a1e), a1f(hZ, aC, a1e), a1f(a1d, aC, a1e), a1f(hR, aC, a1e), a1f(hS, aC, a1e), a1f(gA, aC, a1e), a1g(aC), a1g(a1e), gP[aC] = aC;
								for (var k = a1e, hK = gP[k]; hK !== aC;) hK = gP[k = hK];
								gP[k] = a1e
							}
						}
					}()
			}
		}) : function() {
			var a19 = aE.a19;
			for (a13 = a19; a13 < aE.fi; a13++) a15();
			for (a13 = aE.iB ? aE.l9 : 0; a13 < a19; a13++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a1B = spawningData[2 * a13] + 1,
							spawningData = spawningData[2 * a13 + 1] + 1;
						if (3 < a1B && a1B < bV.fw - 5 && 3 < spawningData && spawningData < bV.fx - 5 && ad.fg(ad.a1h(a1B, spawningData)) && function(a1B, a1C) {
								var hJ, a1p, a1o;
								for (a1o = a1C; a1C - 6 < a1o; a1o--)
									for (a1p = a1B; a1B - 6 < a1p; a1p--)
										if (hJ = ad.a1h(a1p, a1o), ad.kK(hJ)) return;
								return 1
							}(a1B + 3, spawningData + 3)) return a1D(a1B + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a1A()) {
						for (var g5 = aE.a1E = a13; g5 < a19; g5++) a13 = g5, a15();
						return
					}
					var a1B = a10 + v8 * a0z + bO.gC(a0z, 2),
						a1C = a11 + v9 * a0z + bO.gC(a0z, 2);
					a1D(a1B, a1C)
				}
		})(), bg.nh[7] = ah.hZ[aE.fV]
	}, this.a1y = function(kI, a1z, a20) {
		var aC, a1B, a1C, hJ, v8, v9;
		for (a13 = kI, aC = 0; aC < 20; aC++)
			for (a1B = a1z + aC; a1z - aC <= a1B; a1B--)
				for (a1C = a20 + aC; a20 - aC <= a1C; a1C--)
					if ((a1B === a1z + aC || a1B === a1z - aC || a1C === a20 + aC || a1C === a20 - aC) && 3 < a1B && a1B < bV.fw - 5 && 3 < a1C && a1C < bV.fx - 5 && ad.fg(ad.a1h(a1B, a1C)) && function(a1B, a1C) {
							var hJ, a1p, a1o;
							for (a1o = a1C; a1C - 6 < a1o; a1o--)
								for (a1p = a1B; a1B - 6 < a1p; a1p--)
									if (hJ = ad.a1h(a1p, a1o), ad.kK(hJ) && !ad.a26(a13, hJ)) return;
							return 1
						}(a1B + 3, a1C + 3)) {
						if (0 < ah.hZ[a13]) {
							for (v9 = v8 = hJ = void 0, v8 = ah.ji[a13]; v8 >= ah.jh[a13]; v8--)
								for (v9 = ah.jk[a13]; v9 >= ah.jj[a13]; v9--) hJ = 4 * (v9 * bV.fw + v8), ad.a23(a13, hJ) && (ad.a24(hJ), ah.hZ[a13]--);
							a15()
						}
						return a1s(a1B - 1, a1C - 1), !0
					} return !1
	}, this.a25 = function(kI) {
		a13 = kI, a1A() ? a1D(a10 + v8 * a0z + bO.gC(a0z, 2), a11 + v9 * a0z + bO.gC(a0z, 2)) : a15()
	}
}

function a27() {
	au.a28(), zE.setTransform(j3, 0, 0, j3, 0, 0), zE.imageSmoothingEnabled = j3 < 3, zE.drawImage(bV.a29, aT.a2A(), aT.a2B()), bS.a2C.zD(), zE.drawImage(a2D, aT.a2A(), aT.a2B()), au.zD(), bQ.zD(), ag.zD(), (aE.oF ? (bk.zD(), bF) : (aO.zD(), aW.zD(),
		aS.zD(), bF.zD(), ax.zD(), aX.zD(), aT.zD(), aR.zD(), bk.zD(), aV.zD(), aQ.zD(), aN.zD(), aM.zD(), aY.zD(), bh.zD(), aw)).zD(), u.zD()
}

function a2E(p9, j, k) {
	p9.clearRect(0, 0, j, k), p9.fillStyle = bE.qQ, p9.fillRect(0, 0, j, k)
}

function a2F(p9, j, k, a2G) {
	p9.fillStyle = bE.qT, p9.fillRect(0, 0, j, a2G), p9.fillRect(0, 0, a2G, k), p9.fillRect(j - a2G, 0, a2G, k), p9.fillRect(0, k - a2G, j, a2G)
}

function a2H(p9, fs, fu, io, a2G, hJ, a2I) {
	p9.fillStyle = bE.qT;
	var hJ = Math.floor(io * hJ),
		vw = (hJ += (hJ - a2G) % 2, Math.floor((hJ - a2G) / 2)),
		io = Math.floor((io - hJ) / 2);
	p9.fillRect(fs + io, fu + io + vw, hJ, a2G), a2I && p9.fillRect(fs + io + vw, fu + io, a2G, hJ)
}

function a2K() {
	this.dv = function() {
		8 === aE.lR && aO.a2L()
	}, this.a2M = function(a2N) {
		var elo = aE.data.elo,
			kO = (elo[a2N] - elo[1 - a2N]) / 10,
			kO = 8 / (1 + Math.pow(2, kO / 32)),
			kO = Math.floor(10 * kO + .5),
			a2P = elo[a2N] + kO,
			a2Q = this.a2R(a2P),
			elo = this.a2R(elo[1 - a2N] - kO),
			kO = (0 === a2N ? aO.a2T(a2Q, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2T(elo, a2Q, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2P * bO.sqrt(a2P) >> 8),
			elo = ((1 + aE.a2W) * kO / 100).toFixed(2);
		a2N !== aE.fV || aE.hv ? aO.a2X(640, L(38, [ah.a2Y[a2N], elo]), 40, 0, bE.qT, bE.qQ, -1, !1) : aO.a2X(640, L(37, [elo]), 40, 0, bE.qT, bE.qQ, -1, !1)
	}, this.a2R = function(elo) {
		return 16e3 === (elo = bO.j0(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function co() {
	this.px = new a2Z, this.a2a = new a2b
}

function a2b() {
	this.ib = !1;
	this.a2f = [], this.a2g = 100;
	var oC, oD, gap, io, a2c, a2e, a2h = 0,
		a2i = new Array(9),
		a2j = [],
		a2k = [],
		a2l = 0,
		a2m = 0,
		a2n = 0,
		a2o = 0;

	function a30() {
		a2i.sort(function(g4, g5) {
			return g5.lE - g4.lE
		});
		for (var pb = "" + a2i[0].sL, aC = 1; aC < 9; aC++) pb += "," + a2i[aC].sL;
		for (aC = 0; aC < 9; aC++) pb += "," + a2i[aC].lE;
		bm.buffer.zj(120, pb)
	}
	this.dv = function() {
		for (var a2p = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2p.length; aC++) {
			var color = 6 === a2p[aC] ? bE.qt : bE.qR;
			this.a2f.push(bD.canvas.a2q(ac.get(3), a2p[aC], color))
		}
		for (aC = 0; aC < ak.px.a2r; aC++) a2k.push(ak.px.a2s - ak.px.a2r + aC);
		for (aC = 0; aC < ak.px.a2t; aC++) a2k.push(ak.px.a2u + aC);
		var a2v = ak.px.a2w(bN.a2v);
		for (aC = 0; aC < a2v.length; aC++) a2k.push(a2v[aC]);
		! function() {
			var aC, h = bm.buffer.data[120].value.split(",");
			if (18 !== h.length)
				for (aC = 0; aC < 9; aC++) a2i[aC] = {
					sL: 1015 + aC,
					lE: 0
				};
			else
				for (aC = 0; aC < 9; aC++) {
					var gD = parseInt(h[aC]),
						ev = (gD = 0 <= gD && gD < ak.px.a2s ? gD : 0, parseInt(h[aC + 9]));
					ev = 0 <= ev && ev < 1e3 ? ev : 0, a2i[aC] = {
						sL: gD,
						lE: ev
					}
				}
		}()
	}, this.show = function(mO, mP, a31) {
		var aC;
		if (a2l = mO, a2m = mP, a2h = a31 || 0, this.ib = !0, a2j = [], 0 === a2h)
			for (aC = 0; aC < 9; aC++) a2j.push(a2i[aC].sL);
		else {
			var g5 = 49 * a2h,
				a31 = g5 - 49;
			for (a31 >= a2k.length && (a2h = 1, a31 = 0, g5 = 49), aC = a31 = (g5 = Math.min(g5, a2k.length)) - 49; aC < g5; aC++) a2j.push(a2k[aC])
		}
		a2j.push(1024);
		a31 = a2j.length, io = Math.floor((a1.a2.j1() ? .075 : .0468) * i.j2), gap = Math.floor(io / 3), (a2n = 10 * (a2c = io + gap)) > i.j && (a2n = i.j, gap = (a2c = a2n / 10) - (io = 3 * a2c / 4)), a2e = bO.gC(a31, 10) + !!(a31 % 10), (a2o =
			a2e * a2c) > i.k && (a2o = i.k, gap = (a2c = a2o / a2e) - (io = 3 * a2c / 4)), a31 = .5 * gap;
		oC = Math.min(Math.max(mO - .5 * a2n + a31, a31), i.j - a2n + a31), oD = Math.min(Math.max(mP - .5 * a2o + a31, a31), i.k - a2o + a31)
	}, this.hz = function(mO, mP, player) {
		if (!this.ib) return !1;
		if (this.a33(mO, mP)) {
			mO = bO.j0(bO.gC(mO - oC + .5 * gap, a2c), 0, 9);
			if ((mO += 10 * bO.j0(bO.gC(mP - oD + .5 * gap, a2c), 0, 9)) >= a2j.length) return aM.ug(), !0;
			mP = a2j[mO];
			if (1024 === mP) return this.show(a2l, a2m, a2h + 1), !0;
			! function(sL) {
				for (var aC = 0; aC < 9; aC++) a2i[aC].lE = Math.floor(.99 * a2i[aC].lE);
				for (aC = 0; aC < 9; aC++)
					if (sL === a2i[aC].sL) return a2i[aC].lE = Math.min(a2i[aC].lE + 30, 999), a30();
				a2i.splice(5, 0, {
					sL: sL,
					lE: Math.max(a2i[4].lE, 30)
				}), a2i.pop(), a30()
			}(mP), player === aE.fV ? bB.iD.sK(mP) : bB.h7.sZ(mP, player)
		}
		return aM.ug(), !0
	}, this.a33 = function(mO, mP) {
		return !(mO < oC - .5 * gap || mP < oD - .5 * gap || oC + a2n - .5 * gap <= mO || oD + a2o - .5 * gap <= mP)
	}, this.zD = function() {
		zE.fillStyle = bE.qQ, zE.fillRect(oC - .5 * gap, oD - .5 * gap, a2n, a2o);
		for (var ij = .5 * bf.a34, fl = (zE.lineWidth = bf.a34, zE.strokeStyle = zE.fillStyle = bE.qT, zE.strokeRect(oC - .5 * gap + ij, oD - .5 * gap + ij, a2n - 2 * ij, a2o - 2 * ij), zE.imageSmoothingEnabled = !0, a2j.length), aC = 0; aC <
			fl; aC++) this.a35(a2j[aC], zE, oC + aC % 10 * a2c, oD + bO.gC(aC, 10) * a2c, io);
		zE.imageSmoothingEnabled = !1
	}, this.a35 = function(sL, iu, fs, fu, io) {
		var fP;
		sL >= 1024 - ak.px.a2r ? (fP = io / this.a2g, iu.setTransform(fP, 0, 0, fP, fs, fu), iu.drawImage(this.a2f[sL - 1024 + ak.px.a2r], 0, 0), iu.setTransform(1, 0, 0, 1, 0, 0)) : (bD.th.textAlign(iu, 1), bD.th.textBaseline(iu, 1), iu.font =
			bD.th.vG(0, .89 * io), iu.fillText(ak.px.a36(sL), fs + .5 * io, fu + (.35 - bD.th.a37 + .56) * io))
	}
}

function a2Z() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2r = 13, this.a2t = this.emojis.length, this.a2u = 676, this.a2s = 1024, this.a38 = this.emojis.indexOf("💀"), this.a39 = this.a38 + 1, this.a3A = this.emojis.indexOf("🥇"), this.a3B = this.emojis.indexOf("😊"), this.a36 = function(
		gD) {
		return gD < this.a2u ? String.fromCharCode(55356, 56806 + bO.gC(gD, 26), 55356, 56806 + gD % 26) : this.emojis[Math.min(gD - this.a2u, this.a2t - 1)]
	}, this.a2w = function(pb) {
		for (var fl = pb.length - 2, h = [], aC = 0; aC < fl; aC++) {
			var a3C = pb.charCodeAt(aC) - 56806,
				a3D = pb.charCodeAt(aC + 2) - 56806;
			0 <= a3C && a3C < 26 && 0 <= a3D && a3D < 26 && (h.push(26 * a3C + a3D), aC += 3)
		}
		return h
	}, this.a3E = function(gD) {
		return gD < this.a2u
	}, this.a3F = function(gD) {
		return gD >= 1024 - this.a2r
	}, this.a3G = function(gD) {
		return gD >= this.a2u && gD < this.a2u + this.a39
	}
}

function cC() {
	this.fC = new a3H, this.a0d = new a3I, this.a0f = new a3J, this.dv = function() {
		this.fC.dv()
	}
}

function a3I() {
	this.a0s = function(pb) {
		for (var fl = pb.length, j = bG, aC = 0; aC < fl; aC++) j.a9(16, pb.charCodeAt(aC))
	}
}

function a3H() {
	var a3K = new Uint8Array(64);
	this.dv = function() {
		var aC;
		for (a3K[0] = 45, a3K[37] = 95, aC = 0; aC < 10; aC++) a3K[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3K[aC + 11] = 65 + aC, a3K[aC + 38] = 97 + aC
	}, this.vt = function(a3L) {
		for (var a0i = bK, a0q = new Uint8Array(a3L), aC = 0; aC < a3L; aC++) a0q[aC] = a0i.sk(6);
		return a0q
	}, this.vs = function(a0q) {
		for (var fl = a0q.length, a3M = a3K, h = [], aC = 0; aC < fl; aC++) h.push(String.fromCharCode(a3M[a0q[aC]]));
		return h.join("")
	}, this.a3N = function(value, a3O) {
		for (var a3M = a3K, h = [], aC = 0; aC < a3O; aC++) h.push(String.fromCharCode(a3M[value >> 6 * (a3O - 1 - aC) & 63]));
		return h.join("")
	}
}

function cK() {
	var a3P, a3Q, a3R;
	a3P = [32, 65, 191, 913, 931], a3Q = [64, 127, 688, 930, 1155], a3R = new Array(a3P.length + 1);
	for (var aC = 0; aC < a3R.length; aC++) {
		a3R[aC] = 0;
		for (var g4 = aC - 1; 0 <= g4; g4--) a3R[aC] += a3Q[g4] - a3P[g4]
	}

	function a3X(ev) {
		for (var aC = a3P.length - 1; 0 <= aC; aC--)
			if (ev >= a3P[aC] && ev < a3Q[aC]) return aC;
		return -1
	}
	this.a0j = function(pb) {
		return 0 !== (pb = pb.trim()).indexOf("Bot ") && 0 !== pb.indexOf("[Bot] ") && function(pb, a3U, a3V) {
			var fl = (pb = pb.trim()).length;
			if (fl < a3U || a3V < fl) return !1;
			for (var ev, a3W = 0, aC = 0; aC < fl; aC++)
				if (ev = pb.charCodeAt(aC), a3W += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === a3X(ev)) return !1;
			if (3 < a3W && a3W > Math.floor(fl / 2)) return !1;
			return !0
		}(pb, 3, 20)
	}, this.a3Y = function(pb) {
		for (var fl = (pb = pb.trim()).length, h = [], aC = 0; aC < fl; aC++) {
			var ev, hJ = a3X(ev = pb.charCodeAt(aC));
			h.push(a3R[hJ] + ev - a3P[hJ])
		}
		return h
	}, this.a0u = function(h) {
		for (var ev, g5, pb = "", fl = h.length, aC = 0; aC < fl; aC++)
			for (g5 = 1; g5 < a3R.length; g5++)
				if (h[aC] < a3R[g5]) {
					ev = a3P[g5 - 1] + h[aC] - a3R[g5 - 1], pb += String.fromCharCode(ev);
					break
				} return pb
	}, this.a3Z = function(pb) {
		for (var h = this.a3Y(pb), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3a = function(pb) {
		for (var h = new Array(Math.floor(pb.length / 3)), aC = 0; aC < pb.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pb.substring(aC, aC + 3));
		return this.a0u(h)
	}, this.a3b = function(pb) {
		for (var gD, h = [pb.length], aC = 0; aC < pb.length; aC++) h[aC] = pb.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pb.length; aC++) aC === pb.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (gD = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(gD + (gD < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3c = function(pb) {
		for (var ev, result = "", aC = 0; aC < pb.length; aC++) 48 <= (ev = pb.charCodeAt(aC)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.a3d = function(pb) {
		for (var fl = pb.length, h = [], aC = 0; aC < fl; aC++)(ev = pb.charCodeAt(aC)) < 58 ? h.push(pb[aC]) : (ev -= ev < 91 ? 65 : 71, h.push(String(bO.gC(ev, 10))), h.push(String(ev - 10 * bO.gC(ev, 10))));
		var fl = h.length - 2,
			ev = 0,
			a0q = [];
		for (aC = 0; aC < fl; aC += 3) a0q[ev++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0q
	}, this.a3e = function() {
		for (var eT, a3f = "", aC = 0; aC < 6; aC++) eT = 48 + az.random() % 36, eT += 58 <= eT ? 39 : 0, a3f += String.fromCharCode(eT);
		return a3f
	}
}

function a3J() {
	this.a3Y = function(pb, a0v, a3g) {
		for (var a3h = [], fl = pb.length, max = 0, aC = 0; aC < fl; aC++) {
			var gD = pb.charCodeAt(aC);
			a3h.push(gD), max = Math.max(max, gD)
		}
		var a0w = max < 128 ? 7 : 16;
		for (a3g.a9(a0v, fl), a3g.a9(1, +(16 == a0w)), aC = 0; aC < fl; aC++) a3g.a9(a0w, a3h[aC])
	}
}

function dL() {
	this.a3i = new a3j, this.result = new a3k, this.a3l = new a3m, this.nM = new a3n, this.a3o = new a3p, this.a3q = new a3r, this.dv = function() {
		this.result.dv()
	}
}

function a3m() {
	this.a3s = function() {
		for (var fl = am.lf, xJ = am.lk, a3t = [], aC = 0; aC < fl; aC++) {
			var hJ = xJ[aC];
			bD.h7.a3u(hJ) && a3t.push(hJ)
		}
		return a3t
	}, this.a3v = function() {
		if (0 === bj.lW[aE.a3w]) return this.a3x();
		bk.lA(aE.a3w);
		for (var a3t = [], fl = bR.gG[0], gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = gP[aC];
			bD.h7.a3u(hJ) && a3t.push(hJ)
		}
		return a3t
	}, this.a3x = function() {
		var hJ = mk[0];
		return bD.h7.a3u(hJ) ? [hJ] : []
	}, this.a3y = function(a3t) {
		for (var fl = a3t.length, em = 0, hZ = ah.hZ, aC = 0; aC < fl; aC++) em += hZ[a3t[aC]];
		return em
	}
}

function a3j() {
	function a40(a47) {
		0 === aE.a46 && 2 !== aE.a48 && (aE.a46 = a47, ax.a49(), bU.a3o.a4A(), aY.show(1 === aE.a4B, !1, 2 === aE.a4B, !1, !0), bU.result.a4A(), bU.a3q.eq(), bU.nM.eq(), bU.nM.a4C(), aO.a4D(), aO.a4E(!0), aO.a4F(247), aW.nX(!0), aX.nX(!0), ax.nX(),
			bi.e2 = !0)
	}

	function a43(a4G) {
		2 !== aE.a48 && (aE.a48 = 2, aE.a4H = aE.a4I, aM.ug(), aS.a4J(), a4G && aY.a4K(bD.h7.hy(aE.fV)), bU.nM.a4L(a4G), aO.a4E(!0), aO.a4F(956), aO.a4F(957), aO.a4F(248), aW.nX(!0), aX.nX(!0), ax.nX(), bF.a4M(), aE.hu && a4G && bi.a4N.a4O(), bi
			.e2 = !0, be.a4P(), a1.a2.setState(0))
	}
	this.a3z = function() {
		a40(2)
	}, this.a41 = function() {
		a40(1)
	}, this.a42 = function() {
		a40(1), a43(!0)
	}, this.a44 = function() {
		a43(!1)
	}, this.a45 = function() {
		return 0 !== aE.a46
	}
}

function a3n() {
	var a4Q = 0;
	this.eq = function() {
		var a4Y;
		2 === aE.a46 ? aO.a4R(0, 59) : aE.lR < 7 ? (a4Y = bj.lW[aE.a3w], a4Y = bj.a4a[a4Y], aR.a4b(L(39, [a4Y]), 2, 1, 12), aO.a2X(0, L(40, [a4Y]), 40, 0, bE.qT, bE.qQ, -1, !1)) : 8 === aE.lR ? (aE.hv ? aO.a4R(aE.a4W, 3) : aE.a4B ? aO.a4R(aE.a4W,
			2) : aO.a4R(1 - aE.fV, 3), aE.a4X.a2M(aE.a4W)) : 9 === aE.lR ? aO.a4c() : aO.a4d(aE.a4W)
	}, this.a4L = function(a4G) {
		aE.il || 2 === aE.a46 && !a4G ? aI.oL(2700) : (a4G = a4G ? mk[0] : aE.a4W, aI.o7(a4G, 2700, !1, 0))
	}, this.a4C = function() {
		a4Q = 0, aE.hu || aE.lT || (a4Q = 54)
	}, this.nN = function() {
		var pb;
		0 !== a4Q && 0 === --a4Q && (pb = b1.z.a4f(), aE.lR < 7 ? pb += "/log/team" : 8 === aE.lR ? pb += "/log/1v1" : 9 === aE.lR ? pb += "/log/zombies" : pb += "/log/br", aO.a2X(720, pb, 736, 0, bE.qT, bE.qr, -1, !1), aE.a4g < 0 || (pb = b1.z
			.a4f() + "/log/?r=" + bI.fC.a3N(aE.a4g, 6), aO.a2X(1071, pb, 736, 0, bE.qT, bE.qr, -1, !1)))
	}
}

function a3r() {
	function a4r() {
		var wC;
		return 8 === aE.lR ? 0 : (wC = Math.floor(ah.a4s[aE.fV] / 50), (wC = Math.min(wC, 200)) / 100)
	}

	function a4i() {
		var wC = a4r();
		0 === wC || aE.hv || aO.a2X(440, L(41, [wC.toFixed(2)]), 40, 0, bE.ql, bE.qQ, -1, !1)
	}
	this.eq = function() {
		var a4j;
		0 === bU.result.a4h || 0 === bU.result.a3t.length || 8 === aE.lR ? bD.h7.hy(aE.fV) && a4i() : (function(a4j) {
			7 !== aE.lR && 10 !== aE.lR && 9 !== aE.lR || 0 !== aE.a4B && a4j && (9 === aE.lR ? aO.a2X(600, L(45, [100 * (1 + aE.a2W)]), 40, 0, bE.qT, bE.qQ, -1, !1) : aO.a2X(600, L(45, [a4j.toFixed(2)]), 40, 0, bE.qT, bE.qQ, -1, !1))
		}(a4j = function() {
			aO.a2X(520, L(42), 40, 0, bE.qT, bE.qQ, -1, !1);
			for (var a3t = bU.result.a3t, fl = a3t.length, hZ = ah.hZ, h = [], aC = 0; aC < fl; aC++) {
				var hJ = a3t[aC];
				h.push({
					hJ: hJ,
					em: hZ[hJ]
				})
			}
			h.sort((g4, g5) => g5.em - g4.em);
			var a4a = ah.a2Y,
				em = bU.result.a4t,
				wC = bU.result.a4h,
				pb = "",
				a4j = 0;
			for (aC = 0; aC < fl; aC++) {
				var iZ = h[aC].em * wC / (100 * em),
					a4v = a4a[h[aC].hJ] + ": " + iZ.toFixed(2) + "   ";
				h[aC].hJ !== aE.fV || aE.hv || (a4j = iZ, 9 === aE.lR && 0 !== aC && (a4j = 0)), 2 < aC && 4 !== fl ? 3 === aC && (pb += "(" + L(43, [fl - 3]) + ")") : pb += a4v
			}
			aO.a2X(560, bD.pf.a4w(pb), 40, 0, bE.ql, bE.qQ, -1, !1), a4j ? aO.a2X(580, L(44, [a4j.toFixed(2) + " + " + a4r().toFixed(2)]), 40, 0, bE.ql, bE.qQ, -1, !1) : bD.h7.hy(aE.fV) && a4i();
			return a4j
		}()), 2 === aE.a46 || 7 <= aE.lR || function(a4j) {
			var a3t = bU.result.a3t,
				fl = a3t.length,
				a4x = ah.a4x,
				hZ = ah.hZ,
				a4y = [];
			loop: for (var aC = 0; aC < fl; aC++) {
				var hJ = a3t[aC],
					a4z = bD.pf.pt(a4x[hJ]);
				if (null !== a4z) {
					for (var a50 = hZ[hJ], g5 = a4y.length - 1; 0 <= g5; g5--)
						if (a4z === a4y[g5].name) {
							a4y[g5].em += a50, a4y[g5].h.push({
								hJ: hJ,
								em: a50
							});
							continue loop
						} a4y.push({
						name: a4z,
						em: a50,
						h: [{
							hJ: hJ,
							em: a50
						}]
					})
				}
			}
			if (0 !== a4y.length) {
				a4y.sort((g4, g5) => g5.em - g4.em);
				var h = a4y[0].h,
					a51 = (h.sort((g4, g5) => g5.em - g4.em), "[" + a4y[0].name + "]"),
					a52 = 512 * bU.result.a4h / 26214400,
					m4 = (aO.a2X(0, L(46, [a51, a52.toFixed(4)]), 40, 0, bE.qT, bE.qQ, -1, !1), h.length),
					a0o = a4y[0].em,
					a53 = 1e4 * a52;
				for (aC = 0; aC < m4; aC++)
					if (h[aC].hJ === aE.fV && !aE.hv) {
						aO.a2X(600, L(47, [(a53 * h[aC].em / (10 * a0o)).toFixed(2)]), 40, 0, bE.qT, bE.qQ, -1, !1), aO.a2X(640, L(48, [(.2 * a4j).toFixed(2), a51]), 40, 0, bE.qT, bE.qQ, -1, !1);
						break
					}
			}
		}(a4j))
	}, this.a4n = function() {
		var a4o, a4p;
		aE.lT || bU.a3i.a45() || (a4o = ah, a4p = aE.fV, 0 === a4o.a4q[a4p]) || a4o.kD[a4p] < 1 || 2 * a4o.t1[a4p] > 3 * (a4o.kC[a4p] + a4o.kD[a4p]) || a4i()
	}
}

function a3k() {
	this.dv = function() {
		this.a54 = 0, this.a3t = [], this.a4t = 0, this.a4h = 0
	}, this.a4A = function() {
		var v0;
		aE.lT || (v0 = this, 2 === aE.a46 ? v0.a3t = bU.a3l.a3s() : aE.il ? v0.a3t = bU.a3l.a3v() : v0.a3t = bU.a3l.a3x(), v0.a54 = bl.a56.a57(), v0.a4t = Math.max(1, bU.a3l.a3y(v0.a3t)), bB.h7.si(), 8 === aE.lR ? bU.result.a4h = 0 : v0.a4h =
			100 * bU.result.a54 * (1 + aE.a2W))
	}
}

function a3p() {
	this.a4A = function() {
		if (2 === aE.a46) aE.a4B = 2;
		else {
			if (8 === aE.lR) bD.h7.kW(0) || 0 === ah.nl[0] ? aE.a4W = 1 : bD.h7.kW(1) || 0 === ah.nl[1] ? aE.a4W = 0 : aE.a4W = +(ah.hZ[1] > ah.hZ[0]);
			else {
				if (aE.il) {
					var lh = bk.a5A();
					if (aE.a3w = lh, bj.lW[lh]) return void(aE.a4B = +(bj.fj[aE.fV] === lh))
				}
				aE.a4W = mk[0]
			}
			aE.a4B = +(aE.a4W === aE.fV)
		}
	}
}

function dQ() {
	this.id = 0, this.eC = 0, this.zv = null, this.zw = null, this.zx = null, this.a03 = null, this.a2 = new a5B, this.dv = function() {
		var self, eC;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eC = Android.getVersion()) < 12 || (self.eC = eC, self.id = 1, self.zw = Android),
			function(self) {
				var eC;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zx = mwIOSdataX, self.a03 = window.webkit.messageHandlers.iosCommandA, eC = self
					.zx.version, self.eC = eC ? Number(eC) : 0)
			}(this),
			function(self) {
				var zv;
				try {
					if (!(zv = window.localStorage)) return;
					zv.setItem("tls7", "1"), zv.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zv = zv
			}(this)
	}
}

function a5B() {
	this.a5F = function() {
		bm.s0.a0K(), bm.s0.a0L(), b1.z.close(0, 3255), 0 === a1.id ? a1.zv && a1.zv.clear() : 1 === a1.id ? a1.zw.saveString(199, "") : 2 === a1.id && a1.a03.postMessage("clear")
	}, this.a5G = function() {
		2 === a1.id ? a1.a03.postMessage("showConsentForm") : 1 === a1.id && a1.zw.setState(7)
	}, this.a5H = function() {
		this.setState(14)
	}, this.j1 = function() {
		return 1 === bm.buffer.zk(2)
	}, this.a5I = function() {
		bm.buffer.zj(102, "")
	}, this.setState = function(a5J) {
		1 === a1.id && 5 <= a1.eC && a1.zw.setState(a5J)
	}, this.a3 = function() {
		var a5K;
		1 === a1.id && 7 <= a1.eC ? a1.zw.setState(5) : 2 === a1.id ? a1.a03.postMessage("reload 0") : ((a5K = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a5K.toString())
	}, this.eh = function() {
		0 !== a1.id && (1 === a1.id ? a1.zw.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eC ? a1.a03.postMessage("prepare ad 2904813909") : a1.a03.postMessage("loadAds 2904813909")))
	}, this.en = function(em) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eC && (a1.zw.presentAd(em), !0) : 2 === a1.id && 0 !== a1.eC && (a1.a03.postMessage("showAd"), !0))
	}, this.e4 = function() {
		2 === a1.id && a1.eC < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a5L + "' target='_blank'>" + bN
			.a5L + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.rA)]))
	}
}

function df() {
	function a5N(e) {
		mT(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>The client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use the client to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a5O()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qq)]))
	}

	function a5a(e) {
		mT(e), u.v(4, 5, new w(L(50), a5V(e), !0))
	}

	function a5V(e) {
		var pb = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pb : 4527 === e ? "Player already in lobby" + pb : 4577 === e ? "Your IP is banned." + pb : 4530 === e ? "Lobby Timeout" + pb : 4528 === e ?
			"Lobby Kick: Another login detected." + pb : 4540 === e ? "You have been kicked." + pb : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pb : 4555 === e ? "This Account is blocked." + pb :
			4580 === e ? "More Gold needed" + pb : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pb : 4591 === e ? "The algo determined you are a bot." + pb : 3290 === e ? "The map could not be loaded." + pb : "Unknown error" + pb
	}

	function mT(e) {
		a5Q(e), u.z.a0()
	}

	function a5Q(e) {
		4540 === e && b1.z.a5c(e);
		var a5J = ab.a5P();
		bx.close(), 6 === a5J ? b1.z.a5c(e) : bq.fI ? (u.y(), bq.yG(), b1.z.close(b1.z.fJ, 3256)) : 8 === a5J && aE.a5d(!0)
	}
	this.q = [], this.a5M = function(od, e) {
		if (console.log("socket close index " + od + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.a0F(0)) && (console.log("Reset to: " + data.pj), bm.s0.q6(105, data.pj), bm.s0.q6(106, data.password)), 8 === u.vq && 0 === od)
			if (4211 === e) a5N(e);
			else {
				if (bq.fI && (4495 === e || 4480 === e) && b1.z.fJ !== od) return void u.a5O();
				if (8 !== ab.a5P() && a5Q(), 4480 === e) return bm.s0.a0M(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a5T() && 10 === u.a5T().a5U && (data = u.a5T().a5U), u.v(4, data, new w(L(50), a5V(e), !0))
			}
		else {
			data = ab.a5P();
			if (6 === data) {
				if (4211 === e) return void a5N(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5W(od)
			} else if (bq.fI) {
				if (od !== b1.z.fJ) return
			} else {
				if (8 === data) return void(od !== b1.z.a5X || aE.lT || 1 !== aE.a48 || aE.hu || aO.a5Y(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mT(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a5O()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qq)]))
			} : a5a)(e)
		}
	}, this.a5b = function(e) {
		this.q.push(e), 8 === ab.a5P() ? aE.lT || 1 !== aE.a48 || aO.a5Y(L(51, [e])) : a5a(e)
	}, this.t = function() {
		this.q.push(3268), mT(3268)
	}
}

function dF() {
	var a5e, a5f, a5g = -15e3,
		a5h = !1;

	function hz(e) {
		a61() || (a5h = !0, a62(e, 1), b1.z.a63(b1.z.a5X), a64(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5q(e) {
		a5g = bi.el, a62(e, 1), b1.z.a63(b1.z.a5X), 0 < e.touches.length && (a5e = Math.floor(i.l * e.touches[0].clientX), a5f = Math.floor(i.l * e.touches[0].clientY), av.a5q(e) || a64(a5e, a5f))
	}

	function a64(fs, fu) {
		u.hz(fs, fu), 0 === aE.a48 ? ab.hz(fs, fu) : bF.a65(fs, fu) || bh.hz(fs, fu) || aY.hz(fs, fu) || aM.a66(fs, fu) || aQ.hz(fs, fu) || 0 <= aN.hz(fs, fu) || ax.hz(fs, fu) || bM.a67(fs, fu) || aM.a68(fs, fu)
	}

	function a5m(e) {
		a61() || (a5h = !0, a62(e, 1), a69(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5r(e) {
		a5g = bi.el, a62(e, 1), 0 < e.touches.length && (a5e = Math.floor(i.l * e.touches[0].clientX), a5f = Math.floor(i.l * e.touches[0].clientY), av.a5r(e) || a69(a5e, a5f))
	}

	function a69(fs, fu) {
		bM.uA() || (bM.hq = fs, bM.hr = fu), u.a5m(fs, fu), 0 === aE.a48 ? ab.a5m(fs, fu) : (bW.hs(fs, fu), bh.a5m(fs, fu) || (aN.a5m(fs, fu), aM.ib() ? aM.a5m(fs, fu) : aS.i0 ? aS.a5m(fs) && (bi.e2 = !0) : (aW.a5m(fs, fu), aT.oH && aT.a5m(fs, fu) &&
			(bi.e2 = !0))))
	}

	function a5o(e) {
		a61() || (a62(e, 1), a6A(), 0 === aE.a48 ? (ab.click(-1024, -1024), aU.reset()) : (aW.a6B(-1024, -1024), aN.a5m(-1024, -1024), aS.a6C(), aT.oH = !1))
	}

	function a5n(e) {
		a61() || (a62(e, 1), a6D(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5k && (bM.a5k = !1, e.preventDefault()))
	}

	function click(e) {
		a61() || a62(e, 1)
	}

	function a5s(e) {
		a5g = bi.el, a62(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a48 ? aT.oH = !1 : av.a6E() || (a6D(a5e, a5f, !1), bM.a5k && (bM.a5k = !1, e.preventDefault()))
	}

	function a5t(e) {
		a5g = bi.el, a62(e, 1), a6D(a5e, a5f, !1), bM.a5k && (bM.a5k = !1, e.preventDefault())
	}

	function a5u(e) {}

	function a5v(e) {}

	function a5w(e) {
		a61() || a62(e, 0)
	}

	function a6D(fs, fu, a6F) {
		a6A(), 0 === aE.a48 ? ab.click(fs, fu) : (aW.a6B(fs, fu), bh.a6B(), aS.a6C(), aT.oH = !1, aM.click(fs, fu, a6F) ? bi.e2 = !0 : aN.a5n(fs, fu))
	}

	function a6A() {
		u.a6A()
	}

	function a5p(e) {
		var fs, fu, deltaY;
		a61() || (a62(e, 1), b1.z.a63(b1.z.a5X), fs = Math.floor(i.l * e.clientX), fu = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5p(fs, fu, deltaY), 0 === aE.a48 ? ab.a5p(fs, fu, deltaY) : aW.a5p(fs, fu,
			deltaY) || (aS.a6G(fs, fu) ? aS.a5p(deltaY) && (bi.e2 = !0) : aT.a5p(fs, fu, deltaY)))
	}

	function a5x(e) {
		a62(e, 0)
	}

	function a62(e, id) {
		0 === id && u.ib() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a5P() && e.preventDefault()
	}

	function a5y(e) {
		if (!(0 < i.vX) && __fx.keybindHandler(e.key)) return;
		a61() || 0 < i.vX || (e = e.code) && e.length && (ba.ev(e, 18) ? at.a6I(3) : ba.ev(e, 22) ? at.a6I(0) : ba.ev(e, 20) ? at.a6I(1) : ba.ev(e, 24) ? at.a6I(2) : ba.ev(e, 10) ? aS.a6J(31 / 32) : ba.ev(e, 8) ? aS.a6J(32 / 31) : ba.ev(e, 6) ? aS
			.a6J(7 / 8) : ba.ev(e, 4) ? aS.a6J(8 / 7) : ba.ev(e, 14) ? 0 !== aE.a48 && aT.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ev(e, 16) ? 0 !== aE.a48 && aT.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ev(e, 0) ?
			aE.a48 && bW.ht(0) : ba.ev(e, 2) ? aE.a48 && bW.ht(1) : ba.ev(e, 30) ? aE.a48 && bW.ht(2) : ba.ev(e, 32) ? aE.a48 && bW.ht(3) : ba.ev(e, 26) ? aE.a48 && bW.iV() : ba.ev(e, 28) && aE.a48 && bW.ia())
	}

	function a5z(e) {
		if (!a61() && !(0 < i.vX || bi.el < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a6K(1) || "Space" === code && u.a6K(0))) return bq.fI ? bq.yR.a6K(code) ? void 0 : void("Escape" === code && bM.gE()) : void(8 !== ab.a5P() && ab.a6K(e) ? bi.e2 = !0 : "Escape" === code ?
				bM.gE() : ba.ev(code, 18) ? at.a6L(3) : ba.ev(code, 22) ? at.a6L(0) : ba.ev(code, 20) ? at.a6L(1) : ba.ev(code, 24) ? at.a6L(2) : ba.ev(code, 12) ? bF.a6M(!aE.oF) : "Space" === code && aE.a48 && (aN.hw && aN.a6N(), aE.hu) &&
				bF.a6O(!1))
		}
	}

	function a60() {
		"hidden" !== document.visibilityState && (bi.e2 = !0)
	}

	function a61() {
		return a5g + 15e3 > bi.el
	}

	function resize() {
		i.a6Q()
	}
	this.a5i = 0, this.a5j = "", this.a5k = !1, this.hq = 0, this.hr = 0, this.dv = function() {
		a5l.addEventListener("mousedown", hz, {
			passive: !1
		}), a5l.addEventListener("mousemove", a5m, {
			passive: !1
		}), a5l.addEventListener("mouseup", a5n, {
			passive: !1
		}), a5l.addEventListener("click", click, {
			passive: !1
		}), a5l.addEventListener("mouseleave", a5o, {
			passive: !1
		}), a5l.addEventListener("wheel", a5p, {
			passive: !1
		}), a5l.addEventListener("touchstart", a5q, {
			passive: !1
		}), a5l.addEventListener("touchmove", a5r, {
			passive: !1
		}), a5l.addEventListener("touchend", a5s, {
			passive: !1
		}), a5l.addEventListener("touchcancel", a5t, {
			passive: !1
		}), a5l.addEventListener("dragover", a5u), a5l.addEventListener("drop", a5v), a5l.addEventListener("dblclick", a5w), document.addEventListener("contextmenu", a5x), document.addEventListener("keydown", a5y), document.addEventListener(
			"keyup", a5z), document.addEventListener("visibilitychange", a60), window.addEventListener("resize", resize)
	}, this.a67 = function(fs, fu) {
		return !!bF.hz(fs, fu) || !!(aW.hz(fs, fu) || aT.hz(fs, fu) || aS.hz(fs, fu) || aO.hz(fs, fu))
	}, this.a6P = a61, this.uA = function() {
		return !a5h || 0 < a5g
	}, this.gE = function() {
		if (!u.ib()) return 8 === ab.a5P() ? aE.oF ? void bF.a6M(!1) : bh.ib ? void bh.a6N() : void aN.a6N() : void(7 !== ab.a5P() && 6 === ab.a5P() && aa.a6R());
		u.a6K(2)
	}
}

function c8() {
	this.th = new a6S, this.tp = new a6T, this.h7 = new a6U, this.pf = new a6V, this.p9 = new a6W, this.p8 = new a6X, this.canvas = new a6Y, this.color = new a6Z, this.a6a = new a6b, this.dv = function() {
		this.th.a0J()
	}
}

function a6T() {
	this.a6c = function(h) {
		h.fill(0)
	}, this.a6d = function(h) {
		for (var fl = h.length, aC = 0; aC < fl; aC++) h[aC] = []
	}, this.a6e = function(a3C, a6f) {
		for (var a3D = bR.gL, aC = 0; aC < 3; aC++) a3D[aC] = a6f * a3C[aC];
		return a3D
	}, this.a6g = function(a3C, a3D, a6h) {
		for (var kO = 0, aC = 0; aC < 3; aC++) kO += Math.abs(a3C[aC] - a3D[aC]);
		return a6h <= kO
	}, this.a6i = function(a3C, a6j) {
		for (var aC = 0; aC < 3; aC++) a3C[aC] = bO.j0(a3C[aC] + a6j, 0, 255);
		return a3C
	}, this.a6k = function(h, w8, w9) {
		w9 = w9 || h.length - 1;
		for (var a6l = 0, aC = w8 = w8 || 0; aC <= w9; aC++) a6l += h[aC];
		return a6l
	}, this.a6m = function(h, a6n) {
		for (var aC, a6o, fl = h.length, a6p = [], g4 = fl - 1; 0 <= g4; g4--) {
			for (aC = a6o = 0; aC < fl; aC++) a6n(h[aC]) < a6n(h[a6o]) && (a6o = aC);
			fl--, a6p.push(h[a6o]), h[a6o] = h[fl], h.pop()
		}
		return a6p
	}, this.min = function(h) {
		var aC, gD, fl = h.length;
		if (0 === fl) return 0;
		for (gD = h[0], aC = 1; aC < fl; aC++) gD = Math.min(gD, h[aC]);
		return gD
	}, this.max = function(h) {
		var fl = h.length;
		if (0 === fl) return 0;
		for (var gD = h[0], aC = 1; aC < fl; aC++) gD = Math.max(gD, h[aC]);
		return gD
	}, this.a6q = function(h, gD) {
		for (var fl = h.length, hE = 0, aC = 0; aC < fl; aC++) hE += h[aC] > gD;
		return hE
	}, this.a6r = function(a6s, a6t, min) {
		for (var fl = a6t[0], aC = fl - 1; 0 <= aC; aC--) a6s[aC] < min && (a6s[aC] = a6s[--fl]);
		a6t[0] = fl
	}, this.a6u = function(h, fl, value) {
		for (var aC = 0; aC < fl; aC++) h[aC] -= value
	}, this.a6v = function(h) {
		for (var fl = h.length, aC = 0; aC < fl; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6w = function(pb, h, a6x) {
		h.fill(0);
		for (var wC = pb.split(","), fl = Math.min(wC.length, h.length), aC = 0; aC < fl; aC++) h[aC] = Math.min(parseInt(wC[aC]), a6x)
	}, this.a6y = function(pb, h, maxLength) {
		h.fill("");
		for (var wC = pb.split('"'), fl = Math.min(wC.length, 2 * h.length), ij = 0, aC = 1; aC < fl; aC += 2) h[ij++] = wC[aC].slice(0, maxLength)
	}, this.a6z = function(h, hE) {
		if (0 === hE) h.fill(0);
		else {
			var a6l = this.a6k(h),
				fl = h.length;
			if (0 === a6l) h.fill(bO.gC(hE, fl));
			else
				for (var aC = 0; aC < fl; aC++) h[aC] = bO.gC(hE * h[aC], a6l);
			if (0 === (a6l = this.a6k(h))) h[1] = hE;
			else
				for (var ij = 0; a6l++ < hE;) h[ij = (ij + 1) % fl] && h[ij]++
		}
	}, this.a70 = function(h) {
		if (!h) return 0;
		var fl = h.length;
		if (0 === fl) return 0;
		for (var gD = h[fl - 1], aC = fl - 2; 0 <= aC; aC--)
			if (h[aC] !== gD) return aC + 2;
		return 1
	}, this.a71 = function(h) {
		for (var a6l = 0, aC = 0; aC < h.length; aC++) a6l += h[aC].length;
		return a6l
	}, this.a72 = function(a73) {
		for (var h = [], aC = 0; aC < a73.length; aC++) h = h.concat(a73[aC]);
		return h
	}, this.has = function(h, gD) {
		for (var fl = h.length, aC = 0; aC < fl; aC++)
			if (h[aC] === gD) return !0;
		return !1
	}
}

function a6Y() {
	this.a2q = function(a74, eU, a75) {
		var io = a74.height,
			a76 = bD.th.a77(io, io),
			iu = bD.th.getContext(a76);
		return function(j, iu, a75) {
			iu.fillStyle = a75, iu.beginPath(), iu.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), iu.fill()
		}(io, iu, a75), iu.drawImage(a74, -eU * io, 0), a76
	}, this.a79 = function(a7A) {
		var iu, ir, io = a7A.height;
		return a7A.width === io && (ir = (iu = bD.th.getContext(a7A, !0)).getImageData(0, 0, io, io), bD.p8.a7B(ir.data, io, io, .9), iu.putImageData(ir, 0, 0)), a7A
	}
}

function a6Z() {
	this.a7C = function(gD) {
		return [gD >> 12 & 63, gD >> 6 & 63, 63 & gD]
	}, this.a7D = function(gD) {
		for (var h = this.a7C(gD), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a7E = function(gD) {
		gD = this.a7D(gD);
		return bD.color.qL(gD[0], gD[1], gD[2])
	}, this.a7F = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qL = function(eT, wC, g5) {
		return "rgb(" + eT + "," + wC + "," + g5 + ")"
	}, this.qN = function(eT, wC, g5, g4) {
		return "rgba(" + eT + "," + wC + "," + g5 + "," + g4.toFixed(3) + ")"
	}, this.uC = function(ev) {
		for (var h = ev.split("(")[1].split(","), gK = bR.gK, aC = 0; aC < 3; aC++) gK[aC] = parseInt(h[aC]);
		return 4 === h.length ? gK[3] = 255 * parseFloat(h[3].slice(0, -1)) : gK[3] = 255, gK
	}, this.uD = function(a7G, fo) {
		for (var h = a7G.slice(a7G.indexOf("(") + 1, a7G.indexOf(")")).split(","), gK = bR.gK, aC = 0; aC < 3; aC++) gK[aC] = bO.j0(parseInt(h[aC].trim(), 10) + fo, 0, 255);
		return 3 === h.length ? this.qL(gK[0], gK[1], gK[2]) : (a7G = parseFloat(h[3].trim()), this.qN(gK[0], gK[1], gK[2], a7G = 0 === a7G ? .3 : a7G))
	}, this.yu = function(a7H, a7I) {
		for (var kO = 0, aC = 0; aC < 3; aC++) kO += Math.abs(a7I[aC] - a7H[aC]);
		if (!(240 <= kO))
			for (aC = 0; aC < 3; aC++) a7I[aC] = a7H[aC] + (a7H[aC] < 128 ? 80 : -80)
	}, this.a7J = function(h) {
		for (var pb = "#", aC = 0; aC < 3; aC++) {
			var eT = h[aC].toString(16);
			pb += 1 === eT.length ? "0" + eT : eT
		}
		return pb
	}, this.a7K = function(pb) {
		var eT, wC;
		return pb.length < 7 ? bE.qK : (eT = parseInt(pb.slice(1, 3), 16), wC = parseInt(pb.slice(3, 5), 16), pb = parseInt(pb.slice(5, 7), 16), this.qL(eT, wC, pb))
	}
}

function a6W() {
	this.a7L = function(pb, font, maxWidth) {
		if (font && (zE.font = font), zE.measureText(pb).width <= maxWidth) return pb;
		for (var aC = pb.length - 1; 1 <= aC; aC--)
			if (pb = pb.substring(0, aC), zE.measureText(pb + "...").width <= maxWidth) return pb + "...";
		return "..."
	}
}

function a6b() {
	var a7N = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7O = function(el) {
		var a7Q, pb = new Date(el.getTime() - 6e4 * el.getTimezoneOffset()).toUTCString();
		return pb.length < 12 || (pb = pb.substring(5, pb.length), 0 === (el = el.getTimezoneOffset())) ? pb : (a7Q = (el < 0 ? "+" : "-") + bO.gC(Math.abs(el), 60), 0 == (el = Math.abs(el) % 60) ? pb + a7Q : pb + a7Q + ":" + (el < 10 ? "0" :
			"") + el)
	}, this.a7R = function(el) {
		var pb = el.toUTCString();
		return pb.length < 12 ? pb : function(el) {
			return a7N[el.getUTCDay()]
		}(el) + ", " + pb.substring(5, pb.length - 4)
	}
}

function a6S() {
	var a7T = null,
		a7d = (this.a37 = 0, this.a0J = function() {
			var gD = bm.buffer.data[5].value;
			a7T = "px " + gD, "system-ui" !== gD && (a7T += ", system-ui"), this.a37 = im(32, 32, ["a", "b", "m"], 200, a7T)
		}, this.a77 = function(j, k) {
			var ev = document.createElement("canvas");
			return ev.width = j, ev.height = k, ev
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(p9, j, k) {
			return p9.getImageData(0, 0, j, k)
		}, this.vG = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7T : 1 === type ? "bold " + size + a7T : 2 === type ? "lighter " + size + a7T : 3 === type ? "italic " + size + a7T : 4 === type ? "oblique " + size + a7T : 5 === type ?
				"small-caps " + size + a7T : "small-caps bold " + size + a7T
		}, this.textAlign = function(iu, id) {
			iu.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(iu, id) {
			iu.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tr = function(e, code, color) {
			color = this.tq(bf.vR) + " solid " + (color || bE.qT);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.wE = function(e, fs, fu, j, k) {
			e = e.style;
			e.left = this.wF(fs), e.top = this.wF(fu), e.width = this.wF(j), e.height = this.wF(k)
		}, this.ti = function(gD) {
			return 1 + gD * a1.a2.j1()
		}, this.ui = function(oO, hK) {
			return oO * this.ti(void 0 === hK ? .5 : hK) * i.j2 / i.l
		}, this.wD = function(oO, hK) {
			return oO * this.ti(void 0 === hK ? .5 : hK) * i.j2
		}, this.vu = function(oO, hK, a7U) {
			return this.ti(hK) * Math.min(oO * i.j2, a7U * i.j) / i.l
		}, this.tq = function(gD) {
			return gD.toFixed(1) + "px"
		}, this.wF = function(gD) {
			return this.yg(gD).toFixed(1) + "px"
		}, this.yg = function(gD) {
			return gD / i.l
		}, this.a7W = function(a7X) {
			for (var pb = "<ul>", fl = a7X.length, aC = 0; aC < fl; aC++) pb += "<li>" + a7X[aC][0] + ": <a href='" + a7X[aC][1] + "' target='_blank'>" + a7X[aC][0] + "</a></li>";
			return pb += "</ul>"
		}, this.a7Y = function(a7Z) {
			return "<a href='" + a7Z + "' target='_blank'>" + a7Z + "</a>"
		}, this.a7a = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.ys = function(e) {
			var em = e.textContent;
			bD.pf.a7b(em, "✔") || (1 === em.length ? e.textContent = "✔" : e.textContent = em + " ✔", setTimeout(function() {
				e.textContent = em
			}, 500))
		}, this.measureText = function(pb) {
			return zE.measureText(pb).width
		}, this.w4 = function(a7c) {
			a7c.style.overflowX = "auto", a7c.style.overflowY = "hidden", a7c.style.whiteSpace = "nowrap", a7c.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.wH = this.scrollLeft, e.preventDefault())
			}), a7c.addEventListener("scroll", function() {
				this.wH = this.scrollLeft
			})
		}, -1e4);

	function a7g(a7f) {
		performance.now() - a7d < 600 || (a7d = performance.now(), a7f())
	}
	this.wt = function(e, a7e, a7f) {
		a7e && (e.onclick = function() {
			performance.now() - a7d < 600 || a7e()
		}), e.addEventListener("contextmenu", function(vC) {
			vC.preventDefault(), a7g(a7f)
		}), e.addEventListener("touchstart", function(vC) {
			2 === vC.touches.length && (vC.preventDefault(), a7g(a7f))
		}, {
			passive: !1
		})
	}
}

function a6U() {
	this.hx = function(a5J) {
		return 0 === a5J ? 1 === aE.a48 && aE.iB : 1 === a5J ? 1 === aE.a48 && !aE.iB : 2 === aE.a48
	}, this.hy = function(player) {
		return 0 !== ah.nl[player] && 2 !== ah.a7h[player]
	}, this.a7i = function(player) {
		return player === aE.fV && 2 !== ah.a7h[player]
	}, this.ln = function(player, kI) {
		return player !== kI && (0 === bj.fj[player] || bj.fj[player] !== bj.fj[kI])
	}, this.mu = function() {
		return am.lf < 2 ? 0 : aE.il ? 1 < bk.a7j() : ah.hZ[mk[1]]
	}, this.a7k = function() {
		var lf = am.lf;
		if (0 !== lf) {
			if (!aE.il) return !this.kW(mk[0]);
			for (var fj = bj.fj, lh = bk.li(), lk = am.lk, aC = lf - 1; 0 <= aC; aC--) {
				var hJ = lk[aC];
				if (fj[hJ] === lh && !this.kW(hJ)) return 1
			}
		}
		return 0
	}, this.a7l = function(player) {
		return player === aE.fV
	}, this.a7m = function(kI, oO) {
		return ah.hn[aE.fV] < oO * ah.hn[kI]
	}, this.kW = function(player) {
		return player >= aE.l9 || 2 === ah.a7h[player]
	}, this.m7 = function(player) {
		return 0 !== ah.nl[player]
	}, this.a3u = function(player) {
		return player < aE.l9
	}, this.sz = function(a7n, a7o) {
		return a7n !== a7o
	}, this.hA = function(player, gD) {
		var min;
		return gD = this.a7p(player, gD), ah.hn[player] += gD, ah.a7q[player] && (min = Math.min(ah.a7q[player], ah.hn[player]), ah.a7q[player] -= min, ah.hn[player] -= min), gD
	}, this.a7p = function(player, gD) {
		var tD = ah.hn[player];
		return gD = Math.min(gD, af.a7r(player) - tD), Math.max(gD, 0)
	}, this.nH = function(player, jR, a7s, a7t) {
		var tD = ah.hn[player],
			jR = bO.gC(tD * (jR + 1), 1024),
			a7s = bO.gC(a7s * tD, 1024),
			jR = Math.min(jR, tD - a7s);
		return jR = b5.a7u(player, jR), bR.gI[0] = jR, bR.gI[1] = a7s, a7t <= jR
	}, this.sT = function(player, s4, s3) {
		var player = ah.hn[player],
			tE = bO.gC(64 * player, 1024);
		return s4 = Math.min(s4, player - tE), s4 = this.a7p(s3, s4), bR.gI[0] = s4, bR.gI[1] = tE, 1 <= s4
	}, this.a7v = function(player, s4, s3) {
		var player = ah.hn[player],
			tE = bO.gC(64 * player, 1024);
		return s4 = Math.min(s4, player - tE), this.a7p(s3, s4)
	}, this.sV = function(s4, s3) {
		return s4 = this.a7p(s3, s4), bR.gI[0] = s4, bR.gI[1] = 0, 1 <= s4
	}, this.jQ = function(player, a7w) {
		return bO.gC(ah.hn[player] * (a7w + 1), 1024)
	}, this.a7x = function(player, a7s) {
		a7s = bO.gC(a7s * ah.hn[player], 1024);
		bR.gI[1] = a7s, ah.hn[player] -= a7s
	}, this.h8 = function(player, a7y) {
		var gW, gY, g5 = ah.hn[player];
		return a7y <= g5 ? ah.hn[player] -= a7y : (ah.hn[player] = 0, gY = ah.a7q[player] + (gW = 5 * ((g5 = a7y - g5) >> 2)), bg.hB(player, gW - g5, 12), gY <= aE.a7z ? ah.a7q[player] = gY : (ah.a7q[player] = aE.a7z, bg.hB(player, gY - aE.a7z,
			18))), a7y
	}, this.mL = function(player, jR) {
		var hn = ah.hn,
			tD = hn[player],
			jR = bO.gC(tD * (jR + 1), 1024),
			tE = Math.max(bO.gC(tD, 10), 1e3);
		return (jR = Math.min(jR, tD - tE)) < 0 ? (hn[player] = 0, tE = Math.min(1e3, tD + aE.a7z - ah.a7q[player]), bR.gI[1] = tE, ah.a7q[player] += tE - tD, 0) : (bR.gI[1] = tE, jR = b5.a7u(player, jR), hn[player] -= tE + jR, b5.a80(player,
			jR), jR)
	}, this.nJ = function(player) {
		var iY = bR.gI[0];
		ah.hn[player] -= iY + bR.gI[1], b5.a80(player, iY)
	}, this.t0 = function(player, kI) {
		return (kI = Math.min(kI, aE.fi)) < aE.fi && 0 === ah.nl[kI] && (kI = aE.fi), (bR.fh[0] = kI) === aE.fi || bw.fe(player, kI)
	}, this.t3 = function(player, s3) {
		return 0 !== ah.nl[s3] && !bw.fe(player, s3)
	}, this.a81 = function(player, a82) {
		for (var hJ, fl = am.lf, a83 = 0, a84 = mk, aC = 0; aC < fl; aC++)
			if (hJ = a84[aC], !this.kW(hJ)) {
				if (player === hJ) return !0;
				if (++a83 > a82) return !1
			} return !1
	}, this.mg = function(hJ) {
		var a85 = aE.il ? bk.lg() : ah.hZ[mk[0]];
		return a85 >= bO.gC(hJ * aE.kt, 100)
	}, this.a86 = function(gD, min, max) {
		return Math.floor(bO.j0(isNaN(gD) ? 0 : Number(gD), min, max))
	}
}

function a6X() {
	this.a87 = function(canvas, a88, a89) {
		var j = canvas.width,
			k = canvas.height,
			ev = bD.th.a77(j, k),
			iu = bD.th.getContext(ev, !0),
			canvas = (iu.drawImage(canvas, 0, 0), iu.getImageData(0, 0, j, k));
		return a88(canvas.data, j, k, a89), iu.putImageData(canvas, 0, 0), ev
	}, this.a8A = function(a2a, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2a[3 + aC] = a2a[aC], a2a[aC] = a2a[1 + aC] = a2a[2 + aC] = 255
			}
	}, this.a8B = function(a2a, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2a[1 + aC] > a2a[2 + aC] + 10 && (a2a[3 + aC] = a2a[aC], a2a[1 + aC] = a2a[2 + aC])
			}
	}, this.a8C = function(a2a, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var g4, gD, aC = 4 * (fs + fu * j);
				a2a[1 + aC] > a2a[2 + aC] + 10 && (gD = 0 < (g4 = 255 - a2a[1 + aC] + a2a[2 + aC]) ? Math.min(255, Math.round(255 * a2a[2 + aC] / g4)) : 0, a2a[aC] = a2a[1 + aC] = a2a[2 + aC] = gD, a2a[3 + aC] = g4)
			}
	}, this.a8D = function(a2a, j, k, a89) {
		for (var gap = Math.floor(Math.min(j, k) * a89), fs = 0; fs < j; fs++)
			for (var aC, fu = 0; fu < k; fu++)(fs < gap || fu < gap || j - gap <= fs || k - gap <= fu) && (a2a[3 + (aC = 4 * (fs + fu * j))] = 255 - 255 * (a2a[1 + aC] - a2a[aC]) / (255 - a2a[aC]))
	}, this.a8E = function(a2a, j, k, a89) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2a[aC] = a89[0], a2a[1 + aC] = a89[1], a2a[2 + aC] = a89[2]
			}
	}, this.a8F = function(a2a, j, k, a89) {
		for (var gap = Math.floor(j * a89), fs = 0; fs < j; fs++)
			for (var aC, fu = 0; fu < k; fu++)(fs < gap || fu < gap || j - gap <= fs || k - gap <= fu) && (a2a[aC = 4 * (fs + fu * j)] = a2a[1 + aC] = a2a[2 + aC] = 0)
	}, this.a8G = function(a2a, j, k) {
		for (var fu, aC, fs = j - 1; 0 <= fs; fs--)
			for (fu = k - 1; 0 <= fu; fu--) 200 < a2a[1 + (aC = 4 * (fs + fu * j))] && a2a[1 + aC] - 20 > a2a[aC] && a2a[1 + aC] - 20 > a2a[2 + aC] ? a2a[aC] + a2a[2 + aC] < 40 ? a2a[3 + aC] = 0 : (a2a[3 + aC] = a2a[aC], a2a[aC] = 255, a2a[1 +
				aC] = 255, a2a[2 + aC] = 255) : a2a[aC] < 50 && a2a[1 + aC] < 50 && a2a[2 + aC] < 50 && (a2a[aC] + a2a[1 + aC] + a2a[2 + aC] < 50 ? a2a[3 + aC] = 180 : a2a[3 + aC] = 180 + Math.floor(75 * (a2a[aC] + a2a[1 + aC] + a2a[2 + aC] -
				50) / 100))
	}, this.a8H = function(a2a, j, k) {
		for (var fu, aC, fs = j - 1; 0 <= fs; fs--)
			for (fu = k - 1; 0 <= fu; fu--) a2a[1 + (aC = 4 * (fs + fu * j))] > a2a[aC] + 20 && a2a[1 + aC] > a2a[2 + aC] + 20 && a2a[aC] + a2a[2] < 40 && (a2a[3 + aC] = 255 - a2a[1 + aC], a2a[aC] = a2a[1 + aC] = a2a[2 + aC] = a2a[aC])
	}, this.a7B = function(a2a, j, k, a89) {
		for (var eT = j >> 1, fs = 0; fs < j; fs++)
			for (var fu = 0; fu < k; fu++) Math.sqrt((fs - eT) * (fs - eT) + (fu - eT) * (fu - eT)) > a89 * eT && (a2a[4 * (fs + fu * j) + 3] = 0)
	}
}

function a6V() {
	var a8I = {
			":joy:": "😂",
			":rofl:": "🤣",
			":sob:": "😭",
			":sad": "😔",
			":eyes:": "👀",
			":skull:": "💀",
			":fire:": "🔥",
			":100:": "💯",
			":clown:": "🤡",
			":sunglasses:": "😎",
			":thinking:": "🤔",
			":zzz:": "😴",
			":rage:": "😡",
			":poop:": "💩",
			":thumbsup:": "👍",
			":thumbsdown:": "👎",
			":pray:": "🙏",
			":clap:": "👏",
			":trophy:": "🏆",
			":sparkles:": "✨",
			":heart:": "❤️",
			":brokenheart:": "💔",
			":laughing:": "😆",
			":grimacing:": "😬",
			":grinning:": "😀",
			":ok:": "👌",
			":pepehands:": "🙌",
			":gold:": "🧈"
		},
		a8J = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uf = function(ex) {
		return ex.replace(a8J, function(match) {
			return a8I[match] || match
		})
	}, this.a3N = function(gD) {
		var aC, a8K, a8L, a8M, a8N;
		if (gD < 0) return "-" + this.a3N(Math.abs(gD));
		if (gD < 1e3) return gD.toString();
		for (a8K = Math.floor(Math.log(gD + .5) / Math.log(10)) + 1, a8L = Math.floor((a8K - 1) / 3), a8N = (a8M = gD.toString()).substring(a8K - 3, a8K), aC = 1; aC < a8L; aC++) a8N = a8M.substring(a8K - 3 * (aC + 1), a8K - 3 * aC) + " " + a8N;
		return a8M.substring(0, a8K - 3 * a8L) + " " + a8N
	}, this.a8O = function(gD) {
		var a8P = ["K", "M", "B"],
			oO = 1e3;
		if (gD < 1e3) return gD.toString();
		for (var em, aC = 0; aC < 3; aC++) {
			if (gD < 10 * oO) return em = Math.floor(gD / (oO / 10)), Math.floor(em / 10) + "." + em % 10 + a8P[aC];
			if (gD < 1e3 * oO || 2 === aC) return Math.floor(gD / oO) + a8P[aC];
			oO *= 1e3
		}
		return ""
	}, this.a8Q = function(hJ, a8K) {
		return hJ.toFixed(a8K) + "%"
	}, this.a8R = function(gD, a8S) {
		return gD.toFixed(bO.j0(Math.floor((void 0 === a8S ? 3 : a8S) - Math.log10(Math.max(gD, 1))), 0, 8))
	}, this.a8T = function(gD, oO, a8K) {
		return (gD * oO).toFixed(a8K)
	}, this.pt = function(username) {
		var fp, fa = username.indexOf("[");
		return !(fa < 0) && 1 < (fp = username.indexOf("]")) - fa && fp - fa <= 8 ? username.substring(fa + 1, fp).toUpperCase().trim() : null
	}, this.a8U = function(pb) {
		for (var g4 = Math.floor(.5 * pb.length + .5), oU = Math.floor(.5 * (g4 - 1)), aC = 0; aC < oU; aC++)
			for (var g5 = -1; g5 < 2; g5 += 2) {
				var ev = g4 + g5 * aC;
				if (" " === pb[ev]) return [this.a4w(pb.substring(0, ev)), this.a8V(pb.substring(ev))]
			}
		return [pb.substring(0, g4), pb.substring(g4)]
	}, this.a8V = function(pb) {
		for (var fl = pb.length, aC = 0; aC < fl; aC++)
			if (" " !== pb[aC]) return pb.substring(aC);
		return pb
	}, this.a4w = function(pb) {
		for (var aC = pb.length - 1; 0 <= aC; aC--)
			if (" " !== pb[aC]) return pb.substring(0, aC + 1);
		return pb
	}, this.a8W = function(pb, a8X) {
		return pb.split("(")[0] + "(🧈 " + a8X.toFixed(2) + ")"
	}, this.startsWith = function(pb, a8Y) {
		return pb.substring(0, a8Y.length) === a8Y
	}, this.a7b = function(pb, a8Y) {
		var fl = pb.length;
		return pb.substring(fl - a8Y.length, fl) === a8Y
	}, this.a8Z = function(h, a8a, a8b) {
		var pb = "",
			fl = h.length - 1;
		a8b = a8b || "";
		for (var aC = 0; aC < fl; aC++) pb += a8b + h[aC] + a8b + ",", (aC + 1) % a8a == 0 && (pb += "\n");
		return pb += a8b + h[fl] + a8b
	}, this.a8c = function(pb, a3C, a3D) {
		return pb.replace(new RegExp(a3C, "g"), a3D)
	}
}

function a8d() {
	this.eu = function(player, fX) {
		aJ.a1y(player, bP.ft(fX), bP.fv(fX)) && (bi.e2 = !0), aE.lT && this.eq()
	}, this.eq = function() {
		aE.iB = !1;
		for (var aC = 0; aC < aE.l9; aC++) 0 !== ah.nl[aC] && 0 === ah.hZ[aC] && aJ.a25(aC);
		0 !== ah.nl[aE.fV] ? (bg.nh[7] = ah.hZ[aE.fV], bg.nh[8] = ah.hn[aE.fV], aS.a8e(), aX.a8f(), aE.hu || aE.hv || aI.o6(ah.jh[aE.fV] - 5, ah.jj[aE.fV] - 5, ah.ji[aE.fV] + 5, ah.jk[aE.fV] + 5), aw.dv()) : aY.show(!1, !1, !1, !0), aO.a8g(18),
			ag.a8h(), ag.nX(!0), bS.z.a8i(), aM.ug(), aE.sy = null, be.a8j = !0, be.a8k(), aE.lT && a1.a2.setState(1)
	}
}

function cA() {
	this.fi = 512, this.a8l = 15e8, this.a8m = 1e9, this.a7z = 5e4, this.a8n = 512, this.h5 = 2, this.fV = 0, this.l9 = 0, this.a4I = 0, this.lV = 0, this.a4H = 0, this.a19 = 512, this.a1E = 512, this.a8o = 150, this.lT = !0, this.hu = 0, this.hv =
		0, this.a48 = 0, this.kt = 0, this.oF = !1, this.iB = 0, this.a8p = 0, this.il = !1, this.a1G = 0, this.a1H = 0, this.lR = 0, this.a2W = 0, this.sy = null, this.a4X = new a2K, this.a8q = 30, this.a46 = 0, this.a4B = 0, this.a4W = 0, this
		.a3w = 0, this.data = new a8r, this.a8s = new a8t, this.a8u = 0, this.a8v = "", this.a4g = -1, this.a8w = function() {
			this.a4g = -1, bX.turnstile.close(), bR.dv(), bU.dv(), bu.clear(), this.a4I = this.l9 = this.data.humanCount, this.lT = 1 === this.a4I, this.oF = !1, this.hu = this.data.isReplay, this.hv = this.data.a8x, this.lR = 0 === this.data
				.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2W = this.data.isContest, this.il = this.lR < 7 || 9 === this.lR, this.lR = 10 === this.lR && this.lT ? 7 : this.lR,
				this.lR = 8 === this.lR && 2 !== this.l9 ? 7 : this.lR, b0.dv(), this.a1G = this.data.numberTeams, this.data.teamPlayerCount ? this.a1H = +(0 < this.data.teamPlayerCount[0]) : (this.a1H = 0, this.il && this.lT && (this.data
					.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1G + 1), aE.a8s.a8y())), this.a8q = this.l9 <= 2 ? 30 : this.l9 <= 50 ? 40 : 50, this.a8p = this.iB = this.data.selectableSpawn, this.sy = this.iB ?
				new a8d : null, 1 === m.e6 ? this.a19 = this.l9 : this.a19 = this.data.playerCount, this.a1E = this.a19, this.lV = this.a19 - this.l9, this.a4H = 0, this.fV = this.data.selectedPlayer, this.a46 = 0, this.a4B = 0, this.a4W = 0, this
				.a3w = 0, az.a8z(this.data.spawningSeed), af.dv(), ah.dv(), ao.dv(), aj.a90(), bB.ru.sm = [], bB.iD.rx = 1, bj.dv(), this.a48 = 1, bg.dv(), a91(), ad.dw(), aq.a92(), be.dv(), ad.dv(), au.dv(), bP.dv(), bQ.dv(), ap.dv(), bY.a93(), aF
				.dv(), aj.a8(), aJ.dv(), aK.dv(), am.a94(), bC.dv(), bk.dv(), bS.dv(), bh.dv(), a95.putImageData(a96, 0, 0), aW.dv(), aT.dv(), aS.dv(), bF.dv(), ax.dv(), aV.dv(), aX.dv(), aN.dv(), aR.dv(), aO.dv(), aQ.dv(), aM.dv(), aY.dv(), aG.dv(),
				aH.dv(), go(), ae.dv(), ag.dv(), b5.dv(), b6.dv(), b2.dv(), b8.dv(), b9.dv(), this.a4X.dv(), bi.a93(), aI.o5(), 0 === ah.nl[aE.fV] && aY.show(!1, !0), ag.nX(!0), aw.dv(), bi.e2 = !0, this.hu || this.lT && this.iB || a1.a2.setState(1),
				this.a8u = 0
		}, this.a5d = function(ek) {
			bC.sw.a98.length ? this.a8v = bC.sw.a98 : this.a8v = bC.a99.a3Y(), this.hu || __fx.replayHistory.save(this.a8v), b1.z.a9A(), bu.clear(), this.a48 = 0, bi.a9B(), a1.a2.setState(0), ab.setState(0), bX.ec.show(ek), 2 === this.a8u ? u.z.a9C(
				0) : 1 === this.a8u ? u.v(19) : u.v(5, 5)
		}, this.a9D = function() {
			return this.hu ? aN.hw || !bF.a9E : this.lT && (aN.hw || this.iB)
		}, this.a9F = function() {
			return 1 === this.a48 && !this.iB
		}
}

function a8r() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8x = 0, this.a9G = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a9H = null
}

function a8t() {
	this.a8y = function() {
		var a9I = aE.data;
		bD.tp.a6z(a9I.teamPlayerCount, a9I.playerCount), a9I.numberTeams = bD.tp.a6q(a9I.teamPlayerCount, 0), a9I.teamPlayerCount[0] && a9I.teamPlayerCount[7] && (a9I.teamPlayerCount[7] = 0, this.a8y())
	}, this.a9J = function() {
		var a9I = aE.data;
		a9I.mapType < 2 ? bV.a8(bV.a9K(a9I), a9I.mapSeed) : bV.a9L(a9I.canvas)
	}, this.a9M = function() {
		var a9I = aE.data;
		a9I.colorsData || (a9I.colorsData = new Uint32Array(1)), 0 === a9I.gameMode && (a9I.colorsData[0] = bm.z.a0H()), a9I.selectableName && (a9I.playerNamesData || (a9I.playerNamesData = new Array(1)), a9I.playerNamesData[0] = bm.buffer.data[
			122].value), a9I.a9H = new Uint32Array(1), a9I.a9H[0] = bJ.fC.fD(bm.buffer.data[105].value, 5)
	}, this.a9N = function() {
		aE.data = new a8r
	}
}

function dl() {
	var a9O = [];
	this.sW = function(player, s3, a9P, a9Q) {
		player === aE.fV || s3 === aE.fV || !a9Q && bD.h7.kW(player) || bD.h7.kW(s3) || this.a2X(ah.a2Y[player] + " supported " + ah.a2Y[s3] + " with " + bD.pf.a3N(a9P) + " ressource" + (1 === a9P ? "." : "s."))
	}, this.a2X = function(pb, sL) {
		pb = {
			el: aX.a9S(),
			pb: pb,
			sL: sL
		};
		a9O.push(pb), 30 === u.vq && u.a5T().a2X(pb)
	}, this.clear = function() {
		a9O = [];
		var wC = u.a9T(30);
		wC && wC.clear()
	}, this.a9U = function() {
		return a9O
	}
}

function de() {
	this.a34 = 0, this.gap = 0, this.vR = 0, this.tm = 0, this.dv = function() {
		this.resize()
	}, this.resize = function() {
		this.a34 = .0022 * bD.th.ti(.5) * i.j2, this.vR = this.a34 / i.l, this.gap = Math.max(Math.floor((a1.a2.j1() ? .0114 : .01296) * i.j2), 2), this.tm = this.gap / i.l
	}
}

function dd() {
	this.a9V = function() {
		return a1.a2.j1() ? 2 : 1
	}
}

function cL() {
	var pC, fs, fu, a9W, a9X, a9Y, el, a9Z, a9a, a9b, a9c, a9d, a9e, a9f, gap, zoom, sf, a9g;

	function a9v(mO, mP, fP) {
		ad.fg(fP) || -1 === (mO = bQ.ly.aA6(mO, mP)) ? aO.aA5(fP) : aO.aA7(mO)
	}

	function a9q(a9Z) {
		for (var aC = sf.length - 1; 0 <= aC; aC--)
			if (sf[aC] === a9Z) return 1
	}

	function a9o(a9l) {
		var aC, fl;
		if (-1 !== a9l)
			for (fl = pC.length, aC = 0; aC < fl; aC++)
				if (pC[aC].ib && pC[aC].fs + 1 === a9l % 4 && pC[aC].fu + 1 === a9l >> 2) return aC;
		return -1
	}

	function a9m(mO, mP) {
		var wC = gap / 2;
		return mO < fs - a9W - 3 * wC || fs + 3 * a9W + 5 * wC < mO || mP < fu - a9W - 3 * wC || fu + 2 * a9W + 3 * wC < mP ? -1 : 4 * (mP < fu - wC ? 0 : mP < fu + a9W + wC ? 1 : 2) + (mO < fs - wC ? 0 : mO < fs + a9W + wC ? 1 : mO < fs + 2 * a9W +
			3 * wC ? 2 : 3)
	}
	this.a9h = function() {
		var aC, g5, a9k = [bE.qt, bE.r9, bE.qR, bE.rb, bE.rM];
		for (pC = new Array(12), aC = 0; aC < 12; aC++) pC[aC] = {
			id: aC,
			ib: !1,
			m6: 0,
			canvas: [],
			fs: 0,
			fu: 0
		};
		for (pC[0].colors = [0, 1, 2, 3], pC[0].fs = 0, pC[0].fu = 0, pC[1].colors = [1, 4], pC[1].fs = 1, pC[1].fu = 0, pC[2].colors = [0, 1], pC[2].fs = -1, pC[2].fu = 0, pC[3].colors = [0], pC[3].fs = 0, pC[3].fu = 0, pC[4].colors = [0, 2],
			pC[4].fs = 1, pC[4].fu = 1, pC[5].colors = [3], pC[5].fs = 0, pC[5].fu = -1, pC[6].id = 20, pC[6].colors = [0], pC[6].fs = 1, pC[6].fu = -1, pC[7].id = 21, pC[7].colors = [0], pC[7].fs = 0, pC[7].fu = 1, pC[8].id = 16, pC[8]
			.colors = [0], pC[8].fs = 0, pC[8].fu = 0, pC[9].id = 10, pC[9].colors = [4], pC[9].fs = 2, pC[9].fu = 0, pC[10].id = 17, pC[10].colors = [4], pC[10].fs = 2, pC[10].fu = 0, pC[11].id = 18, pC[11].colors = [4], pC[11].fs = 1, pC[11]
			.fu = -1, aC = 0; aC < 12; aC++)
			for (g5 = 0; g5 < pC[aC].colors.length; g5++) pC[aC].canvas.push(function(id, a75) {
				if (id < 20) return bD.canvas.a2q(ac.get(3), id, a75);
				var a75 = ac.get(3).height,
					a76 = bD.th.a77(a75, a75),
					iu = bD.th.getContext(a76);
				20 === id ? iu.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a2a.a35(ak.px.a2u + ak.px.a3B, iu, 0, 0, a75);
				return a76
			}(pC[aC].id, a9k[pC[aC].colors[g5]]))
	}, this.a9j = function() {
		return pC
	}, this.dv = function() {
		sf = [], fs = fu = el = 0, a9X = a9Y = -1e3, this.resize()
	}, this.resize = function() {
		a9W = Math.floor((a1.a2.j1() ? .075 : .0468) * i.j2), zoom = a9W / ac.get(3).height, gap = Math.floor(a9W / 3)
	}, this.a66 = function(mO, mP) {
		return !!this.ib() && (bi.e2 = !0, !!ak.a2a.hz(mO, mP, a9a) || (mO = function(mO, mP) {
			a9Y = a9X = -1e3;
			var a9n = a9o(a9m(mO, mP));
			if (-1 === a9n) return 0;
			if (1 !== pC[a9n].colors[pC[a9n].m6])
				if (5 === a9n) {
					if (! function() {
							var em = performance.now();
							a9g + 4e3 < em && (sf = []);
							a9g = em
						}(), a9q(a9Z)) return 1;
					sf.push(a9Z), 16 < sf.length && sf.shift()
				} else if (6 === a9n) {
				for (var aC = sf.length - 1; 0 <= aC; aC--) 0 === ah.nl[sf[aC]] && sf.splice(aC, 1);
				0 < sf.length && (b6.a9r(1, sf, !0) && bB.h7.se(sf, a9Z), sf = [])
			} else if (2 === a9n) ao.iR(a9Z) && bB.iD.s2(aS.iH(), a9Z);
			else if (3 === a9n) aE.iB && bB.iD.iE(a9b);
			else if (0 === a9n)
				if (0 === pC[0].m6) {
					if (aE.a8p && aX.a9S() < 350) return 1;
					bY.a9s(4), bB.iD.iK(aS.iH(), a9Z)
				} else b2.iL(a9Z, aS.iH());
			else if (1 === a9n) bR.gN[6] = a9d, bB.iD.iP(aS.iH(), a9b);
			else if (10 === a9n) bR.gN[6] = a9f, bB.iD.iP(aS.iH(), a9e);
			else if (11 === a9n) bQ.iQ.iS(aS.iH());
			else if (9 === a9n) bB.iD.s8(aS.iH());
			else {
				if (7 === a9n) return bY.a9s(0), ak.a2a.show(mO, mP), 2;
				if (4 === a9n) b6.a9r(0, [a9Z], !0) && bB.h7.sb(a9Z);
				else {
					if (8 !== a9n) return 0;
					bB.iD.iG(aS.iH(), a9c, a9Z)
				}
			}
			return 1
		}(mO, mP), this.ug(), 2 === mO && (ak.a2a.ib = !0), 0 < mO))
	}, this.a68 = function(mO, mP) {
		this.ib() || (a9X = mO, a9Y = mP, el = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.i2(mouseX),
			coordY = bP.i4(mouseY),
			point = bP.fb(bP.g8(coordX, coordY));
		bP.i5(coordX, coordY) && a9v(mouseX, mouseY, point)
	}, this.click = function(mO, mP, a6F) {
		var i1 = bP.i2(mO),
			i3 = bP.i4(mP),
			fX = bP.g8(i1, i3),
			fP = bP.fb(fX),
			a9t = (a1.a2.j1() ? .025 : .0144) * i.j2,
			em = performance.now();
		return !(Math.abs(mO - a9X) > a9t || Math.abs(mP - a9Y) > a9t || el + 500 < em || (el = em, bM.uA() && (bM.hq = mO, bM.hr = mP, b8.eq(1), b9.eq(1)), !bP.i5(i1, i3))) && (!(aN.hw || this.ib() || !bQ.a9u.click(mO, mP, fX, a6F)) || (a6F ? (
			a9v(mO, mP, fP), !1) : aN.hw || this.ib() || !bD.h7.hy(aE.fV) || aE.hu || aE.hv ? (this.ug(), !1) : (aE.iB ? 0 <= (a9b = bv.iC(fX)) && (pC[3].ib = !0) : 2 === aE.a48 ? ad.hL(fP) && (a9Z = ad.fd(fP), bD.h7.kW(a9Z) || (pC[0]
			.ib = !0, pC[0].m6 = 1, pC[7].ib = !0)) : (function(fX, fP) {
			var player = aE.fV,
				aA3 = bQ.iN.iO(player, fX);
			aA3 && (a9e = bR.gN[7], a9f = bR.gN[6]);
			var fg = aA3;
			ad.iT(fP) && (fg = bQ.iN.iU(player, fX));
			fg && (a9b = bR.gN[7], a9d = bR.gN[6]);
			(aA3 || fg) && (pC[0].ib = !0, pC[0].m6 = 1, pC[1].ib = !0, pC[1].m6 = fg ? 1 : 0, pC[10].ib = aA3, pC[11].ib = bQ.iQ.iR(player, fX))
		}(fX, fP), ad.fq(fP) ? (a9c = an.fM.fO(fP)) && (a9t = bP.fb(a9c), pC[8].ib = !0, a9Z = ad.fc(a9t) ? aE.fi : ad.fd(a9t)) : (ad.a23(aE.fV, fP) && (a9a = aE.fV, pC[0].ib = !0, pC[0].m6 = 1, pC[7].ib = !0), -1 !== (em = bv
			.iI(fX)) && (ad.fc(em << 2) ? (a9Z = aE.fi, bw.iJ(aE.fV) ? (pC[0].ib = !0, pC[0].m6 = 0) : ae.gs(aE.fV) && (pC[0].ib = !0, pC[0].m6 = 3)) : (a9Z = ad.fd(em << 2), pC[0].m6 = 1, pC[5].ib = function(a9Z) {
			return !bD.h7.kW(a9Z) && !a9q(a9Z) && b6.a9r(1, [a9Z], !1)
		}(a9Z), pC[7].ib || bD.h7.kW(a9Z) || (a9a = a9Z, pC[7].ib = !0), pC[4].ib = !bD.h7.kW(a9Z) && !ag.aA0(a9Z) && b6.a9r(0, [a9Z], !1), pC[6].ib = function(a9Z) {
			if (0 === sf.length) return !1;
			if (performance.now() > a9g + 4e3) return !(sf = []);
			return !a9q(a9Z) && ! function(a9Z) {
				var aC;
				if (aE.il)
					for (aC = sf.length - 1; 0 <= aC; aC--)
						if (!bw.fe(a9Z, sf[aC])) return 1;
				return
			}(a9Z)
		}(a9Z), bw.fe(a9Z, aE.fV) ? (bw.iM(aE.fV, a9Z) ? (pC[0].m6 = 0, pC[0].ib = !0) : ae.gs(aE.fV) && (pC[0].m6 = 3, pC[0].ib = !0), pC[0].ib = this.aA2()) : (pC[2].ib = !0, ao.iR(a9Z) ? pC[2].m6 = 0 : pC[2]
			.m6 = 1, pC[0].ib = !0))))), this.a9w(mO, mP))))
	}, this.a9w = function(mO, mP) {
		return pC[11].fs = pC[6].ib ? 2 : 1, fs = mO - Math.floor(a9W / 2), fu = mP - Math.floor(a9W / 2), !!this.ib()
	}, this.a5m = function(mO, mP) {
		return !!this.ib() && (ak.a2a.ib ? !ak.a2a.a33(mO, mP) && (ak.a2a.ib = !1, bi.e2 = !0) : function(v0, mO, mP) {
			mO = a9m(mO, mP);
			if (0 <= a9o(mO)) return !1;
			if ((1 === mO || 6 === mO) && 0 <= a9o(2)) return !1;
			if ((6 === mO || 9 === mO) && 0 <= a9o(10)) return !1;
			return v0.ug(), bi.e2 = !0
		}(this, mO, mP))
	}, this.ug = function() {
		for (var aC = pC.length - 1; 0 <= aC; aC--) pC[aC].ib = !1, pC[aC].m6 = 0;
		ak.a2a.ib = !1
	}, this.ib = function() {
		return this.aA2() || ak.a2a.ib
	}, this.aA2 = function() {
		for (var fl = pC.length, aC = 0; aC < fl; aC++)
			if (pC[aC].ib) return !0;
		return !1
	}, this.zD = function() {
		if (this.ib())
			if (ak.a2a.ib) ak.a2a.zD();
			else {
				var aC, iu = zE,
					g5 = pC,
					fl = g5.length,
					aAB = (a9W + gap) / zoom;
				for (iu.imageSmoothingEnabled = !0, iu.setTransform(zoom, 0, 0, zoom, fs, fu), aC = 0; aC < fl; aC++) g5[aC].ib && zE.drawImage(g5[aC].canvas[g5[aC].m6], g5[aC].fs * aAB, g5[aC].fu * aAB);
				iu.imageSmoothingEnabled = !1, iu.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cM() {
	var k, canvas, aAC, aAD, aAE, aAF = -1;

	function aAG() {
		var aAH, p9 = canvas.getContext("2d", {
			alpha: !0
		});
		p9.clearRect(0, 0, k, k), p9.fillStyle = bE.qP, p9.fillRect(0, 0, k, k), 9 === aAD && (p9.fillStyle = bE.qU, p9.fillRect(0, 0, k, k)), p9.fillStyle = bE.qT, p9.fillRect(0, 0, k, 1), p9.fillRect(0, 0, 1, k), p9.fillRect(0, k - 1, k, 1), p9
			.fillRect(k - 1, 0, 1, k), aAH = .9 * k / ac.get(0).width, p9.imageSmoothingEnabled = !0, p9.setTransform(aAH, 0, 0, aAH, Math.floor((k - aAH * ac.get(0).width) / 2), Math.floor((k - aAH * ac.get(0).height) / 2)), p9.drawImage(ac.get(0),
				0, 0), p9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAK(mO, mP) {
		if (!aN.hw) return mO <= k + bf.gap && mP >= aS.fu ? 9 : -1;
		if (mO <= 4 * k + bf.gap) {
			if (mP >= aS.fu) return 0;
			if (mP >= aS.fu - k - aAE * bf.gap) return 2
		} else if (mO <= 7 * k + bf.gap && mP >= aS.fu - k - aAE * bf.gap) return 1;
		return -1
	}
	this.hw = !1, this.dv = function() {
		aAD = -1, this.hw = !1, aAE = a1.a2.j1() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, aAC = bD.th.vG(1, (a1.a2.j1() ? .5 : .45) * k), aAG()
	}, this.aAI = function() {
		return !(1 !== aE.a48 || aE.iB || (aE.hu ? !bF.a9E : this.hw && aE.lT))
	}, this.a6N = function() {
		this.hw = !this.hw, this.hw ? (bF.a6M(!1), aE.hu && bF.a9E && bF.a6O(!0), this.aAJ(), 9 === aAD && (aAD = 0)) : (aAD = -1, aAG(), !aE.lT || 1 !== aE.a48 || aE.iB || aE.hu || a1.a2.setState(1)), bi.e2 = !0
	}, this.aAJ = function() {
		(aE.lT || aE.hu) && 1 === aE.a48 && (aW.nX(!0), aE.iB || setTimeout(function() {
			be.a4P()
		}, 0), a1.a2.setState(0))
	}, this.hz = function(mO, mP) {
		return 0 <= (aAF = aAK(mO, mP)) || !aN.hw || aE.lT || aE.hu || bh.ib || aN.a6N(), aAF
	}, this.a5m = function(mO, mP) {
		mO = aAK(mO, mP);
		mO !== aAD && (aAD = mO, this.hw || aAG(), bi.e2 = !0)
	}, this.a5n = function(mO, mP) {
		mO = aAK(mO, mP);
		return -1 !== mO && aAF === mO && (this.hw ? aE.oF ? (0 <= mO && bF.a6M(!1), !aE.hu) : (0 === mO ? aE.a5d() : 1 === mO ? this.a6N() : 2 === mO && u.v(1, 0), !0) : 9 === mO && (this.a6N(), !0))
	}, this.zD = function() {
		var j;
		this.hw ? (j = Math.floor(5.5 * k), zE.setTransform(1, 0, 0, 1, bf.gap, aS.fu), zE.fillStyle = bE.qP, zE.fillRect(0, 0, j, k), 0 === aAD ? (zE.fillStyle = bE.qU, zE.fillRect(0, 0, 4 * k, k)) : 1 === aAD && (zE.fillStyle = bE.qU, zE
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), zE.fillStyle = bE.qT, zE.fillRect(0, 0, j, 1), zE.fillRect(0, 0, 1, k), zE.fillRect(4 * k, 0, 1, k), zE.fillRect(0, k - 1, j, 1), zE.fillRect(j - 1, 0, 1, k), zE.font = aAC, bD.th
			.textBaseline(zE, 1), bD.th.textAlign(zE, 1), zE.fillText(L(54), 2 * k, .54 * k), j = .4 * k, aN.aAO(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fu + .3 * k, j), j = 1, zE.setTransform(1, 0, 0, 1, bf.gap, aS.fu - j * aAE * bf.gap - j *
				k), zE.fillStyle = bE.qP, zE.fillRect(0, 0, 4 * k, k), aAD === j + 1 && (zE.fillStyle = bE.qU, zE.fillRect(0, 0, 4 * k, k)), zE.fillStyle = bE.qT, zE.fillRect(0, 0, 4 * k, 1), zE.fillRect(0, 0, 1, k), zE.fillRect(4 * k, 0, 1,
				k), zE.fillRect(0, k - 1, 4 * k, 1), zE.fillText(L(0 === j ? 54 : 55), 2 * k, .54 * k), zE.setTransform(1, 0, 0, 1, 0, 0)) : zE.drawImage(canvas, bf.gap, aS.fu)
	}, this.tK = function(player) {
		return 0 !== ah.nl[player] && 2 !== aE.a48 && !bD.h7.kW(player)
	}, this.aAO = function(fs, fu, fl) {
		zE.setTransform(1, 0, 0, 1, fs, fu), zE.lineWidth = bf.a34, zE.strokeStyle = bE.qT, zE.beginPath(), zE.moveTo(0, 0), zE.lineTo(fl, fl), zE.moveTo(0, fl), zE.lineTo(fl, 0), zE.stroke()
	}
}

function cN() {
	var aAQ, k, aAR, aAS, aAT, aAU, aAV, aAW, aAX;

	function a2B() {
		return aS.aAq(aO.aAm()) ? ax.ib ? __fx.settings.keybindButtons ? aS.fu - 2 * aS.k - 3 * aAR : aS.fu - aS.k - 2 * aAR : __fx.settings.keybindButtons ? aS.fu - aS.k - 2 * aAR : aS.fu - aAR : bF.aAq(aO.aAp()) ? ax.ib ? bF.a2B() - aS.k - 2 *
			aAR : bF.a2B() - aAR : ax.ib ? i.k - aS.k - (bn.a9V() + 1) * aAR : i.k - bn.a9V() * bf.gap
	}

	function aAc(em, pb, id, hJ, aAg, aAh, lm, aAi, aAj, aAk, aAv) {
		var aC, p9, a76, qA, aAw = void 0 !== aAj,
			j = Math.floor(aR.measureText(pb, aO.aAC) + 1.5 * aAS + (aAw ? k : 1.5 * aAS));
		if (bi.e2 = !0, aAv || bu.a2X(pb, aAj), j + 2 * aAR + aS.k > i.j && !aAw && 50 !== id && 20 < pb.length) aAc(em, (aAv = bD.pf.a8U(pb))[0], id, hJ, aAg, aAh, lm, aAi, aAj, aAk, !0), aAc(em, aAv[1], id, hJ, aAg, aAh, lm, aAi, aAj, aAk, !0);
		else if (aAv = j + (50 === id ? aAT : 0), (a76 = document.createElement("canvas")).width = j, a76.height = k, (p9 = a76.getContext("2d", {
				alpha: !0
			})).font = aO.aAC, bD.th.textBaseline(p9, 1), bD.th.textAlign(p9, 0), p9.clearRect(0, 0, j, k), p9.fillStyle = aAh, p9.fillRect(0, 0, j, k), p9.fillStyle = aAg, p9.fillText(pb, Math.floor(1.5 * aAS), Math.floor(k / 2)), aAw && (p9
				.imageSmoothingEnabled = !0, ak.a2a.a35(aAj, p9, j - k, 0, k)), 0 === (qA = {
				el: em,
				pb: pb,
				id: id,
				player: hJ,
				canvas: a76,
				aAg: aAg,
				aAh: aAh,
				j: j,
				aAn: aAv,
				lm: lm,
				aAi: aAi,
				aAj: aAj,
				aAk: aAk
			}).el || 0 < aAQ.length && 0 < aAQ[0].el) aAQ.unshift(qA);
		else {
			for (aC = 1; aC < aAQ.length; aC++)
				if (0 < aAQ[aC].el) return void aAQ.splice(aC, 0, qA);
			aAQ.push(qA)
		}
	}

	function aAd(eT, wC, g5) {
		return "rgb(" + eT + "," + wC + "," + g5 + ")"
	}

	function aAx(id, hE) {
		for (var fl = aAQ.length, aC = 0; aC < fl; aC++) aAQ[aC].id === id && hE-- <= 0 && (aAQ.splice(aC, 1), aC--, fl--)
	}

	function aAy(id, player) {
		for (var fz = !1, aC = aAQ.length - 1; 0 <= aC; aC--) aAQ[aC].id !== id || player !== aE.fi && aAQ[aC].player !== player || (aAQ.splice(aC, 1), fz = !0);
		return fz
	}

	function aBO(pb) {
		aAc(340, pb, 6, 0, aAd(215, 245, 255), bE.qQ, -1, !1)
	}
	this.aAY = "", this.dv = function() {
		var self;
		aAW = 0, aAV = a1.a2.j1() ? 7 : 12, aAU = {
				xJ: [0, 0, 0],
				aAZ: [0, 0, 0],
				o3: [220, 180, 180],
				zC: [0, 0, 0],
				ev: [0, 0, 0]
			}, aAQ = [], this.resize(), aE.iB && this.a4R(0, 18), bV.xa.aBN[bV.fR].name.length && aBO(L(101, [bV.xa.aBN[bV.fR].name])), bV.xa.aBN[bV.fR].aBP && aBO(L(102, [bV.xa.aBN[bV.fR].aBP])), aBO(L(103, [bV.fw - 2 + "x" + (bV.fx - 2)])),
			aBO(L(104, [bD.pf.a3N(aq.aBQ)])), aq.aBQ !== aq.aBR && aBO(L(105, [bD.pf.a3N(aq.aBR) + " (" + bD.pf.a8Q(100 * aq.aBR / aq.aBQ, 1) + ")"])), 0 < aq.aBS && aBO(L(80, [bD.pf.a3N(aq.aBS) + " (" + bD.pf.a8Q(100 * aq.aBS / aq.aBQ, 1) +
				")"])), 0 < aq.aBT && aBO(L(106, [bD.pf.a3N(aq.aBT) + " (" + bD.pf.a8Q(100 * aq.aBT / aq.aBQ, 1) + ")"])), 10 === aE.lR && aAc(120, L(107), 6, 0, aAd(235, 255, 120), bE.qQ, -1, !1), 0 !== (self = this).aAY.length && (aAc(200, self
				.aAY, 0, 0, bE.qT, bE.qQ, -1, !1), self.aAY = ""), aE.a2W && aAc(340, L(56), 6, 0, aAd(255, 200, 0), bE.qQ, -1, !1), (self = aE.data.a9G) && aAc(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qT, bE.qQ, -1, !1)
	}, this.resize = function() {
		var aAf, aC;
		if (k = (k = Math.floor((a1.a2.j1() ? .031 : .0249) * i.j2)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.aAC = bD.th.vG(1, this.fontSize), aAR = bf.gap, aAS = Math.floor(k / 5), 0 < aAQ.length)
			for (aAf = aAQ, aAQ = [], aC = aAf.length - 1; 0 <= aC; aC--) aAc(aAf[aC].el, aAf[aC].pb, aAf[aC].id, aAf[aC].player, aAf[aC].aAg, aAf[aC].aAh, aAf[aC].lm, aAf[aC].aAi, aAf[aC].aAj, aAf[aC].aAk, !0);
		this.aAl()
	}, this.aAl = function() {
		aAX = document.createElement("canvas");
		var pb = L(57),
			p9 = (aAT = aR.measureText(pb, this.aAC) + 5 * aAS, aAX.height = k, aAX.width = aAT, aAX.getContext("2d", {
				alpha: !0
			}));
		p9.font = this.aAC, bD.th.textBaseline(p9, 1), bD.th.textAlign(p9, 1), p9.clearRect(0, 0, aAT, k), p9.fillStyle = bE.qq, p9.fillRect(0, 0, aAT, k), p9.fillStyle = bE.qT, p9.fillText(pb, Math.floor(aAT / 2), Math.floor(k / 2))
	}, this.aAm = function() {
		var fl;
		return ax.ib ? ax.j : 0 === (fl = aAQ.length) ? 0 : 1 === fl ? aAQ[0].aAn : aAo(aAQ[0].aAn, aAQ[1].aAn)
	}, this.aAp = function() {
		var fl = aAQ.length;
		return ax.ib ? fl ? aAo(ax.j, aAQ[0].aAn) : ax.j : 0 === fl ? 0 : 1 === fl ? aAQ[0].aAn : 2 === fl ? aAo(aAQ[0].aAn, aAQ[1].aAn) : aAo(aAo(aAQ[0].aAn, aAQ[1].aAn), aAQ[2].aAn)
	}, this.hz = function(fs, fu) {
		for (var oC, aAr, aAs = a2B(), aC = aAQ.length - 1; 0 <= aC; aC--)
			if ((aAr = aAs - (aC + 1) * k) <= fu && fu < aAr + k) return 50 === aAQ[aC].id ? fs >= i.j - aAT - aAR - aAQ[aC].j && (fs >= i.j - aAT - aAR ? bB.h7.sb(aAQ[aC].player) : aI.o7(aAQ[aC].player, 800, !1, 0), !0) : fs >= i.j - aAQ[aC].j -
				aAR && (736 === aAQ[aC].id ? (aAr = "https://" + aAQ[aC].pb, window.open(aAr, "_blank"), aT.oH = !1) : aAQ[aC].aAi && (aAQ[aC].aAk && aAQ[aC].aAk.g4 ? (aAr = aAQ[aC].aAk.fX, oC = bP.ft(aAr) - 10, aAr = bP.fv(aAr) - 10, aI.o6(
					oC, aAr, 19 + oC, 19 + aAr)) : aAQ[aC].aAk && aAQ[aC].aAk.g5 ? aI.o8(aAQ[aC].player, aAQ[aC].aAk.o9) : (aI.o7(aAQ[aC].player, 800, !1, 0), 0 <= aAQ[aC].lm && (oC = aAQ[aC].lm, aAQ[aC].lm = aAQ[aC].player, aAQ[aC]
					.player = oC))), !0);
		return !1
	}, this.a2X = function(em, pb, id, hJ, aAg, aAh, lm, aAi, aAj, aAk) {
		aAc(em, pb, id, hJ, aAg, aAh, lm, aAi, aAj, aAk)
	}, this.aAu = function(s) {
		aAc(300, s, 252, 0, bE.qT, bE.qQ, -1, !1)
	}, this.a8g = function(id) {
		for (var aC = aAQ.length - 1; 0 <= aC; aC--) aAQ[aC].id === id && (aAQ[aC].el = 1)
	}, this.a4R = function(player, id) {
		0 === id ? (aR.eu(player, 0), aAx(423, 2), aAc(160, L(60, [ah.a2Y[player]]), 423, player, "rgb(10,220,10)", bE.qQ, -1, !1)) : 1 === id ? (aAy(50, aE.fi), aR.eu(player, 1), aAc(360, L(61, [ah.a2Y[player]]), 0, player, bE.rB, bE.qQ, -1, !
				0), aI.o7(player, 2700, !1, 0)) : 2 === id ? (aR.eu(player, 2), aAc(0, L(62), 0, player, "rgb(10,255,255)", bE.qQ, -1, !0), aI.o7(player, 2700, !1, 0)) : 3 === id ? (aR.eu(player, 2), aAc(0, L(63, [ah.a2Y[player]]), 0, player, bE
				.qT, bE.qQ, -1, !0), aI.o7(player, 2700, !1, 0)) : 4 === id ? this.aAz(1, player, player) : 5 === id ? bD.h7.kW(aE.fV) || (function(id, ng) {
				var aC, aBC = 0,
					fl = aAQ.length;
				for (aC = 0; aC < fl; aC++)
					if (aAQ[aC].id === id && ng <= ++aBC) return aAQ.splice(aC, 1)
			}(1, 5), ag.aB1(player) && aAc(180, L(64, [ah.a2Y[player]]), 1, player, aAd(255, 200, 180), bE.qQ, -1, !0), bD.h7.a7m(player, 10) && (aAx(573, 0), aAc(180, L(65, [ah.a2Y[player]]), 573, player, bE.rB, bE.qQ, -1, !0))) : 18 === id ?
			aAc(255, L(66), 18, 0, bE.qT, bE.qQ, -1, !1) : 21 === id ? aAc(220, L(67), id, 0, bE.qT, bE.qQ, -1, !1) : 22 === id ? this.aAz(2, player, player) : 59 === id && aAc(0, L(68), id, 0, bE.ra, bE.qQ, 0, !1)
	}, this.a5Y = function(s) {
		aAc(200, L(69, [s]), 94, 0, bE.qT, bE.r7, -1, !1)
	}, this.a4d = function(aB2) {
		if (aE.fV === aB2 && !aE.lT && !aE.hu && !aE.hv)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAc(0, "Your Win Count is now " + __fx.wins.count, 3, aB2, bE.qT, bE.qQ, -1, !0);
		ah.hZ[aB2] && (aR.eu(aB2, 2), aE.l9 < 100 ? aAc(0, L(63, [ah.a2Y[aB2]]), 3, aB2, bE.qT, bE.qQ, -1, !0) : aAc(0, L(70, [ah.a2Y[aB2]]), 3, aB2, bE.qT, bE.qQ, -1, !0))
	}, this.aA5 = function(fP) {
		var pb, aB5, aB3 = "(" + bP.ft(fP >> 2) + ", " + bP.fv(fP >> 2) + ")",
			aAi = !1,
			player = 0;
		ad.fg(fP) ? ad.fc(fP) ? aB3 = L(71, [aB3]) : (player = ad.fd(fP), (aE.hu || aE.hv) && !1 === __fx.hoveringTooltip.active && player !== aE.fV && (aE.fV = player, bg.aB4()), pb = L(72, [bD.p9.a7L(ah.a4x[player], bD.th.vG(0, 10), 150)]) +
			"   ", pb = (pb += L(73, [bD.pf.a3N(ah.hn[player])]) + "   ") + L(74, [bD.pf.a3N(ah.hZ[player])]) + "   ", aE.il && (aB5 = bj.a4a[bj.lW[bj.fj[player]]], pb += L(75) + ": " + aB5 + "   "), bD.h7.kW(player) && (pb += L(76) + ": " +
				aF.lK[aF.iY[player]] + "   "), aB3 = pb = (pb += L(77, [player]) + "   ") + L(78, [aB3]), aAi = !0) : aB3 = ad.fq(fP) ? L(79, [aB3]) + "   #" + ad.fT(fP) : L(80, [aB3]), aAx(55, 0), aAc(220, aB3, 55, player, bE.qT, bE.qQ, -1,
			aAi, void 0, void 0, !0)
	}, this.aA7 = function(aB6) {
		var m4 = bQ.z,
			player = m4.n3[aB6] >> 3,
			pb = (bi.e2 = !0, aAx(55, 0), L(81, [ah.a2Y[player]]) + "   ");
		aAc(220, pb += L(73, [bD.pf.a3N(m4.aB7[aB6])]), 55, player, bE.qT, bE.qQ, -1, !0), bQ.aB8.aB9(aB6)
	}, this.sK = function(ry, aBA, sL) {
		ry === aE.fV ? aAc(175, " " + L(82, [ah.a2Y[aBA]]) + ": ", 1001, aBA, aAd(200, 255, 210), bE.qQ, -1, !0, sL) : this.aBB(ry, sL)
	}, this.aBB = function(ry, sL) {
		aAx(1e3, 0), aAc(175, ah.a2Y[ry] + ": ", 1e3, ry, bE.qT, "rgba(5,60,25,0.9)", -1, !0, sL)
	}, this.a4c = function() {
		var s;
		aE.a4B ? (s = L(83), aR.a4b(L(84), 2, 1, 12), aAc(0, s, 40, 0, "rgb(10,220,10)", bE.qQ, -1, !1)) : (s = L(85), aR.a4b(L(86), 2, 0, 16), aAc(0, s, 41, 0, bE.qT, bE.qQ, -1, !1))
	}, this.a2L = function() {
		var hE = ah.a2Y,
			fo = aE.data;
		aAc(300, hE[0] + " [" + aE.a4X.a2R(fo.elo[0]) + "] vs " + hE[1] + " [" + aE.a4X.a2R(fo.elo[1]) + "]", 65, 0, bE.qK, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aBD = function(s) {
		aAc(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aBE = function(aBF) {
		aAc(0, L(aBF ? 87 : 88), 247, 0, bE.rZ, bE.qQ, -1, !1)
	}, this.a4D = function() {
		aAc(0, L(89), 248, 0, bE.qT, bE.qQ, -1, !1)
	}, this.a2T = function(a2Q, a2S, aBG) {
		var fo = aE.data,
			hE = ah.a2Y;
		aAc(0, hE[0] + ": " + aE.a4X.a2R(fo.elo[0]) + " -> " + a2Q, 66, 0, bE.qT, aBG[0], -1, !1), aAc(0, hE[1] + ": " + aE.a4X.a2R(fo.elo[1]) + " -> " + a2S, 66, 1, bE.qT, aBG[1], -1, !1)
	}, this.sc = function(player, id) {
		0 === id ? aAy(50, player) ? (aAc(128, L(90, [ah.a2Y[player]]), 52, player, aAd(180, 255, 180), bE.qQ, -1, !0), ag.tI(player, 2, 255)) : aAc(384, L(91, [ah.a2Y[player]]), 51, player, aAd(210, 210, 255), bE.qQ, -1, !0) : aAy(51, player) ?
			(aAc(128, L(92, [ah.a2Y[player]]), 52, player, bE.qT, "rgba(60,120,10,0.9)", -1, !0), ag.tI(player, 2, 255)) : (aAc(384, L(93, [ah.a2Y[player]]), 50, player, bE.qT, "rgba(90,90,90,0.9)", -1, !0), ag.tI(player, 2, 96))
	}, this.sg = function(xJ, target) {
		var color = aAd(210, 255, 210);
		1 < xJ.length ? aAc(230, L(94, [xJ.length, ah.a2Y[target]]), 66, target, color, bE.qQ, -1, !0) : aAc(230, L(95, [ah.a2Y[xJ[0]], ah.a2Y[target]]), 66, xJ[0], color, bE.qQ, target, !0)
	}, this.aBH = function(player, target) {
		aAc(230, L(96, [ah.a2Y[player], ah.a2Y[target]]), 66, player, bE.qT, "rgba(75,65,5,0.9)", target, !0)
	}, this.aBI = function(id, hE) {
		aAx(id, hE)
	}, this.a4F = function(id, player) {
		aAy(id, void 0 === player ? aE.fi : player)
	}, this.aBJ = function(id) {
		for (var aC = aAQ.length - 1; 0 <= aC; aC--)
			if (aAQ[aC].id === id) return aAQ[aC];
		return null
	}, this.sX = function(a9P, aBK, player) {
		2 !== ah.a7h[aE.fV] && aAc(200, 1 === a9P ? L(97, [ah.a2Y[player]]) : L(98, [bD.pf.a3N(a9P), ah.a2Y[player]]), 30, player, "rgb(190,255,190)", bE.qQ, -1, !0)
	}, this.aBM = function(a9P, player) {
		2 !== ah.a7h[aE.fV] && (aAx(31, 0), a9P = " (" + bD.pf.a3N(a9P) + ") 💸", aAc(150, a9P = bD.h7.kW(player) ? L(99) + a9P : L(100, [ah.a2Y[player]]) + a9P, 31, player, bE.qK, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a4E = function(c3) {
		for (var ev = bi.l6(), aC = 2; 0 <= aC; aC--) 0 < aAU.zC[aC] && (c3 || aAU.ev[aC] < ev - 220) && this.aBU(aC)
	}, this.aBU = function(id) {
		var pb, fl = aAU.zC[id],
			player = aAU.xJ[id];
		aAU.zC[id] = 0, 1 === fl ? (0 === id ? pb = L(108, [ah.a2Y[player], ah.a2Y[aAU.aAZ[0]]]) : 1 === id ? pb = L(109, [ah.a2Y[player]]) : 2 === id ? pb = L(110, [ah.a2Y[player]]) : 3 === id && (pb = L(111, [ah.a2Y[player]])), aAx(7, 0), aAc(
			aAU.o3[id], pb, 7, aAU.aAZ[id], bE.qT, bE.qQ, -1, !0)) : (pb = L(0 === id ? 112 : 1 === id ? 113 : 114, [fl]), aAx(7, 0), aAc(aAU.o3[id], pb, 7, player, bE.qT, bE.qQ, -1, !1))
	}, this.aAz = function(id, iF, lm) {
		var ev = bi.l6(),
			fl = aAU.zC[id] + 1;
		aAU.zC[id]++, aAU.xJ[id] = iF, aAU.aAZ[id] = lm, 1 === fl && (aAU.ev[id] = ev), (1 === fl && (aE.a4I < 32 || 2 === aE.a48) || 1 < fl && (aAU.ev[id] < ev - 140 || 2 === aE.a48)) && this.aBU(id)
	}, this.eq = function() {
		b3.eq();
		for (var kO = (kO = aAQ.length - aAV) <= 1 ? 1 : kO * kO, aC = aAQ.length - 1; 0 <= aC; aC--) 0 < aAQ[aC].el && (aAQ[aC].el -= kO, aAQ[aC].el <= 0) && (bi.e2 = !0, aAQ.splice(aC, 1));
		! function() {
			var hE, aC;
			if (128 !== aAW && !(++aAW < 128))
				for (hE = 5, aC = am.lf - 1; 0 <= aC; aC--) 1 === ah.a7h[am.lk[aC]] && 0 < hE-- && aAc(240, L(111, [ah.a2Y[am.lk[aC]]]), 1, am.lk[aC], bE.qK, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a4E(!1)
	}, this.zD = function() {
		for (var a1C, fu = a2B(), aC = aAQ.length - 1; 0 <= aC; aC--) a1C = fu - (aC + 1) * k, 50 === aAQ[aC].id ? (zE.drawImage(aAQ[aC].canvas, i.j - aAQ[aC].j - aAT - aAR, a1C), zE.drawImage(aAX, i.j - aAT - aAR, a1C)) : zE.drawImage(aAQ[aC]
			.canvas, i.j - aAQ[aC].j - aAR, a1C)
	}, this.aBW = function(id, iY) {
		var aB3, aBX = bE.qd;
		0 === id ? aB3 = L(115) : 1 === id ? (aB3 = L(116), aBX = bE.rQ) : 2 === id ? aB3 = L(117) : 3 === id ? aB3 = L(118) : (aB3 = bD.pf.a3N(iY), aBX = 5 === id ? bE.rQ : bE.qQ), aAx(74, 0), aAc(0, aB3, 74, 0, bE.qT, aBX, -1, !1, void 0,
			void 0, !0)
	}
}

function cO() {
	var aBZ, v7, zF = "",
		a0x = 0,
		a0y = 0,
		aBY = -1,
		eP = ["Team", "BR", "1v1", "Zombie"],
		aBa = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBb = 10;

	function aBf() {
		for (var aBg = aBh(), aBi = -1, aBd = 0, aC = 0; aC < aBa.length; aC++) {
			var fo = aBj(aC, aBg);
			0 <= fo && (aBi < 0 || fo < aBi) && (aBi = fo, aBd = aC)
		}
		if (!(aBi < 0)) return aBi !== aBY && (zF = eP[aBd] + " " + v7 + ": " + aBk(aBi), aBY = aBi, a0x = aR.measureText(zF, aBZ), a0x += Math.floor(.4 * a0y), 1);
		zF = ""
	}

	function aBh() {
		var em = new Date;
		return 60 * em.getUTCMinutes() + em.getUTCSeconds()
	}

	function aBj(aBd, aBg) {
		for (var aBm = aBa[aBd], gD = -1, g4 = 0; g4 < aBm.length; g4++) {
			var fo = (fo = 60 * aBm[g4] + aBb - aBg) <= 0 ? 3600 + fo : fo;
			(gD < 0 || fo < gD) && (gD = fo)
		}
		return gD
	}

	function aBk(aBn) {
		return aBo(Math.floor(aBn / 60)) + ":" + aBo(aBn % 60)
	}

	function aBo(aBp) {
		return aBp < 10 ? "0" + aBp : String(aBp)
	}
	this.aBc = function(aBd, aBe) {
		return 0 <= aBa[aBd].indexOf(aBe)
	}, this.dv = function() {
		v7 = L(119)
	}, this.resize = function() {
		a0x = Math.floor((a1.a2.j1() ? .53 : .36) * i.j2), a0y = Math.floor(.065 * a0x), aBZ = bD.th.vG(1, Math.floor(.9 * a0y)), aBY += 1e3, aBf()
	}, this.eq = function() {
		aBf() && (bi.e2 = !0)
	}, this.aBl = function(w8, w9) {
		for (var aBg = aBh(), pb = "", aC = w8; aC < Math.min(w9, aBa.length); aC++) {
			var fo = aBj(aC, aBg);
			0 <= fo && (pb += (pb ? "   " : "") + eP[aC] + ": " + aBk(fo))
		}
		return pb
	}, this.zD = function(fu) {
		zF && (zE.lineWidth = 1 + Math.floor(a0y / 15), zE.translate(i.j - a0y, fu + a0x), zE.rotate(-Math.PI / 2), zE.fillStyle = bE.qT, zE.fillRect(0, 0, a0x, a0y), zE.strokeStyle = bE.qK, zE.strokeRect(0, 0, a0x, a0y + 10), zE.fillStyle = bE
			.qK, zE.font = aBZ, bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 1), zE.fillText(zF, Math.floor(a0x / 2), Math.floor(.59 * a0y)), zE.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cP() {
	var a9O, aBq, aBr, aBs, a0y, aBt, aBu = 0,
		aBv = 0;

	function aC0(qA) {
		return 1 === qA.id ? aBr : aBq
	}

	function aBz(aC) {
		var aC8 = !0,
			a3C = bE.qT,
			j = (1 === a9O[aC].id ? a9O[aC].p9.fillStyle = a9O[aC].aC7 ? bE.rV : bE.rO : a9O[aC].kI === aE.fi ? a9O[aC].p9.fillStyle = bE.qe : (ad.aC9(a9O[aC].kI), a9O[aC].p9.fillStyle = bD.color.qN(bR.gK[0], bR.gK[1], bR.gK[2], .87), 400 < bD.tp
				.a6k(bR.gK, 0, 2) && (aC8 = !1, a3C = bE.qK)), a9O[aC].canvas.width),
			aCA = aC0(a9O[aC]),
			vv = (a9O[aC].p9.clearRect(0, 0, j, a0y), a9O[aC].p9.fillRect(0, 0, j, a0y), a9O[aC].p9.fillStyle = a3C, ! function(p9, j, a0y) {
				p9.fillRect(0, 0, j, 1), p9.fillRect(0, a0y - 1, j, 1), p9.fillRect(0, 0, 1, a0y), p9.fillRect(j - 1, 0, 1, a0y)
			}(a9O[aC].p9, j, a0y), aCA + 2 * a0y < j && (a9O[aC].p9.fillRect(j - aCA - a0y, 0, 1, a0y), a9O[aC].p9.fillText(ah.a2Y[a9O[aC].kI], Math.floor((j - aCA) / 2), Math.floor(.57 * a0y))), a0y),
			qA = 1 === a9O[aC].id ? (qA = a9O[aC], bD.pf.a3N(qA.iY) + " (" + bD.pf.a8Q(100 * qA.aC2 / 1024, +(10 * qA.aC2 < 1024)) + ")") : bD.pf.a3N(a9O[aC].iY);
		a9O[aC].p9.fillText(qA, Math.floor(j - aCA / 2 - vv), Math.floor(.57 * a0y)),
			function(aC, j, vv, aC8, aCA) {
				a9O[aC].p9.fillStyle = aC8 ? bE.qV : bE.qR;
				var aC8 = a9O[aC].iY,
					max = a9O[aC].aCG,
					aC8 = max <= aC8 ? aCA : Math.floor(aCA * aC8 / max);
				a9O[aC].p9.fillRect(Math.floor(j - aCA - vv), a0y - aBt, aC8, aBt)
			}(aC, j, vv, aC8, aCA),
			function(aC, j, aC8, a3C) {
				var aCI = a9O[aC].aCJ || 1 === a9O[aC].id && 0 === a9O[aC].aC2,
					aCI = (a9O[aC].p9.strokeStyle = aCI ? bE.qc : aC8 ? bE.r3 : bE.r4, a9O[aC].p9.fillStyle = a3C, a9O[aC].p9.fillRect(j - a0y, 0, 1, a0y), a9O[aC].p9.lineWidth = Math.max(Math.floor(a0y / 12), 3), a9O[aC].p9.lineCap = "round", .35);
				j = a0y + 1, a9O[aC].p9.beginPath(), a9O[aC].p9.moveTo(Math.floor(j - aCI * a0y + 0), Math.floor(aCI * a0y)), a9O[aC].p9.lineTo(Math.floor(j - a0y + aCI * a0y), Math.floor(a0y - aCI * a0y + 0)), a9O[aC].p9.stroke(), a9O[aC].p9
					.beginPath(), a9O[aC].p9.moveTo(Math.floor(j - a0y + aCI * a0y), Math.floor(aCI * a0y)), a9O[aC].p9.lineTo(Math.floor(j - aCI * a0y + 0), Math.floor(a0y - aCI * a0y + 0)), a9O[aC].p9.stroke()
			}(aC, j, aC8, a3C), (0 === a9O[aC].id ? function(aC, j, aC8) {
				a9O[aC].p9.strokeStyle = aC8 ? bE.ql : bE.qv, a9O[aC].p9.fillRect(a0y, 0, 1, a0y);
				aC8 = j - a0y;
				a9O[aC].p9.beginPath(), a9O[aC].p9.moveTo(Math.floor(.3 * a0y + aC8), Math.floor(a0y / 2)), a9O[aC].p9.lineTo(Math.floor(a0y - .3 * a0y + 0 + aC8), Math.floor(a0y / 2)), a9O[aC].p9.stroke(), a9O[aC].p9.beginPath(), a9O[aC].p9
					.moveTo(Math.floor(a0y / 2 + aC8), Math.floor(.3 * a0y)), a9O[aC].p9.lineTo(Math.floor(a0y / 2 + aC8), Math.floor(a0y - .3 * a0y + 0)), a9O[aC].p9.stroke()
			} : function(aC, j, aC8) {
				var aC = a9O[aC].p9,
					jE = Math.floor(.12 * a0y),
					oC = Math.floor(.34 * a0y + j - a0y),
					j = Math.floor(a0y - .34 * a0y + j - a0y);
				aC.strokeStyle = aC8 ? bE.ql : bE.qv, aC.fillRect(a0y, 0, 1, a0y), aC.beginPath(), aC.moveTo(oC, Math.floor(a0y / 2) - jE), aC.lineTo(j, Math.floor(a0y / 2) - jE), aC.stroke(), aC.beginPath(), aC.moveTo(oC, Math.floor(a0y / 2) +
					jE), aC.lineTo(j, Math.floor(a0y / 2) + jE), aC.stroke()
			})(aC, j, aC8)
	}

	function aCW(h, aCU) {
		for (var iY, aC = aCU - 1; 0 <= aC; aC--) iY = ae.gy(aE.fV, aC), h[aC].iY !== iY && (h[aC].iY = iY, h[aC].aCG = Math.max(iY, h[aC].aCG), h[aC].aC4 = !0)
	}

	function aCa(h, aCY) {
		for (var w8 = aE.fV << 3, aB7 = bQ.z.aB7, aCc = bQ.z.aCc, aC = aCY - 1; 0 <= aC; aC--) {
			var aCd = aCc[w8 + aC],
				iY = aB7[aCd],
				target = bQ.ly.aCe(aCd),
				aCd = bQ.z.aCf[aCd];
			h[aC].iY === iY && h[aC].aCG === target && h[aC].aC2 === aCd || (h[aC].iY = iY, h[aC].aCG = target, h[aC].aC2 = aCd, h[aC].aC4 = !0)
		}
	}

	function aBy(a9R) {
		a9R.canvas = document.createElement("canvas"), bV.aBw.font = aBs;
		var j = aC0(a9R);
		a9R.kI < aE.fi && 0 === a9R.id && (j += Math.floor(bV.aBw.measureText(ah.a2Y[a9R.kI] + "000").width)), j += 2 * a0y, a9R.canvas.width = j, a9R.canvas.height = a0y, a9R.p9 = a9R.canvas.getContext("2d", {
			alpha: !0
		}), a9R.p9.font = aBs, bD.th.textBaseline(a9R.p9, 1), bD.th.textAlign(a9R.p9, 1)
	}

	function aCP(aC) {
		return aV.aCg() ? i.j - a9O[aC].canvas.width - bf.gap : aV.fs
	}

	function aCQ(aC) {
		return Math.floor(2 * bf.gap + (aV.aCg() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0y))
	}
	this.dv = function() {
		aBu = aBv = 0, a9O = [], this.resize()
	}, this.resize = function() {
		var iu;
		aBs = aO.aAC, a0y = aO.fontSize + 5, a0y = Math.floor(1.25 * a0y), a1.a2.j1() && (a0y = Math.floor(1.25 * a0y)), aBt = Math.floor(.15 * a0y), bV.aBw.font = aBs, aBq = Math.floor(bV.aBw.measureText("02 000 000 0000").width), iu = bV.aBw,
			iu = Math.max(iu.measureText("0 000 000 000 (100%)").width, iu.measureText("0 000 000 000 (0.0%)").width), aBr = Math.floor(iu + .4 * a0y);
		for (var aC = a9O.length - 1; 0 <= aC; aC--) aBy(a9O[aC]), aBz(aC)
	}, this.nX = function() {
		! function() {
			for (var aC5 = bQ.a9u.aC6(), id = -1 === aC5 ? -1 : bQ.z.n2[aC5], aC = a9O.length - 1; 0 <= aC; aC--) {
				var qA = a9O[aC];
				1 === qA.id && qA.aC7 !== (qA.kI === id) && (qA.aC7 = qA.kI === id, qA.aC4 = !0)
			}
		}();
		for (var aC = a9O.length - 1; 0 <= aC; aC--) a9O[aC].aC4 && (a9O[aC].aC4 = !1, aBz(aC))
	}, this.hz = function(mO, mP) {
		if (!(2 === aE.a48 || 0 === ah.nl[aE.fV] || aE.hu || aE.hv || bD.h7.kW(aE.fV)))
			for (var aCK, aCM, aCL, aCN = a1.a2.j1() ? a0y : 0, aCO = a1.a2.j1() ? Math.floor(.15 * a0y) : 0, aC = a9O.length - 1; 0 <= aC; aC--)
				if (aCK = aCP(aC), aCL = aCQ(aC), aCM = a9O[aC].canvas.width, aCL - aCO <= mP && mP <= aCL + a0y + aCO) {
					if (aCK - aCN <= mO && mO <= aCK + a0y + aCN) return 0 !== a9O[aC].id ? (bQ.iQ.aCR(a9O[aC].kI), bB.iD.sC(a9O[aC].kI)) : a9O[aC].aCJ || (a9O[aC].aC4 = !0, a9O[aC].aCJ = !0, bB.iD.sI(a9O[aC].kI)), !0;
					if (aCK + aCM - a0y - aCN <= mO && mO <= aCK + aCM + aCN) return aCL = aS.iH(), 0 === a9O[aC].id ? (bY.a9s(3), bB.iD.iK(aCL, a9O[aC].kI)) : bB.iD.sF(aCL, a9O[aC].kI), !0;
					if (1 === a9O[aC].id && aCK <= mO && mO <= aCK + aCM) return bQ.a9u.select(a9O[aC].kI), bi.e2 = !0
				} return !1
	}, this.eq = function() {
		var a6s, a6t, h, aCU;
		0 === ah.nl[aE.fV] || bD.h7.kW(aE.fV) && !aE.hu && !aE.hv || (a6s = a9O.slice(0, aBu), a6t = a9O.slice(aBu, aBu + aBv), h = a6s, aCU = ae.gs(aE.fV), function(h, aCU) {
			if (aBu !== aCU) return 1;
			for (var aC = aCU - 1; 0 <= aC; aC--)
				if (h[aC].kI !== ae.gx(aE.fV, aC)) return 1;
			return
		}(h, aCU) ? aCW(h = function(h, aCU) {
			var aC, kI, g5, iY, aAf = [];
			loop: for (aC = 0; aC < aCU; aC++) {
				for (kI = ae.gx(aE.fV, aC), g5 = 0; g5 < h.length; g5++)
					if (h[g5].kI === kI) {
						aAf.push(h.splice(g5, 1)[0]);
						continue loop
					} iY = ae.gy(aE.fV, aC), aBy(iY = {
					kI: kI,
					iY: iY,
					aCG: iY,
					aC2: 0,
					aC7: !1,
					id: 0,
					aC4: !0,
					aCJ: !1,
					canvas: null,
					p9: null
				}), aAf.push(iY)
			}
			return aAf
		}(h, aCU), aCU) : aCW(h, aCU), a6s = h, a6t = function(h) {
			var aCY = bQ.z.lD[aE.fV];
			return function(h, aCY) {
				if (aBv !== aCY) return 1;
				for (var w8 = aE.fV << 3, n2 = bQ.z.n2, aCc = bQ.z.aCc, aC = aCY - 1; 0 <= aC; aC--) {
					var aCd = aCc[w8 + aC];
					if (h[aC].kI !== n2[aCd]) return 1
				}
				return
			}(h, aCY) ? aCa(h = function(h, aCY) {
				var aC, kI, g5, iY, aAf = [],
					w8 = aE.fV << 3,
					n2 = bQ.z.n2,
					aB7 = bQ.z.aB7,
					aCc = bQ.z.aCc;
				loop: for (aC = 0; aC < aCY; aC++) {
					var aCd = aCc[w8 + aC];
					for (kI = n2[aCd], g5 = 0; g5 < h.length; g5++)
						if (h[g5].kI === kI) {
							aAf.push(h.splice(g5, 1)[0]);
							continue loop
						} iY = aB7[aCd], aBy(iY = {
						kI: kI,
						iY: iY,
						aCG: bQ.ly.aCe(aCd),
						aC2: bQ.z.aCf[aCd],
						aC7: !1,
						id: 1,
						aC4: !0,
						aCJ: !1,
						canvas: null,
						p9: null
					}), aAf.push(iY)
				}
				return aAf
			}(h, aCY), aCY) : aCa(h, aCY), h
		}(a6t), aBu = a6s.length, aBv = a6t.length, a9O = a6s.concat(a6t))
	}, this.zD = function() {
		if (0 !== ah.nl[aE.fV] && (!bD.h7.kW(aE.fV) || aE.hu || aE.hv))
			for (var aC = a9O.length - 1; 0 <= aC; aC--) zE.drawImage(a9O[aC].canvas, aCP(aC), aCQ(aC))
	}
}

function cQ() {
	var aAQ, lE, aCh, aCi, k, aAC, fontSize, aCj, aCk, aCl, aCm, canvas, p9, ny, aCn;

	function zU(aC) {
		return L(0 === aC ? 120 : 1 === aC ? 121 : 2 === aC ? 122 : 123)
	}

	function aCu() {
		aE.il ? aCv + 4 * bf.gap + k + bk.aCw() > aS.fu ? zE.drawImage(canvas, 2 * bf.gap + bk.aCw(), aCv + 2 * bf.gap) : zE.drawImage(canvas, bf.gap, aCv + 3 * bf.gap + bk.aCw()) : zE.drawImage(canvas, bf.gap, aCv + 2 * bf.gap)
	}

	function aCo() {
		canvas.width = aAQ[0].width + aCl, canvas.height = k + aCl, (p9 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aAQ[0].width + aCl, k + aCl), p9.translate(Math.floor(aCl / 2), Math.floor(aCl / 2)), p9.lineWidth = aCl, p9.fillStyle = 1 === aAQ[0].aCt ? bE.qY : bE.qQ, aCx(), p9.fill(), p9.strokeStyle = 1 === aAQ[0].aCt ? bE.qK :
			bE.qT, aCx(), p9.stroke(), bD.th.textAlign(p9, 1), bD.th.textBaseline(p9, 1), p9.fillStyle = 1 === aAQ[0].aCt ? bE.qK : bE.qT, p9.font = aAC[0], p9.fillText(zU(aAQ[0].aCs), Math.floor(aAQ[0].width / 2), Math.floor(.72 * aCj[0] * k)), p9
			.font = aAC[1], p9.fillText(aAQ[0].pb, Math.floor(aAQ[0].width / 2), Math.floor((aCj[0] + .48 * aCj[1]) * k))
	}

	function aCx() {
		p9.beginPath(), p9.moveTo(aCm, 0), p9.lineTo(aAQ[0].width - aCm, 0), p9.lineTo(aAQ[0].width, aCm), p9.lineTo(aAQ[0].width, k - aCm), p9.lineTo(aAQ[0].width - aCm, k), p9.lineTo(aCm, k), p9.lineTo(0, k - aCm), p9.lineTo(0, aCm), p9.closePath()
	}
	this.dv = function() {
		lE = 4, aCh = aCi = ny = 0, aAQ = [], aAC = new Array(2), fontSize = new Array(2), (aCj = new Array(2))[0] = .3, aCj[1] = .7, aCk = new Array(4), canvas = document.createElement("canvas"), aCn = bi.el + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.j1() ? .062 : .047) * i.j2), fontSize[0] = Math.floor(.85 * aCj[0] * k), fontSize[1] = Math.floor(.85 * aCj[1] * k), aAC[0] = bD.th.vG(1, fontSize[0]), aAC[1] = bD.th.vG(1, fontSize[1]), aC = aCk.length -
			1; 0 <= aC; aC--) aCk[aC] = this.measureText(zU(aC) + "000", aAC[0]);
		if (aCl = Math.floor(1 + .05 * k), aCm = Math.floor(.2 * k), 0 < aAQ.length) {
			for (aC = aAQ.length - 1; 0 <= aC; aC--) j = this.measureText(aAQ[aC].pb + "00", aAC[1]), aAQ[aC].width = j < aCk[aC] ? aCk[aC] : j;
			aCo()
		}
	}, this.eq = function() {
		0 !== lE && (4 === lE ? bi.el > aCn && (lE = 0, 1 === aE.a48) && aR.a4b(bV.xa.aBN[bV.fR].name, 3, 1, 9) : (1 === lE ? (0 === aCh && (aCo(), aCh = 1e-4), 1 <= (aCh += .002 * (bi.el - ny)) && (aCi = 0, lE = 2, aCh = 1), bi.e2 = !0) : 2 ===
			lE ? ((aCi += (bi.el - ny) / 1e3) > aAQ[0].o3 || 1 < aCi && 1 < aAQ.length) && (lE = 3) : 3 === lE && ((aCh -= .002 * (bi.el - ny)) <= 0 && (aCh = 0, aAQ.shift(), lE = 0 < aAQ.length ? 1 : 0), bi.e2 = !0), ny = bi.el))
	}, this.measureText = function(pb, aAC) {
		return zE.font = aAC, Math.floor(zE.measureText(pb).width)
	}, this.eu = function(aCr, aC) {
		this.a4b(ah.a2Y[aCr], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4b = function(pb, aCs, aCt, o3) {
		var j;
		pb.length && (j = (j = this.measureText(pb + "00", aAC[1])) < aCk[aCs] ? aCk[aCs] : j, aAQ.push({
			pb: pb,
			width: j,
			aCs: aCs,
			aCt: aCt,
			o3: o3
		}), 0 === lE) && (aCh = 0, lE = 1, ny = bi.el)
	}, this.zD = function() {
		0 !== lE && 0 !== aCh && (aCh < 1 ? (zE.globalAlpha = aCh, aCu(), zE.globalAlpha = 1) : aCu())
	}
}

function cz() {
	var k, canvas, p9, aCy, aCz, aD0, aD1, aC4, aD2, aD3, aD4, aD6, aBF = !1,
		a76 = (this.tF = new aD5, this.ib = !1, this.j = 0, new Array(2)),
		aD7 = 0;

	function nY() {
		var j = ax.j,
			m4 = (aC4 = !1, a2E(p9, j, k), Math.floor(j / 2));
		1 === aCy ? (p9.fillStyle = bE.qn, p9.fillRect(m4, 0, m4, k)) : -1 === aCy && (p9.fillStyle = bE.r5, p9.fillRect(0, 0, m4, k)), a2F(p9, j, k, 2);
		var m4 = (m4 = Math.floor(.25 * k)) < 2 ? 2 : m4,
			aBQ = (p9.fillStyle = bE.qZ, Math.floor((k - 4) * aCz[1] / aD0[1]));
		0 < aBQ && p9.fillRect(2, k - 2 - aBQ, m4, aBQ), 0 < (aBQ = Math.floor((k - 4) * aCz[0] / aD0[0])) && p9.fillRect(j - 2 - m4, k - 2 - aBQ, m4, aBQ);
		m4 = (m4 = Math.floor(k / 8)) < 2 ? 2 : m4, a2H(p9, Math.floor(.4 * k), 0, k, m4, .5, !1), a2H(p9, Math.floor(j - 1.4 * k), 0, k, m4, .5, !0), aBQ = 1.1 * k / a76[0].width;
		p9.imageSmoothingEnabled = !0, p9.setTransform(aBQ, 0, 0, aBQ, (j - aBQ * a76[0].width) / 2, -.05 * k), p9.drawImage(a76[+aBF], 0, 0), p9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDB() {
		aD6 = -1, aBF = ai.aDC(), aO.a8g(257), aO.aBE(aBF), ax.ib = !0, aC4 = !0, aD2 = ax.tF.aDD;
		for (var gD, aDG = ax.tF, em = 0, aC = am.lf - 1; 0 <= aC; aC--) bD.h7.kW(am.lk[aC]) || (em += ah.hZ[am.lk[aC]]);
		aBF ? aD0[0] = Math.max(bO.gC(aDG.aDO * em, 100), 1) : aE.il ? (gD = 9 === aE.lR ? 8 === bj.lW[bk.li()] ? aDG.aDP : (gD = bO.gC(100 * bk.lg(), aE.kt), bO.gC(bO.j0(aDG.aDQ - aDG.aDR * gD, aDG.aDS, aDG.aDT), 10)) : (gD = bO.gC(100 * bk.lg(), aE
				.kt), bO.gC(bO.j0(aDG.aDU - aDG.aDV * gD, aDG.aDS, aDG.aDT), 10)), gD = bO.gC(gD * em, 100), aD0[0] = Math.max(gD, 1)) : 8 === aE.lR ? aD0[0] = Math.max(bO.gC(aDG.aDW * em, 100), 1) : aD0[0] = Math.max(bO.gC(aDG.aDX * em, 100), 1),
			aD0[1] = Math.max(em - aD0[0], 1)
	}

	function a4J() {
		aD4 = bi.l6(), aC4 = !0, aD2 = aCy = 0, aD1 = [], ax.ib = !1, aO.a4F(247), aCz[0] = aCz[1] = 0, aO.a8g(673)
	}

	function a2B() {
		return aS.aAq(aO.aAm()) ? __fx.settings.keybindButtons ? aS.fu - 2 * (k + bf.gap) : aS.fu - k - bf.gap : bF.aAq(aO.aAp()) ? bF.a2B() - k - bf.gap : i.k - k - bn.a9V() * bf.gap
	}
	this.dw = function() {
		for (var aC = 0; aC < 2; aC++) a76[aC] = bD.canvas.a2q(ac.get(3), 8 - aC, bE.rn), a76[aC] = bD.canvas.a79(a76[aC])
	}, this.dv = function() {
		aD4 = -1e4, aD3 = aD7 = 0, aD6 = -1, this.ib = !1, aC4 = aBF = !1, aCz = [aCy = aD2 = 0, 0], aD0 = [1, 1], aD1 = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p9 = canvas.getContext("2d", {
			alpha: !0
		}), nY()
	}, this.nX = function() {
		aC4 && nY()
	}, this.hz = function(fs, fu) {
		return !!this.ib && !(fs < i.j - this.j - bf.gap || fu < a2B() || (aE.hu || aE.hv || this.ic(aE.fV) && (aN.hw && aN.a6N(), bB.iD.ie(fs > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.eq = function() {
		var aDG;
		0 < aD3 ? 0 === --aD3 && a4J() : bU.a3i.a45() || (this.ib ? (aD2--, aDG = ax.tF, aD2 === aDG.aDY && aDG.aDZ * aCz[0] < aD0[0] ? a4J() : aCz[0] >= aD0[0] ? aBF ? bU.a3i.a3z() : bU.a3i.a41() : aCz[1] >= aD0[1] ? aD3 = ax.tF.aDa : aD2 <=
			0 && a4J()) : ! function() {
			var aDF = bi.l6(),
				aDG = ax.tF;
			if (aDF % aDG.aDH === aDG.aDI) {
				if (aD7) return !(aDF < aD7) && !(aDF < aD4 + aDG.aDJ) && (aD7 = aDF + aDG.aDK, bD.h7.a7k()) ? (aDB(), 1) : 0;
				1 === am.lf ? aD7 = aDF + aDG.aDL : (aE.il ? bk.lg() : ah.hZ[mk[0]]) >= bO.gC(aDG.aDM * aE.kt, 100) && (aD7 = aDF + aDG.aDN)
			}
			return
		}() && 0 <= aD6 && (aO.a2X(250, L(124, [ah.a2Y[aD6]]), 673, aD6, bE.qT, bE.qQ, -1, !0), aDB()))
	}, this.a49 = function() {
		this.ib && (aCz[0] < aD0[0] ? a4J() : aD3 = ax.tF.aDb)
	}, this.tJ = function(player, aDc) {
		var aDd = L(aDc ? 125 : 126, [ah.a2Y[player]]),
			aDd = (aO.a2X(450, aDd, 257, player, aDc ? bE.ql : bE.r2, bE.qQ, -1, !0), aD1.push(player), aC4 = !0, aE.lT ? Math.max(aD0[0], aD0[1]) : ah.hZ[player]),
			aDd = Math.max(aDd, 1);
		aDc ? aCz[0] += aDd : aCz[1] += aDd, player === aE.fV && (aCy = aDc ? 1 : -1)
	}, this.zD = function() {
		var fu;
		this.ib && (fu = a2B(), zE.drawImage(canvas, i.j - this.j - bf.gap, fu))
	}, this.ig = function(player) {
		if (0 !== aD2 || bU.a3i.a45()) return !1;
		if (!bD.h7.hx(1)) return !1;
		if (!bD.h7.hy(player)) return !1;
		var aDG = this.tF;
		if (ku[player] >= aDG.aDe && !bD.h7.a81(player, aDG.aDf)) return !1;
		if (!(aE.lT || m.e8 && m.eD)) {
			player = bi.l6();
			if (player < aD4 + ax.tF.aDh) return !!void 0;
			if (player < ax.tF.aDi) return !!void 0
		}
		return !!1
	}, this.ic = function(hJ) {
		if (!bD.h7.hx(1) || bU.a3i.a45()) return !1;
		if (!bD.h7.hy(hJ)) return !1;
		if (!this.ib) return !1;
		for (var aC = aD1.length - 1; 0 <= aC; aC--)
			if (aD1[aC] === hJ) return !1;
		return !0
	}, this.ia = function(player) {
		aD6 = player
	}
}

function aD5() {
	this.aDD = 360, this.aDY = 180, this.aDZ = 3, this.aDa = 4, this.aDb = 54, this.aDO = 75, this.aDX = 60, this.aDW = 75, this.aDP = 80, this.aDU = 1600, this.aDV = 12, this.aDQ = 1550, this.aDR = 11, this.aDS = 400, this.aDT = 1e3, this.aDH = 40,
		this.aDI = 14, this.aDL = 356, this.aDM = 90, this.aDN = 178, this.aDK = 1071, this.aDJ = 356, this.aDe = 10, this.aDf = 9, this.aDi = 1607, this.aDh = 100
}

function cR() {
	var j, fs, aDj, canvas, p9, ib, jR, a8X, aAC, aC4, aDk = 11 / 12;

	function aDm() {
		var aCH = Math.floor(jR * (j - 2 * aDj)),
			aDp = 1 + Math.floor(.0625 * aS.k),
			aDq = 1 + Math.floor(.3 * aS.k),
			aDr = Math.floor(.55 * aS.k);
		p9.clearRect(0, 0, j, aS.k), p9.fillStyle = bE.qP, p9.fillRect(0, 0, aDj, aS.k), p9.fillRect(aDj + aCH, 0, j - aDj - aCH, aS.k), p9.fillStyle = jR < 1 / 3 ? "rgba(" + Math.floor(3 * jR * 130) + ",130,0,0.85)" : jR < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (jR - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jR - 2 / 3) * 130) + ",0.85)", p9.fillRect(aDj, 0, aCH, aS.k), p9.fillStyle = bE.qT, p9.fillRect(0, 0, j, 1), p9.fillRect(0, aS.k - 1, j, 1), p9
			.fillRect(0, 0, 1, aS.k), p9.fillRect(aDj, 0, 1, aS.k), p9.fillRect(aDj + aCH, 0, 1, aS.k), p9.fillRect(j - aDj, 0, 1, aS.k), p9.fillRect(j - 1, 0, 1, aS.k), p9.fillRect(Math.floor(.25 * aS.k) + aDq, Math.floor((aS.k - aDp) / 2), aS.k -
				2 * aDq, aDp), p9.fillRect(Math.floor(j - 1.25 * aS.k) + aDq, Math.floor((aS.k - aDp) / 2), aS.k - 2 * aDq - aDq % 2, aDp), p9.fillRect(Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aDp) / 2), aDq, aDp, aS.k - 2 * aDq - aDq % 2),
			a8X = bD.h7.jQ(aE.fV, aS.iH()), p9.fillText(bD.pf.a3N(a8X) + " (" + bD.pf.a8Q(100 * jR, +(jR < .1)) + ")", Math.floor(.5 * j), aDr)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jR = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a6J(arg1);

	function aDw(a6f) {
		return !(1 < a6f && 1 === jR || (1 < a6f && a6f * jR - jR < 1 / 1024 ? a6f = (jR + 1 / 1024) / jR : a6f < 1 && jR - a6f * jR < 1 / 1024 && (a6f = (jR - 1 / 1024) / jR), jR = bO.j0(jR * a6f, 1 / 1024, 1), aDm(), 0))
	}

	function aDx(mO) {
		return jR !== (jR = bO.j0((mO - fs - aDj) / (j - 2 * aDj), 1 / 1024, 1)) && (aDm(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aDm(), bi.e2 = !0
	}, this.fu = 0, this.i0 = !1, this.dv = function() {
		ib = !aE.iB && !aE.hu && !aE.hv, aC4 = !1, jR = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8X = 0, this.i0 = !1, this.resize()
	}, this.resize = function() {
		a1.a2.j1() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.j2), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.j1() ? .65 : .389) * i.j2), j += 12 - j % 12, this.k = Math.floor(j / 12)), aDj = Math.floor(3 * this.k / 2), aAC =
			bD.th.vG(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, zE), canvas.height = this.k, (p9 = canvas.getContext("2d", {
				alpha: !0
			})).font = aAC, bD.th.textBaseline(p9, 1), bD.th.textAlign(p9, 1), this.aDl(), aDm()
	}, this.aDl = function() {
		fs = a1.a2.j1() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fu = i.k - this.k - bn.a9V() * bf.gap
	}, this.nX = function() {
		aC4 && (aC4 = !1, aDm())
	}, this.ib = function() {
		return !(!ib || aN.hw && fs < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAq = function(aDs) {
		return !!this.ib() && fs + j > i.j - aDs - bf.gap
	}, this.a8e = function() {
		ib = !aE.hu && !aE.hv
	}, this.a4J = function() {
		ib = !1
	}, this.iH = function() {
		return bO.j0(Math.floor(1024 * jR + .5) - 1, 0, 1023)
	}, this.a6G = function(mO, mP) {
		return this.ib() && fs < mO && mO < fs + j && mP > this.fu
	}, this.hz = function(mO, mP) {
		if (!this.ib()) return !1;
		if (!(__fx.settings.keybindButtons && mP > this.fu - Math.floor(bf.gap / 4) - this.k && mP < this.fu - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mO - fs))) {
			if (!aS.a6G(mO, mP)) return !1;
			aT.oH = !1, ! function(v0, mO, mP) {
				if (function(mO, mP) {
						return fs < mO && mO < fs + aDj && mP > aS.fu
					}(mO, mP)) return aDw(aDk);
				if (function(mO, mP) {
						return fs + j - aDj < mO && mO < fs + j && mP > aS.fu
					}(mO, mP)) return aDw(1 / aDk);
				return v0.i0 = !0, aDx(mO)
			}(this, mO, mP) || (bi.e2 = !0)
		}
		return !0
	}, this.a6J = function(oO) {
		0 !== aE.a48 && this.ib() && aDw(oO) && (bi.e2 = !0)
	}, this.a5p = function(deltaY) {
		var oO;
		return !(0 === deltaY || !this.ib()) && aDw(oO = 0 < deltaY ? (oO = 400 / (400 + deltaY)) < aDk ? aDk : oO : 1 / aDk < (oO = (400 - deltaY) / 400) ? 1 / aDk : oO)
	}, this.a5m = function(mO) {
		return !!this.i0 && aDx(mO)
	}, this.a6C = function() {
		this.i0 = !1
	}, this.eq = function() {
		this.ib() && a8X !== bD.h7.jQ(aE.fV, this.iH()) && (aC4 = !0)
	}, this.zD = function() {
		this.ib() && (zE.drawImage(canvas, fs, this.fu), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(zE, fs, this.fu)
	}
}

function dB() {
	var canvas, p9, rect, font, aDy = 0,
		aDz = !1,
		aE0 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aE1 = 5;

	function aE8() {
		if (aDz) {
			var aC, fl = aE0.length,
				aDr = Math.floor(.5 * rect.k),
				k = fl * aDr,
				fs = Math.floor(Math.floor(rect.fs) + .3 * rect.j - .5),
				fu = Math.floor(Math.floor(rect.fu) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (zE.fillStyle = bE.qP, zE.fillRect(fs, fu, j, k), zE.fillStyle = bE.qs, zE.fillRect(fs, fu + aE1 * aDr, j, aDr), zE.fillStyle = bE.qT, zE.fillRect(fs, fu, 2, k), zE.fillRect(fs, fu, j, 2), zE.fillRect(fs + j - 2, fu, 2, k), aC =
				1; aC < fl; aC++) zE.fillRect(fs, fu + aC * aDr, j, 2);
			for (zE.fillStyle = bE.qT, bD.th.textAlign(zE, 1), bD.th.textBaseline(zE, 1), zE.font = bD.th.vG(0, .6 * aDr), fs += .5 * j, aC = 0; aC < fl; aC++) zE.fillText(aEG(aC), fs, fu + (aC + .6) * aDr)
		}
		zE.drawImage(canvas, Math.floor(rect.fs), Math.floor(rect.fu))
	}

	function nY(v0) {
		var fs, oC, oD, aDr;
		p9.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p9.fillStyle = bE.qP, p9.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.oF && (p9.fillStyle = bE.qs, p9.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p9
			.fillStyle = bE.qT, p9.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p9.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fs = .5 * rect.j, p9.fillText("Replay Speed", fs, .31 * rect.k), p9.fillText(aEG(aE1), fs, .69 *
				rect.k), p9.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), v0.a9E ? (fs = Math.floor(.02 * rect.j), v0 = Math.floor(.025 * rect.j), oC = Math.floor(.85 * rect.j - fs - .5 * v0), oD = Math.floor(.25 * rect.k), aDr =
				Math.floor(rect.k) - 2 * oD, p9.fillRect(oC, oD, fs, aDr), p9.fillRect(oC + fs + v0, oD, fs, aDr)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fs = Math.floor(.85 * rect.j - .5 * j + j / 12),
					fu = Math.floor(.5 * rect.k - k);
				p9.beginPath(), p9.moveTo(fs, fu), p9.lineTo(fs + j, fu + k), p9.lineTo(fs, fu + (k << 1)), p9.fill()
			}(), p9.fillRect(0, 0, Math.floor(rect.j), 2), p9.fillRect(0, 0, 2, Math.floor(rect.k)), p9.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p9.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aEG(aC) {
		return 5 === aC ? "Normal" : "" + aE0[aC]
	}
	this.a9E = !1, this.dv = function() {
		aE.hu && (aE1 = 5, this.a9E = !1, aDz = !1, rect = new uI([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aE2 = function() {
		return aE0[aE1]
	}, this.a2B = function() {
		return rect.fu
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a9E,
		fxGetSpeedIndex: () => aE1,
		fxSetSpeedIndex: index => {
			aE1 = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.fu
	}, this.aAq = function(aDs) {
		return !!aE.hu && rect.fs + rect.j > i.j - aDs - bf.gap
	}, this.resize = function() {
		aE.hu && (rect.resize(), rect.fu -= (bn.a9V() - 1) * bf.gap, font = bD.th.vG(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p9 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.th.textAlign(p9, 1), bD.th.textBaseline(p9, 1), nY(this))
	}, this.a6M = function(aE3) {
		0 === aE.a48 || u.ib() || aE3 !== aE.oF && (aE.oF = aE3, bk.resize(), bi.e2 = !0, aE.hu) && (aDy = bi.el + 2e3, nY(this))
	}, this.hz = function(fs, fu) {
		if (!aE.hu) return !1;
		if (fs < rect.fs || fu < rect.fu || fs > rect.fs + rect.j) return aDz && function(v0, fs, fu) {
			var fl = aE0.length,
				aDr = Math.floor(.5 * rect.k),
				k = fl * aDr,
				oC = Math.floor(Math.floor(rect.fs) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.fu) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aDz = !1, bi.e2 = !0, fs < oC || oC + j < fs || fu < k || (aE1 = aE7(0, Math.floor((fu - k) / aDr), fl - 1), nY(v0)), !0
		}(this, fs, fu);
		if ((fs -= rect.fs) < .3 * rect.j) aDz = !1, this.a6M(!aE.oF);
		else {
			if (fs < .7 * rect.j) return aDz = !aDz, bi.e2 = !0;
			this.a6O(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a6O(!0), this.a6O = function(aE5) {
		2 === aE.a48 ? (this.a6M(!1), u.v(3)) : (aDz = !1, this.a9E = !this.a9E, this.a9E ? (aN.hw && aN.a6N(), a1.a2.setState(1)) : aE5 || aN.aAJ(), bi.e2 = !0, nY(this))
	}, this.aE6 = function() {
		this.a9E = !1, aN.aAJ(), bi.e2 = !0, nY(this)
	}, this.a65 = function(fs, fu) {
		return !!aE.oF && (0 <= aN.hz(fs, fu) || (aE.hu ? ((bi.el > aDy || !this.hz(fs, fu)) && aT.hz(fs, fu), bi.e2 = !0, aDy = bi.el + 2e3) : aT.hz(fs, fu)), !0)
	}, this.eq = function() {
		aE.hu && aE.oF && bi.el > aDy - 1e3 && bi.el < aDy && (bi.e2 = !0)
	}, this.a4M = function() {
		aE.hu && (this.a9E = !1, bi.e2 = !0, nY(this))
	}, this.zD = function() {
		if (aE.hu) {
			if (aE.oF) {
				if (bi.el > aDy) return;
				if (bi.el > aDy - 1e3) return zE.globalAlpha = aE7(0, (1e3 - (bi.el - (aDy - 1e3))) / 1e3, 1), aE8(), void(zE.globalAlpha = 1)
			}
			aE8()
		}
	}
}

function cS() {
	var aEH, aEI, j, fs, fu, aEJ, aEK;
	this.dv = function() {
		aEH = new Array(2), aEI = new Array(2), this.oH = !1, aEK = aEJ = jT = jS = 0, j3 = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.j1() ? .072 : .0502) * i.j2)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aEH[aC] = document.createElement("canvas"), aEH[aC].width = j, aEH[aC].height = j, aEI[aC] = aEH[aC].getContext("2d", {
			alpha: !0
		});
		this.aDl(),
			function() {
				for (var aEb = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aEI[aC].clearRect(0, 0, j, j), aEI[aC].fillStyle = bE.qM, aEI[aC].beginPath(), aEI[aC].arc(j / 2, j / 2, j / 2 - aEb, 0, 2 * Math.PI), aEI[aC].fill(), aEI[aC]
					.lineWidth = aEb, aEI[aC].fillStyle = bE.qT, aEI[aC].strokeStyle = bE.qT, aEI[aC].beginPath(), aEI[aC].arc(j / 2, j / 2, j / 2 - aEb, 0, 2 * Math.PI), aEI[aC].stroke(), a2H(aEI[aC], 0, 0, j, aEb, .3, 0 === aC)
			}()
	}, this.a2A = function() {
		return -jS / j3
	}, this.a2B = function() {
		return -jT / j3
	}, this.oR = function(aEO, j8) {
		jS = j3 * aEO - j8
	}, this.oS = function(aEP, j9) {
		jT = j3 * aEP - j9
	}, this.hz = function(aEN, aAr) {
		return aE.oF || ! function(aEN, aAr) {
			return Math.pow(aEN - (fs + j / 2), 2) + Math.pow(aAr - (fu + j / 2), 2) < j * j / 4 || Math.pow(aEN - (fs + j / 2), 2) + Math.pow(aAr - (fu + 2 * j), 2) < j * j / 4
		}(aEN, aAr) || bm.buffer.data[8].value ? (aI.oU() && (this.oH = !0, aEJ = aEN, aEK = aAr), !1) : aAr < fu + 1.25 * j ? this.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5m = function(aEN, aAr) {
		var aEQ, aER, jB, jE;
		return !aI.oU() || (aEQ = jS, aER = jT, jS += jB = aEJ - aEN, jT += jE = aEK - aAr, ag.a5m(jB, jE), this.aES(), aEJ = aEN, aEK = aAr, aEQ !== jS) || aER !== jT
	}, this.a5p = function(mO, mP, deltaY) {
		var oO;
		if (aI.oU()) {
			if (0 < deltaY) oO = (oO = 500 / (500 + deltaY)) < .5 ? .5 : oO;
			else {
				if (!(deltaY < 0)) return !1;
				oO = 2 < (oO = (500 - deltaY) / 500) ? 2 : oO
			}
			this.aET(mO, mP, oO), bi.e2 = !0
		}
		return !0
	}, this.aET = function(fs, fu, fP) {
		var a6f;
		fP = a6f = (a6f = 1024 < (a6f = fP) * j3 ? 1024 / j3 : a6f) * j3 < .125 ? .125 / j3 : a6f, ag.zoom(fP, fs, fu),
			function(a6f, mO, mP) {
				j3 *= a6f, jS = (jS + mO) * a6f - mO, jT = (jT + mP) * a6f - mP, aT.aES()
			}(fP, fs, fu)
	}, this.aES = function() {
		var aEW = i.j / 16,
			aEX = 0,
			aEY = i.k / 16,
			aEZ = 0;
		jS < -i.j + aEW && (aEX = -i.j + aEW - jS), jS > j3 * bV.fw - aEW && (aEX = j3 * bV.fw - aEW - jS), jT < -i.k + aEY && (aEZ = -i.k + aEY - jT), jT > j3 * bV.fx - aEY && (aEZ = j3 * bV.fx - aEY - jT), jS += aEX, jT += aEZ, bd.oT(), ag.aEa(
			aEX, aEZ)
	}, this.aDl = function() {
		fs = i.j - j - bf.gap, fu = Math.floor(i.k / 2 - 1.25 * j)
	}, this.zD = function() {
		bm.buffer.data[8].value || (zE.drawImage(aEH[0], fs, fu), zE.drawImage(aEH[1], fs, Math.floor(fu + 3 * j / 2)))
	}
}

function cT() {
	var h, aEc, aEd, aEe, gap, aEf, aEg, aEh, aEi, aEj, aAC, aEk, hq, aEl, aCH, aEm, aEn;

	function aEr() {
		aEe = Math.floor(.2 * (a1.a2.j1() ? .07 : .035) * i.j2), aEe = aAo(a1.a2.j1() ? 3 : 1, aEe);
		var aEu = i.j / (h.length + gap);
		aEe = aEe < aEu ? aEu : aEe, aCH = Math.floor((1 - gap) * aEe), aEc = 0, aEv()
	}

	function aEv() {
		aEc = (aEc = aEc < -20 ? -20 : aEc) > (h.length - 15) * aEe ? (h.length - 15) * aEe : aEc, aEg = Math.floor(aEc / aEe), aEh = (aEh = aEg + Math.floor(i.j / aEe)) > h.length - 1 ? h.length - 1 : aEh, aEg = (aEg = aEh < aEg ? aEh : aEg) < 0 ?
			0 : aEg;
		var m4 = aEh;
		aEf = aEd / h[m4];
		for (var aC = aEh - 1; aEg <= aC; aC--) h[aC] > h[m4] && (m4 = aC, aEf = aEd / Math.pow(h[aC], aEl))
	}

	function aEy(fs) {
		fs = Math.floor((aEc + i.j - fs - gap * aEe) / aEe);
		return (fs = fs < -1 ? -1 : -1 === fs ? 0 : fs > h.length - 1 ? -1 : fs) !== aEi && (aEi = fs, -1 === aEm && 0 === aEi && aU.aEo && (aEm = setInterval(aEz, 100)), 1)
	}

	function aF0(aC) {
		var aF2 = Math.floor(aEf * Math.pow(h[aC], aEl));
		zE.fillRect(aEc + i.j - (aC + 1) * aEe, i.k - aF2, aCH, aF2)
	}

	function aEz() {
		var hJ;
		0 !== (aEi = 8 === ab.a5P() ? -1 : aEi) ? (aEn = (new Date).getTime(), clearInterval(aEm), aEm = -1) : (hJ = h[1] / 864e3, -1 !== aEn && (hJ += ((new Date).getTime() - aEn) * h[1] / 864e5, aEn = -1), 0 < hJ && (h[0] += Math.floor(hJ), bi
			.e2 = !0))
	}
	this.aEo = !1, this.dv = function() {
		aEn = aEm = -1, aEi = -(aEl = 1), this.aEp = !1, hq = 0, aEk = new Date, aEc = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aEd = Math.floor(.15 * i.k), aEj = (aEj = Math.floor((a1.a2.j1() ? .018 : .0137) * i.j2)) < 2 ? 2 : aEj, aAC = bD.th.vG(1, aEj), aEr()
	}, this.aEs = function(aEt) {
		var aC;
		for (this.aEo = !0, aC = 0; aC < aEt.length; aC++) h.unshift(aEt[aC]);
		aEr(), bi.e2 = !0
	}, this.aEw = function() {
		aEv()
	}, this.a5m = function(fs, fu) {
		fu > i.k - .6 * aEd ? this.aEp ? fs !== hq && (aEc += fs - hq, hq = fs, aEv(), aEy(fs), this.aEp = -1 !== aEi, bi.e2 = !0) : aEy(fs) && (bi.e2 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aEi && (this.aEp = !1, aEi = -1, bi.e2 = !0)
	}, this.a5p = function(fs, deltaY) {
		-1 !== aEi && (aEc += Math.floor(deltaY), aEv(), aEy(fs), bi.e2 = !0)
	}, this.hz = function(fs, fu) {
		this.a5m(fs, fu), -1 !== aEi && (hq = fs, this.aEp = !0)
	}, this.a6B = function() {
		-1 !== aEi && (this.aEp = !1)
	}, this.zD = function() {
		zE.fillStyle = bE.qW;
		for (var aF3, month, em, vw, aF6, aF7, oD, aF8, aF9, aC = aEh; aEg <= aC; aC--) aF0(aC);
		this.aEo && 0 === aEg && (zE.fillStyle = bE.r5, aF0(0)), -1 !== aEi && (zE.fillStyle = bE.qV, aF0(aEi)), -1 !== aEi && (zE.font = aAC, bD.th.textBaseline(zE, 2), (em = new Date).setTime(aEk.getTime() - 1e3 * aEi * 60 * 60 * 24), month =
			"month", aF3 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(em), aF3 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(em)), aF3 = aF3 + ", " + em.getUTCDate() + " " + month + " " + em.getFullYear(), month = 1 === h[aEi] ? L(127) : L(128), month = bD.pf.a3N(h[aEi]) + " " + month, em = Math.floor(zE.measureText(aF3).width), vw = Math
			.floor(zE.measureText(month).width), aF6 = Math.floor(.5 * (em + aEj)), aF7 = (aF7 = aEc + i.j - (aEi + 1) * aEe) < aF6 ? aF6 : aF7 > i.j - aF6 ? i.j - aF6 : aF7, oD = i.k - Math.floor(aEf * Math.pow(h[aEi], aEl)), aF8 = Math
			.floor(1.1 * aEj), aF9 = oD > i.k - aF8 ? i.k - aF8 : oD, zE.fillStyle = bE.qQ, zE.fillRect(i.j - vw - aEj, aF9 - aF8, vw + aEj, aF8), zE.fillRect(aF7 - aF6, i.k - aF8, em + aEj, aF8), zE.fillStyle = bE.qT, bD.th.textAlign(zE, 2),
			zE.fillText(month, Math.floor(i.j - .5 * aEj), aF9), bD.th.textAlign(zE, 1), zE.fillText(aF3, aF7, i.k), zE.strokeStyle = bE.qX, zE.lineWidth = 1, zE.beginPath(), zE.moveTo(0, oD), zE.lineTo(i.j, oD), zE.closePath(), zE.stroke())
	}
}

function cU() {
	var aAC, j, fu, aFA, aFB, aFC, canvas, p9, aC4, tD, aFD, aFE, aFF, aFG;
	this.fs = 0, this.k = 0, this.dv = function() {
		aFC = aE.a8n, aFE = "rgba(0,100,0,0.8)", aFF = "rgba(150,0,0,0.8)", aC4 = aFD = !0, tD = ah.hn[aE.fV], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.j1() ? .305 : .24) * i.j2), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), aAC = bD.th.vG(1, Math.floor(.8 * this.k)), aFB = bD.th.vG(1, Math.floor(.45 * this.k)), aFG = Math.floor(.5 * this.k), bV
			.aBw.font = aAC, fu = bf.gap, aFA = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p9 = canvas.getContext("2d", {
				alpha: !0
			}), bD.th.textBaseline(p9, 1), bD.th.textAlign(p9, 1), this.aFH()
	}, this.aCg = function() {
		return a1.a2.j1() && i.j < 1.2 * i.k
	}, this.aDl = function() {
		this.aCg() ? this.fs = i.j - j - bf.gap : this.fs = Math.floor(aW.aFI() + (i.j - aW.aFI() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nX = function() {
		aC4 && (aC4 = !1, this.aFH())
	}, this.aFH = function() {
		p9.font = aAC, p9.clearRect(0, 0, j, this.k), p9.fillStyle = aFD ? aFE : aFF, p9.fillRect(0, 0, j, this.k), p9.fillStyle = bE.qV;
		var ev = this.aFJ(),
			aFL = (this.aFK(), p9.fillStyle = ah.hn[aE.fV] >= af.kp(aE.fV) ? bE.r2 : bE.qT, bD.pf.a3N(tD)),
			aFL = (p9.fillText(aFL, Math.floor(j / 2), aFG), p9.measureText(aFL).width),
			aFM = (p9.font = aFB, p9.fillStyle = 9 === ev ? bE.rh : bE.qT, af.aFN),
			aFO = "+" + aFM,
			vw = p9.measureText(aFO).width,
			aFP = Math.floor(this.k / 12),
			aFL = .5 * (j + aFL) + aFP;
		(aFL + vw + aFA <= j || 1e3 <= aFM && (aFO = "+" + Math.floor(aFM / 1e3) + "K", aFL + (vw = p9.measureText(aFO).width) + aFA <= j)) && p9.fillText(aFO, Math.floor(aFL + .5 * vw), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p9.fillText(9 - ev, Math.floor(2 * aFA + aFP), Math.floor(.3 * this.k)), p9.fillStyle = bE.qT, p9.fillRect(0, 0, j, 1), p9.fillRect(0, 0, 1, this.k), p9.fillRect(0, this.k - 1, j, 1), p9.fillRect(j - 1, 0, 1,
				this.k)
	}, this.aFJ = function() {
		var ev = bi.l6() % 100,
			a1C = (ev = 9 - bO.gC(ev -= ev % 10, 10), Math.floor(ev * (this.k - aFA) / 9));
		return p9.fillRect(0, a1C, aFA, this.k - a1C), p9.fillRect(j - aFA, a1C, aFA, this.k - a1C), ev
	}, this.aFK = function() {
		p9.fillRect(aFA, this.k - aFA, Math.floor((j - 2 * aFA) * ah.hn[aE.fV] / aFC), aFA)
	}, this.eq = function() {
		var hJ = aE.fV;
		bD.h7.hy(hJ) && (hJ = ah.hn[hJ] - ah.a7q[hJ], tD !== hJ ? (aFC = aAo(hJ, aFC), aFD = tD < hJ && 10 <= hJ, tD = hJ, aC4 = !0) : bi.l6() % 10 == 9 && (aC4 = !0))
	}, this.zD = function() {
		0 === ah.nl[aE.fV] || aE.iB || 2 === ah.a7h[aE.fV] || zE.drawImage(canvas, this.fs, fu)
	}
}

function cV() {
	var aFQ, aFR, aFS, aFT, aFU, aFV, aFW, aFX, aFY, aFZ, aFa, aFb, aFc, aFd, aFe, aFf, aFg, aFh, aFi, aFj, aFk, aFl, position, aFm, aFn, aFo, aFp, aFq, aFr = 1,
		aFs = 1,
		aFt = "";

	function aFv() {
		aFW.clearRect(0, 0, aFQ, aCv), aFW.fillStyle = aFq ? bE.rP : bE.rL, aFW.fillRect(0, 0, aFQ, aFb), aFW.fillStyle = bE.qP, aFW.fillRect(0, aFb, aFQ, aCv - aFb), ku[aE.fV] >= position && aFx(ku[aE.fV] - position, bE.qs), 0 !== ku[aE.fV] && 0 ===
			position && aFx(0, bE.rY), -1 !== aFl && aFx(aFl, bE.qU), aFW.fillStyle = bE.qT, aFW.fillRect(0, aFb, aFQ, 1), aFW.fillRect(0, 0, aFQ, bf.a34), aFW.fillRect(0, 0, bf.a34, aCv), aFW.fillRect(aFQ - bf.a34, 0, bf.a34, aCv), aFW.fillRect(0,
				aCv - bf.a34, aFQ, bf.a34), aFW.font = aFR, bD.th.textBaseline(aFW, 1), bD.th.textAlign(aFW, 1), aFW.fillText(aFt, Math.floor(aFQ / 2), Math.floor(aFZ + aFS / 2));
		var g4, hK = ku[aE.fV] < position + aFU - 1 ? 1 : 2;
		for (aFW.font = aFT, bD.th.textAlign(aFW, 0), g4 = aFU - hK; 0 <= g4; g4--) aFy(mk[g4 + position]), aFz(g4, g4 + position, mk[g4 + position]);
		for (bD.th.textAlign(aFW, 2), g4 = aFU - hK; 0 <= g4; g4--) aFy(mk[g4 + position]), aG0(g4, mk[g4 + position]);
		2 == hK && (aFy(aE.fV), bD.th.textAlign(aFW, 0), aFz(aFU - 1, ku[aE.fV], aE.fV), bD.th.textAlign(aFW, 2), aG0(aFU - 1, aE.fV)), 0 === position && (hK = .7 * aFc / ac.get(4).height, aFW.setTransform(hK, 0, 0, hK, Math.floor(aFd + .58 * aFc +
			.5 * hK * ac.get(4).width), Math.floor(aFZ + aFS + .4 * aFc)), aFW.imageSmoothingEnabled = !0, aFW.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height / 2)), aFW.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aFy(player) {
		aE.il && (aFW.fillStyle = bj.aG2[bj.aG3[player]])
	}

	function aFx(aC, aG4) {
		aFW.fillStyle = aG4, aC = aFU - 1 < aC ? aFU - 1 : aC;
		aG4 = Math.floor((aC === aFU - 1 ? 2 : 0 === aC ? 1.15 : 1) * aFc), aG4 = aC === aFU - 2 ? Math.floor(aFb + 9.15 * aFc) - Math.floor(aFb + 8.15 * aFc) : aG4;
		aFW.fillRect(0, Math.floor(aFb + (aC + (0 === aC ? 0 : .15)) * aFc), aFQ, aG4)
	}

	function aFz(a0I, a83, aC) {
		aFW.fillText(aFh[a83], aFd, Math.floor(aFZ + aFS + (a0I + .5) * aFc)), 1 === ah.a7h[aC] && (aFW.font = "italic " + aFT);
		a83 = Math.floor(aFZ + aFS + (a0I + .5) * aFc);
		aFW.fillText(ah.a2Y[aC], aFe, a83), 0 !== ah.a7h[aC] && (aFW.font = aFT), aC < aE.l9 && 2 !== ah.a7h[aC] || aFW.fillRect(aFe, a83 + .35 * aFr, aFg[aC], Math.max(1, .1 * aFr))
	}

	function aG0(a0I, aC) {
		aFW.fillText(ah.hZ[aC], aFf, Math.floor(aFZ + aFS + (a0I + .5) * aFc))
	}

	function aGE(fu) {
		return (fu -= bf.gap + aFb) < 0 ? Math.floor(fu / aFc) - 1 : fu < (aFU - 1) * aFc ? Math.floor(fu / aFc) : fu < aCv - aFb ? aFU - 1 : (fu -= aCv - aFb, aFU + Math.floor(fu / aFc))
	}

	function a33(fs, fu) {
		return fs >= bf.gap && fs < bf.gap + aFQ && fu >= bf.gap && fu < bf.gap + aCv
	}
	this.dv = function() {
		var aC;
		for (u.z.vj[0] = 0, aFp = aFo = aFm = 0, aFq = aFn = !1, aFl = -1, aFU = a1.a2.j1() ? 6 : 10, aFs = (position = 0) === (aFs = bm.buffer.data[11].value) ? 10 : 1 === aFs ? 5 : 1, aFk = !1, aFi = new Uint16Array(aFU + 1), aFj =
			new Uint32Array(aFU + 1), aFY = aE.fi, mk = new Uint16Array(aFY), ku = new Uint16Array(aFY), aC = aFY - 1; 0 <= aC; aC--) mk[aC] = aC, ku[aC] = aC;
		this.resize(!0), aFg = new Uint16Array(aE.fi);
		var aFu = Math.floor(aFQ - aFe - aFd - aFX);
		for (aFh = new Array(aE.fi), aFW.font = aFT, aC = aE.fi - 1; 0 <= aC; aC--) aFh[aC] = aC + 1 + ".", ah.a2Y[aC] = bD.p9.a7L(ah.a4x[aC], aFT, aFu), aFg[aC] = Math.floor(aFW.measureText(ah.a2Y[aC]).width);
		aFv()
	}, this.resize = function(dv) {
		if (aCv = a1.a2.j1() ? (aFQ = Math.floor(.335 * i.j2), Math.floor(aFU * aFQ / 8)) : (aFQ = Math.floor(.27 * i.j2), Math.floor(aFU * aFQ / 10)), aFQ = Math.floor(.97 * aFQ), (aFV = document.createElement("canvas")).width = aFQ, aFV
			.height = aCv, aFW = aFV.getContext("2d", {
				alpha: !0
			}), aFZ = .025 * aFQ, aFS = .16 * aFQ, aFa = 0 * aFQ, aFb = Math.floor(.45 * aFZ + aFS), aFc = (aCv - aFS - 2 * aFZ - aFa) / aFU, aFR = bD.th.vG(1, Math.floor(.55 * aFS)), aFr = Math.floor((a1.a2.j1() ? .67 : .72) * aFc), aFT = bD.th
			.vG(0, aFr), aFW.font = aFT, aFd = Math.floor(.04 * aFQ), aFe = Math.floor((a1.a2.j1() ? .195 : .18) * aFQ), aFX = Math.floor(aFW.measureText("00920600").width), aFW.font = aFR, aFf = aFQ - aFd, !dv) {
			aFW.font = aFT;
			for (var aC = aE.fi - 1; 0 <= aC; aC--) aFg[aC] = Math.floor(aFW.measureText(ah.a2Y[aC]).width);
			aFv()
		}
		aFt = bD.p9.a7L(L(129), aFR, .96 * aFQ)
	}, this.aFI = function() {
		return aFQ
	}, this.nX = function(c3, aFw) {
		(aFw || aFk && (c3 || bi.l6() % aFs == 0)) && (aFk = !1, aFv())
	}, this.eq = function() {
		! function() {
			for (var g4 = aFY - 1; 0 <= g4; g4--) 0 === ah.nl[mk[g4]] && ! function(g4) {
				var aGC = mk[g4];
				aFY--;
				for (var aC = g4; aC < aFY; aC++) mk[aC] = mk[aC + 1], ku[mk[aC]] = aC;
				mk[aFY] = aGC, ku[mk[aFY]] = aFY
			}(g4)
		}();
		for (var aGA, oU = aFY - 1, g4 = 0; g4 < oU; g4++) ah.hZ[mk[g4]] < ah.hZ[mk[g4 + 1]] && (aGA = mk[g4], mk[g4] = mk[g4 + 1], mk[g4 + 1] = aGA, ku[mk[g4]] = g4, ku[mk[g4 + 1]] = g4 + 1);
		! function() {
			for (var em = aFk, hK = (aFk = !0, ku[aE.fV] >= aFU - 1 ? aFU - 2 : aFU - 1), aC = hK; 0 <= aC; aC--)
				if (aFi[aC] !== mk[aC] || aFj[aC] !== ah.hZ[mk[aC]]) return;
			(hK != aFU - 2 || aFi[aFU] === ku[aE.fV] && aFj[aFU] === ah.hZ[aE.fV]) && (aFk = em)
		}();
		for (var aC = aFU - 1; 0 <= aC; aC--) aFi[aC] = mk[aC], aFj[aC] = ah.hZ[mk[aC]];
		aFi[aFU] = ku[aE.fV], aFj[aFU] = ah.hZ[aE.fV]
	}, this.hz = function(fs, fu) {
		return !!a33(fs, fu) && (0 <= (fs = aGE(fu)) ? (aFm = bi.el, aFn = !0, aFo = aFp = fs, bM.a6P() && (fs = aE7(-1, aFp, aFU), aFl !== (fs = fs === aFU ? -1 : fs)) && (aFl = fs, aFv(), bi.e2 = !0)) : (aFq && (aFq = !1, aFv(), bi.e2 = !0), u
			.v(10, 0, new aGF({
				aGG: 1
			}))), !0)
	}, this.a5m = function(fs, fu) {
		var em, aGD = aGE(fu),
			fs = a33(fs, fu),
			fu = !(!(aGD < 0 && fs) || bM.a6P());
		return aFn ? (em = position, (position = aE7(0, position += aFo - aGD, aE.fi - aFU)) !== em ? (aFq = fu, aGD = aE7(-1, aFo = aGD, aFU), aFl = aGD = aGD !== aFU && fs ? aGD : -1, aFv(), bi.e2 = !0) : aFq !== fu && (aFq = fu, aFv(), bi
			.e2 = !0), !0) : (aGD = (aGD = aE7(-1, aGD, aFU)) === aFU || !fs || bM.a6P() ? -1 : aGD, (aFl !== aGD || aFq !== fu) && (aFl = aGD, aFq = fu, aFv(), bi.e2 = !0))
	}, this.a6B = function(fs, fu) {
		if (!aFn) return !1;
		aFn = !1;
		var aGD = aGE(fu);
		return bM.a6P() && -1 !== aFl && (aFl = -1, aFv(), bi.e2 = !0), bi.el - aFm < 350 && aFp === aGD && -1 !== (aGD = (aGD = aE7(-1, aGD, aFU)) !== aFU && a33(fs, fu) ? aGD : -1) && (fs = mk[aGD + position], aGD === aFU - 1 && ku[aE.fV] >=
			position + aFU - 1 && (fs = aE.fV), 0 !== ah.nl[fs]) && (!aE.iB || aE.lT || aE.hu || aE.hv) && aI.o7(fs, 800, !1, 0), !0
	}, this.a5p = function(fs, fu, deltaY) {
		var aGJ;
		return !(aFn || aE.oF || (aGJ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a33(fs, fu)) || (fs = (fs = aE7(-1, aGE(fu), aFU)) === aFU || bM.a6P() ? -1 : fs, 0 < deltaY ? position < aE.fi - aFU && (position += Math.min(aE.fi - aFU -
			position, aGJ), aFl = fs, aFv(), bi.e2 = !0) : 0 < position && (position -= Math.min(position, aGJ), aFl = fs, aFv(), bi.e2 = !0), 0))
	}, this.zD = function() {
		zE.drawImage(aFV, bf.gap, bf.gap)
	}
}

function cW() {
	var canvas, p9, fs, fu, aF2, aGK, gap, aGL, fontSize, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGT, aGU;

	function aGY() {
		p9.clearRect(0, 0, aX.j, aX.k), p9.fillStyle = bE.qQ, p9.fillRect(0, 0, aX.j, aX.k), p9.fillStyle = bE.qn, fP = 0 < aGS ? aGS : aGP[4] / 1e4, p9.fillRect(0, aX.k - aF2 - 1, Math.floor(fP * aX.j), aF2), p9.fillStyle = bE.qT, p9.fillRect(0, 0,
			aX.j, 1), p9.fillRect(0, 0, 1, aX.k), p9.fillRect(aX.j - 1, 0, 1, aX.k), p9.fillRect(0, aX.k - 1, aX.j, 1), p9.fillRect(0, aX.k - aF2 - 1, aX.j, 1);
		for (var fP, aGa, em = 0, aC = 0; aC < aGO.length; aC++) aGQ[aC] ? (bD.th.textAlign(p9, 0), aGa = Math.floor((aGK - aF2 + 2 * aGL) * (aC - em + 1) / (aGO.length + 1) - .7 * aGL), p9.fillText(aGO[aC], gap, aGa), bD.th.textAlign(p9, 2), 5 ===
			aC && 0 !== ah.nl[aE.fV] && ah.hn[aE.fV] >= af.kp(aE.fV) ? (p9.fillStyle = bE.rW, p9.fillText(aGW(aC), aX.j - gap, aGa), p9.fillStyle = bE.qT) : p9.fillText(aGW(aC), aX.j - gap, aGa)) : em++
	}

	function aGW(aC) {
		return aC < 3 ? aGP[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pf.a8Q(aGP[aC] / 100, 2) : aC < 7 ? bD.pf.a3N(aGP[aC]) : aC === 7 ? aX.aGb(aGP[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hZ, aE.fV) : __fx.utils.getDensity(aE.fV)
	}

	function aGV() {
		ah.hZ[aE.fV] !== aGP[6] && (aGP[6] = ah.hZ[aE.fV], aGM++)
	}
	this.dv = function() {
		aGS = aGT = 0, (aGN = new Array(8))[0] = L(130), aGN[1] = aE.lT ? L(33) : L(131), aGN[2] = L(132), aGN[3] = L(133), aGN[4] = L(134), aGN[5] = L(135, 0, "Interest"), aGN[6] = L(136), aGN[7] = L(137),
			aGN.push("Max Troops", "Density"), // add aGN
			(aGO = new Array(aGN.length)).fill(""), (aGP = new Array(aGN.length))[0] = aE.lT ? 0 : aE.l9, aGP[1] = aE.lT ? am.lf : aE.lV, aGP[2] = aE.a4H, aGP[3] = 0, aGP[4] = bO.gC(1e4 * ah.hZ[0], Math.max(aE.kt, 1)), aGP[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.gC(700 * aE.data.iIncomeValue, 64) : bO.gC(700 * aE.data.iIncomeData[aE.fV], 64), aGP[6] = 0, aGV(), aGP[7] = 0, aGR = aGW(6), (aGQ = new Array(aGN.length)).fill(!0), aGU = 0, aGU =
			aE.lT ? (aGQ[0] = !1, aGQ[2] = !1, aGQ[3] = !1, 3) : (aGQ[3] = !1, 1), aGM = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.j1() ? .1646 : .126) * 1.25 * i.j2), this.k = Math.floor(1.18 * this.j), aF2 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aGL = .04 * this.j, aGK = this.k, this.k -= Math.floor(aGU * (this.k -
			2 * aF2) / aGN.length), fontSize = Math.floor(.7 * (aGK - aF2) / aGN.length);
		var aAC = bD.th.vG(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(aAC, j) {
				for (var aC = 0; aC < aGO.length; aC++) aGO[aC] = bD.p9.a7L(aGN[aC], aAC, j)
			}((p9 = canvas.getContext("2d", {
				alpha: !0
			})).font = aAC, .575 * this.j), bD.th.textBaseline(p9, 1), p9.lineWidth = 1, this.a8f(), this.aDl(), aV.aDl(), aGY()
	}, this.aDl = function() {
		fs = i.j - this.j - bf.gap
	}, this.aGZ = function() {
		fu = bf.gap
	}, this.a8f = function() {
		fu = bf.gap + (aV.aCg() && 0 !== ah.nl[aE.fV] && !aE.iB ? aV.k + bf.gap : 0)
	}, this.nX = function(c3) {
		(c3 || 100 <= aGM) && (aGM = 0, aGY())
	}, this.a9S = function() {
		return aGP[7]
	}, this.aGb = function(value) {
		var m4 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * m4) / 1e3);
		return value < 10 ? m4 + ":0" + value : m4 + ":" + value
	}, this.eq = function() {
		var aGm, per;
		aGQ[0] && aE.a4I - aE.a4H !== aGP[0] && (aGP[0] = aE.a4I - aE.a4H, aGM++), am.lf - aGP[0] !== aGP[1] && (aGP[1] = am.lf - aGP[0], aGM++), this.nO(), (aGm = af.aGn(aE.fV)) !== aGP[5] && (aGP[5] = aGm, aGM++), aGV(), aGP[7] += bi.aGo, aGm =
			aGW(7), aGR !== aGm && (aGR = aGm, aGM += 100), aGm = aE.il ? bk.lg() : ah.hZ[mk[0]], per = bO.gC(1e4 * aGm, Math.max(aE.kt, 1)), aGP[3] = aGm, aGP[4] !== per && (aGM++, aGP[4] = per), 8 === aE.lR && !bU.a3i.a45() && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h7.hy(aC)) return bU.a3i.a41(), 1;
				return
			}() || aGP[3] < aE.kt || ! function() {
				for (var aC = am.lf - 1; 0 <= aC; aC--)
					if (0 < ah.hD[am.lk[aC]].length) return;
				return 1
			}() || bQ.ly.aGl().length || aE.il && bk.lg(1) < aE.kt || bU.a3i.a42()
	}, this.nO = function() {
		aGQ[2] && aE.a4H !== aGP[2] && (aGP[2] = aE.a4H, aGM += 2 === aE.a48 ? 100 : 1)
	}, this.aGi = function() {
		return aGP[3] === aE.kt
	}, this.aGp = function(aC) {
		var wC, aGq, em;
		return 2 !== aE.a48 && (aC % 2 == 1 && (aW.nX(1, 1), bi.e2 = !0), aC === aE.a8q ? (aGS = 0, aGY(), !1) : (-1 !== aC || 0 !== aGT) && (aGq = aGS, aGS = aE.hu ? aC / aE.a8q : (em = performance.now(), 0 <= aC && (wC = em - 392 * aC, aGT =
			0 === aC || wC < aGT ? wC : aGT), 1 < (aGS = (em - aGT) / (392 * aE.a8q)) ? 1 : aGS), aGY(), aGS !== aGq))
	}, this.zD = function() {
		zE.drawImage(canvas, fs, fu)
	}
}

function cX() {
	var ib, aGr, j, k, aDr, aGs, aGt, aCh, canvas, ny, aGu;

	function a2B() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dv = function() {
		aGu = ib = !1, aDr = .61, aGs = .07, aGt = .09, ny = aCh = k = 0
	}, this.resize = function() {
		var p9, oC, ev, aH0, aH1, aAH;
		ib && (j = aGv(j = a1.a2.j1() ? Math.floor(.69 * i.j2) : Math.floor(.5 * i.j2), aAo(i.j - 2 * bf.gap, 10)), j = aGv(j, Math.floor(3.57 * aAo(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p9 = canvas.getContext("2d", {
				alpha: !0
			}), oC = Math.floor(1 + k / 40), p9.clearRect(0, 0, j, k), p9.fillStyle = bE.qQ, p9.fillRect(oC, oC, j - 2 * oC, k - 2 * oC), p9.lineJoin = "bevel", p9.lineWidth = 2 * oC, p9.strokeStyle = bE.qT, p9.strokeRect(oC, oC, j - 2 * oC,
				k - 2 * oC), p9.imageSmoothingEnabled = !1, ev = ac.get(aGr), aH0 = ev.width, aAH = (1 === aGr ? .85 : 21 === aGr ? .666 : .9) * aDr * k / (aH1 = ev.height), p9.setTransform(aAH, 0, 0, aAH, Math.floor((j - aAH * aH0) / 2),
				Math.floor((k - aAH * aH1) / 2)), p9.drawImage(ev, 0, 0), p9.setTransform(1, 0, 0, 1, Math.floor(j - aGt * k - aGs * k - oC), Math.floor(oC + aGs * k)),
			function(p9, fl) {
				p9.lineWidth = Math.floor(1 + k / 80), p9.strokeStyle = bE.qT, p9.beginPath(), p9.moveTo(0, 0), p9.lineTo(fl, fl), p9.moveTo(0, fl), p9.lineTo(fl, 0), p9.stroke()
			}(p9, Math.floor(aGt * k)), p9.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gD, aGx, aDC, aGy, aGz) {
		ib || aE.hv || aGy && aGu || (aGr = aDC ? 21 : gD ? 1 : 2, ib = aGu = !0, this.resize(), aGz || (aM.ug(), aS.a4J()), ny = bi.el, aCh = aGx ? 1 : 0)
	}, this.a4K = function(gD) {
		ib && aGr === (gD ? 1 : 2) || (ib = !1, this.show(gD, !1))
	}, this.eq = function() {
		!ib || 1 <= aCh || (aCh = 1 < (aCh += 5e-4 * (bi.el - ny)) ? 1 : aCh, ny = bi.el, bi.e2 = !0)
	}, this.hz = function(fs, fu) {
		return !(!ib || aCh <= 0 || (fs -= Math.floor((i.j - j) / 2), fu -= a2B(), fs < 0) || fu < 0 || j < fs || k < fu || (j - k / 3 < fs && fu < k / 3 && (ib = !1, bi.e2 = !0), 0))
	}, this.zD = function() {
		!ib || aCh <= 0 || (zE.globalAlpha = aCh, zE.drawImage(canvas, Math.floor((i.j - j) / 2), a2B()), zE.globalAlpha = 1)
	}
}

function dY() {
	var aH3, aH4 = new Uint8Array(5),
		aH5 = new Uint8Array(5);
	this.aH6 = new aH7, this.dv = function() {
		for (var gD = bm.buffer.data[119].value, aC = 0; aC < aH4.length; aC++) aH4[aC] = (gD >> 2 * aC) % 4
	}, this.a93 = function() {
		aH3 = [L(138), "", L(139, [ba.aH8[28]]), L(140, [ba.aH8[26]]), L(141, [ba.aH8[0]])], this.aH6.dv()
	}, this.eq = function() {
		this.aH6.eq()
	}, this.a9s = function(id) {
		1 < id && bM.uA() || ! function(eU) {
			if (3 === aH4[eU] || 1 === aH5[eU]) return;
			if (aH5[eU] = 1, !(Math.random() < .6)) {
				aH4[eU]++;
				for (var gD = 0, aC = 0; aC < aH4.length; aC++) gD += aH4[aC] << 2 * aC;
				bm.s0.q6(119, gD)
			}
			return 1
		}(id) || aO.aAu(aH3[id])
	}
}

function aH7() {
	var aHA;
	this.dv = function() {
		aHA = !1
	}, this.eq = function() {
		var hJ;
		if (function() {
				if (!aHA) {
					if (bi.l6() % 30 != 9) return;
					if (!bD.h7.mg(90)) return;
					aHA = !0
				}
				return 1
			}() && (! function() {
				var qA = aO.aBJ(956);
				if (qA) {
					if (bD.h7.m7(qA.player)) return 1;
					aO.aBI(956, 0)
				}
				return
			}() && (-1 === (hJ = (aE.il ? function() {
				var id = bk.li(),
					fl = am.lf;
				if (bj.lW[id])
					for (var xJ = am.lk, fj = bj.fj, aC = 0; aC < fl; aC++) {
						var hJ = xJ[aC];
						if (fj[hJ] !== id) return hJ
					} else if (1 < fl) return mk[fl - 1];
				return -1
			} : function() {
				for (var aHI = am.lf, m3 = am.lk, aHJ = ku, aC = 0; aC < aHI; aC++) {
					var hJ = m3[aC];
					if (0 !== aHJ[hJ]) return hJ
				}
				return -1
			})()) ? ! function() {
				var qA = aO.aBJ(957);
				if (qA && qA.aAk) {
					if (ad.fc(qA.aAk.fX << 2)) return 1;
					aO.aBI(957, 0)
				}
				return
			}() : (aO.a2X(0, L(142, [ah.a2Y[hJ]]), 956, hJ, bE.qT, bE.qQ, -1, !0), 0)))) {
			var fl = ap.jn.mJ;
			if (0 !== fl)
				for (var buffer = ap.jn.buffer, aC = 0; aC < fl; aC++) {
					var fX = buffer[aC];
					if (ad.fc(fX << 2)) return void aO.a2X(0, L(143, [bP.ft(fX), bP.fv(fX)]), 957, 0, bE.qT, bE.qQ, -1, !0, void 0, {
						g4: 1,
						fX: fX
					})
				}
		}
	}
}

function dZ() {
	this.aHK = new aHL, this.dv = function() {
		this.aHK.resize()
	}
}

function aHL() {
	this.resize = function() {
		var aC, aHM = document.head.querySelector("style#ss");
		if (aHM)
			for (aC = aHM.sheet.cssRules.length - 1; 0 <= aC; aC--) aHM.sheet.deleteRule(0);
		else(aHM = document.createElement("style")).id = "ss", document.head.appendChild(aHM);
		var aDy = "::-webkit-scrollbar",
			aHN = bD.th.tq(bf.vR),
			io = bD.th.tq(Math.max(bD.th.ui(.012), 8));
		try {
			aHM.sheet.insertRule(aDy + "{width:" + io + ";height:" + io + ";}", aHM.sheet.cssRules.length), aHM.sheet.insertRule(aDy + "-thumb{background-color:white;}", aHM.sheet.cssRules.length), aHM.sheet.insertRule(aDy +
				"-track{background:" + bE.qP + ";}", aHM.sheet.cssRules.length), aHM.sheet.insertRule(aDy + "-track:horizontal{border-top:" + aHN + " solid white;}", aHM.sheet.cssRules.length), aHM.sheet.insertRule(aDy +
				"-track:vertical{border-left:" + aHN + " solid white;}", aHM.sheet.cssRules.length), aHM.sheet.insertRule(aDy + "-button{display:none;}", aHM.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aHM.sheet.cssRules.length - 1; 0 <= aC; aC--) aHM.sheet.deleteRule(0)
		}
	}
}

function dt() {
	this.data = new aHO, this.aHP = new aHQ
}

function aHO() {
	var aHR = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aHR[id]
	}
}

function ua(id) {
	this.canvas = document.createElement("canvas");
	var aHS = this.canvas.getContext("2d"),
		aHT = 0;
	this.resize = function(size) {
		var aHU = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.th.tq(size), aHU !== aHT && (aHT = aHU, this.canvas.width = this.canvas.height = aHU, c1.aHP.zD(aHS, c1.data.get(id), aHU))
	}
}

function aHQ() {
	this.zD = function(iu, h, size) {
		var id, pb, oO = size / 100,
			fl = h.length,
			aC = 0;
		for (iu.clearRect(0, 0, size, size), iu.lineJoin = "round", iu.lineCap = "round"; aC < fl;)
			if (0 === (id = h[aC++])) iu.beginPath();
			else if (1 === id) iu.moveTo(oO * h[aC], oO * h[aC + 1]), aC += 2;
		else if (2 === id) iu.lineTo(oO * h[aC], oO * h[aC + 1]), aC += 2;
		else if (3 === id) iu.closePath();
		else if (4 === id) iu.fill();
		else if (5 === id) iu.stroke();
		else if (6 === id) pb = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", iu.fillStyle = iu.strokeStyle = pb, aC += 4;
		else if (7 === id) iu.lineWidth = oO * h[aC], aC += 1;
		else if (8 === id) iu.arc(oO * h[aC], oO * h[aC + 1], oO * h[aC + 2], h[aC + 3] * Math.PI / 180, h[aC + 4] * Math.PI / 180), aC += 5;
		else {
			if (9 === id) iu.rect(oO * h[aC], oO * h[aC + 1], oO * h[aC + 2], oO * h[aC + 3]);
			else {
				if (10 !== id) return;
				iu.quadraticCurveTo(oO * h[aC], oO * h[aC + 1], oO * h[aC + 2], oO * h[aC + 3])
			}
			aC += 4
		}
	}
}

function dX() {
	this.aHV = !1, this.oc = !1, this.a8j = !1, this.aHW = [0, 0, 0, 0], this.render = function() {
		var oC, oD, oP, oQ;
		this.a8j = this.a8j || this.oc, (this.oc || this.aHV && this.a8j) && (oC = bd.aHX[0], oD = bd.aHX[1], oP = bd.aHX[2], oQ = bd.aHX[3], oC = oC < this.aHW[0] ? this.aHW[0] : oC, oD = oD < this.aHW[1] ? this.aHW[1] : oD, oP = oP > this.aHW[
				2] ? this.aHW[2] : oP, oQ = oQ > this.aHW[3] ? this.aHW[3] : oQ, this.oc = !1, this.aHV = !1, oC === this.aHW[0] && oD === this.aHW[1] && oP === this.aHW[2] && oQ === this.aHW[3] ? this.a8k() : oC <= oP && oD <= oQ && a95
			.putImageData(a96, 0, 0, oC, oD, oP - oC + 1, oQ - oD + 1))
	}, this.a8k = function() {
		this.a8j && this.aHW[2] >= this.aHW[0] && this.aHW[3] >= this.aHW[1] && a95.putImageData(a96, 0, 0, this.aHW[0], this.aHW[1], this.aHW[2] - this.aHW[0] + 1, this.aHW[3] - this.aHW[1] + 1), this.a8j = !1
	}, this.a4P = function() {
		this.aHW[2] >= this.aHW[0] && this.aHW[3] >= this.aHW[1] && a95.putImageData(a96, 0, 0, this.aHW[0], this.aHW[1], this.aHW[2] - this.aHW[0] + 1, this.aHW[3] - this.aHW[1] + 1), this.a8j = !1
	}, this.dv = function() {
		var fs, fu;
		this.aHV = !1, this.oc = !1, this.a8j = !1, this.aHW[0] = bV.fw, this.aHW[1] = bV.fx, this.aHW[2] = this.aHW[3] = 0;
		loop: for (fs = 1; fs < bV.fw - 1; fs++)
			for (fu = bV.fx - 2; 1 < fu; fu--)
				if (1 === aHY[ad.a1h(fs, fu) + 2]) {
					this.aHW[0] = fs;
					break loop
				} loop: for (fu = 1; fu < bV.fx - 1; fu++)
			for (fs = bV.fw - 2; 1 < fs; fs--)
				if (1 === aHY[ad.a1h(fs, fu) + 2]) {
					this.aHW[1] = fu;
					break loop
				} loop: for (fs = bV.fw - 2; 0 < fs; fs--)
			for (fu = bV.fx - 2; 1 < fu; fu--)
				if (1 === aHY[ad.a1h(fs, fu) + 2]) {
					this.aHW[2] = fs;
					break loop
				} loop: for (fu = bV.fx - 2; 0 < fu; fu--)
			for (fs = bV.fw - 2; 1 < fs; fs--)
				if (1 === aHY[ad.a1h(fs, fu) + 2]) {
					this.aHW[3] = fu;
					break loop
				}
	}
}

function L(value, aHZ, zm, aHa) {
	var pb = "number" == typeof value ? bA.aHb[value] : value;
	if (zm && bA.aHc() && (pb = zm), !aHZ) return aHa ? pb.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pb;
	for (var fl = aHZ.length, aC = 0; aC < fl; aC++)
		for (var g4 = 0; g4 < 3; g4++) pb = pb.replace("{" + (10 * g4 + aC) + "}", aHZ[aC]);
	return pb
}

function cB() {
	this.data = new aHd;
	var aHe = (new aHf).L84,
		aHh = (this.aHb = aHe, !(this.aHg = "en"));
	this.dv = function() {
		var pb, h;
		aHh = !1, ("en" === (pb = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aHb = aHe, bA.aHg = pb, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pb = bm.buffer.data[146].value,
			(h = bm.ty.zy(pb, !1)).length === pb) && !!bD.tp.a6v(h) && function(h) {
			for (var fl = h.length, k = 0; k < fl; k++) h[k] = h[k].replace("&#39;", "'");
			var aHn = bm.ty.zy(fl, !0);
			if (fl !== aHn.length) return !1;
			if (!bD.tp.a6v(aHn)) return !1;
			for (var m4 = aHe.length, aEt = new Array(m4), aHo = m4 === fl, hE = Math.min(fl, m4), aC = 0; aC < m4; aC++)
				if (aEt[aC] = aHe[aC], aC < fl && aHn[aC] === aEt[aC]) aEt[aC] = h[aC];
				else {
					aHo = !1;
					for (var g5 = 0; g5 < hE; g5++)
						if (aHn[g5] === aEt[aC]) {
							aEt[aC] = h[g5];
							break
						}
				} return bA.aHb = aEt, bA.aHg = bm.buffer.data[12].value, aHo
		}(h)) || (aHh = !0)
	}, this.dx = function() {
		bj.dw(), aF.dw(), bh.dw(), bg.dw(), aP.dv(), br = new eK
	}, this.aHc = function() {
		return this.aHb === aHe || !aHe.length
	}, this.aHp = function() {
		var aHq;
		return !!aHh && (aHh = !1, 0 !== aHe.length) && (aHq = bm.buffer.data[12].value, b1.es.aHr(0, aHq.slice(0, 20)), !0)
	}, this.aHs = function(h) {
		h.length !== aHe.length ? 8 === u.vq && u.a5T().aHt(30, 0, 1) : (this.aHb = h, this.aHg = bm.buffer.data[12].value, bm.s0.q6(145, this.aHg), bm.s0.q6(146, h.length), bm.ty.a04(h, !1), bm.ty.a04(aHe, !0), 8 === u.vq ? u.a5T().aHt(30) :
			0 === ab.a5P() && 5 === u.vq && u.z.aHu())
	}, this.aHv = function() {
		var a07, h = navigator.languages;
		return h && h.length ? (a07 = Math.max(bA.data.aHw(h[0]), 0), 1 === h.length ? [a07, a07] : [a07, Math.max(bA.data.aHw(h[1]), 0)]) : [0, 0]
	}
}

function aHd() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aHx = function() {
		for (var aHy = [], h = this.h, fl = h.length, aC = 0; aC < fl; aC++) aHy.push(h[aC]);
		var aHz = bm.buffer.data[12].zm;
		for (aC = 0; aC < fl; aC++)
			if (aHy[aC] === aHz) {
				aHy.splice(aC, 1), fl--;
				break
			} aHy.sort(), fl++, aHy.unshift(aHz);
		try {
			if ("undefined" == typeof Intl) return aHy;
			for (aC = 0; aC < fl; aC++) {
				var pb = new Intl.DisplayNames([aHy[aC]], {
					type: "language"
				}).of(aHy[aC]);
				pb !== aHy[aC] && (aHy[aC] = aHy[aC] + ": " + pb)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aHy
	}, this.aI1 = function(aI2) {
		for (var pb = bm.buffer.data[12].value, fl = aI2.length, aC = 0; aC < fl; aC++)
			if (pb === aI2[aC].split(":")[0]) return aC;
		return 0
	}, this.aHw = function(aI3) {
		if (aI3 && !(aI3.length < 2)) {
			aI3 = aI3.split("-")[0].toLowerCase();
			for (var h = this.h, fl = h.length, aC = 0; aC < fl; aC++)
				if (aI3 === h[aC]) return aC
		}
		return -1
	}
}

function aHf() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Select image {10}",
		"Select all images matching the reference", "Find All:", "Reference image", "Close", "Reload", "Verify", "Type your message here...", "Send", "Activated", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player",
		"Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}",
		"Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points.", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!",
		"Accept", "1 spectator joined the game.", "{10} spectators joined the game.", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.",
		"{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team",
		"Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humans won.", "The Resistance", "The zombies won.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "The game is decided. You can keep playing if you want.", "You signed a non-aggression pact with {0}.",
		"You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯",
		"You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}",
		"Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water",
		"Mountains", "Neutral Land", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played",
		"LEADERBOARD", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account",
		"Opens the account page of this player.", "✅ Vouch", "Vouches for this player and counters reports.", "💬 Mention", "Adds the name of this player to your chat message.", "🚩 Report",
		"Reports this player, you confirm it in a second step.", "👁 Stop Observing", "👁 Observe", "Stops observing this player.", "Spectates every game this player joins.", "🤝 Stop Joining With", "🤝 Join With",
		"Stops joining games with this player.", "Joins every game this player joins.", "🛡 Join Clan", "Puts the clan tag of this player in front of your name.", "🚫 Unfollow", "📥 Follow", "Removes this player from your followed accounts.",
		"Tells you when this player enters the lobby or joins a game.", "🚩 Yes, Report", "Sends the report against this player.", "Cancel", "Closes this menu without reporting.", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena",
		"Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom",
		"Mountains 2", "World 2", "British Isles", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia", "Falklands", "Antarctica", "Hong Kong", "Singapore",
		"The map could not be loaded. Please check your internet connection.", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker",
		"Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer",
		"The gold must go to a different account than the one you sell.", "Warning",
		"If someone buys this account, it gets the buyer's password and you lose access to it, together with everything on it, including its gold. This cannot be undone.", "Buy This Account", "Buy",
		"This account cannot be bought because its price is lower than its gold.", "If you successfully buy this account, it will be assigned the same password as your currently logged-in account.", "Account Name", "Copy", "Search", "Password",
		"Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Report Power", "Power: {10}", "Remaining Reports: {10}", "Current Standing: {10}", "Vouch", "Report", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee",
		"Win Streak: ", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "You are following this user. ✅",
		"Please choose a respectful username.", "Active punishments:", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code",
		"Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:",
		"No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "My Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode",
		"Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log",
		"You are about to send {11} gold to {0}. Gold transfers cannot be undone. Only send gold to accounts you trust.", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players",
		"Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Chat", "Overview", "Join", "Login",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name",
		"📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Account {0} successfully bought and stored in account list.", "fetching data...", "This replay does not exist.",
		"The replay could not be loaded.", "Replay Error", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar",
		"Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote",
		"Intercept Ship At Mouse Pointer", "Launch Invasion Ship Towards Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss",
		"Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green",
		"Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Target unreachable", "Too many orders", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!"
	]
}

function e0() {
	var fs, fu, k, wj, aI4, aI5, aI6, aI7, aI8, j, a7Z, aI9;
	this.ib = !1, this.dv = function(pb, aIA) {
		if (1 === a1.id && 13 <= a1.eC && a1.eC < 18) return aIA ? void(a7Z = pb) : a7Z !== pb ? void 0 : void a1.zw.saveString(200, pb);
		aIA && (a7Z = pb, (aI9 = document.createElement("a")).appendChild(document.createTextNode(a7Z)), this.ib = !0, aI9.title = a7Z, aI9.target = "_blank", aI9.href = a7Z, aI9.style.textAlign = "center", aI9.style.color = bE.qT, aI9.style
			.position = "absolute", aI9.style.padding = "0px", aI9.style.margin = "0px", this.resize(), document.body.appendChild(aI9), bi.e2 = !0)
	}, this.ug = function() {
		return !(!this.ib || (u.removeChild(document.body, aI9), this.ib = !1))
	}, this.hz = function(j8, j9) {
		return !!this.ib && ((j8 < fs || j9 < fu || fs + j < j8 || fu + k < j9 || fs + j - wj < j8 && j9 < fu + wj) && (bi.e2 = !0, this.ib = !1, u.removeChild(document.body, aI9)), !0)
	}, this.resize = function() {
		var aAC, aIB;
		this.ib && (aI7 = Math.floor(.8 * (a1.a2.j1() ? i.j > i.k ? .6 : .55 : .4) * i.j2), wj = Math.floor(.15 * aI7), aI4 = Math.floor(.35 * wj), aI5 = Math.floor(.5 * wj), aI6 = Math.floor(2.5 * aI5), k = wj + aI4 + 3 * aI5, aAC = bD.th.vG(1,
			aI4 / i.l), aI8 = Math.floor(i.l * aR.measureText(a7Z, aAC)), aIB = j = (aI7 < aI8 ? aI8 : aI7) + 2 * aI6, j = Math.min(j, i.j - 2 * (a1.a2.j1() ? 2 : 1) * bf.gap), aAC = bD.th.vG(1, j / aIB * aI4 / i.l), aI8 = Math.floor(i
			.l * aR.measureText(a7Z, aAC)), fs = Math.floor((i.j - j) / 2), fu = Math.floor((i.k - k) / 2), aI9.style.font = aAC, aI9.style.top = Math.floor((fu + 1.4 * aI5 + wj) / i.l) + "px", aI9.style.left = Math.floor((fs + (j -
			aI8) / 2) / i.l) + "px")
	}, this.zD = function() {
		this.ib && (zE.fillStyle = bE.qQ, zE.fillRect(fs, fu + wj, j, k - wj), zE.fillStyle = bE.rj, zE.fillRect(fs, fu, j, wj), zE.fillStyle = bE.qT, zE.lineWidth = bf.a34, zE.strokeStyle = bE.qT, zE.strokeRect(fs, fu, j, k), zE.fillRect(fs,
			fu + wj, j, bf.a34), zE.font = bD.th.vG(1, .48 * wj), bD.th.textAlign(zE, 1), bD.th.textBaseline(zE, 1), zE.fillText(L(144), Math.floor(fs + (j - .5 * wj) / 2), Math.floor(fu + .55 * wj)), aN.aAO(Math.floor(fs + j - .8 * wj),
			Math.floor(fu + .25 * wj), Math.floor(.5 * wj)), zE.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dz() {
	var gap, aGN, fs = [0, 0, 0, 0, 0],
		fu = [0, 0, 0, 0, 0],
		oO = [1, 1, 1, 1, 1],
		gD = [!0, !0, !0, !1, !1],
		ev = (this.gY = [!0, !0, !0, !1, !1], null);
	this.aIC = function(a76, aID) {
		ev = a76, gD = aID, aGN = [bN.aIE, bN.a5L, bN.aIF, bN.aIF, bN.aIG], this.dv()
	}, this.dv = function() {
		if (ac.wG()) {
			var aC, vv = Math.floor((a1.a2.j1() ? .261 : .195) * i.j2),
				vw = Math.floor(.9 * vv),
				aDr = Math.floor(.17 * vw);
			if (gap = a1.a2.j1() ? 2 * bf.gap : bf.gap, oO[0] = vv / ev[0].width, oO[1] = vw / ev[1].width, oO[2] = aDr / ev[2].height, oO[3] = aDr / ev[3].height, oO[4] = aDr / ev[4].height, oO[2] *= 1.7, oO[3] *= 1.07, fs[0] = gap, fs[1] = gap,
				fs[2] = gap, fs[3] = gap, fs[4] = Math.floor(2 * gap + oO[3] * ev[3].width), fu[0] = gap, fu[1] = fu[0] + gap + oO[0] * ev[0].height, fu[2] = fu[1] + gap + oO[1] * ev[1].height, fu[3] = fu[2] + gap + oO[2] * ev[2].height, fu[4] =
				fu[3], !gD[0])
				for (aC = 0; aC < 5; aC++) fu[aC] -= oO[0] * ev[0].height + gap;
			if (!gD[1])
				for (aC = 2; aC < 5; aC++) fu[aC] -= oO[1] * ev[1].height + gap
		}
	}, this.ib = function() {
		return !(7 === ab.a5P() && a1.a2.j1())
	}, this.hz = function(j8, j9) {
		if (ev && this.ib())
			for (var aC = gD.length - 1; 0 <= aC; aC--)
				if (gD[aC] && this.gY[aC] && fs[aC] < j8 && fu[aC] < j9 && j8 < fs[aC] + oO[aC] * ev[aC].width && j9 < fu[aC] + oO[aC] * ev[aC].height) return u.v(9, u.vq, new aIH(L(145), bD.th.a7Y(aGN[aC]))), !0;
		return !1
	}, this.zD = function() {
		if (ev && this.ib()) {
			var aC;
			for (zE.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) gD[aC] && this.gY[aC] && (zE.setTransform(oO[aC], 0, 0, oO[aC], fs[aC], fu[aC]), zE.drawImage(ev[aC], 0, 0));
			zE.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function di() {
	this.aII = 0, this.pp = null, this.pr = null, this.tc = null, this.ly = null, this.z = null, this.yR = null, this.xv = null, this.message = null, this.pd = null, this.px = null, this.aIJ = null, this.aIK = new aIL, this.xU = new aIM, this.fI = 0,
		this.aEk = 0, this.dv = function() {
			this.aEk = bi.el, this.aII = bJ.fC.fD(bm.buffer.data[105].value, 5), this.pr = new aIN, this.tc = new aIO, this.ly = new aIP, this.z = new aIQ, this.yR = new aIR, this.xv = new aIS, this.message = new aIT, this.pd = new aIU, this.px =
				new aIV, this.aIJ = new aIW, bt.dv(), this.fI = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fG()
		}, this.yG = function() {
			this.xU.aIX(), this.px && this.px.yG(), this.pp = null, this.pr = null, this.tc = null, this.ly = null, this.z = null, this.yR = null, this.xv = null, this.message = null, this.pd = null, this.px = null, this.aIJ = null, this.fI = 0, bt
				.yG(), a1.a2.setState(0)
		}
}

function aIN() {
	function aIZ() {
		bq.z.aIa += 29 === u.vq && 1 === bq.z.aIb
	}

	function aJ5(self, kP, hE) {
		for (var h = self.xJ.splice(kP, hE), aC = 0; aC < h.length; aC++) aIv(self, h[aC]);
		aIZ()
	}

	function aIv(self, hJ) {
		var self = self.xx,
			pE = self.pop();
		pE !== hJ && ((self[hJ.aIh] = pE).aIh = hJ.aIh)
	}
	this.xJ = [], this.xx = [], this.aIY = [], this.aIc = function(pj, username, y6, a83, aId, elo, color, a0S, aIe, code, y0, y3) {
		username = this.aIg(pj, username, y6, a83, aId, elo, color, a0S, aIe, code);
		username.y0 = y0, username.y3 = y3, this.xJ.push(username), username.aIh = this.xx.length, this.xx.push(username), bq.aII === pj && (bq.pp = username), bq.aIJ.aIi(pj) && (username.y8 = 1), bq.px.aIj(pj), aIZ()
	}, this.aIg = function(pj, username, y6, a83, aId, elo, color, a0S, aIe, code) {
		return {
			pj: pj,
			username: code ? username : "Player " + bI.fC.a3N(pj, 2),
			aIk: username,
			y6: y6,
			a83: a83,
			aId: aId,
			elo: elo,
			color: color,
			a0S: a0S,
			aIe: aIe
		}
	}, this.aIl = function(eU, y6, a83, aId, elo, a0S, color) {
		eU = this.xJ[eU];
		eU.y6 = y6, eU.a83 = a83, eU.aId = aId, eU.elo = elo, eU.a0S = a0S, eU.color = color, bq.px.aIj(eU.pj), aIZ()
	}, this.aIm = function(eU, code) {
		eU = this.xJ[eU];
		1 === code && (eU.username = eU.aIk), bq.px.aIj(eU.pj), aIZ()
	}, this.aIn = function(eU, aIo) {
		var eU = this.xJ[eU],
			aIp = eU.username,
			aE3 = eU.username !== eU.aIk,
			aIq = "Redacted " + bI.fC.a3N(eU.pj, 2);
		eU.aIk = aIo ? "[" + bD.pf.pt(eU.aIk) + "] " + aIq : aIq, aE3 || (eU.username = eU.aIk), aIp.indexOf("Redacted") < 0 && (eU.aIr = aIp), bq.px.aIj(eU.pj), aIZ()
	}, this.aIs = function(eU, username) {
		var eU = this.xJ[eU],
			aE3 = eU.username !== eU.aIk;
		eU.aIk = username, aE3 || (eU.username = username), eU.pj === bq.aII && bq.ly.aIt(username), bq.px.aIj(eU.pj), aIZ()
	}, this.aIu = function(eU) {
		eU = this.xJ.splice(eU, 1)[0];
		aIv(this, eU), this.aIY.push(eU), 1e3 < this.aIY.length && this.aIY.shift(), aIZ()
	}, this.aIw = function(eU, target, y0, y3) {
		var xJ = this.xJ,
			eU = xJ.splice(eU, 1)[0];
		xJ.splice(target, 0, eU), !eU.y0 && y0 && bq.aIJ.join(eU), eU.y0 = y0, eU.y3 = y3, aIZ()
	}, this.aIx = function(y0) {
		for (var xJ = this.xJ, fl = xJ.length, aC = 0; aC < fl; aC++)
			if (xJ[aC].y0 === y0) return aC;
		return fl
	}, this.aIy = function(kP) {
		for (var xJ = this.xJ, fl = xJ.length, y0 = kP < fl ? xJ[kP].y0 : 0, aC = kP; aC < fl && xJ[aC].y0 === y0 && !xJ[aC].y3;) aC++;
		return aC
	}, this.aIz = function(kP, aJ0, aJ1) {
		for (var aJ2 = this.aIy(kP), h = [], aC = 0; aC < aJ0; aC++) aJ1 && 511 === aJ1[aC] || h.push(this.xJ[aJ2 + aC]);
		return h
	}, this.aJ3 = function(kP, hE, aJ0, aJ1) {
		for (var aJ4 = this.aIz(kP, aJ0, aJ1), aC = aJ4.length - 1; 0 <= aC; aC--) aJ5(this, this.xJ.indexOf(aJ4[aC], kP), 1);
		aJ5(this, kP, hE)
	}, this.aJ6 = function(y0) {
		for (var xJ = this.xJ, aJ7 = 0; aJ7 < xJ.length && xJ[aJ7].y0 === y0;) aJ7++;
		for (var left = xJ.splice(0, aJ7), aC = 0; aC < aJ7; aC++) left[aC].y0 = 0, left[aC].y3 = 0, xJ.push(left[aC]);
		aIZ()
	}, this.ps = function(pj) {
		for (var xJ = this.xJ, m4 = xJ.length, g4 = 0; g4 < m4; g4++)
			if (pj === xJ[g4].pj) return xJ[g4];
		return null
	}
}

function aIO() {
	this.tc = [], this.xX = 0, this.xY = 0, this.aJ8 = 0;
	var aJA = this.aJ9 = 0,
		aJB = 0;
	this.aJC = function() {
		for (var self, fl = bK.sk(4), tc = new Array(fl), aC = 0; aC < fl; aC++) tc[aC] = {
			id: bK.sk(13),
			xe: bK.sk(12),
			hE: bK.sk(16),
			aJ0: bK.sk(16),
			ng: bK.sk(10),
			fR: bK.sk(6),
			mapSeed: bK.sk(14),
			xH: bK.sk(4),
			xi: bK.sk(1)
		};
		this.tc = tc, !(self = this).xX || 0 <= self.xz(self.xX) || (self.xX = 0, self.xY = 0, bq.message.aJE({
			id: 7,
			s: L(146)
		}))
	}, this.xz = function(id) {
		for (var tc = this.tc, aC = tc.length - 1; 0 <= aC; aC--)
			if (tc[aC].id === id) return aC;
		return -1
	}, this.aJF = function() {
		return 1 === aJA
	}, this.aJG = function(id) {
		return 0 < id && 0 < this.tc.length && this.tc[0].id === id
	}, this.aJH = function() {
		return this.aJG(this.xX)
	}, this.click = function(eU, y3) {
		eU = this.tc[eU];
		y3 = y3 ? 1 : 0, eU && (eU.id === this.xX && y3 === this.xY ? this.select(0, 0) : this.select(eU.id, y3))
	}, this.select = function(id, y3) {
		this.xX = id, this.xY = id ? y3 : 0, this.aJ8 = this.aJ9 = 0, aJA = 1, aJB++, b1.aJI.aJJ(4, {
			y0: id,
			y3: this.xY
		}), u.a9T(29).aJK()
	}, this.aJL = function(id, y3) {
		0 === (aJB = Math.max(aJB - 1, 0)) && (this.xX = id, this.xY = y3)
	}, this.zc = function(pj, xH) {
		this.aJ8 = xH ? pj : 0, this.aJ9 = xH, aJA = 1, b1.aJI.aJJ(6, {
			xH: xH,
			pj: pj
		})
	}, this.aJM = function(pj, xH) {
		return this.aJ9 === xH && this.aJ8 === pj
	}, this.xZ = function(xW) {
		return xW.hE - xW.aJ0
	}, this.xc = function(xH) {
		return xH < 7 ? xH + 2 + " Teams" : 7 === xH ? "Battle Royale" : 8 === xH ? "1v1" : 9 === xH ? "Zombie" : "No Full-Sending"
	}, this.xf = function(xW) {
		return xW.ng < (9 === xW.xH ? 333 : 512)
	}, this.xd = function(xe) {
		var aBn = xe % 60;
		return bO.gC(xe, 60) + ":" + (aBn < 10 ? "0" : "") + aBn
	}
}

function aIW() {
	var aJN = [],
		aJO = [],
		aJP = 0;

	function aJQ(h, aBL, aJT, aJU) {
		var fl = h.length;
		if (0 === fl) return "";
		var pb = "@" + h[0];
		if (1 === fl) return pb + aBL + aJU;
		for (var aC = 1; aC < fl - 1; aC++) pb += ", @" + h[aC];
		return pb + " and @" + h[fl - 1] + aJT + aJU
	}
	this.dv = function() {
		var pb = aJQ(aJO, " is", " are", " in the lobby.");
		pb.length && bq.message.aJE({
			id: 7,
			s: pb
		}), aJN = [], aJO = [], aJP = 0
	}, this.aIi = function(aJR) {
		return bq.aII !== aJR && (aJR = bI.fC.a3N(aJR, 5), !!bm.zc.y8(aJR)) && (aJO.push(aJR), !0)
	}, this.join = function(player) {
		bq.aII !== player.pj && (player = bI.fC.a3N(player.pj, 5), bm.zc.y8(player)) && aJN.push(player)
	}, this.aJS = function() {
		var aBL, aJT;
		++aJP < 3 || (aJP = 0, aBL = aJQ(aJO, "", "", " entered the lobby!"), (aBL = (aJT = aJQ(aJN, "", "", " joined a game!")).length ? aBL.length ? aBL + " " + aJT : aJT : aBL).length && bq.message.aJE({
			id: 7,
			s: aBL
		}), aJN = [], aJO = [])
	}
}

function aIL() {
	this.e3 = function(kP, aJV, aJ0) {
		var pr, aIK = bq.z.aIK,
			aJW = bq.pr.xJ.slice(kP, kP + aJV),
			kP = bq.pr.aIz(kP, aJ0, aIK.aJ1),
			aJ0 = function(aJW) {
				if (bq.pp && bq.tc.aJF())
					for (var fl = aJW.length, pj = bq.pp.pj, aC = 0; aC < fl; aC++)
						if (aJW[aC].pj === pj) return aC;
				return -1
			}(aJW.concat(kP));
		if (-1 === aJ0) return (pr = bq.pr).aIY = pr.aIY.concat(aJW, kP), 1e3 < bq.pr.aIY.length && bq.pr.aIY.splice(0, bq.pr.aIY.length - 1e3), bq.z.aIa += 29 === u.vq && 1 === bq.z.aIb, !1;
		if (aIK.a8x = aJV <= aJ0 ? 1 : 0, aIK.a9G = kP.length, 8 === aIK.xH) {
			for (var aJa = function(aJ1) {
					for (var h = [], aC = 0; aC < aJ1.length; aC++) 511 !== aJ1[aC] && h.push(aJ1[aC]);
					return h
				}(aIK.aJ1), ij = aJ0 - aJV, aJc = aIK.a8x ? aJa[ij] : aJ0 >> 1, aJd = 0, aC = aIK.a9G = 0; aC < aJa.length; aC++) aJa[aC] === aJc && (aJd += aC < ij ? 1 : 0, aIK.a9G++);
			aIK.aJe = (aIK.aJe + aJc) % 1024, 0 <= aIK.a4g && (aIK.a4g += aJc), aJ0 = aIK.a8x ? 2 + aJd : aJ0 % 2, aJW = aJW.slice(2 * aJc, 2 * aJc + 2)
		}
		return aIK.aJf = aIK.a8x ? function(aJW) {
			var tc = bq.tc;
			if (tc.aJ9)
				for (var aC = 0; aC < aJW.length; aC++)
					if (aJW[aC].pj === tc.aJ8) return aC;
			return 0
		}(aJW) : 0, ay.dv(aIK, aJW, aJ0), !0
	}, this.aJh = function(aIK, aJW, aJY) {
		var fo = aE.data = new a8r,
			aJk = (fo.spawningSeed = aIK.spawningSeed, aIK.xH < 7 ? (fo.gameMode = 1, fo.numberTeams = aIK.xH + 2) : 9 === aIK.xH ? (fo.gameMode = fo.isZombieMode = 1, fo.numberTeams = 2) : (fo.gameMode = 0, fo.battleRoyaleMode = 7 === aIK.xH ?
					0 : 10 === aIK.xH ? 1 : 2), fo.selectedPlayer = aIK.a8x ? aIK.aJf : aJY, fo.a8x = aIK.a8x, fo.a9G = aIK.a9G, fo.isContest = aIK.xi, fo.mapType = bV.aJi(aIK.fR) ? 0 : 1, bV.aJj(fo, aIK.fR), fo.mapSeed = aIK.mapSeed, fo
				.humanCount = aJW.length);
		fo.selectableSpawn = 1 === fo.gameMode || aJk < 100, fo.colorsData = new Uint32Array(aJk), fo.playerNamesData = new Array(aJk), fo.a9H = new Uint32Array(aJk);
		for (var aC = 0; aC < aJk; aC++) fo.colorsData[aC] = aJW[aC].color, fo.playerNamesData[aC] = aJW[aC].username, fo.a9H[aC] = aJW[aC].pj;
		if (2 === fo.battleRoyaleMode)
			for (fo.elo = new Uint16Array(aJk), aC = 0; aC < aJk; aC++) fo.elo[aC] = aJW[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aIK.fR, fo.mapSeed), aE.a8w(), aE.a4g = aIK.a4g, aE.a8u = 2
	}
}

function aIP() {
	var eL = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aJl = [bE.qh, bE.qh, bE.qi, bE.rD, bE.rE, bE.qy, bE.rJ, bE.qi, bE.rl, bE.rZ, bE.ri, bE.qK],
		aJm = [
			[1],
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2]
		],
		aJn = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aK2(pz, pj, aK4) {
		for (var g5 = pz.length - 1; 0 <= g5; g5--) {
			var qA = pz[g5];
			0 === qA.id && qA.pj === pj && (qA.s = "[Redacted Message]", aK4) && (qA.aK5 = 1)
		}
	}
	this.q4 = function(ph) {
		var aJo, a50;
		return ph.id < 5 && (aJo = "@" + bI.fC.a3N(ph.pj, 5)), 0 === ph.id ? aJo + ": " + ph.s : 1 === ph.id ? (a50 = "@" + bI.fC.a3N(ph.target, 5), 0 === ph.aJp ? 32768 <= ph.value ? aJo + " voted with " + (ph.value - 32768 + 1) +
				" gold against " + a50 + " to weaken the latter's admin position. 📉" : aJo + " voted with " + (ph.value + 1) + " gold for " + a50 + " to strengthen the latter's admin position. 💪" : 1 === ph.aJp ? aJo + " sent " + Math.floor(ph
					.value / 100) + " 🧈 gold to " + a50 + "." : aJo + " voted with " + (ph.value / 10).toFixed(1) + " points for " + a50 + " to acknowledge the latter as clan leader. ✅") : 2 === ph.id ? 0 === ph.aJp ? aJo +
			" was 🔇 muted for 1 Hour." : 1 === ph.aJp ? "The username of " + aJo + " was ✂️ redacted. Duration: 1 Day" : aJo + " 👢 was kicked." : 3 === ph.id ? aJo + br.eX(ph.aJp, br.eR[ph.aJp][ph.value]) + "@" + bI.fC.a3N(ph.target, 5) + br
			.eZ(ph.aJp, br.eR[ph.aJp][ph.value]) : 4 === ph.id ? (a50 = "@" + bI.fC.a3N(ph.target, 5), 1 === ph.aJp ? "✅ " + aJo + " vouched for " + a50 + "." + (ph.aJr ? " ⚖️ The punishment of " + a50 + " was refunded." : "") : "🚩 " + aJo +
				" reported " + a50 + "." + (ph.aJr ? " ⚖️ " + a50 + " was punished." : "")) : 5 === ph.id ? aJn[ph.aJp] : 6 === ph.id ? "You are about to mention " + ph.value + " player" + (1 === ph.value ? "" : "s") +
			". This action will cost " + (Math.max(ph.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === ph.id ? ph.s : void 0
	}, this.q3 = function(ph, aJs) {
		return {
			ph: ph,
			s: aJs,
			aJt: 0,
			fontSize: 4 === ph.id ? .8 : 1,
			qB: 0,
			aJu: ph.id ? bE.rC : bE.qT
		}
	}, this.y4 = function(player, y2) {
		return (y2 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.y5 = function(y6) {
		return aJl[y6]
	}, this.aJv = function(y6, a83) {
		return y6 < 3 || 7 === y6 ? aJm[y6][0] : 4 === y6 ? aJm[y6][a83 < 1 ? 0 : a83 < 10 ? 1 : 2] : aJm[y6][a83 < 10 ? 0 : 1]
	}, this.aJw = function(a83) {
		return 0 === a83
	}, this.y7 = function(qA) {
		return !!bq.pp && qA.pj === bq.pp.pj
	}, this.aJx = function(pr, aJy, aJz) {
		var a4y = [];
		loop: for (var aC = aJy; aC < aJz; aC++) {
			var a4z = bD.pf.pt(pr[aC].username);
			if (a4z) {
				for (var g5 = a4y.length - 1; 0 <= g5; g5--)
					if (a4z === a4y[g5].name) {
						a4y[g5].hE++;
						continue loop
					} a4y.push({
					name: a4z,
					hE: 1
				})
			}
		}
		if (a4y.sort(function(g4, g5) {
				return g5.hE - g4.hE
			}), 0 === a4y.length) return "";
		for (var pb = a4y[0].name + ": " + a4y[0].hE, aC = 1; aC < a4y.length; aC++) pb += "   " + a4y[aC].name + ": " + a4y[aC].hE;
		return pb
	}, this.aK0 = function(y6, a83, aId) {
		return 0 === eL[y6].length ? "Rank: " + (a83 + 1) : eL[y6] + " Rank: " + (a83 + 1) + (3 !== y6 && aId < 100 ? "   " + eL[3] + " Rank: " + (aId + 1) : "")
	}, this.aK1 = function(pj) {
		aK2(bq.z.pz, pj), aK2(bq.message.aK3(), pj, 1), bq.px.aK1(pj)
	}, this.aIt = function(username) {
		var username = this.aK6(username);
		username && (username = "[" + username + "] " + function(username) {
			var fa = username.indexOf("["),
				fp = username.indexOf("]", fa);
			for (; 0 <= fa && fa < fp;) username = username.substring(0, fa) + username.substring(fp + 1), fa = username.indexOf("["), fp = username.indexOf("]", fa);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.s0.q6(122, username.trim().slice(0, 20)))
	}, this.aK6 = function(username) {
		var fa = username.indexOf("["),
			fp = username.indexOf("]");
		return !(fa < 0 || fp - fa <= 1 || 8 < fp - fa) && (username = username.substring(fa + 1, fp).trim()).length ? username : null
	}
}

function aIS() {
	var v6 = 0,
		aK9 = 0,
		aKA = 0,
		aKB = null,
		aKC = null;

	function aKF(qA, aKG, aKH) {
		var pb = qA.username;
		return (pb += "   " + bq.ly.aK0(qA.y6, qA.a83, qA.aId)) + function(qA) {
			qA = qA.a0S;
			if (qA < 1e3) return "   Gold: " + qA;
			if ((qA %= 1024) < 1e3) return "   Gold: " + qA + "k";
			return "   Gold: " + (qA - 999) + "M"
		}(qA) + ("   IP: " + bI.fC.a3N(qA.aIe, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aKH ? aK9 : aKE(qA, aKG)])
	}

	function aKE(qA, aKG) {
		return aK9 = aKG || bq.pr.ps(qA.pj) ? 1 : 0
	}
	this.xw = 0, this.aKD = function() {
		!v6 || aK9 === aKE(aKC) && aKA === aKC.a0S || (aKA = aKC.a0S, aKB.show(-1, -1, aKF(aKC, 0, 1), 1, 1, aKC.color))
	}, this.y9 = function(e, qA, aKG) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, qA, 0, aKG), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xv && bq.xv.ug(1)
		}), this.xw = aKG
	}, this.show = function(fs, fu, qA, vM, aKG) {
		aKB = aKB || new vJ, aKA = (aKC = qA).a0S, aKB.show(fs, fu, aKF(qA, aKG), vM, 0, aKC.color), v6 = 1
	}, this.ug = function(vS) {
		this.xw = 0, aKB && aKB.ug(vS) && (v6 = 0, aKC = null)
	}
}

function aIQ() {
	function aKL() {
		var fR, mapSeed;
		u.a9T(29) && (bq.z.aIa && 1 === bq.z.aIb && u.a9T(29).aKN(), bq.z.aIa = 0, u.a9T(29).aKO(), fR = bV.fR, mapSeed = bV.mapSeed, u.a9T(29).aKP(), fR === bV.fR && mapSeed === bV.mapSeed || bq.xU.aKQ(), bq.xv.aKD())
	}
	this.wd = 0, this.aIb = 2, this.aIK = {
		fR: 0,
		mapSeed: 0,
		xH: 0,
		xi: 0,
		spawningSeed: 0,
		a4g: -1,
		a5X: 0,
		aJe: 0,
		aJ0: 0,
		aJ1: null,
		a9G: 0,
		a8x: 0,
		aJf: 0
	}, this.pz = [], this.q8 = 300, this.q0 = 1048575, this.aIa = 0, this.aKJ = [0, 0], this.aKK = function() {
		aKL(), bq.aIJ.dv()
	}, this.aJS = function() {
		bq.aIJ.aJS(), aKL()
	}, this.aKR = function() {
		0 === this.aIb && u.a9T(29).aKS()
	}
}

function aIM() {
	var aKT = 256,
		aKU = 18,
		aKV = [],
		aKY = 0;

	function aKj(aKh) {
		aKh && (aKY = 0)
	}

	function zq(key, aKa, fs, fu, xo) {
		var canvas = document.createElement("canvas"),
			p9 = (canvas.width = canvas.height = aKT, canvas.getContext("2d", {
				alpha: !1
			})),
			p9 = (p9.imageSmoothingEnabled = !0, p9.drawImage(aKa, fs, fu, xo, xo, 0, 0, aKT, aKT), {
				key: key,
				canvas: canvas,
				ib: 0
			});
		return aKV.push(p9), aKV.length > aKU && function(aKo) {
			for (var fl = aKV.length, aC = 0; aC < fl; aC++) {
				var hJ = aKV[aC];
				if (!hJ.ib && hJ !== aKo) return hJ.canvas.width = hJ.canvas.height = 0, aKV.splice(aC, 1)
			}
		}(p9), p9
	}
	this.xV = function(fR, mapSeed) {
		return fR + "_" + (bV.aKZ(fR) ? mapSeed : 0)
	}, this.xn = function(fR, mapSeed) {
		for (var key = this.xV(fR, mapSeed), aKa = null, aC = aKV.length - 1; 0 <= aC; aC--) {
			var hJ = aKV[aC];
			if (hJ.key === key) {
				if (!hJ.ib) return hJ.ib = 1, aKV.splice(aC, 1), aKV.push(hJ), hJ.canvas;
				aKa = hJ
			}
		}
		return aKa ? ((fR = zq(key, aKa.canvas, 0, 0, aKT)).ib = 1, fR.canvas) : null
	}, this.py = function(canvas) {
		for (var aC = aKV.length - 1; 0 <= aC; aC--)
			if (aKV[aC].canvas === canvas) {
				aKV[aC].ib = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aIX = function() {
		for (var aC = aKV.length - 1; 0 <= aC; aC--) this.py(aKV[aC].canvas)
	}, this.eq = function() {
		if (bq.fI && !(bi.el < aKY)) {
			for (var self, fR, mapSeed, em, tc = bq.tc.tc, fl = tc.length, aKb = 0, aC = 0; aC < fl; aC++) {
				var key = this.xV(tc[aC].fR, tc[aC].mapSeed);
				if (! function(key) {
						for (var aC = aKV.length - 1; 0 <= aC; aC--)
							if (aKV[aC].key === key) return 1;
						return
					}(key)) {
					key = function(fR, key) {
						var eU = bV.aKf.xz(fR);
						if (eU < 0) return -1;
						var aKg = bV.aKg,
							aKh = aKg.get(eU, 1);
						if (aKh) return (fR = bV.aKf.aKk(fR, aKh)) ? (aKh = Math.min(fR.width, fR.height), zq(key, fR, fR.width - aKh >> 1, fR.height - aKh >> 1, aKh), fR.width = fR.height = 0, 1) : 0;
						aKg.aKi(eU, 1) || aKg.zu(eU, 1, aKj);
						return 0
					}(tc[aC].fR, key);
					if (!(0 <= key)) return self = this, fR = tc[aC].fR, mapSeed = tc[aC].mapSeed, em = void 0, em = performance.now(),
						function(self, fR, mapSeed) {
							var aKa = bV.aKm(fR, mapSeed),
								xo = Math.min(aKa.width, aKa.height);
							zq(self.xV(fR, mapSeed), aKa, aKa.width - xo >> 1, aKa.height - xo >> 1, xo), aKa !== bV.a29 && (aKa.width = aKa.height = 0)
						}(self, fR, mapSeed), u.a9T(29).aJK(), self = performance.now(), void(aKY = self + Math.max(Math.min(self - em, 500), 200));
					aKb += key
				}
			}
			aKb && u.a9T(29).aJK(), aKY = bi.el + 200
		}
	}, this.aKQ = function() {
		aKY = performance.now() + 200
	}
}

function aIU() {
	var aKp = 0,
		aKq = "",
		aKr = 0,
		aKs = 0,
		aKt = "";

	function aKw(aJs) {
		b1.aJI.aJJ(3, aJs)
	}

	function aKv(s) {
		s = bq.pd.pe(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aL7(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aKz(s) {
		var aLD = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aLD)
	}
	this.a4A = function(s) {
		var h, aL0, aKu;
		if (aKp) return aKp = 0, "yes" === (aKu = s.toLowerCase()) || "y" === aKu ? (aKt = aKv(aKq), void aKw(aKq)) : (aKt = "", void bq.message.aJE({
			id: 5,
			aJp: 7
		}));
		aKt = aKv(s), !(s.indexOf("@") < 0) && (aKu = aKz(s)) ? (aKq = s, h = bq.pr.xJ.slice(), function(aKy, aL0, s) {
			if (!aKr) return;
			for (var fl = aL0.length, aC = 0; aC < fl; aC++) 2 === aL0[aC].id && (s = s.replace(aKy[aL0[aC].eU], "@" + aL0[aC].gD));
			return aKp = 1, aKw((aKq = s).slice(0, 126) + "|"), 1
		}(aKu, aL0 = function(aKy) {
			for (var aL0 = [], fl = (aKs = aKr = 0, aKy.length), aC = 0; aC < fl; aC++) {
				var j = aKy[aC],
					m4 = j.length;
				bD.pf.startsWith(j, "@[") ? m4 <= 9 && bD.pf.a7b(j, "]") && aL0.push({
					id: 0,
					gD: j.substring(2, m4 - 1).toUpperCase()
				}) : 6 === m4 && (aKs++, aL0.push({
					id: 1,
					gD: bJ.fC.fD(j.substring(1), 5)
				}))
			}
			return aL0
		}(aKu), s) || (0 === aL0.length || aKu.length === aKs ? aKw(s) : (function(h, aL0) {
			var m4 = aL0.length;
			if (0 === m4) return;
			var fl = h.length;
			loop: for (var aC = fl - 1; 0 <= aC; aC--) {
				for (var g4 = 0; g4 < m4; g4++)
					if (0 === aL0[g4].id) {
						if (aL0[g4].gD === bD.pf.pt(h[aC].username)) continue loop
					} else if (1 === aL0[g4].id && aL0[g4].gD === h[aC].pj) continue loop;
				h[aC] = h[--fl], h.pop()
			}
		}(h, aL0), aKu = h.length, aKt = "", aKp = 1, bq.message.aJE({
			id: 6,
			value: aKu
		})))) : aKw(s)
	}, this.aL5 = function() {
		return aKp
	}, this.aL6 = function() {
		return aKt
	}, this.pe = function(s) {
		var aKy = aKz(s),
			h = [];
		if (aKy)
			for (var aC = 0; aC < aKy.length; aC++) aL7(aKy[aC]) && h.indexOf(aKy[aC]) < 0 && h.push(aKy[aC]);
		return h
	}, this.aL8 = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var a0I = e.selectionStart;
		if (a0I !== e.selectionEnd) return 0;
		var pb = e.value.substring(0, a0I),
			m4 = pb.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!m4 || !aL7(m4[0].substring(0, m4[0].length - 1))) return 0;
		event.preventDefault();
		event = a0I - m4[0].length;
		return e.value = pb.substring(0, event) + e.value.substring(a0I), e.setSelectionRange(event, event), 1
	}, this.aL9 = function(s) {
		s = aKz(s);
		return s ? function(aKy) {
			for (var fl = aKy.length, aC = 0; aC < fl; aC++) {
				var j = aKy[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aKy) {
			for (var aLC = new RegExp("^[0-9]"), a8K = new RegExp("^[0-9]+$"), aC = 0; aC < aKy.length; aC++) {
				var j = aKy[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aLC.test(j) && !a8K.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aLE = function(s) {
		var aKy = aKz(s);
		if (aKy)
			for (var a6 = new RegExp("^[0-9]+$"), fl = aKy.length, aC = 0; aC < fl; aC++) {
				var j = aKy[aC].substring(1),
					m4 = j.length;
				1 <= m4 && m4 <= 3 && a6.test(j) && (m4 = parseInt(j, 10), !isNaN(m4)) && 0 <= m4 && m4 < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[m4]))
			}
		return s
	}
}

function aIT() {
	var aLG, aLH = [],
		aLI = -1,
		aLJ = 0,
		aLK = 0;

	function aLO() {
		aLJ = bi.el, (3 === this.yD ? aLN : (aLI = (aLH.length + aLI + 2 * this.yD - 1) % aLH.length, aLM))()
	}

	function aLM() {
		0 !== aLH.length && (aLK = 0, aLG && aLG.yG(), (aLG = new yA(aLO)).q6(aLI, aLH.length), aLG.show(aLH[aLI]), bq.message.resize())
	}

	function aLN() {
		aLK = 1, aLG && aLG.yG(), (aLG = new yH(aLM)).q6(aLH.length), aLG.show(), bq.message.resize()
	}
	this.aJE = function(ph) {
		var qA;
		2 === ph.id && 3 === ph.aJp ? bq.ly.aK1(ph.pj) : (qA = bq.ly.q3(ph, bq.ly.q4(ph)), (5 !== ph.id && 6 !== ph.id || (c0.nM.q7(qA), 5 === ph.id)) && (qA = bi.el < aLJ + 2e4, aLI !== aLH.length - 1 && qA || (aLI = aLH.length), aLH.push(ph),
			bm.buffer.data[14].value || 7 === ph.id || bt.play(), aLG) && (aLK && (bm.buffer.data[13].value || qA) ? aLG.q6(aLH.length) : aLM()))
	}, this.show = function() {
		aLN()
	}, this.ug = function() {
		aLI = aLH.length - 1, aLG && aLG.yG(), aLG = null
	}, this.resize = function() {
		aLG && aLG.resize()
	}, this.aK3 = function() {
		return aLH
	}
}

function aIR() {
	var aLP = null,
		aLQ = null,
		aLR = 0,
		aLS = null;

	function aLZ(title, aLm, ty, backgroundColor) {
		title = new x(title, ty, backgroundColor);
		return by.vB(title.button, aLm), title
	}

	function aLY() {
		return bI.fC.a3N(aLQ.pj, 5)
	}

	function aLk() {
		return +(0 === aLQ.y6 || bq.ly.y7(aLQ))
	}

	function aLj() {
		aLk() || (aLQ.y8 = bm.zc.zp(aLY()), bq.z.aIa += 1 === bq.z.aIb, bq.yR.ug())
	}

	function aLa() {
		0 !== aLQ.y6 && (bq.yR.ug(), u.v(8, 29, new vr(25, {
			action: 0,
			pj: bI.fC.a3N(aLQ.pj, 5),
			vp: 0
		}, 29)))
	}

	function aLg() {
		return !bq.pp || bq.ly.y7(aLQ) ? 1 : 0
	}

	function aLc() {
		return aLg() ? 1 : +bs.aLo(bI.fC.a3N(aLQ.pj, 5))
	}

	function aLb(aLp) {
		aLc() || (bs.aLq(bI.fC.a3N(aLQ.pj, 5), aLp), bq.yR.ug())
	}

	function aLe() {
		var fs, fu;
		aLc() || (fs = aLP.fs, fu = aLP.fu, bq.yR.ug(), aLP = new yI([aLZ(L(169), L(170), function() {
			aLb(0)
		}, 0), aLZ(L(171), L(172), function() {
			bq.yR.ug()
		}, 0)], 2), aLl(fs, fu), aLR = 2)
	}

	function aLV(xH) {
		return bq.tc.aJM(aLQ.pj, xH)
	}

	function aLf(xH) {
		aLg() || (bq.tc.zc(aLQ.pj, aLV(xH) ? 0 : xH), bq.yR.ug())
	}

	function aLi() {
		var p0;
		return !aLg() && (p0 = bD.pf.pt(aLQ.username)) ? +(p0 === bD.pf.pt(bq.pp.aIk)) : 1
	}

	function aLh() {
		aLi() || (b1.aJI.aJJ(2, aLQ.pj), bq.yR.ug())
	}

	function aLd() {
		29 === u.vq && u.a5T().pd(bI.fC.a3N(aLQ.pj, 5))
	}

	function aLl(fs, fu, yU) {
		aLP.show(fs, fu, yU), bq.xv.show(aLP.fs, aLP.fu, aLQ, 1)
	}
	this.aLT = function(e, qA) {
		aLQ = qA;
		var aLU = aLV(aLR = 1),
			aLW = aLV(2),
			aLX = bm.zc.y8(aLY());
		aLP = new yI([aLZ(L(147), L(148), aLa, 0 === qA.y6 ? 1 : 0), aLZ(L(149), L(150), function() {
			aLb(1)
		}, aLc()), aLZ(L(151), L(152), aLd, 0), aLZ(L(153), L(154), aLe, aLc()), aLZ(L(aLU ? 155 : 156), L(aLU ? 157 : 158), function() {
			aLf(1)
		}, aLg()), aLZ(L(aLW ? 159 : 160), L(aLW ? 161 : 162), function() {
			aLf(2)
		}, aLg()), aLZ(L(163), L(164), aLh, aLi()), aLZ(L(aLX ? 165 : 166), L(aLX ? 167 : 168), aLj, aLk())], 2), aLl((aLS = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aLS.clientY, 1)
	}, this.a6K = function(code) {
		if (29 !== u.vq) return !1;
		if (!aLQ) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ug();
			else if (bD.pf.startsWith(code, "Numpad") || bD.pf.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aLR) this.aLT(aLS, aLQ);
				else {
					if (!aLP) return !1;
					2 === aLR ? 1 === code ? aLb(0) : this.ug() : code <= 1 ? aLa() : 2 === code ? aLb(1) : 3 === code ? (aLd(), this.ug()) : 4 === code ? aLe() : code <= 6 ? aLf(5 === code ? 1 : 2) : (7 === code ? aLh : aLj)()
				}
		}
		return !0
	}, this.ug = function() {
		aLR = 0, aLP && aLP.ug(), aLP = null, bq.xv.ug(), by.ug()
	}
}

function aIV() {
	var aLr = [],
		aLs = [],
		aLt = {},
		aLu = {};

	function aLz(ue) {
		var h = aLt[ue.aLy.pj];
		h && 0 <= (ue = h.indexOf(ue)) && h.splice(ue, 1)
	}

	function aLw(qA) {
		for (var s = qA.s, aLv = [];;) {
			var ev = function aM0(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pb = s.substring(position + 1, position + 6);
				if (5 !== pb.length) return aM0(s, position + 1);
				var aMD = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aMD.test(pb)) return aM0(s, position + 1);
				aMD = s.substring(position + 6, position + 7);
				if (1 !== aMD.length) return position;
				pb = new RegExp("^[ :!.]+$");
				if (!pb.test(aMD)) return aM0(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ev) {
				aLv.push(aM1(s, qA));
				break
			}
			0 === ev ? aLv.push(aM2(s.substring(1, 6), qA, ev)) : (aLv.push(aM1(s.substring(0, ev), qA)), aLv.push(aM2(s.substring(ev + 1, ev + 6), qA, ev))), s = s.substring(ev + 6)
		}
		return aLv
	}

	function aM2(pb, qA, ev) {
		var pb = aM3(pb),
			ue = (0 === ev && 0 === qA.ph.id && qA.qB && (qA.fontSize = bq.ly.aJv(pb.y6, pb.a83), qA.aJt = bq.ly.aJw(pb.a83)), document.createElement("span"));
		return ue.style.display = "inline-block", ue.style.cursor = "pointer", ue.style.margin = "0", ue.style.font = "inherit", ue.style.minWidth = ue.style.minHeight = "1em", ue.aLy = {
			qA: qA,
			ev: ev,
			pj: pb.pj
		}, aM4(ue, pb), (aLt[pb.pj] || (aLt[pb.pj] = [])).push(ue), ue
	}

	function aM4(ue, aIf) {
		var qA = ue.aLy.qA;
		ue.textContent = function(aIf, qA, ev) {
				if (aIf.aM6) return aIf.aM6--, ev = 2 === qA.ph.id || (3 === qA.ph.id || 4 === qA.ph.id) && 0 !== ev, aIf.username + (ev ? " (" + aIf.aIr + ")" : "");
				if (qA.ph.aK5) return "Redacted " + bI.fC.a3N(aIf.pj, 2);
				return aIf.username
			}(aIf, qA, ue.aLy.ev), ue.style.color = bq.ly.y5(aIf.y6), ue.style.textShadow = 11 !== aIf.y6 ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", ue.style.textDecoration = bq.ly.y7(aIf) ?
			"underline" : "none", aIf.y8 && (ue.style.textDecorationLine = "underline", ue.style.textDecorationStyle = "dotted"), ue.style.fontWeight = bq.ly.aJw(aIf.a83) ? "bold" : "inherit", ue.onclick = function(e) {
				bq.yR.aLT(e, aIf)
			}, bM.uA() || (ue.onmouseover = function(e) {
				bq.xv.y9(e.target, aIf)
			})
	}

	function aM1(s, qA) {
		var ue = document.createElement("span");
		return ue.textContent = s, ue.style.color = qA.aJu, ue.style.margin = "0", ue.style.font = "inherit", ue
	}

	function aM3(pb) {
		var pj = bJ.fC.fD(pb, 5),
			aIf = bq.pr.ps(pj);
		if (aIf) {
			for (aLr.push(aIf); 75 < aLr.length;) aLr.shift();
			return aIf
		}
		for (var aIY = bq.pr.aIY, aC = aIY.length - 1; 0 <= aC; aC--)
			if (pj === (aIf = aIY[aC]).pj) return aLr.push(aIf), aIf;
		for (aC = aLr.length - 1; 0 <= aC; aC--)
			if (pj === (aIf = aLr[aC]).pj) return aLr.push(aIf), aIf;
		return aM8(pj, null)
	}

	function aM8(pj, name) {
		return aLu[pj] || (aLu[pj] = bq.pr.aIg(pj, name || "Player " + bI.fC.a3N(pj, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aMC(pj, name) {
		var aIf;
		name && !bq.pr.ps(pj) && ((aIf = function(pj) {
			for (var aIY = bq.pr.aIY, aC = aIY.length - 1; 0 <= aC; aC--)
				if (pj === aIY[aC].pj) return aIY[aC];
			for (aC = aLr.length - 1; 0 <= aC; aC--)
				if (pj === aLr[aC].pj) return aLr[aC];
			return aLu[pj] || null
		}(pj)) ? aIf.username !== name && (aIf.username = aIf.aIk = name, bq.px.aIj(pj)) : aM8(pj, name))
	}

	function aMH(aIf, aIq, pj) {
		pj === aIf.pj && (aIf.aIr || (aIf.aIr = aIf.username), aIf.username = aIf.aIk = aIq)
	}
	this.yG = function() {
		aLu = aLt = aLs = null
	}, this.transform = function(qA) {
		for (var tO = document.createElement("div"), aLv = aLw(qA), aC = 0; aC < aLv.length; aC++) tO.appendChild(aLv[aC]);
		0 === qA.ph.id && (tO.vx143 = qA.ph, aLs.push(tO)), tO.style.margin = "0.6em 0.6em", qA.qB && (tO.style.marginLeft = tO.style.marginRight = "inherit"), tO.style.font = "inherit";
		var aLx = 0 < qA.ph.id;
		return qA.aJt && (tO.style.fontWeight = "bold"), aLx && (tO.style.paddingLeft = "0.7em"), aLx && (tO.style.fontStyle = "italic"), tO.style.fontSize = qA.fontSize.toFixed(2) + "em", tO
	}, this.py = function(tO) {
		var aC = aLs.indexOf(tO);
		0 <= aC && aLs.splice(aC, 1);
		for (var e = tO.firstChild; e; e = e.nextSibling) e.aLy && aLz(e)
	}, this.aIj = function(pj) {
		var h = aLt && aLt[pj];
		if (h)
			for (var aIf = aM3(bI.fC.a3N(pj, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aM4(h[aC], aIf) : h.splice(aC, 1)
	}, this.aMA = function(aMB) {
		!aMB || 4 < aMB.id || (aMC(aMB.pj, aMB.pk), aMB.pl && aMC(aMB.target, aMB.pl))
	}, this.aMG = function(aMB) {
		if (aMB && (2 === aMB.id && 1 === aMB.aJp || 3 === aMB.id && 2 === aMB.aJp)) {
			var pj = 3 === aMB.id ? aMB.target : aMB.pj;
			if (!bq.pr.ps(pj)) {
				for (var aIq = (3 === aMB.id ? aMB.pl : aMB.pk) || "Redacted " + bI.fC.a3N(pj, 2), aIY = bq.pr.aIY, aC = aIY.length - 1; 0 <= aC; aC--) aMH(aIY[aC], aIq, pj);
				for (aC = aLr.length - 1; 0 <= aC; aC--) aMH(aLr[aC], aIq, pj);
				aLu[pj] && aMH(aLu[pj], aIq, pj), this.aIj(pj)
			}
		}
	}, this.aK1 = function(pj) {
		for (var aMI = aLs, aC = aMI.length - 1; 0 <= aC; aC--) {
			var fo = aMI[aC];
			if (fo.vx143.pj === pj) {
				for (; fo.firstChild;) fo.firstChild.aLy && aLz(fo.firstChild), u.removeChild(fo, fo.firstChild);
				fo.vx143.s = "[Redacted Message]";
				for (var aLv = aLw(bq.ly.q3(fo.vx143, bq.ly.q4(fo.vx143))), g4 = 0; g4 < aLv.length; g4++) fo.appendChild(aLv[g4]);
				aMI.splice(aC, 1)
			}
		}
	}
}

function cY() {
	var aC7, aMJ, aMK;

	function aMP(aC) {
		var button = aZ.pC[aC],
			fs = button.fs,
			fu = button.fu,
			j = button.j,
			k = button.k;
		zE.fillStyle = button.aMN, zE.fillRect(fs, fu, j, k), aC === aC7 && (zE.fillStyle = aMK, zE.fillRect(fs, fu, j, k)), zE.lineWidth = bf.a34, zE.strokeStyle = aMJ, zE.strokeRect(fs, fu, j, k),
			function(button) {
				var fs = button.fs,
					fu = button.fu,
					j = button.j,
					k = button.k;
				bD.th.textAlign(zE, 1), bD.th.textBaseline(zE, 1), zE.font = button.font, zE.fillStyle = aMJ, zE.fillText(button.aJs, Math.floor(fs + j / 2), Math.floor(fu + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fu = 0, this.gap = 0, this.dv = function() {
		aC7 = -1, aMJ = bE.qT, aMK = "rgba(255,255,255,0.16)", this.pC = new Array(7), this.k = Math.floor((a1.a2.j1() ? .123 : .093) * i.j2), this.j = Math.floor((a1.a2.j1() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aML = Math.floor(.26 * this.k),
			aMM = bD.th.vG(1, aML);
		this.pC[0] = {
			fs: 0,
			fu: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aJs: "Multiplayer",
			font: aMM,
			aMN: "rgba(22,88,22,0.8)",
			fontSize: aML
		}, aML = Math.floor(.18 * this.k), aMM = bD.th.vG(1, aML), this.pC[1] = {
			fs: 0,
			fu: 0,
			j: this.j - this.pC[0].j - this.gap,
			k: this.k,
			aJs: "Single Player",
			font: aMM,
			aMN: "rgba(22,88,88,0.8)",
			fontSize: aML
		}, this.pC[2] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJs: "",
			font: this.pC[1].font,
			aMN: "rgba(100,0,0,0.8)",
			fontSize: this.pC[1].fontSize
		}, this.pC[3] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: this.k,
			aJs: "Back",
			font: this.pC[0].font,
			aMN: "rgba(0,0,0,0.8)",
			fontSize: this.pC[0].fontSize
		}, this.pC[4] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJs: "The game was updated!",
			font: this.pC[1].font,
			aMN: "rgba(100,0,0,0.8)",
			fontSize: this.pC[1].fontSize
		}, this.pC[5] = {
			fs: 0,
			fu: 0,
			j: this.pC[0].j,
			k: Math.floor(.8 * this.k),
			aJs: "Reload",
			font: this.pC[0].font,
			aMN: "rgba(0,100,0,0.8)",
			fontSize: this.pC[0].fontSize
		}, this.pC[6] = {
			fs: 0,
			fu: 0,
			j: this.pC[1].j,
			k: this.pC[5].k,
			aJs: "Back",
			font: this.pC[0].font,
			aMN: "rgba(0,0,0,0.8)",
			fontSize: this.pC[0].fontSize
		}, this.aEw()
	}, this.aEw = function() {
		this.fu = Math.floor(.54 * i.k), this.pC[0].fs = Math.floor(.5 * i.j - .5 * this.j), this.pC[1].fs = this.pC[0].fs + this.pC[0].j + this.gap, this.pC[2].fs = this.pC[3].fs = this.pC[0].fs, this.pC[4].fs = this.pC[5].fs = this.pC[0].fs,
			this.pC[6].fs = this.pC[1].fs, this.pC[0].fu = Math.floor(.54 * i.k), this.pC[1].fu = this.pC[0].fu, this.pC[2].fu = Math.floor((i.k - this.pC[2].k - this.pC[3].k - this.gap) / 2), this.pC[3].fu = this.pC[2].fu + this.pC[2].k + this
			.gap, this.pC[4].fu = Math.floor((i.k - this.pC[4].k - this.pC[5].k - this.gap) / 2), this.pC[5].fu = this.pC[6].fu = this.pC[4].fu + this.pC[4].k + this.gap
	}, this.aMO = function() {
		aMP(0), aMP(1)
	}, this.aMQ = function() {
		aMP(2), aMP(3)
	}, this.aMR = function() {
		aMP(4), aMP(5), aMP(6)
	}, this.a5m = function(fs, fu, nX) {
		var aC = -1;
		return 0 === ab.a5P() ? aC = this.a6G(fs, fu, 0, 2) : 3 === ab.a5P() ? aC = this.a6G(fs, fu, 3, 1) : 5 === ab.a5P() && (aC = this.a6G(fs, fu, 5, 2)), aC7 !== aC && (aC7 = aC, nX) && (bi.e2 = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a6G = function(fs, fu, aMS, size) {
		for (var aC = aMS; aC < aMS + size; aC++)
			if (fs >= this.pC[aC].fs && fu >= this.pC[aC].fu && fs <= this.pC[aC].fs + this.pC[aC].j && fu <= this.pC[aC].fu + this.pC[aC].k) return aC;
		return -1
	}
}

function cZ() {
	var aMU, aMV, aBt, aMW, aMX, aMY, aMZ, aMa, aMb, aBs, aMc, aMd, aMe, aMf = 1,
		aMh = 0;

	function aMk(aMl) {
		aMl ? aMe = (aMe + 1) % b1.z.aMm : (b1.z.close(aMe, 3280), aMf ? aMf = 0 : (aMe = (aMe + 1) % b1.z.aMm, b1.z.close(aMe, 3280))), aMd = bi.el, aa.aMj = aMh, b1.z.aMn(aMe, 4, 1) && b1.aJI.aMo(aMe)
	}

	function aMp() {
		0 === aMe ? p.a5b(3249) : aMk()
	}

	function aMu(fu, aEe, wd) {
		var oC = Math.floor((i.j - aMW) / 2) + aMZ,
			oP = oC + Math.floor(wd * (aMW - 2 * aMZ));
		zE.lineWidth = aEe, zE.beginPath(), zE.moveTo(oC, fu), zE.lineTo(oP, fu), zE.lineTo(Math.floor(oC - aMZ + wd * aMW), fu + aBt), zE.lineTo(oC - aMZ, fu + aBt), zE.closePath()
	}
	this.fE = 1, this.aMi = 0, this.aMj = 0, this.dv = function() {
		bX.turnstile.fA(), ab.setState(6), aMU = 0, aMV = 1, aMa = "rgba(0,220,120,0.4)", aMb = "rgba(0,0,0,0.8)", this.resize(), bi.e2 = !0, aMf = 1, aMe = this.fE - 1, aMh = 0, aMk(1)
	}, this.resize = function() {
		aMW = Math.floor((a1.a2.j1() ? .5 : .25) * i.j2), aMX = aMW + 12, aBt = Math.floor(.125 * aMW), aMZ = 3 * aBt, aMY = Math.floor(.225 * aMW), aMc = Math.floor(.3 * aBt), aBs = bD.th.vG(0, aMc)
	}, this.a5W = function(od) {
		od === aMe && aMp()
	}, this.hz = function(fs, fu) {
		var oC = Math.floor((i.j - aMX) / 2),
			oD = Math.floor(.5 * (i.k - bf.gap - aBt - aMY)) + aBt + bf.gap;
		return oC < fs && fs < oC + aMX && oD < fu && fu < oD + aMY && (this.a6R(), aZ.a5m(fs, fu, !1), !0)
	}, this.a6R = function() {
		b1.z.a5c(3260), u.z.a0()
	}, this.eq = function() {
		6 === ab.a5P() && (bi.el > aMd + 12e3 && aMp(), 100 < (aMU += .07 * aMV * (aMU < 16 ? 5 + aMU : 84 < aMU ? 105 - aMU : 17)) ? (aMU = 100, aMV = -1) : aMU < 0 && (aMU = 0, aMV = 1), aMa = "rgba(0," + Math.floor(190 - 1.9 * aMU) + "," +
			Math.floor(120 - 1.2 * aMU) + "," + (.4 + .004 * aMU) + ")", aMb = "rgba(0," + Math.floor(1.9 * aMU) + "," + Math.floor(1.2 * aMU) + "," + (.8 - .004 * aMU) + ")", bi.e2 = !0)
	}, this.zD = function() {
		var fs = Math.floor((i.j - aMX) / 2),
			fu = Math.floor(.5 * (i.k - bf.gap - aBt - aMY));
		! function(title, fu, aEe, wd) {
			zE.fillStyle = aMb, aMu(fu, aEe, 1), zE.fill(), zE.fillStyle = aMa, aMu(fu, aEe, wd), zE.fill(), zE.strokeStyle = bE.qT, aMu(fu, aEe, 1), zE.stroke(),
				function(aMw, fu) {
					bD.th.textAlign(zE, 1), bD.th.textBaseline(zE, 1), zE.font = aBs, zE.fillStyle = bE.qT, zE.fillText(aMw, Math.floor(.5 * i.j), Math.floor(fu + .58 * aBt))
				}(title, fu)
		}(L(173), fu, 3, aMU / 100),
		function(fs, fu, j, k, aJs) {
			zE.fillStyle = bE.qO, zE.fillRect(fs, fu, j, k), zE.lineWidth = 3, zE.strokeStyle = bE.qT, zE.strokeRect(fs, fu, j, k);
			var fl = Math.floor(.3 * k);
			bD.th.textAlign(zE, 1), bD.th.textBaseline(zE, 1), zE.font = bD.th.vG(0, fl), zE.fillStyle = bE.qT, zE.fillText(aJs, Math.floor(fs + j / 2), Math.floor(fu + k / 2 + .1 * fl))
		}(fs, fu + aBt + bf.gap, aMX, aMY, L(49))
	}
}

function ca() {
	var a5J = 0;
	this.dv = function() {
		aZ.dv(), a5J = 0
	}, this.setState = function(aMx) {
		a5J = aMx
	}, this.a5P = function() {
		return a5J
	}, this.aMy = function() {
		this.setState(8), u.y()
	}, this.a6K = function(e) {
		if (!bV.aMz) return !1;
		if (!(bi.el < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aN0()) return !0;
				if ("Enter" === e.key) {
					if (0 === a5J) return !0;
					if (7 === a5J) return !0
				}
			}
			return !1
		}
	}, this.aN1 = function() {
		bc.resize()
	}, this.aN0 = function() {
		return !!bc.ug()
	}, this.hz = function(fs, fu) {
		!bV.aMz || bc.hz(fs, fu) || 6 === a5J && aa.hz(fs, fu) || bb.hz(fs, fu) || aU.hz(fs, fu)
	}, this.a5m = function(fs, fu) {
		!aU.aEp && aZ.a5m(fs, fu, !0) || aU.a5m(fs, fu)
	}, this.click = function(fs, fu) {
		aU.a6B()
	}, this.a5p = function(fs, fu, deltaY) {}, this.aN2 = function() {
		aZ.aEw(), bi.e2 = !0
	}, this.zD = function() {
		8 !== a5J && 10 !== a5J && (zE.imageSmoothingEnabled = !0, this.a28(), 0 !== a5J && (aU.zD(), aP.zD(), this.aN3(), bb.zD()), 0 !== a5J && 6 === a5J && aa.zD(), bc.zD(), u.zD())
	}, this.a28 = function() {
		var aN5, aN4;
		bV.aMz ? (aN4 = i.j / bV.fw, aN5 = i.k / bV.fx, zE.setTransform(aN4 = aN5 < aN4 ? aN4 : aN5, 0, 0, aN4, Math.floor((i.j - aN4 * bV.fw) / 2), Math.floor((i.k - aN4 * bV.fx) / 2)), zE.drawImage(bV.a29, 0, 0), zE.setTransform(1, 0, 0, 1, 0,
			0), zE.fillStyle = bE.qO) : zE.fillStyle = bE.qK, zE.fillRect(0, 0, i.j, i.k)
	}, this.aN3 = function() {
		var fu = Math.floor(.3 * i.k),
			canvas = ac.xQ("territorial.io"),
			it = (it = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : it,
			fs = (zE.globalAlpha = .15, zE.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - it * canvas.width))),
			fs = Math.floor(fs / it),
			fu = Math.floor(fu - .5 * canvas.height * it),
			fu = Math.floor(fu / it);
		zE.setTransform(it, 0, 0, it, fs, fu), zE.drawImage(canvas, fs, fu), zE.setTransform(1, 0, 0, 1, 0, 0), zE.globalAlpha = 1, zE.imageSmoothingEnabled = !0
	}
}

function d0() {
	this.aJe = 0;
	var aN7, aN8, aN9, aNA, aNB, aNC = this.aN6 = 0,
		aND = [],
		aNE = 0,
		aNF = 0;

	function aNJ() {
		aNA = aNB = null, aNC = 0, aND = []
	}

	function aNH(aNK) {
		aNF = aNK ? 0 : 1
	}

	function aNL() {
		if (bV.aKf.aNK(aNA.fR)) return 1;
		(aNF || bi.el > aNE) && (aNJ(), ab.setState(0), b1.z.aNN(b1.z.a5X, 3290), bi.e2 = !0)
	}

	function aKl() {
		var aNO = aND;
		bq.aIK.aJh(aNA, aNB, aNC), aNJ();
		for (var aC = 0; aC < aNO.length; aC++) b1.aBA.aNP(aNO[aC][0], aNO[aC][1])
	}
	this.dv = function(aIK, aJW, aJY) {
		u.y(), bq.yG(), ab.setState(10), aNA = aIK, aNB = aJW, aNC = aJY, this.aJe = aIK.aJe, this.aN6 = aJY, aN7 = 0, aN8 = bi.el + 4500, aND = [], aNF = 0, aNE = bi.el + bV.aKg.tF.aNG, bV.aKf.zu(aIK.fR, aNH), b1.z.a5X = aIK.a5X, 1 === aJW
			.length ? (b1.z.close(b1.z.fJ, 3281), aN9 = 0) : b1.z.fJ === aIK.a5X ? (console.log("direct pass"), aN9 = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fJ, 3247), aN9 = 2, b1.z.aMn(aIK.a5X, 5, 2) && b1.ry.aNI()), zE
			.imageSmoothingEnabled = !0, ab.a28();
		aJY = ac.xQ("loading"), aJW = (a1.a2.j1() ? .396 : .25) * i.j2 / aJY.width;
		zE.setTransform(aJW, 0, 0, aJW, Math.floor((i.j - aJW * aJY.width) / 2), Math.floor((i.k - aJW * aJY.height) / 2)), zE.imageSmoothingEnabled = !1, zE.drawImage(aJY, 0, 0), zE.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nV = function() {
		0 < aN9 && bi.el > aN8 && (aN9--, aN8 += 4500, 0 === bi.aNQ) && 0 === bi.l6() && b1.z.aMn(b1.z.a5X, 5, 2)
	}, this.aNR = function(od, aD) {
		return !(10 !== ab.a5P() || !aNA || (aNL() ? aND.length ? (aND.push([od, aD]), aKl(), 1) : (aKl(), 0) : (aNA && aND.push([od, aD]), 1)))
	}, this.aNS = function() {
		10 === ab.a5P() && aNA && 2 <= ++aN7 && aNL() && aKl()
	}
}

function cb() {
	var aNU, canvas, a4a, aNV;

	function aNb(eU, name, aNc, pb) {
		a4a[eU] = name, canvas[eU] = new Image, canvas[eU].onload = function() {
			! function(eU, aNc) {
				var a88, a89 = null;
				7 === aNc ? a88 = bD.p8.a8B : 9 === aNc ? a88 = bD.p8.a8C : 8 === aNc ? (a88 = bD.p8.a8F, a89 = .1) : 3 === aNc ? (a88 = bD.p8.a8D, a89 = .06) : 5 === aNc ? a88 = bD.p8.a8G : 6 === aNc ? a88 = bD.p8.a8A : 4 === aNc && (a88 = bD.p8
					.a8H);
				canvas[eU] = bD.p8.a87(canvas[eU], a88, a89)
			}(eU, aNc), aNe()
		}, canvas[eU].onerror = function(e) {
			console.error("Error loading image at index", eU, "Error:", e), aNe()
		}, canvas[eU].src = "data:image/png;base64," + pb
	}

	function aNe() {
		aNU--, aNY()
	}

	function aNY() {
		0 === aNU && (aNU = -1, aNa(), bi.e2 = !0, canvas[7] = aNV, canvas[8] = aNV, canvas[9] = aNV, canvas[10] = aNV, 5 === u.vq) && u.a5T().aNg.resize()
	}

	function aNa() {
		aM.a9h(), bb.aIC([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a2a = new a2b, ak.a2a.dv(), ax.dw()
	}
	this.dv = function() {
		if (void 0 === canvas) {
			aNU = 29, canvas = new Array(aNU), a4a = new Array(aNU), (aNV = document.createElement("canvas")).width = 1;
			for (var aC = aNU - (aNV.height = 1); 0 <= aC; aC--) canvas[aC] = aNV;
			aNa(), aNb(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aNb(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aNb(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(3, "orders", 6,
					"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"
					), aNb(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAAJsAAABqBAMAAABZgT4DAAAAJ1BMVEUgIi0xOi5GUTMadCZ3bkARrRyhk1AA1g/AqzAA/wDVxWXy2D/25XVxgVVAAAAGjElEQVRo3s2az2vcRhTHn+SV14l9UEJ+NEkPGygBEx/UhhJ8W0owJclBLZSwtw2YUGoflJhg9uaWUgq5rC2E6M0pJYdmD40xZsn0EAfjw0Z/VOfNSJr35LUjKTr0HcxiTT4785033/c0DvxRJp7fufOozLghlBm1ATLuNoWLXcRZg4ZwAahoN4OTk2uNXnXBbgYXArwW4gCg1wgugPNCRh+uNYLz4Tbi3pQQrxxuDXEH4DSC81C6/y0uXex+Q7gAbjS5FdvQQlwXFhvBRQAPhDgCGDRzZj2wVlYBZhqygGfaApabMigPaSUmdwpus6BS1JG0wu82S+M2wB4UNxfOFSd8uSQugouuU8zkQg4H1s1pWk7DBXNi7PLpycVa3FHXxM9OOZwnz9QWS9kYwGXmGcnEHkM5HOCJanM/bvXZmQjn8JgMyuBiSw7daxf8+B07sdvzpXFTZufBwyOWd2p2nUFp7frLXLpRwo6s0s4qubOz0ioHXLok6bLEcB+cvrPPv7S+pl8NFs8yKV2S7DLxnsIFvtVfKQTiIjyRl3lLMuBJvJQkXLy4w3oWPIV4DCVOH3C2lBBOSJdMuHjcmn2FuIq4UNsP/e6h5bBDZyUyOnR1T602N1jdFEmcB/Zr8Zi1DMG3tF3ahlnEMfG8FYeJa62LvwAWhxAr65aVgAz217rLdCWfI+492Z/IGtvsSC+prsMZQqQLyx7dTO/FG4cOXkfcMXGBp3OCmEQM1gdViO0hbANmuHhL+i15zMZmtal0SUJcQGZ6t0ekm0WEcCGAtIrKzwYn52tWG2rpksS0UJE81lvLJBHUjKRgiFP9keiYPIjk0z3H6LygcYe5HtIRxT+mPduBeaFbNj/HkdntzKObDcz517jjXA881cRzQljIZzfU6H/B4AL8gswEdBKryJIpslF4h+Bm0wUGkH7eJ3nsY+Zkq1XnX0fmArhWMZ4hW2Hr3bQwUVS/RZPUeyHMatX515FZqKc6KqCnEH9zCDPyVHRwegf00Lpa2EUuXe4Caq3MjH1ofRBvXWhLnHxruHTPJW8hsR6uV0uky1wg0JnV79He3pYI6ElcVHwJibSwOu+JdJl4nRfqMUm8uKMQjvI71dGQuh/qpBRbV7l0qQuELf2YlhP10ib3Xbnx98CKfLoYsT+jpFsyOCWenz12WHEC61FWKzZ96k/BA5Gutsek0+LFrl4rzRQUzBmY0rND7dNLx4uttpTOThImXpgqK4TF3PgaqWQRfV91s/EHNpcOxXO829ljU2fDrDikuJi8r6Z5olLrrmuyTosHVv40zxS1sQNaZ12zG1G+GrFnMemU55mneaaowsPKtmdez3fm8n8gbWaW0eRqIVM2z5QNU7kyXAC35Dp6NE+UXfO1qtV+lj1NMyWSK1tNl5bhhrDwMu1//TWjTubrJjpgZdPT1QfL9PXMHDIcOnhXyRcDndz1Iu4Q4AbbWimcLTVYZjhZz5JjF3uLqGU2trgRmMmumR62qN9J3dblTHoMJzNFCQOX/fmM9suUySXJS6PenhMj7T5u+IA3ZB5O5CXu0ZX0y/fl3oxO4uT0IFV3DJgQ1/HwWYX+zld7+Fi1Gl/8Lsf+Kv/ZUjIlMJV/RNhv36hvV0XJKeAC3Tk81uYnuzcZs8nUwDHWhXTgFd1vtAu47fRw/gl5tEbTcZgCWdxKk/tcARdlc3nVSUdeOo1m1mD/lPUHywVcbJxo9aYcefF+cka8UkNWTG73iq02zbHJ36PkI8GG5I2pwXm67aoTx7n3Gpw/PS3KxFFeaQwub5Sqx2FeVQ0uPC3NPh67+eufwUW0PleLbl4GDS4+6W1lw817QfJO1oFRPdrE9OAE5xeNvHqeUFxqAtXjvWmXCG6bV+jy8c5cihBc7Uzpm05zSFtS+1PzhL1tY7moE+TNlOJqmsCEvH5RXM1MOSKtJsXVNIFD0lZTXFgvU3bJ5TnF1TSBPumDKa6mCZBXTX4t49YxgQl5N+Q4v06mHNM7DoYL6pQLeuPAccM6W8tu4hiulgn06Y0Qw0V1TKBL73MYLq5jAi69muL3dx6sPCkT68kEf07wA/t7F8f5UC7Oq773/JH64JyKC6B1r0w8TCb4cyI/HLKbN47bqZ4pu+z2nONqmADLkwKuhgl02L1m4Wa2ugnAWbjK5eKY/1WkgKtsAjxPTuIWPsEATuBCaD2pFIU/nhVwEVSO3hm4uDpucNYVvleVNnPmXwSiHyoG/98Hw/8AAslhvSUnOcMAAAAASUVORK5CYII="
					), aNb(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aNb(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg=="
					), aNb(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(8,
					"googleplay", 3,
					"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"
					), aNb(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aNb(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aNb(14, "bestPlayer", 5,
					"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"
					), aNb(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aNb(16, "apple", 3,
					"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"
					), aNb(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aNb(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aNb(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aNb(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aNb(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aNb(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC"
					), aNb(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aNb(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aNb(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aNb(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aNb(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aNb(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eU) {
		return canvas[eU]
	}, this.xQ = function(name) {
		for (var aC = a4a.length - 1; 0 <= aC; aC--)
			if (a4a[aC] === name) return canvas[aC];
		return aNV
	}, this.wG = function() {
		return aNU <= 0
	}, this.aNX = function() {
		aNU = 0, aNY()
	}
}

function cc() {
	var aNh = [
			[100, 100, 100],
			[144, 0, 0],
			[0, 128, 0],
			[0, 0, 144],
			[128, 128, 0],
			[128, 0, 128],
			[0, 128, 128],
			[196, 196, 196],
			[0, 0, 0]
		],
		aNi = [
			[4, 4, 4, 20],
			[4, 0, 0, 27],
			[0, 4, 0, 31],
			[0, 0, 4, 27],
			[4, 4, 0, 31],
			[4, 0, 4, 31],
			[0, 4, 4, 31],
			[4, 4, 4, 14],
			[4, 4, 4, 13]
		],
		aNw = (this.aNj = null, this.aNk = null, this.aNl = null, this.aNm = null, this.aNn = null, this.aNo = null, this.aNp = null, this.aNq = null, this.aNr = null, this.aNs = null, null),
		aNx = new Uint8Array(4),
		aNy = new Int32Array(aNx.buffer);

	function aO2(kP, oU) {
		for (var aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aC = kP; aC < oU; aC++) aNj[aC] = bO.gC(64 * az.random(), az.value(100)) << 2, aNk[aC] = bO.gC(64 * az.random(), az.value(100)) << 2, aNl[aC] = bO.gC(64 * az.random(), az.value(100)) << 2
	}

	function aO1(kP, oU) {
		for (var colorsData = aE.data.colorsData, aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aC = kP; aC < oU; aC++) {
			var gD = colorsData[aC];
			aNj[aC] = 4 * (gD >> 12), aNk[aC] = 4 * (gD >> 6 & 63), aNl[aC] = 4 * (63 & gD)
		}
	}

	function aOK(fP, aOM) {
		aHY[fP] = 0, aHY[fP + 1] = 0, aHY[fP + 2] = aOM, aHY[fP + 3] = 0, aON(fP)
	}

	function aOS(eT, wC, g5, g4) {
		return aNx[0] = eT, aNx[1] = wC, aNx[2] = g5, aNx[3] = g4, aNy[0]
	}

	function aON(fP) {
		var fs;
		be.oc || (fs = ad.a2A(fP), fP = ad.a2B(fP), be.oc = fs >= bd.aHX[0] && fs <= bd.aHX[2] && fP >= bd.aHX[1] && fP <= bd.aHX[3])
	}
	this.fn = new Int32Array(4), this.aNz = new Int32Array(8), this.dw = function() {
		var fn = this.fn,
			fn = (fn[0] = -4 * bV.fw, fn[1] = 4, fn[2] = -fn[0], fn[3] = -fn[1], this.aNz);
		fn[0] = -4 * bV.fw - 4, fn[1] = -4 * bV.fw, fn[2] = -4 * bV.fw + 4, fn[3] = -4, fn[4] = 4, fn[5] = 4 * bV.fw - 4, fn[6] = 4 * bV.fw, fn[7] = 4 * bV.fw + 4
	}, this.dv = function() {
		if (this.aNj ? (this.aNj.fill(0), this.aNk.fill(0), this.aNl.fill(0), this.aNm.fill(0), this.aNn.fill(0), this.aNo.fill(0), this.aNp.fill(0), this.aNq.fill(0), this.aNr.fill(0), this.aNs.fill(0), this.aDo.fill(0)) : (this.aNj =
				new Uint8Array(aE.fi), this.aNk = new Uint8Array(aE.fi), this.aNl = new Uint8Array(aE.fi), this.aNm = new Uint8Array(aE.fi), this.aNn = new Uint8Array(aE.fi), this.aNo = new Uint8Array(aE.fi), this.aNp = new Uint8Array(aE.fi),
				this.aNq = new Uint8Array(aE.fi), this.aNr = new Uint8Array(aE.fi), this.aNs = new Uint8Array(aE.fi), this.aDo = new Uint8Array(aE.fi)), aE.il)
			for (var aG3 = bj.aG3, aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aC = aE.fi - 1; 0 <= aC; aC--) {
				var ev = aG3[aC],
					m4 = bO.gC((aNi[ev][3] + 1) * az.random(), az.value(100));
				aNj[aC] = aNh[ev][0] + m4 * aNi[ev][0], aNk[aC] = aNh[ev][1] + m4 * aNi[ev][1], aNl[aC] = aNh[ev][2] + m4 * aNi[ev][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aO1(0, aE.l9), aO2(aE.l9, aE.fi)) : aO2(0, aE.fi) : aO1(0, aE.fi);
		! function() {
			var aC, fo, aNj = ad.aNj,
				aNk = ad.aNk,
				aNl = ad.aNl;
			for (aC = aE.fi - 1; 0 <= aC; aC--) fo = bO.gC(aNj[aC] + aNk[aC] + aNl[aC], 3), aNj[aC] += aO8(fo - aNj[aC], 2), aNk[aC] += aO8(fo - aNk[aC], 2), aNl[aC] += aO8(fo - aNl[aC], 2), aNj[aC] -= aNj[aC] % 4, aNk[aC] -= aNk[aC] % 4, aNl[
				aC] -= aNl[aC] % 4
		}(),
		function() {
			for (var fl = aE.fi, aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aNm = ad.aNm, aC = 0; aC < fl; aC++) aNj[aC] += aC >> 7, aNk[aC] += aC >> 5 & 3, aNl[aC] += aC >> 3 & 3, aNm[aC] = 7 & aC
		}(), this.aO5(),
			function() {
				for (var fl = aE.fi, aNn = ad.aNn, aNo = ad.aNo, aNp = ad.aNp, aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aC = 0; aC < fl; aC++) {
					var eT = aNj[aC],
						wC = aNk[aC],
						g5 = aNl[aC];
					60 <= eT + wC + g5 ? (aNn[aC] = Math.max(eT - 40, 3 & eT), aNo[aC] = Math.max(wC - 40, 3 & wC), aNp[aC] = Math.max(g5 - 40, 3 & g5)) : (aNn[aC] = eT + 40, aNo[aC] = wC + 40, aNp[aC] = g5 + 40)
				}
			}(),
			function() {
				for (var fl = aE.fi, aNq = ad.aNq, aNr = ad.aNr, aNs = ad.aNs, aNj = ad.aNj, aNk = ad.aNk, aNl = ad.aNl, aC = 0; aC < fl; aC++) {
					var eT = aNj[aC],
						wC = aNk[aC],
						g5 = aNl[aC];
					688 <= eT + wC + g5 ? (aNq[aC] = eT - 88, aNr[aC] = wC - 88, aNs[aC] = g5 - 88) : (aNq[aC] = Math.min(eT + 88, 252 + (3 & eT)), aNr[aC] = Math.min(wC + 88, 252 + (3 & wC)), aNs[aC] = Math.min(g5 + 88, 252 + (3 & g5)))
				}
			}()
	}, this.aC9 = function(player) {
		var h = bR.gK;
		return h[0] = this.aNj[player], h[1] = this.aNk[player], h[2] = this.aNl[player], h
	}, this.aO5 = function() {
		for (var aC = aE.fi - 1; 0 <= aC; aC--) this.aDo[aC] = this.aNj[aC] + this.aNk[aC] + this.aNl[aC] < 280 ? 0 : 1
	}, this.a2A = function(fP) {
		return bO.gC(fP, 4) % bV.fw
	}, this.a2B = function(fP) {
		return bO.gC(fP, 4 * bV.fw)
	}, this.a1h = function(fs, fu) {
		return Math.floor(4 * (fu * bV.fw + fs))
	}, this.a1x = function(fP) {
		var fn = this.fn;
		return this.aO9(fP + fn[0]) || this.aO9(fP + fn[1]) || this.aO9(fP + fn[2]) || this.aO9(fP + fn[3])
	}, this.g9 = function(fP) {
		var fn = this.fn;
		return this.fq(fP + fn[0]) || this.fq(fP + fn[1]) || this.fq(fP + fn[2]) || this.fq(fP + fn[3])
	}, this.a1v = function(fP, player) {
		var fn = this.fn;
		return this.aOA(fP + fn[0], player) || this.aOA(fP + fn[1], player) || this.aOA(fP + fn[2], player) || this.aOA(fP + fn[3], player)
	}, this.aOB = function(aC, aOC, aOD, aOE) {
		this.aNj[aC] = aOC >> 16, this.aNk[aC] = aOC >> 8 & 255, this.aNl[aC] = 255 & aOC, this.aNn[aC] = aOD >> 16, this.aNo[aC] = aOD >> 8 & 255, this.aNp[aC] = 255 & aOD, this.aNq[aC] = aOE >> 16, this.aNr[aC] = aOE >> 8 & 255, this.aNs[aC] =
			255 & aOE
	}, this.aOF = function(aC) {
		return [(this.aNj[aC] << 16) + (this.aNk[aC] << 8) + this.aNl[aC], (this.aNn[aC] << 16) + (this.aNo[aC] << 8) + this.aNp[aC], (this.aNq[aC] << 16) + (this.aNr[aC] << 8) + this.aNs[aC]]
	}, this.hL = function(fP) {
		return 208 <= aHY[fP + 3]
	}, this.a23 = function(player, fP) {
		return this.hL(fP) && this.a26(player, fP)
	}, this.a26 = function(player, fP) {
		return player === this.fd(fP)
	}, this.aOG = function(fP) {
		return 208 <= aHY[fP + 3] && aHY[fP + 3] < 224
	}, this.kK = function(fP) {
		return 224 <= aHY[fP + 3] && aHY[fP + 3] < 248
	}, this.aOH = function(fP) {
		return 248 <= aHY[fP + 3]
	}, this.a1w = function(fP) {
		for (var fn = this.fn, aC = 3; 0 <= aC; aC--)
			if (this.iT(fP + fn[aC])) return !0;
		return !1
	}, this.fg = function(fP) {
		return this.hL(fP) || this.fc(fP)
	}, this.iT = function(fP) {
		return 0 === aHY[fP + 3] && 2 === aHY[fP + 2]
	}, this.fc = function(fP) {
		return 0 === aHY[fP + 3] && 1 === aHY[fP + 2]
	}, this.aOI = function(fP) {
		return 0 === aHY[fP + 3] && 3 === aHY[fP + 2]
	}, this.fq = function(fP) {
		return 0 === aHY[fP + 3] && 5 === aHY[fP + 2]
	}, this.aO9 = function(fP) {
		return 0 === aHY[fP + 3] && 3 <= aHY[fP + 2]
	}, this.fT = function(fP) {
		return (aHY[fP] >> 1 << 8) + aHY[fP + 1]
	}, this.aOJ = function(fP) {
		return 1 & aHY[fP]
	}, this.aOA = function(fP, player) {
		return this.fc(fP) || this.hL(fP) && player !== this.fd(fP)
	}, this.fd = function(fP) {
		return ((3 & aHY[fP]) << 7) + ((3 & aHY[fP + 1]) << 5) + ((3 & aHY[fP + 2]) << 3) + (7 & aHY[fP + 3])
	}, this.a24 = function(fP) {
		aOK(fP, 1)
	}, this.aOL = function(fP) {
		aOK(fP, 2)
	}, this.a1i = function(fP, player) {
		aHY[fP] = this.aNj[player], aHY[fP + 1] = this.aNk[player], aHY[fP + 2] = this.aNl[player], aHY[fP + 3] = 208 + this.aNm[player], aON(fP)
	}, this.hG = function(fP, player) {
		aHY[fP] = this.aNn[player], aHY[fP + 1] = this.aNo[player], aHY[fP + 2] = this.aNp[player], aHY[fP + 3] = 224 + this.aNm[player], aON(fP)
	}, this.kL = function(fP, player) {
		aHY[fP] = this.aNq[player], aHY[fP + 1] = this.aNr[player], aHY[fP + 2] = this.aNs[player], aHY[fP + 3] = 248 + this.aNm[player], aON(fP)
	}, this.aOO = function(player, oC, oD, oP, oQ) {
		for (var aC, gD, aOP = aNw = null !== aNw && aNw.buffer === aHY.buffer ? aNw : new Int32Array(aHY.buffer), j = bV.fw, g4 = this.aNm[player], aOQ = player >> 3, aOR = aOS(3, 3, 3, 255), eT = aOQ >> 4, wC = aOQ >> 2 & 3, aOQ = 3 & aOQ,
				aOT = aOS(eT, wC, aOQ, 208 + g4), aOU = aOS(eT, wC, aOQ, 224 + g4), aOV = aOS(eT, wC, aOQ, 248 + g4), aOW = aOS(this.aNj[player], this.aNk[player], this.aNl[player], 208 + g4), aOX = aOS(this.aNn[player], this.aNo[player], this
					.aNp[player], 224 + g4), aOY = aOS(this.aNq[player], this.aNr[player], this.aNs[player], 248 + g4), aAi = bd.aHX, aOZ = !1, fu = oD; fu <= oQ; fu++) {
			var aOa = fu * j + oP,
				aOb = 1,
				aOc = 0;
			for (fu >= aAi[1] && fu <= aAi[3] && (aOb = fu * j + aAi[0], aOc = fu * j + aAi[2]), aC = fu * j + oC; aC <= aOa; aC++) {
				if ((gD = aOP[aC] & aOR) === aOT) aOP[aC] = aOW;
				else if (gD === aOU) aOP[aC] = aOX;
				else {
					if (gD !== aOV) continue;
					aOP[aC] = aOY
				}
				aOZ = aOZ || aOb <= aC && aC <= aOc
			}
		}
		aOZ && (be.oc = !0)
	}
}

function d1() {
	var aOd = 0,
		aOe = new Uint16Array(64);

	function fH(a9l) {
		aOd -= 2;
		for (var aC = a9l; aC < aOd; aC += 2) aOe[aC] = aOe[aC + 2], aOe[aC + 1] = aOe[aC + 3]
	}
	this.dv = function() {
		aOd = 0
	}, this.eq = function() {
		var aC, kI, jR;
		if (0 !== aOd)
			if (0 === ah.nl[aE.fV]) aOd = 0;
			else if (0 === ae.gs(aE.fV)) aOd = 0;
		else
			for (aC = aOd - 2; 0 <= aC; aC -= 2)(kI = aOe[aC]) < aE.fi && 0 === ah.nl[kI] ? fH(aC) : (jR = aOe[aC + 1], (kI >= aE.fi && bw.aOg(aE.fV) || kI < aE.fi && bw.aOh(aE.fV, kI)) && (bB.iD.iK(jR, kI), fH(aC)))
	}, this.iL = function(kI, jR) {
		! function(kI, jR) {
			for (var aC = 0; aC < aOd; aC += 2)
				if (aOe[aC] === kI) return aOe[aC + 1] = Math.min(aOe[aC + 1] + jR, 1023), 1;
			return
		}(kI, jR) && 64 !== aOd && (aOe[aOd] = kI, aOe[aOd + 1] = jR, aOd += 2)
	}
}

function cd() {
	function aOp(player) {
		var em;
		bD.h7.a7l(player) && (em = ah.hn[player] - ah.a7q[player] + ae.aOr(player), bg.hB(player, Math.abs(em), em < 0 ? 18 : 12)), ah.hn[player] = 0, ah.a7q[player] = 0
	}

	function aOy() {
		aY.show(!1, !1, !1, !0), aX.aGZ(), bU.a3q.a4n()
	}

	function aOl(player, aOx) {
		for (var aC = aOx.length - 1; 0 <= aC; aC--) ae.aP0(aOx[aC], player)
	}

	function aOo(player) {
		var jh = ah.jh,
			ji = ah.ji,
			jj = ah.jj,
			jk = ah.jk,
			fw = bV.fw;
		if (ah.hZ[player]) {
			ah.hZ[player] = 0;
			for (var oC = jh[player], oD = jj[player], fs = ji[player]; oC <= fs; fs--)
				for (var fu = jk[player]; oD <= fu; fu--) {
					var hJ = 4 * (fu * fw + fs);
					ad.a23(player, hJ) && ad.a24(hJ)
				}
		}
		ji[player] = jk[player] = 0, jh[player] = jj[player] = Math.max(fw, bV.fx)
	}
	this.e3 = function(hJ) {
		var player, em = ah.hZ[hJ] + ah.a1d[hJ];
		bQ.z.lD[hJ] ? em && (aOl(player = hJ, ae.aOm(player)), ag.aOn(player), aOo(player), aG.h9(player), ae.clear(player), aOp(player), function(player) {
			ah.a1d[player] = 0, ah.hD[player] = [], ah.hR[player] = [], ah.hS[player] = [], ah.gA[player] = []
		}(player)) : !em && ah.hD[hJ].length || this.aOk(hJ)
	}, this.aOk = function(player) {
		! function(player) {
			bD.h7.kW(player) || (ah.a4s[player] = bl.a56.aOw(), aE.a4H++);
			var aOx = ae.aOm(player);
			0 === aOx.length ? bD.h7.a7i(player) && aOy() : (aOl(player, aOx), function(player, aOx) {
				var aP2 = aOx[function(aOx) {
					var aC, eU = 0;
					for (aC = aOx.length - 1; 1 <= aC; aC--) ah.hZ[aOx[aC]] > ah.hZ[aOx[eU]] && (eU = aC);
					return eU
				}(aOx)];
				9 === aE.lR && (1 === bj.fj[player] ? az.l1(8) && b0.aP3(aP2) : aF.iY[player] && (aO.aBI(765, 0), aO.a2X(280, L(174, [ah.a2Y[aP2], ah.a2Y[player]]), 765, aP2, bE.qK, bE.rm, -1, !0)));
				if (bD.h7.a7i(player)) aOy(), aO.a4R(aP2, 1);
				else {
					for (var aC = aOx.length - 1; 0 <= aC; aC--)
						if (bD.h7.a7l(aOx[aC]) && (bg.nh[4 - bD.h7.kW(player)]++, bD.h7.a7i(aOx[aC]))) return aO.a4R(player, 0);
					bD.h7.kW(player) || aO.aAz(0, player, aP2)
				}
			}(player, aOx))
		}(player), ag.aOn(player), aOo(player), aOp(player),
			function(player) {
				ah.nl[player] = 0, ah.hD[player] = null, ah.hR[player] = null, ah.hS[player] = null, ah.gA[player] = null
			}(player), aG.h9(player), ae.clear(player), bQ.aOu.aOv(player)
	}
}

function d6() {
	var input;

	function aP4(e) {
		(e = e.target.files) && 0 < e.length && b7.aP7(e[0])
	}

	function aPB(e) {
		var ev = new Image;
		ev.onload = aPC, ev.src = e.target.result
	}

	function aPC(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aPE = bm.buffer.data[162].value,
			max = Math.min(bV.aPF, aPE),
			aPE = (max = a1.id || bM.uA() ? Math.min(1400, aPE) : max) / Math.max(j, k);
		if (aPE < 1 && (j = Math.floor(aPE * j + .125), k = Math.floor(aPE * k + .125)), max < j || max < k || j < 10 || k < 10) aPE = "Invalid Image Dimensions!", a1.zw ? a1.zw.showToast(aPE) : alert(aPE);
		else {
			for (var max = document.createElement("canvas"), aPE = (max.width = j, max.height = k, max.getContext("2d")), aPH = document.createElement("canvas"), aPI = (aPH.width = e.width, aPH.height = e.height, aPH.getContext("2d")), e = (aPI
					.drawImage(e, 0, 0), aPI.getImageData(0, 0, aPH.width, aPH.height)), aPI = aPE.createImageData(j, k), src = e.data, aPL = aPI.data, aEO = aPH.width / j, aEP = aPH.height / k, fu = 0; fu < k; fu++)
				for (var fs = 0; fs < j; fs++) {
					var aPM = Math.floor(fs * aEO),
						aPM = 4 * (Math.floor(fu * aEP) * aPH.width + aPM),
						aPP = 4 * (fu * j + fs);
					aPL[aPP] = src[aPM], aPL[1 + aPP] = src[1 + aPM], aPL[2 + aPP] = src[2 + aPM], aPL[3 + aPP] = 255
				}
			aPE.putImageData(aPI, 0, 0), 20 === u.vq && u.a5T().aPC(max)
		}
	}
	this.dv = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aP4
	}, this.yG = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aP5 = function() {
		input.click()
	}, this.aP7 = function(aP8) {
		var h = aP8.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aPB, h.readAsDataURL(aP8))
	}
}

function d4() {
	this.aPQ = new Uint32Array(aE.fi), this.dv = function() {
		10 === aE.lR && this.aPQ.fill(0)
	}, this.eq = function() {
		10 === aE.lR && this.ly()
	}, this.ly = function() {
		for (var hJ, target, aGm, aPQ = this.aPQ, xJ = am.lk, tD = ah.hn, aC = am.lf - 1; 0 <= aC; aC--)(hJ = xJ[aC]) >= aE.l9 || (target = Math.max(bO.gC(tD[hJ], 4), 2048), aGm = Math.max(af.aGn(hJ), 100), aPQ[hJ] += bO.gC(aGm * target, 1e4),
			aPQ[hJ] > target && (aPQ[hJ] = target))
	}, this.a7u = function(player, iY) {
		return 10 !== aE.lR || bD.h7.kW(player) ? iY : Math.min(this.aPQ[player], iY)
	}, this.a80 = function(player, iY) {
		10 !== aE.lR || bD.h7.kW(player) || (this.aPQ[player] -= iY)
	}
}

function d7() {
	var aPR = -1,
		aPS = null,
		aPT = -1,
		yl = 4;

	function aPV() {
		aN.aAI() ? be.render() : be.a4P()
	}

	function aPd(ev, fo) {
		var eT = ev >> 16,
			wC = ev >> 8 & 255,
			ev = 255 & ev,
			aPe = 255 - fo,
			aPe = (aPe < eT && aPe < wC && aPe < ev && (fo = -fo), aPR >> 7),
			aPg = aPR >> 5 & 3,
			aPh = aPR >> 3 & 3;
		return (Math.max(Math.min(eT + fo, 252 + aPe), aPe) << 16) + (Math.max(Math.min(wC + fo, 252 + aPg), aPg) << 8) + Math.max(Math.min(ev + fo, 252 + aPh), aPh)
	}

	function aPU() {
		return -1 !== aPR && (ad.aOB(aPR, aPS[0], aPS[1], aPS[2]), aPa(aPR), aPR = -1)
	}

	function aPa(player) {
		var aPi = ah;
		bi.e2 = !0, ad.aOO(player, aPi.jh[player], aPi.jj[player], aPi.ji[player], aPi.jk[player])
	}
	this.dv = function() {
		aPS = null, aPT = aPR = -1, yl = bO.j0(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.eq = function(c3) {
		if (bm.buffer.data[15].value && 0 !== yl && (c3 || !bM.uA())) {
			var c3 = bP.i2(bM.hq),
				i3 = bP.i4(bM.hr);
			if (bP.i5(c3, i3)) {
				c3 = bP.g8(c3, i3), i3 = bP.fb(c3);
				if (aPT === i3)
					if (ad.hL(i3)) {
						if (aPR === ad.fd(i3)) return
					} else if (-1 === aPR) return;
				! function(fP) {
					ad.hL(fP) ? (fP = ad.fd(fP)) !== aPR && (aPU(), function(player) {
						aPR = player, aPS = ad.aOF(player);
						var aPY = function() {
							var qA = aPS,
								aPb = yl << 2,
								aPc = aPb << 1;
							return [aPd(qA[0], aPb), aPd(qA[1], aPc), aPd(qA[2], aPc)]
						}();
						ad.aOB(player, aPY[0], aPY[1], aPY[2]), aPa(player)
					}(fP), aPV()) : aPU() && aPV()
				}(aPT = i3)
			} else aPU() && aPV()
		}
	}
}

function d8() {
	var yZ = 0,
		aPj = 0,
		aPk = 0,
		aPl = 0,
		aPT = -1;

	function aPo(fP) {
		if (aPT === fP) return !1;
		if (-1 === (aPT = fP)) yZ = 0, aO.aBW(yZ, 0);
		else {
			if (ad.hL(fP)) return aPk = ad.fd(fP), l8 = ah.hn[aPk] - ah.a7q[aPk], (4 !== yZ || l8 !== aPj) && (yZ = 4, aPj = l8, aO.aBW(yZ, l8), !0);
			if (ad.fc(fP)) return 3 !== yZ && (yZ = 3, aO.aBW(yZ, 0), !0);
			if (ad.fq(fP)) return 2 !== yZ && (yZ = 2, aO.aBW(yZ, 0), !0);
			var l8 = bQ.ly.aA6(bM.hq, bM.hr);
			if (-1 === l8) return 1 !== yZ && (yZ = 1, aO.aBW(yZ, 0), !0);
			fP = bQ.z.aB7[l8];
			if (aPk = bQ.z.n2[l8], aPl = bQ.z.n3[l8] >> 3, 5 === yZ && fP === aPj) return !1;
			yZ = 5, aPj = fP, aO.aBW(yZ, fP)
		}
		return !0
	}
	this.dv = function() {
		aPl = aPk = aPj = yZ = 0, aPT = -1
	}, this.eq = function(c3) {
		var i3;
		!c3 && bM.uA() || (c3 = bP.i2(bM.hq), i3 = bP.i4(bM.hr), bP.i5(c3, i3) ? (c3 = bP.g8(c3, i3), aPo(bP.fb(c3))) : aPo(-1))
	}, this.nS = function() {
		var aPq, l8, aA4, aPp;
		if (0 !== yZ && 2 !== yZ)
			if (bM.uA()) {
				if (1 !== yZ && 3 !== yZ) {
					if (4 === yZ) return void(l8 = ah.hn[aPk] - ah.a7q[aPk], aPj === l8 || (aPj = l8, aO.aBW(yZ, l8)));
					(aA4 = bQ.ly.oB(aPl, aPk)) < 0 ? (yZ = 1, aO.aBW(yZ, 0)) : (aPp = bQ.z.aB7[aA4]) !== aPj && (aPj = aPp, aO.aBW(yZ, aPp))
				}
			} else if (1 === yZ) - 1 !== (aA4 = bQ.ly.aA6(bM.hq, bM.hr)) && (yZ = 5, aPj = bQ.z.aB7[aA4], aO.aBW(yZ, aPj));
		else if (3 === yZ) ad.hL(aPT) && (yZ = 4, aPq = ad.fd(aPT), aPj = ah.hn[aPq] - ah.a7q[aPq], aO.aBW(yZ, aPj));
		else if (4 === yZ) {
			if (ad.hL(aPT)) return void(aPq = ad.fd(aPT), l8 = ah.hn[aPq] - ah.a7q[aPq], aPj === l8 || (aPj = l8, aO.aBW(yZ, l8)));
			yZ = 3, aO.aBW(yZ, 0)
		} else - 1 === (aA4 = bQ.ly.aA6(bM.hq, bM.hr)) ? (yZ = 1, aO.aBW(yZ, 0)) : (aPp = bQ.z.aB7[aA4]) !== aPj && (aPj = aPp, aO.aBW(yZ, aPp))
	}
}

function dh() {
	function aPs(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aQ0, h.readAsText(e))
	}

	function aQ0(e) {
		var aQ3;
		aE.a48 || (e = JSON.parse(e.target.result), aQ3 = aE.data = new a8r, aQ4(e, aQ3, "mapType", 0, 2), aQ4(e, aQ3, "mapProceduralIndex", 0, 255), aQ4(e, aQ3, "mapRealisticIndex", 0, 255), aQ4(e, aQ3, "mapSeed", 0, 16383), function(aQ2, aQ3, hK,
				max) {
				aQ2 = aQ2[hK];
				aQ3[hK] = aQA(aQ2) ? aQ2.slice(0, max) : aQ3[hK]
			}(e, aQ3, "mapName", 20), function(aQ2, aQ3, hK) {
				var aPD;
				2 === aQ3.mapType && (!aQA(aQ2 = aQ2[hK]) || aQ2.length <= 20 ? aQ3.mapType = 0 : ((aPD = new Image).onload = function() {
					bC.aQB.aQC(aPD, 1), aPD.onload = null, aPD = null
				}, aPD.src = aQ2))
			}(e, aQ3, "canvas"), aQ4(e, aQ3, "passableWater", 0, 1), aQ4(e, aQ3, "passableMountains", 0, 1), aQ4(e, aQ3, "playerCount", 1, 512), aQ4(e, aQ3, "humanCount", 1, 1), aQ4(e, aQ3, "selectedPlayer", 0, 0), aQ4(e, aQ3, "gameMode", 0, 1),
			aQ4(e, aQ3, "playerMode", 0, 0), aQ4(e, aQ3, "battleRoyaleMode", 0, 0), aQ4(e, aQ3, "numberTeams", 0, 8), aQ4(e, aQ3, "isZombieMode", 0, 0), aQ4(e, aQ3, "isContest", 0, 0), aQ4(e, aQ3, "isReplay", 0, 0), aQ7(e, aQ3, "elo", 16, 2,
				16383), aQ4(e, aQ3, "colorsType", 0, 1), aQ4(e, aQ3, "colorsPersonalized", 0, 1), aQ7(e, aQ3, "colorsData", 32, 512, 262143), aQ4(e, aQ3, "selectableColor", 0, 1), aQ7(e, aQ3, "teamPlayerCount", 16, 9, 512), aQ4(e, aQ3,
				"neutralBots", 0, 1), aQ4(e, aQ3, "botDifficultyType", 0, 3), aQ4(e, aQ3, "botDifficultyValue", 0, 15), aQ7(e, aQ3, "botDifficultyTeam", 8, 9, 15), aQ7(e, aQ3, "botDifficultyData", 8, 512, 15), aQ4(e, aQ3, "spawningType", 0, 2),
			aQ4(e, aQ3, "spawningSeed", 0, 16383), aQ7(e, aQ3, "spawningData", 16, 1024, 4095), aQ4(e, aQ3, "selectableSpawn", 0, 1), aQ4(e, aQ3, "playerNamesType", 0, 2),
			function(aQ2, aQ3, hK, size, max) {
				var a6s = aQ2[hK];
				if (Array.isArray(a6s)) {
					for (var a6t = new Array(size), fl = Math.min(a6s.length, size), aC = 0; aC < fl; aC++) a6t[aC] = aQA(a6s[aC]) ? a6s[aC].slice(0, max) : "";
					a6t.fill("", fl), aQ3[hK] = a6t
				}
			}(e, aQ3, "playerNamesData", 512, 20), aQ4(e, aQ3, "selectableName", 0, 1), aQ4(e, aQ3, "aIncomeType", 0, 2), aQ4(e, aQ3, "aIncomeValue", 0, 255), aQ7(e, aQ3, "aIncomeData", 8, 512, 255), aQ4(e, aQ3, "tIncomeType", 0, 2), aQ4(e, aQ3,
				"tIncomeValue", 0, 255), aQ7(e, aQ3, "tIncomeData", 8, 512, 255), aQ4(e, aQ3, "iIncomeType", 0, 2), aQ4(e, aQ3, "iIncomeValue", 0, 255), aQ7(e, aQ3, "iIncomeData", 8, 512, 255), aQ4(e, aQ3, "sResourcesType", 0, 2), aQ4(e, aQ3,
				"sResourcesValue", 0, 2047), aQ7(e, aQ3, "sResourcesData", 16, 512, 2047), u.y(), u.z.vj[0] = 0, u.v(19))
	}

	function aQ4(aQ2, aQ3, hK, min, max) {
		aQ2 = aQ2[hK];
		aQ3[hK] = "number" == typeof aQ2 && min <= aQ2 && aQ2 <= max ? Math.floor(aQ2) : aQ3[hK]
	}

	function aQA(pb) {
		return "string" == typeof pb
	}

	function aQ7(aQ2, aQ3, hK, aQD, size, max) {
		var a6s = aQ2[hK];
		if (Array.isArray(a6s)) {
			for (var a6t = new(8 === aQD ? Uint8Array : 16 === aQD ? Uint16Array : Uint32Array)(size), fl = Math.min(a6s.length, size), aC = 0; aC < fl; aC++) a6t[aC] = bO.j0(a6s[aC], 0, max);
			aQ3[hK] = a6t
		}
	}
	this.aPr = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aPs, input.click()
	}, this.aPt = function() {
		for (var aPw, aI9, a9R = aE.data, keys = Object.keys(a9R), aPu = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9R[key] instanceof Uint8Array || a9R[key] instanceof Uint16Array || a9R[key] instanceof Uint32Array ? aPu[key] = Array.from(a9R[key]) : aPu[key] = a9R[key]
		}
		aPu.canvas = 2 === aPu.mapType && aPu.canvas ? aPu.canvas.toDataURL() : null, aPw = aPu, aPw = JSON.stringify(aPw, null, 2), aPw = new Blob([aPw], {
			type: "application/json"
		}), (aI9 = document.createElement("a")).href = URL.createObjectURL(aPw), aI9.download = "tt_scenario.json", aI9.click()
	}
}

function ch() {
	var aQE, aQF, size, kI, iY, aQG;

	function aQH(player) {
		return player < aE.l9 ? aQE * player : aQE * aE.l9 + aQF * (player - aE.l9)
	}
	this.dv = function() {
		aQE = aE.l9 < 16 ? 12 : 8, aQF = 4;
		var fl = aQH(aE.fi);
		size = new Uint8Array(aE.fi), kI = new Uint16Array(fl), iY = new Uint32Array(fl), aQG = new Uint8Array(fl)
	}, this.tH = function(aCr, aQI) {
		var aQJ = this.ho(aCr, aQI),
			aQI = (this.hm(aCr, aQI, 0), bD.h7.hA(aCr, aQJ));
		bg.hB(aCr, aQJ - aQI, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aP0 = function(player, aQI) {
		var aQM, aQI = function(player, aQI) {
			var aC, m4 = aQH(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kI[m4 + aC] === aQI) return aC;
			return size[player]
		}(player, aQI);
		aQI !== size[player] && (aQM = iY[aQH(player) + aQI], this.hC(player, aQI), this.eu(player, aQM, aE.fi))
	}, this.kU = function(player, aQI) {
		for (var m4 = aQH(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kI[m4 + aC] === aQI) return !0;
		return !1
	}, this.kn = function(player) {
		return player < aE.l9 ? size[player] < aQE : size[player] < aQF
	}, this.gs = function(player) {
		return size[player]
	}, this.gx = function(player, aC) {
		return kI[aQH(player) + aC]
	}, this.gy = function(player, aC) {
		return iY[aQH(player) + aC]
	}, this.ho = function(player, aQI) {
		for (var m4 = aQH(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kI[m4 + aC] === aQI) return iY[m4 + aC];
		return 0
	}, this.aOr = function(player) {
		for (var m4 = aQH(player), gD = 0, aC = size[player] - 1; 0 <= aC; aC--) gD += iY[m4 + aC];
		return gD
	}, this.hm = function(player, aQI, aQM) {
		for (var m4 = aQH(player), aC = size[player] - 1; 0 <= aC; aC--) kI[m4 + aC] === aQI && (iY[m4 + aC] = aQM)
	}, this.hX = function(player, aC, aQM) {
		iY[aQH(player) + aC] = Math.max(aQM, 0)
	}, this.hY = function(player, aC) {
		aQG[aQH(player) + aC] = 0
	}, this.gz = function(player, aC) {
		return aQG[aQH(player) + aC]
	}, this.eu = function(player, aQM, aQI) {
		ap.jw.kl[player] = ap.jw.kl[aQI] = 8, bD.h7.a7l(aQI) && bg.nh[6 - bD.h7.kW(player)]++;
		for (var m4 = aQH(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kI[m4 + aC] === aQI) return iY[m4 + aC] += aQM, void(iY[m4 + aC] = iY[m4 + aC] > aE.a8l ? aE.a8l : iY[m4 + aC]);
		kI[m4 + size[player]] = aQI, iY[m4 + size[player]] = aQM, aQG[m4 + size[player]] = 1, size[player]++, aQI === aE.fV ? aO.a4R(player, 5) : player < aE.l9 && player === aE.fV && ag.aB1(aQI)
	}, this.hC = function(player, eU) {
		var g4, m4;
		if (0 !== size[player])
			for (m4 = aQH(player), size[player]--, g4 = eU; g4 < size[player]; g4++) kI[m4 + g4] = kI[m4 + g4 + 1], iY[m4 + g4] = iY[m4 + g4 + 1], aQG[m4 + g4] = aQG[m4 + g4 + 1]
	}, this.aOm = function(player) {
		for (var g4, m4, aOx = [], aC = am.lf - 1; 0 <= aC; aC--)
			for (m4 = aQH(am.lk[aC]), g4 = size[am.lk[aC]] - 1; 0 <= g4; g4--)
				if (kI[m4 + g4] === player) {
					aOx.push(am.lk[aC]);
					break
				} return aOx
	}
}

function ci() {
	var aQN;

	function aQP(player) {
		var eT, ko;
		return bD.h7.kW(player) && player < aE.l9 ? 0 : (eT = aQN[bO.gC((aE.fi - 1) * ah.hZ[player], aE.kt)], bi.l6() < 1920 && (eT = Math.max(bO.gC(100 * (13440 - 6 * bi.l6()), 1920), eT)), ko = af.kp(player), ah.hn[player] > ko && (eT -= bO.gC(2 *
			eT * (ah.hn[player] - ko), ko)), Math.min(Math.max(eT, 0), 700))
	}

	function aQe(oO) {
		for (var hZ = ah.hZ, lk = am.lk, aC = am.lf - 1; 0 <= aC; aC--) {
			var hJ = lk[aC];
			bD.h7.hA(hJ, bO.gC(oO * hZ[hJ], 32))
		}
	}

	function aQb() {
		var a4p = aE.fV;
		bR.gH[0] = ah.hn[a4p] - ah.a7q[a4p]
	}

	function aQd(eU) {
		var a4p = aE.fV,
			a4p = ah.hn[a4p] - ah.a7q[a4p] - bR.gH[0];
		af.aFN += a4p, bg.nh[eU] += a4p
	}
	this.aFN = 0, this.e1 = function() {
		for (var fl = aE.fi, aC = (aQN = new Uint16Array(fl), 0); aC < fl; aC++) aQN[aC] = 100 + aQO(bO.gC(25600 * aC, fl - 4), 9)
	}, this.dv = function() {
		(this.aFN = 0) === aE.data.iIncomeType ? this.aGn = aQP : 1 === aE.data.iIncomeType ? this.aGn = function(player) {
			return bO.gC(aE.data.iIncomeValue * aQP(player), 64)
		} : this.aGn = function(player) {
			return bO.gC(aE.data.iIncomeData[player] * aQP(player), 64)
		}
	}, this.eq = function() {
		if (bi.l6() % 10 == 9 && (af.aFN = 0, function() {
				aQb();
				for (var lk = am.lk, hn = ah.hn, aC = am.lf - 1; 0 <= aC; aC--) {
					var hJ = lk[aC],
						aQc = bO.gC(af.aGn(hJ) * hn[hJ], 1e4);
					bD.h7.hA(hJ, Math.max(aQc, 1))
				}
				aQd(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aQb(), 1 === aE.data.aIncomeType)
						for (var hZ = ah.hZ, lk = am.lk, oO = aE.data.aIncomeValue, aC = am.lf - 1; 0 <= aC; aC--) {
							var hJ = lk[aC];
							bD.h7.hA(hJ, bO.gC(oO * hZ[hJ], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hZ = ah.hZ, lk = am.lk, oO = aE.data.aIncomeData, aC = am.lf - 1; 0 <= aC; aC--) {
								var hJ = lk[aC];
								bD.h7.hA(hJ, bO.gC(oO[hJ] * hZ[hJ], 128))
							}
						}();
					aQd(18)
				}
			}(), bi.l6() % 100 == 99)) {
			if (aQb(), 0 === aE.data.tIncomeType) aQe(32);
			else if (1 === aE.data.tIncomeType) aQe(aE.data.tIncomeValue);
			else
				for (var hZ = ah.hZ, lk = am.lk, oO = aE.data.tIncomeData, aC = am.lf - 1; 0 <= aC; aC--) {
					var hJ = lk[aC];
					bD.h7.hA(hJ, bO.gC(oO[hJ] * hZ[hJ], 32))
				}
			aQd(8)
		}
	}, this.kp = function(player) {
		var aC2 = Math.min(bQ.ly.aQR(player), 1024),
			player = this.aQS(player) * (1024 - aC2);
		return Math.max(bO.gC(player, 1024), 1)
	}, this.a7r = function(player) {
		var aC2 = Math.min(bQ.ly.aQR(player), 1024);
		return bO.gC(this.aQT(player) * (1024 - aC2), 1024)
	}, this.aQT = function(player) {
		player = ah.hZ[player] * aE.a8o;
		return Math.min(player, aE.a8l)
	}, this.aQS = function(player) {
		return Math.min(100 * ah.hZ[player], aE.a8m)
	}, this.s2 = function(player, s3) {
		bu.sW(player, s3, bR.gI[0], 0), bD.h7.hA(s3, bR.gI[0]), bg.sX(player, s3), ag.aQU(player, bR.gI[0] + bR.gI[1]), ag.sY(s3, bR.gI[0]), bD.h7.nJ(player)
	}, this.aQV = function() {
		for (var fl = am.lf, xJ = am.lk, m4 = 0, tD = ah.hn, aC = 0; aC < fl; aC++) m4 += tD[xJ[aC]];
		return m4
	}, this.aQW = function(aQX) {
		for (var hJ, fl = am.lf, xJ = am.lk, m4 = 0, tD = ah.hn, fj = bj.fj, aC = 0; aC < fl; aC++) fj[hJ = xJ[aC]] === aQX && (m4 += tD[hJ]);
		return m4
	}
}

function ck() {
	var aQi, aQj, aQk, aQl, aQm, aQn, aQo, aQp, aQq, aQr, aQs, aQt, aQu, aQv, aQw, aQx, aQy, aQz, aR1, aR2, aI2, aR3, aR4, aRA, aRB, aR0 = null,
		aR6 = 0,
		aR7 = !1,
		aR8 = new Float32Array(4),
		aR9 = 0,
		aFs = 112,
		aRC = 0;

	function tk() {
		aQq = Math.floor(+i.j2), aQr = Math.floor(.5 * aQq), aR0.width = i.j, aR0.height = i.k, aR1 = aR0.getContext("2d", {
			alpha: !0
		}), bD.th.textAlign(aR1, 1), bD.th.textBaseline(aR1, 1), aR1.imageSmoothingEnabled = !0
	}

	function aRD() {
		var aC, aRI;
		for (zE.font = bD.th.vG(1, 100 * aQs), aRI = 80 / Math.floor(zE.measureText(bD.pf.a3N(aE.a8l)).width), zE.font = bD.th.vG(1, 100), aC = aE.fi - 1; 0 <= aC; aC--) aQp[aC] = 100 / Math.floor(zE.measureText(ah.a2Y[aC]).width), aQo[aC] = Math
			.min(aRI, aQp[aC])
	}

	function aRJ(aC) {
		return !aRC || (aC = ah.hn[aC]) < 1e6 ? 1 : aC < 1e7 ? aR8[0] : aR8[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aRH(iu) {
		aR7 = !1, aR6 = bi.el, aQz = !1, aQy = 1, aQw = aQx = 0, iu.clearRect(0, 0, i.j, i.k);
		for (var aRQ, aRR, aC, aRS, fontSize, aRT, oC = jS / j3, oD = jT / j3, oP = (i.j + jS) / j3, oQ = (i.k + jT) / j3, aRU = 0 !== ah.nl[aE.fV] && !bD.h7.kW(aE.fV), g4 = am.lf - 1; 0 <= g4; g4--) aC = am.lk[g4], (fontSize = Math.floor(aQv * j3 *
			aRJ(aC) * aQo[aC] * aQm[aC])) < aQu || aQq <= fontSize || aQk[aC] + aQm[aC] > oC && aQk[aC] < oP && aQl[aC] + aQn[aC] > oD && aQl[aC] < oQ && (aRQ = Math.floor(i.j * (aQk[aC] + aQm[aC] / 2 - oC) / (oP - oC)), aRR = Math.floor(i.k * (
			aQl[aC] + aQn[aC] / 2 - oD) / (oQ - oD) - .1 * fontSize), aRS = ad.aDo[aC], iu.font = bD.th.vG(1 === ah.a7h[aC] ? 4 : 1, fontSize), iu.fillStyle = aRV(fontSize, aRS % 2), aRC ? aRW(iu, aC, fontSize, aRQ, aRR, aRS) : aRX(aC,
			fontSize, aRQ, aRR, iu), aQz = !0, 0 < aI2[aC] ? function(aRQ, aRR, fontSize, aC, iu) {
			0 === ku[aC] ? ak.px.a3E(aR2[aC]) ? (function(aRQ, aRR, fontSize, player, sL, iu) {
				for (var a1C = aRR, it = (iu.globalAlpha = aRf(fontSize), aRJ(player) * (aRC ? aR9 : aQp[player])), a1B = aRQ - .5 * fontSize / it - .9 * fontSize, g5 = 0; g5 < 2; g5++) iu.fillText(ak.px.a36(sL), a1B, a1C), a1B =
					aRQ + .5 * fontSize / it + .9 * fontSize;
				iu.globalAlpha = 1
			}(aRQ, aRR, fontSize, aC, aR2[aC], iu), aRZ(aRQ, aRR, fontSize, 0, 0, iu)) : ak.px.a3G(aR2[aC]) ? (aRi(aRQ, aRR, fontSize, aR2[aC], 0, iu), aRZ(aRQ, aRR, fontSize, 0, 1, iu)) : (aRi(aRQ, aRR, fontSize, aR2[aC], 1, iu), aRZ(
				aRQ, aRR, fontSize, 1, 0, iu)) : aRi(aRQ, aRR, fontSize, aR2[aC], 0, iu)
		}(aRQ, aRR, fontSize, aC, iu) : 0 === ku[aC] && aRZ(aRQ, aRR, fontSize, 0, 0, iu), aRU && (0 < aI2[aC + aE.fi] || 0 < aI2[aC + 2 * aE.fi] || 0 < aI2[aC + 3 * aE.fi] || 0 < aI2[aC + 4 * aE.fi]) && function(aRQ, aRR, fontSize, aC, iu) {
			var ev, hE = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aI2[aC + ev * aE.fi] && hE++;
			for (ev = 1; ev < 5; ev++) 0 < aI2[aC + ev * aE.fi] && (! function(aRQ, aRR, fontSize, ev, aC, aRd, em, iu) {
				var a76;
				if (1 === ev) {
					aC = aR2[aC + aE.fi];
					if (!ak.px.a3F(aC)) return function(aRQ, aRR, fontSize, sL, aRd, iu) {
						iu.globalAlpha = aRf(fontSize);
						aRQ -= .534 * aRd * fontSize, aRd = aRR + 1.59 * fontSize;
						iu.font = bD.th.vG(0, .785 * fontSize), iu.fillText(ak.px.a36(sL), aRQ, aRd), iu.globalAlpha = 1
					}(aRQ, aRR, fontSize, aC, aRd, iu);
					a76 = ak.a2a.a2f[aC - 1024 + ak.px.a2r]
				} else a76 = 2 === ev ? aM.a9j()[4].canvas[+(em < 255)] : (3 === ev ? aM.a9j()[5] : aM.a9j()[6]).canvas[0];
				aC = ak.a2a.a2g, em = .8 * fontSize / aC, ev = aRQ - .5 * em * aC - .534 * aRd * fontSize, aRQ = aRR + 1.4 * em * aC;
				iu.setTransform(em, 0, 0, em, ev, aRQ), iu.globalAlpha = aRf(fontSize), iu.drawImage(a76, 0, 0), iu.globalAlpha = 1, iu.setTransform(1, 0, 0, 1, 0, 0)
			}(aRQ, aRR, fontSize, ev, aC, hE, aI2[aC + ev * aE.fi], iu), hE -= 2)
		}(aRQ, aRR, fontSize, aC, iu), (aRT = aQs * fontSize) < aQu || (iu.font = bD.th.vG(1, aRT), aRR += Math.floor(.78 * fontSize), aRC ? aRX(aC, aRT, aRQ, aRR, iu) : aRW(iu, aC, aRT, aRQ, aRR, aRS)))
	}

	function aRX(aC, fontSize, fs, fu, iu) {
		var ___id = aC;
		var showName = aC < aE.l9 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hn[___id] - ah.a7q[___id]) :
			"";
		if (showName) iu.fillText(ah.a2Y[aC], fs, fu), aC < aE.l9 && 2 !== ah.a7h[aC] || (aC = fontSize / aQp[aC], iu.fillRect(fs - .5 * aC, fu + bD.th.a37 * fontSize, aC, Math.max(1, .1 * fontSize)));
		aRC && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iu.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iu.fillText(__fx.utils.getDensity(___id), fs, showName ? fu + fontSize : fu),
			eliminationEstimate && iu.fillText(eliminationEstimate, fs, showName ? fu + 2 * fontSize : fu + fontSize)
		);
	}

	function aRW(iu, aC, fontSize, aRQ, aRR, aRS) {
		var em, a7q = ah.a7q[aC],
			aRc = bD.pf.a3N(ah.hn[aC] - a7q);

		function drawDensity() {
			var eliminationEstimate;
			!aRC && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iu.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), iu.fillText(__fx.utils.getDensity(aC), aRQ, aRR + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hn[aC] - a7q) : "") && iu.fillText(eliminationEstimate, aRQ, aRR + 2 * fontSize)
		}
		a7q ? (em = iu.fillStyle, iu.fillStyle = aRV(fontSize, 2 + aRS % 2), iu.fillText(aRc, aRQ, aRR), iu.fillStyle = em) : aRS >> 1 & 1 ? (iu.lineWidth = .05 * fontSize, iu.strokeStyle = aRV(fontSize, aRS % 2), iu.strokeText(aRc, aRQ, aRR)) : (1 <
			aRS && (iu.lineWidth = .12 * fontSize, iu.strokeStyle = aRV(fontSize, aRS), iu.strokeText(aRc, aRQ, aRR)), iu.fillText(aRc, aRQ, aRR)), drawDensity()
	}

	function aRZ(aRQ, aRR, fontSize, aRd, aRe, iu) {
		var aAH = .95 * fontSize / aR4,
			aRQ = aRQ - .5 * aAH * aR3 + .8 * aRd * fontSize,
			aRd = aRR - 1.76 * aAH * aR4 - (.35 - bD.th.a37 + .7) * aRe * fontSize;
		iu.setTransform(aAH, 0, 0, aAH, aRQ, aRd), iu.globalAlpha = aRf(fontSize), iu.drawImage(ac.get(4), 0, 0), iu.globalAlpha = 1, iu.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aRi(aRQ, aRR, fontSize, sL, aRd, iu) {
		var io, a1B, aAH;
		iu.globalAlpha = aRf(fontSize), ak.px.a3F(sL) ? (io = ak.a2a.a2g, iu.setTransform(aAH = 1.1 * fontSize / io, 0, 0, aAH, a1B = aRQ - .5 * aAH * io - .8 * aRd * fontSize, aAH = aRR - 1.55 * aAH * io), iu.drawImage(ak.a2a.a2f[sL - 1024 + ak.px
			.a2r], 0, 0), iu.setTransform(1, 0, 0, 1, 0, 0)) : (a1B = aRQ - .8 * aRd * fontSize, aAH = aRR - (.35 - bD.th.a37 + 1) * fontSize, iu.fillText(ak.px.a36(sL), a1B, aAH)), iu.globalAlpha = 1
	}

	function aRV(fontSize, aRS) {
		return aQr <= fontSize && fontSize < aQq ? bj.aRk[aRS] + aRf(fontSize).toFixed(3) + ")" : bj.aRl[aRS]
	}

	function aRf(fontSize) {
		return aQr <= fontSize && fontSize < aQq ? 1 - (fontSize - aQr) / (aQq - aQr) : 1
	}

	function aRu(it, j) {
		return 1 + Math.floor(aQt * it * j)
	}

	function aRr(aC) {
		for (var left = aQk[aC], g4 = aQk[aC] - ah.jh[aC] - 1; 0 <= g4; g4--)
			if (!aRw(aC, --left, aQl[aC], aQn[aC])) {
				left++;
				break
			} var right = aQk[aC];
		for (g4 = ah.ji[aC] - aQk[aC] - aQm[aC]; 0 <= g4; g4--)
			if (!aRw(aC, ++right + aQm[aC] - 1, aQl[aC], aQn[aC])) {
				right--;
				break
			} var fs = Math.floor((left + right) / 2),
			top = aQl[aC];
		for (g4 = aQl[aC] - ah.jj[aC] - 1; 0 <= g4; g4--)
			if (!aRx(aC, fs, --top, aQm[aC])) {
				top++;
				break
			} var bottom = aQl[aC];
		for (g4 = ah.jk[aC] - aQl[aC] - aQn[aC]; 0 <= g4; g4--)
			if (!aRx(aC, fs, ++bottom + aQn[aC] - 1, aQm[aC])) {
				bottom--;
				break
			} var fu = Math.floor((top + bottom) / 2);
		aRo(aC, fs, fu, aQm[aC], aQn[aC]) && (aQk[aC] = fs, aQl[aC] = fu)
	}

	function aRo(player, fs, fu, j, k) {
		fo = Math.floor(.2 * j);
		for (var fo, ev = fs + j - 1; fs <= ev; ev--)
			if (!aRw(player, ev, fu, k)) return;
		for (ev = fu + k - 1 - (fo = (fo = Math.floor(.25 * k)) < 1 ? 1 : fo); fu + fo <= ev; ev--)
			if (!aRx(player, fs, ev, j)) return;
		return 1
	}

	function aRw(player, fs, fu, k) {
		return ad.a23(player, 4 * (fu * bV.fw + fs)) && ad.a23(player, 4 * ((fu + k - 1) * bV.fw + fs))
	}

	function aRx(player, fs, fu, j) {
		return ad.a23(player, 4 * (fu * bV.fw + fs)) && ad.a23(player, 4 * (fu * bV.fw + fs + j - 1))
	}
	this.dv = function() {
		if (aRC = bm.buffer.data[7].value || 8 === aE.lR, aQz = !1, aQv = .88, aQs = .5, aQt = 1.8, aQu = 12 - 3 * bm.buffer.data[9].value, aQj = aQi = 0, aQk = new Uint16Array(aE.fi), aQl = new Uint16Array(aE.fi), aQm = new Uint16Array(aE.fi),
			aQn = new Uint16Array(aE.fi), aQo = new Float32Array(aE.fi), aQp = new Float32Array(aE.fi), aR2 = new Uint16Array(2 * aE.fi), aI2 = new Uint8Array(5 * aE.fi), aRA = new Uint8Array(aE.fi), aRB = new Uint8Array(aE.fi), aR0 = aR0 ||
			document.createElement("canvas"), tk(), aQx = aQw = 0, aQy = 1, aRC) {
			var aC, aRI;
			for (aRD(), zE.font = bD.th.vG(1, 100), aRI = 100 / Math.floor(zE.measureText("900 000").width), aC = aE.fi - 1; 0 <= aC; aC--) aQo[aC] = Math.min(aRI, 2 * aQp[aC]);
			aR9 = aRI, aR8[0] = 100 / (aRI * Math.floor(zE.measureText("5 000 000").width)), aR8[1] = 100 / (aRI * Math.floor(zE.measureText("50 000 000").width)), aR8[2] = 100 / (aRI * Math.floor(zE.measureText("500 000 000").width)), aR8[3] =
				100 / (aRI * Math.floor(zE.measureText("1 000 000 000").width))
		} else aRD();
		! function() {
			var aC;
			for (aC = aE.fi - 1; 0 <= aC; aC--) ah.hZ[aC] < 12 ? (aQk[aC] = ah.jh[aC] + 1, aQl[aC] = ah.jj[aC] + 1, aQm[aC] = 1, aQn[aC] = 1) : (aQk[aC] = ah.jh[aC], aQl[aC] = ah.jj[aC] + 1, aQm[aC] = 4, aQn[aC] = 2);
			if (aE.iB)
				for (aC = 0; aC < aE.l9; aC++) aQm[aC] = 0;
			aR3 = ac.get(4).width, aR4 = ac.get(4).height
		}()
	}, this.aQU = function(hJ, a9P) {
		a9P > 18 * ah.hZ[hJ] ? (aRB[hJ] = 6, ad.aDo[hJ] = 2 + ad.aDo[hJ] % 2) : (aRA[hJ] = 4, (ad.aDo[hJ] < 2 || 3 < ad.aDo[hJ]) && (ad.aDo[hJ] = 6 + ad.aDo[hJ] % 2))
	}, this.sY = function(hJ, a9P) {
		a9P > 6 * ah.hZ[hJ] ? (aRB[hJ] = 6, ad.aDo[hJ] = 4 + ad.aDo[hJ] % 2) : (aRA[hJ] = 4, (ad.aDo[hJ] < 4 || 5 < ad.aDo[hJ]) && (ad.aDo[hJ] = 8 + ad.aDo[hJ] % 2))
	}, this.resize = function() {
		tk(), aRH(aR1)
	}, this.a8h = function() {
		for (var aC = 0; aC < aE.l9; aC++) ah.ji[aC] - ah.jh[aC] != 3 || ah.jk[aC] - ah.jj[aC] != 3 ? (aQk[aC] = ah.jh[aC] + (ah.ji[aC] !== ah.jh[aC] ? 1 : 0), aQl[aC] = ah.jj[aC], aQm[aC] = 1, aQn[aC] = 1) : (aQk[aC] = ah.jh[aC], aQl[aC] = ah
			.jj[aC] + 1, aQm[aC] = 4, aQn[aC] = 2)
	}, this.tI = function(player, eU, aRL) {
		! function(player, eU, aRL) {
			player += eU * aE.fi;
			0 === eU ? aR2[player] === aRL && 0 < aI2[player] ? aI2[player] = 0 : (aR2[player] = aRL, aI2[player] = ak.px.a3E(aRL) ? 255 : 64) : 1 === eU ? (aI2[player] = 64, aR2[player] = aRL) : aI2[player] = aRL
		}(player, eU, aRL), 2 === aE.a48 && this.nX(!0)
	}, this.zD = function() {
		aQz && (1 !== aQy ? (zE.imageSmoothingEnabled = !0, zE.setTransform(aQy, 0, 0, aQy, 0, 0), zE.drawImage(aR0, -aQw / aQy, -aQx / aQy), zE.setTransform(1, 0, 0, 1, 0, 0), zE.imageSmoothingEnabled = !1) : zE.drawImage(aR0, -aQw, -aQx))
	}, this.aEa = function(jB, jE) {
		aQw += jB, aQx += jE
	}, this.a5m = function(jB, jE) {
		ag.aEa(jB, jE)
	}, this.zoom = function(a6f, mO, mP) {
		aQy *= a6f, aQw = (aQw + mO) * a6f - mO, aQx = (aQx + mP) * a6f - mP
	}, this.aOn = function(player) {
		var jh = ah.jh[player],
			ji = ah.ji[player],
			jj = ah.jj[player],
			jk = ah.jk[player],
			jM = bP.i2(0),
			jN = bP.i4(0),
			jO = bP.i2(i.j),
			jP = bP.i4(i.k);
		jh < jO && jM < ji && jj < jP && jN < jk && (aQm[player] = 0, aR7 = !0)
	}, this.nX = function(c3) {
		return !(!aR7 && !c3 && bi.el < aR6 + (1 === aQy && 0 === aQw && 0 === aQx && (aE.a9D() || aE.iB || 2 === aE.a48) ? 1e3 : aFs) || (aRH(aR1), 0))
	}, this.aRO = function(aC) {
		return aRJ(aC) * aQo[aC]
	}, this.aRP = function(player) {
		return aQo[player]
	}, this.eq = function() {
		bi.l6() % 10 == 9 && (aR7 = aR7 || aE.a9F() && !aE.a9D()), !aE.a9D() && 4 <= ++aQj && function() {
			var aC, g4, g5;
			for (aQj = 0, g5 = 4; 1 <= g5; g5--)
				for (g4 = am.lf - 1; 0 <= g4; g4--) aC = am.lk[g4] + g5 * aE.fi, 0 < aI2[aC] && aI2[aC] < 255 && aI2[aC]--;
			if (2 !== aE.a48)
				for (g4 = am.lf - 1; 0 <= g4; g4--) aC = am.lk[g4], 0 < aI2[aC] && aI2[aC] < 255 && aI2[aC]--
		}();
		var aC, g4, fl = Math.floor(.1 * am.lf);
		for (fl = (fl = fl < 8 ? 8 : fl) > am.lf ? am.lf : fl, aC = aQi + fl - 1; aQi <= aC; aC--) g4 = aC % am.lf, ! function(aC) {
			var it = aRJ(aC) * aQo[aC];
			0 < aQm[aC] && aRo(aC, aQk[aC], aQl[aC], aQm[aC], aQn[aC]) ? ! function(aC) {
				for (var fs, fu, j, k, fP = !1, g5 = 0; g5 < 8; g5++) {
					if (j = aQm[aC] + 2, k = aQn[aC] + 2, j > ah.ji[aC] - ah.jh[aC] + 1 || k > ah.jk[aC] - ah.jj[aC] + 1) return fP;
					if (fs = aQk[aC] - 1, fu = aQl[aC] - 1, !aRo(aC, fs, fu, j, k)) return fP;
					aQk[aC] = fs, aQl[aC] = fu, aQm[aC] = j, aQn[aC] = k, fP = !0
				}
				return fP
			}(aC) && function(aC, it) {
				for (var fs, fu, j, k, fP = !1, aIB = aQm[aC], oO = 1 + Math.floor(.02 * aIB), g5 = 1; g5 < 5; g5++) {
					if ((j = aIB + g5 * oO) > ah.ji[aC] - ah.jh[aC] + 1) return fP;
					if ((k = aRu(it, j)) > ah.jk[aC] - ah.jj[aC] + 1) return fP;
					fs = ah.jh[aC] + Math.floor(Math.random() * (ah.ji[aC] - ah.jh[aC] + 2 - j)), fu = ah.jj[aC] + Math.floor(Math.random() * (ah.jk[aC] - ah.jj[aC] + 2 - k)), aRo(aC, fs, fu, j, k) && (aQk[aC] = fs, aQl[aC] = fu, aQm[
						aC] = j, aQn[aC] = k, fP = !0)
				}
				return fP
			}(aC, it) && aRr(aC) : ! function(aC, it) {
				var k, fs = aQk[aC] + 1,
					fu = aQl[aC] + 1,
					j = aQm[aC] - 2;
				for (;;) {
					if (j < 1) {
						aQm[aC] = 0;
						break
					}
					if (k = aRu(it, j), aRo(aC, fs, fu, j, k)) return aQk[aC] = fs, aQl[aC] = fu, aQm[aC] = j, aQn[aC] = k, 1;
					fs++, fu++, j -= 2
				}
				return
			}(aC, it) ? function(aC, it) {
				var fs, fu, j, k, g5, oU, kP = ah.ji[aC] - ah.jh[aC] + 1,
					aRv = Math.floor(.02 * kP);
				for (oU = -6 * (aRv = aRv < 1 ? 1 : aRv), g5 = kP; oU <= g5; g5 -= aRv)
					if (k = aRu(it, j = 0 < g5 ? g5 : 1), fs = ah.jh[aC] + Math.floor(Math.random() * (ah.ji[aC] - ah.jh[aC] + 2 - j)), fu = ah.jj[aC] + Math.floor(Math.random() * (ah.jk[aC] - ah.jj[aC] + 2 - k)), aRo(aC, fs, fu, j, k))
						return aQk[aC] = fs, aQl[aC] = fu, aQm[aC] = j, aQn[aC] = k
			}(aC, it) : aRr(aC)
		}(am.lk[g4]);
		aQi = (aQi += fl) % am.lf
	}, this.nR = function() {
		var aC, hJ, a3C, a3D;
		if (bi.l6() % 4 == 1)
			for (aC = am.lf - 1; 0 <= aC; aC--) hJ = am.lk[aC], ad.aDo[hJ] < 2 || ((a3C = Math.max(aRA[hJ] - 1, 0)) === (a3D = Math.max(aRB[hJ] - 1, 0)) ? 0 === a3C && (ad.aDo[hJ] %= 2) : 0 === a3D && ad.aDo[hJ] < 6 && (ad.aDo[hJ] += 4), aRA[
				hJ] = a3C, aRB[hJ] = a3D)
	}, this.aB1 = function(player) {
		var aC = player + 2 * aE.fi,
			em = aI2[aC];
		return 0 < em && (aO.a4F(50, player), aI2[aC] = 0, 255 === em)
	}, this.aA0 = function(player) {
		return 255 === aI2[player + 2 * aE.fi]
	}
}

function cm() {
	var aRy, aRz, aS0;
	this.dv = function() {
		aRy =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aRz =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aS0 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aBL = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJT = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aRy.length - 1; 0 <= aC; aC--)
			for (var g4 = aBL.length - 1; 0 <= g4; g4--) aRy[aC] = aRy[aC].replace(aBL[g4], aJT[g4])
	}, this.a90 = function() {
		var fl = aE.l9,
			a2Y = ah.a2Y,
			a4x = ah.a4x,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fl)
			for (var aC = 0; aC < fl; aC++) a2Y[aC] = a4x[aC] = "Player " + az.kQ(1e3);
		else
			for (aC = 0; aC < fl; aC++) a2Y[aC] = a4x[aC] = playerNamesData[aC]
	}, this.a8 = function() {
		if (9 === aE.lR) {
			for (var eT = az.random(), aS6 = aS0, aS7 = aRz, iY = aF.iY, fl = aS6.length, m4 = aE.data.teamPlayerCount[7], a2Y = ah.a2Y, a4x = ah.a4x, aC = m4 - 1; aC >= aE.l9; aC--) a2Y[aC] = a4x[aC] = aS6[(aC + eT) % fl];
			for (fl = aS7.length - 1, aC = m4; aC < aE.fi; aC++) a2Y[aC] = a4x[aC] = aS7[iY[aC] ? fl : aC % fl]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fl = aE.fi, a2Y = ah.a2Y, a4x = ah.a4x, playerNamesData = aE.data.playerNamesData, aC = aE.l9; aC < fl; aC++) a2Y[aC] = a4x[aC] = playerNamesData[aC]
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2Y = ah.a2Y, a4x = ah.a4x, aC = aE.l9; aC < aE.fi; aC++) a2Y[aC] = a4x[aC] = "Bot " + az.kQ(1e3)
		} : function() {
			for (var aS8 = aRy, fl = aS8.length, eT = az.random(), a2Y = ah.a2Y, a4x = ah.a4x, aC = aE.l9; aC < aE.fi; aC++) a2Y[aC] = a4x[aC] = aS8[(aC + eT) % fl]
		})()
	}
}

function d5() {
	this.aS9 = [], this.aSA = [], this.dv = function() {
		this.aS9 = [], this.aSA = []
	}, this.eq = function() {
		0 <= this.aS9.length && this.aSB(this.aS9), 0 <= this.aSA.length && this.aSB(this.aSA)
	}, this.aSB = function(h) {
		for (var g5 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].el--, h[aC].el <= 0) {
				g5 = aC;
				break
			} for (aC = g5; 0 <= aC; aC--) h.shift()
	}, this.a9r = function(id, xJ, aSC) {
		return this.g6(this.aS9, id, xJ, aSC)
	}, this.aSD = function(id, xJ, aSC) {
		return this.g6(this.aSA, id, xJ, aSC)
	}, this.g6 = function(h, id, xJ, aSC) {
		return ! function(h, id, xJ) {
			var aC, ij;
			for (aC = xJ.length - 1; 0 <= aC; aC--)
				for (ij = h.length - 1; 0 <= ij; ij--)
					if (h[ij].player === xJ[aC] && id === h[ij].id) return 1;
			return
		}(h, id, xJ) && (aSC && function(h, id, xJ) {
			var aC;
			for (aC = xJ.length - 1; 0 <= aC; aC--) h.push({
				player: xJ[aC],
				id: id,
				el: 384
			})
		}(h, id, xJ), !0)
	}
}

function cl() {
	this.a4x = new Array(aE.fi), this.a2Y = new Array(aE.fi), this.a7h = new Uint8Array(aE.fi), this.nl = new Uint8Array(aE.fi), this.jh = new Uint16Array(aE.fi), this.jj = new Uint16Array(aE.fi), this.ji = new Uint16Array(aE.fi), this.jk =
		new Uint16Array(aE.fi), this.hZ = new Uint32Array(aE.fi), this.a1d = new Uint32Array(aE.fi), this.hn = new Uint32Array(aE.fi), this.hD = null, this.hR = null, this.hS = null, this.gA = null, this.t1 = new Uint16Array(aE.fi), this.kC =
		new Uint16Array(aE.fi), this.kD = new Uint16Array(aE.fi), this.a4s = new Uint16Array(aE.fi), this.a4q = new Uint8Array(aE.fi), this.a7q = new Uint16Array(aE.fi), this.dv = function() {
			this.a4x.fill(""), this.a2Y.fill(""), this.a7h.fill(0), this.nl.fill(0), this.jh.fill(0), this.jj.fill(0), this.ji.fill(0), this.jk.fill(0), this.hZ.fill(0), this.a1d.fill(0), this.hn.fill(0), this.hD = new Array(aE.fi), this.hR =
				new Array(aE.fi), this.hS = new Array(aE.fi), this.gA = new Array(aE.fi), this.t1.fill(0), this.kC.fill(0), this.kD.fill(0), this.a4s.fill(0), this.a4q.fill(0), this.a7q.fill(0)
		}
}

function d3() {
	this.aIc = function(player) {
		aH.nk(player), aE.a4H++, ah.a7h[player] = 2, ah.a4s[player] = bl.a56.aOw(), player === aE.fV && (aY.show(!1, !1), aX.aGZ(), bU.a3q.a4n()), ag.aB1(player)
	}
}

function ce() {
	this.lk = null, this.lf = 0, this.a94 = function() {
		for (this.lf = 0, aC = aE.fi - 1; 0 <= aC; aC--) 0 !== ah.nl[aC] && this.lf++;
		this.lk = new Uint16Array(this.lf);
		for (var fl = 0, aC = 0; aC < aE.fi; aC++) 0 !== ah.nl[aC] && (this.lk[fl++] = aC)
	}, this.nQ = function() {
		for (var hZ = ah.hZ, a1d = ah.a1d, a4q = ah.a4q, lk = am.lk, aC = am.lf - 1; 0 <= aC; aC--) {
			var hJ = lk[aC],
				em = hZ[hJ],
				m4 = a1d[hJ];
			em <= bO.gC(m4, 4) ? al.e3(hJ) : m4 <= em ? 250 <= (a1d[hJ] = em) && (a4q[hJ] = 1) : a1d[hJ] = m4 - Math.max(1, bO.gC(m4 - em, 1e3))
		}
		this.aSH()
	}, this.aSH = function() {
		for (var nl = ah.nl, m3 = this.lk, aHI = this.lf, aC = aHI - 1; 0 <= aC; aC--) 0 === nl[m3[aC]] && (m3[aC] = m3[--aHI]);
		this.lf = aHI
	}
}

function cf() {
	var aSI = new Uint16Array(aE.fi),
		aSJ = 0;

	function aSN(aBA, aSL) {
		var ev = bi.l6();
		return 3213 <= ev ? 4 + bO.gC(100 * aSL, af.kp(aBA)) : (aBA = 1 + bO.gC(aE.kt, 300), ev < 357 ? 2 + bO.gC(100 * aSL, aBA) : ev < 714 ? 2 + bO.gC(100 * aSL, 4 * aBA) : ev < 1071 ? 2 + bO.gC(100 * aSL, 10 * aBA) : ev < 2142 ? 2 + bO.gC(100 *
			aSL, 30 * aBA) : 2 + bO.gC(100 * aSL, 100 * aBA))
	}

	function aSM(aBA) {
		return aE.lT || 4284 <= bi.l6() || bD.h7.kW(aBA)
	}
	this.dv = function() {
		aSI.fill(0), aSJ = 15
	}, this.iR = function(s3) {
		var player = aE.fV;
		return !!bD.h7.t3(player, s3) && !(!bD.h7.sT(player, bD.h7.jQ(player, aS.iH()), s3) || (player = s3, s3 = bR.gI[0], !aSM(player) && aSI[player] + aSN(player, s3) > aSJ))
	}, this.eu = function(aBA, aSL) {
		if (!aSM(aBA)) {
			aSL = aSN(aBA, aSL);
			if (aSI[aBA] + aSL > aSJ) return !1;
			aSI[aBA] += aSL
		}
		return !0
	}, this.eq = function() {
		bi.l6() % 100 == 99 && (bi.l6() < 1071 ? aSJ += 4 : bi.l6() < 2142 ? aSJ += 6 : bi.l6() < 3213 ? aSJ += 8 : aSJ += 10)
	}
}

function cn() {
	var aSO;
	this.la = null, this.lZ = 0, this.dv = function() {
		aSO = [], 9 === aE.lR && this.aSP()
	}, this.aSP = function() {
		this.la = [0, 0, 0, 0, 0, 0];
		for (var aSQ = [254, 227, 167, 149, 102, this.lZ = 0, 0, 0], aSR = [0, 8, 24, 30, 46, 80, 256, 333], aSS = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l9, aC = 1; aC < aSQ.length; aC++)
			if (k <= aSR[aC]) {
				this.lZ = aSQ[aC - 1] - bO.gC((k - aSR[aC - 1]) * (aSQ[aC - 1] - aSQ[aC]), aSR[aC] - aSR[aC - 1]), this.la[5] = aSS[aC - 1] - bO.gC((k - aSR[aC - 1]) * (aSS[aC - 1] - aSS[aC]), aSR[aC] - aSR[aC - 1]), this.la[0] = aE.fi - k - this
					.lZ - this.la[5];
				break
			} aE.lV = aE.fi - aE.l9, aE.data.numberTeams = (0 < aE.l9) + (0 < aE.lV), aE.data.playerCount = aE.a19 = aE.l9 + aE.lV, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l9 + this.lZ, aE.lV - this.lZ]), aE.a8s.a8y()
	}, this.aP3 = function(player) {
		aSO.push({
			player: player,
			hE: 14 + az.kQ(20)
		})
	}, this.eq = function() {
		if (9 === aE.lR)
			for (var aC = aSO.length - 1; 0 <= aC; aC--) --aSO[aC].hE <= 0 && (ag.tI(aSO[aC].player, 0, ak.px.a2u + ak.px.a38), aSO.splice(aC, 1))
	}
}

function dM() {
	this.aSU = 37, this.aSV = 25, this.aPF = 4096, this.fw = 0, this.fx = 0, this.a29 = null, this.aBw = null, this.aSW = null, this.aSX = null, this.fR = 0, this.mapSeed = 0, this.aMz = !1, this.aSY = new aSZ, this.xa = new aSa, this.aBT = new aSb,
		this.aKf = new aSc, this.aKg = new aSd;
	var aSe = {
		aCR: function() {},
		dv: function() {}
	};

	function aSm() {
		return {
			fw: bV.fw,
			fx: bV.fx,
			a29: bV.a29,
			aBw: bV.aBw,
			aSW: bV.aSW,
			aSX: bV.aSX,
			fR: bV.fR,
			mapSeed: bV.mapSeed,
			aMz: bV.aMz
		}
	}

	function aSn(gD) {
		bV.fw = gD.fw, bV.fx = gD.fx, bV.a29 = gD.a29, bV.aBw = gD.aBw, bV.aSW = gD.aSW, bV.aSX = gD.aSX, bV.fR = gD.fR, bV.mapSeed = gD.mapSeed, bV.aMz = gD.aMz
	}

	function aSg(aC) {
		return !(1 === aC || !bV.aJi(aC) || aC === bV.aSr())
	}
	this.dv = function() {
		this.xa.dv()
	}, this.a8 = function(map, aSf) {
		((map %= this.aSU) !== this.fR || aSg(this.fR) && aSf !== this.mapSeed) && (this.aMz = !1, this.aSY.aCR(), az.a8z(map), this.fR = map, this.mapSeed = aSf, aSg(map) && (bV.xa.aBN[map].aSh = aSf), this.aJi(this.fR) ? (map = bV.xa.aBN[this
			.fR], this.fw = map.j, this.fx = map.k, az.a8z(map.aSh), ar.a8([this.fw, this.fx, map.nq, map.nn]), aSi(), aq.aSj(), ar.aSk()) : this.aKf.a8(this.fR) || console.log("map not loaded: " + this.fR))
	}, this.aSl = function(map, aSf) {
		var gU = aSm(),
			map = (this.a8(map, aSf), this.aSY.aCR(), aSm());
		return aSn(gU), map
	}, this.aKm = function(map, aSf) {
		var gU = aSm(),
			aSh = az.aSo(),
			aSp = this.xa.aBN[map].aSh,
			aSq = this.aSY,
			aSf = (this.aSY = aSe, this.a8(map, aSf), this.a29);
		return this.aSY = aSq, this.xa.aBN[map].aSh = aSp, az.a8z(aSh), aSn(gU), aSf
	}, this.a9L = function(canvas) {
		canvas && this.a29 !== canvas && (this.fw = canvas.width, this.fx = canvas.height, this.a29 = canvas, this.aBw = this.a29.getContext("2d", {
			alpha: !1
		}), this.ir = this.aBw.getImageData(0, 0, this.fw, this.fx), this.aSX = this.ir.data, this.fR = this.aSr(), this.mapSeed = 0, bV.xa.aBN[this.fR].name = aE.data.mapName)
	}, this.fQ = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aSr()
	}, this.aSs = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aSt = function(aC) {
		return 1 === aC
	}, this.aSr = function() {
		return this.aSU
	}, this.aJi = function(aC) {
		return void 0 === this.xa.aBN[aC].aSu
	}, this.aKZ = aSg, this.a9K = function(qA) {
		return 0 === qA.mapType ? qA.mapProceduralIndex < 10 ? qA.mapProceduralIndex : 10 + qA.mapProceduralIndex : 1 === qA.mapType ? 10 <= qA.mapRealisticIndex ? 22 + qA.mapRealisticIndex - 10 : qA.mapRealisticIndex + 10 : void 0
	}, this.aJj = function(qA, aSv) {
		0 === qA.mapType ? qA.mapProceduralIndex = aSv < 10 ? aSv : aSv - 10 : 1 === qA.mapType && (qA.mapRealisticIndex = aSv - (22 <= aSv ? 12 : 10))
	}
}

function aSZ() {
	function aT6() {
		bV.aSY.eq()
	}

	function aTB(hJ, aTA) {
		0 < aTA && (bV.aSX[hJ] += aTA, bV.aSX[hJ + 1] += aTA, bV.aSX[hJ + 2] += aTA)
	}

	function iT(hJ) {
		return bV.aSX[hJ + 2] > bV.aSX[hJ] && bV.aSX[hJ + 2] > bV.aSX[hJ + 1]
	}
	this.aEm = -1, this.a5J = 0, this.aSw = 0, this.aSx = 8, this.aSy = 32, this.aSz = 8, this.aT0 = 32, this.aT1 = [0, 0], this.aDo = [0, 0, 0, 0], this.jb = null, this.aT2 = !0, this.aT3 = !1, this.aCR = function() {
		-1 !== this.aEm && clearTimeout(this.aEm), this.aEm = -1, this.jb = null, ar.aSk()
	}, this.dv = function() {
		7 === ab.a5P() || this.aT3 || (this.aT2 = !0, this.a5J = 0, this.aSw = 1, this.aT1 = [bV.xa.aBN[bV.fR].aT4[0], bV.xa.aBN[bV.fR].aT5[0]], this.aDo = [bV.xa.aBN[bV.fR].aSu[3], bV.xa.aBN[bV.fR].aSu[4], bV.xa.aBN[bV.fR].aSu[5], bV.xa.aBN[bV
			.fR].aSu[6]], this.aSx = bV.xa.aBN[bV.fR].aSu[7], this.aSy = bV.xa.aBN[bV.fR].aSu[8], this.aSz = bV.xa.aBN[bV.fR].aSu[9], this.aT0 = bV.xa.aBN[bV.fR].aSu[10], this.aT2 ? this.aEm = setTimeout(aT6, 16) : this.eq())
	}, this.eq = function() {
		if (8 === ab.a5P() && aI.o4()) this.aEm = setTimeout(aT6, 16);
		else {
			if (0 === this.a5J) {
				var aSh = az.aSo();
				if (az.a8z(bV.xa.aBN[bV.fR].aSu[2]), ar.a8([bV.fw, bV.fx, bV.xa.aBN[bV.fR].aSu[0], bV.xa.aBN[bV.fR].aSu[1]]), az.a8z(aSh), this.jb = ar.aT7(), this.a5J++, this.aT2) return void(this.aEm = setTimeout(aT6, 16))
			}
			for (var hJ, fX, aSh = this.aT2 ? 10 : 1e6, aSh = bV.fx - this.aSw - 1 < aSh ? bV.fx - this.aSw - 1 : aSh, a1q = this.aSw + aSh, fu = this.aSw; fu < a1q; fu++)
				for (var fs = 1; fs < bV.fw - 1; fs++) iT(hJ = 4 * (fX = fs + fu * bV.fw)) ? this.aT8(hJ, fX, 1) : (this.aT8(hJ, fX, 0), function(fs, fu, hJ) {
					return 1 < fs && iT(hJ - 4) || fs < bV.fw - 2 && iT(hJ + 4) || 1 < fu && iT(hJ - 4 * bV.fw) || fu < bV.fx - 2 && iT(hJ + 4 * bV.fw)
				}(fs, fu, hJ) && this.aT9(fs, fu));
			this.aSw = a1q, this.aSw >= bV.fx - 1 ? (bV.aBw.putImageData(bV.aSW, 0, 0, 1, 1, bV.fw - 2, bV.fx - 2), bi.e2 = !0, this.aCR()) : this.aT2 && (this.aEm = setTimeout(aT6, 16))
		}
	}, this.aT8 = function(hJ, fX, eU) {
		aTB(hJ, Math.floor(this.aT1[eU] + this.aDo[eU] * this.jb[fX] / 1e4) - bV.aSX[hJ])
	}, this.aTC = function(hJ, eT, aTD, eU, aDo) {
		aTB(hJ, Math.floor(this.aT1[eU] + (1 - eT / aTD) * aDo) - bV.aSX[hJ])
	}, this.aT9 = function(mO, mP) {
		for (var hJ, eT, aTD, aEc = mO - this.aSy, aTE = mP - this.aSy, a1r = mO + this.aSy, a1q = mP + this.aSy, aEc = aEc < 1 ? 1 : aEc, a1r = a1r > bV.fw - 2 ? bV.fw - 2 : a1r, a1q = a1q > bV.fx - 2 ? bV.fx - 2 : a1q, fu = aTE < 1 ? 1 :
			aTE; fu <= a1q; fu++)
			for (var fs = aEc; fs <= a1r; fs++) iT(hJ = 4 * (fs + fu * bV.fw)) ? (aTD = this.aSx + (this.aSy - this.aSx) * this.jb[fs + bV.fw * fu] / 1e4, Math.abs(mO - fs) > aTD || Math.abs(mP - fu) > aTD || aTD <= (eT = Math.sqrt((mO - fs) * (
				mO - fs) + (mP - fu) * (mP - fu))) || this.aTC(hJ, eT, aTD, 1, this.aDo[3])) : (aTD = this.aSz + (this.aT0 - this.aSz) * this.jb[fs + bV.fw * fu] / 1e4, Math.abs(mO - fs) > aTD || Math.abs(mP - fu) > aTD || aTD <= (eT = Math
				.sqrt((mO - fs) * (mO - fs) + (mP - fu) * (mP - fu))) || this.aTC(hJ, eT, aTD, 0, this.aDo[2]))
	}
}

function aSi() {
	var vZ = aTF(bV.fR);
	vZ && aTG(vZ[0], vZ[1], vZ[2], vZ[3], vZ[4])
}

function aTF(fR) {
	return 2 === fR ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fR ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fR ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aTG(aTH, aTI, aTJ, aTK, aTL) {
	for (var fs, fu, aPb, aPc, a6f, aTO, jA = aTH.length - 1, aTM = bV.fw + bV.fx, fl = (aTM *= aTM, aTJ.length), aTN = Array(fl), aC = fl - 1; 0 <= aC; aC--) aTN[aC] = aTJ[aC] * aTJ[aC];
	var aTP = new Array(fl),
		aHz = new Array(fl),
		aTQ = new Array(fl),
		gD = ar.aT7();
	if (void 0 === aTL)
		for (aTL = new Array(fl), aC = fl - 1; 0 <= aC; aC--) aTL[aC] = 0;
	for (aC = 1; aC < fl; aC++) aTP[aC] = aTN[aC] - aTN[aC - 1], aHz[aC] = aTK[aC] - aTK[aC - 1], aTQ[aC] = aTL[aC] - aTL[aC - 1];
	for (fs = bV.fw - 1; 0 <= fs; fs--)
		for (fu = bV.fx - 1; 0 <= fu; fu--) {
			for (aPb = aTM, aC = jA; 0 <= aC; aC--) aPb = (aPc = (fs - aTH[aC]) * (fs - aTH[aC]) + (fu - aTI[aC]) * (fu - aTI[aC])) < aPb ? aPc : aPb;
			for (a6f = aTK[fl - 1], aTO = aTL[fl - 1], aC = 1; aC < fl; aC++)
				if (aPb < aTN[aC]) {
					a6f = aTK[aC - 1] + aO8((aPb - aTN[aC - 1]) * aHz[aC], aTP[aC]), aTO = aTL[aC - 1] + aO8((aPb - aTN[aC - 1]) * aTQ[aC], aTP[aC]);
					break
				} aTR(bV.fw * fu + fs, a6f, aTO, gD)
		}
}

function aTR(eU, a6f, aTO, gD) {
	a6f < 500 ? gD[eU] = bO.gC(gD[eU] * a6f * 2, 1e3) : 500 < a6f && (gD[eU] += bO.gC(2 * (1e4 - gD[eU]) * (a6f - 500), 1e3)), gD[eU] += bO.gC(aTO * (10 * a6f - gD[eU]), 1e3)
}

function cp() {
	var aTS;

	function aTc(a76, it, fs, fu, globalAlpha) {
		bV.aBw.save(), bV.aBw.globalAlpha = globalAlpha, bV.aBw.imageSmoothingEnabled = !1, bV.aBw.scale(it, it), bV.aBw.drawImage(a76, Math.floor(fs * (bV.fw / it - a76.width)), Math.floor(fu * (bV.fx / it - a76.height))), bV.aBw.restore()
	}
	this.aBQ = 0, this.aBR = 0, this.aBS = 0, this.aBT = 0, this.dv = function() {
		(aTS = new Array(bV.aSU))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eT: [220, 250, 255, 220],
			wC: [190, 220, 0, 0],
			g5: [170, 200, 0, 0]
		}, aTS[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eT: [25, 0, 100, 0, 25],
			wC: [25, 0, 0, 0, 25],
			g5: [25, 0, 0, 0, 25]
		}, aTS[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eT: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			wC: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g5: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aTS[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eT: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			wC: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g5: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aTS[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eT: [10, 10, 20, 10, 10, 170, 212],
			wC: [20, 20, 60, 100, 100, 110, 170],
			g5: [70, 70, 160, 30, 30, 60, 120]
		}, aTS[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eT: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			wC: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g5: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aTS[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eT: [10, 10, 60, 255, 255, 200, 200],
			wC: [10, 10, 60, 255, 255, 200, 200],
			g5: [80, 80, 255, 255, 255, 200, 200]
		}, aTS[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eT: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			wC: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g5: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aTS[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eT: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			wC: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g5: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aTS[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eT: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			wC: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g5: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aTS[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eT: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			wC: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g5: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aTS[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eT: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			wC: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g5: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aSj = function() {
		var aTb, aC, g4, gU, ir = function() {
				var ir;
				return bV.a29 = document.createElement("canvas"), bV.a29.width = bV.fw, bV.a29.height = bV.fx, bV.aBw = bV.a29.getContext("2d", {
					alpha: !1
				}), ir = bV.aBw.getImageData(0, 0, bV.fw, bV.fx), bV.aSX = ir.data, ir
			}(),
			j = aTS[bV.fR].j,
			eT = aTS[bV.fR].eT,
			wC = aTS[bV.fR].wC,
			g5 = aTS[bV.fR].g5,
			gD = ar.aT7(),
			fl = j.length - 2,
			aTW = new Array(1 + fl),
			aTX = new Array(1 + fl),
			aTY = new Array(1 + fl),
			aTZ = new Array(1 + fl);
		for (g4 = fl; 0 <= g4; g4--) aTW[g4] = j[g4 + 1] - j[g4], aTX[g4] = eT[g4 + 1] - eT[g4], aTY[g4] = wC[g4 + 1] - wC[g4], aTZ[g4] = g5[g4 + 1] - g5[g4];
		for (aC = bV.fw * bV.fx - 1; 0 <= aC; aC--)
			for (g4 = fl; 0 <= g4; g4--)
				if (gD[aC] >= j[g4]) {
					gU = gD[aC] - j[g4], bV.aSX[4 * aC] = eT[g4] + aO8(aTX[g4] * gU, aTW[g4]), bV.aSX[4 * aC + 1] = wC[g4] + aO8(aTY[g4] * gU, aTW[g4]), bV.aSX[4 * aC + 2] = g5[g4] + aO8(aTZ[g4] * gU, aTW[g4]), bV.aSX[4 * aC + 3] = 255;
					break
				} bV.aBw.putImageData(ir, 0, 0), bV.aSt(bV.fR) && ac.wG() && bV.aSt(bV.fR) && (ir = ac.xQ("arena"), aTb = ac.xQ("territorial.io"), aTc(ir, 5, .5, .5, .1), aTc(aTb, 2, .5, .45, .1)), bV.aMz = !0, bi.e2 = !0
	}, this.a92 = function() {
		for (var hJ, fs, fu, aTd, ih, gW, aBR = 0, j = bV.fw, k = bV.fx, gU = j * k * 4, aTe = aHY, aTf = bV.aSX, aC = j - 1; 0 <= aC; aC--) aTe[(hJ = aC << 2) + 2] = aTe[gU - hJ - 2] = 3;
		for (gU = 4 * j, aC = k - 1; 0 <= aC; aC--) aTe[(hJ = aC * gU) + 2] = aTe[hJ + gU - 2] = 3;
		for (aTd = j - 1, ih = k - 1, fu = 1; fu < ih; fu++)
			for (gU = fu * j, fs = 1; fs < aTd; fs++) gW = 1 - (aTf[(hJ = gU + fs << 2) + 2] > aTf[hJ + 1] && aTf[hJ + 2] > aTf[hJ]), aTe[hJ + 2] = 6 - 5 * gW, aBR += gW;
		this.aBQ = (j - 2) * (k - 2), this.aBT = 0, bV.fQ(bV.fR) && (bV.aBT.aTg(), bV.aBT.aTh(4, 5)), this.aBR = aE.kt = aBR - this.aBT, this.aBS = this.aBQ - this.aBR - this.aBT, this.aBS && (bV.aBT.aTh(6, 2), bV.aBT.aTi())
	}
}

function aSa() {
	this.aBN = null, this.aTj = null, this.aTk = null, this.xb = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia",
		"Falklands", "Antarctica", "Hong Kong", "Singapore"
	], this.dv = function() {
		this.aTl = [L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), L(198), "Mare Nostrum", L(199), L(200), L(
			201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209), L(210)];
		var aTm = [120, 105, 92],
			cos = [12, 12, 60],
			aTn = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aTo = [140, 130, 120],
			aTp = [12, 12, 76],
			aTq = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aTr = [130, 117, 106],
			aTs = [12, 12, 68],
			aTt = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.aBN = new Array(bV.aSU + 1), this.aBN[0] = {
			j: 230,
			k: 230,
			nq: 1e3,
			nn: 2e3,
			aSh: 173
		}, this.aBN[1] = {
			j: 800,
			k: 800,
			nq: 100,
			nn: 50,
			aSh: 43
		}, this.aBN[2] = {
			j: 512,
			k: 512,
			nq: 128,
			nn: 32,
			aSh: 0
		}, this.aBN[3] = {
			j: 960,
			k: 960,
			nq: 60,
			nn: 8,
			aSh: 0
		}, this.aBN[4] = {
			j: 900,
			k: 900,
			nq: 100,
			nn: 5,
			aSh: 0
		}, this.aBN[5] = {
			j: 1e3,
			k: 1e3,
			nq: 100,
			nn: 40,
			aSh: 0
		}, this.aBN[6] = {
			j: 1e3,
			k: 1e3,
			nq: 100,
			nn: 20,
			aSh: 0
		}, this.aBN[7] = {
			j: 1024,
			k: 1024,
			nq: 128,
			nn: 32,
			aSh: 0
		}, this.aBN[8] = {
			j: 820,
			k: 820,
			nq: 200,
			nn: 100,
			aSh: 0
		}, this.aBN[9] = {
			j: 1024,
			k: 1024,
			nq: 128,
			nn: 32,
			aSh: 0
		}, this.aBN[10] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[11] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[12] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[13] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[14] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[15] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[16] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[17] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[18] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[19] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[20] = {
			j: 1024,
			k: 1024,
			nq: 128,
			nn: 32,
			aSh: 0
		}, this.aBN[21] = {
			j: 940,
			k: 940,
			nq: 80,
			nn: 8,
			aSh: 0
		}, this.aBN[22] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[23] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[24] = {
			aT4: [157, 136, 117],
			aT5: [16, 13, 68],
			aSu: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aBP: "[OG] Neutronian"
		}, this.aBN[25] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[26] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[27] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[28] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[29] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[30] = {
			aT4: aTr,
			aT5: aTs,
			aSu: aTt
		}, this.aBN[31] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[32] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[33] = {
			aT4: aTo,
			aT5: aTp,
			aSu: aTq
		}, this.aBN[34] = {
			aT4: [210, 210, 210],
			aT5: [12, 12, 76],
			aSu: [240, 120, 1024, 45, 19, 30, 70, 8, 20, 3, 9]
		}, this.aBN[35] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		}, this.aBN[36] = {
			aT4: aTm,
			aT5: cos,
			aSu: aTn
		};
		for (var aC = 0; aC < bV.aSU; aC++) this.aBN[aC].name = this.aTl[aC];
		this.aBN[bV.aSU] = {
			name: ""
		}, this.aTj = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aTj[aC] = aC;
		for (this.aTj[10] = 20, this.aTj[11] = 21, this.aTk = new Uint8Array(bV.aSV), aC = 0; aC < 10; aC++) this.aTk[aC] = 10 + aC;
		for (this.aTk[10] = 22, this.aTk[11] = 23, this.aTk[12] = 24, aC = 13; aC < bV.aSV; aC++) this.aTk[aC] = 12 + aC
	}
}

function aSd() {
	this.tF = new aTy, this.aTz = new aU0, this.aU1 = new aU2(this.tF.aU3), this.aU4 = new aU2(this.tF.aU5);
	var aU6 = [],
		aU7 = [];
	this.get = function(eU, aU8) {
		return (aU8 ? this.aU1 : this.aU4).get(this.aU9(eU, aU8))
	}, this.zu = function(eU, aU8, callback) {
		var aP8 = this.aU9(eU, aU8),
			buffer = aU8 ? this.aU1 : this.aU4,
			eU = buffer.get(aP8);
		if (eU) callback(eU);
		else if (function(aP8, aUB) {
				for (var em = performance.now() - aUB, fz = !1, aC = aU7.length - 1; 0 <= aC; aC--) aU7[aC].el < em ? aU7.splice(aC, 1) : aU7[aC].aP8 === aP8 && (fz = !0);
				return fz
			}(aP8, this.tF.aUB)) callback(null);
		else {
			for (var aC = 0; aC < aU6.length; aC++)
				if (aU6[aC].aP8 === aP8) return void aU6[aC].aUC.push(callback);
			var qA = {
				aP8: aP8,
				aUC: [callback]
			};
			aU6.push(qA), this.aTz.zu(function(tF) {
				if (m.e8 && tF.aUF) return tF.aUF;
				return "https://" + b1.z.a4f() + tF.mU
			}(this.tF) + aP8, function(aKh) {
				aU6.splice(aU6.indexOf(qA), 1), aKh && function(aKh) {
					var tF = bz.tF;
					return aKh.length > tF.aUG && aKh[0] === tF.eC
				}(aKh) ? buffer.eu(aP8, aKh) : (aKh = null, aU7.push({
					aP8: aP8,
					el: performance.now()
				}));
				for (var ij = 0; ij < qA.aUC.length; ij++) qA.aUC[ij](aKh)
			})
		}
	}, this.aKi = function(eU, aU8) {
		for (var aP8 = this.aU9(eU, aU8), aC = 0; aC < aU6.length; aC++)
			if (aU6[aC].aP8 === aP8) return !0;
		return !1
	}, this.aU9 = function(eU, aU8) {
		return eU + "-" + m.eE + (aU8 ? "p" : "") + ".bin"
	}
}

function aU2(aSJ) {
	var a14 = [];

	function aUH(aP8) {
		for (var aC = 0; aC < a14.length; aC++)
			if (a14[aC].aP8 === aP8) return aC;
		return -1
	}
	this.get = function(aP8) {
		var aP8 = aUH(aP8);
		return aP8 < 0 ? null : (aP8 = a14.splice(aP8, 1)[0], a14.push(aP8), aP8.aKh)
	}, this.eu = function(aP8, aKh) {
		var aC = aUH(aP8);
		0 <= aC && a14.splice(aC, 1), a14.push({
			aP8: aP8,
			aKh: aKh
		}), aSJ < a14.length && a14.shift()
	}, this.size = function() {
		return a14.length
	}
}

function aTy() {
	this.aU3 = 16, this.aU5 = 8, this.aUI = 15e3, this.aUB = 5e3, this.aNG = 5e3, this.mU = "/maps/", this.aUF = null
}

function aU0() {
	this.zu = function(a5K, callback) {
		var aUJ = new XMLHttpRequest;
		aUJ.open("GET", a5K), aUJ.responseType = "arraybuffer", aUJ.timeout = bV.aKg.tF.aUI, aUJ.onload = function() {
			var aUK = 200 === aUJ.status && aUJ.response;
			callback(aUK ? new Uint8Array(aUJ.response) : null)
		}, aUJ.onerror = aUJ.ontimeout = function() {
			callback(null)
		}, aUJ.send()
	}
}

function aSb() {
	this.aTg = function() {
		for (var hJ, fs, gU, aTe = aHY, aTf = bV.aSX, j = bV.fw, aTd = j - 1, ih = bV.fx - 1, hE = 0, fu = 1; fu < ih; fu++)
			for (gU = fu * j, fs = 1; fs < aTd; fs++) aTf[hJ = gU + fs << 2] === aTf[1 + hJ] && aTf[hJ] === aTf[2 + hJ] && (hE++, aTe[2 + hJ] = 4);
		aq.aBT = hE
	}, this.aTh = function(aUL, aUM) {
		for (var aTe = aHY, j = bV.fw, aTd = j - 1, ih = bV.fx - 1, id = 0, fu = 1; fu < ih; fu++)
			for (var gU = fu * j, fs = 1; fs < aTd; fs++) {
				var fP = 2 + (gU + fs << 2);
				aTe[fP] === aUL && (! function(fP, id, aUL, aUM) {
					var fl = 1,
						aTe = aHY,
						fn = ad.aNz,
						a6s = [fP],
						aUO = id >> 8 << 1,
						aUP = 255 & id;
					aTe[fP - 2] = aUO, aTe[fP - 1] = aUP, aTe[fP] = 5;
					for (; fl;) {
						for (var a6t = [], aC = 0; aC < fl; aC++)
							for (var fa = a6s[aC], fo = 0; fo < 8; fo++) {
								var fp = fa + fn[fo];
								aTe[fp] === aUL && (aTe[fp - 2] = aUO, aTe[fp - 1] = aUP, aTe[fp] = aUM, a6t.push(fp))
							}
						fl = (a6s = a6t).length
					}
				}(fP, id, aUL, aUM), id = (id + 1) % 32768)
			}
	}, this.aTi = function() {
		for (var aTe = aHY, j = bV.fw, aTd = j - 3, ih = bV.fx - 3, aUR = 12 * j, fu = 3; fu < ih; fu++)
			for (var gU = fu * j, fs = 3; fs < aTd; fs++) {
				var fP = 2 + (gU + fs << 2);
				2 !== aTe[fP] || 2 === aTe[fP - 12] && 2 === aTe[12 + fP] && 2 === aTe[fP - aUR] && 2 === aTe[fP + aUR] || (aTe[fP - 2] = 1 | aTe[fP - 2])
			}
	}
}

function a91() {
	(a2D = void 0 === a2D ? document.createElement("canvas") : a2D).width = bV.fw, a2D.height = bV.fx, a95 = a2D.getContext("2d", {
		alpha: !0
	}), a96 = aHY = null, a96 = a95.getImageData(0, 0, bV.fw, bV.fx), aHY = a96.data, bD.tp.a6c(aHY)
}

function aSc() {
	function aUX(aBN, qA) {
		for (var canvas = document.createElement("canvas"), p9 = (canvas.width = qA.j, canvas.height = qA.k, canvas.getContext("2d", {
				alpha: !1
			})), ir = p9.getImageData(0, 0, qA.j, qA.k), a2a = ir.data, src = qA.a2a, fl = src.length, qA = aBN.aT4, aBN = aBN.aT5, aUZ = qA[0], aUa = qA[1], aUb = qA[2], aUc = aBN[0], aUd = aBN[1], aUe = aBN[2], aC = 0; aC < fl; aC++) {
			var ij = aC << 2;
			src[aC] ? (a2a[ij] = aUZ, a2a[1 + ij] = aUa, a2a[2 + ij] = aUb) : (a2a[ij] = aUc, a2a[1 + ij] = aUd, a2a[2 + ij] = aUe), a2a[3 + ij] = 255
		}
		return p9.putImageData(ir, 0, 0), {
			canvas: canvas,
			p9: p9,
			ir: ir
		}
	}
	this.aUS = new aUT, this.a8 = function(fR) {
		var aKh = this.aUU(this.xz(fR));
		return !!aKh && !!(aKh = bz.aQB.a0u(aKh)) && (function(fR, qA) {
			fR = bV.xa.aBN[fR], fR.j = bV.fw = qA.j, fR.k = bV.fx = qA.k, bV.aSW = bV.aSX = null, fR = aUX(fR, qA);
			bV.a29 = fR.canvas, bV.aBw = fR.p9, bV.aSW = fR.ir, bV.aSX = fR.ir.data, bV.aMz = !0, bV.aSY.dv(), bi.e2 = !0
		}(fR, aKh), !0)
	}, this.aNK = function(fR) {
		fR = this.xz(fR);
		return !!(fR < 0 || this.aUS.get(fR)) || null !== bV.aKg.get(fR, 0)
	}, this.zu = function(fR, callback) {
		this.aNK(fR) ? callback(!0) : bV.aKg.zu(this.xz(fR), 0, function(aKh) {
			callback(null !== aKh)
		})
	}, this.aUV = function(fR, callback) {
		this.zu(fR, function(aNK) {
			aNK || new aUW(L(211)), callback(aNK)
		})
	}, this.aUU = function(eU) {
		var pb;
		return eU < 0 ? null : (pb = this.aUS.get(eU)) ? (bJ.fC.a0p(bJ.fC.a0n(pb)), bG.aD) : bV.aKg.get(eU, 0)
	}, this.aKk = function(fR, aKh) {
		aKh = bz.aQB.a0u(aKh);
		return aKh ? aUX(bV.xa.aBN[fR], aKh).canvas : null
	}, this.xz = function(fR) {
		for (var h = bV.xa.aTk, aC = 0; aC < h.length; aC++)
			if (h[aC] === fR) return aC;
		return -1
	}
}

function aUT() {
	this.get = function(eU) {
		return 0 === eU ?
			"-VDY-vw1-6zbu-6AMQJRpRKfEM7eQmbR5owiTu26wOjKrtxkM9uayvQ_efKD14ubaPeRhpILFeB0-WPFC_QqLj-lY3XnW13lDhz4mqWxZfFSjPJgwpDQqFT97XxiAD49R_eqHtvmDOq0MG1rRazWgKf5E08ijtr5FUvypm5MGg4U6aMKFJXh6e-VeXOUKC_EWV9lACkoLW1Rcqz446g5rGPGs-TdVVtGIjRPEHUvI5dsCSsao3GsD0etpb5TLxILgIIBBxSUPeJEAb3EKVglBtS3w74sxuQzB2ta8DqS2QacWzlE_MgBVbQCP1eZTXRFxIPMxfOeIBCg9_05a7MoCJV_Ln2HG62_q1A3SWZGg2XNW1O89tHNN5lkePHgU5RQ62UB67lcKtwoeuey9AGd8Bb7ls1tmBp0X60SvfFvXsK-zGQAqeI6-yn8fD3zN1cqLG0MS7-NN7_jtyFcVGKZo8baF9DFiUE7HGaIzH7Hl60Y2I0bD38R4sZwU14AFjBFWMT03oaEa2aLp_V0eFF2bP-9zg9x7x9PeEPgBfIXT_8ct13i75SDgO6iq23Ohb8KOajcaD9II6er8d1dwWtT-FxUQ1di_ztYQFzEF8s6Su9fVtx59eVh_J43DO75ew8cqnudvrj46xElktuqe0TP-15Zh0WviTWELb_lfEaCJKJEM_sRfT-zbNCINEgtRlsO3YXWbnyXGhF0RWQfCINU4Q9fdyvOCpEODKnAamjPz38L_YQ5jr0A49xc9lItKxApCdc8wOKXtRvjYssJAqCF0RB8opCS6BGeGnGM90uhHeUEYLhVDmogyR9rYW3wad7xoaXCFswWtJOrzMyBKSfdKcDAqb-gG-ylhsklPeGBpIqotv7V2zI5EA8RZPmLPFK0Q8yaVecipsoJTRGykB8qwBsKwd2CgOoMzpyZZUx20PbFeZLDYOSXTnVWX1tDVsounxQWY13RPjbwRPIm62tb7-N4jk_9ryCxXiPF8vZMFu3o62c2szAGy4kBBE74caS63GsSeDARjmQdXEBGIvn78m8X1mus43NsqLgHuFylq414iT7ZvY0MjxqT4KRe4-M6aeiuU6vnjx_nTwFyRopNx7PvIbeQh6RVB8CNFCzRvriYh0Ys2wsuT6SHsIOUNlSfRXE82PgYTBRxeuD5nev9RjBXSFA5kdsbqGChmOCfaHRaTKz_WFERjZWTdTgAo-k2zzQ7t0vT0_ZW1IqZh5FNhMsy4nVxyDOFoXvz3saUQ_hot8_Tav1jMa6PlL-zyQqMDaZAJP3IakxH8ypRfm5GRZYKfjXtlcvFfgIr3Ns-cioOeED3LvlRKV7BsCmBy5uUq_NRQ36WYXxnnnQglIp8LULegHZGQPj-LkBVuYJS-7wtoKjr0fSIw6B9-uC3Tuh_5DlUadc76SpJ1mBznH6e_QbNvwL3XEkQ7QM_ERn8TNx0MeG6CmTSoxaXVy8Ixeu0OJZcbqZiQXWSmvrA85Yu1OaZj0GG6mufcgWNAiZWSyGfeiHyZUIq-9POXOpz60aqVmbl3FyOVjuOsWHROF-6WpnAkZd7qcsM7hdK11Bks5xL_0WGn2ypwO0thItqK5isHHuMBciOTcsep21C7MK2gH6tMB9jVDIbQmqgb9-3zIEDALuTae_n2LyZy25Mn6WjfwWoiwkbF3PaByrvSSY2HvorM5k0TlAIYUSZxnmeRq6GJpL_Z5pBJkcCdLYsqVKfjs7-ibBvsX26F5yLp1JGlADdVAW7gwdPQqu6vwijMkxP7hG6GU3uNk1JD5ToFDDV8JLa2yn-jBVA_depAbV4pKRjEISdZ4rmcFQOxAiF67GsAlG-8PuIIoWOCNTboQlUn0aBFeUyWs5umHUUkzQpZuT7KgrQAptZ2c7F6cpY44zOX8kOv3dt7FtbLQEGTJ1HmpyO0BqWvm2FR1kBsqgA65OujMgmTei6GiF58eUM4d_j6-bAIfKyla7VpKYiJFL0awE59GLTZEjv4EFlDpAqOg371kDH9qx8BctTkxUJGw279Tqi93b-qosZ_gN5ZPZcIgZq28HBeBxMZ2fpULj-lvKthjREMxFXxDN-rQ-9da5pFl7isAnjyeK_VL49Ypk3RGdFZElc9HjGSsuCMJQL4F7c56UIAqyAT4LY6izdAlnKopCBMb5KJLvCLH0zCv_5gvbOHPu1eYuPL0ymAluupB7g1SWpKeHmoAENN-hMH1oLEVog2OdvCpA4h3l-jQ9UAnQFaZ_EJzdVHcY8suj3755cw-PfnLHmJIbQSNTMAJIx1viSHtgEviYQy4rvIXMlQ50Oh2qSmHVd6GY22NPNzU5yGbuamJxofZkiVFv2V_xIxluSWEiQCh4b8I047yvkVI8LI20SRy_3n8WfRHD017bCeUbQ8exyfMx428aKe6l_Vf1pyA8GMvFXSP7Q5_328AenJUnDkHVSKpPscdaRpboMmw_O-rOol_0BGNkmm8XSUzzzzxx_CkgNZbdyYtJjhJtLypGpyBXGjCK_w3uTetqi_t_4tJpbIeIiAmzHoYhUN9oizoWpVNZxhFqa9ajUn2CC_zIwsw_u0nsp-AXYia2LugZtip6zOIgVAx0WDDfU_jsXR1lDD_T2XN2k3D3E9DgRyCiHNXuEO3l3WQ1N2iPWBsnOCHSl1F0vlJXNNd0aRQrCSJ8gf-epow3ToJ3cu-Gz9wto4WAoWN6mD1JxXf_wIJxqHDd3WEFtpnJYQRQPQzfE6oSfR9B35Ilm8HQNZTltdhxAf8KTM-ZzXZsFgbvsekerw2g0so0Qh-qPuUrkXM5KxsnPkCE9DrWDEccawcKGnZZD167XWCwLyjk_nmRNBAbY4RPKdvFcOH43erQgS4hPicHEXvozkoG888IcQ8Zz0MssN1VsGbuoxSOfA-YGd7m3rQmWHQM6CgLS91RmSwInXAskdLqC7CGyhVjEwpT8Y7dKe-PdgXgEr2qfKuvIwvmxpMlIV1dL4Rtz1KTBNzntq_96cuaC0m-PHclXSWEUKSIPjFZWL1-iDeiUuA2QOvxK8iUNOy6YAczYXB3CRk4nM41apGaaCZJqUaZXQwGGd36bYpMC8ux5Rq3-uhY3ljwjrYz2I1-SEK8Kr4CAIMlmiW8ZDUMUNtAvcGfuI-W-lNau7S87mnBJs7z6A52L1rDFeliep4NVcyz04TD9oIHvWkoWT4p8-zLPv0mj1kJEbMjlpFWtCah2hW5W655A3-KRP6v8yyotD3mY4XuRlZHx1S5NDkITF5Q20bJARF_8r2ir2iX4nR63eAU0fWF-_n18GmQqsMXINGvZx338nCSb8D74rGRxsiApd6RPmSaMkck7lEeXWcT8R8QQinNazSLIzYzy-6n_wczlTM8W3CzZ8Tv6S-7zWJMesvH6Xnb2MxEg2TOVExCAv5wLmKj5BbvCNhdlWAbT1Jwf7VlocxkVqZMEhe0zCM8JXWOXnWPx3_Zs7G9YNv1_kBXshIA6F58iznUqhWHz3YAO1VlAJo3CNGkD8JQW4xcL-Oz0I-uhqpAxD9QiE5F7yFo2NWu4QsdGqzzcQsNXNACZFnHhdwnDEq22nutfQoMak3XoUEC6be-5k7KV7Yj5GO7Qqur_4CtKtHh5LkFbwPfPBtYWdd4RaEDtyhQel27qHDUpVKY0TfLUk40k5cEvUGsVjVH-n0cEKKeRtLkA39Iz4aIntGjnZrHgv7mvhCxG1MXMldx8w895w3WlSnkyqN6LrDCMMlFEecfCfnEpKpi5Pl890OQ3Q9XgAsyzS0nspn36Mm7MhY8d1Oj6ykmIvWLat24fHYrm6jALb7_8hSyWw69A4SttcZF6ixpDB_gMGJhwotqRwxbyApzNyI0I1alx8jw_v-u1SKW_AmR7GONBSlGBT2YVF0qNqLpfGj4U-FiBuQGd5S5hhvfa_rm_RWhEdre7OsLxX19_Ua3oOav-RJJILBs1PAN1wzGTbPQmVYQ7Dvqj908To7E5MKt2zOJmaK5FmErrurFIy2Xw5Fyp4SGoK_tjkmrwBrI92OBqkSEJyXaU6Q6YboUOJQxGhWBd75OFSMYL6uZmj3Qc7d8Kw1JZJJ6K_vQ2_TYPmii23N5uWi_dlcJrH720sd9tOP1C7W6ezvONM78ZaFCBkY8LHXf4OCOJ1LTjv1FIpZeaHK9Fs4aFKHng5Zgch9oSi_5IOQVf4grRipYiCNdrBn3e2qRVUwQsW6gDXjBKamVTOhbHbVbs5tDjXi7SoPgWpQG04h7-9jt4gB-Y3ZSFPCpE28Vuf_IzOiI6pLaysHZlSZDLC9JcXdB3l1T4EHikksN1GdkZJHvAPYm8wnJb6mOodZjx1VUAhooiUVOIxEiBPjnwGyCLJATJUPdm4MDn41_k3QvGTOG8WfctH6oLorGWfvZ-Xa6xffNlLm5xA4KxIuKNtOLUZtDuDes_2P7NbjA40LAtnrdGqwSHZIoWuV1oEflBd3a0zVikG5Vd3983NlXmeUTiQ17iMKkdu_YTtCTCf70ilprqAWNrQxzY5ZqcziLfRYEISpn7nzSqcrBZ7eWWPUexpz6KnUCnYmI2-OJUglKalGMmlAIsE9pazTBxT0Yp6v6UQet-SKCwxdeBLozSseP8pC6LS1572hNp62kAc4_5zFhxcmZjA7csXkst_8vxmhJGTV" :
			10 === eU ?
			"-VN402V1-6zzzHh0vRIzzz7xY-ef54b0-jwSUTcQmwBNm6Nji6vH5XPAMeIdi-9rPCkBZPOxMpuHH22j9Smd4DXk-t3Pkr1eHg5XLWLUns6yHl8925R73FM4q-5kSPIx7TeGt8vbrGwhu-fSo2cwbzcOuNOAyAVzPPoaa4mmy_D3NatbDQiIKbtttIYYINb-mNKyqtGa-9o0tXOzFYfHIt5UbmhL6y7rQA37i2NUj4gXWBHdUeR4_pygqLtmfG_b2Ze62McU3N535cKogpFBVcgKllakt1ZqfaF6VsC0vkJpayA1LjEDEO36TXtuk1aaZDZ3SefUzd_xKddKJoZrZlPYINN4yhrz36h4x7Sq4XnalNO9S6oC01gl9TRJZm0zf_kbnCKsKy5xaE6Ri3H77YBuddmeFheLLXeN9qIGTbatHHQuFljsRM59weUd7Re0zy2-egRpCeJEyR5qDHpuAZWnd-Bjqiqyb2bTu929zOnFlbXC3Iqa2gHMcHTzKuGl7P-4BQ_K0ZOvla4A3nTyLFKEeWBbrv74E5Hobr9wX3OW8zYDttC1n1ZEJ2jfd8mEleNf_Sy7NP0u2K04eTzK3rGVyXElTWn6Rf4-KwAB1iNwjvln4Fqe2AMvoBcgaT09rT-ZlI3Unb4Z8YWW6TD-qWcY1F9Tc6dxHmIeCcDWaZPzHmAeie3P9wN88tA92yXFjNqIHmtujiMRxBVXfOLWgsyX8-kUwirovx3xfPMDoAEawgK5XpNKAvQcxD8HZmLlMDjioXc0nkM1umHmK1S86O8zBTmi10kJQp43WQgiNIglcXYMJHD90kMxxJ2jfRisToEMlStmLHtzP1cbJpx9mIY8UiPZydeOrezcnMp_2vQlsbZ5E-Ckm2k4wxoYDTpQfI3JyAEwUCGF5B6V5KloxdoFS7iQW4DUurrzQFwMMD7leEHU6q_N74MsY-JUhKJM6ViZnIp1lNowPolYmqwtvjRy-E-L9v7fEuZ-K0AmNVQeYOAjJYcPqzJyGjC45byfIHDeNnxGUH48vV6mjtw06mwtVnEMlbVF0epgH9E0R62EnK3vdBPB8Nq0hUI9CaWcpHQZcwxMqK5v2g5ba3NJKzqWpHWPcY91fTRYWxIyjtngVRdFT0jdKwSPgWDFg2PiLJ5pxWGq0m8GQfO5dl2SoVZve9GyVAHapQi33vgmL9UbaO1AOPu4QhjDUZuvzRU-z0MJEh6a8ygMCYnrgcsVjdvl-_Sz4j3IK17POFjb5NusSL9yMwbe9DXbEZvcjBdYTNG0Kb6fNy4WVtXHxHSIBVQ1Rb6mrArbEQTu-0MUXo8zJGQ8LEr-zue_CxLKrKLYG5XfLCikXOWbES78_i3V15rWrL3-Z3594KEFNElmA4F6x2iO6ZookgtY6ano5qIZJkM4UvNwv3yi5EwVUsPdm4NNCf8DgsdxRHSQE-xi9EcygBRtUdSzM1j_zjCGlLA-jWWd93U4t4sZNhPFcX3Wn-JkdZLfXt9BjIMJybH6jgoPqEWc4yPwXCnROY8ZV6pwFTI7gzwUgp8GYTO3ByB3sAG09W2NJotrVtJ1FD8Py1aXdZ97FfMMIRcoMbQqK96pzDAtwUr2eXNwGJ81n8KHg-7bICssd8M7ZHXOgxTdBSfjhMZo1b2iR5k5sN_NcteBLkKDGSMxJZuNO8OdPrBTXUDPEO8MACX7JsAlkgN5RkFoxIZkaBKKVi5xn3ktHWxUL_nZVf5_EcTqt13qKEjLzCeWL22dh90APbrddLCN4_sHl33OG4DxeI3fa6Dy_DbRNVL6BYwU1EWBl8yawCrsLEuZ3Bp1OmhfnhZm4CWxXs7qp6Ut7R4nWRDO6_EYrFTPri28_n-il7Fl6rjkTk_kq8ngrZoc7rLwcdWmG1u9blLZbS2iMWjbZdN2eJ49Pw-NPEPI7iMHl7QUN4sznqBI_PQcDNoAB6eEC3Px9ClwN4tQ7c3OCrhdGXghaxZtEwBBkhwh9y4KL4d_Ja20eiCUZEmYGQTabZQPHgaQR8Kq2SXQ34iAH_WRqW-F0bfK8vLaNnVjgrtsmn9eqkQ4yhvn6BpI67MkLbZ6NebJQjB5QS6uoEpYgVH4cXAwX46xAkbHbGzL_kcGfC9COQWNvwyPHYrxgK3hMUOZjJUUoHzPZlj37Ts8fDAhOdz6hqvtBHpNOoXQRVH9oC4X5x3DGNgP8_mT0ajgNP5v21edkD4W-zRj8KAO8LDj1ejhiQ2AtfoIEL-T6SrFsSfGCAt31rkSyQ7pALOg7hNzIgXSOsgWeFuN5rW2IT8hI9y5vIzhTqLBKfC8kMsOyECCYwOMpEmbWHQRECRDmI_B9p-yZGS6PmpuwVS_T8vQSBA-opyXoDbCWEG23Hr-HHaWsc_ARo6EYvbf-tGnBWnBZUb1ZzLanzW34A8cc-JI6uhtknm0UNJWAly9pn4KyJKwpN-ckkiOCrBeCyEiaB_VIb35MpHrSP6NdpcenspoORtJ9H8TIHyZpKb3RJGwaJiHHP8sdBXXxeIdsiALydmgMJxx_pslQteW9y3O8nefPBddCLL8bx3y4XUQGQFXhLUx2_Ue5FM_g4AE8zrxiSa8W2Y2gz9h_bv4w1vyT0iVHzwXs9kxb2giHLJgKTmCTdM5KkVL10NgDiPr9Vns7q7fE7tfLYislp-wePl3ww9vew3vKOZeRQAZlKsX1VGtiaJhEJ9EkjuSRpJtS_FQE7izTTrAJryzvMrJeim0FWZ3iIo0Z6vs7jX_aQ7OfLkkKzv5eeIZOjJx7pbNw2EKTbA7Px9Yo8wUmM1qPpGKXeKHXqnyauqkE3a77zhKYJuc7U2GRDTYisjcHFK9HcoOUenMGGjdBwTm6aq09P1FzGZoziTbIL9XApuSjFWLzS9jCqVJ17Tq3x0lUhzWW6r1DxdAqTgrvgZ5-xFN3qRih9lY6Rg-nc1NAU5MMKcY1lYRQYfuh25EJ8PazQr1Mcnmp863yv3UXlfV8w_l4gZ0oMG0XBz3lwg65RCn6YJzMsAXt2_3D2K93EwXqgsYHTjCpYumB8lHd7Lzr0zlq-Q6WHD_b4qlTU20WXYm3GH45Y70Un2kdXfhUBw3WPiW3mQtLMYXJv_3TZ05D9olM37H9IyceF89kaOPdEinLxoK0MrpuhPlEabBblclnE5y8RknKsP4MtkJ10a2cYg_SDOHoYeERpLeNs5FTnRfKWZUtFjJxH7A5Opwqp93AUIcEsvsdGZZQncbRbXmthS6AKsRyOM3BsjE7uxIUaJofLF7eopfOGTcexKOtNzbDzfA7498VQnxrGTNJ2GyB-tuhqpjVdtE6I_RjnxqAn6qulv4IjqxrKmAandf0DLbmRS0LkBH6ShxsMSeViM7sjiZ9lDCtY92DrYgCnreF0kCzNHI91JlaKU2mJPJyXc8aQHl61j-kcCf6aVbkQSsnsKTtmIOD7XV6tQ123fHRpdSeEPwrLYenw-fD2WxDVLc8vR1jRz_NnBWPWelDD9OLjiXcyhsnoLb8htj88RIT-9s_SL6tkC36v6xF93VKmvNPXb3ERymaD_yU8ObK-rDgwRmq_aelJHmMoccyQqic-awT0dpIt2gltxkmWHI_q752J7n8_v5idnoEZLdNOXXG0uLR5UhR8EZrwGNYGQ7qffjA2rolVADH0-7Exe_mp25rgA4wbv_ABG9xAY49igV-qf7h164eJOQENu2lDzORskVAD-N_mzZadcQEd0cfKlTudulJIDoSX9Mn3TNx-Kqm81mjTwl_UOumjs9kbP_s0i9g1CM1aO5IMJYIEoRAkN6vY9oW__cG6zK9Z6snLvSGDaDMpltVqb_PS0yZUeNyVO7USD2qYk4K60K6w7QjO5FzXfDwcp2hq5uv1STG1BDQtQT-LocVB8h5_j-0f6ikl2koH117YQkIT_qAjrJweXkXkIWbR99lWn_s4c7WCyoI-nknsJQXAxxsnIATkz-2AiJu4F2n4ikqkXXCiRlejE2EQDOPMd4UVMalTHRRe01z-LgaFt831Njp2wkWSWnCXd5-LDnUdecdiJlXLbzLIUXn4byaFonT6zsO8o8jN6dVScQ0917XlT4iHp1lW_YsNLdvTxMr0pMUS4pRE25VS_lFmJg5sk2rRMOsEKDfb0zOg8YKcLtIDdIziqea-1WviS3ODt2VnCOgWYNM2le9QmBlTVW8l-FGAKIlSJCqWbUVAdFiVumMv9Spiu5xXFjsIsHftdZ8gJ0oUZNQ-DU5AWxwGxSF5KY7AhFjB9pYFAFAelME5ElA6ncZ6qcLbN64KjSWgdBX5e83dT_eAcYSyDJ7L1llB6tLaywEoRtoWUEQuqe7inLL-trCZivi4-JcGzXDfSM_T10rTqLRapq1uno1AyNkZUQPzI4gZleSBAtx42R8EUaonQgV99cH17TQPSkGXtkbQrXQTofa3oDddW60MhxZYpO29s808tpcmW2h7Iv6-r4TnTOHGxMHE88573rJ3HtBdi4aPDC-lagQIcRHh89HRJytCXSOa4VL5DYcnrmSafOoN28XutPZfe4Q8-GBnhwWrPWJgl2hKU3leVgA8KzFsr13SAlYF_J24Z3RFa8-qOYnITbVhA-iSHjp53mYaaAq7hsWrtD6YkkfA5ODVVZPto7rIPhR6MLpGDFV156fe_6jCmRxGIP8HbaTb9YPXcxHl0LAfM0yuqgxDWvKji_i75OREyE0JYwQ1YbAIacZiN35qaEdR518x5FhVRYGByxwSzNkqKYAtGcEyGxgo4kvUwlDxfolhr6bylBuqZ6C_jfdijNpgjcsYyaVU-elpP5GZvw9c2WOWOWO_hW7EGDgtsPpRZASBFXnm2P1RKti6cDjJFv1Xp5HcXcs-4xNa06-GhRZ2NFAqbB0OkByvPMjJ6HmKogu60MtMjLQLzIPOW8SYJHKxXwyz4hqVIe-sBw-eNJ3KY6Vu847iBQgKk9ttczQl49dym3GOzCu21ZFDafMnOeDfhLHTKukduWb48m8ayj4UOLuup7mi_MhRTmXtv_o5OeFd4-J8TwaLMbWXuRwUEyX052qcK13qGbJK8vJrf1-wxyWzXz7fQPaSRAnsCbRBO-7T-zR6Pu2O7AW_iG5cAap_JbMSv1nJHAAsR9UdYR8Id8wVaGFc8nLT1YSEVK3txJwKtKCsijAnjXD6Q5Eb9JlyVrI6b8wNWgkcUJbAlpMvWMtFLwcJaE24R9UUX8SDnZq1vLAIbfqLHebm-Y6MgGWJBA9YV2HLsqWoJktZrX8KPTTMRFfIrrDfoqEx3z3rCkKnErZuAvNzZrl6TQMU1K7pmS52dIIlciE1P8LfTtMtnAiQICS4Q9PLSSduTV0xMI4VLjX5-lnodCPG_ziYpu2Qgf6eqsgMzQicJtmzSA-lEcVjGFSWOK31b1f4CYvveyK77AyiXt7G3oZpNca41eSX1vCS40zdIRrpk3JdfoVICwgmQiAFrautECXlMiradHhTYBhDKWn8HxRpVMJl--50-AlK9UpKQzwPotvftsOhjETZqlPpnCMWY_69j9S_2ZF4SR-oPolsMjkZxYoalxv6DDdYNX2w-d8DIfAk6wgYpoq9LaQioakWHBIf-mwyV0fXJuUwD82WQ0Da_b8HZMP13Bz9eQoK25eua5jbKQPvfIubVeGAwhJOv6FEk0il2I43WtNXZQN6uibYTaxxEX6FTMgTIRwO3jOsORCVBUNerFg_OwYCxph9-aqQ8I4LV7CA90l_ni2fxQJQ2UQFqHmUfgkSHuUgHPJ91sMNq8yFsXw2S3l3e5cJj5Z7Es_BOVs2Ur2rRnI0Wg9wGZG_wRyCeHbPt_0ka1gJHsKZAs508rKXKtHkytG436yByue_1n5MoZwdhMR6GmQknTkT04FX4iaXcJjUxxEu-RYU5zMPEHH2yhDjPth5emAbpJpb-Be24VnTqerQGjKElbfzbAero1RHZyswPha2Nxo5xWjQuTDzeBJfThGVb4XywivO2ZdyrMeoIUROisqXISkUO2xgzkPLSQBAOSRa32S7l2MGXvwB0jguMbAshVMndIwm4ca6PJrHeECgyMOq7x4mVfs8jyAGMM33Ko2sLLJ57Vxejdw9vBShSeZlK0GEk7p-_qnt1yRNf8IuTQx_5GWVss-mfn26FnzKTmjJJOpkhQmdIyFzlggFfhuceziNqtPHCUCyL7xRbgZ7iadMfzQsw_qusA4CFoBHdNXa-LIJX3J3Y4YvEzEj-s8VP_OUtk_inUqgdZ0D6s8VYbEdmZMgeGOtOjdL5TDEoDv6IPQrCjARnzK-chb1qXvMf0XG_HqHMV10e9H816YYvy3PGykxxhSMHEaNCidzBTxxrPtoMZdlM-s_cSky7pvu2R59c5cCLIcyjGtdnqwbx2pwmAVxmD_Uv5gKAQaPNEIcUaJZm3N7TBX62yanzDg_1rEKBCCUUpr2Grdg_yV0PxXJWqW2xxJTO67y6iSfjhRfh6P33mZ6NMYV-h_SOa-OUO1Ymokqbltmqd81Tk6GuSVADj8g0xB6h_pl-bUjanrW1HmdkbjdNd2ivsl5RC8tBCuFeHU6idAjstV9AOZ_57p6dFdwx44impXE4b5ZHqgewJnZsF18j4mFX8TlmQYAemoNJN_OLcVdXxS6eK-UOqMBdenHNgNvSGkqw4GMhJhavnN2tVzEVqaXhGpVNWJgeP6Gg2Y_qPbiLuhb1JrTsga9IVmTkYphuWQHgssQT1V10CZTjnomqhI9tlza0FphM_l0U1Z_ei071pAhHqp6WMv_9mlZTfhfLqdd0oV6du8Kon95FhQlU7dh0zMh_z3Mck_s2PcMUwnNM480VpFsqw-G5kJmu0hqjanU1OamHOSEg-8irsOQXSXrtn3s_N7slabDvyop50KUoMwPh2KLv8XkpY-HckmKGll_y1ZHyZZxKuZU4dC8jliO5NJALdSkbWCji8NJ7V92BKIl_i6s-a2ls6E9VdlOOt8yy00amo8Cuws-0eFqFHVUAAZP57jQkaoZhz7EbGnQmHIJ8yBXkiGLQKDIIJcIcV8cRQmqgUN81jfxXuBc93ARl6DroGoQjP4uUNDRcIrDFQQsXCRW2dwTsc89UGO_QYtJyDg4r7F87qj9jgdVnKGpJWVl99nk2XjmscoRVkPHtLZR9UJkBUEHBjF8IzaEkdbpt2u2n72hTLsNjTwc2CMVos7fQi3G479LQcDq6VVoXeBr-8O7FQqU0jM4rAd1gylbn2bY76o1TJz5VI9DZycNrbF28X7imObCwA4mADeINedof_4pse2ZPA5U0h-vgWDrqtzzCeRzqe26b3ITzW52gUkoKC6tPDaAXyOBK1C-bHxumuhLE06_WvbZCI3NWIfk-BL0TysZ6he2W2hx0MpbElDh1u29LR0veGaYeY5s_lZ6TEfhjCHESZdR9NmxV2lUZeBqZ-DYW_Hy6NO3mTqwdGvZcwXPVX5ATsgy1Cst5caN4FWgK7n32PmgUMLbI12T33Qg_ze7kFuKPEH8VUiLbwIM5Y6hSauw-UwwIN9s30zGuP_mX9FzLMTYrjL-Tq2L8uOpld06sgi8n23LD0v7Tl_pgp7DDvDQ4evKBNMY8ORqM_qyBYVqX6t2S9eKO3akKqGOfDK-EX4Kp1BtmAqh2eDcXX0VusoCqqwcDGT87Fb6C3i1Nur8PCZW-A0ZPlNhT9muc8AJK_5RTOqvfFKZ44BiSR0-RSmvv1jNJfXgONIRRdevNz-a7Rr_o2DrvHQTd2zrzw3TUliOGSkGqPa0YvpIv6pBR5wfw1jKc8Hn4FrwXNCU2OikfJxxpFwLk0yBiiRRN_QRguSy4DenPdqIFXOv8pnG-SOaLFkOn-8w54WXfxidcnD-nqTK3V9zI-PL9UeXa_g9_iuQR6TgPQoajfB5KrRQGOkuQU74gQetYcFeQ1TlDRAA9DHDwbDhukEYeCbJdNlmXPUfY6Cc91CK2PW0WF79wmRTJrzwwMC_zothQHa1cflH4t4PT3arNcUYIcth-bMn6-N8Kqi-u1lbZ9Srf1jn8ymInAjTad55mjzdZnRqlAnU3o1YZ85YvLj_V9o2BzZTuyJKWSjOiVNjhlCPmh8Lbq4yaFfoCFg3i7DCNPf0OzQqGVqnNQ6ebUPUHTLiAx3Mz2w3tVxTc4YsuPDnNG6aZSZxXstnFl6IDG-EMZ-3dxXAQd4GDDYFmQi9rAuF9aJEt0Tc2owuuL32Fmbx_8hMghfuluo70Q7H1fuPHe5WBHejrknyNrASGyQzx3_8xUnfvVVhfH5cKIUBGetNfcXE3F_vyJ3ydG5KNYcXKqyRbAKs0hIvX13Yxbzxux8ioyvzjkYr4T2GCmVM4hSVu2_7oYbeOlZ2cG2I8TCtxlhM6LhucmMy6dT66rBQSEVNm26kdWy13hSWnQvnqbO-mk_E-ULPxYwQ_JHo_1UezKpLW2DBzuJiMy2j6gPsy67Rlmd13VLq9rAD1HZezHXUnv5jqPLc9zJNtrctiSmfBKPStBR-gLzHGw5niSOKyCTdgwrvVT2mFkYUxIQYnJv-ZCT0QD_vdfED2Tc9LV5hTv6zkDCpuA_4Afj5M9j0SxCXt3EN36pAbZY9Wdy1nsGpiSJhoUKXETAkAKIPGF57BVZ7vd_xyT3Q7cfJ5iz0yZUjM7x_A1Q5idgUDYn8pSPxJXmO9FwNIoSf3iiNlnC14vzc1XVGHMBBHc49rSPDA0b8wywCdCFLK-9TIu-8dK_bj0IbV_YU61sEpay7LPycuATMoj6ZA6anTUw0K1gvfNgiu0Mp4MVEXRlBdKncG84gEO0XVU4UvSVg35ka6cJPzHsOf7P5XXNUiAk49dtHjxg3nUalRpSxgv8qj0fxIbH7ymuhDOTcLS2bjmrBy24HcLz0ufh6WSU5WvyzLTuzOjEf_XH2MzaBQ8qytkQd6FZmGgrghdIvuDtmeIvWxODyXQpI915T3MeACLTqaaJPQv2Hh2ms1orP9-V-LVAEu38rnzUm6yeqbOKc4QuBDcjFLf6YorQ21LM1bsYrI-LKNF7ACijPqBA2m-7Pl98J3nDNzIDOsgbHbIqAKvY5QPgDQvxrUqxq6YaienSVTDxTPrAGfXf6IPvRnBbHB5UFWdNdagXPMLTAgkjZ5tyJ76p_cuvRveJ7QvGd-74NKESlVI6g4Sqadovay5WHd41U1v8X7nCKAZmJ4PS8GEbAJ4OTgMbO_IIHUVlYoAjKDgBLC2F3Y-FIX3snihq1qY57gthWXP_fjJBEu20_Cv1lBs6jAbhsOs7uFBPPc_BdythXdPPg7usWVEc91lv7wBn9-2_uoB5wNpsadsMImW3SjyRDsr5Dkd7-MRmoTTpAZTA4_b7ZBhxvG3MT9YKeRO3pDQZSGkHjvHKnC7gDaY1se75TwpiwwcMKSDET3scyzDthjicY0PRXkj1LLpzGoZZVrbK2-bi3ICEiZnOiYLyYEyNVewmzaOE-BWqHh7R0t0nRrDeQRbNDcOzTTmE9FRwObQv7diGyRypa5-3-toJ18AytqDdE7IydA9WSZtnbXyv_Kc7nJMrNmHJiMzShcI6xiEgTePd5ieIEjbCd2Y37M6HWiYECVgBRWY7B0-1rGLWLzpIEDfj5y1CpV8je3y4EXwW-xpfSZl4aMCenXZZsVWhNsBZ-ogde8q3MvAMLsk_2lcVN9TTG7V5O-KCoi2QVxu9t2szNqN_H34F5-VRkW6a1L4S5KkOkhQ1F97fivmrTAxR2rkklJDuWgj7gFqb4wGV4z2JCMdMoaIlCWipVNTKA6E9Trq9DW7B2YToAa9a087gQyCBXIHA7KGm4RJLzr6KAoB4TzzYB_AsfHxwYVWAkVmHC_PwIj3MxSbgC25heXoLl3t_tuloyg7YZCxo4sNLEedQ6iTOsuKTOWf1UFTp3HbhPf1uJmNv3k5tiF8U65dFaDR5k6Hb_mfrGZ53TVymfkmskTLOnn0KCiFAB6CI5CR1La64ebef4c8SHwlRrkPZlwAlcDjqcReTESxGaqKgH3Htf1yZRjiGjwMrU27lqjy4EriS-yD8_RFtT5rsgNRnhQm25hBt5zTu1az4OBKhxofKPH6t8Fl-RNl-y8YUzSsB3sUJ3IwRLbsB56G6F_VaQhpubbsZp0TiBL8cWSOcoE1uyaiJRKQq8uZKFQu2zCyj1I5ILHjajG9rMViaEF1W0u1oapueZYGvAdWOc4FGG28upzHKj0iRmEweCXke0Wjjaq5Ac_2AP86WlMtjfwHwhhZXlP6dvHbIk0ey88JMD38Fgc5gmgJ84WrWL8NJRS6yX9PIxgHG5JAG97jVkm7lP10VZlRvAT8lfbak_rEztsOv4hykC8qz7TH15CJ7GwguVTCdHVhv9Jy7ZNZIfe9nBVhxL6wex1Pm8dmdcBJ1MnIlw-Uzkl2QvstVKKit53VYKj0pQjficN6AAYDQtWZ80cZUbMltUAVYjnIutyFMu57QuS9zHZ-qY_3_Ae40hmu06OAZnDTHD8kbcJT63r88EavwWlBwmtyb0oEHPaZ5ZFSPcK48mdvrEDg8L-UR8gH2tJBB3NaXDBu3VfgtuCiwBFY-2RwXGWl1ihAQ09SpemMgqdK7vCZpentZgTtTl19w_07lq6e6Qi8vFRcaQ74aMApY205E6f4TpKVpzowiW8DyuavtzUrH1E-Pygj89J8lRhwsA0jfaUD8e4S8FCM82BoELv4cDfH9NLuIIZMBmKOZ--" :
			null
	}
}

function cq() {
	var gD, j, k, max, aUf, nn, aUh, aUi, aUj, aUk, aUl, aUm, aUn, aUo, aUg = 1e4;

	function aUv(aUu, nq, fl) {
		var aC;
		for (aUh[0] = aUu, aC = 1; aC < fl; aC++) aUh[aC] = aUh[aC - 1] + nq, nq = aUh[aC] >= aUg ? (aUh[aC] = aUg - 1, -nq) : aUh[aC] < 0 ? (aUh[aC] = 0, -nq) : (nq += 16384 <= az.random() ? nn : -nn) < -aUf ? -aUf : aUf < nq ? aUf : nq
	}

	function aUx(fs, fu, aUy, fl) {
		(aUy ? function(fs, fu, fl) {
			var aC;
			for (aC = 0; aC < fl; aC++) gD[fu * j + fs + aC] = aUh[aC]
		} : function(fs, fu, fl) {
			var aC;
			for (aC = 0; aC < fl; aC++) gD[fu * j + fs + aC * j] = aUh[aC]
		})(fs, fu, fl)
	}

	function aV1(value, fl) {
		var aC, aRv, fP, kO = value - aUh[fl - 1];
		if (0 != kO) {
			for (aRv = 1 + bO.gC(Math.abs(kO), fl - 1), aRv = kO < 0 ? -aRv : aRv, aUh[fl - 1] = value, fP = (fP = fl - 1 - bO.gC(Math.abs(kO), Math.abs(aRv))) < 1 ? 1 : fl - 2 < fP ? fl - 2 : fP, aC = fl - 2; fP <= aC; aC--) aUh[aC] += kO - (fl -
				1 - aC) * aRv;
			(kO < 0 ? function(fl) {
				var aC;
				for (aC = fl - 2; 1 <= aC; aC--) aUh[aC] < 0 && (aUh[aC] = -aUh[aC] - 1)
			} : function(fl) {
				var aC;
				for (aC = fl - 2; 1 <= aC; aC--) aUh[aC] >= aUg && (aUh[aC] = 2 * aUg - aUh[aC] - 1)
			})(fl)
		}
	}

	function aV4(a6s, a6t, fl) {
		for (var aC = 0; aC < fl; aC++) a6s[aC] = a6t[aC]
	}

	function aV5(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aV6(a9l, gap, ii) {
		aUi.push(a9l), aUj.push(gap), aUk.push(ii)
	}
	this.a8 = function(a89) {
		! function(a89) {
			var aC;
			for (j = a89[0], k = a89[1], aUf = a89[2], nn = a89[3], gD = new Int16Array(j * k), max = k < j ? j : k, aUh = new Int16Array(max), aUi = [], aUj = [], aUk = [], aUl = new Array(j), aUm = new Array(k), aC = j - 1; 0 <= aC; aC--) aUl[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aUm[aC] = !1;
			aUn = new Int16Array(j), aUo = new Int16Array(k)
		}(a89),
		function(fl) {
			var aUu = az.random() % aUg,
				nq = az.random() % (2 * aUf + 1) - aUf;
			aUv(aUu, nq, fl)
		}(max), aV4(aUo, aUh, k), aUx(0, 0, !0, j);
		var fs, fu, a89 = gD[0],
			fl = max,
			nq = az.random() % (2 * aUf + 1) - aUf;
		for (aUv(a89, nq, fl), aV4(aUn, aUh, j), aUx(0, 0, !1, k), aV5(aUn), aV5(aUo), aUv(gD[j - 1], aUn[j - 1], k), aUx(j - 1, 0, !1, k), aUv(gD[j * (k - 1)], aUo[k - 1], j), aV1(gD[j * k - 1], j), aUx(0, k - 1, !0, j), aUl[j - 1] = aUl[0] = !
			0, aUm[k - 1] = aUm[0] = !0, aV6(0, j, !0), aV6(0, k, !1), ! function() {
				var aV8, a9l;
				for (;;) {
					if (aV8 = function() {
							var aC, aV8 = aUi.length - 1;
							for (aC = aV8 - 1; 0 <= aC; aC--) aUj[aC] > aUj[aV8] && (aV8 = aC);
							return aV8
						}(), aUj[aV8] < 5) return;
					a9l = aUi[aV8] + bO.gC(aUj[aV8], 2), (aUk[aV8] ? function(fs) {
						var fl, aVB, aC, aMS = 0,
							aOa = 0;
						for (; aOa < k - 1;) {
							for (aC = aMS + 1; aC < k; aC++)
								if (aUm[aC]) {
									aOa = aC;
									break
								} fl = aOa - aMS + 1, aUv(gD[fs + j * aMS], 0 === aMS ? aUn[fs] : aUh[aVB - 1] - aUh[aVB - 2], fl), aV1(gD[aOa * j + fs], fl), aUx(fs, aMS, !1, fl), aVB = fl, aMS = aOa
						}
						aUl[fs] = !0
					} : function(fu) {
						var fl, aVB, aC, aMS = 0,
							aOa = 0;
						for (; aOa < j - 1;) {
							for (aC = aMS + 1; aC < j; aC++)
								if (aUl[aC]) {
									aOa = aC;
									break
								} fl = aOa - aMS + 1, aUv(gD[fu * j + aMS], 0 === aMS ? aUo[fu] : aUh[aVB - 1] - aUh[aVB - 2], fl), aV1(gD[fu * j + aOa], fl), aUx(aMS, fu, !0, fl), aVB = fl, aMS = aOa
						}
						aUm[fu] = !0
					})(a9l), aV6(a9l, aUi[aV8] + aUj[aV8] - a9l, aUk[aV8]), aUj[aV8] = a9l - aUi[aV8] + 1
				}
			}(), fs = 0; fs < j; fs++)
			if (!aUl[fs])
				for (fu = 0; fu < k; fu++) aUm[fu] || ! function(fs, fu) {
					var value = gD[fu * j + fs - 1] + gD[(fu - 1) * j + fs],
						aBp = 2;
					aUl[fs + 1] && (aBp++, value += gD[fu * j + fs + 1]);
					aUm[fu + 1] && (aBp++, value += gD[(fu + 1) * j + fs]);
					gD[fu * j + fs] = bO.gC(value, aBp)
				}(fs, fu)
	}, this.aT7 = function() {
		return gD
	}, this.aSk = function() {
		gD = null
	}
}

function aO8(g4, g5) {
	return 0 <= g4 ? bO.gC(g4, g5) : -bO.gC(-g4, g5)
}

function kf(gD) {
	return gD * gD
}

function aAo(g4, g5) {
	return g5 < g4 ? g4 : g5
}

function aGv(g4, g5) {
	return g4 < g5 ? g4 : g5
}

function aE7(g4, gD, g5) {
	return gD < g4 ? g4 : g5 < gD ? g5 : gD
}

function aVD(gD, fl) {
	for (var ev = bO.gC(gD + 1, 2), aC = 0; aC < fl; aC++) ev = bO.gC(ev + bO.gC(gD, ev), 2);
	return ev
}

function aQO(gD, fl) {
	return gD < 1 ? 0 : aVD(gD, fl)
}

function aVE(oC, oD, vv, aDr, oP, oQ, vw, wb) {
	return !(oC + vv <= oP || oD + aDr <= oQ || oP + vw <= oC || oQ + wb <= oD)
}

function aVF(oC, oD, vv, aDr, oP, oQ, vw, wb) {
	return oC <= oP && oD <= oQ && oP + vw <= oC + vv && oQ + wb <= oD + aDr
}

function aVG(gD) {
	return Math.floor(!!gD * (1 + Math.log2(gD + .5)))
}

function c6() {
	this.gC = function(g4, g5) {
		return Math.floor((g4 + .5) / g5)
	}, this.aVH = function(g4, g5) {
		return Math.floor(g4 * (g5 + .5))
	}, this.sqrt = function(gD) {
		return ~~Math.sqrt(gD + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.j0 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aVI = function(gU, gW, gY) {
		return Math.max(Math.min(gU, gW), gY)
	}, this.aVJ = function(aVK, aVL, fs, fu) {
		fs -= aVK, aVK = fu - aVL, fu = 0;
		return 0 == fs ? fu = 0 <= aVK ? Math.PI : 0 : (fu = Math.atan(aVK / fs), fu += 0 < fs ? .5 * Math.PI : 1.5 * Math.PI), fu
	}, this.log2 = function(gD) {
		return Math.floor(!!gD * (1 + Math.log2(gD + .5)))
	}, this.log10 = function(gD) {
		return Math.floor(Math.log10(gD + .5))
	}, this.aVN = function(aHU, aVO, aVP, aVQ, aVR) {
		return aVP - aVR < aHU && aHU < aVP + aVR && aVQ - aVR < aVO && aVO < aVQ + aVR
	}, this.a1R = function(aEX, aEZ) {
		return aEX * aEX + aEZ * aEZ
	}
}

function dr() {
	this.tF = new aVS, this.aVT = new aVU, this.aQB = new aVV
}

function aVS() {
	this.eC = 2, this.aUG = 6, this.aVW = 1024, this.aVX = 3, this.aVY = 65535, this.aVZ = 2
}

function aVV() {
	var aVa = new aVb;

	function aVn(aVT, fs, fu, fo, aEO, aEP) {
		if (aVT.fs = fs, aVT.fu = fu, aVT.aVo(fo)) {
			for (aVT.kP(fs, fu, fo); !aVT.aVp(aEO, aEP);) {
				var em = function(aVT) {
					var em, iu = aVT.history,
						aVs = aVT.aVo(aVT.fo),
						left = aVT.aVo(aVT.aVr(1)),
						right = aVT.aVo(aVT.aVr(2));
					if (!aVs || left || right)
						if (aVs && aVa.aVg(aVT.aVt, iu)) em = 0;
						else if (left && right) em = aVa.aVg(aVT.aVu, iu) ? 1 : 2;
					else {
						if (!left && !right) return -1;
						em = left ? 1 : 2
					} else em = 0;
					return aVT.aVv(em), em
				}(aVT);
				if (em < 0) return;
				aVT.aRv(aVT.aVr(em))
			}
			return 1
		}
	}
	this.a0u = function(aKh) {
		var j, k, hE, aVT, tF = bz.tF;
		return !(aKh.length < tF.aUG + 5 || aKh[0] !== tF.eC) && (k = aKh[3] << 8 | aKh[4], hE = aKh[5], !((j = aKh[1] << 8 | aKh[2]) < 1 || k < 1 || hE < 1 || hE > tF.aVZ)) && ((aVT = bz.aVT).dv(j, k), aVa.dv(aKh, tF.aUG), aKh = aVa.aVc(1),
			function(aVT) {
				var j = aVT.j,
					gD = -1;
				for (; aVa.aVg(aVT.aVh, 0);) {
					var g4 = aVa.aVi(aVT.aVj, 0);
					if (g4 < 0) return;
					var g4 = (gD += g4 + 1) % (j + 1),
						fu = Math.floor(gD / (j + 1));
					if (fu > aVT.k || !aVT.aVk(g4, fu)) return;
					var fo = aVT.aVl(g4, fu);
					if (aVT.aVm(g4, fu, fo) < 0 || !aVn(aVT, g4, fu, fo, -1, -1)) return
				}
				return 1
			}(aVT)) && function(aVT) {
			var j = aVT.j,
				gD = -1;
			for (; aVa.aVg(aVT.aVh, 1);) {
				var g4 = aVa.aVi(aVT.aVj, 32);
				if (g4 < 0) return;
				var g4 = (gD += g4 + 1) % (j + 1),
					fu = Math.floor(gD / (j + 1));
				if (fu >= aVT.k || 0 == g4 || j <= g4 || 0 === fu) return;
				if (!aVn(aVT, g4, fu, 0, g4, fu)) return
			}
			return 1
		}(aVT) ? {
			j: j,
			k: k,
			hE: hE,
			a2a: function(aVT, pD) {
				for (var j = aVT.j, k = aVT.k, aVw = aVT.aVw, aVx = aVT.aVx, a2a = new Uint8Array(j * k), ev = pD, fu = 0; fu < k; fu++)
					for (var hK = fu * j, e = (0 < fu && (ev = a2a[hK - j] ^ aVw[hK] >> 1), a2a[hK] = ev, aVx + fu * (j + 1)), fs = 1; fs < j; fs++) ev ^= aVw[e + fs] >> 1, a2a[hK + fs] = ev;
				return a2a
			}(aVT, aKh)
		} : null
	}
}

function aVU() {
	this.j = 0, this.k = 0, this.aVw = null, this.aVx = 0, this.fs = 0, this.fu = 0, this.fo = 0, this.history = 0, this.aVt = null, this.aVu = null, this.aVh = null, this.aVj = null;
	var aVy = [1, 0, -1, 0],
		aVz = [0, 1, 0, -1];
	this.dv = function(j, k) {
		var tF = bz.tF,
			aW0 = Math.pow(3, tF.aVX);
		this.j = j, this.k = k, this.aVx = j * (k + 1), this.aVw = new Uint8Array(this.aVx + (j + 1) * k), this.aVt = new Uint16Array(aW0).fill(tF.aVW), this.aVu = new Uint16Array(aW0).fill(tF.aVW), this.aVh = new Uint16Array(2).fill(tF.aVW),
			this.aVj = new Uint16Array(64).fill(tF.aVW)
	}, this.aVm = function(fs, fu, fo) {
		var j = this.j,
			k = this.k;
		return 0 === fo ? fs < j && 0 < fu && fu < k ? fu * j + fs : -1 : 2 === fo ? 0 < fs && 0 < fu && fu < k ? fu * j + fs - 1 : -1 : 1 === fo ? fu < k && 0 < fs && fs < j ? this.aVx + fu * (j + 1) + fs : -1 : 0 < fu && 0 < fs && fs < j ? this
			.aVx + (fu - 1) * (j + 1) + fs : -1
	}, this.aVo = function(fo) {
		fo = this.aVm(this.fs, this.fu, fo);
		return 0 <= fo && 2 !== this.aVw[fo]
	}, this.aVk = function(fs, fu) {
		return 0 === fs || 0 === fu || fs === this.j || fu === this.k
	}, this.aVp = function(aEO, aEP) {
		return this.fs === aEO && this.fu === aEP || this.aVk(this.fs, this.fu)
	}, this.aW1 = function(em) {
		em = this.aVm(this.fs, this.fu, this.aVr(em));
		return em < 0 ? 0 : this.aVw[em]
	}, this.aVl = function(fs, fu) {
		return 0 === fu ? 1 : fu === this.k ? 3 : 0 === fs ? 0 : 2
	}, this.kP = function(fs, fu, fo) {
		this.fs = fs, this.fu = fu, this.history = 0, this.aRv(fo)
	}, this.aRv = function(fo) {
		this.aVw[this.aVm(this.fs, this.fu, fo)] = 2, this.fs += aVy[fo], this.fu += aVz[fo], this.fo = fo
	}, this.aVr = function(em) {
		return 0 === em ? this.fo : this.fo + (1 === em ? 3 : 1) & 3
	}, this.aVv = function(em) {
		this.history = (3 * this.history + em) % this.aVt.length
	}
}

function aVb() {
	var aW2 = 0,
		aW3 = 0,
		aW4 = null,
		yN = 0;

	function aW5() {
		return yN < aW4.length ? aW4[yN++] : 0
	}
	this.dv = function(aKh, a0I) {
		aW4 = aKh, yN = a0I + 1, aW2 = 4294967295;
		for (var aC = aW3 = 0; aC < 4; aC++) aW3 = 256 * aW3 + aW5()
	}, this.aVg = function(aW6, aC) {
		for (var hJ = aW6[aC], aW7 = (aW2 >>> 11) * hJ, aW7 = aW3 < aW7 ? (aW2 = aW7, aW6[aC] = hJ + (2048 - hJ >> 5), 0) : (aW3 -= aW7, aW2 -= aW7, aW6[aC] = hJ - (hJ >> 5), 1); aW2 < 16777216;) aW2 *= 256, aW3 = 256 * aW3 + aW5();
		return aW7
	}, this.aVc = function(g5) {
		for (var gD = 0, aC = 0; aC < g5; aC++) {
			var p6 = 0;
			for ((aW2 = Math.floor(aW2 / 2)) <= aW3 && (aW3 -= aW2, p6 = 1), gD = 2 * gD + p6; aW2 < 16777216;) aW2 *= 256, aW3 = 256 * aW3 + aW5()
		}
		return gD
	}, this.aVi = function(aW6, p7) {
		for (var hK = 0; this.aVg(aW6, p7 + hK);)
			if (30 < ++hK) return -1;
		return Math.pow(2, hK) + this.aVc(hK) - 1
	}
}

function dO() {
	this.z = new aW8, this.aW9 = new aWA, this.vq = 0;
	var aWB = new Array(32);

	function aWE() {
		for (var fl = aWB.length, aC = 0; aC < fl; aC++) aWB[aC] = null
	}
	this.dv = function() {
		for (var aWC, aWD = document.body.firstChild; aWD;) aWC = aWD.nextSibling, !document.body.contains(aWD) || "DIV" !== aWD.tagName && "INPUT" !== aWD.tagName && "BUTTON" !== aWD.tagName || u.removeChild(document.body, aWD), aWD = aWC
	}, this.v = function(eU, a5U, a89) {
		void 0 === a5U && (a5U = this.vq), bi.e2 = !0, 0 === eU && (0 === ab.a5P() ? eU = 5 : a1.a2.setState(13)), this.ug(), this.vq === eU && (a5U = aWB[eU].a5U, aWB[eU] = null), this.vq = eU;
		var m4 = aWB[eU];
		if (!m4 || 4 === eU || 7 === eU || 8 === eU || 9 === eU || 10 === eU || 11 === eU || 13 === eU || 15 === eU || 18 === eU || 20 <= eU && eU <= 28 || 32 === eU || 33 === eU) {
			if (0 === eU) return void aWE();
			1 === eU ? m4 = new aWF : 2 === eU ? m4 = new aWG : 3 === eU ? m4 = new aWH : 4 === eU || 9 === eU || 10 === eU || 11 === eU || 13 === eU || 33 === eU ? m4 = a89 : 5 === eU ? m4 = new aWI : 6 === eU ? m4 = new aWJ : 7 === eU ? m4 =
				new aWK(u.z.aWL) : 8 === eU ? m4 = a89 : 12 === eU ? m4 = new aWM : 14 === eU ? m4 = new aWN : 15 === eU ? m4 = new aWK(u.z.aWO) : 16 === eU ? m4 = new aWP : 17 === eU ? m4 = new aWQ : 18 === eU ? m4 = new aWR : 19 === eU ? m4 =
				new aWS : 20 === eU ? m4 = new aWT : 21 === eU ? m4 = new aWU : 22 === eU ? m4 = new aWV : 23 === eU ? m4 = new aWW : 24 === eU ? m4 = new aWX : 25 === eU ? m4 = new aWY : 26 === eU ? m4 = new aWZ : 27 === eU ? m4 = new aWa :
				28 === eU ? m4 = new aWb : 29 === eU ? m4 = new aWc : 30 === eU ? m4 = new aWd : 31 === eU ? m4 = new aWe : 32 === eU && (m4 = new aWf), m4.a5U = a5U, aWB[eU] = m4
		}
		m4.show(a89)
	}, this.a5O = function() {
		this.ib() && this.aWg(this.a5T().a5U)
	}, this.aWg = function(eU) {
		this.ib() && (aWB[eU] ? (this.ug(), bi.e2 = !0, this.vq = eU, aWB[eU].show()) : this.v(eU))
	}, this.ug = function() {
		this.ib() && aWB[this.vq].ug()
	}, this.y = function() {
		this.ib() && (aWB[this.vq].ug(), aWE(), this.vq = 0, a1.a2.setState(13))
	}, this.zD = function() {
		var m4;
		this.ib() && (m4 = aWB[this.vq]).zD && m4.zD()
	}, this.resize = function() {
		if (!this.ib()) return !1;
		aWB[this.vq].resize()
	}, this.hz = function(fs, fu) {
		var m4;
		this.ib() && (m4 = aWB[this.vq]).hz && m4.hz(fs, fu)
	}, this.a5m = function(fs, fu) {
		var m4;
		this.ib() && (m4 = aWB[this.vq]).a5m && m4.a5m(fs, fu)
	}, this.a6A = function() {
		var m4;
		this.ib() && (m4 = aWB[this.vq]).a6A && m4.a6A()
	}, this.a5p = function(mO, mP, deltaY) {
		var m4;
		this.ib() && (m4 = aWB[this.vq]).a5p && m4.a5p(mO, mP, deltaY)
	}, this.a6K = function(code) {
		var m4;
		return !!this.ib() && ((m4 = aWB[this.vq]).a6K && m4.a6K(code), !0)
	}, this.eq = function() {
		var m4;
		this.ib() && (m4 = aWB[this.vq]) && m4.eq && m4.eq()
	}, this.ib = function() {
		return 0 < this.vq
	}, this.a5T = function() {
		return aWB[this.vq]
	}, this.a9T = function(eU) {
		return aWB[eU]
	}, this.aWh = function() {
		return aWB
	}, this.removeChild = function(p1, a7c) {
		try {
			p1.removeChild(a7c)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aWK(data) {
	var aWi, aWj;

	function aX7(aLn, aX8) {
		if (aLn.tz === bE.rl) return clearTimeout(aLn.aX9), 1;
		aLn.u2(bE.rl), clearTimeout(aLn.aX9), aLn.aX9 = setTimeout(aX8, 1e3)
	}

	function aWm(tc, xL) {
		if (!data.aWk) {
			if (data.aXc) {
				if (xL) return
			} else {
				if (!xL) return;
				if (data.a0S < 1e4) return
			}
			var aXj, xW = new tM,
				aXh = xL && 1e5 <= data.a0S,
				aXi = xW.tP(xL ? (aXh ? "⚠️ " : "") + L(318) : L(319)),
				aXl = (aXh && (aXi.style.color = "yellow"), xL ? xW.tQ(L(320, [bD.pf.a8T(data.a0S, .01, 0)])) : ((aXj = new uU({
					value: data.aXk,
					eU: -1
				})).e.readOnly = !0, aXj.e.type = "password", xW.tZ(aXj), xW.tZ(new us([new x(L(249), function(e) {
					return e.textContent === L(249) ? (e.textContent = L(250), aXj.e.type = "text") : (e.textContent = L(249), aXj.e.type = "password"), !0
				}).button, new x(L(246), function(e) {
					return bD.th.a7a(aXj.e), bD.th.ys(e), !0
				}).button]))), xW.tU(L(xL ? 319 : 321)).style.marginTop = "0.75em", new uU({
					value: "",
					eU: -1
				}, 0, 0)),
				aXn = (aXl.e.type = "email", aXl.e.autocomplete = "email", aXl.e.name = "email", aXl.e.inputMode = "email", aXl.e.spellcheck = !1, xW.tZ(aXl), xW.tZ(new us([new x(L(322), function(e) {
					return b1.aXH.aXm({
						action: 3,
						pb: aXl.e.value.trim().substring(0, 63)
					}), bD.th.ys(e), !0
				}).button])), xL && xW.tQ(L(323)), xW.tU(L(324)).style.marginTop = "0.75em", new uU({
					value: "",
					eU: -1
				}, 1));
			xW.tZ(aXn), xW.tZ(new us([new x(L(325), function() {
				b1.aXH.aXI({
					action: 4,
					pj: "",
					value: Math.floor(+aXn.e.value)
				}), u.v(8, u.a5T().a5U, new vr(18))
			}).button])), tc.push(xW)
		}
	}
	this.show = function() {
		data.aWk && bL.aY5("account", data.pj), aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a5O()
	}), new x(data.aWk ? "🔄 " + L(212) : L(213), function() {
		u.v(8, data.aWk ? u.a5T().a5U : void 0, new vr(25, {
			action: 0,
			pj: data.pj,
			vp: data.vp
		}))
	}, 0, 0, 1)]), aWj = new ta(aWi.z4, function() {
		var tc = [];
		aWm(tc, 1), tc.push(function() {
				var xW = new tM;
				xW.tP(L(295)), data.aXc && (xW.tU("✅ " + L(296)).style.marginBottom = "0.75em");
				var a50 = data.aXd;
				a50 < 1 ? (xW.tU(L(297)), 0 === data.aXe ? xW.tQ(L(298)) : 1 === data.aXe ? xW.tQ(L(299)) : 2 === data.aXe ? xW.tQ(L(300)) : 3 === data.aXe ? xW.tQ(L(301)) : 4 === data.aXe ? xW.tQ(L(302)) : 5 === data.aXe ? xW.tQ(L(
					303)) : 6 === data.aXe ? xW.tQ(L(304)) : xW.tQ(L(305))) : (xW.tU(L(306)), a50 = a50 < 2 ? L(307) : a50 < 61 ? 2 === a50 ? L(308) : L(309, [a50 - 1]) : a50 < 84 ? 61 === a50 ? L(310) : L(311, [a50 - 60]) : a50 <
					255 ? 84 === a50 ? L(312) : L(313, [a50 - 83]) : L(314), xW.tQ(a50));
				{
					var tR, aXE;
					xW.tZ(new vI), data.aWk && (tR = xW.tQ(), xW.tZ(new us([new x(bm.zc.y8(data.pj) ? L(165) : L(166), function(e) {
						return bm.zc.zp(data.pj) ? (e.textContent = L(165), aXE(1)) : (e.textContent = L(166), aXE(0)), !0
					}).button])), aXE = function(gD) {
						tR.textContent = gD ? L(315) : ""
					}, bm.zc.y8(data.pj) && aXE(1), xW.tZ(new vI))
				}
				var qJ, uT = new uU({
					value: data.username,
					eU: -1
				});
				uT.e.readOnly = !0, xW.tZ(uT), xW.tZ(new us([new x(L(246), function(e) {
					return bD.th.a7a(uT.e), bD.th.ys(e), !0
				}).button])), data.aWk || xW.tQ(L(316));
				(data.aXf || data.aXg) && (xW.tZ(new vI), xW.tQ(L(317)), data.aXf && ((qJ = xW.tQ("• Muted")).style.color = "orange", qJ.style.marginTop = "0.5em"), data.aXg) && ((qJ = xW.tQ("• Redacted")).style.color = "orange", qJ.style
					.marginTop = "0.5em");
				data.aWk && (xW.tZ(new vI), xW.tU(b1.z.aXA("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xW) {
					function click(e, aLp) {
						return bs.aLq(data.pj, aLp) && (bD.th.ys(e), pC[0].u2(1), pC[1].u2(1)), !0
					}
					var color = bs.aLo(data.pj) ? 1 : 0,
						pC = [];
					pC.push(new x(L(282), function(e) {
						return click(e, 1)
					}, color || bE.qv)), pC.push(new x(L(283), function(e) {
						return click(e, 0)
					}, color || bE.rA)), xW.tZ(new us([pC[0].button])), xW.tZ(new us([pC[1].button]))
				}(xW));
				return xW
			}()),
			function(tc) {
				var xW, uT, k, aXF, aLn, aXG;
				data.aWk && data.aXM && ((xW = new tM).tP(L(241)), xW.tQ(L(235)), (uT = new uU({
					value: data.aXM,
					eU: -1
				})).e.readOnly = !0, xW.tZ(uT), k = !1, aXF = new x(L(242), function(e) {
					return k && b1.z.er(0) && (bD.th.ys(e), aXG(), b1.aXH.aXN({
						action: 9,
						pj: data.pj
					})), !0
				}, 1), aLn = new x(L(233), function(e) {
					if (e.textContent === L(233)) {
						if (100 * data.aXM < data.a0S) return new aUW(L(243)), !0;
						k = !0, e.textContent = L(171), aXF.u2(0), aXF.button.style.color = bE.rZ
					} else aXG();
					return !0
				}), xW.tZ(new us([aLn.button])), aXG = function() {
					k = !1, aLn.button.textContent = L(233), aXF.u2(1), aXF.button.style.color = bE.qT
				}, xW.tZ(new us([aXF.button])), xW.tQ(L(244)), tc.push(xW))
			}(tc),
			function(tc) {
				var xW, tR, aHo, aXp, aXF, aLn, aXG;
				data.aWk || ((xW = new tM).tP(L(326)), (tR = xW.tQ(data.aXo.length + " / 160")).style.textAlign = "center", aHo = !0, (aXp = new zM(0, 1, function(e) {
					e = e.target.value.length;
					tR.textContent = e + " / 160", 160 < e ? aHo && (aHo = !1, aLn.u2(1)) : aHo || (aHo = !0, aLn.u2(0))
				})).e.rows = 6, aXp.e.style.fontSize = "1em", aXp.zT(data.aXo), xW.tZ(aXp), 0 !== data.aXq ? (aLn = new x(L(327), function() {
					if (!aHo) return !0;
					u.v(8, u.a5T().a5U, new vr(29, {
						action: 1,
						pb: aXp.zU().substring(0, 160)
					}))
				}, 0, 0, 1), xW.tZ(new us([aLn.button])), xW.tZ(new us([new x(1 === data.aXq ? L(328) : L(329), function() {
					u.v(8, u.a5T().a5U, new vr(29, {
						action: 0,
						pb: ""
					}))
				}, 0, 0, 1).button])), xW.tQ(1 === data.aXq ? L(330, [data.aXr - 1]) : L(331, [data.aXr - 1])), xW.tQ(L(332, [data.aXs]))) : (aXF = new x(L(242), function() {
					if (!aXp.e.readOnly) return !0;
					u.v(8, u.a5T().a5U, new vr(29, {
						action: 1,
						pb: aXp.zU().substring(0, 160)
					}))
				}, 1), aLn = new x(L(233), function(e) {
					if (e.textContent === L(233)) {
						if (!aHo) return !0;
						e.textContent = L(171), aXp.e.readOnly = !0, aXF.u2(0), aXF.button.style.color = bE.rZ
					} else aXG();
					return !0
				}), xW.tZ(new us([aLn.button])), xW.tQ(L(332, [data.aXs])), aXG = function() {
					aLn.button.textContent = L(233), aXp.e.readOnly = !1, aXF.u2(1), aXF.button.style.color = bE.qT
				}, xW.tZ(new us([aXF.button]))), tc.push(xW))
			}(tc),
			function(tc) {
				var xW;
				data.aWk && 0 !== data.aXq && ((xW = new tM).tP(L(333)), xW.tS(data.aXo), xW.tZ(new us([new x(L(334, 0, "Report"), function(e) {
					return b1.z.er(0) && (bD.th.ys(e), b1.aXH.aXN({
						action: 5,
						pj: data.pj
					})), !0
				}, 0, 0, 1).button])), tc.push(xW))
			}(tc), tc.push(function() {
				var xW = new tM,
					aXB = (xW.tP(L(214)), xW.tU(b1.z.aXA("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(215), L(216), L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227), L(228)]),
					eT = data.aXC;
				return xW.tU(L(229) + bD.pf.a8T(data.a0S, .01, 2) + "<br>" + L(230) + (eT + 1) + " / " + data.a0R + "<br>" + L(231) + aXB[function(eT, a0S) {
					if (eT < 10) return 0;
					if (eT < 30) return 1;
					if (eT < 60) return 2;
					if (3e4 <= (a0S = bO.gC(a0S, 100))) return 3;
					if (12e3 <= a0S) return 4;
					if (7e3 <= a0S) return 5;
					if (3e3 <= a0S) return 6;
					if (1e3 <= a0S) return 7;
					if (500 <= a0S) return 8;
					if (200 <= a0S) return 9;
					if (70 <= a0S) return 10;
					if (20 <= a0S) return 11;
					if (3 <= a0S) return 12;
					return 13
				}(eT, data.a0S)]), xW
			}()), data.aWk && tc.push(function() {
				var xW = new tM,
					uT = (xW.tP(L(232)), xW.tU(b1.z.aXA("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uU({
						value: bm.buffer.data[147].value,
						eU: -1
					}, 1, void 0, function(e) {
						bm.s0.q6(147, aXE(e.target.value))
					})),
					aXF = (xW.tZ(uT), new x(L(21), function(e) {
						var gD;
						return uT.e.readOnly && b1.z.er(0) && (gD = parseInt(bm.buffer.data[147].value, 10), u.aW9.send(gD, data.pj, function() {
							bD.th.ys(e), aXG(), b1.aXH.aXI({
								action: 0,
								pj: data.pj,
								value: gD
							})
						})), !0
					}, 1)),
					aLn = new x(L(233), function(e) {
						return e.textContent === L(233) ? (e.textContent = L(171), uT.e.readOnly = !0, aXF.u2(0), aXF.button.style.color = bE.rZ, bm.s0.q6(147, uT.e.value), aXE(bm.buffer.data[147].value)) : aXG(), !0
					}),
					tR = (xW.tZ(new us([aLn.button])), xW.tQ()),
					aXE = function(gD) {
						return tR.innerHTML = u.z.aXJ(gD, bm.buffer.data[105].value, data.pj), gD
					},
					aXG = function() {
						aLn.button.textContent = L(233), uT.e.readOnly = !1, aXF.u2(1), aXF.button.style.color = bE.qT
					};
				return aXE(bm.buffer.data[147].value), xW.tZ(new us([aXF.button])), xW
			}());
		tc.push(function() {
			var xW = new tM,
				uT = (xW.tP(L(245)), new uU({
					value: data.pj,
					eU: -1
				})),
				aXK = (uT.e.readOnly = !0, xW.tZ(uT), xW.tZ(new us([new x(L(246), function(e) {
					return bD.th.a7a(uT.e), bD.th.ys(e), !0
				}).button])), xW.tZ(new vI), new uU({
					value: data.pj,
					eU: -1
				}));
			return xW.tZ(aXK), xW.tZ(new us([new x(L(247), function(e) {
				u.v(8, u.a5T().a5U, new vr(25, {
					action: 0,
					pj: aXK.e.value,
					vp: 0
				}))
			}).button])), xW
		}()), data.aWk || (tc.push(function() {
			var xW = new tM,
				aXO = (xW.tP(L(248)), new uU(bm.buffer.data[106]));
			return aXO.e.readOnly = !0, aXO.e.type = "password", xW.tZ(aXO), xW.tZ(new us([new x(L(249), function(e) {
				return e.textContent === L(249) ? (e.textContent = L(250), aXO.e.type = "text") : (e.textContent = L(249), aXO.e.type = "password"), !0
			}).button, new x(L(246), function(e) {
				return bD.th.a7a(aXO.e), bD.th.ys(e), !0
			}).button])), xW.tZ(new us([new x(L(251), function() {
				u.v(8, u.a5T().a5U, new vr(15))
			}).button])), xW.tP(L(252), "0.8em"), xW.tQ(L(253)), xW.tQ(L(254)), xW.tQ(L(255)), xW
		}()), tc.push(function() {
			var xW = new tM;
			return xW.tP(L(256)), xW.tZ(new us([new x(L(257), function() {
				u.v(6, u.a5T().a5U)
			}).button])), xW.tZ(new us([new x(L(258), function() {
				bm.s0.q6(105, ""), u.v(8, u.a5T().a5U, new vr(18))
			}).button])), xW.tZ(new us([new x(L(259) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(260), L(261), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a9T(7).a5U)
				})]))
			}, bE.rA).button])), xW
		}()), tc.push(function() {
			function aXQ(eU) {
				aXP[0].u2(0 === eU ? bE.qf : bE.qq), aXP[1].u2(0 === eU ? bE.qf : bE.rA), aXP[2].u2(eU === tX.tY.length - 1 || eU < 5 ? bE.qf : bE.rA)
			}
			var tX, aXP, xW = new tM;
			xW.tP(L(266)), xW.tQ(L(267)), bm.z.a0A();
			return aXP = [new x(L(268), function() {
				var eU = Math.min(bm.buffer.data[117].value, tX.tY.length - 1);
				eU < 1 || (eU = bm.z.a0F(eU)) && (bm.s0.q6(105, eU.pj), bm.s0.q6(106, eU.password), u.v(8, u.a5T().a5U, new vr(18)))
			}, bE.qf, 1), new x(L(264), function() {
				var eU = Math.min(bm.buffer.data[117].value, tX.tY.length - 1);
				if (!(eU < 1)) {
					tX.tY[eU].remove(), tX.tY.splice(eU, 1);
					for (var aC = eU; aC < tX.tY.length; aC++) tX.tY[aC].name = "" + aC;
					bm.z.a0D(eU), eU = bm.buffer.data[117].value, tX.tY[eU].textContent = tX.tY[eU].textContent.replace("⚪", "🟢"), aXQ(eU)
				}
			}, bE.qf, 1), new x(L(265), function() {
				var eU = Math.min(bm.buffer.data[117].value, tX.tY.length - 1);
				if (eU !== tX.tY.length - 1)
					if (aX7(aXP[2], function() {
							var fl = tX.tY.length;
							aXQ(Math.min(bm.buffer.data[117].value, fl - 1))
						})) {
						for (var aC = tX.tY.length - 1; eU < aC; aC--) tX.tY[aC].remove(), tX.tY.splice(aC, 1), bm.z.a0D(aC);
						aXQ(eU)
					}
			}, bE.qf, 1)], tX = new yv(bm.buffer.data[117], aXQ), aXQ(0), tX.tY[0].style.marginTop = "0.5em", xW.tW(tX), xW.tZ(new us([aXP[0].button])), xW.tZ(new us([aXP[1].button])), xW.tZ(new us([aXP[2].button])), xW
		}()));
		return tc.push(function() {
				var xW = new tM,
					pb = (xW.tP(L(278)), L(279, [(data.aXS / 1e3).toFixed(3)]) + "<br>" + L(280, [data.aXT]));
				data.aXU && (pb += "<br>" + L(281, [(data.aXV / 1e3).toFixed(3)]));
				return xW.tU(pb), xW
			}()), tc.push(function() {
				var xW = new tM,
					aXB = (xW.tP(L(272)), [L(273), L(274), L(275), L(276)]),
					eT = data.aXR;
				return xW.tU(L(277) + (data.a4j / 100).toFixed(2) + "<br>" + L(230) + (eT + 1) + " / " + data.a0R + "<br>" + L(231) + aXB[eT < 10 ? 0 : eT < 50 ? 1 : eT < 200 ? 2 : 3]), xW
			}()), tc.push(function() {
				var xW = new tM;
				return xW.tP(L(269)), xW.tU(L(270) + bD.pf.a8T(data.a0O, .1, 1) + "<br>" + L(230) + (data.a0P + 1) + " / " + data.a0R + "<br>" + L(271) + data.a0Q), xW
			}()),
			function(tc) {
				var xW = new tM,
					aXt = data.a0V,
					aXu = (xW.tP(L(335)), xW.tU(L(336, [data.a0T.length ? "[" + data.a0T + "]" : "-"])), xW.tU(L(337, [bD.pf.a8T(aXt, .01, 2)])), xW.tU(L(338, [data.a0X + 1 + " / " + data.a0R])), data.a0Y),
					aXv = (xW.tU(L(339, [bD.pf.a8T(aXu, .1, 1)])), data.a0a);
				xW.tU(L(340, [aXv])), xW.tU(L(341, [bD.pf.a8T(aXu / Math.max(aXv, 1), .1, 2)])), aXt = data.a0W, xW.tP(L(342), "0.8em"), xW.tU(L(336, [data.a0U.length ? "[" + data.a0U + "]" : "-"])), xW.tU(L(337, [bD.pf.a8T(aXt, .01, 2)])),
					aXu = data.a0Z, xW.tU(L(339, [bD.pf.a8T(aXu, .1, 1)])), aXv = data.a0b, xW.tU(L(340, [aXv])), xW.tU(L(341, [bD.pf.a8T(aXu / Math.max(aXv, 1), .1, 2)])), xW.tU(b1.z.aXA("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tc.push(xW)
			}(tc),
			function(tc) {
				var xW = new tM;
				xW.tP(L(343)), xW.tU(L(277) + (data.aXw / 10).toFixed(1) + "<br>" + L(231) + (data.aXx.length ? L(344, [data.aXx]) : L(345))), data.aWk && xW.tZ(new us([new x(L(293), function(e) {
					return b1.z.er(0) && (bD.th.ys(e), b1.aXH.aXN({
						action: 4,
						pj: data.pj
					})), !0
				}, 0, 0, 1).button]));
				xW.tU(b1.z.aXA("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tc.push(xW)
			}(tc), tc.push(function() {
				var xW = new tM;
				{
					var uT, aLn, aXb, tR, aXE, aXG;
					xW.tP(L(291)), xW.tU(L(292) + data.aXZ + "<br>" + L(230) + (data.aXa + 1) + " / " + data.a0R + "<br>" + L(231) + br.eW(data.aXa)), data.aWk && ((uT = new uU({
						value: bm.buffer.data[157].value,
						eU: -1
					}, 1, void 0, function(e) {
						bm.s0.q6(157, aXE(e.target.value))
					})).e.style.marginTop = "0.6em", xW.tZ(uT), aLn = new x(L(233), function(e) {
						return e.textContent === L(233) ? (e.textContent = L(171), uT.e.readOnly = !0, aXb[0].u2(0), aXb[0].button.style.color = bE.rZ, aXE(bm.buffer.data[157].value)) : aXG(), !0
					}), xW.tZ(new us([aLn.button])), aXb = [new x(L(293), function(e) {
						return uT.e.readOnly && b1.z.er(0) && (bD.th.ys(e), aXG(), b1.aXH.aXI({
							action: 1,
							pj: data.pj,
							value: bO.j0(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tR = xW.tQ(), aXE = function(gD) {
						return gD = bD.h7.a86(gD, 2, 3e4), tR.textContent = L(294, [gD - 1, gD, bm.buffer.data[105].value]), gD
					}, xW.tZ(new us([aXb[0].button])), aXG = function() {
						aLn.button.textContent = L(233), uT.e.readOnly = !1, aXb[0].u2(1), aXb[0].button.style.color = bE.qT
					}, aXE(bm.buffer.data[157].value))
				}
				return xW
			}()),
			function(tc) {
				var xW, a7Z;
				data.aWk && !data.aXy || (0 === a1.id || data.aWk || data.aXy) && ((xW = new tM).tP("Patreon"), !data.aWk && data.aXz ? xW.tZ(new us([new x(L(249), function() {
					b1.aXH.aXN({
						action: 7,
						pj: data.pj
					}), data.aXz = 0, u.v(7)
				}).button])) : data.aXy ? (xW.tU(L(346, [(data.aY0 / 100).toFixed(2)]) + "<br>" + L(347, [1 + data.aY1 + " / " + data.aY2]) + "<br>" + L(348, [data.aY3 ? L(349) : L(350)])), data.aWk || xW.tZ(new us([new x(L(351),
					function() {
						b1.aXH.aXN({
							action: 8,
							pj: data.pj
						}), data.aXy = 0, bm.s0.q6(160, 0), u.v(7)
					}).button]))) : (xW.tU(L(352), "0.75em").style.marginBottom = "0.3em", xW.tU("  • " + L(353), "0.75em").style.whiteSpace = "pre", xW.tU("  • " + L(354), "0.75em").style.whiteSpace = "pre", xW.tU("  • " + L(355),
						"0.75em").style.whiteSpace = "pre", xW.tU(L(356), "0.75em").style.marginTop = "1.0em", xW.tU(L(357), "0.75em").style.marginTop = "1.0em", xW.tU("<a href='" + bN.aY4 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7Z = "https://www.patreon.com/oauth2/authorize?state=" + data.pj +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4f() + "/", xW.tU(L(358), "0.75em").style.marginTop = "1.0em", xW.tU("<a href='" +
						a7Z + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aWk || (xW.tZ(new vI), xW.tZ(new us([new x(L(250), function() {
						b1.aXH.aXN({
							action: 6,
							pj: data.pj
						}), data.aXz = 1, u.v(7)
					}).button])), xW.tU(L(359), "0.75em").style.marginTop = "0.75em")), tc.push(xW))
			}(tc), tc.push(function() {
				var xW = new tM,
					aXB = (xW.tP(L(284)), [L(285), L(286), L(287), L(288), "Scout", L(289)]),
					eT = data.aXX;
				return xW.tU(L(290) + (data.aXY / 100).toFixed(2) + "<br>" + L(230) + (eT + 1) + " / " + data.a0R + "<br>" + L(231) + aXB[eT < 3 ? 0 : eT < 20 ? 1 : eT < 100 ? 2 : eT < 500 ? 3 : eT < 2e3 ? 4 : 5]), xW.tU(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xW
			}()),
			function(tc) {
				var xW, uT, aXK, aXF, aLn, aXG;
				data.aWk || ((xW = new tM).tP(L(234)), xW.tQ(L(235)), uT = new uU({
					value: bm.buffer.data[184].value,
					eU: -1
				}, 1, void 0, function(e) {
					bm.s0.q6(184, e.target.value)
				}), xW.tZ(uT), xW.tQ(L(236)), aXK = new uU({
					value: bm.buffer.data[185].value,
					eU: -1
				}, 0, void 0, function(e) {
					bm.s0.q6(185, e.target.value)
				}), xW.tZ(aXK), aXF = new x(L(237), function(e) {
					var send;
					return uT.e.readOnly && b1.z.er(0) && (send = function() {
						bD.th.ys(e), aXG(), b1.aXH.aXI({
							action: 5,
							pj: bm.buffer.data[185].value,
							value: bO.j0(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vq, new w(L(239), L(240), !1, [new x("⬅️ " + L(49), function() {
						u.a5O()
					}), new x("✅ OK", function() {
						u.a5O(), send()
					})]))), !0
				}, 1), aLn = new x(L(233), function(e) {
					if (e.textContent === L(233)) {
						var g5 = bJ.fC;
						if (g5.fD(aXK.e.value, 5) === g5.fD(data.pj, 5)) return new aUW(L(238)), !0;
						e.textContent = L(171), uT.e.readOnly = !0, aXK.e.readOnly = !0, aXF.u2(0), aXF.button.style.color = bE.rZ, bm.s0.q6(184, uT.e.value)
					} else aXG();
					return !0
				}), xW.tZ(new us([aLn.button])), aXG = function() {
					aLn.button.textContent = L(233), uT.e.readOnly = !1, aXK.e.readOnly = !1, aXF.u2(1), aXF.button.style.color = bE.qT
				}, xW.tZ(new us([aXF.button])), tc.push(xW))
			}(tc),
			function(tc) {
				var xW, tX, aXP, eU, aXQ;
				data.aWk || bm.zc.get().length && ((xW = new tM).tP(L(262)), eU = 0, aXQ = function() {
					var aHM = bm.zc.get().length;
					aXP[0].u2(eU === aHM ? bE.qf : bE.qq), aXP[1].u2(eU === aHM ? bE.qf : bE.rA), aXP[2].u2(eU === aHM || aHM - 1 <= eU || eU < 5 ? bE.qf : bE.rA)
				}, aXP = [new x(L(263), function() {
					u.v(8, void 0, new vr(25, {
						action: 0,
						pj: bm.zc.get()[eU],
						vp: 0
					}))
				}, bE.qf, 1), new x(L(264), function() {
					bm.zc.zr(eU), tX.tY[eU].remove(), tX.tY.splice(eU, 1);
					for (var aC = eU; aC < tX.tY.length; aC++) tX.tY[aC].name = "" + aC;
					bm.zc.get().length && (eU = Math.max(eU - 1, 0), tX.tY[eU].textContent = tX.tY[eU].textContent.replace("⚪", "🟢")), aXQ()
				}, bE.qf, 1), new x(L(265), function() {
					if (aX7(aXP[2], aXQ)) {
						for (var ij = tX.tY.length - 1; eU < ij; ij--) bm.zc.zr(ij), tX.tY[ij].remove(), tX.tY.splice(ij, 1);
						aXQ()
					}
				}, bE.qf, 1)], aXQ(), (tX = new yv(bm.zc.zo(), function(aC) {
					eU = aC, aXQ()
				})).tY[0].style.marginTop = "0.5em", xW.tW(tX), xW.tZ(new us([aXP[0].button])), xW.tZ(new us([aXP[1].button])), xW.tZ(new us([aXP[2].button])), tc.push(xW))
			}(tc), aWm(tc, 0), tc
	}())
}

function aWV() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.aIncomeType ? (bD.tp.a6w(aY8.zU(), aE.data.aIncomeData, 255), bD.tp.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(360), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(362), L(363), L(364)],
			value: aE.data.aIncomeType
		}, function(eU) {
			aYB(), 2 !== eU || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fi)), aE.data.aIncomeType = eU, u.v(22)
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW;
		1 === aE.data.aIncomeType && ((xW = new tM).tP("Value"), xW.tZ(new uU({
			eU: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.j0(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tc.push(xW))
	}(tc), function(tc) {
		var xW;
		2 === aE.data.aIncomeType && ((xW = new tM).tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.aIncomeData, 4)), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWY() {
	var aY6, aY7, aY8;

	function aY9() {
		aYB(), 3 !== aE.data.botDifficultyType || bD.tp.a6k(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		3 === aE.data.botDifficultyType && bD.tp.a6w(aY8.zU(), aE.data.botDifficultyData, aF.lK.length - 1)
	}

	function aYG(tc, eU) {
		var xW = new tM,
			value = (xW.tP(eU < 0 ? L(76) : L(75) + " " + bj.a4a[eU % 9]), 0 <= eU && (xW.tU(L(367) + ": " + aE.data.teamPlayerCount[eU]).style.marginBottom = "1em"), eU < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eU]);
		xW.tW(new yv({
			vZ: aF.lK,
			value: value
		}, function(ij) {
			eU < 0 ? aE.data.botDifficultyValue = ij : aE.data.botDifficultyTeam[eU] = ij
		})), tc.push(xW)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(76), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, function() {
		var tc = [];
		if (function(tc) {
				var xW = new tM,
					vZ = (xW.tP(L(361)), [L(363), L(365), L(366), L(364)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vZ.splice(2, 1));
				xW.tW(new yv({
					vZ: vZ,
					value: value
				}, function(eU) {
					aYB(), aE.data.botDifficultyType = eU, 0 === aE.data.gameMode && 2 === eU && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fi)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tc.push(xW)
			}(tc), 0 === aE.data.botDifficultyType) aYG(tc, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aYG(tc, aC);
		else 3 === aE.data.botDifficultyType && ! function(tc) {
			var xW = new tM;
			xW.tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.botDifficultyData, 8)), xW.tZ(aY8), tc.push(xW)
		}(tc);
		return tc
	}())
}

function aYH(data) {
	var aWi, aYI, aYJ, aYK, aYL, aYM, aYN, colors, aYO, aYP, aYQ = 0,
		aYR = 0,
		aYS = !1,
		aYT = !1,
		aYU = [1, 5, 60, 240, 1440, 10080, 43200];

	function aYy(mO, mP) {
		! function(mO, mP) {
			return aYI < mO && mO < aYI + aYK && aYJ < mP && mP < aYJ + aYL
		}(aYQ = mO, aYR = mP) ? (aYS && (bi.e2 = !0), aYS = !1) : (aYS = !0, bi.e2 = !0)
	}
	this.show = function() {
		aYT = bm.buffer.data[127].value, aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize();
		var ev = i.l,
			zC = aWi.z9(),
			aYd = ev * zC.zB,
			ev = ev * zC.uj;
		aYM = bD.th.wD(.06), aYN = bD.th.wD(.04), aYI = bD.th.wD(.06), aYJ = ev + aYM, aYK = i.j - aYI - aYN, aYL = aYd + ev - aYJ - aYN
	}, this.zD = function() {
		aWi.zD(),
			function() {
				var aC, aYa, hE, fs, g4, h = data.data,
					aYh = 1,
					aYi = .125,
					aYj = aYT ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aYa = h[aC].aYa, hE = aYa.length, aYh = Math.max(hE, aYh), g4 = 0; g4 < hE; g4++) aYi = Math.max(aYa[g4], aYi), aYj = Math.min(aYa[g4], aYj);
				var oD = aYJ + aYL,
					a20 = aYL / (aYi - aYj),
					a1z = 1 / (aYh - 1);
				for (zE.lineWidth = bf.a34, aC = 0; aC < h.length; aC++) {
					for (aYa = h[aC].aYa, hE = aYa.length, fs = aYI, zE.beginPath(), zE.moveTo(fs + aYK, oD - a20 * (aYa[hE - 1] - aYj)), g4 = hE - 2; 0 <= g4; g4--) zE.lineTo(fs + a1z * g4 * aYK, oD - a20 * (aYa[g4] - aYj));
					zE.strokeStyle = colors[aC], zE.stroke()
				}(function(aYj, aYi, oD, a20) {
					zE.font = bD.th.vG(0, .25 * aYI), bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 2), zE.fillStyle = colors[0];
					for (var fs = .92 * aYI, aC = 0; aC < 3; aC++) {
						var gD = aYj + aC * (aYi - aYj) / 2;
						zE.fillText((gD / 1e3).toFixed(3), fs, oD - a20 * (gD - aYj))
					}
				})(aYj, aYi, oD, a20),
				function(aYh) {
					var fu = aYJ + aYL + .15 * aYN;
					zE.font = bD.th.vG(0, Math.min(.4 * aYN, .028 * i.j)), bD.th.textBaseline(zE, 0), bD.th.textAlign(zE, 2), zE.fillStyle = colors[0], zE.fillText(bD.a6a.a7R(aYO), aYI + aYK, fu), bD.th.textAlign(zE, 0), zE.fillText(bD.a6a.a7R(
						new Date(aYP.getTime() - 6e4 * (aYh - 1) * aYU[data.aYZ])), aYI, fu)
				}(aYh),
				function(aYh, aYj, aYi) {
					if (aYS && !(aYh < 2)) {
						for (var aDy, eU = (aYQ - aYI) / aYK * (aYh - 1), aYm = Math.floor(eU), aYn = Math.floor(1 + eU), aYo = eU - aYm, aYp = 1e5, aYq = -1, aYr = -1, aYs = aYi - (aYi - aYj) * (aYR - aYJ) / aYL, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aHz, aYa = h[aC].aYa;
							aYa.length <= aYn || (aYa = aYa[aYm] + aYo * (aYa[aYn] - aYa[aYm]), (aHz = Math.abs(aYs - aYa)) < aYp && (aYp = aHz, aYq = aC, aYr = aYa))
						} - 1 !== aYq && (aYi = aYJ + aYL - (aYr - aYj) / (aYi - aYj) * aYL, zE.lineWidth = .5 * bf.a34, zE.strokeStyle = colors[aYq], zE.beginPath(), zE.moveTo(aYI, aYi), zE.lineTo(aYQ, aYi), zE.lineTo(aYQ, aYJ + aYL), zE
							.stroke(), zE.beginPath(), zE.arc(aYQ, aYi, .1 * aYI, 0, 2 * Math.PI), zE.fillStyle = colors[aYq], zE.fill(), aYj = aYJ + aYL + .15 * aYN, bD.th.textAlign(zE, 1), aDy = aYh - 2 < eU ? (aDy = aYP.getTime() - 6e4 *
								aYU[data.aYZ], new Date(aDy + (eU - (aYh - 2)) * (aYO.getTime() - aDy))) : new Date(aYP.getTime() - 6e4 * (aYh - eU - 1) * aYU[data.aYZ]), aYh = bD.a6a.a7R(aDy), eU = bD.th.measureText(aYh), aDy = bO.j0(aYQ,
								aYI + .5 * eU, aYI + aYK - .5 * eU), zE.fillStyle = bD.color.qL(70, 50, 20), zE.fillRect(aDy - .52 * eU, aYJ + aYL, 1.04 * eU, .55 * aYN), zE.fillStyle = colors[0], zE.fillText(aYh, aDy, aYj), zE.font = bD.th
							.vG(0, .25 * aYI), bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 2), aDy = .92 * aYI, aYh = (aYr / 1e3).toFixed(3), eU = bD.th.measureText(aYh), aYj = aDy - 1.04 * eU, zE.fillStyle = bD.color.qL(70, 50, 20), zE
							.fillRect(aYj, aYi - .1625 * aYI, aYI - aYj, .275 * aYI), zE.fillStyle = colors[aYq], zE.fillText(aYh, aDy, aYi))
					}
				}(aYh, aYj, aYi)
			}(), zE.lineWidth = bf.a34, zE.strokeStyle = bE.qT, zE.beginPath(), zE.moveTo(aYI, aYJ), zE.lineTo(aYI, aYJ + aYL), zE.lineTo(aYI + aYK, aYJ + aYL), zE.stroke();
		var aC, fontSize = .5 * aYM,
			h = (zE.font = bD.th.vG(0, fontSize), bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 0), data.data),
			fl = h.length,
			fu = aYJ - .5 * aYM,
			pb = "";
		for (aC = 0; aC < fl; aC++) pb += h[aC].name + "  ";
		pb = pb.trim();
		var aYv = bD.th.measureText(pb),
			fs = .5 * (i.j - aYv);
		for (aYv > i.j && (fs = 0, zE.font = bD.th.vG(0, i.j / aYv * fontSize)), aC = 0; aC < fl; aC++) zE.fillStyle = colors[aC], zE.fillText(h[aC].name, fs, fu), fs += bD.th.measureText(h[aC].name + "  ")
	}, this.hz = function(mO, mP) {
		aYy(mO, mP)
	}, this.a5m = function(mO, mP) {
		aYy(mO, mP)
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	};
	var aC, em, a7P, ij, fo = data.data,
		fl = fo.length,
		max = 1;
	for (aC = 0; aC < fl; aC++) max = Math.max(max, fo[aC].aYa.length);
	for (aC = 0; aC < fl; aC++)
		for (; fo[aC].aYa.length < max;) fo[aC].aYa.unshift(0);
	em = new Date, a7P = 6e4 * em.getTimezoneOffset(), ij = em.getTime() - a7P, aYO = new Date(ij), 6 === data.aYZ ? function(em, a7P) {
		var aYc = em.getUTCFullYear(),
			em = em.getUTCMonth() + 1;
		aYP = em < 12 ? new Date(Date.UTC(aYc, em) - a7P) : new Date(Date.UTC(aYc + 1, 0) - a7P)
	}(em, a7P) : (a7P = 6e4 * aYU[data.aYZ], aYP = data.aYZ <= 4 ? new Date(ij + a7P - em.getTime() % a7P) : new Date(ij + a7P - (em.getTime() + 2592e5) % a7P)), ij = bD.color, colors = [bE.qT, ij.qL(255, 0, 0), ij.qL(0, 200, 0), ij.qL(80, 80,
		255), ij.qL(255, 255, 0), ij.qL(255, 0, 255), ij.qL(0, 255, 255), ij.qL(255, 140, 0), ij.qL(128, 128, 128), ij.qL(0, 255, 140)], aWi = new yz(L(368) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aYZ] + ", " + bD.a6a.a7O(aYO), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(369), function() {
			u.v(14)
		})
	], !1)
}

function aWN() {
	var aWi, aWj, tc, aYz = -1;
	this.show = function() {
		aWi.show(), this.resize(), aYz = bm.buffer.data[125].value
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(370), [new x("⬅️ " + L(49), function() {
		aYz !== bm.buffer.data[125].value ? u.z.aZ0() : u.aWg(13)
	})]), aWj = new ta(aWi.z4, ((tc = []).push(function() {
		var xW = new tM,
			aLn = (xW.tP(L(371)), xW.tQ(L(372)), new x(L(373), function() {
				bm.s0.q6(130, 0), u.z.aZ0()
			}, 0, 0, 1)),
			uT = new uU(bm.buffer.data[126], 0, function() {
				aLn.button.click()
			});
		return xW.tZ(uT), uT.e.placeholder = "a,b,c", uT.e.style.marginTop = "0.5em", xW.tZ(new us([aLn.button])), xW
	}()), tc.push(function() {
		var xW = new tM,
			aLn = new x(L(373), function() {
				bm.s0.q6(130, 1), u.z.aZ0()
			}, 0, 0, 1),
			aZ5 = new uU(bm.buffer.data[129], 1, function() {
				aZ5.e.focus()
			}),
			aZ6 = new uU(bm.buffer.data[128], 1, function() {
				aLn.button.click()
			});
		return xW.tP(L(374)), xW.tZ(aZ6), aZ6.e.style.marginBottom = "0.5em", xW.tP(L(375)), xW.tZ(aZ5), xW.tZ(new us([aLn.button])), xW
	}()), tc.push(function() {
		var xW = new tM;
		return xW.tP(L(376)), bm.buffer.data[125].vZ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xW.tW(new yv(bm.buffer.data[125])), xW
	}()), tc.push(function() {
		var xW = new tM;
		return xW.tP(L(377)), xW.tZ(new uo(bm.buffer.data[127], L(378))), xW
	}()), tc))
}

function aWM() {
	var aWi, aZ7, aYK, aZ8, aZ9, aZA, colors = [0, 0, 0],
		aZB = -1;

	function aZE(aC) {
		var aZF = aZ7.fu + aC * (bf.gap + aZA);
		zE.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", zE.fillRect(aZ8, aZF, colors[aC] * aZ9, aZA), zE.strokeStyle = bE.qT, zE.strokeRect(aZ8, aZF, aZ9,
			aZA), zE.fillStyle = bE.qT, zE.font = bD.th.vG(0, .32 * aZA), bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 0), zE.fillText(L(0 === aC ? 381 : 1 === aC ? 382 : 383) + aZC(aC), aZ8 + bf.gap, aZF + .53 * aZA)
	}

	function aZC(aC, aZG) {
		return aZG = aZG || 256, bO.j0(Math.floor(aZG * colors[aC]), 0, aZG - 1)
	}

	function a6G(mO, mP) {
		return !(mO < aZ8 || mP < aZ7.fu || mO > aZ7.fs + aZ7.j || mP > aZ7.fu + aZ7.k)
	}
	this.show = function() {
		var gD = bm.buffer.data[121].value;
		colors[0] = (gD >> 12) / 63, colors[1] = (gD >> 6 & 63) / 63, colors[2] = (63 & gD) / 63, aWi.show(), this.resize()
	}, this.ug = function() {
		bm.s0.q6(121, (aZC(0, 64) << 12) + (aZC(1, 64) << 6) + aZC(2, 64)), aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aZ7.resize();
		var ev = i.l,
			zC = aWi.z9(),
			aZD = (aZ7.fu = Math.max(aZ7.fu, ev * zC.uj + bf.gap), ev * zC.zB - 2 * bf.gap);
		aZ7.k = Math.min(aZ7.k, aZD), aZ7.j = 2 * aZ7.k, aZ7.fu = ev * zC.uj + .5 * (ev * zC.zB - aZ7.k), aZ7.fs = .5 * (i.j - aZ7.j), aYK = .25 * aZ7.j, aZ8 = aZ7.fs + aYK + bf.gap, aZ9 = aZ7.j - aYK - bf.gap, aZA = (aZ7.k - 2 * bf.gap) / 3
	}, this.zD = function() {
		var eT, wC, g5;
		aWi.zD(), zE.lineWidth = bf.a34, eT = aZC(0), wC = aZC(1), g5 = aZC(2), zE.fillStyle = "rgb(" + eT + "," + wC + "," + g5 + ")", zE.fillRect(aZ7.fs, aZ7.fu, aYK, aZ7.k), zE.strokeStyle = bE.qT, zE.strokeRect(aZ7.fs, aZ7.fu, aYK, aZ7.k), zE
			.fillStyle = eT + wC + g5 < 306 && wC < 150 ? bE.qT : bE.qK, bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 1), zE.font = bD.th.vG(0, .1 * aZ7.k), zE.rotate(-Math.PI / 2), zE.fillText(L(380), -aZ7.fu - .5 * aZ7.k, aZ7.fs + .5 * aYK),
			zE.setTransform(1, 0, 0, 1, 0, 0), aZE(0), aZE(1), aZE(2)
	}, this.hz = function(mO, mP) {
		a6G(mO, mP) && (aZB = bO.j0(Math.floor((mP - aZ7.fu) / (aZA + .75 * bf.gap)), 0, 2), colors[aZB] = bO.j0((mO - aZ8) / aZ9, 0, 1), bi.e2 = !0)
	}, this.a5m = function(mO) {
		-1 !== aZB && (colors[aZB] = bO.j0((mO - aZ8) / aZ9, 0, 1), bi.e2 = !0)
	}, this.a5p = function(mO, mP, deltaY) {
		a6G(mO, mP) && (mO = bO.j0(Math.floor((mP - aZ7.fu) / (aZA + .75 * bf.gap)), 0, 2), colors[mO] = bO.j0(colors[mO] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.e2 = !0)
	}, this.a6A = function() {
		0 <= aZB && (aZB = -1, bi.e2 = !0)
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(379), [new x("⬅️ " + L(49), function() {
		u.z.aHu()
	})], !1), aZ7 = new uI([.5, .25], [.5, .5], 1)
}

function aWU() {
	var aY6, aY7, aY8, pC;

	function aY9() {
		aYB(), u.aWh()[19] = null, u.a5O()
	}

	function aZH() {
		aYB(), u.v(21)
	}

	function aYB() {
		1 === aE.data.gameMode ? aE.a8s.a8y() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.tp.a6w(aY8.zU(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, pC = [new x("⬅️ " + L(49), aY9)], 1 === aE.data.gameMode && pC.push(new x(L(384), aZH, 1, 1)), aY6 = new yz(L(385), pC), aY7 = new ta(aY6.z4, (pC = [], 0 === aE.data.gameMode ? (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(386), L(364)],
			value: aE.data.colorsType
		}, function(eU) {
			aYB(), aE.data.colorsType = eU, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fi || (aE.data.colorsData = new Uint32Array(aE.fi)), u.v(21)
		})), tc.push(xW)
	}(pC), 1 === aE.data.colorsType && function(tc) {
		var xW = new tM;
		xW.tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.colorsData, 1)), xW.tZ(aY8), tc.push(xW)
	}(pC)) : (aE.a8s.a8y(), pC.push(function() {
		var xW = new tM;
		xW.tP(L(367));
		for (var aC = 0; aC < bj.a4a.length; aC++) {
			var ij = (aC + 1) % bj.a4a.length,
				e = xW.tU((0 == ij ? "" : "Team ") + bj.a4a[ij]);
			aC && (e.style.marginTop = "0.5em"), xW.tZ(new uU({
				eU: -1,
				value: aE.data.teamPlayerCount[ij]
			}, 1, 0, function(e) {
				aY6.z5[1].u2(0);
				var playerCount = bO.j0(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aZK] = playerCount
			})).e.aZK = ij
		}
		return xW
	}()), function(tc) {
		for (var xW = new tM, vZ = (xW.tP(L(387)), []), aC = 0; aC < bj.a4a.length; aC++) {
			var ij = (aC + 1) % bj.a4a.length;
			vZ.push(bj.a4a[ij])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xW.tW(new yv({
			vZ: vZ,
			value: (aE.data.colorsData[0] % 16 + bj.a4a.length - 1) % bj.a4a.length
		}, function(eU) {
			var eU = (eU + 1) % bj.a4a.length,
				aZL = bj.aZM[eU],
				aZL = (aZL[0] >> 2 << 12) + (aZL[1] >> 2 << 6) + (aZL[2] >> 2);
			aE.data.colorsData[0] = aZL - (15 & aZL) + eU
		})), tc.push(xW)
	}(pC)), pC))
}

function vr(id, a89, aZN) {
	var aWi, aZO;

	function aZT() {
		aZO.td.innerHTML += "<br>" + L(390)
	}

	function aZc() {
		var g5 = 1;
		u.v(4, 1, new w(L(391), L(392), !1, [new x("🔄 Reload", function() {
			g5 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g5 = 0
		}, bE.qq)]))
	}

	function aZS() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dv(bG.aD), bm.s0.q6(110, bI.fC.vs(bI.fC.vt(15))), b1.aXH.aZe()
	}
	this.aZP = !0, this.aZQ = id, this.show = function() {
		aWi.show(), this.resize(), 15 === id ? (b1.z.aZR(id) ? aZS : aZT)() : 16 === id ? b1.z.aZR(id) ? b1.es.et(2) : aZT() : 17 === id ? b1.z.aZR(id) ? b1.es.et(3) : aZT() : 18 === id ? (b1.z.close(0, 3253), b1.z.aMn(0, id, 0), aZT()) : 21 ===
			id ? b1.z.aZR(id) ? b1.aZU.aZV(a89.w7, a89.w8, a89.w9) : aZT() : 22 === id ? b1.z.aZR(id) ? b1.aZU.aZW(a89.w7, a89.aZX, a89.aZY) : aZT() : 23 === id ? b1.z.aZR(id) ? b1.aZU.aZZ(a89.aYZ, a89.a4y) : aZT() : 24 === id ? b1.z.aZR(id) ? b1
			.aZU.aZa(a89.aYZ, a89.w8, a89.w9) : aZT() : 25 === id ? b1.z.aZR(id) ? b1.aXH.aXN(a89) : aZT() : 28 === id ? b1.z.aZR(id) ? b1.aZU.aZb(a89.w7, a89.aZX, a89.aZY) : aZT() : 29 === id ? b1.z.aZR(id) ? b1.aXH.aXm(a89) : aZT() : 30 ===
			id && (b1.z.aZR(id) ? bA.aHp() || aZc() : aZT())
	}, this.aZd = function() {
		15 === id ? aZS() : 16 === id ? b1.es.et(2) : 17 === id ? b1.es.et(3) : 18 === id ? u.v(8, this.a5U, new vr(16)) : 21 === id ? b1.aZU.aZV(a89.w7, a89.w8, a89.w9) : 22 === id ? b1.aZU.aZW(a89.w7, a89.aZX, a89.aZY) : 23 === id ? b1.aZU.aZZ(
			a89.aYZ, a89.a4y) : 24 === id ? b1.aZU.aZa(a89.aYZ, a89.w8, a89.w9) : 25 === id ? b1.aXH.aXN(a89) : 28 === id ? b1.aZU.aZb(a89.w7, a89.aZX, a89.aZY) : 29 === id ? b1.aXH.aXm(a89) : 30 === id ? bA.aHp() || aZc() : 1e3 === id && (
			this.aZQ = id = 25, b1.aXH.aXN(a89))
	}, this.aHt = function(code, c3, data) {
		!c3 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5U) : 17 === code ? (b1.z.close(0, 3252), bm.z.a0D(0), bm.buffer.data[117].vZ && 0 < bm.buffer.data[117].vZ.length && (c3 = bm.z.a0F(0)) ? (bm.s0.q6(105, c3.pj), bm.s0.q6(
			106, c3.password), u.v(8, this.a5U, new vr(16))) : (bm.s0.q6(105, ""), u.z.aHu())) : 21 === code ? u.v(10, this.a5U, new aGF(data)) : 23 === code ? u.v(13, this.a5U, new aYH({
			data: data,
			aYZ: a89.aYZ
		})) : 25 === code ? (u.z.aWO.pj = a89.pj, bm.zc.nY(a89.pj), u.v(15, this.a5U)) : 30 === code && (data ? u.v(1) : aZc()))
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aZO.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(388), [new x("⬅️ " + L(49), function() {
		aZN ? u.v(29) : u.z.aHu()
	})]), aZO = new ur(aWi.z4, L(389))
}

function aWS() {
	var aY6, aY7, aZk, tc, aZf = 0;

	function aZi() {
		var hE;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8s.a8y()), hE = bD.tp.a6q(aE.data.teamPlayerCount, 0), aE.data.numberTeams = hE) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aY9() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aZl(), aE.data.canvas = null, u.v(5, 5)
	}

	function aZl() {
		bC.sw.dv(), bm.s0.q6(156, bC.a99.a3Y())
	}

	function aZg() {
		var aZk;
		aZf || (aZk = bV.a9K(aE.data), 2 === aE.data.mapType || bV.aKf.aNK(aZk) ? (aE.data.isReplay = 0, aZl(), aE.a8s.a9M(), ab.aMy(), aE.a8s.a9J(), aE.data.canvas = 2 === aE.data.mapType ? bV.a29 : null, aE.a8w(), aE.a8u = 1) : (aZf = 1, bV.aKf
			.aUV(aZk, function(aNK) {
				aZf = 0, aNK && 19 === u.vq && aZg()
			})))
	}

	function aZx() {
		aZi();
		for (var h = [aZo(), aZp(), aZq()], aC = 3; aC < 6; aC++) u.removeChild(aY7.td, aY7.te[aC].tO), aY7.te[aC] = h[aC - 3], aY7.td.appendChild(aY7.te[aC].tO);
		aY7.resize()
	}

	function aZo() {
		var aZy, xW = new tM;
		return xW.tP(L(385)), aZy = 0 === aE.data.gameMode ? [L(386), L(364)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xW.tU(aZy), xW.tZ(new us([new x(L(396), function() {
			u.v(21)
		}).button])), xW
	}

	function aZp() {
		var xW = new tM,
			h = (xW.tP(L(76)), [L(363) + ": " + aF.lK[aE.data.botDifficultyValue], L(365), L(366), L(364)]);
		return xW.tU(h[aE.data.botDifficultyType]), xW.tZ(new us([new x(L(396), function() {
			u.v(25)
		}).button])), xW
	}

	function aZq() {
		var xW = new tM,
			h = (xW.tP("Spawning"), [L(386), L(398), L(364)]);
		return xW.tU(h[aE.data.spawningType]), xW.tZ(new us([new x(L(396), function() {
			u.v(24)
		}).button])), xW
	}
	this.show = function() {
		aY6.show(), this.resize(), aY6.z4.scrollTop = u.z.vj[0]
	}, this.ug = function() {
		u.z.vj[0] = aY6.z4.scrollTop, aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz("🔧 " + L(393), [new x("⬅️ " + L(49), aY9), new x(L(394), aZg)]), aZi(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a29 : 1 === aE.data.mapType ? (aZk = bV.a9K(aE.data), bV.aKf.aNK(aZk) ? aE.data.canvas =
		bV.aSl(aZk, 0).a29 : bV.aKf.aUV(aZk, function(aNK) {
			aNK && 19 === u.vq && 1 === aE.data.mapType && bV.a9K(aE.data) === aZk && u.v(19)
		})) : (aE.data.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aSl(bV.a9K(aE.data), aE.data.mapSeed).a29)), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM,
			a76 = (xW.tP(L(395)), aE.data.canvas || document.createElement("canvas"));
		a76.style.width = "100%", xW.tZ({
			e: a76
		}), xW.tZ(new us([new x(L(396), function() {
			u.v(20)
		}).button])), tc.push(xW)
	}(tc = []), function(tc) {
		var xW = new tM;
		xW.tP(L(367)), xW.tZ(new uU({
			eU: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.j0(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.tp.a6q(aE.data.teamPlayerCount, 0), aE.a8s.a8y(), bD.tp.a6q(aE.data.teamPlayerCount, 0) !== e) && aZx()
		})), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM;
		xW.tP(L(397)), xW.tW(new yv({
			vZ: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eU) {
			aE.data.gameMode !== eU && (1 === (aE.data.gameMode = eU) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aZx())
		})), tc.push(xW)
	}(tc), tc.push(aZo()), tc.push(aZp()), tc.push(aZq()), function(tc) {
		var xW = new tM,
			h = (xW.tP(L(399)), [L(400), L(401), L(364)]);
		xW.tU(h[aE.data.playerNamesType]), xW.tZ(new us([new x(L(396), function() {
			u.v(23)
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM,
			h = (xW.tP(L(360)), [L(362), L(363) + ": " + aE.data.aIncomeValue, L(364)]);
		xW.tU(h[aE.data.aIncomeType]), xW.tZ(new us([new x(L(396), function() {
			u.v(22)
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM,
			h = (xW.tP(L(402)), [L(362), L(363) + ": " + aE.data.tIncomeValue, L(364)]);
		xW.tU(h[aE.data.tIncomeType]), xW.tZ(new us([new x(L(396), function() {
			u.v(26)
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM,
			h = (xW.tP(L(403)), [L(362), L(363) + ": " + aE.data.iIncomeValue, L(364)]);
		xW.tU(h[aE.data.iIncomeType]), xW.tZ(new us([new x(L(396), function() {
			u.v(27)
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM,
			h = (xW.tP(L(404)), [L(362), L(363) + ": " + aE.data.sResourcesValue, L(364)]);
		xW.tU(h[aE.data.sResourcesType]), xW.tZ(new us([new x(L(396), function() {
			u.v(28)
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM;
		xW.tP(L(405)), xW.tZ(new us([new x(L(406), function() {
			u.y(), aE.a8s.a9N(), u.z.vj[0] = 0, u.v(19)
		}).button])), xW.tZ(new us([new x(L(407), function() {
			bp.aPr()
		}).button])), xW.tZ(new us([new x(L(408), function() {
			return bp.aPt(), !0
		}).button])), tc.push(xW)
	}(tc), tc))
}

function aWd() {
	var aY6, qD = !0;

	function q2(q1, a9R) {
		var tO = document.createElement("div"),
			aa1 = document.createElement("span"),
			aa2 = document.createElement("span");
		aa1.textContent = aX.aGb(a9R.el) + ":", aa1.style.color = bE.qi, aa1.style.paddingRight = "0.4em", aa1.style.display = "table-cell", aa1.style.width = "6ch", aa1.style.textAlign = "end", tO.appendChild(aa1), aa2.textContent = a9R.pb, tO
			.appendChild(aa2), tO.style.display = "table", a9R.sL && function(tO, sL) {
				{
					var aPD;
					sL >= 1024 - ak.px.a2r ? ((aPD = document.createElement("img")).src = ak.a2a.a2f[sL - 1024 + ak.px.a2r].toDataURL(), aPD.style.width = "1.5em", aPD.style.height = "1.5em", aPD.style.verticalAlign = "middle", tO.appendChild(aPD)) :
						((aPD = document.createElement("span")).textContent = ak.px.a36(sL), aPD.style.display = "inline-block", aPD.style.fontSize = "1.5em", aPD.style.lineHeight = "1em", aPD.style.verticalAlign = "middle", tO.appendChild(aPD))
				}
			}(tO, a9R.sL), q1.appendChild(tO)
	}

	function aa0() {
		qD && (aY6.z4.scrollTop = aY6.z4.scrollHeight)
	}
	this.clear = function() {
		aY6.z4.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aAQ = bu.a9U(), fl = aAQ.length, q1 = document.createDocumentFragment(), aC = 0; aC < fl; aC++) q2(q1, aAQ[aC]);
		aY6.z4.appendChild(q1), aa0(), aY6.show(), this.resize(), qD = !0, aa0()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY6.z4.style.padding = "0.4em " + bD.th.tq(bf.tm)
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, this.a2X = function(a9R) {
		var q1 = document.createDocumentFragment();
		q2(q1, a9R), aY6.z4.appendChild(q1), aa0()
	}, (aY6 = new yz(L(409), [new x("⬅️ " + L(49), function() {
		u.aWg(1)
	})])).z4.style.overflowY = "auto", aY6.z4.addEventListener("scroll", function() {
		qD = aY6.z4.scrollTop >= aY6.z4.scrollHeight - aY6.z4.clientHeight - 2
	})
}

function aWA() {
	var aa4 = 0,
		aa5 = 50;
	this.send = function(gD, pj, send) {
		gD = bD.h7.a86(gD, 1, 1e6), aa4 + gD < aa5 ? (aa4 += gD, send()) : u.v(4, u.vq, new w(L(239), L(410, [pj, gD]), !1, [new x("⬅️ " + L(49), function() {
			u.a5O()
		}), new x("✅ OK", function() {
			aa4 = 0, aa5 *= 2, u.a5O(), send()
		})]))
	}
}

function aWa() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.iIncomeType && bD.tp.a6w(aY8.zU(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(403), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(362), L(363), L(364)],
			value: aE.data.iIncomeType
		}, function(eU) {
			aYB(), 2 !== eU || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fi), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eU, u.v(27)
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW;
		1 === aE.data.iIncomeType && ((xW = new tM).tP("Value"), xW.tZ(new uU({
			eU: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.j0(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tc.push(xW))
	}(tc), function(tc) {
		var xW;
		2 === aE.data.iIncomeType && ((xW = new tM).tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.iIncomeData, 4)), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWI() {
	var aa6, aa7, aZ7, uT, aa8, v9 = 0;
	this.aNg = new vx, aZ7 = new uI([.45, .27], [.5, .5], 2 / 3), aa7 = [new x("⚔️<br>" + L(411), function() {
			aa9(0)
		}, bE.qw), new x("🗡️<br>" + L(393), function() {
			aa9(1)
		}, bE.rG), new x("🔑<br>" + L(412), function() {
			aa9(2)
		}, bE.re), new x("☰<br>" + L(413), function() {
			aa9(3)
		}, bE.qg), new x("", function() {
			u.v(12)
		}, bE.qP, !1),
		new x("Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)")
	], uT = new uU(bm.buffer.data[122]);
	for (var aC = 0; aC < aa7.length; aC++) aa7[aC].button.style.position = "absolute";

	function aa9(eU) {
		a1.a2.setState(10), ac.wG() || ac.aNX(), 0 === eU ? u.z.a9C(1) : 1 === eU ? (bC.aQB.a0u(bm.buffer.data[156].value, 1) || aE.a8s.a9N(), u.v(19)) : 2 === eU ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vq, new vr(16)) : u.z.aaA(u.vq,
			16) : 3 === eU && u.v(1)
	}
	uT.e.style.position = "absolute", uT.e.style.textAlign = "center", uT.e.placeholder = L(414), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aNg.show(), aa7[4].u2(bD.color.a7E(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uT.e);
		for (var aC = 0; aC < aa7.length; aC++) document.body.appendChild(aa7[aC].button);
		1 !== a1.id || a1.eC < 5 || (aa8 && bi.el > aa8 + 144e5 ? a1.zw.setState(14) : aa8 = bi.el)
	}, this.ug = function() {
		this.aNg.ug(), u.removeChild(document.body, uT.e);
		for (var aC = 0; aC < aa7.length; aC++) u.removeChild(document.body, aa7[aC].button)
	}, this.resize = function() {
		this.aNg.resize(), this.aNg.resize(), aZ7.resize();
		var gap = .5 * bf.gap,
			wj = 10 / 99 * .84 * aZ7.j,
			aaD = .16 * aZ7.k,
			aEW = .19 * aZ7.j,
			fs = aZ7.fs + aEW,
			wj = aZ7.fu + wj + 3 * gap,
			j = .5 * (aZ7.j - gap) - aEW,
			aEW = aZ7.j - 2 * aEW - aaD - gap,
			aEW = (bD.th.wE(uT.e, fs, wj, aEW, aaD), bD.th.wE(aa7[4].button, fs + aEW + gap, wj, aaD, aaD), v9 = wj, .5 * (aZ7.fu + aZ7.k - (wj += aaD + gap) - gap));
		bD.th.wE(aa7[0].button, fs, wj, j, aEW), bD.th.wE(aa7[1].button, fs + j + gap, wj, j, aEW), bD.th.wE(aa7[2].button, fs, wj + aEW + gap, j, aEW), bD.th.wE(aa7[3].button, fs + j + gap, wj + aEW + gap, j, aEW);
		bD.th.wE(aa7[5].button, fs, wj + aEW * 2 + gap * 2, j * 2 + gap, aEW / 3);
		for (var aC = 0; aC < aa7.length; aC++) aa7[aC].button.style.font = bD.th.vG(0, bD.th.yg(.065 * aZ7.k)), bD.th.tr(aa7[aC].button, 5);
		uT.e.style.font = bD.th.vG(0, bD.th.yg(.08 * aZ7.k)), bD.th.tr(uT.e, 5)
	}, this.zD = function() {
		ab.aN3(), aU.zD();
		var fl = Math.floor((a1.a2.j1() ? .018 : .0137) * i.j2);
		if (zE.font = bD.th.vG(0, Math.max(5, fl)), bD.th.textBaseline(zE, 0), bD.th.textAlign(zE, 2), zE.fillStyle = bE.qT, zE.fillText(m.eC, i.j, 0), __fx.settings.displayWinCounter && (text = "Win count: " + __fx.wins.count, textLength = zE
				.measureText(text).width, fl = Math.max(5, fl), zE.textAlign = "left", zE.textBaseline = "middle", zE.fillText(text, zE.canvas.width - textLength - fl / 2, 2 * fl)), aP.zD(v9), bb.zD(), ac.wG()) {
			zE.imageSmoothingEnabled = !1;
			var text = ac.xQ("territorial.io"),
				textLength = .84 * aZ7.j / text.width;
			zE.setTransform(textLength, 0, 0, textLength, aZ7.fs + .08 * aZ7.j, aZ7.fu), aa6 = aa6 || bD.p8.a87(text, bD.p8.a8E, [0, 0, 0]);
			for (var fs = -1; fs <= 1; fs += 2)
				for (var fu = -1; fu <= 1; fu += 2) zE.drawImage(aa6, fs, fu);
			zE.drawImage(text, 0, 0), zE.imageSmoothingEnabled = !0;
			var fl = ac.xQ("logo"),
				aaG = .6666 * textLength * text.height / fl.height,
				oP = .5 * i.j,
				oQ = aZ7.fu + .5 * textLength * text.height - .5 * aaG * fl.height;
			zE.setTransform(aaG, 0, 0, aaG, oP - .6 * textLength * text.width, oQ), zE.drawImage(fl, 0, 0), zE.setTransform(aaG, 0, 0, aaG, oP + .6 * textLength * text.width - aaG * fl.width, oQ), zE.drawImage(fl, 0, 0), zE.setTransform(1, 0, 0,
				1, 0, 0), zE.imageSmoothingEnabled = !0
		}
	}
}

function aWP() {
	var aWi, aaH, aaI, z0;

	function aaJ(aC) {
		u.v(8, u.vq, new vr(21, {
			w7: aC,
			w8: 0,
			w9: 10
		}))
	}
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aaH.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aaI = [new x(L(415), function() {
		aaJ(1)
	}, 0, 0, 1), new x(L(416), function() {
		aaJ(2)
	}, 0, 0, 1), new x(L(417), function() {
		aaJ(3)
	}, 0, 0, 1), new x(L(418), function() {
		aaJ(0)
	}, 0, 0, 1), new x(L(419), function() {
		aaJ(9)
	}, 0, 0, 1), new x(L(420), function() {
		aaJ(10)
	}, 0, 0, 1), new x(L(421), function() {
		aaJ(11)
	}, 0, 0, 1), new x(L(422), function() {
		aaJ(13)
	}, 0, 0, 1)], z0 = [new x("⬅️ " + L(49), function() {
		u.a5O()
	})], aWi = new yz(L(423), z0), aaH = new uG(aaI, aWi.z4)
}

function aIH(title, tV, aaK) {
	var aWi, aZO;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aZO.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aaK = aaK || [new x("⬅️ " + L(49), function() {
		u.a5O()
	}, bE.rA)], aWi = new yz(title, aaK), aZO = new ur(aWi.z4, tV), bD.th.textAlign(aWi.z4.style, 1)
}

function aGF(data) {
	var aWi, aaL;

	function aaU(fl) {
		return fl < 60 ? 1 === fl ? fl + " Second" : fl + " Seconds" : fl < 3600 ? 1 === (fl = Math.floor(fl / 60)) ? fl + " Minute" : fl + " Minutes" : fl < 172800 ? 1 === (fl = Math.floor(fl / 3600)) ? fl + " Hour" : fl + " Hours" : (fl = Math
			.floor(fl / 172800)) + " Days"
	}

	function aaN(kO) {
		var fl = data.data.length;
		if (fl) {
			for (var w8, max = min = parseInt(data.data[0][0]), aC = 1; aC < fl; aC++) var aLF = parseInt(data.data[aC][0]),
				min = Math.min(aLF, min),
				max = Math.max(aLF, max);
			w8 = kO < 0 ? min + kO : max + 1, u.v(8, u.a5T().a5U, new vr(21, {
				w7: data.w7,
				w8: w8,
				w9: w8 + Math.abs(kO)
			}))
		}
	}
	if (this.show = function() {
			aWi.show(), this.resize()
		}, this.ug = function() {
			aWi.ug()
		}, this.resize = function() {
			aWi.resize(), aaL.resize()
		}, this.a6K = function(ev) {
			2 === ev && aWi.z5[0].ty()
		}, data.aGG) {
		aWi = new yz(L(33), [new x("⬅️ " + L(49), function() {
			u.a5O()
		})]);
		var fo = {
				va: [],
				vf: [L(436), L(437), L(438) + " ↗"],
				vm: [12, 50, 38]
			},
			a9H = aE.data.a9H;
		if (a9H) {
			for (var fl = a9H.length, va = fo.va, a2Y = ah.a2Y, aC = 0; aC < fl; aC++) va.push([{
				gD: aC + 1 + ".",
				em: 0
			}, {
				gD: a2Y[aC],
				em: 0
			}, {
				gD: bI.fC.a3N(a9H[aC], 5),
				em: 1,
				pj: a9H[aC],
				vp: 0
			}]);
			aaL = new vY(aWi.z4, fo, {
				vi: 1
			})
		} else aaL = new vY(aWi.z4, fo)
	} else {
		var fo = data.data.length ? 0 : 1,
			aaK = [new x("⬅️ " + L(49), function() {
				u.a5O()
			}), new x(L(424), function() {
				aaN(-10)
			}, fo, 0, 1), new x(L(425), function() {
				aaN(10)
			}, fo, 0, 1), new x(L(369), function() {
				u.v(11, 10, new aaO({
					w7: data.w7
				}))
			})],
			vf = [L(426), L(427), L(428), L(429), L(430), L(431), L(432), L(433), L(434), L(435), L(420), L(421), "Audit Log", L(422)];
		aWi = new yz(vf[data.w7], aaK), ! function() {
			var aC, fo = {
					va: []
				},
				va = fo.va,
				aaQ = data.data,
				fl = aaQ.length;
			fl && 0 === aaQ[0][0] && 0 <= (eU = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.w7]) && (u.z.wA[eU] = aaQ[0][1]);
			var oO = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.w7],
				a8K = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.w7],
				eU = [
					[L(439), L(32) + " ↗", L(440)],
					[L(439), L(441), L(442), L(443) + " ↗"],
					[L(439), L(32) + " ↗", L(442)],
					[L(439), L(32) + " ↗", L(442)],
					[L(436), L(444), L(445) + " ↗", L(446) + " ↗", L(134)],
					[L(436), L(444), L(447) + " ↗", L(448) + " ↗", L(449)],
					[L(436), L(444), L(450) + " ↗", L(451) + " ↗", L(452)],
					[L(436), L(444), L(447) + " ↗", L(448) + " ↗", L(453)],
					[L(436), L(444), L(445) + " ↗", L(446) + " ↗", L(134)],
					[L(439), L(32) + " ↗", L(442)],
					[L(439), L(32) + " ↗", L(454)],
					[L(439), L(32) + " ↗", L(442)],
					[L(436), L(444), L(445) + " ↗", L(446) + " ↗", L(455)],
					[L(439), L(32) + " ↗", L(442)]
				];
			if (fo.vf = eU[data.w7], fo.vm = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[10, 18, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[10, 15, 25, 25, 25],
					[25, 40, 35]
				][data.w7], 0 === data.w7 || 2 === data.w7 || 3 === data.w7 || 9 === data.w7 || 10 === data.w7 || 11 === data.w7 || 13 === data.w7)
				for (aC = 0; aC < fl; aC++) va.push([{
					gD: aaQ[aC][0] + 1 + ".",
					em: 0
				}, {
					gD: aaQ[aC][1],
					em: 1,
					pj: aaQ[aC][4],
					vp: aaQ[aC][3]
				}, {
					gD: (oO * aaQ[aC][2]).toFixed(a8K),
					em: 0
				}]);
			else if (12 === data.w7)
				for (aC = 0; aC < fl; aC++) {
					var aaT = aaQ[aC][3];
					va.push([{
						gD: "" + aaQ[aC][0],
						em: 0
					}, {
						gD: aaU(aaQ[aC][4]),
						em: 0
					}, {
						gD: aaQ[aC][5],
						em: 1,
						pj: aaQ[aC][1],
						vp: 0
					}, {
						gD: aaQ[aC][6],
						em: 1,
						pj: aaQ[aC][2],
						vp: 0
					}, {
						gD: br.ea(aaT, bI.fC.a3N(aaQ[aC][1], 5)),
						em: 0
					}])
				} else if (1 === data.w7)
					for (aC = 0; aC < fl; aC++) va.push([{
						gD: aaQ[aC][0] + 1 + ".",
						em: 0
					}, {
						gD: aaQ[aC][1],
						em: 0
					}, {
						gD: (oO * aaQ[aC][2]).toFixed(a8K),
						em: 0
					}, {
						gD: aaQ[aC][3],
						em: 1,
						pj: aaQ[aC][5],
						vp: aaQ[aC][4]
					}]);
				else if (4 === data.w7 || 5 === data.w7 || 6 === data.w7 || 7 === data.w7 || 8 === data.w7)
				for (aC = 0; aC < fl; aC++) {
					var aaV = aaQ[aC][5];
					4 === data.w7 || 8 === data.w7 ? "100%" === (aaV = (aaV % 64 * 100 / (aaV >> 6)).toFixed(0) + "%") && (4 === data.w7 ? aaV += " (" + L(456) + ")" : aaV += " (" + L(457) + ")") : 5 === data.w7 ? 32768 <= aaV && (aaV = -(aaV -
						32768)) : aaV = (oO * aaV).toFixed(a8K), va.push([{
						gD: "" + aaQ[aC][0],
						em: 0
					}, {
						gD: aaU(aaQ[aC][6]),
						em: 0
					}, {
						gD: aaQ[aC][7],
						em: 1,
						pj: aaQ[aC][1],
						vp: aaQ[aC][2]
					}, {
						gD: aaQ[aC][8],
						em: 1,
						pj: aaQ[aC][3],
						vp: aaQ[aC][4]
					}, {
						gD: "" + aaV,
						em: 0
					}])
				}
			aaL = new vY(aWi.z4, fo)
		}()
	}
}

function aaO(a89) {
	var aWi, aWj, tc;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(458), [new x("⬅️ " + L(49), function() {
		u.aWg(10)
	})]), aWj = new ta(aWi.z4, ((tc = []).push(function() {
		var aLn, xW = new tM,
			aZ5 = new uU(bm.buffer.data[132], 1, function() {
				aLn.button.click()
			}),
			aZ6 = new uU(bm.buffer.data[131], 1, function() {
				aZ5.e.focus()
			});
		xW.tP(L(374)), xW.tZ(aZ6), aZ6.e.style.marginBottom = "0.8em", xW.tP(L(375)), xW.tZ(aZ5);
		return aLn = new x(L(373), function() {
			w8 = Math.floor(aZ6.e.value), w9 = Math.floor(aZ5.e.value);
			var w9, w8 = {
				a6o: Math.min(w8, w9),
				aV8: Math.max(w8, w9)
			};
			u.v(8, u.a9T(10).a5U, new vr(21, {
				w7: a89.w7,
				w8: w8.a6o,
				w9: w8.aV8
			}))
		}, 0, 0, 1), xW.tZ(new us([aLn.button])), xW
	}()), tc.push(function() {
		var aLn, xW = new tM,
			aZ5 = new uU(bm.buffer.data[134], 1, function() {
				aLn.button.click()
			}),
			aZ6 = new uU(bm.buffer.data[133], 0, function() {
				aZ5.e.focus()
			});
		return xW.tP(1 === a89.w7 ? L(459) : L(460)), xW.tZ(aZ6), aZ6.e.style.marginBottom = "0.8em", xW.tP(L(461)), xW.tZ(aZ5), aLn = new x(L(373), function() {
			var aZX = aZ6.e.value.slice(0, 20),
				aZY = Math.abs(Math.floor(aZ5.e.value));
			u.v(8, u.a9T(10).a5U, new vr(22, {
				w7: a89.w7,
				aZX: aZX,
				aZY: aZY
			}))
		}, 0, 0, 1), xW.tZ(new us([aLn.button])), xW
	}()), tc.push(function() {
		var aLn, xW = new tM,
			aZ5 = new uU(bm.buffer.data[152], 1, function() {
				aLn.button.click()
			}),
			aZ6 = new uU(bm.buffer.data[151], 0, function() {
				aZ5.e.focus()
			});
		return xW.tP(L(462)), xW.tZ(aZ6), aZ6.e.style.marginBottom = "0.8em", xW.tP(L(461)), xW.tZ(aZ5), aLn = new x(L(373), function() {
			var aZX = aZ6.e.value.slice(0, 5),
				aZY = Math.abs(Math.floor(aZ5.e.value));
			u.v(8, u.a9T(10).a5U, new vr(28, {
				w7: a89.w7,
				aZX: aZX,
				aZY: aZY
			}))
		}, 0, 0, 1), xW.tZ(new us([aLn.button])), xW
	}()), tc))
}

function aWc() {
	var aaZ, aaa, aab, aac, aad, aae, aaf, wJ, wK, aag = new Array(2);

	function aai(button, aak) {
		button = new uc("", button, 1, aak);
		return button.ue.style.right = "0.2em", button.ue.style.textAlign = "left", button.ue.style.overflow = "hidden", button.ue.style.textOverflow = "ellipsis", button.ue.translate = !1, button
	}

	function aKw() {
		var input, aJs;
		!bq.fI || (aJs = (input = aaZ.wT.uT.e).value.trim().slice(0, 255)).length < 1 || (bq.pd.a4A(aJs), input.value = bq.pd.aL6(), aaZ.wT.ud(), bM.uA()) || input.focus()
	}

	function aah(wf) {
		var aam = bq.z.aIb;
		aam !== wf && (aaj(aam, 0), aaj(wf, 1), bq.z.aIb = wf, 0 === aam && b1.aJI.aJJ(1), 0 === wf ? (b1.aJI.aJJ(0), c0.nM.nY()) : 1 === wf && aaZ.wU.nY(), aaZ.we(wf), aaZ.resize())
	}

	function aaj(wf, color) {
		wJ.pC[wf].u2(color ? bE.qs : bE.ro)
	}

	function aNH(aNK) {
		aNK && bq.fI && 29 === u.vq && (u.a9T(29).aKP(), bq.xU.aKQ())
	}
	this.pd = function(pj) {
		aah(0);
		var pb = aaZ.wT.uT.e.value,
			pj = "@" + pj + " ";
		pb.length && !bD.pf.a7b(pb, " ") && (pj = " " + pj), aaZ.wT.uT.e.value = pb += pj, aaZ.wT.ud(), aaZ.wT.uT.e.focus()
	}, this.aKN = function() {
		aaZ.wU.nY()
	}, this.aJK = function() {
		var tc = bq.tc,
			tc = tc.aJH() ? tc.xY ? bE.rT : bE.qs : bE.ro;
		wK.pC[1].u2(tc), aaZ.wW.nY()
	}, this.aKP = function() {
		var tc = bq.tc,
			aC = tc.xz(tc.xX);
		aC < 0 || (tc = tc.tc[aC], bV.aKf.aNK(tc.fR) ? bV.a8(tc.fR, tc.mapSeed) : bV.aKf.zu(tc.fR, aNH))
	}, this.aKO = function() {
		aaZ.wc(bq.z.wd);
		var xJ = bq.pr.xJ,
			aan = xJ.length,
			xW = bq.tc.tc[0],
			aao = xW ? Math.min(bq.tc.xZ(xW), aan) : 0;
		aaa.ue.textContent = "" + aan, aab.ue.textContent = "" + aao, aac.ue.textContent = aP.aBl(0, 2), aad.ue.textContent = aP.aBl(2, 4), aae.ue.textContent = xW ? bq.tc.xc(xW.xH) + "   " + bV.xa.xb[xW.fR] : "", aaf[0].ue.textContent = bq.ly
			.aJx(xJ, 0, aan), aaf[1].ue.textContent = xW && xW.xH < 7 ? bq.ly.aJx(xJ, 0, aao) : "", aag[1].ue.textContent = "Multiplayer: " + bq.z.aKJ[0] + "   Single: " + bq.z.aKJ[1] + "   Lobby: " + aan, this.aJK()
	}, this.aKS = function() {
		c0.nM.nY()
	}, this.show = function() {
		bq.z.aIa++, aaZ.show(), this.resize(), bq.message.show()
	}, this.ug = function() {
		aaZ.ug(), bq.yR.ug(), bq.xv.ug(), bq.message.ug()
	}, this.resize = function() {
		aaZ.resize(), bq.message.resize()
	}, this.a6K = function(ev) {
		2 === ev ? bq.tc.xX ? bq.tc.select(0) : wK.pC[0].ty() : ev < 2 && bq.tc.click(0)
	}, wJ = new uv([new x(L(463), function() {
		return aah(0), 2
	}), new x(L(33), function() {
		return aah(1), 2
	}), new x(L(464), function() {
		return aah(2), 2
	})], bE.ro, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) wJ.pC[aC].button.style.padding = "0";
	wK = new uv([new x(L(35, 0, 0, 1), function() {
		u.y(), bq.yG(), b1.z.a5c(3240), u.v(5, 5)
	}), new x(L(465), function() {
		return bq.tc.click(0), 2
	})], bE.ro, 0, [25, 75]), aaZ = new wI(wJ, wK, aKw, bq.yR.aLT, function(eU, y3) {
		bq.fI && bq.tc.click(eU, y3)
	});
	var join = wK.pC[1].button,
		input = (bD.th.wt(join, null, function() {
			bq.fI && bq.tc.click(0, 1)
		}), aaZ.wT.uT.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fI && bq.pd.aL8(event, input) && aaZ.wT.ud()
		}), aaa = new uc("0", wJ.pC[1].button), aab = new uc("0", wK.pC[1].button), aac = aai(wJ.pC[2].button, 0), aad = aai(wJ.pC[2].button, 1), (aae = aai(wK.pC[1].button, 0)).ue.style.right = "3em", (aaf = [new uc("", wJ.pC[1].button, 1, 1),
			new uc("", wK.pC[1].button, 1, 1)
		])[0].ue.style.bottom = "0em", aaf[1].ue.style.bottom = "0em", aaf[0].ue.translate = !1, aaf[1].ue.translate = !1, aaj(bq.z.aIb, 1), (aag = [new uc(L(367), aaZ.wg(), 1, 0), new uc("", aaZ.wg(), 1, 1)])[0].ue.style.fontSize = "0.4em", aag[1]
		.ue.style.fontSize = "0.4em"
}

function aWJ() {
	var aWi, aWj, tc;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(466), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a9T(7).a5U)
	}), new x(L(268), function() {
		bm.s0.q6(105, bJ.fC.a0m(aWj.te[0].tN[0].e.value, 5)), bm.s0.q6(106, bJ.fC.a0m(aWj.te[1].tN[0].e.value, 15)), u.v(8, u.a9T(7).a5U, new vr(18))
	})]), aWj = new ta(aWi.z4, ((tc = []).push(function() {
		var xW = new tM;
		return xW.tP(L(245)), xW.tZ(new uU({
			value: "",
			eU: -1
		})), xW
	}()), tc.push(function() {
		var xW = new tM,
			aXO = (xW.tP(L(248)), new uU({
				value: "",
				eU: -1
			}));
		return aXO.e.type = "password", xW.tZ(aXO), xW.tZ(new us([new x(L(249), function(e) {
			return e.textContent === L(249) ? (e.textContent = L(250), aXO.e.type = "text") : (e.textContent = L(249), aXO.e.type = "password"), !0
		}).button])), xW
	}()), tc.push(function() {
		var xW = new tM;
		return xW.tP(L(252)), xW.tQ(L(467)), xW.tQ(L(468)), xW.tQ(L(469)), xW
	}()), tc))
}

function aWQ() {
	var aWi, aaH, aaI, z0;

	function aaJ(aC) {
		u.v(8, u.vq, new vr(21, {
			w7: aC,
			w8: 0,
			w9: 10
		}))
	}
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aaH.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aaI = [new x(L(431), function() {
		aaJ(5)
	}, 0, 0, 1), new x(L(432), function() {
		aaJ(6)
	}, 0, 0, 1), new x(L(433), function() {
		aaJ(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aaJ(12)
	}, 0, 0, 1)], z0 = [new x("⬅️ " + L(49), function() {
		u.a5O()
	})], aWi = new yz(L(470), z0), aaH = new uG(aaI, aWi.z4)
}

function aW8() {
	this.buffer = {}, this.wA = new Array(8), this.aWO = null, this.aWL = null, this.vW = 0, this.vj = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a9C = function(aar) {
		aar && (aa.fE = aar), u.y(), aa.dv()
	}, this.aHu = function() {
		u.v(0 === ab.a5P() ? 5 : 0)
	}, this.aZ0 = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5T().a5U, new vr(24, {
			aYZ: bm.buffer.data[125].value,
			w8: bm.buffer.data[128].value,
			w9: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5T().a5U, new vr(23, {
				aYZ: bm.buffer.data[125].value,
				a4y: h
			}))
		}
	}, this.aaA = function(a5U, target) {
		u.v(4, a5U, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aXA(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aXA("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a5U)
			}), new x("✅ Accept", function() {
				bm.s0.q6(140, 1), 0 === target ? u.v(2, a5U) : u.v(8, a5U, new vr(target))
			})]))
	}, this.aas = function() {
		for (var aC = 0; aC < 8; aC++) this.wA[aC] = bJ.a0d.a0h(bK.sk(5));
		this.wA[1] = "[" + this.wA[1] + "]", 5 === u.vq && (u.a5T().aNg.q6(this.wA), u.a5T().resize())
	}, this.aXJ = function(gD, ry, aBA) {
		gD = bD.h7.a86(gD, 1, 1e6);
		ry = L(471, [ry]);
		return (ry += "<br>") + L(472, [aBA]) + "<br>" + L(473, [gD + "–" + (gD + 2)]) + "<br>" + L(474, [gD])
	}
}

function aWT() {
	var aY6, aY7, aat, tc;

	function aY9() {
		b7.yG(), u.aWh()[19] = null, u.a5O()
	}

	function ab0() {
		ab3(), ab1()
	}

	function ab3() {
		aat.tO.lastChild && u.removeChild(aat.tO, aat.tO.lastChild)
	}

	function ab1() {
		var aZk = bV.a9K(aE.data);
		bV.aKf.aNK(aZk) ? (aE.data.canvas = bV.aSl(aZk, aE.data.mapSeed).a29, ab2()) : (aE.data.canvas = null, bV.aKf.aUV(aZk, function(aNK) {
			aNK && 20 === u.vq && 2 !== aE.data.mapType && bV.a9K(aE.data) === aZk && u.v(20)
		}))
	}

	function ab2() {
		var a76 = aE.data.canvas;
		a76.style.width = "100%", aat.tO.appendChild(a76)
	}
	this.aPC = function(a76) {
		aE.data.canvas && ab3(), aE.data.canvas = a76, ab2()
	}, this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(395), [new x("⬅️ " + L(49), aY9)]), 2 === aE.data.mapType && b7.dv(), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(475), L(476), L(477)],
			value: aE.data.mapType
		}, function(eU) {
			2 === (aE.data.mapType = eU) ? (b7.dv(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.yG()), u.v(20)
		})), 2 <= aE.data.mapType && (xW.tZ(new vI), xW.tZ(new uo({
			value: aE.data.passableWater
		}, L(478), function(value) {
			aE.data.passableWater = value
		})), xW.tZ(new uo({
			value: aE.data.passableMountains
		}, L(479), function(value) {
			aE.data.passableMountains = value
		})));
		tc.push(xW)
	}(tc = []), function(tc) {
		if (0 === aE.data.mapType) {
			for (var xW = new tM, vZ = (xW.tP(L(395)), []), aC = 0; aC < bV.xa.aTj.length; aC++) vZ.push(bV.xa.aBN[bV.xa.aTj[aC]].name);
			xW.tW(new yv({
				vZ: vZ,
				value: aE.data.mapProceduralIndex
			}, function(eU) {
				aE.data.mapProceduralIndex = eU, ab0()
			})), tc.push(xW)
		}
	}(tc), function(tc) {
		if (1 === aE.data.mapType) {
			for (var xW = new tM, vZ = (xW.tP(L(395)), []), aC = 0; aC < bV.xa.aTk.length; aC++) vZ.push(bV.xa.aBN[bV.xa.aTk[aC]].name);
			xW.tW(new yv({
				vZ: vZ,
				value: aE.data.mapRealisticIndex
			}, function(eU) {
				aE.data.mapRealisticIndex = eU, ab0()
			})), tc.push(xW)
		}
	}(tc), function(tc) {
		var xW;
		2 === aE.data.mapType && ((xW = new tM).tP(L(480)), xW.tZ(new uU(bm.buffer.data[162], 1)), xW.tP(L(481), "0.8em"), xW.tZ(new us([new x(L(482), function() {
			return b7.aP5(), !0
		}).button])), tc.push(xW))
	}(tc), function(tc) {
		var xW, uT;
		2 === aE.data.mapType && ((xW = new tM).tP(L(483)), uT = new uU({
			eU: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xW.tZ(uT), tc.push(xW))
	}(tc), function(tc) {
		var xW, uT, aLn;
		0 === aE.data.mapType && ((xW = new tM).tP("Seed"), uT = new uU({
			eU: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, ab0())
		}), aLn = new x(L(386), function(e) {
			var aSh = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aSh) return uT.e.value = aE.data.mapSeed = aSh, ab0(), !0
		}), xW.tZ(uT), xW.tZ(new us([aLn.button])), tc.push(xW))
	}(tc), function(tc) {
		(aat = new tM).tP(L(484)), 2 !== aE.data.mapType ? ab1() : aE.data.canvas && ab2();
		tc.push(aat)
	}(tc), tc))
}

function w(title, tV, ab4, aaK) {
	var aWi, aZO;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aZO.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aaK = aaK || [new x("⬅️ " + L(49), function() {
		u.a5O()
	})], aWi = new yz(title, aaK), aZO = new ur(aWi.z4, tV), ab4 && bD.th.textAlign(aWi.z4.style, 1)
}

function aWW() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 === aE.data.playerNamesType && 1 === bD.tp.a6k(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.playerNamesType && bD.tp.a6y(aY8.zU(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(399), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(400), L(401), L(364)],
			value: aE.data.playerNamesType
		}, function(eU) {
			aYB(), aE.data.playerNamesType = eU, u.v(23)
		})), xW.tZ(new vI), xW.tZ(new uo({
			value: aE.data.selectableName
		}, L(485), function(value) {
			aE.data.selectableName = value
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW;
		2 === aE.data.playerNamesType && ((xW = new tM).tP("Data"), aY8 = new zM(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fi || (aE.data.playerNamesData = new Array(aE.fi), aE.data.playerNamesData
			.fill("")), aY8.zT(bD.pf.a8Z(aE.data.playerNamesData, 1, '"')), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWe() {
	var aY6, aY7, tc;

	function abA() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var g4 = 0; g4 < 3; g4++) g4 < h.length && (colors[aC][g4] = Number(h[g4]))
		}
		return colors
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(486), [new x("⬅️ " + L(49), function() {
		u.a5O()
	})]), aY7 = new ta(aY6.z4, ((tc = []).push(function() {
		var xW = new tM;
		return xW.tP(L(487)), xW.tU(b1.z.aXA("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xW.tU("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xW
	}()), tc.push(function() {
		var xW = new tM,
			ex = (xW.tP(L(488)), bm.buffer.data[174].value),
			tR = xW.tQ(ex.length + " / 180"),
			aXp = (tR.style.textAlign = "center", new zM(0, 1, function(e) {
				var e = e.target.value,
					hE = e.length;
				tR.textContent = hE + " / 180", hE <= 180 && bm.s0.q6(174, e)
			}));
		return aXp.e.rows = 6, aXp.e.style.fontSize = "1em", aXp.zT(ex), xW.tZ(aXp), xW
	}()), tc.push(function() {
		var xW = new tM;
		xW.tP(L(385));
		for (var aC = 0; aC < 11; aC++) {
			var jA = xW.tZ(new uU(bm.buffer.data[163 + aC]));
			aC && (jA.e.style.marginTop = "0.6em")
		}
		return xW.tZ(new us([new x(L(489), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zj(aC, data[aC].zm);
			u.a5O(), u.aWh()[31] = null, u.v(31)
		}).button])), xW
	}()), tc.push(function() {
		var xW = new tM;
		return xW.tP("Targeting"), xW.tU(L(490)), xW.tZ(new uU(bm.buffer.data[175], 0, 0)), xW
	}()), tc.push(function() {
		var xW = new tM;
		return xW.tP(L(484)), xW.tZ(new us([new x(L(249), function() {
			(new ew).show(bm.buffer.data[174].value, abA(), -1)
		}).button])), xW
	}()), tc.push(function() {
		var xW = new tM,
			abB = (xW.tP(L(491)), xW.tU(L(492)), new uU(bm.buffer.data[176], 1, 0)),
			abC = (xW.tZ(abB), new x(L(493), function(e) {
				return abD.button.textContent === L(171) && b1.z.er(0) && (bD.th.ys(e), aXG(), b1.aXH.abE(bm.buffer.data[176].value, abA(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aXG = function() {
				abD.button.textContent = L(233), abC.u2(1), abC.button.style.color = bE.qT
			},
			abD = new x(L(233), function(e) {
				return e.textContent === L(233) ? (e.textContent = L(171), abC.u2(0), abC.button.style.color = bE.rZ) : aXG(), !0
			});
		return xW.tZ(new us([abD.button, abC.button])), xW
	}()), tc))
}

function aWf() {
	var aWi, aWj, tc;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz("🔒 " + L(494), [new x("⬅️ " + L(49), function() {
		u.a5O()
	})]), aWj = new ta(aWi.z4, ((tc = []).push(function() {
		var xW = new tM,
			uT = (xW.tU(b1.z.aXA("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xW.tP(L(245)), new uU({
				value: "",
				eU: -1
			})),
			aXl = (xW.tZ(uT), xW.tP(L(319), "0.8em"), new uU({
				value: "",
				eU: -1
			}, 0, 0)),
			aXF = (aXl.e.type = "email", aXl.e.autocomplete = "email", aXl.e.name = "email", aXl.e.inputMode = "email", aXl.e.spellcheck = !1, xW.tZ(aXl), new x(L(495), function(e) {
				return bD.th.ys(e), b1.aXH.aXm({
					action: 4,
					pb: uT.e.value.trim() + aXl.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xW.tZ(new us([aXF.button])), xW
	}()), tc))
}

function aWH() {
	var aY6, zR;

	function abF() {
		u.y();
		var playedGame = aE.a48 && !aE.hu ? bC.a99.a3Y() : "",
			pb = bC.abJ(zR.zU());
		(aE.a48 && 0 < pb.length && pb === bC.sw.a98 || bC.aQB.a0u(pb)) && (__fx.replayHistory.save(playedGame), bC.abK())
	}
	this.show = function(abG) {
		this.abH(abG), aY6.show(), this.resize()
	}, this.abH = function(abG) {
		0 === aE.a48 ? abG ? zR.zT(abG) : aE.a8v.length && zR.zT(aE.a8v) : (aE.hu || (bC.sw.a98 = bC.a99.a3Y()), zR.zT(bC.abI(bC.sw.a98)))
	}, this.zT = function(pb) {
		zR.zT(pb)
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), zR.resize()
	}, this.a6K = function(ev) {
		2 === ev ? aY6.z5[0].ty() : abF()
	}, aY6 = new yz(L(496), [new x("⬅️ " + L(49), function() {
		u.aWg(1)
	}), new x(L(497), function() {
		zR.zV()
	}), new x(L(498), function() {
		zR.zW()
	}), new x(L(499), function() {
		zR.clear()
	}), new x(L(500), function() {
		abF()
	})]), zR = new zM(L(501)), aY6.z4.appendChild(zR.e)
}

function aWG() {
	var aWi, aWj, tc, xW;

	function abL() {
		bA.aHg !== bm.buffer.data[12].value ? (bA.dv(), u.v(8, 1, new vr(30))) : u.v(1)
	}
	this.show = function() {
			aWi.show(), this.resize()
		}, this.ug = function() {
			aWi.ug()
		}, this.resize = function() {
			aWi.resize(), aWj.resize()
		}, this.a6K = function(ev) {
			2 === ev && aWi.z5[0].ty()
		}, aWi = new yz(L(502), [new x("⬅️ " + L(49), abL), new x(L(503), function() {
			u.y(), bm.s0.a0K(), u.v(2)
		})]), tc = [], (xW = new tM).tP(L(504)), xW.tQ(L(505)), tc.push(xW),
		function(tc) {
			var xW = new tM,
				h = (xW.tP(L(490)), bA.data.aHx());
			xW.tW(new yv({
				vZ: h,
				value: bA.data.aI1(h)
			}, function(eU) {
				return bm.s0.q6(12, h[eU].split(":")[0]), !0
			})), tc.push(xW)
		}(tc),
		function(tc) {
			var xW = new tM,
				abO = (xW.tP(L(530)), []);
			xW.tZ(new us([new x(L(489), function(e) {
				ba.abP();
				for (var aC = 0; aC < abO.length; aC++) abO[aC].e.value = ba.aH8[aC];
				return bD.th.ys(e), !0
			}).button]));
			for (var aC = 0; aC < ba.abQ.length; aC++) {
				xW.tQ(ba.abQ[aC]);
				for (var g4 = 0; g4 < 2; g4++) {
					var eU = 2 * aC + g4,
						uT = new uU({
							value: ba.aH8[eU],
							eU: -1
						});
					uT.e.abR = eU, abO.push(uT), uT.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.abS(e.target.abR, code)
					}), g4 && (uT.e.style.marginLeft = "4%"), uT.e.style.width = "48%", xW.tZ(uT)
				}
			}
			tc.push(xW)
		}(tc), (xW = new tM).tP(L(506)), bm.buffer.data[1].vZ = [L(507), L(508), L(509), L(510)], xW.tW(new yv(bm.buffer.data[1])), tc.push(xW), (xW = new tM).tP(L(511)), bm.buffer.data[9].vZ = [L(508), L(512), L(513)], xW.tW(new yv(bm.buffer.data[
			9])), tc.push(xW), (xW = new tM).tP(L(514)), bm.buffer.data[11].vZ = [L(515), L(9), L(516)], xW.tW(new yv(bm.buffer.data[11])), tc.push(xW), (xW = new tM).tP(L(517)), xW.tZ(new uo(bm.buffer.data[2])), tc.push(xW), (xW = new tM).tP(L(
		518)), xW.tZ(new uo(bm.buffer.data[7])), tc.push(xW), (xW = new tM).tP(L(519)), xW.tZ(new uo(bm.buffer.data[8])), tc.push(xW), (xW = new tM).tP(L(520)), xW.tZ(new uU(bm.buffer.data[5])), tc.push(xW), (xW = new tM).tP(L(521)), xW.tZ(new uo(bm
			.buffer.data[13], L(522))), xW.tZ(new uo(bm.buffer.data[14], L(523))), tc.push(xW), (xW = new tM).tP(L(524)), xW.tW(new yv({
			vZ: [L(525), L(526), L(527)],
			value: aa.aMi
		}, function(aC) {
			aa.aMi = aC
		})), tc.push(xW), (xW = new tM).tP(L(528)), xW.tZ(new uo(bm.buffer.data[15])), xW.tQ(L(529)), xW.tZ(new uU(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.j0(Math.floor(e.target.value), 0, 16)
		})), tc.push(xW), aWj = new ta(aWi.z4, tc)
}

function aWX() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 !== aE.data.spawningType || bD.tp.a6k(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.spawningType && bD.tp.a6w(aY8.zU(), aE.data.spawningData, bV.aPF - 1)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(531), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM,
			vZ = (xW.tP(L(361)), [L(386), L(398), L(364)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vZ.splice(1, 1), 0 < value) && (value = 1);
		xW.tW(new yv({
			vZ: vZ,
			value: value
		}, function(eU) {
			aYB(), aE.data.spawningType = eU, 0 === aE.data.gameMode && 1 === eU && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fi)), u.v(24)
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW = new tM;
		xW.tP("My Spawn"), xW.tZ(new uo({
			value: aE.data.selectableSpawn
		}, L(532), function(value) {
			aE.data.selectableSpawn = value
		})), tc.push(xW)
	}(tc), function(tc) {
		var xW = new tM,
			abU = (xW.tP("Seed"), new uU({
				eU: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xW.tZ(abU), xW.tZ(new us([new x(L(386), function() {
			abU.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tc.push(xW)
	}(tc), function(tc) {
		var xW;
		2 === aE.data.spawningType && ((xW = new tM).tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.spawningData, 2)), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWF() {
	var aWi, aaH, aaI, z0;

	function abV(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vr(16)) : u.v(2) : u.z.aaA(u.vq, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aWi.show(), this.resize(), this.eq()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aaH.resize()
	}, this.eq = function() {
		8 === ab.a5P() && (bg.aba() ? aaI[2].tz === bE.qf && aaI[2].u2(0) : aaI[2].tz !== bE.qf && aaI[2].u2(bE.qf), aE.hu || aE.hv || !aN.tK(aE.fV) ? aaI[1].tz !== bE.qf && aaI[1].u2(bE.qf) : aaI[1].tz === bE.qf && aaI[1].u2(0), aE.hu || aE
			.hv || !ax.ig(aE.fV) ? aaI[0].tz !== bE.qf && aaI[0].u2(bE.qf) : aaI[0].tz === bE.qf && aaI[0].u2(0))
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aaI = [new x(L(533), function() {
		abV(0)
	}), new x(L(423), function() {
		u.v(16)
	}), new x(L(470), function() {
		u.v(17)
	}), new x(L(534), function() {
		u.z.aZ0()
	}, 0, 0, 1), new x(L(496), function() {
		u.v(3, 1)
	}), new x(L(535), function() {
		u.v(18)
	}), new x(L(486), function() {
		u.v(31)
	}), new x(L(536), function() {
		u.z.a9C(2)
	}), new x(L(502), function() {
		abV(1)
	}), new x("🔒 " + L(494), function() {
		u.v(32)
	}), new x(L(537), function() {
		var a7X, qJ;
		(a7X = []).push(["Wiki", (qJ = "https://territorial.io/") + "wiki/gold"]), a7X.push(["Team Games", qJ + "log/team"]), a7X.push(["Battle Royale Games", qJ + "log/br"]), a7X.push(["1v1 Games", qJ + "log/1v1"]), a7X.push([
			"Zombie Games", qJ + "log/zombies"
		]), a7X.push(["Transactions", qJ + "log/transactions"]), a7X.push(["Changelog", qJ + "changelog"]), 2 !== a1.id && a7X.push(["Android App", bN.aIE]), 1 !== a1.id && a7X.push(["iOS App", bN.a5L]), 0 === a1.id && a7X.push([
			"Patreon", bN.aY4
		]), a7X.push(["Terms", bN.abb]), a7X.push(["Privacy", bN.abc]), u.v(4, 1, new w(L(537), bD.th.a7W(a7X), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(538), function() {
		u.v(4, 1, new w(L(538), m.eC + "<br>" + b1.z.aXA("/changelog"), !0, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(539), function() {
		u.v(4, 1, new w(L(539), L(546) + "<br>" + L(547), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(548), function() {
			a1.a2.a5F(), u.v(1)
		})]))
	}), new x("👁️ " + L(540), function() {
		a1.a2.a5G(), u.v(4, 1, new w(L(549), L(550) + " " + b1.z.aXA("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], z0 = [new x("⬅️ " + L(49), function() {
		u.z.aHu()
	})], 8 === ab.a5P() && (aaI.unshift(new x(L(409), function() {
		u.v(30)
	})), aaI.unshift(new x(L(543), function() {
		bg.aba() && (u.y(), bh.a6N(), bi.e2 = !0)
	}, 0, 1)), aaI.unshift(new x(L(544), function() {
		aE.hu || aE.hv || !aN.tK(aE.fV) || (bB.iD.sQ(), u.y(), aN.hw && aN.a6N())
	}, 0, 1)), aaI.unshift(new x(L(545), function() {
		aE.hu || aE.hv || !ax.ig(aE.fV) || (bY.a9s(2), bB.iD.ia(), u.y(), aN.hw && aN.a6N())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eC && aaI.push(new x(L(541), function() {
		a1.a2.a5H()
	})), aWi = new yz(L(542), z0), aaH = new uG(aaI, aWi.z4)
}

function aWb() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.sResourcesType && bD.tp.a6w(aY8.zU(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(404), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(362), L(363), L(364)],
			value: aE.data.sResourcesType
		}, function(eU) {
			aYB(), 2 !== eU || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fi)), aE.data.sResourcesType = eU, u.v(28)
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW;
		1 === aE.data.sResourcesType && ((xW = new tM).tP("Value"), xW.tZ(new uU({
			eU: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.j0(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tc.push(xW))
	}(tc), function(tc) {
		var xW;
		2 === aE.data.sResourcesType && ((xW = new tM).tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.sResourcesData, 2)), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWZ() {
	var aY6, aY7, aY8, tc;

	function aY9() {
		aYB(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aWh()[19] = null, u.a5O()
	}

	function aYB() {
		2 === aE.data.tIncomeType && bD.tp.a6w(aY8.zU(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aY6.show(), this.resize()
	}, this.ug = function() {
		aY6.ug()
	}, this.resize = function() {
		aY6.resize(), aY7.resize()
	}, this.a6K = function(ev) {
		2 === ev && aY6.z5[0].ty()
	}, aY6 = new yz(L(402), [new x("⬅️ " + L(49), aY9)]), aY7 = new ta(aY6.z4, (function(tc) {
		var xW = new tM;
		xW.tP(L(361)), xW.tW(new yv({
			vZ: [L(362), L(363), L(364)],
			value: aE.data.tIncomeType
		}, function(eU) {
			aYB(), 2 !== eU || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fi), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eU, u.v(26)
		})), tc.push(xW)
	}(tc = []), function(tc) {
		var xW;
		1 === aE.data.tIncomeType && ((xW = new tM).tP("Value"), xW.tZ(new uU({
			eU: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.j0(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tc.push(xW))
	}(tc), function(tc) {
		var xW;
		2 === aE.data.tIncomeType && ((xW = new tM).tP("Data"), (aY8 = new zM(0, 1, 0, 1)).zT(bD.pf.a8Z(aE.data.tIncomeData, 4)), xW.tZ(aY8), tc.push(xW))
	}(tc), tc))
}

function aWR() {
	var aWi, aWj, tc;
	this.show = function() {
		aWi.show(), this.resize()
	}, this.ug = function() {
		aWi.ug()
	}, this.resize = function() {
		aWi.resize(), aWj.resize()
	}, this.a6K = function(ev) {
		2 === ev && aWi.z5[0].ty()
	}, aWi = new yz(L(535), [new x("⬅️ " + L(49), function() {
		u.a5O()
	})]), aWj = new ta(aWi.z4, ((tc = []).push(function() {
		function aXG() {
			abD.button.textContent = L(233), abf.e.readOnly = !1, abg.e.readOnly = !1, aXF.u2(1), aXF.button.style.color = bE.qT
		}
		var xW = new tM,
			abe = (xW.tU(b1.z.aXA("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xW.tP(L(551)), new uU({
				value: bm.buffer.data[105].value,
				eU: -1
			})),
			abf = (abe.e.readOnly = !0, xW.tZ(abe), xW.tP(L(448), "0.8em"), new uU(bm.buffer.data[148], 0, void 0, function(e) {
				aXE(bm.buffer.data[149].value, e.target.value)
			})),
			abg = (xW.tZ(abf), xW.tP(L(452), "0.8em"), new uU(bm.buffer.data[149], 1, void 0, function(e) {
				aXE(e.target.value, bm.buffer.data[148].value)
			})),
			abD = (xW.tZ(abg), new x(L(233), function(e) {
				return e.textContent === L(233) ? (e.textContent = L(171), abf.e.readOnly = !0, abg.e.readOnly = !0, aXF.u2(0), aXF.button.style.color = bE.rZ, bm.s0.q6(149, abg.e.value), aXE(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aXG(), !0
			})),
			aXF = (xW.tZ(new us([abD.button])), new x(L(21), function(e) {
				var pb, gD;
				return abf.e.readOnly && b1.z.er(0) && (pb = bm.buffer.data[148].value, gD = parseInt(bm.buffer.data[149].value, 10), u.aW9.send(gD, pb, function() {
					bD.th.ys(e), aXG(), b1.aXH.aXI({
						action: 0,
						pj: pb,
						value: gD
					})
				})), !0
			}, 1)),
			tR = xW.tQ(),
			aXE = (xW.tQ(L(552)).style.fontWeight = "bold", function(gD, pb) {
				tR.innerHTML = u.z.aXJ(gD, bm.buffer.data[105].value, pb)
			});
		return xW.tZ(new us([aXF.button])), aXE(bm.buffer.data[149].value, bm.buffer.data[148].value), xW
	}()), tc))
}

function c5() {
	"function" != typeof Math.log2 && (Math.log2 = function(fs) {
		return Math.log(fs) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fs) {
		return Math.log(fs) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fs) {
		return 0 < fs ? 1 : fs < 0 ? -1 : 0
	})
}

function cr() {
	var aEm, abi, abj, abk, abh = !1;

	function abl() {
		abh = !0, aEm = -1, abi = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) abi[aC] = !1;
		var a1R = Math.floor(1 + .02 * i.min);
		abj = new Array(4), (abk = new Array(4))[1] = abk[3] = abj[0] = abj[2] = 0, abk[0] = abj[3] = -a1R, abj[1] = abk[2] = a1R
	}

	function abm() {
		if (-1 !== aEm)
			if (0 !== aE.a48 && aI.oU()) {
				for (var abn = !1, aC = 3; 0 <= aC; aC--) abi[aC] && (abn = !0, jS += abj[aC], jT += abk[aC], ag.a5m(abj[aC], abk[aC]), aT.aES());
				abn ? bi.e2 = !0 : at.oK()
			} else at.oK()
	}
	this.a6I = function(eU) {
		0 !== aE.a48 && aI.oU() && (abh || abl(), abi[eU] = !0, -1 === aEm) && (aEm = setInterval(abm, 20), abm())
	}, this.a6L = function(eU) {
		if (0 !== aE.a48 && (abh || abl(), abi[eU] = !1, -1 !== aEm)) {
			for (var abn = !1, aC = 3; 0 <= aC; aC--) abn = abn || abi[aC];
			abn || this.oK()
		}
	}, this.oK = function() {
		if (abh && -1 !== aEm) {
			for (var aC = 3; 0 <= aC; aC--) abi[aC] = !1;
			clearInterval(aEm), aEm = -1
		}
	}
}

function cs() {
	this.z = new abo, this.nT = new abp, this.ry = new abq, this.aJI = new abr, this.es = new abt, this.aXH = new abu, this.sj = new abv, this.aZU = new abw, this.aBA = new abx, this.aby = new abz, this.ac0 = new ac1, this.ac2 = new ac3, this.ac4 =
		new ac5, this.dv = function() {
			this.z.dv()
		}
}

function abo() {
	var ac7, ac8;
	this.aMm = 4, this.ac6 = null, this.a5X = 0, this.fJ = 0;

	function acH() {
		return 0 === aa.aMi ? m.eH ? 1 : 0 : aa.aMi - 1
	}

	function acJ(od, a5U, acI) {
		ac8[od].abh = !0, acD(od), ac7[od] = new acM, ac7[od].dv(od, a5U, acI)
	}

	function acK(aC) {
		return ac8[aC].abh && ac7[aC].acK()
	}

	function acD(od) {
		ac8[od].el = bi.el, ac8[od].acA = !1
	}
	this.dv = function() {
		this.ac6 = new Array(this.aMm), this.ac6[0] = "territorial.io", this.ac6[1] = "1.territorial.io", this.ac6[2] = "4.territorial.io", this.ac6[3] = "5.territorial.io", ac7 = new Array(this.aMm), ac8 = new Array(this.aMm);
		for (var aC = this.aMm - 1; 0 <= aC; aC--) ac8[aC] = {
			abh: !1,
			el: 0,
			acA: !1
		};
		this.aMn(0, 0, 0)
	}, this.acB = function(aC) {
		return ac7[aC]
	}, this.eq = function() {
		for (var aC = this.aMm - 1; 0 <= aC; aC--) this.er(aC) && bi.el > ac8[aC].el + 15e3 && (b1.ry.acC(aC, ac8[aC].acA), acD(aC));
		!this.er(0) && bi.el > ac8[0].el + 8e3 && (ac8[0].el = bi.el, this.aMn(0, 0, 0))
	}, this.aZR = function(id) {
		return this.aMn(0, id, 0) && this.acE(0)
	}, this.acF = function(acG) {
		return acG ? aa.aMj : acH()
	}, this.a4f = function() {
		return acH() ? "game.territorial.io" : "territorial.io"
	}, this.aXA = function(a47) {
		a47 = this.a4f() + a47;
		return "<a href='https://" + a47 + "' target='_blank'>" + a47 + "</a>"
	}, this.aMn = function(od, a5U, acG) {
		acG = this.acF(acG);
		if (ac8[od].abh) {
			if (ac7[od].acK()) return ac7[od].acL(a5U), ac7[od].er();
			ac7[od].ug()
		}
		return acJ(od, a5U, acG), !1
	}, this.acN = function(od, a5U) {
		console.log("Connection to Server " + od), b1.es.acO(od)
	}, this.acE = function(aC) {
		return this.er(aC) && ac7[aC].acE()
	}, this.acP = function(aC) {
		ac7[aC].acP()
	}, this.er = function(aC) {
		return ac8[aC].abh && ac7[aC].er()
	}, this.send = function(od, aD) {
		0 !== od && acD(od), ac7[od].send(aD)
	}, this.a63 = function(od) {
		8 === ab.a5P() && (ac8[od].acA = !0, b1.nT.acQ = !0)
	}, this.close = function(od, acR) {
		acK(od) && ac7[od].close(acR)
	}, this.aNN = function(od, acR) {
		p.a5b(acR), acK(od) && ac7[od].close(acR)
	}, this.a5c = function(acR) {
		for (var aC = this.aMm - 1; 0 <= aC; aC--) this.close(aC, acR)
	}, this.acS = function(od, acR) {
		for (var aC = this.aMm - 1; 0 <= aC; aC--) aC !== od && this.close(aC, acR)
	}, this.a9A = function() {
		0 === this.a5X && (aE.lT || aE.hu) || this.close(this.a5X, 3246)
	}, this.acT = function(od, e) {
		ac7[od].ug(), p.a5M(od, e.code)
	}
}

function abp() {
	this.acQ = !1, this.eq = function() {
		bi.l6() % 250 != 249 || aE.hu || aE.hv || (b1.es.acU(+(this.acQ && ah.nl[aE.fV]), am.lf + bQ.z.mz), this.acQ = !1)
	}
}

function abx() {
	this.aNP = function(od, aD) {
		bK.dv(aD), 0 === bK.size ? b1.z.aNN(od, 3205) : ((0 === bK.sk(1) ? function(od) {
			var acZ = bK.sk(6);
			0 === acZ ? function(od) {
					if (0 === od && 8 !== ab.a5P()) {
						u.z.aas();
						for (var acr = bK.sk(12), acs = bK.sk(6), h = new Array(acr), aC = 0; aC < acr; aC++) h[aC] = bK.sk(acs);
						aU.aEs(h)
					}
				}(od) : 2 === acZ ? b1.aby.acb(od) : 3 === acZ || 4 === acZ ? ay.dv() : 5 === acZ ? b1.ac0.acc() : 9 === acZ ? b1.ac0.acd(od) : 10 === acZ ? b1.ac2.ace() : 11 === acZ ? b1.ac0.acf(od) : 12 === acZ ? b1.ac2.acg() :
				13 === acZ ? b1.ac4.ach() : 14 === acZ ? b1.ac4.aci() : 15 === acZ ? b1.ac0.acj() : 16 === acZ ? b1.aby.ack(od) : 17 === acZ ? b1.aby.acl(od) : 19 === acZ ? b1.aby.acm(od) : 20 === acZ ? b1.ac0.acn(od) : 21 !== acZ &&
				22 !== acZ && (23 === acZ ? b1.ac0.aco(od) : 24 === acZ ? b1.aby.acp(od) : 25 === acZ && b1.ac2.acq())
		} : function(od) {
			if (8 !== ab.a5P() && !ay.aNR(od, bK.aD)) return;
			if (od !== b1.z.a5X) b1.z.aNN(od, 3244);
			else if (0 === bK.sk(1)) bi.a4N.act(bK.aD);
			else {
				var aC, od = bK.sk(2);
				if (0 === od) {
					var sL, ry = bK.sk(9);
					0 !== ah.nl[ry] && 0 !== ah.nl[aE.fV] && (sL = bK.sk(10), aO.sK(ry, aE.fV, sL), ag.tI(ry, 1, sL))
				} else if (1 === od) ! function() {
					var ry = bK.sk(9);
					0 !== ah.nl[ry] && 0 !== ah.nl[aE.fV] && b6.aSD(0, [ry], !0) && aO.sc(ry, 1)
				}();
				else if (2 === od) ! function() {
					var ry = bK.sk(9),
						target = bK.sk(9);
					0 !== ah.nl[ry] && 0 !== ah.nl[target] && 0 !== ah.nl[aE.fV] && b6.aSD(1, [ry], !0) && (ag.tI(ry, 3, 96), ag.tI(target, 4, 96), aO.aBH(ry, target))
				}();
				else if (m.aA && !m.aB) {
					var fl = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fl = Math.min(bB.ru.sm.length, 540), aC = 0; aC < fl; aC++) bG.acz(32, bB.ru.sm[aC]);
					b1.z.send(b1.z.a5X, bG.aD)
				}
			}
		})(od), bi.acY())
	}
}

function ac3() {
	this.ace = function() {
		bm.z.a09(), bm.s0.q6(105, bI.fC.vs(bI.fC.vt(5))), bm.s0.q6(106, bI.fC.vs(bI.fC.vt(15))), bm.s0.q6(109, 0), bm.s0.q6(108, bm.buffer.data[109].value), bm.s0.q6(111, bm.buffer.data[109].value + 1), bm.s0.q6(107, 0), bm.s0.q6(110, "")
	}, this.acq = function() {
		var id = bK.sk(8),
			pb = bJ.a0f.a0u(7);
		0 === id && (bm.z.a0E(pb, bm.buffer.data[106].value), new aUW(L(553, [pb])))
	}, this.acg = function() {
		var data;
		bK.size < bG.ad0(29) ? b1.z.aNN(0, 3254) : ((data = {
			vp: bK.sk(30),
			a0O: bK.sk(16),
			a0P: bK.sk(30),
			a0Q: bK.sk(30),
			a0R: bK.sk(30),
			a0S: bK.ad1(32),
			username: bJ.a0f.a0u(5),
			a0T: bJ.a0f.a0u(3),
			a0U: bJ.a0f.a0u(3),
			a0V: bK.ad1(32),
			a0W: bK.ad1(32),
			a0X: bK.sk(30),
			a0Y: bK.ad1(32),
			a0Z: bK.ad1(32),
			a0a: bK.ad1(32),
			a0b: bK.ad1(32),
			aXZ: bK.ad1(32),
			aXa: bK.ad1(30),
			aXw: bK.ad1(32),
			aXx: bJ.a0f.a0u(3),
			aXq: bK.ad1(2),
			aXs: bK.ad1(10),
			aXo: bJ.a0f.a0u(8),
			aXr: bK.ad1(5),
			aXC: bK.sk(30),
			aXR: bK.sk(30),
			a4j: bK.ad1(32),
			aXe: bK.sk(3),
			aXd: bK.sk(8),
			aXX: bK.sk(30),
			aXY: bK.ad1(32),
			aXc: bK.sk(1),
			aXk: bJ.a0f.a0u(6),
			aXf: bK.sk(1),
			aXg: bK.sk(1),
			aXS: bK.sk(16),
			aXT: bK.sk(5),
			aXU: bK.sk(1),
			ad2: bK.sk(1),
			aXV: bK.sk(23),
			aXM: bK.sk(30),
			aXy: bK.sk(1),
			aXz: bK.sk(1)
		}).aXy && (data.aY0 = bK.ad1(32), data.aY1 = bK.sk(30), data.aY2 = bK.sk(30), data.aY3 = bK.sk(1)), data.ad2 && (data.aXV = -data.aXV), 8 === u.vq && (25 === u.a5T().aZQ ? (data.aWk = !0, u.z.aWO = data, u.a5T().aHt(25, !1)) : (
			data.aWk = !1, bm.s0.q6(160, +(data.aXy && data.aY3)), data.pj = bm.buffer.data[105].value, u.z.aWL = data, bm.s0.a0N(data), u.a5T().aHt(16, !0))))
	}
}

function ac5() {
	this.ach = function() {
		var aC;
		if (bK.size < bG.ad0(23)) b1.z.aNN(0, 3259);
		else {
			var w7 = bK.sk(6),
				fl = bK.sk(10),
				data = [];
			if (9 === w7 || 10 === w7 || 11 === w7 || 13 === w7) {
				for (aC = 0; aC < fl; aC++) data.push([bK.sk(30), bJ.a0f.a0u(5), bK.ad1(32), 0, bK.sk(30)]);
				8 === u.vq && u.a5T().aHt(21, !0, {
					w7: w7,
					data: data
				})
			} else if (12 === w7) {
				for (aC = 0; aC < fl; aC++) data.push([bK.sk(20), bK.sk(30), bK.sk(30), bK.ad1(32), bK.sk(30), bJ.a0f.a0u(5), bJ.a0f.a0u(5)]);
				8 === u.vq && u.a5T().aHt(21, !0, {
					w7: w7,
					data: data
				})
			} else {
				var ip = bK.sk(16);
				if (bK.ad3(39 + 16 * ip + fl * (0 === w7 ? 111 : 1 === w7 ? 101 : 2 === w7 || 3 === w7 ? 127 : 212))) {
					if (0 === w7)
						for (aC = 0; aC < fl; aC++) data.push([bK.sk(30), bJ.a0d.a0h(bK.sk(5)), bK.sk(16), bK.sk(30), bK.sk(30)]);
					else if (1 === w7)
						for (aC = 0; aC < fl; aC++) data.push([bK.sk(16), bJ.a0d.a0h(bK.sk(3)), bK.sk(16), bJ.a0d.a0h(bK.sk(5)), bK.sk(31), bK.sk(30)]);
					else if (2 === w7 || 3 === w7)
						for (aC = 0; aC < fl; aC++) data.push([bK.sk(30), bJ.a0d.a0h(bK.sk(5)), bK.ad1(32), bK.sk(30), bK.sk(30)]);
					else
						for (aC = 0; aC < fl; aC++) data.push([bK.sk(20), bK.sk(30), bK.sk(30), bK.sk(30), bK.sk(30), bK.ad1(32), bK.sk(30), bJ.a0d.a0h(bK.sk(5)), bJ.a0d.a0h(bK.sk(5))]);
					8 === u.vq && u.a5T().aHt(21, !0, {
						w7: w7,
						data: data
					})
				} else b1.z.aNN(0, 3260)
			}
		}
	}, this.aci = function() {
		if (bK.size < bG.ad0(29)) b1.z.aNN(0, 3265);
		else {
			var ad4 = bK.sk(4),
				ad5 = bK.sk(7),
				ad6 = bK.sk(11);
			if (bK.ad3(29 + 16 * ad5 + 16 * ad6 + 11 * ad4)) {
				for (var data = [], aC = 0; aC < ad4; aC++) {
					for (var a4z = bJ.a0d.a0h(bK.sk(3)), ad7 = bK.sk(8), aYa = [], g4 = 0; g4 < ad7; g4++) aYa.push(bK.sk(16));
					data.push({
						name: "[" + a4z + "]",
						aYa: aYa
					})
				}
				8 === u.vq && u.a5T().aHt(23, !0, data)
			} else b1.z.aNN(0, 3266)
		}
	}
}

function abz() {
	function adB() {
		var id = bK.sk(3);
		return 0 === id ? {
			id: id,
			pj: bK.sk(30),
			pk: adC(),
			s: bJ.a0f.a0u(8)
		} : 1 === id ? {
			id: id,
			pj: bK.sk(30),
			pk: adC(),
			aJp: bK.sk(3),
			value: bK.sk(30),
			target: bK.sk(30),
			pl: adC()
		} : 2 === id ? {
			id: id,
			pj: bK.sk(30),
			pk: adC(),
			aJp: bK.sk(3)
		} : 3 === id ? {
			id: id,
			pj: bK.sk(30),
			pk: adC(),
			aJp: bK.sk(3),
			value: bK.sk(4),
			target: bK.sk(30),
			pl: adC()
		} : 4 === id ? {
			id: id,
			pj: bK.sk(30),
			pk: adC(),
			aJp: bK.sk(3),
			target: bK.sk(30),
			pl: adC(),
			aJr: bK.sk(1)
		} : 5 === id ? {
			id: id,
			aJp: bK.sk(6)
		} : 6 === id ? {
			id: id,
			value: bK.sk(17)
		} : null
	}

	function adC() {
		return bK.sk(1) ? bJ.a0f.a0u(5) : null
	}
	this.acb = function(od) {
		if (od !== b1.z.fJ) b1.z.close(od, 3239);
		else if (6 !== ab.a5P()) b1.z.close(od, 3271);
		else {
			bq.dv(), bq.z.wd = bK.sk(10), bq.tc.aJC();
			for (var playerCount = bK.sk(16), g4 = 0; g4 < playerCount; g4++) bq.pr.aIc(bK.sk(30), bJ.a0f.a0u(5), bK.sk(4), bK.sk(30), bK.sk(7), bK.sk(16), bK.sk(18), bK.sk(11), bK.sk(12), bK.sk(6), bK.sk(13), bK.sk(1));
			u.v(29), bq.z.aKK(!0)
		}
	}, this.ack = function(od) {
		if (od !== b1.z.fJ) b1.z.close(od, 3239);
		else if (bq.fI) {
			bq.z.aKJ[0] = bK.sk(20), bq.z.aKJ[1] = bK.sk(20);
			for (var ad8 = bK.sk(20), g4 = 0; g4 < ad8; g4++) {
				var id = bK.sk(3);
				0 === id ? bq.pr.aIc(bK.sk(30), bJ.a0f.a0u(5), 0, 1234566, 127, 0, bK.sk(18), 0, bK.sk(12), 0, 0, 0) : 1 === id ? bq.pr.aIw(bK.sk(16), bK.sk(16), bK.sk(13), bK.sk(1)) : 2 === id ? bq.pr.aIs(bK.sk(16), bJ.a0f.a0u(5)) : 3 === id ?
					bq.pr.aIu(bK.sk(16)) : 4 === id ? bq.pr.aIl(bK.sk(16), bK.sk(4), bK.sk(30), bK.sk(7), bK.sk(16), bK.sk(11), bK.sk(18)) : 5 === id ? bq.pr.aIn(bK.sk(16), bK.sk(1)) : 6 === id && bq.pr.aIm(bK.sk(16), bK.sk(6))
			}
			bq.z.wd = bK.sk(10);
			for (var ad9 = bK.sk(10), aC = 0; aC < ad9; aC++) {
				var y0 = bK.sk(13),
					aan = bK.sk(10),
					aJ0 = bK.sk(10),
					aIK = bq.z.aIK;
				if (aIK.aJ0 = aJ0, aIK.a5X = bK.sk(10), aIK.aJe = bK.sk(10), aIK.fR = bK.sk(6), aIK.mapSeed = bK.sk(14), aIK.xH = bK.sk(4), aIK.xi = bK.sk(1), aIK.spawningSeed = bK.sk(14), aIK.a4g = bK.sk(30) - 1, aIK.aJ1 = null, 8 === aIK.xH) {
					aIK.aJ1 = new Array(aJ0);
					for (g4 = 0; g4 < aJ0; g4++) aIK.aJ1[g4] = bK.sk(9)
				}
				y0 = bq.pr.aIx(y0);
				if (bq.aIK.e3(y0, aan, aJ0)) return;
				bq.pr.aJ3(y0, aan, aJ0, aIK.aJ1)
			}
			var adA = bK.sk(13);
			adA && bq.pr.aJ6(adA), bq.tc.aJC(), bq.z.aJS()
		} else b1.z.close(od, 3251)
	}, this.acp = function(od) {
		od === b1.z.fJ && bq.fI && bq.tc.aJL(bK.sk(13), bK.sk(1))
	}, this.acl = function(od) {
		if (od !== b1.z.fJ) b1.z.close(od, 3272);
		else if (bq.fI) {
			for (var pz = bq.z.pz, yF = (bq.z.q0 = bK.sk(20), bK.sk(6)), aC = 0; aC < yF; aC++) {
				var aMB = adB();
				bq.px.aMA(aMB), bq.px.aMG(aMB), pz.push(aMB)
			}
			pz.length > bq.z.q8 && pz.splice(0, pz.length - bq.z.q8), bq.z.aKR()
		} else b1.z.close(od, 3273)
	}, this.acm = function(od) {
		var aMB;
		od !== b1.z.fJ ? b1.z.close(od, 3276) : bq.fI ? (aMB = adB(), bq.px.aMA(aMB), bq.message.aJE(aMB)) : b1.z.close(od, 3277)
	}
}

function ac1() {
	this.acc = function() {
		for (var id = bK.sk(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sk(8), bK.sk(8), bK.sk(8)]);
		var ex = bJ.a0f.a0u(8);
		bX.ee.eu({
			id: id,
			colors: colors,
			ex: ex
		})
	}, this.acn = function(od) {
		var adD = bK.sk(3),
			fo = bK.sk(5),
			fo = bl.adE.adF(fo, bK.sk(30), bK.sk(30), bK.sk(30));
		b1.es.adG(od, fo, adD, 0)
	}, this.acd = function(od) {
		this.acn(od), bm.s0.q6(183, bI.fC.vs(bI.fC.vt(15))), 0 === od && 0 === bm.buffer.data[105].value.length ? b1.es.et(0) : b1.aXH.adH(od), 4 === b1.z.acB(od).adI() ? 6 === ab.a5P() && b1.aJI.aMo(od) : 5 !== b1.z.acB(od).adI() || 8 !== ab
			.a5P() && 10 !== ab.a5P() || b1.ry.aNI()
	}, this.acf = function(od) {
		var id = bK.sk(6);
		1 === id ? (bm.s0.q6(160, bK.sk(30)), b1.z.acP(od), aU.aEo || b1.es.et(1), bA.aHp(), 8 === u.vq && u.a5T().aZd()) : 21 === id ? 8 === u.vq && u.a5T().aHt(17) : 22 === id && (bm.s0.q6(106, bm.buffer.data[110].value), bm.s0.q6(110, ""),
			8 === u.vq) && u.a5T().aHt(15)
	}, this.acj = function() {
		var fl = bK.sk(16),
			adJ = bK.sk(16);
		if (bK.ad3(55 + 10 * fl + 16 * adJ)) {
			for (var h = [], aC = 0; aC < fl; aC++) h.push(bJ.a0d.a0h(bK.sk(10)));
			bA.aHs(h)
		} else b1.z.aNN(0, 3270)
	}, this.aco = function(od) {
		for (var adD = bK.sk(3), fo = bK.sk(5), adD = {
				adD: adD,
				uE: bl.adE.adF(fo, bK.sk(30), bK.sk(30), bK.sk(30))
			}, fo = bK.ad1(32), adK = [], aC = 0; aC < 17; aC++) adK.push(new Uint8Array(bK.sk(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = adK[aC], fl = h.length, ij = 0; ij < fl; ij++) h[ij] = bK.ad1(8);
		bx.show(adK, fo, od, adD)
	}
}

function abq() {
	this.acC = function(od, acA) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, acA ? 1 : 0), bG.a9(3, 0 === aE.a48 ? bq.fI ? 6 : 0 : aE.hu ? 1 : aE.lT ? 7 : aE.lR < 7 ? 2 : 8 === aE.lR ? 4 : 9 === aE.lR ? 5 : 3), b1.z.send(od, bG.aD)
	}, this.aNI = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fJ), bG.a9(10, ay.aJe), bG.a9(10, ay.aN6), bG.a9(10, m.eJ), bG.a9(14, m.e7), b1.z.send(b1.z.a5X, bG.aD)
	}, this.rz = function(fX) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fX), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s1 = function(jR, kI) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jR), bG.a9(10, kI), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s5 = function(jR, s3) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jR), bG.a9(9, s3), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s7 = function(jR, s6) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jR), bG.a9(27, s6), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sB = function(jR, o9) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jR), bG.a9(16, o9), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sH = function(o9, s6) {
		bG.a8(48), bG.a9(1, 1), bG.a9(4, 11), bG.a9(16, o9), bG.a9(27, s6), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sJ = function(kI) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kI), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sN = function(eU) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eU), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sP = function(sO) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sO), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sR = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sS = function(jR, fX, kI) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jR), bG.a9(10, kI), bG.a9(22, fX), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sa = function(adL, adM) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, adM), bG.a9(10, adL), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sd = function(aBA) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aBA), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sh = function(adN, target) {
		var aC, fl = adN.length;
		for (bG.a8(14 + 9 * fl), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fl; aC++) bG.a9(9, adN[aC]);
		b1.z.send(b1.z.a5X, bG.aD)
	}
}

function abu() {
	this.adO = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.es.adP(), b1.z.send(0, bG.aD)
	}, this.adH = function(od) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.fC.a0t(bm.buffer.data[105].value, 5), bJ.fC.a0t(bm.buffer.data[106].value, 15), b1.z.send(od, bG.aD)
	}, this.aZe = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.fC.a0t(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aXm = function(a89) {
		var fl = a89.pb.length;
		bG.a8(21 + 16 * fl), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a89.action), bG.a9(8, fl), bI.a0d.a0s(a89.pb), b1.z.send(0, bG.aD)
	}, this.abE = function(a0S, colors, adR, ex) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a0S, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var g4 = 0; g4 < 3; g4++) bH.a9(8, colors[aC][g4]);
		a0S = bA.data.aHw(adR.trim());
		bH.a9(8, -1 === a0S ? 255 : a0S), bI.a0f.a3Y(ex.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.adS())
	}, this.aXN = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.fC.a0t(data.pj, 5), b1.z.send(0, bG.aD)
	}, this.aXI = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.fC.a0t(data.pj, 5), bG.acz(32, data.value), b1.z.send(0, bG.aD)
	}
}

function abv() {
	this.si = function() {
		for (var fl = aE.l9, a3t = bU.result.a3t, m4 = a3t.length, a4s = (bG.a8(17 + 16 * fl + 33 * m4), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, m4), bG.a9(1, +(2 === aE.a46)), bG.a9(1, aE.a4W % 2), ah.a4s), aC = 0; aC < fl; aC++) bG.a9(16, a4s[
		aC]);
		for (var hZ = ah.hZ, aC = 0; aC < m4; aC++) {
			var hJ = a3t[aC];
			bG.a9(9, hJ), bG.a9(24, hZ[hJ])
		}
		b1.z.send(b1.z.a5X, bG.aD)
	}
}

function abw() {
	this.aZV = function(w7, w8, w9) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, w7), bG.a9(1, +(w8 < 0)), bG.a9(1, +(w9 < 0)), bG.a9(30, Math.abs(w8)), bG.a9(30, Math.abs(w9)), b1.z.send(0, bG.aD)
	}, this.aZW = function(w7, aZX, aZY) {
		bG.a8(18 + 16 * aZX.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, w7), b1.es.adT(aZX), bG.a9(30, aZY), b1.z.send(0, bG.aD)
	}, this.aZb = function(w7, aZX, aZY) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, w7), bJ.fC.a0t(aZX, 5), bG.a9(30, aZY), b1.z.send(0, bG.aD)
	}, this.aZZ = function(aYZ, a4y) {
		for (var fl = a4y.length, ip = 0, aC = 0; aC < fl; aC++) ip += a4y[aC].length;
		for (bG.a8(21 + 3 * fl + 16 * ip), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aYZ), bG.a9(4, fl), bG.a9(7, ip), aC = 0; aC < fl; aC++) bG.a9(3, a4y[aC].length), bI.a0d.a0s(a4y[aC]);
		b1.z.send(0, bG.aD)
	}, this.aZa = function(aYZ, w8, w9) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aYZ), bG.a9(1, +(w8 < 0)), bG.a9(1, +(w9 < 0)), bG.a9(20, Math.abs(w8)), bG.a9(20, Math.abs(w9)), b1.z.send(0, bG.aD)
	}
}

function abr() {
	this.aMo = function(od) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eJ), b1.es.adT(username), bD.color.a7C(bm.z.a0H()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fJ = od, b1.z.send(od, bG.aD)
	}, this.aJJ = function(adU, a89) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, adU), 2 === adU ? bH.a9(30, a89) : 4 === adU ? (bH.a9(13, a89.y0), bH.a9(1, a89.y3)) : 3 === adU ? bI.a0f.a3Y(a89, 8, bH) : 5 === adU ? (bH.a9(3, a89.id), bH.a9(3, a89.value), bH.a9(30, a89
			.pj)) : 6 === adU && (bH.a9(2, a89.xH), bH.a9(30, a89.pj)), b1.z.send(b1.z.fJ, bH.adS())
	}
}

function abt() {
	this.acO = function(od) {
		var adb;
		bG.a8(55 + bl.adV.sk()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e7), bG.a9(4, a1.id), bG.a9(7, a1.eC), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), adb = bA.aHv(), bG.a9(8, adb[0]), bG.a9(8, adb[1]), bl.adV
		.a3Y(), b1.z.send(od, bG.aD)
	}, this.adG = function(od, uE, adD, adX) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, adD), bG.a9(30, uE), bG.a9(30, adX), b1.z.send(od, bG.aD)
	}, this.fK = function(fF) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 6), bI.a0f.a3Y(fF, 16, bH), b1.z.send(b1.z.fJ, bH.adS())
	}, this.et = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.ya = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aHr = function(id, pb) {
		var fl = Math.min(pb.length, 63);
		bG.a8(19 + 16 * fl), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fl), bI.a0d.a0s(pb), b1.z.send(0, bG.aD)
	}, this.adY = function(aar, qA) {
		bG.a8(7 + 26 * qA.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < qA.length; aC++) bG.a9(16, qA[aC][0]), bG.a9(10, qA[aC][1]);
		b1.z.send(aar, bG.aD)
	}, this.acU = function(adZ, ada) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, adZ), bG.a9(12, ada), b1.z.send(b1.z.a5X, bG.aD)
	}, this.adT = function(username) {
		bG.a9(5, username.length), bI.a0d.a0s(username)
	}, this.pM = function(pN, ou, od, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.adD), bG.a9(30, pow.uE), bG.acz(32, ou), bG.a9(16, pN), b1.z.send(od, bG.aD)
	}
}

function acM() {
	var adc, add, b, ade = ["wss://", "/s50/", "/s51/", "/s52/"],
		adf = 0;

	function acN() {
		b1.z.acN(adc, add)
	}

	function adi(e) {
		b1.aBA.aNP(adc, new Uint8Array(e.data))
	}

	function adj() {}

	function acT(e) {
		b1.z.acT(adc, e)
	}
	this.dv = function(eU, a5U, acI) {
		adc = eU, add = a5U,
			function(acI) {
				acI = m.e8 ? "ws://localhost:" + (7130 + adc) + "/" : acI ? ade[0] + "game.territorial.io/x0" + adc + "/" : ade[0] + b1.z.ac6[adc] + ade[1 + m.e6];
				(b = new WebSocket(acI)).binaryType = "arraybuffer", b.onopen = acN, b.onmessage = adi, b.onclose = acT, b.onerror = adj
			}(acI)
	}, this.adh = function() {
		return b.readyState === b.CONNECTING
	}, this.er = function() {
		return b.readyState === b.OPEN
	}, this.acE = function() {
		return adf
	}, this.acP = function() {
		adf = 1
	}, this.acK = function() {
		return this.adh() || this.er()
	}, this.acL = function(a5U) {
		add = a5U
	}, this.adI = function() {
		return add
	}, this.send = function(aD) {
		this.er() && b.send(aD)
	}, this.close = function(acR) {
		this.acK() && (this.ug(), b.close(acR))
	}, this.ug = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dV() {
	var gap, adk = !1,
		xI = 0,
		j = 0,
		vv = 0,
		canvas = null,
		p9 = null,
		a6l = null;

	function ado() {
		for (var aC = aE.a1G; 0 <= aC; aC--) a6l[aC] = 0;
		for (aC = am.lf - 1; 0 <= aC; aC--) a6l[bj.fj[am.lk[aC]]] += ah.hZ[am.lk[aC]];
		adk = !0
	}

	function adm() {
		for (var adt, adr = 0, fl = 0, ev = Math.floor(j / 2), eT = Math.floor(vv / 2), ads = 1.5 * Math.PI, aC = aE.a1G; 0 <= aC; aC--) fl += a6l[aC], 0 === a6l[aC] && adr++;
		if (adk = !1, p9.clearRect(0, 0, j, j), 0 < fl)
			if (adr === aE.a1G) {
				for (aC = aE.a1G; 0 <= aC; aC--)
					if (0 < a6l[aC]) {
						! function(aC, ev, eT) {
							p9.fillStyle = bj.adx[bj.lW[aC]], p9.beginPath(), p9.arc(ev, ev, eT, 0, 2 * Math.PI), p9.fill()
						}(aC, ev, eT);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					p9.font = bD.th.vG(1, fontSize), p9.fillStyle = bE.qT, p9.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aC = 0; aC <= aE.a1G; aC++) 0 < a6l[aC] && (adt = ads + 2 * Math.PI * a6l[aC] / fl, adw(p9, bj.adx[bj.lW[aC]], ev, eT, ads, adt), function(ev, eT, ads, adt) {
					var gD = (adt - ads) / (2 * Math.PI),
						fontSize = +eT * Math.min(gD, .37);
					fontSize < 8 || (ads = (ads + adt) / 2, adt = Math.floor(100 * gD + .5) + "%", eT *= .525 - Math.max(.6 * (gD - .7), 0), p9.font = bD.th.vG(1, fontSize), p9.fillStyle = bE.qT, p9.fillText(adt, ev + Math.cos(ads) * eT, ev +
						Math.cos(ads + 1.5 * Math.PI) * eT))
				}(ev, eT, ads, adt), 0 !== aC && adz(p9, ev, eT, ads), ads = adt);
				adz(p9, ev, eT, 1.5 * Math.PI)
			} ae0(p9, ev, eT)
	}

	function adw(iu, color, ev, eT, ads, adt) {
		iu.fillStyle = color, iu.beginPath(), iu.arc(ev, ev, eT, ads, adt), iu.lineTo(ev, ev), iu.fill()
	}

	function adz(iu, ev, eT, ae1) {
		iu.beginPath(), iu.moveTo(ev, ev), iu.lineTo(ev + Math.cos(ae1) * eT, ev + Math.cos(ae1 + 1.5 * Math.PI) * eT), iu.stroke()
	}

	function ae0(iu, ev, eT) {
		iu.beginPath(), iu.arc(ev, ev, eT, 0, 2 * Math.PI), iu.stroke()
	}
	this.dv = function() {
		if (aE.il) {
			xI = 0, a6l = new Uint32Array(aE.a1G + 1);
			for (var aC = aE.a1G; 0 <= aC; aC--) a6l[aC] = 0;
			for (aC = am.lf - 1; 0 <= aC; aC--) a6l[bj.fj[am.lk[aC]]] += 1;
			this.resize()
		} else a6l = p9 = canvas = null
	}, this.aCw = function() {
		return j
	}, this.resize = function() {
		aE.il && (j = Math.floor(.95 * (a1.a2.j1() && !aE.oF ? .18 * i.min : .13 * i.j2)), j = (j *= 1 + (.5 + .2 * a1.a2.j1()) * aE.oF) + j % 2, gap = Math.max(1, .015 * j), vv = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p9 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p9.strokeStyle = bE.qT, bD.th.textAlign(p9, 1), bD.th.textBaseline(p9, 1), adm())
	}, this.lg = function(adn) {
		adn && ado();
		var em, adn = this.li();
		return bj.lW[adn] || (adn = function() {
			for (var lh = -1, aC = aE.a1G; 1 <= aC; aC--)(-1 === lh || a6l[aC] > a6l[lh]) && (lh = aC);
			return lh
		}(), em = ah.hZ[mk[0]], -1 !== adn && a6l[adn] > em) ? a6l[adn] : em
	}, this.a5A = function() {
		return xI = 31, this.eq(), this.li()
	}, this.li = function() {
		for (var lh = 0, aC = aE.a1G; 0 < aC; aC--) a6l[aC] > a6l[lh] && (lh = aC);
		return lh
	}, this.lA = function(adq) {
		for (var hE = 0, lk = am.lk, fj = bj.fj, fl = am.lf, gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = lk[aC];
			fj[hJ] === adq && (gP[hE++] = hJ)
		}
		bR.gG[0] = hE
	}, this.lj = function(adq) {
		for (var hE = 0, lk = am.lk, fj = bj.fj, fl = am.lf, gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = lk[aC];
			fj[hJ] !== adq && (gP[hE++] = hJ)
		}
		bR.gG[0] = hE
	}, this.a7j = function() {
		for (var hE = 0, aC = aE.a1G; 0 <= aC; aC--) hE += 0 < a6l[aC];
		return hE
	}, this.eq = function() {
		aE.il && 32 <= ++xI && (xI = 0, ado())
	}, this.nY = function() {
		aE.il && adk && adm()
	}, this.xm = function(iu, hE, size) {
		var ev = size >> 1,
			eT = Math.floor(.4 * size),
			ads = 1.5 * Math.PI;
		iu.clearRect(0, 0, size, size), iu.lineWidth = .042 * size, iu.strokeStyle = bE.qT;
		for (var aC = 0; aC < hE; aC++) {
			var adt = ads + 2 * Math.PI / hE;
			adw(iu, bj.adx[aC + 1], ev, eT, ads, adt), 0 !== aC && adz(iu, ev, eT, ads), ads = adt
		}
		adz(iu, ev, eT, 1.5 * Math.PI), ae0(iu, ev, eT)
	}, this.zD = function() {
		aE.il && (aE.oF ? zE.drawImage(canvas, bf.gap, bf.gap) : zE.drawImage(canvas, bf.gap, aCv + 2 * bf.gap))
	}
}

function dm() {
	function ae7(fs, fl, fu, a3i, aEd, gB) {
		if (!(fu < 1 || aEd < fu))
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jV(fs, fu);
				if (a3i(fP)) return fP >> 2;
				fs += gB
			}
		return -1
	}

	function aeB(fu, fl, fs, a3i, ae5, gB) {
		if (!(fs < 1 || ae5 < fs)) {
			fl = Math.max(fl, 0);
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jV(fs, fu);
				if (a3i(fP)) return fP >> 2;
				fu += gB
			}
		}
		return -1
	}

	function aeF(jI, jJ, ae2) {
		return -1 !== jJ && (-1 === jI || bP.jK(jJ, ae2) < bP.jK(jI, ae2)) ? jJ : jI
	}
	this.iC = function(ae2) {
		return this.a4A(ae2, function(fP) {
			return ad.fg(fP)
		})
	}, this.iI = function(ae2) {
		return this.a4A(ae2, function(fP) {
			return ad.aOA(fP, aE.fV)
		})
	}, this.a4A = function(ae2, a3i) {
		return function(ae2, ae3, a3i) {
			for (var i1 = bP.ft(ae2), i3 = bP.fv(ae2), ae5 = bV.fw - 2, aEd = bV.fx - 2, ae6 = -1, fo = 0; fo < ae3; fo++) {
				var aEc = Math.max(i1 - fo, 1),
					aTE = Math.max(i3 - fo, 1),
					a1r = Math.min(i1 + fo, ae5),
					a1q = Math.min(i3 + fo, aEd),
					jI = ae7(i1, a1r - i1, i3 - fo, a3i, aEd, 1),
					jJ = ae7(i1 - 1, i1 - aEc - 1, i3 - fo, a3i, aEd, -1),
					a1r = ae7(i1, a1r - i1, i3 + fo, a3i, aEd, 1),
					aEc = ae7(i1 - 1, i1 - aEc - 1, i3 + fo, a3i, aEd, -1),
					aeA = aeB(i3, a1q - i3 - 1, i1 - fo, a3i, ae5, 1),
					aeC = aeB(i3 - 1, i3 - aTE - 2, i1 - fo, a3i, ae5, -1),
					a1q = aeB(i3, a1q - i3 - 1, i1 + fo, a3i, ae5, 1),
					aTE = aeB(i3 - 1, i3 - aTE - 2, i1 + fo, a3i, ae5, -1);
				if (ae6 = aeF(ae6, jI, ae2), ae6 = aeF(ae6, jJ, ae2), ae6 = aeF(ae6, a1r, ae2), ae6 = aeF(ae6, aEc, ae2), ae6 = aeF(ae6, aeA, ae2), ae6 = aeF(ae6, aeC, ae2), ae6 = aeF(ae6, a1q, ae2), 0 <= (ae6 = aeF(ae6, aTE, ae2)) && fo *
					fo >= bP.jK(ae6, ae2)) return ae6
			}
			return -1
		}(ae2, bP.iz(), a3i)
	}
}

function aUW(pb) {
	var k, aeG = new aeH,
		v5 = document.createElement("div");

	function aeK() {
		v5.style.opacity = "0", setTimeout(aNJ, aeG.aeJ)
	}

	function aNJ() {
		u.removeChild(document.body, v5), aeG = v5 = null
	}
	k = bD.th.ui(aeG.aeI, .5), v5.textContent = pb, v5.style.position = "fixed", v5.style.zIndex = aeG.zIndex, v5.style.left = "50%", v5.style.top = .5 * k + "px", v5.style.transform = "translateX(-50%)", v5.style.maxWidth = "90%", v5.style
		.boxSizing = "border-box", v5.style.padding = .3 * k + "px " + .6 * k + "px", v5.style.backgroundColor = bE.qP, v5.style.color = bE.qT, v5.style.font = bD.th.vG(0, .6 * k), v5.style.textAlign = "center", v5.style.userSelect = "none", v5.style
		.pointerEvents = "none", v5.style.transition = "opacity " + aeG.aeJ + "ms", bD.th.tr(v5), document.body.appendChild(v5), setTimeout(aeK, aeG.aeL)
}

function aeH() {
	this.aeL = 5e3, this.aeJ = 600, this.zIndex = "1000", this.aeI = .03
}

function dE() {
	function aeM(key, size) {
		var abG;
		return "undefined" == typeof URLSearchParams || (abG = window.location.search, "string" != typeof(abG = new URLSearchParams(abG).get(key))) || abG.length < 1 ? null : bJ.fC.a0m(abG, size)
	}
	this.e3 = function() {
		if (0 !== a1.id) return !1;
		var a4g = aeM("r", 6);
		if (! function() {
				var value = aeM("account", 5);
				if (!value && !(value = aeM("a", 5))) return void bL.clear();
				return bL.clear(), u.v(8, u.vq, new vr(1e3, {
					action: 0,
					pj: value,
					vp: 0
				})), 1
			}()) {
			if (!this.clear()) return !1;
			if (!a4g) return !1;
			this.aY5("r", a4g), u.v(3, 0, L(554)), bC.aeO(a4g)
		}
		return !0
	}, this.clear = function() {
		var a5K = new URL(window.location.href);
		a5K.search = "";
		try {
			return history.replaceState(null, "", a5K.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aY5 = function(key, value) {
		if (0 === a1.id) try {
			var a5K = new URL(window.location.href),
				hJ = a5K.searchParams;
			hJ.set(key, value), a5K.search = hJ.toString(), history.replaceState(null, "", a5K.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ct() {
	var aeQ, h;
	this.dv = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.gC(32768 * aC, 100);
		this.a8z(0)
	}, this.value = function(hJ) {
		return h[hJ]
	}, this.aSo = function() {
		return bO.gC(aeQ - 1, 2)
	}, this.a8z = function(aSh) {
		aeQ = 2 * aSh % 32768 + 1
	}, this.random = function() {
		return aeQ = 167 * aeQ % 32768
	}, this.kQ = function(ng) {
		return bO.gC(ng * this.random(), 32768)
	}, this.l1 = function(hJ) {
		return 0 !== hJ && this.random() < this.value(hJ)
	}, this.jm = function(g4, g5) {
		return g4 + this.kQ(g5 - g4)
	}
}

function dA() {
	this.sw = new aeR, this.a99 = new aeS, this.aQB = new aeT, this.dv = function() {
		aE.hu || this.sw.dv()
	}, this.eq = function() {
		aE.hu || (this.sw.eq(), 3 !== u.vq) || bi.l6() % 15 != 5 && 2 !== aE.a48 || u.a5T().abH()
	};
	var aZf = 0;

	function aeX(pb) {
		3 === u.vq && u.a5T().zT(pb)
	}
	__fx.replay.restartReplay = () => this.abK(), this.abK = function() {
		var aeV, aeW, fR = bV.a9K(aE.data);
		2 === aE.data.mapType || bV.aKf.aNK(fR) ? (aeV = 0 !== aE.a48, aeW = aE.a8u, aeV || ab.aMy(), aE.a8s.a9J(), aE.data.canvas = null, b1.z.close(b1.z.a5X, 3257), b1.z.a5X = 0, aE.data.isReplay = 1, aE.a8w(), aeV && (aE.a8u = aeW)) : aZf || (
			aZf = 1, bV.aKf.aUV(fR, function(aNK) {
				aZf = 0, aNK && bC.abK()
			}))
	}, this.abJ = function(pb) {
		var aC = pb.indexOf("=");
		return 0 <= aC ? pb.substring(aC + 1) : pb
	}, __fx.replayHistory.load = saved => {
		saved = bC.abJ(saved), bC.aQB.a0u(saved) && bC.abK()
	}, this.aeO = function(id) {
		var aUJ = new XMLHttpRequest;
		aUJ.open("GET", "https://" + b1.z.a4f() + "/log/?r=" + id), aUJ.onload = function() {
			var pb = 200 === aUJ.status ? aUJ.responseText : "";
			aeX(pb.length ? pb : L(555))
		}, aUJ.onerror = function() {
			aeX(L(556))
		}, aUJ.send()
	}, this.abI = function(pb) {
		return pb
	}
}

function aeR() {
	this.aeY = null, this.aeZ = null, this.aea = null, this.aeb = null, this.aec = null, this.aed = null, this.a98 = "";
	var aee = 0,
		aef = 0;
	this.dv = function() {
		aef = 0, this.aeY = [], this.aeZ = [], this.aea = [], this.aeb = [], this.aec = [0], this.aed = [0], aee = 0, this.a98 = ""
	}, this.sx = function(id, gU, gW, gY) {
		aE.hu || 2 === aE.a48 || bU.a3i.a45() || (0 === this.aec[aee] && (this.aed[aee] ? (this.aec.push(1), this.aed.push(0), aee++) : this.aec[aee] = 1), this.aeY.push(id), this.aeZ.push(gU), this.aea.push(void 0 === gW ? 0 : gW), this.aeb
			.push(void 0 === gY ? 0 : gY), this.aed[aee]++)
	}, this.eq = function() {
		aef || (aef = +bU.a3i.a45(), 0 === this.aec[aee] ? this.aed[aee]++ : (this.aec.push(0), this.aed.push(0), aee++))
	}
}

function aeT() {
	var aeg = 0;

	function aek(pb, id) {
		console.log(pb), aeg || (id ? 1 === id ? aO.aAY = L(239) + ": " + pb : u.v(4, 3, new w(L(558), pb, 1)) : u.v(4, 3, new w("⚠️ " + L(557), pb, 1)))
	}
	this.a0u = function(pb, aeh) {
		var jA, qA;
		return aeg = aeh, bJ.fC.a0p(bJ.fC.a0n(bJ.fC.a0l(pb))), aO.aAY = "", !! function() {
			if (bK.size < 10) aek("File Too Small");
			else {
				var aem = bK.sk(12),
					s = (aem !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aek(s = (s += "   Found: " + aem) + ("   Compatible at " + b1.z.a4f() + "/" + aem), 1)), bK.sk(12)),
					aen = bK.sk(31);
				if (aen !== bK.size) aek("Size Error: Stated Size " + aen + " Actual Size " + bK.size);
				else if (function(k, aem) {
						for (var hJ = bK.aD, fl = bK.size, ada = aem, aC = 3; aC < fl; aC++) ada = ada + hJ[aC] & 4095;
						return ada === k || (aek("Hash Error: " + ada + " " + k + " " + fl), !1)
					}(s, aem)) return 1
			}
			return
		}() && (jA = bK, (qA = aE.data = new a8r).mapType = jA.sk(2), qA.mapProceduralIndex = jA.sk(8), qA.mapRealisticIndex = jA.sk(8), qA.mapSeed = jA.sk(14), qA.mapName = jA.aep(5), 2 === qA.mapType && jA.aeq(), qA.passableWater = jA.sk(
			1), qA.passableMountains = jA.sk(1), qA.playerCount = jA.sk(10), qA.humanCount = jA.sk(10), qA.selectedPlayer = jA.sk(9), qA.gameMode = jA.sk(1), qA.playerMode = jA.sk(2), qA.battleRoyaleMode = jA.sk(2), qA.numberTeams = jA.sk(4),
			qA.isZombieMode = jA.sk(1), qA.isContest = jA.sk(1), qA.isReplay = jA.sk(1), qA.elo = jA.aer(2, 14, 2), qA.colorsType = jA.sk(1), qA.colorsPersonalized = jA.sk(1), qA.colorsData = jA.aer(10, 18, 512), qA.selectableColor = jA.sk(
			1), qA.teamPlayerCount = jA.aer(4, 10, 9), qA.neutralBots = jA.sk(1), qA.botDifficultyType = jA.sk(2), qA.botDifficultyValue = jA.sk(4), qA.botDifficultyTeam = jA.aer(4, 4, 9), qA.botDifficultyData = jA.aer(10, 4, 512), qA
			.spawningType = jA.sk(2), qA.spawningSeed = jA.sk(14), qA.spawningData = jA.aer(11, 12, 1024), qA.selectableSpawn = jA.sk(1), qA.playerNamesType = jA.sk(2), qA.playerNamesData = jA.aes(10, 5, 512), qA.selectableName = jA.sk(1), qA
			.aIncomeType = jA.sk(2), qA.aIncomeValue = jA.sk(8), qA.aIncomeData = jA.aer(10, 8, 512), qA.tIncomeType = jA.sk(2), qA.tIncomeValue = jA.sk(8), qA.tIncomeData = jA.aer(10, 8, 512), qA.iIncomeType = jA.sk(2), qA.iIncomeValue = jA
			.sk(8), qA.iIncomeData = jA.aer(10, 8, 512), qA.sResourcesType = jA.sk(2), qA.sResourcesValue = jA.sk(11), qA.sResourcesData = jA.aer(10, 11, 512), qA.a9H = jA.aer(10, 30, 0), !! function() {
				var jA = bK,
					aRK = jA.sk(5),
					aet = jA.sk(30),
					aeu = jA.sk(30);
				if (aet + aeu > 8 * jA.size) return void aek("Corrupted File");
				return function(fl) {
						var aex = new Uint8Array(fl),
							aey = new Uint16Array(fl),
							aez = new Uint32Array(fl),
							af0 = new Uint32Array(fl);
						bC.sw.aeY = aex, bC.sw.aeZ = aey, bC.sw.aea = aez, bC.sw.aeb = af0;
						for (var aC = 0; aC < fl; aC++) {
							var id = bK.sk(4);
							aex[aC] = id, aey[aC] = bK.sk(9), 0 === id ? aez[aC] = bK.sk(22) : 1 === id ? (aez[aC] = bK.sk(10), af0[aC] = bK.sk(10)) : 2 === id ? (aez[aC] = bK.sk(10), af0[aC] = bK.sk(9)) : 3 === id ? (aez[aC] = bK.sk(10),
								af0[aC] = bK.sk(27)) : 4 === id ? (aez[aC] = bK.sk(10), af0[aC] = bK.sk(16)) : 5 === id || 6 === id ? aez[aC] = bK.sk(10) : 7 === id ? aez[aC] = bK.sk(1) : 10 === id ? (aez[aC] = bK.sk(20), af0[aC] = bK.sk(
								22)) : 11 === id && (aez[aC] = bK.sk(16), af0[aC] = bK.sk(27))
						}
					}(aet),
					function(fl, aRK) {
						var aec = new Uint8Array(fl),
							aed = new Array(fl);
						aed.fill(0), bC.sw.aec = aec, bC.sw.aed = aed;
						for (var aC = 0; aC < fl; aC++) aec[aC] = bK.sk(1), aed[aC] = bK.sk(aRK)
					}(aeu, aRK), 1
			}()) && (bK.eU < 8 * bK.size - 13 || bK.eU > 8 * bK.size ? (aek("Out Of Bounds Error: " + bK.eU + " " + 8 * bK.size), !1) : (bC.sw.a98 = pb, 2 !== aE.data.mapType || (aek("Load base64 image...", 2), aeh)))
	}, this.aQC = function(aPD, ael) {
		var a76 = document.createElement("canvas"),
			iu = a76.getContext("2d");
		if (a76.width = aPD.width, a76.height = aPD.height, iu.drawImage(aPD, 0, 0), aE.data.canvas = a76, aeg || ael) return aE.a48 ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.abK()
	}
}

function aeS() {
	this.a3Y = function() {
		var aRK = function() {
				for (var aed = bC.sw.aed, fl = aed.length, max = 0, aC = 0; aC < fl; aC++) max = Math.max(max, aed[aC]);
				return aVG(Math.max(max, 1))
			}(),
			j = (qA = aE.data, (j = bH).dv(), j.a9(12, m.rVersion), j.eU += 43, j.a9(2, qA.mapType), j.a9(8, qA.mapProceduralIndex), j.a9(8, qA.mapRealisticIndex), j.a9(14, qA.mapSeed), j.af7(qA.mapName, 5), 2 === qA.mapType && j.af8(qA.canvas),
				j.a9(1, qA.passableWater), j.a9(1, qA.passableMountains), j.a9(10, qA.playerCount), j.a9(10, qA.humanCount), j.a9(9, qA.selectedPlayer), j.a9(1, qA.gameMode), j.a9(2, qA.playerMode), j.a9(2, qA.battleRoyaleMode), j.a9(4, qA
					.numberTeams), j.a9(1, qA.isZombieMode), j.a9(1, qA.isContest), j.a9(1, qA.isReplay), j.e1(qA.elo, 2, 14), j.a9(1, qA.colorsType), j.a9(1, qA.colorsPersonalized), j.e1(qA.colorsData, 10, 18), j.a9(1, qA.selectableColor), j.e1(
					qA.teamPlayerCount, 4, 10), j.a9(1, qA.neutralBots), j.a9(2, qA.botDifficultyType), j.a9(4, qA.botDifficultyValue), j.e1(qA.botDifficultyTeam, 4, 4), j.e1(qA.botDifficultyData, 10, 4), j.a9(2, qA.spawningType), j.a9(14, qA
					.spawningSeed), j.e1(qA.spawningData, 11, 12), j.a9(1, qA.selectableSpawn), j.a9(2, qA.playerNamesType), j.af9(qA.playerNamesData, 10, 5), j.a9(1, qA.selectableName), j.a9(2, qA.aIncomeType), j.a9(8, qA.aIncomeValue), j.e1(qA
					.aIncomeData, 10, 8), j.a9(2, qA.tIncomeType), j.a9(8, qA.tIncomeValue), j.e1(qA.tIncomeData, 10, 8), j.a9(2, qA.iIncomeType), j.a9(8, qA.iIncomeValue), j.e1(qA.iIncomeData, 10, 8), j.a9(2, qA.sResourcesType), j.a9(11, qA
					.sResourcesValue), j.e1(qA.sResourcesData, 10, 11), j.e1(qA.a9H, 10, 30), ! function(aRK) {
					var j = bH,
						aeY = bC.sw.aeY,
						gU = bC.sw.aeZ,
						gW = bC.sw.aea,
						gY = bC.sw.aeb,
						fl = aeY.length;
					j.a9(5, aRK), j.a9(30, fl), j.a9(30, bC.sw.aed.length);
					for (var aC = 0; aC < fl; aC++) {
						var ev = aeY[aC];
						j.a9(4, ev), j.a9(9, gU[aC]), 0 === ev ? j.a9(22, gW[aC]) : 1 === ev ? (j.a9(10, gW[aC]), j.a9(10, gY[aC])) : 2 === ev ? (j.a9(10, gW[aC]), j.a9(9, gY[aC])) : 3 === ev ? (j.a9(10, gW[aC]), j.a9(27, gY[aC])) : 4 === ev ? (j
							.a9(10, gW[aC]), j.a9(16, gY[aC])) : 5 === ev || 6 === ev ? j.a9(10, gW[aC]) : 7 === ev ? j.a9(1, gW[aC]) : 10 === ev ? (j.a9(20, gW[aC]), j.a9(22, gY[aC])) : 11 === ev && (j.a9(16, gW[aC]), j.a9(27, gY[aC]))
					}
				}(aRK), ! function(aRK) {
					for (var j = bH, aec = bC.sw.aec, aed = bC.sw.aed, fl = aec.length, aC = 0; aC < fl; aC++) j.a9(1, aec[aC]), j.a9(aRK, aed[aC])
				}(aRK), bH.eU),
			qA = bO.gC(j - 1, 6) + 1,
			aRK = (bG.ad0(6 * qA) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eU = 24, j.a9(31, j.h.length), j.eU = 12, j.a9(12, function() {
					for (var h = bH.h, fl = h.length, ada = m.rVersion, aC = 3; aC < fl; aC++) ada = ada + h[aC] & 4095;
					return ada
				}())
			}(), bK.dv(bH.h), bI.fC.vs(bI.fC.vt(qA)));
		return bK.yG(), bH.dv(), aRK
	}
}

function cy() {
	var ev, c3 = !1,
		afB = !1,
		afC = -1e4,
		afD = -1,
		afE = 0;

	function resize(afI) {
		ev = 0, ac.wG() && (afG(afI) || c3) && (c3 = !1, bf.resize(), bZ.aHK.resize(), aZ.dv(), bb.dv(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a48 ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aES()) : (ab.aN1(), ab.aN2()), bi.e2 = !0)
	}

	function afF(gD) {
		return gD && 128 < gD ? Math.floor(gD) : 128
	}

	function afG(afI) {
		var j, k, afK, vv, aDr;
		if (!(0 < i.vX)) return vv = afF(document.documentElement.clientWidth), aDr = afF(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vv, k = aDr, afK = 0 !== a1.id || j < k ?
			700 : 1200, afK = Math.min(afK / ((j + k) / 2), 1), afK = 0 === bm.buffer.data[1].value ? 2 * afK / 3 : Math.min(afK + (bm.buffer.data[1].value - 1) * (1 - afK) / 2, 1), i.l = (window.devicePixelRatio || 1) * afK, __fx.hoveringTooltip
			.canvasPixelScale = i.l, afI && !afB ? (afB = !0, u.removeChild(document.body, a5l)) : afB && (afB = !1, document.body.appendChild(a5l)), j = Math.floor(.5 + vv * i.l), k = Math.floor(.5 + aDr * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aGv(j, k), i.max = aAo(j, k), i.j2 = bO.gC(j + k, 2), i.zA = j / k, a5l.width = j, a5l.height = k, a5l.style.width = vv + "px", a5l.style.height = aDr + "px", afD = bi.el + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.j2 = 0, this.zA = 1, this.l = 1, this.vX = 0, this.dw = function() {
		this.j = afF(document.documentElement.clientWidth) + 2, this.k = afF(document.documentElement.clientHeight) + 2
	}, this.dv = function() {
		ev = 1, a5l = document.getElementById("canvasA"), 2 === a1.id && (a5l.style.webkitUserSelect = "none"), (zE = a5l.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, afG(0)
	}, this.eq = function() {
		50 <= ++ev && resize(0), -1 === afD || bi.el < afD || (afD = -1, 2e3 * ++afE >= bi.el + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e5 = function(kO) {
		c3 = !0, resize(kO)
	}, this.a6Q = function() {
		afC + 1e3 > bi.el || (afC = bi.el, resize(0))
	}
}

function dj() {
	var afM = [];
	this.aLo = function(pj) {
		for (var em = (new Date).getTime() - 36e5, aC = afM.length - 1; 0 <= aC; aC--)
			if (afM[aC].em < em) afM.splice(aC, 1);
			else if (afM[aC].pj === pj) return !0;
		return !1
	}, this.aLq = function(pj, aLp) {
		return !(this.aLo(pj) || !b1.z.er(0) || (b1.aXH.aXI({
			action: 6,
			pj: pj,
			value: aLp
		}), afM.push({
			pj: pj,
			em: (new Date).getTime()
		}), 0))
	}
}

function dS() {
	this.adE = new afN, this.a56 = new afO, this.adV = new afP
}

function afP() {
	var afQ = afR(),
		afS = afT(),
		afU = afV();
	this.sk = function() {
		return 123
	}, this.a3Y = function() {
		bJ.fC.a0t(bm.buffer.data[183].value, 15), bG.a9(14, afQ), bG.a9(7, afS), bG.a9(12, afU)
	}
}

function afR() {
	for (var ev = document.createElement("canvas"), ev = (ev.width = 24, ev.height = 24, ev.getContext("2d", {
			alpha: !1
		})), fo = (ev.fillStyle = "rgb(0,0,0)", ev.fillRect(0, 0, 24, 24), ev.font = "22px system-ui", ev.textBaseline = "middle", ev.textAlign = "center", ev.fillStyle = "rgb(255,255,255)", ev.fillText("Q", 12, 12), ev.getImageData(0, 0, 24, 24)
			.data), fl = fo.length, m4 = 0, aC = 0; aC < fl; aC += 4) m4 += fo[aC];
	return 16383 & m4
}

function afT() {
	var fo = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fo + .5) / 15))
}

function afV() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function afO() {
	this.a57 = function() {
		for (var hJ, fl = am.lf, xJ = am.lk, a4s = ah.a4s, aDF = this.aOw(), aC = 0; aC < fl; aC++) hJ = xJ[aC], bD.h7.kW(hJ) || (a4s[hJ] = aDF);
		var t1 = ah.t1,
			kC = ah.kC,
			kD = ah.kD,
			a4q = ah.a4q,
			fl = aE.l9;
		for (aC = 0; aC < fl; aC++)(0 === a4q[aC] || kD[aC] < 1 || 2 * t1[aC] > 3 * (kC[aC] + kD[aC])) && (a4s[aC] = 0);
		var a54 = 0;
		for (aC = 0; aC < fl; aC++) a54 += 0 < a4s[aC];
		return a54
	}, this.aOw = function() {
		return Math.min(65535, bi.l6())
	}
}

function afN() {
	function afZ(h, gD, ij) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (gD >> (aC + ij) % 30 & 1)) % 256
	}
	this.eq = function(afW, afX) {
		var h = new Uint8Array(256);
		return function(h, afW, afX) {
				var aC, afb = 3 + (4 + afW) % 32768,
					afc = 12 + afX % 32768,
					afd = 17 + ((afW & afX) + (afW | afX) + afW) % 32768;
				for (aC = 0; aC < 256; aC++) afb = 1 + afb * afc % afd, h[aC] = afb % 256
			}(h, afW, afX), afZ(h, afW, 2), afZ(h, afX, 7),
			function(h) {
				var aC, gD, eU = 0;
				for (aC = 0; aC < 3e4; aC++) gD = h[eU], h[eU] = (gD + aC + h[(eU + aC) % 256]) % 256, eU = (gD + aC + eU + (gD & eU)) % 256
			}(h),
			function(h) {
				var aC, aDr = 1,
					wb = 1;
				for (aC = 0; aC < 256; aC += 2) aDr = (1 + aDr) * (h[aC] + 1) % 1073741824, wb = (1 + wb) * (h[aC + 1] + 1) % 1073741824;
				return [aDr, wb]
			}(h)
	}, this.adF = function(afe, aff, afg, result) {
		for (var hE = 1 << afe, aC = 0; aC < hE; aC++)
			if (this.afh(aC, aff, afg) === result) return aC;
		return 0
	}, this.afh = function(afi, aff, afg) {
		for (var a1P = aff + afi, a1Y = afg + afi, gD = a1P + a1Y & 2147483647, g4 = 1; g4 <= 16; g4++) gD = (gD = (gD ^ gD >> g4) >>> 1 + (3 & a1P)) * (7 + (1023 & (a1P | a1Y))) & 1073741823, a1Y >>= 1 + (1 & (a1P >>= 1 + (1 & (gD += 65535 &
			a1Y))));
		return gD &= 1073741823
	}
}

function cv() {
	var afj, afk, iT, afl;
	this.dv = function() {
		var aC, fs, fu, aZL, afm, j, k, p9, ir, a2a, gD, hJ, g1, g4, afp;
		if (function() {
				if (iT = !0, afl = "rgb(" + bV.aSX[0] + "," + bV.aSX[1] + "," + bV.aSX[2] + ")", bV.aSs(bV.fR)) return 1;
				return iT = !1, 0
			}()) afk = null;
		else {
			for (afj = bO.gC(96, 4), afm = 1 === bV.fR ? (aZL = 0, 160) : (aZL = 128, 32), afl = "rgb(" + aZL + "," + aZL + "," + aZL + ")", afk = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (afk[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fw : afj, k = aC % 2 == 0 ? afj : bV.fx + 2 * afj, afk[aC].width = j, afk[aC].height = k, a2a = (ir = (p9 = afk[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fu = afj - 1; 0 <= fu; fu--)
						for (gD = afm + Math.floor((fu + 1) * (aZL - afm) / (afj + 1)), fs = j - 1; 0 <= fs; fs--) a2a[hJ = 4 * ((0 === aC ? afj - fu - 1 : fu) * j + fs)] = gD, a2a[hJ + 1] = gD, a2a[hJ + 2] = gD, a2a[hJ + 3] = 255;
				else {
					for (fs = afj - 1; 0 <= fs; fs--)
						for (gD = afm + Math.floor((fs + 1) * (aZL - afm) / (afj + 1)), fu = k - 1 - afj; afj <= fu; fu--) a2a[hJ = 4 * (fu * j + (3 === aC ? afj - fs - 1 : fs))] = gD, a2a[hJ + 1] = gD, a2a[hJ + 2] = gD, a2a[hJ + 3] = 255;
					for (g4 = 1; 0 <= g4; g4--)
						for (fs = afj - 1; 0 <= fs; fs--)
							for (fu = afj - 1; 0 <= fu; fu--) g1 = (Math.pow(fs * fs + fu * fu, .5) + 1) / (afj + 1), gD = afm + Math.floor((1 < g1 ? 1 : g1) * (aZL - afm)), a2a[hJ = 4 * ((0 === g4 ? afj - fu - 1 : fu + g4 * (k - afj)) * j + (
								1 === aC ? fs : afj - fs - 1))] = gD, a2a[hJ + 1] = gD, a2a[hJ + 2] = gD, a2a[hJ + 3] = 255
				}
				p9.putImageData(ir, 0, 0)
			}
			afp = afm, bV.aBw.fillStyle = "rgb(" + afp + "," + afp + "," + afp + ")", bV.aBw.fillRect(0, 0, bV.fw, 1), bV.aBw.fillRect(0, bV.fx - 1, bV.fw, 1), bV.aBw.fillRect(0, 0, 1, bV.fx), bV.aBw.fillRect(bV.fw - 1, 0, 1, bV.fx)
		}
	}, this.a28 = function() {
		var g4 = iT ? 0 : -afj;
		aVF(g4, g4, bV.fw - 2 * g4, bV.fx - 2 * g4, bd.afq, bd.afr, bd.afs, bd.aft) || (zE.fillStyle = afl, zE.fillRect(0, 0, i.j, i.k))
	}, this.zD = function() {
		iT || (aVE(0, -afj, bV.fw, afj, bd.afq, bd.afr, bd.afs, bd.aft) && zE.drawImage(afk[0], bd.afu, bd.afv - afj), aVE(bV.fw, -afj, afj, bV.fx + 2 * afj, bd.afq, bd.afr, bd.afs, bd.aft) && zE.drawImage(afk[1], bd.afu + bV.fw, bd.afv - afj),
			aVE(0, bV.fx, bV.fw, afj, bd.afq, bd.afr, bd.afs, bd.aft) && zE.drawImage(afk[2], bd.afu, bd.afv + bV.fx), aVE(-afj, -afj, afj, bV.fx + 2 * afj, bd.afq, bd.afr, bd.afs, bd.aft) && zE.drawImage(afk[3], bd.afu - afj, bd.afv - afj))
	}
}

function dH() {
	this.aOu = new afw, this.a2C = new afx, this.z = new afy, this.jb = new afz, this.afp = new ag0, this.n4 = new ag1, this.kx = new ag2, this.lw = new ag3, this.ag4 = new ag5, this.ag6 = new ag7, this.nF = new ag8, this.iN = new ag9, this.mV =
		new agA, this.ly = new agB, this.s9 = new agC, this.n8 = new agD, this.t9 = new agE, this.tF = new agF, this.tA = new agG, this.sD = new agH, this.a9u = new agI, this.aB8 = new agJ, this.agK = new agL, this.iQ = new agM, this.dv =
	function() {
			this.iQ.dv(), this.tA.dv(), this.a9u.dv(), this.aB8.dv(), this.agK.dv(), this.mV.dv(), this.a2C.dv(), this.z.dv(), this.jb.dv(), this.afp.dv(), this.ag6.dv(), this.n8.dv()
		}, this.zD = function() {
			this.ag6.zD(), this.aB8.zD(), this.a2C.zD()
		}
}

function ag2() {
	this.eq = function(player) {
		return !!bQ.nF.nG(player) && !(bQ.z.lD[player] >= Math.max(3 * ap.performance.mN, aF.lN[aF.iY[player]]) || !bD.h7.nH(player, aF.lL[aF.iY[player]], 32, 0) || aX.aGi() || !(ap.k0.eq(player) || ap.jp.eq(player) || ap.jr.eq(player)) || (
			function(player) {
				bR.gN[1] = 4, bD.h7.nJ(player);
				var jR = aF.lL[aF.iY[player]];
				bQ.z.nK(player, jR)
			}(player), 0))
	}
}

function agG() {
	var agT = null;
	this.dv = function() {
		(agT = null === agT ? new Uint8Array(aE.fi) : agT).fill(bQ.tF.agU)
	}, this.eq = function() {
		var tF = bQ.tF;
		if (bi.l6() % tF.agV == 0)
			for (var gD = function() {
					var agY = bQ.tF.agZ,
						fs = agY[0],
						fu = agY[1],
						fl = fs.length,
						hE = function() {
							for (var xJ = am.lk, fl = am.lf, hE = 0, aC = 0; aC < fl; aC++) bD.h7.kW(xJ[aC]) || hE++;
							return hE
						}();
					if (hE <= fs[0]) return fu[0];
					for (var aC = 1; aC < fl; aC++) {
						var jE;
						if (hE < fs[aC]) return jE = (fu[aC] - fu[aC - 1]) * (hE - fs[aC - 1]), fu[aC - 1] + bO.gC(jE, fs[aC] - fs[aC - 1])
					}
					return fu[fl - 1]
				}(), max = tF.agU, nh = agT, fl = nh.length, aC = 0; aC < fl; aC++) nh[aC] = Math.min(nh[aC] + gD, max)
	}, this.has = function(player) {
		return agT[player] >= bQ.tF.agX
	}, this.tC = function(player) {
		agT[player] -= bQ.tF.agX
	}
}

function agD() {
	var agb = 0,
		agc = null;
	this.dv = function() {
		null === agc && (agc = new Uint16Array(2 * bQ.z.lN)), agb = 0
	}, this.eu = function(agd, n8) {
		var age = agc;
		age[agb++] = agd, age[agb++] = n8
	}, this.n9 = function(player, n7) {
		for (var age = agc, fl = agb, aC = 0; aC < fl; aC += 2)
			if (age[aC] === n7 && bQ.ly.agf(age[aC + 1]) && player === bQ.z.n3[bR.gN[2]] >> 3) return !0;
		return !1
	}, this.agg = function(agh) {
		var n4 = bQ.z.n0[agh];
		if (!(n4 < 64)) {
			for (var n7 = bQ.z.n2[agh], age = agc, fl = agb, aC = fl - 2; 0 <= aC; aC -= 2)
				if (age[aC] === n7) {
					{
						agm = void 0;
						var agm = age[aC + 1];
						bQ.ly.agf(agm) && bQ.n8.agu(bR.gN[2])
					}
					age[aC] = age[fl - 2], age[aC + 1] = age[fl - 1], fl -= 2
				} agb = fl
		}
	}, this.agj = function(agk, agl) {
		for (var agm = bQ.z.n2[agk], n7 = -1, age = agc, fl = agb, aC = 1; aC < fl; aC += 2)
			if (age[aC] === agm) {
				n7 = age[aC - 1];
				break
			} if (-1 === n7) return !1;
		if (!bQ.ly.agf(n7)) return !1;
		var agh = bR.gN[2],
			mU = bQ.z.n1[agh];
		if (agl === mU[mU.length - 1]) bQ.z.n1[agk] = bQ.mV.agn(bQ.z.n1[agk], bQ.mV.md(mU));
		else {
			var ago = bQ.ly.agp(mU, agl);
			if (-1 === ago) return !1;
			var agq = bQ.z.nD[agh];
			ago === agq ? (agh = bP.jZ(bQ.z.nE[agh]), bQ.z.n1[agk] = bQ.mV.ags(bQ.z.n1[agk], mU, ago, agl, bP.jH(mU[ago], agl) > bP.jH(mU[ago], agh))) : bQ.z.n1[agk] = bQ.mV.ags(bQ.z.n1[agk], mU, ago, agl, agq < ago)
		}
		return !0
	}, this.agu = function(agv) {
		var m4 = bQ.z,
			n4 = m4.n0[agv];
		if (n4 % 64 == 5) return !1;
		var mU = m4.n1[agv],
			agw = m4.nD[agv],
			agx = new Uint32Array(agw + 2);
		agx[0] = bQ.sD.agy(agv);
		for (var aC = 0; aC <= agw; aC++) agx[aC + 1] = mU[agw - aC];
		return m4.n1[agv] = agx, m4.nD[agv] = 0, m4.agz[agv] = 0, m4.ah0[agv] = m4.nE[agv], m4.n0[agv] = n4 - n4 % 64 + 5, !0
	}
}

function ag8() {
	this.nG = function(player) {
		return !!aE.data.passableWater && bQ.z.mz !== bQ.z.lN && bQ.z.lD[player] !== bQ.z.ah1 && 0 !== ah.hS[player].length
	}, this.t4 = function(ae2) {
		var n4 = bR.gN[1];
		return 7 === n4 ? ad.iT(bP.fb(ae2)) : !(4 <= n4 || !bQ.ly.ah2(bP.fb(ae2))) && ad.fg(bP.fb(bP.jd(ae2, n4)))
	}
}

function agF() {
	this.ah3 = 2, this.ah4 = 25e4, this.ah5 = 20, this.ah6 = 3e5, this.ah7 = 5e4, this.ah8 = 5, this.ah9 = 10, this.ahA = 9, this.ahB = 25, this.ahC = 10, this.ahD = 10, this.ahE = 200, this.ahF = 100, this.tG = 50, this.ahG = 54, this.ahH = 180,
		this.ahI = 2, this.ahJ = 100, this.ahK = 4, this.ahL = !0, this.ahM = .002, this.ahN = .012, this.ahO = .008, this.ahP = 2.33, this.ahQ = [255, 255, 255], this.ahR = [0, 0, 0], this.aFF = [255, 210, 210], this.ahS = [50, 0, 0], this.ahT = [
			255, 255, 0
		], this.ahU = 12, this.ahV = 12, this.ahW = 7, this.ahX = 1.7, this.ahY = 7, this.ahZ = .02, this.aha = 1.6, this.agU = 255, this.agX = 32, this.agV = 9, this.agZ = [
			[1, 10, 50, 200],
			[32, 32, 32, 32]
		]
}

function afw() {
	this.aOv = function(player) {
		for (var aCc = bQ.z.aCc, w8 = player << 3, aC = w8 + bQ.z.lD[player] - 1; w8 <= aC; aC--) this.ahb(aCc[aC])
	}, this.ahb = function(ahc) {
		var z = bQ.z,
			ahd = z.mz - 1,
			ahe = z.n3[ahc],
			ahf = z.ahg[ahc],
			ahh = z.nE[ahc];
		z.mz = ahd, z.n3[ahc] = z.n3[ahd], z.nE[ahc] = z.nE[ahd], z.agz[ahc] = z.agz[ahd], z.aB7[ahc] = z.aB7[ahd], z.ahg[ahc] = z.ahg[ahd], z.n2[ahc] = z.n2[ahd], z.n0[ahc] = z.n0[ahd], z.ahi[ahc] = z.ahi[ahd], z.ahj[ahc] = z.ahj[ahd], z.n1[
			ahc] = z.n1[ahd], z.nD[ahc] = z.nD[ahd], z.ah0[ahc] = z.ah0[ahd], z.aCf[ahc] = z.aCf[ahd], z.ahk[ahc] = z.ahk[ahd], z.aCc[z.n3[ahc]] = ahc,
			function(ae1) {
				var player = ae1 >> 3,
					z = bQ.z,
					fl = z.lD[player] - 1,
					ahn = (player << 3) + fl;
				z.lD[player] = fl, ahn !== ae1 && (z.aCc[ae1] = z.aCc[ahn], z.n3[z.aCc[ae1]] = ae1)
			}(ahe), bQ.jb.jb[bP.ja(z.nE[ahc])][z.ahg[ahc]] = ahc, ahd = bP.ja(ahh), ahe = ahf, ahd = bQ.jb.jb[ahd], z = ahd.pop(), ahe !== ahd.length && (ahd[ahe] = z, bQ.z.ahg[z] = ahe)
	}
}

function afx() {
	var ahp = 12,
		ahq = 12,
		ahr = 1,
		aBZ = "",
		aht = {},
		ahu = null,
		ahv = null;

	function ai9(a2a, fX, aZL) {
		fX *= 4;
		a2a[fX] = aZL[0], a2a[1 + fX] = aZL[1], a2a[2 + fX] = aZL[2], a2a[3 + fX] = 255
	}
	this.dv = function() {
		var tF = bQ.tF;
		aBZ = "", aht = {}, ahu = [tF.ahQ, tF.ahR, tF.aFF, tF.ahT, tF.ahS], ahv = new Array(5);
		for (var aC = 0; aC < 5; aC++) ahv[aC] = bD.color.qL(ahu[aC][0], ahu[aC][1], ahu[aC][2])
	}, this.zD = function() {
		var aC, nE = bQ.z.nE,
			n3 = bQ.z.n3,
			aB7 = bQ.z.aB7,
			ahi = bQ.z.ahi,
			tF = bQ.tF,
			ahy = aE.fV,
			aC5 = bQ.a9u.aC6(),
			fl = bQ.z.mz,
			ahz = i.j,
			ai0 = i.k,
			ai1 = bV.fw << 4,
			fa = j3,
			iu = zE;
		for (iu.imageSmoothingEnabled = fa < 9, bD.th.textAlign(iu, 1), bD.th.textBaseline(iu, 1), ! function(iu) {
				var font = bD.th.vG(1, 100);
				font !== aBZ && (aBZ = font, iu.font = font, ahr = (.5 * iu.measureText("9999").width + 12) / 62, ahq = Math.max(Math.round((ahp - 2) * ahr) + 2, ahp), aht = {})
			}(iu), aC = 0; aC < fl; aC++) {
			var alpha, aF6, player = n3[aC] >> 3,
				iY = aB7[aC],
				ahx = (.9 + .1 * Math.log10(Math.max(iY, 1))) * fa,
				iY = bD.pf.a8O(iY),
				ahx = Math.floor(tF.ahP * ahx),
				fs = (jA = nE[aC]) % ai1 / 16 * fa - jS,
				jA = Math.floor(jA / ai1) / 16 * fa - jT;
			fs < -(aF6 = 1.5 * ahx) || jA < -aF6 || ahz + aF6 < fs || ai0 + aF6 < jA || (aF6 = bQ.ag6.ai3(player) ? ahi[aC] ? 4 : 1 : ahi[aC] ? 2 : 0, (alpha = (ahx - tF.ahW) / (tF.ahV - tF.ahW)) <= 0) || (alpha = Math.min(alpha, 1), player ===
				ahy && function(iu, fs, fu, fontSize, ev, alpha) {
					var a76 = aht[ev];
					a76 = a76 || (aht[ev] = function(ev) {
						var ev = ahu[ev],
							j = ahq,
							k = ahp,
							a76 = bD.th.a77(j, k),
							iu = bD.th.getContext(a76, !0),
							ir = bD.th.getImageData(iu, j, k),
							a2a = ir.data;
						return ai9(a2a, j + 1, ev), ai9(a2a, j + 2, ev), ai9(a2a, 2 * j + 1, ev), ai9(a2a, 2 * j - 3, ev), ai9(a2a, 2 * j - 2, ev), ai9(a2a, 3 * j - 2, ev), ai9(a2a, j * (k - 3) + 1, ev), ai9(a2a, j * (k - 2) + 1, ev),
							ai9(a2a, j * (k - 2) + 2, ev), ai9(a2a, j * (k - 2) - 2, ev), ai9(a2a, j * (k - 1) - 3, ev), ai9(a2a, j * (k - 1) - 2, ev), iu.putImageData(ir, 0, 0), a76
					}(ev));
					var ev = .62 * fontSize,
						fontSize = ev * ahr,
						aEO = 2 * fontSize / (ahq - 2),
						aEP = 2 * ev / (ahp - 2);
					iu.globalAlpha = alpha, iu.setTransform(aEO, 0, 0, aEP, fs - fontSize - aEO, fu - ev - aEP), iu.drawImage(a76, 0, 0)
				}(iu, fs, jA, ahx, aC === aC5 ? 3 : aF6, alpha), iu.globalAlpha = alpha, iu.setTransform(1, 0, 0, 1, 0, 0), iu.font = bD.th.vG(1, ahx), iu.fillStyle = ahv[aF6], iu.fillText(iY, fs, jA + .1 * ahx), bD.h7.kW(player) && (alpha =
					iu.measureText(iY).width, aF6 = jA + .1 * ahx + bD.th.a37 * ahx, iu.fillRect(fs - .5 * alpha, aF6, alpha, Math.max(1, .1 * ahx))))
		}
		iu.globalAlpha = 1, iu.imageSmoothingEnabled = !1, iu.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ai6 = function(nB, mO, mP) {
		var m4 = bQ.z,
			tF = bQ.tF,
			ahw = .9 + .1 * Math.log10(Math.max(m4.aB7[nB], 1)),
			ahw = Math.floor(tF.ahP * ahw * j3);
		return !(ahw <= tF.ahW) && (tF = bV.fw << 4, nB = (m4 = m4.nE[nB]) % tF / 16 * j3 - jS, m4 = Math.floor(m4 / tF) / 16 * j3 - jT, tF = .62 * ahw, Math.abs(mO - nB) <= tF * ahr) && Math.abs(mP - m4) <= tF
	}
}

function agJ() {
	var aiA = new Int32Array(8),
		aiB = 0,
		aiC = -1,
		aiD = !1;

	function aiJ(iu, nB) {
		var m4 = bQ.z;
		65535 !== m4.agz[nB] && null !== m4.n1[nB] && aiH(iu, nB)
	}

	function aiH(iu, nB) {
		var m4 = bQ.z,
			mU = m4.n1[nB],
			agw = m4.nD[nB],
			fl = mU.length - 1,
			m4 = m4.nE[nB];
		iu.beginPath(), iu.moveTo(aiK(mU[fl]), aiL(mU[fl]));
		for (var ij = fl - 1; agw < ij; ij--) iu.lineTo(aiK(mU[ij]), aiL(mU[ij]));
		nB = bP.jD(m4) * j3 / 16 - jS, fl = bP.jG(m4) * j3 / 16 - jT;
		iu.lineTo(aiM(nB), aiM(fl)), iu.stroke()
	}

	function aiK(fX) {
		return aiM((bP.ft(fX) + .5) * j3 - jS)
	}

	function aiL(fX) {
		return aiM((bP.fv(fX) + .5) * j3 - jT)
	}

	function aiM(gD) {
		return aiD ? Math.floor(gD) + .5 : gD
	}
	this.dv = function() {
		aiA.fill(-1), aiC = -1
	}, this.aB9 = function(nB) {
		aiB = bQ.z.n3[nB] >> 3, aiC = bQ.z.n2[nB]
	}, this.show = function(player, o9) {
		if (player === aE.fV) {
			for (var aiE = 0, aC = 0; aC < 8; aC++)
				if (aiA[aC] === o9 || -1 === aiA[aC]) {
					aiE = aC;
					break
				} aiA[aiE] = o9
		}
	}, this.zD = function() {
		var tF = bQ.tF,
			player = aE.fV,
			iu = zE,
			j2 = i.j2;
		iu.setTransform(1, 0, 0, 1, 0, 0), iu.strokeStyle = bE.qT, aiD = tF.ahL, iu.lineWidth = aiD ? 1 : Math.max(1, tF.ahM * j2), iu.setLineDash([tF.ahN * j2, tF.ahO * j2]), bD.h7.hy(player) && function(iu, player) {
				for (var aC = 0; aC < 8; aC++) {
					var nB; - 1 !== aiA[aC] && ((nB = bQ.ly.oB(player, aiA[aC])) < 0 || 65535 === bQ.z.agz[nB] ? aiA[aC] = -1 : aiH(iu, nB))
				}
			}(iu, player),
			function(iu, player) {
				var nB, aiI = -1;
				bM.uA() || 0 <= (aiI = bQ.ly.aA6(bM.hq, bM.hr)) && bQ.z.n3[aiI] >> 3 !== player && aiJ(iu, aiI); - 1 !== aiC && ((nB = bQ.ly.oB(aiB, aiC)) < 0 ? aiC = -1 : nB !== aiI && aiB !== player && aiJ(iu, nB))
			}(iu, player), iu.setLineDash([])
	}
}

function ag7() {
	var aiN = null,
		aiO = 0,
		aiP = !1,
		aiQ = new Array(64),
		aiR = null;

	function aiY(player) {
		var ev;
		return aiR[player] < 0 && (ev = ad.aC9(player), aiR[player] = (Math.round(ev[0] / 85) << 4) + (Math.round(ev[1] / 85) << 2) + Math.round(ev[2] / 85)), aiR[player]
	}

	function aiT(aiZ) {
		for (var fs, fX, jB, jE, io = aiO, a76 = bD.th.a77(io, io), iu = bD.th.getContext(a76, !0), ir = bD.th.getImageData(iu, io, io), a2a = ir.data, m4 = (io - 1) / 2, aia = (.5 + m4) * (.5 + m4), fu = 0; fu < io; fu++)
			for (fs = 0; fs < io; fs++) jB = fs - m4, jE = fu - m4, a2a[fX = 4 * (fu * io + fs)] = aiZ[0], a2a[1 + fX] = aiZ[1], a2a[2 + fX] = aiZ[2], a2a[3 + fX] = Math.max(aia - jB * jB - jE * jE, 0) * aiZ[3] / aia;
		return iu.putImageData(ir, 0, 0), a76
	}
	this.dv = function() {
		aiP = !aE.il && 9 !== aE.lR, aiQ.fill(null), (aiR = null === aiR ? new Int16Array(aE.fi) : aiR).fill(-1);
		var io = 2 * Math.floor(bQ.tF.ahU / 2) + 1;
		if (null === aiN || io !== aiO) {
			aiO = io, aiN = new Array(bj.aiS.length);
			for (var aC = 0; aC < aiN.length; aC++) aiN[aC] = aiT(bj.aiS[aC])
		}
	}, this.zD = function() {
		for (var oW = j3, ahz = i.j, ai0 = i.k, oC = jS / oW, oD = jT / oW, oP = (ahz + jS) / oW, oQ = (ai0 + jT) / oW, hK = -aiO * oW, aiU = .5 * hK, ai1 = bV.fw << 4, fl = bQ.z.mz, nE = bQ.z.nE, n3 = bQ.z.n3, aG3 = bj.aG3, a76 = aiN, iu = zE,
				aC = 0; aC < fl; aC++) {
			var jA = nE[aC],
				fs = ahz * (jA % ai1 / 16 - oC) / (oP - oC) + aiU,
				jA = ai0 * (Math.floor(jA / ai1) / 16 - oD) / (oQ - oD) + aiU;
			ahz < fs || ai0 < jA || fs < hK || jA < hK || (iu.setTransform(oW, 0, 0, oW, fs, jA), fs = n3[aC] >> 3, jA = aiP ? function(player) {
				player = aiY(player);
				{
					var aiZ;
					null === aiQ[player] && (aiZ = [85 * (player >> 4), 85 * (player >> 2 & 3), 85 * (3 & player), 180], aiQ[player] = aiT(aiZ))
				}
				return aiQ[player]
			}(fs) : a76[aG3[fs]], iu.drawImage(jA, 0, 0))
		}
		iu.globalAlpha = 1, iu.setTransform(oW, 0, 0, oW, 0, 0)
	}, this.ai3 = function(player) {
		var hK;
		return aiP ? 600 < 85 * (((hK = aiY(player)) >> 4) + (hK >> 2 & 3) + (3 & hK)) : 600 < (hK = bj.aZM[bj.aG3[player]])[0] + hK[1] + hK[2]
	}
}

function agL() {
	var aic = null,
		aid = null,
		aie = null,
		aif = null,
		aig = null,
		aih = 0;
	this.dv = function() {
		var hE;
		null === aic && (hE = bQ.z.lN, aic = new Int32Array(hE), aid = new Int32Array(hE), aie = new Uint16Array(hE), aif = new Uint16Array(hE), aig = new Uint16Array(8192))
	}, this.aii = function() {
		for (var jA, aij, m4 = bQ.z, fl = m4.mz, ai1 = bV.fw << 4, aC = 0; aC < fl; aC++) aie[aC] = 0, aif[aC] = 0, aic[aC] = 0, aid[aC] = 0, 65535 !== m4.agz[aC] && (jA = m4.nE[aC], aij = bP.jY(m4.n1[aC][m4.nD[aC] + 1]), aic[aC] = aij % ai1 -
			jA % ai1, aid[aC] = bO.gC(aij, ai1) - bO.gC(jA, ai1));
		aih = 0
	}, this.aik = function(ail, aim, jB, jE) {
		jB = aic[ail] * jB + aid[ail] * jE;
		aie[ail]++, jB < 0 ? aif[ail]++ : 0 < jB && aih < 4096 && (aig[2 * aih] = ail, aig[2 * aih + 1] = aim, aih++)
	}, this.aio = function() {
		var m4 = bQ.z,
			aCR = m4.ahj;
		aCR.fill(0, 0, m4.mz);
		for (var aC = 0; aC < aih; aC++) ! function(aC) {
			return (0 !== aic[aC] || 0 !== aid[aC]) && 0 < aie[aC] && aif[aC] === aie[aC]
		}(aig[2 * aC + 1]) && (aCR[aig[2 * aC]] = 1)
	}
}

function agB() {
	this.air = function(player, id) {
		for (var ais = ah.hS[player], fl = ais.length, aC = 0; aC < fl; aC++)
			if (bP.j4(ais[aC], id)) return !0;
		return !1
	}, this.ait = function(player, fX) {
		for (var jJ, aiu, fP, ais = ah.hS[player], fl = ais.length, j = bV.fw, aiw = bP.ft(fX), aix = bP.fv(fX), fr = -1, min = bV.fw * bV.fw + bV.fx * bV.fx, id = ad.fT(bP.fb(fX)), aC = 0; aC < fl; aC++)(aiu = (aiu = aiw - (jJ = (fP = ais[
			aC]) >> 2) % j) * aiu + (aiu = aix - ~~((.5 + jJ) / j)) * aiu) < min && bP.j4(fP, id) && (min = aiu, fr = jJ);
		return fr
	}, this.lz = function(jI, jJ) {
		for (var id = ad.fT(bP.fb(jJ)), j5 = bP.ix, fP = bP.fb(jI), aiy = -1, aC = 0; aC < 4; aC++) {
			var fa = fP + j5[aC];
			ad.iT(fa) && ad.fT(fa) === id && (-1 === aiy || bP.jK(bP.fZ(fa), jJ) < bP.jK(aiy, jJ)) && (aiy = bP.fZ(fa))
		}
		return aiy
	}, this.mY = function(player, fX) {
		for (var j5 = bP.ix, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + j5[aC];
			if (ad.hL(fa) && ad.a26(player, fa)) return !0
		}
		return !1
	}, this.mZ = function(player, fX) {
		for (var j5 = bP.ix, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + j5[aC];
			if (ad.fc(fa)) return !0;
			if (ad.hL(fa)) {
				fa = ad.fd(fa);
				if (player !== fa && bw.fe(player, fa)) return !0
			}
		}
		return !1
	}, this.n5 = function(fX) {
		for (var j5 = bP.ix, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + j5[aC];
			if (ad.hL(fa)) {
				fa = ad.fd(fa);
				if (bD.h7.kW(fa)) return fa
			}
		}
		return -1
	}, this.ah2 = function(fP) {
		if (ad.iT(fP))
			for (var j5 = bP.ix, aC = 0; aC < 4; aC++)
				if (ad.fg(fP + j5[aC])) return !0;
		return !1
	}, this.oB = function(player, id) {
		for (var w8 = player << 3, w9 = w8 + bQ.z.lD[player], n2 = bQ.z.n2, aCc = bQ.z.aCc, aC = w8; aC < w9; aC++) {
			var aCd = aCc[aC];
			if (n2[aCd] === id) return aCd
		}
		return -1
	}, this.oG = function(player) {
		return 0 === bQ.z.lD[player] ? -1 : bQ.z.aCc[player << 3]
	}, this.aA6 = function(mO, mP) {
		var fl = bQ.z.mz;
		if (fl < 1) return -1;
		for (var nE = bQ.z.nE, aB7 = bQ.z.aB7, aiz = 0, aYq = -1, aC = 0; aC < fl; aC++) {
			var g1 = bP.j7(mO, mP, nE[aC]);
			g1 <= bQ.a9u.aj0(aB7[aC]) && (-1 === aYq || g1 < aiz) && (aiz = g1, aYq = aC)
		}
		return aYq
	}, this.agf = function(o9) {
		for (var fl = bQ.z.mz, n2 = bQ.z.n2, aC = 0; aC < fl; aC++)
			if (n2[aC] === o9) return bR.gN[2] = aC, !0;
		return !1
	}, this.aj1 = function(fP) {
		return ad.fc(fP) ? aE.fi : ad.hL(fP) ? ad.fd(fP) : -1
	}, this.aj2 = function(aj3, ii) {
		return 3 < ii ? -1 : this.aj1(bP.fb(bP.jd(aj3, ii)))
	}, this.aCe = function(nB) {
		var m4 = bQ.z,
			aFC = af.aQT(m4.n3[nB] >> 3);
		return bO.gC(m4.aCf[nB] * aFC, 1024)
	}, this.aQR = function(player) {
		for (var m4 = bQ.z, w8 = player << 3, w9 = w8 + m4.lD[player], gD = 0, aC = w8; aC < w9; aC++) gD += m4.aCf[m4.aCc[aC]];
		return gD
	}, this.aOr = function(player) {
		for (var w8 = player << 3, w9 = w8 + bQ.z.lD[player], aCc = bQ.z.aCc, aB7 = bQ.z.aB7, iY = 0, aC = w8; aC < w9; aC++) iY += aB7[aCc[aC]];
		return iY
	}, this.aj4 = function(player, agv) {
		agv = bQ.z.n1[agv];
		return this.mY(player, agv[agv.length - 1])
	}, this.aj5 = function(jI, jJ, g1, aj6) {
		var jM = bP.ft(jI),
			jI = bP.fv(jI),
			jO = bP.ft(jJ),
			jJ = bP.fv(jJ),
			jO = (g1 = Math.max(g1, 1), jO - jM),
			jJ = jJ - jI,
			jB = bO.gC(Math.abs(jO) * aj6, g1),
			aj6 = bO.gC(Math.abs(jJ) * aj6, g1);
		return bP.g8(jM + Math.sign(jO) * jB, jI + Math.sign(jJ) * aj6)
	}, this.agp = function(mU, fX) {
		for (var fl = mU.length - 1, fs = bP.ft(fX), fu = bP.fv(fX), aC = 0; aC < fl; aC++) {
			var jI = mU[aC],
				jJ = mU[aC + 1],
				oC = bP.ft(jI),
				jI = bP.fv(jI),
				oP = bP.ft(jJ),
				jJ = bP.fv(jJ);
			if (!(fs !== oC && fs !== oP && Math.sign(fs - oC) === Math.sign(fs - oP) || fu !== jI && fu !== jJ && Math.sign(fu - jI) === Math.sign(fu - jJ))) {
				if (oC === oP || jI === jJ) return aC;
				if (Math.abs(fs - oC) === Math.abs(fu - jI) && Math.abs(fs - oP) === Math.abs(fu - jJ)) return aC
			}
		}
		return -1
	}, this.aGl = function() {
		for (var aj9 = mk[0], n3 = bQ.z.n3, mz = bQ.z.mz, h = [], aC = 0; aC < mz; aC++) bD.h7.ln(aj9, n3[aC] >> 3) && h.push(aC);
		return h
	}, this.mW = function(player, mU) {
		for (var w8 = player << 3, w9 = w8 + bQ.z.lD[player], aCc = bQ.z.aCc, n1 = bQ.z.n1, iF = mU[0], lm = mU[mU.length - 1], aC = w8; aC < w9; aC++) {
			var hJ = n1[aCc[aC]];
			if (hJ[0] === iF && hJ[hJ.length - 1] === lm) return !0
		}
		return !1
	}
}

function agM() {
	var aMg = 8,
		ajA = new Int32Array(aMg),
		ajB = new Uint16Array(aMg),
		ajC = new Uint16Array(aMg),
		ajD = new Int32Array(aMg),
		ajE = 0,
		ajF = 0,
		ajG = -1,
		ajH = 0,
		ajI = 0,
		ajJ = 0,
		ajK = new Int32Array(aMg);

	function ajO(ajW, ajX, ajM) {
		var m4 = bQ.z,
			ajY = bP,
			tF = bQ.tF,
			mU = m4.n1[ajM],
			fl = mU.length,
			a1P = m4.nD[ajM] + 1;
		if (65535 === m4.agz[ajM] && fl - 1 <= a1P) return bQ.sD.agy(ajM);
		for (var ajZ = ajP(m4.aB7[ajM]), aja = ajY.jD(ajW), ajb = ajY.jG(ajW), ajW = ajY.jD(m4.nE[ajM]), m4 = ajY.jG(m4.nE[ajM]), oC = ajW, oD = m4, aje = 0, ij = a1P; ij < fl; ij++) {
			var jA = ajY.jY(mU[ij]),
				jB = ajY.jD(jA) - oC,
				jA = ajY.jG(jA) - oD;
			aje += Math.sqrt(jB * jB + jA * jA), oC += jB, oD += jA
		}
		var aRv = Math.max(16 * tF.ahI, aje / tF.ahJ),
			em = aRv,
			ajf = 0,
			oC = ajW,
			oD = m4;
		for (ij = a1P; ij < fl; ij++) {
			for (var aij = ajY.jY(mU[ij]), oP = ajY.jD(aij), oQ = ajY.jG(aij), ajg = Math.sqrt((oP - oC) * (oP - oC) + (oQ - oD) * (oQ - oD)); em <= ajf + ajg;) {
				var oO = (em - ajf) / Math.max(ajg, 1),
					fs = oC + oO * (oP - oC),
					oO = oD + oO * (oQ - oD);
				if (Math.sqrt((fs - aja) * (fs - aja) + (oO - ajb) * (oO - ajb)) * ajZ <= em * ajX) return function(fs, fu, ajj) {
					fs = bP.g8(Math.floor(fs / 16), Math.floor(fu / 16));
					if (ad.iT(bP.fb(fs))) return fs;
					return ajj
				}(fs, oO, mU[ij]);
				em += aRv
			}
			ajf += ajg, oC = oP, oD = oQ
		}
		return mU[fl - 1]
	}

	function ajP(iY) {
		var tF = bQ.tF;
		return tF.ah4 + Math.min(tF.ah5 * iY, tF.ah6) + Math.min(iY >> 3, tF.ah7)
	}
	this.dv = function() {
		ajA.fill(-1), ajG = -1
	}, this.iR = function(player, fX) {
		return !!bQ.nF.nG(player) && -1 !== (player = function(player, fX) {
			var aC, m4 = bQ.z,
				fl = m4.mz,
				aiz = bP.iz(),
				aYq = -1;
			for (aC = 0; aC < fl; aC++) {
				var agS = bQ.sD.agy(aC),
					g1 = bP.jH(fX, agS);
				aiz <= g1 || !bD.h7.ln(player, m4.n3[aC] >> 3) || (agS = ad.fT(bP.fb(agS)), bQ.ly.air(player, agS) && (aiz = g1, aYq = aC))
			}
			return aYq
		}(player, fX)) && (ajE = bQ.z.n3[player] >> 3, ajF = bQ.z.n2[player], !0)
	}, this.iS = function(jR) {
		var ajN, iY, fX, player = aE.fV,
			ajM = bQ.ly.oB(ajE, ajF);
		ajM < 0 || (fX = bQ.sD.agy(ajM), -1 !== (ajN = bQ.ly.ait(player, fX)) && (iY = ah.hn[player] * (jR + 1) / 1024, fX = ajO(bP.jY(ajN), ajP(iY), ajM)), function(player) {
			var aC, m4 = bQ.z,
				w8 = player << 3,
				fl = m4.lD[player];
			for (ajK.fill(-1), aC = 0; aC < fl; aC++) ajK[aC] = m4.n2[m4.aCc[w8 + aC]]
		}(player), ajG = fX, ajH = ajE, ajI = ajF, ajJ = bi.l6(), bR.gN[6] = 7, bB.iD.iP(jR, fX))
	}, this.aCR = function(o9) {
		for (var aC = 0; aC < aMg; aC++) ajA[aC] === o9 && (ajA[aC] = -1)
	}, this.eq = function() {
		if (!aE.hu && !aE.hv && bD.h7.hx(1) && bD.h7.hy(aE.fV))
			for (var ajS = bi.l6(), ajU = (-1 !== ajG && ! function(ajS) {
					var aC, player = aE.fV,
						m4 = bQ.z,
						w8 = player << 3,
						w9 = w8 + m4.lD[player];
					for (aC = w8; aC < w9; aC++) {
						var nB = m4.aCc[aC],
							mU = m4.n1[nB];
						if (m4.n0[nB] % 64 == 7 && mU[mU.length - 1] === ajG && ! function(o9) {
								var aC;
								for (aC = 0; aC < aMg; aC++)
									if (ajK[aC] === o9) return 1;
								return
							}(m4.n2[nB])) return function(o9) {
							var aC;
							for (aC = 0; aC < aMg; aC++)
								if (-1 === ajA[aC] || ajA[aC] === o9) return ajA[aC] = o9, ajB[aC] = ajH, ajC[aC] = ajI, ajD[aC] = ajG
						}(m4.n2[nB]), ajG = -1
					}
					ajS - ajJ > bQ.tF.ahH && (ajG = -1)
				}(ajS), ajS % bQ.tF.ahG == 0), aC = 0; aC < aMg; aC++) - 1 !== ajA[aC] && ! function(hK, ajU) {
				var ajM, player = aE.fV,
					nB = bQ.ly.oB(player, ajA[hK]);
				nB < 0 || !bQ.sD.ajV(nB) ? ajA[hK] = -1 : (ajM = bQ.ly.oB(ajB[hK], ajC[hK])) < 0 ? (ajA[hK] = -1, bB.iD.sC(bQ.z.n2[nB])) : ajU && (ajU = bQ.z, ajU = ajO(ajU.nE[nB], ajP(ajU.aB7[nB]), ajM), bP.jH(ajU, ajD[hK]) <= bQ.tF.ahK || !
					bQ.tA.has(player) || (nB = 7 + (ajU << 3), bQ.sD.e3(player, ajA[hK], nB) < 0) || (ajD[hK] = ajU, bB.iD.sG(ajA[hK], nB)))
			}(aC, ajU)
	}
}

function agC() {
	function ajo(player, agv) {
		agv = bP.jZ(bQ.z.nE[agv]), agv = ad.fT(bP.fb(agv));
		return !!bQ.ly.air(player, agv)
	}

	function ajm(player) {
		return bQ.nF.nG(player) && !bQ.mV.mb()
	}
	this.iR = function(player, fX) {
		return !!ajm(player) && -1 !== (fX = function(player, fX) {
			for (var fl = bQ.z.mz, nE = bQ.z.nE, n3 = bQ.z.n3, aiz = bP.iz(), aYq = -1, aC = 0; aC < fl; aC++) {
				var g1 = bP.jH(fX, bP.jZ(nE[aC]));
				g1 < aiz && bD.h7.ln(player, n3[aC] >> 3) && (aiz = g1, aYq = aC)
			}
			return aYq
		}(player, fX)) && !!ajo(player, fX) && (bR.gN[3] = bQ.z.n2[fX], !0)
	}, this.sA = function(player, o9) {
		return !!ajm(player) && !!bQ.ly.agf(o9) && !!ajo(player, bR.gN[2])
	}, this.agR = function(player, o9, ajp) {
		return !! function(player, o9, ajp) {
			if (ajm(player) && bQ.ly.agf(o9)) {
				o9 = bR.gN[2];
				if (bD.h7.ln(player, bQ.z.n3[o9] >> 3)) {
					if (function(player, agv) {
							return bQ.ly.aj4(player, agv) && (bR.h[0] = bQ.mV.md(bQ.z.n1[agv]), bR.gN[1] = 6, !0)
						}(player, o9)) return 1;
					var agS = bP.jZ(bQ.z.nE[o9]),
						ajN = bQ.ly.ait(player, agS);
					if (-1 !== ajN) {
						ajN = bP.jH(ajN, agS);
						if (!(ajp && 120 < ajN)) {
							ajp = function(agv, ajs, agS) {
								var mU = bQ.z.n1[agv],
									agv = bQ.z.nD[agv],
									aju = bP.jH(agS, mU[agv + 1]);
								if (ajs <= aju) return bQ.ly.aj5(agS, mU[agv + 1], aju, ajs);
								for (var g1 = ajs - aju, fl = mU.length - 1, aC = agv + 1; aC < fl; aC++) {
									var ajv = bP.jH(mU[aC], mU[aC + 1]);
									if (g1 <= ajv) return bQ.ly.aj5(mU[aC], mU[aC + 1], ajv, g1);
									g1 -= ajv
								}
								return mU[fl]
							}(o9, ajN, agS);
							if (bQ.lw.t5(player, ajp, 1)) return bR.gN[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o9, ajp) && (player = bR.gN[2], bQ.z.n0[player] = 64 + bQ.z.n0[player] % 64, bQ.n8.eu(o9, bQ.z.nI), !0)
	}
}

function ag1() {
	function ak2(player, iY, ajy, agS) {
		var kI;
		if (ad.fc(ajy)) kI = aE.fi;
		else {
			if ((kI = ad.fd(ajy)) === player) return void bg.hB(player, iY - bD.h7.hA(player, iY), 12);
			if (!bw.fe(player, kI)) return void bB.lB.sU(player, kI, iY)
		}
		ae.kU(player, kI) || ae.kn(player) ? (ah.hD[player].push(agS << 2), ae.eu(player, iY, kI), aG.kG(player, !0)) : bg.hB(player, iY, 12)
	}
	this.eq = function() {
		for (var n0 = bQ.z.n0, nE = bQ.z.nE, agz = bQ.z.agz, aC = bQ.z.mz - 1; 0 <= aC; aC--) 65535 === agz[aC] && n0[aC] % 64 != 7 && function(aC, agS, ii) {
			if (6 === ii) {
				if (bQ.n8.agj(aC, agS)) return bQ.z.nD[aC]++, bQ.z.agz[aC] = 0, 0
			} else {
				var player = bQ.z.n3[aC] >> 3,
					iY = bQ.z.aB7[aC],
					ajy = -1;
				if (ii < 4)
					if (-1 === (ajy = -1 !== (ajy = function(agS, target) {
							for (var j5 = bP.ix, fa = bP.fb(agS), g4 = 0; g4 < 4; g4++)
								if (0 <= target && bQ.ly.aj1(fa + j5[g4]) === target) return fa + j5[g4];
							return -1
						}(agS, bQ.z.ahk[aC])) || bD.h7.kW(player) ? ajy : function(agS, player) {
							var g4, fp, j5 = bP.ix,
								fa = bP.fb(agS);
							for (g4 = 0; g4 < 4; g4++)
								if (fp = fa + j5[g4], ad.fc(fp)) return fp;
							for (g4 = 0; g4 < 4; g4++)
								if (fp = fa + j5[g4], ad.a23(player, fp)) return fp;
							return -1
						}(agS, player)) && bD.h7.kW(player)) ii = 4;
					else if (-1 === ajy) return bQ.z.n0[aC] = 7, 0;
				bg.ak1(player), bQ.z.aCf[aC] = 0, ii < 4 ? ak2(player, iY, ajy, agS) : 4 === ii ? function(player, iY, agS) {
					var aC, fp, j5 = bP.ix,
						fa = bP.fb(agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.fc(fp)) return ak2(player, iY, fp, agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.hL(fp) && !ad.a26(player, fp)) return ak2(player, iY, fp, agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.hL(fp)) return ak2(player, iY, fp, agS)
				}(player, iY, agS) : 5 === ii && function(player, iY, agS) {
					var aC, fp, j5 = bP.ix,
						fa = bP.fb(agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.hL(fp) && ad.a26(player, fp)) return ak2(player, iY, fp, agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.hL(fp)) return ak2(player, iY, fp, agS);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + j5[aC], ad.fc(fp)) return ak2(player, iY, fp, agS)
				}(player, iY, agS)
			}
			return 1
		}(aC, bP.jZ(nE[aC]), n0[aC] % 64) && (bQ.n8.agg(aC), bQ.aOu.ahb(aC))
	}, this.ajx = function(player, fX, ii, o9, iY) {
		if (!(5 <= ii)) {
			var ahy = aE.fV;
			if (bD.h7.hy(ahy) && bw.fe(player, ahy) && player !== ahy && 0 !== ah.hS[ahy].length && bD.h7.a7m(player, 5)) {
				for (var ajy, fz = !1, aC = 0; aC < 4; aC++)
					if (ajy = fX + bP.iw[aC] << 2, ad.fg(ajy) && !ad.fc(ajy) && ad.fd(ajy) === ahy) {
						fz = !0;
						break
					} fz && (aO.aBI(719, 0), ii = iY < 25e3 ? L(559) + " (" + bD.pf.a3N(iY) + ") ⛵" : L(560) + " (" + bD.pf.a3N(iY) + ") 🚢", aO.a2X(180, ii, 719, player, bE.r2, bE.qQ, -1, !0, void 0, {
					g5: 1,
					o9: o9
				}))
			}
		}
	}
}

function afy() {
	this.lN = 512, this.ah1 = 6, this.mz = 0, this.nI = 0, this.n3 = new Uint16Array(this.lN), this.nE = new Uint32Array(this.lN), this.agz = new Uint16Array(this.lN), this.aB7 = new Uint32Array(this.lN), this.ahg = new Uint16Array(this.lN), this
		.n2 = new Uint16Array(this.lN), this.n0 = new Uint8Array(this.lN), this.ahi = new Uint8Array(this.lN), this.ahj = new Uint8Array(this.lN), this.n1 = new Array(this.lN), this.nD = new Uint16Array(this.lN), this.ah0 = new Uint32Array(this.lN),
		this.aCf = new Uint16Array(this.lN), this.ahk = new Int16Array(this.lN);
	var ak5 = new Float64Array(this.lN);
	this.lD = new Uint8Array(aE.fi), this.aCc = new Uint16Array(aE.fi << 3), this.dv = function() {
		this.mz = 0, this.nI = 0, this.lD.fill(0), this.n1.fill(null)
	}, this.nK = function(player, jR) {
		var iY = bR.gI[0],
			n4 = bR.gN[1],
			mU = bR.h[0],
			ak6 = this.nI,
			fl = this.mz,
			ak7 = bP.jY(mU[0]),
			ak8 = this.lD[player],
			ak9 = (player << 3) + ak8;
		this.n3[fl] = ak9, this.nE[fl] = ak7, this.agz[fl] = 0, iY < 60 && (bD.h7.h8(player, 60 - iY), iY = 60), this.aB7[fl] = iY, this.ahg[fl] = bQ.jb.nK(fl, bP.ja(ak7)), this.n2[fl] = ak6, this.n0[fl] = n4, this.ahi[fl] = 0, this.ahj[fl] = 0,
			this.n1[fl] = mU, this.nD[fl] = 0, this.ah0[fl] = ak7, this.aCf[fl] = jR + 1, this.ahk[fl] = bQ.ly.aj2(mU[mU.length - 1], n4), this.nI = (ak6 + 1) % 65536, this.lD[player] = ak8 + 1, this.aCc[ak9] = fl, this.mz++, bQ.n4.ajx(player,
				mU[mU.length - 1], n4, ak6, iY), bQ.aB8.show(player, ak6)
	}, this.eq = function() {
		bQ.n4.eq(), bQ.tA.eq();
		var tF = bQ.tF;
		if (! function(v0) {
				var akE, tF = bQ.tF,
					akG = tF.ah3;
				if (bi.l6() % akG == 0)
					for (var aPp, nE = v0.nE, aB7 = v0.aB7, ahj = v0.ahj, agz = v0.agz, ahg = v0.ahg, fl = v0.mz, ai1 = bV.fw << 4, aC = fl - 1; 0 <= aC; aC--) 65535 === agz[aC] || ahj[aC] || (aPp = aB7[aC], aPp = tF.ah4 + Math.min(tF.ah5 * aPp,
						tF.ah6) + Math.min(aPp >> 3, tF.ah7), akE = nE[aC], nE[aC] = aPp = function(v0, aC, g1, ai1) {
						var mU = v0.n1[aC],
							fl = mU.length,
							agw = v0.nD[aC],
							ak7 = 0 === agw ? v0.ah0[aC] : bP.jY(mU[agw]),
							aij = bP.jY(mU[agw + 1]),
							akI = ak7 % ai1,
							akJ = ~~((ak7 + .5) / ai1),
							akK = aij % ai1,
							akL = ~~((aij + .5) / ai1),
							akM = akK - akI,
							akN = akL - akJ,
							fo = Math.max(~~Math.sqrt(akM * akM + akN * akN + .5), 1),
							ak7 = bO.gC(fo * (65535 - v0.agz[aC]), 65535) + function(mU, from, ai1) {
								for (var eT = 0, fl = mU.length - 1, ij = from; ij < fl; ij++) {
									var ak7 = bP.jY(mU[ij]),
										aij = bP.jY(mU[ij + 1]),
										jB = aij % ai1 - ak7 % ai1,
										aij = bO.gC(aij, ai1) - bO.gC(ak7, ai1);
									eT += ~~Math.sqrt(jB * jB + aij * aij + .5)
								}
								return eT
							}(mU, agw + 1, ai1),
							hE = bO.gC(65535 * ak7 + g1 - 1, g1);
						if (hE <= 1) return v0.nD[aC] = fl - 2, v0.agz[aC] = 65535, bP.jY(mU[fl - 1]);
						g1 = bO.gC(65535 * ak7, hE);
						var akP = v0.agz[aC] + Math.max(bO.gC(g1, fo), 1);
						for (; 65535 <= akP && agw + 2 < fl;) {
							agw++, akI = akK, akJ = akL, aij = bP.jY(mU[agw + 1]), akM = (akK = aij % ai1) - akI, akN = (akL = ~~((aij + .5) / ai1)) - akJ;
							var akQ = Math.max(~~Math.sqrt(akM * akM + akN * akN + .5), 1);
							akP = bO.gC((akP - 65535) * fo, akQ), fo = akQ
						}
						if (v0.nD[aC] = agw, 65535 <= akP) return v0.agz[aC] = 65535, aij;
						return v0.agz[aC] = akP, akI + bO.gC(akP * akM, 65535) + ai1 * (akJ + bO.gC(akP * akN, 65535))
					}(v0, aC, aPp * akG, ai1), ahg[aC] = bQ.jb.akH(ahg[aC], akE, aPp))
			}(this), bi.l6() % tF.ah8 == 0) {
			var aC, m4, g5, ev, akR, a31, akS, iF, aEX, oC, oD, ak7, lm, akT, akU, hJ = aE.fV,
				em = bQ.ly.aOr(hJ),
				fl = (v0 = this).mz,
				nE = v0.nE,
				n3 = v0.n3,
				aB7 = v0.aB7,
				ahi = v0.ahi,
				jb = bQ.jb.jb,
				akV = jb.length,
				akW = bQ.jb.akW,
				ai1 = bV.fw << 4,
				akX = aE.il,
				adq = bj.fj,
				aiz = bQ.tF.ahE * bQ.tF.ahE,
				v0 = bQ.tF.ah8,
				akY = 1 << Math.min(v0 + 1, 7),
				hk = ak5;
			for (hk.fill(0, 0, fl), aC = 0; aC < fl; aC++)
				for (ak7 = nE[aC], m4 = bP.ja(ak7), iF = n3[aC] >> 3, oC = ak7 % ai1, oD = ~~((ak7 + .5) / ai1), akU = aB7[aC], g5 = 0; g5 < 9; g5++)
					if (!((akR = m4 + akW[g5]) < 0 || akV <= akR))
						for (akS = jb[akR], a31 = akS.length, ev = 0; ev < a31; ev++) akT = akS[ev], lm = n3[akT] >> 3, iF == lm || akX && adq[iF] === adq[lm] && adq[iF] || (lm = nE[akT], (aEX = oC - lm % ai1) * aEX + (aEX = oD - ~~((lm + .5) /
							ai1)) * aEX < aiz && (hk[akT] += akU));
			for (aC = 0; aC < fl; aC++) 0 !== hk[aC] && (aB7[aC] = Math.max(aB7[aC] - hk[aC], 0), ahi[aC] = akY);
			bg.hB(hJ, em - bQ.ly.aOr(hJ), 15)
		}
		bi.l6() % tF.ah9 === tF.ahA && ! function(v0) {
				for (var g5, fP, aB7 = v0.aB7, n3 = v0.n3, tD = ah.hn, tF = bQ.tF, hK = tF.ahB, fl = v0.mz, aC = 0; aC < fl; aC++) {
					var player = n3[aC] >> 3,
						aFC = af.aQT(player),
						target = bQ.ly.aCe(aC),
						gD = aB7[aC];
					gD < target ? (g5 = Math.min(bO.gC(tD[player], tF.ahC), gD), fP = Math.max(bO.gC(g5, hK), 1), fP = Math.min(fP, target - gD, tD[player]), aB7[aC] = gD + fP, tD[player] -= fP) : target < gD && (g5 = Math.max(bO.gC(aFC, tF.ahD),
						gD), fP = Math.max(bO.gC(g5, hK), 1), fP = Math.min(fP, gD - target), aB7[aC] = gD - fP, bD.h7.hA(player, fP))
				}
			}(this),
			function(v0) {
				for (var aB7 = v0.aB7, ahi = v0.ahi, aC = v0.mz - 1; 0 <= aC; aC--) ahi[aC] = ahi[aC] >> 1, 0 === aB7[aC] && (bQ.n8.agg(aC), bQ.aOu.ahb(aC))
			}(this)
	}
}

function afz() {
	this.akZ = 32, this.shift = 5, this.fs = 0, this.fu = 0, this.jc = 0, this.aka = 0, this.akb = 4, this.jb = null, this.akW = new Int16Array(9), this.dv = function() {
		for (this.shift = 5; 16 << this.shift < bQ.tF.ahE;) this.shift++;
		this.akZ = 1 << this.shift, this.jc = 1 + bO.gC(bV.fw - 1, this.akZ), this.aka = 1 + bO.gC(bV.fx - 1, this.akZ), this.jb = new Array(this.jc * this.aka), bD.tp.a6d(this.jb);
		var fs, fu, akW = this.akW,
			j = this.jc;
		for (fs = -1; fs <= 1; fs++)
			for (fu = -1; fu <= 1; fu++) akW[3 * (1 + fu) + 1 + fs] = fu * j + fs
	}, this.nK = function(akd, aC) {
		return this.jb[aC].push(akd), this.jb[aC].length - 1
	}, this.akH = function(ake, ak7, aij) {
		var akf, akg, ak7 = bP.ja(ak7),
			aij = bP.ja(aij);
		return ak7 === aij ? ake : (akf = this.jb[ak7].pop(), this.jb[ak7].length === ake ? this.nK(akf, aij) : (akg = this.jb[ak7][ake], this.jb[ak7][ake] = akf, bQ.z.ahg[akf] = ake, this.nK(akg, aij)))
	}
}

function ag3() {
	function akp(akm, akh) {
		var mU;
		return akm === akh ? new Uint32Array([akm, akh]) : null !== (mU = bQ.ag4.akq(akm, akh)) ? mU : function(akm, akh) {
			var aC, fo, fX, fr, a0o, a51, a8X, h, gS = bR.gS,
				buffer = (gS.fill(0), [akh]),
				iy = (gS[akh] = 1, bP.iy),
				fl = buffer.length;
			for (; 0 === gS[akm] && fl;) {
				for (h = [], aC = 0; aC < fl; aC++)
					for (fX = buffer[aC], a8X = gS[fX], fo = 0; fo < 8; fo++) fr = fX + iy[fo], ad.iT(4 * fr) && (a0o = gS[fr], a51 = a8X + 5 + ((1 & fo) << 1), 0 === a0o ? (h.push(fr), gS[fr] = a51) : gS[fr] = Math.min(a51, a0o));
				fl = (buffer = h).length
			}
			return 0 !== gS[akm] ? aks(akh, akm) : null
		}(akm, akh)
	}

	function aks(jI, aky) {
		for (var iy = bP.iy, akz = -1, ii = 0, nh = []; aky !== jI;)(ii = function(fX, ii) {
			var gS = bR.gS,
				iy = bP.iy,
				a8X = gS[fX];
			if (a8X - gS[fX + iy[ii]] != 5 + ((1 & ii) << 1))
				for (var g4 = 0; g4 < 8; g4++) {
					var fo = g4 + ii + 6 & 7;
					if (a8X - gS[fX + iy[fo]] == 5 + ((1 & fo) << 1)) return fo
				}
			return ii
		}(aky, ii)) !== akz && (nh.push(aky), akz = ii), aky += iy[ii];
		return nh.push(jI), new Uint32Array(nh)
	}
	this.lx = function(player, akh) {
		return -1 !== akh && !!bQ.ly.mZ(player, akh) && this.t5(player, akh, 0, !0)
	}, this.t5 = function(player, akh, aki, akj) {
		player = function(player, akh, aki, akj) {
			var ajN = bQ.ly.ait(player, akh);
			if (-1 === ajN) return -1;
			ajN = bQ.ly.lz(ajN, akh);
			if (-1 === ajN) return -1;
			var akt = bP.jY(ajN);
			if (bQ.ag4.akn(akt, bP.jY(akh))) return bR.h[0] = new Uint32Array([ajN, akh]), -2;
			if (!akj) return null === (akt = akp(ajN, akh)) ? -1 : (bR.h[0] = akt, -2);
			akj = bQ.mV.ma(ajN, akh);
			if (0 <= akj) return akj;
			if (bQ.mV.mb()) return -1;
			if (0 <= (akj = bQ.mV.ma(akh, ajN))) return bQ.mV.mc(bQ.mV.md(bQ.mV.get(akj)));
			if (ajN === akh) return bQ.mV.mc(new Uint32Array([ajN, akh]));
			if (0 <= (akj = bQ.ag4.t5(ajN, akh))) return akj;
			return aki ? function(akv, player) {
				var aky, gS = bR.gS,
					buffer = (gS.fill(0), [akv]),
					iy = (gS[akv] = 1, bP.iy),
					akw = -1,
					fl = buffer.length;
				for (; - 1 === akw && fl;) {
					for (var h = [], aC = 0; aC < fl; aC++)
						for (var fX = buffer[aC], a8X = gS[fX], fo = 0; fo < 8; fo++) {
							var a0o, a51, fr = fX + iy[fo],
								fP = 4 * fr;
							ad.iT(fP) ? (a0o = gS[fr], a51 = a8X + 5 + ((1 & fo) << 1), 0 === a0o ? (h.push(fr), gS[fr] = a51) : gS[fr] = Math.min(a51, a0o)) : -1 === akw && fo % 2 == 0 && ad.a23(player, fP) && (akw = fX)
						}
					fl = (buffer = h).length
				}
				return -1 !== akw ? (aky = aks(akv = akv, aky = akw), 0 <= (akv = bQ.mV.ma(aky[0], akv)) ? akv : bQ.mV.mc(aky)) : -1
			}(akh, player) : -1
		}(player, akh, aki, akj);
		if (-2 !== player) {
			if (-1 === player) return !1;
			bR.h[0] = bQ.mV.get(player)
		}
		return !0
	}, this.akl = function(ak7, akm, akh) {
		return bQ.ag4.akn(ak7, bP.jY(akh)) ? (bR.h[0] = new Uint32Array([akm, akh]), !0) : this.ako(akm, akh)
	}, this.ako = function(akm, akh) {
		akm = akp(akm, akh);
		return null !== akm && (bR.h[0] = akm, !0)
	}
}

function ag5() {
	function akk(akm, akh) {
		var jM = bP.ft(akm),
			jN = bP.fv(akm),
			jO = bP.ft(akh),
			jP = bP.fv(akh);
		return jM === jO ? al2(jM, jN, jP) ? new Uint32Array([akm, akh]) : null : jN === jP ? al3(jN, jM, jO) ? new Uint32Array([akm, akh]) : null : al4(jM, jN, jO, jP, akm, akh) || al4(jO, jP, jM, jN, akm, akh)
	}

	function al2(i1, jN, jP) {
		for (var kP = Math.min(jN, jP), oU = Math.max(jN, jP), fu = kP + 1; fu < oU; fu++)
			if (!ad.iT(bP.jV(i1, fu))) return;
		return 1
	}

	function al3(i3, jM, jO) {
		for (var kP = Math.min(jM, jO), oU = Math.max(jM, jO), fs = kP + 1; fs < oU; fs++)
			if (!ad.iT(bP.jV(fs, i3))) return;
		return 1
	}

	function al4(jM, jN, jO, jP, akm, akh) {
		for (var fl = Math.min(Math.abs(jO - jM), Math.abs(jP - jN)), jB = Math.sign(jO - jM), jE = Math.sign(jP - jN), aC = 0; aC < fl; aC++)
			if (!ad.iT(bP.jV(jM += jB, jN += jE))) return null;
		return jM === jO ? al2(jM, jN, jP) ? new Uint32Array([akm, bP.g8(jM, jN), akh]) : null : al3(jN, jM, jO) ? new Uint32Array([akm, bP.g8(jM, jN), akh]) : null
	}
	this.akn = function(ak7, aij) {
		for (var ai1 = bV.fw << 4, oC = ak7 % ai1, oD = bO.gC(ak7, ai1), jB = aij % ai1 - oC, jE = bO.gC(aij, ai1) - oD, hE = Math.max(Math.abs(jB), Math.abs(jE)), al1 = -1, aC = 0; aC <= hE; aC++) {
			var fs = oC + bO.gC(jB * aC, Math.max(hE, 1)),
				fu = oD + bO.gC(jE * aC, Math.max(hE, 1)),
				fs = bP.g8(fs >> 4, fu >> 4);
			if (fs !== al1 && !ad.iT(bP.fb(fs))) return !1;
			al1 = fs
		}
		return !0
	}, this.akq = akk, this.t5 = function(akm, akh) {
		akm = akk(akm, akh);
		return null === akm ? -1 : bQ.mV.mc(akm)
	}
}

function agA() {
	var al5 = [];
	this.dv = function() {
		al5 = []
	}, this.mb = function() {
		return 65536 === al5.length
	}, this.ma = function(akm, akh) {
		for (var mV = al5, fl = mV.length, aC = 0; aC < fl; aC++) {
			var hJ = mV[aC];
			if (hJ[0] === akm && hJ[hJ.length - 1] === akh) return aC
		}
		return -1
	}, this.md = function(mU) {
		var al6 = new Uint32Array(mU.length);
		return al6.set(mU), al6.reverse()
	}, this.agn = function(iF, lm) {
		var hE = iF.length - 1,
			al7 = new Uint32Array(hE + lm.length);
		return al7.set(iF, 0), al7.set(lm, hE), al7
	}, this.ags = function(iF, lm, a0I, fX, al8) {
		al8 && (a0I = (lm = this.md(lm)).length - a0I - 2);
		al8 = lm.subarray(a0I + 1 + (fX === lm[a0I + 1])), fX = new Uint32Array(iF.length + al8.length);
		return fX.set(iF, 0), fX.set(al8, iF.length), fX
	}, this.mc = function(mU) {
		return al5.push(mU), al5.length - 1
	}, this.get = function(aC) {
		return al5[aC]
	}, this.mX = function() {
		return al5
	}, this.alA = function(akm, akh) {
		return null
	}
}

function agH() {
	this.e3 = function(player, o9, s6) {
		player = bQ.ly.oB(player, o9);
		return player < 0 || !this.ajV(player) || (o9 = 7 & s6, !bP.jW(s6 = s6 >> 3)) || 3 < o9 && 7 != o9 || (bR.gN[1] = o9, !bQ.nF.t4(s6)) || (o9 = bP.fb(this.agy(player)), !ad.iT(o9)) || ad.fT(o9) !== ad.fT(bP.fb(s6)) ? -1 : player
	}, this.tB = function(player, nB, s6) {
		var m4 = bQ.z,
			fX = s6 >> 3,
			s6 = 7 & s6,
			akv = this.agy(nB);
		return !!bQ.lw.akl(m4.nE[nB], akv, fX) && (m4.n1[nB] = bR.h[0], m4.nD[nB] = 0, m4.agz[nB] = 0, m4.ah0[nB] = m4.nE[nB], m4.n0[nB] = s6, m4.ahk[nB] = bQ.ly.aj2(fX, s6), bQ.n4.ajx(player, fX, s6, m4.n2[nB], m4.aB7[nB]), bQ.aB8.show(player,
			m4.n2[nB]), !0)
	}, this.t8 = function(player, o9, jR) {
		jR = Math.min(jR, 1023) + 1;
		return !!this.sE(player, o9, jR) && (bQ.z.aCf[bR.gN[2]] = jR, !0)
	}, this.sE = function(player, o9, aC2) {
		return !!bD.h7.hy(player) && !((player = bQ.ly.oB(player, o9)) < 0 || bQ.z.aCf[player] === aC2 || (bR.gN[2] = player, 0))
	}, this.ajV = function(nB) {
		nB = bQ.z.n0[nB] % 64;
		return nB < 4 || 7 == nB
	}, this.agy = function(nB) {
		var fX = bP.jZ(bQ.z.nE[nB]);
		if (!ad.iT(bP.fb(fX)))
			for (var j5 = bP.iy, aC = 0; aC < 8; aC++)
				if (ad.iT(bP.fb(fX + j5[aC]))) return fX + j5[aC];
		return fX
	}
}

function agE() {
	this.eq = function(player, o9) {
		return !!bQ.sD.sE(player, o9, 0) && (o9 = bR.gN[2], bQ.z.aCf[o9] = 0, function(player, nB) {
			var aC, g4;
			if (bQ.sD.ajV(nB)) {
				var agS = bQ.sD.agy(nB),
					alB = bP.fb(agS);
				if (ad.iT(alB)) {
					var ajl = ad.fT(alB),
						ais = ah.hS[player],
						j5 = bP.iw,
						alD = -1,
						alE = 0,
						alF = 0;
					for (aC = 0; aC < ais.length; aC++) {
						var alG = ais[aC] >> 2;
						for (g4 = 0; g4 < 4; g4++) {
							var alH = alG + j5[g4],
								aN4 = bP.fb(alH);
							ad.iT(aN4) && ad.fT(aN4) === ajl && (aN4 = bP.jK(alH, agS), -1 === alD || aN4 < alF) && (alD = alH, alE = (g4 + 2) % 4, alF = aN4)
						}
					} - 1 !== alD && bP.jW(alD) && bQ.sD.tB(player, nB, (alD << 3) + alE)
				}
			}
		}(player, o9), !0)
	}
}

function agI() {
	var ajA = -1;

	function ajR() {
		return !aE.hu && !aE.hv && bD.h7.hx(1) && bD.h7.hy(aE.fV)
	}
	this.dv = function() {
		ajA = -1
	}, this.aC6 = function() {
		var player;
		return -1 === ajA ? -1 : (player = aE.fV, !bD.h7.hy(player) || (player = bQ.ly.oB(player, ajA)) < 0 || !bQ.sD.ajV(player) ? ajA = -1 : player)
	}, this.select = function(o9) {
		var nB;
		ajR() && (-1 !== this.aC6() && ajA === o9 ? ajA = -1 : 0 <= (nB = bQ.ly.oB(aE.fV, o9)) && bQ.sD.ajV(nB) && (ajA = o9))
	}, this.click = function(mO, mP, fX, a6F) {
		var aC5;
		return ajR() ? -1 === (aC5 = this.aC6()) ? -1 !== (mO = function(mO, mP) {
			for (var player = aE.fV, m4 = bQ.z, w8 = player << 3, w9 = w8 + m4.lD[player], alI = bP.jC(mO), alJ = bP.jF(mP), aiz = 0, aYq = -1, aC = w8; aC < w9; aC++) {
				var jB, jE, nB = m4.aCc[aC];
				bQ.sD.ajV(nB) && (jB = alI - bP.jD(m4.nE[nB]), jE = alJ - bP.jG(m4.nE[nB]), jB = jB * jB + jE * jE, (jE = bQ.a9u.aj0(m4.aB7[nB])) * jE < jB && !bQ.a2C.ai6(nB, mO, mP) || (-1 === aYq || jB < aiz) && (aiz = jB, aYq = nB))
			}
			return aYq
		}(mO, mP)) && (ajA = bQ.z.n2[mO], !0) : (function(nB, fX) {
			var player = aE.fV,
				alB = bP.fb(bQ.sD.agy(nB)),
				alB = ad.fT(alB);
			bQ.iN.alK(player, fX, alB) ? bQ.tA.has(player) ? (fX = (bR.gN[7] << 3) + bR.gN[6], bQ.sD.e3(player, bQ.z.n2[nB], fX) < 0 ? bo.t7.alL() : (bQ.iQ.aCR(bQ.z.n2[nB]), bB.iD.sG(bQ.z.n2[nB], fX))) : bo.t7.alM() : bo.t7.alL()
		}(aC5, fX), a6F || (ajA = -1), !0) : !(ajA = -1)
	}, this.aj0 = function(iY) {
		var tF = bQ.tF,
			iY = 13 * (.9 + .1 * Math.log10(Math.max(iY, 1))),
			aHU = bD.th.wD(tF.ahZ, 1.7),
			aHU = bP.jU(aHU),
			iY = Math.min(tF.ahY * iY, Math.max(tF.ahX * iY, aHU));
		return bM.uA() && (iY *= tF.aha), iY
	}
}

function ag0() {
	var a2g = 32,
		a2f = new Array(2);

	function a77(ev) {
		var fs, fu, fX, jE, jB, io = a2g,
			a76 = bD.th.a77(io, io),
			iu = bD.th.getContext(a76, !0),
			ir = bD.th.getImageData(iu, io, io),
			a2a = ir.data,
			m4 = (io >> 1) - .5,
			m5 = Math.sqrt(m4 * m4);
		for (a2a.fill(255), fu = 0; fu < io; fu++)
			for (fs = 0; fs < io; fs++) jB = fs - m4, jE = fu - m4, fX = 4 * (fu * io + fs), jB = 714 * (m5 - Math.sqrt(jB * jB + jE * jE)) / m5, a2a[2 + fX] = ev, a2a[3 + fX] = 255 < jB ? 0 : jB;
		return iu.putImageData(ir, 0, 0), a76
	}
	this.alN = -1, this.dv = function() {
		this.alN = -1, a2f[0] || (a2f[0] = a77(255), a2f[1] = a77(0))
	}, this.alO = function(iu, fP, fs, fu, eT, aC) {
		bD.h7.hy(aE.fV) && (iu.setTransform(fP *= 4 / 3 * .625, 0, 0, fP, fs - (eT *= 4 / 3), fu - eT), iu.drawImage(a2f[+(bQ.z.n2[aC] === this.alN)], 0, 0))
	}
}

function ag9() {
	var alP = -1;

	function alQ(player, ae2, ajl) {
		return (ad.iT(bP.fb(ae2)) ? function(player, ae2, ajl) {
			var id = ad.fT(bP.fb(ae2));
			return !!alV(player, id, ajl) && (bR.gN[6] = 7, bR.gN[7] = ae2, !0)
		} : ((alP = bQ.ly.aj1(bP.fb(ae2))) === player && -1 === ajl && (alP = -1), alR))(player, ae2, ajl)
	}

	function alR(player, ae2, ajl) {
		for (var ae3 = bP.iz(), alT = [];;) {
			var akw = function(ae2, ae3, alT, player) {
				for (var i1 = bP.ft(ae2), i3 = bP.fv(ae2), ae5 = bV.fw - 2, aEd = bV.fx - 2, ae6 = -1, fo = 0; fo < ae3; fo++) {
					var aEc = Math.max(i1 - fo, 1),
						aTE = Math.max(i3 - fo, 1),
						a1r = Math.min(i1 + fo, ae5),
						a1q = Math.min(i3 + fo, aEd),
						jI = ae7(i1, a1r - i1, i3 - fo, alT, aEd, 1, player),
						jJ = ae7(i1 - 1, i1 - aEc - 1, i3 - fo, alT, aEd, -1, player),
						a1r = ae7(i1, a1r - i1, i3 + fo, alT, aEd, 1, player),
						aEc = ae7(i1 - 1, i1 - aEc - 1, i3 + fo, alT, aEd, -1, player),
						aeA = aeB(i3, a1q - i3 - 1, i1 - fo, alT, ae5, 1, player),
						aeC = aeB(i3 - 1, i3 - aTE - 2, i1 - fo, alT, ae5, -1, player),
						a1q = aeB(i3, a1q - i3 - 1, i1 + fo, alT, ae5, 1, player),
						aTE = aeB(i3 - 1, i3 - aTE - 2, i1 + fo, alT, ae5, -1, player);
					if (ae6 = aeF(ae6, jI, ae2), ae6 = aeF(ae6, jJ, ae2), ae6 = aeF(ae6, a1r, ae2), ae6 = aeF(ae6, aEc, ae2), ae6 = aeF(ae6, aeA, ae2), ae6 = aeF(ae6, aeC, ae2), ae6 = aeF(ae6, a1q, ae2), 0 <= (ae6 = aeF(ae6, aTE, ae2)) && fo *
						fo >= bP.jK(ae6, ae2)) return ae6
				}
				return -1
			}(ae2, ae3, alT, player);
			if (-1 === akw) break;
			var id = ad.fT(bP.fb(akw));
			if (alV(player, id, ajl)) return !! function(player, akw, ae2) {
				for (var ii = bP.jf(akw, ae2), aC = 0; aC < 4; aC++) {
					var fX = bP.jd(akw, ii);
					if (alY(bP.fb(fX), player)) return bR.gN[6] = ii, 1;
					ii = (ii + 1) % 4
				}
				return
			}(player, akw, ae2) && (bR.gN[7] = akw, !0);
			alT.push(id)
		}
		return !1
	}

	function alV(player, id, ajl) {
		return -1 === ajl ? bQ.ly.air(player, id) : id === ajl
	}

	function ae7(fs, fl, fu, alT, aEd, gB, player) {
		if (!(fu < 1 || aEd < fu))
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jV(fs, fu);
				if (bQ.ly.ah2(fP) && !bD.tp.has(alT, ad.fT(fP)) && alX(fP, player)) return fP >> 2;
				fs += gB
			}
		return -1
	}

	function aeB(fu, fl, fs, alT, ae5, gB, player) {
		if (!(fs < 1 || ae5 < fs)) {
			fl = Math.max(fl, 0);
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jV(fs, fu);
				if (bQ.ly.ah2(fP) && !bD.tp.has(alT, ad.fT(fP)) && alX(fP, player)) return fP >> 2;
				fu += gB
			}
		}
		return -1
	}

	function aeF(jI, jJ, ae2) {
		return -1 !== jJ && (-1 === jI || bP.jK(jJ, ae2) < bP.jK(jI, ae2)) ? jJ : jI
	}

	function alX(fP, player) {
		for (var j5 = bP.ix, aC = 0; aC < 4; aC++)
			if (alY(fP + j5[aC], player)) return 1
	}

	function alY(fP, player) {
		return -1 === alP ? ad.aOA(fP, player) : bQ.ly.aj1(fP) === alP
	}
	this.iO = function(player, ae2) {
		return !!bQ.nF.nG(player) && alQ(player, ae2, -1)
	}, this.alK = alQ, this.iU = function(player, ae2) {
		return !!bQ.nF.nG(player) && alR(player, ae2, alP = -1)
	}
}

function dy() {
	this.abQ = [L(561), L(562), L(563), L(564), L(565), L(566), L(567), L(568), L(569), L(570), L(571), L(572), L(573), L(574), L(575), L(576), L(577)];
	var alZ = ["Space", "", "KeyV", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", "", "KeyB",
		""
	];
	this.aH8 = new Array(alZ.length), this.dv = function() {
		var h = bm.buffer.data[155].value.split(";"),
			m4 = h.length;
		if (function() {
				for (var fl = alZ.length, aC = 0; aC < fl; aC++) ba.aH8[aC] = alZ[aC]
			}(), !(m4 > alZ.length))
			for (var aC = 0; aC < m4; aC++) h[aC].length && (this.aH8[aC] = h[aC])
	}, this.abS = function(eU, code) {
		for (var aH8 = this.aH8, alb = alZ, pb = (aH8[eU] = code, ""), fl = aH8.length, alc = [], aC = 0; aC < fl; aC++) alc.push(aH8[aC] === alb[aC] ? "" : aH8[aC]);
		fl--;
		for (aC = 0; aC < fl; aC++) pb += alc[aC] + ";";
		bm.s0.q6(155, pb += alc[fl])
	}, this.abP = function() {
		bm.s0.q6(155, ""), this.dv()
	}, this.ev = function(code, eU) {
		return code === this.aH8[eU] || code === this.aH8[eU + 1]
	}
}

function dk() {
	var ald = new Array(1),
		ale = new Array(1),
		alf = 20,
		ej = 0,
		alg = !1;

	function ali() {
		alf++, bt.play()
	}
	this.dv = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				ale[aC] = 0, ald[aC] = document.createElement("audio"), ald[aC].src = src, ald[aC].setAttribute("preload", "auto"), ald[aC].setAttribute("controls", "none"), ald[aC].style.display = "none", ald[aC].onpause = function() {
					ale[aC] = 1
				}, ald[aC].oncanplaythrough = function() {
					ale[aC] = 0 === ale[aC] ? 1 : ale[aC]
				}, document.body.appendChild(ald[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			alg = !0
		}
	}, this.yG = function() {
		if (alg) {
			alg = !1;
			for (var aC = 0; 0 <= aC; aC--) ald[aC].onpause = null, ald[aC].oncanplaythrough = null, u.removeChild(document.body, ald[aC]), ald[aC] = null
		}
	}, this.play = function() {
		if (alg) {
			var em = performance.now();
			if (ej + 66 < em)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === ale[aC]) return ej = em, ale[aC] = 2, void ald[aC].play();
			0 < alf && (alf--, setTimeout(ali, 66))
		}
	}
}

function cj() {
	this.aDC = function() {
		var alm;
		return !(am.lf < 3 || ah.hZ[mk[0]] >= aE.kt >> 1) && (aE.il ? 9 !== aE.lR && (alm = af.aQV(), !(2 * af.aQW(bk.li()) >= alm)) : function() {
			if (8 === aE.lR) return !1;
			var alm = af.aQV();
			if (2 * ah.hn[mk[0]] >= alm) return !1;
			return !0
		}())
	}
}

function cJ() {
	this.dv = function() {
		if (0 === aE.data.sResourcesType) {
			for (var ak8 = aE.l9, hn = ah.hn, aC = 0; aC < ak8; aC++) hn[aC] = 512;
			var ak9 = aE.a19,
				lM = aF.lM,
				iY = aF.iY;
			for (aC = ak8; aC < ak9; aC++) hn[aC] = lM[iY[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fl = aE.a19, hn = ah.hn, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fl; aC++) hn[aC] = sResourcesValue
		} : function() {
			for (var fl = aE.a19, hn = ah.hn, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fl; aC++) hn[aC] = sResourcesData[aC]
		})();
		bg.nh[8] = ah.hn[aE.fV]
	}
}

function da() {
	var aKT = 501,
		alu = (this.alr = new Uint32Array(aKT), this.tD = new Uint32Array(aKT), this.aGm = new Uint16Array(aKT), this.als = 0, this.alt = 0, 1),
		yY = 0;

	function alx(self) {
		self.max.fill(0)
	}

	function alz(self, aC) {
		self.max[0] = Math.max(self.alr[aC], self.max[0]), self.max[1] = Math.max(self.tD[aC], self.max[1]), self.max[2] = Math.max(self.aGm[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.alv = 0, this.nh = new Array(21), this.alw = null, this.dw = function() {
		this.alw = [L(578), L(579), L(580), L(581), L(582), L(583), L(584), L(585), L(402), L(403), L(586), L(587), L(588), L(589), "", L(590), L(591), L(592), L(360), L(593), L(594)]
	}, this.dv = function() {
		this.als = 0, this.alt = 0, alu = 1, this.alv = 0, yY = 0, alx(this), this.nh.fill(0)
	}, this.aba = function() {
		return 2 <= this.als && !this.alt
	}, this.aB4 = function() {
		0 !== bi.l6() && (this.alt = 1, bh.ib) && bh.ug()
	}, this.t2 = function(player, jR) {
		bD.h7.a7l(player) && (this.nh[0] += jR + 1, this.nh[1]++, this.nh[12] += bR.gI[1])
	}, this.sX = function(player, s3) {
		player === aE.fV && (aO.sX(bR.gI[0], bR.gI[1], s3), this.nh[12] += bR.gI[1], this.nh[16] += bR.gI[0]), s3 === aE.fV && (aO.aBM(bR.gI[0], player), this.nh[10] += bR.gI[0])
	}, this.t6 = function(player) {
		bD.h7.a7l(player) && (this.nh[2]++, this.nh[12] += bR.gI[1])
	}, this.tL = function(player) {
		bD.h7.a7l(player) && (this.nh[19]++, this.nh[12] += bR.gI[1])
	}, this.ak1 = function(player) {
		bD.h7.a7l(player) && this.nh[20]++
	}, this.hB = function(player, a8X, eU) {
		bD.h7.a7l(player) && (this.nh[eU] += a8X)
	}, this.eq = function() {
		var self;
		this.alv || 0 < yY-- || ((self = this).alr[self.als] = ah.hZ[aE.fV], self.tD[self.als] = ah.hn[aE.fV], self.aGm[self.als] = af.aGn(aE.fV), alz(self, self.als), self.als++, self.als === aKT && function(self) {
			alx(self), alz(self, 0), self.als = 1 + bO.gC(aKT, 2);
			for (var aC = 1; aC < self.als; aC++) self.alr[aC] = self.alr[2 * aC], self.tD[aC] = self.tD[2 * aC], self.aGm[aC] = self.aGm[2 * aC], alz(self, aC);
			alu *= 2
		}(self), yY = alu - 1, bh.nY(), 0 === ah.nl[aE.fV] && (self.alv = bi.l6()))
	}
}

function db() {
	this.j = 0, this.k = 0, this.vv = 0, this.vw = 0, this.am1 = 0, this.am2 = 0, this.aDr = 0, this.wb = 0;
	var am4 = this.am3 = 0;
	this.am5 = 0, this.am6 = 0, this.am7 = 0, this.aCl = 0, this.eU = 0, this.aGN = null, this.ib = !1, this.am8 = -1, this.am9 = !1, this.amA = [0, 0], this.dw = function() {
		this.aGN = [L(595), L(136, 0, "Balance"), L(135, 0, "Interest"), L(596)]
	}, this.dv = function() {
		this.ib = !1, this.am8 = -1, this.am9 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fo = a1.a2.j1() && i.j < i.k ? 1 : a1.a2.j1() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fo * this.j), this.j -= a1.a2.j1() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCl = Math.floor(this.k / 150), this.aCl = Math.max(this.aCl, 1.5), this.vv = Math.floor(1 + .02 * this
			.j), this.vw = Math.floor(1 + .04 * this.j), this.aDr = this.vw, am4 = Math.floor(.75 * this.aDr), this.wb = Math.floor(1 + .075 * this.j), this.am5 = Math.floor(1 + .1125 * this.j), this.am6 = Math.floor(this.j * (a1.a2.j1() ? .03 :
				.029)), this.am6 = Math.max(this.am6, 4), this.am7 = Math.floor(.035 * this.j), this.am7 = Math.max(this.am7, 4), this.am3 = this.k - 2 * this.aDr - this.wb - this.am5, this.ib && this.amB()
	}, this.hz = function(mO, mP) {
		var a1C, a1B;
		return !!this.ib && (a1B = mO, a1C = mP, mO -= bO.gC(i.j - this.j, 2), mP -= bO.gC(i.k - this.k, 2), mO < 0 || mP < 0 || mO >= this.j || mP >= this.k || mO >= this.j - this.am5 && mP < this.am5 ? -1 !== aN.hz(a1B, a1C) || bF.hz(a1B,
			a1C) || this.ug() : mP < this.am5 || (mP < this.k - this.wb ? (this.am9 = !0, this.am8 = (mO - 2 * this.vv - this.am1) / this.am2, 3 !== this.eU && (bi.e2 = !0)) : (a1B = (a1B = Math.floor(mO / (this.j / this.aGN.length))) < 0 ?
				0 : a1B >= this.aGN.length ? this.aGN.length - 1 : a1B) !== this.eU && (this.eU = a1B, this.amB(), bi.e2 = !0)), !0)
	}, this.a5m = function(mO, mP) {
		return this.amA[0] = mO, this.amA[1] = mP, !(!this.ib || !this.am9 || (mO -= bO.gC(i.j - this.j, 2), mP = this.am8, this.am8 = (mO - 2 * this.vv - this.am1) / this.am2, (0 <= this.am8 && this.am8 <= 1 || 0 <= mP && mP <= 1) && (bi.e2 = !
			0), 0))
	}, this.a6B = function() {
		this.am9 && (this.am9 = !1)
	}, this.a6N = function() {
		this.ib ? this.ug() : this.show()
	}, this.show = function() {
		bg.aba() && (this.ib = !0, this.amB())
	}, this.ug = function() {
		this.ib = !1, this.am8 = -1, bi.e2 = !0
	}, this.amB = function() {
		this.eU < 2 ? this.am1 = aR.measureText(bD.pf.a3N(bg.max[this.eU]), bD.th.vG(0, this.am6)) : 2 === this.eU && (this.am1 = aR.measureText(bD.pf.a8Q(6, 2), bD.th.vG(0, this.am6))), this.am2 = this.j - 2 * this.vv - this.am1 - this.vw
	}, this.nY = function() {
		this.ib && this.amB()
	}, this.zD = function() {
		this.ib && this.aE8()
	}, this.aE8 = function() {
		var fs = bO.gC(i.j - this.j, 2),
			fu = bO.gC(i.k - this.k, 2);
		zE.setTransform(1, 0, 0, 1, fs, fu), zE.fillStyle = bE.qQ, zE.fillRect(0, this.am5, this.j, this.k - this.am5), this.amC(), this.aaF(), zE.strokeRect(0, 0, this.j, this.k), bD.th.textAlign(zE, 2), zE.font = bD.th.vG(0, this.am6), 0 ===
			this.eU ? this.amD(bg.alr, fs, fu) : 1 === this.eU ? this.amD(bg.tD, fs, fu) : 2 === this.eU ? this.amE(fs, fu) : 3 === this.eU && (this.amF(fs, fu), this.amG(fs, fu)), aN.aAO(Math.floor(fs + this.j - .725 * this.am5), Math.floor(fu +
				.275 * this.am5), Math.floor(.45 * this.am5)), zE.setTransform(1, 0, 0, 1, 0, 0)
	}, this.amC = function() {
		var aC, em;
		for (zE.lineWidth = this.aCl, bD.th.textBaseline(zE, 1), bD.th.textAlign(zE, 1), zE.strokeStyle = bE.qT, zE.font = bD.th.vG(1, this.am7), em = this.j / this.aGN.length, zE.fillStyle = bE.qp, zE.fillRect(this.eU * em, this.k - this.wb, em,
				this.wb), zE.fillStyle = bE.qT, zE.fillRect(0, this.k - this.wb - .5 * this.aCl, this.j, this.aCl), aC = 1; aC <= 3; aC++) zE.fillRect(aC * em, this.k - this.wb, this.aCl, this.wb);
		for (aC = this.aGN.length - 1; 0 <= aC; aC--) zE.fillText(bD.p9.a7L(this.aGN[aC], 0, .9 * em), (aC + .5) * em, this.k - .46 * this.wb)
	}, this.aaF = function() {
		zE.fillStyle = bE.rH, zE.fillRect(0, 0, this.j, this.am5), zE.fillStyle = bE.qT, zE.fillRect(0, this.am5 - .5 * this.aCl, this.j, this.aCl), zE.font = bD.th.vG(1, .39 * this.am5), zE.fillText(bD.p9.a7L(L(597), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.am5))
	}, this.amD = function(h, fs, fu) {
		var m4 = bg.max[this.eU],
			a6f = (zE.setTransform(1, 0, 0, 1, fs + 2 * this.vv + this.am1, fu + this.aDr + this.am5), zE.lineWidth = 2, this.am3 / Math.sqrt(m4));
		zE.beginPath(), zE.moveTo(this.am2, this.am3 - a6f * Math.sqrt(h[bg.als - 1]));
		for (var aC = bg.als - 2; 0 <= aC; aC--) zE.lineTo(aC * this.am2 / (bg.als - 1), this.am3 - a6f * Math.sqrt(h[aC]));
		zE.stroke();
		fs = this.aAO(h, a6f, .5);
		fs < .95 && zE.fillText(bD.pf.a3N(m4), -this.vv, 0), .05 < Math.abs(fs - .5) && zE.fillText(bD.pf.a3N(Math.floor(m4 / 4)), -this.vv, Math.floor(this.am3 / 2)), .05 < fs && zE.fillText("0", -this.vv, this.am3)
	}, this.amE = function(fs, fu) {
		zE.setTransform(1, 0, 0, 1, fs + 2 * this.vv + this.am1, fu + this.aDr + this.am5), zE.lineWidth = 2;
		var a6f = this.am3 / Math.max(bg.max[this.eU], 1);
		zE.beginPath(), zE.moveTo(this.am2, this.am3 - a6f * bg.aGm[bg.als - 1]);
		for (var aC = bg.als - 2; 0 <= aC; aC--) zE.lineTo(aC * this.am2 / (bg.als - 1), this.am3 - a6f * bg.aGm[aC]);
		zE.stroke();
		fs = this.aAO(bg.aGm, a6f, 1), fu = bg.max[this.eU] / 100;
		fs < .95 && zE.fillText(bD.pf.a8Q(fu, 2), -this.vv, 0), .05 < Math.abs(fs - .5) && zE.fillText(bD.pf.a8Q(fu / 2, 2), -this.vv, Math.floor(this.am3 / 2)), .05 < fs && zE.fillText(bD.pf.a8Q(0, 2), -this.vv, this.am3)
	}, this.amF = function(fs, fu) {
		zE.setTransform(1, 0, 0, 1, fs + .34 * this.j, fu + 2 * am4 + this.am5), bD.th.textAlign(zE, 2);
		for (var aG5 = this.k - 4 * am4 - this.wb - this.am5, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) zE.fillText(bD.p9.a7L(bg.alw[h[aC]], 0, .31 * this.j), 0, aC * aG5 / 9);
		var gD = bg.nh;
		for (zE.setTransform(1, 0, 0, 1, fs + .39 * this.j, fu + 2 * am4 + this.am5), bD.th.textAlign(zE, 0), zE.fillText(bD.pf.a8Q(100 * gD[0] / (1024 * Math.max(gD[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) zE.fillText(gD[h[aC]].toString(), 0,
			aC * aG5 / 9);
		zE.fillText(bD.pf.a8Q(100 * (1 - ah.hZ[aE.fV] / gD[7]), 0), 0, aG5)
	}, this.amG = function(fs, fu) {
		zE.setTransform(1, 0, 0, 1, fs + .79 * this.j, fu + 2 * am4 + this.am5), bD.th.textAlign(zE, 2);
		var aC, aG5 = this.k - 4 * am4 - this.wb - this.am5;
		for (zE.fillStyle = bE.qk, aC = 2; 0 <= aC; aC--) zE.fillText(bD.p9.a7L(bg.alw[aC + 8], 0, .31 * this.j), 0, aC * aG5 / 9);
		zE.fillText(bD.p9.a7L(bg.alw[18], 0, .31 * this.j), 0, 3 * aG5 / 9), zE.fillStyle = bE.qj, zE.fillText(bD.p9.a7L(bg.alw[11], 0, .31 * this.j), 0, 4 * aG5 / 9), zE.fillStyle = bE.r4, zE.fillText(bD.p9.a7L(bg.alw[13], 0, .31 * this.j), 0,
				5 * aG5 / 9), zE.fillText(bD.p9.a7L(bg.alw[15], 0, .31 * this.j), 0, 6 * aG5 / 9), zE.fillText(bD.p9.a7L(bg.alw[16], 0, .31 * this.j), 0, 7 * aG5 / 9), zE.fillText(bD.p9.a7L(bg.alw[12], 0, .31 * this.j), 0, 8 * aG5 / 9), zE
			.fillStyle = bE.r3, zE.fillText(bD.p9.a7L(bg.alw[17], 0, .31 * this.j), 0, aG5), zE.fillStyle = bE.qk;
		var gD = bg.nh,
			aLF = gD[8] + gD[9] + gD[10] + gD[18],
			aLF = bD.pf.a3N(aLF),
			aYv = zE.measureText(aLF).width,
			fs = (zE.setTransform(1, 0, 0, 1, fs + .83 * this.j + aYv, fu + 2 * am4 + this.am5), zE.fillText(bD.pf.a3N(gD[8]), 0, 0), zE.fillText(bD.pf.a3N(gD[9]), 0, aG5 / 9), zE.fillText(bD.pf.a3N(gD[10]), 0, 2 * aG5 / 9), zE.fillText(bD.pf
				.a3N(gD[18]), 0, 3 * aG5 / 9), zE.fillStyle = bE.qj, zE.fillText(aLF, 0, 4 * aG5 / 9), zE.fillStyle = bE.r4, zE.fillText(bD.pf.a3N(gD[13]), 0, 5 * aG5 / 9), zE.fillText(bD.pf.a3N(gD[15]), 0, 6 * aG5 / 9), zE.fillText(bD.pf
				.a3N(gD[16]), 0, 7 * aG5 / 9), zE.fillText(bD.pf.a3N(gD[12]), 0, 8 * aG5 / 9), gD[12] + gD[13] + gD[15] + gD[16]);
		zE.fillStyle = bE.r3, zE.fillText(bD.pf.a3N(fs), 0, aG5), zE.fillStyle = bE.qT
	}, this.aAO = function(h, a6f, aEl) {
		var aC, e, gU;
		return this.am8 < 0 || 1 < this.am8 ? .25 : (aC = this.am8 * (bg.als - 1), gU = h[e = Math.floor(aC)], gU += (aC - e) * (h[e < bg.als - 1 ? e + 1 : e] - gU), zE.strokeStyle = bE.qW, .04 < this.am8 && this.amI(0, this.am3 - a6f * Math.pow(
				gU, aEl), aC * this.am2 / (bg.als - 1), this.am3 - a6f * Math.pow(gU, aEl)), .04 < gU / bg.max[this.eU] && this.amI(aC * this.am2 / (bg.als - 1), this.am3, aC * this.am2 / (bg.als - 1), this.am3 - a6f * Math.pow(gU, aEl)), zE
			.fillStyle = bE.r6, zE.beginPath(), zE.arc(aC * this.am2 / (bg.als - 1), this.am3 - a6f * Math.pow(gU, aEl), Math.max(2, .014 * this.k), 0, 2 * Math.PI), zE.fill(), h = this.am8 * bi.aGo, h = 0 === ah.nl[aE.fV] ? Math.floor(h * bg
				.alv) : Math.floor(h * bi.l6()), zE.fillStyle = bE.qT, zE.fillText(1 === aEl ? bD.pf.a8Q(gU / 100, 2) : bD.pf.a3N(Math.floor(gU)), -this.vv, this.am3 - a6f * Math.pow(gU, aEl)), bD.th.textAlign(zE, 1), zE.fillText(aX.aGb(h),
				aC * this.am2 / (bg.als - 1), this.am3 + this.am6 - (a1.a2.j1() ? 2 : 0) - this.aCl), bD.th.textAlign(zE, 2), a6f * Math.pow(gU, aEl) / this.am3)
	}, this.amI = function(oC, oD, oP, oQ) {
		zE.beginPath(), zE.moveTo(oC, oD), zE.lineTo(oP, oQ), zE.stroke()
	}
}

function c7() {
	this.amJ = "https://territorial.io/changelog", this.abb = "https://territorial.io/terms", this.abc = "https://territorial.io/privacy", this.amK = "https://territorial.io/tutorial", this.amL = "https://territorial.io/players", this.amM =
		"https://territorial.io/clans", this.amN = "https://territorial.io/clan-results", this.aY4 = "https://patreon.com/c/territorial", this.aIE = "https://play.google.com/store/apps/details?id=territorial.io", this.a5L =
		"https://apps.apple.com/app/id1581110913", this.aIF = "https://discord.gg/pthqvpTXmh", this.aIG = "https://www.instagram.com/davidtschacher/", this.a2v =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dJ() {
	this.z = new amO, this.a2C = new amP, this.dv = function() {
		this.z.dv()
	}, this.eq = function() {
		0 !== this.z.xI && this.z.xI--
	}
}

function amP() {
	this.zD = function() {
		if (0 !== bS.z.xI && (zE.globalAlpha = Math.min(bS.z.xI / 580, 1), zE.drawImage(bS.z.amS, 1 + aT.a2A(), 1 + aT.a2B()), zE.globalAlpha = 1, aE.iB)) {
			for (var oC = jS / j3, oD = jT / j3, oP = (i.j + jS) / j3, oQ = (i.k + jT) / j3, hK = bS.z.amT * j3, amU = bS.z.amU, aC = aE.l9 - 1; 0 <= aC; aC--) ! function(aC, hK, oC, oD, oP, oQ, amU) {
				0 === ah.nl[aC] || 0 === ah.hZ[aC] || (oP = i.j * ((ah.jh[aC] + ah.ji[aC] + 1) / 2 - oC) / (oP - oC) - .5 * hK, oC = i.k * ((ah.jj[aC] + ah.jk[aC] + 1) / 2 - oD) / (oQ - oD) - .5 * hK, oP > i.j) || oC > i.k || oP < -hK || oC <
					-hK || (zE.setTransform(j3, 0, 0, j3, oP, oC), zE.drawImage(amU[aE.il ? bj.fj[aC] : 1], 0, 0))
			}(aC, hK, oC, oD, oP, oQ, amU);
			zE.setTransform(j3, 0, 0, j3, 0, 0)
		}
	}
}

function amO() {
	this.amT = 28, this.xI = 0, this.amS = null;
	var amW = this.amU = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function ama(io, aiZ) {
		var fs, fu, fX, jB, a76 = bD.th.a77(io, io),
			iu = bD.th.getContext(a76, !0),
			ir = bD.th.getImageData(iu, io, io),
			a2a = ir.data,
			m4 = (io >> 1) - .5,
			aia = .5 + m4;
		for (aia *= aia, fu = 0; fu < io; fu++)
			for (fs = 0; fs < io; fs++) jB = (jB = fs - m4) * jB + (jB = fu - m4) * jB, a2a[fX = 4 * (fu * io + fs)] = aiZ[0], a2a[1 + fX] = aiZ[1], a2a[2 + fX] = aiZ[2], a2a[3 + fX] = (aia - jB) * aiZ[3] / aia;
		return iu.putImageData(ir, 0, 0), a76
	}

	function alO(aC, iu, a76, io) {
		var fs;
		0 !== ah.nl[aC] && 0 !== ah.hZ[aC] && (fs = ah.jh[aC] + ah.ji[aC] + 1 - io - 2 >> 1, io = ah.jj[aC] + ah.jk[aC] + 1 - io - 2 >> 1, iu.drawImage(a76[aE.il ? 9 === aE.lR && 5 === aF.iY[aC] ? 3 : bj.fj[aC] : aC < aE.l9 ? 1 : 0], fs, io))
	}
	this.dv = function() {
		var v0;
		this.xI = 700,
			function(v0) {
				var io = v0.amT;
				if (v0.amU = [], amW = [], aE.il) {
					for (var aC = 0; aC <= aE.a1G; aC++) v0.amU.push(ama(io, bj.aiS[bj.lW[aC]])), amW.push(ama(io >> 1, bj.aiS[bj.lW[aC]]));
					9 === aE.lR && amW.push(ama(io, bj.aiS[1]))
				} else v0.amU.push(ama(io, bj.aiS[7])), v0.amU.push(ama(io, bj.aiS[4])), amW.push(ama(io >> 1, bj.aiS[7]))
			}(this),
			function(v0, amf) {
				var aC, amS = v0.amS,
					iu = bD.th.getContext(amS, !0),
					fl = aE.fi,
					io = v0.amT >> 1;
				iu.imageSmoothingEnabled = !1, iu.setTransform(1, 0, 0, 1, 0, 0), amf && iu.clearRect(0, 0, amS.width, amS.height);
				if (9 === aE.lR) {
					io <<= 1;
					v0 = b0.la[5];
					for (aC = fl - v0; aC < fl; aC++) alO(aC, iu, amW, io);
					fl -= v0, io >>= 1
				}
				for (aC = aE.l9; aC < fl; aC++) alO(aC, iu, amW, io)
			}(this, null !== (v0 = this).amS && v0.amS.width === bV.fw - 2 && v0.amS.height === bV.fx - 2 || (v0.amS = bD.th.a77(bV.fw - 2, bV.fx - 2), !1)), aE.iB || this.a8i()
	}, this.amb = ama, this.a8i = function() {
		for (var fl = aE.l9, io = this.amT, amU = this.amU, iu = bD.th.getContext(this.amS, !0), aC = 0; aC < fl; aC++) alO(aC, iu, amU, io)
	}
}

function dK() {
	function ami() {
		8 === aE.lR && 1 === aE.a48 && bU.a3i.a41()
	}

	function amh(player) {
		aE.iB ? (al.aOk(player), am.aSH(), aE.lT && aE.sy.eq()) : b4.aIc(player)
	}
	this.sQ = function(player) {
		aO.a4R(player, player === aE.fV ? 21 : 22), amh(player), ami()
	}, this.sv = function(player) {
		1 === aE.a48 && 0 !== ah.nl[player] && 2 !== ah.a7h[player] && amh(player), aE.a4I--, aE.a4H--, aO.a4R(player, 4), bD.h7.hx(2) && aX.nX(!0), ami()
	}
}

function dU() {
	this.adx = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aG2 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qT, "rgb(170,170,170)"
	], this.amj = [bE.qT, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qT, bE.qK], this.amk = [bE.qK, bE.qT, bE.qT, bE.qT, bE.qK, bE.qK, bE.qK, bE.qK, bE.qT];
	var aSR = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aRk = ["rgba(" + aSR[0] + ",", "rgba(" + aSR[1] + ",", "rgba(" + aSR[2] + ",", "rgba(" + aSR[3] + ",", "rgba(" + aSR[4] + ",", "rgba(" + aSR[5] + ",", "rgba(" + aSR[6] + ",", "rgba(" + aSR[7] + ",", "rgba(" + aSR[8] + ",", "rgba(" + aSR[9] +
			","
		], this.aRl = ["rgb(" + aSR[0] + ")", "rgb(" + aSR[1] + ")", "rgb(" + aSR[2] + ")", "rgb(" + aSR[3] + ")", "rgb(" + aSR[4] + ")", "rgb(" + aSR[5] + ")", "rgb(" + aSR[6] + ")", "rgb(" + aSR[7] + ")", "rgb(" + aSR[8] + ")", "rgb(" + aSR[9] +
			")"
		], this.a4a = null, this.aiS = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aZM = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lW = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fj = new Uint8Array(aE.fi), this.aG3 = new Uint8Array(aE.fi), this.a1M = new Uint16Array(aE.fi), this.a1N = new Uint16Array(this.lW.length + 1), this.a1O = new Uint16Array(this.lW.length), this
		.dw = function() {
			this.a4a = [L(598), L(599), L(600), L(601), L(602), L(603), L(604), L(605), L(606)]
		}, this.dv = function() {
			if (this.fj.fill(0), this.aG3.fill(0), this.aml(), aE.il) {
				if (9 === aE.lR) {
					for (var fj = bj.fj, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fj[aC] = 1;
					var fl = aE.fi;
					for (aC = aE.data.teamPlayerCount[7]; aC < fl; aC++) fj[aC] = 2;
					bj.lW[1] = 7, bj.lW[2] = 8
				} else aE.lT ? function() {
					var aZM = bj.aZM,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l9 - 1; 0 <= aC; aC--) colorsData[aC] = az.kQ(262144);
					var amw = 0,
						g1 = 768,
						aZL = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fo = 0, g5 = 0; g5 < 3; g5++) fo += Math.abs(aZM[aC][g5] - aZL[g5]);
							fo < g1 && (amw = aC, g1 = fo)
						} var amx = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) amx[aC] = teamPlayerCount[aC];
					var lW = bj.lW,
						amy = new Uint8Array(9),
						hE = (lW[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) amx[aC] && (amy[aC] = hE, lW[hE++] = aC);
					var kP = aE.l9,
						fj = bj.fj;
					amx[amw] ? (amx[amw]--, fj[0] = amy[amw]) : kP = 0;
					var ev = 0;
					for (aC = kP; aC < aE.a19; aC++) {
						var ij = lW[ev];
						if (amx[ij]) amx[ij]--, fj[aC] = amy[ij];
						else if (aC--, 9 <= ++ev) return console.log("error 325")
					}
				}() : this.eq();
				! function() {
					for (var fl = aE.fi, a1M = bj.a1M, a1N = bj.a1N, a1O = bj.a1O, fj = bj.fj, lW = bj.lW, a1F = lW.length, buffer = new Array(a1F), aC = 0; aC < a1F; aC++) buffer[aC] = [];
					for (aC = 0; aC < fl; aC++) buffer[lW[fj[aC]]].push(aC);
					for (aC = 1; aC <= a1F; aC++) a1N[aC] = a1N[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a1F; aC++)
						for (var hE = buffer[aC].length, m4 = a1N[aC], ij = 0; ij < hE; ij++) a1M[ij + m4] = buffer[aC][ij];
					var l9 = aE.l9;
					for (aC = 0; aC < a1F; aC++)
						for (hE = buffer[aC].length, m4 = a1N[aC], ij = 0; ij < hE; ij++)
							if (a1M[ij + m4] >= l9) {
								a1O[aC] = ij;
								break
							}
				}(), ! function() {
					for (var fl = aE.fi, fj = bj.fj, aG3 = bj.aG3, lW = bj.lW, aC = 0; aC < fl; aC++) aG3[aC] = lW[fj[aC]];
					9 === aE.lR && aG3.fill(1, fl - b0.la[5])
				}()
			}
		}, this.aml = function() {
			for (var aC = this.lW.length - 1; 0 <= aC; aC--) this.lW[aC] = aC
		}, this.eq = function() {
			var a3C = new Uint8Array(aE.l9),
				a3D = new Uint8Array(aE.l9),
				amq = new Uint16Array(8),
				amr = new Uint16Array(this.lW.length);
			this.ams(a3C, a3D, amq, 1), this.aO0(amq), this.amt(amr, a3C, a3D), this.amu(a3C, a3D, amr), this.amv()
		}, this.ams = function(a3C, a3D, amx, amz) {
			for (var g5, e, an0, fl = this.lW.length - amz, h = new Uint16Array(fl), aZM = this.aZM, colorsData = aE.data.colorsData, aC = aE.l9 - 1; 0 <= aC; aC--) {
				for (g5 = fl; amz <= g5; g5--) h[g5 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aZM[g5][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aZM[g5][1]) + Math.abs(4 * (63 & colorsData[aC]) - aZM[g5][2]);
				for (an0 = 768, g5 = fl - 1; 0 <= g5; g5--) h[e = (g5 + aC) % fl] < an0 && (an0 = h[e], a3C[aC] = e);
				for (amx[a3C[aC]] += 4, an0 = 768, g5 = fl - 1; 0 <= g5; g5--) h[e = (g5 + aC) % fl] < an0 && e !== a3C[aC] && (an0 = h[e], a3D[aC] = e);
				amx[a3D[aC]]++
			}
		}, this.aO0 = function(amx) {
			for (var g5, m6, fl = this.lW.length - 1, aC = fl; 0 <= aC; aC--) this.lW[aC] = aC;
			for (aC = fl - 1; 0 <= aC; aC--) amx[aC]++;
			for (aC = 1; aC <= fl; aC++) {
				for (m6 = 0, g5 = 1; g5 < fl; g5++) amx[g5] > amx[m6] && (m6 = g5);
				amx[m6] = 0, this.lW[aC] = m6 + 1
			}
		}, this.amt = function(amr, a3C, a3D) {
			var g5, a4z, ev, fo, e, oO, wC, an1 = this.lW.length - 1,
				uB = new Uint16Array(an1),
				an2 = [],
				an3 = 0,
				a4y = [],
				an4 = [];
			loop: for (var aC = 0; aC < aE.l9; aC++)
				if (null !== (a4z = bD.pf.pt(ah.a4x[aC]))) {
					for (g5 = a4y.length - 1; 0 <= g5; g5--)
						if (a4z === a4y[g5]) {
							an4[g5].push(aC), an3 = Math.max(an3, an4[g5].length);
							continue loop
						} a4y.push(a4z), an2.push(!1), an4.push([aC]), an3 = Math.max(an3, 1)
				}
			for (; 2 < aE.a1G && an3 > bO.gC(aE.l9, aE.a1G);) aE.a1G--, aE.lR--;
			for (g5 = a4y.length - 1; 0 <= g5; g5--) {
				for (fo = -1, ev = a4y.length - 1; 0 <= ev; ev--) !an2[ev] && (-1 === fo || an4[ev].length > an4[fo].length) && (fo = ev);
				for (ev = an1 - 1; 0 <= ev; ev--) uB[ev] = 1;
				for (ev = an4[fo].length - 1; 0 <= ev; ev--) uB[a3C[an4[fo][ev]]] += 3, uB[a3D[an4[fo][ev]]]++;
				for (aC = an1 - 1; 0 <= aC; aC--) {
					for (e = fo % an1, ev = an1 - 1; 0 <= ev; ev--) uB[ev] > uB[e] && (e = ev);
					for (oO = -1, ev = aE.a1G; 0 < ev; ev--)
						if (this.lW[ev] === e + 1) {
							oO = ev;
							break
						} if (uB[e] = 0, -1 !== oO) {
						for (wC = 0, ev = aE.a1G; 0 < ev; ev--) amr[oO] > amr[ev] && wC++;
						if (wC !== aE.a1G - 1) {
							for (ev = an4[fo].length - 1; 0 <= ev; ev--) amr[oO]++, this.fj[an4[fo][ev]] = oO;
							break
						}
					}
				}
				an2[fo] = !0
			}
		}, this.amu = function(a3C, a3D, amr) {
			for (var aC, jA, fl = this.lW.length - 1, border = bO.gC(aE.l9, aE.a1G), an5 = (0 < aE.l9 % aE.a1G && border++, new Uint8Array(1 + fl)), g5 = fl; 1 <= g5; g5--) an5[this.lW[g5]] = g5;
			for (aC = 0; aC < aE.l9; aC++) jA = an5[a3C[aC] + 1], 0 === this.fj[aC] && jA <= aE.a1G && amr[jA] < border && (amr[jA]++, this.fj[aC] = jA);
			for (aC = 0; aC < aE.l9; aC++) jA = an5[a3D[aC] + 1], 0 === this.fj[aC] && jA <= aE.a1G && amr[jA] < border && (amr[jA]++, this.fj[aC] = jA);
			for (g5 = aE.a1G; 1 <= g5; g5--)
				for (aC = aE.l9 - 1; 0 <= aC && !(amr[g5] >= border); aC--) 0 === this.fj[aC] && (amr[g5]++, this.fj[aC] = g5)
		}, this.amv = function() {
			if (aE.a1G < 8) aE.a1G++, aE.lR++, aE.a1H = 1;
			else
				for (var aC = aE.l9; aC < aE.fi; aC++) this.fj[aC] = 1 + aC % aE.a1G
		}
}

function dn() {
	this.ha = function() {
		for (var fs, fu, aC = gh - 1; 0 <= aC; aC--) fs = bO.gC(gj[aC], 4) % bV.fw, fu = bO.gC(gj[aC], 4 * bV.fw), ah.jh[gc] = Math.min(fs, ah.jh[gc]), ah.jj[gc] = Math.min(fu, ah.jj[gc]), ah.ji[gc] = Math.max(fs, ah.ji[gc]), ah.jk[gc] = Math
			.max(fu, ah.jk[gc])
	}, this.gv = function() {
		var fo, hJ, aC, fl = ah.hD[gc].length,
			fn = ad.fn;
		loop: for (aC = fl - 1; 0 <= aC; aC--) {
			for (fo = 3; 0 <= fo; fo--)
				if (hJ = ah.hD[gc][aC] + fn[fo], ad.fc(hJ) || ad.hL(hJ) && ad.fd(hJ) !== gc) {
					ad.kL(ah.hD[gc][aC], gc);
					continue loop
				} ah.hD[gc][aC] = ah.hD[gc][fl - 1], ah.hD[gc].pop(), fl--
		}
	}, this.gw = function() {
		var player = gc,
			hR = ah.hR,
			hS = ah.hS,
			gA = ah.gA,
			fl = hR[player].length,
			fn = ad.fn;
		loop: for (var aC = fl - 1; 0 <= aC; aC--) {
			for (var aUY = !1, an6 = !1, fo = 3; 0 <= fo; fo--) {
				var hJ = hR[player][aC] + fn[fo];
				if (ad.aOA(hJ, player)) continue loop;
				aUY = aUY || ad.iT(hJ), an6 = an6 || ad.aO9(hJ)
			}
			aUY ? hS[player].push(hR[player][aC]) : an6 ? gA[player].push(hR[player][aC]) : ad.a1i(hR[player][aC], player), hR[player][aC] = hR[player][fl - 1], hR[player].pop(), fl--
		}
	}, this.hP = function() {
		ah.hZ[gg] -= gh
	}, this.hQ = function(border) {
		for (var fl = border.length, aC = fl - 1; 0 <= aC; aC--) ad.a23(gg, border[aC]) || (border[aC] = border[fl - 1], border.pop(), fl--)
	}, this.hT = function(border) {
		for (var fl = border.length, aC = fl - 1; 0 <= aC; aC--) !ad.a23(gg, border[aC]) && ad.fg(border[aC]) && (border[aC] = border[fl - 1], border.pop(), fl--)
	}, this.hU = function(border) {
		for (var fo, hJ, fl = border.length, fn = ad.fn, aC = fl - 1; 0 <= aC; aC--)
			for (fo = 3; 0 <= fo; fo--)
				if (hJ = border[aC] + fn[fo], ad.aOA(hJ, gg)) {
					ah.hR[gg].push(border[aC]), border[aC] = border[fl - 1], border.pop(), fl--;
					break
				}
	}, this.hV = function() {
		for (var fo, hJ, fn = ad.fn, aC = gh - 1; 0 <= aC; aC--)
			for (fo = 3; 0 <= fo; fo--) hJ = gj[aC] + fn[fo], ad.a26(gg, hJ) && ad.aOG(hJ) && (ah.hR[gg].push(hJ), ad.hG(hJ, gg))
	}, this.hW = function() {
		var fs, fu;
		loop: for (; ah.jj[gg] < ah.jk[gg];) {
			for (fs = ah.ji[gg]; fs >= ah.jh[gg]; fs--)
				if (ad.a23(gg, 4 * (ah.jj[gg] * bV.fw + fs))) break loop;
			ah.jj[gg]++
		}
		loop: for (; ah.jj[gg] < ah.jk[gg];) {
			for (fs = ah.ji[gg]; fs >= ah.jh[gg]; fs--)
				if (ad.a23(gg, 4 * (ah.jk[gg] * bV.fw + fs))) break loop;
			ah.jk[gg]--
		}
		loop: for (; ah.jh[gg] < ah.ji[gg];) {
			for (fu = ah.jk[gg]; fu >= ah.jj[gg]; fu--)
				if (ad.a23(gg, 4 * (fu * bV.fw + ah.jh[gg]))) break loop;
			ah.jh[gg]++
		}
		loop: for (; ah.jh[gg] < ah.ji[gg];) {
			for (fu = ah.jk[gg]; fu >= ah.jj[gg]; fu--)
				if (ad.a23(gg, 4 * (fu * bV.fw + ah.ji[gg]))) break loop;
			ah.ji[gg]--
		}
	}, this.fe = function(player, kI) {
		return 0 === bj.fj[player] || bj.fj[player] !== bj.fj[kI]
	}, this.iJ = function(player) {
		for (var aC, hK, fl = ah.hR[player].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < fl; aC++)
				if (ad.fc(ah.hR[player][aC] + hK)) return !0;
		return !1
	}, this.aOg = function(player) {
		for (var aC, hK, fl = ah.hR[player].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < fl; aC++)
				if (ad.kK(ah.hR[player][aC]) && ad.fc(ah.hR[player][aC] + hK)) return !0;
		return !1
	}, this.iM = function(a7n, a7o) {
		for (var aC, em, hK, hJ, ak8 = ah.hR[a7n].length, ak9 = ah.hR[a7o].length, fn = (ak9 < ak8 && (em = a7n, a7n = a7o, a7o = em, em = ak8, ak8 = ak9, 0), ad.fn), fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < ak8; aC++)
				if (hJ = ah.hR[a7n][aC] + hK, ad.hL(hJ) && ad.fd(hJ) === a7o) return !0;
		return !1
	}, this.aOh = function(a7n, a7o) {
		for (var aC, hK, hJ, ak8 = ah.hR[a7n].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < ak8; aC++)
				if (ad.kK(ah.hR[a7n][aC]) && (hJ = ah.hR[a7n][aC] + hK, ad.hL(hJ)) && ad.fd(hJ) === a7o) return !0;
		return !1
	}
}

function dg() {
	this.t7 = new an7
}

function an7() {
	this.iP = function(player) {
		bD.h7.a7i(player) && aO.a2X(80, L(607), 637, 0, bE.rK, bE.qQ, -1, !1)
	}, this.s8 = function(player) {
		bD.h7.a7i(player) && aO.a2X(80, L(608), 637, 0, bE.rK, bE.qQ, -1, !1)
	}, this.alL = function() {
		aO.a2X(80, L(609), 637, 0, bE.r2, bE.qQ, -1, !1)
	}, this.alM = function() {
		aO.a2X(80, L(610), 637, 0, bE.r2, bE.qQ, -1, !1)
	}
}

function an8() {
	this.an9 = 0, this.eq = function() {
		aP.eq(), aa.eq(), i.eq(), b1.z.eq(), ay.aNS(), bX.ee.eq(), bq.xU.eq(), bi.e2 && (bi.e2 = !1, ab.zD())
	}
}

function anA() {
	this.el = bi.el, this.eU = 0, this.an9 = 0, this.aNQ = 0, this.aNO = null, this.anB = 7, this.anC = 0, this.dv = function() {
		this.aNQ = 0, this.aNO = [], this.eU = 0, this.an9 = 0
	}, this.act = function(aD) {
		if (aE.iB) this.aGp(aD);
		else if (this.aNO.push(aD), 2 === aE.a48) {
			for (var aC = 0; aC < this.aNO.length; aC++) bB.ru.eq(this.aNO[aC]);
			this.aNO = []
		}
	}, this.aGp = function(aD) {
		2 !== aE.a48 && (bB.ru.eq(aD), bC.eq(), aX.aGp(this.aNQ), this.aNQ === aE.a8q ? (aE.sy.eq(), this.aNQ = 0, this.eU = 0, this.an9 = 0, this.el = bi.el) : (this.aNQ++, ag.a8h(), ag.nX(!0), be.render()))
	}, this.eq = function() {
		i.eq(), aE.iB ? (bi.e2 = aX.aGp(-1) || bi.e2, nZ()) : (0 !== this.eU || bi.el >= this.el && (this.el += bi.aGo * Math.floor(1 + (bi.el - this.el) / bi.aGo), 2 === aE.a48 ? nL() : this.anD(), this.eU++, 27 < bi.el - this.anC)) && this
		.anE(), nU(), bi.e2 && (bi.e2 = !1, a27()), this.anC = bi.el
	}, this.anE = function() {
		bi.e2 = !0, nW(), this.eU = 0
	}, this.anD = function() {
		var a02, aC;
		if (this.an9 !== 7 * this.aNQ) nP(), be.render();
		else {
			a02 = !1;
			loop: for (; this.anF() && (a02 = !0, nP(), 2 !== aE.a48) && 0 < this.aNO.length;)
				for (aC = this.anB - 2; 0 <= aC; aC--)
					if (nP(), 2 === aE.a48) break loop;
			a02 ? be.render() : (nL(), be.a8k())
		}
	}, this.anF = function() {
		return 0 < this.aNO.length && (this.aNQ++, bB.ru.eq(this.aNO[0]), this.aNO.shift(), !0)
	}
}

function anG() {
	var anH, anI, anJ, aNQ, anK, eU = 0,
		el = bi.el;

	function anN() {
		! function() {
			if (!aE.iB) return;
			if (aE.lT) return;
			if (2 !== aE.a48)
				if (anK % 7 != 0) anK++;
				else if (aNQ === aE.a8q) {
				if (!anQ()) return;
				aX.aGp(aNQ), aE.sy.eq()
			} else {
				if (!anQ()) return;
				anK++, aNQ++, ag.a8h(), ag.nX(!0)
			}
			return 1
		}() && anQ() && nP()
	}

	function anO() {
		eU = 0, (aE.iB ? (bi.e2 = aX.aGp(aNQ - (anK % 7 == 0 ? 0 : 1) + anK % 7 / 7) || bi.e2, nZ) : aN.hw || !bF.a9E ? nZ : (bi.e2 = !0, nW))()
	}

	function anQ() {
		var aC, fl, anR = bC.sw.aeY,
			gU = bC.sw.aeZ,
			gW = bC.sw.aea,
			gY = bC.sw.aeb,
			anS = bC.sw.aec,
			anT = bC.sw.aed;
		if (anH >= anT.length) return bU.a3i.a45() ? void bU.a3i.a44() : (aO.a5Y("Replay file smaller than expected."), bF.a6O(!1), void(aE.a48 = 2));
		if (anT = anT[anH], anS[anH]) {
			for (fl = anI + anT, aC = anI; aC < fl; aC++) bB.ru.sl(anR[aC], gU[aC], gW[aC], gY[aC]);
			anI += anT, anH++
		} else ++anJ >= anT && (anH++, anJ = 0);
		return __fx.replay.tick++, 1
	}
	this.an9 = 0, this.dv = function() {
		anK = aNQ = anJ = anI = anH = 0, __fx.replay.registerHooks({
			advance: () => anN(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.e2 = !0
			},
			isEnded: () => 2 === aE.a48,
			getTickInterval: () => bi.aGo
		})
	}, this.eq = function() {
		var akV;
		i.eq(), __fx.replay.frame() ? nL() : bF.aE2() < 1.7 ? 0 === eU ? bi.el >= el && (akV = bi.aGo / bF.aE2(), el += akV * Math.floor(1 + (bi.el - el) / akV), 2 === aE.a48 || aN.hw || !bF.a9E ? nL() : (anN(), be.render()), eU++) : anO() :
			function() {
				var akV;
				if (bi.el >= el)
					if (2 === aE.a48 || aN.hw || !bF.a9E) nL(), el = bi.el;
					else {
						for (akV = bi.aGo / bF.aE2(), 16 < (bi.el - el) / akV && (el = bi.el - 16 * akV); bi.el >= el && 2 !== aE.a48;) el += akV, anN();
						be.render()
					} anO()
			}(), nU(), bi.e2 && (bi.e2 = !1, a27())
	}, this.a4O = function() {
		bC.sw.aed.length - anH <= 2 || aO.a5Y("Replay file larger than expected.")
	}
}

function anU() {
	var eU = 0,
		el = bi.el;
	this.an9 = 0, this.eq = function() {
		i.eq(), aE.iB ? nZ() : 0 === eU ? bi.el >= el && (el += bi.aGo * Math.floor(1 + (bi.el - el) / bi.aGo), 2 === aE.a48 || aN.hw ? nL() : (nP(), be.render()), eU++) : ((aN.hw ? nZ : (bi.e2 = !0, nW))(), eU = 0), nU(), bi.e2 && (bi.e2 = !1,
			a27())
	}
}

function dc() {
	this.a4N = null, this.e2 = !1, this.el = 0, this.aGo = 56;
	var anV = 0;

	function anW() {
		bi.el = anV = performance.now(), bi.a4N.eq(), window.requestAnimationFrame(anW)
	}
	this.dv = function() {
		this.a9B(), window.requestAnimationFrame(anW), this.el = performance.now()
	}, this.a93 = function() {
		aE.hu ? (this.a4N = new anG, this.a4N.dv()) : aE.lT ? this.a4N = new anU : (this.a4N = new anA, this.a4N.dv())
	}, this.a9B = function() {
		this.a4N = new an8, this.e2 = !0
	}, this.eq = function() {
		this.a4N.an9++
	}, this.l6 = function() {
		return this.a4N.an9
	}, this.acY = function() {
		var em = performance.now();
		em < anV + 1e3 || (this.el = em, this.a4N.eq())
	}
}

function d2() {
	var aMd = 0,
		anX = !0;
	this.eq = function() {
		var em, aBn;
		bi.el < aMd || (aMd = bi.el + 3e3, aE.hu) || aE.lT || bD.h7.hy(aE.fV) || (em = new Date, aBn = em.getUTCSeconds(), anX ? aBn < 43 && (anX = !1) : aBn < 43 || (aMd += 52e3, anX = !0, aBn = (em.getUTCMinutes() + 2) % 60, em = aE.lR < 7 ?
			0 : 8 === aE.lR ? 2 : 9 === aE.lR ? 3 : 1, aP.aBc(em, aBn) && (aBn = em, aBn = [L(611), L(612), L(613), L(614)][aBn], aO.aBD(aBn))))
	}
}

function cw() {
	var oC, oD, oP, oQ, anZ = 0,
		ana = 0;

	function anc() {
		return Math.pow(Math.pow(oP - oC, 2) + Math.pow(oQ - oD, 2), .5)
	}

	function anb(e) {
		oC = i.l * e.touches[0].clientX, oD = i.l * e.touches[0].clientY, oP = i.l * e.touches[1].clientX, oQ = i.l * e.touches[1].clientY
	}
	this.a5q = function(e) {
		return 1 < e.touches.length ? (ana = bi.el, anZ = 3, anb(e), aM.ug(), !0) : (anZ = 0, !1)
	}, this.a5r = function(e) {
		var aPb, j8, j9;
		return 0 !== aE.a48 && 1 < e.touches.length && (anZ = Math.max(anZ - 1, 0), aI.oU() && (aPb = anc(), anb(e), e = anc(), j8 = Math.floor((oC + oP) / 2), j9 = Math.floor((oD + oQ) / 2), aT.aET(j8, j9, Math.max(.125, e) / Math.max(.125,
			aPb)), bi.e2 = !0), !0)
	}, this.a6E = function() {
		var fs, fu;
		return !!(anZ && (anZ = 0, bi.el < ana + 500)) && (fs = (oC + oP) / 2, fu = (oD + oQ) / 2, aM.a68(fs, fu), aM.click(fs, fu, !0) && (bi.e2 = !0), !0)
	}
}

function dD() {
	this.size = 0, this.eU = 0, this.aD = null, this.dv = function(aD) {
		this.eU = 0, this.aD = aD, this.size = aD.length
	}, this.yG = function() {
		this.aD = null
	}, this.sk = function(size) {
		for (var gD = 0, aD = this.aD, oU = this.eU + size - 1, aC = this.eU; aC <= oU; aC++) gD |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oU - aC;
		return this.eU += size, this.eU > 8 * this.size && console.error("Unwrapper Overflow"), gD
	}, this.ad1 = function(size) {
		var g5 = size >> 1;
		return (1 << g5) * this.sk(size - g5) + this.sk(g5)
	}, this.ad3 = function(aOQ) {
		return this.size === bG.ad0(aOQ)
	}, this.aer = function(a0v, and, ane) {
		var hE = this.sk(a0v);
		if (!hE) return null;
		for (var a0v = Math.max(hE, ane), h = new(and <= 8 ? Uint8Array : and <= 16 ? Uint16Array : Uint32Array)(a0v), aC = 0; aC < hE; aC++) h[aC] = this.sk(and);
		ane = h[hE - 1];
		return ane && h.fill(ane, hE), h
	}, this.aes = function(a0v, anf, ane) {
		var hE = this.sk(a0v);
		if (!hE) return null;
		for (var a0v = Math.max(hE, ane), h = new Array(a0v), aC = 0; aC < hE; aC++) h[aC] = this.aep(anf);
		return h.fill(h[hE - 1], hE), h
	}, this.aep = function(a0v) {
		return bJ.a0d.a0h(this.sk(a0v))
	}, this.aeq = function() {
		var a3L = this.sk(30);
		if (!(6 * a3L > 8 * this.size - this.eU)) {
			var pb = bI.fC.vs(bI.fC.vt(a3L)),
				pb = bD.pf.a8c(pb, "_", "/");
			pb = bD.pf.a8c(pb, "-", "+");
			for (var ang = "";
				(pb.length + ang.length) % 4;) ang += "=";
			pb = "data:image/png;base64," + pb + ang;
			var aPD = new Image;
			aPD.onload = function() {
				bC.aQB.aQC(aPD), aPD.onload = null, aPD = null
			}, aPD.src = pb
		}
	}
}

function dW() {
	this.afu = 0, this.afv = 0, this.afq = 0, this.afr = 0, this.afs = 0, this.aft = 0, this.aHX = [0, 0, 0, 0], this.oT = function() {
		this.afu = aT.a2A(), this.afv = aT.a2B(), this.afq = -this.afu, this.afr = -this.afv, this.afs = i.j / j3, this.aft = i.k / j3, this.aHX[0] = Math.floor(this.afq), this.aHX[1] = Math.floor(this.afr), this.aHX[2] = Math.floor(this.aHX[0] +
			this.afs + 1), this.aHX[3] = Math.floor(this.aHX[1] + this.aft + 1), be.aHV = !0
	}
}

function cx() {
	var aCh, ny;
	this.dv = function() {
		aCh = 1, ny = 0
	}, this.eq = function() {
		0 < aCh && (ny = 0 === ny ? bi.el + 16 : ny, aCh = (aCh -= .001 * (bi.el - ny)) < 0 ? 0 : aCh, ny = bi.el, bi.e2 = !0)
	}, this.zD = function() {
		0 < aCh && (zE.fillStyle = "rgba(0,0,0," + aCh + ")", zE.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eU = 0, this.aD = null, this.dv = function(aD) {
		this.eU = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(aOQ) {
		return this.dv(new Uint8Array(this.ad0(aOQ))), this.aD
	}, this.yG = function() {
		this.aD = null
	}, this.a9 = function(size, aBp) {
		for (var aD = this.aD, oU = this.eU + size - 1, aC = this.eU; aC <= oU; aC++) aD[aC >> 3] |= (aBp >> oU - aC & 1) << 7 - (7 & aC);
		this.eU += size, this.eU > 8 * this.size && console.error("Wrapper Overflow")
	}, this.acz = function(size, aBp) {
		var g5 = size >> 1,
			fo = 1 << g5;
		this.a9(size - g5, bO.gC(aBp, fo)), this.a9(g5, aBp % fo)
	}, this.anj = function(size) {
		for (var aD = this.aD, oU = this.eU + size, aC = this.eU; aC < oU; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.ad0 = function(aOQ) {
		return aOQ + 7 >> 3
	}, this.ank = function(h, kP, oU, anl) {
		for (var aC = kP; aC < oU; aC++) this.a9(anl, h[aC])
	}
}

function dC() {
	this.dv = function() {
		this.h = [], this.eU = 0
	}, this.adS = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(anm, value) {
		for (var h = this.h, oU = this.eU + anm - 1, ann = 1 + (oU >> 3); h.length < ann;) h.push(0);
		for (var aC = this.eU; aC <= oU; aC++) h[aC >> 3] |= (value >> oU - aC & 1) << 7 - (7 & aC);
		this.eU += anm
	}, this.e1 = function(h, a0v, and) {
		var ano = bD.tp.a70(h);
		this.a9(a0v, ano);
		for (var aC = 0; aC < ano; aC++) this.a9(and, h[aC])
	}, this.af9 = function(h, a0v, anf) {
		var ano = bD.tp.a70(h);
		this.a9(a0v, ano);
		for (var aC = 0; aC < ano; aC++) this.af7(h[aC], anf)
	}, this.af7 = function(pb, a0v) {
		var fl = pb.length;
		this.a9(a0v, fl);
		for (var aC = 0; aC < fl; aC++) this.a9(16, pb.charCodeAt(aC))
	}, this.af8 = function(a76) {
		var anp = (a76 = a76.toDataURL()).split(",");
		if (anp.length < 2) console.log("error 266");
		else {
			a76 = bD.pf.a8c(a76 = anp[anp.length - 1], "/", "_"), a76 = bD.pf.a8c(a76, "\\+", "-");
			var a76 = bD.pf.a8c(a76, "=", ""),
				a0q = bJ.fC.a0n(a76),
				fl = a0q.length;
			this.a9(30, fl);
			for (var aC = 0; aC < fl; aC++) this.a9(6, a0q[aC])
		}
	}
}
a(), self.aiCommand746 = function(gD) {
	0 === gD ? c2() : 1 !== gD || !a1 || 1 !== a1.id || a1.eC < 14 || bM.gE()
}, setTimeout(c2, 1e4), window.onload = function() {
	c2()
};