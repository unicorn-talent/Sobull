(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lazy-velocity'],
  {
    WJ2Z: function (e, t, r) {
      var n, a;
      !(function (e) {
        'use strict';
        function t(e) {
          var t = e.length,
            n = r.type(e);
          return (
            'function' !== n &&
            !r.isWindow(e) &&
            (!(1 !== e.nodeType || !t) ||
              'array' === n ||
              0 === t ||
              ('number' == typeof t && t > 0 && t - 1 in e))
          );
        }
        var r, n, a, i, o, s, l;
        if (!e.jQuery) {
          for (
            (r = function (e, t) {
              return new r.fn.init(e, t);
            }).isWindow = function (e) {
              return e && e === e.window;
            },
              r.type = function (e) {
                return e
                  ? 'object' == typeof e || 'function' == typeof e
                    ? a[o.call(e)] || 'object'
                    : typeof e
                  : e + '';
              },
              r.isArray =
                Array.isArray ||
                function (e) {
                  return 'array' === r.type(e);
                },
              r.isPlainObject = function (e) {
                var t;
                if (!e || 'object' !== r.type(e) || e.nodeType || r.isWindow(e))
                  return !1;
                try {
                  if (
                    e.constructor &&
                    !i.call(e, 'constructor') &&
                    !i.call(e.constructor.prototype, 'isPrototypeOf')
                  )
                    return !1;
                } catch (e) {
                  return !1;
                }
                for (t in e);
                return void 0 === t || i.call(e, t);
              },
              r.each = function (e, r, n) {
                var a = 0,
                  i = e.length,
                  o = t(e);
                if (n) {
                  if (o) for (; a < i && !1 !== r.apply(e[a], n); a++);
                  else
                    for (a in e)
                      if (e.hasOwnProperty(a) && !1 === r.apply(e[a], n)) break;
                } else if (o)
                  for (; a < i && !1 !== r.call(e[a], a, e[a]); a++);
                else
                  for (a in e)
                    if (e.hasOwnProperty(a) && !1 === r.call(e[a], a, e[a]))
                      break;
                return e;
              },
              r.data = function (e, t, a) {
                var i, o, s;
                if (void 0 === a) {
                  if (((o = (i = e[r.expando]) && n[i]), void 0 === t))
                    return o;
                  if (o && (t in o)) return o[t];
                } else if (void 0 !== t)
                  return (
                    (s = e[r.expando] || (e[r.expando] = ++r.uuid)),
                    (n[s] = n[s] || {}),
                    (n[s][t] = a),
                    a
                  );
              },
              r.removeData = function (e, t) {
                var a = e[r.expando],
                  i = a && n[a];
                i &&
                  (t
                    ? r.each(t, function (e, t) {
                        delete i[t];
                      })
                    : delete n[a]);
              },
              r.extend = function () {
                var e,
                  t,
                  n,
                  a,
                  i,
                  o,
                  s = arguments[0] || {},
                  l = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  'boolean' == typeof s &&
                    ((c = s), (s = arguments[l] || {}), l++),
                    'object' != typeof s &&
                      'function' !== r.type(s) &&
                      (s = {}),
                    l === u && ((s = this), l--);
                  l < u;
                  l++
                )
                  if ((i = arguments[l]))
                    for (a in i)
                      i.hasOwnProperty(a) &&
                        ((e = s[a]),
                        s !== (n = i[a]) &&
                          (c && n && (r.isPlainObject(n) || (t = r.isArray(n)))
                            ? (t
                                ? ((t = !1), (o = e && r.isArray(e) ? e : []))
                                : (o = e && r.isPlainObject(e) ? e : {}),
                              (s[a] = r.extend(c, o, n)))
                            : void 0 !== n && (s[a] = n)));
                return s;
              },
              r.queue = function (e, n, a) {
                if (e) {
                  n = (n || 'fx') + 'queue';
                  var i,
                    o,
                    s,
                    l = r.data(e, n);
                  return a
                    ? (!l || r.isArray(a)
                        ? (l = r.data(
                            e,
                            n,
                            ((i = a),
                            (s = o || []),
                            i &&
                              (t(Object(i))
                                ? (function (e, t) {
                                    for (
                                      var r = +t.length, n = 0, a = e.length;
                                      n < r;

                                    )
                                      e[a++] = t[n++];
                                    if (r != r)
                                      for (; void 0 !== t[n]; ) e[a++] = t[n++];
                                    e.length = a;
                                  })(s, 'string' == typeof i ? [i] : i)
                                : [].push.call(s, i)),
                            s),
                          ))
                        : l.push(a),
                      l)
                    : l || [];
                }
              },
              r.dequeue = function (e, t) {
                r.each(e.nodeType ? [e] : e, function (e, n) {
                  t = t || 'fx';
                  var a = r.queue(n, t),
                    i = a.shift();
                  'inprogress' === i && (i = a.shift()),
                    i &&
                      ('fx' === t && a.unshift('inprogress'),
                      i.call(n, function () {
                        r.dequeue(n, t);
                      }));
                });
              },
              r.fn = r.prototype = {
                init: function (e) {
                  if (e.nodeType) return (this[0] = e), this;
                  throw new Error('Not a DOM node.');
                },
                offset: function () {
                  var t = this[0].getBoundingClientRect
                    ? this[0].getBoundingClientRect()
                    : { top: 0, left: 0 };
                  return {
                    top:
                      t.top +
                      (e.pageYOffset || document.scrollTop || 0) -
                      (document.clientTop || 0),
                    left:
                      t.left +
                      (e.pageXOffset || document.scrollLeft || 0) -
                      (document.clientLeft || 0),
                  };
                },
                position: function () {
                  var e = this[0],
                    t = (function (e) {
                      for (
                        var t = e.offsetParent;
                        t &&
                        'html' !== t.nodeName.toLowerCase() &&
                        t.style &&
                        'static' === t.style.position;

                      )
                        t = t.offsetParent;
                      return t || document;
                    })(e),
                    n = this.offset(),
                    a = /^(?:body|html)$/i.test(t.nodeName)
                      ? { top: 0, left: 0 }
                      : r(t).offset();
                  return (
                    (n.top -= parseFloat(e.style.marginTop) || 0),
                    (n.left -= parseFloat(e.style.marginLeft) || 0),
                    t.style &&
                      ((a.top += parseFloat(t.style.borderTopWidth) || 0),
                      (a.left += parseFloat(t.style.borderLeftWidth) || 0)),
                    { top: n.top - a.top, left: n.left - a.left }
                  );
                },
              },
              n = {},
              r.expando = 'velocity' + new Date().getTime(),
              r.uuid = 0,
              i = (a = {}).hasOwnProperty,
              o = a.toString,
              s = 'Boolean Number String Function Array Date RegExp Object Error'.split(
                ' ',
              ),
              l = 0;
            l < s.length;
            l++
          )
            a['[object ' + s[l] + ']'] = s[l].toLowerCase();
          (r.fn.init.prototype = r.fn), (e.Velocity = { Utilities: r });
        }
      })(window),
        (function (i) {
          'use strict';
          'object' == typeof e.exports
            ? (e.exports = i())
            : void 0 ===
                (a = 'function' == typeof (n = i) ? n.call(t, r, t, e) : n) ||
              (e.exports = a);
        })(function () {
          'use strict';
          return (function (e, t, r, n) {
            function a(e) {
              return (
                F.isWrapped(e) ? (e = C.call(e)) : F.isNode(e) && (e = [e]), e
              );
            }
            function i(e) {
              var t = d.data(e, 'velocity');
              return null === t ? n : t;
            }
            function o(e, t) {
              var r = i(e);
              r &&
                r.delayTimer &&
                !r.delayPaused &&
                ((r.delayRemaining = r.delay - t + r.delayBegin),
                (r.delayPaused = !0),
                clearTimeout(r.delayTimer.setTimeout));
            }
            function s(e, t) {
              var r = i(e);
              r &&
                r.delayTimer &&
                r.delayPaused &&
                ((r.delayPaused = !1),
                (r.delayTimer.setTimeout = setTimeout(
                  r.delayTimer.next,
                  r.delayRemaining,
                )));
            }
            function l(e, r, n, a) {
              function i(e, t) {
                return 1 - 3 * t + 3 * e;
              }
              function o(e, t) {
                return 3 * t - 6 * e;
              }
              function s(e) {
                return 3 * e;
              }
              function l(e, t, r) {
                return ((i(t, r) * e + o(t, r)) * e + s(t)) * e;
              }
              function u(e, t, r) {
                return 3 * i(t, r) * e * e + 2 * o(t, r) * e + s(t);
              }
              function c(t) {
                for (
                  var r, a, i = 0, o = 1, s = w - 1;
                  o !== s && f[o] <= t;
                  ++o
                )
                  i += S;
                return (a = u(
                  (r = i + ((t - f[--o]) / (f[o + 1] - f[o])) * S),
                  e,
                  n,
                )) >= b
                  ? (function (t, r) {
                      var a, i;
                      for (a = 0; a < y; ++a) {
                        if (0 === (i = u(r, e, n))) return r;
                        r -= (l(r, e, n) - t) / i;
                      }
                      return r;
                    })(t, r)
                  : 0 === a
                  ? r
                  : (function (t, r, a) {
                      var i,
                        o,
                        s = 0;
                      do {
                        (i = l((o = r + (a - r) / 2), e, n) - t) > 0
                          ? (a = o)
                          : (r = o);
                      } while (Math.abs(i) > v && ++s < x);
                      return o;
                    })(t, i, i + S);
              }
              function p() {
                (g = !0),
                  (e === r && n === a) ||
                    (function () {
                      for (var t = 0; t < w; ++t) f[t] = l(t * S, e, n);
                    })();
              }
              var d,
                f,
                g,
                m,
                h,
                y = 4,
                b = 0.001,
                v = 1e-7,
                x = 10,
                w = 11,
                S = 1 / (w - 1),
                P = 'Float32Array' in t;
              if (4 !== arguments.length) return !1;
              for (d = 0; d < 4; ++d)
                if (
                  'number' != typeof arguments[d] ||
                  isNaN(arguments[d]) ||
                  !isFinite(arguments[d])
                )
                  return !1;
              return (
                (e = Math.min(e, 1)),
                (n = Math.min(n, 1)),
                (e = Math.max(e, 0)),
                (n = Math.max(n, 0)),
                (f = P ? new Float32Array(w) : new Array(w)),
                (g = !1),
                ((m = function (t) {
                  return (
                    g || p(),
                    e === r && n === a
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : l(c(t), r, a)
                  );
                }).getControlPoints = function () {
                  return [
                    { x: e, y: r },
                    { x: n, y: a },
                  ];
                }),
                (h = 'generateBezier(' + [e, r, n, a] + ')'),
                (m.toString = function () {
                  return h;
                }),
                m
              );
            }
            function u(e, t) {
              var r = e;
              return (
                F.isString(e)
                  ? m.Easings[e] || (r = !1)
                  : (r =
                      F.isArray(e) && 1 === e.length
                        ? function (e) {
                            return function (t) {
                              return Math.round(t * e) * (1 / e);
                            };
                          }.apply(null, e)
                        : F.isArray(e) && 2 === e.length
                        ? h.apply(null, e.concat([t]))
                        : !(!F.isArray(e) || 4 !== e.length) &&
                          l.apply(null, e)),
                !1 === r &&
                  (r = m.Easings[m.defaults.easing] ? m.defaults.easing : g),
                r
              );
            }
            function c(e) {
              var t,
                r,
                a,
                o,
                s,
                l,
                u,
                f,
                g,
                h,
                b,
                x,
                w,
                S,
                P,
                V,
                C,
                A,
                E,
                N,
                H,
                O,
                j,
                q,
                z,
                L,
                R;
              if (e)
                for (
                  t = m.timestamp && !0 !== e ? e : T.now(),
                    (r = m.State.calls.length) > 1e4 &&
                      ((m.State.calls = (function (e) {
                        for (
                          var t, r = -1, n = e ? e.length : 0, a = [];
                          ++r < n;

                        )
                          (t = e[r]) && a.push(t);
                        return a;
                      })(m.State.calls)),
                      (r = m.State.calls.length)),
                    a = 0;
                  a < r;
                  a++
                )
                  if (m.State.calls[a]) {
                    if (
                      ((s = (o = m.State.calls[a])[0]),
                      (l = o[2]),
                      (f = !!(u = o[3])),
                      (g = null),
                      (h = o[5]),
                      (b = o[6]),
                      u || (u = m.State.calls[a][3] = t - 16),
                      h)
                    ) {
                      if (!0 !== h.resume) continue;
                      (u = o[3] = Math.round(t - b - 16)), (o[5] = null);
                    }
                    for (
                      b = o[6] = t - u,
                        x = Math.min(b / l.duration, 1),
                        w = 0,
                        S = s.length;
                      w < S;
                      w++
                    )
                      if (((P = s[w]), i((V = P.element)))) {
                        for (E in ((C = !1),
                        l.display !== n &&
                          null !== l.display &&
                          'none' !== l.display &&
                          ('flex' === l.display &&
                            ((A = [
                              '-webkit-box',
                              '-moz-box',
                              '-ms-flexbox',
                              '-webkit-flex',
                            ]),
                            d.each(A, function (e, t) {
                              y.setPropertyValue(V, 'display', t);
                            })),
                          y.setPropertyValue(V, 'display', l.display)),
                        l.visibility !== n &&
                          'hidden' !== l.visibility &&
                          y.setPropertyValue(V, 'visibility', l.visibility),
                        P))
                          if (P.hasOwnProperty(E) && 'element' !== E) {
                            if (
                              ((N = P[E]),
                              (O = F.isString(N.easing)
                                ? m.Easings[N.easing]
                                : N.easing),
                              F.isString(N.pattern)
                                ? ((j =
                                    1 === x
                                      ? function (e, t, r) {
                                          var n = N.endValue[t];
                                          return r ? Math.round(n) : n;
                                        }
                                      : function (e, t, r) {
                                          var n = N.startValue[t],
                                            a = N.endValue[t] - n,
                                            i = n + a * O(x, l, a);
                                          return r ? Math.round(i) : i;
                                        }),
                                  (H = N.pattern.replace(/{(\d+)(!)?}/g, j)))
                                : 1 === x
                                ? (H = N.endValue)
                                : ((q = N.endValue - N.startValue),
                                  (H = N.startValue + q * O(x, l, q))),
                              !f && H === N.currentValue)
                            )
                              continue;
                            (N.currentValue = H),
                              'tween' === E
                                ? (g = H)
                                : (y.Hooks.registered[E] &&
                                    ((z = y.Hooks.getRoot(E)),
                                    (L = i(V).rootPropertyValueCache[z]) &&
                                      (N.rootPropertyValue = L)),
                                  (R = y.setPropertyValue(
                                    V,
                                    E,
                                    N.currentValue +
                                      (k < 9 && 0 === parseFloat(H)
                                        ? ''
                                        : N.unitType),
                                    N.rootPropertyValue,
                                    N.scrollData,
                                  )),
                                  y.Hooks.registered[E] &&
                                    (y.Normalizations.registered[z]
                                      ? (i(V).rootPropertyValueCache[
                                          z
                                        ] = y.Normalizations.registered[z](
                                          'extract',
                                          null,
                                          R[1],
                                        ))
                                      : (i(V).rootPropertyValueCache[z] =
                                          R[1])),
                                  'transform' === R[0] && (C = !0));
                          }
                        l.mobileHA &&
                          i(V).transformCache.translate3d === n &&
                          ((i(V).transformCache.translate3d =
                            '(0px, 0px, 0px)'),
                          (C = !0)),
                          C && y.flushTransformCache(V);
                      }
                    l.display !== n &&
                      'none' !== l.display &&
                      (m.State.calls[a][2].display = !1),
                      l.visibility !== n &&
                        'hidden' !== l.visibility &&
                        (m.State.calls[a][2].visibility = !1),
                      l.progress &&
                        l.progress.call(
                          o[1],
                          o[1],
                          x,
                          Math.max(0, u + l.duration - t),
                          u,
                          g,
                        ),
                      1 === x && p(a);
                  }
              m.State.isTicking && v(c);
            }
            function p(e, t) {
              var r, a, o, s, l, u, c, p, f, g, h, b;
              if (!m.State.calls[e]) return !1;
              for (
                r = m.State.calls[e][0],
                  a = m.State.calls[e][1],
                  o = m.State.calls[e][2],
                  s = m.State.calls[e][4],
                  l = !1,
                  u = 0,
                  c = r.length;
                u < c;
                u++
              ) {
                if (
                  ((p = r[u].element),
                  t ||
                    o.loop ||
                    ('none' === o.display &&
                      y.setPropertyValue(p, 'display', o.display),
                    'hidden' === o.visibility &&
                      y.setPropertyValue(p, 'visibility', o.visibility)),
                  (f = i(p)),
                  !0 === o.loop ||
                    (d.queue(p)[1] !== n &&
                      /\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) ||
                    (f &&
                      ((f.isAnimating = !1),
                      (f.rootPropertyValueCache = {}),
                      (g = !1),
                      d.each(y.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                          a = f.transformCache[t];
                        f.transformCache[t] !== n &&
                          new RegExp('^\\(' + r + '[^.]').test(a) &&
                          ((g = !0), delete f.transformCache[t]);
                      }),
                      o.mobileHA &&
                        ((g = !0), delete f.transformCache.translate3d),
                      g && y.flushTransformCache(p),
                      y.Values.removeClass(p, 'velocity-animating'))),
                  !t && o.complete && !o.loop && u === c - 1)
                )
                  try {
                    o.complete.call(a, a);
                  } catch (e) {
                    setTimeout(function () {
                      throw e;
                    }, 1);
                  }
                s && !0 !== o.loop && s(a),
                  f &&
                    !0 === o.loop &&
                    !t &&
                    (d.each(f.tweensContainer, function (e, t) {
                      if (
                        /^rotate/.test(e) &&
                        (parseFloat(t.startValue) - parseFloat(t.endValue)) %
                          360 ==
                          0
                      ) {
                        var r = t.startValue;
                        (t.startValue = t.endValue), (t.endValue = r);
                      }
                      /^backgroundPosition/.test(e) &&
                        100 === parseFloat(t.endValue) &&
                        '%' === t.unitType &&
                        ((t.endValue = 0), (t.startValue = 100));
                    }),
                    m(p, 'reverse', { loop: !0, delay: o.delay })),
                  !1 !== o.queue && d.dequeue(p, o.queue);
              }
              for (
                m.State.calls[e] = !1, h = 0, b = m.State.calls.length;
                h < b;
                h++
              )
                if (!1 !== m.State.calls[h]) {
                  l = !0;
                  break;
                }
              !1 === l &&
                ((m.State.isTicking = !1),
                delete m.State.calls,
                (m.State.calls = []));
            }
            var d,
              f,
              g,
              m,
              h,
              y,
              b,
              v,
              x,
              w,
              S,
              P,
              k = (function () {
                var e, t;
                if (r.documentMode) return r.documentMode;
                for (e = 7; e > 4; e--)
                  if (
                    (((t = r.createElement('div')).innerHTML =
                      '\x3c!--[if IE ' + e + ']><span></span><![endif]--\x3e'),
                    t.getElementsByTagName('span').length)
                  )
                    return (t = null), e;
                return n;
              })(),
              V =
                ((P = 0),
                t.webkitRequestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  function (e) {
                    var t,
                      r = new Date().getTime();
                    return (
                      (t = Math.max(0, 16 - (r - P))),
                      (P = r + t),
                      setTimeout(function () {
                        e(r + t);
                      }, t)
                    );
                  }),
              T =
                ('function' != typeof (S = t.performance || {}).now &&
                  ((w =
                    S.timing && S.timing.navigationStart
                      ? S.timing.navigationStart
                      : new Date().getTime()),
                  (S.now = function () {
                    return new Date().getTime() - w;
                  })),
                S),
              C = (function () {
                var e = Array.prototype.slice;
                try {
                  return e.call(r.documentElement), e;
                } catch (t) {
                  return function (t, r) {
                    var n,
                      a,
                      i,
                      o,
                      s = this.length;
                    if (
                      ('number' != typeof t && (t = 0),
                      'number' != typeof r && (r = s),
                      this.slice)
                    )
                      return e.call(this, t, r);
                    if (
                      ((a = []),
                      (i = t >= 0 ? t : Math.max(0, s + t)),
                      (o = (r < 0 ? s + r : Math.min(r, s)) - i) > 0)
                    )
                      if (((a = new Array(o)), this.charAt))
                        for (n = 0; n < o; n++) a[n] = this.charAt(i + n);
                      else for (n = 0; n < o; n++) a[n] = this[i + n];
                    return a;
                  };
                }
              })(),
              A = function () {
                return Array.prototype.includes
                  ? function (e, t) {
                      return e.includes(t);
                    }
                  : Array.prototype.indexOf
                  ? function (e, t) {
                      return e.indexOf(t) >= 0;
                    }
                  : function (e, t) {
                      for (var r = 0; r < e.length; r++)
                        if (e[r] === t) return !0;
                      return !1;
                    };
              },
              F = {
                isNumber: function (e) {
                  return 'number' == typeof e;
                },
                isString: function (e) {
                  return 'string' == typeof e;
                },
                isArray:
                  Array.isArray ||
                  function (e) {
                    return (
                      '[object Array]' === Object.prototype.toString.call(e)
                    );
                  },
                isFunction: function (e) {
                  return (
                    '[object Function]' === Object.prototype.toString.call(e)
                  );
                },
                isNode: function (e) {
                  return e && e.nodeType;
                },
                isWrapped: function (e) {
                  return (
                    e &&
                    e !== t &&
                    F.isNumber(e.length) &&
                    !F.isString(e) &&
                    !F.isFunction(e) &&
                    !F.isNode(e) &&
                    (0 === e.length || F.isNode(e[0]))
                  );
                },
                isSVG: function (e) {
                  return t.SVGElement && e instanceof t.SVGElement;
                },
                isEmptyObject: function (e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                },
              },
              E = !1;
            if (
              (e.fn && e.fn.jquery
                ? ((d = e), (E = !0))
                : (d = t.Velocity.Utilities),
              k <= 8 && !E)
            )
              throw new Error(
                'Velocity: IE8 and below require jQuery to be loaded before Velocity.',
              );
            if (!(k <= 7))
              return (
                (f = 400),
                (g = 'swing'),
                (m = {
                  State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent,
                    ),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(
                      navigator.userAgent,
                    ),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement('div'),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: { count: 0 },
                  },
                  CSS: {},
                  Utilities: d,
                  Redirects: {},
                  Easings: {},
                  Promise: t.Promise,
                  defaults: {
                    queue: '',
                    duration: f,
                    easing: g,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0,
                  },
                  init: function (e) {
                    d.data(e, 'velocity', {
                      isSVG: F.isSVG(e),
                      isAnimating: !1,
                      computedStyle: null,
                      tweensContainer: null,
                      rootPropertyValueCache: {},
                      transformCache: {},
                    });
                  },
                  hook: null,
                  mock: !1,
                  version: { major: 1, minor: 5, patch: 0 },
                  debug: !1,
                  timestamp: !0,
                  pauseAll: function (e) {
                    var t = new Date().getTime();
                    d.each(m.State.calls, function (t, r) {
                      if (r) {
                        if (e !== n && (r[2].queue !== e || !1 === r[2].queue))
                          return !0;
                        r[5] = { resume: !1 };
                      }
                    }),
                      d.each(m.State.delayedElements, function (e, r) {
                        r && o(r, t);
                      });
                  },
                  resumeAll: function (e) {
                    new Date().getTime();
                    d.each(m.State.calls, function (t, r) {
                      if (r) {
                        if (e !== n && (r[2].queue !== e || !1 === r[2].queue))
                          return !0;
                        r[5] && (r[5].resume = !0);
                      }
                    }),
                      d.each(m.State.delayedElements, function (e, t) {
                        t && s(t);
                      });
                  },
                }),
                t.pageYOffset !== n
                  ? ((m.State.scrollAnchor = t),
                    (m.State.scrollPropertyLeft = 'pageXOffset'),
                    (m.State.scrollPropertyTop = 'pageYOffset'))
                  : ((m.State.scrollAnchor =
                      r.documentElement || r.body.parentNode || r.body),
                    (m.State.scrollPropertyLeft = 'scrollLeft'),
                    (m.State.scrollPropertyTop = 'scrollTop')),
                (h = (function () {
                  function e(e) {
                    return -e.tension * e.x - e.friction * e.v;
                  }
                  function t(t, r, n) {
                    var a = {
                      x: t.x + n.dx * r,
                      v: t.v + n.dv * r,
                      tension: t.tension,
                      friction: t.friction,
                    };
                    return { dx: a.v, dv: e(a) };
                  }
                  function r(r, n) {
                    var a = { dx: r.v, dv: e(r) },
                      i = t(r, 0.5 * n, a),
                      o = t(r, 0.5 * n, i),
                      s = t(r, n, o),
                      l = (1 / 6) * (a.dx + 2 * (i.dx + o.dx) + s.dx),
                      u = (1 / 6) * (a.dv + 2 * (i.dv + o.dv) + s.dv);
                    return (r.x = r.x + l * n), (r.v = r.v + u * n), r;
                  }
                  return function e(t, n, a) {
                    var i,
                      o,
                      s,
                      l = { x: -1, v: 0, tension: null, friction: null },
                      u = [0],
                      c = 0;
                    for (
                      t = parseFloat(t) || 500,
                        n = parseFloat(n) || 20,
                        a = a || null,
                        l.tension = t,
                        l.friction = n,
                        o = (i = null !== a)
                          ? ((c = e(t, n)) / a) * 0.016
                          : 0.016;
                      (s = r(s || l, o)),
                        u.push(1 + s.x),
                        (c += 16),
                        Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;

                    );
                    return i
                      ? function (e) {
                          return u[(e * (u.length - 1)) | 0];
                        }
                      : c;
                  };
                })()),
                (m.Easings = {
                  linear: function (e) {
                    return e;
                  },
                  swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                  },
                }),
                d.each(
                  [
                    ['ease', [0.25, 0.1, 0.25, 1]],
                    ['ease-in', [0.42, 0, 1, 1]],
                    ['ease-out', [0, 0, 0.58, 1]],
                    ['ease-in-out', [0.42, 0, 0.58, 1]],
                    ['easeInSine', [0.47, 0, 0.745, 0.715]],
                    ['easeOutSine', [0.39, 0.575, 0.565, 1]],
                    ['easeInOutSine', [0.445, 0.05, 0.55, 0.95]],
                    ['easeInQuad', [0.55, 0.085, 0.68, 0.53]],
                    ['easeOutQuad', [0.25, 0.46, 0.45, 0.94]],
                    ['easeInOutQuad', [0.455, 0.03, 0.515, 0.955]],
                    ['easeInCubic', [0.55, 0.055, 0.675, 0.19]],
                    ['easeOutCubic', [0.215, 0.61, 0.355, 1]],
                    ['easeInOutCubic', [0.645, 0.045, 0.355, 1]],
                    ['easeInQuart', [0.895, 0.03, 0.685, 0.22]],
                    ['easeOutQuart', [0.165, 0.84, 0.44, 1]],
                    ['easeInOutQuart', [0.77, 0, 0.175, 1]],
                    ['easeInQuint', [0.755, 0.05, 0.855, 0.06]],
                    ['easeOutQuint', [0.23, 1, 0.32, 1]],
                    ['easeInOutQuint', [0.86, 0, 0.07, 1]],
                    ['easeInExpo', [0.95, 0.05, 0.795, 0.035]],
                    ['easeOutExpo', [0.19, 1, 0.22, 1]],
                    ['easeInOutExpo', [1, 0, 0, 1]],
                    ['easeInCirc', [0.6, 0.04, 0.98, 0.335]],
                    ['easeOutCirc', [0.075, 0.82, 0.165, 1]],
                    ['easeInOutCirc', [0.785, 0.135, 0.15, 0.86]],
                  ],
                  function (e, t) {
                    m.Easings[t[0]] = l.apply(null, t[1]);
                  },
                ),
                (y = m.CSS = {
                  RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
                  },
                  Lists: {
                    colors: [
                      'fill',
                      'stroke',
                      'stopColor',
                      'color',
                      'backgroundColor',
                      'borderColor',
                      'borderTopColor',
                      'borderRightColor',
                      'borderBottomColor',
                      'borderLeftColor',
                      'outlineColor',
                    ],
                    transformsBase: [
                      'translateX',
                      'translateY',
                      'scale',
                      'scaleX',
                      'scaleY',
                      'skewX',
                      'skewY',
                      'rotateZ',
                    ],
                    transforms3D: [
                      'transformPerspective',
                      'translateZ',
                      'scaleZ',
                      'rotateX',
                      'rotateY',
                    ],
                    units: [
                      '%',
                      'em',
                      'ex',
                      'ch',
                      'rem',
                      'vw',
                      'vh',
                      'vmin',
                      'vmax',
                      'cm',
                      'mm',
                      'Q',
                      'in',
                      'pc',
                      'pt',
                      'px',
                      'deg',
                      'grad',
                      'rad',
                      'turn',
                      's',
                      'ms',
                    ],
                    colorNames: {
                      aliceblue: '240,248,255',
                      antiquewhite: '250,235,215',
                      aquamarine: '127,255,212',
                      aqua: '0,255,255',
                      azure: '240,255,255',
                      beige: '245,245,220',
                      bisque: '255,228,196',
                      black: '0,0,0',
                      blanchedalmond: '255,235,205',
                      blueviolet: '138,43,226',
                      blue: '0,0,255',
                      brown: '165,42,42',
                      burlywood: '222,184,135',
                      cadetblue: '95,158,160',
                      chartreuse: '127,255,0',
                      chocolate: '210,105,30',
                      coral: '255,127,80',
                      cornflowerblue: '100,149,237',
                      cornsilk: '255,248,220',
                      crimson: '220,20,60',
                      cyan: '0,255,255',
                      darkblue: '0,0,139',
                      darkcyan: '0,139,139',
                      darkgoldenrod: '184,134,11',
                      darkgray: '169,169,169',
                      darkgrey: '169,169,169',
                      darkgreen: '0,100,0',
                      darkkhaki: '189,183,107',
                      darkmagenta: '139,0,139',
                      darkolivegreen: '85,107,47',
                      darkorange: '255,140,0',
                      darkorchid: '153,50,204',
                      darkred: '139,0,0',
                      darksalmon: '233,150,122',
                      darkseagreen: '143,188,143',
                      darkslateblue: '72,61,139',
                      darkslategray: '47,79,79',
                      darkturquoise: '0,206,209',
                      darkviolet: '148,0,211',
                      deeppink: '255,20,147',
                      deepskyblue: '0,191,255',
                      dimgray: '105,105,105',
                      dimgrey: '105,105,105',
                      dodgerblue: '30,144,255',
                      firebrick: '178,34,34',
                      floralwhite: '255,250,240',
                      forestgreen: '34,139,34',
                      fuchsia: '255,0,255',
                      gainsboro: '220,220,220',
                      ghostwhite: '248,248,255',
                      gold: '255,215,0',
                      goldenrod: '218,165,32',
                      gray: '128,128,128',
                      grey: '128,128,128',
                      greenyellow: '173,255,47',
                      green: '0,128,0',
                      honeydew: '240,255,240',
                      hotpink: '255,105,180',
                      indianred: '205,92,92',
                      indigo: '75,0,130',
                      ivory: '255,255,240',
                      khaki: '240,230,140',
                      lavenderblush: '255,240,245',
                      lavender: '230,230,250',
                      lawngreen: '124,252,0',
                      lemonchiffon: '255,250,205',
                      lightblue: '173,216,230',
                      lightcoral: '240,128,128',
                      lightcyan: '224,255,255',
                      lightgoldenrodyellow: '250,250,210',
                      lightgray: '211,211,211',
                      lightgrey: '211,211,211',
                      lightgreen: '144,238,144',
                      lightpink: '255,182,193',
                      lightsalmon: '255,160,122',
                      lightseagreen: '32,178,170',
                      lightskyblue: '135,206,250',
                      lightslategray: '119,136,153',
                      lightsteelblue: '176,196,222',
                      lightyellow: '255,255,224',
                      limegreen: '50,205,50',
                      lime: '0,255,0',
                      linen: '250,240,230',
                      magenta: '255,0,255',
                      maroon: '128,0,0',
                      mediumaquamarine: '102,205,170',
                      mediumblue: '0,0,205',
                      mediumorchid: '186,85,211',
                      mediumpurple: '147,112,219',
                      mediumseagreen: '60,179,113',
                      mediumslateblue: '123,104,238',
                      mediumspringgreen: '0,250,154',
                      mediumturquoise: '72,209,204',
                      mediumvioletred: '199,21,133',
                      midnightblue: '25,25,112',
                      mintcream: '245,255,250',
                      mistyrose: '255,228,225',
                      moccasin: '255,228,181',
                      navajowhite: '255,222,173',
                      navy: '0,0,128',
                      oldlace: '253,245,230',
                      olivedrab: '107,142,35',
                      olive: '128,128,0',
                      orangered: '255,69,0',
                      orange: '255,165,0',
                      orchid: '218,112,214',
                      palegoldenrod: '238,232,170',
                      palegreen: '152,251,152',
                      paleturquoise: '175,238,238',
                      palevioletred: '219,112,147',
                      papayawhip: '255,239,213',
                      peachpuff: '255,218,185',
                      peru: '205,133,63',
                      pink: '255,192,203',
                      plum: '221,160,221',
                      powderblue: '176,224,230',
                      purple: '128,0,128',
                      red: '255,0,0',
                      rosybrown: '188,143,143',
                      royalblue: '65,105,225',
                      saddlebrown: '139,69,19',
                      salmon: '250,128,114',
                      sandybrown: '244,164,96',
                      seagreen: '46,139,87',
                      seashell: '255,245,238',
                      sienna: '160,82,45',
                      silver: '192,192,192',
                      skyblue: '135,206,235',
                      slateblue: '106,90,205',
                      slategray: '112,128,144',
                      snow: '255,250,250',
                      springgreen: '0,255,127',
                      steelblue: '70,130,180',
                      tan: '210,180,140',
                      teal: '0,128,128',
                      thistle: '216,191,216',
                      tomato: '255,99,71',
                      turquoise: '64,224,208',
                      violet: '238,130,238',
                      wheat: '245,222,179',
                      whitesmoke: '245,245,245',
                      white: '255,255,255',
                      yellowgreen: '154,205,50',
                      yellow: '255,255,0',
                    },
                  },
                  Hooks: {
                    templates: {
                      textShadow: ['Color X Y Blur', 'black 0px 0px 0px'],
                      boxShadow: [
                        'Color X Y Blur Spread',
                        'black 0px 0px 0px 0px',
                      ],
                      clip: ['Top Right Bottom Left', '0px 0px 0px 0px'],
                      backgroundPosition: ['X Y', '0% 0%'],
                      transformOrigin: ['X Y Z', '50% 50% 0px'],
                      perspectiveOrigin: ['X Y', '50% 50%'],
                    },
                    registered: {},
                    register: function () {
                      var e, t, r, n, a, i, o, s, l;
                      for (e = 0; e < y.Lists.colors.length; e++)
                        (t =
                          'color' === y.Lists.colors[e]
                            ? '0 0 0 1'
                            : '255 255 255 1'),
                          (y.Hooks.templates[y.Lists.colors[e]] = [
                            'Red Green Blue Alpha',
                            t,
                          ]);
                      if (k)
                        for (r in y.Hooks.templates)
                          y.Hooks.templates.hasOwnProperty(r) &&
                            ((a = (n = y.Hooks.templates[r])[0].split(' ')),
                            (i = n[1].match(y.RegEx.valueSplit)),
                            'Color' === a[0] &&
                              (a.push(a.shift()),
                              i.push(i.shift()),
                              (y.Hooks.templates[r] = [
                                a.join(' '),
                                i.join(' '),
                              ])));
                      for (r in y.Hooks.templates)
                        if (y.Hooks.templates.hasOwnProperty(r))
                          for (o in (a = (n = y.Hooks.templates[r])[0].split(
                            ' ',
                          )))
                            a.hasOwnProperty(o) &&
                              ((s = r + a[o]),
                              (l = o),
                              (y.Hooks.registered[s] = [r, l]));
                    },
                    getRoot: function (e) {
                      var t = y.Hooks.registered[e];
                      return t ? t[0] : e;
                    },
                    getUnit: function (e, t) {
                      var r =
                        (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || '';
                      return r && A(y.Lists.units, r) ? r : '';
                    },
                    fixColors: function (e) {
                      return e.replace(
                        /(rgba?\(\s*)?(\b[a-z]+\b)/g,
                        function (e, t, r) {
                          return y.Lists.colorNames.hasOwnProperty(r)
                            ? (t || 'rgba(') +
                                y.Lists.colorNames[r] +
                                (t ? '' : ',1)')
                            : t + r;
                        },
                      );
                    },
                    cleanRootPropertyValue: function (e, t) {
                      return (
                        y.RegEx.valueUnwrap.test(t) &&
                          (t = t.match(y.RegEx.valueUnwrap)[1]),
                        y.Values.isCSSNullValue(t) &&
                          (t = y.Hooks.templates[e][1]),
                        t
                      );
                    },
                    extractValue: function (e, t) {
                      var r,
                        n,
                        a = y.Hooks.registered[e];
                      return a
                        ? ((r = a[0]),
                          (n = a[1]),
                          (t = y.Hooks.cleanRootPropertyValue(r, t))
                            .toString()
                            .match(y.RegEx.valueSplit)[n])
                        : t;
                    },
                    injectValue: function (e, t, r) {
                      var n,
                        a,
                        i,
                        o = y.Hooks.registered[e];
                      return o
                        ? ((n = o[0]),
                          (a = o[1]),
                          ((i = (r = y.Hooks.cleanRootPropertyValue(n, r))
                            .toString()
                            .match(y.RegEx.valueSplit))[a] = t),
                          i.join(' '))
                        : r;
                    },
                  },
                  Normalizations: {
                    registered: {
                      clip: function (e, t, r) {
                        switch (e) {
                          case 'name':
                            return 'clip';
                          case 'extract':
                            var n;
                            return (n = y.RegEx.wrappedValueAlreadyExtracted.test(
                              r,
                            )
                              ? r
                              : (n = r.toString().match(y.RegEx.valueUnwrap))
                              ? n[1].replace(/,(\s+)?/g, ' ')
                              : r);
                          case 'inject':
                            return 'rect(' + r + ')';
                        }
                      },
                      blur: function (e, t, r) {
                        var n, a;
                        switch (e) {
                          case 'name':
                            return m.State.isFirefox
                              ? 'filter'
                              : '-webkit-filter';
                          case 'extract':
                            return (
                              (n = parseFloat(r)) ||
                                0 === n ||
                                (n = (a = r
                                  .toString()
                                  .match(/blur\(([0-9]+[A-z]+)\)/i))
                                  ? a[1]
                                  : 0),
                              n
                            );
                          case 'inject':
                            return parseFloat(r) ? 'blur(' + r + ')' : 'none';
                        }
                      },
                      opacity: function (e, t, r) {
                        if (k <= 8)
                          switch (e) {
                            case 'name':
                              return 'filter';
                            case 'extract':
                              var n = r
                                .toString()
                                .match(/alpha\(opacity=(.*)\)/i);
                              return (r = n ? n[1] / 100 : 1);
                            case 'inject':
                              return (
                                (t.style.zoom = 1),
                                parseFloat(r) >= 1
                                  ? ''
                                  : 'alpha(opacity=' +
                                    parseInt(100 * parseFloat(r), 10) +
                                    ')'
                              );
                          }
                        else
                          switch (e) {
                            case 'name':
                              return 'opacity';
                            case 'extract':
                            case 'inject':
                              return r;
                          }
                      },
                    },
                    register: function () {
                      function e(e, t, r) {
                        var n,
                          a,
                          i,
                          o,
                          s,
                          l =
                            'border-box' ===
                            y
                              .getPropertyValue(t, 'boxSizing')
                              .toString()
                              .toLowerCase();
                        if (l === (r || !1)) {
                          for (
                            i = 0,
                              s = [
                                'padding' +
                                  (o =
                                    'width' === e
                                      ? ['Left', 'Right']
                                      : ['Top', 'Bottom'])[0],
                                'padding' + o[1],
                                'border' + o[0] + 'Width',
                                'border' + o[1] + 'Width',
                              ],
                              n = 0;
                            n < s.length;
                            n++
                          )
                            (a = parseFloat(y.getPropertyValue(t, s[n]))),
                              isNaN(a) || (i += a);
                          return r ? -i : i;
                        }
                        return 0;
                      }
                      function t(t, r) {
                        return function (n, a, i) {
                          switch (n) {
                            case 'name':
                              return t;
                            case 'extract':
                              return parseFloat(i) + e(t, a, r);
                            case 'inject':
                              return parseFloat(i) - e(t, a, r) + 'px';
                          }
                        };
                      }
                      var r, a;
                      for (
                        (k && !(k > 9)) ||
                          m.State.isGingerbread ||
                          (y.Lists.transformsBase = y.Lists.transformsBase.concat(
                            y.Lists.transforms3D,
                          )),
                          r = 0;
                        r < y.Lists.transformsBase.length;
                        r++
                      )
                        !(function () {
                          var e = y.Lists.transformsBase[r];
                          y.Normalizations.registered[e] = function (t, r, a) {
                            switch (t) {
                              case 'name':
                                return 'transform';
                              case 'extract':
                                return i(r) === n ||
                                  i(r).transformCache[e] === n
                                  ? /^scale/i.test(e)
                                    ? 1
                                    : 0
                                  : i(r).transformCache[e].replace(/[()]/g, '');
                              case 'inject':
                                var o = !1;
                                switch (e.substr(0, e.length - 1)) {
                                  case 'translate':
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                    break;
                                  case 'scal':
                                  case 'scale':
                                    m.State.isAndroid &&
                                      i(r).transformCache[e] === n &&
                                      a < 1 &&
                                      (a = 1),
                                      (o = !/(\d)$/i.test(a));
                                    break;
                                  case 'skew':
                                  case 'rotate':
                                    o = !/(deg|\d)$/i.test(a);
                                }
                                return (
                                  o || (i(r).transformCache[e] = '(' + a + ')'),
                                  i(r).transformCache[e]
                                );
                            }
                          };
                        })();
                      for (a = 0; a < y.Lists.colors.length; a++)
                        !(function () {
                          var e = y.Lists.colors[a];
                          y.Normalizations.registered[e] = function (t, r, a) {
                            var i, o, s;
                            switch (t) {
                              case 'name':
                                return e;
                              case 'extract':
                                return (
                                  y.RegEx.wrappedValueAlreadyExtracted.test(a)
                                    ? (i = a)
                                    : ((s = {
                                        black: 'rgb(0, 0, 0)',
                                        blue: 'rgb(0, 0, 255)',
                                        gray: 'rgb(128, 128, 128)',
                                        green: 'rgb(0, 128, 0)',
                                        red: 'rgb(255, 0, 0)',
                                        white: 'rgb(255, 255, 255)',
                                      }),
                                      /^[A-z]+$/i.test(a)
                                        ? (o = s[a] !== n ? s[a] : s.black)
                                        : y.RegEx.isHex.test(a)
                                        ? (o =
                                            'rgb(' +
                                            y.Values.hexToRgb(a).join(' ') +
                                            ')')
                                        : /^rgba?\(/i.test(a) || (o = s.black),
                                      (i = (o || a)
                                        .toString()
                                        .match(y.RegEx.valueUnwrap)[1]
                                        .replace(/,(\s+)?/g, ' '))),
                                  (!k || k > 8) &&
                                    3 === i.split(' ').length &&
                                    (i += ' 1'),
                                  i
                                );
                              case 'inject':
                                return /^rgb/.test(a)
                                  ? a
                                  : (k <= 8
                                      ? 4 === a.split(' ').length &&
                                        (a = a
                                          .split(/\s+/)
                                          .slice(0, 3)
                                          .join(' '))
                                      : 3 === a.split(' ').length &&
                                        (a += ' 1'),
                                    (k <= 8 ? 'rgb' : 'rgba') +
                                      '(' +
                                      a
                                        .replace(/\s+/g, ',')
                                        .replace(/\.(\d)+(?=,)/g, '') +
                                      ')');
                            }
                          };
                        })();
                      (y.Normalizations.registered.innerWidth = t('width', !0)),
                        (y.Normalizations.registered.innerHeight = t(
                          'height',
                          !0,
                        )),
                        (y.Normalizations.registered.outerWidth = t('width')),
                        (y.Normalizations.registered.outerHeight = t('height'));
                    },
                  },
                  Names: {
                    camelCase: function (e) {
                      return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase();
                      });
                    },
                    SVGAttribute: function (e) {
                      var t = 'width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2';
                      return (
                        (k || (m.State.isAndroid && !m.State.isChrome)) &&
                          (t += '|transform'),
                        new RegExp('^(' + t + ')$', 'i').test(e)
                      );
                    },
                    prefixCheck: function (e) {
                      var t, r, n, a;
                      if (m.State.prefixMatches[e])
                        return [m.State.prefixMatches[e], !0];
                      for (
                        r = 0,
                          n = (t = ['', 'Webkit', 'Moz', 'ms', 'O']).length;
                        r < n;
                        r++
                      )
                        if (
                          ((a =
                            0 === r
                              ? e
                              : t[r] +
                                e.replace(/^\w/, function (e) {
                                  return e.toUpperCase();
                                })),
                          F.isString(m.State.prefixElement.style[a]))
                        )
                          return (m.State.prefixMatches[e] = a), [a, !0];
                      return [e, !1];
                    },
                  },
                  Values: {
                    hexToRgb: function (e) {
                      var t;
                      return (
                        (e = e.replace(
                          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                          function (e, t, r, n) {
                            return t + t + r + r + n + n;
                          },
                        )),
                        (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                          e,
                        ))
                          ? [
                              parseInt(t[1], 16),
                              parseInt(t[2], 16),
                              parseInt(t[3], 16),
                            ]
                          : [0, 0, 0]
                      );
                    },
                    isCSSNullValue: function (e) {
                      return (
                        !e ||
                        /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(
                          e,
                        )
                      );
                    },
                    getUnitType: function (e) {
                      return /^(rotate|skew)/i.test(e)
                        ? 'deg'
                        : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                            e,
                          )
                        ? ''
                        : 'px';
                    },
                    getDisplayType: function (e) {
                      var t = e && e.tagName.toString().toLowerCase();
                      return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                        t,
                      )
                        ? 'inline'
                        : /^(li)$/i.test(t)
                        ? 'list-item'
                        : /^(tr)$/i.test(t)
                        ? 'table-row'
                        : /^(table)$/i.test(t)
                        ? 'table'
                        : /^(tbody)$/i.test(t)
                        ? 'table-row-group'
                        : 'block';
                    },
                    addClass: function (e, t) {
                      if (e)
                        if (e.classList) e.classList.add(t);
                        else if (F.isString(e.className))
                          e.className += (e.className.length ? ' ' : '') + t;
                        else {
                          var r =
                            e.getAttribute(k <= 7 ? 'className' : 'class') ||
                            '';
                          e.setAttribute('class', r + (r ? ' ' : '') + t);
                        }
                    },
                    removeClass: function (e, t) {
                      if (e)
                        if (e.classList) e.classList.remove(t);
                        else if (F.isString(e.className))
                          e.className = e.className
                            .toString()
                            .replace(
                              new RegExp(
                                '(^|\\s)' + t.split(' ').join('|') + '(\\s|$)',
                                'gi',
                              ),
                              ' ',
                            );
                        else {
                          var r =
                            e.getAttribute(k <= 7 ? 'className' : 'class') ||
                            '';
                          e.setAttribute(
                            'class',
                            r.replace(
                              new RegExp(
                                '(^|s)' + t.split(' ').join('|') + '(s|$)',
                                'gi',
                              ),
                              ' ',
                            ),
                          );
                        }
                    },
                  },
                  getPropertyValue: function (e, r, a, o) {
                    function s(e, r) {
                      var a,
                        l,
                        u,
                        c,
                        p,
                        f,
                        g = 0;
                      if (k <= 8) g = d.css(e, r);
                      else {
                        if (
                          ((a = !1),
                          /^(width|height)$/.test(r) &&
                            0 === y.getPropertyValue(e, 'display') &&
                            ((a = !0),
                            y.setPropertyValue(
                              e,
                              'display',
                              y.Values.getDisplayType(e),
                            )),
                          (l = function () {
                            a && y.setPropertyValue(e, 'display', 'none');
                          }),
                          !o)
                        ) {
                          if (
                            'height' === r &&
                            'border-box' !==
                              y
                                .getPropertyValue(e, 'boxSizing')
                                .toString()
                                .toLowerCase()
                          )
                            return (
                              (u =
                                e.offsetHeight -
                                (parseFloat(
                                  y.getPropertyValue(e, 'borderTopWidth'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'borderBottomWidth'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'paddingTop'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'paddingBottom'),
                                ) || 0)),
                              l(),
                              u
                            );
                          if (
                            'width' === r &&
                            'border-box' !==
                              y
                                .getPropertyValue(e, 'boxSizing')
                                .toString()
                                .toLowerCase()
                          )
                            return (
                              (c =
                                e.offsetWidth -
                                (parseFloat(
                                  y.getPropertyValue(e, 'borderLeftWidth'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'borderRightWidth'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'paddingLeft'),
                                ) || 0) -
                                (parseFloat(
                                  y.getPropertyValue(e, 'paddingRight'),
                                ) || 0)),
                              l(),
                              c
                            );
                        }
                        (p =
                          i(e) === n
                            ? t.getComputedStyle(e, null)
                            : i(e).computedStyle
                            ? i(e).computedStyle
                            : (i(e).computedStyle = t.getComputedStyle(
                                e,
                                null,
                              ))),
                          'borderColor' === r && (r = 'borderTopColor'),
                          ('' !==
                            (g =
                              9 === k && 'filter' === r
                                ? p.getPropertyValue(r)
                                : p[r]) &&
                            null !== g) ||
                            (g = e.style[r]),
                          l();
                      }
                      return (
                        'auto' === g &&
                          /^(top|right|bottom|left)$/i.test(r) &&
                          ('fixed' === (f = s(e, 'position')) ||
                            ('absolute' === f && /top|left/i.test(r))) &&
                          (g = d(e).position()[r] + 'px'),
                        g
                      );
                    }
                    var l, u, c, p, f, g;
                    if (
                      (y.Hooks.registered[r]
                        ? ((u = r),
                          (c = y.Hooks.getRoot(u)),
                          a === n &&
                            (a = y.getPropertyValue(
                              e,
                              y.Names.prefixCheck(c)[0],
                            )),
                          y.Normalizations.registered[c] &&
                            (a = y.Normalizations.registered[c](
                              'extract',
                              e,
                              a,
                            )),
                          (l = y.Hooks.extractValue(u, a)))
                        : y.Normalizations.registered[r] &&
                          ('transform' !==
                            (p = y.Normalizations.registered[r]('name', e)) &&
                            ((f = s(e, y.Names.prefixCheck(p)[0])),
                            y.Values.isCSSNullValue(f) &&
                              y.Hooks.templates[r] &&
                              (f = y.Hooks.templates[r][1])),
                          (l = y.Normalizations.registered[r](
                            'extract',
                            e,
                            f,
                          ))),
                      !/^[\d-]/.test(l))
                    )
                      if ((g = i(e)) && g.isSVG && y.Names.SVGAttribute(r))
                        if (/^(height|width)$/i.test(r))
                          try {
                            l = e.getBBox()[r];
                          } catch (e) {
                            l = 0;
                          }
                        else l = e.getAttribute(r);
                      else l = s(e, y.Names.prefixCheck(r)[0]);
                    return (
                      y.Values.isCSSNullValue(l) && (l = 0),
                      m.debug >= 2 && console.log('Get ' + r + ': ' + l),
                      l
                    );
                  },
                  setPropertyValue: function (e, r, n, a, o) {
                    var s,
                      l,
                      u,
                      c = r;
                    if ('scroll' === r)
                      o.container
                        ? (o.container['scroll' + o.direction] = n)
                        : 'Left' === o.direction
                        ? t.scrollTo(n, o.alternateValue)
                        : t.scrollTo(o.alternateValue, n);
                    else if (
                      y.Normalizations.registered[r] &&
                      'transform' === y.Normalizations.registered[r]('name', e)
                    )
                      y.Normalizations.registered[r]('inject', e, n),
                        (c = 'transform'),
                        (n = i(e).transformCache[r]);
                    else {
                      if (
                        (y.Hooks.registered[r] &&
                          ((s = r),
                          (l = y.Hooks.getRoot(r)),
                          (a = a || y.getPropertyValue(e, l)),
                          (n = y.Hooks.injectValue(s, n, a)),
                          (r = l)),
                        y.Normalizations.registered[r] &&
                          ((n = y.Normalizations.registered[r]('inject', e, n)),
                          (r = y.Normalizations.registered[r]('name', e))),
                        (c = y.Names.prefixCheck(r)[0]),
                        k <= 8)
                      )
                        try {
                          e.style[c] = n;
                        } catch (e) {
                          m.debug &&
                            console.log(
                              'Browser does not support [' +
                                n +
                                '] for [' +
                                c +
                                ']',
                            );
                        }
                      else
                        (u = i(e)) && u.isSVG && y.Names.SVGAttribute(r)
                          ? e.setAttribute(r, n)
                          : (e.style[c] = n);
                      m.debug >= 2 &&
                        console.log('Set ' + r + ' (' + c + '): ' + n);
                    }
                    return [c, n];
                  },
                  flushTransformCache: function (e) {
                    var t,
                      r,
                      n,
                      a,
                      o = '',
                      s = i(e);
                    (k || (m.State.isAndroid && !m.State.isChrome)) &&
                    s &&
                    s.isSVG
                      ? ((r = {
                          translate: [
                            (t = function (t) {
                              return parseFloat(y.getPropertyValue(e, t));
                            })('translateX'),
                            t('translateY'),
                          ],
                          skewX: [t('skewX')],
                          skewY: [t('skewY')],
                          scale:
                            1 !== t('scale')
                              ? [t('scale'), t('scale')]
                              : [t('scaleX'), t('scaleY')],
                          rotate: [t('rotateZ'), 0, 0],
                        }),
                        d.each(i(e).transformCache, function (e) {
                          /^translate/i.test(e)
                            ? (e = 'translate')
                            : /^scale/i.test(e)
                            ? (e = 'scale')
                            : /^rotate/i.test(e) && (e = 'rotate'),
                            r[e] &&
                              ((o += e + '(' + r[e].join(' ') + ') '),
                              delete r[e]);
                        }))
                      : (d.each(i(e).transformCache, function (t) {
                          if (
                            ((n = i(e).transformCache[t]),
                            'transformPerspective' === t)
                          )
                            return (a = n), !0;
                          9 === k && 'rotateZ' === t && (t = 'rotate'),
                            (o += t + n + ' ');
                        }),
                        a && (o = 'perspective' + a + ' ' + o)),
                      y.setPropertyValue(e, 'transform', o);
                  },
                }).Hooks.register(),
                y.Normalizations.register(),
                (m.hook = function (e, t, r) {
                  var o;
                  return (
                    (e = a(e)),
                    d.each(e, function (e, a) {
                      if ((i(a) === n && m.init(a), r === n))
                        o === n && (o = y.getPropertyValue(a, t));
                      else {
                        var s = y.setPropertyValue(a, t, r);
                        'transform' === s[0] && m.CSS.flushTransformCache(a),
                          (o = s);
                      }
                    }),
                    o
                  );
                }),
                (b = function () {
                  function e() {
                    return g ? P.promise || null : h;
                  }
                  var l,
                    g,
                    h,
                    v,
                    x,
                    w,
                    S,
                    P,
                    k,
                    V,
                    T,
                    C,
                    E,
                    N,
                    H,
                    O,
                    j,
                    q,
                    z,
                    L,
                    R,
                    M,
                    W =
                      arguments[0] &&
                      (arguments[0].p ||
                        (d.isPlainObject(arguments[0].properties) &&
                          !arguments[0].properties.names) ||
                        F.isString(arguments[0].properties));
                  if (
                    (F.isWrapped(this)
                      ? ((g = !1), (v = 0), (x = this), (h = this))
                      : ((g = !0),
                        (v = 1),
                        (x = W
                          ? arguments[0].elements || arguments[0].e
                          : arguments[0])),
                    (P = { promise: null, resolver: null, rejecter: null }),
                    g &&
                      m.Promise &&
                      (P.promise = new m.Promise(function (e, t) {
                        (P.resolver = e), (P.rejecter = t);
                      })),
                    W
                      ? ((w = arguments[0].properties || arguments[0].p),
                        (S = arguments[0].options || arguments[0].o))
                      : ((w = arguments[v]), (S = arguments[v + 1])),
                    (x = a(x)))
                  ) {
                    if (
                      ((k = x.length),
                      (V = 0),
                      !/^(stop|finish|finishAll|pause|resume)$/i.test(w) &&
                        !d.isPlainObject(S))
                    )
                      for (S = {}, T = v + 1; T < arguments.length; T++)
                        F.isArray(arguments[T]) ||
                        (!/^(fast|normal|slow)$/i.test(arguments[T]) &&
                          !/^\d/.test(arguments[T]))
                          ? F.isString(arguments[T]) || F.isArray(arguments[T])
                            ? (S.easing = arguments[T])
                            : F.isFunction(arguments[T]) &&
                              (S.complete = arguments[T])
                          : (S.duration = arguments[T]);
                    switch (w) {
                      case 'scroll':
                        C = 'scroll';
                        break;
                      case 'reverse':
                        C = 'reverse';
                        break;
                      case 'pause':
                        return (
                          (E = new Date().getTime()),
                          d.each(x, function (e, t) {
                            o(t, E);
                          }),
                          d.each(m.State.calls, function (e, t) {
                            var r = !1;
                            t &&
                              d.each(t[1], function (e, a) {
                                var i = S === n ? '' : S;
                                return (
                                  (!0 !== i &&
                                    t[2].queue !== i &&
                                    (S !== n || !1 !== t[2].queue)) ||
                                  (d.each(x, function (e, n) {
                                    if (n === a)
                                      return (
                                        (t[5] = { resume: !1 }), (r = !0), !1
                                      );
                                  }),
                                  !r && void 0)
                                );
                              });
                          }),
                          e()
                        );
                      case 'resume':
                        return (
                          d.each(x, function (e, t) {
                            s(t);
                          }),
                          d.each(m.State.calls, function (e, t) {
                            var r = !1;
                            t &&
                              d.each(t[1], function (e, a) {
                                var i = S === n ? '' : S;
                                return (
                                  (!0 !== i &&
                                    t[2].queue !== i &&
                                    (S !== n || !1 !== t[2].queue)) ||
                                  !t[5] ||
                                  (d.each(x, function (e, n) {
                                    if (n === a)
                                      return (t[5].resume = !0), (r = !0), !1;
                                  }),
                                  !r && void 0)
                                );
                              });
                          }),
                          e()
                        );
                      case 'finish':
                      case 'finishAll':
                      case 'stop':
                        return (
                          d.each(x, function (e, t) {
                            i(t) &&
                              i(t).delayTimer &&
                              (clearTimeout(i(t).delayTimer.setTimeout),
                              i(t).delayTimer.next && i(t).delayTimer.next(),
                              delete i(t).delayTimer),
                              'finishAll' !== w ||
                                (!0 !== S && !F.isString(S)) ||
                                (d.each(
                                  d.queue(t, F.isString(S) ? S : ''),
                                  function (e, t) {
                                    F.isFunction(t) && t();
                                  },
                                ),
                                d.queue(t, F.isString(S) ? S : '', []));
                          }),
                          (N = []),
                          d.each(m.State.calls, function (e, t) {
                            t &&
                              d.each(t[1], function (r, a) {
                                var o = S === n ? '' : S;
                                if (
                                  !0 !== o &&
                                  t[2].queue !== o &&
                                  (S !== n || !1 !== t[2].queue)
                                )
                                  return !0;
                                d.each(x, function (r, n) {
                                  if (n === a)
                                    if (
                                      ((!0 === S || F.isString(S)) &&
                                        (d.each(
                                          d.queue(n, F.isString(S) ? S : ''),
                                          function (e, t) {
                                            F.isFunction(t) && t(null, !0);
                                          },
                                        ),
                                        d.queue(n, F.isString(S) ? S : '', [])),
                                      'stop' === w)
                                    ) {
                                      var s = i(n);
                                      s &&
                                        s.tweensContainer &&
                                        !1 !== o &&
                                        d.each(
                                          s.tweensContainer,
                                          function (e, t) {
                                            t.endValue = t.currentValue;
                                          },
                                        ),
                                        N.push(e);
                                    } else
                                      ('finish' !== w && 'finishAll' !== w) ||
                                        (t[2].duration = 1);
                                });
                              });
                          }),
                          'stop' === w &&
                            (d.each(N, function (e, t) {
                              p(t, !0);
                            }),
                            P.promise && P.resolver(x)),
                          e()
                        );
                      default:
                        if (!d.isPlainObject(w) || F.isEmptyObject(w))
                          return F.isString(w) && m.Redirects[w]
                            ? ((l = d.extend({}, S)),
                              (H = l.duration),
                              (O = l.delay || 0),
                              !0 === l.backwards &&
                                (x = d.extend(!0, [], x).reverse()),
                              d.each(x, function (e, t) {
                                parseFloat(l.stagger)
                                  ? (l.delay = O + parseFloat(l.stagger) * e)
                                  : F.isFunction(l.stagger) &&
                                    (l.delay = O + l.stagger.call(t, e, k)),
                                  l.drag &&
                                    ((l.duration =
                                      parseFloat(H) ||
                                      (/^(callout|transition)/.test(w)
                                        ? 1e3
                                        : f)),
                                    (l.duration = Math.max(
                                      l.duration *
                                        (l.backwards ? 1 - e / k : (e + 1) / k),
                                      0.75 * l.duration,
                                      200,
                                    ))),
                                  m.Redirects[w].call(
                                    t,
                                    t,
                                    l || {},
                                    e,
                                    k,
                                    x,
                                    P.promise ? P : n,
                                  );
                              }),
                              e())
                            : ((j =
                                'Velocity: First argument (' +
                                w +
                                ') was not a property map, a known action, or a registered redirect. Aborting.'),
                              P.promise
                                ? P.rejecter(new Error(j))
                                : t.console && console.log(j),
                              e());
                        C = 'start';
                    }
                    if (
                      ((q = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null,
                      }),
                      (z = []),
                      d.each(x, function (e, a) {
                        F.isNode(a) &&
                          (function (e, a) {
                            function o(o) {
                              var l,
                                p,
                                f,
                                g,
                                v,
                                T,
                                E,
                                N,
                                H,
                                O,
                                j,
                                L,
                                R,
                                M,
                                W,
                                $,
                                B,
                                I,
                                D,
                                G,
                                Q,
                                X;
                              if (h.begin && 0 === V)
                                try {
                                  h.begin.call(x, x);
                                } catch (e) {
                                  setTimeout(function () {
                                    throw e;
                                  }, 1);
                                }
                              if ('scroll' === C)
                                (f = /^x$/i.test(h.axis) ? 'Left' : 'Top'),
                                  (g = parseFloat(h.offset) || 0),
                                  h.container
                                    ? F.isWrapped(h.container) ||
                                      F.isNode(h.container)
                                      ? ((h.container =
                                          h.container[0] || h.container),
                                        (E =
                                          (v = h.container['scroll' + f]) +
                                          d(e).position()[f.toLowerCase()] +
                                          g))
                                      : (h.container = null)
                                    : ((v =
                                        m.State.scrollAnchor[
                                          m.State['scrollProperty' + f]
                                        ]),
                                      (T =
                                        m.State.scrollAnchor[
                                          m.State[
                                            'scrollProperty' +
                                              ('Left' === f ? 'Top' : 'Left')
                                          ]
                                        ]),
                                      (E = d(e).offset()[f.toLowerCase()] + g)),
                                  (b = {
                                    scroll: {
                                      rootPropertyValue: !1,
                                      startValue: v,
                                      currentValue: v,
                                      endValue: E,
                                      unitType: '',
                                      easing: h.easing,
                                      scrollData: {
                                        container: h.container,
                                        direction: f,
                                        alternateValue: T,
                                      },
                                    },
                                    element: e,
                                  }),
                                  m.debug &&
                                    console.log(
                                      'tweensContainer (scroll): ',
                                      b.scroll,
                                      e,
                                    );
                              else if ('reverse' === C) {
                                if (!(l = i(e))) return;
                                if (!l.tweensContainer)
                                  return void d.dequeue(e, h.queue);
                                for (N in ('none' === l.opts.display &&
                                  (l.opts.display = 'auto'),
                                'hidden' === l.opts.visibility &&
                                  (l.opts.visibility = 'visible'),
                                (l.opts.loop = !1),
                                (l.opts.begin = null),
                                (l.opts.complete = null),
                                S.easing || delete h.easing,
                                S.duration || delete h.duration,
                                (h = d.extend({}, l.opts, h)),
                                (p = d.extend(
                                  !0,
                                  {},
                                  l ? l.tweensContainer : null,
                                ))))
                                  p.hasOwnProperty(N) &&
                                    'element' !== N &&
                                    ((H = p[N].startValue),
                                    (p[N].startValue = p[N].currentValue =
                                      p[N].endValue),
                                    (p[N].endValue = H),
                                    F.isEmptyObject(S) ||
                                      (p[N].easing = h.easing),
                                    m.debug &&
                                      console.log(
                                        'reverse tweensContainer (' +
                                          N +
                                          '): ' +
                                          JSON.stringify(p[N]),
                                        e,
                                      ));
                                b = p;
                              } else if ('start' === C) {
                                for (L in ((l = i(e)) &&
                                  l.tweensContainer &&
                                  !0 === l.isAnimating &&
                                  (p = l.tweensContainer),
                                (O = function (t, r) {
                                  var n, i, o;
                                  return (
                                    F.isFunction(t) && (t = t.call(e, a, k)),
                                    F.isArray(t)
                                      ? ((n = t[0]),
                                        (!F.isArray(t[1]) &&
                                          /^[\d-]/.test(t[1])) ||
                                        F.isFunction(t[1]) ||
                                        y.RegEx.isHex.test(t[1])
                                          ? (o = t[1])
                                          : (F.isString(t[1]) &&
                                              !y.RegEx.isHex.test(t[1]) &&
                                              m.Easings[t[1]]) ||
                                            F.isArray(t[1])
                                          ? ((i = r
                                              ? t[1]
                                              : u(t[1], h.duration)),
                                            (o = t[2]))
                                          : (o = t[1] || t[2]))
                                      : (n = t),
                                    r || (i = i || h.easing),
                                    F.isFunction(n) && (n = n.call(e, a, k)),
                                    F.isFunction(o) && (o = o.call(e, a, k)),
                                    [n || 0, i, o]
                                  );
                                }),
                                (j = function (a, i) {
                                  var o,
                                    u,
                                    c,
                                    f,
                                    g,
                                    v,
                                    x,
                                    w,
                                    S,
                                    P,
                                    k,
                                    V,
                                    T,
                                    C,
                                    A,
                                    E,
                                    N,
                                    H,
                                    O,
                                    j,
                                    z,
                                    L,
                                    R,
                                    M,
                                    W,
                                    $ = y.Hooks.getRoot(a),
                                    B = !1,
                                    I = i[0],
                                    D = i[1],
                                    G = i[2];
                                  if (
                                    (l && l.isSVG) ||
                                    'tween' === $ ||
                                    !1 !== y.Names.prefixCheck($)[1] ||
                                    y.Normalizations.registered[$] !== n
                                  ) {
                                    if (
                                      (((h.display !== n &&
                                        null !== h.display &&
                                        'none' !== h.display) ||
                                        (h.visibility !== n &&
                                          'hidden' !== h.visibility)) &&
                                        /opacity|filter/.test(a) &&
                                        !G &&
                                        0 !== I &&
                                        (G = 0),
                                      h._cacheValues && p && p[a]
                                        ? (G === n &&
                                            (G = p[a].endValue + p[a].unitType),
                                          (B = l.rootPropertyValueCache[$]))
                                        : y.Hooks.registered[a]
                                        ? G === n
                                          ? ((B = y.getPropertyValue(e, $)),
                                            (G = y.getPropertyValue(e, a, B)))
                                          : (B = y.Hooks.templates[$][1])
                                        : G === n &&
                                          (G = y.getPropertyValue(e, a)),
                                      (g = !1),
                                      (v = function (e, t) {
                                        var r, n;
                                        return (
                                          (n = (t || '0')
                                            .toString()
                                            .toLowerCase()
                                            .replace(/[%A-z]+$/, function (e) {
                                              return (r = e), '';
                                            })),
                                          r || (r = y.Values.getUnitType(e)),
                                          [n, r]
                                        );
                                      }),
                                      G !== I && F.isString(G) && F.isString(I))
                                    ) {
                                      for (
                                        o = '',
                                          x = 0,
                                          w = 0,
                                          S = [],
                                          P = [],
                                          k = 0,
                                          V = 0,
                                          T = 0,
                                          G = y.Hooks.fixColors(G),
                                          I = y.Hooks.fixColors(I);
                                        x < G.length && w < I.length;

                                      )
                                        if (
                                          ((C = G[x]),
                                          (A = I[w]),
                                          /[\d\.-]/.test(C) &&
                                            /[\d\.-]/.test(A))
                                        ) {
                                          for (
                                            E = C, N = A, H = '.', O = '.';
                                            ++x < G.length;

                                          ) {
                                            if ((C = G[x]) === H) H = '..';
                                            else if (!/\d/.test(C)) break;
                                            E += C;
                                          }
                                          for (; ++w < I.length; ) {
                                            if ((A = I[w]) === O) O = '..';
                                            else if (!/\d/.test(A)) break;
                                            N += A;
                                          }
                                          (j = y.Hooks.getUnit(G, x)),
                                            (z = y.Hooks.getUnit(I, w)),
                                            (x += j.length),
                                            (w += z.length),
                                            j === z
                                              ? E === N
                                                ? (o += E + j)
                                                : ((o +=
                                                    '{' +
                                                    S.length +
                                                    (V ? '!' : '') +
                                                    '}' +
                                                    j),
                                                  S.push(parseFloat(E)),
                                                  P.push(parseFloat(N)))
                                              : ((L = parseFloat(E)),
                                                (R = parseFloat(N)),
                                                (o +=
                                                  (k < 5 ? 'calc' : '') +
                                                  '(' +
                                                  (L
                                                    ? '{' +
                                                      S.length +
                                                      (V ? '!' : '') +
                                                      '}'
                                                    : '0') +
                                                  j +
                                                  ' + ' +
                                                  (R
                                                    ? '{' +
                                                      (S.length + (L ? 1 : 0)) +
                                                      (V ? '!' : '') +
                                                      '}'
                                                    : '0') +
                                                  z +
                                                  ')'),
                                                L && (S.push(L), P.push(0)),
                                                R && (S.push(0), P.push(R)));
                                        } else {
                                          if (C !== A) {
                                            k = 0;
                                            break;
                                          }
                                          (o += C),
                                            x++,
                                            w++,
                                            (0 === k && 'c' === C) ||
                                            (1 === k && 'a' === C) ||
                                            (2 === k && 'l' === C) ||
                                            (3 === k && 'c' === C) ||
                                            (k >= 4 && '(' === C)
                                              ? k++
                                              : ((k && k < 5) ||
                                                  (k >= 4 &&
                                                    ')' === C &&
                                                    --k < 5)) &&
                                                (k = 0),
                                            (0 === V && 'r' === C) ||
                                            (1 === V && 'g' === C) ||
                                            (2 === V && 'b' === C) ||
                                            (3 === V && 'a' === C) ||
                                            (V >= 3 && '(' === C)
                                              ? (3 === V &&
                                                  'a' === C &&
                                                  (T = 1),
                                                V++)
                                              : T && ',' === C
                                              ? ++T > 3 && (V = T = 0)
                                              : ((T && V < (T ? 5 : 4)) ||
                                                  (V >= (T ? 4 : 3) &&
                                                    ')' === C &&
                                                    --V < (T ? 5 : 4))) &&
                                                (V = T = 0);
                                        }
                                      (x === G.length && w === I.length) ||
                                        (m.debug &&
                                          console.error(
                                            'Trying to pattern match mis-matched strings ["' +
                                              I +
                                              '", "' +
                                              G +
                                              '"]',
                                          ),
                                        (o = n)),
                                        o &&
                                          (S.length
                                            ? (m.debug &&
                                                console.log(
                                                  'Pattern found "' +
                                                    o +
                                                    '" -> ',
                                                  S,
                                                  P,
                                                  '[' + G + ',' + I + ']',
                                                ),
                                              (G = S),
                                              (I = P),
                                              (c = f = ''))
                                            : (o = n));
                                    }
                                    if (
                                      (o ||
                                        ((G = (u = v(a, G))[0]),
                                        (f = u[1]),
                                        (I = (u = v(a, I))[0].replace(
                                          /^([+-\/*])=/,
                                          function (e, t) {
                                            return (g = t), '';
                                          },
                                        )),
                                        (c = u[1]),
                                        (G = parseFloat(G) || 0),
                                        (I = parseFloat(I) || 0),
                                        '%' === c &&
                                          (/^(fontSize|lineHeight)$/.test(a)
                                            ? ((I /= 100), (c = 'em'))
                                            : /^scale/.test(a)
                                            ? ((I /= 100), (c = ''))
                                            : /(Red|Green|Blue)$/i.test(a) &&
                                              ((I = (I / 100) * 255),
                                              (c = '')))),
                                      (M = function () {
                                        var n,
                                          a,
                                          i,
                                          o = {
                                            myParent: e.parentNode || r.body,
                                            position: y.getPropertyValue(
                                              e,
                                              'position',
                                            ),
                                            fontSize: y.getPropertyValue(
                                              e,
                                              'fontSize',
                                            ),
                                          },
                                          s =
                                            o.position === q.lastPosition &&
                                            o.myParent === q.lastParent,
                                          u = o.fontSize === q.lastFontSize;
                                        return (
                                          (q.lastParent = o.myParent),
                                          (q.lastPosition = o.position),
                                          (q.lastFontSize = o.fontSize),
                                          (n = 100),
                                          (a = {}),
                                          u && s
                                            ? ((a.emToPx = q.lastEmToPx),
                                              (a.percentToPxWidth =
                                                q.lastPercentToPxWidth),
                                              (a.percentToPxHeight =
                                                q.lastPercentToPxHeight))
                                            : ((i =
                                                l && l.isSVG
                                                  ? r.createElementNS(
                                                      'http://www.w3.org/2000/svg',
                                                      'rect',
                                                    )
                                                  : r.createElement('div')),
                                              m.init(i),
                                              o.myParent.appendChild(i),
                                              d.each(
                                                [
                                                  'overflow',
                                                  'overflowX',
                                                  'overflowY',
                                                ],
                                                function (e, t) {
                                                  m.CSS.setPropertyValue(
                                                    i,
                                                    t,
                                                    'hidden',
                                                  );
                                                },
                                              ),
                                              m.CSS.setPropertyValue(
                                                i,
                                                'position',
                                                o.position,
                                              ),
                                              m.CSS.setPropertyValue(
                                                i,
                                                'fontSize',
                                                o.fontSize,
                                              ),
                                              m.CSS.setPropertyValue(
                                                i,
                                                'boxSizing',
                                                'content-box',
                                              ),
                                              d.each(
                                                [
                                                  'minWidth',
                                                  'maxWidth',
                                                  'width',
                                                  'minHeight',
                                                  'maxHeight',
                                                  'height',
                                                ],
                                                function (e, t) {
                                                  m.CSS.setPropertyValue(
                                                    i,
                                                    t,
                                                    n + '%',
                                                  );
                                                },
                                              ),
                                              m.CSS.setPropertyValue(
                                                i,
                                                'paddingLeft',
                                                n + 'em',
                                              ),
                                              (a.percentToPxWidth = q.lastPercentToPxWidth =
                                                (parseFloat(
                                                  y.getPropertyValue(
                                                    i,
                                                    'width',
                                                    null,
                                                    !0,
                                                  ),
                                                ) || 1) / n),
                                              (a.percentToPxHeight = q.lastPercentToPxHeight =
                                                (parseFloat(
                                                  y.getPropertyValue(
                                                    i,
                                                    'height',
                                                    null,
                                                    !0,
                                                  ),
                                                ) || 1) / n),
                                              (a.emToPx = q.lastEmToPx =
                                                (parseFloat(
                                                  y.getPropertyValue(
                                                    i,
                                                    'paddingLeft',
                                                  ),
                                                ) || 1) / n),
                                              o.myParent.removeChild(i)),
                                          null === q.remToPx &&
                                            (q.remToPx =
                                              parseFloat(
                                                y.getPropertyValue(
                                                  r.body,
                                                  'fontSize',
                                                ),
                                              ) || 16),
                                          null === q.vwToPx &&
                                            ((q.vwToPx =
                                              parseFloat(t.innerWidth) / 100),
                                            (q.vhToPx =
                                              parseFloat(t.innerHeight) / 100)),
                                          (a.remToPx = q.remToPx),
                                          (a.vwToPx = q.vwToPx),
                                          (a.vhToPx = q.vhToPx),
                                          m.debug >= 1 &&
                                            console.log(
                                              'Unit ratios: ' +
                                                JSON.stringify(a),
                                              e,
                                            ),
                                          a
                                        );
                                      }),
                                      /[\/*]/.test(g))
                                    )
                                      c = f;
                                    else if (f !== c && 0 !== G)
                                      if (0 === I) c = f;
                                      else {
                                        switch (
                                          ((s = s || M()),
                                          (W =
                                            /margin|padding|left|right|width|text|word|letter/i.test(
                                              a,
                                            ) ||
                                            /X$/.test(a) ||
                                            'x' === a
                                              ? 'x'
                                              : 'y'),
                                          f)
                                        ) {
                                          case '%':
                                            G *=
                                              'x' === W
                                                ? s.percentToPxWidth
                                                : s.percentToPxHeight;
                                            break;
                                          case 'px':
                                            break;
                                          default:
                                            G *= s[f + 'ToPx'];
                                        }
                                        switch (c) {
                                          case '%':
                                            G *=
                                              1 /
                                              ('x' === W
                                                ? s.percentToPxWidth
                                                : s.percentToPxHeight);
                                            break;
                                          case 'px':
                                            break;
                                          default:
                                            G *= 1 / s[c + 'ToPx'];
                                        }
                                      }
                                    switch (g) {
                                      case '+':
                                        I = G + I;
                                        break;
                                      case '-':
                                        I = G - I;
                                        break;
                                      case '*':
                                        I *= G;
                                        break;
                                      case '/':
                                        I = G / I;
                                    }
                                    (b[a] = {
                                      rootPropertyValue: B,
                                      startValue: G,
                                      currentValue: G,
                                      endValue: I,
                                      unitType: c,
                                      easing: D,
                                    }),
                                      o && (b[a].pattern = o),
                                      m.debug &&
                                        console.log(
                                          'tweensContainer (' +
                                            a +
                                            '): ' +
                                            JSON.stringify(b[a]),
                                          e,
                                        );
                                  } else
                                    m.debug &&
                                      console.log(
                                        'Skipping [' +
                                          $ +
                                          '] due to a lack of browser support.',
                                      );
                                }),
                                w))
                                  if (w.hasOwnProperty(L))
                                    if (
                                      ((R = y.Names.camelCase(L)),
                                      (M = O(w[L])),
                                      A(y.Lists.colors, R) &&
                                        ((W = M[0]),
                                        ($ = M[1]),
                                        (B = M[2]),
                                        y.RegEx.isHex.test(W)))
                                    )
                                      for (
                                        I = ['Red', 'Green', 'Blue'],
                                          D = y.Values.hexToRgb(W),
                                          G = B ? y.Values.hexToRgb(B) : n,
                                          Q = 0;
                                        Q < I.length;
                                        Q++
                                      )
                                        (X = [D[Q]]),
                                          $ && X.push($),
                                          G !== n && X.push(G[Q]),
                                          j(R + I[Q], X);
                                    else j(R, M);
                                b.element = e;
                              }
                              b.element &&
                                (y.Values.addClass(e, 'velocity-animating'),
                                z.push(b),
                                (l = i(e)) &&
                                  ('' === h.queue &&
                                    ((l.tweensContainer = b), (l.opts = h)),
                                  (l.isAnimating = !0)),
                                V === k - 1
                                  ? (m.State.calls.push([
                                      z,
                                      x,
                                      h,
                                      null,
                                      P.resolver,
                                      null,
                                      0,
                                    ]),
                                    !1 === m.State.isTicking &&
                                      ((m.State.isTicking = !0), c()))
                                  : V++);
                            }
                            var s,
                              l,
                              p,
                              g,
                              h = d.extend({}, m.defaults, S),
                              b = {};
                            switch (
                              (i(e) === n && m.init(e),
                              parseFloat(h.delay) &&
                                !1 !== h.queue &&
                                d.queue(e, h.queue, function (t) {
                                  var r, n, a;
                                  (m.velocityQueueEntryFlag = !0),
                                    (r = m.State.delayedElements.count++),
                                    (m.State.delayedElements[r] = e),
                                    (a = r),
                                    (n = function () {
                                      (m.State.delayedElements[a] = !1), t();
                                    }),
                                    (i(e).delayBegin = new Date().getTime()),
                                    (i(e).delay = parseFloat(h.delay)),
                                    (i(e).delayTimer = {
                                      setTimeout: setTimeout(
                                        t,
                                        parseFloat(h.delay),
                                      ),
                                      next: n,
                                    });
                                }),
                              h.duration.toString().toLowerCase())
                            ) {
                              case 'fast':
                                h.duration = 200;
                                break;
                              case 'normal':
                                h.duration = f;
                                break;
                              case 'slow':
                                h.duration = 600;
                                break;
                              default:
                                h.duration = parseFloat(h.duration) || 1;
                            }
                            !1 !== m.mock &&
                              (!0 === m.mock
                                ? (h.duration = h.delay = 1)
                                : ((h.duration *= parseFloat(m.mock) || 1),
                                  (h.delay *= parseFloat(m.mock) || 1))),
                              (h.easing = u(h.easing, h.duration)),
                              h.begin &&
                                !F.isFunction(h.begin) &&
                                (h.begin = null),
                              h.progress &&
                                !F.isFunction(h.progress) &&
                                (h.progress = null),
                              h.complete &&
                                !F.isFunction(h.complete) &&
                                (h.complete = null),
                              h.display !== n &&
                                null !== h.display &&
                                ((h.display = h.display
                                  .toString()
                                  .toLowerCase()),
                                'auto' === h.display &&
                                  (h.display = m.CSS.Values.getDisplayType(e))),
                              h.visibility !== n &&
                                null !== h.visibility &&
                                (h.visibility = h.visibility
                                  .toString()
                                  .toLowerCase()),
                              (h.mobileHA =
                                h.mobileHA &&
                                m.State.isMobile &&
                                !m.State.isGingerbread),
                              !1 === h.queue
                                ? h.delay
                                  ? ((l = m.State.delayedElements.count++),
                                    (m.State.delayedElements[l] = e),
                                    (g = l),
                                    (p = function () {
                                      (m.State.delayedElements[g] = !1), o();
                                    }),
                                    (i(e).delayBegin = new Date().getTime()),
                                    (i(e).delay = parseFloat(h.delay)),
                                    (i(e).delayTimer = {
                                      setTimeout: setTimeout(
                                        o,
                                        parseFloat(h.delay),
                                      ),
                                      next: p,
                                    }))
                                  : o()
                                : d.queue(e, h.queue, function (e, t) {
                                    if (!0 === t)
                                      return P.promise && P.resolver(x), !0;
                                    (m.velocityQueueEntryFlag = !0), o();
                                  }),
                              ('' !== h.queue && 'fx' !== h.queue) ||
                                'inprogress' === d.queue(e)[0] ||
                                d.dequeue(e);
                          })(a, e);
                      }),
                      ((l = d.extend({}, m.defaults, S)).loop = parseInt(
                        l.loop,
                        10,
                      )),
                      (L = 2 * l.loop - 1),
                      l.loop)
                    )
                      for (R = 0; R < L; R++)
                        (M = { delay: l.delay, progress: l.progress }),
                          R === L - 1 &&
                            ((M.display = l.display),
                            (M.visibility = l.visibility),
                            (M.complete = l.complete)),
                          b(x, 'reverse', M);
                    return e();
                  }
                  P.promise &&
                    (w && S && !1 === S.promiseRejectEmpty
                      ? P.resolver()
                      : P.rejecter());
                }),
                ((m = d.extend(b, m)).animate = b),
                (v = t.requestAnimationFrame || V),
                m.State.isMobile ||
                  r.hidden === n ||
                  ((x = function () {
                    r.hidden
                      ? ((v = function (e) {
                          return setTimeout(function () {
                            e(!0);
                          }, 16);
                        }),
                        c())
                      : (v = t.requestAnimationFrame || V);
                  })(),
                  r.addEventListener('visibilitychange', x)),
                (e.Velocity = m),
                e !== t &&
                  ((e.fn.velocity = b), (e.fn.velocity.defaults = m.defaults)),
                d.each(['Down', 'Up'], function (e, t) {
                  m.Redirects['slide' + t] = function (e, r, a, i, o, s) {
                    var l = d.extend({}, r),
                      u = l.begin,
                      c = l.complete,
                      p = {},
                      f = {
                        height: '',
                        marginTop: '',
                        marginBottom: '',
                        paddingTop: '',
                        paddingBottom: '',
                      };
                    l.display === n &&
                      (l.display =
                        'Down' === t
                          ? 'inline' === m.CSS.Values.getDisplayType(e)
                            ? 'inline-block'
                            : 'block'
                          : 'none'),
                      (l.begin = function () {
                        var r, n;
                        for (r in (0 === a && u && u.call(o, o), f))
                          f.hasOwnProperty(r) &&
                            ((p[r] = e.style[r]),
                            (n = y.getPropertyValue(e, r)),
                            (f[r] = 'Down' === t ? [n, 0] : [0, n]));
                        (p.overflow = e.style.overflow),
                          (e.style.overflow = 'hidden');
                      }),
                      (l.complete = function () {
                        for (var t in p)
                          p.hasOwnProperty(t) && (e.style[t] = p[t]);
                        a === i - 1 && (c && c.call(o, o), s && s.resolver(o));
                      }),
                      m(e, f, l);
                  };
                }),
                d.each(['In', 'Out'], function (e, t) {
                  m.Redirects['fade' + t] = function (e, r, a, i, o, s) {
                    var l = d.extend({}, r),
                      u = l.complete,
                      c = { opacity: 'In' === t ? 1 : 0 };
                    0 !== a && (l.begin = null),
                      (l.complete =
                        a !== i - 1
                          ? null
                          : function () {
                              u && u.call(o, o), s && s.resolver(o);
                            }),
                      l.display === n &&
                        (l.display = 'In' === t ? 'auto' : 'none'),
                      m(this, c, l);
                  };
                }),
                m
              );
            jQuery.fn.velocity = jQuery.fn.animate;
          })(
            window.jQuery || window.Zepto || window,
            window,
            window ? window.document : void 0,
          );
        });
    },
  },
]);