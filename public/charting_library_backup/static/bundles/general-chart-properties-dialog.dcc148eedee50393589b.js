(window.webpackJsonp = window.webpackJsonp || []).push([
  ['general-chart-properties-dialog'],
  {
    '++0f': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
    },
    KKsp: function (e, t, n) {
      'use strict';
      function o(e) {
        return i.createElement('div', { className: a.separator });
      }
      var i, a;
      n.d(t, 'a', function () {
        return o;
      }),
        (i = n('q1tI')),
        (a = n('NOPy'));
    },
    NOPy: function (e, t, n) {
      e.exports = { separator: 'separator-25lkUpN-' };
    },
    PI1I: function (e, t, n) {
      'use strict';
      function o(e) {
        var t = e.themeName,
          n = e.chartWidgetCollection,
          o = e.onRemove,
          a = e.manager,
          r = Object(E.b)(),
          s = r[0],
          c = r[1];
        return i.createElement(
          'div',
          Object(l.__assign)({}, c),
          i.createElement(g.b, {
            className: B.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: function () {
              Object(C.loadTheme)(t, !1, !1, n).then(function () {
                window.saver.saveChartSilently(),
                  Object(P.trackEvent)('GUI', 'Switch to custom theme');
              });
            },
            toolbox: i.createElement(w.a, {
              hidden: !Modernizr.mobiletouch && !s,
              onClick: function () {
                !(function (e, t, n) {
                  if (window.is_authenticated) {
                    var o = Object(T.clean)(A.format(e));
                    Object(S.createConfirmDialog)({
                      type: 'modal',
                      content: o,
                      manager: n || void 0,
                    }).then(function (n) {
                      n.on('action:yes', function (n) {
                        Object(C.removeTheme)(e), t && t(e), n.close();
                      }),
                        n.open();
                    });
                  }
                })(t, o, a);
              },
            }),
          }),
        );
      }
      var i,
        a,
        l,
        r,
        s,
        c,
        m,
        u,
        d,
        p,
        h,
        b,
        f,
        y,
        _,
        g,
        v,
        C,
        T,
        S,
        A,
        k,
        w,
        P,
        E,
        B,
        x,
        I,
        N,
        D,
        z,
        O,
        V,
        M,
        j,
        W,
        L,
        R,
        K,
        q,
        H,
        Q,
        U,
        F;
      n.r(t),
        n('YFKU'),
        (i = n('q1tI')),
        (a = n('i8i4')),
        (l = n('mrSG')),
        (r = n('TSYQ')),
        (s = n('vWed')),
        (c = n('jjrI')),
        (m = n('bvfV')),
        (u = n('ycFu')),
        (d = n('ybVX')),
        (p = n('Q+1u')),
        (h = n('Vdly')),
        (b = n.n(h)),
        (f = n('VNzU')),
        (y = n('/KDZ')),
        n('bSeV'),
        (_ = n('H172')),
        (g = n('N5tr')),
        (v = n('KKsp')),
        (C = n('EsvI')),
        n('HbRj'),
        (T = n('CLNU')),
        (S = n('oNDq')),
        (A = window.t("Do you really want to delete Color Theme '{0}' ?")),
        (k = n('+EG+')),
        n('bf9a'),
        (w = n('i/MG')),
        (P = n('PC8g')),
        (E = n('8d0Q')),
        (B = n('utEQ')),
        (x = n('HWhk')),
        (I = window.t('Template')),
        (N = window.t('Apply Defaults')),
        window.t('Save As...'),
        (D = window.t('Apply to all')),
        (z = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._manager = null),
              (n._handleApplyDefaults = function () {
                var e,
                  t = n.props,
                  o = t.model,
                  i = t.chartWidgetCollection;
                o.restorePreferences(),
                  (e = Object(C.getCurrentTheme)().name),
                  Object(C.loadTheme)(e, !0, !0, i);
              }),
              (n._handleSaveAs = function () {}),
              (n._handleRemoveTheme = function (e) {
                n.setState({
                  themes: n.state.themes.filter(function (t) {
                    return t !== e;
                  }),
                });
              }),
              (n._syncThemeList = function () {
                0;
              }),
              (n._defaultDropdownItems = [
                {
                  value: 'apply',
                  readonly: !0,
                  content: i.createElement(g.b, {
                    className: B.defaultsButtonItem,
                    isActive: !1,
                    label: N,
                    onClick: n._handleApplyDefaults,
                  }),
                },
              ]),
              (n._applyToAllDropdownItem = {
                value: 'apply_to_all',
                readonly: !0,
                content: i.createElement(g.b, {
                  className: B.defaultsButtonItem,
                  isActive: !1,
                  label: D,
                  onClick: t.applyToAllCallback,
                }),
              }),
              (n.state = { themes: [] }),
              n._syncThemeList(),
              n
            );
          }
          return (
            Object(l.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.createElement(k.b.Consumer, null, function (t) {
                return (
                  (e._manager = t),
                  i.createElement(
                    y.a,
                    { rule: 'screen and (max-width: 768px)' },
                    function (t) {
                      return i.createElement(_.a, {
                        className: !t && B.themesButtonText,
                        items: e._getThemeItems(t),
                        hideArrowButton: t,
                        value: 'defaults',
                        'data-name': 'theme-select',
                      });
                    },
                  )
                );
              });
            }),
            (t.prototype._getThemeItems = function (e) {
              var t,
                n = this,
                a = this.props,
                r = a.isApplyToAllVisible,
                s = a.chartWidgetCollection,
                c =
                  e && r
                    ? Object(l.__spreadArrays)(
                        [
                          this._applyToAllDropdownItem,
                          this._getPlaceHolderItem(e),
                        ],
                        this._defaultDropdownItems,
                      )
                    : Object(l.__spreadArrays)(
                        [this._getPlaceHolderItem(e)],
                        this._defaultDropdownItems,
                      ),
                m = this.state.themes;
              return m.length
                ? ((t = m.map(function (e) {
                    return {
                      value: e,
                      readonly: !0,
                      content: i.createElement(o, {
                        themeName: e,
                        onRemove: n._handleRemoveTheme,
                        chartWidgetCollection: s,
                        manager: n._manager,
                      }),
                    };
                  })).unshift({
                    readonly: !0,
                    content: i.createElement(v.a, null),
                  }),
                  c.concat(t))
                : c;
            }),
            (t.prototype._getPlaceHolderItem = function (e) {
              return {
                value: 'defaults',
                readonly: !0,
                content: '',
                selectedContent: e
                  ? i.createElement(c.a, {
                      className: B.themesButtonIcon,
                      icon: x,
                    })
                  : I,
              };
            }),
            t
          );
        })(i.PureComponent)),
        (O = n('tWVy')),
        (V = n('yqnI')),
        (M = n('uhCe')),
        (j = n('tmL0')),
        (W = {
          areaSymbolMinTick: 'normal',
          areaSymbolTimezone: 'normal',
          barSymbolMinTick: 'normal',
          barSymbolTimezone: 'normal',
          baselineSymbolMinTick: 'normal',
          baselineSymbolTimezone: 'normal',
          candleSymbolMinTick: 'normal',
          candleSymbolTimezone: 'normal',
          dateFormat: 'normal',
          haSymbolMinTick: 'normal',
          haSymbolTimezone: 'normal',
          hiloSymbolMinTick: 'normal',
          hiloSymbolTimezone: 'normal',
          hollowCandleSymbolMinTick: 'normal',
          hollowCandleSymbolTimezone: 'normal',
          kagiAtrLength: 'normal',
          kagiReversalAmount: 'normal',
          kagiStyle: 'normal',
          kagiSymbolMinTick: 'normal',
          kagiSymbolTimezone: 'normal',
          lineSymbolMinTick: 'normal',
          lineSymbolTimezone: 'normal',
          lockScale: 'normal',
          mainSeriesSymbolAreaPriceSource: 'normal',
          mainSeriesSymbolBaseLevelPercentage: 'normal',
          mainSeriesSymbolBaseLinePriceSource: 'normal',
          mainSeriesSymbolLinePriceSource: 'normal',
          mainSeriesSymbolStyleType: 'normal',
          navButtons: 'big',
          pbLb: 'normal',
          pbSymbolMinTick: 'normal',
          pbSymbolTimezone: 'normal',
          pnfAtrLength: 'normal',
          pnfBoxSize: 'normal',
          pnfReversalAmount: 'normal',
          pnfSources: 'normal',
          pnfStyle: 'normal',
          pnfSymbolMinTick: 'normal',
          pnfSymbolTimezone: 'normal',
          rangeSymbolMinTick: 'normal',
          rangeSymbolTimezone: 'normal',
          renkoAtrLength: 'normal',
          renkoBoxSize: 'normal',
          renkoStyle: 'normal',
          renkoSymbolMinTick: 'normal',
          renkoSymbolTimezone: 'normal',
          scalesPlacement: 'normal',
          symbolLastValueLabel: 'big',
          symbolTextSource: 'normal',
        }),
        (L = n('++0f')),
        (R = n('U0JK')),
        (K = n('sXZi')),
        (q = 'properties_dialog.last_page_id'),
        (H = (function (e) {
          function t(t) {
            var n,
              o,
              a,
              l,
              r = e.call(this, t) || this;
            return (
              (r._renderChildren = function (e) {
                var t = e.requestResize,
                  n = e.isSmallWidth;
                return (
                  (r._requestResize = t),
                  i.createElement(
                    'div',
                    { className: K.content },
                    r._renderTabs(n),
                    r._renderTabContent(n),
                  )
                );
              }),
              (r._renderApplyToAllButton = function () {
                return i.createElement(
                  y.a,
                  { rule: M.a.TabletNormal },
                  function (e) {
                    return r._renderApplyToAll(e);
                  },
                );
              }),
              (r._renderFooterLeft = function () {
                var e = r.props,
                  t = e.model,
                  n = e.chartWidgetCollection,
                  o = r.state.isApplyToAllVisible;
                return i.createElement(z, {
                  model: t,
                  isApplyToAllVisible: o,
                  applyToAllCallback: r._handleApplyToAll,
                  chartWidgetCollection: n,
                });
              }),
              (r._createTabClickHandler = function (e) {
                return function () {
                  return r._selectPage(e);
                };
              }),
              (r._selectPage = function (e) {
                var t = r.state.activePage;
                e !== t &&
                  (t &&
                    t.definitions.unsubscribe(r._onChangeActivePageDefinitions),
                  b.a.setValue(q, e.id),
                  e.definitions.subscribe(r._onChangeActivePageDefinitions),
                  r.setState(
                    { activePage: e, tableKey: Date.now() },
                    function () {
                      r._requestResize && r._requestResize();
                    },
                  ));
              }),
              (r._onChangeActivePageDefinitions = function () {
                V.a.logNormal('Definition collection was updated'),
                  r.setState({ tableKey: Date.now() }, function () {
                    r._requestResize && r._requestResize();
                  });
              }),
              (r._handleCancel = function () {
                r.props.onCancel(), r.props.onClose();
              }),
              (r._handleSubmit = function () {
                r.props.onSubmit(), r.props.onClose();
              }),
              (r._handleScroll = function () {
                O.a.fire();
              }),
              (r._handleApplyToAll = function () {
                var e = r.props,
                  t = e.chartWidgetCollection,
                  n = e.model,
                  o = r.state.isApplyToAllVisible;
                o && t.applyPreferencesToAllCharts(n);
              }),
              (r._syncApplyToAllVisibility = function () {
                var e = r.props.chartWidgetCollection;
                r.setState({
                  isApplyToAllVisible: Object(f.isMultipleLayout)(
                    e.layout.value(),
                  ),
                });
              }),
              (r._handleBackClick = function () {
                var e = r.state.activePage;
                e &&
                  e.definitions.unsubscribe(r._onChangeActivePageDefinitions),
                  r.setState({ activePage: null });
              }),
              (n = t.pages),
              (o = t.activePageId),
              (a = n.find(function (e) {
                return e.id === o;
              })) ||
                ((l = b.a.getValue(q)),
                (a =
                  n.find(function (e) {
                    return e.id === l;
                  }) || n[0])),
              (r.state = {
                activePage: a,
                isApplyToAllVisible: Object(f.isMultipleLayout)(
                  t.chartWidgetCollection.layout.value(),
                ),
                tableKey: Date.now(),
              }),
              r
            );
          }
          return (
            Object(l.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              e.layout.subscribe(this._syncApplyToAllVisibility),
                t &&
                  t.definitions.subscribe(this._onChangeActivePageDefinitions);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.chartWidgetCollection,
                t = this.state.activePage;
              t &&
                t.definitions.unsubscribe(this._onChangeActivePageDefinitions),
                e.layout.unsubscribe(this._syncApplyToAllVisibility);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.isOpened,
                o = t.onClose,
                a = this.state.activePage;
              return i.createElement(
                y.a,
                { rule: M.a.TabletSmall },
                function (t) {
                  return i.createElement(u.a, {
                    className: K.withSidebar,
                    dataName: 'series-properties-dialog',
                    onClose: o,
                    isOpened: n,
                    title:
                      null !== a && t ? a.title : window.t('Chart settings'),
                    footerLeftRenderer: e._renderFooterLeft,
                    additionalButtons: e._renderApplyToAllButton(),
                    additionalHeaderElement:
                      null !== a && t
                        ? i.createElement(c.a, {
                            className: K.backButton,
                            icon: R,
                            onClick: e._handleBackClick,
                          })
                        : void 0,
                    onSubmit: e._handleSubmit,
                    onCancel: e._handleCancel,
                    render: e._renderChildren,
                    submitOnEnterKey: !1,
                  });
                },
              );
            }),
            (t.prototype._renderTabContent = function (e) {
              var t,
                n,
                o = this.props.pages,
                a = this._getCurrentPage(e);
              return a
                ? ((n = (t = o.find(function (e) {
                    return e.id === a.id;
                  }))
                    ? t.definitions.value()
                    : []),
                  i.createElement(
                    j.a,
                    { className: K.tabContent, onScroll: this._handleScroll },
                    i.createElement(
                      d.b.Provider,
                      { value: W },
                      i.createElement(
                        p.a,
                        { key: this.state.tableKey },
                        n.map(function (e) {
                          return i.createElement(m.a, {
                            key: e.id,
                            definition: e,
                          });
                        }),
                      ),
                    ),
                  ))
                : null;
            }),
            (t.prototype._renderTabs = function (e) {
              var t,
                n = this,
                o = this.props.pages,
                a = this.state.activePage;
              return a && e
                ? null
                : ((t = this._getCurrentPage(e)),
                  i.createElement(
                    'div',
                    { className: K.sidebar, onScroll: this._handleScroll },
                    o.map(function (o) {
                      return i.createElement(
                        'div',
                        {
                          key: o.id,
                          className: r(K.tab, t && o.id === t.id && K.active),
                          onClick: n._createTabClickHandler(o),
                          'data-name': o.id,
                        },
                        i.createElement(c.a, {
                          className: K.icon,
                          icon: o.icon,
                        }),
                        i.createElement(
                          'span',
                          { className: K.tabTitle },
                          o.title,
                          e &&
                            i.createElement(c.a, {
                              className: K.rightArrow,
                              icon: L,
                            }),
                        ),
                      );
                    }),
                  ));
            }),
            (t.prototype._renderApplyToAll = function (e) {
              var t = this.state.isApplyToAllVisible;
              return (
                !e &&
                t &&
                i.createElement(
                  'span',
                  { className: K.applyToAllButton },
                  i.createElement(
                    s.Button,
                    { appearance: 'stroke', onClick: this._handleApplyToAll },
                    window.t('Apply to all'),
                  ),
                )
              );
            }),
            (t.prototype._getCurrentPage = function (e) {
              var t = this.props.pages,
                n = this.state.activePage,
                o = null;
              return n ? (o = n) : !e && t.length && (o = t[0]), o;
            }),
            t
          );
        })(i.PureComponent)),
        (Q = n('FQhm')),
        n.d(t, 'GeneralChartPropertiesDialogRenderer', function () {
          return F;
        }),
        (U = window.t('Chart settings')),
        (F = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this._isVisible = !1),
              (this._handleClose = function () {
                a.unmountComponentAtNode(t._container),
                  (t._isVisible = !1),
                  t._onClose && t._onClose();
              }),
              (this._handleSubmit = function () {}),
              (this._handleCancel = function () {
                t._model.undoToCheckpoint(t._checkpoint);
              }),
              (this._propertyPages = e.propertyPages),
              (this._model = e.model),
              (this._activePageId = e.activePageId),
              (this._onClose = e.onClose),
              (this._chartWidgetCollection = e.chartWidgetCollection),
              (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint));
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
            (e.prototype.show = function () {
              a.render(
                i.createElement(H, {
                  title: U,
                  isOpened: !0,
                  onSubmit: this._handleSubmit,
                  onClose: this._handleClose,
                  onCancel: this._handleCancel,
                  pages: this._propertyPages,
                  model: this._model,
                  activePageId: this._activePageId,
                  chartWidgetCollection: this._chartWidgetCollection,
                }),
                this._container,
              ),
                (this._isVisible = !0),
                Q.emit('edit_object_dialog', {
                  objectType: 'mainSeries',
                  scriptTitle: this._model.mainSeries().title(),
                });
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
    U0JK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.2" d="M17 21l-7.5-7.5L17 6"/></svg>';
    },
    sXZi: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
        withSidebar: 'withSidebar-1v16TX_2',
        content: 'content-1KOxICHZ',
        tabContent: 'tabContent-uYpWHhq0',
        sidebar: 'sidebar-1CxuYEaZ',
        tab: 'tab-1KB3AYjk',
        icon: 'icon-3RCxK4xD',
        tabTitle: 'tabTitle-1x1ghlva',
        rightArrow: 'rightArrow-2GvO3Qt1',
        active: 'active-3Ls9mvA5',
        backButton: 'backButton-1BRkbiCz',
        applyToAllButton: 'applyToAllButton-1mQDSNsO',
      };
    },
    utEQ: function (e, t, n) {
      e.exports = {
        themesButtonText: 'themesButtonText-2QMmFP4s',
        themesButtonIcon: 'themesButtonIcon-7BX3V6du',
        defaultsButtonText: 'defaultsButtonText-ezA5ZCBQ',
        defaultsButtonItem: 'defaultsButtonItem-3eSfgMfv',
      };
    },
  },
]);
