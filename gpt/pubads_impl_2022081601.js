(function(_) {
   /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
   var ba, da, ea, fa, ka, ma, oa, ra, la, qa, sa, ta, ua, va, wa, za, Ba, Ca, Da, Ea, Ga, Fa, Ha, Ia, Oa, Pa, Sa, Ua, Wa, Ya, $a, gb, kb, pb, sb, qb, yb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Rb, Sb, Wb, Xb, Yb, Zb, ac, bc, cc, fc, gc, jc, lc, dc, hc, oc, pc, rc, qc, sc, wc, yc, tc, Ac, Cc, Bc, Ec, Hc, Ic, Kc, Lc, Oc, Tc, Xc, Qc, $c, ad, ed, cd, fd, ld, od, id, jd, td, ud, vd, wd, rd, sd, xd, yd, Ad, Bd, Cd, Dd, Id, y, Ld, Nd, Pd, Qd, Rd, Vd, Wd, Xd, Yd, $d, be, de, ge, te, me, we, xe, ze, Ee, Te, Re, Ze, $e, af, bf, nf, tf, wf, xf, yf, ag, gg, hg, jg, kg, mg, ng, og, pg, rg, qg, vg, xg, yg, zg, Eg, Gg, Hg, Ig, Mg, Rg, Tg, Yg, $g, Dg, ah, ch, ph, G, Ph, ai, ei, gi, ii, ki, li, mi, oi, ri, ui, wi, yi, xi, Fi, Gi, Hi, Ii, zi, Ji, Li, Ai, Mi, Oi, Pi, Ri, Qi, Wi, Ui, Xi, fj, jj, aj, bj, kj, lj, nj, oj, pj, qj, uj, yj, vj, sj, Fj, Dj, Ej, Gj, Ij, Lj, Nj, K, Pj, Qj, Rj, Tj, Vj, bk, Xj, Wj, Yj, Zj, ak, Sk, Tk, Vk, Wk, Zk, bl, gl, ml, ol, ql, rl, tl, vl, wl, yl, ul, Al, Cl, El, Hl, Ol, Rl, Sl, $l, bm, dm, em, fm, im, km, na, lm, mm, qm, zm, Am, Cm, sm, Lm, Mm, Om, Pm, Qm, Sm, Tm, Vm, Xm, Ym, Zm, an, dn, kn, nn, pn, on, qn, rn, sn, tn, un, vn, Bn, wn, Fn, Kn, In, Nn, Sn, On, Pn, Qn, Rn, Tn, Un, uo, Ao, Fo, Jo, Oo, Po, So, Wo, To, Yo, Zo, bp, cp, dp, ep, gp, ip, jp, fq, kq, vq, wq, yq, Eq, Hq, Iq, Jq, Pq, Qq, Tq, Uq, Zq, $q, br, cr, dr, jr, or, qr, es, gs, hs, is, qs, ss, xs, As, C, Bs, Cs, Ds, Es, Fs, u, Gs, Hs, Is, Q, Js, Ks, Ls, Ss, Ts, Us, bb, db, fb, Ws, Zs, Xs, Ys, $s, at, Jd, et, pa, ia, ft, gt, ht, it, eg;
   da = function(a, b) {
       b = _.ca(a, b);
       var c;
       (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
       return c
   }
   ;
   ea = function(a) {
       var b = a.length;
       if (0 < b) {
           for (var c = Array(b), d = 0; d < b; d++)
               c[d] = a[d];
           return c
       }
       return []
   }
   ;
   fa = function(a, b, c) {
       return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
   }
   ;
   ka = function(a) {
       for (var b = 0, c = 0, d = {}; c < a.length; ) {
           var e = a[c++]
             , f = _.ha(e) ? "o" + ia(e) : (typeof e).charAt(0) + e;
           Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
           a[b++] = e)
       }
       a.length = b
   }
   ;
   ma = function(a, b) {
       a.sort(b || la)
   }
   ;
   oa = function(a) {
       for (var b = na, c = Array(a.length), d = 0; d < a.length; d++)
           c[d] = {
               index: d,
               value: a[d]
           };
       var e = b || la;
       ma(c, function(f, g) {
           return e(f.value, g.value) || f.index - g.index
       });
       for (b = 0; b < a.length; b++)
           a[b] = c[b].value
   }
   ;
   ra = function(a, b) {
       if (!pa(a) || !pa(b) || a.length != b.length)
           return !1;
       for (var c = a.length, d = qa, e = 0; e < c; e++)
           if (!d(a[e], b[e]))
               return !1;
       return !0
   }
   ;
   la = function(a, b) {
       return a > b ? 1 : a < b ? -1 : 0
   }
   ;
   qa = function(a, b) {
       return a === b
   }
   ;
   sa = function(a, b) {
       for (var c = {}, d = 0; d < a.length; d++) {
           var e = a[d]
             , f = b.call(void 0, e, d, a);
           void 0 !== f && (c[f] || (c[f] = [])).push(e)
       }
       return c
   }
   ;
   ta = function(a) {
       for (var b = [], c = 0; c < arguments.length; c++) {
           var d = arguments[c];
           if (Array.isArray(d))
               for (var e = 0; e < d.length; e += 8192)
                   for (var f = ta.apply(null, fa(d, e, e + 8192)), g = 0; g < f.length; g++)
                       b.push(f[g]);
           else
               b.push(d)
       }
       return b
   }
   ;
   ua = function(a, b) {
       for (var c in a)
           b.call(void 0, a[c], c, a)
   }
   ;
   va = function(a) {
       var b = [], c = 0, d;
       for (d in a)
           b[c++] = a[d];
       return b
   }
   ;
   wa = function(a, b) {
       for (var c in a)
           if (b.call(void 0, a[c], c, a))
               return c
   }
   ;
   za = function(a, b) {
       for (var c, d, e = 1; e < arguments.length; e++) {
           d = arguments[e];
           for (c in d)
               a[c] = d[c];
           for (var f = 0; f < ya.length; f++)
               c = ya[f],
               Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
       }
   }
   ;
   Ba = function() {
       var a = _.q.navigator;
       return a && (a = a.userAgent) ? a : ""
   }
   ;
   Ca = function(a) {
       return -1 != Ba().indexOf(a)
   }
   ;
   Da = function(a) {
       for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a); )
           c.push([d[1], d[2], d[3] || void 0]);
       return c
   }
   ;
   Ea = function() {
       return Ca("Firefox") || Ca("FxiOS")
   }
   ;
   Ga = function() {
       return Ca("Safari") && !(Fa() || Ca("Coast") || Ca("Opera") || Ca("Edge") || Ca("Edg/") || Ca("OPR") || Ea() || Ca("Silk") || Ca("Android"))
   }
   ;
   Fa = function() {
       return (Ca("Chrome") || Ca("CriOS")) && !Ca("Edge") || Ca("Silk")
   }
   ;
   Ha = function(a) {
       var b = {};
       a.forEach(function(c) {
           b[c[0]] = c[1]
       });
       return function(c) {
           return b[_.t(c, "find").call(c, function(d) {
               return d in b
           })] || ""
       }
   }
   ;
   Ia = function() {
       var a = Ba();
       if (Ca("Trident") || Ca("MSIE")) {
           var b = /rv: *([\d\.]*)/.exec(a);
           if (b && b[1])
               a = b[1];
           else {
               b = "";
               var c = /MSIE +([\d\.]+)/.exec(a);
               if (c && c[1])
                   if (a = /Trident\/(\d.\d)/.exec(a),
                   "7.0" == c[1])
                       if (a && a[1])
                           switch (a[1]) {
                           case "4.0":
                               b = "8.0";
                               break;
                           case "5.0":
                               b = "9.0";
                               break;
                           case "6.0":
                               b = "10.0";
                               break;
                           case "7.0":
                               b = "11.0"
                           }
                       else
                           b = "7.0";
                   else
                       b = c[1];
               a = b
           }
           return a
       }
       a = Da(a);
       b = Ha(a);
       return Ca("Opera") ? b(["Version", "Opera"]) : Ca("Edge") ? b(["Edge"]) : Ca("Edg/") ? b(["Edg"]) : Ca("Silk") ? b(["Silk"]) : Fa() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
   }
   ;
   _.Ma = function(a) {
       if (a instanceof Ja)
           a = Ka(a);
       else {
           a: if (La) {
               try {
                   var b = new URL(a)
               } catch (c) {
                   b = "https:";
                   break a
               }
               b = b.protocol
           } else
               b: {
                   b = document.createElement("a");
                   try {
                       b.href = a
                   } catch (c) {
                       b = void 0;
                       break b
                   }
                   b = -1 !== [":", ""].indexOf(b.protocol) ? "https:" : b.protocol
               }
           a = "javascript:" === b ? "about:invalid" : a
       }
       return a
   }
   ;
   Oa = function(a) {
       throw Error("unexpected value " + a + "!");
   }
   ;
   Pa = function(a) {
       var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
       (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
   }
   ;
   Sa = function(a, b) {
       a.textContent = b instanceof Qa && b.constructor === Qa ? b.j : "type_error:SafeScript";
       Pa(a)
   }
   ;
   Ua = function(a, b) {
       a.src = Ta(b);
       Pa(a)
   }
   ;
   Wa = function(a, b) {
       a.write(Va(b))
   }
   ;
   Ya = function(a) {
       return a ? a.passive && Xa() ? a : a.capture || !1 : !1
   }
   ;
   $a = function(a) {
       var b = window
         , c = !0;
       c = void 0 === c ? !1 : c;
       new u.Promise(function(d, e) {
           function f() {
               g.onload = null;
               g.onerror = null;
               var h;
               null == (h = g.parentElement) || h.removeChild(g)
           }
           var g = b.document.createElement("script");
           g.onload = function() {
               f();
               d()
           }
           ;
           g.onerror = function() {
               f();
               e(void 0)
           }
           ;
           g.type = "text/javascript";
           Ua(g, a);
           c && "complete" !== b.document.readyState ? _.Za(b, "load", function() {
               b.document.body.appendChild(g)
           }) : b.document.body.appendChild(g)
       }
       )
   }
   ;
   gb = function(a) {
       var b, c, d, e, f, g;
       return _.ab(function(h) {
           switch (h.j) {
           case 1:
               return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.qb,
               c = void 0,
               h.D = 2,
               bb(h, cb(b), 4);
           case 4:
               c = h.m;
               db(h, 3);
               break;
           case 2:
               fb(h);
           case 3:
               if (!c)
                   return h.return(void 0);
               d = a.Jb || c.sodar_query_id;
               e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
               f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
               g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
               return d && c.bg_hash_basename && c.bg_binary ? h.return({
                   context: a.H,
                   pe: c.bg_hash_basename,
                   oe: c.bg_binary,
                   We: a.j + "_" + a.m,
                   Jb: d,
                   qb: a.qb,
                   hc: e,
                   yc: f,
                   ec: g
               }) : h.return(void 0)
           }
       })
   }
   ;
   kb = function(a) {
       var b;
       return _.ab(function(c) {
           if (1 == c.j)
               return bb(c, gb(a), 2);
           if (b = c.m) {
               var d = "sodar2";
               d = void 0 === d ? "sodar2" : d;
               var e = window
                 , f = e.GoogleGcLKhOms;
               f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
               var g = {};
               f.push((g._ctx_ = b.context,
               g._bgv_ = b.pe,
               g._bgp_ = b.oe,
               g._li_ = b.We,
               g._jk_ = b.Jb,
               g._st_ = b.qb,
               g._rc_ = b.hc,
               g._dl_ = b.yc,
               g._g2_ = b.ec,
               g));
               if (f = e.GoogleDX5YKUSk)
                   e.GoogleDX5YKUSk = void 0,
                   f[1]();
               d = ib(jb, {
                   basename: d
               });
               $a(d)
           }
           return c.return(b)
       })
   }
   ;
   pb = function(a) {
       var b = !1;
       b = void 0 === b ? !1 : b;
       if (lb) {
           if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))
               throw Error("Found an unpaired surrogate");
           a = (ob || (ob = new TextEncoder)).encode(a)
       } else {
           for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
               var f = a.charCodeAt(e);
               if (128 > f)
                   d[c++] = f;
               else {
                   if (2048 > f)
                       d[c++] = f >> 6 | 192;
                   else {
                       if (55296 <= f && 57343 >= f) {
                           if (56319 >= f && e < a.length) {
                               var g = a.charCodeAt(++e);
                               if (56320 <= g && 57343 >= g) {
                                   f = 1024 * (f - 55296) + g - 56320 + 65536;
                                   d[c++] = f >> 18 | 240;
                                   d[c++] = f >> 12 & 63 | 128;
                                   d[c++] = f >> 6 & 63 | 128;
                                   d[c++] = f & 63 | 128;
                                   continue
                               } else
                                   e--
                           }
                           if (b)
                               throw Error("Found an unpaired surrogate");
                           f = 65533
                       }
                       d[c++] = f >> 12 | 224;
                       d[c++] = f >> 6 & 63 | 128
                   }
                   d[c++] = f & 63 | 128
               }
           }
           a = c === d.length ? d : d.subarray(0, c)
       }
       return a
   }
   ;
   sb = function(a) {
       return null == a || qb(a) ? a : "string" === typeof a ? rb(a) : null
   }
   ;
   qb = function(a) {
       return tb && null != a && a instanceof Uint8Array
   }
   ;
   yb = function(a) {
       if (a !== xb)
           throw Error("illegal external caller");
   }
   ;
   Ab = function(a, b) {
       Object.isFrozen(a) || (zb ? a[zb] |= b : void 0 !== a.Oa ? a.Oa |= b : Object.defineProperties(a, {
           Oa: {
               value: b,
               configurable: !0,
               writable: !0,
               enumerable: !1
           }
       }))
   }
   ;
   Bb = function(a, b) {
       Object.isExtensible(a) && (zb ? a[zb] && (a[zb] &= ~b) : void 0 !== a.Oa && (a.Oa &= ~b))
   }
   ;
   Cb = function(a) {
       var b;
       zb ? b = a[zb] : b = a.Oa;
       return null == b ? 0 : b
   }
   ;
   Db = function(a, b) {
       zb ? a[zb] = b : void 0 !== a.Oa ? a.Oa = b : Object.defineProperties(a, {
           Oa: {
               value: b,
               configurable: !0,
               writable: !0,
               enumerable: !1
           }
       })
   }
   ;
   Eb = function(a) {
       return a ? !!(Cb(a) & 1) : !1
   }
   ;
   Fb = function(a) {
       Ab(a, 1);
       return a
   }
   ;
   Gb = function(a) {
       return a ? !!(Cb(a) & 2) : !1
   }
   ;
   Hb = function(a) {
       Ab(a, 2);
       return a
   }
   ;
   Ib = function(a) {
       Ab(a, 16);
       return a
   }
   ;
   Jb = function(a) {
       if (!Array.isArray(a))
           throw Error("cannot mark non-array as shared mutably");
       Bb(a, 16)
   }
   ;
   Kb = function(a) {
       Ab(a, 32);
       return a
   }
   ;
   Lb = function(a, b) {
       b ? Ab(a, 8) : Bb(a, 8)
   }
   ;
   Mb = function(a, b) {
       Db(b, (Cb(a) | 0) & -51)
   }
   ;
   Nb = function(a, b) {
       Db(b, (Cb(a) | 2) & -49)
   }
   ;
   Ob = function(a) {
       return Gb(a.Y)
   }
   ;
   Rb = function(a) {
       return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
   }
   ;
   Sb = function(a, b) {
       return Object.prototype.hasOwnProperty.call(a, b)
   }
   ;
   Wb = function(a) {
       return null == a ? a : a.constructor === Tb ? a : "string" === typeof a ? a ? new Tb(a,xb) : Vb() : qb(a) ? a.length ? new Tb(new Uint8Array(a),xb) : Vb() : null
   }
   ;
   Xb = function(a) {
       a instanceof Tb && (yb(xb),
       a = a.tb || "");
       return a
   }
   ;
   Yb = function(a) {
       return {
           value: a,
           configurable: !1,
           writable: !1,
           enumerable: !1
       }
   }
   ;
   Zb = function(a, b, c, d) {
       c = void 0 === c ? !1 : c;
       d = void 0 === d ? !1 : d;
       if (Array.isArray(a))
           return new b(d ? Ib(a) : a);
       if (c)
           return new b
   }
   ;
   ac = function(a, b, c, d) {
       var e = !1;
       var f = null != a && "object" === typeof a && !(e = Array.isArray(a)) && Array.isArray(a.Y) && a.constructor !== Object ? a : e ? new b(a) : new b;
       c ? Hb(f.Y) : d && (f = f.sb());
       return f
   }
   ;
   bc = function(a) {
       return a
   }
   ;
   cc = function(a) {
       return a
   }
   ;
   fc = function(a, b) {
       a = a || {};
       b = b || {};
       var c = {}, d;
       for (d in a)
           Sb(a, d) && (c[d] = 0);
       for (var e in b)
           Sb(b, e) && (c[e] = 0);
       for (var f in c)
           if (Sb(c, f) && !dc(a, f, a[f], b, f, b[f]))
               return !1;
       return !0
   }
   ;
   gc = function(a) {
       return a && "object" === typeof a ? a.Y || a : a
   }
   ;
   jc = function(a, b) {
       return null != b && hc(ic(a), ic(b))
   }
   ;
   lc = function(a, b, c, d) {
       if (null == d)
           d = [];
       else if (!Array.isArray(d))
           return null;
       return b[c] = new kc(d,a.m,a.H,a.l)
   }
   ;
   dc = function(a, b, c, d, e, f) {
       c = Xb(c);
       f = Xb(f);
       c = gc(c);
       f = gc(f);
       if (c == f)
           return !0;
       if (tb) {
           var g = qb(c)
             , h = qb(f);
           if (g || h) {
               if (g)
                   a = c;
               else if ("string" === typeof c)
                   a = sb(c);
               else
                   return !1;
               if (!h)
                   if ("string" === typeof f)
                       f = sb(f);
                   else
                       return !1;
               if (a.length !== f.length)
                   return !1;
               for (h = 0; h < a.length; h++)
                   if (a[h] !== f[h])
                       return !1;
               return !0
           }
       }
       if (c instanceof kc)
           return jc(c, f instanceof kc ? f : lc(c, d, e, f));
       if (f instanceof kc)
           return jc(f, lc(f, a, b, c));
       if (null == c && Array.isArray(f) && Eb(f) && !f.length || null == f && Array.isArray(c) && Eb(c) && !c.length)
           return !0;
       if (!_.ha(c) || !_.ha(f))
           return "number" === typeof c && isNaN(c) || "number" === typeof f && isNaN(f) ? String(c) == String(f) : !1;
       if (c.constructor != f.constructor)
           return !1;
       if (c.constructor === Array) {
           h = c;
           b = a = void 0;
           c = Math.max(h.length, f.length);
           for (d = 0; d < c; d++)
               if (e = h[d],
               g = f[d],
               e && e.constructor == Object && (a = e,
               e = void 0),
               g && g.constructor == Object && (b = g,
               g = void 0),
               !dc(h, d, e, f, d, g))
                   return !1;
           return a || b ? (a = a || {},
           b = b || {},
           fc(a, b)) : !0
       }
       if (c.constructor === Object)
           return fc(c, f);
       throw Error("Invalid type in JSPB array");
   }
   ;
   hc = function(a, b) {
       return dc(void 0, void 0, a, void 0, void 0, b)
   }
   ;
   oc = function(a) {
       switch (typeof a) {
       case "number":
           return isFinite(a) ? a : String(a);
       case "object":
           if (a && !Array.isArray(a)) {
               if (qb(a))
                   return mc(a);
               if (a instanceof Tb)
                   return nc(a);
               if (a instanceof kc)
                   return ic(a)
           }
       }
       return a
   }
   ;
   pc = function(a, b) {
       b.o && (a.o = b.o.slice())
   }
   ;
   rc = function(a, b, c) {
       if (null != a) {
           if (Array.isArray(a))
               a = qc(a, b, c);
           else if (Rb(a)) {
               var d = {}, e;
               for (e in a)
                   Sb(a, e) && (d[e] = rc(a[e], b, c));
               a = d
           } else
               a = b(a);
           return a
       }
   }
   ;
   qc = function(a, b, c) {
       var d = Array.prototype.slice.call(a);
       c(a, d);
       for (a = 0; a < d.length; a++)
           d[a] = rc(d[a], b, c);
       return d
   }
   ;
   sc = function(a) {
       if (a && "object" == typeof a && a.toJSON)
           return a.toJSON();
       a = oc(a);
       return Array.isArray(a) ? qc(a, sc, tc) : a
   }
   ;
   wc = function(a) {
       return vc(a)
   }
   ;
   yc = function(a) {
       if ("object" === typeof a) {
           if (qb(a))
               return new Uint8Array(a);
           if (a instanceof kc)
               return a.j.length ? xc(a, wc) : [];
           if (Array.isArray(a.Y) && a.constructor !== Object)
               return vc(a)
       }
       return a
   }
   ;
   tc = function() {}
   ;
   Ac = function(a, b, c, d) {
       var e = v(a, b, d);
       Array.isArray(e) ? Eb(e) || Fb(e) : e = zc;
       if (Ob(a))
           c & 1 || (Hb(e),
           Object.freeze(e));
       else if (e === zc || Gb(e))
           e = Fb(Array.prototype.slice.call(e)),
           w(a, b, e, d);
       return e
   }
   ;
   Cc = function(a) {
       var b = Bc
         , c = Ac(a, 45, 1);
       if (c.length && !(Cb(c) & 4)) {
           Object.isFrozen(c) && (c = Fb(c.slice()),
           w(a, 45, c, void 0, !0));
           for (var d = 0; d < c.length; d++)
               c[d] = b(c[d]);
           Ab(c, 5)
       }
       Ob(a) && !Object.isFrozen(c) && (Hb(c),
       Object.freeze(c));
       return c
   }
   ;
   Bc = function(a) {
       return Wb(a) || Vb()
   }
   ;
   Ec = function(a, b, c, d) {
       a: {
           var e = Ob(a);
           if (null == b) {
               if (e) {
                   e = Dc || (Dc = new kc(Hb([])));
                   break a
               }
               b = []
           } else {
               if (b.constructor === kc) {
                   e = b;
                   break a
               }
               Array.isArray(b) || (b = [])
           }
           var f = Gb(b);
           if (e) {
               if (!b.length) {
                   e = Dc || (Dc = new kc(Hb([])));
                   break a
               }
               f || Hb(b)
           }
           Cb(b) & 32 ? Jb(b) : Cb(a.Y) & 16 && Ib(b);
           b = new kc(b,d);
           w(a, c, b, !1, !0);
           e = b
       }
       if (null == e)
           return e;
       b = Ob(a);
       f = e instanceof kc && Gb(e.j);
       if (!b && f) {
           e = e.j.slice();
           for (f = 0; f < e.length; f++)
               e[f] = e[f].slice();
           e = new kc(e,d);
           w(a, c, e, !1, !1)
       }
       !b && d && (e.A = !0);
       return e
   }
   ;
   Hc = function(a, b, c, d) {
       Fc(a);
       c !== d ? w(a, b, c) : Gc(a, b);
       return a
   }
   ;
   Ic = function(a, b, c) {
       Fc(a);
       Ac(a, b, 2, !1).push(c)
   }
   ;
   Kc = function(a, b, c) {
       return Jc(a, b) === c ? c : -1
   }
   ;
   Lc = function(a, b) {
       return oc(b)
   }
   ;
   Oc = function(a, b) {
       pc(a, b);
       var c = b.j;
       if (c) {
           b = b.m;
           for (var d in c)
               if (Sb(c, d)) {
                   var e = c[d];
                   if (e) {
                       var f = !(!b || !b[d])
                         , g = +d;
                       if (Array.isArray(e)) {
                           if (e.length)
                               for (f = Nc(a, e[0].constructor, g, f),
                               g = 0; g < Math.min(f.length, e.length); g++)
                                   Oc(f[g], e[g])
                       } else
                           (f = Pc(a, e.constructor, g, f)) && Oc(f, e)
                   }
               }
       }
   }
   ;
   Tc = function(a) {
       var b = 0 > a;
       a = Math.abs(a);
       var c = a >>> 0;
       a = Math.floor((a - c) / 4294967296);
       b && (c = _.x(Qc(c, a)),
       b = c.next().value,
       a = c.next().value,
       c = b);
       Rc = c >>> 0;
       Sc = a >>> 0
   }
   ;
   Xc = function(a) {
       if (16 > a.length)
           Tc(Number(a));
       else if (Wc)
           a = BigInt(a),
           Rc = Number(a & BigInt(4294967295)) >>> 0,
           Sc = Number(a >> BigInt(32) & BigInt(4294967295));
       else {
           var b = +("-" === a[0]);
           Sc = Rc = 0;
           for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
           e += 6)
               d = Number(a.slice(d, e)),
               Sc *= 1E6,
               Rc = 1E6 * Rc + d,
               4294967296 <= Rc && (Sc += Rc / 4294967296 | 0,
               Rc %= 4294967296);
           b && (b = _.x(Qc(Rc, Sc)),
           a = b.next().value,
           b = b.next().value,
           Rc = a,
           Sc = b)
       }
   }
   ;
   Qc = function(a, b) {
       b = ~b;
       a ? a = ~a + 1 : b += 1;
       return [a, b]
   }
   ;
   $c = function(a, b, c, d, e, f) {
       if (a = a.j && a.j[c])
           Array.isArray(a) ? (e = f.Jc ? Fb(a.slice()) : a,
           Yc(b, c, e)) : Zc(b, c, a);
       else {
           if (tb && d instanceof Uint8Array)
               e = d.length ? new Tb(new Uint8Array(d),xb) : Vb();
           else if (d instanceof kc) {
               f = Array.prototype.slice.call(ic(d));
               for (d = 0; d < f.length; d++)
                   a = Array.prototype.slice.call(f[d]),
                   f[d] = a,
                   a = a[1],
                   Array.isArray(a) && e && Hb(a);
               e = f
           } else
               Array.isArray(d) && (e ? Hb(d) : Eb(d) && f.Jc ? (e = Array.prototype.slice.call(d),
               Mb(d, e),
               d = e) : Jb(d)),
               e = d;
           w(b, c, e)
       }
   }
   ;
   ad = function(a) {
       if (tb && a instanceof Uint8Array)
           return mc(a);
       if (Array.isArray(a)) {
           if (Gb(a))
               return a;
           Cb(a) & 16 && Hb(a);
           return qc(a, ad, Nb)
       }
       a instanceof bd ? a = cd(a) : a instanceof kc && (a = xc(a, cd),
       Hb(a.j));
       return a
   }
   ;
   ed = function(a, b, c, d, e) {
       (a = a.j && a.j[c]) ? Array.isArray(a) ? (Gb(a) && Object.isFrozen(a) ? d = a : (d = dd(a, cd),
       Nb(a, d),
       Object.freeze(d)),
       Yc(b, c, d, e)) : Zc(b, c, cd(a), e) : w(b, c, ad(d), e)
   }
   ;
   cd = function(a) {
       if (Ob(a))
           return a;
       a = fd(a);
       Hb(a.Y);
       return a
   }
   ;
   fd = function(a) {
       var b = new a.constructor;
       pc(b, a);
       for (var c = a.Y, d = 0; d < c.length; d++) {
           var e = c[d];
           if (d === c.length - 1 && Rb(e))
               for (var f in e) {
                   var g = +f;
                   _.t(Number, "isNaN").call(Number, g) ? gd(b)[g] = e[g] : ed(a, b, g, e[f], !0)
               }
           else
               ed(a, b, d - a.D, e, !1)
       }
       return b
   }
   ;
   ld = function(a, b, c) {
       if (c) {
           var d = {}, e;
           for (e in c) {
               if (Sb(c, e)) {
                   var f = c[e]
                     , g = f.Ff;
                   g || (d.vb = f.Xg || f.ih.Ac,
                   f.ne ? (d.Fc = id(f.ne),
                   g = function(h) {
                       return function(k, l, m) {
                           return h.vb(k, l, m, h.Fc)
                       }
                   }(d)) : f.Xe ? (d.Ec = jd(f.ze.sd, f.Xe),
                   g = function(h) {
                       return function(k, l, m) {
                           return h.vb(k, l, m, h.Ec)
                       }
                   }(d)) : g = d.vb,
                   f.Ff = g);
                   g(b, a, f.ze)
               }
               d = {
                   vb: d.vb,
                   Fc: d.Fc,
                   Ec: d.Ec
               }
           }
       }
       kd(b, a)
   }
   ;
   od = function(a, b) {
       var c = a[b];
       "function" == typeof c && 0 === c.length && (c = c(),
       a[b] = c);
       return Array.isArray(c) && (md in c || nd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
   }
   ;
   id = function(a) {
       var b = a[qd];
       if (!b) {
           var c = rd(a);
           b = function(d, e) {
               return sd(d, e, c)
           }
           ;
           a[qd] = b
       }
       return b
   }
   ;
   jd = function(a, b) {
       var c = a[qd];
       c || (c = function(d, e) {
           return ld(d, e, b)
       }
       ,
       a[qd] = c);
       return c
   }
   ;
   td = function(a, b) {
       a.push(b)
   }
   ;
   ud = function(a, b, c) {
       a.push(b, c.Ac)
   }
   ;
   vd = function(a, b, c, d) {
       var e = id(d)
         , f = rd(d).sd
         , g = c.Ac;
       a.push(b, function(h, k, l) {
           return g(h, k, l, f, e)
       })
   }
   ;
   wd = function(a, b, c, d, e, f) {
       var g = jd(d, f)
         , h = c.Ac;
       a.push(b, function(k, l, m) {
           return h(k, l, m, d, g)
       })
   }
   ;
   rd = function(a) {
       var b = a[nd];
       if (b)
           return b;
       b = a[nd] = [];
       var c = td
         , d = ud
         , e = vd
         , f = wd;
       b.sd = a[0];
       var g = 1;
       if (a.length > g && "number" !== typeof a[g]) {
           var h = a[g++];
           c(b, h)
       }
       for (; g < a.length; ) {
           c = a[g++];
           for (var k = g + 1; k < a.length && "number" !== typeof a[k]; )
               k++;
           h = a[g++];
           k -= g;
           switch (k) {
           case 0:
               d(b, c, h);
               break;
           case 1:
               (k = od(a, g)) ? (g++,
               e(b, c, h, k)) : d(b, c, h, a[g++]);
               break;
           case 2:
               k = b;
               var l = g++;
               l = od(a, l);
               e(k, c, h, l, a[g++]);
               break;
           case 3:
               f(b, c, h, a[g++], a[g++], a[g++]);
               break;
           case 4:
               f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
               break;
           default:
               throw Error("unexpected number of binary field arguments: " + k);
           }
       }
       md in a && nd in a && (a.length = 0);
       return b
   }
   ;
   sd = function(a, b, c) {
       for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)
           (0,
           c[f + 1])(b, a, c[f]);
       ld(a, b, e ? c[0] : void 0)
   }
   ;
   xd = function(a, b) {
       return {
           hh: a,
           Ac: b
       }
   }
   ;
   yd = function(a) {
       return a
   }
   ;
   Ad = function(a, b) {
       var c = zd;
       zd = void 0;
       if (!b(a))
           throw b = c ? c() + "\n" : "",
           Error(b + String(a));
   }
   ;
   Bd = function(a, b, c) {
       Ad(a, b, c);
       return a
   }
   ;
   Cd = function(a, b, c) {
       b = zd;
       zd = void 0;
       if (!a) {
           if (b)
               throw Error(b());
           if (c && 0 < c.length)
               throw Error("[" + c.map(String).join(",") + "]");
           throw Error(String(a));
       }
   }
   ;
   Dd = function(a) {
       switch (a) {
       case 1:
           return "gda";
       case 2:
           return "gpt";
       case 3:
           return "ima";
       case 4:
           return "pal";
       case 5:
           return "xfad";
       case 6:
           return "dv3n";
       case 7:
           return "spa";
       default:
           return "unk"
       }
   }
   ;
   Id = function(a, b, c, d) {
       d = void 0 === d ? [] : d;
       var e = new a.MutationObserver(function(f) {
           f = _.x(f);
           for (var g = f.next(); !g.done; g = f.next()) {
               g = _.x(g.value.removedNodes);
               for (var h = g.next(); !h.done; h = g.next())
                   if (h = h.value,
                   d && (h === b || Ed(h, b))) {
                       f = _.x(d);
                       for (g = f.next(); !g.done; g = f.next())
                           g.value.disconnect();
                       d.length = 0;
                       c();
                       return
                   }
           }
       }
       );
       d.push(e);
       e.observe(a.document.documentElement, {
           childList: !0,
           subtree: !0
       });
       Fd(function(f) {
           if (!f.parent || !Gd(f.parent))
               return !1;
           for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++)
               try {
                   if (Hd(g[h]) == f) {
                       Id(f.parent, g[h], c, d);
                       break
                   }
               } catch (k) {}
           return !1
       }, !1, !1, a)
   }
   ;
   y = function(a) {
       var b = Jd.apply(1, arguments);
       if (0 === b.length)
           return Kd(a[0]);
       for (var c = [a[0]], d = 0; d < b.length; d++)
           c.push(encodeURIComponent(b[d])),
           c.push(a[d + 1]);
       return Kd(c.join(""))
   }
   ;
   Ld = function(a, b) {
       var c = Ta(a).toString();
       if (/#/.test(c))
           throw Error("");
       var d = /\?/.test(c) ? "&" : "?";
       b.forEach(function(e, f) {
           e = e instanceof Array ? e : [e];
           for (var g = 0; g < e.length; g++) {
               var h = e[g];
               null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
               d = "&")
           }
       });
       return Kd(c)
   }
   ;
   Nd = function(a) {
       return new _.Md(function(b) {
           return b.substr(0, a.length + 1).toLowerCase() === a + ":"
       }
       )
   }
   ;
   Pd = function(a) {
       for (var b = Jd.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
           c.push(String(b[d])),
           c.push(a[d + 1]);
       return _.Od(c.join(""))
   }
   ;
   Qd = function(a) {
       return Kd(Ta(a).toString())
   }
   ;
   Rd = function(a) {
       return JSON.stringify([a.map(function(b) {
           var c = {};
           return [(c[b.fd] = b.message.toJSON(),
           c)]
       })])
   }
   ;
   Vd = function(a) {
       a.cd.apply(a, _.Ud(Jd.apply(1, arguments).map(function(b) {
           return {
               fd: 2,
               message: b
           }
       })))
   }
   ;
   Wd = function(a) {
       a.cd.apply(a, _.Ud(Jd.apply(1, arguments).map(function(b) {
           return {
               fd: 5,
               message: b
           }
       })))
   }
   ;
   Xd = function(a) {
       a.cd.apply(a, _.Ud(Jd.apply(1, arguments).map(function(b) {
           return {
               fd: 8,
               message: b
           }
       })))
   }
   ;
   Yd = function(a) {
       a && "function" == typeof a.Ca && a.Ca()
   }
   ;
   $d = function() {
       var a = Zd;
       return (0,
       B.Ma)(function(b) {
           return b instanceof a
       }, function() {
           return (0,
           B.functionName)(a)
       })
   }
   ;
   be = function() {
       var a = ae;
       return (0,
       B.Ma)(function(b) {
           for (var c in a)
               if (b === a[c] && !/^[0-9]+$/.test(c))
                   return !0;
           return !1
       }, function() {
           return "unknown enum"
       })
   }
   ;
   de = function() {
       for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
           8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
           c = b & 15,
           b >>= 4,
           a[d] = ce[19 == d ? c & 3 | 8 : c]);
       return Kd("uuid-in-package:" + a.join("").toLowerCase())
   }
   ;
   ge = function(a, b, c, d) {
       a.google_image_requests || (a.google_image_requests = []);
       var e = _.ee("IMG", a.document);
       if (c || d) {
           var f = function(g) {
               c && c(g);
               d && da(a.google_image_requests, e);
               _.fe(e, "load", f);
               _.fe(e, "error", f)
           };
           _.Za(e, "load", f);
           _.Za(e, "error", f)
       }
       e.src = b;
       a.google_image_requests.push(e)
   }
   ;
   te = function(a, b) {
       var c;
       a: {
           try {
               if (a) {
                   var d = a.getItem("google_experiment_mod");
                   break a
               }
           } catch (g) {}
           d = null
       }
       d = null != (c = d) ? c : "";
       try {
           var e = he(ie, d);
           if (d) {
               var f = he(ie, d);
               je(f, ke(le(1), -1));
               f.aa()
           }
       } catch (g) {
           me(d),
           e = new ie
       }
       if (c = (C = Nc(e, ne, 1),
       _.t(C, "find")).call(C, function(g) {
           return oe(g, 1, 0) === b
       }))
           if (f = pe(c, 2),
           null === f || isNaN(f))
               me(d);
           else
               return f;
       d = qe() ? null : Math.floor(1E3 * re());
       if (null === d)
           return null;
       c ? ke(c, d) : je(e, ke(le(b), d));
       return se(a, e.aa()) ? d : null
   }
   ;
   me = function(a) {
       .01 > Math.random() && ue({
           data: a
       }, "ls_tamp")
   }
   ;
   we = function(a, b) {
       b = void 0 === b ? window : b;
       if (ve(a))
           try {
               return b.localStorage
           } catch (c) {}
       return null
   }
   ;
   xe = function(a) {
       return "null" !== a.origin
   }
   ;
   ze = function(a, b, c) {
       b = ve(b) && xe(c) ? c.document.cookie : null;
       return null === b ? null : (new ye({
           cookie: b
       })).get(a) || ""
   }
   ;
   Ee = function(a, b, c, d) {
       c = void 0 === c ? null : c;
       d = void 0 === d ? {} : d;
       var e = Ae.j();
       0 === e.j && (e.j = Math.random() < _.D(Be) ? 2 : 1);
       2 === e.j && (e = {},
       ue(_.t(Object, "assign").call(Object, {}, (e.c = String(a),
       e.pc = String(Ce(window)),
       e.em = c,
       e.lid = b,
       e.eids = De().join(),
       e), d), "esp"))
   }
   ;
   Te = function(a, b, c, d) {
       Ee(18, a);
       try {
           var e = _.Fe();
           _.D(Oe) && (w(b, 8, Number(((0,
           B.J)(Pe(b, 8)) - 1).toFixed(3))),
           w(b, 7, Math.round(e / 1E3 / 60)));
           return c().then(function(f) {
               Ee(29, a, null, {
                   delta: String(_.Fe() - e)
               });
               "string" !== typeof f ? Ee(21, a) : f || Ee(20, a);
               Zc(w(b, 2, f), 10);
               Qe().set(b, d) && Ee(27, a);
               return b
           }).catch(function(f) {
               Re(b, 106, d);
               Ee(28, a, Se(f));
               return b
           })
       } catch (f) {
           return Re(b, 107, d),
           Ee(1, a, Se(f)),
           u.Promise.resolve(b)
       }
   }
   ;
   Re = function(a, b, c) {
       var d, e = null != (d = Pc(a, Ue, 10)) ? d : new Ue;
       b = w(e, 1, b);
       Zc(a, 10, b);
       Qe().set(a, c)
   }
   ;
   Ze = function(a, b, c) {
       if (c) {
           var d = b.toString();
           if (!document.querySelector('[src="' + d + '"]')) {
               var e = Qe().get(a, c)
                 , f = e.lb;
               e = e.success;
               if (_.E(Ve)) {
                   if (f && 0 === We(f))
                       return;
                   var g = _.D(Oe), h;
                   if (g && 1 > (null != (h = null == f ? void 0 : Pe(f, 8)) ? h : g)) {
                       Re((0,
                       B.J)(f), 104, c);
                       return
                   }
               } else if (!e || f && (0 === We(f) || 1 > (null != (g = Pe(f, 8)) ? g : 0)))
                   return;
               h = {};
               Ee(30, a, null, (h.url = d,
               h));
               var k = document.createElement("script");
               k.setAttribute("esp-signal", "true");
               Ua(k, b);
               var l = function() {
                   var m = {};
                   Ee(31, a, null, (m.url = d,
                   m));
                   Re(null != f ? f : Xe(new Ye, a), 109, c);
                   _.fe(k, "error", l)
               };
               document.head.appendChild(k);
               _.Za(k, "error", l)
           }
       }
   }
   ;
   $e = function(a, b) {
       var c, d, e;
       return _.ab(function(f) {
           if (1 == f.j)
               return c = 0 < b ? a.filter(function(g) {
                   return !g.jd
               }) : a,
               bb(f, u.Promise.all(c.map(function(g) {
                   return g.td.promise
               })), 2);
           if (3 != f.j) {
               if (a.length === c.length)
                   return f.return(0);
               d = a.filter(function(g) {
                   return g.jd
               });
               e = _.Fe();
               return bb(f, u.Promise.race([u.Promise.all(d.map(function(g) {
                   return g.td.promise
               })), new u.Promise(function(g) {
                   return void setTimeout(g, b)
               }
               )]), 3)
           }
           return f.return(_.Fe() - e)
       })
   }
   ;
   af = function(a) {
       var b = function(c) {
           var d = {};
           Ee(c, (0,
           B.J)(v(a, 1)), null, (d.tic = String(Math.round((Date.now() - (0,
           B.J)(v(a, 3))) / 6E4)),
           d))
       };
       switch (We(a)) {
       case 0:
           b(24);
           break;
       case 1:
           b(25);
           break;
       case 2:
           b(26);
           break;
       case 3:
           Ee(9, (0,
           B.J)(v(a, 1)));
           break;
       case 4:
           b(23)
       }
   }
   ;
   bf = function() {
       var a = window;
       var b = void 0 === b ? function() {}
       : b;
       return new u.Promise(function(c) {
           var d = function() {
               c(b());
               _.fe(a, "load", d)
           };
           _.Za(a, "load", d)
       }
       )
   }
   ;
   nf = function(a, b, c, d) {
       var e, f, g, h, k, l, m, n, p;
       return _.ab(function(r) {
           if (1 == r.j)
               return e = new cf,
               f = _.D(Oe),
               g = new df(a,c,d),
               h = new ef(g.l,f,d),
               k = new ff(h.l,f,d),
               l = new hf(k.o,f,c,d),
               m = new jf(b,l.l,c,d),
               n = new kf(m.o,m.C,c,d),
               lf(e, [g, h, k, l, m, n]),
               mf(e),
               bb(r, m.l.promise, 2);
           p = r.m;
           return r.return(p ? p : {
               id: a,
               collectorGeneratedData: null
           })
       })
   }
   ;
   tf = function(a, b, c) {
       if (b)
           if (of() === pf(window) || _.E(qf))
               if (a.encryptedSignalProviders instanceof rf)
                   a.encryptedSignalProviders.addErrorHandler(c);
               else {
                   Ee(38, "");
                   var d, e = new sf(null != (d = a.encryptedSignalProviders) ? d : [],b);
                   a.encryptedSignalProviders = new rf(e);
                   e.addErrorHandler(c)
               }
           else
               Ee(16, "");
       else
           Ee(15, "")
   }
   ;
   wf = function(a, b, c, d) {
       if (c && !document.querySelector('[src="' + b.toString() + '"]')) {
           var e = _.D(Oe);
           a = new df(a,c,d);
           var f = new uf(a.l,d)
             , g = new ef(f.l,e,d);
           e = new hf(g.l,e,c,d);
           b = new vf(e.l,b,c,d);
           c = new cf;
           lf(c, [a, f, g, e, b]);
           mf(c)
       }
   }
   ;
   xf = function(a) {
       a = void 0 === a ? window : a;
       a = a.googletag;
       return (null == a ? 0 : a.apiReady) ? a : void 0
   }
   ;
   yf = function(a, b) {
       b = void 0 === b ? document : b;
       var c;
       return !(null == (c = b.featurePolicy) || !(C = c.allowedFeatures(),
       _.t(C, "includes")).call(C, a))
   }
   ;
   ag = function(a) {
       var b = void 0 === b ? zf : b;
       var c = _.t(Object, "assign").call(Object, {}, a)
         , d = a.id
         , e = a.style;
       a = a.data;
       c = (delete c.id,
       delete c.style,
       delete c.data,
       c);
       if (_.t(Object, "keys").call(Object, c).length)
           throw Error("Invalid attribute(s): " + _.t(Object, "keys").call(Object, c));
       d = {
           id: d,
           style: e ? new Af(e instanceof Af && e.constructor === Af ? e.Yc : "type_error:SafeStyle",Bf) : void 0
       };
       if (a)
           for (e = _.x(_.t(a, "entries").call(a)),
           a = e.next(); !a.done; a = e.next())
               c = _.x(a.value),
               a = c.next().value,
               c = c.next().value,
               (0,
               B.Rd)(Cf.test(a)),
               d[a] = c;
       b = Df(Va(b).toString());
       if (!Pf.test("div"))
           throw Error("");
       if ("DIV"in Qf)
           throw Error("");
       e = "";
       if (d)
           for (f in d)
               if (Object.prototype.hasOwnProperty.call(d, f)) {
                   if (!Pf.test(f))
                       throw Error("");
                   c = d[f];
                   if (null != c) {
                       a = f;
                       if (c instanceof Rf)
                           c = Sf(c);
                       else {
                           if ("style" == a.toLowerCase())
                               throw Error("");
                           if (/^on/i.test(a))
                               throw Error("");
                           if (a.toLowerCase()in Tf)
                               if (c instanceof Uf)
                                   c = Ta(c).toString();
                               else if (c instanceof Ja)
                                   c = Ka(c);
                               else if ("string" === typeof c)
                                   c instanceof Ja || (c = "object" == typeof c && c.Na ? c.Fa() : String(c),
                                   Vf.test(c) ? c = _.Od(c) : (c = String(c),
                                   c = c.replace(/(%0A|%0D)/g, ""),
                                   c = c.match(Wf) ? _.Od(c) : null)),
                                   c = (c || _.Xf).Fa();
                               else
                                   throw Error("");
                       }
                       c.Na && (c = c.Fa());
                       a = a + '="' + Yf(String(c)) + '"';
                       e += " " + a
                   }
               }
       var f = "<div" + e;
       null == b ? b = [] : Array.isArray(b) || (b = [b]);
       !0 === Zf.div ? f += ">" : (d = $f(b),
       f += ">" + Va(d).toString() + "</div>");
       f = Df(f);
       return Df(Va(f).toString())
   }
   ;
   gg = function(a) {
       bg();
       var b = cg.googleToken[5] || 0;
       a && (0 != b || dg[3] >= eg() ? fg.nd(a) : (fg.Bd().push(a),
       fg.Ud()));
       dg[3] >= eg() && dg[2] >= eg() || fg.Ud()
   }
   ;
   hg = function(a) {
       a = dd(a.split(/\s+/), function(b) {
           return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
               value: parseFloat(b[1]),
               type: b[2]
           } : {
               value: 0,
               type: "px"
           }
       });
       a[1] = a[1] || a[0];
       a[2] = a[2] || a[0];
       a[3] = a[3] || a[1];
       return a
   }
   ;
   jg = function(a) {
       if (!a)
           return [0];
       a = "number" === typeof a ? [a] : a;
       a = _.ig(a, function(b) {
           return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
       });
       ka(a);
       ma(a, function(b, c) {
           return b - c
       });
       return a
   }
   ;
   kg = function(a) {
       try {
           var b = a.getBoundingClientRect()
       } catch (c) {}
       return b ? {
           top: b.top,
           right: b.right,
           bottom: b.bottom,
           left: b.left,
           width: b.width || b.right - b.left,
           height: b.height || b.bottom - b.top
       } : {
           top: 0,
           right: 0,
           bottom: 0,
           left: 0,
           width: 0,
           height: 0
       }
   }
   ;
   mg = function(a, b, c, d) {
       var e = new _.lg, f = "", g = function(A) {
           try {
               var z = "object" === typeof A.data ? A.data : JSON.parse(A.data);
               f === z.paw_id && (_.fe(a, "message", g),
               z.error ? e.reject(Error(z.error)) : e.resolve(d(z)))
           } catch (J) {}
       }, h;
       if ("function" === typeof (null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo))
           return _.Za(a, "message", g),
           f = c(a.gmaSdk),
           e.promise;
       var k, l, m, n, p, r;
       return "function" === typeof (null == (k = a.webkit) ? void 0 : null == (l = k.messageHandlers) ? void 0 : null == (m = l.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof (null == (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (r = p.getGmaSig) ? void 0 : r.postMessage) ? (f = String(Math.floor(2147483647 * re())),
       _.Za(a, "message", g),
       b(a.webkit.messageHandlers, f),
       e.promise) : null
   }
   ;
   ng = function(a) {
       return mg(a, function(b, c) {
           var d, e;
           return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
       }, function(b) {
           return b.getQueryInfo()
       }, function(b) {
           return b.signal
       })
   }
   ;
   og = function(a) {
       var b, c;
       return null != (c = (C = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
           return a[d]
       }),
       _.t(C, "find")).call(C, function(d) {
           return Array.isArray(null == d ? void 0 : d.que)
       })) ? c : null
   }
   ;
   pg = function(a, b, c, d) {
       try {
           if (a.setAttribute("data-google-query-id", c),
           !d) {
               null != b.googletag || (b.googletag = {
                   cmd: []
               });
               var e, f = null != (e = b.googletag.queryIds) ? e : [];
               f.push(c);
               500 < f.length && f.shift();
               b.googletag.queryIds = f
           }
       } catch (g) {}
   }
   ;
   rg = function(a, b, c) {
       c = void 0 === c ? null : c;
       b = _.x(b);
       for (var d = b.next(); !d.done; d = b.next()) {
           var e = a
             , f = d.value;
           d = c;
           d = void 0 === d ? null : d;
           var g = e.document;
           var h = f.x
             , k = f.y;
           g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
           if (g = g.elementFromPoint(h, k)) {
               if (!(h = qg(g, e, f, d)))
                   a: {
                       d = void 0 === d ? null : d;
                       h = e.document;
                       for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                           if (k = qg(g, e, f, d)) {
                               h = k;
                               break a
                           }
                       h = null
                   }
               d = h || null
           } else
               d = null;
           if (d)
               return d
       }
       return null
   }
   ;
   qg = function(a, b, c, d) {
       d = void 0 === d ? null : d;
       if ("fixed" !== sg(a, "position"))
           return null;
       var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.tg(_.ug, a).width && 1 >= _.tg(_.ug, a).height ? !0 : !1;
       d && d.j("ach_evt", {
           url: b.location.href,
           tn: a.tagName,
           id: a.getAttribute("id"),
           cls: a.getAttribute("class"),
           ign: e,
           pw: b.innerWidth,
           ph: b.innerHeight,
           x: c.x,
           y: c.y
       }, !0, 1);
       return e ? null : a
   }
   ;
   vg = function(a, b) {
       b = void 0 === b ? [] : b;
       var c = Date.now();
       return _.ig(b, function(d) {
           return c - d < 1E3 * a
       })
   }
   ;
   xg = function(a, b) {
       try {
           var c = a.getItem("__lsv__");
           if (!c)
               return [];
           try {
               var d = JSON.parse(c)
           } catch (e) {}
           if (!Array.isArray(d) || _.wg(d, function(e) {
               return !_.t(Number, "isInteger").call(Number, e)
           }))
               return a.removeItem("__lsv__"),
               [];
           d = vg(b, d);
           d.length || null == a || a.removeItem("__lsv__");
           return d
       } catch (e) {
           return null
       }
   }
   ;
   yg = function(a, b) {
       .001 > re() && ue({
           c: a,
           s: b
       }, "gpt_whirs")
   }
   ;
   zg = function(a) {
       var b = a.split("/");
       return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
   }
   ;
   _.Cg = function(a) {
       _.F(Ag).j = !0;
       return Bg[a]
   }
   ;
   Eg = function() {
       var a = Dg();
       (0,
       B.Rd)(!_.F(Ag).j);
       _.t(Object, "assign").call(Object, Bg, a._vars_);
       a._vars_ = Bg
   }
   ;
   Gg = function(a) {
       var b = _.D(Fg);
       if (a.length <= b)
           return {
               url: a,
               od: 0
           };
       var c = a;
       c.length > b && (c = c.substring(0, b - 8),
       c = c.replace(/%\w?$/, ""),
       c = c.replace(/&[^=]*=?$/, ""),
       c += "&trunc=1");
       b = c;
       return {
           url: b,
           od: a.length - b.length + 8
       }
   }
   ;
   Hg = function(a, b) {
       b = void 0 === b ? window : b;
       return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a),
       (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
   }
   ;
   Ig = function(a, b) {
       b = void 0 === b ? window : b;
       return !!Hg(a, b)
   }
   ;
   Mg = function(a) {
       var b = new Jg;
       b = Hc(b, 1, Date.now(), 0);
       b = Hc(b, 2, a.pvsid, 0);
       b = Hc(b, 3, a.Ga, "");
       var c = De();
       b = Kg(b, 4, c);
       b = Hc(b, 5, a.Ve, 0);
       a = Hc(b, 12, a.ve, "");
       var d;
       if (b = null == (d = u.globalThis.performance) ? void 0 : d.memory) {
           d = new Lg;
           try {
               Hc(d, 1, b.jsHeapSizeLimit, 0)
           } catch (e) {}
           try {
               Hc(d, 2, b.totalJSHeapSize, 0)
           } catch (e) {}
           try {
               Hc(d, 3, b.usedJSHeapSize, 0)
           } catch (e) {}
       } else
           d = void 0;
       d && Zc(a, 10, d);
       return a
   }
   ;
   Rg = function(a, b) {
       var c = Ng();
       if (a.Lb) {
           var d = a.eb;
           a = Mg(a);
           var e = new Og;
           b = Hc(e, 1, b, !1);
           c = Hc(b, 2, c, 0);
           c = Pg(a, 6, Qg, c);
           Wd(d, c)
       }
   }
   ;
   Tg = function(a, b) {
       if (!document.getElementById("gatc:host:script")) {
           var c = document.createElement("script");
           c.id = "gatc:host:script";
           Ua(c, a.ce.Ge);
           a.Fd.appendChild(c)
       }
       a = window.gatc_host;
       Sg(a) ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
   }
   ;
   Yg = function(a, b) {
       b = void 0 === b ? Ug : b;
       var c = function(e) {
           "string" === typeof e && (e = Vg.j(e),
           a(e))
       }
         , d = new Wg;
       Tg(b, function(e) {
           if (Sg(e)) {
               var f = new Xg;
               Hc(f, 1, Vg.m, 0);
               e.openConsoleTab(f.aa(), c, function(g) {
                   if (!(d.j instanceof MessagePort)) {
                       var h = d.j;
                       d.j = g;
                       g = _.x(h);
                       for (h = g.next(); !h.done; h = g.next())
                           (h = h.value) && d.send(h)
                   }
               })
           }
       });
       return d
   }
   ;
   $g = function(a, b) {
       Zg.has(a);
       Zg.set(a, b)
   }
   ;
   Dg = function() {
       var a;
       return null != (a = _.q.googletag) ? a : _.q.googletag = {
           cmd: []
       }
   }
   ;
   ah = function(a, b) {
       var c = Dg();
       c.hasOwnProperty(a) || (c[a] = b)
   }
   ;
   ch = function(a) {
       if (a = bh[a]) {
           var b, c, d;
           return null != (d = null == (c = (b = Dg())[a]) ? void 0 : c.call(b)) ? d : null
       }
       return null
   }
   ;
   ph = function(a) {
       var b = new dh;
       if (eh(a))
           return fh(b, 1, gh, a),
           b;
       if (hh(a))
           return fh(b, 2, gh, a),
           b;
       if (ih(a))
           return fh(b, 3, gh, a),
           b;
       if (jh(a))
           return fh(b, 4, gh, 2),
           b;
       if (kh(a))
           return fh(b, 4, gh, 1),
           b;
       if (lh(a))
           return fh(b, 7, gh, a.toString()),
           b;
       if (mh(a)) {
           var c = new nh;
           oh(c, a.map(function(h) {
               return ph(h)
           }));
           Pg(b, 5, gh, c);
           return b
       }
       c = new qh;
       var d = Ec(c, v(c, 1), 1, dh)
         , e = !1;
       if (a === Dg())
           w(c, 2, 1),
           e = !0;
       else if (void 0 !== a.constructor && Zg.has(a.constructor)) {
           var f = (0,
           B.J)(Zg.get(a.constructor));
           w(c, 2, f);
           e = !0;
           8 === f ? (f = a.getSlotId().getDomId(),
           Dh(c, Eh(new Fh, Gh().m[f]))) : 7 === f && (f = Gh().j,
           Dh(c, Hh(f)))
       }
       a = _.x(_.t(Object, "entries").call(Object, a));
       for (f = a.next(); !f.done; f = a.next()) {
           var g = _.x(f.value);
           f = g.next().value;
           g = g.next().value;
           e && lh(g) || d.set(f, ph(g))
       }
       Pg(b, 6, gh, c);
       return b
   }
   ;
   G = function(a, b, c, d) {
       d = void 0 === d ? !1 : d;
       _.Cg(148) && (Ih || (Ih = new Jh,
       Ih.initialize()),
       c = Kh(b, c));
       return function() {
           var e = Jd.apply(0, arguments)
             , f = _.Lh(a, b, c, d).apply(this, e);
           try {
               var g = e.length;
               if (a.Lb && a.pf) {
                   var h = a.eb
                     , k = Mg(a);
                   var l = Hc(k, 5, a.Ue, 0);
                   var m = new Mh;
                   var n = Hc(m, 1, b, 0);
                   var p = Hc(n, 2, g, 0);
                   var r = Pg(l, 9, Qg, p);
                   Wd(h, r)
               }
           } catch (A) {}
           return f
       }
   }
   ;
   _.Lh = function(a, b, c, d) {
       d = void 0 === d ? !1 : d;
       return function() {
           var e = Jd.apply(0, arguments)
             , f = void 0
             , g = !1
             , h = null
             , k = _.F(Nh);
           try {
               var l = _.E(Oh);
               l && k && (h = k.start(b.toString(), 3));
               f = c.apply(this, e);
               g = !0;
               l && k && k.end(h)
           } catch (m) {
               try {
                   if (g)
                       Ph.call(this, a, 110, m);
                   else if (Ph.call(this, a, b, m),
                   !d)
                       throw m;
               } catch (n) {
                   if ((e = h) && Qh && Rh() && (Qh.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"),
                   Qh.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")),
                   !g && !d)
                       throw m;
               }
           }
           return f
       }
   }
   ;
   _.Sh = function(a, b, c, d) {
       return _.Lh(a, b, c, void 0 === d ? !1 : d)()
   }
   ;
   Ph = function(a, b, c) {
       if (a.Yd) {
           c = c.error && c.meta && c.id ? c.error : c;
           var d = new Th
             , e = new Uh;
           try {
               var f = Ce(window);
               Hc(e, 1, f, 0)
           } catch (p) {}
           try {
               var g = De();
               Kg(e, 2, g)
           } catch (p) {}
           try {
               Hc(e, 3, window.document.URL, "")
           } catch (p) {}
           f = Zc(d, 2, e);
           g = new Vh;
           b = Hc(g, 1, b, 0);
           try {
               var h = eh(null == c ? void 0 : c.name) ? c.name : "Unknown error";
               Hc(b, 2, h, "")
           } catch (p) {}
           try {
               var k = eh(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
               Hc(b, 3, k, "")
           } catch (p) {}
           try {
               var l = eh(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
               l && Kg(b, 4, l.split(/\n\s*/))
           } catch (p) {}
           h = Zc(f, 1, b);
           k = new Wh;
           try {
               Hc(k, 1, a.bb || a.Ga, "")
           } catch (p) {}
           try {
               var m = Xh();
               Hc(k, 2, m, 0)
           } catch (p) {}
           try {
               var n = [].concat(_.Ud(_.t(Yh, "keys").call(Yh)));
               Kg(k, 3, n)
           } catch (p) {}
           Pg(h, 4, Zh, k);
           Hc(h, 5, a.ud, 0);
           Vd(a.eb, h)
       }
   }
   ;
   ai = function(a, b) {
       var c, d;
       return null != (d = null == (c = _.t(a, "find").call(a, function(e) {
           e = (0,
           B.J)(Pc(e, $h, 1));
           return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
       })) ? void 0 : Nc(c, $h, 2)) ? d : null
   }
   ;
   ei = function(a, b, c) {
       return "number" === typeof b && "number" === typeof c && Nc(a, bi, 6).length ? ai(Nc(a, bi, 6), ci(di(new $h, b), c)) : Nc(a, $h, 5)
   }
   ;
   gi = function(a) {
       var b = void 0 === b ? window : b;
       var c = null;
       b.top === b && (b = fi(!1, b),
       c = ei(a, b.width, b.height));
       null != c || (c = ei(a));
       return null == c ? [] : c.map(function(d) {
           return H(d, 3) ? "fluid" : [(0,
           B.qa)(d.getWidth()), (0,
           B.qa)(d.getHeight())]
       })
   }
   ;
   ii = function(a) {
       if (!gi(a).length && hi(a, 16))
           return "1x1";
       var b = []
         , c = !1;
       a = _.x(gi(a));
       for (var d = a.next(); !d.done; d = a.next())
           d = d.value,
           Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
       c && b.unshift("320x50");
       return b.join("|")
   }
   ;
   ki = function(a, b) {
       b = void 0 === b ? null : b;
       var c = [];
       a && (c.push(a.getAdUnitPath()),
       c.push(ii(a)),
       c.push(a.getDomId()));
       if (b) {
           a = [];
           for (var d = 0; b && 25 > d; b = b.parentNode,
           ++d)
               9 === b.nodeType ? a.push("") : a.push(b.id);
           (b = a.join()) && c.push(b)
       }
       return c.length ? ji(c.join(":")).toString() : "0"
   }
   ;
   li = function(a) {
       return 0 !== a && 1 !== a
   }
   ;
   mi = function(a, b) {
       var c;
       return !(null != (c = H(b, 22)) ? !c : !H(a, 15))
   }
   ;
   oi = function(a) {
       var b = a.document;
       return ni(a) ? b.URL : b.referrer
   }
   ;
   ri = function(a) {
       try {
           return pi(a, window.top)
       } catch (b) {
           return new _.qi(-12245933,-12245933)
       }
   }
   ;
   ui = function(a) {
       if (!a)
           return null;
       var b, c;
       a.getBoundingClientRect ? (a = _.tg(si, a),
       a = new _.ti(a.right - a.left,a.bottom - a.top)) : a = null;
       return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
   }
   ;
   wi = function(a, b) {
       for (var c = {}, d = _.x(_.t(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
           e = e.value;
           var f = vc(b[e])
             , g = _.F(vi)
             , h = g.j.get(e);
           null == h ? h = ++_.F(Nh).D : g.j.delete(e);
           w(f, 20, h);
           c[e] = f
       }
       return {
           W: vc(a),
           R: c
       }
   }
   ;
   yi = function() {
       for (var a = "", b = _.x(xi()), c = b.next(); !c.done; c = b.next())
           c = c.value,
           15 >= c && (a += "0"),
           a += c.toString(16);
       return a
   }
   ;
   xi = function() {
       var a;
       if ("function" === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues))
           return a = new Uint8Array(16),
           window.crypto.getRandomValues(a),
           a;
       a = window;
       var b;
       if ("function" === typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues))
           return b = new Uint8Array(16),
           a.msCrypto.getRandomValues(b),
           b;
       a = Array(16);
       for (b = 0; b < a.length; b++)
           a[b] = Math.floor(255 * Math.random());
       return a
   }
   ;
   Fi = function(a, b, c, d) {
       var e = zi(b, a) || Ai(b, a);
       if (!e)
           return null;
       var f = ri(e)
         , g = e === Ai(b, a)
         , h = Bi(function() {
           var p = g ? Ai(b, a) : e;
           return p && Ci(p, window)
       })
         , k = function(p) {
           var r;
           return null == (r = h()) ? void 0 : r.getPropertyValue(p)
       };
       c = gi(c)[0];
       var l = !1;
       Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
       l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
       if (g) {
           var m;
           f.y += Math.round(Math.min(null != (m = Di(k("padding-top"))) ? m : 0, e.clientHeight));
           if (!l) {
               d = e.clientWidth;
               var n;
               f.x += Math.round(Math.min(null != (n = Di(k("padding-left"))) ? n : 0, d))
           }
       }
       return f && Ei(e) ? f : new _.qi(-12245933,-12245933)
   }
   ;
   Gi = function(a, b, c, d) {
       var e = Ai(a, c)
         , f = "none" === (null == e ? void 0 : e.style.display);
       f && (e.style.display = "block");
       a = Fi(c, a, b, d);
       f && (e.style.display = "none");
       return a
   }
   ;
   Hi = function(a) {
       return "google_ads_iframe_" + a.toString()
   }
   ;
   Ii = function(a) {
       return Hi(a) + "__container__"
   }
   ;
   zi = function(a, b) {
       var c;
       return (null == (c = Ai(a, b)) ? void 0 : c.querySelector('[id="' + Ii(a) + '"]')) || null
   }
   ;
   Ji = function(a, b) {
       var c, d;
       return null != (d = null == (c = zi(a, b)) ? void 0 : c.querySelector('iframe[id="' + Hi(a) + '"]')) ? d : null
   }
   ;
   Li = function(a) {
       var b = window;
       if (!_.E(Ki))
           try {
               var c, d;
               null == (c = b.performance) || null == (d = c.mark) || d.call(c, a)
           } catch (e) {}
   }
   ;
   Ai = function(a, b) {
       b = void 0 === b ? document : b;
       return Gh().D.get(a) || b.getElementById(a.getDomId())
   }
   ;
   Mi = function(a) {
       return Math.round(Number(Di(a)))
   }
   ;
   Oi = function(a, b, c) {
       for (var d = 100; a && a !== b && --d; )
           _.Ni(a, c),
           a = a.parentElement
   }
   ;
   Pi = function(a, b, c, d, e) {
       _.Ni(a, {
           "margin-left": "0px",
           "margin-right": "0px"
       });
       var f = {}
         , g = "rtl" === d.direction
         , h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
       d = function() {
           var k = a.getBoundingClientRect().left;
           return g ? h - k : k - h
       }
       ;
       b = d();
       return 0 !== b ? (c = function(k) {
           g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
       }
       ,
       c(-b),
       _.Ni(a, f),
       d = d(),
       0 !== d && b !== d && (c(b / (d - b) * b),
       _.Ni(a, f)),
       !0) : !1
   }
   ;
   Ri = function(a, b, c, d, e, f, g, h, k) {
       var l = ii(d);
       _.q.setTimeout(_.Lh(a, 459, function() {
           return void Qi(a, b, c, e, f, g, l, h, k)
       }), 500)
   }
   ;
   Qi = function(a, b, c, d, e, f, g, h, k) {
       if (_.q.IntersectionObserver) {
           var l = null, m, n = null != (m = Ji(c, b)) ? m : Ai(c, b);
           m = _.Lh(a, 459, function(p) {
               if (p = p && p[0]) {
                   var r = p.boundingClientRect
                     , A = window.innerWidth
                     , z = Math.round(r.left)
                     , J = Math.round(r.right)
                     , N = 0 > z + 2
                     , P = 0 < J - (A + 2);
                   if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || N || P)
                       Si(h, function(T) {
                           if (N || P) {
                               var W = new Ti;
                               W.set(8);
                               Ui(n) && W.set(10);
                               W = Vi(W)
                           } else
                               W = Wi(b, c);
                           var aa = Xi(c, n, f)
                             , X = aa.Pe;
                           aa = aa.Qe;
                           Yi(T, a);
                           I(T, "qid", k);
                           I(T, "iu", c.getAdUnitPath());
                           I(T, "e", String(W));
                           N && I(T, "ofl", String(z));
                           P && I(T, "ofr", String(J - A));
                           I(T, "ret", e + "x" + f);
                           I(T, "req", g);
                           I(T, "bm", String(d));
                           I(T, "efh", Number(X));
                           I(T, "stk", Number(aa));
                           I(T, "ifi", Zi(window))
                       }, _.D($i)),
                       l && l.unobserve((0,
                       B.J)(n))
               }
           });
           n && (l = new _.q.IntersectionObserver(m,{
               threshold: [1]
           }),
           (0,
           B.J)(l).observe(n))
       }
   }
   ;
   Wi = function(a, b) {
       var c = Ji(b, a) || Ai(b, a)
         , d = new Ti;
       try {
           var e = c.getBoundingClientRect()
             , f = e.left
             , g = e.top
             , h = e.width
             , k = e.height
             , l = Ai(b, a)
             , m = (0,
           B.J)(Ci(l, window));
           if ("hidden" === m.visibility || "none" === m.display)
               return Vi(d);
           var n = Mi(m.getPropertyValue("border-top-width") || 0) + 1;
           b = f + h;
           k = g + k;
           var p = a.elementsFromPoint(f + n + 2, g + n);
           var r = a.elementsFromPoint(b - n - 2, g + n);
           var A = a.elementsFromPoint(b - n - 2, k - n);
           var z = a.elementsFromPoint(f + n + 2, k - n);
           var J = a.elementsFromPoint(b / 2, k - n)
       } catch (P) {
           return d.set(1),
           Vi(d)
       }
       if (!(p && p.length && r && r.length && A && A.length && z && z.length && J && J.length))
           return d.set(7),
           Vi(d);
       a = function(P, T) {
           for (var W = !1, aa = 0; aa < P.length; aa++) {
               var X = P[aa];
               if (W) {
                   var ja = Ci(X, window);
                   if ("hidden" !== ja.visibility && !aj(X) && !N(c, X)) {
                       d.set(T);
                       "absolute" === ja.position && d.set(11);
                       break
                   }
               } else
                   c === X && (W = !0)
           }
       }
       ;
       bj(c) && d.set(9);
       var N = function(P, T) {
           return cj(P, T) || cj(T, P)
       };
       f = p[0];
       c === f || N(c, f) || aj(f) || d.set(2);
       f = r[0];
       c === f || N(c, f) || aj(f) || d.set(3);
       f = A[0];
       c === f || N(c, f) || aj(f) || d.set(4);
       f = z[0];
       c === f || N(c, f) || aj(f) || d.set(5);
       if (aj(c))
           return Vi(d);
       a(p, 12);
       a(r, 13);
       a(A, 14);
       a(z, 15);
       a(J, 6);
       return Vi(d)
   }
   ;
   Ui = function(a) {
       var b = !1
         , c = !1;
       return dj(a, function(d) {
           c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
           return (b = b || "flex" === d.display) && c
       })
   }
   ;
   Xi = function(a, b, c) {
       var d = (a = Ai(a)) && Ci(a, window)
         , e = d ? "absolute" !== d.position : !0
         , f = !1
         , g = a && a.parentElement
         , h = !1;
       ej(b, function(k) {
           var l = k.style;
           if (e)
               if (h || (h = k === g))
                   e = fj(k, _.q, -1, -1);
               else {
                   l = l && l.height;
                   var m = (l && _.t(l, "endsWith").call(l, "px") ? Mi(l) : 0) >= c;
                   !l || m || "string" === typeof l && _.t(gj, "includes").call(gj, l) || (e = !1)
               }
           f || (k = Ci(k, _.q),
           "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
           return !(f && !e)
       }, 100);
       return {
           Pe: e,
           Qe: f
       }
   }
   ;
   fj = function(a, b, c, d) {
       var e = a.style;
       return (null == e ? 0 : e.height) && !_.t(gj, "includes").call(gj, e.height) || (null == e ? 0 : e.maxHeight) && !_.t(hj, "includes").call(hj, e.maxHeight) || jj(a, b.document, function(f) {
           var g = f.style.height;
           f = f.style.getPropertyValue("max-height");
           return !!g && !_.t(gj, "includes").call(gj, g) || !!f && !_.t(hj, "includes").call(hj, f)
       }, c, d) ? !1 : !0
   }
   ;
   jj = function(a, b, c, d, e) {
       b = b.styleSheets;
       if (!b)
           return !1;
       var f = a.matches || a.msMatchesSelector;
       d = -1 === d ? Infinity : d;
       e = -1 === e ? Infinity : e;
       for (var g = 0; g < Math.min(b.length, d); ++g) {
           var h = null;
           try {
               var k = b[g]
                 , l = null;
               try {
                   l = k.cssRules || k.rules
               } catch (T) {
                   if (15 == T.code)
                       throw T.styleSheet = k,
                       T;
               }
               h = l
           } catch (T) {
               continue
           }
           l = void 0;
           if (null != (l = h) && l.length)
               for (l = 0; l < Math.min(h.length, e); ++l)
                   try {
                       var m = h[l], n, p = c;
                       if (!(n = f.call(a, m.selectorText) && p(m)))
                           a: {
                               var r = void 0;
                               p = a;
                               var A = c
                                 , z = e
                                 , J = null != (r = m.cssRules) ? r : [];
                               for (r = 0; r < Math.min(J.length, z); r++) {
                                   var N = J[r]
                                     , P = A;
                                   if (f.call(p, N.selectorText) && P(N)) {
                                       n = !0;
                                       break a
                                   }
                               }
                               n = !1
                           }
                       if (n)
                           return !0
                   } catch (T) {}
       }
       return !1
   }
   ;
   aj = function(a) {
       return dj(a, function(b) {
           return "fixed" === b.position || "sticky" === b.position
       })
   }
   ;
   bj = function(a) {
       return dj(a, function(b) {
           var c;
           return (C = ["left", "right"],
           _.t(C, "includes")).call(C, null != (c = b["float"]) ? c : b.cssFloat)
       })
   }
   ;
   kj = function(a) {
       return "number" === typeof a || "string" === typeof a
   }
   ;
   lj = function(a, b) {
       /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Kd(b),
       a.src = Ta(b).toString())
   }
   ;
   nj = function(a, b, c) {
       c = void 0 === c ? mj : c;
       a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
           value: !0
       }),
       "complete" === a.document.readyState ? c(a, b) : _.Za(a, "load", function() {
           return void c(a, b)
       }))
   }
   ;
   oj = function(a) {
       try {
           var b, c;
           return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
       } catch (d) {}
       return null
   }
   ;
   pj = function(a) {
       var b = RegExp("^https?://[^/#?]+/?$");
       return !!a && !b.test(a)
   }
   ;
   qj = function(a) {
       if (a === a.top || Gd(a.top))
           return u.Promise.resolve({
               status: 4
           });
       var b = oj(a);
       if (!b)
           return u.Promise.resolve({
               status: 2
           });
       if (a.parent === a.top && pj(a.document.referrer))
           return u.Promise.resolve({
               status: 3
           });
       var c = new _.lg;
       a = new MessageChannel;
       a.port1.onmessage = function(d) {
           "__goog_top_url_resp" === d.data.msgType && c.resolve({
               Wb: d.data.topUrl,
               status: d.data.topUrl ? 0 : 1
           })
       }
       ;
       b.postMessage({
           msgType: "__goog_top_url_req"
       }, "*", [a.port2]);
       return c.promise
   }
   ;
   uj = function(a) {
       var b = void 0 === b ? rj : b;
       var c = sj(a);
       return c.messageChannelSendRequestFn ? u.Promise.resolve(c.messageChannelSendRequestFn) : new u.Promise(function(d) {
           function e(k) {
               return h.j(k).then(function(l) {
                   return l.data
               })
           }
           var f = _.ee("IFRAME");
           f.style.display = "none";
           f.name = "goog_topics_frame";
           f.src = Ta(b).toString();
           var g = (new URL(b.toString())).origin
             , h = tj({
               destination: a,
               cc: f,
               origin: g,
               La: "goog:gRpYw:doubleclick"
           });
           h.j("goog:topics:frame:handshake:ack").then(function(k) {
               "goog:topics:frame:handshake:ack" === k.data && d(e)
           });
           c.messageChannelSendRequestFn = e;
           a.document.documentElement.appendChild(f)
       }
       )
   }
   ;
   yj = function(a, b, c, d, e, f) {
       var g = vj(f)
         , h = g.Ub
         , k = g.Tb;
       b = sj(b);
       b.getTopicsPromise || (c = {
           message: "goog:topics:frame:get:topics",
           callApi: c,
           sendGen204: d
       },
       d && (c.pvsid = Ce(window)),
       a = a(c).then(function(l) {
           var m = k;
           if (l instanceof Uint8Array)
               m || (m = !(h instanceof Uint8Array && ra(l, h)));
           else if (be()(l))
               m || (m = l !== h);
           else
               return l = Error(JSON.stringify(l)),
               Ph(e.context, 989, l),
               7;
           if (m && f)
               try {
                   var n = new wj;
                   var p = w(n, 2, _.Fe());
                   l instanceof Uint8Array ? fh(p, 1, xj, l) : fh(p, 3, xj, l);
                   f.setItem("goog:cached:topics", p.aa())
               } catch (r) {}
           return l
       }),
       b.getTopicsPromise = (0,
       B.qa)(a));
       return h && !k ? u.Promise.resolve(h) : b.getTopicsPromise
   }
   ;
   vj = function(a) {
       if (!a)
           return {
               Ub: null,
               Tb: !0
           };
       try {
           var b = a.getItem("goog:cached:topics");
           if (!b)
               return {
                   Ub: null,
                   Tb: !0
               };
           var c = he(wj, b)
             , d = Jc(c, xj);
           switch (d) {
           case 0:
               var e = null;
               break;
           case 1:
               var f = Kc(c, xj, 1);
               a = void 0;
               a = void 0 === a ? "" : a;
               var g = zj(c, f);
               var h = null == g ? a ? new Tb(a,xb) : Vb() : g;
               var k = Aj(h);
               e = k ? new Uint8Array(k) : Bj || (Bj = new Uint8Array(0));
               break;
           case 3:
               e = oe(c, Kc(c, xj, 3), 0);
               break;
           default:
               Oa(d)
           }
           return {
               Ub: e,
               Tb: Cj(c, 2) + 6048E5 < _.Fe()
           }
       } catch (l) {
           return {
               Ub: null,
               Tb: !0
           }
       }
   }
   ;
   sj = function(a) {
       var b;
       return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
   }
   ;
   Fj = function(a) {
       if (Fa()) {
           var b = a.document.documentElement.lang;
           Dj(a) ? Ej(Ce(a), !0, "", b) : (new MutationObserver(function(c, d) {
               Dj(a) && (Ej(Ce(a), !1, b, a.document.documentElement.lang),
               d.disconnect())
           }
           )).observe(a.document.documentElement, {
               attributeFilter: ["class"]
           })
       }
   }
   ;
   Dj = function(a) {
       return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
   }
   ;
   Ej = function(a, b, c, d) {
       ue({
           ptt: "17",
           pvsid: "" + a,
           ibatl: String(b),
           pl: c,
           nl: d
       }, "translate-event")
   }
   ;
   Gj = function(a) {
       var b = "";
       Fd(function(c) {
           if (c === c.top)
               return !0;
           var d;
           if (null == (d = c.document) ? 0 : d.referrer)
               b = c.document.referrer;
           return !1
       }, !1, !1, a);
       return b
   }
   ;
   Ij = function(a) {
       a = (Gd(a.top) ? a.top : a).AMP;
       return "object" === typeof a && !!Hj(a, function(b, c) {
           return !/^inabox/i.test(c)
       })
   }
   ;
   Lj = function(a, b) {
       var c = Jj.get(a);
       c || (b = c = b(),
       Kj.set(b, a),
       Jj.set(a, b));
       return c
   }
   ;
   Nj = function(a, b) {
       return (0,
       B.qa)(Lj(b, function() {
           return new Mj(a,b)
       }))
   }
   ;
   K = function(a) {
       return function() {
           return new Oj(a,[].concat(_.Ud(Jd.apply(0, arguments))))
       }
   }
   ;
   Pj = function(a) {
       return "[" + a.map(function(b) {
           return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Pj(b) : String(b)
       }).join(", ") + "]"
   }
   ;
   Qj = function(a, b) {
       b = Pj(b);
       b = b.substring(1, b.length - 1);
       return new Oj(96,[a, b])
   }
   ;
   Rj = function(a) {
       return (C = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "),
       _.t(C, "includes")).call(C, a) ? a : null
   }
   ;
   Tj = function(a, b, c) {
       return Lj(c, function() {
           return new Sj(a,b,c)
       })
   }
   ;
   Vj = function(a, b, c) {
       return Lj(c, function() {
           return new Uj(a,b,c)
       })
   }
   ;
   bk = function(a) {
       var b = window;
       "complete" === _.q.document.readyState ? _.Sh(a, 94, function() {
           Dg()._pubconsole_disable_ || null !== Wj(b) && Xj(a, b)
       }) : _.Za(_.q, "load", _.Lh(a, 94, function() {
           Dg()._pubconsole_disable_ || null !== Wj(b) && Xj(a, b)
       }));
       ah("disablePublisherConsole", G(a, 93, Yj));
       ah("onPubConsoleJsLoad", G(a, 731, Zj));
       ah("openConsole", G(a, 732, function(c) {
           ak(a, void 0 === c ? "" : c)
       }))
   }
   ;
   Xj = function(a, b) {
       b = void 0 === b ? _.q : b;
       if (!ck) {
           var c = new dk("gpt_pubconsole_loaded");
           Yi(c, a);
           I(c, "param", String(Wj(b)));
           I(c, "api", String(ek));
           fk(c, 1);
           gk(b.document, Qd(hk));
           ck = !0
       }
   }
   ;
   Wj = function(a) {
       var b = oi(a), c;
       return null != (c = (C = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"],
       _.t(C, "find")).call(C, function(d) {
           return null !== ik(b, d)
       })) ? c : null
   }
   ;
   Yj = function() {
       Dg()._pubconsole_disable_ = !0
   }
   ;
   Zj = function() {
       Ik && ((0,
       B.J)(Dg().console).openConsole(Jk),
       Jk = void 0,
       Ik = !1)
   }
   ;
   ak = function(a, b) {
       b = void 0 === b ? "" : b;
       ek = !0;
       var c;
       (null == (c = Dg()) ? 0 : c.console) ? (0,
       B.J)(Dg().console).openConsole(b) : (b && (Jk = b),
       Ik = !0,
       Xj(a))
   }
   ;
   Sk = function(a, b, c, d, e) {
       if ("string" !== typeof c || Kk(c))
           L(e, Qj("Slot.setTargeting", [c, d]), a);
       else {
           var f = [];
           Array.isArray(d) ? f = d : pa(d) ? f = _.t(Array, "from").call(Array, d) : d && (f = [d]);
           f = f.map(String);
           (d = (C = Lk(b),
           _.t(C, "find")).call(C, function(g) {
               return Mk(g) === c
           })) ? Nk(d, f) : (d = Nk(Ok(new Pk, c), f),
           Qk(b, 9, Pk, d));
           e.info(Rk(c, f.join(), (0,
           B.J)(b.getAdUnitPath())), a)
       }
   }
   ;
   Tk = function(a, b, c, d) {
       if (null != c && "object" === typeof c)
           for (var e = _.x(_.t(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next())
               f = f.value,
               Sk(a, b, f, c[f], d);
       else
           d.error(Qj("Slot.updateTargetingFromMap", [c]), a)
   }
   ;
   Vk = function(a, b, c) {
       return Lj(c, function() {
           return new Uk(a,b,c,c.j)
       })
   }
   ;
   Wk = function(a) {
       return _.t(Object, "assign").call(Object, {}, a, _.t(Object, "fromEntries").call(Object, _.t(Object, "entries").call(Object, a).map(function(b) {
           b = _.x(b);
           var c = b.next().value;
           return [b.next().value, c]
       })))
   }
   ;
   Zk = function() {
       var a = {}
         , b = Wk(Xk);
       a.OutOfPageFormat = b;
       b = Wk(Yk);
       a.TrafficSource = b;
       return a
   }
   ;
   bl = function() {
       for (var a = $k(al) || "0-0-0", b = a.split("-").map(function(e) {
           return Number(e)
       }), c = ["1", "0", "38"].map(function(e) {
           return Number(e)
       }), d = 0; d < b.length; d++) {
           if (b[d] > c[d])
               return a;
           if (b[d] < c[d])
               break
       }
       return "1-0-38"
   }
   ;
   gl = function() {
       if (cl)
           return cl;
       for (var a = dl(el), b = [], c = 0; c < a.length; c += 2)
           fl(a[c], a[c + 1], b);
       return cl = b.join("&")
   }
   ;
   ml = function(a, b) {
       if (!b || !_.ha(b))
           return null;
       var c = !1
         , d = new hl;
       _.il(b, function(e, f) {
           var g = !1;
           switch (f) {
           case "allowOverlayExpansion":
               "boolean" === typeof e ? w(d, 1, b.allowOverlayExpansion) : c = g = !0;
               break;
           case "allowPushExpansion":
               "boolean" === typeof e ? w(d, 2, b.allowPushExpansion) : c = g = !0;
               break;
           case "sandbox":
               !0 === e ? w(d, 3, b.sandbox) : c = g = !0;
               break;
           case "useUniqueDomain":
               jl();
               return;
           default:
               g = !0
           }
           g && a.error(kl("setSafeFrameConfig", ll(b), f, ll(e)))
       });
       return c ? null : d
   }
   ;
   ol = function(a) {
       var b = new hl;
       a = _.x(a);
       for (var c = a.next(); !c.done; c = a.next())
           if (c = c.value)
               nl(c, 1) && w(b, 1, H(c, 1)),
               nl(c, 2) && w(b, 2, H(c, 2)),
               nl(c, 3) && w(b, 3, H(c, 3)),
               nl(c, 4) && w(b, 4, H(c, 4));
       return b
   }
   ;
   ql = function(a) {
       return Array.isArray(a) && 2 === a.length ? a.every(pl) : "fluid" === a
   }
   ;
   rl = function(a) {
       return Array.isArray(a) && 2 === a.length && pl(a[0]) && pl(a[1])
   }
   ;
   tl = function(a) {
       return Array.isArray(a) ? ci(di(new $h, (0,
       B.qa)(a[0])), (0,
       B.qa)(a[1])) : sl()
   }
   ;
   vl = function(a) {
       var b = [];
       if (ul(a))
           b.push(tl((0,
           B.J)(a)));
       else if (Array.isArray(a)) {
           a = _.x(a);
           for (var c = a.next(); !c.done; c = a.next())
               c = c.value,
               ul(c) ? b.push(tl((0,
               B.J)(c))) : ra(c, ["fluid"]) && b.push(sl())
       }
       return b
   }
   ;
   wl = function(a) {
       if (!Array.isArray(a) || 2 !== a.length)
           return null;
       var b = a[0];
       a = a[1];
       if ("number" === typeof b && 0 <= b)
           b = Math.floor(b);
       else if (null !== b)
           return null;
       if ("number" === typeof a && 0 <= a)
           a = Math.floor(a);
       else if (null !== a)
           return null;
       return ci(di(new $h, b), a)
   }
   ;
   yl = function(a) {
       var b = void 0 === b ? window : b;
       if (!a)
           return {
               Nc: [],
               Ra: null
           };
       if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
           var c = vl(a.fixed), d;
           if (d = wl(a.max)) {
               var e = a.min ? wl(a.min) : new $h;
               null != (null == e ? void 0 : e.getWidth()) || null != e && di(e, 0);
               null != (null == e ? void 0 : e.getHeight()) || null != e && ci(e, 0);
               d = {
                   max: d,
                   min: e
               }
           } else
               d = {
                   max: null,
                   min: null
               };
           e = d;
           d = e.max;
           e = e.min;
           if (a.max && !d)
               throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
           if (a.min && !e)
               throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
           var f;
           if (null != (f = a.fixed) && f.length || d) {
               b = (0,
               B.J)(d);
               if (0 === b.getWidth() || 0 === b.getHeight())
                   throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
               if (e) {
                   f = (0,
                   B.J)(e);
                   var g = f.getWidth()
                     , h = b.getWidth();
                   if (null != g && null != h && g > h)
                       throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                   f = f.getHeight();
                   b = b.getHeight();
                   if (null != f && null != b && f > b)
                       throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
               }
           } else
               null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a));
           d && e ? (a = new xl,
           a = Zc(a, 1, d),
           a = Zc(a, 2, e)) : a = null;
           return {
               Nc: c,
               Ra: a
           }
       }
       a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
       return {
           Nc: vl(a),
           Ra: null
       }
   }
   ;
   ul = function(a) {
       return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
   }
   ;
   Al = function(a) {
       if (!Array.isArray(a) || 2 !== a.length)
           throw new zl("Each mapping entry must be an array of size 2");
       var b = a[0];
       if (!rl(b))
           throw new zl("Size must be an array of two non-negative integers");
       b = ci(di(new $h, b[0]), b[1]);
       if (Array.isArray(a[1]) && 0 === a[1].length)
           a = [];
       else if (a = vl(a[1]),
       0 === a.length)
           throw new zl("At least one slot size must be present");
       var c = new bi;
       b = Zc(c, 1, b);
       return Yc(b, 2, a)
   }
   ;
   Cl = function(a, b, c) {
       return Lj(c, function() {
           return new Bl(a,b,c)
       })
   }
   ;
   El = function(a, b, c, d) {
       for (var e = _.x(_.t(Object, "entries").call(Object, Dl)), f = e.next(); !f.done; f = e.next()) {
           var g = _.x(f.value);
           f = g.next().value;
           g = g.next().value;
           b & f && L(a, g(c, d))
       }
   }
   ;
   Hl = function(a) {
       return a ? _.E(Fl) ? 604800 : _.D(Gl) || 3600 : -1
   }
   ;
   Ol = function(a, b, c) {
       c = void 0 === c ? null : c;
       b = Hl(void 0 === b ? !1 : b);
       if (!(0 < b) || c && ve(c)) {
           var d = 0;
           try {
               d |= a != a.top ? 512 : 0,
               d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
           } catch (g) {
               d |= 32
           }
           c = c ? we(c) : null;
           var e = 0;
           try {
               e |= Il(a, 2500);
               if (_.E(Jl)) {
                   var f = _.Kl(a).clientHeight;
                   e |= f ? 320 > f ? 2097152 : 0 : 1073741824
               }
               e |= Ll(a);
               0 < b && !_.Ml(_.Nl(c, b)) && (e |= 134217728)
           } catch (g) {
               e |= 32
           }
           a = d | e
       } else
           a = 4194304;
       return a
   }
   ;
   Rl = function(a, b, c, d, e, f) {
       d = Pl(d);
       if (5 !== d)
           return !1;
       var g = Ol(e, "22639388115" !== zg(c.getAdUnitPath()), f);
       _.E(Fl) && (g &= -134217729);
       g && (Si("gpt_int_ns", function(h) {
           I(h, "nsr", g);
           Yi(h, a)
       }, _.D(Ql)),
       El(b, g, d, c.getAdUnitPath()));
       return !!g
   }
   ;
   Sl = function(a) {
       switch (a) {
       case 4:
           return 11;
       case 2:
           return 2;
       case 3:
           return 1;
       case 5:
           return 8;
       default:
           return null
       }
   }
   ;
   $l = function(a) {
       a = Sl(a);
       if (!a)
           return null;
       var b = 0;
       if (11 !== a) {
           b |= _.q != _.q.top ? 512 : 0;
           var c = _.Tl(_.q);
           c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
           c && (b |= 64);
           if (b)
               return b
       }
       if (2 === a || 1 === a) {
           var d = {
               la: _.q,
               Jd: Ul
           };
           0 === (0,
           _.Vl)() && (d.Jd = 3E3,
           d.Kd = 650);
           c = 0;
           try {
               var e = d.la;
               c |= e != e.top ? 512 : 0;
               var f = d.la;
               var g = Math.min(f.screen.width || 0, f.screen.height || 0);
               c |= g ? 320 > g ? 8192 : 0 : 2048;
               var h = d.la, k;
               if (k = h.navigator) {
                   var l = h.navigator.userAgent;
                   k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
               }
               c |= k ? 1048576 : 0;
               c = d.Kd ? c | (d.la.innerHeight >= d.Kd ? 0 : 1024) : c | (_.Wl(d.la) ? 0 : 8);
               c |= Il(d.la, d.Jd);
               c |= Ll(d.la)
           } catch (m) {
               c |= 32
           }
           switch (d.Kg) {
           case 2:
               e = d.la;
               g = d.Ha;
               g = void 0 === g ? null : g;
               f = Xl(e.innerWidth, 3, 0, Math.min(Math.round(e.innerWidth / 320 * 50), Yl) + 15, 3);
               null != rg(e, f, void 0 === g ? null : g) && (c |= 16777216);
               break;
           case 1:
               e = d.la,
               g = d.Ha,
               g = void 0 === g ? null : g,
               f = e.innerWidth,
               h = e.innerHeight,
               k = Math.min(Math.round(e.innerWidth / 320 * 50), Yl) + 15,
               l = Xl(f, 3, h - k, h, 3),
               25 < k && l.push({
                   x: f - 25,
                   y: h - 25
               }),
               null != rg(e, l, void 0 === g ? null : g) && (c |= 16777216)
           }
           if (e = d.Lg)
               e = d.la,
               d = d.Ha,
               d = void 0 === d ? null : d,
               d = void 0 === d ? null : d,
               g = e.innerWidth,
               f = e.innerHeight,
               h = _.D(Zl),
               g = Xl(g, 10, f - h, f, 10),
               e = null != rg(e, g, d);
           e && (c |= 16777216);
           b |= c
       } else
           8 === a ? b |= Ol(_.q) : 11 !== a && (b |= 32);
       b || (c = _.Tl(_.q),
       c.adCount = c.adCount || {},
       c.adCount[a] = c.adCount[a] + 1 || 1);
       return b
   }
   ;
   bm = function(a) {
       var b = new RegExp("(^|,|/)" + a + "($|,|/)");
       return [].concat(_.Ud(_.F(am).ba)).some(function(c) {
           return b.test(zg(c.getAdUnitPath()))
       })
   }
   ;
   dm = function() {
       var a, b, c;
       return "pagead2.googlesyndication.com" === (null != (c = cm.exec(null != (b = null == (a = _.Cg(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
   }
   ;
   em = function(a) {
       return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
   }
   ;
   fm = function(a, b) {
       var c = b.m;
       return a.map(function(d) {
           return _.t(c, "find").call(c, function(e) {
               return e.j === d
           })
       }).filter($d())
   }
   ;
   im = function(a, b, c, d, e) {
       var f = gm(a, b, d, e, void 0, !0)
         , g = f.slotId;
       f = f.Ja;
       if (!g || !f)
           return L(b, Qj("PubAdsService.definePassback", [d, e])),
           null;
       w(f, 17, !0);
       c.slotAdded(g, f);
       return {
           Pd: Vk(a, b, new hm(a,g,c)),
           Ja: f
       }
   }
   ;
   km = function(a, b, c) {
       return Lj(c, function() {
           return new jm(a,b,c)
       })
   }
   ;
   na = function(a, b) {
       a: {
           b = (0,
           B.qa)(b[0]);
           a = (0,
           B.qa)(a[0]);
           for (var c = la, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
               var f = c(b[e], a[e]);
               if (0 != f) {
                   b = f;
                   break a
               }
           }
           b = la(b.length, a.length)
       }
       return b
   }
   ;
   lm = function(a, b) {
       return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
   }
   ;
   mm = function(a, b) {
       var c, d;
       return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(ji(a))) ? d : 0
   }
   ;
   qm = function(a, b, c, d, e) {
       if (null != c && c.size) {
           var f, g;
           e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == b ? void 0 : b.adUnits) ? g : [];
           b = {};
           f = _.x(e);
           for (g = f.next(); !g.done; b = {
               Rb: b.Rb
           },
           g = f.next()) {
               e = g.value;
               g = e.code;
               var h = e.bids;
               e = void 0;
               if (g && null != (e = h) && e.length && (g = mm(g, c),
               b.Rb = g / 1E6,
               !(0 >= g))) {
                   var k = void 0;
                   e = {};
                   h = _.x(null != (k = h) ? k : []);
                   for (k = h.next(); !k.done; e = {
                       Sa: e.Sa,
                       Cc: e.Cc
                   },
                   k = h.next()) {
                       k = k.value;
                       e.Cc = "function" === typeof k.getFloor ? k.getFloor : void 0;
                       e.Sa = nm(om(new pm, 4), g);
                       k.getFloor = function(m, n) {
                           return function(p) {
                               4 === oe(m.Sa, 1, 0) && om(m.Sa, 1);
                               var r = {
                                   currency: "USD",
                                   floor: n.Rb
                               }, A, z = null == (A = m.Cc) ? void 0 : A.apply(a, [p]);
                               return null != z && z.floor ? (null == z ? 0 : z.currency) && "USD" !== z.currency ? (1 === oe(m.Sa, 1, 0) && (p = nm(om(m.Sa, 6), 1E6 * z.floor),
                               w(p, 3, z.currency)),
                               z) : (z.floor || 0) > n.Rb ? (1 === oe(m.Sa, 1, 0) && nm(om(m.Sa, 5), 1E6 * z.floor),
                               z) : r : r
                           }
                       }(e, b);
                       var l = void 0;
                       null == (l = d) || l.set(k.getFloor, e.Sa)
                   }
               }
           }
       }
   }
   ;
   zm = function(a, b, c, d, e, f) {
       var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids, l;
       if (null == (l = k) || !l.length) {
           var m;
           k = (null == (m = (0,
           B.J)(f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : m.bids) || []
       }
       b = k.filter(function(n) {
           return n.auctionId !== c && d.some(function(p) {
               return (C = rm(p, 2),
               _.t(C, "includes")).call(C, n.adId)
           })
       });
       b = _.x(b);
       for (f = b.next(); !f.done; f = b.next())
           f = f.value,
           g = sm(f, e, d),
           g = tm(a, um(w(vm(wm(new xm, f.bidder), 1), 6, !0), g)),
           "number" === typeof f.timeToRespond && ym(g, f.timeToRespond)
   }
   ;
   Am = function(a, b, c) {
       nl(a, 3) || (c === b.getAdUnitPath() ? w(a, 3, 1) : c === b.getDomId() && w(a, 3, 2))
   }
   ;
   Cm = function(a, b, c, d, e, f) {
       e = null == e ? void 0 : e.get(null != f ? f : function() {
           return null
       }
       );
       1 !== (null == e ? void 0 : oe(e, 1, 0)) && Zc(b, 5, e);
       hi(a, 5) || (e ? 1 === oe(e, 1, 0) ? Bm(a, e) : Bm(a, nm(om(new pm, 1), mm(c, d))) : Bm(a, om(new pm, mm(c, d) ? 2 : 3)))
   }
   ;
   sm = function(a, b, c) {
       var d = a.cpm
         , e = a.originalCpm
         , f = a.currency
         , g = a.originalCurrency
         , h = a.dealId
         , k = a.adserverTargeting
         , l = a.bidder
         , m = a.adId
         , n = a.mediaType
         , p = a.height
         , r = a.width
         , A = a.adUrl;
       a = a.ad;
       var z = new Dm;
       "number" === typeof d && (w(z, 2, Math.round(1E6 * d)),
       g && g !== f || (d = Math.round(1E6 * Number(e)),
       isNaN(d) || d === Cj(z, 2) || w(z, 8, d)));
       "string" === typeof f && w(z, 3, f);
       "string" === typeof h && Em(z, Fm(h));
       if ("object" === typeof k)
           for (c = _.t(Object, "fromEntries").call(Object, c.map(function(P) {
               return [v(P, 1), rm(P, 2)]
           })),
           l = _.x(["", "_" + l]),
           f = l.next(); !f.done; f = l.next())
               if (f = f.value,
               _.E(Gm)) {
                   h = [];
                   d = !1;
                   e = _.t(Object, "keys").call(Object, k);
                   e = _.x(e);
                   for (g = e.next(); !g.done; g = e.next()) {
                       g = (g.value + f).slice(0, 20);
                       var J = void 0
                         , N = null == (J = c[g]) ? void 0 : J[0];
                       void 0 !== N && (h.push(g),
                       d || (d = N === m))
                   }
                   d && Hm(z, rm(z, 4).concat(h))
               } else {
                   h = [];
                   d = _.x(_.t(Object, "entries").call(Object, k));
                   for (e = d.next(); !e.done; e = d.next())
                       if (e = _.x(e.value),
                       g = e.next().value,
                       e = e.next().value,
                       g = (g + f).slice(0, 20),
                       J = void 0,
                       null != (J = c[g]) && J.length)
                           if (c[g][0] === String(e))
                               h.push(g);
                           else {
                               h = [];
                               break
                           }
                   Hm(z, rm(z, 4).concat(h))
               }
       switch (n || "banner") {
       case "banner":
           w(z, 5, 1);
           break;
       case "native":
           w(z, 5, 2);
           break;
       case "video":
           w(z, 5, 3)
       }
       "number" === typeof p && "number" === typeof r && Im(z, Jm(Km(r), p));
       "string" === typeof m && (w(z, 1, m),
       b.set(m, {
           height: p,
           width: r,
           adUrl: "string" === typeof A ? A : void 0,
           ie: "string" === typeof a ? a : void 0,
           format: oe(z, 5, 0),
           cpm: nl(z, 2) ? Cj(z, 2) : void 0
       }));
       return z
   }
   ;
   Lm = function(a, b) {
       var c = new u.Map
         , d = function(n) {
           var p = c.get(n);
           p || (p = {},
           c.set(n, p));
           return p
       }
         , e = [];
       a = _.x(a);
       for (var f = a.next(); !f.done; f = a.next()) {
           f = f.value;
           var g = f.args
             , h = f.eventType;
           f = f.elapsedTime;
           var k = g
             , l = k.auctionId
             , m = k.bidId;
           k = k.bids;
           "bidTimeout" === h && e.push.apply(e, _.Ud(g));
           if (l === b)
               switch (h) {
               case "bidRequested":
                   if (!Array.isArray(k))
                       continue;
                   g = _.x(k);
                   for (h = g.next(); !h.done; h = g.next())
                       if (h = h.value.bidId)
                           d(h).requestTime = f;
                   break;
               case "noBid":
                   m && (d(m).jf = f)
               }
       }
       d = new u.Map;
       a = _.x(_.t(c, "entries").call(c));
       for (f = a.next(); !f.done; f = a.next())
           g = _.x(f.value),
           f = g.next().value,
           h = g.next().value,
           g = h.requestTime,
           h = h.jf,
           g && h && d.set(f, {
               latency: h - g,
               Gd: !1
           });
       e = _.x(e);
       for (a = e.next(); !a.done; a = e.next())
           if (f = a.value,
           a = f.bidId,
           f = f.auctionId,
           a && f === b && (a = d.get(a)))
               a.Gd = !0;
       return d
   }
   ;
   Mm = function(a, b) {
       var c = a.que
         , d = function() {
           var e;
           null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
               return Dg().pbjs_hooks.push({
                   context: b,
                   nextFunction: f,
                   requestBidsConfig: g
               })
           }, 0)
       };
       (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d) : null == c || c.unshift(d)
   }
   ;
   Om = function(a, b) {
       return (0,
       B.qa)(Lj(b, function() {
           return new Nm(a,b)
       }))
   }
   ;
   Pm = function(a, b) {
       for (var c = new Ti, d = 0; d < a.length; d++)
           c.set(a.length - d - 1, b(a[d]));
       return Vi(c)
   }
   ;
   Qm = function(a, b, c) {
       var d = void 0 === c.Cb ? "" : c.Cb;
       c = void 0 === c.na ? "," : c.na;
       var e = !1;
       a = a.map(function(f) {
           f = b(f);
           e || (e = !!f);
           return String(f || d)
       });
       return e ? a.join(c) : null
   }
   ;
   Sm = function(a) {
       var b = a.ha
         , c = b.ba
         , d = b.O.R;
       a = a.ga;
       var e = a.X
         , f = a.F;
       var g = void 0 === g ? function(h, k) {
           return we(h, k)
       }
       : g;
       a = c.map(function(h) {
           return d[h.getDomId()]
       });
       return new u.Map([["ists", {
           value: Pm(a, function(h) {
               return 0 !== Pl(h)
           }) || null
       }], ["fas", {
           value: Qm(a, function(h) {
               return Sl(Pl(h))
           }, {
               Cb: 0
           })
       }], ["itsi", {
           value: _.E(Fl) && c.some(function(h) {
               var k;
               return 5 === (null == (k = d[h.getDomId()]) ? void 0 : Pl(k))
           }) ? function() {
               var h = g(e, f);
               if (!h)
                   return 1;
               var k;
               h = Math.max.apply(Math, _.Ud(null != (k = _.Nl((0,
               B.J)(h), Hl(!0))) ? k : []));
               return isFinite(h) ? Math.floor(Math.max((Date.now() - h) / 6E4, 1)) : null
           }() : null
       }], ["fsapi", {
           value: _.E(_.Rm)
       }]])
   }
   ;
   Tm = function(a) {
       a = a.ha;
       var b = a.O.R;
       a = a.ba.map(function(c) {
           return b[c.getDomId()]
       });
       return new u.Map([["rbvs", {
           value: Pm(a, function(c) {
               return 4 === Pl(c)
           }) || null
       }]])
   }
   ;
   Vm = function(a) {
       var b = a.ga.L;
       return new u.Map([["ucis", {
           value: a.ha.ba.map(function(c) {
               c = (0,
               B.J)(b.j.get(c));
               null != c.Nb || (c.Nb = window === window.top ? (++b.o).toString(36) : Um());
               return c.Nb
           }),
           options: {
               na: "|"
           }
       }], ["oid", {
           value: 2
       }]])
   }
   ;
   Xm = function(a) {
       a = a.ha;
       var b = a.ba
         , c = a.O
         , d = c.R;
       a = new u.Map;
       var e = new u.Map;
       c = _.x(c.W.sa());
       for (var f = c.next(); !f.done; f = c.next()) {
           var g = f.value;
           e.set((0,
           B.J)(Mk(g)), [rm(g, 2)[0]])
       }
       for (c = 0; c < b.length; c++)
           if (g = d[b[c].getDomId()])
               for (g = _.x(g.sa()),
               f = g.next(); !f.done; f = g.next()) {
                   var h = f.value;
                   f = (0,
                   B.J)(Mk(h));
                   var k = e.get(f) || [];
                   h = rm(h, 2)[0];
                   1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                   e.set(f, k)
               }
       b = [];
       d = _.x(_.t(e, "keys").call(e));
       for (c = d.next(); !c.done; c = d.next())
           g = c.value,
           c = Wm()[g],
           g = e.get(g),
           c && g && (1 < g.length ? (g = g.map(function(l) {
               return encodeURIComponent(l || "")
           }).join(),
           b.push(c + "," + g)) : 1 === g.length && "url" !== c && a.set(c, {
               value: g[0]
           }));
       b.length && a.set("sps", {
           value: b.join("|")
       });
       return a
   }
   ;
   Ym = function(a, b, c, d) {
       var e = _.ee("DIV");
       e.id = b;
       e.name = b;
       b = e.style;
       b.border = "0pt none";
       c && (b.margin = "auto",
       b.textAlign = "center");
       d && (c = Array.isArray(d),
       b.width = c ? d[0] + "px" : "100%",
       b.height = c ? d[1] + "px" : "0%");
       a.appendChild(e);
       return e
   }
   ;
   Zm = function(a) {
       return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
   }
   ;
   an = function(a, b, c, d) {
       try {
           var e;
           if (!(e = !b)) {
               var f;
               if (!(f = !$m(b, c, d))) {
                   a: {
                       do {
                           var g = Ci(b, c);
                           if (g && "fixed" == g.position) {
                               var h = !1;
                               break a
                           }
                       } while (b = b.parentElement);
                       h = !0
                   }
                   f = !h
               }
               e = f
           }
           e && (a.height = -1)
       } catch (k) {
           a.width = -1,
           a.height = -1
       }
   }
   ;
   dn = function(a) {
       return new u.Map([["cbidsp", {
           value: Qm(a.ld.md, function(b) {
               return mc(bn(b, cn), 3)
           }, {
               na: "~"
           })
       }]])
   }
   ;
   kn = function(a, b, c) {
       return new u.Map([["eid", {
           value: a
       }], ["debug_experiment_id", {
           value: en().split(",")
       }], ["expflags", {
           value: _.Cg(253) ? $k(fn) || null : null
       }], ["pied", {
           value: _.E(gn) ? Qm(b, function(d) {
               var e;
               return (d = null == (e = c[d.getDomId()]) ? void 0 : Pc(e, hn, 25)) ? mc(bn(d, jn), 3) : ""
           }, {
               na: "~"
           }) : null
       }]])
   }
   ;
   nn = function(a, b, c) {
       var d = null;
       try {
           var e = ln(b.top.document, b.top).y;
           d = a.map(function(f) {
               var g = c.W, h = c.R[f.getDomId()], k;
               f = null == (k = Gi(f, h, b.document, mi(g, h))) ? void 0 : k.y;
               k = fi(!0, b).height;
               return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++mn
           })
       } catch (f) {}
       return d
   }
   ;
   pn = function(a, b) {
       var c = b.R;
       return Qm(a, function(d) {
           return on(c[d.getDomId()]).join("&")
       }, {
           na: "|"
       })
   }
   ;
   on = function(a) {
       a = qn(a);
       var b = [];
       _.il(a, function(c, d) {
           c.length && (c = c.map(encodeURIComponent),
           d = encodeURIComponent(d),
           b.push(d + "=" + c.join()))
       });
       return b
   }
   ;
   qn = function(a) {
       for (var b = {}, c = _.x(Lk(a)), d = c.next(); !d.done; d = c.next())
           d = d.value,
           b[(0,
           B.J)(Mk(d))] = rm(d, 2);
       a = rm(a, 8);
       a.length && (null != b.excl_cat || (b.excl_cat = a));
       return b
   }
   ;
   rn = function(a) {
       var b = !1
         , c = Nc(a, Pk, 2).map(function(d) {
           var e = (0,
           B.J)(Mk(d));
           b = "excl_cat" === e;
           d = rm(d, 2);
           return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
       });
       a = rm(a, 3);
       !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
       return c
   }
   ;
   sn = function(a) {
       var b, c;
       return null != (c = null == (b = _.t(a, "find").call(a, function(d) {
           return "page_url" === v(d, 1)
       })) ? void 0 : rm(b, 2)[0]) ? c : null
   }
   ;
   tn = function(a) {
       var b = a.indexOf("google_preview=", a.lastIndexOf("?"))
         , c = a.indexOf("&", b);
       -1 === c && (c = a.length - 1,
       --b);
       return a.substring(0, b) + a.substring(c + 1, a.length)
   }
   ;
   un = function(a) {
       var b;
       if (null == (b = a.location) ? 0 : b.ancestorOrigins)
           return a.location.ancestorOrigins.length;
       var c = 0;
       Fd(function() {
           c++;
           return !1
       }, !0, !0, a);
       return c
   }
   ;
   vn = function(a, b) {
       var c = b.R;
       return !!sn(b.W.sa()) || a.some(function(d) {
           return null !== sn(c[d.getDomId()].sa())
       })
   }
   ;
   Bn = function(a) {
       var b = a.ga
         , c = b.L;
       b = b.F;
       a = a.ha;
       var d = a.ba
         , e = a.Rc;
       return new u.Map([["ris", {
           value: wn(d, function(f) {
               var g, h;
               return null != (h = null == (g = c.j.get(f)) ? void 0 : g.Id) ? h : 0
           }, b)
       }], ["rcs", {
           value: Qm(d, function(f) {
               if (!e) {
                   var g = void 0 === g ? _.q : g;
                   var h = c.j.get(f);
                   h && (_.E(xn) || (h.Id = _.yn(g) || 0),
                   h.Vd++)
               }
               return zn(c, f)
           }, {
               Cb: 0
           })
       }], ["tfr", {
           value: _.E(An) ? wn(d, function(f) {
               var g, h;
               return null != (h = null == (g = c.j.get(f)) ? void 0 : g.yd) ? h : null
           }, b) : null
       }]])
   }
   ;
   wn = function(a, b, c) {
       return Qm(a, function(d) {
           d = b(d);
           var e = _.yn(c);
           return d && e ? Math.round(Math.min((e - d) / 1E3, 1800)) : null
       }, {
           na: "~"
       })
   }
   ;
   Fn = function(a) {
       var b = a.ha
         , c = b.ba;
       b = b.O;
       var d = b.W
         , e = b.R;
       return new u.Map([["sfv", {
           value: Cn(a.ga.F) ? Dn ? Dn : Dn = bl() : null
       }], ["fsfs", {
           value: Qm(c, function(f) {
               f = e[f.getDomId()];
               var g;
               return Number(null != (g = null == f ? void 0 : En(f, 12)) ? g : H(d, 13))
           }, {
               Cb: 0
           })
       }], ["fsbs", {
           value: Qm(c, function(f) {
               f = e[f.getDomId()].Ea();
               var g = d.Ea(), h;
               return (null != (h = null == f ? void 0 : En(f, 3)) ? h : null == g ? 0 : H(g, 3)) ? 1 : 0
           }, {
               Cb: 0
           })
       }]])
   }
   ;
   Kn = function(a) {
       var b = a.ha
         , c = b.O
         , d = b.ba
         , e = b.Rc;
       b = a.ga;
       var f = b.F;
       a = b.L;
       b = b.Ba;
       var g = d.map(function(l) {
           return c.R[l.getDomId()]
       })
         , h = []
         , k = d.map(function(l) {
           return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
               if (!m)
                   return "";
               var n = _.t(h, "findIndex").call(h, function(p) {
                   return p === m
               });
               return 0 <= n ? n : h.push(m) - 1
           }).join("/")
       });
       return new u.Map([["iu_parts", {
           value: h
       }], ["enc_prev_ius", {
           value: k
       }], ["prev_iu_szs", {
           value: g.map(function(l) {
               return ii(l)
           })
       }], ["fluid", {
           value: function() {
               var l = !1
                 , m = g.map(function(n) {
                   n = (C = gi(n),
                   _.t(C, "includes")).call(C, "fluid");
                   l || (l = n);
                   return n ? "height" : "0"
               });
               return l ? m : null
           }()
       }], ["ifi", {
           value: function() {
               var l = Zi(f);
               if (!e) {
                   l += 1;
                   var m = f
                     , n = d.length;
                   n = void 0 === n ? 1 : n;
                   m = Gn(Hn(m)) || m;
                   m.google_unique_id = (m.google_unique_id || 0) + n
               }
               return l
           }()
       }], ["adks", {
           value: In(d, a, b, c)
       }], ["didk", {
           value: _.E(Jn) ? Qm(d, function(l) {
               return ji(l.getDomId())
           }, {
               na: "~"
           }) : null
       }]])
   }
   ;
   In = function(a, b, c, d) {
       return a.map(function(e) {
           if (c) {
               var f = d.R[e.getDomId()];
               f = ki(f);
               if (e = b.j.get(e))
                   e.nb = f;
               return f
           }
           f = d.W;
           var g = d.R[e.getDomId()], h;
           if (!(h = Ln(b, e))) {
               f = ki(g, H(f, 6) || H(g, 17) ? null : Ai(e));
               if (e = b.j.get(e))
                   e.nb = f;
               h = f
           }
           return h
       }).join()
   }
   ;
   Nn = function() {
       var a = void 0 === a ? window : a;
       Mn = _.Fe(a)
   }
   ;
   Sn = function(a) {
       var b = a.ha
         , c = b.O.R
         , d = a.ga.F;
       a = b.ba.map(function(e) {
           return c[e.getDomId()]
       });
       b = a.some(function(e) {
           return hi(e, 16)
       });
       return new u.Map([["rtgs", {
           value: b ? a.map(function(e) {
               return hi(e, 16) ? gi(e).length ? "1" : "2" : "0"
           }) : null,
           options: {
               na: "!"
           }
       }], ["max_w", {
           value: b ? a.map(function(e) {
               return On(Pc(e, xl, 16), d)
           }) : null,
           options: {
               na: "!"
           }
       }], ["max_h", {
           value: b ? a.map(function(e) {
               return Pn(Pc(e, xl, 16), d)
           }) : null,
           options: {
               na: "!"
           }
       }], ["min_w", {
           value: b ? a.map(function(e) {
               return Qn(Pc(e, xl, 16))
           }) : null,
           options: {
               na: "!"
           }
       }], ["min_h", {
           value: b ? a.map(function(e) {
               return Rn(Pc(e, xl, 16))
           }) : null,
           options: {
               na: "!"
           }
       }]])
   }
   ;
   On = function(a, b) {
       return a && (a = Pc(a, $h, 1)) ? a.getWidth() || b.innerWidth : 0
   }
   ;
   Pn = function(a, b) {
       return a && (a = Pc(a, $h, 1)) ? a.getHeight() || b.innerHeight : 0
   }
   ;
   Qn = function(a) {
       return a && (a = Pc(a, $h, 2)) ? a.getWidth() || 0 : 0
   }
   ;
   Rn = function(a) {
       return a && (a = Pc(a, $h, 2)) ? a.getHeight() || 0 : 0
   }
   ;
   Tn = function(a, b) {
       var c;
       return !(null != (c = H(a, 11)) ? !c : !H(b, 10))
   }
   ;
   Un = function(a, b, c, d) {
       if (a = Ai(a, b)) {
           var e;
           if (c = null != (e = H(c, 24)) ? e : H(d, 30))
               c = a.getBoundingClientRect(),
               d = c.top,
               e = c.bottom,
               0 === c.height ? c = !1 : (c = _.q.innerHeight,
               c = 0 < e && e < c || 0 < d && d < c);
           c || (a.style.display = "none")
       }
   }
   ;
   uo = function(a, b, c, d, e, f, g, h, k) {
       if (a.nf) {
           var l = Vn(Wn(new Xn, Yn(Zn(new $n, b), c)), Yn(Zn(new $n, b), c));
           d = ao(new bo, co(eo(fo(go(ho(new io, f), g), Math.round(g / e * 100)), h), Math.round(h / (e * d) * 100)));
           b = jo(new ko, co(eo(fo(go(ho(new io, f), g), Math.round(g / e * 100)), h), Math.round(h / (c * b) * 100)));
           k = lo(mo(new no, [].concat(_.Ud(_.t(Yh, "keys").call(Yh))).map(function(m) {
               return Number(m)
           })), k);
           l = w(oo(po(qo(ro(so(to(l), d), b)), k), a.je), 5, document.URL);
           Xd(a.eb, l)
       }
   }
   ;
   Ao = function(a, b, c, d, e, f) {
       var g = new cf
         , h = new vo(a,c);
       M(g, h);
       e = new wo(a,d,e);
       M(g, e);
       e = new xo(a,b,d,f,h.Ya);
       M(g, e);
       b = new yo(a,b,d,c,f,h.Ya);
       M(g, b);
       a = new zo(a,h.Ya,b.l,e.l);
       M(g, a);
       mf(g);
       return {
           Ya: a.B,
           Aa: g
       }
   }
   ;
   Fo = function(a, b) {
       var c = window
         , d = new cf;
       c = new Bo(c);
       _.Co(d, c);
       b = new Do(a,c,b);
       M(d, b);
       a = new Eo(a,c,b.ib);
       M(d, a);
       mf(d);
       return {
           ib: b.ib,
           zd: a.l,
           Aa: d
       }
   }
   ;
   Jo = function(a, b, c, d, e) {
       var f = c.getAdUnitPath();
       c = Go.get(oe(c, 2, 0));
       if (f && c) {
           var g = b.defineOutOfPageSlot(f, c);
           g && (f = Ho(Gh(), g.getSlotElementId()),
           Zc((0,
           B.J)(f), 25, d),
           g.addService(b.pubads()),
           Io(a, function() {
               b.display(g);
               H(e, 4) && b.pubads().refresh([g])
           }))
       }
   }
   ;
   Oo = function(a) {
       var b, c = null == (b = window.top) ? void 0 : b.location.href;
       if (!c)
           return !1;
       var d = ji(c), e;
       return null == (e = Nc(a, Ko, 1)) ? void 0 : e.some(function(f) {
           switch (Jc(f, Lo)) {
           case 1:
               f = (0,
               B.J)(Mo(f, No, 1, Lo));
               if (nl(f, 1) && nl(f, 2)) {
                   var g = (0,
                   B.J)(pe(f, 1));
                   f = 0 >= g || g > c.length ? !1 : (0,
                   B.J)(pe(f, 2)) === ji(c.substring(0, g))
               } else
                   f = !1;
               return f;
           case 2:
               return (0,
               B.J)(pe(f, Kc(f, Lo, 2))) === d;
           default:
               return !1
           }
       })
   }
   ;
   Po = function(a) {
       var b;
       return null == (b = rm(a, 2)) ? void 0 : b.some(function(c) {
           switch (c) {
           case 0:
               return !1;
           case 1:
               return !0;
           case 2:
               return 0 === (0,
               _.Vl)();
           case 4:
               return 2 === (0,
               _.Vl)();
           case 3:
               return 1 === (0,
               _.Vl)();
           default:
               return !1
           }
       })
   }
   ;
   So = function(a, b, c, d, e) {
       for (var f = [], g = [], h = _.x(Nc(c, Qo, 3)), k = h.next(); !k.done; k = h.next())
           if (k = k.value,
           nl(k, 1) && nl(k, 2) && nl(k, 3) && nl(k, 4)) {
               var l = (0,
               B.J)(k.getAdUnitPath())
                 , m = a.querySelector(Ro(k, 1));
               if (m && m.parentElement && (l = "gpt_opp_" + l,
               !a.getElementById(l))) {
                   var n = a.createElement("div");
                   n.id = l;
                   m.insertAdjacentElement("beforebegin", n);
                   if (k = b.defineSlot((0,
                   B.J)(k.getAdUnitPath()), [k.getWidth(), k.getHeight()], l))
                       k.addService(b.pubads()),
                       m = void 0,
                       null != (m = Ho(Gh(), k.getSlotElementId())) && Zc(m, 25, d),
                       g.push(k)
               }
           }
       nl(c, 1) && f.push((0,
       B.J)(pe(c, 1)));
       0 < g.length && Io(a, function() {
           for (var p = _.x(g), r = p.next(); !r.done; r = p.next())
               b.display(r.value);
           H(e, 4) && b.pubads().refresh(g)
       });
       return f
   }
   ;
   Wo = function(a, b) {
       var c = To(b)
         , d = c.slotId
         , e = c.te;
       c = c.ue;
       if (d) {
           if (c = Gh(),
           (b = Ho(c, d.getDomId())) && !H(b, 19))
               if (e && c.D.set(d, e),
               Ai(d) || li(Pl(b)))
                   for (w(b, 19, !0),
                   a = wi(c.j, c.m),
                   e = _.x(rm(b, 4)),
                   b = e.next(); !b.done; b = e.next())
                       b = ch(b.value),
                       b = (0,
                       B.J)(Kj.get((0,
                       B.J)(b))),
                       b.A && b.T(a, d);
               else
                   L(a, Uo(String(b.getAdUnitPath()), String(b.getDomId())), d)
       } else
           c ? a.error(Vo(c)) : a.error(Qj("googletag.display", [String(b)]))
   }
   ;
   To = function(a) {
       var b = null
         , c = null
         , d = "";
       b = _.F(am);
       if ("string" === typeof a)
           d = a,
           b = Xo(b, d);
       else if (_.ha(a) && 1 == a.nodeType)
           c = a,
           d = c.id,
           b = Xo(b, d);
       else {
           var e;
           b = null != (e = (C = [].concat(_.Ud(b.ba)),
           _.t(C, "find")).call(C, function(f) {
               return f.j === a
           })) ? e : null
       }
       return {
           slotId: b,
           te: c,
           ue: d
       }
   }
   ;
   Yo = function(a) {
       switch (Number(a)) {
       case 2:
       case 3:
           return "Anchor";
       case 5:
           return "Interstitial";
       default:
           return "Out-of-page creative"
       }
   }
   ;
   Zo = function(a) {
       return !!Hj(Xk, function(b) {
           return b === a
       })
   }
   ;
   bp = function(a, b, c, d, e) {
       if (Zo(d) && (C = dl($o),
       _.t(C, "includes")).call(C, String(d)))
           return null;
       b = _.F(am).add(a, b, c, [1, 1], {
           fb: e,
           format: d
       });
       a = b.slotId;
       b = b.Ja;
       a && b && (w(b, 15, d),
       _.ap(a, function() {
           var f = window
             , g = Sl(d);
           if (null != g) {
               f = _.Tl(f);
               var h = f.adCount && f.adCount[g];
               h && (f.adCount[g] = h - 1)
           }
       }));
       return null != a ? a : null
   }
   ;
   cp = function(a, b, c, d) {
       L(a, kl("googletag.setConfig.commerce", ll(b), c, ll(d)))
   }
   ;
   dp = function(a) {
       return "string" === typeof a && 0 < a.length && 5E3 > a.length
   }
   ;
   ep = function(a) {
       if (!Array.isArray(a) || 0 === a.length)
           return !1;
       var b = a.length - 1;
       return a.every(function(c) {
           if ("string" !== typeof c || 0 === c.length)
               return !1;
           b += c.length;
           return 5E3 < b ? !1 : !0
       })
   }
   ;
   gp = function(a) {
       fp = a
   }
   ;
   ip = function() {
       for (var a = _.x(_.t(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
           var c = b = b.value
             , d = b.src;
           !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0,
           c = document.createElement("script"),
           b = new Qa(b.textContent,hp),
           Sa(c, b),
           document.head.appendChild(c),
           document.head.removeChild(c))
       }
   }
   ;
   jp = function(a, b) {
       b = _.x(_.t(Object, "entries").call(Object, b));
       for (var c = b.next(); !c.done; c = b.next()) {
           var d = _.x(c.value);
           c = d.next().value;
           d = d.next().value;
           a.hasOwnProperty(c) || (a[c] = d)
       }
   }
   ;
   fq = function(a, b) {
       var c = [];
       c = _.F(am);
       c = [].concat(_.Ud(c.ba)).slice();
       if (b) {
           if (!Array.isArray(b))
               return L(a, Qj("googletag.destroySlots", [b])),
               !1;
           ka(b);
           c = c.filter(function(d) {
               return _.t(b, "includes").call(b, d.j)
           })
       }
       if (!c.length)
           return !1;
       dq(c);
       eq(c);
       return !0
   }
   ;
   kq = function(a, b, c) {
       var d;
       if (Ig("google_content_service_disabled", c))
           Si("gpt_scdvqp", function(e) {
               Yi(e, a)
           }, 1);
       else if (!_.E(gq))
           return G(a, 817, function() {
               _.E(hq) && b.error(iq(), null, !0);
               null != d || (d = new jq(a,b));
               return Vj(a, b, d)
           })
   }
   ;
   vq = function(a, b, c, d, e) {
       var f = Dg(), g;
       d = kq(a, b, d);
       var h = G(a, 74, function(l, m, n) {
           var p = gm(a, b, l, m, n)
             , r = p.slotId;
           r ? l = r.j : (p.Kc || b.error(Qj("googletag.defineSlot", [l, m, n])),
           l = null);
           return l
       })
         , k = {};
       h = (k._loaded_ = !0,
       k.cmd = [],
       k._vars_ = f._vars_,
       k.evalScripts = f.evalScripts,
       k.display = G(a, 95, function(l) {
           void Wo(b, l)
       }),
       k.defineOutOfPageSlot = G(a, 73, function(l, m) {
           "string" === typeof l && l.length && (null == m || "string" === typeof m || "number" === typeof m && Zo(m)) ? l = bp(a, b, l, "number" === typeof m ? m : 1, "string" === typeof m ? m : void 0) : (b.error(Qj("googletag.defineOutOfPageSlot", [l, m])),
           l = null);
           return l ? l.j : null
       }),
       k.getVersion = G(a, 946, function() {
           return a.jb ? String(a.jb) : a.Ga
       }),
       k.pubads = G(a, 947, function() {
           return km(a, b, c)
       }),
       k.companionAds = G(a, 816, function() {
           null != g || (g = new lq(a,b,c));
           return Tj(a, b, g)
       }),
       k.setAdIframeTitle = G(a, 729, gp),
       k.getEventLog = G(a, 945, function() {
           return new mq(a,b)
       }),
       k.sizeMapping = G(a, 90, function() {
           return new nq(a,b)
       }),
       k.enableServices = G(a, 91, function() {
           for (var l = _.x(oq), m = l.next(); !m.done; m = l.next())
               m = m.value,
               m.A && b.info(pq()),
               m.enable()
       }),
       k.destroySlots = G(a, 75, function(l) {
           return fq(b, l)
       }),
       k.enums = Zk(),
       k.defineSlot = h,
       k.defineUnit = h,
       k.getWindowsThatCanCommunicateWithHostpageLibrary = G(a, 955, function(l) {
           return qq(l)
       }),
       k.disablePublisherConsole = G(a, 93, Yj),
       k.onPubConsoleJsLoad = G(a, 731, Zj),
       k.openConsole = G(a, 732, function(l) {
           ak(a, void 0 === l ? "" : l)
       }),
       k.setConfig = G(a, 1034, function(l) {
           if (_.ha(l))
               if (l = l.commerce,
               null === l)
                   Zc(rq(e, sq, 33), 1);
               else {
                   if (void 0 !== l) {
                       var m = rq(e, sq, 33);
                       if (_.ha(l)) {
                           var n = l.query
                             , p = l.categories
                             , r = l.productIds
                             , A = l.filter
                             , z = vc(tq(m, uq, 1));
                           null === n ? Gc(z, 1) : dp(n) ? w(z, 1, n) : void 0 !== n && cp(b, l, "query", n);
                           null === p ? w(z, 2, zc) : ep(p) ? Kg(z, 2, p) : void 0 !== p && cp(b, l, "categories", p);
                           null === r ? w(z, 3, zc) : ep(r) ? Kg(z, 3, r) : void 0 !== r && cp(b, l, "productIds", r);
                           null === A ? Gc(z, 4) : dp(A) ? w(z, 4, A) : void 0 !== A && cp(b, l, "filter", A);
                           (nl(z, 1) || rm(z, 2).length) && Zc(m, 1, z)
                       } else
                           L(b, Qj("googletag.setConfig.commerce", [l]))
                   }
               }
           else
               L(b, Qj("googletag.setConfig", [l]))
       }),
       k.apiReady = !0,
       k);
       d && (h.content = d);
       jp(f, h)
   }
   ;
   wq = function(a) {
       var b = function() {
           return a.Reflect.construct(a.HTMLElement, [], this.constructor)
       };
       b.prototype = a.HTMLElement.prototype;
       b.prototype.constructor = b;
       _.t(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
       return b
   }
   ;
   yq = function(a, b) {
       var c = _.D(xq);
       Math.random() <= c && ue(b, a)
   }
   ;
   Eq = function(a, b, c) {
       var d = {};
       if (!c)
           return b.error(zq("missing data-rendering attribute")),
           d;
       try {
           var e = he(Aq, Bq(c))
       } catch (k) {}
       var f;
       (null == (f = e) ? 0 : hi(f, 1)) ? (b = new Cq,
       b = Hc(b, 4, 1, 0),
       b = Hc(b, 2, 7, 0),
       a = Hc(b, 3, a.bb || a.Ga, ""),
       b = Pc(e, Dq, 1),
       a = Zc(a, 5, b),
       a = Hc(a, 6, !0, !1),
       d.rf = a) : b.error(zq("invalid data-rendering attribute"));
       var g;
       d.hf = null == (g = e) ? void 0 : Ro(g, 2);
       var h;
       d.Hc = null == (h = e) ? void 0 : Ro(h, 3);
       return d
   }
   ;
   Hq = function(a, b) {
       var c, d, e, f, g, h, k, l, m, n;
       return _.ab(function(p) {
           c = ik(b, "ai");
           if (!c || 0 === c.length)
               return p.return(u.Promise.resolve(b));
           d = Fq();
           if (null == (e = d) ? 0 : e.gmaSdk) {
               if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c))
                   return p.return(u.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
           } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals)
               return l = new _.lg,
               m = l.resolve,
               n = l.promise,
               Gq(d.webkit.messageHandlers.getGmaClickSignals, {
                   click_string: c
               }, function(r) {
                   m(b.replace("?", "?" + r + "&"))
               }, function() {
                   m(b)
               }, function(r, A) {
                   return _.Lh(a, r, A)
               }),
               p.return(n);
           return p.return(u.Promise.resolve(b))
       })
   }
   ;
   Iq = function(a, b, c, d) {
       var e, f, g;
       return _.ab(function(h) {
           e = b.getBoundingClientRect();
           f = {};
           var k = d.replace;
           var l = (f.nx = Math.floor(c.clientX - e.x),
           f.ny = Math.floor(c.clientY - e.y),
           f.dim = Math.floor(e.width) + "x" + Math.floor(e.height),
           f);
           var m = [];
           for (n in l)
               fl(n, l[n], m);
           l = m.join("&");
           if (l) {
               m = -1;
               0 > m && (m = 0);
               var n = -1;
               if (0 > n || n > m) {
                   n = m;
                   var p = ""
               } else
                   p = "".substring(n + 1, m);
               m = ["".slice(0, n), p, "".slice(m)];
               n = m[1];
               m[1] = l ? n ? n + "&" + l : l : n;
               l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
           } else
               l = "";
           g = k.call(d, "?", l + "&");
           return h.return(Hq(a, g))
       })
   }
   ;
   Jq = function(a, b, c) {
       var d, e, f, g, h, k, l, m, n, p;
       return _.ab(function(r) {
           if (null == (d = c) ? 0 : null == (e = d.gmaSdk) ? 0 : e.getViewSignals) {
               if (f = c.gmaSdk.getViewSignals())
                   return g = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + f + "$2"),
                   r.return(u.Promise.resolve(g))
           } else if (null == (h = c) ? 0 : null == (k = h.webkit) ? 0 : null == (l = k.messageHandlers) ? 0 : l.getGmaViewSignals)
               return m = new _.lg,
               n = m.resolve,
               p = m.promise,
               Gq(c.webkit.messageHandlers.getGmaViewSignals, {}, function(A) {
                   n(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + A + "$2"))
               }, function() {
                   n(b)
               }, function(A, z) {
                   return _.Lh(a, A, z)
               }),
               r.return(p);
           return r.return(u.Promise.resolve(b))
       })
   }
   ;
   Pq = function(a, b) {
       var c = window;
       var d = void 0 === d ? kb : d;
       var e;
       if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
           var f = Fq(), g;
           null == (g = f ? new Kq(function(k, l) {
               return _.Lh(a, k, l)
           }
           ,function() {}
           ) : void 0) || Lq(g);
           var h = wq(c);
           e = function() {
               return h.apply(this, arguments) || this
           }
           ;
           _.O(e, h);
           e.prototype.connectedCallback = function() {
               var k = Eq(a, b, this.dataset.rendering)
                 , l = k.rf
                 , m = k.hf;
               k = k.Hc;
               l && d(Mq(window, l));
               m && Jq(a, m, f).then(function(n) {
                   return void Nq(n)
               });
               k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Hc = k,
               this.addEventListener("click", this.j)) : L(b, Oq(k)))
           }
           ;
           e.prototype.j = function(k) {
               var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
               l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && Iq(a, this, k, this.Hc).then(function(m) {
                   return void Nq(m)
               })
           }
           ;
           c.customElements.define("google-product-ad", e)
       }
   }
   ;
   Qq = function(a) {
       var b = {};
       a = _.x(a);
       for (var c = a.next(); !c.done; c = a.next())
           c = c.value,
           b[v(c, 1)] = v(c, 2);
       return b
   }
   ;
   Tq = function(a, b) {
       var c;
       return Rq(a, Sq, function(d) {
           d = d.detail.data;
           try {
               return c = JSON.parse(d),
               "rewarded" === c.type && c.message === b
           } catch (e) {
               return !1
           }
       }).then(function() {
           return c
       })
   }
   ;
   Uq = function(a) {
       .001 > re() && ue({
           c: "sd",
           s: String(a)
       }, "gpt_whirs")
   }
   ;
   Zq = function(a, b, c, d) {
       d = d.wf;
       var e = b.kind;
       switch (e) {
       case 0:
           return new (d ? Vq : Wq)(a,b,c);
       case 1:
           return new Xq(a,b,c);
       case 2:
           return new Yq(a,b,c);
       default:
           Oa(e)
       }
   }
   ;
   $q = function(a) {
       if (!Gd(a))
           return -1;
       a = a.pageYOffset;
       return 0 > a ? -1 : a
   }
   ;
   br = function(a) {
       var b = {
           threshold: [0, .3, .5, .75, 1]
       };
       return window.IntersectionObserver ? new IntersectionObserver(a,b) : new ar(a,b)
   }
   ;
   cr = function(a) {
       return nl(a, 1) ? nl(a, 3) && 0 !== (0,
       _.Vl)() ? (0,
       B.qa)(v(a, 1)) * (0,
       B.qa)(Pe(a, 3)) : v(a, 1) : null
   }
   ;
   dr = function(a, b) {
       return "undefined" === typeof IntersectionObserver ? new ar(b,{
           rootMargin: a + "%"
       }) : new IntersectionObserver(b,{
           rootMargin: a + "%"
       })
   }
   ;
   jr = function(a, b) {
       for (var c = {}, d = _.x(Nc(a, er, 7)), e = d.next(); !e.done; e = d.next())
           e = e.value,
           c[Ro(e, 1)] = JSON.parse(Ro(e, 2));
       (d = Pc(a, fr, 6)) && (c["https://googleads.g.doubleclick.net"] = d.toJSON());
       d = {};
       e = _.x(Nc(a, gr, 11));
       for (var f = e.next(); !f.done; f = e.next())
           f = f.value,
           d[Ro(f, 1)] = pe(f, 2);
       f = {};
       oe(a, 18, 0) && (f["https://googleads.g.doubleclick.net"] = oe(a, 18, 0));
       var g;
       e = {
           seller: "https://pubads.g.doubleclick.net",
           decisionLogicUrl: Ro(a, 1),
           trustedScoringSignalsUrl: Ro(a, 2),
           interestGroupBuyers: rm(a, 3),
           sellerExperimentGroupId: oe(a, 17, 0),
           auctionSignals: JSON.parse(Ro(a, 4) || "{}"),
           sellerSignals: (null == (g = Pc(a, hr, 5)) ? void 0 : g.toJSON()) || [],
           sellerTimeout: pe(a, 15) || 50,
           perBuyerExperimentGroupIds: f,
           perBuyerSignals: c,
           perBuyerTimeouts: d
       };
       c = new hr;
       "0" !== oe(tq(tq(a, hr, 5), ir, 5), 2, "0") && (g = new ir,
       d = oe(tq(tq(a, hr, 5), ir, 5), 2, "0"),
       Fc(g),
       null != d && 0 !== +d ? w(g, 2, d) : Gc(g, 2),
       Zc(c, 5, g));
       return {
           seller: "https://pubads.g.doubleclick.net",
           decisionLogicUrl: Ro(a, 1),
           sellerExperimentGroupId: oe(a, 17, 0),
           sellerSignals: c.toJSON(),
           sellerTimeout: pe(a, 15) || 50,
           interestGroupBuyers: [],
           auctionSignals: {},
           perBuyerExperimentGroupIds: {},
           perBuyerSignals: {},
           perBuyerTimeouts: {},
           componentAuctions: [e].concat(_.Ud(null != b ? b : []))
       }
   }
   ;
   or = function(a, b) {
       var c, d, e, f, g, h, k, l;
       return _.ab(function(m) {
           if (1 == m.j)
               return _.t(a, "startsWith").call(a, "urn:") && kr.deprecatedURNToURL && kr.deprecatedReplaceInURN ? bb(m, kr.deprecatedURNToURL(a), 2) : m.return();
           c = m.m;
           d = {};
           e = b.gdprApplies || "";
           (null != (f = c.match(lr)) ? f : []).forEach(function(n) {
               d[n] = e
           });
           g = b.Fe || "";
           (null != (h = c.match(mr)) ? h : []).forEach(function(n) {
               d[n] = g
           });
           k = b.le || "";
           (null != (l = c.match(nr)) ? l : []).forEach(function(n) {
               d[n] = k
           });
           return bb(m, kr.deprecatedReplaceInURN(a, d), 0)
       })
   }
   ;
   qr = function(a, b, c, d) {
       d = void 0 === d ? !1 : d;
       var e = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner"
         , f = pr(c, 18)
         , g = pr(c, 7);
       if (g || f)
           e += "&isContextualWinner=1";
       g && (e += "&hasXfpAds=1");
       f = c.getEscapedQemQueryId();
       g = Ro(c, 6);
       f && (e += "&winner_qid=" + encodeURIComponent(f));
       g && (e += "&xfpQid=" + encodeURIComponent(g));
       pr(c, 4) && (e += "&is_plog=1");
       (f = Ro(c, 11)) && (e += "&ecrs=" + f);
       (null == c ? 0 : pr(c, 21)) || (e += "&turtlexTest=1");
       e += "&applied_timeout_ms=" + b + "&duration_ms=" + Math.round(a);
       d && (e += "skipRender=1");
       Nq(e)
   }
   ;
   es = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
       var r = new cf
         , A = fi(!0, window)
         , z = f.W
         , J = f.R[c.getDomId()]
         , N = new rr(a,window);
       M(r, N);
       var P = g.Fb
         , T = g.Ob
         , W = g.De
         , aa = g.vd
         , X = g.me
         , ja = g.Me
         , xa = g.xf
         , mb = g.Ee
         , Ra = g.Ae
         , Aa = g.Sb
         , Na = g.yf
         , $b = g.Le
         , Pb = g.Te
         , Mc = g.tf
         , eb = g.Bf
         , nb = g.Cf
         , hd = g.Ie
         , ub = g.zf
         , vb = g.Xb
         , Ub = g.ra
         , gf = g.be
         , wb = g.Ef;
       g = g.df;
       if (.01 > Math.random()) {
           p = new sr(a,wb,p.K,xa,aa);
           M(r, p);
           var ij = p.B
       }
       Ub = new tr(a,e,c,P,T,Ub,wb,ij);
       M(r, Ub);
       T = new ur;
       T.j(l);
       P = new vr(a,window.top,T);
       M(r, P);
       h = new wr(a,zg(c.getAdUnitPath()),console,h,P.B);
       M(r, h);
       wb = new xr(a,Pl(J),A.height,Ra,Ub.Fb);
       M(r, wb);
       h = new yr(a,c,Ai(c, k),c.getDomId(),Ii(c),k,Pl(J),e);
       M(r, h);
       p = new zr(a,Ub.ra,X,ja,xa);
       M(r, p);
       xa = new Ar(a,z,J,window,X,xa);
       M(r, xa);
       eb = new Br(a,Pc(z, Cr, 5),eb);
       M(r, eb);
       Aa = new Dr(a,c.getAdUnitPath(),J,A.width,window,Aa,Ub.Ob,wb.B,p.B,h.B);
       M(r, Aa);
       wb = new Er(a,gf,J);
       M(r, wb);
       l = new Fr(a,e,l,gf,wb.B,Aa.ra,Aa.o);
       M(r, l);
       if (d)
           return r;
       d = new Gr(a,c,z,J,Pl(J),k,e,h.B,xa.B,Aa.o,W);
       M(r, d);
       wb = new Hr(a,d.B);
       M(r, wb);
       p = new Ir(a,c,A,e,wb.B,eb.l);
       M(r, p);
       wb = new Jr(a,window,h.B);
       M(r, wb);
       nb = new Kr(a,p.B,d.B,nb,eb.l);
       M(r, nb);
       A = new Lr(a,k,c,J,A,W,h.B,d.B,Aa.o,Aa.Sb,wb.B,aa);
       M(r, A);
       Na = new Mr(a,z,J,l.ra,xa.B,X,Na);
       M(r, Na);
       vb = new Nr(a,window,vb,N.B);
       M(r, vb);
       _.E(Or) ? (b = new ur,
       Pr(b)) : (b = new Qr(a,b,c,f,ja,ub),
       M(r, b),
       b = b.B);
       ub = new Rr(a,Pl(J),k);
       M(r, ub);
       Aa = new Sr(a,window);
       M(r, Aa);
       n = new Tr(a,n,Pl(J),Ra,mb);
       M(r, n);
       Pb = new Ur(a,Pb);
       M(r, Pb);
       aa = new Vr(a,c,e,f,m,window,l.ra,xa.B,b,nb.B,h.B,d.B,l.o,aa,W,Na.B,ja,$b,Mc,A.B,vb.B,ub.B,n.B,Ub.l,gf,Aa.B);
       M(r, aa);
       ja = new Wr(a,window,c,aa.o,T);
       M(r, ja);
       Ra = new Xr(a,e,Pl(J),c,window,Ra,aa.l,h.B,n.B);
       M(r, Ra);
       f = new Yr(a,c,Pl(J),(0,
       B.J)(f.ub),mb,aa.l,h.B,P.B,n.B);
       M(r, f);
       J = new Zr(a,c,Pl(J),m,window,aa.l,h.B);
       M(r, J);
       k = new $r(a,c,aa.l,k,m);
       M(r, k);
       e = new as(a,Ln(e, c),window.top,aa.l,N.B);
       M(r, e);
       c = new bs(a,c,W,X,Mc,aa.l,d.B,aa.C);
       M(r, c);
       hd = new cs(a,window,hd,aa.l,d.B,h.B);
       M(r, hd);
       M(r, new ds(a,g,Dg(),z));
       return r
   }
   ;
   gs = function() {
       if (Ga())
           var a = 0 <= fs(Ia(), 11);
       else
           a = Da(Ba()),
           Ha(a),
           a = Ea() ? (a = a[2]) && a[1] || "" : "",
           "" === a ? a = NaN : (a = a.split("."),
           a = 0 === a.length ? NaN : Number(a[0])),
           a = 65 <= a;
       return a
   }
   ;
   hs = function(a, b) {
       return window.IntersectionObserver ? new IntersectionObserver(a,{
           rootMargin: b
       }) : new ar(a,{
           rootMargin: b
       })
   }
   ;
   is = function(a) {
       function b(f) {
           var g = f;
           return function() {
               var h = Jd.apply(0, arguments);
               if (g) {
                   var k = g;
                   g = null;
                   k.apply(null, _.Ud(h))
               }
           }
       }
       var c = null
         , d = 0
         , e = 0;
       return function() {
           var f, g, h, k;
           return _.ab(function(l) {
               if (1 == l.j)
                   return d && clearTimeout(d),
                   d = 0,
                   f = new _.lg,
                   g = b(f.resolve),
                   h = ++e,
                   bb(l, 0, 2);
               if (e !== h)
                   return g(!1),
                   l.return(f.promise);
               c ? c(!1) : g(!0);
               k = b(function() {
                   c = null;
                   d = 0;
                   g(!0)
               });
               d = setTimeout(k, 1E3);
               _.ap(a, function() {
                   return void g(!1)
               });
               c = g;
               return l.return(f.promise)
           })
       }
   }
   ;
   qs = function() {
       var a = new js;
       var b = (new ks).setCorrelator(Ce(_.q));
       var c = De().join();
       b = Hc(b, 5, c, "");
       b = Hc(b, 2, 1, 0);
       a = Zc(a, 1, b);
       b = new ls;
       c = _.E(ms);
       b = Hc(b, 7, c, !1);
       c = _.E(ns);
       b = Hc(b, 8, c, !1);
       c = _.E(os);
       b = Hc(b, 9, c, !1);
       b = Hc(b, 10, !0, !1);
       c = _.E(ps);
       b = Hc(b, 13, c, !1);
       b = Hc(b, 16, !0, !1);
       a = Zc(a, 2, b);
       window.google_rum_config = a.toJSON()
   }
   ;
   ss = function() {
       var a = rs
         , b = Number(a);
       return 1 > b || Math.floor(b) !== b ? (ue({
           v: a
       }, "gpt_inv_ver"),
       "1") : a
   }
   ;
   xs = function() {
       var a = ts() || qe() ? 1 : re()
         , b = .001 > a
         , c = .001 > a;
       b ? (_.F(us).I = !0,
       vs(31067358)) : .002 > a && vs(31067357);
       ws(23);
       return {
           Lb: b,
           Ve: 1E3,
           pf: 1E-4 > a,
           Ue: 1E4,
           Yd: b,
           ud: 1E3,
           nf: c,
           je: 1E3
       }
   }
   ;
   As = function(a) {
       var b = ss();
       var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
       var d = Ce(window)
         , e = window.document.URL
         , f = _.D(ys);
       return _.t(Object, "assign").call(Object, {}, a, {
           Ga: b,
           bb: "",
           jb: c,
           pvsid: d,
           eb: new zs(f),
           ve: e
       })
   }
   ;
   Bs = function(a) {
       var b = 0;
       return function() {
           return b < a.length ? {
               done: !1,
               value: a[b++]
           } : {
               done: !0
           }
       }
   }
   ;
   Cs = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
       if (a == Array.prototype || a == Object.prototype)
           return a;
       a[b] = c.value;
       return a
   }
   ;
   Ds = function(a) {
       a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
       for (var b = 0; b < a.length; ++b) {
           var c = a[b];
           if (c && c.Math == Math)
               return c
       }
       throw Error("Cannot find global object");
   }
   ;
   Es = Ds(this);
   Fs = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
   u = {};
   Gs = {};
   _.t = function(a, b) {
       var c = Gs[b];
       if (null == c)
           return a[b];
       c = a[c];
       return void 0 !== c ? c : a[b]
   }
   ;
   Hs = function(a, b, c) {
       if (b)
           a: {
               var d = a.split(".");
               a = 1 === d.length;
               var e = d[0], f;
               !a && e in u ? f = u : f = Es;
               for (e = 0; e < d.length - 1; e++) {
                   var g = d[e];
                   if (!(g in f))
                       break a;
                   f = f[g]
               }
               d = d[d.length - 1];
               c = Fs && "es6" === c ? f[d] : null;
               b = b(c);
               null != b && (a ? Cs(u, d, {
                   configurable: !0,
                   writable: !0,
                   value: b
               }) : b !== c && (void 0 === Gs[d] && (a = 1E9 * Math.random() >>> 0,
               Gs[d] = Fs ? Es.Symbol(d) : "$jscp$" + a + "$" + d),
               Cs(f, Gs[d], {
                   configurable: !0,
                   writable: !0,
                   value: b
               })))
           }
   }
   ;
   Hs("Symbol", function(a) {
       if (a)
           return a;
       var b = function(f, g) {
           this.j = f;
           Cs(this, "description", {
               configurable: !0,
               writable: !0,
               value: g
           })
       };
       b.prototype.toString = function() {
           return this.j
       }
       ;
       var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
         , d = 0
         , e = function(f) {
           if (this instanceof e)
               throw new TypeError("Symbol is not a constructor");
           return new b(c + (f || "") + "_" + d++,f)
       };
       return e
   }, "es6");
   Hs("Symbol.iterator", function(a) {
       if (a)
           return a;
       a = (0,
       u.Symbol)("Symbol.iterator");
       for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
           var d = Es[b[c]];
           "function" === typeof d && "function" != typeof d.prototype[a] && Cs(d.prototype, a, {
               configurable: !0,
               writable: !0,
               value: function() {
                   return Is(Bs(this))
               }
           })
       }
       return a
   }, "es6");
   Is = function(a) {
       a = {
           next: a
       };
       a[_.t(u.Symbol, "iterator")] = function() {
           return this
       }
       ;
       return a
   }
   ;
   Q = function(a) {
       return a.raw = a
   }
   ;
   _.x = function(a) {
       var b = "undefined" != typeof u.Symbol && _.t(u.Symbol, "iterator") && a[_.t(u.Symbol, "iterator")];
       return b ? b.call(a) : {
           next: Bs(a)
       }
   }
   ;
   Js = function(a) {
       for (var b, c = []; !(b = a.next()).done; )
           c.push(b.value);
       return c
   }
   ;
   _.Ud = function(a) {
       return a instanceof Array ? a : Js(_.x(a))
   }
   ;
   Ks = function(a, b) {
       return Object.prototype.hasOwnProperty.call(a, b)
   }
   ;
   Ls = Fs && "function" == typeof _.t(Object, "assign") ? _.t(Object, "assign") : function(a, b) {
       for (var c = 1; c < arguments.length; c++) {
           var d = arguments[c];
           if (d)
               for (var e in d)
                   Ks(d, e) && (a[e] = d[e])
       }
       return a
   }
   ;
   Hs("Object.assign", function(a) {
       return a || Ls
   }, "es6");
   var Ms = "function" == typeof Object.create ? Object.create : function(a) {
       var b = function() {};
       b.prototype = a;
       return new b
   }
   , Ns = function() {
       function a() {
           function c() {}
           new c;
           _.t(u.Reflect, "construct").call(u.Reflect, c, [], function() {});
           return new c instanceof c
       }
       if (Fs && "undefined" != typeof u.Reflect && _.t(u.Reflect, "construct")) {
           if (a())
               return _.t(u.Reflect, "construct");
           var b = _.t(u.Reflect, "construct");
           return function(c, d, e) {
               c = b(c, d);
               e && _.t(u.Reflect, "setPrototypeOf").call(u.Reflect, c, e.prototype);
               return c
           }
       }
       return function(c, d, e) {
           void 0 === e && (e = c);
           e = Ms(e.prototype || Object.prototype);
           return Function.prototype.apply.call(c, e, d) || e
       }
   }(), Os;
   if (Fs && "function" == typeof _.t(Object, "setPrototypeOf"))
       Os = _.t(Object, "setPrototypeOf");
   else {
       var Ps;
       a: {
           var Qs = {
               a: !0
           }
             , Rs = {};
           try {
               Rs.__proto__ = Qs;
               Ps = Rs.a;
               break a
           } catch (a) {}
           Ps = !1
       }
       Os = Ps ? function(a, b) {
           a.__proto__ = b;
           if (a.__proto__ !== b)
               throw new TypeError(a + " is not extensible");
           return a
       }
       : null
   }
   Ss = Os;
   _.O = function(a, b) {
       a.prototype = Ms(b.prototype);
       a.prototype.constructor = a;
       if (Ss)
           Ss(a, b);
       else
           for (var c in b)
               if ("prototype" != c)
                   if (Object.defineProperties) {
                       var d = Object.getOwnPropertyDescriptor(b, c);
                       d && Object.defineProperty(a, c, d)
                   } else
                       a[c] = b[c];
       a.mh = b.prototype
   }
   ;
   Ts = function() {
       this.l = !1;
       this.H = null;
       this.m = void 0;
       this.j = 1;
       this.o = this.D = 0;
       this.A = null
   }
   ;
   Us = function(a) {
       if (a.l)
           throw new TypeError("Generator is already running");
       a.l = !0
   }
   ;
   Ts.prototype.I = function(a) {
       this.m = a
   }
   ;
   var Vs = function(a, b) {
       a.A = {
           xd: b,
           Oe: !0
       };
       a.j = a.D || a.o
   };
   Ts.prototype.return = function(a) {
       this.A = {
           return: a
       };
       this.j = this.o
   }
   ;
   bb = function(a, b, c) {
       a.j = c;
       return {
           value: b
       }
   }
   ;
   db = function(a, b) {
       a.j = b;
       a.D = 0
   }
   ;
   fb = function(a) {
       a.D = 0;
       var b = a.A.xd;
       a.A = null;
       return b
   }
   ;
   Ws = function(a) {
       this.j = new Ts;
       this.m = a
   }
   ;
   Zs = function(a, b) {
       Us(a.j);
       var c = a.j.H;
       if (c)
           return Xs(a, "return"in c ? c["return"] : function(d) {
               return {
                   value: d,
                   done: !0
               }
           }
           , b, a.j.return);
       a.j.return(b);
       return Ys(a)
   }
   ;
   Xs = function(a, b, c, d) {
       try {
           var e = b.call(a.j.H, c);
           if (!(e instanceof Object))
               throw new TypeError("Iterator result " + e + " is not an object");
           if (!e.done)
               return a.j.l = !1,
               e;
           var f = e.value
       } catch (g) {
           return a.j.H = null,
           Vs(a.j, g),
           Ys(a)
       }
       a.j.H = null;
       d.call(a.j, f);
       return Ys(a)
   }
   ;
   Ys = function(a) {
       for (; a.j.j; )
           try {
               var b = a.m(a.j);
               if (b)
                   return a.j.l = !1,
                   {
                       value: b.value,
                       done: !1
                   }
           } catch (c) {
               a.j.m = void 0,
               Vs(a.j, c)
           }
       a.j.l = !1;
       if (a.j.A) {
           b = a.j.A;
           a.j.A = null;
           if (b.Oe)
               throw b.xd;
           return {
               value: b.return,
               done: !0
           }
       }
       return {
           value: void 0,
           done: !0
       }
   }
   ;
   $s = function(a) {
       this.next = function(b) {
           Us(a.j);
           a.j.H ? b = Xs(a, a.j.H.next, b, a.j.I) : (a.j.I(b),
           b = Ys(a));
           return b
       }
       ;
       this.throw = function(b) {
           Us(a.j);
           a.j.H ? b = Xs(a, a.j.H["throw"], b, a.j.I) : (Vs(a.j, b),
           b = Ys(a));
           return b
       }
       ;
       this.return = function(b) {
           return Zs(a, b)
       }
       ;
       this[_.t(u.Symbol, "iterator")] = function() {
           return this
       }
   }
   ;
   at = function(a) {
       function b(d) {
           return a.next(d)
       }
       function c(d) {
           return a.throw(d)
       }
       return new u.Promise(function(d, e) {
           function f(g) {
               g.done ? d(g.value) : u.Promise.resolve(g.value).then(b, c).then(f, e)
           }
           f(a.next())
       }
       )
   }
   ;
   _.ab = function(a) {
       return at(new $s(new Ws(a)))
   }
   ;
   Jd = function() {
       for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
           b[c - a] = arguments[c];
       return b
   }
   ;
   Hs("Reflect", function(a) {
       return a ? a : {}
   }, "es6");
   Hs("Reflect.construct", function() {
       return Ns
   }, "es6");
   Hs("Reflect.setPrototypeOf", function(a) {
       return a ? a : Ss ? function(b, c) {
           try {
               return Ss(b, c),
               !0
           } catch (d) {
               return !1
           }
       }
       : null
   }, "es6");
   Hs("Promise", function(a) {
       function b() {
           this.j = null
       }
       function c(g) {
           return g instanceof e ? g : new e(function(h) {
               h(g)
           }
           )
       }
       if (a)
           return a;
       b.prototype.m = function(g) {
           if (null == this.j) {
               this.j = [];
               var h = this;
               this.D(function() {
                   h.A()
               })
           }
           this.j.push(g)
       }
       ;
       var d = Es.setTimeout;
       b.prototype.D = function(g) {
           d(g, 0)
       }
       ;
       b.prototype.A = function() {
           for (; this.j && this.j.length; ) {
               var g = this.j;
               this.j = [];
               for (var h = 0; h < g.length; ++h) {
                   var k = g[h];
                   g[h] = null;
                   try {
                       k()
                   } catch (l) {
                       this.H(l)
                   }
               }
           }
           this.j = null
       }
       ;
       b.prototype.H = function(g) {
           this.D(function() {
               throw g;
           })
       }
       ;
       var e = function(g) {
           this.m = 0;
           this.D = void 0;
           this.j = [];
           this.I = !1;
           var h = this.H();
           try {
               g(h.resolve, h.reject)
           } catch (k) {
               h.reject(k)
           }
       };
       e.prototype.H = function() {
           function g(l) {
               return function(m) {
                   k || (k = !0,
                   l.call(h, m))
               }
           }
           var h = this
             , k = !1;
           return {
               resolve: g(this.T),
               reject: g(this.A)
           }
       }
       ;
       e.prototype.T = function(g) {
           if (g === this)
               this.A(new TypeError("A Promise cannot resolve to itself"));
           else if (g instanceof e)
               this.K(g);
           else {
               a: switch (typeof g) {
               case "object":
                   var h = null != g;
                   break a;
               case "function":
                   h = !0;
                   break a;
               default:
                   h = !1
               }
               h ? this.ta(g) : this.l(g)
           }
       }
       ;
       e.prototype.ta = function(g) {
           var h = void 0;
           try {
               h = g.then
           } catch (k) {
               this.A(k);
               return
           }
           "function" == typeof h ? this.N(h, g) : this.l(g)
       }
       ;
       e.prototype.A = function(g) {
           this.o(2, g)
       }
       ;
       e.prototype.l = function(g) {
           this.o(1, g)
       }
       ;
       e.prototype.o = function(g, h) {
           if (0 != this.m)
               throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
           this.m = g;
           this.D = h;
           2 === this.m && this.G();
           this.M()
       }
       ;
       e.prototype.G = function() {
           var g = this;
           d(function() {
               if (g.C()) {
                   var h = Es.console;
                   "undefined" !== typeof h && h.error(g.D)
               }
           }, 1)
       }
       ;
       e.prototype.C = function() {
           if (this.I)
               return !1;
           var g = Es.CustomEvent
             , h = Es.Event
             , k = Es.dispatchEvent;
           if ("undefined" === typeof k)
               return !0;
           "function" === typeof g ? g = new g("unhandledrejection",{
               cancelable: !0
           }) : "function" === typeof h ? g = new h("unhandledrejection",{
               cancelable: !0
           }) : (g = Es.document.createEvent("CustomEvent"),
           g.initCustomEvent("unhandledrejection", !1, !0, g));
           g.promise = this;
           g.reason = this.D;
           return k(g)
       }
       ;
       e.prototype.M = function() {
           if (null != this.j) {
               for (var g = 0; g < this.j.length; ++g)
                   f.m(this.j[g]);
               this.j = null
           }
       }
       ;
       var f = new b;
       e.prototype.K = function(g) {
           var h = this.H();
           g.Vb(h.resolve, h.reject)
       }
       ;
       e.prototype.N = function(g, h) {
           var k = this.H();
           try {
               g.call(h, k.resolve, k.reject)
           } catch (l) {
               k.reject(l)
           }
       }
       ;
       e.prototype.then = function(g, h) {
           function k(p, r) {
               return "function" == typeof p ? function(A) {
                   try {
                       l(p(A))
                   } catch (z) {
                       m(z)
                   }
               }
               : r
           }
           var l, m, n = new e(function(p, r) {
               l = p;
               m = r
           }
           );
           this.Vb(k(g, l), k(h, m));
           return n
       }
       ;
       e.prototype.catch = function(g) {
           return this.then(void 0, g)
       }
       ;
       e.prototype.Vb = function(g, h) {
           function k() {
               switch (l.m) {
               case 1:
                   g(l.D);
                   break;
               case 2:
                   h(l.D);
                   break;
               default:
                   throw Error("Unexpected state: " + l.m);
               }
           }
           var l = this;
           null == this.j ? f.m(k) : this.j.push(k);
           this.I = !0
       }
       ;
       e.resolve = c;
       e.reject = function(g) {
           return new e(function(h, k) {
               k(g)
           }
           )
       }
       ;
       e.race = function(g) {
           return new e(function(h, k) {
               for (var l = _.x(g), m = l.next(); !m.done; m = l.next())
                   c(m.value).Vb(h, k)
           }
           )
       }
       ;
       e.all = function(g) {
           var h = _.x(g)
             , k = h.next();
           return k.done ? c([]) : new e(function(l, m) {
               function n(A) {
                   return function(z) {
                       p[A] = z;
                       r--;
                       0 == r && l(p)
                   }
               }
               var p = []
                 , r = 0;
               do
                   p.push(void 0),
                   r++,
                   c(k.value).Vb(n(p.length - 1), m),
                   k = h.next();
               while (!k.done)
           }
           )
       }
       ;
       return e
   }, "es6");
   Hs("Object.setPrototypeOf", function(a) {
       return a || Ss
   }, "es6");
   Hs("WeakMap", function(a) {
       function b() {}
       function c(g) {
           var h = typeof g;
           return "object" === h && null !== g || "function" === h
       }
       if (function() {
           if (!a || !Object.seal)
               return !1;
           try {
               var g = Object.seal({})
                 , h = Object.seal({})
                 , k = new a([[g, 2], [h, 3]]);
               if (2 != k.get(g) || 3 != k.get(h))
                   return !1;
               k.delete(g);
               k.set(h, 4);
               return !k.has(g) && 4 == k.get(h)
           } catch (l) {
               return !1
           }
       }())
           return a;
       var d = "$jscomp_hidden_" + Math.random()
         , e = 0
         , f = function(g) {
           this.j = (e += Math.random() + 1).toString();
           if (g) {
               g = _.x(g);
               for (var h; !(h = g.next()).done; )
                   h = h.value,
                   this.set(h[0], h[1])
           }
       };
       f.prototype.set = function(g, h) {
           if (!c(g))
               throw Error("Invalid WeakMap key");
           if (!Ks(g, d)) {
               var k = new b;
               Cs(g, d, {
                   value: k
               })
           }
           if (!Ks(g, d))
               throw Error("WeakMap key fail: " + g);
           g[d][this.j] = h;
           return this
       }
       ;
       f.prototype.get = function(g) {
           return c(g) && Ks(g, d) ? g[d][this.j] : void 0
       }
       ;
       f.prototype.has = function(g) {
           return c(g) && Ks(g, d) && Ks(g[d], this.j)
       }
       ;
       f.prototype.delete = function(g) {
           return c(g) && Ks(g, d) && Ks(g[d], this.j) ? delete g[d][this.j] : !1
       }
       ;
       return f
   }, "es6");
   Hs("Map", function(a) {
       if (function() {
           if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal)
               return !1;
           try {
               var h = Object.seal({
                   x: 4
               })
                 , k = new a(_.x([[h, "s"]]));
               if ("s" != k.get(h) || 1 != k.size || k.get({
                   x: 4
               }) || k.set({
                   x: 4
               }, "t") != k || 2 != k.size)
                   return !1;
               var l = _.t(k, "entries").call(k)
                 , m = l.next();
               if (m.done || m.value[0] != h || "s" != m.value[1])
                   return !1;
               m = l.next();
               return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
           } catch (n) {
               return !1
           }
       }())
           return a;
       var b = new u.WeakMap
         , c = function(h) {
           this.m = {};
           this.j = f();
           this.size = 0;
           if (h) {
               h = _.x(h);
               for (var k; !(k = h.next()).done; )
                   k = k.value,
                   this.set(k[0], k[1])
           }
       };
       c.prototype.set = function(h, k) {
           h = 0 === h ? 0 : h;
           var l = d(this, h);
           l.list || (l.list = this.m[l.id] = []);
           l.pa ? l.pa.value = k : (l.pa = {
               next: this.j,
               Ua: this.j.Ua,
               head: this.j,
               key: h,
               value: k
           },
           l.list.push(l.pa),
           this.j.Ua.next = l.pa,
           this.j.Ua = l.pa,
           this.size++);
           return this
       }
       ;
       c.prototype.delete = function(h) {
           h = d(this, h);
           return h.pa && h.list ? (h.list.splice(h.index, 1),
           h.list.length || delete this.m[h.id],
           h.pa.Ua.next = h.pa.next,
           h.pa.next.Ua = h.pa.Ua,
           h.pa.head = null,
           this.size--,
           !0) : !1
       }
       ;
       c.prototype.clear = function() {
           this.m = {};
           this.j = this.j.Ua = f();
           this.size = 0
       }
       ;
       c.prototype.has = function(h) {
           return !!d(this, h).pa
       }
       ;
       c.prototype.get = function(h) {
           return (h = d(this, h).pa) && h.value
       }
       ;
       c.prototype.entries = function() {
           return e(this, function(h) {
               return [h.key, h.value]
           })
       }
       ;
       c.prototype.keys = function() {
           return e(this, function(h) {
               return h.key
           })
       }
       ;
       c.prototype.values = function() {
           return e(this, function(h) {
               return h.value
           })
       }
       ;
       c.prototype.forEach = function(h, k) {
           for (var l = _.t(this, "entries").call(this), m; !(m = l.next()).done; )
               m = m.value,
               h.call(k, m[1], m[0], this)
       }
       ;
       c.prototype[_.t(u.Symbol, "iterator")] = _.t(c.prototype, "entries");
       var d = function(h, k) {
           var l = k && typeof k;
           "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
           b.set(k, l)) : l = "p_" + k;
           var m = h.m[l];
           if (m && Ks(h.m, l))
               for (h = 0; h < m.length; h++) {
                   var n = m[h];
                   if (k !== k && n.key !== n.key || k === n.key)
                       return {
                           id: l,
                           list: m,
                           index: h,
                           pa: n
                       }
               }
           return {
               id: l,
               list: m,
               index: -1,
               pa: void 0
           }
       }
         , e = function(h, k) {
           var l = h.j;
           return Is(function() {
               if (l) {
                   for (; l.head != h.j; )
                       l = l.Ua;
                   for (; l.next != l.head; )
                       return l = l.next,
                       {
                           done: !1,
                           value: k(l)
                       };
                   l = null
               }
               return {
                   done: !0,
                   value: void 0
               }
           })
       }
         , f = function() {
           var h = {};
           return h.Ua = h.next = h.head = h
       }
         , g = 0;
       return c
   }, "es6");
   var bt = function(a, b, c) {
       if (null == a)
           throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
       if (b instanceof RegExp)
           throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
       return a + ""
   };
   Hs("String.prototype.endsWith", function(a) {
       return a ? a : function(b, c) {
           var d = bt(this, b, "endsWith");
           void 0 === c && (c = d.length);
           c = Math.max(0, Math.min(c | 0, d.length));
           for (var e = b.length; 0 < e && 0 < c; )
               if (d[--c] != b[--e])
                   return !1;
           return 0 >= e
       }
   }, "es6");
   var ct = function(a, b, c) {
       a instanceof String && (a = String(a));
       for (var d = a.length, e = 0; e < d; e++) {
           var f = a[e];
           if (b.call(c, f, e, a))
               return {
                   i: e,
                   de: f
               }
       }
       return {
           i: -1,
           de: void 0
       }
   };
   Hs("Array.prototype.find", function(a) {
       return a ? a : function(b, c) {
           return ct(this, b, c).de
       }
   }, "es6");
   Hs("Number.isFinite", function(a) {
       return a ? a : function(b) {
           return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
       }
   }, "es6");
   Hs("Number.isInteger", function(a) {
       return a ? a : function(b) {
           return _.t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
       }
   }, "es6");
   var dt = function(a, b) {
       a instanceof String && (a += "");
       var c = 0
         , d = !1
         , e = {
           next: function() {
               if (!d && c < a.length) {
                   var f = c++;
                   return {
                       value: b(f, a[f]),
                       done: !1
                   }
               }
               d = !0;
               return {
                   done: !0,
                   value: void 0
               }
           }
       };
       e[_.t(u.Symbol, "iterator")] = function() {
           return e
       }
       ;
       return e
   };
   Hs("Array.prototype.entries", function(a) {
       return a ? a : function() {
           return dt(this, function(b, c) {
               return [b, c]
           })
       }
   }, "es6");
   Hs("Array.prototype.keys", function(a) {
       return a ? a : function() {
           return dt(this, function(b) {
               return b
           })
       }
   }, "es6");
   Hs("Number.isNaN", function(a) {
       return a ? a : function(b) {
           return "number" === typeof b && isNaN(b)
       }
   }, "es6");
   Hs("Set", function(a) {
       if (function() {
           if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal)
               return !1;
           try {
               var c = Object.seal({
                   x: 4
               })
                 , d = new a(_.x([c]));
               if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                   x: 4
               }) != d || 2 != d.size)
                   return !1;
               var e = _.t(d, "entries").call(d)
                 , f = e.next();
               if (f.done || f.value[0] != c || f.value[1] != c)
                   return !1;
               f = e.next();
               return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
           } catch (g) {
               return !1
           }
       }())
           return a;
       var b = function(c) {
           this.j = new u.Map;
           if (c) {
               c = _.x(c);
               for (var d; !(d = c.next()).done; )
                   this.add(d.value)
           }
           this.size = this.j.size
       };
       b.prototype.add = function(c) {
           c = 0 === c ? 0 : c;
           this.j.set(c, c);
           this.size = this.j.size;
           return this
       }
       ;
       b.prototype.delete = function(c) {
           c = this.j.delete(c);
           this.size = this.j.size;
           return c
       }
       ;
       b.prototype.clear = function() {
           this.j.clear();
           this.size = 0
       }
       ;
       b.prototype.has = function(c) {
           return this.j.has(c)
       }
       ;
       b.prototype.entries = function() {
           return _.t(this.j, "entries").call(this.j)
       }
       ;
       b.prototype.values = function() {
           return _.t(this.j, "values").call(this.j)
       }
       ;
       b.prototype.keys = _.t(b.prototype, "values");
       b.prototype[_.t(u.Symbol, "iterator")] = _.t(b.prototype, "values");
       b.prototype.forEach = function(c, d) {
           var e = this;
           this.j.forEach(function(f) {
               return c.call(d, f, f, e)
           })
       }
       ;
       return b
   }, "es6");
   Hs("Array.from", function(a) {
       return a ? a : function(b, c, d) {
           c = null != c ? c : function(h) {
               return h
           }
           ;
           var e = []
             , f = "undefined" != typeof u.Symbol && _.t(u.Symbol, "iterator") && b[_.t(u.Symbol, "iterator")];
           if ("function" == typeof f) {
               b = f.call(b);
               for (var g = 0; !(f = b.next()).done; )
                   e.push(c.call(d, f.value, g++))
           } else
               for (f = b.length,
               g = 0; g < f; g++)
                   e.push(c.call(d, b[g], g));
           return e
       }
   }, "es6");
   Hs("Object.entries", function(a) {
       return a ? a : function(b) {
           var c = [], d;
           for (d in b)
               Ks(b, d) && c.push([d, b[d]]);
           return c
       }
   }, "es8");
   Hs("String.prototype.startsWith", function(a) {
       return a ? a : function(b, c) {
           var d = bt(this, b, "startsWith")
             , e = d.length
             , f = b.length;
           c = Math.max(0, Math.min(c | 0, d.length));
           for (var g = 0; g < f && c < e; )
               if (d[c++] != b[g++])
                   return !1;
           return g >= f
       }
   }, "es6");
   Hs("globalThis", function(a) {
       return a || Es
   }, "es_2020");
   Hs("Array.prototype.findIndex", function(a) {
       return a ? a : function(b, c) {
           return ct(this, b, c).i
       }
   }, "es6");
   Hs("Array.prototype.values", function(a) {
       return a ? a : function() {
           return dt(this, function(b, c) {
               return c
           })
       }
   }, "es8");
   Hs("Object.is", function(a) {
       return a ? a : function(b, c) {
           return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
       }
   }, "es6");
   Hs("Array.prototype.includes", function(a) {
       return a ? a : function(b, c) {
           var d = this;
           d instanceof String && (d = String(d));
           var e = d.length;
           c = c || 0;
           for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
               var f = d[c];
               if (f === b || _.t(Object, "is").call(Object, f, b))
                   return !0
           }
           return !1
       }
   }, "es7");
   Hs("String.prototype.includes", function(a) {
       return a ? a : function(b, c) {
           return -1 !== bt(this, b, "includes").indexOf(b, c || 0)
       }
   }, "es6");
   Hs("Object.values", function(a) {
       return a ? a : function(b) {
           var c = [], d;
           for (d in b)
               Ks(b, d) && c.push(b[d]);
           return c
       }
   }, "es8");
   Hs("Object.fromEntries", function(a) {
       return a ? a : function(b) {
           var c = {};
           if (!(_.t(u.Symbol, "iterator")in b))
               throw new TypeError("" + b + " is not iterable");
           b = b[_.t(u.Symbol, "iterator")].call(b);
           for (var d = b.next(); !d.done; d = b.next()) {
               d = d.value;
               if (Object(d) !== d)
                   throw new TypeError("iterable for fromEntries should yield objects");
               c[d[0]] = d[1]
           }
           return c
       }
   }, "es_2019");
   _.q = this || self;
   et = function(a) {
       var b = typeof a;
       return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
   }
   ;
   pa = function(a) {
       var b = et(a);
       return "array" == b || "object" == b && "number" == typeof a.length
   }
   ;
   _.ha = function(a) {
       var b = typeof a;
       return "object" == b && null != a || "function" == b
   }
   ;
   ia = function(a) {
       return Object.prototype.hasOwnProperty.call(a, ft) && a[ft] || (a[ft] = ++gt)
   }
   ;
   ft = "closure_uid_" + (1E9 * Math.random() >>> 0);
   gt = 0;
   ht = function(a, b, c) {
       return a.call.apply(a.bind, arguments)
   }
   ;
   it = function(a, b, c) {
       if (!a)
           throw Error();
       if (2 < arguments.length) {
           var d = Array.prototype.slice.call(arguments, 2);
           return function() {
               var e = Array.prototype.slice.call(arguments);
               Array.prototype.unshift.apply(e, d);
               return a.apply(b, e)
           }
       }
       return function() {
           return a.apply(b, arguments)
       }
   }
   ;
   _.jt = function(a, b, c) {
       Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.jt = ht : _.jt = it;
       return _.jt.apply(null, arguments)
   }
   ;
   _.kt = function(a, b) {
       var c = Array.prototype.slice.call(arguments, 1);
       return function() {
           var d = c.slice();
           d.push.apply(d, arguments);
           return a.apply(this, d)
       }
   }
   ;
   eg = function() {
       return Date.now()
   }
   ;
   var lt;
   var Rf = function(a, b) {
       this.j = a === mt && b || "";
       this.m = nt
   };
   Rf.prototype.Na = !0;
   Rf.prototype.Fa = function() {
       return this.j
   }
   ;
   var Sf = function(a) {
       return a instanceof Rf && a.constructor === Rf && a.m === nt ? a.j : "type_error:Const"
   }
     , nt = {}
     , mt = {};
   var jb = new Rf(mt,"https://tpc.googlesyndication.com/sodar/%{basename}.js");
   /*

SPDX-License-Identifier: Apache-2.0
*/
   var dd, pt;
   _.ca = function(a, b) {
       return Array.prototype.indexOf.call(a, b, void 0)
   }
   ;
   _.ot = function(a, b) {
       Array.prototype.forEach.call(a, b, void 0)
   }
   ;
   _.ig = function(a, b) {
       return Array.prototype.filter.call(a, b, void 0)
   }
   ;
   dd = function(a, b) {
       return Array.prototype.map.call(a, b, void 0)
   }
   ;
   pt = function(a, b) {
       return Array.prototype.reduce.call(a, b, 0)
   }
   ;
   _.wg = function(a, b) {
       return Array.prototype.some.call(a, b, void 0)
   }
   ;
   var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
   var Zf = {
       area: !0,
       base: !0,
       br: !0,
       col: !0,
       command: !0,
       embed: !0,
       hr: !0,
       img: !0,
       input: !0,
       keygen: !0,
       link: !0,
       meta: !0,
       param: !0,
       source: !0,
       track: !0,
       wbr: !0
   };
   var hp = {}
     , Qa = function(a, b) {
       this.j = b === hp ? a : "";
       this.Na = !0
   };
   Qa.prototype.toString = function() {
       return this.j.toString()
   }
   ;
   Qa.prototype.Fa = function() {
       return this.j.toString()
   }
   ;
   var Uf = function(a, b) {
       this.j = b === qt ? a : ""
   };
   Uf.prototype.toString = function() {
       return this.j + ""
   }
   ;
   Uf.prototype.Na = !0;
   Uf.prototype.Fa = function() {
       return this.j.toString()
   }
   ;
   var Ta = function(a) {
       return a instanceof Uf && a.constructor === Uf ? a.j : "type_error:TrustedResourceUrl"
   }
     , ib = function(a, b) {
       var c = Sf(a);
       if (!rt.test(c))
           throw Error("Invalid TrustedResourceUrl format: " + c);
       a = c.replace(st, function(d, e) {
           if (!Object.prototype.hasOwnProperty.call(b, e))
               throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
           d = b[e];
           return d instanceof Rf ? Sf(d) : encodeURIComponent(String(d))
       });
       return Kd(a)
   }
     , st = /%{(\w+)}/g
     , rt = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i")
     , tt = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
     , qt = {}
     , Kd = function(a) {
       return new Uf(a,qt)
   }
     , ut = function(a, b, c) {
       if (null == c)
           return b;
       if ("string" === typeof c)
           return c ? a + encodeURIComponent(c) : "";
       for (var d in c)
           if (Object.prototype.hasOwnProperty.call(c, d)) {
               var e = c[d];
               e = Array.isArray(e) ? e : [e];
               for (var f = 0; f < e.length; f++) {
                   var g = e[f];
                   null != g && (b || (b = a),
                   b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
               }
           }
       return b
   };
   var vt = function(a, b) {
       var c = a.length - b.length;
       return 0 <= c && a.indexOf(b, c) == c
   }
     , Kk = function(a) {
       return /^[\s\xa0]*$/.test(a)
   }
     , wt = function(a) {
       return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
   }
     , Yf = function(a) {
       if (!xt.test(a))
           return a;
       -1 != a.indexOf("&") && (a = a.replace(yt, "&amp;"));
       -1 != a.indexOf("<") && (a = a.replace(zt, "&lt;"));
       -1 != a.indexOf(">") && (a = a.replace(At, "&gt;"));
       -1 != a.indexOf('"') && (a = a.replace(Bt, "&quot;"));
       -1 != a.indexOf("'") && (a = a.replace(Ct, "&#39;"));
       -1 != a.indexOf("\x00") && (a = a.replace(Dt, "&#0;"));
       return a
   }
     , yt = /&/g
     , zt = /</g
     , At = />/g
     , Bt = /"/g
     , Ct = /'/g
     , Dt = /\x00/g
     , xt = /[\x00&<>"']/
     , fs = function(a, b) {
       var c = 0;
       a = wt(String(a)).split(".");
       b = wt(String(b)).split(".");
       for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
           var f = a[e] || ""
             , g = b[e] || "";
           do {
               f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
               g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
               if (0 == f[0].length && 0 == g[0].length)
                   break;
               c = Et(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Et(0 == f[2].length, 0 == g[2].length) || Et(f[2], g[2]);
               f = f[3];
               g = g[3]
           } while (0 == c)
       }
       return c
   }
     , Et = function(a, b) {
       return a < b ? -1 : a > b ? 1 : 0
   };
   var Ja = function(a, b) {
       this.j = b === Ft ? a : ""
   }, Ka, Wf, Vf, Ft;
   Ja.prototype.toString = function() {
       return this.j.toString()
   }
   ;
   Ja.prototype.Na = !0;
   Ja.prototype.Fa = function() {
       return this.j.toString()
   }
   ;
   Ka = function(a) {
       return a instanceof Ja && a.constructor === Ja ? a.j : "type_error:SafeUrl"
   }
   ;
   Wf = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
   Vf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
   Ft = {};
   _.Od = function(a) {
       return new Ja(a,Ft)
   }
   ;
   _.Xf = _.Od("about:invalid#zClosurez");
   var Bf = {}
     , Af = function(a, b) {
       this.Yc = b === Bf ? a : "";
       this.Na = !0
   };
   Af.prototype.Fa = function() {
       return this.Yc
   }
   ;
   Af.prototype.toString = function() {
       return this.Yc.toString()
   }
   ;
   var Gt = {}
     , Ht = function(a, b) {
       this.j = b === Gt ? a : "";
       this.Na = !0
   };
   Ht.prototype.Fa = function() {
       return this.j.toString()
   }
   ;
   Ht.prototype.toString = function() {
       return this.j.toString()
   }
   ;
   var Va = function(a) {
       return a instanceof Ht && a.constructor === Ht ? a.j : "type_error:SafeHtml"
   }
     , It = function(a) {
       return a instanceof Ht ? a : Df(Yf("object" == typeof a && a.Na ? a.Fa() : String(a)))
   }
     , Jt = function(a) {
       var b = It(zf)
         , c = []
         , d = function(e) {
           Array.isArray(e) ? e.forEach(d) : (e = It(e),
           c.push(Va(e).toString()))
       };
       a.forEach(d);
       return Df(c.join(Va(b).toString()))
   }
     , $f = function(a) {
       return Jt(Array.prototype.slice.call(arguments))
   }
     , Df = function(a) {
       return new Ht(a,Gt)
   }
     , Pf = /^[a-zA-Z0-9-]+$/
     , Tf = {
       action: !0,
       cite: !0,
       data: !0,
       formaction: !0,
       href: !0,
       manifest: !0,
       poster: !0,
       src: !0
   }
     , Qf = {
       APPLET: !0,
       BASE: !0,
       EMBED: !0,
       IFRAME: !0,
       LINK: !0,
       MATH: !0,
       META: !0,
       OBJECT: !0,
       SCRIPT: !0,
       STYLE: !0,
       SVG: !0,
       TEMPLATE: !0
   }
     , zf = new Ht(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "",Gt);
   var Kt;
   try {
       new URL("s://g"),
       Kt = !0
   } catch (a) {
       Kt = !1
   }
   var La = Kt;
   var Lt = {
       fg: 0,
       Zf: 1,
       bg: 2,
       0: "HTML_FORMATTED_CONTENT",
       1: "EMBEDDED_INTERNAL_CONTENT",
       2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
   }
     , Mt = function(a, b) {
       b = Error.call(this, a + " cannot be used with intent " + Lt[b]);
       this.message = b.message;
       "stack"in b && (this.stack = b.stack);
       this.type = a;
       this.name = "TypeCannotBeUsedWithIntentError"
   };
   _.O(Mt, Error);
   var Nt, Ot, Bi, Qt;
   Nt = function() {
       return !0
   }
   ;
   Ot = function(a) {
       return function() {
           return !a.apply(this, arguments)
       }
   }
   ;
   Bi = function(a) {
       var b = !1, c;
       return function() {
           b || (c = a(),
           b = !0);
           return c
       }
   }
   ;
   _.Pt = function(a) {
       var b = a;
       return function() {
           if (b) {
               var c = b;
               b = null;
               c()
           }
       }
   }
   ;
   Qt = function(a, b, c) {
       var d = 0
         , e = !1
         , f = []
         , g = function() {
           d = 0;
           e && (e = !1,
           h())
       }
         , h = function() {
           d = _.q.setTimeout(g, b);
           var k = f;
           f = [];
           a.apply(c, k)
       };
       return function(k) {
           f = arguments;
           d ? e = !0 : h()
       }
   }
   ;
   var Rt, Xa;
   Rt = {
       passive: !0
   };
   Xa = Bi(function() {
       var a = !1;
       try {
           var b = Object.defineProperty({}, "passive", {
               get: function() {
                   a = !0
               }
           });
           _.q.addEventListener("test", null, b)
       } catch (c) {}
       return a
   });
   _.Za = function(a, b, c, d) {
       return a.addEventListener ? (a.addEventListener(b, c, Ya(d)),
       !0) : !1
   }
   ;
   _.fe = function(a, b, c, d) {
       return a.removeEventListener ? (a.removeEventListener(b, c, Ya(d)),
       !0) : !1
   }
   ;
   var cb = function(a) {
       return new u.Promise(function(b, c) {
           var d = new XMLHttpRequest;
           d.onreadystatechange = function() {
               d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
           }
           ;
           d.open("GET", a, !0);
           d.send()
       }
       )
   };
   var St = {};
   var ob, lb = "undefined" !== typeof TextEncoder;
   var Tt = function(a) {
       Tt[" "](a);
       return a
   };
   Tt[" "] = function() {}
   ;
   var Ut = function(a, b) {
       try {
           return Tt(a[b]),
           !0
       } catch (c) {}
       return !1
   }
     , Vt = function(a, b, c, d) {
       d = d ? d(b) : b;
       return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
   };
   var Wt, Yt, Zt, $t, au, bu;
   Wt = Ca("Opera");
   _.Xt = Ca("Trident") || Ca("MSIE");
   Yt = Ca("Edge");
   Zt = Ca("Gecko") && !(-1 != Ba().toLowerCase().indexOf("webkit") && !Ca("Edge")) && !(Ca("Trident") || Ca("MSIE")) && !Ca("Edge");
   $t = -1 != Ba().toLowerCase().indexOf("webkit") && !Ca("Edge");
   au = function() {
       var a = _.q.document;
       return a ? a.documentMode : void 0
   }
   ;
   a: {
       var cu = ""
         , du = function() {
           var a = Ba();
           if (Zt)
               return /rv:([^\);]+)(\)|;)/.exec(a);
           if (Yt)
               return /Edge\/([\d\.]+)/.exec(a);
           if (_.Xt)
               return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
           if ($t)
               return /WebKit\/(\S+)/.exec(a);
           if (Wt)
               return /(?:Version)[ \/]?(\S+)/.exec(a)
       }();
       du && (cu = du ? du[1] : "");
       if (_.Xt) {
           var eu = au();
           if (null != eu && eu > parseFloat(cu)) {
               bu = String(eu);
               break a
           }
       }
       bu = cu
   }
   var fu = bu, gu = {}, hu = function(a) {
       return Vt(gu, a, function() {
           return 0 <= fs(fu, a)
       })
   }, iu;
   if (_.q.document && _.Xt) {
       var ju = au();
       iu = ju ? ju : parseInt(fu, 10) || void 0
   } else
       iu = void 0;
   var ku = iu;
   !Ca("Android") || Fa();
   Fa();
   Ga();
   var lu = {}
     , mu = null
     , nu = Zt || $t || "function" == typeof _.q.btoa
     , mc = function(a, b) {
       void 0 === b && (b = 0);
       ou();
       b = lu[b];
       for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
           var g = a[e]
             , h = a[e + 1]
             , k = a[e + 2]
             , l = b[g >> 2];
           g = b[(g & 3) << 4 | h >> 4];
           h = b[(h & 15) << 2 | k >> 6];
           k = b[k & 63];
           c[f++] = l + g + h + k
       }
       l = 0;
       k = d;
       switch (a.length - e) {
       case 2:
           l = a[e + 1],
           k = b[(l & 15) << 2] || d;
       case 1:
           a = a[e],
           c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
       }
       return c.join("")
   }
     , pu = function(a, b) {
       if (nu && !b)
           a = _.q.btoa(a);
       else {
           for (var c = [], d = 0, e = 0; e < a.length; e++) {
               var f = a.charCodeAt(e);
               255 < f && (c[d++] = f & 255,
               f >>= 8);
               c[d++] = f
           }
           a = mc(c, b)
       }
       return a
   }
     , Bq = function(a) {
       var b = "";
       qu(a, function(c) {
           b += String.fromCharCode(c)
       });
       return b
   }
     , rb = function(a) {
       var b = a.length
         , c = 3 * b / 4;
       c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
       var d = new Uint8Array(c)
         , e = 0;
       qu(a, function(f) {
           d[e++] = f
       });
       return e !== c ? d.subarray(0, e) : d
   }
     , qu = function(a, b) {
       function c(k) {
           for (; d < a.length; ) {
               var l = a.charAt(d++)
                 , m = mu[l];
               if (null != m)
                   return m;
               if (!Kk(l))
                   throw Error("Unknown base64 encoding at char: " + l);
           }
           return k
       }
       ou();
       for (var d = 0; ; ) {
           var e = c(-1)
             , f = c(0)
             , g = c(64)
             , h = c(64);
           if (64 === h && -1 === e)
               break;
           b(e << 2 | f >> 4);
           64 != g && (b(f << 4 & 240 | g >> 2),
           64 != h && b(g << 6 & 192 | h))
       }
   }
     , ou = function() {
       if (!mu) {
           mu = {};
           for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
               var d = a.concat(b[c].split(""));
               lu[c] = d;
               for (var e = 0; e < d.length; e++) {
                   var f = d[e];
                   void 0 === mu[f] && (mu[f] = e)
               }
           }
       }
   };
   var tb = "undefined" !== typeof Uint8Array, Bj, xb = {};
   var ru, Tb = function(a, b) {
       yb(b);
       this.tb = a;
       if (null != a && 0 === a.length)
           throw Error("ByteString should be constructed with non-empty values");
   }, Vb = function() {
       return ru || (ru = new Tb(null,xb))
   }, nc = function(a) {
       var b = a.tb;
       b = null == b || "string" === typeof b ? b : tb && b instanceof Uint8Array ? mc(b) : null;
       return null == b ? "" : a.tb = b
   };
   Tb.prototype.isEmpty = function() {
       return null == this.tb
   }
   ;
   var Aj = function(a) {
       yb(xb);
       var b = sb(a.tb);
       return null == b ? b : a.tb = b
   };
   var zb = "function" === typeof u.Symbol && "symbol" === typeof (0,
   u.Symbol)() ? (0,
   u.Symbol)(void 0) : void 0;
   var su, zc = Object.freeze(Fb([])), Fc = function(a) {
       if (Ob(a))
           throw Error("Cannot mutate an immutable Message");
   }, tu = "undefined" != typeof u.Symbol && "undefined" != typeof u.Symbol.hasInstance;
   var kc = function(a, b, c, d) {
       c = void 0 === c ? bc : c;
       d = void 0 === d ? cc : d;
       this.j = Kb(a);
       this.H = (this.m = b) && c === bc ? ac : c;
       this.l = d;
       this.map = {};
       this.D = !1;
       for (a = this.size = 0; a < this.j.length; a++)
           b = this.j[a],
           c = b[0].toString(),
           d = this.map[c],
           this.map[c] = b,
           void 0 === d && this.size++
   }
     , uu = function(a) {
       if (Gb(a.j))
           throw Error("Cannot mutate an immutable Map");
   }
     , ic = function(a) {
       if (!a.D) {
           var b = vu(a);
           b.sort();
           for (var c = 0; c < b.length; c++)
               a.j[c] = a.map[b[c]];
           b.length < a.j.length && (a.j.length = b.length);
           a.D = !0;
           a.size = a.j.length
       }
       return a.j
   }
     , xc = function(a, b) {
       var c = Ib([]);
       c = new kc(c,a.m,a.H,a.l);
       for (var d in a.map)
           if (a.map.hasOwnProperty(d)) {
               var e = wu(a, d)
                 , f = xu(a, e);
               a.m && !Ob(f) && (f = b(f));
               c.set(e[0], f)
           }
       return c
   };
   ba = kc.prototype;
   ba.clear = function() {
       uu(this);
       this.map = {};
       this.size = this.j.length = 0;
       this.D = !0
   }
   ;
   ba.delete = function(a) {
       uu(this);
       a = a.toString();
       return this.map.hasOwnProperty(a) ? (delete this.map[a],
       this.size--,
       this.D = !1,
       !0) : !1
   }
   ;
   ba.entries = function() {
       var a = []
         , b = vu(this);
       b.sort();
       for (var c = 0; c < b.length; c++) {
           var d = wu(this, b[c]);
           a.push([d[0], xu(this, d)])
       }
       return new yu(a)
   }
   ;
   ba.keys = function() {
       var a = []
         , b = vu(this);
       b.sort();
       for (var c = 0; c < b.length; c++)
           a.push(this.map[b[c]][0]);
       return new yu(a)
   }
   ;
   ba.values = function() {
       var a = []
         , b = vu(this);
       b.sort();
       for (var c = 0; c < b.length; c++) {
           var d = wu(this, b[c]);
           a.push(xu(this, d))
       }
       return new yu(a)
   }
   ;
   ba.forEach = function(a, b) {
       var c = vu(this);
       c.sort();
       for (var d = 0; d < c.length; d++) {
           var e = wu(this, c[d]);
           a.call(b, xu(this, e), e[0], this)
       }
   }
   ;
   ba.set = function(a, b) {
       uu(this);
       var c = a.toString()
         , d = this.map[c];
       d ? (c = this.H(b, this.m, Gb(this.j), this.A),
       d[1] = c) : (d = [a, this.H(b, this.m, Gb(this.j), this.A)],
       this.map[c] = d,
       this.j.push(d),
       this.D = !1,
       this.size++);
       return this
   }
   ;
   var wu = function(a, b) {
       if ((b = a.map[b]) && a.m) {
           var c = b[1];
           Array.isArray(c) && Cb(a.j) & 16 && Ib(c)
       }
       return b
   }
     , xu = function(a, b) {
       a = a.H(b[1], a.m, Gb(a.j), a.A);
       a !== b[1] && (b[1] = a);
       return a
   };
   kc.prototype.get = function(a) {
       return (a = wu(this, a.toString())) ? xu(this, a) : void 0
   }
   ;
   kc.prototype.has = function(a) {
       return a.toString()in this.map
   }
   ;
   var vu = function(a) {
       a = a.map;
       var b = [], c;
       for (c in a)
           Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
       return b
   };
   kc.prototype[_.t(u.Symbol, "iterator")] = function() {
       return _.t(this, "entries").call(this)
   }
   ;
   var yu = function(a) {
       this.m = 0;
       this.j = a
   };
   yu.prototype.next = function() {
       return this.m < this.j.length ? {
           done: !1,
           value: this.j[this.m++]
       } : {
           done: !0,
           value: void 0
       }
   }
   ;
   yu.prototype[_.t(u.Symbol, "iterator")] = function() {
       return this
   }
   ;
   var gd = function(a) {
       return a.m || (a.m = a.Y[a.H + a.D] = {})
   }, v = function(a, b, c) {
       return -1 === b ? null : b >= a.H ? a.m ? a.m[b] : void 0 : (void 0 === c ? 0 : c) && a.m && (c = a.m[b],
       null != c) ? c : a.Y[b + a.D]
   }, w = function(a, b, c, d, e) {
       d = void 0 === d ? !1 : d;
       (void 0 === e ? 0 : e) || Fc(a);
       a.l && (a.l = void 0);
       if (b >= a.H || d)
           return gd(a)[b] = c,
           a;
       void 0 !== a.m && a.H >= a.Y.length ? (d = a.Y.length - 1,
       e = b + a.D,
       e >= d ? (a.Y[d] = void 0,
       a.Y[e] = c,
       a.Y.push(a.m)) : a.Y[e] = c) : a.Y[b + a.D] = c;
       void 0 !== a.m && b in a.m && delete a.m[b];
       return a
   }, nl = function(a, b) {
       return null != v(a, b)
   }, hi = function(a, b) {
       return Array.isArray(v(a, b))
   }, rm = function(a, b, c) {
       return Ac(a, b, 0, void 0 === c ? !1 : c)
   }, Pe = function(a, b) {
       a = v(a, b);
       return null == a ? a : +a
   }, H = function(a, b) {
       a = v(a, b);
       return null == a ? a : !!a
   }, zj = function(a, b) {
       var c = v(a, b);
       if (null == c)
           return null;
       if (c instanceof Tb)
           return c;
       (c = Wb(c)) && w(a, b, c, void 0, !0);
       return c
   }, oe = function(a, b, c) {
       a = v(a, b);
       return null == a ? c : a
   }, pr = function(a, b, c) {
       a = H(a, b);
       return null == a ? void 0 === c ? !1 : c : a
   }, Dc, Kg = function(a, b, c) {
       null == c ? c = zc : Fb(c);
       return w(a, b, c)
   }, Gc = function(a, b, c) {
       return w(a, b, void 0, !1, c)
   }, fh = function(a, b, c, d) {
       Fc(a);
       (c = Jc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0),
       w(a, c));
       return w(a, b, d)
   }, Jc = function(a, b) {
       for (var c = 0, d = 0; d < b.length; d++) {
           var e = b[d];
           null != v(a, e) && (0 !== c && Gc(a, c, !0),
           c = e)
       }
       return c
   }, rq = function(a, b, c) {
       Fc(a);
       a.j || (a.j = {});
       var d = a.j[c];
       if (d)
           return b = d.sb(),
           b !== d && (w(a, c, b.Y),
           a.j[c] = b),
           b;
       d = v(a, c);
       b = Zb(d, b, !0).sb();
       d !== b.Y && w(a, c, b.Y);
       return a.j[c] = b
   }, zu = (0,
   u.Symbol)(void 0), Au = function(a, b, c, d) {
       a.j || (a.j = {});
       var e = a.j[c];
       if (e)
           return e;
       if (b = Zb(v(a, c, d), b))
           a.j[c] = b,
           Ab(b.Y, Cb(a.Y) & -33);
       return b
   }, tq = function(a, b, c) {
       (a = Au(a, b, c, !1)) ? b = a : b = (a = b[zu]) ? a : b[zu] = (new b).M(St);
       return b
   }, Pc = function(a, b, c, d) {
       d = void 0 === d ? !1 : d;
       b = Au(a, b, c, d);
       if (null == b)
           return b;
       Ob(b) && !Ob(a) && (b = b.sb(),
       w(a, c, b.Y, d),
       a.j[c] = b);
       return b
   }, Bu = function(a, b, c, d, e) {
       e = void 0 === e ? !0 : e;
       a.j || (a.j = {});
       var f = a.j[c];
       d = Ac(a, c, 2, d);
       var g = !!(Cb(a.Y) & 16)
         , h = Gb(d);
       h = Ob(a) || h;
       if (!f) {
           f = [];
           for (var k = h, l = 0; l < d.length; l++) {
               var m = d[l];
               k = k || Gb(m);
               m = Zb(m, b, !1, g);
               void 0 !== m && (f.push(m),
               h && Hb(m.Y))
           }
           a.j[c] = f;
           Lb(d, !k)
       }
       b = h || e;
       e = Gb(f);
       b && !e && (Object.isFrozen(f) && (a.j[c] = f = f.slice()),
       Hb(f),
       Object.freeze(f));
       !b && e && (a.j[c] = f = f.slice());
       return f
   }, Nc = function(a, b, c, d) {
       d = void 0 === d ? !1 : d;
       var e = Ob(a);
       b = Bu(a, b, c, d, e);
       a = rm(a, c, d);
       if (!(c = e) && (c = a)) {
           if (!a)
               throw Error("cannot check mutability state of non-array");
           c = !(Cb(a) & 8)
       }
       if (c) {
           for (c = 0; c < b.length; c++)
               (d = b[c]) && Ob(d) && !e && (b[c] = b[c].sb(),
               a[c] = b[c].Y);
           Lb(a, !0)
       }
       return b
   }, Zc = function(a, b, c, d) {
       Fc(a);
       a.j || (a.j = {});
       var e = null == c ? c = void 0 : c.Y;
       a.j[b] = c;
       return w(a, b, e, d)
   }, Pg = function(a, b, c, d) {
       Fc(a);
       a.j || (a.j = {});
       var e = null != d ? d.Y : d = void 0;
       a.j[b] = d;
       return fh(a, b, c, e)
   }, Yc = function(a, b, c, d) {
       Fc(a);
       if (null != c) {
           var e = Fb([]);
           for (var f = !1, g = 0; g < c.length; g++)
               e[g] = c[g].Y,
               f = f || Gb(e[g]);
           a.j || (a.j = {});
           a.j[b] = c;
           Lb(e, !f)
       } else
           a.j && (a.j[b] = void 0),
           e = zc;
       return w(a, b, e, d)
   }, Cu = function(a, b, c, d) {
       Fc(a);
       var e = Bu(a, c, b, void 0, !1);
       c = null != d ? d : new c;
       a = Ac(a, b, 2);
       e.push(c);
       a.push(c.Y);
       Ob(c) && Lb(a, !1);
       return c
   }, Qk = function(a, b, c, d) {
       Cu(a, b, c, d);
       return a
   }, pe = function(a, b) {
       return oe(a, b, 0)
   }, Cj = function(a, b) {
       return oe(a, b, 0)
   }, Eu = function(a) {
       return Cj(a, Kc(a, Du, 3))
   }, Ro = function(a, b) {
       return oe(a, b, "")
   }, Fu = function(a) {
       return Ro(a, Kc(a, Du, 2))
   }, Mo = function(a, b, c, d) {
       return Pc(a, b, Kc(a, d, c))
   }, Gu = function(a, b) {
       a = v(a, b);
       return null == a ? void 0 : a
   }, En = function(a, b) {
       a = H(a, b);
       return null == a ? void 0 : a
   };
   var bd = function(a, b, c) {
       a || (a = Hu);
       Hu = null;
       var d = this.constructor.j || 0
         , e = 0 < d
         , f = this.constructor.messageId;
       a ? Cb(a) & 16 && Kb(a) : (a = f ? [f] : [],
       Ab(a, 48));
       e && 0 < a.length && Rb(a[a.length - 1]) && "g"in a[a.length - 1] && (d = 0);
       this.D = (f ? 0 : -1) - d;
       this.j = void 0;
       this.Y = a;
       a: {
           f = this.Y.length;
           d = f - 1;
           if (f && (f = this.Y[d],
           Rb(f))) {
               this.m = f;
               b = _.t(Object, "keys").call(Object, f);
               0 < b.length && Array.prototype.every.call(b, isNaN, void 0) ? this.H = Number.MAX_VALUE : this.H = d - this.D;
               break a
           }
           void 0 !== b && -1 < b ? (this.H = Math.max(b, d + 1 - this.D),
           this.m = void 0) : this.H = Number.MAX_VALUE
       }
       if (!e && this.m && "g"in this.m)
           throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
       if (c)
           for (e = 0; e < c.length; e++)
               b = c[e],
               b < this.H ? (b += this.D,
               (d = this.Y[b]) ? Array.isArray(d) && Fb(d) : this.Y[b] = zc) : (d = gd(this),
               (f = d[b]) ? Array.isArray(f) && Fb(f) : d[b] = zc)
   };
   bd.prototype.toJSON = function() {
       var a = this.Y;
       return su ? a : qc(a, sc, tc)
   }
   ;
   bd.prototype.aa = function() {
       su = !0;
       try {
           return JSON.stringify(this.toJSON(), Lc)
       } finally {
           su = !1
       }
   }
   ;
   var he = function(a, b) {
       if (null == b || "" == b)
           return new a;
       b = JSON.parse(b);
       if (!Array.isArray(b))
           throw Error("Expected to deserialize an Array but got " + et(b) + ": " + b);
       Hu = b;
       Ib(b);
       a = new a(b);
       Hu = null;
       return a
   }, vc = function(a) {
       var b = qc(a.Y, yc, Mb);
       Ib(b);
       Hu = b;
       b = new a.constructor(b);
       Hu = null;
       Oc(b, a);
       return b
   }, Hu;
   var Rc = 0
     , Sc = 0
     , Wc = "function" === typeof BigInt;
   var Iu = function(a, b) {
       this.m = a >>> 0;
       this.j = b >>> 0
   }, Ku = function(a) {
       if (!a)
           return Ju || (Ju = new Iu(0,0));
       if (!/^\d+$/.test(a))
           return null;
       Xc(a);
       return new Iu(Rc,Sc)
   }, Ju, Lu = function(a, b) {
       this.m = a >>> 0;
       this.j = b >>> 0
   }, Nu = function(a) {
       if (!a)
           return Mu || (Mu = new Lu(0,0));
       if (!/^-?\d+$/.test(a))
           return null;
       Xc(a);
       return new Lu(Rc,Sc)
   }, Mu;
   var Ou = function() {
       this.j = []
   };
   Ou.prototype.length = function() {
       return this.j.length
   }
   ;
   Ou.prototype.end = function() {
       var a = this.j;
       this.j = [];
       return a
   }
   ;
   var Pu = function(a, b, c) {
       for (; 0 < c || 127 < b; )
           a.j.push(b & 127 | 128),
           b = (b >>> 7 | c << 25) >>> 0,
           c >>>= 7;
       a.j.push(b)
   }
     , Qu = function(a, b) {
       for (; 127 < b; )
           a.j.push(b & 127 | 128),
           b >>>= 7;
       a.j.push(b)
   }
     , Ru = function(a, b) {
       if (0 <= b)
           Qu(a, b);
       else {
           for (var c = 0; 9 > c; c++)
               a.j.push(b & 127 | 128),
               b >>= 7;
           a.j.push(1)
       }
   };
   var Su = function() {
       this.D = [];
       this.m = 0;
       this.j = new Ou
   }
     , Tu = function(a, b) {
       0 !== b.length && (a.D.push(b),
       a.m += b.length)
   }
     , Uu = function(a, b) {
       Qu(a.j, 8 * b + 2);
       b = a.j.end();
       Tu(a, b);
       b.push(a.m);
       return b
   }
     , Vu = function(a, b) {
       var c = b.pop();
       for (c = a.m + a.j.length() - c; 127 < c; )
           b.push(c & 127 | 128),
           c >>>= 7,
           a.m++;
       b.push(c);
       a.m++
   }
     , kd = function(a, b) {
       if (b = b.o) {
           Tu(a, a.j.end());
           for (var c = 0; c < b.length; c++)
               Tu(a, Aj(b[c]) || Bj || (Bj = new Uint8Array(0)))
       }
   }
     , Wu = function(a, b, c) {
       Qu(a.j, 8 * b + 2);
       Qu(a.j, c.length);
       Tu(a, a.j.end());
       Tu(a, c)
   };
   var Xu = function() {
       bd.apply(this, arguments)
   };
   _.O(Xu, bd);
   Xu.prototype.M = function() {
       throw Error("unimplemented");
   }
   ;
   Xu.prototype.sb = function() {
       return this
   }
   ;
   if (tu) {
       var Yu = {};
       Object.defineProperties(Xu, (Yu[u.Symbol.hasInstance] = Yb(function() {
           throw Error(void 0);
       }),
       Yu))
   }
   ;var qd = (0,
   u.Symbol)()
     , nd = (0,
   u.Symbol)()
     , md = (0,
   u.Symbol)()
     , bn = function(a, b) {
       var c = new Su;
       sd(a, c, rd(b));
       Tu(c, c.j.end());
       a = new Uint8Array(c.m);
       b = c.D;
       for (var d = b.length, e = 0, f = 0; f < d; f++) {
           var g = b[f];
           a.set(g, e);
           e += g.length
       }
       c.D = [a];
       return a
   }
     , Zu = xd(function(a, b, c) {
       if (5 !== a.j())
           return !1;
       w(b, c, a.l());
       return !0
   }, function(a, b, c) {
       b = Pe(b, c);
       if (null != b) {
           Qu(a.j, 8 * c + 5);
           a = a.j;
           var d = +b;
           0 === d ? 0 < 1 / d ? Rc = Sc = 0 : (Sc = 0,
           Rc = 2147483648) : isNaN(d) ? (Sc = 0,
           Rc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d,
           3.4028234663852886E38 < d ? (Sc = 0,
           Rc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)),
           Sc = 0,
           Rc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2),
           d *= Math.pow(2, -b),
           d = Math.round(8388608 * d),
           16777216 <= d && ++b,
           Sc = 0,
           Rc = (c | b + 127 << 23 | d & 8388607) >>> 0));
           c = Rc;
           a.j.push(c >>> 0 & 255);
           a.j.push(c >>> 8 & 255);
           a.j.push(c >>> 16 & 255);
           a.j.push(c >>> 24 & 255)
       }
   })
     , $u = xd(function(a, b, c) {
       if (0 !== a.j())
           return !1;
       w(b, c, a.o());
       return !0
   }, function(a, b, c) {
       b = v(b, c);
       null != b && ("string" === typeof b && Nu(b),
       null != b && (Qu(a.j, 8 * c),
       "number" === typeof b ? (a = a.j,
       Tc(b),
       Pu(a, Rc, Sc)) : (c = Nu(b),
       Pu(a.j, c.m, c.j))))
   })
     , av = xd(function(a, b, c) {
       if (0 !== a.j())
           return !1;
       w(b, c, a.M());
       return !0
   }, function(a, b, c) {
       b = v(b, c);
       null != b && ("string" === typeof b && Ku(b),
       null != b && (Qu(a.j, 8 * c),
       "number" === typeof b ? (a = a.j,
       Tc(b),
       Pu(a, Rc, Sc)) : (c = Ku(b),
       Pu(a.j, c.m, c.j))))
   })
     , bv = xd(function(a, b, c) {
       if (0 !== a.j())
           return !1;
       w(b, c, a.I());
       return !0
   }, function(a, b, c) {
       b = v(b, c);
       null != b && null != b && (Qu(a.j, 8 * c),
       Ru(a.j, b))
   })
     , cv = xd(function(a, b, c) {
       if (0 !== a.j())
           return !1;
       w(b, c, a.H());
       return !0
   }, function(a, b, c) {
       b = H(b, c);
       null != b && (Qu(a.j, 8 * c),
       a.j.j.push(b ? 1 : 0))
   })
     , dv = xd(function(a, b, c) {
       if (2 !== a.j())
           return !1;
       w(b, c, a.D());
       return !0
   }, function(a, b, c) {
       b = v(b, c);
       null != b && Wu(a, c, pb(b))
   })
     , ev = xd(function(a, b, c) {
       if (2 !== a.j())
           return !1;
       a = a.D();
       Ic(b, c, a);
       return !0
   }, function(a, b, c) {
       b = rm(b, c);
       if (null != b)
           for (var d = 0; d < b.length; d++) {
               var e = b[d];
               null != e && Wu(a, c, pb(e))
           }
   })
     , fv = xd(function(a, b, c, d, e) {
       if (2 !== a.j())
           return !1;
       a.m(rq(b, d, c), e);
       return !0
   }, function(a, b, c, d, e) {
       b = Pc(b, d, c);
       null != b && (c = Uu(a, c),
       e(b, a),
       Vu(a, c))
   })
     , gv = xd(function(a, b, c, d, e) {
       if (2 !== a.j())
           return !1;
       a.m(Cu(b, c, d), e);
       return !0
   }, function(a, b, c, d, e) {
       b = Nc(b, d, c);
       if (null != b)
           for (d = 0; d < b.length; d++) {
               var f = Uu(a, c);
               e(b[d], a);
               Vu(a, f)
           }
   })
     , hv = xd(function(a, b, c) {
       if (0 !== a.j())
           return !1;
       w(b, c, a.A());
       return !0
   }, function(a, b, c) {
       b = v(b, c);
       null != b && (b = parseInt(b, 10),
       Qu(a.j, 8 * c),
       Ru(a.j, b))
   });
   var B = {
       eg: function() {},
       Ng: function() {
           return ""
       },
       Xf: function() {}
   };
   B.Ma = yd;
   var iv = yd(function(a) {
       return null !== a && void 0 !== a
   }, "exists");
   B.assert = function() {}
   ;
   B.qa = function(a) {
       return a
   }
   ;
   var zd = void 0;
   B.ah = Ad;
   B.eh = Bd;
   B.Ig = function() {}
   ;
   B.Jg = function(a) {
       return a
   }
   ;
   B.Rd = Cd;
   B.gh = function(a, b) {
       Cd(a, b);
       return a
   }
   ;
   B.Hg = function() {}
   ;
   B.J = function(a) {
       return a
   }
   ;
   B.bh = function(a, b) {
       Ad(a, iv, b)
   }
   ;
   B.fh = function(a, b) {
       return Bd(a, iv, b)
   }
   ;
   B.Mg = function(a, b) {
       return a(b)
   }
   ;
   B.functionName = function(a) {
       var b = a.name;
       b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
       return b
   }
   ;
   B.Vg = function(a) {
       Cd(!zd);
       zd = function() {
           var b = "function" === typeof a ? a() : a;
           zd = void 0;
           return b
       }
   }
   ;
   var R = function() {
       Xu.apply(this, arguments)
   };
   _.O(R, Xu);
   R.prototype.M = function(a) {
       if (a !== St)
           throw Error("requires a valid immutable API token");
       Ob(this) ? a = this : (a = this.l,
       a == this || a && this && a instanceof this.constructor && hc(a.Y, this.Y) || (a = fd(this),
       Hb(a.Y),
       this.l = a));
       return a
   }
   ;
   R.prototype.sb = function() {
       if (Ob(this)) {
           var a = {
               Jc: !0
           };
           var b = Ob(this);
           if (b && !a.Jc)
               throw Error("copyRepeatedFields must be true for frozen messages");
           b || Jb(this.Y);
           var c = new this.constructor;
           pc(c, this);
           for (var d = this.Y, e = 0; e < d.length; e++) {
               var f = d[e];
               if (e === d.length - 1 && Rb(f))
                   for (var g in f) {
                       if (Sb(f, g)) {
                           var h = +g;
                           _.t(Number, "isNaN").call(Number, h) ? gd(c)[g] = f[g] : $c(this, c, h, f[g], b, a)
                       }
                   }
               else
                   $c(this, c, e - this.D, f, b, a)
           }
           c.l = this;
           a = c
       } else
           a = this;
       return a
   }
   ;
   if (tu) {
       var jv = {};
       Object.defineProperties(R, (jv[u.Symbol.hasInstance] = Yb(Object[u.Symbol.hasInstance]),
       jv))
   }
   ;var Cq = function(a) {
       R.call(this, a)
   };
   _.O(Cq, R);
   var Dq = function(a) {
       R.call(this, a)
   };
   _.O(Dq, R);
   var kv = function(a) {
       this.j = a.m;
       this.m = a.D;
       this.H = a.H;
       this.Jb = a.Jb;
       this.F = a.F;
       this.qb = a.qb;
       this.hc = a.hc;
       this.yc = a.yc;
       this.ec = a.ec;
       this.D = a.j
   }
     , lv = function(a, b, c) {
       this.m = a;
       this.D = b;
       this.H = c;
       this.F = window;
       this.qb = "env";
       this.hc = "n";
       this.yc = "0";
       this.ec = "1";
       this.j = !0
   };
   lv.prototype.build = function() {
       return new kv(this)
   }
   ;
   var Mq = function(a, b) {
       var c = void 0 === pr(b, 6) ? !0 : pr(b, 6), d, e;
       a: switch (oe(b, 4, 0)) {
       case 1:
           var f = "pt";
           break a;
       case 2:
           f = "cr";
           break a;
       default:
           f = ""
       }
       f = new lv(Dd(oe(b, 2, 0)),Ro(b, 3),f);
       b = null != (e = null == (d = Pc(b, Dq, 5)) ? void 0 : Ro(d, 1)) ? e : "";
       f.Jb = b;
       f.j = c;
       f.F = a;
       return f.build()
   };
   var pm = function(a) {
       R.call(this, a)
   };
   _.O(pm, R);
   var om = function(a, b) {
       return w(a, 1, b)
   }
     , nm = function(a, b) {
       return w(a, 2, b)
   }
     , mv = [pm, 1, hv, 2, bv, 3, dv];
   var xm = function(a) {
       R.call(this, a, -1, nv)
   };
   _.O(xm, R);
   var wm = function(a, b) {
       return w(a, 1, b)
   }
     , ym = function(a, b) {
       w(a, 2, b)
   }
     , um = function(a, b) {
       return Qk(a, 3, Dm, b)
   }
     , vm = function(a, b) {
       return w(a, 4, b)
   };
   xm.prototype.Cd = function() {
       return oe(this, 7, 0)
   }
   ;
   var Dm = function(a) {
       R.call(this, a, -1, ov)
   };
   _.O(Dm, R);
   var Hm = function(a, b) {
       Kg(a, 4, b)
   }
     , Em = function(a, b) {
       Zc(a, 6, b)
   }
     , Im = function(a, b) {
       Zc(a, 7, b)
   }
     , pv = function(a) {
       R.call(this, a)
   };
   _.O(pv, R);
   pv.prototype.getId = function() {
       return Ro(this, 1)
   }
   ;
   var Fm = function(a) {
       var b = new pv;
       return w(b, 1, a)
   }
     , qv = function(a) {
       R.call(this, a)
   };
   _.O(qv, R);
   qv.prototype.getWidth = function() {
       return pe(this, 1)
   }
   ;
   var Km = function(a) {
       var b = new qv;
       return w(b, 1, a)
   };
   qv.prototype.getHeight = function() {
       return pe(this, 2)
   }
   ;
   var Jm = function(a, b) {
       return w(a, 2, b)
   }
     , nv = [3]
     , ov = [4]
     , rv = [xm, 1, dv, 2, $u, 3, gv, [Dm, 1, dv, 2, $u, 8, $u, 3, dv, 4, ev, 5, hv, 6, fv, [pv, 1, dv], 7, fv, [qv, 1, bv, 2, bv]], 4, hv, 5, fv, mv, 6, cv, 7, hv];
   var sv = function(a) {
       R.call(this, a)
   };
   _.O(sv, R);
   var tv = [sv, 1, hv];
   var vv = function(a) {
       R.call(this, a, -1, uv)
   };
   _.O(vv, R);
   var tm = function(a, b) {
       return Cu(a, 2, xm, b)
   }
     , Bm = function(a, b) {
       Zc(a, 5, b)
   }
     , wv = function(a, b) {
       Zc(a, 9, b)
   }
     , uv = [2]
     , xv = [vv, 1, hv, 6, dv, 2, gv, rv, 3, hv, 4, dv, 5, fv, mv, 9, fv, tv, 7, cv, 8, bv];
   var zv = function(a) {
       R.call(this, a, -1, yv)
   };
   _.O(zv, R);
   var Av = function(a) {
       var b = new vv;
       b = w(b, 1, 1);
       return Cu(a, 1, vv, b)
   }
     , yv = [1]
     , cn = [zv, 1, gv, xv];
   var Cv = function(a) {
       R.call(this, a, -1, Bv)
   };
   _.O(Cv, R);
   var Ev = function(a) {
       R.call(this, a, -1, Dv)
   };
   _.O(Ev, R);
   var Fv = function(a) {
       R.call(this, a)
   };
   _.O(Fv, R);
   var Bv = [1]
     , Dv = [1]
     , Du = [2, 3];
   var Gv = function(a) {
       R.call(this, a)
   };
   _.O(Gv, R);
   Gv.prototype.A = function() {
       return Ro(this, 1)
   }
   ;
   Gv.prototype.I = function() {
       return Ro(this, 2)
   }
   ;
   var Iv = function(a) {
       R.call(this, a, -1, Hv)
   };
   _.O(Iv, R);
   Iv.prototype.A = function() {
       return Nc(this, Gv, 2)
   }
   ;
   var Hv = [2];
   var Kv = function(a) {
       R.call(this, a, -1, Jv)
   };
   _.O(Kv, R);
   var Jv = [4];
   var Lv = function(a) {
       R.call(this, a)
   };
   _.O(Lv, R);
   var Nv = function(a) {
       R.call(this, a, -1, Mv)
   };
   _.O(Nv, R);
   var Mv = [1];
   var Pv = function(a) {
       R.call(this, a, -1, Ov)
   };
   _.O(Pv, R);
   var Qv = function(a) {
       R.call(this, a)
   };
   _.O(Qv, R);
   var Ov = [1];
   var Rv = function(a) {
       R.call(this, a)
   };
   _.O(Rv, R);
   Rv.prototype.getAdUnitPath = function() {
       return Ro(this, 1)
   }
   ;
   var Sv = function(a) {
       R.call(this, a)
   };
   _.O(Sv, R);
   var Tv = [Sv, 1, $u];
   var hn = function(a) {
       R.call(this, a)
   };
   _.O(hn, R);
   hn.prototype.getEscapedQemQueryId = function() {
       return Ro(this, 1)
   }
   ;
   var Uv = function(a) {
       R.call(this, a)
   };
   _.O(Uv, R);
   var jn = [hn, 1, dv, 2, fv, Tv, 3, fv, [Uv, 1, hv, 2, $u]];
   var Wv = function(a) {
       R.call(this, a, -1, Vv)
   };
   _.O(Wv, R);
   var Ko = function(a) {
       R.call(this, a)
   };
   _.O(Ko, R);
   var No = function(a) {
       R.call(this, a)
   };
   _.O(No, R);
   var Vv = [1, 2]
     , Lo = [1, 2];
   var Qo = function(a) {
       R.call(this, a)
   };
   _.O(Qo, R);
   Qo.prototype.getAdUnitPath = function() {
       return Ro(this, 2)
   }
   ;
   Qo.prototype.getWidth = function() {
       return pe(this, 3)
   }
   ;
   Qo.prototype.getHeight = function() {
       return pe(this, 4)
   }
   ;
   var Yv = function(a) {
       R.call(this, a, -1, Xv)
   };
   _.O(Yv, R);
   var Xv = [3];
   var Zv = function(a) {
       R.call(this, a)
   };
   _.O(Zv, R);
   var $v = [5, 6, 7];
   var bw = function(a) {
       R.call(this, a, -1, aw)
   };
   _.O(bw, R);
   var aw = [4, 5, 6];
   var cw = function(a) {
       R.call(this, a)
   };
   _.O(cw, R);
   var ew = function(a) {
       R.call(this, a, -1, dw)
   };
   _.O(ew, R);
   var dw = [13];
   var gw = function(a) {
       R.call(this, a, -1, fw)
   };
   _.O(gw, R);
   var fw = [13];
   var iw = function(a) {
       R.call(this, a, -1, hw)
   };
   _.O(iw, R);
   var jw = function(a) {
       R.call(this, a)
   };
   _.O(jw, R);
   var kw = function(a) {
       R.call(this, a)
   };
   _.O(kw, R);
   var lw = function(a) {
       R.call(this, a)
   };
   _.O(lw, R);
   var Ye = function(a) {
       R.call(this, a)
   };
   _.O(Ye, R);
   var Xe = function(a, b) {
       return w(a, 1, b)
   }
     , Ue = function(a) {
       R.call(this, a)
   };
   _.O(Ue, R);
   var hw = [1, 2]
     , mw = [kw, 1, av, 2, av, 3, av]
     , nw = [iw, 1, gv, [jw, 5, dv, 4, dv, 2, fv, mw, 3, fv, mw, 6, cv, 7, fv, [lw, 4, hv, 5, dv]], 2, gv, [Ye, 1, dv, 2, dv, 3, $u, 7, $u, 8, Zu, 4, bv, 5, bv, 6, bv, 9, cv, 10, fv, [Ue, 1, hv]]];
   var ow = function(a) {
       R.call(this, a)
   };
   _.O(ow, R);
   ow.prototype.A = function() {
       return Ro(this, 1)
   }
   ;
   ow.prototype.I = function() {
       return Ro(this, 2)
   }
   ;
   var qw = function(a) {
       R.call(this, a, -1, pw)
   };
   _.O(qw, R);
   qw.prototype.A = function() {
       return Nc(this, ow, 1)
   }
   ;
   var pw = [1];
   var rw = function(a) {
       R.call(this, a)
   };
   _.O(rw, R);
   var sw = function(a) {
       R.call(this, a)
   };
   _.O(sw, R);
   sw.prototype.getVersion = function() {
       return v(this, 5)
   }
   ;
   var tw = function(a) {
       R.call(this, a)
   };
   _.O(tw, R);
   var uw = function(a) {
       R.call(this, a)
   };
   _.O(uw, R);
   var fr = function(a) {
       R.call(this, a, -1, vw)
   };
   _.O(fr, R);
   fr.prototype.getEscapedQemQueryId = function() {
       return Ro(this, 4)
   }
   ;
   var vw = [2];
   var er = function(a) {
       R.call(this, a)
   };
   _.O(er, R);
   var gr = function(a) {
       R.call(this, a)
   };
   _.O(gr, R);
   var hr = function(a) {
       R.call(this, a)
   };
   _.O(hr, R);
   hr.prototype.getEscapedQemQueryId = function() {
       return Ro(this, 2)
   }
   ;
   var ir = function(a) {
       R.call(this, a)
   };
   _.O(ir, R);
   var xw = function(a) {
       R.call(this, a, -1, ww)
   };
   _.O(xw, R);
   xw.prototype.getWidth = function() {
       return pe(this, 9)
   }
   ;
   xw.prototype.getHeight = function() {
       return pe(this, 10)
   }
   ;
   var ww = [3, 7, 11];
   var zw = function(a) {
       R.call(this, a, -1, yw)
   };
   _.O(zw, R);
   zw.prototype.getHeight = function() {
       return v(this, 6)
   }
   ;
   zw.prototype.getWidth = function() {
       return v(this, 7)
   }
   ;
   zw.prototype.getEscapedQemQueryId = function() {
       return v(this, 34)
   }
   ;
   var Aw = function(a) {
       R.call(this, a)
   };
   _.O(Aw, R);
   Aw.prototype.getHtml = function() {
       return zj(this, 1)
   }
   ;
   var yw = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63]
     , Bw = [4, 41]
     , Cw = [39, 48];
   var Aq = function(a) {
       R.call(this, a)
   };
   _.O(Aq, R);
   var Dw = window;
   var ls = function(a) {
       R.call(this, a, -1, Ew)
   };
   _.O(ls, R);
   var Ew = [15];
   var ks = function(a) {
       R.call(this, a)
   };
   _.O(ks, R);
   ks.prototype.getCorrelator = function() {
       return Cj(this, 1)
   }
   ;
   ks.prototype.setCorrelator = function(a) {
       return Hc(this, 1, a, 0)
   }
   ;
   var js = function(a) {
       R.call(this, a)
   };
   _.O(js, R);
   var Fw = _.Xt || $t;
   var Gw = /^[\w+/_-]+[=]{0,2}$/
     , Hw = function() {
       var a = _.q.document;
       return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Gw.test(a) ? a : "" : ""
   };
   _.qi = function(a, b) {
       this.x = void 0 !== a ? a : 0;
       this.y = void 0 !== b ? b : 0
   }
   ;
   _.qi.prototype.ceil = function() {
       this.x = Math.ceil(this.x);
       this.y = Math.ceil(this.y);
       return this
   }
   ;
   _.qi.prototype.floor = function() {
       this.x = Math.floor(this.x);
       this.y = Math.floor(this.y);
       return this
   }
   ;
   _.qi.prototype.round = function() {
       this.x = Math.round(this.x);
       this.y = Math.round(this.y);
       return this
   }
   ;
   _.ti = function(a, b) {
       this.width = a;
       this.height = b
   }
   ;
   ba = _.ti.prototype;
   ba.aspectRatio = function() {
       return this.width / this.height
   }
   ;
   ba.isEmpty = function() {
       return !(this.width * this.height)
   }
   ;
   ba.ceil = function() {
       this.width = Math.ceil(this.width);
       this.height = Math.ceil(this.height);
       return this
   }
   ;
   ba.floor = function() {
       this.width = Math.floor(this.width);
       this.height = Math.floor(this.height);
       return this
   }
   ;
   ba.round = function() {
       this.width = Math.round(this.width);
       this.height = Math.round(this.height);
       return this
   }
   ;
   var Iw, Um, Jw, Lw;
   Iw = function(a) {
       return a = Yf(a)
   }
   ;
   Um = function() {
       return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ eg()).toString(36)
   }
   ;
   Jw = 2147483648 * Math.random() | 0;
   _.Kw = function(a) {
       return String(a).replace(/\-([a-z])/g, function(b, c) {
           return c.toUpperCase()
       })
   }
   ;
   Lw = function(a) {
       return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
           return c + d.toUpperCase()
       })
   }
   ;
   var Ow, Qw, Pw, Tw, Vw, Ed, Hd, Mw;
   Ow = function(a) {
       return a ? new Mw(_.Nw(a)) : lt || (lt = new Mw)
   }
   ;
   Qw = function(a, b) {
       ua(b, function(c, d) {
           c && "object" == typeof c && c.Na && (c = c.Fa());
           "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Pw.hasOwnProperty(d) ? a.setAttribute(Pw[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
       })
   }
   ;
   Pw = {
       cellpadding: "cellPadding",
       cellspacing: "cellSpacing",
       colspan: "colSpan",
       frameborder: "frameBorder",
       height: "height",
       maxlength: "maxLength",
       nonce: "nonce",
       role: "role",
       rowspan: "rowSpan",
       type: "type",
       usemap: "useMap",
       valign: "vAlign",
       width: "width"
   };
   _.Sw = function(a) {
       a = a.document;
       a = _.Rw(a) ? a.documentElement : a.body;
       return new _.ti(a.clientWidth,a.clientHeight)
   }
   ;
   Tw = function(a) {
       return a.scrollingElement ? a.scrollingElement : !$t && _.Rw(a) ? a.documentElement : a.body || a.documentElement
   }
   ;
   _.Uw = function(a) {
       return a ? a.parentWindow || a.defaultView : window
   }
   ;
   Vw = function(a, b, c) {
       function d(h) {
           h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
       }
       for (var e = 1; e < c.length; e++) {
           var f = c[e];
           if (!pa(f) || _.ha(f) && 0 < f.nodeType)
               d(f);
           else {
               a: {
                   if (f && "number" == typeof f.length) {
                       if (_.ha(f)) {
                           var g = "function" == typeof f.item || "string" == typeof f.item;
                           break a
                       }
                       if ("function" === typeof f) {
                           g = "function" == typeof f.item;
                           break a
                       }
                   }
                   g = !1
               }
               _.ot(g ? ea(f) : f, d)
           }
       }
   }
   ;
   _.Rw = function(a) {
       return "CSS1Compat" == a.compatMode
   }
   ;
   _.Ww = function(a) {
       return a && a.parentNode ? a.parentNode.removeChild(a) : null
   }
   ;
   _.Xw = function(a) {
       var b;
       if (Fw && !(_.Xt && hu("9") && !hu("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement))
           return b;
       b = a.parentNode;
       return _.ha(b) && 1 == b.nodeType ? b : null
   }
   ;
   _.Yw = function(a, b) {
       if (!a || !b)
           return !1;
       if (a.contains && 1 == b.nodeType)
           return a == b || a.contains(b);
       if ("undefined" != typeof a.compareDocumentPosition)
           return a == b || !!(a.compareDocumentPosition(b) & 16);
       for (; b && a != b; )
           b = b.parentNode;
       return b == a
   }
   ;
   Ed = function(a) {
       var b, c = arguments.length;
       if (!c)
           return null;
       if (1 == c)
           return arguments[0];
       var d = []
         , e = Infinity;
       for (b = 0; b < c; b++) {
           for (var f = [], g = arguments[b]; g; )
               f.unshift(g),
               g = g.parentNode;
           d.push(f);
           e = Math.min(e, f.length)
       }
       f = null;
       for (b = 0; b < e; b++) {
           g = d[0][b];
           for (var h = 1; h < c; h++)
               if (g != d[h][b])
                   return f;
           f = g
       }
       return f
   }
   ;
   _.Nw = function(a) {
       return 9 == a.nodeType ? a : a.ownerDocument || a.document
   }
   ;
   Hd = function(a) {
       try {
           return a.contentWindow || (a.contentDocument ? _.Uw(a.contentDocument) : null)
       } catch (b) {}
       return null
   }
   ;
   Mw = function(a) {
       this.j = a || _.q.document || document
   }
   ;
   ba = Mw.prototype;
   ba.getElementsByTagName = function(a, b) {
       return (b || this.j).getElementsByTagName(String(a))
   }
   ;
   ba.createElement = function(a) {
       var b = this.j;
       a = String(a);
       "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
       return b.createElement(a)
   }
   ;
   ba.createTextNode = function(a) {
       return this.j.createTextNode(String(a))
   }
   ;
   ba.append = function(a, b) {
       Vw(_.Nw(a), a, arguments)
   }
   ;
   ba.ge = _.Ww;
   ba.contains = _.Yw;
   var Zw = function() {
       return Ca("iPad") || Ca("Android") && !Ca("Mobile") || Ca("Silk")
   };
   var ax, fl, bx, ik;
   _.$w = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
   ax = function(a) {
       return a ? decodeURI(a) : a
   }
   ;
   fl = function(a, b, c) {
       if (Array.isArray(b))
           for (var d = 0; d < b.length; d++)
               fl(a, String(b[d]), c);
       else
           null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
   }
   ;
   bx = /#|$/;
   ik = function(a, b) {
       var c = a.search(bx);
       a: {
           var d = 0;
           for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
               var f = a.charCodeAt(d - 1);
               if (38 == f || 63 == f)
                   if (f = a.charCodeAt(d + e),
                   !f || 61 == f || 38 == f || 35 == f)
                       break a;
               d += e + 1
           }
           d = -1
       }
       if (0 > d)
           return null;
       e = a.indexOf("&", d);
       if (0 > e || e > c)
           e = c;
       d += b.length + 1;
       return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
   }
   ;
   var Gd, Fd, of, cx, pf, gk, Ci, re, dx, Hj, ji, qe, se, ts, fx, gx, hx, Di, ix, jx, kx, lx, mx, nx, ox, px, cj, ej, dj, qx, rx, tx, ux, vx, wx, xx, Ce, yx, Io, pl, zx, Ax, ll, Bx;
   Gd = function(a) {
       try {
           return !!a && null != a.location.href && Ut(a, "foo")
       } catch (b) {
           return !1
       }
   }
   ;
   Fd = function(a, b, c, d) {
       b = void 0 === b ? !1 : b;
       d = void 0 === d ? _.q : d;
       c = (void 0 === c ? 0 : c) ? cx(d) : d;
       for (d = 0; c && 40 > d++ && (!b && !Gd(c) || !a(c)); )
           c = cx(c)
   }
   ;
   of = function() {
       var a = window;
       Fd(function(b) {
           a = b;
           return !1
       });
       return a
   }
   ;
   cx = function(a) {
       try {
           var b = a.parent;
           if (b && b != a)
               return b
       } catch (c) {}
       return null
   }
   ;
   pf = function(a) {
       return Gd(a.top) ? a.top : null
   }
   ;
   gk = function(a, b) {
       var c = _.ee("SCRIPT", a);
       Ua(c, b);
       return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
       c) : null
   }
   ;
   Ci = function(a, b) {
       return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
   }
   ;
   re = function() {
       if (!u.globalThis.crypto)
           return Math.random();
       try {
           var a = new Uint32Array(1);
           u.globalThis.crypto.getRandomValues(a);
           return a[0] / 65536 / 65536
       } catch (b) {
           return Math.random()
       }
   }
   ;
   _.il = function(a, b) {
       if (a)
           for (var c in a)
               Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
   }
   ;
   dx = function(a) {
       var b = [];
       _.il(a, function(c, d) {
           b.push(d)
       });
       return b
   }
   ;
   _.ex = function(a) {
       var b = [];
       _.il(a, function(c) {
           b.push(c)
       });
       return b
   }
   ;
   Hj = function(a, b) {
       return wa(a, function(c, d) {
           return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
       })
   }
   ;
   ji = function(a) {
       var b = a.length;
       if (0 == b)
           return 0;
       for (var c = 305419896, d = 0; d < b; d++)
           c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
       return 0 < c ? c : 4294967296 + c
   }
   ;
   qe = Bi(function() {
       return _.wg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], fx) || 1E-4 > Math.random()
   });
   se = function(a, b) {
       try {
           if (a)
               return a.setItem("google_experiment_mod", b),
               b
       } catch (c) {}
       return null
   }
   ;
   ts = Bi(function() {
       return fx("MSIE")
   });
   fx = function(a) {
       return -1 != Ba().indexOf(a)
   }
   ;
   gx = /^([0-9.]+)px$/;
   hx = function() {
       return /^true$/.test("false")
   }
   ;
   Di = function(a) {
       return (a = gx.exec(a)) ? +a[1] : null
   }
   ;
   ix = function(a) {
       if (!a)
           return "";
       var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
       try {
           var c = b.exec(decodeURIComponent(a));
           if (c)
               return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
       } catch (d) {}
       return ""
   }
   ;
   jx = {
       Kf: "allow-forms",
       Lf: "allow-modals",
       Mf: "allow-orientation-lock",
       Nf: "allow-pointer-lock",
       Of: "allow-popups",
       Pf: "allow-popups-to-escape-sandbox",
       Qf: "allow-presentation",
       Rf: "allow-same-origin",
       Sf: "allow-scripts",
       Tf: "allow-top-navigation",
       Uf: "allow-top-navigation-by-user-activation"
   };
   kx = Bi(function() {
       return _.ex(jx)
   });
   lx = function(a) {
       var b = kx();
       return a.length ? _.ig(b, function(c) {
           return !(0 <= _.ca(a, c))
       }) : b
   }
   ;
   mx = function() {
       var a = _.ee("IFRAME")
         , b = {};
       _.ot(kx(), function(c) {
           a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
       });
       return b
   }
   ;
   nx = function(a) {
       a = a && a.toString && a.toString();
       return "string" === typeof a && -1 != a.indexOf("[native code]")
   }
   ;
   ox = function(a, b) {
       for (var c = 0; 50 > c; ++c) {
           try {
               var d = !(!a.frames || !a.frames[b])
           } catch (e) {
               d = !1
           }
           if (d)
               return a;
           if (!(a = cx(a)))
               break
       }
       return null
   }
   ;
   px = function(a) {
       if (!a || !a.frames)
           return null;
       if (a.frames.google_ads_top_frame)
           return a.frames.google_ads_top_frame.frameElement;
       try {
           var b = a.document, c = b.head, d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
           if (e) {
               var f = _.ee("IFRAME");
               f.name = "google_ads_top_frame";
               f.id = "google_ads_top_frame";
               f.style.display = "none";
               f.style.position = "fixed";
               f.style.left = "-999px";
               f.style.top = "-999px";
               f.style.width = "0px";
               f.style.height = "0px";
               e.appendChild(f);
               return f
           }
       } catch (g) {}
       return null
   }
   ;
   _.Vl = Bi(function() {
       return !Zw() && (Ca("iPod") || Ca("iPhone") || Ca("Android") || Ca("IEMobile")) ? 2 : Zw() ? 1 : 0
   });
   cj = function(a, b) {
       var c;
       for (c = void 0 === c ? 100 : c; a && c--; ) {
           if (a == b)
               return !0;
           a = a.parentElement
       }
       return !1
   }
   ;
   _.Ni = function(a, b) {
       _.il(b, function(c, d) {
           a.style.setProperty(d, c, "important")
       })
   }
   ;
   ej = function(a, b, c) {
       for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
           a = a.parentElement
   }
   ;
   dj = function(a, b) {
       for (var c = 100; a && c--; ) {
           var d = Ci(a, window);
           if (d) {
               if (b(d))
                   return !0;
               a = a.parentElement
           }
       }
       return !1
   }
   ;
   qx = function(a) {
       if (!a)
           return null;
       a = a.transform;
       if (!a)
           return null;
       a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
       return 6 != a.length ? null : dd(a, parseFloat)
   }
   ;
   rx = {};
   _.sx = (rx["http://googleads.g.doubleclick.net"] = !0,
   rx["http://pagead2.googlesyndication.com"] = !0,
   rx["https://googleads.g.doubleclick.net"] = !0,
   rx["https://pagead2.googlesyndication.com"] = !0,
   rx);
   tx = function(a) {
       _.q.console && _.q.console.warn && _.q.console.warn(a)
   }
   ;
   ux = [];
   vx = function() {
       var a = ux;
       ux = [];
       a = _.x(a);
       for (var b = a.next(); !b.done; b = a.next()) {
           b = b.value;
           try {
               b()
           } catch (c) {}
       }
   }
   ;
   wx = function(a) {
       return a.replace(/\\(n|r|\\)/g, function(b, c) {
           return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
       })
   }
   ;
   xx = function() {
       return Math.floor(Math.random() * Math.pow(2, 52))
   }
   ;
   Ce = function(a) {
       if ("number" !== typeof a.goog_pvsid)
           try {
               Object.defineProperty(a, "goog_pvsid", {
                   value: xx(),
                   configurable: !1
               })
           } catch (b) {}
       return Number(a.goog_pvsid) || -1
   }
   ;
   yx = function(a, b) {
       Id(_.Uw(_.Nw(a)), a, b)
   }
   ;
   Io = function(a, b) {
       "complete" === a.readyState || "interactive" === a.readyState ? (ux.push(b),
       1 == ux.length && (u.Promise ? u.Promise.resolve().then(vx) : window.setImmediate ? setImmediate(vx) : setTimeout(vx, 0))) : a.addEventListener("DOMContentLoaded", b)
   }
   ;
   pl = function(a) {
       return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
   }
   ;
   zx = function(a, b) {
       var c = _.ee("DIV");
       c.id = a;
       c.textContent = b;
       _.Ni(c, {
           height: "24px",
           "line-height": "24px",
           "text-align": "center",
           "vertical-align": "middle",
           color: "white",
           "background-color": "black",
           margin: "0",
           "font-family": "Roboto",
           "font-style": "normal",
           "font-weight": "500",
           "font-size": "11px",
           "letter-spacing": "0.08em"
       });
       return c
   }
   ;
   Ax = function(a) {
       return new u.Promise(function(b) {
           setTimeout(function() {
               return void b(2)
           }, a)
       }
       )
   }
   ;
   ll = function(a) {
       try {
           var b = JSON.stringify(a)
       } catch (c) {}
       return b || String(a)
   }
   ;
   _.ee = function(a, b) {
       b = void 0 === b ? document : b;
       return b.createElement(String(a).toLowerCase())
   }
   ;
   Bx = function(a) {
       for (var b = a; a && a != a.parent; )
           a = a.parent,
           Gd(a) && (b = a);
       return b
   }
   ;
   _.Cx = function(a, b, c, d) {
       this.top = a;
       this.right = b;
       this.bottom = c;
       this.left = d
   }
   ;
   _.Cx.prototype.getWidth = function() {
       return this.right - this.left
   }
   ;
   _.Cx.prototype.getHeight = function() {
       return this.bottom - this.top
   }
   ;
   _.Dx = function(a) {
       return new _.Cx(a.top,a.right,a.bottom,a.left)
   }
   ;
   _.Cx.prototype.contains = function(a) {
       return this && a ? a instanceof _.Cx ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
   }
   ;
   _.Cx.prototype.ceil = function() {
       this.top = Math.ceil(this.top);
       this.right = Math.ceil(this.right);
       this.bottom = Math.ceil(this.bottom);
       this.left = Math.ceil(this.left);
       return this
   }
   ;
   _.Cx.prototype.floor = function() {
       this.top = Math.floor(this.top);
       this.right = Math.floor(this.right);
       this.bottom = Math.floor(this.bottom);
       this.left = Math.floor(this.left);
       return this
   }
   ;
   _.Cx.prototype.round = function() {
       this.top = Math.round(this.top);
       this.right = Math.round(this.right);
       this.bottom = Math.round(this.bottom);
       this.left = Math.round(this.left);
       return this
   }
   ;
   var Ex = function(a, b, c, d) {
       this.left = a;
       this.top = b;
       this.width = c;
       this.height = d
   }
     , Fx = function(a) {
       return new _.Cx(a.top,a.left + a.width,a.top + a.height,a.left)
   }
     , Gx = function(a, b) {
       var c = Math.max(a.left, b.left)
         , d = Math.min(a.left + a.width, b.left + b.width);
       if (c <= d) {
           var e = Math.max(a.top, b.top);
           a = Math.min(a.top + a.height, b.top + b.height);
           if (e <= a)
               return new Ex(c,e,d - c,a - e)
       }
       return null
   };
   Ex.prototype.contains = function(a) {
       return a instanceof _.qi ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
   }
   ;
   Ex.prototype.ceil = function() {
       this.left = Math.ceil(this.left);
       this.top = Math.ceil(this.top);
       this.width = Math.ceil(this.width);
       this.height = Math.ceil(this.height);
       return this
   }
   ;
   Ex.prototype.floor = function() {
       this.left = Math.floor(this.left);
       this.top = Math.floor(this.top);
       this.width = Math.floor(this.width);
       this.height = Math.floor(this.height);
       return this
   }
   ;
   Ex.prototype.round = function() {
       this.left = Math.round(this.left);
       this.top = Math.round(this.top);
       this.width = Math.round(this.width);
       this.height = Math.round(this.height);
       return this
   }
   ;
   var Hn = function(a) {
       a = void 0 === a ? _.q : a;
       var b = a.context || a.AMP_CONTEXT_DATA;
       if (!b)
           try {
               b = a.parent.context || a.parent.AMP_CONTEXT_DATA
           } catch (c) {}
       try {
           if (b && b.pageViewId && b.canonicalUrl)
               return b
       } catch (c) {}
       return null
   }
     , Gn = function(a) {
       return (a = void 0 === a ? Hn() : a) ? Gd(a.master) ? a.master : null : null
   };
   _.Md = function(a) {
       this.Re = a
   }
   ;
   _.Hx = [Nd("data"), Nd("http"), Nd("https"), Nd("mailto"), Nd("ftp"), new _.Md(function(a) {
       return /^[^:]*([/?#]|$)/.test(a)
   }
   )];
   var Kx, sg, si, Mx, Nx, pi;
   _.Jx = function(a, b, c) {
       if ("string" === typeof b)
           (b = _.Ix(a, b)) && (a.style[b] = c);
       else
           for (var d in b) {
               c = a;
               var e = b[d]
                 , f = _.Ix(c, d);
               f && (c.style[f] = e)
           }
   }
   ;
   Kx = {};
   _.Ix = function(a, b) {
       var c = Kx[b];
       if (!c) {
           var d = _.Kw(b);
           c = d;
           void 0 === a.style[d] && (d = ($t ? "Webkit" : Zt ? "Moz" : _.Xt ? "ms" : null) + Lw(d),
           void 0 !== a.style[d] && (c = d));
           Kx[b] = c
       }
       return c
   }
   ;
   _.Lx = function(a, b) {
       var c = _.Nw(a);
       return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
   }
   ;
   sg = function(a, b) {
       return _.Lx(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
   }
   ;
   si = function(a) {
       try {
           return a.getBoundingClientRect()
       } catch (b) {
           return {
               left: 0,
               top: 0,
               right: 0,
               bottom: 0
           }
       }
   }
   ;
   Mx = function(a) {
       if (_.Xt && !(8 <= Number(ku)))
           return a.offsetParent;
       var b = _.Nw(a)
         , c = sg(a, "position")
         , d = "fixed" == c || "absolute" == c;
       for (a = a.parentNode; a && a != b; a = a.parentNode)
           if (11 == a.nodeType && a.host && (a = a.host),
           c = sg(a, "position"),
           d = d && "static" == c && a != b.documentElement && a != b.body,
           !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
               return a;
       return null
   }
   ;
   Nx = function(a) {
       var b = _.Nw(a)
         , c = new _.qi(0,0);
       var d = b ? _.Nw(b) : document;
       d = !_.Xt || 9 <= Number(ku) || _.Rw(Ow(d).j) ? d.documentElement : d.body;
       if (a == d)
           return c;
       a = si(a);
       d = Ow(b).j;
       b = Tw(d);
       d = d.parentWindow || d.defaultView;
       b = _.Xt && hu("10") && d.pageYOffset != b.scrollTop ? new _.qi(b.scrollLeft,b.scrollTop) : new _.qi(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
       c.x = a.left + b.x;
       c.y = a.top + b.y;
       return c
   }
   ;
   pi = function(a, b) {
       var c = new _.qi(0,0)
         , d = _.Uw(_.Nw(a));
       if (!Ut(d, "parent"))
           return c;
       do {
           var e = d == b ? Nx(a) : _.Ox(a);
           c.x += e.x;
           c.y += e.y
       } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
       return c
   }
   ;
   _.Ox = function(a) {
       a = si(a);
       return new _.qi(a.left,a.top)
   }
   ;
   _.Px = function(a, b) {
       "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
       return a
   }
   ;
   _.tg = function(a, b) {
       if ("none" != sg(b, "display"))
           return a(b);
       var c = b.style
         , d = c.display
         , e = c.visibility
         , f = c.position;
       c.visibility = "hidden";
       c.position = "absolute";
       c.display = "inline";
       a = a(b);
       c.display = d;
       c.position = f;
       c.visibility = e;
       return a
   }
   ;
   _.ug = function(a) {
       var b = a.offsetWidth
         , c = a.offsetHeight
         , d = $t && !b && !c;
       return (void 0 === b || d) && a.getBoundingClientRect ? (a = si(a),
       new _.ti(a.right - a.left,a.bottom - a.top)) : new _.ti(b,c)
   }
   ;
   var Zi = function(a) {
       a = Gn(Hn(a)) || a;
       a = a.google_unique_id;
       return "number" === typeof a ? a : 0
   };
   var Qx = function(a, b) {
       if (u.globalThis.fetch)
           u.globalThis.fetch(a, {
               method: "POST",
               body: b,
               keepalive: 65536 > b.length,
               credentials: "omit",
               mode: "no-cors",
               redirect: "follow"
           }).catch(function() {});
       else {
           var c = new XMLHttpRequest;
           c.open("POST", a, !0);
           c.send(b)
       }
   };
   var Rx = function(a, b, c, d) {
       this.A = a;
       this.H = b;
       this.l = c;
       this.D = d;
       this.m = [];
       this.j = null
   }
     , Sx = function(a) {
       var b = Rd(a.m);
       a.H(a.A + "?e=1", b);
       a.m = [];
       a.j = null
   };
   Rx.prototype.cd = function() {
       var a = this;
       this.m.push.apply(this.m, _.Ud(Jd.apply(0, arguments)));
       this.m.length >= this.D ? (null !== this.j && clearTimeout(this.j),
       this.j = setTimeout(function() {
           Sx(a)
       }, 0)) : null === this.j && (this.j = setTimeout(function() {
           Sx(a)
       }, this.l))
   }
   ;
   var zs = function(a, b) {
       Rx.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Qx, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b)
   };
   _.O(zs, Rx);
   var S = function(a, b) {
       this.j = a;
       this.defaultValue = void 0 === b ? !1 : b
   }
     , Tx = function(a, b) {
       this.j = a;
       this.defaultValue = void 0 === b ? 0 : b
   }
     , Ux = function(a, b) {
       this.j = a;
       this.defaultValue = void 0 === b ? "" : b
   }
     , Vx = function(a) {
       var b = void 0 === b ? [] : b;
       this.j = a;
       this.defaultValue = b
   };
   var Zl, Wx, Xx, Yx, $i, Zx, $x, ay, by, cy, dy, ey, fy, gy, Gm, hy, iy, jy, ky, ly, my, ny, oy, py, fn, qy, xq, ry, sy, ty, uy, vy, wy, xy, yy, zy, Ay, Ki, Gl, Ql, Fl, By, Cy, Oh, Dy, $o, Ey, Fy, Gy, Hy, Iy, Jy, Ky, Ly, My, gn, Ny, An, xn, Oy, el, al, Py, gq, hq, Qy, Ry, Sy, Or, Ty, Jn, Uy, Vy, Wy, ys, Xy, GB, HB, IB, JB, KB, LB, MB, NB, OB, PB, Fg, QB, RB, SB, TB, qf, UB, VB, WB, Ve, Oe, XB, YB, ZB, $B, Be, aC, ns, os, bC, Jl, ps, ms, dC, eC, fC, gC, hC, jC, kC, lC, mC, nC, oC, pC, qC, rC;
   Zl = new Tx(1158);
   Wx = new S(1122,!0);
   Xx = new Ux(3);
   Yx = new Vx(481);
   $i = new Tx(7,.1);
   Zx = new S(212);
   $x = new Tx(455645877);
   ay = new Tx(462420536);
   by = new S(359351145);
   cy = new S(463881064);
   dy = new S(456267131);
   ey = new Tx(448338836,.01);
   fy = new Tx(427198696);
   gy = new Tx(438663674);
   Gm = new S(447038262);
   hy = new S(23);
   iy = new S(369430);
   jy = new Tx(462472615);
   ky = new S(465566713);
   ly = new S(432254233,!0);
   my = new Tx(408380992,.01);
   ny = new Tx(377289019,1E4);
   oy = new Tx(488);
   py = new Tx(529,20);
   fn = new Ux(10);
   qy = new Tx(428094087);
   xq = new Tx(447000223,.01);
   ry = new Tx(430268223);
   sy = new Tx(434620574);
   ty = new S(360245597,!0);
   uy = new S(462165369);
   vy = new Tx(461613513);
   wy = new Tx(494,5E3);
   xy = new Tx(517,.01);
   yy = new S(371390390);
   zy = new S(220);
   Ay = new S(200);
   Ki = new S(466708259);
   Gl = new Tx(388529191);
   Ql = new Tx(492,.01);
   Fl = new S(423059401,!0);
   _.Rm = new S(430565960);
   By = new Tx(363650251);
   Cy = new S(83);
   Oh = new S(85);
   Dy = new S(437061931);
   $o = new Vx(466086960);
   Ey = new S(45374286);
   Fy = new S(449296995);
   Gy = new Tx(398776877,6E4);
   Hy = new S(437292966);
   Iy = new Tx(374201269,6E4);
   Jy = new Tx(371364213,6E4);
   Ky = new Tx(376149757,.0025);
   Ly = new S(453741080);
   My = new S(453275889);
   gn = new S(422917270);
   Ny = new S(377936516,!0);
   An = new S(421896358);
   xn = new S(423820325);
   Oy = new Tx(24);
   el = new Vx(1);
   al = new Ux(2,"1-0-38");
   Py = new S(116);
   gq = new S(427203966);
   hq = new S(442109935);
   Qy = new S(441529989);
   Ry = new S(428624799);
   Sy = new S(437308144);
   Or = new S(465638794);
   Ty = new Vx(489);
   Jn = new S(392065905);
   Uy = new Tx(360245595,500);
   Vy = new Tx(432023148);
   Wy = new S(424117738);
   ys = new Tx(397316938,1E3);
   Xy = new S(467675490);
   GB = new S(444587044);
   HB = new S(449967573);
   IB = new S(440148284,!0);
   JB = new S(440148283);
   KB = new S(444587045);
   LB = new S(440148282);
   MB = new S(465138446);
   NB = new S(399705355);
   OB = new S(458280329);
   PB = new S(464846628,!0);
   Fg = new Tx(425668704,61440);
   QB = new S(465091316);
   RB = new S(501);
   SB = new Ux(363931022);
   TB = new S(439828594);
   qf = new S(1930);
   UB = new S(453);
   VB = new S(454);
   WB = new S(426169223);
   Ve = new S(461886408,!0);
   Oe = new Tx(360261971);
   XB = new Tx(1921,72);
   YB = new Tx(1920,24);
   ZB = new Tx(426169222,1E3);
   $B = new Tx(1917,300);
   Be = new Tx(1916,.001);
   aC = new S(462694162);
   ns = new S(77);
   os = new S(78);
   bC = new S(1961);
   Jl = new S(309);
   ps = new S(80);
   ms = new S(76);
   _.cC = new S(1947,!0);
   dC = new S(84);
   eC = new S(1958);
   fC = new S(1973);
   gC = new S(188);
   hC = new S(1971);
   _.iC = new Tx(1972);
   jC = new S(1928);
   kC = new S(1941);
   lC = new S(370946349);
   mC = new S(392736476);
   nC = new Tx(406149835);
   oC = new S(397841828);
   pC = new S(432946749);
   qC = new S(432938498);
   rC = new Tx(432059203);
   var sC = function(a, b, c, d, e, f) {
       try {
           var g = a.j
             , h = _.ee("SCRIPT", g);
           h.async = !0;
           Ua(h, b);
           g.head.appendChild(h);
           h.addEventListener("load", function() {
               e();
               d && g.head.removeChild(h)
           });
           h.addEventListener("error", function() {
               0 < c ? sC(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
               f())
           })
       } catch (k) {
           f()
       }
   }
     , tC = function(a, b, c, d) {
       c = void 0 === c ? function() {}
       : c;
       d = void 0 === d ? function() {}
       : d;
       sC(Ow(a), b, 0, !1, c, d)
   };
   va({
       qg: 0,
       pg: 1,
       mg: 2,
       hg: 3,
       ng: 4,
       ig: 5,
       og: 6,
       kg: 7,
       lg: 8,
       gg: 9,
       jg: 10
   }).map(function(a) {
       return Number(a)
   });
   va({
       sg: 0,
       tg: 1,
       rg: 2
   }).map(function(a) {
       return Number(a)
   });
   var uC = function(a) {
       var b = a.document
         , c = function() {
           if (!a.frames.googlefcPresent)
               if (b.body) {
                   var d = _.ee("IFRAME", b);
                   d.style.display = "none";
                   d.style.width = "0px";
                   d.style.height = "0px";
                   d.style.border = "none";
                   d.style.zIndex = "-1000";
                   d.style.left = "-1000px";
                   d.style.top = "-1000px";
                   d.name = "googlefcPresent";
                   b.body.appendChild(d)
               } else
                   a.setTimeout(c, 5)
       };
       c()
   };
   _.vC = function() {
       this.D = this.D;
       this.ta = this.ta
   }
   ;
   _.vC.prototype.D = !1;
   _.vC.prototype.Ca = function() {
       this.D || (this.D = !0,
       this.H())
   }
   ;
   _.Co = function(a, b) {
       _.ap(a, _.kt(Yd, b))
   }
   ;
   _.ap = function(a, b) {
       a.D ? b() : (a.ta || (a.ta = []),
       a.ta.push(b))
   }
   ;
   _.vC.prototype.H = function() {
       if (this.ta)
           for (; this.ta.length; )
               this.ta.shift()()
   }
   ;
   var wC = function(a) {
       void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
       void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
       return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
   }
     , xC = function(a, b, c) {
       b = void 0 === b ? 500 : b;
       c = void 0 === c ? !1 : c;
       _.vC.call(this);
       this.j = a;
       this.m = null;
       this.I = {};
       this.M = 0;
       this.o = b;
       this.l = c;
       this.A = null
   };
   _.O(xC, _.vC);
   xC.prototype.H = function() {
       this.I = {};
       this.A && (_.fe(this.j, "message", this.A),
       delete this.A);
       delete this.I;
       delete this.j;
       delete this.m;
       _.vC.prototype.H.call(this)
   }
   ;
   var zC = function(a) {
       return "function" === typeof a.j.__tcfapi || null != yC(a)
   };
   xC.prototype.addEventListener = function(a) {
       var b = this
         , c = {
           internalBlockOnErrors: this.l
       }
         , d = _.Pt(function() {
           return a(c)
       })
         , e = 0;
       -1 !== this.o && (e = setTimeout(function() {
           c.tcString = "tcunavailable";
           c.internalErrorState = 1;
           d()
       }, this.o));
       var f = function(g, h) {
           clearTimeout(e);
           g ? (c = g,
           c.internalErrorState = wC(c),
           c.internalBlockOnErrors = b.l,
           h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
           h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
           c.internalErrorState = 3);
           a(c)
       };
       try {
           AC(this, "addEventListener", f)
       } catch (g) {
           c.tcString = "tcunavailable",
           c.internalErrorState = 3,
           e && (clearTimeout(e),
           e = 0),
           d()
       }
   }
   ;
   xC.prototype.removeEventListener = function(a) {
       a && a.listenerId && AC(this, "removeEventListener", null, a.listenerId)
   }
   ;
   var CC = function(a, b) {
       var c = {
           internalErrorState: 0,
           internalBlockOnErrors: a.l
       }
         , d = _.Pt(function() {
           return b(c)
       })
         , e = 0;
       -1 !== a.o && (e = setTimeout(function() {
           c.tcString = "tcunavailable";
           c.internalErrorState = 1;
           d()
       }, a.o));
       AC(a, "addEventListener", function(f, g) {
           var h = e;
           h && clearTimeout(h);
           g && (c = f);
           c.internalErrorState = wC(c);
           c.internalBlockOnErrors = a.l;
           0 != c.internalErrorState && (c.tcString = "tcunavailable");
           if (a.l)
               BC(c) && (AC(a, "removeEventListener", null, c.listenerId),
               d());
           else if (0 != c.internalErrorState || BC(c))
               AC(a, "removeEventListener", null, c.listenerId),
               d()
       })
   }
     , DC = function(a, b) {
       var c = void 0 === c ? "755" : c;
       a: {
           if (a.publisher && a.publisher.restrictions) {
               var d = a.publisher.restrictions[b];
               if (void 0 !== d) {
                   d = d[void 0 === c ? "755" : c];
                   break a
               }
           }
           d = void 0
       }
       if (0 === d)
           return !1;
       a.purpose && a.vendor ? (d = a.vendor.consents,
       (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents,
       c = !(!a || !a[b])),
       b = c)) : b = !0;
       return b
   }
     , AC = function(a, b, c, d) {
       c || (c = function() {}
       );
       if ("function" === typeof a.j.__tcfapi)
           a = a.j.__tcfapi,
           a(b, 2, c, d);
       else if (yC(a)) {
           EC(a);
           var e = ++a.M;
           a.I[e] = c;
           a.m && (c = {},
           a.m.postMessage((c.__tcfapiCall = {
               command: b,
               version: 2,
               callId: e,
               parameter: d
           },
           c), "*"))
       } else
           c({}, !1)
   }
     , yC = function(a) {
       if (a.m)
           return a.m;
       a.m = ox(a.j, "__tcfapiLocator");
       return a.m
   }
     , EC = function(a) {
       a.A || (a.A = function(b) {
           try {
               var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
               a.I[c.callId](c.returnValue, c.success)
           } catch (d) {}
       }
       ,
       _.Za(a.j, "message", a.A))
   }
     , BC = function(a) {
       if (!1 === a.gdprApplies)
           return !0;
       void 0 === a.internalErrorState && (a.internalErrorState = wC(a));
       return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
   }
     , FC = function(a, b) {
       return !1 === a.gdprApplies ? !0 : b.every(function(c) {
           return DC(a, c)
       })
   };
   var GC = function(a, b, c) {
       this.j = a;
       this.D = b;
       this.m = void 0 === c ? function() {}
       : c
   }
     , HC = function(a, b, c) {
       return new GC(a,b,c)
   };
   GC.prototype.start = function() {
       if (this.j === this.j.top)
           try {
               uC(this.j),
               IC(this)
           } catch (a) {}
   }
   ;
   var IC = function(a) {
       var b = ib(new Rf(mt,"https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
           id: a.D,
           ers: 3
       });
       tC(a.j, b, function() {
           a.m(!0)
       }, function() {
           a.m(!1)
       })
   };
   var JC = u.Promise;
   var KC = function(a) {
       this.m = a
   };
   KC.prototype.send = function(a, b, c) {
       this.m.then(function(d) {
           d.send(a, b, c)
       })
   }
   ;
   KC.prototype.j = function(a, b) {
       return this.m.then(function(c) {
           return c.j(a, b)
       })
   }
   ;
   var LC = function(a) {
       this.data = a
   };
   var MC = function(a) {
       this.m = a
   };
   MC.prototype.send = function(a, b, c) {
       c = void 0 === c ? [] : c;
       var d = new MessageChannel;
       NC(d.port1, b);
       this.m.postMessage(a, [d.port2].concat(c))
   }
   ;
   MC.prototype.j = function(a, b) {
       var c = this;
       return new JC(function(d) {
           c.send(a, d, b)
       }
       )
   }
   ;
   var OC = function(a, b) {
       NC(a, b);
       return new MC(a)
   }
     , NC = function(a, b) {
       b && (a.onmessage = function(c) {
           b(new LC(c.data,OC(c.ports[0])))
       }
       )
   };
   var tj = function(a) {
       var b = a.cc
         , c = void 0 === a.La ? "ZNWN1d" : a.La
         , d = void 0 === a.onMessage ? void 0 : a.onMessage
         , e = void 0 === a.rc ? void 0 : a.rc;
       return PC({
           destination: a.destination,
           Cd: function() {
               return b.contentWindow
           },
           af: QC(a.origin),
           La: c,
           onMessage: d,
           rc: e
       })
   }
     , PC = function(a) {
       var b = a.destination
         , c = a.Cd
         , d = a.af
         , e = void 0 === a.ed ? void 0 : a.ed
         , f = a.La
         , g = void 0 === a.onMessage ? void 0 : a.onMessage
         , h = void 0 === a.rc ? void 0 : a.rc
         , k = Object.create(null);
       d.forEach(function(l) {
           k[l] = !0
       });
       return new KC(new JC(function(l, m) {
           var n = function(p) {
               if (p.source && p.source === c())
                   if (!0 !== k[p.origin]) {
                       b.removeEventListener("message", n, !1);
                       var r = d.join(", ");
                       m(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                   } else
                       (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1),
                       e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(OC(p.ports[0], g)),
                       h && h(p)))
           };
           b.addEventListener("message", n, !1)
       }
       ))
   }
     , QC = function(a) {
       a = "string" === typeof a ? [a] : a;
       var b = Object.create(null);
       a.forEach(function(c) {
           if ("null" === c)
               throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
           b[c] = !0
       });
       return a
   };
   var hh = (0,
   B.Ma)(function(a) {
       return "number" === typeof a
   }, "number")
     , eh = (0,
   B.Ma)(function(a) {
       return "string" === typeof a
   }, "string")
     , ih = (0,
   B.Ma)(function(a) {
       return "boolean" === typeof a
   }, "boolean")
     , kh = (0,
   B.Ma)(function(a) {
       return null === a
   }, "null")
     , jh = (0,
   B.Ma)(function(a) {
       return void 0 === a
   }, "undefined")
     , lh = (0,
   B.Ma)(function(a) {
       return "function" === typeof a
   }, "Function")
     , mh = (0,
   B.Ma)(function(a) {
       return Array.isArray(a)
   }, "Array<unknown>");
   var io = function(a) {
       R.call(this, a)
   };
   _.O(io, R);
   var ho = function(a, b) {
       return w(a, 1, b)
   }
     , go = function(a, b) {
       return w(a, 2, b)
   }
     , fo = function(a, b) {
       return w(a, 3, b)
   }
     , eo = function(a, b) {
       return w(a, 5, b)
   }
     , co = function(a, b) {
       return w(a, 6, b)
   };
   var no = function(a) {
       R.call(this, a, -1, RC)
   };
   _.O(no, R);
   var mo = function(a, b) {
       return Kg(a, 1, b)
   }
     , lo = function(a, b) {
       return w(a, 2, b)
   }
     , RC = [1];
   var bo = function(a) {
       R.call(this, a)
   };
   _.O(bo, R);
   var ao = function(a, b) {
       return Zc(a, 1, b)
   };
   var Xn = function(a) {
       R.call(this, a)
   };
   _.O(Xn, R);
   var Wn = function(a, b) {
       return Zc(a, 1, b)
   }
     , Vn = function(a, b) {
       return Zc(a, 2, b)
   }
     , $n = function(a) {
       R.call(this, a)
   };
   _.O($n, R);
   $n.prototype.getWidth = function() {
       return Cj(this, 1)
   }
   ;
   var Zn = function(a, b) {
       return w(a, 1, b)
   };
   $n.prototype.getHeight = function() {
       return Cj(this, 2)
   }
   ;
   var Yn = function(a, b) {
       return w(a, 2, b)
   };
   var ko = function(a) {
       R.call(this, a)
   };
   _.O(ko, R);
   var jo = function(a, b) {
       return Zc(a, 1, b)
   };
   var TC = function(a) {
       R.call(this, a, -1, SC)
   };
   _.O(TC, R);
   var to = function(a) {
       var b = new TC;
       return Zc(b, 1, a)
   }
     , so = function(a, b) {
       return Zc(a, 2, b)
   }
     , ro = function(a, b) {
       return Zc(a, 3, b)
   }
     , qo = function(a) {
       var b = De();
       return Kg(a, 4, b)
   }
     , po = function(a, b) {
       return Zc(a, 6, b)
   }
     , oo = function(a, b) {
       return Hc(a, 7, b, 0)
   }
     , SC = [4];
   var UC = function(a) {
       R.call(this, a)
   };
   _.O(UC, R);
   var VC = function(a) {
       R.call(this, a)
   };
   _.O(VC, R);
   var Mh = function(a) {
       R.call(this, a)
   };
   _.O(Mh, R);
   var Og = function(a) {
       R.call(this, a)
   };
   _.O(Og, R);
   var Lg = function(a) {
       R.call(this, a)
   };
   _.O(Lg, R);
   var WC = function(a) {
       R.call(this, a)
   };
   _.O(WC, R);
   var Jg = function(a) {
       R.call(this, a, -1, XC)
   };
   _.O(Jg, R);
   Jg.prototype.getTagSessionCorrelator = function() {
       return Cj(this, 2)
   }
   ;
   var XC = [4]
     , Qg = [6, 7, 8, 9, 11];
   var Wh = function(a) {
       R.call(this, a, -1, YC)
   };
   _.O(Wh, R);
   var YC = [3];
   var Vh = function(a) {
       R.call(this, a, -1, ZC)
   };
   _.O(Vh, R);
   var ZC = [4];
   var Uh = function(a) {
       R.call(this, a, -1, $C)
   };
   _.O(Uh, R);
   Uh.prototype.getTagSessionCorrelator = function() {
       return Cj(this, 1)
   }
   ;
   var $C = [2];
   var Th = function(a) {
       R.call(this, a)
   };
   _.O(Th, R);
   var Zh = [4];
   var aD = navigator
     , bD = function(a) {
       var b = 1, c;
       if (void 0 != a && "" != a)
           for (b = 0,
           c = a.length - 1; 0 <= c; c--) {
               var d = a.charCodeAt(c);
               b = (b << 6 & 268435455) + d + (d << 14);
               d = b & 266338304;
               b = 0 != d ? b ^ d >> 21 : b
           }
       return b
   }
     , cD = function(a, b) {
       if (!a || "none" == a)
           return 1;
       a = String(a);
       "auto" == a && (a = b,
       "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
       return bD(a.toLowerCase())
   }
     , dD = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
     , eD = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
     , fD = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
   var ni = function(a) {
       return !!a && a.top == a
   }
     , gD = function(a, b, c) {
       b = b || a.google_ad_width;
       c = c || a.google_ad_height;
       if (ni(a))
           return !1;
       var d = a.document
         , e = d.documentElement;
       if (b && c) {
           var f = 1
             , g = 1;
           a.innerHeight ? (f = a.innerWidth,
           g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
           g = e.clientHeight) : d.body && (f = d.body.clientWidth,
           g = d.body.clientHeight);
           if (g > 2 * c || f > 2 * b)
               return !1
       }
       return !0
   };
   var hD = function(a) {
       a = void 0 === a ? window : a;
       return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
   };
   var Ti = function() {
       this.j = [];
       this.m = -1
   };
   Ti.prototype.set = function(a, b) {
       b = void 0 === b ? !0 : b;
       0 <= a && 52 > a && _.t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b,
       this.m = -1)
   }
   ;
   Ti.prototype.get = function(a) {
       return !!this.j[a]
   }
   ;
   var Vi = function(a) {
       -1 === a.m && (a.m = pt(a.j, function(b, c, d) {
           return c ? b + Math.pow(2, d) : b
       }));
       return a.m
   };
   var ie = function(a) {
       R.call(this, a, -1, iD)
   };
   _.O(ie, R);
   var je = function(a, b) {
       Qk(a, 1, ne, b)
   }
     , ne = function(a) {
       R.call(this, a)
   };
   _.O(ne, R);
   var le = function(a) {
       var b = new ne;
       return Hc(b, 1, a, 0)
   }
     , ke = function(a, b) {
       return Hc(a, 2, b, 0)
   }
     , iD = [1];
   var ue, Nq;
   _.jD = function(a, b, c, d) {
       ge(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
   }
   ;
   ue = function(a, b) {
       var c = void 0 === c ? !1 : c;
       var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
       _.il(a, function(e, f) {
           e && (d += "&" + f + "=" + encodeURIComponent(e))
       });
       Nq(d, c)
   }
   ;
   Nq = function(a, b) {
       var c = window;
       b = void 0 === b ? !1 : b;
       c.fetch ? c.fetch(a, {
           keepalive: !0,
           credentials: "include",
           redirect: "follow",
           method: "get",
           mode: "no-cors"
       }) : _.jD(c, a, void 0, b)
   }
   ;
   var ye = function(a) {
       this.j = a || {
           cookie: ""
       }
   }
     , mD = function() {
       var a = kD;
       if (!_.q.navigator.cookieEnabled)
           return !1;
       if (!a.isEmpty())
           return !0;
       a.set("TESTCOOKIESENABLED", "1", {
           Sc: 60
       });
       if ("1" !== a.get("TESTCOOKIESENABLED"))
           return !1;
       lD(a, "TESTCOOKIESENABLED");
       return !0
   };
   ye.prototype.set = function(a, b, c) {
       var d = !1;
       if ("object" === typeof c) {
           var e = c.jh;
           d = c.mf || !1;
           var f = c.domain || void 0;
           var g = c.path || void 0;
           var h = c.Sc
       }
       if (/[;=\s]/.test(a))
           throw Error('Invalid cookie name "' + a + '"');
       if (/[;\r\n]/.test(b))
           throw Error('Invalid cookie value "' + b + '"');
       void 0 === h && (h = -1);
       this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
   }
   ;
   ye.prototype.get = function(a, b) {
       for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
           f = wt(d[e]);
           if (0 == f.lastIndexOf(c, 0))
               return f.slice(c.length);
           if (f == a)
               return ""
       }
       return b
   }
   ;
   var lD = function(a, b, c, d) {
       a.get(b);
       a.set(b, "", {
           Sc: 0,
           path: c,
           domain: d
       })
   };
   ye.prototype.isEmpty = function() {
       return !this.j.cookie
   }
   ;
   ye.prototype.clear = function() {
       for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
           e = wt(a[f]),
           d = e.indexOf("="),
           -1 == d ? (b.push(""),
           c.push(e)) : (b.push(e.substring(0, d)),
           c.push(e.substring(d + 1)));
       for (a = b.length - 1; 0 <= a; a--)
           lD(this, b[a])
   }
   ;
   var kD = new ye("undefined" == typeof document ? null : document);
   var nD = null
     , en = function() {
       if (null === nD) {
           nD = "";
           try {
               var a = "";
               try {
                   a = _.q.top.location.hash
               } catch (c) {
                   a = _.q.location.hash
               }
               if (a) {
                   var b = a.match(/\bdeid=([\d,]+)/);
                   nD = b ? b[1] : ""
               }
           } catch (c) {}
       }
       return nD
   };
   var oD, Ng;
   _.Fe = function(a) {
       a = void 0 === a ? _.q : a;
       return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : eg()
   }
   ;
   _.yn = function(a) {
       a = void 0 === a ? _.q : a;
       return (a = a.performance) && a.now ? a.now() : null
   }
   ;
   oD = function(a, b) {
       b = void 0 === b ? _.q : b;
       var c, d;
       return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
   }
   ;
   Ng = function(a) {
       a = void 0 === a ? _.q : a;
       var b = Math.min(oD("domLoading", a) || Infinity, oD("domInteractive", a) || Infinity);
       return Infinity == b ? Math.max(oD("responseEnd", a), oD("navigationStart", a)) : b
   }
   ;
   var pD = function(a, b, c, d, e) {
       this.label = a;
       this.type = b;
       this.value = c;
       this.duration = void 0 === d ? 0 : d;
       this.uniqueId = Math.random();
       this.slotId = e;
       this.taskId = void 0
   };
   var Qh = _.q.performance
     , qD = !!(Qh && Qh.mark && Qh.measure && Qh.clearMarks)
     , Rh = Bi(function() {
       var a;
       if (a = qD)
           a = en(),
           a = !!a.indexOf && 0 <= a.indexOf("1337");
       return a
   })
     , rD = function(a, b) {
       this.m = [];
       var c = null;
       b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
       this.m = b.google_js_reporting_queue,
       c = b.google_measure_js_timing);
       this.j = Rh() || (null != c ? c : Math.random() < a)
   }
     , sD = function(a, b, c, d, e, f) {
       a.j && (b = new pD(b,c,d,void 0 === e ? 0 : e,f),
       !a.j || 2048 < a.m.length || a.m.push(b))
   };
   rD.prototype.start = function(a, b) {
       if (!this.j)
           return null;
       a = new pD(a,b,_.yn() || _.Fe());
       b = "goog_" + a.label + "_" + a.uniqueId + "_start";
       Qh && Rh() && Qh.mark(b);
       return a
   }
   ;
   rD.prototype.end = function(a) {
       if (this.j && "number" === typeof a.value) {
           a.duration = (_.yn() || _.Fe()) - a.value;
           var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
           Qh && Rh() && Qh.mark(b);
           !this.j || 2048 < this.m.length || this.m.push(a)
       }
   }
   ;
   var tD = function(a, b, c) {
       var d = _.yn();
       d && sD(a, b, 9, d, 0, c)
   };
   var zl = function(a) {
       a = Error.call(this, a);
       this.message = a.message;
       "stack"in a && (this.stack = a.stack);
       _.t(Object, "setPrototypeOf").call(Object, this, zl.prototype)
   };
   _.O(zl, Error);
   zl.prototype.name = "PublisherInputError";
   var uD = function(a) {
       a = Error.call(this, a);
       this.message = a.message;
       "stack"in a && (this.stack = a.stack);
       _.t(Object, "setPrototypeOf").call(Object, this, uD.prototype)
   };
   _.O(uD, Error);
   uD.prototype.name = "ServerError";
   var vD = function(a) {
       a = Error.call(this, a);
       this.message = a.message;
       "stack"in a && (this.stack = a.stack);
       _.t(Object, "setPrototypeOf").call(Object, this, vD.prototype)
   };
   _.O(vD, Error);
   vD.prototype.name = "NetworkError";
   var wD;
   wD = {
       wg: 0,
       fe: 3,
       he: 4,
       xg: 5
   };
   var xD = wD.fe
     , yD = wD.he;
   _.F = function(a) {
       var b = "hb";
       if (a.hb && a.hasOwnProperty(b))
           return a.hb;
       b = new a;
       return a.hb = b
   }
   ;
   var zD = hx();
   var AD = function(a) {
       this.methodName = a
   }
     , BD = new AD(1)
     , CD = new AD(16)
     , DD = new AD(15)
     , ED = new AD(2)
     , FD = new AD(3)
     , GD = new AD(5)
     , HD = new AD(6)
     , ID = new AD(7)
     , JD = new AD(8)
     , KD = new AD(14)
     , LD = function(a, b, c) {
       return b[a.methodName] || c || function() {}
   };
   var MD = function() {
       this.j = function() {}
       ;
       this.D = function() {}
       ;
       this.m = function() {
           return []
       }
       ;
       this.H = function() {
           return []
       }
   }
     , ND = function(a, b) {
       a.j = LD(BD, b, function() {});
       a.m = function(c) {
           return LD(ED, b, function() {
               return []
           })(c, 2)
       }
       ;
       a.H = function() {
           return LD(FD, b, function() {
               return []
           })(2)
       }
       ;
       a.D = function(c) {
           LD(CD, b, function() {})(c, 2)
       }
   }
     , OD = function(a) {
       _.F(MD).j(a)
   }
     , vs = function(a) {
       _.F(MD).D(a)
   }
     , ws = function(a) {
       return _.F(MD).m(a)
   }
     , De = function() {
       return _.F(MD).H()
   };
   var PD, $k, dl;
   PD = function() {
       var a = {};
       this.m = function(b, c) {
           return null != a[b] ? a[b] : c
       }
       ;
       this.D = function(b, c) {
           return null != a[b] ? a[b] : c
       }
       ;
       this.H = function(b, c) {
           return null != a[b] ? a[b] : c
       }
       ;
       this.A = function(b, c) {
           return null != a[b] ? a[b] : c
       }
       ;
       this.j = function() {}
   }
   ;
   _.E = function(a) {
       return _.F(PD).m(a.j, a.defaultValue)
   }
   ;
   _.D = function(a) {
       return _.F(PD).D(a.j, a.defaultValue)
   }
   ;
   $k = function(a) {
       return _.F(PD).H(a.j, a.defaultValue)
   }
   ;
   dl = function(a) {
       return _.F(PD).A(a.j, a.defaultValue)
   }
   ;
   var QD = function() {};
   QD.j = function() {
       throw Error("Must be overridden");
   }
   ;
   var Ae = function() {
       this.j = 0
   };
   _.O(Ae, QD);
   Ae.hb = void 0;
   Ae.j = function() {
       return Ae.hb ? Ae.hb : Ae.hb = new Ae
   }
   ;
   var RD = function() {
       this.cache = {}
   }
     , Qe = function() {
       SD || (TD = _.D(YB),
       UD = _.D(XB),
       SD = new RD);
       return SD
   }
     , We = function(a) {
       var b = v(a, 3);
       if (!b)
           return 3;
       if (void 0 === v(a, 2))
           return 4;
       a = Date.now();
       return a > b + 36E5 * UD ? 2 : a > b + 36E5 * TD ? 1 : 0
   };
   RD.prototype.get = function(a, b) {
       if (this.cache[a])
           return {
               lb: this.cache[a],
               success: !0
           };
       var c = "";
       try {
           c = b.getItem("_GESPSK-" + a)
       } catch (g) {
           var d;
           Ee(6, a, null == (d = g) ? void 0 : d.message);
           return {
               lb: null,
               success: !1
           }
       }
       if (!c)
           return {
               lb: null,
               success: !0
           };
       try {
           var e = he(Ye, c);
           this.cache[a] = e;
           return {
               lb: e,
               success: !0
           }
       } catch (g) {
           var f;
           Ee(5, a, null == (f = g) ? void 0 : f.message);
           return {
               lb: null,
               success: !1
           }
       }
   }
   ;
   RD.prototype.set = function(a, b) {
       var c = (0,
       B.J)(v(a, 1))
         , d = "_GESPSK-" + c;
       w(a, 3, Date.now());
       try {
           b.setItem(d, a.aa())
       } catch (f) {
           var e;
           Ee(7, c, null == (e = f) ? void 0 : e.message);
           return !1
       }
       this.cache[c] = a;
       return !0
   }
   ;
   var SD = null
     , TD = 24
     , UD = 72;
   var Se = function(a) {
       return "string" === typeof a ? a : a instanceof Error ? a.message : null
   };
   var VD = function() {
       _.vC.apply(this, arguments);
       this.j = [];
       this.m = [];
       this.A = []
   };
   _.O(VD, _.vC);
   var WD = function(a, b, c) {
       a.m.push({
           jd: void 0 === c ? !1 : c,
           td: b
       })
   };
   VD.prototype.H = function() {
       this.j.length = 0;
       this.A.length = 0;
       this.m.length = 0;
       _.vC.prototype.H.call(this)
   }
   ;
   _.lg = function() {
       var a = this;
       this.promise = new u.Promise(function(b, c) {
           a.resolve = b;
           a.reject = c
       }
       )
   }
   ;
   var XD = function(a) {
       a = Error.call(this, a);
       this.message = a.message;
       "stack"in a && (this.stack = a.stack);
       _.t(Object, "setPrototypeOf").call(Object, this, XD.prototype);
       this.name = "InputError"
   };
   _.O(XD, Error);
   var YD = function() {
       var a = this;
       this.M = this.D = null;
       this.l = -1;
       this.H = new _.lg;
       this.m = !1;
       this.H.promise.then(function() {
           -1 !== a.l && (a.M = _.Fe() - a.l)
       }, function() {})
   }
     , ZD = function() {
       YD.apply(this, arguments)
   };
   _.O(ZD, YD);
   Es.Object.defineProperties(ZD.prototype, {
       promise: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.H.promise
           }
       },
       A: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.m
           }
       },
       I: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.M
           }
       }
   });
   var ur = function() {
       ZD.apply(this, arguments)
   };
   _.O(ur, ZD);
   ur.prototype.j = function(a) {
       this.m || (this.m = !0,
       this.D = a,
       this.H.resolve(a))
   }
   ;
   var $D = function(a, b) {
       null == b ? Pr(a) : a.j(b)
   }
     , Pr = function(a) {
       a.m || (a.m = !0,
       a.D = null,
       a.H.resolve(null))
   }
     , aE = function(a, b) {
       a.m || (a.m = !0,
       a.D = null,
       a.o = b,
       a.H.reject(b))
   }
     , bE = function(a) {
       YD.call(this);
       this.j = a
   };
   _.O(bE, YD);
   Es.Object.defineProperties(bE.prototype, {
       error: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.j.o
           }
       }
   });
   var cE = function(a) {
       bE.call(this, a);
       this.j = a
   };
   _.O(cE, bE);
   Es.Object.defineProperties(cE.prototype, {
       value: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.j.D
           }
       }
   });
   var dE = function() {
       bE.apply(this, arguments)
   };
   _.O(dE, bE);
   Es.Object.defineProperties(dE.prototype, {
       value: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.j.D
           }
       }
   });
   var eE = function() {
       bE.apply(this, arguments)
   };
   _.O(eE, bE);
   Es.Object.defineProperties(eE.prototype, {
       value: {
           configurable: !0,
           enumerable: !0,
           get: function() {
               return this.j.D
           }
       }
   });
   var fE = function() {
       ZD.apply(this, arguments)
   };
   _.O(fE, ZD);
   fE.prototype.notify = function() {
       this.m || (this.m = !0,
       this.D = null,
       this.H.resolve(null))
   }
   ;
   var gE = function(a, b) {
       b = void 0 === b ? 0 : b;
       _.vC.call(this);
       this.id = a;
       this.ja = b;
       this.ea = !1;
       this.M = -1;
       this.A = new VD;
       _.Co(this, this.A)
   };
   _.O(gE, _.vC);
   gE.prototype.start = function() {
       var a = this, b, c, d, e, f;
       return _.ab(function(g) {
           switch (g.j) {
           case 1:
               if (a.ea)
                   return g.return();
               a.ea = !0;
               g.D = 2;
               b = a;
               return bb(g, $e(a.A.m, a.ja), 4);
           case 4:
               b.M = g.m;
               if (a.D) {
                   g.j = 5;
                   break
               }
               for (var h = 0, k = _.x(a.A.A), l = k.next(); !l.done; l = k.next()) {
                   if (null === l.value.j.D)
                       throw Error("missing input: " + a.id + "/" + h);
                   ++h
               }
               c = _.x(a.A.j);
               for (d = c.next(); !d.done; d = c.next())
                   e = d.value,
                   e.l = _.Fe();
               return bb(g, a.j(), 5);
           case 5:
               db(g, 0);
               break;
           case 2:
               f = fb(g);
               if (a.D)
                   return g.return();
               f instanceof XD ? a.I(f) : f instanceof Error && (a.T(f),
               a.m(f));
               g.j = 0
           }
       })
   }
   ;
   var U = function(a) {
       var b = new ur;
       a.A.j.push(b);
       return b
   }
     , hE = function(a) {
       var b = new fE;
       a.A.j.push(b);
       return b
   }
     , V = function(a, b) {
       WD(a.A, b);
       b = new dE(b);
       a.A.A.push(b);
       return b
   }
     , Y = function(a, b) {
       WD(a.A, b);
       return new cE(b)
   }
     , iE = function(a, b) {
       WD(a.A, b, !0);
       return new cE(b)
   }
     , jE = function(a, b) {
       WD(a.A, b)
   };
   gE.prototype.I = function() {}
   ;
   gE.prototype.m = function(a) {
       if (this.A.j.length) {
           a = new XD(a.message);
           for (var b = _.x(this.A.j), c = b.next(); !c.done; c = b.next())
               if (c = c.value,
               !c.A) {
                   var d = a;
                   c.m = !0;
                   c.o = d;
                   c.H.reject(d)
               }
       }
   }
   ;
   var kE = function(a, b) {
       gE.call(this, a);
       this.id = a;
       this.K = b
   };
   _.O(kE, gE);
   kE.prototype.T = function(a) {
       this.K(this.id, a)
   }
   ;
   var jf = function(a, b, c, d) {
       kE.call(this, 658, d);
       this.collectorFunction = a;
       this.N = c;
       this.l = U(this);
       this.o = U(this);
       this.C = U(this);
       this.G = Y(this, b)
   };
   _.O(jf, kE);
   jf.prototype.j = function() {
       var a = this;
       if (this.G.value) {
           var b = function(f) {
               a.l.j({
                   id: (0,
                   B.J)(v(f, 1)),
                   collectorGeneratedData: v(f, 2)
               })
           }
             , c = this.G.value
             , d = (0,
           B.J)(v(c, 1))
             , e = We(c);
           af(c);
           switch (e) {
           case 0:
               b(c);
               lE(this);
               break;
           case 1:
               b(c);
               this.o.j(this.collectorFunction);
               this.C.j(c);
               break;
           case 3:
           case 2:
           case 4:
               w(c, 2, null),
               Te(d, c, this.collectorFunction, this.N).then(b),
               lE(this)
           }
       } else
           Pr(this.l),
           lE(this)
   }
   ;
   var lE = function(a) {
       Pr(a.o);
       Pr(a.C)
   };
   var df = function(a, b, c) {
       kE.call(this, 1027, c);
       this.Ab = a;
       this.o = b;
       this.l = U(this)
   };
   _.O(df, kE);
   df.prototype.j = function() {
       var a = Qe().get(this.Ab, this.o).lb;
       if (!a) {
           a = Xe(new Ye, this.Ab);
           var b = _.D(Oe) || null;
           a = w(a, 8, b);
           a = w(a, 3, Date.now());
           Re(a, 100, this.o)
       }
       this.l.j(a)
   }
   ;
   var ff = function(a, b, c) {
       kE.call(this, 1029, c);
       this.l = b;
       this.o = U(this);
       this.C = V(this, a)
   };
   _.O(ff, kE);
   ff.prototype.j = function() {
       var a = this.C.value
         , b = Date.now();
       if (this.l) {
           var c = (0,
           B.J)(Pe(a, 8)), d, e = null != (d = v(a, 7)) ? d : b;
           c < this.l && w(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
       }
       this.o.j(a)
   }
   ;
   var hf = function(a, b, c, d) {
       kE.call(this, 1030, d);
       this.o = b;
       this.C = c;
       this.l = U(this);
       this.G = V(this, a)
   };
   _.O(hf, kE);
   hf.prototype.j = function() {
       var a = this.G.value, b, c = null != (b = Pe(a, 8)) ? b : 0, d;
       b = null != (d = v(a, 7)) ? d : Date.now();
       1 > c && this.o ? (d = {},
       Ee(22, (0,
       B.J)(v(a, 1)), null, (d.t = String(b),
       d.cr = String(c),
       d.cs = String(We(a)),
       d)),
       Re(a, 104, this.C),
       Pr(this.l)) : this.l.j(a)
   }
   ;
   var kf = function(a, b, c, d) {
       kE.call(this, 662, d);
       this.C = c;
       this.l = Y(this, a);
       this.o = Y(this, b)
   };
   _.O(kf, kE);
   kf.prototype.j = function() {
       var a = this;
       this.o.value && this.l.value && bf().then(function() {
           var b = (0,
           B.J)(a.o.value);
           Te((0,
           B.J)(v(b, 1)), b, (0,
           B.J)(a.l.value), a.C)
       })
   }
   ;
   var ef = function(a, b, c) {
       kE.call(this, 1028, c);
       this.o = b;
       this.l = U(this);
       this.C = V(this, a)
   };
   _.O(ef, kE);
   ef.prototype.j = function() {
       var a = this.C.value
         , b = (0,
       B.J)(v(a, 1));
       this.o && (nl(a, 8) || (Ee(33, b),
       w(a, 8, this.o)),
       nl(a, 7) || (Ee(34, b),
       w(a, 7, Math.round(Date.now() / 1E3 / 60))));
       nl(a, 3) || Ee(35, b);
       this.l.j(a)
   }
   ;
   var cf = function() {
       _.vC.apply(this, arguments);
       this.j = []
   };
   _.O(cf, _.vC);
   var M = function(a, b) {
       _.Co(a, b);
       a.j.push(b)
   }
     , lf = function(a, b) {
       b = _.x(b);
       for (var c = b.next(); !c.done; c = b.next())
           M(a, c.value)
   }
     , mf = function(a) {
       a = _.x(a.j);
       for (var b = a.next(); !b.done; b = a.next())
           b.value.start()
   };
   cf.prototype.H = function() {
       _.vC.prototype.H.call(this);
       this.j.length = 0
   }
   ;
   var sf = function(a, b) {
       this.j = b;
       this.H = [];
       this.D = [];
       this.m = [];
       a = _.x(a);
       for (b = a.next(); !b.done; b = a.next())
           this.push(b.value)
   };
   sf.prototype.push = function(a) {
       if (a) {
           var b = a.id;
           a = a.collectorFunction;
           if ("string" !== typeof b)
               Ee(37, "invalid-id"),
               Re(Xe(new Ye, b), 102, this.j);
           else if ("function" !== typeof a)
               Ee(14, b),
               Re(Xe(new Ye, b), 105, this.j);
           else {
               b = nf(b, a, this.j, this.A);
               this.H.push(b);
               a = _.x(this.D);
               for (var c = a.next(); !c.done; c = a.next())
                   b.then(c.value)
           }
       } else
           Ee(39, ""),
           Re(Xe(new Ye, "UNKNOWN_COLLECTOR_ID"), 110, this.j)
   }
   ;
   sf.prototype.addOnSignalResolveCallback = function(a) {
       this.D.push(a);
       for (var b = _.x(this.H), c = b.next(); !c.done; c = b.next())
           c.value.then(a)
   }
   ;
   sf.prototype.addErrorHandler = function(a) {
       this.m.push(a)
   }
   ;
   sf.prototype.A = function(a, b) {
       for (var c = _.x(this.m), d = c.next(); !d.done; d = c.next())
           d = d.value,
           d(a, b)
   }
   ;
   var rf = function(a) {
       this.push = function(b) {
           a.push(b)
       }
       ;
       this.addOnSignalResolveCallback = function(b) {
           a.addOnSignalResolveCallback(b)
       }
       ;
       this.addErrorHandler = function(b) {
           a.addErrorHandler(b)
       }
   };
   var uf = function(a, b) {
       kE.call(this, 1036, b);
       this.l = U(this);
       this.o = V(this, a)
   };
   _.O(uf, kE);
   uf.prototype.j = function() {
       var a = this.o.value;
       0 === We(a) ? Pr(this.l) : this.l.j(a)
   }
   ;
   var vf = function(a, b, c, d) {
       kE.call(this, 1035, d);
       this.l = b;
       this.o = c;
       U(this);
       this.C = Y(this, a)
   };
   _.O(vf, kE);
   vf.prototype.j = function() {
       var a = this
         , b = this.C.value;
       if (b) {
           var c = (0,
           B.J)(v(b, 1))
             , d = this.l.toString()
             , e = {};
           Ee(30, c, null, (e.url = d,
           e));
           var f = document.createElement("script");
           f.setAttribute("esp-signal", "true");
           Ua(f, this.l);
           var g = function() {
               var h = {};
               Ee(31, (0,
               B.J)(c), null, (h.url = d,
               h));
               Re(b, 109, a.o);
               _.fe(f, "error", g)
           };
           document.head.appendChild(f);
           _.Za(f, "error", g)
       }
   }
   ;
   var pE, mE, oE;
   pE = function(a) {
       var b = {
           He: !1
       }
         , c = mE(a, ".google-auto-placed")
         , d = mE(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")
         , e = mE(a, "ins.adsbygoogle[data-ad-format=autorelaxed]");
       var f = (_.nE(a) || mE(a, "div[id^=div-gpt-ad]")).concat(mE(a, "iframe[id^=google_ads_iframe]"));
       var g = mE(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
         , h = mE(a, "ins.adsbygoogle-ablated-ad-slot")
         , k = mE(a, "div.googlepublisherpluginad")
         , l = mE(a, "html > ins.adsbygoogle")
         , m = [].concat(mE(a, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), mE(a, "body ins.adsbygoogle"));
       a = [];
       b = _.x([[b.Pg, c], [b.He, d], [b.Sg, e], [b.Qg, f], [b.Tg, g], [b.Og, h], [b.Rg, k], [b.Ug, l]]);
       for (c = b.next(); !c.done; c = b.next())
           d = _.x(c.value),
           c = d.next().value,
           d = d.next().value,
           !1 === c ? a = a.concat(d) : m = m.concat(d);
       m = oE(m);
       b = oE(a);
       a = m.slice(0);
       m = _.x(b);
       for (b = m.next(); !b.done; b = m.next())
           for (b = b.value,
           c = 0; c < a.length; c++)
               (b.contains(a[c]) || a[c].contains(b)) && a.splice(c, 1);
       return a
   }
   ;
   _.nE = function(a) {
       var b = xf(a);
       return b ? _.ig(dd(b.pubads().getSlots(), function(c) {
           return a.document.getElementById(c.getSlotElementId())
       }), function(c) {
           return null != c
       }) : null
   }
   ;
   mE = function(a, b) {
       return ea(a.document.querySelectorAll(b))
   }
   ;
   oE = function(a) {
       var b = [];
       a = _.x(a);
       for (var c = a.next(); !c.done; c = a.next()) {
           c = c.value;
           for (var d = !0, e = 0; e < b.length; e++) {
               var f = b[e];
               if (f.contains(c)) {
                   d = !1;
                   break
               }
               if (c.contains(f)) {
                   d = !1;
                   b[e] = c;
                   break
               }
           }
           d && b.push(c)
       }
       return b
   }
   ;
   var qE = 0
     , rE = Kd(Sf(new Rf(mt,"https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
   var sE = function() {
       this.j = function() {}
   }
     , tE = function() {
       var a = _.F(us).o;
       _.F(sE).j(a)
   };
   var vE = function() {
       if (void 0 === b) {
           var a = void 0 === a ? _.q : a;
           var b = a.ggeac || (a.ggeac = {})
       }
       a = b;
       ND(_.F(MD), a);
       uE(b);
       _.F(sE).j = LD(KD, b);
       _.F(PD).j()
   }
     , uE = function(a) {
       var b = _.F(PD);
       b.m = function(c, d) {
           return LD(GD, a, function() {
               return !1
           })(c, d, 2)
       }
       ;
       b.D = function(c, d) {
           return LD(HD, a, function() {
               return 0
           })(c, d, 2)
       }
       ;
       b.H = function(c, d) {
           return LD(ID, a, function() {
               return ""
           })(c, d, 2)
       }
       ;
       b.A = function(c, d) {
           return LD(JD, a, function() {
               return []
           })(c, d, 2)
       }
       ;
       b.j = function() {
           LD(DD, a)(2)
       }
   };
   var fi = function(a, b, c) {
       a && null !== b && b != b.top && (b = b.top);
       try {
           return (void 0 === c ? 0 : c) ? (new _.ti(b.innerWidth,b.innerHeight)).round() : _.Sw(b || window).round()
       } catch (d) {
           return new _.ti(-12245933,-12245933)
       }
   }
     , wE = function(a) {
       return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
   }
     , ln = function(a, b) {
       b = void 0 === b ? _.q : b;
       a = a.scrollingElement || wE(a);
       return new _.qi(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
   }
     , Ei = function(a) {
       try {
           return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
       } catch (b) {
           return !1
       }
   };
   var xE = function(a) {
       R.call(this, a)
   };
   _.O(xE, R);
   var ve = function(a) {
       return H(a, 5)
   };
   var yE = function(a) {
       this.j = a;
       this.m = 0
   }
     , AE = function(a, b) {
       if (0 === a.m) {
           if (zE(a, "__gads", b))
               b = !0;
           else {
               var c = a.j;
               ve(b) && xe(c) && (new ye(c.document)).set("GoogleAdServingTest", "Good", void 0);
               if (c = "Good" === ze("GoogleAdServingTest", b, a.j)) {
                   var d = a.j;
                   ve(b) && xe(d) && lD(new ye(d.document), "GoogleAdServingTest")
               }
               b = c
           }
           a.m = b ? 2 : 1
       }
       return 2 === a.m
   }
     , zE = function(a, b, c) {
       return c ? ze(b, c, a.j) : null
   }
     , BE = function(a, b, c, d) {
       if (d) {
           var e = {
               Sc: v(c, 2) - Date.now() / 1E3,
               path: v(c, 3),
               domain: v(c, 4),
               mf: !1
           };
           a = a.j;
           ve(d) && xe(a) && (new ye(a.document)).set(b, v(c, 1), e)
       }
   }
     , CE = function(a, b, c) {
       if (c && ze(b, c, a.j)) {
           var d = a.j.location.hostname;
           if ("localhost" === d)
               d = ["localhost"];
           else if (d = d.split("."),
           2 > d.length)
               d = [];
           else {
               for (var e = [], f = 0; f < d.length - 1; ++f)
                   e.push(d.slice(f).join("."));
               d = e
           }
           d = _.x(d);
           for (e = d.next(); !e.done; e = d.next())
               f = a.j,
               ve(c) && xe(f) && lD(new ye(f.document), b, "/", e.value)
       }
   };
   var DE = {}
     , EE = (DE[3] = Kd(Sf(new Rf(mt,"https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))),
   DE)
     , FE = {}
     , GE = (FE[3] = Kd(Sf(new Rf(mt,"https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))),
   FE);
   var HE = function(a) {
       this.j = a;
       this.m = Um()
   }
     , IE = function(a) {
       var b = {};
       _.ot(a, function(c) {
           b[c.j] = c.m
       });
       return b
   };
   var JE = Q(["https://adservice.google.com/adsid/integrator.", ""])
     , KE = Q(["https://adservice.google.ad/adsid/integrator.", ""])
     , LE = Q(["https://adservice.google.ae/adsid/integrator.", ""])
     , ME = Q(["https://adservice.google.com.af/adsid/integrator.", ""])
     , NE = Q(["https://adservice.google.com.ag/adsid/integrator.", ""])
     , OE = Q(["https://adservice.google.com.ai/adsid/integrator.", ""])
     , PE = Q(["https://adservice.google.al/adsid/integrator.", ""])
     , QE = Q(["https://adservice.google.co.ao/adsid/integrator.", ""])
     , RE = Q(["https://adservice.google.com.ar/adsid/integrator.", ""])
     , SE = Q(["https://adservice.google.as/adsid/integrator.", ""])
     , TE = Q(["https://adservice.google.at/adsid/integrator.", ""])
     , UE = Q(["https://adservice.google.com.au/adsid/integrator.", ""])
     , VE = Q(["https://adservice.google.az/adsid/integrator.", ""])
     , WE = Q(["https://adservice.google.com.bd/adsid/integrator.", ""])
     , XE = Q(["https://adservice.google.be/adsid/integrator.", ""])
     , YE = Q(["https://adservice.google.bf/adsid/integrator.", ""])
     , ZE = Q(["https://adservice.google.bg/adsid/integrator.", ""])
     , $E = Q(["https://adservice.google.com.bh/adsid/integrator.", ""])
     , aF = Q(["https://adservice.google.bi/adsid/integrator.", ""])
     , bF = Q(["https://adservice.google.bj/adsid/integrator.", ""])
     , cF = Q(["https://adservice.google.com.bn/adsid/integrator.", ""])
     , dF = Q(["https://adservice.google.com.bo/adsid/integrator.", ""])
     , eF = Q(["https://adservice.google.com.br/adsid/integrator.", ""])
     , fF = Q(["https://adservice.google.bs/adsid/integrator.", ""])
     , gF = Q(["https://adservice.google.bt/adsid/integrator.", ""])
     , hF = Q(["https://adservice.google.co.bw/adsid/integrator.", ""])
     , iF = Q(["https://adservice.google.com.bz/adsid/integrator.", ""])
     , jF = Q(["https://adservice.google.ca/adsid/integrator.", ""])
     , kF = Q(["https://adservice.google.cd/adsid/integrator.", ""])
     , lF = Q(["https://adservice.google.cf/adsid/integrator.", ""])
     , mF = Q(["https://adservice.google.cg/adsid/integrator.", ""])
     , nF = Q(["https://adservice.google.ch/adsid/integrator.", ""])
     , oF = Q(["https://adservice.google.ci/adsid/integrator.", ""])
     , pF = Q(["https://adservice.google.co.ck/adsid/integrator.", ""])
     , qF = Q(["https://adservice.google.cl/adsid/integrator.", ""])
     , rF = Q(["https://adservice.google.cm/adsid/integrator.", ""])
     , sF = Q(["https://adservice.google.com.co/adsid/integrator.", ""])
     , tF = Q(["https://adservice.google.co.cr/adsid/integrator.", ""])
     , uF = Q(["https://adservice.google.com.cu/adsid/integrator.", ""])
     , vF = Q(["https://adservice.google.cv/adsid/integrator.", ""])
     , wF = Q(["https://adservice.google.com.cy/adsid/integrator.", ""])
     , xF = Q(["https://adservice.google.cz/adsid/integrator.", ""])
     , yF = Q(["https://adservice.google.de/adsid/integrator.", ""])
     , zF = Q(["https://adservice.google.dj/adsid/integrator.", ""])
     , AF = Q(["https://adservice.google.dk/adsid/integrator.", ""])
     , BF = Q(["https://adservice.google.dm/adsid/integrator.", ""])
     , CF = Q(["https://adservice.google.dz/adsid/integrator.", ""])
     , DF = Q(["https://adservice.google.com.ec/adsid/integrator.", ""])
     , EF = Q(["https://adservice.google.ee/adsid/integrator.", ""])
     , FF = Q(["https://adservice.google.com.eg/adsid/integrator.", ""])
     , GF = Q(["https://adservice.google.es/adsid/integrator.", ""])
     , HF = Q(["https://adservice.google.com.et/adsid/integrator.", ""])
     , IF = Q(["https://adservice.google.fi/adsid/integrator.", ""])
     , JF = Q(["https://adservice.google.com.fj/adsid/integrator.", ""])
     , KF = Q(["https://adservice.google.fm/adsid/integrator.", ""])
     , LF = Q(["https://adservice.google.fr/adsid/integrator.", ""])
     , MF = Q(["https://adservice.google.ga/adsid/integrator.", ""])
     , NF = Q(["https://adservice.google.ge/adsid/integrator.", ""])
     , OF = Q(["https://adservice.google.gg/adsid/integrator.", ""])
     , PF = Q(["https://adservice.google.com.gh/adsid/integrator.", ""])
     , QF = Q(["https://adservice.google.com.gi/adsid/integrator.", ""])
     , RF = Q(["https://adservice.google.gl/adsid/integrator.", ""])
     , SF = Q(["https://adservice.google.gm/adsid/integrator.", ""])
     , TF = Q(["https://adservice.google.gr/adsid/integrator.", ""])
     , UF = Q(["https://adservice.google.com.gt/adsid/integrator.", ""])
     , VF = Q(["https://adservice.google.gy/adsid/integrator.", ""])
     , WF = Q(["https://adservice.google.com.hk/adsid/integrator.", ""])
     , XF = Q(["https://adservice.google.hn/adsid/integrator.", ""])
     , YF = Q(["https://adservice.google.hr/adsid/integrator.", ""])
     , ZF = Q(["https://adservice.google.ht/adsid/integrator.", ""])
     , $F = Q(["https://adservice.google.hu/adsid/integrator.", ""])
     , aG = Q(["https://adservice.google.co.id/adsid/integrator.", ""])
     , bG = Q(["https://adservice.google.ie/adsid/integrator.", ""])
     , cG = Q(["https://adservice.google.co.il/adsid/integrator.", ""])
     , dG = Q(["https://adservice.google.im/adsid/integrator.", ""])
     , eG = Q(["https://adservice.google.co.in/adsid/integrator.", ""])
     , fG = Q(["https://adservice.google.iq/adsid/integrator.", ""])
     , gG = Q(["https://adservice.google.is/adsid/integrator.", ""])
     , hG = Q(["https://adservice.google.it/adsid/integrator.", ""])
     , iG = Q(["https://adservice.google.je/adsid/integrator.", ""])
     , jG = Q(["https://adservice.google.com.jm/adsid/integrator.", ""])
     , kG = Q(["https://adservice.google.jo/adsid/integrator.", ""])
     , lG = Q(["https://adservice.google.co.jp/adsid/integrator.", ""])
     , mG = Q(["https://adservice.google.co.ke/adsid/integrator.", ""])
     , nG = Q(["https://adservice.google.com.kh/adsid/integrator.", ""])
     , oG = Q(["https://adservice.google.ki/adsid/integrator.", ""])
     , pG = Q(["https://adservice.google.kg/adsid/integrator.", ""])
     , qG = Q(["https://adservice.google.co.kr/adsid/integrator.", ""])
     , rG = Q(["https://adservice.google.com.kw/adsid/integrator.", ""])
     , sG = Q(["https://adservice.google.kz/adsid/integrator.", ""])
     , tG = Q(["https://adservice.google.la/adsid/integrator.", ""])
     , uG = Q(["https://adservice.google.com.lb/adsid/integrator.", ""])
     , vG = Q(["https://adservice.google.li/adsid/integrator.", ""])
     , wG = Q(["https://adservice.google.lk/adsid/integrator.", ""])
     , xG = Q(["https://adservice.google.co.ls/adsid/integrator.", ""])
     , yG = Q(["https://adservice.google.lt/adsid/integrator.", ""])
     , zG = Q(["https://adservice.google.lu/adsid/integrator.", ""])
     , AG = Q(["https://adservice.google.lv/adsid/integrator.", ""])
     , BG = Q(["https://adservice.google.com.ly/adsid/integrator.", ""])
     , CG = Q(["https://adservice.google.md/adsid/integrator.", ""])
     , DG = Q(["https://adservice.google.me/adsid/integrator.", ""])
     , EG = Q(["https://adservice.google.mg/adsid/integrator.", ""])
     , FG = Q(["https://adservice.google.mk/adsid/integrator.", ""])
     , GG = Q(["https://adservice.google.ml/adsid/integrator.", ""])
     , HG = Q(["https://adservice.google.com.mm/adsid/integrator.", ""])
     , IG = Q(["https://adservice.google.mn/adsid/integrator.", ""])
     , JG = Q(["https://adservice.google.ms/adsid/integrator.", ""])
     , KG = Q(["https://adservice.google.com.mt/adsid/integrator.", ""])
     , LG = Q(["https://adservice.google.mu/adsid/integrator.", ""])
     , MG = Q(["https://adservice.google.mv/adsid/integrator.", ""])
     , NG = Q(["https://adservice.google.mw/adsid/integrator.", ""])
     , OG = Q(["https://adservice.google.com.mx/adsid/integrator.", ""])
     , PG = Q(["https://adservice.google.com.my/adsid/integrator.", ""])
     , QG = Q(["https://adservice.google.co.mz/adsid/integrator.", ""])
     , RG = Q(["https://adservice.google.com.na/adsid/integrator.", ""])
     , SG = Q(["https://adservice.google.com.ng/adsid/integrator.", ""])
     , TG = Q(["https://adservice.google.com.ni/adsid/integrator.", ""])
     , UG = Q(["https://adservice.google.ne/adsid/integrator.", ""])
     , VG = Q(["https://adservice.google.nl/adsid/integrator.", ""])
     , WG = Q(["https://adservice.google.no/adsid/integrator.", ""])
     , XG = Q(["https://adservice.google.com.np/adsid/integrator.", ""])
     , YG = Q(["https://adservice.google.nr/adsid/integrator.", ""])
     , ZG = Q(["https://adservice.google.nu/adsid/integrator.", ""])
     , $G = Q(["https://adservice.google.co.nz/adsid/integrator.", ""])
     , aH = Q(["https://adservice.google.com.om/adsid/integrator.", ""])
     , bH = Q(["https://adservice.google.com.pa/adsid/integrator.", ""])
     , cH = Q(["https://adservice.google.com.pe/adsid/integrator.", ""])
     , dH = Q(["https://adservice.google.com.pg/adsid/integrator.", ""])
     , eH = Q(["https://adservice.google.com.ph/adsid/integrator.", ""])
     , fH = Q(["https://adservice.google.com.pk/adsid/integrator.", ""])
     , gH = Q(["https://adservice.google.pl/adsid/integrator.", ""])
     , hH = Q(["https://adservice.google.pn/adsid/integrator.", ""])
     , iH = Q(["https://adservice.google.com.pr/adsid/integrator.", ""])
     , jH = Q(["https://adservice.google.ps/adsid/integrator.", ""])
     , kH = Q(["https://adservice.google.pt/adsid/integrator.", ""])
     , lH = Q(["https://adservice.google.com.py/adsid/integrator.", ""])
     , mH = Q(["https://adservice.google.com.qa/adsid/integrator.", ""])
     , nH = Q(["https://adservice.google.ro/adsid/integrator.", ""])
     , oH = Q(["https://adservice.google.ru/adsid/integrator.", ""])
     , pH = Q(["https://adservice.google.rw/adsid/integrator.", ""])
     , qH = Q(["https://adservice.google.com.sa/adsid/integrator.", ""])
     , rH = Q(["https://adservice.google.com.sb/adsid/integrator.", ""])
     , sH = Q(["https://adservice.google.sc/adsid/integrator.", ""])
     , tH = Q(["https://adservice.google.se/adsid/integrator.", ""])
     , uH = Q(["https://adservice.google.com.sg/adsid/integrator.", ""])
     , vH = Q(["https://adservice.google.sh/adsid/integrator.", ""])
     , wH = Q(["https://adservice.google.si/adsid/integrator.", ""])
     , xH = Q(["https://adservice.google.sk/adsid/integrator.", ""])
     , yH = Q(["https://adservice.google.sn/adsid/integrator.", ""])
     , zH = Q(["https://adservice.google.so/adsid/integrator.", ""])
     , AH = Q(["https://adservice.google.sm/adsid/integrator.", ""])
     , BH = Q(["https://adservice.google.sr/adsid/integrator.", ""])
     , CH = Q(["https://adservice.google.st/adsid/integrator.", ""])
     , DH = Q(["https://adservice.google.com.sv/adsid/integrator.", ""])
     , EH = Q(["https://adservice.google.td/adsid/integrator.", ""])
     , FH = Q(["https://adservice.google.tg/adsid/integrator.", ""])
     , GH = Q(["https://adservice.google.co.th/adsid/integrator.", ""])
     , HH = Q(["https://adservice.google.com.tj/adsid/integrator.", ""])
     , IH = Q(["https://adservice.google.tl/adsid/integrator.", ""])
     , JH = Q(["https://adservice.google.tm/adsid/integrator.", ""])
     , KH = Q(["https://adservice.google.tn/adsid/integrator.", ""])
     , LH = Q(["https://adservice.google.to/adsid/integrator.", ""])
     , MH = Q(["https://adservice.google.com.tr/adsid/integrator.", ""])
     , NH = Q(["https://adservice.google.tt/adsid/integrator.", ""])
     , OH = Q(["https://adservice.google.com.tw/adsid/integrator.", ""])
     , PH = Q(["https://adservice.google.co.tz/adsid/integrator.", ""])
     , QH = Q(["https://adservice.google.com.ua/adsid/integrator.", ""])
     , RH = Q(["https://adservice.google.co.ug/adsid/integrator.", ""])
     , SH = Q(["https://adservice.google.co.uk/adsid/integrator.", ""])
     , TH = Q(["https://adservice.google.com.uy/adsid/integrator.", ""])
     , UH = Q(["https://adservice.google.co.uz/adsid/integrator.", ""])
     , VH = Q(["https://adservice.google.com.vc/adsid/integrator.", ""])
     , WH = Q(["https://adservice.google.co.ve/adsid/integrator.", ""])
     , XH = Q(["https://adservice.google.vg/adsid/integrator.", ""])
     , YH = Q(["https://adservice.google.co.vi/adsid/integrator.", ""])
     , ZH = Q(["https://adservice.google.com.vn/adsid/integrator.", ""])
     , $H = Q(["https://adservice.google.vu/adsid/integrator.", ""])
     , aI = Q(["https://adservice.google.ws/adsid/integrator.", ""])
     , bI = Q(["https://adservice.google.rs/adsid/integrator.", ""])
     , cI = Q(["https://adservice.google.co.za/adsid/integrator.", ""])
     , dI = Q(["https://adservice.google.co.zm/adsid/integrator.", ""])
     , eI = Q(["https://adservice.google.co.zw/adsid/integrator.", ""])
     , fI = Q(["https://adservice.google.cat/adsid/integrator.", ""])
     , gI = new u.Map([[".google.com", function(a) {
       return y(JE, a)
   }
   ], [".google.ad", function(a) {
       return y(KE, a)
   }
   ], [".google.ae", function(a) {
       return y(LE, a)
   }
   ], [".google.com.af", function(a) {
       return y(ME, a)
   }
   ], [".google.com.ag", function(a) {
       return y(NE, a)
   }
   ], [".google.com.ai", function(a) {
       return y(OE, a)
   }
   ], [".google.al", function(a) {
       return y(PE, a)
   }
   ], [".google.co.ao", function(a) {
       return y(QE, a)
   }
   ], [".google.com.ar", function(a) {
       return y(RE, a)
   }
   ], [".google.as", function(a) {
       return y(SE, a)
   }
   ], [".google.at", function(a) {
       return y(TE, a)
   }
   ], [".google.com.au", function(a) {
       return y(UE, a)
   }
   ], [".google.az", function(a) {
       return y(VE, a)
   }
   ], [".google.com.bd", function(a) {
       return y(WE, a)
   }
   ], [".google.be", function(a) {
       return y(XE, a)
   }
   ], [".google.bf", function(a) {
       return y(YE, a)
   }
   ], [".google.bg", function(a) {
       return y(ZE, a)
   }
   ], [".google.com.bh", function(a) {
       return y($E, a)
   }
   ], [".google.bi", function(a) {
       return y(aF, a)
   }
   ], [".google.bj", function(a) {
       return y(bF, a)
   }
   ], [".google.com.bn", function(a) {
       return y(cF, a)
   }
   ], [".google.com.bo", function(a) {
       return y(dF, a)
   }
   ], [".google.com.br", function(a) {
       return y(eF, a)
   }
   ], [".google.bs", function(a) {
       return y(fF, a)
   }
   ], [".google.bt", function(a) {
       return y(gF, a)
   }
   ], [".google.co.bw", function(a) {
       return y(hF, a)
   }
   ], [".google.com.bz", function(a) {
       return y(iF, a)
   }
   ], [".google.ca", function(a) {
       return y(jF, a)
   }
   ], [".google.cd", function(a) {
       return y(kF, a)
   }
   ], [".google.cf", function(a) {
       return y(lF, a)
   }
   ], [".google.cg", function(a) {
       return y(mF, a)
   }
   ], [".google.ch", function(a) {
       return y(nF, a)
   }
   ], [".google.ci", function(a) {
       return y(oF, a)
   }
   ], [".google.co.ck", function(a) {
       return y(pF, a)
   }
   ], [".google.cl", function(a) {
       return y(qF, a)
   }
   ], [".google.cm", function(a) {
       return y(rF, a)
   }
   ], [".google.com.co", function(a) {
       return y(sF, a)
   }
   ], [".google.co.cr", function(a) {
       return y(tF, a)
   }
   ], [".google.com.cu", function(a) {
       return y(uF, a)
   }
   ], [".google.cv", function(a) {
       return y(vF, a)
   }
   ], [".google.com.cy", function(a) {
       return y(wF, a)
   }
   ], [".google.cz", function(a) {
       return y(xF, a)
   }
   ], [".google.de", function(a) {
       return y(yF, a)
   }
   ], [".google.dj", function(a) {
       return y(zF, a)
   }
   ], [".google.dk", function(a) {
       return y(AF, a)
   }
   ], [".google.dm", function(a) {
       return y(BF, a)
   }
   ], [".google.dz", function(a) {
       return y(CF, a)
   }
   ], [".google.com.ec", function(a) {
       return y(DF, a)
   }
   ], [".google.ee", function(a) {
       return y(EF, a)
   }
   ], [".google.com.eg", function(a) {
       return y(FF, a)
   }
   ], [".google.es", function(a) {
       return y(GF, a)
   }
   ], [".google.com.et", function(a) {
       return y(HF, a)
   }
   ], [".google.fi", function(a) {
       return y(IF, a)
   }
   ], [".google.com.fj", function(a) {
       return y(JF, a)
   }
   ], [".google.fm", function(a) {
       return y(KF, a)
   }
   ], [".google.fr", function(a) {
       return y(LF, a)
   }
   ], [".google.ga", function(a) {
       return y(MF, a)
   }
   ], [".google.ge", function(a) {
       return y(NF, a)
   }
   ], [".google.gg", function(a) {
       return y(OF, a)
   }
   ], [".google.com.gh", function(a) {
       return y(PF, a)
   }
   ], [".google.com.gi", function(a) {
       return y(QF, a)
   }
   ], [".google.gl", function(a) {
       return y(RF, a)
   }
   ], [".google.gm", function(a) {
       return y(SF, a)
   }
   ], [".google.gr", function(a) {
       return y(TF, a)
   }
   ], [".google.com.gt", function(a) {
       return y(UF, a)
   }
   ], [".google.gy", function(a) {
       return y(VF, a)
   }
   ], [".google.com.hk", function(a) {
       return y(WF, a)
   }
   ], [".google.hn", function(a) {
       return y(XF, a)
   }
   ], [".google.hr", function(a) {
       return y(YF, a)
   }
   ], [".google.ht", function(a) {
       return y(ZF, a)
   }
   ], [".google.hu", function(a) {
       return y($F, a)
   }
   ], [".google.co.id", function(a) {
       return y(aG, a)
   }
   ], [".google.ie", function(a) {
       return y(bG, a)
   }
   ], [".google.co.il", function(a) {
       return y(cG, a)
   }
   ], [".google.im", function(a) {
       return y(dG, a)
   }
   ], [".google.co.in", function(a) {
       return y(eG, a)
   }
   ], [".google.iq", function(a) {
       return y(fG, a)
   }
   ], [".google.is", function(a) {
       return y(gG, a)
   }
   ], [".google.it", function(a) {
       return y(hG, a)
   }
   ], [".google.je", function(a) {
       return y(iG, a)
   }
   ], [".google.com.jm", function(a) {
       return y(jG, a)
   }
   ], [".google.jo", function(a) {
       return y(kG, a)
   }
   ], [".google.co.jp", function(a) {
       return y(lG, a)
   }
   ], [".google.co.ke", function(a) {
       return y(mG, a)
   }
   ], [".google.com.kh", function(a) {
       return y(nG, a)
   }
   ], [".google.ki", function(a) {
       return y(oG, a)
   }
   ], [".google.kg", function(a) {
       return y(pG, a)
   }
   ], [".google.co.kr", function(a) {
       return y(qG, a)
   }
   ], [".google.com.kw", function(a) {
       return y(rG, a)
   }
   ], [".google.kz", function(a) {
       return y(sG, a)
   }
   ], [".google.la", function(a) {
       return y(tG, a)
   }
   ], [".google.com.lb", function(a) {
       return y(uG, a)
   }
   ], [".google.li", function(a) {
       return y(vG, a)
   }
   ], [".google.lk", function(a) {
       return y(wG, a)
   }
   ], [".google.co.ls", function(a) {
       return y(xG, a)
   }
   ], [".google.lt", function(a) {
       return y(yG, a)
   }
   ], [".google.lu", function(a) {
       return y(zG, a)
   }
   ], [".google.lv", function(a) {
       return y(AG, a)
   }
   ], [".google.com.ly", function(a) {
       return y(BG, a)
   }
   ], [".google.md", function(a) {
       return y(CG, a)
   }
   ], [".google.me", function(a) {
       return y(DG, a)
   }
   ], [".google.mg", function(a) {
       return y(EG, a)
   }
   ], [".google.mk", function(a) {
       return y(FG, a)
   }
   ], [".google.ml", function(a) {
       return y(GG, a)
   }
   ], [".google.com.mm", function(a) {
       return y(HG, a)
   }
   ], [".google.mn", function(a) {
       return y(IG, a)
   }
   ], [".google.ms", function(a) {
       return y(JG, a)
   }
   ], [".google.com.mt", function(a) {
       return y(KG, a)
   }
   ], [".google.mu", function(a) {
       return y(LG, a)
   }
   ], [".google.mv", function(a) {
       return y(MG, a)
   }
   ], [".google.mw", function(a) {
       return y(NG, a)
   }
   ], [".google.com.mx", function(a) {
       return y(OG, a)
   }
   ], [".google.com.my", function(a) {
       return y(PG, a)
   }
   ], [".google.co.mz", function(a) {
       return y(QG, a)
   }
   ], [".google.com.na", function(a) {
       return y(RG, a)
   }
   ], [".google.com.ng", function(a) {
       return y(SG, a)
   }
   ], [".google.com.ni", function(a) {
       return y(TG, a)
   }
   ], [".google.ne", function(a) {
       return y(UG, a)
   }
   ], [".google.nl", function(a) {
       return y(VG, a)
   }
   ], [".google.no", function(a) {
       return y(WG, a)
   }
   ], [".google.com.np", function(a) {
       return y(XG, a)
   }
   ], [".google.nr", function(a) {
       return y(YG, a)
   }
   ], [".google.nu", function(a) {
       return y(ZG, a)
   }
   ], [".google.co.nz", function(a) {
       return y($G, a)
   }
   ], [".google.com.om", function(a) {
       return y(aH, a)
   }
   ], [".google.com.pa", function(a) {
       return y(bH, a)
   }
   ], [".google.com.pe", function(a) {
       return y(cH, a)
   }
   ], [".google.com.pg", function(a) {
       return y(dH, a)
   }
   ], [".google.com.ph", function(a) {
       return y(eH, a)
   }
   ], [".google.com.pk", function(a) {
       return y(fH, a)
   }
   ], [".google.pl", function(a) {
       return y(gH, a)
   }
   ], [".google.pn", function(a) {
       return y(hH, a)
   }
   ], [".google.com.pr", function(a) {
       return y(iH, a)
   }
   ], [".google.ps", function(a) {
       return y(jH, a)
   }
   ], [".google.pt", function(a) {
       return y(kH, a)
   }
   ], [".google.com.py", function(a) {
       return y(lH, a)
   }
   ], [".google.com.qa", function(a) {
       return y(mH, a)
   }
   ], [".google.ro", function(a) {
       return y(nH, a)
   }
   ], [".google.ru", function(a) {
       return y(oH, a)
   }
   ], [".google.rw", function(a) {
       return y(pH, a)
   }
   ], [".google.com.sa", function(a) {
       return y(qH, a)
   }
   ], [".google.com.sb", function(a) {
       return y(rH, a)
   }
   ], [".google.sc", function(a) {
       return y(sH, a)
   }
   ], [".google.se", function(a) {
       return y(tH, a)
   }
   ], [".google.com.sg", function(a) {
       return y(uH, a)
   }
   ], [".google.sh", function(a) {
       return y(vH, a)
   }
   ], [".google.si", function(a) {
       return y(wH, a)
   }
   ], [".google.sk", function(a) {
       return y(xH, a)
   }
   ], [".google.sn", function(a) {
       return y(yH, a)
   }
   ], [".google.so", function(a) {
       return y(zH, a)
   }
   ], [".google.sm", function(a) {
       return y(AH, a)
   }
   ], [".google.sr", function(a) {
       return y(BH, a)
   }
   ], [".google.st", function(a) {
       return y(CH, a)
   }
   ], [".google.com.sv", function(a) {
       return y(DH, a)
   }
   ], [".google.td", function(a) {
       return y(EH, a)
   }
   ], [".google.tg", function(a) {
       return y(FH, a)
   }
   ], [".google.co.th", function(a) {
       return y(GH, a)
   }
   ], [".google.com.tj", function(a) {
       return y(HH, a)
   }
   ], [".google.tl", function(a) {
       return y(IH, a)
   }
   ], [".google.tm", function(a) {
       return y(JH, a)
   }
   ], [".google.tn", function(a) {
       return y(KH, a)
   }
   ], [".google.to", function(a) {
       return y(LH, a)
   }
   ], [".google.com.tr", function(a) {
       return y(MH, a)
   }
   ], [".google.tt", function(a) {
       return y(NH, a)
   }
   ], [".google.com.tw", function(a) {
       return y(OH, a)
   }
   ], [".google.co.tz", function(a) {
       return y(PH, a)
   }
   ], [".google.com.ua", function(a) {
       return y(QH, a)
   }
   ], [".google.co.ug", function(a) {
       return y(RH, a)
   }
   ], [".google.co.uk", function(a) {
       return y(SH, a)
   }
   ], [".google.com.uy", function(a) {
       return y(TH, a)
   }
   ], [".google.co.uz", function(a) {
       return y(UH, a)
   }
   ], [".google.com.vc", function(a) {
       return y(VH, a)
   }
   ], [".google.co.ve", function(a) {
       return y(WH, a)
   }
   ], [".google.vg", function(a) {
       return y(XH, a)
   }
   ], [".google.co.vi", function(a) {
       return y(YH, a)
   }
   ], [".google.com.vn", function(a) {
       return y(ZH, a)
   }
   ], [".google.vu", function(a) {
       return y($H, a)
   }
   ], [".google.ws", function(a) {
       return y(aI, a)
   }
   ], [".google.rs", function(a) {
       return y(bI, a)
   }
   ], [".google.co.za", function(a) {
       return y(cI, a)
   }
   ], [".google.co.zm", function(a) {
       return y(dI, a)
   }
   ], [".google.co.zw", function(a) {
       return y(eI, a)
   }
   ], [".google.cat", function(a) {
       return y(fI, a)
   }
   ]].map(function(a) {
       var b = _.x(a);
       a = b.next().value;
       b = b.next().value;
       var c = {};
       return [a, (c.json = b("json"),
       c.js = b("js"),
       c["sync.js"] = b("sync.js"),
       c)]
   }));
   var hI = function(a, b, c) {
       var d = _.ee("LINK", a);
       try {
           d.rel = "preload";
           if (b instanceof Uf)
               var e = Ta(b).toString();
           else {
               if (b instanceof Ja)
                   var f = Ka(b);
               else {
                   if (b instanceof Ja)
                       var g = b;
                   else
                       b = "object" == typeof b && b.Na ? b.Fa() : String(b),
                       Vf.test(b) || (b = "about:invalid#zClosurez"),
                       g = _.Od(b);
                   f = Ka(g)
               }
               e = f
           }
           d.href = e
       } catch (h) {
           return
       }
       d.as = "script";
       c && d.setAttribute("nonce", c);
       if (a = a.getElementsByTagName("head")[0])
           try {
               a.appendChild(d)
           } catch (h) {}
   };
   var Cf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
   var cg = _.q, iI = function(a) {
       var b = new u.Map([["domain", _.q.location.hostname]]);
       dg[3] >= eg() && b.set("adsid", dg[1]);
       return Ld(gI.get(a).js, b)
   }, dg, jI, bg = function() {
       cg = _.q;
       dg = cg.googleToken = cg.googleToken || {};
       var a = eg();
       dg[1] && dg[3] > a && 0 < dg[2] || (dg[1] = "",
       dg[2] = -1,
       dg[3] = -1,
       dg[4] = "",
       dg[6] = "");
       jI = cg.googleIMState = cg.googleIMState || {};
       gI.has(jI[1]) || (jI[1] = ".google.com");
       Array.isArray(jI[5]) || (jI[5] = []);
       "boolean" !== typeof jI[6] && (jI[6] = !1);
       Array.isArray(jI[7]) || (jI[7] = []);
       "number" !== typeof jI[8] && (jI[8] = 0)
   }, kI = function(a) {
       bg();
       gI.has(a) && (jI[1] = a)
   }, fg = {
       Oc: function() {
           return 0 < jI[8]
       },
       ef: function() {
           jI[8]++
       },
       ff: function() {
           0 < jI[8] && jI[8]--
       },
       gf: function() {
           jI[8] = 0
       },
       lh: function() {
           return !1
       },
       Bd: function() {
           return jI[5]
       },
       nd: function(a) {
           try {
               a()
           } catch (b) {
               _.q.setTimeout(function() {
                   throw b;
               }, 0)
           }
       },
       Ud: function() {
           if (!fg.Oc()) {
               var a = _.q.document
                 , b = function(e) {
                   e = iI(e);
                   a: {
                       try {
                           var f = Hw();
                           break a
                       } catch (g) {}
                       f = void 0
                   }
                   hI(a, e.toString(), f);
                   f = _.ee("SCRIPT", a);
                   f.type = "text/javascript";
                   f.onerror = function() {
                       return _.q.processGoogleToken({}, 2)
                   }
                   ;
                   Ua(f, e);
                   try {
                       (a.head || a.body || a.documentElement).appendChild(f),
                       fg.ef()
                   } catch (g) {}
               }
                 , c = jI[1];
               b(c);
               ".google.com" != c && b(".google.com");
               b = {};
               var d = (b.newToken = "FBT",
               b);
               _.q.setTimeout(function() {
                   return _.q.processGoogleToken(d, 1)
               }, 1E3)
           }
       }
   }, lI = function(a) {
       _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
           var d = b;
           d = void 0 === d ? {} : d;
           c = void 0 === c ? 0 : c;
           b = d.newToken || "";
           var e = "NT" == b
             , f = parseInt(d.freshLifetimeSecs || "", 10)
             , g = parseInt(d.validLifetimeSecs || "", 10)
             , h = d["1p_jar"] || "";
           d = d.pucrd || "";
           bg();
           1 == c ? fg.gf() : fg.ff();
           var k = cg.googleToken = cg.googleToken || {}
             , l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
           e = e && !fg.Oc() && (!(dg[3] >= eg()) || "NT" == dg[1]);
           var m = !(dg[3] >= eg()) && 0 != c;
           if (l || e || m)
               e = eg(),
               f = e + 1E3 * f,
               g = e + 1E3 * g,
               1E-5 > Math.random() && _.jD(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
               k[5] = c,
               k[1] = b,
               k[2] = f,
               k[3] = g,
               k[4] = h,
               k[6] = d,
               bg();
           if (l || !fg.Oc()) {
               c = fg.Bd();
               for (b = 0; b < c.length; b++)
                   fg.nd(c[b]);
               c.length = 0
           }
       }
       ;
       gg(a)
   };
   var ar = function(a, b) {
       b = void 0 === b ? {} : b;
       this.root = b.root ? b.root : null;
       this.I = b.rootMargin ? hg(b.rootMargin) : [{
           value: 0,
           type: "px"
       }, {
           value: 0,
           type: "px"
       }, {
           value: 0,
           type: "px"
       }, {
           value: 0,
           type: "px"
       }];
       this.rootMargin = dd(this.I, function(c) {
           return "" + c.value + c.type
       }).join(" ");
       this.M = jg(b.threshold);
       this.o = a;
       this.j = [];
       this.H = [];
       this.A = !1;
       this.m = null;
       this.D = Qt(this.l, 100, this)
   }
     , mI = function(a) {
       if (a.root)
           var b = kg(a.root);
       else {
           var c = _.Sw(window);
           b = {
               top: 0,
               right: c.width,
               bottom: c.height,
               left: 0,
               width: c.width,
               height: c.height
           }
       }
       a = dd(a.I, function(d, e) {
           return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
       });
       return {
           top: b.top - a[0],
           right: b.right + a[1],
           bottom: b.bottom + a[2],
           left: b.left - a[3],
           width: b.width + a[1] + a[3],
           height: b.height + a[0] + a[2]
       }
   }
     , nI = function(a, b, c) {
       if (!b || b.isIntersecting != c.isIntersecting)
           return !0;
       var d = b.intersectionRatio
         , e = c.intersectionRatio;
       return d == e ? !1 : _.wg(a.M, function(f) {
           return f < d != f < e
       })
   };
   ar.prototype.l = function() {
       var a = this
         , b = mI(this);
       _.ot(this.j, function(c) {
           var d = c.target
             , e = kg(d)
             , f = e.width * e.height;
           var g = Math.max(b.top, e.top);
           var h = Math.min(b.right, e.right)
             , k = Math.min(b.bottom, e.bottom)
             , l = Math.max(b.left, e.left)
             , m = h - l
             , n = k - g;
           g = 0 <= m && 0 <= n ? {
               top: g,
               right: h,
               bottom: k,
               left: l,
               width: m,
               height: n
           } : null;
           h = !!g;
           k = g ? g.width * g.height : 0;
           l = window.performance;
           d = {
               boundingClientRect: e,
               intersectionRatio: f ? k / f : h ? 1 : 0,
               intersectionRect: g || {
                   top: 0,
                   bottom: 0,
                   left: 0,
                   right: 0,
                   width: 0,
                   height: 0
               },
               isIntersecting: h,
               rootBounds: b,
               target: d,
               time: l && l.now ? l.now() : 0
           };
           nI(a, c.pa, d) && a.H.push(d);
           c.pa = d
       });
       this.H.length && this.o(oI(this), this)
   }
   ;
   ar.prototype.observe = function(a) {
       _.wg(this.j, function(b) {
           return b.target == a
       }) || (this.j.push({
           target: a,
           pa: null
       }),
       this.l(),
       this.A || (this.A = !0,
       _.Za(_.q, "scroll", this.D),
       _.Za(_.q, "resize", this.D),
       _.q.MutationObserver && !this.m && (this.m = new MutationObserver(this.D),
       this.m.observe(_.q.document, {
           attributes: !0,
           childList: !0,
           characterData: !0,
           subtree: !0
       }))))
   }
   ;
   ar.prototype.unobserve = function(a) {
       this.j = _.ig(this.j, function(b) {
           return b.target != a
       });
       0 == this.j.length && this.disconnect()
   }
   ;
   ar.prototype.disconnect = function() {
       this.A = !1;
       this.j.length = 0;
       _.fe(_.q, "scroll", this.D);
       _.fe(_.q, "resize", this.D);
       this.m && (this.m.disconnect(),
       this.m = null)
   }
   ;
   var oI = function(a) {
       var b = [].concat(_.Ud(a.H));
       a.H.length = 0;
       return b
   };
   var pI = function(a, b, c, d, e, f) {
       _.vC.call(this);
       this.La = a;
       this.status = 1;
       this.A = b;
       this.m = c;
       this.G = d;
       this.Ib = !!e;
       this.l = Math.random();
       this.I = {};
       this.j = null;
       this.M = (0,
       _.jt)(this.T, this);
       this.o = f
   };
   _.O(pI, _.vC);
   pI.prototype.T = function(a) {
       if (!("*" !== this.m && a.origin !== this.m || !this.Ib && a.source != this.A)) {
           var b = null;
           try {
               b = JSON.parse(a.data)
           } catch (c) {}
           if (_.ha(b) && (a = b.i,
           b.c === this.La && a != this.l)) {
               if (2 !== this.status)
                   try {
                       this.status = 2,
                       qI(this),
                       this.j && (this.j(),
                       this.j = null)
                   } catch (c) {}
               a = b.s;
               b = b.p;
               if ("string" === typeof a && ("string" === typeof b || _.ha(b)) && this.I.hasOwnProperty(a))
                   this.I[a](b)
           }
       }
   }
   ;
   var qI = function(a) {
       var b = {};
       b.c = a.La;
       b.i = a.l;
       a.o && (b.e = a.o);
       a.A.postMessage(JSON.stringify(b), a.m)
   };
   pI.prototype.C = function() {
       if (1 === this.status) {
           try {
               this.A.postMessage && qI(this)
           } catch (a) {}
           window.setTimeout((0,
           _.jt)(this.C, this), 50)
       }
   }
   ;
   pI.prototype.connect = function(a) {
       a && (this.j = a);
       _.Za(window, "message", this.M);
       this.G && this.C()
   }
   ;
   var rI = function(a, b, c) {
       a.I[b] = c
   };
   pI.prototype.send = function(a, b) {
       var c = {};
       c.c = this.La;
       c.i = this.l;
       c.s = a;
       c.p = b;
       try {
           this.A.postMessage(JSON.stringify(c), this.m)
       } catch (d) {}
   }
   ;
   pI.prototype.H = function() {
       this.status = 3;
       _.fe(window, "message", this.M);
       _.vC.prototype.H.call(this)
   }
   ;
   var sI = new u.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]])
     , tI = new u.Map([[0, 1], [1, 2], [2, 3]]);
   var uI = function(a) {
       R.call(this, a)
   };
   _.O(uI, R);
   var vI = function(a) {
       R.call(this, a)
   };
   _.O(vI, R);
   var wI = function(a) {
       R.call(this, a)
   };
   _.O(wI, R);
   var yI = function() {
       return 0 != xI(document)
   }
     , xI = function(a) {
       return a.prerendering ? 3 : {
           visible: 1,
           hidden: 2,
           prerender: 3,
           preview: 4,
           unloaded: 5
       }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
   }
     , zI = function(a) {
       var b;
       a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
       return b
   }
     , AI = function(a) {
       return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
   }
     , BI = function(a, b) {
       if (3 == xI(b))
           return !1;
       a();
       return !0
   }
     , CI = function(a, b) {
       if (!BI(a, b)) {
           var c = !1
             , d = zI(b)
             , e = function() {
               !c && BI(a, b) && (c = !0,
               _.fe(b, d, e))
           };
           d && _.Za(b, d, e)
       }
   };
   var Kq = function(a, b) {
       this.j = a;
       this.D = b;
       this.m = {}
   }
     , Lq = function(a) {
       Fq() && (document.addEventListener("touchstart", function(b) {
           a.j(902, function() {
               a.m[b.touches[0].identifier] = Date.now()
           })()
       }, Rt),
       document.addEventListener("touchend", function(b) {
           a.j(902, function() {
               var c = b.changedTouches[0]
                 , d = c.clientX
                 , e = c.clientY
                 , f = c.force;
               c = a.m[c.identifier];
               if (void 0 !== c)
                   try {
                       var g = Fq()
                         , h = {
                           x: d,
                           y: e,
                           duration_ms: Date.now() - c
                       };
                       if (null == g ? 0 : g.gmaSdk)
                           g.gmaSdk.reportTouchEvent(JSON.stringify(_.t(Object, "assign").call(Object, {}, h, {
                               type: 1,
                               force: f
                           })));
                       else {
                           var k, l, m;
                           null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                       }
                   } catch (n) {
                       a.D("paw_sigs", {
                           msg: "reportTouchError",
                           err: n instanceof Error ? n.message : "nonError"
                       })
                   }
           })()
       }, Rt))
   }
     , Gq = function(a, b, c, d, e) {
       var f = 200
         , g = yq;
       b = void 0 === b ? {} : b;
       c = void 0 === c ? function() {}
       : c;
       d = void 0 === d ? function() {}
       : d;
       f = void 0 === f ? 200 : f;
       var h = String(Math.floor(2147483647 * re()))
         , k = 0
         , l = function(m) {
           try {
               var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
               h === n.paw_id && (window.clearTimeout(k),
               window.removeEventListener("message", l),
               n.signal ? c(n.signal) : n.error && d(n.error))
           } catch (p) {
               g("paw_sigs", {
                   msg: "postmessageError",
                   err: p instanceof Error ? p.message : "nonError",
                   data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
               })
           }
       };
       window.addEventListener("message", function(m) {
           e(903, function() {
               l(m)
           })()
       });
       a.postMessage(_.t(Object, "assign").call(Object, {}, {
           paw_id: h
       }, b));
       k = window.setTimeout(function() {
           window.removeEventListener("message", l);
           d("PAW GMA postmessage timed out.")
       }, f)
   }
     , Fq = function() {
       var a = window, b, c;
       if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals))
           return a;
       try {
           var d = window.parent, e, f;
           if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals))
               return d
       } catch (g) {}
       return null
   };
   var EI, DI;
   EI = function() {
       this.wasPlaTagProcessed = !1;
       this.wasReactiveAdConfigReceived = {};
       this.adCount = {};
       this.wasReactiveAdVisible = {};
       this.stateForType = {};
       this.reactiveTypeEnabledInAsfe = {};
       this.wasReactiveTagRequestSent = !1;
       this.reactiveTypeDisabledByPublisher = {};
       this.tagSpecificState = {};
       this.messageValidationEnabled = !1;
       this.floatingAdsStacking = new DI;
       this.sideRailProcessedFixedElements = new u.Set;
       this.sideRailAvailableSpace = new u.Map
   }
   ;
   _.Tl = function(a) {
       a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new u.Set),
       null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new u.Map)) : a.google_reactive_ads_global_state = new EI;
       return a.google_reactive_ads_global_state
   }
   ;
   DI = function() {
       this.maxZIndexRestrictions = {};
       this.nextRestrictionId = 0;
       this.maxZIndexListeners = []
   }
   ;
   var HI;
   _.FI = function(a) {
       this.j = _.Tl(a).floatingAdsStacking
   }
   ;
   _.GI = function(a) {
       a = _.ex(a.j.maxZIndexRestrictions);
       return a.length ? Math.min.apply(null, a) : null
   }
   ;
   HI = function(a) {
       var b = _.GI(a);
       _.ot(a.j.maxZIndexListeners, function(c) {
           return c(b)
       })
   }
   ;
   _.II = function(a) {
       this.m = a;
       this.j = null
   }
   ;
   _.JI = function(a) {
       if (null == a.j) {
           var b = a.m
             , c = b.j.nextRestrictionId++;
           b.j.maxZIndexRestrictions[c] = 2147483646;
           HI(b);
           a.j = c
       }
   }
   ;
   _.KI = function(a) {
       if (null != a.j) {
           var b = a.m;
           delete b.j.maxZIndexRestrictions[a.j];
           HI(b);
           a.j = null
       }
   }
   ;
   var Ul, Il, Ll;
   Ul = 728 * 1.38;
   _.Wl = function(a) {
       return a.innerHeight >= a.innerWidth
   }
   ;
   _.LI = function(a) {
       var b = _.Kl(a).clientWidth;
       a = a.innerWidth;
       return b && a ? b / a : 0
   }
   ;
   Il = function(a, b) {
       return (a = _.Kl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
   }
   ;
   Ll = function(a) {
       return (a = _.LI(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
   }
   ;
   _.Kl = function(a) {
       a = a.document;
       var b = {};
       a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
       return b || {}
   }
   ;
   _.MI = function(a) {
       return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
   }
   ;
   var Xl = function(a, b, c, d, e) {
       for (var f = [], g = 0; g < e; g++)
           for (var h = 0; h < b; h++) {
               var k = f
                 , l = b - 1
                 , m = e - 1;
               k.push.call(k, {
                   x: (0 == l ? 0 : h / l) * a,
                   y: c + (0 == m ? 0 : g / m) * (d - c)
               })
           }
       return f
   }
     , Yl = 90 * 1.38;
   var NI;
   _.OI = function(a, b) {
       if (!a.body)
           return null;
       var c = new NI;
       c.apply(a, b);
       return function() {
           _.Jx(a.body, {
               filter: c.j,
               webkitFilter: c.j,
               overflow: c.D,
               position: c.H,
               top: c.A
           });
           b.scrollTo(0, c.m)
       }
   }
   ;
   NI = function() {
       this.j = this.A = this.H = this.D = null;
       this.m = 0
   }
   ;
   NI.prototype.apply = function(a, b) {
       this.D = a.body.style.overflow;
       this.H = a.body.style.position;
       this.A = a.body.style.top;
       this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
       this.m = _.MI(b);
       _.Jx(a.body, "top", -this.m + "px")
   }
   ;
   _.Nl = function(a, b) {
       var c;
       if (!(c = 0 >= b) && !(c = null == a)) {
           try {
               a.setItem("__storage_test__", "__storage_test__");
               var d = a.getItem("__storage_test__");
               a.removeItem("__storage_test__");
               var e = "__storage_test__" === d
           } catch (f) {
               e = !1
           }
           c = !e
       }
       return c ? null : xg(a, b)
   }
   ;
   _.Ml = function(a) {
       return !!a && 1 > a.length
   }
   ;
   var PI = function(a, b) {
       b = void 0 === b ? 500 : b;
       _.vC.call(this);
       this.m = a;
       this.I = b;
       this.j = null;
       this.l = {};
       this.o = 0;
       this.A = null
   };
   _.O(PI, _.vC);
   PI.prototype.H = function() {
       this.l = {};
       this.A && (_.fe(this.m, "message", this.A),
       delete this.A);
       delete this.l;
       delete this.m;
       delete this.j;
       _.vC.prototype.H.call(this)
   }
   ;
   var RI = function(a) {
       var b;
       return "function" === typeof (null == (b = a.m) ? void 0 : b.__uspapi) || null != QI(a)
   }
     , TI = function(a, b) {
       var c = {};
       if (RI(a)) {
           var d = _.Pt(function() {
               return b(c)
           });
           SI(a, function(e, f) {
               f && (c = e);
               d()
           });
           setTimeout(d, a.I)
       } else
           b(c)
   }
     , SI = function(a, b) {
       var c;
       "function" === typeof (null == (c = a.m) ? void 0 : c.__uspapi) ? (a = a.m.__uspapi,
       a("getUSPData", 1, b)) : QI(a) && (UI(a),
       c = ++a.o,
       a.l[c] = b,
       a.j && (b = {},
       a.j.postMessage((b.__uspapiCall = {
           command: "getUSPData",
           version: 1,
           callId: c
       },
       b), "*")))
   }
     , QI = function(a) {
       if (a.j)
           return a.j;
       a.j = ox(a.m, "__uspapiLocator");
       return a.j
   }
     , UI = function(a) {
       a.A || (a.A = function(b) {
           try {
               var c = {};
               "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
               var d = c.__uspapiReturn;
               var e;
               null == (e = a.l) || e[d.callId](d.returnValue, d.success)
           } catch (f) {}
       }
       ,
       _.Za(a.m, "message", a.A))
   };
   var WI = function(a) {
       R.call(this, a, -1, VI)
   };
   _.O(WI, R);
   var VI = [1];
   var XI = function(a) {
       R.call(this, a)
   };
   _.O(XI, R);
   var Bo = function(a) {
       _.vC.call(this);
       this.A = a;
       this.m = this.j = null;
       this.l = {};
       this.o = 0;
       this.I = !1
   };
   _.O(Bo, _.vC);
   var YI = function(a) {
       a.I || (a.j || (a.j = ox(a.A, "googlefcPresent")),
       a.I = !0);
       return !!a.j
   }
     , $I = function(a) {
       return new u.Promise(function(b) {
           if (YI(a))
               if (a.j === a.A) {
                   var c = a.j.googlefc || (a.j.googlefc = {});
                   c.__fci = c.__fci || [];
                   c.__fci.push("loaded", function(e) {
                       b(he(XI, e))
                   })
               } else {
                   ZI(a);
                   c = a.o++;
                   a.l[c] = b;
                   var d = {};
                   a.j.postMessage((d.__fciCall = {
                       command: "loaded",
                       callId: c
                   },
                   d), "*")
               }
       }
       )
   }
     , ZI = function(a) {
       a.m || (a.m = function(b) {
           try {
               var c = he(XI, b.data.__fciReturn);
               (0,
               a.l[v(c, 1)])(c)
           } catch (d) {}
       }
       ,
       _.Za(a.A, "message", a.m))
   };
   var aJ = {}
     , Bg = (aJ[23] = .001,
   aJ[211] = !1,
   aJ[253] = !1,
   aJ[246] = [],
   aJ[226] = [],
   aJ[150] = "",
   aJ[148] = zD,
   aJ[221] = hx(),
   aJ[36] = hx(),
   aJ[172] = null,
   aJ[259] = null,
   aJ[6] = function() {
       var a = window;
       try {
           for (var b = null; b != a; b = a,
           a = a.parent)
               switch (a.location.protocol) {
               case "https:":
                   return !0;
               case "file:":
                   return !0;
               case "http:":
                   return !1
               }
       } catch (c) {}
       return !0
   }(),
   aJ[260] = void 0,
   aJ[251] = null,
   aJ[252] = null,
   aJ[258] = null,
   aJ)
     , Ag = function() {
       this.j = !1
   };
   var bJ = Bi(function() {
       return !!ix(_.q.location.href)
   });
   var dk = function(a) {
       var b = void 0 === b ? Ce(_.q) : b;
       this.id = a;
       this.m = Math.random() < _.Cg(23);
       this.j = {
           pvsid: String(b)
       }
   }
     , cJ = function(a) {
       a = zg(a);
       var b;
       Yh.set(a, (null != (b = Yh.get(a)) ? b : 0) + 1)
   }
     , Xh = function() {
       return [].concat(_.Ud(_.t(Yh, "values").call(Yh))).reduce(function(a, b) {
           return a + b
       }, 0)
   }
     , I = function(a, b, c) {
       "string" !== typeof c && (c = String(c));
       /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
   }
     , fk = function(a, b) {
       b = void 0 === b ? null : b;
       b = void 0 === b ? null : b;
       if (bJ())
           b = !0;
       else {
           var c = a.m;
           b && 0 <= b && (c = Math.random() < b);
           b = c && !!a.id
       }
       b && _.jD(window, dJ(a) || "", void 0, _.E(Dy))
   }
     , dJ = function(a) {
       var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
       _.il(a.j, function(c, d) {
           c && (b += "&" + d + "=" + encodeURIComponent(c))
       });
       return b
   }
     , eJ = function(a) {
       var b = [].concat(_.Ud(_.t(Yh, "keys").call(Yh)));
       b = b.map(function(c) {
           return c.replace(/,/g, "\\,")
       });
       3 >= b.length ? I(a, "nw_id", b.join()) : (b = b.slice(0, 3),
       b.push("__extra__"),
       I(a, "nw_id", b.join()))
   }
     , Yi = function(a, b) {
       I(a, "vrg", String(b.jb || b.Ga));
       eJ(a);
       I(a, "nslots", Xh().toString());
       b = De();
       b.length && I(a, "eid", b.join());
       I(a, "pub_url", document.URL)
   }
     , Si = function(a, b, c) {
       c = void 0 === c ? _.Cg(23) : c;
       if (void 0 === c || 0 > c || 1 < c)
           c = _.Cg(23);
       Math.random() < c && (a = new dk(a),
       b(a),
       fk(a, 1))
   }
     , Yh = new u.Map;
   var Pk = function(a) {
       R.call(this, a, -1, fJ)
   };
   _.O(Pk, R);
   var Mk = function(a) {
       return v(a, 1)
   }
     , Ok = function(a, b) {
       return w(a, 1, b)
   }
     , Nk = function(a, b) {
       return Kg(a, 2, b)
   }
     , fJ = [2];
   var Cr = function(a) {
       R.call(this, a)
   };
   _.O(Cr, R);
   var uq = function(a) {
       R.call(this, a, -1, gJ)
   };
   _.O(uq, R);
   var gJ = [2, 3];
   var sq = function(a) {
       R.call(this, a)
   };
   _.O(sq, R);
   var hJ = function(a) {
       R.call(this, a)
   };
   _.O(hJ, R);
   hJ.prototype.setTagForChildDirectedTreatment = function(a) {
       return w(this, 5, a)
   }
   ;
   hJ.prototype.clearTagForChildDirectedTreatment = function() {
       return Gc(this, 5)
   }
   ;
   hJ.prototype.setTagForUnderAgeOfConsent = function(a) {
       return w(this, 6, a)
   }
   ;
   var hl = function(a) {
       R.call(this, a)
   };
   _.O(hl, R);
   var jJ = function(a) {
       R.call(this, a, -1, iJ)
   };
   _.O(jJ, R);
   jJ.prototype.sa = function() {
       return Nc(this, Pk, 14)
   }
   ;
   jJ.prototype.Ea = function() {
       return Pc(this, hl, 18)
   }
   ;
   var kJ = function(a) {
       return Pc(a, hJ, 25)
   };
   jJ.prototype.getCorrelator = function() {
       return v(this, 26)
   }
   ;
   jJ.prototype.setCorrelator = function(a) {
       return w(this, 26, a)
   }
   ;
   var iJ = [2, 3, 14, 32];
   var $h = function(a) {
       R.call(this, a)
   };
   _.O($h, R);
   $h.prototype.getWidth = function() {
       return v(this, 1)
   }
   ;
   var di = function(a, b) {
       return w(a, 1, b)
   };
   $h.prototype.getHeight = function() {
       return v(this, 2)
   }
   ;
   var ci = function(a, b) {
       return w(a, 2, b)
   }
     , sl = function() {
       var a = new $h;
       return w(a, 3, !0)
   };
   var xl = function(a) {
       R.call(this, a)
   };
   _.O(xl, R);
   var bi = function(a) {
       R.call(this, a, -1, lJ)
   };
   _.O(bi, R);
   var lJ = [2];
   var nJ = function(a) {
       R.call(this, a, -1, mJ)
   };
   _.O(nJ, R);
   nJ.prototype.getAdUnitPath = function() {
       return v(this, 1)
   }
   ;
   nJ.prototype.getDomId = function() {
       return v(this, 2)
   }
   ;
   var oJ = function(a, b) {
       w(a, 2, b)
   };
   nJ.prototype.sa = function() {
       return Nc(this, Pk, 3)
   }
   ;
   nJ.prototype.getClickUrl = function() {
       return v(this, 7)
   }
   ;
   nJ.prototype.setClickUrl = function(a) {
       return w(this, 7, a)
   }
   ;
   var Lk = function(a) {
       return Nc(a, Pk, 9)
   };
   nJ.prototype.Ea = function() {
       return Pc(this, hl, 13)
   }
   ;
   var Pl = function(a) {
       return oe(a, 15, 0)
   }
     , mJ = [3, 4, 5, 6, 8, 9];
   var Fh = function(a) {
       R.call(this, a)
   };
   _.O(Fh, R);
   var Eh = function(a, b) {
       return Pg(a, 1, pJ, b)
   }
     , Hh = function(a) {
       var b = new Fh;
       return Pg(b, 2, pJ, a)
   }
     , pJ = [1, 2];
   var dh = function(a) {
       R.call(this, a)
   };
   _.O(dh, R);
   var nh = function(a) {
       R.call(this, a, -1, qJ)
   };
   _.O(nh, R);
   var oh = function(a, b) {
       Yc(a, 1, b)
   }
     , qh = function(a) {
       R.call(this, a)
   };
   _.O(qh, R);
   var Dh = function(a, b) {
       Zc(a, 3, b)
   }
     , gh = [1, 2, 3, 4, 7, 5, 6]
     , qJ = [1];
   var sJ = function(a) {
       R.call(this, a, -1, rJ)
   };
   _.O(sJ, R);
   var tJ = function(a, b) {
       return Hc(a, 1, b, 0)
   }
     , uJ = function(a, b) {
       return Zc(a, 2, b)
   }
     , vJ = function(a, b) {
       return Yc(a, 3, b)
   }
     , rJ = [3];
   var wJ = function(a) {
       R.call(this, a)
   };
   _.O(wJ, R);
   wJ.prototype.getTimestamp = function() {
       return oe(this, 1, 0)
   }
   ;
   var yJ = function(a) {
       var b = new wJ;
       b = Hc(b, 1, Date.now(), 0);
       return Pg(b, 2, xJ, a)
   }
     , xJ = [2, 3];
   var zJ = function(a) {
       R.call(this, a)
   };
   _.O(zJ, R);
   var AJ = function(a) {
       var b = new zJ;
       return Zc(b, 1, a)
   };
   var BJ = function(a) {
       R.call(this, a)
   };
   _.O(BJ, R);
   var Vg = new function(a, b, c) {
       this.j = b;
       this.m = c
   }
   (function(a) {
       return he(zJ, a)
   }
   ,function(a) {
       return he(BJ, a)
   }
   ,4);
   var Sg = (0,
   B.Ma)(function(a) {
       return !!a && "function" === typeof a.openConsoleTab && "function" === typeof a.attachOverlay
   }, "HostModule");
   var Xg = function(a) {
       R.call(this, a)
   };
   _.O(Xg, R);
   var Wg = function() {
       this.j = _.t(Array, "from").call(Array, {
           length: 1E3
       });
       this.m = 0
   };
   Wg.prototype.send = function(a) {
       this.j instanceof MessagePort ? this.j.postMessage(a.aa()) : (this.j[this.m] = a,
       this.m = (this.m + 1) % 1E3)
   }
   ;
   var CJ = Q(["https://www.googletagservices.com/console/host/host.js"])
     , DJ = Q(["https://www.googletagservices.com/console/panel/index.html"])
     , EJ = Q(["https://www.googletagservices.com/console/overlay/index.html"])
     , FJ = {
       Ge: y(CJ),
       Zg: y(DJ),
       Yg: y(EJ)
   };
   var Ug = {
       Fd: document.body,
       ce: FJ
   };
   var Zg = new u.Map;
   var GJ = {}
     , bh = (GJ.companion_ads = "companionAds",
   GJ.content = "content",
   GJ.publisher_ads = "pubads",
   GJ);
   var Nh = function() {
       rD.call(this, _.E(Oh) || _.E(dC) ? 1 : 0, _.q);
       this.D = 0;
       var a = _.E(Oh) || _.E(dC);
       _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
   };
   _.O(Nh, rD);
   var vi = function() {
       this.j = new u.Map
   };
   var HJ = function() {
       this.m = {};
       this.j = new jJ;
       this.D = new u.Map;
       this.j.setCorrelator(xx());
       _.Cg(36) && w(this.j, 15, !0)
   }
     , IJ = function(a) {
       var b = Gh()
         , c = a.getDomId();
       if (c && !b.m.hasOwnProperty(c)) {
           var d = _.F(vi)
             , e = ++_.F(Nh).D;
           d.j.set(c, e);
           w(a, 20, e);
           b.m[c] = a
       }
   }
     , Ho = function(a, b) {
       var c;
       return null != (c = a.m[b]) ? c : null
   }
     , Gh = function() {
       return _.F(HJ)
   };
   var JJ = {
       Fd: document.body,
       ce: FJ
   }, Jh = function() {
       var a = void 0 === a ? JJ : a;
       var b = void 0 === b ? document.URL : b;
       this.D = a;
       this.url = b;
       this.m = !1
   }, Ih;
   Jh.prototype.initialize = function() {
       if (null !== ik(this.url, "googtime") && !this.j)
           try {
               this.j = Yg(function() {}, this.D)
           } catch (c) {
               var a, b;
               null == (a = console) || null == (b = a.error) || b.call(a, c)
           }
   }
   ;
   Jh.prototype.sendMessage = function(a, b, c, d) {
       a = vJ(uJ(tJ(new sJ, a), ph(b)), c.map(function(e) {
           return ph(e)
       }));
       d && w(a, 4, d);
       d = yJ(a);
       d = AJ(d);
       (0,
       B.J)(this.j).send(d)
   }
   ;
   var Kh = function(a, b) {
       var c = Ih;
       return function() {
           var d = Jd.apply(0, arguments);
           if (c.j && !c.m) {
               c.m = !0;
               try {
                   c.sendMessage(a, this, d, Error().stack)
               } catch (g) {
                   var e, f;
                   null == (e = console) || null == (f = e.error) || f.call(e, g)
               } finally {
                   c.m = !1
               }
           }
           return b.apply(this, d)
       }
   };
   var LJ;
   _.KJ = function(a) {
       this.context = a
   }
   ;
   LJ = function(a, b) {
       b.catch(function(c) {
           c = c ? c : "unknown rejection";
           Ph(a.context, 963, c instanceof Error ? c : Error(String(c)))
       })
   }
   ;
   var MJ = Bi(yi);
   var gj = ["auto", "inherit", "100%"]
     , hj = gj.concat(["none"]);
   var $m = function(a, b, c) {
       if (!a)
           return !0;
       var d = !0;
       ej(a, function(e) {
           return d = fj(e, b, 10, 10)
       }, c);
       return d
   };
   var NJ = function(a, b, c, d, e, f) {
       this.D = _.Dx(a);
       this.m = _.Dx(b);
       this.H = c;
       this.j = _.Dx(d);
       this.A = e;
       this.l = f
   };
   NJ.prototype.aa = function() {
       return JSON.stringify({
           windowCoords_t: this.D.top,
           windowCoords_r: this.D.right,
           windowCoords_b: this.D.bottom,
           windowCoords_l: this.D.left,
           frameCoords_t: this.m.top,
           frameCoords_r: this.m.right,
           frameCoords_b: this.m.bottom,
           frameCoords_l: this.m.left,
           styleZIndex: this.H,
           allowedExpansion_t: this.j.top,
           allowedExpansion_r: this.j.right,
           allowedExpansion_b: this.j.bottom,
           allowedExpansion_l: this.j.left,
           xInView: this.A,
           yInView: this.l
       })
   }
   ;
   var OJ = function(a) {
       var b = window
         , c = b.screenX || b.screenLeft || 0
         , d = b.screenY || b.screenTop || 0;
       b = new _.Cx(d,c + (b.outerWidth || document.documentElement.clientWidth || 0),d + (b.outerHeight || document.documentElement.clientHeight || 0),c);
       c = Nx(a);
       d = _.tg(_.ug, a);
       var e = new Ex(c.x,c.y,d.width,d.height);
       c = Fx(e);
       d = String(sg(a, "zIndex"));
       var f = new _.Cx(0,Infinity,Infinity,0);
       for (var g = Ow(a), h = g.j.body, k = g.j.documentElement, l = Tw(g.j); a = Mx(a); )
           if (!(_.Xt && 0 == a.clientWidth || $t && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != sg(a, "overflow")) {
               var m = Nx(a)
                 , n = new _.qi(a.clientLeft,a.clientTop);
               m.x += n.x;
               m.y += n.y;
               f.top = Math.max(f.top, m.y);
               f.right = Math.min(f.right, m.x + a.clientWidth);
               f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
               f.left = Math.max(f.left, m.x)
           }
       a = l.scrollLeft;
       l = l.scrollTop;
       f.left = Math.max(f.left, a);
       f.top = Math.max(f.top, l);
       g = g.j;
       g = _.Sw(g.parentWindow || g.defaultView || window);
       f.right = Math.min(f.right, a + g.width);
       f.bottom = Math.min(f.bottom, l + g.height);
       l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Ex(f.left,f.top,f.right - f.left,f.bottom - f.top) : null) ? Gx(e, f) : null;
       g = a = 0;
       l && !(new _.ti(l.width,l.height)).isEmpty() && (a = l.width / e.width,
       g = l.height / e.height);
       l = new _.Cx(0,0,0,0);
       if (h = f)
           (e = Gx(e, f)) ? (k = Fx(f),
           m = Fx(e),
           h = m.right != k.left && k.right != m.left,
           k = m.bottom != k.top && k.bottom != m.top,
           h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
       h && (l = new _.Cx(Math.max(c.top - f.top, 0),Math.max(f.left + f.width - c.right, 0),Math.max(f.top + f.height - c.bottom, 0),Math.max(c.left - f.left, 0)));
       return new NJ(b,c,d,l,a,g)
   };
   var PJ = function(a) {
       this.H = a;
       this.A = null;
       this.C = this.status = 0;
       this.m = null;
       this.La = "sfchannel" + a
   };
   var QJ = function(a) {
       this.j = a
   };
   QJ.prototype.aa = function() {
       return JSON.stringify(this.j)
   }
   ;
   var RJ = function(a, b) {
       this.Yb = a;
       this.Zb = b;
       this.m = this.j = !1
   };
   RJ.prototype.aa = function() {
       return JSON.stringify({
           expandByOverlay: this.Yb,
           expandByPush: this.Zb,
           readCookie: this.j,
           writeCookie: this.m
       })
   }
   ;
   var SJ = function(a, b, c, d, e, f, g, h, k) {
       h = void 0 === h ? [] : h;
       this.m = a;
       this.D = b;
       this.H = c;
       this.permissions = d;
       this.metadata = e;
       this.A = f;
       this.Ib = g;
       this.hostpageLibraryTokens = h;
       this.j = "";
       this.pb = void 0 === k ? "" : k
   };
   SJ.prototype.aa = function() {
       var a = {};
       a = (a.uid = this.m,
       a.hostPeerName = this.D,
       a.initialGeometry = this.H.aa(),
       a.permissions = this.permissions.aa(),
       a.metadata = this.metadata.aa(),
       a.reportCreativeGeometry = this.A,
       a.isDifferentSourceWindow = this.Ib,
       a.goog_safeframe_hlt = IE(this.hostpageLibraryTokens),
       a);
       this.j && (a.sentinel = this.j);
       this.pb && (a.pbjsAdConfig = this.pb);
       return JSON.stringify(a)
   }
   ;
   var TJ = function(a, b) {
       this.j = a;
       this.D = b
   };
   TJ.prototype.aa = function(a) {
       this.D && a && (a.sentinel = this.D);
       return JSON.stringify(a)
   }
   ;
   var UJ = function(a, b, c) {
       TJ.call(this, a, void 0 === c ? "" : c);
       this.version = b
   };
   _.O(UJ, TJ);
   UJ.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j,
           version: this.version
       })
   }
   ;
   var VJ = function(a, b, c, d) {
       TJ.call(this, a, void 0 === d ? "" : d);
       this.H = b;
       this.m = c
   };
   _.O(VJ, TJ);
   VJ.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j,
           initialWidth: this.H,
           initialHeight: this.m
       })
   }
   ;
   var WJ = function(a, b, c) {
       TJ.call(this, a, void 0 === c ? "" : c);
       this.description = b
   };
   _.O(WJ, TJ);
   WJ.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j,
           description: this.description
       })
   }
   ;
   var XJ = function(a, b, c, d) {
       TJ.call(this, a, void 0 === d ? "" : d);
       this.m = b;
       this.push = c
   };
   _.O(XJ, TJ);
   XJ.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j,
           expand_t: this.m.top,
           expand_r: this.m.right,
           expand_b: this.m.bottom,
           expand_l: this.m.left,
           push: this.push
       })
   }
   ;
   var YJ = function(a, b) {
       TJ.call(this, a, void 0 === b ? "" : b)
   };
   _.O(YJ, TJ);
   YJ.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j
       })
   }
   ;
   var ZJ = function(a, b, c) {
       TJ.call(this, a, void 0 === c ? "" : c);
       this.H = b
   };
   _.O(ZJ, TJ);
   ZJ.prototype.aa = function() {
       var a = {
           uid: this.j,
           newGeometry: this.H.aa()
       };
       return TJ.prototype.aa.call(this, a)
   }
   ;
   var $J = function(a, b, c, d, e, f) {
       ZJ.call(this, a, c, void 0 === f ? "" : f);
       this.success = b;
       this.m = d;
       this.push = e
   };
   _.O($J, ZJ);
   $J.prototype.aa = function() {
       var a = {
           uid: this.j,
           success: this.success,
           newGeometry: this.H.aa(),
           expand_t: this.m.top,
           expand_r: this.m.right,
           expand_b: this.m.bottom,
           expand_l: this.m.left,
           push: this.push
       };
       this.D && (a.sentinel = this.D);
       return JSON.stringify(a)
   }
   ;
   var aK = function(a, b, c, d) {
       TJ.call(this, a, void 0 === d ? "" : d);
       this.width = b;
       this.height = c
   };
   _.O(aK, TJ);
   aK.prototype.aa = function() {
       return TJ.prototype.aa.call(this, {
           uid: this.j,
           width: this.width,
           height: this.height
       })
   }
   ;
   var bK = function(a) {
       var b;
       if (null == (b = a.location) ? 0 : b.ancestorOrigins)
           return a.location.ancestorOrigins.length;
       var c = 0;
       Fd(function() {
           c++;
           return !1
       }, !0, !0, a);
       return c
   };
   var cK = function() {
       this.j = []
   }
     , eK = function(a, b, c, d, e) {
       a.j.push(new dK(b,c,d,e))
   }
     , fK = function(a) {
       for (var b = a.j.length - 1; 0 <= b; b--) {
           var c = a.j[b];
           c.m ? (c.D.style.removeProperty(c.j),
           c.D.style.setProperty(c.j, String(c.H), c.A)) : c.D.style[c.j] = c.H
       }
       a.j.length = 0
   }
     , dK = function(a, b, c, d) {
       this.D = a;
       this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
       this.H = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
       this.A = this.m ? a.style.getPropertyPriority(this.j) : void 0;
       this.m ? (a.style.removeProperty(this.j),
       a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
   };
   var gK = function(a, b) {
       b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
       2048 > b.length && b.push(a)
   }
     , hK = function() {
       var a = window
         , b = _.yn(a);
       b && gK({
           label: "2",
           type: 9,
           value: b
       }, a)
   }
     , iK = function(a, b, c) {
       var d = void 0 === d ? !1 : d;
       var e = window
         , f = "undefined" !== typeof queueMicrotask;
       return function() {
           d && f && queueMicrotask(function() {
               e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
               e.google_rum_task_id_counter += 1
           });
           var g = _.yn()
             , h = 3;
           try {
               var k = b.apply(this, arguments)
           } catch (l) {
               h = 13;
               if (!c)
                   throw l;
               c(a, l)
           } finally {
               e.google_measure_js_timing && g && gK(_.t(Object, "assign").call(Object, {}, {
                   label: a.toString(),
                   value: g,
                   duration: (_.yn() || 0) - g,
                   type: h
               }, d && f && {
                   taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
               }), e)
           }
           return k
       }
   };
   var nK = function(a) {
       PJ.call(this, a.uniqueId);
       var b = this;
       this.I = a.Wg;
       this.M = 1 === a.size;
       this.P = new RJ(a.permissions.Yb && !this.M,a.permissions.Zb && !this.M);
       this.l = a.Xc;
       var c;
       this.ia = null != (c = a.hostpageLibraryTokens) ? c : [];
       var d = window.location;
       c = d.protocol;
       d = d.host;
       this.fa = "file:" == c ? "*" : c + "//" + d;
       this.ma = !!a.Ib;
       c = "//" + a.xc + (_.E(Sy) ? "-safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
       this.K = a.xc ? c : "//tpc.googlesyndication.com";
       this.ja = a.cc ? "*" : "https:" + this.K;
       this.U = !!a.we;
       this.ea = jK(a);
       this.D = new cK;
       kK(this, a.Xc, a.size);
       this.A = this.ca = OJ(a.Xc);
       this.G = a.lf || "1-0-38";
       var e;
       this.da = null != (e = a.qe) ? e : "";
       this.oa = a.pb;
       lK(this, a);
       this.ta = iK(412, function() {
           return mK(b)
       }, a.Da);
       this.T = -1;
       this.o = 0;
       var f = iK(415, function() {
           b.j && (b.j.name = "",
           a.Md && a.Md(),
           _.fe(b.j, "load", f))
       }, a.Da);
       _.Za(this.j, "load", f);
       this.Pc = iK(413, this.Pc, a.Da);
       this.Zc = iK(417, this.Zc, a.Da);
       this.bd = iK(419, this.bd, a.Da);
       this.Lc = iK(411, this.Lc, a.Da);
       this.Ic = iK(409, this.Ic, a.Da);
       this.N = iK(410, this.N, a.Da);
       this.Tc = iK(416, this.Tc, a.Da);
       this.m = new pI(this.La,this.j.contentWindow,this.ja,!1);
       rI(this.m, "init_done", (0,
       _.jt)(this.Pc, this));
       rI(this.m, "register_done", (0,
       _.jt)(this.Zc, this));
       rI(this.m, "report_error", (0,
       _.jt)(this.bd, this));
       rI(this.m, "expand_request", (0,
       _.jt)(this.Lc, this));
       rI(this.m, "collapse_request", (0,
       _.jt)(this.Ic, this));
       rI(this.m, "creative_geometry_update", (0,
       _.jt)(this.N, this));
       this.m.connect((0,
       _.jt)(this.Tc, this))
   };
   _.O(nK, PJ);
   var kK = function(a, b, c) {
       a.M ? (b.style.width = _.Px("100%", !0),
       b.style.height = _.Px("auto", !0)) : (b.style.width = _.Px(c.width, !0),
       b.style.height = _.Px(c.height, !0))
   }
     , lK = function(a, b) {
       var c = b.cc
         , d = b.content
         , e = b.Gb
         , f = b.size
         , g = void 0 === b.Hb ? "3rd party ad content" : b.Hb
         , h = b.ac;
       b = b.Gc;
       var k = {
           shared: {
               sf_ver: a.G,
               ck_on: mD() ? 1 : 0,
               flash_ver: "0"
           }
       };
       d = c ? "" : null != d ? d : "";
       d = a.G + ";" + d.length + ";" + d + (new SJ(a.H,a.fa,a.ca,a.P,new QJ(k),a.M,a.ma,a.ia,a.oa)).aa();
       if (a.U && f instanceof _.ti) {
           k = _.Uw(_.Nw(a.l));
           var l = _.Uw(_.Nw(a.l)).location.protocol + a.K;
           qE || gk(k.document, rE);
           qE++;
           k.google_eas_queue = k.google_eas_queue || [];
           k.google_eas_queue.push({
               a: e,
               b: l,
               c: f.width,
               d: f.height,
               e: "sf-gdn-exp-" + qE,
               f: void 0,
               g: void 0,
               h: void 0,
               i: void 0
           })
       }
       k = f.width;
       f = f.height;
       a.M && (f = k = 0);
       l = {};
       e = (l.id = e,
       l.title = g,
       l.name = d,
       l.scrolling = "no",
       l.marginWidth = "0",
       l.marginHeight = "0",
       l.width = String(k),
       l.height = String(f),
       l["data-is-safeframe"] = "true",
       l);
       void 0 === c && (g = _.Uw(_.Nw(a.l)),
       f = a.da,
       d = a.K,
       (k = f) && (k = "?" + k),
       d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.G + "/html/container.html" + k),
       (k = bK(g)) && (d += (f ? "&" : "?") + "n=" + k),
       f = "https:" + d,
       d = [],
       a.U && (k = ix(g.location.href),
       g = d.push,
       k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""),
       g.call(d, k)),
       d.length && (f += "#" + d.join("&")),
       e.src = f);
       null !== a.ea && (e.sandbox = a.ea);
       h && (e.allow = h);
       b && (e.anonymous = "true");
       e.role = "region";
       e["aria-label"] = "Advertisement";
       e.tabIndex = "0";
       c ? (a.j = c,
       Qw(a.j, e)) : (c = {},
       c = (c.frameborder = 0,
       c.allowTransparency = "true",
       c.style = "border:0;vertical-align:bottom;",
       c.src = "about:blank",
       c),
       e && za(c, e),
       h = _.ee("IFRAME"),
       Qw(h, c),
       a.j = h);
       a.M && (a.j.style.minWidth = "100%");
       a.l.appendChild(a.j)
   };
   ba = nK.prototype;
   ba.Tc = function() {
       _.Za(window, "resize", this.ta);
       _.Za(window, "scroll", this.ta)
   }
   ;
   ba.Pc = function(a) {
       try {
           if (0 != this.status)
               throw Error("Container already initialized");
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid) || "string" !== typeof b.version)
               throw Error("Cannot parse JSON message");
           var c = new UJ(b.uid,b.version,b.sentinel);
           if (this.H !== c.j || this.G !== c.version)
               throw Error("Wrong source container");
           this.status = 1
       } catch (e) {
           var d;
           null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
       }
   }
   ;
   ba.Zc = function(a) {
       try {
           if (1 != this.status)
               throw Error("Container not initialized");
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight)
               throw Error("Cannot parse JSON message");
           if (this.H !== (new VJ(b.uid,b.initialWidth,b.initialHeight,b.sentinel)).j)
               throw Error("Wrong source container");
           this.status = 2
       } catch (d) {
           var c;
           null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
       }
   }
   ;
   ba.bd = function(a) {
       try {
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid) || "string" !== typeof b.description)
               throw Error("Cannot parse JSON message");
           var c = new WJ(b.uid,b.description,b.sentinel);
           if (this.H !== c.j)
               throw Error("Wrong source container");
           var d;
           null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
       } catch (f) {
           var e;
           null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
       }
   }
   ;
   ba.Lc = function(a) {
       try {
           if (2 != this.status)
               throw Error("Container is not registered");
           if (0 != this.C)
               throw Error("Container is not collapsed");
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push)
               throw Error("Cannot parse JSON message");
           var c = new XJ(b.uid,new _.Cx(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);
           if (this.H !== c.j)
               throw Error("Wrong source container");
           if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right))
               throw Error("Invalid expansion amounts");
           var d;
           if (d = c.push && this.P.Zb || !c.push && this.P.Yb) {
               var e = c.m
                 , f = c.push
                 , g = this.A = OJ(this.j);
               if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                   if (!f)
                       for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                           eK(this.D, h, "overflowX", "visible", "important"),
                           eK(this.D, h, "overflowY", "visible", "important");
                   var k = Fx(new Ex(0,0,this.A.m.getWidth(),this.A.m.getHeight()));
                   _.ha(e) ? (k.top -= e.top,
                   k.right += e.right,
                   k.bottom += e.bottom,
                   k.left -= e.left) : (k.top -= e,
                   k.right += Number(void 0),
                   k.bottom += Number(void 0),
                   k.left -= Number(void 0));
                   eK(this.D, this.l, "position", "relative");
                   eK(this.D, this.j, "position", "absolute");
                   if (f) {
                       var l = k.getWidth();
                       eK(this.D, this.l, "width", l + "px");
                       var m = k.getHeight();
                       eK(this.D, this.l, "height", m + "px")
                   } else
                       eK(this.D, this.j, "zIndex", "10000");
                   var n = k.getWidth();
                   eK(this.D, this.j, "width", n + "px");
                   var p = k.getHeight();
                   eK(this.D, this.j, "height", p + "px");
                   eK(this.D, this.j, "left", k.left + "px");
                   eK(this.D, this.j, "top", k.top + "px");
                   this.C = 2;
                   this.A = OJ(this.j);
                   d = !0
               } else
                   d = !1
           }
           a = d;
           this.m.send("expand_response", (new $J(this.H,a,this.A,c.m,c.push)).aa());
           if (!a)
               throw Error("Viewport or document body not large enough to expand into.");
       } catch (A) {
           var r;
           null == (r = this.I) || r.error("Invalid EXPAND_REQUEST message. Reason: " + A.message)
       }
   }
   ;
   ba.Ic = function(a) {
       try {
           if (2 != this.status)
               throw Error("Container is not registered");
           if (2 != this.C)
               throw Error("Container is not expanded");
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid))
               throw Error("Cannot parse JSON message");
           if (this.H !== (new YJ(b.uid,b.sentinel)).j)
               throw Error("Wrong source container");
           fK(this.D);
           this.C = 0;
           this.j && (this.A = OJ(this.j));
           this.m.send("collapse_response", (new ZJ(this.H,this.A)).aa())
       } catch (d) {
           var c;
           null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
       }
   }
   ;
   var mK = function(a) {
       if (1 == a.status || 2 == a.status)
           switch (a.o) {
           case 0:
               oK(a);
               a.T = window.setTimeout((0,
               _.jt)(a.Z, a), 1E3);
               a.o = 1;
               break;
           case 1:
               a.o = 2;
               break;
           case 2:
               a.o = 2
           }
   };
   nK.prototype.N = function(a) {
       try {
           if ("string" !== typeof a)
               throw Error("Could not parse serialized message");
           var b = JSON.parse(a);
           if (!_.ha(b) || !kj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel)
               throw Error("Cannot parse JSON message");
           var c = new aK(b.uid,b.width,b.height,b.sentinel);
           if (this.H !== c.j)
               throw Error("Wrong source container");
           var d = String(c.height);
           if (this.M)
               d !== this.j.height && (this.j.height = d,
               mK(this));
           else {
               var e;
               null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
           }
       } catch (g) {
           var f;
           null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
       }
   }
   ;
   nK.prototype.Z = function() {
       if (1 == this.status || 2 == this.status)
           switch (this.o) {
           case 1:
               this.o = 0;
               break;
           case 2:
               oK(this),
               this.T = window.setTimeout((0,
               _.jt)(this.Z, this), 1E3),
               this.o = 1
           }
   }
   ;
   var oK = function(a) {
       a.A = OJ(a.j);
       a.m.send("geometry_update", (new ZJ(a.H,a.A)).aa())
   }
     , jK = function(a) {
       var b = null;
       a.Xd && (b = a.Xd);
       return null == b ? null : b.join(" ")
   }
     , Cn = function(a) {
       return !!(null != a ? a : window).postMessage
   }
     , pK = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]
     , qK = ["allow-top-navigation"]
     , rK = ["allow-same-origin"]
     , sK = lx([].concat(_.Ud(pK), _.Ud(qK)));
   lx([].concat(_.Ud(pK), _.Ud(rK)));
   lx([].concat(_.Ud(pK), _.Ud(qK), _.Ud(rK)));
   var tK = Q(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"])
     , uK = {
       Se: function(a) {
           if ("string" !== typeof a.version)
               throw new TypeError("version is not a string");
           if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version))
               throw new RangeError("Invalid version: " + a.version);
           if ("string" !== typeof a.Mb)
               throw new TypeError("subdomain is not a string");
           if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Mb))
               throw new RangeError("Invalid subdomain: " + a.Mb);
           return a.vf ? Kd("https://" + a.Mb + "-safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Kd("https://" + a.Mb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
       },
       kh: function(a) {
           return y(tK, a)
       }
   };
   /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
   var ce = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
   var mj = function(a, b) {
       try {
           kb(Mq(a, b))
       } catch (c) {}
   };
   var vK = function(a) {
       R.call(this, a)
   };
   _.O(vK, R);
   var wK = [vK, 4, $u, 2, $u, 1, $u, 3, $u, 5, cv];
   var xK = [.05, .1, .2, .5]
     , yK = [0, .5, 1]
     , zK = function(a) {
       a = pf(a);
       if (!a)
           return -1;
       try {
           var b = wE(a.document);
           var c = new _.ti(b.clientWidth,b.clientHeight)
       } catch (d) {
           c = new _.ti(-12245933,-12245933)
       }
       return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
   }
     , AK = function(a, b) {
       return 0 >= a || 0 >= b ? [] : dd(xK, function(c) {
           return Math.min(a / b * c, 1)
       })
   }
     , CK = function(a) {
       this.A = a.F;
       this.D = a.fb;
       this.I = a.mb;
       this.m = null;
       this.H = a.Da;
       this.j = BK(this);
       this.l = a.qf || !1
   };
   CK.prototype.getSlotId = function() {
       return this.m
   }
   ;
   var EK = function(a, b) {
       if (a.j) {
           if (null != a.m) {
               try {
                   DK(a, Math.round(performance.now()), 0, 0, 0, !1)
               } catch (c) {
                   a.H && a.H(c)
               }
               a.j && a.j.unobserve(a.D)
           }
           a.m = b;
           a.j.observe(a.D)
       }
   }
     , BK = function(a) {
       var b = a.D.offsetWidth * a.D.offsetHeight
         , c = zK(a.A);
       b = [].concat(_.Ud(yK), _.Ud(AK(c, b)));
       ka(b);
       return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d) {
           return FK(a, d)
       }
       ,{
           threshold: b
       }) : new ar(function(d) {
           return FK(a, d)
       }
       ,{
           threshold: b
       })
   }
     , FK = function(a, b) {
       try {
           var c = zK(a.A);
           _.ot(b, function(d) {
               a.l && DK(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
           })
       } catch (d) {
           a.H && a.H(d)
       }
   }
     , DK = function(a, b, c, d, e, f) {
       if (null == a.m)
           throw Error("Not Attached.");
       var g = new vK;
       c = w(g, 1, c);
       d = w(c, 2, d);
       e = w(d, 3, e);
       b = w(e, 4, b);
       f = w(b, 5, f);
       f = mc(bn(f, wK), 4);
       sD(a.I, "1", 10, f, void 0, a.m)
   };
   var GK = function(a, b) {
       this.j = a;
       this.m = b
   }
     , HK = function(a) {
       if (a.j.frames.google_ads_top_frame)
           return !0;
       var b = px(a.j);
       b = b && b.contentWindow;
       if (!b)
           return !1;
       b.addEventListener("message", function(c) {
           var d = c.ports;
           "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
               msgType: "__goog_top_url_resp",
               topUrl: a.m
           })
       }, !1);
       return !0
   };
   var wj = function(a) {
       R.call(this, a)
   };
   _.O(wj, R);
   var xj = [1, 3];
   var ae = {
       Eg: 0,
       Ag: 1,
       yg: 2,
       zg: 3,
       Cg: 5,
       Dg: 6,
       Bg: 7
   };
   var IK = Q(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"])
     , rj = y(IK);
   var JK = {
       issuerOrigin: "https://attestation.android.com",
       issuancePath: "/att/i",
       redemptionPath: "/att/r"
   }
     , KK = {
       issuerOrigin: "https://pagead2.googlesyndication.com",
       issuancePath: "/dtt/i",
       redemptionPath: "/dtt/r",
       getStatePath: "/dtt/s"
   };
   var MK = function(a, b, c) {
       _.vC.call(this);
       var d = this;
       this.m = a;
       this.j = [];
       b && LK() && this.j.push(JK);
       c && this.j.push(KK);
       if (document.hasTrustToken && !_.E(lC)) {
           var e = new u.Map;
           this.j.forEach(function(f) {
               e.set(f.issuerOrigin, {
                   issuerOrigin: f.issuerOrigin,
                   state: d.m ? 1 : 12,
                   hasRedemptionRecord: !1
               })
           });
           window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof u.Map ? new u.Map([].concat(_.Ud(e), _.Ud(window.goog_tt_state_map))) : e;
           window.goog_tt_promise_map && window.goog_tt_promise_map instanceof u.Map || (window.goog_tt_promise_map = new u.Map)
       }
   };
   _.O(MK, _.vC);
   var LK = function() {
       var a = void 0 === a ? window : a;
       a = a.navigator.userAgent;
       var b = /Chrome/.test(a);
       return /Android/.test(a) && b
   }
     , NK = function(a) {
       a = void 0 === a ? window : a;
       return !a.PeriodicSyncManager
   }
     , OK = function(a, b, c) {
       a = a.goog_tt_state_map;
       var d, e = [];
       b && (d = null == a ? void 0 : a.get(JK.issuerOrigin)) && e.push(d);
       c && (d = null == a ? void 0 : a.get(KK.issuerOrigin)) && e.push(d);
       return e
   }
     , PK = function(a) {
       return _.E(pC) ? !0 : a.some(function(b) {
           return b.hasRedemptionRecord
       })
   }
     , QK = function() {
       var a = window
         , b = _.Cg(221)
         , c = _.Cg(150);
       return b || ".google.ch" === c || "function" === typeof a.__tcfapi
   }
     , RK = function(a) {
       var b = _.Cg(252);
       a = _.E(pC) ? a.filter(function(c) {
           return 12 !== c.state
       }).map(function(c) {
           return c.issuerOrigin
       }) : a.filter(function(c) {
           return c.hasRedemptionRecord
       }).map(function(c) {
           return c.issuerOrigin
       });
       if (0 == a.length)
           return null;
       a = {
           type: "send-redemption-record",
           issuers: a,
           refreshPolicy: "none",
           signRequestData: _.E(pC) ? "omit" : "include",
           includeTimestampHeader: !0,
           additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
       };
       !_.E(pC) && b && 0 < _.t(Object, "keys").call(Object, b).length && (a.additionalSigningData = pu(JSON.stringify(b), 3));
       return a
   }
     , SK = function(a, b, c) {
       var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
       e && (e.state = b,
       void 0 != c && (e.hasRedemptionRecord = c))
   }
     , TK = function() {
       var a = JK.issuerOrigin + JK.redemptionPath
         , b = {
           keepalive: !0,
           trustToken: {
               type: "token-redemption",
               issuer: JK.issuerOrigin,
               refreshPolicy: "none"
           }
       };
       SK(JK.issuerOrigin, 2);
       return window.fetch(a, b).then(function(c) {
           if (!c.ok)
               throw Error(c.status + ": Network response was not ok!");
           SK(JK.issuerOrigin, 6, !0)
       }).catch(function(c) {
           c && "NoModificationAllowedError" === c.name ? SK(JK.issuerOrigin, 6, !0) : SK(JK.issuerOrigin, 5)
       })
   }
     , UK = function() {
       var a = JK.issuerOrigin + JK.issuancePath;
       SK(JK.issuerOrigin, 8);
       return window.fetch(a, {
           keepalive: !0,
           trustToken: {
               type: "token-request"
           }
       }).then(function(b) {
           if (!b.ok)
               throw Error(b.status + ": Network response was not ok!");
           SK(JK.issuerOrigin, 10);
           return TK()
       }).catch(function(b) {
           if (b && "NoModificationAllowedError" === b.name)
               return SK(JK.issuerOrigin, 10),
               TK();
           SK(JK.issuerOrigin, 9)
       })
   }
     , VK = function() {
       SK(JK.issuerOrigin, 13);
       return document.hasTrustToken(JK.issuerOrigin).then(function(a) {
           return a ? TK() : UK()
       })
   }
     , WK = function() {
       SK(KK.issuerOrigin, 13);
       if (u.Promise) {
           var a = document.hasTrustToken(KK.issuerOrigin).then(function(e) {
               return e
           }).catch(function(e) {
               return u.Promise.reject({
                   state: 19,
                   error: e
               })
           })
             , b = KK.issuerOrigin + KK.redemptionPath
             , c = {
               keepalive: !0,
               trustToken: {
                   type: "token-redemption",
                   refreshPolicy: "none"
               }
           };
           SK(KK.issuerOrigin, 16);
           a = a.then(function(e) {
               return window.fetch(b, c).then(function(f) {
                   if (!f.ok)
                       throw Error(f.status + ": Network response was not ok!");
                   SK(KK.issuerOrigin, 18, !0)
               }).catch(function(f) {
                   if (f && "NoModificationAllowedError" === f.name)
                       SK(KK.issuerOrigin, 18, !0);
                   else {
                       if (e)
                           return u.Promise.reject({
                               state: 17,
                               error: f
                           });
                       SK(KK.issuerOrigin, 17)
                   }
               })
           }).then(function() {
               return document.hasTrustToken(KK.issuerOrigin).then(function(e) {
                   return e
               }).catch(function(e) {
                   return u.Promise.reject({
                       state: 19,
                       error: e
                   })
               })
           }).then(function(e) {
               var f = KK.issuerOrigin + KK.getStatePath;
               SK(KK.issuerOrigin, 20);
               return window.fetch(f + "?ht=" + e, {
                   trustToken: {
                       type: "send-redemption-record",
                       issuers: [KK.issuerOrigin]
                   }
               }).then(function(g) {
                   if (!g.ok)
                       throw Error(g.status + ": Network response was not ok!");
                   SK(KK.issuerOrigin, 22);
                   return g.text().then(function(h) {
                       return JSON.parse(h)
                   })
               }).catch(function(g) {
                   return u.Promise.reject({
                       state: 21,
                       error: g
                   })
               })
           });
           var d = Ce(window);
           return a.then(function(e) {
               var f = KK.issuerOrigin + KK.issuancePath;
               return e && e.srqt && e.cs ? (SK(KK.issuerOrigin, 23),
               window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                   keepalive: !0,
                   trustToken: {
                       type: "token-request"
                   }
               }).then(function(g) {
                   if (!g.ok)
                       throw Error(g.status + ": Network response was not ok!");
                   SK(KK.issuerOrigin, 25);
                   return e
               }).catch(function(g) {
                   return u.Promise.reject({
                       state: 24,
                       error: g
                   })
               })) : e
           }).then(function(e) {
               if (e && e.srdt && e.cs)
                   return SK(KK.issuerOrigin, 26),
                   window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                       keepalive: !0,
                       trustToken: {
                           type: "token-redemption",
                           refreshPolicy: "refresh"
                       }
                   }).then(function(f) {
                       if (!f.ok)
                           throw Error(f.status + ": Network response was not ok!");
                       SK(KK.issuerOrigin, 28, !0)
                   }).catch(function(f) {
                       return u.Promise.reject({
                           state: 27,
                           error: f
                       })
                   })
           }).then(function() {
               SK(KK.issuerOrigin, 29)
           }).catch(function(e) {
               if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                   if ("number" === typeof e.state && e.error instanceof Error) {
                       SK(KK.issuerOrigin, e.state);
                       var f = _.D(nC);
                       Math.random() <= f && ue({
                           state: e.state,
                           err: e.error.toString()
                       }, "dtt_err")
                   } else
                       throw Error(e);
               else
                   throw e;
           })
       }
   }
     , XK = function(a) {
       if (document.hasTrustToken && !_.E(lC) && a.m) {
           var b = window.goog_tt_promise_map;
           if (b && b instanceof u.Map) {
               var c = [];
               if (a.j.some(function(e) {
                   return e.issuerOrigin === JK.issuerOrigin
               })) {
                   var d = b.get(JK.issuerOrigin);
                   d || (d = VK(),
                   b.set(JK.issuerOrigin, d));
                   c.push(d)
               }
               a.j.some(function(e) {
                   return e.issuerOrigin === KK.issuerOrigin
               }) && (a = b.get(KK.issuerOrigin),
               a || (a = WK(),
               b.set(KK.issuerOrigin, a)),
               c.push(a));
               if (0 < c.length && u.Promise && u.Promise.all)
                   return u.Promise.all(c)
           }
       }
   };
   var YK = function() {
       this.id = "goog_" + Jw++
   }
     , ZK = function(a) {
       _.vC.call(this);
       this.context = a;
       this.I = new u.Map
   };
   _.O(ZK, _.vC);
   ZK.prototype.H = function() {
       _.vC.prototype.H.call(this);
       this.I.clear()
   }
   ;
   var aL = function(a, b, c) {
       if (a.D)
           return function() {}
           ;
       var d = "string" === typeof b ? b : b.id, e, f, g = null != (f = null == (e = a.I.get(d)) ? void 0 : e.add(c)) ? f : new u.Set([c]);
       a.I.set(d, g);
       return function() {
           return void $K(a, b, c)
       }
   }
     , Rq = function(a, b, c) {
       c = void 0 === c ? function() {
           return !0
       }
       : c;
       return new u.Promise(function(d) {
           var e = aL(a, b, function(f) {
               c(f) && (e(),
               d(f))
           })
       }
       )
   }
     , $K = function(a, b, c) {
       var d;
       return !(null == (d = a.I.get("string" === typeof b ? b : b.id)) || !d.delete(c))
   };
   ZK.prototype.dispatchEvent = function(a, b, c) {
       var d = this, e, f, g, h, k, l, m;
       return _.ab(function(n) {
           if (1 == n.j) {
               e = "string" === typeof a ? a : a.id;
               f = d.I.get(e);
               if (null == (g = f) || !g.size)
                   return n.return();
               h = "function" === typeof window.CustomEvent ? new CustomEvent(e,{
                   detail: c,
                   bubbles: !0,
                   cancelable: !0
               }) : function() {
                   var p = document.createEvent("CustomEvent");
                   p.initCustomEvent(e, !0, !0, c);
                   return p
               }();
               k = {};
               l = _.x(f);
               m = l.next()
           }
           if (5 != n.j) {
               if (m.done) {
                   n.j = 0;
                   return
               }
               k.Pb = m.value;
               return bb(n, 0, 5)
           }
           _.Sh(d.context, b, function(p) {
               return function() {
                   d.I.has(e) && f.has(p.Pb) && p.Pb(h)
               }
           }(k), !0);
           k = {
               Pb: k.Pb
           };
           m = l.next();
           n.j = 2
       })
   }
   ;
   var bL = new YK
     , cL = new YK
     , dL = new YK
     , eL = new YK
     , fL = new YK
     , gL = new YK
     , hL = new YK
     , Sq = new YK
     , iL = new YK
     , jL = new YK;
   var kL, oL, sL, Ln, zn, nL, mL, lL, tL;
   kL = function() {
       this.j = new u.Map;
       this.I = 0;
       this.m = new u.Map;
       this.bf = Ce(_.q);
       this.Wb = null;
       this.H = 0;
       this.l = _.Pt(function() {
           return void Li("gpt-first-ad-request")
       });
       this.A = this.D = this.o = 0
   }
   ;
   oL = function(a, b) {
       a.j.get(b) || (a.j.set(b, {
           kb: !0,
           Wc: "",
           nb: "",
           Vd: 0,
           Id: 0,
           Uc: [],
           Vc: [],
           gb: !1,
           yd: null
       }),
       _.ap(b, function() {
           a.j.delete(b);
           lL(a, b)
       }),
       aL(b, cL, function(c) {
           c = c.detail;
           var d = (0,
           B.J)(a.j.get(b));
           d.Wc = v(c, 33) || "";
           d.gb = !0;
           mL(a, b, function() {
               d.Wc = ""
           });
           nL(a, b, function() {
               d.gb = !1
           })
       }),
       _.E(An) && Rq(b, fL).then(function(c) {
           c = c.timeStamp;
           (0,
           B.J)(a.j.get(b)).yd = null != c ? c : _.yn()
       }))
   }
   ;
   _.pL = function(a, b) {
       var c, d;
       return null != (d = null == (c = a.j.get(b)) ? void 0 : c.kb) ? d : !1
   }
   ;
   _.qL = function(a, b) {
       if (a = a.j.get(b))
           a.kb = !1
   }
   ;
   _.rL = function(a, b) {
       if (a = a.j.get(b))
           a.kb = !0
   }
   ;
   sL = function(a, b) {
       if (!b.length)
           return [];
       var c = zg(b[0].getAdUnitPath());
       b.every(function(g) {
           return zg(g.getAdUnitPath()) === c
       });
       var d = [];
       a = _.x(a.j);
       for (var e = a.next(); !e.done; e = a.next()) {
           var f = _.x(e.value);
           e = f.next().value;
           (f = f.next().value.Wc) && zg(e.getAdUnitPath()) === c && !_.t(b, "includes").call(b, e) && d.push(f)
       }
       return d
   }
   ;
   Ln = function(a, b) {
       var c, d;
       return null != (d = null == (c = a.j.get(b)) ? void 0 : c.nb) ? d : ""
   }
   ;
   zn = function(a, b) {
       return (a = a.j.get(b)) ? a.Vd - 1 : 0
   }
   ;
   nL = function(a, b, c) {
       (a = a.j.get(b)) && a.Uc.push(c)
   }
   ;
   mL = function(a, b, c) {
       (a = a.j.get(b)) && a.Vc.push(c)
   }
   ;
   lL = function(a, b) {
       if (a = a.j.get(b))
           for (b = a.Vc.slice(),
           a.Vc.length = 0,
           a = _.x(b),
           b = a.next(); !b.done; b = a.next())
               b = b.value,
               b()
   }
   ;
   tL = function(a, b) {
       if (a = a.j.get(b))
           for (b = a.Uc.slice(),
           a.Uc.length = 0,
           a = _.x(b),
           b = a.next(); !b.done; b = a.next())
               b = b.value,
               b()
   }
   ;
   kL.prototype.gb = function(a) {
       var b, c;
       return null != (c = null == (b = this.j.get(a)) ? void 0 : b.gb) ? c : !1
   }
   ;
   var vL = function(a, b, c) {
       (0,
       B.J)(a.j.get(b)).kd = c;
       nL(a, b, function() {
           return void uL(a, b)
       })
   }
     , uL = function(a, b) {
       var c;
       null == (c = a.j.get(b)) || delete c.kd
   };
   var Wm = function() {
       var a = {};
       return a.adsense_channel_ids = "channel",
       a.adsense_ad_types = "ad_type",
       a.adsense_ad_format = "format",
       a.adsense_background_color = "color_bg",
       a.adsense_border_color = "color_border",
       a.adsense_link_color = "color_link",
       a.adsense_text_color = "color_text",
       a.adsense_url_color = "color_url",
       a.page_url = "url",
       a.adsense_allow_expandable_ads = "ea",
       a.adsense_encoding = "oe",
       a.adsense_family_safe = "adsafe",
       a.adsense_flash_version = "flash",
       a.adsense_font_face = "f",
       a.adsense_hints = "hints",
       a.adsense_keyword_type = "kw_type",
       a.adsense_keywords = "kw",
       a.adsense_test_mode = "adtest",
       a.alternate_ad_iframe_color = "alt_color",
       a.alternate_ad_url = "alternate_ad_url",
       a.demographic_age = "cust_age",
       a.demographic_gender = "cust_gender",
       a.document_language = "hl",
       a
   };
   var Z = function(a, b, c) {
       gE.call(this, b, void 0 === c ? 0 : c);
       this.context = a
   };
   _.O(Z, gE);
   Z.prototype.T = function(a) {
       Ph(this.context, this.id, a);
       var b, c;
       null == (b = window.console) || null == (c = b.error) || c.call(b, a)
   }
   ;
   var wL = function(a, b, c, d, e) {
       var f = null
         , g = _.Lh(a.context, b, e);
       _.Za(c, d, g) && (f = function() {
           return _.fe(c, d, g)
       }
       ,
       _.ap(a, f));
       return f
   };
   var xL = /(<head(\s+[^>]*)?>)/i
     , zr = function(a, b, c, d, e) {
       Z.call(this, a, 665);
       this.B = U(this);
       this.l = V(this, b);
       this.C = Y(this, c);
       this.G = V(this, d);
       this.o = V(this, e)
   };
   _.O(zr, Z);
   zr.prototype.j = function() {
       var a;
       0 === this.l.value.kind && null != (a = this.C.value) && v(a, 1) ? (a = this.l.value.wa,
       this.o.value || Ea() || (a = a.replace(xL, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")),
       this.G.value && !this.o.value && (a = a.replace(xL, '$1<meta name="referrer" content="origin">')),
       this.B.j({
           kind: 0,
           wa: a
       })) : this.B.j(this.l.value)
   }
   ;
   var bs = function(a, b, c, d, e, f, g, h) {
       Z.call(this, a, 718);
       this.C = Y(this, c);
       this.l = Y(this, d);
       jE(this, e);
       this.G = V(this, f);
       this.o = V(this, g);
       this.N = V(this, h);
       this.K = Rq(b, iL)
   };
   _.O(bs, Z);
   bs.prototype.j = function() {
       var a = this, b, c, d;
       return _.ab(function(e) {
           if (1 == e.j) {
               var f = !a.N.value;
               if (null == a.l.value || "height" !== a.C.value || f)
                   return e.return();
               b = a.G.value;
               c = a.o.value;
               yL(c, !1);
               _.Jx(c, "min-width", "100%");
               _.Jx(b, "min-width", "100%");
               return bb(e, a.K, 2)
           }
           if (a.D)
               return e.return();
           d = b.contentDocument;
           if (!d)
               return e.return();
           f = d.body.offsetWidth;
           b.setAttribute("height", String(d.body.offsetHeight));
           b.setAttribute("width", String(f));
           yL(c, !0);
           e.j = 0
       })
   }
   ;
   var yL = function(a, b) {
       _.Jx(a, "visibility", b ? "visible" : "hidden")
   };
   var Kj = new u.Map
     , Jj = new u.Map;
   var Mj = function(a, b) {
       this.push = G(a, 76, b.push.bind(b))
   };
   $g(Mj, 2);
   var Oj = function(a, b) {
       this.messageId = a;
       this.messageArgs = b
   };
   Oj.prototype.getMessageId = function() {
       return this.messageId
   }
   ;
   Oj.prototype.getMessageArgs = function() {
       return this.messageArgs
   }
   ;
   var zL = K(2)
     , AL = K(3)
     , BL = K(4)
     , CL = K(5)
     , DL = K(6)
     , EL = K(12)
     , FL = K(14)
     , GL = K(16)
     , HL = K(19)
     , IL = K(20)
     , Uo = K(23)
     , Vo = K(26)
     , JL = K(28)
     , KL = K(30)
     , LL = K(31)
     , ML = K(34)
     , NL = K(35)
     , OL = K(36)
     , pq = K(38)
     , PL = K(40)
     , QL = K(48)
     , RL = K(50)
     , SL = K(60)
     , TL = K(63)
     , UL = K(64)
     , VL = K(66)
     , WL = K(68)
     , XL = K(69)
     , YL = K(70)
     , ZL = K(71)
     , $L = K(78)
     , aM = K(80)
     , bM = K(82)
     , cM = K(84)
     , dM = K(85)
     , eM = K(87)
     , Rk = K(88)
     , fM = K(92)
     , gM = K(93)
     , hM = K(99)
     , iM = K(103)
     , jM = K(104)
     , kM = K(105)
     , lM = K(106)
     , mM = K(107)
     , nM = K(108)
     , oM = K(113)
     , pM = K(114)
     , qM = K(115)
     , rM = K(116)
     , sM = K(117)
     , tM = K(118)
     , uM = K(119)
     , kl = K(121)
     , vM = K(122)
     , wM = K(123)
     , zq = K(125)
     , xM = K(126)
     , yM = K(127)
     , iq = K(144)
     , zM = K(134)
     , AM = K(135)
     , BM = K(136)
     , CM = K(137)
     , DM = K(138)
     , EM = K(139)
     , FM = K(140)
     , Oq = K(142)
     , GM = K(143)
     , HM = K(145)
     , IM = K(147);
   var JM = function(a, b, c) {
       var d = this;
       this.addEventListener = G(a, 86, function(e, f) {
           if ("function" !== typeof f)
               return L(b, Qj("Service.addEventListener", [e, f])),
               d;
           var g = Rj(e);
           if (!g)
               return L(b, gM(e)),
               d;
           c.addEventListener(g, f);
           return d
       });
       this.removeEventListener = G(a, 904, function(e, f) {
           var g = Rj(e);
           if ("function" === typeof f && g)
               return e = c.removeEventListener(g, f),
               _.E(ly) ? void 0 : e;
           L(b, Qj("Service.removeEventListener", [e, f]));
           return _.E(ly) ? void 0 : !1
       });
       this.getSlots = G(a, 573, function() {
           return c.m.map(function(e) {
               return (0,
               B.J)(e.j)
           })
       });
       this.getSlotIdMap = G(a, 574, function() {
           for (var e = {}, f = _.x(c.m), g = f.next(); !g.done; g = f.next())
               g = g.value,
               e[g.toString()] = g.j;
           return e
       });
       this.enable = G(a, 87, function() {
           return void c.enable()
       }, !0);
       this.getName = G(a, 575, function() {
           return c.getName()
       })
   };
   var Sj = function(a, b, c) {
       JM.call(this, a, b, c);
       var d = this;
       this.set = G(a, 576, function(e, f) {
           c.set(e, f);
           return d
       });
       this.get = G(a, 577, function(e) {
           return c.get(e)
       });
       this.getAttributeKeys = G(a, 578, function() {
           return dx(c.l)
       });
       this.display = G(a, 558, function(e, f, g, h) {
           return c.display(e, f, null != g ? g : "", null != h ? h : "")
       });
       this.notifyUnfilledSlots = G(a, 69, function(e) {
           c.kb && KM(c, LM(c, e))
       });
       this.refreshAllSlots = G(a, 60, function() {
           c.kb && KM(c)
       });
       this.setVideoSession = G(a, 61, function(e, f, g) {
           c.K = f;
           c.N = g;
           "number" === typeof e && (f = Gh().j,
           w(f, 29, e))
       });
       this.getDisplayAdsCorrelator = G(a, 62, function(e) {
           return MM(c, void 0 === e ? "" : e)
       });
       this.getVideoStreamCorrelator = G(a, 63, function() {
           var e = Gh().j;
           e = v(e, 29);
           return null != e ? e : 0
       });
       this.isSlotAPersistentRoadblock = G(a, 64, function(e) {
           var f = _.t(c.m, "find").call(c.m, function(g) {
               return g.j === e
           });
           return !!f && NM(c, f)
       });
       this.onImplementationLoaded = G(a, 65, function() {
           c.j.info(QL("GPT CompanionAds"))
       });
       this.slotRenderEnded = G(a, 67, function(e, f, g) {
           var h = _.t(c.m, "find").call(c.m, function(k) {
               return k.j === e
           });
           return h && OM(c, h, f, g)
       });
       this.setRefreshUnfilledSlots = G(a, 59, function(e) {
           return c.setRefreshUnfilledSlots(e)
       })
   };
   _.O(Sj, JM);
   $g(Sj, 3);
   var Uj = function(a, b, c) {
       JM.call(this, a, b, c);
       this.setContent = G(a, 72, function(d) {
           var e = _.t(c.m, "find").call(c.m, function(f) {
               return f.j === d
           });
           L(b, iq(), e)
       })
   };
   _.O(Uj, JM);
   $g(Uj, 4);
   var PM = Q(["https://console.googletagservices.com/pubconsole/loader.js"]), hk = y(PM), Jk, Ik = !1, ck = !1, ek = !1;
   var mq = function(a, b) {
       this.getAllEvents = G(a, 563, function() {
           return ck ? QM(b).slice() : []
       });
       this.getEventsBySlot = G(a, 565, function(c) {
           return ck ? RM(b, c).slice() : []
       });
       this.getEventsByLevel = G(a, 566, function(c) {
           return ck ? SM(b, c).slice() : []
       })
   };
   $g(mq, 5);
   var Uk = function(a, b, c, d) {
       var e = this
         , f = c.getSlotId()
         , g = Gh().j
         , h = (0,
       B.J)(Ho(Gh(), f.getDomId()));
       this.set = G(a, 83, function(k, l) {
           "page_url" === k && l && (k = [Nk(Ok(new Pk, k), [String(l)])],
           Yc(h, 3, k));
           return e
       });
       this.get = G(a, 84, function(k) {
           if ("page_url" !== k)
               return null;
           var l, m;
           return null != (m = null == (l = (C = (0,
           B.J)(h.sa()),
           _.t(C, "find")).call(C, function(n) {
               return Mk(n) === k
           })) ? void 0 : rm(l, 2)[0]) ? m : null
       });
       this.setClickUrl = G(a, 79, function(k) {
           "string" === typeof k ? h.setClickUrl(k) : L(b, Qj("Slot.setClickUrl", [k]), f);
           return e
       });
       this.setTargeting = G(a, 81, function(k, l) {
           Sk(f, h, k, l, b);
           return e
       });
       this.updateTargetingFromMap = G(a, 85, function(k) {
           Tk(f, h, k, b);
           return e
       });
       this.display = G(a, 78, function() {
           TM(d, f, wi(g, Gh().m))
       });
       this.setTagForChildDirectedTreatment = G(a, 80, function(k) {
           if (0 === k || 1 === k) {
               var l = kJ(g) || new hJ;
               l.setTagForChildDirectedTreatment(k);
               Zc(g, 25, l)
           }
           return e
       });
       this.setForceSafeFrame = G(a, 567, function(k) {
           "boolean" === typeof k ? w(h, 12, k) : L(b, Qj("PassbackSlot.setForceSafeFrame", [String(k)]), f);
           return e
       });
       this.setTagForUnderAgeOfConsent = G(a, 448, function(k) {
           if (0 === k || 1 === k) {
               var l = kJ(g) || new hJ;
               l.setTagForUnderAgeOfConsent(k);
               Zc(g, 25, l)
           }
           return e
       })
   };
   $g(Uk, 6);
   var Nm = function(a, b) {
       this.push = G(a, 932, function(c) {
           b.push(c)
       })
   };
   var Xk = {
       REWARDED: 4,
       TOP_ANCHOR: 2,
       BOTTOM_ANCHOR: 3,
       INTERSTITIAL: 5
   }
     , Yk = {
       PURCHASED: 1,
       ORGANIC: 2
   };
   var us = function(a, b) {
       var c = this;
       a = void 0 === a ? Gh().j : a;
       b = void 0 === b ? _.q : b;
       this.A = "";
       this.j = this.m = null;
       this.l = this.I = this.D = !1;
       this.H = function() {
           return !1
       }
       ;
       var d = {}
         , e = {}
         , f = {};
       this.o = (f[xD] = (d[19] = function() {
           return !!H(a, 10)
       }
       ,
       d[13] = function() {
           return Jd.apply(0, arguments).some(function(g) {
               return 0 == c.A.lastIndexOf(g, 0)
           })
       }
       ,
       d[12] = function() {
           return !!H(a, 6)
       }
       ,
       d[11] = yI,
       d[15] = function(g) {
           return c.H(g)
       }
       ,
       d[7] = function() {
           var g;
           return !(null == (g = b.crypto) || !g.subtle)
       }
       ,
       d[48] = function() {
           return !!c.m
       }
       ,
       d[51] = function() {
           return c.D
       }
       ,
       d[66] = function() {
           try {
               return !!HTMLScriptElement.supports("webbundle")
           } catch (g) {
               return !1
           }
       }
       ,
       d[67] = function() {
           return c.I
       }
       ,
       d[68] = function() {
           return c.l
       }
       ,
       d),
       f[yD] = (e[8] = function(g) {
           var h;
           return null != (h = te(c.m, Number(g))) ? h : void 0
       }
       ,
       e[10] = function(g) {
           return c.j ? ji(g + c.j) % 1E3 : void 0
       }
       ,
       e),
       f)
   }
     , UM = function(a, b) {
       b && !a.j && (a.j = _.t(b.split(":"), "find").call(b.split(":"), function(c) {
           return 0 === c.indexOf("ID=")
       }) || null)
   };
   var hm = function(a, b, c) {
       ZK.call(this, a);
       this.slotId = b;
       this.j = c
   };
   _.O(hm, ZK);
   hm.prototype.getSlotId = function() {
       return this.slotId
   }
   ;
   var Dn = ""
     , cl = null
     , jl = _.Pt(function() {
       var a, b;
       null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
   });
   var Zd = function(a, b, c, d) {
       ZK.call(this, a);
       this.adUnitPath = b;
       this.fb = d;
       this.j = null;
       this.id = this.adUnitPath + "_" + c
   };
   _.O(Zd, ZK);
   ba = Zd.prototype;
   ba.getId = function() {
       return this.id
   }
   ;
   ba.getAdUnitPath = function() {
       return this.adUnitPath
   }
   ;
   ba.getName = function() {
       return this.adUnitPath
   }
   ;
   ba.toString = function() {
       return this.getId()
   }
   ;
   ba.getDomId = function() {
       return this.fb
   }
   ;
   var VM = function(a, b) {
       a.j = b
   };
   var WM = function(a, b) {
       this.getId = G(a, 593, function() {
           return b.getId()
       });
       this.getAdUnitPath = G(a, 594, function() {
           return b.getAdUnitPath()
       });
       this.getName = G(a, 595, function() {
           return b.getName()
       });
       this.toString = G(a, 596, function() {
           return b.toString()
       });
       this.getDomId = G(a, 597, function() {
           return b.getDomId()
       })
   };
   var XM = function() {
       this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
       this.isBackfill = !1;
       this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
   }
     , YM = function(a, b) {
       a.advertiserId = b
   }
     , ZM = function(a, b) {
       a.campaignId = b
   }
     , $M = function(a, b) {
       a.yieldGroupIds = b
   }
     , aN = function(a, b) {
       a.companyIds = b
   };
   var bN = function(a, b) {
       this.width = a;
       this.height = b
   };
   bN.prototype.getWidth = function() {
       return this.width
   }
   ;
   bN.prototype.getHeight = function() {
       return this.height
   }
   ;
   var Bl = function(a, b, c) {
       var d = this
         , e = (0,
       B.J)(Ho(Gh(), c.getDomId()))
         , f = ""
         , g = null
         , h = function() {
           return ""
       }
         , k = ""
         , l = !1;
       _.ap(c, function() {
           e = new nJ;
           f = "";
           g = null;
           h = function() {
               return ""
           }
           ;
           k = ""
       });
       aL(c, dL, function(n) {
           var p = n.detail;
           n = p.qd;
           p = p.isBackfill;
           n && (f = n,
           l = p)
       });
       this.set = G(a, 40, function(n, p) {
           if ("string" !== typeof n || "string" !== typeof p || void 0 === Wm()[n])
               return L(b, Qj("Slot.set", [n, p]), c),
               d;
           var r = (C = e.sa(),
           _.t(C, "find")).call(C, function(A) {
               return Mk(A) === n
           });
           r ? Nk(r, [p]) : (r = Ok(new Pk, n),
           Ic(r, 2, p),
           Qk(e, 3, Pk, r));
           return d
       });
       this.get = G(a, 41, function(n) {
           if ("string" !== typeof n)
               return L(b, Qj("Slot.get", [n]), c),
               null;
           var p = (C = e.sa(),
           _.t(C, "find")).call(C, function(r) {
               return Mk(r) === n
           });
           return (p = p && rm(p, 2)) ? p[0] : null
       });
       this.getAttributeKeys = G(a, 42, function() {
           return e.sa().map(function(n) {
               return (0,
               B.J)(Mk(n))
           })
       });
       this.addService = G(a, 43, function(n) {
           n = Kj.get(n);
           if (!n)
               return L(b, Qj("Slot.addService", [n]), c),
               d;
           var p = n.getName();
           if ((C = rm(e, 4),
           _.t(C, "includes")).call(C, p))
               return b.info(EL(p, c.toString()), c),
               d;
           n.slotAdded(c, e);
           return d
       });
       this.defineSizeMapping = G(a, 44, function(n) {
           try {
               var p = e;
               if (!Array.isArray(n))
                   throw new zl("Size mapping must be an array");
               var r = n.map(Al);
               Yc(p, 6, r)
           } catch (A) {
               n = A,
               Ph(a, 44, n),
               tx("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
           }
           return d
       });
       this.setClickUrl = G(a, 45, function(n) {
           if ("string" !== typeof n)
               return L(b, Qj("Slot.setClickUrl", [n]), c),
               d;
           e.setClickUrl(n);
           return d
       });
       this.setCategoryExclusion = G(a, 46, function(n) {
           "string" !== typeof n || Kk(n) ? L(b, Qj("Slot.setCategoryExclusion", [n]), c) : ((C = rm(e, 8),
           _.t(C, "includes")).call(C, n) || Ic(e, 8, n),
           b.info(FL(n), c));
           return d
       });
       this.clearCategoryExclusions = G(a, 47, function() {
           w(e, 8, zc);
           b.info(GL(), c);
           return d
       });
       this.getCategoryExclusions = G(a, 48, function() {
           return rm(e, 8).slice()
       });
       this.setTargeting = G(a, 49, function(n, p) {
           Sk(c, e, n, p, b);
           return d
       });
       this.updateTargetingFromMap = G(a, 649, function(n) {
           Tk(c, e, n, b);
           return d
       });
       this.clearTargeting = G(a, 50, function(n) {
           if (void 0 === n)
               return Yc(e, 9),
               b.info(HL(c.getAdUnitPath()), c),
               d;
           var p = Lk(e)
             , r = _.t(p, "findIndex").call(p, function(A) {
               return Mk(A) === n
           });
           if (0 > r)
               return L(b, cM(n, c.getAdUnitPath()), c),
               d;
           p.splice(r, 1);
           Yc(e, 9, p);
           b.info(iM(n, c.getAdUnitPath()), c);
           return d
       });
       this.getTargeting = G(a, 51, function(n) {
           if ("string" !== typeof n)
               return L(b, Qj("Slot.getTargeting", [n]), c),
               [];
           var p = (C = Lk(e),
           _.t(C, "find")).call(C, function(r) {
               return Mk(r) === n
           });
           return p ? rm(p, 2).slice() : []
       });
       this.getTargetingKeys = G(a, 52, function() {
           return Lk(e).map(function(n) {
               return (0,
               B.J)(Mk(n))
           })
       });
       this.setCollapseEmptyDiv = G(a, 53, function(n, p) {
           p = void 0 === p ? !1 : p;
           if ("boolean" !== typeof n || "boolean" !== typeof p)
               return L(b, Qj("Slot.setCollapseEmptyDiv", [n, p]), c),
               d;
           w(e, 10, n);
           w(e, 11, n && p);
           Si("gpt_ced", function(r) {
               I(r, "sc", H(e, 11) ? "t" : "f");
               I(r, "level", "slot");
               Yi(r, a)
           });
           p && !n && L(b, IL(c.toString()), c);
           return d
       });
       this.getAdUnitPath = G(a, 54, function() {
           return c.getAdUnitPath()
       });
       this.getSlotElementId = G(a, 598, function() {
           return c.getDomId()
       });
       this.setForceSafeFrame = G(a, 55, function(n) {
           if ("boolean" !== typeof n)
               return L(b, Qj("Slot.setForceSafeFrame", [String(n)]), c),
               d;
           w(e, 12, n);
           return d
       });
       this.setSafeFrameConfig = G(a, 56, function(n) {
           var p = ml(b, n);
           if (!p)
               return b.error(Qj("Slot.setSafeFrameConfig", [n]), c),
               d;
           Zc(e, 13, p);
           return d
       });
       aL(c, cL, function(n) {
           n = n.detail;
           if (H(n, 8))
               g = null;
           else {
               g = new XM;
               var p = !!H(n, 9);
               g.isBackfill = p;
               var r = rm(n, 15)
                 , A = rm(n, 16);
               r.length && A.length && (g.sourceAgnosticCreativeId = r[0],
               g.sourceAgnosticLineItemId = A[0],
               p || (g.creativeId = r[0],
               g.lineItemId = A[0],
               (p = rm(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
               rm(n, 17).length && YM(g, rm(n, 17)[0]);
               rm(n, 18).length && ZM(g, rm(n, 18)[0]);
               rm(n, 19).length && $M(g, rm(n, 19));
               rm(n, 20).length && aN(g, rm(n, 20));
               n = Cc(n).map(function(z) {
                   return nc(z)
               });
               n.length && (g.encryptedTroubleshootingInfo = n[0])
           }
       });
       this.getResponseInformation = G(a, 355, function() {
           return g
       });
       this.getName = G(a, 170, function() {
           b.error(GM());
           var n = new dk("slot_get_name");
           Yi(n, a);
           fk(n);
           return c.getAdUnitPath()
       });
       var m = new WM(a,c);
       this.getSlotId = G(a, 579, function() {
           return m
       });
       this.getServices = G(a, 580, function() {
           return rm(e, 4).map(function(n) {
               return ch(n)
           })
       });
       this.getSizes = G(a, 581, function(n, p) {
           var r, A;
           return null != (A = null == (r = ei(e, n, p)) ? void 0 : r.map(function(z) {
               return H(z, 3) ? "fluid" : new bN(z.getWidth(),z.getHeight())
           })) ? A : null
       });
       this.getClickUrl = G(a, 582, function() {
           var n;
           return null != (n = e.getClickUrl()) ? n : ""
       });
       this.getTargetingMap = G(a, 583, function() {
           for (var n = {}, p = _.x(Lk(e)), r = p.next(); !r.done; r = p.next())
               r = r.value,
               Mk(r) && (n[Mk(r)] = rm(r, 2));
           return n
       });
       this.getOutOfPage = G(a, 584, function(n) {
           return "number" === typeof n ? Pl(e) === n : 0 !== Pl(e)
       });
       this.getCollapseEmptyDiv = G(a, 585, function() {
           return nl(e, 10) ? H(e, 10) : null
       });
       this.getDivStartsCollapsed = G(a, 586, function() {
           return nl(e, 11) ? H(e, 11) : null
       });
       aL(c, eL, function(n) {
           h = n.detail.re
       });
       this.getContentUrl = G(a, 587, function() {
           return h()
       });
       this.getFirstLook = G(a, 588, function() {
           tx("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
           return 0
       });
       aL(c, cL, function(n) {
           var p;
           k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
       });
       this.getEscapedQemQueryId = G(a, 591, function() {
           return k
       });
       this.getHtml = G(a, 592, function() {
           return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."),
           "") : f
       });
       this.setConfig = G(a, 1022, function(n) {
           var p = Ec(e, v(e, 26), 26);
           if (void 0 !== n.componentAuction) {
               n = _.x(n.componentAuction);
               for (var r = n.next(); !r.done; r = n.next()) {
                   var A = r.value;
                   r = A.configKey;
                   A = A.auctionConfig;
                   "string" !== typeof r || Kk(r) || (null === A ? p.delete(r) : A && p.set(r, JSON.stringify(A)))
               }
           }
       })
   };
   $g(Bl, 8);
   var cN = function() {
       this.m = [];
       this.hostpageLibraryTokens = [];
       this.j = {}
   }
     , dN = function(a, b) {
       if (!_.t(a.m, "includes").call(a.m, b) && (C = [1, 2, 3],
       _.t(C, "includes")).call(C, b)) {
           var c;
           if (c = _.E(Py) ? GE[b] : EE[b]) {
               var d = b + "_hostpage_library";
               if (c = gk(document, c))
                   c.id = d
           }
           a.m.push(b);
           b = new HE(b);
           a.hostpageLibraryTokens.push(b);
           a = Dg();
           a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
           a.hostpageLibraryTokens[b.j] = b.m
       }
   }
     , eN = function(a, b, c) {
       var d;
       a.j[b] = null != (d = a.j[b]) ? d : new u.Set;
       a.j[b].add(c)
   }
     , fN = function(a, b) {
       var c, d;
       a = null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, "values").call(c)) ? d : [];
       return [].concat(_.Ud(a))
   };
   var gN = {}
     , Dl = (gN[64] = zM,
   gN[134217728] = AM,
   gN[32768] = BM,
   gN[536870912] = CM,
   gN[8] = DM,
   gN[512] = EM,
   gN[1048576] = FM,
   gN[4194304] = HM,
   gN);
   var hN = _.Pt(function() {
       tx("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
   })
     , am = function() {
       this.j = new u.Map;
       this.ba = new u.Set;
       _.F(us).H = bm
   };
   am.prototype.add = function(a, b, c, d, e) {
       var f = this;
       e = void 0 === e ? {} : e;
       var g = void 0 === e.fb ? void 0 : e.fb
         , h = void 0 === e.format ? 0 : e.format;
       e = void 0 === e.Od ? !1 : e.Od;
       var k = $l(h);
       if (k)
           return Si("gpt_pla_ns", function(m) {
               I(m, "iu", c);
               I(m, "f", null != h ? h : "");
               I(m, "nsr", k);
               Yi(m, a)
           }),
           El(b, k, h, c),
           {};
       e && hN();
       e = this.j.get(c) || Number(e);
       d = iN(a, b, c, e, d, g || "gpt_unit_" + c + "_" + e);
       b = d.Ja;
       var l = d.slotId;
       d = d.Kc;
       if (!l)
           return {
               Kc: d
           };
       this.j.set(c, e + 1);
       this.ba.add(l);
       _.ap(l, function() {
           return void f.ba.delete(l)
       });
       cJ(c);
       return {
           slotId: l,
           Ja: b
       }
   }
   ;
   var qq = function(a) {
       return fN(_.F(cN), a).map(function(b) {
           var c;
           return null == (c = Ji(b, document)) ? void 0 : c.contentWindow
       }).filter(function(b) {
           return !!b
       })
   }
     , eq = function(a) {
       a = _.x(a);
       for (var b = a.next(); !b.done; b = a.next())
           b.value.Ca()
   }
     , Xo = function(a, b) {
       a = _.x(a.ba);
       for (var c = a.next(); !c.done; c = a.next())
           if (c = c.value,
           c.getDomId() === b)
               return c;
       return null
   }
     , gm = function(a, b, c, d, e, f) {
       f = void 0 === f ? !1 : f;
       return "string" === typeof c && 0 < c.length && d && (void 0 === e || "string" === typeof e) ? _.F(am).add(a, b, c, d, {
           fb: e,
           Od: f
       }) : {}
   }
     , iN = function(a, b, c, d, e, f) {
       var g = Xo(_.F(am), f);
       if (g)
           return b.error(JL(f, c, g.getAdUnitPath())),
           {
               Kc: !0
           };
       var h = new nJ;
       oJ(w(h, 1, c), f);
       e = yl(e);
       g = e.Ra;
       Yc(h, 5, e.Nc);
       null !== g && Zc(h, 16, g);
       IJ(h);
       var k = new Zd(a,c,d,f);
       VM(k, Cl(a, b, k));
       _.ap(k, function() {
           var l = Gh()
             , m = k.getDomId();
           delete l.m[m];
           l.D.delete(k);
           l = k.getAdUnitPath();
           l = zg(l);
           var n;
           m = (null != (n = Yh.get(l)) ? n : 0) - 1;
           0 >= m ? Yh.delete(l) : Yh.set(l, m);
           b.info(hM(k.toString()), k);
           (n = Jj.get(k)) && Kj.delete(n);
           Jj.delete(k)
       });
       b.info(zL(k.toString()), k);
       aL(k, eL, function(l) {
           l = l.detail.kf;
           b.info(AL(k.getAdUnitPath()), k);
           sD(_.F(Nh), "7", 9, zn(_.F(kL), k), 0, l)
       });
       aL(k, cL, function(l) {
           var m = l.detail;
           b.info(BL(k.getAdUnitPath()), k);
           var n;
           l = _.F(Nh);
           var p = v(h, 20);
           m = null != (n = m.getEscapedQemQueryId()) ? n : "";
           l.j && (_.q.google_timing_params = _.q.google_timing_params || {},
           _.q.google_timing_params["qqid." + p] = m)
       });
       aL(k, dL, function() {
           return void b.info(CL(k.getAdUnitPath()), k)
       });
       aL(k, fL, function() {
           return void b.info(DL(k.getAdUnitPath()), k)
       });
       return {
           Ja: h,
           slotId: k
       }
   };
   var jN = new u.WeakMap
     , kN = function(a, b) {
       a = [a];
       for (var c = b.length - 1; 0 <= c; --c)
           a.push(typeof b[c], b[c]);
       return a.join("\v")
   };
   var cm = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/
     , lN = function(a, b) {
       b = void 0 === b ? kN : b;
       var c = ia(a)
         , d = function(f) {
           f = _.x(f);
           f.next();
           f = Js(f);
           return b(c, f)
       }
         , e = function(f) {
           var g = _.x(f);
           f = g.next().value;
           g = Js(g);
           return a.apply(f, g)
       };
       return function() {
           var f = Jd.apply(0, arguments)
             , g = this || _.q
             , h = jN.get(g);
           h || (h = {},
           jN.set(g, h));
           return Vt(h, [this].concat(_.Ud(f)), e, d)
       }
   }(function(a) {
       return (null == a ? 0 : a.src) ? cm.test(a.src) ? 0 : 1 : 2
   }, function(a, b) {
       var c;
       return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
   });
   var mN = function(a) {
       var b = _.F(us)
         , c = [];
       a = _.x(a);
       for (var d = a.next(); !d.done; d = a.next()) {
           d = d.value;
           b.A = d;
           var e = ws(9);
           1 === e.length && (c.push(d),
           c.push(d + "-" + e[0]))
       }
       return c
   }
     , nN = _.Pt(function() {
       return void tx("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
   })
     , oN = _.Pt(function() {
       return void tx("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
   })
     , pN = _.Pt(function() {
       return void tx("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
   })
     , qN = function() {
       Object.defineProperty(window, "google_DisableInitialLoad", {
           get: function() {
               nN();
               return !0
           },
           set: function() {
               nN()
           },
           configurable: !0
       })
   }
     , jm = function(a, b, c) {
       JM.call(this, a, b, c);
       var d = this
         , e = Gh().j
         , f = Gh().m
         , g = !1;
       this.setTargeting = G(a, 1, function(h, k) {
           var l = null;
           "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : pa(k) && (l = _.t(Array, "from").call(Array, k));
           var m = "string" === typeof h && !Kk(h);
           l = l && ta(l);
           var n, p = null != (n = null == l ? void 0 : l.every(function(r) {
               return "string" === typeof r
           })) ? n : !1;
           if (!m || !p)
               return L(b, Qj("PubAdsService.setTargeting", [h, k])),
               d;
           k = l;
           m = (C = Nc(e, Pk, 2),
           _.t(C, "find")).call(C, function(r) {
               return Mk(r) === h
           });
           if ("gpt-beta" === h) {
               if (c.A)
                   return L(b, lM(k.join())),
                   d;
               if (m)
                   return L(b, mM(k.join())),
                   d;
               k = mN(k)
           }
           m ? Nk(m, k) : (m = Nk(Ok(new Pk, h), k),
           Qk(e, 2, Pk, m));
           b.info(Rk(h, k.join(), c.getName()));
           return d
       });
       this.clearTargeting = G(a, 2, function(h) {
           if (void 0 === h)
               return Yc(e, 2),
               b.info(jM(c.getName())),
               d;
           if ("gpt-beta" === h)
               return L(b, nM(h)),
               d;
           var k = Nc(e, Pk, 2)
             , l = _.t(k, "findIndex").call(k, function(m) {
               return Mk(m) === h
           });
           if (0 > l)
               return L(b, cM(h, c.getName())),
               d;
           k.splice(l, 1);
           Yc(e, 2, k);
           b.info(bM(h, c.getName()));
           return d
       });
       this.getTargeting = G(a, 38, function(h) {
           if ("string" !== typeof h)
               return L(b, Qj("PubAdsService.getTargeting", [h])),
               [];
           var k = (C = Nc(e, Pk, 2),
           _.t(C, "find")).call(C, function(l) {
               return Mk(l) === h
           });
           return k ? rm(k, 2).slice() : []
       });
       this.getTargetingKeys = G(a, 39, function() {
           return Nc(e, Pk, 2).map(function(h) {
               return (0,
               B.J)(Mk(h))
           })
       });
       this.setCategoryExclusion = G(a, 3, function(h) {
           if ("string" !== typeof h || Kk(h))
               return L(b, Qj("PubAdsService.setCategoryExclusion", [h])),
               d;
           (C = rm(e, 3),
           _.t(C, "includes")).call(C, h) || Ic(e, 3, h);
           b.info(dM(h));
           return d
       });
       this.clearCategoryExclusions = G(a, 4, function() {
           w(e, 3, zc);
           b.info(eM());
           return d
       });
       this.disableInitialLoad = G(a, 5, function() {
           w(e, 4, !0);
           g || (g = !0,
           qN())
       });
       this.enableSingleRequest = G(a, 6, function() {
           if (c.A && !H(e, 6))
               return L(b, SL("PubAdsService.enableSingleRequest")),
               !1;
           b.info(TL("single request"));
           w(e, 6, !0);
           return !0
       });
       this.enableAsyncRendering = G(a, 7, function() {
           return !0
       });
       this.enableSyncRendering = G(a, 8, function() {
           tx("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
           return !1
       });
       this.enableLazyLoad = G(a, 485, function(h) {
           var k = new Cr;
           w(k, 1, 800);
           w(k, 2, 400);
           w(k, 3, 3);
           if (_.ha(h)) {
               var l = h.fetchMarginPercent;
               "number" === typeof l && (0 <= l ? w(k, 1, l) : -1 === l && Gc(k, 1));
               l = h.renderMarginPercent;
               "number" === typeof l && (0 <= l ? w(k, 2, l) : -1 === l && Gc(k, 2));
               h = h.mobileScaling;
               "number" === typeof h && (0 < h ? w(k, 3, h) : -1 === h && w(k, 3, 1))
           }
           Zc(e, 5, k)
       });
       this.setCentering = G(a, 9, function(h) {
           h = !!h;
           b.info(UL("centering", String(h)));
           w(e, 15, h)
       });
       this.definePassback = G(a, 10, function(h, k) {
           return (h = im(a, b, c, h, k)) && h.Pd
       });
       this.refresh = G(a, 11, function() {
           var h = Jd.apply(0, arguments)
             , k = _.x(h)
             , l = k.next().value;
           k = k.next().value;
           k = void 0 === k ? {} : k;
           l && !Array.isArray(l) || !_.ha(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? L(b, Qj("PubAdsService.refresh", h)) : (k && !1 === k.changeCorrelator || e.setCorrelator(xx()),
           l = l ? fm(l, c) : c.m,
           c.refresh(wi(e, f), l) || L(b, Qj("PubAdsService.refresh", h)))
       });
       this.enableVideoAds = G(a, 12, function() {
           w(e, 21, !0);
           rN(c, e)
       });
       this.setVideoContent = G(a, 13, function(h, k) {
           sN(c, h, k, e)
       });
       this.collapseEmptyDivs = G(a, 14, function(h) {
           h = void 0 === h ? !1 : h;
           w(e, 11, !0);
           var k = !!h;
           w(e, 10, k);
           Si("gpt_ced", function(l) {
               I(l, "sc", k ? "t" : "f");
               I(l, "level", "page");
               Yi(l, a)
           });
           b.info($L(String(k)));
           return !!H(e, 11)
       });
       this.clear = G(a, 15, function(h) {
           if (Array.isArray(h))
               return tN(c, e, f, fm(h, c));
           if (void 0 === h)
               return tN(c, e, f, c.m);
           L(b, Qj("PubAdsService.clear", [h]));
           return !1
       });
       this.setLocation = G(a, 16, function(h) {
           if ("string" !== typeof h)
               return L(b, Qj("PubAdsService.setLocation", [h])),
               d;
           w(e, 8, h);
           return d
       });
       this.setCookieOptions = G(a, 17, function() {
           oN();
           return d
       });
       this.setTagForChildDirectedTreatment = G(a, 18, function(h) {
           pN();
           if (1 !== h && 0 !== h)
               return L(b, vM("PubadsService.setTagForChildDirectedTreatment", ll(h), "0,1")),
               d;
           var k = kJ(e) || new hJ;
           k.setTagForChildDirectedTreatment(h);
           Zc(e, 25, k);
           return d
       });
       this.clearTagForChildDirectedTreatment = G(a, 19, function() {
           pN();
           var h = kJ(e);
           if (!h)
               return d;
           h.clearTagForChildDirectedTreatment();
           Zc(e, 25, h);
           return d
       });
       this.setPublisherProvidedId = G(a, 20, function(h) {
           h = String(h);
           b.info(UL("PPID", h));
           w(e, 16, h);
           return d
       });
       this.set = G(a, 21, function(h, k) {
           if ("string" !== typeof h || !h.length || void 0 === Wm()[h] || "string" !== typeof k)
               return L(b, Qj("PubAdsService.set", [h, k])),
               d;
           var l = (C = e.sa(),
           _.t(C, "find")).call(C, function(m) {
               return Mk(m) === h
           });
           l ? Nk(l, [k]) : (l = Ok(new Pk, h),
           Ic(l, 2, k),
           Qk(e, 14, Pk, l));
           b.info(OL(h, String(k), c.getName()));
           return d
       });
       this.get = G(a, 22, function(h) {
           if ("string" !== typeof h)
               return L(b, Qj("PubAdsService.get", [h])),
               null;
           var k = (C = e.sa(),
           _.t(C, "find")).call(C, function(l) {
               return Mk(l) === h
           });
           return (k = k && rm(k, 2)) ? k[0] : null
       });
       this.getAttributeKeys = G(a, 23, function() {
           return e.sa().map(function(h) {
               return (0,
               B.J)(Mk(h))
           })
       });
       this.display = G(a, 24, function(h, k, l, m) {
           return void c.display(h, k, void 0 === l ? "" : l, void 0 === m ? "" : m)
       });
       this.updateCorrelator = G(a, 25, function() {
           tx(em("update"));
           L(b, qM());
           e.setCorrelator(xx());
           return d
       });
       this.defineOutOfPagePassback = G(a, 35, function(h) {
           h = im(a, b, c, h, [1, 1]);
           if (!h)
               return null;
           w(h.Ja, 15, 1);
           return h.Pd
       });
       this.setForceSafeFrame = G(a, 36, function(h) {
           if ("boolean" !== typeof h)
               return L(b, Qj("PubAdsService.setForceSafeFrame", [ll(h)])),
               d;
           w(e, 13, h);
           return d
       });
       this.setSafeFrameConfig = G(a, 37, function(h) {
           var k = ml(b, h);
           if (!k)
               return L(b, Qj("PubAdsService.setSafeFrameConfig", [h])),
               d;
           Zc(e, 18, k);
           return d
       });
       this.setRequestNonPersonalizedAds = G(a, 445, function(h) {
           pN();
           if (0 !== h && 1 !== h)
               return L(b, vM("PubAdsService.setRequestNonPersonalizedAds", ll(h), "0,1")),
               d;
           var k = kJ(e) || new hJ;
           w(k, 8, !!h);
           Zc(e, 25, k);
           return d
       });
       this.setTagForUnderAgeOfConsent = G(a, 447, function(h) {
           h = void 0 === h ? 2 : h;
           pN();
           if (2 !== h && 0 !== h && 1 !== h)
               return L(b, vM("PubadsService.setTagForUnderAgeOfConsent", ll(h), "2,0,1")),
               d;
           var k = kJ(e) || new hJ;
           k.setTagForUnderAgeOfConsent(h);
           Zc(e, 25, k);
           return d
       });
       this.getCorrelator = G(a, 27, function() {
           return String(e.getCorrelator())
       });
       this.getTagSessionCorrelator = G(a, 631, function() {
           return Ce(_.q)
       });
       this.getVideoContent = G(a, 30, function() {
           return uN(c, e)
       });
       this.getVersion = G(a, 568, function() {
           return a.jb ? String(a.jb) : a.Ga
       });
       this.forceExperiment = G(a, 569, function(h) {
           return void c.forceExperiment(h)
       });
       this.setCorrelator = G(a, 28, function(h) {
           tx(em("set"));
           L(b, pM());
           if (ni(window))
               return d;
           if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h))
               return L(b, Qj("PubadsService.setCorrelator", [ll(h)])),
               d;
           e.setCorrelator(h);
           w(e, 27, !0);
           return d
       });
       this.markAsAmp = G(a, 570, function() {
           window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
       });
       this.isSRA = G(a, 571, function() {
           return !!H(e, 6)
       });
       this.setImaContent = G(a, 328, function(h, k) {
           nl(e, 22) ? sN(c, h, k, e) : (w(e, 21, !0),
           rN(c, e),
           "string" === typeof h && w(e, 19, h),
           "string" === typeof k && w(e, 20, k))
       });
       this.getImaContent = G(a, 329, function() {
           return nl(e, 22) ? uN(c, e) : c.A ? {
               vid: v(e, 19) || "",
               cmsid: v(e, 20) || ""
           } : null
       });
       this.isInitialLoadDisabled = G(a, 572, function() {
           return !!H(e, 4)
       });
       this.setPrivacySettings = G(a, 648, function(h) {
           if (!_.ha(h))
               return L(b, Qj("PubAdsService.setPrivacySettings", [h])),
               d;
           var k = h.restrictDataProcessing, l = h.childDirectedTreatment, m = h.underAgeOfConsent, n = h.limitedAds, p = h.nonPersonalizedAds, r = h.userOptedOutOfPersonalization, A = h.trafficSource, z, J = null != (z = kJ(e)) ? z : new hJ;
           "boolean" === typeof p ? w(J, 8, p) : void 0 !== p && L(b, kl("PubAdsService.setPrivacySettings", ll(h), "nonPersonalizedAds", ll(p)));
           "boolean" === typeof r ? w(J, 13, r) : void 0 !== r && L(b, kl("PubAdsService.setPrivacySettings", ll(h), "userOptedOutOfPersonalization", ll(r)));
           "boolean" === typeof k ? w(J, 1, k) : void 0 !== k && L(b, kl("PubAdsService.setPrivacySettings", ll(h), "restrictDataProcessing", ll(k)));
           "boolean" === typeof n ? (k = dm(),
           n && !H(J, 9) && a.Lb && (p = a.eb,
           r = Mg(a),
           z = new WC,
           z = Hc(z, 1, !0, !1),
           z = Hc(z, 2, k, !1),
           r = Pg(r, 11, Qg, z),
           Wd(p, r)),
           k ? w(J, 9, n) : L(b, IM())) : void 0 !== n && L(b, kl("PubAdsService.setPrivacySettings", ll(h), "limitedAds", ll(n)));
           void 0 !== m && (null === m ? J.setTagForUnderAgeOfConsent(2) : !1 === m ? J.setTagForUnderAgeOfConsent(0) : !0 === m ? J.setTagForUnderAgeOfConsent(1) : L(b, kl("PubAdsService.setPrivacySettings", ll(h), "underAgeOfConsent", ll(m))));
           void 0 !== l && (null === l ? J.clearTagForChildDirectedTreatment() : !1 === l ? J.setTagForChildDirectedTreatment(0) : !0 === l ? J.setTagForChildDirectedTreatment(1) : L(b, kl("PubAdsService.setPrivacySettings", ll(h), "childDirectedTreatment", ll(l))));
           void 0 !== A && (null === A ? Gc(J, 10) : (C = _.t(Object, "values").call(Object, Yk),
           _.t(C, "includes")).call(C, A) ? w(J, 10, A) : L(b, kl("PubAdsService.setPrivacySettings", ll(h), "trafficSource", ll(A))));
           Zc(e, 25, J);
           return d
       })
   };
   _.O(jm, JM);
   $g(jm, 7);
   var nq = function(a, b) {
       var c = this
         , d = []
         , e = [];
       this.addSize = _.Lh(a, 88, function(f, g) {
           var h;
           if (h = rl(f))
               h = ql(g) || Array.isArray(g) && g.every(ql);
           h ? d.push([f, g]) : (e.push([f, g]),
           L(b, Qj("SizeMappingBuilder.addSize", [f, g])));
           return c
       });
       this.build = _.Lh(a, 89, function() {
           if (e.length)
               return L(b, ML(ll(e))),
               null;
           oa(d);
           return d
       })
   };
   var tr = function(a, b, c, d, e, f, g, h) {
       Z.call(this, a, 856);
       this.L = b;
       this.slotId = c;
       this.Fb = U(this);
       this.Ob = U(this);
       this.ra = U(this);
       this.K = U(this);
       this.l = U(this);
       this.C = Y(this, d);
       this.G = Y(this, e);
       this.o = Y(this, f);
       this.N = Y(this, g);
       h && jE(this, h)
   };
   _.O(tr, Z);
   var vN = function(a) {
       $D(a.Fb, a.C.value);
       $D(a.Ob, a.G.value);
       $D(a.ra, a.o.value);
       Pr(a.K);
       Pr(a.l)
   };
   tr.prototype.j = function() {
       var a = this.N.value;
       if (_.E(by) && a) {
           var b = this.o.value;
           if (0 !== (null == b ? void 0 : b.kind) || b.wa.length) {
               var c;
               var d = null == (c = this.L.j.get(this.slotId)) ? void 0 : c.kd;
               var e = null == d ? void 0 : d.get(a);
               if (!e)
                   throw new zl("Could not find bid with id: " + a);
               d = void 0 === e.height ? this.C.value : e.height;
               c = void 0 === e.width ? this.G.value : e.width;
               var f = e.adUrl
                 , g = e.ie
                 , h = void 0 === e.cpm ? 0 : e.cpm;
               if (1 !== e.format)
                   vN(this);
               else {
                   this.K.j(e);
                   if (!g && !f)
                       throw new zl("Could not find ad to render for bid id: " + a);
                   e = {
                       ad: lm(g, h),
                       adUrl: lm(f, h),
                       adId: a,
                       width: c,
                       height: d
                   };
                   g = btoa(JSON.stringify(e));
                   0 === (null == b ? void 0 : b.kind) ? (e = this.ra,
                   f = e.j,
                   b = b.wa.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), g.replace(/\$/g, "$$$$")),
                   f.call(e, {
                       kind: 0,
                       wa: b
                   }),
                   Pr(this.l)) : ($D(this.ra, b),
                   $D(this.l, g));
                   $D(this.Fb, d);
                   $D(this.Ob, c);
                   window.postMessage(JSON.stringify({
                       message: "Prebid Request",
                       adId: a
                   }), "*")
               }
               uL(this.L, this.slotId)
           } else
               vN(this)
       } else
           vN(this)
   }
   ;
   var wN = function(a, b, c, d, e, f) {
       Z.call(this, a, 975);
       this.l = b;
       this.o = c;
       this.pbjs = d;
       this.C = e;
       this.requestBidsConfig = f;
       this.B = new fE
   };
   _.O(wN, Z);
   wN.prototype.j = function() {
       qm(this.C, this.pbjs, this.l, this.o, this.requestBidsConfig);
       this.B.notify()
   }
   ;
   var xN = function(a, b, c) {
       Z.call(this, a, 937, _.D(Gy));
       this.window = c;
       this.o = U(this);
       this.l = U(this);
       this.G = U(this);
       this.C = U(this);
       this.K = iE(this, b)
   };
   _.O(xN, Z);
   xN.prototype.j = function() {
       if (_.E(Fy) && this.window.top !== this.window)
           yN(this);
       else {
           var a = this.K.value;
           if (a) {
               var b = {}, c;
               if (null == (c = Pc(a, Lv, 2)) ? 0 : pr(c, 2))
                   b["*"] = {
                       nc: !0
                   };
               c = new u.Set;
               for (var d = _.x(Nc(a, Kv, 1)), e = d.next(); !e.done; e = d.next()) {
                   e = e.value;
                   for (var f = _.x([Ro(e, 2), Ro(e, 1)].filter(function(n) {
                       return !!n
                   })), g = f.next(); !g.done; g = f.next())
                       b[g.value] = {
                           nc: pr(e, 3)
                       };
                   e = _.x(rm(e, 4));
                   for (f = e.next(); !f.done; f = e.next())
                       c.add(f.value)
               }
               $D(this.o, b);
               $D(this.l, [].concat(_.Ud(c)));
               var h, k;
               b = null == (h = Pc(a, Lv, 2)) ? void 0 : null == (k = Pc(h, Cv, 1)) ? void 0 : Nc(k, Ev, 1);
               $D(this.G, (null == b ? 0 : b.length) ? b : null);
               var l, m;
               a = null == (l = Pc(a, Lv, 2)) ? void 0 : null == (m = Pc(l, Cv, 3)) ? void 0 : Nc(m, Ev, 1);
               $D(this.C, (null == a ? 0 : a.length) ? a : null)
           } else
               yN(this)
       }
   }
   ;
   var yN = function(a) {
       Pr(a.o);
       Pr(a.l);
       Pr(a.G);
       Pr(a.C)
   };
   xN.prototype.I = function(a) {
       this.m(a)
   }
   ;
   xN.prototype.m = function() {
       yN(this)
   }
   ;
   var zN = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
     , AN = function(a, b, c, d, e, f, g, h, k, l, m) {
       Z.call(this, a, 920);
       this.K = b;
       this.R = e;
       this.Pa = l;
       this.L = m;
       this.l = U(this);
       this.C = U(this);
       this.G = U(this);
       this.o = new u.Map;
       this.P = [];
       this.ca = V(this, c);
       this.Z = new eE(d);
       this.N = Y(this, f);
       this.U = Y(this, g);
       this.fa = Y(this, h);
       _.E(cy) && (this.da = Y(this, k))
   };
   _.O(AN, Z);
   AN.prototype.j = function() {
       if (BN(this)) {
           var a = this.Z.value;
           a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.K.error(xM()),
           CN(this)) : (a = DN(this, a)) ? (this.l.j(a),
           this.C.j(this.o),
           this.G.j(this.P)) : CN(this) : CN(this)
       } else
           CN(this)
   }
   ;
   AN.prototype.I = function(a) {
       this.m(a)
   }
   ;
   AN.prototype.m = function(a) {
       this.K.error(yM(a.message));
       CN(this)
   }
   ;
   var CN = function(a) {
       a.l.j([]);
       Pr(a.C);
       Pr(a.G)
   }
     , DN = function(a, b) {
       var c = (0,
       B.J)(b.getEvents)()
         , d = c.filter(function(g) {
           var h = g.args;
           return "auctionEnd" === g.eventType && h.auctionId
       })
         , e = !1
         , f = a.ca.value.map(function(g) {
           var h = new zv, k = function(Aa) {
               return Aa === g.getDomId() || Aa === g.getAdUnitPath()
           }, l, m = null != (l = EN.get(g)) ? l : 0, n;
           l = null != (n = d.filter(function(Aa) {
               var Na, $b, Pb;
               return Number(null == (Na = Aa.args) ? void 0 : Na.timestamp) > m && (null == ($b = Aa.args) ? void 0 : null == (Pb = $b.adUnitCodes) ? void 0 : _.t(Pb, "find").call(Pb, k))
           })) ? n : [];
           if (!l.length)
               return a.P.push(g),
               h;
           var p;
           n = null == (p = l.reduce(function(Aa, Na) {
               return Number(Na.args.timestamp) > Number(Aa.args.timestamp) ? Na : Aa
           })) ? void 0 : p.args;
           if (!n)
               return h;
           var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
           p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
           var A = n.auctionId;
           n = n.timestamp;
           if (!A || null == n || !r.length)
               return h;
           EN.has(g) || _.ap(g, function() {
               return EN.delete(g)
           });
           EN.set(g, n);
           n = Av(h);
           Math.random() < _.D(fy) && b.version && zN.test(b.version) && w(n, 6, b.version);
           var z;
           wv(n, null == (z = a.da) ? void 0 : z.value);
           z = new u.Map;
           l = Bi(function() {
               return Lm(c, A)
           });
           var J = Lk(a.R[g.getDomId()])
             , N = {};
           r = _.x(r);
           for (var P = r.next(); !P.done; N = {
               Bc: N.Bc,
               Dc: N.Dc
           },
           P = r.next()) {
               var T = P.value;
               N.Bc = T.bidderCode;
               var W = T.bids;
               P = T.timeout;
               N.Dc = T.src;
               T = T.auctionStart;
               var aa = {};
               W = _.x(W);
               for (var X = W.next(); !X.done; aa = {
                   wb: aa.wb
               },
               X = W.next()) {
                   var ja = X.value;
                   aa.wb = ja.bidId;
                   var xa = ja.transactionId;
                   X = ja.adUnitCode;
                   ja = ja.getFloor;
                   if (aa.wb && k(X)) {
                       e = !0;
                       Am(n, g, X);
                       xa && (nl(n, 4) || w(n, 4, xa),
                       a.o.has(xa) || a.o.set(xa, T));
                       nl(n, 8) || w(n, 8, P);
                       var mb = _.t(p, "find").call(p, function(Aa) {
                           return function(Na) {
                               return Na.requestId === Aa.wb
                           }
                       }(aa));
                       xa = tm(n, function(Aa) {
                           return function() {
                               var Na = wm(new xm, Aa.Bc);
                               switch (Aa.Dc) {
                               case "client":
                                   w(Na, 7, 1);
                                   break;
                               case "s2s":
                                   w(Na, 7, 2)
                               }
                               return Na
                           }
                       }(N)());
                       Cm(n, xa, X, a.U.value, a.fa.value, ja);
                       mb ? (vm(xa, 1),
                       "number" === typeof mb.timeToRespond && ym(xa, mb.timeToRespond),
                       X = sm(mb, z, J),
                       um(xa, X)) : (X = l().get(aa.wb)) && !X.Gd ? ym(vm(xa, 2), Math.round(X.latency)) : ym(vm(xa, 3), P)
                   }
               }
           }
           var Ra;
           (null == (Ra = b.getConfig) ? 0 : Ra.call(b).useBidCache) && zm(n, g, A, J, z, b);
           vL(a.L, g, z);
           return h
       });
       return e ? f : []
   }
     , BN = function(a) {
       var b, c;
       return !!(null == (b = a.N.value) ? 0 : null == (c = b["*"]) ? 0 : c.nc) || a.Pa.split(",").some(function(d) {
           var e, f;
           return !!(null == (e = a.N.value) ? 0 : null == (f = e[d]) ? 0 : f.nc)
       })
   }
     , EN = new u.Map;
   var FN, GN = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 1019);
       this.R = g;
       this.l = new eE(b);
       this.C = new eE(c);
       this.G = new eE(d);
       this.o = Y(this, e);
       this.K = Y(this, f)
   };
   _.O(GN, Z);
   GN.prototype.j = function() {
       HN(this);
       IN(this)
   }
   ;
   var IN = function(a) {
       if (!(Math.random() >= _.D(ay))) {
           var b = (a.K.value || []).filter(function(k) {
               return Lk(a.R[k.getDomId()]).some(function(l) {
                   return "hb_pb" === v(l, 1)
               })
           });
           if (b.length) {
               var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Ud(new u.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                   return k.code
               })))) : _.t(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
               c = new dk("haux");
               I(c, "ius", b.map(function(k) {
                   return k.getAdUnitPath()
               }).join("~"));
               I(c, "dids", b.map(function(k) {
                   return k.getDomId()
               }).join("~"));
               I(c, "paucs", h.join("~"));
               Yi(c, a.context);
               fk(c, 1)
           }
       }
   }
     , HN = function(a) {
       Si("ppc_hrc", function(b) {
           var c;
           null != FN || (FN = (0,
           B.qa)(null == (c = (C = window.google_js_reporting_queue = window.google_js_reporting_queue || [],
           _.t(C, "find")).call(C, function(g) {
               return "1" === g.label
           })) ? void 0 : c.value));
           var d = oD("navigationStart", window);
           FN && I(b, "lt", FN);
           var e;
           I(b, "tids", [].concat(_.Ud((null == (e = a.o.value) ? void 0 : _.t(e, "keys").call(e)) || [])).join());
           var f;
           I(b, "asts", [].concat(_.Ud((null == (f = a.o.value) ? void 0 : _.t(f, "values").call(f)) || [])).map(function(g) {
               return g - d
           }).join());
           a.C.value ? I(b, "ht", a.C.value - d) : a.G.value && I(b, "ht", _.E(dy) ? FN : 0);
           Yi(b, a.context)
       }, a.o.value ? _.D($x) : 0)
   };
   var sr = function(a, b, c, d, e) {
       Z.call(this, a, 982);
       this.B = hE(this);
       this.o = Y(this, b);
       this.l = new eE(c);
       this.G = V(this, d);
       this.C = V(this, e)
   };
   _.O(sr, Z);
   sr.prototype.j = function() {
       var a = this, b;
       if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
           b = {};
           for (var c = _.x(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
               xb: b.xb,
               Qb: b.Qb
           },
           d = c.next())
               b.xb = d.value,
               b.Qb = function(e) {
                   return function(f) {
                       if (a.o.value === f.adId) {
                           var g = new dk("hbm_brt");
                           Yi(g, a.context);
                           I(g, "et", e.xb);
                           I(g, "sf", a.G.value);
                           I(g, "qqid", a.C.value);
                           var h, k, l;
                           I(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                           fk(g, 1)
                       }
                   }
               }(b),
               this.l.value.onEvent(b.xb, b.Qb),
               _.ap(this, function(e) {
                   return function() {
                       return void _.Sh(a.context, a.id, function() {
                           var f, g;
                           return void (null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.xb, e.Qb))
                       }, !0)
                   }
               }(b))
       }
       this.B.notify()
   }
   ;
   sr.prototype.m = function() {
       this.B.notify()
   }
   ;
   var JN = function(a, b, c, d, e, f) {
       Z.call(this, a, 976);
       this.nextFunction = d;
       this.l = e;
       this.requestBidsConfig = f;
       jE(this, b);
       jE(this, c)
   };
   _.O(JN, Z);
   JN.prototype.j = function() {
       var a;
       null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
   }
   ;
   var KN = function(a, b, c, d, e) {
       Z.call(this, a, 981);
       this.pbjs = b;
       this.o = c;
       this.l = d;
       this.requestBidsConfig = e;
       this.B = new fE
   };
   _.O(KN, Z);
   KN.prototype.j = function() {
       var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.D(gy);
       if (c) {
           var d;
           null != (d = this.l) && w(d, 1, 1);
           this.requestBidsConfig.timeout = c;
           var e, f, g;
           a = _.x(null != (g = null == (e = this.pbjs) ? void 0 : null == (f = e.getConfig) ? void 0 : f.call(e).s2sConfig) ? g : []);
           for (e = a.next(); !e.done; e = a.next())
               e.value.timeout = c;
           var h, k;
           null == (h = this.pbjs) || null == (k = h.setConfig) || k.call(h, {
               bidderTimeout: c
           })
       }
       this.B.notify()
   }
   ;
   var LN = function(a, b, c, d, e, f) {
       _.vC.call(this);
       this.j = a;
       this.m = b;
       this.A = c;
       this.I = d;
       this.l = e;
       this.pbjs = f
   };
   _.O(LN, _.vC);
   LN.prototype.push = function(a) {
       var b = a.context
         , c = a.nextFunction;
       a = a.requestBidsConfig;
       if (this.pbjs) {
           var d = new cf;
           _.Co(this, d);
           var e = new KN(this.j,this.pbjs,this.I,this.l,a)
             , f = new wN(this.j,this.m,this.A,this.pbjs,b,a);
           M(d, e);
           M(d, f);
           M(d, new JN(this.j,f.B,e.B,c,b,a));
           mf(d)
       }
   }
   ;
   var MN = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 951);
       this.F = window;
       this.l = U(this);
       this.o = U(this);
       this.K = V(this, b);
       this.G = Y(this, d);
       this.P = Y(this, e);
       this.C = Y(this, f);
       this.N = Y(this, g);
       jE(this, c)
   };
   _.O(MN, Z);
   MN.prototype.j = function() {
       var a = !!Dg().pbjs_hooks;
       this.o.j(a);
       $D(this.l, a ? null : _.Fe());
       var b, c = null == (b = this.G.value) ? void 0 : b.size, d;
       b = (null == (d = this.C.value) ? void 0 : d.size) || _.D(gy);
       d = this.K.value;
       var e, f = null != (e = Dg().pbjs_hooks) ? e : [];
       e = new LN(this.context,this.G.value,this.P.value,this.C.value,this.N.value,d);
       _.Co(this, e);
       f = _.x(f);
       for (var g = f.next(); !g.done; g = f.next())
           e.push(g.value);
       if (c || b || a)
           Dg().pbjs_hooks = Om(this.context, e);
       !c && !b || a || Mm(d, this.F)
   }
   ;
   var NN = null;
   var mn = 0
     , ON = new _.qi(-9,-9);
   var Mn = 0;
   var PN = function(a) {
       this.j = a;
       this.D = [];
       this.m = "";
       this.H = new u.Set(dl(Ty));
       a = _.x(H(this.j.ga.X, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
       for (var b = a.next(); !b.done; b = a.next())
           this.H.add(b.value)
   }
     , RN = function(a) {
       if (0 === a.j.ha.ba.length)
           return "";
       var b = a.j
         , c = b.ga
         , d = c.F
         , e = c.L
         , f = c.ob
         , g = c.X
         , h = c.Ba
         , k = c.ka
         , l = b.ha
         , m = l.O
         , n = l.Ia
         , p = l.ba
         , r = b.Qd.Dd
         , A = m.W
         , z = m.R
         , J = a.j;
       QN(a, new u.Map([["pvsid", {
           value: J.ga.context.pvsid
       }], ["correlator", {
           value: v(J.ha.O.W, 26)
       }]]));
       var N = a.j.gd
         , P = N.Xa
         , T = N.Ta;
       QN(a, "wbn" === N.Qa ? new u.Map([["wbsu", {
           value: (0,
           B.J)(P).toString().replace(/^uuid-in-package:/, "")
       }], ["callback", {
           value: T
       }]]) : new u.Map);
       var W = a.j
         , aa = W.ha.O.W
         , X = W.Ld
         , ja = X.hd
         , xa = X.Td
         , mb = X.Hd;
       if (_.E(Ay))
           var Ra = new u.Map;
       else {
           var Aa = 0 === oe(aa, 24, 0);
           Ra = new u.Map([["adsid", {
               value: Aa ? ja : null
           }], ["pucrd", {
               value: Aa ? xa : null
           }], ["jar", {
               value: mb
           }]])
       }
       QN(a, Ra);
       var Na = a.j
         , $b = Na.ha.O.W
         , Pb = Na.ee
         , Mc = H($b, 21);
       QN(a, new u.Map([["hxva", {
           value: Mc ? 1 : null
       }], ["cmsid", {
           value: Mc ? v($b, 23) : null
       }], ["vid", {
           value: Mc ? v($b, 22) : null
       }], ["pod", {
           value: Pb.Va
       }], ["ppos", {
           value: Pb.Wa
       }], ["scor", {
           value: Gu($b, 29)
       }]]));
       QN(a, kn(f, p, z));
       var eb = a.j
         , nb = eb.ga.context;
       QN(a, new u.Map([["output", {
           value: eb.gd.Qa
       }], ["gdfp_req", {
           value: 1
       }], ["vrg", {
           value: nb.jb ? String(nb.jb) : nb.Ga
       }], ["ptt", {
           value: 17
       }], ["impl", {
           value: H(eb.ha.O.W, 6) ? "fifs" : "fif"
       }]]));
       QN(a, new u.Map([["co", {
           value: 0 !== oe(A, 24, 0) ? oe(A, 24, 0) : null,
           options: {
               ya: !0
           }
       }]]));
       var hd = a.j, ub = hd.ga.X, vb = kJ(hd.ha.O.W) || new hJ, Ub = oe(vb, 6, 2), gf, wb, ij, Yy;
       var ER = new u.Map([["rdp", {
           value: H(vb, 1) ? "1" : null
       }], ["ltd", {
           value: H(vb, 9) ? "1" : null
       }], ["gdpr_consent", {
           value: null != (gf = Gu(ub, 2)) ? gf : null
       }], ["gdpr", {
           value: nl(ub, 3) ? H(ub, 3) ? "1" : "0" : null,
           options: {
               ya: !0
           }
       }], ["addtl_consent", {
           value: null != (wb = Gu(ub, 4)) ? wb : null
       }], ["tcfe", {
           value: null != (ij = Gu(ub, 7)) ? ij : null
       }], ["us_privacy", {
           value: null != (Yy = Gu(ub, 1)) ? Yy : null
       }], ["npa", {
           value: H(ub, 6) || H(vb, 8) ? 1 : null
       }], ["puo", {
           value: _.E(My) && H(vb, 13) ? 1 : null
       }], ["tfua", {
           value: 2 !== Ub ? Ub : null,
           options: {
               ya: !0
           }
       }], ["tfcd", {
           value: nl(vb, 5) ? v(vb, 5) : null,
           options: {
               ya: !0
           }
       }], ["trt", {
           value: nl(vb, 10) ? v(vb, 10) : null,
           options: {
               ya: !0
           }
       }], ["tad", {
           value: nl(ub, 8) ? H(ub, 8) ? "1" : "0" : null,
           options: {
               ya: !0
           }
       }]]);
       QN(a, ER);
       QN(a, Kn(a.j));
       QN(a, Fn(a.j));
       QN(a, Bn(a.j));
       var Zy = a.j
         , $y = Zy.ha
         , FR = Zy.ga.Ba
         , az = $y.O.R[$y.ba[0].getDomId()];
       var GR = new u.Map([["click", {
           value: !FR && az.getClickUrl() ? v(az, 7) : null
       }]]);
       QN(a, GR);
       QN(a, Sm(a.j));
       QN(a, Tm(a.j));
       var jk = d;
       jk = void 0 === jk ? _.q : jk;
       var HR = u.Map
         , IR = ["prev_scp", {
           value: pn(p, m)
       }]
         , JR = m.W
         , KR = m.R
         , Ef = new Ti;
       Ef.set(0, 1 !== n);
       var LR = KR[p[0].getDomId()];
       Ef.set(1, !!H(LR, 17));
       Ef.set(2, vn(p, m));
       Ef.set(3, H(JR, 27) || !1);
       Ef.set(4, 3 === n);
       var MR = Vi(Ef);
       var NR = new HR([IR, ["eri", {
           value: MR
       }], ["cust_params", {
           value: rn(A),
           options: {
               na: "&"
           }
       }], ["stss", {
           value: 0 === lN(_.Cg(172)) ? null : lN(_.Cg(172))
       }], ["ppid", {
           value: 1 !== oe(A, 24, 0) && nl(A, 16) ? v(A, 16) : null,
           options: {
               ya: !0
           }
       }], ["gct", {
           value: Hg("google_preview", jk)
       }], ["sc", {
           value: Number(_.Cg(6)),
           options: {
               ya: !0
           }
       }]]);
       QN(a, NR);
       var OR = sn(A.sa());
       if (0 !== oe(A, 24, 0))
           var bz = new u.Map;
       else {
           var cz = zE(k, "__gads", g)
             , dz = "1" === zE(k, "__gpi_opt_out", g) ? "1" : null
             , PR = u.Map
             , QR = ["cookie_enabled", {
               value: !cz && AE(k, g) ? "1" : null
           }]
             , ez = d.document
             , RR = ez.domain
             , SR = ["cdm", {
               value: (OR || oi(d)) === ez.URL ? "" : RR
           }]
             , kk = zE(k, "__gpi", g);
           var TR = kk && !_.t(kk, "includes").call(kk, "&") ? kk : null;
           bz = new PR([["cookie", {
               value: cz,
               options: {
                   ya: !0
               }
           }], QR, SR, ["gpic", {
               value: TR
           }], ["gpico", {
               value: dz
           }], ["pdopt", {
               value: dz
           }]])
       }
       QN(a, bz);
       var kp = a.j.ga.F;
       var UR = new u.Map([["arp", {
           value: Ij(kp) ? 1 : null
       }], ["abxe", {
           value: Gd(kp.top) || nx(kp.IntersectionObserver) ? 1 : null
       }]]);
       QN(a, UR);
       var fz = a.j
         , gz = fz.ga.F
         , VR = sn(fz.ha.O.W.sa())
         , lk = new u.Map([["dt", {
           value: (new Date).getTime()
       }]]);
       if (!VR) {
           try {
               var hz = Math.round(Date.parse(gz.document.lastModified) / 1E3) || null
           } catch (Ge) {
               hz = null
           }
           lk.set("lmt", {
               value: hz
           })
       }
       var iz = Mn
         , mk = Ng(gz);
       0 < mk && iz >= mk && (lk.set("dlt", {
           value: mk
       }),
       lk.set("idt", {
           value: iz - mk
       }));
       QN(a, lk);
       for (var jz, kz = a.j, lp = kz.ha, lz = lp.O, mz = lp.ba, nz = lp.O, WR = nz.W, YR = nz.R, oz = kz.ga, Ff = oz.F, ZR = oz.Ba, Sd = fi(!0, Ff), $R = Ff.document, pz = [], qz = [], rz = _.x(mz), mp = rz.next(); !mp.done; mp = rz.next()) {
           var sz = mp.value
             , tz = YR[sz.getDomId()]
             , uz = Gi(sz, tz, $R, mi(WR, tz))
             , vz = void 0
             , np = ZR ? null != (vz = uz) ? vz : ON : uz;
           np && (pz.push(Math.round(np.x)),
           qz.push(Math.round(np.y)))
       }
       Sd && (lz.ub = Sd);
       var nk = ni(Ff) ? null : fi(!1, Ff);
       try {
           var wz = Ff.top;
           var op = ln(wz.document, wz)
       } catch (Ge) {
           op = new _.qi(-12245933,-12245933)
       }
       jz = new u.Map([["adxs", {
           value: pz
       }], ["adys", {
           value: qz
       }], ["biw", {
           value: Sd ? Sd.width : null
       }], ["bih", {
           value: Sd ? Sd.height : null
       }], ["isw", {
           value: Sd ? null == nk ? void 0 : nk.width : null
       }], ["ish", {
           value: Sd ? null == nk ? void 0 : nk.height : null
       }], ["scr_x", {
           value: Math.round(op.x),
           options: {
               ya: !0
           }
       }], ["scr_y", {
           value: Math.round(op.y),
           options: {
               ya: !0
           }
       }], ["btvi", {
           value: nn(mz, Ff, lz),
           options: {
               ya: !0,
               na: "|"
           }
       }]]);
       QN(a, jz);
       QN(a, Vm(a.j));
       QN(a, Xm(a.j));
       var xz = a.j, aS = xz.ha.O.W, Qb = xz.ga.F, yz = _.Cg(251), zz, Az, Bz, Cz, Dz, Ez, Fz;
       var ok = Qb;
       ok = void 0 === ok ? Dw : ok;
       try {
           var Gz = ok.history.length
       } catch (Ge) {
           Gz = 0
       }
       var bS = u.Map
         , cS = ["u_his", {
           value: Gz
       }]
         , dS = ["u_h", {
           value: null == (zz = Qb.screen) ? void 0 : zz.height
       }]
         , eS = ["u_w", {
           value: null == (Az = Qb.screen) ? void 0 : Az.width
       }]
         , fS = ["u_ah", {
           value: null == (Bz = Qb.screen) ? void 0 : Bz.availHeight
       }]
         , gS = ["u_aw", {
           value: null == (Cz = Qb.screen) ? void 0 : Cz.availWidth
       }]
         , hS = ["u_cd", {
           value: null == (Dz = Qb.screen) ? void 0 : Dz.colorDepth
       }]
         , pk = Qb;
       pk = void 0 === pk ? _.q : pk;
       var Hz = pk.devicePixelRatio
         , iS = ["u_sd", {
           value: "number" === typeof Hz ? +Hz.toFixed(3) : null
       }]
         , jS = ["u_tz", {
           value: -(new Date).getTimezoneOffset()
       }];
       try {
           var Iz, Jz, Kz, Lz, kS = null != (Lz = null == (Iz = Qb.external) ? void 0 : null == (Jz = Iz.getHostEnvironmentValue) ? void 0 : null == (Kz = Jz.bind(Qb.external)) ? void 0 : Kz("os-mode")) ? Lz : "", Mz, Nz = Number(null == (Mz = JSON.parse(kS)) ? void 0 : Mz["os-mode"]);
           var Oz = 0 <= Nz ? Nz + 1 : null
       } catch (Ge) {
           Oz = null
       }
       var lS = ["wsm", {
           value: Oz
       }]
         , mS = ["dmc", {
           value: null != (Fz = null == (Ez = Qb.navigator) ? void 0 : Ez.deviceMemory) ? Fz : null
       }];
       var rh = v(aS, 8);
       if (rh) {
           50 < rh.length && (rh = rh.substring(0, 50));
           var Pz = "a " + pu('role:1 producer:12 loc:"' + rh + '"')
       } else
           Pz = "";
       var nS = ["uule", {
           value: Pz
       }]
         , pd = Qb;
       pd = void 0 === pd ? _.q : pd;
       var Gf = new Ti;
       pd.SVGElement && pd.document.createElementNS && Gf.set(0);
       var Qz = mx();
       Qz["allow-top-navigation-by-user-activation"] && Gf.set(1);
       Qz["allow-popups-to-escape-sandbox"] && Gf.set(2);
       pd.crypto && pd.crypto.subtle && Gf.set(3);
       pd.TextDecoder && pd.TextEncoder && Gf.set(4);
       var oS = ["bc", {
           value: Vi(Gf)
       }]
         , pS = ["uach", {
           value: yz ? pu(yz, 3) : null
       }];
       if (_.Cg(221))
           var pp = null;
       else {
           var Rz, sh = null == (Rz = Qb.navigator) ? void 0 : Rz.userActivation;
           if (sh) {
               var qp = 0;
               if (null == sh ? 0 : sh.hasBeenActive)
                   qp |= 1;
               if (null == sh ? 0 : sh.isActive)
                   qp |= 2;
               pp = qp
           } else
               pp = void 0
       }
       var qS = ["uas", {
           value: pp
       }];
       a: {
           try {
               var Sz, Tz, rp = null == (Sz = Qb.performance) ? void 0 : null == (Tz = Sz.getEntriesByType("navigation")) ? void 0 : Tz[0];
               if (null == rp ? 0 : rp.type) {
                   var Uz;
                   var Vz = null != (Uz = sI.get(rp.type)) ? Uz : null;
                   break a
               }
           } catch (Ge) {}
           var Wz, Xz, Yz;
           Vz = null != (Yz = tI.get(null == (Wz = Qb.performance) ? void 0 : null == (Xz = Wz.navigation) ? void 0 : Xz.type)) ? Yz : null
       }
       QN(a, new bS([cS, dS, eS, fS, gS, hS, iS, jS, lS, mS, nS, oS, pS, qS, ["nvt", {
           value: Vz
       }]]));
       var Zz = Ig("google_preview", d)
         , qk = d.document
         , $z = Zz ? tn(qk.URL) : qk.URL
         , aA = Zz ? tn(qk.referrer) : qk.referrer
         , bA = !1;
       if (h)
           var Hf = sn(A.sa());
       else {
           var cA;
           Hf = null != (cA = sn(z[p[0].getDomId()].sa())) ? cA : sn(A.sa())
       }
       if (null != Hf) {
           var sp = $z;
           ni(d) || (aA = "",
           bA = !0)
       } else
           Hf = $z;
       var dA = un(d)
         , th = new u.Map([["nhd", {
           value: dA || null
       }], ["url", {
           value: Hf
       }], ["loc", {
           value: null !== sp && sp !== Hf ? sp : null
       }], ["ref", {
           value: aA
       }]])
         , rS = Hf
         , eA = _.Cg(252) || {};
       eA.url = rS;
       _.F(Ag).j = !0;
       Bg[252] = eA;
       if (dA) {
           var sS = th.set;
           var fA, gA, tp = Gd(d.top) && (null == (fA = d.top) ? void 0 : null == (gA = fA.location) ? void 0 : gA.href), hA, uh = null == (hA = d.location) ? void 0 : hA.ancestorOrigins, rk = Gj(d) || "", He = (null == uh ? void 0 : uh[uh.length - 1]) || "";
           if (_.E(bC)) {
               var iA = He && ax(He.match(_.$w)[3] || null) && ax(He.match(_.$w)[3] || null) !== ax(rk.match(_.$w)[3] || null), tS = iA ? He : rk || He, jA, uS = null != (jA = null == uh ? void 0 : uh.length) ? jA : 0;
               .001 > re() && ue({
                   uaoo: iA ? "1" : "0",
                   ltw: tp || "",
                   rtw: rk,
                   aotw: He,
                   aol: String(uS)
               }, "tpurl");
               var kA = tp || tS || ""
           } else
               kA = tp || rk || He;
           var up = kA;
           var vS = up ? bA ? ax(up.match(_.$w)[3] || null) : up : null;
           sS.call(th, "top", {
               value: vS
           });
           th.set("etu", {
               value: e.Wb
           })
       }
       th.set("scar", {
           value: r
       });
       QN(a, th);
       var wS = a.j.ga.context.pvsid;
       var xS = new u.Map([["rumc", {
           value: _.E(dC) || _.F(Nh).j ? wS : null
       }], ["rume", {
           value: _.E(Cy) ? 1 : null
       }]]);
       QN(a, xS);
       var uc = a.j.ga.F
         , yS = u.Map;
       var Ie = Bx(uc);
       var sk = gD(uc, uc.google_ad_width, uc.google_ad_height);
       var vp = Ie.location.href;
       if (Ie == Ie.top)
           var lA = !0;
       else {
           var wp = !1
             , xp = Ie.document;
           xp && xp.referrer && (vp = xp.referrer,
           Ie.parent == Ie.top && (wp = !0));
           var yp = Ie.location.ancestorOrigins;
           if (yp) {
               var zp = yp[yp.length - 1];
               zp && -1 == vp.indexOf(zp) && (wp = !1,
               vp = zp)
           }
           lA = wp
       }
       var zS = lA
         , tk = uc.top == uc ? 0 : Gd(uc.top) ? 1 : 2
         , If = 4;
       sk || 1 != tk ? sk || 2 != tk ? sk && 1 == tk ? If = 7 : sk && 2 == tk && (If = 8) : If = 6 : If = 5;
       zS && (If |= 16);
       var AS = "" + If;
       if (uc != uc.top)
           for (var Uc = uc; Uc && Uc != Uc.top && Gd(Uc) && !Uc.sf_ && !Uc.$sf && !Uc.inGptIF && !Uc.inDapIF; Uc = Uc.parent)
               ;
       QN(a, new yS([["frm", {
           value: AS || null
       }], ["vis", {
           value: xI(uc.document)
       }]]));
       for (var mA = a.j, nA = mA.ha.ba, ec = mA.ga.F, oA, pA, qA = [], rA = [], sA = _.x(nA), Ap = sA.next(); !Ap.done; Ap = sA.next()) {
           var tA = ec
             , uk = Ai(Ap.value)
             , Bp = qx((null == uk ? void 0 : uk.parentElement) && Ci(uk.parentElement, tA) || null);
           if (!Bp || 1 === Bp[0] && 1 === Bp[3]) {
               var uA = void 0
                 , vA = void 0
                 , wA = void 0
                 , vk = uk
                 , xA = tA
                 , yA = null != (wA = null == vk ? void 0 : vk.parentElement) ? wA : null
                 , Cp = null != (vA = ui(yA)) ? vA : new _.ti(0,0);
               an(Cp, yA, xA, 100);
               var Dp = null != (uA = ui(vk)) ? uA : new _.ti(0,0);
               an(Dp, vk, xA, 1);
               -1 === Cp.height && (Dp.height = -1);
               oA = Cp;
               pA = Dp;
               var zA = oA
                 , AA = pA;
               var BA = zA.width + "x" + zA.height;
               var CA = AA.width + "x" + AA.height
           } else
               CA = BA = "-1x-1";
           var BS = CA;
           qA.push(BA);
           rA.push(BS)
       }
       if (null == NN) {
           var CS = gD(ec, 500, 300);
           var Ep = ec.navigator
             , vh = Ep.userAgent
             , DA = Ep.platform
             , DS = Ep.product;
           if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(DA) && /^Opera/.test(vh))
               var Fp = !1;
           else if (/Win/.test(DA) && /Trident/.test(vh) && 11 <= ec.document.documentMode)
               Fp = !0;
           else {
               var EA = (/WebKit\/(\d+)/.exec(vh) || [0, 0])[1]
                 , ES = (/rv:(\d+\.\d+)/.exec(vh) || [0, 0])[1];
               Fp = !EA && "Gecko" === DS && 27 <= ES && !/ rv: 1\.8([^.] |\.0) /.test(vh) || 536 <= EA ? !0 : !1
           }
           NN = Fp && !CS
       }
       var FA = 0 !== (0,
       _.Vl)()
         , Je = fi(!0, ec, FA).width
         , GA = []
         , HA = []
         , wk = [];
       if (null !== ec && ec != ec.top) {
           var IA = fi(!1, ec).width;
           (-12245933 === Je || -12245933 === IA || IA < Je) && wk.push(8)
       }
       -12245933 !== Je && (1.5 * Je < ec.document.documentElement.scrollWidth ? wk.push(10) : FA && 1.5 * ec.outerWidth < Je && wk.push(10));
       for (var JA = _.x(nA), Gp = JA.next(); !Gp.done; Gp = JA.next()) {
           var Vc = new Ti
             , Hp = Ai(Gp.value)
             , Ke = 0
             , Ip = !1
             , Jp = !1;
           if (Hp) {
               for (var KA = 0, Jf = Hp; Jf && 100 > KA; KA++,
               Jf = Jf.parentElement) {
                   var xk = Ci(Jf, ec);
                   if (xk) {
                       var Kp = xk
                         , LA = Kp.display
                         , MA = Kp.overflowX;
                       if ("visible" !== Kp.overflowY) {
                           Vc.set(2);
                           var Lp = ui(Jf);
                           Lp && (Ke = Ke ? Math.min(Ke, Lp.width) : Lp.width);
                           if (Vc.get(9))
                               break
                       }
                       Zm(xk) && Vc.set(9);
                       "none" === LA && Vc.set(7);
                       if ("IFRAME" === Jf.nodeName) {
                           var Mp = parseInt(xk.width, 10);
                           Mp < Je && (Vc.set(8),
                           Ke = Ke ? Math.min(Mp, Ke) : Mp)
                       }
                       Jp || (Jp = "scroll" === MA || "auto" === MA);
                       Ip || (Ip = "flex" === LA)
                   } else
                       Vc.set(3)
               }
               if (Jp && Ip) {
                   var NA = Hp.getBoundingClientRect().left;
                   (NA > Je || 0 > NA) && Vc.set(11)
               }
           } else
               Vc.set(1);
           for (var OA = _.x(wk), Np = OA.next(); !Np.done; Np = OA.next())
               Vc.set(Np.value);
           GA.push(Vi(Vc));
           HA.push(Ke)
       }
       QN(a, new u.Map([["psz", {
           value: qA,
           options: {
               na: "|"
           }
       }], ["msz", {
           value: rA,
           options: {
               na: "|"
           }
       }], ["fws", {
           value: GA
       }], ["ohw", {
           value: HA
       }], ["ea", {
           value: NN ? null : "0",
           options: {
               ya: !0
           }
       }]]));
       QN(a, Sn(a.j));
       var PA = a.j;
       var FS = new u.Map([["psts", {
           value: sL(PA.ga.L, PA.ha.ba)
       }]]);
       QN(a, FS);
       var QA = a.j.ga, RA = QA.X, Td = QA.F, SA;
       var TA = Td.document.domain
         , wh = null != (SA = ve(RA) && xe(Td) ? Td.document.cookie : null) ? SA : ""
         , GS = Td.history.length
         , yk = Td.screen
         , HS = Td.document.referrer;
       if (Hn())
           var UA = window.gaGlobal || {};
       else {
           var Op = Math.round((new Date).getTime() / 1E3), Pp = Td.google_analytics_domain_name, zk = "undefined" == typeof Pp ? cD("auto", TA) : cD(Pp, TA), IS = -1 < wh.indexOf("__utma=" + zk + "."), JS = -1 < wh.indexOf("__utmb=" + zk), Qp;
           if (!(Qp = (Gn() || window).gaGlobal)) {
               var KS = {};
               Qp = (Gn() || window).gaGlobal = KS
           }
           var hb = Qp
             , VA = !1;
           if (IS) {
               var Rp = wh.split("__utma=" + zk + ".")[1].split(";")[0].split(".");
               JS ? hb.sid = Rp[3] : hb.sid || (hb.sid = Op + "");
               hb.vid = Rp[0] + "." + Rp[1];
               hb.from_cookie = !0
           } else {
               hb.sid || (hb.sid = Op + "");
               if (!hb.vid) {
                   VA = !0;
                   var LS = Math.round(2147483647 * Math.random()), WA = GS, XA, MS = aD.appName, NS = aD.version, OS = aD.language ? aD.language : aD.browserLanguage, PS = aD.platform, QS = aD.userAgent;
                   try {
                       var YA = aD.javaEnabled()
                   } catch (Ge) {
                       YA = !1
                   }
                   var Le = [MS, NS, OS, PS, QS, YA ? 1 : 0].join("");
                   if (yk)
                       Le += yk.width + "x" + yk.height + yk.colorDepth;
                   else if (_.q.java && _.q.java.awt) {
                       var ZA = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                       Le += ZA.screen.width + "x" + ZA.screen.height
                   }
                   Le = Le + wh + (HS || "");
                   for (XA = Le.length; 0 < WA; )
                       Le += WA-- ^ XA++;
                   hb.vid = (LS ^ bD(Le) & 2147483647) + "." + Op
               }
               hb.from_cookie || (hb.from_cookie = !1)
           }
           if (!hb.cid) {
               b: {
                   var Kf = Pp
                     , $A = 999;
                   Kf && (Kf = 0 == Kf.indexOf(".") ? Kf.substr(1) : Kf,
                   $A = Kf.split(".").length);
                   for (var aB, bB = 999, Ak = wh.split(";"), xh = 0; xh < Ak.length; xh++) {
                       var Bk = dD.exec(Ak[xh]) || eD.exec(Ak[xh]) || fD.exec(Ak[xh]);
                       if (Bk) {
                           var Sp = Bk[1] || 0;
                           if (Sp == $A) {
                               var cB = Bk[2];
                               break b
                           }
                           Sp < bB && (bB = Sp,
                           aB = Bk[2])
                       }
                   }
                   cB = aB
               }
               var yh = cB;
               VA && yh && -1 != yh.search(/^\d+\.\d+$/) ? (hb.vid = yh,
               hb.from_cookie = !0) : yh != hb.vid && (hb.cid = yh)
           }
           hb.dh = zk;
           hb.hid || (hb.hid = Math.round(2147483647 * Math.random()));
           UA = hb
       }
       var zh = UA
         , dB = zh.from_cookie;
       QN(a, dB && !ve(RA) ? new u.Map : new u.Map([["ga_vid", {
           value: zh.vid
       }], ["ga_sid", {
           value: zh.sid
       }], ["ga_hid", {
           value: zh.hid
       }], ["ga_fc", {
           value: dB
       }], ["ga_cid", {
           value: zh.cid
       }], ["ga_wpids", {
           value: Td.google_analytics_uacct
       }]]));
       var eB = a.j.ga
         , fB = eB.F
         , RS = eB.L.bf
         , SS = u.Map
         , TS = ["js", {
           value: _.E(hy) ? hD(fB) : null
       }];
       if (_.E(hy))
           a: {
               var Ah = fB;
               Ah = void 0 === Ah ? window : Ah;
               var gB = hD(Ah);
               if (gB) {
                   var Ck = null;
                   try {
                       var Tp = Ah;
                       "afma-gpt-sdk-a" == gB ? Ck = Tp._gmptnl.pm("GAM=", RS.toString()) || "5" : (Ck = Tp.__gmptnl_n || "5",
                       Tp.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                   } catch (Ge) {
                       var Dk = "3";
                       break a
                   }
                   Dk = "string" === typeof Ck ? Ck : "3"
               } else
                   Dk = null
           }
       else
           Dk = null;
       QN(a, new SS([TS, ["ms", {
           value: Dk
       }]]));
       var Ek = void 0 === Ek ? navigator : Ek;
       var Up = void 0 === Up ? document : Up;
       var hB = new u.Map;
       "runAdAuction"in Ek && "joinAdInterestGroup"in Ek && (!_.E(PB) || yf("run-ad-auction", Up)) && hB.set("td", {
           value: 1
       });
       QN(a, hB);
       var iB = a.j.ga.F
         , jB = new u.Map
         , US = _.E(NK(iB) ? kC : jC)
         , VS = _.E(mC)
         , Vp = OK(iB, US, VS);
       (null == Vp ? 0 : Vp.length) && jB.set("tt_state", {
           value: pu(JSON.stringify(Vp), 3)
       });
       QN(a, jB);
       var Lf = a.j.Zd.ae;
       var Wp = void 0 === Wp ? document : Wp;
       if (_.E(Xy)) {
           var kB = new u.Map;
           yf("browsing-topics", Wp) && kB.set("topics", {
               value: Lf instanceof Uint8Array ? mc(Lf, 3) : Lf
           });
           var lB = kB
       } else
           lB = new u.Map([["topics", {
               value: Lf instanceof Uint8Array ? mc(Lf, 3) : Lf
           }]]);
       QN(a, lB);
       var mB = a.j
         , nB = mB.ga
         , WS = mB.ha.ba
         , Bh = we(nB.X, nB.F);
       if (_.E(VB))
           var oB = new u.Map;
       else {
           var XS = u.Map;
           var Mf = _.E(WB) ? zg(WS[0].getAdUnitPath()) : null;
           Mf = void 0 === Mf ? null : Mf;
           if (Bh) {
               var Xp = new iw
                 , YS = _.D($B)
                 , ZS = _.D(ZB)
                 , pB = []
                 , $S = RegExp("^_GESPSK-(.+)$");
               try {
                   for (var Yp = 0; Yp < Bh.length; Yp++) {
                       var qB = ($S.exec(Bh.key(Yp)) || [])[1];
                       qB && pB.push(qB)
                   }
               } catch (Ge) {}
               for (var rB = _.x(pB), Zp = rB.next(); !Zp.done; Zp = rB.next()) {
                   var Fk = Zp.value
                     , Me = Qe().get(Fk, Bh).lb;
                   if (Me) {
                       var sB = We(Me);
                       if (2 !== sB && 3 !== sB) {
                           var $p = !1;
                           if (Mf) {
                               var tB = /^pub-(\d+)$/.exec(Fk);
                               if (tB && !($p = _.t(Mf.split(","), "includes").call(Mf.split(","), tB[1])))
                                   continue
                           }
                           w(Me, 9, $p);
                           var aq = v(Me, 2)
                             , uB = $p ? ZS : YS;
                           if (0 <= uB && aq && aq.length > uB) {
                               var vB = {};
                               Ee(12, Fk, null, (vB.sl = String(aq.length),
                               vB));
                               Re(Me, 108, Bh);
                               Gc(Me, 2)
                           }
                           Qk(Xp, 2, Ye, Me);
                           Ee(19, Fk)
                       }
                   }
               }
               var wB = Nc(Xp, Ye, 2).length ? mc(bn(Xp, nw), 3) : null
           } else
               wB = null;
           oB = new XS([["a3p", {
               value: wB
           }]])
       }
       QN(a, oB);
       QN(a, dn(a.j));
       var xB = a.j.ha.O.W;
       if (hi(tq(xB, sq, 33), 1)) {
           var Gk = tq(tq(xB, sq, 33), uq, 1);
           var yB = new u.Map([["cmrv", {
               value: 1
           }], ["cmrq", {
               value: v(Gk, 1)
           }], ["cmrc", {
               value: rm(Gk, 2),
               options: {
                   na: ">"
               }
           }], ["cmrids", {
               value: rm(Gk, 3),
               options: {
                   na: "!"
               }
           }], ["cmrf", {
               value: v(Gk, 4)
           }]])
       } else
           yB = new u.Map;
       QN(a, yB);
       var zB = a.j, AB = zB.ga.X, BB, CB, aT = null != (CB = null == (BB = kJ(zB.ha.O.W)) ? void 0 : H(BB, 9)) ? CB : !1, bT = H(AB, 8);
       a.m = "https://" + (aT || bT || !ve(AB) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
       var Nf = a.D;
       if (_.E(yy))
           for (var cT = Math.random, Ch = Nf.length - 1; 0 < Ch; Ch--) {
               var DB = Math.floor(cT() * (Ch + 1))
                 , dT = Nf[Ch];
               Nf[Ch] = Nf[DB];
               Nf[DB] = dT
           }
       for (var EB = _.x(Nf), bq = EB.next(); !bq.done; bq = EB.next()) {
           var FB = void 0
             , Of = a
             , cq = bq.value
             , Ne = cq.value
             , Hk = cq.options
             , eT = void 0 === Hk.na ? "," : Hk.na
             , fT = void 0 === Hk.ya ? !1 : Hk.ya;
           if (FB = "object" !== typeof Ne ? null == Ne || !fT && 0 === Ne ? null : encodeURIComponent(Ne) : Array.isArray(Ne) && Ne.length ? encodeURIComponent(Ne.join(eT)) : null)
               "?" !== Of.m[Of.m.length - 1] && (Of.m += "&"),
               Of.m += cq.Nd + "=" + FB
       }
       return a.m
   }
     , SN = function(a, b, c, d) {
       d = void 0 === d ? {} : d;
       a.D.some(function(e) {
           return b === e.Nd
       });
       a.H.has(b) || null == c || a.D.push({
           Nd: b,
           value: c,
           options: d
       })
   }
     , QN = function(a, b) {
       b = _.x(_.t(b, "entries").call(b));
       for (var c = b.next(); !c.done; c = b.next()) {
           var d = _.x(c.value);
           c = d.next().value;
           d = d.next().value;
           SN(a, c, d.value, d.options)
       }
   };
   var VN = function(a, b, c, d) {
       var e = this;
       this.context = a;
       this.L = c;
       this.j = new u.Map;
       this.m = new u.Map;
       this.mb = _.F(Nh);
       window.performance && nx(window.performance.now) && (_.Za(window, "DOMContentLoaded", _.Lh(a, 334, function() {
           for (var f = _.x(e.j), g = f.next(); !g.done; g = f.next()) {
               var h = _.x(g.value);
               g = h.next().value;
               h = h.next().value;
               TN(e, g, h) && e.j.delete(g)
           }
       })),
       aL(b, gL, function(f) {
           f = f.detail;
           var g = f.R;
           return void UN(e, (0,
           B.J)(Xo(d, f.dd)), (0,
           B.J)(v(g, 20)))
       }),
       aL(b, hL, function(f) {
           f = f.detail;
           var g = f.R;
           f = (0,
           B.J)(Xo(d, f.dd));
           g = (0,
           B.J)(v(g, 20));
           var h = e.m.get(f);
           null != h ? EK(h, g) : UN(e, f, g)
       }))
   }
     , UN = function(a, b, c) {
       TN(a, b, c) ? a.j.delete(b) : (a.j.set(b, c),
       _.ap(b, function() {
           return a.j.delete(b)
       }))
   }
     , TN = function(a, b, c) {
       var d = Ai(b);
       if ("DIV" !== (null == d ? void 0 : d.nodeName))
           return !1;
       d = new CK({
           F: window,
           mb: a.mb,
           fb: (0,
           B.qa)(d),
           Da: function(e) {
               return void Ph(a.context, 336, e)
           },
           qf: _.E(dC)
       });
       if (!d.j)
           return !1;
       EK(d, c);
       a.m.set(b, d);
       nL(a.L, b, function() {
           return void a.m.delete(b)
       });
       return !0
   };
   var WN = function(a) {
       this.m = a;
       this.D = this.j = 0
   };
   WN.prototype.push = function() {
       for (var a = _.x(Jd.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
           b = b.value;
           try {
               "function" === typeof b && (b.call(u.globalThis),
               this.j++)
           } catch (c) {
               this.D++,
               b = void 0,
               null == (b = window.console) || b.error("Exception in queued GPT command", c),
               this.m.error(KL(String(c)))
           }
       }
       this.m.info(LL(String(this.j), String(this.D)));
       return this.j
   }
   ;
   var XN = function(a, b) {
       Z.call(this, a, 931);
       this.C = U(this);
       this.l = U(this);
       this.o = Y(this, b)
   };
   _.O(XN, Z);
   XN.prototype.j = function() {
       var a = this.o.value
         , b = new u.Map;
       this.C.j(new u.Map);
       if (a) {
           var c;
           a = _.x(null != (c = this.o.value) ? c : []);
           for (c = a.next(); !c.done; c = a.next()) {
               var d = c.value;
               c = Nc(d, Fv, 1);
               c = 1 === oe(c[0], 1, 0) ? Eu(c[0]) : Fu(c[0]);
               d = Cj(d, 2);
               var e = void 0;
               b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
           }
       }
       this.l.j(b)
   }
   ;
   var YN = function(a, b) {
       Z.call(this, a, 981);
       this.o = U(this);
       this.l = U(this);
       this.C = Y(this, b)
   };
   _.O(YN, Z);
   YN.prototype.j = function() {
       var a = new u.Map, b, c = _.x(null != (b = this.C.value) ? b : []);
       for (b = c.next(); !b.done; b = c.next()) {
           b = b.value;
           var d = Nc(b, Fv, 1);
           d = 1 === oe(d[0], 1, 0) ? Eu(d[0]) : Fu(d[0]);
           a.set(d, Cj(b, 2))
       }
       this.o.j(a);
       this.l.j(new sv)
   }
   ;
   var ZN = function(a, b, c, d) {
       Z.call(this, a, 1038);
       this.F = b;
       this.C = c;
       this.G = d;
       this.l = U(this);
       this.o = U(this)
   };
   _.O(ZN, Z);
   ZN.prototype.j = function() {
       this.F.googleCompression = {
           provideBrotliOutput: this.l.j.bind(this.l),
           provideGzipOutput: this.o.j.bind(this.o)
       };
       gk(this.F.document, Qd(this.C));
       gk(this.F.document, Qd(this.G))
   }
   ;
   var $N = function(a, b, c) {
       Z.call(this, a, 1039, _.D(jy));
       this.l = iE(this, b);
       this.o = iE(this, c)
   };
   _.O($N, Z);
   $N.prototype.j = function() {
       var a = this;
       Si("compression_check", function(b) {
           I(b, "br", a.l.value ? "1" : "0");
           I(b, "gzip", a.o.value ? "1" : "0")
       }, 1)
   }
   ;
   var aO = function(a, b, c, d, e) {
       Z.call(this, a, 980);
       this.B = new fE;
       this.G = Y(this, b);
       this.C = Y(this, c);
       this.l = Y(this, d);
       this.o = Y(this, e)
   };
   _.O(aO, Z);
   aO.prototype.j = function() {
       var a;
       (C = _.t(Object, "entries").call(Object, null != (a = this.G.value) ? a : {}),
       _.t(C, "find")).call(C, function(e) {
           var f = _.x(e);
           e = f.next().value;
           f = f.next().value;
           return "*" !== e && (null == f ? void 0 : f.nc)
       }) && (_.F(us).l = !0);
       ws(25);
       var b, c, d;
       a = _.x([].concat(_.Ud(null != (b = this.C.value) ? b : []), _.Ud(null != (c = this.l.value) ? c : []), _.Ud(null != (d = this.o.value) ? d : [])));
       for (b = a.next(); !b.done; b = a.next())
           vs(b.value);
       this.B.notify()
   }
   ;
   var bO = function(a, b) {
       Z.call(this, a, 892, _.D(Jy));
       this.o = U(this);
       this.G = U(this);
       this.l = U(this);
       this.C = U(this);
       this.K = iE(this, b)
   };
   _.O(bO, Z);
   bO.prototype.j = function() {
       var a = this.K.value;
       if (!a)
           throw Error("config timeout");
       $D(this.o, Pc(a, Nv, 3));
       $D(this.G, Pc(a, Pv, 2));
       this.l.j(rm(a, 4));
       $D(this.C, Nc(a, Iv, 6))
   }
   ;
   bO.prototype.I = function(a) {
       this.m(a)
   }
   ;
   bO.prototype.m = function(a) {
       aE(this.o, a);
       aE(this.G, a);
       this.l.j([]);
       this.C.j([])
   }
   ;
   var cO = [{
       name: "Interstitial",
       Mc: 1
   }, {
       name: "TopAnchor",
       Mc: 2
   }, {
       name: "BottomAnchor",
       Mc: 3
   }]
     , dO = function(a, b) {
       Z.call(this, a, 789);
       this.l = b;
       this.B = U(this)
   };
   _.O(dO, Z);
   dO.prototype.j = function() {
       var a = this;
       this.B.j(cO.filter(function(b) {
           return (new RegExp("gam" + b.name + "Demo","i")).test(a.l)
       }).map(function(b) {
           var c = b.name;
           b = b.Mc;
           var d, e;
           null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
           d = new Zv;
           e = new Rv;
           b = w(e, 2, b);
           c = w(b, 1, "/22639388115/example/" + c.toLowerCase());
           return Pg(d, 5, $v, c)
       }))
   }
   ;
   var eO = function(a, b) {
       this.D = b;
       this.j = this.m = a
   }
     , fO = function(a) {
       a.j = Math.min(a.D, 2 * a.j);
       a.m = Math.min(a.D, a.j)
   };
   var gO = function(a, b) {
       Z.call(this, a, 969);
       this.F = b;
       this.o = U(this);
       this.l = U(this)
   };
   _.O(gO, Z);
   gO.prototype.j = function() {
       var a = this;
       if (_.E(ty)) {
           var b = "", c, d = 1E3 * _.D(sy), e = _.D(wy), f = 1E3 * _.D(vy), g = function() {
               return void a.F.clearInterval(k)
           };
           _.ap(this, g);
           var h = _.Lh(this.context, this.id, function() {
               var l, m, n;
               return _.ab(function(p) {
                   switch (p.j) {
                   case 1:
                       l = ng(a.F);
                       a.l.j(!!l);
                       if (!l) {
                           g();
                           p.j = 2;
                           break
                       }
                       p.D = 3;
                       return bb(p, l, 5);
                   case 5:
                       b = null != (m = p.m) ? m : "0";
                       c && (c = void 0,
                       k = a.F.setInterval(h, d));
                       b.length > e && (Ph(a.context, a.id, new zl("ML:" + b.length)),
                       b = "0",
                       g());
                       db(p, 2);
                       break;
                   case 3:
                       n = fb(p),
                       Ph(a.context, a.id, n),
                       b = "0",
                       f ? (c ? fO(c) : (g(),
                       c = new eO(f,d)),
                       a.F.setTimeout(h, c.m)) : _.E(uy) || g();
                   case 2:
                       a.o.j(function() {
                           return b
                       }),
                       p.j = 0
                   }
               })
           });
           var k = this.F.setInterval(h, d);
           h()
       } else
           this.l.j(!1),
           this.o.j(function() {
               return ""
           })
   }
   ;
   gO.prototype.m = function() {
       this.l.j(!1);
       this.o.j(function() {
           return ""
       })
   }
   ;
   var hO = function(a, b, c, d) {
       Z.call(this, a, 1016);
       this.B = U(this);
       this.o = Y(this, c);
       this.l = Y(this, d);
       this.C = Rq(b, gL)
   };
   _.O(hO, Z);
   hO.prototype.j = function() {
       var a = this;
       this.o.value ? this.B.j(this.o.value) : this.l.value ? this.C.then(function(b) {
           var c = zg((0,
           B.J)(b.detail.R.getAdUnitPath()));
           Nc((0,
           B.J)(a.l.value), Qv, 1).some(function(d) {
               return Ro(d, 1) === c
           }) ? a.B.j(c) : (Si("pp_iris_failure", function(d) {
               I(d, "fnc", c);
               Yi(d, a.context)
           }, _.D(Ky)),
           Pr(a.B))
       }) : Pr(this.B)
   }
   ;
   hO.prototype.I = function(a) {
       this.m(a)
   }
   ;
   hO.prototype.m = function() {
       Pr(this.B)
   }
   ;
   var iO = function(a, b) {
       Z.call(this, a, 1015);
       this.l = U(this);
       this.o = Y(this, b)
   };
   _.O(iO, Z);
   iO.prototype.j = function() {
       if (this.o.value) {
           var a = Nc(this.o.value, Qv, 1);
           (null == a ? 0 : a.length) ? (a = Nc(this.o.value, Qv, 1)[0],
           (C = [2, 3],
           _.t(C, "includes")).call(C, oe(a, 3, 0)) ? this.l.j(Ro(a, 1)) : Pr(this.l)) : Pr(this.l)
       } else
           Pr(this.l)
   }
   ;
   iO.prototype.I = function(a) {
       this.m(a)
   }
   ;
   iO.prototype.m = function() {
       Pr(this.l)
   }
   ;
   var jO = function(a, b, c) {
       Z.call(this, a, 1017);
       this.F = c;
       this.B = hE(this);
       this.l = Y(this, b)
   };
   _.O(jO, Z);
   jO.prototype.j = function() {
       var a = this;
       if (this.l.value) {
           var b = HC(this.F, this.l.value, function(c) {
               if (!c) {
                   c = Ow(b.j);
                   for (var d = _.x(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next())
                       c.ge(e.value)
               }
               a.B.notify()
           });
           b.start()
       } else
           this.B.notify()
   }
   ;
   jO.prototype.I = function(a) {
       this.m(a)
   }
   ;
   jO.prototype.m = function() {
       this.B.notify()
   }
   ;
   var kO = function(a, b, c, d) {
       Z.call(this, a, 906, _.D(Iy));
       this.l = hE(this);
       if (b === b.top) {
           var e = new cf;
           _.Co(this, e);
           var f = new iO(a,c);
           M(e, f);
           a = new hO(a,d,f.l,c);
           M(e, a);
           b = new jO(this.context,a.B,b);
           M(e, b);
           WD(this.A, b.B, !0);
           mf(e)
       } else
           this.l.notify()
   };
   _.O(kO, Z);
   kO.prototype.j = function() {
       this.l.notify()
   }
   ;
   kO.prototype.I = function(a) {
       this.m(a)
   }
   ;
   kO.prototype.m = function() {
       this.l.notify()
   }
   ;
   var lO = function(a, b, c) {
       Z.call(this, a, 964);
       var d = this;
       this.googletag = b;
       this.F = c;
       this.l = new fE;
       this.F === this.F.top && (jE(this, this.l),
       (a = oD("loadEventStart", this.F)) ? (a = _.Fe(this.F) - a,
       1E3 <= a ? this.l.notify() : setTimeout(_.Lh(this.context, this.id, function() {
           return void d.l.notify()
       }), 1E3 - a)) : (a = function() {
           return void setTimeout(_.Lh(d.context, d.id, function() {
               return void d.l.notify()
           }), 1E3)
       }
       ,
       "complete" === this.F.document.readyState ? a() : wL(this, this.id, this.F, "load", a)))
   };
   _.O(lO, Z);
   lO.prototype.j = function() {
       var a = this;
       if (this.F === this.F.top) {
           var b = fi(!1, this.F)
             , c = b.width
             , d = b.height;
           b = "CSS1Compat" === this.F.document.compatMode ? this.F.document.documentElement : this.F.document.body;
           var e = b.scrollHeight
             , f = b.scrollWidth
             , g = 0
             , h = 0
             , k = 0;
           b = _.x(pE(this.F));
           for (var l = b.next(); !l.done; l = b.next()) {
               var m = l.value.getBoundingClientRect();
               l = m.width;
               m = m.height;
               g += m;
               h += m * l;
               k++
           }
           _.E(Ey) ? uo(this.context, c, d, f, e, k, g, h, this.googletag.pubads().getSlots().length) : Si("gpt_dens", function(n) {
               Yi(n, a.context);
               I(n, "vw", c);
               I(n, "vh", d);
               I(n, "ph", e);
               I(n, "pw", f);
               I(n, "act", k);
               I(n, "aht", g);
               I(n, "ahd", Math.round(g / e * 100));
               I(n, "aa", h);
               I(n, "aad", Math.round(h / (e * f) * 100))
           }, _.D(Vy))
       }
   }
   ;
   var mO = function(a, b) {
       Z.call(this, a, 1031);
       this.F = b
   };
   _.O(mO, Z);
   mO.prototype.j = function() {
       this.F === this.F.top && Fj(this.F)
   }
   ;
   var nO = function(a) {
       Z.call(this, a, 891);
       this.l = U(this);
       var b = new ur;
       this.o = V(this, b);
       (a = _.Cg(260)) ? a(function(c, d) {
           if (d)
               aE(b, d);
           else
               try {
                   if ("string" === typeof c) {
                       var e = JSON.parse(c || "[]");
                       Array.isArray(e) && b.j(e)
                   }
               } catch (f) {} finally {
                   b.A || aE(b, Error("malformed response"))
               }
       }) : aE(b, Error("missing input"))
   };
   _.O(nO, Z);
   nO.prototype.j = function() {
       this.l.j(new bw(this.o.value))
   }
   ;
   var oO = function(a, b) {
       Z.call(this, a, 966);
       this.F = b;
       this.l = U(this)
   };
   _.O(oO, Z);
   oO.prototype.j = function() {
       var a = this
         , b = og(this.F);
       if (b)
           this.l.j(b);
       else if ((b = Object.getOwnPropertyDescriptor(this.F, "_pbjsGlobals")) && !b.configurable)
           Si("pdpg_error", function(d) {
               Yi(d, a.context)
           }, _.D(ey));
       else {
           var c = null;
           Object.defineProperty(this.F, "_pbjsGlobals", {
               set: function(d) {
                   c = d;
                   (d = og(a.F)) && a.l.j(d)
               },
               get: function() {
                   return c
               }
           })
       }
   }
   ;
   oO.prototype.m = function() {}
   ;
   var pO = function(a, b) {
       Z.call(this, a, 979);
       this.F = b;
       this.B = U(this)
   };
   _.O(pO, Z);
   pO.prototype.j = function() {
       var a = this
         , b = "function" !== typeof this.F.document.browsingTopics
         , c = _.E(HB) && !yf("browsing-topics", this.F.document);
       b = b || c;
       !_.E(IB) || b ? Pr(this.B) : uj(this.F).then(function(d) {
           a.B.j(d)
       })
   }
   ;
   pO.prototype.m = function() {
       Pr(this.B)
   }
   ;
   var zo = function(a, b, c, d) {
       Z.call(this, a, 959);
       this.Ya = b;
       this.B = U(this);
       this.l = V(this, b);
       jE(this, c);
       jE(this, d)
   };
   _.O(zo, Z);
   zo.prototype.j = function() {
       this.B.j(this.l.value)
   }
   ;
   var yo = function(a, b, c, d, e, f) {
       Z.call(this, a, 874);
       this.o = b;
       this.F = c;
       this.G = d;
       this.l = hE(this);
       jE(this, e);
       this.C = V(this, f)
   };
   _.O(yo, Z);
   yo.prototype.j = function() {
       var a = this
         , b = new xC(this.F,-1,_.E(hC));
       _.Co(this, b);
       zC(b) ? (this.o.info(tM()),
       CC(b, _.Lh(this.context, 661, function(c) {
           var d = a.C.value, e, f, g;
           if (g = !(null == (e = a.G) ? 0 : H(e, 9))) {
               var h = void 0 === h ? !1 : h;
               g = BC(c) ? !1 === c.gdprApplies || "tcunavailable" === c.tcString || void 0 === c.gdprApplies && !h || "string" !== typeof c.tcString || !c.tcString.length ? !0 : DC(c, "1") : !1
           }
           e = w(d, 5, g);
           g = !FC(c, ["3", "4"]);
           e = w(e, 9, g);
           e = w(e, 2, c.tcString);
           g = null != (f = c.addtlConsent) ? f : "";
           f = w(e, 4, g);
           w(f, 7, c.internalErrorState);
           null != c.gdprApplies && w(d, 3, c.gdprApplies);
           _.E(Wy) && !FC(c, ["2", "7", "9", "10"]) && w(d, 8, !0);
           "tcunavailable" === c.tcString ? a.o.info(uM("failed")) : a.o.info(uM("succeeded"));
           a.l.notify()
       }))) : this.l.notify()
   }
   ;
   var xo = function(a, b, c, d, e) {
       Z.call(this, a, 875);
       this.C = b;
       this.F = c;
       this.l = hE(this);
       jE(this, d);
       this.o = V(this, (0,
       B.J)(e))
   };
   _.O(xo, Z);
   xo.prototype.j = function() {
       var a = this
         , b = new PI(this.F);
       _.Co(this, b);
       if (RI(b)) {
           var c = _.Lh(this.context, 660, function(d) {
               d && "string" === typeof d.uspString && w((0,
               B.J)(a.o).value, 1, d.uspString);
               a.l.notify()
           });
           this.C.info(sM());
           TI(b, c)
       } else
           this.l.notify()
   }
   ;
   var vo = function(a, b) {
       Z.call(this, a, 958);
       this.l = b;
       this.Ya = U(this)
   };
   _.O(vo, Z);
   vo.prototype.j = function() {
       var a = new xE, b, c = null == (b = this.l) ? void 0 : H(b, 9);
       w(a, 5, !c);
       this.Ya.j(a)
   }
   ;
   var wo = function(a, b, c, d) {
       d = void 0 === d ? .001 : d;
       Z.call(this, a, 960);
       this.F = b;
       this.l = d;
       this.o = V(this, c)
   };
   _.O(wo, Z);
   wo.prototype.j = function() {
       var a = this;
       this.l && _.Sh(this.context, 894, function() {
           return void Si("cmpMet", function(b) {
               Yi(b, a.context);
               var c = new xC(a.F);
               _.Co(a, c);
               var d = new PI(a.F);
               _.Co(a, d);
               I(b, "fc", Number(a.o.value));
               I(b, "tcfv1", Number(!!a.F.Gg));
               I(b, "tcfv2", Number(zC(c)));
               I(b, "usp", Number(RI(d)));
               I(b, "ptt", 17)
           }, a.l)
       })
   }
   ;
   var qO = function(a, b) {
       Z.call(this, a, 1040);
       this.l = U(this);
       this.o = U(this);
       this.C = Y(this, b)
   };
   _.O(qO, Z);
   qO.prototype.j = function() {
       var a = this.C.value;
       a ? ($D(this.o, a instanceof Iv ? Cj(a, 1) : null),
       a = a.A(),
       this.l.j(a.map(function(b) {
           var c = b.I();
           return {
               Ab: b.A(),
               url: c && (_.t(c, "startsWith").call(c, location.protocol) || _.t(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Kd(c) : void 0
           }
       }))) : (Pr(this.o),
       this.l.j([]))
   }
   ;
   var wr = function(a, b, c, d, e) {
       Z.call(this, a, 813);
       this.Pa = b;
       this.C = c;
       this.l = U(this);
       this.G = Y(this, d);
       this.o = Y(this, e)
   };
   _.O(wr, Z);
   wr.prototype.j = function() {
       var a = this
         , b = this.G.value;
       if (!b || _.E(UB))
           this.l.j(!1);
       else if (rO.has(this.Pa))
           this.l.j(!1);
       else {
           rO.add(this.Pa);
           b = _.x(b);
           for (var c = b.next(); !c.done; c = b.next()) {
               var d = c.value;
               c = d.Ab;
               (d = d.url) && (_.E(aC) ? wf(c, d, this.o.value, function(e, f) {
                   Ph(a.context, e, f);
                   var g, h;
                   null == (g = a.C) || null == (h = g.error) || h.call(g, f)
               }) : Ze(c, d, this.o.value))
           }
           this.l.j(!0)
       }
   }
   ;
   var rO = new u.Set;
   var sO = function(a, b, c) {
       Z.call(this, a, 1045);
       this.l = c;
       this.o = Y(this, b)
   };
   _.O(sO, Z);
   sO.prototype.j = function() {
       for (var a, b = _.x(null != (a = this.o.value) ? a : []), c = b.next(); !c.done; c = b.next()) {
           a = this.context;
           var d = c.value
             , e = this.l;
           if (nl(d, 1)) {
               c = new cf;
               var f = new ur;
               f.j(d);
               f = new qO(a,f);
               M(c, f);
               a = new wr(a,Cj(d, 1).toString(),console,f.l,e);
               M(c, a);
               mf(c)
           }
       }
   }
   ;
   var Eo = function(a, b, c) {
       Z.call(this, a, 879);
       this.o = b;
       this.l = U(this);
       this.C = null;
       _.Cg(260) && (this.C = V(this, c))
   };
   _.O(Eo, Z);
   Eo.prototype.j = function() {
       var a = this, b, c, d;
       return _.ab(function(e) {
           if (1 == e.j) {
               if (null != (c = null == (b = a.C) ? void 0 : b.value) ? !c : !YI(a.o)) {
                   Pr(a.l);
                   e.j = 0;
                   return
               }
               return bb(e, $I(a.o), 3)
           }
           d = e.m;
           a.l.j(d);
           e.j = 0
       })
   }
   ;
   var Do = function(a, b, c) {
       Z.call(this, a, 896);
       this.l = b;
       this.o = c;
       this.ib = U(this)
   };
   _.O(Do, Z);
   Do.prototype.j = function() {
       var a = this;
       _.Cg(260) ? (0,
       B.J)(this.o).then(_.Lh(this.context, this.id, function() {
           return void a.ib.j(YI(a.l))
       })) : this.ib.j(YI(this.l))
   }
   ;
   var tO = function(a, b) {
       Z.call(this, a, 1018);
       this.l = Y(this, b)
   };
   _.O(tO, Z);
   tO.prototype.j = function() {
       var a, b, c, d = _.x(null != (c = null == (a = this.l.value) ? void 0 : null == (b = Pc(a, WI, 5)) ? void 0 : rm(b, 1)) ? c : []);
       for (a = d.next(); !a.done; a = d.next())
           vs(a.value)
   }
   ;
   var vr = function(a, b, c) {
       Z.call(this, a, 706);
       this.F = b;
       this.B = U(this);
       this.l = V(this, c)
   };
   _.O(vr, Z);
   vr.prototype.j = function() {
       $D(this.B, we(this.l.value, this.F))
   }
   ;
   var Go = new u.Map([[1, 5], [2, 2], [3, 3]]);
   var ds = function(a, b, c, d, e) {
       e = void 0 === e ? document : e;
       Z.call(this, a, 912);
       this.googletag = c;
       this.W = d;
       this.V = e;
       this.l = U(this);
       this.o = V(this, b)
   };
   _.O(ds, Z);
   ds.prototype.I = function(a) {
       this.m(a)
   }
   ;
   ds.prototype.m = function() {
       Pr(this.l)
   }
   ;
   ds.prototype.j = function() {
       if (_.E(Ny)) {
           for (var a = [], b = _.x(this.o.value), c = b.next(); !c.done; c = b.next())
               switch (c = c.value,
               Jc(c, $v)) {
               case 5:
                   var d = void 0;
                   Jo(this.V, this.googletag, (0,
                   B.J)(Mo(c, Rv, 5, $v)), Pc(c, hn, 4), null != (d = this.W) ? d : Gh().j);
                   break;
               case 6:
                   d = (0,
                   B.J)(Mo(c, Yv, 6, $v));
                   var e;
                   if (e = hi(d, 2))
                       d = (0,
                       B.J)(Pc(d, Wv, 2)),
                       e = Oo(d) && Po(d);
                   e && (d = void 0,
                   (c = So(this.V, this.googletag, (0,
                   B.J)(Mo(c, Yv, 6, $v)), Pc(c, hn, 4), null != (d = this.W) ? d : Gh().j)) && a.push.apply(a, _.Ud(c)))
               }
           0 < a.length ? this.l.j(a) : Pr(this.l)
       } else
           Pr(this.l)
   }
   ;
   var uO = function(a, b, c, d) {
       Z.call(this, a, 890);
       this.C = b;
       this.o = c;
       this.l = Y(this, d)
   };
   _.O(uO, Z);
   uO.prototype.j = function() {
       var a = this;
       tf(this.C, this.l.value, function(b, c) {
           Ph(a.context, b, c);
           var d, e;
           null == (d = a.o) || null == (e = d.error) || e.call(d, c)
       })
   }
   ;
   var vO = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/test_br.js"])
     , wO = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/test_gzip.js"])
     , xO = function(a, b, c) {
       _.vC.call(this);
       this.context = a;
       this.ua = b;
       this.L = c;
       this.ca = new nO(this.context);
       this.m = new bO(this.context,this.ca.l);
       this.ia = this.m.l;
       this.j = new xN(this.context,this.m.o,window);
       this.l = new XN(this.context,this.j.G);
       this.I = new YN(this.context,this.j.C);
       var d;
       this.Z = new dO(this.context,null != (d = window.location.hash) ? d : "");
       this.M = new ds(this.context,this.Z.B,Dg(),null);
       this.ea = new oO(this.context,window);
       this.da = new pO(this.context,window);
       this.U = new aO(this.context,this.j.o,this.ia,this.j.l,this.M.l);
       this.C = this.l.l;
       this.T = null;
       this.ja = this.j.o;
       this.oa = this.j.l;
       this.G = this.l.C;
       this.za = this.M.l;
       this.K = this.ea.l;
       this.fa = this.I.o;
       this.N = this.I.l;
       this.ma = this.da.B;
       this.P = this.U.B;
       this.o = new MN(this.context,this.K,this.P,this.C,this.G,this.fa,this.N);
       this.Ka = this.o.l;
       this.Za = this.o.o;
       _.Co(this, this.ea);
       _.Co(this, this.ca);
       _.Co(this, this.m);
       _.Co(this, this.l);
       _.Co(this, this.I);
       _.Co(this, this.j);
       _.Co(this, this.Z);
       _.Co(this, this.M);
       _.Co(this, this.da);
       _.Co(this, this.o);
       _.Co(this, this.U);
       _.Cg(260) || (this.ia.j([]),
       Pr(this.ja),
       Pr(this.oa),
       Pr(this.C),
       Pr(this.G),
       Pr(this.fa),
       this.P.notify(),
       Pr(this.za),
       Pr(this.N));
       _.E(IB) || Pr(this.ma);
       0 < _.D(sy) && (this.A = new gO(this.context,window),
       _.Co(this, this.A),
       this.xa = this.A.o,
       this.ab = this.A.l)
   };
   _.O(xO, _.vC);
   var yO = function(a, b) {
       var c = new cf;
       _.Co(a, c);
       M(c, a.ea);
       M(c, a.ca);
       M(c, a.m);
       M(c, a.j);
       M(c, a.l);
       M(c, a.U);
       M(c, a.I);
       b = new kO(a.context,window,a.m.G,b);
       a.T = b.l.promise;
       M(c, b);
       M(c, a.Z);
       M(c, a.M);
       _.D(Vy) && M(c, new lO(a.context,Dg(),window));
       _.E(fC) && M(c, new mO(a.context,window));
       a.A && M(c, a.A);
       _.E(IB) && M(c, a.da);
       M(c, a.o);
       var d = Fo(a.context, a.T);
       b = d.ib;
       var e = d.zd;
       _.Co(c, d.Aa);
       d = new tO(a.context,e);
       M(c, d);
       _.E(UB) || !_.E(Hy) || dm() || (b = Ao(a.context, a.ua, null, window, b, e).Ya,
       b = new vr(a.context,window,b),
       M(c, b),
       e = new uO(a.context,Dg(),console,b.B),
       M(c, e),
       b = new sO(a.context,a.m.C,b.B),
       M(c, b));
       _.D(jy) && (b = new ZN(a.context,window,y(vO),y(wO)),
       M(c, b),
       a = new $N(a.context,b.l,b.o),
       M(c, a));
       mf(c)
   };
   var zO = ["Debug", "Info", "Warning", "Error", "Fatal"]
     , AO = function(a, b, c) {
       this.level = a;
       this.message = b;
       this.j = c;
       this.timestamp = new Date
   };
   ba = AO.prototype;
   ba.getSlot = function() {
       return this.j
   }
   ;
   ba.getLevel = function() {
       return this.level
   }
   ;
   ba.getTimestamp = function() {
       return this.timestamp
   }
   ;
   ba.getMessage = function() {
       return this.message
   }
   ;
   ba.toString = function() {
       return this.timestamp.toTimeString() + ": " + zO[this.level] + ": " + this.message
   }
   ;
   var BO = {
       20: function(a) {
           return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
       },
       23: function(a) {
           return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
       },
       34: function(a) {
           return "Size mapping is null because invalid mappings were added: " + a[0] + "."
       },
       60: function(a) {
           return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
       },
       66: function(a) {
           return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
       },
       68: function() {
           return "Slots cannot be cleared until service is enabled."
       },
       80: function(a) {
           return "Slot object at position " + a[0] + " is of incorrect type."
       },
       84: function(a) {
           return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
       },
       93: function(a) {
           return "Failed to register listener. Unknown event type: " + a[0] + "."
       },
       96: function(a) {
           return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
       },
       122: function(a) {
           return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
       },
       121: function(a) {
           return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
       },
       105: function(a) {
           return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
       },
       106: function(a) {
           return "Publisher betas " + a[0] + " were declared after enableServices() was called."
       },
       107: function(a) {
           return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
       },
       108: function(a) {
           return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
       },
       123: function(a) {
           return "Refresh was throttled for slot: " + a[0] + "."
       },
       113: function(a) {
           return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
       },
       116: function(a) {
           return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
       },
       114: function() {
           return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
       },
       115: function() {
           return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
       },
       132: function(a) {
           return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
       },
       133: function() {
           return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
       },
       134: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Format already created on the page."
       },
       135: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
       },
       136: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
       },
       137: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
       },
       138: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
       },
       139: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
       },
       140: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
       },
       142: function(a) {
           return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
       },
       145: function(a) {
           return Yo(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
       },
       143: function() {
           return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
       },
       147: function() {
           return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
       }
   }
     , CO = {
       26: function(a) {
           return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
       },
       28: function(a) {
           return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
       },
       92: function(a) {
           return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
       },
       30: function(a) {
           return "Exception in googletag.cmd function: " + a[0] + "."
       },
       125: function(a) {
           return "google-product-ad element is invalid: " + a[0] + "."
       },
       126: function() {
           return "Attempted to collect prebid data but window.pbjs is undefined."
       },
       127: function(a) {
           return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
       },
       144: function() {
           return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
       }
   };
   var DO = function(a) {
       this.context = a;
       this.j = _.t(Array, "from").call(Array, {
           length: 1E3
       });
       this.D = this.H = this.m = 0;
       this.A = window
   }
     , QM = function(a) {
       return a.j.filter(function(b) {
           return !!b
       })
   }
     , RM = function(a, b) {
       return a.j.filter(function(c) {
           return c && c.getSlot() === b
       })
   }
     , SM = function(a, b) {
       return a.j.filter(function(c) {
           return c && c.getLevel() >= b
       })
   };
   DO.prototype.log = function(a, b, c, d) {
       var e = this;
       d = void 0 === d ? !1 : d;
       var f, g;
       c = new AO(a,b,null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
       this.j[this.m] = c;
       this.m = (this.m + 1) % 1E3;
       g = _.D(oy) && 100 > this.H;
       f = 2 === a || 3 === a;
       var h = b.getMessageArgs()
         , k = b.getMessageId()
         , l = BO[k] || CO[k];
       g && f && (b = _.D(oy),
       Si("gpt_eventlog_messages", function(m) {
           ++e.H;
           Yi(m, e.context);
           I(m, "level", a);
           I(m, "messageId", k);
           I(m, "args", h.join("|"));
           l || I(m, "noMsg", !0);
           var n = Error(), p;
           var r = null != (p = n.stack) ? p : "";
           n = n.message;
           try {
               -1 == r.indexOf(n) && (r = n + "\n" + r);
               for (var A; r != A; )
                   A = r,
                   r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
               var z = r.replace(RegExp("\n *", "g"), "\n")
           } catch (J) {
               z = n
           }
           I(m, "stack", z)
       }, b));
       if (l) {
           b = "[GPT] " + l(h);
           if (d)
               throw new zl(b);
           d = this.D < _.D(py) && f && _.q.console;
           if (this.A === top && d || _.t(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse"))
               (function(m) {
                   var n, p, r, A;
                   return void (2 === a ? null == (p = (n = _.q.console).warn) ? void 0 : p.call(n, m) : null == (A = (r = _.q.console).error) ? void 0 : A.call(r, m))
               }
               )(b),
               this.D++
       }
       return c
   }
   ;
   DO.prototype.info = function(a, b) {
       return this.log(1, a, void 0 === b ? null : b)
   }
   ;
   var L = function(a, b, c) {
       a.log(2, b, c, !1)
   };
   DO.prototype.error = function(a, b, c) {
       return this.log(3, a, b, void 0 === c ? !1 : c)
   }
   ;
   var fp = "3rd party ad content";
   var EO = function(a, b) {
       this.serviceName = b;
       this.slot = (0,
       B.J)(a.j)
   }
     , FO = function(a, b) {
       EO.call(this, a, b);
       this.isEmpty = !1;
       this.slotContentChanged = !0;
       this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
       this.isBackfill = !1;
       this.companyIds = this.yieldGroupIds = null
   };
   _.O(FO, EO);
   var GO = function() {
       EO.apply(this, arguments)
   };
   _.O(GO, EO);
   var HO = function(a, b, c) {
       EO.call(this, a, b);
       this.inViewPercentage = c
   };
   _.O(HO, EO);
   var IO = function() {
       EO.apply(this, arguments)
   };
   _.O(IO, EO);
   var JO = function() {
       EO.apply(this, arguments)
   };
   _.O(JO, EO);
   var KO = function() {
       EO.apply(this, arguments)
   };
   _.O(KO, EO);
   var LO = function() {
       EO.apply(this, arguments)
   };
   _.O(LO, EO);
   var MO = function(a, b, c, d) {
       EO.call(this, a, b);
       this.makeRewardedVisible = c;
       this.payload = d
   };
   _.O(MO, EO);
   var NO = function(a, b, c) {
       EO.call(this, a, b);
       this.payload = c
   };
   _.O(NO, EO);
   var OO = function() {
       EO.apply(this, arguments)
   };
   _.O(OO, EO);
   var oq = new u.Set
     , PO = function(a, b, c) {
       var d = 0
         , e = function() {
           d = 0
       };
       return function(f) {
           d || (d = _.q.setTimeout(e, b),
           a.apply(c, arguments))
       }
   }(function() {
       throw new zl("Reached Limit for addEventListener");
   }, 3E5)
     , QO = function(a, b) {
       ZK.call(this, a);
       this.j = b;
       this.m = [];
       this.A = !1;
       this.C = 0;
       this.o = new u.Map;
       oq.add(this);
       this.j.info(NL(this.getName()))
   };
   _.O(QO, ZK);
   ba = QO.prototype;
   ba.enable = function() {
       this.A || (this.A = !0,
       ws(6),
       this.Qc())
   }
   ;
   ba.slotAdded = function(a, b) {
       this.m.push(a);
       var c = new JO(a,this.getName());
       this.dispatchEvent("slotAdded", 818, c);
       this.j.info(PL(this.getName(), a.getAdUnitPath()), a);
       a = this.getName();
       Ic(b, 4, a)
   }
   ;
   ba.destroySlots = function(a) {
       var b = this;
       return a.filter(function(c) {
           return da(b.m, c)
       })
   }
   ;
   ba.addEventListener = function(a, b) {
       var c = this;
       if (this.C >= _.D(ny) && 0 < _.D(ny))
           PO();
       else {
           var d;
           null != (d = this.o.get(a)) && d.has(b) || (this.o.has(a) || this.o.set(a, new u.Map),
           d = function(e) {
               e = e.detail;
               try {
                   b(e)
               } catch (h) {
                   c.j.error(fM(String(h), a));
                   var f, g;
                   null == (f = window.console) || null == (g = f.error) || g.call(f, h)
               }
           }
           ,
           (0,
           B.J)(this.o.get(a)).set(b, d),
           aL(this, a, d),
           this.C++)
       }
   }
   ;
   ba.removeEventListener = function(a, b) {
       var c, d = null == (c = this.o.get(a)) ? void 0 : c.get(b);
       if (!d || !$K(this, a, d))
           return !1;
       this.C--;
       return (0,
       B.J)(this.o.get(a)).delete(b)
   }
   ;
   var dq = function(a) {
       for (var b = _.x(oq), c = b.next(); !c.done; c = b.next())
           c.value.destroySlots(a)
   };
   var lq = function(a, b, c) {
       QO.call(this, a, b);
       this.M = c;
       this.ads = new u.Map;
       this.l = {};
       this.G = this.kb = !1;
       _.F(us).D = !0
   };
   _.O(lq, QO);
   ba = lq.prototype;
   ba.set = function(a, b) {
       "string" === typeof a && a.length ? (this.l[a] = b,
       this.j.info(OL(a, String(b), this.getName()))) : L(this.j, Qj("CompanionAdsService.set", [a, b]));
       return this
   }
   ;
   ba.get = function(a) {
       var b;
       return null != (b = this.l[a]) ? b : null
   }
   ;
   ba.display = function(a, b, c, d) {
       this.enable();
       b = gm(this.context, this.j, a, b, c);
       a = b.slotId;
       b = b.Ja;
       this.slotAdded((0,
       B.J)(a), (0,
       B.J)(b));
       null == b || b.setClickUrl(d);
       Wo(this.j, null == a ? void 0 : a.getDomId())
   }
   ;
   ba.slotAdded = function(a, b) {
       var c = this;
       aL(a, cL, function(d) {
           H(d.detail, 11) && (RO(c, a).cf = !0)
       });
       QO.prototype.slotAdded.call(this, a, b)
   }
   ;
   ba.Qc = function() {}
   ;
   ba.setRefreshUnfilledSlots = function(a) {
       "boolean" === typeof a && (this.kb = a)
   }
   ;
   var MM = function(a, b) {
       (b = void 0 === b ? "" : b) && !a.G && Si("ima_sdk_v", function(c) {
           a.G = !0;
           I(c, "v", b)
       });
       return String(v(Gh().j, 26))
   }
     , KM = function(a, b) {
       var c = Gh().j
         , d = Gh().m;
       if (a.M.A) {
           var e = {
               Ia: 3
           };
           a.K && (e.Va = a.K);
           a.N && (e.Wa = a.N);
           b = null != b ? b : a.m;
           c = wi(c, d);
           d = e.Va;
           var f = e.Wa;
           d && "number" !== typeof d || f && "number" !== typeof f || a.M.refresh(c, b, e)
       } else
           (null == b ? 0 : b[0]) && a.j.error(VL(b[0].getDomId()))
   }
     , NM = function(a, b) {
       var c;
       return a.M.A && !(null == (c = a.ads.get(b)) || !c.cf)
   }
     , LM = function(a, b) {
       return a.m.filter(function(c) {
           return _.t(b, "includes").call(b, c.toString())
       })
   };
   lq.prototype.getName = function() {
       return "companion_ads"
   }
   ;
   lq.prototype.T = function() {}
   ;
   var OM = function(a, b, c, d) {
       b = new FO(b,a.getName());
       null != c && null != d && (b.size = [c, d]);
       a.dispatchEvent("slotRenderEnded", 67, b)
   }
     , RO = function(a, b) {
       var c = a.ads.get(b);
       c || (c = {},
       a.ads.set(b, c),
       _.ap(b, function() {
           return a.ads.delete(b)
       }));
       return c
   };
   var jq = function(a, b) {
       QO.call(this, a, b)
   };
   _.O(jq, QO);
   jq.prototype.getName = function() {
       return "content"
   }
   ;
   jq.prototype.display = function(a, b, c, d) {
       c = void 0 === c ? "" : c;
       d = void 0 === d ? "" : d;
       this.enable();
       b = gm(this.context, this.j, a, b, c);
       a = b.slotId;
       b = b.Ja;
       this.slotAdded((0,
       B.J)(a), (0,
       B.J)(b));
       b.setClickUrl(d);
       Wo(this.j, a.getDomId())
   }
   ;
   jq.prototype.Qc = function() {}
   ;
   jq.prototype.T = function() {}
   ;
   var SO = Q(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), TO = Q(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]), UO = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), VO = Q(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]), WO = new u.Map([[2, {
       Ze: "page_level_ads"
   }]]), XO = function(a) {
       var b = void 0 === b ? WO : b;
       this.context = a;
       this.j = b;
       this.m = new u.Map;
       this.loaded = new u.Set
   }, ZO;
   XO.prototype.load = function(a) {
       var b = _.YO(this, a), c, d = (null != (c = this.j.get(a.module)) ? c : {}).Ze;
       if (!d)
           throw Error("cannot load invalid module: " + d);
       if (!this.loaded.has(a.module)) {
           c = (c = _.Cg(172)) && "pagead2.googlesyndication.com" === ax((c.src || "").match(_.$w)[3] || null);
           c = Qd(c ? this.context.bb ? y(UO, this.context.bb, d) : y(VO, d, this.context.Ga) : this.context.bb ? y(SO, this.context.bb, d) : y(TO, d, this.context.Ga));
           d = {};
           var e = _.D(Oy)
             , f = _.D(qy);
           e && (d.cb = e);
           f && (d.mcb = f);
           _.t(Object, "keys").call(Object, d).length ? (c = tt.exec(Ta(c).toString()),
           e = c[3] || "",
           d = Kd(c[1] + ut("?", c[2] || "", d) + ut("#", e))) : d = c;
           ZO(this, a);
           gk(document, d);
           this.loaded.add(a.module)
       }
       return b.promise
   }
   ;
   _.YO = function(a, b) {
       b = b.module;
       a.m.has(b) || a.m.set(b, new _.lg);
       return (0,
       B.J)(a.m.get(b))
   }
   ;
   ZO = function(a, b) {
       var c = b.module;
       b = "_gpt_js_load_" + c + "_";
       var d = _.Lh(a.context, 340, function(e) {
           if (a.j.has(c) && "function" === typeof e) {
               var f = (0,
               B.J)(a.j.get(c));
               f = (void 0 === f.se ? [] : f.se).map(function(g) {
                   return _.YO(a, g).promise
               });
               u.Promise.all(f).then(function() {
                   e.call(window, _, a)
               })
           }
       });
       Object.defineProperty(Dg(), b, {
           value: function(e) {
               if (d) {
                   var f = d;
                   d = null;
                   f(e)
               }
           },
           writable: !1,
           enumerable: !1
       })
   }
   ;
   var $O = function() {
       this.resources = {}
   };
   var Xr = function(a, b, c, d, e, f, g, h, k) {
       Z.call(this, a, 682);
       this.L = b;
       this.format = c;
       this.slotId = d;
       this.F = e;
       this.B = hE(this);
       this.l = Y(this, f);
       this.o = V(this, g);
       this.G = V(this, h);
       this.C = Y(this, k)
   };
   _.O(Xr, Z);
   Xr.prototype.j = function() {
       var a = this;
       if ((2 === this.format || 3 === this.format) && null !== this.l.j.D && pr(this.l.value, 12, !1)) {
           var b = (0,
           B.J)(this.C.value).Be
             , c = _.pL(this.L, this.slotId)
             , d = this.G.value
             , e = this.o.value;
           _.Ni(e, {
               "max-height": "30vh",
               overflow: "hidden"
           });
           if (aP)
               aP.Df(e);
           else {
               aP = new b(this.context,this.format,e,this.F,d,this.L,this.slotId);
               b = {};
               d = _.x(Nc(this.l.value, cw, 13));
               for (var f = d.next(); !f.done; f = d.next())
                   f = f.value,
                   b[v(f, 1)] = v(f, 2);
               aP.Gf(b);
               aP.Bb();
               mL(this.L, this.slotId, function() {
                   aP && (aP.Ca(),
                   aP = null);
                   c && _.rL(a.L, a.slotId)
               })
           }
           _.ap(this, function() {
               return _.Ww(e)
           })
       }
       this.B.notify()
   }
   ;
   var aP = null;
   var Yr = function(a, b, c, d, e, f, g, h, k) {
       Z.call(this, a, 683);
       this.slotId = b;
       this.format = c;
       this.P = d;
       this.l = Y(this, e);
       this.o = V(this, f);
       this.K = V(this, g);
       this.C = Y(this, h);
       this.G = Y(this, k);
       this.N = Rq(b, Sq, function(l) {
           l = l.detail;
           try {
               var m = JSON.parse(l.data);
               return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
           } catch (n) {
               return !1
           }
       })
   };
   _.O(Yr, Z);
   Yr.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k, l, m, n;
       return _.ab(function(p) {
           if (1 == p.j) {
               b = a.l.value;
               if (!b || 5 !== a.format)
                   return p.return();
               c = a.K.value;
               d = a.o.value;
               e = (0,
               B.J)(a.G.value);
               f = e.Je;
               g = new _.KJ(a.context);
               l = _.E(Fl) && (null == (h = a.l.value) ? 0 : nl(h, 14)) ? 60 * (0,
               B.J)(null == (k = a.l.value) ? void 0 : v(k, 14)) : Hl(!0);
               m = new f(window,d,c,g,a.P,Qq(Nc(b, cw, 13)),"22639388115" === zg(a.slotId.getAdUnitPath()),function() {
                   return void a.Ca()
               }
               ,l,a.C.value);
               _.Co(a, m);
               n = _.D(By);
               switch (n) {
               case 0:
                   m.P();
                   break;
               case 1:
                   p.j = 2;
                   return
               }
           } else {
               if (4 != p.j)
                   return bb(p, a.N, 4);
               if (a.D)
                   return p.return();
               m.P(!0)
           }
           p.j = 0
       })
   }
   ;
   var bP = function() {
       this.module = 2
   };
   bP.prototype.toString = function() {
       return String(this.module)
   }
   ;
   _.cP = new bP;
   var Tr = function(a, b, c, d, e) {
       Z.call(this, a, 846);
       this.C = b;
       this.format = c;
       this.B = U(this);
       this.l = Y(this, d);
       this.o = Y(this, e)
   };
   _.O(Tr, Z);
   Tr.prototype.j = function() {
       var a = this, b, c, d, e, f;
       return _.ab(function(g) {
           if (1 == g.j) {
               c = (2 === a.format || 3 === a.format) && !(null == (b = a.l.value) || !pr(b, 12, !1));
               d = 5 === a.format && a.o.value;
               if (!c && !d) {
                   Pr(a.B);
                   g.j = 0;
                   return
               }
               e = a.B;
               f = e.j;
               return bb(g, a.C.load(_.cP), 3)
           }
           f.call(e, g.m);
           g.j = 0
       })
   }
   ;
   var dP = function(a, b, c, d) {
       Z.call(this, a, 696);
       this.slotId = b;
       this.va = c;
       jE(this, d);
       this.l = new u.Promise(function(e) {
           for (var f = _.x(["closed", "ha_before_make_visible"]), g = f.next(); !g.done; g = f.next())
               Tq(b, g.value).then(e)
       }
       )
   };
   _.O(dP, Z);
   dP.prototype.j = function() {
       var a = this;
       return _.ab(function(b) {
           if (1 == b.j)
               return bb(b, a.l, 2);
           if (3 != b.j)
               return a.D ? b.return() : bb(b, a.va.dispatchEvent("rewardedSlotClosed", 703, new OO(a.slotId,"publisher_ads")), 3);
           a.Ca();
           b.j = 0
       })
   }
   ;
   var eP = function(a, b, c, d) {
       Z.call(this, a, 694);
       this.slotId = b;
       this.va = c;
       jE(this, d);
       var e = new ur;
       this.l = Y(this, e);
       Tq(b, "granted").then(function(f) {
           var g;
           return void $D(e, null != (g = f.payload) ? g : null)
       })
   };
   _.O(eP, Z);
   eP.prototype.j = function() {
       this.va.dispatchEvent("rewardedSlotGranted", 702, new NO(this.slotId,"publisher_ads",this.l.value))
   }
   ;
   var fP = {
       width: "100%",
       height: "100%",
       left: "0",
       top: "0"
   }
     , gP = function(a, b, c, d, e, f) {
       Z.call(this, a, 693);
       this.F = b;
       this.G = f;
       this.B = hE(this);
       this.l = V(this, c);
       this.o = V(this, d);
       jE(this, e);
       this.C = new _.FI(this.F)
   };
   _.O(gP, Z);
   gP.prototype.j = function() {
       var a = this;
       if (!this.G.A) {
           var b = 0 === (0,
           _.Vl)() ? "rgba(1,1,1,0.5)" : "white";
           _.Ni(this.o.value, _.t(Object, "assign").call(Object, {
               "background-color": b,
               opacity: "1",
               position: "fixed",
               margin: "0",
               padding: "0",
               "z-index": "2147483647",
               display: "block"
           }, fP));
           _.ap(this, _.OI(this.F.document, this.F));
           Hd(this.l.value).postMessage(JSON.stringify({
               type: "rewarded",
               message: "visible"
           }), "*");
           if (this.F === this.F.top) {
               this.F.location.hash = "goog_rewarded";
               var c = new _.II(this.C);
               _.JI(c);
               _.ap(this, function() {
                   _.KI(c);
                   "goog_rewarded" === a.F.location.hash && (a.F.location.hash = "")
               })
           }
           this.B.notify()
       }
   }
   ;
   var hP = function(a, b, c, d) {
       Z.call(this, a, 695);
       this.F = b;
       this.l = V(this, c);
       jE(this, d)
   };
   _.O(hP, Z);
   hP.prototype.j = function() {
       if (this.F === this.F.top)
           var a = (0,
           B.J)(Hd(this.l.value))
             , b = wL(this, 503, this.F, "hashchange", function(c) {
               vt(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                   type: "rewarded",
                   message: "back_button"
               }), "*"),
               b())
           })
   }
   ;
   var iP = function(a, b, c, d) {
       Z.call(this, a, 692);
       this.slotId = b;
       this.va = c;
       this.B = hE(this);
       this.l = V(this, d)
   };
   _.O(iP, Z);
   iP.prototype.j = function() {
       var a = this, b, c, d, e, f;
       return _.ab(function(g) {
           if (1 == g.j)
               return b = a.l.value,
               c = new _.lg,
               d = c.promise,
               e = c.resolve,
               a.va.dispatchEvent("rewardedSlotReady", 701, new MO(a.slotId,"publisher_ads",e,null != (f = b.payload) ? f : null)),
               bb(g, d, 2);
           if (a.D)
               return g.return();
           a.B.notify();
           a.Ca();
           g.j = 0
       })
   }
   ;
   var jP = {
       width: "100%",
       height: "100%",
       left: "0",
       top: "0"
   }
     , kP = {
       width: "60%",
       height: "60%",
       transform: "translate(-50%, -50%)",
       left: "50%",
       top: "50%"
   }
     , lP = function(a, b, c) {
       Z.call(this, a, 691);
       var d = this;
       this.o = U(this);
       this.l = hE(this);
       this.C = V(this, c);
       this.G = Tq(b, "prefetched");
       Tq(b, "ha_before_make_visible").then(function() {
           return void d.l.notify()
       })
   };
   _.O(lP, Z);
   lP.prototype.j = function() {
       var a = this, b;
       return _.ab(function(c) {
           if (1 == c.j) {
               if (a.l.A)
                   return c.return();
               _.Ni(a.C.value, _.t(Object, "assign").call(Object, {
                   position: "absolute"
               }, 0 === (0,
               _.Vl)() ? kP : jP));
               return bb(c, a.G, 2)
           }
           b = c.m;
           if (a.D)
               return c.return();
           a.o.j(b);
           c.j = 0
       })
   }
   ;
   var Zr = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 688);
       4 === c && (this.Aa = new cf,
       _.Co(this, this.Aa),
       c = new lP(this.context,b,f),
       M(this.Aa, c),
       a = new iP(this.context,b,d,c.o),
       M(this.Aa, a),
       g = new gP(this.context,e,f,g,a.B,c.l),
       M(this.Aa, g),
       M(this.Aa, new hP(this.context,e,f,g.B)),
       M(this.Aa, new eP(this.context,b,d,a.B)),
       M(this.Aa, new dP(this.context,b,d,a.B)))
   };
   _.O(Zr, Z);
   Zr.prototype.j = function() {
       var a;
       null == (a = this.Aa) || mf(a)
   }
   ;
   var mP = function(a, b, c) {
       _.vC.call(this);
       this.context = a;
       this.A = b;
       this.m = c;
       a = c.slotId;
       b = c.size;
       this.j = "height" === c.Ce ? "fluid" : [b.width, b.height];
       this.Gb = Hi(a);
       this.Hb = fp
   };
   _.O(mP, _.vC);
   mP.prototype.render = function() {
       var a = this.A
         , b = this.m
         , c = b.slotId
         , d = b.O.R
         , e = b.V
         , f = b.size
         , g = b.rb
         , h = b.xe
         , k = b.isBackfill;
       b = b.Nb;
       g && pg(g, _.Uw(e), null != h ? h : "", !1);
       tD(_.F(Nh), "5", (0,
       B.J)(v(d[c.getDomId()], 20)));
       c.dispatchEvent(dL, 801, {
           qd: 0 === a.kind ? a.wa : "",
           isBackfill: k
       });
       a = this.I();
       b && a && a.setAttribute("data-google-container-id", b);
       c.dispatchEvent(fL, 825, {
           size: f,
           isEmpty: !1
       });
       return a
   }
   ;
   mP.prototype.loaded = function(a) {
       var b = this.m
         , c = b.slotId
         , d = b.va;
       b = b.O.R;
       c.dispatchEvent(iL, 844, void 0);
       a && a.setAttribute("data-load-complete", !0);
       d.dispatchEvent("slotOnload", 710, new IO(c,"publisher_ads"));
       tD(_.F(Nh), "6", (0,
       B.J)(v(b[c.getDomId()], 20)))
   }
   ;
   var nP = function(a, b) {
       if (b)
           return null;
       a = a.A;
       a = 0 === a.kind ? a.wa : "";
       b = "";
       var c = !0
         , d = "sf";
       b = void 0 === b ? "" : b;
       c = void 0 === c ? !1 : c;
       d = void 0 === d ? "" : d;
       if (a) {
           var e = a.toLowerCase();
           -1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && yg(d, 2) : (c && yg(d, 3),
           a = _.E(eC) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
       } else
           c && yg(d, 1);
       return a
   };
   mP.prototype.H = function() {
       _.vC.prototype.H.call(this);
       var a;
       null == (a = this.m.rb) || a.removeAttribute("data-google-query-id")
   }
   ;
   mP.prototype.o = function(a, b) {
       var c = this
         , d = oP(this, function() {
           return void c.loaded((0,
           B.J)(d.j))
       }, a, b);
       _.ap(this, function() {
           100 != d.status && (2 == d.C && (fK(d.D),
           d.C = 0),
           window.clearTimeout(d.T),
           d.T = -1,
           d.o = 3,
           d.m && (d.m.Ca(),
           d.m = null),
           _.fe(window, "resize", d.ta),
           _.fe(window, "scroll", d.ta),
           d.l && d.j && d.l == _.Xw(d.j) && d.l.removeChild(d.j),
           d.j = null,
           d.l = null,
           d.status = 100)
       });
       return d
   }
   ;
   var oP = function(a, b, c, d) {
       var e = a.m
         , f = e.Wd
         , g = e.isBackfill
         , h = e.Ke
         , k = e.Nb
         , l = e.xc
         , m = e.ac
         , n = e.pb
         , p = e.Gc
         , r = Array.isArray(a.j) ? new _.ti(Number(a.j[0]),Number(a.j[1])) : 1;
       return new nK({
           Xc: e.pd,
           Gb: a.Gb,
           Hb: a.Hb,
           content: nP(a, d),
           size: r,
           we: !!h,
           Md: b,
           Xd: null != f ? f : void 0,
           permissions: {
               Yb: nl(c, 1) ? !!H(c, 1) : !g,
               Zb: nl(c, 2) ? !!H(c, 2) : !1
           },
           Ib: !!Dg().fifWin,
           lf: Dn ? Dn : Dn = bl(),
           qe: gl(),
           hostpageLibraryTokens: _.F(cN).hostpageLibraryTokens,
           Da: function(A, z) {
               return void Ph(a.context, A, z)
           },
           uniqueId: (0,
           B.J)(k),
           xc: null != l ? l : _.E(Ry) ? yi() : MJ(),
           ac: null != m ? m : void 0,
           cc: null != d ? d : void 0,
           pb: null != n ? n : void 0,
           Gc: null != p ? p : void 0
       })
   };
   var Vq = function() {
       mP.apply(this, arguments)
   };
   _.O(Vq, mP);
   Vq.prototype.I = function() {
       var a = this.m
         , b = a.O
         , c = b.W;
       a = b.R[a.slotId.getDomId()];
       b = new hl;
       c = ol([b, c.Ea(), null == a ? void 0 : a.Ea()]);
       c = mP.prototype.o.call(this, c);
       return (0,
       B.J)(c.j)
   }
   ;
   Vq.prototype.l = function() {
       return !1
   }
   ;
   var pP = function() {
       mP.apply(this, arguments)
   };
   _.O(pP, mP);
   var qP = function(a, b) {
       var c = _.ee(b ? "fencedframe" : "IFRAME");
       b && (c.mode = "opaque-ads");
       c.id = a.Gb;
       c.name = a.Gb;
       c.title = a.Hb;
       Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]),
       c.height = String(a.j[1])) : (c.width = "100%",
       c.height = "0");
       c.allowTransparency = "true";
       c.scrolling = "no";
       c.marginWidth = "0";
       c.marginHeight = "0";
       c.frameBorder = "0";
       c.style.border = "0";
       c.style.verticalAlign = "bottom";
       c.setAttribute("role", "region");
       c.setAttribute("aria-label", "Advertisement");
       c.tabIndex = 0;
       return c
   }
     , rP = function(a, b) {
       "string" !== typeof a.j && (b.width = String(a.j[0]),
       b.height = String(a.j[1]));
       var c = _.Lh(a.context, 774, function() {
           a.loaded(b);
           _.fe(b, "load", c)
       });
       _.Za(b, "load", c);
       _.ap(a, function() {
           return _.fe(b, "load", c)
       });
       a.m.pd.appendChild(b)
   };
   var Wq = function() {
       pP.apply(this, arguments)
   };
   _.O(Wq, pP);
   Wq.prototype.I = function() {
       var a = this
         , b = this.m
         , c = b.Wd;
       b = b.ac;
       var d = qP(this);
       if (null == c ? 0 : c.length)
           if (_.Xt) {
               c = _.x(c);
               for (var e = c.next(); !e.done; e = c.next())
                   d.sandbox.add(e.value)
           } else
               d.sandbox.add.apply(d.sandbox, _.Ud(c));
       b && (d.allow = b);
       rP(this, d);
       _.Sh(this.context, 653, function() {
           var f;
           if (f = Df(Va(Df(a.A.wa)).toString())) {
               var g = f.toString().toLowerCase();
               -1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? Uq(2) : (Uq(3),
               f = _.E(eC) ? f : Df("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
           } else
               Uq(1);
           var h, k;
           g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
           Ea() && g.open("text/html", "replace");
           Wa(g, f);
           var l, m, n;
           if (vt(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
               var p, r;
               null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
           }
           g.close()
       }, !0);
       return d
   }
   ;
   Wq.prototype.l = function() {
       return !0
   }
   ;
   var Yq = function() {
       pP.apply(this, arguments)
   };
   _.O(Yq, pP);
   Yq.prototype.I = function() {
       var a = qP(this, !this.m.uf);
       lj(a, this.A.ed);
       rP(this, a);
       return a
   }
   ;
   Yq.prototype.l = function() {
       return !1
   }
   ;
   var Xq = function() {
       pP.apply(this, arguments)
   };
   _.O(Xq, pP);
   Xq.prototype.I = function() {
       var a = this.A.url
         , b = this.m
         , c = b.O
         , d = c.W;
       b = c.R[b.slotId.getDomId()];
       d = ol([d.Ea(), null == b ? void 0 : b.Ea()]);
       var e = qP(this);
       lj(e, a);
       pP.prototype.o.call(this, d, e);
       var f = function() {
           e.removeEventListener("load", f);
           sP(a)
       };
       e.addEventListener("load", f);
       yx(e, function() {
           return void sP(a)
       });
       return e
   }
   ;
   var sP = function(a) {
       var b = document.querySelectorAll("script[type=webbundle]");
       if (b.length) {
           a: {
               for (var c = 0; c < b.length; c++) {
                   var d = void 0;
                   if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                       b = b[c];
                       break a
                   }
               }
               b = null
           }
           b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources,
           a = d.indexOf(a, 0),
           -1 < a && d.splice(a, 1),
           0 === d.length ? document.head.removeChild(b) : (a = _.ee("SCRIPT"),
           a.setAttribute("type", "webbundle"),
           a.textContent = JSON.stringify(c),
           document.head.removeChild(b),
           document.head.appendChild(a)))
       }
   };
   Xq.prototype.l = function() {
       return !1
   }
   ;
   var Vr = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z, J, N, P, T, W, aa, X, ja, xa, mb) {
       Z.call(this, a, 680);
       this.slotId = b;
       this.L = c;
       this.O = d;
       this.va = e;
       this.F = f;
       this.l = U(this);
       this.C = U(this);
       this.o = hE(this);
       this.K = V(this, g);
       this.oa = V(this, h);
       jE(this, l);
       this.ca = V(this, m);
       this.G = V(this, n);
       this.Z = V(this, p);
       jE(this, T);
       this.N = V(this, r);
       this.P = Y(this, A);
       this.xa = Y(this, z);
       this.U = V(this, J);
       this.ma = Y(this, N);
       this.Ka = Y(this, P);
       this.ua = Y(this, k);
       jE(this, W);
       this.ia = V(this, aa);
       jE(this, X);
       this.za = Y(this, ja);
       this.da = Y(this, xa);
       this.fa = Y(this, mb)
   };
   _.O(Vr, Z);
   Vr.prototype.j = function() {
       var a = this
         , b = this.K.value;
       if (0 === b.kind && null == b.wa)
           throw new uD("invalid html");
       var c;
       b = Zq(this.context, b, {
           V: document,
           slotId: this.slotId,
           L: this.L,
           O: this.O,
           va: this.va,
           size: this.Z.value,
           rb: this.ca.value,
           pd: this.G.value,
           xe: this.N.value,
           Ce: this.P.value,
           Wd: this.xa.value,
           isBackfill: this.U.value,
           Ke: this.ma.value,
           Nb: this.Ka.value,
           xc: this.ua.value,
           ac: this.ia.value,
           pb: this.za.value,
           uf: null == (c = this.da.value) ? void 0 : pr(c, 14),
           Gc: this.fa.value
       }, {
           wf: this.oa.value
       });
       _.Co(this, b);
       var d = b.render();
       wL(this, this.id, this.F, "message", function(e) {
           d.contentWindow === e.source && a.slotId.dispatchEvent(Sq, 824, e)
       });
       this.o.notify();
       this.l.j(d);
       this.C.j(b.l())
   }
   ;
   var as = function(a, b, c, d, e) {
       Z.call(this, a, 863);
       this.l = c;
       this.nb = Number(b);
       this.o = V(this, d);
       this.C = V(this, e);
       this.G = tP(this)
   };
   _.O(as, Z);
   var tP = function(a) {
       return _.ab(function(b) {
           return b.return(new u.Promise(function(c) {
               try {
                   wL(a, a.id, a.l, "message", function(d) {
                       var e;
                       "asmreq" === (null == (e = d.data) ? void 0 : e.type) && (e = he(uI, d.data.payload),
                       oe(e, 1, 0) === a.nb && c(d))
                   })
               } catch (d) {}
           }
           ))
       })
   };
   as.prototype.j = function() {
       var a = this, b, c, d, e, f, g;
       return _.ab(function(h) {
           if (1 == h.j)
               return b = $q(a.l),
               c = a.o.value,
               d = a.C.value,
               bb(h, a.G, 2);
           e = h.m;
           var k = a.l
             , l = $q(k);
           var m = c.getBoundingClientRect();
           var n = Gd(k) ? pi(c, k) : {
               x: 0,
               y: 0
           };
           k = n.x;
           n = n.y;
           m = new _.Cx(n,k + m.right,n + m.bottom,k);
           k = new wI;
           k = w(k, 1, m.top);
           k = w(k, 3, m.bottom);
           k = w(k, 2, m.left);
           m = w(k, 4, m.right);
           k = new vI;
           k = w(k, 1, a.nb);
           k = w(k, 2, !d);
           m = Zc(k, 3, m);
           m = w(m, 4, b);
           f = w(m, 5, l);
           g = {
               type: "asmres",
               payload: f.aa()
           };
           e.ports[0].postMessage(g);
           h.j = 0
       })
   }
   ;
   var Lr = function(a, b, c, d, e, f, g, h, k, l, m, n) {
       Z.call(this, a, 699);
       this.V = b;
       this.slotId = c;
       this.l = d;
       this.ub = e;
       this.B = hE(this);
       this.K = Y(this, f);
       this.P = V(this, g);
       this.C = V(this, h);
       this.N = V(this, k);
       this.o = Y(this, l);
       this.U = V(this, m);
       this.G = V(this, n)
   };
   _.O(Lr, Z);
   Lr.prototype.j = function() {
       var a = this.P.value
         , b = this.C.value;
       b.style.width = "";
       b.style.height = "";
       if ("height" !== this.K.value) {
           var c, d = null != (c = this.o.value) ? c : 0;
           c = this.N.value;
           var e = this.U.value
             , f = this.G.value
             , g = !1;
           switch (d) {
           case 1:
           case 2:
               g = this.context;
               var h = this.V
                 , k = this.slotId
                 , l = this.l
                 , m = this.ub;
               var n = c.width
                 , p = c.height
                 , r = 0;
               var A = 0;
               var z = gi(l);
               z = _.x(z);
               for (var J = z.next(); !J.done; J = z.next()) {
                   var N = J.value;
                   Array.isArray(N) && (J = (0,
                   B.qa)(N[0]),
                   N = (0,
                   B.qa)(N[1]),
                   r < J && (r = J),
                   A < N && (A = N))
               }
               A = [r, A];
               r = A[0] < n;
               p = A[1] < p;
               if (r || p) {
                   A = n + "px";
                   z = {
                       "max-height": "none",
                       "max-width": A,
                       padding: "0px",
                       width: A
                   };
                   p && (z.height = "auto");
                   Oi(b, a, z);
                   b = {};
                   r && (r = Mi(e.width),
                   n > r && (b.width = A,
                   b["max-width"] = A));
                   p && (b.height = "auto",
                   b["max-height"] = "none");
                   c: {
                       for (P in b)
                           if (Object.prototype.hasOwnProperty.call(b, P)) {
                               var P = !1;
                               break c
                           }
                       P = !0
                   }
                   P ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px",
                   _.Ni(a, b),
                   b = !0)
               } else
                   b = !1;
               b: switch (A = c.width,
               P = h.defaultView || h.parentWindow || _.q,
               d) {
               case 2:
                   a = Pi(a, P, A, e, m);
                   break b;
               case 1:
                   if (e = a.parentElement)
                       if (m = ui(e)) {
                           J = m.width;
                           m = Ai(k, P.document);
                           n = (0,
                           B.J)(Ci(m, P));
                           p = n.position;
                           N = Mi(n.width) || 0;
                           r = Ci(e, P);
                           z = "rtl" === r.direction ? "Right" : "Left";
                           m = z.toLowerCase();
                           P = "absolute" === p ? 0 : Mi(r["padding" + z]);
                           r = Mi(r["border" + z + "Width"]);
                           A = Math.max(Math.round((J - Math.max(N, A)) / 2), 0);
                           J = {};
                           N = 0;
                           var T = qx(n);
                           T && (N = T[4] * ("Right" === z ? -1 : 1),
                           z = T[3] || 1,
                           1 !== (T[0] || 1) || 1 !== z) && (T[0] = 1,
                           T[3] = 1,
                           J.transform = "matrix(" + T.join(",") + ")");
                           z = 0;
                           switch (p) {
                           case "fixed":
                               var W, aa = null != (W = Number(Di(n.getPropertyValue(m)))) ? W : 0, X;
                               W = null != (X = e.getBoundingClientRect().left) ? X : 0;
                               z = aa - W;
                               break;
                           case "relative":
                               z = null != (aa = Number(Di(n.getPropertyValue(m)))) ? aa : 0;
                               break;
                           case "absolute":
                               J[m] = "0"
                           }
                           J["margin-" + m] = A - P - r - z - N + "px";
                           _.Ni(a, J);
                           a = !0
                       } else
                           a = !1;
                   else
                       a = !1;
                   break b;
               default:
                   a = !1
               }
               b || a ? (Ri(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f),
               g = !0) : g = !1;
               break;
           case 3:
               d = this.context,
               g = this.V,
               h = this.slotId,
               k = this.l,
               W = this.ub,
               l = c.width,
               X = c.height,
               aa = Mi(e.height) || 0,
               X >= aa || "none" === e.display || "hidden" === e.visibility || !W || -12245933 === W.width || a.getBoundingClientRect().bottom <= W.height ? g = !1 : (W = {
                   height: X + "px"
               },
               Oi(b, a, W),
               _.Ni(a, W),
               Ri(d, g, h, k, 3, l, X, "gpt_slotred", f),
               g = !0)
           }
           !g && _.E(Zx) && Ri(this.context, this.V, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
       }
       this.B.notify()
   }
   ;
   var Sr = function(a, b) {
       Z.call(this, a, 1020);
       this.F = b;
       this.B = U(this)
   };
   _.O(Sr, Z);
   Sr.prototype.j = function() {
       var a = this.F;
       a = _.E(TB) && void 0 !== a.isAnonymouslyFramed && a.crossOriginIsolated;
       this.B.j(a)
   }
   ;
   var xr = function(a, b, c, d, e) {
       Z.call(this, a, 720);
       this.format = b;
       this.C = c;
       this.B = U(this);
       this.l = Y(this, d);
       this.o = Y(this, e)
   };
   _.O(xr, Z);
   xr.prototype.j = function() {
       var a = this.o.value;
       if (null == a)
           Pr(this.B);
       else {
           var b = Math.round(.3 * this.C);
           2 !== this.format && 3 !== this.format || null === this.l.j.D || !pr(this.l.value, 12, !1) || 0 >= b || a <= b ? this.B.j(a) : this.B.j(b)
       }
   }
   ;
   var Gr = function(a, b, c, d, e, f, g, h, k, l, m) {
       Z.call(this, a, 674);
       this.slotId = b;
       this.W = c;
       this.o = d;
       this.V = f;
       this.L = g;
       this.B = U(this);
       this.G = 2 === e || 3 === e;
       this.l = V(this, h);
       this.N = V(this, k);
       this.K = Y(this, l);
       this.C = Y(this, m)
   };
   _.O(Gr, Z);
   Gr.prototype.j = function() {
       var a = mi(this.W, this.o)
         , b = zi(this.slotId, this.V) || Ym(this.l.value, Ii(this.slotId), a);
       this.N.value && !a && (b.style.display = "inline-block");
       this.G ? mL(this.L, this.slotId, function() {
           return void _.Ww(b)
       }) : _.ap(this, function() {
           return void _.Ww(b)
       });
       a = uP(this);
       0 < a && (b.style.paddingTop = a + "px");
       this.B.j(b)
   }
   ;
   var uP = function(a) {
       var b = a.l.value, c, d = null == (c = a.K.value) ? void 0 : c.height;
       if (b && !a.C.value && d) {
           var e;
           c = (null != (e = H(a.o, 23)) ? e : H(a.W, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
       } else
           c = 0;
       return c
   };
   var rr = function(a, b) {
       Z.call(this, a, 859);
       this.F = b;
       this.B = U(this)
   };
   _.O(rr, Z);
   rr.prototype.j = function() {
       this.B.j(!Gd(this.F.top))
   }
   ;
   var Jr = function(a, b, c) {
       Z.call(this, a, 698);
       this.F = b;
       this.B = U(this);
       this.l = V(this, c)
   };
   _.O(Jr, Z);
   Jr.prototype.j = function() {
       $D(this.B, Ci(this.l.value, this.F))
   }
   ;
   var Rr = function(a, b, c) {
       Z.call(this, a, 840);
       this.format = b;
       this.V = c;
       this.B = U(this)
   };
   _.O(Rr, Z);
   Rr.prototype.j = function() {
       var a = []
         , b = this.V;
       b = void 0 === b ? document : b;
       var c;
       null != (c = b.featurePolicy) && (C = c.features(),
       _.t(C, "includes")).call(C, "attribution-reporting") && a.push("attribution-reporting");
       5 !== this.format && 4 !== this.format || !_.E(Wx) || a.push("autoplay");
       a.length ? this.B.j(a.join(";")) : this.B.j("")
   }
   ;
   var Wr = function(a, b, c, d, e) {
       Z.call(this, a, 934);
       this.F = b;
       this.slotId = c;
       jE(this, d);
       this.l = V(this, e)
   };
   _.O(Wr, Z);
   Wr.prototype.j = function() {
       var a = this;
       aL(this.slotId, Sq, function(b) {
           b = b.detail.data;
           try {
               var c = JSON.parse(b);
               if ("gpi-uoo" === c.googMsgType) {
                   var d = c.userOptOut
                     , e = c.clearAdsData
                     , f = a.l.value
                     , g = new sw;
                   var h = w(g, 1, d ? "1" : "0");
                   var k = w(w(h, 2, 2147483647), 3, "/");
                   var l = w(k, 4, a.F.location.hostname);
                   var m = new yE(a.F);
                   BE(m, "__gpi_opt_out", l, f);
                   if (d || e)
                       CE(m, "__gads", f),
                       CE(m, "__gpi", f)
               }
           } catch (n) {}
       })
   }
   ;
   var cs = function(a, b, c, d, e, f) {
       Z.call(this, a, 721);
       this.F = b;
       this.G = Y(this, c);
       this.o = V(this, d);
       this.l = V(this, e);
       this.C = V(this, f)
   };
   _.O(cs, Z);
   cs.prototype.j = function() {
       var a = this, b = this.G.value, c, d = null == b ? void 0 : null == (c = v(b, 1)) ? void 0 : c.toUpperCase(), e;
       b = null == b ? void 0 : null == (e = v(b, 2)) ? void 0 : e.toUpperCase();
       if (d && b) {
           e = this.o.value;
           c = this.l.value;
           var f = this.C.value
             , g = f.style.height
             , h = f.style.width
             , k = f.style.display
             , l = f.style.position
             , m = zx(e.id + "_top", d)
             , n = zx(e.id + "_bottom", b);
           _.Ni(n, {
               position: "relative",
               top: "calc(100vh - 48px)"
           });
           f.appendChild(m);
           f.appendChild(n);
           _.Ni(c, {
               position: "absolute",
               top: "24px",
               clip: "rect(0, auto, auto, 0)",
               width: "100vw",
               height: "calc(100vh - 48px)"
           });
           _.Ni(e, {
               position: "fixed",
               top: "0",
               height: "100vh"
           });
           var p;
           _.Ni(f, {
               position: "relative",
               display: (null == (p = this.F.screen.orientation) ? 0 : p.angle) ? "none" : "block",
               width: "100vw",
               height: "100vh"
           });
           wL(this, 722, this.F, "orientationchange", function() {
               var r;
               (null == (r = a.F.screen.orientation) ? 0 : r.angle) ? _.Ni(f, {
                   display: "none"
               }) : _.Ni(f, {
                   display: "block"
               })
           });
           _.ap(this, function() {
               _.Ww(m);
               _.Ww(n);
               f.style.position = l;
               f.style.height = g;
               f.style.width = h;
               f.style.display = k
           })
       }
   }
   ;
   var $r = function(a, b, c, d, e, f) {
       f = void 0 === f ? br : f;
       Z.call(this, a, 783);
       var g = this;
       this.slotId = b;
       this.V = d;
       this.va = e;
       this.K = f;
       this.G = !1;
       this.l = null;
       this.C = this.o = -1;
       this.P = _.Pt(function() {
           g.va.dispatchEvent("impressionViewable", 715, new GO(g.slotId,"publisher_ads"))
       });
       this.U = Qt(function() {
           g.va.dispatchEvent("slotVisibilityChanged", 716, new HO(g.slotId,"publisher_ads",g.C))
       }, 200);
       this.N = V(this, c);
       var h = new fE;
       Rq(this.slotId, iL).then(function() {
           return void h.notify()
       });
       jE(this, h)
   };
   _.O($r, Z);
   $r.prototype.j = function() {
       var a = this
         , b = this.K(_.Lh(this.context, this.id, function(c) {
           c = _.x(c);
           for (var d = c.next(); !d.done; d = c.next())
               a.o = 100 * d.value.intersectionRatio,
               _.t(Number, "isFinite").call(Number, a.o) && vP(a)
       }));
       b.observe(this.N.value);
       wL(this, this.id, this.V, "visibilitychange", function() {
           vP(a)
       });
       _.ap(this, function() {
           b.disconnect()
       })
   }
   ;
   var vP = function(a) {
       var b = !AI(a.V);
       wP(a, 50 <= a.o && b);
       b = Math.floor(b ? a.o : 0);
       if (0 > b || 100 < b || b === a.C ? 0 : -1 !== a.C || 0 !== b)
           a.C = b,
           a.U()
   }
     , wP = function(a, b) {
       a.G || (b ? null === a.l && (a.l = setTimeout(function() {
           AI(a.V) || (a.P(),
           a.G = !0);
           a.l = null
       }, 1E3)) : null !== a.l && (clearTimeout(a.l),
       a.l = null))
   };
   var xP = Q(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""])
     , Ur = function(a, b) {
       Z.call(this, a, 1007);
       this.l = Y(this, b)
   };
   _.O(Ur, Z);
   Ur.prototype.j = function() {
       var a = this.l.value;
       if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
           var b = document.createElement("iframe");
           a = Pd(xP, encodeURIComponent(a.join()));
           b.removeAttribute("srcdoc");
           if (a instanceof Uf)
               throw new Mt("TrustedResourceUrl",2);
           b.src = _.Ma(a);
           for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length; )
               b.sandbox.remove(b.sandbox.item(0));
           for (var c = 0; c < a.length; c++)
               b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
           b.id = "koelBirdIGRegisterIframe";
           document.head.appendChild(b)
       }
   }
   ;
   var Br = function(a, b, c) {
       Z.call(this, a, 666);
       this.o = b;
       this.l = U(this);
       this.C = Y(this, c)
   };
   _.O(Br, Z);
   Br.prototype.j = function() {
       var a = new Cr;
       if (null !== this.C.j.D) {
           var b = w(a, 2, this.C.value);
           w(b, 3, 1)
       }
       if (this.o) {
           a = [this.o, a];
           b = new Cr;
           a = _.x(a);
           for (var c = a.next(); !c.done; c = a.next())
               c = c.value,
               nl(c, 1) && w(b, 1, v(c, 1)),
               nl(c, 2) && w(b, 2, v(c, 2)),
               nl(c, 3) && w(b, 3, Pe(c, 3));
           a = b
       }
       b = this.l;
       a = nl(a, 2) ? nl(a, 3) && 0 !== (0,
       _.Vl)() ? (0,
       B.qa)(v(a, 2)) * (0,
       B.qa)(Pe(a, 3)) : v(a, 2) : null;
       $D(b, a)
   }
   ;
   var Kr = function(a, b, c, d, e, f) {
       f = void 0 === f ? dr : f;
       Z.call(this, a, 666);
       this.o = f;
       this.B = hE(this);
       jE(this, b);
       this.l = V(this, c);
       this.G = Y(this, d);
       this.C = Y(this, e)
   };
   _.O(Kr, Z);
   Kr.prototype.j = function() {
       var a = this.C.value
         , b = this.G.value
         , c = this.l.value;
       null == a || 0 > a || 0 === b || !Ei(c) ? this.B.notify() : yP(this, a, b, c)
   }
   ;
   var yP = function(a, b, c, d) {
       var e = a.o(b, _.Lh(a.context, 291, function(f, g) {
           f = _.x(f);
           for (var h = f.next(); !h.done; h = f.next())
               if (h = h.value,
               !(0 >= h.intersectionRatio)) {
                   g.unobserve(h.target);
                   a.B.notify();
                   break
               }
       }));
       null != c && setTimeout(function() {
           a.B.notify();
           e.disconnect()
       }, c);
       e.observe(d);
       _.ap(a, function() {
           e.disconnect()
       })
   };
   var Ir = function(a, b, c, d, e, f) {
       Z.call(this, a, 664);
       this.slotId = b;
       this.ub = c;
       this.L = d;
       this.B = hE(this);
       this.o = V(this, e);
       this.l = Y(this, f)
   };
   _.O(Ir, Z);
   Ir.prototype.j = function() {
       var a = this, b, c = null != (b = this.l.value) ? b : 0;
       if (0 !== (0,
       _.Vl)() || 0 < c) {
           var d = document;
           b = zI(d);
           if (AI(d) && b && (0 < zn(this.L, this.slotId) || !zP(this)) && b) {
               var e = wL(this, 324, d, b, function() {
                   AI(d) || (e && e(),
                   a.B.notify())
               });
               if (e)
                   return
           }
       }
       this.B.notify()
   }
   ;
   var zP = function(a) {
       var b = a.o.value;
       try {
           var c, d = null != (c = top) ? c : void 0;
           if (void 0 === d)
               return !0;
           var e = ln(null == d ? void 0 : d.document, d).y
             , f = e + a.ub.height;
           return b.y >= e && b.y <= f
       } catch (g) {
           return !0
       }
   };
   var Ar = function(a, b, c, d, e, f) {
       Z.call(this, a, 669);
       this.W = b;
       this.R = c;
       this.F = d;
       this.B = U(this);
       this.o = Y(this, e);
       this.l = V(this, f)
   };
   _.O(Ar, Z);
   Ar.prototype.j = function() {
       if ($k(Xx) || hi(this.R, 16) && Ig("google_range_debug", this.F))
           this.B.j(!0);
       else {
           var a, b = !(null == (a = this.o.value) || !v(a, 1)) && (H(this.R, 12) || H(this.W, 13)) || this.l.value;
           this.B.j(!!b)
       }
   }
   ;
   var Qr = function(a, b, c, d, e, f) {
       Z.call(this, a, 828);
       this.o = b;
       this.slotId = c;
       this.O = d;
       this.B = U(this);
       this.l = V(this, e);
       this.C = Y(this, f)
   };
   _.O(Qr, Z);
   Qr.prototype.j = function() {
       var a = this
         , b = this.O
         , c = b.W
         , d = b.R[this.slotId.getDomId()]
         , e = this.C.value;
       b = null;
       var f;
       d = null != (f = null == d ? void 0 : d.Ea()) ? f : null;
       c = c.Ea();
       (null == d ? 0 : nl(d, 4)) ? b = H(d, 4) : (null == c ? 0 : nl(c, 4)) ? b = H(c, 4) : null != e && (b = e);
       var g = String(b);
       null == e || e === b || this.l.value || L(this.o, rM(g, String(e)));
       this.l.value || Si("gpt_sf_r", function(h) {
           Yi(h, a.context);
           I(h, "GAM", String(e));
           I(h, "Final", g)
       });
       this.B.j(_.E(Ry) ? yi() : MJ())
   }
   ;
   var Mr = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 719);
       this.W = b;
       this.C = c;
       this.B = U(this);
       this.l = V(this, d);
       this.G = V(this, e);
       this.o = Y(this, f);
       this.K = Y(this, g)
   };
   _.O(Mr, Z);
   Mr.prototype.j = function() {
       var a = this.l.value.kind;
       switch (a) {
       case 0:
           if (this.l.value.wa)
               if (this.G.value)
                   AP(this);
               else {
                   if (a = this.o.value)
                       a = mx(),
                       a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                   a ? this.B.j(sK) : Pr(this.B)
               }
           else
               Pr(this.B);
           break;
       case 1:
           AP(this);
           break;
       case 2:
           Pr(this.B);
           break;
       default:
           Oa(a)
       }
   }
   ;
   var AP = function(a) {
       var b = a.K.value
         , c = new hl;
       b = w(c, 3, b);
       H(ol([b, a.W.Ea(), a.C.Ea()]), 3) ? a.B.j(sK) : Pr(a.B)
   };
   var Dr = function(a, b, c, d, e, f, g, h, k, l) {
       Z.call(this, a, 681);
       this.adUnitPath = b;
       this.ca = c;
       this.N = d;
       this.window = e;
       this.ra = U(this);
       this.o = U(this);
       this.Sb = U(this);
       this.l = $k(Xx).split(",");
       this.G = dl(Yx);
       this.Ra = hi(c, 16) ? Pc(c, xl, 16) : null;
       this.K = Hg("google_range_debug", this.window);
       this.P = Y(this, f);
       this.da = Y(this, g);
       this.U = Y(this, h);
       this.C = V(this, k);
       this.Z = V(this, l)
   };
   _.O(Dr, Z);
   Dr.prototype.j = function() {
       if (0 !== this.C.value.kind || this.C.value.wa.length) {
           var a;
           if (a = !!(this.l.length || this.Ra && this.K)) {
               b: if (this.l.length) {
                   if (this.G.length && (a = this.adUnitPath.split("/"),
                   !_.t(this.G, "includes").call(this.G, a[a.length - 1]))) {
                       a = !1;
                       break b
                   }
                   a = !0
               } else
                   a = !1;
               var b = a;
               a = b ? BP(this) : null;
               if (b && a) {
                   b = this.Z.value;
                   var c, d, e = null != (d = null == (c = ui(b.parentElement)) ? void 0 : c.width) ? d : 0;
                   c = "p" === this.l[0];
                   d = Number(this.l[0]);
                   if (c = "f" === this.l[0] ? this.N : d && 0 < d ? d : c ? Math.min(e, this.N) : null) {
                       d = a.width;
                       var f = a.height
                         , g = this.l[1]
                         , h = Number(g);
                       d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                       CP(this, c, d, {
                           kind: 0,
                           wa: DP(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                       }, c <= e ? 1 : 2, b);
                       a = !0
                   } else
                       a = !1
               } else
                   a = !1;
               if (!a)
                   a: if (this.Ra && this.K) {
                       a = On(this.Ra, this.window);
                       b = Pn(this.Ra, this.window);
                       e = Qn(this.Ra);
                       c = Rn(this.Ra);
                       switch (this.K) {
                       case "max":
                           d = a;
                           f = b;
                           break;
                       case "min":
                           d = e;
                           f = c;
                           break;
                       case "banner":
                           d = a;
                           f = 90 > b ? b : 90 < c ? c : 90;
                           break;
                       case "skyscraper":
                           d = 90 > a ? a : 90 < e ? e : 90;
                           f = b;
                           break;
                       default:
                           a = !1;
                           break a
                       }
                       CP(this, d, f, {
                           kind: 0,
                           wa: DP(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                       });
                       a = !0
                   } else
                       a = !1
           }
           a || EP(this)
       } else
           EP(this)
   }
   ;
   var BP = function(a) {
       a = gi(a.ca)[0];
       return Array.isArray(a) && a.every(function(b) {
           return "number" === typeof b
       }) ? new _.ti(a[0],a[1]) : null
   }
     , DP = function(a, b, c) {
       return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
   }
     , CP = function(a, b, c, d, e, f) {
       e = void 0 === e ? a.P.value : e;
       a.o.j(new _.ti(b,c));
       a.ra.j(d);
       $D(a.Sb, e);
       f && _.Jx(f, "opacity", .5)
   }
     , EP = function(a) {
       var b = a.da.value;
       if (null == b)
           throw new zl("Missing 'width'.");
       var c = a.U.value;
       if (null == c)
           throw new zl("Missing 'height'.");
       CP(a, b, c, a.C.value)
   };
   var yr = function(a, b, c, d, e, f, g, h) {
       Z.call(this, a, 673);
       this.slotId = b;
       this.rb = c;
       this.C = d;
       this.o = e;
       this.V = f;
       this.l = g;
       this.L = h;
       this.B = U(this)
   };
   _.O(yr, Z);
   yr.prototype.j = function() {
       var a = this, b, c;
       return _.ab(function(d) {
           if (1 == d.j) {
               if (a.rb) {
                   FP(a, a.rb);
                   a.B.j(a.rb);
                   d.j = 0;
                   return
               }
               if (li(a.l)) {
                   a.B.j(GP(a));
                   d.j = 0;
                   return
               }
               return bb(d, Rq(a.slotId, bL), 4)
           }
           b = d.m;
           c = b.detail;
           if (a.D)
               return d.return();
           FP(a, c);
           a.B.j(c);
           d.j = 0
       })
   }
   ;
   var GP = function(a) {
       var b = _.ee("INS");
       b.id = a.C;
       _.Ni(b, {
           display: "none"
       });
       a.V.documentElement.appendChild(b);
       var c = function() {
           return void _.Ww(b)
       };
       2 === a.l || 3 === a.l ? mL(a.L, a.slotId, c) : _.ap(a, c);
       return b
   }
     , FP = function(a, b) {
       if (2 !== a.l && 3 !== a.l) {
           for (var c = _.x(_.t(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next())
               d = d.value,
               1 === d.nodeType && d.id !== a.o && _.Ww(d);
           b.style.display = ""
       }
   };
   var Hr = function(a, b) {
       Z.call(this, a, 676);
       this.B = U(this);
       this.l = V(this, b)
   };
   _.O(Hr, Z);
   Hr.prototype.j = function() {
       var a = ri(this.l.value);
       this.B.j(a)
   }
   ;
   var Nr = function(a, b, c, d) {
       Z.call(this, a, 807);
       this.F = b;
       this.B = hE(this);
       this.l = Y(this, c);
       this.o = V(this, d)
   };
   _.O(Nr, Z);
   Nr.prototype.j = function() {
       var a = this.l.value;
       if (a && !this.o.value) {
           var b = Bx(this.F);
           HK(new GK(b,a)) || this.T(new zl("Cannot create top window frame"))
       }
       this.B.notify()
   }
   ;
   var Er = function(a, b, c) {
       Z.call(this, a, 881);
       this.Ja = c;
       this.B = U(this);
       this.l = Y(this, b)
   };
   _.O(Er, Z);
   Er.prototype.j = function() {
       if (_.E(NB) || !this.l.value)
           Pr(this.B);
       else {
           var a = this.l.value
             , b = [];
           var c = this.Ja;
           c = Ec(c, v(c, 26), 26);
           c = _.x(_.t(c, "values").call(c));
           for (var d = c.next(); !d.done; d = c.next()) {
               d = d.value;
               try {
                   b.push(JSON.parse(d))
               } catch (e) {
                   Ph(this.context, 1023, e)
               }
           }
           0 === b.length ? this.B.j(jr(a)) : this.B.j(jr(a, b))
       }
   }
   ;
   Er.prototype.m = function() {
       Pr(this.B)
   }
   ;
   var kr = navigator
     , lr = /(\$\{GDPR})/gi
     , mr = /(\$\{GDPR_CONSENT_[0-9]+\})/gi
     , nr = /(\$\{ADDTL_CONSENT})/gi;
   var HP = navigator
     , Fr = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 882);
       this.L = b;
       this.X = c;
       this.ra = U(this);
       this.o = U(this);
       this.l = Y(this, d);
       this.K = Y(this, e);
       this.N = V(this, f);
       this.P = Y(this, g)
   };
   _.O(Fr, Z);
   var IP = function(a) {
       a.ra.j(a.N.value);
       $D(a.o, a.P.value)
   };
   Fr.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k, l, m, n, p, r;
       return _.ab(function(A) {
           if (1 == A.j) {
               if (_.E(NB) || !a.l.value || !a.K.value)
                   return IP(a),
                   A.return();
               b = a.l.value.getWidth();
               c = a.l.value.getHeight();
               if (!b || !c)
                   return IP(a),
                   A.return();
               d = tq(a.l.value, hr, 5);
               a.C = d.getEscapedQemQueryId();
               a.G = Ro(d, 6);
               e = pr(d, 9);
               if (f = pr(d, 10))
                   if (IP(a),
                   pr(d, 17))
                       return qr(0, 0, d),
                       A.return();
               Si("pre_run_ad_auction_ping", function(z) {
                   Yi(z, a.context);
                   var J;
                   I(z, "winner_qid", null != (J = a.C) ? J : "");
                   var N;
                   I(z, "xfpQid", null != (N = a.G) ? N : "");
                   I(z, "publisher_tag", "gpt")
               }, 1);
               g = performance.now();
               h = pe(a.l.value, 8) || 1E3;
               return bb(A, JP(a, a.K.value, d, h, g), 2)
           }
           if (3 != A.j) {
               k = A.m;
               l = Math.round(performance.now() - g);
               m = 2 === k;
               n = 1 === k;
               p = k && !m && !n;
               Si("run_ad_auction_stats", function(z) {
                   Yi(z, a.context);
                   I(z, "duration_ms", l);
                   I(z, "applied_timeout_ms", h);
                   I(z, "timed_out", m);
                   I(z, "auction_skipped", n);
                   I(z, "auction_winner", p ? 1 : 0);
                   I(z, "thread_release_only", pr(d, 15) ? 1 : 0);
                   var J;
                   I(z, "winner_qid", null != (J = a.C) ? J : "");
                   var N;
                   I(z, "xfpQid", null != (N = a.G) ? N : "");
                   I(z, "publisher_tag", "gpt")
               }, 1);
               if (!k || n || m) {
                   r = _.E(OB) && m && !f;
                   qr(l, m ? h : 0, d, r);
                   if (r)
                       return Pr(a.ra),
                       Pr(a.o),
                       A.return();
                   f || IP(a);
                   return A.return()
               }
               return f ? A.return() : e ? (IP(a),
               A.return()) : bb(A, or(k, {
                   gdprApplies: nl(a.X, 3) ? H(a.X, 3) ? "1" : "0" : null,
                   Fe: v(a.X, 2),
                   le: v(a.X, 4)
               }), 3)
           }
           a.ra.j({
               kind: 2,
               ed: k
           });
           a.o.j(new _.ti(b,c));
           A.j = 0
       })
   }
   ;
   Fr.prototype.m = function() {
       IP(this)
   }
   ;
   var JP = function(a, b, c, d, e) {
       var f, g, h, k, l, m, n;
       return _.ab(function(p) {
           if (1 == p.j) {
               f = pe(c, 14) || -1;
               if (0 < f && a.L.D >= f)
                   return p.return(1);
               g = pe(c, 13) || -1;
               if (0 < g && a.L.A >= g)
                   return p.return(1);
               ++a.L.D;
               ++a.L.A;
               h = function(r) {
                   Si("run_ad_auction_complete", function(A) {
                       Yi(A, a.context);
                       I(A, "duration_ms", Math.round(performance.now() - e));
                       I(A, "applied_timeout_ms", d);
                       I(A, "auction_has_winner", !!r);
                       a.C && I(A, "winner_qid", a.C);
                       a.G && I(A, "xfpQid", a.G)
                   }, 1)
               }
               ;
               m = pr(c, 15) ? new u.Promise(function(r) {
                   setTimeout(function() {
                       r(null)
                   }, 0)
               }
               ) : null == (l = (k = HP).runAdAuction) ? void 0 : l.call(k, b).then(function(r) {
                   h(r);
                   return r
               });
               return bb(p, u.Promise.race([m, Ax(d)]), 2)
           }
           n = p.m;
           --a.L.D;
           return p.return(n)
       })
   };
   var KP = function(a, b) {
       this.context = a;
       this.m = b;
       this.j = new u.Map
   }
     , LP = function(a, b) {
       if (b) {
           var c;
           null == (c = a.j.get(b)) || c.Ca();
           a.j.delete(b)
       }
   }
     , NP = function(a, b, c, d, e, f, g, h, k, l, m) {
       var n = document
         , p = window;
       c || LP(a, b);
       aL(b, fL, MP);
       c = es(a.context, a.m, b, c, d, e, f, g, n, h, k, l, m);
       a.j.set(b, c);
       _.ap(b, function() {
           return void LP(a, b)
       });
       p.top !== p && p.addEventListener("pagehide", function(r) {
           r.persisted || LP(a, b)
       });
       mf(c)
   }
     , MP = _.Pt(function() {
       return void Li("gpt-first-ad-render")
   });
   var OP = function(a, b) {
       Z.call(this, a, 802);
       this.F = b;
       this.l = U(this);
       this.o = U(this)
   };
   _.O(OP, Z);
   OP.prototype.j = function() {
       var a = this, b, c, d, e;
       return _.ab(function(f) {
           if (1 == f.j) {
               if (!_.E(ty))
                   return a.o.j(!1),
                   a.l.j(""),
                   f.return();
               b = ng(a.F);
               if (!b) {
                   a.o.j(!1);
                   a.l.j("");
                   f.j = 0;
                   return
               }
               a.o.j(!0);
               f.D = 3;
               return bb(f, b, 5)
           }
           if (3 != f.j)
               return d = null != (c = f.m) ? c : "0",
               d.length > _.D(wy) && (Ph(a.context, a.id, new zl("ML:" + d.length)),
               d = "0"),
               a.l.j(d),
               db(f, 0);
           e = fb(f);
           Ph(a.context, a.id, e);
           a.l.j("0");
           f.j = 0
       })
   }
   ;
   OP.prototype.m = function() {
       this.o.j(!1);
       this.l.j("")
   }
   ;
   var PP = function(a, b, c) {
       Z.call(this, a, 944);
       this.F = b;
       this.l = new yE(this.F);
       this.o = V(this, c)
   };
   _.O(PP, Z);
   PP.prototype.j = function() {
       var a = this.o.value;
       if (AE(this.l, a)) {
           var b = zE(this.l, "__gpi_opt_out", a);
           if (b) {
               var c = new sw;
               b = w(c, 1, b);
               b = w(w(b, 2, 2147483647), 3, "/");
               b = w(b, 4, this.F.location.hostname);
               BE(this.l, "__gpi_opt_out", b, a)
           }
       }
   }
   ;
   var QP = function(a, b, c, d) {
       d = void 0 === d ? gs : d;
       Z.call(this, a, 883);
       this.C = b;
       this.G = d;
       this.l = hE(this);
       this.o = V(this, c)
   };
   _.O(QP, Z);
   QP.prototype.j = function() {
       var a = this;
       return _.ab(function(b) {
           if (1 == b.j) {
               if (!ve(a.o.value) || _.E(Ay))
                   return a.l.notify(),
                   b.return();
               _.E(zy) || kI(a.C);
               if (!a.G()) {
                   lI(null);
                   b.j = 2;
                   return
               }
               return bb(b, new u.Promise(function(c) {
                   return void lI(c)
               }
               ), 2)
           }
           a.l.notify();
           b.j = 0
       })
   }
   ;
   var RP = function(a, b, c, d) {
       Z.call(this, a, 884);
       this.ka = b;
       this.l = U(this);
       this.C = Y(this, c);
       this.o = V(this, d)
   };
   _.O(RP, Z);
   RP.prototype.j = function() {
       _.F(us).m = this.C.value;
       UM(_.F(us), zE(this.ka, "__gads", this.o.value));
       ws(20);
       ws(2);
       this.l.j(De())
   }
   ;
   var SP = function(a, b, c) {
       Z.call(this, a, 873);
       this.F = b;
       this.l = V(this, c)
   };
   _.O(SP, Z);
   SP.prototype.j = function() {
       var a = this.context
         , b = this.l.value
         , c = this.F;
       !Dg()._pubconsole_disable_ && (b = ze("google_pubconsole", b, c)) && (b = b.split("|"),
       "1" !== b[0] && "0" !== b[0] || Xj(a, c))
   }
   ;
   var TP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z, J, N, P, T, W, aa, X) {
       Z.call(this, a, 798);
       var ja = this;
       this.L = b;
       this.O = c;
       this.ka = d;
       this.Qa = e;
       this.Ba = f;
       this.Ia = g;
       this.Wa = h;
       this.Va = k;
       this.ob = l;
       this.Xa = m;
       this.Ta = n;
       this.F = p;
       this.X = r;
       this.B = U(this);
       this.Z = V(this, A);
       this.G = V(this, z);
       this.C = iE(this, J);
       this.N = V(this, N);
       this.P = V(this, P);
       this.U = V(this, T);
       this.o = V(this, W);
       this.l = iE(this, X);
       jE(this, aa);
       _.E(LB) && (_.E(JB) ? X.promise.then(function(xa) {
           return ja.K = xa
       }) : this.l = iE(this, X))
   };
   _.O(TP, Z);
   TP.prototype.j = function() {
       for (var a = this, b = new u.Map, c = _.x(this.G.value), d = c.next(); !d.done; d = c.next())
           d = d.value,
           b.set(d, this.Ba ? UP(this, d) : function() {
               return a.Z.value
           }
           );
       this.B.j(b)
   }
   ;
   var UP = function(a, b) {
       return Bi(function() {
           var c, d, e, f = null != (e = null != (d = a.K) ? d : null == (c = a.l) ? void 0 : c.value) ? e : 1, g;
           c = new PN({
               ga: {
                   F: a.F,
                   context: a.context,
                   L: a.L,
                   ka: a.ka,
                   X: _.E(ky) ? a.X : new xE,
                   Ba: !1,
                   ob: a.ob
               },
               ha: {
                   ba: [b],
                   O: a.O,
                   Ia: a.Ia,
                   Rc: !0
               },
               ee: {
                   Wa: a.Wa,
                   Va: a.Va
               },
               Ld: {
                   hd: a.N.value,
                   Hd: a.P.value,
                   Td: a.U.value
               },
               Qd: {
                   Dd: null != (g = a.C.value) ? g : "0"
               },
               gd: {
                   Qa: a.Qa,
                   Xa: a.Xa,
                   Ta: a.Ta
               },
               ld: {
                   md: a.o.value
               },
               Zd: {
                   ae: f
               }
           });
           return Gg(RN(c)).url
       })
   };
   var VP = function(a, b, c, d, e, f) {
       f = void 0 === f ? hs : f;
       Z.call(this, a, 886);
       this.ba = b;
       this.L = c;
       this.l = d;
       this.V = e;
       this.o = f;
       this.B = hE(this)
   };
   _.O(VP, Z);
   VP.prototype.j = function() {
       var a = this, b, c;
       return _.ab(function(d) {
           if (1 == d.j)
               return 3 !== xI(a.V) ? (d.j = 2,
               d = void 0) : d = bb(d, new u.Promise(function(e) {
                   return void CI(e, a.V)
               }
               ), 2),
               d;
           if (4 != d.j)
               return b = a.l ? cr(a.l) : null,
               null == b || (c = a.ba.some(function(e) {
                   return !Ei(Ai(e))
               })) ? (a.B.notify(),
               d.return()) : bb(d, WP(a, b), 4);
           a.B.notify();
           d.j = 0
       })
   }
   ;
   var WP = function(a, b) {
       return new u.Promise(function(c) {
           var d = a.o(function(h, k) {
               h.some(function(l) {
                   return 0 < l.intersectionRatio
               }) && (k.disconnect(),
               c())
           }, b + "%");
           _.ap(a, function() {
               return void d.disconnect()
           });
           for (var e = {}, f = _.x(a.ba), g = f.next(); !g.done; e = {
               yb: e.yb
           },
           g = f.next()) {
               g = g.value;
               e.yb = Ai(g);
               if (!e.yb)
                   break;
               d.observe(e.yb);
               nL(a.L, g, function(h) {
                   return function() {
                       return void d.unobserve(h.yb)
                   }
               }(e))
           }
       }
       )
   };
   var XP = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
       Z.call(this, a, 866);
       this.G = b;
       this.l = c;
       this.C = d;
       this.Qa = e;
       this.Ta = f;
       this.Xa = g;
       this.X = h;
       this.V = k;
       this.P = r;
       this.B = hE(this);
       this.o = V(this, l);
       this.N = V(this, m);
       jE(this, n);
       this.K = V(this, p)
   };
   _.O(XP, Z);
   XP.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k, l, m, n;
       return _.ab(function(p) {
           if (1 == p.j) {
               b = a.N.value;
               if (!b)
                   return a.B.notify(),
                   p.return();
               c = document.createElement("script");
               d = {
                   source: b,
                   credentials: a.K.value ? "include" : "omit",
                   resources: [a.Xa.toString()]
               };
               c.setAttribute("type", "webbundle");
               Sa(c, new Qa(JSON.stringify(d).replace(/</g, "\\x3c"),hp));
               e = _.ee("SCRIPT");
               Ua(e, a.Xa);
               a.V.head.appendChild(c);
               _.E(QB) ? (c.addEventListener("load", function() {
                   a.V.head.appendChild(e)
               }),
               c.addEventListener("error", function(r) {
                   r = new vD("string" === typeof r ? r : "Failed to load web bundle.");
                   a.l(r)
               }),
               a.P(c)) : a.V.head.appendChild(e);
               a.B.notify();
               return bb(p, YP(a), 2)
           }
           f = p.m;
           g = f.ke;
           h = f.Ye;
           delete Dg()[a.Ta.replace("googletag.", "")];
           if (g.length !== h.length)
               return a.l(new uD("Received " + g.length + " ad URLs but " + h.length + " metadatas")),
               p.return();
           d.resources = g.filter(function(r) {
               return r
           });
           d.resources.length ? (k = _.ee("SCRIPT"),
           k.setAttribute("type", "webbundle"),
           Sa(k, new Qa(JSON.stringify(d).replace(/</g, "\\x3c"),hp)),
           a.V.head.removeChild(c),
           a.V.head.appendChild(k)) : a.V.head.removeChild(c);
           for (l = 0; l < g.length; l++)
               m = g[l],
               n = h[l],
               a.G(l, n, {
                   kind: 1,
                   url: m
               }, a.o.value, a.X);
           a.C(g.length - 1, a.o.value, a.X);
           p.j = 0
       })
   }
   ;
   var YP = function(a) {
       var b = Dg()
         , c = a.Ta.replace("googletag.", "");
       return new u.Promise(function(d) {
           var e = !1;
           Object.defineProperty(b, c, {
               value: function(f, g) {
                   e || d({
                       ke: f,
                       Ye: g
                   });
                   e = !0
               },
               writable: !1,
               enumerable: !1,
               configurable: !0
           })
       }
       )
   };
   var ZP = function(a, b, c, d, e, f, g) {
       Z.call(this, a, 810);
       this.C = b;
       this.Ba = c;
       this.O = d;
       this.o = e;
       this.F = f;
       this.X = g;
       this.l = U(this)
   };
   _.O(ZP, Z);
   ZP.prototype.j = function() {
       var a = this
         , b = this.C;
       !this.Ba && 1 < this.C.length && (b = [b[0]]);
       b = b.filter(function(c) {
           if (c.D)
               return !1;
           var d = a.O.R[c.getDomId()];
           if (Ll(a.F) && 4 === Pl(d)) {
               L(a.o, oM("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
               var e = !0
           } else
               e = !1;
           return !e && !Rl(a.context, a.o, c, d, a.F, a.X)
       });
       30 < b.length && (L(this.o, kM("30", String(b.length), String(b.length - 30))),
       b = b.slice(0, 30));
       this.l.j(b)
   }
   ;
   var $P = function(a, b, c, d, e) {
       Z.call(this, a, 957);
       this.X = b;
       this.l = c;
       this.o = e;
       this.B = U(this);
       d && (this.C = V(this, d))
   };
   _.O($P, Z);
   $P.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k;
       return _.ab(function(l) {
           if (1 == l.j) {
               b = _.D(ry);
               if (2 === b && !ve(a.X)) {
                   a.B.j((null == (c = a.C) ? 0 : c.value) ? "0" : "");
                   l.j = 0;
                   return
               }
               h = a.B;
               k = h.j;
               return bb(l, null != (f = null == (d = a.l) ? void 0 : d.promise) ? f : null == (e = a.o) ? void 0 : e.promise.then(function(m) {
                   return m ? m() : ""
               }), 3)
           }
           k.call(h, null != (g = l.m) ? g : "");
           l.j = 0
       })
   }
   ;
   $P.prototype.m = function() {
       this.B.j("")
   }
   ;
   var aQ = function(a, b, c) {
       Z.call(this, a, 919);
       this.l = b;
       this.X = c;
       this.B = U(this)
   };
   _.O(aQ, Z);
   aQ.prototype.j = function() {
       var a, b = !(null == (a = this.l) ? 0 : H(a, 9)) && !!ve(this.X);
       this.B.j(b)
   }
   ;
   var bQ = function(a, b, c, d, e, f) {
       Z.call(this, a, 935);
       this.L = b;
       this.O = c;
       this.V = d;
       this.B = hE(this);
       this.l = V(this, e);
       jE(this, f)
   };
   _.O(bQ, Z);
   bQ.prototype.j = function() {
       var a = this.O
         , b = a.W;
       a = a.R;
       for (var c = _.x(this.l.value), d = c.next(); !d.done; d = c.next()) {
           d = d.value;
           var e = a[d.getDomId()]
             , f = this.V;
           f = void 0 === f ? document : f;
           Tn(e, b) && !this.L.gb(d) && Un(d, f, e, b)
       }
       this.B.notify()
   }
   ;
   var cQ = function(a, b, c, d, e, f) {
       f = void 0 === f ? nj : f;
       Z.call(this, a, 939);
       this.o = b;
       this.F = c;
       this.X = d;
       this.l = f;
       jE(this, e)
   };
   _.O(cQ, Z);
   cQ.prototype.j = function() {
       var a = this.l
         , b = this.F
         , c = new Cq;
       var d = new Dq;
       d = Hc(d, 1, String(this.o), "");
       c = Zc(c, 5, d);
       c = Hc(c, 4, 1, 0);
       c = Hc(c, 2, 2, 0);
       c = Hc(c, 3, this.context.bb || this.context.Ga, "");
       d = ve(this.X);
       c = Hc(c, 6, d, !1);
       a.call(this, b, c)
   }
   ;
   var dQ = function(a, b, c, d, e) {
       Z.call(this, a, 905);
       this.O = b;
       this.l = c;
       this.B = hE(this);
       this.o = V(this, d);
       jE(this, e)
   };
   _.O(dQ, Z);
   dQ.prototype.j = function() {
       for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next()) {
           var c = void 0;
           switch (null == (c = this.O.R[b.value.getDomId()]) ? void 0 : Pl(c)) {
           case 2:
           case 3:
           case 5:
               this.l.load(_.cP);
               return
           }
       }
       this.B.notify()
   }
   ;
   var eQ = function(a, b, c, d, e) {
       Z.call(this, a, 833);
       this.Qa = b;
       this.l = c;
       this.F = d;
       this.B = hE(this);
       jE(this, e)
   };
   _.O(eQ, Z);
   eQ.prototype.j = function() {
       if ("wbn" !== this.Qa) {
           var a = this.l
             , b = this.F
             , c = _.E(Ry) ? yi() : MJ();
           c = {
               version: Dn ? Dn : Dn = bl(),
               Mb: c,
               vf: _.E(Sy)
           };
           c = uK.Se(c);
           var d = bK(b);
           c = d ? Ld(c, new u.Map([["n", String(d)]])) : c;
           d = dl(el);
           for (var e = new u.Map, f = 0; f < d.length; f += 2)
               e.set(d[f], d[f + 1]);
           c = Ld(c, e);
           d = a.resources[c.toString()];
           var g;
           _.E(Ry) || _.E(Qy) || d || (null == (g = Dg()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1,
           b = b.document,
           a = _.ee("IFRAME"),
           a.src = Ta(c).toString(),
           a.style.visibility = "hidden",
           a.style.display = "none",
           b = b.getElementsByTagName("script"),
           b.length && (b = b[b.length - 1],
           b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
       }
       this.B.notify()
   }
   ;
   var fQ = function(a, b, c, d, e) {
       Z.call(this, a, 928);
       this.L = b;
       this.requestId = c;
       this.B = hE(this);
       this.l = V(this, d);
       jE(this, e)
   };
   _.O(fQ, Z);
   fQ.prototype.j = function() {
       this.L.l();
       var a = this.context
         , b = this.requestId
         , c = this.l.value.length;
       if (a.Lb) {
           var d = a.eb;
           a = Mg(a);
           var e = new UC;
           b = Hc(e, 2, b, 0);
           c = Hc(b, 1, c, 0);
           c = Pg(a, 7, Qg, c);
           Wd(d, c)
       }
       this.B.notify()
   }
   ;
   var gQ = function(a, b, c, d) {
       Z.call(this, a, 867);
       this.va = b;
       this.O = c;
       this.B = hE(this);
       this.l = V(this, d)
   };
   _.O(gQ, Z);
   gQ.prototype.j = function() {
       for (var a = _.x(this.l.value), b = a.next(); !b.done; b = a.next()) {
           var c = _.x(b.value);
           b = c.next().value;
           c = c.next().value;
           var d = v(this.O.R[b.getDomId()], 20);
           b.dispatchEvent(eL, 808, {
               re: c,
               kf: d
           });
           this.va.dispatchEvent("slotRequested", 705, new KO(b,"publisher_ads"))
       }
       this.B.notify()
   }
   ;
   var hQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z, J, N, P, T, W, aa, X) {
       Z.call(this, a, 785, _.D(Uy));
       var ja = this;
       this.Ba = b;
       this.L = c;
       this.ka = d;
       this.O = e;
       this.Qa = f;
       this.Ia = g;
       this.Wa = h;
       this.Va = k;
       this.ob = l;
       this.Xa = m;
       this.Ta = n;
       this.mb = p;
       this.X = r;
       this.F = A;
       this.N = z;
       this.Xb = J;
       this.da = P;
       this.K = W;
       this.l = U(this);
       this.U = U(this);
       this.Z = U(this);
       this.ca = U(this);
       jE(this, aa);
       this.ia = iE(this, z);
       this.o = iE(this, J);
       this.P = V(this, N);
       WD(this.A, P, !0);
       this.fa = V(this, T);
       _.E(JB) ? this.K.promise.then(function(xa) {
           return ja.G = xa
       }) : this.C = iE(this, this.K);
       jE(this, aa);
       jE(this, X)
   };
   _.O(hQ, Z);
   hQ.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z;
       return _.ab(function(J) {
           switch (J.j) {
           case 1:
               if (!a.P.value.length)
                   return a.l.j(""),
                   J.return();
               b = !_.E(Ay);
               if (b) {
                   bg();
                   var N = dg[1]
               } else
                   N = "";
               c = N;
               b ? (bg(),
               N = dg[4]) : N = "";
               d = N;
               b ? (bg(),
               N = dg[6]) : N = "";
               e = N;
               f = _.E(JB) ? void 0 === a.G ? 1 : a.G : null != (k = null == (g = a.C) ? void 0 : g.value) ? k : null !== (null == (h = a.C) ? void 0 : h.value) || a.C.j.m ? null : 1;
               _.E(MB) && ue({
                   api: String(!!document.browsingTopics),
                   signalVal: String(a.G),
                   signal: String(f),
                   signalResolved: a.K.A ? "1" : "0",
                   signalFlag: _.E(LB) ? "1" : "0",
                   nonBlockingFlag: _.E(JB) ? "1" : "0"
               }, "topics_debug");
               a.o.value && (a.L.Wb = a.o.value);
               m = new PN({
                   ga: {
                       F: a.F,
                       context: a.context,
                       L: a.L,
                       ka: a.ka,
                       X: a.X,
                       Ba: a.Ba,
                       ob: a.ob
                   },
                   ha: {
                       ba: a.P.value,
                       O: a.O,
                       Ia: a.Ia,
                       Rc: !1
                   },
                   ee: {
                       Wa: a.Wa,
                       Va: a.Va
                   },
                   Ld: {
                       hd: c,
                       Hd: d,
                       Td: e
                   },
                   Qd: {
                       Dd: null != (l = a.ia.value) ? l : "0"
                   },
                   gd: {
                       Qa: a.Qa,
                       Xa: a.Xa,
                       Ta: a.Ta
                   },
                   ld: {
                       md: a.fa.value
                   },
                   Zd: {
                       ae: f
                   }
               });
               n = Gg(RN(m));
               p = n.url;
               r = n.od;
               sD(a.mb, (9).toString(), 9, r);
               a.l.j(p);
               a.U.j(c);
               a.Z.j(d);
               a.ca.j(e);
               return bb(J, a.N.promise, 2);
           case 2:
               if (a.D)
                   return J.return();
               Si("gpt_paw", function(P) {
                   Yi(P, a.context);
                   var T;
                   I(P, "sig", null != (T = a.N.I) ? T : -1);
                   I(P, "req", a.M);
                   I(P, "req_cnt", a.L.H);
                   var W;
                   I(P, "dm", null != (W = window.navigator.deviceMemory) ? W : -1)
               }, _.D(xy));
               if (!a.o.value) {
                   J.j = 3;
                   break
               }
               return bb(J, a.Xb.promise, 4);
           case 4:
               Si("gpt_etu", function(P) {
                   Yi(P, a.context);
                   var T;
                   I(P, "sig", null != (T = a.Xb.I) ? T : -1);
                   I(P, "req", a.M)
               });
           case 3:
               A = QK();
               z = !!_.Cg(258);
               if (!A && !z) {
                   J.j = 0;
                   break
               }
               return bb(J, a.da.promise, 6);
           case 6:
               Si("gpt_tt_blk", function(P) {
                   Yi(P, a.context);
                   I(P, "res", A ? "c" : "t");
                   var T;
                   I(P, "sig", null != (T = a.da.I) ? T : -1);
                   I(P, "req", a.M)
               }, _.D(rC)),
               J.j = 0
           }
       })
   }
   ;
   var iQ = function(a, b, c, d, e, f) {
       Z.call(this, a, 878);
       this.l = b;
       this.V = c;
       this.O = d;
       this.F = e;
       this.B = hE(this);
       jE(this, f)
   };
   _.O(iQ, Z);
   iQ.prototype.j = function() {
       for (var a = _.x(this.l), b = a.next(); !b.done; b = a.next()) {
           b = b.value;
           var c = Ai(b, this.V);
           if (!zi(b, this.V) && c) {
               a: {
                   var d = c;
                   var e = this.O.R[b.getDomId()]
                     , f = 0
                     , g = 0;
                   e = _.x(gi(e));
                   for (var h = e.next(); !h.done; h = e.next())
                       if (h = h.value,
                       Array.isArray(h)) {
                           var k = _.x(h);
                           h = k.next().value;
                           k = k.next().value;
                           if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h,
                           g = Math.min(g || Infinity, k),
                           Zm(Ci(d, this.F)) || !d.parentElement || Zm(Ci(d.parentElement, this.F))))) {
                               d = [f, 0];
                               break a
                           }
                       }
                   d = f || g ? [f, g] : null
               }
               g = this.O;
               f = g.W;
               g = g.R[b.getDomId()];
               Ym(c, Ii(b), mi(f, g), d)
           }
       }
       this.B.notify()
   }
   ;
   var jQ = function(a, b, c, d, e) {
       this.A = a;
       this.l = b;
       this.H = c;
       this.ba = d;
       this.X = e;
       this.D = "";
       this.m = -1;
       this.state = 1;
       this.j = ""
   }
     , kQ = function(a, b) {
       a.state = 4;
       try {
           a.l(b)
       } catch (c) {}
   };
   var lQ = function(a, b, c, d, e, f, g, h, k, l) {
       Z.call(this, a, 788);
       this.K = b;
       this.N = c;
       this.G = d;
       this.X = e;
       this.B = hE(this);
       this.C = 0;
       this.o = !1;
       this.l = null != l ? l : new XMLHttpRequest;
       this.U = V(this, f);
       this.Z = V(this, g);
       jE(this, h);
       this.P = V(this, k)
   };
   _.O(lQ, Z);
   lQ.prototype.j = function() {
       var a = this
         , b = this.Z.value;
       if (b) {
           var c = new jQ(this.K,this.N,this.G,this.U.value,this.X);
           this.l.open("GET", b);
           this.l.withCredentials = this.P.value;
           b = _.E(NK(window) ? kC : jC);
           var d = _.E(mC);
           if ((b = OK(window, b, d)) && PK(b))
               try {
                   var e = RK(b);
                   if (e) {
                       var f = this.l;
                       (null == f ? 0 : f.setTrustToken) && f.setTrustToken(e)
                   }
               } catch (g) {}
           this.l.onreadystatechange = function() {
               mQ(a, c, !1)
           }
           ;
           this.l.onload = function() {
               mQ(a, c, !0)
           }
           ;
           this.l.onerror = function() {
               kQ(c, new vD("XHR error"))
           }
           ;
           this.l.send()
       }
       this.B.notify()
   }
   ;
   var mQ = function(a, b, c) {
       try {
           if (3 === a.l.readyState || 4 === a.l.readyState)
               if (300 <= a.l.status)
                   a.o || (kQ(b, new vD("xhr_err-" + a.l.status)),
                   a.o = !0);
               else {
                   var d = a.l.responseText.substr(a.C);
                   if (d && d)
                       if (1 !== b.state && 2 !== b.state)
                           kQ(b, new uD("state err: (" + ([b.state, b.j.length].join() + ")")));
                       else {
                           b.j && (d = b.j + d);
                           var e = 0
                             , f = !1;
                           do {
                               var g = d.indexOf("\n", e);
                               f = -1 !== g;
                               if (!f)
                                   break;
                               var h = b
                                 , k = d.substr(e, g - e);
                               if (1 === h.state)
                                   h.D = k,
                                   ++h.m,
                                   h.state = 2;
                               else {
                                   try {
                                       h.A(h.m, h.D, {
                                           kind: 0,
                                           wa: wx(k)
                                       }, h.ba, h.X),
                                       h.D = ""
                                   } catch (l) {}
                                   h.state = 1
                               }
                               e = g + 1
                           } while (f && e < d.length);
                           b.j = d.substr(e)
                       }
                   a.C = a.l.responseText.length;
                   c && 4 === a.l.readyState && (1 !== b.state || b.j ? kQ(b, new uD("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3,
                   b.H(b.m, b.ba, b.X)))
               }
       } catch (l) {
           kQ(b, l)
       }
   };
   var nQ = function(a, b, c, d, e) {
       Z.call(this, a, 918);
       this.O = b;
       this.mb = c;
       this.B = hE(this);
       this.l = V(this, e);
       jE(this, d)
   };
   _.O(nQ, Z);
   nQ.prototype.j = function() {
       var a = this.l.value;
       a.length && tD(this.mb, "3", (0,
       B.J)(v(this.O.R[a[0].getDomId()], 20)));
       this.B.notify()
   }
   ;
   var oQ = function(a, b) {
       Z.call(this, a, 820);
       this.F = b;
       this.B = U(this)
   };
   _.O(oQ, Z);
   oQ.prototype.j = function() {
       var a = this, b, c, d, e;
       return _.ab(function(f) {
           if (1 == f.j)
               return bb(f, qj(a.F), 2);
           b = f.m;
           c = b.Wb;
           d = b.status;
           c || Si("gpt_etu", function(g) {
               Yi(g, a.context);
               I(g, "rsn", d)
           });
           a.B.j(null != (e = c) ? e : "");
           f.j = 0
       })
   }
   ;
   var pQ = function(a, b, c, d, e, f) {
       Z.call(this, a, 978);
       this.l = b;
       this.X = c;
       this.F = e;
       this.localStorage = f;
       this.B = U(this);
       this.o = Y(this, d)
   };
   _.O(pQ, Z);
   pQ.prototype.j = function() {
       var a = this, b, c;
       return _.ab(function(d) {
           if (1 == d.j) {
               if (!_.E(LB) || !a.o.value)
                   return Pr(a.B),
                   d.return();
               var e, f, g, h, k, l;
               if ((null == (e = a.l) ? 0 : H(e, 8)) || _.E(My) && (null == (f = a.l) ? 0 : H(f, 13)) || (null == (g = a.l) ? 0 : H(g, 1)) || 1 === (null == (h = a.l) ? void 0 : oe(h, 6, 2)) || 1 === (null == (k = a.l) ? void 0 : v(k, 5)) || (null == (l = a.l) ? 0 : H(l, 9)) || !ve(a.X) || H(a.X, 9)) {
                   a.B.j(5);
                   d.j = 0;
                   return
               }
               b = a.B;
               c = b.j;
               return bb(d, yj(a.o.value, a.F, _.E(GB), _.E(KB), new _.KJ(a.context), a.localStorage), 3)
           }
           c.call(b, d.m);
           d.j = 0
       })
   }
   ;
   pQ.prototype.m = function() {
       Pr(this.B)
   }
   ;
   var qQ = function(a, b, c) {
       Z.call(this, a, 858);
       this.l = b;
       this.X = c;
       this.B = hE(this)
   };
   _.O(qQ, Z);
   qQ.prototype.j = function() {
       var a = this, b, c, d, e, f, g, h, k, l, m;
       return _.ab(function(n) {
           switch (n.j) {
           case 1:
               n.D = 2;
               if (QK()) {
                   c = _.E(NK(window) ? kC : jC);
                   d = _.E(mC);
                   e = new MK(!!ve(a.X),c,d);
                   f = XK(e);
                   if (!f) {
                       n.j = 7;
                       break
                   }
                   if (_.E(qC)) {
                       g = new _.KJ(a.context);
                       LJ(g, f);
                       n.j = 7;
                       break
                   }
                   h = Date.now();
                   return bb(n, f, 9)
               }
               b = _.Cg(258);
               return bb(n, b, 6);
           case 6:
               a.B.notify();
               n.j = 5;
               break;
           case 9:
               Si("gpt_tt", function(p) {
                   Yi(p, a.context);
                   I(p, "act", Date.now() - h)
               }, _.D(rC));
           case 7:
               a.B.notify();
           case 5:
               _.E(oC) && (l = null == (k = a.l) ? void 0 : H(k, 9)) && !QK() && ue({
                   mc: "1"
               }, "gptttmc");
               db(n, 0);
               break;
           case 2:
               m = fb(n),
               m instanceof Error && a.T(m),
               a.B.notify(),
               n.j = 0
           }
       })
   }
   ;
   var sQ = function(a, b, c) {
       Z.call(this, a, 804);
       this.l = c;
       this.G = [];
       this.C = {
           Fb: rQ(this, function(d) {
               return d.getHeight()
           }),
           Ob: rQ(this, function(d) {
               return d.getWidth()
           }),
           Ne: rQ(this, function(d) {
               return !!H(d, 8)
           }),
           De: rQ(this, function(d) {
               return v(d, 10)
           }),
           vd: rQ(this, function(d) {
               var e;
               return null != (e = d.getEscapedQemQueryId()) ? e : ""
           }),
           me: rQ(this, function(d) {
               return Pc(d, rw, 43)
           }),
           Me: rQ(this, function(d) {
               return !!H(d, 9)
           }),
           xf: rQ(this, function(d) {
               return !!H(d, 12)
           }),
           Ee: rQ(this, function(d) {
               return Mo(d, gw, 48, Cw)
           }),
           Ae: rQ(this, function(d) {
               return Mo(d, ew, 39, Cw)
           }),
           Sb: rQ(this, function(d) {
               return v(d, 36)
           }),
           yf: rQ(this, function(d) {
               return H(d, 13)
           }),
           Le: rQ(this, function(d) {
               return H(d, 3)
           }),
           tf: rQ(this, function(d) {
               return v(d, 49)
           }),
           Bf: rQ(this, function(d) {
               return v(d, 29)
           }),
           Cf: rQ(this, function(d) {
               return v(d, 30)
           }),
           Ie: rQ(this, function(d) {
               return Pc(d, uw, 51)
           }),
           zf: rQ(this, function(d) {
               return H(d, 52)
           }),
           Xb: rQ(this, function(d) {
               return v(d, 61)
           }),
           ra: U(this),
           be: rQ(this, function(d) {
               return Pc(d, xw, 58)
           }),
           Ef: rQ(this, function(d) {
               var e, f;
               return null != (f = null == (e = Pc(d, tw, 56)) ? void 0 : v(e, 1)) ? f : null
           }),
           df: rQ(this, function(d) {
               return Nc(d, Zv, 62)
           }),
           Te: rQ(this, function(d) {
               return rm(d, 63)
           })
       };
       this.o = V(this, b)
   };
   _.O(sQ, Z);
   var rQ = function(a, b) {
       var c = U(a);
       a.G.push({
           B: c,
           ye: b
       });
       return c
   };
   sQ.prototype.j = function() {
       for (var a = _.x(this.G), b = a.next(); !b.done; b = a.next()) {
           b = b.value;
           var c = b.ye;
           $D(b.B, c(this.o.value))
       }
       if (Mo(this.o.value, Aw, 41, Bw))
           throw new uD("SecureFrame");
       0 === this.l.kind || 1 === this.l.kind && this.l.url ? this.C.ra.j(this.l) : (a = this.C.ra,
       b = a.j,
       c = this.o.value,
       c = v(c, Kc(c, Bw, 4)),
       b.call(a, {
           kind: 0,
           wa: c || ""
       }))
   }
   ;
   var tQ = function(a, b, c) {
       Z.call(this, a, 822);
       this.slotId = b;
       this.l = hE(this);
       this.o = V(this, c)
   };
   _.O(tQ, Z);
   tQ.prototype.j = function() {
       for (var a = this, b = rm(this.o.value, 23), c = _.F(cN), d = _.x(b), e = d.next(); !e.done; e = d.next())
           e = e.value,
           dN(c, e),
           eN(c, e, this.slotId);
       this.l.notify();
       b.length && Si("gpt_hp", function(f) {
           Yi(f, a.context);
           I(f, "ls", b.join())
       }, _.D(my))
   }
   ;
   var uQ = function(a, b, c) {
       Z.call(this, a, 803);
       this.o = b;
       this.slotId = c;
       this.B = U(this);
       this.l = U(this);
       this.C = U(this)
   };
   _.O(uQ, Z);
   uQ.prototype.j = function() {
       var a = JSON.parse(this.o)
         , b = Hj(a, Nt);
       if (!b)
           throw Error("missing ad unit path");
       if (null == a || !a[b])
           throw Error("invalid ad unit path: " + b);
       a = a[b];
       if (!Array.isArray(a))
           throw Error("dictionary not an array: " + this.o);
       a = new zw(a.slice());
       var c;
       b = _.x(null != (c = rm(a, 27)) ? c : []);
       for (c = b.next(); !c.done; c = b.next())
           OD(c.value);
       ws(4);
       this.slotId.dispatchEvent(cL, 800, a);
       this.B.j(a);
       if (_.E(Ly)) {
           var d;
           $D(this.C, null != (d = Pc(a, qw, 54)) ? d : null)
       } else
           d = Pc(a, qw, 54),
           this.l.j(d ? d.A().filter(function(e) {
               e.A() || Ee(32, "");
               return !!e.A()
           }).map(function(e) {
               var f = e.I();
               return {
                   Ab: e.A(),
                   url: f && (_.t(f, "startsWith").call(f, location.protocol) || _.t(f, "startsWith").call(f, "data:") && 40 >= f.length) ? Kd(f) : void 0
               }
           }) : [])
   }
   ;
   var vQ = function(a, b, c, d) {
       Z.call(this, a, 823);
       this.slotId = b;
       this.L = c;
       this.l = hE(this);
       this.o = V(this, d)
   };
   _.O(vQ, Z);
   vQ.prototype.j = function() {
       var a = this;
       H(this.o.value, 11) && (_.qL(this.L, this.slotId),
       mL(this.L, this.slotId, function() {
           _.rL(a.L, a.slotId)
       }));
       this.l.notify()
   }
   ;
   var wQ = function(a, b, c, d) {
       Z.call(this, a, 821);
       this.X = b;
       this.ka = c;
       this.l = hE(this);
       this.o = V(this, d)
   };
   _.O(wQ, Z);
   wQ.prototype.j = function() {
       if (ve(this.X))
           for (var a = new u.Set, b = _.x(Nc(this.o.value, sw, 14)), c = b.next(); !c.done; c = b.next()) {
               c = c.value;
               var d = void 0
                 , e = null != (d = Gu(c, 5)) ? d : 1;
               a.has(e) || (BE(this.ka, 2 === e ? "__gpi" : "__gads", c, this.X),
               a.add(e))
           }
       this.l.notify()
   }
   ;
   var xQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z, J, N, P, T, W, aa) {
       Z.call(this, a, 973);
       this.K = b;
       this.o = c;
       this.P = d;
       this.O = e;
       this.L = f;
       this.ka = g;
       this.ia = h;
       this.N = k;
       this.l = l;
       this.Kb = m;
       this.C = n;
       this.ma = p;
       this.Pa = r;
       this.F = A;
       this.V = z;
       this.fa = J;
       this.ua = T;
       this.ca = W;
       this.oa = aa;
       this.da = Y(this, J);
       this.Z = V(this, N);
       this.U = V(this, P);
       jE(this, n.P)
   };
   _.O(xQ, Z);
   xQ.prototype.j = function() {
       var a = this
         , b = new cf;
       _.Co(this, b);
       var c = this.Z.value
         , d = kJ(this.O.W);
       if (!_.E(UB)) {
           var e = new uO(this.context,Dg(),console,this.fa);
           M(b, e)
       }
       e = new VP(this.context,this.o,this.L,Pc(this.O.W, Cr, 5),this.V);
       M(b, e);
       var f = new iQ(this.context,this.o,this.V,this.O,this.F,e.B);
       M(b, f);
       var g = !!H(this.O.W, 6);
       e = new ZP(this.context,this.o,g,this.O,this.K,this.F,c);
       M(b, e);
       var h = new oQ(this.context,this.F);
       M(b, h);
       var k = new qQ(this.context,d,c);
       M(b, k);
       var l = this.C
         , m = l.K
         , n = l.ja
         , p = l.C
         , r = l.G
         , A = l.Ka
         , z = l.Za
         , J = l.xa
         , N = l.ab
         , P = l.ma
         , T = l.N;
       l = this.ca;
       if (0 !== _.D(ry) || !l) {
           l || _.D(sy);
           var W;
           l = new $P(this.context,c,l,null != (W = this.oa) ? W : N,J);
           M(b, l);
           l = l.B
       }
       W = new AN(this.context,this.K,e.l,m,this.O.R,n,p,r,T,this.Pa,this.L);
       M(b, W);
       M(b, new GN(this.context,m,A,z,W.C,W.G,this.O.R));
       _.E(LB) ? (m = new pQ(this.context,d,c,P,this.F,this.da.value),
       M(b, m),
       A = m.B) : (A = new ur,
       Pr(A));
       m = window.isSecureContext && _.E(RB) ? "wbn" : "ldjh";
       var aa = ++this.L.H;
       P = z = null;
       "wbn" === m && (z = de(),
       P = "googletag.wbn" + aa);
       r = this.Kb;
       n = r.Ia;
       p = r.Wa;
       r = r.Va;
       f = new hQ(this.context,g,this.L,this.ka,this.O,m,n,p,r,this.U.value,z,P,_.F(Nh),c,this.F,l,h.B,e.l,k.B,W.l,A,f.B,this.ua);
       M(b, f);
       h = new nQ(this.context,this.O,_.F(Nh),f.l,e.l);
       M(b, h);
       d = new aQ(this.context,d,c);
       M(b, d);
       k = _.Lh(this.context, 646, function(ja, xa, mb, Ra, Aa) {
           var Na = function() {
               return void yQ(a, Aa, ja, xa, mb, Ra)
           };
           ja && _.E(iy) ? setTimeout(_.Lh(a.context, 646, Na), 0) : Na()
       });
       J = _.Lh(this.context, 647, function(ja, xa, mb) {
           var Ra = function() {
               return void zQ(a, aa, mb, xa, ja)
           };
           _.E(iy) ? setTimeout(_.Lh(a.context, 646, Ra), 0) : Ra()
       });
       N = _.Lh(this.context, 289, function(ja) {
           ja = ja instanceof Error ? ja : Error();
           ja.message = ja.message || "strm_err";
           Ph(a.context, 289, ja)
       });
       T = _.Lh(this.context, 1042, function(ja) {
           ja = ja instanceof Error ? ja : Error();
           ja.message = ja.message || "Unknown web bundle error.";
           Ph(a.context, 1042, ja)
       });
       var X;
       "ldjh" === m ? X = new lQ(this.context,k,N,J,c,e.l,f.l,h.B,d.B) : X = new XP(this.context,k,_.E(QB) ? T : N,J,m,(0,
       B.J)(P),(0,
       B.J)(z),c,this.V,e.l,f.l,h.B,d.B,function() {}
       );
       M(b, X);
       d = new fQ(this.context,this.L,aa,e.l,X.B);
       M(b, d);
       g = new TP(this.context,this.L,this.O,this.ka,m,g,n,p,r,this.U.value,z,P,this.F,c,f.l,e.l,l,f.U,f.Z,f.ca,W.l,d.B,A);
       M(b, g);
       g = new gQ(this.context,this.l.Sd,this.O,g.B);
       M(b, g);
       g = new eQ(this.context,m,this.ia,this.F,g.B);
       M(b, g);
       g = new dQ(this.context,this.O,this.N,e.l,g.B);
       M(b, g);
       e = new bQ(this.context,this.L,this.O,this.V,e.l,g.B);
       M(b, e);
       c = new cQ(this.context,Ce(this.F),this.F,c,X.B);
       M(b, c);
       mf(b)
   }
   ;
   var yQ = function(a, b, c, d, e, f) {
       var g, h;
       return _.ab(function(k) {
           g = f[c];
           if (!g)
               return Ph(a.context, 646, Error("missing slot")),
               k.return();
           0 === c && (h = (0,
           B.J)(v(a.O.R[g.getDomId()], 20)),
           tD(_.F(Nh), "4", h));
           return bb(k, AQ(a, g, d, e, b), 0)
       })
   }
     , zQ = function(a, b, c, d, e) {
       var f, g, h;
       return _.ab(function(k) {
           switch (k.j) {
           case 1:
               var l = a.context
                 , m = e + 1
                 , n = d.length;
               if (l.Lb) {
                   var p = l.eb;
                   l = Mg(l);
                   var r = new VC;
                   r = Hc(r, 3, b, 0);
                   m = Hc(r, 1, m, 0);
                   n = Hc(m, 2, n, 0);
                   n = Pg(l, 8, Qg, n);
                   Wd(p, n)
               }
               f = e + 1;
           case 2:
               if (!(f < d.length)) {
                   k.j = 4;
                   break
               }
               if (!d[f]) {
                   k.j = 3;
                   break
               }
               p = new zw;
               g = w(p, 8, !0).aa();
               h = '{"empty":' + g + "}";
               return bb(k, yQ(a, c, f, h, {
                   kind: 0,
                   wa: ""
               }, d), 3);
           case 3:
               ++f;
               k.j = 2;
               break;
           case 4:
               p = a.L,
               n = a.P,
               l = (0,
               B.J)(p.m.get(n)) - 1,
               0 === l ? p.m.delete(n) : p.m.set(n, l),
               0 === l && a.l.Ed.dispatchEvent(jL, 965, a.P),
               k.j = 0
           }
       })
   }
     , AQ = function(a, b, c, d, e) {
       var f, g, h, k, l, m, n, p, r, A, z, J, N, P, T, W, aa, X, ja, xa, mb, Ra, Aa, Na, $b, Pb, Mc;
       return _.ab(function(eb) {
           switch (eb.j) {
           case 1:
               return f = new cf,
               g = new uQ(a.context,c,b),
               M(f, g),
               _.E(Ly) ? (h = new qO(a.context,g.C),
               a.G = h.l,
               M(f, h)) : a.G = g.l,
               k = new wQ(a.context,e,a.ka,g.B),
               M(f, k),
               l = new tQ(a.context,b,g.B),
               M(f, l),
               m = new vQ(a.context,b,a.L,g.B),
               M(f, m),
               n = new sQ(a.context,g.B,d),
               M(f, n),
               p = [k.l.promise, l.l.promise, m.l.promise],
               mf(f),
               bb(eb, u.Promise.all(p), 2);
           case 2:
               if (b.D)
                   return eb.return();
               r = n;
               z = A = r.C;
               J = z.be;
               N = z.Ne;
               P = z.vd;
               return bb(eb, J.promise, 3);
           case 3:
               return T = eb.m,
               W = !!T,
               X = null == (aa = T) ? void 0 : Pc(aa, hr, 5),
               mb = W && !(null == (ja = X) ? 0 : pr(ja, 9)) && !(null == (xa = X) ? 0 : pr(xa, 10)),
               bb(eb, N.promise, 4);
           case 4:
               return Ra = !eb.m,
               Aa = W && (!mb || Ra),
               W && Si("gpt_td_init", function(nb) {
                   Yi(nb, a.context);
                   var hd, ub;
                   I(nb, "winner_qid", null != (ub = null == (hd = X) ? void 0 : hd.getEscapedQemQueryId()) ? ub : "");
                   var vb, Ub;
                   I(nb, "xfpQid", null != (Ub = null == (vb = X) ? void 0 : Ro(vb, 6)) ? Ub : "");
                   I(nb, "noFill", Ra ? "0" : "1");
                   I(nb, "publisher_tag", "gpt")
               }, 1),
               Na = B,
               $b = Na.J,
               bb(eb, P.promise, 5);
           case 5:
               Pb = $b.call(Na, eb.m),
               !Ra && mb && (Si("gpt_td_nf", function(nb) {
                   Yi(nb, a.context);
                   I(nb, "queryid", Pb);
                   I(nb, "slot", b.getAdUnitPath());
                   I(nb, "publisher_tag", "gpt")
               }, 1),
               X && qr(0, 0, X)),
               Mc = Ig("google_norender"),
               !Mc && Ra || BQ(a, b, Pb),
               Mc || !Ra && !Aa || NP(a.ma, b, !Ra, a.L, a.O, A, a.G, e, a.l.Sd, a.N, a.C),
               f.Ca(),
               eb.j = 0
           }
       })
   }
     , BQ = function(a, b, c) {
       var d = Ai(b, document);
       d && pg(d, window, c, !0);
       tD(_.F(Nh), "5", (0,
       B.J)(v(a.O.R[b.getDomId()], 20)));
       b.dispatchEvent(dL, 801, {
           qd: null,
           isBackfill: !1
       });
       if (_.pL(a.L, b) && !Ji(b, document)) {
           c = a.O;
           a = c.W;
           c = c.R[b.getDomId()];
           var e;
           (null != (e = H(c, 10)) ? e : H(a, 11)) && Un(b, document, c, a)
       }
       b.dispatchEvent(fL, 825, {
           isEmpty: !0
       })
   };
   var CQ = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, A, z) {
       Z.call(this, a, 885);
       this.C = b;
       this.O = c;
       this.L = d;
       this.ka = e;
       this.Kb = f;
       this.N = g;
       this.K = h;
       this.l = k;
       this.G = l;
       this.o = m;
       this.P = n;
       this.F = p;
       this.V = r;
       this.U = V(this, A);
       jE(this, z)
   };
   _.O(CQ, Z);
   CQ.prototype.j = function() {
       var a = this.U.value;
       if (a.length) {
           var b = this.L
             , c = this.l
             , d = a.length;
           b.m.has(c);
           b.m.set(c, d);
           a = _.x(a);
           for (b = a.next(); !b.done; b = a.next()) {
               var e = b.value;
               c = b = void 0;
               d = e.Pa;
               var f = e.ba;
               e = new cf;
               _.Co(this, e);
               var g = void 0;
               0 >= _.D(sy) && (g = new OP(this.context,this.F),
               M(e, g));
               var h = Fo(this.context, this.o.T)
                 , k = h.ib
                 , l = h.zd;
               _.Co(e, h.Aa);
               k = Ao(this.context, this.C, kJ(this.O.W), this.F, k, l);
               h = k.Ya;
               _.Co(e, k.Aa);
               k = new SP(this.context,this.F,h);
               M(e, k);
               k = new PP(this.context,this.F,h);
               M(e, k);
               k = new QP(this.context,_.Cg(150),h);
               M(e, k);
               l = new vr(this.context,this.F,h);
               M(e, l);
               var m = new RP(this.context,this.ka,l.B,h);
               M(e, m);
               d = new xQ(this.context,this.C,f,this.l,this.O,this.L,this.ka,this.N,this.K,this.G,this.Kb,this.o,this.P,d,this.F,this.V,l.B,h,m.l,k.l,null == (c = g) ? void 0 : c.l,null == (b = g) ? void 0 : b.o);
               M(e, d);
               mf(e)
           }
       } else
           this.G.Ed.dispatchEvent(jL, 965, this.l)
   }
   ;
   var DQ = new u.Map
     , EQ = function(a, b, c, d) {
       d = void 0 === d ? DQ : d;
       Z.call(this, a, 834);
       this.C = b;
       this.ba = c;
       this.l = d;
       this.o = U(this);
       this.G = u.Promise.all(this.ba.map(this.K, this))
   };
   _.O(EQ, Z);
   EQ.prototype.j = function() {
       var a = this, b;
       return _.ab(function(c) {
           if (1 == c.j)
               return bb(c, a.G, 2);
           b = c.m;
           a.o.j(b.filter(function(d) {
               return null != d && !d.D
           }));
           c.j = 0
       })
   }
   ;
   EQ.prototype.K = function(a) {
       var b = this, c, d;
       return _.ab(function(e) {
           if (1 == e.j) {
               if (a.D)
                   return e.return(null);
               b.l.has(a) || (b.l.set(a, is(a)),
               _.ap(a, function() {
                   return void b.l.delete(a)
               }));
               c = (0,
               B.J)(b.l.get(a));
               return bb(e, c(), 2)
           }
           d = e.m;
           if (b.D)
               return e.return(null);
           if (d)
               return e.return(a);
           L(b.C, wM(a.getAdUnitPath()));
           return e.return(null)
       })
   }
   ;
   var FQ = function(a, b, c, d, e) {
       Z.call(this, a, 847);
       this.L = b;
       this.Ba = c;
       this.o = d;
       this.l = U(this);
       this.C = V(this, e)
   };
   _.O(FQ, Z);
   FQ.prototype.j = function() {
       var a = this.C.value;
       if (a.length) {
           for (var b = _.x(a), c = b.next(); !c.done; c = b.next())
               tL(this.L, c.value);
           this.o ? this.l.j([]) : this.Ba ? (b = zg(a[0].getAdUnitPath()),
           a = GQ(a, b),
           this.l.j(a)) : (a = a.map(function(d) {
               return {
                   Pa: zg(d.getAdUnitPath()),
                   ba: [d]
               }
           }),
           this.l.j(a))
       } else
           this.l.j([])
   }
   ;
   var GQ = function(a, b) {
       var c = [];
       a = sa(a, function(f) {
           return zg(f.getAdUnitPath())
       });
       a = _.x(_.t(Object, "entries").call(Object, a));
       for (var d = a.next(); !d.done; d = a.next()) {
           var e = _.x(d.value);
           d = e.next().value;
           e = e.next().value;
           d === b ? c.unshift({
               Pa: d,
               ba: e
           }) : c.push({
               Pa: d,
               ba: e
           })
       }
       return c
   };
   var HQ = function(a, b, c) {
       Z.call(this, a, 845);
       this.R = b;
       this.l = U(this);
       this.o = U(this);
       this.C = V(this, c)
   };
   _.O(HQ, Z);
   HQ.prototype.j = function() {
       var a = this
         , b = function(d) {
           d = a.R[d.getDomId()];
           return !!gi(d).length || hi(d, 16)
       }
         , c = this.C.value;
       this.l.j(c.filter(b));
       this.o.j(c.filter(Ot(b)))
   }
   ;
   var IQ = function(a, b, c, d, e) {
       Z.call(this, a, 864);
       this.L = b;
       this.O = c;
       this.V = d;
       this.l = hE(this);
       this.o = V(this, e)
   };
   _.O(IQ, Z);
   IQ.prototype.j = function() {
       for (var a = _.x(this.o.value), b = a.next(); !b.done; b = a.next())
           if (b = b.value,
           _.pL(this.L, b)) {
               var c = this.O
                 , d = c.W;
               c = c.R[b.getDomId()];
               Tn(c, d) && Un(b, this.V, c, d);
               tL(this.L, b);
               var e = void 0
                 , f = void 0;
               null != (e = null != (f = H(c, 10)) ? f : H(d, 11)) && e && Un(b, this.V, c, d)
           }
       this.l.notify()
   }
   ;
   var JQ = function(a, b, c, d, e, f, g, h, k, l, m) {
       _.vC.call(this);
       var n = this;
       this.context = a;
       this.A = b;
       this.L = c;
       this.ka = d;
       this.va = e;
       this.o = f;
       this.I = g;
       this.M = h;
       this.l = k;
       this.V = l;
       this.F = m;
       this.j = new u.Map;
       this.m = new ZK(a);
       _.Co(this, this.m);
       aL(this.m, jL, function(p) {
           p = p.detail;
           var r = n.j.get(p);
           r && (n.j.delete(p),
           r.Ca())
       })
   };
   _.O(JQ, _.vC);
   var KQ = function(a, b, c, d) {
       var e = ++a.L.I;
       a.j.has(e);
       var f = new cf;
       a.j.set(e, f);
       b = new EQ(a.context,a.A,b);
       M(f, b);
       var g = new HQ(a.context,d.R,b.o);
       M(f, g);
       b = new FQ(a.context,a.L,!!H(d.W, 6),Ig("google_nofetch"),g.l);
       M(f, b);
       g = new IQ(a.context,a.L,d,document,g.o);
       M(f, g);
       a = new CQ(a.context,a.A,d,a.L,a.ka,c,a.o,a.I,e,{
           Ed: a.m,
           Sd: a.va
       },a.l,a.M,a.F,a.V,b.l,g.l);
       M(f, a);
       mf(f)
   };
   var LQ = function(a, b, c, d, e, f) {
       QO.call(this, a, b);
       this.L = c;
       this.P = d;
       this.N = e;
       this.l = new u.Set;
       this.M = {};
       this.G = new KP(this.context,this.j);
       this.ka = new yE(window);
       this.U = _.F($O);
       this.K = new JQ(this.context,this.j,this.L,this.ka,this,this.U,this.P,this.G,this.N,document,window);
       _.Co(this, this.K);
       _.E(dC) && new VN(a,this,c,f)
   };
   _.O(LQ, QO);
   LQ.prototype.getName = function() {
       return "publisher_ads"
   }
   ;
   LQ.prototype.display = function(a, b, c, d) {
       c = void 0 === c ? "" : c;
       d = void 0 === d ? "" : d;
       var e = "";
       if (c)
           if (_.ha(c) && 1 == c.nodeType) {
               var f = c;
               e = f.id
           } else
               e = c;
       this.enable();
       var g = gm(this.context, this.j, a, b, e)
         , h = g.slotId;
       g = g.Ja;
       if (h && g) {
           f && !e && (f.id = h.getDomId());
           this.slotAdded(h, g);
           g.setClickUrl(d);
           var k;
           Wo(this.j, null != (k = f) ? k : h.getDomId())
       } else
           L(this.j, Qj("PubAdsService.display", [a, b, c]))
   }
   ;
   var TM = function(a, b, c) {
       var d = void 0 === d ? document : d;
       var e;
       null != (e = c.R[b.getDomId()]) && w(e, 19, !0);
       e = {
           id: Iw(b.getDomId())
       };
       Wa(d, ag(e));
       Ai(b, d) ? (a.enable(),
       oL(a.L, b),
       MQ(a, c, b)) : Si("gpt_pb_write", function(f) {
           Yi(f, a.context)
       })
   };
   LQ.prototype.slotAdded = function(a, b) {
       var c = this;
       H(b, 17) || this.A && oL(this.L, a);
       this.dispatchEvent(gL, 724, {
           dd: a.getDomId(),
           R: b
       });
       aL(a, fL, function(d) {
           var e = d.detail;
           d = e.size;
           var f = new FO(a,"publisher_ads");
           e.isEmpty && (f.isEmpty = !0);
           e = a.j.getResponseInformation();
           d && e && (f.size = [d.width, d.height],
           f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId,
           f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId,
           f.isBackfill = e.isBackfill,
           f.creativeId = e.creativeId,
           f.lineItemId = e.lineItemId,
           f.creativeTemplateId = e.creativeTemplateId,
           f.advertiserId = e.advertiserId,
           f.campaignId = e.campaignId,
           f.yieldGroupIds = e.yieldGroupIds,
           f.companyIds = e.companyIds);
           c.dispatchEvent("slotRenderEnded", 708, f)
       });
       aL(a, cL, function() {
           return void c.dispatchEvent("slotResponseReceived", 709, new LO(a,c.getName()))
       });
       QO.prototype.slotAdded.call(this, a, b)
   }
   ;
   LQ.prototype.T = function(a, b) {
       this.enable();
       this.A && oL(this.L, b);
       this.j.info(RL());
       var c = a.W
         , d = a.R
         , e = H(c, 6);
       if (e || !this.L.gb(b))
           e && (e = Ai(b)) && b.dispatchEvent(bL, 778, e),
           H(c, 4) && (d = d[b.getDomId()],
           e = document,
           e = void 0 === e ? document : e,
           Tn(d, c) && !this.L.gb(b) && Un(b, e, d, c)),
           MQ(this, a, b)
   }
   ;
   var MQ = function(a, b, c) {
       var d = NQ(a, b, c);
       OQ(a, d, b, {
           Ia: 1
       });
       b = c.getAdUnitPath();
       if (c = a.M[b]) {
           c = _.x(c);
           for (d = c.next(); !d.done; d = c.next())
               d = d.value,
               OQ(a, d.ba, d.O, d.Kb);
           delete a.M[b]
       }
   }
     , NQ = function(a, b, c) {
       var d = b.W;
       b = b.R;
       if (H(d, 4))
           return [];
       var e;
       return !H(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : H(e, 17)) ? (a.l.add(c),
       _.ap(c, function() {
           return void a.l.delete(c)
       }),
       [c]) : a.m.filter(function(f) {
           if (a.l.has(f))
               return !1;
           a.l.add(f);
           _.ap(f, function() {
               return void a.l.delete(f)
           });
           return !0
       })
   }
     , OQ = function(a, b, c, d) {
       a.j.info(YL());
       if (PQ(a, b, d, c) && 1 !== d.Ia)
           for (b = _.x(b),
           d = b.next(); !d.done; d = b.next())
               d = d.value.getDomId(),
               a.dispatchEvent(hL, 725, {
                   dd: d,
                   R: c.R[d]
               })
   }
     , PQ = function(a, b, c, d) {
       b = b.filter(function(e) {
           if (!_.pL(a.L, e))
               return !1;
           var f = d.R[e.getDomId()];
           5 !== Pl(f) && 4 !== Pl(f) || _.qL(a.L, e);
           return !0
       });
       if (!b.length)
           return null;
       KQ(a.K, b, c, d);
       return b
   };
   LQ.prototype.refresh = function(a, b, c) {
       b = QQ(this, b);
       if (!b.length)
           return !1;
       RQ(this, a, b, null != c ? c : {
           Ia: 2
       });
       return !0
   }
   ;
   var QQ = function(a, b) {
       return b.filter(function(c, d) {
           if (!c.D)
               return !0;
           L(a.j, aM(String(d)));
           return !1
       })
   }
     , RQ = function(a, b, c, d) {
       var e = c[0], f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
       if (a.A) {
           var h = {};
           e = _.x(c);
           for (f = e.next(); !f.done; h = {
               zb: h.zb
           },
           f = e.next())
               h.zb = f.value,
               a.l.add(h.zb),
               _.ap(h.zb, function(k) {
                   return function() {
                       return void a.l.delete(k.zb)
                   }
               }(h));
           OQ(a, c, b, d)
       } else
           c.length && H(b.W, 6) ? (L(a.j, XL(g), e),
           e = e.getAdUnitPath(),
           f = null != (h = a.M[e]) ? h : [],
           f.push({
               ba: c,
               O: b,
               Kb: d
           }),
           a.M[e] = f) : L(a.j, VL(g), e)
   };
   LQ.prototype.Qc = function() {
       var a = this
         , b = Gh().j;
       if (H(b, 6))
           for (var c = _.x(this.m), d = c.next(); !d.done; d = c.next())
               this.A && oL(this.L, d.value);
       rN(this, b);
       aL(this, "rewardedSlotClosed", function(e) {
           var f = e.detail.slot;
           e = _.t(a.m, "find").call(a.m, function(g) {
               return f === g.j
           });
           SQ(a, [e], Gh().j, Gh().m, a.L)
       });
       ah("pubadsReady", !0)
   }
   ;
   LQ.prototype.destroySlots = function(a) {
       a = QO.prototype.destroySlots.call(this, a);
       if (a.length && this.A) {
           var b = Gh();
           TQ(this, a, b.j, b.m)
       }
       return a
   }
   ;
   var tN = function(a, b, c, d) {
       if (!a.A)
           return L(a.j, WL(), d[0]),
           !1;
       var e = QQ(a, d);
       if (!e.length)
           return L(a.j, Qj("PubAdsService.clear", [d].filter(function(f) {
               return void 0 !== f
           }))),
           !1;
       a.j.info(ZL());
       TQ(a, e, b, c);
       return !0
   }
     , TQ = function(a, b, c, d) {
       for (var e = _.x(b), f = e.next(); !f.done; f = e.next())
           lL(a.L, f.value);
       SQ(a, b, c, d, a.L)
   };
   LQ.prototype.forceExperiment = function(a) {
       a = Number(a);
       0 < a && OD(a)
   }
   ;
   var SQ = function(a, b, c, d, e) {
       var f = void 0 === f ? window : f;
       b = _.x(b);
       for (var g = b.next(); !g.done; g = b.next()) {
           g = g.value;
           LP(a.G, g);
           var h = d[g.getDomId()];
           Tn(h, c) && Un(g, f.document, h, c);
           tL(e, g)
       }
   }
     , sN = function(a, b, c, d) {
       w(d, 21, !0);
       w(d, 22, String(null != b ? b : ""));
       w(d, 23, String(null != c ? c : ""));
       rN(a, d)
   }
     , uN = function(a, b) {
       if (!a.A)
           return null;
       var c, d;
       return {
           vid: null != (c = v(b, 22)) ? c : "",
           cmsid: null != (d = v(b, 23)) ? d : ""
       }
   }
     , rN = function(a, b) {
       H(b, 21) && a.A && w(b, 29, xx())
   };
   var UQ = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"])
     , VQ = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
   var rs = "2022081601";
   (function(a, b, c) {
       var d = null != b ? b : {
           Ga: ss(),
           bb: "",
           eb: new zs(0),
           Yd: !0,
           ud: 1
       };
       try {
           Eg();
           var e = window.googletag;
           if (null == e ? 0 : e.evalScripts)
               e.evalScripts();
           else {
               hK();
               ah("evalScripts", function() {
                   try {
                       ip()
                   } catch (T) {
                       Ph(d, 297, T);
                       var N, P;
                       null == (N = window.console) || null == (P = N.error) || P.call(N, T)
                   }
               });
               try {
                   vE()
               } catch (N) {
                   Ph(d, 408, N)
               }
               Nn();
               try {
                   tE(),
                   ws(13),
                   ws(3)
               } catch (N) {
                   Ph(d, 408, N)
               }
               Li("gpt-tag-load");
               var f = xs()
                 , g = null != b ? b : As(f)
                 , h = null != c ? c : new DO(g)
                 , k = !!_.Cg(259);
               Rg(g, k);
               var l = _.F(am)
                 , m = new XO(g)
                 , n = _.F(kL)
                 , p = new xO(g,h,n)
                 , r = new LQ(g,h,n,m,p,l);
               _.Cg(260) && yO(p, r);
               var A = $k(SB);
               A && _.Sh(g, 862, function() {
                   var N = document;
                   if (A && N.head) {
                       var P = _.ee("META");
                       N.head.appendChild(P);
                       P.httpEquiv = "origin-trial";
                       P.content = A
                   }
               }, !0);
               var z = Gh().j;
               vq(g, h, r, a, z);
               var J = function() {
                   _.Sh(g, 77, function() {
                       var N = Dg().cmd;
                       if (!N || Array.isArray(N)) {
                           var P = new WN(h);
                           Dg().cmd = Nj(g, P);
                           null != N && N.length && P.push.apply(P, N)
                       }
                   })
               };
               Dg().fifWin && "complete" !== document.readyState ? _.Za(window, "load", function() {
                   return window.setTimeout(J, 0)
               }) : J();
               ip();
               if (_.E(dC) || _.F(Nh).j)
                   qs(),
                   gk(document, Qd(_.E(gC) ? y(UQ) : y(VQ)));
               Pq(g, h);
               bk(g)
           }
       } catch (N) {
           Ph(d, 106, N)
       }
   }
   )(window);
}
).call(this, {});
