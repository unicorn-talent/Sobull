(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-property-pages-with-definitions'],
  {
    WUYT: function (t, e, i) {
      'use strict';
      function s(t, e) {
        var i = t.id;
        return (
          'first_visible_bar_time' !== i &&
          'last_visible_bar_time' !== i &&
          'time' !== t.type &&
          !t.isHidden &&
          !(e && !t.confirm) &&
          void 0 === t.groupId
        );
      }
      function n(t) {
        return t.name || Object(d.a)(t.id.toLowerCase());
      }
      var o,
        r,
        u,
        l,
        c,
        p,
        a,
        d,
        y,
        h,
        b,
        _,
        f,
        S,
        g,
        m,
        I,
        j,
        v,
        O,
        w,
        P,
        C,
        M,
        D,
        k,
        B,
        T;
      i.r(e),
        (o = i('mrSG')),
        i('YFKU'),
        i('HbRj'),
        (r = i('Eyy1')),
        (u = i('Kxc7')),
        (l = i('HSjo')),
        (c = i('1yQO')),
        (p = i('hY0g')),
        (a = i.n(p)),
        (d = i('LIFs')),
        (y = i('zqjM')),
        (h = i('0YCj')),
        (b = i.n(h)),
        (_ = i('pPtI')),
        (f = window.t('Style')),
        (S = window.t('Inputs')),
        (g = [
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
        ].map(function (t) {
          return {
            value: t,
            title: Object(_.getTranslatedResolutionModel)(t).hint,
          };
        })),
        (m = (function () {
          function t(t, e) {
            var i,
              s,
              n,
              o = this;
            for (
              this._inputSourceItems = null,
                this._propertyPages = [],
                this._sourceInput = null,
                this._source = e,
                this._undoModel = t,
                i = 0,
                s = this._sortInputs(this._source.metaInfo().inputs);
              i < s.length;
              i++
            )
              'source' === (n = s[i]).type && (this._sourceInput = n);
            this._createPropertyRages(),
              null !== this._inputSourceItems &&
                this._undoModel
                  .model()
                  .dataSourceCollectionChanged()
                  .subscribe(this, function () {
                    null !== o._inputSourceItems &&
                      o._inputSourceItems.setValue(o._getInputSourceItems());
                  });
          }
          return (
            (t.prototype.destroy = function () {
              null !== this._inputSourceItems &&
                this._undoModel
                  .model()
                  .dataSourceCollectionChanged()
                  .unsubscribeAll(this),
                this._propertyPages.forEach(function (t) {
                  Object(l.t)(t.definitions.value());
                });
            }),
            (t.prototype.propertyPages = function () {
              return Promise.resolve(this._propertyPages);
            }),
            (t.prototype._createPropertyRages = function () {
              var t, e;
              (this._propertyPages = []),
                null !== (t = this._createInputsPropertyPage()) &&
                  this._propertyPages.push(t),
                null !== (e = this._createStylePropertyPage()) &&
                  this._propertyPages.push(e);
            }),
            (t.prototype._createStylePropertyPage = function () {
              var t = this._stylePropertyDefinitions();
              return null !== t ? Object(c.a)(t, 'style', f) : null;
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              return null;
            }),
            (t.prototype._createInputsPropertyPage = function () {
              var t = this._inputsPropertyDefinitions();
              return null !== t ? Object(c.a)(t, 'inputs', S) : null;
            }),
            (t.prototype._inputsPropertyDefinitions = function () {
              var t = this._sortInputs(this._source.metaInfo().inputs),
                e = this._source.properties().childs().inputs.childs();
              return (
                null !== this._sourceInput &&
                  (this._inputSourceItems = new a.a(
                    this._getInputSourceItems(),
                  )),
                (function (t, e, i, o, u) {
                  var c,
                    p,
                    d,
                    y,
                    h,
                    b,
                    _,
                    f,
                    S,
                    g,
                    m,
                    I,
                    j,
                    v,
                    O,
                    w = [];
                  for (c = 0, p = e; c < p.length; c++)
                    if (s((d = p[c]), o)) {
                      if (
                        ((y = n(d)),
                        (h = window.t(y, { context: 'input' })),
                        (b = null),
                        'resolution' === d.type)
                      )
                        b = Object(l.j)(
                          { option: Object(l.b)(t, i[d.id], 'Change ' + y) },
                          {
                            id: 'StudyInput' + y,
                            title: h,
                            options: new a.a(u.resolutionItems),
                          },
                        );
                      else if ('source' === d.type)
                        (_ = Object(r.ensureNotNull)(u.sourcesItems)),
                          (b = Object(l.j)(
                            { option: Object(l.b)(t, i[d.id], 'Change ' + y) },
                            { id: 'StudyInput' + y, title: h, options: _ },
                          ));
                      else if ('options' in d && void 0 !== d.options) {
                        for (f = [], S = 0, g = d.options; S < g.length; S++)
                          (m = g[S]),
                            (I = (d.optionsTitles && d.optionsTitles[m]) || m),
                            (j = window.t(I)),
                            f.push({ value: m, title: j });
                        b = Object(l.j)(
                          {
                            option: Object(l.b)(t, i[d.id], 'Change ' + y),
                          },
                          {
                            id: 'StudyInput' + y,
                            title: h,
                            options: new a.a(f),
                          },
                        );
                      } else
                        'symbol' === d.type
                          ? ((v = i[d.id]),
                            (b = Object(l.o)(
                              {
                                symbol: Object(l.y)(
                                  t,
                                  v,
                                  u.getSymbolInfoBySymbol,
                                  u.onSymbolsInfosChanged,
                                  'Change ' + h,
                                ),
                              },
                              { id: 'StudyInput' + y, title: h },
                            )))
                          : 'session' === d.type
                          ? (b = Object(l.n)(
                              {
                                session: Object(l.b)(t, i[d.id], 'Change ' + y),
                              },
                              { id: 'StudyInput' + y, title: h },
                            ))
                          : 'bool' === d.type
                          ? (b = Object(l.c)(
                              {
                                checked: Object(l.b)(t, i[d.id], 'Change ' + h),
                              },
                              { id: 'StudyInput' + y, title: h },
                            ))
                          : 'integer' === d.type || 'float' === d.type
                          ? ((O = {
                              id: 'StudyInput' + y,
                              title: h,
                              type: 'float' === d.type ? 1 : 0,
                              defval: d.defval,
                            }),
                            d.min && (O.min = new a.a(d.min)),
                            d.max && (O.max = new a.a(d.max)),
                            void 0 !== d.step &&
                              isFinite(d.step) &&
                              d.step > 0 &&
                              (O.step = new a.a(d.step)),
                            (b = Object(l.i)(
                              { value: Object(l.b)(t, i[d.id], 'Change ' + h) },
                              O,
                            )))
                          : (b = Object(l.p)(
                              { text: Object(l.b)(t, i[d.id], 'Change ' + h) },
                              {
                                id: 'StudyInput' + y,
                                title: h,
                                isEditable: !0,
                                isMultiLine: !1,
                              },
                            ));
                      w.push(b);
                    }
                  return w;
                })(this._undoModel, t, e, !1, {
                  resolutionItems: g,
                  getSymbolInfoBySymbol: this._getSymbolInfoBySymbol.bind(this),
                  onSymbolsInfosChanged: this._source.symbolsResolved(),
                  sourcesItems: this._inputSourceItems,
                })
              );
            }),
            (t.prototype._sortInputs = function (t) {
              return t;
            }),
            (t.prototype._getInputSourceItems = function () {
              var t,
                e,
                i,
                s,
                n,
                l,
                c,
                p = y.d.slice(),
                a = Object(r.ensureNotNull)(this._sourceInput);
              if (this._source && this._source.isChildStudy())
                for (
                  e = (t = this._source.parentSource()).title(),
                    i = b.a.getChildSourceInputTitles(a, t.metaInfo(), e),
                    s = 0,
                    n = Object.keys(i);
                  s < n.length;
                  s++
                )
                  (l = n[s]), p.push({ value: l, title: i[l] });
              return (
                u.enabled('study_on_study') &&
                  this._source &&
                  (this._source.isChildStudy() ||
                    b.a.canBeChild(this._source.metaInfo())) &&
                  ((c = new Set(
                    Object(o.__spreadArrays)(
                      [this._source],
                      this._source.getAllChildren(),
                    ),
                  )),
                  this._undoModel
                    .model()
                    .allStudies()
                    .filter(function (t) {
                      return t.canHaveChildren() && !c.has(t);
                    })
                    .forEach(function (t) {
                      var e,
                        i,
                        s,
                        n,
                        u = t.title(!0, void 0, !0),
                        l = t.sourceId() || '#' + t.id(),
                        c = t.metaInfo(),
                        a = c.styles,
                        d = c.plots || [];
                      if (1 === d.length) p.push({ value: l, title: u });
                      else if (d.length > 1)
                        for (
                          e = d.reduce(function (t, e, i) {
                            var s, n;
                            if (!b.a.canPlotBeSourceOfChildStudy(e.type))
                              return t;
                            try {
                              n = Object(r.ensureDefined)(
                                Object(r.ensureDefined)(a)[e.id],
                              ).title;
                            } catch (t) {
                              n = e.id;
                            }
                            return Object(o.__assign)(
                              Object(o.__assign)({}, t),
                              (((s = {})[l + '$' + i] = u + ': ' + n), s),
                            );
                          }, {}),
                            i = 0,
                            s = Object.keys(e);
                          i < s.length;
                          i++
                        )
                          (n = s[i]), p.push({ value: n, title: e[n] });
                    })),
                p
              );
            }),
            (t.prototype._getSymbolInfoBySymbol = function (t) {
              return this._source.resolvedSymbolInfoBySymbol(t.value());
            }),
            t
          );
        })()),
        (I = i('Equz')),
        i.d(e, 'StudyOverlayDefinitionsViewModel', function () {
          return T;
        }),
        (j = window.t('Bars')),
        (v = window.t('Candles')),
        (O = window.t('Hollow Candles')),
        (w = window.t('Line')),
        (P = window.t('Area')),
        (C = window.t('Baseline')),
        (M = [
          { title: j, value: 0 },
          { title: v, value: 1 },
          { title: O, value: 9 },
          { title: w, value: 2 },
          { title: P, value: 3 },
          { title: C, value: 10 },
        ]),
        (D = window.t('Style')),
        (k = window.t('Price Line')),
        (B = window.t('Override Min Tick')),
        (T = (function (t) {
          function e(e, i) {
            var s = t.call(this, e, i) || this;
            return (
              s._source
                .properties()
                .childs()
                .style.subscribe(s, function (t) {
                  s._seriesStylesGroup.definitions.setValue(
                    s._getSeriesStylesDefinitions(),
                  );
                }),
              s
            );
          }
          return (
            Object(o.__extends)(e, t),
            (e.prototype.destroy = function () {
              this._source.properties().childs().style.unsubscribeAll(this),
                t.prototype.destroy.call(this);
            }),
            (e.prototype._stylePropertyDefinitions = function () {
              var t = this._source.properties().childs(),
                e = Object(l.j)(
                  {
                    option: Object(l.b)(
                      this._undoModel,
                      t.style,
                      'Change study overlay style',
                    ),
                  },
                  { id: 'StudyOverlayStyle', title: D, options: new a.a(M) },
                ),
                i = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      t.showPriceLine,
                      'Change Price Price Line',
                    ),
                  },
                  { id: 'StudyOverlayPriceLine', title: k },
                ),
                s = Object(l.j)(
                  {
                    option: Object(l.b)(
                      this._undoModel,
                      t.minTick,
                      'Change study overlay style',
                    ),
                  },
                  {
                    id: 'StudyOverlayMinTick',
                    title: B,
                    options: new a.a(Object(y.c)()),
                  },
                ),
                n = Object(d.c)(this._source.title());
              return (
                (this._seriesStylesGroup = Object(l.k)(
                  this._getSeriesStylesDefinitions(),
                  'StudyOverlay' + n,
                )),
                [e, this._seriesStylesGroup, i, s]
              );
            }),
            (e.prototype._getSeriesStylesDefinitions = function () {
              var t = this._source.properties().childs();
              return Object(I.a)(
                this._undoModel,
                t,
                t.style.value(),
                {
                  seriesPriceSources: y.d,
                  lineStyleTypes: y.b,
                  isJapaneseChartsAvailable: !1,
                },
                'mainSeries',
              );
            }),
            e
          );
        })(m));
    },
  },
]);
