(window.webpackJsonp = window.webpackJsonp || []).push([
  ['export-data'],
  {
    SIoL: function (e, t, n) {
      'use strict';
      function i(e, t) {
        var n, i, s, d, h, p, w, m, g, v, b, O, x, N, T, y, P, S, I, j, k, R, L;
        for (
          void 0 === t && (t = {}),
            i = Object.assign({}, f, t),
            s = { schema: [], data: [] },
            d = e.timeScale().points(),
            h = e.mainSeries(),
            p = (function (e, t) {
              var n = e.allStudies().filter(function (e) {
                return e.showInObjectTree();
              });
              if ('all' === t) return n;
              return n.filter(function (e) {
                return t.includes(e.id());
              });
            })(e, i.includedStudies),
            w = (function (e, t, n, i) {
              var l, s, o, r, d, f, h, p, w;
              for (
                l = Object(a.ensureNotNull)(
                  void 0 !== n ? e.indexOf(n, !0) : e.firstIndex(),
                ),
                  s = Object(a.ensureNotNull)(
                    void 0 !== i ? e.indexOf(i, !0) : e.lastIndex(),
                  ),
                  o = s,
                  r = l,
                  d = 0,
                  f = t;
                d < f.length;
                d++
              )
                (h = f[d]),
                  null !==
                    (p = h.search(l, c.PlotRowSearchMode.NearestRight)) &&
                    p.index < o &&
                    (o = p.index),
                  null !== (w = h.search(s, c.PlotRowSearchMode.NearestLeft)) &&
                    w.index > r &&
                    (r = w.index);
              return (
                Object(a.assert)(
                  o <= r,
                  'Range must contain at least 1 time point',
                ),
                new u.BarsRange(o, r)
              );
            })(d, [h.bars()], i.from, i.to),
            m = w.firstBar(),
            g = w.lastBar(),
            i.includeTime && s.schema.push({ type: 'time' }),
            v = s.schema.length,
            i.includeSeries &&
              (s.schema.push(o('open')),
              s.schema.push(o('high')),
              s.schema.push(o('low')),
              s.schema.push(o('close'))),
            b = s.schema.length,
            O = [],
            x = 0,
            N = p;
          x < N.length;
          x++
        )
          (y = l((T = N[x]))),
            O.push(y),
            (n = s.schema).push.apply(n, y.fields);
        if (0 === (P = s.schema.length)) return s;
        for (S = m; S <= g; ++S)
          (I = new Float64Array(P)).fill(NaN), s.data.push(I);
        if (i.includeTime)
          for (S = m; S <= g; ++S)
            s.data[S - m][0] = Object(a.ensureNotNull)(d.valueAt(S));
        for (
          i.includeSeries &&
            h
              .bars()
              .range(m, g)
              .each(function (e, t) {
                var n = s.data[e - m];
                return (
                  (n[v] = r(t[1])),
                  (n[v + 1] = r(t[2])),
                  (n[v + 2] = r(t[3])),
                  (n[v + 3] = r(t[4])),
                  !1
                );
              }),
            j = 0;
          j < p.length;
          ++j
        ) {
          for (
            T = p[j],
              k = O[j],
              R = function (e) {
                var t = k.fieldPlotOffsets[e],
                  n = k.fieldToPlotIndex[e],
                  i = m - t,
                  l = g - t,
                  o = b + e;
                T.data()
                  .range(i, l)
                  .each(function (e, t) {
                    return (s.data[e - i][o] = r(t[n])), !1;
                  });
              },
              L = 0;
            L < k.fields.length;
            ++L
          )
            R(L);
          b += k.fields.length;
        }
        return s;
      }
      function l(e) {
        var t,
          n,
          i,
          l,
          o,
          r = e.metaInfo(),
          u = { fieldToPlotIndex: [], fieldPlotOffsets: [], fields: [] },
          c = e.id(),
          f = e.title(!1, void 0, !1);
        for (t = 0; t < r.plots.length; ++t) {
          if (
            ((n = r.plots[t]), (i = void 0), (l = ''), Object(d.isLinePlot)(n))
          )
            i = Object(a.ensureDefined)(r.styles)[n.id];
          else if (Object(d.isOhlcPlot)(n))
            switch (((i = r.ohlcPlots && r.ohlcPlots[n.target]), n.type)) {
              case 'ohlc_open':
                l = ' (' + window.t('Open') + ')';
                break;
              case 'ohlc_high':
                l = ' (' + window.t('High');
                break;
              case 'ohlc_low':
                l = ' (' + window.t('Low') + ')';
                break;
              case 'ohlc_close':
                l = ' (' + window.t('Close') + ')';
            }
          void 0 === i ||
            i.isHidden ||
            void 0 === i.title ||
            ((o = '' + i.title + l),
            u.fields.push(s(c, f, o)),
            u.fieldToPlotIndex.push(t + 1),
            u.fieldPlotOffsets.push(e.offset(n.id)));
        }
        return u;
      }
      function s(e, t, n) {
        return {
          type: 'value',
          sourceType: 'study',
          sourceId: e,
          sourceTitle: t,
          plotTitle: n,
        };
      }
      function o(e) {
        return { type: 'value', sourceType: 'series', plotTitle: e };
      }
      function r(e) {
        return null != e ? e : NaN;
      }
      var a, u, c, d, f;
      n.r(t),
        n.d(t, 'exportData', function () {
          return i;
        }),
        n('YFKU'),
        (a = n('Eyy1')),
        (u = n('ZJKN')),
        (c = n('k9/m')),
        (d = n('23IT')),
        (f = { includeTime: !0, includeSeries: !0, includedStudies: 'all' });
    },
  },
]);
