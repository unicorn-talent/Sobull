(window.webpackJsonp = window.webpackJsonp || []).push([
  ['new-edit-object-dialog'],
  {
    '/YRR': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l5-5a1.414 1.414 0 0 1 2 0m11-1l-5 5a1.414 1.414 0 0 1-2 0"/><path fill="currentColor" d="M14 5h1v2h-1zM14 10h1v2h-1zM14 15h1v2h-1zM14 20h1v2h-1z"/></svg>';
    },
    '01Ho': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14.354 6.646L14 6.293l-.354.353-7 7-.353.354.353.354 7 7 .354.353.354-.353 7-7 .353-.354-.353-.354-7-7z"/></svg>';
    },
    '4Njr': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 21l7.424-6.114a.5.5 0 0 0-.318-.886H18.5V7h-9v7H6.894a.5.5 0 0 0-.318.886L14 21z"/></svg>';
    },
    '4ZyK': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 22v-5.5m0 0v-8L12 7l4 2.5 3.5-1v8l-3.5 1-4-2.5-3.5 1.5z"/></svg>';
    },
    '5VK0': function (e, t, n) {
      e.exports = {
        scrollWrap: 'scrollWrap-hMorJ3oa',
        tabsWrap: 'tabsWrap-DW4tJckL',
        tabs: 'tabs-2ZEU3acm',
        tab: 'tab-1l4dFt6c',
        withHover: 'withHover-1_-qVdZP',
        headerBottomSeparator: 'headerBottomSeparator-1v9qLLAy',
      };
    },
    '5o6O': function (e, t, n) {
      e.exports = {
        tabs: 'tabs-1LGqoVz6',
        tab: 'tab-1Yr0rq0J',
        noBorder: 'noBorder-oc3HwerO',
        disabled: 'disabled-s8cEYElA',
        active: 'active-37sipdzm',
        defaultCursor: 'defaultCursor-Np9BHjTg',
        slider: 'slider-1-X4lOmE',
        content: 'content-2asssfGq',
      };
    },
    '8E5s': function (e) {
      e.exports = {
        switcherWrapper: 'switcherWrapper-1wFH-_jm-',
        input: 'input-J7QIcTTo-',
        switcherThumbWrapper: 'switcherThumbWrapper-2u191lDO-',
        switcherTrack: 'switcherTrack-2XruDVTa-',
        switcherThumb: 'switcherThumb-2yuEucci-',
        focus: 'focus-uZMRkCO0-',
      };
    },
    '9FXF': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 12.5v8h3v-8h-3zM12.5 7.5v13h3v-13h-3zM18.5 15.5v5h3v-5h-3z"/></svg>';
    },
    D2im: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M17 8.5h7M20.5 12V5M10 19.5h7M13.5 23v-7M3 12.5h7M6.5 16V9"/></svg>';
    },
    Dj0x: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 18.5h-.5V8.793l.146-.147 3-3L14 5.293l.354.353 3 3 .146.147V18.5H11z"/></svg>';
    },
    K3s3: function (e, t, n) {
      'use strict';
      function r(e) {
        var t,
          n = i(
            e.className,
            c.tab,
            (((t = {})[c.active] = e.isActive),
            (t[c.disabled] = e.isDisabled),
            (t[c.defaultCursor] = !!e.shouldUseDefaultCursor),
            (t[c.noBorder] = !!e.noBorder),
            t),
          );
        return l.createElement(
          'div',
          { className: n, onClick: e.onClick, ref: e.reference },
          e.children,
        );
      }
      function o(e) {
        return (function (t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.activeTab = { current: null }), e;
          }
          return (
            Object(a.__extends)(n, t),
            (n.prototype.componentDidUpdate = function () {
              var e = Object(s.ensureNotNull)(this._slider),
                t = e.style;
              (t.transition = 'transform 350ms'), this._componentDidUpdate();
            }),
            (n.prototype.componentDidMount = function () {
              this._componentDidUpdate();
            }),
            (n.prototype.render = function () {
              var t = this,
                n = this.props.className,
                r = this._generateTabs();
              return l.createElement(
                'div',
                { className: i(n, c.tabs) },
                r,
                l.createElement(e, {
                  reference: function (e) {
                    t._slider = e;
                  },
                }),
              );
            }),
            (n.prototype._generateTabs = function () {
              var e = this;
              return (
                (this.activeTab.current = null),
                l.Children.map(this.props.children, function (t) {
                  var n = t,
                    r = Boolean(n.props.isActive),
                    o = {
                      reference: function (t) {
                        r && (e.activeTab.current = t),
                          n.props.reference && n.props.reference(t);
                      },
                    };
                  return l.cloneElement(n, o);
                })
              );
            }),
            (n.prototype._componentDidUpdate = function () {
              var e,
                t,
                n = Object(s.ensureNotNull)(this._slider),
                r = n.style;
              this.activeTab.current
                ? ((e = this.activeTab.current.offsetWidth),
                  (t = this.activeTab.current.offsetLeft),
                  (r.transform = 'translateX(' + t + 'px)'),
                  (r.width = e + 'px'),
                  (r.opacity = '1'))
                : (r.opacity = '0');
            }),
            n
          );
        })(l.PureComponent);
      }
      var a, l, i, s, c, p;
      n.d(t, 'a', function () {
        return p;
      }),
        n.d(t, 'b', function () {
          return r;
        }),
        n.d(t, 'c', function () {
          return o;
        }),
        (a = n('mrSG')),
        (l = n('q1tI')),
        (i = n('TSYQ')),
        (s = n('Eyy1')),
        (c = n('5o6O')),
        (p = c),
        o(function (e) {
          return l.createElement('div', {
            className: c.slider,
            ref: e.reference,
          });
        });
    },
    KKsp: function (e, t, n) {
      'use strict';
      function r(e) {
        return o.createElement('div', { className: a.separator });
      }
      var o, a;
      n.d(t, 'a', function () {
        return r;
      }),
        (o = n('q1tI')),
        (a = n('NOPy'));
    },
    Ly1u: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 7.5h13v13h-13z"/></svg>';
    },
    NOPy: function (e, t, n) {
      e.exports = { separator: 'separator-25lkUpN-' };
    },
    OP2o: function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-3Sj-FzgR',
        hovered: 'hovered-1G0yygIe',
        labelRow: 'labelRow-3h7cSJ_L',
        label: 'label-3iLxp29M',
        labelHint: 'labelHint-3qxeiVfa',
        labelOn: 'labelOn-10QGwv2n',
      };
    },
    V1YL: function (e, t, n) {
      e.exports = {
        recalculateCheckbox: 'recalculateCheckbox-1Xa1TR7D',
        descriptionCell: 'descriptionCell-3oIbGAm4',
      };
    },
    W7Dn: function (e, t, n) {
      e.exports = { scrollable: 'scrollable-mKj9lAM_' };
    },
    WIlE: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('mrSG').__exportStar(n('l5G/'), t);
    },
    Y5hB: function (e, t, n) {
      'use strict';
      function r(e) {
        var t = e.property,
          n = e.model,
          r = e.inputs,
          o = e.study;
        return u.createElement(
          R.a,
          { property: t.inputs, model: n, study: o },
          u.createElement(Q, { inputs: r }),
        );
      }
      function o(e, t) {
        return (function (e, t) {
          return u.createElement(ae.Consumer, null, function (n) {
            return n
              ? u.createElement(
                  e,
                  Object(b.__assign)({}, Object.assign({ model: n }, t)),
                )
              : null;
          });
        })(function (n) {
          var r = n.model;
          return u.createElement(
            ie,
            { model: r, property: t.property },
            u.createElement(e, Object(b.__assign)({}, t)),
          );
        }, t);
      }
      function a(e) {
        return Array.isArray(e) ? e[0].value() : e.value();
      }
      function l(e, t) {
        var n, r;
        if (Array.isArray(e)) for (n = 0, r = e; n < r.length; n++) t(r[n]);
        else t(e);
      }
      function i(e) {
        var t,
          n,
          r = e.className,
          o = e.checked,
          a = e.id,
          l = e.label,
          i = e.labelDescription,
          s = e.value,
          c = e.preventLabelHighlight,
          p = e.reference,
          u = e.switchReference,
          h = de()(fe.label, (((t = {})[fe.labelOn] = o && !c), t)),
          m = de()(
            r || '',
            fe.wrapper,
            (((n = {})[fe.wrapperWithOnLabel] = o), n),
          );
        return d.a.createElement(
          'label',
          { className: m, htmlFor: a, ref: p },
          d.a.createElement(
            'div',
            { className: fe.labelRow },
            d.a.createElement('div', { className: h }, l),
            i && d.a.createElement('div', { className: fe.labelHint }, i),
          ),
          d.a.createElement(
            he.Switch,
            Object(b.__assign)(
              {
                reference: u,
                checked: o,
                onChange: function (t) {
                  var n = t.target.checked;
                  void 0 !== e.onChange && e.onChange(n);
                },
                value: s,
                tabIndex: -1,
                id: a,
              },
              Object(me.a)(e),
            ),
          ),
        );
      }
      function s(e) {
        return wt[e];
      }
      function c(e) {
        return o(
          hn,
          Object(b.__assign)(Object(b.__assign)({}, e), {
            property: e.study.properties(),
          }),
        );
      }
      var p,
        u,
        d,
        h,
        m,
        f,
        v,
        y,
        b,
        g,
        w,
        _,
        C,
        S,
        E,
        P,
        x,
        O,
        k,
        j,
        T,
        N,
        L,
        M,
        I,
        D,
        V,
        B,
        R,
        A,
        H,
        z,
        W,
        F,
        G,
        q,
        U,
        K,
        Y,
        Q,
        J,
        X,
        Z,
        $,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        le,
        ie,
        se,
        ce,
        pe,
        ue,
        de,
        he,
        me,
        fe,
        ve,
        ye,
        be,
        ge,
        we,
        _e,
        Ce,
        Se,
        Ee,
        Pe,
        xe,
        Oe,
        ke,
        je,
        Te,
        Ne,
        Le,
        Me,
        Ie,
        De,
        Ve,
        Be,
        Re,
        Ae,
        He,
        ze,
        We,
        Fe,
        Ge,
        qe,
        Ue,
        Ke,
        Ye,
        Qe,
        Je,
        Xe,
        Ze,
        $e,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        lt,
        it,
        st,
        ct,
        pt,
        ut,
        dt,
        ht,
        mt,
        ft,
        vt,
        yt,
        bt,
        gt,
        wt,
        _t,
        Ct,
        St,
        Et,
        Pt,
        xt,
        Ot,
        kt,
        jt,
        Tt,
        Nt,
        Lt,
        Mt,
        It,
        Dt,
        Vt,
        Bt,
        Rt,
        At,
        Ht,
        zt,
        Wt,
        Ft,
        Gt,
        qt,
        Ut,
        Kt,
        Yt,
        Qt,
        Jt,
        Xt,
        Zt,
        $t,
        en,
        tn,
        nn,
        rn,
        on,
        an,
        ln,
        sn,
        cn,
        pn,
        un,
        dn,
        hn,
        mn,
        fn;
      for (
        n.r(t),
          n('YFKU'),
          p = n('i8i4'),
          u = n('q1tI'),
          d = n.n(u),
          n('bSeV'),
          h = n('CLNU'),
          m = n('Vdly'),
          f = n('Kxc7'),
          v = n('FQhm'),
          y = n('PC8g'),
          b = n('mrSG'),
          g = n('aDg1'),
          w = n('H172'),
          _ = n('N5tr'),
          C = n('wt3x'),
          S = {
            reset: window.t('Reset Settings'),
            saveAsDefault: window.t('Save As Default'),
            defaults: window.t('Defaults'),
          },
          E = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n._handleResetToDefaults = function () {
                  n.props.model.restorePropertiesForSource(n.props.source);
                }),
                (n._handleSaveAsDefaults = function () {
                  n.props.source.properties().saveDefaults();
                }),
                (n._propertyItems = [
                  {
                    value: 'defaults',
                    readonly: !0,
                    content: '',
                    selectedContent: S.defaults,
                  },
                  {
                    value: 'reset',
                    readonly: !0,
                    content: u.createElement(_.b, {
                      className: C.defaultsButtonItem,
                      isActive: !1,
                      label: S.reset,
                      onClick: n._handleResetToDefaults,
                    }),
                  },
                  {
                    value: 'save',
                    readonly: !0,
                    content: u.createElement(_.b, {
                      className: C.defaultsButtonItem,
                      isActive: !1,
                      label: S.saveAsDefault,
                      onClick: n._handleSaveAsDefaults,
                    }),
                  },
                ]),
                n
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                return u.createElement(w.a, {
                  className: C.defaultsButtonText,
                  items: this._propertyItems,
                  value: 'defaults',
                });
              }),
              t
            );
          })(u.PureComponent),
          P = n('ycFu'),
          x = n('tWVy'),
          O = n('tmL0'),
          k = n('W7Dn'),
          j = (function (e) {
            function t(t) {
              var n,
                r,
                o,
                a = e.call(this, t) || this;
              return (
                (a._renderStudyDefaultsManager = function (e) {
                  return e
                    ? void 0
                    : u.createElement(E, {
                        model: a.props.model,
                        source: a.props.source,
                      });
                }),
                (a._handleSelect = function (e) {
                  a.setState({ activeTabId: e }, function () {
                    a._requestResize && a._requestResize();
                  }),
                    a.props.onActiveTabChanged && a.props.onActiveTabChanged(e);
                }),
                (a._handleScroll = function () {
                  x.a.fire();
                }),
                (a._closePopupDialog = function () {
                  a.setState({ dialogIsOpened: !1 }), a.props.onClose();
                }),
                (a._handleSubmit = function () {
                  a.props.onSubmit(), a._closePopupDialog();
                }),
                (r = (n = a.props).pages),
                (o = n.initialActiveTab),
                (a.state = {
                  dialogIsOpened: !0,
                  activeTabId: r.allIds.includes(o) ? o : r.allIds[0],
                }),
                a
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.state,
                  t = e.dialogIsOpened,
                  n = e.activeTabId;
                return u.createElement(P.a, {
                  dataName: 'indicator-properties-dialog',
                  title: this.props.title,
                  isOpened: t,
                  onSubmit: this._handleSubmit,
                  onCancel: this.props.onCancel,
                  onClickOutside: this._closePopupDialog,
                  onClose: this._closePopupDialog,
                  footerLeftRenderer: this._renderStudyDefaultsManager,
                  render: this._renderChildren(n),
                  submitOnEnterKey: !1,
                });
              }),
              (t.prototype._renderChildren = function (e) {
                var t = this;
                return function (n) {
                  var r,
                    o,
                    a,
                    l,
                    i,
                    s = n.requestResize;
                  return (
                    (t._requestResize = s),
                    (o = (r = t.props).pages),
                    (a = r.source),
                    (l = r.model),
                    (i = o.byId[e].Component),
                    u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(g.a, {
                        activeTabId: e,
                        onSelect: t._handleSelect,
                        tabs: o,
                      }),
                      u.createElement(
                        O.a,
                        { className: k.scrollable, onScroll: t._handleScroll },
                        u.createElement(i, { source: a, model: l }),
                      ),
                    )
                  );
                };
              }),
              t
            );
          })(u.PureComponent),
          T = n('PjdP'),
          N = n('HfwS'),
          L = n('HGyE'),
          M = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.input,
                  n = e.value,
                  r = e.onChange,
                  o = e.onBlur,
                  a = e.onKeyDown,
                  l = t.options.reduce(function (e, t) {
                    return (e[t] = 'NONE' === t ? window.t('Default') : t), e;
                  }, {}),
                  i = Object(b.__assign)(Object(b.__assign)({}, t), {
                    optionsTitles: l,
                  });
                return u.createElement(L.b, {
                  input: i,
                  value: n,
                  onChange: r,
                  onBlur: o,
                  onKeyDown: a,
                });
              }),
              t
            );
          })(u.PureComponent),
          I = Object(N.a)(M),
          D = n('h5Dg'),
          V = n('rJEJ'),
          B = n('XDrA'),
          R = n('+8gn'),
          A = n('Q+1u'),
          H = n('Eyy1'),
          n('HbRj'),
          z = u.createContext(null),
          W = window.t('{currency} per order'),
          F = window.t('{currency} per contract'),
          G = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e,
                  t = this.props.input,
                  n = Object(H.ensureNotNull)(this.context),
                  r =
                    (((e = {}).percent = '%'),
                    (e.cash_per_order = W.format({ currency: n })),
                    (e.cash_per_contract = F.format({ currency: n })),
                    e),
                  o = Object(b.__assign)(Object(b.__assign)({}, t), {
                    optionsTitles: r,
                  });
                return u.createElement(L.a, { input: o });
              }),
              (t.contextType = z),
              t
            );
          })(u.PureComponent),
          q = window.t('Contracts'),
          U = window.t('% of equity'),
          K = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e,
                  t = this.props.input,
                  n = Object(H.ensureNotNull)(this.context),
                  r =
                    (((e = {}).fixed = q),
                    (e.cash_per_order = n),
                    (e.percent_of_equity = U),
                    e),
                  o = Object(b.__assign)(Object(b.__assign)({}, t), {
                    optionsTitles: r,
                  });
                return u.createElement(L.a, { input: o });
              }),
              (t.contextType = z),
              t
            );
          })(u.PureComponent),
          Y = n('V1YL'),
          Q = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props.inputs;
                return u.createElement(
                  A.a,
                  null,
                  u.createElement(
                    V.a,
                    { label: window.t('Initial capital') },
                    u.createElement(T.a, { input: e.initial_capital }),
                  ),
                  u.createElement(
                    V.a,
                    { label: window.t('Base currency') },
                    u.createElement(I, { input: e.currency }),
                  ),
                  u.createElement(
                    V.a,
                    { label: window.t('Order size'), labelAlign: 'adaptive' },
                    u.createElement(
                      B.a,
                      null,
                      u.createElement(T.a, { input: e.default_qty_value }),
                      u.createElement(K, { input: e.default_qty_type }),
                    ),
                  ),
                  u.createElement(
                    V.a,
                    { label: window.t('Pyramiding') },
                    u.createElement(
                      'span',
                      null,
                      u.createElement(T.a, { input: e.pyramiding }),
                    ),
                    u.createElement(
                      'span',
                      { className: Y.descriptionCell },
                      window.t('orders', {
                        context: 'Pyramiding: count orders',
                      }),
                    ),
                  ),
                  u.createElement(A.a.Separator, null),
                  u.createElement(
                    V.a,
                    { label: window.t('Commission'), labelAlign: 'adaptive' },
                    u.createElement(
                      B.a,
                      null,
                      u.createElement(T.a, { input: e.commission_value }),
                      u.createElement(G, { input: e.commission_type }),
                    ),
                  ),
                  u.createElement(
                    V.a,
                    { label: window.t('Verify Price for Limit Orders') },
                    u.createElement(
                      'span',
                      null,
                      u.createElement(T.a, {
                        input: e.backtest_fill_limits_assumption,
                      }),
                    ),
                    u.createElement(
                      'span',
                      { className: Y.descriptionCell },
                      window.t('ticks', { context: 'slippage ... ticks' }),
                    ),
                  ),
                  u.createElement(
                    V.a,
                    { label: window.t('Slippage') },
                    u.createElement(
                      'span',
                      null,
                      u.createElement(T.a, { input: e.slippage }),
                    ),
                    u.createElement(
                      'span',
                      { className: Y.descriptionCell },
                      window.t('ticks', { context: 'slippage ... ticks' }),
                    ),
                  ),
                  u.createElement(A.a.Separator, null),
                  u.createElement(
                    V.a,
                    { label: window.t('Recalculate'), labelAlign: 'top' },
                    u.createElement(
                      'div',
                      null,
                      u.createElement(
                        'div',
                        { className: Y.recalculateCheckbox },
                        u.createElement(D.a, {
                          label: window.t('After Order is Filled'),
                          input: e.calc_on_order_fills,
                        }),
                      ),
                      u.createElement(
                        'div',
                        { className: Y.recalculateCheckbox },
                        u.createElement(D.a, {
                          label: window.t('On Every Tick'),
                          input: e.calc_on_every_tick,
                        }),
                      ),
                    ),
                  ),
                );
              }),
              (t.contextType = R.b),
              t
            );
          })(u.PureComponent),
          J = n('z61+'),
          X = n('uOxu'),
          Z = Object(X.getLogger)(
            'Platform.GUI.PropertyDialog.Indicators.StrategyPage',
          ),
          $ = (function (e) {
            function t(t) {
              var n,
                r,
                o,
                a = e.call(this, t) || this;
              return (
                (a._handleWatchedDataChange = function () {
                  a.setState({ currency: a._getCurrency() });
                }),
                (n = a.props.source),
                (a._source = n),
                (a._properties = n.properties()),
                (r = n.metaInfo()),
                (o = new J.MetaInfoHelper(r)),
                (a._inputs = o.getStrategyProperties()),
                (a.state = { currency: a._getCurrency() }),
                a
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.componentDidMount = function () {
                this._source.watchedData.subscribe(
                  this._handleWatchedDataChange,
                );
              }),
              (t.prototype.componentWillUnmount = function () {
                this._source.watchedData.unsubscribe(
                  this._handleWatchedDataChange,
                );
              }),
              (t.prototype.render = function () {
                return u.createElement(
                  z.Provider,
                  { value: this.state.currency },
                  u.createElement(r, {
                    inputs: this._inputs,
                    property: this._properties,
                    model: this.props.model,
                    study: this.props.source,
                  }),
                );
              }),
              (t.prototype._getCurrency = function () {
                var e = this._source,
                  t = e.reportData();
                return null === t || void 0 === t.currency
                  ? ((void 0 !== this.state && null === this.state.currency) ||
                      Z.logWarn("Can't obtain currency from strategy report"),
                    null)
                  : t.currency;
              }),
              t
            );
          })(u.PureComponent),
          ee = n('5Ssy'),
          te = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n._properties = n.props.source.properties()),
                (n._inputs = new J.MetaInfoHelper(
                  n.props.source.metaInfo(),
                ).getUserEditableInputs()),
                n
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                return u.createElement(ee.a, {
                  property: this._properties,
                  model: this.props.model,
                  study: this.props.source,
                  inputs: this._inputs,
                });
              }),
              t
            );
          })(u.PureComponent),
          ne = n('23IT'),
          re = n('0YCj'),
          oe = n.n(re),
          ae = u.createContext(null),
          le = u.createContext(null),
          ie = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._setValue = function (e, n, r) {
                  t.props.model.setProperty(e, n, r);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.componentDidMount = function () {
                var e = this,
                  t = this.props.property;
                t.subscribe(this, function () {
                  return e.forceUpdate();
                });
              }),
              (t.prototype.componentWillUnmount = function () {
                this.props.property.unsubscribeAll(this);
              }),
              (t.prototype.render = function () {
                var e = { setValue: this._setValue };
                return u.createElement(
                  le.Provider,
                  { value: e },
                  this.props.children,
                );
              }),
              t
            );
          })(u.PureComponent),
          se = window.t('Change Visibility'),
          ce = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.visible;
                  r &&
                    l(r, function (t) {
                      return n(t, e, se);
                    });
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.title,
                  r = e.visible,
                  o = e.disabled,
                  l = Object(h.clean)(window.t(n, { context: 'input' }), !0);
                return u.createElement(D.b, {
                  label: l,
                  disabled: o,
                  input: { id: t, type: 'bool', defval: !0, name: 'visible' },
                  value: !r || a(r),
                  onChange: this._onChange,
                });
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          pe = n('KKsp'),
          ue = n('TSYQ'),
          de = n.n(ue),
          he = n('WIlE'),
          me = n('QpNh'),
          fe = n('OP2o'),
          ve = n('CHgb'),
          ye = n('xHjM'),
          be = n('/YRR'),
          ge = n('rlj/'),
          we = n('ZtdB'),
          _e = n('D2im'),
          Ce = n('tH7p'),
          Se = n('tQCG'),
          Ee = n('9FXF'),
          Pe = n('sPU+'),
          (xe = {})[ne.LineStudyPlotStyle.Line] = {
            type: ne.LineStudyPlotStyle.Line,
            order: 0,
            icon: ye,
            label: window.t('Line'),
          },
          xe[ne.LineStudyPlotStyle.LineWithBreaks] = {
            type: ne.LineStudyPlotStyle.LineWithBreaks,
            order: 1,
            icon: be,
            label: window.t('Line With Breaks'),
          },
          xe[ne.LineStudyPlotStyle.StepLine] = {
            type: ne.LineStudyPlotStyle.StepLine,
            order: 2,
            icon: ge,
            label: window.t('Step Line'),
          },
          xe[ne.LineStudyPlotStyle.Histogram] = {
            type: ne.LineStudyPlotStyle.Histogram,
            order: 3,
            icon: we,
            label: window.t('Histogram'),
          },
          xe[ne.LineStudyPlotStyle.Cross] = {
            type: ne.LineStudyPlotStyle.Cross,
            order: 4,
            icon: _e,
            label: window.t('Cross', { context: 'chart_type' }),
          },
          xe[ne.LineStudyPlotStyle.Area] = {
            type: ne.LineStudyPlotStyle.Area,
            order: 5,
            icon: Ce,
            label: window.t('Area'),
          },
          xe[ne.LineStudyPlotStyle.AreaWithBreaks] = {
            type: ne.LineStudyPlotStyle.AreaWithBreaks,
            order: 6,
            icon: Se,
            label: window.t('Area With Breaks'),
          },
          xe[ne.LineStudyPlotStyle.Columns] = {
            type: ne.LineStudyPlotStyle.Columns,
            order: 7,
            icon: Ee,
            label: window.t('Columns'),
          },
          xe[ne.LineStudyPlotStyle.Circles] = {
            type: ne.LineStudyPlotStyle.Circles,
            order: 8,
            icon: Pe,
            label: window.t('Circles'),
          },
          Oe = xe,
          ke = Object.values(Oe)
            .sort(function (e, t) {
              return e.order - t.order;
            })
            .map(function (e) {
              return {
                value: e.type,
                selectedContent: d.a.createElement(ve.a, { icon: e.icon }),
                content: d.a.createElement(ve.b, {
                  icon: e.icon,
                  label: e.label,
                }),
              };
            }),
          je = window.t('Price Line'),
          Te = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.plotType,
                  n = e.className,
                  r = e.priceLine,
                  o = e.plotTypeChange,
                  a = e.priceLineChange,
                  l = e.disabled,
                  s = {
                    readonly: !0,
                    content: d.a.createElement(
                      d.a.Fragment,
                      null,
                      d.a.createElement(i, {
                        id: 'PlotTypePriceLineSwitch',
                        checked: r,
                        label: je,
                        preventLabelHighlight: !0,
                        value: 'priceLineSwitcher',
                        onChange: a,
                      }),
                      d.a.createElement(pe.a, null),
                    ),
                  };
                return d.a.createElement(ve.c, {
                  disabled: l,
                  className: n,
                  hideArrowButton: !0,
                  items: Object(b.__spreadArrays)([s], ke),
                  value: t,
                  onChange: o,
                });
              }),
              t
            );
          })(d.a.PureComponent),
          Ne = n('eJTA'),
          Le = n('Tmoa'),
          Me = n('7MId'),
          Ie = window.t('Change Thickness'),
          De = window.t('Change Color'),
          Ve = window.t('Change Opacity'),
          Be = [1, 2, 3, 4],
          Re = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._getTransparencyValue = function () {
                  var e = t.props.transparency;
                  return e ? e.value() : 0;
                }),
                (t._getOpacityValue = function () {
                  var e = t.props.color,
                    n = a(e);
                  if (n)
                    return Object(Le.isHexColor)(n)
                      ? Object(Le.transparencyToAlpha)(
                          t._getTransparencyValue(),
                        )
                      : Object(Ne.parseRgba)(n)[3];
                }),
                (t._getColorValueInHex = function () {
                  var e = t.props.color,
                    n = a(e);
                  return n
                    ? Object(Le.isHexColor)(n)
                      ? n
                      : Object(Ne.rgbToHexString)(Object(Ne.parseRgb)(n))
                    : null;
                }),
                (t._onThicknessChange = function (e) {
                  var n = t.props.thickness;
                  void 0 !== n && t._setProperty(n, e, Ie);
                }),
                (t._onColorChange = function (e) {
                  var n = t.props.color,
                    r = a(n),
                    o = 0;
                  r &&
                    (o = Object(Le.isHexColor)(r)
                      ? t._getTransparencyValue()
                      : Object(Le.alphaToTransparency)(
                          Object(Ne.parseRgba)(r)[3],
                        )),
                    t._setProperty(
                      n,
                      Object(Le.generateColor)(String(e), o, !0),
                      De,
                    );
                }),
                (t._onOpacityChange = function (e) {
                  var n = t.props.color,
                    r = a(n);
                  t._setProperty(
                    n,
                    Object(Le.generateColor)(
                      r,
                      Object(Le.alphaToTransparency)(e),
                      !0,
                    ),
                    Ve,
                  );
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.selectOpacity,
                  n = void 0 === t || t,
                  r = e.disabled;
                return d.a.createElement(Me.a, {
                  disabled: r,
                  color: this._getColorValueInHex(),
                  selectOpacity: n,
                  opacity: this._getOpacityValue(),
                  thickness: this._getThicknessValue(),
                  thicknessItems: Be,
                  onColorChange: this._onColorChange,
                  onOpacityChange: this._onOpacityChange,
                  onThicknessChange: this._onThicknessChange,
                });
              }),
              (t.prototype._getThicknessValue = function () {
                var e = this.props.thickness;
                return e ? a(e) : void 0;
              }),
              (t.prototype._setProperty = function (e, t, n) {
                var r = this.context.setValue;
                l(e, function (e) {
                  return r(e, t, n);
                });
              }),
              (t.contextType = le),
              t
            );
          })(d.a.PureComponent),
          Ae = n('wwEg'),
          He = window.t('Change Plot Type'),
          ze = window.t('Change Price Line'),
          We = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onPlotTypeChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.styleProp.plottype;
                  r && n(r, e, He);
                }),
                (t._onPriceLineChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.styleProp.trackPrice;
                  r && n(r, e, ze);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.paletteColor,
                  n = e.paletteColorProps,
                  r = e.styleProp,
                  o = e.isLine,
                  a = e.hasPlotTypeSelect,
                  l = e.grouped,
                  i = n.childs();
                return u.createElement(
                  V.a,
                  {
                    grouped: l,
                    label: u.createElement(
                      'div',
                      { className: Ae.childRowContainer },
                      window.t(t.name, { context: 'input' }),
                    ),
                  },
                  u.createElement(Re, {
                    disabled: !r.visible.value(),
                    color: i.color,
                    transparency: r.transparency,
                    thickness: o ? i.width : void 0,
                  }),
                  o && a && r.plottype && r.trackPrice
                    ? u.createElement(Te, {
                        disabled: !r.visible.value(),
                        className: Ae.smallStyleControl,
                        plotType: r.plottype.value(),
                        priceLine: r.trackPrice.value(),
                        plotTypeChange: this._onPlotTypeChange,
                        priceLineChange: this._onPriceLineChange,
                      })
                    : null,
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Fe = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.plot,
                  n = e.area,
                  r = e.palette,
                  o = e.paletteProps,
                  a = e.hideVisibilitySwitch,
                  l = e.styleProp,
                  i = t ? t.id : Object(H.ensureDefined)(n).id,
                  s = i.startsWith('fill'),
                  c = !s && t && Object(ne.isLinePlot)(t);
                return u.createElement(
                  u.Fragment,
                  null,
                  !a &&
                    u.createElement(
                      A.a.Row,
                      null,
                      u.createElement(
                        A.a.Cell,
                        { placement: 'first', colSpan: 2, grouped: !0 },
                        u.createElement(ce, {
                          id: i,
                          title: n ? n.title : l.title.value(),
                          visible: l.visible,
                        }),
                      ),
                    ),
                  (function (e, t, n, r) {
                    var o = e.colors,
                      a = t.colors;
                    return Object.keys(o).map(function (e, t) {
                      return u.createElement(We, {
                        key: e,
                        grouped: !0,
                        paletteColor: Object(H.ensureDefined)(o[e]),
                        paletteColorProps: Object(H.ensureDefined)(a[e]),
                        styleProp: n,
                        isLine: r,
                        hasPlotTypeSelect: 0 === t,
                      });
                    });
                  })(r, o, l, c),
                  u.createElement(A.a.GroupSeparator, null),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Ge = window.t('Change Plot Type'),
          qe = window.t('Change Price Line'),
          Ue = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onPlotTypeChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.plottype;
                  r && n(r, e, Ge);
                }),
                (t._onPriceLineChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.trackPrice;
                  r && n(r, e, qe);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.property,
                  r = n.title,
                  o = n.color,
                  a = n.plottype,
                  l = n.linewidth,
                  i = n.transparency,
                  s = n.trackPrice,
                  c = n.visible;
                return u.createElement(
                  V.a,
                  {
                    label: u.createElement(ce, {
                      id: t,
                      title: r.value(),
                      visible: c,
                    }),
                  },
                  u.createElement(Re, {
                    disabled: !c.value(),
                    color: o,
                    transparency: i,
                    thickness: l,
                  }),
                  u.createElement(Te, {
                    disabled: !c.value(),
                    className: Ae.smallStyleControl,
                    plotType: a.value(),
                    priceLine: s.value(),
                    plotTypeChange: this._onPlotTypeChange,
                    priceLineChange: this._onPriceLineChange,
                  }),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Ke = u.createContext(null),
          Ye = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.property,
                  r = n.colorup,
                  o = n.colordown,
                  a = n.transparency,
                  l = n.visible;
                return u.createElement(Ke.Consumer, null, function (e) {
                  return u.createElement(
                    V.a,
                    {
                      label: u.createElement(ce, {
                        id: t,
                        title: (function (e, t) {
                          var n = Object(H.ensureDefined)(e.metaInfo().styles),
                            r = Object(H.ensureDefined)(n[t]).title;
                          return Object(H.ensureDefined)(r);
                        })(Object(H.ensureNotNull)(e), t),
                        visible: l,
                      }),
                    },
                    u.createElement(Re, {
                      disabled: !l.value(),
                      color: r,
                      transparency: a,
                    }),
                    u.createElement(
                      'span',
                      { className: Ae.additionalSelect },
                      u.createElement(Re, {
                        disabled: !l.value(),
                        color: o,
                        transparency: a,
                      }),
                    ),
                  );
                });
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Qe = n('/SnT'),
          Je = n.n(Qe),
          Xe = n('3G1X'),
          ($e = {})[(Ze = n('972a')).MarkLocation.AboveBar] = {
            value: Ze.MarkLocation.AboveBar,
            content: window.t('Above Bar'),
            order: 0,
          },
          $e[Ze.MarkLocation.BelowBar] = {
            value: Ze.MarkLocation.BelowBar,
            content: window.t('Below Bar'),
            order: 1,
          },
          $e[Ze.MarkLocation.Top] = {
            value: Ze.MarkLocation.Top,
            content: window.t('Top'),
            order: 2,
          },
          $e[Ze.MarkLocation.Bottom] = {
            value: Ze.MarkLocation.Bottom,
            content: window.t('Bottom'),
            order: 3,
          },
          $e[Ze.MarkLocation.Absolute] = {
            value: Ze.MarkLocation.Absolute,
            content: window.t('Absolute'),
            order: 4,
          },
          et = $e,
          tt = Object.values(et).sort(function (e, t) {
            return e.order - t.order;
          }),
          nt = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.shapeLocation,
                  n = e.className,
                  r = e.menuItemClassName,
                  o = e.shapeLocationChange,
                  a = e.disabled;
                return u.createElement(w.a, {
                  disabled: a,
                  className: n,
                  menuItemClassName: r,
                  items: tt,
                  value: t,
                  onChange: o,
                });
              }),
              t
            );
          })(u.PureComponent),
          rt = window.t('Change Char'),
          ot = window.t('Change Location'),
          at = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onCharChange = function (e) {
                  var n = t.context.setValue,
                    r = e.currentTarget.value.trim(),
                    o = Je()(r),
                    a = 0 === o.length ? '' : o[o.length - 1],
                    l = t.props.property.char;
                  n(l, a, rt);
                }),
                (t._onLocationChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.location;
                  n(r, e, ot);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.property,
                  r = n.title,
                  o = n.color,
                  a = n.transparency,
                  l = n.char,
                  i = n.location,
                  s = n.visible,
                  c = e.hasPalette;
                return u.createElement(
                  V.a,
                  {
                    grouped: c,
                    label: u.createElement(ce, {
                      id: t,
                      title: r.value(),
                      visible: s,
                    }),
                  },
                  !c &&
                    u.createElement(Re, {
                      disabled: !s.value(),
                      color: o,
                      transparency: a,
                    }),
                  u.createElement(Xe.a, {
                    disabled: !s.value(),
                    className: Ae.smallStyleControl,
                    value: l.value(),
                    onChange: this._onCharChange,
                  }),
                  u.createElement(nt, {
                    disabled: !s.value(),
                    className: ue(Ae.defaultSelect, Ae.additionalSelect),
                    menuItemClassName: Ae.defaultSelectItem,
                    shapeLocation: i.value(),
                    shapeLocationChange: this._onLocationChange,
                  }),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          lt = n('Nu4p'),
          it = n('4Njr'),
          st = n('lOpG'),
          ct = n('br6c'),
          pt = n('m+Gx'),
          ut = n('01Ho'),
          dt = n('4ZyK'),
          ht = n('kMtk'),
          mt = n('Dj0x'),
          ft = n('Ly1u'),
          vt = n('leq5'),
          yt = n('flzi'),
          bt = n('iB0j'),
          (gt = {}).arrow_down = it,
          gt.arrow_up = st,
          gt.circle = ct,
          gt.cross = pt,
          gt.diamond = ut,
          gt.flag = dt,
          gt.label_down = ht,
          gt.label_up = mt,
          gt.square = ft,
          gt.triangle_down = vt,
          gt.triangle_up = yt,
          gt.x_cross = bt,
          wt = gt,
          _t = [],
          Object.keys(lt.plotShapesData).forEach(function (e) {
            var t = lt.plotShapesData[e];
            _t.push({
              value: t.id,
              selectedContent: d.a.createElement(ve.a, { icon: s(t.icon) }),
              content: d.a.createElement(ve.b, {
                icon: s(t.icon),
                label: t.guiName,
              }),
            });
          }),
          Ct = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.shapeStyleId,
                  n = e.className,
                  r = e.shapeStyleChange,
                  o = e.disabled;
                return d.a.createElement(ve.c, {
                  disabled: o,
                  className: n,
                  hideArrowButton: !0,
                  items: _t,
                  value: t,
                  onChange: r,
                });
              }),
              t
            );
          })(d.a.PureComponent),
          St = window.t('Change Shape'),
          Et = window.t('Change Location'),
          Pt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onPlotTypeChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.plottype;
                  n(r, e, St);
                }),
                (t._onLocationChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.location;
                  n(r, e, Et);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.hasPalette,
                  r = e.property,
                  o = r.title,
                  a = r.color,
                  l = r.transparency,
                  i = r.plottype,
                  s = r.location,
                  c = r.visible;
                return u.createElement(
                  V.a,
                  {
                    grouped: n,
                    label: u.createElement(ce, {
                      id: t,
                      title: o.value(),
                      visible: c,
                    }),
                  },
                  !n &&
                    u.createElement(Re, {
                      disabled: !c.value(),
                      color: a,
                      transparency: l,
                    }),
                  u.createElement(Ct, {
                    disabled: !c.value(),
                    className: Ae.smallStyleControl,
                    shapeStyleId: i.value(),
                    shapeStyleChange: this._onPlotTypeChange,
                  }),
                  u.createElement(nt, {
                    disabled: !c.value(),
                    className: ue(Ae.defaultSelect, Ae.additionalSelect),
                    menuItemClassName: Ae.defaultSelectItem,
                    shapeLocation: s.value(),
                    shapeLocationChange: this._onLocationChange,
                  }),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          xt = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.title,
                  r = e.visible,
                  o = e.color,
                  a = e.transparency,
                  l = e.thickness,
                  i = e.children,
                  s = e.switchable,
                  c = void 0 === s || s;
                return u.createElement(
                  V.a,
                  {
                    label: c
                      ? u.createElement(ce, { id: t, title: n, visible: r })
                      : n,
                  },
                  u.createElement(Re, {
                    disabled:
                      r && !(Array.isArray(r) ? r[0].value() : r.value()),
                    color: o,
                    transparency: a,
                    thickness: l,
                  }),
                  i,
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Ot = Object(X.getLogger)('Chart.Study.PropertyPage'),
          kt = (function (e) {
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
                  a = this.props,
                  l = a.plot,
                  i = a.palette,
                  s = a.paletteProps,
                  c = a.study,
                  p = l.id,
                  d = c.properties().styles,
                  h = d[p],
                  m = l.type;
                return 'line' === m || 'bar_colorer' === m || 'bg_colorer' === m
                  ? i && s
                    ? u.createElement(Fe, {
                        plot: l,
                        palette: i,
                        paletteProps: s,
                        styleProp: h,
                      })
                    : u.createElement(Ue, { id: p, property: h })
                  : 'arrows' === m
                  ? u.createElement(Ye, { id: p, property: h })
                  : 'chars' === m || 'shapes' === m
                  ? u.createElement(
                      u.Fragment,
                      null,
                      'chars' === m
                        ? u.createElement(at, {
                            id: p,
                            property: h,
                            hasPalette: Boolean(i),
                          })
                        : u.createElement(Pt, {
                            id: p,
                            property: h,
                            hasPalette: Boolean(i),
                          }),
                      i &&
                        s &&
                        u.createElement(Fe, {
                          plot: l,
                          palette: i,
                          paletteProps: s,
                          hideVisibilitySwitch: !0,
                          styleProp: h,
                        }),
                    )
                  : Object(ne.isOhlcPlot)(l)
                  ? ((e = l.target),
                    (t = Object(H.ensureDefined)(
                      c.metaInfo().defaults.ohlcPlots,
                    )[e]),
                    (n = c.properties().ohlcPlots[e]),
                    (r = void 0),
                    (r =
                      i && s
                        ? u.createElement(Fe, {
                            plot: l,
                            palette: i,
                            paletteProps: s,
                            styleProp: n,
                          })
                        : u.createElement(xt, {
                            id: e,
                            title: n.title.value(),
                            color: n.color,
                            visible: n.visible,
                            transparency: n.transparency,
                          })),
                    (o = void 0),
                    void 0 !== t &&
                      Object(ne.isOhlcPlotStyleCandles)(t) &&
                      (o = u.createElement(
                        u.Fragment,
                        null,
                        u.createElement(xt, {
                          id: e,
                          title: window.t('Wick'),
                          visible: n.drawWick,
                          color: n.wickColor,
                          transparency: n.transparency,
                        }),
                        u.createElement(xt, {
                          id: e,
                          title: window.t('Border'),
                          visible: n.drawBorder,
                          color: n.borderColor,
                          transparency: n.transparency,
                        }),
                      )),
                    u.createElement(u.Fragment, null, r, o))
                  : (Ot.logError('Unknown plot type: ' + m), null);
              }),
              t
            );
          })(u.PureComponent),
          jt = n('YS4w'),
          Tt = n('KacW'),
          Nt = window.t('Change Line Style'),
          Lt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onLineStyleChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.lineStyle;
                  n(r, e, Nt);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.lineStyle,
                  n = Object(b.__rest)(e, ['lineStyle']);
                return d.a.createElement(
                  Tt.a,
                  Object(b.__assign)({}, n, {
                    lineStyle: t.value(),
                    lineStyleChange: this._onLineStyleChange,
                  }),
                );
              }),
              (t.contextType = le),
              t
            );
          })(d.a.PureComponent),
          Mt = window.t('Change Value'),
          It = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onValueChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.value;
                  n(r, e, Mt);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.id,
                  n = e.property,
                  r = n.name,
                  o = n.color,
                  a = n.linestyle,
                  l = n.linewidth,
                  i = n.transparency,
                  s = n.value,
                  c = n.visible;
                return u.createElement(
                  V.a,
                  {
                    labelAlign: 'adaptive',
                    label: u.createElement(ce, {
                      id: t,
                      title: r.value(),
                      visible: c,
                    }),
                  },
                  u.createElement(
                    'div',
                    { className: Ae.block },
                    u.createElement(
                      'div',
                      { className: Ae.group },
                      u.createElement(Re, {
                        disabled: !c.value(),
                        color: o,
                        transparency: i,
                        thickness: l,
                      }),
                      u.createElement(Lt, {
                        disabled: !c.value(),
                        className: Ae.smallStyleControl,
                        lineStyle: a,
                      }),
                    ),
                    u.createElement(
                      'div',
                      {
                        className: ue(
                          Ae.wrapGroup,
                          Ae.defaultSelect,
                          Ae.additionalSelect,
                        ),
                      },
                      u.createElement(jt.b, {
                        input: { id: '', name: '', type: 'float', defval: 0 },
                        value: s.value(),
                        disabled: !c.value(),
                        onChange: this._onValueChange,
                      }),
                    ),
                  ),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Dt = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props.orders,
                  t = e.visible,
                  n = e.showLabels,
                  r = e.showQty;
                return u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    A.a.Row,
                    null,
                    u.createElement(
                      A.a.Cell,
                      { placement: 'first', colSpan: 2 },
                      u.createElement(ce, {
                        id: 'chart-orders-switch',
                        title: window.t('Trades on Chart'),
                        visible: t,
                      }),
                    ),
                  ),
                  u.createElement(
                    A.a.Row,
                    null,
                    u.createElement(
                      A.a.Cell,
                      { placement: 'first', colSpan: 2 },
                      u.createElement(ce, {
                        id: 'chart-orders-labels-switch',
                        title: window.t('Signal Labels'),
                        visible: n,
                      }),
                    ),
                  ),
                  u.createElement(
                    A.a.Row,
                    null,
                    u.createElement(
                      A.a.Cell,
                      { placement: 'first', colSpan: 2 },
                      u.createElement(ce, {
                        id: 'chart-orders-qty-switch',
                        title: window.t('Quantity'),
                        visible: r,
                      }),
                    ),
                  ),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Vt = window.t('Change Font'),
          Bt = ['Verdana', 'Courier New', 'Times New Roman', 'Arial'].map(
            function (e) {
              return { value: e, content: e };
            },
          ),
          Rt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onFontFamilyChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.fontFamily;
                  n(r, e, Vt);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.fontFamily,
                  n = e.className,
                  r = e.disabled;
                return u.createElement(w.a, {
                  disabled: r,
                  className: de()(n, Ae.defaultSelect),
                  menuItemClassName: Ae.defaultSelectItem,
                  items: Bt,
                  value: t.value(),
                  onChange: this._onFontFamilyChange,
                });
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          At = n('UXjO'),
          Ht = window.t('Change Font Size'),
          zt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function (e) {
            return { value: e, title: e.toString() };
          }),
          Wt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onFontSizeChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.fontSize;
                  n(r, e, Ht);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.fontSize,
                  n = Object(b.__rest)(e, ['fontSize']);
                return u.createElement(
                  At.a,
                  Object(b.__assign)({}, n, {
                    fontSizes: zt,
                    fontSize: t.value(),
                    fontSizeChange: this._onFontSizeChange,
                  }),
                );
              }),
              (t.contextType = le),
              t
            );
          })(u.PureComponent),
          Ft = window.t('Change Visibility'),
          Gt = window.t('Labels Font'),
          qt = window.t('Show Labels'),
          Ut = {
            Traditional: new Set([
              'S5/R5',
              'S4/R4',
              'S3/R3',
              'S2/R2',
              'S1/R1',
              'P',
            ]),
            Fibonacci: new Set(['S3/R3', 'S2/R2', 'S1/R1', 'P']),
            Woodie: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
            Classic: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
            DM: new Set(['S1/R1', 'P']),
            DeMark: new Set(['S1/R1', 'P']),
            Camarilla: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
          },
          Kt = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._onChange = function (e) {
                  var n = t.context.setValue,
                    r = t.props.property.childs().levelsStyle,
                    o = r.childs().showLabels;
                  n(o, e, Ft);
                }),
                t
              );
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this.props.property.childs(),
                  t = e.font,
                  n = e.fontsize,
                  r = e.levelsStyle;
                return d.a.createElement(
                  d.a.Fragment,
                  null,
                  d.a.createElement(
                    V.a,
                    {
                      labelAlign: 'adaptive',
                      label: d.a.createElement('span', null, Gt),
                    },
                    d.a.createElement(
                      'div',
                      { className: Ae.block },
                      d.a.createElement(
                        'div',
                        { className: Ae.group },
                        d.a.createElement(Rt, { fontFamily: t }),
                      ),
                      d.a.createElement(
                        'div',
                        { className: ue(Ae.wrapGroup, Ae.additionalSelect) },
                        d.a.createElement(Wt, { fontSize: n }),
                      ),
                    ),
                  ),
                  d.a.createElement(
                    A.a.Row,
                    null,
                    d.a.createElement(
                      A.a.Cell,
                      { placement: 'first', colSpan: 2 },
                      d.a.createElement(D.b, {
                        label: qt,
                        input: {
                          id: 'ShowLabels',
                          type: 'bool',
                          defval: !0,
                          name: 'visible',
                        },
                        value: r.childs().showLabels.value(),
                        onChange: this._onChange,
                      }),
                    ),
                  ),
                  this._renderColors(),
                );
              }),
              (t.prototype._renderColors = function () {
                var e = this.props.property.childs(),
                  t = e.levelsStyle,
                  n = e.inputs,
                  r = t.childs(),
                  o = r.colors,
                  a = r.widths,
                  l = r.visibility,
                  i = n.childs().kind,
                  s = Object(H.ensureDefined)(Ut[i.value()]);
                return o
                  .childNames()
                  .filter(function (e) {
                    return s.has(e);
                  })
                  .map(function (e) {
                    return d.a.createElement(xt, {
                      key: e,
                      id: e,
                      title: e,
                      color: o.childs()[e],
                      visible: l.childs()[e],
                      thickness: a.childs()[e],
                    });
                  });
              }),
              (t.contextType = le),
              t
            );
          })(d.a.PureComponent),
          Yt = {
            PivotPointsStandard: function () {
              var e = Object(H.ensureNotNull)(Object(u.useContext)(Ke)),
                t = e.properties();
              return d.a.createElement(Kt, { property: t });
            },
          },
          Qt = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              Object(b.__extends)(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = Object(H.ensureNotNull)(this.context);
                return u.createElement(Ke.Consumer, null, function (n) {
                  return u.createElement(
                    ie,
                    {
                      property: Object(H.ensureNotNull)(n).properties(),
                      model: t,
                    },
                    u.createElement(
                      A.a,
                      null,
                      e._renderCustomContent(
                        Object(H.ensureNotNull)(n).metaInfo().shortId,
                      ),
                    ),
                  );
                });
              }),
              (t.prototype._renderCustomContent = function (e) {
                if ((e in Yt)) {
                  var t = Yt[e];
                  return u.createElement(t, null);
                }
                return null;
              }),
              (t.contextType = ae),
              t
            );
          })(u.PureComponent),
          Jt = n('Ecpn'),
          Xt = window.t('Default'),
          Zt = window.t('Precision'),
          $t = window.t('Change Precision'),
          en = [{ value: 'default', content: Xt }],
          tn = 0;
        tn <= 8;
        tn++
      )
        en.push({ value: tn, content: tn.toString() });
      for (
        nn = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onChange = function (e) {
                var n = t.context.setValue,
                  r = t.props.precision;
                n(r, e, $t);
              }),
              t
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props.precision;
              return u.createElement(
                V.a,
                { label: Zt },
                u.createElement(w.a, {
                  className: Ae.defaultSelect,
                  menuItemClassName: Ae.defaultSelectItem,
                  items: en,
                  value: e.value(),
                  onChange: this._onChange,
                }),
              );
            }),
            (t.contextType = le),
            t
          );
        })(u.PureComponent),
          rn = window.t('Default'),
          on = window.t('Override Min Tick'),
          an = window.t('Change Min Tick'),
          ln = [
            { priceScale: 1, minMove: 1, frac: !1 },
            { priceScale: 10, minMove: 1, frac: !1 },
            { priceScale: 100, minMove: 1, frac: !1 },
            { priceScale: 1e3, minMove: 1, frac: !1 },
            { priceScale: 1e4, minMove: 1, frac: !1 },
            { priceScale: 1e5, minMove: 1, frac: !1 },
            { priceScale: 1e6, minMove: 1, frac: !1 },
            { priceScale: 1e7, minMove: 1, frac: !1 },
            { priceScale: 1e8, minMove: 1, frac: !1 },
            { priceScale: 2, minMove: 1, frac: !0 },
            { priceScale: 4, minMove: 1, frac: !0 },
            { priceScale: 8, minMove: 1, frac: !0 },
            { priceScale: 16, minMove: 1, frac: !0 },
            { priceScale: 32, minMove: 1, frac: !0 },
            { priceScale: 64, minMove: 1, frac: !0 },
            { priceScale: 128, minMove: 1, frac: !0 },
            { priceScale: 320, minMove: 1, frac: !0 },
          ],
          sn = [{ value: 'default', content: rn }],
          cn = 0;
        cn < ln.length;
        cn++
      )
        (pn = ln[cn]),
          sn.push({
            value: pn.priceScale + ',' + pn.minMove + ',' + pn.frac,
            content: pn.minMove + '/' + pn.priceScale,
          });
      (un = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t._onChange = function (e) {
              var n = t.context.setValue,
                r = t.props.minTick;
              n(r, e, an);
            }),
            t
          );
        }
        return (
          Object(b.__extends)(t, e),
          (t.prototype.render = function () {
            var e = this.props.minTick;
            return u.createElement(
              V.a,
              { label: on },
              u.createElement(w.a, {
                className: Ae.defaultSelect,
                menuItemClassName: Ae.defaultSelectItem,
                items: sn,
                value: e.value(),
                onChange: this._onChange,
              }),
            );
          }),
          (t.contextType = le),
          t
        );
      })(u.PureComponent)),
        (dn = 'Background'),
        (hn = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._findPlotPalette = function (e) {
                var n = t.props.study,
                  r = n.metaInfo(),
                  o = Object(H.ensureDefined)(r.palettes);
                return Object(ne.isBarColorerPlot)(e) ||
                  Object(ne.isBgColorerPlot)(e)
                  ? {
                      palette: o[e.palette],
                      paletteProps: n.properties().palettes[e.palette],
                    }
                  : t._findPaletteByTargetId(e.id);
              }),
              t
            );
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                r,
                o,
                a,
                l,
                i,
                s,
                c,
                p,
                d,
                h = this,
                m = this.props.study,
                f = m.metaInfo();
              return Object(Jt.a)(f.shortId)
                ? u.createElement(Qt, null)
                : ((e = new J.MetaInfoHelper(f).getUserEditablePlots()),
                  (t = m.properties()),
                  (n = t.bands),
                  (r = t.bandsBackground),
                  (o = t.areaBackground),
                  (a = t.precision),
                  (l = t.strategy),
                  (i = t.minTick),
                  (s = f.filledAreas),
                  (c = f.graphics),
                  (p = e.length > 0 || (c && Object.keys(c).length > 0)),
                  (d = m.canOverrideMinTick()),
                  u.createElement(
                    A.a,
                    null,
                    e.map(function (e) {
                      var t = Object(ne.isOhlcPlot)(e)
                          ? Object(b.__assign)(Object(b.__assign)({}, e), {
                              id: e.target,
                            })
                          : e,
                        n = h._findPlotPalette(t),
                        r = n.palette,
                        o = n.paletteProps;
                      return u.createElement(kt, {
                        key: e.id,
                        plot: e,
                        palette: r,
                        paletteProps: o,
                        study: m,
                      });
                    }),
                    n &&
                      n.childNames().map(function (e, t) {
                        var r = n.child(e);
                        if (!r.isHidden || !r.isHidden.value())
                          return u.createElement(It, {
                            key: t,
                            id: r.name.value(),
                            property: r,
                          });
                      }),
                    r &&
                      u.createElement(xt, {
                        id: 'bandsBackground',
                        title: dn,
                        visible: r.fillBackground,
                        color: r.backgroundColor,
                        transparency: r.transparency,
                      }),
                    o &&
                      u.createElement(xt, {
                        id: 'areaBackground',
                        title: dn,
                        visible: o.fillBackground,
                        color: o.backgroundColor,
                        transparency: o.transparency,
                      }),
                    s &&
                      s.map(function (e) {
                        var t, n, r;
                        if (!e.isHidden)
                          return (
                            (t = m.properties().filledAreasStyle[e.id]),
                            (n = e.title || dn),
                            e.palette
                              ? ((r = h._findPaletteByTargetId(e.id)),
                                u.createElement(Fe, {
                                  key: e.id,
                                  area: e,
                                  palette: Object(H.ensureDefined)(r.palette),
                                  paletteProps: Object(H.ensureDefined)(
                                    r.paletteProps,
                                  ),
                                  styleProp: t,
                                }))
                              : u.createElement(xt, {
                                  key: e.id,
                                  id: e.id,
                                  title: n,
                                  color: t.color,
                                  visible: t.visible,
                                  transparency: t.transparency,
                                })
                          );
                      }),
                    !1,
                    p && u.createElement(nn, { precision: a }),
                    d && u.createElement(un, { minTick: i }),
                    oe.a.isScriptStrategy(f) &&
                      u.createElement(Dt, { orders: l.orders }),
                  ));
            }),
            (t.prototype._findPaletteByTargetId = function (e) {
              var t,
                n,
                r,
                o = this.props.study,
                a = o.metaInfo(),
                l = a.plots,
                i = Object(H.ensureDefined)(a.palettes);
              for (t = 0, n = l; t < n.length; t++)
                if (
                  ((r = n[t]),
                  (Object(ne.isColorerPlot)(r) ||
                    Object(ne.isOhlcColorerPlot)(r)) &&
                    r.target === e)
                )
                  return {
                    palette: i[r.palette],
                    paletteProps: o.properties().palettes[r.palette],
                  };
              return {};
            }),
            t
          );
        })(u.PureComponent)),
        (mn = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(b.__extends)(t, e),
            (t.prototype.render = function () {
              return u.createElement(
                ae.Provider,
                { value: this.props.model },
                u.createElement(
                  Ke.Provider,
                  { value: this.props.source },
                  u.createElement(c, { study: this.props.source }),
                ),
              );
            }),
            t
          );
        })(u.PureComponent)),
        n.d(t, 'EditObjectDialogRenderer', function () {
          return fn;
        }),
        (fn = (function () {
          function e(e, t, n) {
            var r = this;
            (this._container = document.createElement('div')),
              (this._isVisible = !1),
              (this._handleClose = function () {
                p.unmountComponentAtNode(r._container), (r._isVisible = !1);
              }),
              (this._handleCancel = function () {
                r._model.undoToCheckpoint(r._checkpoint);
              }),
              (this._handleSubmit = function () {}),
              (this._handleActiveTabChanged = function (e) {
                m.setValue(r._activeTabSettingsName(), e);
              }),
              (this._source = e),
              (this._model = t),
              (this._checkpoint = this._ensureCheckpoint(n));
          }
          return (
            (e.prototype.hide = function (e) {
              e ? this._handleCancel() : this._handleSubmit(),
                this._handleClose();
            }),
            (e.prototype.isVisible = function () {
              return this._isVisible;
            }),
            (e.prototype.focusOnText = function () {}),
            (e.prototype.show = function (e) {
              var t, n, r, o, a, l;
              void 0 === e && (e = {}),
                f.enabled('property_pages') &&
                  ((t = this._source.metaInfo()),
                  (n =
                    !this._source.isPine() || this._source.isStandardPine()
                      ? t.description
                      : 'Custom Pine'),
                  Object(y.trackEvent)('GUI', 'Study Properties', n),
                  (r = {
                    byId: {
                      inputs: { title: window.t('Inputs'), Component: te },
                      style: { title: window.t('Style'), Component: mn },
                      properties: {
                        title: window.t('Properties'),
                        Component: $,
                      },
                    },
                    allIds: [],
                  }),
                  (o = new J.MetaInfoHelper(t)).hasUserEditableInputs() &&
                    r.allIds.push('inputs'),
                  o.hasUserEditableProperties() && r.allIds.push('properties'),
                  o.hasUserEditableStyles() && r.allIds.push('style'),
                  (a =
                    e.initialTab ||
                    m.getValue(this._activeTabSettingsName()) ||
                    'inputs'),
                  (l = Object(h.clean)(t.shortDescription, !0)),
                  p.render(
                    u.createElement(j, {
                      title: l,
                      model: this._model,
                      source: this._source,
                      initialActiveTab: r.allIds.includes(a) ? a : r.allIds[0],
                      pages: r,
                      onSubmit: this._handleSubmit,
                      onCancel: this._handleCancel,
                      onClose: this._handleClose,
                      onActiveTabChanged: this._handleActiveTabChanged,
                    }),
                    this._container,
                  ),
                  (this._isVisible = !0),
                  v.emit('edit_object_dialog', {
                    objectType: 'study',
                    scriptTitle: this._source.title(),
                  }));
            }),
            (e.prototype._activeTabSettingsName = function () {
              return 'properties_dialog.active_tab.study';
            }),
            (e.prototype._ensureCheckpoint = function (e) {
              return (
                void 0 === e && (e = this._model.createUndoCheckpoint()), e
              );
            }),
            e
          );
        })());
    },
    ZtdB: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4.5 20v-7m3 7V10m3 10V8m3 12V10m3 10v-8m3 8V10m3 10V8"/></svg>';
    },
    aDg1: function (e, t, n) {
      'use strict';
      var r,
        o,
        a = n('mrSG'),
        l = (n('bf9a'), n('q1tI')),
        i = n('TSYQ'),
        s = n('K3s3'),
        c = n('nPPD'),
        p = n('dMmr'),
        u = Object(c.a)(s.a, p),
        d = n('4Cm8'),
        h = n('5VK0');
      n.d(t, 'a', function () {
        return o;
      }),
        (r = Object(s.c)(function (e) {
          return l.createElement(
            'div',
            { className: u.slider, ref: e.reference },
            l.createElement('div', { className: u.inner }),
          );
        })),
        (o = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._createClickHandler = function (e) {
                return function () {
                  t.props.onSelect(e);
                };
              }),
              t
            );
          }
          return (
            Object(a.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this._generateDialogTabs();
              return l.createElement(
                'div',
                { className: h.scrollWrap },
                l.createElement('div', { className: h.headerBottomSeparator }),
                l.createElement(
                  d.a,
                  {
                    isVisibleFade: Modernizr.mobiletouch,
                    isVisibleButtons: !Modernizr.mobiletouch,
                    isVisibleScrollbar: !1,
                  },
                  l.createElement(
                    'div',
                    { className: h.tabsWrap },
                    l.createElement(r, { className: h.tabs }, e),
                  ),
                ),
              );
            }),
            (t.prototype._generateDialogTabs = function () {
              var e = this,
                t = this.props,
                n = t.activeTabId,
                r = t.tabs;
              return r.allIds.map(function (t) {
                var o = n === t;
                return l.createElement(
                  s.b,
                  {
                    key: t,
                    className: i(h.tab, !o && h.withHover),
                    isActive: o,
                    onClick: e._createClickHandler(t),
                  },
                  r.byId[t].title,
                );
              });
            }),
            t
          );
        })(l.PureComponent));
    },
    br6c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><circle stroke="currentColor" cx="14" cy="14" r="6.5"/></svg>';
    },
    chcq: function (e, t, n) {},
    dMmr: function (e, t, n) {
      e.exports = { slider: 'slider-2TOmsMP8', inner: 'inner-21p4mP7K' };
    },
    flzi: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 16.735l.478.765H8.098l.478-.765 5-8L14 8.057l.424.678 5 8z"/></svg>';
    },
    iB0j: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 9l11 11M9 20L20 9"/></svg>';
    },
    kMtk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 8.5h-.5v9.707l.146.147 3 3 .354.353.354-.353 3-3 .146-.147V8.5H11z"/></svg>';
    },
    'l5G/': function (e, t, n) {
      'use strict';
      var r, o, a, l, i;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (a = n('TSYQ')),
        (l = n('8E5s')),
        n('chcq'),
        (i = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.reference,
                i = r.__rest(e, ['className', 'reference']),
                s = a(l.input, -1 !== this.props.tabIndex && l.focus);
              return o.createElement(
                'div',
                { className: a(t, l.switcherWrapper) },
                o.createElement(
                  'input',
                  r.__assign({}, i, { type: 'checkbox', className: s, ref: n }),
                ),
                o.createElement(
                  'div',
                  { className: l.switcherThumbWrapper },
                  o.createElement('div', { className: l.switcherTrack }),
                  o.createElement('div', { className: l.switcherThumb }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent)),
        (t.Switch = i);
    },
    lOpG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 7l7.424 6.114a.5.5 0 0 1-.318.886H18.5v7h-9v-7H6.894a.5.5 0 0 1-.318-.886L14 7z"/></svg>';
    },
    leq5: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 11.265l.478-.765H8.098l.478.765 5 8 .424.678.424-.678 5-8z"/></svg>';
    },
    'm+Gx': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 14.5h11M14.5 20V9"/></svg>';
    },
    nPPD: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        var r, o, a, l, i;
        for (
          void 0 === n && (n = {}),
            r = Object.assign({}, t),
            o = 0,
            a = Object.keys(t);
          o < a.length;
          o++
        )
          (i = n[(l = a[o])] || l) in e && (r[l] = [e[i], t[l]].join(' '));
        return r;
      }
      function o(e, t, n) {
        return void 0 === n && (n = {}), Object.assign({}, e, r(e, t, n));
      }
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return o;
        });
    },
    'rlj/': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 17v5.5h4v-18h4v12h4v-9h4V21"/></svg>';
    },
    'sPU+': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></svg>';
    },
    tH7p: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13.52v4.98a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.914c0-.89-1.077-1.337-1.707-.707l-4.66 4.66a1 1 0 0 1-1.332.074l-3.716-2.973a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82z"/></svg>';
    },
    tQCG: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M13 11.5l-1.915-1.532a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82V18.5a1 1 0 0 0 1 1H13m3.5-7l4.293-4.293c.63-.63 1.707-.184 1.707.707V18.5a1 1 0 0 1-1 1H16"/><path fill="currentColor" d="M14 6h1v2h-1zM14 11h1v2h-1zM14 16h1v2h-1zM14 21h1v2h-1z"/></svg>';
    },
    wt3x: function (e, t, n) {
      e.exports = {
        defaultsButtonText: 'defaultsButtonText-1ycd-VvR',
        defaultsButtonItem: 'defaultsButtonItem-3rYXMHYc',
      };
    },
    wwEg: function (e, t, n) {
      e.exports = {
        smallStyleControl: 'smallStyleControl-1XGqoHgA',
        additionalSelect: 'additionalSelect-1RoWzlTA',
        childRowContainer: 'childRowContainer-_iCnmDPI',
        defaultSelect: 'defaultSelect-DeTJWnAh',
        defaultSelectItem: 'defaultSelectItem-1jN74NCa',
        block: 'block-3Tp_jRog',
        group: 'group-2HQIdqE5',
        wrapGroup: 'wrapGroup-3gHGJIrr',
        textMarkGraphicBlock: 'textMarkGraphicBlock-1nDopgxR',
        textMarkGraphicWrapGroup: 'textMarkGraphicWrapGroup-3QaIoY03',
      };
    },
    xHjM: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
  },
]);
