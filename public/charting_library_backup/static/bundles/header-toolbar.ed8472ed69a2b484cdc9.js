(window.webpackJsonp = window.webpackJsonp || []).push([
  ['header-toolbar'],
  {
    '+GaQ': function (e, t, a) {
      'use strict';
      function n(e) {
        return e.map ? o.Children.toArray(e.children).map(e.map) : e.children;
      }
      var o;
      a.d(t, 'a', function () {
        return n;
      }),
        (o = a('q1tI'));
    },
    '6aN0': function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        toolbar: 'toolbar-2n2cwgp5',
        isHidden: 'isHidden-GTob3P_C',
        overflowWrap: 'overflowWrap-PWdgT-U_',
        customButton: 'customButton--jqJTfH5',
        hovered: 'hovered-1mGRUp3y',
      };
    },
    '6oLA': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path fill-rule="nonzero" d="M4.034 14.18l-.07-.18.07-.18c1.535-3.975 5.645-6.82 9.966-6.82 4.32 0 8.431 2.845 9.966 6.82l.07.18-.07.18c-1.535 3.975-5.646 6.82-9.966 6.82-4.321 0-8.431-2.845-9.966-6.82zm9.966 5.82c3.84 0 7.521-2.503 8.962-6-1.441-3.497-5.122-6-8.962-6-3.841 0-7.521 2.503-8.962 6 1.441 3.497 5.121 6 8.962 6z"/><path d="M11 14.001c0 1.66 1.341 2.999 3.001 2.999s2.999-1.339 2.999-2.999c0-1.66-1.339-3.001-2.999-3.001-1.66 0-3.001 1.341-3.001 3.001z"/></g></svg>';
    },
    '8d0Q': function (e, t, a) {
      'use strict';
      function n() {
        var e = Object(i.useState)(!1),
          t = e[0],
          a = e[1],
          n = {
            onMouseOver: function (e) {
              o(e) && a(!0);
            },
            onMouseOut: function (e) {
              o(e) && a(!1);
            },
          };
        return [t, n];
      }
      function o(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      var i;
      a.d(t, 'b', function () {
        return n;
      }),
        a.d(t, 'a', function () {
          return o;
        }),
        (i = a('q1tI'));
    },
    KMbc: function (e, t, a) {
      'use strict';
      function n(e) {
        var t,
          a = e.children,
          n = e.className,
          o = e.noLeftDecoration,
          i = e.noRightDecoration,
          r = e.noMinimalWidth,
          l = e.onClick;
        return s.createElement(
          'div',
          {
            className: u(
              n,
              g.group,
              ((t = {}),
              (t[g.noMinimalWidth] = r),
              (t[g.noLeftDecoration] = o),
              (t[g.noRightDecoration] = i),
              t),
            ),
            onClick: l,
          },
          a,
        );
      }
      function o(e) {
        return s.createElement(
          w.a,
          Object(r.__assign)({}, e, { forceInteractive: !0, icon: M }),
        );
      }
      function i(e) {
        return s.createElement(
          'div',
          { className: k.wrap },
          s.createElement(O.a, { className: k.icon, icon: I }),
          F.text,
        );
      }
      var r,
        s,
        l,
        c,
        d,
        u,
        h,
        p,
        v,
        m,
        f,
        y,
        b,
        _,
        S,
        g,
        E,
        C,
        w,
        M,
        O,
        k,
        I,
        F,
        x,
        W,
        N,
        R,
        B,
        A,
        T,
        j,
        L,
        V,
        D,
        P,
        H,
        z,
        G,
        U,
        Q,
        K,
        X,
        Y,
        q,
        J,
        Z,
        ee,
        te,
        ae,
        ne,
        oe,
        ie,
        re,
        se,
        le;
      a.r(t),
        (r = a('mrSG')),
        (s = a('q1tI')),
        (l = a('i8i4')),
        (c = a('Eyy1')),
        a('P5fv'),
        (d = a('17x9')),
        (u = a('TSYQ')),
        (h = a('4O8T')),
        (p = a.n(h)),
        (v = a('Kxc7')),
        (m = a('FQhm')),
        (f = a('PoSe')),
        (y = a.n(f)),
        (b = a('XmVn')),
        a('bf9a'),
        (_ = a('+GaQ')),
        (S = a('+GxX')),
        (g = a('KrBX')),
        (E = a('tO+E')),
        (C = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleMeasure = function (e) {
                var a = e.width;
                t.props.onWidthChange(a);
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                a = e.shouldMeasure;
              return s.createElement(
                b,
                {
                  shouldMeasure: a,
                  onMeasure: this._handleMeasure,
                  whitelist: ['width'],
                },
                s.createElement('div', { className: E.wrap }, t),
              );
            }),
            t
          );
        })(s.PureComponent)),
        (w = a('tU7i')),
        (M = a('Opoj')),
        a('YFKU'),
        (O = a('jjrI')),
        (k = a('a+Yp')),
        (I = a('6oLA')),
        (F = { text: window.t('View Only Mode') }),
        (x = a('4Cm8')),
        (W = a('XAms')),
        (function (e) {
          (e.SymbolSearch = 'header-toolbar-symbol-search'),
            (e.Intervals = 'header-toolbar-intervals'),
            (e.ChartStyles = 'header-toolbar-chart-styles'),
            (e.Compare = 'header-toolbar-compare'),
            (e.Indicators = 'header-toolbar-indicators'),
            (e.StudyTemplates = 'header-toolbar-study-templates'),
            (e.Alerts = 'header-toolbar-alerts'),
            (e.Layouts = 'header-toolbar-layouts'),
            (e.SaveLoad = 'header-toolbar-save-load'),
            (e.UndoRedo = 'header-toolbar-undo-redo'),
            (e.Properties = 'header-toolbar-properties'),
            (e.PublishDesktop = 'header-toolbar-publish-desktop'),
            (e.PublishMobile = 'header-toolbar-publish-mobile'),
            (e.Fullscreen = 'header-toolbar-fullscreen'),
            (e.Screenshot = 'header-toolbar-screenshot'),
            (e.Replay = 'header-toolbar-replay'),
            (e.Financials = 'header-toolbar-financials');
        })(N || (N = {})),
        (R = a('8d0Q')),
        (B = a('a8bL')),
        (A = Object(S.isFeatureEnabled)('hide-copy-readonly')),
        (T = (function (e) {
          function t(t, a) {
            var o = e.call(this, t, a) || this;
            return (
              (o._handleMouseOver = function (e) {
                Object(R.a)(e) && o.setState({ isHovered: !0 });
              }),
              (o._handleMouseOut = function (e) {
                Object(R.a)(e) && o.setState({ isHovered: !1 });
              }),
              (o._activateSymbolSearchMode = function () {
                o._setMode(2);
              }),
              (o._activateNormalMode = function () {
                o._setMode(1);
              }),
              (o._handleInnerResize = function (e) {
                var t = o.props.onWidthChange;
                t && t(e);
              }),
              (o._handleMeasureAvailableSpace = function (e) {
                var t = e.width,
                  a = o.props.onAvailableSpaceChange;
                a && a(t);
              }),
              (o._processCustoms = function (e) {
                var t = o.props.isFake,
                  a = o.state.mode,
                  i = o.context.tools;
                return e.map(function (e) {
                  return s.createElement(
                    n,
                    { className: u(1 !== a && B.hidden) },
                    s.createElement(
                      i.Custom,
                      Object(r.__assign)({}, e, { isFake: t }),
                    ),
                  );
                });
              }),
              (o._fixLastGroup = function (e, t, a) {
                if (t === a.length - 1 && s.isValidElement(e) && e.type === n) {
                  var i =
                    void 0 !== o.context.tools.Publish && !o.props.readOnly;
                  return s.cloneElement(e, { noRightDecoration: i });
                }
                return e;
              }),
              (o.state = { isHovered: !1, mode: 1 }),
              o
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                a,
                l = this.context.tools,
                c = this.props,
                d = c.features,
                h = c.displayMode,
                p = c.chartSaver,
                v = c.studyMarket,
                m = c.readOnly,
                f = c.saveLoadSyncEmitter,
                y = c.leftCustomButtons,
                S = c.rightCustomButtons,
                g = c.showScrollbarWhen,
                E = c.width,
                w = void 0 === E ? 0 : E,
                M = c.isFake,
                O = void 0 !== M && M,
                k = this.state,
                I = k.isHovered,
                F = k.mode,
                R = this._processCustoms(y),
                A = this._processCustoms(S),
                T = g.includes(h);
              return s.createElement(
                'div',
                {
                  className: u(B.inner, ((e = {}), (e[B.fake] = O), e)),
                  onContextMenu: W.b,
                },
                s.createElement(
                  b,
                  {
                    onMeasure: this._handleMeasureAvailableSpace,
                    whitelist: ['width'],
                    shouldMeasure: !O,
                  },
                  s.createElement(
                    x.a,
                    {
                      isVisibleFade: Modernizr.mobiletouch && T,
                      isVisibleButtons: !Modernizr.mobiletouch && T && I,
                      isVisibleScrollbar: !1,
                      shouldMeasure: T && !O,
                      onMouseOver: this._handleMouseOver,
                      onMouseOut: this._handleMouseOut,
                    },
                    s.createElement(
                      'div',
                      { className: B.content },
                      s.createElement(
                        C,
                        {
                          onWidthChange: this._handleInnerResize,
                          shouldMeasure: O,
                        },
                        s.createElement(
                          _.a,
                          { map: this._fixLastGroup },
                          !m &&
                            s.Children.toArray(
                              Object(r.__spreadArrays)(
                                [
                                  l.SymbolSearch &&
                                    s.createElement(
                                      n,
                                      {
                                        key: 'symbol',
                                        className: 2 === F && B.symbolSearch,
                                      },
                                      s.createElement(l.SymbolSearch, {
                                        id: O ? void 0 : N.SymbolSearch,
                                        isActionsVisible:
                                          d.allowSymbolSearchSpread,
                                        isExpanded: 2 === F,
                                        onFocus: this._activateSymbolSearchMode,
                                        onBlur: this._activateNormalMode,
                                        maxWidth: w,
                                      }),
                                    ),
                                  l.DateRange &&
                                    s.createElement(
                                      n,
                                      { key: 'range' },
                                      s.createElement(l.DateRange, null),
                                    ),
                                  l.Intervals &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'intervals' },
                                      s.createElement(l.Intervals, {
                                        id: O ? void 0 : N.Intervals,
                                        isShownQuicks: d.allowFavoriting,
                                        isFavoritingAllowed: d.allowFavoriting,
                                        displayMode: h,
                                        isFake: O,
                                      }),
                                    ),
                                  l.Bars &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'styles' },
                                      s.createElement(l.Bars, {
                                        id: O ? void 0 : N.ChartStyles,
                                        isShownQuicks: d.allowFavoriting,
                                        isFavoritingAllowed: d.allowFavoriting,
                                        displayMode: h,
                                        isFake: O,
                                      }),
                                    ),
                                  l.Compare &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'compare' },
                                      s.createElement(l.Compare, {
                                        id: O ? void 0 : N.Compare,
                                        className: B.button,
                                        displayMode: h,
                                      }),
                                    ),
                                  l.Indicators &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'indicators' },
                                      s.createElement(l.Indicators, {
                                        id: O ? void 0 : N.Indicators,
                                        className: B.button,
                                        studyMarket: v,
                                        displayMode: h,
                                      }),
                                    ),
                                  l.Financials &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'financials' },
                                      s.createElement(l.Financials, {
                                        id: O ? void 0 : N.Financials,
                                        className: B.button,
                                        displayMode: h,
                                      }),
                                    ),
                                  l.Templates &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'templates' },
                                      s.createElement(l.Templates, {
                                        id: O ? void 0 : N.StudyTemplates,
                                        isShownQuicks: d.allowFavoriting,
                                        isFavoritingAllowed: d.allowFavoriting,
                                        displayMode: h,
                                      }),
                                    ),
                                  1 === F &&
                                    l.Alert &&
                                    s.createElement(
                                      n,
                                      { key: 'alert' },
                                      s.createElement(l.Alert, {
                                        id: O ? void 0 : N.Alerts,
                                        className: B.button,
                                        displayMode: h,
                                      }),
                                    ),
                                  1 === F &&
                                    l.AlertReferral &&
                                    s.createElement(
                                      n,
                                      { key: 'alert-referral' },
                                      s.createElement(l.AlertReferral, {
                                        className: B.button,
                                        displayMode: h,
                                      }),
                                    ),
                                  l.Replay &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'replay' },
                                      s.createElement(l.Replay, {
                                        id: O ? void 0 : N.Replay,
                                        className: B.button,
                                        displayMode: h,
                                      }),
                                    ),
                                  l.UndoRedo &&
                                    1 === F &&
                                    s.createElement(
                                      n,
                                      { key: 'undo-redo' },
                                      s.createElement(l.UndoRedo, {
                                        id: O ? void 0 : N.UndoRedo,
                                      }),
                                    ),
                                  l.ScalePercentage &&
                                    s.createElement(
                                      n,
                                      { key: 'percentage' },
                                      s.createElement(l.ScalePercentage, null),
                                    ),
                                  l.ScaleLogarithm &&
                                    s.createElement(
                                      n,
                                      { key: 'logarithm' },
                                      s.createElement(l.ScaleLogarithm, null),
                                    ),
                                ],
                                R,
                              ),
                            ),
                          1 === F
                            ? ((t = s.Children.toArray(
                                Object(r.__spreadArrays)(
                                  [
                                    m &&
                                      s.createElement(
                                        n,
                                        { key: 'view-only-badge' },
                                        s.createElement(i, null),
                                      ),
                                    s.createElement(n, {
                                      key: 'gap',
                                      className: u(B.fill, O && B.collapse),
                                    }),
                                    !m &&
                                      l.Layout &&
                                      s.createElement(
                                        n,
                                        { key: 'layout' },
                                        s.createElement(l.Layout, {
                                          id: O ? void 0 : N.Layouts,
                                        }),
                                      ),
                                    this._isSaveLoadVisible() &&
                                      l.SaveLoad &&
                                      s.createElement(
                                        n,
                                        { key: 'save-load-right' },
                                        s.createElement(l.SaveLoad, {
                                          id: O ? void 0 : N.SaveLoad,
                                          chartSaver: p,
                                          isReadOnly: m,
                                          displayMode: h,
                                          isFake: O,
                                          stateSyncEmitter: f,
                                        }),
                                      ),
                                    l.SaveLoadReferral &&
                                      s.createElement(
                                        n,
                                        { key: 'save-load-referral' },
                                        s.createElement(l.SaveLoadReferral, {
                                          isReadOnly: m,
                                          displayMode: h,
                                        }),
                                      ),
                                    d.showLaunchInPopupButton &&
                                      l.OpenPopup &&
                                      s.createElement(
                                        n,
                                        { key: 'popup' },
                                        s.createElement(l.OpenPopup, null),
                                      ),
                                    !m &&
                                      l.Properties &&
                                      s.createElement(
                                        n,
                                        { key: 'properties' },
                                        s.createElement(l.Properties, {
                                          id: O ? void 0 : N.Properties,
                                          className: B.iconButton,
                                        }),
                                      ),
                                    !m &&
                                      l.Fullscreen &&
                                      s.createElement(
                                        n,
                                        {
                                          key: 'fullscreen',
                                          onClick: this
                                            ._trackFullscreenButtonClick,
                                        },
                                        s.createElement(l.Fullscreen, {
                                          id: O ? void 0 : N.Fullscreen,
                                        }),
                                      ),
                                    l.Screenshot &&
                                      s.createElement(
                                        n,
                                        { key: 'screenshot' },
                                        s.createElement(l.Screenshot, {
                                          id: O ? void 0 : N.Screenshot,
                                          className: B.iconButton,
                                        }),
                                      ),
                                    !m &&
                                      l.Publish &&
                                      s.createElement(
                                        n,
                                        {
                                          key: 'publish',
                                          className: B.mobilePublish,
                                        },
                                        s.createElement(l.Publish, {
                                          id: O ? void 0 : N.PublishMobile,
                                        }),
                                      ),
                                  ],
                                  A,
                                ),
                              )),
                              (a = t.findIndex(function (e) {
                                return (
                                  s.isValidElement(e) &&
                                  !!e.key &&
                                  -1 !==
                                    e.key.toString().indexOf('view-only-badge')
                                );
                              })),
                              [a]
                                .filter(function (e) {
                                  return e >= 0;
                                })
                                .forEach(function (e) {
                                  t = s.Children.map(t, function (t, a) {
                                    var n, o, i;
                                    if (s.isValidElement(t))
                                      switch ([e - 1, e, e + 1].indexOf(a)) {
                                        case 0:
                                          (n = { noRightDecoration: !0 }),
                                            (t = s.cloneElement(t, n));
                                          break;
                                        case 1:
                                          (o = {
                                            noLeftDecoration: !0,
                                            noRightDecoration: !0,
                                          }),
                                            (t = s.cloneElement(t, o));
                                          break;
                                        case 2:
                                          (i = { noLeftDecoration: !0 }),
                                            (t = s.cloneElement(t, i));
                                      }
                                    return t;
                                  });
                                }),
                              t)
                            : [
                                s.createElement(n, {
                                  key: 'gap',
                                  className: u(
                                    B.fill,
                                    2 === F && B.minimalPriority,
                                  ),
                                }),
                                s.createElement(
                                  n,
                                  { key: 'symbol-search-close' },
                                  s.createElement(o, {
                                    className: u(
                                      B.iconButton,
                                      B.symbolSearchClose,
                                    ),
                                  }),
                                ),
                              ],
                        ),
                      ),
                    ),
                  ),
                ),
                l.Publish &&
                  !m &&
                  !O &&
                  s.createElement(l.Publish, {
                    id: N.PublishDesktop,
                    className: B.desktopPublish,
                  }),
              );
            }),
            (t.prototype._setMode = function (e) {
              this.setState({ mode: e });
            }),
            (t.prototype._trackFullscreenButtonClick = function () {
              0;
            }),
            (t.prototype._isSaveLoadVisible = function () {
              var e = this.props.readOnly,
                t = e && A,
                a = !e && this._checkFeature();
              return !a && !t;
            }),
            (t.prototype._checkFeature = function () {
              return !1;
            }),
            (t.contextTypes = { tools: d.any.isRequired }),
            t
          );
        })(s.PureComponent)),
        (j = a('hY0g')),
        (L = a.n(j)),
        (V = a('ulZB')),
        (D = (function (e) {
          function t(t, a, n) {
            return (
              void 0 === n && (n = []),
              e.call(
                this,
                t,
                a,
                'FAVORITE_CHART_STYLES_CHANGED',
                'StyleWidget.quicks',
                n,
              ) || this
            );
          }
          return Object(r.__extends)(t, e), t;
        })(V.b)),
        (P = a('pPtI')),
        (H = a('IVMC')),
        (z = a.n(H)),
        (G = (function (e) {
          function t(t, a, n) {
            return (
              e.call(
                this,
                t,
                a,
                'FAVORITE_INTERVALS_CHANGED',
                'IntervalWidget.quicks',
                n,
              ) || this
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype._serialize = function (e) {
              return z()(e.map(P.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return z()(
                Object(P.convertResolutionsFromSettings)(e)
                  .filter(P.isResolutionMultiplierValid)
                  .map(P.normalizeIntervalString),
              );
            }),
            t
          );
        })(V.a)),
        a('bSeV'),
        (U = (function (e) {
          function t(t, a, n) {
            return (
              void 0 === n && (n = []),
              e.call(
                this,
                t,
                a,
                'CUSTOM_INTERVALS_CHANGED',
                'IntervalWidget.intervals',
                n,
              ) || this
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.set = function (t, a) {
              t.length, this.get().length, e.prototype.set.call(this, t, a);
            }),
            (t.prototype._serialize = function (e) {
              return z()(e.map(P.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return z()(
                Object(P.convertResolutionsFromSettings)(e)
                  .filter(P.isResolutionMultiplierValid)
                  .map(P.normalizeIntervalString),
              );
            }),
            t
          );
        })(V.a)),
        (Q = a('FBuY')),
        (K = a('Vdly')),
        (X = a('yMne')),
        (Y = a('LiyS')),
        ((J = {})[(q = a('LxhU')).ResolutionKind.Seconds] = !1),
        (J[q.ResolutionKind.Minutes] = !1),
        (J[q.ResolutionKind.Hours] = !1),
        (J[q.ResolutionKind.Days] = !1),
        (J[q.ResolutionKind.Range] = !1),
        (Z = J),
        (ee = (function (e) {
          function t(t, a, n) {
            return (
              void 0 === n && (n = Z),
              e.call(
                this,
                t,
                a,
                'INTERVALS_MENU_VIEW_STATE_CHANGED',
                'IntervalWidget.menu.viewState',
                n,
              ) || this
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.isAllowed = function (e) {
              return Object.keys(Z).includes(e);
            }),
            t
          );
        })(V.b)),
        (te = { defaultsCollapsed: !1 }),
        V.b,
        (ae = a('6aN0')),
        (ne = {
          Area: 3,
          Bars: 0,
          Candles: 1,
          'Heiken Ashi': 8,
          'Hollow Candles': 9,
          Line: 2,
        }),
        (oe = ['1', '30', '60']),
        (ie = []),
        (re = ['full', 'medium']),
        (se = (function (e) {
          function t(t) {
            var a,
              n,
              o,
              i,
              r,
              s,
              l = e.call(this, t) || this;
            return (
              (l._saveLoadSyncEmitter = new p.a()),
              (l._handleFullWidthChange = function (e) {
                (l._fullWidth = e), l.setState({ measureValid: !1 });
              }),
              (l._handleFavoritesWidthChange = function (e) {
                (l._favoritesWidth = e), l.setState({ measureValid: !1 });
              }),
              (l._handleCollapseWidthChange = function (e) {
                (l._collapseWidth = e), l.setState({ measureValid: !1 });
              }),
              (l._handleMeasure = function (e) {
                l.setState({ availableWidth: e, measureValid: !1 });
              }),
              (l._showScrollbarWhen = Object(c.ensureDefined)(
                t.allowedModes,
              ).slice(-1)),
              (l._panelWidthChangeHandlers =
                (((a = {}).full = l._handleFullWidthChange),
                (a.medium = l._handleFavoritesWidthChange),
                (a.small = l._handleCollapseWidthChange),
                a)),
              (n = t.chartWidgetCollection),
              (o = t.chartChangesWatcher),
              (l._chartChangesWatcher = o),
              (i = (function (e) {
                void 0 === e && (e = []);
                var t = e.map(function (e) {
                  return ne[e];
                }) || [1, 4, 5, 6];
                return v.enabled('widget') && (t = [0, 1, 3]), t;
              })(l.props.defaultFavoriteStyles)),
              (l._favoriteChartStylesService = new D(Q.TVXWindowEvents, K, i)),
              void 0 === (s = l.props.defaultFavoriteIntervals) && (s = []),
              (r = Object(P.mergeResolutions)(
                s,
                v.enabled('star_some_intervals_by_default') ? oe : [],
              )),
              (l._favoriteIntervalsService = new G(Q.TVXWindowEvents, K, r)),
              (l._intervalsMenuViewStateService = new ee(Q.TVXWindowEvents, K)),
              (l._customIntervalsService = new U(Q.TVXWindowEvents, K)),
              (l.state = {
                isVisible: !0,
                availableWidth: 0,
                displayMode: 'full',
                measureValid: !1,
                leftCustomButtons: [],
                rightCustomButtons: [],
              }),
              (l._readOnly = n.readOnly()),
              (l._features = {
                allowFavoriting: v.enabled('items_favoriting'),
                showIdeasButton: Boolean(l.props.ideas),
                showLaunchInPopupButton: Boolean(l.props.popupButton),
                allowSymbolSearchSpread:
                  v.enabled('header_symbol_search') &&
                  !v.enabled('charting_library_base'),
                allowToolbarHiding: v.enabled('collapsible_header'),
              }),
              (l._setDisplayMode = y()(l._setDisplayMode, 100)),
              l._negotiateResizer(),
              l
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.getChildContext = function () {
              var e = this.props,
                t = e.tools,
                a = e.windowMessageService,
                n = e.chartWidgetCollection,
                o = e.chartApiInstance,
                i = e.availableTimeFrames,
                r = e.isFundamental,
                s = e.favoriteStudyTemplatesService,
                l = e.studyTemplates,
                c = e.saveChartService,
                d = e.sharingChartService,
                u = e.loadChartService,
                h = e.financialsDialogController;
              return {
                tools: t,
                isFundamental: r,
                chartWidgetCollection: n,
                windowMessageService: a,
                chartApiInstance: o,
                availableTimeFrames: i,
                favoriteStudyTemplatesService: s,
                studyTemplates: l,
                saveChartService: c,
                sharingChartService: d,
                loadChartService: u,
                intervalsMenuViewStateService: this
                  ._intervalsMenuViewStateService,
                favoriteChartStylesService: this._favoriteChartStylesService,
                favoriteIntervalsService: this._favoriteIntervalsService,
                customIntervalsService: this._customIntervalsService,
                chartChangesWatcher: this._chartChangesWatcher,
                chartWidget: n.activeChartWidget.value(),
                favoriteScriptsModel: Y.FavoriteScriptsModel.getInstance(),
                templatesMenuViewStateService: this
                  ._templatesMenuVuewStateService,
                financialsDialogController: h,
              };
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var a = this.state,
                n = a.isVisible,
                o = a.measureValid;
              n !== t.isVisible &&
                (m.emit('toggle_header', n), this._negotiateResizer()),
                o || this._setDisplayMode();
            }),
            (t.prototype.componentDidMount = function () {
              0;
            }),
            (t.prototype.componentWillUnmount = function () {
              0;
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                a = this.props,
                n = (a.resizerBridge, a.allowedModes),
                o = Object(r.__rest)(a, ['resizerBridge', 'allowedModes']),
                i = this.state,
                l = i.displayMode,
                d = i.availableWidth,
                h = i.isVisible,
                p = i.leftCustomButtons,
                v = i.rightCustomButtons,
                m = Object(r.__assign)(
                  {
                    features: this._features,
                    readOnly: this._readOnly,
                    isFake: !1,
                    saveLoadSyncEmitter: this._saveLoadSyncEmitter,
                    width: d,
                    leftCustomButtons: p,
                    rightCustomButtons: v,
                  },
                  o,
                ),
                f = Object(r.__assign)(Object(r.__assign)({}, m), {
                  isFake: !0,
                  showScrollbarWhen: ie,
                }),
                y = Object(c.ensureDefined)(n),
                b = this.props.tools.PublishButtonManager || s.Fragment;
              return s.createElement(
                b,
                null,
                s.createElement(
                  'div',
                  {
                    className: u(
                      ae.toolbar,
                      ((e = {}), (e[ae.isHidden] = !h), e),
                    ),
                    onClick: this.props.onClick,
                  },
                  s.createElement(
                    'div',
                    { className: ae.overflowWrap },
                    s.createElement(
                      T,
                      Object(r.__assign)(
                        {
                          key: 'live',
                          showScrollbarWhen: this._showScrollbarWhen,
                          displayMode: l,
                          onAvailableSpaceChange: this._handleMeasure,
                        },
                        m,
                      ),
                    ),
                    y.map(function (e) {
                      return s.createElement(
                        T,
                        Object(r.__assign)(
                          {
                            key: e,
                            displayMode: e,
                            onWidthChange: t._panelWidthChangeHandlers[e],
                          },
                          f,
                        ),
                      );
                    }),
                  ),
                ),
              );
            }),
            (t.prototype.addButton = function (e) {
              var t, a, n, o, i, s;
              return (
                void 0 === e && (e = 'left'),
                (t = new L.a(0)),
                (a = $(
                  '<div class="apply-common-tooltip ' + ae.customButton + '">',
                )[0]),
                (n = { key: Number(new Date()), element: a, width: t }),
                (i = (o = this.state).leftCustomButtons),
                (s = o.rightCustomButtons),
                'left' === e
                  ? this.setState({
                      leftCustomButtons: Object(r.__spreadArrays)(i, [n]),
                    })
                  : this.setState({
                      rightCustomButtons: Object(r.__spreadArrays)(s, [n]),
                    }),
                a
              );
            }),
            (t.prototype._negotiateResizer = function () {
              this.props.resizerBridge.negotiateHeight(
                this.state.isVisible
                  ? X.HEADER_TOOLBAR_HEIGHT_EXPANDED
                  : X.HEADER_TOOLBAR_HEIGHT_COLLAPSED,
              );
            }),
            (t.prototype._setDisplayMode = function () {
              var e,
                t,
                a = this.state.availableWidth,
                n = this.props.allowedModes,
                o =
                  (((e = {}).full = this._fullWidth),
                  (e.medium = this._favoritesWidth),
                  (e.small = this._collapseWidth),
                  e),
                i = Object(c.ensureDefined)(n),
                r = i.map(function (e) {
                  return o[e];
                }),
                s = r.findIndex(function (e) {
                  return a >= e;
                });
              -1 === s && (s = i.length - 1),
                (t = i[s]),
                this.setState({ measureValid: !0, displayMode: t });
            }),
            (t.prototype._tryShowRemoveSaveButtonHint = function () {}),
            (t.prototype._checkFeature = function () {
              return !1;
            }),
            (t.childContextTypes = {
              tools: d.any.isRequired,
              isFundamental: d.any,
              chartApiInstance: d.any,
              availableTimeFrames: d.any,
              chartWidgetCollection: d.any,
              windowMessageService: d.any,
              favoriteChartStylesService: d.any,
              favoriteIntervalsService: d.any,
              customIntervalsService: d.any,
              favoriteStudyTemplatesService: d.any,
              studyTemplates: d.any,
              chartChangesWatcher: d.any,
              saveChartService: d.any,
              sharingChartService: d.any,
              loadChartService: d.any,
              chartWidget: d.any,
              favoriteScriptsModel: d.any,
              intervalsMenuViewStateService: d.any,
              templatesMenuViewStateService: d.any,
              financialsDialogController: d.any,
            }),
            (t.defaultProps = { allowedModes: re }),
            t
          );
        })(s.PureComponent)),
        a.d(t, 'HeaderToolbarRenderer', function () {
          return le;
        }),
        (le = (function () {
          function e(e, t) {
            var a = this;
            (this._component = null),
              (this._handleRef = function (e) {
                a._component = e;
              }),
              (this._container = e),
              l.render(
                s.createElement(
                  se,
                  Object(r.__assign)({}, t, { ref: this._handleRef }),
                ),
                this._container,
              );
          }
          return (
            (e.prototype.destroy = function () {
              l.unmountComponentAtNode(this._container);
            }),
            (e.prototype.getComponent = function () {
              return Object(c.ensureNotNull)(this._component);
            }),
            e
          );
        })());
    },
    KrBX: function (e, t, a) {
      e.exports = {
        group: 'group-wWM3zP_M',
        noLeftDecoration: 'noLeftDecoration-15F5a1TB',
        noRightDecoration: 'noRightDecoration-2GcAAgVb',
        noMinimalWidth: 'noMinimalWidth-1sbl_ff5',
      };
    },
    LiyS: function (e, t, a) {
      'use strict';
      function n(e) {
        return -1 !== e.indexOf('@')
          ? { type: 'java', studyId: e }
          : { type: 'pine', pineId: e };
      }
      var o, i, r, s, l, c, d, u, h;
      a.r(t),
        a.d(t, 'FavoriteScriptsModel', function () {
          return h;
        }),
        (o = a('Vdly')),
        (i = a('FBuY')),
        (r = a('cBZt')),
        (s = a('TcSq')),
        (l = a('aIyQ')),
        (c = a.n(l)),
        (d = 'studyMarket.favorites'),
        (u = null),
        (h = (function () {
          function e() {
            var e = this;
            (this._favorites = []),
              (this._favoritesChanged = new c.a()),
              i.TVXWindowEvents.on('StudyFavoritesChanged', function (t) {
                var a = JSON.parse(t);
                e._loadFromState(a.favorites || []);
              }),
              o.onSync.subscribe(this, this._loadFavs),
              this._loadFavs();
          }
          return (
            (e.prototype.isFav = function (e) {
              var t = this.favId(e);
              return -1 !== this._findFavIndex(t);
            }),
            (e.prototype.toggleFavorite = function (e) {
              this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e);
            }),
            (e.prototype.addFavorite = function (e) {
              var t = this.favId(e);
              this._favorites.push(n(t)),
                this._favoritesChanged.fire(),
                this._saveFavs();
            }),
            (e.prototype.removeFavorite = function (e) {
              var t = this.favId(e),
                a = this._findFavIndex(t);
              -1 !== a &&
                (this._favorites.splice(a, 1), this._favoritesChanged.fire()),
                this._saveFavs();
            }),
            (e.prototype.favId = function (e) {
              return Object(s.extractPineId)(e) || Object(r.extractStudyId)(e);
            }),
            (e.prototype.favorites = function () {
              return this._favorites;
            }),
            (e.prototype.favoritesChanged = function () {
              return this._favoritesChanged;
            }),
            (e.getInstance = function () {
              return null === u && (u = new e()), u;
            }),
            (e.prototype._loadFavs = function () {
              var e = o.getJSON(d, []);
              this._loadFromState(e);
            }),
            (e.prototype._saveFavs = function () {
              var e = this._stateToSave();
              o.setJSON(d, e),
                i.TVXWindowEvents.emit(
                  'StudyFavoritesChanged',
                  JSON.stringify({ favorites: e }),
                );
            }),
            (e.prototype._stateToSave = function () {
              return this._favorites.map(function (e) {
                return 'java' === e.type ? e.studyId : e.pineId;
              });
            }),
            (e.prototype._loadFromState = function (e) {
              var t = e.map(n);
              (this._favorites = t), this._favoritesChanged.fire();
            }),
            (e.prototype._findFavIndex = function (e) {
              return this._favorites.findIndex(function (t) {
                return e === ('java' === t.type ? t.studyId : t.pineId);
              });
            }),
            e
          );
        })());
    },
    Opoj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="none" stroke="currentColor" d="M1 1l15 15M1 16L16 1"/></svg>';
    },
    'a+Yp': function (e, t, a) {
      e.exports = { wrap: 'wrap-3K4w_7te', icon: 'icon-1dNdRXKB' };
    },
    a8bL: function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        inner: 'inner-v8eiKwdM',
        fake: 'fake-37paHC6T',
        fill: 'fill-2axUON87',
        minimalPriority: 'minimalPriority-1MGEuVHu',
        collapse: 'collapse-17ig2Mxu',
        button: 'button-3xrjDzA4',
        iconButton: 'iconButton-3vyD3BPg',
        hidden: 'hidden-2kSvETGo',
        symbolSearch: 'symbolSearch-3I4QF1U_',
        symbolSearchClose: 'symbolSearchClose-3QSRPDvy',
        content: 'content-3mgFz85m',
        desktopPublish: 'desktopPublish-3xVralL7',
        mobilePublish: 'mobilePublish-v3HVdbH2',
      };
    },
    bQ7Y: function (e, t, a) {
      e.exports = {
        button: 'button-2ioYhFEY',
        hover: 'hover-yHQNmTbI',
        isInteractive: 'isInteractive-20uLObIc',
        isGrouped: 'isGrouped-2BBXQnbO',
        isActive: 'isActive-22S-lGpa',
        isOpened: 'isOpened-p-Ume5l9',
        isDisabled: 'isDisabled-1_tmrLfP',
        text: 'text-1sK7vbvh',
        icon: 'icon-beK_KS0k',
      };
    },
    jjrI: function (e, t, a) {
      'use strict';
      function n(e) {
        var t = e.className,
          a = e.icon,
          n = void 0 === a ? '' : a,
          i = e.title,
          s = e.onClick,
          l = e.onMouseDown,
          c = e.onMouseUp,
          d = e.onMouseLeave,
          u = e.reference,
          h = Object(o.__rest)(e, [
            'className',
            'icon',
            'title',
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onMouseLeave',
            'reference',
          ]);
        return r.a.createElement(
          'span',
          Object(o.__assign)({}, h, {
            title: i,
            className: t,
            dangerouslySetInnerHTML: { __html: n },
            onClick: s,
            onMouseDown: l,
            onMouseUp: c,
            onMouseLeave: d,
            ref: u,
          }),
        );
      }
      var o, i, r;
      a.d(t, 'a', function () {
        return n;
      }),
        (o = a('mrSG')),
        (i = a('q1tI')),
        (r = a.n(i));
    },
    'tO+E': function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        wrap: 'wrap-3tiHesTk',
      };
    },
    tU7i: function (e, t, a) {
      'use strict';
      function n(e) {
        var t,
          a = e.icon,
          n = e.isActive,
          c = e.isOpened,
          d = e.isDisabled,
          u = e.isGrouped,
          h = e.isHovered,
          p = e.onClick,
          v = e.text,
          m = e.textBeforeIcon,
          f = e.title,
          y = e.theme,
          b = void 0 === y ? l : y,
          _ = e.className,
          S = e.forceInteractive,
          g = Object(o.__rest)(e, [
            'icon',
            'isActive',
            'isOpened',
            'isDisabled',
            'isGrouped',
            'isHovered',
            'onClick',
            'text',
            'textBeforeIcon',
            'title',
            'theme',
            'className',
            'forceInteractive',
          ]),
          E = r(
            _,
            b.button,
            f && 'apply-common-tooltip',
            (((t = {})[b.isActive] = n),
            (t[b.isOpened] = c),
            (t[b.isInteractive] = (S || Boolean(p)) && !d),
            (t[b.isDisabled] = d),
            (t[b.isGrouped] = u),
            (t[b.hover] = h),
            t),
          ),
          C =
            a &&
            ('string' == typeof a
              ? i.createElement(s.a, { className: b.icon, icon: a })
              : i.cloneElement(a, { className: r(b.icon, a.props.className) }));
        return i.createElement(
          'div',
          Object(o.__assign)({}, g, {
            'data-role': 'button',
            className: E,
            onClick: d ? void 0 : p,
            title: f,
          }),
          m &&
            v &&
            i.createElement(
              'div',
              { className: r('js-button-text', b.text) },
              v,
            ),
          C,
          !m &&
            v &&
            i.createElement(
              'div',
              { className: r('js-button-text', b.text) },
              v,
            ),
        );
      }
      var o, i, r, s, l;
      a.d(t, 'a', function () {
        return n;
      }),
        (o = a('mrSG')),
        (i = a('q1tI')),
        (r = a('TSYQ')),
        (s = a('jjrI')),
        (l = a('bQ7Y'));
    },
  },
]);
