(window.webpackJsonp = window.webpackJsonp || []).push([
  ['export-data'],
  {
    SIoL: function (e, t, i) {
      'use strict';
      function n(e, t) {
        var i, n, l, d, h, p, w, m, b, g, O, v, P, x, N, T, j, y, S, I, k, R, L;
        for (
          void 0 === t && (t = {}),
            n = Object.assign({}, f, t),
            l = { schema: [], data: [] },
            d = e.timeScale().points(),
            h = e.mainSeries(),
            p = (function (e, t) {
              var i = e.allStudies().filter(function (e) {
                return e.showInObjectTree();
              });
              if ('all' === t) return i;
              return i.filter(function (e) {
                return t.includes(e.id());
              });
            })(e, n.includedStudies),
            w = (function (e, t, i, n) {
              var s, l, o, r, d, f, h, p, w;
              for (
                s = Object(a.ensureNotNull)(
                  void 0 !== i ? e.indexOf(i, !0) : e.firstIndex(),
                ),
                  l = Object(a.ensureNotNull)(
                    void 0 !== n ? e.indexOf(n, !0) : e.lastIndex(),
                  ),
                  o = l,
                  r = s,
                  d = 0,
                  f = t;
                d < f.length;
                d++
              )
                (h = f[d]),
                  null !==
                    (p = h.search(s, u.PlotRowSearchMode.NearestRight)) &&
                    p.index < o &&
                    (o = p.index),
                  null !== (w = h.search(l, u.PlotRowSearchMode.NearestLeft)) &&
                    w.index > r &&
                    (r = w.index);
              return (
                Object(a.assert)(
                  o <= r,
                  'Range must contain at least 1 time point',
                ),
                new c.BarsRange(o, r)
              );
            })(d, [h.bars()], n.from, n.to),
            m = w.firstBar(),
            b = w.lastBar(),
            n.includeTime && l.schema.push({ type: 'time' }),
            g = l.schema.length,
            n.includeSeries &&
              (l.schema.push(o('open')),
              l.schema.push(o('high')),
              l.schema.push(o('low')),
              l.schema.push(o('close'))),
            O = l.schema.length,
            v = [],
            P = 0,
            x = p;
          P < x.length;
          P++
        )
          (T = s((N = x[P]))),
            v.push(T),
            (i = l.schema).push.apply(i, T.fields);
        if (0 === (j = l.schema.length)) return l;
        for (y = m; y <= b; ++y)
          (S = new Float64Array(j)).fill(NaN), l.data.push(S);
        if (n.includeTime)
          for (y = m; y <= b; ++y)
            l.data[y - m][0] = Object(a.ensureNotNull)(d.valueAt(y));
        for (
          n.includeSeries &&
            h
              .bars()
              .range(m, b)
              .each(function (e, t) {
                var i = l.data[e - m];
                return (
                  (i[g] = r(t[1])),
                  (i[g + 1] = r(t[2])),
                  (i[g + 2] = r(t[3])),
                  (i[g + 3] = r(t[4])),
                  !1
                );
              }),
            I = 0;
          I < p.length;
          ++I
        ) {
          for (
            N = p[I],
              k = v[I],
              R = function (e) {
                var t = k.fieldPlotOffsets[e],
                  i = k.fieldToPlotIndex[e],
                  n = m - t,
                  s = b - t,
                  o = O + e;
                N.data()
                  .range(n, s)
                  .each(function (e, t) {
                    return (l.data[e - n][o] = r(t[i])), !1;
                  });
              },
              L = 0;
            L < k.fields.length;
            ++L
          )
            R(L);
          O += k.fields.length;
        }
        return l;
      }
      function s(e) {
        var t,
          i,
          n,
          s,
          o,
          r = e.metaInfo(),
          c = { fieldToPlotIndex: [], fieldPlotOffsets: [], fields: [] },
          u = e.id(),
          f = e.title(!1, void 0, !1);
        for (t = 0; t < r.plots.length; ++t) {
          if (
            ((i = r.plots[t]),
            (n = void 0),
            (s = ''),
            Object(d.isLinePlot)(i) ||
              Object(d.isShapesPlot)(i) ||
              Object(d.isCharsPlot)(i) ||
              Object(d.isArrowsPlot)(i))
          )
            n = Object(a.ensureDefined)(r.styles)[i.id];
          else if (Object(d.isOhlcPlot)(i))
            switch (((n = r.ohlcPlots && r.ohlcPlots[i.target]), i.type)) {
              case 'ohlc_open':
                s = ' (' + window.t('Open') + ')';
                break;
              case 'ohlc_high':
                s = ' (' + window.t('High');
                break;
              case 'ohlc_low':
                s = ' (' + window.t('Low') + ')';
                break;
              case 'ohlc_close':
                s = ' (' + window.t('Close') + ')';
            }
          void 0 === n ||
            n.isHidden ||
            void 0 === n.title ||
            ((o = '' + n.title + s),
            c.fields.push(l(u, f, o)),
            c.fieldToPlotIndex.push(t + 1),
            c.fieldPlotOffsets.push(e.offset(i.id)));
        }
        return c;
      }
      function l(e, t, i) {
        return {
          type: 'value',
          sourceType: 'study',
          sourceId: e,
          sourceTitle: t,
          plotTitle: i,
        };
      }
      function o(e) {
        return { type: 'value', sourceType: 'series', plotTitle: e };
      }
      function r(e) {
        return null != e ? e : NaN;
      }
      var a, c, u, d, f;
      i.r(t),
        i.d(t, 'exportData', function () {
          return n;
        }),
        i('YFKU'),
        (a = i('Eyy1')),
        (c = i('ZJKN')),
        (u = i('k9/m')),
        (d = i('23IT')),
        (f = { includeTime: !0, includeSeries: !0, includedStudies: 'all' });
    },
  },
]);
