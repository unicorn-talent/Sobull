(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    '+8gn': function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s, c;
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'a', function () {
          return c;
        }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('Eyy1')),
        (u = n('uOxu')),
        (i = Object(u.getLogger)('Platform.GUI.StudyInputPropertyContainer')),
        (s = o.createContext(null)),
        (c = (function (e) {
          function t(t) {
            var n,
              r,
              o = e.call(this, t) || this;
            return (
              (o._setValue = function (e, t, n) {
                var r = o.props,
                  u = r.property,
                  s = r.model,
                  c = Object(a.ensureDefined)(u.child(e));
                i.logNormal(
                  'Changing property "' +
                    e +
                    '" value from "' +
                    u.value() +
                    '" to "' +
                    t +
                    '"',
                ),
                  s.setProperty(c, t, 'Change ' + n);
              }),
              (n = t.property),
              (r = {}),
              n.childNames().forEach(function (e) {
                var t = Object(a.ensureDefined)(n.child(e));
                r.hasOwnProperty(e) || (r[e] = t.value());
              }),
              (o.state = r),
              o
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.property,
                n = t.childNames();
              n.forEach(function (n) {
                Object(a.ensureDefined)(t.child(n)).subscribe(e, function (t) {
                  var r,
                    o = t.value();
                  i.logNormal(
                    'Property "' + n + '" updated to value "' + o + '"',
                  ),
                    e.setState((((r = {})[n] = o), r));
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this,
                t = this.props.property,
                n = t.childNames();
              n.forEach(function (n) {
                Object(a.ensureDefined)(t.child(n)).unsubscribeAll(e);
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.study,
                n = e.model,
                r = e.children,
                a = {
                  study: t,
                  model: n,
                  values: this.state,
                  setValue: this._setValue,
                };
              return o.createElement(s.Provider, { value: a }, r);
            }),
            t
          );
        })(o.PureComponent));
    },
    '3G1X': function (e, t, n) {
      'use strict';
      function r(e) {
        var t = e.borderStyle,
          n = void 0 === t ? 'thin' : t,
          r = e.removeRoundBorder,
          o = void 0 === r ? 0 : r,
          a = e.highlightRemoveRoundBorder,
          c = void 0 === a ? 0 : a,
          h = e.intent,
          b = void 0 === h ? 'default' : h,
          g = e.size,
          y = void 0 === g ? 'medium' : g,
          _ = e.tabIndex,
          O = void 0 === _ ? 0 : _,
          j = e.className,
          C = e.disabled,
          E = e.readonly,
          S = e.icon,
          w = e.iconPosition,
          N = e.highlight,
          x = e.reference,
          B = e.containerReference,
          D = e.inputClassName,
          I = e.onFocus,
          P = e.onBlur,
          R = e.interactive,
          k = Object(u.__rest)(e, [
            'borderStyle',
            'removeRoundBorder',
            'highlightRemoveRoundBorder',
            'intent',
            'size',
            'tabIndex',
            'className',
            'disabled',
            'readonly',
            'icon',
            'iconPosition',
            'highlight',
            'reference',
            'containerReference',
            'inputClassName',
            'onFocus',
            'onBlur',
            'interactive',
          ]),
          F = Object(i.useRef)(null),
          V = Object(f.a)(),
          T = V[0],
          M = V[1],
          G = Object(d.a)(o),
          H = Object(d.a)(c),
          q = Object(m.a)(M.onFocus, I),
          K = Object(m.a)(M.onBlur, P);
        return s.a.createElement(
          'span',
          {
            className: l()(
              v.container,
              j,
              v['intent-' + b],
              v['border-' + n],
              v['size-' + y],
              G,
              N && v.highlight,
              Boolean(S) && w && v['icon-' + w],
              C && v.disabled,
              E && v.readonly,
              T && v.focused,
            ),
            tabIndex: C || R ? void 0 : T ? -1 : O,
            onFocus: function (e) {
              R || Object(p.ensureNotNull)(F.current).focus();
            },
            ref: B,
          },
          S,
          s.a.createElement(
            'input',
            Object(u.__assign)({}, k, {
              className: l()(v.input, D),
              disabled: C,
              readOnly: E,
              tabIndex: C ? void 0 : T ? O : -1,
              onFocus: q,
              onBlur: K,
              ref: function (e) {
                (F.current = e), x && x(e);
              },
            }),
          ),
          N && s.a.createElement('span', { className: l()(v.shadow, H) }),
        );
      }
      function o(e) {
        var t = e.className,
          n = e.children,
          r = e.interactive,
          o = void 0 === r || r,
          a = Object(u.__rest)(e, ['className', 'children', 'interactive']);
        return s.a.createElement(
          'span',
          Object(u.__assign)({}, a, {
            className: l()(t, v.icon, o && v.interactive),
          }),
          n,
        );
      }
      function a(e) {
        return (
          (e = Object(h.a)(e)), s.a.createElement(r, Object(u.__assign)({}, e))
        );
      }
      var u, i, s, c, l, p, d, f, m, h, v, b;
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'c', function () {
          return o;
        }),
        n.d(t, 'b', function () {
          return a;
        }),
        (u = n('mrSG')),
        (i = n('q1tI')),
        (s = n.n(i)),
        (c = n('TSYQ')),
        (l = n.n(c)),
        (p = n('Eyy1')),
        (d = n('Wvr1')),
        (f = n('Oi2w')),
        (m = n('l9+T')),
        (h = n('k+zC')),
        (v = n('Hk3L')),
        ((b = {}).FontSizeMedium = Object(p.ensureDefined)(
          v['font-size-medium'],
        )),
        (b.FontSizeLarge = Object(p.ensureDefined)(v['font-size-large'])),
        (b.GroupedVertical = Object(p.ensureDefined)(v['grouped-vertical'])),
        (b.GroupedHorizontal = Object(p.ensureDefined)(
          v['grouped-horizontal'],
        ));
    },
    '5Ssy': function (e, t, n) {
      'use strict';
      function r(e) {
        var t = e.children,
          n = e.input,
          r = e.disabled,
          o = e.onChange,
          a = e.grouped,
          u = Object(c.useContext)(p.b),
          d = Object(g.ensureNotNull)(u),
          f = d.values,
          h = d.setValue,
          y = f[n.id],
          C = Object(c.useState)(y ? 'another-symbol' : 'main-symbol'),
          E = C[0],
          S = C[1],
          w = Object(c.useRef)(null);
        return l.a.createElement(
          v.SwitchGroup,
          {
            name: 'symbol-source-' + n.id,
            values: [E],
            onChange: function (e) {
              S(e),
                'main-symbol' === e
                  ? Object(_.b)(h)('', n.id, n.name)
                  : Object(g.ensureNotNull)(w.current).updateSymbol();
            },
          },
          l.a.createElement(
            m.a.Row,
            null,
            l.a.createElement(
              m.a.Cell,
              { colSpan: 2, placement: 'first', grouped: a },
              l.a.createElement(b.RadioButton, {
                value: 'main-symbol',
                className: O.checkbox,
                disabled: r,
                label: l.a.createElement(
                  'span',
                  { className: O.label },
                  Object(s.t)('Main chart symbol', { context: 'input' }),
                ),
              }),
            ),
          ),
          l.a.createElement(
            m.a.Row,
            null,
            l.a.createElement(
              m.a.Cell,
              { placement: 'first', grouped: a },
              l.a.createElement(b.RadioButton, {
                value: 'another-symbol',
                className: O.checkbox,
                disabled: r,
                label: l.a.createElement(
                  'span',
                  { className: O.label },
                  Object(s.t)('Another symbol', { context: 'input' }),
                ),
              }),
            ),
            l.a.createElement(
              m.a.Cell,
              { placement: 'last', grouped: a },
              t ||
                l.a.createElement(
                  j,
                  Object(i.__assign)(
                    {},
                    { reference: w },
                    {
                      input: Object(g.ensureDefined)(n),
                      onChange: o,
                      disabled: r || 'main-symbol' === E,
                    },
                  ),
                ),
            ),
          ),
        );
      }
      function o(e) {
        var t = e.study,
          n = e.model,
          o = e.inputs,
          a = e.property;
        return c.createElement(
          p.a,
          { property: a, study: t, model: n },
          o.map(function (e) {
            return 'symbol' === e.type && e.optional
              ? c.createElement(r, { key: e.id, input: e })
              : 'bool' === e.type
              ? c.createElement(h, {
                  key: e.id,
                  label: window.t(e.name, { context: 'input' }),
                  input: e,
                })
              : c.createElement(d.a, {
                  labelAlign: 'session' === e.type ? 'adaptive' : void 0,
                  key: e.id,
                  input: e,
                });
          }),
        );
      }
      var a,
        u,
        i = n('mrSG'),
        s = n('YFKU'),
        c = n('q1tI'),
        l = n.n(c),
        p = n('+8gn'),
        d = n('rJEJ'),
        f = n('h5Dg'),
        m = n('Q+1u'),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.label,
                n = e.input;
              return c.createElement(
                m.a.Row,
                null,
                c.createElement(
                  m.a.Cell,
                  { placement: 'first', colSpan: 2 },
                  c.createElement(f.a, { label: t, input: n }),
                ),
              );
            }),
            t
          );
        })(c.PureComponent),
        v = n('0Mig'),
        b = n('pG7R'),
        g = n('Eyy1'),
        y = n('fV01'),
        _ = n('HfwS'),
        O = n('tDS2'),
        j = Object(_.a)(function (e) {
          var t = Object(c.useContext)(p.b),
            n = Object(g.ensureNotNull)(t).study,
            r = e.value,
            o = void 0 === r ? '' : r,
            a = e.reference;
          return l.a.createElement(
            y.b,
            Object(i.__assign)({}, e, {
              allowEmpty: !0,
              value: Object(y.c)(o, n),
              study: n,
              ref: a,
            }),
          );
        });
      n.d(t, 'a', function () {
        return u;
      }),
        (a = {
          offset: window.t('Offset'),
        }),
        (u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.reference,
                r = t.inputs,
                a = t.property,
                u = t.study,
                i = t.model,
                s = a.offset,
                l = a.offsets;
              return c.createElement(
                m.a,
                { reference: n },
                c.createElement(o, {
                  study: u,
                  model: i,
                  property: a.inputs,
                  inputs: r,
                }),
                s && this._createOffsetSection(s),
                l &&
                  l.childNames().map(function (t) {
                    var n = l.childs()[t];
                    return e._createOffsetSection(n);
                  }),
              );
            }),
            (t.prototype._createOffsetSection = function (e) {
              var t = e.childs();
              return c.createElement(o, {
                key: 'offset_' + t.title.value(),
                study: this.props.study,
                model: this.props.model,
                inputs: [
                  (function (e) {
                    return {
                      id: 'val',
                      name: e.title.value() || a.offset,
                      defval: e.val.value(),
                      type: 'integer',
                      min: e.min.value(),
                      max: e.max.value(),
                    };
                  })(t),
                ],
                property: e,
              });
            }),
            t
          );
        })(c.PureComponent));
    },
    '89he': function (e, t, n) {},
    '9XXR': function (e, t, n) {
      'use strict';
      function r(e, t) {
        var n, r;
        return (
          void 0 === t && (t = '&nbsp;'),
          -1 !== (n = e + '').indexOf('e') &&
            (n = (function (e) {
              return Object(o.fixComputationError)(e)
                .toFixed(10)
                .replace(/\.?0+$/, '');
            })(Number(e))),
          (r = n.split('.'))[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) +
            (r[1] ? '.' + r[1] : '')
        );
      }
      var o;
      n.r(t),
        n.d(t, 'splitThousands', function () {
          return r;
        }),
        (o = n('ivNn'));
    },
    HGyE: function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s, c;
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'a', function () {
          return c;
        }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('H172')),
        (u = n('HfwS')),
        (i = n('tDS2')),
        (s = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e, o, a);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = t.defval,
                r = t.options,
                u = t.optionsTitles,
                s = e.value,
                c = e.disabled,
                l = r.map(function (e) {
                  var t = u && u[e] ? u[e] : e;
                  return {
                    value: e,
                    content: window.t(t, { context: 'input' }),
                  };
                }),
                p = void 0 !== s && r.includes(s) ? s : n;
              return o.createElement(a.a, {
                className: i.input,
                menuClassName: i.dropdownMenu,
                value: p,
                items: l,
                onChange: this._onChange,
                disabled: c,
              });
            }),
            t
          );
        })(o.PureComponent)),
        (c = Object(u.a)(s));
    },
    HfwS: function (e, t, n) {
      'use strict';
      function r(e) {
        var t;
        return (
          ((t = (function (t) {
            function n() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._onChange = function (t, n, r) {
                  var a = e.context.setValue,
                    u = e.props.onChange;
                  o(a, u)(t, n, r);
                }),
                e
              );
            }
            return (
              Object(a.__extends)(n, t),
              (n.prototype.render = function () {
                var t = this.props.input,
                  n = this.context.values;
                return u.createElement(
                  e,
                  Object(a.__assign)({}, this.props, {
                    value: n[t.id],
                    onChange: this._onChange,
                  }),
                );
              }),
              n
            );
          })(u.PureComponent)).contextType = i.b),
          t
        );
      }
      function o(e, t) {
        return function (n, r, o) {
          e(r, n, o), t && t(n, r, o);
        };
      }
      var a, u, i;
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return o;
        }),
        (a = n('mrSG')),
        (u = n('q1tI')),
        (i = n('+8gn'));
    },
    OL6p: function (e, t, n) {
      e.exports = { icon: 'icon-1NLCncqj' };
    },
    PjdP: function (e, t, n) {
      'use strict';
      function r(e) {
        return g.createElement(G.a, { className: H.icon, icon: q });
      }
      function o(e, t, n) {
        for (
          var r,
            o,
            a,
            u,
            i,
            s = [],
            c = n,
            l = 0,
            p = 0,
            d = e.length,
            f = c.length,
            m = 1,
            h = -1,
            v = 0,
            b = [],
            g = d - 1,
            y = function () {
              return l < d && p < f;
            },
            _ = [];
          y();

        )
          (o = e.charAt(l)),
            (a = c.charAt(p)),
            (u = z[o])
              ? (a.match(u.pattern)
                  ? (s.push(a),
                    u.recursive &&
                      (-1 === h ? (h = l) : l === g && l !== h && (l = h - m),
                      g === h && (l -= m)),
                    (l += m))
                  : a === r
                  ? (v--, (r = void 0))
                  : u.optional
                  ? ((l += m), (p -= m))
                  : u.fallback
                  ? (s.push(u.fallback), (l += m), (p -= m))
                  : _.push({ p: p, v: a, e: u.pattern }),
                (p += m))
              : (t || s.push(o),
                a === o ? (b.push(p), (p += m)) : ((r = o), b.push(p + v), v++),
                (l += m));
        return (
          (i = e.charAt(g)),
          d !== f + 1 || z[i] || s.push(i),
          [
            s.join(''),
            (function (e, t) {
              for (var n = {}, r = 0; r < t.length; r++) n[t[r] + 0] = 1;
              return n;
            })(0, b),
            _,
          ]
        );
      }
      function a(e, t, n) {
        function r(e) {
          var t = _.current;
          return (_.current = e), t;
        }
        var a = (function (e) {
            var t,
              n,
              r = !0;
            for (t = 0; t < e.length; t++)
              if ((n = z[e.charAt(t)]) && n.recursive) {
                r = !1;
                break;
              }
            return r ? e.length : void 0;
          })(e),
          i = o(e, !1, t),
          s = i[0],
          c = i[1],
          l = Object(g.useState)(s),
          p = l[0],
          d = l[1],
          f = Object(g.useState)(0),
          m = f[0],
          h = f[1],
          v = Object(g.useState)(!1),
          b = v[0],
          y = v[1],
          _ = Object(g.useRef)(c),
          O = Object(g.useRef)(p);
        return (
          Object(g.useEffect)(
            function () {
              var n = o(e, !1, t),
                a = n[0],
                u = n[1];
              d(a), r(u);
            },
            [t, e],
          ),
          Object(g.useLayoutEffect)(
            function () {
              var e = Object(V.ensureNotNull)(n.current);
              b && (e.setSelectionRange(m, m), y(!1)), h(u(e));
            },
            [b],
          ),
          [
            t,
            O,
            {
              onChange: function () {
                var t,
                  a,
                  i = Object(V.ensureNotNull)(n.current),
                  s = i.value,
                  c = o(e, !1, s),
                  l = c[0],
                  f = c[1];
                d(l),
                  (O.current = l),
                  (t = r(f)),
                  (a = (function (e, t, n, r, o, a) {
                    var u, i, s, c, l, p, d, f;
                    if (e !== t) {
                      for (
                        u = t.length,
                          i = e.length,
                          s = 0,
                          c = 0,
                          l = 0,
                          p = 0,
                          d = 0,
                          d = r;
                        d < u && o[d];
                        d++
                      )
                        c++;
                      for (d = r - 1; d >= 0 && o[d]; d--) s++;
                      for (d = r - 1; d >= 0; d--) o[d] && l++;
                      for (d = n - 1; d >= 0; d--) a[d] && p++;
                      r > i
                        ? (r = 10 * u)
                        : n >= r && n !== i
                        ? a[r] &&
                          ((f = r), (r -= p - l), o[(r -= s)] && (r = f))
                        : r > n && ((r += l - p), (r += c));
                    }
                    return r;
                  })(p, l, m, u(i), f, t)),
                  h(a),
                  y(!0);
              },
              onSelect: function () {
                var e = Object(V.ensureNotNull)(n.current);
                h(u(e));
              },
              maxLength: a,
            },
          ]
        );
      }
      function u(e) {
        return e.selectionStart || 0;
      }
      function i(e) {
        var t = e.value,
          n = e.mask,
          r = e.onChange,
          o = Object(b.__rest)(e, ['value', 'mask', 'onChange']),
          u = Object(g.useRef)(null),
          i = a(n, t, u),
          s = i[0],
          c = i[1],
          l = i[2];
        return (
          Object(g.useLayoutEffect)(
            function () {
              void 0 !== e.reference && (e.reference.current = u.current);
            },
            [e.reference],
          ),
          y.a.createElement(
            B.b,
            Object(b.__assign)({}, o, {
              iconPosition: 'right',
              maxLength: l.maxLength,
              value: s,
              autoComplete: 'off',
              reference: function (e) {
                u.current = e;
              },
              onChange: function () {
                l.onChange(), r(c.current);
              },
              onSelect: l.onSelect,
            }),
          )
        );
      }
      function s(e) {
        function t(t) {
          var n = c(t),
            r = l(n) ? n : p(n);
          I(r), _ || ((_ = !0), e.onChange(r));
        }
        function n(e) {
          E.current = e;
        }
        function o(e) {
          if ((t(Object(V.ensureDefined)(e)), M.isIE)) {
            var n = window.document.activeElement;
            n instanceof Node && HTMLElement.prototype.blur.call(n);
          } else Object(V.ensureNotNull)(C.current).blur();
        }
        function a(e) {
          var t = e.relatedTarget;
          return (
            M.isIE && (t = 'focus' === e.type ? A.current : z.current),
            w && (null !== u(document.activeElement) || null !== u(t))
          );
        }
        function u(e) {
          return (
            (e instanceof Node &&
              s().find(function (t) {
                return null !== t && t.contains(e);
              })) ||
            null
          );
        }
        function s() {
          return [C.current, j.current];
        }
        function d(e) {
          var t, n;
          void 0 === e && (e = 'auto'),
            null !== E.current &&
              ((t = Object(V.ensureNotNull)(C.current).getBoundingClientRect()),
              (n = E.current.getBoundingClientRect()),
              (t.top > n.top || t.bottom < n.bottom) &&
                E.current.scrollIntoView({ behavior: e }));
        }
        function f() {
          var e,
            t = j.current;
          null !== t && ((e = t.value || ''), t.setSelectionRange(0, e.length));
        }
        var m,
          h,
          v,
          _ = !1,
          O = Object(g.useRef)(null),
          j = Object(g.useRef)(null),
          C = Object(g.useRef)(null),
          E = Object(g.useRef)(null),
          S = Object(K.a)(),
          w = S[0],
          N = S[1],
          x = Object(g.useState)(e.value),
          D = x[0],
          I = x[1],
          P = c(D),
          R = l(P) ? P : p(P),
          k = Object(g.useState)(R),
          T = k[0],
          G = k[1],
          H =
            w ||
            s().some(function (e) {
              return null !== e && e.contains(document.activeElement);
            }),
          q = (function (e) {
            var t, n;
            return (
              void 0 === e && (e = window.document),
              (t = Object(g.useRef)(null)),
              (n = Object(g.useRef)(null)),
              Object(g.useLayoutEffect)(function () {
                var r = function (e) {
                  var r = e;
                  'focusin' === r.type
                    ? ((t.current = r.relatedTarget), (n.current = r.target))
                    : ((n.current = r.relatedTarget), (t.current = r.target));
                };
                return (
                  e.addEventListener('focusin', r),
                  e.addEventListener('focusout', r),
                  function () {
                    e.removeEventListener('focusin', r),
                      e.removeEventListener('focusout', r);
                  }
                );
              }, []),
              [t, n]
            );
          })(),
          A = q[0],
          z = q[1];
        return (
          Object(g.useLayoutEffect)(
            function () {
              return I(e.value);
            },
            [e.value],
          ),
          Object(g.useLayoutEffect)(
            function () {
              return G(R);
            },
            [D, H],
          ),
          Object(g.useEffect)(
            function () {
              return d(T === R ? 'auto' : 'smooth');
            },
            [T],
          ),
          (m = Object(Q.lowerbound)(J, R, function (e, t) {
            return e < t;
          })),
          (h = J),
          J[m] !== R && (h = Object(b.__spreadArrays)(J)).splice(m, 0, R),
          (v = Object(L.a)({
            mouseDown: !0,
            touchStart: !0,
            handler: function (e) {
              null !== j.current &&
                H &&
                e.target instanceof Node &&
                null !== C.current &&
                !C.current.contains(e.target) &&
                j.current.blur();
            },
          })),
          y.a.createElement(
            'div',
            {
              className: F()(e.className),
              onKeyDown: function (e) {
                var t, n;
                e.defaultPrevented ||
                  (38 === (t = Object(U.hashFromEvent)(e.nativeEvent)) &&
                    (e.preventDefault(),
                    (n = (h.indexOf(T) + h.length - 1) % h.length),
                    G(h[n])),
                  40 === t &&
                    (e.preventDefault(),
                    (n = (h.indexOf(T) + h.length + 1) % h.length),
                    G(h[n])));
              },
              onFocus: function (e) {
                a(e) || N.onFocus(e);
              },
              onBlur: function (e) {
                a(e) || N.onBlur(e);
              },
              ref: v,
            },
            y.a.createElement(i, {
              name: e.name,
              icon: y.a.createElement(B.c, null, y.a.createElement(r, null)),
              reference: j,
              containerReference: O,
              mask: '09:00',
              value: D,
              onFocus: function (e) {
                setTimeout(f, 0);
              },
              onBlur: function (e) {
                a(e) || t(D);
              },
              onChange: function (t) {
                I(t), e.onInput && e.onInput(t);
              },
              onKeyDown: function (e) {
                if (!e.defaultPrevented) {
                  var n = Object(U.hashFromEvent)(e.nativeEvent);
                  13 === n &&
                    (e.preventDefault(),
                    t(T),
                    Object(V.ensureNotNull)(j.current).blur()),
                    27 === n &&
                      (e.preventDefault(),
                      Object(V.ensureNotNull)(j.current).blur());
                }
              },
            }),
            y.a.createElement(
              W.a,
              {
                onOpen: function () {
                  d();
                },
                onClose: function () {},
                position: function () {
                  var e,
                    t,
                    n = Object(V.ensureNotNull)(
                      O.current,
                    ).getBoundingClientRect(),
                    r = window.innerHeight - n.bottom,
                    o = n.top,
                    a = 231,
                    u = n.bottom;
                  return (
                    a > o && a > r
                      ? ((e = Object(Y.clamp)(a, 0, o)),
                        (t = Object(Y.clamp)(a, 0, r)),
                        (a = Math.max(e, t)),
                        (u = e > t ? n.top - e : n.bottom))
                      : a > r && (u = n.top - a),
                    {
                      x: n.left,
                      y: u,
                      overrideWidth: n.width,
                      overrideHeight: a,
                    }
                  );
                },
                closeOnClickOutside: !1,
                isOpened: H,
                tabIndex: -1,
                reference: C,
              },
              h.map(function (e) {
                return y.a.createElement(X.b, {
                  key: e,
                  label: e,
                  isActive: e === R,
                  isHovered: e === T,
                  reference: e === T ? n : void 0,
                  onClick: o,
                  onClickArg: e,
                });
              }),
            ),
          )
        );
      }
      function c(e) {
        var t = e.split(':'),
          n = t[0],
          r = void 0 === n ? '' : n,
          o = t[1],
          a = void 0 === o ? '' : o,
          u = [d(r), f(a)],
          i = u[0],
          s = u[1];
        return i + ':' + s;
      }
      function l(e) {
        return /^(0?[0-9]|1[0-9]|2[0-3])\:[0-5][0-9]$/g.test(e);
      }
      function p(e) {
        var t = e.split(':'),
          n = t[0],
          r = t[1],
          o = [
            Object(Y.clamp)(parseInt(n), 0, 23),
            Object(Y.clamp)(parseInt(r), 0, 59),
          ],
          a = o[0],
          u = o[1],
          i = [d(a.toString()), f(u.toString())],
          s = i[0],
          c = i[1];
        return s + ':' + c;
      }
      function d(e) {
        return e.slice(0, 2).padStart(2, '0');
      }
      function f(e) {
        return e.slice(0, 2).padEnd(2, '0');
      }
      function m(e) {
        var t, n, r, o, a;
        return (
          void 0 === e && (e = ''),
          [
            (void 0 ===
            (n = (t = Array.from(
              e.match(/^(\d\d)(\d\d)-(\d\d)(\d\d)/) || [],
            ))[1])
              ? ''
              : n) +
              ':' +
              (void 0 === (r = t[2]) ? '' : r),
            (void 0 === (o = t[3]) ? '' : o) +
              ':' +
              (void 0 === (a = t[4]) ? '' : a),
          ]
        );
      }
      var h,
        v,
        b = n('mrSG'),
        g = n('q1tI'),
        y = n.n(g),
        _ = n('HfwS'),
        O = n('Yi2Q'),
        j = n('UYhW'),
        C = n('tDS2'),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              return g.createElement(
                j.a,
                Object(b.__assign)({}, this.props, {
                  mode: 'integer',
                  className: C.input,
                }),
              );
            }),
            t
          );
        })(g.PureComponent),
        S = Object(O.a)(E, { change: 1 / 0, commit: 0, blur: 0 }),
        w = Object(_.a)(S),
        N = n('YS4w'),
        x = n('h5Dg'),
        B = n('3G1X'),
        D = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e.currentTarget.value, o, a);
              }),
              t
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input.defval,
                n = e.value,
                r = e.disabled,
                o = e.onBlur,
                a = e.onKeyDown;
              return g.createElement(B.b, {
                className: C.input,
                value: void 0 === n ? t : n,
                onChange: this._onChange,
                onBlur: o,
                onKeyDown: a,
                disabled: r,
              });
            }),
            t
          );
        })(g.PureComponent),
        I = Object(O.a)(D),
        P = Object(_.a)(I),
        R = n('fV01'),
        k = n('TSYQ'),
        F = n.n(k),
        V = n('Eyy1'),
        T = n('XDrA'),
        M = n('qFKp'),
        G = n('jjrI'),
        H = n('OL6p'),
        q = n('yd0C'),
        K = n('Oi2w'),
        A = n('wnq4'),
        L = n('8Rai'),
        Y = n('Hr11'),
        z =
          (((h = {})[0] = { pattern: /\d/ }),
          (h[9] = { pattern: /\d/, optional: !0 }),
          (h['#'] = { pattern: /\d/, recursive: !0 }),
          (h.A = { pattern: /[a-zA-Z0-9]/ }),
          (h.S = { pattern: /[a-zA-Z]/ }),
          h),
        U = n('/3z9'),
        W = n('9dlw'),
        X = n('N5tr'),
        Q = n('Y7w9'),
        J = (function () {
          var e,
            t,
            n,
            r,
            o,
            a = [];
          for (e = 0; e < 24; ++e)
            for (t = 0; t < 60; t += 15)
              (o = l(
                (r = (n = [d(e.toString()), d(t.toString())])[0] + ':' + n[1]),
              )
                ? r
                : p(r)),
                a.push(o);
          return a;
        })(),
        Z = M.CheckMobile.any()
          ? function (e) {
              var t = e.onChange,
                n = e.onFocus,
                o = e.value,
                a = e.className,
                u = Object(b.__rest)(e, [
                  'onChange',
                  'onFocus',
                  'value',
                  'className',
                ]),
                i = Object(g.useRef)(null),
                s = Object(K.a)(),
                c = s[0],
                l = s[1];
              return y.a.createElement(
                'div',
                { className: F()(A.wrap, a) },
                y.a.createElement(
                  B.b,
                  Object(b.__assign)({}, u, {
                    type: 'text',
                    icon: y.a.createElement(
                      B.c,
                      null,
                      y.a.createElement(r, null),
                    ),
                    iconPosition: 'right',
                    value: o,
                    intent: c ? 'primary' : void 0,
                    onFocus: function (e) {
                      Object(V.ensureNotNull)(i.current).focus(), n && n(e);
                    },
                    onChange: function () {},
                  }),
                ),
                y.a.createElement(
                  'input',
                  Object(b.__assign)({}, l, {
                    className: A.input,
                    type: 'time',
                    onChange: function (e) {
                      t && t(e.currentTarget.value);
                    },
                    value: o,
                    ref: i,
                  }),
                ),
              );
            }
          : s,
        $ = (function (e) {
          function t(t) {
            var n,
              r,
              o,
              a,
              u = e.call(this, t) || this;
            return (
              (u._onStartPick = function (e) {
                u.setState({ startTime: e }, u._onChange);
              }),
              (u._onEndPick = function (e) {
                u.setState({ endTime: e }, u._onChange);
              }),
              (u._onChange = function () {
                var e = u.props,
                  t = e.input,
                  n = t.id,
                  r = t.name,
                  o = e.onChange,
                  a = u.state,
                  i = a.startTime,
                  s = a.endTime,
                  c = i.replace(':', '') + '-' + s.replace(':', '');
                o(c, n, r);
              }),
              (o = (r = m((n = t.value || t.input.defval)))[0]),
              (a = r[1]),
              (u.state = {
                prevValue: n,
                startTime: o,
                endTime: a,
              }),
              u
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.startTime,
                n = e.endTime;
              return g.createElement(
                T.a,
                null,
                g.createElement(
                  'div',
                  { className: C.sessionStart },
                  g.createElement(Z, {
                    className: F()(C.input, C.sessionInputContainer),
                    name: 'start',
                    value: Object(V.ensureDefined)(t),
                    onChange: this._onStartPick,
                  }),
                  g.createElement('span', { className: C.sessionDash }, ' — '),
                ),
                g.createElement(
                  'div',
                  { className: C.sessionEnd },
                  g.createElement(Z, {
                    className: F()(C.input, C.sessionInputContainer),
                    name: 'end',
                    value: Object(V.ensureDefined)(n),
                    onChange: this._onEndPick,
                  }),
                ),
              );
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              if (e.value === t.prevValue) return t;
              var n = m(e.value),
                r = n[0],
                o = n[1];
              return { prevValue: e.value, startTime: r, endTime: o };
            }),
            t
          );
        })(g.PureComponent),
        ee = Object(_.a)($),
        te = (n('YFKU'), n('Kxc7')),
        ne = n('0YCj'),
        re = n.n(ne),
        oe = n('+8gn'),
        ae = n('HGyE'),
        ue = {
          open: window.t('open'),
          high: window.t('high'),
          low: window.t('low'),
          close: window.t('close'),
          hl2: window.t('hl2'),
          hlc3: window.t('hlc3'),
          ohlc4: window.t('ohlc4'),
        },
        ie = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                r,
                o,
                a = this.props.input,
                u = this.context,
                i = u.study,
                s = u.model,
                c = Object(b.__assign)({}, ue);
              return (
                i &&
                  this._isStudy(i) &&
                  i.isChildStudy() &&
                  ((t = (e = i.parentSource()).title()),
                  (n = re.a.getChildSourceInputTitles(a, e.metaInfo(), t)),
                  (c = Object(b.__assign)(Object(b.__assign)({}, c), n))),
                te.enabled('study_on_study') &&
                  i &&
                  this._isStudy(i) &&
                  (i.isChildStudy() || re.a.canBeChild(i.metaInfo())) &&
                  ((r = Object(b.__spreadArrays)([i], i.getAllChildren())),
                  s
                    .model()
                    .allStudies()
                    .filter(function (e) {
                      return e.canHaveChildren() && !r.includes(e);
                    })
                    .forEach(function (e) {
                      var t,
                        n = e.title(!0, void 0, !0),
                        r = e.sourceId() || '#' + e.id(),
                        o = e.metaInfo(),
                        a = o.styles,
                        u = o.plots || [];
                      1 === u.length
                        ? (c[r + '$0'] = n)
                        : u.length > 1 &&
                          ((t = u.reduce(function (e, t, o) {
                            var u, i;
                            if (!re.a.canPlotBeSourceOfChildStudy(t.type))
                              return e;
                            try {
                              i = Object(V.ensureDefined)(
                                Object(V.ensureDefined)(a)[t.id],
                              ).title;
                            } catch (e) {
                              i = t.id;
                            }
                            return Object(b.__assign)(
                              Object(b.__assign)({}, e),
                              (((u = {})[r + '$' + o] = n + ': ' + i), u),
                            );
                          }, {})),
                          (c = Object(b.__assign)(
                            Object(b.__assign)({}, c),
                            t,
                          )));
                    })),
                (o = Object(b.__assign)(Object(b.__assign)({}, a), {
                  type: 'text',
                  options: Object.keys(c),
                  optionsTitles: c,
                })),
                g.createElement(
                  ae.a,
                  Object(b.__assign)({}, this.props, { input: o }),
                )
              );
            }),
            (t.prototype._isStudy = function (e) {
              return !e.hasOwnProperty('isInputsStudy');
            }),
            (t.contextType = oe.b),
            t
          );
        })(g.PureComponent),
        se = n('LxhU'),
        ce = n('pPtI'),
        le = n('H172'),
        pe = [
          '1',
          '3',
          '5',
          '15',
          '30',
          '45',
          '60',
          '120',
          '180',
          '240',
          '1D',
          '1W',
          '1M',
        ],
        de = pe.map(function (e) {
          return {
            value: e,
            content: Object(ce.getTranslatedResolutionModel)(e).hint,
          };
        }),
        fe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e, o, a);
              }),
              t
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = e.value,
                r = e.disabled,
                o = se.Interval.parse(void 0 === n ? t.defval : n),
                a = o.multiplier(),
                u = o.value();
              return (
                (a && pe.includes(u)) || (u = pe[0]),
                g.createElement(le.a, {
                  className: C.input,
                  menuClassName: C.dropdownMenu,
                  items: de,
                  value: u,
                  onChange: this._onChange,
                  disabled: r,
                })
              );
            }),
            t
          );
        })(g.PureComponent),
        me = Object(_.a)(fe),
        he = n('xx2B'),
        ve = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.props,
                  r = n.input,
                  o = r.id,
                  a = r.name;
                (0, n.onChange)(e, o, a);
              }),
              t
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = t.defval,
                r = t.min,
                o = t.max,
                a = e.value,
                u = e.disabled;
              return g.createElement(he.a, {
                className: C.input,
                value: Number(void 0 === a ? n : a),
                min: r,
                max: o,
                onValueChange: this._onChange,
                disabled: u,
              });
            }),
            t
          );
        })(g.PureComponent),
        be = Object(_.a)(ve);
      n.d(t, 'a', function () {
        return v;
      }),
        (v = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.input,
                r = t.disabled,
                o = t.onChange;
              if (
                ['text', 'integer', 'float', 'session', 'resolution'].includes(
                  (e = n).type,
                ) &&
                e.hasOwnProperty('options')
              )
                return g.createElement(ae.a, {
                  input: n,
                  disabled: r,
                  onChange: o,
                });
              switch (n.type) {
                case 'integer':
                  return g.createElement(w, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'float':
                  return g.createElement(N.a, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'bool':
                  return g.createElement(x.a, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'text':
                  return g.createElement(P, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'symbol':
                  return g.createElement(R.a, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'session':
                  return g.createElement(ee, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'source':
                  return g.createElement(ie, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'resolution':
                  return g.createElement(me, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                case 'time':
                  return g.createElement(be, {
                    input: n,
                    disabled: r,
                    onChange: o,
                  });
                default:
                  return null;
              }
            }),
            t
          );
        })(g.PureComponent));
    },
    UYhW: function (e, t, n) {
      'use strict';
      var r, o, a, u, i;
      n.d(t, 'a', function () {
        return i;
      }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('Eyy1')),
        (u = n('xx2B')),
        (i = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._container = null),
              (t._handleContainerRef = function (e) {
                return (t._container = e);
              }),
              (t._onChange = function (e, n) {
                var r = t.props,
                  o = r.input,
                  a = o.id,
                  u = o.name,
                  i = r.onChange,
                  s = r.onBlur;
                i(e, a, u), 'step' === n && s && s();
              }),
              (t._onBlur = function (e) {
                var n,
                  r = t.props.onBlur;
                r &&
                  ((n = Object(a.ensureNotNull)(t._container)).contains(
                    document.activeElement,
                  ) ||
                    n.contains(e.relatedTarget) ||
                    r());
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input,
                n = t.defval,
                r = t.min,
                a = t.max,
                i = t.step,
                s = e.value,
                c = e.disabled,
                l = e.onKeyDown,
                p = e.className,
                d = e.mode;
              return o.createElement(u.a, {
                className: p,
                value: Number(void 0 === s ? n : s),
                min: r,
                max: a,
                step: i,
                mode: d,
                onBlur: this._onBlur,
                onValueChange: this._onChange,
                onKeyDown: l,
                disabled: c,
                containerReference: this._handleContainerRef,
                inputMode: 'numeric',
                fontSizeStyle: 'medium',
                roundByStep: !1,
              });
            }),
            t
          );
        })(o.PureComponent));
    },
    UnvE: function (e) {
      e.exports = {
        radio: 'radio-1cZENBYk-',
        input: 'input-303BGOua-',
        box: 'box-3rMRS-wv-',
        reverse: 'reverse-39E2s_WA-',
        label: 'label-3Xg_J0oJ-',
        wrapper: 'wrapper-1Law0ttl-',
        noOutline: 'noOutline-3-BkNnru-',
      };
    },
    XDrA: function (e, t, n) {
      'use strict';
      function r(e) {
        return o.createElement(
          'div',
          {
            className: a.inputGroup,
          },
          e.children,
        );
      }
      var o, a;
      n.d(t, 'a', function () {
        return r;
      }),
        (o = n('q1tI')),
        (a = n('tDS2'));
    },
    XSYw: function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('TSYQ')),
        (u = n('0Mig')),
        (i = n('UnvE')),
        n('89he'),
        (t.RadioButton = u.makeSwitchGroupItem(
          (((s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onChange = function () {
                  t.props.onChange && t.props.onChange(t.props.value);
                }),
                t
              );
            }
            return (
              r.__extends(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n,
                  r = a(
                    this.props.className,
                    i.radio,
                    (((e = {})[i.reverse] = Boolean(
                      this.props.labelPositionReverse,
                    )),
                    e),
                  ),
                  u = a(
                    i.label,
                    (((t = {})[i.disabled] = this.props.disabled), t),
                  ),
                  s = a(
                    i.box,
                    (((n = {})[i.noOutline] = -1 === this.props.tabIndex), n),
                  ),
                  c = null;
                return (
                  this.props.label &&
                    (c = o.createElement(
                      'span',
                      { className: u },
                      this.props.label,
                    )),
                  o.createElement(
                    'label',
                    { className: r },
                    o.createElement(
                      'div',
                      { className: i.wrapper, title: this.props.title },
                      o.createElement('input', {
                        id: this.props.id,
                        tabIndex: this.props.tabIndex,
                        autoFocus: this.props.autoFocus,
                        role: this.props.role,
                        className: i.input,
                        type: 'radio',
                        name: this.props.name,
                        checked: this.props.checked,
                        disabled: this.props.disabled,
                        value: this.props.value,
                        onChange: this._onChange,
                        ref: this.props.reference,
                      }),
                      o.createElement('div', { className: s }),
                    ),
                    c,
                  )
                );
              }),
              t
            );
          })(o.PureComponent)).defaultProps = { value: 'on' }),
          s),
        ));
    },
    YS4w: function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s, c, l, p;
      n.d(t, 'b', function () {
        return l;
      }),
        n.d(t, 'a', function () {
          return p;
        }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('UYhW')),
        (u = n('HfwS')),
        (i = n('Yi2Q')),
        (s = n('tDS2')),
        (c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              return o.createElement(
                a.a,
                Object(r.__assign)({}, this.props, { className: s.input }),
              );
            }),
            t
          );
        })(o.PureComponent)),
        (l = Object(i.a)(c, { change: 1 / 0, commit: 0, blur: 0 })),
        (p = Object(u.a)(l));
    },
    Yi2Q: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          void 0 === t && (t = u),
          (function (n) {
            function r(e) {
              var r = n.call(this, e) || this;
              return (
                (r._onChange = function (e, n, o) {
                  var a = t.change;
                  a
                    ? (clearTimeout(r._timeout),
                      r.setState({ value: e }, function () {
                        a !== 1 / 0 &&
                          (r._timeout = setTimeout(function () {
                            return r._flush();
                          }, a));
                      }))
                    : r._flush(e);
                }),
                (r._onBlur = function () {
                  r._debounce(t.blur);
                  var e = r.props.onBlur;
                  e && e();
                }),
                (r._onKeyDown = function (e) {
                  13 === e.keyCode && r._debounce(t.commit);
                }),
                (r.state = { prevValue: e.value, value: e.value }),
                r
              );
            }
            return (
              Object(o.__extends)(r, n),
              (r.prototype.componentWillUnmount = function () {
                this._flush();
              }),
              (r.prototype.render = function () {
                var t = this.state.value;
                return a.createElement(
                  e,
                  Object(o.__assign)({}, this.props, {
                    value: t,
                    onChange: this._onChange,
                    onBlur: this._onBlur,
                    onKeyDown: this._onKeyDown,
                  }),
                );
              }),
              (r.getDerivedStateFromProps = function (e, t) {
                return e.value === t.prevValue
                  ? t
                  : { prevValue: e.value, value: e.value };
              }),
              (r.prototype._debounce = function (e) {
                var t = this;
                e
                  ? (clearTimeout(this._timeout),
                    e !== 1 / 0 &&
                      (this._timeout = setTimeout(function () {
                        return t._flush();
                      }, e)))
                  : this.setState(function (e) {
                      t._flush(e.value);
                    });
              }),
              (r.prototype._flush = function (e) {
                var t,
                  n = this.props,
                  r = n.input,
                  o = r.id,
                  a = r.name,
                  u = n.onChange,
                  i = this.state,
                  s = i.prevValue,
                  c = i.value;
                clearTimeout(this._timeout),
                  (t = void 0 !== e ? e : c),
                  u && void 0 !== t && t !== s && u(t, o, a);
              }),
              r
            );
          })(a.PureComponent)
        );
      }
      var o, a, u;
      n.d(t, 'a', function () {
        return r;
      }),
        (o = n('mrSG')),
        (a = n('q1tI')),
        (u = { blur: 0, commit: 0, change: 1 / 0 });
    },
    fV01: function (e, t, n) {
      'use strict';
      function r(e, t) {
        var n = t.resolvedSymbolInfoBySymbol(e);
        return n && (n.ticker || n.full_name) ? n.ticker || n.full_name : e;
      }
      var o, a, u, i, s, c, l, p, d, f, m, h, v, b, g;
      n.d(t, 'c', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return b;
        }),
        n.d(t, 'a', function () {
          return g;
        }),
        (o = n('mrSG')),
        (a = n('Eyy1')),
        (u = n('q1tI')),
        (i = n.n(u)),
        (s = n('pZll')),
        (c = n('3G1X')),
        (l = n('+8gn')),
        (p = n('HfwS')),
        (d = n('0waE')),
        (f = n('jAh7')),
        (m = n('+EG+')),
        (h = n('RgaO')),
        (v = n('tDS2')),
        (b = (function (e) {
          function t(t) {
            var n,
              o = e.call(this, t) || this;
            return (
              (o._input = null),
              (o._popup = null),
              (o._uuid = Object(d.guid)()),
              (o._updateSymbolName = function () {
                o._onSetSymbol(o.state.value);
              }),
              (o._onSetSymbol = function (e) {
                var t = o.props.study,
                  n = r(e, t),
                  a = o.props,
                  u = a.input,
                  i = u.id,
                  s = u.name,
                  c = a.onChange;
                c(n, i, s), o.setState({ value: n });
              }),
              (o._refInput = function (e) {
                o._input = e;
              }),
              (o._handleOutsideClick = function (e) {
                null !== o._input &&
                  document.activeElement === o._input &&
                  e.target instanceof Node &&
                  null !== o._popup &&
                  !o._popup.contains(e.target) &&
                  o._input.blur();
              }),
              (n = t.value),
              (o.state = { value: n || '', expanded: !1 }),
              o
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.study,
                n = this.context || Object(f.getRootOverlapManager)();
              Object(s.symbolSearchUIService)().bindToInput(
                Object(a.ensureNotNull)(this._input),
                {
                  syncWithChartWidget: !1,
                  syncOnBlur: !0,
                  callback: this._onSetSymbol,
                  onPopupOpen: function (t) {
                    (e._popup = n.ensureWindow(e._uuid)),
                      e.setState({ expanded: !0 }),
                      t.appendTo(e._popup);
                  },
                  onPopupClose: function () {
                    (e._popup = null),
                      e.setState({ expanded: !1 }),
                      n.removeWindow(e._uuid),
                      e._input && e._input.focus();
                  },
                  keepFocus: !0,
                },
              ),
                t.symbolsResolved().subscribe(this, this._updateSymbolName);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.study
                .symbolsResolved()
                .unsubscribe(this, this._updateSymbolName);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.disabled,
                n = this.state,
                r = n.value,
                o = n.expanded;
              return i.a.createElement(
                h.a,
                {
                  mouseDown: !0,
                  touchStart: !0,
                  handler: this._handleOutsideClick,
                },
                function (n) {
                  return i.a.createElement(c.b, {
                    className: v.input,
                    defaultValue: r,
                    disabled: t,
                    reference: e._refInput,
                    containerReference: n,
                    'data-haspopup': !0,
                    'data-expanded': o,
                  });
                },
              );
            }),
            (t.prototype.updateSymbol = function () {
              this._onSetSymbol(this.state.value);
            }),
            (t.contextType = m.b),
            t
          );
        })(i.a.PureComponent)),
        (g = Object(p.a)(function (e) {
          var t = Object(u.useContext)(l.b),
            n = Object(a.ensureNotNull)(t).study,
            s = e.input.defval,
            c = e.value;
          return i.a.createElement(
            b,
            Object(o.__assign)({}, e, { value: r(c || s || '', n), study: n }),
          );
        }));
    },
    h5Dg: function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s, c, l;
      n.d(t, 'b', function () {
        return c;
      }),
        n.d(t, 'a', function () {
          return l;
        }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('dWaX')),
        (u = n('qFKp')),
        (i = n('HfwS')),
        (s = n('tDS2')),
        (c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function () {
                var e = t.props,
                  n = e.input,
                  r = n.id,
                  o = n.name,
                  a = e.value;
                (0, e.onChange)(!a, r, o);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.input.defval,
                n = e.value,
                r = e.disabled,
                i = e.label,
                c = void 0 === n ? t : n;
              return o.createElement(a.Checkbox, {
                className: s.checkbox,
                disabled: r,
                checked: c,
                onChange: this._onChange,
                label: o.createElement('span', { className: s.label }, i),
                labelAlignBaseline: !u.isIE,
              });
            }),
            t
          );
        })(o.PureComponent)),
        (l = Object(i.a)(c));
    },
    pG7R: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('XSYw'), t);
    },
    rJEJ: function (e, t, n) {
      'use strict';
      var r, o, a, u, i, s;
      n.d(t, 'a', function () {
        return s;
      }),
        (r = n('mrSG')),
        n('YFKU'),
        (o = n('q1tI')),
        (a = n('Eyy1')),
        (u = n('PjdP')),
        (i = n('Q+1u')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.label,
                n = e.children,
                r = e.input,
                s = e.disabled,
                c = e.onChange,
                l = e.labelAlign,
                p = e.grouped;
              return o.createElement(
                i.a.Row,
                null,
                o.createElement(
                  i.a.Cell,
                  { placement: 'first', verticalAlign: l, grouped: p },
                  void 0 !== t
                    ? t
                    : window.t(Object(a.ensureDefined)(r).name, {
                        context: 'input',
                      }),
                ),
                o.createElement(
                  i.a.Cell,
                  { placement: 'last', grouped: p },
                  n ||
                    o.createElement(u.a, {
                      input: Object(a.ensureDefined)(r),
                      onChange: c,
                      disabled: s,
                    }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent));
    },
    tDS2: function (e, t, n) {
      e.exports = {
        input: 'input-2M6pUl-Q',
        checkbox: 'checkbox-15VqCFje',
        label: 'label-3rCCk0Td',
        symbolInput: 'symbolInput-1r0O05gG',
        isFocused: 'isFocused-3ps_uNFG',
        readonly: 'readonly-3HE9PFCu',
        disabled: 'disabled-3omO9UCm',
        error: 'error-3HEkUG-H',
        dropdownMenu: 'dropdownMenu-sPl98nIf',
        sessionStart: 'sessionStart-20Y_zZKF',
        sessionEnd: 'sessionEnd-Biyt0SRM',
        sessionInputContainer: 'sessionInputContainer-3fr-ovpl',
        sessionDash: 'sessionDash-3i8ftDqe',
        inputGroup: 'inputGroup-13um8mnj',
      };
    },
    wnq4: function (e, t, n) {
      e.exports = { wrap: 'wrap-3UffnxXt', input: 'input-1Xqn_2Yr' };
    },
    xx2B: function (e, t, n) {
      'use strict';
      function r(e, t) {
        var n = e.useFormatter,
          r = void 0 === n || n,
          o = e.formatter,
          a = e.mode,
          u = r && 'integer' !== a;
        return u
          ? (function (e, t) {
              void 0 === t && (t = s);
              return null !== e ? t.format(e) : '';
            })(t, o)
          : (function (e) {
              if (null === e) return '';
              return j.NumericFormatter.formatNoE(e);
            })(t);
      }
      function o(e, t) {
        return void 0 === t && (t = s), t.parse(e);
      }
      var a,
        u,
        i,
        s,
        c,
        l,
        p,
        d = n('mrSG'),
        f = n('q1tI'),
        m = n.n(f),
        h = (n('YFKU'), n('WboT')),
        v = n('9XXR'),
        b = n('Ialn'),
        g = n('qFKp'),
        y = (function () {
          function e(e) {
            void 0 === e && (e = ' '), (this._divider = e);
          }
          return (
            (e.prototype.format = function (e) {
              var t = Object(v.splitThousands)(e, this._divider);
              return Object(b.isRtl)() && g.isChrome
                ? Object(b.startWithLTR)(t)
                : t;
            }),
            (e.prototype.parse = function (e) {
              var t = Object(b.stripLTRMarks)(e).split(this._divider).join(''),
                n = Number(t);
              return isNaN(n) || /e/i.test(t)
                ? { res: !1 }
                : { res: !0, price: n, suggest: this.format(n) };
            }),
            e
          );
        })(),
        _ = n('nc0P'),
        O = n('Hr11'),
        j = n('zXvd');
      n.d(t, 'a', function () {
        return p;
      }),
        (a = window.t('Number format is invalid.')),
        (u = window.t('Specified value is less that the instrument minimum.')),
        (i = window.t('Specified value is more than the instrument maximum.')),
        (s = new y()),
        (c = /^\-?[0-9]*$/),
        (l = 9e15),
        (p = (function (e) {
          function t(t) {
            var n,
              u = e.call(this, t) || this;
            return (
              (u._onFocus = function (e) {
                u.setState({ focused: !0 }),
                  u.props.onFocus && u.props.onFocus(e);
              }),
              (u._onBlur = function (e) {
                u.setState({
                  displayValue: r(u.props, u.props.value),
                  focused: !1,
                }),
                  u.props.errorHandler && u.props.errorHandler(!1),
                  u.props.onBlur && u.props.onBlur(e);
              }),
              (u._onValueChange = function (e) {
                var t,
                  n,
                  r,
                  i,
                  s,
                  l = e.target.value;
                ('integer' !== u.props.mode || c.test(l)) &&
                  ((n = (t = o(l, u.props.formatter)).res
                    ? u._checkValueBoundaries(t.price)
                    : { value: !1 }),
                  (r = t.res && !n.value),
                  (i = t.res && t.suggest && !u.state.focused ? t.suggest : l),
                  (s = r && n.msg ? n.msg : a),
                  u.setState({ displayValue: i, errorMsg: s }),
                  t.res && n.value && u.props.onValueChange(t.price, 'input'),
                  u.props.errorHandler && u.props.errorHandler(!t.res || r));
              }),
              (u._onValueByStepChange = function (e) {
                var t,
                  n,
                  a,
                  i,
                  s = u.props,
                  c = s.roundByStep,
                  l = void 0 === c || c,
                  p = s.step,
                  d = void 0 === p ? 1 : p,
                  f = s.formatter,
                  m = o(u.state.displayValue, f),
                  h = d;
                m.res &&
                  ((t = new _.Big(m.price)),
                  (n = new _.Big(d)),
                  (a = t.mod(n)),
                  (i = t.plus(e * d)),
                  !a.eq(0) && l && (i = i.plus((e > 0 ? 0 : 1) * d).minus(a)),
                  (h = Number(i))),
                  u._checkValueBoundaries(h).value &&
                    (u.setState({ displayValue: r(u.props, h) }),
                    u.props.onValueChange(h, 'step')),
                  u.props.errorHandler && u.props.errorHandler(!1);
              }),
              (n = t.value),
              (u.state = {
                value: n,
                displayValue: r(t, n),
                focused: !1,
                errorMsg: a,
              }),
              u
            );
          }
          return (
            Object(d.__extends)(t, e),
            (t.prototype.render = function () {
              return m.a.createElement(h.a, {
                inputMode: this.props.inputMode,
                borderStyle: this.props.borderStyle,
                fontSizeStyle: this.props.fontSizeStyle,
                value: this.state.displayValue,
                forceShowControls: this.props.forceShowControls,
                className: this.props.className,
                button: this.props.button,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                error: this.props.error,
                errorMessage: this.props.errorMessage || this.state.errorMsg,
                onValueChange: this._onValueChange,
                onValueByStepChange: this._onValueByStepChange,
                containerReference: this.props.containerReference,
                inputReference: this.props.inputReference,
                onClick: this.props.onClick,
                onFocus: this._onFocus,
                onBlur: this._onBlur,
                onKeyDown: this.props.onKeyDown,
                controlDecKeyCodes: this.props.controlDecKeyCodes,
                controlIncKeyCodes: this.props.controlIncKeyCodes,
              });
            }),
            (t.prototype.getClampedValue = function () {
              var e = this.props,
                t = e.min,
                n = void 0 === t ? -1 / 0 : t,
                r = e.max,
                a = void 0 === r ? l : r,
                u = o(this.state.displayValue, this.props.formatter);
              return u.res ? Object(O.clamp)(u.price, n, a) : null;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.alwaysUpdateValueFromProps,
                o = e.value;
              return (t.focused && !n) || t.value === o
                ? null
                : { value: o, displayValue: r(e, o) };
            }),
            (t.prototype._checkValueBoundaries = function (e) {
              var t = this.props,
                n = t.min,
                r = void 0 === n ? -1 / 0 : n,
                o = t.max,
                a = void 0 === o ? l : o,
                s = (function (e, t, n) {
                  var r = e >= t,
                    o = e <= n;
                  return {
                    passMin: r,
                    passMax: o,
                    pass: r && o,
                    clamped: Object(O.clamp)(e, t, n),
                  };
                })(e, r, a),
                c = s.passMax ? (s.passMin ? void 0 : u) : i;
              return { value: s.pass, msg: c };
            }),
            t
          );
        })(m.a.PureComponent));
    },
    yd0C: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="currentColor" d="M1 8.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM9 9V3H8v5H5v1h4z"/></svg>';
    },
  },
]);
