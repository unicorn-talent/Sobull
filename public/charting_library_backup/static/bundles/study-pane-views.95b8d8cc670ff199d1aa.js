(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-pane-views'],
  {
    psYU: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, d, l;
      i.r(t),
        i.d(t, 'VertLinePaneView', function () {
          return l;
        }),
        (n = i('Eyy1')),
        (r = i('aO4+')),
        (s = i('VdBB')),
        (a = i('Zy3/')),
        (o = i('a7Ha')),
        (d = i('pJOz')),
        (l = (function () {
          function e(e, t, i) {
            (this._data = []),
              (this._invalidated = !0),
              (this._provider = e),
              (this._model = t),
              (this._hitTestResult =
                void 0 !== i
                  ? new s.HitTestResult(s.HitTestResult.CUSTOM, i)
                  : new s.HitTestResult(s.HitTestResult.REGULAR));
          }
          return (
            (e.prototype.update = function () {
              this._invalidated = !0;
            }),
            (e.prototype.renderer = function () {
              var e, t, i, n, r;
              for (
                this._invalidated &&
                  (this._updateViewInternal(), (this._invalidated = !1)),
                  e = new a.CompositeRenderer(),
                  t = 0,
                  i = this._data;
                t < i.length;
                t++
              )
                (n = i[t]),
                  (r = new d.TrendLineRenderer()).setData(n),
                  r.setHitTest(this._hitTestResult),
                  e.append(r);
              return e;
            }),
            (e.prototype._updateViewInternal = function () {
              var e,
                t,
                i,
                s,
                a,
                d,
                l,
                h = this;
              (this._data = []),
                (e = this._provider.priceScale()),
                (t = this._model.timeScale()),
                !e ||
                  e.isEmpty() ||
                  t.isEmpty() ||
                  (0 !== (i = this._provider.graphics().vertlines()).size &&
                    null !==
                      (s = this._model.timeScale().visibleBarsStrictRange()) &&
                    null !== (a = this._provider.firstValue()) &&
                    ((d = s.firstBar()),
                    (l = s.lastBar()),
                    i.forEach(function (i, s) {
                      var p = h._provider.properties().graphics.vertlines[s];
                      p.visible.value() &&
                        i.forEach(function (i) {
                          var s,
                            u,
                            c,
                            v,
                            w,
                            _ = i.index;
                          _ < d ||
                            l < _ ||
                            ((s = t.indexToCoordinate(_) + 1),
                            (u = i.extendBottom
                              ? e.height()
                              : e.priceToCoordinate(
                                  Object(n.ensureDefined)(i.startPrice),
                                  a,
                                )),
                            (c = i.extendTop
                              ? 0
                              : e.priceToCoordinate(
                                  Object(n.ensureDefined)(i.endPrice),
                                  a,
                                )),
                            (v = new r.Point(s, u)),
                            (w = new r.Point(s, c)),
                            h._data.push({
                              points: [v, w],
                              extendleft: i.extendBottom,
                              extendright: i.extendTop,
                              leftend: o.LineEnd.Normal,
                              rightend: o.LineEnd.Normal,
                              width: t.width(),
                              height: e.height(),
                              color: p.color.value(),
                              linewidth: p.width.value(),
                              linestyle: p.style.value(),
                            }));
                        });
                    })));
            }),
            e
          );
        })());
    },
  },
]);
