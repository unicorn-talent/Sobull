(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-property-pages-with-definitions'],
  {
    '17v9': function (e, t, i) {
      'use strict';
      var n,
        o,
        l,
        r,
        s,
        c,
        d,
        a,
        u,
        h,
        b,
        p,
        w,
        f,
        g,
        _,
        j,
        O,
        C,
        y,
        L,
        v,
        M,
        k,
        S;
      i.r(t),
        i.d(t, 'FibDrawingsWith24LevelsDefinitionsViewModel', function () {
          return S;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('SMr9')),
        (c = i('hY0g')),
        (d = i.n(c)),
        (a = i('LIFs')),
        (u = window.t('Trend Line')),
        (h = window.t('Levels Line')),
        (b = window.t('Extend Right')),
        (p = window.t('Extend Left')),
        (w = window.t('Extend Lines')),
        (f = window.t('Reverse')),
        (g = window.t('Prices')),
        (_ = window.t('Levels')),
        (j = window.t('Labels')),
        (O = window.t('Use one color')),
        (C = window.t('Background')),
        (y = window.t('Fib levels based on log scale')),
        (L = window.t('Values')),
        (v = window.t('Percents')),
        (M = [
          { value: !1, title: L },
          { value: !0, title: v },
        ]),
        (k = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'top', title: window.t('Bottom') },
        ]),
        (S = (function (e) {
          function t(t, i) {
            var n,
              o = e.call(this, t, i) || this;
            return (
              (o._disabledBasedOnLog = null),
              'fibLevelsBasedOnLogScale' in o._lineTool.properties().childs() &&
                null !== (n = o._lineTool.priceScale()) &&
                ((o._disabledBasedOnLog = new d.a(Boolean(!n.mode().log))),
                o._createPropertyRages(),
                n.modeChanged().subscribe(o, function (e, t) {
                  null !== o._disabledBasedOnLog &&
                    o._disabledBasedOnLog.setValue(Boolean(!t.log));
                })),
              o
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
              var t = this._lineTool.priceScale();
              null !== t && t.modeChanged().unsubscribeAll(this);
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                c,
                L,
                v,
                S,
                T,
                m,
                x,
                D,
                V,
                P,
                B,
                R,
                A,
                F,
                W,
                G = [],
                H = this._lineTool.properties(),
                E = H.childs(),
                I = this._lineTool.name(),
                z = Object(a.c)(I);
              'trendline' in E &&
                ((e = E.trendline.childs()),
                (t = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: e.visible,
                    lineColor: e.color,
                    lineStyle: e.linestyle,
                    lineWidth: e.linewidth,
                  },
                  I,
                  'TrendLine',
                  { line: u },
                )),
                G.push(t)),
                (n = {
                  lineStyle: (i = E.levelsStyle.childs()).linestyle,
                  lineWidth: i.linewidth,
                }),
                (r = { line: h }),
                'extendLines' in E &&
                  ((n.extendRight = E.extendLines), (r.extendRightTitle = w)),
                'extendRight' in E &&
                  ((n.extendRight = E.extendRight), (r.extendRightTitle = b)),
                'extendLeft' in E &&
                  ((n.extendLeft = E.extendLeft), (r.extendLeftTitle = p)),
                (c = Object(o.a)(this._undoModel, n, I, 'LevelsStyleLine', r)),
                G.push(c),
                (L = []),
                (v = this._lineTool.levelsCount());
              for (S = 1; S <= v; S++)
                (T = E['level' + S].childs()),
                  (m = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        T.visible,
                        'Change ' + I + ' Level ' + S + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        T.color,
                        null,
                        'Change ' + I + ' Level ' + S + ' Line Color',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        T.coeff,
                        'Change ' + I + ' Level ' + S + ' Coeff',
                      ),
                    },
                    { id: z + 'LineLevel' + S },
                  )),
                  L.push(m);
              return (
                (x = Object(l.l)(L, z + 'LeveledLinesGroup')),
                G.push(Object(l.k)([x], z + 'Group')),
                (D = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      H.collectibleColors,
                      null,
                      'Change ' + I + ' All Lines Color',
                    ),
                  },
                  { id: z + 'AllLineColor', title: O },
                )),
                G.push(D),
                (V = Object(l.q)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      E.fillBackground,
                      'Change ' + I + ' Background Visibility',
                    ),
                    transparency: Object(l.b)(
                      this._undoModel,
                      E.transparency,
                      'Change ' + I + ' Background Transparency',
                    ),
                  },
                  { id: z + 'Background', title: C },
                )),
                G.push(V),
                'reverse' in (P = E) &&
                  ((B = Object(l.c)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        P.reverse,
                        'Change ' + I + ' Reverse',
                      ),
                    },
                    { id: z + 'Reverse', title: f },
                  )),
                  G.push(B)),
                (R = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      E.showPrices,
                      'Change ' + I + ' Prices Visibility',
                    ),
                  },
                  { id: z + 'Prices', title: g },
                )),
                G.push(R),
                (A = Object(l.j)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      E.showCoeffs,
                      'Change ' + I + ' Style',
                    ),
                    option: Object(l.b)(
                      this._undoModel,
                      E.coeffsAsPercents,
                      'Change ' + I + ' Style',
                    ),
                  },
                  { id: I + 'PitchStyle', title: _, options: new d.a(M) },
                )),
                G.push(A),
                (F = Object(l.s)(
                  {
                    option1: Object(l.b)(
                      this._undoModel,
                      E.horzLabelsAlign,
                      'Change ' + I + ' Labels Alignment',
                    ),
                    option2: Object(l.b)(
                      this._undoModel,
                      E.vertLabelsAlign,
                      'Change ' + I + ' Labels Alignment',
                    ),
                  },
                  {
                    id: z + 'Alignment',
                    title: j,
                    optionsItems1: new d.a(s.availableAlignmentHorizontalItems),
                    optionsItems2: new d.a(k),
                  },
                )),
                G.push(F),
                'fibLevelsBasedOnLogScale' in E &&
                  null !== this._disabledBasedOnLog &&
                  ((W = Object(l.c)(
                    {
                      disabled: Object(l.a)(
                        this._undoModel,
                        this._disabledBasedOnLog,
                        'Change ' +
                          I +
                          ' Fib levels based on log scale disabled',
                      ),
                      checked: Object(l.b)(
                        this._undoModel,
                        E.fibLevelsBasedOnLogScale,
                        'Change ' + I + ' Fib levels based on log scale',
                      ),
                    },
                    { id: z + 'BasedOnLog', title: y },
                  )),
                  G.push(W)),
                G
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    '1yQO': function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        void 0 === n && (n = null);
        var o = { id: t, title: i, definitions: new l.a(e) };
        return null !== n && (o.icon = n), o;
      }
      var o, l;
      i.d(t, 'a', function () {
        return n;
      }),
        (o = i('hY0g')),
        (l = i.n(o));
    },
    '2PB4': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f;
      i.r(t),
        i.d(t, 'FibSpeedResistanceFanDefinitionsViewModel', function () {
          return f;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('LIFs')),
        (s = window.t('Use one color')),
        (c = window.t('Background')),
        (d = window.t('Price Levels')),
        (a = window.t('Time Levels')),
        (u = window.t('Left Labels')),
        (h = window.t('Right Labels')),
        (b = window.t('Top Labels')),
        (p = window.t('Bottom Labels')),
        (w = window.t('Grid')),
        (f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                l,
                f,
                g,
                _,
                j,
                O,
                C,
                y,
                L,
                v,
                M,
                k,
                S,
                T = [],
                m = this._lineTool.properties(),
                x = m.childs(),
                D = this._lineTool.name(),
                V = Object(r.c)(D),
                P = [],
                B = this._lineTool.hLevelsCount();
              for (e = 1; e <= B; e++)
                (t = x['hlevel' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + D + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + D + ' Level ' + e + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        t.coeff,
                        'Change ' + D + ' Level ' + e + ' Coeff',
                      ),
                    },
                    { id: V + 'HLineLevel' + e },
                  )),
                  P.push(i);
              for (
                n = Object(o.l)(P, V + 'HLeveledLinesGroup'),
                  l = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        x.showLeftLabels,
                        'Change ' + D + ' Left Labels Visibility',
                      ),
                    },
                    { id: V + 'LeftLabels', title: u },
                  ),
                  f = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        x.showRightLabels,
                        'Change ' + D + ' Right Labels Visibility',
                      ),
                    },
                    { id: V + 'RightLabels', title: h },
                  ),
                  g = Object(o.k)([n, l, f], V + 'HLevelGroup', d),
                  T.push(g),
                  _ = [],
                  j = this._lineTool.vLevelsCount(),
                  e = 1;
                e <= j;
                e++
              )
                (t = x['vlevel' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + D + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + D + ' Level ' + e + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        t.coeff,
                        'Change ' + D + ' Level ' + e + ' Coeff',
                      ),
                    },
                    { id: V + 'VLineLevel' + e },
                  )),
                  _.push(i);
              return (
                (O = Object(o.l)(_, V + 'VLeveledLinesGroup')),
                (C = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      x.showTopLabels,
                      'Change ' + D + ' Top Labels Visibility',
                    ),
                  },
                  { id: V + 'TopLabels', title: b },
                )),
                (y = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      x.showBottomLabels,
                      'Change ' + D + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: V + 'BottomLabels', title: p },
                )),
                (L = Object(o.k)([O, C, y], V + 'VLevelGroup', a)),
                T.push(L),
                (v = Object(o.e)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      m.collectibleColors,
                      null,
                      'Change ' + D + ' All Lines Color',
                    ),
                  },
                  { id: V + 'AllLineColor', title: s },
                )),
                T.push(v),
                (M = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      x.fillBackground,
                      'Change ' + D + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      x.transparency,
                      'Change ' + D + ' Background Transparency',
                    ),
                  },
                  { id: V + 'Background', title: c },
                )),
                T.push(M),
                (k = x.grid.childs()),
                (S = Object(o.h)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      k.visible,
                      'Change ' + D + ' Grid Visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      k.color,
                      null,
                      'Change ' + D + ' Grid Line Color',
                    ),
                    width: Object(o.b)(
                      this._undoModel,
                      k.linewidth,
                      'Change ' + D + ' Grid Line Width',
                    ),
                    style: Object(o.b)(
                      this._undoModel,
                      k.linestyle,
                      'Change ' + D + ' Grid Line Style',
                    ),
                  },
                  { id: V + 'GridLine', title: w },
                )),
                T.push(S),
                T
              );
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    '2liL': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f, g;
      i.r(t),
        i.d(t, 'GannSquareDefinitionsViewModel', function () {
          return g;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('LIFs')),
        (s = window.t('Use one color')),
        (c = window.t('Background')),
        (d = window.t('Price Levels')),
        (a = window.t('Time Levels')),
        (u = window.t('Left Labels')),
        (h = window.t('Right Labels')),
        (b = window.t('Top Labels')),
        (p = window.t('Bottom Labels')),
        (w = window.t('Angles')),
        (f = window.t('Reverse')),
        (g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                l,
                g,
                _,
                j,
                O,
                C,
                y,
                L,
                v,
                M,
                k,
                S,
                T,
                m,
                x,
                D = [],
                V = this._lineTool.properties(),
                P = V.childs(),
                B = this._lineTool.name(),
                R = Object(r.c)(B),
                A = [],
                F = this._lineTool.hLevelsCount();
              for (e = 1; e <= F; e++)
                (t = P['hlevel' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + B + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + B + ' Level ' + e + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        t.coeff,
                        'Change ' + B + ' Level ' + e + ' Coeff',
                      ),
                    },
                    { id: R + 'HLineLevel' + e },
                  )),
                  A.push(i);
              for (
                n = Object(o.l)(A, R + 'HLeveledLinesGroup'),
                  l = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        P.showLeftLabels,
                        'Change ' + B + ' Left Labels Visibility',
                      ),
                    },
                    { id: R + 'LeftLabels', title: u },
                  ),
                  g = Object(o.c)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        P.showRightLabels,
                        'Change ' + B + ' Right Labels Visibility',
                      ),
                    },
                    { id: R + 'RightLabels', title: h },
                  ),
                  _ = Object(o.q)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        P.fillHorzBackground,
                        'Change ' + B + ' Background Visibility',
                      ),
                      transparency: Object(o.b)(
                        this._undoModel,
                        P.horzTransparency,
                        'Change ' + B + ' Background Transparency',
                      ),
                    },
                    { id: R + 'BackgroundH', title: c },
                  ),
                  j = Object(o.k)([n, l, g, _], R + 'HLevelGroup', d),
                  D.push(j),
                  O = [],
                  C = this._lineTool.vLevelsCount(),
                  e = 1;
                e <= C;
                e++
              )
                (t = P['vlevel' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + B + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + B + ' Level ' + e + ' Line Color',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        t.coeff,
                        'Change ' + B + ' Level ' + e + ' Coeff',
                      ),
                    },
                    { id: R + 'VLineLevel' + e },
                  )),
                  O.push(i);
              return (
                (y = Object(o.l)(O, R + 'VLeveledLinesGroup')),
                (L = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      P.showTopLabels,
                      'Change ' + B + ' Top Labels Visibility',
                    ),
                  },
                  { id: R + 'TopLabels', title: b },
                )),
                (v = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      P.showBottomLabels,
                      'Change ' + B + ' Bottom Labels Visibility',
                    ),
                  },
                  { id: R + 'BottomLabels', title: p },
                )),
                (M = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      P.fillVertBackground,
                      'Change ' + B + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      P.vertTransparency,
                      'Change ' + B + ' Background Transparency',
                    ),
                  },
                  { id: R + 'BackgroundV', title: c },
                )),
                (k = Object(o.k)([y, L, v, M], R + 'VLevelGroup', a)),
                D.push(k),
                (S = Object(o.e)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      V.collectibleColors,
                      null,
                      'Change ' + B + ' All Lines Color',
                    ),
                  },
                  { id: R + 'AllLineColor', title: s },
                )),
                D.push(S),
                (T = P.fans.childs()),
                (m = Object(o.e)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      T.visible,
                      'Change ' + B + ' Fans Visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      T.color,
                      null,
                      'Change ' + B + ' Fans Line Color',
                    ),
                  },
                  { id: R + 'FansLines', title: w },
                )),
                D.push(m),
                (x = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      P.reverse,
                      'Change ' + B + ' Reverse',
                    ),
                  },
                  { id: R + 'Reverse', title: f },
                )),
                D.push(x),
                D
              );
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    '5sLb': function (e, t, i) {
      'use strict';
      var n, o, l, r, s;
      i.r(t),
        i.d(t, 'ArrowMarkDefinitionsViewModel', function () {
          return s;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = window.t('Text')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = Object(o.a)(
                  this._undoModel,
                  { textColor: e.color, text: e.text },
                  this._lineTool.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: r },
                  },
                );
              return [t];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    '6U6r': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b;
      i.r(t),
        i.d(t, 'FibCirclesDefinitionsViewModel', function () {
          return b;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('LIFs')),
        (c = window.t('Trend Line')),
        (d = window.t('Use one color')),
        (a = window.t('Background')),
        (u = window.t('Levels')),
        (h = window.t('Coeffs As Percents')),
        (b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                b,
                p,
                w,
                f = [],
                g = this._lineTool.properties(),
                _ = g.childs(),
                j = this._lineTool.name(),
                O = Object(s.c)(j),
                C = _.trendline.childs(),
                y = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: C.visible,
                    lineColor: C.color,
                    lineStyle: C.linestyle,
                    lineWidth: C.linewidth,
                  },
                  j,
                  'TrendLine',
                  { line: c },
                );
              for (
                f.push(y), e = this._lineTool.levelsCount(), t = 1;
                t <= e;
                t++
              )
                (i = _['level' + t].childs()),
                  (n = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        i.visible,
                        'Change ' + j + ' Level ' + t + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        i.color,
                        null,
                        'Change ' + j + ' Level ' + t + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        i.linewidth,
                        'Change ' + j + ' Level ' + t + ' Line Width',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        i.coeff,
                        'Change ' + j + ' Level ' + t + ' Coeff',
                      ),
                    },
                    { id: O + 'LineLevel' + t },
                  )),
                  f.push(n);
              return (
                (r = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      g.collectibleColors,
                      null,
                      'Change ' + j + ' All Lines Color',
                    ),
                  },
                  { id: O + 'AllLineColor', title: d },
                )),
                f.push(r),
                (b = Object(l.q)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.fillBackground,
                      'Change ' + j + ' Background Visibility',
                    ),
                    transparency: Object(l.b)(
                      this._undoModel,
                      _.transparency,
                      'Change ' + j + ' Background Transparency',
                    ),
                  },
                  { id: O + 'Background', title: a },
                )),
                f.push(b),
                (p = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.showCoeffs,
                      'Change ' + j + ' Levels Visibility',
                    ),
                  },
                  { id: O + 'Levels', title: u },
                )),
                f.push(p),
                (w = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.coeffsAsPercents,
                      'Change ' + j + ' Coeffs As Percents Visibility',
                    ),
                  },
                  { id: O + 'Percentage', title: h },
                )),
                f.push(w),
                f
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    '6mGk': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h;
      i.r(t),
        i.d(t, 'FibWedgeDefinitionsViewModel', function () {
          return h;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('LIFs')),
        (c = window.t('Trend Line')),
        (d = window.t('Use one color')),
        (a = window.t('Background')),
        (u = window.t('Levels')),
        (h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                h,
                b,
                p = [],
                w = this._lineTool.properties(),
                f = w.childs(),
                g = this._lineTool.name(),
                _ = Object(s.c)(g),
                j = f.trendline.childs(),
                O = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: j.visible,
                    lineColor: j.color,
                    lineWidth: j.linewidth,
                  },
                  g,
                  'TrendLine',
                  { line: c },
                );
              for (
                p.push(O), e = this._lineTool.levelsCount(), t = 1;
                t <= e;
                t++
              )
                (i = f['level' + t].childs()),
                  (n = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        i.visible,
                        'Change ' + g + ' Level ' + t + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        i.color,
                        null,
                        'Change ' + g + ' Level ' + t + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        i.linewidth,
                        'Change ' + g + ' Level ' + t + ' Line Width',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        i.coeff,
                        'Change ' + g + ' Level ' + t + ' Coeff',
                      ),
                    },
                    { id: _ + 'LineLevel' + t },
                  )),
                  p.push(n);
              return (
                (r = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      w.collectibleColors,
                      null,
                      'Change ' + g + ' All Lines Color',
                    ),
                  },
                  { id: _ + 'AllLineColor', title: d },
                )),
                p.push(r),
                (h = Object(l.q)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      f.fillBackground,
                      'Change ' + g + ' Background Visibility',
                    ),
                    transparency: Object(l.b)(
                      this._undoModel,
                      f.transparency,
                      'Change ' + g + ' Background Transparency',
                    ),
                  },
                  { id: _ + 'Background', title: a },
                )),
                p.push(h),
                (b = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      f.showCoeffs,
                      'Change ' + g + ' Levels Visibility',
                    ),
                  },
                  { id: _ + 'Levels', title: u },
                )),
                p.push(b),
                p
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    '74nv': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'NoteDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Label')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.textColor,
                    fontSize: e.fontSize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.backgroundTransparency,
                  },
                  t,
                  { isEditable: !0, isMultiLine: !0 },
                ),
                n = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.markerColor,
                      null,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'LabelColor'), title: c },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    '78yF': function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        var s,
          d,
          O,
          C,
          y,
          L,
          v,
          M,
          k,
          S,
          T = Object(a.c)(i),
          m = [],
          x = Object(l.a)(
            e,
            Object(o.__assign)(Object(o.__assign)({}, t), {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            }),
            T,
            'Line',
          );
        return (
          m.push(x),
          (s = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showMiddlePoint,
                'Change ' + i + ' Show Middle Point',
              ),
            },
            { id: T + 'MiddlePoint', title: (n && n.middlePoint) || h },
          )),
          m.push(s),
          (d = { textColor: t.textcolor }),
          (S = t).hasOwnProperty('fontsize') &&
            S.hasOwnProperty('bold') &&
            S.hasOwnProperty('italic') &&
            ((d.fontSize = t.fontsize),
            (d.bold = t.bold),
            (d.italic = t.italic)),
          (O = Object(r.j)(
            {
              option: Object(r.b)(
                e,
                t.statsPosition,
                'Change ' + i + ' Stats Position',
              ),
            },
            {
              id: T + 'StatsPosition',
              title: (n && n.statsPosition) || b,
              options: new c.a(u),
            },
          )),
          m.push(O),
          (C = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showPriceRange,
                'Change ' + i + ' Show Price Range',
              ),
            },
            { id: T + 'PriceRange', title: (n && n.priceRange) || p },
          )),
          m.push(C),
          (y = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.showBarsRange,
                'Change ' + i + ' Show Bars Range',
              ),
            },
            { id: T + 'BarsRange', title: (n && n.barRange) || w },
          )),
          m.push(y),
          'showDateTimeRange' in t &&
            ((L = Object(r.c)(
              {
                checked: Object(r.b)(
                  e,
                  t.showDateTimeRange,
                  'Change ' + i + ' Show Date/Time Range',
                ),
              },
              { id: T + 'DateTimeRange', title: (n && n.dateTimeRange) || f },
            )),
            m.push(L)),
          'showDistance' in t &&
            ((v = Object(r.c)(
              {
                checked: Object(r.b)(
                  e,
                  t.showDistance,
                  'Change ' + i + ' Show Distance',
                ),
              },
              { id: T + 'Distance', title: (n && n.distance) || g },
            )),
            m.push(v)),
          'showAngle' in t &&
            ((M = Object(r.c)(
              {
                checked: Object(r.b)(
                  e,
                  t.showAngle,
                  'Change ' + i + ' Show Angle',
                ),
              },
              { id: T + 'Angle', title: (n && n.angle) || _ },
            )),
            m.push(M)),
          (k = Object(r.c)(
            {
              checked: Object(r.b)(
                e,
                t.alwaysShowStats,
                'Change ' + i + ' Always Show Stats',
              ),
            },
            { id: T + 'ShowStats', title: (n && n.showStats) || j },
          )),
          m.push(k),
          m
        );
      }
      var o, l, r, s, c, d, a, u, h, b, p, w, f, g, _, j;
      i.d(t, 'a', function () {
        return n;
      }),
        (o = i('mrSG')),
        (l = i('wm7x')),
        (r = i('HSjo')),
        (s = i('hY0g')),
        (c = i.n(s)),
        (d = i('bKFv')),
        (a = i('LIFs')),
        (u = [
          { value: d.StatsPosition.Left, title: window.t('Left') },
          { value: d.StatsPosition.Center, title: window.t('Center') },
          { value: d.StatsPosition.Right, title: window.t('Right') },
        ]),
        (h = window.t('Show Middle Point')),
        (b = window.t('Stats Position')),
        (p = window.t('Show Price Range')),
        (w = window.t('Show Bars Range')),
        (f = window.t('Show Date/Time Range')),
        (g = window.t('Show Distance')),
        (_ = window.t('Show Angle')),
        (j = window.t('Always Show Stats'));
    },
    '8ioM': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f;
      i.r(t),
        i.d(t, 'BarsPatternDefinitionsViewModel', function () {
          return f;
        }),
        (n = i('mrSG')),
        (o = i('Cn8r')),
        (l = i('HSjo')),
        (r = i('hY0g')),
        (s = i.n(r)),
        (c = i('Ye2/')),
        (d = i('Z5lT')),
        (a = i('LIFs')),
        (u = window.t('Color')),
        (h = window.t('Mode')),
        (b = window.t('Mirrored')),
        (p = window.t('Flipped')),
        (w = [
          { value: c.LineToolBarsPatternMode.Bars, title: window.t('HL Bars') },
          {
            value: c.LineToolBarsPatternMode.OpenClose,
            title: window.t('OC Bars'),
          },
          {
            value: c.LineToolBarsPatternMode.Line,
            title: window.t('Line - Close'),
          },
          {
            value: c.LineToolBarsPatternMode.LineOpen,
            title: window.t('Line - Open'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHigh,
            title: window.t('Line - High'),
          },
          {
            value: c.LineToolBarsPatternMode.LineLow,
            title: window.t('Line - Low'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHL2,
            title: window.t('Line - HL/2'),
          },
        ]),
        (f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(a.c)(t),
                n = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: i + 'Color', title: u },
                ),
                o = Object(l.j)(
                  {
                    option: Object(l.b)(
                      this._undoModel,
                      e.mode,
                      'Change ' + t + ' mode',
                      [d.a],
                    ),
                  },
                  { id: i + 'Mode', title: h, options: new s.a(w) },
                ),
                r = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.mirrored,
                      'Change ' + t + ' Mirrored',
                    ),
                  },
                  { id: i + 'Mirrored', title: b },
                ),
                c = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      e.flipped,
                      'Change ' + t + ' Flipped',
                    ),
                  },
                  { id: i + 'Flipped', title: p },
                );
              return [n, o, r, c];
            }),
            t
          );
        })(o.LineDataSourceDefinitionsViewModel));
    },
    '91EF': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a;
      i.r(t),
        i.d(t, 'PolylinesDefinitionsViewModel', function () {
          return a;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Border')),
        (d = window.t('Background')),
        (a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  { lineColor: e.linecolor, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                ),
                n = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    ASG6: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a;
      i.r(t),
        i.d(t, 'GannFanDefinitionsViewModel', function () {
          return a;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('LIFs')),
        (s = window.t('Use one color')),
        (c = window.t('Background')),
        (d = window.t('Labels')),
        (a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                l,
                a,
                u = [],
                h = this._lineTool.properties(),
                b = h.childs(),
                p = this._lineTool.name(),
                w = Object(r.c)(p),
                f = this._lineTool.levelsCount();
              for (e = 1; e <= f; e++)
                (t = b['level' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + p + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + p + ' Level ' + e + ' Line Color',
                      ),
                      width: Object(o.b)(
                        this._undoModel,
                        t.linewidth,
                        'Change ' + p + ' Level ' + e + ' Line Width',
                      ),
                      style: Object(o.b)(
                        this._undoModel,
                        t.linestyle,
                        'Change ' + p + ' Level ' + e + ' Line Style',
                      ),
                    },
                    {
                      id: w + 'LineLevel' + e,
                      title: t.coeff1.value() + '/' + t.coeff2.value(),
                    },
                  )),
                  u.push(i);
              return (
                (n = Object(o.e)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      h.collectibleColors,
                      null,
                      'Change ' + p + ' All Lines Color',
                    ),
                  },
                  { id: w + 'AllLineColor', title: s },
                )),
                u.push(n),
                (l = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      b.fillBackground,
                      'Change ' + p + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      b.transparency,
                      'Change ' + p + ' Background Transparency',
                    ),
                  },
                  { id: w + 'Background', title: c },
                )),
                u.push(l),
                (a = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      b.showLabels,
                      'Change ' + p + ' Labels Visibility',
                    ),
                  },
                  { id: w + 'Labels', title: d },
                )),
                u.push(a),
                u
              );
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    Ax76: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f, g;
      i.r(t),
        i.d(t, 'GeneralDatePriceRangeDefinitionsViewModel', function () {
          return g;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('DSp8')),
        (r = i('Cn8r')),
        (s = i('HSjo')),
        (c = i('LIFs')),
        (d = window.t('Line')),
        (a = window.t('Background')),
        (u = window.t('Extend top')),
        (h = window.t('Extend bottom')),
        (b = window.t('Extend left')),
        (p = window.t('Extend right')),
        (w = window.t('Label')),
        (f = window.t('Label background')),
        (g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                g,
                _ = [],
                j = this._lineTool.properties().childs(),
                O = this._lineTool.name(),
                C = Object(c.c)(O),
                y = Object(o.a)(
                  this._undoModel,
                  { lineColor: j.linecolor, lineWidth: j.linewidth },
                  O,
                  'Line',
                  { line: d },
                );
              return (
                _.push(y),
                (e = Object(s.e)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      j.fillBackground,
                      'Change ' + O + ' background visibility',
                    ),
                    color: Object(s.u)(
                      this._undoModel,
                      j.backgroundColor,
                      j.backgroundTransparency,
                      'Change ' + O + ' background color',
                    ),
                  },
                  { id: C + 'BackgroundColor', title: a },
                )),
                _.push(e),
                j.hasOwnProperty('extendTop') &&
                  ((t = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        j.extendTop,
                        'Change ' + O + ' Extend top',
                      ),
                    },
                    { id: C + 'ExtendTop', title: u },
                  )),
                  (i = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        j.extendBottom,
                        'Change ' + O + ' Extend bottom',
                      ),
                    },
                    { id: C + 'ExtendBottom', title: h },
                  )),
                  _.push(t, i)),
                (function (e) {
                  return e.hasOwnProperty('extendLeft');
                })(j) &&
                  ((n = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        j.extendLeft,
                        'Change ' + O + ' Extend left',
                      ),
                    },
                    { id: C + 'extendLeft', title: b },
                  )),
                  (r = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        this._undoModel,
                        j.extendRight,
                        'Change ' + O + ' Extend bottom',
                      ),
                    },
                    { id: C + 'ExtendBottom', title: p },
                  )),
                  _.push(n, r)),
                (g = Object(l.a)(
                  this._undoModel,
                  {
                    textColor: j.textcolor,
                    fontSize: j.fontsize,
                    backgroundVisible: j.fillLabelBackground,
                    backgroundColor: j.labelBackgroundColor,
                    backgroundTransparency: j.backgroundTransparency,
                  },
                  O,
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: w, backgroundTitle: f },
                  },
                )),
                _.push(g),
                _
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    BABJ: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a;
      i.r(t),
        i.d(t, 'TimeCyclesPatternDefinitionsViewModel', function () {
          return a;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Line')),
        (d = window.t('Background')),
        (a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  },
                  t,
                  'Line',
                  { line: c },
                ),
                n = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    CA9d: function (e, t, i) {
      'use strict';
      function n(e, t, i) {
        return {
          property: Object(s.b)(e, t.price, 'Change ' + b + ' Y coordinate'),
          info: { typeY: 1, stepY: i },
        };
      }
      function o(e, t) {
        return {
          property: Object(s.b)(e, t.bar, 'Change ' + p + ' X coordinate'),
          info: {
            typeX: 0,
            minX: new d.a(u),
            maxX: new d.a(h),
            stepX: new d.a(1),
          },
        };
      }
      function l(e, t, i, l, c, d) {
        var u = o(e, t),
          h = n(e, t, l);
        return Object(s.f)(
          { x: u.property, y: h.property },
          Object(r.__assign)(
            Object(r.__assign)(
              { id: Object(a.c)(d + 'Coordinates' + c), title: c },
              u.info,
            ),
            h.info,
          ),
        );
      }
      var r, s, c, d, a, u, h, b, p;
      i.d(t, 'b', function () {
        return n;
      }),
        i.d(t, 'a', function () {
          return o;
        }),
        i.d(t, 'c', function () {
          return l;
        }),
        (r = i('mrSG')),
        (s = i('HSjo')),
        (c = i('hY0g')),
        (d = i.n(c)),
        (a = i('LIFs')),
        (u = -5e4),
        (h = 15e3),
        (b = window.t('Price')),
        (p = window.t('Bar#'));
    },
    Cn8r: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f, g, _, j, O, C, y, L, v, M;
      i.r(t),
        i('YFKU'),
        i('HbRj'),
        (n = i('Eyy1')),
        (o = i('HSjo')),
        (l = i('1yQO')),
        (r = i('hY0g')),
        (s = i.n(r)),
        (c = i('Kxc7')),
        (d = window.t('Seconds')),
        (a = window.t('Minutes')),
        (u = window.t('Hours')),
        (h = window.t('Days')),
        (b = window.t('Weeks')),
        (p = window.t('Months')),
        window.t('Ranges'),
        (w = [1, 59]),
        (f = [1, 59]),
        (g = [1, 24]),
        (_ = [1, 366]),
        (j = i('CA9d')),
        i.d(t, 'LineDataSourceDefinitionsViewModel', function () {
          return M;
        }),
        (O = window.t('Visibility')),
        (C = window.t('Coordinates')),
        (y = window.t('Style')),
        (L = window.t('Inputs')),
        (v = 1),
        (M = (function () {
          function e(e, t) {
            (this._yCoordinateStepWV = null),
              (this._ownerSource = null),
              (this._propertyPages = []),
              (this._lineTool = t),
              (this._undoModel = e),
              (this._ownerSource = this._lineTool.ownerSource()),
              this._createPropertyRages();
          }
          return (
            (e.prototype.destroy = function () {
              null !== this._yCoordinateStepWV &&
                null !== this._ownerSource &&
                (this._lineTool.ownerSourceChanged().unsubscribeAll(this),
                this._ownerSource.priceStepChanged().unsubscribeAll(this)),
                this._propertyPages.forEach(function (e) {
                  Object(o.t)(e.definitions.value());
                });
            }),
            (e.prototype.propertyPages = function () {
              return Promise.resolve(this._propertyPages);
            }),
            (e.prototype._createPropertyRages = function () {
              var e,
                t,
                i,
                n,
                o = this;
              (this._propertyPages = []),
                null !== (e = this._createInputsPropertyPage()) &&
                  this._propertyPages.push(e),
                null !== (t = this._createStylePropertyPage()) &&
                  this._propertyPages.push(t),
                this._lineTool.hasEditableCoordinates() &&
                  (null !== (i = this._createCoordinatesPropertyPage()) &&
                    this._propertyPages.push(i),
                  null !== this._yCoordinateStepWV &&
                    null !== this._ownerSource &&
                    (this._ownerSource
                      .priceStepChanged()
                      .subscribe(this, function () {
                        return o._updateYCoordinateStep();
                      }),
                    this._lineTool
                      .ownerSourceChanged()
                      .subscribe(this, function () {
                        null !== o._ownerSource &&
                          (o._ownerSource.priceStepChanged().unsubscribeAll(o),
                          (o._ownerSource = o._lineTool.ownerSource()),
                          null !== o._ownerSource &&
                            o._ownerSource
                              .priceStepChanged()
                              .subscribe(o, function () {
                                return o._updateYCoordinateStep();
                              }));
                      }))),
                (n = this._createVisibilitiesPropertyPage()),
                this._propertyPages.push(n);
            }),
            (e.prototype._createVisibilitiesPropertyPage = function () {
              var e,
                t,
                i,
                n,
                r,
                j,
                C,
                y,
                L,
                v = this._lineTool
                  .properties()
                  .childs()
                  .intervalsVisibilities.childs();
              return Object(l.a)(
                ((e = this._undoModel),
                (t = v),
                (L = []),
                c.enabled('seconds_resolution') &&
                  ((i = Object(o.m)(
                    {
                      checked: Object(o.b)(
                        e,
                        t.seconds,
                        'Change Line Tool Visibility On Seconds',
                      ),
                      from: Object(o.b)(
                        e,
                        t.secondsFrom,
                        'Change Line Tool Seconds From',
                      ),
                      to: Object(o.b)(
                        e,
                        t.secondsTo,
                        'Change Line Tool Seconds To',
                      ),
                    },
                    {
                      id: 'IntervalsVisibilitiesSecond',
                      title: d,
                      min: new s.a(w[0]),
                      max: new s.a(w[1]),
                    },
                  )),
                  L.push(i)),
                (n = Object(o.m)(
                  {
                    checked: Object(o.b)(
                      e,
                      t.minutes,
                      'Change Line Tool Visibility On Minutes',
                    ),
                    from: Object(o.b)(
                      e,
                      t.minutesFrom,
                      'Change Line Tool Minutes From',
                    ),
                    to: Object(o.b)(
                      e,
                      t.minutesTo,
                      'Change Line Tool Minutes To',
                    ),
                  },
                  {
                    id: 'IntervalsVisibilitiesMinutes',
                    title: a,
                    min: new s.a(f[0]),
                    max: new s.a(f[1]),
                  },
                )),
                (r = Object(o.m)(
                  {
                    checked: Object(o.b)(
                      e,
                      t.hours,
                      'Change Line Tool Visibility On Hours',
                    ),
                    from: Object(o.b)(
                      e,
                      t.hoursFrom,
                      'Change Line Tool Hours From',
                    ),
                    to: Object(o.b)(e, t.hoursTo, 'Change Line Tool Hours To'),
                  },
                  {
                    id: 'IntervalsVisibilitiesHours',
                    title: u,
                    min: new s.a(g[0]),
                    max: new s.a(g[1]),
                  },
                )),
                (j = Object(o.m)(
                  {
                    checked: Object(o.b)(
                      e,
                      t.days,
                      'Change Line Tool Visibility On Days',
                    ),
                    from: Object(o.b)(
                      e,
                      t.daysFrom,
                      'Change Line Tool Days From',
                    ),
                    to: Object(o.b)(e, t.daysTo, 'Change Line Tool Days To'),
                  },
                  {
                    id: 'IntervalsVisibilitiesDays',
                    title: h,
                    min: new s.a(_[0]),
                    max: new s.a(_[1]),
                  },
                )),
                L.push(n, r, j),
                (C = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      e,
                      t.weeks,
                      'Change Line Tool Visibility On Weeks',
                    ),
                  },
                  { id: 'IntervalsVisibilitiesWeeks', title: b },
                )),
                (y = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      e,
                      t.months,
                      'Change Line Tool Visibility On Months',
                    ),
                  },
                  { id: 'IntervalsVisibilitiesMonths', title: p },
                )),
                L.push(C, y),
                L),
                'visibility',
                O,
              );
            }),
            (e.prototype._createCoordinatesPropertyPage = function () {
              var e = this._coordinatesPropertyDefinitions();
              return null !== e ? Object(l.a)(e, 'coordinates', C) : null;
            }),
            (e.prototype._createYCoordinateStepWV = function () {
              this._yCoordinateStepWV = new s.a(
                (function (e) {
                  if (null !== e) {
                    var t = e.priceStep();
                    if (null !== t) return t;
                  }
                  return v;
                })(this._lineTool.ownerSource()),
              );
            }),
            (e.prototype._coordinatesPropertyDefinitions = function () {
              var e,
                t = this,
                i = this._lineTool.points(),
                o = this._lineTool.properties().childs().points,
                l = [];
              return (
                this._createYCoordinateStepWV(),
                (e = Object(n.ensureNotNull)(this._yCoordinateStepWV)),
                i.forEach(function (i, n) {
                  var r = o[n].childs();
                  r &&
                    l.push(
                      Object(j.c)(
                        t._undoModel,
                        r,
                        i,
                        e,
                        window
                          .t('#{0} (price, bar)', { context: 'linetool point' })
                          .format(n + 1),
                        t._lineTool.name(),
                      ),
                    );
                }),
                l
              );
            }),
            (e.prototype._createStylePropertyPage = function () {
              var e = this._stylePropertyDefinitions();
              return null !== e ? Object(l.a)(e, 'style', y) : null;
            }),
            (e.prototype._stylePropertyDefinitions = function () {
              return null;
            }),
            (e.prototype._createInputsPropertyPage = function () {
              var e = this._inputsPropertyDefinitions();
              return null !== e ? Object(l.a)(e, 'inputs', L) : null;
            }),
            (e.prototype._inputsPropertyDefinitions = function () {
              return null;
            }),
            (e.prototype._updateYCoordinateStep = function () {
              var e = null;
              null !== this._ownerSource && (e = this._ownerSource.priceStep()),
                Object(n.ensureNotNull)(this._yCoordinateStepWV).setValue(
                  e || v,
                );
            }),
            e
          );
        })());
    },
    'D+Nk': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u;
      i.r(t),
        i.d(t, 'PitchBaseDefinitionsViewModel', function () {
          return u;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Median')),
        (d = window.t('Use one color')),
        (a = window.t('Background')),
        (u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                l,
                u,
                h = [],
                b = this._lineTool.properties(),
                p = b.childs(),
                w = this._lineTool.name(),
                f = Object(s.c)(w),
                g = p.median.childs(),
                _ = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: g.color,
                    lineStyle: g.linestyle,
                    lineWidth: g.linewidth,
                  },
                  w,
                  'Median',
                  { line: c },
                );
              for (
                h.push(_), e = this._lineTool.levelsCount(), t = 0;
                t <= e;
                t++
              )
                (i = p['level' + t].childs()),
                  (n = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        i.visible,
                        'Change ' +
                          w +
                          ' Level ' +
                          (t + 1) +
                          ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        i.color,
                        null,
                        'Change ' + w + ' Level ' + (t + 1) + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        i.linewidth,
                        'Change ' + w + ' Level ' + (t + 1) + ' Line Width',
                      ),
                      style: Object(r.b)(
                        this._undoModel,
                        i.linestyle,
                        'Change ' + w + ' Level ' + (t + 1) + ' Line Style',
                      ),
                      level: Object(r.b)(
                        this._undoModel,
                        i.coeff,
                        'Change ' + w + ' Level ' + (t + 1) + ' Line Coeff',
                      ),
                    },
                    { id: f + 'LineLevel' + (t + 1) },
                  )),
                  h.push(n);
              return (
                (l = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      b.collectibleColors,
                      null,
                      'Change ' + w + ' All Lines Color',
                    ),
                  },
                  { id: f + 'AllLineColor', title: d },
                )),
                h.push(l),
                (u = Object(r.q)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      p.fillBackground,
                      'Change ' + w + ' Background Visibility',
                    ),
                    transparency: Object(r.b)(
                      this._undoModel,
                      p.transparency,
                      'Change ' + w + ' Background Transparency',
                    ),
                  },
                  { id: f + 'Background', title: a },
                )),
                h.push(u),
                h
              );
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    DSp8: function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        var d,
          a = Object(l.c)(i),
          u = {},
          h = {
            id: a + 'Text',
            title: (n.customTitles && n.customTitles.text) || '',
          };
        return (
          void 0 !== t.showText &&
            (u.checked = Object(o.b)(
              e,
              t.showText,
              'Change ' + i + ' Text Visibility',
            )),
          void 0 !== t.textColor &&
            (u.color = Object(o.u)(
              e,
              t.textColor,
              t.transparency || null,
              'Change ' + i + ' Text Color',
            )),
          void 0 !== t.fontSize &&
            (u.size = Object(o.b)(
              e,
              t.fontSize,
              'Change ' + i + ' Text Font Size',
            )),
          void 0 !== t.bold &&
            (u.bold = Object(o.b)(
              e,
              t.bold,
              'Change ' + i + ' Text Font Bold',
            )),
          void 0 !== t.italic &&
            (u.italic = Object(o.b)(
              e,
              t.italic,
              'Change ' + i + ' Text Font Italic',
            )),
          void 0 !== t.text &&
            ((u.text = Object(o.b)(e, t.text, 'Change ' + i + ' Text')),
            (h.isEditable = Boolean(n.isEditable)),
            (h.isMultiLine = Boolean(n.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            (u.alignmentVertical = Object(o.b)(
              e,
              t.vertLabelsAlign,
              'Change ' + i + ' Labels Alignment Vertical',
            )),
          void 0 !== t.horzLabelsAlign &&
            (u.alignmentHorizontal = Object(o.b)(
              e,
              t.horzLabelsAlign,
              'Change ' + i + ' Labels Alignment Horizontal',
            )),
          void 0 !== t.backgroundVisible &&
            (u.backgroundVisible = Object(o.b)(
              e,
              t.backgroundVisible,
              'Change ' + i + ' Text Background Visibility',
            )),
          void 0 !== t.backgroundColor &&
            ((d = null),
            void 0 !== t.backgroundTransparency &&
              (d = t.backgroundTransparency),
            (u.backgroundColor = Object(o.u)(
              e,
              t.backgroundColor,
              d,
              'Change ' + i + ' Text Background Color',
            ))),
          (void 0 === t.backgroundVisible && void 0 === t.backgroundColor) ||
            (h.backgroundTitle =
              (n.customTitles && n.customTitles.backgroundTitle) || r),
          void 0 !== t.borderVisible &&
            (u.borderVisible = Object(o.b)(
              e,
              t.borderVisible,
              'Change ' + i + ' Text Border Visibility',
            )),
          void 0 !== t.borderWidth &&
            (u.borderWidth = Object(o.b)(
              e,
              t.borderWidth,
              'Change ' + i + ' Text Border Width',
            )),
          void 0 !== t.borderColor &&
            (u.borderColor = Object(o.u)(
              e,
              t.borderColor,
              null,
              'Change ' + i + ' Text Border Color',
            )),
          (void 0 === t.borderVisible &&
            void 0 === t.borderColor &&
            void 0 === t.borderWidth) ||
            (h.borderTitle =
              (n.customTitles && n.customTitles.borderTitle) || s),
          void 0 !== t.wrap &&
            ((u.wrap = Object(o.b)(e, t.wrap, 'Change ' + i + ' Text Wrap')),
            (h.wrapTitle = (n.customTitles && n.customTitles.wrapTitle) || c)),
          Object(o.p)(u, h)
        );
      }
      var o, l, r, s, c;
      i.d(t, 'a', function () {
        return n;
      }),
        (o = i('HSjo')),
        (l = i('LIFs')),
        (r = window.t('Background')),
        (s = window.t('Border')),
        (c = window.t('Text Wrap'));
    },
    EFc4: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h;
      i.r(t),
        i.d(t, 'Points5PatternDefinitionsViewModel', function () {
          return h;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('DSp8')),
        (r = i('Cn8r')),
        (s = i('HSjo')),
        (c = i('LIFs')),
        (d = window.t('Label')),
        (a = window.t('Border')),
        (u = window.t('Background')),
        (h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(l.a)(
                  this._undoModel,
                  {
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._lineTool.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: d },
                  },
                ),
                n = Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: a },
                ),
                r = Object(s.e)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(s.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(c.c)(t + 'BackgroundColor'), title: u },
                );
              return [i, n, r];
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    FkpW: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c;
      i.r(t),
        i.d(t, 'VerticalLineDefinitionsViewModel', function () {
          return c;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('xrdl')),
        (r = i('CA9d')),
        (s = i('LIFs')),
        (c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e = this._lineTool.properties().childs().points[0].childs(),
                t = Object(r.a)(this._undoModel, e);
              return [
                Object(o.f)(
                  { x: t.property },
                  Object(n.__assign)(
                    {
                      id: Object(s.c)(this._lineTool.name() + 'Point1'),
                      title: window.t('#1 (bar)', {
                        context: 'linetool point',
                      }),
                    },
                    t.info,
                  ),
                ),
              ];
            }),
            t
          );
        })(l.CrossLineDefinitionsViewModel));
    },
    HCdA: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u;
      i.r(t),
        i.d(t, 'PitchForkDefinitionsViewModel', function () {
          return u;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('D+Nk')),
        (r = i('rCHB')),
        (s = i('hY0g')),
        (c = i.n(s)),
        (d = window.t('Style')),
        (a = [
          {
            value: r.LineToolPitchforkStyle.Original,
            title: window.t('Original'),
          },
          {
            value: r.LineToolPitchforkStyle.Schiff2,
            title: window.t('Schiff'),
          },
          {
            value: r.LineToolPitchforkStyle.Schiff,
            title: window.t('Modified Schiff'),
          },
          { value: r.LineToolPitchforkStyle.Inside, title: window.t('Inside') },
        ]),
        (u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var t = e.prototype._stylePropertyDefinitions.call(this),
                i = this._lineTool.properties().childs(),
                n = this._lineTool.name(),
                l = Object(o.j)(
                  {
                    option: Object(o.b)(
                      this._undoModel,
                      i.style,
                      'Change ' + n + ' Style',
                    ),
                  },
                  { id: n + 'PitchStyle', title: d, options: new c.a(a) },
                );
              return t.push(l), t;
            }),
            t
          );
        })(l.PitchBaseDefinitionsViewModel));
    },
    LIFs: function (e, t, i) {
      'use strict';
      function n(e) {
        return e.replace(r, s);
      }
      function o(e) {
        return void 0 === e && (e = ''), e.replace(/\s+/g, '');
      }
      function l(e) {
        return (
          void 0 === e && (e = ''),
          e.replace(/\b\w/g, function (e) {
            return e.toUpperCase();
          })
        );
      }
      var r, s;
      i.d(t, 'b', function () {
        return n;
      }),
        i.d(t, 'c', function () {
          return o;
        }),
        i.d(t, 'a', function () {
          return l;
        }),
        (r = /[<"'&>]/g),
        (s = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        });
    },
    LX4V: function (e, t, i) {
      'use strict';
      var n, o, l, r, s;
      i.r(t),
        i.d(t, 'CyclicAndSineLinesPatternDefinitionsViewModel', function () {
          return s;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = window.t('Lines')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  },
                  this._lineTool.name(),
                  'Line',
                  { line: r },
                );
              return [t];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    LzAw: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a;
      i.r(t),
        i.d(t, 'ProjectionDefinitionsViewModel', function () {
          return a;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Border')),
        (d = window.t('Background')),
        (a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(r.r)(
                  {
                    color1: Object(r.u)(
                      this._undoModel,
                      e.color1,
                      e.transparency,
                      'Change ' + t + ' background color 1',
                    ),
                    color2: Object(r.u)(
                      this._undoModel,
                      e.color2,
                      e.transparency,
                      'Change ' + t + ' background color 2',
                    ),
                  },
                  { id: Object(s.c)(t + 'Background2Color'), title: d },
                ),
                n = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.trendline.childs().color,
                    lineWidth: e.linewidth,
                  },
                  t,
                  'Line',
                  { line: c },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    NEbb: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'HorizontalLineDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('Eyy1')),
        (l = i('HSjo')),
        (r = i('xrdl')),
        (s = i('CA9d')),
        (c = i('LIFs')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e,
                t,
                i = this._lineTool.properties().childs().points[0].childs();
              return (
                this._createYCoordinateStepWV(),
                (e = Object(o.ensureNotNull)(this._yCoordinateStepWV)),
                (t = Object(s.b)(this._undoModel, i, e)),
                [
                  Object(l.f)(
                    { y: t.property },
                    Object(n.__assign)(
                      {
                        id: Object(c.c)(this._lineTool.name() + 'Point'),
                        title: window.t('#1 (price)', {
                          context: 'linetool point',
                        }),
                      },
                      t.info,
                    ),
                  ),
                ]
              );
            }),
            t
          );
        })(r.CrossLineDefinitionsViewModel));
    },
    Pwwq: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w, f, g, _;
      i.r(t),
        i.d(t, 'PredictionDefinitionsViewModel', function () {
          return _;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Source text')),
        (d = window.t('Source background')),
        (a = window.t('Source border')),
        (u = window.t('Target text')),
        (h = window.t('Target background')),
        (b = window.t('Target border')),
        (p = window.t('Success text')),
        (w = window.t('Success background')),
        (f = window.t('Failure text')),
        (g = window.t('Failure background')),
        (_ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(s.c)(t),
                n = Object(o.a)(
                  this._undoModel,
                  { lineColor: e.linecolor, lineWidth: e.linewidth },
                  t,
                  'Line',
                ),
                l = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.sourceTextColor,
                      null,
                      'Change ' + t + ' source text color',
                    ),
                  },
                  { id: i + 'SourceTextColor', title: c },
                ),
                _ = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.sourceBackColor,
                      e.transparency,
                      'Change ' + t + ' source background color',
                    ),
                  },
                  { id: i + 'SourceBackgroundColor', title: d },
                ),
                j = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.sourceStrokeColor,
                      null,
                      'Change ' + t + ' source border color',
                    ),
                  },
                  { id: i + 'SourceBorderColor', title: a },
                ),
                O = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.targetTextColor,
                      null,
                      'Change ' + t + ' target text color',
                    ),
                  },
                  { id: i + 'TargetTextColor', title: u },
                ),
                C = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.targetBackColor,
                      null,
                      'Change ' + t + ' target background color',
                    ),
                  },
                  { id: i + 'TargetBackgroundColor', title: h },
                ),
                y = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.targetStrokeColor,
                      null,
                      'Change ' + t + ' target border color',
                    ),
                  },
                  { id: i + 'TargetBorderColor', title: b },
                ),
                L = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.successTextColor,
                      null,
                      'Change ' + t + ' success text color',
                    ),
                  },
                  { id: i + 'SuccessTextColor', title: p },
                ),
                v = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.successBackground,
                      null,
                      'Change ' + t + ' success background color',
                    ),
                  },
                  { id: i + 'SuccessBackgroundColor', title: w },
                ),
                M = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.failureTextColor,
                      null,
                      'Change ' + t + ' failure text color',
                    ),
                  },
                  { id: i + 'FailureTextColor', title: f },
                ),
                k = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.failureBackground,
                      null,
                      'Change ' + t + ' failure background color',
                    ),
                  },
                  { id: i + 'FailureBackgroundColor', title: g },
                );
              return [n, l, _, j, O, C, y, L, v, M, k];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    QWxu: function (e, t, i) {
      'use strict';
      var n, o, l, r;
      i.r(t),
        i.d(t, 'TextDefinitionsViewModel', function () {
          return r;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundVisible: e.fillBackground,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.backgroundTransparency,
                    borderVisible: e.drawBorder,
                    borderColor: e.borderColor,
                    wrap: e.wordWrap,
                  },
                  this._lineTool.name(),
                  { isEditable: !0, isMultiLine: !0 },
                );
              return [t];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    RYNR: function (e, t, i) {
      'use strict';
      function n(e) {
        return [
          { value: 'percents', title: M },
          { value: 'money', title: e || k },
        ];
      }
      var o,
        l,
        r,
        s,
        c,
        d,
        a,
        u,
        h,
        b,
        p,
        w,
        f,
        g,
        _,
        j,
        O,
        C,
        y,
        L,
        v,
        M,
        k,
        S,
        T;
      i.r(t),
        i.d(t, 'RiskRewardDefinitionsViewModel', function () {
          return T;
        }),
        (o = i('mrSG')),
        (l = i('wm7x')),
        (r = i('DSp8')),
        (s = i('Cn8r')),
        (c = i('HSjo')),
        (d = i('hY0g')),
        (a = i.n(d)),
        (u = i('LIFs')),
        (h = window.t('Lines')),
        (b = window.t('Stop color')),
        (p = window.t('Target color')),
        (w = window.t('Text')),
        (f = window.t('Compact stats mode')),
        (g = window.t('Ticks')),
        (_ = window.t('Price')),
        (j = window.t('Entry price')),
        (O = window.t('Profit level')),
        (C = window.t('Stop level')),
        (y = window.t('Account size')),
        (L = window.t('Risk')),
        (v = window.t('Always show stats')),
        (M = window.t('%')),
        (k = window.t('Cash')),
        (S = ''),
        (T = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this,
              o = n._lineTool.properties().childs(),
              l = o.riskDisplayMode.value();
            return (
              (n._riskMaxWV = new a.a(n._getRiskMax(l))),
              (n._riskStepWV = new a.a(n._getRiskStep(l))),
              (n._riskPrecisionWV = new a.a(n._getRiskPrecision(l))),
              (n._riskUnitWV = new a.a(n._getRiskUnit())),
              (n._riskUnitOptionsWV = new a.a(n._getRiskUnitOptions())),
              n._createPropertyRages(),
              o.riskDisplayMode.subscribe(n, function (e) {
                return n._onRiskDisplayChanged(e);
              }),
              o.accountSize.subscribe(n, function () {
                return n._onAccountSizeChanged();
              }),
              n._undoModel
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .subscribe(n, n._onSymbolInfoChanged),
              n
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.destroy = function () {
              e.prototype.destroy.call(this);
              var t = this._lineTool.properties().childs();
              t.riskDisplayMode.unsubscribeAll(this),
                t.accountSize.unsubscribeAll(this),
                this._undoModel
                  .model()
                  .mainSeries()
                  .dataEvents()
                  .symbolResolved()
                  .unsubscribeAll(this);
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(u.c)(t),
                n = Object(l.a)(
                  this._undoModel,
                  { lineColor: e.linecolor, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: h },
                ),
                o = Object(c.e)(
                  {
                    color: Object(c.u)(
                      this._undoModel,
                      e.stopBackground,
                      e.stopBackgroundTransparency,
                      'Change ' + t + ' stop color',
                    ),
                  },
                  { id: i + 'StopColor', title: b },
                ),
                s = Object(c.e)(
                  {
                    color: Object(c.u)(
                      this._undoModel,
                      e.profitBackground,
                      e.profitBackgroundTransparency,
                      'Change ' + t + ' stop color',
                    ),
                  },
                  { id: i + 'ProfitColor', title: p },
                ),
                d = Object(r.a)(
                  this._undoModel,
                  { textColor: e.textcolor, fontSize: e.fontsize },
                  t,
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: w },
                  },
                ),
                a = Object(c.c)(
                  {
                    checked: Object(c.b)(
                      this._undoModel,
                      e.compact,
                      'Change ' + t + ' Compact stats mode',
                    ),
                  },
                  { id: i + 'CompactMode', title: f },
                ),
                g = Object(c.c)(
                  {
                    checked: Object(c.b)(
                      this._undoModel,
                      e.alwaysShowStats,
                      'Change ' + t + ' Always show stats',
                    ),
                  },
                  { id: i + 'AlwaysShowStats', title: v },
                );
              return [n, o, s, d, a, g];
            }),
            (t.prototype._inputsPropertyDefinitions = function () {
              var e = this,
                t = this._lineTool.properties().childs(),
                i = this._lineTool.name(),
                n = Object(u.c)(i),
                o = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.accountSize,
                      'Change ' + i + ' Account Size',
                    ),
                  },
                  {
                    id: n + 'AccountSize',
                    title: y,
                    type: 1,
                    min: new a.a(1),
                    max: new a.a(1e9),
                    step: new a.a(1),
                    unit: this._riskUnitWV,
                  },
                ),
                l = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.risk,
                      'Change ' + i + ' Risk',
                      [
                        function (e) {
                          return parseFloat(e);
                        },
                      ],
                    ),
                    unitOptionsValue: Object(c.b)(
                      this._undoModel,
                      t.riskDisplayMode,
                      'Change ' + i + ' Risk Display Mode',
                    ),
                  },
                  {
                    id: n + 'Risk',
                    title: L,
                    type: 1,
                    min: new a.a(1),
                    max: this._riskMaxWV,
                    precision: this._riskPrecisionWV,
                    step: this._riskStepWV,
                    unitOptions: this._riskUnitOptionsWV,
                  },
                ),
                r = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.entryPrice,
                      'Change ' + i + ' entry price',
                    ),
                  },
                  { id: n + 'EntryPrice', title: j, type: 1, step: new a.a(1) },
                ),
                s = Object(c.k)([o, l, r], n + 'AccountRisk'),
                d = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.profitLevel,
                      'Change ' + i + ' profit level',
                    ),
                  },
                  {
                    id: n + 'ProfitLevelTicks',
                    title: g,
                    type: 0,
                    min: new a.a(0),
                    max: new a.a(1e9),
                    step: new a.a(1),
                  },
                ),
                h = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.targetPrice,
                      'Change ' + i + ' profit price',
                      [
                        function (e) {
                          return e;
                        },
                        function (t) {
                          return e._lineTool.preparseProfitPrice(t);
                        },
                      ],
                    ),
                  },
                  {
                    id: n + 'ProfitLevelPrice',
                    title: _,
                    type: 1,
                    step: new a.a(1),
                  },
                ),
                b = Object(c.k)([d, h], n + 'ProfitLevel', O),
                p = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.stopLevel,
                      'Change ' + i + ' stop level',
                    ),
                  },
                  {
                    id: n + 'StopLevelTicks',
                    title: g,
                    type: 0,
                    min: new a.a(0),
                    max: new a.a(1e9),
                    step: new a.a(1),
                  },
                ),
                w = Object(c.i)(
                  {
                    value: Object(c.b)(
                      this._undoModel,
                      t.stopPrice,
                      'Change ' + i + ' stop price',
                      [
                        function (e) {
                          return e;
                        },
                        function (t) {
                          return e._lineTool.preparseStopPrice(t);
                        },
                      ],
                    ),
                  },
                  {
                    id: n + 'StopLevelPrice',
                    title: _,
                    type: 1,
                    step: new a.a(1),
                  },
                ),
                f = Object(c.k)([p, w], n + 'StopLevel', C);
              return [s, b, f];
            }),
            (t.prototype._onRiskDisplayChanged = function (e) {
              var t = e.value();
              this._riskMaxWV.setValue(this._getRiskMax(t)),
                this._riskStepWV.setValue(this._getRiskStep(t)),
                this._riskPrecisionWV.setValue(this._getRiskPrecision(t));
            }),
            (t.prototype._onAccountSizeChanged = function () {
              this._riskMaxWV.setValue(
                this._getRiskMax(
                  this._lineTool.properties().childs().riskDisplayMode.value(),
                ),
              );
            }),
            (t.prototype._onSymbolInfoChanged = function () {
              this._riskUnitWV.setValue(this._getRiskUnit()),
                this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions());
            }),
            (t.prototype._getRiskMax = function (e) {
              return 'percents' === e
                ? 100
                : this._lineTool.properties().childs().accountSize.value();
            }),
            (t.prototype._getRiskStep = function (e) {
              return 'percents' === e ? 0.01 : 1;
            }),
            (t.prototype._getRiskPrecision = function (e) {
              if ('percents' === e) return 2;
            }),
            (t.prototype._getRiskUnit = function () {
              var e = this._undoModel.model().mainSeries().symbolInfo();
              return (null !== e && e.currency_code) || S;
            }),
            (t.prototype._getRiskUnitOptions = function () {
              var e = this._undoModel.model().mainSeries().symbolInfo();
              return null !== e ? n(e.currency_code) : n();
            }),
            t
          );
        })(s.LineDataSourceDefinitionsViewModel));
    },
    RhWr: function (e, t, i) {
      'use strict';
      var n, o, l, r, s;
      i.r(t),
        i.d(t, 'BalloonDefinitionsViewModel', function () {
          return s;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = window.t('Text')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.borderColor,
                  },
                  this._lineTool.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: r },
                  },
                );
              return [t];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    SMr9: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p;
      i.r(t),
        i.d(t, 'availableAlignmentVerticalItems', function () {
          return h;
        }),
        i.d(t, 'availableAlignmentHorizontalItems', function () {
          return b;
        }),
        i.d(t, 'FibTimezoneDefinitionsViewModel', function () {
          return p;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('hY0g')),
        (s = i.n(r)),
        (c = i('LIFs')),
        (d = window.t('Use one color')),
        (a = window.t('Background')),
        (u = window.t('Labels')),
        (h = [
          { value: 'top', title: window.t('Top') },
          { value: 'middle', title: window.t('Middle') },
          { value: 'bottom', title: window.t('Bottom') },
        ]),
        (b = [
          { value: 'left', title: window.t('Left') },
          { value: 'center', title: window.t('Center') },
          { value: 'right', title: window.t('Right') },
        ]),
        (p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                l,
                r,
                p = [],
                w = this._lineTool.properties(),
                f = w.childs(),
                g = this._lineTool.name(),
                _ = Object(c.c)(g),
                j = this._lineTool.levelsCount();
              for (e = 1; e <= j; e++)
                (t = f['level' + e].childs()),
                  (i = Object(o.g)(
                    {
                      checked: Object(o.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + g + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(o.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + g + ' Level ' + e + ' Line Color',
                      ),
                      width: Object(o.b)(
                        this._undoModel,
                        t.linewidth,
                        'Change ' + g + ' Level ' + e + ' Line Width',
                      ),
                      style: Object(o.b)(
                        this._undoModel,
                        t.linestyle,
                        'Change ' + g + ' Level ' + e + ' Line Style',
                      ),
                      level: Object(o.b)(
                        this._undoModel,
                        t.coeff,
                        'Change ' + g + ' Level ' + e + ' Coeff',
                      ),
                    },
                    { id: _ + 'LineLevel' + e },
                  )),
                  p.push(i);
              return (
                (n = Object(o.e)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      w.collectibleColors,
                      null,
                      'Change ' + g + ' All Lines Color',
                    ),
                  },
                  { id: _ + 'AllLineColor', title: d },
                )),
                p.push(n),
                (l = Object(o.q)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      f.fillBackground,
                      'Change ' + g + ' Background Visibility',
                    ),
                    transparency: Object(o.b)(
                      this._undoModel,
                      f.transparency,
                      'Change ' + g + ' Background Transparency',
                    ),
                  },
                  { id: _ + 'Background', title: a },
                )),
                p.push(l),
                (r = Object(o.s)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      f.showLabels,
                      'Change ' + g + ' Labels Visibility',
                    ),
                    option1: Object(o.b)(
                      this._undoModel,
                      f.horzLabelsAlign,
                      'Change ' + g + ' Labels Alignment',
                    ),
                    option2: Object(o.b)(
                      this._undoModel,
                      f.vertLabelsAlign,
                      'Change ' + g + ' Labels Alignment',
                    ),
                  },
                  {
                    id: _ + 'Labels',
                    title: u,
                    optionsItems1: new s.a(b),
                    optionsItems2: new s.a(h),
                  },
                )),
                p.push(r),
                p
              );
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    UHSU: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b;
      i.r(t),
        i.d(t, 'ElliottPatternDefinitionsViewModel', function () {
          return b;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('hY0g')),
        (c = i.n(s)),
        (d = i('LIFs')),
        (a = window.t('Color')),
        (u = window.t('Wave')),
        (h = window.t('Degree')),
        (b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  {
                    id: Object(d.c)(t + 'BackgroundColor'),
                    title: a,
                  },
                ),
                n = Object(o.a)(
                  this._undoModel,
                  { showLine: e.showWave, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: u },
                ),
                l = Object(r.j)(
                  {
                    option: Object(r.b)(
                      this._undoModel,
                      e.degree,
                      'Change ' + t + ' degree',
                    ),
                  },
                  {
                    id: t + 'Degree',
                    title: h,
                    options: new c.a(this._lineTool.availableDegreesValues()),
                  },
                );
              return [i, n, l];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    VkdP: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b;
      i.r(t),
        i.d(t, 'ParallelChannelDefinitionsViewModel', function () {
          return b;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('wm7x')),
        (s = i('LIFs')),
        (c = window.t('Background')),
        (d = window.t('Extend left line')),
        (a = window.t('Extend right line')),
        (u = window.t('Channel')),
        (h = window.t('Middle')),
        (b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(s.c)(t),
                n = Object(r.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineStyle: e.linestyle,
                    lineWidth: e.linewidth,
                  },
                  t,
                  'ChannelLine',
                  { line: u },
                ),
                l = Object(r.a)(
                  this._undoModel,
                  {
                    showLine: e.showMidline,
                    lineColor: e.midlinecolor,
                    lineStyle: e.midlinestyle,
                    lineWidth: e.midlinewidth,
                  },
                  'MiddleLine',
                  t,
                  { line: h },
                ),
                b = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.extendLeft,
                      'Change ' + t + ' Extending Left',
                    ),
                  },
                  { id: i + 'ExtendLeft', title: d },
                ),
                p = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.extendRight,
                      'Change ' + t + ' Extending Right',
                    ),
                  },
                  { id: i + 'ExtendRight', title: a },
                ),
                w = Object(o.e)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(o.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background visibility color',
                    ),
                  },
                  { id: i + 'Background', title: c },
                );
              return [n, l, b, p, w];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    WfUZ: function (e, t, i) {
      'use strict';
      function n(e) {
        return e instanceof c.LineToolGannComplex;
      }
      var o, l, r, s, c, d, a, u, h, b, p, w, f, g, _, j, O, C;
      i.r(t),
        i.d(t, 'isGannComplexLineTool', function () {
          return n;
        }),
        i.d(t, 'GannComplexAndFixedDefinitionsViewModel', function () {
          return C;
        }),
        (o = i('mrSG')),
        (l = i('DSp8')),
        (r = i('HSjo')),
        (s = i('Cn8r')),
        (c = i('nd9+')),
        (d = i('hY0g')),
        (a = i.n(d)),
        (u = i('Z5lT')),
        (h = i('LIFs')),
        (b = window.t('Reverse')),
        (p = window.t('Use one color')),
        (w = window.t('Background')),
        (f = window.t('Price/Bar Ratio')),
        (g = window.t('Ranges and ratio')),
        (_ = window.t('Levels')),
        (j = window.t('Fans')),
        (O = window.t('Arcs')),
        (C = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                o,
                s,
                c,
                d,
                C,
                y,
                L,
                v,
                M,
                k,
                S,
                T,
                m,
                x,
                D,
                V,
                P,
                B,
                R,
                A,
                F = [],
                W = this._lineTool.properties(),
                G = W.childs(),
                H = this._lineTool.name(),
                E = Object(h.c)(H),
                I = [],
                z = G.levels.childCount();
              for (e = 0; e < z; e++)
                (t = G.levels.childs()[e].childs()),
                  (i = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        t.visible,
                        'Change ' + H + ' Level ' + e + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        t.color,
                        null,
                        'Change ' + H + ' Level ' + e + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        t.width,
                        'Change ' + H + ' Level ' + e + ' Line Width',
                      ),
                    },
                    { id: E + 'LineLevel' + e, title: '' + e },
                  )),
                  I.push(i);
              for (
                o = Object(r.l)(I, E + 'LeveledLinesGroup'),
                  F.push(Object(r.k)([o], E + 'LevelGroup', _)),
                  s = [],
                  c = G.fanlines.childCount(),
                  e = 0;
                e < c;
                e++
              )
                (d = G.fanlines.childs()[e].childs()),
                  (C = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        d.visible,
                        'Change ' + H + ' Fan ' + e + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        d.color,
                        null,
                        'Change ' + H + ' Fan ' + e + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        d.width,
                        'Change ' + H + ' Fan ' + e + ' Line Width',
                      ),
                    },
                    {
                      id: E + 'FanLineLevel' + e,
                      title: d.x.value() + 'x' + d.y.value(),
                    },
                  )),
                  s.push(C);
              for (
                y = Object(r.l)(s, E + 'FanLeveledLinesGroup'),
                  F.push(Object(r.k)([y], E + 'FanLinesGroup', j)),
                  L = [],
                  v = G.arcs.childCount(),
                  e = 0;
                e < v;
                e++
              )
                (M = G.arcs.childs()[e].childs()),
                  (k = Object(r.g)(
                    {
                      checked: Object(r.b)(
                        this._undoModel,
                        M.visible,
                        'Change ' + H + ' Arcs ' + e + ' Line Visibility',
                      ),
                      color: Object(r.u)(
                        this._undoModel,
                        M.color,
                        null,
                        'Change ' + H + ' Arcs ' + e + ' Line Color',
                      ),
                      width: Object(r.b)(
                        this._undoModel,
                        M.width,
                        'Change ' + H + ' Arcs ' + e + ' Line Width',
                      ),
                    },
                    {
                      id: E + 'ArcsLineLevel' + e,
                      title: M.x.value() + 'x' + M.y.value(),
                    },
                  )),
                  L.push(k);
              return (
                (S = Object(r.l)(L, E + 'ArcsLeveledLinesGroup')),
                F.push(Object(r.k)([S], E + 'ArcsLinesGroup', O)),
                (T = Object(r.e)(
                  {
                    color: Object(r.u)(
                      this._undoModel,
                      W.collectibleColors,
                      null,
                      'Change ' + H + ' All Lines Color',
                    ),
                  },
                  { id: E + 'AllLineColor', title: p },
                )),
                F.push(T),
                (m = G.arcsBackground.childs()),
                (x = Object(r.q)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      m.fillBackground,
                      'Change ' + H + ' Background Visibility',
                    ),
                    transparency: Object(r.b)(
                      this._undoModel,
                      m.transparency,
                      'Change ' + H + ' Background Transparency',
                    ),
                  },
                  { id: E + 'Background', title: w },
                )),
                F.push(x),
                (D = Object(r.c)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      G.reverse,
                      'Change ' + H + ' Reverse',
                    ),
                  },
                  { id: E + 'Reverse', title: b },
                )),
                F.push(D),
                n(this._lineTool) &&
                  ((P = (V = this._lineTool).properties().childs()),
                  (B = Object(r.i)(
                    {
                      value: Object(r.b)(
                        this._undoModel,
                        P.scaleRatio,
                        'Change Top Margin',
                        [
                          Object(u.c)(7),
                          function (e) {
                            return null !== e
                              ? parseFloat(
                                  V.getScaleRatioFormatter().format('' + e),
                                )
                              : null;
                          },
                        ],
                      ),
                    },
                    {
                      id: 'scaleRatio',
                      title: f,
                      min: new a.a(1e-7),
                      max: new a.a(1e8),
                      step: new a.a(V.getScaleRatioStep()),
                    },
                  )),
                  F.push(B),
                  (R = P.labelsStyle.childs()),
                  (A = Object(l.a)(
                    this._undoModel,
                    {
                      showText: P.showLabels,
                      fontSize: R.fontSize,
                      bold: R.bold,
                      italic: R.italic,
                    },
                    H,
                    { customTitles: { text: g } },
                  )),
                  F.push(A)),
                F
              );
            }),
            t
          );
        })(s.LineDataSourceDefinitionsViewModel));
    },
    XCOO: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c;
      i.r(t),
        i.d(t, 'IconsDefinitionsViewModel', function () {
          return c;
        }),
        (n = i('mrSG')),
        (o = i('Cn8r')),
        (l = i('HSjo')),
        (r = i('LIFs')),
        (s = window.t('Color')),
        (c = (function (e) {
          function t(t, i) {
            return e.call(this, t, i) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      e.color,
                      null,
                      'Change ' + t + ' color',
                    ),
                  },
                  { id: Object(r.c)(t + 'Color'), title: s },
                );
              return [i];
            }),
            t
          );
        })(o.LineDataSourceDefinitionsViewModel));
    },
    Z5lT: function (e, t, i) {
      'use strict';
      function n(e) {
        return Math.floor(e);
      }
      function o(e) {
        return parseInt(String(e));
      }
      function l(e) {
        var t = new r.LimitedPrecisionNumericFormatter(e);
        return function (e) {
          if (null === e) return e;
          var i = t.parse(t.format(e));
          return i.res ? i.price : null;
        };
      }
      i.d(t, 'b', function () {
        return n;
      }),
        i.d(t, 'a', function () {
          return o;
        }),
        i.d(t, 'c', function () {
          return l;
        });
      var r = i('T6Of');
    },
    ZSes: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'BrushDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Background')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    leftEnd: e.leftEnd,
                    rightEnd: e.rightEnd,
                  },
                  t,
                  'Line',
                ),
                n = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: c },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    Zd1D: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a;
      i.r(t),
        i.d(t, 'GeneralFiguresDefinitionsViewModel', function () {
          return a;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Border')),
        (d = window.t('Background')),
        (a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                ),
                n = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: d },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    auWl: function (e, t, i) {
      'use strict';
      var n, o, l, r;
      i.r(t),
        i.d(t, 'TrendLineDefinitionsViewModel', function () {
          return r;
        }),
        (n = i('mrSG')),
        (o = i('Cn8r')),
        (l = i('78yF')),
        (r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs();
              return Object(l.a)(
                this._undoModel,
                {
                  linecolor: e.linecolor,
                  linestyle: e.linestyle,
                  linewidth: e.linewidth,
                  leftEnd: e.leftEnd,
                  rightEnd: e.rightEnd,
                  extendLeft: e.extendLeft,
                  extendRight: e.extendRight,
                  showMiddlePoint: e.showMiddlePoint,
                  textcolor: e.textcolor,
                  statsPosition: e.statsPosition,
                  showPriceRange: e.showPriceRange,
                  showBarsRange: e.showBarsRange,
                  showDateTimeRange: e.showDateTimeRange,
                  showDistance: e.showDistance,
                  showAngle: e.showAngle,
                  alwaysShowStats: e.alwaysShowStats,
                },
                this._lineTool.name(),
              );
            }),
            t
          );
        })(o.LineDataSourceDefinitionsViewModel));
    },
    b4fl: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'GeneralBezierDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('Cn8r')),
        (r = i('HSjo')),
        (s = i('LIFs')),
        (c = window.t('Background')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                    extendLeft: e.extendLeft,
                    extendRight: e.extendRight,
                    leftEnd: e.leftEnd,
                    rightEnd: e.rightEnd,
                  },
                  t,
                  'Line',
                ),
                n = Object(r.e)(
                  {
                    checked: Object(r.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(r.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background color',
                    ),
                  },
                  { id: Object(s.c)(t + 'BackgroundColor'), title: c },
                );
              return [i, n];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    'e0H+': function (e, t, i) {
      'use strict';
      var n, o, l, r, s;
      i.r(t),
        i.d(t, 'HorizontalRayDefinitionsViewModel', function () {
          return s;
        }),
        (n = i('mrSG')),
        (o = i('Eyy1')),
        (l = i('xrdl')),
        (r = i('CA9d')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e,
                t = this._lineTool.points(),
                i = this._lineTool.properties().childs().points[0].childs();
              return (
                this._createYCoordinateStepWV(),
                (e = Object(o.ensureNotNull)(this._yCoordinateStepWV)),
                [
                  Object(r.c)(
                    this._undoModel,
                    i,
                    t[0],
                    e,
                    window.t('#1 (price, bar)', { context: 'linetool point' }),
                    this._lineTool.name(),
                  ),
                ]
              );
            }),
            t
          );
        })(l.CrossLineDefinitionsViewModel));
    },
    'fIc+': function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w;
      i.r(t),
        i.d(t, 'GhostFeedDefinitionsViewModel', function () {
          return w;
        }),
        (n = i('mrSG')),
        (o = i('Cn8r')),
        (l = i('HSjo')),
        (r = i('hY0g')),
        (s = i.n(r)),
        (c = i('LIFs')),
        (d = window.t('Candles')),
        (a = window.t('Borders')),
        (u = window.t('Wick')),
        (h = window.t('Transparency')),
        (b = window.t('Avg HL in minticks')),
        (p = window.t('Variance')),
        (w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(c.c)(t),
                n = e.candleStyle.childs(),
                o = Object(l.r)(
                  {
                    color1: Object(l.u)(
                      this._undoModel,
                      n.upColor,
                      null,
                      'Change ' + t + ' Candle Up Color',
                    ),
                    color2: Object(l.u)(
                      this._undoModel,
                      n.downColor,
                      null,
                      'Change ' + t + ' Candle Down Color',
                    ),
                  },
                  { id: i + 'Candle2Colors', title: d },
                ),
                r = Object(l.r)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      n.drawBorder,
                      'Change ' + t + ' Candle Border Visibility',
                    ),
                    color1: Object(l.u)(
                      this._undoModel,
                      n.borderUpColor,
                      null,
                      'Change ' + t + ' Candle Border Up Color',
                    ),
                    color2: Object(l.u)(
                      this._undoModel,
                      n.borderDownColor,
                      null,
                      'Change ' + t + ' Candle Border Down Color',
                    ),
                  },
                  { id: i + 'CandleBorder2Colors', title: a },
                ),
                s = Object(l.e)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      n.drawWick,
                      'Change ' + t + ' Candle Wick Visibility',
                    ),
                    color: Object(l.u)(
                      this._undoModel,
                      n.wickColor,
                      null,
                      'Change ' + t + ' Candle Wick Color',
                    ),
                  },
                  { id: i + 'CandleWickColor', title: u },
                ),
                b = Object(l.q)(
                  {
                    transparency: Object(l.b)(
                      this._undoModel,
                      e.transparency,
                      'Change ' + t + ' Transparency',
                    ),
                  },
                  { id: i + 'Transparency', title: h },
                );
              return [o, r, s, b];
            }),
            (t.prototype._inputsPropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(c.c)(t),
                n = Object(l.i)(
                  {
                    value: Object(l.b)(
                      this._undoModel,
                      e.averageHL,
                      'Change ' + t + ' Average HL value',
                    ),
                  },
                  {
                    id: i + 'AvgHL',
                    title: b,
                    type: 0,
                    min: new s.a(1),
                    max: new s.a(5e4),
                    step: new s.a(1),
                  },
                ),
                o = Object(l.i)(
                  {
                    value: Object(l.b)(
                      this._undoModel,
                      e.variance,
                      'Change ' + t + ' Variance value',
                    ),
                  },
                  {
                    id: i + 'Variance',
                    title: p,
                    type: 0,
                    min: new s.a(1),
                    max: new s.a(100),
                    step: new s.a(1),
                  },
                );
              return [n, o];
            }),
            t
          );
        })(o.LineDataSourceDefinitionsViewModel));
    },
    hQgR: function (e, t, i) {
      'use strict';
      var n, o, l, r, s;
      i.r(t),
        i.d(t, 'PriceLabelDefinitionsViewModel', function () {
          return s;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = window.t('Text')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.borderColor,
                  },
                  this._lineTool.name(),
                  { customTitles: { text: r } },
                );
              return [t];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    nBUU: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'FibSpiralDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('HSjo')),
        (l = i('Cn8r')),
        (r = i('LIFs')),
        (s = window.t('Line')),
        (c = window.t('Counterclockwise')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(r.c)(t),
                n = Object(o.h)(
                  {
                    color: Object(o.u)(
                      this._undoModel,
                      e.linecolor,
                      null,
                      'Change ' + t + ' Line Color',
                    ),
                    width: Object(o.b)(
                      this._undoModel,
                      e.linewidth,
                      'Change ' + t + ' Line Width',
                    ),
                    style: Object(o.b)(
                      this._undoModel,
                      e.linestyle,
                      'Change ' + t + ' Line Style',
                    ),
                  },
                  { id: i + 'Line', title: s },
                ),
                l = Object(o.c)(
                  {
                    checked: Object(o.b)(
                      this._undoModel,
                      e.counterclockwise,
                      'Change ' + t + ' Counterclockwise',
                    ),
                  },
                  { id: i + 'Counterclockwise', title: c },
                );
              return [n, l];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    o1gc: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b;
      i.r(t),
        i.d(t, 'TrendAngleDefinitionsViewModel', function () {
          return b;
        }),
        (n = i('mrSG')),
        (o = i('Eyy1')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('hY0g')),
        (c = i.n(s)),
        (d = i('CA9d')),
        (a = i('78yF')),
        (u = window.t('Angle')),
        (h = window.t('Text')),
        (b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._coordinatesPropertyDefinitions = function () {
              var e,
                t,
                i = this._lineTool.points(),
                n = [],
                r = this._lineTool
                  .properties()
                  .childs()
                  .points.childs()[0]
                  .childs();
              return (
                this._createYCoordinateStepWV(),
                (e = Object(o.ensureNotNull)(this._yCoordinateStepWV)),
                n.push(
                  Object(d.c)(
                    this._undoModel,
                    r,
                    i[0],
                    e,
                    window.t('#1 (price, bar)', { context: 'linetool point' }),
                    this._lineTool.name(),
                  ),
                ),
                (t = Object(l.i)(
                  {
                    value: Object(l.b)(
                      this._undoModel,
                      this._lineTool.properties().childs().angle,
                      'Change angle',
                    ),
                  },
                  {
                    id: 'TrendLineAngleCoordinate',
                    title: u,
                    min: new c.a(-360),
                    max: new c.a(360),
                    step: new c.a(1),
                  },
                )),
                n.push(t),
                n
              );
            }),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs();
              return Object(a.a)(this._undoModel, e, this._lineTool.name(), {
                text: h,
              });
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    pdv6: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b;
      i.r(t),
        i.d(t, 'FibSpeedResistanceArcsDefinitionsViewModel', function () {
          return b;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('LIFs')),
        (c = window.t('Trend Line')),
        (d = window.t('Use one color')),
        (a = window.t('Background')),
        (u = window.t('Levels')),
        (h = window.t('Full Circles')),
        (b = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                b,
                p,
                w,
                f = [],
                g = this._lineTool.properties(),
                _ = g.childs(),
                j = this._lineTool.name(),
                O = Object(s.c)(j),
                C = _.trendline.childs(),
                y = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: C.visible,
                    lineColor: C.color,
                    lineStyle: C.linestyle,
                    lineWidth: C.linewidth,
                  },
                  j,
                  'TrendLine',
                  { line: c },
                );
              for (
                f.push(y), e = this._lineTool.levelsCount(), t = 1;
                t <= e;
                t++
              )
                (i = _['level' + t].childs()),
                  (n = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        i.visible,
                        'Change ' + j + ' Level ' + t + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        i.color,
                        null,
                        'Change ' + j + ' Level ' + t + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        i.linewidth,
                        'Change ' + j + ' Level ' + t + ' Line Width',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        i.coeff,
                        'Change ' + j + ' Level ' + t + ' Coeff',
                      ),
                    },
                    { id: O + 'LineLevel' + t },
                  )),
                  f.push(n);
              return (
                (r = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      g.collectibleColors,
                      null,
                      'Change ' + j + ' All Lines Color',
                    ),
                  },
                  { id: O + 'AllLineColor', title: d },
                )),
                f.push(r),
                (b = Object(l.q)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.fillBackground,
                      'Change ' + j + ' Background Visibility',
                    ),
                    transparency: Object(l.b)(
                      this._undoModel,
                      _.transparency,
                      'Change ' + j + ' Background Transparency',
                    ),
                  },
                  { id: O + 'Background', title: a },
                )),
                f.push(b),
                (p = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.showCoeffs,
                      'Change ' + j + ' Levels Visibility',
                    ),
                  },
                  { id: O + 'Levels', title: u },
                )),
                f.push(p),
                (w = Object(l.c)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.fullCircles,
                      'Change ' + j + ' Full Circles Visibility',
                    ),
                  },
                  { id: O + 'FullCircles', title: h },
                )),
                f.push(w),
                f
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    u52p: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h, b, p, w;
      i.r(t),
        i.d(t, 'TrendBasedFibTimeDefinitionsViewModel', function () {
          return w;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('HSjo')),
        (r = i('Cn8r')),
        (s = i('SMr9')),
        (c = i('hY0g')),
        (d = i.n(c)),
        (a = i('LIFs')),
        (u = window.t('Trend Line')),
        (h = window.t('Use one color')),
        (b = window.t('Background')),
        (p = window.t('Labels')),
        (w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                n,
                r,
                c,
                w,
                f = [],
                g = this._lineTool.properties(),
                _ = g.childs(),
                j = this._lineTool.name(),
                O = Object(a.c)(j),
                C = _.trendline.childs(),
                y = Object(o.a)(
                  this._undoModel,
                  {
                    showLine: C.visible,
                    lineColor: C.color,
                    lineStyle: C.linestyle,
                    lineWidth: C.linewidth,
                  },
                  j,
                  'TrendLine',
                  { line: u },
                );
              for (
                f.push(y), e = this._lineTool.levelsCount(), t = 1;
                t <= e;
                t++
              )
                (i = _['level' + t].childs()),
                  (n = Object(l.g)(
                    {
                      checked: Object(l.b)(
                        this._undoModel,
                        i.visible,
                        'Change ' + j + ' Level ' + t + ' Line Visibility',
                      ),
                      color: Object(l.u)(
                        this._undoModel,
                        i.color,
                        null,
                        'Change ' + j + ' Level ' + t + ' Line Color',
                      ),
                      width: Object(l.b)(
                        this._undoModel,
                        i.linewidth,
                        'Change ' + j + ' Level ' + t + ' Line Width',
                      ),
                      style: Object(l.b)(
                        this._undoModel,
                        i.linestyle,
                        'Change ' + j + ' Level ' + t + ' Line Style',
                      ),
                      level: Object(l.b)(
                        this._undoModel,
                        i.coeff,
                        'Change ' + j + ' Level ' + t + ' Coeff',
                      ),
                    },
                    { id: O + 'LineLevel' + t },
                  )),
                  f.push(n);
              return (
                (r = Object(l.e)(
                  {
                    color: Object(l.u)(
                      this._undoModel,
                      g.collectibleColors,
                      null,
                      'Change ' + j + ' All Lines Color',
                    ),
                  },
                  { id: O + 'AllLineColor', title: h },
                )),
                f.push(r),
                (c = Object(l.q)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.fillBackground,
                      'Change ' + j + ' Background Visibility',
                    ),
                    transparency: Object(l.b)(
                      this._undoModel,
                      _.transparency,
                      'Change ' + j + ' Background Transparency',
                    ),
                  },
                  { id: O + 'Background', title: b },
                )),
                f.push(c),
                (w = Object(l.s)(
                  {
                    checked: Object(l.b)(
                      this._undoModel,
                      _.showCoeffs,
                      'Change ' + j + ' Labels Visibility',
                    ),
                    option1: Object(l.b)(
                      this._undoModel,
                      _.horzLabelsAlign,
                      'Change ' + j + ' Labels Alignment',
                    ),
                    option2: Object(l.b)(
                      this._undoModel,
                      _.vertLabelsAlign,
                      'Change ' + j + ' Labels Alignment',
                    ),
                  },
                  {
                    id: O + 'Labels',
                    title: p,
                    optionsItems1: new d.a(s.availableAlignmentHorizontalItems),
                    optionsItems2: new d.a(s.availableAlignmentVerticalItems),
                  },
                )),
                f.push(w),
                f
              );
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    vm8R: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u;
      i.r(t),
        i.d(t, 'GeneralTrendFiguresDefinitionsViewModel', function () {
          return u;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('DSp8')),
        (r = i('Cn8r')),
        (s = i('HSjo')),
        (c = i('LIFs')),
        (d = window.t('Prices')),
        (a = window.t('Background')),
        (u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  Object(n.__assign)(Object(n.__assign)({}, e), {
                    lineColor: e.linecolor,
                    lineWidth: e.linewidth,
                    lineStyle: e.linestyle,
                  }),
                  t,
                  'Line',
                ),
                r = Object(l.a)(
                  this._undoModel,
                  {
                    showText: e.showPrices,
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  t,
                  { customTitles: { text: d } },
                ),
                u = Object(s.e)(
                  {
                    checked: Object(s.b)(
                      this._undoModel,
                      e.fillBackground,
                      'Change ' + t + ' background visibility',
                    ),
                    color: Object(s.u)(
                      this._undoModel,
                      e.backgroundColor,
                      e.transparency,
                      'Change ' + t + ' background visibility color',
                    ),
                  },
                  { id: Object(c.c)(t + 'Background'), title: a },
                );
              return [i, r, u];
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
    wm7x: function (e, t, i) {
      'use strict';
      function n(e, t, i, n, d) {
        var a = Object(l.c)(i),
          u = {},
          h = { id: '' + a + n, title: (d && d.line) || r };
        return (
          void 0 !== t.showLine &&
            (u.checked = Object(o.b)(
              e,
              t.showLine,
              'Change ' + i + ' Visibility',
            )),
          void 0 !== t.lineWidth &&
            (u.width = Object(o.b)(e, t.lineWidth, 'Change ' + i + ' Width')),
          void 0 !== t.lineStyle &&
            (u.style = Object(o.b)(e, t.lineStyle, 'Change ' + i + ' Style')),
          void 0 !== t.lineColor &&
            (u.color = Object(o.u)(
              e,
              t.lineColor,
              null,
              'Change ' + i + ' Color',
            )),
          void 0 !== t.extendLeft &&
            ((u.extendLeft = Object(o.b)(
              e,
              t.extendLeft,
              'Change ' + i + ' Extending Left',
            )),
            (h.extendLeftTitle = (d && d.extendLeftTitle) || s)),
          void 0 !== t.leftEnd &&
            (u.leftEnd = Object(o.b)(
              e,
              t.leftEnd,
              'Change ' + i + ' Left End',
            )),
          void 0 !== t.extendRight &&
            ((u.extendRight = Object(o.b)(
              e,
              t.extendRight,
              'Change ' + i + ' Extending Right',
            )),
            (h.extendRightTitle = (d && d.extendRightTitle) || c)),
          void 0 !== t.rightEnd &&
            (u.rightEnd = Object(o.b)(
              e,
              t.rightEnd,
              'Change ' + i + ' Right End',
            )),
          Object(o.h)(u, h)
        );
      }
      var o, l, r, s, c;
      i.d(t, 'a', function () {
        return n;
      }),
        (o = i('HSjo')),
        (l = i('LIFs')),
        (r = window.t('Line')),
        (s = window.t('Extend left line')),
        (c = window.t('Extend right line'));
    },
    xhf0: function (e, t, i) {
      'use strict';
      var n, o, l, r;
      i.r(t),
        i.d(t, 'CalloutDefinitionsViewModel', function () {
          return r;
        }),
        (n = i('mrSG')),
        (o = i('DSp8')),
        (l = i('Cn8r')),
        (r = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(o.a)(
                  this._undoModel,
                  {
                    textColor: e.color,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                    text: e.text,
                    backgroundColor: e.backgroundColor,
                    backgroundTransparency: e.transparency,
                    borderColor: e.bordercolor,
                    borderWidth: e.linewidth,
                    wrap: e.wordWrap,
                  },
                  t,
                  { isEditable: !0, isMultiLine: !0 },
                );
              return [i];
            }),
            t
          );
        })(l.LineDataSourceDefinitionsViewModel));
    },
    xrdl: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d, a, u, h;
      i.r(t),
        (n = i('mrSG')),
        (o = i('Cn8r')),
        (l = i('wm7x')),
        (r = i('DSp8')),
        (s = i('HSjo')),
        (c = i('LIFs')),
        (d = window.t('Show Price')),
        (a = window.t('Show Time')),
        (u = window.t('Show text')),
        i.d(t, 'CrossLineDefinitionsViewModel', function () {
          return h;
        }),
        (h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e,
                t,
                i,
                o,
                h,
                b,
                p,
                w,
                f,
                g = this._lineTool.properties().childs();
              return (
                (e = this._undoModel),
                (t = g),
                (i = this._lineTool.name()),
                (p = Object(c.c)(i)),
                (w = []),
                (f = Object(l.a)(
                  e,
                  {
                    lineColor: t.linecolor,
                    lineWidth: t.linewidth,
                    lineStyle: t.linestyle,
                  },
                  p,
                  'Line',
                )),
                w.push(f),
                'showPrice' in t &&
                  ((o = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        e,
                        t.showPrice,
                        'Change ' + i + ' Price Label Visibility',
                      ),
                    },
                    { id: p + 'ShowPrice', title: d },
                  )),
                  w.push(o)),
                'showTime' in t &&
                  ((h = Object(s.c)(
                    {
                      checked: Object(s.b)(
                        e,
                        t.showTime,
                        'Change ' + i + ' Time Label Visibility',
                      ),
                    },
                    { id: p + 'ShowTime', title: a },
                  )),
                  w.push(h)),
                'showLabel' in t &&
                  ((b = Object(r.a)(
                    e,
                    Object(n.__assign)(Object(n.__assign)({}, t), {
                      showText: t.showLabel,
                      textColor: t.textcolor,
                      fontSize: t.fontsize,
                    }),
                    name,
                    {
                      isEditable: !0,
                      isMultiLine: !0,
                      customTitles: { text: u },
                    },
                  )),
                  w.push(b)),
                w
              );
            }),
            t
          );
        })(o.LineDataSourceDefinitionsViewModel));
    },
    y4pE: function (e, t, i) {
      'use strict';
      var n, o, l, r, s, c, d;
      i.r(t),
        i.d(t, 'AbcdPatternDefinitionsViewModel', function () {
          return d;
        }),
        (n = i('mrSG')),
        (o = i('wm7x')),
        (l = i('DSp8')),
        (r = i('Cn8r')),
        (s = window.t('Label')),
        (c = window.t('Border')),
        (d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype._stylePropertyDefinitions = function () {
              var e = this._lineTool.properties().childs(),
                t = this._lineTool.name(),
                i = Object(l.a)(
                  this._undoModel,
                  {
                    textColor: e.textcolor,
                    fontSize: e.fontsize,
                    bold: e.bold,
                    italic: e.italic,
                  },
                  this._lineTool.name(),
                  {
                    isEditable: !0,
                    isMultiLine: !0,
                    customTitles: { text: s },
                  },
                ),
                n = Object(o.a)(
                  this._undoModel,
                  { lineColor: e.color, lineWidth: e.linewidth },
                  t,
                  'Line',
                  { line: c },
                );
              return [i, n];
            }),
            t
          );
        })(r.LineDataSourceDefinitionsViewModel));
    },
  },
]);
