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
        toolbar: 'toolbar-2n2cwgp5-',
        isHidden: 'isHidden-GTob3P_C-',
        overflowWrap: 'overflowWrap-PWdgT-U_-',
        customButton: 'customButton--jqJTfH5-',
        hovered: 'hovered-1mGRUp3y-',
      };
    },
    '6oLA': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g><path fill-rule="nonzero" d="M4.034 14.18l-.07-.18.07-.18c1.535-3.975 5.645-6.82 9.966-6.82 4.32 0 8.431 2.845 9.966 6.82l.07.18-.07.18c-1.535 3.975-5.646 6.82-9.966 6.82-4.321 0-8.431-2.845-9.966-6.82zm9.966 5.82c3.84 0 7.521-2.503 8.962-6-1.441-3.497-5.122-6-8.962-6-3.841 0-7.521 2.503-8.962 6 1.441 3.497 5.121 6 8.962 6z"/><path d="M11 14.001c0 1.66 1.341 2.999 3.001 2.999s2.999-1.339 2.999-2.999c0-1.66-1.339-3.001-2.999-3.001-1.66 0-3.001 1.341-3.001 3.001z"/></g></svg>';
    },
    KMbc: function (e, t, a) {
      'use strict';
      function n(e) {
        var t,
          a = e.children,
          n = e.className,
          o = e.noLeftDecoration,
          r = e.noRightDecoration,
          i = e.noMinimalWidth,
          l = e.onClick;
        return s.createElement(
          'div',
          {
            className: u(
              n,
              w.group,
              ((t = {}),
              (t[w.noMinimalWidth] = i),
              (t[w.noLeftDecoration] = o),
              (t[w.noRightDecoration] = r),
              t),
            ),
            onClick: l,
          },
          a,
        );
      }
      function o(e) {
        return s.createElement(
          M.a,
          i.__assign({}, e, { forceInteractive: !0, icon: A }),
        );
      }
      function r(e) {
        return s.createElement(
          'div',
          { className: L.wrap },
          s.createElement(I.a, { className: L.icon, icon: W }),
          T.text,
        );
      }
      var i,
        s,
        l,
        c,
        d,
        u,
        h,
        p,
        m,
        v,
        y,
        f,
        _,
        S,
        E,
        b,
        g,
        w,
        C,
        k,
        M,
        A,
        I,
        L,
        W,
        T,
        B,
        R,
        x,
        F,
        N,
        D,
        O,
        P,
        V,
        H,
        G,
        z,
        Y,
        j,
        U,
        K,
        Q,
        q,
        X,
        J,
        Z,
        ee,
        te,
        ae,
        ne,
        oe,
        re,
        ie;
      a.r(t),
        (i = a('mrSG')),
        (s = a('q1tI')),
        (l = a('i8i4')),
        (c = a('Eyy1')),
        a('P5fv'),
        (d = a('17x9')),
        (u = a('TSYQ')),
        (h = a('4O8T')),
        (p = a.n(h)),
        (m = a('Kxc7')),
        (v = a('FQhm')),
        (y = a('dfhE')),
        (f = a('qFKp')),
        (_ = a('PoSe')),
        (S = a.n(_)),
        (E = a('XmVn')),
        a('bf9a'),
        (b = a('+GaQ')),
        (g = a('+GxX')),
        (w = a('KrBX')),
        (C = a('tO+E')),
        (k = (function (e) {
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
            i.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                a = e.shouldMeasure;
              return s.createElement(
                E,
                {
                  shouldMeasure: a,
                  onMeasure: this._handleMeasure,
                  whitelist: ['width'],
                },
                s.createElement('div', { className: C.wrap }, t),
              );
            }),
            t
          );
        })(s.PureComponent)),
        (M = a('tU7i')),
        (A = a('Opoj')),
        a('YFKU'),
        (I = a('jjrI')),
        (L = a('a+Yp')),
        (W = a('6oLA')),
        (T = { text: window.t('View Only Mode') }),
        (B = a('4Cm8')),
        (R = a('XAms')),
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
            (e.Publish = 'header-toolbar-publish'),
            (e.Fullscreen = 'header-toolbar-fullscreen'),
            (e.Screenshot = 'header-toolbar-screenshot'),
            (e.Replay = 'header-toolbar-replay');
        })(x || (x = {})),
        (F = a('a8bL')),
        (N = Object(g.isFeatureEnabled)('hide-copy-readonly')),
        (D = (function (e) {
          function t(t, a) {
            var o = e.call(this, t, a) || this;
            return (
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
                  r = o.context.tools;
                return e.map(function (e) {
                  return s.createElement(
                    n,
                    { className: u(1 !== a && F.hidden) },
                    s.createElement(r.Custom, i.__assign({}, e, { isFake: t })),
                  );
                });
              }),
              (o._fixLastGroup = function (e, t, a) {
                if (t === a.length - 1 && s.isValidElement(e) && e.type === n) {
                  var r =
                    void 0 !== o.context.tools.Publish && !o.props.readOnly;
                  return s.cloneElement(e, { noRightDecoration: r });
                }
                return e;
              }),
              (o.state = { mode: 1 }),
              o
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                a,
                i = this.context.tools,
                l = this.props,
                c = l.features,
                d = l.displayMode,
                h = l.chartSaver,
                p = l.studyMarket,
                m = l.readOnly,
                v = l.templateSyncEmitter,
                y = l.saveLoadSyncEmitter,
                f = l.leftCustomButtons,
                _ = l.rightCustomButtons,
                S = l.showScrollbarWhen,
                g = l.width,
                w = void 0 === g ? 0 : g,
                C = l.isFake,
                M = void 0 !== C && C,
                A = this.state.mode,
                I = this._processCustoms(f),
                L = this._processCustoms(_),
                W = S.includes(d);
              return s.createElement(
                'div',
                {
                  className: u(F.inner, ((e = {}), (e[F.fake] = M), e)),
                  onContextMenu: R.b,
                },
                s.createElement(
                  E,
                  {
                    onMeasure: this._handleMeasureAvailableSpace,
                    whitelist: ['width'],
                    shouldMeasure: !M,
                  },
                  s.createElement(
                    B.a,
                    {
                      isVisibleFade: Modernizr.mobiletouch && W,
                      isVisibleButtons: !Modernizr.mobiletouch && W,
                      isVisibleScrollbar: !1,
                      shouldMeasure: W && !M,
                    },
                    s.createElement(
                      'div',
                      { className: F.content },
                      s.createElement(
                        k,
                        {
                          onWidthChange: this._handleInnerResize,
                          shouldMeasure: M,
                        },
                        s.createElement(
                          b.a,
                          { map: this._fixLastGroup },
                          !m &&
                            s.Children.toArray(
                              [
                                i.SymbolSearch &&
                                  s.createElement(
                                    n,
                                    {
                                      key: 'symbol',
                                      className: 2 === A && F.symbolSearch,
                                    },
                                    s.createElement(i.SymbolSearch, {
                                      id: M ? void 0 : x.SymbolSearch,
                                      isActionsVisible:
                                        c.allowSymbolSearchSpread,
                                      isExpanded: 2 === A,
                                      onFocus: this._activateSymbolSearchMode,
                                      onBlur: this._activateNormalMode,
                                      maxWidth: w,
                                    }),
                                  ),
                                i.DateRange &&
                                  s.createElement(
                                    n,
                                    { key: 'range' },
                                    s.createElement(i.DateRange, null),
                                  ),
                                i.Intervals &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'intervals' },
                                    s.createElement(i.Intervals, {
                                      id: M ? void 0 : x.Intervals,
                                      isShownQuicks: c.allowFavoriting,
                                      isFavoritingAllowed: c.allowFavoriting,
                                      displayMode: d,
                                      isFake: M,
                                    }),
                                  ),
                                i.Bars &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'styles' },
                                    s.createElement(i.Bars, {
                                      id: M ? void 0 : x.ChartStyles,
                                      isShownQuicks: c.allowFavoriting,
                                      isFavoritingAllowed: c.allowFavoriting,
                                      displayMode: d,
                                      isFake: M,
                                    }),
                                  ),
                                i.Compare &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'compare' },
                                    s.createElement(i.Compare, {
                                      id: M ? void 0 : x.Compare,
                                      className: F.button,
                                      displayMode: d,
                                    }),
                                  ),
                                i.Indicators &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'indicators' },
                                    s.createElement(i.Indicators, {
                                      id: M ? void 0 : x.Indicators,
                                      className: F.button,
                                      studyMarket: p,
                                      displayMode: d,
                                    }),
                                  ),
                                i.Templates &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'templates' },
                                    s.createElement(i.Templates, {
                                      id: M ? void 0 : x.StudyTemplates,
                                      isShownQuicks: c.allowFavoriting,
                                      isFavoritingAllowed: c.allowFavoriting,
                                      displayMode: d,
                                      stateSyncEmitter: v,
                                      isFake: M,
                                    }),
                                  ),
                                1 === A &&
                                  i.Alert &&
                                  s.createElement(
                                    n,
                                    { key: 'alert' },
                                    s.createElement(i.Alert, {
                                      id: M ? void 0 : x.Alerts,
                                      className: F.button,
                                      displayMode: d,
                                    }),
                                  ),
                                1 === A &&
                                  i.AlertReferral &&
                                  s.createElement(
                                    n,
                                    { key: 'alert-referral' },
                                    s.createElement(i.AlertReferral, {
                                      className: F.button,
                                      displayMode: d,
                                    }),
                                  ),
                                i.Replay &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'replay' },
                                    s.createElement(i.Replay, {
                                      id: M ? void 0 : x.Replay,
                                      className: F.button,
                                      displayMode: d,
                                    }),
                                  ),
                                i.UndoRedo &&
                                  1 === A &&
                                  s.createElement(
                                    n,
                                    { key: 'undo-redo' },
                                    s.createElement(i.UndoRedo, {
                                      id: M ? void 0 : x.UndoRedo,
                                    }),
                                  ),
                                i.ScalePercentage &&
                                  s.createElement(
                                    n,
                                    { key: 'percentage' },
                                    s.createElement(i.ScalePercentage, null),
                                  ),
                                i.ScaleLogarithm &&
                                  s.createElement(
                                    n,
                                    { key: 'logarithm' },
                                    s.createElement(i.ScaleLogarithm, null),
                                  ),
                              ].concat(I),
                            ),
                          1 === A
                            ? ((t = s.Children.toArray(
                                [
                                  m &&
                                    s.createElement(
                                      n,
                                      { key: 'view-only-badge' },
                                      s.createElement(r, null),
                                    ),
                                  s.createElement(n, {
                                    key: 'gap',
                                    className: u(F.fill, M && F.collapse),
                                  }),
                                  !m &&
                                    i.Layout &&
                                    s.createElement(
                                      n,
                                      { key: 'layout' },
                                      s.createElement(i.Layout, {
                                        id: M ? void 0 : x.Layouts,
                                      }),
                                    ),
                                  i.SaveLoad &&
                                    !(m && N) &&
                                    s.createElement(
                                      n,
                                      { key: 'save-load-right' },
                                      s.createElement(i.SaveLoad, {
                                        id: M ? void 0 : x.SaveLoad,
                                        chartSaver: h,
                                        isReadOnly: m,
                                        displayMode: d,
                                        isFake: M,
                                        stateSyncEmitter: y,
                                      }),
                                    ),
                                  i.SaveLoadReferral &&
                                    s.createElement(
                                      n,
                                      { key: 'save-load-referral' },
                                      s.createElement(i.SaveLoadReferral, {
                                        isReadOnly: m,
                                        displayMode: d,
                                      }),
                                    ),
                                  c.showLaunchInPopupButton &&
                                    i.OpenPopup &&
                                    s.createElement(
                                      n,
                                      { key: 'popup' },
                                      s.createElement(i.OpenPopup, null),
                                    ),
                                  !m &&
                                    i.Properties &&
                                    s.createElement(
                                      n,
                                      { key: 'properties' },
                                      s.createElement(i.Properties, {
                                        id: M ? void 0 : x.Properties,
                                        className: F.iconButton,
                                      }),
                                    ),
                                  !m &&
                                    i.Fullscreen &&
                                    s.createElement(
                                      n,
                                      {
                                        key: 'fullscreen',
                                        onClick: this
                                          ._trackFullscreenButtonClick,
                                      },
                                      s.createElement(i.Fullscreen, {
                                        id: M ? void 0 : x.Fullscreen,
                                      }),
                                    ),
                                  i.Screenshot &&
                                    s.createElement(
                                      n,
                                      { key: 'screenshot' },
                                      s.createElement(i.Screenshot, {
                                        id: M ? void 0 : x.Screenshot,
                                        className: F.iconButton,
                                      }),
                                    ),
                                ].concat(L),
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
                                    var n, o, r;
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
                                          (r = { noLeftDecoration: !0 }),
                                            (t = s.cloneElement(t, r));
                                      }
                                    return t;
                                  });
                                }),
                              t)
                            : [
                                s.createElement(n, {
                                  key: 'gap',
                                  className: u(
                                    F.fill,
                                    2 === A && F.minimalPriority,
                                  ),
                                }),
                                s.createElement(
                                  n,
                                  { key: 'symbol-search-close' },
                                  s.createElement(o, {
                                    className: u(
                                      F.iconButton,
                                      F.symbolSearchClose,
                                    ),
                                  }),
                                ),
                              ],
                        ),
                      ),
                    ),
                  ),
                ),
                i.Publish &&
                  !m &&
                  !M &&
                  s.createElement(i.Publish, { id: x.Publish }),
              );
            }),
            (t.prototype._setMode = function (e) {
              this.setState({ mode: e });
            }),
            (t.prototype._trackFullscreenButtonClick = function () {
              0;
            }),
            (t.contextTypes = { tools: d.any.isRequired }),
            t
          );
        })(s.PureComponent)),
        (O = a('hY0g')),
        (P = a.n(O)),
        (V = a('ulZB')),
        (H = (function (e) {
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
          return i.__extends(t, e), t;
        })(V.b)),
        (G = a('pPtI')),
        (z = a('IVMC')),
        (Y = a.n(z)),
        (j = (function (e) {
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
            i.__extends(t, e),
            (t.prototype._serialize = function (e) {
              return Y()(e.map(G.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return Y()(
                Object(G.convertResolutionsFromSettings)(e)
                  .filter(G.isResolutionMultiplierValid)
                  .map(G.normalizeIntervalString),
              );
            }),
            t
          );
        })(V.a)),
        (U = a('ycI/')),
        (K = a('WUqb')),
        (Q = a('tWVy')),
        a('bSeV'),
        (q = (function (e) {
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
            i.__extends(t, e),
            (t.prototype.set = function (t, a) {
              e.prototype.set.call(this, t, a);
            }),
            (t.prototype._serialize = function (e) {
              return Y()(e.map(G.normalizeIntervalString));
            }),
            (t.prototype._deserialize = function (e) {
              return Y()(
                Object(G.convertResolutionsFromSettings)(e)
                  .filter(G.isResolutionMultiplierValid)
                  .map(G.normalizeIntervalString),
              );
            }),
            t
          );
        })(V.a)),
        (X = a('FBuY')),
        (J = a('Vdly')),
        (Z = a('yMne')),
        (ee = a('6aN0')),
        (te = {
          Area: y.STYLE_AREA,
          Bars: y.STYLE_BARS,
          Candles: y.STYLE_CANDLES,
          'Heiken Ashi': y.STYLE_HEIKEN_ASHI,
          'Hollow Candles': y.STYLE_HOLLOW_CANDLES,
          Line: y.STYLE_LINE,
        }),
        (ae = ['1', '30', '60']),
        (ne = []),
        (oe = ['full', 'medium']),
        (re = (function (e) {
          function t(t) {
            var a,
              n,
              o,
              r,
              i,
              s,
              l = e.call(this, t) || this;
            return (
              (l._templateSyncEmitter = new p.a()),
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
              (l._handleEsc = function () {
                Object(Q.b)();
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
              (r = (function (e) {
                void 0 === e && (e = []);
                var t = e.map(function (e) {
                  return te[e];
                }) || [
                  y.STYLE_CANDLES,
                  y.STYLE_RENKO,
                  y.STYLE_KAGI,
                  y.STYLE_PNF,
                ];
                return (
                  Object(f.isOnFeaturePage)() &&
                    !m.enabled('charting_library_base') &&
                    (t = []),
                  m.enabled('widget') &&
                    (t = [y.STYLE_BARS, y.STYLE_CANDLES, y.STYLE_AREA]),
                  t
                );
              })(l.props.defaultFavoriteStyles)),
              (l._favoriteChartStylesService = new H(X.TVXWindowEvents, J, r)),
              void 0 === (s = l.props.defaultFavoriteIntervals) && (s = []),
              (i = Object(G.mergeResolutions)(
                s,
                m.enabled('star_some_intervals_by_default') ? ae : [],
              )),
              (l._favoriteIntervalsService = new j(X.TVXWindowEvents, J, i)),
              (l._customIntervalsService = new q(X.TVXWindowEvents, J)),
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
                allowFavoriting: m.enabled('items_favoriting'),
                showIdeasButton: Boolean(l.props.ideas),
                showLaunchInPopupButton: Boolean(l.props.popupButton),
                allowSymbolSearchSpread:
                  m.enabled('header_symbol_search') &&
                  !m.enabled('charting_library_base'),
                allowToolbarHiding: m.enabled('collapsible_header'),
              }),
              (l._setDisplayMode = S()(l._setDisplayMode, 100)),
              l._negotiateResizer(),
              l
            );
          }
          return (
            i.__extends(t, e),
            (t.prototype.getChildContext = function () {
              var e = this.props,
                t = e.tools,
                a = e.windowMessageService,
                n = e.chartWidgetCollection,
                o = e.chartApiInstance,
                r = e.availableTimeFrames;
              return {
                tools: t,
                isFundamental: e.isFundamental,
                chartWidgetCollection: n,
                windowMessageService: a,
                chartApiInstance: o,
                availableTimeFrames: r,
                favoriteStudyTemplatesService: e.favoriteStudyTemplatesService,
                studyTemplates: e.studyTemplates,
                saveChartService: e.saveChartService,
                sharingChartService: e.sharingChartService,
                loadChartService: e.loadChartService,
                favoriteChartStylesService: this._favoriteChartStylesService,
                favoriteIntervalsService: this._favoriteIntervalsService,
                customIntervalsService: this._customIntervalsService,
                chartChangesWatcher: this._chartChangesWatcher,
                chartWidget: n.activeChartWidget.value(),
              };
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var a = this.state,
                n = a.isVisible,
                o = a.measureValid;
              n !== t.isVisible &&
                (v.emit('toggle_header', n), this._negotiateResizer()),
                o || this._setDisplayMode();
            }),
            (t.prototype.render = function () {
              var e,
                t = this,
                a = this.props,
                n = (a.resizerBridge, a.allowedModes),
                o = i.__rest(a, ['resizerBridge', 'allowedModes']),
                r = this.state,
                l = r.displayMode,
                d = r.availableWidth,
                h = r.isVisible,
                p = r.leftCustomButtons,
                m = r.rightCustomButtons,
                v = i.__assign(
                  {
                    features: this._features,
                    readOnly: this._readOnly,
                    isFake: !1,
                    templateSyncEmitter: this._templateSyncEmitter,
                    saveLoadSyncEmitter: this._saveLoadSyncEmitter,
                    width: d,
                    leftCustomButtons: p,
                    rightCustomButtons: m,
                  },
                  o,
                ),
                y = i.__assign({}, v, { isFake: !0, showScrollbarWhen: ne }),
                f = Object(c.ensureDefined)(n);
              return s.createElement(
                'div',
                {
                  className: u(
                    ee.toolbar,
                    ((e = {}), (e[ee.isHidden] = !h), e),
                  ),
                  onClick: this.props.onClick,
                },
                s.createElement(
                  'div',
                  { className: ee.overflowWrap },
                  s.createElement(
                    D,
                    i.__assign(
                      {
                        key: 'live',
                        showScrollbarWhen: this._showScrollbarWhen,
                        displayMode: l,
                        onAvailableSpaceChange: this._handleMeasure,
                      },
                      v,
                    ),
                  ),
                  f.map(function (e) {
                    return s.createElement(
                      D,
                      i.__assign(
                        {
                          key: e,
                          displayMode: e,
                          onWidthChange: t._panelWidthChangeHandlers[e],
                        },
                        y,
                      ),
                    );
                  }),
                ),
                s.createElement(U.a, {
                  keyCode: K.a.Escape,
                  handler: this._handleEsc,
                }),
              );
            }),
            (t.prototype.addButton = function (e) {
              var t, a, n, o, r, i;
              return (
                void 0 === e && (e = 'left'),
                (t = new P.a(0)),
                (a = $(
                  '<div class="apply-common-tooltip ' + ee.customButton + '">',
                )[0]),
                (n = { key: Number(new Date()), element: a, width: t }),
                (r = (o = this.state).leftCustomButtons),
                (i = o.rightCustomButtons),
                'left' === e
                  ? this.setState({ leftCustomButtons: r.concat([n]) })
                  : this.setState({ rightCustomButtons: i.concat([n]) }),
                a
              );
            }),
            (t.prototype._negotiateResizer = function () {
              this.props.resizerBridge.negotiateHeight(
                this.state.isVisible
                  ? Z.HEADER_TOOLBAR_HEIGHT_EXPANDED
                  : Z.HEADER_TOOLBAR_HEIGHT_COLLAPSED,
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
                r = Object(c.ensureDefined)(n),
                i = r.map(function (e) {
                  return o[e];
                }),
                s = i.findIndex(function (e) {
                  return a >= e;
                });
              -1 === s && (s = r.length - 1),
                (t = r[s]),
                this.setState({ measureValid: !0, displayMode: t });
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
            }),
            (t.defaultProps = { allowedModes: oe }),
            t
          );
        })(s.PureComponent)),
        a.d(t, 'HeaderToolbarRenderer', function () {
          return ie;
        }),
        (ie = (function () {
          function e(e, t) {
            var a = this;
            (this._component = null),
              (this._handleRef = function (e) {
                a._component = e;
              }),
              (this._container = e),
              l.render(
                s.createElement(
                  re,
                  i.__assign({}, t, { ref: this._handleRef }),
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
        group: 'group-wWM3zP_M-',
        noLeftDecoration: 'noLeftDecoration-15F5a1TB-',
        noRightDecoration: 'noRightDecoration-2GcAAgVb-',
        noMinimalWidth: 'noMinimalWidth-1sbl_ff5-',
      };
    },
    Opoj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="none" stroke="currentColor" d="M1 1l15 15M1 16L16 1"/></svg>';
    },
    WUqb: function (e, t, a) {
      'use strict';
      var n, o;
      a.d(t, 'a', function () {
        return o;
      }),
        a('mrSG'),
        (n = a('q1tI')),
        (function (e) {
          (e[(e.Enter = 13)] = 'Enter'),
            (e[(e.Space = 32)] = 'Space'),
            (e[(e.Backspace = 8)] = 'Backspace'),
            (e[(e.DownArrow = 40)] = 'DownArrow'),
            (e[(e.UpArrow = 38)] = 'UpArrow'),
            (e[(e.RightArrow = 39)] = 'RightArrow'),
            (e[(e.LeftArrow = 37)] = 'LeftArrow'),
            (e[(e.Escape = 27)] = 'Escape'),
            (e[(e.Tab = 9)] = 'Tab');
        })(o || (o = {}));
    },
    'a+Yp': function (e, t, a) {
      e.exports = { wrap: 'wrap-3K4w_7te-', icon: 'icon-1dNdRXKB-' };
    },
    a8bL: function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        inner: 'inner-v8eiKwdM-',
        fake: 'fake-37paHC6T-',
        fill: 'fill-2axUON87-',
        minimalPriority: 'minimalPriority-1MGEuVHu-',
        collapse: 'collapse-17ig2Mxu-',
        button: 'button-3xrjDzA4-',
        iconButton: 'iconButton-3vyD3BPg-',
        hidden: 'hidden-2kSvETGo-',
        symbolSearch: 'symbolSearch-3I4QF1U_-',
        symbolSearchClose: 'symbolSearchClose-3QSRPDvy-',
        content: 'content-3mgFz85m-',
      };
    },
    bQ7Y: function (e, t, a) {
      e.exports = {
        button: 'button-2ioYhFEY-',
        isInteractive: 'isInteractive-20uLObIc-',
        hover: 'hover-yHQNmTbI-',
        isGrouped: 'isGrouped-2BBXQnbO-',
        isActive: 'isActive-22S-lGpa-',
        isOpened: 'isOpened-p-Ume5l9-',
        isDisabled: 'isDisabled-1_tmrLfP-',
        text: 'text-1sK7vbvh-',
        icon: 'icon-beK_KS0k-',
      };
    },
    'tO+E': function (e, t, a) {
      e.exports = {
        'css-value-header-toolbar-height': '38px',
        wrap: 'wrap-3tiHesTk-',
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
          h = e.onClick,
          p = e.text,
          m = e.textBeforeIcon,
          v = e.title,
          y = e.theme,
          f = void 0 === y ? l : y,
          _ = e.className,
          S = e.forceInteractive,
          E = o.__rest(e, [
            'icon',
            'isActive',
            'isOpened',
            'isDisabled',
            'isGrouped',
            'onClick',
            'text',
            'textBeforeIcon',
            'title',
            'theme',
            'className',
            'forceInteractive',
          ]),
          b = i(
            _,
            f.button,
            v && 'apply-common-tooltip',
            (((t = {})[f.isActive] = n),
            (t[f.isOpened] = c),
            (t[f.isInteractive] = (S || Boolean(h)) && !d),
            (t[f.isDisabled] = d),
            (t[f.isGrouped] = u),
            t),
          ),
          g =
            a &&
            ('string' == typeof a
              ? r.createElement(s.a, { className: f.icon, icon: a })
              : r.cloneElement(a, {
                  className: i(f.icon, a.props.className),
                }));
        return r.createElement(
          'div',
          o.__assign({}, E, {
            className: b,
            onClick: d ? void 0 : h,
            title: v,
          }),
          m &&
            p &&
            r.createElement(
              'div',
              { className: i('js-button-text', f.text) },
              p,
            ),
          g,
          !m &&
            p &&
            r.createElement(
              'div',
              { className: i('js-button-text', f.text) },
              p,
            ),
        );
      }
      var o, r, i, s, l;
      a.d(t, 'a', function () {
        return n;
      }),
        (o = a('mrSG')),
        (r = a('q1tI')),
        (i = a('TSYQ')),
        (s = a('jjrI')),
        (l = a('bQ7Y'));
    },
    'ycI/': function (e, t, a) {
      'use strict';
      var n, o, r;
      a.d(t, 'a', function () {
        return r;
      }),
        (n = a('mrSG')),
        (o = a('q1tI')),
        (r = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleKeyDown = function (e) {
                e.keyCode === t.props.keyCode && t.props.handler(e);
              }),
              t
            );
          }
          return (
            n.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              document.addEventListener(
                this.props.eventType || 'keydown',
                this._handleKeyDown,
                !1,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              document.removeEventListener(
                this.props.eventType || 'keydown',
                this._handleKeyDown,
                !1,
              );
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(o.PureComponent));
    },
  },
]);
