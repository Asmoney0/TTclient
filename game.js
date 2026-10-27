var fu, fv, fw, ub, bn, xx, xy, xz, y0, lh, c, yB, aAZ, ys, gI, s9, aIs, aIt, sK, nK, e, a6n, a1F, a3B, nl, gd, a4z, ag, bi, at, sF, aDM, a8e, qp, np, j1, a0n, ay, gN, y, a2O, aIu, m6, aIj, aJ, a1N, a5e, o9, uF, p9, a8X, aIv, a8M, sE, yI, a4h, aW,
	cN, cv, jZ, a1U, aFX, aIm, aIw, a59, aB1, a5m, a5n, vi, ss, eR, aa, v, nr, jX, vT, hS, es, jW, aIx, di, aFw, q, ix, bQ, ij, sI, aIy, bT, gW, a8P, dx, vo, a5h, aHu, a8W, aHv, aIz, gZ, ns, ak, pz, nw, bc, cD, bK, aT, vL, ep, nC, aGC, aJ0, aJ1, hq,
	hX, aJ2, lx, a1K, a0f, ru, aKq, bM, a2b, a0p, a0o, a0q, a16, a14, a0c, a0r, abK, a18, abL, abM, abN, a0m, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ",
		"flex", "hidden", "span", "1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Player ", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave",
		"keydown", "inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	this.b = function() {
		8 === c.d && e.f()
	}, this.g = function(h) {
		var elo = c.data.elo,
			i = (elo[h] - elo[1 - h]) / 10,
			i = 8 / (1 + Math.pow(2, i / 32)),
			i = Math.floor(10 * i + .5),
			k = elo[h] + i,
			l = this.m(k),
			elo = this.m(elo[1 - h] - i),
			i = (0 === h ? e.o(l, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e.o(elo, l, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), k * q.sqrt(k) >> 8),
			elo = ((1 + c.s) * i / 100).toFixed(2);
		h === c.t ? e.u(640, L(0, [elo]), 40, 0, v.w, v.x, -1, !1) : e.u(640, L(1, [y.z[h], elo]), 40, 0, v.w, v.x, -1, !1)
	}, this.m = function(elo) {
		return 16e3 === (elo = q.a0(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function a1() {
	var canvas, a2, a3, a4, a5, a6, gap, a7, fontSize, a8, a9, aA, aB, aC, aD, aE, aF, aG;

	function ah() {
		a2.clearRect(0, 0, at.aS, at.aY), a2.fillStyle = v.x, a2.fillRect(0, 0, at.aS, at.aY), a2.fillStyle = v.au, ar = 0 < aE ? aE : aB[4] / 1e4, a2.fillRect(0, at.aY - a5 - 1, Math.floor(ar * at.aS), a5), a2.fillStyle = v.w, a2.fillRect(0, 0, at
			.aS, 1), a2.fillRect(0, 0, 1, at.aY), a2.fillRect(at.aS - 1, 0, 1, at.aY), a2.fillRect(0, at.aY - 1, at.aS, 1), a2.fillRect(0, at.aY - a5 - 1, at.aS, 1);
		for (var ar, aw, av = 0, ai = 0; ai < aA.length; ai++) aC[ai] ? (aa.ab.textAlign(a2, 0), aw = Math.floor((a6 - a5 + 2 * a7) * (ai - av + 1) / (aA.length + 1) - .7 * a7), a2.fillText(aA[ai], gap, aw), aa.ab.textAlign(a2, 2), 5 === ai && 0 !==
			y.an[c.t] && y.ax[c.t] >= ay.az(c.t) ? (a2.fillStyle = v.b0, a2.fillText(aR(ai), at.aS - gap, aw), a2.fillStyle = v.w) : a2.fillText(aR(ai), at.aS - gap, aw)) : av++
	}

	function aR(ai) {
		return ai < 3 ? aB[ai].toString() : 3 === ai || 4 === ai || 5 === ai ? aa.b1.b2(aB[ai] / 100, 2) : ai < 7 ? aa.b1.b3(aB[ai]) : ai === 7 ? at.b4(aB[7]) : ai === 8 ? __fx.utils.getMaxTroops(y.aO, c.t) : __fx.utils.getDensity(c.t)
	}

	function aQ() {
		y.aO[c.t] !== aB[6] && (aB[6] = y.aO[c.t], a8++)
	}
	this.b = function() {
		aE = aF = 0, (a9 = new Array(8))[0] = L(2), a9[1] = c.aH ? L(3) : L(4), a9[2] = L(5), a9[3] = L(6), a9[4] = L(7), a9[5] = L(8, 0, "Interest"), a9[6] = L(9), a9[7] = L(10),
			a9.push("Max Troops", "Density"), // add a9
			(aA = new Array(a9.length)).fill(""), (aB = new Array(a9.length))[0] = c.aH ? 0 : c.aI, aB[1] = c.aH ? aJ.aK : c.aL, aB[2] = c.aM, aB[3] = 0, aB[4] = q.aN(1e4 * y.aO[0], Math.max(c.aP, 1)), aB[5] = 0 === c.data.iIncomeType ? 700 :
			1 === c.data.iIncomeType ? q.aN(700 * c.data.iIncomeValue, 64) : q.aN(700 * c.data.iIncomeData[c.t], 64), aB[6] = 0, aQ(), aB[7] = 0, aD = aR(6), (aC = new Array(a9.length)).fill(!0), aG = 0, aG = c.aH ? (aC[0] = !1, aC[2] = !1, aC[
				3] = !1, 3) : (aC[3] = !1, 1), a8 = 0, this.resize()
	}, this.resize = function() {
		this.aS = Math.floor((aT.aU.aV() ? .1646 : .126) * 1.25 * aW.aX), this.aY = Math.floor(1.18 * this.aS), a5 = Math.floor(.04 * this.aS), gap = Math.floor(.035 * this.aS), a7 = .04 * this.aS, a6 = this.aY, this.aY -= Math.floor(aG * (this
			.aY - 2 * a5) / a9.length), fontSize = Math.floor(.7 * (a6 - a5) / a9.length);
		var aZ = aa.ab.ac(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.aS, canvas.height = this.aY,
			function(aZ, aS) {
				for (var ai = 0; ai < aA.length; ai++) aA[ai] = aa.a2.aj(a9[ai], aZ, aS)
			}((a2 = canvas.getContext("2d", {
				alpha: !0
			})).font = aZ, .575 * this.aS), aa.ab.textBaseline(a2, 1), a2.lineWidth = 1, this.ae(), this.af(), ag.af(), ah()
	}, this.af = function() {
		a3 = aW.aS - this.aS - ak.gap
	}, this.al = function() {
		a4 = ak.gap
	}, this.ae = function() {
		a4 = ak.gap + (ag.am() && 0 !== y.an[c.t] && !c.ao ? ag.aY + ak.gap : 0)
	}, this.ap = function(aq) {
		(aq || 100 <= a8) && (a8 = 0, ah())
	}, this.b5 = function() {
		return aB[7]
	}, this.b4 = function(value) {
		var b6 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * b6) / 1e3);
		return value < 10 ? b6 + ":0" + value : b6 + ":" + value
	}, this.b8 = function() {
		var ba, per;
		aC[0] && c.bG - c.aM !== aB[0] && (aB[0] = c.bG - c.aM, a8++), aJ.aK - aB[0] !== aB[1] && (aB[1] = aJ.aK - aB[0], a8++), this.bB(), (ba = ay.bb(c.t)) !== aB[5] && (aB[5] = ba, a8++), aQ(), aB[7] += bc.bd, ba = aR(7), aD !== ba && (aD =
			ba, a8 += 100), ba = c.bJ ? bK.bL() : y.aO[bM[0]], per = q.aN(1e4 * ba, Math.max(c.aP, 1)), aB[3] = ba, aB[4] !== per && (a8++, aB[4] = per), 8 === c.d && function() {
			for (var ai = 0; ai < 2; ai++)
				if (!aa.bY.bZ(ai)) return bT.bU.bV(), 1;
			return
		}() || aB[3] < c.aP || ! function() {
			for (var ai = aJ.aK - 1; 0 <= ai; ai--)
				if (0 < y.bW[aJ.bX[ai]].length) return;
			return 1
		}() || bQ.bR.bS().length || c.bJ && bK.bL(1) < c.aP || bT.bU.bV()
	}, this.bB = function() {
		aC[2] && c.aM !== aB[2] && (aB[2] = c.aM, a8 += 2 === c.bH ? 100 : 1)
	}, this.bN = function() {
		return aB[3] === c.aP
	}, this.bf = function(ai) {
		var bg, bh, av;
		return 2 !== c.bH && (ai % 2 == 1 && (bi.ap(1, 1), bc.bj = !0), ai === c.bk ? (aE = 0, ah(), !1) : (-1 !== ai || 0 !== aF) && (bh = aE, aE = c.bl ? ai / c.bk : (av = performance.now(), 0 <= ai && (bg = av - 392 * ai, aF = 0 === ai || bg <
			aF ? bg : aF), 1 < (aE = (av - aF) / (392 * c.bk)) ? 1 : aE), ah(), aE !== bh))
	}, this.bm = function() {
		bn.drawImage(canvas, a3, a4)
	}
}

function bo() {
	this.bp = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.bq = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", v.w, "rgb(170,170,170)"
	], this.br = [v.w, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", v.w, v.bs], this.bt = [v.bs, v.w, v.w, v.w, v.bs, v.bs, v.bs, v.bs, v.w];
	var bu = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.bv = ["rgba(" + bu[0] + ",", "rgba(" + bu[1] + ",", "rgba(" + bu[2] + ",", "rgba(" + bu[3] + ",", "rgba(" + bu[4] + ",", "rgba(" + bu[5] + ",", "rgba(" + bu[6] + ",", "rgba(" + bu[7] + ",", "rgba(" + bu[8] + ",", "rgba(" + bu[9] + ","], this
		.bw = ["rgb(" + bu[0] + ")", "rgb(" + bu[1] + ")", "rgb(" + bu[2] + ")", "rgb(" + bu[3] + ")", "rgb(" + bu[4] + ")", "rgb(" + bu[5] + ")", "rgb(" + bu[6] + ")", "rgb(" + bu[7] + ")", "rgb(" + bu[8] + ")", "rgb(" + bu[9] + ")"], this.bx =
		null, this.by = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.bz = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.c0 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.c1 = new Uint8Array(c.c2), this.c3 = new Uint8Array(c.c2), this.c4 = new Uint16Array(c.c2), this.c5 = new Uint16Array(this.c0.length + 1), this.c6 = new Uint16Array(this.c0.length), this.c7 =
		function() {
			this.bx = [L(11), L(12), L(13), L(14), L(15), L(16), L(17), L(18), L(19)]
		}, this.b = function() {
			if (this.c1.fill(0), this.c3.fill(0), this.c8(), c.bJ) {
				if (9 === c.d) {
					for (var c1 = cD.c1, ai = c.data.teamPlayerCount[7] - 1; 0 <= ai; ai--) c1[ai] = 1;
					var b7 = c.c2;
					for (ai = c.data.teamPlayerCount[7]; ai < b7; ai++) c1[ai] = 2;
					cD.c0[1] = 7, cD.c0[2] = 8
				} else c.aH ? function() {
					var bz = cD.bz,
						colorsData = c.data.colorsData;
					if (!c.data.selectableColor)
						for (var ai = c.aI - 1; 0 <= ai; ai--) colorsData[ai] = cN.cO(262144);
					var cP = 0,
						cQ = 768,
						cR = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = c.data.teamPlayerCount;
					for (ai = 0; ai < 9; ai++)
						if (teamPlayerCount[ai]) {
							for (var cS = 0, cT = 0; cT < 3; cT++) cS += Math.abs(bz[ai][cT] - cR[cT]);
							cS < cQ && (cP = ai, cQ = cS)
						} var cU = new Uint16Array(9);
					for (ai = 0; ai < 9; ai++) cU[ai] = teamPlayerCount[ai];
					var c0 = cD.c0,
						cV = new Uint8Array(9),
						cW = (c0[0] = 0, 1);
					for (ai = 1; ai < 9; ai++) cU[ai] && (cV[ai] = cW, c0[cW++] = ai);
					var cX = c.aI,
						c1 = cD.c1;
					cU[cP] ? (cU[cP]--, c1[0] = cV[cP]) : cX = 0;
					var cY = 0;
					for (ai = cX; ai < c.cZ; ai++) {
						var ca = c0[cY];
						if (cU[ca]) cU[ca]--, c1[ai] = cV[ca];
						else if (ai--, 9 <= ++cY) return console.log("error 325")
					}
				}() : this.b8();
				! function() {
					for (var b7 = c.c2, c4 = cD.c4, c5 = cD.c5, c6 = cD.c6, c1 = cD.c1, c0 = cD.c0, cu = c0.length, buffer = new Array(cu), ai = 0; ai < cu; ai++) buffer[ai] = [];
					for (ai = 0; ai < b7; ai++) buffer[c0[c1[ai]]].push(ai);
					for (ai = 1; ai <= cu; ai++) c5[ai] = c5[ai - 1] + buffer[ai - 1].length;
					for (ai = 0; ai < cu; ai++)
						for (var cW = buffer[ai].length, b6 = c5[ai], ca = 0; ca < cW; ca++) c4[ca + b6] = buffer[ai][ca];
					var aI = c.aI;
					for (ai = 0; ai < cu; ai++)
						for (cW = buffer[ai].length, b6 = c5[ai], ca = 0; ca < cW; ca++)
							if (c4[ca + b6] >= aI) {
								c6[ai] = ca;
								break
							}
				}(), ! function() {
					for (var b7 = c.c2, c1 = cD.c1, c3 = cD.c3, c0 = cD.c0, ai = 0; ai < b7; ai++) c3[ai] = c0[c1[ai]];
					9 === c.d && c3.fill(1, b7 - cv.cw[5])
				}()
			}
		}, this.c8 = function() {
			for (var ai = this.c0.length - 1; 0 <= ai; ai--) this.c0[ai] = ai
		}, this.b8 = function() {
			var cE = new Uint8Array(c.aI),
				cF = new Uint8Array(c.aI),
				cG = new Uint16Array(8),
				cH = new Uint16Array(this.c0.length);
			this.cI(cE, cF, cG, 1), this.cJ(cG), this.cK(cH, cE, cF), this.cL(cE, cF, cH), this.cM()
		}, this.cI = function(cE, cF, cU, cb) {
			for (var cT, cc, cd, b7 = this.c0.length - cb, ce = new Uint16Array(b7), bz = this.bz, colorsData = c.data.colorsData, ai = c.aI - 1; 0 <= ai; ai--) {
				for (cT = b7; cb <= cT; cT--) ce[cT - 1] = Math.abs(4 * (colorsData[ai] >> 12) - bz[cT][0]) + Math.abs(4 * (colorsData[ai] >> 6 & 63) - bz[cT][1]) + Math.abs(4 * (63 & colorsData[ai]) - bz[cT][2]);
				for (cd = 768, cT = b7 - 1; 0 <= cT; cT--) ce[cc = (cT + ai) % b7] < cd && (cd = ce[cc], cE[ai] = cc);
				for (cU[cE[ai]] += 4, cd = 768, cT = b7 - 1; 0 <= cT; cT--) ce[cc = (cT + ai) % b7] < cd && cc !== cE[ai] && (cd = ce[cc], cF[ai] = cc);
				cU[cF[ai]]++
			}
		}, this.cJ = function(cU) {
			for (var cT, cf, b7 = this.c0.length - 1, ai = b7; 0 <= ai; ai--) this.c0[ai] = ai;
			for (ai = b7 - 1; 0 <= ai; ai--) cU[ai]++;
			for (ai = 1; ai <= b7; ai++) {
				for (cf = 0, cT = 1; cT < b7; cT++) cU[cT] > cU[cf] && (cf = cT);
				cU[cf] = 0, this.c0[ai] = cf + 1
			}
		}, this.cK = function(cH, cE, cF) {
			var cT, cg, cY, cS, cc, ch, bg, ci = this.c0.length - 1,
				cj = new Uint16Array(ci),
				ck = [],
				cl = 0,
				cm = [],
				cn = [];
			loop: for (var ai = 0; ai < c.aI; ai++)
				if (null !== (cg = aa.b1.co(y.cp[ai]))) {
					for (cT = cm.length - 1; 0 <= cT; cT--)
						if (cg === cm[cT]) {
							cn[cT].push(ai), cl = Math.max(cl, cn[cT].length);
							continue loop
						} cm.push(cg), ck.push(!1), cn.push([ai]), cl = Math.max(cl, 1)
				}
			for (; 2 < c.cq && cl > q.aN(c.aI, c.cq);) c.cq--, c.d--;
			for (cT = cm.length - 1; 0 <= cT; cT--) {
				for (cS = -1, cY = cm.length - 1; 0 <= cY; cY--) !ck[cY] && (-1 === cS || cn[cY].length > cn[cS].length) && (cS = cY);
				for (cY = ci - 1; 0 <= cY; cY--) cj[cY] = 1;
				for (cY = cn[cS].length - 1; 0 <= cY; cY--) cj[cE[cn[cS][cY]]] += 3, cj[cF[cn[cS][cY]]]++;
				for (ai = ci - 1; 0 <= ai; ai--) {
					for (cc = cS % ci, cY = ci - 1; 0 <= cY; cY--) cj[cY] > cj[cc] && (cc = cY);
					for (ch = -1, cY = c.cq; 0 < cY; cY--)
						if (this.c0[cY] === cc + 1) {
							ch = cY;
							break
						} if (cj[cc] = 0, -1 !== ch) {
						for (bg = 0, cY = c.cq; 0 < cY; cY--) cH[ch] > cH[cY] && bg++;
						if (bg !== c.cq - 1) {
							for (cY = cn[cS].length - 1; 0 <= cY; cY--) cH[ch]++, this.c1[cn[cS][cY]] = ch;
							break
						}
					}
				}
				ck[cS] = !0
			}
		}, this.cL = function(cE, cF, cH) {
			for (var ai, cr, b7 = this.c0.length - 1, border = q.aN(c.aI, c.cq), cs = (0 < c.aI % c.cq && border++, new Uint8Array(1 + b7)), cT = b7; 1 <= cT; cT--) cs[this.c0[cT]] = cT;
			for (ai = 0; ai < c.aI; ai++) cr = cs[cE[ai] + 1], 0 === this.c1[ai] && cr <= c.cq && cH[cr] < border && (cH[cr]++, this.c1[ai] = cr);
			for (ai = 0; ai < c.aI; ai++) cr = cs[cF[ai] + 1], 0 === this.c1[ai] && cr <= c.cq && cH[cr] < border && (cH[cr]++, this.c1[ai] = cr);
			for (cT = c.cq; 1 <= cT; cT--)
				for (ai = c.aI - 1; 0 <= ai && !(cH[cT] >= border); ai--) 0 === this.c1[ai] && (cH[cT]++, this.c1[ai] = cT)
		}, this.cM = function() {
			if (c.cq < 8) c.cq++, c.d++, c.ct = 1;
			else
				for (var ai = c.aI; ai < c.c2; ai++) this.c1[ai] = 1 + ai % c.cq
		}
}

function cx() {
	this.aN = function(cy, cT) {
		return Math.floor((cy + .5) / cT)
	}, this.cz = function(cy, cT) {
		return Math.floor(cy * (cT + .5))
	}, this.sqrt = function(d0) {
		return ~~Math.sqrt(d0 + .5)
	}, this.pow = function(cc) {
		return Math.floor(Math.pow(2, cc) + .5)
	}, this.a0 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.d1 = function(d2, d3, d4) {
		return Math.max(Math.min(d2, d3), d4)
	}, this.d5 = function(d6, d7, a3, a4) {
		a3 -= d6, d6 = a4 - d7, a4 = 0;
		return 0 == a3 ? a4 = 0 <= d6 ? Math.PI : 0 : (a4 = Math.atan(d6 / a3), a4 += 0 < a3 ? .5 * Math.PI : 1.5 * Math.PI), a4
	}, this.log2 = function(d0) {
		return Math.floor(!!d0 * (1 + Math.log2(d0 + .5)))
	}, this.log10 = function(d0) {
		return Math.floor(Math.log10(d0 + .5))
	}, this.dB = function(dC, dD, dE, dF, dG) {
		return dE - dG < dC && dC < dE + dG && dF - dG < dD && dD < dF + dG
	}, this.dH = function(dI, dJ) {
		return dI * dI + dJ * dJ
	}
}

function dK(dL, dM, dN, dO, dP, dQ) {
	var dR = document.createElement("div"),
		dS = document.createElement("div"),
		dT = document.createElement("div"),
		dU = document.createElement("div"),
		dV = document.createElement("div"),
		dW = document.createElement("div"),
		dX = document.createElement("div"),
		dY = document.createElement("div"),
		dZ = document.createElement("span"),
		da = document.createElement("div");
	this.db = new dc(dP, dQ), this.dd = new de(dQ), this.df = [dL, dM, dN, dO], this.dr = function(ds) {
		ds = (ds / 10).toFixed(1) + "%";
		dY.style.width = ds, dZ.innerHTML = ds
	}, this.dt = function() {
		this.dd.du(dW), this.db.show(dW)
	}, this.dv = function() {
		this.db.du(dW), this.dd.show(dW)
	}, this.dw = function() {
		return dS
	}, this.show = function() {
		document.body.appendChild(dR)
	}, this.du = function() {
		dx.removeChild(document.body, dR)
	}, this.resize = function(dy) {
		var dz = 1 - .4 * aT.aU.aV() * (aW.aS > 1.6 * aW.aY),
			e0 = aa.ab.e1(.05 * dz),
			e2 = aW.aY > aW.aS,
			e3 = aa.ab.e1(.06 * dz + .03 * e2),
			e4 = aa.ab.e1(.08 * dz + .03 * e2),
			e5 = aa.ab.e1(.04 + .02 * e2),
			e2 = aa.ab.e1(.02 * dz + .01 * e2),
			e7 = aa.ab.e1(.025);
		dR.style.font = aa.ab.ac(0, e7), dV.style.font = aa.ab.ac(0, .9 * e7), da.style.font = aa.ab.ac(0, .9 * e7), dz < 1 && (e7 = aa.ab.ac(0, dz * e7), dT.style.font = e7, dV.style.font = e7, da.style.font = e7, dX.style.font = e7, dU.style
				.font = e7), dS.style.height = aa.ab.e9(e0), dS.style.font = aa.ab.ac(0, .72 * e0), aa.ab.eA(dS, 2), dT.style.top = aa.ab.e9(e0), dT.style.height = aa.ab.e9(e4), aa.ab.eA(dT, 2), dU.style.font = aa.ab.ac(0, dz * aa.ab.e1(.02)), dU
			.style.top = aa.ab.e9(e0 + e4), dU.style.height = aa.ab.e9(e5), aa.ab.eA(dU, 2), dV.style.top = aa.ab.e9(e0 + e4 + e5), dV.style.height = aa.ab.e9(e3), aa.ab.eA(dV, 2), dW.style.top = aa.ab.e9(e0 + e4 + e5 + e3), dW.style.height = aa
			.ab.e9(aW.aY / aW.eB - e0 - e4 - 2 * e3 - e5 - e2), dX.style.top = aa.ab.e9(aW.aY / aW.eB - e3 - e2), dX.style.height = aa.ab.e9(e2), aa.ab.eA(dX, 8), dZ.style.font = aa.ab.ac(0, .8 * e2), da.style.top = aa.ab.e9(aW.aY / aW.eB - e3),
			da.style.height = aa.ab.e9(e3), aa.ab.eA(da, 8), dL.resize(dT), dM.resize(dT), dN.resize(dT), dO.resize(dT), dy ? this.db.resize(dW) : this.dd.resize()
	};
	dP = this;
	dR.style.position = "absolute", dR.style.top = "0", dR.style.left = "0", dR.style.width = "100%", dR.style.height = "100%", dR.style.backgroundColor = v.dh, di.dj() || (dR.style.backdropFilter = "blur(4px)", dR.style.webkitBackdropFilter =
		"blur(4px)"), dS.style.position = "absolute", dS.style.top = "0", dS.style.left = "0", dS.style.width = "100%", dS.style.display = "flex", dS.style.alignItems = "center", dS.translate = !1;
	for (var ce = [dT, dU, dV, da], ai = 0; ai < ce.length; ai++) ce[ai].style.position = "absolute", ce[ai].style.left = "0", ce[ai].style.width = "100%", aa.ab.dk(ce[ai]);
	dW.style.position = "absolute", dW.style.left = "0", dW.style.width = "100%", dW.style.font = "inherit", dX.style.position = "absolute", dX.style.left = "0", dX.style.width = "100%", dY.style.position = "absolute", dY.style.top = "0", dY.style
		.left = "0", dY.style.height = "100%", dY.style.width = "50%", dY.style.backgroundColor = v.dl, dZ.innerHTML = "", dZ.style.position = "absolute", dZ.style.top = "50%", dZ.style.left = "50%", dZ.style.transform = "translate(-50%, -50%)", dZ
		.translate = !1, dS.appendChild(function() {
			var dq = document.createElement("h1");
			return dq.textContent = L(20), dq.style.margin = "0 auto 0.15em auto", dq.style.fontFamily = "Arial Black, system-ui", dq.style.fontSize = "inherit", dq.style.fontWeight = "inherit", dq
		}()), dT.appendChild(dL.dp), dU.appendChild(dM.dp), dV.appendChild(dN.dp), dX.appendChild(dY), dX.appendChild(dZ), da.appendChild(dO.dp), dR.appendChild(dS), dR.appendChild(dT), dR.appendChild(dU), dR.appendChild(dV), dR.appendChild(dW), dR
		.appendChild(dX), dR.appendChild(da), dP.dd.show(dW)
}

function eC() {
	var eD, eE;

	function eK() {
		dx.eX();
		var be = eR.eY(eE.eZ());
		(c.bH && 0 < be.length && be === eR.eS.eT || eR.eb.ec(be)) && eR.ea()
	}
	this.show = function(eN) {
		this.eO(eN), eD.show(), this.resize()
	}, this.eO = function(eN) {
		0 === c.bH ? eN ? eE.eP(eN) : c.eQ.length && eE.eP(c.eQ) : (c.bl || (eR.eS.eT = eR.eU.eV()), eE.eP(eR.eW(eR.eS.eT)))
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), eE.resize()
	}, this.ed = function(cY) {
		2 === cY ? eD.ee[0].ef() : eK()
	}, eD = new eF(L(21), [new eG("⬅️ " + L(22), function() {
		dx.eH(1)
	}), new eG(L(23), function() {
		eE.eI()
	}), new eG(L(24), function() {
		eE.eJ()
	}), new eG(L(25), function() {
		eE.clear()
	}), new eG(L(26), function() {
		eK()
	})]), eE = new eL(L(27)), eD.eM.appendChild(eE.cc)
}

function eg() {
	var eh, ei, ey;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(28), [new eG("⬅️ " + L(22), function() {
		dx.ej(7, dx.ek(7).el)
	}), new eG(L(29), function() {
		ep.eq.er(105, es.et.eu(ei.ev[0].ew[0].cc.value, 5)), ep.eq.er(106, es.et.eu(ei.ev[1].ew[0].cc.value, 15)), dx.ej(8, dx.ek(7).el, new ex(18))
	})]), ei = new en(eh.eM, ((ey = []).push(function() {
		var f2 = new f3;
		return f2.f4(L(30)), f2.f5(new f6({
			value: "",
			f7: -1
		})), f2
	}()), ey.push(function() {
		var f2 = new f3,
			f8 = (f2.f4(L(31)), new f6({
				value: "",
				f7: -1
			}));
		return f8.cc.type = "password", f2.f5(f8), f2.f5(new f9([new eG(L(32), function(cc) {
			return cc.textContent === L(32) ? (cc.textContent = L(33), f8.cc.type = "text") : (cc.textContent = L(32), f8.cc.type = "password"), !0
		}).button])), f2
	}()), ey.push(function() {
		var f2 = new f3;
		return f2.f4(L(34)), f2.fA(L(35)), f2.fA(L(36)), f2.fA(L(37)), f2
	}()), ey))
}

function fB() {
	var cc;
	this.cc = document.createElement("hr"), this.resize = function() {
		aa.ab.eA(this.cc, 8, v.fC)
	}, (cc = this.cc).style.marginBottom = cc.style.marginTop = "0.65em", cc.style.marginLeft = cc.style.marginRight = "-4%", cc.style.border = "none"
}

function fD() {
	this.ef = new fE, this.buffer = new fF, this.eq = new fG, this.fH = new fI, this.fJ = new fK, this.b = function() {
		this.buffer.b(), (new fL).b(), this.fJ.b(), this.fH.fM()
	}
}

function fN() {
	this.fO = new fP, this.fQ = new fR, this.fH = new fS, this.fT = new fU, this.fV = new fW, this.fX = new fY, this.fZ = new fa, this.fb = new fc, this.fd = new fe, this.ff = new fg, this.fh = new fi, this.fj = new fk, this.fl = new fm, this.bR =
		new fn, this.fo = new fp, this.fq = new fr, this.fs = new ft, this.b = function() {
			this.fl.b(), this.fQ.b(), this.fH.b(), this.fT.b(), this.fV.b(), this.ff.b(), this.fq.b()
		}, this.bm = function() {
			this.ff.bm(), this.fQ.bm()
		}
}

function fx() {
	var fy, fz, aS, a3, a4, g0, g1;
	this.b = function() {
		fy = new Array(2), fz = new Array(2), this.g2 = !1, g1 = g0 = fw = fv = 0, fu = 1, this.resize()
	}, this.resize = function() {
		aS = (aS = Math.floor((aT.aU.aV() ? .072 : .0502) * aW.aX)) < 8 ? 8 : aS;
		for (var ai = 1; 0 <= ai; ai--) fy[ai] = document.createElement("canvas"), fy[ai].width = aS, fy[ai].height = aS, fz[ai] = fy[ai].getContext("2d", {
			alpha: !0
		});
		this.af(),
			function() {
				for (var ge = Math.floor(1 + aS / 20), ai = 1; 0 <= ai; ai--) fz[ai].clearRect(0, 0, aS, aS), fz[ai].fillStyle = v.gf, fz[ai].beginPath(), fz[ai].arc(aS / 2, aS / 2, aS / 2 - ge, 0, 2 * Math.PI), fz[ai].fill(), fz[ai].lineWidth =
					ge, fz[ai].fillStyle = v.w, fz[ai].strokeStyle = v.w, fz[ai].beginPath(), fz[ai].arc(aS / 2, aS / 2, aS / 2 - ge, 0, 2 * Math.PI), fz[ai].stroke(), gg(fz[ai], 0, 0, aS, ge, .3, 0 === ai)
			}()
	}, this.g7 = function() {
		return -fv / fu
	}, this.g8 = function() {
		return -fw / fu
	}, this.g9 = function(gA, gB) {
		fv = fu * gA - gB
	}, this.gC = function(gD, gE) {
		fw = fu * gD - gE
	}, this.gF = function(g5, g6) {
		return c.gG || ! function(g5, g6) {
			return Math.pow(g5 - (a3 + aS / 2), 2) + Math.pow(g6 - (a4 + aS / 2), 2) < aS * aS / 4 || Math.pow(g5 - (a3 + aS / 2), 2) + Math.pow(g6 - (a4 + 2 * aS), 2) < aS * aS / 4
		}(g5, g6) || ep.buffer.data[8].value ? (gI.gJ() && (this.g2 = !0, g0 = g5, g1 = g6), !1) : g6 < a4 + 1.25 * aS ? this.gH(Math.floor(aW.aS / 2), Math.floor(aW.aY / 2), -200) : this.gH(Math.floor(aW.aS / 2), Math.floor(aW.aY / 2), 200)
	}, this.gK = function(g5, g6) {
		var gL, gM, d8, d9;
		return !gI.gJ() || (gL = fv, gM = fw, fv += d8 = g0 - g5, fw += d9 = g1 - g6, gN.gK(d8, d9), this.gO(), g0 = g5, g1 = g6, gL !== fv) || gM !== fw
	}, this.gH = function(gP, gQ, deltaY) {
		var ch;
		if (gI.gJ()) {
			if (0 < deltaY) ch = (ch = 500 / (500 + deltaY)) < .5 ? .5 : ch;
			else {
				if (!(deltaY < 0)) return !1;
				ch = 2 < (ch = (500 - deltaY) / 500) ? 2 : ch
			}
			this.gR(gP, gQ, ch), bc.bj = !0
		}
		return !0
	}, this.gR = function(a3, a4, ar) {
		var gc;
		ar = gc = (gc = 1024 < (gc = ar) * fu ? 1024 / fu : gc) * fu < .125 ? .125 / fu : gc, gN.zoom(ar, a3, a4),
			function(gc, gP, gQ) {
				fu *= gc, fv = (fv + gP) * gc - gP, fw = (fw + gQ) * gc - gQ, gd.gO()
			}(ar, a3, a4)
	}, this.gO = function() {
		var gU = aW.aS / 16,
			dI = 0,
			gV = aW.aY / 16,
			dJ = 0;
		fv < gU - aW.aS && (dI = -aW.aS + gU - fv), fv > fu * gW.gX - gU && (dI = fu * gW.gX - gU - fv), fw < gV - aW.aY && (dJ = -aW.aY + gV - fw), fu * gW.gY - gV < fw && (dJ = fu * gW.gY - gV - fw), fv += dI, fw += dJ, gZ.ga(), gN.gb(dI, dJ)
	}, this.af = function() {
		a3 = aW.aS - aS - ak.gap, a4 = Math.floor(aW.aY / 2 - 1.25 * aS)
	}, this.bm = function() {
		ep.buffer.data[8].value || (bn.drawImage(fy[0], a3, a4), bn.drawImage(fy[1], a3, Math.floor(a4 + 3 * aS / 2)))
	}
}

function gh() {
	this.gi = null, this.gj = null, this.gk = null, this.b = function() {
		this.gl = [L(38), L(39), L(40), L(41), L(42), L(43), L(44), L(45), L(46), L(47), L(48), L(49), L(50), L(51), L(52), L(53), L(54), L(55), L(56), L(57), L(58), L(59), L(60), L(61), "Mare Nostrum"];
		var gm = [120, 105, 92],
			cos = [12, 12, 60],
			gn = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			go = [140, 130, 120],
			gp = [12, 12, 76],
			gq = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			gr = [130, 117, 106],
			gs = [12, 12, 68],
			gt = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.gi = new Array(gW.gx + 1), this.gi[0] = {
			aS: 230,
			aY: 230,
			gy: 1e3,
			gz: 2e3,
			h0: 173
		}, this.gi[1] = {
			aS: 800,
			aY: 800,
			gy: 100,
			gz: 50,
			h0: 43
		}, this.gi[2] = {
			aS: 512,
			aY: 512,
			gy: 128,
			gz: 32,
			h0: 0
		}, this.gi[3] = {
			aS: 960,
			aY: 960,
			gy: 60,
			gz: 8,
			h0: 0
		}, this.gi[4] = {
			aS: 900,
			aY: 900,
			gy: 100,
			gz: 5,
			h0: 0
		}, this.gi[5] = {
			aS: 1e3,
			aY: 1e3,
			gy: 100,
			gz: 40,
			h0: 0
		}, this.gi[6] = {
			aS: 1e3,
			aY: 1e3,
			gy: 100,
			gz: 20,
			h0: 0
		}, this.gi[7] = {
			aS: 1024,
			aY: 1024,
			gy: 128,
			gz: 32,
			h0: 0
		}, this.gi[8] = {
			aS: 820,
			aY: 820,
			gy: 200,
			gz: 100,
			h0: 0
		}, this.gi[9] = {
			aS: 1024,
			aY: 1024,
			gy: 128,
			gz: 32,
			h0: 0
		}, this.gi[10] = {
			h1: go,
			h2: gp,
			h3: gq
		}, this.gi[11] = {
			h1: gr,
			h2: gs,
			h3: gt
		}, this.gi[12] = {
			h1: gr,
			h2: gs,
			h3: gt
		}, this.gi[13] = {
			h1: gm,
			h2: cos,
			h3: gn
		}, this.gi[14] = {
			h1: gm,
			h2: cos,
			h3: gn
		}, this.gi[15] = {
			h1: go,
			h2: gp,
			h3: gq
		}, this.gi[16] = {
			h1: go,
			h2: gp,
			h3: gq
		}, this.gi[17] = {
			h1: gm,
			h2: cos,
			h3: gn
		}, this.gi[18] = {
			h1: gr,
			h2: gs,
			h3: gt
		}, this.gi[19] = {
			h1: gm,
			h2: cos,
			h3: gn
		}, this.gi[20] = {
			aS: 1024,
			aY: 1024,
			gy: 128,
			gz: 32,
			h0: 0
		}, this.gi[21] = {
			aS: 940,
			aY: 940,
			gy: 80,
			gz: 8,
			h0: 0
		}, this.gi[22] = {
			h1: gr,
			h2: gs,
			h3: gt
		}, this.gi[23] = {
			h1: go,
			h2: gp,
			h3: gq
		}, this.gi[24] = {
			h1: [157, 136, 117],
			h2: [16, 13, 68],
			h3: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			h4: "[OG] Neutronian"
		};
		for (var ai = 0; ai < gW.gx; ai++) this.gi[ai].name = this.gl[ai];
		this.gi[gW.gx] = {
			name: ""
		}, this.gj = new Uint8Array(12);
		for (ai = 0; ai < 10; ai++) this.gj[ai] = ai;
		for (this.gj[10] = 20, this.gj[11] = 21, this.gk = new Uint8Array(gW.h5), ai = 0; ai < 10; ai++) this.gk[ai] = 10 + ai;
		this.gk[10] = 22, this.gk[11] = 23, this.gk[12] = 24
	}
}

function h6() {
	this.h7 = new h8, this.h9 = new hA
}

function hB() {
	var hC = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		hD = [v.hE, v.hE, v.hF, v.hG, v.hH, v.hI, v.hJ, v.hF, v.hK, v.hL, v.hM, v.bs],
		hN = [
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
		hO = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function i2(i3, hT, i5) {
		for (var cT = i3.length - 1; 0 <= cT; cT--) {
			var ht = i3[cT];
			0 === ht.id && ht.hT === hT && (ht.hU = "[Redacted Message]", i5) && (ht.i6 = 1)
		}
	}
	this.hP = function(hQ) {
		var hR, hV;
		return hQ.id < 5 && (hR = "@" + hS.et.b3(hQ.hT, 5)), 0 === hQ.id ? hR + ": " + hQ.hU : 1 === hQ.id ? (hV = "@" + hS.et.b3(hQ.target, 5), 0 === hQ.hW ? 32768 <= hQ.value ? hR + " voted with " + (hQ.value - 32768 + 1) + " gold against " +
				hV + " to weaken the latter's admin position. 📉" : hR + " voted with " + (hQ.value + 1) + " gold for " + hV + " to strengthen the latter's admin position. 💪" : 1 === hQ.hW ? hR + " sent " + Math.floor(hQ.value / 100) +
				" 🧈 gold to " + hV + "." : hR + " voted with " + (hQ.value / 10).toFixed(1) + " points for " + hV + " to acknowledge the latter as clan leader. ✅") : 2 === hQ.id ? 0 === hQ.hW ? hR + " was 🔇 muted for 1 Hour." : 1 === hQ.hW ?
			"The username of " + hR + " was ✂️ redacted. Duration: 1 Day" : hR + " 👢 was kicked." : 3 === hQ.id ? hR + hX.hY(hQ.hW, hX.hZ[hQ.hW][hQ.value]) + "@" + hS.et.b3(hQ.target, 5) + hX.ha(hQ.hW, hX.hZ[hQ.hW][hQ.value]) : 4 === hQ.id ?
			hR + hX.hY(5, hX.hZ[5][hQ.hW]) + "@" + hS.et.b3(hQ.target, 5) + hX.ha(5, hX.hZ[5][hQ.hW]) : 5 === hQ.id ? hO[hQ.hW] : 6 === hQ.id ? "You are about to mention " + hQ.value + " player" + (1 === hQ.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * hQ.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === hQ.id ? hQ.hU : void 0
	}, this.hb = function(hQ, hc) {
		return {
			hQ: hQ,
			hU: hc,
			hd: 0,
			fontSize: 1,
			he: 0,
			hf: hQ.id ? v.hg : v.w
		}
	}, this.hh = function(player, hi) {
		return (2 === hi ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.hj = function(hk) {
		return hD[hk]
	}, this.hl = function(hk, hm) {
		return hk < 3 || 7 === hk ? hN[hk][0] : 4 === hk ? hN[hk][hm < 1 ? 0 : hm < 10 ? 1 : 2] : hN[hk][hm < 10 ? 0 : 1]
	}, this.hn = function(hm) {
		return 0 === hm
	}, this.ho = function(hi, hT) {
		for (var hp = hq.hr.hp, hr = hp[hi], b7 = hr.length, ai = 0; ai < b7; ai++)
			if (hT === hr[ai].hT) return hr[ai];
		for (var cT = 0; cT < hp.length; cT++)
			if (hi !== cT)
				for (b7 = (hr = hp[cT]).length, ai = 0; ai < b7; ai++)
					if (hT === hr[ai].hT) return hr[ai];
		return null
	}, this.hs = function(ht) {
		return !!hq.hu && ht.hT === hq.hu.hT
	}, this.hv = function(hr, hw, hx) {
		var cm = [];
		loop: for (var ai = hw; ai < hx; ai++) {
			var cg = aa.b1.co(hr[ai].username);
			if (cg) {
				for (var cT = cm.length - 1; 0 <= cT; cT--)
					if (cg === cm[cT].name) {
						cm[cT].cW++;
						continue loop
					} cm.push({
					name: cg,
					cW: 1
				})
			}
		}
		if (cm.sort(function(cy, cT) {
				return cT.cW - cy.cW
			}), 0 === cm.length) return "";
		for (var be = cm[0].name + ": " + cm[0].cW, ai = 1; ai < cm.length; ai++) be += "   " + cm[ai].name + ": " + cm[ai].cW;
		return be
	}, this.hy = function(hk, hm, hz) {
		return 0 === hC[hk].length ? "Rank: " + (hm + 1) : hC[hk] + " Rank: " + (hm + 1) + (3 !== hk && hz < 100 ? "   " + hC[3] + " Rank: " + (hz + 1) : "")
	}, this.i0 = function(hT) {
		for (var i1 = hq.fH.i1, ai = 0; ai < i1.length; ai++) i2(i1[ai].i3, hT);
		i2(hq.message.i4(), hT, 1), hq.h7.i0(hT)
	}
}

function eG(i7, i8, i9, iA, iB) {
	var self, iC = document.createElement("button");

	function iH() {
		var cj;
		di.dj() || (cj = aa.color.iO(i9), !1 !== iA && 0 < cj[0] && cj[0] < 255 && cj[0] === cj[1] && cj[0] === cj[2]) || (128 < cj[0] && 128 < cj[1] && 128 < cj[2] ? iC.style.backgroundColor = aa.color.iP(i9, -50) : iC.style.backgroundColor = aa
			.color.iP(i9, cj[3] && cj[3] < 120 ? 150 : 50))
	}

	function iG() {
		if (iA) {
			var cj = aa.color.iO(i9);
			if (cj[0] === cj[1] && cj[0] === cj[2]) return
		}
		i8 && ((cj = i8(this)) ? 2 === cj && iH() : iR(this))
	}

	function iJ() {
		this.style.backgroundColor = i9
	}

	function iI() {
		iR(this)
	}

	function iR(cS) {
		cS.style.backgroundColor = i9, cS.blur()
	}
	this.button = iC, this.ef = i8, this.iD = i9, this.iF = function(iK) {
			iK = 1.1 - Math.min(.01 * i7.length, .6) + .2 * iK;
			iC.style.fontSize = iK.toFixed(1) + "em"
		}, this.iE = function(cY) {
			cY ? 1 === cY ? cY = v.iN : 2 === cY && (iA = 1, cY = v.iN) : (iA = 0, cY = v.iM), this.iD = i9 = cY, iC.style.backgroundColor = cY
		}, self = this, iC.innerHTML = i7, iC.style.color = iB ? v.hL : v.w, iC.style.userSelect = "none", iC.style.outline = "none", iC.style.overflowWrap = "break-word", self.iE(i9), iC.style.border = "none", iC.style.font = "inherit", self.iF(0),
		iC.style.padding = "0em 0.3em", iC.onclick = iG, iC.addEventListener("mouseover", iH), iC.addEventListener("mouseout", iI), iC.addEventListener("focus", iH), iC.addEventListener("blur", iJ)
}

function iS() {
	var iT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.iU = function(iV) {
		var iX, be = new Date(iV.getTime() - 6e4 * iV.getTimezoneOffset()).toUTCString();
		return be.length < 12 || (be = be.substring(5, be.length), 0 === (iV = iV.getTimezoneOffset())) ? be : (iX = (iV < 0 ? "+" : "-") + q.aN(Math.abs(iV), 60), 0 == (iV = Math.abs(iV) % 60) ? be + iX : be + iX + ":" + (iV < 10 ? "0" : "") +
			iV)
	}, this.iZ = function(iV) {
		var be = iV.toUTCString();
		return be.length < 12 ? be : function(iV) {
			return iT[iV.getUTCDay()]
		}(iV) + ", " + be.substring(5, be.length - 4)
	}
}

function fp() {
	function ii(player, ig) {
		ig = ix.iy(bQ.fH.iz[ig]), ig = j1.j2(ix.j3(ig));
		return !!bQ.bR.j4(player, ig)
	}

	function ie(player) {
		return bQ.fh.jS(player) && !bQ.fl.jT()
	}
	this.ib = function(player, ic) {
		return !!ie(player) && -1 !== (ic = function(player, ic) {
			for (var b7 = bQ.fH.jO, iz = bQ.fH.iz, j6 = bQ.fH.j6, jP = ix.jQ(), jR = -1, ai = 0; ai < b7; ai++) {
				var cQ = ix.jB(ic, ix.iy(iz[ai]));
				cQ < jP && aa.bY.j5(player, j6[ai] >> 3) && (jP = cQ, jR = ai)
			}
			return jR
		}(player, ic)) && !!ii(player, ic) && (ij.ik[3] = bQ.fH.il[ic], !0)
	}, this.im = function(player, io) {
		return !!ie(player) && !!bQ.bR.ip(io) && !!ii(player, ij.ik[2])
	}, this.iq = function(player, io, ir) {
		return !! function(player, io, ir) {
			if (ie(player) && bQ.bR.ip(io)) {
				io = ij.ik[2];
				if (aa.bY.j5(player, bQ.fH.j6[io] >> 3)) {
					if (function(player, ig) {
							return bQ.bR.jM(player, ig) && (ij.ce[0] = bQ.fl.jN(bQ.fH.jG[ig]), ij.ik[1] = 6, !0)
						}(player, io)) return 1;
					var iw = ix.iy(bQ.fH.iz[io]),
						j8 = bQ.bR.j9(player, iw);
					if (-1 !== j8) {
						j8 = ix.jB(j8, iw);
						if (!(ir && 120 < j8)) {
							ir = function(ig, jA, iw) {
								var jF = bQ.fH.jG[ig],
									ig = bQ.fH.jI[ig],
									jJ = ix.jB(iw, jF[ig + 1]);
								if (jA <= jJ) return bQ.bR.jK(iw, jF[ig + 1], jJ, jA);
								for (var cQ = jA - jJ, b7 = jF.length - 1, ai = ig + 1; ai < b7; ai++) {
									var jL = ix.jB(jF[ai], jF[ai + 1]);
									if (cQ <= jL) return bQ.bR.jK(jF[ai], jF[ai + 1], jL, cQ);
									cQ -= jL
								}
								return jF[b7]
							}(io, j8, iw);
							if (bQ.fb.jE(player, ir, 1)) return ij.ik[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, io, ir) && (player = ij.ik[2], bQ.fH.it[player] = 64 + bQ.fH.it[player] % 64, bQ.fq.iu(io, bQ.fH.iv), !0)
	}
}

function jU() {
	this.jV = function() {
		var ai;
		if (jW.size < jX.jY(23)) jZ.fH.ja(0, 3259);
		else {
			var jb = jW.jc(6),
				b7 = jW.jc(10),
				data = [];
			if (9 === jb || 10 === jb || 11 === jb || 13 === jb) {
				for (ai = 0; ai < b7; ai++) data.push([jW.jc(30), es.jd.ec(5), jW.je(32), 0, jW.jc(30)]);
				8 === dx.jf && dx.jg().jh(21, !0, {
					jb: jb,
					data: data
				})
			} else if (12 === jb) {
				for (ai = 0; ai < b7; ai++) data.push([jW.jc(20), jW.jc(30), jW.jc(30), jW.je(32), jW.jc(30), es.jd.ec(5), es.jd.ec(5)]);
				8 === dx.jf && dx.jg().jh(21, !0, {
					jb: jb,
					data: data
				})
			} else {
				var ji = jW.jc(16);
				if (jW.jj(39 + 16 * ji + b7 * (0 === jb ? 111 : 1 === jb ? 101 : 2 === jb || 3 === jb ? 127 : 212))) {
					if (0 === jb)
						for (ai = 0; ai < b7; ai++) data.push([jW.jc(30), es.jk.jl(jW.jc(5)), jW.jc(16), jW.jc(30), jW.jc(30)]);
					else if (1 === jb)
						for (ai = 0; ai < b7; ai++) data.push([jW.jc(16), es.jk.jl(jW.jc(3)), jW.jc(16), es.jk.jl(jW.jc(5)), jW.jc(31), jW.jc(30)]);
					else if (2 === jb || 3 === jb)
						for (ai = 0; ai < b7; ai++) data.push([jW.jc(30), es.jk.jl(jW.jc(5)), jW.je(32), jW.jc(30), jW.jc(30)]);
					else
						for (ai = 0; ai < b7; ai++) data.push([jW.jc(20), jW.jc(30), jW.jc(30), jW.jc(30), jW.jc(30), jW.je(32), jW.jc(30), es.jk.jl(jW.jc(5)), es.jk.jl(jW.jc(5))]);
					8 === dx.jf && dx.jg().jh(21, !0, {
						jb: jb,
						data: data
					})
				} else jZ.fH.ja(0, 3260)
			}
		}
	}, this.jm = function() {
		if (jW.size < jX.jY(29)) jZ.fH.ja(0, 3265);
		else {
			var jn = jW.jc(4),
				jo = jW.jc(7),
				jp = jW.jc(11);
			if (jW.jj(29 + 16 * jo + 16 * jp + 11 * jn)) {
				for (var data = [], ai = 0; ai < jn; ai++) {
					for (var cg = es.jk.jl(jW.jc(3)), jq = jW.jc(8), jr = [], cy = 0; cy < jq; cy++) jr.push(jW.jc(16));
					data.push({
						name: "[" + cg + "]",
						jr: jr
					})
				}
				8 === dx.jf && dx.jg().jh(23, !0, data)
			} else jZ.fH.ja(0, 3266)
		}
	}
}

function js() {
	var jt, dM, jw, dL, dO, ju = [new Array(4), new Array(4), new Array(2), new Array(2)],
		jv = new Array(4),
		jx = new Array(2),
		jy = [L(62), L(63), L(64), L(65)];

	function k6() {
		var hc;
		!hq.kE || (hc = jt.db.kF.cc.value.trim().slice(0, 127)).length < 1 || (jt.db.kF.cc.value = "", hq.kG.kH(hc))
	}

	function k5(kL) {
		hq.fH.kD[3] = 1 - hq.fH.kD[3], kC(3, 1, hq.fH.kD[3]), kL && jZ.kM.kN(4), hq.fH.kD[3] && ep.eq.er(158, hq.fH.kD[0])
	}

	function k0(cy, cT) {
		hq.fH.kD[cy] !== cT && (0 === cy && hq.fH.kD[3] && k5(0), kC(cy, hq.fH.kD[cy], 0), kC(cy, cT, 1), hq.fH.kD[cy] = cT, 0 === cy ? (jZ.kM.kN(2, cT), hq.fH.kD[2] ? (jt.dd.kQ(), jt.db.reset(1)) : jt.db.reset(0), dx.jg().kR(), dx.jg().kS()) : 2 ===
			cy && (0 === cT ? (jZ.kM.kN(0), jt.db.kQ(), jt.dt()) : (jZ.kM.kN(1), jt.dd.kQ(), jt.dv())))
	}

	function kC(cy, cT, color) {
		jt.df[cy].kA[cT].iE(color ? v.kT : v.k1)
	}

	function ka(kY) {
		return gW.ko.gl[kY]
	}

	function kb(kc) {
		return kc < 7 ? "   " + (kc + 2) + " Teams" : 10 === kc ? "   No Full-Sending" : ""
	}

	function kd(ke, kv) {
		return kv ? ke <= 90 && 60 < ke ? "   Contest" : "" : ke <= 60 ? "   Contest" : ""
	}
	this.kI = function() {
		return jt.db
	}, this.kG = function(hT) {
		k0(2, 0);
		var be = jt.db.kF.cc.value,
			hT = "@" + hT + " ";
		be.length && !aa.b1.kP(be, " ") && (hT = " " + hT), jt.db.kF.cc.value = be += hT, jt.db.kF.cc.focus()
	}, this.kU = function() {
		jt.dd.kQ()
	}, this.kR = function() {
		var kV = hq.fH.kD[0],
			kV = hq.fH.i1[kV],
			cT = (gW.kX(kV.kY, kV.mapSeed), dM.kA),
			kZ = ka(kV.kY, kV.mapSeed) + kb(kV.kc) + kd(kV.ke),
			kV = L(70) + "   " + ka(kV.kg, kV.kh) + kb(kV.ki) + kd(kV.ke, 1);
		cT[0].button.textContent === kZ && cT[1].button.textContent === kV || (cT[0].button.textContent = kZ, cT[1].button.textContent = kV, dM.resize())
	}, this.kS = function() {
		var kV = hq.fH.kD[0],
			kW = hq.fH.i1[kV];
		jt.dr(kW.ds);
		for (var d0, kx, ai = 0; ai < hq.hr.hp.length; ai++) ju[0][ai].kB.textContent = hq.hr.hp[ai].length, ju[1][ai].kB.textContent = (d0 = hq.fH.i1[ai].ke, kx = void 0, ((kx = q.aN(d0, 60)) < 10 ? "0" : "") + kx + ":" + ((d0 %= 60) < 10 ?
			"0" : "") + d0);
		var kW = hq.hr.hp[kV],
			kk = kW.length,
			kl = hq.hr.km[kV];
		ju[2][1].kB.textContent = "" + kk, ju[3][1].kB.textContent = "" + kl;
		for (ai = 0; ai < 4; ai++) {
			var kn = hq.fH.i1[ai];
			jv[ai] ? 0 === kn.ds && (jv[ai].kB.textContent = gW.ko.gl[kn.kY]) : jv[ai] = new k9(gW.ko.gl[kn.kY], dL.kA[ai].button, 1, 1), aa.b1.startsWith(jy[ai], "🏆 ") ? kn.kp || (jy[ai] = jy[ai].substring(3), dL.kA[ai].button.textContent = jy[
				ai], dL.kA[ai].button.appendChild(ju[1][ai].kB), dL.kA[ai].button.appendChild(ju[0][ai].kB), dL.kA[ai].button.appendChild(jv[ai].kB)) : kn.kp && (jy[ai] = "🏆 " + jy[ai], dL.kA[ai].button.textContent = jy[ai], dL.kA[ai].button
				.appendChild(ju[1][ai].kB), dL.kA[ai].button.appendChild(ju[0][ai].kB), dL.kA[ai].button.appendChild(jv[ai].kB))
		}
		var kq = "",
			kr = "";
		0 === kV && (kq = hq.bR.hv(kW, 0, kk), kr = hq.bR.hv(kW, 0, kl)), jw[0].kB.textContent = kq, jw[1].kB.textContent = kr, jx[1].kB.textContent = "MP: " + hq.fH.ks[0] + "   SP: " + hq.fH.ks[1] + "   Lobby: " + aa.kt.ku(hq.hr.hp)
	}, this.kw = function() {
		jt.db.kQ()
	}, this.show = function() {
		hq.fH.kz++, jt.show(), this.resize(), hq.message.show()
	}, this.du = function() {
		jt.du(), hq.k7.du(), hq.l0.du(), hq.message.du()
	}, this.resize = function() {
		jt.resize(1 - hq.fH.kD[2]), hq.message.resize()
	}, this.ed = function(cY) {
		2 === cY ? hq.fH.kD[3] ? k5(1) : jt.df[3].kA[0].ef() : cY < 2 && k5(1)
	}, dL = new jz([new eG(jy[0], function() {
		return k0(0, 0), 2
	}), new eG(jy[1], function() {
		return k0(0, 1), 2
	}), new eG(jy[2], function() {
		return k0(0, 2), 2
	}), new eG(jy[3], function() {
		return k0(0, 3), 2
	})], v.k1), (dM = new jz([new eG("", 0, 2), new eG("", 0, 2)], v.k2, 1)).dp.translate = !1;
	var k3 = new jz([new eG(L(66), function() {
		return k0(2, 0), 2
	}), new eG(L(3), function() {
		return k0(2, 1), 2
	})], v.k1);
	dO = new jz([new eG(L(67, 0, 0, 1), function() {
		dx.eX(), hq.kJ(), jZ.fH.kK(3240), dx.ej(5, 5)
	}), new eG(L(68), function() {
		return k5(1), 2
	})], v.k1), jt = new dK(dL, dM, k3, dO, k6, hq.k7.k8);
	for (var ai = 0; ai < 4; ai++) ju[0][ai] = new k9("0", dL.kA[ai].button), ju[1][ai] = new k9("0", dL.kA[ai].button, 1);
	ju[2][1] = new k9("0", k3.kA[1].button), ju[3][1] = new k9("0", dO.kA[1].button), (jw = [new k9("", k3.kA[1].button, 1, 1), new k9("", dO.kA[1].button, 1, 1)])[0].kB.style.bottom = "0em", jw[1].kB.style.bottom = "0em", jw[0].kB.translate = !1,
		jw[1].kB.translate = !1, kC(0, hq.fH.kD[0], 1), kC(2, hq.fH.kD[2], 1), (jx = [new k9(L(69), jt.dw(), 1, 0), new k9("", jt.dw(), 1, 1)])[0].kB.style.fontSize = "0.4em", jx[1].kB.style.fontSize = "0.4em"
}

function l1() {
	this.l2 = "https://territorial.io/changelog", this.l3 = "https://territorial.io/terms", this.l4 = "https://territorial.io/privacy", this.l5 = "https://territorial.io/tutorial", this.l6 = "https://territorial.io/players", this.l7 =
		"https://territorial.io/clans", this.l8 = "https://territorial.io/clan-results", this.l9 = "https://patreon.com/c/territorial", this.lA = "https://play.google.com/store/apps/details?id=territorial.io", this.lB =
		"https://apps.apple.com/app/id1581110913", this.lC = "https://discord.gg/pthqvpTXmh", this.lD = "https://www.instagram.com/davidtschacher/", this.lE =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function lF() {
	this.lG = [], this.lH = [], this.b = function() {
		this.lG = [], this.lH = []
	}, this.b8 = function() {
		0 <= this.lG.length && this.lI(this.lG), 0 <= this.lH.length && this.lI(this.lH)
	}, this.lI = function(ce) {
		for (var cT = -1, ai = ce.length - 1; 0 <= ai; ai--)
			if (ce[ai].iV--, ce[ai].iV <= 0) {
				cT = ai;
				break
			} for (ai = cT; 0 <= ai; ai--) ce.shift()
	}, this.lJ = function(id, lK, lL) {
		return this.lM(this.lG, id, lK, lL)
	}, this.lN = function(id, lK, lL) {
		return this.lM(this.lH, id, lK, lL)
	}, this.lM = function(ce, id, lK, lL) {
		return ! function(ce, id, lK) {
			var ai, ca;
			for (ai = lK.length - 1; 0 <= ai; ai--)
				for (ca = ce.length - 1; 0 <= ca; ca--)
					if (ce[ca].player === lK[ai] && id === ce[ca].id) return 1;
			return
		}(ce, id, lK) && (lL && function(ce, id, lK) {
			var ai;
			for (ai = lK.length - 1; 0 <= ai; ai--) ce.push({
				player: lK[ai],
				id: id,
				iV: 384
			})
		}(ce, id, lK), !0)
	}
}

function lQ() {
	var lR, lS, lT, lU = ["wss://", "/s50/", "/s51/", "/s52/"],
		lV = 0;

	function ll() {
		jZ.fH.ll(lR, lS)
	}

	function lm(cc) {
		jZ.lp.lq(lR, new Uint8Array(cc.data))
	}

	function lo() {}

	function ln(cc) {
		jZ.fH.ln(lR, cc)
	}
	this.b = function(f7, el, lW) {
		lR = f7, lS = el,
			function(lW) {
				lW = lh.li ? "ws://localhost:" + (7130 + lR) + "/" : lW ? lU[0] + "game.territorial.io/x0" + lR + "/" : lU[0] + jZ.fH.lj[lR] + lU[1 + lh.lk];
				(lT = new WebSocket(lW)).binaryType = "arraybuffer", lT.onopen = ll, lT.onmessage = lm, lT.onclose = ln, lT.onerror = lo
			}(lW)
	}, this.lY = function() {
		return lT.readyState === lT.CONNECTING
	}, this.lZ = function() {
		return lT.readyState === lT.OPEN
	}, this.la = function() {
		return lV
	}, this.lb = function() {
		lV = 1
	}, this.lc = function() {
		return this.lY() || this.lZ()
	}, this.ld = function(el) {
		lS = el
	}, this.le = function() {
		return lS
	}, this.send = function(lf) {
		this.lZ() && lT.send(lf)
	}, this.close = function(lg) {
		this.lc() && (this.du(), lT.close(lg))
	}, this.du = function() {
		lT.onopen = null, lT.onmessage = null, lT.onclose = null, lT.onerror = null
	}
}

function lr() {
	var eD, ls = !0;

	function m0(lz, m1) {
		var dp = document.createElement("div"),
			m2 = document.createElement("span"),
			m3 = document.createElement("span");
		m2.textContent = at.b4(m1.iV) + ":", m2.style.color = v.hF, m2.style.paddingRight = "0.4em", m2.style.display = "table-cell", m2.style.width = "6ch", m2.style.textAlign = "end", dp.appendChild(m2), m3.textContent = m1.be, dp.appendChild(m3),
			dp.style.display = "table", m1.m4 && function(dp, m4) {
				{
					var m8;
					m4 >= 1024 - m6.h7.m7 ? ((m8 = document.createElement("img")).src = m6.h9.m9[m4 - 1024 + m6.h7.m7].toDataURL(), m8.style.width = "1.5em", m8.style.height = "1.5em", m8.style.verticalAlign = "middle", dp.appendChild(m8)) : ((m8 =
						document.createElement("span")).textContent = m6.h7.mA(m4), m8.style.display = "inline-block", m8.style.fontSize = "1.5em", m8.style.lineHeight = "1em", m8.style.verticalAlign = "middle", dp.appendChild(m8))
				}
			}(dp, m1.m4), lz.appendChild(dp)
	}

	function lu() {
		ls && (eD.eM.scrollTop = eD.eM.scrollHeight)
	}
	this.clear = function() {
		eD.eM.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var lw = lx.ly(), b7 = lw.length, lz = document.createDocumentFragment(), ai = 0; ai < b7; ai++) m0(lz, lw[ai]);
		eD.eM.appendChild(lz), lu(), eD.show(), this.resize(), ls = !0, lu()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), eD.eM.style.padding = "0.4em " + aa.ab.e9(ak.lv)
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, this.u = function(m1) {
		var lz = document.createDocumentFragment();
		m0(lz, m1), eD.eM.appendChild(lz), lu()
	}, (eD = new eF(L(71), [new eG("⬅️ " + L(22), function() {
		dx.eH(1)
	})])).eM.style.overflowY = "auto", eD.eM.addEventListener("scroll", function() {
		ls = eD.eM.scrollTop >= eD.eM.scrollHeight - eD.eM.clientHeight - 2
	})
}

function mB() {
	this.size = 0, this.f7 = 0, this.lf = null, this.b = function(lf) {
		this.f7 = 0, this.lf = lf, this.size = lf.length
	}, this.kX = function(mC) {
		return this.b(new Uint8Array(this.jY(mC))), this.lf
	}, this.kJ = function() {
		this.lf = null
	}, this.mD = function(size, mE) {
		for (var lf = this.lf, gJ = this.f7 + size - 1, ai = this.f7; ai <= gJ; ai++) lf[ai >> 3] |= (mE >> gJ - ai & 1) << 7 - (7 & ai);
		this.f7 += size, this.f7 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.mF = function(size, mE) {
		var cT = size >> 1,
			cS = 1 << cT;
		this.mD(size - cT, q.aN(mE, cS)), this.mD(cT, mE % cS)
	}, this.mG = function(size) {
		for (var lf = this.lf, gJ = this.f7 + size, ai = this.f7; ai < gJ; ai++) lf[ai >> 3] &= 255 ^ 128 >>> (7 & ai)
	}, this.jY = function(mC) {
		return mC + 7 >> 3
	}, this.mH = function(ce, cX, gJ, mI) {
		for (var ai = cX; ai < gJ; ai++) this.mD(mI, ce[ai])
	}
}

function f9(mJ) {
	var dp = document.createElement("div");
	this.cc = dp, this.mK = mJ, this.resize = function() {
		for (var b7 = mJ.length, ai = 1; ai < b7; ai++) aa.ab.eA(mJ[ai], 4)
	};
	var ai, b7 = mJ.length;
	for (dp.style.width = "100%", dp.style.height = "2.7em", dp.style.marginTop = "0.6em", dp.style.border = "inherit", ai = 0; ai < b7; ai++) mJ[ai].style.verticalAlign = "top", mJ[ai].style.width = (100 / b7).toFixed(2) + "%", mJ[ai].style.height =
		"100%", mJ[ai].style.fontSize = "0.75em", dp.appendChild(mJ[ai])
}

function mL() {
	var eh, mM, mN, mP;

	function mO(ai) {
		dx.ej(8, dx.jf, new ex(21, {
			jb: ai,
			mS: 0,
			mT: 10
		}))
	}
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), mM.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, mN = [new eG(L(72), function() {
		mO(1)
	}, 0, 0, 1), new eG(L(73), function() {
		mO(2)
	}, 0, 0, 1), new eG(L(74), function() {
		mO(3)
	}, 0, 0, 1), new eG(L(75), function() {
		mO(0)
	}, 0, 0, 1), new eG(L(63), function() {
		mO(9)
	}, 0, 0, 1), new eG(L(76), function() {
		mO(10)
	}, 0, 0, 1), new eG(L(77), function() {
		mO(11)
	}, 0, 0, 1), new eG(L(78), function() {
		mO(13)
	}, 0, 0, 1)], mP = [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})], eh = new eF(L(79), mP), mM = new mR(mN, eh.eM)
}

function mU() {
	var mV = null,
		mW = null,
		mX = 0,
		mY = 0,
		mZ = null;

	function mb() {
		0 !== mW.hk && (hq.k7.du(), dx.ej(8, 29, new ex(25, {
			action: 0,
			hT: hS.et.b3(mW.hT, 5),
			mh: 0
		}, 29)))
	}

	function md() {
		return !hq.hu || hq.bR.hs(mW) ? 1 : 0
	}

	function mc() {
		var a3 = mV.a3,
			a4 = mV.a4,
			mm = (hq.k7.du(), md());
		mV = new ma([new eG(hX.hZ[5][0], function() {
			mg(5, 0)
		}, mm), new eG(hX.hZ[5][1], function() {
			mg(5, 1)
		}, mm), new eG(hX.hZ[5][2], function() {
			mg(5, 2)
		}, mm), new eG(hX.hZ[5][3], function() {
			mg(5, 3)
		}, mm)]), mf(a3, a4), mY = mX = 2
	}

	function me() {
		29 === dx.jf && dx.jg().kG(hS.et.b3(mW.hT, 5))
	}

	function mg(id, value) {
		5 === id && jZ.mn.mo({
			action: 3,
			hT: hS.et.b3(mW.hT, 5),
			value: value
		})
	}

	function mf(a3, a4, mt) {
		mV.show(a3, a4, mt), hq.l0.show(mV.a3, mV.a4, mW, 1)
	}
	this.k8 = function(cc, ht) {
		mX = 1, mW = ht, mV = new ma([new eG(L(80), mb, 0 === ht.hk ? 1 : 0), new eG(L(81), mc, md()), new eG(L(82), me, 0)]), mf((mZ = {
			clientX: cc.clientX,
			clientY: cc.clientY
		}).clientX, mZ.clientY, 1)
	}, this.ed = function(code) {
		if (29 !== dx.jf) return !1;
		if (!mW) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.du();
			else if (aa.b1.startsWith(code, "Numpad") || aa.b1.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === mX) this.k8(mZ, mW);
				else {
					if (!mV) return !1;
					1 === mX ? code <= 1 ? mb() : 2 === code ? mc() : (me(), this.du()) : (mg(mY, q.a0(code - 1, 0, hX.hZ[mY].length - 1)), this.du())
				}
		}
		return !0
	}, this.du = function() {
		mX = 0, mV && mV.du(), mV = null, hq.l0.du()
	}
}

function mu(mv) {
	var dR = document.createElement("div"),
		mw = document.createElement("div"),
		mx = [];

	function iH() {
		di.dj() || (this.style.backgroundColor = aa.color.iP(v.iM, 50))
	}

	function iI() {
		this.style.backgroundColor = v.iM
	}
	this.er = function(mz, n0) {
			mx[2].textContent = mz + 1 + " / " + n0
		}, this.show = function(ht) {
			ht = hq.bR.hb(ht, hq.bR.hP(ht)), mw.appendChild(hq.h7.transform(ht)), document.body.appendChild(dR)
		}, this.resize = function() {
			var aY = aa.ab.e1(.03, .5);
			dR.style.width = 10 * aY + "px", dR.style.font = aa.ab.ac(1, .75 * aY), aa.ab.eA(dR, 4), mw.style.top = aY + "px", mw.style.font = aa.ab.ac(0, .55 * aY), aa.ab.eA(mw, 2), dR.style.height = aY + mw.offsetHeight + "px";
			for (var ai = 0; ai < 3; ai++) aa.ab.eA(mx[ai], 6), mx[[0, 1, 3][ai]].style.width = 2 * aY + "px";
			for (ai = 0; ai < 4; ai++) mx[ai].style.height = aY + "px", aa.ab.eA(mx[ai], 2);
			mx[2].style.width = 4 * aY + "px", mx[1].style.left = 2 * aY + "px", mx[2].style.left = 4 * aY + "px", mx[3].style.left = 8 * aY + "px"
		}, this.kJ = function() {
			for (var ai = 0; ai < 4; ai++) mx[ai].onclick = null, mx[ai].onmouseover = null, mx[ai].onmouseout = null;
			dx.removeChild(document.body, dR), dR = mw = mx = null
		}, dR.style.position = "absolute", dR.style.color = v.w, dR.style.zIndex = "3", dR.style.right = "0", dR.style.top = "0", mw.style.position = "absolute", mw.style.height = "auto", mw.style.color = v.w, mw.style.backgroundColor = v.iM, mw
		.style.left = "0", mw.style.width = "100%", mw.style.overflowWrap = "break-word", dR.appendChild(mw);
	for (var ai = 0; ai < 4; ai++) mx[ai] = document.createElement("div"), mx[ai].style.position = "absolute", mx[ai].style.backgroundColor = v.iM, mx[ai].style.color = v.w, mx[ai].style.top = "0", mx[ai].style.display = "flex", mx[ai].style
		.justifyContent = "center", mx[ai].style.alignItems = "center", mx[ai].style.userSelect = "none", mx[ai].style.outline = "none", mx[ai].style.font = "inherit", 2 !== (mx[ai].my = ai) && (mx[ai].onclick = mv, mx[ai].onmouseover = iH, mx[ai]
			.onmouseout = iI), dR.appendChild(mx[ai]);
	mx[0].textContent = "◀", mx[1].textContent = "▶", mx[3].textContent = "✖"
}

function n1() {
	var canvas, a2, n2, font, n3 = 0,
		n4 = !1,
		n5 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		n6 = 5;

	function nS() {
		if (n4) {
			var ai, b7 = n5.length,
				ng = Math.floor(.5 * n2.aY),
				aY = b7 * ng,
				a3 = Math.floor(Math.floor(n2.a3) + .3 * n2.aS - .5),
				a4 = Math.floor(Math.floor(n2.a4) - aY),
				aS = Math.floor(.4 * n2.aS + 2.5);
			for (bn.fillStyle = v.iM, bn.fillRect(a3, a4, aS, aY), bn.fillStyle = v.kT, bn.fillRect(a3, a4 + n6 * ng, aS, ng), bn.fillStyle = v.w, bn.fillRect(a3, a4, 2, aY), bn.fillRect(a3, a4, aS, 2), bn.fillRect(a3 + aS - 2, a4, 2, aY), ai =
				1; ai < b7; ai++) bn.fillRect(a3, a4 + ai * ng, aS, 2);
			for (bn.fillStyle = v.w, aa.ab.textAlign(bn, 1), aa.ab.textBaseline(bn, 1), bn.font = aa.ab.ac(0, .6 * ng), a3 += .5 * aS, ai = 0; ai < b7; ai++) bn.fillText(nb(ai), a3, a4 + (ai + .6) * ng)
		}
		bn.drawImage(canvas, Math.floor(n2.a3), Math.floor(n2.a4))
	}

	function kQ(nU) {
		var a3, ne, nf, ng;
		a2.clearRect(0, 0, Math.floor(n2.aS), Math.floor(n2.aY)), a2.fillStyle = v.iM, a2.fillRect(0, 0, Math.floor(n2.aS), Math.floor(n2.aY)), c.gG && (a2.fillStyle = v.kT, a2.fillRect(0, 0, Math.floor(.3 * n2.aS), Math.floor(n2.aY))), a2
			.fillStyle = v.w, a2.fillText("Hide UI", .15 * n2.aS, .5 * n2.aY), a2.fillRect(Math.floor(.3 * n2.aS - .5), 0, 2, Math.floor(n2.aY)), a3 = .5 * n2.aS, a2.fillText("Replay Speed", a3, .31 * n2.aY), a2.fillText(nb(n6), a3, .69 * n2.aY), a2
			.fillRect(Math.floor(.7 * n2.aS - .5), 0, 2, Math.floor(n2.aY)), nU.n7 ? (a3 = Math.floor(.02 * n2.aS), nU = Math.floor(.025 * n2.aS), ne = Math.floor(.85 * n2.aS - a3 - .5 * nU), nf = Math.floor(.25 * n2.aY), ng = Math.floor(n2.aY) - 2 *
				nf, a2.fillRect(ne, nf, a3, ng), a2.fillRect(ne + a3 + nU, nf, a3, ng)) : function() {
				var aS = Math.floor(.46 * n2.aY),
					aY = Math.floor(.23 * n2.aY),
					a3 = Math.floor(.85 * n2.aS - .5 * aS + aS / 12),
					a4 = Math.floor(.5 * n2.aY - aY);
				a2.beginPath(), a2.moveTo(a3, a4), a2.lineTo(a3 + aS, a4 + aY), a2.lineTo(a3, a4 + (aY << 1)), a2.fill()
			}(), a2.fillRect(0, 0, Math.floor(n2.aS), 2), a2.fillRect(0, 0, 2, Math.floor(n2.aY)), a2.fillRect(0, Math.floor(n2.aY) - 2, Math.floor(n2.aS), 2), a2.fillRect(Math.floor(n2.aS - 2), 0, 2, Math.floor(n2.aY))
	}

	function nb(ai) {
		return 5 === ai ? "Normal" : "" + n5[ai]
	}
	this.n7 = !1, this.b = function() {
		c.bl && (n6 = 5, this.n7 = !1, n4 = !1, n2 = new n8([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.n9 = function() {
		return n5[n6]
	}, this.g8 = function() {
		return n2.a4
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.n7,
		fxGetSpeedIndex: () => n6,
		fxSetSpeedIndex: index => {
			n6 = index, this.resize()
		},
		fxGetPanelTop: () => n2 && n2.a4
	}, this.nA = function(nB) {
		return !!c.bl && n2.a3 + n2.aS > aW.aS - nB - ak.gap
	}, this.resize = function() {
		c.bl && (n2.resize(), n2.a4 -= (nC.nD() - 1) * ak.gap, font = aa.ab.ac(0, .3 * n2.aY), (canvas = document.createElement("canvas")).width = Math.floor(n2.aS), canvas.height = Math.floor(n2.aY), (a2 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aa.ab.textAlign(a2, 1), aa.ab.textBaseline(a2, 1), kQ(this))
	}, this.nE = function(nF) {
		0 === c.bH || dx.nG() || nF !== c.gG && (c.gG = nF, bK.resize(), bc.bj = !0, c.bl) && (n3 = bc.iV + 2e3, kQ(this))
	}, this.gF = function(a3, a4) {
		if (!c.bl) return !1;
		if (a3 < n2.a3 || a4 < n2.a4 || a3 > n2.a3 + n2.aS) return n4 && function(nU, a3, a4) {
			var b7 = n5.length,
				ng = Math.floor(.5 * n2.aY),
				aY = b7 * ng,
				ne = Math.floor(Math.floor(n2.a3) + .3 * n2.aS - .5),
				aY = Math.floor(Math.floor(n2.a4) - aY),
				aS = Math.floor(.4 * n2.aS + 2.5);
			return n4 = !1, bc.bj = !0, a3 < ne || ne + aS < a3 || a4 < aY || (n6 = nR(0, Math.floor((a4 - aY) / ng), b7 - 1), kQ(nU)), !0
		}(this, a3, a4);
		if ((a3 -= n2.a3) < .3 * n2.aS) n4 = !1, this.nE(!c.gG);
		else {
			if (a3 < .7 * n2.aS) return n4 = !n4, bc.bj = !0;
			this.nI(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.nI(!0), this.nI = function(nJ) {
		2 === c.bH ? (this.nE(!1), dx.ej(3)) : (n4 = !1, this.n7 = !this.n7, this.n7 ? (nK.nL && nK.nM(), aT.aU.setState(1)) : nJ || nK.nN(), bc.bj = !0, kQ(this))
	}, this.nO = function() {
		this.n7 = !1, nK.nN(), bc.bj = !0, kQ(this)
	}, this.nP = function(a3, a4) {
		return !!c.gG && (0 <= nK.gF(a3, a4) || (c.bl ? ((bc.iV > n3 || !this.gF(a3, a4)) && gd.gF(a3, a4), bc.bj = !0, n3 = bc.iV + 2e3) : gd.gF(a3, a4)), !0)
	}, this.b8 = function() {
		c.bl && c.gG && bc.iV > n3 - 1e3 && bc.iV < n3 && (bc.bj = !0)
	}, this.nQ = function() {
		c.bl && (this.n7 = !1, bc.bj = !0, kQ(this))
	}, this.bm = function() {
		if (c.bl) {
			if (c.gG) {
				if (bc.iV > n3) return;
				if (n3 - 1e3 < bc.iV) return bn.globalAlpha = nR(0, (1e3 - (bc.iV - (n3 - 1e3))) / 1e3, 1), nS(), void(bn.globalAlpha = 1)
			}
			nS()
		}
	}
}

function nh() {
	var aY, canvas, aZ, ni, nj, nk = -1;

	function nm() {
		var nn, a2 = canvas.getContext("2d", {
			alpha: !0
		});
		a2.clearRect(0, 0, aY, aY), a2.fillStyle = v.iM, a2.fillRect(0, 0, aY, aY), 9 === ni && (a2.fillStyle = v.no, a2.fillRect(0, 0, aY, aY)), a2.fillStyle = v.w, a2.fillRect(0, 0, aY, 1), a2.fillRect(0, 0, 1, aY), a2.fillRect(0, aY - 1, aY, 1),
			a2.fillRect(aY - 1, 0, 1, aY), nn = .9 * aY / np.get(0).width, a2.imageSmoothingEnabled = !0, a2.setTransform(nn, 0, 0, nn, Math.floor((aY - nn * np.get(0).width) / 2), Math.floor((aY - nn * np.get(0).height) / 2)), a2.drawImage(np.get(
				0), 0, 0), a2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function nu(gP, gQ) {
		if (!nK.nL) return gP <= aY + ak.gap && gQ >= nl.a4 ? 9 : -1;
		if (gP <= 4 * aY + ak.gap) {
			if (gQ >= nl.a4) return 0;
			if (gQ >= nl.a4 - aY - nj * ak.gap) return 2
		} else if (gP <= 7 * aY + ak.gap && gQ >= nl.a4 - aY - nj * ak.gap) return 1;
		return -1
	}
	this.nL = !1, this.b = function() {
		ni = -1, this.nL = !1, nj = aT.aU.aV() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		aY = nl.aY, (canvas = document.createElement("canvas")).width = aY, canvas.height = aY, aZ = aa.ab.ac(1, (aT.aU.aV() ? .5 : .45) * aY), nm()
	}, this.nq = function() {
		return !(1 !== c.bH || c.ao || (c.bl ? !nr.n7 : this.nL && c.aH))
	}, this.nM = function() {
		this.nL = !this.nL, this.nL ? (nr.nE(!1), c.bl && nr.n7 && nr.nI(!0), this.nN(), 9 === ni && (ni = 0)) : (ni = -1, nm(), !c.aH || 1 !== c.bH || c.ao || c.bl || aT.aU.setState(1)), bc.bj = !0
	}, this.nN = function() {
		(c.aH || c.bl) && 1 === c.bH && (bi.ap(!0), c.ao || setTimeout(function() {
			ns.nt()
		}, 0), aT.aU.setState(0))
	}, this.gF = function(gP, gQ) {
		return 0 <= (nk = nu(gP, gQ)) || !nK.nL || c.aH || c.bl || nw.nG || nK.nM(), nk
	}, this.gK = function(gP, gQ) {
		gP = nu(gP, gQ);
		gP !== ni && (ni = gP, this.nL || nm(), bc.bj = !0)
	}, this.nx = function(gP, gQ) {
		gP = nu(gP, gQ);
		return -1 !== gP && nk === gP && (this.nL ? c.gG ? (0 <= gP && nr.nE(!1), !c.bl) : (0 === gP ? c.ny() : 1 === gP ? this.nM() : 2 === gP && dx.ej(1, 0), !0) : 9 === gP && (this.nM(), !0))
	}, this.bm = function() {
		var aS;
		this.nL ? (aS = Math.floor(5.5 * aY), bn.setTransform(1, 0, 0, 1, ak.gap, nl.a4), bn.fillStyle = v.iM, bn.fillRect(0, 0, aS, aY), 0 === ni ? (bn.fillStyle = v.no, bn.fillRect(0, 0, 4 * aY, aY)) : 1 === ni && (bn.fillStyle = v.no, bn
				.fillRect(4 * aY, 0, Math.floor(1.5 * aY), aY)), bn.fillStyle = v.w, bn.fillRect(0, 0, aS, 1), bn.fillRect(0, 0, 1, aY), bn.fillRect(4 * aY, 0, 1, aY), bn.fillRect(0, aY - 1, aS, 1), bn.fillRect(aS - 1, 0, 1, aY), bn.font =
			aZ, aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 1), bn.fillText(L(83), 2 * aY, .54 * aY), aS = .4 * aY, nK.o3(ak.gap + 4 * aY + (1.5 * aY - aS) / 2, nl.a4 + .3 * aY, aS), aS = 1, bn.setTransform(1, 0, 0, 1, ak.gap, nl.a4 - aS *
				nj * ak.gap - aS * aY), bn.fillStyle = v.iM, bn.fillRect(0, 0, 4 * aY, aY), ni === aS + 1 && (bn.fillStyle = v.no, bn.fillRect(0, 0, 4 * aY, aY)), bn.fillStyle = v.w, bn.fillRect(0, 0, 4 * aY, 1), bn.fillRect(0, 0, 1, aY), bn
			.fillRect(4 * aY, 0, 1, aY), bn.fillRect(0, aY - 1, 4 * aY, 1), bn.fillText(L(0 === aS ? 83 : 84), 2 * aY, .54 * aY), bn.setTransform(1, 0, 0, 1, 0, 0)) : bn.drawImage(canvas, ak.gap, nl.a4)
	}, this.o1 = function(player) {
		return 0 !== y.an[player] && 2 !== c.bH && !aa.bY.o2(player)
	}, this.o3 = function(a3, a4, b7) {
		bn.setTransform(1, 0, 0, 1, a3, a4), bn.lineWidth = ak.o5, bn.strokeStyle = v.w, bn.beginPath(), bn.moveTo(0, 0), bn.lineTo(b7, b7), bn.moveTo(0, b7), bn.lineTo(b7, 0), bn.stroke()
	}
}

function o6() {
	this.b8 = function(player) {
		return bQ.fb.o7(player, function(player) {
			var b7 = o9.oA.oB;
			if (0 === b7) return -1;
			for (var b6 = Math.min(b7, o9.performance.oC ? b7 : 10), buffer = o9.oA.buffer, cX = q.aN(cN.random() * b7, cN.value(100)), cc = cX + b6, gP = cN.oD(y.oE[player], y.oF[player]), gQ = cN.oD(y.oG[player], y.oH[player]), cf = -1,
					cQ = ix.oI(0, 0, gW.gX, gW.gY), ai = cX; ai < cc; ai++) {
				var iY = ai % b7,
					oJ = ix.oK(gP, gQ, buffer[iY]);
				oJ < cQ && (cQ = oJ, cf = iY)
			}
			return -1 !== cf ? function(ic, gP, gQ) {
				var oM = ix.oN(ic),
					oO = ix.oP(ic),
					d8 = gP - oM,
					d9 = gQ - oO;
				Math.abs(d8) >= Math.abs(d9) ? (d9 = 0, d8 = Math.sign(d8)) : (d8 = 0, d9 = Math.sign(d9));
				d8 === d9 && (d8 = 1);
				for (;;) {
					if (oM += d8, oO += d9, !ix.oQ(oM, oO)) break;
					if (ic = ix.oR(oM, oO), j1.oS(ix.j3(ic))) return ic
				}
				return -1
			}(buffer[cf], gP, gQ) : -1
		}(player))
	}
}

function oT() {
	this.b8 = function(player) {
		var oU = function(player) {
			for (var fl = bQ.fl.oX(), b7 = fl.length, b6 = Math.min(b7, 32), ca = cN.cO(b7), ai = 0; ai < b6; ai++) {
				var oU = (ai + ca) % b7,
					jF = fl[oU],
					oY = jF[0],
					oZ = jF[jF.length - 1];
				if (bQ.bR.oa(player, oY) && bQ.bR.ob(player, oZ)) return oU;
				if (bQ.bR.oa(player, oZ) && bQ.bR.ob(player, oY)) return 0 <= (oU = bQ.fl.oc(oZ, oY)) ? oU : bQ.fl.jT() ? -1 : bQ.fl.od(bQ.fl.jN(jF))
			}
			return -1
		}(player);
		return -1 !== oU && (oU = bQ.fl.get(oU), !bQ.bR.oW(player, oU)) && (ij.ce[0] = oU, !0)
	}
}

function oe() {
	this.id = 0, this.og = 0, this.oh = null, this.oi = null, this.oj = null, this.ok = null, this.aU = new ol, this.b = function() {
		var self, og;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (og = Android.getVersion()) < 12 || (self.og = og, self.id = 1, self.oi = Android),
			function(self) {
				var og;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.oj = mwIOSdataX, self.ok = window.webkit.messageHandlers.iosCommandA, og = self
					.oj.version, self.og = og ? Number(og) : 0)
			}(this),
			function(self) {
				var oh;
				try {
					if (!(oh = window.localStorage)) return;
					oh.setItem("tls7", "1"), oh.removeItem("tls7")
				} catch (error) {
					return
				}
				self.oh = oh
			}(this)
	}
}

function op() {
	this.oq = new or
}

function os() {
	var ot = ou(gW.kY);
	ot && ov(ot[0], ot[1], ot[2], ot[3], ot[4])
}

function ou(kY) {
	return 2 === kY ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === kY ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === kY ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === kY ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === kY ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function ov(ow, ox, oy, oz, p0) {
	for (var a3, a4, p2, p3, gc, p5, cr = ow.length - 1, p1 = gW.gX + gW.gY, b7 = (p1 *= p1, oy.length), p4 = Array(b7), ai = b7 - 1; 0 <= ai; ai--) p4[ai] = oy[ai] * oy[ai];
	var p6 = new Array(b7),
		p7 = new Array(b7),
		p8 = new Array(b7),
		d0 = p9.pA();
	if (void 0 === p0)
		for (p0 = new Array(b7), ai = b7 - 1; 0 <= ai; ai--) p0[ai] = 0;
	for (ai = 1; ai < b7; ai++) p6[ai] = p4[ai] - p4[ai - 1], p7[ai] = oz[ai] - oz[ai - 1], p8[ai] = p0[ai] - p0[ai - 1];
	for (a3 = gW.gX - 1; 0 <= a3; a3--)
		for (a4 = gW.gY - 1; 0 <= a4; a4--) {
			for (p2 = p1, ai = cr; 0 <= ai; ai--) p2 = (p3 = (a3 - ow[ai]) * (a3 - ow[ai]) + (a4 - ox[ai]) * (a4 - ox[ai])) < p2 ? p3 : p2;
			for (gc = oz[b7 - 1], p5 = p0[b7 - 1], ai = 1; ai < b7; ai++)
				if (p2 < p4[ai]) {
					gc = oz[ai - 1] + pB((p2 - p4[ai - 1]) * p7[ai], p6[ai]), p5 = p0[ai - 1] + pB((p2 - p4[ai - 1]) * p8[ai], p6[ai]);
					break
				} pC(gW.gX * a4 + a3, gc, p5, d0)
		}
}

function pC(f7, gc, p5, d0) {
	gc < 500 ? d0[f7] = q.aN(d0[f7] * gc * 2, 1e3) : 500 < gc && (d0[f7] += q.aN(2 * (1e4 - d0[f7]) * (gc - 500), 1e3)), d0[f7] += q.aN(p5 * (10 * gc - d0[f7]), 1e3)
}

function pD() {
	this.pE = function() {
		for (var b7 = aJ.aK, lK = aJ.bX, pF = [], ai = 0; ai < b7; ai++) {
			var pG = lK[ai];
			aa.bY.pH(pG) && pF.push(pG)
		}
		return pF
	}, this.pI = function() {
		if (0 === cD.c0[c.pJ]) return this.pK();
		bK.pL(c.pJ);
		for (var pF = [], b7 = ij.pM[0], pN = ij.pN, ai = 0; ai < b7; ai++) {
			var pG = pN[ai];
			aa.bY.pH(pG) && pF.push(pG)
		}
		return pF
	}, this.pK = function() {
		var pG = bM[0];
		return aa.bY.pH(pG) ? [pG] : []
	}, this.pO = function(pF) {
		for (var b7 = pF.length, av = 0, aO = y.aO, ai = 0; ai < b7; ai++) av += aO[pF[ai]];
		return av
	}
}

function fW() {
	var pP = 32,
		m9 = new Array(2);

	function pR(cY) {
		var a3, a4, ic, d9, d8, pS = pP,
			pT = aa.ab.pR(pS, pS),
			pU = aa.ab.getContext(pT, !0),
			pV = aa.ab.getImageData(pU, pS, pS),
			h9 = pV.data,
			b6 = (pS >> 1) - .5,
			pW = Math.sqrt(b6 * b6);
		for (h9.fill(255), a4 = 0; a4 < pS; a4++)
			for (a3 = 0; a3 < pS; a3++) d8 = a3 - b6, d9 = a4 - b6, ic = 4 * (a4 * pS + a3), d8 = 714 * (pW - Math.sqrt(d8 * d8 + d9 * d9)) / pW, h9[2 + ic] = cY, h9[3 + ic] = 255 < d8 ? 0 : d8;
		return pU.putImageData(pV, 0, 0), pT
	}
	this.pQ = -1, this.b = function() {
		this.pQ = -1, m9[0] || (m9[0] = pR(255), m9[1] = pR(0))
	}, this.pX = function(pU, ar, a3, a4, mj, ai) {
		aa.bY.bZ(c.t) && (pU.setTransform(ar *= 4 / 3 * .625, 0, 0, ar, a3 - (mj *= 4 / 3), a4 - mj), pU.drawImage(m9[+(bQ.fH.il[ai] === this.pQ)], 0, 0))
	}
}

function pY() {
	var cS = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + cS + .5) / 15))
}

function h8() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.m7 = 13, this.pZ = this.emojis.length, this.pa = 676, this.pb = 1024, this.pc = this.emojis.indexOf("💀"), this.pd = this.pc + 1, this.pe = this.emojis.indexOf("🥇"), this.pf = this.emojis.indexOf("😊"), this.mA = function(d0) {
		return d0 < this.pa ? String.fromCharCode(55356, 56806 + q.aN(d0, 26), 55356, 56806 + d0 % 26) : this.emojis[Math.min(d0 - this.pa, this.pZ - 1)]
	}, this.pg = function(be) {
		for (var b7 = be.length - 2, ce = [], ai = 0; ai < b7; ai++) {
			var cE = be.charCodeAt(ai) - 56806,
				cF = be.charCodeAt(ai + 2) - 56806;
			0 <= cE && cE < 26 && 0 <= cF && cF < 26 && (ce.push(26 * cE + cF), ai += 3)
		}
		return ce
	}, this.ph = function(d0) {
		return d0 < this.pa
	}, this.pi = function(d0) {
		return d0 >= 1024 - this.m7
	}, this.pj = function(d0) {
		return d0 >= this.pa && d0 < this.pa + this.pd
	}
}

function pk() {
	var pl, pm, size, pn, po, pp;

	function pq(player) {
		return player < c.aI ? pl * player : pl * c.aI + pm * (player - c.aI)
	}
	this.b = function() {
		pl = c.aI < 16 ? 12 : 8, pm = 4;
		var b7 = pq(c.c2);
		size = new Uint8Array(c.c2), pn = new Uint16Array(b7), po = new Uint32Array(b7), pp = new Uint8Array(b7)
	}, this.pr = function(ps, pt) {
		var pu = this.pv(ps, pt),
			pt = (this.pw(ps, pt, 0), aa.bY.py(ps, pu));
		pz.q0(ps, pu - pt, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.q1 = function(player, pt) {
		var q3, pt = function(player, pt) {
			var ai, b6 = pq(player);
			for (ai = size[player] - 1; 0 <= ai; ai--)
				if (pn[b6 + ai] === pt) return ai;
			return size[player]
		}(player, pt);
		pt !== size[player] && (q3 = po[pq(player) + pt], this.q4(player, pt), this.iu(player, q3, c.c2))
	}, this.q5 = function(player, pt) {
		for (var b6 = pq(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (pn[b6 + ai] === pt) return !0;
		return !1
	}, this.q6 = function(player) {
		return player < c.aI ? size[player] < pl : size[player] < pm
	}, this.q7 = function(player) {
		return size[player]
	}, this.q8 = function(player, ai) {
		return pn[pq(player) + ai]
	}, this.q9 = function(player, ai) {
		return po[pq(player) + ai]
	}, this.pv = function(player, pt) {
		for (var b6 = pq(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (pn[b6 + ai] === pt) return po[b6 + ai];
		return 0
	}, this.qA = function(player) {
		for (var b6 = pq(player), d0 = 0, ai = size[player] - 1; 0 <= ai; ai--) d0 += po[b6 + ai];
		return d0
	}, this.pw = function(player, pt, q3) {
		for (var b6 = pq(player), ai = size[player] - 1; 0 <= ai; ai--) pn[b6 + ai] === pt && (po[b6 + ai] = q3)
	}, this.qB = function(player, ai, q3) {
		po[pq(player) + ai] = Math.max(q3, 0)
	}, this.qC = function(player, ai) {
		pp[pq(player) + ai] = 0
	}, this.qD = function(player, ai) {
		return pp[pq(player) + ai]
	}, this.iu = function(player, q3, pt) {
		o9.qE.qF[player] = o9.qE.qF[pt] = 8, aa.bY.qG(pt) && pz.qH[6 - aa.bY.o2(player)]++;
		for (var b6 = pq(player), ai = size[player] - 1; 0 <= ai; ai--)
			if (pn[b6 + ai] === pt) return po[b6 + ai] += q3, void(po[b6 + ai] = po[b6 + ai] > c.qI ? c.qI : po[b6 + ai]);
		pn[b6 + size[player]] = pt, po[b6 + size[player]] = q3, pp[b6 + size[player]] = 1, size[player]++, pt === c.t ? e.qJ(player, 5) : player < c.aI && player === c.t && gN.qK(pt)
	}, this.q4 = function(player, f7) {
		var cy, b6;
		if (0 !== size[player])
			for (b6 = pq(player), size[player]--, cy = f7; cy < size[player]; cy++) pn[b6 + cy] = pn[b6 + cy + 1], po[b6 + cy] = po[b6 + cy + 1], pp[b6 + cy] = pp[b6 + cy + 1]
	}, this.qL = function(player) {
		for (var cy, b6, qM = [], ai = aJ.aK - 1; 0 <= ai; ai--)
			for (b6 = pq(aJ.bX[ai]), cy = size[aJ.bX[ai]] - 1; 0 <= cy; cy--)
				if (pn[b6 + cy] === player) {
					qM.push(aJ.bX[ai]);
					break
				} return qM
	}
}

function eF(title, mP, qN) {
	var qO = document.createElement("div"),
		qP = document.createElement("div"),
		qQ = document.createElement("div"),
		qR = document.createElement("div"),
		qS = document.createElement("div");
	this.eM = qQ, this.ee = mP, this.show = function() {
			!1 !== qN ? document.body.appendChild(qO) : (document.body.appendChild(qP), document.body.appendChild(qR))
		}, this.du = function() {
			!1 !== qN ? dx.removeChild(document.body, qO) : (dx.removeChild(document.body, qP), dx.removeChild(document.body, qR))
		}, this.qX = function() {
			var qY = aa.ab.e1(.1),
				qZ = aa.ab.e1(.08 + .04 * (aW.qa < 1), .3);
			return {
				qY: qY,
				qZ: qZ,
				qb: aW.aY / aW.eB - qY - qZ
			}
		}, this.resize = function(qc) {
			var b7 = mP.length,
				qd = this.qX(),
				qY = qd.qY,
				qZ = qd.qZ;
			for (qP.style.height = aa.ab.e9(qY), aa.ab.eA(qP, 2), qR.style.top = aa.ab.e9(aW.aY / aW.eB - qZ), qR.style.height = aa.ab.e9(qZ), aa.ab.eA(qR, 8), qQ.style.top = aa.ab.e9(qY), qQ.style.height = qQ.style.maxHeight = aa.ab.e9(qd.qb), qP
				.style.font = aa.ab.ac(0, aa.ab.e1(.02, .15)), qR.style.font = aa.ab.ac(0, aa.ab.e1(.02, .7)), qQ.style.font = aa.ab.ac(0, aa.ab.e1(.02, .35)), ai = 1; ai < b7; ai++) aa.ab.eA(mP[ai].button, 4);
			for (var qe = 0, ai = 0; ai < b7; ai++) qe += mP[ai].button.offsetWidth;
			if (qc && qe < qR.offsetWidth)
				for (ai = 0; ai < b7; ai++) mP[ai].button.style.width = (100 * mP[ai].button.offsetWidth / qe).toFixed(2) + "%";
			else
				for (ai = 0; ai < b7; ai++) mP[ai].button.style.width = "auto";
			qR.qf && (qR.scrollLeft = qR.qf), qc || this.resize(!0)
		}, this.bm = function() {
			var qd = this.qX(),
				cY = aW.eB;
			bn.fillStyle = v.iM, bn.fillRect(0, cY * qd.qY, aW.aS, cY * qd.qb)
		}, qO.style.position = "absolute", qO.style.top = "0", qO.style.left = "0", qO.style.width = "100%", qO.style.height = "100%", qP.style.position = "absolute", qP.style.top = "0", qP.style.left = "0", qP.style.width = "100%", qP.style
		.display = "flex", qP.style.backgroundColor = v.iM, qR.style.position = "absolute", qR.style.left = "0", qR.style.width = "100%", aa.ab.dk(qR), qS.style.height = qS.style.maxHeight = "100%", qQ.style.position = "absolute", qQ.style.width =
		"100%", qQ.style.backgroundColor = v.iM,
		function() {
			for (var ai = 0; ai < mP.length; ai++) mP[ai].button.style.height = "100%", mP[ai].button.style.padding = "0.0em 0.9em"
		}();
	for (var ai = 0; ai < mP.length; ai++) qS.appendChild(mP[ai].button);
	qP.appendChild(function() {
		var qW = document.createElement("h1");
		return qW.textContent = title, qW.style.margin = "auto", qW.style.fontSize = 18 <= title.length && aW.aY > aW.aS ? "1.8em" : "2.3em", qW.style.fontFamily = "Arial Black, system-ui", qW
	}()), qR.appendChild(qS), !1 !== qN && (qO.appendChild(qQ), qO.appendChild(qP), qO.appendChild(qR))
}

function qg() {
	this.eS = new qh, this.eU = new qi, this.eb = new qj, this.b = function() {
		c.bl || this.eS.b()
	}, this.b8 = function() {
		c.bl || (this.eS.b8(), 3 !== dx.jf) || bc.ql() % 15 != 5 && 2 !== c.bH || dx.jg().eO()
	}, __fx.replay.restartReplay = () => this.ea(), this.ea = function() {
		var qm = 0 !== c.bH,
			qn = c.qo;
		qm || qp.qq(), c.qr.qs(), c.data.canvas = null, jZ.fH.close(jZ.fH.qt, 3257), jZ.fH.qt = 0, c.data.isReplay = 1, c.qu(), qm && (c.qo = qn)
	}, this.eY = function(be) {
		var ai = be.indexOf("=");
		return 0 <= ai ? be.substring(ai + 1) : be
	}, this.eW = function(be) {
		return be
	}, __fx.replayHistory.load = saved => {
		saved = eR.eY(saved), eR.eb.ec(saved) && eR.ea()
	}
}

function de(dQ) {
	var dR = document.createElement("div"),
		dW = document.createElement("div");
	this.kQ = function() {
			dW.textContent = "", hq.l0.qv && hq.l0.du(1);
			for (var lz = document.createDocumentFragment(), qw = hq.fH.kD[0], hr = hq.hr.hp[qw], km = hq.hr.km[qw], ai = 0; ai < hr.length; ai++) ! function(lz, ht, qy, qw) {
				var kB = document.createElement("span");
				kB.textContent = (qy ? "🟢 " : "⚪ ") + hq.bR.hh(ht, qw), kB.style.color = hq.bR.hj(ht.hk), 11 === ht.hk && (kB.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				kB.style.cursor = "pointer", kB.style.margin = "0.2em 0.2em 0.2em 0.2em", kB.style.width = kB.style.maxWidth = 2 === qw ? "10em" : "9em", kB.style.height = kB.style.maxHeight = "1.4em", kB.style.whiteSpace = "nowrap", kB.style
					.overflow = "hidden", kB.style.textOverflow = "ellipsis", kB.style.font = "inherit", kB.style.display = "inline-block", hq.bR.hs(ht) && (kB.style.textDecoration = "underline"), ht.qz && (kB.style.textDecorationLine =
						"underline", kB.style.textDecorationStyle = "dotted");
				kB.onclick = function(cc) {
					dQ(cc, ht)
				}, di.dj() || (kB.onmouseover = function(cc) {
					hq.l0.r0(cc.target, ht, 1)
				}), lz.appendChild(kB)
			}(lz, hr[ai], ai < km, qw);
			dW.appendChild(lz)
		}, this.show = function(r1) {
			r1.appendChild(dR)
		}, this.du = function(r1) {
			dx.removeChild(r1, dR)
		}, this.resize = function() {
			dW.style.fontSize = aa.ab.e9(aa.ab.e1(.02, .3))
		}, dR.style.top = "0", dR.style.left = "0", dR.style.width = dR.style.height = "100%", dR.style.overflowX = "hidden", dR.style.overflowY = "auto", dR.style.font = "inherit", dW.style.font = "inherit", dW.style.margin = "0.4em", dR
		.appendChild(dW)
}

function r2(r3, r4) {
	this.r5 = [];
	var r6 = this.r5;

	function click() {
		for (var ai = 0; ai < r6.length; ai++) r6[ai].textContent = r6[ai].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var f7 = parseInt(this.name);
		void 0 !== r3.f7 && ep.eq.er(r3.f7, f7), r4 && r4(f7)
	}
	for (var r7, b7 = r3.ot.length, ai = 0; ai < b7; ai++)(r7 = document.createElement("p")).textContent = "⚪ " + r3.ot[ai], r7.style.margin = "0", r7.name = "" + ai, r7.style.cursor = "pointer", r7.style.fontSize = "1em", r7.addEventListener(
		"click", click), r6.push(r7);
	r6[r3.value].textContent = r6[r3.value].textContent.replace("⚪", "🟢")
}

function r8(ot) {
	this.r9 = -1, this.pow = -1;
	var rA = ot || {},
		rB = this,
		rC = null,
		rD = null,
		rE = null,
		rF = null,
		rG = null,
		rH = [],
		rI = 0,
		rJ = null,
		rK = null,
		rL = null,
		rM = !1,
		rN = null,
		rQ = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function rR(rS, rT, className) {
		rS = document.createElement(rS);
		return className && (rS.className = className), rT && rT.appendChild(rS), rS
	}

	function rV(rW, rT, action) {
		rT = rR("button", rT);
		return rT.type = "button", rT.textContent = rW, rT.addEventListener("click", action), rT
	}

	function rX(rT) {
		rT = rR("canvas", rT);
		return rT.width = rT.height = 128, rT
	}

	function re(canvas, rf) {
		for (var canvas = canvas.getContext("2d"), data = (rK || (rK = canvas.createImageData(128, 128), rL = new Uint32Array(rK.data.buffer)), rf), rZ = rL, ra = 0, position = 0, color = 0; position < 16384; ra += 6, color ^= 1) {
			for (var f7 = ra >> 3, gJ = position + ((data[f7] << 8 | data[1 + f7]) >> 10 - (7 & ra) & 63), rd = color ? rQ : 4294967295, ai = position; ai < gJ; ai++) rZ[ai] = rd;
			position = gJ
		}
		canvas.putImageData(rK, 0, 0)
	}

	function rg() {
		if (rC) {
			rC.setAttribute("aria-busy", String(rM)), rG.disabled = rM, rF.disabled = rM || !rI;
			for (var ai = 0; ai < rH.length; ai++) rH[ai].disabled = rM, rH[ai].setAttribute("aria-pressed", String(Boolean(rI & 1 << ai)))
		}
	}

	function ri(event) {
		var rj, kA;
		"Escape" === event.key && (event.preventDefault(), rB.close()), "Tab" === event.key && rC && (rj = (kA = rC.querySelectorAll("button:not(:disabled)"))[0], kA = kA[kA.length - 1], event.shiftKey && document.activeElement === rj ? (event
			.preventDefault(), kA.focus()) : event.shiftKey || document.activeElement !== kA || (event.preventDefault(), rj.focus()))
	}

	function rl() {
		rN = document.activeElement, (rC = rR("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), rC.setAttribute("aria-modal", "true"), rC.setAttribute("aria-label", "Select all images matching the reference");
		rR("style", rC).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var rm = rR("div", rC, "captcha-reference-row");
		rR("span", rm, "captcha-reference-label").textContent = "Find All:", (rE = rX(rm)).className = "captcha-reference", rE.setAttribute("aria-label", "Reference image"), rD = rR("div", rC, "captcha-grid");
		for (var ai = 0; ai < 16; ai++) rH.push(function(f7) {
			var button = rV("", rD, function() {
				rM || (rI ^= 1 << f7, rg())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (f7 + 1)), button.setAttribute("aria-pressed", "false"), rX(button).setAttribute("aria-hidden", "true"), button
		}(ai));
		var rm = rR("div", rC, "captcha-actions"),
			rp = rV("Close", rm, function() {
				rB.close()
			});
		rG = rV("Reload", rm, rq), rF = rV("Verify", rm, rr), rC.addEventListener("keydown", ri), rB.resize(), rg(), rp.focus()
	}

	function rq() {
		rM || (rB.close(), jZ.rs.rt(0, 0, ru.r9, ru.pow))
	}

	function rr() {
		var rv, rw;
		!rM && rI && (rv = rI, rw = rJ, rB.close(), jZ.rs.rt(rv, rw, ru.r9, ru.pow))
	}
	this.show = function(rx, rw, r9, pow) {
		this.r9 = r9, this.pow = pow, rJ = rw, rC || rl(), re(rE, rx[0]);
		for (var ca = 0; ca < 16; ca++) re(rH[ca].firstChild, rx[ca + 1]);
		rI = 0, rM = !1, rg(), "function" == typeof rA.ry && rA.ry()
	}, this.resize = function() {
		var size;
		rC && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), rC.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (rC) {
			for (var rz = rC.querySelectorAll("canvas"), ai = 0; ai < rz.length; ai++) rz[ai].width = rz[ai].height = 0;
			rC.remove(), rC = rD = rE = rF = rG = null, rK = rL = rJ = null, rI = 0, rM = !(rH = []), rN && document.body.contains(rN) && rN.focus(), rN = null, "function" == typeof rA.s0 && rA.s0()
		}
	}
}

function fL() {
	this.b = function() {
		! function() {
			var data = ep.buffer.data;
			0 === data[2].og && (aW.aY > aW.aS || 0 !== aT.id) && (data[2].value = data[2].s3 = 1);
			0 === data[100].og && (data[100].value = data[100].s3 = (0 === aT.id ? "Player " : 1 === aT.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var ai, data = ep.buffer.data,
			b7 = data.length;
		for (ai = 0; ai < b7; ai++) {
			var s4 = ep.ef.s5(ai, !0);
			data[ai] && data[ai].og === s4 && (null === (s4 = ep.ef.s6(ai)) ? data[ai].value = data[ai].s3 : 2 === data[ai].type ? data[ai].value = s4 : (s4 = Number(s4), isNaN(s4) ? data[ai].value = data[ai].s3 : data[ai].value = s4))
		}
	}
}

function s8() {
	this.iu = function(player, ic) {
		s9.sA(player, ix.oN(ic), ix.oP(ic)) && (bc.bj = !0), c.aH && this.b8()
	}, this.b8 = function() {
		c.ao = !1;
		for (var ai = 0; ai < c.aI; ai++) 0 !== y.an[ai] && 0 === y.aO[ai] && s9.sB(ai);
		0 !== y.an[c.t] ? (pz.qH[7] = y.aO[c.t], pz.qH[8] = y.ax[c.t], nl.sC(), at.ae(), c.bl || gI.sD(y.oE[c.t] - 5, y.oG[c.t] - 5, y.oF[c.t] + 5, y.oH[c.t] + 5), sE.b()) : sF.show(!1, !1, !1, !0), e.sG(18), gN.sH(), gN.ap(!0), sI.fH.sJ(), sK
			.du(), c.sL = null, ns.sM = !0, ns.sN(), c.aH && aT.aU.setState(1)
	}
}

function sO() {
	var sP, sQ, sR, sS, sT, f7 = 0,
		iV = bc.iV;

	function sb() {
		! function() {
			if (!c.ao) return;
			if (c.aH) return;
			if (2 !== c.bH)
				if (sT % 7 != 0) sT++;
				else if (sS === c.bk) {
				if (!se()) return;
				at.bf(sS), c.sL.b8()
			} else {
				if (!se()) return;
				sT++, sS++, gN.sH(), gN.ap(!0)
			}
			return 1
		}() && se() && sf()
	}

	function sc() {
		f7 = 0, (c.ao ? (bc.bj = at.bf(sS - (sT % 7 == 0 ? 0 : 1) + sT % 7 / 7) || bc.bj, sg) : nK.nL || !nr.n7 ? sg : (bc.bj = !0, sh))()
	}

	function se() {
		var ai, b7, si = eR.eS.sj,
			d2 = eR.eS.sk,
			d3 = eR.eS.sl,
			d4 = eR.eS.sm,
			sn = eR.eS.so,
			sp = eR.eS.sq;
		if (!(sP >= sp.length)) {
			if (sp = sp[sP], sn[sP]) {
				for (b7 = sQ + sp, ai = sQ; ai < b7; ai++) ss.st.su(si[ai], d2[ai], d3[ai], d4[ai]);
				sQ += sp, sP++
			} else ++sR >= sp && (sP++, sR = 0);
			return __fx.replay.tick++, 1
		}
		e.sr("Replay file smaller than expected."), nr.nI(!1), c.bH = 2
	}
	this.sU = 0, this.b = function() {
		sT = sS = sR = sQ = sP = 0, __fx.replay.registerHooks({
			advance: () => sb(),
			finishTick: () => ns.render(),
			requestRedraw: () => {
				bc.bj = !0
			},
			isEnded: () => 2 === c.bH,
			getTickInterval: () => bc.bd
		})
	}, this.b8 = function() {
		var sZ;
		aW.b8(), __fx.replay.frame() ? sa() : nr.n9() < 1.7 ? 0 === f7 ? bc.iV >= iV && (sZ = bc.bd / nr.n9(), iV += sZ * Math.floor(1 + (bc.iV - iV) / sZ), 2 === c.bH || nK.nL || !nr.n7 ? sa() : (sb(), ns.render()), f7++) : sc() : function() {
			var sZ;
			if (bc.iV >= iV)
				if (2 === c.bH || nK.nL || !nr.n7) sa(), iV = bc.iV;
				else {
					for (sZ = bc.bd / nr.n9(), 16 < (bc.iV - iV) / sZ && (iV = bc.iV - 16 * sZ); bc.iV >= iV && 2 !== c.bH;) iV += sZ, sb();
					ns.render()
				} sc()
		}(), sX(), bc.bj && (bc.bj = !1, sY())
	}, this.sv = function() {
		eR.eS.sq.length - sP <= 2 || e.sr("Replay file larger than expected.")
	}
}

function fU() {
	this.sw = 32, this.a3 = 0, this.a4 = 0, this.sx = 0, this.sy = 0, this.sz = 4, this.fT = null, this.t0 = new Int16Array(9), this.b = function() {
		this.sx = 1 + q.aN(gW.gX - 1, this.sw), this.sy = 1 + q.aN(gW.gY - 1, this.sw), this.fT = new Array(this.sx * this.sy), aa.kt.t1(this.fT);
		var a3, a4, t0 = this.t0,
			aS = this.sx;
		for (a3 = -1; a3 <= 1; a3++)
			for (a4 = -1; a4 <= 1; a4++) t0[3 * (1 + a4) + 1 + a3] = a4 * aS + a3
	}, this.t3 = function(t4, ai) {
		return this.fT[ai].push(t4), this.fT[ai].length - 1
	}, this.t5 = function(t6, t7, t8) {
		var t9, tA, t7 = ix.tB(t7),
			t8 = ix.tB(t8);
		return t7 === t8 ? t6 : (t9 = this.fT[t7].pop(), this.fT[t7].length === t6 ? this.t3(t9, t8) : (tA = this.fT[t7][t6], this.fT[t7][t6] = t9, bQ.fH.tC[t9] = t6, this.t3(tA, t8)))
	}
}

function tD() {
	this.tE = 0;
	var tG, tH, tI, tJ, tK, tL = this.tF = 0;

	function tS() {
		tJ = tK = null, tL = 0
	}
	this.b = function(kW, tM, tN) {
		dx.eX(), hq.kJ(), qp.setState(10), tJ = kW, tK = tM, tL = tN, this.tE = kW.tE, this.tF = tN, tG = 0, tH = bc.iV + 4500, jZ.fH.qt = kW.qt, jZ.fH.tO === kW.qt ? (console.log("direct pass"), tI = 0) : (console.log("delayed pass"), jZ.fH
			.close(jZ.fH.tO, 3247), tI = 2, jZ.fH.tP(kW.qt, 5, 2) && jZ.tQ.tR()), bn.imageSmoothingEnabled = !0, qp.ta();
		tM = np.tc("loading"), tN = (aT.aU.aV() ? .396 : .25) * aW.aX / tM.width;
		bn.setTransform(tN, 0, 0, tN, Math.floor((aW.aS - tN * tM.width) / 2), Math.floor((aW.aY - tN * tM.height) / 2)), bn.imageSmoothingEnabled = !1, bn.drawImage(tM, 0, 0), bn.setTransform(1, 0, 0, 1, 0, 0)
	}, this.tT = function() {
		0 < tI && bc.iV > tH && (tI--, tH += 4500, 0 === bc.sS) && 0 === bc.ql() && jZ.fH.tP(jZ.fH.qt, 5, 2)
	}, this.tV = function() {
		return 10 === qp.tW() && (hq.tX.tY(tJ, tK, tL), tS(), !0)
	}, this.tZ = function() {
		10 === qp.tW() && 2 <= ++tG && (hq.tX.tY(tJ, tK, tL), tS())
	}
}

function td() {
	var te, tf, tg;
	te = [32, 65, 191, 913, 931], tf = [64, 127, 688, 930, 1155], tg = new Array(te.length + 1);
	for (var ai = 0; ai < tg.length; ai++) {
		tg[ai] = 0;
		for (var cy = ai - 1; 0 <= cy; cy--) tg[ai] += tf[cy] - te[cy]
	}

	function tn(cY) {
		for (var ai = te.length - 1; 0 <= ai; ai--)
			if (cY >= te[ai] && cY < tf[ai]) return ai;
		return -1
	}
	this.ti = function(be) {
		return 0 !== (be = be.trim()).indexOf("Bot ") && 0 !== be.indexOf("[Bot] ") && function(be, tk, tl) {
			var b7 = (be = be.trim()).length;
			if (b7 < tk || tl < b7) return !1;
			for (var cY, tm = 0, ai = 0; ai < b7; ai++)
				if (cY = be.charCodeAt(ai), tm += 65 <= cY && cY <= 90 || 1040 <= cY && cY <= 1071 ? 1 : 0, -1 === tn(cY)) return !1;
			if (3 < tm && tm > Math.floor(b7 / 2)) return !1;
			return !0
		}(be, 3, 20)
	}, this.eV = function(be) {
		for (var b7 = (be = be.trim()).length, ce = [], ai = 0; ai < b7; ai++) {
			var cY, pG = tn(cY = be.charCodeAt(ai));
			ce.push(tg[pG] + cY - te[pG])
		}
		return ce
	}, this.ec = function(ce) {
		for (var cY, cT, be = "", b7 = ce.length, ai = 0; ai < b7; ai++)
			for (cT = 1; cT < tg.length; cT++)
				if (ce[ai] < tg[cT]) {
					cY = te[cT - 1] + ce[ai] - tg[cT - 1], be += String.fromCharCode(cY);
					break
				} return be
	}, this.tp = function(be) {
		for (var ce = this.eV(be), result = "", ai = 0; ai < ce.length; ai++) result = (result += ce[ai] < 10 ? "00" : ce[ai] < 100 ? "0" : "") + ce[ai].toString(10);
		return result
	}, this.tq = function(be) {
		for (var ce = new Array(Math.floor(be.length / 3)), ai = 0; ai < be.length; ai += 3) ce[Math.floor(ai / 3)] = parseInt(be.substring(ai, ai + 3));
		return this.ec(ce)
	}, this.tr = function(be) {
		for (var d0, ce = [be.length], ai = 0; ai < be.length; ai++) ce[ai] = be.charCodeAt(ai) - 48;
		var result = "";
		for (ai = 0; ai < be.length; ai++) ai === be.length - 1 || 51 < 10 * ce[ai] + ce[ai + 1] ? result += ce[ai].toString() : (d0 = 10 * ce[ai] + ce[ai + 1], result += String.fromCharCode(d0 + (d0 < 26 ? 65 : 71)), ai++);
		return result
	}, this.ts = function(be) {
		for (var cY, result = "", ai = 0; ai < be.length; ai++) 48 <= (cY = be.charCodeAt(ai)) && cY < 58 ? result += String.fromCharCode(cY) : 65 <= cY && cY < 75 ? result += "0" + (cY - 65).toString() : 75 <= cY && cY < 91 ? result += (cY - 65)
			.toString() : 97 <= cY && cY < 123 && (result += (cY - 71).toString());
		return result
	}, this.tt = function(be) {
		for (var b7 = be.length, ce = [], ai = 0; ai < b7; ai++)(cY = be.charCodeAt(ai)) < 58 ? ce.push(be[ai]) : (cY -= cY < 91 ? 65 : 71, ce.push(String(q.aN(cY, 10))), ce.push(String(cY - 10 * q.aN(cY, 10))));
		var b7 = ce.length - 2,
			cY = 0,
			tu = [];
		for (ai = 0; ai < b7; ai += 3) tu[cY++] = parseInt(ce[ai] + ce[ai + 1] + ce[ai + 2]);
		return tu
	}, this.tv = function() {
		for (var mj, tw = "", ai = 0; ai < 6; ai++) mj = 48 + cN.random() % 36, mj += 58 <= mj ? 39 : 0, tw += String.fromCharCode(mj);
		return tw
	}
}

function tx() {
	this.nD = function() {
		return aT.aU.aV() ? 2 : 1
	}
}

function ty() {
	function uJ() {
		return {
			gX: gW.gX,
			gY: gW.gY,
			u0: gW.u0,
			u1: gW.u1,
			u2: gW.u2,
			u3: gW.u3,
			kY: gW.kY,
			mapSeed: gW.mapSeed,
			u4: gW.u4
		}
	}

	function uA(ai) {
		return 1 !== ai && gW.uD(ai) && ai !== gW.uM()
	}
	this.gx = 25, this.h5 = 13, this.tz = 4096, this.gX = 0, this.gY = 0, this.u0 = null, this.u1 = null, this.u2 = null, this.u3 = null, this.kY = 0, this.mapSeed = 0, this.u4 = !1, this.u5 = new u6, this.ko = new gh, this.u7 = new u8, this.b =
		function() {
			this.ko.b()
		}, this.kX = function(map, u9) {
			((map %= this.gx) !== this.kY || uA(this.kY) && u9 !== this.mapSeed) && (this.u4 = !1, this.u5.uB(), cN.uC(map), this.kY = map, this.mapSeed = u9, uA(map) && (gW.ko.gi[map].h0 = u9), this.uD(this.kY) ? (map = gW.ko.gi[this.kY], this.gX =
				map.aS, this.gY = map.aY, cN.uC(map.h0), p9.kX([this.gX, this.gY, map.gy, map.gz]), os(), uF.uG(), p9.uH()) : uE())
		}, this.uI = function(map, u9) {
			var d2 = uJ(),
				map = (this.kX(map, u9), this.u5.uB(), uJ());
			return u9 = d2, gW.gX = u9.gX, gW.gY = u9.gY, gW.u0 = u9.u0, gW.u1 = u9.u1, gW.u2 = u9.u2, gW.u3 = u9.u3, gW.kY = u9.kY, gW.mapSeed = u9.mapSeed, gW.u4 = u9.u4, map
		}, this.uL = function(canvas) {
			canvas && this.u0 !== canvas && (this.gX = canvas.width, this.gY = canvas.height, this.u0 = canvas, this.u1 = this.u0.getContext("2d", {
				alpha: !1
			}), this.pV = this.u1.getImageData(0, 0, this.gX, this.gY), this.u3 = this.pV.data, this.kY = this.uM(), this.mapSeed = 0, gW.ko.gi[this.kY].name = c.data.mapName)
		}, this.uN = function(ai) {
			return 3 === ai || 7 === ai || 9 === ai || 21 === ai || ai === this.uM()
		}, this.uO = function(ai) {
			return 2 === ai || 7 === ai || 9 === ai || 20 === ai
		}, this.uP = function(ai) {
			return 1 === ai
		}, this.uM = function() {
			return this.gx
		}, this.uD = function(ai) {
			return void 0 === this.ko.gi[ai].h3
		}, this.uQ = function(ht) {
			return 0 === ht.mapType ? ht.mapProceduralIndex < 10 ? ht.mapProceduralIndex : 10 + ht.mapProceduralIndex : 1 === ht.mapType ? 10 <= ht.mapRealisticIndex ? 22 + ht.mapRealisticIndex - 10 : ht.mapRealisticIndex + 10 : void 0
		}, this.uR = function(ht, uS) {
			0 === ht.mapType ? ht.mapProceduralIndex = uS < 10 ? uS : uS - 10 : 1 === ht.mapType && (ht.mapRealisticIndex = uS - (22 <= uS ? 12 : 10))
		}
}

function fi() {
	this.jS = function(player) {
		return !!c.data.passableWater && bQ.fH.jO !== bQ.fH.uT && bQ.fH.uU[player] !== bQ.fH.uV && 0 !== y.uW[player].length
	}, this.uX = function(jC) {
		var fX = ij.ik[1];
		return !(4 <= fX || !bQ.bR.uY(ix.j3(jC))) && j1.uZ(ix.j3(ix.ua(jC, fX)))
	}
}

function uc() {
	var d0, aS, aY, max, ud, gz, uf, ug, uh, ui, uj, uk, ul, um, ue = 1e4;

	function uu(ut, gy, b7) {
		var ai;
		for (uf[0] = ut, ai = 1; ai < b7; ai++) uf[ai] = uf[ai - 1] + gy, gy = uf[ai] >= ue ? (uf[ai] = ue - 1, -gy) : uf[ai] < 0 ? (uf[ai] = 0, -gy) : (gy += 16384 <= cN.random() ? gz : -gz) < -ud ? -ud : ud < gy ? ud : gy
	}

	function uw(a3, a4, ux, b7) {
		(ux ? function(a3, a4, b7) {
			var ai;
			for (ai = 0; ai < b7; ai++) d0[a4 * aS + a3 + ai] = uf[ai]
		} : function(a3, a4, b7) {
			var ai;
			for (ai = 0; ai < b7; ai++) d0[a4 * aS + a3 + ai * aS] = uf[ai]
		})(a3, a4, b7)
	}

	function v0(value, b7) {
		var ai, v1, ar, i = value - uf[b7 - 1];
		if (0 != i) {
			for (v1 = 1 + q.aN(Math.abs(i), b7 - 1), v1 = i < 0 ? -v1 : v1, uf[b7 - 1] = value, ar = (ar = b7 - 1 - q.aN(Math.abs(i), Math.abs(v1))) < 1 ? 1 : b7 - 2 < ar ? b7 - 2 : ar, ai = b7 - 2; ar <= ai; ai--) uf[ai] += i - (b7 - 1 - ai) * v1;
			(i < 0 ? function(b7) {
				var ai;
				for (ai = b7 - 2; 1 <= ai; ai--) uf[ai] < 0 && (uf[ai] = -uf[ai] - 1)
			} : function(b7) {
				var ai;
				for (ai = b7 - 2; 1 <= ai; ai--) uf[ai] >= ue && (uf[ai] = 2 * ue - uf[ai] - 1)
			})(b7)
		}
	}

	function v4(v5, v6, b7) {
		for (var ai = 0; ai < b7; ai++) v5[ai] = v6[ai]
	}

	function v7(ce) {
		for (var ai = 0; ai < ce.length - 1; ai++) ce[ai] = ce[ai + 1] - ce[ai];
		ce[ce.length - 1] = ce[ce.length - 3]
	}

	function v8(v9, gap, vA) {
		ug.push(v9), uh.push(gap), ui.push(vA)
	}
	this.kX = function(un) {
		! function(un) {
			var ai;
			for (aS = un[0], aY = un[1], ud = un[2], gz = un[3], d0 = new Int16Array(aS * aY), max = aY < aS ? aS : aY, uf = new Int16Array(max), ug = [], uh = [], ui = [], uj = new Array(aS), uk = new Array(aY), ai = aS - 1; 0 <= ai; ai--) uj[
				ai] = !1;
			for (ai = aY - 1; 0 <= ai; ai--) uk[ai] = !1;
			ul = new Int16Array(aS), um = new Int16Array(aY)
		}(un),
		function(b7) {
			var ut = cN.random() % ue,
				gy = cN.random() % (2 * ud + 1) - ud;
			uu(ut, gy, b7)
		}(max), v4(um, uf, aY), uw(0, 0, !0, aS);
		var a3, a4, un = d0[0],
			b7 = max,
			gy = cN.random() % (2 * ud + 1) - ud;
		for (uu(un, gy, b7), v4(ul, uf, aS), uw(0, 0, !1, aY), v7(ul), v7(um), uu(d0[aS - 1], ul[aS - 1], aY), uw(aS - 1, 0, !1, aY), uu(d0[aS * (aY - 1)], um[aY - 1], aS), v0(d0[aS * aY - 1], aS), uw(0, aY - 1, !0, aS), uj[aS - 1] = uj[0] = !0,
			uk[aY - 1] = uk[0] = !0, v8(0, aS, !0), v8(0, aY, !1), ! function() {
				var vC, v9;
				for (;;) {
					if (vC = function() {
							var ai, vC = ug.length - 1;
							for (ai = vC - 1; 0 <= ai; ai--) uh[ai] > uh[vC] && (vC = ai);
							return vC
						}(), uh[vC] < 5) return;
					v9 = ug[vC] + q.aN(uh[vC], 2), (ui[vC] ? function(a3) {
						var b7, vF, ai, vG = 0,
							vH = 0;
						for (; vH < aY - 1;) {
							for (ai = vG + 1; ai < aY; ai++)
								if (uk[ai]) {
									vH = ai;
									break
								} b7 = vH - vG + 1, uu(d0[a3 + aS * vG], 0 === vG ? ul[a3] : uf[vF - 1] - uf[vF - 2], b7), v0(d0[vH * aS + a3], b7), uw(a3, vG, !1, b7), vF = b7, vG = vH
						}
						uj[a3] = !0
					} : function(a4) {
						var b7, vF, ai, vG = 0,
							vH = 0;
						for (; vH < aS - 1;) {
							for (ai = vG + 1; ai < aS; ai++)
								if (uj[ai]) {
									vH = ai;
									break
								} b7 = vH - vG + 1, uu(d0[a4 * aS + vG], 0 === vG ? um[a4] : uf[vF - 1] - uf[vF - 2], b7), v0(d0[a4 * aS + vH], b7), uw(vG, a4, !0, b7), vF = b7, vG = vH
						}
						uk[a4] = !0
					})(v9), v8(v9, ug[vC] + uh[vC] - v9, ui[vC]), uh[vC] = v9 - ug[vC] + 1
				}
			}(), a3 = 0; a3 < aS; a3++)
			if (!uj[a3])
				for (a4 = 0; a4 < aY; a4++) uk[a4] || ! function(a3, a4) {
					var value = d0[a4 * aS + a3 - 1] + d0[(a4 - 1) * aS + a3],
						mE = 2;
					uj[a3 + 1] && (mE++, value += d0[a4 * aS + a3 + 1]);
					uk[a4 + 1] && (mE++, value += d0[(a4 + 1) * aS + a3]);
					d0[a4 * aS + a3] = q.aN(value, mE)
				}(a3, a4)
	}, this.pA = function() {
		return d0
	}, this.uH = function() {
		d0 = null
	}
}

function vJ() {
	this.vK = function(r9) {
		var vh;
		jX.kX(55 + vL.vM.jc()), jX.mD(1, 0), jX.mD(6, 13), jX.mD(14, lh.ve), jX.mD(4, aT.id), jX.mD(7, aT.og), jX.mD(1, +lh.vf), jX.mD(1, +lh.vg), jX.mD(5, (new Date).getHours() % 24), vh = vi.vj(), jX.mD(8, vh[0]), jX.mD(8, vh[1]), vL.vM.eV(),
			jZ.fH.send(r9, jX.lf)
	}, this.vO = function(r9, iQ, vP, vQ) {
		jX.kX(70), jX.mD(1, 0), jX.mD(6, 30), jX.mD(3, vP), jX.mD(30, iQ), jX.mD(30, vQ), jZ.fH.send(r9, jX.lf)
	}, this.vR = function(vS) {
		vT.b(), vT.mD(1, 0), vT.mD(6, 6), hS.jd.eV(vS, 16, vT), jZ.fH.send(jZ.fH.tO, vT.vU())
	}, this.vV = function(id) {
		jX.kX(13), jX.mD(1, 0), jX.mD(6, 15), jX.mD(6, id), jZ.fH.send(0, jX.lf)
	}, this.vW = function(id, value) {
		jX.kX(43), jX.mD(1, 0), jX.mD(6, 3), jX.mD(6, id), jX.mD(30, value), jZ.fH.send(0, jX.lf)
	}, this.vX = function(id, be) {
		var b7 = Math.min(be.length, 63);
		jX.kX(19 + 16 * b7), jX.mD(1, 0), jX.mD(6, 26), jX.mD(6, id), jX.mD(6, b7), hS.jk.vY(be), jZ.fH.send(0, jX.lf)
	}, this.vZ = function(va, ht) {
		jX.kX(7 + 26 * ht.length), jX.mD(1, 0), jX.mD(6, 9);
		for (var ai = 0; ai < ht.length; ai++) jX.mD(16, ht[ai][0]), jX.mD(10, ht[ai][1]);
		jZ.fH.send(va, jX.lf)
	}, this.vb = function(vc, vd) {
		jX.kX(20), jX.mD(1, 0), jX.mD(6, 19), jX.mD(1, vc), jX.mD(12, vd), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.vk = function(username) {
		jX.mD(5, username.length), hS.jk.vY(username)
	}, this.rt = function(rv, rw, r9, pow) {
		jX.kX(88), jX.mD(1, 0), jX.mD(6, 8), jX.mD(3, pow.vP), jX.mD(30, pow.iQ), jX.mF(32, rw), jX.mD(16, rv), jZ.fH.send(r9, jX.lf)
	}
}

function vl() {
	var vm = 12e3;
	this.show = function(vn) {
		return !vn && !vo.vp() && (0 === aT.id ? vo.vq.show() : !(bc.iV < vm) && (vn = 1 === aT.id ? 72e4 : 108e4, vm = bc.iV + vn, 2 === lh.lk) && aT.aU.vr(Math.floor(vn)))
	}
}

function f3() {
	var dp;
	this.ew = [], this.dp = document.createElement("div"), this.f4 = function(be, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = be, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.dp.appendChild(
			title), title
	}, this.fA = function(be, marginBottom) {
		var vs = document.createElement("p");
		return vs.textContent = be, vs.style.fontSize = "0.75em", vs.style.lineHeight = "1.2em", vs.style.marginBottom = marginBottom || "0", this.dp.appendChild(vs), vs
	}, this.vt = function(be) {
		var vu = document.createElement("p");
		return vu.textContent = be, vu.style.fontSize = "1em", vu.style.marginBottom = "0", vu.style.whiteSpace = "pre-wrap", vu.style.overflowWrap = "break-word", this.dp.appendChild(vu), vu
	}, this.vv = function(vw, fontSize) {
		var dp = document.createElement("div");
		return dp.innerHTML = vw, dp.style.fontSize = fontSize || "1em", dp.style.lineHeight = "1.2em", this.dp.appendChild(dp), dp
	}, this.vx = function(vy) {
		for (var r5 = vy.r5, b7 = r5.length, ai = 0; ai < b7; ai++) this.dp.appendChild(r5[ai])
	}, this.f5 = function(ht) {
		return this.ew.push(ht), this.dp.appendChild(ht.cc), ht
	}, this.resize = function() {
		for (var b7 = this.ew.length, ai = 0; ai < b7; ai++) this.ew[ai].resize && this.ew[ai].resize()
	}, (dp = this.dp).style.position = "absolute", dp.style.height = "auto", dp.style.padding = "0.5em"
}

function vz(un) {
	var eh, ei, ey;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(85), [new eG("⬅️ " + L(22), function() {
		dx.eH(10)
	})]), ei = new en(eh.eM, ((ey = []).push(function() {
		var w3, f2 = new f3,
			w4 = new f6(ep.buffer.data[132], 1, function() {
				w3.button.click()
			}),
			w5 = new f6(ep.buffer.data[131], 1, function() {
				w4.cc.focus()
			});
		f2.f4(L(86)), f2.f5(w5), w5.cc.style.marginBottom = "0.8em", f2.f4(L(87)), f2.f5(w4);
		return w3 = new eG(L(88), function() {
			mS = Math.floor(w5.cc.value), mT = Math.floor(w4.cc.value);
			var mT, mS = {
				w7: Math.min(mS, mT),
				vC: Math.max(mS, mT)
			};
			dx.ej(8, dx.ek(10).el, new ex(21, {
				jb: un.jb,
				mS: mS.w7,
				mT: mS.vC
			}))
		}, 0, 0, 1), f2.f5(new f9([w3.button])), f2
	}()), ey.push(function() {
		var w3, f2 = new f3,
			w4 = new f6(ep.buffer.data[134], 1, function() {
				w3.button.click()
			}),
			w5 = new f6(ep.buffer.data[133], 0, function() {
				w4.cc.focus()
			});
		return f2.f4(1 === un.jb ? L(89) : L(90)), f2.f5(w5), w5.cc.style.marginBottom = "0.8em", f2.f4(L(91)), f2.f5(w4), w3 = new eG(L(88), function() {
			var w8 = w5.cc.value.slice(0, 20),
				w9 = Math.abs(Math.floor(w4.cc.value));
			dx.ej(8, dx.ek(10).el, new ex(22, {
				jb: un.jb,
				w8: w8,
				w9: w9
			}))
		}, 0, 0, 1), f2.f5(new f9([w3.button])), f2
	}()), ey.push(function() {
		var w3, f2 = new f3,
			w4 = new f6(ep.buffer.data[152], 1, function() {
				w3.button.click()
			}),
			w5 = new f6(ep.buffer.data[151], 0, function() {
				w4.cc.focus()
			});
		return f2.f4(L(92)), f2.f5(w5), w5.cc.style.marginBottom = "0.8em", f2.f4(L(91)), f2.f5(w4), w3 = new eG(L(88), function() {
			var w8 = w5.cc.value.slice(0, 5),
				w9 = Math.abs(Math.floor(w4.cc.value));
			dx.ej(8, dx.ek(10).el, new ex(28, {
				jb: un.jb,
				w8: w8,
				w9: w9
			}))
		}, 0, 0, 1), f2.f5(new f9([w3.button])), f2
	}()), ey))
}

function wA() {
	var aS, aY, wB;

	function wT(wU, cS, wR, wF, h9) {
		cS = wS(wU, cS + 1 + 2 * wF & 3);
		! function(wU, wV) {
			return 1 < Math.abs(wU % aS - wV % aS) || 1 < Math.abs(wY(wU) - wY(wV))
		}(wU, cS) && 0 === h9[cS << 2] && (h9[cS << 2] = wR)
	}

	function wY(pG) {
		return Math.floor((pG + .5) / aS) % aY
	}

	function wS(pG, cS) {
		return pG + wB[cS]
	}
	this.ec = function(be) {
		var ai, wC, b7, wD, wG = jW;
		for (es.et.wH(es.et.wI(be)), gW.ko.gi[gW.kY].aS = gW.gX = aS = wG.jc(12), gW.ko.gi[gW.kY].aY = gW.gY = aY = wG.jc(12), wB = [-aS, -1, aS, 1], gW.u0 = document.createElement("canvas"), gW.u0.width = gW.gX, gW.u0.height = gW.gY, gW.u1 = gW
			.u0.getContext("2d", {
				alpha: !1
			}), gW.u2 = gW.u3 = null, gW.u2 = gW.u1.getImageData(0, 0, gW.gX, gW.gY), gW.u3 = gW.u2.data, aa.kt.wM(gW.u3), b7 = wG.jc(12), wC = wG.jc(5), wD = wJ(aS * aY - 1), ai = 0; ai < b7; ai++) ! function(b6, pG, wE, wF) {
			var ai, cS, wG = jW,
				h9 = gW.u3,
				wN = pG,
				wO = pG,
				wP = 0,
				wQ = 1 + wE,
				wR = 2 - wE;
			for (h9[pG << 2] = wQ, ai = 0; ai < b6; ai++) cS = wG.jc(2), pG = wS(pG, cS), h9[pG << 2] === wQ ? wP % 2 == 1 && wT(wO, wP + 2 * wF + 3, wR, wF, h9) : h9[pG << 2] = wQ, wT(pG, cS, wR, wF, h9), wT(wO, cS, wR, wF, h9), wO = pG,
				wP = cS;
			wS(pG, 0) === wN ? (wT(pG, 0, wR, wF, h9), wT(wN, 0, wR, wF, h9)) : wS(pG, 1) === wN && (wT(pG, 0, wR, wF, h9), wT(wN, 2, wR, wF, h9));
			0 === b6 && (wT(wN, 0, wR, wF, h9), wT(wN, 2, wR, wF, h9))
		}(wG.jc(wC), wG.jc(wD), 1 === wG.jc(1), 1 === wG.jc(1));
		var a3, a4, ca, wZ, wa, wb, h9 = gW.u3,
			wc = !0,
			h1 = gW.ko.gi[gW.kY].h1,
			h2 = gW.ko.gi[gW.kY].h2;
		for (a4 = 0; a4 < aY; a4++)
			for (wZ = !0, wa = wc, a3 = wb = 0; a3 < aS; a3++) ca = 4 * a4 * aS + 4 * a3, wb <= a3 && 0 < h9[ca] && (wa = 2 === h9[ca], wZ) && (wZ = !1, wa !== wc) ? (wc = wa, wb = a3 + 1, a3 = -1) : (wa ? (h9[ca] = h2[0], h9[1 + ca] = h2[1], h9[
				2 + ca] = h2[2]) : (h9[ca] = h1[0], h9[1 + ca] = h1[1], h9[2 + ca] = h1[2]), h9[3 + ca] = 255);
		gW.u1.putImageData(gW.u2, 0, 0), gW.u4 = !0, gW.u5.b(), bc.bj = !0
	}
}

function fG() {
	this.er = function(f7, value) {
		2 !== ep.buffer.data[f7].type && (value = Math.floor(value)), ep.buffer.data[f7].value !== value && (ep.buffer.wd(f7, value), 0 === f7 ? (dx.eX(), vi.b(), dx.ej(2)) : 1 === f7 ? aW.we(1) : 2 === f7 ? aW.we(0) : 5 === f7 && (aa.ab.wf(), aW
			.we(0)))
	}, this.wg = function() {
		for (var data = ep.buffer.data, ai = 0; ai < 100; ai++) data[ai] && ep.buffer.wd(ai, data[ai].s3);
		aa.ab.wf(), aW.we(1)
	}, this.wh = function() {
		for (var data = ep.buffer.data, ai = 0; ai < data.length; ai++) data[ai] && ep.buffer.er(ai, data[ai].s3)
	}, this.wi = function() {
		for (var cT = ep.buffer, ai = 128; ai < 135; ai++) cT.wd(ai, cT.data[ai].s3)
	}, this.wj = function(data) {
		ep.eq.er(109, data.mh), ep.eq.er(107, data.wk), ep.eq.er(108, data.wl), ep.eq.er(112, data.wm), ep.eq.er(111, data.wn), ep.eq.er(113, data.wo), ep.eq.er(135, data.wp), ep.eq.er(136, data.wq), ep.eq.er(137, data.wr), ep.eq.er(138, data
			.ws), ep.eq.er(139, data.wt), ep.eq.er(141, data.wu), ep.eq.er(142, data.wv), ep.eq.er(143, data.ww), ep.eq.er(144, data.wx)
	}
}

function wy() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 !== c.data.iIncomeType && (c.data.iIncomeData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.iIncomeType && aa.kt.x4(x0.eZ(), c.data.iIncomeData, 255)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(93), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(95), L(96), L(97)],
			value: c.data.iIncomeType
		}, function(f7) {
			x2(), 2 !== f7 || c.data.iIncomeData || (c.data.iIncomeData = new Uint8Array(c.c2), c.data.iIncomeData.fill(32)), c.data.iIncomeType = f7, dx.ej(27)
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2;
		1 === c.data.iIncomeType && ((f2 = new f3).f4("Value"), f2.f5(new f6({
			f7: -1,
			value: c.data.iIncomeValue
		}, 1, 0, function(cc) {
			var value = q.a0(Math.floor(cc.target.value), 0, 255);
			cc.target.value = c.data.iIncomeValue = value
		})), ey.push(f2))
	}(ey), function(ey) {
		var f2;
		2 === c.data.iIncomeType && ((f2 = new f3).f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.iIncomeData, 4)), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function x9(title, vw, xA, xB) {
	var eh, xC;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), xC.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, xB = xB || [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})], eh = new eF(title, xB), xC = new xD(eh.eM, vw), xA && aa.ab.textAlign(eh.eM.style, 1)
}

function xE() {
	var eh, ei, ey;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(98), [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})]), ei = new en(eh.eM, ((ey = []).push(function() {
		function xL() {
			xM.button.textContent = L(102), xI.cc.readOnly = !1, xK.cc.readOnly = !1, xN.iE(1), xN.button.style.color = v.w
		}
		var f2 = new f3,
			xH = (f2.vv(jZ.fH.xG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", f2.f4(L(99)), new f6({
				value: ep.buffer.data[105].value,
				f7: -1
			})),
			xI = (xH.cc.readOnly = !0, f2.f5(xH), f2.f4(L(100), "0.8em"), new f6(ep.buffer.data[148], 0, void 0, function(cc) {
				xJ(ep.buffer.data[149].value, cc.target.value)
			})),
			xK = (f2.f5(xI), f2.f4(L(101), "0.8em"), new f6(ep.buffer.data[149], 1, void 0, function(cc) {
				xJ(cc.target.value, ep.buffer.data[148].value)
			})),
			xM = (f2.f5(xK), new eG(L(102), function(cc) {
				return cc.textContent === L(102) ? (cc.textContent = L(103), xI.cc.readOnly = !0, xK.cc.readOnly = !0, xN.iE(0), xN.button.style.color = v.hL, ep.eq.er(149, xK.cc.value), xJ(ep.buffer.data[149].value, ep.buffer
					.data[148].value)) : xL(), !0
			})),
			xN = (f2.f5(new f9([xM.button])), new eG(L(104), function(cc) {
				return xI.cc.readOnly && jZ.fH.lZ(0) && (aa.ab.xO(cc), xL(), jZ.mn.mo({
					action: 0,
					hT: ep.buffer.data[148].value,
					value: parseInt(ep.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			vs = f2.fA(),
			xJ = (f2.fA(L(105)).style.fontWeight = "bold", function(d0, be) {
				vs.innerHTML = dx.fH.xP(d0, ep.buffer.data[105].value, be)
			});
		return f2.f5(new f9([xN.button])), xJ(ep.buffer.data[149].value, ep.buffer.data[148].value), f2
	}()), ey))
}

function xQ() {
	this.cp = new Array(c.c2), this.z = new Array(c.c2), this.xR = new Uint8Array(c.c2), this.an = new Uint8Array(c.c2), this.oE = new Uint16Array(c.c2), this.oG = new Uint16Array(c.c2), this.oF = new Uint16Array(c.c2), this.oH = new Uint16Array(c
			.c2), this.aO = new Uint32Array(c.c2), this.xS = new Uint32Array(c.c2), this.ax = new Uint32Array(c.c2), this.bW = null, this.xT = null, this.uW = null, this.xU = null, this.xV = new Uint16Array(c.c2), this.xW = new Uint16Array(c.c2),
		this.xX = new Uint16Array(c.c2), this.xY = new Uint16Array(c.c2), this.xZ = new Uint8Array(c.c2), this.xa = new Uint16Array(c.c2), this.b = function() {
			this.cp.fill(""), this.z.fill(""), this.xR.fill(0), this.an.fill(0), this.oE.fill(0), this.oG.fill(0), this.oF.fill(0), this.oH.fill(0), this.aO.fill(0), this.xS.fill(0), this.ax.fill(0), this.bW = new Array(c.c2), this.xT = new Array(c
				.c2), this.uW = new Array(c.c2), this.xU = new Array(c.c2), this.xV.fill(0), this.xW.fill(0), this.xX.fill(0), this.xY.fill(0), this.xZ.fill(0), this.xa.fill(0)
		}
}

function xb() {
	this.b8 = function(lf) {
		var id, d2, gJ;
		for (jW.b(lf), jW.f7 += 2, gJ = 8 * jW.size; jW.f7 + 8 <= gJ;) id = jW.jc(4), d2 = jW.jc(9), 0 === id ? this.su(id, d2, jW.jc(22)) : 1 === id ? this.su(id, d2, jW.jc(10), jW.jc(10)) : 2 === id ? this.su(id, d2, jW.jc(10), jW.jc(9)) :
			3 === id ? this.su(id, d2, jW.jc(10), jW.jc(27)) : 4 === id ? this.su(id, d2, jW.jc(10), jW.jc(16)) : 5 === id || 6 === id ? this.su(id, d2, jW.jc(10)) : 7 === id ? this.su(id, d2, jW.jc(1)) : 10 === id ? this.su(id, d2, jW.jc(20), jW
				.jc(22)) : this.su(id, d2)
	}, this.xc = [], this.xd = function() {
		for (var xf = 0, xg = 0, xh = 0, xi = 0, xj = 0, xk = 0, ai = 0; ai < 512; ai++) xf += y.an[ai], xg += y.aO[ai], xh += y.ax[ai], xi += bQ.fH.uU[ai];
		xj += bQ.fH.jO, xk += aJ.aK, this.xc.push(xh % 1073741824 * 4 + (xf + xg + xi + xj + xk) % 4)
	}, this.su = function(id, d2, d3, d4) {
		0 === id ? ss.xl.xm(d2, d3) : 1 === id ? ss.xl.xn(d2, d3, d4) : 2 === id ? ss.xl.xo(d2, d3, d4) : 3 === id ? ss.xl.xp(d2, d3, d4) : 4 === id ? ss.xl.xq(d2, d3, d4) : 5 === id ? ss.xl.xr(d2, d3) : 6 === id ? ss.xl.xs(d2, d3) : 7 === id ?
			ss.xl.xt(d2, d3) : 8 === id ? ss.xl.xu(d2) : 9 === id ? ss.xl.xv(d2) : 10 === id && ss.xl.xw(d2, d3 >> 10, d4, d3 % 1024)
	}
}

function y1() {
	(xx = void 0 === xx ? document.createElement("canvas") : xx).width = gW.gX, xx.height = gW.gY, xz = xx.getContext("2d", {
		alpha: !0
	}), y0 = xy = null, y0 = xz.getImageData(0, 0, gW.gX, gW.gY), xy = y0.data, aa.kt.wM(xy)
}

function y2() {
	this.oC = 0, this.b = function() {
		this.oC = 0
	}, this.b8 = function() {
		if (!this.oC && bc.ql() % 30 == 7 && aa.bY.y5(90) && (o9.performance.oC = 1)) {
			if (c.bJ) {
				var y8 = bK.y9();
				if (cD.c0[y8]) {
					bK.pL(y8);
					var ce = ij.pN,
						b7 = ij.pM[0];
					if (0 !== b7)
						for (var yA = Math.min(100 + 10 * (b7 - 1), 400), ai = 0; ai < b7; ai++) yB.yC(ce[ai], yA)
				}
			}
			yB.yC(bM[0], 100)
		}
	}
}

function yD() {
	function yF() {
		if (2 === c.bH) return 1;
		yI.yJ(), c.bH = 2, c.aM = c.bG
	}

	function yH() {
		bT.yK.kH(), sF.show(1 === c.yL, !1, 2 === c.yL), bT.result.kH(), bT.yM.b8(), bT.yN.b8(), bT.yN.yO(), e.yP(!0), e.yQ(247), e.yQ(956), e.yQ(957), bi.ap(!0), at.ap(!0), yI.ap(), nr.nQ(), c.bl && bc.yR.sv(), bc.bj = !0, ns.nt(), aT.aU.setState(0)
	}
	this.yE = function() {
		yF() || (c.yG = 2, yH())
	}, this.bV = function() {
		yF() || (c.yG = 1, yH())
	}
}

function yS() {
	var yT, yU, yV;

	function yY(ya) {
		for (var ai = yT - 1; 0 <= ai; ai--) 0 === yV[yU[ai]] && y.aO[yU[ai]] >= ya && yX(yU[ai])
	}

	function yW(player) {
		var av;
		64 === yV[player] ? yV[player] = 6 : (av = y.aO[player], yV[player] = av < 1e3 ? 3 : av < 1e4 ? 2 : av < 6e4 ? 1 : 0)
	}
	this.b = function() {
		yT = 0, yU = new Uint16Array(c.c2), yV = new Uint8Array(c.c2)
	}, this.b8 = function() {
		for (var ai = yT - 1; 0 <= ai; ai--) 64 === yV[yU[ai]] ? yW(yU[ai]) : 0 == yV[yU[ai]]-- && (yW(yU[ai]), yX(yU[ai]));
		16e4 <= y.aO[bM[0]] && (yY(16e4), 3e5 <= y.aO[bM[0]]) && yY(3e5), aa.bY.yb(c.t) && (pz.qH[7] = Math.max(y.aO[c.t], pz.qH[7]))
	}, this.yc = function(player) {
		for (var cy, ai = yT - 1; 0 <= ai; ai--)
			if (player === yU[ai]) {
				for (yT--, cy = ai; cy < yT; cy++) yU[cy] = yU[cy + 1];
				return
			}
	}, this.yd = function(player, ye) {
		for (var ai = yT - 1; 0 <= ai; ai--)
			if (player === yU[ai]) return;
		yU[yT++] = player, yV[player] = ye ? 2 : 64
	}
}

function yf() {
	var hC = [L(106), L(107), L(108), L(109), L(110), L(111), L(112)],
		yg = [100, 60, 30, 15, 6, 1],
		yh = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		yi = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		yk = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.hZ = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.mk = function(id, mj, f7) {
		mj = this.yl(mj);
		return +(yh[mj][id] > f7)
	}, this.yl = function(mj) {
		for (var ai = 0; ai < yg.length; ai++)
			if (yg[ai] <= mj) return ai;
		return yg.length
	}, this.ym = function(mj) {
		return hC[this.yl(mj)]
	}, this.hY = function(id, yn) {
		return yi[id].replace(new RegExp("x", "g"), yn)
	}, this.ha = function(id, yn) {
		return yk[id].replace(new RegExp("x", "g"), yn)
	}, this.yo = function(id, yp) {
		return this.hZ[5][id]
	}
}

function yq() {
	this.yr = function(player) {
		ys.yt(player), c.aM++, y.xR[player] = 2, y.xY[player] = vL.yu.yv(), player === c.t && (sF.show(!1, !1), at.al(), bT.yM.yw()), gN.qK(player)
	}
}

function yx() {
	this.yy = 28, this.yz = 0, this.z0 = null;
	var z2 = this.z1 = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function z7(pS, z9) {
		var a3, a4, ic, d8, pT = aa.ab.pR(pS, pS),
			pU = aa.ab.getContext(pT, !0),
			pV = aa.ab.getImageData(pU, pS, pS),
			h9 = pV.data,
			b6 = (pS >> 1) - .5,
			zA = .5 + b6;
		for (zA *= zA, a4 = 0; a4 < pS; a4++)
			for (a3 = 0; a3 < pS; a3++) d8 = (d8 = a3 - b6) * d8 + (d8 = a4 - b6) * d8, h9[ic = 4 * (a4 * pS + a3)] = z9[0], h9[1 + ic] = z9[1], h9[2 + ic] = z9[2], h9[3 + ic] = (zA - d8) * z9[3] / zA;
		return pU.putImageData(pV, 0, 0), pT
	}

	function pX(ai, pU, pT, pS) {
		var a3;
		0 !== y.an[ai] && 0 !== y.aO[ai] && (a3 = y.oE[ai] + y.oF[ai] + 1 - pS - 2 >> 1, pS = y.oG[ai] + y.oH[ai] + 1 - pS - 2 >> 1, pU.drawImage(pT[c.bJ ? 9 === c.d && 5 === yB.po[ai] ? 3 : cD.c1[ai] : ai < c.aI ? 1 : 0], a3, pS))
	}
	this.b = function() {
		var nU;
		this.yz = 700,
			function(nU) {
				var pS = nU.yy;
				if (nU.z1 = [], z2 = [], c.bJ) {
					for (var ai = 0; ai <= c.cq; ai++) nU.z1.push(z7(pS, cD.by[cD.c0[ai]])), z2.push(z7(pS >> 1, cD.by[cD.c0[ai]]));
					9 === c.d && z2.push(z7(pS, cD.by[1]))
				} else nU.z1.push(z7(pS, cD.by[7])), nU.z1.push(z7(pS, cD.by[4])), z2.push(z7(pS >> 1, cD.by[7]))
			}(this),
			function(nU, zG) {
				var ai, z0 = nU.z0,
					pU = aa.ab.getContext(z0, !0),
					b7 = c.c2,
					pS = nU.yy >> 1;
				pU.imageSmoothingEnabled = !1, pU.setTransform(1, 0, 0, 1, 0, 0), zG && pU.clearRect(0, 0, z0.width, z0.height);
				if (9 === c.d) {
					pS <<= 1;
					nU = cv.cw[5];
					for (ai = b7 - nU; ai < b7; ai++) pX(ai, pU, z2, pS);
					b7 -= nU, pS >>= 1
				}
				for (ai = c.aI; ai < b7; ai++) pX(ai, pU, z2, pS)
			}(this, null !== (nU = this).z0 && nU.z0.width === gW.gX - 2 && nU.z0.height === gW.gY - 2 || (nU.z0 = aa.ab.pR(gW.gX - 2, gW.gY - 2), !1)), c.ao || this.sJ()
	}, this.z8 = z7, this.sJ = function() {
		for (var b7 = c.aI, pS = this.yy, z1 = this.z1, pU = aa.ab.getContext(this.z0, !0), ai = 0; ai < b7; ai++) pX(ai, pU, z1, pS)
	}
}

function zI() {
	var zJ = 0,
		zK = 0,
		zL = 0,
		zM = 0,
		zN = -1;

	function zW(ar) {
		if (zN === ar) return !1;
		if (-1 === (zN = ar)) zJ = 0, e.zX(zJ, 0);
		else {
			if (j1.zY(ar)) return zL = j1.zZ(ar), za = y.ax[zL] - y.xa[zL], (4 !== zJ || za !== zK) && (zJ = 4, zK = za, e.zX(zJ, za), !0);
			if (j1.zb(ar)) return 3 !== zJ && (zJ = 3, e.zX(zJ, 0), !0);
			if (j1.zc(ar)) return 2 !== zJ && (zJ = 2, e.zX(zJ, 0), !0);
			var za = bQ.bR.ze(di.zS, di.zU);
			if (-1 === za) return 1 !== zJ && (zJ = 1, e.zX(zJ, 0), !0);
			ar = bQ.fH.zg[za];
			if (zL = bQ.fH.il[za], zM = bQ.fH.j6[za] >> 3, 5 === zJ && ar === zK) return !1;
			zJ = 5, zK = ar, e.zX(zJ, ar)
		}
		return !0
	}
	this.b = function() {
		zM = zL = zK = zJ = 0, zN = -1
	}, this.b8 = function(aq) {
		var oO;
		!aq && di.dj() || (aq = ix.zR(di.zS), oO = ix.zT(di.zU), ix.zV(aq, oO) ? (aq = ix.oR(aq, oO), zW(ix.j3(aq))) : zW(-1))
	}, this.zP = function() {
		var zi, za, zd, zf;
		if (0 !== zJ && 2 !== zJ)
			if (di.dj()) {
				if (1 !== zJ && 3 !== zJ) {
					if (4 === zJ) return void(za = y.ax[zL] - y.xa[zL], zK === za || (zK = za, e.zX(zJ, za)));
					(zd = bQ.bR.zh(zM, zL)) < 0 ? (zJ = 1, e.zX(zJ, 0)) : (zf = bQ.fH.zg[zd]) !== zK && (zK = zf, e.zX(zJ, zf))
				}
			} else if (1 === zJ) - 1 !== (zd = bQ.bR.ze(di.zS, di.zU)) && (zJ = 5, zK = bQ.fH.zg[zd], e.zX(zJ, zK));
		else if (3 === zJ) j1.zY(zN) && (zJ = 4, zi = j1.zZ(zN), zK = y.ax[zi] - y.xa[zi], e.zX(zJ, zK));
		else if (4 === zJ) {
			if (j1.zY(zN)) return void(zi = j1.zZ(zN), za = y.ax[zi] - y.xa[zi], zK === za || (zK = za, e.zX(zJ, za)));
			zJ = 3, e.zX(zJ, 0)
		} else - 1 === (zd = bQ.bR.ze(di.zS, di.zU)) ? (zJ = 1, e.zX(zJ, 0)) : (zf = bQ.fH.zg[zd]) !== zK && (zK = zf, e.zX(zJ, zf))
	}
}

function zj() {
	this.eV = function(be, zk, zl) {
		for (var zm = [], b7 = be.length, max = 0, ai = 0; ai < b7; ai++) {
			var d0 = be.charCodeAt(ai);
			zm.push(d0), max = Math.max(max, d0)
		}
		var zn = max < 128 ? 7 : 16;
		for (zl.mD(zk, b7), zl.mD(1, +(16 == zn)), ai = 0; ai < b7; ai++) zl.mD(zn, zm[ai])
	}
}

function fS() {
	this.uT = 512, this.uV = 8, this.jO = 0, this.iv = 0, this.j6 = new Uint16Array(this.uT), this.iz = new Uint32Array(this.uT), this.zo = new Uint16Array(this.uT), this.zg = new Uint32Array(this.uT), this.tC = new Uint16Array(this.uT), this.il =
		new Uint16Array(this.uT), this.it = new Uint8Array(this.uT), this.zp = new Uint8Array(this.uT), this.jG = new Array(this.uT), this.jI = new Uint16Array(this.uT), this.uU = new Uint8Array(c.c2), this.zq = new Uint16Array(this.uV * c.c2), this
		.b = function() {
			this.jO = 0, this.iv = 0, this.uU.fill(0), this.jG.fill(null)
		}, this.t3 = function(player) {
			var po = ij.zr[0],
				fX = ij.ik[1],
				jF = ij.ce[0],
				zs = this.iv,
				b7 = this.jO,
				t7 = ix.zt(jF[0]),
				zu = this.uU[player],
				zv = (player << 3) + zu;
			this.j6[b7] = zv, this.iz[b7] = t7, this.zo[b7] = 0, po < 60 && (aa.bY.zw(player, 60 - po), po = 60), this.zg[b7] = po, this.tC[b7] = bQ.fT.t3(b7, ix.tB(t7)), this.il[b7] = zs, this.it[b7] = fX, this.zp[b7] = 0, this.jG[b7] = jF, this.jI[
				b7] = 0, this.iv = (zs + 1) % 65536, this.uU[player] = zu + 1, this.zq[zv] = b7, this.jO++, bQ.fX.zx(player, jF[jF.length - 1], fX, zs, po)
		}, this.b8 = function() {
			bQ.fX.b8();
			for (var pG = c.t, av = bQ.bR.qA(pG), nU = (! function(nU) {
					for (var a02, iz = nU.iz, zg = nU.zg, zp = nU.zp, zo = nU.zo, tC = nU.tC, jG = nU.jG, jI = nU.jI, nU = nU.jO, a03 = gW.gX << 4, ai = nU - 1; 0 <= ai; ai--) {
						var a04 = iz[ai],
							jF = jG[ai],
							a05 = jI[ai],
							t7 = ix.zt(jF[a05]),
							t8 = ix.zt(jF[a05 + 1]),
							a06 = t7 % a03,
							t7 = ~~((t7 + .5) / a03),
							a08 = t8 % a03,
							a09 = ~~((t8 + .5) / a03),
							a0A = a08 - a06,
							a0B = a09 - t7,
							cS = Math.max(~~Math.sqrt(a0A * a0A + a0B * a0B + .5), 1),
							zf = zg[ai],
							zf = (zf = zp[ai] ? 4e4 : 25e4 + Math.min(20 * zf, 3e5) + Math.min(zf >> 3, 5e4), zo[ai] + Math.max(~~((zf + .5) / cS), 1));
						65535 <= zf ? a05 + 2 < jF.length ? (jI[ai] = a05 + 1, iz[ai] = a02 = function(ai, a0C, a06, a07, a05, cS, jF, a03) {
							a0C = Math.min(a0C - 65535, 65535);
							var jF = ix.zt(jF[a05 + 2]),
								a05 = jF % a03 - a06,
								jF = ~~((jF + .5) / a03) - a07,
								a0E = Math.max(~~Math.sqrt(a05 * a05 + jF * jF + .5), 1);
							return a0C = Math.min(Math.floor((cS * a0C + .5) / a0E), 65534), bQ.fH.zo[ai] = a0C, a06 + q.aN(a0C * a05, 65535) + a03 * (a07 + q.aN(a0C * jF, 65535))
						}(ai, zf, a08, a09, a05, cS, jF, a03)) : (iz[ai] = a02 = t8, zo[ai] = 65535) : (zo[ai] = zf, iz[ai] = a02 = a06 + q.aN(zf * a0A, 65535) + a03 * (t7 + q.aN(zf * a0B, 65535))), tC[ai] = bQ.fT.t5(tC[ai], a04, a02)
					}
				}(this), ! function(nU) {
					if (bc.ql() % 2 == 1) {
						var ai, ca, b6, cT, cY, a0F, a0G, a0H, wU, ne, nf, t7, a0I, dI, a0K, wV, b7 = nU.jO,
							iz = nU.iz,
							j6 = nU.j6,
							zg = nU.zg,
							zp = nU.zp,
							fT = bQ.fT.fT,
							sZ = fT.length,
							t0 = bQ.fT.t0,
							a03 = gW.gX << 4,
							a0M = c.bJ,
							a0N = cD.c1,
							iY = (b7 - 1) * (q.aN(bc.ql(), 2) % 2);
						for (ai = 0; ai < b7; ai++)
							for (ca = Math.abs(ai - iY), t7 = iz[ca], b6 = ix.tB(t7), wU = j6[ca] >> 3, ne = t7 % a03, nf = ~~((t7 + .5) / a03), a0K = zg[ca], cT = 0; cT < 9; cT++)
								if (!((a0F = b6 + t0[cT]) < 0 || sZ <= a0F))
									for (a0H = fT[a0F], a0G = a0H.length, cY = 0; cY < a0G; cY++) a0I = a0H[cY], wV = j6[a0I] >> 3, wU == wV || a0M && a0N[wU] === a0N[wV] && a0N[wU] || (wV = iz[a0I], (dI = ne - wV % a03) * dI + (dI = nf - ~~(
										(wV + .5) / a03)) * dI < 14400 && (wV = zg[a0I], dI = wV <= a0K ? Math.max(1, q.aN(wV + q.aN(a0K - wV, 10), 10)) : Math.max(1, q.aN(a0K, 10)), zg[a0I] = Math.max(wV - dI, 0), zp[a0I] = 4))
					}
				}(this), ! function(nU) {
					if (bc.ql() % 5 == 3)
						for (var zg = nU.zg, b7 = nU.jO, ai = 0; ai < b7; ai++) {
							var po = zg[ai];
							zg[ai] = Math.max(po - Math.max(1, po >> 7), 0)
						}
				}(this), this), zg = nU.zg, zp = nU.zp, ai = nU.jO - 1; 0 <= ai; ai--) zp[ai] = zp[ai] >> 1, 0 === zg[ai] && (bQ.fq.a0O(ai), bQ.fO.a0P(ai));
			pz.q0(pG, av - bQ.bR.qA(pG), 15)
		}
}

function a0Q() {
	this.iV = bc.iV, this.f7 = 0, this.sU = 0, this.sS = 0, this.a0R = null, this.a0S = 7, this.a0T = 0, this.b = function() {
		this.sS = 0, this.a0R = [], this.f7 = 0, this.sU = 0
	}, this.a0U = function(lf) {
		if (c.ao) this.bf(lf);
		else if (this.a0R.push(lf), 2 === c.bH) {
			for (var ai = 0; ai < this.a0R.length; ai++) ss.st.b8(this.a0R[ai]);
			this.a0R = []
		}
	}, this.bf = function(lf) {
		2 !== c.bH && (ss.st.b8(lf), eR.b8(), at.bf(this.sS), this.sS === c.bk ? (c.sL.b8(), this.sS = 0, this.f7 = 0, this.sU = 0, this.iV = bc.iV) : (this.sS++, gN.sH(), gN.ap(!0), ns.render()))
	}, this.b8 = function() {
		aW.b8(), c.ao ? (bc.bj = at.bf(-1) || bc.bj, sg()) : (0 !== this.f7 || bc.iV >= this.iV && (this.iV += bc.bd * Math.floor(1 + (bc.iV - this.iV) / bc.bd), 2 === c.bH ? sa() : this.a0V(), this.f7++, 27 < bc.iV - this.a0T)) && this.a0W(),
			sX(), bc.bj && (bc.bj = !1, sY()), this.a0T = bc.iV
	}, this.a0W = function() {
		bc.bj = !0, sh(), this.f7 = 0
	}, this.a0V = function() {
		var a0X, ai;
		if (this.sU !== 7 * this.sS) sf(), ns.render();
		else {
			a0X = !1;
			loop: for (; this.a0Y() && (a0X = !0, sf(), 2 !== c.bH) && 0 < this.a0R.length;)
				for (ai = this.a0S - 2; 0 <= ai; ai--)
					if (sf(), 2 === c.bH) break loop;
			a0X ? ns.render() : (sa(), ns.sN())
		}
	}, this.a0Y = function() {
		return 0 < this.a0R.length && (this.sS++, ss.st.b8(this.a0R[0]), this.a0R.shift(), !0)
	}
}

function a0Z() {
	a0a() ? (a0b(), a0c !== c.c2 && a0d()) : a0e()
}

function a0d() {
	a0f.a0g(), a0f.a0h(y.xT[a0c]), a0f.a0h(y.uW[a0c]), gW.uN(gW.kY) && a0f.a0h(y.xU[a0c]), a0f.a0i(y.bW[a0c]), a0f.a0j(y.uW[a0c]), a0f.a0j(y.xU[a0c]), a0f.a0k(), a0f.a0l()
}

function a0b() {
	a0m = !0, a0n.qB(a0o, a0p, a0q), a0n.qC(a0o, a0p), y.aO[a0o] += a0r, a0f.a0s(), a0t()
}

function a0a() {
	return (a0c === c.c2 ? a0u : a0v)()
}

function a0v() {
	var a0w = a0r * c.a0x,
		a0y = a0z(),
		a10 = a11(),
		a0y = a0w + 2 * a0y + a10,
		a13 = a14 * a0r;
	return a0y < a13 ? (a0q -= a0y, pz.q0(a0o, a0y, 13), a15(a0y - a0w, a10), !0) : a16 && 0 === a10 ? (a0q -= a13, a13 += aa.bY.zw(a0o, a0y - a13 + 1), pz.q0(a0o, a13, 13), a15(a13 - a0w, 0), !0) : (a0q -= a13, pz.q0(a0o, a13, 13), a15(a13 - a0w,
		a10), !1)
}

function a15(a13, a10) {
	if (0 < a10) {
		if (a13 <= a10) return pz.q0(a0c, a13, 13), void a0n.pw(a0c, a0o, a10 - a13);
		a0n.pw(a0c, a0o, 0), a13 -= a10
	}
	a13 = q.aN(a13, 2), a13 = Math.min(y.ax[a0c], a13), pz.q0(a0c, a13, 13), y.ax[a0c] -= a13
}

function a11() {
	return a0n.pv(a0c, a0o)
}

function a0z() {
	return q.aN(a0r * y.ax[a0c], 1 + q.aN(10 * y.aO[a0c], 16))
}

function a0u() {
	var a17 = a0r * c.a0x;
	return a0q -= a17, pz.q0(a0o, a17, 13), !0
}

function a0t() {
	for (var ai = a0r - 1; 0 <= ai; ai--) y.bW[a0o].push(a18[ai]), y.xT[a0o].push(a18[ai]), j1.a19(a18[ai], a0o)
}

function a1A() {
	var zS = 0,
		zU = 0;
	this.a1B = function(a3, a4) {
		zS = a3, zU = a4
	}, this.a1C = function(code) {
		var oM, oO, ic;
		c.bl || nK.nL || (aa.bY.a1D(0) || aa.bY.a1D(1)) && aa.bY.bZ(c.t) && (nl.gF(zS, zU) ? nl.a1E = !1 : a1F.gF(zS, zU) || (oM = ix.zR(zS), oO = ix.zT(zU), ic = ix.oR(oM, oO), ix.zV(oM, oO) && (0 === code ? function(ic) {
			var a1J, ar, a1Q;
			c.ao ? -1 !== (a1J = a1K.a1L(ic)) && ss.a1M.xm(ic) : (ar = ix.j3(ic), j1.zc(ar) ? (a1J = a1N.a1O.a1P(ar)) && (a1Q = ix.j3(a1J), a1Q = j1.zb(a1Q) ? c.c2 : j1.zZ(a1Q), ss.a1M.xw(nl.a1R(), a1J, a1Q)) : (a1J = a1K.a1S(
				ic)) < 0 || (ar = ix.j3(a1J), j1.zb(ar) ? a0f.a1T(c.t) ? ss.a1M.xn(nl.a1R(), c.c2) : a0n.q7(c.t) && a1U.a1V(c.c2, nl.a1R()) : (a1Q = j1.zZ(ar), a0f.a1W(a1Q, c.t) && (a0f.a1X(c.t, a1Q) ? ss.a1M.xn(nl.a1R(),
					a1Q) : a0n.q7(c.t) && a1U.a1V(a1Q, nl.a1R())))))
		}(ic) : 1 === code ? function(ic) {
			bQ.fj.a1Y(c.t, ic) && ss.a1M.xp(nl.a1R(), ij.ik[7])
		}(ic) : 2 === code && function(ic) {
			bQ.fo.ib(c.t, ic) && ss.a1M.xq(nl.a1R())
		}(ic))))
	}, this.a1Z = function() {
		if (!c.bl && !nK.nL && aa.bY.a1D(1)) {
			var pG = c.t;
			if (aa.bY.bZ(pG)) {
				var b7 = a0n.q7(pG);
				if (b7 < 1) ! function() {
					var pG = c.t;
					if (a0f.a1T(pG)) ss.a1M.xn(nl.a1R(), c.c2);
					else
						for (var a1g = j1.a1g, xT = y.xT, b7 = xT[pG].length, a1h = Math.floor(Math.random() * b7), ai = 0; ai < b7; ai++)
							for (var vA = 3; 0 <= vA; vA--) {
								var ca = xT[pG][(ai + a1h) % b7] + a1g[vA];
								if (j1.zY(ca)) {
									ca = j1.zZ(ca);
									if (ca !== pG && (!c.bJ || a0f.a1W(pG, ca))) return ss.a1M.xn(nl.a1R(), ca)
								}
							}
				}();
				else {
					for (var a1b = 0, po = a0n.q9(pG, 0), ai = 1; ai < b7; ai++) {
						var a1c = a0n.q9(pG, ai);
						a1c < po && (po = a1c, a1b = ai)
					}
					ss.a1M.xn(nl.a1R(), a0n.q8(pG, a1b))
				}
			}
		}
	}, this.a1d = function() {
		if (!c.bl && !nK.nL && aa.bY.bZ(c.t) && aa.bY.a1D(1)) return yI.nG ? yI.a1e(c.t) ? void ss.a1M.xt(1) : void 0 : void(yI.a1f(c.t) && ss.a1M.a1d())
	}
}

function u8() {
	this.a1j = function() {
		for (var pG, a3, d2, a1k = xy, a1l = gW.u3, aS = gW.gX, a1m = aS - 1, a1h = gW.gY - 1, cW = 0, a4 = 1; a4 < a1h; a4++)
			for (d2 = a4 * aS, a3 = 1; a3 < a1m; a3++) a1l[pG = d2 + a3 << 2] === a1l[1 + pG] && a1l[pG] === a1l[2 + pG] && (cW++, a1k[2 + pG] = 4);
		uF.u7 = cW
	}, this.a1n = function(a1o, a1p) {
		for (var a1k = xy, aS = gW.gX, a1m = aS - 1, a1h = gW.gY - 1, id = 0, a4 = 1; a4 < a1h; a4++)
			for (var d2 = a4 * aS, a3 = 1; a3 < a1m; a3++) {
				var ar = 2 + (d2 + a3 << 2);
				a1k[ar] === a1o && (! function(ar, id, a1o, a1p) {
					var b7 = 1,
						a1k = xy,
						a1g = j1.a1r,
						v5 = [ar],
						a1s = id >> 8 << 1,
						a1t = 255 & id;
					a1k[ar - 2] = a1s, a1k[ar - 1] = a1t, a1k[ar] = 5;
					for (; b7;) {
						for (var v6 = [], ai = 0; ai < b7; ai++)
							for (var a1Q = v5[ai], cS = 0; cS < 8; cS++) {
								var a1u = a1Q + a1g[cS];
								a1k[a1u] === a1o && (a1k[a1u - 2] = a1s, a1k[a1u - 1] = a1t, a1k[a1u] = a1p, v6.push(a1u))
							}
						b7 = (v5 = v6).length
					}
				}(ar, id, a1o, a1p), id = (id + 1) % 32768)
			}
	}, this.a1v = function() {
		for (var a1k = xy, aS = gW.gX, a1m = aS - 3, a1h = gW.gY - 3, a1x = 12 * aS, a4 = 3; a4 < a1h; a4++)
			for (var d2 = a4 * aS, a3 = 3; a3 < a1m; a3++) {
				var ar = 2 + (d2 + a3 << 2);
				2 !== a1k[ar] || 2 === a1k[ar - 12] && 2 === a1k[12 + ar] && 2 === a1k[ar - a1x] && 2 === a1k[ar + a1x] || (a1k[ar - 2] = 1 | a1k[ar - 2])
			}
	}
}

function a1y() {
	var aY, canvas, a2, a1z, a20, a21, a22, a23, a24, a25, a26, a28, a27 = !1,
		pT = (this.nG = !1, this.aS = 0, new Array(2)),
		a29 = 0;

	function kQ() {
		var aS = yI.aS,
			b6 = (a23 = !1, a2D(a2, aS, aY), Math.floor(aS / 2));
		1 === a1z ? (a2.fillStyle = v.au, a2.fillRect(b6, 0, b6, aY)) : -1 === a1z && (a2.fillStyle = v.a2E, a2.fillRect(0, 0, b6, aY)), a2F(a2, aS, aY, 2);
		var b6 = (b6 = Math.floor(.25 * aY)) < 2 ? 2 : b6,
			a2H = (a2.fillStyle = v.a2G, Math.floor((aY - 4) * a20[1] / a21[1]));
		0 < a2H && a2.fillRect(2, aY - 2 - a2H, b6, a2H), 0 < (a2H = Math.floor((aY - 4) * a20[0] / a21[0])) && a2.fillRect(aS - 2 - b6, aY - 2 - a2H, b6, a2H);
		b6 = (b6 = Math.floor(aY / 8)) < 2 ? 2 : b6, gg(a2, Math.floor(.4 * aY), 0, aY, b6, .5, !1), gg(a2, Math.floor(aS - 1.4 * aY), 0, aY, b6, .5, !0), a2H = 1.1 * aY / pT[0].width;
		a2.imageSmoothingEnabled = !0, a2.setTransform(a2H, 0, 0, a2H, (aS - a2H * pT[0].width) / 2, -.05 * aY), a2.drawImage(pT[+a27], 0, 0), a2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2N() {
		a28 = -1, a27 = a2O.a2P(), e.sG(257), e.a2Q(a27), yI.nG = !0, a23 = !0, a24 = 360;
		for (var d0, av = 0, ai = aJ.aK - 1; 0 <= ai; ai--) aa.bY.o2(aJ.bX[ai]) || (av += y.aO[aJ.bX[ai]]);
		a27 ? a21[0] = Math.max(q.aN(3 * av, 4), 1) : c.bJ ? (d0 = 9 === c.d ? 8 === cD.c0[bK.y9()] ? 80 : (d0 = q.aN(100 * bK.bL(), c.aP), q.aN(q.a0(1550 - 11 * d0, 400, 1e3), 10)) : (d0 = q.aN(100 * bK.bL(), c.aP), q.aN(q.a0(1600 - 12 * d0, 400,
			1e3), 10)), d0 = q.aN(d0 * av, 100), a21[0] = Math.max(d0, 1)) : 8 === c.d ? a21[0] = Math.max(q.aN(3 * av, 4), 1) : a21[0] = Math.max(q.aN(3 * av, 5), 1), a21[1] = Math.max(av - a21[0], 1)
	}

	function a2J() {
		a26 = bc.ql(), a23 = !0, a24 = a1z = 0, a22 = [], yI.nG = !1, e.yQ(247), a20[0] = a20[1] = 0, e.sG(673)
	}

	function g8() {
		return nl.nA(e.a2Z()) ? __fx.settings.keybindButtons ? nl.a4 - 2 * (aY + ak.gap) : nl.a4 - aY - ak.gap : nr.nA(e.a2a()) ? nr.g8() - aY - ak.gap : aW.aY - aY - nC.nD() * ak.gap
	}
	this.c7 = function() {
		for (var ai = 0; ai < 2; ai++) pT[ai] = aa.canvas.a2A(np.get(3), 8 - ai, v.a2B), pT[ai] = aa.canvas.a2C(pT[ai])
	}, this.b = function() {
		a26 = -1e4, a25 = a29 = 0, a28 = -1, this.nG = !1, a23 = a27 = !1, a20 = [a1z = a24 = 0, 0], a21 = [1, 1], a22 = [], this.resize()
	}, this.resize = function() {
		aY = nl.aY, this.aS = 4 * aY, (canvas = document.createElement("canvas")).width = this.aS, canvas.height = aY, a2 = canvas.getContext("2d", {
			alpha: !0
		}), kQ()
	}, this.ap = function() {
		a23 && kQ()
	}, this.gF = function(a3, a4) {
		return !!this.nG && !(a3 < aW.aS - this.aS - ak.gap || a4 < g8() || (c.bl || this.a1e(c.t) && (nK.nL && nK.nM(), ss.a1M.xt(a3 > aW.aS - ak.gap - this.aS / 2 ? 1 : 0)), 0))
	}, this.b8 = function() {
		0 < a25 ? 0 === --a25 && a2J() : this.nG ? 180 == --a24 && 3 * a20[0] < a21[0] ? a2J() : a20[0] >= a21[0] ? a27 ? bT.bU.yE() : bT.bU.bV() : a20[1] >= a21[1] ? a25 = 4 : a24 <= 0 && a2J() : ! function() {
			var a2S = bc.ql();
			if (a2S % 40 == 14) {
				if (a29) return !(a2S < a29) && !(a2S < a26 + 535) && (a29 = a2S + 1071, aa.bY.a2T()) ? (a2N(), 1) : 0;
				(1 === aJ.aK || (c.bJ ? bK.bL() : y.aO[bM[0]]) >= q.aN(96 * c.aP, 100)) && (a29 = a2S + 535)
			}
			return
		}() && 0 <= a28 && (e.u(250, L(113, [y.z[a28]]), 673, a28, v.w, v.x, -1, !0), a2N())
	}, this.yJ = function() {
		this.nG && a20[0] < a21[0] && a2J()
	}, this.a2U = function(player, a2V) {
		var a2W = L(a2V ? 114 : 115, [y.z[player]]),
			a2W = (e.u(450, a2W, 257, player, a2V ? v.a2X : v.a2Y, v.x, -1, !0), a22.push(player), a23 = !0, c.aH ? Math.max(a21[0], a21[1]) : y.aO[player]),
			a2W = Math.max(a2W, 1);
		a2V ? a20[0] += a2W : a20[1] += a2W, player === c.t && (a1z = a2V ? 1 : -1)
	}, this.bm = function() {
		var a4;
		this.nG && (a4 = g8(), bn.drawImage(canvas, aW.aS - this.aS - ak.gap, a4))
	}, this.a1f = function(player) {
		if (0 !== a24) return !1;
		if (!aa.bY.a1D(1)) return !1;
		if (!aa.bY.bZ(player)) return !1;
		if (10 <= a2b[player] && !aa.bY.a2c(player, 9)) return !1;
		if (!c.aH) {
			player = bc.ql();
			if (player < a26 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.a1e = function(pG) {
		if (!aa.bY.a1D(1)) return !1;
		if (!aa.bY.bZ(pG)) return !1;
		if (!this.nG) return !1;
		for (var ai = a22.length - 1; 0 <= ai; ai--)
			if (a22[ai] === pG) return !1;
		return !0
	}, this.a1d = function(player) {
		a28 = player
	}
}

function a2e() {
	this.ce = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a2f = function() {
		for (var a2g = [], ce = this.ce, b7 = ce.length, ai = 0; ai < b7; ai++) a2g.push(ce[ai]);
		var p7 = ep.buffer.data[12].s3;
		for (ai = 0; ai < b7; ai++)
			if (a2g[ai] === p7) {
				a2g.splice(ai, 1), b7--;
				break
			} a2g.sort(), b7++, a2g.unshift(p7);
		try {
			if ("undefined" == typeof Intl) return a2g;
			for (ai = 0; ai < b7; ai++) {
				var be = new Intl.DisplayNames([a2g[ai]], {
					type: "language"
				}).of(a2g[ai]);
				be !== a2g[ai] && (a2g[ai] = a2g[ai] + ": " + be)
			}
		} catch (cc) {
			console.log("error 3646: " + cc)
		}
		return a2g
	}, this.a2i = function(a2j) {
		for (var be = ep.buffer.data[12].value, b7 = a2j.length, ai = 0; ai < b7; ai++)
			if (be === a2j[ai].split(":")[0]) return ai;
		return 0
	}, this.a2k = function(a2l) {
		if (a2l && !(a2l.length < 2)) {
			a2l = a2l.split("-")[0].toLowerCase();
			for (var ce = this.ce, b7 = ce.length, ai = 0; ai < b7; ai++)
				if (a2l === ce[ai]) return ai
		}
		return -1
	}
}

function a2m() {
	this.b = function() {
		this.ce = [], this.f7 = 0
	}, this.vU = function() {
		return new Uint8Array(this.ce)
	}, this.mD = function(a2n, value) {
		for (var ce = this.ce, gJ = this.f7 + a2n - 1, a2o = 1 + (gJ >> 3); ce.length < a2o;) ce.push(0);
		for (var ai = this.f7; ai <= gJ; ai++) ce[ai >> 3] |= (value >> gJ - ai & 1) << 7 - (7 & ai);
		this.f7 += a2n
	}, this.a2p = function(ce, zk, a2q) {
		var a2r = aa.kt.a2s(ce);
		this.mD(zk, a2r);
		for (var ai = 0; ai < a2r; ai++) this.mD(a2q, ce[ai])
	}, this.a2t = function(ce, zk, a2u) {
		var a2r = aa.kt.a2s(ce);
		this.mD(zk, a2r);
		for (var ai = 0; ai < a2r; ai++) this.a2v(ce[ai], a2u)
	}, this.a2v = function(be, zk) {
		var b7 = be.length;
		this.mD(zk, b7);
		for (var ai = 0; ai < b7; ai++) this.mD(16, be.charCodeAt(ai))
	}, this.a2w = function(pT) {
		var a2x = (pT = pT.toDataURL()).split(",");
		if (a2x.length < 2) console.log("error 266");
		else {
			pT = aa.b1.a2y(pT = a2x[a2x.length - 1], "/", "_"), pT = aa.b1.a2y(pT, "\\+", "-");
			var pT = aa.b1.a2y(pT, "=", ""),
				tu = es.et.wI(pT),
				b7 = tu.length;
			this.mD(30, b7);
			for (var ai = 0; ai < b7; ai++) this.mD(6, tu[ai])
		}
	}
}

function a2z() {
	var a34, a35, a30 = "",
		a31 = 0,
		a32 = 0,
		a33 = -1,
		yj = ["Team", "Zombie", "BR", "1v1"];

	function a36() {
		for (var av = new Date, kx = av.getUTCMinutes(), av = av.getUTCSeconds(), a37 = [], a38 = 0, ai = 0; ai < 6; ai++) a37.push(a38), a37.push(a38 + 2), a37.push(a38 + 5), a37.push(a38 + 7), a38 += 10;
		for (var b7 = a37.length, ai = 1; ai < b7 && !(kx < a37[ai]); ai++);
		ai %= b7;
		av = (a37[0] = 60) * (a37[ai] - kx) - av;
		return av !== a33 && (a30 = yj[ai % 4] + " " + a35 + ": " + a3A(Math.floor(av / 60)) + ":" + a3A(av % 60), a33 = av, a31 = a3B.measureText(a30, a34), a31 += Math.floor(.4 * a32), 1)
	}

	function a3A(mE) {
		return mE < 10 ? "0" + mE : String(mE)
	}
	this.b = function() {
		a35 = L(116)
	}, this.resize = function() {
		a31 = Math.floor((aT.aU.aV() ? .53 : .36) * aW.aX), a32 = Math.floor(.065 * a31), a34 = aa.ab.ac(1, Math.floor(.9 * a32)), a33 += 1e3, a36()
	}, this.b8 = function() {
		a36() && (bc.bj = !0)
	}, this.bm = function(a4) {
		bn.lineWidth = 1 + Math.floor(a32 / 15), bn.translate(aW.aS - a32, a4 + a31), bn.rotate(-Math.PI / 2), bn.fillStyle = v.w, bn.fillRect(0, 0, a31, a32), bn.strokeStyle = v.bs, bn.strokeRect(0, 0, a31, a32 + 10), bn.fillStyle = v.bs, bn
			.font = a34, aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 1), bn.fillText(a30, Math.floor(a31 / 2), Math.floor(.59 * a32)), bn.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a3C() {
	this.yR = null, this.bj = !1, this.iV = 0, this.bd = 56;
	var a3D = 0;

	function a3F() {
		bc.iV = a3D = performance.now(), bc.yR.b8(), window.requestAnimationFrame(a3F)
	}
	this.b = function() {
		this.a3E(), window.requestAnimationFrame(a3F), this.iV = performance.now()
	}, this.a3G = function() {
		c.bl ? (this.yR = new sO, this.yR.b()) : c.aH ? this.yR = new a3H : (this.yR = new a0Q, this.yR.b())
	}, this.a3E = function() {
		this.yR = new a3I, this.bj = !0
	}, this.b8 = function() {
		this.yR.sU++
	}, this.ql = function() {
		return this.yR.sU
	}, this.a3J = function() {
		var av = performance.now();
		av < a3D + 1e3 || (this.iV = av, this.yR.b8())
	}
}

function a3K() {
	this.a3L = new Int16Array(4), this.a3M = new Int16Array(4), this.a3N = null, this.b = function() {
		var ai;
		for (this.a3L[0] = -gW.gX, this.a3L[1] = 1, this.a3L[2] = gW.gX, this.a3L[3] = -1, this.a3N = new Int16Array([-gW.gX, 1 - gW.gX, 1, gW.gX + 1, gW.gX, gW.gX - 1, -1, -gW.gX - 1]), ai = 0; ai < 4; ai++) this.a3M[ai] = 4 * this.a3L[ai]
	}, this.jQ = function() {
		return q.a0(Math.floor(.15 * (1 + .25 * aT.aU.aV()) * aW.aX / fu), 4, 128)
	}, this.a3O = function(ar, id) {
		for (var a3P = this.a3M, ai = 0; ai < 4; ai++) {
			var a1Q = ar + a3P[ai];
			if (j1.oS(a1Q) && j1.j2(a1Q) === id) return !0
		}
		return !1
	}, this.a3Q = function(player, ar) {
		return !j1.zb(ar) && player === j1.zZ(ar)
	}, this.oK = function(oM, oO, ic) {
		return (oM -= this.oN(ic)) * oM + (oO -= this.oP(ic)) * oO
	}, this.a3R = function(gB, gE, cr) {
		gB = this.a3S(gB) - this.a3T(cr), gE = this.a3U(gE) - this.a3V(cr);
		return Math.sqrt(gB * gB + gE * gE)
	}, this.jB = function(oY, oZ) {
		var d8 = this.oN(oY) - this.oN(oZ),
			oY = this.oP(oY) - this.oP(oZ);
		return ~~Math.sqrt(d8 * d8 + oY * oY + .5)
	}, this.a3W = function(oY, oZ) {
		var d8 = this.oN(oY) - this.oN(oZ),
			oY = this.oP(oY) - this.oP(oZ);
		return d8 * d8 + oY * oY
	}, this.oI = function(a3X, a3Y, a3Z, a3a) {
		return (a3X -= a3Z) * a3X + (a3Y -= a3a) * a3Y
	}, this.a3b = function(pG, a3c) {
		return q.aN(a3c * y.ax[pG], 1e3)
	}, this.a3S = function(gB) {
		return 16 * (gB + fv) / fu
	}, this.a3U = function(gE) {
		return 16 * (gE + fw) / fu
	}, this.a3d = function(cS) {
		return 16 * cS / fu
	}, this.zR = function(gB) {
		return Math.floor((gB + fv) / fu)
	}, this.zT = function(gE) {
		return Math.floor((gE + fw) / fu)
	}, this.zV = function(oM, oO) {
		return 1 <= oM && 1 <= oO && oM < gW.gX - 1 && oO < gW.gY - 1
	}, this.oN = function(ic) {
		return ic % gW.gX
	}, this.oP = function(ic) {
		return q.aN(ic, gW.gX)
	}, this.oR = function(oM, oO) {
		return oO * gW.gX + oM
	}, this.a3e = function(oM, oO) {
		return 4 * this.oR(oM, oO)
	}, this.a3f = function(ic) {
		return this.oQ(this.oN(ic), this.oP(ic))
	}, this.oQ = function(oM, oO) {
		return 0 < oM && oM < gW.gX - 1 && 0 < oO && oO < gW.gY - 1
	}, this.j3 = function(ic) {
		return ic << 2
	}, this.a3g = function(ar) {
		return ar >> 2
	}, this.a3h = function(ic) {
		return gW.gX * this.oP(ic) * 256 + (this.oN(ic) << 4)
	}, this.zt = function(ic) {
		return this.a3h(ic) + 8 + (gW.gX << 7)
	}, this.iy = function(cr) {
		return gW.gX * (this.a3V(cr) >> 4) + (this.a3T(cr) >> 4)
	}, this.tB = function(cr) {
		cr = this.iy(cr);
		return (this.oN(cr) >> 5) + bQ.fT.sx * (this.oP(cr) >> 5)
	}, this.a3T = function(cr) {
		return cr % (gW.gX << 4)
	}, this.a3V = function(cr) {
		return q.aN(cr, gW.gX << 4)
	}, this.ua = function(ic, vA) {
		return ic + this.a3L[vA]
	}, this.a3i = function(ar, vA) {
		return ar + this.a3M[vA]
	}, this.a3j = function(oY, oZ) {
		var d8 = this.oN(oZ) - this.oN(oY),
			oZ = this.oP(oZ) - this.oP(oY);
		return Math.abs(d8) >= Math.abs(oZ) ? 1 + 2 * (d8 < 0) : 2 * (0 < oZ)
	}, this.a3k = function(player) {
		return this.oR(y.oE[player] + y.oF[player] >> 1, y.oG[player] + y.oH[player] >> 1)
	}, this.a3l = function(player) {
		return this.oR(cN.oD(y.oE[player], y.oF[player]), cN.oD(y.oG[player], y.oH[player]))
	}
}

function a3m() {
	var a3p, a3q, qO = document.createElement("div"),
		a3n = document.createElement("div"),
		a3o = document.createElement("div"),
		qQ = document.createElement("div"),
		kA = [],
		yj = [L(117), L(118), L(119), L(120), L(121), L(122), L(123), L(124)],
		a3r = [1, 2, 3, 0, 9, 10, 11, 13];

	function a3s(ai) {
		dx.ej(8, 0, new ex(21, {
			jb: a3r[ai],
			mS: 0,
			mT: 10
		}))
	}
	this.show = function() {
			this.er(dx.fH.a40), document.body.appendChild(qO)
		}, this.du = function() {
			dx.removeChild(document.body, qO)
		}, this.er = function(a40) {
			for (var a41 = [3, 0, 1, 2, 4, 5, 6, 7], ai = 0; ai < kA.length; ai++) {
				var aS = a40[ai];
				a3p[a41[ai]][1].kB.textContent = aS || ""
			}
		}, this.resize = function() {
			var ai, bg = ak.gap,
				aY = aa.ab.a42(.085),
				aS = Math.min(4 * aY, aW.aS - 2 * bg),
				b7 = kA.length;
			for (aa.ab.a43(qO, bg, aW.aY - bg - aY, aS, aY), aa.ab.eA(qO), aa.ab.eA(a3n, 6), ai = 0; ai < b7 - 1; ai++) aa.ab.eA(kA[ai].button, 6);
			for (ai = 0; ai < b7; ai++) a3p[ai][0].resize(), a3p[ai][1].resize();
			for (kA[0].a3 = 0, kA[0].button.style.left = aa.ab.e9(kA[0].a3), kA[0].button.style.width = aa.ab.a44(1.7 * aY), ai = 1; ai < b7; ai++) kA[ai].a3 = kA[ai - 1].a3 + kA[ai - 1].button.offsetWidth, kA[ai].button.style.left = aa.ab.e9(kA[ai]
				.a3);
			if (!a3q) {
				if (!np.a45()) return;
				(a3q = np.get(14)).style.width = "24%", a3q.style.position = "absolute", a3n.appendChild(a3q)
			}
			a3q.style.left = aa.ab.e9(0), a3q.style.top = "7%", a3o.qf && (a3o.scrollLeft = a3o.qf)
		}, qO.style.position = "absolute", a3n.style.width = "25%", a3n.style.height = "100%", a3n.style.backgroundColor = v.iM, a3o.style.position = "absolute", a3o.style.width = "75%", a3o.style.height = "100%", a3o.style.backgroundColor = v.iM,
		a3o.style.top = a3o.style.right = aa.ab.e9(0), aa.ab.dk(a3o), qQ.style.height = qQ.style.maxHeight = "100%", kA.push(new eG("", function() {
			a3s(0)
		}, v.a3t)), kA.push(new eG("", function() {
			a3s(1)
		}, v.a3u)), kA.push(new eG("", function() {
			a3s(2)
		}, v.a3v)), kA.push(new eG("", function() {
			a3s(3)
		}, v.a3w)), kA.push(new eG("", function() {
			a3s(4)
		}, v.a3x)), kA.push(new eG("", function() {
			a3s(5)
		}, v.a3y)), kA.push(new eG("", function() {
			a3s(6)
		}, v.a3x)), kA.push(new eG("", function() {
			a3s(7)
		}, v.bs)), a3p = new Array(kA.length);
	for (var ai = 0; ai < kA.length; ai++) kA[ai].button.style.position = "absolute", a3p[ai] = [new a3z(yj[ai], kA[ai].button, .25, .45), new a3z("", kA[ai].button, .53, .84, 1)], kA[ai].button.style.height = kA[ai].button.style.maxHeight = "100%",
		kA[ai].button.top = aa.ab.e9(0), qQ.appendChild(kA[ai].button);
	a3o.appendChild(qQ), qO.appendChild(a3n), qO.appendChild(a3o)
}

function a46() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 !== c.data.spawningType || aa.kt.a48(c.data.spawningData) || (c.data.spawningType = 0), 2 !== c.data.spawningType && (c.data.spawningData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.spawningType && aa.kt.x4(x0.eZ(), c.data.spawningData, gW.tz - 1)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(125), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3,
			ot = (f2.f4(L(94)), [L(126), L(127), L(97)]),
			value = c.data.spawningType;
		0 === c.data.gameMode && (ot.splice(1, 1), 0 < value) && (value = 1);
		f2.vx(new r2({
			ot: ot,
			value: value
		}, function(f7) {
			x2(), c.data.spawningType = f7, 0 === c.data.gameMode && 1 === f7 && (c.data.spawningType = 2), 2 !== c.data.spawningType || c.data.spawningData || (c.data.spawningData = new Uint16Array(2 * c.c2)), dx.ej(24)
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2 = new f3;
		f2.f4("My Spawn"), f2.f5(new a4A({
			value: c.data.selectableSpawn
		}, L(128), function(value) {
			c.data.selectableSpawn = value
		})), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3,
			a4B = (f2.f4("Seed"), new f6({
				f7: -1,
				value: c.data.spawningSeed
			}, 1, 0, function(cc) {
				var value = Math.abs(Math.floor(cc.target.value)) % 16384;
				cc.target.value = c.data.spawningSeed = value
			}));
		f2.f5(a4B), f2.f5(new f9([new eG(L(126), function() {
			a4B.cc.value = c.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2;
		2 === c.data.spawningType && ((f2 = new f3).f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.spawningData, 2)), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function a4C() {
	this.a4D = new a4E, this.b = function() {
		this.a4D.resize()
	}
}

function a4F() {
	function a4Q(a3, b7, a4, bU, a4K, a4Z) {
		if (!(a4 < 1 || a4K < a4))
			for (var ai = 0; ai <= b7; ai++) {
				var ar = ix.a3e(a3, a4);
				if (bU(ar)) return ar >> 2;
				a3 += a4Z
			}
		return -1
	}

	function a4U(a4, b7, a3, bU, a4J, a4Z) {
		if (!(a3 < 1 || a4J < a3)) {
			b7 = Math.max(b7, 0);
			for (var ai = 0; ai <= b7; ai++) {
				var ar = ix.a3e(a3, a4);
				if (bU(ar)) return ar >> 2;
				a4 += a4Z
			}
		}
		return -1
	}

	function a4Y(oY, oZ, jC) {
		return -1 !== oZ && (-1 === oY || ix.a3W(oZ, jC) < ix.a3W(oY, jC)) ? oZ : oY
	}
	this.a1L = function(jC) {
		return this.kH(jC, function(ar) {
			return j1.uZ(ar)
		})
	}, this.a1S = function(jC) {
		return this.kH(jC, function(ar) {
			return j1.a4G(ar, c.t)
		})
	}, this.kH = function(jC, bU) {
		return function(jC, a4H, bU) {
			for (var oM = ix.oN(jC), oO = ix.oP(jC), a4J = gW.gX - 2, a4K = gW.gY - 2, a4L = -1, cS = 0; cS < a4H; cS++) {
				var a4M = Math.max(oM - cS, 1),
					a4N = Math.max(oO - cS, 1),
					a4O = Math.min(oM + cS, a4J),
					a4P = Math.min(oO + cS, a4K),
					oY = a4Q(oM, a4O - oM, oO - cS, bU, a4K, 1),
					oZ = a4Q(oM - 1, oM - a4M - 1, oO - cS, bU, a4K, -1),
					a4O = a4Q(oM, a4O - oM, oO + cS, bU, a4K, 1),
					a4M = a4Q(oM - 1, oM - a4M - 1, oO + cS, bU, a4K, -1),
					a4T = a4U(oO, a4P - oO - 1, oM - cS, bU, a4J, 1),
					a4V = a4U(oO - 1, oO - a4N - 2, oM - cS, bU, a4J, -1),
					a4P = a4U(oO, a4P - oO - 1, oM + cS, bU, a4J, 1),
					a4N = a4U(oO - 1, oO - a4N - 2, oM + cS, bU, a4J, -1);
				if (a4L = a4Y(a4L, oY, jC), a4L = a4Y(a4L, oZ, jC), a4L = a4Y(a4L, a4O, jC), a4L = a4Y(a4L, a4M, jC), a4L = a4Y(a4L, a4T, jC), a4L = a4Y(a4L, a4V, jC), a4L = a4Y(a4L, a4P, jC), 0 <= (a4L = a4Y(a4L, a4N, jC)) && cS * cS >= ix
					.a3W(a4L, jC)) return a4L
			}
			return -1
		}(jC, ix.jQ(), bU)
	}
}

function a4a() {
	this.lq = function(r9, lf) {
		jW.b(lf), 0 === jW.size ? jZ.fH.ja(r9, 3205) : ((0 === jW.jc(1) ? function(r9) {
			var a4d = jW.jc(6);
			0 === a4d ? function(r9) {
					if (0 === r9 && 8 !== qp.tW()) {
						dx.fH.a4w();
						for (var a4x = jW.jc(12), a4y = jW.jc(6), ce = new Array(a4x), ai = 0; ai < a4x; ai++) ce[ai] = jW.jc(a4y);
						a4z.a50(ce)
					}
				}(r9) : 2 === a4d ? jZ.a4f.a4g(r9) : 3 === a4d || 4 === a4d ? a4h.b() : 5 === a4d ? jZ.a4i.a4j() : 9 === a4d ? jZ.a4i.a4k(r9) : 10 === a4d ? jZ.a4l.a4m() : 11 === a4d ? jZ.a4i.a4n(r9) : 12 === a4d ? jZ.a4l.a4o() :
				13 === a4d ? jZ.a4p.jV() : 14 === a4d ? jZ.a4p.jm() : 15 === a4d ? jZ.a4i.a4q() : 16 === a4d ? jZ.a4f.a4r(r9) : 17 === a4d ? jZ.a4f.a4s(r9) : 19 === a4d ? jZ.a4f.a4t(r9) : 20 === a4d ? jZ.a4i.a4u(r9) : 21 !== a4d &&
				22 !== a4d && 23 === a4d && jZ.a4i.a4v(r9)
		} : function(r9) {
			if (8 !== qp.tW() && !a4h.tV()) return;
			if (r9 !== jZ.fH.qt) jZ.fH.ja(r9, 3244);
			else if (0 === jW.jc(1)) bc.yR.a0U(jW.lf);
			else {
				var ai, r9 = jW.jc(2);
				if (0 === r9) {
					var m4, tQ = jW.jc(9);
					0 !== y.an[tQ] && 0 !== y.an[c.t] && (m4 = jW.jc(10), e.a57(tQ, c.t, m4), gN.a58(tQ, 1, m4))
				} else if (1 === r9) ! function() {
					var tQ = jW.jc(9);
					0 !== y.an[tQ] && 0 !== y.an[c.t] && a59.lN(0, [tQ], !0) && e.a5A(tQ, 1)
				}();
				else if (2 === r9) ! function() {
					var tQ = jW.jc(9),
						target = jW.jc(9);
					0 !== y.an[tQ] && 0 !== y.an[target] && 0 !== y.an[c.t] && a59.lN(1, [tQ], !0) && (gN.a58(tQ, 3, 96), gN.a58(target, 4, 96), e.a5B(tQ, target))
				}();
				else if (lh.vf && !lh.vg) {
					var b7 = 540;
					for (jX.kX(17287), jX.mD(1, 0), jX.mD(6, 10), b7 = Math.min(ss.st.xc.length, 540), ai = 0; ai < b7; ai++) jX.mF(32, ss.st.xc[ai]);
					jZ.fH.send(jZ.fH.qt, jX.lf)
				}
			}
		})(r9), bc.a3J())
	}
}

function a5C() {
	var kA, a3, a4, a5D, a5E, a5F, iV, a5G, a5H, a5I, a5J, gap, zoom, a5K, a5L;

	function a5o(gP, gQ, ar) {
		j1.uZ(ar) || -1 === (gP = bQ.bR.ze(gP, gQ)) ? e.a5w(ar) : e.a5x(gP)
	}

	function a5c(a5G) {
		for (var ai = a5K.length - 1; 0 <= ai; ai--)
			if (a5K[ai] === a5G) return 1
	}

	function a5a(v9) {
		var ai, b7;
		if (-1 !== v9)
			for (b7 = kA.length, ai = 0; ai < b7; ai++)
				if (kA[ai].nG && kA[ai].a3 + 1 === v9 % 4 && kA[ai].a4 + 1 === v9 >> 2) return ai;
		return -1
	}

	function a5Y(gP, gQ) {
		var bg = gap / 2;
		return gP < a3 - a5D - 3 * bg || a3 + 3 * a5D + 5 * bg < gP || gQ < a4 - a5D - 3 * bg || a4 + 2 * a5D + 3 * bg < gQ ? -1 : 4 * (gQ < a4 - bg ? 0 : gQ < a4 + a5D + bg ? 1 : 2) + (gP < a3 - bg ? 0 : gP < a3 + a5D + bg ? 1 : gP < a3 + 2 * a5D +
			3 * bg ? 2 : 3)
	}
	this.a5M = function() {
		var ai, cT, a5P = [v.a5Q, v.a5R, v.a5S, v.a5T, v.a5U];
		for (kA = new Array(10), ai = 0; ai < 10; ai++) kA[ai] = {
			id: ai,
			nG: !1,
			cf: 0,
			canvas: [],
			a3: 0,
			a4: 0
		};
		for (kA[0].colors = [0, 1, 2, 3], kA[0].a3 = 0, kA[0].a4 = 0, kA[1].colors = [1, 4], kA[1].a3 = 1, kA[1].a4 = 0, kA[2].colors = [0, 1], kA[2].a3 = -1, kA[2].a4 = 0, kA[3].colors = [0], kA[3].a3 = 0, kA[3].a4 = 0, kA[4].colors = [0, 2],
			kA[4].a3 = 1, kA[4].a4 = 1, kA[5].colors = [3], kA[5].a3 = 0, kA[5].a4 = -1, kA[6].id = 20, kA[6].colors = [0], kA[6].a3 = 1, kA[6].a4 = -1, kA[7].id = 21, kA[7].colors = [0], kA[7].a3 = 0, kA[7].a4 = 1, kA[8].id = 16, kA[8]
			.colors = [0], kA[8].a3 = 0, kA[8].a4 = 0, kA[9].id = 10, kA[9].colors = [4], kA[9].a3 = 2, kA[9].a4 = 0, ai = 0; ai < 10; ai++)
			for (cT = 0; cT < kA[ai].colors.length; cT++) kA[ai].canvas.push(function(id, gu) {
				if (id < 20) return aa.canvas.a2A(np.get(3), id, gu);
				var gu = np.get(3).height,
					pT = aa.ab.pR(gu, gu),
					pU = aa.ab.getContext(pT);
				20 === id ? pU.drawImage(np.get(18), 0, 0) : 21 === id && m6.h9.a5V(m6.h7.pa + m6.h7.pf, pU, 0, 0, gu);
				return pT
			}(kA[ai].id, a5P[kA[ai].colors[cT]]))
	}, this.a5O = function() {
		return kA
	}, this.b = function() {
		a5K = [], a3 = a4 = iV = 0, a5E = a5F = -1e3, this.resize()
	}, this.resize = function() {
		a5D = Math.floor((aT.aU.aV() ? .075 : .0468) * aW.aX), zoom = a5D / np.get(3).height, gap = Math.floor(a5D / 3)
	}, this.a5W = function(gP, gQ) {
		return !!this.nG() && (bc.bj = !0, !!m6.h9.gF(gP, gQ, a5H) || (gP = function(gP, gQ) {
			a5F = a5E = -1e3;
			var a5Z = a5a(a5Y(gP, gQ));
			if (-1 === a5Z) return 0;
			if (1 !== kA[a5Z].colors[kA[a5Z].cf])
				if (5 === a5Z) {
					if (! function() {
							var av = performance.now();
							a5L + 4e3 < av && (a5K = []);
							a5L = av
						}(), a5c(a5G)) return 1;
					a5K.push(a5G), 16 < a5K.length && a5K.shift()
				} else if (6 === a5Z) {
				for (var ai = a5K.length - 1; 0 <= ai; ai--) 0 === y.an[a5K[ai]] && a5K.splice(ai, 1);
				0 < a5K.length && (a59.lJ(1, a5K, !0) && ss.bY.a5d(a5K, a5G), a5K = [])
			} else if (2 === a5Z) a5e.ib(a5G) && ss.a1M.a5f(nl.a1R(), a5G);
			else if (3 === a5Z) c.ao && ss.a1M.xm(a5I);
			else if (0 === a5Z)
				if (0 === kA[0].cf) {
					if (c.a5g && at.b5() < 350) return 1;
					a5h.a5i(4), ss.a1M.xn(nl.a1R(), a5G)
				} else a1U.a1V(a5G, nl.a1R());
			else if (1 === a5Z) ss.a1M.xp(nl.a1R(), a5I);
			else if (9 === a5Z) ss.a1M.xq(nl.a1R());
			else {
				if (7 === a5Z) return a5h.a5i(0), m6.h9.show(gP, gQ), 2;
				if (4 === a5Z) a59.lJ(0, [a5G], !0) && ss.bY.a5j(a5G);
				else {
					if (8 !== a5Z) return 0;
					ss.a1M.xw(nl.a1R(), a5J, a5G)
				}
			}
			return 1
		}(gP, gQ), this.du(), 2 === gP && (m6.h9.nG = !0), 0 < gP))
	}, this.a5X = function(gP, gQ) {
		this.nG() || (a5E = gP, a5F = gQ, iV = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = ix.zR(mouseX),
			coordY = ix.zT(mouseY),
			point = ix.j3(ix.oR(coordX, coordY));
		ix.zV(coordX, coordY) && a5o(mouseX, mouseY, point)
	}, this.click = function(gP, gQ, a5k) {
		var oM = ix.zR(gP),
			oO = ix.zT(gQ),
			ic = ix.oR(oM, oO),
			ar = ix.j3(ic),
			a5l = (aT.aU.aV() ? .025 : .0144) * aW.aX,
			av = performance.now();
		return !(Math.abs(gP - a5E) > a5l || Math.abs(gQ - a5F) > a5l || iV + 500 < av || (iV = av, di.dj() && (di.zS = gP, di.zU = gQ, a5m.b8(1), a5n.b8(1)), !ix.zV(oM, oO))) && (a5k ? (a5o(gP, gQ, ar), !1) : nK.nL || this.nG() || !aa.bY.bZ(c
			.t) || c.bl ? (this.du(), !1) : (c.ao ? 0 <= (a5I = a1K.a1L(ic)) && (kA[3].nG = !0) : 2 === c.bH ? j1.zY(ar) && (a5G = j1.zZ(ar), aa.bY.o2(a5G) || (kA[0].nG = !0, kA[0].cf = 1, kA[7].nG = !0)) : (bQ.fo.ib(c.t, ic) && (kA[0].nG = !
				0, kA[0].cf = 1, kA[1].nG = !0, kA[1].cf = 0, kA[9].nG = !0, kA[9].cf = 0), bQ.fj.a1Y(c.t, ic) && (kA[0].nG = !0, kA[0].cf = 1, kA[1].nG = !0, kA[1].cf = 1, a5I = ij.ik[7]), j1.zc(ar) ? (a5J = a1N.a1O.a1P(ar)) && (
				a5l = ix.j3(a5J), kA[8].nG = !0, a5G = j1.zb(a5l) ? c.c2 : j1.zZ(a5l)) : (j1.a5q(c.t, ar) && (a5H = c.t, kA[0].nG = !0, kA[0].cf = 1, kA[7].nG = !0), -1 !== (av = a1K.a1S(ic)) && (j1.zb(av << 2) ? (a5G = c.c2, a0f.a1T(
				c.t) ? (kA[0].nG = !0, kA[0].cf = 0) : a0n.q7(c.t) && (kA[0].nG = !0, kA[0].cf = 3)) : (a5G = j1.zZ(av << 2), kA[0].cf = 1, kA[5].nG = function(a5G) {
				return !aa.bY.o2(a5G) && !a5c(a5G) && a59.lJ(1, [a5G], !1)
			}(a5G), kA[7].nG || aa.bY.o2(a5G) || (a5H = a5G, kA[7].nG = !0), kA[4].nG = !aa.bY.o2(a5G) && !gN.a5t(a5G) && a59.lJ(0, [a5G], !1), kA[6].nG = function(a5G) {
				if (0 === a5K.length) return !1;
				if (performance.now() > a5L + 4e3) return !(a5K = []);
				return !a5c(a5G) && ! function(a5G) {
					var ai;
					if (c.bJ)
						for (ai = a5K.length - 1; 0 <= ai; ai--)
							if (!a0f.a1W(a5G, a5K[ai])) return 1;
					return
				}(a5G)
			}(a5G), a0f.a1W(a5G, c.t) ? (a0f.a1X(c.t, a5G) ? (kA[0].cf = 0, kA[0].nG = !0) : a0n.q7(c.t) && (kA[0].cf = 3, kA[0].nG = !0), kA[0].nG = this.a5v()) : (kA[2].nG = !0, a5e.ib(a5G) ? kA[2].cf = 0 : kA[2].cf = 1,
				kA[0].nG = !0))))), this.a5p(gP, gQ)))
	}, this.a5p = function(gP, gQ) {
		return a3 = gP - Math.floor(a5D / 2), a4 = gQ - Math.floor(a5D / 2), !!this.nG()
	}, this.gK = function(gP, gQ) {
		return !!this.nG() && (m6.h9.nG ? !m6.h9.a5z(gP, gQ) && (m6.h9.nG = !1, bc.bj = !0) : function(nU, gP, gQ) {
			gP = a5Y(gP, gQ);
			if (0 <= a5a(gP)) return !1;
			if ((1 === gP || 6 === gP) && 0 <= a5a(2)) return !1;
			if ((6 === gP || 9 === gP) && 0 <= a5a(10)) return !1;
			return nU.du(), bc.bj = !0
		}(this, gP, gQ))
	}, this.du = function() {
		for (var ai = kA.length - 1; 0 <= ai; ai--) kA[ai].nG = !1, kA[ai].cf = 0;
		m6.h9.nG = !1
	}, this.nG = function() {
		return this.a5v() || m6.h9.nG
	}, this.a5v = function() {
		for (var b7 = kA.length, ai = 0; ai < b7; ai++)
			if (kA[ai].nG) return !0;
		return !1
	}, this.bm = function() {
		if (this.nG())
			if (m6.h9.nG) m6.h9.bm();
			else {
				var ai, pU = bn,
					cT = kA,
					b7 = cT.length,
					a64 = (a5D + gap) / zoom;
				for (pU.imageSmoothingEnabled = !0, pU.setTransform(zoom, 0, 0, zoom, a3, a4), ai = 0; ai < b7; ai++) cT[ai].nG && bn.drawImage(cT[ai].canvas[cT[ai].cf], cT[ai].a3 * a64, cT[ai].a4 * a64);
				pU.imageSmoothingEnabled = !1, pU.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a65() {
	this.b = function() {
		if (0 === c.data.sResourcesType) {
			for (var zu = c.aI, ax = y.ax, ai = 0; ai < zu; ai++) ax[ai] = 512;
			var zv = c.cZ,
				a69 = yB.a69,
				po = yB.po;
			for (ai = zu; ai < zv; ai++) ax[ai] = a69[po[ai]]
		} else(1 === c.data.sResourcesType ? function() {
			for (var b7 = c.cZ, ax = y.ax, sResourcesValue = c.data.sResourcesValue, ai = 0; ai < b7; ai++) ax[ai] = sResourcesValue
		} : function() {
			for (var b7 = c.cZ, ax = y.ax, sResourcesData = c.data.sResourcesData, ai = 0; ai < b7; ai++) ax[ai] = sResourcesData[ai]
		})();
		pz.qH[8] = y.ax[c.t]
	}
}

function a6A() {
	var a6B;
	this.cw = null, this.a6C = 0, this.b = function() {
		a6B = [], 9 === c.d && this.a6D()
	}, this.a6D = function() {
		this.cw = [0, 0, 0, 0, 0, 0];
		for (var a6E = [250, 226, 166, 148, 100, this.a6C = 0, 0, 0], bu = [0, 8, 24, 30, 46, 70, 256, 333], a6F = [0, 0, 3, 9, 17, 25, 256, 179], aY = c.aI, ai = 1; ai < a6E.length; ai++)
			if (aY <= bu[ai]) {
				this.a6C = a6E[ai - 1] - q.aN((aY - bu[ai - 1]) * (a6E[ai - 1] - a6E[ai]), bu[ai] - bu[ai - 1]), this.cw[5] = a6F[ai - 1] - q.aN((aY - bu[ai - 1]) * (a6F[ai - 1] - a6F[ai]), bu[ai] - bu[ai - 1]), this.cw[0] = c.c2 - aY - this
					.a6C - this.cw[5];
				break
			} c.aL = c.c2 - c.aI, c.data.numberTeams = (0 < c.aI) + (0 < c.aL), c.data.playerCount = c.cZ = c.aI + c.aL, c.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, c.aI + this.a6C, c.aL - this.a6C]), c.qr.a6G()
	}, this.a6H = function(player) {
		a6B.push({
			player: player,
			cW: 14 + cN.cO(20)
		})
	}, this.b8 = function() {
		if (9 === c.d)
			for (var ai = a6B.length - 1; 0 <= ai; ai--) --a6B[ai].cW <= 0 && (gN.a58(a6B[ai].player, 0, m6.h7.pa + m6.h7.pc), a6B.splice(ai, 1))
	}
}

function dc(dP, dQ) {
	var a6O, self, a6J = document.createElement("div"),
		a6K = document.createElement("div"),
		mw = document.createElement("div"),
		a6L = null,
		a6P = (this.kF = new f6({
			value: "",
			f7: -1
		}, 0, a6M, function(cc) {
			cc.target.value = aa.b1.a6U(cc.target.value), a6L.kB.textContent = 127 - cc.target.value.length
		}), 0),
		ls = 1,
		a6Q = 0,
		a6R = 1048575;

	function a6M() {
		dP(), a6L.kB.textContent = 127
	}

	function m0(lz, ht) {
		ht && (ht.he = 1, lz.appendChild(hq.h7.transform(ht)))
	}

	function lu(aq) {
		ls ? a6J.scrollTop = a6J.scrollHeight : aq && (a6J.scrollTop = a6Q)
	}
	this.reset = function(a6V) {
			a6R = 1048575, a6K.textContent = "", a6V || this.kQ()
		}, this.kQ = function() {
			var hi = hq.fH.kD[0],
				hi = hq.fH.i1[hi],
				i3 = hi.i3,
				b7 = i3.length,
				cX = 1048575 === a6R ? 0 : b7 - (hi.a6W - a6R + 1048575) % 1048575;
			if (a6R = hi.a6W, !(b7 <= (cX = Math.max(cX, 0)))) {
				for (var lz = document.createDocumentFragment(), ai = cX; ai < b7; ai++) m0(lz, hq.bR.hb(i3[ai], hq.bR.hP(i3[ai])));
				a6K.appendChild(lz), lu()
			}
		}, this.a6X = function(hU) {
			var lz = document.createDocumentFragment();
			m0(lz, hU), a6K.appendChild(lz), lu()
		}, this.show = function(r1) {
			r1.appendChild(a6J), r1.appendChild(mw), this.resize(r1)
		}, this.du = function(r1) {
			dx.removeChild(r1, a6J), dx.removeChild(r1, mw)
		}, this.resize = function(r1) {
			a6P = r1 ? r1.offsetHeight : a6P;
			var r1 = aa.ab.e1(.04, .75),
				qY = Math.max(r1, a6P - r1),
				a6Y = aW.aS / aW.eB,
				a6Z = .7 * a6Y,
				a6a = aa.ab.e9(a6P - r1 - qY),
				qY = (mw.style.height = aa.ab.e9(r1), a6J.style.height = aa.ab.e9(qY), aW.aY > aW.aS || aT.aU.aV() ? (mw.style.top = a6a, a6J.style.top = aa.ab.e9(a6P - qY), aa.ab.eA(a6J, 8)) : (a6J.style.top = a6a, mw.style.top = aa.ab.e9(a6P - r1),
						aa.ab.eA(a6J, 2)), this.kF.cc.style.width = aa.ab.e9(a6Z), this.kF.cc.style.fontSize = a6O.button.style.fontSize = aa.ab.e9(.5 * r1), aa.ab.eA(this.kF.cc, 6), a6O.button.style.left = aa.ab.e9(a6Z), a6O.button.style.width = aa
					.ab.e9(a6Y - a6Z), .385 * r1);
			aT.aU.aV() && (qY *= .8 - .12 * (aW.aS > aW.aY)), a6K.style.marginLeft = a6K.style.marginRight = aa.ab.e9(.5 * qY), a6K.style.fontSize = aa.ab.e9(qY), lu(1)
		}, (self = this).kF.cc.a6S = 127, a6J.style.position = "absolute", a6J.style.left = "0", a6J.style.width = "100%", a6J.style.overflowX = "hidden", a6J.style.overflowY = "auto", a6J.style.font = "inherit", a6J.style.backgroundColor = v.a5S,
		a6J.addEventListener("scroll", function() {
			a6Q = a6J.scrollTop, ls = a6Q < a6J.scrollHeight - a6J.clientHeight - 2 ? 0 : 1
		}), a6K.style.font = "inherit", mw.style.position = "absolute", mw.style.left = "0", mw.style.width = "100%", self.kF.cc.setAttribute("placeholder", L(129)), self.kF.cc.style.position = "absolute", self.kF.cc.style.top = "0", self.kF.cc.style
		.left = "0", self.kF.cc.style.height = "100%", self.kF.cc.style.backgroundColor = v.a6T, self.kF.cc.style.textAlign = "center", (a6O = new eG(L(104), a6M)).button.top = "0", a6O.button.style.position = "absolute", a6O.button.style.height =
		"100%", a6O.iE(v.k1), a6L = new k9("127", a6O.button, 1, 1), a6J.appendChild(a6K), mw.appendChild(self.kF.cc), mw.appendChild(a6O.button)
}

function a6c() {
	this.data = new a2e;
	var a6d = (new a6e).L84,
		a6h = (this.a6f = a6d, !(this.a6g = "en"));
	this.b = function() {
		var be, ce;
		a6h = !1, ("en" === (be = ep.buffer.data[12].value).split("-")[0].toLowerCase() ? (vi.a6f = a6d, vi.a6g = be, 1) : ep.buffer.data[12].value === ep.buffer.data[145].value && 0 < ep.buffer.data[146].value && (be = ep.buffer.data[146].value,
			(ce = ep.ef.a6p(be, !1)).length === be) && !!aa.kt.a6q(ce) && function(ce) {
			for (var b7 = ce.length, aY = 0; aY < b7; aY++) ce[aY] = ce[aY].replace("&#39;", "'");
			var a6s = ep.ef.a6p(b7, !0);
			if (b7 !== a6s.length) return !1;
			if (!aa.kt.a6q(a6s)) return !1;
			for (var b6 = a6d.length, a6t = new Array(b6), a6u = b6 === b7, cW = Math.min(b7, b6), ai = 0; ai < b6; ai++)
				if (a6t[ai] = a6d[ai], ai < b7 && a6s[ai] === a6t[ai]) a6t[ai] = ce[ai];
				else {
					a6u = !1;
					for (var cT = 0; cT < cW; cT++)
						if (a6s[cT] === a6t[ai]) {
							a6t[ai] = ce[cT];
							break
						}
				} return vi.a6f = a6t, vi.a6g = ep.buffer.data[12].value, a6u
		}(ce)) || (a6h = !0)
	}, this.a6m = function() {
		cD.c7(), yB.c7(), nw.c7(), pz.c7(), a6n.b(), hX = new yf
	}, this.a6o = function() {
		return this.a6f === a6d || !a6d.length
	}, this.a6v = function() {
		var a6w;
		return !!a6h && (a6h = !1, 0 !== a6d.length) && (a6w = ep.buffer.data[12].value, jZ.rs.vX(0, a6w.slice(0, 20)), !0)
	}, this.a6x = function(ce) {
		ce.length !== a6d.length ? 8 === dx.jf && dx.jg().jh(30, 0, 1) : (this.a6f = ce, this.a6g = ep.buffer.data[12].value, ep.eq.er(145, this.a6g), ep.eq.er(146, ce.length), ep.ef.a6y(ce, !1), ep.ef.a6y(a6d, !0), 8 === dx.jf ? dx.jg().jh(30) :
			0 === qp.tW() && 5 === dx.jf && dx.fH.a6z())
	}, this.vj = function() {
		var s4, ce = navigator.languages;
		return ce && ce.length ? (s4 = Math.max(vi.data.a2k(ce[0]), 0), 1 === ce.length ? [s4, s4] : [s4, Math.max(vi.data.a2k(ce[1]), 0)]) : [0, 0]
	}
}

function a70() {
	var eh, a71, a72, a73, a74, a75, colors = [0, 0, 0],
		a76 = -1;

	function a7A(ai) {
		var a7B = a71.a4 + ai * (ak.gap + a75);
		bn.fillStyle = "rgb(" + (0 === ai ? 150 : 2 === ai ? 30 : 0) + "," + (1 === ai ? 130 : 2 === ai ? 30 : 0) + "," + (2 === ai ? 220 : 0) + ")", bn.fillRect(a73, a7B, colors[ai] * a74, a75), bn.strokeStyle = v.w, bn.strokeRect(a73, a7B, a74,
			a75), bn.fillStyle = v.w, bn.font = aa.ab.ac(0, .32 * a75), aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 0), bn.fillText(L(0 === ai ? 132 : 1 === ai ? 133 : 134) + a77(ai), a73 + ak.gap, a7B + .53 * a75)
	}

	function a77(ai, a7C) {
		return a7C = a7C || 256, q.a0(Math.floor(a7C * colors[ai]), 0, a7C - 1)
	}

	function a7D(gP, gQ) {
		return !(gP < a73 || gQ < a71.a4 || gP > a71.a3 + a71.aS || gQ > a71.a4 + a71.aY)
	}
	this.show = function() {
		var d0 = ep.buffer.data[121].value;
		colors[0] = (d0 >> 12) / 63, colors[1] = (d0 >> 6 & 63) / 63, colors[2] = (63 & d0) / 63, eh.show(), this.resize()
	}, this.du = function() {
		ep.eq.er(121, (a77(0, 64) << 12) + (a77(1, 64) << 6) + a77(2, 64)), eh.du()
	}, this.resize = function() {
		eh.resize(), a71.resize();
		var cY = aW.eB,
			qd = eh.qX(),
			a78 = (a71.a4 = Math.max(a71.a4, cY * qd.qY + ak.gap), cY * qd.qb - 2 * ak.gap);
		a71.aY = Math.min(a71.aY, a78), a71.aS = 2 * a71.aY, a71.a4 = cY * qd.qY + .5 * (cY * qd.qb - a71.aY), a71.a3 = .5 * (aW.aS - a71.aS), a72 = .25 * a71.aS, a73 = a71.a3 + a72 + ak.gap, a74 = a71.aS - a72 - ak.gap, a75 = (a71.aY - 2 * ak
			.gap) / 3
	}, this.bm = function() {
		var mj, bg, cT;
		eh.bm(), bn.lineWidth = ak.o5, mj = a77(0), bg = a77(1), cT = a77(2), bn.fillStyle = "rgb(" + mj + "," + bg + "," + cT + ")", bn.fillRect(a71.a3, a71.a4, a72, a71.aY), bn.strokeStyle = v.w, bn.strokeRect(a71.a3, a71.a4, a72, a71.aY), bn
			.fillStyle = mj + bg + cT < 306 && bg < 150 ? v.w : v.bs, aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 1), bn.font = aa.ab.ac(0, .1 * a71.aY), bn.rotate(-Math.PI / 2), bn.fillText(L(131), -a71.a4 - .5 * a71.aY, a71.a3 + .5 * a72),
			bn.setTransform(1, 0, 0, 1, 0, 0), a7A(0), a7A(1), a7A(2)
	}, this.gF = function(gP, gQ) {
		a7D(gP, gQ) && (a76 = q.a0(Math.floor((gQ - a71.a4) / (a75 + .75 * ak.gap)), 0, 2), colors[a76] = q.a0((gP - a73) / a74, 0, 1), bc.bj = !0)
	}, this.gK = function(gP) {
		-1 !== a76 && (colors[a76] = q.a0((gP - a73) / a74, 0, 1), bc.bj = !0)
	}, this.gH = function(gP, gQ, deltaY) {
		a7D(gP, gQ) && (gP = q.a0(Math.floor((gQ - a71.a4) / (a75 + .75 * ak.gap)), 0, 2), colors[gP] = q.a0(colors[gP] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bc.bj = !0)
	}, this.a7E = function() {
		0 <= a76 && (a76 = -1, bc.bj = !0)
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(130), [new eG("⬅️ " + L(22), function() {
		dx.fH.a6z()
	})], !1), a71 = new n8([.5, .25], [.5, .5], 1)
}

function a7F(data) {
	var eh, a7G, a7H, a72, a7I, a7J, a7K, colors, a7L, a7M, a7N = 0,
		a7O = 0,
		a7P = !1,
		a7Q = !1,
		a7R = [1, 5, 60, 240, 1440, 10080, 43200];

	function a7u(gP, gQ) {
		! function(gP, gQ) {
			return a7G < gP && gP < a7G + a72 && a7H < gQ && gQ < a7H + a7I
		}(a7N = gP, a7O = gQ) ? (a7P && (bc.bj = !0), a7P = !1) : (a7P = !0, bc.bj = !0)
	}
	this.show = function() {
		a7Q = ep.buffer.data[127].value, eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize();
		var cY = aW.eB,
			qd = eh.qX(),
			a7b = cY * qd.qb,
			cY = cY * qd.qY;
		a7J = aa.ab.a42(.06), a7K = aa.ab.a42(.04), a7G = aa.ab.a42(.06), a7H = cY + a7J, a72 = aW.aS - a7G - a7K, a7I = a7b + cY - a7H - a7K
	}, this.bm = function() {
		eh.bm(),
			function() {
				var ai, jr, cW, a3, cy, ce = data.data,
					a7e = 1,
					a7f = .125,
					a7g = a7Q ? 65536 : 0;
				for (ai = 0; ai < ce.length; ai++)
					for (jr = ce[ai].jr, cW = jr.length, a7e = Math.max(cW, a7e), cy = 0; cy < cW; cy++) a7f = Math.max(jr[cy], a7f), a7g = Math.min(jr[cy], a7g);
				var nf = a7H + a7I,
					zD = a7I / (a7f - a7g),
					zC = 1 / (a7e - 1);
				for (bn.lineWidth = ak.o5, ai = 0; ai < ce.length; ai++) {
					for (jr = ce[ai].jr, cW = jr.length, a3 = a7G, bn.beginPath(), bn.moveTo(a3 + a72, nf - zD * (jr[cW - 1] - a7g)), cy = cW - 2; 0 <= cy; cy--) bn.lineTo(a3 + zC * cy * a72, nf - zD * (jr[cy] - a7g));
					bn.strokeStyle = colors[ai], bn.stroke()
				}(function(a7g, a7f, nf, zD) {
					bn.font = aa.ab.ac(0, .25 * a7G), aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 2), bn.fillStyle = colors[0];
					for (var a3 = .92 * a7G, ai = 0; ai < 3; ai++) {
						var d0 = a7g + ai * (a7f - a7g) / 2;
						bn.fillText((d0 / 1e3).toFixed(3), a3, nf - zD * (d0 - a7g))
					}
				})(a7g, a7f, nf, zD),
				function(a7e) {
					var a4 = a7H + a7I + .15 * a7K;
					bn.font = aa.ab.ac(0, Math.min(.4 * a7K, .028 * aW.aS)), aa.ab.textBaseline(bn, 0), aa.ab.textAlign(bn, 2), bn.fillStyle = colors[0], bn.fillText(aa.a7X.iZ(a7L), a7G + a72, a4), aa.ab.textAlign(bn, 0), bn.fillText(aa.a7X.iZ(
						new Date(a7M.getTime() - 6e4 * (a7e - 1) * a7R[data.a7W])), a7G, a4)
				}(a7e),
				function(a7e, a7g, a7f) {
					if (a7P && !(a7e < 2)) {
						for (var n3, f7 = (a7N - a7G) / a72 * (a7e - 1), a7j = Math.floor(f7), a7k = Math.floor(1 + f7), a7l = f7 - a7j, a7m = 1e5, jR = -1, a7n = -1, a7o = a7f - (a7f - a7g) * (a7O - a7H) / a7I, ce = data.data, ai = 0; ai < ce
							.length; ai++) {
							var p7, jr = ce[ai].jr;
							jr.length <= a7k || (jr = jr[a7j] + a7l * (jr[a7k] - jr[a7j]), (p7 = Math.abs(a7o - jr)) < a7m && (a7m = p7, jR = ai, a7n = jr))
						} - 1 !== jR && (a7f = a7H + a7I - (a7n - a7g) / (a7f - a7g) * a7I, bn.lineWidth = .5 * ak.o5, bn.strokeStyle = colors[jR], bn.beginPath(), bn.moveTo(a7G, a7f), bn.lineTo(a7N, a7f), bn.lineTo(a7N, a7H + a7I), bn.stroke(),
							bn.beginPath(), bn.arc(a7N, a7f, .1 * a7G, 0, 2 * Math.PI), bn.fillStyle = colors[jR], bn.fill(), a7g = a7H + a7I + .15 * a7K, aa.ab.textAlign(bn, 1), n3 = a7e - 2 < f7 ? (n3 = a7M.getTime() - 6e4 * a7R[data.a7W],
								new Date(n3 + (f7 - (a7e - 2)) * (a7L.getTime() - n3))) : new Date(a7M.getTime() - 6e4 * (a7e - f7 - 1) * a7R[data.a7W]), a7e = aa.a7X.iZ(n3), f7 = aa.ab.measureText(a7e), n3 = q.a0(a7N, a7G + .5 * f7, a7G +
								a72 - .5 * f7), bn.fillStyle = aa.color.a7a(70, 50, 20), bn.fillRect(n3 - .52 * f7, a7H + a7I, 1.04 * f7, .55 * a7K), bn.fillStyle = colors[0], bn.fillText(a7e, n3, a7g), bn.font = aa.ab.ac(0, .25 * a7G), aa.ab
							.textBaseline(bn, 1), aa.ab.textAlign(bn, 2), n3 = .92 * a7G, a7e = (a7n / 1e3).toFixed(3), f7 = aa.ab.measureText(a7e), a7g = n3 - 1.04 * f7, bn.fillStyle = aa.color.a7a(70, 50, 20), bn.fillRect(a7g, a7f - .1625 *
								a7G, a7G - a7g, .275 * a7G), bn.fillStyle = colors[jR], bn.fillText(a7e, n3, a7f))
					}
				}(a7e, a7g, a7f)
			}(), bn.lineWidth = ak.o5, bn.strokeStyle = v.w, bn.beginPath(), bn.moveTo(a7G, a7H), bn.lineTo(a7G, a7H + a7I), bn.lineTo(a7G + a72, a7H + a7I), bn.stroke();
		var ai, fontSize = .5 * a7J,
			ce = (bn.font = aa.ab.ac(0, fontSize), aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 0), data.data),
			b7 = ce.length,
			a4 = a7H - .5 * a7J,
			be = "";
		for (ai = 0; ai < b7; ai++) be += ce[ai].name + "  ";
		be = be.trim();
		var a7r = aa.ab.measureText(be),
			a3 = .5 * (aW.aS - a7r);
		for (aW.aS < a7r && (a3 = 0, bn.font = aa.ab.ac(0, aW.aS / a7r * fontSize)), ai = 0; ai < b7; ai++) bn.fillStyle = colors[ai], bn.fillText(ce[ai].name, a3, a4), a3 += aa.ab.measureText(ce[ai].name + "  ")
	}, this.gF = function(gP, gQ) {
		a7u(gP, gQ)
	}, this.gK = function(gP, gQ) {
		a7u(gP, gQ)
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	};
	var ai, av, iW, ca, cS = data.data,
		b7 = cS.length,
		max = 1;
	for (ai = 0; ai < b7; ai++) max = Math.max(max, cS[ai].jr.length);
	for (ai = 0; ai < b7; ai++)
		for (; cS[ai].jr.length < max;) cS[ai].jr.unshift(0);
	av = new Date, iW = 6e4 * av.getTimezoneOffset(), ca = av.getTime() - iW, a7L = new Date(ca), 6 === data.a7W ? function(av, iW) {
		var a7Z = av.getUTCFullYear(),
			av = av.getUTCMonth() + 1;
		a7M = av < 12 ? new Date(Date.UTC(a7Z, av) - iW) : new Date(Date.UTC(a7Z + 1, 0) - iW)
	}(av, iW) : (iW = 6e4 * a7R[data.a7W], a7M = data.a7W <= 4 ? new Date(ca + iW - av.getTime() % iW) : new Date(ca + iW - (av.getTime() + 2592e5) % iW)), ca = aa.color, colors = [v.w, ca.a7a(255, 0, 0), ca.a7a(0, 200, 0), ca.a7a(80, 80, 255),
		ca.a7a(255, 255, 0), ca.a7a(255, 0, 255), ca.a7a(0, 255, 255), ca.a7a(255, 140, 0), ca.a7a(128, 128, 128), ca.a7a(0, 255, 140)
	], eh = new eF(L(135) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a7W] + ", " + aa.a7X.iU(a7L), [new eG("⬅️ " + L(22), function() {
		dx.ej(1)
	}), new eG(L(136), function() {
		dx.ej(14)
	})], !1)
}

function k9(a30, a7v, a7w, a7x) {
	var self;
	this.kB = document.createElement("span"), (self = this).kB.textContent = a30, self.kB.style.color = v.w, self.kB.style.position = "absolute", self.kB.style.font = "inherit", a7x ? self.kB.style.bottom = "0.06em" : self.kB.style.top = "0.12em",
		a7w ? self.kB.style.left = "0.2em" : self.kB.style.right = "0.2em", self.kB.style.fontSize = "0.6em", self.kB.style.pointerEvents = "none", self.kB.style.whiteSpace = "pre", a7v.style.position = "relative", a7v.style.overflow = "hidden", a7v
		.appendChild(self.kB)
}

function a7y() {
	var a7z, a80, a81 = -15e3,
		a82 = !1;

	function gF(cc) {
		a8I() || (a82 = !0, a8J(cc, 1), jZ.fH.a8K(jZ.fH.qt), a8L(Math.floor(aW.eB * cc.clientX), Math.floor(aW.eB * cc.clientY)))
	}

	function a87(cc) {
		a81 = bc.iV, a8J(cc, 1), jZ.fH.a8K(jZ.fH.qt), 0 < cc.touches.length && (a7z = Math.floor(aW.eB * cc.touches[0].clientX), a80 = Math.floor(aW.eB * cc.touches[0].clientY), a8M.a87(cc) || a8L(a7z, a80))
	}

	function a8L(a3, a4) {
		dx.gF(a3, a4), 0 === c.bH ? qp.gF(a3, a4) : nr.nP(a3, a4) || nw.gF(a3, a4) || sF.gF(a3, a4) || sK.a5W(a3, a4) || a1F.gF(a3, a4) || 0 <= nK.gF(a3, a4) || yI.gF(a3, a4) || di.a8N(a3, a4) || sK.a5X(a3, a4)
	}

	function gK(cc) {
		a8I() || (a82 = !0, a8J(cc, 1), a8O(Math.floor(aW.eB * cc.clientX), Math.floor(aW.eB * cc.clientY)))
	}

	function a88(cc) {
		a81 = bc.iV, a8J(cc, 1), 0 < cc.touches.length && (a7z = Math.floor(aW.eB * cc.touches[0].clientX), a80 = Math.floor(aW.eB * cc.touches[0].clientY), a8M.a88(cc) || a8O(a7z, a80))
	}

	function a8O(a3, a4) {
		di.dj() || (di.zS = a3, di.zU = a4), dx.gK(a3, a4), 0 === c.bH ? qp.gK(a3, a4) : (a8P.a1B(a3, a4), nw.gK(a3, a4) || (nK.gK(a3, a4), sK.nG() ? sK.gK(a3, a4) : nl.a1E ? nl.gK(a3) && (bc.bj = !0) : (bi.gK(a3, a4), gd.g2 && gd.gK(a3, a4) && (bc
			.bj = !0))))
	}

	function a86(cc) {
		a8I() || (a8J(cc, 1), a7E(), 0 === c.bH ? (qp.click(-1024, -1024), a4z.reset()) : (bi.a8Q(-1024, -1024), nK.gK(-1024, -1024), nl.a8R(), gd.g2 = !1))
	}

	function nx(cc) {
		a8I() || (a8J(cc, 1), a8S(Math.floor(aW.eB * cc.clientX), Math.floor(aW.eB * cc.clientY), 2 === cc.button), di.a85 && (di.a85 = !1, cc.preventDefault()))
	}

	function click(cc) {
		a8I() || a8J(cc, 1)
	}

	function a89(cc) {
		a81 = bc.iV, a8J(cc, 1), cc && cc.touches && 0 < cc.touches.length && 0 !== c.bH ? gd.g2 = !1 : a8M.a8T() || (a8S(a7z, a80, !1), di.a85 && (di.a85 = !1, cc.preventDefault()))
	}

	function a8A(cc) {
		a81 = bc.iV, a8J(cc, 1), a8S(a7z, a80, !1), di.a85 && (di.a85 = !1, cc.preventDefault())
	}

	function a8B(cc) {}

	function a8C(cc) {}

	function a8D(cc) {
		a8I() || a8J(cc, 0)
	}

	function a8S(a3, a4, a5k) {
		a7E(), 0 === c.bH ? qp.click(a3, a4) : (bi.a8Q(a3, a4), nw.a8Q(), nl.a8R(), gd.g2 = !1, sK.click(a3, a4, a5k) ? bc.bj = !0 : nK.nx(a3, a4))
	}

	function a7E() {
		dx.a7E()
	}

	function gH(cc) {
		var a3, a4, deltaY;
		a8I() || (a8J(cc, 1), jZ.fH.a8K(jZ.fH.qt), a3 = Math.floor(aW.eB * cc.clientX), a4 = Math.floor(aW.eB * cc.clientY), deltaY = cc.deltaY, 1 === cc.deltaMode && (deltaY *= 16), dx.gH(a3, a4, deltaY), 0 === c.bH ? qp.gH(a3, a4, deltaY) : bi.gH(
			a3, a4, deltaY) || (nl.a7D(a3, a4) ? nl.gH(deltaY) && (bc.bj = !0) : gd.gH(a3, a4, deltaY)))
	}

	function a8E(cc) {
		a8J(cc, 0)
	}

	function a8J(cc, id) {
		0 === id && dx.nG() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== qp.tW() && cc.preventDefault()
	}

	function a8F(cc) {
		if (__fx.keybindHandler(cc.key)) return;
		a8I() || 0 < aW.a8V || (cc = cc.code) && cc.length && (a8W.cY(cc, 18) ? a8X.a8Y(3) : a8W.cY(cc, 22) ? a8X.a8Y(0) : a8W.cY(cc, 20) ? a8X.a8Y(1) : a8W.cY(cc, 24) ? a8X.a8Y(2) : a8W.cY(cc, 10) ? nl.a8Z(31 / 32) : a8W.cY(cc, 8) ? nl.a8Z(32 /
			31) : a8W.cY(cc, 6) ? nl.a8Z(7 / 8) : a8W.cY(cc, 4) ? nl.a8Z(8 / 7) : a8W.cY(cc, 14) ? 0 !== c.bH && gd.gH(Math.floor(aW.aS / 2), Math.floor(aW.aY / 2), -200) : a8W.cY(cc, 16) ? 0 !== c.bH && gd.gH(Math.floor(aW.aS / 2), Math.floor(aW
				.aY / 2), 200) : a8W.cY(cc, 0) ? c.bH && a8P.a1C(0) : a8W.cY(cc, 2) ? c.bH && a8P.a1C(1) : a8W.cY(cc, 30) ? c.bH && a8P.a1C(2) : a8W.cY(cc, 26) ? c.bH && a8P.a1Z() : a8W.cY(cc, 28) && c.bH && a8P.a1d())
	}

	function a8G(cc) {
		if (!a8I() && !(0 < aW.a8V || bc.iV < 400)) {
			var code = cc.code;
			if (code && code.length && !("Enter" === code && dx.ed(1) || "Space" === code && dx.ed(0))) return hq.kE ? hq.k7.ed(code) ? void 0 : void("Escape" === code && di.a8a()) : void(8 !== qp.tW() && qp.ed(cc) ? bc.bj = !0 : "Escape" === code ?
				di.a8a() : a8W.cY(code, 18) ? a8X.a8b(3) : a8W.cY(code, 22) ? a8X.a8b(0) : a8W.cY(code, 20) ? a8X.a8b(1) : a8W.cY(code, 24) ? a8X.a8b(2) : a8W.cY(code, 12) ? nr.nE(!c.gG) : "Space" === code && c.bH && (nK.nL && nK.nM(), c
				.bl) && nr.nI(!1))
		}
	}

	function a8H() {
		"hidden" !== document.visibilityState && (bc.bj = !0)
	}

	function a8I() {
		return a81 + 15e3 > bc.iV
	}

	function resize() {
		aW.a8d()
	}
	this.a83 = 0, this.a84 = "", this.a85 = !1, this.zS = 0, this.zU = 0, this.b = function() {
		ub.addEventListener("mousedown", gF, {
			passive: !1
		}), ub.addEventListener("mousemove", gK, {
			passive: !1
		}), ub.addEventListener("mouseup", nx, {
			passive: !1
		}), ub.addEventListener("click", click, {
			passive: !1
		}), ub.addEventListener("mouseleave", a86, {
			passive: !1
		}), ub.addEventListener("wheel", gH, {
			passive: !1
		}), ub.addEventListener("touchstart", a87, {
			passive: !1
		}), ub.addEventListener("touchmove", a88, {
			passive: !1
		}), ub.addEventListener("touchend", a89, {
			passive: !1
		}), ub.addEventListener("touchcancel", a8A, {
			passive: !1
		}), ub.addEventListener("dragover", a8B), ub.addEventListener("drop", a8C), ub.addEventListener("dblclick", a8D), document.addEventListener("contextmenu", a8E), document.addEventListener("keydown", a8F), document.addEventListener(
			"keyup", a8G), document.addEventListener("visibilitychange", a8H), window.addEventListener("resize", resize)
	}, this.a8N = function(a3, a4) {
		return !!nr.gF(a3, a4) || !!(bi.gF(a3, a4) || gd.gF(a3, a4) || nl.gF(a3, a4) || e.gF(a3, a4))
	}, this.a8c = a8I, this.dj = function() {
		return !a82 || 0 < a81
	}, this.a8a = function() {
		if (!dx.nG()) return 8 === qp.tW() ? c.gG ? void nr.nE(!1) : nw.nG ? void nw.nM() : void nK.nM() : void(7 !== qp.tW() && 6 === qp.tW() && a8e.a8f());
		dx.ed(2)
	}
}

function a8g() {
	this.a8h = new vl, this.vq = new a8i, this.turnstile = new a8j, this.b = function() {
		aT.aU.a8k(), this.turnstile.b()
	}, this.vp = function() {
		return ep.buffer.data[160].value
	}
}

function a8l() {
	var eD, wz, ey;

	function a8u() {
		for (var colors = new Array(11), ai = 0; ai < 11; ai++) {
			var ce = ep.buffer.data[163 + ai].value.split(",");
			colors[ai] = new Uint8Array(3);
			for (var cy = 0; cy < 3; cy++) cy < ce.length && (colors[ai][cy] = Number(ce[cy]))
		}
		return colors
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(137), [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})]), wz = new en(eD.eM, ((ey = []).push(function() {
		var f2 = new f3;
		return f2.f4(L(138)), f2.vv(jZ.fH.xG("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", f2.vv("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), f2
	}()), ey.push(function() {
		var f2 = new f3,
			rW = (f2.f4(L(139)), ep.buffer.data[174].value),
			vs = f2.fA(rW.length + " / 180"),
			a8s = (vs.style.textAlign = "center", new eL(0, 1, function(cc) {
				var cc = cc.target.value,
					cW = cc.length;
				vs.textContent = cW + " / 180", cW <= 180 && ep.eq.er(174, cc)
			}));
		return a8s.cc.rows = 6, a8s.cc.style.fontSize = "1em", a8s.eP(rW), f2.f5(a8s), f2
	}()), ey.push(function() {
		var f2 = new f3;
		f2.f4(L(140));
		for (var ai = 0; ai < 11; ai++) {
			var cr = f2.f5(new f6(ep.buffer.data[163 + ai]));
			ai && (cr.cc.style.marginTop = "0.6em")
		}
		return f2.f5(new f9([new eG(L(141), function() {
			for (var data = ep.buffer.data, ai = 163; ai < 174; ai++) data[ai] && ep.buffer.wd(ai, data[ai].s3);
			dx.mQ(), dx.x3()[31] = null, dx.ej(31)
		}).button])), f2
	}()), ey.push(function() {
		var f2 = new f3;
		return f2.f4("Targeting"), f2.vv(L(142)), f2.f5(new f6(ep.buffer.data[175], 0, 0)), f2
	}()), ey.push(function() {
		var f2 = new f3;
		return f2.f4(L(143)), f2.f5(new f9([new eG(L(32), function() {
			(new a8t).show(ep.buffer.data[174].value, a8u(), -1)
		}).button])), f2
	}()), ey.push(function() {
		var f2 = new f3,
			a8v = (f2.f4(L(144)), f2.vv(L(145)), new f6(ep.buffer.data[176], 1, 0)),
			a8w = (f2.f5(a8v), new eG(L(146), function(cc) {
				return xM.button.textContent === L(103) && jZ.fH.lZ(0) && (aa.ab.xO(cc), xL(), jZ.mn.a8x(ep.buffer.data[176].value, a8u(), ep.buffer.data[175].value, ep.buffer.data[174].value)), !0
			}, 1)),
			xL = function() {
				xM.button.textContent = L(102), a8w.iE(1), a8w.button.style.color = v.w
			},
			xM = new eG(L(102), function(cc) {
				return cc.textContent === L(102) ? (cc.textContent = L(103), a8w.iE(0), a8w.button.style.color = v.hL) : xL(), !0
			});
		return f2.f5(new f9([xM.button, a8w.button])), f2
	}()), ey))
}

function a8y() {
	this.b8 = function() {
		var a97;
		2 === c.yG ? (e.qJ(0, 59), gI.a8z(2700)) : c.d < 7 ? (a97 = cD.c0[c.pJ], a97 = cD.bx[a97], a3B.a99(L(147, [a97]), 2, 1, 12), e.u(0, L(148, [a97]), 40, 0, v.w, v.x, -1, !1), gI.a8z(2700)) : 8 === c.d ? (c.yL ? e.qJ(c.a94, 2) : e.qJ(1 - c
			.t, 3), c.a95.g(c.a94), gI.a96(c.a94, 2700, !1, 0)) : 9 === c.d ? (e.a9A(), gI.a8z(2700)) : (e.a9B(c.a94), gI.a96(c.a94, 2700, !1, 0))
	}, this.yO = function() {
		var be;
		c.bl || c.aH || (be = jZ.fH.a9C(), c.d < 7 ? be += "/log/team" : 8 === c.d ? be += "/log/1v1" : 9 === c.d ? be += "/log/zombies" : be += "/log/br", e.u(720, be, 736, 0, v.w, v.a3w, -1, !1))
	}
}

function a9D() {
	this.ds = 0, this.kY = 0, this.mapSeed = 0, this.kc = 0, this.kg = 0, this.kh = 0, this.ki = 0, this.kp = 0, this.ke = 0, this.spawningSeed = 0, this.qt = 0, this.tE = 0, this.i3 = [], this.a6W = 1048575, this.a9E = 0, this.a9F = [{
		kY: 0,
		mapSeed: 0,
		kc: 0,
		iV: 100,
		kp: 0
	}, {
		kY: 1,
		mapSeed: 0,
		kc: 1,
		iV: 200,
		kp: 0
	}, {
		kY: 2,
		mapSeed: 0,
		kc: 2,
		iV: 300,
		kp: 0
	}, {
		kY: 3,
		mapSeed: 0,
		kc: 3,
		iV: 400,
		kp: 0
	}, {
		kY: 0,
		mapSeed: 0,
		kc: 9,
		iV: 500,
		kp: 0
	}, {
		kY: 1,
		mapSeed: 0,
		kc: 10,
		iV: 600,
		kp: 0
	}, {
		kY: 2,
		mapSeed: 0,
		kc: 8,
		iV: 700,
		kp: 0
	}, {
		kY: 3,
		mapSeed: 0,
		kc: 3,
		iV: 800,
		kp: 0
	}]
}

function a9G() {
	var aS, a3, a9H, canvas, a2, nG, a3c, a9I, aZ, a23, a9J = 11 / 12;

	function a9K() {
		var a9N = Math.floor(a3c * (aS - 2 * a9H)),
			a9O = 1 + Math.floor(.0625 * nl.aY),
			a9P = 1 + Math.floor(.3 * nl.aY),
			ng = Math.floor(.55 * nl.aY);
		a2.clearRect(0, 0, aS, nl.aY), a2.fillStyle = v.iM, a2.fillRect(0, 0, a9H, nl.aY), a2.fillRect(a9H + a9N, 0, aS - a9H - a9N, nl.aY), a2.fillStyle = a3c < 1 / 3 ? "rgba(" + Math.floor(3 * a3c * 130) + ",130,0,0.85)" : a3c < 2 / 3 ?
			"rgba(130," + (130 - Math.floor(3 * (a3c - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (a3c - 2 / 3) * 130) + ",0.85)", a2.fillRect(a9H, 0, a9N, nl.aY), a2.fillStyle = v.w, a2.fillRect(0, 0, aS, 1), a2.fillRect(0, nl.aY -
				1, aS, 1), a2.fillRect(0, 0, 1, nl.aY), a2.fillRect(a9H, 0, 1, nl.aY), a2.fillRect(a9H + a9N, 0, 1, nl.aY), a2.fillRect(aS - a9H, 0, 1, nl.aY), a2.fillRect(aS - 1, 0, 1, nl.aY), a2.fillRect(Math.floor(.25 * nl.aY) + a9P, Math.floor((
				nl.aY - a9O) / 2), nl.aY - 2 * a9P, a9O), a2.fillRect(Math.floor(aS - 1.25 * nl.aY) + a9P, Math.floor((nl.aY - a9O) / 2), nl.aY - 2 * a9P - a9P % 2, a9O), a2.fillRect(Math.floor(aS - 1.25 * nl.aY) + Math.floor((nl.aY - a9O) / 2), a9P,
				a9O, nl.aY - 2 * a9P - a9P % 2), a9I = aa.bY.a3b(c.t, nl.a1R()), a2.fillText(aa.b1.b3(a9I) + " (" + aa.b1.b2(100 * a3c, +(a3c < .1)) + ")", Math.floor(.5 * aS), ng)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		a3c = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => nl.a8Z(arg1);

	function a9T(gc) {
		return !(1 < gc && 1 === a3c || (1 < gc && gc * a3c - a3c < 1 / 1024 ? gc = (a3c + 1 / 1024) / a3c : gc < 1 && a3c - gc * a3c < 1 / 1024 && (gc = (a3c - 1 / 1024) / a3c), a3c = q.a0(a3c * gc, 1 / 1024, 1), a9K(), 0))
	}

	function a9U(gP) {
		return a3c !== (a3c = q.a0((gP - a3 - a9H) / (aS - 2 * a9H), 1 / 1024, 1)) && (a9K(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9K(), bc.bj = !0
	}, this.a4 = 0, this.a1E = !1, this.b = function() {
		nG = !c.ao && !c.bl, a23 = !1, a3c = (ep.buffer.data[182].value + 1) / 1024, a9I = 0, this.a1E = !1, this.resize()
	}, this.resize = function() {
		aT.aU.aV() && aW.aS < .8 * aW.aY ? (this.aY = Math.floor(.066 * aW.aX), aS = aW.aS - 4 * ak.gap - this.aY) : (aS = Math.floor((aT.aU.aV() ? .65 : .389) * aW.aX), aS += 12 - aS % 12, this.aY = Math.floor(aS / 12)), a9H = Math.floor(3 *
			this.aY / 2), aZ = aa.ab.ac(1, Math.floor(.5 * this.aY)), (canvas = document.createElement("canvas")).width = aS, __fx.mobileKeybinds.setSize(aS, this.aY, bn), canvas.height = this.aY, (a2 = canvas.getContext("2d", {
			alpha: !0
		})).font = aZ, aa.ab.textBaseline(a2, 1), aa.ab.textAlign(a2, 1), this.af(), a9K()
	}, this.af = function() {
		a3 = aT.aU.aV() && aW.aS < .8 * aW.aY ? this.aY + 3 * ak.gap : Math.floor((aW.aS - aS) / 2), this.a4 = aW.aY - this.aY - nC.nD() * ak.gap
	}, this.ap = function() {
		a23 && (a23 = !1, a9K())
	}, this.nG = function() {
		return !(!nG || nK.nL && a3 < Math.floor(ak.gap + 5.5 * this.aY))
	}, this.nA = function(nB) {
		return !!this.nG() && a3 + aS > aW.aS - nB - ak.gap
	}, this.sC = function() {
		nG = !c.bl
	}, this.a2J = function() {
		nG = !1
	}, this.a1R = function() {
		return q.a0(Math.floor(1024 * a3c + .5) - 1, 0, 1023)
	}, this.a7D = function(gP, gQ) {
		return this.nG() && a3 < gP && gP < a3 + aS && gQ > this.a4
	}, this.gF = function(gP, gQ) {
		if (!this.nG()) return !1;
		if (!(__fx.settings.keybindButtons && gQ > this.a4 - Math.floor(ak.gap / 4) - this.aY && gQ < this.a4 - Math.floor(ak.gap / 4) && __fx.mobileKeybinds.click(gP - a3))) {
			if (!nl.a7D(gP, gQ)) return !1;
			gd.g2 = !1, ! function(nU, gP, gQ) {
				if (function(gP, gQ) {
						return a3 < gP && gP < a3 + a9H && gQ > nl.a4
					}(gP, gQ)) return a9T(a9J);
				if (function(gP, gQ) {
						return a3 + aS - a9H < gP && gP < a3 + aS && gQ > nl.a4
					}(gP, gQ)) return a9T(1 / a9J);
				return nU.a1E = !0, a9U(gP)
			}(this, gP, gQ) || (bc.bj = !0)
		}
		return !0
	}, this.a8Z = function(ch) {
		0 !== c.bH && this.nG() && a9T(ch) && (bc.bj = !0)
	}, this.gH = function(deltaY) {
		var ch;
		return !(0 === deltaY || !this.nG()) && a9T(ch = 0 < deltaY ? (ch = 400 / (400 + deltaY)) < a9J ? a9J : ch : 1 / a9J < (ch = (400 - deltaY) / 400) ? 1 / a9J : ch)
	}, this.gK = function(gP) {
		return !!this.a1E && a9U(gP)
	}, this.a8R = function() {
		this.a1E = !1
	}, this.b8 = function() {
		this.nG() && a9I !== aa.bY.a3b(c.t, this.a1R()) && (a23 = !0)
	}, this.bm = function() {
		this.nG() && (bn.drawImage(canvas, a3, this.a4), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(bn, a3, this.a4)
	}
}

function a9V() {
	var eh, ei, ey;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF("🔒 " + L(149), [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})]), ei = new en(eh.eM, ((ey = []).push(function() {
		var f2 = new f3,
			kF = (f2.vv(jZ.fH.xG("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", f2.f4(L(30)), new f6({
				value: "",
				f7: -1
			})),
			a9X = (f2.f5(kF), f2.f4(L(150), "0.8em"), new f6({
				value: "",
				f7: -1
			}, 0, 0)),
			xN = (a9X.cc.type = "email", a9X.cc.autocomplete = "email", a9X.cc.name = "email", a9X.cc.inputMode = "email", a9X.cc.spellcheck = !1, f2.f5(a9X), new eG(L(151), function(cc) {
				return aa.ab.xO(cc), jZ.mn.a9Y({
					action: 4,
					be: kF.cc.value.trim() + a9X.cc.value.trim().substring(0, 63)
				}), !0
			}));
		return f2.f5(new f9([xN.button])), f2
	}()), ey))
}

function a9Z() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 !== c.data.tIncomeType && (c.data.tIncomeData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.tIncomeType && aa.kt.x4(x0.eZ(), c.data.tIncomeData, 255)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(152), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(95), L(96), L(97)],
			value: c.data.tIncomeType
		}, function(f7) {
			x2(), 2 !== f7 || c.data.tIncomeData || (c.data.tIncomeData = new Uint8Array(c.c2), c.data.tIncomeData.fill(32)), c.data.tIncomeType = f7, dx.ej(26)
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2;
		1 === c.data.tIncomeType && ((f2 = new f3).f4("Value"), f2.f5(new f6({
			f7: -1,
			value: c.data.tIncomeValue
		}, 1, 0, function(cc) {
			var value = q.a0(Math.floor(cc.target.value), 0, 255);
			cc.target.value = c.data.tIncomeValue = value
		})), ey.push(f2))
	}(ey), function(ey) {
		var f2;
		2 === c.data.tIncomeType && ((f2 = new f3).f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.tIncomeData, 4)), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function a9a() {
	function a9e(cc) {
		oV(cc), dx.ej(4, 5, new x9("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>the client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use the client to play in singleplayer mode.</p></div>",
			!0, [new eG("⬅️ " + L(22), function() {
				dx.mQ()
			}), new eG("🔄 Reload", function() {
				aT.aU.a9p()
			}, v.a9q)]))
	}

	function a9m(cc) {
		oV(cc), dx.ej(4, 5, new x9(L(153), a9i(cc), !0))
	}

	function a9i(cc) {
		var be = " [" + cc + "]";
		return 3249 === cc || 1006 === cc ? "No Internet / No Server Response / Server Restart" + be : 4527 === cc ? "Player already in lobby" + be : 4577 === cc ? "Your IP is banned." + be : 4530 === cc ? "Lobby Timeout" + be : 4528 === cc ?
			"Lobby Kick: Another login detected." + be : 4540 === cc ? "You have been kicked." + be : 4495 === cc ? "Account doesn't exist." : 4229 === cc ? "Bad Internet / Unresponsive Client" + be : 4555 === cc ? "This Account is blocked." + be :
			4580 === cc ? "More Gold needed" + be : 4557 <= cc && cc <= 4560 || 4589 == cc ? "Please try again later!" + be : 4591 === cc ? "The algo determined you are a bot." + be : "Unknown error" + be
	}

	function oV(cc) {
		a9f(cc), dx.fH.a9r()
	}

	function a9f(cc) {
		4540 === cc && jZ.fH.kK(cc);
		var a9j = qp.tW();
		ru.close(), 6 === a9j ? jZ.fH.kK(cc) : hq.kE ? (dx.eX(), hq.kJ(), jZ.fH.close(jZ.fH.tO, 3256)) : 8 === a9j && c.ny(!0)
	}
	this.a9b = [], this.a9c = function(r9, cc) {
		if (this.a9b.push(cc), 4321 === cc && (data = ep.fH.a9d(0), console.log("Reset to: " + data.hT), ep.eq.er(105, data.hT), ep.eq.er(106, data.password)), 8 === dx.jf && 0 === r9)
			if (4211 === cc) a9e(cc);
			else {
				if (hq.kE && (4495 === cc || 4480 === cc) && jZ.fH.tO !== r9) return void dx.mQ();
				if (8 !== qp.tW() && a9f(), 4480 === cc) return ep.eq.wi(), void dx.ej(4, 0, new x9(L(155), L(156), !0));
				var data = 0;
				dx.jg() && 10 === dx.jg().el && (data = dx.jg().el), dx.ej(4, data, new x9(L(153), a9i(cc), !0))
			}
		else {
			data = qp.tW();
			if (6 === data) {
				if (4211 === cc) return void a9e(cc);
				if (4215 !== cc && 4516 !== cc && 4527 !== cc && 4533 !== cc && 4528 !== cc && !(4557 <= cc && cc <= 4560) && 4577 !== cc && 4576 !== cc) return void a8e.a9k(r9)
			} else if (hq.kE) {
				if (r9 !== jZ.fH.tO) return
			} else {
				if (8 === data) return void(r9 !== jZ.fH.qt || c.aH || 1 !== c.bH || c.bl || e.sr(L(154, [cc])));
				if (!(4579 <= cc && cc <= 4589)) return
			}(4591 === cc ? function(cc) {
				oV(cc), dx.ej(4, 5, new x9("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new eG("⬅️ " + L(22), function() {
					dx.mQ()
				}), new eG("🔄 Reload", function() {
					aT.aU.a9p()
				}, v.a9q)]))
			} : a9m)(cc)
		}
	}, this.a9n = function(cc) {
		this.a9b.push(cc), 8 === qp.tW() ? c.aH || 1 !== c.bH || e.sr(L(154, [cc])) : a9m(cc)
	}, this.a9o = function() {
		this.a9b.push(3268), oV(3268)
	}
}

function a9s() {
	this.jl = function(size) {
		for (var wG = jW, ce = [], ai = 0; ai < size; ai++) ce.push(String.fromCharCode(wG.jc(16)));
		return ce.join("")
	}, this.ti = function(be) {
		return 20 < (be = be.trim()).length ? be.substring(0, 20) : be
	}
}

function a9t() {
	"function" != typeof Math.log2 && (Math.log2 = function(a3) {
		return Math.log(a3) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(a3) {
		return Math.log(a3) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(a3) {
		return 0 < a3 ? 1 : a3 < 0 ? -1 : 0
	})
}

function a9u() {
	var a9v = new Uint8Array(78);
	this.b = function() {
		var ai;
		for (a9v[50] = 37, ai = 0; ai < 10; ai++) a9v[ai + 3] = ai + 1;
		for (ai = 0; ai < 26; ai++) a9v[ai + 20] = ai + 11, a9v[ai + 52] = ai + 38
	}, this.a9w = function(be) {
		return be.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.eu = function(be, size) {
		if ((be = this.a9w(be)).length > size) return be.substring(0, size);
		for (; be.length < size;) be = "-" + be;
		return be
	}, this.wI = function(be) {
		for (var a9x = a9v, b7 = be.length, ce = new Uint8Array(b7), ai = 0; ai < b7; ai++) ce[ai] = a9x[be.charCodeAt(ai) - 45];
		return ce
	}, this.wH = function(tu) {
		jX.kX(6 * tu.length), this.a9y(tu), jW.b(jX.lf)
	}, this.a9y = function(tu) {
		for (var b7 = tu.length, aS = jX, ai = 0; ai < b7; ai++) aS.mD(6, tu[ai])
	}, this.vY = function(be) {
		this.a9y(this.wI(be))
	}, this.a9z = function(be, size) {
		this.a9y(this.wI(this.eu(be, size)))
	}, this.aA0 = function(be, size) {
		for (var ce = this.wI(this.eu(be, size)), d0 = 0, ch = 1, ai = ce.length - 1; 0 <= ai; ai--) d0 += ch * ce[ai], ch *= 64;
		return d0
	}
}

function qi() {
	this.eV = function() {
		var wC = function() {
				for (var sq = eR.eS.sq, b7 = sq.length, max = 0, ai = 0; ai < b7; ai++) max = Math.max(max, sq[ai]);
				return wJ(Math.max(max, 1))
			}(),
			aS = (ht = c.data, (aS = vT).b(), aS.mD(12, lh.rVersion), aS.f7 += 43, aS.mD(2, ht.mapType), aS.mD(8, ht.mapProceduralIndex), aS.mD(8, ht.mapRealisticIndex), aS.mD(14, ht.mapSeed), aS.a2v(ht.mapName, 5), 2 === ht.mapType && aS.a2w(ht
				.canvas), aS.mD(1, ht.passableWater), aS.mD(1, ht.passableMountains), aS.mD(10, ht.playerCount), aS.mD(10, ht.humanCount), aS.mD(9, ht.selectedPlayer), aS.mD(1, ht.gameMode), aS.mD(2, ht.playerMode), aS.mD(2, ht
				.battleRoyaleMode), aS.mD(4, ht.numberTeams), aS.mD(1, ht.isZombieMode), aS.mD(1, ht.isContest), aS.mD(1, ht.isReplay), aS.a2p(ht.elo, 2, 14), aS.mD(1, ht.colorsType), aS.mD(1, ht.colorsPersonalized), aS.a2p(ht.colorsData, 10,
				18), aS.mD(1, ht.selectableColor), aS.a2p(ht.teamPlayerCount, 4, 10), aS.mD(1, ht.neutralBots), aS.mD(2, ht.botDifficultyType), aS.mD(4, ht.botDifficultyValue), aS.a2p(ht.botDifficultyTeam, 4, 4), aS.a2p(ht.botDifficultyData,
				10, 4), aS.mD(2, ht.spawningType), aS.mD(14, ht.spawningSeed), aS.a2p(ht.spawningData, 11, 12), aS.mD(1, ht.selectableSpawn), aS.mD(2, ht.playerNamesType), aS.a2t(ht.playerNamesData, 10, 5), aS.mD(1, ht.selectableName), aS.mD(
				2, ht.aIncomeType), aS.mD(8, ht.aIncomeValue), aS.a2p(ht.aIncomeData, 10, 8), aS.mD(2, ht.tIncomeType), aS.mD(8, ht.tIncomeValue), aS.a2p(ht.tIncomeData, 10, 8), aS.mD(2, ht.iIncomeType), aS.mD(8, ht.iIncomeValue), aS.a2p(ht
				.iIncomeData, 10, 8), aS.mD(2, ht.sResourcesType), aS.mD(11, ht.sResourcesValue), aS.a2p(ht.sResourcesData, 10, 11), aS.a2p(ht.aAA, 10, 30), ! function(wC) {
				var aS = vT,
					sj = eR.eS.sj,
					d2 = eR.eS.sk,
					d3 = eR.eS.sl,
					d4 = eR.eS.sm,
					b7 = sj.length;
				aS.mD(5, wC), aS.mD(30, b7), aS.mD(30, eR.eS.sq.length);
				for (var ai = 0; ai < b7; ai++) {
					var cY = sj[ai];
					aS.mD(4, cY), aS.mD(9, d2[ai]), 0 === cY ? aS.mD(22, d3[ai]) : 1 === cY ? (aS.mD(10, d3[ai]), aS.mD(10, d4[ai])) : 2 === cY ? (aS.mD(10, d3[ai]), aS.mD(9, d4[ai])) : 3 === cY ? (aS.mD(10, d3[ai]), aS.mD(27, d4[ai])) :
						4 === cY ? (aS.mD(10, d3[ai]), aS.mD(16, d4[ai])) : 5 === cY || 6 === cY ? aS.mD(10, d3[ai]) : 7 === cY ? aS.mD(1, d3[ai]) : 10 === cY && (aS.mD(20, d3[ai]), aS.mD(22, d4[ai]))
				}
			}(wC), ! function(wC) {
				for (var aS = vT, so = eR.eS.so, sq = eR.eS.sq, b7 = so.length, ai = 0; ai < b7; ai++) aS.mD(1, so[ai]), aS.mD(wC, sq[ai])
			}(wC), vT.f7),
			ht = q.aN(aS - 1, 6) + 1,
			wC = (jX.jY(6 * ht) !== vT.ce.length && vT.ce.push(0), ! function() {
				var aS = vT;
				aS.f7 = 24, aS.mD(31, aS.ce.length), aS.f7 = 12, aS.mD(12, function() {
					for (var ce = vT.ce, b7 = ce.length, vd = lh.rVersion, ai = 3; ai < b7; ai++) vd = vd + ce[ai] & 4095;
					return vd
				}())
			}(), jW.b(vT.ce), hS.et.aA8(hS.et.aA9(ht)));
		return jW.kJ(), vT.b(), wC
	}
}

function aAC() {
	var aAD, aAE = new Uint8Array(5),
		aAF = new Uint8Array(5);
	this.aAG = new aAH, this.b = function() {
		for (var d0 = ep.buffer.data[119].value, ai = 0; ai < aAE.length; ai++) aAE[ai] = (d0 >> 2 * ai) % 4
	}, this.a3G = function() {
		aAD = [L(157), "", L(158, [a8W.aAI[28]]), L(159, [a8W.aAI[26]]), L(160, [a8W.aAI[0]])], this.aAG.b()
	}, this.b8 = function() {
		this.aAG.b8()
	}, this.a5i = function(id) {
		1 < id && di.dj() || ! function(f7) {
			if (3 === aAE[f7] || 1 === aAF[f7]) return;
			if (aAF[f7] = 1, !(Math.random() < .6)) {
				aAE[f7]++;
				for (var d0 = 0, ai = 0; ai < aAE.length; ai++) d0 += aAE[ai] << 2 * ai;
				ep.eq.er(119, d0)
			}
			return 1
		}(id) || e.aAK(aAD[id])
	}
}

function fY() {
	function aAT(player, po, aAP, iw) {
		var pn;
		if (j1.zb(aAP)) pn = c.c2;
		else {
			if ((pn = j1.zZ(aAP)) === player) return void pz.q0(player, po - aa.bY.py(player, po), 12);
			if (!a0f.a1W(player, pn)) return void ss.aAX.aAY(player, pn, po)
		}
		a0n.q5(player, pn) || a0n.q6(player) ? (y.bW[player].push(iw << 2), a0n.iu(player, po, pn), aAZ.yd(player, !0)) : pz.q0(player, po, 12)
	}
	this.b8 = function() {
		for (var it = bQ.fH.it, iz = bQ.fH.iz, zo = bQ.fH.zo, ai = bQ.fH.jO - 1; 0 <= ai; ai--) 65535 === zo[ai] && function(ai, iw, vA) {
			if (6 === vA) {
				if (bQ.fq.aAR(ai, iw)) return bQ.fH.jI[ai]++, bQ.fH.zo[ai] = 0, 0
			} else {
				var player = bQ.fH.j6[ai] >> 3,
					ai = bQ.fH.zg[ai];
				pz.aAS(player), vA < 4 ? aAT(player, ai, iw + ix.a3L[vA] << 2, iw) : 4 === vA ? function(player, po, iw) {
					var ai, a1u, a3P = ix.a3M,
						a1Q = ix.j3(iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zb(a1u)) return aAT(player, po, a1u, iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zY(a1u) && !j1.aAW(player, a1u)) return aAT(player, po, a1u, iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zY(a1u)) return aAT(player, po, a1u, iw)
				}(player, ai, iw) : 5 === vA && function(player, po, iw) {
					var ai, a1u, a3P = ix.a3M,
						a1Q = ix.j3(iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zY(a1u) && j1.aAW(player, a1u)) return aAT(player, po, a1u, iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zY(a1u)) return aAT(player, po, a1u, iw);
					for (ai = 0; ai < 4; ai++)
						if (a1u = a1Q + a3P[ai], j1.zb(a1u)) return aAT(player, po, a1u, iw)
				}(player, ai, iw)
			}
			return 1
		}(ai, ix.iy(iz[ai]), it[ai] % 64) && (bQ.fq.a0O(ai), bQ.fO.a0P(ai))
	}, this.zx = function(player, ic, vA, io, po) {
		if (!(5 <= vA)) {
			var aAM = c.t;
			if (aa.bY.bZ(aAM) && a0f.a1W(player, aAM) && player !== aAM && 0 !== y.uW[aAM].length && aa.bY.aAN(player, 5)) {
				for (var aAP, aAO = !1, ai = 0; ai < 4; ai++)
					if (aAP = ic + ix.a3L[ai] << 2, j1.uZ(aAP) && !j1.zb(aAP) && j1.zZ(aAP) === aAM) {
						aAO = !0;
						break
					} aAO && (e.aAQ(719, 0), vA = po < 25e3 ? L(161) + " (" + aa.b1.b3(po) + ") ⛵" : L(162) + " (" + aa.b1.b3(po) + ") 🚢", e.u(180, vA, 719, player, v.a2Y, v.x, -1, !0, void 0, {
					cT: 1,
					io: io
				}))
			}
		}
	}
}

function uE() {
	var be;
	10 === gW.kY ? be =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === gW.kY ? be =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === gW.kY ? be =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === gW.kY ? be =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === gW.kY ? be =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === gW.kY ? be =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === gW.kY ? be =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === gW.kY ? be =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === gW.kY ? be =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === gW.kY ? be =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === gW.kY ? be =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === gW.kY ? be =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === gW.kY && (be =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new wA).ec(be)
}

function aAa() {
	var aAb = aAc(),
		aAd = pY(),
		aAe = aAf();
	this.jc = function() {
		return 123
	}, this.eV = function() {
		es.et.a9z(ep.buffer.data[183].value, 15), jX.mD(14, aAb), jX.mD(7, aAd), jX.mD(12, aAe)
	}
}

function a8j() {
	this.aAg = 0;
	var aAj, aAh = null,
		aAi = 0,
		aAk = "",
		aAl = 0,
		aAm = null,
		aAn = -1,
		aAo = -1,
		aAp = 0;

	function aAx() {
		if (null !== aAm && null !== aAh) {
			aAi = 0;
			try {
				window.turnstile.remove(aAh), aAm.remove()
			} catch (cc) {
				console.log("turnstile remove failed " + cc)
			}
			aAh = aAm = null
		}
	}

	function aAu(aAy) {
		return "" !== aAk && aAl + 1e3 * (300 - aAy) > performance.now()
	}
	this.b = function() {
		var aAs;
		lh.li || !lh.vf && !lh.aAr ? (console.log("turnstile cannot be loaded"), this.aAg = -1) : ((aAs = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aAs.async = !0, aAs
			.onload = function() {
				vo.turnstile.aAg = 1, console.log("turnstile onload"), vo.turnstile.aAt()
			}, aAs.onerror = function() {
				vo.turnstile.aAg = -1, console.log("turnstile onerror")
			}, document.head.appendChild(aAs))
	}, this.aAt = function() {
		var av;
		return !(1 !== this.aAg || (window.turnstile ? aAi ? (console.log("turnstile error 246"), 1) : aAu(30) || (av = performance.now()) < aAp && aAn === es.et.aA0(ep.buffer.data[105].value, 5) && aAo === a8e.aAv || (aAk = "", aAi = 1, aAj =
			av, (aAm = document.createElement("div")).style.position = "fixed", aAm.style.left = "0", aAm.style.top = "0", aAm.style.zIndex = "100", document.body.appendChild(aAm), console.log("turnstile render"), aAh = window
			.turnstile.render(aAm, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(vS) {
					console.log("turnstile success " + Math.floor(performance.now() - aAj)), aAk = vS, aAl = performance.now(), vo.turnstile.aAw(), aAx()
				},
				"expired-callback": function() {
					aAx(), console.log("turnstile expired " + Math.floor(performance.now() - aAj))
				},
				"error-callback": function() {
					aAx(), console.log("turnstile callback error " + Math.floor(performance.now() - aAj)), vo.turnstile.aAg = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		aAx()
	}, this.aAw = function() {
		aAu(8) && hq.kE && jZ.fH.lZ(jZ.fH.tO) && (aAp = performance.now() + 36e5 - 1e4, aAn = es.et.aA0(ep.buffer.data[105].value, 5), aAo = a8e.aAv, jZ.rs.vR(aAk), aAk = "", console.log("sendTokenToLobby success"))
	}
}

function aAz() {
	var eD, wz, aB0, ey;

	function k4() {
		aB1.kJ(), dx.x3()[19] = null, dx.mQ()
	}

	function aB8() {
		aBC(), aBA()
	}

	function aBC() {
		aB0.dp.lastChild && dx.removeChild(aB0.dp, aB0.dp.lastChild)
	}

	function aBA() {
		var aBD = gW.uQ(c.data);
		c.data.canvas = gW.uI(aBD, c.data.mapSeed).u0, aBB()
	}

	function aBB() {
		var pT = c.data.canvas;
		pT.style.width = "100%", aB0.dp.appendChild(pT)
	}
	this.aBE = function(pT) {
		c.data.canvas && aBC(), c.data.canvas = pT, aBB()
	}, this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(163), [new eG("⬅️ " + L(22), k4)]), 2 === c.data.mapType && aB1.b(), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(164), L(165), L(166)],
			value: c.data.mapType
		}, function(f7) {
			2 === (c.data.mapType = f7) ? (aB1.b(), c.data.canvas = null) : (c.data.passableWater = c.data.passableMountains = 1, aB1.kJ()), dx.ej(20)
		})), 2 <= c.data.mapType && (f2.f5(new fB), f2.f5(new a4A({
			value: c.data.passableWater
		}, L(167), function(value) {
			c.data.passableWater = value
		})), f2.f5(new a4A({
			value: c.data.passableMountains
		}, L(168), function(value) {
			c.data.passableMountains = value
		})));
		ey.push(f2)
	}(ey = []), function(ey) {
		if (0 === c.data.mapType) {
			for (var f2 = new f3, ot = (f2.f4(L(163)), []), ai = 0; ai < gW.ko.gj.length; ai++) ot.push(gW.ko.gi[gW.ko.gj[ai]].name);
			f2.vx(new r2({
				ot: ot,
				value: c.data.mapProceduralIndex
			}, function(f7) {
				c.data.mapProceduralIndex = f7, aB8()
			})), ey.push(f2)
		}
	}(ey), function(ey) {
		if (1 === c.data.mapType) {
			for (var f2 = new f3, ot = (f2.f4(L(163)), []), ai = 0; ai < gW.ko.gk.length; ai++) ot.push(gW.ko.gi[gW.ko.gk[ai]].name);
			f2.vx(new r2({
				ot: ot,
				value: c.data.mapRealisticIndex
			}, function(f7) {
				c.data.mapRealisticIndex = f7, aB8()
			})), ey.push(f2)
		}
	}(ey), function(ey) {
		var f2;
		2 === c.data.mapType && ((f2 = new f3).f4(L(169)), f2.f5(new f6(ep.buffer.data[162], 1)), f2.f4(L(170), "0.8em"), f2.f5(new f9([new eG(L(171), function() {
			return aB1.aB9(), !0
		}).button])), ey.push(f2))
	}(ey), function(ey) {
		var f2, kF;
		2 === c.data.mapType && ((f2 = new f3).f4(L(172)), kF = new f6({
			f7: -1,
			value: c.data.mapName
		}, 0, 0, function(cc) {
			c.data.mapName = cc.target.value = cc.target.value.slice(0, 20)
		}), f2.f5(kF), ey.push(f2))
	}(ey), function(ey) {
		var f2, kF, w3;
		0 === c.data.mapType && ((f2 = new f3).f4("Seed"), kF = new f6({
			f7: -1,
			value: c.data.mapSeed
		}, 1, 0, function(cc) {
			cc = Math.abs(Math.floor(cc.target.value)) % 16384;
			c.data.mapSeed !== cc && (c.data.mapSeed = cc, aB8())
		}), w3 = new eG(L(126), function(cc) {
			var h0 = Math.floor(16384 * Math.random());
			if (c.data.mapSeed !== h0) return kF.cc.value = c.data.mapSeed = h0, aB8(), !0
		}), f2.f5(kF), f2.f5(new f9([w3.button])), ey.push(f2))
	}(ey), function(ey) {
		(aB0 = new f3).f4(L(143)), 2 !== c.data.mapType ? aBA() : c.data.canvas && aBB();
		ey.push(aB0)
	}(ey), ey))
}

function aBF() {
	this.aBG = function(r9, aBH) {
		jX.kX(11), jX.mD(1, 0), jX.mD(6, 4), jX.mD(1, aBH ? 1 : 0), jX.mD(3, 0 === c.bH ? hq.kE ? 6 : 0 : c.bl ? 1 : c.aH ? 7 : c.d < 7 ? 2 : 8 === c.d ? 4 : 9 === c.d ? 5 : 3), jZ.fH.send(r9, jX.lf)
	}, this.tR = function() {
		jX.kX(58), jX.mD(1, 0), jX.mD(6, 5), jX.mD(8, jZ.fH.tO), jX.mD(10, a4h.tE), jX.mD(9, a4h.tF), jX.mD(10, lh.aBI), jX.mD(14, lh.ve), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBJ = function(ic) {
		jX.kX(27), jX.mD(1, 1), jX.mD(4, 0), jX.mD(22, ic), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBK = function(a3c, pn) {
		jX.kX(25), jX.mD(1, 1), jX.mD(4, 1), jX.mD(10, a3c), jX.mD(10, pn), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBL = function(a3c, aBM) {
		jX.kX(24), jX.mD(1, 1), jX.mD(4, 2), jX.mD(10, a3c), jX.mD(9, aBM), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBN = function(a3c, aBO) {
		jX.kX(42), jX.mD(1, 1), jX.mD(4, 3), jX.mD(10, a3c), jX.mD(27, aBO), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBP = function(a3c, io) {
		jX.kX(31), jX.mD(1, 1), jX.mD(4, 4), jX.mD(10, a3c), jX.mD(16, io), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBQ = function(pn) {
		jX.kX(15), jX.mD(1, 1), jX.mD(4, 5), jX.mD(10, pn), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBR = function(f7) {
		jX.kX(15), jX.mD(1, 1), jX.mD(4, 6), jX.mD(10, f7), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBS = function(aBT) {
		jX.kX(6), jX.mD(1, 1), jX.mD(4, 7), jX.mD(1, aBT), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBU = function() {
		jX.kX(5), jX.mD(1, 1), jX.mD(4, 8), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBV = function(a3c, ic, pn) {
		jX.kX(47), jX.mD(1, 1), jX.mD(4, 10), jX.mD(10, a3c), jX.mD(10, pn), jX.mD(22, ic), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBW = function(aBX, aBY) {
		jX.kX(24), jX.mD(1, 1), jX.mD(4, 15), jX.mD(9, aBY), jX.mD(10, aBX), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBZ = function(lp) {
		jX.kX(14), jX.mD(1, 1), jX.mD(4, 14), jX.mD(9, lp), jZ.fH.send(jZ.fH.qt, jX.lf)
	}, this.aBa = function(aBb, target) {
		var ai, b7 = aBb.length;
		for (jX.kX(14 + 9 * b7), jX.mD(1, 1), jX.mD(4, 13), jX.mD(9, target), ai = 0; ai < b7; ai++) jX.mD(9, aBb[ai]);
		jZ.fH.send(jZ.fH.qt, jX.lf)
	}
}

function aBc() {
	this.aBd = function() {
		for (var pG, b7 = aJ.aK, lK = aJ.bX, xY = y.xY, a2S = this.yv(), ai = 0; ai < b7; ai++) pG = lK[ai], aa.bY.o2(pG) || (xY[pG] = a2S);
		var xV = y.xV,
			xW = y.xW,
			xX = y.xX,
			xZ = y.xZ,
			b7 = c.aI;
		for (ai = 0; ai < b7; ai++)(0 === xZ[ai] || xX[ai] < 1 || 2 * xV[ai] > 3 * (xW[ai] + xX[ai])) && (xY[ai] = 0);
		var aBe = 0;
		for (ai = 0; ai < b7; ai++) aBe += 0 < xY[ai];
		return aBe
	}, this.yv = function() {
		return Math.min(65535, bc.ql())
	}
}

function aBf() {
	var eh, ei, ey, aBg = -1;
	this.show = function() {
		eh.show(), this.resize(), aBg = ep.buffer.data[125].value
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(173), [new eG("⬅️ " + L(22), function() {
		aBg !== ep.buffer.data[125].value ? dx.fH.aBh() : dx.eH(13)
	})]), ei = new en(eh.eM, ((ey = []).push(function() {
		var f2 = new f3,
			w3 = (f2.f4(L(174)), f2.fA(L(175)), new eG(L(88), function() {
				ep.eq.er(130, 0), dx.fH.aBh()
			}, 0, 0, 1)),
			kF = new f6(ep.buffer.data[126], 0, function() {
				w3.button.click()
			});
		return f2.f5(kF), kF.cc.placeholder = "a,b,c", kF.cc.style.marginTop = "0.5em", f2.f5(new f9([w3.button])), f2
	}()), ey.push(function() {
		var f2 = new f3,
			w3 = new eG(L(88), function() {
				ep.eq.er(130, 1), dx.fH.aBh()
			}, 0, 0, 1),
			w4 = new f6(ep.buffer.data[129], 1, function() {
				w4.cc.focus()
			}),
			w5 = new f6(ep.buffer.data[128], 1, function() {
				w3.button.click()
			});
		return f2.f4(L(86)), f2.f5(w5), w5.cc.style.marginBottom = "0.5em", f2.f4(L(87)), f2.f5(w4), f2.f5(new f9([w3.button])), f2
	}()), ey.push(function() {
		var f2 = new f3;
		return f2.f4(L(176)), ep.buffer.data[125].ot = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], f2.vx(new r2(ep.buffer.data[125])), f2
	}()), ey.push(function() {
		var f2 = new f3;
		return f2.f4(L(177)), f2.f5(new a4A(ep.buffer.data[127], L(178))), f2
	}()), ey))
}

function aBl() {
	var aBm = 501,
		aBq = (this.aBn = new Uint32Array(aBm), this.aBo = new Uint32Array(aBm), this.ba = new Uint16Array(aBm), this.aBp = 0, 1),
		aBr = 0;

	function aBu(self) {
		self.max.fill(0)
	}

	function aC1(self, ai) {
		self.max[0] = Math.max(self.aBn[ai], self.max[0]), self.max[1] = Math.max(self.aBo[ai], self.max[1]), self.max[2] = Math.max(self.ba[ai], self.max[2])
	}
	this.max = [0, 0, 0], this.aBs = 0, this.qH = new Array(21), this.aBt = null, this.c7 = function() {
		this.aBt = [L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(152), L(93), L(187), L(188), L(189), L(190), "", L(191), L(192), L(193), L(194), L(195), L(196)]
	}, this.b = function() {
		this.aBp = 0, aBq = 1, this.aBs = 0, aBr = 0, aBu(this), this.qH.fill(0)
	}, this.aBv = function(player, a3c) {
		aa.bY.qG(player) && (this.qH[0] += a3c + 1, this.qH[1]++, this.qH[12] += ij.zr[1])
	}, this.aBw = function(player, aBM) {
		player === c.t && (e.aBw(ij.zr[0], ij.zr[1], aBM), this.qH[12] += ij.zr[1], this.qH[16] += ij.zr[0]), aBM === c.t && (e.aBx(ij.zr[0], player), this.qH[10] += ij.zr[0])
	}, this.aBy = function(player) {
		aa.bY.qG(player) && (this.qH[2]++, this.qH[12] += ij.zr[1])
	}, this.aBz = function(player) {
		aa.bY.qG(player) && (this.qH[19]++, this.qH[12] += ij.zr[1])
	}, this.aAS = function(player) {
		aa.bY.qG(player) && this.qH[20]++
	}, this.q0 = function(player, a9I, f7) {
		aa.bY.qG(player) && (this.qH[f7] += a9I)
	}, this.b8 = function() {
		var self;
		this.aBs || 0 < aBr-- || ((self = this).aBn[self.aBp] = y.aO[c.t], self.aBo[self.aBp] = y.ax[c.t], self.ba[self.aBp] = ay.bb(c.t), aC1(self, self.aBp), self.aBp++, self.aBp === aBm && function(self) {
			aBu(self), aC1(self, 0), self.aBp = 1 + q.aN(aBm, 2);
			for (var ai = 1; ai < self.aBp; ai++) self.aBn[ai] = self.aBn[2 * ai], self.aBo[ai] = self.aBo[2 * ai], self.ba[ai] = self.ba[2 * ai], aC1(self, ai);
			aBq *= 2
		}(self), aBr = aBq - 1, nw.kQ(), 0 === y.an[c.t] && (self.aBs = bc.ql()))
	}
}

function aC3() {
	var a3, a4, aY, e0, aC4, aC5, aC6, aC7, aC8, aS, aC9, aCA;
	this.nG = !1, this.b = function(be, aCB) {
		if (1 === aT.id && 13 <= aT.og && aT.og < 18) return aCB ? void(aC9 = be) : aC9 !== be ? void 0 : void aT.oi.saveString(200, be);
		aCB && (aC9 = be, (aCA = document.createElement("a")).appendChild(document.createTextNode(aC9)), this.nG = !0, aCA.title = aC9, aCA.target = "_blank", aCA.href = aC9, aCA.style.textAlign = "center", aCA.style.color = v.w, aCA.style
			.position = "absolute", aCA.style.padding = "0px", aCA.style.margin = "0px", this.resize(), document.body.appendChild(aCA), bc.bj = !0)
	}, this.du = function() {
		return !(!this.nG || (dx.removeChild(document.body, aCA), this.nG = !1))
	}, this.gF = function(gB, gE) {
		return !!this.nG && ((gB < a3 || gE < a4 || a3 + aS < gB || a4 + aY < gE || a3 + aS - e0 < gB && gE < a4 + e0) && (bc.bj = !0, this.nG = !1, dx.removeChild(document.body, aCA)), !0)
	}, this.resize = function() {
		var aZ, aCC;
		this.nG && (aC7 = Math.floor(.8 * (aT.aU.aV() ? aW.aS > aW.aY ? .6 : .55 : .4) * aW.aX), e0 = Math.floor(.15 * aC7), aC4 = Math.floor(.35 * e0), aC5 = Math.floor(.5 * e0), aC6 = Math.floor(2.5 * aC5), aY = e0 + aC4 + 3 * aC5, aZ = aa.ab
			.ac(1, aC4 / aW.eB), aC8 = Math.floor(aW.eB * a3B.measureText(aC9, aZ)), aCC = aS = (aC7 < aC8 ? aC8 : aC7) + 2 * aC6, aS = Math.min(aS, aW.aS - 2 * (aT.aU.aV() ? 2 : 1) * ak.gap), aZ = aa.ab.ac(1, aS / aCC * aC4 / aW.eB), aC8 =
			Math.floor(aW.eB * a3B.measureText(aC9, aZ)), a3 = Math.floor((aW.aS - aS) / 2), a4 = Math.floor((aW.aY - aY) / 2), aCA.style.font = aZ, aCA.style.top = Math.floor((a4 + 1.4 * aC5 + e0) / aW.eB) + "px", aCA.style.left = Math
			.floor((a3 + (aS - aC8) / 2) / aW.eB) + "px")
	}, this.bm = function() {
		this.nG && (bn.fillStyle = v.x, bn.fillRect(a3, a4 + e0, aS, aY - e0), bn.fillStyle = v.aCD, bn.fillRect(a3, a4, aS, e0), bn.fillStyle = v.w, bn.lineWidth = ak.o5, bn.strokeStyle = v.w, bn.strokeRect(a3, a4, aS, aY), bn.fillRect(a3, a4 +
			e0, aS, ak.o5), bn.font = aa.ab.ac(1, .48 * e0), aa.ab.textAlign(bn, 1), aa.ab.textBaseline(bn, 1), bn.fillText(L(197), Math.floor(a3 + (aS - .5 * e0) / 2), Math.floor(a4 + .55 * e0)), nK.o3(Math.floor(a3 + aS - .8 * e0), Math
			.floor(a4 + .25 * e0), Math.floor(.5 * e0)), bn.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function fr() {
	var aCE = 0,
		aCF = null;
	this.b = function() {
		null === aCF && (aCF = new Uint16Array(2 * bQ.fH.uT)), aCE = 0
	}, this.iu = function(aCG, fq) {
		var aCH = aCF;
		aCH[aCE++] = aCG, aCH[aCE++] = fq
	}, this.aCI = function(player, aCJ) {
		for (var aCH = aCF, b7 = aCE, ai = 0; ai < b7; ai += 2)
			if (aCH[ai] === aCJ && bQ.bR.ip(aCH[ai + 1]) && player === bQ.fH.j6[ij.ik[2]] >> 3) return !0;
		return !1
	}, this.a0O = function(aCK) {
		var fX = bQ.fH.it[aCK];
		if (!(fX < 64)) {
			for (var aCJ = bQ.fH.il[aCK], aCH = aCF, b7 = aCE, ai = b7 - 2; 0 <= ai; ai -= 2)
				if (aCH[ai] === aCJ) {
					{
						aCO = void 0;
						var aCO = aCH[ai + 1];
						bQ.bR.ip(aCO) && bQ.fq.aCW(ij.ik[2])
					}
					aCH[ai] = aCH[b7 - 2], aCH[ai + 1] = aCH[b7 - 1], b7 -= 2
				} aCE = b7
		}
	}, this.aAR = function(aCM, aCN) {
		for (var aCO = bQ.fH.il[aCM], aCJ = -1, aCH = aCF, b7 = aCE, ai = 1; ai < b7; ai += 2)
			if (aCH[ai] === aCO) {
				aCJ = aCH[ai - 1];
				break
			} if (-1 === aCJ) return !1;
		if (!bQ.bR.ip(aCJ)) return !1;
		var aCK = ij.ik[2],
			jF = bQ.fH.jG[aCK];
		if (aCN === jF[jF.length - 1]) bQ.fH.jG[aCM] = bQ.fl.aCP(bQ.fH.jG[aCM], bQ.fl.jN(jF));
		else {
			var aCQ = bQ.bR.aCR(jF, aCN);
			if (-1 === aCQ) return !1;
			var aCS = bQ.fH.jI[aCK];
			aCQ === aCS ? (aCK = ix.iy(bQ.fH.iz[aCK]), bQ.fH.jG[aCM] = bQ.fl.aCU(bQ.fH.jG[aCM], jF, aCQ, aCN, ix.jB(jF[aCQ], aCN) > ix.jB(jF[aCQ], aCK))) : bQ.fH.jG[aCM] = bQ.fl.aCU(bQ.fH.jG[aCM], jF, aCQ, aCN, aCS < aCQ)
		}
		return !0
	}, this.aCW = function(ig) {
		var jF, b6 = bQ.fH,
			fX = b6.it[ig];
		return fX % 64 != 5 && (jF = b6.jG[ig], b6.zo[ig] = 65535 - b6.zo[ig], b6.jI[ig] = jF.length - b6.jI[ig] - 2, b6.jG[ig] = bQ.fl.jN(jF), b6.it[ig] = fX - fX % 64 + 5, !0)
	}
}

function a4E() {
	this.resize = function() {
		var ai, aCX = document.head.querySelector("style#ss");
		if (aCX)
			for (ai = aCX.sheet.cssRules.length - 1; 0 <= ai; ai--) aCX.sheet.deleteRule(0);
		else(aCX = document.createElement("style")).id = "ss", document.head.appendChild(aCX);
		var n3 = "::-webkit-scrollbar",
			aCY = aa.ab.e9(ak.aCZ),
			pS = aa.ab.e9(Math.max(aa.ab.e1(.012), 8));
		try {
			aCX.sheet.insertRule(n3 + "{width:" + pS + ";height:" + pS + ";}", aCX.sheet.cssRules.length), aCX.sheet.insertRule(n3 + "-thumb{background-color:white;}", aCX.sheet.cssRules.length), aCX.sheet.insertRule(n3 + "-track{background:" + v
				.iM + ";}", aCX.sheet.cssRules.length), aCX.sheet.insertRule(n3 + "-track:horizontal{border-top:" + aCY + " solid white;}", aCX.sheet.cssRules.length), aCX.sheet.insertRule(n3 + "-track:vertical{border-left:" + aCY +
				" solid white;}", aCX.sheet.cssRules.length), aCX.sheet.insertRule(n3 + "-button{display:none;}", aCX.sheet.cssRules.length)
		} catch (cc) {
			for (console.log("error 3425: " + cc), ai = aCX.sheet.cssRules.length - 1; 0 <= ai; ai--) aCX.sheet.deleteRule(0)
		}
	}
}

function aCa() {
	this.wM = function(ce) {
		ce.fill(0)
	}, this.t1 = function(ce) {
		for (var b7 = ce.length, ai = 0; ai < b7; ai++) ce[ai] = []
	}, this.aCb = function(cE, gc) {
		for (var cF = ij.aCc, ai = 0; ai < 3; ai++) cF[ai] = gc * cE[ai];
		return cF
	}, this.aCd = function(cE, cF, aCe) {
		for (var i = 0, ai = 0; ai < 3; ai++) i += Math.abs(cE[ai] - cF[ai]);
		return aCe <= i
	}, this.aCf = function(cE, aCg) {
		for (var ai = 0; ai < 3; ai++) cE[ai] = q.a0(cE[ai] + aCg, 0, 255);
		return cE
	}, this.a48 = function(ce, mS, mT) {
		mT = mT || ce.length - 1;
		for (var aCh = 0, ai = mS = mS || 0; ai <= mT; ai++) aCh += ce[ai];
		return aCh
	}, this.aCi = function(ce, aCj) {
		for (var ai, w7, b7 = ce.length, aCk = [], cy = b7 - 1; 0 <= cy; cy--) {
			for (ai = w7 = 0; ai < b7; ai++) aCj(ce[ai]) < aCj(ce[w7]) && (w7 = ai);
			b7--, aCk.push(ce[w7]), ce[w7] = ce[b7], ce.pop()
		}
		return aCk
	}, this.min = function(ce) {
		var ai, d0, b7 = ce.length;
		if (0 === b7) return 0;
		for (d0 = ce[0], ai = 1; ai < b7; ai++) d0 = Math.min(d0, ce[ai]);
		return d0
	}, this.max = function(ce) {
		var b7 = ce.length;
		if (0 === b7) return 0;
		for (var d0 = ce[0], ai = 1; ai < b7; ai++) d0 = Math.max(d0, ce[ai]);
		return d0
	}, this.aCl = function(ce, d0) {
		for (var b7 = ce.length, cW = 0, ai = 0; ai < b7; ai++) cW += ce[ai] > d0;
		return cW
	}, this.aCm = function(v5, v6, min) {
		for (var b7 = v6[0], ai = b7 - 1; 0 <= ai; ai--) v5[ai] < min && (v5[ai] = v5[--b7]);
		v6[0] = b7
	}, this.aCn = function(ce, b7, value) {
		for (var ai = 0; ai < b7; ai++) ce[ai] -= value
	}, this.a6q = function(ce) {
		for (var b7 = ce.length, ai = 0; ai < b7; ai++)
			if ("string" != typeof ce[ai]) return !1;
		return !0
	}, this.x4 = function(be, ce, aCo) {
		ce.fill(0);
		for (var bg = be.split(","), b7 = Math.min(bg.length, ce.length), ai = 0; ai < b7; ai++) ce[ai] = Math.min(parseInt(bg[ai]), aCo)
	}, this.aCp = function(be, ce, a6S) {
		ce.fill("");
		for (var bg = be.split('"'), b7 = Math.min(bg.length, 2 * ce.length), ca = 0, ai = 1; ai < b7; ai += 2) ce[ca++] = bg[ai].slice(0, a6S)
	}, this.aCq = function(ce, cW) {
		if (0 === cW) ce.fill(0);
		else {
			var aCh = this.a48(ce),
				b7 = ce.length;
			if (0 === aCh) ce.fill(q.aN(cW, b7));
			else
				for (var ai = 0; ai < b7; ai++) ce[ai] = q.aN(cW * ce[ai], aCh);
			if (0 === (aCh = this.a48(ce))) ce[1] = cW;
			else
				for (var ca = 0; aCh++ < cW;) ce[ca = (ca + 1) % b7] && ce[ca]++
		}
	}, this.a2s = function(ce) {
		if (!ce) return 0;
		var b7 = ce.length;
		if (0 === b7) return 0;
		for (var d0 = ce[b7 - 1], ai = b7 - 2; 0 <= ai; ai--)
			if (ce[ai] !== d0) return ai + 2;
		return 1
	}, this.ku = function(ce) {
		for (var aCh = 0, ai = 0; ai < ce.length; ai++) aCh += ce[ai].length;
		return aCh
	}, this.aCr = function(aCs) {
		for (var ce = [], ai = 0; ai < aCs.length; ai++) ce = ce.concat(aCs[ai]);
		return ce
	}, this.has = function(ce, d0) {
		for (var b7 = ce.length, ai = 0; ai < b7; ai++)
			if (ce[ai] === d0) return !0;
		return !1
	}
}

function fF() {
	function aCt(ai, type, s3, og) {
		ep.buffer.data.push({
			f7: ai,
			type: type || 0,
			value: s3 || 0,
			s3: s3 || 0,
			og: og || 0
		})
	}

	function aCu(ai, type, s3, og) {
		ep.buffer.data.push({
			f7: ai,
			type: type,
			value: s3 || "",
			s3: s3 || "",
			og: og || 0
		})
	}

	function aCv(gJ) {
		for (var ai = ep.buffer.data.length; ai < gJ; ai++) ep.buffer.data.push(null)
	}
	this.data = [], this.b = function() {
		aCt(0, 1, 0, 5), aCt(1, 1, 1), aCt(2, 0), aCu(3, 2), aCt(4, 1), aCu(5, 2, "system-ui", 2), aCt(6, 0), aCt(7, 0, 0), aCt(8, 0), aCt(9, 1, 1), aCt(10, 1), aCt(11, 1, 1), aCu(12, 2, navigator.language), aCt(13), aCt(14), aCt(15, 0, 1), aCt(
				16, 0, 3), aCv(100), aCu(100, 2), aCu(101, 2), aCu(102, 2), aCu(103, 2), aCu(104, 2), aCu(105, 2), aCu(106, 2), aCt(107), aCt(108), aCt(109), aCu(110, 2), aCt(111), aCt(112), aCt(113), aCu(114, 2), aCt(115), aCu(116, 2), aCt(117,
				1), aCu(118, 2, "", 2), aCt(119, 1, 0, 1), aCu(120, 2), aCt(121, 1, ~~(262144 * Math.random())), aCu(122, 2, "Player " + Math.floor(1e3 * Math.random())), aCt(123), aCu(124), aCt(125, 1), aCu(126, 2), aCt(127, 0, 1), aCt(128),
			aCt(129), aCt(130), aCt(131), aCt(132), aCu(133, 2), aCt(134, 0, 5), aCu(135, 2), aCu(136, 2), aCt(137), aCt(138), aCt(139), aCt(140), aCt(141), aCt(142), aCt(143), aCt(144), aCu(145, 2), aCt(146), aCt(147), aCu(148, 2), aCt(149),
			aCt(150, 0, 1), aCu(151, 2), aCt(152, 0, 5), aCt(153, 1), aCt(154, 1), aCu(155, 2), aCu(156, 2), aCt(157), aCt(158), aCt(159), aCt(160), aCu(161, 2), aCt(162, 0, 1024), aCu(163, 2, "0,0,0"), aCu(164, 2, "100,100,100"), aCu(165, 2,
				"30,30,30"), aCu(166, 2, "70,70,70"), aCu(167, 2, "100,100,100"), aCu(168, 2, "85,85,85"), aCu(169, 2, "100,100,100");
		for (var ai = 0; ai < 4; ai++) aCu(170 + ai, 2, "255,255,255");
		aCu(174, 2), aCu(175, 2), aCt(176, 0, 200), aCv(180), aCt(180, 0), aCt(181, 0), aCt(182, 0, 1023), aCu(183, 2)
	}, this.er = function(f7, value) {
		this.data[f7].value = value
	}, this.wd = function(f7, value) {
		this.er(f7, value);
		var value = String(value),
			b7 = value.length;
		5e4 < b7 ? console.log("storage value too large: index " + f7 + " size " + b7) : (ep.ef.save(f7, value), ep.ef.save(f7, String(this.data[f7].og), !0))
	}, this.aCw = function(f7) {
		return Number(this.data[f7].value)
	}, this.aCx = function(f7) {
		return String(this.data[f7].value)
	}
}

function aCy(mv) {
	var aCz = document.createElement("div");

	function iH() {
		di.dj() || (aCz.style.backgroundColor = aa.color.iP(v.iM, 50))
	}

	function iI() {
		aCz.style.backgroundColor = v.iM
	}
	this.er = function(n0) {
			aCz.textContent = n0
		}, this.show = function() {
			document.body.appendChild(aCz)
		}, this.resize = function() {
			var aY = aa.ab.e1(.03, .5);
			aCz.style.width = 2 * aY + "px", aCz.style.height = aY + "px", aCz.style.font = aa.ab.ac(1, .75 * aY), aa.ab.eA(aCz, 4), aa.ab.eA(aCz, 2)
		}, this.kJ = function() {
			aCz.onclick = null, aCz.onmouseover = null, aCz.onmouseout = null, dx.removeChild(document.body, aCz), aCz = null
		}, aCz.style.position = "absolute", iI(), aCz.style.color = v.w, aCz.style.zIndex = "3", aCz.style.right = "0", aCz.style.top = "0", aCz.style.display = "flex", aCz.style.justifyContent = "center", aCz.style.alignItems = "center", aCz.style
		.userSelect = "none", aCz.style.outline = "none", aCz.onclick = mv, aCz.onmouseover = iH, aCz.onmouseout = iI
}

function a6e() {
	this.L84 = ["You earned {10} gold!", "{0} earned {11} gold!", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Lobby", "▶️ Replay", "Back", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "Security Tip",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "White Arena", "Black Arena", "Island", "Mountains 1",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2",
		"British Isles", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Close {button}", "Ready", "Player Count", "Next Game", "📜 Game Log", "Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members",
		"Zombie Players", "🏆 Leaderboards", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Quit Game", "More", "🛠️ List Options", "Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "Interest Income", "Options", "Default", "Uniform", "Customized", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "No Admin",
		"Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Contest", "Top Clan", "Best Clan Member", "Top Admin",
		"Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Spawning", "Random", "Clustered", "Manual Spawn", "Type your message here...", "Choose Your Nation's Color!", "National Color",
		"Red: ", "Green: ", "Blue: ", "Clan Chart", "🛠️ Options", "📰 Propaganda", "Links", "Propaganda Text", "Colors", "Reset", "Language", "Preview", "Launch Campaign", "Gold Investment", "Launch", "Team {0}", "Team {0} won the game!",
		"Account Recovery", "Email", "Request Email", "Territorial Income", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Incoming Boat!", "Incoming Ship!", "Map",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe",
		"More Options", "Y-Axis Compression", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed", "You are leaving Territorial.io!", "Propaganda", "Report Abuse",
		"This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!",
		"You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}",
		"Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Activated", "Loading", "LEADERBOARD", "Mixed", "Team dependent", "Adjust", "My Color", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Previous 10", "Next 10",
		"1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking",
		"Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Territory", "Numbers", "Statistics", "Starting Resources", "Ship launched!", "Ship intercepted!", "You are leaving Territorial.io.", "Refresh", "Public Profile", "🧈 Gold",
		"Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Copy",
		"Search", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier",
		"Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified",
		"🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Replay Error", "Warning", "Loading...", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "You earned a participation reward of {10} gold.",
		"The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!",
		"You earned an additional {10} gold because you played for {1}.", "second played", "seconds played", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "⚔️ Join Lobby 2",
		"⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium",
		"High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection",
		"Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "⚔️ Play",
		"Settings", "Game Mode", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "{0} defeated {1}!"
	]
}

function aD0() {
	this.a4j = function() {
		for (var id = jW.jc(20), colors = new Array(11), ai = 0; ai < 11; ai++) colors[ai] = new Uint8Array([jW.jc(8), jW.jc(8), jW.jc(8)]);
		var rW = es.jd.ec(8);
		vo.vq.iu({
			id: id,
			colors: colors,
			rW: rW
		})
	}, this.a4u = function(r9) {
		var vP = jW.jc(3),
			cS = jW.jc(5),
			cS = vL.aD1.aD2(cS, jW.jc(30), jW.jc(30), jW.jc(30));
		jZ.rs.vO(r9, cS, vP, 0)
	}, this.a4k = function(r9) {
		this.a4u(r9), ep.eq.er(183, hS.et.aA8(hS.et.aA9(15))), 0 === r9 && 0 === ep.buffer.data[105].value.length ? jZ.rs.vV(0) : jZ.mn.aD3(r9), 4 === jZ.fH.aD4(r9).le() ? 6 === qp.tW() && jZ.kM.aD5(r9) : 5 !== jZ.fH.aD4(r9).le() || 8 !== qp
		.tW() && 10 !== qp.tW() || jZ.tQ.tR()
	}, this.a4n = function(r9) {
		var id = jW.jc(6);
		1 === id ? (ep.eq.er(160, jW.jc(30)), jZ.fH.lb(r9), a4z.aD6 || jZ.rs.vV(1), vi.a6v(), 8 === dx.jf && dx.jg().aD7()) : 21 === id ? 8 === dx.jf && dx.jg().jh(17) : 22 === id && (ep.eq.er(106, ep.buffer.data[110].value), ep.eq.er(110, ""),
			8 === dx.jf) && dx.jg().jh(15)
	}, this.a4q = function() {
		var b7 = jW.jc(16),
			aD8 = jW.jc(16);
		if (jW.jj(55 + 10 * b7 + 16 * aD8)) {
			for (var ce = [], ai = 0; ai < b7; ai++) ce.push(es.jk.jl(jW.jc(10)));
			vi.a6x(ce)
		} else jZ.fH.ja(0, 3270)
	}, this.a4v = function(r9) {
		for (var vP = jW.jc(3), cS = jW.jc(5), vP = {
				vP: vP,
				iQ: vL.aD1.aD2(cS, jW.jc(30), jW.jc(30), jW.jc(30))
			}, cS = jW.je(32), aD9 = [], ai = 0; ai < 17; ai++) aD9.push(new Uint8Array(jW.jc(16)));
		for (ai = 0; ai < 17; ai++)
			for (var ce = aD9[ai], b7 = ce.length, ca = 0; ca < b7; ca++) ce[ca] = jW.je(8);
		ru.show(aD9, cS, r9, vP)
	}
}

function aDA() {
	var aDB, aDC, aDD;

	function aDJ(ai) {
		var button = aDM.kA[ai],
			a3 = button.a3,
			a4 = button.a4,
			aS = button.aS,
			aY = button.aY;
		bn.fillStyle = button.aDG, bn.fillRect(a3, a4, aS, aY), ai === aDB && (bn.fillStyle = aDD, bn.fillRect(a3, a4, aS, aY)), bn.lineWidth = ak.o5, bn.strokeStyle = aDC, bn.strokeRect(a3, a4, aS, aY),
			function(button) {
				var a3 = button.a3,
					a4 = button.a4,
					aS = button.aS,
					aY = button.aY;
				aa.ab.textAlign(bn, 1), aa.ab.textBaseline(bn, 1), bn.font = button.font, bn.fillStyle = aDC, bn.fillText(button.hc, Math.floor(a3 + aS / 2), Math.floor(a4 + aY / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aS = 0, this.aY = 0, this.a4 = 0, this.gap = 0, this.b = function() {
		aDB = -1, aDC = v.w, aDD = "rgba(255,255,255,0.16)", this.kA = new Array(7), this.aY = Math.floor((aT.aU.aV() ? .123 : .093) * aW.aX), this.aS = Math.floor((aT.aU.aV() ? 3.96 : 4.2) * this.aY), this.gap = Math.floor(.025 * this.aS);
		var aDE = Math.floor(.26 * this.aY),
			aDF = aa.ab.ac(1, aDE);
		this.kA[0] = {
			a3: 0,
			a4: 0,
			aS: Math.floor(.6 * this.aS - this.gap / 2),
			aY: this.aY,
			hc: "Multiplayer",
			font: aDF,
			aDG: "rgba(22,88,22,0.8)",
			fontSize: aDE
		}, aDE = Math.floor(.18 * this.aY), aDF = aa.ab.ac(1, aDE), this.kA[1] = {
			a3: 0,
			a4: 0,
			aS: this.aS - this.kA[0].aS - this.gap,
			aY: this.aY,
			hc: "Single Player",
			font: aDF,
			aDG: "rgba(22,88,88,0.8)",
			fontSize: aDE
		}, this.kA[2] = {
			a3: 0,
			a4: 0,
			aS: this.aS,
			aY: Math.floor(.3 * this.aY),
			hc: "",
			font: this.kA[1].font,
			aDG: "rgba(100,0,0,0.8)",
			fontSize: this.kA[1].fontSize
		}, this.kA[3] = {
			a3: 0,
			a4: 0,
			aS: this.aS,
			aY: this.aY,
			hc: "Back",
			font: this.kA[0].font,
			aDG: "rgba(0,0,0,0.8)",
			fontSize: this.kA[0].fontSize
		}, this.kA[4] = {
			a3: 0,
			a4: 0,
			aS: this.aS,
			aY: Math.floor(.3 * this.aY),
			hc: "The game was updated!",
			font: this.kA[1].font,
			aDG: "rgba(100,0,0,0.8)",
			fontSize: this.kA[1].fontSize
		}, this.kA[5] = {
			a3: 0,
			a4: 0,
			aS: this.kA[0].aS,
			aY: Math.floor(.8 * this.aY),
			hc: "Reload",
			font: this.kA[0].font,
			aDG: "rgba(0,100,0,0.8)",
			fontSize: this.kA[0].fontSize
		}, this.kA[6] = {
			a3: 0,
			a4: 0,
			aS: this.kA[1].aS,
			aY: this.kA[5].aY,
			hc: "Back",
			font: this.kA[0].font,
			aDG: "rgba(0,0,0,0.8)",
			fontSize: this.kA[0].fontSize
		}, this.aDH()
	}, this.aDH = function() {
		this.a4 = Math.floor(.54 * aW.aY), this.kA[0].a3 = Math.floor(.5 * aW.aS - .5 * this.aS), this.kA[1].a3 = this.kA[0].a3 + this.kA[0].aS + this.gap, this.kA[2].a3 = this.kA[3].a3 = this.kA[0].a3, this.kA[4].a3 = this.kA[5].a3 = this.kA[0]
			.a3, this.kA[6].a3 = this.kA[1].a3, this.kA[0].a4 = Math.floor(.54 * aW.aY), this.kA[1].a4 = this.kA[0].a4, this.kA[2].a4 = Math.floor((aW.aY - this.kA[2].aY - this.kA[3].aY - this.gap) / 2), this.kA[3].a4 = this.kA[2].a4 + this.kA[2]
			.aY + this.gap, this.kA[4].a4 = Math.floor((aW.aY - this.kA[4].aY - this.kA[5].aY - this.gap) / 2), this.kA[5].a4 = this.kA[6].a4 = this.kA[4].a4 + this.kA[4].aY + this.gap
	}, this.aDI = function() {
		aDJ(0), aDJ(1)
	}, this.aDK = function() {
		aDJ(2), aDJ(3)
	}, this.aDL = function() {
		aDJ(4), aDJ(5), aDJ(6)
	}, this.gK = function(a3, a4, ap) {
		var ai = -1;
		return 0 === qp.tW() ? ai = this.a7D(a3, a4, 0, 2) : 3 === qp.tW() ? ai = this.a7D(a3, a4, 3, 1) : 5 === qp.tW() && (ai = this.a7D(a3, a4, 5, 2)), aDB !== ai && (aDB = ai, ap) && (bc.bj = !0), -1 !== ai && (a4z.reset(), !0)
	}, this.a7D = function(a3, a4, vG, size) {
		for (var ai = vG; ai < vG + size; ai++)
			if (a3 >= this.kA[ai].a3 && a4 >= this.kA[ai].a4 && a3 <= this.kA[ai].a3 + this.kA[ai].aS && a4 <= this.kA[ai].a4 + this.kA[ai].aY) return ai;
		return -1
	}
}

function aDO() {
	function aDS(ce, d0, ca) {
		for (var ai = 0; ai < 256; ai++) ce[ai] = (ce[ai] + (d0 >> (ai + ca) % 30 & 1)) % 256
	}
	this.b8 = function(aDP, aDQ) {
		var ce = new Uint8Array(256);
		return function(ce, aDP, aDQ) {
				var ai, aDV = 3 + (4 + aDP) % 32768,
					aDW = 12 + aDQ % 32768,
					aDX = 17 + ((aDP & aDQ) + (aDP | aDQ) + aDP) % 32768;
				for (ai = 0; ai < 256; ai++) aDV = 1 + aDV * aDW % aDX, ce[ai] = aDV % 256
			}(ce, aDP, aDQ), aDS(ce, aDP, 2), aDS(ce, aDQ, 7),
			function(ce) {
				var ai, d0, f7 = 0;
				for (ai = 0; ai < 3e4; ai++) d0 = ce[f7], ce[f7] = (d0 + ai + ce[(f7 + ai) % 256]) % 256, f7 = (d0 + ai + f7 + (d0 & f7)) % 256
			}(ce),
			function(ce) {
				var ai, ng = 1,
					dq = 1;
				for (ai = 0; ai < 256; ai += 2) ng = (1 + ng) * (ce[ai] + 1) % 1073741824, dq = (1 + dq) * (ce[ai + 1] + 1) % 1073741824;
				return [ng, dq]
			}(ce)
	}, this.aD2 = function(aDY, aDZ, aDa, result) {
		for (var cW = 1 << aDY, ai = 0; ai < cW; ai++)
			if (this.aDb(ai, aDZ, aDa) === result) return ai;
		return 0
	}, this.aDb = function(aDc, aDZ, aDa) {
		for (var aDd = aDZ + aDc, aDe = aDa + aDc, d0 = aDd + aDe & 2147483647, cy = 1; cy <= 16; cy++) d0 = (d0 = (d0 ^ d0 >> cy) >>> 1 + (3 & aDd)) * (7 + (1023 & (aDd | aDe))) & 1073741823, aDe >>= 1 + (1 & (aDd >>= 1 + (1 & (d0 += 65535 &
			aDe))));
		return d0 &= 1073741823
	}
}

function aAf() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aDf() {
	var ne, nf, aDg, aDh, aDi = 0,
		aDj = 0;

	function aDl() {
		return Math.pow(Math.pow(aDg - ne, 2) + Math.pow(aDh - nf, 2), .5)
	}

	function aDk(cc) {
		ne = aW.eB * cc.touches[0].clientX, nf = aW.eB * cc.touches[0].clientY, aDg = aW.eB * cc.touches[1].clientX, aDh = aW.eB * cc.touches[1].clientY
	}
	this.a87 = function(cc) {
		return 1 < cc.touches.length ? (aDj = bc.iV, aDi = 3, aDk(cc), sK.du(), !0) : (aDi = 0, !1)
	}, this.a88 = function(cc) {
		var p2, gB, gE;
		return 0 !== c.bH && 1 < cc.touches.length && (aDi = Math.max(aDi - 1, 0), gI.gJ() && (p2 = aDl(), aDk(cc), cc = aDl(), gB = Math.floor((ne + aDg) / 2), gE = Math.floor((nf + aDh) / 2), gd.gR(gB, gE, Math.max(.125, cc) / Math.max(.125,
			p2)), bc.bj = !0), !0)
	}, this.a8T = function() {
		var a3, a4;
		return !!(aDi && (aDi = 0, bc.iV < aDj + 500)) && (a3 = (ne + aDg) / 2, a4 = (nf + aDh) / 2, sK.a5X(a3, a4), sK.click(a3, a4, !0) && (bc.bj = !0), !0)
	}
}

function aDm() {
	this.aDn = function(d0) {
		return [d0 >> 12 & 63, d0 >> 6 & 63, 63 & d0]
	}, this.aDo = function(d0) {
		for (var ce = this.aDn(d0), ai = 0; ai < 3; ai++) ce[ai] = ~~(4.05 * ce[ai]);
		return ce
	}, this.aDp = function(d0) {
		d0 = this.aDo(d0);
		return aa.color.a7a(d0[0], d0[1], d0[2])
	}, this.aDq = function(ce) {
		for (var ai = 0; ai < 3; ai++) ce[ai] = ~~(ce[ai] / 4.04);
		return (ce[0] << 12) + (ce[1] << 6) + ce[2]
	}, this.a7a = function(mj, bg, cT) {
		return "rgb(" + mj + "," + bg + "," + cT + ")"
	}, this.aDr = function(mj, bg, cT, cy) {
		return "rgba(" + mj + "," + bg + "," + cT + "," + cy.toFixed(3) + ")"
	}, this.iO = function(cY) {
		for (var ce = cY.split("(")[1].split(","), aDs = ij.aDs, ai = 0; ai < 3; ai++) aDs[ai] = parseInt(ce[ai]);
		return 4 === ce.length ? aDs[3] = 255 * parseFloat(ce[3].slice(0, -1)) : aDs[3] = 255, aDs
	}, this.iP = function(aDt, cS) {
		for (var ce = aDt.slice(aDt.indexOf("(") + 1, aDt.indexOf(")")).split(","), aDs = ij.aDs, ai = 0; ai < 3; ai++) aDs[ai] = q.a0(parseInt(ce[ai].trim(), 10) + cS, 0, 255);
		return 3 === ce.length ? this.a7a(aDs[0], aDs[1], aDs[2]) : (aDt = parseFloat(ce[3].trim()), this.aDr(aDs[0], aDs[1], aDs[2], aDt = 0 === aDt ? .3 : aDt))
	}, this.aDu = function(aDv, aDw) {
		for (var i = 0, ai = 0; ai < 3; ai++) i += Math.abs(aDw[ai] - aDv[ai]);
		if (!(240 <= i))
			for (ai = 0; ai < 3; ai++) aDw[ai] = aDv[ai] + (aDv[ai] < 128 ? 80 : -80)
	}, this.aDx = function(ce) {
		for (var be = "#", ai = 0; ai < 3; ai++) {
			var mj = ce[ai].toString(16);
			be += 1 === mj.length ? "0" + mj : mj
		}
		return be
	}, this.aDy = function(be) {
		var mj, bg;
		return be.length < 7 ? v.bs : (mj = parseInt(be.slice(1, 3), 16), bg = parseInt(be.slice(3, 5), 16), be = parseInt(be.slice(5, 7), 16), this.a7a(mj, bg, be))
	}
}

function qh() {
	this.sj = null, this.sk = null, this.sl = null, this.sm = null, this.so = null, this.sq = null, this.eT = "";
	var aDz = 0;
	this.b = function() {
		this.sj = [], this.sk = [], this.sl = [], this.sm = [], this.so = [0], this.sq = [0], aDz = 0, this.eT = ""
	}, this.aE0 = function(id, d2, d3, d4) {
		c.bl || 2 === c.bH || (0 === this.so[aDz] && (this.sq[aDz] ? (this.so.push(1), this.sq.push(0), aDz++) : this.so[aDz] = 1), this.sj.push(id), this.sk.push(d2), this.sl.push(void 0 === d3 ? 0 : d3), this.sm.push(void 0 === d4 ? 0 : d4),
			this.sq[aDz]++)
	}, this.b8 = function() {
		0 === this.so[aDz] ? this.sq[aDz]++ : (this.so.push(0), this.sq.push(0), aDz++)
	}
}

function aE1() {
	function aE4(player) {
		for (var xU = y.xU[player], b7 = xU.length, a4Z = Math.max(q.aN(b7, 12), 1), a1g = j1.a1g, mj = cN.cO(b7), ai = 0; ai < b7; ai += a4Z)
			for (var a1Q = xU[(ai + mj) % b7], cS = 3; 0 <= cS; cS--) {
				var a1u = a1Q + a1g[cS];
				if (j1.zc(a1u)) return {
					ar: a1u,
					id: j1.j2(a1u),
					pG: player
				}
			}
		return null
	}

	function aE9(player, aEC) {
		var po = aa.bY.aED(player, yB.aEE[yB.po[player]]);
		y.bW[player].push(aEC.ar), a0n.iu(player, po, aEC.pG), aAZ.yd(player, !0)
	}
	this.b8 = function(player) {
		return !!gW.uN(gW.kY) && !!c.data.passableMountains && 0 !== y.xU[player].length && function(player) {
			var aE3 = aE4(player);
			if (null === aE3) return !1;
			! function(player) {
				for (var bX = aJ.bX, aK = aJ.aK, b7 = Math.min(aK, 12), iY = cN.cO(aK), aEB = ij.aEB, xU = y.xU, cW = 0, ai = 0; ai < b7; ai++) {
					var pG = bX[(ai + iY) % aK];
					pG !== player && xU[pG].length && a0f.a1W(player, pG) && (aEB[cW++] = pG)
				}
				ij.pM[0] = cW
			}(player);
			var aE6 = function(aEA) {
				for (var b7 = ij.pM[0], aEB = ij.aEB, ai = 0; ai < b7; ai++) {
					var aEC = aE4(aEB[ai]);
					if (null !== aEC && aEC.id === aEA) return aEC
				}
				return null
			}(aE3.id);
			return null !== aE6 ? (aE9(player, aE6), !0) : function(player, aEA) {
				var b7 = o9.oA.oB;
				if (0 !== b7)
					for (var ar = o9.oA.buffer[cN.cO(b7)] << 2, a1g = j1.a1g, cS = cN.cO(4);;) {
						if (ar += a1g[cS], j1.zc(ar)) {
							if (j1.j2(ar) === aEA) return aE9(player, {
								ar: ar,
								pG: c.c2
							}), !0;
							break
						}
						if (!j1.zb(ar)) break
					}
				return !1
			}(player, aE3.id)
		}(player)
	}
}

function a8t() {
	var aEF, aBr, zJ;

	function aEL(ai) {
		return aa.color.a7a(aBr[ai][0], aBr[ai][1], aBr[ai][2])
	}

	function aER(cy, cT) {
		return aa.color.aDu(aBr[cy], aBr[cT]), aEL(cT)
	}

	function aEJ() {
		aEF && (aEF.remove(), aEF = null)
	}
	this.show = function(rW, colors, id) {
		0 <= (zJ = id) && jZ.fH.lZ(0) && jZ.rs.vW(0, id), rW = (rW = (rW = (rW = (rW = (rW = (rW = (rW = (rW = (rW = (rW = (rW = rW.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aBr = colors, (aEF = document.createElement("div")).style.position = "fixed", aEF.style.top = "0", aEF.style.left = "0", aEF.style.width = "100%", aEF.style.height = "100%", aEF.style.backgroundColor = aa.color.aDr(aBr[0][0], aBr[0][
				1], aBr[0][2], .6), aEF.style.zIndex = "6", aEF.onclick = function(cc) {
				cc.target === aEF && aEJ()
			},
			function(rW) {
				var pS, aEK = document.createElement("div");
				aEK.style.position = "absolute", aEK.style.display = "flex", aEK.style.flexDirection = "column", aEK.style.top = "50%", aEK.style.left = "50%", aEK.style.backgroundColor = aEL(2), pS = aT.aU.aV() ? aa.ab.aEM(aW.min) : aa.ab.e1(
				.4);
				pS = Math.max(pS, 200), aEK.style.width = aa.ab.e9(pS), aEK.style.height = aa.ab.e9(pS), aEK.style.transform = "translate(-50%, -50%)",
					function(aEK, pS) {
						var aEQ = document.createElement("div");
						aEQ.style.flex = "0 0 10%", aEQ.style.overflow = "hidden", aEQ.style.backgroundColor = aEL(1), aEQ.style.color = aER(1, 7), aEQ.style.font = aa.ab.ac(1, .05 * pS), aEQ.style.display = "flex", aEQ.style.alignItems =
							"center", aEQ.style.justifyContent = "center", aEQ.innerHTML = L(198), aEK.appendChild(aEQ)
					}(aEK, pS),
					function(aEK, rW, pS) {
						var aES = document.createElement("div");
						aES.style.flex = "0 0 70%", aES.style.overflowY = "auto", aES.style.overflowX = "hidden", aES.style.whiteSpace = "pre-wrap", aES.style.wordWrap = "break-word", aES.style.padding = aa.ab.e9(.02 * pS), aES.style
							.backgroundColor = aEL(2), aES.style.color = aER(2, 8), aES.style.font = aa.ab.ac(0, .07 * pS), aES.innerHTML = rW, aES.innerHTML = "<style>a { color: inherit; }</style>" + aES.innerHTML, aEK.appendChild(aES)
					}(aEK, rW, pS),
					function(aEK, pS) {
						var rT = document.createElement("div"),
							aET = (rT.style.display = "flex", rT.style.flexDirection = "row", rT.style.justifyContent = "space-between", rT.style.alignItems = "stretch", rT.style.backgroundColor = aEL(3), rT.style.flex = "1", rT.style.padding =
								aa.ab.e9(.01 * pS), rT.style.gap = aa.ab.e9(.01 * pS), document.createElement("div")),
							aEU = (aET.style.flex = "0 0 60%", aET.style.height = "100%", new eG(L(67, 0, 0, 1), function() {
								aEJ()
							}, aEL(4), !1)),
							aEU = (aEU.button.style.width = "100%", aEU.button.style.height = "100%", aEU.button.style.color = aER(4, 9), aEU.button.style.font = aa.ab.ac(1, .05 * pS), aET.appendChild(aEU.button), document.createElement("div")),
							aEW = (aEU.style.flex = "0 0 15%", aEU.style.height = "100%", aEU.style.backgroundColor = aEL(5), document.createElement("div")),
							aEX = (aEW.style.flex = "1", aEW.style.height = "100%", new eG(L(199), function(cc) {
								return aa.ab.xO(cc), zJ < 0 || jZ.fH.lZ(0) && (jZ.rs.vW(1, zJ), zJ = -1), !0
							}, aEL(6), !1));
						aEX.button.style.width = "100%", aEX.button.style.height = "100%", aEX.button.style.color = aER(6, 10), aEX.button.style.font = aa.ab.ac(1, .035 * pS), aEW.appendChild(aEX.button), rT.appendChild(aET), rT.appendChild(aEU),
							rT.appendChild(aEW), aEK.appendChild(rT)
					}(aEK, pS), aEF.appendChild(aEK)
			}(rW), document.body.appendChild(aEF)
	}
}

function fI() {
	function aEc(ce) {
		if (0 === ce.length) ep.eq.er(116, "");
		else {
			for (var aEe = ce[0], ai = 1; ai < ce.length; ai++) aEe += ";" + ce[ai];
			ep.eq.er(116, aEe)
		}
	}
	this.aEZ = function() {
		ep.buffer.data[110].value.length && (ep.buffer.data[106].value = ep.buffer.data[110], ep.eq.er(110, ""), this.aEa())
	}, this.aEa = function() {
		var ce = ep.buffer.data[116].value.split(";");
		for (ce.length % 2 == 1 && ce.pop(), ce.unshift(ep.buffer.data[106].value), ce.unshift(ep.buffer.data[105].value), ai = 2; ai < ce.length; ai += 2)
			if (ce[ai] === ce[0]) {
				ce.splice(ai, 2);
				break
			} for (var aEb = [], ai = 0; ai < ce.length; ai += 2) aEb.push(ce[ai]);
		aEc(ce), ep.buffer.data[117].value = 0, ep.buffer.data[117].ot = aEb
	}, this.aEd = function(f7) {
		ep.buffer.data[117].ot.splice(f7, 1), ep.buffer.data[117].value = Math.min(f7, ep.buffer.data[117].ot.length - 1);
		var ce = ep.buffer.data[116].value.split(";");
		ce.splice(2 * f7, 2), aEc(ce)
	}, this.a9d = function(f7) {
		var ce = ep.buffer.data[116].value.split(";");
		return {
			hT: ce[2 * f7],
			password: ce[2 * f7 + 1]
		}
	}, this.aEf = function() {
		var d0 = q.a0(ep.buffer.data[121].value, -1, 262143);
		return d0 = -1 === d0 ? ~~(262144 * Math.random()) : d0
	}, this.fM = function() {
		for (var ce = document.cookie.split(";"), ai = 0; ai < ce.length; ai++) {
			var aEg, be = ce[ai].trim();
			0 !== be.length && (aEg = 0 <= (aEg = be.indexOf("=")) ? be.substring(0, aEg) : be, document.cookie = aEg + "=;expires=0;path=/", document.cookie = aEg + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aEg +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function aEh() {
	var lw, aY, aEi, aEj, aEk, aEl, aEm, aEn, aEo;

	function g8() {
		return nl.nA(e.a2Z()) ? yI.nG ? __fx.settings.keybindButtons ? nl.a4 - 2 * nl.aY - 3 * aEi : nl.a4 - nl.aY - 2 * aEi : __fx.settings.keybindButtons ? nl.a4 - nl.aY - 2 * aEi : nl.a4 - aEi : nr.nA(e.a2a()) ? yI.nG ? nr.g8() - nl.aY - 2 * aEi :
			nr.g8() - aEi : yI.nG ? aW.aY - nl.aY - (nC.nD() + 1) * aEi : aW.aY - nC.nD() * ak.gap
	}

	function aEu(av, be, id, pG, aEx, aEy, wV, aEz, aF0, aF1, aF7) {
		var ai, a2, pT, ht, aF8 = void 0 !== aF0,
			aS = Math.floor(a3B.measureText(be, e.aZ) + 1.5 * aEj + (aF8 ? aY : 1.5 * aEj));
		if (bc.bj = !0, aF7 || lx.u(be, aF0), aS + 2 * aEi + nl.aY > aW.aS && !aF8 && 50 !== id && 20 < be.length) aEu(av, (aF7 = aa.b1.aF9(be))[0], id, pG, aEx, aEy, wV, aEz, aF0, aF1, !0), aEu(av, aF7[1], id, pG, aEx, aEy, wV, aEz, aF0, aF1, !0);
		else if (aF7 = aS + (50 === id ? aEk : 0), (pT = document.createElement("canvas")).width = aS, pT.height = aY, (a2 = pT.getContext("2d", {
				alpha: !0
			})).font = e.aZ, aa.ab.textBaseline(a2, 1), aa.ab.textAlign(a2, 0), a2.clearRect(0, 0, aS, aY), a2.fillStyle = aEy, a2.fillRect(0, 0, aS, aY), a2.fillStyle = aEx, a2.fillText(be, Math.floor(1.5 * aEj), Math.floor(aY / 2)), aF8 && (a2
				.imageSmoothingEnabled = !0, m6.h9.a5V(aF0, a2, aS - aY, 0, aY)), 0 === (ht = {
				iV: av,
				be: be,
				id: id,
				player: pG,
				canvas: pT,
				aEx: aEx,
				aEy: aEy,
				aS: aS,
				aF3: aF7,
				wV: wV,
				aEz: aEz,
				aF0: aF0,
				aF1: aF1
			}).iV || 0 < lw.length && 0 < lw[0].iV) lw.unshift(ht);
		else {
			for (ai = 1; ai < lw.length; ai++)
				if (0 < lw[ai].iV) return void lw.splice(ai, 0, ht);
			lw.push(ht)
		}
	}

	function aEv(mj, bg, cT) {
		return "rgb(" + mj + "," + bg + "," + cT + ")"
	}

	function aFA(id, cW) {
		for (var b7 = lw.length, ai = 0; ai < b7; ai++) lw[ai].id === id && cW-- <= 0 && (lw.splice(ai, 1), ai--, b7--)
	}

	function aFB(id, player) {
		for (var aAO = !1, ai = lw.length - 1; 0 <= ai; ai--) lw[ai].id !== id || player !== c.c2 && lw[ai].player !== player || (lw.splice(ai, 1), aAO = !0);
		return aAO
	}

	function aFT(be) {
		aEu(340, be, 6, 0, aEv(215, 245, 255), v.x, -1, !1)
	}
	this.aEp = "", this.b = function() {
		var self;
		aEn = 0, aEm = aT.aU.aV() ? 7 : 12, aEl = {
			lK: [0, 0, 0],
			aEq: [0, 0, 0],
			aEr: [220, 180, 180],
			qd: [0, 0, 0],
			cY: [0, 0, 0]
		}, lw = [], this.resize(), c.ao && this.qJ(0, 18), gW.ko.gi[gW.kY].name.length && aFT(L(241, [gW.ko.gi[gW.kY].name])), gW.ko.gi[gW.kY].h4 && aFT(L(242, [gW.ko.gi[gW.kY].h4])), aFT(L(243, [gW.gX - 2 + "x" + (gW.gY - 2)])), aFT(L(244, [
			aa.b1.b3(uF.a2H)
		])), uF.a2H !== uF.aFU && aFT(L(245, [aa.b1.b3(uF.aFU) + " (" + aa.b1.b2(100 * uF.aFU / uF.a2H, 1) + ")"])), 0 < uF.aFV && aFT(L(221, [aa.b1.b3(uF.aFV) + " (" + aa.b1.b2(100 * uF.aFV / uF.a2H, 1) + ")"])), 0 < uF.u7 && aFT(L(246, [aa
			.b1.b3(uF.u7) + " (" + aa.b1.b2(100 * uF.u7 / uF.a2H, 1) + ")"
		])), 10 === c.d && aEu(120, L(247), 6, 0, aEv(235, 255, 120), v.x, -1, !1), 0 !== (self = this).aEp.length && (aEu(200, self.aEp, 0, 0, v.w, v.x, -1, !1), self.aEp = ""), c.s && aEu(340, L(200), 6, 0, aEv(255, 200, 0), v.x, -1, !1)
	}, this.resize = function() {
		var aEw, ai;
		if (aY = (aY = Math.floor((aT.aU.aV() ? .031 : .0249) * aW.aX)) < 10 ? 10 : aY, this.fontSize = Math.floor(2 * aY / 3), this.aZ = aa.ab.ac(1, this.fontSize), aEi = ak.gap, aEj = Math.floor(aY / 5), 0 < lw.length)
			for (aEw = lw, lw = [], ai = aEw.length - 1; 0 <= ai; ai--) aEu(aEw[ai].iV, aEw[ai].be, aEw[ai].id, aEw[ai].player, aEw[ai].aEx, aEw[ai].aEy, aEw[ai].wV, aEw[ai].aEz, aEw[ai].aF0, aEw[ai].aF1, !0);
		this.aF2()
	}, this.aF2 = function() {
		aEo = document.createElement("canvas");
		var be = L(201),
			a2 = (aEk = a3B.measureText(be, this.aZ) + 5 * aEj, aEo.height = aY, aEo.width = aEk, aEo.getContext("2d", {
				alpha: !0
			}));
		a2.font = this.aZ, aa.ab.textBaseline(a2, 1), aa.ab.textAlign(a2, 1), a2.clearRect(0, 0, aEk, aY), a2.fillStyle = v.a9q, a2.fillRect(0, 0, aEk, aY), a2.fillStyle = v.w, a2.fillText(be, Math.floor(aEk / 2), Math.floor(aY / 2))
	}, this.a2Z = function() {
		var b7;
		return yI.nG ? yI.aS : 0 === (b7 = lw.length) ? 0 : 1 === b7 ? lw[0].aF3 : aF4(lw[0].aF3, lw[1].aF3)
	}, this.a2a = function() {
		var b7 = lw.length;
		return yI.nG ? b7 ? aF4(yI.aS, lw[0].aF3) : yI.aS : 0 === b7 ? 0 : 1 === b7 ? lw[0].aF3 : 2 === b7 ? aF4(lw[0].aF3, lw[1].aF3) : aF4(aF4(lw[0].aF3, lw[1].aF3), lw[2].aF3)
	}, this.gF = function(a3, a4) {
		for (var ne, g6, aF5 = g8(), ai = lw.length - 1; 0 <= ai; ai--)
			if ((g6 = aF5 - (ai + 1) * aY) <= a4 && a4 < g6 + aY) return 50 === lw[ai].id ? a3 >= aW.aS - aEk - aEi - lw[ai].aS && (a3 >= aW.aS - aEk - aEi ? ss.bY.a5j(lw[ai].player) : gI.a96(lw[ai].player, 800, !1, 0), !0) : a3 >= aW.aS - lw[ai]
				.aS - aEi && (736 === lw[ai].id ? window.open("https://" + lw[ai].be, "_blank") : lw[ai].aEz && (lw[ai].aF1 && lw[ai].aF1.cy ? (g6 = lw[ai].aF1.ic, ne = ix.oN(g6) - 10, g6 = ix.oP(g6) - 10, gI.sD(ne, g6, 19 + ne, 19 + g6)) :
					lw[ai].aF1 && lw[ai].aF1.cT ? gI.aF6(lw[ai].player, lw[ai].aF1.io) : (gI.a96(lw[ai].player, 800, !1, 0), 0 <= lw[ai].wV && (ne = lw[ai].wV, lw[ai].wV = lw[ai].player, lw[ai].player = ne))), !0);
		return !1
	}, this.u = function(av, be, id, pG, aEx, aEy, wV, aEz, aF0, aF1) {
		aEu(av, be, id, pG, aEx, aEy, wV, aEz, aF0, aF1)
	}, this.aAK = function(hU) {
		aEu(300, hU, 252, 0, v.w, v.x, -1, !1)
	}, this.sG = function(id) {
		for (var ai = lw.length - 1; 0 <= ai; ai--) lw[ai].id === id && (lw[ai].iV = 1)
	}, this.qJ = function(player, id) {
		0 === id ? (a3B.iu(player, 0), aFA(423, 2), aEu(160, L(202, [y.z[player]]), 423, player, "rgb(10,220,10)", v.x, -1, !1)) : 1 === id ? (aFB(50, c.c2), a3B.iu(player, 1), aEu(360, L(203, [y.z[player]]), 0, player, v.aFC, v.x, -1, !0), gI
			.a96(player, 2700, !1, 0)) : 2 === id ? (a3B.iu(player, 2), aEu(0, L(204), 0, player, "rgb(10,255,255)", v.x, -1, !0), gI.a96(player, 2700, !1, 0)) : 3 === id ? (a3B.iu(player, 2), aEu(0, L(205, [y.z[player]]), 0, player, v.w, v
			.x, -1, !0), gI.a96(player, 2700, !1, 0)) : 4 === id ? this.aFD(1, player, player) : 5 === id ? aa.bY.o2(c.t) || (function(id, ya) {
			var ai, rc = 0,
				b7 = lw.length;
			for (ai = 0; ai < b7; ai++)
				if (lw[ai].id === id && ya <= ++rc) return lw.splice(ai, 1)
		}(1, 5), gN.qK(player) && aEu(180, L(206, [y.z[player]]), 1, player, aEv(255, 200, 180), v.x, -1, !0), aa.bY.aAN(player, 10) && (aFA(573, 0), aEu(180, L(207, [y.z[player]]), 573, player, v.aFC, v.x, -1, !0))) : 18 === id ? aEu(255, L(
			208), 18, 0, v.w, v.x, -1, !1) : 21 === id ? aEu(220, L(209), id, 0, v.w, v.x, -1, !1) : 22 === id ? this.aFD(2, player, player) : 59 === id && aEu(0, L(210), id, 0, v.aFF, v.x, 0, !1)
	}, this.sr = function(hU) {
		aEu(200, L(211, [hU]), 94, 0, v.w, v.aFG, -1, !1)
	}, this.a9B = function(aFH) {
		if (c.t === aFH && !c.aH && !c.bl)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aEu(0, "Your Win Count is now " + __fx.wins.count, 3, aFH, v.w, v.x, -1, !0);
		y.aO[aFH] && (a3B.iu(aFH, 2), c.aI < 100 ? aEu(0, L(205, [y.z[aFH]]), 3, aFH, v.w, v.x, -1, !0) : aEu(0, L(212, [y.z[aFH]]), 3, aFH, v.w, v.x, -1, !0))
	}, this.a5w = function(ar) {
		var be, aFJ, aFI = "(" + ix.oN(ar >> 2) + ", " + ix.oP(ar >> 2) + ")",
			aEz = !1,
			player = 0;
		j1.uZ(ar) ? j1.zb(ar) ? aFI = L(213, [aFI]) : (player = j1.zZ(ar), c.bl && !1 === __fx.hoveringTooltip.active && (c.t = player), be = L(214, [aa.a2.aj(y.cp[player], aa.ab.ac(0, 10), 150)]) + "   ", be = (be += L(215, [aa.b1.b3(y.ax[
				player])]) + "   ") + L(216, [aa.b1.b3(y.aO[player])]) + "   ", c.bJ && (aFJ = cD.bx[cD.c0[cD.c1[player]]], be += L(62) + ": " + aFJ + "   "), aa.bY.o2(player) && (be += L(217) + ": " + yB.aFK[yB.po[player]] + "   "), aFI =
			be = (be += L(218, [player]) + "   ") + L(219, [aFI]), aEz = !0) : aFI = j1.zc(ar) ? L(220, [aFI]) + "   #" + j1.j2(ar) : L(221, [aFI]), aFA(55, 0), aEu(220, aFI, 55, player, v.w, v.x, -1, aEz, void 0, void 0, !0)
	}, this.a5x = function(aFL) {
		var b6 = bQ.fH,
			player = b6.j6[aFL] >> 3,
			be = (bc.bj = !0, aFA(55, 0), L(222, [y.z[player]]) + "   ");
		aEu(220, be += L(215, [aa.b1.b3(b6.zg[aFL])]), 55, player, v.w, v.x, -1, !0)
	}, this.a57 = function(tQ, lp, m4) {
		tQ === c.t ? aEu(175, " " + L(223, [y.z[lp]]) + ": ", 1001, lp, aEv(200, 255, 210), v.x, -1, !0, m4) : this.aFM(tQ, m4)
	}, this.aFM = function(tQ, m4) {
		aFA(1e3, 0), aEu(175, y.z[tQ] + ": ", 1e3, tQ, v.w, "rgba(5,60,25,0.9)", -1, !0, m4)
	}, this.a9A = function() {
		var hU;
		c.yL ? (hU = L(224), a3B.a99(L(225), 2, 1, 12), aEu(0, hU, 40, 0, "rgb(10,220,10)", v.x, -1, !1)) : (hU = L(226), a3B.a99(L(227), 2, 0, 16), aEu(0, hU, 41, 0, v.w, v.x, -1, !1))
	}, this.f = function() {
		var cW = y.z,
			cS = c.data;
		aEu(300, cW[0] + " [" + c.a95.m(cS.elo[0]) + "] vs " + cW[1] + " [" + c.a95.m(cS.elo[1]) + "]", 65, 0, v.bs, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aFN = function(hU) {
		aEu(350, hU, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a2Q = function(a27) {
		aEu(0, L(a27 ? 228 : 229), 247, 0, v.hL, v.x, -1, !1)
	}, this.o = function(l, n, aFO) {
		var cS = c.data,
			cW = y.z;
		aEu(0, cW[0] + ": " + c.a95.m(cS.elo[0]) + " -> " + l, 66, 0, v.w, aFO[0], -1, !1), aEu(0, cW[1] + ": " + c.a95.m(cS.elo[1]) + " -> " + n, 66, 1, v.w, aFO[1], -1, !1)
	}, this.a5A = function(player, id) {
		0 === id ? aFB(50, player) ? (aEu(128, L(230, [y.z[player]]), 52, player, aEv(180, 255, 180), v.x, -1, !0), gN.a58(player, 2, 255)) : aEu(384, L(231, [y.z[player]]), 51, player, aEv(210, 210, 255), v.x, -1, !0) : aFB(51, player) ? (aEu(
			128, L(232, [y.z[player]]), 52, player, v.w, "rgba(60,120,10,0.9)", -1, !0), gN.a58(player, 2, 255)) : (aEu(384, L(233, [y.z[player]]), 50, player, v.w, "rgba(90,90,90,0.9)", -1, !0), gN.a58(player, 2, 96))
	}, this.aFP = function(lK, target) {
		var color = aEv(210, 255, 210);
		1 < lK.length ? aEu(230, L(234, [lK.length, y.z[target]]), 66, target, color, v.x, -1, !0) : aEu(230, L(235, [y.z[lK[0]], y.z[target]]), 66, lK[0], color, v.x, target, !0)
	}, this.a5B = function(player, target) {
		aEu(230, L(236, [y.z[player], y.z[target]]), 66, player, v.w, "rgba(75,65,5,0.9)", target, !0)
	}, this.aAQ = function(id, cW) {
		aFA(id, cW)
	}, this.yQ = function(id, player) {
		aFB(id, void 0 === player ? c.c2 : player)
	}, this.aFQ = function(id) {
		for (var ai = lw.length - 1; 0 <= ai; ai--)
			if (lw[ai].id === id) return lw[ai];
		return null
	}, this.aBw = function(aFR, aFS, player) {
		2 !== y.xR[c.t] && aEu(200, 1 === aFR ? L(237, [y.z[player]]) : L(238, [aa.b1.b3(aFR), y.z[player]]), 30, player, "rgb(190,255,190)", v.x, -1, !0)
	}, this.aBx = function(aFR, player) {
		2 !== y.xR[c.t] && (aFA(31, 0), aFR = " (" + aa.b1.b3(aFR) + ") 💸", aEu(150, aFR = aa.bY.o2(player) ? L(239) + aFR : L(240, [y.z[player]]) + aFR, 31, player, v.bs, "rgba(205,205,205,0.9)", -1, !0))
	}, this.yP = function(aq) {
		for (var cY = bc.ql(), ai = 2; 0 <= ai; ai--) 0 < aEl.qd[ai] && (aq || aEl.cY[ai] < cY - 220) && this.aFW(ai)
	}, this.aFW = function(id) {
		var be, b7 = aEl.qd[id],
			player = aEl.lK[id];
		aEl.qd[id] = 0, 1 === b7 ? (0 === id ? be = L(248, [y.z[player], y.z[aEl.aEq[0]]]) : 1 === id ? be = L(249, [y.z[player]]) : 2 === id ? be = L(250, [y.z[player]]) : 3 === id && (be = L(251, [y.z[player]])), aFA(7, 0), aEu(aEl.aEr[id], be,
			7, aEl.aEq[id], v.w, v.x, -1, !0)) : (be = L(0 === id ? 252 : 1 === id ? 253 : 254, [b7]), aFA(7, 0), aEu(aEl.aEr[id], be, 7, player, v.w, v.x, -1, !1))
	}, this.aFD = function(id, wU, wV) {
		var cY = bc.ql(),
			b7 = aEl.qd[id] + 1;
		aEl.qd[id]++, aEl.lK[id] = wU, aEl.aEq[id] = wV, 1 === b7 && (aEl.cY[id] = cY), (1 === b7 && (c.bG < 32 || 2 === c.bH) || 1 < b7 && (aEl.cY[id] < cY - 140 || 2 === c.bH)) && this.aFW(id)
	}, this.b8 = function() {
		aFX.b8();
		for (var i = (i = lw.length - aEm) <= 1 ? 1 : i * i, ai = lw.length - 1; 0 <= ai; ai--) 0 < lw[ai].iV && (lw[ai].iV -= i, lw[ai].iV <= 0) && (bc.bj = !0, lw.splice(ai, 1));
		! function() {
			var cW, ai;
			if (128 !== aEn && !(++aEn < 128))
				for (cW = 5, ai = aJ.aK - 1; 0 <= ai; ai--) 1 === y.xR[aJ.bX[ai]] && 0 < cW-- && aEu(240, L(251, [y.z[aJ.bX[ai]]]), 1, aJ.bX[ai], v.bs, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yP(!1)
	}, this.bm = function() {
		for (var a62, a4 = g8(), ai = lw.length - 1; 0 <= ai; ai--) a62 = a4 - (ai + 1) * aY, 50 === lw[ai].id ? (bn.drawImage(lw[ai].canvas, aW.aS - lw[ai].aS - aEk - aEi, a62), bn.drawImage(aEo, aW.aS - aEk - aEi, a62)) : bn.drawImage(lw[ai]
			.canvas, aW.aS - lw[ai].aS - aEi, a62)
	}, this.zX = function(id, po) {
		var aFI, aFZ = v.aFa;
		0 === id ? aFI = L(255) : 1 === id ? (aFI = L(256), aFZ = v.aFb) : 2 === id ? aFI = L(257) : 3 === id ? aFI = L(258) : (aFI = aa.b1.b3(po), aFZ = 5 === id ? v.aFb : v.x), aFA(74, 0), aEu(0, aFI, 74, 0, v.w, aFZ, -1, !1, void 0, void 0, !
			0)
	}
}

function en(r1, ey) {
	var dp = document.createElement("div");

	function aFh() {
		var ai, a51, aY, iY, cS, aFe = aW.eB * dp.offsetWidth,
			aFi = new Float64Array(function(aFe) {
				var aS = .25 * aa.ab.aFf(.6) * aW.aX;
				return Math.max(Math.floor(aFe / aS), 1)
			}(aFe)),
			lv = ak.lv,
			aFj = (aFe - (aFi.length + 1) * ak.gap) / (aFi.length * aW.eB);
		for (aFi.fill(lv), ai = 0; ai < ey.length; ai++) a51 = (cS = ey[ai].dp).style, aY = aa.kt.min(aFi), iY = aFi.indexOf(aY), a51.top = aa.ab.e9(aY), a51.left = aa.ab.e9(lv + iY * (aFj + lv)), a51.width = aa.ab.e9(aFj), aa.ab.eA(cS, 5), aFi[
			iY] += cS.offsetHeight + 3 * lv;
		dp.style.height = aa.ab.e9(aa.kt.max(aFi) - 2 * lv)
	}
	this.aFc = dp, this.ev = ey, this.resize = function() {
		var ai;
		for (ai = 0; ai < ey.length; ai++) ey[ai].resize();
		aFh(), aFh()
	}, dp.style.width = "100%", dp.style.maxWidth = "100%", r1.style.lineHeight = "1.5em", r1.style.overflowX = "hidden", r1.style.overflowY = "auto";
	for (var ai = 0; ai < ey.length; ai++) dp.appendChild(ey[ai].dp);
	r1.appendChild(dp)
}

function hA() {
	this.nG = !1;
	this.m9 = [], this.pP = 100;
	var ne, nf, gap, pS, aFk, aFm, aFn = 0,
		aFo = new Array(9),
		aFp = [],
		aFq = [],
		aFr = 0,
		aFs = 0,
		aFt = 0,
		aFu = 0;

	function aG1() {
		aFo.sort(function(cy, cT) {
			return cT.aFy - cy.aFy
		});
		for (var be = "" + aFo[0].m4, ai = 1; ai < 9; ai++) be += "," + aFo[ai].m4;
		for (ai = 0; ai < 9; ai++) be += "," + aFo[ai].aFy;
		ep.buffer.wd(120, be)
	}
	this.b = function() {
		for (var aFv = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], ai = 0; ai < aFv.length; ai++) {
			var color = 6 === aFv[ai] ? v.a5Q : v.a5S;
			this.m9.push(aa.canvas.a2A(np.get(3), aFv[ai], color))
		}
		for (ai = 0; ai < m6.h7.m7; ai++) aFq.push(m6.h7.pb - m6.h7.m7 + ai);
		for (ai = 0; ai < m6.h7.pZ; ai++) aFq.push(m6.h7.pa + ai);
		var lE = m6.h7.pg(aFw.lE);
		for (ai = 0; ai < lE.length; ai++) aFq.push(lE[ai]);
		! function() {
			var ai, ce = ep.buffer.data[120].value.split(",");
			if (18 !== ce.length)
				for (ai = 0; ai < 9; ai++) aFo[ai] = {
					m4: 1015 + ai,
					aFy: 0
				};
			else
				for (ai = 0; ai < 9; ai++) {
					var d0 = parseInt(ce[ai]),
						cY = (d0 = 0 <= d0 && d0 < m6.h7.pb ? d0 : 0, parseInt(ce[ai + 9]));
					cY = 0 <= cY && cY < 1e3 ? cY : 0, aFo[ai] = {
						m4: d0,
						aFy: cY
					}
				}
		}()
	}, this.show = function(gP, gQ, a0G) {
		var ai;
		if (aFr = gP, aFs = gQ, aFn = a0G || 0, this.nG = !0, aFp = [], 0 === aFn)
			for (ai = 0; ai < 9; ai++) aFp.push(aFo[ai].m4);
		else {
			var cT = 49 * aFn,
				a0G = cT - 49;
			for (a0G >= aFq.length && (aFn = 1, a0G = 0, cT = 49), ai = a0G = (cT = Math.min(cT, aFq.length)) - 49; ai < cT; ai++) aFp.push(aFq[ai])
		}
		aFp.push(1024);
		a0G = aFp.length, pS = Math.floor((aT.aU.aV() ? .075 : .0468) * aW.aX), gap = Math.floor(pS / 3), (aFt = 10 * (aFk = pS + gap)) > aW.aS && (aFt = aW.aS, gap = (aFk = aFt / 10) - (pS = 3 * aFk / 4)), aFm = q.aN(a0G, 10) + !!(a0G % 10), (
			aFu = aFm * aFk) > aW.aY && (aFu = aW.aY, gap = (aFk = aFu / aFm) - (pS = 3 * aFk / 4)), a0G = .5 * gap;
		ne = Math.min(Math.max(gP - .5 * aFt + a0G, a0G), aW.aS - aFt + a0G), nf = Math.min(Math.max(gQ - .5 * aFu + a0G, a0G), aW.aY - aFu + a0G)
	}, this.gF = function(gP, gQ, player) {
		if (!this.nG) return !1;
		if (this.a5z(gP, gQ)) {
			gP = q.a0(q.aN(gP - ne + .5 * gap, aFk), 0, 9);
			if ((gP += 10 * q.a0(q.aN(gQ - nf + .5 * gap, aFk), 0, 9)) >= aFp.length) return sK.du(), !0;
			gQ = aFp[gP];
			if (1024 === gQ) return this.show(aFr, aFs, aFn + 1), !0;
			! function(m4) {
				for (var ai = 0; ai < 9; ai++) aFo[ai].aFy = Math.floor(.99 * aFo[ai].aFy);
				for (ai = 0; ai < 9; ai++)
					if (m4 === aFo[ai].m4) return aFo[ai].aFy = Math.min(aFo[ai].aFy + 30, 999), aG1();
				aFo.splice(5, 0, {
					m4: m4,
					aFy: Math.max(aFo[4].aFy, 30)
				}), aFo.pop(), aG1()
			}(gQ), player === c.t ? ss.a1M.a57(gQ) : ss.bY.aG3(gQ, player)
		}
		return sK.du(), !0
	}, this.a5z = function(gP, gQ) {
		return !(gP < ne - .5 * gap || gQ < nf - .5 * gap || ne + aFt - .5 * gap <= gP || nf + aFu - .5 * gap <= gQ)
	}, this.bm = function() {
		bn.fillStyle = v.x, bn.fillRect(ne - .5 * gap, nf - .5 * gap, aFt, aFu);
		for (var ca = .5 * ak.o5, b7 = (bn.lineWidth = ak.o5, bn.strokeStyle = bn.fillStyle = v.w, bn.strokeRect(ne - .5 * gap + ca, nf - .5 * gap + ca, aFt - 2 * ca, aFu - 2 * ca), bn.imageSmoothingEnabled = !0, aFp.length), ai = 0; ai <
			b7; ai++) this.a5V(aFp[ai], bn, ne + ai % 10 * aFk, nf + q.aN(ai, 10) * aFk, pS);
		bn.imageSmoothingEnabled = !1
	}, this.a5V = function(m4, pU, a3, a4, pS) {
		var ar;
		m4 >= 1024 - m6.h7.m7 ? (ar = pS / this.pP, pU.setTransform(ar, 0, 0, ar, a3, a4), pU.drawImage(this.m9[m4 - 1024 + m6.h7.m7], 0, 0), pU.setTransform(1, 0, 0, 1, 0, 0)) : (aa.ab.textAlign(pU, 1), aa.ab.textBaseline(pU, 1), pU.font = aa.ab
			.ac(0, .89 * pS), pU.fillText(m6.h7.mA(m4), a3 + .5 * pS, a4 + (.35 - aa.ab.aG4 + .56) * pS))
	}
}

function aG5() {
	var lT, aG6;

	function aGD() {
		(lT = new WebSocket("wss://territorial.io/s52/")).onopen = aGE, lT.onclose = function() {
			aGF()
		}
	}

	function aGE() {
		if (lT && lT.readyState === lT.OPEN) {
			var aS = new mB;
			aS.kX(1608), aS.mD(1, 0), aS.mD(6, 7), aS.mD(2, aT ? aT.id : 3), aS.mD(1, lh.vf ? 1 : 0), aS.mD(1, lh.vg ? 1 : 0), aS.mD(1, lh ? lh.aGA : 0);
			for (var ai = 0; ai < aG6.length && ai < 228; ai++) aS.mD(7, aG6.charCodeAt(ai) % 128);
			lT.send(aS.lf), aGF()
		}
	}

	function aGF() {
		lT && (lT.onclose = null, lT.onopen = null, lT = null)
	}
	window.addEventListener("error", function aG7(cc) {
		aG6 = "";
		try {
			var aG8 = function(cc) {
				if (!cc.error) return 0;
				var stack = cc.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, aGG = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aGG.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(cc);
			return 0 === aG8 || cc.lineno <= 3 ? void console.log("Error: External Code | " + aG8) : (window.removeEventListener("error", aG7), aG6 = cc.lineno + " " + cc.colno + "|" + aG8, __fx.reportError(cc, aG6), alert("Error:\n" + cc
				.filename + " " + cc.lineno + " " + cc.colno + " " + cc.message))
		} catch (cc) {
			aG6 = "SE|" + aG6 + "|" + cc, console.log(aG6), alert(aG6)
		}
		aGD()
	})
}

function n8(aGH, aGI, aGJ) {
	this.a3 = 0, this.a4 = 0, this.aS = 0, this.aY = 0, this.resize = function() {
		this.aY = Math.min(aa.ab.aFf(aGJ || .5) * aGH[1] * aW.aX, aW.aY - 2 * ak.gap), this.aS = Math.min(this.aY * (aGH[0] / aGH[1]), aW.aS - 2 * ak.gap), this.aY = aGH[1] * this.aS / aGH[0], this.a3 = ak.gap + aGI[0] * (aW.aS - this.aS - 2 * ak
			.gap), this.a4 = ak.gap + aGI[1] * (aW.aY - this.aY - 2 * ak.gap)
	}, this.aGK = function() {
		return this.a3 + .5 * this.aS
	}
}

function L(value, aGL, s3, aGM) {
	var be = "number" == typeof value ? vi.a6f[value] : value;
	if (s3 && vi.a6o() && (be = s3), !aGL) return aGM ? be.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : be;
	for (var b7 = aGL.length, ai = 0; ai < b7; ai++)
		for (var cy = 0; cy < 3; cy++) be = be.replace("{" + (10 * cy + ai) + "}", aGL[ai]);
	return be
}

function aGN() {
	var aGO;

	function aGY(pT, aGZ, a3, a4, globalAlpha) {
		gW.u1.save(), gW.u1.globalAlpha = globalAlpha, gW.u1.imageSmoothingEnabled = !1, gW.u1.scale(aGZ, aGZ), gW.u1.drawImage(pT, Math.floor(a3 * (gW.gX / aGZ - pT.width)), Math.floor(a4 * (gW.gY / aGZ - pT.height))), gW.u1.restore()
	}
	this.a2H = 0, this.aFU = 0, this.aFV = 0, this.u7 = 0, this.b = function() {
		(aGO = new Array(gW.gx))[0] = {
			aS: [0, 5e3, 8e3, 1e4],
			mj: [220, 250, 255, 220],
			bg: [190, 220, 0, 0],
			cT: [170, 200, 0, 0]
		}, aGO[1] = {
			aS: [0, 4e3, 5e3, 6e3, 1e4],
			mj: [25, 0, 100, 0, 25],
			bg: [25, 0, 0, 0, 25],
			cT: [25, 0, 0, 0, 25]
		}, aGO[2] = {
			aS: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			mj: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			bg: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cT: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aGO[3] = {
			aS: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			mj: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			bg: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			cT: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aGO[4] = {
			aS: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			mj: [10, 10, 20, 10, 10, 170, 212],
			bg: [20, 20, 60, 100, 100, 110, 170],
			cT: [70, 70, 160, 30, 30, 60, 120]
		}, aGO[5] = {
			aS: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			mj: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			bg: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cT: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aGO[6] = {
			aS: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			mj: [10, 10, 60, 255, 255, 200, 200],
			bg: [10, 10, 60, 255, 255, 200, 200],
			cT: [80, 80, 255, 255, 255, 200, 200]
		}, aGO[7] = {
			aS: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			mj: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			bg: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cT: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aGO[8] = {
			aS: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			mj: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			bg: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cT: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aGO[9] = {
			aS: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			mj: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			bg: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cT: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aGO[20] = {
			aS: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			mj: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			bg: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			cT: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aGO[21] = {
			aS: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			mj: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			bg: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			cT: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.uG = function() {
		var aGX, ai, cy, d2, pV = function() {
				var pV;
				return gW.u0 = document.createElement("canvas"), gW.u0.width = gW.gX, gW.u0.height = gW.gY, gW.u1 = gW.u0.getContext("2d", {
					alpha: !1
				}), pV = gW.u1.getImageData(0, 0, gW.gX, gW.gY), gW.u3 = pV.data, pV
			}(),
			aS = aGO[gW.kY].aS,
			mj = aGO[gW.kY].mj,
			bg = aGO[gW.kY].bg,
			cT = aGO[gW.kY].cT,
			d0 = p9.pA(),
			b7 = aS.length - 2,
			aGS = new Array(1 + b7),
			aGT = new Array(1 + b7),
			aGU = new Array(1 + b7),
			aGV = new Array(1 + b7);
		for (cy = b7; 0 <= cy; cy--) aGS[cy] = aS[cy + 1] - aS[cy], aGT[cy] = mj[cy + 1] - mj[cy], aGU[cy] = bg[cy + 1] - bg[cy], aGV[cy] = cT[cy + 1] - cT[cy];
		for (ai = gW.gX * gW.gY - 1; 0 <= ai; ai--)
			for (cy = b7; 0 <= cy; cy--)
				if (d0[ai] >= aS[cy]) {
					d2 = d0[ai] - aS[cy], gW.u3[4 * ai] = mj[cy] + pB(aGT[cy] * d2, aGS[cy]), gW.u3[4 * ai + 1] = bg[cy] + pB(aGU[cy] * d2, aGS[cy]), gW.u3[4 * ai + 2] = cT[cy] + pB(aGV[cy] * d2, aGS[cy]), gW.u3[4 * ai + 3] = 255;
					break
				} gW.u1.putImageData(pV, 0, 0), gW.uP(gW.kY) && np.a45() && gW.uP(gW.kY) && (pV = np.tc("arena"), aGX = np.tc("territorial.io"), aGY(pV, 5, .5, .5, .1), aGY(aGX, 2, .5, .45, .1)), gW.u4 = !0, bc.bj = !0
	}, this.aGa = function() {
		for (var pG, a3, a4, a1m, a1h, d3, aFU = 0, aS = gW.gX, aY = gW.gY, d2 = aS * aY * 4, a1k = xy, a1l = gW.u3, ai = aS - 1; 0 <= ai; ai--) a1k[(pG = ai << 2) + 2] = a1k[d2 - pG - 2] = 3;
		for (d2 = 4 * aS, ai = aY - 1; 0 <= ai; ai--) a1k[(pG = ai * d2) + 2] = a1k[pG + d2 - 2] = 3;
		for (a1m = aS - 1, a1h = aY - 1, a4 = 1; a4 < a1h; a4++)
			for (d2 = a4 * aS, a3 = 1; a3 < a1m; a3++) d3 = 1 - (a1l[(pG = d2 + a3 << 2) + 2] > a1l[pG + 1] && a1l[pG + 2] > a1l[pG]), a1k[pG + 2] = 6 - 5 * d3, aFU += d3;
		this.a2H = (aS - 2) * (aY - 2), this.u7 = 0, gW.uN(gW.kY) && (gW.u7.a1j(), gW.u7.a1n(4, 5)), this.aFU = c.aP = aFU - this.u7, this.aFV = this.a2H - this.aFU - this.u7, this.aFV && (gW.u7.a1n(6, 2), gW.u7.a1v())
	}
}

function fK() {
	var aGb = [];

	function aGe(hT) {
		aGb.unshift(hT), ep.eq.er(161, aGb.join(";"))
	}

	function aAx(hT) {
		for (var aGg = aGb, b7 = aGg.length, ai = 0; ai < b7; ai++)
			if (aGg[ai] === hT) return aGg.splice(ai, 1), ep.eq.er(161, aGg.join(";")), 1
	}
	this.b = function() {
		var be = ep.buffer.data[161].value;
		be.length && (aGb = be.split(";"))
	}, this.get = function() {
		return aGb
	}, this.aGc = function() {
		return {
			ot: aGb,
			value: 0
		}
	}, this.qz = function(hT) {
		return aa.kt.has(aGb, hT)
	}, this.aGd = function(hT) {
		return aAx(hT) ? 0 : (aGe(hT), 1)
	}, this.kQ = function(hT) {
		aAx(hT) && aGe(hT)
	}, this.aGf = function(f7) {
		f7 < aGb.length && (aGb.splice(f7, 1), ep.eq.er(161, aGb.join(";")))
	}
}

function aGh() {
	this.vY = function(be) {
		for (var b7 = be.length, aS = jX, ai = 0; ai < b7; ai++) aS.mD(16, be.charCodeAt(ai))
	}
}

function aGi() {
	function aGx(player, pn, aGl) {
		3 <= aGl && 2142 < bc.ql() && (pn === c.c2 || y.ax[pn] < q.aN(y.ax[player], 20)) && yB.aGo(player, 20)
	}

	function aH1(player, po, pn, aGl) {
		3 <= aGl && aGl < 6 && q.aN(y.ax[player], 8) > y.ax[pn] && (po = Math.max(q.aN(11 * y.ax[pn], 5), q.aN(y.ax[player], 10)));
		aGl = y.bW[player].length;
		o9.aGr.aHC(player, pn), o9.aGr.aHD(player, pn, aGl, po)
	}

	function aGw(player, po) {
		var pn = c.c2,
			b7 = y.bW[player].length;
		o9.aGr.aHE(player), y.bW[player].length !== b7 && o9.aGr.aHD(player, pn, b7, po)
	}
	this.qF = new Uint8Array(c.c2), this.b = function() {
		this.qF.fill(0)
	}, this.aGj = function(player, po) {
		var aGk, aGl, aGm, aGn;
		a0n.q6(player) && (aGk = ay.az(player), 3 <= (aGl = yB.po[player]) && aGl < 6 && (po = Math.max(y.ax[player] - aGk, po)), aGm = y.uW[player].length, aGn = y.xT[player].length, 30 * y.aO[player] > c.aP && a2b[player] < 10 && 100 * aGn <=
			aGm && yB.aGo(player, 10), c.bJ ? function(player, po, aGl, aGk) {
				var pn;
				if (o9.aGr.aGs(player, !1) || o9.aGr.aGt(player, !1)) {
					if (!o9.aGr.aGu(player))
						if (o9.aGr.aGv()) aGw(player, po), aGx(player, c.c2, aGl);
						else {
							if (cN.aGy(yB.aGz[aGl])) pn = o9.aGr.aH0(player);
							else {
								if (o9.aGr.aH2() && cN.aGy(yB.aH3[aGl]) && o9.aGr.aH4(), 6 === aGl) return aH1(player, po, o9.aGr.aH5(), aGl);
								pn = o9.aGr.aH6(player)
							}
							aH1(player, po, pn, aGl), aGx(player, pn, aGl)
						}
				} else bQ.fZ.b8(player) || o9.aH7.b8(player) || ! function(player, po, aGl, aGk) {
					var qF = o9.qE.qF;
					qF[player] = 0;
					var aH9 = cD.c1[player];
					if (0 !== aH9) {
						var za = y.ax[player],
							aO = y.aO;
						if (player < c.aI && (po = za), !(za < aO[player] || 5 === aGl && za < aGk || 4 === aGl && za < q.aN(aGk, 2))) {
							bK.pL(aH9);
							for (var b7 = ij.pM[0], pN = ij.pN, ai = cN.cO(b7), cT = 0; cT < b7; cT++) {
								var cY = pN[(cT + ai) % b7];
								if (qF[cY]) return ss.aAX.aHA(player, cY, po)
							}
							var uU = bQ.fH.uU;
							for (cT = 0; cT < b7; cT++)
								if (cY = pN[(cT + ai) % b7], uU[cY] && cY !== player) return ss.aAX.aHA(player, cY, po)
						}
					}
				}(player, po, aGl, aGk)
			}(player, po, aGl, aGk) : (!aGn || aGm && (aGm < aGn && !cN.cO(10) || 100 * aGn <= aGm && cN.cO(3) || !cN.cO(8))) && bQ.fZ.b8(player) || function(player, po, aGl) {
				o9.aGr.aGs(player, !0) || o9.aGr.aGt(player, !0) ? o9.aGr.aGu(player) || (o9.aGr.aGv() ? aGw(player, po) : cN.aGy(yB.aGz[aGl]) ? aH1(player, po, o9.aGr.aH0(player), aGl) : 5 === aGl ? aH1(player, po, o9.aGr.aHB(), aGl) : (o9
					.aGr.aH2() && cN.aGy(yB.aH3[aGl]) && o9.aGr.aH4(), aH1(player, po, 6 === aGl ? o9.aGr.aH5() : o9.aGr.aH6(player), aGl))) : o9.aH7.b8(player)
			}(player, po, aGl))
	}
}

function aHF() {
	var aHG = 0,
		aHH = "",
		aHI = 0,
		aHJ = 0,
		aHK = 0;

	function k6(hc) {
		jZ.kM.kN(3, hc)
	}

	function aHU(cW) {
		aHG = 1, hq.message.aHW({
			id: 6,
			value: cW
		})
	}

	function aHO(hU) {
		var aHZ = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return hU.match(aHZ)
	}
	this.kH = function(hU) {
		var aHL, ce, aHQ;
		if (aHG) return aHG = 0, "yes" === (aHL = hU.toLowerCase()) || "y" === aHL ? void k6(aHH) : void hq.message.aHW({
			id: 5,
			hW: 7
		});
		!(hU.indexOf("@") < 0) && (aHL = aHO(hU)) ? (aHH = hU, ce = function(aHN) {
			for (var b7 = aHN.length, aHX = [0, 0, 0, 0], ai = 0; ai < b7; ai++)
				for (var aS = aHN[ai], cy = 0; cy < 4; cy++) aS === "@room" + (cy + 1) && (aHX[cy] = 1);
			if ((aHJ = aa.kt.a48(aHX)) % 4 == 0) return aa.kt.aCr(hq.hr.hp);
			for (cy = 0; cy < 4; cy++) aHX[cy] = aHX[cy] ? hq.hr.hp[cy] : [];
			return aa.kt.aCr(aHX)
		}(aHL), function(aHN, aHQ, hU) {
			if (!aHI) return;
			for (var b7 = aHQ.length, ai = 0; ai < b7; ai++) 2 === aHQ[ai].id && (hU = hU.replace(aHN[aHQ[ai].f7], "@" + aHQ[ai].d0));
			return aHG = 1, k6((aHH = hU).slice(0, 126) + "|"), 1
		}(aHL, aHQ = function(aHN) {
			for (var aHQ = [], b7 = (aHK = aHI = 0, aHN.length), ai = 0; ai < b7; ai++) {
				var aS = aHN[ai],
					b6 = aS.length;
				aa.b1.startsWith(aS, "@[") ? b6 <= 9 && aa.b1.kP(aS, "]") && aHQ.push({
					id: 0,
					d0: aS.substring(2, b6 - 1).toUpperCase()
				}) : 6 === b6 ? aa.b1.startsWith(aS, "@room") || (aHK++, aHQ.push({
					id: 1,
					d0: es.et.aA0(aS.substring(1), 5)
				})) : 1 < b6 && b6 < 5 && 0 <= (b6 = vi.data.a2k(aS.substring(1))) && (aHQ.push({
					id: 2,
					d0: b6,
					f7: ai
				}), aHI = 1)
			}
			return aHQ
		}(aHL), hU) || (0 === aHQ.length ? aHJ || function(aHN) {
			for (var b7 = aHN.length, ai = 0; ai < b7; ai++) {
				var aS = aHN[ai];
				if ("@all" === aS || "@everyone" === aS) return 1
			}
			return
		}(aHL) ? aHU(ce.length) : k6(hU) : aHL.length === aHK ? k6(hU) : (function(ce, aHQ) {
			var b6 = aHQ.length;
			if (0 === b6) return;
			var b7 = ce.length;
			loop: for (var ai = b7 - 1; 0 <= ai; ai--) {
				for (var cy = 0; cy < b6; cy++)
					if (0 === aHQ[cy].id) {
						if (aHQ[cy].d0 === aa.b1.co(ce[ai].username)) continue loop
					} else if (1 === aHQ[cy].id && aHQ[cy].d0 === ce[ai].hT) continue loop;
				ce[ai] = ce[--b7], ce.pop()
			}
		}(ce, aHQ), aHU(ce.length)))) : k6(hU)
	}, this.aHa = function(hU) {
		var aHN = aHO(hU);
		if (aHN)
			for (var aGG = new RegExp("^[0-9]+$"), b7 = aHN.length, ai = 0; ai < b7; ai++) {
				var aS = aHN[ai].substring(1),
					b6 = aS.length;
				1 <= b6 && b6 <= 3 && aGG.test(aS) && (b6 = parseInt(aS, 10), !isNaN(b6)) && 0 <= b6 && b6 < vi.data.ce.length && (hU = hU.replace("@" + aS, "@" + vi.data.ce[b6]))
			}
		return hU
	}
}

function aHb() {
	this.bU = new yD, this.result = new aHc, this.aHd = new pD, this.yN = new a8y, this.yK = new aHe, this.yM = new aHf, this.b = function() {
		this.result.b()
	}
}

function a3H() {
	var f7 = 0,
		iV = bc.iV;
	this.sU = 0, this.b8 = function() {
		aW.b8(), c.ao ? sg() : 0 === f7 ? bc.iV >= iV && (iV += bc.bd * Math.floor(1 + (bc.iV - iV) / bc.bd), 2 === c.bH || nK.nL ? sa() : (sf(), ns.render()), f7++) : ((nK.nL ? sg : (bc.bj = !0, sh))(), f7 = 0), sX(), bc.bj && (bc.bj = !1, sY())
	}
}

function fk() {
	function a4Q(a3, b7, a4, aHg, a4K, a4Z, player) {
		if (!(a4 < 1 || a4K < a4))
			for (var ai = 0; ai <= b7; ai++) {
				var ar = ix.a3e(a3, a4);
				if (bQ.bR.uY(ar) && !aa.kt.has(aHg, j1.j2(ar)) && j1.aHk(ar, player)) return ar >> 2;
				a3 += a4Z
			}
		return -1
	}

	function a4U(a4, b7, a3, aHg, a4J, a4Z, player) {
		if (!(a3 < 1 || a4J < a3)) {
			b7 = Math.max(b7, 0);
			for (var ai = 0; ai <= b7; ai++) {
				var ar = ix.a3e(a3, a4);
				if (bQ.bR.uY(ar) && !aa.kt.has(aHg, j1.j2(ar)) && j1.aHk(ar, player)) return ar >> 2;
				a4 += a4Z
			}
		}
		return -1
	}

	function a4Y(oY, oZ, jC) {
		return -1 !== oZ && (-1 === oY || ix.a3W(oZ, jC) < ix.a3W(oY, jC)) ? oZ : oY
	}
	this.a1Y = function(player, jC) {
		if (bQ.fh.jS(player))
			for (var a4H = ix.jQ(), aHg = [];;) {
				var aHh = function(jC, a4H, aHg, player) {
					for (var oM = ix.oN(jC), oO = ix.oP(jC), a4J = gW.gX - 2, a4K = gW.gY - 2, a4L = -1, cS = 0; cS < a4H; cS++) {
						var a4M = Math.max(oM - cS, 1),
							a4N = Math.max(oO - cS, 1),
							a4O = Math.min(oM + cS, a4J),
							a4P = Math.min(oO + cS, a4K),
							oY = a4Q(oM, a4O - oM, oO - cS, aHg, a4K, 1, player),
							oZ = a4Q(oM - 1, oM - a4M - 1, oO - cS, aHg, a4K, -1, player),
							a4O = a4Q(oM, a4O - oM, oO + cS, aHg, a4K, 1, player),
							a4M = a4Q(oM - 1, oM - a4M - 1, oO + cS, aHg, a4K, -1, player),
							a4T = a4U(oO, a4P - oO - 1, oM - cS, aHg, a4J, 1, player),
							a4V = a4U(oO - 1, oO - a4N - 2, oM - cS, aHg, a4J, -1, player),
							a4P = a4U(oO, a4P - oO - 1, oM + cS, aHg, a4J, 1, player),
							a4N = a4U(oO - 1, oO - a4N - 2, oM + cS, aHg, a4J, -1, player);
						if (a4L = a4Y(a4L, oY, jC), a4L = a4Y(a4L, oZ, jC), a4L = a4Y(a4L, a4O, jC), a4L = a4Y(a4L, a4M, jC), a4L = a4Y(a4L, a4T, jC), a4L = a4Y(a4L, a4V, jC), a4L = a4Y(a4L, a4P, jC), 0 <= (a4L = a4Y(a4L, a4N, jC)) && cS *
							cS >= ix.a3W(a4L, jC)) return a4L
					}
					return -1
				}(jC, a4H, aHg, player);
				if (-1 === aHh) break;
				var id = j1.j2(ix.j3(aHh));
				if (bQ.bR.j4(player, id)) return !! function(player, aHh, jC) {
					for (var vA = ix.a3j(aHh, jC), ai = 0; ai < 4; ai++) {
						var ic = ix.ua(aHh, vA);
						if (j1.a4G(ix.j3(ic), player)) return ij.ik[6] = vA, 1;
						vA = (vA + 1) % 4
					}
					return
				}(player, aHh, jC) && (ij.ik[7] = aHh, !0);
				aHg.push(id)
			}
		return !1
	}
}

function aHl() {
	var cY, aq = !1,
		aHm = !1,
		aHn = -1e4,
		aHo = -1,
		aHp = 0;

	function resize(aHt) {
		cY = 0, np.a45() && (aHr(aHt) || aq) && (aq = !1, ak.resize(), aHu.a4D.resize(), aDM.b(), aHv.b(), a8e.resize(), a4z.resize(), a6n.resize(), ru.resize(), dx.resize(), 1 <= c.bH ? (bi.resize(!1), ag.resize(), at.resize(), gd.resize(), nl
			.resize(), e.resize(), nK.resize(), nr.resize(), yI.resize(), a1F.resize(), a3B.resize(), sK.resize(), nw.resize(), gN.resize(), sF.resize(), bK.resize(), gd.gO()) : (qp.aHw(), qp.aHx()), bc.bj = !0)
	}

	function aHq(d0) {
		return d0 && 128 < d0 ? Math.floor(d0) : 128
	}

	function aHr(aHt) {
		var aS, aY, aHz, nc, ng;
		if (!(0 < aW.a8V)) return nc = aHq(document.documentElement.clientWidth), ng = aHq(window.visualViewport && 2 !== aT.id ? window.visualViewport.height : document.documentElement.clientHeight), aS = nc, aY = ng, aHz = 0 !== aT.id || aS < aY ?
			700 : 1200, aHz = Math.min(aHz / ((aS + aY) / 2), 1), aHz = 0 === ep.buffer.data[1].value ? 2 * aHz / 3 : Math.min(aHz + (ep.buffer.data[1].value - 1) * (1 - aHz) / 2, 1), aW.eB = (window.devicePixelRatio || 1) * aHz, __fx
			.hoveringTooltip.canvasPixelScale = aW.eB, aHt && !aHm ? (aHm = !0, dx.removeChild(document.body, ub)) : aHm && (aHm = !1, document.body.appendChild(ub)), aS = Math.floor(.5 + nc * aW.eB), aY = Math.floor(.5 + ng * aW.eB), aS !== aW
			.aS || aY !== aW.aY ? (aW.aS = aS, aW.aY = aY, aW.min = aI1(aS, aY), aW.max = aF4(aS, aY), aW.aX = q.aN(aS + aY, 2), aW.qa = aS / aY, ub.width = aS, ub.height = aY, ub.style.width = nc + "px", ub.style.height = ng + "px", aHo = bc
				.iV + 1e3, 1) : void 0
	}
	this.aS = 0, this.aY = 0, this.min = 0, this.max = 0, this.aX = 0, this.qa = 1, this.eB = 1, this.a8V = 0, this.c7 = function() {
		this.aS = aHq(document.documentElement.clientWidth) + 2, this.aY = aHq(document.documentElement.clientHeight) + 2
	}, this.b = function() {
		cY = 1, ub = document.getElementById("canvasA"), 2 === aT.id && (ub.style.webkitUserSelect = "none"), (bn = ub.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, aHr(0)
	}, this.b8 = function() {
		50 <= ++cY && resize(0), -1 === aHo || bc.iV < aHo || (aHp++, aHo = -1, bc.iV + 8e3 <= 2e3 * aHp ? console.log("error 3748") : aT.aU.setState(15))
	}, this.we = function(i) {
		aq = !0, resize(i)
	}, this.a8d = function() {
		aHn + 1e3 > bc.iV || (aHn = bc.iV, resize(0))
	}
}

function aI2() {
	this.fH = new aI3, this.jf = 0;
	var aI4 = new Array(32);

	function aI7() {
		for (var b7 = aI4.length, ai = 0; ai < b7; ai++) aI4[ai] = null
	}
	this.b = function() {
		for (var aI5, aI6 = document.body.firstChild; aI6;) aI5 = aI6.nextSibling, !document.body.contains(aI6) || "DIV" !== aI6.tagName && "INPUT" !== aI6.tagName && "BUTTON" !== aI6.tagName || dx.removeChild(document.body, aI6), aI6 = aI5
	}, this.ej = function(f7, el, un) {
		void 0 === el && (el = this.jf), bc.bj = !0, 0 === f7 && (0 === qp.tW() ? f7 = 5 : aT.aU.setState(13)), this.du(), this.jf === f7 && (el = aI4[f7].el, aI4[f7] = null), this.jf = f7;
		var b6 = aI4[f7];
		if (!b6 || 4 === f7 || 7 === f7 || 8 === f7 || 9 === f7 || 10 === f7 || 11 === f7 || 13 === f7 || 15 === f7 || 18 === f7 || 20 <= f7 && f7 <= 28 || 32 === f7 || 33 === f7) {
			if (0 === f7) return void aI7();
			1 === f7 ? b6 = new aI8 : 2 === f7 ? b6 = new aI9 : 3 === f7 ? b6 = new eC : 4 === f7 || 9 === f7 || 10 === f7 || 11 === f7 || 13 === f7 || 33 === f7 ? b6 = un : 5 === f7 ? b6 = new aIA : 6 === f7 ? b6 = new eg : 7 === f7 ? b6 =
				new aIB(dx.fH.aIC) : 8 === f7 ? b6 = un : 12 === f7 ? b6 = new a70 : 14 === f7 ? b6 = new aBf : 15 === f7 ? b6 = new aIB(dx.fH.aID) : 16 === f7 ? b6 = new mL : 17 === f7 ? b6 = new aIE : 18 === f7 ? b6 = new xE : 19 === f7 ? b6 =
				new aIF : 20 === f7 ? b6 = new aAz : 21 === f7 ? b6 = new aIG : 22 === f7 ? b6 = new aIH : 23 === f7 ? b6 = new aII : 24 === f7 ? b6 = new a46 : 25 === f7 ? b6 = new aIJ : 26 === f7 ? b6 = new a9Z : 27 === f7 ? b6 = new wy :
				28 === f7 ? b6 = new aIK : 29 === f7 ? b6 = new js : 30 === f7 ? b6 = new lr : 31 === f7 ? b6 = new a8l : 32 === f7 && (b6 = new a9V), b6.el = el, aI4[f7] = b6
		}
		b6.show(un)
	}, this.mQ = function() {
		this.nG() && this.eH(this.jg().el)
	}, this.eH = function(f7) {
		this.nG() && (aI4[f7] ? (this.du(), bc.bj = !0, this.jf = f7, aI4[f7].show()) : this.ej(f7))
	}, this.du = function() {
		this.nG() && aI4[this.jf].du()
	}, this.eX = function() {
		this.nG() && (aI4[this.jf].du(), aI7(), this.jf = 0, aT.aU.setState(13))
	}, this.bm = function() {
		var b6;
		this.nG() && (b6 = aI4[this.jf]).bm && b6.bm()
	}, this.resize = function() {
		if (!this.nG()) return !1;
		aI4[this.jf].resize()
	}, this.gF = function(a3, a4) {
		var b6;
		this.nG() && (b6 = aI4[this.jf]).gF && b6.gF(a3, a4)
	}, this.gK = function(a3, a4) {
		var b6;
		this.nG() && (b6 = aI4[this.jf]).gK && b6.gK(a3, a4)
	}, this.a7E = function() {
		var b6;
		this.nG() && (b6 = aI4[this.jf]).a7E && b6.a7E()
	}, this.gH = function(gP, gQ, deltaY) {
		var b6;
		this.nG() && (b6 = aI4[this.jf]).gH && b6.gH(gP, gQ, deltaY)
	}, this.ed = function(code) {
		var b6;
		return !!this.nG() && ((b6 = aI4[this.jf]).ed && b6.ed(code), !0)
	}, this.b8 = function() {
		var b6;
		this.nG() && (b6 = aI4[this.jf]) && b6.b8 && b6.b8()
	}, this.nG = function() {
		return 0 < this.jf
	}, this.jg = function() {
		return aI4[this.jf]
	}, this.ek = function(f7) {
		return aI4[f7]
	}, this.x3 = function() {
		return aI4
	}, this.removeChild = function(rT, rU) {
		try {
			rT.removeChild(rU)
		} catch (cc) {
			console.log("removeChild error " + cc)
		}
	}
}

function aAc() {
	for (var cY = document.createElement("canvas"), cY = (cY.width = 24, cY.height = 24, cY.getContext("2d", {
			alpha: !1
		})), cS = (cY.fillStyle = "rgb(0,0,0)", cY.fillRect(0, 0, 24, 24), cY.font = "22px system-ui", cY.textBaseline = "middle", cY.textAlign = "center", cY.fillStyle = "rgb(255,255,255)", cY.fillText("Q", 12, 12), cY.getImageData(0, 0, 24, 24)
			.data), b7 = cS.length, b6 = 0, ai = 0; ai < b7; ai += 4) b6 += cS[ai];
	return 16383 & b6
}

function aIL() {
	this.aIM = !1, this.b8 = function() {
		bc.ql() % 250 != 249 || c.bl || (jZ.rs.vb(+(this.aIM && y.an[c.t]), aJ.aK + bQ.fH.jO), this.aIM = !1)
	}
}

function fg() {
	var aIN;
	this.b = function() {
		if (!aIN) {
			aIN = new Array(cD.by.length);
			for (var ai = 0; ai < aIN.length; ai++) aIN[ai] = sI.fH.z8(20, cD.by[ai])
		}
	}, this.bm = function() {
		var aIP = fu;
		if (!(5 <= aIP)) {
			var aIQ = aW.aS,
				aIR = aW.aY,
				ne = fv / aIP,
				nf = fw / aIP,
				aDg = (aIQ + fv) / aIP,
				aDh = (aIR + fw) / aIP,
				iY = -20 * aIP,
				aIS = .5 * iY,
				a03 = gW.gX << 4,
				b7 = bQ.fH.jO,
				iz = bQ.fH.iz,
				j6 = bQ.fH.j6,
				c3 = cD.c3,
				pT = aIN,
				pU = bn;
			3 < aIP && (pU.globalAlpha = .5 * (5 - aIP));
			for (var ai = 0; ai < b7; ai++) {
				var cr = iz[ai],
					a3 = aIQ * (cr % a03 / 16 - ne) / (aDg - ne) + aIS,
					cr = aIR * (Math.floor(cr / a03) / 16 - nf) / (aDh - nf) + aIS;
				aIQ < a3 || aIR < cr || a3 < iY || cr < iY || (pU.setTransform(aIP, 0, 0, aIP, a3, cr), a3 = pT[c3[j6[ai] >> 3]], pU.drawImage(a3, 0, 0))
			}
			pU.globalAlpha = 1, pU.setTransform(aIP, 0, 0, aIP, 0, 0)
		}
	}
}

function ol() {
	this.aIV = function() {
		ep.eq.wg(), ep.eq.wh(), jZ.fH.close(0, 3255), 0 === aT.id ? aT.oh && aT.oh.clear() : 1 === aT.id ? aT.oi.saveString(199, "") : 2 === aT.id && aT.ok.postMessage("clear")
	}, this.aIW = function() {
		2 === aT.id ? aT.ok.postMessage("showConsentForm") : 1 === aT.id && aT.oi.setState(7)
	}, this.aIX = function() {
		this.setState(14)
	}, this.aV = function() {
		return 1 === ep.buffer.aCw(2)
	}, this.aIY = function() {
		ep.buffer.wd(102, "")
	}, this.setState = function(a9j) {
		1 === aT.id && 5 <= aT.og && aT.oi.setState(a9j)
	}, this.a9p = function() {
		var aIZ;
		1 === aT.id && 7 <= aT.og ? aT.oi.setState(5) : 2 === aT.id ? aT.ok.postMessage("reload 0") : ((aIZ = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aIZ.toString())
	}, this.a8k = function() {
		0 !== aT.id && (1 === aT.id ? aT.oi.prepareAd("8646194357") : 2 === aT.id && (0 === aT.og ? aT.ok.postMessage("prepare ad 2904813909") : aT.ok.postMessage("loadAds 2904813909")))
	}, this.vr = function(av) {
		return 0 !== aT.id && (1 === aT.id ? 12 <= aT.og && (aT.oi.presentAd(av), !0) : 2 === aT.id && 0 !== aT.og && (aT.ok.postMessage("showAd"), !0))
	}, this.aIa = function() {
		2 === aT.id && aT.og < 23 && dx.ej(4, 1, new x9("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + aFw.lB + "' target='_blank'>" + aFw
			.lB + "</a>", !0, [new eG("⬅️ " + L(22), function() {
				dx.ej(0)
			}, v.aIb)]))
	}
}

function aIc(pS, size, ji, aId, font) {
	var ai, aGZ = .2,
		canvas = document.createElement("canvas"),
		pU = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = pS, canvas.height = pS, pU.font = size + font, pU.textAlign = "center", pU.textBaseline = "middle", pU.fillStyle = "red", ai = 0; ai < ji.length; ai++) pU.fillText(ji[ai], .5 * pS, .5 * pS);
	return -1 < (canvas = function(pV) {
		var ai, mj, cS = pV.data;
		for (ai = cS.length - 4; 0 <= ai; ai -= 4)
			if (mj = cS[ai], aId <= mj) return Math.floor(ai / (4 * pS));
		return -1
	}(pU.getImageData(0, 0, pS, pS))) && (aGZ = (canvas - .5 * pS + .1 * size) / size), Math.max(aGZ, 0)
}

function aIg() {
	function aIi() {
		8 === c.d && 1 === c.bH && bT.bU.bV()
	}

	function aIh(player) {
		c.ao ? (aIj.aIk(player), aJ.aIl(), c.aH && c.sL.b8()) : aIm.yr(player)
	}
	this.xu = function(player) {
		e.qJ(player, player === c.t ? 21 : 22), aIh(player), aIi()
	}, this.xv = function(player) {
		1 === c.bH && 0 !== y.an[player] && 2 !== y.xR[player] && aIh(player), c.bG--, c.aM--, e.qJ(player, 4), aa.bY.a1D(2) && at.ap(!0), aIi()
	}
}

function aIn() {
	this.et = new aIo, this.jk = new aGh, this.jd = new zj, this.b = function() {
		this.et.b()
	}
}

function aIp() {
	this.o5 = 0, this.gap = 0, this.aCZ = 0, this.lv = 0, this.b = function() {
		this.resize()
	}, this.resize = function() {
		this.o5 = .0022 * aa.ab.aFf(.5) * aW.aX, this.aCZ = this.o5 / aW.eB, this.gap = Math.max(Math.floor((aT.aU.aV() ? .0114 : .01296) * aW.aX), 2), this.lv = this.gap / aW.eB
	}
}

function a4A(aIq, i7, aIr) {
	function click() {
		var value = 1 - aIq.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + i7, void 0 !== aIq.f7 ? ep.eq.er(aIq.f7, value) : aIq.value = value, aIr && aIr(value)
	}
	var cc;
	i7 = i7 || L(259), this.cc = document.createElement("p"), (cc = this.cc).textContent = (aIq.value ? "🟩 " : "⬜ ") + i7, cc.style.margin = "0", cc.style.marginBottom = "0.5em", cc.style.cursor = "pointer", cc.addEventListener("click", click)
}

function aJ3(aq) {
	lh && !aq || (a9t(), q = new cx, aFw = new l1, aa = new aJ5, v = new aJ6, c = new aJ7, vi = new a6c, hS = new aIn, es = new aJ8, yB = new aJ9, aAZ = new yS, ys = new aJA, gI = new aJB, s9 = new aJC, aIs = new a65, aIt = new td, sK = new a5C, nK =
		new nh, e = new aEh, a6n = new a2z, a1F = new aJD, a3B = new aJE, nl = new a9G, gd = new fx, a4z = new aJF, ag = new aJG, bi = new aJH, at = new a1, sF = new aJI, aDM = new aDA, a8e = new aJJ, qp = new aJK, np = new aJL, j1 = new aJM,
		aIj = new aJN, aJ = new aJO, a5e = new aJP, a1N = new aJQ, a0n = new pk, ay = new aJR, a2O = new aJS, gN = new aJT, y = new xQ, aIu = new aJU, cv = new a6A, m6 = new h6, uF = new aGN, p9 = new uc, a8X = new aJV, jZ = new aJW, cN =
		new aJX, o9 = new aJY, aIv = new aJZ, a8M = new aDf, sE = new aJa, aW = new aHl, yI = new a1y, a4h = new tD, a1U = new aJb, aFX = new aJc, aIm = new yq, aIw = new aJd, a59 = new lF, aB1 = new aJe, a5m = new aJf, a5n = new zI, ss =
		new aJg, eR = new qg, nr = new n1, jX = new mB, vT = new a2m, jW = new aJh, aIx = new aJi, di = new a7y, ix = new a3K, bQ = new fN, ij = new aJj, sI = new aJk, aIy = new aIg, bT = new aHb, gW = new ty, a8P = new a1A, dx = new aI2, vo =
		new a8g, aT = new oe, lh = new aJl, vL = new aJm, ep = new fD, cD = new bo, bK = new aJn, gZ = new aJo, ns = new aJp, a5h = new aAC, aHu = new a4C, pz = new aBl, nw = new aJq, bc = new a3C, nC = new tx, ak = new aIp, aGC = new a9a, aJ0 =
		new op, aJ1 = new aJr, hq = new aJs, aJ2 = new aJt, lx = new aJu, a1K = new a4F, a0f = new aJv, ru = new r8, lh.b(), aT.b(), aW.c7(), ep.b(), vi.b(), vi.a6m(), (a8W = new aJx).b(), aa.b(), a5h.b(), jZ.b(), hS.b(), es.b(), gW.b(), dx.b(),
		aHv = new aJy, aW.b(), bc.b(), ak.b(), aHu.b(), aIz = new aC3, cN.b(), ay.a2p(), vo.b(), uF.b(), qp.b(), a4z.b(), aIu.b(), di.b(), np.b(), bc.bj = !0, setTimeout(function() {
			gW.kX(2, 14071)
		}, 0), dx.ej(5, 5), aIx.aJz() || aT.aU.aIa(), aW.we(), lh.aGA = 1)
}

function aJL() {
	var aK0, canvas, bx, aK1;

	function aK7(f7, name, aK8, be) {
		bx[f7] = name, canvas[f7] = new Image, canvas[f7].onload = function() {
			! function(f7, aK8) {
				var aKB, un = null;
				7 === aK8 ? aKB = aa.rd.aKC : 8 === aK8 ? (aKB = aa.rd.aKD, un = .1) : 3 === aK8 ? (aKB = aa.rd.aKE, un = .06) : 5 === aK8 ? aKB = aa.rd.aKF : 6 === aK8 ? aKB = aa.rd.aKG : 4 === aK8 && (aKB = aa.rd.aKH);
				canvas[f7] = aa.rd.aKI(canvas[f7], aKB, un)
			}(f7, aK8), aKA()
		}, canvas[f7].onerror = function(cc) {
			console.error("Error loading image at index", f7, "Error:", cc), aKA()
		}, canvas[f7].src = "data:image/png;base64," + be
	}

	function aKA() {
		aK0--, aK4()
	}

	function aK4() {
		0 === aK0 && (aK0 = -1, aK6(), bc.bj = !0, canvas[7] = aK1, canvas[8] = aK1, canvas[9] = aK1, canvas[10] = aK1, 5 === dx.jf) && dx.jg().aKK.resize()
	}

	function aK6() {
		sK.a5M(), aHv.z5([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== aT.id, 1 !== aT.id, !0, !0, !0]), m6.h9 = new hA, m6.h9.b(), yI.c7()
	}
	this.b = function() {
		if (void 0 === canvas) {
			aK0 = 23, canvas = new Array(aK0), bx = new Array(aK0), (aK1 = document.createElement("canvas")).width = 1;
			for (var ai = aK0 - (aK1.height = 1); 0 <= ai; ai--) canvas[ai] = aK1;
			aK6(), aK7(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aK7(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aK7(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(3, "orders", 6,
					"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"
					), aK7(4, "crown", 4,
					"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"
					), aK7(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aK7(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg=="
					), aK7(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aK7(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aK7(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aK7(14, "bestPlayer", 5,
					"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"
					), aK7(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aK7(16, "apple", 3,
					"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"
					), aK7(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aK7(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aK7(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aK7(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aK7(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aK7(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC"
					)
		}
	}, this.get = function(f7) {
		return canvas[f7]
	}, this.tc = function(name) {
		for (var ai = bx.length - 1; 0 <= ai; ai--)
			if (bx[ai] === name) return canvas[ai];
		return aK1
	}, this.a45 = function() {
		return aK0 <= 0
	}, this.aK3 = function() {
		aK0 = 0, aK4()
	}
}

function aJJ() {
	var aKL, aKM, aKN, aKO, aKP, aKQ, aKR, aKS, aKT, aKU, aKV, aKW, aKX, aKY = 1,
		aKZ = 0,
		aKa = 0;

	function aKe(aKf) {
		aKf ? aKX = (aKX + 1) % jZ.fH.aKg : (jZ.fH.close(aKX, 3280), aKY ? aKY = 0 : (aKa = 1 - aKa, 0 === (aKZ = (aKZ + 1) % 2) && (aKX = (aKX + 1) % jZ.fH.aKg, jZ.fH.close(aKX, 3280)))), aKW = bc.iV, a8e.aKc = aKa, jZ.fH.tP(aKX, 4, 1) && jZ.kM.aD5(
			aKX)
	}

	function aKh() {
		0 === aKX ? aGC.a9n(3249) : aKe()
	}

	function aKn(a4, aKm, ds) {
		var ne = Math.floor((aW.aS - aKO) / 2) + aKR,
			aDg = ne + Math.floor(ds * (aKO - 2 * aKR));
		bn.lineWidth = aKm, bn.beginPath(), bn.moveTo(ne, a4), bn.lineTo(aDg, a4), bn.lineTo(Math.floor(ne - aKR + ds * aKO), a4 + aKN), bn.lineTo(ne - aKR, a4 + aKN), bn.closePath()
	}
	this.aAv = 1, this.aKb = 0, this.aKc = 0, this.b = function() {
		vo.turnstile.aAt(), qp.setState(6), aKL = 0, aKM = 1, aKS = "rgba(0,220,120,0.4)", aKT = "rgba(0,0,0,0.8)", this.resize(), bc.bj = !0, aKY = 1, aKZ = 0, aKX = this.aAv - 1, aKa = 0 === this.aKb ? lh.aKd ? 1 : 0 : this.aKb - 1, aKe(1)
	}, this.resize = function() {
		aKO = Math.floor((aT.aU.aV() ? .5 : .25) * aW.aX), aKP = aKO + 12, aKN = Math.floor(.125 * aKO), aKR = 3 * aKN, aKQ = Math.floor(.225 * aKO), aKV = Math.floor(.3 * aKN), aKU = aa.ab.ac(0, aKV)
	}, this.a9k = function(r9) {
		r9 === aKX && aKh()
	}, this.gF = function(a3, a4) {
		var ne = Math.floor((aW.aS - aKP) / 2),
			nf = Math.floor(.5 * (aW.aY - ak.gap - aKN - aKQ)) + aKN + ak.gap;
		return ne < a3 && a3 < ne + aKP && nf < a4 && a4 < nf + aKQ && (this.a8f(), aDM.gK(a3, a4, !1), !0)
	}, this.a8f = function() {
		jZ.fH.kK(3260), dx.fH.a9r()
	}, this.b8 = function() {
		6 === qp.tW() && (bc.iV > aKW + 12e3 && aKh(), 100 < (aKL += .07 * aKM * (aKL < 16 ? 5 + aKL : 84 < aKL ? 105 - aKL : 17)) ? (aKL = 100, aKM = -1) : aKL < 0 && (aKL = 0, aKM = 1), aKS = "rgba(0," + Math.floor(190 - 1.9 * aKL) + "," + Math
			.floor(120 - 1.2 * aKL) + "," + (.4 + .004 * aKL) + ")", aKT = "rgba(0," + Math.floor(1.9 * aKL) + "," + Math.floor(1.2 * aKL) + "," + (.8 - .004 * aKL) + ")", bc.bj = !0)
	}, this.bm = function() {
		var a3 = Math.floor((aW.aS - aKP) / 2),
			a4 = Math.floor(.5 * (aW.aY - ak.gap - aKN - aKQ));
		! function(title, a4, aKm, ds) {
			bn.fillStyle = aKT, aKn(a4, aKm, 1), bn.fill(), bn.fillStyle = aKS, aKn(a4, aKm, ds), bn.fill(), bn.strokeStyle = v.w, aKn(a4, aKm, 1), bn.stroke(),
				function(aKp, a4) {
					aa.ab.textAlign(bn, 1), aa.ab.textBaseline(bn, 1), bn.font = aKU, bn.fillStyle = v.w, bn.fillText(aKp, Math.floor(.5 * aW.aS), Math.floor(a4 + .58 * aKN))
				}(title, a4)
		}(L(260), a4, 3, aKL / 100),
		function(a3, a4, aS, aY, hc) {
			bn.fillStyle = v.a6T, bn.fillRect(a3, a4, aS, aY), bn.lineWidth = 3, bn.strokeStyle = v.w, bn.strokeRect(a3, a4, aS, aY);
			var b7 = Math.floor(.3 * aY);
			aa.ab.textAlign(bn, 1), aa.ab.textBaseline(bn, 1), bn.font = aa.ab.ac(0, b7), bn.fillStyle = v.w, bn.fillText(hc, Math.floor(a3 + aS / 2), Math.floor(a4 + aY / 2 + .1 * b7))
		}(a3, a4 + aKN + ak.gap, aKP, aKQ, L(22))
	}
}

function aJH() {
	var aKr, aKs, aKt, aKu, aKv, aKw, aKx, aKy, aKz, aL0, aL1, aL2, aL3, aL4, aL5, aL6, aL7, aL8, aL9, aLA, aLB, aLC, position, aLD, aLE, aLF, aLG, aLH, aLI = 1,
		aLJ = 1,
		aLK = "";

	function aLN() {
		aKx.clearRect(0, 0, aKr, aKq), aKx.fillStyle = aLH ? v.aLQ : v.aLR, aKx.fillRect(0, 0, aKr, aL2), aKx.fillStyle = v.iM, aKx.fillRect(0, aL2, aKr, aKq - aL2), a2b[c.t] >= position && aLS(a2b[c.t] - position, v.kT), 0 !== a2b[c.t] && 0 ===
			position && aLS(0, v.aLT), -1 !== aLC && aLS(aLC, v.no), aKx.fillStyle = v.w, aKx.fillRect(0, aL2, aKr, 1), aKx.fillRect(0, 0, aKr, ak.o5), aKx.fillRect(0, 0, ak.o5, aKq), aKx.fillRect(aKr - ak.o5, 0, ak.o5, aKq), aKx.fillRect(0, aKq - ak
				.o5, aKr, ak.o5), aKx.font = aKs, aa.ab.textBaseline(aKx, 1), aa.ab.textAlign(aKx, 1), aKx.fillText(aLK, Math.floor(aKr / 2), Math.floor(aL0 + aKt / 2));
		var cy, iY = a2b[c.t] < position + aKv - 1 ? 1 : 2;
		for (aKx.font = aKu, aa.ab.textAlign(aKx, 0), cy = aKv - iY; 0 <= cy; cy--) aLU(bM[cy + position]), aLV(cy, cy + position, bM[cy + position]);
		for (aa.ab.textAlign(aKx, 2), cy = aKv - iY; 0 <= cy; cy--) aLU(bM[cy + position]), aLW(cy, bM[cy + position]);
		2 == iY && (aLU(c.t), aa.ab.textAlign(aKx, 0), aLV(aKv - 1, a2b[c.t], c.t), aa.ab.textAlign(aKx, 2), aLW(aKv - 1, c.t)), 0 === position && (iY = .7 * aL3 / np.get(4).height, aKx.setTransform(iY, 0, 0, iY, Math.floor(aL4 + .58 * aL3 + .5 *
			iY * np.get(4).width), Math.floor(aL0 + aKt + .4 * aL3)), aKx.imageSmoothingEnabled = !0, aKx.drawImage(np.get(4), -Math.floor(np.get(4).width / 2), -Math.floor(np.get(4).height / 2)), aKx.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aLU(player) {
		c.bJ && (aKx.fillStyle = cD.bq[cD.c3[player]])
	}

	function aLS(ai, aLY) {
		aKx.fillStyle = aLY, ai = aKv - 1 < ai ? aKv - 1 : ai;
		aLY = Math.floor((ai === aKv - 1 ? 2 : 0 === ai ? 1.15 : 1) * aL3), aLY = ai === aKv - 2 ? Math.floor(aL2 + 9.15 * aL3) - Math.floor(aL2 + 8.15 * aL3) : aLY;
		aKx.fillRect(0, Math.floor(aL2 + (ai + (0 === ai ? 0 : .15)) * aL3), aKr, aLY)
	}

	function aLV(aEg, hm, ai) {
		aKx.fillText(aL8[hm], aL4, Math.floor(aL0 + aKt + (aEg + .5) * aL3)), 1 === y.xR[ai] && (aKx.font = "italic " + aKu);
		hm = Math.floor(aL0 + aKt + (aEg + .5) * aL3);
		aKx.fillText(y.z[ai], aL5, hm), 0 !== y.xR[ai] && (aKx.font = aKu), ai < c.aI && 2 !== y.xR[ai] || aKx.fillRect(aL5, hm + .35 * aLI, aL7[ai], Math.max(1, .1 * aLI))
	}

	function aLW(aEg, ai) {
		aKx.fillText(y.aO[ai], aL6, Math.floor(aL0 + aKt + (aEg + .5) * aL3))
	}

	function aLi(a4) {
		return (a4 -= ak.gap + aL2) < 0 ? Math.floor(a4 / aL3) - 1 : a4 < (aKv - 1) * aL3 ? Math.floor(a4 / aL3) : a4 < aKq - aL2 ? aKv - 1 : (a4 -= aKq - aL2, aKv + Math.floor(a4 / aL3))
	}

	function a5z(a3, a4) {
		return a3 >= ak.gap && a3 < ak.gap + aKr && a4 >= ak.gap && a4 < ak.gap + aKq
	}
	this.b = function() {
		var ai;
		for (dx.fH.aLL[0] = 0, aLG = aLF = aLD = 0, aLH = aLE = !1, aLC = -1, aKv = aT.aU.aV() ? 6 : 10, aLJ = (position = 0) === (aLJ = ep.buffer.data[11].value) ? 10 : 1 === aLJ ? 5 : 1, aLB = !1, aL9 = new Uint16Array(aKv + 1), aLA =
			new Uint32Array(aKv + 1), aKz = c.c2, bM = new Uint16Array(aKz), a2b = new Uint16Array(aKz), ai = aKz - 1; 0 <= ai; ai--) bM[ai] = ai, a2b[ai] = ai;
		this.resize(!0), aL7 = new Uint16Array(c.c2);
		var aLM = Math.floor(aKr - aL5 - aL4 - aKy);
		for (aL8 = new Array(c.c2), aKx.font = aKu, ai = c.c2 - 1; 0 <= ai; ai--) aL8[ai] = ai + 1 + ".", y.z[ai] = aa.a2.aj(y.cp[ai], aKu, aLM), aL7[ai] = Math.floor(aKx.measureText(y.z[ai]).width);
		aLN()
	}, this.resize = function(b) {
		if (aKq = aT.aU.aV() ? (aKr = Math.floor(.335 * aW.aX), Math.floor(aKv * aKr / 8)) : (aKr = Math.floor(.27 * aW.aX), Math.floor(aKv * aKr / 10)), aKr = Math.floor(.97 * aKr), (aKw = document.createElement("canvas")).width = aKr, aKw
			.height = aKq, aKx = aKw.getContext("2d", {
				alpha: !0
			}), aL0 = .025 * aKr, aKt = .16 * aKr, aL1 = 0 * aKr, aL2 = Math.floor(.45 * aL0 + aKt), aL3 = (aKq - aKt - 2 * aL0 - aL1) / aKv, aKs = aa.ab.ac(1, Math.floor(.55 * aKt)), aLI = Math.floor((aT.aU.aV() ? .67 : .72) * aL3), aKu = aa.ab
			.ac(0, aLI), aKx.font = aKu, aL4 = Math.floor(.04 * aKr), aL5 = Math.floor((aT.aU.aV() ? .195 : .18) * aKr), aKy = Math.floor(aKx.measureText("00920600").width), aKx.font = aKs, aL6 = aKr - aL4, !b) {
			aKx.font = aKu;
			for (var ai = c.c2 - 1; 0 <= ai; ai--) aL7[ai] = Math.floor(aKx.measureText(y.z[ai]).width);
			aLN()
		}
		aLK = aa.a2.aj(L(261), aKs, .96 * aKr)
	}, this.aLO = function() {
		return aKr
	}, this.ap = function(aq, aLP) {
		(aLP || aLB && (aq || bc.ql() % aLJ == 0)) && (aLB = !1, aLN())
	}, this.b8 = function() {
		! function() {
			for (var cy = aKz - 1; 0 <= cy; cy--) 0 === y.an[bM[cy]] && ! function(cy) {
				var aLg = bM[cy];
				aKz--;
				for (var ai = cy; ai < aKz; ai++) bM[ai] = bM[ai + 1], a2b[bM[ai]] = ai;
				bM[aKz] = aLg, a2b[bM[aKz]] = aKz
			}(cy)
		}();
		for (var aLe, gJ = aKz - 1, cy = 0; cy < gJ; cy++) y.aO[bM[cy]] < y.aO[bM[cy + 1]] && (aLe = bM[cy], bM[cy] = bM[cy + 1], bM[cy + 1] = aLe, a2b[bM[cy]] = cy, a2b[bM[cy + 1]] = cy + 1);
		! function() {
			for (var av = aLB, iY = (aLB = !0, a2b[c.t] >= aKv - 1 ? aKv - 2 : aKv - 1), ai = iY; 0 <= ai; ai--)
				if (aL9[ai] !== bM[ai] || aLA[ai] !== y.aO[bM[ai]]) return;
			(iY != aKv - 2 || aL9[aKv] === a2b[c.t] && aLA[aKv] === y.aO[c.t]) && (aLB = av)
		}();
		for (var ai = aKv - 1; 0 <= ai; ai--) aL9[ai] = bM[ai], aLA[ai] = y.aO[bM[ai]];
		aL9[aKv] = a2b[c.t], aLA[aKv] = y.aO[c.t]
	}, this.gF = function(a3, a4) {
		return !!a5z(a3, a4) && (0 <= (a3 = aLi(a4)) ? (aLD = bc.iV, aLE = !0, aLF = aLG = a3, di.a8c() && (a3 = nR(-1, aLG, aKv), aLC !== (a3 = a3 === aKv ? -1 : a3)) && (aLC = a3, aLN(), bc.bj = !0)) : (aLH && (aLH = !1, aLN(), bc.bj = !0), dx
			.ej(10, 0, new aLj({
				aLk: 1
			}))), !0)
	}, this.gK = function(a3, a4) {
		var av, aLh = aLi(a4),
			a3 = a5z(a3, a4),
			a4 = !(!(aLh < 0 && a3) || di.a8c());
		return aLE ? (av = position, (position = nR(0, position += aLF - aLh, c.c2 - aKv)) !== av ? (aLH = a4, aLh = nR(-1, aLF = aLh, aKv), aLC = aLh = aLh !== aKv && a3 ? aLh : -1, aLN(), bc.bj = !0) : aLH !== a4 && (aLH = a4, aLN(), bc.bj = !
			0), !0) : (aLh = (aLh = nR(-1, aLh, aKv)) === aKv || !a3 || di.a8c() ? -1 : aLh, (aLC !== aLh || aLH !== a4) && (aLC = aLh, aLH = a4, aLN(), bc.bj = !0))
	}, this.a8Q = function(a3, a4) {
		if (!aLE) return !1;
		aLE = !1;
		var aLh = aLi(a4);
		return di.a8c() && -1 !== aLC && (aLC = -1, aLN(), bc.bj = !0), bc.iV - aLD < 350 && aLG === aLh && -1 !== (aLh = (aLh = nR(-1, aLh, aKv)) !== aKv && a5z(a3, a4) ? aLh : -1) && (a3 = bM[aLh + position], aLh === aKv - 1 && a2b[c.t] >=
			position + aKv - 1 && (a3 = c.t), 0 === y.an[a3] || c.ao && !c.aH && !c.bl || gI.a96(a3, 800, !1, 0)), !0
	}, this.gH = function(a3, a4, deltaY) {
		var aLn;
		return !(aLE || c.gG || (aLn = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a5z(a3, a4)) || (a3 = (a3 = nR(-1, aLi(a4), aKv)) === aKv || di.a8c() ? -1 : a3, 0 < deltaY ? position < c.c2 - aKv && (position += Math.min(c.c2 - aKv -
			position, aLn), aLC = a3, aLN(), bc.bj = !0) : 0 < position && (position -= Math.min(position, aLn), aLC = a3, aLN(), bc.bj = !0), 0))
	}, this.bm = function() {
		bn.drawImage(aKw, ak.gap, ak.gap)
	}
}

function aJP() {
	var aLo = new Uint16Array(c.c2),
		aLp = 0;

	function aLv(lp, aLt) {
		var cY = bc.ql();
		return 3213 <= cY ? 4 + q.aN(100 * aLt, ay.az(lp)) : (lp = 1 + q.aN(c.aP, 300), cY < 357 ? 2 + q.aN(100 * aLt, lp) : cY < 714 ? 2 + q.aN(100 * aLt, 4 * lp) : cY < 1071 ? 2 + q.aN(100 * aLt, 10 * lp) : cY < 2142 ? 2 + q.aN(100 * aLt, 30 *
			lp) : 2 + q.aN(100 * aLt, 100 * lp))
	}

	function aLu(lp) {
		return c.aH || 4284 <= bc.ql() || aa.bY.o2(lp)
	}
	this.b = function() {
		aLo.fill(0), aLp = 15
	}, this.ib = function(aBM) {
		var player = c.t;
		return !!aa.bY.aLq(player, aBM) && !(!aa.bY.aLr(player, aa.bY.a3b(player, nl.a1R()), aBM) || (player = aBM, aBM = ij.zr[0], !aLu(player) && aLo[player] + aLv(player, aBM) > aLp))
	}, this.iu = function(lp, aLt) {
		if (!aLu(lp)) {
			aLt = aLv(lp, aLt);
			if (aLo[lp] + aLt > aLp) return !1;
			aLo[lp] += aLt
		}
		return !0
	}, this.b8 = function() {
		bc.ql() % 100 == 99 && (bc.ql() < 1071 ? aLp += 4 : bc.ql() < 2142 ? aLp += 6 : bc.ql() < 3213 ? aLp += 8 : aLp += 10)
	}
}

function u6() {
	function aM5() {
		gW.u5.b8()
	}

	function aMC(pG, aMB) {
		0 < aMB && (gW.u3[pG] += aMB, gW.u3[pG + 1] += aMB, gW.u3[pG + 2] += aMB)
	}

	function oS(pG) {
		return gW.u3[pG + 2] > gW.u3[pG] && gW.u3[pG + 2] > gW.u3[pG + 1]
	}
	this.aLw = -1, this.a9j = 0, this.aLx = 0, this.aLy = 8, this.aLz = 32, this.aM0 = 8, this.aM1 = 32, this.aM2 = [0, 0], this.a9M = [0, 0, 0, 0], this.fT = null, this.aM3 = !0, this.aM4 = !1, this.uB = function() {
		-1 !== this.aLw && clearTimeout(this.aLw), this.aLw = -1, this.fT = null, p9.uH()
	}, this.b = function() {
		7 === qp.tW() || this.aM4 || (this.aM3 = !0, this.a9j = 0, this.aLx = 1, this.aM2 = [gW.ko.gi[gW.kY].h1[0], gW.ko.gi[gW.kY].h2[0]], this.a9M = [gW.ko.gi[gW.kY].h3[3], gW.ko.gi[gW.kY].h3[4], gW.ko.gi[gW.kY].h3[5], gW.ko.gi[gW.kY].h3[6]],
			this.aLy = gW.ko.gi[gW.kY].h3[7], this.aLz = gW.ko.gi[gW.kY].h3[8], this.aM0 = gW.ko.gi[gW.kY].h3[9], this.aM1 = gW.ko.gi[gW.kY].h3[10], this.aM3 ? this.aLw = setTimeout(aM5, 16) : this.b8())
	}, this.b8 = function() {
		if (8 === qp.tW() && gI.aM6()) this.aLw = setTimeout(aM5, 16);
		else {
			if (0 === this.a9j) {
				var h0 = cN.aM7();
				if (cN.uC(gW.ko.gi[gW.kY].h3[2]), p9.kX([gW.gX, gW.gY, gW.ko.gi[gW.kY].h3[0], gW.ko.gi[gW.kY].h3[1]]), cN.uC(h0), this.fT = p9.pA(), this.a9j++, this.aM3) return void(this.aLw = setTimeout(aM5, 16))
			}
			for (var pG, ic, h0 = this.aM3 ? 10 : 1e6, h0 = gW.gY - this.aLx - 1 < h0 ? gW.gY - this.aLx - 1 : h0, a4P = this.aLx + h0, a4 = this.aLx; a4 < a4P; a4++)
				for (var a3 = 1; a3 < gW.gX - 1; a3++) oS(pG = 4 * (ic = a3 + a4 * gW.gX)) ? this.aM8(pG, ic, 1) : (this.aM8(pG, ic, 0), function(a3, a4, pG) {
					return 1 < a3 && oS(pG - 4) || a3 < gW.gX - 2 && oS(pG + 4) || 1 < a4 && oS(pG - 4 * gW.gX) || a4 < gW.gY - 2 && oS(pG + 4 * gW.gX)
				}(a3, a4, pG) && this.aMA(a3, a4));
			this.aLx = a4P, this.aLx >= gW.gY - 1 ? (gW.u1.putImageData(gW.u2, 0, 0, 1, 1, gW.gX - 2, gW.gY - 2), bc.bj = !0, this.uB()) : this.aM3 && (this.aLw = setTimeout(aM5, 16))
		}
	}, this.aM8 = function(pG, ic, f7) {
		aMC(pG, Math.floor(this.aM2[f7] + this.a9M[f7] * this.fT[ic] / 1e4) - gW.u3[pG])
	}, this.aMD = function(pG, mj, aME, f7, a9M) {
		aMC(pG, Math.floor(this.aM2[f7] + (1 - mj / aME) * a9M) - gW.u3[pG])
	}, this.aMA = function(gP, gQ) {
		for (var pG, mj, aME, a4M = gP - this.aLz, a4N = gQ - this.aLz, a4O = gP + this.aLz, a4P = gQ + this.aLz, a4M = a4M < 1 ? 1 : a4M, a4O = a4O > gW.gX - 2 ? gW.gX - 2 : a4O, a4P = a4P > gW.gY - 2 ? gW.gY - 2 : a4P, a4 = a4N < 1 ? 1 :
			a4N; a4 <= a4P; a4++)
			for (var a3 = a4M; a3 <= a4O; a3++) oS(pG = 4 * (a3 + a4 * gW.gX)) ? (aME = this.aLy + (this.aLz - this.aLy) * this.fT[a3 + gW.gX * a4] / 1e4, Math.abs(gP - a3) > aME || Math.abs(gQ - a4) > aME || aME <= (mj = Math.sqrt((gP - a3) * (
				gP - a3) + (gQ - a4) * (gQ - a4))) || this.aMD(pG, mj, aME, 1, this.a9M[3])) : (aME = this.aM0 + (this.aM1 - this.aM0) * this.fT[a3 + gW.gX * a4] / 1e4, Math.abs(gP - a3) > aME || Math.abs(gQ - a4) > aME || aME <= (mj = Math
				.sqrt((gP - a3) * (gP - a3) + (gQ - a4) * (gQ - a4))) || this.aMD(pG, mj, aME, 0, this.a9M[2]))
	}
}

function aIJ() {
	var eD, wz, x0;

	function k4() {
		x2(), 3 !== c.data.botDifficultyType || aa.kt.a48(c.data.botDifficultyData) || (c.data.botDifficultyType = 0), 3 !== c.data.botDifficultyType && (c.data.botDifficultyData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		3 === c.data.botDifficultyType && aa.kt.x4(x0.eZ(), c.data.botDifficultyData, yB.aFK.length - 1)
	}

	function aMF(ey, f7) {
		var f2 = new f3,
			value = (f2.f4(f7 < 0 ? L(217) : L(62) + " " + cD.bx[f7 % 9]), 0 <= f7 && (f2.vv(L(69) + ": " + c.data.teamPlayerCount[f7]).style.marginBottom = "1em"), f7 < 0 ? c.data.botDifficultyValue : c.data.botDifficultyTeam[f7]);
		f2.vx(new r2({
			ot: yB.aFK,
			value: value
		}, function(ca) {
			f7 < 0 ? c.data.botDifficultyValue = ca : c.data.botDifficultyTeam[f7] = ca
		})), ey.push(f2)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(217), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, function() {
		var ey = [];
		if (function(ey) {
				var f2 = new f3,
					ot = (f2.f4(L(94)), [L(96), L(262), L(263), L(97)]),
					value = c.data.botDifficultyType;
				0 === c.data.gameMode && (value = Math.min(value, 2), ot.splice(2, 1));
				f2.vx(new r2({
					ot: ot,
					value: value
				}, function(f7) {
					x2(), c.data.botDifficultyType = f7, 0 === c.data.gameMode && 2 === f7 && (c.data.botDifficultyType = 3), 3 !== c.data.botDifficultyType || c.data.botDifficultyData || (c.data.botDifficultyData =
						new Uint8Array(c.c2)), 2 !== c.data.botDifficultyType || c.data.botDifficultyTeam || (c.data.botDifficultyTeam = new Uint8Array(9)), dx.ej(25)
				})), ey.push(f2)
			}(ey), 0 === c.data.botDifficultyType) aMF(ey, -1);
		else if (2 === c.data.botDifficultyType)
			for (var ai = 0; ai < c.data.teamPlayerCount.length; ai++) c.data.teamPlayerCount[ai] && aMF(ey, ai);
		else 3 === c.data.botDifficultyType && ! function(ey) {
			var f2 = new f3;
			f2.f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.botDifficultyData, 8)), f2.f5(x0), ey.push(f2)
		}(ey);
		return ey
	}())
}

function aMG() {
	this.aKI = function(canvas, aKB, un) {
		var aS = canvas.width,
			aY = canvas.height,
			cY = aa.ab.pR(aS, aY),
			pU = aa.ab.getContext(cY, !0),
			canvas = (pU.drawImage(canvas, 0, 0), pU.getImageData(0, 0, aS, aY));
		return aKB(canvas.data, aS, aY, un), pU.putImageData(canvas, 0, 0), cY
	}, this.aKG = function(h9, aS, aY) {
		for (var a3 = aS - 1; 0 <= a3; a3--)
			for (var a4 = aY - 1; 0 <= a4; a4--) {
				var ai = 4 * (a3 + a4 * aS);
				h9[3 + ai] = h9[ai], h9[ai] = h9[1 + ai] = h9[2 + ai] = 255
			}
	}, this.aKC = function(h9, aS, aY) {
		for (var a3 = aS - 1; 0 <= a3; a3--)
			for (var a4 = aY - 1; 0 <= a4; a4--) {
				var ai = 4 * (a3 + a4 * aS);
				h9[1 + ai] > h9[2 + ai] + 10 && (h9[3 + ai] = h9[ai], h9[1 + ai] = h9[2 + ai])
			}
	}, this.aKE = function(h9, aS, aY, un) {
		for (var gap = Math.floor(Math.min(aS, aY) * un), a3 = 0; a3 < aS; a3++)
			for (var ai, a4 = 0; a4 < aY; a4++)(a3 < gap || a4 < gap || aS - gap <= a3 || aY - gap <= a4) && (h9[3 + (ai = 4 * (a3 + a4 * aS))] = 255 - 255 * (h9[1 + ai] - h9[ai]) / (255 - h9[ai]))
	}, this.aMH = function(h9, aS, aY, un) {
		for (var a3 = aS - 1; 0 <= a3; a3--)
			for (var a4 = aY - 1; 0 <= a4; a4--) {
				var ai = 4 * (a3 + a4 * aS);
				h9[ai] = un[0], h9[1 + ai] = un[1], h9[2 + ai] = un[2]
			}
	}, this.aKD = function(h9, aS, aY, un) {
		for (var gap = Math.floor(aS * un), a3 = 0; a3 < aS; a3++)
			for (var ai, a4 = 0; a4 < aY; a4++)(a3 < gap || a4 < gap || aS - gap <= a3 || aY - gap <= a4) && (h9[ai = 4 * (a3 + a4 * aS)] = h9[1 + ai] = h9[2 + ai] = 0)
	}, this.aKF = function(h9, aS, aY) {
		for (var a4, ai, a3 = aS - 1; 0 <= a3; a3--)
			for (a4 = aY - 1; 0 <= a4; a4--) 200 < h9[1 + (ai = 4 * (a3 + a4 * aS))] && h9[1 + ai] - 20 > h9[ai] && h9[1 + ai] - 20 > h9[2 + ai] ? h9[ai] + h9[2 + ai] < 40 ? h9[3 + ai] = 0 : (h9[3 + ai] = h9[ai], h9[ai] = 255, h9[1 + ai] = 255,
				h9[2 + ai] = 255) : h9[ai] < 50 && h9[1 + ai] < 50 && h9[2 + ai] < 50 && (h9[ai] + h9[1 + ai] + h9[2 + ai] < 50 ? h9[3 + ai] = 180 : h9[3 + ai] = 180 + Math.floor(75 * (h9[ai] + h9[1 + ai] + h9[2 + ai] - 50) / 100))
	}, this.aKH = function(h9, aS, aY) {
		for (var a4, ai, a3 = aS - 1; 0 <= a3; a3--)
			for (a4 = aY - 1; 0 <= a4; a4--) h9[1 + (ai = 4 * (a3 + a4 * aS))] > h9[ai] + 20 && h9[1 + ai] > h9[2 + ai] + 20 && h9[ai] + h9[2] < 40 && (h9[3 + ai] = 255 - h9[1 + ai], h9[ai] = h9[1 + ai] = h9[2 + ai] = h9[ai])
	}, this.aMI = function(h9, aS, aY, un) {
		for (var mj = aS >> 1, a3 = 0; a3 < aS; a3++)
			for (var a4 = 0; a4 < aY; a4++) Math.sqrt((a3 - mj) * (a3 - mj) + (a4 - mj) * (a4 - mj)) > un * mj && (h9[4 * (a3 + a4 * aS) + 3] = 0)
	}
}

function aIG() {
	var eD, wz, x0, kA;

	function k4() {
		x2(), dx.x3()[19] = null, dx.mQ()
	}

	function aMJ() {
		x2(), dx.ej(21)
	}

	function x2() {
		1 === c.data.gameMode ? c.qr.a6G() : 0 === c.data.gameMode && 1 === c.data.colorsType && aa.kt.x4(x0.eZ(), c.data.colorsData, 262143)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, kA = [new eG("⬅️ " + L(22), k4)], 1 === c.data.gameMode && kA.push(new eG(L(264), aMJ, 1, 1)), eD = new eF(L(140), kA), wz = new en(eD.eM, (kA = [], 0 === c.data.gameMode ? (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(126), L(97)],
			value: c.data.colorsType
		}, function(f7) {
			x2(), c.data.colorsType = f7, 1 !== c.data.colorsType || c.data.colorsData && c.data.colorsData.length === c.c2 || (c.data.colorsData = new Uint32Array(c.c2)), dx.ej(21)
		})), ey.push(f2)
	}(kA), 1 === c.data.colorsType && function(ey) {
		var f2 = new f3;
		f2.f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.colorsData, 1)), f2.f5(x0), ey.push(f2)
	}(kA)) : (c.qr.a6G(), kA.push(function() {
		var f2 = new f3;
		f2.f4(L(69));
		for (var ai = 0; ai < cD.bx.length; ai++) {
			var ca = (ai + 1) % cD.bx.length,
				cc = f2.vv((0 == ca ? "" : "Team ") + cD.bx[ca]);
			ai && (cc.style.marginTop = "0.5em"), f2.f5(new f6({
				f7: -1,
				value: c.data.teamPlayerCount[ca]
			}, 1, 0, function(cc) {
				eD.ee[1].iE(0);
				var playerCount = q.a0(Math.floor(cc.target.value), 0, 512);
				cc.target.value = playerCount, c.data.teamPlayerCount[cc.target.aMM] = playerCount
			})).cc.aMM = ca
		}
		return f2
	}()), function(ey) {
		for (var f2 = new f3, ot = (f2.f4(L(265)), []), ai = 0; ai < cD.bx.length; ai++) {
			var ca = (ai + 1) % cD.bx.length;
			ot.push(cD.bx[ca])
		}
		c.data.colorsData || (c.data.colorsData = new Uint32Array(1));
		f2.vx(new r2({
			ot: ot,
			value: (c.data.colorsData[0] % 16 + cD.bx.length - 1) % cD.bx.length
		}, function(f7) {
			var f7 = (f7 + 1) % cD.bx.length,
				cR = cD.bz[f7],
				cR = (cR[0] >> 2 << 12) + (cR[1] >> 2 << 6) + (cR[2] >> 2);
			c.data.colorsData[0] = cR - (15 & cR) + f7
		})), ey.push(f2)
	}(kA)), kA))
}

function sa() {
	e.b8(), gN.b8(), at.bB(), jZ.fH.b8()
}

function sf() {
	a1U.b8(), ys.b8(), a5e.b8(), ay.b8(), aIw.b8(), aAZ.b8(), o9.b8(), bQ.fH.b8(), aJ.aMN(), bi.b8(), cv.b8(), a5h.b8(), gN.b8(), gN.aMO(), at.b8(), sI.b8(), ag.b8(), a1F.b8(), a5n.zP(), e.b8(), a59.b8(), nl.b8(), yI.b8(), pz.b8(), bK.b8(), jZ.fH
	.b8(), jZ.aMP.b8(), dx.b8(), vo.vq.b8(), eR.b8(), bc.b8()
}

function sX() {
	gI.b8(), sF.b8(), a3B.b8(), sE.b8(), nr.b8(), a5m.b8(), a5n.b8(), a4h.tT()
}

function sh() {
	bi.ap(!1), a1F.ap(), at.ap(!1), ag.ap(), nl.ap(), yI.ap(), gN.ap(!1), bK.kQ()
}

function sg() {
	gN.ap(!1) && (bc.bj = !0), jZ.fH.b8()
}

function fE() {
	this.s5 = function(f7, og) {
		return Number(this.s6(f7, og))
	}, this.s6 = function(f7, og) {
		var d0 = null;
		return 0 === aT.id ? aT.oh && (d0 = aT.oh.getItem((og ? "v" : "d") + f7)) : 1 === aT.id ? d0 = aT.oi.loadString((og ? 1e3 : 2e3) + f7) : 2 === aT.id && (d0 = aT.oj[(og ? "v" : "d") + f7]), d0 && 0 !== d0.length ? d0 : null
	}, this.a6p = function(b7, aMQ) {
		var ce = [],
			aMR = aMQ ? "e" : "l";
		if (0 === aT.id) {
			if (aT.oh)
				for (ai = 0; ai < b7; ai++) ce.push(aT.oh.getItem(aMR + ai))
		} else if (1 === aT.id)
			for (var aMS = aMQ ? 5e3 : 3e3, ai = 0; ai < b7; ai++) ce.push(aT.oi.loadString(aMS + ai));
		else if (2 === aT.id)
			for (ai = 0; ai < b7; ai++) ce.push(aT.oj[aMR + ai]);
		return ce
	}, this.save = function(f7, value, og) {
		var a0X = (og ? "v" : "d") + f7;
		if (0 === aT.id) {
			if (aT.oh && ep.buffer.data[140].value) try {
				aT.oh.setItem(a0X, value)
			} catch (cc) {
				console.log(cc)
			}
		} else 1 === aT.id ? aT.oi.saveString((og ? 1e3 : 2e3) + f7, value) : 2 === aT.id && (aT.oj[a0X] = value, aT.ok.postMessage(a0X + " " + value))
	}, this.a6y = function(ce, aMQ) {
		var b7 = ce.length,
			aMR = aMQ ? "e" : "l";
		if (0 === aT.id) {
			if (aT.oh && ep.buffer.data[140].value) try {
				for (ai = 0; ai < b7; ai++) aT.oh.setItem(aMR + ai, ce[ai])
			} catch (cc) {
				console.log(cc)
			}
		} else if (1 === aT.id)
			for (var aMS = aMQ ? 5e3 : 3e3, ai = 0; ai < b7; ai++) aT.oi.saveString(aMS + ai, ce[ai]);
		else if (2 === aT.id)
			for (ai = 0; ai < b7; ai++) aT.oj[aMR + ai] = ce[ai], aT.ok.postMessage(aMR + ai + " " + ce[ai])
	}
}

function aJa() {
	var aMT, aMU;
	this.b = function() {
		aMT = 1, aMU = 0
	}, this.b8 = function() {
		0 < aMT && (aMU = 0 === aMU ? bc.iV + 16 : aMU, aMT = (aMT -= .001 * (bc.iV - aMU)) < 0 ? 0 : aMT, aMU = bc.iV, bc.bj = !0)
	}, this.bm = function() {
		0 < aMT && (bn.fillStyle = "rgba(0,0,0," + aMT + ")", bn.fillRect(0, 0, aW.aS, aW.aY))
	}
}

function aMX() {
	this.aHA = function(player, aBM, po) {
		aa.bY.aLr(player, po, aBM) && (ay.a5f(player, aBM), !aa.bY.o2(aBM)) && o9.qE.qF[aBM] && o9.qE.qF[aBM]--
	}, this.aAY = function(player, aBM, po) {
		aa.bY.aMY(po, aBM) ? a5e.iu(aBM, ij.zr[0]) && (lx.aMZ(player, aBM, ij.zr[0], 1), aa.bY.py(aBM, ij.zr[0]), pz.aBw(player, aBM), gN.aMa(aBM, ij.zr[0])) : pz.q0(player, po, 12)
	}
}

function aAH() {
	var aMb;
	this.b = function() {
		aMb = !1
	}, this.b8 = function() {
		var pG;
		if (function() {
				if (!aMb) {
					if (bc.ql() % 30 != 9) return;
					if (!aa.bY.y5(90)) return;
					aMb = !0
				}
				return 1
			}() && (! function() {
				var ht = e.aFQ(956);
				if (ht) {
					if (aa.bY.yb(ht.player)) return 1;
					e.aAQ(956, 0)
				}
				return
			}() && (-1 === (pG = (c.bJ ? function() {
				var id = bK.y9(),
					b7 = aJ.aK;
				if (cD.c0[id])
					for (var lK = aJ.bX, c1 = cD.c1, ai = 0; ai < b7; ai++) {
						var pG = lK[ai];
						if (c1[pG] !== id) return pG
					} else if (1 < b7) return bM[b7 - 1];
				return -1
			} : function() {
				for (var aMj = aJ.aK, aMk = aJ.bX, aMl = a2b, ai = 0; ai < aMj; ai++) {
					var pG = aMk[ai];
					if (0 !== aMl[pG]) return pG
				}
				return -1
			})()) ? ! function() {
				var ht = e.aFQ(957);
				if (ht && ht.aF1) {
					if (j1.zb(ht.aF1.ic << 2)) return 1;
					e.aAQ(957, 0)
				}
				return
			}() : (e.u(0, L(266, [y.z[pG]]), 956, pG, v.w, v.x, -1, !0), 0)))) {
			var b7 = o9.oA.oB;
			if (0 !== b7)
				for (var buffer = o9.oA.buffer, ai = 0; ai < b7; ai++) {
					var ic = buffer[ai];
					if (j1.zb(ic << 2)) return void e.u(0, L(267, [ix.oN(ic), ix.oP(ic)]), 957, 0, v.w, v.x, -1, !0, void 0, {
						cy: 1,
						ic: ic
					})
				}
		}
	}
}

function aHc() {
	this.b = function() {
		this.aBe = 0, this.pF = [], this.aMm = 0, this.aMn = 0
	}, this.kH = function() {
		var nU;
		c.aH || (nU = this, 2 === c.yG ? nU.pF = bT.aHd.pE() : c.bJ ? nU.pF = bT.aHd.pI() : nU.pF = bT.aHd.pK(), nU.aBe = vL.yu.aBd(), nU.aMm = Math.max(1, bT.aHd.pO(nU.pF)), ss.bY.aMp(), 8 === c.d ? bT.result.aMn = 0 : nU.aMn = 100 * bT.result
			.aBe * (1 + c.s))
	}
}

function aJU() {
	var aMr, aMs, aMt;
	this.b = function() {
		aMr =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aMs =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aMt = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var kZ = ["K ", " Y", "E ", " Z", " z", " s", "S "], kf = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], ai = aMr.length - 1; 0 <= ai; ai--)
			for (var cy = kZ.length - 1; 0 <= cy; cy--) aMr[ai] = aMr[ai].replace(kZ[cy], kf[cy])
	}, this.aMu = function() {
		var b7 = c.aI,
			z = y.z,
			cp = y.cp,
			playerNamesData = c.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < b7)
			for (var ai = 0; ai < b7; ai++) z[ai] = cp[ai] = "Player " + cN.cO(1e3);
		else
			for (ai = 0; ai < b7; ai++) z[ai] = cp[ai] = playerNamesData[ai]
	}, this.kX = function() {
		if (9 === c.d) {
			for (var mj = cN.random(), aN0 = aMt, aN1 = aMs, po = yB.po, b7 = aN0.length, b6 = c.data.teamPlayerCount[7], z = y.z, cp = y.cp, ai = b6 - 1; ai >= c.aI; ai--) z[ai] = cp[ai] = aN0[(ai + mj) % b7];
			for (b7 = aN1.length - 1, ai = b6; ai < c.c2; ai++) z[ai] = cp[ai] = aN1[po[ai] ? b7 : ai % b7]
		} else(2 === c.data.playerNamesType ? function() {
			for (var b7 = c.c2, z = y.z, cp = y.cp, playerNamesData = c.data.playerNamesData, ai = c.aI; ai < b7; ai++) z[ai] = cp[ai] = playerNamesData[ai]
		} : 1 === c.data.playerNamesType ? function() {
			for (var z = y.z, cp = y.cp, ai = c.aI; ai < c.c2; ai++) z[ai] = cp[ai] = "Bot " + cN.cO(1e3)
		} : function() {
			for (var aN2 = aMr, b7 = aN2.length, mj = cN.random(), z = y.z, cp = y.cp, ai = c.aI; ai < c.c2; ai++) z[ai] = cp[ai] = aN2[(ai + mj) % b7]
		})()
	}
}

function aLj(data) {
	var eh, aN3;

	function aNH(b7) {
		return b7 < 60 ? 1 === b7 ? b7 + " Second" : b7 + " Seconds" : b7 < 3600 ? 1 === (b7 = Math.floor(b7 / 60)) ? b7 + " Minute" : b7 + " Minutes" : b7 < 172800 ? 1 === (b7 = Math.floor(b7 / 3600)) ? b7 + " Hour" : b7 + " Hours" : (b7 = Math
			.floor(b7 / 172800)) + " Days"
	}

	function aN5(i) {
		var b7 = data.data.length;
		if (b7) {
			for (var mS, max = min = parseInt(data.data[0][0]), ai = 1; ai < b7; ai++) var aHY = parseInt(data.data[ai][0]),
				min = Math.min(aHY, min),
				max = Math.max(aHY, max);
			mS = i < 0 ? min + i : max + 1, dx.ej(8, dx.jg().el, new ex(21, {
				jb: data.jb,
				mS: mS,
				mT: mS + Math.abs(i)
			}))
		}
	}
	if (this.show = function() {
			eh.show(), this.resize()
		}, this.du = function() {
			eh.du()
		}, this.resize = function() {
			eh.resize(), aN3.resize()
		}, this.ed = function(cY) {
			2 === cY && eh.ee[0].ef()
		}, data.aLk) {
		eh = new eF(L(3), [new eG("⬅️ " + L(22), function() {
			dx.mQ()
		})]);
		var cS = {
				aN8: [],
				aN6: [L(280), L(281), L(282) + " ↗"],
				aN9: [12, 50, 38]
			},
			aAA = c.data.aAA;
		if (aAA) {
			for (var b7 = aAA.length, aN8 = cS.aN8, z = y.z, ai = 0; ai < b7; ai++) aN8.push([{
				d0: ai + 1 + ".",
				av: 0
			}, {
				d0: z[ai],
				av: 0
			}, {
				d0: hS.et.b3(aAA[ai], 5),
				av: 1,
				hT: aAA[ai],
				mh: 0
			}]);
			aN3 = new aNA(eh.eM, cS, {
				aNB: 1
			})
		} else aN3 = new aNA(eh.eM, cS)
	} else {
		var cS = data.data.length ? 0 : 1,
			xB = [new eG("⬅️ " + L(22), function() {
				dx.mQ()
			}), new eG(L(268), function() {
				aN5(-10)
			}, cS, 0, 1), new eG(L(269), function() {
				aN5(10)
			}, cS, 0, 1), new eG(L(136), function() {
				dx.ej(11, 10, new vz({
					jb: data.jb
				}))
			})],
			aN6 = [L(270), L(271), L(272), L(273), L(274), L(275), L(276), L(277), L(278), L(279), L(76), L(77), "Audit Log", L(78)];
		eh = new eF(aN6[data.jb], xB), ! function() {
			var ai, cS = {
					aN8: []
				},
				aN8 = cS.aN8,
				aNC = data.data,
				b7 = aNC.length;
			b7 && 0 === aNC[0][0] && 0 <= (f7 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.jb]) && (dx.fH.a40[f7] = aNC[0][1]);
			var ch = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.jb],
				aNF = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.jb],
				f7 = [
					[L(283), L(284) + " ↗", L(285)],
					[L(283), L(286), L(287), L(288) + " ↗"],
					[L(283), L(284) + " ↗", L(287)],
					[L(283), L(284) + " ↗", L(287)],
					[L(280), L(289), L(290) + " ↗", L(291) + " ↗", L(7)],
					[L(280), L(289), L(292) + " ↗", L(100) + " ↗", L(293)],
					[L(280), L(289), L(294) + " ↗", L(295) + " ↗", L(101)],
					[L(280), L(289), L(292) + " ↗", L(100) + " ↗", L(296)],
					[L(280), L(289), L(290) + " ↗", L(291) + " ↗", L(7)],
					[L(283), L(284) + " ↗", L(287)],
					[L(283), L(284) + " ↗", L(297)],
					[L(283), L(284) + " ↗", L(287)],
					[L(280), L(289), L(290) + " ↗", L(291) + " ↗", L(298)],
					[L(283), L(284) + " ↗", L(287)]
				];
			if (cS.aN6 = f7[data.jb], cS.aN9 = [
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
				][data.jb], 0 === data.jb || 2 === data.jb || 3 === data.jb || 9 === data.jb || 10 === data.jb || 11 === data.jb || 13 === data.jb)
				for (ai = 0; ai < b7; ai++) aN8.push([{
					d0: aNC[ai][0] + 1 + ".",
					av: 0
				}, {
					d0: aNC[ai][1],
					av: 1,
					hT: aNC[ai][4],
					mh: aNC[ai][3]
				}, {
					d0: (ch * aNC[ai][2]).toFixed(aNF),
					av: 0
				}]);
			else if (12 === data.jb)
				for (ai = 0; ai < b7; ai++) {
					var aNG = aNC[ai][3];
					aN8.push([{
						d0: "" + aNC[ai][0],
						av: 0
					}, {
						d0: aNH(aNC[ai][4]),
						av: 0
					}, {
						d0: aNC[ai][5],
						av: 1,
						hT: aNC[ai][1],
						mh: 0
					}, {
						d0: aNC[ai][6],
						av: 1,
						hT: aNC[ai][2],
						mh: 0
					}, {
						d0: hX.yo(aNG, hS.et.b3(aNC[ai][1], 5)),
						av: 0
					}])
				} else if (1 === data.jb)
					for (ai = 0; ai < b7; ai++) aN8.push([{
						d0: aNC[ai][0] + 1 + ".",
						av: 0
					}, {
						d0: aNC[ai][1],
						av: 0
					}, {
						d0: (ch * aNC[ai][2]).toFixed(aNF),
						av: 0
					}, {
						d0: aNC[ai][3],
						av: 1,
						hT: aNC[ai][5],
						mh: aNC[ai][4]
					}]);
				else if (4 === data.jb || 5 === data.jb || 6 === data.jb || 7 === data.jb || 8 === data.jb)
				for (ai = 0; ai < b7; ai++) {
					var aNI = aNC[ai][5];
					4 === data.jb || 8 === data.jb ? "100%" === (aNI = (aNI % 64 * 100 / (aNI >> 6)).toFixed(0) + "%") && (4 === data.jb ? aNI += " (" + L(299) + ")" : aNI += " (" + L(300) + ")") : 5 === data.jb ? 32768 <= aNI && (aNI = -(aNI -
						32768)) : aNI = (ch * aNI).toFixed(aNF), aN8.push([{
						d0: "" + aNC[ai][0],
						av: 0
					}, {
						d0: aNH(aNC[ai][6]),
						av: 0
					}, {
						d0: aNC[ai][7],
						av: 1,
						hT: aNC[ai][1],
						mh: aNC[ai][2]
					}, {
						d0: aNC[ai][8],
						av: 1,
						hT: aNC[ai][3],
						mh: aNC[ai][4]
					}, {
						d0: "" + aNI,
						av: 0
					}])
				}
			aN3 = new aNA(eh.eM, cS)
		}()
	}
}

function aJd() {
	this.aNJ = new Uint32Array(c.c2), this.b = function() {
		10 === c.d && this.aNJ.fill(0)
	}, this.b8 = function() {
		10 === c.d && this.bR()
	}, this.bR = function() {
		for (var pG, target, ba, aNJ = this.aNJ, lK = aJ.bX, aBo = y.ax, ai = aJ.aK - 1; 0 <= ai; ai--)(pG = lK[ai]) >= c.aI || (target = Math.max(q.aN(aBo[pG], 4), 2048), ba = Math.max(ay.bb(pG), 100), aNJ[pG] += q.aN(ba * target, 1e4), aNJ[
			pG] > target && (aNJ[pG] = target))
	}, this.aNK = function(player, po) {
		return 10 !== c.d || aa.bY.o2(player) ? po : Math.min(this.aNJ[player], po)
	}, this.aNL = function(player, po) {
		10 !== c.d || aa.bY.o2(player) || (this.aNJ[player] -= po)
	}
}

function aJc() {
	var aKW = 0,
		aNM = !0;

	function aNN(id) {
		id = [L(301), L(302), L(303), L(304)][id];
		e.aFN(id)
	}
	this.b8 = function() {
		var av, ky;
		bc.iV < aKW || (aKW = bc.iV + 3e3, c.bl) || c.aH || aa.bY.bZ(c.t) || (av = new Date, ky = av.getUTCSeconds(), aNM ? ky < 43 && (aNM = !1) : ky < 43 || (aKW += 52e3, aNM = !0, (ky = (av.getUTCMinutes() + 2) % 60) % 10 == 0 ? c.d < 7 &&
			aNN(0) : ky % 10 == 5 ? 7 !== c.d && 10 !== c.d || aNN(1) : ky % 10 == 7 ? 8 === c.d && aNN(2) : ky % 10 == 2 && 9 === c.d && aNN(3)))
	}
}

function aNO() {
	var aNS, aNT, aCz = document.createElement("div"),
		aNP = document.createElement("div"),
		aNQ = 0,
		aNR = 0;
	this.show = function(a3, a4, be, aNU, aNV, cY) {
			if (aNQ) {
				if (!aNU) return;
				this.du()
			}
			a3 === a4 && -1 === a3 ? (a3 = aNS, a4 = aNT) : (aNS = a3, aNT = a4);
			var aNW = Math.floor(aa.ab.e1(.018)),
				aNV = (a3 = Math.max(aNW + 2, a3), aNV || (aNR = aNU), aNQ = 1, aW.aS / aW.eB),
				aNU = (aCz.style.whiteSpace = "pre", aCz.textContent = be, aa.ab.eA(aCz, 5), aCz.style.font = aa.ab.ac(0, aa.ab.e1(.015)), aCz.style.padding = "0.3em 0.6em", aCz.style.left = a3 + "px", aCz.style.top = "0px", document.body
					.appendChild(aCz), a3 + aCz.offsetWidth - aNV),
				be = (0 < aNU && (a3 -= aNU, a3 = Math.max(aNW + 1, a3), aCz.style.left = a3 + "px", a3 < aNW + 2) && (aCz.style.whiteSpace = "pre-wrap"), aCz.offsetHeight);
			aCz.style.top = a4 - be + aNR * ak.aCZ + "px", a3 -= aNW, aNP.style.backgroundColor = aa.color.a7a(cY >> 12 << 2, (cY >> 6 & 63) << 2, (63 & cY) << 2), aNP.style.left = a3 + "px", aNP.style.top = aCz.style.top, aNP.style.width = aNW +
				"px", aNP.style.height = be + "px", aa.ab.eA(aNP, 4), aa.ab.eA(aNP, 8), aa.ab.eA(aNP, 2), document.body.appendChild(aNP)
		}, this.du = function(aNZ) {
			if (aNQ) {
				if (aNZ && aNR) return 0;
				aNQ = 0, dx.removeChild(document.body, aCz), dx.removeChild(document.body, aNP)
			}
			return 1
		}, aCz.style.position = "absolute", aCz.style.backgroundColor = v.iM, aCz.style.color = v.w, aCz.style.pointerEvents = "none", aCz.style.zIndex = "5", aCz.style.maxWidth = "100%", aNP.style.position = "absolute", aNP.style.color = v.w, aNP
		.style.pointerEvents = "none", aNP.style.zIndex = "5"
}

function aJ8() {
	this.et = new a9u, this.jk = new a9s, this.jd = new aNa, this.b = function() {
		this.et.b()
	}
}

function a3z(a30, a7v, aNb, aNc, aNd) {
	var self;
	this.kB = document.createElement("span"), this.resize = function() {
			this.kB.style.fontSize = ((aNc - aNb) * a7v.offsetHeight).toFixed(1) + "px"
		}, (self = this).kB.textContent = a30, self.kB.style.color = v.w, self.kB.style.font = "inherit", self.kB.style.margin = "0.1em 0.6em", self.kB.style.pointerEvents = "none", aNd && (self.kB.style.fontWeight = "bold"), self.kB.style
		.whiteSpace = "nowrap", self.kB.style.display = "block", a7v.appendChild(self.kB)
}

function aJn() {
	var gap, aNe = !1,
		yz = 0,
		aS = 0,
		nc = 0,
		canvas = null,
		a2 = null,
		aCh = null;

	function aNj() {
		for (var ai = c.cq; 0 <= ai; ai--) aCh[ai] = 0;
		for (ai = aJ.aK - 1; 0 <= ai; ai--) aCh[cD.c1[aJ.bX[ai]]] += y.aO[aJ.bX[ai]];
		aNe = !0
	}

	function aNh() {
		for (var aNq, aNo = 0, b7 = 0, cY = Math.floor(aS / 2), mj = Math.floor(nc / 2), aNp = 1.5 * Math.PI, ai = c.cq; 0 <= ai; ai--) b7 += aCh[ai], 0 === aCh[ai] && aNo++;
		if (aNe = !1, a2.clearRect(0, 0, aS, aS), 0 < b7)
			if (aNo === c.cq) {
				for (ai = c.cq; 0 <= ai; ai--)
					if (0 < aCh[ai]) {
						! function(ai, cY, mj) {
							a2.fillStyle = cD.bp[cD.c0[ai]], a2.beginPath(), a2.arc(cY, cY, mj, 0, 2 * Math.PI), a2.fill()
						}(ai, cY, mj);
						break
					}!
				function(cY) {
					var fontSize = cY / 3;
					a2.font = aa.ab.ac(1, fontSize), a2.fillStyle = v.w, a2.fillText("100%", cY, cY + .1 * fontSize)
				}(cY)
			} else {
				for (ai = 0; ai <= c.cq; ai++) 0 < aCh[ai] && (! function(ai, cY, mj, aNp, aNq) {
					a2.fillStyle = cD.bp[cD.c0[ai]], a2.beginPath(), a2.arc(cY, cY, mj, aNp, aNq), a2.lineTo(cY, cY), a2.fill()
				}(ai, cY, mj, aNp, aNq = aNp + 2 * Math.PI * aCh[ai] / b7), function(cY, mj, aNp, aNq) {
					var d0 = (aNq - aNp) / (2 * Math.PI),
						fontSize = +mj * Math.min(d0, .37);
					fontSize < 8 || (aNp = (aNp + aNq) / 2, aNq = Math.floor(100 * d0 + .5) + "%", mj *= .525 - Math.max(.6 * (d0 - .7), 0), a2.font = aa.ab.ac(1, fontSize), a2.fillStyle = v.w, a2.fillText(aNq, cY + Math.cos(aNp) * mj, cY +
						Math.cos(aNp + 1.5 * Math.PI) * mj))
				}(cY, mj, aNp, aNq), 0 !== ai && aNv(cY, mj, aNp), aNp = aNq);
				aNv(cY, mj, 1.5 * Math.PI)
			}!
		function(cY, mj) {
			a2.beginPath(), a2.arc(cY, cY, mj, 0, 2 * Math.PI), a2.stroke()
		}(cY, mj)
	}

	function aNv(cY, mj, aNx) {
		a2.beginPath(), a2.moveTo(cY, cY), a2.lineTo(cY + Math.cos(aNx) * mj, cY + Math.cos(aNx + 1.5 * Math.PI) * mj), a2.stroke()
	}
	this.b = function() {
		if (c.bJ) {
			yz = 0, aCh = new Uint32Array(c.cq + 1);
			for (var ai = c.cq; 0 <= ai; ai--) aCh[ai] = 0;
			for (ai = aJ.aK - 1; 0 <= ai; ai--) aCh[cD.c1[aJ.bX[ai]]] += 1;
			this.resize()
		} else aCh = a2 = canvas = null
	}, this.aNg = function() {
		return aS
	}, this.resize = function() {
		c.bJ && (aS = Math.floor(.95 * (aT.aU.aV() && !c.gG ? .18 * aW.min : .13 * aW.aX)), aS = (aS *= 1 + (.5 + .2 * aT.aU.aV()) * c.gG) + aS % 2, gap = Math.max(1, .015 * aS), nc = Math.floor(aS - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = aS, canvas.height = aS, (a2 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, a2.strokeStyle = v.w, aa.ab.textAlign(a2, 1), aa.ab.textBaseline(a2, 1), aNh())
	}, this.bL = function(aNi) {
		aNi && aNj();
		var av, aNi = this.y9();
		return cD.c0[aNi] || (aNi = function() {
			for (var y8 = -1, ai = c.cq; 1 <= ai; ai--)(-1 === y8 || aCh[ai] > aCh[y8]) && (y8 = ai);
			return y8
		}(), av = y.aO[bM[0]], -1 !== aNi && aCh[aNi] > av) ? aCh[aNi] : av
	}, this.aNl = function() {
		return yz = 31, this.b8(), this.y9()
	}, this.y9 = function() {
		for (var y8 = 0, ai = c.cq; 0 < ai; ai--) aCh[ai] > aCh[y8] && (y8 = ai);
		return y8
	}, this.pL = function(a0N) {
		for (var cW = 0, bX = aJ.bX, c1 = cD.c1, b7 = aJ.aK, pN = ij.pN, ai = 0; ai < b7; ai++) {
			var pG = bX[ai];
			c1[pG] === a0N && (pN[cW++] = pG)
		}
		ij.pM[0] = cW
	}, this.aNm = function(a0N) {
		for (var cW = 0, bX = aJ.bX, c1 = cD.c1, b7 = aJ.aK, pN = ij.pN, ai = 0; ai < b7; ai++) {
			var pG = bX[ai];
			c1[pG] !== a0N && (pN[cW++] = pG)
		}
		ij.pM[0] = cW
	}, this.aNn = function() {
		for (var cW = 0, ai = c.cq; 0 <= ai; ai--) cW += 0 < aCh[ai];
		return cW
	}, this.b8 = function() {
		c.bJ && 32 <= ++yz && (yz = 0, aNj())
	}, this.kQ = function() {
		c.bJ && aNe && aNh()
	}, this.bm = function() {
		c.bJ && (c.gG ? bn.drawImage(canvas, ak.gap, ak.gap) : bn.drawImage(canvas, ak.gap, aKq + 2 * ak.gap))
	}
}

function aNy() {
	this.aNz = function() {
		jX.kX(39), jX.mD(1, 0), jX.mD(6, 16), jZ.rs.aO0(), jZ.fH.send(0, jX.lf)
	}, this.aD3 = function(r9) {
		jX.kX(127), jX.mD(1, 0), jX.mD(6, 17), es.et.a9z(ep.buffer.data[105].value, 5), es.et.a9z(ep.buffer.data[106].value, 15), jZ.fH.send(r9, jX.lf)
	}, this.aO2 = function() {
		jX.kX(97), jX.mD(1, 0), jX.mD(6, 18), es.et.a9z(ep.buffer.data[110].value, 15), jZ.fH.send(0, jX.lf)
	}, this.a9Y = function(un) {
		var b7 = un.be.length;
		jX.kX(21 + 16 * b7), jX.mD(1, 0), jX.mD(6, 29), jX.mD(6, un.action), jX.mD(8, b7), hS.jk.vY(un.be), jZ.fH.send(0, jX.lf)
	}, this.a8x = function(wo, colors, aO3, rW) {
		vT.b(), vT.mD(1, 0), vT.mD(6, 16), vT.mD(20, Math.min(wo, 1e6));
		for (var ai = 0; ai < 11; ai++)
			for (var cy = 0; cy < 3; cy++) vT.mD(8, colors[ai][cy]);
		wo = vi.data.a2k(aO3.trim());
		vT.mD(8, -1 === wo ? 255 : wo), hS.jd.eV(rW.trim().substring(0, 180), 8, vT), jZ.fH.send(0, vT.vU())
	}, this.aO4 = function(data) {
		jX.kX(43), jX.mD(1, 0), jX.mD(6, 25), jX.mD(6, data.action), es.et.a9z(data.hT, 5), jZ.fH.send(0, jX.lf)
	}, this.mo = function(data) {
		jX.kX(75), jX.mD(1, 0), jX.mD(6, 27), jX.mD(6, data.action), es.et.a9z(data.hT, 5), jX.mF(32, data.value), jZ.fH.send(0, jX.lf)
	}
}

function fP() {
	this.aO5 = function(player) {
		for (var zq = bQ.fH.zq, mS = player << 3, ai = mS + bQ.fH.uU[player] - 1; mS <= ai; ai--) this.a0P(zq[ai])
	}, this.a0P = function(aO6) {
		var fH = bQ.fH,
			aO7 = fH.jO - 1,
			aO8 = fH.j6[aO6],
			aO9 = fH.tC[aO6],
			aOA = fH.iz[aO6];
		fH.jO = aO7, fH.j6[aO6] = fH.j6[aO7], fH.iz[aO6] = fH.iz[aO7], fH.zo[aO6] = fH.zo[aO7], fH.zg[aO6] = fH.zg[aO7], fH.tC[aO6] = fH.tC[aO7], fH.il[aO6] = fH.il[aO7], fH.it[aO6] = fH.it[aO7], fH.zp[aO6] = fH.zp[aO7], fH.jG[aO6] = fH.jG[aO7],
			fH.jI[aO6] = fH.jI[aO7], fH.zq[fH.j6[aO6]] = aO6,
			function(aNx) {
				var player = aNx >> 3,
					fH = bQ.fH,
					b7 = fH.uU[player] - 1,
					aOD = (player << 3) + b7;
				fH.uU[player] = b7, aOD !== aNx && (fH.zq[aNx] = fH.zq[aOD], fH.j6[fH.zq[aNx]] = aNx)
			}(aO8), bQ.fT.fT[ix.tB(fH.iz[aO6])][fH.tC[aO6]] = aO6, aO7 = ix.tB(aOA), aO8 = aO9, aO7 = bQ.fT.fT[aO7], fH = aO7.pop(), aO8 !== aO7.length && (aO7[aO8] = fH, bQ.fH.tC[fH] = aO8)
	}
}

function fm() {
	var aOF = [];
	this.b = function() {
		aOF = []
	}, this.jT = function() {
		return 65536 === aOF.length
	}, this.oc = function(aOG, aOH) {
		for (var fl = aOF, b7 = fl.length, ai = 0; ai < b7; ai++) {
			var pG = fl[ai];
			if (pG[0] === aOG && pG[pG.length - 1] === aOH) return ai
		}
		return -1
	}, this.jN = function(jF) {
		var aOI = new Uint32Array(jF.length);
		return aOI.set(jF), aOI.reverse()
	}, this.aCP = function(wU, wV) {
		var cW = wU.length - 1,
			aOJ = new Uint32Array(cW + wV.length);
		return aOJ.set(wU, 0), aOJ.set(wV, cW), aOJ
	}, this.aCU = function(wU, wV, aEg, ic, aOK) {
		aOK && (aEg = (wV = this.jN(wV)).length - aEg - 2);
		aOK = wV.subarray(aEg + 1 + (ic === wV[aEg + 1])), ic = new Uint32Array(wU.length + aOK.length);
		return ic.set(wU, 0), ic.set(aOK, wU.length), ic
	}, this.od = function(jF) {
		return aOF.push(jF), aOF.length - 1
	}, this.get = function(ai) {
		return aOF[ai]
	}, this.oX = function() {
		return aOF
	}, this.aOM = function(aOG, aOH) {
		return null
	}
}

function aON(title, vw, xB) {
	var eh, xC;
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), xC.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, xB = xB || [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	}, v.aIb)], eh = new eF(title, xB), xC = new xD(eh.eM, vw), aa.ab.textAlign(eh.eM.style, 1)
}

function aOO() {
	var aNQ = 0,
		aOP = 0,
		aOQ = 0,
		aOR = null,
		aOS = null;

	function aOV(ht, aOW, aOX) {
		var be = ht.username;
		return (be += "   " + hq.bR.hy(ht.hk, ht.hm, ht.hz)) + function(ht) {
			ht = ht.wo;
			if (ht < 1e3) return "   Gold: " + ht;
			if ((ht %= 1024) < 1e3) return "   Gold: " + ht + "k";
			return "   Gold: " + (ht - 999) + "M"
		}(ht) + ("   IP: " + hS.et.b3(ht.aOZ, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aOX ? aOP : aOU(ht, aOW)])
	}

	function aOU(ht, aOW) {
		return aOP = aOW || hq.hr.ho(ht.hT) ? 1 : 0
	}
	this.qv = 0, this.aOT = function() {
		!aNQ || aOP === aOU(aOS) && aOQ === aOS.wo || (aOQ = aOS.wo, aOR.show(-1, -1, aOV(aOS, 0, 1), 1, 1, aOS.color))
	}, this.r0 = function(cc, ht, aOW) {
		var n2 = cc.getBoundingClientRect();
		this.show(n2.left, n2.top, ht, 0, aOW), cc.addEventListener("mouseleave", function remove() {
			cc.removeEventListener("mouseleave", remove), hq.l0 && hq.l0.du(1)
		}), this.qv = aOW
	}, this.show = function(a3, a4, ht, aNU, aOW) {
		aOR = aOR || new aNO, aOQ = (aOS = ht).wo, aOR.show(a3, a4, aOV(ht, aOW), aNU, 0, aOS.color), aNQ = 1
	}, this.du = function(aNZ) {
		this.qv = 0, aOR && aOR.du(aNZ) && (aNQ = 0, aOS = null)
	}
}

function aJq() {
	this.aS = 0, this.aY = 0, this.nc = 0, this.nd = 0, this.aOa = 0, this.aOb = 0, this.ng = 0, this.dq = 0;
	var aOd = this.aOc = 0;
	this.aOe = 0, this.aOf = 0, this.aOg = 0, this.aOh = 0, this.f7 = 0, this.a9 = null, this.nG = !1, this.aOi = -1, this.aOj = !1, this.aOk = [0, 0], this.c7 = function() {
		this.a9 = [L(305), L(9, 0, "Balance"), L(8, 0, "Interest"), L(306)]
	}, this.b = function() {
		this.nG = !1, this.aOi = -1, this.aOj = !1, this.resize()
	}, this.resize = function() {
		this.aS = aW.aS < 1.369 * aW.aY ? aW.aS : 1.369 * aW.aY;
		var cS = aT.aU.aV() && aW.aS < aW.aY ? 1 : aT.aU.aV() ? .8 : aW.aS < aW.aY ? .65 : .59;
		this.aS = Math.floor(cS * this.aS), this.aS -= aT.aU.aV() && aW.aS < aW.aY ? 2 * ak.gap + 2 : 0, this.aY = Math.floor(this.aS / 1.369), this.aOh = Math.floor(this.aY / 150), this.aOh = Math.max(this.aOh, 1.5), this.nc = Math.floor(1 +
			.02 * this.aS), this.nd = Math.floor(1 + .04 * this.aS), this.ng = this.nd, aOd = Math.floor(.75 * this.ng), this.dq = Math.floor(1 + .075 * this.aS), this.aOe = Math.floor(1 + .1125 * this.aS), this.aOf = Math.floor(this.aS * (aT
			.aU.aV() ? .03 : .029)), this.aOf = Math.max(this.aOf, 4), this.aOg = Math.floor(.035 * this.aS), this.aOg = Math.max(this.aOg, 4), this.aOc = this.aY - 2 * this.ng - this.dq - this.aOe, this.nG && this.aOl()
	}, this.gF = function(gP, gQ) {
		var a62, a61;
		return !!this.nG && (a61 = gP, a62 = gQ, gP -= q.aN(aW.aS - this.aS, 2), gQ -= q.aN(aW.aY - this.aY, 2), gP < 0 || gQ < 0 || gP >= this.aS || gQ >= this.aY || gP >= this.aS - this.aOe && gQ < this.aOe ? -1 !== nK.gF(a61, a62) || nr.gF(
			a61, a62) || this.du() : gQ < this.aOe || (gQ < this.aY - this.dq ? (this.aOj = !0, this.aOi = (gP - 2 * this.nc - this.aOa) / this.aOb, 3 !== this.f7 && (bc.bj = !0)) : (a61 = (a61 = Math.floor(gP / (this.aS / this.a9
			.length))) < 0 ? 0 : a61 >= this.a9.length ? this.a9.length - 1 : a61) !== this.f7 && (this.f7 = a61, this.aOl(), bc.bj = !0)), !0)
	}, this.gK = function(gP, gQ) {
		return this.aOk[0] = gP, this.aOk[1] = gQ, !(!this.nG || !this.aOj || (gP -= q.aN(aW.aS - this.aS, 2), gQ = this.aOi, this.aOi = (gP - 2 * this.nc - this.aOa) / this.aOb, (0 <= this.aOi && this.aOi <= 1 || 0 <= gQ && gQ <= 1) && (bc
			.bj = !0), 0))
	}, this.a8Q = function() {
		this.aOj && (this.aOj = !1)
	}, this.nM = function() {
		this.nG ? this.du() : this.show()
	}, this.show = function() {
		pz.aBp < 2 || (this.nG = !0, this.aOl())
	}, this.du = function() {
		this.nG = !1, this.aOi = -1, bc.bj = !0
	}, this.aOl = function() {
		this.f7 < 2 ? this.aOa = a3B.measureText(aa.b1.b3(pz.max[this.f7]), aa.ab.ac(0, this.aOf)) : 2 === this.f7 && (this.aOa = a3B.measureText(aa.b1.b2(6, 2), aa.ab.ac(0, this.aOf))), this.aOb = this.aS - 2 * this.nc - this.aOa - this.nd
	}, this.kQ = function() {
		this.nG && this.aOl()
	}, this.bm = function() {
		this.nG && this.nS()
	}, this.nS = function() {
		var a3 = q.aN(aW.aS - this.aS, 2),
			a4 = q.aN(aW.aY - this.aY, 2);
		bn.setTransform(1, 0, 0, 1, a3, a4), bn.fillStyle = v.x, bn.fillRect(0, this.aOe, this.aS, this.aY - this.aOe), this.aOm(), this.aOn(), bn.strokeRect(0, 0, this.aS, this.aY), aa.ab.textAlign(bn, 2), bn.font = aa.ab.ac(0, this.aOf), 0 ===
			this.f7 ? this.aOo(pz.aBn, a3, a4) : 1 === this.f7 ? this.aOo(pz.aBo, a3, a4) : 2 === this.f7 ? this.aOp(a3, a4) : 3 === this.f7 && (this.aOq(a3, a4), this.aOr(a3, a4)), nK.o3(Math.floor(a3 + this.aS - .725 * this.aOe), Math.floor(
				a4 + .275 * this.aOe), Math.floor(.45 * this.aOe)), bn.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aOm = function() {
		var ai, av;
		for (bn.lineWidth = this.aOh, aa.ab.textBaseline(bn, 1), aa.ab.textAlign(bn, 1), bn.strokeStyle = v.w, bn.font = aa.ab.ac(1, this.aOg), av = this.aS / this.a9.length, bn.fillStyle = v.dl, bn.fillRect(this.f7 * av, this.aY - this.dq, av,
				this.dq), bn.fillStyle = v.w, bn.fillRect(0, this.aY - this.dq - .5 * this.aOh, this.aS, this.aOh), ai = 1; ai <= 3; ai++) bn.fillRect(ai * av, this.aY - this.dq, this.aOh, this.dq);
		for (ai = this.a9.length - 1; 0 <= ai; ai--) bn.fillText(aa.a2.aj(this.a9[ai], 0, .9 * av), (ai + .5) * av, this.aY - .46 * this.dq)
	}, this.aOn = function() {
		bn.fillStyle = v.aOs, bn.fillRect(0, 0, this.aS, this.aOe), bn.fillStyle = v.w, bn.fillRect(0, this.aOe - .5 * this.aOh, this.aS, this.aOh), bn.font = aa.ab.ac(1, .39 * this.aOe), bn.fillText(aa.a2.aj(L(307), 0, .8 * this.aS), Math.floor(
			this.aS / 2), Math.floor(.55 * this.aOe))
	}, this.aOo = function(ce, a3, a4) {
		var b6 = pz.max[this.f7],
			gc = (bn.setTransform(1, 0, 0, 1, a3 + 2 * this.nc + this.aOa, a4 + this.ng + this.aOe), bn.lineWidth = 2, this.aOc / Math.sqrt(b6));
		bn.beginPath(), bn.moveTo(this.aOb, this.aOc - gc * Math.sqrt(ce[pz.aBp - 1]));
		for (var ai = pz.aBp - 2; 0 <= ai; ai--) bn.lineTo(ai * this.aOb / (pz.aBp - 1), this.aOc - gc * Math.sqrt(ce[ai]));
		bn.stroke();
		a3 = this.o3(ce, gc, .5);
		a3 < .95 && bn.fillText(aa.b1.b3(b6), -this.nc, 0), .05 < Math.abs(a3 - .5) && bn.fillText(aa.b1.b3(Math.floor(b6 / 4)), -this.nc, Math.floor(this.aOc / 2)), .05 < a3 && bn.fillText("0", -this.nc, this.aOc)
	}, this.aOp = function(a3, a4) {
		bn.setTransform(1, 0, 0, 1, a3 + 2 * this.nc + this.aOa, a4 + this.ng + this.aOe), bn.lineWidth = 2;
		var gc = this.aOc / Math.max(pz.max[this.f7], 1);
		bn.beginPath(), bn.moveTo(this.aOb, this.aOc - gc * pz.ba[pz.aBp - 1]);
		for (var ai = pz.aBp - 2; 0 <= ai; ai--) bn.lineTo(ai * this.aOb / (pz.aBp - 1), this.aOc - gc * pz.ba[ai]);
		bn.stroke();
		a3 = this.o3(pz.ba, gc, 1), a4 = pz.max[this.f7] / 100;
		a3 < .95 && bn.fillText(aa.b1.b2(a4, 2), -this.nc, 0), .05 < Math.abs(a3 - .5) && bn.fillText(aa.b1.b2(a4 / 2, 2), -this.nc, Math.floor(this.aOc / 2)), .05 < a3 && bn.fillText(aa.b1.b2(0, 2), -this.nc, this.aOc)
	}, this.aOq = function(a3, a4) {
		bn.setTransform(1, 0, 0, 1, a3 + .34 * this.aS, a4 + 2 * aOd + this.aOe), aa.ab.textAlign(bn, 2);
		for (var aLZ = this.aY - 4 * aOd - this.dq - this.aOe, ce = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], ai = 9; 0 <= ai; ai--) bn.fillText(aa.a2.aj(pz.aBt[ce[ai]], 0, .31 * this.aS), 0, ai * aLZ / 9);
		var d0 = pz.qH;
		for (bn.setTransform(1, 0, 0, 1, a3 + .39 * this.aS, a4 + 2 * aOd + this.aOe), aa.ab.textAlign(bn, 0), bn.fillText(aa.b1.b2(100 * d0[0] / (1024 * Math.max(d0[1], 1)), 1), 0, 0), ai = 8; 1 <= ai; ai--) bn.fillText(d0[ce[ai]].toString(), 0,
			ai * aLZ / 9);
		bn.fillText(aa.b1.b2(100 * (1 - y.aO[c.t] / d0[7]), 0), 0, aLZ)
	}, this.aOr = function(a3, a4) {
		bn.setTransform(1, 0, 0, 1, a3 + .79 * this.aS, a4 + 2 * aOd + this.aOe), aa.ab.textAlign(bn, 2);
		var ai, aLZ = this.aY - 4 * aOd - this.dq - this.aOe;
		for (bn.fillStyle = v.aOt, ai = 2; 0 <= ai; ai--) bn.fillText(aa.a2.aj(pz.aBt[ai + 8], 0, .31 * this.aS), 0, ai * aLZ / 9);
		bn.fillText(aa.a2.aj(pz.aBt[18], 0, .31 * this.aS), 0, 3 * aLZ / 9), bn.fillStyle = v.aOu, bn.fillText(aa.a2.aj(pz.aBt[11], 0, .31 * this.aS), 0, 4 * aLZ / 9), bn.fillStyle = v.aOv, bn.fillText(aa.a2.aj(pz.aBt[13], 0, .31 * this.aS), 0,
				5 * aLZ / 9), bn.fillText(aa.a2.aj(pz.aBt[15], 0, .31 * this.aS), 0, 6 * aLZ / 9), bn.fillText(aa.a2.aj(pz.aBt[16], 0, .31 * this.aS), 0, 7 * aLZ / 9), bn.fillText(aa.a2.aj(pz.aBt[12], 0, .31 * this.aS), 0, 8 * aLZ / 9), bn
			.fillStyle = v.aOw, bn.fillText(aa.a2.aj(pz.aBt[17], 0, .31 * this.aS), 0, aLZ), bn.fillStyle = v.aOt;
		var d0 = pz.qH,
			aHY = d0[8] + d0[9] + d0[10] + d0[18],
			aHY = aa.b1.b3(aHY),
			a7r = bn.measureText(aHY).width,
			a3 = (bn.setTransform(1, 0, 0, 1, a3 + .83 * this.aS + a7r, a4 + 2 * aOd + this.aOe), bn.fillText(aa.b1.b3(d0[8]), 0, 0), bn.fillText(aa.b1.b3(d0[9]), 0, aLZ / 9), bn.fillText(aa.b1.b3(d0[10]), 0, 2 * aLZ / 9), bn.fillText(aa.b1.b3(
				d0[18]), 0, 3 * aLZ / 9), bn.fillStyle = v.aOu, bn.fillText(aHY, 0, 4 * aLZ / 9), bn.fillStyle = v.aOv, bn.fillText(aa.b1.b3(d0[13]), 0, 5 * aLZ / 9), bn.fillText(aa.b1.b3(d0[15]), 0, 6 * aLZ / 9), bn.fillText(aa.b1.b3(d0[
				16]), 0, 7 * aLZ / 9), bn.fillText(aa.b1.b3(d0[12]), 0, 8 * aLZ / 9), d0[12] + d0[13] + d0[15] + d0[16]);
		bn.fillStyle = v.aOw, bn.fillText(aa.b1.b3(a3), 0, aLZ), bn.fillStyle = v.w
	}, this.o3 = function(ce, gc, aOy) {
		var ai, cc, d2;
		return this.aOi < 0 || 1 < this.aOi ? .25 : (ai = this.aOi * (pz.aBp - 1), d2 = ce[cc = Math.floor(ai)], d2 += (ai - cc) * (ce[cc < pz.aBp - 1 ? cc + 1 : cc] - d2), bn.strokeStyle = v.aOz, .04 < this.aOi && this.aP0(0, this.aOc - gc *
				Math.pow(d2, aOy), ai * this.aOb / (pz.aBp - 1), this.aOc - gc * Math.pow(d2, aOy)), .04 < d2 / pz.max[this.f7] && this.aP0(ai * this.aOb / (pz.aBp - 1), this.aOc, ai * this.aOb / (pz.aBp - 1), this.aOc - gc * Math.pow(d2,
				aOy)), bn.fillStyle = v.aP1, bn.beginPath(), bn.arc(ai * this.aOb / (pz.aBp - 1), this.aOc - gc * Math.pow(d2, aOy), Math.max(2, .014 * this.aY), 0, 2 * Math.PI), bn.fill(), ce = this.aOi * bc.bd, ce = 0 === y.an[c.t] ? Math
			.floor(ce * pz.aBs) : Math.floor(ce * bc.ql()), bn.fillStyle = v.w, bn.fillText(1 === aOy ? aa.b1.b2(d2 / 100, 2) : aa.b1.b3(Math.floor(d2)), -this.nc, this.aOc - gc * Math.pow(d2, aOy)), aa.ab.textAlign(bn, 1), bn.fillText(at.b4(
				ce), ai * this.aOb / (pz.aBp - 1), this.aOc + this.aOf - (aT.aU.aV() ? 2 : 0) - this.aOh), aa.ab.textAlign(bn, 2), gc * Math.pow(d2, aOy) / this.aOc)
	}, this.aP0 = function(ne, nf, aDg, aDh) {
		bn.beginPath(), bn.moveTo(ne, nf), bn.lineTo(aDg, aDh), bn.stroke()
	}
}

function aP2() {
	var aP3 = {
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
		aP4 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a6U = function(rW) {
		return rW.replace(aP4, function(match) {
			return aP3[match] || match
		})
	}, this.b3 = function(d0) {
		var ai, aNF, aP5, aP6, aP7;
		if (d0 < 0) return "-" + this.b3(Math.abs(d0));
		if (d0 < 1e3) return d0.toString();
		for (aNF = Math.floor(Math.log(d0 + .5) / Math.log(10)) + 1, aP5 = Math.floor((aNF - 1) / 3), aP7 = (aP6 = d0.toString()).substring(aNF - 3, aNF), ai = 1; ai < aP5; ai++) aP7 = aP6.substring(aNF - 3 * (ai + 1), aNF - 3 * ai) + " " + aP7;
		return aP6.substring(0, aNF - 3 * aP5) + " " + aP7
	}, this.b2 = function(pG, aNF) {
		return pG.toFixed(aNF) + "%"
	}, this.aP8 = function(d0, aP9) {
		return d0.toFixed(q.a0(Math.floor((void 0 === aP9 ? 3 : aP9) - Math.log10(Math.max(d0, 1))), 0, 8))
	}, this.aPA = function(d0, ch, aNF) {
		return (d0 * ch).toFixed(aNF)
	}, this.co = function(username) {
		var a1u, a1Q = username.indexOf("[");
		return !(a1Q < 0) && 1 < (a1u = username.indexOf("]")) - a1Q && a1u - a1Q <= 8 ? username.substring(a1Q + 1, a1u).toUpperCase().trim() : null
	}, this.aF9 = function(be) {
		for (var cy = Math.floor(.5 * be.length + .5), gJ = Math.floor(.5 * (cy - 1)), ai = 0; ai < gJ; ai++)
			for (var cT = -1; cT < 2; cT += 2) {
				var cY = cy + cT * ai;
				if (" " === be[cY]) return [this.aPB(be.substring(0, cY)), this.aPC(be.substring(cY))]
			}
		return [be.substring(0, cy), be.substring(cy)]
	}, this.aPC = function(be) {
		for (var b7 = be.length, ai = 0; ai < b7; ai++)
			if (" " !== be[ai]) return be.substring(ai);
		return be
	}, this.aPB = function(be) {
		for (var ai = be.length - 1; 0 <= ai; ai--)
			if (" " !== be[ai]) return be.substring(0, ai + 1);
		return be
	}, this.aPD = function(be, a9I) {
		return be.split("(")[0] + "(🧈 " + a9I.toFixed(2) + ")"
	}, this.startsWith = function(be, aPE) {
		return be.substring(0, aPE.length) === aPE
	}, this.kP = function(be, aPE) {
		var b7 = be.length;
		return be.substring(b7 - aPE.length, b7) === aPE
	}, this.x8 = function(ce, aPF, aPG) {
		var be = "",
			b7 = ce.length - 1;
		aPG = aPG || "";
		for (var ai = 0; ai < b7; ai++) be += aPG + ce[ai] + aPG + ",", (ai + 1) % aPF == 0 && (be += "\n");
		return be += aPG + ce[b7] + aPG
	}, this.a2y = function(be, cE, cF) {
		return be.replace(new RegExp(cE, "g"), cF)
	}
}

function aJX() {
	var aPH, ce;
	this.b = function() {
		for (var ai = (ce = new Uint16Array(101)).length - 1; 0 <= ai; ai--) ce[ai] = q.aN(32768 * ai, 100);
		this.uC(0)
	}, this.value = function(pG) {
		return ce[pG]
	}, this.aM7 = function() {
		return q.aN(aPH - 1, 2)
	}, this.uC = function(h0) {
		aPH = 2 * h0 % 32768 + 1
	}, this.random = function() {
		return aPH = 167 * aPH % 32768
	}, this.cO = function(ya) {
		return q.aN(ya * this.random(), 32768)
	}, this.aGy = function(pG) {
		return 0 !== pG && this.random() < this.value(pG)
	}, this.oD = function(cy, cT) {
		return cy + this.cO(cT - cy)
	}
}

function aJZ() {
	var aPI, aPJ, oS, aPK;
	this.b = function() {
		var ai, a3, a4, cR, aPL, aS, aY, a2, pV, h9, d0, pG, cQ, cy, fV;
		if (function() {
				if (oS = !0, aPK = "rgb(" + gW.u3[0] + "," + gW.u3[1] + "," + gW.u3[2] + ")", gW.uO(gW.kY)) return 1;
				return oS = !1, 0
			}()) aPJ = null;
		else {
			for (aPI = q.aN(96, 4), aPL = 1 === gW.kY ? (cR = 0, 160) : (cR = 128, 32), aPK = "rgb(" + cR + "," + cR + "," + cR + ")", aPJ = new Array(4), ai = 3; 0 <= ai; ai--) {
				if (aPJ[ai] = document.createElement("canvas"), aS = ai % 2 == 0 ? gW.gX : aPI, aY = ai % 2 == 0 ? aPI : gW.gY + 2 * aPI, aPJ[ai].width = aS, aPJ[ai].height = aY, h9 = (pV = (a2 = aPJ[ai].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aS, aY)).data, ai % 2 == 0)
					for (a4 = aPI - 1; 0 <= a4; a4--)
						for (d0 = aPL + Math.floor((a4 + 1) * (cR - aPL) / (aPI + 1)), a3 = aS - 1; 0 <= a3; a3--) h9[pG = 4 * ((0 === ai ? aPI - a4 - 1 : a4) * aS + a3)] = d0, h9[pG + 1] = d0, h9[pG + 2] = d0, h9[pG + 3] = 255;
				else {
					for (a3 = aPI - 1; 0 <= a3; a3--)
						for (d0 = aPL + Math.floor((a3 + 1) * (cR - aPL) / (aPI + 1)), a4 = aY - 1 - aPI; aPI <= a4; a4--) h9[pG = 4 * (a4 * aS + (3 === ai ? aPI - a3 - 1 : a3))] = d0, h9[pG + 1] = d0, h9[pG + 2] = d0, h9[pG + 3] = 255;
					for (cy = 1; 0 <= cy; cy--)
						for (a3 = aPI - 1; 0 <= a3; a3--)
							for (a4 = aPI - 1; 0 <= a4; a4--) cQ = (Math.pow(a3 * a3 + a4 * a4, .5) + 1) / (aPI + 1), d0 = aPL + Math.floor((1 < cQ ? 1 : cQ) * (cR - aPL)), h9[pG = 4 * ((0 === cy ? aPI - a4 - 1 : a4 + cy * (aY - aPI)) * aS + (
								1 === ai ? a3 : aPI - a3 - 1))] = d0, h9[pG + 1] = d0, h9[pG + 2] = d0, h9[pG + 3] = 255
				}
				a2.putImageData(pV, 0, 0)
			}
			fV = aPL, gW.u1.fillStyle = "rgb(" + fV + "," + fV + "," + fV + ")", gW.u1.fillRect(0, 0, gW.gX, 1), gW.u1.fillRect(0, gW.gY - 1, gW.gX, 1), gW.u1.fillRect(0, 0, 1, gW.gY), gW.u1.fillRect(gW.gX - 1, 0, 1, gW.gY)
		}
	}, this.ta = function() {
		var cy = oS ? 0 : -aPI;
		aPO(cy, cy, gW.gX - 2 * cy, gW.gY - 2 * cy, gZ.aPP, gZ.aPQ, gZ.aPR, gZ.aPS) || (bn.fillStyle = aPK, bn.fillRect(0, 0, aW.aS, aW.aY))
	}, this.bm = function() {
		oS || (aPT(0, -aPI, gW.gX, aPI, gZ.aPP, gZ.aPQ, gZ.aPR, gZ.aPS) && bn.drawImage(aPJ[0], gZ.aPU, gZ.aPV - aPI), aPT(gW.gX, -aPI, aPI, gW.gY + 2 * aPI, gZ.aPP, gZ.aPQ, gZ.aPR, gZ.aPS) && bn.drawImage(aPJ[1], gZ.aPU + gW.gX, gZ.aPV - aPI),
			aPT(0, gW.gY, gW.gX, aPI, gZ.aPP, gZ.aPQ, gZ.aPR, gZ.aPS) && bn.drawImage(aPJ[2], gZ.aPU, gZ.aPV + gW.gY), aPT(-aPI, -aPI, aPI, gW.gY + 2 * aPI, gZ.aPP, gZ.aPQ, gZ.aPR, gZ.aPS) && bn.drawImage(aPJ[3], gZ.aPU - aPI, gZ.aPV - aPI))
	}
}

function pB(cy, cT) {
	return 0 <= cy ? q.aN(cy, cT) : -q.aN(-cy, cT)
}

function aPW(d0) {
	return d0 * d0
}

function aF4(cy, cT) {
	return cT < cy ? cy : cT
}

function aI1(cy, cT) {
	return cy < cT ? cy : cT
}

function nR(cy, d0, cT) {
	return d0 < cy ? cy : cT < d0 ? cT : d0
}

function aPX(d0, b7) {
	for (var cY = q.aN(d0 + 1, 2), ai = 0; ai < b7; ai++) cY = q.aN(cY + q.aN(d0, cY), 2);
	return cY
}

function aPY(d0, b7) {
	return d0 < 1 ? 0 : aPX(d0, b7)
}

function aPT(ne, nf, nc, ng, aDg, aDh, nd, dq) {
	return !(ne + nc <= aDg || nf + ng <= aDh || aDg + nd <= ne || aDh + dq <= nf)
}

function aPO(ne, nf, nc, ng, aDg, aDh, nd, dq) {
	return ne <= aDg && nf <= aDh && aDg + nd <= ne + nc && aDh + dq <= nf + ng
}

function wJ(d0) {
	return Math.floor(!!d0 * (1 + Math.log2(d0 + .5)))
}

function aIK() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 !== c.data.sResourcesType && (c.data.sResourcesData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.sResourcesType && aa.kt.x4(x0.eZ(), c.data.sResourcesData, 2047)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(308), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(95), L(96), L(97)],
			value: c.data.sResourcesType
		}, function(f7) {
			x2(), 2 !== f7 || c.data.sResourcesData || (c.data.sResourcesData = new Uint16Array(c.c2)), c.data.sResourcesType = f7, dx.ej(28)
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2;
		1 === c.data.sResourcesType && ((f2 = new f3).f4("Value"), f2.f5(new f6({
			f7: -1,
			value: c.data.sResourcesValue
		}, 1, 0, function(cc) {
			var value = q.a0(Math.floor(cc.target.value), 0, 2047);
			cc.target.value = c.data.sResourcesValue = value
		})), ey.push(f2))
	}(ey), function(ey) {
		var f2;
		2 === c.data.sResourcesType && ((f2 = new f3).f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.sResourcesData, 2)), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function or() {
	this.xp = function(player) {
		aa.bY.aPZ(player) && e.u(80, L(309), 637, 0, v.aPa, v.x, -1, !1)
	}, this.xq = function(player) {
		aa.bY.aPZ(player) && e.u(80, L(310), 637, 0, v.aPa, v.x, -1, !1)
	}
}

function aJS() {
	this.a2P = function() {
		var aPd;
		return !(aJ.aK < 3 || y.aO[bM[0]] >= c.aP >> 1) && (c.bJ ? 9 !== c.d && (aPd = ay.aPe(), !(2 * ay.aPg(bK.y9()) >= aPd)) : function() {
			if (8 === c.d) return !1;
			var aPd = ay.aPe();
			if (2 * y.ax[bM[0]] >= aPd) return !1;
			return !0
		}())
	}
}

function f6(r3, type, aPh, aPi) {
	var cc;
	this.cc = document.createElement("input"), (cc = this.cc).type = type ? "number" : "text", cc.id = "input" + dx.fH.aPj++, cc.value = r3.value, cc.style.width = "100%", cc.style.userSelect = "none", cc.style.outline = "none", cc.style.resize =
		"none", cc.style.border = "inherit", cc.style.font = "inherit", cc.style.color = v.w, cc.style.backgroundColor = v.gf, cc.style.fontSize = "1em", cc.style.padding = "0.1em 0.2em", cc.addEventListener("focus", function() {
			aW.a8V++
		}), cc.addEventListener("blur", function() {
			aW.a8V--, -1 !== r3.f7 && ep.eq.er(r3.f7, cc.value)
		}), cc.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== r3.f7 && ep.eq.er(r3.f7, cc.value), aPh ? aPh() : cc.blur())
		}), aPi && cc.addEventListener("input", function(ht) {
			aPi(ht)
		})
}

function aPk() {
	this.aPl = function(jb, mS, mT) {
		jX.kX(75), jX.mD(1, 0), jX.mD(6, 21), jX.mD(6, jb), jX.mD(1, +(mS < 0)), jX.mD(1, +(mT < 0)), jX.mD(30, Math.abs(mS)), jX.mD(30, Math.abs(mT)), jZ.fH.send(0, jX.lf)
	}, this.aPm = function(jb, w8, w9) {
		jX.kX(18 + 16 * w8.length + 30), jX.mD(1, 0), jX.mD(6, 22), jX.mD(6, jb), jZ.rs.vk(w8), jX.mD(30, w9), jZ.fH.send(0, jX.lf)
	}, this.aPn = function(jb, w8, w9) {
		jX.kX(73), jX.mD(1, 0), jX.mD(6, 28), jX.mD(6, jb), es.et.a9z(w8, 5), jX.mD(30, w9), jZ.fH.send(0, jX.lf)
	}, this.aPo = function(a7W, cm) {
		for (var b7 = cm.length, ji = 0, ai = 0; ai < b7; ai++) ji += cm[ai].length;
		for (jX.kX(21 + 3 * b7 + 16 * ji), jX.mD(1, 0), jX.mD(6, 23), jX.mD(3, a7W), jX.mD(4, b7), jX.mD(7, ji), ai = 0; ai < b7; ai++) jX.mD(3, cm[ai].length), hS.jk.vY(cm[ai]);
		jZ.fH.send(0, jX.lf)
	}, this.aPp = function(a7W, mS, mT) {
		jX.kX(52), jX.mD(1, 0), jX.mD(6, 24), jX.mD(3, a7W), jX.mD(1, +(mS < 0)), jX.mD(1, +(mT < 0)), jX.mD(20, Math.abs(mS)), jX.mD(20, Math.abs(mT)), jZ.fH.send(0, jX.lf)
	}
}

function aJK() {
	var a9j = 0;
	this.b = function() {
		aDM.b(), a9j = 0
	}, this.setState = function(aPq) {
		a9j = aPq
	}, this.tW = function() {
		return a9j
	}, this.qq = function() {
		this.setState(8), dx.eX()
	}, this.ed = function(cc) {
		if (!gW.u4) return !1;
		if (!(bc.iV < 400)) {
			if ("Enter" === cc.key || "Escape" === cc.key) {
				if (this.aPr()) return !0;
				if ("Enter" === cc.key) {
					if (0 === a9j) return !0;
					if (7 === a9j) return !0
				}
			}
			return !1
		}
	}, this.aHw = function() {
		aIz.resize()
	}, this.aPr = function() {
		return !!aIz.du()
	}, this.gF = function(a3, a4) {
		!gW.u4 || aIz.gF(a3, a4) || 6 === a9j && a8e.gF(a3, a4) || aHv.gF(a3, a4) || a4z.gF(a3, a4)
	}, this.gK = function(a3, a4) {
		!a4z.aPs && aDM.gK(a3, a4, !0) || a4z.gK(a3, a4)
	}, this.click = function(a3, a4) {
		a4z.a8Q()
	}, this.gH = function(a3, a4, deltaY) {}, this.aHx = function() {
		aDM.aDH(), bc.bj = !0
	}, this.bm = function() {
		8 !== a9j && 10 !== a9j && (bn.imageSmoothingEnabled = !0, this.ta(), 0 !== a9j && (a4z.bm(), a6n.bm(), this.aPt(), aHv.bm()), 0 !== a9j && 6 === a9j && a8e.bm(), aIz.bm(), dx.bm())
	}, this.ta = function() {
		var aPv, aPu;
		gW.u4 ? (aPu = aW.aS / gW.gX, aPv = aW.aY / gW.gY, bn.setTransform(aPu = aPv < aPu ? aPu : aPv, 0, 0, aPu, Math.floor((aW.aS - aPu * gW.gX) / 2), Math.floor((aW.aY - aPu * gW.gY) / 2)), bn.drawImage(gW.u0, 0, 0), bn.setTransform(1, 0, 0,
			1, 0, 0), bn.fillStyle = v.a6T) : bn.fillStyle = v.bs, bn.fillRect(0, 0, aW.aS, aW.aY)
	}, this.aPt = function() {
		var a4 = Math.floor(.3 * aW.aY),
			canvas = np.tc("territorial.io"),
			aGZ = (aGZ = 1.75 * aW.aY / canvas.width) * canvas.width < .98 * aW.aS ? .98 * aW.aS / canvas.width : aGZ,
			a3 = (bn.globalAlpha = .15, bn.imageSmoothingEnabled = !1, Math.floor(.5 * (aW.aS - aGZ * canvas.width))),
			a3 = Math.floor(a3 / aGZ),
			a4 = Math.floor(a4 - .5 * canvas.height * aGZ),
			a4 = Math.floor(a4 / aGZ);
		bn.setTransform(aGZ, 0, 0, aGZ, a3, a4), bn.drawImage(canvas, a3, a4), bn.setTransform(1, 0, 0, 1, 0, 0), bn.globalAlpha = 1, bn.imageSmoothingEnabled = !0
	}
}

function aJm() {
	this.aD1 = new aDO, this.yu = new aBc, this.vM = new aAa
}

function sY() {
	aIv.ta(), bn.setTransform(fu, 0, 0, fu, 0, 0), bn.imageSmoothingEnabled = fu < 3, bn.drawImage(gW.u0, gd.g7(), gd.g8()), sI.fQ.bm(), bn.drawImage(xx, gd.g7(), gd.g8()), aIv.bm(), bQ.bm(), gN.bm(), (c.gG ? (bK.bm(), nr) : (e.bm(), bi.bm(), nl
	.bm(), nr.bm(), yI.bm(), at.bm(), gd.bm(), a3B.bm(), bK.bm(), ag.bm(), a1F.bm(), nK.bm(), sK.bm(), sF.bm(), nw.bm(), sE)).bm(), dx.bm()
}

function a2D(a2, aS, aY) {
	a2.clearRect(0, 0, aS, aY), a2.fillStyle = v.x, a2.fillRect(0, 0, aS, aY)
}

function a2F(a2, aS, aY, a2I) {
	a2.fillStyle = v.w, a2.fillRect(0, 0, aS, a2I), a2.fillRect(0, 0, a2I, aY), a2.fillRect(aS - a2I, 0, a2I, aY), a2.fillRect(0, aY - a2I, aS, a2I)
}

function gg(a2, a3, a4, pS, a2I, pG, aPw) {
	a2.fillStyle = v.w;
	var pG = Math.floor(pS * pG),
		nd = (pG += (pG - a2I) % 2, Math.floor((pG - a2I) / 2)),
		pS = Math.floor((pS - pG) / 2);
	a2.fillRect(a3 + pS, a4 + pS + nd, pG, a2I), aPw && a2.fillRect(a3 + pS + nd, a4 + pS, a2I, pG)
}

function a3I() {
	this.sU = 0, this.b8 = function() {
		a6n.b8(), a8e.b8(), aW.b8(), jZ.fH.b8(), a4h.tZ(), vo.vq.b8(), bc.bj && (bc.bj = !1, qp.bm())
	}
}

function aPy() {
	this.aj = function(be, font, maxWidth) {
		if (font && (bn.font = font), bn.measureText(be).width <= maxWidth) return be;
		for (var ai = be.length - 1; 1 <= ai; ai--)
			if (be = be.substring(0, ai), bn.measureText(be + "...").width <= maxWidth) return be + "...";
		return "..."
	}
}

function aJi() {
	function aQ1(key) {
		var eN;
		return "undefined" == typeof URLSearchParams || (eN = window.location.search, "string" != typeof(eN = new URLSearchParams(eN).get(key))) || eN.length < 1 ? null : eN
	}
	this.aJz = function() {
		if (0 !== aT.id) return !1;
		if (! function() {
				var value = aQ1("account");
				if (!value && !(value = aQ1("a"))) return void aIx.clear();
				return aIx.clear(), dx.ej(8, dx.jf, new ex(1e3, {
					action: 0,
					hT: value,
					mh: 0
				})), 1
			}()) {
			var value = aQ1("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			dx.ej(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aIZ = new URL(window.location.href);
		aIZ.search = "";
		try {
			return history.replaceState(null, "", aIZ.toString()), !0
		} catch (cc) {
			console.log("error 352: " + cc)
		}
		return !1
	}, this.aQ3 = function(key, value) {
		if (0 === aT.id) try {
			var aIZ = new URL(window.location.href),
				pG = aIZ.searchParams;
			pG.set(key, value), aIZ.search = pG.toString(), history.replaceState(null, "", aIZ.toString())
		} catch (cc) {
			console.log("error 358: " + cc)
		}
	}
}

function aQ4() {
	var aQ5 = new Uint16Array(c.c2);

	function aQD(player, aQB) {
		for (var b7 = ij.pM[0], aEB = ij.aEB, pW = -1, cf = c.c2, ai = 0; ai < b7; ai++) {
			var cQ, pG = aEB[ai];
			a0f.a1W(player, pG) && (cQ = ix.a3W(aQB, ix.a3k(pG)), -1 === pW || cQ < pW) && (pW = cQ, cf = pG)
		}
		return cf
	}

	function aQF(aQC, aQB) {
		if (aQC === c.c2) return 0;
		var uW = y.uW[aQC],
			b6 = uW.length;
		if (0 === b6) return 0;
		for (var b7 = Math.min(b6, 10), cf = 0, pW = ix.a3W(uW[cf] >> 2, aQB), ai = 0; ai < b7; ai++) {
			var ca = cN.cO(b6),
				cQ = ix.a3W(uW[ca] >> 2, aQB);
			cQ < pW && (pW = cQ, cf = ca)
		}
		return uW[cf] >> 2
	}

	function aQH(player, aQB, pn, aQK) {
		var aQL;
		(aQK === c.c2 || (aQL = ix.a3k(pn), aQK = ix.a3k(aQK), ix.a3W(aQB, aQL) < ix.a3W(aQB, aQK))) && (aQ5[player] = pn)
	}
	this.b = function() {
		aQ5.fill(c.c2)
	}, this.aQ6 = function() {
		if (bc.ql() % 109 == 9 && !(aJ.aK < 20) && c.bJ && !(bK.bL() < q.aN(8 * c.aP, 10))) {
			var y8 = bK.y9();
			if (cD.c0[y8]) {
				bK.aNm(y8);
				var b7 = ij.pM[0];
				if (0 !== b7)
					for (var ce = ij.pN, bX = aJ.bX, aK = aJ.aK, aQ7 = aQ5, ca = cN.cO(b7), ai = 0; ai < aK; ai++) {
						var wU = bX[ai],
							wV = ce[ca];
						aa.bY.j5(wU, wV) && 512 === aQ7[wU] && (aQ7[wU] = wV, ca = (ca + 1) % b7)
					}
			}
		}
	}, this.b8 = function(player) {
		var aQB, aQE, aQC, aQ8 = function(player) {
			var pn = aQ5[player];
			if (pn !== c.c2) {
				if (aa.bY.yb(pn) && y.uW[pn]) return pn;
				aQ5[player] = c.c2
			}
			return c.c2
		}(player);
		return function(player) {
			for (var aMk = aJ.bX, b6 = aJ.aK, b7 = Math.min(b6, b6 < 17 && 5 === cN.cO(20) ? 1 : 16), iY = cN.cO(b6), aEB = ij.aEB, uW = y.uW, cW = 0, ai = 0; ai < b7; ai++) {
				var pG = aMk[(ai + iY) % b6];
				pG !== player && uW[pG].length && (aEB[cW++] = pG)
			}
			ij.pM[0] = cW
		}(player), 0 !== ij.pM[0] && (0 < (aQE = aQF(aQC = aQD(player, aQB = ix.a3l(player)), aQB)) && bQ.fb.o7(player, bQ.bR.aQG(aQE, aQB)) ? (aQH(player, aQB, aQC, aQ8), !0) : 0 < (aQC = function(player, aQB) {
			for (var b7 = ij.pM[0], aEB = ij.aEB, aQ7 = aQ5, iY = 0, ai = 0; ai < b7; ai++) {
				var pG = aEB[ai],
					pG = aQ7[pG];
				pG !== c.c2 && aa.bY.yb(pG) && player !== pG && a0f.a1W(player, pG) && (aEB[iY++] = pG)
			}
			return 0 !== (ij.pM[0] = iY) ? aQF(aQD(player, aQB), aQB) : 0
		}(player, aQB)) && bQ.fb.o7(player, bQ.bR.aQG(aQC, aQB)) ? (aQH(player, aQB, j1.zZ(aQC << 2), aQ8), !0) : !!(0 < (aQE = aQF(aQ8, aQB)) && bQ.fb.o7(player, bQ.bR.aQG(aQE, aQB))))
	}
}

function aJy() {
	var gap, a9, a3 = [0, 0, 0, 0, 0],
		a4 = [0, 0, 0, 0, 0],
		ch = [1, 1, 1, 1, 1],
		d0 = [!0, !0, !0, !1, !1],
		cY = (this.d4 = [!0, !0, !0, !1, !1], null);
	this.z5 = function(pT, aQN) {
		cY = pT, d0 = aQN, a9 = [aFw.lA, aFw.lB, aFw.lC, aFw.lC, aFw.lD], this.b()
	}, this.b = function() {
		if (np.a45()) {
			var ai, nc = Math.floor((aT.aU.aV() ? .261 : .195) * aW.aX),
				nd = Math.floor(.9 * nc),
				ng = Math.floor(.17 * nd);
			if (gap = aT.aU.aV() ? 2 * ak.gap : ak.gap, ch[0] = nc / cY[0].width, ch[1] = nd / cY[1].width, ch[2] = ng / cY[2].height, ch[3] = ng / cY[3].height, ch[4] = ng / cY[4].height, ch[2] *= 1.7, ch[3] *= 1.07, a3[0] = gap, a3[1] = gap,
				a3[2] = gap, a3[3] = gap, a3[4] = Math.floor(2 * gap + ch[3] * cY[3].width), a4[0] = gap, a4[1] = a4[0] + gap + ch[0] * cY[0].height, a4[2] = a4[1] + gap + ch[1] * cY[1].height, a4[3] = a4[2] + gap + ch[2] * cY[2].height, a4[4] =
				a4[3], !d0[0])
				for (ai = 0; ai < 5; ai++) a4[ai] -= ch[0] * cY[0].height + gap;
			if (!d0[1])
				for (ai = 2; ai < 5; ai++) a4[ai] -= ch[1] * cY[1].height + gap
		}
	}, this.nG = function() {
		return !(7 === qp.tW() && aT.aU.aV())
	}, this.gF = function(gB, gE) {
		if (cY && this.nG())
			for (var ai = d0.length - 1; 0 <= ai; ai--)
				if (d0[ai] && this.d4[ai] && a3[ai] < gB && a4[ai] < gE && gB < a3[ai] + ch[ai] * cY[ai].width && gE < a4[ai] + ch[ai] * cY[ai].height) return dx.ej(9, dx.jf, new aON(L(311), aa.ab.aQO(a9[ai]))), !0;
		return !1
	}, this.bm = function() {
		if (cY && this.nG()) {
			var ai;
			for (bn.imageSmoothingEnabled = !0, ai = 0; ai < 5; ai++) d0[ai] && this.d4[ai] && (bn.setTransform(ch[ai], 0, 0, ch[ai], a3[ai], a4[ai]), bn.drawImage(cY[ai], 0, 0));
			bn.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aJk() {
	this.fH = new yx, this.fQ = new aQP, this.b = function() {
		this.fH.b()
	}, this.b8 = function() {
		0 !== this.fH.yz && this.fH.yz--
	}
}

function aIB(data) {
	var eh, ei;

	function aQR(ey, aR8) {
		if (!data.aQQ) {
			if (data.aR0) {
				if (aR8) return
			} else {
				if (!aR8) return;
				if (data.wo < 1e4) return
			}
			var aRB, f2 = new f3,
				aR9 = 1e5 <= data.wo,
				aRA = f2.f4(aR8 ? (aR9 ? "⚠️ " : "") + L(396) : L(150)),
				a9X = (aR9 && (aRA.style.color = "yellow"), aR8 ? f2.fA(L(397, [aa.b1.aPA(data.wo, .01, 0)])) : ((aRB = new f6({
					value: data.aRC,
					f7: -1
				})).cc.readOnly = !0, aRB.cc.type = "password", f2.f5(aRB), f2.f5(new f9([new eG(L(32), function(cc) {
					return cc.textContent === L(32) ? (cc.textContent = L(33), aRB.cc.type = "text") : (cc.textContent = L(32), aRB.cc.type = "password"), !0
				}).button, new eG(L(333), function(cc) {
					return aa.ab.aQl(aRB.cc), aa.ab.xO(cc), !0
				}).button]))), f2.vv(L(aR8 ? 150 : 398)).style.marginTop = "0.75em", new f6({
					value: "",
					f7: -1
				}, 0, 0)),
				aRD = (a9X.cc.type = "email", a9X.cc.autocomplete = "email", a9X.cc.name = "email", a9X.cc.inputMode = "email", a9X.cc.spellcheck = !1, f2.f5(a9X), f2.f5(new f9([new eG(L(399), function(cc) {
					return jZ.mn.a9Y({
						action: 3,
						be: a9X.cc.value.trim().substring(0, 63)
					}), aa.ab.xO(cc), !0
				}).button])), aR8 && f2.fA(L(400)), f2.vv(L(401)).style.marginTop = "0.75em", new f6({
					value: "",
					f7: -1
				}, 1));
			f2.f5(aRD), f2.f5(new f9([new eG(L(402), function() {
				jZ.mn.mo({
					action: 4,
					hT: "",
					value: Math.floor(+aRD.cc.value)
				}), dx.ej(8, dx.jg().el, new ex(18))
			}).button])), ey.push(f2)
		}
	}
	this.show = function() {
		data.aQQ && aIx.aQ3("account", data.hT), eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), ei.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(data.username, [new eG("⬅️ " + L(22), function() {
		aIx.clear(), dx.mQ()
	}), new eG(data.aQQ ? "🔄 " + L(312) : L(313), function() {
		dx.ej(8, data.aQQ ? dx.jg().el : void 0, new ex(25, {
			action: 0,
			hT: data.hT,
			mh: data.mh
		}))
	}, 0, 0, 1)]), ei = new en(eh.eM, function() {
		var ey = [];
		aQR(ey, 1), ey.push(function() {
				var f2 = new f3;
				f2.f4(L(369)), data.aR0 && (f2.vv("✅ " + L(370)).style.marginBottom = "0.75em");
				var hV = data.aR1;
				hV < 1 ? (f2.vv(L(371)), 0 === data.aR2 ? f2.fA(L(372)) : 1 === data.aR2 ? f2.fA(L(373)) : 2 === data.aR2 ? f2.fA(L(374)) : 3 === data.aR2 ? f2.fA(L(375)) : 4 === data.aR2 ? f2.fA(L(376)) : 5 === data.aR2 ? f2.fA(L(377)) :
					6 === data.aR2 ? f2.fA(L(378)) : f2.fA(L(379))) : (f2.vv(L(380)), hV = hV < 2 ? L(381) : hV < 61 ? 2 === hV ? L(382) : L(383, [hV - 1]) : hV < 84 ? 61 === hV ? L(384) : L(385, [hV - 60]) : hV < 255 ? 84 === hV ? L(
					386) : L(387, [hV - 83]) : L(388), f2.fA(hV));
				{
					var vs, xJ;
					f2.f5(new fB), data.aQQ && (vs = f2.fA(), f2.f5(new f9([new eG(ep.fJ.qz(data.hT) ? L(389) : L(390), function(cc) {
						return ep.fJ.aGd(data.hT) ? (cc.textContent = L(389), xJ(1)) : (cc.textContent = L(390), xJ(0)), !0
					}).button])), xJ = function(d0) {
						vs.textContent = d0 ? L(391) : ""
					}, ep.fJ.qz(data.hT) && xJ(1), f2.f5(new fB))
				}
				var a51, kF = new f6({
					value: data.username,
					f7: -1
				});
				kF.cc.readOnly = !0, f2.f5(kF), f2.f5(new f9([new eG(L(333), function(cc) {
					return aa.ab.aQl(kF.cc), aa.ab.xO(cc), !0
				}).button])), data.aQQ || f2.fA(L(392));
				(data.aR3 || data.aR4 || data.aR5) && (f2.f5(new fB), f2.fA(L(393)), data.aR3 && (f2.fA("• Account Timeout").style.color = "orange"), data.aR4 && ((a51 = f2.fA("• Muted")).style.color = "orange", a51.style.marginTop =
					"0.5em"), data.aR5) && ((a51 = f2.fA("• Redacted")).style.color = "orange", a51.style.marginTop = "0.5em");
				data.aQQ && (f2.f5(new fB), f2.vv(jZ.fH.xG("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", f2.f5(new f9([new eG(L(394), function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 0
					}), aa.ab.xO(cc), !0
				}, v.aIb).button])), f2.f5(new f9([new eG(L(395), function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 1
					}), aa.ab.xO(cc), !0
				}, v.aIb).button])), f2.f5(new f9([new eG("Cheater", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 2
					}), aa.ab.xO(cc), !0
				}, v.aIb).button])), f2.f5(new f9([new eG("False Reporter", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 3
					}), aa.ab.xO(cc), !0
				}, v.aIb).button])), hV = "CRTOR" === (hV = ep.buffer.data[105].value) || "ADMIN" === hV) && (f2.f5(new f9([new eG("Block Account", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 4
					}), aa.ab.xO(cc), !0
				}, v.a3v).button])), f2.f5(new f9([new eG("Ban IP", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 5
					}), aa.ab.xO(cc), !0
				}, v.a3v).button])), f2.f5(new f9([new eG("Gold Seizure", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 6
					}), aa.ab.xO(cc), !0
				}, v.a3v).button])), f2.f5(new f9([new eG("Remove Punishments", function(cc) {
					return jZ.mn.mo({
						action: 3,
						hT: data.hT,
						value: 7
					}), aa.ab.xO(cc), !0
				}, v.aR7).button])));
				return f2
			}()),
			function(ey) {
				var f2, vs, a6u, a8s, xN, w3, xL;
				data.aQQ || ((f2 = new f3).f4(L(403)), (vs = f2.fA(data.aRE.length + " / 160")).style.textAlign = "center", a6u = !0, (a8s = new eL(0, 1, function(cc) {
					cc = cc.target.value.length;
					vs.textContent = cc + " / 160", 160 < cc ? a6u && (a6u = !1, w3.iE(1)) : a6u || (a6u = !0, w3.iE(0))
				})).cc.rows = 6, a8s.cc.style.fontSize = "1em", a8s.eP(data.aRE), f2.f5(a8s), 0 !== data.aRF ? (w3 = new eG(L(404), function() {
					if (!a6u) return !0;
					dx.ej(8, dx.jg().el, new ex(29, {
						action: 1,
						be: a8s.eZ().substring(0, 160)
					}))
				}, 0, 0, 1), f2.f5(new f9([w3.button])), f2.f5(new f9([new eG(1 === data.aRF ? L(405) : L(406), function() {
					dx.ej(8, dx.jg().el, new ex(29, {
						action: 0,
						be: ""
					}))
				}, 0, 0, 1).button])), f2.fA(1 === data.aRF ? L(407, [data.aRG - 1]) : L(408, [data.aRG - 1])), f2.fA(L(409, [data.aRH]))) : (xN = new eG(L(410), function() {
					if (!a8s.cc.readOnly) return !0;
					dx.ej(8, dx.jg().el, new ex(29, {
						action: 1,
						be: a8s.eZ().substring(0, 160)
					}))
				}, 1), w3 = new eG(L(102), function(cc) {
					if (cc.textContent === L(102)) {
						if (!a6u) return !0;
						cc.textContent = L(103), a8s.cc.readOnly = !0, xN.iE(0), xN.button.style.color = v.hL
					} else xL();
					return !0
				}), f2.f5(new f9([w3.button])), f2.fA(L(409, [data.aRH])), xL = function() {
					w3.button.textContent = L(102), a8s.cc.readOnly = !1, xN.iE(1), xN.button.style.color = v.w
				}, f2.f5(new f9([xN.button]))), ey.push(f2))
			}(ey),
			function(ey) {
				var f2;
				data.aQQ && 0 !== data.aRF && ((f2 = new f3).f4(L(411)), f2.vt(data.aRE), f2.f5(new f9([new eG(L(412, 0, "Report"), function(cc) {
					return jZ.fH.lZ(0) && (aa.ab.xO(cc), jZ.mn.aO4({
						action: 5,
						hT: data.hT
					})), !0
				}, 0, 0, 1).button])), ey.push(f2))
			}(ey), ey.push(function() {
				var f2 = new f3,
					aQi = (f2.f4(L(314)), f2.vv(jZ.fH.xG("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(315), L(316), L(317), L(318), L(319), L(320), L(321), L(322), L(323), L(324), L(325), L(326), L(327), L(328)]),
					mj = data.aQj;
				return f2.vv(L(329) + aa.b1.aPA(data.wo, .01, 2) + "<br>" + L(330) + (mj + 1) + " / " + data.wn + "<br>" + L(331) + aQi[function(mj, wo) {
					if (mj < 10) return 0;
					if (mj < 30) return 1;
					if (mj < 60) return 2;
					if (3e4 <= (wo = q.aN(wo, 100))) return 3;
					if (12e3 <= wo) return 4;
					if (7e3 <= wo) return 5;
					if (3e3 <= wo) return 6;
					if (1e3 <= wo) return 7;
					if (500 <= wo) return 8;
					if (200 <= wo) return 9;
					if (70 <= wo) return 10;
					if (20 <= wo) return 11;
					if (3 <= wo) return 12;
					return 13
				}(mj, data.wo)]), f2
			}()), data.aQQ && ey.push(function() {
				var f2 = new f3,
					kF = (f2.f4(L(332)), f2.vv(jZ.fH.xG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new f6({
						value: ep.buffer.data[147].value,
						f7: -1
					}, 1, void 0, function(cc) {
						ep.eq.er(147, xJ(cc.target.value))
					})),
					xN = (f2.f5(kF), new eG(L(104), function(cc) {
						return kF.cc.readOnly && jZ.fH.lZ(0) && (aa.ab.xO(cc), xL(), jZ.mn.mo({
							action: 0,
							hT: data.hT,
							value: parseInt(ep.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					w3 = new eG(L(102), function(cc) {
						return cc.textContent === L(102) ? (cc.textContent = L(103), kF.cc.readOnly = !0, xN.iE(0), xN.button.style.color = v.hL, ep.eq.er(147, kF.cc.value), xJ(ep.buffer.data[147].value)) : xL(), !0
					}),
					vs = (f2.f5(new f9([w3.button])), f2.fA()),
					xJ = function(d0) {
						vs.innerHTML = dx.fH.xP(d0, ep.buffer.data[105].value, data.hT)
					},
					xL = function() {
						w3.button.textContent = L(102), kF.cc.readOnly = !1, xN.iE(1), xN.button.style.color = v.w
					};
				return xJ(ep.buffer.data[147].value), f2.f5(new f9([xN.button])), f2
			}());
		ey.push(function() {
			var f2 = new f3,
				kF = (f2.f4(L(30)), new f6({
					value: data.hT,
					f7: -1
				})),
				aQm = (kF.cc.readOnly = !0, f2.f5(kF), f2.f5(new f9([new eG(L(333), function(cc) {
					return aa.ab.aQl(kF.cc), aa.ab.xO(cc), !0
				}).button])), f2.f5(new fB), new f6({
					value: data.hT,
					f7: -1
				}));
			return f2.f5(aQm), f2.f5(new f9([new eG(L(334), function(cc) {
				dx.ej(8, dx.jg().el, new ex(25, {
					action: 0,
					hT: aQm.cc.value,
					mh: 0
				}))
			}).button])), f2
		}()), data.aQQ || (ey.push(function() {
			var f2 = new f3,
				f8 = (f2.f4(L(31)), new f6(ep.buffer.data[106]));
			return f8.cc.readOnly = !0, f8.cc.type = "password", f2.f5(f8), f2.f5(new f9([new eG(L(32), function(cc) {
				return cc.textContent === L(32) ? (cc.textContent = L(33), f8.cc.type = "text") : (cc.textContent = L(32), f8.cc.type = "password"), !0
			}).button, new eG(L(333), function(cc) {
				return aa.ab.aQl(f8.cc), aa.ab.xO(cc), !0
			}).button])), f2.f5(new f9([new eG(L(335), function() {
				dx.ej(8, dx.jg().el, new ex(15))
			}).button])), f2.f4(L(34), "0.8em"), f2.fA(L(336)), f2.fA(L(337)), f2.fA(L(338)), f2
		}()), ey.push(function() {
			var f2 = new f3;
			return f2.f4(L(339)), f2.f5(new f9([new eG(L(340), function() {
				dx.ej(6, dx.jg().el)
			}).button])), f2.f5(new f9([new eG(L(341), function() {
				ep.eq.er(105, ""), dx.ej(8, dx.jg().el, new ex(18))
			}).button])), f2.f5(new f9([new eG(L(342) + ep.buffer.data[105].value, function() {
				dx.ej(4, 0, new x9(L(343), L(344), !0, [new eG("⬅️ " + L(22), function() {
					dx.ej(7, dx.ek(7).el)
				})]))
			}, v.aIb).button])), f2
		}()), ey.push(function() {
			function aQo(f7) {
				aQn[0].iE(0 === f7 ? v.iN : v.a9q), aQn[1].iE(0 === f7 ? v.iN : v.aIb)
			}
			var vy, aQn, f2 = new f3;
			f2.f4(L(348)), f2.fA(L(349)), ep.fH.aEa();
			return aQn = [new eG(L(29), function() {
				var f7 = Math.min(ep.buffer.data[117].value, vy.r5.length - 1);
				f7 < 1 || (f7 = ep.fH.a9d(f7), ep.eq.er(105, f7.hT), ep.eq.er(106, f7.password), dx.ej(8, dx.jg().el, new ex(18)))
			}, v.iN, 1), new eG(L(347), function() {
				var f7 = Math.min(ep.buffer.data[117].value, vy.r5.length - 1);
				if (!(f7 < 1)) {
					vy.r5[f7].remove(), vy.r5.splice(f7, 1);
					for (var ai = f7; ai < vy.r5.length; ai++) vy.r5[ai].name = "" + ai;
					ep.fH.aEd(f7), f7 = ep.buffer.data[117].value, vy.r5[f7].textContent = vy.r5[f7].textContent.replace("⚪", "🟢"), aQo(f7)
				}
			}, v.iN, 1)], vy = new r2(ep.buffer.data[117], aQo), aQo(0), vy.r5[0].style.marginTop = "0.5em", f2.vx(vy), f2.f5(new f9([aQn[0].button])), f2.f5(new f9([aQn[1].button])), f2
		}()));
		return ey.push(function() {
				var aQr, f2 = new f3;
				return f2.f4("Report Power"), aQr = 1 / (aQr = 1 - .95 * Math.max((10 - Math.sqrt(data.aQs)) / 10, 0)), f2.vv("Power: " + aa.b1.b3(data.aQt) + "<br>Remaining Reports ≈ " + Math.floor(aQr * Math.max(30 - data.aQu, 0))), f2
			}()), ey.push(function() {
				var f2 = new f3,
					aQi = (f2.f4(L(353)), [L(354), L(355), L(356), L(357)]),
					mj = data.aQp;
				return f2.vv(L(358) + (data.aQq / 100).toFixed(2) + "<br>" + L(330) + (mj + 1) + " / " + data.wn + "<br>" + L(331) + aQi[mj < 10 ? 0 : mj < 50 ? 1 : mj < 200 ? 2 : 3]), f2
			}()), ey.push(function() {
				var f2 = new f3;
				return f2.f4(L(350)), f2.vv(L(351) + aa.b1.aPA(data.wk, .1, 1) + "<br>" + L(330) + (data.wl + 1) + " / " + data.wn + "<br>" + L(352) + data.wm), f2
			}()),
			function(ey) {
				var f2 = new f3,
					aRI = data.wr,
					aRJ = (f2.f4(L(413)), f2.vv(L(414, [data.wp.length ? "[" + data.wp + "]" : "-"])), f2.vv(L(415, [aa.b1.aPA(aRI, .01, 2)])), f2.vv(L(416, [data.wt + 1 + " / " + data.wn])), data.wu),
					aRK = (f2.vv(L(417, [aa.b1.aPA(aRJ, .1, 1)])), data.ww);
				f2.vv(L(418, [aRK])), f2.vv(L(419, [aa.b1.aPA(aRJ / Math.max(aRK, 1), .1, 2)])), aRI = data.ws, f2.f4(L(420), "0.8em"), f2.vv(L(414, [data.wq.length ? "[" + data.wq + "]" : "-"])), f2.vv(L(415, [aa.b1.aPA(aRI, .01, 2)])),
					aRJ = data.wv, f2.vv(L(417, [aa.b1.aPA(aRJ, .1, 1)])), aRK = data.wx, f2.vv(L(418, [aRK])), f2.vv(L(419, [aa.b1.aPA(aRJ / Math.max(aRK, 1), .1, 2)])), f2.vv(jZ.fH.xG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ey
					.push(f2)
			}(ey),
			function(ey) {
				var f2 = new f3;
				f2.f4(L(421)), f2.vv(L(358) + (data.aRL / 10).toFixed(1) + "<br>" + L(331) + (data.aRM.length ? L(422, [data.aRM]) : L(423))), data.aQQ && f2.f5(new f9([new eG(L(367), function(cc) {
					return jZ.fH.lZ(0) && (aa.ab.xO(cc), jZ.mn.aO4({
						action: 4,
						hT: data.hT
					})), !0
				}, 0, 0, 1).button]));
				f2.vv(jZ.fH.xG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", ey.push(f2)
			}(ey), ey.push(function() {
				var f2 = new f3;
				{
					var kF, w3, aQy, vs, xJ, xL;
					f2.f4(L(365)), f2.vv(L(366) + data.aQx + "<br>" + L(330) + (data.aQs + 1) + " / " + data.wn + "<br>" + L(331) + hX.ym(data.aQs)), data.aQQ && ((kF = new f6({
						value: ep.buffer.data[157].value,
						f7: -1
					}, 1, void 0, function(cc) {
						ep.eq.er(157, xJ(cc.target.value))
					})).cc.style.marginTop = "0.6em", f2.f5(kF), w3 = new eG(L(102), function(cc) {
						return cc.textContent === L(102) ? (cc.textContent = L(103), kF.cc.readOnly = !0, aQy[0].iE(0), aQy[0].button.style.color = v.hL, xJ(ep.buffer.data[157].value)) : xL(), !0
					}), f2.f5(new f9([w3.button])), aQy = [new eG(L(367), function(cc) {
						return kF.cc.readOnly && jZ.fH.lZ(0) && (aa.ab.xO(cc), xL(), jZ.mn.mo({
							action: 1,
							hT: data.hT,
							value: q.a0(parseInt(ep.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], vs = f2.fA(), xJ = function(d0) {
						return d0 = aa.bY.aQz(d0, 2, 3e4), vs.textContent = L(368, [d0 - 1, d0, ep.buffer.data[105].value]), d0
					}, f2.f5(new f9([aQy[0].button])), xL = function() {
						w3.button.textContent = L(102), kF.cc.readOnly = !1, aQy[0].iE(1), aQy[0].button.style.color = v.w
					}, xJ(ep.buffer.data[157].value))
				}
				return f2
			}()),
			function(ey) {
				var f2, aC9;
				data.aQQ && !data.aRN || (0 === aT.id || data.aQQ || data.aRN) && ((f2 = new f3).f4("Patreon"), !data.aQQ && data.aRO ? f2.f5(new f9([new eG(L(32), function() {
					jZ.mn.aO4({
						action: 7,
						hT: data.hT
					}), data.aRO = 0, dx.ej(7)
				}).button])) : data.aRN ? (f2.vv(L(424, [(data.aRP / 100).toFixed(2)]) + "<br>" + L(425, [1 + data.aRQ + " / " + data.aRR]) + "<br>" + L(426, [data.aRS ? L(427) : L(428)])), data.aQQ || f2.f5(new f9([new eG(L(429),
					function() {
						jZ.mn.aO4({
							action: 8,
							hT: data.hT
						}), data.aRN = 0, ep.eq.er(160, 0), dx.ej(7)
					}).button]))) : (f2.vv(L(430), "0.75em").style.marginBottom = "0.3em", f2.vv("  • " + L(431), "0.75em").style.whiteSpace = "pre", f2.vv("  • " + L(432), "0.75em").style.whiteSpace = "pre", f2.vv("  • " + L(433),
						"0.75em").style.whiteSpace = "pre", f2.vv(L(434), "0.75em").style.marginTop = "1.0em", f2.vv(L(435), "0.75em").style.marginTop = "1.0em", f2.vv("<a href='" + aFw.l9 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aC9 = "https://www.patreon.com/oauth2/authorize?state=" + data.hT +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + jZ.fH.a9C() + "/", f2.vv(L(436), "0.75em").style.marginTop = "1.0em", f2.vv("<a href='" +
						aC9 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aQQ || (f2.f5(new fB), f2.f5(new f9([new eG(L(33), function() {
						jZ.mn.aO4({
							action: 6,
							hT: data.hT
						}), data.aRO = 1, dx.ej(7)
					}).button])), f2.vv(L(437), "0.75em").style.marginTop = "0.75em")), ey.push(f2))
			}(ey), ey.push(function() {
				var f2 = new f3,
					aQi = (f2.f4(L(359)), [L(360), L(361), L(362), L(363), "Scout", L(364)]),
					mj = data.aQv;
				return f2.vv(L(358) + (data.aQw / 100).toFixed(2) + "<br>" + L(330) + (mj + 1) + " / " + data.wn + "<br>" + L(331) + aQi[mj < 3 ? 0 : mj < 20 ? 1 : mj < 100 ? 2 : mj < 500 ? 3 : mj < 2e3 ? 4 : 5]), f2.vv(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", f2
			}()),
			function(ey) {
				var f2, vy, aQn, f7, aQo;
				data.aQQ || ep.fJ.get().length && ((f2 = new f3).f4(L(345)), f7 = 0, aQo = function() {
					var aCX = ep.fJ.get().length;
					aQn[0].iE(f7 === aCX ? v.iN : v.a9q), aQn[1].iE(f7 === aCX ? v.iN : v.aIb)
				}, aQn = [new eG(L(346), function() {
					dx.ej(8, void 0, new ex(25, {
						action: 0,
						hT: ep.fJ.get()[f7],
						mh: 0
					}))
				}, v.iN, 1), new eG(L(347), function() {
					ep.fJ.aGf(f7), vy.r5[f7].remove(), vy.r5.splice(f7, 1);
					for (var ai = f7; ai < vy.r5.length; ai++) vy.r5[ai].name = "" + ai;
					ep.fJ.get().length && (f7 = Math.max(f7 - 1, 0), vy.r5[f7].textContent = vy.r5[f7].textContent.replace("⚪", "🟢")), aQo()
				}, v.iN, 1)], aQo(), (vy = new r2(ep.fJ.aGc(), function(ai) {
					f7 = ai, aQo()
				})).r5[0].style.marginTop = "0.5em", f2.vx(vy), f2.f5(new f9([aQn[0].button])), f2.f5(new f9([aQn[1].button])), ey.push(f2))
			}(ey), aQR(ey, 0), ey
	}())
}

function aJ5() {
	this.ab = new aRT, this.kt = new aCa, this.bY = new aRU, this.b1 = new aP2, this.a2 = new aPy, this.rd = new aMG, this.canvas = new aRV, this.color = new aDm, this.a7X = new iS, this.b = function() {
		this.ab.wf()
	}
}

function aJG() {
	var aZ, aS, a4, aRW, aRX, aRY, canvas, a2, a23, aBo, aRZ, aRa, aRb, aRc;
	this.a3 = 0, this.aY = 0, this.b = function() {
		aRY = c.aRd, aRa = "rgba(0,100,0,0.8)", aRb = "rgba(150,0,0,0.8)", a23 = aRZ = !0, aBo = y.ax[c.t], this.resize()
	}, this.resize = function() {
		aS = Math.floor((aT.aU.aV() ? .305 : .24) * aW.aX), this.aY = Math.floor(.5 + .13 * aS), aS = Math.floor(6 * this.aY), aZ = aa.ab.ac(1, Math.floor(.8 * this.aY)), aRX = aa.ab.ac(1, Math.floor(.45 * this.aY)), aRc = Math.floor(.5 * this
			.aY), gW.u1.font = aZ, a4 = ak.gap, aRW = Math.floor(1 + .13 * this.aY), (canvas = document.createElement("canvas")).width = aS, canvas.height = this.aY, a2 = canvas.getContext("2d", {
			alpha: !0
		}), aa.ab.textBaseline(a2, 1), aa.ab.textAlign(a2, 1), this.aRe()
	}, this.am = function() {
		return aT.aU.aV() && aW.aS < 1.2 * aW.aY
	}, this.af = function() {
		this.am() ? this.a3 = aW.aS - aS - ak.gap : this.a3 = Math.floor(bi.aLO() + (aW.aS - bi.aLO() - at.aS - aS) / 2 - .5 * ak.gap)
	}, this.ap = function() {
		a23 && (a23 = !1, this.aRe())
	}, this.aRe = function() {
		a2.font = aZ, a2.clearRect(0, 0, aS, this.aY), a2.fillStyle = aRZ ? aRa : aRb, a2.fillRect(0, 0, aS, this.aY), a2.fillStyle = v.aRf;
		var cY = this.aRg(),
			aRi = (this.aRh(), a2.fillStyle = y.ax[c.t] >= ay.az(c.t) ? v.a2Y : v.w, aa.b1.b3(aBo)),
			aRi = (a2.fillText(aRi, Math.floor(aS / 2), aRc), a2.measureText(aRi).width),
			aRk = (a2.font = aRX, a2.fillStyle = 9 === cY ? v.aRj : v.w, ay.aRl),
			aRm = "+" + aRk,
			nd = a2.measureText(aRm).width,
			aRn = Math.floor(this.aY / 12),
			aRi = .5 * (aS + aRi) + aRn;
		(aRi + nd + aRW <= aS || 1e3 <= aRk && (aRm = "+" + Math.floor(aRk / 1e3) + "K", aRi + (nd = a2.measureText(aRm).width) + aRW <= aS)) && a2.fillText(aRm, Math.floor(aRi + .5 * nd), Math.floor(.3 * this.aY)), __fx.settings
			.displayTickNumber && a2.fillText(9 - cY, Math.floor(2 * aRW + aRn), Math.floor(.3 * this.aY)), a2.fillStyle = v.w, a2.fillRect(0, 0, aS, 1), a2.fillRect(0, 0, 1, this.aY), a2.fillRect(0, this.aY - 1, aS, 1), a2.fillRect(aS - 1, 0, 1,
				this.aY)
	}, this.aRg = function() {
		var cY = bc.ql() % 100,
			a62 = (cY = 9 - q.aN(cY -= cY % 10, 10), Math.floor(cY * (this.aY - aRW) / 9));
		return a2.fillRect(0, a62, aRW, this.aY - a62), a2.fillRect(aS - aRW, a62, aRW, this.aY - a62), cY
	}, this.aRh = function() {
		a2.fillRect(aRW, this.aY - aRW, Math.floor((aS - 2 * aRW) * y.ax[c.t] / aRY), aRW)
	}, this.b8 = function() {
		var pG = c.t;
		aa.bY.bZ(pG) && (pG = y.ax[pG] - y.xa[pG], aBo !== pG ? (aRY = aF4(pG, aRY), aRZ = aBo < pG && 10 <= pG, aBo = pG, a23 = !0) : bc.ql() % 10 == 9 && (a23 = !0))
	}, this.bm = function() {
		0 === y.an[c.t] || c.ao || 2 === y.xR[c.t] || bn.drawImage(canvas, this.a3, a4)
	}
}

function aJt() {
	var aRo = new Array(1),
		aRp = new Array(1),
		aRq = 20,
		vm = 0,
		aRr = !1;

	function aRt() {
		aRq++, aJ2.play()
	}
	this.b = function() {
		if (!window.document.documentMode) {
			for (var ai = 0; 0 <= ai; ai--) ! function(ai, src) {
				aRp[ai] = 0, aRo[ai] = document.createElement("audio"), aRo[ai].src = src, aRo[ai].setAttribute("preload", "auto"), aRo[ai].setAttribute("controls", "none"), aRo[ai].style.display = "none", aRo[ai].onpause = function() {
					aRp[ai] = 1
				}, aRo[ai].oncanplaythrough = function() {
					aRp[ai] = 0 === aRp[ai] ? 1 : aRp[ai]
				}, document.body.appendChild(aRo[ai])
			}(ai,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aRr = !0
		}
	}, this.kJ = function() {
		if (aRr) {
			aRr = !1;
			for (var ai = 0; 0 <= ai; ai--) aRo[ai].onpause = null, aRo[ai].oncanplaythrough = null, dx.removeChild(document.body, aRo[ai]), aRo[ai] = null
		}
	}, this.play = function() {
		if (aRr) {
			var av = performance.now();
			if (vm + 66 < av)
				for (var ai = 0; 0 <= ai; ai--)
					if (1 === aRp[ai]) return vm = av, aRp[ai] = 2, void aRo[ai].play();
			0 < aRq && (aRq--, setTimeout(aRt, 66))
		}
	}
}

function aJg() {
	this.a1M = new aRu, this.bY = new aRv, this.xl = new aRw, this.st = new xb, this.aAX = new aMX
}

function aRx() {
	var aRy = 0,
		aRz = 0,
		aS0 = 300,
		aS1 = 300,
		aS2 = 0;
	this.oB = 0, this.buffer = new Uint32Array(512), this.b = function() {
		aRz = aRy = 0, this.oB = 0, aS2 = 0
	}, this.b8 = function() {
		if (function() {
				var b7 = o9.oA.oB;
				if (0 === b7) return 1;
				var buffer = o9.oA.buffer;
				if (bc.ql() % 35 == 6) {
					for (var ai = b7 - 1; 0 <= ai; ai--) j1.zb(buffer[ai] << 2) || (b7--, buffer[ai] = buffer[b7]);
					o9.oA.oB = b7
				}
				return b7 < buffer.length
			}())
			if (aS0 <= aRy) {
				var aS6 = o9.oA.oB;
				if (aS6) {
					if (bc.ql() % 350 != 1) return;
					if (aS2 !== aS6) return void(aS2 = aS6);
					if (!aa.bY.o2(bM[0])) return
				} else if (bc.ql() % 12 != 8) return;
				aa.bY.aS7() || o9.oA.b()
			} else {
				var ai, aS = gW.gX,
					aS8 = aS - 2,
					aS6 = aS8 * (gW.gY - 2),
					aS9 = aS0,
					buffer = o9.oA.buffer,
					b6 = o9.oA.oB,
					aSA = buffer.length,
					iY = Math.min(aRz + aS9 * ((1 + 19 * o9.performance.oC) * aS1), aS6);
				for (ai = aRz; ai < iY; ai += aS9) {
					var ar = 4 * (ai % aS8 + (q.aN(ai, aS8) + 1) * aS + 1);
					if (j1.zb(ar) && (buffer[b6] = ar >> 2, ++b6 === aSA)) {
						ai += aS9;
						break
					}
				}(aRz = ai) >= aS6 && (aRz = ++aRy), o9.oA.oB = b6
			}
	}
}

function aJ6() {
	var cY = aa.color;
	this.bs = cY.a7a(0, 0, 0), this.gf = cY.aDr(0, 0, 0, .7), this.a6T = cY.aDr(0, 0, 0, .5), this.iM = cY.aDr(0, 0, 0, .85), this.x = cY.aDr(0, 0, 0, .75), this.a5S = cY.aDr(0, 0, 0, .6), this.dh = cY.aDr(0, 0, 0, .35), this.w = cY.a7a(255, 255,
			255), this.no = cY.aDr(255, 255, 255, .3), this.aRf = cY.aDr(255, 255, 255, .6), this.aOz = cY.aDr(255, 255, 255, .4), this.aSB = cY.aDr(255, 255, 255, .25), this.aSC = cY.aDr(255, 255, 255, .85), this.a2G = cY.aDr(255, 255, 255, .75),
		this.aSD = cY.aDr(255, 255, 255, .15), this.aSE = cY.aDr(255, 255, 255, .11), this.fC = cY.a7a(128, 128, 128), this.aFa = cY.aDr(64, 64, 64, .75), this.aSF = cY.aDr(88, 88, 88, .83), this.iN = cY.aDr(60, 60, 60, .85), this.aSG = cY.aDr(80,
			60, 60, .85), this.hE = cY.a7a(170, 170, 170), this.hF = cY.a7a(200, 235, 245), this.aOu = cY.a7a(30, 255, 30), this.aOt = cY.a7a(0, 200, 0), this.a2X = cY.a7a(128, 255, 128), this.aSH = cY.aDr(10, 65, 10, .75), this.au = cY.aDr(0, 255,
			0, .6), this.aSI = cY.aDr(0, 255, 0, .5), this.dl = cY.aDr(0, 200, 0, .5), this.a9q = cY.aDr(0, 100, 0, .75), this.a3w = cY.aDr(0, 60, 0, .8), this.kT = cY.aDr(0, 255, 0, .3), this.a5Q = cY.aDr(0, 180, 0, .6), this.aSJ = cY.aDr(0, 120, 0,
			.85), this.aR7 = cY.a7a(0, 120, 0), this.aSK = cY.aDr(0, 70, 0, .85), this.aSL = cY.a7a(190, 230, 190), this.hI = cY.a7a(0, 255, 0), this.aSM = cY.a7a(255, 120, 120), this.a2Y = cY.a7a(255, 160, 160), this.aOw = cY.a7a(255, 70, 70), this
		.aOv = cY.a7a(230, 0, 0), this.a2E = cY.aDr(220, 0, 0, .6), this.aP1 = cY.aDr(255, 100, 100, .8), this.aFG = cY.aDr(100, 0, 0, .85), this.a3v = cY.aDr(60, 0, 0, .85), this.a5R = cY.aDr(200, 0, 0, .6), this.aIb = cY.aDr(120, 0, 0, .85), this
		.aFC = cY.a7a(255, 70, 10), this.hg = cY.a7a(230, 190, 190), this.hG = cY.a7a(255, 0, 0), this.hH = cY.a7a(255, 0, 255), this.a3t = cY.aDr(60, 0, 60, .85), this.a3u = cY.aDr(0, 60, 60, .85), this.aOs = cY.aDr(10, 60, 60, .9), this.aSN = cY
		.aDr(0, 96, 96, .75), this.hJ = cY.a7a(0, 255, 255), this.aPa = cY.a7a(160, 160, 255), this.aLR = cY.aDr(0, 40, 90, .75), this.a5U = cY.aDr(0, 0, 255, .6), this.aSO = cY.a7a(200, 200, 255), this.aSP = cY.aDr(50, 50, 255, .83), this.aLQ = cY
		.aDr(20, 90, 150, .75), this.aFb = cY.aDr(10, 10, 120, .75), this.b0 = cY.a7a(255, 120, 100), this.aSQ = cY.aDr(255, 255, 0, .5), this.aLT = cY.aDr(255, 255, 150, .2), this.hL = cY.a7a(255, 255, 0), this.aFF = cY.a7a(255, 255, 200), this
		.a5T = cY.aDr(200, 200, 0, .6), this.aSR = cY.aDr(140, 120, 0, .75), this.aSS = cY.aDr(180, 160, 40, .75), this.aST = cY.aDr(70, 50, 20, .85), this.aSU = cY.aDr(30, 30, 0, .85), this.a3y = cY.aDr(60, 60, 0, .85), this.aRj = cY.a7a(255, 255,
			100), this.hM = cY.a7a(255, 255, 140), this.aCD = cY.aDr(255, 140, 0, .75), this.a3x = cY.aDr(70, 40, 0, .85), this.hK = cY.a7a(255, 150, 0), this.aSV = cY.aDr(255, 200, 80, .85), this.a2B = cY.aDr(0, 0, 0, 0), this.k1 = cY.aDr(255, 255,
			255, 0), this.k2 = cY.aDr(254, 254, 254, 0)
}

function aJC() {
	var aNS, aNT, a31, a32, aSW, aSX, aSY, aSZ, aSa, aSb;

	function aSd() {
		var cZ = c.cZ;
		for (aSa = cZ; aSa < c.c2; aSa++) aSc();
		for (aSa = c.ao ? c.aI : 0; aSa < cZ; aSa++) {
			if (!aSg()) {
				for (var cT = c.aSi = aSa; cT < cZ; cT++) aSa = cT, aSc();
				return
			}
			aSh(aSX + aNS * aSW + q.aN(aSW, 2), aSY + aNT * aSW + q.aN(aSW, 2))
		}
	}

	function aT2(player) {
		for (var oE = y.oE, oG = y.oG, oF = y.oF, oH = y.oH, a4 = oG[player]; a4 <= oH[player]; a4++)
			for (var a3 = oE[player]; a3 <= oF[player]; a3++) {
				var ar = j1.aT3(a3, a4);
				j1.zY(ar) && (j1.aT4(ar) ? j1.a19(ar, player) : j1.aT5(ar, player))
			}
	}

	function aT1(ce, mS, mT) {
		var av = ce[mS];
		ce[mS] = ce[mT], ce[mT] = av
	}

	function aSg() {
		return function() {
			var ai;
			for (ai = 0; ai < 8; ai++)
				if (aNS = q.aN(a31 * cN.random(), cN.value(100)), aNT = q.aN(a32 * cN.random(), cN.value(100)), aTA()) return 1;
			return
		}() || function() {
			var d8, d9, cy, a62, cT, a61;
			for (d8 = q.aN(a31 * cN.random(), cN.value(100)), d9 = q.aN(a32 * cN.random(), cN.value(100)), cy = 40; 1 <= cy; cy--)
				for (a62 = a32 - cy; 0 <= a62; a62 -= 40)
					for (aNT = (a62 + d9) % a32, cT = 40; 1 <= cT; cT--)
						for (a61 = a31 - cT; 0 <= a61; a61 -= 40)
							if (aNS = (a61 + d8) % a31, aTA()) return 1;
			return
		}()
	}

	function aTA() {
		for (var pG, aTC, gap = q.aN(aSW - aSZ, 2), a4P = aSY + aNT * aSW + gap, a4O = aSX + aNS * aSW + gap, aTB = a4P + aSZ - 1; a4P <= aTB; aTB--)
			for (aTC = a4O + aSZ - 1; a4O <= aTC; aTC--)
				if (pG = j1.aT3(aTC, aTB), !j1.uZ(pG) || j1.aT4(pG)) return;
		return 1
	}

	function aSh(a61, a62) {
		aSc(), aTD(a61 - 2, a62 - 2)
	}

	function aSc() {
		y.an[aSa] = 0, y.aO[aSa] = y.xS[aSa] = 0, y.bW[aSa] = [], y.xT[aSa] = [], y.uW[aSa] = [], y.xU[aSa] = [], y.oE[aSa] = y.oG[aSa] = y.oF[aSa] = y.oH[aSa] = 0
	}

	function aTD(a61, a62) {
		var pG, ai, aTE, aTF;
		for (y.an[aSa] = 1, y.oE[aSa] = a61 + 10, y.oG[aSa] = a62 + 10, y.oH[aSa] = y.oF[aSa] = 0, aTE = a61; aTE < a61 + 4; aTE++)
			for (aTF = a62; aTF < a62 + 4; aTF++)(a61 < aTE && aTE < a61 + 3 || a62 < aTF && aTF < a62 + 3) && (pG = j1.aT3(aTE, aTF), j1.uZ(pG)) && (y.oE[aSa] = Math.min(aTE, y.oE[aSa]), y.oF[aSa] = Math.max(aTE, y.oF[aSa]), y.oG[aSa] = Math.min(
				aTF, y.oG[aSa]), y.oH[aSa] = Math.max(aTF, y.oH[aSa]), aSb[y.aO[aSa]] = pG, y.aO[aSa]++, j1.aT5(pG, aSa));
		for (y.xS[aSa] = y.aO[aSa], ai = y.aO[aSa] - 1; 0 <= ai; ai--) j1.aHk(aSb[ai], aSa) ? (j1.a19(aSb[ai], aSa), y.xT[aSa].push(aSb[ai])) : j1.aM9(aSb[ai]) ? (j1.a19(aSb[ai], aSa), y.uW[aSa].push(aSb[ai])) : j1.aTG(aSb[ai]) && (j1.a19(aSb[ai],
			aSa), y.xU[aSa].push(aSb[ai]))
	}
	this.b = function() {
		if (aSb = new Array(12), aSZ = 6, aSW = 10, a31 = q.aN(gW.gX, aSW), a32 = q.aN(gW.gY, aSW), aSX = q.aN(gW.gX - aSW * a31, 2), aSY = q.aN(gW.gY - aSW * a32, 2), c.ao)
			for (var ai = 0; ai < c.aI; ai++) aSa = ai, aSc(), y.an[aSa] = 1;
		(0 === c.data.spawningType ? aSd : 1 === c.data.spawningType ? (aSd(), function() {
			var cu = c.cq;
			c.ct || cu++;
			if (!(cu < 3)) {
				for (var data = c.data, cX = (c.ao ? c.aI : 0) + data.teamPlayerCount[0], gJ = c.aSi, aSj = new Uint32Array(cu), aSk = new Uint32Array(cu), aSl = new Uint16Array(cu), aSm = new Uint16Array(cu), c1 = cD.c1, oE = y.oE, oG =
						y.oG, oF = y.oF, oH = y.oH, aSn = ij.aSn, aSo = ij.aSo, ai = cX; ai < gJ; ai++) aSn[ai] = oE[ai] + oF[ai] >> 1, aSo[ai] = oG[ai] + oH[ai] >> 1;
				for (ai = cX; ai < gJ; ai++) {
					var id = c1[ai];
					aSj[id] += aSn[ai], aSk[id] += aSo[ai]
				}
				var c0 = cD.c0;
				for (ai = 1; ai < cu; ai++) {
					var cW = Math.max(data.teamPlayerCount[c0[ai]], 1);
					aSl[ai] = q.aN(aSj[ai], cW), aSm[ai] = q.aN(aSk[ai], cW)
				}
				var c4 = cD.c4,
					c5 = cD.c5,
					c6 = cD.c6,
					pN = ij.pN;
				for (ai = 0; ai < 512; ai++) pN[ai] = ai;
				for (var mj = 0; mj < 2 + (4 <= cu); mj++)
					for (ai = cX; ai < gJ; ai++) {
						for (var wU = ai, aDd = pN[wU], aSp = 1, cQ = q.dH(aSn[aDd] - aSl[1], aSo[aDd] - aSm[1]), cy = 2; cy < cu; cy++) {
							var aSq = q.dH(aSn[aDd] - aSl[cy], aSo[aDd] - aSm[cy]);
							aSq < cQ && (cQ = aSq, aSp = cy)
						}
						var aSr = c1[wU];
						if (aSp !== aSr) {
							if (2 === mj && 4 <= cu) {
								var aSs = Math.max((aSp + 1) % cu, 1),
									aSt = q.dH(aSn[aDd] - aSl[aSs], aSo[aDd] - aSm[aSs]);
								for (cy = 1; cy < cu; cy++) aSq = q.dH(aSn[aDd] - aSl[cy], aSo[aDd] - aSm[cy]), cQ < aSq && aSq < aSt && (aSt = aSq, aSs = cy);
								aSs !== aSr && q.dH(aSl[aSr] - aSl[aSs], aSm[aSr] - aSm[aSs]) < q.dH(aSl[aSr] - aSl[aSp], aSm[aSr] - aSm[aSp]) && (aSp = aSs)
							}
							var aSu = c0[aSp],
								aSv = c5[aSu] + (c.ao ? 0 : c6[aSu]),
								wV = c4[aSv],
								aDe = pN[wV],
								aSw = c5[aSu + 1];
							cQ = q.dH(aSn[aDe] - aSl[aSr], aSo[aDe] - aSm[aSr]);
							for (var cY = aSv + 1; cY < aSw; cY++) {
								var aSx = c4[cY],
									aSy = pN[aSx];
								(aSq = q.dH(aSn[aSy] - aSl[aSr], aSo[aSy] - aSm[aSr])) < cQ && (cQ = aSq, wV = aSx)
							}
							wV < cX || gJ <= wV || (aDe = pN[wV], aSj[aSr] += aSn[aDe] - aSn[aDd], aSk[aSr] += aSo[aDe] - aSo[aDd], aSj[aSp] += aSn[aDd] - aSn[aDe], aSk[aSp] += aSo[aDd] - aSo[aDe], cW = data.teamPlayerCount[c0[aSr]], aSl[
								aSr] = q.aN(aSj[aSr], cW), aSm[aSr] = q.aN(aSk[aSr], cW), cW = data.teamPlayerCount[aSu], aSl[aSp] = q.aN(aSj[aSp], cW), aSm[aSp] = q.aN(aSk[aSp], cW), pN[wU] = aDe, pN[wV] = aDd)
						}
					}! function() {
						for (var pN = ij.pN, oE = y.oE, oG = y.oG, oF = y.oF, oH = y.oH, aO = y.aO, xS = y.xS, xT = y.xT, uW = y.uW, xU = y.xU, ai = 0; ai < 512; ai++) {
							var aT0 = pN[ai];
							if (aT0 !== ai) {
								aT1(oE, ai, aT0), aT1(oG, ai, aT0), aT1(oF, ai, aT0), aT1(oH, ai, aT0), aT1(aO, ai, aT0), aT1(xS, ai, aT0), aT1(xT, ai, aT0), aT1(uW, ai, aT0), aT1(xU, ai, aT0), aT2(ai), aT2(aT0), pN[ai] = ai;
								for (var aY = aT0, iY = pN[aY]; iY !== ai;) iY = pN[aY = iY];
								pN[aY] = aT0
							}
						}
					}()
			}
		}) : function() {
			var cZ = c.cZ;
			for (aSa = cZ; aSa < c.c2; aSa++) aSc();
			for (aSa = c.ao ? c.aI : 0; aSa < cZ; aSa++)
				if (! function() {
						var spawningData = c.data.spawningData,
							a61 = spawningData[2 * aSa] + 1,
							spawningData = spawningData[2 * aSa + 1] + 1;
						if (3 < a61 && a61 < gW.gX - 5 && 3 < spawningData && spawningData < gW.gY - 5 && j1.uZ(j1.aT3(a61, spawningData)) && function(a61, a62) {
								var pG, aTC, aTB;
								for (aTB = a62; a62 - 6 < aTB; aTB--)
									for (aTC = a61; a61 - 6 < aTC; aTC--)
										if (pG = j1.aT3(aTC, aTB), j1.aT4(pG)) return;
								return 1
							}(a61 + 3, spawningData + 3)) return aSh(a61 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aSg()) {
						for (var cT = c.aSi = aSa; cT < cZ; cT++) aSa = cT, aSc();
						return
					}
					var a61 = aSX + aNS * aSW + q.aN(aSW, 2),
						a62 = aSY + aNT * aSW + q.aN(aSW, 2);
					aSh(a61, a62)
				}
		})(), pz.qH[7] = y.aO[c.t]
	}, this.sA = function(pn, zC, zD) {
		var ai, a61, a62, pG, aNS, aNT;
		for (aSa = pn, ai = 0; ai < 20; ai++)
			for (a61 = zC + ai; zC - ai <= a61; a61--)
				for (a62 = zD + ai; zD - ai <= a62; a62--)
					if ((a61 === zC + ai || a61 === zC - ai || a62 === zD + ai || a62 === zD - ai) && 3 < a61 && a61 < gW.gX - 5 && 3 < a62 && a62 < gW.gY - 5 && j1.uZ(j1.aT3(a61, a62)) && function(a61, a62) {
							var pG, aTC, aTB;
							for (aTB = a62; a62 - 6 < aTB; aTB--)
								for (aTC = a61; a61 - 6 < aTC; aTC--)
									if (pG = j1.aT3(aTC, aTB), j1.aT4(pG) && !j1.aAW(aSa, pG)) return;
							return 1
						}(a61 + 3, a62 + 3)) {
						if (0 < y.aO[aSa]) {
							for (aNT = aNS = pG = void 0, aNS = y.oF[aSa]; aNS >= y.oE[aSa]; aNS--)
								for (aNT = y.oH[aSa]; aNT >= y.oG[aSa]; aNT--) pG = 4 * (aNT * gW.gX + aNS), j1.a5q(aSa, pG) && (j1.aTJ(pG), y.aO[aSa]--);
							aSc()
						}
						return aTD(a61 - 1, a62 - 1), !0
					} return !1
	}, this.sB = function(pn) {
		aSa = pn, aSg() ? aSh(aSX + aNS * aSW + q.aN(aSW, 2), aSY + aNT * aSW + q.aN(aSW, 2)) : aSc()
	}
}

function aTK() {
	var aTL, aTM = [],
		aTN = -1,
		aTO = 0,
		aTP = 0;

	function aTT() {
		aTO = bc.iV, (3 === this.my ? aTS : (aTN = (aTM.length + aTN + 2 * this.my - 1) % aTM.length, aTR))()
	}

	function aTR() {
		0 !== aTM.length && (aTP = 0, aTL && aTL.kJ(), (aTL = new mu(aTT)).er(aTN, aTM.length), aTL.show(aTM[aTN]), hq.message.resize())
	}

	function aTS() {
		aTP = 1, aTL && aTL.kJ(), (aTL = new aCy(aTR)).er(aTM.length), aTL.show(), hq.message.resize()
	}
	this.aHW = function(hQ) {
		var ht;
		2 === hQ.id && 3 === hQ.hW ? hq.bR.i0(hQ.hT) : (ht = hq.bR.hb(hQ, hq.bR.hP(hQ)), (5 !== hQ.id && 6 !== hQ.id || (dx.ek(29).kI().a6X(ht), 5 === hQ.id)) && (ht = bc.iV < aTO + 2e4, aTN !== aTM.length - 1 && ht || (aTN = aTM.length), aTM
			.push(hQ), ep.buffer.data[14].value || 7 === hQ.id || aJ2.play(), aTL) && (aTP && (ep.buffer.data[13].value || ht) ? aTL.er(aTM.length) : aTR()))
	}, this.show = function() {
		aTS()
	}, this.du = function() {
		aTN = aTM.length - 1, aTL && aTL.kJ(), aTL = null
	}, this.resize = function() {
		aTL && aTL.resize()
	}, this.i4 = function() {
		return aTM
	}
}

function fa() {
	this.b8 = function(player) {
		return !!bQ.fh.jS(player) && !(bQ.fH.uU[player] >= Math.max(3 * o9.performance.oC, yB.uT[yB.po[player]]) || !aa.bY.aTU(player, yB.aTV[yB.po[player]], 32, 0)) && (at.bN() ? function(player) {
			var aTb = bQ.bR.bS(),
				b7 = aTb.length;
			if (0 === b7) return !1;
			aTb = aTb[cN.cO(b7)], b7 = bQ.fH.il[aTb];
			if (bQ.fq.aCI(player, b7)) return !1;
			return !! function(player, aTc) {
				var aTc = ix.iy(bQ.fH.iz[aTc]),
					oM = ix.oN(aTc),
					aTc = ix.oP(aTc),
					ne = y.oE[player],
					nf = y.oG[player],
					aDg = y.oF[player],
					player = y.oH[player],
					aDg = Math.max(oM - aDg, ne - oM),
					ne = Math.max(aTc - player, nf - aTc);
				return aDg < 100 && ne < 100
			}(player, aTb) && !!bQ.fo.iq(player, b7, 1) && (aa.bY.aTe(player), bQ.fH.t3(player), !0)
		}(player) : !!(o9.aTX.b8(player) || o9.aTY.b8(player) || o9.aTZ.b8(player)) && (function(player) {
			ij.ik[1] = 4, aa.bY.aTe(player), bQ.fH.t3(player)
		}(player), !0))
	}
}

function aTf() {
	this.a1P = function(ar) {
		var aEA;
		return gW.uN(gW.kY) && c.data.passableMountains && (aEA = j1.j2(ar), this.aTg(c.t, aEA) || this.aTh(c.t, aEA)) && 0 !== (aEA = function(aTn) {
			for (var a3 = ix.oN(aTn), a4 = ix.oP(aTn), max = Math.max(gW.gX, gW.gY) - 2, aTo = max * max, aAO = !1, aTp = 0, cQ = 0; cQ < max; cQ++) {
				var aTq, ic = function(a3, a4, cQ) {
					for (var ai = 0; ai <= cQ; ai++)
						for (var cy = -1; cy < 2; cy += 2)
							for (var cT = -1; cT < 2; cT += 2)
								for (var cY = 0; cY < 2; cY++) {
									var ar = function(a3, a4) {
										if (ix.oQ(a3, a4)) {
											a3 = ix.oR(a3, a4), a4 = ix.j3(a3);
											if (j1.uZ(a4) && j1.aTr(a4)) return a3
										}
										return 0
									}(a3 + cY * cy * ai + (1 - cY) * cT * cQ, a4 + cY * cT * cQ + (1 - cY) * cy * ai);
									if (ar) return ar
								}
					return 0
				}(a3, a4, cQ);
				ic && (aTq = ix.oK(a3, a4, ic)) < aTo && (aTp = ic, aTo = aTq, aAO || (aAO = !0, max = Math.floor(Math.sqrt(aTq)) + 1))
			}
			return aTp
		}(ix.a3g(ar))) && (ar = ix.j3(aEA), j1.zb(ar) || (ar = j1.zZ(ar)) !== c.t && a0f.a1W(ar, c.t)) ? aEA : 0
	}, this.aTj = function(player, ic) {
		ic = ix.j3(ic);
		if (j1.uZ(ic)) {
			if (j1.zb(ic)) ij.aTk[0] = c.c2;
			else if (j1.zZ(ic) !== ij.aTk[0]) return !1;
			for (var c1 = function(ar) {
					var a1g = j1.a1g,
						c1 = [];
					loop: for (var cS = 3; 0 <= cS; cS--) {
						var a1u = ar + a1g[cS];
						if (j1.zc(a1u)) {
							for (var id = j1.j2(a1u), ai = 0; ai < c1.length; ai++)
								if (id === c1[ai]) continue loop;
							ij.aTm[c1.length] = a1u, c1.push(id)
						}
					}
					return c1
				}(ic), b7 = c1.length, ai = 0; ai < b7; ai++)
				if (this.aTg(player, c1[ai]) || this.aTh(player, c1[ai])) return ij.aTm[0] = ij.aTm[ai], !0
		}
		return !1
	}, this.aTg = function(player, aEA) {
		for (var xU = y.xU[player], b7 = xU.length, a4Z = Math.max(q.aN(b7, 12), 1), a1g = j1.a1g, ai = 0; ai < b7; ai += a4Z)
			for (var a1Q = xU[ai], cS = 3; 0 <= cS; cS--) {
				var a1u = a1Q + a1g[cS];
				if (j1.zc(a1u) && aEA === j1.j2(a1u)) return !0
			}
		return !1
	}, this.aTh = function(player, aEA) {
		for (var xU = y.xU[player], b7 = xU.length, a1g = j1.a1g, ai = 0; ai < b7; ai++)
			for (var a1Q = xU[ai], cS = 3; 0 <= cS; cS--) {
				var a1u = a1Q + a1g[cS];
				if (j1.zc(a1u) && aEA === j1.j2(a1u)) return !0
			}
		return !1
	}
}

function aTs() {
	var aTt, aTv = new Uint16Array(8);

	function aTz(size, player) {
		for (var ai = y.bW[player].length - 1; size <= ai; ai--) j1.aU1(y.bW[player][ai], player)
	}
	this.b = function() {
		aTt = 0
	}, this.aTw = function(player, aTx) {
		return ij.aTk[1] = y.bW[player].length, ij.aTk[0] === c.c2 ? o9.aGr.aHE(player) : this.aHC(player, ij.aTk[0]), (0 !== ij.aTk[1] || 0 !== y.bW[player].length) && !(!aTx && ij.aTk[1] === y.bW[player].length || (ij.aTk[0] === c.c2 ? y.xW[
			player]++ : y.xX[player]++, 0))
	}, this.aTy = function(player) {
		aTz(ij.aTk[1], player), a0n.iu(player, ij.zr[0], ij.aTk[0]), aAZ.yd(player, !1)
	}, this.aHD = function(player, pn, b7, po) {
		var aU0 = q.aN(12 * y.ax[player], 1024);
		po -= po >= q.aN(y.ax[player], 2) ? aU0 : 0, aTz(b7, player), a0n.iu(player, po, pn), y.ax[player] -= po + aU0, aAZ.yd(player, !1)
	}, this.aHC = function(player, pn) {
		for (var vA, a1g = j1.a1g, ai = y.xT[player].length - 1; 0 <= ai; ai--)
			if (j1.aT4(y.xT[player][ai]))
				for (vA = 3; 0 <= vA; vA--)
					if (j1.zY(y.xT[player][ai] + a1g[vA]) && j1.zZ(y.xT[player][ai] + a1g[vA]) === pn) {
						y.bW[player].push(y.xT[player][ai]);
						break
					}
	}, this.aHE = function(player) {
		for (var a1g = j1.a1g, ai = y.xT[player].length - 1; 0 <= ai; ai--)
			if (j1.aT4(y.xT[player][ai]))
				for (var vA = 3; 0 <= vA; vA--)
					if (j1.zb(y.xT[player][ai] + a1g[vA])) {
						y.bW[player].push(y.xT[player][ai]);
						break
					}
	}, this.aGs = function(player, aU2) {
		var ai, cy, vA, a1i, b7 = y.xT[player].length,
			i = 256 <= b7 ? 12 : 32 <= b7 ? 6 : 1,
			cX = b7 - 1 - cN.cO(i),
			a1g = j1.a1g;
		aTt = 0;
		loop: for (ai = cX; 0 <= ai; ai -= i)
			for (vA = 3; 0 <= vA; vA--)
				if ((a1i = j1.zb(y.xT[player][ai] + a1g[vA]) ? c.c2 : j1.zZ(y.xT[player][ai] + a1g[vA])) === c.c2 || j1.zY(y.xT[player][ai] + a1g[vA]) && a1i !== player && (aU2 || a0f.a1W(player, a1i))) {
					for (cy = aTt - 1; 0 <= cy; cy--)
						if (aTv[cy] === a1i) continue loop;
					if (aTv[aTt] = a1i, 8 <= ++aTt) return !0
				}
		return 0 < aTt
	}, this.aGt = function(player, aU2) {
		var ai, vA, a1i, a1g = j1.a1g;
		for (aTt = 0, ai = y.xT[player].length - 1; 0 <= ai; ai--)
			for (vA = 3; 0 <= vA; vA--)
				if ((a1i = j1.zb(y.xT[player][ai] + a1g[vA]) ? c.c2 : j1.zZ(y.xT[player][ai] + a1g[vA])) === c.c2 || j1.zY(y.xT[player][ai] + a1g[vA]) && a1i !== player && (aU2 || a0f.a1W(player, a1i))) return aTv[aTt++] = a1i, !0;
		return !1
	}, this.aGv = function() {
		for (var cT, ai = aTt - 1; 0 <= ai; ai--)
			if (aTv[ai] === c.c2) {
				for (aTt--, cT = ai; cT < aTt; cT++) aTv[cT] = aTv[cT + 1];
				return !0
			} return !1
	}, this.aGu = function(player) {
		for (var cT, ai = aTt - 1; 0 <= ai; ai--)
			if (a0n.q5(player, aTv[ai]))
				for (aTt--, cT = ai; cT < aTt; cT++) aTv[cT] = aTv[cT + 1];
		return 0 === aTt
	}, this.aH2 = function() {
		for (var ai = aTt - 1; 0 <= ai; ai--)
			if (aa.bY.o2(aTv[ai])) return !0;
		return !1
	}, this.aH4 = function() {
		for (var ai = aTt - 1; 0 <= ai; ai--) aa.bY.o2(aTv[ai]) || (aTv[ai] = aTv[--aTt]);
		return 0 < aTt
	}, this.aH0 = function(player) {
		for (var cT, aU3 = aTv[0], aU4 = y.ax[aU3] + a0n.pv(aU3, player), ai = aTt - 1; 1 <= ai; ai--)(cT = y.ax[aTv[ai]] + a0n.pv(aTv[ai], player)) < aU4 && (aU3 = aTv[ai], aU4 = cT);
		return aU3
	}, this.aH6 = function(player) {
		var aY, aU5 = aTv[0];
		if (1 !== aTt)
			for (var aU6 = q.aN(y.oF[player] + y.oE[player], 2), aU7 = q.aN(y.oH[player] + y.oG[player], 2), cQ = aPW(aU6 - q.aN(y.oF[aU5] + y.oE[aU5], 2)) + aPW(aU7 - q.aN(y.oH[aU5] + y.oG[aU5], 2)), ai = aTt - 1; 1 <= ai; ai--)(aY = aPW(aU6 - q
				.aN(y.oF[aTv[ai]] + y.oE[aTv[ai]], 2)) + aPW(aU7 - q.aN(y.oH[aTv[ai]] + y.oG[aTv[ai]], 2))) < cQ && (cQ = aY, aU5 = aTv[ai]);
		return aU5
	}, this.aHB = function() {
		for (var aU8 = aTv, aU9 = aU8[0], ax = y.ax, aUA = ax[aU9], ai = aTt - 1; 1 <= ai; ai--) {
			var pG = aU8[ai],
				cT = ax[pG];
			aUA < cT && (aU9 = pG, aUA = cT)
		}
		return aU9
	}, this.aH5 = function() {
		return aTv[cN.cO(aTt)]
	}
}

function aJj() {
	this.ce = new Array(4), this.aUB = new Uint16Array(2), this.pM = new Uint16Array(2), this.aUC = new Int32Array(2), this.zr = new Uint32Array(2), this.aUD = new Uint32Array(2), this.aDs = new Uint8Array(4), this.aCc = new Uint8Array(4), this.aTm =
		new Uint32Array(4), this.aUE = new Uint32Array(5), this.aTk = new Uint32Array(8), this.ik = new Uint32Array(8), this.aEB = new Uint16Array(16), this.pN = new Uint16Array(512), this.aSn = new Uint16Array(512), this.aSo = new Uint16Array(512),
		this.aUF = new Uint16Array(0), this.b = function() {
			var b7 = gW.gX * gW.gY;
			this.aUF.length !== b7 && (this.aUF = new Uint16Array(b7))
		}, this.aUG = function(ce, d2) {
			return ce[0] = d2, ce
		}, this.aUH = function(ce, d2, d3) {
			return ce[0] = d2, ce[1] = d3, ce
		}, this.aUI = function(ce, d2, d3, d4) {
			return ce[0] = d2, ce[1] = d3, ce[2] = d4, ce
		}, this.aUJ = function(ce, d2, d3, d4, aUK) {
			return ce[0] = d2, ce[1] = d3, ce[2] = d4, ce[3] = aUK, ce
		}
}

function eL(aUL, aUM, aUN, rA) {
	var eE = document.createElement("textarea"),
		aUO = (this.cc = eE, !0);

	function aUP() {
		eE.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aUM && aa.ab.eA(eE, 5)
		}, this.eP = function(rW) {
			eE.value = rW
		}, this.eZ = function() {
			return eE.value
		}, this.eI = function() {
			eE.select()
		}, this.clear = function() {
			eE.value = ""
		}, this.eJ = function() {
			aUO && navigator.clipboard ? (eE.select(), navigator.clipboard.writeText(eE.value).catch(function() {
				aUO = !1, aUP()
			})) : aUP()
		}, eE.setAttribute("id", "textArea" + dx.fH.aPj++), eE.setAttribute("autocomplete", "off"), aUL && eE.setAttribute("placeholder", aUL), eE.style.top = "0", eE.style.left = "0", eE.style.width = "100%", eE.style.height = "100%", eE.style
		.userSelect = "none", eE.style.outline = "none", eE.style.resize = "none", eE.style.border = "none", eE.style.color = v.w, eE.style.backgroundColor = v.gf, rA ? (eE.style.fontSize = "1em", eE.rows = 6, eE.style.padding = "0.25em") : (eE.style
			.padding = "0.45em", eE.style.fontSize = "1.2em"), aUN && eE.addEventListener("input", function(cc) {
			aUN(cc)
		}), eE.addEventListener("focus", function() {
			aW.a8V++
		}), eE.addEventListener("blur", function() {
			aW.a8V--
		})
}

function aJ9() {
	var aFy = new Uint8Array(c.c2),
		aUQ = new Uint16Array(c.c2),
		aUR = new Uint16Array(c.c2),
		aUS = new Uint8Array(c.c2),
		aUT = (this.po = new Uint8Array(c.c2), new Uint16Array(c.c2)),
		aUU = new Uint16Array(c.c2);

	function aUa(ai) {
		aFy[ai] = 1 + q.aN(aUT[ai] * cN.random(), 10 * cN.value(100))
	}
	this.aFK = null, this.aH3 = [97, 94, 70, 40, 20, 0, 100], this.aTV = [500, 450, 400, 300, 80, 50, 100], this.aGz = [0, 0, 5, 25, 50, 100, 0], this.a69 = [60, 74, 112, 200, 256, 512, 512], this.uT = [1, 2, 3, 4, 6, 8, 1], this.aEE = [500, 450,
		400, 300, 80, 50, 100
	], this.aUV = [100, 150, 250, 400, 600, 1e3, 100], this.c7 = function() {
		this.aFK = [L(438), L(439), L(440), L(441), L(442), L(443), "H Bot"]
	}, this.b = function() {
		aFy.fill(0), aUQ.fill(0), aUR.fill(0), aUS.fill(0), this.po.fill(0), aUT.fill(0), aUU.fill(0);
		var aUW = c.aI;
		if (9 === c.d) this.aUX();
		else if (c.aH)
			if (3 === c.data.botDifficultyType)
				for (ai = c.aL - 1; 0 <= ai; ai--) {
					var ca = ai + aUW;
					this.po[ca] = c.data.botDifficultyData[ca]
				} else if (2 === c.data.botDifficultyType)
					for (ai = c.aL - 1; 0 <= ai; ai--) this.po[ca = ai + aUW] = c.data.botDifficultyTeam[cD.c0[cD.c1[ca]]];
				else if (1 === c.data.botDifficultyType) {
			var aUZ = this.aFK.length;
			for (ai = c.aL - 1; 0 <= ai; ai--) this.po[ai + aUW] = ai % aUZ
		} else
			for (aUZ = c.data.botDifficultyValue, ai = c.aL - 1; 0 <= ai; ai--) this.po[ai + aUW] = aUZ;
		else
			for (var aUY = 8 === c.d ? 1 : 0, ai = c.aL - 1; 0 <= ai; ai--) this.po[ai + aUW] = aUY;
		for (ai = 0; ai < aUW; ai++) this.po[ai] = 6;
		var b7 = c.c2;
		for (ai = 0; ai < b7; ai++) this.po[ai] <= 2 ? (aUS[ai] = 5, aUT[ai] = aUU[ai] = 1040, 0 === this.po[ai] ? (aUQ[ai] = 980, aUR[ai] = 980) : 1 === this.po[ai] ? (aUQ[ai] = 980, aUR[ai] = 920, aUT[ai] = aUU[ai] = 1100) : (aUQ[ai] = 825,
				aUR[ai] = 750)) : this.po[ai] <= 4 ? (aUS[ai] = 1 + cN.cO(20), 3 === this.po[ai] ? (aUQ[ai] = aUR[ai] = 500, aUT[ai] = aUU[ai] = 1e3) : (aUU[ai] = 250 + cN.cO(1501), aUT[ai] = 500 + cN.cO(501), aUQ[ai] = 300 + cN.cO(201), aUR[
				ai] = 100 + cN.cO(201))) : this.po[ai] <= 5 ? (aUT[ai] = 1e3, aUU[ai] = 1e3, aUS[ai] = 35 + cN.cO(16), aUQ[ai] = 300 + cN.cO(201), aUR[ai] = 50 + cN.cO(101)) : (aUT[ai] = aUU[ai] = 800, aUS[ai] = 5, aUQ[ai] = 10, aUR[ai] = 250),
			aUa(ai)
	}, this.aUX = function() {
		for (var ar = cv.a6C, aUW = c.aI, ai = ar - 1; 0 <= ai; ai--) this.po[ai + aUW] = 0;
		for (var cT = 0; cT < 6; cT++) {
			for (ai = ar + cv.cw[cT] - 1; ar <= ai; ai--) this.po[ai + aUW] = cT;
			ar += cv.cw[cT]
		}
	}, this.aGo = function(pG, value) {
		aFy[pG] = Math.min(value, aFy[pG])
	}, this.b8 = function(pG) {
		0 == --aFy[pG] && ! function(pG) {
			(function(pG) {
				aUT[pG] !== aUU[pG] && (aUT[pG] += aUT[pG] < aUU[pG] ? 3 : -3);
				aUQ[pG] !== aUR[pG] && (aUQ[pG] += aUQ[pG] < aUR[pG] ? aUS[pG] : -aUS[pG], aUQ[pG] = (Math.abs(aUQ[pG] - aUR[pG]) <= aUS[pG] ? aUR : aUQ)[pG]);
				aFy[pG] = q.aN(aUT[pG], 10)
			})(pG), o9.qE.aGj(pG, q.aN(aUQ[pG] * y.ax[pG], 1e3))
		}(pG)
	}, this.yC = function(pG, cW) {
		aUT[pG] = aUU[pG] = cW
	}
}

function ex(id, un, aUd) {
	var eh, xC;

	function aUi() {
		xC.aFc.innerHTML += "<br>" + L(446)
	}

	function aUk() {
		var cT = 1;
		dx.ej(4, 1, new x9(L(447), L(448), !1, [new eG("🔄 Reload", function() {
			cT && (setTimeout(function() {
				dx.ej(1)
			}, 5e3), aT.aU.a9p()), cT = 0
		}, v.a9q)]))
	}

	function aUh() {
		jX.kX(90), jX.mD(30, Math.floor(q.pow(30) * Math.random())), jX.mD(30, Math.floor(q.pow(30) * Math.random())), jX.mD(30, Math.floor(q.pow(30) * Math.random())), jW.b(jX.lf), ep.eq.er(110, hS.et.aA8(hS.et.aA9(15))), jZ.mn.aO2()
	}
	this.aUe = !0, this.aUf = id, this.show = function() {
		eh.show(), this.resize(), 15 === id ? (jZ.fH.aUg(id) ? aUh : aUi)() : 16 === id ? jZ.fH.aUg(id) ? jZ.rs.vV(2) : aUi() : 17 === id ? jZ.fH.aUg(id) ? jZ.rs.vV(3) : aUi() : 18 === id ? (jZ.fH.close(0, 3253), jZ.fH.tP(0, id, 0), aUi()) :
			21 === id ? jZ.fH.aUg(id) ? jZ.aUj.aPl(un.jb, un.mS, un.mT) : aUi() : 22 === id ? jZ.fH.aUg(id) ? jZ.aUj.aPm(un.jb, un.w8, un.w9) : aUi() : 23 === id ? jZ.fH.aUg(id) ? jZ.aUj.aPo(un.a7W, un.cm) : aUi() : 24 === id ? jZ.fH.aUg(id) ? jZ
			.aUj.aPp(un.a7W, un.mS, un.mT) : aUi() : 25 === id ? jZ.fH.aUg(id) ? jZ.mn.aO4(un) : aUi() : 28 === id ? jZ.fH.aUg(id) ? jZ.aUj.aPn(un.jb, un.w8, un.w9) : aUi() : 29 === id ? jZ.fH.aUg(id) ? jZ.mn.a9Y(un) : aUi() : 30 === id && (jZ.fH
				.aUg(id) ? vi.a6v() || aUk() : aUi())
	}, this.aD7 = function() {
		15 === id ? aUh() : 16 === id ? jZ.rs.vV(2) : 17 === id ? jZ.rs.vV(3) : 18 === id ? dx.ej(8, this.el, new ex(16)) : 21 === id ? jZ.aUj.aPl(un.jb, un.mS, un.mT) : 22 === id ? jZ.aUj.aPm(un.jb, un.w8, un.w9) : 23 === id ? jZ.aUj.aPo(un.a7W,
			un.cm) : 24 === id ? jZ.aUj.aPp(un.a7W, un.mS, un.mT) : 25 === id ? jZ.mn.aO4(un) : 28 === id ? jZ.aUj.aPn(un.jb, un.w8, un.w9) : 29 === id ? jZ.mn.a9Y(un) : 30 === id ? vi.a6v() || aUk() : 1e3 === id && (this.aUf = id = 25, jZ.mn
			.aO4(un))
	}, this.jh = function(code, aq, data) {
		!aq && code !== id || (15 === code || 16 === code ? dx.ej(7, this.el) : 17 === code ? (jZ.fH.close(0, 3252), ep.fH.aEd(0), ep.buffer.data[117].ot && 0 < ep.buffer.data[117].ot.length ? (aq = ep.fH.a9d(0), ep.eq.er(105, aq.hT), ep.eq.er(
			106, aq.password), dx.ej(8, this.el, new ex(16))) : (ep.eq.er(105, ""), dx.fH.a6z())) : 21 === code ? dx.ej(10, this.el, new aLj(data)) : 23 === code ? dx.ej(13, this.el, new a7F({
			data: data,
			a7W: un.a7W
		})) : 25 === code ? (dx.fH.aID.hT = un.hT, ep.fJ.kQ(un.hT), dx.ej(15, this.el)) : 30 === code && (data ? dx.ej(1) : aUk()))
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), xC.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, eh = new eF(L(444), [new eG("⬅️ " + L(22), function() {
		aUd ? dx.ej(29) : dx.fH.a6z()
	})]), xC = new xD(eh.eM, L(445))
}

function aJM() {
	var aUl = [
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
		aUm = [
			[4, 4, 4, 20],
			[4, 0, 0, 27],
			[0, 4, 0, 31],
			[0, 0, 4, 27],
			[4, 4, 0, 31],
			[4, 0, 4, 31],
			[0, 4, 4, 31],
			[4, 4, 4, 14],
			[4, 4, 4, 13]
		];
	this.aUn = null, this.aUo = null, this.aUp = null, this.aUq = null, this.aUr = null, this.aUs = null, this.aUt = null, this.aUu = null, this.aUv = null, this.aUw = null;

	function aV1(cX, gJ) {
		for (var aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, ai = cX; ai < gJ; ai++) aUn[ai] = q.aN(64 * cN.random(), cN.value(100)) << 2, aUo[ai] = q.aN(64 * cN.random(), cN.value(100)) << 2, aUp[ai] = q.aN(64 * cN.random(), cN.value(100)) << 2
	}

	function aV0(cX, gJ) {
		for (var colorsData = c.data.colorsData, aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, ai = cX; ai < gJ; ai++) {
			var d0 = colorsData[ai];
			aUn[ai] = 4 * (d0 >> 12), aUo[ai] = 4 * (d0 >> 6 & 63), aUp[ai] = 4 * (63 & d0)
		}
	}

	function aVH(ar, aVJ) {
		xy[ar] = 0, xy[ar + 1] = 0, xy[ar + 2] = aVJ, xy[ar + 3] = 0, aVK(ar)
	}

	function aVK(ar) {
		var a3;
		ns.aVL || (a3 = j1.g7(ar), ar = j1.g8(ar), ns.aVL = a3 >= gZ.aVM[0] && a3 <= gZ.aVM[2] && ar >= gZ.aVM[1] && ar <= gZ.aVM[3])
	}
	this.a1g = new Int32Array(4), this.a1r = new Int32Array(8), this.c7 = function() {
		var a1g = this.a1g,
			a1g = (a1g[0] = -4 * gW.gX, a1g[1] = 4, a1g[2] = -a1g[0], a1g[3] = -a1g[1], this.a1r);
		a1g[0] = -4 * gW.gX - 4, a1g[1] = -4 * gW.gX, a1g[2] = -4 * gW.gX + 4, a1g[3] = -4, a1g[4] = 4, a1g[5] = 4 * gW.gX - 4, a1g[6] = 4 * gW.gX, a1g[7] = 4 * gW.gX + 4
	}, this.b = function() {
		if (this.aUn ? (this.aUn.fill(0), this.aUo.fill(0), this.aUp.fill(0), this.aUq.fill(0), this.aUr.fill(0), this.aUs.fill(0), this.aUt.fill(0), this.aUu.fill(0), this.aUv.fill(0), this.aUw.fill(0), this.a9M.fill(0)) : (this.aUn =
				new Uint8Array(c.c2), this.aUo = new Uint8Array(c.c2), this.aUp = new Uint8Array(c.c2), this.aUq = new Uint8Array(c.c2), this.aUr = new Uint8Array(c.c2), this.aUs = new Uint8Array(c.c2), this.aUt = new Uint8Array(c.c2), this.aUu =
				new Uint8Array(c.c2), this.aUv = new Uint8Array(c.c2), this.aUw = new Uint8Array(c.c2), this.a9M = new Uint8Array(c.c2)), c.bJ)
			for (var c3 = cD.c3, aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, ai = c.c2 - 1; 0 <= ai; ai--) {
				var cY = c3[ai],
					b6 = q.aN((aUm[cY][3] + 1) * cN.random(), cN.value(100));
				aUn[ai] = aUl[cY][0] + b6 * aUm[cY][0], aUo[ai] = aUl[cY][1] + b6 * aUm[cY][1], aUp[ai] = aUl[cY][2] + b6 * aUm[cY][2]
			} else 0 === c.data.colorsType ? c.data.selectableColor ? (aV0(0, c.aI), aV1(c.aI, c.c2)) : aV1(0, c.c2) : aV0(0, c.c2);
		! function() {
			var ai, cS, aUn = j1.aUn,
				aUo = j1.aUo,
				aUp = j1.aUp;
			for (ai = c.c2 - 1; 0 <= ai; ai--) cS = q.aN(aUn[ai] + aUo[ai] + aUp[ai], 3), aUn[ai] += pB(cS - aUn[ai], 2), aUo[ai] += pB(cS - aUo[ai], 2), aUp[ai] += pB(cS - aUp[ai], 2), aUn[ai] -= aUn[ai] % 4, aUo[ai] -= aUo[ai] % 4, aUp[ai] -=
				aUp[ai] % 4
		}(),
		function() {
			for (var b7 = c.c2, aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, aUq = j1.aUq, ai = 0; ai < b7; ai++) aUn[ai] += ai >> 7, aUo[ai] += ai >> 5 & 3, aUp[ai] += ai >> 3 & 3, aUq[ai] = 7 & ai
		}(), this.aV4(),
			function() {
				for (var b7 = c.c2, aUr = j1.aUr, aUs = j1.aUs, aUt = j1.aUt, aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, ai = 0; ai < b7; ai++) {
					var mj = aUn[ai],
						bg = aUo[ai],
						cT = aUp[ai];
					60 <= mj + bg + cT ? (aUr[ai] = Math.max(mj - 40, 3 & mj), aUs[ai] = Math.max(bg - 40, 3 & bg), aUt[ai] = Math.max(cT - 40, 3 & cT)) : (aUr[ai] = mj + 40, aUs[ai] = bg + 40, aUt[ai] = cT + 40)
				}
			}(),
			function() {
				for (var b7 = c.c2, aUu = j1.aUu, aUv = j1.aUv, aUw = j1.aUw, aUn = j1.aUn, aUo = j1.aUo, aUp = j1.aUp, ai = 0; ai < b7; ai++) {
					var mj = aUn[ai],
						bg = aUo[ai],
						cT = aUp[ai];
					688 <= mj + bg + cT ? (aUu[ai] = mj - 88, aUv[ai] = bg - 88, aUw[ai] = cT - 88) : (aUu[ai] = Math.min(mj + 88, 252 + (3 & mj)), aUv[ai] = Math.min(bg + 88, 252 + (3 & bg)), aUw[ai] = Math.min(cT + 88, 252 + (3 & cT)))
				}
			}()
	}, this.aV7 = function(player) {
		var ce = ij.aDs;
		return ce[0] = this.aUn[player], ce[1] = this.aUo[player], ce[2] = this.aUp[player], ce
	}, this.aV4 = function() {
		for (var ai = c.c2 - 1; 0 <= ai; ai--) this.a9M[ai] = this.aUn[ai] + this.aUo[ai] + this.aUp[ai] < 280 ? 0 : 1
	}, this.g7 = function(ar) {
		return q.aN(ar, 4) % gW.gX
	}, this.g8 = function(ar) {
		return q.aN(ar, 4 * gW.gX)
	}, this.aT3 = function(a3, a4) {
		return Math.floor(4 * (a4 * gW.gX + a3))
	}, this.aTG = function(ar) {
		var a1g = this.a1g;
		return this.aV8(ar + a1g[0]) || this.aV8(ar + a1g[1]) || this.aV8(ar + a1g[2]) || this.aV8(ar + a1g[3])
	}, this.aTr = function(ar) {
		var a1g = this.a1g;
		return this.zc(ar + a1g[0]) || this.zc(ar + a1g[1]) || this.zc(ar + a1g[2]) || this.zc(ar + a1g[3])
	}, this.aHk = function(ar, player) {
		var a1g = this.a1g;
		return this.a4G(ar + a1g[0], player) || this.a4G(ar + a1g[1], player) || this.a4G(ar + a1g[2], player) || this.a4G(ar + a1g[3], player)
	}, this.aV9 = function(ai, aVA, aVB, aVC) {
		this.aUn[ai] = aVA >> 16, this.aUo[ai] = aVA >> 8 & 255, this.aUp[ai] = 255 & aVA, this.aUr[ai] = aVB >> 16, this.aUs[ai] = aVB >> 8 & 255, this.aUt[ai] = 255 & aVB, this.aUu[ai] = aVC >> 16, this.aUv[ai] = aVC >> 8 & 255, this.aUw[ai] =
			255 & aVC
	}, this.aVD = function(ai) {
		return [(this.aUn[ai] << 16) + (this.aUo[ai] << 8) + this.aUp[ai], (this.aUr[ai] << 16) + (this.aUs[ai] << 8) + this.aUt[ai], (this.aUu[ai] << 16) + (this.aUv[ai] << 8) + this.aUw[ai]]
	}, this.zY = function(ar) {
		return 208 <= xy[ar + 3]
	}, this.a5q = function(player, ar) {
		return this.zY(ar) && this.aAW(player, ar)
	}, this.aAW = function(player, ar) {
		return player === this.zZ(ar)
	}, this.aVE = function(ar) {
		return 208 <= xy[ar + 3] && xy[ar + 3] < 224
	}, this.aT4 = function(ar) {
		return 224 <= xy[ar + 3] && xy[ar + 3] < 248
	}, this.aVF = function(ar) {
		return 248 <= xy[ar + 3]
	}, this.aM9 = function(ar) {
		for (var a1g = this.a1g, ai = 3; 0 <= ai; ai--)
			if (this.oS(ar + a1g[ai])) return !0;
		return !1
	}, this.uZ = function(ar) {
		return this.zY(ar) || this.zb(ar)
	}, this.oS = function(ar) {
		return 0 === xy[ar + 3] && 2 === xy[ar + 2]
	}, this.zb = function(ar) {
		return 0 === xy[ar + 3] && 1 === xy[ar + 2]
	}, this.wW = function(ar) {
		return 0 === xy[ar + 3] && 3 === xy[ar + 2]
	}, this.zc = function(ar) {
		return 0 === xy[ar + 3] && 5 === xy[ar + 2]
	}, this.aV8 = function(ar) {
		return 0 === xy[ar + 3] && 3 <= xy[ar + 2]
	}, this.j2 = function(ar) {
		return (xy[ar] >> 1 << 8) + xy[ar + 1]
	}, this.aVG = function(ar) {
		return 1 & xy[ar]
	}, this.a4G = function(ar, player) {
		return this.zb(ar) || this.zY(ar) && player !== this.zZ(ar)
	}, this.zZ = function(ar) {
		return ((3 & xy[ar]) << 7) + ((3 & xy[ar + 1]) << 5) + ((3 & xy[ar + 2]) << 3) + (7 & xy[ar + 3])
	}, this.aTJ = function(ar) {
		aVH(ar, 1)
	}, this.aVI = function(ar) {
		aVH(ar, 2)
	}, this.aT5 = function(ar, player) {
		xy[ar] = this.aUn[player], xy[ar + 1] = this.aUo[player], xy[ar + 2] = this.aUp[player], xy[ar + 3] = 208 + this.aUq[player], aVK(ar)
	}, this.a19 = function(ar, player) {
		xy[ar] = this.aUr[player], xy[ar + 1] = this.aUs[player], xy[ar + 2] = this.aUt[player], xy[ar + 3] = 224 + this.aUq[player], aVK(ar)
	}, this.aU1 = function(ar, player) {
		xy[ar] = this.aUu[player], xy[ar + 1] = this.aUv[player], xy[ar + 2] = this.aUw[player], xy[ar + 3] = 248 + this.aUq[player], aVK(ar)
	}
}

function aJe() {
	var input;

	function aVN(cc) {
		(cc = cc.target.files) && 0 < cc.length && aB1.aVP(cc[0])
	}

	function aVT(cc) {
		var cY = new Image;
		cY.onload = aBE, cY.src = cc.target.result
	}

	function aBE(cc) {
		var cc = cc.target,
			aS = cc.width,
			aY = cc.height,
			aVU = ep.buffer.data[162].value,
			max = Math.min(gW.tz, aVU),
			aVU = (max = aT.id || di.dj() ? Math.min(1400, aVU) : max) / Math.max(aS, aY);
		if (aVU < 1 && (aS = Math.floor(aVU * aS + .125), aY = Math.floor(aVU * aY + .125)), max < aS || max < aY || aS < 10 || aY < 10) aVU = "Invalid Image Dimensions!", aT.oi ? aT.oi.showToast(aVU) : alert(aVU);
		else {
			for (var max = document.createElement("canvas"), aVU = (max.width = aS, max.height = aY, max.getContext("2d")), aVW = document.createElement("canvas"), aVX = (aVW.width = cc.width, aVW.height = cc.height, aVW.getContext("2d")), cc = (aVX
					.drawImage(cc, 0, 0), aVX.getImageData(0, 0, aVW.width, aVW.height)), aVX = aVU.createImageData(aS, aY), src = cc.data, aVa = aVX.data, gA = aVW.width / aS, gD = aVW.height / aY, a4 = 0; a4 < aY; a4++)
				for (var a3 = 0; a3 < aS; a3++) {
					var aVb = Math.floor(a3 * gA),
						aVb = 4 * (Math.floor(a4 * gD) * aVW.width + aVb),
						aVe = 4 * (a4 * aS + a3);
					aVa[aVe] = src[aVb], aVa[1 + aVe] = src[1 + aVb], aVa[2 + aVe] = src[2 + aVb], aVa[3 + aVe] = 255
				}
			aVU.putImageData(aVX, 0, 0), 20 === dx.jf && dx.jg().aBE(max)
		}
	}
	this.b = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aVN
	}, this.kJ = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aB9 = function() {
		input.click()
	}, this.aVP = function(aVQ) {
		var ce = aVQ.name.split("."),
			ce = ce[ce.length - 1].toLowerCase();
		"gif" !== ce && "jpg" !== ce && "jpeg" !== ce && "png" !== ce || ((ce = new FileReader).onload = aVT, ce.readAsDataURL(aVQ))
	}
}

function aNA(r1, data, ot) {
	var b7 = data.aN8.length,
		aVf = document.createElement("div"),
		aVg = document.createElement("div"),
		qQ = document.createElement("div"),
		aVh = new Array(b7),
		ey = new Array(b7),
		aVi = new Array(data.aN6.length),
		aVj = aa.color.aDr(70, 70, 0, .35);

	function iP() {
		this.style.backgroundColor = aa.color.iP(aVj, 160)
	}

	function aVn() {
		this.style.backgroundColor = aVj
	}

	function aFh() {
		var cy;
		for (r1.style.font = aa.ab.ac(0, aa.ab.aVp(.026, .5, .03)), ai = 1; ai < aVi.length; ai++) aa.ab.eA(aVi[ai], 4);
		if (aa.ab.eA(aVf, 2), b7) {
			for (var wU, nc = aVf.offsetWidth, nd = qQ.offsetWidth, ai = 0; ai < aVi.length; ai++) wU = .01 * data.aN9[ai] * nd, aVi[ai].style.width = (100 * wU / nc).toFixed(2) + "%";
			var b6 = data.aN8[0].length;
			for (ai = 0; ai < b7; ai++)
				for (aa.ab.eA(aVh[ai], 2), cy = 1; cy < b6; cy++) aa.ab.eA(ey[ai][cy], 4);
			aVg.aVk && (aVg.scrollTop = aVg.aVk)
		}
	}
	this.resize = function() {
			aFh(), aFh()
		}, r1.style.display = "flex", r1.style.flexDirection = "column", aVg.style.overflowX = "hidden", aVg.style.overflowY = "auto", aVg.addEventListener("scroll", function() {
			this.aVk = this.scrollTop, ot && ot.aNB && (dx.fH.aLL[ot.aNB] = this.scrollTop)
		}),
		function() {
			var cS, ai, aN8 = data.aN8,
				b6 = b7 ? aN8[0].length : 0;
			for (ai = 0; ai < b7; ai++) {
				aVh[ai] = document.createElement("div"), aVh[ai].style.backgroundColor = function(ai) {
					return ai % 2 == 1 ? aa.color.aDr(130, 130, 130, .35) : v.dh
				}(ai), aVh[ai].style.width = "100%", aVh[ai].style.display = "flex", ey[ai] = new Array(b6);
				for (var cy = 0; cy < b6; cy++) ey[ai][cy] = cS = document.createElement("div"), cS.style.display = "flex", cS.style.justifyContent = "center", cS.style.wordBreak = "break-all", cS.style.padding = "0.4em 0em", cS.style.width = data
					.aN9[cy] + "%", cS.textContent = aN8[ai][cy].d0, 1 === aN8[ai][cy].av && (cS.name = "" + ai, cS.style.color = v.hL, cS.style.backgroundColor = aVj, cS.addEventListener("mouseover", iP), cS.addEventListener("mouseout", aVn),
						function(cS, hT, mh) {
							2147483647 !== mh && cS.addEventListener("click", function() {
								jX.kX(30), jX.mD(30, hT), jW.b(jX.lf), this.style.backgroundColor = aVj, dx.ej(8, dx.jf, new ex(25, {
									action: 0,
									hT: hS.et.aA8(hS.et.aA9(5)),
									mh: mh
								}))
							})
						}(cS, aN8[ai][cy].hT, aN8[ai][cy].mh)), aVh[ai].appendChild(cS)
			}
			for (aVf.style.display = "flex", aVf.style.backgroundColor = aa.color.aDr(0, 120, 0, .35), ai = 0; ai < aVi.length; ai++) aVi[ai] = cS = document.createElement("div"), cS.style.display = "flex", cS.style.justifyContent = "center", cS
				.style.wordBreak = "break-all", cS.style.padding = "0.4em 0em", cS.style.width = data.aN9[ai] + "%", cS.innerHTML = data.aN6[ai], aVf.appendChild(cS)
		}();
	for (var ai = 0; ai < b7; ai++) qQ.appendChild(aVh[ai]);
	aVg.appendChild(qQ), r1.appendChild(aVf), r1.appendChild(aVg), ot && ot.aNB && (aVg.aVk = dx.fH.aLL[ot.aNB])
}

function qj() {
	var aVq = 0;

	function aVu(be, id) {
		console.log(be), aVq || (id ? 1 === id ? e.aEp = L(450) + ": " + be : dx.ej(4, 3, new x9(L(451), be, 1)) : dx.ej(4, 3, new x9("⚠️ " + L(449), be, 1)))
	}
	this.ec = function(be, aVr) {
		var cr, ht;
		return aVq = aVr, es.et.wH(es.et.wI(es.et.a9w(be))), e.aEp = "", !! function() {
			if (jW.size < 10) aVu("File Too Small");
			else {
				var aVx = jW.jc(12),
					hU = (aVx !== lh.rVersion && (hU = "Incompatible Version   Required: " + lh.rVersion, aVu(hU = (hU += "   Found: " + aVx) + ("   Compatible at " + jZ.fH.a9C() + "/" + aVx), 1)), jW.jc(12)),
					aVy = jW.jc(31);
				if (aVy !== jW.size) aVu("Size Error: Stated Size " + aVy + " Actual Size " + jW.size);
				else if (function(aY, aVx) {
						for (var pG = jW.lf, b7 = jW.size, vd = aVx, ai = 3; ai < b7; ai++) vd = vd + pG[ai] & 4095;
						return vd === aY || (aVu("Hash Error: " + vd + " " + aY + " " + b7), !1)
					}(hU, aVx)) return 1
			}
			return
		}() && (cr = jW, (ht = c.data = new aW0).mapType = cr.jc(2), ht.mapProceduralIndex = cr.jc(8), ht.mapRealisticIndex = cr.jc(8), ht.mapSeed = cr.jc(14), ht.mapName = cr.aW1(5), 2 === ht.mapType && cr.aW2(), ht.passableWater = cr.jc(1),
			ht.passableMountains = cr.jc(1), ht.playerCount = cr.jc(10), ht.humanCount = cr.jc(10), ht.selectedPlayer = cr.jc(9), ht.gameMode = cr.jc(1), ht.playerMode = cr.jc(2), ht.battleRoyaleMode = cr.jc(2), ht.numberTeams = cr.jc(4), ht
			.isZombieMode = cr.jc(1), ht.isContest = cr.jc(1), ht.isReplay = cr.jc(1), ht.elo = cr.aW3(2, 14, 2), ht.colorsType = cr.jc(1), ht.colorsPersonalized = cr.jc(1), ht.colorsData = cr.aW3(10, 18, 512), ht.selectableColor = cr.jc(1),
			ht.teamPlayerCount = cr.aW3(4, 10, 9), ht.neutralBots = cr.jc(1), ht.botDifficultyType = cr.jc(2), ht.botDifficultyValue = cr.jc(4), ht.botDifficultyTeam = cr.aW3(4, 4, 9), ht.botDifficultyData = cr.aW3(10, 4, 512), ht
			.spawningType = cr.jc(2), ht.spawningSeed = cr.jc(14), ht.spawningData = cr.aW3(11, 12, 1024), ht.selectableSpawn = cr.jc(1), ht.playerNamesType = cr.jc(2), ht.playerNamesData = cr.aW4(10, 5, 512), ht.selectableName = cr.jc(1), ht
			.aIncomeType = cr.jc(2), ht.aIncomeValue = cr.jc(8), ht.aIncomeData = cr.aW3(10, 8, 512), ht.tIncomeType = cr.jc(2), ht.tIncomeValue = cr.jc(8), ht.tIncomeData = cr.aW3(10, 8, 512), ht.iIncomeType = cr.jc(2), ht.iIncomeValue = cr
			.jc(8), ht.iIncomeData = cr.aW3(10, 8, 512), ht.sResourcesType = cr.jc(2), ht.sResourcesValue = cr.jc(11), ht.sResourcesData = cr.aW3(10, 11, 512), ht.aAA = cr.aW3(10, 30, 0), !! function() {
				var cr = jW,
					wC = cr.jc(5),
					aW5 = cr.jc(30),
					aW6 = cr.jc(30);
				if (aW5 + aW6 > 8 * cr.size) return void aVu("Corrupted File");
				return function(b7) {
						var aW9 = new Uint8Array(b7),
							aWA = new Uint16Array(b7),
							aWB = new Uint32Array(b7),
							aWC = new Uint32Array(b7);
						eR.eS.sj = aW9, eR.eS.sk = aWA, eR.eS.sl = aWB, eR.eS.sm = aWC;
						for (var ai = 0; ai < b7; ai++) {
							var id = jW.jc(4);
							aW9[ai] = id, aWA[ai] = jW.jc(9), 0 === id ? aWB[ai] = jW.jc(22) : 1 === id ? (aWB[ai] = jW.jc(10), aWC[ai] = jW.jc(10)) : 2 === id ? (aWB[ai] = jW.jc(10), aWC[ai] = jW.jc(9)) : 3 === id ? (aWB[ai] = jW.jc(10),
								aWC[ai] = jW.jc(27)) : 4 === id ? (aWB[ai] = jW.jc(10), aWC[ai] = jW.jc(16)) : 5 === id || 6 === id ? aWB[ai] = jW.jc(10) : 7 === id ? aWB[ai] = jW.jc(1) : 10 === id && (aWB[ai] = jW.jc(20), aWC[ai] = jW
								.jc(22))
						}
					}(aW5),
					function(b7, wC) {
						var so = new Uint8Array(b7),
							sq = new Array(b7);
						sq.fill(0), eR.eS.so = so, eR.eS.sq = sq;
						for (var ai = 0; ai < b7; ai++) so[ai] = jW.jc(1), sq[ai] = jW.jc(wC)
					}(aW6, wC), 1
			}()) && (jW.f7 < 8 * jW.size - 13 || jW.f7 > 8 * jW.size ? (aVu("Out Of Bounds Error: " + jW.f7 + " " + 8 * jW.size), !1) : (eR.eS.eT = be, 2 !== c.data.mapType || (aVu("Load base64 image...", 2), aVr)))
	}, this.aVv = function(m8, aVw) {
		var pT = document.createElement("canvas"),
			pU = pT.getContext("2d");
		if (pT.width = m8.width, pT.height = m8.height, pU.drawImage(m8, 0, 0), c.data.canvas = pT, aVq || aVw) return c.bH ? void 0 : (c.data.mapType = 2, dx.eX(), void dx.ej(19));
		eR.ea()
	}
}

function aWD() {
	var aWE = [],
		aWF = [],
		aWG = 0;

	function aWH(ce, kZ, kf, aWM) {
		var b7 = ce.length;
		if (0 === b7) return "";
		var be = "@" + ce[0];
		if (1 === b7) return be + kZ + aWM;
		for (var ai = 1; ai < b7 - 1; ai++) be += ", @" + ce[ai];
		return be + " and @" + ce[b7 - 1] + kf + aWM
	}
	this.b = function() {
		var be = aWH(aWF, " is", " are", " in the lobby.");
		be.length && hq.message.aHW({
			id: 7,
			hU: be
		}), aWE = [], aWF = [], aWG = 0
	}, this.aWI = function(aWJ) {
		return hq.aWK !== aWJ && (aWJ = hS.et.b3(aWJ, 5), !!ep.fJ.qz(aWJ)) && (aWF.push(aWJ), !0)
	}, this.join = function(player) {
		hq.aWK !== player.hT && (player = hS.et.b3(player.hT, 5), ep.fJ.qz(player)) && aWE.push(player)
	}, this.aWL = function() {
		var kZ, kf;
		++aWG < 3 || (aWG = 0, kZ = aWH(aWF, "", "", " entered the lobby!"), (kZ = (kf = aWH(aWE, "", "", " joined a game!")).length ? kZ.length ? kZ + " " + kf : kf : kZ).length && hq.message.aHW({
			id: 7,
			hU: kZ
		}), aWE = [], aWF = [])
	}
}

function aNa() {
	this.ec = function(zk) {
		for (var wG = jW, size = wG.jc(zk), zn = 7 + 9 * wG.jc(1), ce = [], ai = 0; ai < size; ai++) ce.push(String.fromCharCode(wG.jc(zn)));
		return ce.join("")
	}
}

function aRv() {
	this.aG3 = function(m4, player) {
		e.a57(c.t, player, m4), jZ.tQ.aBW(m4, player)
	}, this.a5j = function(player) {
		e.a5A(player, 0), jZ.tQ.aBZ(player)
	}, this.a5d = function(a5K, player) {
		e.aFP(a5K, player), jZ.tQ.aBa(a5K, player)
	}, this.aMp = function() {
		c.aH || c.bl || jZ.aWN.aMp()
	}
}

function aHe() {
	this.kH = function() {
		if (2 === c.yG) c.yL = 2;
		else {
			if (8 === c.d) aa.bY.o2(0) || 0 === y.an[0] ? c.a94 = 1 : aa.bY.o2(1) || 0 === y.an[1] ? c.a94 = 0 : c.a94 = +(y.aO[1] > y.aO[0]);
			else {
				if (c.bJ) {
					var y8 = bK.aNl();
					if (c.pJ = y8, cD.c0[y8]) return void(c.yL = +(cD.c1[c.t] === y8))
				}
				c.a94 = bM[0]
			}
			c.yL = +(c.a94 === c.t)
		}
	}
}

function mR(kA, r1) {
	var dp;
	this.resize = function() {
		for (var ai = 0; ai < kA.length; ai++) aa.ab.eA(kA[ai].button);
		dp.style.gap = dp.style.padding = aa.ab.e9(ak.lv)
	}, (dp = document.createElement("div")).style.display = "grid", dp.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", dp.style.overflowY = "auto", dp.style.gridAutoRows = "5.3em", dp.style.maxHeight = "100%";
	for (var ai = 0; ai < kA.length; ai++) kA[ai].iF(1), dp.appendChild(kA[ai].button);
	r1.appendChild(dp)
}

function aJE() {
	var lw, aFy, aMT, aWP, aY, aZ, fontSize, aWQ, aWR, aOh, aWS, canvas, a2, aMU, aWT;

	function eZ(ai) {
		return L(0 === ai ? 452 : 1 === ai ? 453 : 2 === ai ? 454 : 455)
	}

	function aWZ() {
		c.bJ ? aKq + 4 * ak.gap + aY + bK.aNg() > nl.a4 ? bn.drawImage(canvas, 2 * ak.gap + bK.aNg(), aKq + 2 * ak.gap) : bn.drawImage(canvas, ak.gap, aKq + 3 * ak.gap + bK.aNg()) : bn.drawImage(canvas, ak.gap, aKq + 2 * ak.gap)
	}

	function aWU() {
		canvas.width = lw[0].width + aOh, canvas.height = aY + aOh, (a2 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, lw[0].width + aOh, aY + aOh), a2.translate(Math.floor(aOh / 2), Math.floor(aOh / 2)), a2.lineWidth = aOh, a2.fillStyle = 1 === lw[0].aWY ? v.aSC : v.x, aWa(), a2.fill(), a2.strokeStyle = 1 === lw[0].aWY ? v.bs : v.w,
			aWa(), a2.stroke(), aa.ab.textAlign(a2, 1), aa.ab.textBaseline(a2, 1), a2.fillStyle = 1 === lw[0].aWY ? v.bs : v.w, a2.font = aZ[0], a2.fillText(eZ(lw[0].aWX), Math.floor(lw[0].width / 2), Math.floor(.72 * aWQ[0] * aY)), a2.font = aZ[1],
			a2.fillText(lw[0].be, Math.floor(lw[0].width / 2), Math.floor((aWQ[0] + .48 * aWQ[1]) * aY))
	}

	function aWa() {
		a2.beginPath(), a2.moveTo(aWS, 0), a2.lineTo(lw[0].width - aWS, 0), a2.lineTo(lw[0].width, aWS), a2.lineTo(lw[0].width, aY - aWS), a2.lineTo(lw[0].width - aWS, aY), a2.lineTo(aWS, aY), a2.lineTo(0, aY - aWS), a2.lineTo(0, aWS), a2.closePath()
	}
	this.b = function() {
		aFy = 4, aMT = aWP = aMU = 0, lw = [], aZ = new Array(2), fontSize = new Array(2), (aWQ = new Array(2))[0] = .3, aWQ[1] = .7, aWR = new Array(4), canvas = document.createElement("canvas"), aWT = bc.iV + 2e3, this.resize()
	}, this.resize = function() {
		var ai, aS;
		for (aY = Math.floor((aT.aU.aV() ? .062 : .047) * aW.aX), fontSize[0] = Math.floor(.85 * aWQ[0] * aY), fontSize[1] = Math.floor(.85 * aWQ[1] * aY), aZ[0] = aa.ab.ac(1, fontSize[0]), aZ[1] = aa.ab.ac(1, fontSize[1]), ai = aWR.length -
			1; 0 <= ai; ai--) aWR[ai] = this.measureText(eZ(ai) + "000", aZ[0]);
		if (aOh = Math.floor(1 + .05 * aY), aWS = Math.floor(.2 * aY), 0 < lw.length) {
			for (ai = lw.length - 1; 0 <= ai; ai--) aS = this.measureText(lw[ai].be + "00", aZ[1]), lw[ai].width = aS < aWR[ai] ? aWR[ai] : aS;
			aWU()
		}
	}, this.b8 = function() {
		0 !== aFy && (4 === aFy ? bc.iV > aWT && (aFy = 0, 1 === c.bH) && a3B.a99(gW.ko.gi[gW.kY].name, 3, 1, 9) : (1 === aFy ? (0 === aMT && (aWU(), aMT = 1e-4), 1 <= (aMT += .002 * (bc.iV - aMU)) && (aWP = 0, aFy = 2, aMT = 1), bc.bj = !0) :
			2 === aFy ? ((aWP += (bc.iV - aMU) / 1e3) > lw[0].aEr || 1 < aWP && 1 < lw.length) && (aFy = 3) : 3 === aFy && ((aMT -= .002 * (bc.iV - aMU)) <= 0 && (aMT = 0, lw.shift(), aFy = 0 < lw.length ? 1 : 0), bc.bj = !0), aMU = bc.iV
			))
	}, this.measureText = function(be, aZ) {
		return bn.font = aZ, Math.floor(bn.measureText(be).width)
	}, this.iu = function(ps, ai) {
		this.a99(y.z[ps], ai, 1, 0 === ai ? 3 : 7)
	}, this.a99 = function(be, aWX, aWY, aEr) {
		var aS;
		be.length && (aS = (aS = this.measureText(be + "00", aZ[1])) < aWR[aWX] ? aWR[aWX] : aS, lw.push({
			be: be,
			width: aS,
			aWX: aWX,
			aWY: aWY,
			aEr: aEr
		}), 0 === aFy) && (aMT = 0, aFy = 1, aMU = bc.iV)
	}, this.bm = function() {
		0 !== aFy && 0 !== aMT && (aMT < 1 ? (bn.globalAlpha = aMT, aWZ(), bn.globalAlpha = 1) : aWZ())
	}
}

function aJW() {
	this.fH = new aWb, this.aMP = new aIL, this.tQ = new aBF, this.kM = new aWc, this.rs = new vJ, this.mn = new aNy, this.aWN = new aWd, this.aUj = new aPk, this.lp = new a4a, this.a4f = new aWe, this.a4i = new aD0, this.a4l = new aWf, this.a4p =
		new jU, this.b = function() {
			this.fH.b()
		}
}

function aHf() {
	function aWl() {
		var bg;
		return 8 === c.d ? 0 : (bg = Math.floor(y.xY[c.t] / 50), (bg = Math.min(bg, 200)) / 100)
	}

	function aWg() {
		var bg = aWl();
		0 !== bg && e.u(440, L(456, [bg.toFixed(2)]), 40, 0, v.a2X, v.x, -1, !1)
	}
	this.b8 = function() {
		var aQq;
		0 === bT.result.aMn || 0 === bT.result.pF.length || 8 === c.d ? aa.bY.bZ(c.t) && aWg() : (function(aQq) {
			7 !== c.d && 10 !== c.d && 9 !== c.d || 0 !== c.yL && aQq && e.u(600, L(460, [aQq.toFixed(2)]), 40, 0, v.w, v.x, -1, !1)
		}(aQq = function() {
			e.u(520, L(457), 40, 0, v.w, v.x, -1, !1);
			for (var pF = bT.result.pF, b7 = pF.length, aO = y.aO, ce = [], ai = 0; ai < b7; ai++) {
				var pG = pF[ai];
				ce.push({
					pG: pG,
					av: aO[pG]
				})
			}
			ce.sort((cy, cT) => cT.av - cy.av);
			var bx = y.z,
				av = bT.result.aMm,
				bg = bT.result.aMn,
				be = "",
				aQq = 0;
			for (ai = 0; ai < b7; ai++) {
				var a1c = ce[ai].av * bg / (100 * av),
					aWn = bx[ce[ai].pG] + ": " + a1c.toFixed(2) + "   ";
				ce[ai].pG === c.t && (aQq = a1c), 2 < ai && 4 !== b7 ? 3 === ai && (be += "(" + L(458, [b7 - 3]) + ")") : be += aWn
			}
			e.u(560, aa.b1.aPB(be), 40, 0, v.a2X, v.x, -1, !1), aQq ? e.u(580, L(459, [aQq.toFixed(2) + " + " + aWl().toFixed(2)]), 40, 0, v.a2X, v.x, -1, !1) : aa.bY.bZ(c.t) && aWg();
			return aQq
		}()), 2 === c.yG || 7 <= c.d || function(aQq) {
			var pF = bT.result.pF,
				b7 = pF.length,
				cp = y.cp,
				aO = y.aO,
				cm = [];
			loop: for (var ai = 0; ai < b7; ai++) {
				var pG = pF[ai],
					cg = aa.b1.co(cp[pG]);
				if (null !== cg) {
					for (var hV = aO[pG], cT = cm.length - 1; 0 <= cT; cT--)
						if (cg === cm[cT].name) {
							cm[cT].av += hV, cm[cT].ce.push({
								pG: pG,
								av: hV
							});
							continue loop
						} cm.push({
						name: cg,
						av: hV,
						ce: [{
							pG: pG,
							av: hV
						}]
					})
				}
			}
			if (0 !== cm.length) {
				cm.sort((cy, cT) => cT.av - cy.av);
				var ce = cm[0].ce,
					aWo = (ce.sort((cy, cT) => cT.av - cy.av), "[" + cm[0].name + "]"),
					aWp = 512 * bT.result.aMn / 26214400,
					b6 = (e.u(0, L(461, [aWo, aWp.toFixed(4)]), 40, 0, v.w, v.x, -1, !1), ce.length),
					a9x = cm[0].av,
					aWq = 1e4 * aWp;
				for (ai = 0; ai < b6; ai++)
					if (ce[ai].pG === c.t) {
						e.u(600, L(462, [(aWq * ce[ai].av / (10 * a9x)).toFixed(2)]), 40, 0, v.w, v.x, -1, !1), e.u(640, L(463, [(.2 * aQq).toFixed(2), aWo]), 40, 0, v.w, v.x, -1, !1);
						break
					}
			}
		}(aQq))
	}, this.yw = function() {
		var aWk, wN;
		c.aH || (aWk = y, wN = c.t, 0 === aWk.xZ[wN]) || aWk.xX[wN] < 1 || 2 * aWk.xV[wN] > 3 * (aWk.xW[wN] + aWk.xX[wN]) || aWg()
	}
}

function aJs() {
	this.aWK = 0, this.hu = null, this.hr = null, this.bR = null, this.fH = null, this.k7 = null, this.l0 = null, this.message = null, this.kG = null, this.h7 = null, this.aWr = null, this.tX = new aWs, this.kE = 0, this.aWt = 0, this.b =
function() {
		this.aWt = bc.iV, this.aWK = es.et.aA0(ep.buffer.data[105].value, 5), this.hr = new aWu, this.bR = new hB, this.fH = new aWv, this.k7 = new mU, this.l0 = new aOO, this.message = new aTK, this.kG = new aHF, this.h7 = new aWw, this.aWr =
			new aWD, this.fH.b(), aJ2.b(), this.kE = 1, aT.aU.setState(1), qp.setState(0), vo.turnstile.aAw()
	}, this.kJ = function() {
		this.h7 && this.h7.kJ(), this.hu = null, this.hr = null, this.bR = null, this.fH = null, this.k7 = null, this.l0 = null, this.message = null, this.kG = null, this.h7 = null, this.aWr = null, this.kE = 0, aJ2.kJ(), aT.aU.setState(0)
	}
}

function aJF() {
	var ce, a4M, a4K, aKm, gap, aWx, aWy, aWz, aX0, aX1, aZ, aWt, zS, aOy, a9N, aLw, aX2;

	function aX4() {
		aKm = Math.floor(.2 * (aT.aU.aV() ? .07 : .035) * aW.aX), aKm = aF4(aT.aU.aV() ? 3 : 1, aKm);
		var aX5 = aW.aS / (ce.length + gap);
		aKm = aKm < aX5 ? aX5 : aKm, a9N = Math.floor((1 - gap) * aKm), a4M = 0, aX6()
	}

	function aX6() {
		a4M = (a4M = a4M < -20 ? -20 : a4M) > (ce.length - 15) * aKm ? (ce.length - 15) * aKm : a4M, aWy = Math.floor(a4M / aKm), aWz = (aWz = aWy + Math.floor(aW.aS / aKm)) > ce.length - 1 ? ce.length - 1 : aWz, aWy = (aWy = aWz < aWy ? aWz : aWy) <
			0 ? 0 : aWy;
		var b6 = aWz;
		aWx = a4K / ce[b6];
		for (var ai = aWz - 1; aWy <= ai; ai--) ce[ai] > ce[b6] && (b6 = ai, aWx = a4K / Math.pow(ce[ai], aOy))
	}

	function aX8(a3) {
		a3 = Math.floor((a4M + aW.aS - a3 - gap * aKm) / aKm);
		return (a3 = a3 < -1 ? -1 : -1 === a3 ? 0 : a3 > ce.length - 1 ? -1 : a3) !== aX0 && (aX0 = a3, -1 === aLw && 0 === aX0 && a4z.aD6 && (aLw = setInterval(aX9, 100)), 1)
	}

	function aXA(ai) {
		var a5 = Math.floor(aWx * Math.pow(ce[ai], aOy));
		bn.fillRect(a4M + aW.aS - (ai + 1) * aKm, aW.aY - a5, a9N, a5)
	}

	function aX9() {
		var pG;
		0 !== (aX0 = 8 === qp.tW() ? -1 : aX0) ? (aX2 = (new Date).getTime(), clearInterval(aLw), aLw = -1) : (pG = ce[1] / 864e3, -1 !== aX2 && (pG += ((new Date).getTime() - aX2) * ce[1] / 864e5, aX2 = -1), 0 < pG && (ce[0] += Math.floor(pG), bc
			.bj = !0))
	}
	this.aD6 = !1, this.b = function() {
		aX2 = aLw = -1, aX0 = -(aOy = 1), this.aPs = !1, zS = 0, aWt = new Date, a4M = 0, gap = .3, ce = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a4K = Math.floor(.15 * aW.aY), aX1 = (aX1 = Math.floor((aT.aU.aV() ? .018 : .0137) * aW.aX)) < 2 ? 2 : aX1, aZ = aa.ab.ac(1, aX1), aX4()
	}, this.a50 = function(a6t) {
		var ai;
		for (this.aD6 = !0, ai = 0; ai < a6t.length; ai++) ce.unshift(a6t[ai]);
		aX4(), bc.bj = !0
	}, this.aDH = function() {
		aX6()
	}, this.gK = function(a3, a4) {
		a4 > aW.aY - .6 * a4K ? this.aPs ? a3 !== zS && (a4M += a3 - zS, zS = a3, aX6(), aX8(a3), this.aPs = -1 !== aX0, bc.bj = !0) : aX8(a3) && (bc.bj = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aX0 && (this.aPs = !1, aX0 = -1, bc.bj = !0)
	}, this.gH = function(a3, deltaY) {
		-1 !== aX0 && (a4M += Math.floor(deltaY), aX6(), aX8(a3), bc.bj = !0)
	}, this.gF = function(a3, a4) {
		this.gK(a3, a4), -1 !== aX0 && (zS = a3, this.aPs = !0)
	}, this.a8Q = function() {
		-1 !== aX0 && (this.aPs = !1)
	}, this.bm = function() {
		bn.fillStyle = v.aOz;
		for (var aXC, month, av, nd, aXF, aXG, nf, aXH, aXI, ai = aWz; aWy <= ai; ai--) aXA(ai);
		this.aD6 && 0 === aWy && (bn.fillStyle = v.a2E, aXA(0)), -1 !== aX0 && (bn.fillStyle = v.aRf, aXA(aX0)), -1 !== aX0 && (bn.font = aZ, aa.ab.textBaseline(bn, 2), (av = new Date).setTime(aWt.getTime() - 1e3 * aX0 * 60 * 60 * 24), month =
			"month", aXC = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(av), aXC = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(av)), aXC = aXC + ", " + av.getUTCDate() + " " + month + " " + av.getFullYear(), month = 1 === ce[aX0] ? L(464) : L(465), month = aa.b1.b3(ce[aX0]) + " " + month, av = Math.floor(bn.measureText(aXC).width), nd = Math
			.floor(bn.measureText(month).width), aXF = Math.floor(.5 * (av + aX1)), aXG = (aXG = a4M + aW.aS - (aX0 + 1) * aKm) < aXF ? aXF : aXG > aW.aS - aXF ? aW.aS - aXF : aXG, nf = aW.aY - Math.floor(aWx * Math.pow(ce[aX0], aOy)), aXH =
			Math.floor(1.1 * aX1), aXI = nf > aW.aY - aXH ? aW.aY - aXH : nf, bn.fillStyle = v.x, bn.fillRect(aW.aS - nd - aX1, aXI - aXH, nd + aX1, aXH), bn.fillRect(aXG - aXF, aW.aY - aXH, av + aX1, aXH), bn.fillStyle = v.w, aa.ab
			.textAlign(bn, 2), bn.fillText(month, Math.floor(aW.aS - .5 * aX1), aXI), aa.ab.textAlign(bn, 1), bn.fillText(aXC, aXG, aW.aY), bn.strokeStyle = v.aSB, bn.lineWidth = 1, bn.beginPath(), bn.moveTo(0, nf), bn.lineTo(aW.aS, nf), bn
			.closePath(), bn.stroke())
	}
}

function aJ7() {
	this.c2 = 512, this.qI = 15e8, this.aXJ = 1e9, this.aXK = 5e4, this.aRd = 512, this.a0x = 2, this.t = 0, this.aI = 0, this.bG = 0, this.aL = 0, this.aM = 0, this.cZ = 512, this.aSi = 512, this.aXL = 150, this.aH = !0, this.bl = 0, this.bH = 0,
		this.aP = 0, this.gG = !1, this.ao = 0, this.a5g = 0, this.bJ = !1, this.cq = 0, this.ct = 0, this.d = 0, this.s = 0, this.sL = null, this.a95 = new a, this.bk = 30, this.yG = 0, this.yL = 0, this.a94 = 0, this.pJ = 0, this.data = new aW0,
		this.qr = new aXM, this.qo = 0, this.eQ = "", this.qu = function() {
			vo.turnstile.close(), ij.b(), bT.b(), lx.clear(), this.bG = this.aI = this.data.humanCount, this.aH = 1 === this.bG, this.gG = !1, this.bl = this.data.isReplay, this.d = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] :
				this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.s = this.data.isContest, this.bJ = this.d < 7 || 9 === this.d, this.d = 10 === this.d && this.aH ? 7 : this.d, this.d = 8 === this.d && 2 !== this.aI ? 7 : this.d, cv.b(),
				this.cq = this.data.numberTeams, this.data.teamPlayerCount ? this.ct = +(0 < this.data.teamPlayerCount[0]) : (this.ct = 0, this.bJ && this.aH && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.cq + 1), c.qr.a6G())), this.bk = this.aI <= 2 ? 30 : this.aI <= 50 ? 40 : 50, this.a5g = this.ao = this.data.selectableSpawn, this.sL = this.ao ? new s8 : null, 1 === lh.lk ? this.cZ = this.aI : this.cZ = this.data
				.playerCount, this.aSi = this.cZ, this.aL = this.cZ - this.aI, this.aM = 0, this.t = this.data.selectedPlayer, this.yG = 0, this.yL = 0, this.a94 = 0, this.pJ = 0, cN.uC(this.data.spawningSeed), ay.b(), y.b(), a5e.b(), aIu.aMu(), ss
				.st.xc = [], ss.a1M.aXN = 1, cD.b(), this.bH = 1, pz.b(), y1(), j1.c7(), uF.aGa(), ns.b(), j1.b(), aIv.b(), ix.b(), bQ.b(), o9.b(), a5h.a3G(), yB.b(), aIu.kX(), s9.b(), aIs.b(), aJ.aXO(), eR.b(), bK.b(), sI.b(), nw.b(), xz
				.putImageData(y0, 0, 0), bi.b(), gd.b(), nl.b(), nr.b(), yI.b(), ag.b(), at.b(), nK.b(), a3B.b(), e.b(), a1F.b(), sK.b(), sF.b(), aAZ.b(), ys.b(), aXP(), a0n.b(), gN.b(), aIw.b(), a59.b(), a1U.b(), a5m.b(), a5n.b(), this.a95.b(), bc
				.a3G(), gI.aXR(), 0 === y.an[c.t] && sF.show(!1, !0), gN.ap(!0), sE.b(), bc.bj = !0, this.bl || this.aH && this.ao || aT.aU.setState(1), this.qo = 0
		}, this.ny = function(vn) {
			eR.eS.eT.length ? this.eQ = eR.eS.eT : (this.eQ = eR.eU.eV(), __fx.replayHistory.save(this.eQ)), jZ.fH.aXS(), lx.clear(), this.bH = 0, bc.a3E(), aT.aU.setState(0), qp.setState(0), vo.a8h.show(vn), 2 === this.qo ? dx.fH.aXT(0) : 1 === this
				.qo ? dx.ej(19) : dx.ej(5, 5)
		}, this.aXU = function() {
			return this.bl ? nK.nL || !nr.n7 : this.aH && (nK.nL || this.ao)
		}, this.aXV = function() {
			return 1 === this.bH && !this.ao
		}
}

function jz(aXW, i9, aXX) {
	this.dp = document.createElement("div"), this.kA = aXW;
	var aXY = 0;
	this.resize = function(r1, qc) {
		var b7 = aXW.length;
		if (!aXX)
			for (var ai = 1; ai < b7; ai++) aa.ab.eA(aXW[ai].button, 4);
		for (var qe = 0, ai = 0; ai < b7; ai++) qe += aXW[ai].button.offsetWidth;
		if (r1 && (aXY = r1.offsetWidth), qc && qe < aXY)
			for (ai = 0; ai < b7; ai++) aXW[ai].button.style.width = (100 * aXW[ai].button.offsetWidth / qe).toFixed(2) + "%";
		else
			for (ai = 0; ai < b7; ai++) aXW[ai].button.style.width = "auto";
		qc || this.resize(r1, 1)
	};
	var nU = this;
	nU.dp.style.height = nU.dp.style.maxHeight = "100%";
	for (var ai = 0; ai < aXW.length; ai++) aXW[ai].iE(i9), aXW[ai].button.style.height = "100%", aXW[ai].button.style.padding = "0.0em 0.9em", aXW[ai].button.style.whiteSpace = "pre", nU.dp.appendChild(aXW[ai].button)
}

function aRT() {
	var aXZ = null;
	this.aG4 = 0, this.wf = function() {
		var d0 = ep.buffer.data[5].value;
		aXZ = "px " + d0, "system-ui" !== d0 && (aXZ += ", system-ui"), this.aG4 = aIc(32, 32, ["a", "b", "m"], 200, aXZ)
	}, this.pR = function(aS, aY) {
		var cY = document.createElement("canvas");
		return cY.width = aS, cY.height = aY, cY
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(a2, aS, aY) {
		return a2.getImageData(0, 0, aS, aY)
	}, this.ac = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aXZ : 1 === type ? "bold " + size + aXZ : 2 === type ? "lighter " + size + aXZ : 3 === type ? "italic " + size + aXZ : 4 === type ? "oblique " + size + aXZ : 5 === type ? "small-caps " +
			size + aXZ : "small-caps bold " + size + aXZ
	}, this.textAlign = function(pU, id) {
		pU.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(pU, id) {
		pU.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.eA = function(cc, code, color) {
		color = this.e9(ak.aCZ) + " solid " + (color || v.w);
		5 === (code = code || 5) ? cc.style.border = color : 4 === code ? cc.style.borderLeft = color : 2 === code ? cc.style.borderBottom = color : 6 === code ? cc.style.borderRight = color : cc.style.borderTop = color
	}, this.a43 = function(cc, a3, a4, aS, aY) {
		cc = cc.style;
		cc.left = this.a44(a3), cc.top = this.a44(a4), cc.width = this.a44(aS), cc.height = this.a44(aY)
	}, this.aFf = function(d0) {
		return 1 + d0 * aT.aU.aV()
	}, this.e1 = function(ch, iY) {
		return ch * this.aFf(void 0 === iY ? .5 : iY) * aW.aX / aW.eB
	}, this.a42 = function(ch, iY) {
		return ch * this.aFf(void 0 === iY ? .5 : iY) * aW.aX
	}, this.aVp = function(ch, iY, aXa) {
		return this.aFf(iY) * Math.min(ch * aW.aX, aXa * aW.aS) / aW.eB
	}, this.e9 = function(d0) {
		return d0.toFixed(1) + "px"
	}, this.a44 = function(d0) {
		return this.aEM(d0).toFixed(1) + "px"
	}, this.aEM = function(d0) {
		return d0 / aW.eB
	}, this.aXc = function(aXd) {
		for (var be = "<ul>", b7 = aXd.length, ai = 0; ai < b7; ai++) be += "<li>" + aXd[ai][0] + ": <a href='" + aXd[ai][1] + "' target='_blank'>" + aXd[ai][0] + "</a></li>";
		return be += "</ul>"
	}, this.aQO = function(aC9) {
		return "<a href='" + aC9 + "' target='_blank'>" + aC9 + "</a>"
	}, this.aQl = function(cc) {
		navigator.clipboard && navigator.clipboard.writeText(cc.value)
	}, this.xO = function(cc) {
		var av = cc.textContent;
		aa.b1.kP(av, "✔") || (1 === av.length ? cc.textContent = "✔" : cc.textContent = av + " ✔", setTimeout(function() {
			cc.textContent = av
		}, 500))
	}, this.measureText = function(be) {
		return bn.measureText(be).width
	}, this.dk = function(rU) {
		rU.style.overflowX = "auto", rU.style.overflowY = "hidden", rU.style.whiteSpace = "nowrap", rU.addEventListener("wheel", function(cc) {
			Math.abs(cc.deltaY) < Math.abs(cc.deltaX) || (this.scrollLeft += cc.deltaY, this.qf = this.scrollLeft, cc.preventDefault())
		}), rU.addEventListener("scroll", function() {
			this.qf = this.scrollLeft
		})
	}
}

function aWu() {
	function aXx(ce, mS, mT) {
		var aXy = ce[mS];
		ce[mS] = ce[mT], ce[mT] = aXy
	}
	this.hp = [
		[],
		[],
		[],
		[]
	], this.km = [0, 0, 0, 0], this.aXe = [], this.yr = function(aXf, hT, username, hk, hm, hz, elo, color, wo, aOZ, code) {
		username = this.aXh(hT, username, hk, hm, hz, elo, color, wo, aOZ, code);
		this.hp[aXf].push(username), hq.aWK === hT && (hq.hu = username), hq.aWr.aWI(hT) && (username.qz = 1), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXf && 1 === hq.fH.kD[2]
	}, this.aXh = function(hT, username, hk, hm, hz, elo, color, wo, aOZ, code) {
		return {
			hT: hT,
			username: code ? username : "Player " + hS.et.b3(hT, 2),
			aXi: username,
			hk: hk,
			hm: hm,
			hz: hz,
			elo: elo,
			color: color,
			wo: wo,
			aOZ: aOZ
		}
	}, this.aXj = function(f7, aXf, hk, hm, hz, elo, wo, color) {
		f7 = this.hp[aXf][f7];
		f7.hk = hk, f7.hm = hm, f7.hz = hz, f7.elo = elo, f7.wo = wo, f7.color = color, hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXf && 1 === hq.fH.kD[2]
	}, this.aXk = function(f7, aXf, code) {
		f7 = this.hp[aXf][f7];
		1 === code && (f7.username = f7.aXi), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXf && 1 === hq.fH.kD[2]
	}, this.aXl = function(f7, aXf, aXm) {
		var f7 = this.hp[aXf][f7],
			aXn = f7.username,
			aXo = "Redacted " + hS.et.b3(f7.hT, 2);
		f7.username = aXm ? "[" + aa.b1.co(aXn) + "] " + aXo : aXo, aXn.indexOf("Redacted") < 0 && (f7.aXp = aXn), hq.h7.aXq(f7.hT), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXf && 1 === hq.fH.kD[2]
	}, this.aXr = function(f7, aXs, aXt) {
		var player = this.hp[aXs][f7];
		this.aXu(f7, aXs), this.hp[aXt].push(player), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXt && 1 === hq.fH.kD[2]
	}, this.aXu = function(f7, aXs) {
		var hr = this.hp[aXs];
		this.aXe.push(hr[f7]), 1e3 < this.aXe.length && this.aXe.shift(), f7 >= this.km[aXs] ? hr[f7] = hr[hr.length - 1] : (this.km[aXs]--, 2 === aXs ? (hr.splice(this.km[aXs] + 1, 0, hr[hr.length - 1]), hr.splice(f7, 1)) : (hr[f7] = hr[this.km[
			aXs]], hr[this.km[aXs]] = hr[hr.length - 1])), hr.pop(), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === aXs && 1 === hq.fH.kD[2]
	}, this.aXv = function(f7, hi) {
		hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === hi && 1 === hq.fH.kD[2];
		var hr = this.hp[hi],
			ht = hr[f7];
		if (2 === hi)
			if (f7 >= this.km[hi]) {
				hq.aWr.join(ht);
				for (var aXw = this.km[hi], elo = ht.elo; aXw && elo > hr[aXw - 1].elo;) aXw--;
				hr[f7] = hr[this.km[hi]], hr.splice(this.km[hi]++, 1), hr.splice(aXw, 0, ht)
			} else hr.splice(this.km[hi]--, 0, ht), hr.splice(f7, 1);
		else f7 >= this.km[hi] ? (hq.aWr.join(ht), aXx(hr, this.km[hi]++, f7)) : aXx(hr, --this.km[hi], f7)
	}, this.ho = function(hT) {
		for (var hp = this.hp, b7 = hp.length, ai = 0; ai < b7; ai++)
			for (var hr = hp[ai], b6 = hr.length, cy = 0; cy < b6; cy++)
				if (hT === hr[cy].hT) return hr[cy];
		return null
	}
}

function aW0() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.aAA = null
}

function aJQ() {
	this.a1O = new aTf
}

function aJV() {
	var aLw, aY0, aY1, aY2, aXz = !1;

	function aY3() {
		aXz = !0, aLw = -1, aY0 = new Array(4);
		for (var ai = 3; 0 <= ai; ai--) aY0[ai] = !1;
		var dH = Math.floor(1 + .02 * aW.min);
		aY1 = new Array(4), (aY2 = new Array(4))[1] = aY2[3] = aY1[0] = aY1[2] = 0, aY2[0] = aY1[3] = -dH, aY1[1] = aY2[2] = dH
	}

	function aY4() {
		if (-1 !== aLw)
			if (0 !== c.bH && gI.gJ()) {
				for (var aY5 = !1, ai = 3; 0 <= ai; ai--) aY0[ai] && (aY5 = !0, fv += aY1[ai], fw += aY2[ai], gN.gK(aY1[ai], aY2[ai]), gd.gO());
				aY5 ? bc.bj = !0 : a8X.aY6()
			} else a8X.aY6()
	}
	this.a8Y = function(f7) {
		0 !== c.bH && gI.gJ() && (aXz || aY3(), aY0[f7] = !0, -1 === aLw) && (aLw = setInterval(aY4, 20), aY4())
	}, this.a8b = function(f7) {
		if (0 !== c.bH && (aXz || aY3(), aY0[f7] = !1, -1 !== aLw)) {
			for (var aY5 = !1, ai = 3; 0 <= ai; ai--) aY5 = aY5 || aY0[ai];
			aY5 || this.aY6()
		}
	}, this.aY6 = function() {
		if (aXz && -1 !== aLw) {
			for (var ai = 3; 0 <= ai; ai--) aY0[ai] = !1;
			clearInterval(aLw), aLw = -1
		}
	}
}

function aQP() {
	this.bm = function() {
		if (0 !== sI.fH.yz && (bn.globalAlpha = Math.min(sI.fH.yz / 580, 1), bn.drawImage(sI.fH.z0, 1 + gd.g7(), 1 + gd.g8()), bn.globalAlpha = 1, c.ao)) {
			for (var ne = fv / fu, nf = fw / fu, aDg = (aW.aS + fv) / fu, aDh = (aW.aY + fw) / fu, iY = sI.fH.yy * fu, z1 = sI.fH.z1, ai = c.aI - 1; 0 <= ai; ai--) ! function(ai, iY, ne, nf, aDg, aDh, z1) {
				0 === y.an[ai] || 0 === y.aO[ai] || (aDg = aW.aS * ((y.oE[ai] + y.oF[ai] + 1) / 2 - ne) / (aDg - ne) - .5 * iY, ne = aW.aY * ((y.oG[ai] + y.oH[ai] + 1) / 2 - nf) / (aDh - nf) - .5 * iY, aDg > aW.aS) || ne > aW.aY || aDg < -
					iY || ne < -iY || (bn.setTransform(fu, 0, 0, fu, aDg, ne), bn.drawImage(z1[c.bJ ? cD.c1[ai] : 1], 0, 0))
			}(ai, iY, ne, nf, aDg, aDh, z1);
			bn.setTransform(fu, 0, 0, fu, 0, 0)
		}
	}
}

function aYA() {
	this.b8 = function() {
		if (bc.ql() % 51 == 45)
			for (var b7 = bQ.fH.jO, it = bQ.fH.it, jG = bQ.fH.jG, il = bQ.fH.il, j6 = bQ.fH.j6, aUV = yB.aUV, po = yB.po, ai = 0; ai < b7; ai++) {
				var jF, player, aCJ, fX = it[ai];
				fX % 64 == 6 || (jF = jG[ai], (player = bQ.bR.aYB(jF[jF.length - 1])) < 0) || !aa.bY.j5(player, j6[ai] >> 3) || cN.cO(1e3) >= aUV[po[player]] || ! function(aTc, jF) {
					for (var b7 = jF.length - 1, jH = bQ.fH.jI[aTc], cQ = 0, ai = jH + 1; ai < b7; ai++) cQ += ix.jB(jF[ai], jF[ai + 1]);
					return (cQ += ix.jB(ix.iy(bQ.fH.iz[aTc]), jF[jH + 1])) <= 60
				}(ai, jF) || (aCJ = il[ai], 64 <= fX && bQ.fq.aCI(player, aCJ)) || function(player, jF, aCJ, aTc, fX) {
					bQ.fh.jS(player) && aa.bY.aTU(player, yB.aTV[yB.po[player]], 32, 0) && (bQ.fH.it[aTc] = 64 + fX % 64, bQ.fq.iu(aCJ, bQ.fH.iv), ij.ce[0] = bQ.fl.jN(jF), ij.ik[1] = 6, aa.bY.aTe(player), bQ.fH.t3(player))
				}(player, jF, aCJ, ai, fX)
			}
	}
}

function aJY() {
	this.oA = new aRx, this.aTY = new o6, this.aTZ = new aQ4, this.performance = new y2, this.aGr = new aTs, this.qE = new aGi, this.aH7 = new aE1, this.aTX = new oT, this.aYE = new aYA, this.b = function() {
		this.oA.b(), this.aTZ.b(), this.performance.b(), this.aGr.b(), this.qE.b()
	}, this.b8 = function() {
		this.performance.b8(), this.oA.b8(), this.aTZ.aQ6()
	}
}

function aJu() {
	var aYF = [];
	this.aMZ = function(player, aBM, aFR, aYG) {
		player === c.t || aBM === c.t || !aYG && aa.bY.o2(player) || aa.bY.o2(aBM) || this.u(y.z[player] + " supported " + y.z[aBM] + " with " + aa.b1.b3(aFR) + " ressource" + (1 === aFR ? "." : "s."))
	}, this.u = function(be, m4) {
		be = {
			iV: at.b5(),
			be: be,
			m4: m4
		};
		aYF.push(be), 30 === dx.jf && dx.jg().u(be)
	}, this.clear = function() {
		aYF = [];
		var bg = dx.ek(30);
		bg && bg.clear()
	}, this.ly = function() {
		return aYF
	}
}

function aJf() {
	var aYH = -1,
		aYI = null,
		zN = -1,
		aER = 4;

	function aYK() {
		nK.nq() ? ns.render() : ns.nt()
	}

	function aYQ(cY, cS) {
		var mj = cY >> 16,
			bg = cY >> 8 & 255,
			cY = 255 & cY,
			aYR = 255 - cS,
			aYR = (aYR < mj && aYR < bg && aYR < cY && (cS = -cS), aYH >> 7),
			aYT = aYH >> 5 & 3,
			aYU = aYH >> 3 & 3;
		return (Math.max(Math.min(mj + cS, 252 + aYR), aYR) << 16) + (Math.max(Math.min(bg + cS, 252 + aYT), aYT) << 8) + Math.max(Math.min(cY + cS, 252 + aYU), aYU)
	}

	function aYJ() {
		return -1 !== aYH && (j1.aV9(aYH, aYI[0], aYI[1], aYI[2]), aYP(aYH), aYH = -1)
	}

	function aYP(player) {
		bc.bj = !0;
		for (var oE = y.oE[player], oG = y.oG[player], oF = y.oF[player], oH = y.oH[player], a4 = oG; a4 <= oH; a4++)
			for (var a3 = oE; a3 <= oF; a3++) {
				var ar = j1.aT3(a3, a4);
				j1.a5q(player, ar) && (j1.aVF(ar) ? j1.aU1(ar, player) : j1.aT4(ar) ? j1.a19(ar, player) : j1.aT5(ar, player))
			}
	}
	this.b = function() {
		aYI = null, zN = aYH = -1, aER = q.a0(Math.floor(ep.buffer.data[16].value), 0, 16)
	}, this.b8 = function(aq) {
		if (ep.buffer.data[15].value && 0 !== aER && (aq || !di.dj())) {
			var aq = ix.zR(di.zS),
				oO = ix.zT(di.zU);
			if (ix.zV(aq, oO)) {
				aq = ix.oR(aq, oO), oO = ix.j3(aq);
				if (zN === oO)
					if (j1.zY(oO)) {
						if (aYH === j1.zZ(oO)) return
					} else if (-1 === aYH) return;
				! function(ar) {
					j1.zY(ar) ? (ar = j1.zZ(ar)) !== aYH && (aYJ(), function(player) {
						aYH = player, aYI = j1.aVD(player);
						var aYN = function() {
							var ht = aYI,
								p2 = aER << 2,
								p3 = p2 << 1;
							return [aYQ(ht[0], p2), aYQ(ht[1], p3), aYQ(ht[2], p3)]
						}();
						j1.aV9(player, aYN[0], aYN[1], aYN[2]), aYP(player)
					}(ar), aYK()) : aYJ() && aYK()
				}(zN = oO)
			} else aYJ() && aYK()
		}
	}
}

function aRU() {
	this.a1D = function(a9j) {
		return 0 === a9j ? 1 === c.bH && c.ao : 1 === a9j ? 1 === c.bH && !c.ao : 2 === c.bH
	}, this.bZ = function(player) {
		return 0 !== y.an[player] && 2 !== y.xR[player]
	}, this.aPZ = function(player) {
		return player === c.t && 2 !== y.xR[player]
	}, this.j5 = function(player, pn) {
		return player !== pn && (0 === cD.c1[player] || cD.c1[player] !== cD.c1[pn])
	}, this.aS7 = function() {
		return aJ.aK < 2 ? 0 : c.bJ ? 1 < bK.aNn() : y.aO[bM[1]]
	}, this.a2T = function() {
		var aK = aJ.aK;
		if (0 !== aK) {
			if (!c.bJ) return !this.o2(bM[0]);
			for (var c1 = cD.c1, y8 = bK.y9(), bX = aJ.bX, ai = aK - 1; 0 <= ai; ai--) {
				var pG = bX[ai];
				if (c1[pG] === y8 && !this.o2(pG)) return 1
			}
		}
		return 0
	}, this.qG = function(player) {
		return player === c.t
	}, this.aAN = function(pn, ch) {
		return y.ax[c.t] < ch * y.ax[pn]
	}, this.o2 = function(player) {
		return player >= c.aI || 2 === y.xR[player]
	}, this.yb = function(player) {
		return 0 !== y.an[player]
	}, this.pH = function(player) {
		return player < c.aI
	}, this.aYV = function(aYW, aYX) {
		return aYW !== aYX
	}, this.py = function(player, d0) {
		var min;
		return d0 = this.aYY(player, d0), y.ax[player] += d0, y.xa[player] && (min = Math.min(y.xa[player], y.ax[player]), y.xa[player] -= min, y.ax[player] -= min), d0
	}, this.aYY = function(player, d0) {
		var aBo = y.ax[player];
		return d0 = Math.min(d0, y.aO[player] * c.aXL - aBo), d0 = Math.min(d0, c.qI - aBo), Math.max(d0, 0)
	}, this.aTU = function(player, a3c, aYZ, aYa) {
		var aBo = y.ax[player],
			a3c = q.aN(aBo * (a3c + 1), 1024),
			aYZ = q.aN(aYZ * aBo, 1024),
			a3c = Math.min(a3c, aBo - aYZ);
		return a3c = aIw.aNK(player, a3c), ij.zr[0] = a3c, ij.zr[1] = aYZ, aYa <= a3c
	}, this.aLr = function(player, xo, aBM) {
		var player = y.ax[player],
			aYb = q.aN(64 * player, 1024);
		return xo = Math.min(xo, player - aYb), xo = this.aYY(aBM, xo), ij.zr[0] = xo, ij.zr[1] = aYb, 1 <= xo
	}, this.aYc = function(player, xo, aBM) {
		var player = y.ax[player],
			aYb = q.aN(64 * player, 1024);
		return xo = Math.min(xo, player - aYb), this.aYY(aBM, xo)
	}, this.aMY = function(xo, aBM) {
		return xo = this.aYY(aBM, xo), ij.zr[0] = xo, ij.zr[1] = 0, 1 <= xo
	}, this.a3b = function(player, aYd) {
		return q.aN(y.ax[player] * (aYd + 1), 1024)
	}, this.aYe = function(player, aYZ) {
		aYZ = q.aN(aYZ * y.ax[player], 1024);
		ij.zr[1] = aYZ, y.ax[player] -= aYZ
	}, this.zw = function(player, aYf) {
		var d3, d4, cT = y.ax[player];
		return aYf <= cT ? y.ax[player] -= aYf : (y.ax[player] = 0, d4 = y.xa[player] + (d3 = 5 * ((cT = aYf - cT) >> 2)), pz.q0(player, d3 - cT, 12), d4 <= c.aXK ? y.xa[player] = d4 : (y.xa[player] = c.aXK, pz.q0(player, d4 - c.aXK, 18))), aYf
	}, this.aED = function(player, a3c) {
		var ax = y.ax,
			aBo = ax[player],
			a3c = q.aN(aBo * (a3c + 1), 1024),
			aYb = Math.max(q.aN(aBo, 10), 1e3);
		return (a3c = Math.min(a3c, aBo - aYb)) < 0 ? (ax[player] = 0, aYb = Math.min(1e3, aBo + c.aXK - y.xa[player]), ij.zr[1] = aYb, y.xa[player] += aYb - aBo, 0) : (ij.zr[1] = aYb, a3c = aIw.aNK(player, a3c), ax[player] -= aYb + a3c, aIw.aNL(
			player, a3c), a3c)
	}, this.aTe = function(player) {
		var po = ij.zr[0];
		y.ax[player] -= po + ij.zr[1], aIw.aNL(player, po)
	}, this.aYg = function(player, pn) {
		return (pn = Math.min(pn, c.c2)) < c.c2 && 0 === y.an[pn] && (pn = c.c2), (ij.aTk[0] = pn) === c.c2 || a0f.a1W(player, pn)
	}, this.aLq = function(player, aBM) {
		return 0 !== y.an[aBM] && !a0f.a1W(player, aBM)
	}, this.a2c = function(player, aYh) {
		for (var pG, b7 = aJ.aK, hm = 0, aYi = bM, ai = 0; ai < b7; ai++)
			if (pG = aYi[ai], !this.o2(pG)) {
				if (player === pG) return !0;
				if (++hm > aYh) return !1
			} return !1
	}, this.y5 = function(pG) {
		var bI = c.bJ ? bK.bL() : y.aO[bM[0]];
		return bI >= q.aN(pG * c.aP, 100)
	}, this.aQz = function(d0, min, max) {
		return Math.floor(q.a0(isNaN(d0) ? 0 : Number(d0), min, max))
	}
}

function aWs() {
	this.aJz = function(f7) {
		if ((km = hq.hr.km[f7]) < 2) return !1;
		var kW = hq.fH.i1[f7],
			aYj = 9 === kW.kc ? 333 : 512,
			km = Math.min(km, aYj);
		8 === kW.kc && (km -= km % 2);
		aYj = hq.hr.hp[f7].splice(0, km), hq.hr.km[f7] -= km, km = function(tM) {
			if (hq.hu)
				for (var b7 = tM.length, hT = hq.hu.hT, ai = 0; ai < b7; ai++)
					if (tM[ai].hT === hT) return ai;
			return -1
		}(aYj);
		return -1 === km ? (hq.hr.aXe = hq.hr.aXe.concat(aYj), 1e3 < hq.hr.aXe.length && hq.hr.aXe.splice(0, hq.hr.aXe.length - 1e3), hq.fH.kz += 29 === dx.jf && hq.fH.kD[0] === f7 && 1 === hq.fH.kD[2], !1) : (8 === kW.kc && (kW.tE = (kW.tE + (
			km >> 1)) % 1024, f7 = km - km % 2, km %= 2, aYj = aYj.slice(f7, 2 + f7)), a4h.b(kW, aYj, km), !0)
	}, this.tY = function(kW, tM, tN) {
		var cS = c.data = new aW0,
			aYl = (cS.spawningSeed = kW.spawningSeed, kW.kc < 7 ? (cS.gameMode = 1, cS.numberTeams = kW.kc + 2) : 9 === kW.kc ? (cS.gameMode = cS.isZombieMode = 1, cS.numberTeams = 2) : (cS.gameMode = 0, cS.battleRoyaleMode = 7 === kW.kc ? 0 :
				10 === kW.kc ? 1 : 2), cS.selectedPlayer = tN, cS.isContest = kW.kp, cS.mapType = gW.uD(kW.kY) ? 0 : 1, gW.uR(cS, kW.kY), cS.mapSeed = kW.mapSeed, cS.humanCount = tM.length);
		cS.selectableSpawn = 1 === cS.gameMode || aYl < 100, cS.colorsData = new Uint32Array(aYl), cS.playerNamesData = new Array(aYl), cS.aAA = new Uint32Array(aYl);
		for (var ai = 0; ai < aYl; ai++) cS.colorsData[ai] = tM[ai].color, cS.playerNamesData[ai] = tM[ai].username, cS.aAA[ai] = tM[ai].hT;
		if (2 === cS.battleRoyaleMode)
			for (cS.elo = new Uint16Array(aYl), ai = 0; ai < aYl; ai++) cS.elo[ai] = tM[ai].elo;
		ru.close(), qp.setState(8), gW.kX(kW.kY, cS.mapSeed), c.qu(), c.qo = 2
	}
}

function aJv() {
	this.a0s = function() {
		for (var a3, a4, ai = a0r - 1; 0 <= ai; ai--) a3 = q.aN(a18[ai], 4) % gW.gX, a4 = q.aN(a18[ai], 4 * gW.gX), y.oE[a0o] = Math.min(a3, y.oE[a0o]), y.oG[a0o] = Math.min(a4, y.oG[a0o]), y.oF[a0o] = Math.max(a3, y.oF[a0o]), y.oH[a0o] = Math
			.max(a4, y.oH[a0o])
	}, this.aYm = function() {
		var cS, pG, ai, b7 = y.bW[a0o].length,
			a1g = j1.a1g;
		loop: for (ai = b7 - 1; 0 <= ai; ai--) {
			for (cS = 3; 0 <= cS; cS--)
				if (pG = y.bW[a0o][ai] + a1g[cS], j1.zb(pG) || j1.zY(pG) && j1.zZ(pG) !== a0o) {
					j1.aU1(y.bW[a0o][ai], a0o);
					continue loop
				} y.bW[a0o][ai] = y.bW[a0o][b7 - 1], y.bW[a0o].pop(), b7--
		}
	}, this.aYn = function() {
		var player = a0o,
			xT = y.xT,
			uW = y.uW,
			xU = y.xU,
			b7 = xT[player].length,
			a1g = j1.a1g;
		loop: for (var ai = b7 - 1; 0 <= ai; ai--) {
			for (var aYo = !1, aYp = !1, cS = 3; 0 <= cS; cS--) {
				var pG = xT[player][ai] + a1g[cS];
				if (j1.a4G(pG, player)) continue loop;
				aYo = aYo || j1.oS(pG), aYp = aYp || j1.aV8(pG)
			}
			aYo ? uW[player].push(xT[player][ai]) : aYp ? xU[player].push(xT[player][ai]) : j1.aT5(xT[player][ai], player), xT[player][ai] = xT[player][b7 - 1], xT[player].pop(), b7--
		}
	}, this.a0g = function() {
		y.aO[a0c] -= a0r
	}, this.a0h = function(border) {
		for (var b7 = border.length, ai = b7 - 1; 0 <= ai; ai--) j1.a5q(a0c, border[ai]) || (border[ai] = border[b7 - 1], border.pop(), b7--)
	}, this.a0i = function(border) {
		for (var b7 = border.length, ai = b7 - 1; 0 <= ai; ai--) !j1.a5q(a0c, border[ai]) && j1.uZ(border[ai]) && (border[ai] = border[b7 - 1], border.pop(), b7--)
	}, this.a0j = function(border) {
		for (var cS, pG, b7 = border.length, a1g = j1.a1g, ai = b7 - 1; 0 <= ai; ai--)
			for (cS = 3; 0 <= cS; cS--)
				if (pG = border[ai] + a1g[cS], j1.a4G(pG, a0c)) {
					y.xT[a0c].push(border[ai]), border[ai] = border[b7 - 1], border.pop(), b7--;
					break
				}
	}, this.a0k = function() {
		for (var cS, pG, a1g = j1.a1g, ai = a0r - 1; 0 <= ai; ai--)
			for (cS = 3; 0 <= cS; cS--) pG = a18[ai] + a1g[cS], j1.aAW(a0c, pG) && j1.aVE(pG) && (y.xT[a0c].push(pG), j1.a19(pG, a0c))
	}, this.a0l = function() {
		var a3, a4;
		loop: for (; y.oG[a0c] < y.oH[a0c];) {
			for (a3 = y.oF[a0c]; a3 >= y.oE[a0c]; a3--)
				if (j1.a5q(a0c, 4 * (y.oG[a0c] * gW.gX + a3))) break loop;
			y.oG[a0c]++
		}
		loop: for (; y.oG[a0c] < y.oH[a0c];) {
			for (a3 = y.oF[a0c]; a3 >= y.oE[a0c]; a3--)
				if (j1.a5q(a0c, 4 * (y.oH[a0c] * gW.gX + a3))) break loop;
			y.oH[a0c]--
		}
		loop: for (; y.oE[a0c] < y.oF[a0c];) {
			for (a4 = y.oH[a0c]; a4 >= y.oG[a0c]; a4--)
				if (j1.a5q(a0c, 4 * (a4 * gW.gX + y.oE[a0c]))) break loop;
			y.oE[a0c]++
		}
		loop: for (; y.oE[a0c] < y.oF[a0c];) {
			for (a4 = y.oH[a0c]; a4 >= y.oG[a0c]; a4--)
				if (j1.a5q(a0c, 4 * (a4 * gW.gX + y.oF[a0c]))) break loop;
			y.oF[a0c]--
		}
	}, this.a1W = function(player, pn) {
		return 0 === cD.c1[player] || cD.c1[player] !== cD.c1[pn]
	}, this.a1T = function(player) {
		for (var ai, iY, b7 = y.xT[player].length, a1g = j1.a1g, cS = 3; 0 <= cS; cS--)
			for (iY = a1g[cS], ai = 0; ai < b7; ai++)
				if (j1.zb(y.xT[player][ai] + iY)) return !0;
		return !1
	}, this.aYq = function(player) {
		for (var ai, iY, b7 = y.xT[player].length, a1g = j1.a1g, cS = 3; 0 <= cS; cS--)
			for (iY = a1g[cS], ai = 0; ai < b7; ai++)
				if (j1.aT4(y.xT[player][ai]) && j1.zb(y.xT[player][ai] + iY)) return !0;
		return !1
	}, this.a1X = function(aYW, aYX) {
		for (var ai, av, iY, pG, zu = y.xT[aYW].length, zv = y.xT[aYX].length, a1g = (zv < zu && (av = aYW, aYW = aYX, aYX = av, av = zu, zu = zv, 0), j1.a1g), cS = 3; 0 <= cS; cS--)
			for (iY = a1g[cS], ai = 0; ai < zu; ai++)
				if (pG = y.xT[aYW][ai] + iY, j1.zY(pG) && j1.zZ(pG) === aYX) return !0;
		return !1
	}, this.aYr = function(aYW, aYX) {
		for (var ai, iY, pG, zu = y.xT[aYW].length, a1g = j1.a1g, cS = 3; 0 <= cS; cS--)
			for (iY = a1g[cS], ai = 0; ai < zu; ai++)
				if (j1.aT4(y.xT[aYW][ai]) && (pG = y.xT[aYW][ai] + iY, j1.zY(pG)) && j1.zZ(pG) === aYX) return !0;
		return !1
	}
}

function aJh() {
	this.size = 0, this.f7 = 0, this.lf = null, this.b = function(lf) {
		this.f7 = 0, this.lf = lf, this.size = lf.length
	}, this.kJ = function() {
		this.lf = null
	}, this.jc = function(size) {
		for (var d0 = 0, lf = this.lf, gJ = this.f7 + size - 1, ai = this.f7; ai <= gJ; ai++) d0 |= (lf[ai >> 3] >> 7 - (7 & ai) & 1) << gJ - ai;
		return this.f7 += size, this.f7 > 8 * this.size && console.error("Unwrapper Overflow"), d0
	}, this.je = function(size) {
		var cT = size >> 1;
		return (1 << cT) * this.jc(size - cT) + this.jc(cT)
	}, this.jj = function(mC) {
		return this.size === jX.jY(mC)
	}, this.aW3 = function(zk, a2q, aYs) {
		var cW = this.jc(zk);
		if (!cW) return null;
		for (var zk = Math.max(cW, aYs), ce = new(a2q <= 8 ? Uint8Array : a2q <= 16 ? Uint16Array : Uint32Array)(zk), ai = 0; ai < cW; ai++) ce[ai] = this.jc(a2q);
		aYs = ce[cW - 1];
		return aYs && ce.fill(aYs, cW), ce
	}, this.aW4 = function(zk, a2u, aYs) {
		var cW = this.jc(zk);
		if (!cW) return null;
		for (var zk = Math.max(cW, aYs), ce = new Array(zk), ai = 0; ai < cW; ai++) ce[ai] = this.aW1(a2u);
		return ce.fill(ce[cW - 1], cW), ce
	}, this.aW1 = function(zk) {
		return es.jk.jl(this.jc(zk))
	}, this.aW2 = function() {
		var be = hS.et.aA8(hS.et.aA9(this.jc(30))),
			be = aa.b1.a2y(be, "_", "/");
		be = aa.b1.a2y(be, "-", "+");
		for (var aYt = "";
			(be.length + aYt.length) % 4;) aYt += "=";
		be = "data:image/png;base64," + be + aYt;
		var m8 = new Image;
		m8.onload = function() {
			eR.eb.aVv(m8), m8.onload = null, m8 = null
		}, m8.src = be
	}
}

function aJr() {
	function aYv(cc) {
		var ce, cc = cc.target.files;
		cc && 0 < cc.length && (cc = cc[0], "json" === (ce = cc.name.split("."))[ce.length - 1].toLowerCase()) && ((ce = new FileReader).onload = aZ3, ce.readAsText(cc))
	}

	function aZ3(cc) {
		var aZ6;
		c.bH || (cc = JSON.parse(cc.target.result), aZ6 = c.data = new aW0, aZ7(cc, aZ6, "mapType", 0, 2), aZ7(cc, aZ6, "mapProceduralIndex", 0, 255), aZ7(cc, aZ6, "mapRealisticIndex", 0, 255), aZ7(cc, aZ6, "mapSeed", 0, 16383), function(aZ5, aZ6,
				iY, max) {
				aZ5 = aZ5[iY];
				aZ6[iY] = aZD(aZ5) ? aZ5.slice(0, max) : aZ6[iY]
			}(cc, aZ6, "mapName", 20), function(aZ5, aZ6, iY) {
				var m8;
				2 === aZ6.mapType && (!aZD(aZ5 = aZ5[iY]) || aZ5.length <= 20 ? aZ6.mapType = 0 : ((m8 = new Image).onload = function() {
					eR.eb.aVv(m8, 1), m8.onload = null, m8 = null
				}, m8.src = aZ5))
			}(cc, aZ6, "canvas"), aZ7(cc, aZ6, "passableWater", 0, 1), aZ7(cc, aZ6, "passableMountains", 0, 1), aZ7(cc, aZ6, "playerCount", 1, 512), aZ7(cc, aZ6, "humanCount", 1, 1), aZ7(cc, aZ6, "selectedPlayer", 0, 0), aZ7(cc, aZ6, "gameMode",
				0, 1), aZ7(cc, aZ6, "playerMode", 0, 0), aZ7(cc, aZ6, "battleRoyaleMode", 0, 0), aZ7(cc, aZ6, "numberTeams", 0, 8), aZ7(cc, aZ6, "isZombieMode", 0, 0), aZ7(cc, aZ6, "isContest", 0, 0), aZ7(cc, aZ6, "isReplay", 0, 0), aZA(cc, aZ6,
				"elo", 16, 2, 16383), aZ7(cc, aZ6, "colorsType", 0, 1), aZ7(cc, aZ6, "colorsPersonalized", 0, 1), aZA(cc, aZ6, "colorsData", 32, 512, 262143), aZ7(cc, aZ6, "selectableColor", 0, 1), aZA(cc, aZ6, "teamPlayerCount", 16, 9, 512),
			aZ7(cc, aZ6, "neutralBots", 0, 1), aZ7(cc, aZ6, "botDifficultyType", 0, 3), aZ7(cc, aZ6, "botDifficultyValue", 0, 15), aZA(cc, aZ6, "botDifficultyTeam", 8, 9, 15), aZA(cc, aZ6, "botDifficultyData", 8, 512, 15), aZ7(cc, aZ6,
				"spawningType", 0, 2), aZ7(cc, aZ6, "spawningSeed", 0, 16383), aZA(cc, aZ6, "spawningData", 16, 1024, 4095), aZ7(cc, aZ6, "selectableSpawn", 0, 1), aZ7(cc, aZ6, "playerNamesType", 0, 2),
			function(aZ5, aZ6, iY, size, max) {
				var v5 = aZ5[iY];
				if (Array.isArray(v5)) {
					for (var v6 = new Array(size), b7 = Math.min(v5.length, size), ai = 0; ai < b7; ai++) v6[ai] = aZD(v5[ai]) ? v5[ai].slice(0, max) : "";
					v6.fill("", b7), aZ6[iY] = v6
				}
			}(cc, aZ6, "playerNamesData", 512, 20), aZ7(cc, aZ6, "selectableName", 0, 1), aZ7(cc, aZ6, "aIncomeType", 0, 2), aZ7(cc, aZ6, "aIncomeValue", 0, 255), aZA(cc, aZ6, "aIncomeData", 8, 512, 255), aZ7(cc, aZ6, "tIncomeType", 0, 2), aZ7(
				cc, aZ6, "tIncomeValue", 0, 255), aZA(cc, aZ6, "tIncomeData", 8, 512, 255), aZ7(cc, aZ6, "iIncomeType", 0, 2), aZ7(cc, aZ6, "iIncomeValue", 0, 255), aZA(cc, aZ6, "iIncomeData", 8, 512, 255), aZ7(cc, aZ6, "sResourcesType", 0, 2),
			aZ7(cc, aZ6, "sResourcesValue", 0, 2047), aZA(cc, aZ6, "sResourcesData", 16, 512, 2047), dx.eX(), dx.fH.aLL[0] = 0, dx.ej(19))
	}

	function aZ7(aZ5, aZ6, iY, min, max) {
		aZ5 = aZ5[iY];
		aZ6[iY] = "number" == typeof aZ5 && min <= aZ5 && aZ5 <= max ? Math.floor(aZ5) : aZ6[iY]
	}

	function aZD(be) {
		return "string" == typeof be
	}

	function aZA(aZ5, aZ6, iY, aZE, size, max) {
		var v5 = aZ5[iY];
		if (Array.isArray(v5)) {
			for (var v6 = new(8 === aZE ? Uint8Array : 16 === aZE ? Uint16Array : Uint32Array)(size), b7 = Math.min(v5.length, size), ai = 0; ai < b7; ai++) v6[ai] = q.a0(v5[ai], 0, max);
			aZ6[iY] = v6
		}
	}
	this.aYu = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aYv, input.click()
	}, this.aYw = function() {
		for (var aYz, aCA, m1 = c.data, keys = Object.keys(m1), aYx = {}, ai = 0; ai < keys.length; ai++) {
			var key = keys[ai];
			m1[key] instanceof Uint8Array || m1[key] instanceof Uint16Array || m1[key] instanceof Uint32Array ? aYx[key] = Array.from(m1[key]) : aYx[key] = m1[key]
		}
		aYx.canvas = 2 === aYx.mapType && aYx.canvas ? aYx.canvas.toDataURL() : null, aYz = aYx, aYz = JSON.stringify(aYz, null, 2), aYz = new Blob([aYz], {
			type: "application/json"
		}), (aCA = document.createElement("a")).href = URL.createObjectURL(aYz), aCA.download = "tt_scenario.json", aCA.click()
	}
}

function aII() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 === c.data.playerNamesType && 1 === aa.kt.a48(c.data.playerNamesData).length && (c.data.playerNamesType = 0), 2 !== c.data.playerNamesType && (c.data.playerNamesData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.playerNamesType && aa.kt.aCp(x0.eZ(), c.data.playerNamesData, 20)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(466), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(467), L(468), L(97)],
			value: c.data.playerNamesType
		}, function(f7) {
			x2(), c.data.playerNamesType = f7, dx.ej(23)
		})), f2.f5(new fB), f2.f5(new a4A({
			value: c.data.selectableName
		}, L(469), function(value) {
			c.data.selectableName = value
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2;
		2 === c.data.playerNamesType && ((f2 = new f3).f4("Data"), x0 = new eL(0, 1, 0, 1), c.data.playerNamesData && c.data.playerNamesData.length === c.c2 || (c.data.playerNamesData = new Array(c.c2), c.data.playerNamesData.fill("")),
			x0.eP(aa.b1.x8(c.data.playerNamesData, 1, '"')), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function aI8() {
	var eh, mM, mN, mP;

	function aZF(id) {
		0 !== aT.id || ep.buffer.data[140].value ? 0 === id ? dx.ej(8, 1, new ex(16)) : dx.ej(2) : dx.fH.aZK(dx.jf, 0 === id ? 16 : 0)
	}
	this.show = function() {
		aT.aU.setState(12), eh.show(), this.resize(), this.b8()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), mM.resize()
	}, this.b8 = function() {
		8 === qp.tW() && (2 <= pz.aBp ? mN[2].iD === v.iN && mN[2].iE(0) : mN[2].iD !== v.iN && mN[2].iE(v.iN), !c.bl && nK.o1(c.t) ? mN[1].iD === v.iN && mN[1].iE(0) : mN[1].iD !== v.iN && mN[1].iE(v.iN), !c.bl && yI.a1f(c.t) ? mN[0].iD === v
			.iN && mN[0].iE(0) : mN[0].iD !== v.iN && mN[0].iE(v.iN))
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, mN = [new eG(L(470), function() {
		aZF(0)
	}), new eG(L(79), function() {
		dx.ej(16)
	}), new eG(L(471), function() {
		dx.ej(17)
	}), new eG(L(472), function() {
		dx.fH.aBh()
	}, 0, 0, 1), new eG(L(21), function() {
		dx.ej(3, 1)
	}), new eG(L(98), function() {
		dx.ej(18)
	}), new eG(L(137), function() {
		dx.ej(31)
	}), new eG(L(473), function() {
		dx.fH.aXT(2)
	}), new eG(L(474), function() {
		aZF(1)
	}), new eG("🔒 " + L(149), function() {
		dx.ej(32)
	}), new eG(L(475), function() {
		var aXd, a51;
		(aXd = []).push(["Wiki", (a51 = "https://territorial.io/") + "wiki/gold"]), aXd.push(["Team Games", a51 + "log/team"]), aXd.push(["Battle Royale Games", a51 + "log/br"]), aXd.push(["1v1 Games", a51 + "log/1v1"]), aXd.push([
			"Zombie Games", a51 + "log/zombies"
		]), aXd.push(["Transactions", a51 + "log/transactions"]), aXd.push(["Changelog", a51 + "changelog"]), 2 !== aT.id && aXd.push(["Android App", aFw.lA]), 1 !== aT.id && aXd.push(["iOS App", aFw.lB]), 0 === aT.id && aXd.push([
			"Patreon", aFw.l9
		]), aXd.push(["Terms", aFw.l3]), aXd.push(["Privacy", aFw.l4]), dx.ej(4, 1, new x9(L(475), aa.ab.aXc(aXd), !1, [new eG("⬅️ " + L(22), function() {
			dx.ej(1)
		})]))
	}), new eG(L(476), function() {
		dx.ej(4, 1, new x9(L(476), lh.og + "<br>" + jZ.fH.xG("/changelog") + "<br><br><lh>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></lh>", !0, [new eG("⬅️ " + L(22),
				function() {
					dx.ej(1)
				})]))
	}), new eG(L(477), function() {
		dx.ej(4, 1, new x9(L(477), L(484) + "<br>" + L(485), !1, [new eG("⬅️ " + L(22), function() {
			dx.ej(1)
		}), new eG(L(486), function() {
			aT.aU.aIV(), dx.ej(1)
		})]))
	}), new eG("👁️ " + L(478), function() {
		aT.aU.aIW(), dx.ej(4, 1, new x9(L(487), L(488) + " " + jZ.fH.xG("/privacy"), !1, [new eG("⬅️ " + L(22), function() {
			dx.ej(1)
		})]))
	})], mP = [new eG("⬅️ " + L(22), function() {
		dx.fH.a6z()
	})], 8 === qp.tW() && (mN.unshift(new eG(L(71), function() {
		dx.ej(30)
	})), mN.unshift(new eG(L(481), function() {
		2 <= pz.aBp && (dx.eX(), nw.nM(), bc.bj = !0)
	}, 0, 1)), mN.unshift(new eG(L(482), function() {
		!c.bl && nK.o1(c.t) && (ss.a1M.xu(), dx.eX(), nK.nL) && nK.nM()
	}, 0, 1)), mN.unshift(new eG(L(483), function() {
		!c.bl && yI.a1f(c.t) && (a5h.a5i(2), ss.a1M.a1d(), dx.eX(), nK.nL) && nK.nM()
	}, 0, 1))), 1 === aT.id && 5 <= aT.og && mN.push(new eG(L(479), function() {
		aT.aU.aIX()
	})), eh = new eF(L(480), mP), mM = new mR(mN, eh.eM)
}

function aRw() {
	this.xm = function(player, ic) {
		aa.bY.a1D(0) && aa.bY.bZ(player) && ix.a3f(ic) && (eR.eS.aE0(0, player, ic), c.sL.iu(player, ic))
	}, this.xn = function(player, a3c, pn) {
		aa.bY.a1D(1) && aa.bY.bZ(player) && aa.bY.aYV(player, pn) && aa.bY.aTU(player, a3c, 12, 0) && aa.bY.aYg(player, pn) && ((pn = a0n.q5(player, ij.aTk[0])) || a0n.q6(player)) && (y.xV[player]++, eR.eS.aE0(1, player, a3c, ij.aTk[0]), o9.aGr
			.aTw(player, pn)) && (aa.bY.aTe(player), pz.aBv(player, a3c), o9.aGr.aTy(player))
	}, this.xo = function(player, a3c, aBM) {
		aa.bY.a1D(1) && aa.bY.bZ(player) && c.bJ && aa.bY.aYV(player, aBM) && aa.bY.aLq(player, aBM) && aa.bY.aLr(player, aa.bY.a3b(player, a3c), aBM) && a5e.iu(aBM, ij.zr[0]) && (eR.eS.aE0(2, player, a3c, aBM), ay.a5f(player, aBM))
	}, this.xp = function(player, a3c, aBO) {
		ij.ik[1] = 7 & aBO;
		var ic = aBO >> 3;
		aa.bY.a1D(1) && aa.bY.bZ(player) && ix.a3f(ic) && bQ.fh.jS(player) && bQ.fh.uX(ic) && aa.bY.aTU(player, a3c, 32, 0) && bQ.fb.jE(player, ic, 1) && (pz.aBy(player), eR.eS.aE0(3, player, a3c, aBO), aa.bY.aTe(player), aJ0.oq.xp(player), bQ.fH
			.t3(player))
	}, this.xq = function(player, a3c, io) {
		849 === a3c ? this.aZL(player, io) : aa.bY.a1D(1) && aa.bY.bZ(player) && aa.bY.aTU(player, a3c, 32, 0) && bQ.fo.iq(player, io) && (pz.aBy(player), eR.eS.aE0(4, player, a3c, io), aa.bY.aTe(player), aJ0.oq.xq(player), bQ.fH.t3(player))
	}, this.aZL = function(player, io) {
		aa.bY.a1D(1) && aa.bY.bZ(player) && bQ.fs.b8(player, io) && eR.eS.aE0(4, player, 849, io)
	}, this.xr = function(player, pn) {
		513 === pn ? this.a1d(player) : aa.bY.a1D(1) && aa.bY.bZ(player) && (pn = Math.min(pn, c.c2), a0n.q5(player, pn)) && (eR.eS.aE0(5, player, pn), a0n.pr(player, pn))
	}, this.xs = function(player, m4) {
		(aa.bY.a1D(1) || aa.bY.a1D(2)) && aa.bY.bZ(player) && (m4 = q.a0(m4, 0, 1023), eR.eS.aE0(6, player, m4), gN.a58(player, 0, m4))
	}, this.xt = function(player, aBT) {
		yI.a1e(player) && (eR.eS.aE0(7, player, aBT), yI.a2U(player, aBT))
	}, this.xu = function(player) {
		(aa.bY.a1D(0) || aa.bY.a1D(1)) && aa.bY.bZ(player) && nK.o1(player) && (eR.eS.aE0(8, player), aIy.xu(player))
	}, this.xv = function(player) {
		eR.eS.aE0(9, player), aIy.xv(player)
	}, this.a1d = function(player) {
		yI.a1f(player) && (eR.eS.aE0(5, player, 513), yI.a1d(player))
	}, this.xw = function(player, a3c, ic, pn) {
		aa.bY.a1D(1) && aa.bY.bZ(player) && aa.bY.aYV(player, pn) && aa.bY.aYg(player, pn) && ix.a3f(ic) && a1N.a1O.aTj(player, ic) && (a0n.q5(player, ij.aTk[0]) || a0n.q6(player)) && (eR.eS.aE0(10, player, (a3c << 10) + ij.aTk[0], ic), pn = aa
			.bY.aED(player, a3c), y.bW[player].push(ij.aTm[0]), a0n.iu(player, pn, ij.aTk[0]), aAZ.yd(player, !0), pz.aBz(player))
	}
}

function aJD() {
	var aYF, aZM, aKU, a32, aKN, aZN = 0,
		aZO = 0;

	function aZQ(ai) {
		var aZR = !0,
			cE = v.w,
			aS = (1 === aYF[ai].id ? aYF[ai].a2.fillStyle = v.aSP : aYF[ai].pn === c.c2 ? aYF[ai].a2.fillStyle = v.aSF : (j1.aV7(aYF[ai].pn), aYF[ai].a2.fillStyle = aa.color.aDr(ij.aDs[0], ij.aDs[1], ij.aDs[2], .87), 400 < aa.kt.a48(ij.aDs, 0, 2) &&
				(aZR = !1, cE = v.bs)), aYF[ai].canvas.width),
			nc = (aYF[ai].a2.clearRect(0, 0, aS, a32), aYF[ai].a2.fillRect(0, 0, aS, a32), aYF[ai].a2.fillStyle = cE, ! function(a2, aS, a32) {
				a2.fillRect(0, 0, aS, 1), a2.fillRect(0, a32 - 1, aS, 1), a2.fillRect(0, 0, 1, a32), a2.fillRect(aS - 1, 0, 1, a32)
			}(aYF[ai].a2, aS, a32), aZM + 2 * a32 < aS && (aYF[ai].a2.fillRect(aS - aZM - a32, 0, 1, a32), aYF[ai].a2.fillText(y.z[aYF[ai].pn], Math.floor((aS - aZM) / 2), Math.floor(.57 * a32))), 0 !== aYF[ai].id ? 0 : a32);
		aYF[ai].a2.fillText(aa.b1.b3(aYF[ai].po), Math.floor(aS - aZM / 2 - nc), Math.floor(.57 * a32)),
			function(ai, aS, nc, aZR) {
				aYF[ai].a2.fillStyle = aZR ? v.aRf : v.a5S;
				aZR = Math.floor(aZM * aYF[ai].po / aYF[ai].aZW);
				aYF[ai].a2.fillRect(Math.floor(aS - aZM - nc), a32 - aKN, aZR, aKN)
			}(ai, aS, nc, aZR), 0 === aYF[ai].id ? (aZU(ai, aS, aZR, cE), function(ai, aS, aZR) {
				aYF[ai].a2.strokeStyle = aZR ? v.a2X : v.aR7, aYF[ai].a2.fillRect(a32, 0, 1, a32);
				aZR = aS - a32;
				aYF[ai].a2.beginPath(), aYF[ai].a2.moveTo(Math.floor(.3 * a32 + aZR), Math.floor(a32 / 2)), aYF[ai].a2.lineTo(Math.floor(a32 - .3 * a32 + 0 + aZR), Math.floor(a32 / 2)), aYF[ai].a2.stroke(), aYF[ai].a2.beginPath(), aYF[ai].a2
					.moveTo(Math.floor(a32 / 2 + aZR), Math.floor(.3 * a32)), aYF[ai].a2.lineTo(Math.floor(a32 / 2 + aZR), Math.floor(a32 - .3 * a32 + 0)), aYF[ai].a2.stroke()
			}(ai, aS, aZR)) : aZU(ai, 2 * a32, aZR, cE)
	}

	function aZU(ai, aS, aZR, cE) {
		aYF[ai].a2.strokeStyle = aYF[ai].aZX ? v.fC : aZR ? v.aOw : v.aOv, aYF[ai].a2.fillStyle = cE, aYF[ai].a2.fillRect(aS - a32, 0, 1, a32), aYF[ai].a2.lineWidth = Math.max(Math.floor(a32 / 12), 3), aYF[ai].a2.lineCap = "round";
		aZR = .35;
		aS = a32 + 1, aYF[ai].a2.beginPath(), aYF[ai].a2.moveTo(Math.floor(aS - aZR * a32 + 0), Math.floor(aZR * a32)), aYF[ai].a2.lineTo(Math.floor(aS - a32 + aZR * a32), Math.floor(a32 - aZR * a32 + 0)), aYF[ai].a2.stroke(), aYF[ai].a2.beginPath(),
			aYF[ai].a2.moveTo(Math.floor(aS - a32 + aZR * a32), Math.floor(aZR * a32)), aYF[ai].a2.lineTo(Math.floor(aS - aZR * a32 + 0), Math.floor(a32 - aZR * a32 + 0)), aYF[ai].a2.stroke()
	}

	function aZj(ce, aZh) {
		for (var po, ai = aZh - 1; 0 <= ai; ai--) po = a0n.q9(c.t, ai), ce[ai].po !== po && (ce[ai].po = po, ce[ai].aZW = Math.max(po, ce[ai].aZW), ce[ai].a23 = !0)
	}

	function aZn(ce, aZl) {
		for (var mS = c.t << 3, zg = bQ.fH.zg, it = bQ.fH.it, zq = bQ.fH.zq, ai = aZl - 1; 0 <= ai; ai--) {
			var aZp = zq[mS + ai],
				po = zg[aZp];
			ce[ai].po !== po ? (ce[ai].po = po, ce[ai].aZW = Math.max(po, ce[ai].aZW), ce[ai].a23 = !0) : ce[ai].aZX || it[aZp] % 64 != 5 || (ce[ai].aZX = !0, ce[ai].a23 = !0)
		}
	}

	function aZP(m1) {
		m1.canvas = document.createElement("canvas"), gW.u1.font = aKU;
		var aS = aZM;
		m1.pn < c.c2 && 0 === m1.id && (aS += Math.floor(gW.u1.measureText(y.z[m1.pn] + "000").width)), aS += a32, 0 === m1.id && (aS += a32), m1.canvas.width = aS, m1.canvas.height = a32, m1.a2 = m1.canvas.getContext("2d", {
			alpha: !0
		}), m1.a2.font = aKU, aa.ab.textBaseline(m1.a2, 1), aa.ab.textAlign(m1.a2, 1)
	}

	function aZd(ai) {
		return ag.am() ? aW.aS - aYF[ai].canvas.width - ak.gap : ag.a3
	}

	function aZe(ai) {
		return Math.floor(2 * ak.gap + (ag.am() ? at.aY + ak.gap : 0) + ag.aY + ai * (1.3 * a32))
	}
	this.b = function() {
		aZN = aZO = 0, aYF = [], this.resize()
	}, this.resize = function() {
		aKU = e.aZ, a32 = e.fontSize + 5, a32 = Math.floor(1.25 * a32), aT.aU.aV() && (a32 = Math.floor(1.25 * a32)), aKN = Math.floor(.15 * a32), gW.u1.font = aKU, aZM = Math.floor(gW.u1.measureText("02 000 000 0000").width);
		for (var ai = aYF.length - 1; 0 <= ai; ai--) aZP(aYF[ai]), aZQ(ai)
	}, this.ap = function() {
		for (var ai = aYF.length - 1; 0 <= ai; ai--) aYF[ai].a23 && (aYF[ai].a23 = !1, aZQ(ai))
	}, this.gF = function(gP, gQ) {
		if (2 !== c.bH && 0 !== y.an[c.t] && !c.bl && !aa.bY.o2(c.t))
			for (var aZY, aZZ, aZa, aZb = aT.aU.aV() ? a32 : 0, aZc = aT.aU.aV() ? Math.floor(.15 * a32) : 0, ai = aYF.length - 1; 0 <= ai; ai--)
				if (aZY = aZd(ai), aZZ = aZe(ai), aZa = aYF[ai].canvas.width, aZZ - aZc <= gQ && gQ <= aZZ + a32 + aZc) {
					if (aZY - aZb <= gP && gP <= aZY + a32 + aZb) return aYF[ai].aZX || (aYF[ai].a23 = !0, aYF[ai].aZX = !0, 0 === aYF[ai].id ? ss.a1M.xr(aYF[ai].pn) : ss.a1M.aZL(aYF[ai].pn)), !0;
					if (0 === aYF[ai].id && aZY + aZa - a32 - aZb <= gP && gP <= aZY + aZa + aZb) return a5h.a5i(3), ss.a1M.xn(nl.a1R(), aYF[ai].pn), !0
				} return !1
	}, this.b8 = function() {
		var v5, v6, ce, aZh;
		0 === y.an[c.t] || aa.bY.o2(c.t) && !c.bl || (v5 = aYF.slice(0, aZN), v6 = aYF.slice(aZN, aZN + aZO), ce = v5, aZh = a0n.q7(c.t), function(ce, aZh) {
			if (aZN !== aZh) return 1;
			for (var ai = aZh - 1; 0 <= ai; ai--)
				if (ce[ai].pn !== a0n.q8(c.t, ai)) return 1;
			return
		}(ce, aZh) ? aZj(ce = function(ce, aZh) {
			var ai, pn, cT, po, aEw = [];
			loop: for (ai = 0; ai < aZh; ai++) {
				for (pn = a0n.q8(c.t, ai), cT = 0; cT < ce.length; cT++)
					if (ce[cT].pn === pn) {
						aEw.push(ce.splice(cT, 1)[0]);
						continue loop
					} po = a0n.q9(c.t, ai), aZP(po = {
					pn: pn,
					po: po,
					aZW: po,
					id: 0,
					a23: !0,
					aZX: !1,
					canvas: null,
					a2: null
				}), aEw.push(po)
			}
			return aEw
		}(ce, aZh), aZh) : aZj(ce, aZh), v5 = ce, v6 = function(ce) {
			var aZl = bQ.fH.uU[c.t];
			return function(ce, aZl) {
				if (aZO !== aZl) return 1;
				for (var mS = c.t << 3, il = bQ.fH.il, zq = bQ.fH.zq, ai = aZl - 1; 0 <= ai; ai--) {
					var aZp = zq[mS + ai];
					if (ce[ai].pn !== il[aZp]) return 1
				}
				return
			}(ce, aZl) ? aZn(ce = function(ce, aZl) {
				var ai, pn, cT, aEw = [],
					mS = c.t << 3,
					il = bQ.fH.il,
					zg = bQ.fH.zg,
					zq = bQ.fH.zq;
				loop: for (ai = 0; ai < aZl; ai++) {
					var aZp = zq[mS + ai];
					for (pn = il[aZp], cT = 0; cT < ce.length; cT++)
						if (ce[cT].pn === pn) {
							aEw.push(ce.splice(cT, 1)[0]);
							continue loop
						} aZp = zg[aZp], aZP(aZp = {
						pn: pn,
						po: aZp,
						aZW: aZp,
						id: 1,
						a23: !0,
						aZX: !1,
						canvas: null,
						a2: null
					}), aEw.push(aZp)
				}
				return aEw
			}(ce, aZl), aZl) : aZn(ce, aZl), ce
		}(v6), aZN = v5.length, aZO = v6.length, aYF = v5.concat(v6))
	}, this.bm = function() {
		if (0 !== y.an[c.t] && (!aa.bY.o2(c.t) || c.bl))
			for (var ai = aYF.length - 1; 0 <= ai; ai--) bn.drawImage(aYF[ai].canvas, aZd(ai), aZe(ai))
	}
}

function aWb() {
	var aZq, aZr;
	this.aKg = 3, this.lj = null, this.qt = 0, this.tO = 0;

	function aZw() {
		return 0 === a8e.aKb ? lh.aKd ? 1 : 0 : a8e.aKb - 1
	}

	function aZy(r9, el, lW) {
		aZr[r9].aXz = !0, aZt(r9), aZq[r9] = new lQ, aZq[r9].b(r9, el, lW)
	}

	function lc(ai) {
		return aZr[ai].aXz && aZq[ai].lc()
	}

	function aZt(r9) {
		aZr[r9].iV = bc.iV, aZr[r9].aBH = !1
	}
	this.b = function() {
		this.lj = new Array(this.aKg), this.lj[0] = "territorial.io", this.lj[1] = "1.territorial.io", this.lj[2] = "4.territorial.io", aZq = new Array(this.aKg), aZr = new Array(this.aKg);
		for (var ai = this.aKg - 1; 0 <= ai; ai--) aZr[ai] = {
			aXz: !1,
			iV: 0,
			aBH: !1
		};
		this.tP(0, 0, 0)
	}, this.aD4 = function(ai) {
		return aZq[ai]
	}, this.b8 = function() {
		for (var ai = this.aKg - 1; 0 <= ai; ai--) this.lZ(ai) && bc.iV > aZr[ai].iV + 15e3 && (jZ.tQ.aBG(ai, aZr[ai].aBH), aZt(ai));
		!this.lZ(0) && bc.iV > aZr[0].iV + 8e3 && (aZr[0].iV = bc.iV, this.tP(0, 0, 0))
	}, this.aUg = function(id) {
		return this.tP(0, id, 0) && this.la(0)
	}, this.aZu = function(aZv) {
		return aZv ? a8e.aKc : aZw()
	}, this.a9C = function() {
		return aZw() ? "game.territorial.io" : "territorial.io"
	}, this.xG = function(aZx) {
		aZx = this.a9C() + aZx;
		return "<a href='https://" + aZx + "' target='_blank'>" + aZx + "</a>"
	}, this.tP = function(r9, el, aZv) {
		aZv = this.aZu(aZv);
		if (aZr[r9].aXz) {
			if (aZq[r9].lc()) return aZq[r9].ld(el), aZq[r9].lZ();
			aZq[r9].du()
		}
		return aZy(r9, el, aZv), !1
	}, this.ll = function(r9, el) {
		console.log("Connection to Server " + r9), jZ.rs.vK(r9)
	}, this.la = function(ai) {
		return this.lZ(ai) && aZq[ai].la()
	}, this.lb = function(ai) {
		aZq[ai].lb()
	}, this.lZ = function(ai) {
		return aZr[ai].aXz && aZq[ai].lZ()
	}, this.send = function(r9, lf) {
		0 !== r9 && aZt(r9), aZq[r9].send(lf)
	}, this.a8K = function(r9) {
		8 === qp.tW() && (aZr[r9].aBH = !0, jZ.aMP.aIM = !0)
	}, this.close = function(r9, lg) {
		lc(r9) && aZq[r9].close(lg)
	}, this.ja = function(r9, lg) {
		aGC.a9n(lg), lc(r9) && aZq[r9].close(lg)
	}, this.kK = function(lg) {
		for (var ai = this.aKg - 1; 0 <= ai; ai--) this.close(ai, lg)
	}, this.aZz = function(r9, lg) {
		for (var ai = this.aKg - 1; 0 <= ai; ai--) ai !== r9 && this.close(ai, lg)
	}, this.aXS = function() {
		0 === this.qt && (c.aH || c.bl) || this.close(this.qt, 3246)
	}, this.ln = function(r9, cc) {
		aZq[r9].du(), aGC.a9c(r9, cc.code)
	}
}

function aWw() {
	var aa0 = [],
		a3p = [],
		aa1 = [];

	function aa3(ht) {
		for (var hU = ht.hU, aa2 = [];;) {
			var cY = function aa5(hU, position) {
				position = hU.indexOf("@", position);
				if (position < 0) return -1;
				var be = hU.substring(position + 1, position + 6);
				if (5 !== be.length) return aa5(hU, position + 1);
				if (aa.b1.startsWith(be, "room")) return aa5(hU, position + 1);
				var aaC = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aaC.test(be)) return aa5(hU, position + 1);
				aaC = hU.substring(position + 6, position + 7);
				if (1 !== aaC.length) return position;
				be = new RegExp("^[ :!.]+$");
				if (!be.test(aaC)) return aa5(hU, position + 1);
				return position
			}(hU, 0);
			if (-1 === cY) {
				aa2.push(aa6(hU, ht));
				break
			}
			0 === cY ? aa2.push(aa7(hU.substring(1, 6), ht, cY)) : (aa2.push(aa6(hU.substring(0, cY), ht)), aa2.push(aa7(hU.substring(cY + 1, cY + 6), ht, cY))), hU = hU.substring(cY + 6)
		}
		return aa2
	}

	function aa7(be, ht, cY) {
		var aXg = function(be) {
				var hT = es.et.aA0(be, 5),
					aXg = hq.hr.ho(hT);
				if (aXg) {
					for (aa0.push(aXg); 75 < aa0.length;) aa0.shift();
					return aXg
				}
				for (var aXe = hq.hr.aXe, ai = aXe.length - 1; 0 <= ai; ai--)
					if (aXg = aXe[ai], hT === aXg.hT) return aa0.push(aXg), aXg;
				for (ai = aa0.length - 1; 0 <= ai; ai--)
					if (aXg = aa0[ai], hT === aXg.hT) return aa0.push(aXg), aXg;
				return hq.hr.aXh(hT, be, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(be),
			be = (0 === cY && 0 === ht.hQ.id && ht.he && (ht.fontSize = hq.bR.hl(aXg.hk, aXg.hm), ht.hd = hq.bR.hn(aXg.hm)), document.createElement("span"));
		return be.textContent = function(aXg, ht, cY) {
				if (aXg.aaA) return aXg.aaA--, cY = 2 === ht.hQ.id || (3 === ht.hQ.id || 4 === ht.hQ.id) && 0 !== cY, aXg.username + (cY ? " (" + aXg.aXp + ")" : "");
				if (ht.hQ.i6) return "Redacted " + hS.et.b3(aXg.hT, 2);
				return aXg.username
			}(aXg, ht, cY), be.style.display = "inline-block", be.style.color = hq.bR.hj(aXg.hk), 11 === aXg.hk && (be.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), be.style.cursor =
			"pointer", be.style.margin = "0", be.style.font = "inherit", be.style.minWidth = be.style.minHeight = "1em", hq.bR.hs(aXg) && (be.style.textDecoration = "underline"), aXg.qz && (be.style.textDecorationLine = "underline", be.style
				.textDecorationStyle = "dotted"), hq.bR.hn(aXg.hm) && (be.style.fontWeight = "bold"), be.onclick = function(cc) {
				hq.k7.k8(cc, aXg)
			}, di.dj() || (be.onmouseover = function(cc) {
				hq.l0.r0(cc.target, aXg)
			}), a3p.push(be), be
	}

	function aa6(hU, ht) {
		var kB = document.createElement("span");
		return kB.textContent = hU, kB.style.color = ht.hf, kB.style.margin = "0", kB.style.font = "inherit", kB
	}

	function aaH(aXg, aXo, hT) {
		hT !== aXg.hT || aXg.aXp || (aXg.aXp = aXg.username, aXg.username = aXo)
	}
	this.kJ = function() {
		for (var ai = 0; ai < a3p.length; ai++) a3p[ai].onclick = a3p[ai].onmouseover = null;
		aa1 = a3p = null
	}, this.transform = function(ht) {
		for (var dp = document.createElement("div"), aa2 = aa3(ht), ai = 0; ai < aa2.length; ai++) dp.appendChild(aa2[ai]);
		0 === ht.hQ.id && (dp.vx143 = ht.hQ, aa1.push(dp)), dp.style.margin = "0.6em 0.6em", ht.he && (dp.style.marginLeft = dp.style.marginRight = "inherit"), dp.style.font = "inherit";
		var aa4 = 0 < ht.hQ.id;
		return ht.hd && (dp.style.fontWeight = "bold"), aa4 && (dp.style.paddingLeft = "0.7em"), aa4 && (dp.style.fontStyle = "italic"), dp.style.fontSize = ht.fontSize.toFixed(2) + "em", dp
	}, this.aaF = function(aaG) {
		if (aaG && (2 === aaG.id && 1 === aaG.hW || 3 === aaG.id && 2 === aaG.hW)) {
			var hT = 3 === aaG.id ? aaG.target : aaG.hT;
			if (!hq.hr.ho(hT)) {
				for (var aXo = "Redacted " + hS.et.b3(hT, 2), aXe = hq.hr.aXe, ai = aXe.length - 1; 0 <= ai; ai--) aaH(aXe[ai], aXo, hT);
				for (ai = aa0.length - 1; 0 <= ai; ai--) aaH(aa0[ai], aXo, hT)
			}
		}
	}, this.aXq = function(hT) {
		for (var aaI = aa1, aaJ = "@" + hS.et.b3(hT, 5), ai = aaI.length - 1; 0 <= ai; ai--) {
			var cS = aaI[ai];
			if (cS.vx143.hT === hT || 0 <= cS.vx143.hU.indexOf(aaJ)) {
				for (; cS.firstChild;) dx.removeChild(cS, cS.firstChild);
				for (var aa2 = aa3(hq.bR.hb(cS.vx143, hq.bR.hP(cS.vx143))), cy = 0; cy < aa2.length; cy++) cS.appendChild(aa2[cy]);
				aaI.splice(ai, 1)
			}
		}
	}, this.i0 = function(hT) {
		for (var aaI = aa1, ai = aaI.length - 1; 0 <= ai; ai--) {
			var cS = aaI[ai];
			if (cS.vx143.hT === hT) {
				for (; cS.firstChild;) dx.removeChild(cS, cS.firstChild);
				cS.vx143.hU = "[Redacted Message]";
				for (var aa2 = aa3(hq.bR.hb(cS.vx143, hq.bR.hP(cS.vx143))), cy = 0; cy < aa2.length; cy++) cS.appendChild(aa2[cy]);
				aaI.splice(ai, 1)
			}
		}
	}
}

function aI9() {
	var eh, ei, ey, f2;

	function aaK() {
		vi.a6g !== ep.buffer.data[12].value ? (vi.b(), dx.ej(8, 1, new ex(30))) : dx.ej(1)
	}
	this.show = function() {
			eh.show(), this.resize()
		}, this.du = function() {
			eh.du()
		}, this.resize = function() {
			eh.resize(), ei.resize()
		}, this.ed = function(cY) {
			2 === cY && eh.ee[0].ef()
		}, eh = new eF(L(474), [new eG("⬅️ " + L(22), aaK), new eG(L(489), function() {
			dx.eX(), ep.eq.wg(), dx.ej(2)
		})]), ey = [], (f2 = new f3).f4(L(490)), f2.fA(L(491)), ey.push(f2),
		function(ey) {
			var f2 = new f3,
				ce = (f2.f4(L(142)), vi.data.a2f());
			f2.vx(new r2({
				ot: ce,
				value: vi.data.a2i(ce)
			}, function(f7) {
				return ep.eq.er(12, ce[f7].split(":")[0]), !0
			})), ey.push(f2)
		}(ey),
		function(ey) {
			var f2 = new f3,
				aaN = (f2.f4(L(516)), []);
			f2.f5(new f9([new eG(L(141), function(cc) {
				a8W.aaO();
				for (var ai = 0; ai < aaN.length; ai++) aaN[ai].cc.value = a8W.aAI[ai];
				return aa.ab.xO(cc), !0
			}).button]));
			for (var ai = 0; ai < a8W.aaP.length; ai++) {
				f2.fA(a8W.aaP[ai]);
				for (var cy = 0; cy < 2; cy++) {
					var f7 = 2 * ai + cy,
						kF = new f6({
							value: a8W.aAI[f7],
							f7: -1
						});
					kF.cc.aaQ = f7, aaN.push(kF), kF.cc.addEventListener("keydown", function(cc) {
						cc.preventDefault();
						var code = cc.code;
						cc.target.value = code, a8W.aaR(cc.target.aaQ, code)
					}), cy && (kF.cc.style.marginLeft = "4%"), kF.cc.style.width = "48%", f2.f5(kF)
				}
			}
			ey.push(f2)
		}(ey), (f2 = new f3).f4(L(492)), ep.buffer.data[1].ot = [L(493), L(494), L(495), L(496)], f2.vx(new r2(ep.buffer.data[1])), ey.push(f2), (f2 = new f3).f4(L(497)), ep.buffer.data[9].ot = [L(494), L(498), L(499)], f2.vx(new r2(ep.buffer.data[
			9])), ey.push(f2), (f2 = new f3).f4(L(500)), ep.buffer.data[11].ot = [L(501), L(440), L(502)], f2.vx(new r2(ep.buffer.data[11])), ey.push(f2), (f2 = new f3).f4(L(503)), f2.f5(new a4A(ep.buffer.data[2])), ey.push(f2), (f2 = new f3).f4(L(
			504)), f2.f5(new a4A(ep.buffer.data[7])), ey.push(f2), (f2 = new f3).f4(L(505)), f2.f5(new a4A(ep.buffer.data[8])), ey.push(f2), (f2 = new f3).f4(L(506)), f2.f5(new f6(ep.buffer.data[5])), ey.push(f2), (f2 = new f3).f4(L(507)), f2.f5(
			new a4A(ep.buffer.data[13], L(508))), f2.f5(new a4A(ep.buffer.data[14], L(509))), ey.push(f2), (f2 = new f3).f4(L(510)), f2.vx(new r2({
			ot: [L(511), L(512), L(513)],
			value: a8e.aKb
		}, function(ai) {
			a8e.aKb = ai
		})), ey.push(f2), (f2 = new f3).f4(L(514)), f2.f5(new a4A(ep.buffer.data[15])), f2.fA(L(515)), f2.f5(new f6(ep.buffer.data[16], 1, 0, function(cc) {
			cc.target.value = q.a0(Math.floor(cc.target.value), 0, 16)
		})), ey.push(f2), ei = new en(eh.eM, ey)
}

function aJI() {
	var nG, aaS, aS, aY, ng, aaT, aaU, aMT, canvas, aMU, aaV;

	function g8() {
		return Math.floor((aW.aS - aS) / 2) < nl.aY + 2 * ak.gap ? aW.aY - aY - 4 * ak.gap - nl.aY : aW.aY - aY - 2 * ak.gap
	}
	this.b = function() {
		aaV = nG = !1, ng = .61, aaT = .07, aaU = .09, aMU = aMT = aY = 0
	}, this.resize = function() {
		var a2, ne, cY, aaZ, aaa, nn;
		nG && (aS = aI1(aS = aT.aU.aV() ? Math.floor(.69 * aW.aX) : Math.floor(.5 * aW.aX), aF4(aW.aS - 2 * ak.gap, 10)), aS = aI1(aS, Math.floor(3.57 * aF4(aW.aY - 2 * ak.gap, 3))), aY = Math.floor(.28 * aS), (canvas = document.createElement(
			"canvas")).width = aS, canvas.height = aY, a2 = canvas.getContext("2d", {
			alpha: !0
		}), ne = Math.floor(1 + aY / 40), a2.clearRect(0, 0, aS, aY), a2.fillStyle = v.x, a2.fillRect(ne, ne, aS - 2 * ne, aY - 2 * ne), a2.lineJoin = "bevel", a2.lineWidth = 2 * ne, a2.strokeStyle = v.w, a2.strokeRect(ne, ne, aS - 2 *
			ne, aY - 2 * ne), a2.imageSmoothingEnabled = !1, cY = np.get(aaS), aaZ = cY.width, nn = (1 === aaS ? .85 : 21 === aaS ? .666 : .9) * ng * aY / (aaa = cY.height), a2.setTransform(nn, 0, 0, nn, Math.floor((aS - nn * aaZ) / 2),
			Math.floor((aY - nn * aaa) / 2)), a2.drawImage(cY, 0, 0), a2.setTransform(1, 0, 0, 1, Math.floor(aS - aaU * aY - aaT * aY - ne), Math.floor(ne + aaT * aY)), function(a2, b7) {
			a2.lineWidth = Math.floor(1 + aY / 80), a2.strokeStyle = v.w, a2.beginPath(), a2.moveTo(0, 0), a2.lineTo(b7, b7), a2.moveTo(0, b7), a2.lineTo(b7, 0), a2.stroke()
		}(a2, Math.floor(aaU * aY)), a2.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(d0, aaX, a2P, aaY) {
		nG || aaY && aaV || (aaS = a2P ? 21 : d0 ? 1 : 2, nG = aaV = !0, this.resize(), sK.du(), nl.a2J(), aMU = bc.iV, aMT = aaX ? 1 : 0)
	}, this.b8 = function() {
		!nG || 1 <= aMT || (aMT = 1 < (aMT += 5e-4 * (bc.iV - aMU)) ? 1 : aMT, aMU = bc.iV, bc.bj = !0)
	}, this.gF = function(a3, a4) {
		return !(!nG || aMT <= 0 || (a3 -= Math.floor((aW.aS - aS) / 2), a4 -= g8(), a3 < 0) || a4 < 0 || aS < a3 || aY < a4 || (aS - aY / 3 < a3 && a4 < aY / 3 && (nG = !1, bc.bj = !0), 0))
	}, this.bm = function() {
		!nG || aMT <= 0 || (bn.globalAlpha = aMT, bn.drawImage(canvas, Math.floor((aW.aS - aS) / 2), g8()), bn.globalAlpha = 1)
	}
}

function aRV() {
	this.a2A = function(aac, f7, gu) {
		var pS = aac.height,
			pT = aa.ab.pR(pS, pS),
			pU = aa.ab.getContext(pT);
		return function(aS, pU, gu) {
			pU.fillStyle = gu, pU.beginPath(), pU.arc(aS / 2, aS / 2, .47 * aS, 0, 2 * Math.PI), pU.fill()
		}(pS, pU, gu), pU.drawImage(aac, -f7 * pS, 0), pT
	}, this.a2C = function(aae) {
		var pU, pV, pS = aae.height;
		return aae.width === pS && (pV = (pU = aa.ab.getContext(aae, !0)).getImageData(0, 0, pS, pS), aa.rd.aMI(pV.data, pS, pS, .9), pU.putImageData(pV, 0, 0)), aae
	}
}

function aJl() {
	this.lk = 2, this.ve = 1763, this.li = 0;
	this.rVersion = 25, this.b = function() {
		this.aGB = "2.16.60", this.og = "21 Oct 2026 [" + this.aGB + "]", this.hostname = window.location.hostname.toLowerCase(), this.vf = 0 <= this.hostname.indexOf("territorial.io"), this.aAr = 0 <= this.hostname.indexOf("github.io"), this
			.aKd = 0 <= this.hostname.indexOf("game.territorial.io"), this.vg = function() {
				try {
					return window.self !== window.top
				} catch (cc) {
					return !0
				}
			}(), this.aBI = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.vf + " validMod: " + +this.aAr)
	}, this.aGA = 0
}

function aWc() {
	this.aD5 = function(r9) {
		var username = ep.buffer.data[122].value.slice(0, 20),
			username = (jX.kX(24 + 16 * username.length + 18), jX.mD(1, 0), jX.mD(6, 1), jX.mD(10, lh.aBI), jX.mD(2, ep.buffer.data[158].value), jZ.rs.vk(username), aa.color.aDn(ep.fH.aEf()));
		jX.mD(6, username[0]), jX.mD(6, username[1]), jX.mD(6, username[2]), jZ.fH.tO = r9, jZ.fH.send(r9, jX.lf)
	}, this.kN = function(aak, un) {
		vT.b(), vT.mD(1, 0), vT.mD(6, 2), vT.mD(3, aak), 2 === aak ? vT.mD(2, un) : 3 === aak ? hS.jd.eV(un, 7, vT) : 5 === aak && (vT.mD(3, un.id), vT.mD(3, un.value), vT.mD(30, un.hT)), jZ.fH.send(jZ.fH.tO, vT.vU())
	}
}

function aWv() {
	function aam() {
		dx.ek(29) && (hq.fH.kz && 1 === hq.fH.kD[2] && dx.ek(29).kU(), hq.fH.kz = 0, dx.ek(29).kS(), dx.ek(29).kR(), hq.l0.aOT())
	}
	this.i1 = new Array(4), this.kD = [0, 0, 1, 0], this.kz = 0, this.ks = [0, 0], this.b = function() {
		for (var ai = 0; ai < this.i1.length; ai++) this.i1[ai] = new a9D;
		this.kD[0] = ep.buffer.data[158].value
	}, this.aal = function() {
		aam(), hq.aWr.b()
	}, this.aWL = function() {
		hq.aWr.aWL();
		for (var ai = 0; ai < hq.fH.i1.length; ai++) {
			var kW = hq.fH.i1[ai];
			0 === kW.ds ? kW.a9E = 0 : (kW.ke = Math.max(kW.ke - kW.a9E % 2, 0), kW.a9E++)
		}
		aam()
	}, this.aap = function(hi) {
		this.kD[0] !== hi || this.kD[2] || dx.ek(29).kw()
	}
}

function aJo() {
	this.aPU = 0, this.aPV = 0, this.aPP = 0, this.aPQ = 0, this.aPR = 0, this.aPS = 0, this.aVM = [0, 0, 0, 0], this.ga = function() {
		this.aPU = gd.g7(), this.aPV = gd.g8(), this.aPP = -this.aPU, this.aPQ = -this.aPV, this.aPR = aW.aS / fu, this.aPS = aW.aY / fu, this.aVM[0] = Math.floor(this.aPP), this.aVM[1] = Math.floor(this.aPQ), this.aVM[2] = Math.floor(this.aVM[
			0] + this.aPR + 1), this.aVM[3] = Math.floor(this.aVM[1] + this.aPS + 1), ns.aaq = !0
	}
}

function aIA() {
	var aar, aas, a71, kF, aat, aNT = 0;
	this.aKK = new a3m, a71 = new n8([.45, .27], [.5, .5], 2 / 3), aas = [new eG("⚔️<br>" + L(517), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aau(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : v.aSK), new eG("🗡️<br>" + L(518), function() {
			aau(1)
		}, v.a3u), new eG("🔑<br>" + L(519), function() {
			aau(2)
		}, v.aST), new eG("☰<br>" + L(520), function() {
			aau(3)
		}, v.aSG), new eG("", function() {
			dx.ej(12)
		}, v.iM, !1),
		new eG("Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)")
	], kF = new f6(ep.buffer.data[122]);
	for (var ai = 0; ai < aas.length; ai++) aas[ai].button.style.position = "absolute";

	function aau(f7) {
		aT.aU.setState(10), np.a45() || np.aK3(), 0 === f7 ? dx.fH.aXT(1) : 1 === f7 ? (eR.eb.ec(ep.buffer.data[156].value, 1) || c.qr.aav(), dx.ej(19)) : 2 === f7 ? 0 !== aT.id || ep.buffer.data[140].value ? dx.ej(8, dx.jf, new ex(16)) : dx.fH.aZK(
			dx.jf, 16) : 3 === f7 && dx.ej(1)
	}
	kF.cc.style.position = "absolute", kF.cc.style.textAlign = "center", kF.cc.placeholder = L(521), this.show = function() {
		qp.setState(0), aT.aU.setState(12), this.aKK.show(), aas[4].iE(aa.color.aDp(ep.buffer.data[121].value)), this.resize(), document.body.appendChild(kF.cc);
		for (var ai = 0; ai < aas.length; ai++) document.body.appendChild(aas[ai].button);
		1 !== aT.id || aT.og < 5 || (aat && bc.iV > aat + 144e5 ? aT.oi.setState(14) : aat = bc.iV)
	}, this.du = function() {
		this.aKK.du(), dx.removeChild(document.body, kF.cc);
		for (var ai = 0; ai < aas.length; ai++) dx.removeChild(document.body, aas[ai].button)
	}, this.resize = function() {
		this.aKK.resize(), this.aKK.resize(), a71.resize();
		var gap = .5 * ak.gap,
			e0 = 10 / 99 * .84 * a71.aS,
			aay = .16 * a71.aY,
			gU = .19 * a71.aS,
			a3 = a71.a3 + gU,
			e0 = a71.a4 + e0 + 3 * gap,
			aS = .5 * (a71.aS - gap) - gU,
			gU = a71.aS - 2 * gU - aay - gap,
			gU = (aa.ab.a43(kF.cc, a3, e0, gU, aay), aa.ab.a43(aas[4].button, a3 + gU + gap, e0, aay, aay), aNT = e0, .5 * (a71.a4 + a71.aY - (e0 += aay + gap) - gap));
		aa.ab.a43(aas[0].button, a3, e0, aS, gU), aa.ab.a43(aas[1].button, a3 + aS + gap, e0, aS, gU), aa.ab.a43(aas[2].button, a3, e0 + gU + gap, aS, gU), aa.ab.a43(aas[3].button, a3 + aS + gap, e0 + gU + gap, aS, gU);
		aa.ab.a43(aas[5].button, a3, e0 + gU * 2 + gap * 2, aS * 2 + gap, gU / 3);
		for (var ai = 0; ai < aas.length; ai++) aas[ai].button.style.font = aa.ab.ac(0, aa.ab.aEM(.065 * a71.aY)), aa.ab.eA(aas[ai].button, 5);
		kF.cc.style.font = aa.ab.ac(0, aa.ab.aEM(.08 * a71.aY)), aa.ab.eA(kF.cc, 5)
	}, this.bm = function() {
		if (qp.aPt(), a4z.bm(), b7 = Math.floor((aT.aU.aV() ? .018 : .0137) * aW.aX), bn.font = aa.ab.ac(0, Math.max(5, b7)), aa.ab.textBaseline(bn, 0), aa.ab.textAlign(bn, 2), bn.fillStyle = v.w, bn.fillText(lh.og, aW.aS, 0), text =
			"Win count: " + __fx.wins.count, textLength = bn.measureText(text).width, b7 = Math.max(5, b7), bn.textAlign = "left", bn.textBaseline = "middle", bn.fillText(text, bn.canvas.width - textLength - b7 / 2, 2 * b7), a6n.bm(aNT), aHv
		.bm(), np.a45()) {
			bn.imageSmoothingEnabled = !1;
			var text = np.tc("territorial.io"),
				textLength = .84 * a71.aS / text.width;
			bn.setTransform(textLength, 0, 0, textLength, a71.a3 + .08 * a71.aS, a71.a4), aar = aar || aa.rd.aKI(text, aa.rd.aMH, [0, 0, 0]);
			for (var a3 = -1; a3 <= 1; a3 += 2)
				for (var a4 = -1; a4 <= 1; a4 += 2) bn.drawImage(aar, a3, a4);
			bn.drawImage(text, 0, 0), bn.imageSmoothingEnabled = !0;
			var b7 = np.tc("logo"),
				ab0 = .6666 * textLength * text.height / b7.height,
				aDg = .5 * aW.aS,
				aDh = a71.a4 + .5 * textLength * text.height - .5 * ab0 * b7.height;
			bn.setTransform(ab0, 0, 0, ab0, aDg - .6 * textLength * text.width, aDh), bn.drawImage(b7, 0, 0), bn.setTransform(ab0, 0, 0, ab0, aDg + .6 * textLength * text.width - ab0 * b7.width, aDh), bn.drawImage(b7, 0, 0), bn.setTransform(1, 0,
				0, 1, 0, 0), bn.imageSmoothingEnabled = !0
		}
	}
}

function aIE() {
	var eh, mM, mN, mP;

	function mO(ai) {
		dx.ej(8, dx.jf, new ex(21, {
			jb: ai,
			mS: 0,
			mT: 10
		}))
	}
	this.show = function() {
		eh.show(), this.resize()
	}, this.du = function() {
		eh.du()
	}, this.resize = function() {
		eh.resize(), mM.resize()
	}, this.ed = function(cY) {
		2 === cY && eh.ee[0].ef()
	}, mN = [new eG(L(275), function() {
		mO(5)
	}, 0, 0, 1), new eG(L(276), function() {
		mO(6)
	}, 0, 0, 1), new eG(L(277), function() {
		mO(7)
	}, 0, 0, 1), new eG("Audit Log", function() {
		mO(12)
	}, 0, 0, 1)], mP = [new eG("⬅️ " + L(22), function() {
		dx.mQ()
	})], eh = new eF(L(471), mP), mM = new mR(mN, eh.eM)
}

function aWd() {
	this.aMp = function() {
		for (var b7 = c.aI, pF = bT.result.pF, b6 = pF.length, xY = (jX.kX(17 + 16 * b7 + 33 * b6), jX.mD(1, 1), jX.mD(4, 12), jX.mD(10, b6), jX.mD(1, +(2 === c.yG)), jX.mD(1, c.a94 % 2), y.xY), ai = 0; ai < b7; ai++) jX.mD(16, xY[ai]);
		for (var aO = y.aO, ai = 0; ai < b6; ai++) {
			var pG = pF[ai];
			jX.mD(9, pG), jX.mD(24, aO[pG])
		}
		jZ.fH.send(jZ.fH.qt, jX.lf)
	}
}

function fe() {
	function ab2(oM, a3Y, a3a) {
		for (var cX = Math.min(a3Y, a3a), gJ = Math.max(a3Y, a3a), a4 = cX + 1; a4 < gJ; a4++)
			if (!j1.oS(ix.a3e(oM, a4))) return;
		return 1
	}

	function ab3(oO, a3X, a3Z) {
		for (var cX = Math.min(a3X, a3Z), gJ = Math.max(a3X, a3Z), a3 = cX + 1; a3 < gJ; a3++)
			if (!j1.oS(ix.a3e(a3, oO))) return;
		return 1
	}

	function ab4(a3X, a3Y, a3Z, a3a, aOG, aOH) {
		for (var b7 = Math.min(Math.abs(a3Z - a3X), Math.abs(a3a - a3Y)), d8 = Math.sign(a3Z - a3X), d9 = Math.sign(a3a - a3Y), ai = 0; ai < b7; ai++)
			if (!j1.oS(ix.a3e(a3X += d8, a3Y += d9))) return null;
		return a3X === a3Z ? ab2(a3X, a3Y, a3a) ? new Uint32Array([aOG, ix.oR(a3X, a3Y), aOH]) : null : ab3(a3Y, a3X, a3Z) ? new Uint32Array([aOG, ix.oR(a3X, a3Y), aOH]) : null
	}
	this.jE = function(aOG, aOH) {
		aOG = function(aOG, aOH) {
			var a3X = ix.oN(aOG),
				a3Y = ix.oP(aOG),
				a3Z = ix.oN(aOH),
				a3a = ix.oP(aOH);
			if (a3X === a3Z) {
				if (ab2(a3X, a3Y, a3a)) return new Uint32Array([aOG, aOH])
			} else {
				if (a3Y !== a3a) return ab4(a3X, a3Y, a3Z, a3a, aOG, aOH) || ab4(a3Z, a3a, a3X, a3Y, aOG, aOH);
				if (ab3(a3Y, a3X, a3Z)) return new Uint32Array([aOG, aOH])
			}
			return null
		}(aOG, aOH);
		return null === aOG ? -1 : bQ.fl.od(aOG)
	}
}

function aWe() {
	function ab6() {
		var id = jW.jc(3);
		return 0 === id ? {
			id: id,
			hT: jW.jc(30),
			hU: hq.kG.aHa(es.jd.ec(7))
		} : 1 === id ? {
			id: id,
			hT: jW.jc(30),
			hW: jW.jc(3),
			value: jW.jc(30),
			target: jW.jc(30)
		} : 2 === id ? {
			id: id,
			hT: jW.jc(30),
			hW: jW.jc(3)
		} : 3 === id ? {
			id: id,
			hT: jW.jc(30),
			hW: jW.jc(3),
			value: jW.jc(4),
			target: jW.jc(30)
		} : 4 === id ? {
			id: id,
			hT: jW.jc(30),
			hW: jW.jc(3),
			target: jW.jc(30)
		} : 5 === id ? {
			id: id,
			hW: jW.jc(6)
		} : 6 === id ? {
			id: id,
			value: jW.jc(17)
		} : null
	}
	this.a4g = function(r9) {
		if (r9 !== jZ.fH.tO) jZ.fH.close(r9, 3239);
		else if (6 !== qp.tW()) jZ.fH.close(r9, 3271);
		else {
			hq.b();
			for (var ai = 0; ai < 4; ai++) {
				var kW = hq.fH.i1[ai],
					playerCount = (kW.ds = jW.jc(10), kW.kY = jW.jc(6), kW.mapSeed = jW.jc(14), kW.kc = jW.jc(4), kW.kg = jW.jc(6), kW.kh = jW.jc(14), kW.ki = jW.jc(4), kW.kp = jW.jc(1), kW.ke = jW.jc(12), kW.spawningSeed = jW.jc(14), jW.jc(16));
				hq.hr.km[ai] = jW.jc(16);
				for (var cy = 0; cy < playerCount; cy++) hq.hr.yr(ai, jW.jc(30), es.jd.ec(5), jW.jc(4), jW.jc(30), jW.jc(7), jW.jc(16), jW.jc(18), jW.jc(11), jW.jc(12), jW.jc(6))
			}
			dx.ej(29), hq.fH.aal(!0)
		}
	}, this.a4r = function(r9) {
		if (r9 !== jZ.fH.tO) jZ.fH.close(r9, 3239);
		else if (hq.kE) {
			hq.fH.ks[0] = jW.jc(20), hq.fH.ks[1] = jW.jc(20);
			for (var ab5 = jW.jc(16), cy = 0; cy < ab5; cy++) {
				var id = jW.jc(3);
				0 === id ? hq.hr.yr(jW.jc(2), jW.jc(30), es.jd.ec(5), 0, 1234566, 127, 0, jW.jc(18), 0, jW.jc(12), 0) : 1 === id ? hq.hr.aXv(jW.jc(16), jW.jc(2)) : 2 === id ? hq.hr.aXr(jW.jc(16), jW.jc(2), jW.jc(2)) : 3 === id ? hq.hr.aXu(jW.jc(
					16), jW.jc(2)) : 4 === id ? hq.hr.aXj(jW.jc(16), jW.jc(2), jW.jc(4), jW.jc(30), jW.jc(7), jW.jc(16), jW.jc(11), jW.jc(18)) : 5 === id ? hq.hr.aXl(jW.jc(16), jW.jc(2), jW.jc(1)) : 6 === id && hq.hr.aXk(jW.jc(16), jW.jc(2),
					jW.jc(6))
			}
			for (var ai = 0; ai < 4; ai++) {
				var kW = hq.fH.i1[ai];
				if (kW.ds = jW.jc(10), kW.kg = jW.jc(6), kW.kh = jW.jc(14), kW.ki = jW.jc(4), 0 === kW.ds) {
					if (kW.qt = jW.jc(10), kW.tE = jW.jc(10), hq.tX.aJz(ai)) return;
					kW.kY = jW.jc(6), kW.mapSeed = jW.jc(14), kW.kc = jW.jc(4), kW.kp = jW.jc(1), kW.ke = jW.jc(12), kW.spawningSeed = jW.jc(14), kW.a9F.push(kW.a9F[0]), kW.a9F.shift()
				}
			}
			hq.fH.aWL()
		} else jZ.fH.close(r9, 3251)
	}, this.a4s = function(r9) {
		if (r9 !== jZ.fH.tO) jZ.fH.close(r9, 3272);
		else if (hq.kE) {
			for (var hi = jW.jc(4), kW = hq.fH.i1[hi], i3 = kW.i3, n0 = (kW.a6W = jW.jc(20), jW.jc(6)), ai = 0; ai < n0; ai++) {
				var aaG = ab6();
				hq.h7.aaF(aaG), i3.push(aaG)
			}
			hq.fH.aap(hi)
		} else jZ.fH.close(r9, 3273)
	}, this.a4t = function(r9) {
		r9 !== jZ.fH.tO ? jZ.fH.close(r9, 3276) : hq.kE ? hq.message.aHW(ab6()) : jZ.fH.close(r9, 3277)
	}
}

function aI3() {
	this.buffer = {}, this.a40 = new Array(8), this.aID = null, this.aIC = null, this.aPj = 0, this.aLL = [0, 0], this.a9r = function() {
		dx.ej(5, 5)
	}, this.aXT = function(va) {
		va && (a8e.aAv = va), dx.eX(), a8e.b()
	}, this.a6z = function() {
		dx.ej(0 === qp.tW() ? 5 : 0)
	}, this.aBh = function() {
		if (1 === ep.buffer.data[130].value) dx.ej(8, dx.jg().el, new ex(24, {
			a7W: ep.buffer.data[125].value,
			mS: ep.buffer.data[128].value,
			mT: ep.buffer.data[129].value
		}));
		else {
			for (var ce = (ce = ep.buffer.data[126].value.split(",")).slice(0, 10), ai = 0; ai < ce.length; ai++) ce[ai] = ce[ai].trim().slice(0, 7).toUpperCase();
			1 === ce.length && 0 === ce[0].length && (ce = []), dx.ej(8, dx.jg().el, new ex(23, {
				a7W: ep.buffer.data[125].value,
				cm: ce
			}))
		}
	}, this.aZK = function(el, target) {
		dx.ej(4, el, new x9("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + jZ.fH.xG(
				"/privacy"), !1, [new eG("⬅️ " + L(22), function() {
				dx.ej(el)
			}), new eG("✅ Accept", function() {
				ep.eq.er(140, 1), 0 === target ? dx.ej(2, el) : dx.ej(8, el, new ex(target))
			})]))
	}, this.a4w = function() {
		for (var ai = 0; ai < 8; ai++) this.a40[ai] = es.jk.jl(jW.jc(5));
		this.a40[1] = "[" + this.a40[1] + "]", 5 === dx.jf && (dx.jg().aKK.er(this.a40), dx.jg().resize())
	}, this.xP = function(d0, tQ, lp) {
		d0 = aa.bY.aQz(d0, 1, 1e6);
		tQ = L(522, [tQ]);
		return (tQ += "<br>") + L(523, [lp]) + "<br>" + L(524, [d0 + "–" + (d0 + 2)]) + "<br>" + L(525, [d0])
	}
}

function fc() {
	this.o7 = function(player, aOH) {
		return -1 !== aOH && !!bQ.bR.ob(player, aOH) && this.jE(player, aOH, 0)
	}, this.jE = function(player, aOH, ab7) {
		player = function(player, aOH, ab7) {
			var j8 = bQ.bR.j9(player, aOH);
			if (-1 === j8) return -1;
			j8 = bQ.bR.aQG(j8, aOH);
			if (-1 === j8) return -1;
			var oU = bQ.fl.oc(j8, aOH);
			if (0 <= oU) return oU;
			if (bQ.fl.jT()) return -1;
			if (0 <= (oU = bQ.fl.oc(aOH, j8))) return bQ.fl.od(bQ.fl.jN(bQ.fl.get(oU)));
			if (j8 === aOH) return bQ.fl.od(new Uint32Array([j8, aOH]));
			if (0 <= (oU = bQ.fd.jE(j8, aOH))) return oU;
			return ab7 ? function(ab9, player) {
				var aUF = ij.aUF,
					buffer = (aUF.fill(0), [ab9]),
					a3N = (aUF[ab9] = 1, ix.a3N),
					aHh = -1,
					b7 = buffer.length;
				for (; - 1 === aHh && b7;) {
					for (var ce = [], ai = 0; ai < b7; ai++)
						for (var ic = buffer[ai], a9I = aUF[ic], cS = 0; cS < 8; cS++) {
							var a9x, aWo, aTn = ic + a3N[cS],
								ar = 4 * aTn;
							j1.oS(ar) ? (a9x = aUF[aTn], aWo = a9I + 5 + ((1 & cS) << 1), 0 === a9x ? (ce.push(aTn), aUF[aTn] = aWo) : aUF[aTn] = Math.min(aWo, a9x)) : -1 === aHh && cS % 2 == 0 && j1.a5q(player, ar) && (aHh = ic)
						}
					b7 = (buffer = ce).length
				}
				return -1 !== aHh ? function(oY, abB) {
					var a3N = ix.a3N,
						abC = -1,
						vA = 0,
						qH = [];
					for (; abB !== oY;)(vA = function(ic, vA) {
						var aUF = ij.aUF,
							a3N = ix.a3N,
							a9I = aUF[ic];
						if (a9I - aUF[ic + a3N[vA]] != 5 + ((1 & vA) << 1))
							for (var cy = 0; cy < 8; cy++) {
								var cS = cy + vA + 6 & 7;
								if (a9I - aUF[ic + a3N[cS]] == 5 + ((1 & cS) << 1)) return cS
							}
						return vA
					}(abB, vA)) !== abC && (qH.push(abB), abC = vA), abB += a3N[vA];
					qH.push(oY);
					var oU = bQ.fl.oc(qH[0], oY);
					if (0 <= oU) return oU;
					return bQ.fl.od(new Uint32Array(qH))
				}(ab9, aHh) : -1
			}(aOH, player) : -1
		}(player, aOH, ab7);
		return -1 !== player && (ij.ce[0] = bQ.fl.get(player), !0)
	}
}

function a8i() {
	var abE = null,
		vm = 2e4,
		abF = 0;
	this.b8 = function() {
		bc.iV < vm || (vm = bc.iV + 1e4, 0 !== aT.id) || abE || vo.vp() || (jZ.fH.lZ(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || jZ.rs.vV(5) : vm = bc.iV + 1e3)
	}, this.iu = function(cY) {
		abE = cY
	}, this.show = function() {
		return !(!abE || bc.iV < abF) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (abF = bc.iV + 6e4, (new a8t).show(abE.rW, abE.colors, abE.id), !(abE = null)))
	}
}

function aJx() {
	this.aaP = [L(526), L(527), L(528), L(529), L(530), L(531), L(532), L(533), L(534), L(535), L(536), L(537), L(538), L(539), L(540), L(541)];
	var abG = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aAI = new Array(abG.length), this.b = function() {
		var ce = ep.buffer.data[155].value.split(";"),
			b6 = ce.length;
		if (function() {
				for (var b7 = abG.length, ai = 0; ai < b7; ai++) a8W.aAI[ai] = abG[ai]
			}(), !(b6 > abG.length))
			for (var ai = 0; ai < b6; ai++) ce[ai].length && (this.aAI[ai] = ce[ai])
	}, this.aaR = function(f7, code) {
		for (var aAI = this.aAI, abI = abG, be = (aAI[f7] = code, ""), b7 = aAI.length, abJ = [], ai = 0; ai < b7; ai++) abJ.push(aAI[ai] === abI[ai] ? "" : aAI[ai]);
		b7--;
		for (ai = 0; ai < b7; ai++) be += abJ[ai] + ";";
		ep.eq.er(155, be += abJ[b7])
	}, this.aaO = function() {
		ep.eq.er(155, ""), this.b()
	}, this.cY = function(code, f7) {
		return code === this.aAI[f7] || code === this.aAI[f7 + 1]
	}
}

function aXP() {
	a0r = 0, abK = 2048, a18 = new Uint32Array(4 * abK), abL = 0, abM = new Uint32Array(abK), abN = new Uint8Array(gW.gX * gW.gY)
}

function yX(player) {
	a0o = player, a0m = !1, abO(), abP();
	for (var ai = a0n.q7(a0o) - 1; 0 <= ai; ai--) a0p = ai, abQ();
	a0m && abR()
}

function abR() {
	a0f.aYm(), a0f.aYn()
}

function abQ() {
	a0c = a0n.q8(a0o, a0p), a0q = a0n.q9(a0o, a0p), a16 = a0n.qD(a0o, a0p), abS(), (0 !== a0r && (abT(), abU()) ? a0Z : a0e)()
}

function abU() {
	if (!((a14 = q.aN(a0q, a0r)) > c.a0x)) {
		if (!a16) return !1;
		var abV = a0r * (1 + c.a0x);
		a0q += aa.bY.zw(a0o, abV - a0q), a14 = q.aN(a0q, a0r)
	}
	return !0
}

function abT() {
	for (var ai = a0r - 1; 0 <= ai; ai--) abN[q.aN(a18[ai], 4)] = 0
}

function a0e() {
	1 === a0n.q7(a0o) && aAZ.yc(a0o);
	var av = aa.bY.py(a0o, a0q);
	pz.q0(a0o, a0q - av, 12), a0n.q4(a0o, a0p)
}

function abO() {
	for (var player = a0o, bW = y.bW, b7 = Math.min(bW[player].length, abK), cW = 0, abW = abM, ai = b7 - 1; 0 <= ai; ai--) abW[cW++] = bW[player][ai];
	abL = cW
}

function abP() {
	for (var ai = y.bW[a0o].length - 1; 0 <= ai; ai--) j1.uZ(y.bW[a0o][ai]) && j1.a19(y.bW[a0o][ai], a0o);
	y.bW[a0o] = []
}

function abS() {
	a0r = 0, (a0c === c.c2 ? abX : abY)()
}

function abY() {
	for (var pG, iY, ai, a1g = j1.a1g, cS = 3; 0 <= cS; cS--)
		for (ai = abL - 1; 0 <= ai; ai--) pG = abM[ai] + a1g[cS], iY = q.aN(pG, 4), 0 === abN[iY] && j1.zY(pG) && j1.zZ(pG) === a0c && (abN[iY] = 1, a18[a0r++] = pG)
}

function abX() {
	for (var pG, iY, ai, a1g = j1.a1g, cS = 3; 0 <= cS; cS--)
		for (ai = abL - 1; 0 <= ai; ai--) pG = abM[ai] + a1g[cS], iY = q.aN(pG, 4), 0 === abN[iY] && j1.zb(pG) && (abN[iY] = 1, a18[a0r++] = pG)
}

function fn() {
	this.j4 = function(player, id) {
		for (var abZ = y.uW[player], b7 = abZ.length, ai = 0; ai < b7; ai++)
			if (ix.a3O(abZ[ai], id)) return !0;
		return !1
	}, this.j9 = function(player, ic) {
		for (var oZ, aba, ar, abZ = y.uW[player], b7 = abZ.length, aS = gW.gX, abc = ix.oN(ic), abd = ix.oP(ic), aTn = -1, min = gW.gX * gW.gX + gW.gY * gW.gY, id = j1.j2(ix.j3(ic)), ai = 0; ai < b7; ai++)(aba = (aba = abc - (oZ = (ar = abZ[
			ai]) >> 2) % aS) * aba + (aba = abd - ~~((.5 + oZ) / aS)) * aba) < min && ix.a3O(ar, id) && (min = aba, aTn = oZ);
		return aTn
	}, this.aQG = function(oY, oZ) {
		for (var id = j1.j2(ix.j3(oZ)), a3P = ix.a3M, ar = ix.j3(oY), abe = -1, ai = 0; ai < 4; ai++) {
			var a1Q = ar + a3P[ai];
			j1.oS(a1Q) && j1.j2(a1Q) === id && (-1 === abe || ix.a3W(ix.a3g(a1Q), oZ) < ix.a3W(abe, oZ)) && (abe = ix.a3g(a1Q))
		}
		return abe
	}, this.oa = function(player, ic) {
		for (var a3P = ix.a3M, ar = ix.j3(ic), ai = 0; ai < 4; ai++) {
			var a1Q = ar + a3P[ai];
			if (j1.zY(a1Q) && j1.aAW(player, a1Q)) return !0
		}
		return !1
	}, this.ob = function(player, ic) {
		for (var a3P = ix.a3M, ar = ix.j3(ic), ai = 0; ai < 4; ai++) {
			var a1Q = ar + a3P[ai];
			if (j1.zb(a1Q)) return !0;
			if (j1.zY(a1Q)) {
				a1Q = j1.zZ(a1Q);
				if (player !== a1Q && a0f.a1W(player, a1Q)) return !0
			}
		}
		return !1
	}, this.aYB = function(ic) {
		for (var a3P = ix.a3M, ar = ix.j3(ic), ai = 0; ai < 4; ai++) {
			var a1Q = ar + a3P[ai];
			if (j1.zY(a1Q)) {
				a1Q = j1.zZ(a1Q);
				if (aa.bY.o2(a1Q)) return a1Q
			}
		}
		return -1
	}, this.uY = function(ar) {
		if (j1.oS(ar))
			for (var a3P = ix.a3M, ai = 0; ai < 4; ai++)
				if (j1.uZ(ar + a3P[ai])) return !0;
		return !1
	}, this.zh = function(player, id) {
		for (var mS = player << 3, mT = mS + bQ.fH.uU[player], il = bQ.fH.il, zq = bQ.fH.zq, ai = mS; ai < mT; ai++) {
			var aZp = zq[ai];
			if (il[aZp] === id) return aZp
		}
		return -1
	}, this.abf = function(player) {
		return 0 === bQ.fH.uU[player] ? -1 : bQ.fH.zq[player << 3]
	}, this.ze = function(gP, gQ) {
		var b7 = bQ.fH.jO;
		if (b7 < 1) return -1;
		for (var iz = bQ.fH.iz, jP = 80, jR = -1, ai = 0; ai < b7; ai++) {
			var cQ = ix.a3R(gP, gQ, iz[ai]);
			cQ < jP && (jP = cQ, jR = ai)
		}
		return function(ai, gP, gQ) {
			if (ai < 0) return;
			var abk = bQ.fH.iz[ai],
				abl = ix.a3T(abk),
				abk = ix.a3V(abk),
				ai = 20 * (.9 + .1 * Math.log10(bQ.fH.zg[ai]));
			return ai = Math.max(ai, ix.a3d(aa.ab.a42(.02, 1.7))), q.dB(ix.a3S(gP), ix.a3U(gQ), abl, abk, ai)
		}(jR, gP, gQ) ? jR : -1
	}, this.ip = function(io) {
		for (var b7 = bQ.fH.jO, il = bQ.fH.il, ai = 0; ai < b7; ai++)
			if (il[ai] === io) return ij.ik[2] = ai, !0;
		return !1
	}, this.qA = function(player) {
		for (var mS = player << 3, mT = mS + bQ.fH.uU[player], zq = bQ.fH.zq, zg = bQ.fH.zg, po = 0, ai = mS; ai < mT; ai++) po += zg[zq[ai]];
		return po
	}, this.jM = function(player, ig) {
		ig = bQ.fH.jG[ig];
		return this.oa(player, ig[ig.length - 1])
	}, this.jK = function(oY, oZ, cQ, abh) {
		var a3X = ix.oN(oY),
			oY = ix.oP(oY),
			a3Z = ix.oN(oZ),
			oZ = ix.oP(oZ),
			a3Z = (cQ = Math.max(cQ, 1), a3Z - a3X),
			oZ = oZ - oY,
			d8 = q.aN(Math.abs(a3Z) * abh, cQ),
			abh = q.aN(Math.abs(oZ) * abh, cQ);
		return ix.oR(a3X + Math.sign(a3Z) * d8, oY + Math.sign(oZ) * abh)
	}, this.aCR = function(jF, ic) {
		for (var b7 = jF.length - 1, a3 = ix.oN(ic), a4 = ix.oP(ic), ai = 0; ai < b7; ai++) {
			var oY = jF[ai],
				oZ = jF[ai + 1],
				ne = ix.oN(oY),
				oY = ix.oP(oY),
				aDg = ix.oN(oZ),
				oZ = ix.oP(oZ);
			if (!(a3 !== ne && a3 !== aDg && Math.sign(a3 - ne) === Math.sign(a3 - aDg) || a4 !== oY && a4 !== oZ && Math.sign(a4 - oY) === Math.sign(a4 - oZ))) {
				if (ne === aDg || oY === oZ) return ai;
				if (Math.abs(a3 - ne) === Math.abs(a4 - oY) && Math.abs(a3 - aDg) === Math.abs(a4 - oZ)) return ai
			}
		}
		return -1
	}, this.bS = function() {
		for (var abn = bM[0], j6 = bQ.fH.j6, jO = bQ.fH.jO, ce = [], ai = 0; ai < jO; ai++) aa.bY.j5(abn, j6[ai] >> 3) && ce.push(ai);
		return ce
	}, this.oW = function(player, jF) {
		for (var mS = player << 3, mT = mS + bQ.fH.uU[player], zq = bQ.fH.zq, jG = bQ.fH.jG, wU = jF[0], wV = jF[jF.length - 1], ai = mS; ai < mT; ai++) {
			var pG = jG[zq[ai]];
			if (pG[0] === wU && pG[pG.length - 1] === wV) return !0
		}
		return !1
	}
}

function aIH() {
	var eD, wz, x0, ey;

	function k4() {
		x2(), 2 !== c.data.aIncomeType && (c.data.aIncomeData = null), dx.x3()[19] = null, dx.mQ()
	}

	function x2() {
		2 === c.data.aIncomeType ? (aa.kt.x4(x0.eZ(), c.data.aIncomeData, 255), aa.kt.max(c.data.aIncomeData) || (c.data.aIncomeType = 0)) : 1 !== c.data.aIncomeType || c.data.aIncomeValue || (c.data.aIncomeType = 0)
	}
	this.show = function() {
		eD.show(), this.resize()
	}, this.du = function() {
		eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF(L(194), [new eG("⬅️ " + L(22), k4)]), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3;
		f2.f4(L(94)), f2.vx(new r2({
			ot: [L(95), L(96), L(97)],
			value: c.data.aIncomeType
		}, function(f7) {
			x2(), 2 !== f7 || c.data.aIncomeData || (c.data.aIncomeData = new Uint8Array(c.c2)), c.data.aIncomeType = f7, dx.ej(22)
		})), ey.push(f2)
	}(ey = []), function(ey) {
		var f2;
		1 === c.data.aIncomeType && ((f2 = new f3).f4("Value"), f2.f5(new f6({
			f7: -1,
			value: c.data.aIncomeValue
		}, 1, 0, function(cc) {
			var value = q.a0(Math.floor(cc.target.value), 0, 255);
			cc.target.value = c.data.aIncomeValue = value
		})), ey.push(f2))
	}(ey), function(ey) {
		var f2;
		2 === c.data.aIncomeType && ((f2 = new f3).f4("Data"), (x0 = new eL(0, 1, 0, 1)).eP(aa.b1.x8(c.data.aIncomeData, 4)), f2.f5(x0), ey.push(f2))
	}(ey), ey))
}

function xD(r1, vw) {
	var dp = document.createElement("div");
	this.aFc = dp, this.resize = function() {
		dp.style.padding = aa.ab.e9(ak.lv), dp.style.lineHeight = aa.ab.e9(aa.ab.e1(.035))
	}, r1.style.overflowX = "hidden", r1.style.overflowY = "auto", dp.innerHTML = vw, r1.appendChild(dp)
}

function aWf() {
	this.a4m = function() {
		ep.fH.aEZ(), ep.eq.er(105, hS.et.aA8(hS.et.aA9(5))), ep.eq.er(106, hS.et.aA8(hS.et.aA9(15))), ep.eq.er(109, 0), ep.eq.er(108, ep.buffer.data[109].value), ep.eq.er(111, ep.buffer.data[109].value + 1), ep.eq.er(107, 0), ep.eq.er(110, "")
	}, this.a4o = function() {
		var data;
		jW.size < jX.jY(29) ? jZ.fH.ja(0, 3254) : ((data = {
			mh: jW.jc(30),
			wk: jW.jc(16),
			wl: jW.jc(30),
			wm: jW.jc(30),
			wn: jW.jc(30),
			wo: jW.je(32),
			username: es.jd.ec(5),
			wp: es.jd.ec(3),
			wq: es.jd.ec(3),
			wr: jW.je(32),
			ws: jW.je(32),
			wt: jW.jc(30),
			wu: jW.je(32),
			wv: jW.je(32),
			ww: jW.je(32),
			wx: jW.je(32),
			aQx: jW.je(32),
			aQs: jW.je(30),
			aRL: jW.je(32),
			aRM: es.jd.ec(3),
			aRF: jW.je(2),
			aRH: jW.je(10),
			aRE: es.jd.ec(8),
			aRG: jW.je(5),
			aQj: jW.jc(30),
			aQp: jW.jc(30),
			aQq: jW.je(32),
			aR2: jW.jc(3),
			aR1: jW.jc(8),
			aQv: jW.jc(30),
			aQw: jW.je(32),
			aR0: jW.jc(1),
			aRC: es.jd.ec(6),
			aR3: jW.jc(1),
			aR4: jW.jc(1),
			aR5: jW.jc(1),
			aQt: jW.jc(17),
			aQu: jW.jc(5),
			aRN: jW.jc(1),
			aRO: jW.jc(1)
		}).aRN && (data.aRP = jW.je(32), data.aRQ = jW.jc(30), data.aRR = jW.jc(30), data.aRS = jW.jc(1)), 8 === dx.jf && (25 === dx.jg().aUf ? (data.aQQ = !0, dx.fH.aID = data, dx.jg().jh(25, !1)) : (data.aQQ = !1, ep.eq.er(160, +(data
			.aRN && data.aRS)), data.hT = ep.buffer.data[105].value, dx.fH.aIC = data, ep.eq.wj(data), dx.jg().jh(16, !0))))
	}
}

function aJR() {
	var abo;

	function abp(player) {
		var mj, aGk;
		return aa.bY.o2(player) && player < c.aI ? 0 : (mj = abo[q.aN((c.c2 - 1) * y.aO[player], c.aP)], bc.ql() < 1920 && (mj = Math.max(q.aN(100 * (13440 - 6 * bc.ql()), 1920), mj)), aGk = ay.az(player), y.ax[player] > aGk && (mj -= q.aN(2 * mj * (
			y.ax[player] - aGk), aGk)), Math.min(Math.max(mj, 0), 700))
	}

	function ac0(ch) {
		for (var aO = y.aO, bX = aJ.bX, ai = aJ.aK - 1; 0 <= ai; ai--) {
			var pG = bX[ai];
			aa.bY.py(pG, q.aN(ch * aO[pG], 32))
		}
	}

	function abx() {
		var wN = c.t;
		ij.aUC[0] = y.ax[wN] - y.xa[wN]
	}

	function abz(f7) {
		var wN = c.t,
			wN = y.ax[wN] - y.xa[wN] - ij.aUC[0];
		ay.aRl += wN, pz.qH[f7] += wN
	}
	this.aRl = 0, this.a2p = function() {
		for (var b7 = c.c2, ai = (abo = new Uint16Array(b7), 0); ai < b7; ai++) abo[ai] = 100 + aPY(q.aN(25600 * ai, b7 - 4), 9)
	}, this.b = function() {
		(this.aRl = 0) === c.data.iIncomeType ? this.bb = abp : 1 === c.data.iIncomeType ? this.bb = function(player) {
			return q.aN(c.data.iIncomeValue * abp(player), 64)
		} : this.bb = function(player) {
			return q.aN(c.data.iIncomeData[player] * abp(player), 64)
		}
	}, this.b8 = function() {
		if (bc.ql() % 10 == 9 && (ay.aRl = 0, function() {
				abx();
				for (var bX = aJ.bX, ax = y.ax, ai = aJ.aK - 1; 0 <= ai; ai--) {
					var pG = bX[ai],
						aby = q.aN(ay.bb(pG) * ax[pG], 1e4);
					aa.bY.py(pG, Math.max(aby, 1))
				}
				abz(9)
			}(), function() {
				if (0 !== c.data.aIncomeType) {
					if (abx(), 1 === c.data.aIncomeType)
						for (var aO = y.aO, bX = aJ.bX, ch = c.data.aIncomeValue, ai = aJ.aK - 1; 0 <= ai; ai--) {
							var pG = bX[ai];
							aa.bY.py(pG, q.aN(ch * aO[pG], 128))
						} else 2 === c.data.aIncomeType && function() {
							for (var aO = y.aO, bX = aJ.bX, ch = c.data.aIncomeData, ai = aJ.aK - 1; 0 <= ai; ai--) {
								var pG = bX[ai];
								aa.bY.py(pG, q.aN(ch[pG] * aO[pG], 128))
							}
						}();
					abz(18)
				}
			}(), bc.ql() % 100 == 99)) {
			if (abx(), 0 === c.data.tIncomeType) ac0(32);
			else if (1 === c.data.tIncomeType) ac0(c.data.tIncomeValue);
			else
				for (var aO = y.aO, bX = aJ.bX, ch = c.data.tIncomeData, ai = aJ.aK - 1; 0 <= ai; ai--) {
					var pG = bX[ai];
					aa.bY.py(pG, q.aN(ch[pG] * aO[pG], 32))
				}
			abz(8)
		}
	}, this.az = function(player) {
		return Math.min(100 * y.aO[player], c.aXJ)
	}, this.a5f = function(player, aBM) {
		lx.aMZ(player, aBM, ij.zr[0], 0), aa.bY.py(aBM, ij.zr[0]), pz.aBw(player, aBM), gN.abr(player, ij.zr[0] + ij.zr[1]), gN.aMa(aBM, ij.zr[0]), aa.bY.aTe(player)
	}, this.aPe = function() {
		for (var b7 = aJ.aK, lK = aJ.bX, b6 = 0, aBo = y.ax, ai = 0; ai < b7; ai++) b6 += aBo[lK[ai]];
		return b6
	}, this.aPg = function(abt) {
		for (var pG, b7 = aJ.aK, lK = aJ.bX, b6 = 0, aBo = y.ax, c1 = cD.c1, ai = 0; ai < b7; ai++) c1[pG = lK[ai]] === abt && (b6 += aBo[pG]);
		return b6
	}
}

function aIo() {
	var ac4 = new Uint8Array(64);
	this.b = function() {
		var ai;
		for (ac4[0] = 45, ac4[37] = 95, ai = 0; ai < 10; ai++) ac4[ai + 1] = 48 + ai;
		for (ai = 0; ai < 26; ai++) ac4[ai + 11] = 65 + ai, ac4[ai + 38] = 97 + ai
	}, this.aA9 = function(aA6) {
		for (var wG = jW, tu = new Uint8Array(aA6), ai = 0; ai < aA6; ai++) tu[ai] = wG.jc(6);
		return tu
	}, this.aA8 = function(tu) {
		for (var b7 = tu.length, ac5 = ac4, ce = [], ai = 0; ai < b7; ai++) ce.push(String.fromCharCode(ac5[tu[ai]]));
		return ce.join("")
	}, this.b3 = function(value, ac6) {
		for (var ac5 = ac4, ce = [], ai = 0; ai < ac6; ai++) ce.push(String.fromCharCode(ac5[value >> 6 * (ac6 - 1 - ai) & 63]));
		return ce.join("")
	}
}

function fR() {
	var ac7, ac8 = 8,
		ac9 = null;

	function acE(h9, ic, f7) {
		ic *= 4;
		h9[ic] = 255, h9[1 + ic] = 255, h9[2 + ic] = f7, h9[3 + ic] = 255
	}

	function acG(pU, aPK) {
		var a3, a4, d8, ic, acH, acI, pS = ac8,
			pV = aa.ab.getImageData(pU, pS, pS),
			h9 = pV.data,
			b6 = (pS >> 1) - .5,
			acK = aa.kt.aCb(aPK, .5);
		for (aa.kt.aCd(aPK, acK, 300) || aa.kt.aCf(aPK, 100), a4 = 0; a4 < pS; a4++)
			for (a3 = 0; a3 < pS; a3++) acI = (pS - 1.5) * (pS - 1.5) / 4, h9[ic = 4 * (a4 * pS + a3)] = (acH = (d8 = (d8 = a3 - b6) * d8 + (d8 = a4 - b6) * d8) <= (pS - 4.5) * (pS - 4.5) / 4 ? acK : aPK)[0], h9[1 + ic] = acH[1], h9[2 + ic] = acH[2],
				h9[3 + ic] = acI < d8 ? 0 : 255;
		pU.putImageData(pV, 0, 0)
	}
	this.b = function() {
		var f7, pS, pT, pU, pV, h9;
		(ac7 = ac7 || new Array(c.c2)).fill(null), f7 = 255, pS = ac8 + 4, pT = aa.ab.pR(pS, pS), pU = aa.ab.getContext(pT, !0), pV = aa.ab.getImageData(pU, pS, pS), acE(h9 = pV.data, pS + 1, f7), acE(h9, pS + 2, f7), acE(h9, 2 * pS + 1, f7),
			acE(h9, 2 * pS - 3, f7), acE(h9, 2 * pS - 2, f7), acE(h9, 3 * pS - 2, f7), acE(h9, pS * (pS - 3) + 1, f7), acE(h9, pS * (pS - 2) + 1, f7), acE(h9, pS * (pS - 2) + 2, f7), acE(h9, pS * (pS - 2) - 2, f7), acE(h9, pS * (pS - 1) - 3, f7),
			acE(h9, pS * (pS - 1) - 2, f7), pU.putImageData(pV, 0, 0), ac9 = pT,
			function() {
				if (c.bJ)
					for (var pT = new Array(cD.c0.length), b7 = c.c2, acC = ac7, c3 = cD.c3, ai = 0; ai < b7; ai++) {
						var v9 = c3[ai];
						pT[v9] || (pT[v9] = function(v9) {
							var pT = aa.ab.pR(ac8, ac8),
								pU = aa.ab.getContext(pT, !0),
								ce = ij.aDs;
							return ce.set(cD.bz[v9]), acG(pU, ce), pT
						}(v9)), acC[ai] = pT[v9]
					}
			}()
	}, this.bm = function() {
		var ai, player, aQr, dC, po, cr, acM, acO, acP, iz = bQ.fH.iz,
			j6 = bQ.fH.j6,
			zg = bQ.fH.zg,
			zp = bQ.fH.zp,
			acQ = ac7,
			aAM = c.t,
			b7 = bQ.fH.jO,
			aIQ = aW.aS,
			aIR = aW.aY,
			a03 = gW.gX << 4,
			a1Q = fu,
			ar = a1Q / ac8,
			ne = fv / a1Q,
			nf = fw / a1Q,
			d8 = (aIQ + fv) / a1Q - ne,
			d9 = (aIR + fw) / a1Q - nf,
			pU = bn;
		for (pU.imageSmoothingEnabled = a1Q < 9, aa.ab.textAlign(pU, 1), aa.ab.textBaseline(pU, 1), ai = 0; ai < b7; ai++) player = j6[ai] >> 3, po = zg[ai], aQr = .9 + .1 * Math.log10(po), dC = (cr = iz[ai]) % a03 / 16 - aQr, cr = aIR * (Math
			.floor(cr / a03) / 16 - aQr - nf) / d9, acM = -2 * (acP = a1Q * aQr) * (1 + (acO = +(player === aAM)) / 8), acO = acO * acP / 4, (acP = aIQ * (dC - ne) / d8) < acM || cr < acM || aIQ + acO < acP || aIR + acO < cr || (dC = 2 *
			aQr * ar, acM = aQr * a1Q, null === (acO = acQ[player]) && (acQ[player] = acO = function(player) {
				var pT = aa.ab.pR(ac8, ac8);
				return acG(aa.ab.getContext(pT, !0), j1.aV7(player)), pT
			}(player)), player === aAM && (pU.setTransform(dC, 0, 0, dC, acP - 2 * dC, cr - 2 * dC), pU.drawImage(ac9, 0, 0)), pU.setTransform(dC, 0, 0, dC, acP, cr), pU.drawImage(acO, 0, 0), (aQr = Math.floor(function(po) {
				if (po < 1e3) return .42;
				if (po < 1e4) return .34;
				if (po < 1e6) return .26;
				if (po < 1e8) return .19;
				return .15
			}(po) * acM)) < 6) || (pU.setTransform(1, 0, 0, 1, 0, 0), pU.fillStyle = zp[ai] ? v.aOw : v.w, pU.font = aa.ab.ac(1, aQr), pU.fillText(aa.b1.b3(po), acP + acM, cr + acM + .1 * aQr));
		pU.imageSmoothingEnabled = !1, pU.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aIF() {
	var eD, wz, ey;

	function acV() {
		var cW;
		1 === c.data.gameMode ? (c.data.teamPlayerCount || (c.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), c.qr.a6G()), cW = aa.kt.aCl(c.data.teamPlayerCount, 0), c.data.numberTeams = cW) : (2 === c.data.botDifficultyType && (
			c.data.botDifficultyType = 0), 1 === c.data.spawningType && (c.data.spawningType = 0))
	}

	function k4() {
		1 !== c.data.gameMode && (c.data.teamPlayerCount = null), acX(), c.data.canvas = null, dx.ej(5, 5)
	}

	function acX() {
		eR.eS.b(), ep.eq.er(156, eR.eU.eV())
	}

	function acT() {
		c.data.isReplay = 0, acX(), c.qr.acY(), qp.qq(), c.qr.qs(), c.data.canvas = 2 === c.data.mapType ? gW.u0 : null, c.qu(), c.qo = 1
	}

	function acj() {
		acV();
		for (var ce = [a8o(), acb(), acc()], ai = 3; ai < 6; ai++) dx.removeChild(wz.aFc, wz.ev[ai].dp), wz.ev[ai] = ce[ai - 3], wz.aFc.appendChild(wz.ev[ai].dp);
		wz.resize()
	}

	function a8o() {
		var ack, f2 = new f3;
		return f2.f4(L(140)), ack = 0 === c.data.gameMode ? [L(126), L(97)][c.data.colorsType] : c.data.numberTeams + " Team" + (1 === c.data.numberTeams ? "" : "s"), f2.vv(ack), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(21)
		}).button])), f2
	}

	function acb() {
		var f2 = new f3,
			ce = (f2.f4(L(217)), [L(96) + ": " + yB.aFK[c.data.botDifficultyValue], L(262), L(263), L(97)]);
		return f2.vv(ce[c.data.botDifficultyType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(25)
		}).button])), f2
	}

	function acc() {
		var f2 = new f3,
			ce = (f2.f4("Spawning"), [L(126), L(127), L(97)]);
		return f2.vv(ce[c.data.spawningType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(24)
		}).button])), f2
	}
	this.show = function() {
		eD.show(), this.resize(), eD.eM.scrollTop = dx.fH.aLL[0]
	}, this.du = function() {
		dx.fH.aLL[0] = eD.eM.scrollTop, eD.du()
	}, this.resize = function() {
		eD.resize(), wz.resize()
	}, this.ed = function(cY) {
		2 === cY && eD.ee[0].ef()
	}, eD = new eF("🔧 " + L(518), [new eG("⬅️ " + L(22), k4), new eG(L(542), acT)]), acV(), c.data.canvas || (2 === c.data.mapType ? c.data.canvas = gW.u0 : 1 === c.data.mapType ? c.data.canvas = gW.uI(gW.uQ(c.data), 0).u0 : (c.data.mapType = 0,
		c.data.passableWater = c.data.passableMountains = 1, c.data.canvas = gW.uI(gW.uQ(c.data), c.data.mapSeed).u0)), wz = new en(eD.eM, (function(ey) {
		var f2 = new f3,
			pT = (f2.f4(L(163)), c.data.canvas);
		pT.style.width = "100%", f2.f5({
			cc: pT
		}), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(20)
		}).button])), ey.push(f2)
	}(ey = []), function(ey) {
		var f2 = new f3;
		f2.f4(L(69)), f2.f5(new f6({
			f7: -1,
			value: c.data.playerCount
		}, 1, 0, function(cc) {
			var playerCount = q.a0(Math.floor(cc.target.value), 1, 512);
			cc.target.value = c.data.playerCount = playerCount, 1 === c.data.gameMode && (cc = aa.kt.aCl(c.data.teamPlayerCount, 0), c.qr.a6G(), aa.kt.aCl(c.data.teamPlayerCount, 0) !== cc) && acj()
		})), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3;
		f2.f4(L(544)), f2.vx(new r2({
			ot: ["Battle Royale", "Teams"],
			value: c.data.gameMode
		}, function(f7) {
			c.data.gameMode !== f7 && (1 === (c.data.gameMode = f7) && (c.data.colorsData || (c.data.colorsData = new Uint32Array(1)), c.data.colorsData[0] = 258049), acj())
		})), ey.push(f2)
	}(ey), ey.push(a8o()), ey.push(acb()), ey.push(acc()), function(ey) {
		var f2 = new f3,
			ce = (f2.f4(L(466)), [L(467), L(468), L(97)]);
		f2.vv(ce[c.data.playerNamesType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(23)
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3,
			ce = (f2.f4(L(194)), [L(95), L(96) + ": " + c.data.aIncomeValue, L(97)]);
		f2.vv(ce[c.data.aIncomeType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(22)
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3,
			ce = (f2.f4(L(152)), [L(95), L(96) + ": " + c.data.tIncomeValue, L(97)]);
		f2.vv(ce[c.data.tIncomeType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(26)
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3,
			ce = (f2.f4(L(93)), [L(95), L(96) + ": " + c.data.iIncomeValue, L(97)]);
		f2.vv(ce[c.data.iIncomeType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(27)
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3,
			ce = (f2.f4(L(308)), [L(95), L(96) + ": " + c.data.sResourcesValue, L(97)]);
		f2.vv(ce[c.data.sResourcesType]), f2.f5(new f9([new eG(L(543), function() {
			dx.ej(28)
		}).button])), ey.push(f2)
	}(ey), function(ey) {
		var f2 = new f3;
		f2.f4(L(545)), f2.f5(new f9([new eG(L(546), function() {
			dx.eX(), c.qr.aav(), dx.fH.aLL[0] = 0, dx.ej(19)
		}).button])), f2.f5(new f9([new eG(L(547), function() {
			aJ1.aYu()
		}).button])), f2.f5(new f9([new eG(L(548), function() {
			return aJ1.aYw(), !0
		}).button])), ey.push(f2)
	}(ey), ey))
}

function aJb() {
	var acl = 0,
		acm = new Uint16Array(64);

	function aAx(v9) {
		acl -= 2;
		for (var ai = v9; ai < acl; ai += 2) acm[ai] = acm[ai + 2], acm[ai + 1] = acm[ai + 3]
	}
	this.b = function() {
		acl = 0
	}, this.b8 = function() {
		var ai, pn, a3c;
		if (0 !== acl)
			if (0 === y.an[c.t]) acl = 0;
			else if (0 === a0n.q7(c.t)) acl = 0;
		else
			for (ai = acl - 2; 0 <= ai; ai -= 2)(pn = acm[ai]) < c.c2 && 0 === y.an[pn] ? aAx(ai) : (a3c = acm[ai + 1], (pn >= c.c2 && a0f.aYq(c.t) || pn < c.c2 && a0f.aYr(c.t, pn)) && (ss.a1M.xn(a3c, pn), aAx(ai)))
	}, this.a1V = function(pn, a3c) {
		! function(pn, a3c) {
			for (var ai = 0; ai < acl; ai += 2)
				if (acm[ai] === pn) return acm[ai + 1] = Math.min(acm[ai + 1] + a3c, 1023), 1;
			return
		}(pn, a3c) && 64 !== acl && (acm[acl] = pn, acm[acl + 1] = a3c, acl += 2)
	}
}

function ft() {
	this.b8 = function(player, io) {
		player = bQ.bR.zh(player, io);
		return !(player < 0 || !bQ.fq.aCW(player) || (bQ.fq.a0O(player), 0))
	}
}

function aJA() {
	var size, fZ;
	this.b = function() {
		size = c.aL, fZ = new Uint16Array(c.c2);
		for (var aI = c.aI, ai = c.aL - 1; 0 <= ai; ai--) fZ[ai] = aI + ai
	}, this.b8 = function() {
		o9.aYE.b8();
		for (var ai = size - 1; 0 <= ai; ai--)
			if (0 === y.an[fZ[ai]]) {
				cy = void 0;
				var cy = ai;
				size--, fZ[cy] = fZ[size]
			} else yB.b8(fZ[ai])
	}, this.yt = function(pG) {
		fZ[size++] = pG
	}
}

function aJB() {
	var gz, acr, acs, gy, act, acu, acv, acw, acx, acy, acz, aMU, ad0, ad1 = !1,
		ad2 = !1;

	function ad3(aEr) {
		aMU = bc.iV, acs = gy = acr = 0, act = (ad0 = 33) / aEr, gz = 1 / (aEr / ad0 / 4), acu = (aW.aS / 2 + fv) / fu, acv = (aW.aY / 2 + fw) / fu, acw = fu
	}

	function ad4(ai) {
		var ne; - 1 !== ai && (ai = ix.iy(bQ.fH.iz[ai]), ne = ix.oN(ai) - 15, ai = ix.oP(ai) - 15, gI.sD(ne, ai, 29 + ne, 29 + ai))
	}

	function ad9(yn) {
		Math.abs(Math.log(acz / acw)) < .125 && (acz = yn * acw)
	}

	function ad8(ne, nf, aDg, aDh) {
		acx = (ne + aDg + 1) / 2, acy = (nf + aDh + 1) / 2;
		aDg = aW.aS / (aDg - ne + 1), ne = aW.aY / (aDh - nf + 1);
		acz = .9 * (aDg < ne ? aDg : ne)
	}
	this.aM6 = function() {
		return ad1
	}, this.aXR = function() {
		ad3(1), this.sD(0, 0, gW.gX - 1, gW.gY - 1), c.ao || c.bl || this.a96(c.t, 3e3, !0, .3)
	}, this.aF6 = function(player, io) {
		ad4(bQ.bR.zh(player, io))
	}, this.a96 = function(player, aEr, ad5, zoom) {
		c.gG || ad1 && !ad5 && ad2 || (0 === y.aO[player] ? ad4(bQ.bR.abf(player)) : (gd.g2 = !1, ad2 = ad5, ad3(aEr), function(player) {
			acx = (y.oE[player] + y.oF[player] + 1) / 2, acy = (y.oG[player] + y.oH[player] + 1) / 2
		}(player), function(zoom, player) {
			var d8 = y.oF[player] - y.oE[player] + 1,
				player = y.oH[player] - y.oG[player] + 1,
				cy = aW.aS / d8,
				cT = aW.aY / player,
				cy = (acz = cy < cT ? cy : cT, 0 !== zoom ? zoom : d8 < 20 && player < 20 ? .5 : .9);
			acz *= cy, ad9(7 / 8)
		}(zoom, player), ad1 = !0, a8X.aY6()))
	}, this.a8z = function(aEr) {
		c.bl || c.gG || (gd.g2 = !1, ad2 = !1, ad3(aEr), ad8(0, 0, gW.gX - 1, gW.gY - 1), ad9(7 / 8), ad1 = !0, a8X.aY6())
	}, this.sD = function(ne, nf, aDg, aDh) {
		ad1 = !1, ad8(ne, nf, aDg, aDh), fu = acz, gd.g9(acx, aW.aS / 2), gd.gC(acy, aW.aY / 2), gZ.ga(), bc.bj = !0
	}, this.gJ = function() {
		return !(ad1 && ad2 || (ad1 = !1))
	}, this.b8 = function() {
		var adB, adC, cS, adF;
		ad1 && (acr < .5 ? gy < act && (gy += act * gz, acs = acr) : 1 - acs < acr && (gy = (gy -= act * gz) < act * gz ? act * gz : gy), aMU = aMU >= bc.iV ? bc.iV - 1 : aMU, cS = bc.iV - aMU, acr = 1e3 < cS || 1 < (acr += gy * cS / ad0) ? 1 :
			acr, aMU = bc.iV, cS = fu, adB = fv, adC = fw, cS = (fu = acw * Math.pow(acz / acw, acr)) / cS, adF = 1 - (acw * Math.pow(acz / acw, 1 - acr) - acw) / (acz - acw), gd.g9(acu + adF * (acx - acu), aW.aS / 2), gd.gC(acv + adF * (
				acy - acv), aW.aY / 2), gN.zoom(cS, (adB * cS - fv) / (1 - cS), (adC * cS - fw) / (1 - cS)), gZ.ga(), 1 <= acr && (ad1 = !1, ns.aVL = !0), bc.bj = !0)
	}
}

function aRu() {
	this.aXN = 1, this.xm = function(ic) {
		c.aH ? ss.xl.xm(c.t, ic) : jZ.tQ.aBJ(ic)
	}, this.xn = function(a3c, pn) {
		this.aXN && (this.aXN = 0, ep.eq.er(182, a3c)), c.aH ? ss.xl.xn(c.t, a3c, pn) : jZ.tQ.aBK(a3c, pn)
	}, this.a5f = function(a3c, aBM) {
		c.aH ? ss.xl.xo(c.t, a3c, aBM) : jZ.tQ.aBL(a3c, aBM)
	}, this.xp = function(a3c, ic) {
		ic = (ic << 3) + ij.ik[6];
		c.aH ? ss.xl.xp(c.t, a3c, ic) : bQ.fh.jS(c.t) && jZ.tQ.aBN(a3c, ic)
	}, this.xq = function(a3c) {
		849 === a3c && (a3c = 850);
		var io = ij.ik[3];
		c.aH ? ss.xl.xq(c.t, a3c, io) : bQ.fo.im(c.t, io) && jZ.tQ.aBP(a3c, io)
	}, this.aZL = function(io) {
		c.aH ? ss.xl.aZL(c.t, io) : jZ.tQ.aBP(849, io)
	}, this.xr = function(pn) {
		c.aH ? ss.xl.xr(c.t, pn) : jZ.tQ.aBQ(pn)
	}, this.a57 = function(m4) {
		c.aH ? ss.xl.xs(c.t, m4) : jZ.tQ.aBR(m4)
	}, this.xt = function(aBT) {
		c.aH ? ss.xl.xt(c.t, aBT) : jZ.tQ.aBS(aBT)
	}, this.xu = function() {
		c.aH ? ss.xl.xu(c.t) : jZ.tQ.aBU()
	}, this.a1d = function() {
		c.aH ? ss.xl.a1d(c.t) : jZ.tQ.aBQ(513)
	}, this.xw = function(a3c, ic, pn) {
		c.aH ? ss.xl.xw(c.t, a3c, ic, pn) : jZ.tQ.aBV(a3c, ic, pn)
	}
}

function aXM() {
	this.a6G = function() {
		var adG = c.data;
		aa.kt.aCq(adG.teamPlayerCount, adG.playerCount), adG.numberTeams = aa.kt.aCl(adG.teamPlayerCount, 0), adG.teamPlayerCount[0] && adG.teamPlayerCount[7] && (adG.teamPlayerCount[7] = 0, this.a6G())
	}, this.qs = function() {
		var adG = c.data;
		adG.mapType < 2 ? gW.kX(gW.uQ(adG), adG.mapSeed) : gW.uL(adG.canvas)
	}, this.acY = function() {
		var adG = c.data;
		adG.colorsData || (adG.colorsData = new Uint32Array(1)), 0 === adG.gameMode && (adG.colorsData[0] = ep.fH.aEf()), adG.selectableName && (adG.playerNamesData || (adG.playerNamesData = new Array(1)), adG.playerNamesData[0] = ep.buffer.data[
			122].value), adG.aAA = new Uint32Array(1), adG.aAA[0] = es.et.aA0(ep.buffer.data[105].value, 5)
	}, this.aav = function() {
		c.data = new aW0
	}
}

function aJN() {
	function adL(player) {
		var av;
		aa.bY.qG(player) && (av = y.ax[player] - y.xa[player] + a0n.qA(player), pz.q0(player, Math.abs(av), av < 0 ? 18 : 12)), y.ax[player] = 0, y.xa[player] = 0
	}

	function adP() {
		sF.show(!1, !1, !1, !0), at.al(), bT.yM.yw()
	}

	function adI(player, qM) {
		for (var ai = qM.length - 1; 0 <= ai; ai--) a0n.q1(qM[ai], player)
	}

	function adK(player) {
		var oE = y.oE,
			oF = y.oF,
			oG = y.oG,
			oH = y.oH,
			gX = gW.gX;
		if (y.aO[player]) {
			y.aO[player] = 0;
			for (var ne = oE[player], nf = oG[player], a3 = oF[player]; ne <= a3; a3--)
				for (var a4 = oH[player]; nf <= a4; a4--) {
					var pG = 4 * (a4 * gX + a3);
					j1.a5q(player, pG) && j1.aTJ(pG)
				}
		}
		oF[player] = oH[player] = 0, oE[player] = oG[player] = Math.max(gX, gW.gY)
	}
	this.aJz = function(pG) {
		var player, av = y.aO[pG] + y.xS[pG];
		bQ.fH.uU[pG] ? av && (adI(player = pG, a0n.qL(player)), gN.adJ(player), adK(player), aAZ.yc(player), a0n.clear(player), adL(player), function(player) {
			y.xS[player] = 0, y.bW[player] = [], y.xT[player] = [], y.uW[player] = [], y.xU[player] = []
		}(player)) : !av && y.bW[pG].length || this.aIk(pG)
	}, this.aIk = function(player) {
		! function(player) {
			aa.bY.o2(player) || (y.xY[player] = vL.yu.yv(), c.aM++);
			var qM = a0n.qL(player);
			0 === qM.length ? aa.bY.aPZ(player) && adP() : (adI(player, qM), function(player, qM) {
				var adS = qM[function(qM) {
					var ai, f7 = 0;
					for (ai = qM.length - 1; 1 <= ai; ai--) y.aO[qM[ai]] > y.aO[qM[f7]] && (f7 = ai);
					return f7
				}(qM)];
				9 === c.d && (1 === cD.c1[player] ? cN.aGy(8) && cv.a6H(adS) : yB.po[player] && (e.aAQ(765, 0), e.u(280, L(549, [y.z[adS], y.z[player]]), 765, adS, v.bs, v.aSV, -1, !0)));
				if (aa.bY.aPZ(player)) adP(), e.qJ(adS, 1);
				else {
					for (var ai = qM.length - 1; 0 <= ai; ai--)
						if (aa.bY.qG(qM[ai]) && (pz.qH[4 - aa.bY.o2(player)]++, aa.bY.aPZ(qM[ai]))) return e.qJ(player, 0);
					aa.bY.o2(player) || e.aFD(0, player, adS)
				}
			}(player, qM))
		}(player), gN.adJ(player), adK(player), adL(player),
			function(player) {
				y.an[player] = 0, y.bW[player] = null, y.xT[player] = null, y.uW[player] = null, y.xU[player] = null
			}(player), aAZ.yc(player), a0n.clear(player), bQ.fO.aO5(player)
	}
}

function aJO() {
	this.bX = null, this.aK = 0, this.aXO = function() {
		for (this.aK = 0, ai = c.c2 - 1; 0 <= ai; ai--) 0 !== y.an[ai] && this.aK++;
		this.bX = new Uint16Array(this.aK);
		for (var b7 = 0, ai = 0; ai < c.c2; ai++) 0 !== y.an[ai] && (this.bX[b7++] = ai)
	}, this.aMN = function() {
		for (var aO = y.aO, xS = y.xS, xZ = y.xZ, bX = aJ.bX, ai = aJ.aK - 1; 0 <= ai; ai--) {
			var pG = bX[ai],
				av = aO[pG],
				b6 = xS[pG];
			av <= q.aN(b6, 4) ? aIj.aJz(pG) : b6 <= av ? 250 <= (xS[pG] = av) && (xZ[pG] = 1) : xS[pG] = b6 - Math.max(1, q.aN(b6 - av, 1e3))
		}
		this.aIl()
	}, this.aIl = function() {
		for (var an = y.an, aMk = this.bX, aMj = this.aK, ai = aMj - 1; 0 <= ai; ai--) 0 === an[aMk[ai]] && (aMk[ai] = aMk[--aMj]);
		this.aK = aMj
	}
}

function aJp() {
	this.aaq = !1, this.aVL = !1, this.sM = !1, this.adU = [0, 0, 0, 0], this.render = function() {
		var ne, nf, aDg, aDh;
		this.sM = this.sM || this.aVL, (this.aVL || this.aaq && this.sM) && (ne = gZ.aVM[0], nf = gZ.aVM[1], aDg = gZ.aVM[2], aDh = gZ.aVM[3], ne = ne < this.adU[0] ? this.adU[0] : ne, nf = nf < this.adU[1] ? this.adU[1] : nf, aDg = aDg > this
			.adU[2] ? this.adU[2] : aDg, aDh = aDh > this.adU[3] ? this.adU[3] : aDh, this.aVL = !1, this.aaq = !1, ne === this.adU[0] && nf === this.adU[1] && aDg === this.adU[2] && aDh === this.adU[3] ? this.sN() : ne <= aDg && nf <= aDh &&
			xz.putImageData(y0, 0, 0, ne, nf, aDg - ne + 1, aDh - nf + 1))
	}, this.sN = function() {
		this.sM && this.adU[2] >= this.adU[0] && this.adU[3] >= this.adU[1] && xz.putImageData(y0, 0, 0, this.adU[0], this.adU[1], this.adU[2] - this.adU[0] + 1, this.adU[3] - this.adU[1] + 1), this.sM = !1
	}, this.nt = function() {
		this.adU[2] >= this.adU[0] && this.adU[3] >= this.adU[1] && xz.putImageData(y0, 0, 0, this.adU[0], this.adU[1], this.adU[2] - this.adU[0] + 1, this.adU[3] - this.adU[1] + 1), this.sM = !1
	}, this.b = function() {
		var a3, a4;
		this.aaq = !1, this.aVL = !1, this.sM = !1, this.adU[0] = gW.gX, this.adU[1] = gW.gY, this.adU[2] = this.adU[3] = 0;
		loop: for (a3 = 1; a3 < gW.gX - 1; a3++)
			for (a4 = gW.gY - 2; 1 < a4; a4--)
				if (1 === xy[j1.aT3(a3, a4) + 2]) {
					this.adU[0] = a3;
					break loop
				} loop: for (a4 = 1; a4 < gW.gY - 1; a4++)
			for (a3 = gW.gX - 2; 1 < a3; a3--)
				if (1 === xy[j1.aT3(a3, a4) + 2]) {
					this.adU[1] = a4;
					break loop
				} loop: for (a3 = gW.gX - 2; 0 < a3; a3--)
			for (a4 = gW.gY - 2; 1 < a4; a4--)
				if (1 === xy[j1.aT3(a3, a4) + 2]) {
					this.adU[2] = a3;
					break loop
				} loop: for (a4 = gW.gY - 2; 0 < a4; a4--)
			for (a3 = gW.gX - 2; 1 < a3; a3--)
				if (1 === xy[j1.aT3(a3, a4) + 2]) {
					this.adU[3] = a4;
					break loop
				}
	}
}

function aJT() {
	var adV, adW, adX, adY, adZ, ada, adb, adc, add, ade, adf, adg, adh, adi, adj, adk, adl, adm, ado, adp, a2j, adq, adr, adx, ady, adn = null,
		adt = 0,
		adu = !1,
		adv = new Float32Array(4),
		adw = 0,
		aLJ = 112,
		adz = 0;

	function aFh() {
		add = Math.floor(+aW.aX), ade = Math.floor(.5 * add), adn.width = aW.aS, adn.height = aW.aY, ado = adn.getContext("2d", {
			alpha: !0
		}), aa.ab.textAlign(ado, 1), aa.ab.textBaseline(ado, 1), ado.imageSmoothingEnabled = !0
	}

	function ae0() {
		var ai, ae5;
		for (bn.font = aa.ab.ac(1, 100 * adf), ae5 = 80 / Math.floor(bn.measureText(aa.b1.b3(c.qI)).width), bn.font = aa.ab.ac(1, 100), ai = c.c2 - 1; 0 <= ai; ai--) adc[ai] = 100 / Math.floor(bn.measureText(y.z[ai]).width), adb[ai] = Math.min(ae5,
			adc[ai])
	}

	function ae6(ai) {
		return !adz || (ai = y.ax[ai]) < 1e6 ? 1 : ai < 1e7 ? adv[0] : adv[Math.min(Math.floor(Math.log10(ai)) - 6, 3)]
	}

	function ae4(pU) {
		adu = !1, adt = bc.iV, adm = !1, adl = 1, adj = adk = 0, pU.clearRect(0, 0, aW.aS, aW.aY);
		for (var aeC, aeD, ai, aeE, fontSize, aeF, ne = fv / fu, nf = fw / fu, aDg = (aW.aS + fv) / fu, aDh = (aW.aY + fw) / fu, aeG = 0 !== y.an[c.t] && !aa.bY.o2(c.t), cy = aJ.aK - 1; 0 <= cy; cy--) ai = aJ.bX[cy], (fontSize = Math.floor(adi * fu *
			ae6(ai) * adb[ai] * adZ[ai])) < adh || add <= fontSize || adX[ai] + adZ[ai] > ne && adX[ai] < aDg && adY[ai] + ada[ai] > nf && adY[ai] < aDh && (aeC = Math.floor(aW.aS * (adX[ai] + adZ[ai] / 2 - ne) / (aDg - ne)), aeD = Math.floor(aW
			.aY * (adY[ai] + ada[ai] / 2 - nf) / (aDh - nf) - .1 * fontSize), aeE = j1.a9M[ai], pU.font = aa.ab.ac(1 === y.xR[ai] ? 4 : 1, fontSize), pU.fillStyle = aeH(fontSize, aeE % 2), adz ? aeI(pU, ai, fontSize, aeC, aeD, aeE) : aeJ(ai,
			fontSize, aeC, aeD, pU), adm = !0, 0 < a2j[ai] ? function(aeC, aeD, fontSize, ai, pU) {
			0 === a2b[ai] ? m6.h7.ph(adp[ai]) ? (function(aeC, aeD, fontSize, player, m4, pU) {
				for (var a62 = aeD, aGZ = (pU.globalAlpha = aeR(fontSize), ae6(player) * (adz ? adw : adc[player])), a61 = aeC - .5 * fontSize / aGZ - .9 * fontSize, cT = 0; cT < 2; cT++) pU.fillText(m6.h7.mA(m4), a61, a62), a61 =
					aeC + .5 * fontSize / aGZ + .9 * fontSize;
				pU.globalAlpha = 1
			}(aeC, aeD, fontSize, ai, adp[ai], pU), aeL(aeC, aeD, fontSize, 0, 0, pU)) : m6.h7.pj(adp[ai]) ? (aeU(aeC, aeD, fontSize, adp[ai], 0, pU), aeL(aeC, aeD, fontSize, 0, 1, pU)) : (aeU(aeC, aeD, fontSize, adp[ai], 1, pU), aeL(aeC,
				aeD, fontSize, 1, 0, pU)) : aeU(aeC, aeD, fontSize, adp[ai], 0, pU)
		}(aeC, aeD, fontSize, ai, pU) : 0 === a2b[ai] && aeL(aeC, aeD, fontSize, 0, 0, pU), aeG && (0 < a2j[ai + c.c2] || 0 < a2j[ai + 2 * c.c2] || 0 < a2j[ai + 3 * c.c2] || 0 < a2j[ai + 4 * c.c2]) && function(aeC, aeD, fontSize, ai, pU) {
			var cY, cW = -1;
			for (cY = 4; 1 <= cY; cY--) 0 < a2j[ai + cY * c.c2] && cW++;
			for (cY = 1; cY < 5; cY++) 0 < a2j[ai + cY * c.c2] && (! function(aeC, aeD, fontSize, cY, ai, aeP, av, pU) {
				var pT;
				if (1 === cY) {
					ai = adp[ai + c.c2];
					if (!m6.h7.pi(ai)) return function(aeC, aeD, fontSize, m4, aeP, pU) {
						pU.globalAlpha = aeR(fontSize);
						aeC -= .534 * aeP * fontSize, aeP = aeD + 1.59 * fontSize;
						pU.font = aa.ab.ac(0, .785 * fontSize), pU.fillText(m6.h7.mA(m4), aeC, aeP), pU.globalAlpha = 1
					}(aeC, aeD, fontSize, ai, aeP, pU);
					pT = m6.h9.m9[ai - 1024 + m6.h7.m7]
				} else pT = 2 === cY ? sK.a5O()[4].canvas[+(av < 255)] : (3 === cY ? sK.a5O()[5] : sK.a5O()[6]).canvas[0];
				ai = m6.h9.pP, av = .8 * fontSize / ai, cY = aeC - .5 * av * ai - .534 * aeP * fontSize, aeC = aeD + 1.4 * av * ai;
				pU.setTransform(av, 0, 0, av, cY, aeC), pU.globalAlpha = aeR(fontSize), pU.drawImage(pT, 0, 0), pU.globalAlpha = 1, pU.setTransform(1, 0, 0, 1, 0, 0)
			}(aeC, aeD, fontSize, cY, ai, cW, a2j[ai + cY * c.c2], pU), cW -= 2)
		}(aeC, aeD, fontSize, ai, pU), (aeF = adf * fontSize) < adh || (pU.font = aa.ab.ac(1, aeF), aeD += Math.floor(.78 * fontSize), adz ? aeJ(ai, aeF, aeC, aeD, pU) : aeI(pU, ai, aeF, aeC, aeD, aeE)))
	}

	function aeJ(ai, fontSize, a3, a4, pU) {
		var ___id = ai;
		var showName = ai < c.aI || !__fx.settings.hideBotNames;
		if (showName) pU.fillText(y.z[ai], a3, a4), ai < c.aI && 2 !== y.xR[ai] || (ai = fontSize / adc[ai], pU.fillRect(a3 - .5 * ai, a4 + aa.ab.aG4 * fontSize, ai, Math.max(1, .1 * fontSize)));
		adz && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (pU.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			pU.fillText(__fx.utils.getDensity(___id), a3, showName ? a4 + fontSize : a4)
		);
	}

	function aeI(pU, ai, fontSize, aeC, aeD, aeE) {
		var xa = y.xa[ai],
			aeO = aa.b1.b3(y.ax[ai] - xa);

		function drawDensity() {
			!adz && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (pU.fillStyle = __fx.utils.textStyleBasedOnDensity(ai)), pU.fillText(__fx.utils.getDensity(ai), aeC, aeD + fontSize))
		}
		xa ? (xa = pU.fillStyle, pU.fillStyle = aeH(fontSize, 2 + aeE % 2), pU.fillText(aeO, aeC, aeD), pU.fillStyle = xa) : aeE >> 1 & 1 ? (pU.lineWidth = .05 * fontSize, pU.strokeStyle = aeH(fontSize, aeE % 2), pU.strokeText(aeO, aeC, aeD)) : (1 <
			aeE && (pU.lineWidth = .12 * fontSize, pU.strokeStyle = aeH(fontSize, aeE), pU.strokeText(aeO, aeC, aeD)), pU.fillText(aeO, aeC, aeD)), drawDensity()
	}

	function aeL(aeC, aeD, fontSize, aeP, aeQ, pU) {
		var nn = .95 * fontSize / adr,
			aeC = aeC - .5 * nn * adq + .8 * aeP * fontSize,
			aeP = aeD - 1.76 * nn * adr - (.35 - aa.ab.aG4 + .7) * aeQ * fontSize;
		pU.setTransform(nn, 0, 0, nn, aeC, aeP), pU.globalAlpha = aeR(fontSize), pU.drawImage(np.get(4), 0, 0), pU.globalAlpha = 1, pU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aeU(aeC, aeD, fontSize, m4, aeP, pU) {
		var pS, a61, nn;
		pU.globalAlpha = aeR(fontSize), m6.h7.pi(m4) ? (pS = m6.h9.pP, pU.setTransform(nn = 1.1 * fontSize / pS, 0, 0, nn, a61 = aeC - .5 * nn * pS - .8 * aeP * fontSize, nn = aeD - 1.55 * nn * pS), pU.drawImage(m6.h9.m9[m4 - 1024 + m6.h7.m7], 0, 0),
			pU.setTransform(1, 0, 0, 1, 0, 0)) : (a61 = aeC - .8 * aeP * fontSize, nn = aeD - (.35 - aa.ab.aG4 + 1) * fontSize, pU.fillText(m6.h7.mA(m4), a61, nn)), pU.globalAlpha = 1
	}

	function aeH(fontSize, aeE) {
		return ade <= fontSize && fontSize < add ? cD.bv[aeE] + aeR(fontSize).toFixed(3) + ")" : cD.bw[aeE]
	}

	function aeR(fontSize) {
		return ade <= fontSize && fontSize < add ? 1 - (fontSize - ade) / (add - ade) : 1
	}

	function aee(aGZ, aS) {
		return 1 + Math.floor(adg * aGZ * aS)
	}

	function aeb(ai) {
		for (var left = adX[ai], cy = adX[ai] - y.oE[ai] - 1; 0 <= cy; cy--)
			if (!aef(ai, --left, adY[ai], ada[ai])) {
				left++;
				break
			} var right = adX[ai];
		for (cy = y.oF[ai] - adX[ai] - adZ[ai]; 0 <= cy; cy--)
			if (!aef(ai, ++right + adZ[ai] - 1, adY[ai], ada[ai])) {
				right--;
				break
			} var a3 = Math.floor((left + right) / 2),
			top = adY[ai];
		for (cy = adY[ai] - y.oG[ai] - 1; 0 <= cy; cy--)
			if (!aeg(ai, a3, --top, adZ[ai])) {
				top++;
				break
			} var bottom = adY[ai];
		for (cy = y.oH[ai] - adY[ai] - ada[ai]; 0 <= cy; cy--)
			if (!aeg(ai, a3, ++bottom + ada[ai] - 1, adZ[ai])) {
				bottom--;
				break
			} var a4 = Math.floor((top + bottom) / 2);
		aeY(ai, a3, a4, adZ[ai], ada[ai]) && (adX[ai] = a3, adY[ai] = a4)
	}

	function aeY(player, a3, a4, aS, aY) {
		cS = Math.floor(.2 * aS);
		for (var cS, cY = a3 + aS - 1; a3 <= cY; cY--)
			if (!aef(player, cY, a4, aY)) return;
		for (cY = a4 + aY - 1 - (cS = (cS = Math.floor(.25 * aY)) < 1 ? 1 : cS); a4 + cS <= cY; cY--)
			if (!aeg(player, a3, cY, aS)) return;
		return 1
	}

	function aef(player, a3, a4, aY) {
		return j1.a5q(player, 4 * (a4 * gW.gX + a3)) && j1.a5q(player, 4 * ((a4 + aY - 1) * gW.gX + a3))
	}

	function aeg(player, a3, a4, aS) {
		return j1.a5q(player, 4 * (a4 * gW.gX + a3)) && j1.a5q(player, 4 * (a4 * gW.gX + a3 + aS - 1))
	}
	this.b = function() {
		if (adz = ep.buffer.data[7].value || 8 === c.d, adm = !1, adi = .88, adf = .5, adg = 1.8, adh = 12 - 3 * ep.buffer.data[9].value, adW = adV = 0, adX = new Uint16Array(c.c2), adY = new Uint16Array(c.c2), adZ = new Uint16Array(c.c2), ada =
			new Uint16Array(c.c2), adb = new Float32Array(c.c2), adc = new Float32Array(c.c2), adp = new Uint16Array(2 * c.c2), a2j = new Uint8Array(5 * c.c2), adx = new Uint8Array(c.c2), ady = new Uint8Array(c.c2), adn = adn || document
			.createElement("canvas"), aFh(), adk = adj = 0, adl = 1, adz) {
			var ai, ae5;
			for (ae0(), bn.font = aa.ab.ac(1, 100), ae5 = 100 / Math.floor(bn.measureText("900 000").width), ai = c.c2 - 1; 0 <= ai; ai--) adb[ai] = Math.min(ae5, 2 * adc[ai]);
			adw = ae5, adv[0] = 100 / (ae5 * Math.floor(bn.measureText("5 000 000").width)), adv[1] = 100 / (ae5 * Math.floor(bn.measureText("50 000 000").width)), adv[2] = 100 / (ae5 * Math.floor(bn.measureText("500 000 000").width)), adv[3] =
				100 / (ae5 * Math.floor(bn.measureText("1 000 000 000").width))
		} else ae0();
		! function() {
			var ai;
			for (ai = c.c2 - 1; 0 <= ai; ai--) y.aO[ai] < 12 ? (adX[ai] = y.oE[ai] + 1, adY[ai] = y.oG[ai] + 1, adZ[ai] = 1, ada[ai] = 1) : (adX[ai] = y.oE[ai], adY[ai] = y.oG[ai] + 1, adZ[ai] = 4, ada[ai] = 2);
			if (c.ao)
				for (ai = 0; ai < c.aI; ai++) adZ[ai] = 0;
			adq = np.get(4).width, adr = np.get(4).height
		}()
	}, this.abr = function(pG, aFR) {
		aFR > 18 * y.aO[pG] ? (ady[pG] = 6, j1.a9M[pG] = 2 + j1.a9M[pG] % 2) : (adx[pG] = 4, (j1.a9M[pG] < 2 || 3 < j1.a9M[pG]) && (j1.a9M[pG] = 6 + j1.a9M[pG] % 2))
	}, this.aMa = function(pG, aFR) {
		aFR > 6 * y.aO[pG] ? (ady[pG] = 6, j1.a9M[pG] = 4 + j1.a9M[pG] % 2) : (adx[pG] = 4, (j1.a9M[pG] < 4 || 5 < j1.a9M[pG]) && (j1.a9M[pG] = 8 + j1.a9M[pG] % 2))
	}, this.resize = function() {
		aFh(), ae4(ado)
	}, this.sH = function() {
		for (var ai = 0; ai < c.aI; ai++) y.oF[ai] - y.oE[ai] != 3 || y.oH[ai] - y.oG[ai] != 3 ? (adX[ai] = y.oE[ai] + (y.oF[ai] !== y.oE[ai] ? 1 : 0), adY[ai] = y.oG[ai], adZ[ai] = 1, ada[ai] = 1) : (adX[ai] = y.oE[ai], adY[ai] = y.oG[ai] + 1,
			adZ[ai] = 4, ada[ai] = 2)
	}, this.a58 = function(player, f7, ae7) {
		! function(player, f7, ae7) {
			player += f7 * c.c2;
			0 === f7 ? adp[player] === ae7 && 0 < a2j[player] ? a2j[player] = 0 : (adp[player] = ae7, a2j[player] = m6.h7.ph(ae7) ? 255 : 64) : 1 === f7 ? (a2j[player] = 64, adp[player] = ae7) : a2j[player] = ae7
		}(player, f7, ae7), 2 === c.bH && this.ap(!0)
	}, this.bm = function() {
		adm && (1 !== adl ? (bn.imageSmoothingEnabled = !0, bn.setTransform(adl, 0, 0, adl, 0, 0), bn.drawImage(adn, -adj / adl, -adk / adl), bn.setTransform(1, 0, 0, 1, 0, 0), bn.imageSmoothingEnabled = !1) : bn.drawImage(adn, -adj, -adk))
	}, this.gb = function(d8, d9) {
		adj += d8, adk += d9
	}, this.gK = function(d8, d9) {
		gN.gb(d8, d9)
	}, this.zoom = function(gc, gP, gQ) {
		adl *= gc, adj = (adj + gP) * gc - gP, adk = (adk + gQ) * gc - gQ
	}, this.adJ = function(player) {
		var oE = y.oE[player],
			oF = y.oF[player],
			oG = y.oG[player],
			oH = y.oH[player],
			a3X = ix.zR(0),
			a3Y = ix.zT(0),
			a3Z = ix.zR(aW.aS),
			a3a = ix.zT(aW.aY);
		oE < a3Z && a3X < oF && oG < a3a && a3Y < oH && (adZ[player] = 0, adu = !0)
	}, this.ap = function(aq) {
		return !(!adu && !aq && bc.iV < adt + (1 === adl && 0 === adj && 0 === adk && (c.aXU() || c.ao || 2 === c.bH) ? 1e3 : aLJ) || (ae4(ado), 0))
	}, this.aeA = function(ai) {
		return ae6(ai) * adb[ai]
	}, this.aeB = function(player) {
		return adb[player]
	}, this.b8 = function() {
		bc.ql() % 10 == 9 && (adu = adu || c.aXV() && !c.aXU()), !c.aXU() && 4 <= ++adW && function() {
			var ai, cy, cT;
			for (adW = 0, cT = 4; 1 <= cT; cT--)
				for (cy = aJ.aK - 1; 0 <= cy; cy--) ai = aJ.bX[cy] + cT * c.c2, 0 < a2j[ai] && a2j[ai] < 255 && a2j[ai]--;
			if (2 !== c.bH)
				for (cy = aJ.aK - 1; 0 <= cy; cy--) ai = aJ.bX[cy], 0 < a2j[ai] && a2j[ai] < 255 && a2j[ai]--
		}();
		var ai, cy, b7 = Math.floor(.1 * aJ.aK);
		for (b7 = (b7 = b7 < 8 ? 8 : b7) > aJ.aK ? aJ.aK : b7, ai = adV + b7 - 1; adV <= ai; ai--) cy = ai % aJ.aK, ! function(ai) {
			var aGZ = ae6(ai) * adb[ai];
			0 < adZ[ai] && aeY(ai, adX[ai], adY[ai], adZ[ai], ada[ai]) ? ! function(ai) {
				for (var a3, a4, aS, aY, ar = !1, cT = 0; cT < 8; cT++) {
					if (aS = adZ[ai] + 2, aY = ada[ai] + 2, aS > y.oF[ai] - y.oE[ai] + 1 || aY > y.oH[ai] - y.oG[ai] + 1) return ar;
					if (a3 = adX[ai] - 1, a4 = adY[ai] - 1, !aeY(ai, a3, a4, aS, aY)) return ar;
					adX[ai] = a3, adY[ai] = a4, adZ[ai] = aS, ada[ai] = aY, ar = !0
				}
				return ar
			}(ai) && function(ai, aGZ) {
				for (var a3, a4, aS, aY, ar = !1, aCC = adZ[ai], ch = 1 + Math.floor(.02 * aCC), cT = 1; cT < 5; cT++) {
					if ((aS = aCC + cT * ch) > y.oF[ai] - y.oE[ai] + 1) return ar;
					if ((aY = aee(aGZ, aS)) > y.oH[ai] - y.oG[ai] + 1) return ar;
					a3 = y.oE[ai] + Math.floor(Math.random() * (y.oF[ai] - y.oE[ai] + 2 - aS)), a4 = y.oG[ai] + Math.floor(Math.random() * (y.oH[ai] - y.oG[ai] + 2 - aY)), aeY(ai, a3, a4, aS, aY) && (adX[ai] = a3, adY[ai] = a4, adZ[ai] =
						aS, ada[ai] = aY, ar = !0)
				}
				return ar
			}(ai, aGZ) && aeb(ai) : ! function(ai, aGZ) {
				var aY, a3 = adX[ai] + 1,
					a4 = adY[ai] + 1,
					aS = adZ[ai] - 2;
				for (;;) {
					if (aS < 1) {
						adZ[ai] = 0;
						break
					}
					if (aY = aee(aGZ, aS), aeY(ai, a3, a4, aS, aY)) return adX[ai] = a3, adY[ai] = a4, adZ[ai] = aS, ada[ai] = aY, 1;
					a3++, a4++, aS -= 2
				}
				return
			}(ai, aGZ) ? function(ai, aGZ) {
				var a3, a4, aS, aY, cT, gJ, cX = y.oF[ai] - y.oE[ai] + 1,
					v1 = Math.floor(.02 * cX);
				for (gJ = -6 * (v1 = v1 < 1 ? 1 : v1), cT = cX; gJ <= cT; cT -= v1)
					if (aY = aee(aGZ, aS = 0 < cT ? cT : 1), a3 = y.oE[ai] + Math.floor(Math.random() * (y.oF[ai] - y.oE[ai] + 2 - aS)), a4 = y.oG[ai] + Math.floor(Math.random() * (y.oH[ai] - y.oG[ai] + 2 - aY)), aeY(ai, a3, a4, aS, aY))
						return adX[ai] = a3, adY[ai] = a4, adZ[ai] = aS, ada[ai] = aY
			}(ai, aGZ) : aeb(ai)
		}(aJ.bX[cy]);
		adV = (adV += b7) % aJ.aK
	}, this.aMO = function() {
		var ai, pG, cE, cF;
		if (bc.ql() % 4 == 1)
			for (ai = aJ.aK - 1; 0 <= ai; ai--) pG = aJ.bX[ai], j1.a9M[pG] < 2 || ((cE = Math.max(adx[pG] - 1, 0)) === (cF = Math.max(ady[pG] - 1, 0)) ? 0 === cE && (j1.a9M[pG] %= 2) : 0 === cF && j1.a9M[pG] < 6 && (j1.a9M[pG] += 4), adx[pG] =
				cE, ady[pG] = cF)
	}, this.qK = function(player) {
		var ai = player + 2 * c.c2,
			av = a2j[ai];
		return 0 < av && (e.yQ(50, player), a2j[ai] = 0, 255 === av)
	}, this.a5t = function(player) {
		return 255 === a2j[player + 2 * c.c2]
	}
}

function ma(aXW) {
	var dR = document.createElement("div"),
		aeh = document.createElement("div"),
		aNQ = (this.a3 = 0, this.a4 = 0);

	function aej() {
		hq.k7.du()
	}
	this.kA = aXW, this.show = function(a3, a4, mt) {
		if (aNQ) return [0, 0];
		aNQ = 1, this.a3 = a3, this.a4 = a4,
			function(self, mt) {
				var aS = aa.ab.e1(.16, .7),
					aY = aXW.length * aS / 3,
					aem = aW.aS / aW.eB,
					aen = aW.aY / aW.eB,
					ch = Math.min(1, Math.min(aem / aS, aen / aY));
				aS *= ch, aY *= ch, mt && (self.a3 += aa.ab.e1(.03, .5)), self.a3 = q.a0(self.a3, 0, aem - aS), self.a4 = q.a0(self.a4, 0, aen - aY), aeh.style.left = self.a3 + "px", aeh.style.top = self.a4 + "px", aeh.style.width = aS + "px",
					aeh.style.height = aY + "px", aeh.style.font = aa.ab.ac(0, .3 * aY / aXW.length), aa.ab.eA(aeh, 5);
				for (var ai = 1; ai < aXW.length; ai++) aa.ab.eA(aXW[ai].button, 8)
			}(this, mt), document.body.appendChild(dR)
	}, this.du = function() {
		aNQ && (aNQ = 0, dR.removeEventListener("click", aej), dx.removeChild(document.body, dR))
	};
	for (var ai = 0; ai < aXW.length; ai++) new k9("" + (1 + ai), aXW[ai].button, 0, 1);
	dR.style.position = "fixed", dR.style.top = "0", dR.style.left = "0", dR.style.width = "100%", dR.style.height = "100%", dR.style.zIndex = "5", aeh.style.position = "absolute",
		function() {
			for (var aek = (100 / aXW.length).toFixed(2) + "%", ai = 0; ai < aXW.length; ai++) aXW[ai].button.style.width = "100%", aXW[ai].button.style.height = aXW[ai].button.style.maxHeight = aek, aXW[ai].button.style.padding = "0.0em 0.9em", aeh
				.appendChild(aXW[ai].button)
		}(), dR.appendChild(aeh), dR.addEventListener("click", aej)
}
aG5(), self.aiCommand746 = function(d0) {
	0 === d0 ? aJ3() : 1 !== d0 || !aT || 1 !== aT.id || aT.og < 14 || di.a8a()
}, setTimeout(aJ3, 1e4), window.onload = function() {
	aJ3()
};