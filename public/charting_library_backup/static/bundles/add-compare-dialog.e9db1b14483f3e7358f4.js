(window.webpackJsonp = window.webpackJsonp || []).push([
  ['add-compare-dialog'],
  {
    UnpO: function (t, e, o) {
      'use strict';
      var a, n, i, c;
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddSymbolTab = void 0),
        (a = (function () {
          function t(t, e) {
            var o, a;
            for (o = 0; o < e.length; o++)
              ((a = e[o]).enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(t, a.key, a);
          }
          return function (e, o, a) {
            return o && t(e.prototype, o), a && t(e, a), e;
          };
        })()),
        (n = o('dKfe')),
        (i = o('pZll')),
        o('UxRG'),
        o('k47Q'),
        (c =
          '\n\t<div class="tv-add-symbol-tab">\n\t\t<input type="text" class="tv-control-input js-add-symbol-tab-input" placeholder="' +
          $.t('Symbol') +
          '" autocomplete="off">\n\t\t<div class="tv-add-symbol-tab__add-symbol-overlay js-add-symbol-tab-checkbox"></div>\n\t</div>'),
        (e.AddSymbolTab = (function () {
          function t(e, o) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this._chartWidgetCollection = e),
              (this._dialog = o),
              (this._$popup = null),
              this.init();
          }
          return (
            a(t, [
              {
                key: 'init',
                value: function () {
                  var t = this;
                  (this.$tab = $(c)),
                    (this._$input = this.$tab.find('.js-add-symbol-tab-input')),
                    (this._checkbox = new n.AddSymbolCheckbox({
                      labelRight: $.t('Overlay the main chart'),
                      labelAddClass: 'tv-add-symbol-tab__checkbox-label',
                      boxAddClass: 'tv-add-symbol-tab__checkbox-box',
                    })),
                    this.$tab
                      .find('.js-add-symbol-tab-checkbox')
                      .append(this._checkbox.$el),
                    (0, i.symbolSearchUIService)().bindToInput(this._$input, {
                      callback: function (e) {
                        var o = t._chartWidgetCollection.activeChartWidget.value();
                        o && o.addOverlayStudy(e, t._checkbox.checked);
                      },
                      onPopupOpen: function (e) {
                        e.css('z-index', t._dialog.getZIndex()),
                          (t._$popup = e);
                      },
                      onPopupClose: function () {
                        t._$popup = null;
                      },
                      keepFocus: !0,
                      clearAfterAccept: !0,
                    });
                },
              },
              {
                key: 'focus',
                value: function () {
                  Modernizr.mobiletouch || this._$input.focus();
                },
              },
              {
                key: 'isClickOnTab',
                value: function (t) {
                  return (
                    !!this._$popup &&
                    !(
                      this._$popup[0] !== t.target &&
                      !this._$popup[0].contains(t.target)
                    )
                  );
                },
              },
            ]),
            t
          );
        })());
    },
    UxRG: function (t, e, o) {},
    dKfe: function (t, e, o) {
      'use strict';
      var a, n, i;
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddSymbolCheckbox = void 0),
        (a = o('QwKQ')),
        (n = (i = a) && i.__esModule ? i : { default: i }),
        (e.AddSymbolCheckbox = (function (t) {
          function e(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (t.checked = TVSettings.getBool(
                'showAddSymbolDialog.checkboxState',
                !0,
              ));
            var o = (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !e || ('object' != typeof e && 'function' != typeof e)
                ? t
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (
              o.$checkbox.change(function () {
                setTimeout(function () {
                  TVSettings.setValue(
                    'showAddSymbolDialog.checkboxState',
                    o.checked,
                  );
                });
              }),
              o
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e,
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, n.default),
            e
          );
        })());
    },
    frtK: function (t, e, o) {},
    jPTo: function (t, e, o) {},
    k47Q: function (t, e, o) {},
    ocUP: function (t, e, o) {
      'use strict';
      (function (t, a) {
        var n, i, c, l, r, s;
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.CompareTab = void 0),
          (n = (function () {
            function t(t, e) {
              var o, a;
              for (o = 0; o < e.length; o++)
                ((a = e[o]).enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(t, a.key, a);
            }
            return function (e, o, a) {
              return o && t(e.prototype, o), a && t(e, a), e;
            };
          })()),
          (i = o('pZll')),
          (c = o('tITk')),
          o('UxRG'),
          o('b6p+'),
          o('frtK'),
          (l =
            '\n\t<div class="tv-compare-tab">\n\t\t<input type="text" class="tv-control-input js-compare-tab-input" placeholder="' +
            $.t('Company Comparison') +
            '" autocomplete="off">\n\t</div>'),
          (r =
            '<div class="tv-compare-tab__predefines js-compare-tab-predefines"></div>'),
          (s =
            '\n\t<div class="tv-compare-tab__predefine-cell {{additionalClass}}">\n\t\t<label for="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox">\n\t\t\t\t<input class="tv-control-checkbox__input js-predefine-checkbox" type="checkbox" id="{{symbolId}}">\n\t\t\t<span class="tv-control-checkbox__box tv-compare-tab__checkbox-box">' +
            o('aLUT') +
            '</span>\n\t\t\t<span class="tv-control-checkbox__ripple js-ripple"></span>\n\t\t\t</span>\n\t\t\t<span class="tv-control-checkbox__label tv-compare-tab__checkbox-label">{{label}}</span>\n\t\t</label>\n\t</div>'),
          (e.CompareTab = (function () {
            function e(t, o) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this._chartWidgetCollection = t),
                (this._dialog = o),
                (this._$popup = null),
                (this._predefines = {}),
                (this._symbolAlias = {}),
                this.init();
            }
            return (
              n(e, [
                {
                  key: '_addCompareSymbol',
                  value: function (t, e, o) {
                    var a = this._chartWidgetCollection.activeChartWidget.value();
                    if (a)
                      return a.addCompareStudy(t).then(function (t) {
                        var e = null !== t;
                        return e && (0, c.trackEvent)('GUI', 'Add Compare'), e;
                      });
                  },
                },
                {
                  key: 'removeCompareSymbol',
                  value: function (t) {
                    var e,
                      o = this,
                      a = this._chartWidgetCollection.activeChartWidget.value();
                    a &&
                      (e = a.model()) &&
                      e.dataSources().forEach(function (a) {
                        if (
                          a._metaInfo &&
                          'Compare@tv-basicstudies' === a._metaInfo.id
                        ) {
                          var n = a.properties().inputs.symbol.value();
                          (n === t ||
                            (o._symbolAlias[n] && o._symbolAlias[n] === t)) &&
                            e.removeSource(a);
                        }
                      });
                  },
                },
                {
                  key: 'init',
                  value: function () {
                    var e,
                      o,
                      a,
                      n = this,
                      i = this._chartWidgetCollection.activeChartWidget.value();
                    i &&
                      (e = i.model()) &&
                      ((o = e.dataSources()),
                      (this.$tab = $(l)),
                      this._initSymbolSearch(),
                      t.enabled('charting_library_base') ||
                        (this._createPredefinesList(),
                        (a = this.$tab.find('.js-compare-tab-predefines'))
                          .find('.js-predefine-checkbox')
                          .attr('checked', !1),
                        Object.keys(this._predefines).forEach(function (t) {
                          var e = n._symbolToId(t),
                            i = a.find('#' + e);
                          o.forEach(function (e) {
                            if (
                              e._metaInfo &&
                              'Compare@tv-basicstudies' === e._metaInfo.id
                            ) {
                              var o = e.properties().inputs.symbol.value();
                              (o === t ||
                                (n._symbolAlias[o] &&
                                  n._symbolAlias[o] === t)) &&
                                i.attr('checked', !0);
                            }
                          });
                        })));
                  },
                },
                {
                  key: '_initSymbolSearch',
                  value: function () {
                    var t = this;
                    (this._$input = this.$tab.find('.js-compare-tab-input')),
                      (0, i.symbolSearchUIService)().bindToInput(this._$input, {
                        callback: function (e) {
                          return t._addCompareSymbol(e);
                        },
                        onPopupOpen: function (e) {
                          e.css('z-index', t._dialog.getZIndex()),
                            (t._$popup = e);
                        },
                        onPopupClose: function () {
                          t._$popup = null;
                        },
                        keepFocus: !0,
                        clearAfterAccept: !0,
                      });
                  },
                },
                {
                  key: '_createPredefinesList',
                  value: function () {
                    function t(t) {
                      var e = this;
                      setTimeout(function () {
                        $(e).is(':checked')
                          ? o
                              ._addCompareSymbol(t.data.symbol)
                              .then(function (t) {
                                t || $(e).attr('checked', !1);
                              })
                          : o.removeCompareSymbol(t.data.symbol);
                      });
                    }
                    var e = this,
                      o = this,
                      n = $(r);
                    Object.keys(this._predefines).forEach(function (o) {
                      var i = $(
                          a.render(s, {
                            symbolId: e._symbolToId(o),
                            label: e._predefines[o],
                            additionalClass: e._isBovespa
                              ? 'tv-compare-tab__predefine-cell--wide'
                              : '',
                          }),
                        ),
                        c = i.find('.js-predefine-checkbox');
                      c.change({ symbol: o }, t), i.appendTo(n);
                    }),
                      n.appendTo(this.$tab);
                  },
                },
                {
                  key: '_symbolToId',
                  value: function (t) {
                    return t.replace(/[^a-z0-9]/gi, '_');
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    Modernizr.mobiletouch || this._$input.focus();
                  },
                },
                {
                  key: 'isClickOnTab',
                  value: function (t) {
                    return (
                      !!this._$popup &&
                      !(
                        this._$popup[0] !== t.target &&
                        !this._$popup[0].contains(t.target)
                      )
                    );
                  },
                },
              ]),
              e
            );
          })());
      }.call(this, o('Kxc7'), o('OiQe')));
    },
    tkV1: function (t, e, o) {
      'use strict';
      var a, n, i, c, l;
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AddCompareDialog = void 0),
        (a = (function () {
          function t(t, e) {
            var o, a;
            for (o = 0; o < e.length; o++)
              ((a = e[o]).enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(t, a.key, a);
          }
          return function (e, o, a) {
            return o && t(e.prototype, o), a && t(e, a), e;
          };
        })()),
        (n = o('ocUP')),
        (i = o('UnpO')),
        (c = o('NhD9')),
        o('jPTo'),
        (l = null),
        (e.AddCompareDialog = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this._chartWidgetCollection = e),
              (this._$symbolSearchPopup = null),
              (this._dialog = null),
              (this._compareTab = new n.CompareTab(
                this._chartWidgetCollection,
                this,
              )),
              (this._addSymbolTab = new i.AddSymbolTab(
                this._chartWidgetCollection,
                this,
              ));
          }
          return (
            a(t, [
              {
                key: 'show',
                value: function () {
                  var t,
                    e = this,
                    o = [];
                  return (
                    o.push({
                      name: $.t('Compare'),
                      page: this._compareTab.$tab.addClass(
                        'tv-compare-dialog__tab-page',
                      ),
                    }),
                    o.push({
                      name: $.t('Add Symbol', {
                        context: 'compare_or_add_symbol_dialog',
                      }),
                      page: this._addSymbolTab.$tab.addClass(
                        'tv-compare-dialog__tab-page',
                      ),
                    }),
                    (t = (0, c.createTabbedDialog)({
                      tabs: o,
                      width: 400,
                      tabStateSaveKey: 'CompareAddDialog.tab',
                      destroyOnClose: !0,
                      withScroll: !1,
                      addClass: 'tv-compare-dialog',
                      tabsScrollBoxAddClass: 'tv-compare-dialog__scroll-box',
                      tabAddClass: 'tv-compare-dialog__tab',
                      isClickOutFn: function (t) {
                        if (
                          e._compareTab.isClickOnTab(t) ||
                          e._addSymbolTab.isClickOnTab(t)
                        )
                          return !1;
                      },
                    })),
                    l && l.close(),
                    (this._dialog = t.dialog),
                    this._dialog.open(),
                    (l = this._dialog),
                    this._dialog
                  );
                },
              },
              {
                key: 'getZIndex',
                value: function () {
                  return this._dialog.zIndex;
                },
              },
            ]),
            t
          );
        })());
    },
  },
]);
