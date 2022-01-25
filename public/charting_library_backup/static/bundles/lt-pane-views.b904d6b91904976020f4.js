(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-pane-views'],
  {
    '/S7V': function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l, h;
      i.r(t),
        i.d(t, 'TriangleRenderer', function () {
          return h;
        }),
        (n = i('GEp6')),
        (r = i('f6yo')),
        (s = i('qFKp')),
        (a = i('VdBB')),
        (o = i('Tmoa')),
        (l = i('jFln')),
        (h = (function () {
          function e() {
            this._data = null;
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.draw = function (e) {
              var t, i, n, r;
              null === this._data ||
                this._data.points.length < 2 ||
                ((e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                void 0 !== this._data.linestyle &&
                  Object(l.setLineStyle)(e, this._data.linestyle),
                (i = (t = this._data.points)[0]),
                (n = t[1]),
                (r = 2 === this._data.points.length ? n : this._data.points[2]),
                e.beginPath(),
                e.moveTo(i.x, i.y),
                e.lineTo(n.x, n.y),
                e.lineTo(r.x, r.y),
                e.lineTo(i.x, i.y),
                this._data.fillBackground &&
                  ((e.fillStyle = Object(o.generateColor)(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.fill()),
                e.stroke());
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, o, l, h, d;
              return null === this._data || this._data.points.length < 2
                ? null
                : ((i = (t = this._data.points)[0]),
                  (o = t[1]),
                  (l = Object(n.distanceToSegment)(i, o, e)),
                  (h = s.CheckMobile.any() ? 24 : 3),
                  l.distance <= h
                    ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                    : 3 !== this._data.points.length
                    ? null
                    : ((d = this._data.points[2]),
                      (l = Object(n.distanceToSegment)(o, d, e)).distance <= h
                        ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                        : (l = Object(n.distanceToSegment)(d, i, e)).distance <=
                          h
                        ? new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                        : this._data.fillBackground &&
                          Object(r.pointInTriangle)(i, o, d, e)
                        ? new a.HitTestResult(
                            a.HitTestResult.MOVEPOINT_BACKGROUND,
                          )
                        : null));
            }),
            e
          );
        })());
    },
    '00XE': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._model = t),
          (this._source = e),
          (this._poligonRenderer = new a());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('BCbF').PolygonRenderer,
        o = i('1mZ4').SelectionRenderer,
        l = i('Zy3/').CompositeRenderer;
      inherit(n, s),
        (n.prototype._smoothArray = function (e, t) {
          var i,
            n,
            s,
            a,
            o,
            l = new Array(e.length);
          for (i = 0; i < e.length; i++) {
            for (n = new r(0, 0), s = 0; s < t; s++)
              (a = Math.max(i - s, 0)),
                (o = Math.min(i + s, e.length - 1)),
                (n = (n = n.add(e[a])).add(e[o]));
            l[i] = n.scaled(0.5 / t);
          }
          return l.push(e[e.length - 1]), l;
        }),
        (n.prototype._updateInternal = function () {
          var e, t, i, n, r, a, o, l, h;
          if (
            (s.prototype._updateImpl.call(this),
            (e = Math.max(1, this._source.properties().smooth.value())),
            0 !== (t = this._points).length)
          ) {
            for (i = [t[0]], n = 1; n < t.length; n++) {
              for (
                a = (r = t[n].subtract(t[n - 1])).length(),
                  o = Math.min(5, Math.floor(a / e)),
                  l = r.normalized().scaled(a / o),
                  h = 0;
                h < o - 1;
                h++
              )
                i.push(t[n - 1].add(l.scaled(h)));
              i.push(t[n]);
            }
            this._points = this._smoothArray(i, e);
          }
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a;
          return (
            this._invalidated && this._updateInternal(),
            (n = {}),
            (r = this._source.properties()),
            (n.points = this._points),
            (n.color = r.linecolor.value()),
            (n.linewidth = r.linewidth.value()),
            (n.linestyle = r.linestyle.value()),
            (n.skipClosePath = !0),
            (n.leftend = this._source.properties().leftEnd.value()),
            (n.rightend = this._source.properties().rightEnd.value()),
            r.fillBackground.value() &&
              this._model.lineBeingCreated() !== this._source &&
              ((n.filled = !0),
              (n.fillBackground = !0),
              (n.backcolor = r.backgroundColor.value()),
              (n.transparency = r.transparency.value())),
            this._poligonRenderer.setData(n),
            i && this._source.finished()
              ? ((s = new l()).append(this._poligonRenderer),
                n.points.length > 0 &&
                  ((a = [n.points[0], n.points[n.points.length - 1]]),
                  s.append(
                    new o({
                      points: a,
                      bgColor: this._model.backgroundColor(),
                    }),
                  )),
                s)
              : this._poligonRenderer
          );
        }),
        (t.BrushPaneView = n);
    },
    '1SUO': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._levels = []),
          (this._baseTrendRenderer = new a()),
          (this._edgeTrendRenderer = new a());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('loH8'),
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('isd9').ArcWedgeRenderer,
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, a, o, l, h, d, c, p, _, u, f, g, v, w, y;
          if (
            (s.prototype._updateImpl.call(this),
            (this._cacheState = this._source
              .getCache()
              .updateSource(this._source)),
            (this._levels = []),
            !(this._points.length < 3))
          )
            for (
              t = (e = this._points)[0],
                i = e[1],
                n = e[2],
                a = i.subtract(t).normalized(),
                o = n.subtract(t).normalized(),
                l = new r(1, 0),
                h = new r(0, 1),
                d = Math.acos(a.dotProduct(l)),
                a.dotProduct(h) < 0 && (d = 2 * Math.PI - d),
                this._edge1 = d,
                c = Math.acos(o.dotProduct(l)),
                o.dotProduct(h) < 0 && (c = 2 * Math.PI - c),
                this._edge2 = c,
                d < c &&
                  ((this._edge1 = Math.max(d, c)),
                  (this._edge2 = Math.min(d, c) + 2 * Math.PI)),
                Math.abs(d - c) > Math.PI &&
                  ((this._edge1 = Math.min(d, c)),
                  (this._edge2 = Math.max(d, c) - 2 * Math.PI)),
                p = this._source.properties(),
                _ = 1;
              _ <= this._source.getCache().levelsCount();
              _++
            )
              (u = p['level' + _]).visible.value() &&
                ((f = u.coeff.value()),
                (g = u.color.value()),
                (v = i.subtract(t).length() * f),
                (w = a.add(o).scaled(0.5).normalized().scaled(v)),
                (y = t.add(w)),
                this._levels.push({
                  coeff: f,
                  color: g,
                  radius: v,
                  labelPoint: y,
                  p1: t.add(a.scaled(v)),
                  p2: t.add(o.scaled(v)),
                  linewidth: u.linewidth.value(),
                  linestyle: u.linestyle.value(),
                  index: _,
                }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, p, _, u, f, g, v, w, y, m, x, b, R, S, T, P, L;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new h()),
            this._points.length < 2)
          )
            return n;
          if (
            ((r = this._source.properties()),
            (_ = {
              points: [(a = (s = this._points)[0]), (p = s[1])],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: r.trendline.color.value(),
              linewidth: r.trendline.visible.value()
                ? r.trendline.linewidth.value()
                : 0,
              linestyle: r.trendline.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: c.Normal,
              rightend: c.Normal,
            }),
            this._baseTrendRenderer.setData(_),
            n.append(this._baseTrendRenderer),
            this._points.length < 3)
          )
            return this.addAnchors(n), n;
          for (
            f = (u = s[2]).data,
              g = p.subtract(a).length(),
              v = u.subtract(a).normalized(),
              (u = a.add(v.scaled(g))).data = f,
              _ = {
                points: [a, u],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: r.trendline.color.value(),
                linewidth: r.trendline.visible.value()
                  ? r.trendline.linewidth.value()
                  : 0,
                linestyle: r.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              },
              this._edgeTrendRenderer.setData(_),
              n.append(this._edgeTrendRenderer),
              y = (w = this._model._fibWedgeLabelsCache).canvas(),
              m = this._levels.length - 1;
            m >= 0;
            m--
          )
            if (
              ((x = this._levels[m]),
              ((b = {}).center = this._points[0]),
              (b.radius = x.radius),
              (b.prevRadius = m > 0 ? this._levels[m - 1].radius : 0),
              (b.edge = this._edge),
              (b.color = x.color),
              (b.linewidth = x.linewidth),
              (b.edge1 = this._edge1),
              (b.edge2 = this._edge2),
              (b.p1 = x.p1),
              (b.p2 = x.p2),
              (b.fillBackground = r.fillBackground.value()),
              (b.transparency = r.transparency.value()),
              (R = new d()).setData(b),
              R.setHitTest(new l(l.MOVEPOINT, null, x.index)),
              n.append(R),
              r.showCoeffs.value())
            ) {
              if (
                !(S = this._cacheState.preparedCells.cells[
                  this._levels[m].index - 1
                ])
              )
                continue;
              (T = {
                left: S.left,
                top: w.topByRow(this._cacheState.row),
                width: S.width,
                height: w.rowHeight(this._cacheState.row),
              }),
                (P = {
                  left: Math.round(x.labelPoint.x - T.width),
                  top: Math.round(x.labelPoint.y - T.height / 2),
                  width: S.width,
                  height: T.height,
                }),
                (L = new o(y, T, P)),
                n.append(L);
            }
          return (
            i &&
              ((s = [a, p]),
              this._model.lineBeingCreated() !== this._source && s.push(u),
              n.append(this.createLineAnchor({ points: s }))),
            n
          );
        }),
        (t.FibWedgePaneView = n);
    },
    '1oDZ': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        s.call(this, e, t),
          (this._renderer = new n()),
          (this._labelRenderer = new a({}));
      }
      var s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer;
      i('MMac').PaneRendererClockIcon;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r;
          if (null === this._data || 0 === this._data.points.length)
            return null;
          (t = e.canvas.width),
            (i = this._data.points[0].y),
            (n = Math.max(0, this._data.points[0].x)),
            (r = Math.max(t, this._data.points[0].x)),
            (e.lineCap = 'square'),
            (e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            (e.lineStyle = this._data.linestyle),
            CanvasEx.drawLine(e, n, i, r, i);
        }),
        (n.prototype.hitTest = function (e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          if (e.x < this._data.points[0].x) return null;
          return Math.abs(e.y - this._data.points[0].y) <= 3
            ? new o(this._data.hitTestResult)
            : null;
        }),
        inherit(r, s),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s, a, h, d, c, p, _;
          return (
            this._invalidated && this._updateImpl(),
            (n = new l()),
            ((r = {}).points = this._points),
            (r.color = this._source.properties().linecolor.value()),
            (r.linewidth = this._source.properties().linewidth.value()),
            (r.linestyle = this._source.properties().linestyle.value()),
            (r.hitTestResult = o.MOVEPOINT),
            (s = this._source.properties()),
            this._renderer.setData(r),
            n.append(this._renderer),
            this._source.properties().showLabel.value() &&
              1 === this._points.length &&
              ((a = s.vertLabelsAlign.value()),
              (h = s.horzLabelsAlign.value()),
              (d = this._points[0].clone()),
              (c = 0),
              (p = 0),
              'right' === h
                ? ((d.x = this._model.timeScale().width()), (p = -5))
                : 'center' === h &&
                  (d.x = (d.x + this._model.timeScale().width()) / 2),
              'middle' === a
                ? (c = -this._source.properties().fontsize.value() / 6)
                : 'bottom' === a && (c = -4),
              (_ = {
                points: [d],
                text: s.text.value(),
                color: s.textcolor.value(),
                vertAlign: a,
                horzAlign: h,
                font: s.font.value(),
                offsetX: p,
                offsetY: c,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                forceTextAlign: !0,
              }),
              this._labelRenderer.setData(_),
              n.append(this._labelRenderer)),
            i && this.addAnchors(n),
            n
          );
        }),
        (t.HorzRayPaneView = r);
    },
    '2hKl': function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        var r,
          s,
          a,
          o,
          l = i.subtract(e).length() + i.subtract(t).length(),
          h = 3 / l,
          d = 5;
        for (r = 0; r <= 1; r += h)
          if (
            ((s = e.scaled((1 - r) * (1 - r))),
            (a = i.scaled(2 * r * (1 - r))),
            (o = t.scaled(r * r)),
            s.add(a).add(o).subtract(n).length() < d)
          )
            return !0;
        return !1;
      }
      function r(e, t, i, n, r) {
        var s,
          a,
          o,
          l,
          h,
          d =
            i.subtract(e).length() +
            n.subtract(i).length() +
            t.subtract(n).length(),
          c = 3 / d,
          p = 5;
        for (s = 0; s <= 1; s += c)
          if (
            ((a = e.scaled((1 - s) * (1 - s) * (1 - s))),
            (o = i.scaled(3 * (1 - s) * (1 - s) * s)),
            (l = n.scaled(3 * (1 - s) * s * s)),
            (h = t.scaled(s * s * s)),
            a.add(o).add(l).add(h).subtract(r).length() < p)
          )
            return !0;
        return !1;
      }
      function s(e, t, i, n, r) {
        var s,
          a,
          o,
          l,
          h,
          d,
          c,
          p,
          _ = i.subtract(e).length() + i.subtract(t).length();
        if (!_) return [];
        for (s = 3 / _, a = 500, o = [], l = 1; l <= a * s; l += s)
          (h = e.scaled((1 - l) * (1 - l))),
            (d = i.scaled(2 * l * (1 - l))),
            (c = t.scaled(l * l)),
            (p = h.add(d).add(c)),
            o.length > 0 &&
              o[o.length - 1].subtract(p).length() < 2 &&
              (s *= 2),
            o.push(p);
        return o;
      }
      i.r(t),
        i.d(t, 'quadroBezierHitTest', function () {
          return n;
        }),
        i.d(t, 'cubicBezierHitTest', function () {
          return r;
        }),
        i.d(t, 'extendQuadroBezier', function () {
          return s;
        });
    },
    '2trc': function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        var r = Object(s.equalPoints)(i, n[0])
          ? Object(s.equalPoints)(i, n[1])
            ? null
            : n[1]
          : n[0];
        return null !== e && null !== r
          ? Object(l.intersectPolygonAndHalfplane)(
              e,
              Object(s.halfplaneThroughPoint)(
                Object(s.lineThroughPoints)(t, i),
                r,
              ),
            )
          : null;
      }
      var r, s, a, o, l, h, d, c;
      i.r(t),
        i.d(t, 'ChannelRenderer', function () {
          return c;
        }),
        (r = i('Eyy1')),
        (s = i('aO4+')),
        (a = i('f6yo')),
        (o = i('GEp6')),
        (l = i('hBTJ')),
        (h = i('VdBB')),
        (d = i('Tmoa')),
        (c = (function () {
          function e() {
            this._data = null;
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.draw = function (e) {
              var t, i;
              if (
                null !== this._data &&
                null !== (t = this._visiblePolygon())
              ) {
                for (
                  e.beginPath(), e.moveTo(t[0].x, t[0].y), i = 1;
                  i < t.length;
                  i++
                )
                  e.lineTo(t[i].x, t[i].y);
                (e.fillStyle = Object(d.generateColor)(
                  this._data.color,
                  this._data.transparency,
                  !0,
                )),
                  e.fill();
              }
            }),
            (e.prototype.hitTest = function (e) {
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              var t = this._visiblePolygon();
              return null !== t && Object(a.pointInPolygon)(e, t)
                ? new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND)
                : null;
            }),
            (e.prototype._visiblePolygon = function () {
              var e,
                t = Object(r.ensureNotNull)(this._data),
                i = t.p1,
                a = t.p2,
                l = t.p3,
                h = t.p4;
              return Object(s.equalPoints)(i, a) ||
                Object(s.equalPoints)(l, h) ||
                (Object(o.distanceToLine)(i, a, l).distance < 1e-6 &&
                  Object(o.distanceToLine)(i, a, h).distance < 1e-6)
                ? null
                : t.width <= 0 || t.height <= 0
                ? null
                : ((e = n(
                    (e = n(
                      (e = [
                        new s.Point(0, 0),
                        new s.Point(t.width, 0),
                        new s.Point(t.width, t.height),
                        new s.Point(0, t.height),
                      ]),
                      i,
                      a,
                      [h, l],
                    )),
                    h,
                    l,
                    [i, a],
                  )),
                  Object(s.equalPoints)(l, i) || (e = n(e, l, i, [a, h])),
                  e);
            }),
            e
          );
        })());
    },
    '3xLB': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._leftBorderRenderer = new h()),
          (this._rightBorderRenderer = new h()),
          (this._distancePriceRenderer = new h()),
          (this._backgroundRenderer = new l()),
          (this._textRenderer = new a({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('qgcf').calculateLabelPosition,
        l = i('IjC5').RectangleRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('Zy3/').CompositeRenderer,
        c = i('nda6').TimeSpanFormatter,
        p = i('a7Ha').LineEnd,
        _ = i('Ialn'),
        u = _.forceLTRStr,
        f = _.startWithLTR;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            a,
            l,
            h,
            _,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M,
            A;
          return (
            this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2 || this._source.points().length < 2
              ? n
              : ((a = (s = this._source.properties()).extendTop.value()),
                (l = s.extendBottom.value()),
                (h = this._points[0]),
                (_ = this._points[1]),
                (g = a ? 0 : Math.min(h.y, _.y)),
                (v = l ? e : Math.max(h.y, _.y)),
                s.fillBackground &&
                  s.fillBackground.value() &&
                  (((w = {}).points = [new r(h.x, g), new r(_.x, v)]),
                  (w.color = 'white'),
                  (w.linewidth = 0),
                  (w.backcolor = s.backgroundColor.value()),
                  (w.fillBackground = !0),
                  (w.transparency = s.backgroundTransparency.value()),
                  this._backgroundRenderer.setData(w),
                  n.append(this._backgroundRenderer)),
                (y = this),
                (m = function (e, t, i) {
                  var r = {};
                  (r.points = [t, i]),
                    (r.width = y._model.timeScale().width()),
                    (r.height = y._source.priceScale().height()),
                    (r.color = y._source.properties().linecolor.value()),
                    (r.linewidth = y._source.properties().linewidth.value()),
                    (r.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (r.extendleft = !1),
                    (r.extendright = !1),
                    (r.leftend = p.Normal),
                    (r.rightend = p.Normal),
                    e.setData(r),
                    n.append(e);
                })(this._leftBorderRenderer, new r(h.x, g), new r(h.x, v)),
                m(this._rightBorderRenderer, new r(_.x, g), new r(_.x, v)),
                (x = Math.round((h.y + _.y) / 2)),
                (b = new r(h.x, x)),
                (R = new r(_.x, x)),
                ((w = {}).points = [b, R]),
                (w.width = y._model.timeScale().width()),
                (w.height = y._source.priceScale().height()),
                (w.color = y._source.properties().linecolor.value()),
                (w.linewidth = y._source.properties().linewidth.value()),
                (w.linestyle = CanvasEx.LINESTYLE_SOLID),
                (w.extendleft = !1),
                (w.extendright = !1),
                (w.leftend = p.Normal),
                (w.rightend = p.Arrow),
                this._distancePriceRenderer.setData(w),
                n.append(this._distancePriceRenderer),
                (S = this._source.points()[0].index),
                (P = (T = this._source.points()[1].index) - S),
                (L = this._model.timeScale().indexToUserTime(S)),
                (C = this._model.timeScale().indexToUserTime(T)),
                (B = ''),
                L &&
                  C &&
                  ((k = (C.valueOf() - L.valueOf()) / 1e3),
                  (B = ', ' + f(new c().format(k)))),
                (O = window.t('{0} bars').format(u(P)) + B),
                (I = { x: 0, y: 10 }),
                ((w = {}).text = O),
                (w.color = s.textcolor.value()),
                (w.height = y._source.priceScale().height()),
                (w.font = s.font.value()),
                (w.offsetX = I.x),
                (w.offsetY = I.y),
                (w.vertAlign = 'middle'),
                (w.horzAlign = 'center'),
                (w.fontsize = s.fontsize.value()),
                (w.backgroundRoundRect = 4),
                (w.backgroundHorzInflate = 0.4 * s.fontsize.value()),
                (w.backgroundVertInflate = 0.2 * s.fontsize.value()),
                s.fillLabelBackground &&
                  s.fillLabelBackground.value() &&
                  (w.backgroundColor = s.labelBackgroundColor.value()),
                s.drawBorder &&
                  s.drawBorder.value() &&
                  (w.borderColor = s.borderColor.value()),
                this._textRenderer.setData(w),
                (M = this._textRenderer.measure()),
                (A = o(M, h, _, I, y._source.priceScale().height())),
                this._textRenderer.setPoints([A]),
                n.append(this._textRenderer),
                n.append(this._textRenderer),
                i && this.addAnchors(n),
                n)
          );
        }),
        (t.DateRangePaneView = n);
    },
    '4Ptp': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        a.call(this, e, t), (this._renderer = new n());
      }
      var s = i('GEp6').distanceToSegment,
        a = i('aB9a').LineSourcePaneView,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('Tmoa'),
        c = i('a7Ha').LineEnd,
        p = i('2hKl');
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, l, h, p;
          if (null !== this._data)
            if (
              ((t = this._data.points[0]),
              (i = this._data.points[1]),
              (e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              CanvasEx.setLineStyle(e, this._data.linestyle),
              2 === this._data.points.length)
            )
              e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(i.x, i.y), e.stroke();
            else {
              if (
                ((n = this._data.points[2]),
                (r = i.subtract(t)),
                (s = n.subtract(r.scaled(0.25))),
                (a = n.add(r.scaled(0.25))),
                this._data.fillBack &&
                  this._data.points.length > 2 &&
                  ((e.fillStyle = d.generateColor(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.beginPath(),
                  e.moveTo(t.x, t.y),
                  e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                  e.quadraticCurveTo(a.x, a.y, i.x, i.y),
                  e.fill()),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                this._data.extendLeftPoints.length > 0)
              )
                for (
                  l = this._data.extendLeftPoints[
                    this._data.extendLeftPoints.length - 1
                  ],
                    e.moveTo(l.x, l.y),
                    h = this._data.extendLeftPoints.length - 2;
                  h >= 0;
                  h--
                )
                  (p = this._data.extendLeftPoints[h]), e.lineTo(p.x, p.y);
              for (
                e.quadraticCurveTo(s.x, s.y, n.x, n.y),
                  e.quadraticCurveTo(a.x, a.y, i.x, i.y),
                  h = 0;
                h < this._data.extendRightPoints.length;
                h++
              )
                (p = this._data.extendRightPoints[h]), e.lineTo(p.x, p.y);
              e.stroke(),
                this._data.leftend === c.Arrow &&
                  o.prototype.drawArrow(s, t, e, e.lineWidth),
                this._data.rightend === c.Arrow &&
                  o.prototype.drawArrow(a, i, e, e.lineWidth);
            }
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, a, o, h, d;
          if (null !== this._data && 3 === this._data.points.length) {
            if (
              ((t = this._data.points[0]),
              (i = this._data.points[1]),
              (n = this._data.points[2]),
              (r = i.subtract(t)),
              (a = n.subtract(r.scaled(0.25))),
              (o = n.add(r.scaled(0.25))),
              p.quadroBezierHitTest(n, t, a, e) ||
                p.quadroBezierHitTest(n, i, o, e))
            )
              return new l(l.MOVEPOINT);
            for (h = 3, d = 1; d < this._data.extendLeftPoints.length; d++)
              if (
                ((t = this._data.extendLeftPoints[d - 1]),
                (i = this._data.extendLeftPoints[d]),
                s(t, i, e).distance < h)
              )
                return new l(l.MOVEPOINT);
            for (d = 1; d < this._data.extendRightPoints.length; d++)
              if (
                ((t = this._data.extendRightPoints[d - 1]),
                (i = this._data.extendRightPoints[d]),
                s(t, i, e).distance < h)
              )
                return new l(l.MOVEPOINT);
          }
          return null;
        }),
        inherit(r, a),
        (r.prototype._updateImpl = function () {
          var e, t, i, n, r, s, o, l;
          a.prototype._updateImpl.call(this),
            (this._extendLeftPoints = []),
            (this._extendRightPoints = []),
            this._source.points().length < 3 ||
              ((e = this._source.pointToScreenPoint(
                this._source.points()[0],
              )[1]),
              (t = this._source.pointToScreenPoint(
                this._source.points()[1],
              )[1]),
              (i = this._source.pointToScreenPoint(
                this._source.points()[2],
              )[1]),
              (n = t.subtract(e)),
              (r = i.subtract(n.scaled(0.25))),
              (s = i.add(n.scaled(0.25))),
              (o = this._model.timeScale().width()),
              (l = this._source.priceScale().height()),
              this._source.properties().extendLeft.value() &&
                (this._extendLeftPoints = p.extendQuadroBezier(i, e, r, o, l)),
              this._source.properties().extendRight.value() &&
                (this._extendRightPoints = p.extendQuadroBezier(
                  i,
                  t,
                  s,
                  o,
                  l,
                )));
        }),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s, a;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? new h()
              : ((n = [].concat(this._points)),
                this._source._controlPoint &&
                  n.push(
                    this._source.pointToScreenPoint(
                      this._source._controlPoint,
                    )[0],
                  ),
                (r = {}),
                (s = this._source.properties()),
                (r.points = n),
                (r.color = s.linecolor.value()),
                (r.linewidth = s.linewidth.value()),
                (r.linestyle = s.linestyle.value()),
                (r.leftend = s.leftEnd.value()),
                (r.rightend = s.rightEnd.value()),
                (r.fillBack = s.fillBackground.value()),
                (r.backcolor = s.backgroundColor.value()),
                (r.transparency = s.transparency.value()),
                (r.extendLeftPoints = this._extendLeftPoints),
                (r.extendRightPoints = this._extendRightPoints),
                this._renderer.setData(r),
                (a = new h()).append(this._renderer),
                i && this.addAnchors(a),
                a)
          );
        }),
        (t.BezierQuadroPaneView = r);
    },
    '5Dp4': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t, i, r, s, a, o) {
        h.call(this, e, t),
          (this._image = i),
          (this._offsetX = a || 0),
          (this._offsetY = o || 0),
          (this._width = r),
          (this._height = s),
          (this._invalidated = !0),
          (this._marksRenderer = new n());
      }
      var s = i('aO4+'),
        a = s.Point,
        o = s.box,
        l = i('f6yo').pointInBox,
        h = i('aB9a').LineSourcePaneView,
        d = i('VdBB').HitTestResult,
        c = i('1mZ4').SelectionRenderer,
        p = i('Zy3/').CompositeRenderer;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i;
          null !== this._data &&
            0 !== this._data.points.length &&
            ((t = this._data.points[0].x + this._data.offsetX),
            (i = this._data.points[0].y + this._data.offsetY),
            e.translate(-0.5, -0.5),
            e.drawImage(
              this._data.image,
              t,
              i,
              this._data.width,
              this._data.height,
            ));
        }),
        (n.prototype.hitTest = function (e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          var t = this._data.points[0].clone();
          return (
            this._data.offsetX && (t.x += this._data.offsetX),
            this._data.offsetY && (t.y += this._data.offsetY),
            l(e, o(t, t.add(new a(this._data.width, this._data.height))))
              ? new d(d.MOVEPOINT)
              : null
          );
        }),
        (n.prototype.doesIntersectWithBox = function (e) {
          return 0 === this._data.points.length
            ? null
            : l(this._data.points[0], e);
        }),
        inherit(r, h),
        (r.prototype.setAnchors = function (e) {
          this._anchorsOffset = e;
        }),
        (r.prototype.renderer = function () {
          var e, t, i, n, r;
          if (
            (this._invalidated && this._updateImpl(),
            ((e = {}).points = this._points),
            (e.color = this._source.properties().color.value()),
            (e.image = this._image),
            (e.offsetX = this._offsetX),
            (e.offsetY = this._offsetY),
            (e.width = this._width),
            (e.height = this._height),
            this._marksRenderer.setData(e),
            this.isAnchorsRequired() && 1 === e.points.length)
          ) {
            if (
              ((t = this._getModel()),
              (i = new p()).append(this._marksRenderer),
              this._anchorsOffset)
            ) {
              for (n = [], r = 0; r < e.points.length; r++)
                n.push(e.points[r].clone().add(this._anchorsOffset));
              i.append(new c({ points: n, bgColor: t.backgroundColor() }));
            } else
              i.append(
                new c({ points: e.points, bgColor: t.backgroundColor() }),
              );
            return i;
          }
          return this._marksRenderer;
        }),
        (t.MarkPaneView = r);
    },
    '6MfG': function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new h()),
          (this._bcRetracementTrend = new s()),
          (this._xdRetracementTrend = new s()),
          (this._mainTriangleRenderer = new a()),
          (this._triangleRendererPoints234 = new a()),
          (this._abLabelRenderer = new o({})),
          (this._bcLabelRenderer = new o({})),
          (this._cdLabelRenderer = new o({})),
          (this._xdLabelRenderer = new o({})),
          (this._textRendererALabel = new o({})),
          (this._textRendererBLabel = new o({})),
          (this._textRendererCLabel = new o({})),
          (this._textRendererDLabel = new o({})),
          (this._textRendererXLabel = new o({}));
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('pJOz').TrendLineRenderer,
        a = i('/S7V').TriangleRenderer,
        o = i('qgcf').TextRenderer,
        l = i('Zy3/').CompositeRenderer,
        h = i('zXvd').NumericFormatter,
        d = i('a7Ha').LineEnd;
      inherit(n, r),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, h, c, p, _, u;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? null
              : ((n = this._source.properties()),
                (r = new l()),
                (s = [
                  this._points[0],
                  this._points[1],
                  this._points.length < 3 ? this._points[1] : this._points[2],
                ]),
                (a = this),
                (o = function (e, t) {
                  return {
                    points: [e],
                    text: t,
                    color: n.textcolor.value(),
                    vertAlign: 'middle',
                    horzAlign: 'center',
                    font: n.font.value(),
                    offsetX: 0,
                    offsetY: 0,
                    bold: n.bold && n.bold.value(),
                    italic: n.italic && n.italic.value(),
                    fontsize: n.fontsize.value(),
                    backgroundColor: a._source.properties().color.value(),
                    backgroundRoundRect: 4,
                  };
                }),
                (h = function (e, t) {
                  return {
                    points: [e, t],
                    width: a._model.timeScale().width(),
                    height: a._source.priceScale().height(),
                    color: a._source.properties().color.value(),
                    linewidth: 1,
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: d.Normal,
                    rightend: d.Normal,
                  };
                }),
                ((c = {}).points = s),
                (c.color = n.color.value()),
                (c.linewidth = n.linewidth.value()),
                (c.backcolor = n.backgroundColor.value()),
                (c.fillBackground = n.fillBackground.value()),
                (c.transparency = n.transparency.value()),
                this._mainTriangleRenderer.setData(c),
                r.append(this._mainTriangleRenderer),
                this._points.length > 3 &&
                  ((s = [
                    this._points[2],
                    this._points[3],
                    5 === this._points.length
                      ? this._points[4]
                      : this._points[3],
                  ]),
                  ((c = {}).points = s),
                  (c.color = n.color.value()),
                  (c.linewidth = n.linewidth.value()),
                  (c.backcolor = n.backgroundColor.value()),
                  (c.fillBackground = n.fillBackground.value()),
                  (c.transparency = n.transparency.value()),
                  this._triangleRendererPoints234.setData(c),
                  r.append(this._triangleRendererPoints234)),
                this._points.length >= 3 &&
                  ((_ = o(
                    (p = this._points[0].add(this._points[2]).scaled(0.5)),
                    this._numericFormatter.format(this._ABRetracement),
                  )),
                  this._abLabelRenderer.setData(_),
                  r.append(this._abLabelRenderer)),
                this._points.length >= 4 &&
                  ((p = this._points[1].add(this._points[3]).scaled(0.5)),
                  (u = h(this._points[1], this._points[3])),
                  this._bcRetracementTrend.setData(u),
                  r.append(this._bcRetracementTrend),
                  (_ = o(
                    p,
                    this._numericFormatter.format(this._BCRetracement),
                  )),
                  this._bcLabelRenderer.setData(_),
                  r.append(this._bcLabelRenderer)),
                this._points.length >= 5 &&
                  ((_ = o(
                    (p = this._points[2].add(this._points[4]).scaled(0.5)),
                    this._numericFormatter.format(this._CDRetracement),
                  )),
                  this._cdLabelRenderer.setData(_),
                  r.append(this._cdLabelRenderer),
                  (u = h(this._points[0], this._points[4])),
                  this._xdRetracementTrend.setData(u),
                  r.append(this._xdRetracementTrend),
                  (_ = o(
                    (p = this._points[0].add(this._points[4]).scaled(0.5)),
                    this._numericFormatter.format(this._XDRetracement),
                  )),
                  this._xdLabelRenderer.setData(_),
                  r.append(this._xdLabelRenderer)),
                (_ = o(this._points[0], 'X')),
                this._points[1].y > this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._textRendererXLabel.setData(_),
                r.append(this._textRendererXLabel),
                (_ = o(this._points[1], 'A')),
                this._points[1].y < this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._textRendererALabel.setData(_),
                r.append(this._textRendererALabel),
                this._points.length > 2 &&
                  ((_ = o(this._points[2], 'B')),
                  this._points[2].y < this._points[1].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererBLabel.setData(_),
                  r.append(this._textRendererBLabel)),
                this._points.length > 3 &&
                  ((_ = o(this._points[3], 'C')),
                  this._points[3].y < this._points[2].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererCLabel.setData(_),
                  r.append(this._textRendererCLabel)),
                this._points.length > 4 &&
                  ((_ = o(this._points[4], 'D')),
                  this._points[4].y < this._points[3].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererDLabel.setData(_),
                  r.append(this._textRendererDLabel)),
                i && this.addAnchors(r),
                r)
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s;
          r.prototype._updateImpl.call(this),
            this._source.points().length >= 3 &&
              ((e = this._source.points()[0]),
              (t = this._source.points()[1]),
              (i = this._source.points()[2]),
              (this._ABRetracement =
                Math.round(
                  1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
                ) / 1e3)),
            this._source.points().length >= 4 &&
              ((n = this._source.points()[3]),
              (this._BCRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - i.price) / (i.price - t.price)),
                ) / 1e3)),
            this._source.points().length >= 5 &&
              ((s = this._source.points()[4]),
              (this._CDRetracement =
                Math.round(
                  1e3 * Math.abs((s.price - n.price) / (n.price - i.price)),
                ) / 1e3),
              (this._XDRetracement =
                Math.round(
                  1e3 * Math.abs((s.price - t.price) / (t.price - e.price)),
                ) / 1e3));
        }),
        (t.Pattern5PaneView = n);
    },
    '6sSH': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRendererPoints12 = new o()),
          (this._trendLineRendererPoints23 = new o());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('IjC5').RectangleRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('loH8'),
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd,
        p = i('d1Pk').fibLevelCoordinate;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a, o, l, h, d, c, _, u, f, g, v, w, y, m, x, b;
          if (
            (s.prototype._updateImpl.call(this),
            (this._cacheState = this._model._trendBasedFibExtensionLabelsCache.updateSource(
              this._source,
            )),
            !(this._source.points().length < 3) &&
              (e = this._source.priceScale()) &&
              !e.isEmpty() &&
              !this._model.timeScale().isEmpty() &&
              null != (t = this._source.ownerSource().firstValue()))
          )
            for (
              i = this._source.points()[0],
                n = this._source.points()[1],
                r = this._source.points()[2],
                a = !1,
                (o = this._source.properties()).reverse &&
                  o.reverse.value() &&
                  (a = o.reverse.value()),
                this._levels = [],
                d = (l = a ? i.price : n.price) - (h = a ? n.price : i.price),
                (u = e.isLog() && o.fibLevelsBasedOnLogScale.value()) &&
                  ((c =
                    e.priceToCoordinate(l, t, !0) -
                    e.priceToCoordinate(h, t, !0)),
                  (_ = e.priceToCoordinate(r.price, t, !0))),
                f = { price: r.price, coordinate: _ },
                g = { price: d, coordinate: c },
                v = this._source.levelsCount(),
                w = 1;
              w <= v;
              w++
            )
              (y = o['level' + w]).visible.value() &&
                ((m = y.coeff.value()),
                (x = y.color.value()),
                (b = p(f, g, m, e, t, u)),
                this._levels.push({
                  color: x,
                  y: b,
                  linewidth: o.levelsStyle.linewidth.value(),
                  linestyle: o.levelsStyle.linestyle.value(),
                  index: w,
                }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            p,
            _,
            u,
            f,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2)
          )
            return n;
          if (
            ((s = this._points[0]),
            (p = this._points[1]),
            (_ = this._source.properties()).trendline.visible.value() &&
              ((u = {
                points: [s, p],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: _.trendline.color.value(),
                linewidth: _.trendline.linewidth.value(),
                linestyle: _.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              this._trendLineRendererPoints12.setData(u),
              n.append(this._trendLineRendererPoints12)),
            this._points.length < 3)
          )
            return i && this.addAnchors(n), n;
          for (
            f = this._points[2],
              _.trendline.visible.value() &&
                ((u = {
                  points: [p, f],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: _.trendline.color.value(),
                  linewidth: _.trendline.linewidth.value(),
                  linestyle: _.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: c.Normal,
                  rightend: c.Normal,
                }),
                this._trendLineRendererPoints23.setData(u),
                n.append(this._trendLineRendererPoints23)),
              g = Math.min(f.x, p.x),
              v = Math.max(f.x, p.x),
              w = _.fillBackground.value(),
              y = _.transparency.value(),
              m = _.extendLines.value() ? this._model.timeScale().width() : v,
              b = (x = this._model._trendBasedFibExtensionLabelsCache).canvas(),
              R = 0;
            R < this._levels.length;
            R++
          )
            if (
              (R > 0 &&
                w &&
                ((S = this._levels[R - 1]),
                (s = new r(g, this._levels[R].y)),
                (p = new r(m, S.y)),
                ((T = {}).points = [s, p]),
                (T.color = this._levels[R].color),
                (T.linewidth = 0),
                (T.backcolor = this._levels[R].color),
                (T.fillBackground = !0),
                (T.transparency = y),
                (P = new a(void 0, void 0, !0)).setData(T),
                n.append(P)),
              (u = {
                points: [
                  (s = new r(g, this._levels[R].y)),
                  (p = new r(v, this._levels[R].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._levels[R].color,
                linewidth: this._levels[R].linewidth,
                linestyle: this._levels[R].linestyle,
                extendleft: !1,
                extendright: _.extendLines.value(),
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              (L = new o()).setData(u),
              L.setHitTest(new h(h.MOVEPOINT, null, this._levels[R].index)),
              n.append(L),
              _.showCoeffs.value() || _.showPrices.value())
            ) {
              if (
                !(C = this._cacheState.preparedCells.cells[
                  this._levels[R].index - 1
                ])
              )
                continue;
              switch (_.horzLabelsAlign.value()) {
                case 'left':
                  B = s;
                  break;
                case 'center':
                  ((B = s.add(p).scaled(0.5)).x += C.width / 2),
                    (B.x = Math.round(B.x));
                  break;
                case 'right':
                  _.extendLines.value()
                    ? (B = new r(m - 4, this._levels[R].y))
                    : (((B = new r(m + 4, this._levels[R].y)).x += C.width),
                      (B.x = Math.round(B.x)));
              }
              (k = {
                left: C.left,
                top: x.topByRow(this._cacheState.row),
                width: C.width,
                height: x.rowHeight(this._cacheState.row),
              }),
                (O = {
                  left: B.x - k.width,
                  top: B.y,
                  width: C.width,
                  height: k.height,
                }),
                'middle' === (I = _.vertLabelsAlign.value()) &&
                  (O.top -= O.height / 2),
                'bottom' === I && (O.top -= O.height),
                (M = new l(b, k, O)),
                n.append(M);
            }
          return i && this.addAnchors(n), n;
        }),
        (t.TrendBasedFibExtensionPaneView = n);
    },
    '7qYS': function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        var r = Object(o.equalPoints)(i, n[0])
          ? Object(o.equalPoints)(i, n[1])
            ? null
            : n[1]
          : n[0];
        return null !== e && null !== r
          ? Object(d.intersectPolygonAndHalfplane)(
              e,
              Object(o.halfplaneThroughPoint)(
                Object(o.lineThroughPoints)(t, i),
                r,
              ),
            )
          : null;
      }
      function r(e, t, i) {
        return null !== e
          ? Object(d.intersectPolygonAndHalfplane)(
              e,
              Object(o.halfplaneThroughPoint)(
                ((n = t), Object(o.line)(1, 0, -n)),
                new o.Point(i, 0),
              ),
            )
          : null;
        var n;
      }
      function s(e, t) {
        var i = t.points,
          n = i[0],
          s = i[1];
        return (
          t.extendleft || (e = r(e, n.x, s.x)),
          t.extendright || (e = r(e, s.x, n.x)),
          e
        );
      }
      var a, o, l, h, d, c, p, _, u, f, g;
      i.r(t),
        i.d(t, 'DisjointAngleRenderer', function () {
          return f;
        }),
        (a = i('Eyy1')),
        (o = i('aO4+')),
        (l = i('f6yo')),
        (h = i('GEp6')),
        (d = i('hBTJ')),
        (c = i('8Uy/')),
        (p = i('VdBB')),
        (_ = i('NN6M')),
        (u = i('Tmoa')),
        (f = (function () {
          function e() {
            (this._parallelChannelRenderer = new _.ParallelChannelRenderer()),
              (this._disjointAngleIntersectionRenderer = new g()),
              (this._selectedRenderer = this._disjointAngleIntersectionRenderer);
          }
          return (
            (e.prototype.setData = function (e) {
              var t, i, n, r, s;
              e.points.length < 4 ||
                ((i = (t = e.points)[0]),
                (n = t[1]),
                (r = t[2]),
                (s = t[3]),
                Object(o.equalPoints)(i, n) ||
                Object(o.equalPoints)(r, s) ||
                (Object(h.distanceToLine)(i, n, r).distance < 1e-6 &&
                  Object(h.distanceToLine)(i, n, s).distance < 1e-6)
                  ? (this._selectedRenderer = null)
                  : null !==
                    Object(d.intersectLines)(
                      Object(o.lineThroughPoints)(i, n),
                      Object(o.lineThroughPoints)(r, s),
                    )
                  ? (this._disjointAngleIntersectionRenderer.setData(e),
                    (this._selectedRenderer = this._disjointAngleIntersectionRenderer))
                  : (this._parallelChannelRenderer.setData({
                      width: e.width,
                      height: e.height,
                      extendleft: e.extendleft,
                      extendright: e.extendright,
                      points: [i, n, s, r],
                      fillBackground: !0,
                      backcolor: e.backcolor,
                      transparency: e.transparency,
                      color: 'rgba(0,0,0,0)',
                      linestyle: c.LINESTYLE_SOLID,
                      linewidth: 0,
                      showMidline: !1,
                      hittestOnBackground: e.hittestOnBackground,
                    }),
                    (this._selectedRenderer = this._parallelChannelRenderer)));
            }),
            (e.prototype.draw = function (e) {
              null !== this._selectedRenderer && this._selectedRenderer.draw(e);
            }),
            (e.prototype.hitTest = function (e) {
              return null !== this._selectedRenderer
                ? this._selectedRenderer.hitTest(e)
                : null;
            }),
            e
          );
        })()),
        (g = (function () {
          function e() {
            this._data = null;
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.draw = function (e) {
              var t, i, n, r;
              if (!(null === this._data || this._data.points.length < 4))
                for (
                  e.fillStyle = Object(u.generateColor)(
                    this._data.backcolor,
                    this._data.transparency,
                  ),
                    t = 0,
                    i = this._visiblePolygons();
                  t < i.length;
                  t++
                ) {
                  for (
                    n = i[t], e.beginPath(), e.moveTo(n[0].x, n[0].y), r = 1;
                    r < n.length;
                    r++
                  )
                    e.lineTo(n[r].x, n[r].y);
                  e.fill();
                }
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, n;
              if (null === this._data || !this._data.hittestOnBackground)
                return null;
              for (t = 0, i = this._visiblePolygons(); t < i.length; t++)
                if (((n = i[t]), Object(l.pointInPolygon)(e, n)))
                  return new p.HitTestResult(
                    p.HitTestResult.MOVEPOINT_BACKGROUND,
                  );
              return null;
            }),
            (e.prototype._visiblePolygons = function () {
              var e,
                t,
                i,
                r,
                l,
                h,
                c,
                p,
                _ = Object(a.ensureNotNull)(this._data),
                u = _.points,
                f = u[0],
                g = u[1],
                v = u[2],
                w = u[3];
              return _.width <= 0 || _.height <= 0
                ? []
                : null ===
                  (e = Object(d.intersectLines)(
                    Object(o.lineThroughPoints)(f, g),
                    Object(o.lineThroughPoints)(v, w),
                  ))
                ? []
                : ((i = []),
                  null !==
                    (r = n(
                      (r = s(
                        (r = n(
                          (r = t = [
                            new o.Point(0, 0),
                            new o.Point(_.width, 0),
                            new o.Point(_.width, _.height),
                            new o.Point(0, _.height),
                          ]),
                          e,
                          (l = f.subtract(g).add(e)),
                          [(h = w.subtract(v).add(e)), h],
                        )),
                        _,
                      )),
                      h,
                      e,
                      [l, l],
                    )) && i.push(r),
                  null !==
                    (r = n(
                      (r = s(
                        (r = n((r = t), e, (c = g.subtract(f).add(e)), [
                          (p = v.subtract(w).add(e)),
                          p,
                        ])),
                        _,
                      )),
                      p,
                      e,
                      [c, c],
                    )) && i.push(r),
                  i);
            }),
            e
          );
        })());
    },
    '8GeE': function (e, t, i) {
      'use strict';
      function n(e) {
        (this._data = null), (this._cache = e);
      }
      function r(e, t) {
        h.call(this, e, t),
          (this._cache = {}),
          (this._dashRenderer = new d()),
          this._dashRenderer.setHitTest(null),
          (this._iconRenderer = new n(this._cache));
      }
      var s = i('aO4+').Point,
        a = i('hfHJ'),
        o = a.rotationMatrix,
        l = a.transformPoint,
        h = i('aB9a').LineSourcePaneView,
        d = i('pJOz').TrendLineRenderer,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        _ = i('a7Ha').LineEnd,
        u = i('ikwP').calcTextHorizontalShift;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s;
          null != this._data &&
            ((t = String.fromCharCode(this._data.icon)),
            (e.font = this._data.size + 'px FontAwesome'),
            (i = e.measureText(t).width),
            (e.textBaseline = 'middle'),
            (n = this._data.point),
            e.translate(n.x, n.y),
            e.rotate(this._data.angle - Math.PI / 2),
            e.scale(this._data.scale, 1),
            (r = 65536 * this._data.icon + this._data.size),
            (s = u(e, i)),
            (this._cache[r] = i),
            this._data.selected &&
              ((e.fillStyle = 'rgba(80, 80, 80, 0.2)'),
              e.fillRect(
                -this._cache[r] / 2,
                -this._data.size / 2,
                this._cache[r],
                this._data.size,
              )),
            (e.fillStyle = this._data.color),
            e.fillText(t, -this._cache[r] / 2 + s, 0));
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r;
          return null === this._data
            ? null
            : ((t = 65536 * this._data.icon + this._data.size),
              (i = this._cache[t] * this._data.scale),
              (n = o(-this._data.angle)),
              (r = e.subtract(this._data.point)),
              (r = l(n, r)),
              Math.abs(r.y) <= i / 2 && Math.abs(r.x) <= this._data.size / 2
                ? new c(c.MOVEPOINT)
                : null);
        }),
        inherit(r, h),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, a, h, d, c, u, f, g, v, w, y, m, x, b, R;
          return (
            this._invalidated && this._updateImpl(),
            (n = new p()),
            this._points.length < 1
              ? n
              : ((r = this._source.properties()),
                (a = {
                  point: this._points[0],
                  color: r.color.value(),
                  size: r.size.value(),
                  icon: r.icon.value(),
                  angle: r.angle.value(),
                  scale: r.scale.value(),
                  selected: i,
                }),
                (h = this._model),
                (d = this._source),
                this._iconRenderer.setData(a),
                n.append(this._iconRenderer),
                i &&
                  ((c = 65536 * a.icon + a.size),
                  (t = this._cache[c]),
                  (e = a.size),
                  (u = this._points[0]),
                  (f = r.scale.value()),
                  (g = this._source.getAnchorLimit()),
                  (v = new s(Math.max(g, e) / 2, 0)),
                  (w = new s(0, Math.max(g, f * t) / 2)),
                  (y = o(r.angle.value())),
                  (v = l(y, v)),
                  (w = l(y, w)),
                  ((m = u.add(v)).data = 0),
                  ((x = u.subtract(v)).data = 1),
                  ((b = u.add(w)).data = 2),
                  (b.square = !0),
                  ((R = u.subtract(w)).data = 3),
                  (R.square = !0),
                  (a = {
                    points: [m, x],
                    width: h.timeScale().width(),
                    height: d.priceScale().height(),
                    color: '#808080',
                    linewidth: 1,
                    linestyle: CanvasEx.LINESTYLE_DASHED,
                    extendleft: !1,
                    extendright: !1,
                    leftend: _.Normal,
                    rightend: _.Normal,
                  }),
                  this._dashRenderer.setData(a),
                  n.append(this._dashRenderer),
                  n.append(this.createLineAnchor({ points: [m, x, b, R] }))),
                n)
          );
        }),
        (t.IconPaneView = r);
    },
    '8MBc': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        s.call(this, e, t),
          (this._trendLineRenderer = new a()),
          (this._spiralRenderer = new n());
      }
      var s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype._fibNumbers = function () {
          return [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        }),
        (n.prototype._continiusFib = function (e) {
          var t,
            i,
            n = this._fibNumbers(),
            r = Math.floor(e),
            s = Math.ceil(e);
          return s >= n.length
            ? null
            : ((t = e - r),
              (t = Math.pow(t, 1.15)),
              (i = n[s] - n[r]),
              n[r] + i * t);
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, s, a, l, h, d, c, p, _;
          if (null === this._data) return null;
          for (
            t = this._data.points[0],
              i = this._data.points[1].subtract(t),
              n = e.subtract(t),
              s = (r = i.normalized()).transposed(),
              a = n.normalized(),
              l = Math.acos(r.dotProduct(a)),
              Math.asin(s.dotProduct(a)) < 0 && (l = 2 * Math.PI - l),
              h = this._data.counterclockwise ? -1 : 1,
              d = n.length(),
              c = 0;
            c < 4;
            c++
          )
            if (
              ((p = (h * l) / (0.5 * Math.PI)),
              null !==
                (_ = ((_ = this._continiusFib(p + 4 * c)) * i.length()) / 5) &&
                Math.abs(_ - d) < 5)
            )
              return new o(o.MOVEPOINT);
          return null;
        }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c, p, _;
          if (null !== this._data) {
            for (
              e.lineCap = 'round',
                e.strokeStyle = this._data.color,
                t = this._data.points[0],
                i = this._data.points[1],
                e.translate(t.x, t.y),
                r = (n = i.subtract(t)).length(),
                n = n.normalized(),
                s = Math.acos(n.x),
                Math.asin(n.y) < 0 && (s = 2 * Math.PI - s),
                e.rotate(s),
                e.scale(r / 5, r / 5),
                e.lineWidth = this._data.linewidth,
                CanvasEx.setLineStyle(e, this._data.linestyle),
                a = 50,
                o = Math.PI / (2 * a),
                e.moveTo(0, 0),
                l = this._data.counterclockwise ? -1 : 1,
                h = 0;
              h < (this._fibNumbers().length - 1) * a;
              h++
            )
              (d = l * h * o),
                (c = this._continiusFib(h / a)),
                (p = Math.cos(d) * c),
                (_ = Math.sin(d) * c),
                e.lineTo(p, _);
            e.scale(5 / r, 5 / r), e.rotate(-s), e.stroke();
          }
        }),
        inherit(r, s),
        (r.prototype.renderer = function (e, t, i) {
          var n, r;
          return (
            this._invalidated && this._updateImpl(),
            (n = new l()),
            this._floatPoints.length < 2
              ? n
              : (((r = {}).points = this._floatPoints),
                (r.width = this._model.timeScale().width()),
                (r.height = this._source.priceScale().height()),
                (r.color = this._source.properties().linecolor.value()),
                (r.linewidth = this._source.properties().linewidth.value()),
                (r.linestyle = this._source.properties().linestyle.value()),
                (r.extendleft = !1),
                (r.extendright = !0),
                (r.leftend = h.Normal),
                (r.rightend = h.Normal),
                this._trendLineRenderer.setData(r),
                n.append(this._trendLineRenderer),
                ((r = {}).points = this._floatPoints),
                (r.width = this._model.timeScale().width()),
                (r.height = this._source.priceScale().height()),
                (r.color = this._source.properties().linecolor.value()),
                (r.linewidth = this._source.properties().linewidth.value()),
                (r.linestyle = this._source.properties().linestyle.value()),
                (r.counterclockwise = this._source
                  .properties()
                  .counterclockwise.value()),
                this._spiralRenderer.setData(r),
                n.append(this._spiralRenderer),
                i && this.addAnchors(n),
                n)
          );
        }),
        (t.FibSpiralPaneView = r);
    },
    '9FRF': function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._renderer = new s()),
          (this._p3 = null),
          (this._p4 = null);
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('NN6M').ParallelChannelRenderer,
        a = (i('MMac').PaneRendererClockIcon, i('Zy3/').CompositeRenderer);
      inherit(n, r),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s, a, o, l, h, d;
          r.prototype._updateImpl.call(this),
            this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              0 !== this._source.points().length &&
              (this._source._priceOffset || this._source.calculatePriceDiff(),
              3 === this._points.length &&
                this._source._priceOffset &&
                ((e = this._points[0]),
                (t = this._points[1]),
                (i =
                  this._source._priceOffset + this._source.points()[0].price),
                (n =
                  this._source._priceOffset + this._source.points()[1].price),
                (this._p3 = e.clone()),
                (this._p4 = t.clone()),
                (s = this._source.priceScale()),
                (a = this._source.ownerSource().firstValue()),
                s.isLog()
                  ? ((o = 0.5 * (i + n) - this._source._priceOffset),
                    (l = 0.5 * (i + n)),
                    (h = this._source.priceScale().priceToCoordinate(o, a)),
                    (d = this._source.priceScale().priceToCoordinate(l, a) - h),
                    (this._p3.y += d),
                    (this._p4.y += d))
                  : ((this._p3.y = this._source
                      .priceScale()
                      .priceToCoordinate(i, a)),
                    (this._p4.y = this._source
                      .priceScale()
                      .priceToCoordinate(n, a)))));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, o, l, h;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = []),
            this._points.length > 1 &&
              (n.points.push(this._points[0]), n.points.push(this._points[1])),
            this._points.length > 2 &&
              null !== this._p3 &&
              null !== this._p4 &&
              (n.points.push(this._p3), n.points.push(this._p4)),
            (n.color = this._source.properties().linecolor.value()),
            (n.width = this._model.timeScale().width()),
            (n.height = this._source.priceScale().height()),
            (r = this._source.properties()),
            (n.linewidth = r.linewidth.value()),
            (n.linestyle = r.linestyle.value()),
            (n.extendleft = r.extendLeft.value()),
            (n.extendright = r.extendRight.value()),
            (n.fillBackground = r.fillBackground.value()),
            (n.backcolor = r.backgroundColor.value()),
            (n.transparency = r.transparency.value()),
            (n.showMidline = r.showMidline.value()),
            (n.midlinewidth = r.midlinewidth.value()),
            (n.midlinestyle = r.midlinestyle.value()),
            (n.midcolor = r.midlinecolor.value()),
            (n.fillBackground = r.fillBackground.value()),
            (n.hittestOnBackground = !0),
            this._renderer.setData(n),
            (s = new a()).append(this._renderer),
            i &&
              ((o = []),
              this._points[0] && o.push(this._points[0]),
              this._points[1] && o.push(this._points[1]),
              this._p3 &&
                (((l = this._p3.add(this._p4).scaled(0.5)).data = o.length),
                (l.square = !0),
                o.push(l)),
              (h = 3 === this._points.length && !this._p3),
              this._model.lineBeingCreated() !== this._source || h || o.pop(),
              s.append(this.createLineAnchor({ points: o }))),
            s
          );
        }),
        (t.ParallelChannelPaneView = n);
    },
    '9XXR': function (e, t, i) {
      'use strict';
      function n(e, t) {
        var i, n;
        return (
          void 0 === t && (t = '&nbsp;'),
          -1 !== (i = e + '').indexOf('e') &&
            (i = (function (e) {
              return Object(r.fixComputationError)(e)
                .toFixed(10)
                .replace(/\.?0+$/, '');
            })(Number(e))),
          (n = i.split('.'))[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) +
            (n[1] ? '.' + n[1] : '')
        );
      }
      var r;
      i.r(t),
        i.d(t, 'splitThousands', function () {
          return n;
        }),
        (r = i('ivNn'));
    },
    Ay2m: function (e, t, i) {
      'use strict';
      function n() {
        (this._data = null),
          (this._font = L),
          (this._targetFontSize1 = 14),
          (this._targetFontSize2 = 11),
          (this._sourceFontSize1 = 12),
          (this._sourceFontSize2 = 10),
          (this._arrowOffset = 6),
          (this._arrowWidth = 5),
          (this._arrowHeight = 5),
          (this._radius = 3),
          (this._sourceWidth = void 0),
          (this._sourceHeight = void 0),
          (this._sourceRectLeftOffset = void 0),
          (this._targetWidth = void 0),
          (this._targetHeight = void 0),
          (this._targetRectLeftOffset = void 0);
      }
      function r(e, t) {
        h.call(this, e, t),
          (this._clockWhite = _(
            'prediction-clock-white',
            TradingView.wrapUrl('/static/images/prediction-clock-white.png'),
          )),
          (this._clockBlack = _(
            'prediction-clock-black',
            TradingView.wrapUrl('/static/images/prediction-clock-black.png'),
          )),
          (this._successIcon = _(
            'prediction-success-white',
            TradingView.wrapUrl('/static/images/prediction-success-white.png'),
          )),
          (this._failureIcon = _(
            'prediction-failure-white',
            TradingView.wrapUrl('/static/images/prediction-failure-white.png'),
          )),
          (this._percentageFormatter = new f()),
          (this._renderer = new n());
      }
      var s = i('aO4+').Point,
        a = i('eJTA'),
        o = a.parseRgb,
        l = a.rgbToBlackWhiteString,
        h = i('aB9a').LineSourcePaneView,
        d = i('LxhU').Interval,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        _ = i('UfPO'),
        u = i('Hr11'),
        f = i('GH0z').PercentageFormatter,
        g = i('gQ5K').DateFormatter,
        v = i('4kQX').TimeFormatter,
        w = i('nda6').TimeSpanFormatter,
        y = i('Tmoa'),
        m = i('08i5'),
        x = i('ikwP').calcTextHorizontalShift,
        b = i('jFln').drawRoundRect,
        R = i('XlJ7').makeFont,
        S = i('Ialn'),
        T = S.forceLTRStr,
        P = S.startWithLTR,
        L = i('zDbI').CHART_FONT_FAMILY;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.drawBalloon = function (e, t, i, n, r, a) {
          var o,
            l,
            h = a || 20;
          return (
            e.beginPath(),
            'down' === r
              ? ((o = new s(
                  t.x - h,
                  t.y - this._arrowOffset - this._arrowHeight - n,
                )),
                e.moveTo(o.x + this._radius, o.y),
                e.lineTo(o.x + i - this._radius, o.y),
                e.arcTo(
                  o.x + i,
                  o.y,
                  o.x + i,
                  o.y + this._radius,
                  this._radius,
                ),
                e.lineTo(o.x + i, o.y + n - this._radius),
                e.arcTo(
                  o.x + i,
                  o.y + n,
                  o.x + i - this._radius,
                  o.y + n,
                  this._radius,
                ),
                e.lineTo(o.x + h + this._arrowWidth, o.y + n),
                e.lineTo(o.x + h, o.y + n + this._arrowHeight),
                e.lineTo(o.x + h - this._arrowWidth, o.y + n),
                e.lineTo(o.x + this._radius, o.y + n),
                e.arcTo(
                  o.x,
                  o.y + n,
                  o.x,
                  o.y + n - this._radius,
                  this._radius,
                ),
                e.lineTo(o.x, o.y + this._radius),
                e.arcTo(o.x, o.y, o.x + this._radius, o.y, this._radius),
                o)
              : ((l = new s(
                  t.x - h,
                  t.y + this._arrowOffset + this._arrowHeight + n,
                )),
                e.moveTo(l.x + this._radius, l.y),
                e.lineTo(l.x + i - this._radius, l.y),
                e.arcTo(
                  l.x + i,
                  l.y,
                  l.x + i,
                  l.y - this._radius,
                  this._radius,
                ),
                e.lineTo(l.x + i, l.y - n + this._radius),
                e.arcTo(
                  l.x + i,
                  l.y - n,
                  l.x + i - this._radius,
                  l.y - n,
                  this._radius,
                ),
                e.lineTo(l.x + h + this._arrowWidth, l.y - n),
                e.lineTo(l.x + h, l.y - n - this._arrowHeight),
                e.lineTo(l.x + h - this._arrowWidth, l.y - n),
                e.lineTo(l.x + this._radius, l.y - n),
                e.arcTo(
                  l.x,
                  l.y - n,
                  l.x,
                  l.y - n + this._radius,
                  this._radius,
                ),
                e.lineTo(l.x, l.y - this._radius),
                e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius),
                new s(l.x, l.y - n))
          );
        }),
        (n.prototype.drawTargetLabel = function (e) {
          var t,
            i,
            n,
            r,
            s,
            a,
            o,
            l,
            h,
            d,
            c,
            p,
            _,
            u,
            f,
            g,
            v,
            w,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M,
            A,
            D,
            E,
            V,
            N,
            z,
            H,
            F,
            W,
            j;
          if (
            (e.save(),
            e.translate(0.5, 0.5),
            (t = 4),
            (i = 3),
            (n = 2),
            (r = R(this._targetFontSize1, this._font, 'normal')),
            (s = R(this._targetFontSize2, this._font, 'normal')),
            (a = this._data.targetLine1),
            (o = this._data.targetLine2),
            (l = this._data.targetLine3),
            (h = this._data.targetLine4),
            (e.font = r),
            (d = e.measureText(a).width),
            (c = e.measureText(o).width),
            (p = e.measureText(' ').width),
            (e.font = s),
            (_ = e.measureText(l).width),
            (u = e.measureText(h).width),
            (f = e.measureText(' ').width),
            (g = this._data.clockWhite.width),
            (this._targetWidth =
              Math.max(d + c + p, _ + u + g + 2 * f) + 2 * t + 2 * n),
            (this._targetHeight =
              this._targetFontSize1 + this._targetFontSize2 + 3 * i + 2 * n),
            (w =
              (v = this._data.points[1]).x +
              this._targetWidth -
              e.canvas.width +
              5),
            (this._targetRectLeftOffset = Math.max(
              20,
              Math.min(this._targetWidth - 15, w),
            )),
            (S = 'up' === this._data.direction ? 'down' : 'up'),
            (T = this.drawBalloon(
              e,
              v,
              this._targetWidth,
              this._targetHeight,
              S,
              this._targetRectLeftOffset,
            )),
            (e.fillStyle = y.generateColor(
              this._data.targetBackColor,
              this._data.transparency,
            )),
            e.fill(),
            (e.lineWidth = n),
            (e.strokeStyle = y.generateColor(
              this._data.targetStrokeColor,
              this._data.transparency,
            )),
            e.stroke(),
            (P = 3),
            e.beginPath(),
            e.arc(v.x, v.y, P, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            (e.textAlign = 'start'),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.targetTextColor),
            (L = n + T.x + t),
            (C = n + T.y + i),
            (B = this._targetWidth - 2 * t - 2 * n),
            (e.font = r),
            (k = x(e, B - c - p)),
            e.fillText(a, L + k, C),
            (O = x(e, B - d)),
            e.fillText(o, L + d + p + O, C),
            (e.font = s),
            (I = C + this._targetFontSize1 + i),
            (M = x(e, B - u - g - f)),
            e.fillText(l, L + M, I),
            (A = x(e, B - _ - f - g - u)),
            e.drawImage(this._data.clockWhite, L + _ + f + A, I + 1),
            (D = x(e, B - _ - g)),
            e.fillText(h, L + _ + g + 2 * f + D, I),
            this._data.status)
          ) {
            switch (
              ((e.font = R(this._targetFontSize1, this._font, 'bold')),
              this._data.status)
            ) {
              case m.AlertStatus.Success:
                (E = $.t('SUCCESS')),
                  (V = y.generateColor(
                    this._data.successBackground,
                    this._data.transparency,
                  )),
                  (N = this._data.successTextColor),
                  (z = this._data.successIcon);
                break;
              case m.AlertStatus.Failure:
                (E = $.t('FAILURE')),
                  (V = y.generateColor(
                    this._data.failureBackground,
                    this._data.transparency,
                  )),
                  (N = this._data.failureTextColor),
                  (z = this._data.failureIcon);
            }
            (H = this._targetFontSize1 + 4),
              (F = e.measureText(E).width),
              (W = Math.round((this._targetWidth - F) / 2)),
              (j = x(e, F)),
              (e.fillStyle = V),
              'up' === this._data.direction
                ? (b(e, T.x - 1, T.y - H - 2, this._targetWidth + 2, H, 5),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(E, T.x + W + j, T.y - H + 1),
                  e.drawImage(
                    z,
                    T.x + W - z.width - 4,
                    T.y - H - 2 + Math.abs(H - z.height) / 2,
                  ))
                : (b(
                    e,
                    T.x - 1,
                    T.y + this._targetHeight + 2,
                    this._targetWidth + 2,
                    H,
                    5,
                  ),
                  e.fill(),
                  (e.fillStyle = N),
                  e.fillText(E, T.x + W + j, T.y + this._targetHeight + 5),
                  e.drawImage(
                    z,
                    T.x + W - z.width - 4,
                    T.y + this._targetHeight + 10 - Math.abs(H - z.height) / 2,
                  )),
              e.restore();
          } else e.restore();
        }),
        (n.prototype.drawStartLabel = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c, p, _, u;
          e.save(),
            e.translate(0.5, 0.5),
            (t = 3),
            (i = 2),
            (n = 2),
            (r = R(this._sourceFontSize1, this._font, 'normal')),
            (s = R(this._sourceFontSize2, this._font, 'normal')),
            (e.font = r),
            (a = e.measureText(this._data.sourceLine1).width),
            (e.font = s),
            (o = e.measureText(this._data.sourceLine2).width),
            (this._sourceWidth = Math.max(a, o) + 2 * t + 2 * n),
            (this._sourceHeight =
              this._sourceFontSize1 +
              this._sourceFontSize2 +
              3 * (t - 1) +
              2 * n),
            (h =
              (l = this._data.points[0]).x +
              this._sourceWidth -
              e.canvas.width +
              5),
            (this._sourceRectLeftOffset = Math.max(
              20,
              Math.min(this._sourceWidth - 15, h),
            )),
            (d = this.drawBalloon(
              e,
              l,
              this._sourceWidth,
              this._sourceHeight,
              this._data.direction,
              this._sourceRectLeftOffset,
            )),
            (e.fillStyle = y.generateColor(
              this._data.sourceBackColor,
              this._data.transparency,
            )),
            e.fill(),
            (e.lineWidth = n),
            (e.strokeStyle = y.generateColor(
              this._data.sourceStrokeColor,
              this._data.transparency,
            )),
            e.stroke(),
            (e.textAlign = 'start'),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.sourceTextColor),
            (c = x(e, this._sourceWidth - 2 * t - 2 * n)),
            (p = n + d.x + t + c),
            (_ = n + d.y + i),
            (e.font = r),
            e.fillText(this._data.sourceLine1, p, _),
            (e.font = s),
            e.fillText(
              this._data.sourceLine2,
              p,
              _ + this._sourceFontSize1 + i,
            ),
            (u = 3),
            e.beginPath(),
            e.arc(l.x, l.y, u, 0, 2 * Math.PI, !1),
            (e.fillStyle = this._data.centersColor),
            e.fill(),
            e.restore();
        }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c, p, _, u;
          if (!(null === this._data || this._data.points.length < 2)) {
            if (
              ((e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              (e.lineStyle = this._data.linestyle),
              (t = this._data.points[0]),
              (n = (i = this._data.points[1]).subtract(t)),
              Math.abs(n.x) < 1 || Math.abs(n.y) < 1
                ? (e.beginPath(),
                  e.moveTo(t.x, t.y),
                  e.lineTo(i.x, i.y),
                  e.stroke())
                : (e.save(),
                  e.beginPath(),
                  e.translate(t.x, t.y),
                  e.scale(1, n.y / n.x),
                  e.moveTo(0, 0),
                  e.arcTo(n.x, 0, n.x, n.x, Math.abs(n.x)),
                  e.lineTo(n.x, n.x),
                  e.restore(),
                  e.stroke()),
              this.drawTargetLabel(e),
              this.drawStartLabel(e),
              (r = Math.max(8, 4 * this._data.linewidth)),
              (e.fillStyle = this._data.color),
              (s = n.y < 0 ? 1 : -1),
              Math.abs(n.x) < 1 || Math.abs(n.y) < 1)
            )
              a = Math.atan(n.x / n.y);
            else {
              if (
                ((o = Math.abs(n.x)),
                (l = Math.abs(n.y)),
                (c = ((h = 0) + (d = Math.PI / 2)) / 2),
                n.length() > r)
              )
                for (
                  ;
                  (p = o * Math.sin(c)),
                    (_ = l * (1 - Math.cos(c))),
                    (u = Math.sqrt((p - o) * (p - o) + (_ - l) * (_ - l))),
                    !(Math.abs(u - r) < 1);

                )
                  u > r ? (h = c) : (d = c), (c = (h + d) / 2);
              (a = Math.atan((o - p) / (l - _))), n.x * n.y < 0 && (a = -a);
            }
            e.save(),
              e.beginPath(),
              e.translate(i.x, i.y),
              e.rotate(-a),
              e.moveTo(0, 0),
              e.lineTo(-r / 2, s * r),
              e.lineTo(r / 2, s * r),
              e.lineTo(0, 0),
              e.restore(),
              e.fill();
          }
        }),
        (n.prototype.targetLabelHitTest = function (e) {
          var t, i, n, r, s, a, o, l, h;
          return void 0 === this._targetWidth ||
            void 0 === this._targetHeight ||
            void 0 === this._targetRectLeftOffset
            ? null
            : ((t = this._targetHeight + this._arrowHeight),
              this._data.status && (t += this._targetFontSize1 + 10),
              (i = 'up' === this._data.direction ? -1 : 1),
              (n = this._radius),
              (s = (r = this._data.points[1]).x - this._targetRectLeftOffset),
              (a = r.y + i * n),
              (o = r.y + i * (t + n)),
              (l = Math.min(a, o)),
              (h = Math.max(a, o)),
              e.x >= s && e.x <= s + this._targetWidth && e.y >= l && e.y <= h
                ? new c(c.MOVEPOINT)
                : null);
        }),
        (n.prototype.sourceLabelHitTest = function (e) {
          var t, i, n, r, s, a, o, l;
          return void 0 === this._sourceHeight ||
            void 0 === this._sourceWidth ||
            void 0 === this._sourceRectLeftOffset
            ? null
            : ((t = 'up' === this._data.direction ? 1 : -1),
              (i = this._radius),
              (r = (n = this._data.points[0]).x - this._sourceRectLeftOffset),
              (s = n.y + i * t),
              (a = n.y + (i + this._sourceHeight + this._arrowHeight) * t),
              (o = Math.min(s, a)),
              (l = Math.max(s, a)),
              e.x >= r && e.x <= r + this._sourceWidth && e.y >= o && e.y <= l
                ? new c(c.MOVEPOINT)
                : null);
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, s, a, o, l;
          return null === this._data || this._data.points.length < 2
            ? null
            : ((t = this._data.points[0]),
              (n = (i = this._data.points[1]).subtract(t)),
              (n = i.subtract(t)),
              (r = e.subtract(t)),
              (s = Math.abs(n.x)),
              (a = Math.abs(n.y)),
              (o =
                u.sign(n.y) * (a - a * Math.sqrt(1 - (r.x * r.x) / (s * s)))),
              (l = 3),
              Math.abs(o - r.y) < l
                ? new c(c.MOVEPOINT)
                : this.targetLabelHitTest(e) || this.sourceLabelHitTest(e));
        }),
        inherit(r, h),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = this._points),
            (n.color = this._source.properties().linecolor.value()),
            (n.linewidth = this._source.properties().linewidth.value()),
            (n.targetLine1 = this._targetLine1),
            (n.targetLine2 = this._targetLine2),
            (n.targetLine3 = this._targetLine3),
            (n.targetLine4 = this._targetLine4),
            (n.status = this._source.properties().status.value()),
            (n.transparency = this._source.properties().transparency.value()),
            (n.targetBackColor = this._source
              .properties()
              .targetBackColor.value()),
            (n.targetStrokeColor = this._source
              .properties()
              .targetStrokeColor.value()),
            (n.targetTextColor = this._source
              .properties()
              .targetTextColor.value()),
            (n.sourceBackColor = this._source
              .properties()
              .sourceBackColor.value()),
            (n.sourceStrokeColor = this._source
              .properties()
              .sourceStrokeColor.value()),
            (n.sourceTextColor = this._source
              .properties()
              .sourceTextColor.value()),
            (n.successBackground = this._source
              .properties()
              .successBackground.value()),
            (n.successTextColor = this._source
              .properties()
              .successTextColor.value()),
            (n.failureBackground = this._source
              .properties()
              .failureBackground.value()),
            (n.failureTextColor = this._source
              .properties()
              .failureTextColor.value()),
            (n.intermediateBackColor = this._source
              .properties()
              .intermediateBackColor.value()),
            (n.intermediateTextColor = this._source
              .properties()
              .intermediateTextColor.value()),
            (n.sourceLine1 = this._sourceLine1),
            (n.sourceLine2 = this._sourceLine2),
            (n.direction = this._direction),
            (n.clockWhite = this._clockWhite),
            (n.clockBlack = this._clockBlack),
            (n.successIcon = this._successIcon),
            (n.failureIcon = this._failureIcon),
            (n.finished = this._finished),
            (r = l(
              o(this._model._properties.paneProperties.background.value()),
              150,
            )),
            (n.centersColor = 'black' === r ? 'white' : 'black'),
            this._renderer.setData(n),
            i
              ? ((s = new p()).append(this._renderer), this.addAnchors(s), s)
              : this._renderer
          );
        }),
        (r.prototype._updateImpl = function () {
          var e, t, i, n, r, s, a, o, l, c, p;
          h.prototype._updateImpl.call(this),
            (this._targetLine1 = ''),
            (this._targetLine2 = ''),
            (this._targetLine3 = ''),
            (this._targetLine4 = ''),
            this._source.points().length < 2 ||
              (this._source.priceScale() &&
                ((e = this._source.ownerSource().formatter()),
                (t = this._source.points()[1]),
                (i = this._source.points()[0]),
                (this._targetLine3 = T(e.format(t.price))),
                (r = ((n = t.price - i.price) / i.price) * 100),
                (this._targetLine1 = T(
                  e.format(n) +
                    ' (' +
                    this._percentageFormatter.format(r) +
                    ')',
                )),
                (s = this._model.timeScale().indexToUserTime(i.index)),
                (a = this._model.timeScale().indexToUserTime(t.index)),
                i.time &&
                  t.time &&
                  ((s = TradingView.isString(i.time)
                    ? new Date(Date.parse(i.time))
                    : i.time),
                  (a = TradingView.isString(t.time)
                    ? new Date(Date.parse(t.time))
                    : t.time)),
                (o = this._model.mainSeries().isDWM()),
                (l = d.isSeconds(this._model.mainSeries().interval())),
                a &&
                  s &&
                  ((this._targetLine4 = new g().format(a)),
                  o ||
                    (this._targetLine4 =
                      this._targetLine4 +
                      '  ' +
                      new v(l ? '%h:%m:%s' : '%h:%m').format(a)),
                  (c = (a.valueOf() - s.valueOf()) / 1e3),
                  (this._targetLine2 =
                    $.t('in', { context: 'dates' }) +
                    ' ' +
                    P(new w().format(c)))),
                (this._sourceLine1 = e.format(i.price)),
                (this._sourceLine2 = ''),
                (p = this._model.timeScale().indexToUserTime(i.index)) &&
                  ((this._sourceLine2 = new g().format(p)),
                  o ||
                    (this._sourceLine2 =
                      this._sourceLine2 +
                      ' ' +
                      new v(l ? '%h:%m:%s' : '%h:%m').format(p))),
                (this._direction =
                  this._source.direction() === m.Direction.Up ? 'up' : 'down'),
                (this._finished =
                  this._model.lineBeingCreated() !== this._source &&
                  this._model.lineBeingEdited() !== this._source &&
                  !this._model.sourcesBeingMoved().includes(this._source))));
        }),
        (t.PredictionPaneView = r);
    },
    B4Hi: function (e, t, i) {
      'use strict';
      function n(e) {
        (this._data = null), (this._textSizeCache = e);
      }
      function r(e, t) {
        a.call(this, e, t),
          (this._textSizeCache = {}),
          (this._renderer = new n(this._textSizeCache));
      }
      var s = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('Tmoa'),
        d = i('jTis').CalloutConsts,
        c = i('ikwP').calcTextHorizontalShift;
      !(function () {
        var e;
        n.prototype.wordWrap = function (t, i) {
          var n, r, s, a, o, l, h, d, c, p;
          if (
            (e ||
              (((p = document.createElement('canvas')).width = 0),
              (p.height = 0),
              (e = p.getContext('2d')),
              (p = null)),
            (i = +i),
            (n = (t += '').split(/[^\S\r\n]*(?:\r\n|\r|\n|$)/))[n.length - 1] ||
              n.pop(),
            !isFinite(i) || i <= 0)
          )
            return n;
          for (e.font = this.fontStyle(), r = [], s = 0; s < n.length; s++)
            if (((a = n[s]), (o = e.measureText(a).width) <= i)) r.push(a);
            else
              for (l = a.split(/([-\)\]\},.!?:;])|(\s+)/); l.length; ) {
                if (
                  (h = ~~(((i / o) * (l.length + 2)) / 3)) <= 0 ||
                  e.measureText(l.slice(0, 3 * h - 1).join('')).width <= i
                )
                  for (
                    ;
                    e.measureText(l.slice(0, 3 * (h + 1) - 1).join('')).width <=
                    i;

                  )
                    h++;
                else
                  for (
                    ;
                    h > 0 &&
                    e.measureText(l.slice(0, 3 * --h - 1).join('')).width > i;

                  );
                if (h > 0)
                  r.push(l.slice(0, 3 * h - 1).join('')), l.splice(0, 3 * h);
                else {
                  if (
                    ((d = l[0] + (l[1] || '')),
                    (c = 1 === c ? 1 : ~~((i / e.measureText(d)) * d.length)),
                    e.measureText(d.substr(0, c)).width <= i)
                  )
                    for (; e.measureText(d.substr(0, c + 1)).width <= i; ) c++;
                  else
                    for (
                      ;
                      c > 1 && e.measureText(d.substr(0, --c)).width > i;

                    );
                  c < 1 && (c = 1),
                    r.push(d.substr(0, c)),
                    (l[0] = d.substr(c)),
                    (l[1] = '');
                }
                if ((o = e.measureText(l.join('')).width) <= i) {
                  r.push(l.join(''));
                  break;
                }
              }
          return r;
        };
      })(),
        (n.prototype.setData = function (e) {
          (this._data = e),
            (this._data.lines = this.wordWrap(e.text, e.wordWrapWidth));
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, s;
          return null === this._data || this._data.points.length < 2
            ? null
            : ((t = this._data.points[0]),
              (i = this._data.points[1]),
              (n = 3),
              t.subtract(e).length() < n
                ? new o(o.CHANGEPOINT, 0)
                : ((r = i.x - this._textSizeCache.totalWidth / 2),
                  (s = i.y - this._textSizeCache.totalHeight / 2),
                  e.x >= r &&
                  e.x <= r + this._textSizeCache.totalWidth &&
                  e.y >= s &&
                  e.y <= s + this._textSizeCache.totalHeight
                    ? new o(o.MOVEPOINT)
                    : null));
        }),
        (n.prototype.fontStyle = function () {
          return (
            (this._data.bold ? 'bold ' : '') +
            (this._data.italic ? 'italic ' : '') +
            this._data.fontSize +
            'px ' +
            this._data.font
          );
        }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, p, _, u, f, g, v, w;
          if (!(null === this._data || this._data.points.length < 2)) {
            for (
              t = this._data.points[0].clone(),
                i = this._data.points[1].clone(),
                e.lineCap = 'butt',
                e.strokeStyle = this._data.bordercolor,
                e.lineWidth = this._data.linewidth,
                e.textBaseline = 'bottom',
                e.font = this.fontStyle(),
                n = this._data.fontSize * this._data.lines.length,
                r =
                  this._data.wordWrapWidth ||
                  this._data.lines.reduce(function (t, i) {
                    return Math.max(t, e.measureText(i).width);
                  }, 0),
                this._textSizeCache.textHeight = n,
                this._textSizeCache.textHeight = r,
                s = d.RoundRadius,
                o = r + 2 * (a = d.TextMargins) + 2 * s,
                l = n + 2 * a + 2 * s,
                this._textSizeCache.totalWidth = o,
                this._textSizeCache.totalHeight = l,
                p = i.x - o / 2,
                _ = i.y - l / 2,
                u = 0,
                f = r + 2 * a > 2 * s,
                g = n + 2 * a > 2 * s,
                v = c(e, r),
                t.x > p + o ? (u = 20) : t.x > p && (u = 10),
                t.y > _ + l ? (u += 2) : t.y > _ && (u += 1),
                e.save(),
                e.translate(p, _),
                t.x -= p,
                t.y -= _,
                i.x -= p,
                i.y -= _,
                e.beginPath(),
                e.moveTo(s, 0),
                10 === u
                  ? f
                    ? (e.lineTo(i.x - s, 0),
                      e.lineTo(t.x, t.y),
                      e.lineTo(i.x + s, 0),
                      e.lineTo(o - s, 0))
                    : (e.lineTo(t.x, t.y), e.lineTo(o - s, 0))
                  : e.lineTo(o - s, 0),
                20 === u
                  ? (e.lineTo(t.x, t.y), e.lineTo(o, s))
                  : e.arcTo(o, 0, o, s, s),
                21 === u
                  ? g
                    ? (e.lineTo(o, i.y - s),
                      e.lineTo(t.x, t.y),
                      e.lineTo(o, i.y + s),
                      e.lineTo(o, l - s))
                    : (e.lineTo(t.x, t.y), e.lineTo(o, l - s))
                  : e.lineTo(o, l - s),
                22 === u
                  ? (e.lineTo(t.x, t.y), e.lineTo(o - s, l))
                  : e.arcTo(o, l, o - s, l, s),
                12 === u
                  ? f
                    ? (e.lineTo(i.x + s, l),
                      e.lineTo(t.x, t.y),
                      e.lineTo(i.x - s, l),
                      e.lineTo(s, l))
                    : (e.lineTo(t.x, t.y), e.lineTo(s, l))
                  : e.lineTo(s, l),
                2 === u
                  ? (e.lineTo(t.x, t.y), e.lineTo(0, l - s))
                  : e.arcTo(0, l, 0, l - s, s),
                1 === u
                  ? g
                    ? (e.lineTo(0, i.y + s),
                      e.lineTo(t.x, t.y),
                      e.lineTo(0, i.y - s),
                      e.lineTo(0, s))
                    : (e.lineTo(t.x, t.y), e.lineTo(0, s))
                  : e.lineTo(0, s),
                0 === u
                  ? (e.lineTo(t.x, t.y), e.lineTo(s, 0))
                  : e.arcTo(0, 0, s, 0, s),
                e.stroke(),
                e.fillStyle = h.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                ),
                e.fill(),
                e.fillStyle = this._data.color,
                _ = s + a + this._data.fontSize,
                p = s + a + v,
                w = 0;
              w < this._data.lines.length;
              w++
            )
              e.fillText(this._data.lines[w], p, _), (_ += this._data.fontSize);
            e.restore();
          }
        }),
        inherit(r, a),
        (r.prototype._updateImpl = function () {
          a.prototype._updateImpl.call(this), this._source._calculatePoint2();
        }),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, a, o, h, c, p;
          return (
            this._invalidated && this._updateImpl(),
            this._points[0]
              ? this._points.length < 2
                ? void 0
                : ((n = this._source.properties()),
                  ((r = {}).points = []),
                  r.points.push(this._points[0]),
                  ((a = this._points[1].clone()).x =
                    this._points[0].x +
                    this._source._barOffset *
                      this._model.timeScale().barSpacing()),
                  r.points.push(a),
                  (r.color = n.color.value()),
                  (r.linewidth = n.linewidth.value()),
                  (r.backcolor = n.backgroundColor.value()),
                  (r.transparency = n.transparency.value()),
                  (r.text = n.text.value()),
                  (r.font = n.font.value()),
                  (r.fontSize = n.fontsize.value()),
                  (r.bordercolor = n.bordercolor.value()),
                  n.wordWrap &&
                    n.wordWrap.value() &&
                    (r.wordWrapWidth = n.wordWrapWidth.value()),
                  (r.bold = n.bold && n.bold.value()),
                  (r.italic = n.italic && n.italic.value()),
                  this._renderer.setData(r),
                  i
                    ? ((o = new l()).append(this._renderer),
                      (h = r.points[1]),
                      (c = [].concat(r.points)).splice(c.length - 1, 1),
                      o.append(this.createLineAnchor({ points: c })),
                      r.wordWrapWidth &&
                        (((p = new s(
                          h.x +
                            (r.wordWrapWidth >> 1) +
                            d.RoundRadius +
                            d.TextMargins,
                          h.y,
                        )).data = 1),
                        o.append(this.createLineAnchor({ points: [p] }))),
                      o)
                    : this._renderer)
              : new l()
          );
        }),
        (t.CalloutPaneView = r);
    },
    BCbF: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l, h, d, c;
      i.r(t),
        i.d(t, 'PolygonRenderer', function () {
          return c;
        }),
        (n = i('f6yo')),
        (r = i('GEp6')),
        (s = i('jFln')),
        (a = i('qFKp')),
        (o = i('pJOz')),
        (l = i('a7Ha')),
        (h = i('VdBB')),
        (d = i('Tmoa')),
        (c = (function () {
          function e(e) {
            (this._data = null),
              (this._backHittest = new h.HitTestResult(
                h.HitTestResult.MOVEPOINT_BACKGROUND,
              )),
              (this._points = []),
              (this._hittest =
                e || new h.HitTestResult(h.HitTestResult.MOVEPOINT));
          }
          return (
            (e.prototype.setData = function (e) {
              (this._data = e), (this._points = e.points);
            }),
            (e.prototype.draw = function (e) {
              var t, i, n, r;
              if (null !== this._data && 0 !== this._points.length) {
                for (
                  e.beginPath(),
                    e.lineCap = 'butt',
                    e.strokeStyle = this._data.color,
                    e.lineWidth = this._data.linewidth,
                    Object(s.setLineStyle)(e, this._data.linestyle),
                    t = this._points[0],
                    e.moveTo(t.x, t.y),
                    i = 0,
                    n = this._points;
                  i < n.length;
                  i++
                )
                  (r = n[i]), e.lineTo(r.x, r.y);
                this._data.filled &&
                  this._data.fillBackground &&
                  ((e.fillStyle = Object(d.generateColor)(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.fill()),
                  this._data.filled &&
                    !this._data.skipClosePath &&
                    e.closePath(),
                  this._data.linewidth > 0 && e.stroke(),
                  this._points.length > 1 &&
                    (this._data.leftend === l.LineEnd.Arrow &&
                      o.TrendLineRenderer.prototype.drawArrow(
                        this._points[1],
                        this._points[0],
                        e,
                        e.lineWidth,
                      ),
                    this._data.rightend === l.LineEnd.Arrow &&
                      o.TrendLineRenderer.prototype.drawArrow(
                        this._points[this._points.length - 2],
                        this._points[this._points.length - 1],
                        e,
                        e.lineWidth,
                      ));
              }
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, s, o;
              if (
                null === this._data ||
                (void 0 !== this._data.mouseTouchable &&
                  !this._data.mouseTouchable)
              )
                return null;
              for (
                t = a.CheckMobile.any() ? 24 : 3, i = 1;
                i < this._points.length;
                i++
              )
                if (
                  ((s = this._points[i - 1]),
                  (o = this._points[i]),
                  Object(r.distanceToSegment)(s, o, e).distance <= t)
                )
                  return this._hittest;
              return this._data.filled &&
                this._data.fillBackground &&
                this._points.length > 0 &&
                ((s = this._points[0]),
                (o = this._points[this._points.length - 1]),
                Object(r.distanceToSegment)(s, o, e).distance <= t)
                ? this._hittest
                : this._data.filled &&
                  this._data.fillBackground &&
                  Object(n.pointInPolygon)(e, this._data.points)
                ? this._backHittest
                : null;
            }),
            e
          );
        })());
    },
    BSCN: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t), (this._lineRenderer = new o());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = (i('MMac').PaneRendererClockIcon, i('Zy3/').CompositeRenderer),
        o = i('z+cS').VerticalLineRenderer;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, o;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).width = this._model.timeScale().width()),
            (n.height = this._source.priceScale().height()),
            (n.points = this._points),
            (n.color = this._source.properties().linecolor.value()),
            (n.linewidth = this._source.properties().linewidth.value()),
            (n.linestyle = this._source.properties().linestyle.value()),
            this._lineRenderer.setData(n),
            (s = new a()).append(this._lineRenderer),
            1 === this._points.length &&
              i &&
              (((o = new r(this._points[0].x, n.height / 2)).data = 0),
              (o.square = !0),
              s.append(this.createLineAnchor({ points: [o] }))),
            s
          );
        }),
        (t.VertLinePaneView = n);
    },
    C2CE: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t), (this._renderer = new s());
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('BCbF').PolygonRenderer,
        a = i('Zy3/').CompositeRenderer;
      inherit(n, r),
        (n.prototype.renderer = function (e, t, i) {
          var n, r;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = this._points),
            (n.color = this._source.properties().linecolor.value()),
            (n.linewidth = this._source.properties().linewidth.value()),
            (n.linestyle = this._source.properties().linestyle.value()),
            (n.filled = this._source.properties().filled.value()),
            (n.backcolor = this._source.properties().backgroundColor.value()),
            (n.fillBackground = this._source
              .properties()
              .fillBackground.value()),
            (n.transparency = this._source.properties().transparency.value()),
            this._renderer.setData(n),
            i
              ? ((r = new a()).append(this._renderer), this.addAnchors(r), r)
              : this._renderer
          );
        }),
        (t.PolylinePaneView = n);
    },
    CR3a: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t);
      }
      function r(e, t) {
        a.call(this, e, t),
          (this._rendererCache = {}),
          (this._baseLineRenderer = new o()),
          (this._lastLevelTrendRenderer = new o());
      }
      var s = i('NN6M').ParallelChannelRenderer,
        a = i('aB9a').LineSourcePaneView,
        o = i('pJOz').TrendLineRenderer,
        l = i('loH8'),
        h = i('Zy3/').CompositeRenderer,
        d = i('Tmoa'),
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._getColor = function () {
          return d.generateColor(
            this._data.backcolor,
            this._data.transparency,
            !0,
          );
        }),
        inherit(r, a),
        (r.prototype._updateImpl = function () {
          a.prototype._updateImpl.call(this),
            (this._cacheState = this._model._fibChannelLabelsCache.updateSource(
              this._source,
            )),
            this._floatPoints.length < 3 ||
              this._source.points().length < 3 ||
              (this.norm = this._floatPoints[2].subtract(this._floatPoints[0]));
        }),
        (r.prototype.renderer = function (e, t, i) {
          function r(e, t, i) {
            var n, r, o, h, d;
            switch (a.horzLabelsAlign.value()) {
              case 'left':
                n = e;
                break;
              case 'center':
                ((n = e.add(t).scaled(0.5)).x += i.width / 2),
                  (n.x = Math.round(n.x));
                break;
              case 'right':
                ((n = t.clone()).x += i.width), (n.x = Math.round(n.x));
            }
            (r = {
              left: i.left,
              top: _.topByRow(f._cacheState.row),
              width: i.width,
              height: _.rowHeight(f._cacheState.row),
            }),
              (o = {
                left: Math.round(n.x - r.width),
                top: Math.round(n.y),
                width: i.width,
                height: r.height,
              }),
              'middle' === (h = a.vertLabelsAlign.value()) &&
                (o.top -= o.height / 2),
              'bottom' === h && (o.top -= o.height),
              (d = new l(u, r, o)),
              s.append(d);
          }
          var s,
            a,
            o,
            d,
            p,
            _,
            u,
            f,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k;
          if (
            (this._invalidated && this._updateImpl(),
            (s = new h()),
            this._floatPoints.length < 2)
          )
            return i && this.addAnchors(s), s;
          if (
            ((a = this._source.properties()),
            (o = this._floatPoints[0]),
            (d = this._floatPoints[1]),
            this._floatPoints.length < 3)
          )
            return (
              (p = {
                points: [o, d],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: a.level1.color.value(),
                linewidth: a.levelsStyle.linewidth.value(),
                linestyle: a.levelsStyle.linestyle.value(),
                extendleft: a.extendLeft.value(),
                extendright: a.extendRight.value(),
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              this._baseLineRenderer.setData(p),
              s.append(this._baseLineRenderer),
              i && this.addAnchors(s),
              s
            );
          for (
            _ = this._model._fibChannelLabelsCache,
              u = _.canvas(),
              f = this,
              g = this._source.levelsCount(),
              v = 1;
            v < g;
            v++
          )
            if ((w = a['level' + v]).visible.value()) {
              for (y = null, m = v + 1; m <= g; m++)
                if ((x = a['level' + m]).visible.value()) {
                  y = x;
                  break;
                }
              if (!y) break;
              (b = this.norm.scaled(w.coeff.value())),
                (R = o.add(b)),
                (S = d.add(b)),
                (T = this.norm.scaled(y.coeff.value())),
                (P = o.add(T)),
                (L = d.add(T)),
                ((C = {}).points = [R, S, P, L]),
                (C.color = w.color.value()),
                (C.width = this._model.timeScale().width()),
                (C.height = this._source.priceScale().height()),
                (C.linewidth = a.levelsStyle.linewidth.value()),
                (C.linestyle = a.levelsStyle.linestyle.value()),
                (C.extendleft = a.extendLeft.value()),
                (C.extendright = a.extendRight.value()),
                (C.backcolor = w.color.value()),
                (C.transparency = a.transparency.value()),
                (C.skipTopLine = !0),
                (C.fillBackground = a.fillBackground.value()),
                (C.hittestOnBackground = !0),
                (B = new n()).setData(C),
                s.append(B),
                (a.showCoeffs.value() || a.showPrices.value()) &&
                  r(R, S, this._cacheState.preparedCells.cells[v - 1]);
            }
          for (k = null, v = g; v >= 1; v--)
            if ((w = a['level' + v]).visible.value()) {
              k = v;
              break;
            }
          return (
            null != k &&
              (w = a['level' + k]).visible.value() &&
              ((b = this.norm.scaled(w.coeff.value())),
              (p = {
                points: [(R = o.add(b)), (S = d.add(b))],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: w.color.value(),
                linewidth: a.levelsStyle.linewidth.value(),
                linestyle: a.levelsStyle.linestyle.value(),
                extendleft: a.extendLeft.value(),
                extendright: a.extendRight.value(),
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              this._lastLevelTrendRenderer.setData(p),
              s.append(this._lastLevelTrendRenderer),
              (a.showCoeffs.value() || a.showPrices.value()) &&
                r(R, S, this._cacheState.preparedCells.cells[k - 1])),
            i && this.addAnchors(s),
            s
          );
        }),
        (t.FibChannelPaneView = r);
    },
    D4q4: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t), (this._renderer = new a());
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('Zy3/').CompositeRenderer,
        a = i('/S7V').TriangleRenderer;
      inherit(n, r),
        (n.prototype.renderer = function (e, t, i) {
          var n, r;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = this._points),
            (n.color = this._source.properties().color.value()),
            (n.linewidth = this._source.properties().linewidth.value()),
            (n.backcolor = this._source.properties().backgroundColor.value()),
            (n.fillBackground = this._source
              .properties()
              .fillBackground.value()),
            (n.transparency = this._source.properties().transparency.value()),
            this._renderer.setData(n),
            i
              ? ((r = new s()).append(this._renderer), this.addAnchors(r), r)
              : this._renderer
          );
        }),
        (t.TrianglePaneView = n);
    },
    'Dz+H': function (e, t, i) {
      'use strict';
      function n() {}
      function r(e) {
        (this._source = e), (this._data = null);
      }
      function s(e, t) {
        d.call(this, e, t),
          (this._rendererSource = new n()),
          (this._renderer = new r(this._rendererSource));
      }
      var a = i('aO4+'),
        o = a.Point,
        l = a.box,
        h = i('f6yo').pointInBox,
        d = i('aB9a').LineSourcePaneView,
        c = i('qgcf').wordWrap,
        p = i('1mZ4').SelectionRenderer,
        _ = i('VdBB').HitTestResult,
        u = i('Zy3/').CompositeRenderer,
        f = i('Tmoa'),
        g = i('ikwP').calcTextHorizontalShift;
      (n.prototype.update = function (e) {
        (this._data &&
          (!this._data ||
            (e.markerColor === this._data.markerColor &&
              e.width === this._data.width &&
              e.height === this._data.height))) ||
          this._createSource(e.width, e.height, e.markerColor),
          (this._data = e);
      }),
        (n.prototype._createSource = function (e, t, i) {
          var n, r;
          (this._sourceCanvas = document.createElement('canvas')),
            (this._sourceCanvas.width = e),
            (this._sourceCanvas.height = t),
            (this._translate = new o(-e / 2, 0.5 - t)),
            this._translate.x % 1 == 0 && (this._translate.x += 0.5),
            (r = 0.6 * e),
            ((n = this._sourceCanvas.getContext('2d')).fillStyle = i),
            n.beginPath(),
            n.moveTo(e / 2, t),
            n.quadraticCurveTo(e, e / 1.15, e, e / 2),
            n.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0),
            n.quadraticCurveTo(0, e / 1.15, e / 2, t),
            n.fill(),
            (n.globalCompositeOperation = 'destination-out'),
            n.beginPath(),
            n.moveTo((e - r) / 2, e / 2),
            n.arc(e / 2, e / 2, r / 2, 0, 2 * Math.PI),
            n.fill();
        }),
        (n.prototype.drawOn = function (e) {
          var t = new o(
            Math.round(this._data.point.x),
            Math.round(this._data.point.y),
          ).add(this._translate);
          e.drawImage(this._sourceCanvas, t.x, t.y);
        }),
        (n.prototype.hasPoint = function (e) {
          var t = this._data.point.add(this._translate),
            i = new o(
              this._data.point.x - this._translate.x,
              this._data.point.y,
            );
          return h(e, l(t, i));
        }),
        (r.prototype.setData = function (e) {
          this._data = e;
        }),
        (r.prototype.draw = function (e) {
          null !== this._data &&
            (this._source.drawOn(e),
            this._data.tooltipVisible && this.drawTooltipOn(e));
        }),
        (r.prototype.drawTooltipOn = function (e) {
          var t, i, n, r, s, a, o, l, h, d, p, _, u, v, w, y;
          for (
            e.save(),
              t = String(this._data.text)
                .replace(/^\s+|\s+$/g, '')
                .replace(/[\r\n]+/g, '\n'),
              e.font =
                (this._data.bold ? 'bold ' : '') +
                (this._data.italic ? 'italic ' : '') +
                this._data.fontSize +
                'px ' +
                this._data.font,
              i = this._data.tooltipWidth - 2 * this._data.tooltipPadding,
              n = c(t, e.font, i),
              r = this._data.point,
              s = this._data.tooltipLineSpacing,
              a = this._data.tooltipWidth,
              o =
                n.length * this._data.fontSize + 2 * this._data.tooltipPadding,
              n.length > 1 && (o += (n.length - 1) * s),
              l = Math.round(r.x - a / 2),
              h = Math.round(r.y - this._data.height - o - 8),
              p = (d = r.x < 20 || r.x + 20 > this._data.vpWidth)
                ? null
                : 'top',
              _ = d ? null : Math.round(r.x),
              h < 10 ? (h = r.y + 13) : (p = 'bottom'),
              l < 10
                ? (l += Math.abs(l - 10))
                : l + a + 10 > this._data.vpWidth &&
                  (l -= l + a + 10 - this._data.vpWidth),
              e.fillStyle = f.generateColor(
                this._data.backgroundColor,
                this._data.backgroundTransparency,
              ),
              e.strokeStyle = this._data.markerColor,
              e.lineWidth = 1,
              e.beginPath(),
              e.moveTo(l, h),
              d ||
                'top' !== p ||
                (e.lineTo(_ - 7, h), e.lineTo(_, h - 7), e.lineTo(_ + 7, h)),
              e.lineTo(l + a, h),
              e.lineTo(l + a, h + o),
              d ||
                'bottom' !== p ||
                (e.lineTo(_ + 7, h + o),
                e.lineTo(_, h + o + 7),
                e.lineTo(_ - 7, h + o)),
              e.lineTo(l, h + o),
              e.closePath(),
              e.fill(),
              e.stroke(),
              e.textBaseline = 'middle',
              e.fillStyle = this._data.textColor,
              u = g(e, i),
              v = l + this._data.tooltipPadding + u,
              w = h + this._data.tooltipPadding + this._data.fontSize / 2,
              y = 0;
            y < n.length;
            y++
          )
            e.fillText(n[y].replace(/^\s+/, ''), v, w),
              (w += this._data.fontSize + s);
          e.restore();
        }),
        (r.prototype.hitTest = function (e) {
          return null !== this._data && this._source.hasPoint(e)
            ? new _(_.MOVEPOINT)
            : null;
        }),
        inherit(s, d),
        (s.prototype.isLabelVisible = function () {
          return this.isHoveredSource() || this.isSelectedSource();
        }),
        (s.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o;
          return (
            this._invalidated && this._updateImpl(),
            (n = new u()),
            (r = this._source.isFixed()
              ? this._source.fixedPoints()
              : this._points).length < 1
              ? n
              : ((s = this.isLabelVisible()),
                (a = this._source.properties()),
                (o = $.extend(a.state(), {
                  point: r[0],
                  width: 24,
                  height: 32,
                  tooltipVisible: s,
                  vpWidth: this._model.timeScale().width(),
                  vpHeight: this._source.priceScale().height(),
                  tooltipWidth: this._source.getTooltipWidth(),
                  tooltipPadding: this._source.getTooltipPadding(),
                  tooltipLineSpacing: this._source.getTooltipLineSpacing(),
                })),
                this._rendererSource.update(o),
                this._renderer.setData(o),
                n.append(this._renderer),
                i &&
                  n.append(
                    new p({
                      points: r,
                      bgColor: this._getModel().backgroundColor(),
                    }),
                  ),
                n)
          );
        }),
        (t.NotePaneView = s);
    },
    Fx2Q: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._trendLineRenderer = new a()),
          (this._triangleRendererPoints234 = new o()),
          (this._intersect1Renderer = new o()),
          (this._intersect2Renderer = new o()),
          (this._leftShoulderLabelRenderer = new l({})),
          (this._headLabelRenderer = new l({})),
          (this._rightShoulderLabelRenderer = new l({}));
      }
      var r = i('hBTJ').intersectLineSegments,
        s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('/S7V').TriangleRenderer,
        l = i('qgcf').TextRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('Tmoa'),
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._i18nCache = function () {
          return {
            leftShoulder: $.t('Left Shoulder'),
            rightShoulder: $.t('Right Shoulder'),
            head: $.t('Head'),
          };
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, o, l, p, _, u, f, g, v, w, y, m, x, b;
          if (
            (this._invalidated && this._updateImpl(), this._points.length < 2)
          )
            return null;
          for (
            n = this._source.properties(),
              r = new h(),
              s = this,
              o = function (e, t) {
                return {
                  points: [e],
                  text: $.t(t),
                  color: n.textcolor.value(),
                  horzAlign: 'center',
                  font: n.font.value(),
                  offsetX: 0,
                  offsetY: 0,
                  bold: n.bold && n.bold.value(),
                  italic: n.italic && n.italic.value(),
                  fontsize: n.fontsize.value(),
                  backgroundColor: s._source.properties().color.value(),
                  backgroundRoundRect: 4,
                };
              },
              l = function (e, t, i, r) {
                return {
                  points: [e, t],
                  width: s._model.timeScale().width(),
                  height: s._source.priceScale().height(),
                  color: d.generateColor(
                    s._source.properties().color.value(),
                    i,
                  ),
                  linewidth: r || n.linewidth.value(),
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: c.Normal,
                  rightend: c.Normal,
                };
              },
              p = function (e, t, i) {
                var r = [e, t, i],
                  s = {};
                return (
                  (s.points = r),
                  (s.color = n.color.value()),
                  (s.linewidth = 0),
                  (s.backcolor = n.backgroundColor.value()),
                  (s.fillBackground = n.fillBackground.value()),
                  (s.transparency = n.transparency.value()),
                  s
                );
              },
              _ = 1;
            _ < this._points.length;
            _++
          )
            (u = l(this._points[_ - 1], this._points[_], 0)),
              (f = new a()).setData(u),
              r.append(f);
          return (
            this._points.length >= 5 &&
              ((w = !1),
              (y = !1),
              this._intersect1
                ? (g = this._intersect1)
                : ((g = this._points[2]), (w = !0)),
              this._intersect2
                ? (v = this._intersect2)
                : ((v = this._points[4]), (y = !0)),
              ((u = l(g, v, 0)).extendleft = w),
              (u.extendright = y),
              this._trendLineRenderer.setData(u),
              r.append(this._trendLineRenderer),
              (m = p(this._points[2], this._points[3], this._points[4])),
              this._triangleRendererPoints234.setData(m),
              r.append(this._triangleRendererPoints234)),
            this._intersect1 &&
              ((m = p(this._intersect1, this._points[1], this._points[2])),
              this._intersect1Renderer.setData(m),
              r.append(this._intersect1Renderer)),
            this._intersect2 &&
              ((m = p(this._points[4], this._points[5], this._intersect2)),
              this._intersect2Renderer.setData(m),
              r.append(this._intersect2Renderer)),
            (x = this._i18nCache()),
            this._points.length >= 2 &&
              ((b = o(this._points[1], x.leftShoulder)),
              this._points[1].y < this._points[0].y
                ? ((b.vertAlign = 'bottom'), (b.offsetY = -10))
                : ((b.vertAlign = 'top'), (b.offsetY = 5)),
              this._leftShoulderLabelRenderer.setData(b),
              r.append(this._leftShoulderLabelRenderer)),
            this._points.length >= 4 &&
              ((b = o(this._points[3], x.head)),
              this._points[3].y < this._points[2].y
                ? ((b.vertAlign = 'bottom'), (b.offsetY = -10))
                : ((b.vertAlign = 'top'), (b.offsetY = 5)),
              this._headLabelRenderer.setData(b),
              r.append(this._headLabelRenderer)),
            this._points.length >= 6 &&
              ((b = o(this._points[5], x.rightShoulder)),
              this._points[5].y < this._points[4].y
                ? ((b.vertAlign = 'bottom'), (b.offsetY = -10))
                : ((b.vertAlign = 'top'), (b.offsetY = 5)),
              this._rightShoulderLabelRenderer.setData(b),
              r.append(this._rightShoulderLabelRenderer)),
            i && this.addAnchors(r),
            r
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, a, o, l, h;
          s.prototype._updateImpl.call(this),
            delete this._intersect1,
            delete this._intersect2,
            this._points.length >= 5 &&
              ((e = this._points[0]),
              (t = this._points[1]),
              (i = this._points[2]),
              (n = this._points[4]),
              null !== (a = r(i, n, e, t)) &&
                ((o = n.subtract(i)), (this._intersect1 = i.add(o.scaled(a)))),
              7 === this._points.length &&
                ((l = this._points[5]),
                (h = this._points[6]),
                null !== (a = r(i, n, l, h)) &&
                  ((o = n.subtract(i)),
                  (this._intersect2 = i.add(o.scaled(a))))));
        }),
        (t.LineToolHeadAndShouldersPaneView = n);
    },
    FzRY: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._rendererCache = {}),
          (this._numericFormatter = new d()),
          (this._trendLineRenderer = new a());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('loH8'),
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('zXvd').NumericFormatter,
        c = i('QA6D').EllipseRendererSimple,
        p = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, a, o, l, h, d, c, p, _;
          if (
            (s.prototype._updateImpl.call(this),
            (this._cacheState = this._model._fibCirclesLabelsCache.updateSource(
              this._source,
            )),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          )
            for (
              e = this._points[0],
                t = this._points[1],
                this._center = e.add(t).scaled(0.5),
                i = Math.abs(t.x - e.x),
                n = Math.abs(t.y - e.y),
                this._levels = [],
                a = this._source.properties(),
                o = this._source.levelsCount(),
                l = 1;
              l <= o;
              l++
            )
              (h = a['level' + l]).visible.value() &&
                ((d = h.coeff.value()),
                (c = h.color.value()),
                (p = []).push(
                  new r(
                    this._center.x - 0.5 * i * d,
                    this._center.y - 0.5 * n * d,
                  ),
                ),
                p.push(
                  new r(
                    this._center.x + 0.5 * i * d,
                    this._center.y + 0.5 * n * d,
                  ),
                ),
                (_ = new r(this._center.x, this._center.y + 0.5 * n * d)),
                this._levels.push({
                  color: c,
                  points: p,
                  labelPoint: _,
                  linewidth: h.linewidth.value(),
                  linestyle: h.linestyle.value(),
                  index: l,
                }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, d, _, u, f, g, v, w, y, m, x, b;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new h()),
            this._points.length < 2)
          )
            return n;
          for (
            s = (r = this._source.properties()).fillBackground.value(),
              a = r.transparency.value(),
              _ = (d = this._model._fibCirclesLabelsCache).canvas(),
              u = 0;
            u < this._levels.length;
            u++
          )
            if (
              ((f = this._levels[u]),
              ((g = {}).points = f.points),
              (g.color = f.color),
              (g.linewidth = f.linewidth),
              (g.backcolor = f.color),
              u > 0 && (g.wholePoints = this._levels[u - 1].points),
              (g.fillBackground = s),
              (g.transparency = a),
              (v = new l(l.MOVEPOINT, null, f.index)),
              n.append(new c(g, v)),
              r.showCoeffs.value())
            ) {
              if (
                !(w = this._cacheState.preparedCells.cells[
                  this._levels[u].index - 1
                ])
              )
                continue;
              (y = {
                left: w.left,
                top: d.topByRow(this._cacheState.row),
                width: w.width,
                height: d.rowHeight(this._cacheState.row),
              }),
                (m = {
                  left: Math.round(f.labelPoint.x - y.width),
                  top: Math.round(f.labelPoint.y - y.height / 2),
                  width: w.width,
                  height: y.height,
                }),
                (x = new o(_, y, m)),
                n.append(x);
            }
          return (
            r.trendline.visible.value() &&
              ((b = {
                points: [this._points[0], this._points[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: r.trendline.color.value(),
                linewidth: r.trendline.linewidth.value(),
                linestyle: r.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: p.Normal,
                rightend: p.Normal,
              }),
              this._trendLineRenderer.setData(b),
              n.append(this._trendLineRenderer)),
            i && this.addAnchors(n),
            n
          );
        }),
        (t.FibCirclesPaneView = n);
    },
    'GS+0': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t), (this._lines = []), (this._trendRenderer = new o());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a;
          if (
            (s.prototype._updateImpl.call(this),
            !(this._source.points().length < 2) &&
              ((e = this._model.timeScale()),
              this._source.priceScale() &&
                !this._source.priceScale().isEmpty() &&
                !e.isEmpty() &&
                ((t = this._source.points()[0]),
                (n = (i = this._source.points()[1]) ? i.index - t.index : 1),
                (this._lines = []),
                0 !== n)))
          )
            if (((r = e.visibleBarsStrictRange()), n > 0))
              for (a = t.index; a <= r.lastBar(); a += n)
                this._lines.push({ x: e.indexToCoordinate(a) });
            else
              for (a = t.index; a >= r.firstBar(); a += n)
                this._lines.push({ x: e.indexToCoordinate(a) });
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, o, c, p, _, u, f, g;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new h()),
            this._points.length < 2)
          )
            return n;
          for (
            s = this._points[0],
              o = this._points[1],
              c = this._source.properties(),
              p = {
                points: [s, o],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: c.trendline.color.value(),
                linewidth: c.trendline.linewidth.value(),
                linestyle: c.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: d.Normal,
                rightend: d.Normal,
              },
              this._trendRenderer.setData(p),
              n.append(this._trendRenderer),
              t = this._model.timeScale().width(),
              e = this._source.priceScale().height(),
              c = this._source.properties(),
              _ = 0;
            _ < this._lines.length;
            _++
          )
            (u = {
              width: t,
              height: e,
              points: [new r(this._lines[_].x, 0)],
              color: c.linecolor.value(),
              linewidth: c.linewidth.value(),
              linestyle: c.linestyle.value(),
            }),
              (f = new a()).setData(u),
              n.append(f);
          return (
            i &&
              (2 === this._source.points().length
                ? ((g = [].concat(this._points)),
                  n.append(this.createLineAnchor({ points: g })))
                : n.append(
                    this.createLineAnchor({
                      points: [
                        new r(
                          this._points[0].x,
                          this._source.priceScale().height() / 2,
                        ),
                      ],
                      hittestResult: l.MOVEPOINT,
                    }),
                  )),
            n
          );
        }),
        (t.LineToolCircleLinesPaneView = n);
    },
    GW0y: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t), (this._renderer = new o());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('Zy3/').CompositeRenderer,
        o = i('IjC5').RectangleRenderer;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, o, l, h, d;
          return (
            this._invalidated && this._updateImpl(),
            0 === this._points.length
              ? null
              : (((n = {}).points = this._points),
                (n.color = this._source.properties().color.value()),
                (n.linewidth = this._source.properties().linewidth.value()),
                (n.backcolor = this._source
                  .properties()
                  .backgroundColor.value()),
                (n.fillBackground = this._source
                  .properties()
                  .fillBackground.value()),
                (n.transparency = this._source
                  .properties()
                  .transparency.value()),
                this._renderer.setData(n),
                i
                  ? ((s = new a()).append(this._renderer),
                    (o = this._points[0]),
                    (l = this._points[1]),
                    ((h = new r(o.x, l.y)).data = 2),
                    ((d = new r(l.x, o.y)).data = 3),
                    s.append(this.createLineAnchor({ points: [o, l, h, d] })),
                    s)
                  : this._renderer)
          );
        }),
        (t.RectanglePaneView = n);
    },
    GzSs: function (e, t, i) {
      'use strict';
      function n(e, t) {
        (this._data = null), (this._cache = e), (this._adapter = t);
      }
      function r(e, t) {
        s.call(this, e, t),
          (this._rendererCache = {}),
          (this._renderer = new n(this._rendererCache, e._adapter));
      }
      var s = i('aB9a').LineSourcePaneView,
        a = i('jkoZ'),
        o = i('VdBB').HitTestResult,
        l = i('9XXR').splitThousands,
        h = i('Ialn');
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype._height = function () {
          return Math.max(
            20,
            1 +
              Math.max(
                a.fontHeight(this._adapter.getBodyFont()),
                a.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }),
        (n.prototype._bodyWidth = function (e) {
          var t, i;
          return 0 === this._adapter.getText().length
            ? 0
            : (e.save(),
              (e.font = this._adapter.getBodyFont()),
              (t = 10),
              (i = e.measureText(this._adapter.getText()).width),
              e.restore(),
              Math.round(t + i));
        }),
        (n.prototype._getQuantity = function () {
          return l(this._adapter.getQuantity(), ' ');
        }),
        (n.prototype._quantityWidth = function (e) {
          var t, i;
          return 0 === this._getQuantity().length
            ? 0
            : (e.save(),
              (e.font = this._adapter.getQuantityFont()),
              (t = 10),
              (i = e.measureText(this._getQuantity()).width),
              e.restore(),
              Math.round(Math.max(this._height(), t + i)));
        }),
        (n.prototype._reverseButtonWidth = function () {
          return this._adapter.isOnReverseCallbackPresent()
            ? this._height()
            : 0;
        }),
        (n.prototype._closeButtonWidth = function () {
          return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0;
        }),
        (n.prototype._drawLines = function (e, t, i, n, r) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, n, r, n),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, n, t, n),
            e.restore();
        }),
        (n.prototype._drawBody = function (e, t, i) {
          var n, r;
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor()),
            (n = this._bodyWidth(e)),
            (r = this._height()),
            e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r);
        }),
        (n.prototype._drawBodyText = function (e, t, i) {
          var n, r;
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor()),
            (n = t + this._bodyWidth(e) / 2),
            (r = i + this._height() / 2),
            e.fillText(this._adapter.getText(), n, r),
            e.restore();
        }),
        (n.prototype._drawQuantity = function (e, t, i) {
          var n, r;
          (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor()),
            (n = this._quantityWidth(e)),
            (r = this._height()),
            e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r);
        }),
        (n.prototype._drawQuantityText = function (e, t, i) {
          var n, r;
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor()),
            (n = t + this._quantityWidth(e) / 2),
            (r = i + this._height() / 2),
            e.fillText(h.startWithLTR(this._getQuantity() + ''), n, r),
            e.restore();
        }),
        (n.prototype._drawReverseButton = function (e, t, i) {
          var n, r, s, a, o, l, h;
          e.save(),
            (e.strokeStyle = this._adapter.getReverseButtonBorderColor()),
            (e.fillStyle = this._adapter.getReverseButtonBackgroundColor()),
            (n = this._reverseButtonWidth()),
            (r = this._height()),
            e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r),
            (e.strokeStyle = this._adapter.getReverseButtonIconColor()),
            (s = function (e, t) {
              CanvasEx.drawLine(e, 0, 0, 0, t),
                CanvasEx.drawLine(e, -1, 1, 1, 1),
                CanvasEx.drawLine(e, -2, 2, 2, 2);
            }),
            (a = 6),
            (o = 10),
            (l = t + Math.round((this._reverseButtonWidth() - a) / 2)),
            (h = i + 5),
            e.save(),
            e.translate(l, h),
            s(e, o),
            e.translate(a, o),
            e.rotate(Math.PI),
            s(e, o),
            e.restore(),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
            e.restore();
        }),
        (n.prototype._drawCloseButton = function (e, t, i) {
          var n, r, s, a, o, l, h;
          e.save(),
            (e.strokeStyle = this._adapter.getCloseButtonBorderColor()),
            (e.fillStyle = this._adapter.getCloseButtonBackgroundColor()),
            (n = this._closeButtonWidth()),
            (r = this._height()),
            e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r),
            (s = t + n),
            (a = i + r),
            (e.strokeStyle = this._adapter.getCloseButtonIconColor()),
            (o = 8),
            (l = (this._closeButtonWidth() - o) / 2),
            (h = (this._height() - o) / 2),
            CanvasEx.drawPoly(
              e,
              [
                { x: t + l, y: i + h },
                { x: s - l, y: a - h },
              ],
              !0,
            ),
            CanvasEx.drawPoly(
              e,
              [
                { x: s - l, y: i + h },
                { x: t + l, y: a - h },
              ],
              !0,
            ),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1)),
            e.restore();
        }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c;
          null === this._data ||
            !this._data.points ||
            this._data.points.length < 1 ||
            ((a =
              (t = this._data.width) -
              (s =
                (i = this._bodyWidth(e)) +
                (n = this._quantityWidth(e)) +
                (r = this._reverseButtonWidth(e)) +
                this._closeButtonWidth())),
            (o = Math.max((this._adapter.getLineLength() / 100) * t, 1)),
            (h = (l = Math.round(t - Math.min(a, o))) - s),
            (d = Math.round(this._data.points[0].y)),
            (c = Math.round(d - (this._height() + 1) / 2)),
            (this._cache.bodyRight = h + i),
            (this._cache.quantityRight = this._cache.bodyRight + n),
            (this._cache.reverseButtonRight = this._cache.quantityRight + r),
            (this._cache.top = c),
            (this._cache.bottom = c + this._height()),
            (this._cache.left = h),
            (this._cache.right = l),
            this._drawLines(e, h, l, d, t),
            0 !== i && (this._drawBody(e, h, c), this._drawBodyText(e, h, c)),
            0 !== n &&
              (this._drawQuantity(e, this._cache.bodyRight, c),
              this._drawQuantityText(e, this._cache.bodyRight, c)),
            0 !== r && this._drawReverseButton(e, this._cache.quantityRight, c),
            0 !== this._closeButtonWidth() &&
              this._drawCloseButton(e, this._cache.reverseButtonRight, c));
        }),
        (n.prototype.hitTest = function (e) {
          return null === this._data || 0 === this._data.points.length
            ? null
            : e.y < this._cache.top ||
              e.y > this._cache.bottom ||
              e.x < this._cache.left ||
              this._cache.right < e.x
            ? null
            : this._adapter._blocked
            ? new o(o.CUSTOM, {})
            : e.x >= this._cache.bodyRight &&
              e.x < this._cache.quantityRight &&
              this._adapter._onModifyCallback
            ? new o(o.CUSTOM, {
                mouseClickHandler: this._adapter.callOnModify.bind(
                  this._adapter,
                ),
                tooltip: {
                  text:
                    this._adapter.getProtectTooltip() ||
                    window.t('Protect Position...'),
                  rect: {
                    x: this._cache.bodyRight,
                    y: this._cache.top,
                    w: this._cache.quantityRight - this._cache.bodyRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.quantityRight &&
              e.x < this._cache.reverseButtonRight
            ? new o(o.CUSTOM, {
                mouseClickHandler: this._adapter.callOnReverse.bind(
                  this._adapter,
                ),
                tooltip: {
                  text:
                    this._adapter.getReverseTooltip() ||
                    window.t('Reverse Position'),
                  rect: {
                    x: this._cache.quantityRight,
                    y: this._cache.top,
                    w:
                      this._cache.reverseButtonRight -
                      this._cache.quantityRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : e.x >= this._cache.reverseButtonRight && e.x < this._cache.right
            ? new o(o.CUSTOM, {
                mouseClickHandler: this._adapter.callOnClose.bind(
                  this._adapter,
                ),
                tooltip: {
                  text:
                    this._adapter.getCloseTooltip() ||
                    window.t('Close Position'),
                  rect: {
                    x: this._cache.reverseButtonRight,
                    y: this._cache.top,
                    w: this._cache.right - this._cache.reverseButtonRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : new o(o.REGULAR, {
                mouseClickHandler: function () {},
                tooltip: {
                  text: this._adapter.getTooltip(),
                  rect: {
                    x: this._cache.left,
                    y: this._cache.top,
                    w: this._cache.bodyRight - this._cache.left,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              });
        }),
        inherit(r, s),
        (r.prototype.renderer = function (e, t, i) {
          return (
            this._invalidated && this._updateImpl(),
            this._renderer.setData({
              points: this._points,
              width: this._model.timeScale().width(),
            }),
            this._renderer
          );
        }),
        (t.PositionPaneView = r);
    },
    'Ht/7': function (e, t, i) {
      'use strict';
      function n(e, t) {
        p.call(this, e, t);
      }
      var r = i('aO4+').Point,
        s = i('eJTA'),
        a = s.parseRgb,
        o = s.darkenRgb,
        l = s.rgbToHexString,
        h = s.rgbToBlackWhiteString,
        d = i('QA6D').EllipseRendererSimple,
        c = i('qgcf').TextRenderer,
        p = i('aB9a').LineSourcePaneView,
        _ = i('pJOz').TrendLineRenderer,
        u = i('VdBB').HitTestResult,
        f = i('Zy3/').CompositeRenderer,
        g = i('Hr11'),
        v = i('Tmoa'),
        w = i('a7Ha').LineEnd,
        y = i('zDbI').CHART_FONT_FAMILY;
      inherit(n, p),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, p, v, w, m, x, b, R, S, T, P, L, C, B, k, O, I, M, A, D, E;
          if ((this._invalidated && this._updateImpl(), !this._wave))
            return null;
          for (
            n = this.isAnchorsRequired() ? 0 : 1,
              s = new f(),
              p = this._source.properties(),
              v = 0;
            v < this._wave.length;
            v++
          )
            (w = new _()).setData(this._wave[v]), s.append(w);
          for (
            m = 1,
              this._points.length > 2 &&
                ((x = this._points[2]),
                (b = this._points[1]),
                (m = g.sign(x.y - b.y))),
              R = [],
              S = 0,
              this._model.lineBeingCreated() === this._source && (S = 1),
              T =
                'black' === h(a(this._model.backgroundColor()), 150)
                  ? 'white'
                  : 'black',
              P = p.color.value(),
              v = 0;
            v < this._points.length - S;
            v++, m = -m
          )
            v < n ||
              ((C = (L = this._source.label(v)).label),
              'circle' === L.decoration &&
                ((B = this._points[v].clone()),
                1 === m
                  ? (B.y += 13 + L.fontIncrease / 2)
                  : (B.y -= 14 + L.fontIncrease / 2),
                (k = (12 + L.fontIncrease) / 2 + 2),
                (O = {
                  points: [
                    (x = B.subtract(new r(k, k))),
                    (b = B.add(new r(k, k))),
                  ],
                  color: l(o(a(P), 'black' === T ? 15 : -15)),
                  linewidth: 1,
                  fillBackground: !1,
                }),
                (I = new d(O)),
                s.append(I)),
              'brackets' === L.decoration && (C = '(' + C + ')'),
              (M = {
                points: [this._points[v]],
                text: C,
                color: l(o(a(P), 'black' === T ? 15 : -15)),
                vertAlign: 1 === m ? 'top' : 'bottom',
                horzAlign: 'center',
                font: y,
                offsetX: 0,
                offsetY: 1 === m ? 5 : -10,
                fontsize: 12 + L.fontIncrease,
                bold: L.bold,
              }),
              R.push(M),
              '' !== L && s.append(new c(M, new u(u.CHANGEPOINT, v))));
          if (i) {
            for (A = [], D = 0; D < R.length; D++)
              ((E = this._points[D].clone()).y = R[D].points[0].y),
                (E.data = D),
                A.push(E);
            this._model.lineBeingCreated() === this._source && A.pop(),
              s.append(this.createLineAnchor({ points: A }));
          }
          return s;
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s, a, o, l, h, d, c, _, u, f, g, y;
          if (
            (p.prototype._updateImpl.call(this),
            (this._wave = []),
            (e = this._source.properties()),
            (t = this._source.priceScale()),
            (i = this._model.timeScale()),
            t &&
              !t.isEmpty() &&
              !i.isEmpty() &&
              ((n = e.color.value()), e.showWave.value()))
          )
            for (
              s = this._source.ownerSource().firstValue(),
                a = this._source.points(),
                o = 1;
              o < a.length;
              o++
            )
              (l = a[o - 1]),
                (h = a[o]),
                (d = i.indexToCoordinate(l.index)),
                (c = i.indexToCoordinate(h.index)),
                (_ = l.price),
                (u = h.price),
                (f = t.priceToCoordinate(_, s)),
                (g = t.priceToCoordinate(u, s)),
                (y = {
                  points: [new r(d, f), new r(c, g)],
                  width: i.width(),
                  height: t.height(),
                  color: v.generateColor(n, 0),
                  linewidth: e.linewidth.value(),
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: w.Circle,
                  rightend: w.Circle,
                  endstyle: {
                    strokeWidth: 1,
                    fillStyle: this._model.backgroundColor(),
                  },
                  overlayLineEndings: !0,
                }),
                this._wave.push(y);
        }),
        (t.ElliottLabelsPaneView = n);
    },
    Hyqq: function (e, t, i) {
      'use strict';
      function n(e) {
        (this._measureCache = e), (this._data = null);
      }
      function r(e, t) {
        h.call(this, e, t),
          (this._rendererCache = {}),
          (this._renderer = new n(this._rendererCache));
      }
      var s = i('aO4+'),
        a = s.Point,
        o = s.box,
        l = i('f6yo').pointInBox,
        h = i('aB9a').LineSourcePaneView,
        d = i('1mZ4').SelectionRenderer,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        _ = i('Tmoa'),
        u = i('ikwP').calcTextHorizontalShift;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l;
          null !== this._data &&
            0 !== this._data.points.length &&
            ((e.font = [
              this._data.fontWeight,
              this._data.fontSize + 'px',
              this._data.fontFamily,
            ].join(' ')),
            ((t = e.measureText(
              this._data.label,
            )).height = this._data.fontSize),
            (n = { left: (i = 15), top: (2 * i - t.height) / 2 }),
            (r = t.width + 2 * n.left),
            (s = 2 * i),
            (a = u(e, t.width)),
            (o = this._data.points[0].x - (n.left + 20)),
            (l = this._data.points[0].y - (s + 9)),
            this._measureCache &&
              $.extend(this._measureCache, {
                innerWidth: r,
                innerHeight: s,
                padding: n,
              }),
            e.translate(0.5 + o, 0.5 + l),
            e.beginPath(),
            e.moveTo(i + 9, s),
            e.lineTo(i, s),
            e.arcTo(-1e3, 0, 1e3, 0, i),
            e.lineTo(r - i, 0),
            e.arcTo(1e3, s, -1e3, s, i),
            e.lineTo(i + 18, s),
            e.quadraticCurveTo(i + 18, s + 4, i + 20, s + 9),
            e.quadraticCurveTo(i + 12, s + 6, i + 9, s),
            (e.fillStyle = _.generateColor(
              this._data.backgroundColor,
              this._data.transparency,
            )),
            e.fill(),
            (e.strokeStyle = this._data.borderColor),
            (e.lineWidth = 2),
            e.stroke(),
            e.closePath(),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.color),
            e.fillText(this._data.label, n.left + a, n.top - 1));
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n;
          return null !== this._data &&
            0 !== this._data.points.length &&
            this._measureCache.padding
            ? ((t =
                this._data.points[0].x -
                (this._measureCache.padding.left + 20)),
              (i =
                this._data.points[0].y - (this._measureCache.innerHeight + 9)),
              (n = o(
                new a(t, i),
                new a(
                  t + this._measureCache.innerWidth,
                  i + this._measureCache.innerHeight,
                ),
              )),
              l(e, n) ? new c(c.MOVEPOINT) : null)
            : null;
        }),
        inherit(r, h),
        (r.prototype.renderer = function (e, t, i) {
          var n, r;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = this._points),
            (n.color = this._source.properties().color.value()),
            (n.borderColor = this._source.properties().borderColor.value()),
            (n.backgroundColor = this._source
              .properties()
              .backgroundColor.value()),
            (n.transparency = this._source.properties().transparency.value()),
            (n.fontWeight = this._source.properties().fontWeight.value()),
            (n.fontSize = this._source.properties().fontsize.value()),
            (n.fontFamily = this._source.properties().font.value()),
            (n.label = this._source.properties().text.value()),
            this._renderer.setData(n),
            i && 1 === n.points.length
              ? ((r = new p()).append(this._renderer),
                r.append(
                  new d({
                    points: n.points,
                    bgColor: this._getModel().backgroundColor(),
                  }),
                ),
                r)
              : this._renderer
          );
        }),
        (t.BalloonPaneView = r);
    },
    Jej9: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._trendLineRendererPoints01 = new o()),
          (this._trendLineRendererPoints12 = new o()),
          (this._trendLineRendererPoints23 = new o()),
          (this._intersectionRenderer = new a()),
          (this._poligonRenderer = new h()),
          (this._aLabelRenderer = new l({})),
          (this._bLabelRenderer = new l({})),
          (this._cLabelRenderer = new l({})),
          (this._dLabelRenderer = new l({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('/S7V').TriangleRenderer,
        o = i('pJOz').TrendLineRenderer,
        l = i('qgcf').TextRenderer,
        h = i('BCbF').PolygonRenderer,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, l, h, p, _;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? null
              : ((n = this._source.properties()),
                (r = new d()),
                (s = this),
                (a = function (e, t) {
                  return {
                    points: [e],
                    text: t,
                    color: n.textcolor.value(),
                    vertAlign: 'middle',
                    horzAlign: 'center',
                    font: n.font.value(),
                    offsetX: 0,
                    offsetY: 0,
                    bold: n.bold && n.bold.value(),
                    italic: n.italic && n.italic.value(),
                    fontsize: n.fontsize.value(),
                    backgroundColor: s._source.properties().color.value(),
                    backgroundRoundRect: 4,
                  };
                }),
                (l = (o = function (e, t) {
                  return {
                    points: [e, t],
                    width: s._model.timeScale().width(),
                    height: s._source.priceScale().height(),
                    color: s._source.properties().color.value(),
                    linewidth: n.linewidth.value(),
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: c.Normal,
                    rightend: c.Normal,
                  };
                })(this._points[0], this._points[1])),
                this._trendLineRendererPoints01.setData(l),
                r.append(this._trendLineRendererPoints01),
                this._points.length >= 3 &&
                  ((l = o(this._points[1], this._points[2])),
                  this._trendLineRendererPoints12.setData(l),
                  r.append(this._trendLineRendererPoints12)),
                4 === this._points.length &&
                  ((l = o(this._points[2], this._points[3])),
                  this._trendLineRendererPoints23.setData(l),
                  r.append(this._trendLineRendererPoints23),
                  this._intersectPoint
                    ? ((h = [
                        this._startPoint1,
                        this._startPoint2,
                        this._intersectPoint,
                      ]),
                      ((p = {}).points = h),
                      (p.color = n.color.value()),
                      (p.linewidth = n.linewidth.value()),
                      (p.backcolor = n.backgroundColor.value()),
                      (p.fillBackground = n.fillBackground.value()),
                      (p.transparency = n.transparency.value()),
                      this._intersectionRenderer.setData(p),
                      r.append(this._intersectionRenderer))
                    : this._intersectPoint1 &&
                      this._intersectPoint2 &&
                      ((h = [
                        this._startPoint1,
                        this._startPoint2,
                        this._intersectPoint2,
                        this._intersectPoint1,
                      ]),
                      ((p = {}).filled = !0),
                      (p.fillBackground = !0),
                      (p.points = h),
                      (p.color = n.color.value()),
                      (p.linewidth = n.linewidth.value()),
                      (p.backcolor = n.backgroundColor.value()),
                      (p.transparency = n.transparency.value()),
                      this._poligonRenderer.setData(p),
                      r.append(this._poligonRenderer))),
                (_ = a(this._points[0], 'A')),
                this._points[1].y > this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._aLabelRenderer.setData(_),
                r.append(this._aLabelRenderer),
                (_ = a(this._points[1], 'B')),
                this._points[1].y < this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._bLabelRenderer.setData(_),
                r.append(this._bLabelRenderer),
                this._points.length > 2 &&
                  ((_ = a(this._points[2], 'C')),
                  this._points[2].y < this._points[1].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._cLabelRenderer.setData(_),
                  r.append(this._cLabelRenderer)),
                this._points.length > 3 &&
                  ((_ = a(this._points[3], 'D')),
                  this._points[3].y < this._points[2].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._dLabelRenderer.setData(_),
                  r.append(this._dLabelRenderer)),
                i && this.addAnchors(r),
                r)
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, a, o, l, h, d, c, p, _;
          if (
            (s.prototype._updateImpl.call(this),
            (this._valid = !1),
            delete this._intersectPoint,
            delete this._intersectPoint1,
            delete this._intersectPoint2,
            4 === this._points.length)
          ) {
            if (
              ((e = this._points[0]),
              (t = this._points[1]),
              (i = this._points[2]),
              (n = this._points[3]),
              Math.abs(i.x - e.x) < 1 || Math.abs(n.x - t.x) < 1)
            )
              return;
            if (
              ((a = Math.min(e.x, t.x)),
              (a = Math.min(a, i.x)),
              (a = Math.min(a, n.x)),
              (o = (i.y - e.y) / (i.x - e.x)),
              (l = e.y + (a - e.x) * o),
              (h = (n.y - t.y) / (n.x - t.x)),
              (d = t.y + (a - t.x) * h),
              Math.abs(o - h) < 1e-6)
            )
              return;
            (this._startPoint1 = new r(a, l)),
              (this._startPoint2 = new r(a, d)),
              (c = (t.y - e.y + (e.x * o - t.x * h)) / (o - h)),
              (this._valid = !0),
              c < a &&
                ((p = Math.max(e.x, t.x)),
                (p = Math.max(p, i.x)),
                (p = Math.max(p, n.x)),
                (l = e.y + (p - e.x) * o),
                (d = t.y + (p - t.x) * h),
                (this._startPoint1 = new r(p, l)),
                (this._startPoint2 = new r(p, d))),
              (_ = e.y + (c - e.x) * o),
              (this._intersectPoint = new r(c, _));
          }
        }),
        (t.LineToolTrianglePatternPaneView = n);
    },
    LMGK: function (e, t, i) {
      'use strict';
      function n(e, t) {
        (this._data = null), (this._cache = e), (this._adapter = t);
      }
      function r(e, t) {
        o.call(this, e, t),
          (this._renderer = new c()),
          (this._adapter = e._adapter),
          (this._orderRendererCache = {}),
          (this._orderRenderer = new n(this._orderRendererCache, e._adapter)),
          (this._selectionRenderer = new d()),
          this._renderer.append(this._orderRenderer),
          this._renderer.append(this._selectionRenderer),
          (this._selectionData = null);
      }
      var s = i('aO4+').Point,
        a = i('jkoZ'),
        o = i('aB9a').LineSourcePaneView,
        l = i('VdBB').HitTestResult,
        h = i('9XXR').splitThousands,
        d = i('1mZ4').SelectionRenderer,
        c = i('Zy3/').CompositeRenderer;
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype._height = function () {
          return Math.max(
            20,
            1 +
              Math.max(
                a.fontHeight(this._adapter.getBodyFont()),
                a.fontHeight(this._adapter.getQuantityFont()),
              ),
          );
        }),
        (n.prototype._bodyWidth = function (e) {
          var t, i, n;
          return 0 === this._adapter.getText().length
            ? 0
            : (e.save(),
              (e.font = this._adapter.getBodyFont()),
              (t = 10),
              (i = 10),
              (n = e.measureText(this._adapter.getText()).width),
              e.restore(),
              Math.round(t + i + n));
        }),
        (n.prototype._getQuantity = function () {
          return h(this._adapter.getQuantity(), ' ');
        }),
        (n.prototype._quantityWidth = function (e) {
          var t, i;
          return 0 === this._getQuantity().length
            ? 0
            : (e.save(),
              (e.font = this._adapter.getQuantityFont()),
              (t = 10),
              (i = e.measureText(this._getQuantity()).width),
              e.restore(),
              Math.round(Math.max(this._height(), t + i)));
        }),
        (n.prototype._cancelButtonWidth = function () {
          return this._adapter.isOnCancelCallbackPresent() ? this._height() : 0;
        }),
        (n.prototype._drawLines = function (e, t, i, n, r) {
          e.save(),
            (e.strokeStyle = this._adapter.getLineColor()),
            (e.lineStyle = this._adapter.getLineStyle()),
            (e.lineWidth = this._adapter.getLineWidth()),
            CanvasEx.drawLine(e, i, n, r, n),
            this._adapter.getExtendLeft() && CanvasEx.drawLine(e, 0, n, t, n),
            e.restore();
        }),
        (n.prototype._drawMovePoints = function (e, t, i) {
          var n, r, s, a, o, l;
          for (
            e.save(),
              e.strokeStyle = this._adapter.getBodyBorderColor(),
              e.fillStyle = this._adapter.getBodyBorderColor(),
              n = 5,
              s = (r = t + 4) + 2,
              a = Math.floor((this._height() - 2 * n) / 2) + 1,
              o = 0;
            o < a;
            ++o
          )
            (l = i + n + 2 * o), CanvasEx.drawLine(e, r, l, s, l);
          e.restore();
        }),
        (n.prototype._drawBody = function (e, t, i) {
          var n, r;
          (e.strokeStyle = this._adapter.getBodyBorderColor()),
            (e.fillStyle = this._adapter.getBodyBackgroundColor()),
            (n = this._bodyWidth(e)),
            (r = this._height()),
            e.fillRect(t + 0.5, i + 0.5, n - 1, r - 1),
            e.strokeRect(t, i, n, r);
        }),
        (n.prototype._drawBodyText = function (e, t, i) {
          var n, r, s;
          (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getBodyFont()),
            (e.fillStyle = this._adapter.getBodyTextColor()),
            (n = 5),
            (r = t + this._bodyWidth(e) / 2),
            (s = i + this._height() / 2),
            e.fillText(this._adapter.getText(), n + r - 2, s);
        }),
        (n.prototype._drawQuantity = function (e, t, i, n) {
          var r, s;
          e.save(),
            (e.strokeStyle = this._adapter.getQuantityBorderColor()),
            (e.fillStyle = this._adapter.getQuantityBackgroundColor()),
            (r = this._quantityWidth(e)),
            (s = this._height()),
            e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1),
            n &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, r + 1, s + 1), e.clip()),
            e.strokeRect(t, i, r, s),
            e.restore();
        }),
        (n.prototype._drawQuantityText = function (e, t, i) {
          var n, r;
          e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getQuantityFont()),
            (e.fillStyle = this._adapter.getQuantityTextColor()),
            (n = t + this._quantityWidth(e) / 2),
            (r = i + this._height() / 2),
            e.fillText(this._getQuantity(), n, r),
            e.restore();
        }),
        (n.prototype._drawCancelButton = function (e, t, i, n) {
          var r, s, a, o, l, h, d;
          (e.strokeStyle = this._adapter.getCancelButtonBorderColor()),
            (e.fillStyle = this._adapter.getCancelButtonBackgroundColor()),
            (r = this._cancelButtonWidth()),
            (s = this._height()),
            e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1),
            this._adapter._blocked &&
              ((e.fillStyle = 'rgba(140, 140, 140, 0.75)'),
              e.fillRect(t + 0.5, i + 0.5, r - 1, s - 1)),
            e.save(),
            n &&
              e.clip &&
              (e.beginPath(), e.rect(t + 0.5, i - 0.5, r + 1, s + 1), e.clip()),
            e.strokeRect(t, i, r, s),
            e.restore(),
            (a = t + r),
            (o = i + s),
            (e.strokeStyle = this._adapter.getCancelButtonIconColor()),
            (l = 8),
            (h = (this._cancelButtonWidth() - l) / 2),
            (d = (this._height() - l) / 2),
            CanvasEx.drawPoly(
              e,
              [
                { x: t + h, y: i + d },
                { x: a - h, y: o - d },
              ],
              !0,
            ),
            CanvasEx.drawPoly(
              e,
              [
                { x: a - h, y: i + d },
                { x: t + h, y: o - d },
              ],
              !0,
            );
        }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c;
          null === this._data ||
            !this._data.points ||
            this._data.points.length < 1 ||
            ((s =
              (t = this._data.width) -
              (r =
                (i = this._bodyWidth(e)) +
                (n = this._quantityWidth(e)) +
                this._cancelButtonWidth())),
            (a = Math.max((this._adapter.getLineLength() / 100) * t, 1)),
            (l = (o = Math.round(t - Math.min(s, a))) - r),
            (h = Math.round(this._data.points[0].y)),
            (d = Math.round(h - (this._height() + 1) / 2)),
            (this._cache.bodyRight = l + i),
            (this._cache.quantityRight = l + i + n),
            (this._cache.top = d),
            (this._cache.bottom = d + this._height()),
            (this._cache.left = l),
            (this._cache.right = o),
            this._drawLines(e, l, o, h, t),
            (c = !1),
            0 !== i &&
              (this._drawBody(e, l, d),
              this._drawMovePoints(e, l, d),
              this._drawBodyText(e, l, d),
              (c = !0)),
            0 !== n &&
              (this._drawQuantity(e, l + i, d, c),
              this._drawQuantityText(e, l + i, d),
              (c = !0)),
            0 !== this._cancelButtonWidth() &&
              this._drawCancelButton(e, l + i + n, d, c));
        }),
        (n.prototype.hitTest = function (e) {
          if (null === this._data || 0 === this._data.points.length)
            return null;
          if (e.y < this._cache.top || e.y > this._cache.bottom) return null;
          if (
            this._adapter._blocked &&
            e.x >= this._cache.left &&
            e.x < this._cache.right
          )
            return new l(l.CUSTOM, {});
          if (
            this._adapter._editable &&
            e.x >= this._cache.left &&
            e.x < this._cache.bodyRight
          ) {
            var t = this._adapter._onMoveCallback ? l.MOVEPOINT : l.REGULAR;
            return 0 === this._adapter.getTooltip().length
              ? new l(t)
              : new l(t, {
                  tooltip: {
                    text: this._adapter.getTooltip(),
                    rect: {
                      x: this._cache.left,
                      y: this._cache.top,
                      w: this._cache.bodyRight - this._cache.left,
                      h: this._cache.bottom - this._cache.top,
                    },
                  },
                });
          }
          return this._adapter._editable &&
            e.x >= this._cache.bodyRight &&
            e.x < this._cache.quantityRight
            ? new l(l.CUSTOM, {
                mouseClickHandler: this._adapter.callOnModify.bind(
                  this._adapter,
                ),
                tooltip: {
                  text:
                    this._adapter.getModifyTooltip() ||
                    window.t('Modify Order...'),
                  rect: {
                    x: this._cache.bodyRight,
                    y: this._cache.top,
                    w: this._cache.quantityRight - this._cache.bodyRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : this._adapter._editable &&
              e.x >= this._cache.quantityRight &&
              e.x < this._cache.right
            ? new l(l.CUSTOM, {
                mouseClickHandler: this._adapter.callOnCancel.bind(
                  this._adapter,
                ),
                tooltip: {
                  text:
                    this._adapter.getCancelTooltip() ||
                    window.t('Cancel Order'),
                  rect: {
                    x: this._cache.quantityRight,
                    y: this._cache.top,
                    w: this._cache.right - this._cache.quantityRight,
                    h: this._cache.bottom - this._cache.top,
                  },
                },
              })
            : null;
        }),
        inherit(r, o),
        (r.prototype.renderer = function (e, t, i) {
          return (
            this._invalidated && this._updateImpl(t),
            this._orderRenderer.setData({
              points: this._points,
              width: this._model.timeScale().width(),
            }),
            this._selectionRenderer.setData(this._selectionData),
            this._renderer
          );
        }),
        (r.prototype._updateImpl = function (e) {
          var t, i, n;
          o.prototype._updateImpl.call(this),
            (this._selectionData = null),
            this.isSelectedSource() &&
              this._points.length > 0 &&
              ((t = this._points[0].y),
              (i = e - d.RADIUS - 1),
              (n = this._adapter._onMoveCallback ? l.MOVEPOINT : l.REGULAR),
              (this._selectionData = {
                points: [new s(i, t)],
                bgColor: this._model.backgroundColor(),
                hittestResult: n,
              }));
        }),
        (t.OrderPaneView = r);
    },
    MMac: function (e, t, i) {
      'use strict';
      var n, r, s;
      i.r(t),
        i.d(t, 'PaneRendererClockIcon', function () {
          return s;
        }),
        (n = i('mrSG')),
        (r = i('f3xO')),
        (s = (function (e) {
          function t(t) {
            var i, n, r, s, a, o;
            return (
              t.point2 || (t.point2 = t.point1),
              (i = t.point1.x),
              (n = t.point1.y),
              (r = t.point2.x),
              (s = t.point2.y),
              (a = i <= r ? i - 10 : i + 10),
              (o = n <= s ? n + 10 : n - 10),
              (a -= 1),
              (o -= 3),
              e.call(this, {
                items: [{ x: a, y: o, style: {} }],
                char: '',
                color: t.color,
                vertOffset: 0,
                height: 16,
                barSpacing: 0,
                fontFamily: 'FontAwesome',
              }) || this
            );
          }
          return Object(n.__extends)(t, e), t;
        })(r.PaneRendererUnicodeChar));
    },
    NN6M: function (e, t, i) {
      'use strict';
      function n(e, t, i, n) {
        return null !== e
          ? Object(o.intersectPolygonAndHalfplane)(
              e,
              Object(s.halfplaneThroughPoint)(
                Object(s.lineThroughPoints)(t, i),
                n,
              ),
            )
          : null;
      }
      var r, s, a, o, l, h, d, c, p;
      i.r(t),
        i.d(t, 'ParallelChannelRenderer', function () {
          return p;
        }),
        (r = i('Eyy1')),
        (s = i('aO4+')),
        (a = i('GEp6')),
        (o = i('hBTJ')),
        (l = i('jFln')),
        (h = i('VdBB')),
        (d = i('Zp/P')),
        (c = i('Tmoa')),
        (p = (function () {
          function e(e, t) {
            (this._data = null),
              (this._hittestResult =
                e || new h.HitTestResult(h.HitTestResult.MOVEPOINT)),
              (this._backHittestResult =
                t || new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND));
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.draw = function (e) {
              var t, i, n, r, s, a, o, h;
              null === this._data ||
                this._data.points.length < 2 ||
                ((e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                Object(l.setLineStyle)(e, this._data.linestyle),
                (i = (t = this._data.points)[0]),
                (n = t[1]),
                this._data.skipLines || this._extendAndDrawLineSegment(e, i, n),
                4 === this._data.points.length &&
                  ((s = (r = this._data.points)[2]),
                  (a = r[3]),
                  this._data.skipLines ||
                    this._data.skipTopLine ||
                    this._extendAndDrawLineSegment(e, s, a),
                  this._data.fillBackground &&
                    this._drawBackground(e, this._data.points),
                  this._data.showMidline &&
                    !this._data.skipLines &&
                    ((e.strokeStyle = this._data.midcolor),
                    (e.lineWidth = this._data.midlinewidth),
                    Object(l.setLineStyle)(e, this._data.midlinestyle),
                    (o = i.add(s).scaled(0.5)),
                    (h = n.add(a).scaled(0.5)),
                    this._extendAndDrawLineSegment(e, o, h))));
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, n, r, s, a, o, l, h, d, c;
              if (null === this._data || this._data.points.length < 2)
                return null;
              if (
                ((i = (t = this._data.points)[0]),
                (n = t[1]),
                null !== (r = this._extendAndHitTestLineSegment(e, i, n)))
              )
                return r;
              if (4 === this._data.points.length && !this._data.skipTopLine) {
                if (
                  ((a = (s = this._data.points)[2]),
                  (o = s[3]),
                  null !== (l = this._extendAndHitTestLineSegment(e, a, o)))
                )
                  return l;
                if (
                  this._data.showMidline &&
                  !this._data.skipLines &&
                  ((h = i.add(a).scaled(0.5)),
                  (d = n.add(o).scaled(0.5)),
                  null !== (c = this._extendAndHitTestLineSegment(e, h, d)))
                )
                  return c;
              }
              return this._data.hittestOnBackground && this._data.fillBackground
                ? this._hitTestBackground(e)
                : null;
            }),
            (e.prototype._getColor = function () {
              var e = Object(r.ensureNotNull)(this._data);
              return Object(c.generateColor)(e.backcolor, e.transparency);
            }),
            (e.prototype._extendAndDrawLineSegment = function (e, t, i) {
              var n = this._extendAndClipLineSegment(t, i);
              null !== n &&
                Object(l.drawLine)(e, n[0].x, n[0].y, n[1].x, n[1].y);
            }),
            (e.prototype._extendAndHitTestLineSegment = function (e, t, i) {
              var n = 3,
                r = this._extendAndClipLineSegment(t, i);
              return null !== r &&
                Object(a.distanceToSegment)(r[0], r[1], e).distance <= n
                ? this._hittestResult
                : null;
            }),
            (e.prototype._extendAndClipLineSegment = function (e, t) {
              var i = Object(r.ensureNotNull)(this._data);
              return Object(d.extendAndClipLineSegment)(
                e,
                t,
                i.width,
                i.height,
                i.extendleft,
                i.extendright,
              );
            }),
            (e.prototype._drawBackground = function (e, t) {
              var i,
                o,
                l = Object(r.ensureNotNull)(this._data),
                h = t[0],
                d = t[1],
                c = t[2],
                p = t[3];
              if (
                !(
                  Object(s.equalPoints)(h, d) ||
                  Object(s.equalPoints)(c, p) ||
                  Object(a.distanceToLine)(h, d, c).distance < 1e-6 ||
                  Object(a.distanceToLine)(h, d, p).distance < 1e-6 ||
                  l.width <= 0 ||
                  l.height <= 0 ||
                  ((i = n(
                    (i = [
                      new s.Point(0, 0),
                      new s.Point(l.width, 0),
                      new s.Point(l.width, l.height),
                      new s.Point(0, l.height),
                    ]),
                    h,
                    d,
                    p,
                  )),
                  l.extendright || (i = n(i, d, p, c)),
                  (i = n(i, p, c, h)),
                  l.extendleft || (i = n(i, c, h, d)),
                  null === i)
                )
              ) {
                for (
                  e.beginPath(), e.moveTo(i[0].x, i[0].y), o = 1;
                  o < i.length;
                  o++
                )
                  e.lineTo(i[o].x, i[o].y);
                (e.fillStyle = this._getColor()), e.fill();
              }
            }),
            (e.prototype._hitTestBackground = function (e) {
              var t,
                i,
                n,
                s,
                a,
                o,
                l,
                h,
                d,
                c,
                p,
                _ = Object(r.ensureNotNull)(this._data);
              return 4 !== _.points.length
                ? null
                : ((i = (t = _.points)[0]),
                  (n = t[1]),
                  (s = t[2]),
                  (a = (n.y - i.y) / (n.x - i.x)),
                  (o = i.y + a * (e.x - i.x)),
                  (l = s.y + a * (e.x - s.x)),
                  (h = Math.max(o, l)),
                  (d = Math.min(o, l)),
                  (c = Math.min(i.x, n.x)),
                  (p = Math.max(i.x, n.x)),
                  !_.extendleft && e.x < c
                    ? null
                    : !_.extendright && e.x > p
                    ? null
                    : e.y >= d && e.y <= h
                    ? this._backHittestResult
                    : null);
            }),
            e
          );
        })());
    },
    Ni7V: function (e, t, i) {
      'use strict';
      function n(e, t) {
        (this._data = null),
          (this._measureCache = e),
          (this._chartModel = t),
          (this._points = null);
      }
      function r(e, t, i) {
        h.call(this, e, t),
          (this._image = _(
            'price_label',
            TradingView.wrapUrl('/static/images/price_label.png'),
          )),
          (this._rendererCache = {}),
          (this._renderer = new n(this._rendererCache, t));
      }
      var s = i('aO4+'),
        a = s.Point,
        o = s.box,
        l = i('f6yo').pointInBox,
        h = i('aB9a').LineSourcePaneView,
        d = i('1mZ4').SelectionRenderer,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        _ = i('UfPO'),
        u = i('Tmoa'),
        f = i('ikwP').calcTextHorizontalShift;
      (n.prototype.setData = function (e) {
        (this._data = e), (this._points = e.points);
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, o, l, h, d, c;
          null !== this._data &&
            null !== this._points &&
            0 !== this._points.length &&
            ((e.font = [
              this._data.fontWeight,
              this._data.fontSize + 'px',
              this._data.fontFamily,
            ].join(' ')),
            ((t = e.measureText(
              this._data.label,
            )).height = this._data.fontSize),
            (i = 3),
            (n = 15),
            (r = -9),
            (s = 10),
            (a = 5),
            (o = t.width + 2 * s),
            (l = t.height + 2 * a),
            (h = this._points[0].x - r),
            (d = this._points[0].y - (l + n)),
            (c = f(e, t.width)),
            this._measureCache &&
              $.extend(this._measureCache, {
                innerWidth: o,
                innerHeight: l,
                tailLeft: r,
                tailHeight: n,
              }),
            e.translate(0.5 + h, 0.5 + d),
            e.beginPath(),
            e.moveTo(12, l),
            e.lineTo(r, l + n),
            e.lineTo(r - 1, l + n - 1),
            e.lineTo(5, l),
            e.lineTo(i, l),
            e.arcTo(0, l, 0, 0, i),
            e.lineTo(0, i),
            e.arcTo(0, 0, o, 0, i),
            e.lineTo(o - i, 0),
            e.arcTo(o, 0, o, l, i),
            e.lineTo(o, l - i),
            e.arcTo(o, l, 0, l, i),
            e.lineTo(12, l),
            (e.fillStyle = u.generateColor(
              this._data.backgroundColor,
              this._data.transparency,
            )),
            e.fill(),
            (e.strokeStyle = this._data.borderColor),
            (e.lineWidth = 2),
            e.stroke(),
            e.closePath(),
            (e.textBaseline = 'top'),
            (e.fillStyle = this._data.color),
            e.fillText(this._data.label, s + c, a - 1),
            e.translate(-0.5, -0.5),
            e.beginPath(),
            e.arc(r, l + n, 2.5, 0, 2 * Math.PI, !1),
            (e.fillStyle = u.generateColor(
              this._data.borderColor,
              this._data.transparency,
            )),
            e.fill(),
            (e.strokeStyle = this._chartModel.backgroundColor()),
            (e.lineWidth = 1),
            e.stroke(),
            e.closePath());
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n;
          return null === this._data ||
            null === this._points ||
            0 === this._points.length
            ? null
            : ((t = this._points[0].x - this._measureCache.tailLeft),
              (i =
                this._points[0].y -
                (this._measureCache.innerHeight +
                  this._measureCache.tailHeight)),
              (n = o(
                new a(t, i),
                new a(
                  t + this._measureCache.innerWidth,
                  i + this._measureCache.innerHeight,
                ),
              )),
              l(e, n) ? new c(c.MOVEPOINT) : null);
        }),
        inherit(r, h),
        (r.prototype._updateImpl = function () {
          var e, t, i;
          if (
            (h.prototype._updateImpl.call(this),
            this._source.points().length > 0)
          ) {
            if (
              ((e = this._source.points()[0].price),
              !(t = this._source.priceScale()) || t.isEmpty())
            )
              return;
            (i = this._source.ownerSource().firstValue()),
              (this._priceLabel = t.formatPrice(e, i));
          }
        }),
        (r.prototype.renderer = function (e, t, i) {
          var n, r;
          return (
            this._invalidated && this._updateImpl(),
            ((n = {}).points = this._points),
            (n.borderColor = this._source.properties().borderColor.value()),
            (n.backgroundColor = this._source
              .properties()
              .backgroundColor.value()),
            (n.color = this._source.properties().color.value()),
            (n.fontWeight = this._source.properties().fontWeight.value()),
            (n.fontSize = this._source.properties().fontsize.value()),
            (n.fontFamily = this._source.properties().font.value()),
            (n.transparency = this._source.properties().transparency.value()),
            (n.label = this._priceLabel),
            (n.image = this._image),
            this._renderer.setData(n),
            i && 1 === n.points.length
              ? ((r = new p()).append(this._renderer),
                r.append(
                  new d({
                    points: n.points,
                    bgColor: this._getModel().backgroundColor(),
                  }),
                ),
                r)
              : this._renderer
          );
        }),
        (t.PriceLabelPaneView = r);
    },
    QA6D: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l;
      i.r(t),
        i.d(t, 'EllipseRendererSimple', function () {
          return l;
        }),
        (n = i('VdBB')),
        (r = i('Hr11')),
        (s = i('aO4+')),
        (a = i('Tmoa')),
        (o = i('jFln')),
        (l = (function () {
          function e(e, t, i) {
            (this._data = e),
              (this._hitTest =
                t || new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
              (this._backgroundHitTest =
                i || new n.HitTestResult(n.HitTestResult.MOVEPOINT_BACKGROUND));
          }
          return (
            (e.prototype.draw = function (e) {
              var t, i, n, r, s, l, h, d;
              (e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                void 0 !== this._data.linestyle &&
                  Object(o.setLineStyle)(e, this._data.linestyle),
                (t = this._data.points[0]),
                (i = this._data.points[1]),
                (n = Math.abs(t.x - i.x)),
                (r = Math.abs(t.y - i.y)),
                (s = t.add(i).scaled(0.5)),
                n < 1 ||
                  r < 1 ||
                  ((l = 0),
                  this._data.wholePoints &&
                    ((h = this._data.wholePoints[0]),
                    (d = this._data.wholePoints[1]),
                    (l = Math.abs(h.x - d.x))),
                  e.save(),
                  e.translate(s.x, s.y),
                  e.scale(1, r / n),
                  e.beginPath(),
                  e.arc(0, 0, n / 2, 0, 2 * Math.PI, !1),
                  e.restore(),
                  e.stroke(),
                  this._data.fillBackground &&
                    (this._data.wholePoints &&
                      (e.translate(s.x, s.y),
                      e.scale(1, r / n),
                      e.arc(0, 0, l / 2, 0, 2 * Math.PI, !0)),
                    (e.fillStyle = Object(a.generateColor)(
                      this._data.backcolor,
                      this._data.transparency,
                      !0,
                    )),
                    e.fill()));
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, n, a, o, l, h, d, c;
              return this._data.points.length < 2
                ? null
                : ((t = this._data.points[0]),
                  (i = this._data.points[1]),
                  (n = 0.5 * Math.abs(t.x - i.x)),
                  (a = Math.abs(t.x - i.x)),
                  (o = Math.abs(t.y - i.y)),
                  (l = t.add(i).scaled(0.5)),
                  (h = e.subtract(l)),
                  a < 1 || o < 1
                    ? null
                    : ((d = (i.y - t.y) / (i.x - t.x)),
                      (c =
                        (h = new s.Point(h.x, h.y / d)).x * h.x +
                        h.y * h.y -
                        n * n),
                      (c = Object(r.sign)(c) * Math.sqrt(Math.abs(c / n))),
                      Math.abs(c) < 3
                        ? this._hitTest
                        : this._data.fillBackground &&
                          !this._data.noHitTestOnBackground &&
                          c < 3
                        ? this._backgroundHitTest
                        : null));
            }),
            e
          );
        })());
    },
    R7Bt: function (e, t, i) {
      'use strict';
      function n(e, t) {
        a.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new o());
      }
      var r = i('aO4+').Point,
        s = i('IjC5').RectangleRenderer,
        a = i('aB9a').LineSourcePaneView,
        o = i('pJOz').TrendLineRenderer,
        l = i('loH8'),
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd,
        p = i('d1Pk').fibLevelCoordinate;
      inherit(n, a),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, s, o, l, h, d, c, _, u, f, g, v, w, y, m, x;
          if (
            (a.prototype._updateImpl.call(this),
            (this._cacheState = this._model._fibRetracementLabelsCache.updateSource(
              this._source,
            )),
            !(this._source.points().length < 2) &&
              (e = this._source.priceScale()) &&
              !e.isEmpty() &&
              !this._model.timeScale().isEmpty() &&
              null != (t = this._source.ownerSource().firstValue()))
          )
            for (
              i = this._source.points()[0],
                n = this._source.points()[1],
                r = !1,
                (s = this._source.properties()).reverse &&
                  s.reverse.value() &&
                  (r = s.reverse.value()),
                this._levels = [],
                o = r ? i.price : n.price,
                h = (l = r ? n.price : i.price) - o,
                (_ = e.isLog() && s.fibLevelsBasedOnLogScale.value()) &&
                  ((d = e.priceToCoordinate(o, t, !0)),
                  (c = e.priceToCoordinate(l, t, !0) - d)),
                u = { price: o, coordinate: d },
                f = { price: h, coordinate: c },
                g = this._source.levelsCount(),
                v = 1;
              v <= g;
              v++
            )
              (w = s['level' + v]).visible.value() &&
                ((y = w.coeff.value()),
                (m = w.color.value()),
                (x = p(u, f, y, e, t, _)),
                this._levels.push({
                  color: m,
                  y: x,
                  linewidth: s.levelsStyle.linewidth.value(),
                  linestyle: s.levelsStyle.linestyle.value(),
                  index: v,
                }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, a, p, _, u, f, g, v, w, y, m, x, b, R, S, T, P, L, C, B, k, O;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2)
          )
            return n;
          for (
            a = this._points[0],
              p = this._points[1],
              _ = Math.min(a.x, p.x),
              u = Math.max(a.x, p.x),
              g = (f = this._source.properties()).fillBackground.value(),
              v = f.transparency.value(),
              w = f.extendLines.value() ? this._model.timeScale().width() : u,
              m = (y = this._model._fibRetracementLabelsCache).canvas(),
              x = 0;
            x < this._levels.length;
            x++
          )
            if (
              (x > 0 &&
                g &&
                ((b = this._levels[x - 1]),
                (a = new r(_, this._levels[x].y)),
                (p = new r(w, b.y)),
                ((R = {}).points = [a, p]),
                (R.color = this._levels[x].color),
                (R.linewidth = 0),
                (R.backcolor = this._levels[x].color),
                (R.fillBackground = !0),
                (R.transparency = v),
                (S = new s(void 0, void 0, !0)).setData(R),
                n.append(S)),
              (T = {
                points: [
                  (a = new r(_, this._levels[x].y)),
                  (p = new r(u, this._levels[x].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._levels[x].color,
                linewidth: this._levels[x].linewidth,
                linestyle: this._levels[x].linestyle,
                extendleft: !1,
                extendright: f.extendLines.value(),
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              (S = new o()).setData(T),
              S.setHitTest(new h(h.MOVEPOINT, null, this._levels[x].index)),
              n.append(S),
              f.showCoeffs.value() || f.showPrices.value())
            ) {
              if (!this._cacheState.preparedCells) continue;
              if (
                !(P = this._cacheState.preparedCells.cells[
                  this._levels[x].index - 1
                ])
              )
                continue;
              switch (f.horzLabelsAlign.value()) {
                case 'left':
                  L = a;
                  break;
                case 'center':
                  ((L = a.add(p).scaled(0.5)).x += P.width / 2),
                    (L.x = Math.round(L.x));
                  break;
                case 'right':
                  f.extendLines.value()
                    ? (L = new r(w - 4, this._levels[x].y))
                    : (((L = new r(w + 4, this._levels[x].y)).x += P.width),
                      (L.x = Math.round(L.x)));
              }
              (C = {
                left: P.left,
                top: y.topByRow(this._cacheState.row),
                width: P.width,
                height: y.rowHeight(this._cacheState.row),
              }),
                (B = {
                  left: L.x - C.width,
                  top: L.y,
                  width: P.width,
                  height: C.height,
                }),
                'middle' === (k = f.vertLabelsAlign.value()) &&
                  (B.top -= B.height / 2),
                'bottom' === k && (B.top -= B.height),
                (O = new l(m, C, B)),
                n.append(O);
            }
          return (
            f.trendline.visible.value() &&
              ((T = {
                points: [this._points[0], this._points[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: f.trendline.color.value(),
                linewidth: f.trendline.linewidth.value(),
                linestyle: f.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              this._trendLineRenderer.setData(T),
              n.append(this._trendLineRenderer)),
            i && this.addAnchors(n),
            n
          );
        }),
        (t.FibRetracementPaneView = n);
    },
    S6aM: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new l()),
          (this._retrace1LabelRenderer = new a({})),
          (this._retrace12LabelRenderer = new a({}));
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('pJOz').TrendLineRenderer,
        a = i('qgcf').TextRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('zXvd').NumericFormatter,
        h = i('Tmoa'),
        d = i('a7Ha').LineEnd;
      inherit(n, r),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, a, l, c, p, _, u, f;
          if (
            (this._invalidated && this._updateImpl(), this._points.length < 2)
          )
            return null;
          for (
            n = this._source.properties(),
              r = new o(),
              a = this,
              l = function (e, t) {
                return {
                  points: [e],
                  text: t,
                  color: n.textcolor.value(),
                  vertAlign: 'middle',
                  horzAlign: 'center',
                  font: n.font.value(),
                  offsetX: 0,
                  offsetY: 0,
                  bold: n.bold && n.bold.value(),
                  italic: n.italic && n.italic.value(),
                  fontsize: n.fontsize.value(),
                  backgroundColor: a._source.properties().color.value(),
                  backgroundRoundRect: 4,
                };
              },
              c = function (e, t, i, r) {
                return {
                  points: [e, t],
                  width: a._model.timeScale().width(),
                  height: a._source.priceScale().height(),
                  color: h.generateColor(
                    a._source.properties().color.value(),
                    i,
                  ),
                  linewidth: r || n.linewidth.value(),
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: d.Normal,
                  rightend: d.Normal,
                };
              },
              p = 1;
            p < this._points.length;
            p++
          )
            (_ = c(this._points[p - 1], this._points[p], 0)),
              (u = new s()).setData(_),
              r.append(u);
          return (
            this._retrace1 &&
              ((_ = c(this._points[1], this._points[3], 70, 1)),
              (u = new s()).setData(_),
              r.append(u),
              (f = l(
                this._points[1].add(this._points[3]).scaled(0.5),
                this._numericFormatter.format(this._retrace1),
              )),
              this._retrace1LabelRenderer.setData(f),
              r.append(this._retrace1LabelRenderer)),
            this._retrace2 &&
              ((_ = c(this._points[3], this._points[5], 70, 1)),
              (u = new s()).setData(_),
              r.append(u),
              (f = l(
                this._points[5].add(this._points[3]).scaled(0.5),
                this._numericFormatter.format(this._retrace2),
              )),
              this._retrace12LabelRenderer.setData(f),
              r.append(this._retrace12LabelRenderer)),
            i && this.addAnchors(r),
            r
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s;
          r.prototype._updateImpl.call(this),
            delete this._retrace1,
            delete this._retrace2,
            this._source.points().length >= 4 &&
              ((e = this._source.points()[1]),
              (t = this._source.points()[2]),
              (i = this._source.points()[3]),
              (this._retrace1 =
                Math.round(
                  100 * Math.abs((i.price - t.price) / (t.price - e.price)),
                ) / 100)),
            this._source.points().length >= 6 &&
              ((i = this._source.points()[3]),
              (n = this._source.points()[4]),
              (s = this._source.points()[5]),
              (this._retrace2 =
                Math.round(
                  100 * Math.abs((s.price - n.price) / (n.price - i.price)),
                ) / 100));
        }),
        (t.LineToolThreeDrivesPaneView = n);
    },
    SvjA: function (e, t, i) {
      'use strict';
      function n(e, t) {
        a.call(this, e, t),
          (this._trendLineRendererPoints12 = new h()),
          (this._trendLineRendererPoints23 = new h());
      }
      var r = i('aO4+').Point,
        s = i('z+cS').VerticalLineRenderer,
        a = i('aB9a').LineSourcePaneView,
        o = i('qgcf').TextRenderer,
        l = i('IjC5').RectangleRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('VdBB').HitTestResult,
        c = i('Zy3/').CompositeRenderer,
        p = i('a7Ha').LineEnd;
      inherit(n, a),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, s, o, l, h, d, c, p;
          if (
            (a.prototype._updateImpl.call(this),
            !(this._source.points().length < 3) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty() &&
              ((e = this._source.points()[0]),
              (t = this._source.points()[1]),
              (i = this._source.points()[2]),
              (this._levels = []),
              t.index !== e.index &&
                ((n = t.index - e.index),
                (r = this._source.properties()),
                (s = i.index),
                null !== this._model.timeScale().visibleBarsStrictRange())))
          )
            for (o = 1; o <= 11; o++)
              (l = r['level' + o]).visible.value() &&
                ((h = l.coeff.value()),
                (d = l.color.value()),
                (c = Math.round(s + h * n)),
                (p = {
                  x: this._model.timeScale().indexToCoordinate(c),
                  coeff: h,
                  color: d,
                  linewidth: l.linewidth.value(),
                  linestyle: l.linestyle.value(),
                  index: o,
                }),
                r.showCoeffs.value() &&
                  ((p.text = h), (p.y = this._source.priceScale().height())),
                this._levels.push(p));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, a, h, _, u, f, g, v, w, y, m, x, b, R, S, T, P, L, C;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new c()),
            this._points.length < 2)
          )
            return n;
          if (
            ((a = this._points[0]),
            (h = this._points[1]),
            (_ = this._source.properties()).trendline.visible.value() &&
              ((u = {
                points: [a, h],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: _.trendline.color.value(),
                linewidth: _.trendline.linewidth.value(),
                linestyle: _.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: p.Normal,
                rightend: p.Normal,
              }),
              this._trendLineRendererPoints12.setData(u),
              n.append(this._trendLineRendererPoints12)),
            this._points.length < 3)
          )
            return i && this.addAnchors(n), n;
          for (
            f = this._points[2],
              _.trendline.visible.value() &&
                ((u = {
                  points: [h, f],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: _.trendline.color.value(),
                  linewidth: _.trendline.linewidth.value(),
                  linestyle: _.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: p.Normal,
                  rightend: p.Normal,
                }),
                this._trendLineRendererPoints23.setData(u),
                n.append(this._trendLineRendererPoints23)),
              g = _.fillBackground.value(),
              v = _.transparency.value(),
              t = this._model.timeScale().width(),
              e = this._source.priceScale().height(),
              w = 0;
            w < this._levels.length;
            w++
          ) {
            if (
              (w > 0 &&
                g &&
                ((y = this._levels[w - 1]),
                (a = new r(y.x, 0)),
                (h = new r(
                  this._levels[w].x,
                  this._source.priceScale().height(),
                )),
                ((m = {}).points = [a, h]),
                (m.color = this._levels[w].color),
                (m.linewidth = 0),
                (m.backcolor = this._levels[w].color),
                (m.fillBackground = !0),
                (m.transparency = v),
                (x = new l(void 0, void 0, !0)).setData(m),
                n.append(x)),
              void 0 !== this._levels[w].text)
            ) {
              switch (
                (T =
                  'left' === (T = _.horzLabelsAlign.value())
                    ? 'right'
                    : 'right' === T
                    ? 'left'
                    : 'center')
              ) {
                case 'left':
                  R = 3;
                  break;
                case 'center':
                  R = 0;
                  break;
                case 'right':
                  R = -3;
              }
              switch (_.vertLabelsAlign.value()) {
                case 'top':
                  (b = new r(this._levels[w].x, 0)), (S = 5);
                  break;
                case 'middle':
                  (b = new r(this._levels[w].x, 0.5 * this._levels[w].y)),
                    (S = 0);
                  break;
                case 'bottom':
                  (b = new r(this._levels[w].x, this._levels[w].y)), (S = -10);
              }
              (P = {
                points: [b],
                text: '' + this._levels[w].text,
                color: this._levels[w].color,
                vertAlign: 'middle',
                horzAlign: T,
                font: _.font.value(),
                offsetX: R,
                offsetY: S,
                fontsize: 12,
              }),
                n.append(new o(P));
            }
            ((L = {}).width = t),
              (L.height = e),
              (L.points = [new r(this._levels[w].x, 0)]),
              (L.color = this._levels[w].color),
              (L.linewidth = this._levels[w].linewidth),
              (L.linestyle = this._levels[w].linestyle),
              (C = new d(d.MOVEPOINT, null, this._levels[w].index)),
              (x = new s()).setData(L),
              x.setHitTest(C),
              n.append(x);
          }
          return i && this.addAnchors(n), n;
        }),
        (t.TrendBasedFibTimePaneView = n);
    },
    UcQu: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._percentageFormatter = new c()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._topBorderRenderer = new h()),
          (this._bottomBorderRenderer = new h()),
          (this._leftBorderRenderer = new h()),
          (this._rightBorderRenderer = new h()),
          (this._distanceLineRenderer = new h()),
          (this._distancePriceRenderer = new h()),
          (this._backgroundRenderer = new l()),
          (this._textRenderer = new a({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('qgcf').calculateLabelPosition,
        l = i('IjC5').RectangleRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('Zy3/').CompositeRenderer,
        c = i('GH0z').PercentageFormatter,
        p = i('nda6').TimeSpanFormatter,
        _ = i('5C6T').PipFormatter,
        u = i('a7Ha').LineEnd,
        f = i('Ialn'),
        g = f.forceLTRStr,
        v = f.startWithLTR;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            a,
            l,
            h,
            c,
            f,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M,
            A,
            D,
            E,
            V,
            N,
            z;
          return (
            this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2 || this._source.points().length < 2
              ? n
              : ((s = this._source.properties()).fillBackground &&
                  s.fillBackground.value() &&
                  (((a = {}).points = this._points),
                  (a.color = 'white'),
                  (a.linewidth = 0),
                  (a.backcolor = s.backgroundColor.value()),
                  (a.fillBackground = !0),
                  (a.transparency = s.backgroundTransparency.value()),
                  this._backgroundRenderer.setData(a),
                  n.append(this._backgroundRenderer)),
                (l = this),
                (h = function (e, t, i) {
                  var r = {};
                  (r.points = [t, i]),
                    (r.width = l._model.timeScale().width()),
                    (r.height = l._source.priceScale().height()),
                    (r.color = l._source.properties().linecolor.value()),
                    (r.linewidth = l._source.properties().linewidth.value()),
                    (r.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (r.extendleft = !1),
                    (r.extendright = !1),
                    (r.leftend = u.Normal),
                    (r.rightend = u.Normal),
                    e.setData(r),
                    n.append(e);
                }),
                (c = this._points[0]),
                (f = this._points[1]),
                h(this._topBorderRenderer, c, new r(f.x, c.y)),
                h(this._bottomBorderRenderer, new r(c.x, f.y), f),
                h(this._leftBorderRenderer, c, new r(c.x, f.y)),
                h(this._rightBorderRenderer, new r(f.x, c.y), f),
                (w = Math.round((c.y + f.y) / 2)),
                (y = new r(c.x, w)),
                (m = new r(f.x, w)),
                ((a = {}).points = [y, m]),
                (a.width = l._model.timeScale().width()),
                (a.height = l._source.priceScale().height()),
                (a.color = l._source.properties().linecolor.value()),
                (a.linewidth = l._source.properties().linewidth.value()),
                (a.linestyle = CanvasEx.LINESTYLE_SOLID),
                (a.extendleft = !1),
                (a.extendright = !1),
                (a.leftend = u.Normal),
                (a.rightend = u.Arrow),
                this._distanceLineRenderer.setData(a),
                n.append(this._distanceLineRenderer),
                (c = this._points[0]),
                (f = this._points[1]),
                (x = Math.round((c.x + f.x) / 2)),
                (y = new r(x, c.y)),
                (m = new r(x, f.y)),
                ((a = {}).points = [y, m]),
                (a.width = l._model.timeScale().width()),
                (a.height = l._source.priceScale().height()),
                (a.color = l._source.properties().linecolor.value()),
                (a.linewidth = l._source.properties().linewidth.value()),
                (a.linestyle = CanvasEx.LINESTYLE_SOLID),
                (a.extendleft = !1),
                (a.extendright = !1),
                (a.leftend = u.Normal),
                (a.rightend = u.Arrow),
                this._distancePriceRenderer.setData(a),
                n.append(this._distancePriceRenderer),
                (b = this._source.points()[0].price),
                (T =
                  (100 * (S = (R = this._source.points()[1].price) - b)) / b),
                (P = this._source.points()[0].index),
                (L = this._source.points()[1].index),
                (C = g(L - P + '')),
                (B = this._model.timeScale().indexToUserTime(P)),
                (k = this._model.timeScale().indexToUserTime(L)),
                (O = ''),
                B &&
                  k &&
                  ((I = (k.valueOf() - B.valueOf()) / 1e3),
                  (O = ', ' + v(new p().format(I)))),
                (M = this._model.mainSeries().symbolInfo()) &&
                  M !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new _(
                    M.pricescale,
                    M.minmov,
                    M.type,
                    M.minmove2,
                  )),
                  (this._lastSymbolInfo = M)),
                (A =
                  this._source.ownerSource().formatter().format(S) +
                  ' (' +
                  this._percentageFormatter.format(Math.round(100 * T) / 100) +
                  ') ' +
                  (this._pipFormatter ? this._pipFormatter.format(S) : '')),
                (D = g(A) + '\n' + $.t('{0} bars').format(C) + O),
                (a = {}),
                R > b
                  ? (((E = f.clone()).y -= 2 * s.fontsize.value()),
                    (E.x = 0.5 * (c.x + f.x)),
                    (a.points = [E]))
                  : (((E = f.clone()).x = 0.5 * (c.x + f.x)),
                    (E.y += 0.7 * s.fontsize.value()),
                    (a.points = [E])),
                (V = { x: 0, y: 10 }),
                (a.text = D),
                (a.color = s.textcolor.value()),
                (a.height = l._source.priceScale().height()),
                (a.font = s.font.value()),
                (a.offsetX = V.x),
                (a.offsetY = V.y),
                (a.padding = 8),
                (a.vertAlign = 'middle'),
                (a.horzAlign = 'center'),
                (a.fontsize = s.fontsize.value()),
                (a.backgroundRoundRect = 4),
                (a.backgroundHorzInflate = 0.4 * s.fontsize.value()),
                (a.backgroundVertInflate = 0.2 * s.fontsize.value()),
                s.fillLabelBackground &&
                  s.fillLabelBackground.value() &&
                  (a.backgroundColor = s.labelBackgroundColor.value()),
                s.drawBorder &&
                  s.drawBorder.value() &&
                  (a.borderColor = s.borderColor.value()),
                this._textRenderer.setData(a),
                (N = this._textRenderer.measure()),
                (z = o(N, c, f, V, l._source.priceScale().height())),
                this._textRenderer.setPoints([z]),
                n.append(this._textRenderer),
                i && this.addAnchors(n),
                n)
          );
        }),
        (t.DateAndPriceRangePaneView = n);
    },
    UfPO: function (e, t, i) {
      'use strict';
      e.exports = function (e, t) {
        var i = document.body,
          n = i[e];
        return (
          n || (((n = document.createElement('img')).src = t), (i[e] = n)), n
        );
      };
    },
    VghZ: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._percentageFormatter = new c()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._topBorderRenderer = new h()),
          (this._bottomBorderRenderer = new h()),
          (this._distanceRenderer = new h()),
          (this._backgroundRenderer = new l()),
          (this._labelRenderer = new a({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('qgcf').calculateLabelPosition,
        l = i('IjC5').RectangleRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('Zy3/').CompositeRenderer,
        c = i('GH0z').PercentageFormatter,
        p = i('5C6T').PipFormatter,
        _ = i('a7Ha').LineEnd,
        u = i('Ialn').forceLTRStr;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            a,
            l,
            h,
            c,
            f,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I;
          return (
            this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2 || this._source.points().length < 2
              ? n
              : ((a = (s = this._source.properties()).extendLeft.value()),
                (l = s.extendRight.value()),
                (t = this._model.timeScale().width()),
                (h = this._points[0]),
                (c = this._points[1]),
                (f = a ? 0 : Math.min(h.x, c.x)),
                (g = l ? t : Math.max(h.x, c.x)),
                s.fillBackground &&
                  s.fillBackground.value() &&
                  (((v = {}).points = [new r(f, h.y), new r(g, c.y)]),
                  (v.color = 'white'),
                  (v.linewidth = 0),
                  (v.backcolor = s.backgroundColor.value()),
                  (v.fillBackground = !0),
                  (v.transparency = s.backgroundTransparency.value()),
                  this._backgroundRenderer.setData(v),
                  n.append(this._backgroundRenderer)),
                (w = this),
                (y = function (e, t, i) {
                  var r = {};
                  (r.points = [t, i]),
                    (r.width = w._model.timeScale().width()),
                    (r.height = w._source.priceScale().height()),
                    (r.color = w._source.properties().linecolor.value()),
                    (r.linewidth = w._source.properties().linewidth.value()),
                    (r.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (r.extendleft = !1),
                    (r.extendright = !1),
                    (r.leftend = _.Normal),
                    (r.rightend = _.Normal),
                    e.setData(r),
                    n.append(e);
                })(this._topBorderRenderer, new r(f, h.y), new r(g, h.y)),
                y(this._bottomBorderRenderer, new r(f, c.y), new r(g, c.y)),
                (h = this._points[0]),
                (c = this._points[1]),
                (m = Math.round((h.x + c.x) / 2)),
                (x = new r(m, h.y)),
                (b = new r(m, c.y)),
                ((v = {}).points = [x, b]),
                (v.width = w._model.timeScale().width()),
                (v.height = w._source.priceScale().height()),
                (v.color = w._source.properties().linecolor.value()),
                (v.linewidth = w._source.properties().linewidth.value()),
                (v.linestyle = CanvasEx.LINESTYLE_SOLID),
                (v.extendleft = !1),
                (v.extendright = !1),
                (v.leftend = _.Normal),
                (v.rightend = _.Arrow),
                this._distanceRenderer.setData(v),
                n.append(this._distanceRenderer),
                (R = this._source.points()[0].price),
                (P =
                  (100 * (T = (S = this._source.points()[1].price) - R)) / R),
                (L = this._model.mainSeries().symbolInfo()) &&
                  L !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new p(
                    L.pricescale,
                    L.minmov,
                    L.type,
                    L.minmove2,
                  )),
                  (this._lastSymbolInfo = L)),
                (C = u(
                  this._source.ownerSource().formatter().format(T) +
                    ' (' +
                    this._percentageFormatter.format(P) +
                    ') ' +
                    (this._pipFormatter ? this._pipFormatter.format(T) : ''),
                )),
                (v = {}),
                S > R
                  ? (((B = c.clone()).y -= 2 * s.fontsize.value()),
                    (B.x = 0.5 * (h.x + c.x)),
                    (v.points = [B]))
                  : (((B = c.clone()).x = 0.5 * (h.x + c.x)),
                    (B.y += 0.7 * s.fontsize.value()),
                    (v.points = [B])),
                (k = { x: 0, y: 10 }),
                (v.text = C),
                (v.color = s.textcolor.value()),
                (v.height = w._source.priceScale().height()),
                (v.font = s.font.value()),
                (v.offsetX = k.x),
                (v.offsetY = k.y),
                (v.vertAlign = 'middle'),
                (v.horzAlign = 'center'),
                (v.fontsize = s.fontsize.value()),
                (v.backgroundRoundRect = 4),
                (v.backgroundHorzInflate = 0.4 * s.fontsize.value()),
                (v.backgroundVertInflate = 0.2 * s.fontsize.value()),
                s.fillLabelBackground &&
                  s.fillLabelBackground.value() &&
                  (v.backgroundColor = s.labelBackgroundColor.value()),
                s.drawBorder &&
                  s.drawBorder.value() &&
                  (v.borderColor = s.borderColor.value()),
                this._labelRenderer.setData(v),
                (O = this._labelRenderer.measure()),
                (I = o(O, h, c, k, w._source.priceScale().height())),
                this._labelRenderer.setPoints([I]),
                n.append(this._labelRenderer),
                i && this.addAnchors(n),
                n)
          );
        }),
        (t.PriceRangePaneView = n);
    },
    X4Cb: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l, h, d, c, p, _;
      i.r(t),
        i.d(t, 'GannComplexPaneView', function () {
          return _;
        }),
        (n = i('mrSG')),
        (r = i('aO4+')),
        (s = i('aB9a')),
        (a = i('pJOz')),
        (o = i('qgcf')),
        (l = i('Zy3/')),
        (h = i('a7Ha')),
        (d = i('8Uy/')),
        (c = i('amvX')),
        (p = i('Ialn')),
        (_ = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this;
            return (
              (n._verticalLevelsRenderers = []),
              (n._horizontalLevelsRenderers = []),
              (n._fanRenderers = []),
              (n._arcRenderers = []),
              (n._priceDiffTextRenderer = new o.TextRenderer()),
              (n._indexDiffTextRenderer = new o.TextRenderer()),
              (n._ratioTextRenderer = new o.TextRenderer()),
              n._initRenderers(),
              n
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.renderer = function (e, t, i) {
              var n, r, s, a, o, h, d, c, p, _, u, f, g;
              return (
                this._invalidated && this._updateImpl(),
                (n = new l.CompositeRenderer()),
                (r = this._getPoints()).length < 2
                  ? (i && this.addAnchors(n), n)
                  : ((s = r[0]),
                    (a = r[1]),
                    (h = (o = this._getSource()).isReversed()) &&
                      ((a = r[0]), (s = r[1])),
                    (d = a.x - s.x),
                    (c = a.y - s.y),
                    (p = s),
                    (_ = a),
                    (f = {
                      paneHeight: e,
                      paneWidth: (u = this._getModel()).timeScale().width(),
                      barsCoordsRange: d,
                      priceCoordsRange: c,
                      startPoint: p,
                      endPoint: _,
                      p1: s,
                      p2: a,
                      isLabelsVisible: o.isLabelsVisible(),
                      reversed: h,
                    }),
                    this._prepareLevels(n, f),
                    this._prepareFanLines(n, f),
                    this._prepareArcs(n, f),
                    this._prepareLabels(n, f),
                    i &&
                      ((g = [s, a]),
                      u.lineBeingCreated() === o && g.pop(),
                      n.append(this.createLineAnchor({ points: g }))),
                    n)
              );
            }),
            (t.prototype._initRenderers = function () {
              var e,
                t,
                i,
                n = this._getSource(),
                r = n.levelsCount();
              for (e = 0; e < r; e++)
                this._verticalLevelsRenderers.push(new a.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new a.TrendLineRenderer(),
                  );
              for (t = n.fanLinesCount(), e = 0; e < t; e++)
                this._fanRenderers.push(new a.TrendLineRenderer());
              for (i = n.arcsCount(), e = 0; e < i; e++)
                this._arcRenderers.push(new c.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                l,
                c,
                p,
                _,
                u,
                f = t.startPoint,
                g = t.endPoint,
                v = t.paneHeight,
                w = t.paneWidth,
                y = t.barsCoordsRange,
                m = t.priceCoordsRange,
                x = this._getSource(),
                b = x.levels();
              for (i = 0, n = b; i < n.length; i++)
                (s = n[i]).visible &&
                  ((a = s.index / 5),
                  (o = f.x + a * y),
                  (l = {
                    points: [new r.Point(o, f.y), new r.Point(o, g.y)],
                    width: w,
                    height: v,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: d.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: h.LineEnd.Normal,
                    rightend: h.LineEnd.Normal,
                  }),
                  (c = this._verticalLevelsRenderers[s.index]).setData(l),
                  e.append(c),
                  (p = f.y + a * m),
                  (_ = {
                    points: [new r.Point(f.x, p), new r.Point(g.x, p)],
                    width: w,
                    height: v,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: d.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: h.LineEnd.Normal,
                    rightend: h.LineEnd.Normal,
                  }),
                  (u = this._horizontalLevelsRenderers[s.index]).setData(_),
                  e.append(u));
            }),
            (t.prototype._prepareFanLines = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                l,
                c,
                p,
                _,
                u,
                f = t.p1,
                g = t.startPoint,
                v = t.endPoint,
                w = t.paneHeight,
                y = t.paneWidth,
                m = t.barsCoordsRange,
                x = t.priceCoordsRange,
                b = this._getSource(),
                R = b.fanLines();
              for (i = 0, n = R; i < n.length; i++)
                (s = n[i]).visible &&
                  ((l = void 0),
                  (c = void 0),
                  (a = s.x) > (o = s.y)
                    ? ((l = v.x), (p = o / a), (c = g.y + p * x))
                    : ((c = v.y), (p = a / o), (l = g.x + p * m)),
                  (_ = {
                    points: [f, new r.Point(l, c)],
                    width: y,
                    height: w,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: d.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: h.LineEnd.Normal,
                    rightend: h.LineEnd.Normal,
                  }),
                  (u = this._fanRenderers[s.index]).setData(_),
                  e.append(u));
            }),
            (t.prototype._prepareArcs = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                l,
                h,
                d,
                c,
                p = t.p1,
                _ = t.startPoint,
                u = t.endPoint,
                f = t.barsCoordsRange,
                g = t.priceCoordsRange,
                v = p,
                w = this._getSource(),
                y = w.isArcsBackgroundFilled(),
                m = w.arcsBackgroundTransparency(),
                x = w.arcs();
              for (i = 0, n = x; i < n.length; i++)
                (s = n[i]).visible &&
                  ((a = s.x / 5),
                  (o = s.y / 5),
                  (l = _.x + a * f),
                  (h = _.y + o * g),
                  (d = {
                    center: _,
                    point: new r.Point(l, h),
                    edge: u,
                    color: s.color,
                    linewidth: s.width,
                    fillBack: y,
                    transparency: m,
                    prevPoint: v,
                  }),
                  (c = this._arcRenderers[s.index]).setData(d),
                  e.append(c),
                  (v = d.point));
            }),
            (t.prototype._prepareLabels = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                l,
                h,
                d,
                c,
                _,
                u,
                f,
                g,
                v,
                w = t.p1,
                y = t.p2,
                m = t.isLabelsVisible,
                x = t.reversed;
              m &&
                ((n = (i = this._getSource()).ownerSource()),
                (s = i.getPriceDiff()),
                (a = i.getIndexDiff()),
                null !== s &&
                  null !== a &&
                  null !== n &&
                  (x && ((s = -s), (a = -a)),
                  (o = new r.Point(w.x, y.y)),
                  (l = Object(p.forceLTRStr)(n.formatter().format(s))),
                  ((h = this._getLabelData(o, l)).horzAlign =
                    a > 0 ? 'right' : 'left'),
                  (h.vertAlign = s > 0 ? 'bottom' : 'top'),
                  (h.offsetX = a > 0 ? -10 : 10),
                  (h.offsetY = s > 0 ? -10 : 10),
                  (h.forceTextAlign = !0),
                  this._priceDiffTextRenderer.setData(h),
                  e.append(this._priceDiffTextRenderer),
                  (d = new r.Point(y.x, w.y)),
                  (c = Object(p.forceLTRStr)(a.toString())),
                  ((_ = this._getLabelData(d, c)).horzAlign =
                    a > 0 ? 'left' : 'right'),
                  (_.vertAlign = s > 0 ? 'top' : 'bottom'),
                  (_.offsetX = a > 0 ? 10 : -10),
                  (_.offsetY = s > 0 ? 10 : -10),
                  (_.forceTextAlign = !0),
                  this._indexDiffTextRenderer.setData(_),
                  e.append(this._indexDiffTextRenderer),
                  null !== (u = i.getScaleRatio()) &&
                    ((f = i.getScaleRatioFormatter()),
                    (g = Object(p.forceLTRStr)(f.format(u))),
                    ((v = this._getLabelData(y, g)).horzAlign =
                      a > 0 ? 'left' : 'right'),
                    (v.vertAlign = s > 0 ? 'bottom' : 'top'),
                    (v.offsetX = a > 0 ? 10 : -10),
                    (v.offsetY = s > 0 ? -10 : 10),
                    (v.forceTextAlign = !0),
                    this._ratioTextRenderer.setData(v),
                    e.append(this._ratioTextRenderer))));
            }),
            (t.prototype._getLabelData = function (e, t) {
              var i = this._getSource(),
                n = i.getLabelsStyle(),
                r = n.textColor,
                s = n.font,
                a = n.fontSize,
                o = n.bold,
                l = n.italic;
              return {
                points: [e],
                backgroundColor: 'transparent',
                text: t,
                font: s,
                bold: o,
                italic: l,
                fontsize: a,
                color: r,
                vertAlign: 'top',
                horzAlign: 'center',
                offsetX: 0,
                offsetY: 0,
                backgroundRoundRect: 4,
              };
            }),
            t
          );
        })(s.LineSourcePaneView));
    },
    XHET: function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        a.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendLineRenderer = new h()),
          (this._angleRenderer = new n()),
          (this._angleLabelRenderer = new l({}));
      }
      var s = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('5/lF').TrendLineStatsRenderer,
        l = i('qgcf').TextRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('Zy3/').CompositeRenderer,
        c = i('GH0z').PercentageFormatter,
        p = i('1mZ4').SelectionRenderer,
        _ = i('5C6T').PipFormatter,
        u = i('a7Ha').LineEnd,
        f = i('8xAY').LabelSettings,
        g = i('zDbI').CHART_FONT_FAMILY,
        v = (i('MMac').PaneRendererClockIcon, i('Ialn').forceLTRStr);
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.hitTest = function () {
          return null;
        }),
        (n.prototype.draw = function (e) {
          var t, i;
          null !== this._data &&
            (e.save(),
            e.translate(this._data.point.x, this._data.point.y),
            (e.strokeStyle = this._data.color),
            (t = [1, 2]),
            'function' == typeof e.setLineDash
              ? e.setLineDash(t)
              : void 0 !== e.mozDash
              ? (e.mozDash = t)
              : void 0 !== e.webkitLineDash && (e.webkitLineDash = t),
            (i = this._data.size),
            e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(i, 0),
            e.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0),
            e.stroke(),
            e.restore());
        }),
        inherit(r, a),
        (r.prototype._updateImpl = function () {
          var e, t, i, n, r, o, l, h, d, p, u, f;
          a.prototype._updateImpl.call(this),
            this._points.length > 0 &&
              void 0 !== this._source._angle &&
              ((e = this._points[0]),
              (t = Math.cos(this._source._angle)),
              (i = -Math.sin(this._source._angle)),
              (n = new s(t, i)),
              (this._secondPoint = e.addScaled(n, this._source._distance)),
              (this._secondPoint.data = 1),
              (this._middlePoint = this._source.calcMiddlePoint(
                this._points[0],
                this._secondPoint,
              ))),
            (this._label = null),
            this._source.points().length < 2 ||
              ((e = this._source.points()[0]),
              (r = this._source.points()[1]),
              (o = []),
              this._source.properties().showPriceRange.value() &&
                this._source.priceScale() &&
                ((p = (d = r.price - e.price) / e.price),
                (l =
                  this._source.ownerSource().formatter().format(d) +
                  ' (' +
                  new c().format(100 * p) +
                  ') '),
                (u = this._model.mainSeries().symbolInfo()) &&
                  u !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new _(
                    u.pricescale,
                    u.minmov,
                    u.type,
                    u.minmove2,
                  )),
                  (this._lastSymbolInfo = u)),
                (l += this._pipFormatter
                  ? ', ' + this._pipFormatter.format(d)
                  : ''),
                o.push('priceRange')),
              this._source.properties().showBarsRange.value() &&
                ((h = ''),
                (f = r.index - e.index),
                (h += $.t('{0} bars').format(v(f))),
                o.push('barsRange')),
              (this._label =
                [v(l), h]
                  .filter(function (e) {
                    return e;
                  })
                  .join('\n') || null),
              (this._icons = o));
        }),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s, a, l, h, c, _, w, y, m, x, b, R;
          return (
            this._invalidated && this._updateImpl(),
            (n = new d()),
            (r = {}),
            (s = i || this._source.properties().alwaysShowStats.value()),
            (a =
              (this.isHoveredSource() || this.isSelectedSource()) &&
              this._source.properties().showMiddlePoint.value()),
            this._secondPoint &&
              this._points.length > 0 &&
              ((r.points = [this._points[0], this._secondPoint]),
              (r.width = this._model.timeScale().width()),
              (r.height = this._source.priceScale().height()),
              (r.color = this._source.properties().linecolor.value()),
              (r.linewidth = this._source.properties().linewidth.value()),
              (r.linestyle = this._source.properties().linestyle.value()),
              (r.extendleft = this._source.properties().extendLeft.value()),
              (r.extendright = this._source.properties().extendRight.value()),
              (r.leftend = u.Normal),
              (r.rightend = u.Normal),
              this._trendLineRenderer.setData(r),
              n.append(this._trendLineRenderer),
              s &&
                this._label &&
                2 === this._points.length &&
                ((l = this._source.properties().statsPosition.value()),
                (h = this._source.getPointByPosition(
                  l,
                  r.points[0],
                  this._middlePoint,
                  r.points[1],
                )),
                (_ = (c = this._model.isDark())
                  ? f.bgColorDark
                  : f.bgColorLight),
                (w = c ? f.textColorDark : f.textColorLight),
                (y = {
                  points: [h],
                  text: this._label,
                  color: w,
                  isDark: c,
                  font: g,
                  fontSize: f.fontSize,
                  lineSpacing: f.lineSpacing,
                  backgroundColor: _,
                  backgroundRoundRect: f.rectRadius,
                  paddingLeft: f.paddingLeftRight,
                  paddingRight: f.paddingLeftRight,
                  paddingTop: f.paddingTopBottom,
                  paddingBottom: f.paddingTopBottom,
                  textPadding: f.textPadding,
                  doNotAlignText: !0,
                  icons: this._icons,
                }),
                (m = f.offset),
                (y.offsetX = m),
                (this._points[1].y < this._points[0].y &&
                  this._points[1].x < this._points[0].x) ||
                (this._points[1].y > this._points[0].y &&
                  this._points[1].x > this._points[0].x)
                  ? ((y.vertAlign = 'bottom'), (y.offsetY = -m))
                  : (y.offsetY = m),
                n.append(new o(y, this._rendererCache))),
              a &&
                this._middlePoint &&
                n.append(
                  new p({
                    points: [this._middlePoint],
                    isDark: this._model.isDark,
                  }),
                ),
              ((x = {}).point = this._points[0]),
              (x.angle = this._source._angle),
              (x.color = this._source.properties().linecolor.value()),
              (x.size = 50),
              this._angleRenderer.setData(x),
              n.append(this._angleRenderer),
              (b = Math.round((180 * x.angle) / Math.PI) + 'º'),
              ((h = this._points[0].clone()).x = h.x + 50),
              (R = {
                points: [h],
                text: v(b),
                color: this._source.properties().textcolor.value(),
                horzAlign: 'left',
                font: this._source.properties().font.value(),
                offsetX: 5,
                offsetY: 0,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                vertAlign: 'middle',
              }),
              this._angleLabelRenderer.setData(R),
              n.append(this._angleLabelRenderer)),
            this._secondPoint &&
              this._points.length > 0 &&
              i &&
              n.append(
                this.createLineAnchor({
                  points: [this._points[0], this._secondPoint],
                }),
              ),
            n
          );
        }),
        (t.TrendAnglePaneView = r);
    },
    ZJWf: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t);
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        o = i('qgcf').TextRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a, o, l, h, d, c, p, _, u;
          if (
            (s.prototype._updateImpl.call(this),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          )
            for (
              e = this._floatPoints[0],
                t = this._floatPoints[1],
                this._fans = [],
                i = t.x - e.x,
                n = t.y - e.y,
                o = 1;
              o <= 9;
              o++
            )
              (l = 'level' + o),
                (h = this._source.properties()[l]).visible.value() &&
                  ((p = (d = h.coeff1.value()) / (c = h.coeff2.value())),
                  (_ = h.color.value()),
                  (u = d + '/' + c),
                  d > c
                    ? ((r = t.x), (a = e.y + n / p))
                    : ((r = e.x + i * p), (a = t.y)),
                  this._fans.push({
                    label: u,
                    color: _,
                    x: r,
                    y: a,
                    linewidth: h.linewidth.value(),
                    linestyle: h.linestyle.value(),
                    index: o,
                  }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, p, _, u, f, g, v, w, y, m, x;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new d()),
            this._floatPoints.length < 2)
          )
            return n;
          for (
            s = this._floatPoints[0],
              p = this._source.properties(),
              _ = this._source.properties().fillBackground.value(),
              u = this._source.properties().transparency.value(),
              f = 0;
            f < this._fans.length;
            f++
          )
            (g = new r(this._fans[f].x, this._fans[f].y)),
              _ &&
                (this._fans[f].index < 4
                  ? ((v = new r(this._fans[f + 1].x, this._fans[f + 1].y)),
                    ((w = {}).width = this._model.timeScale().width()),
                    (w.height = this._source.priceScale().height()),
                    (w.p1 = s),
                    (w.p2 = g),
                    (w.p3 = s),
                    (w.p4 = v),
                    (w.color = this._fans[f].color),
                    (w.transparency = u),
                    (w.hittestOnBackground = !0),
                    (y = new a()).setData(w),
                    n.append(y))
                  : this._fans[f].index > 4 &&
                    f > 0 &&
                    ((v = new r(this._fans[f - 1].x, this._fans[f - 1].y)),
                    ((w = {}).width = this._model.timeScale().width()),
                    (w.height = this._source.priceScale().height()),
                    (w.p1 = s),
                    (w.p2 = g),
                    (w.p3 = s),
                    (w.p4 = v),
                    (w.color = this._fans[f].color),
                    (w.transparency = u),
                    (w.hittestOnBackground = !0),
                    (y = new a()).setData(w),
                    n.append(y))),
              (m = {
                points: [s, g],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._fans[f].color,
                linewidth: this._fans[f].linewidth,
                linestyle: this._fans[f].linestyle,
                extendleft: !1,
                extendright: !0,
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              (y = new l()).setData(m),
              y.setHitTest(new h(h.MOVEPOINT, null, this._fans[f].index)),
              n.append(y),
              p.showLabels.value() &&
                ((x = {
                  points: [g],
                  text: this._fans[f].label,
                  color: this._fans[f].color,
                  vertAlign: 'middle',
                  horzAlign: 'left',
                  font: p.font.value(),
                  offsetX: 0,
                  offsetY: -5,
                  fontsize: 12,
                }),
                n.append(new o(x)));
          return i && this.addAnchors(n), n;
        }),
        (t.GannFanPaneView = n);
    },
    a6on: function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        a.call(this, e, t), (this._renderer = new n());
      }
      var s = i('GEp6').distanceToSegment,
        a = i('aB9a').LineSourcePaneView,
        o = i('pJOz').TrendLineRenderer,
        l = i('VdBB').HitTestResult,
        h = i('Zy3/').CompositeRenderer,
        d = i('Tmoa'),
        c = i('a7Ha').LineEnd,
        p = i('2hKl');
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, s, a, l, h, p, _, u, f, g;
          if (null !== this._data)
            if (
              ((e.lineCap = 'butt'),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              CanvasEx.setLineStyle(e, this._data.linestyle),
              (t = this._data.points[0]),
              (i = this._data.points[1]),
              2 === this._data.points.length)
            )
              e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                e.stroke(),
                this._data.leftend === c.Arrow &&
                  o.prototype.drawArrow(i, t, e, e.lineWidth),
                this._data.rightend === c.Arrow &&
                  o.prototype.drawArrow(t, i, e, e.lineWidth);
            else {
              if (
                ((n = this._data.points[2]),
                (s = (r = this._data.points[3]).subtract(t)),
                (a = n.subtract(s.scaled(0.25))),
                (l = n.add(s.scaled(0.25))),
                (h = i.subtract(n)),
                (p = r.subtract(h.scaled(0.25))),
                (_ = r.add(h.scaled(0.25))),
                this._data.fillBack &&
                  this._data.points.length > 2 &&
                  ((e.fillStyle = d.generateColor(
                    this._data.backcolor,
                    this._data.transparency,
                  )),
                  e.beginPath(),
                  e.moveTo(t.x, t.y),
                  e.quadraticCurveTo(a.x, a.y, n.x, n.y),
                  e.bezierCurveTo(l.x, l.y, p.x, p.y, r.x, r.y),
                  e.quadraticCurveTo(_.x, _.y, i.x, i.y),
                  e.fill()),
                e.beginPath(),
                this._data.extendLeftPoints.length > 0)
              )
                for (
                  u = this._data.extendLeftPoints[
                    this._data.extendLeftPoints.length - 1
                  ],
                    e.moveTo(u.x, u.y),
                    f = this._data.extendLeftPoints.length - 2;
                  f >= 0;
                  f--
                )
                  (g = this._data.extendLeftPoints[f]), e.lineTo(g.x, g.y);
              for (
                e.moveTo(t.x, t.y),
                  e.quadraticCurveTo(a.x, a.y, n.x, n.y),
                  e.bezierCurveTo(l.x, l.y, p.x, p.y, r.x, r.y),
                  e.quadraticCurveTo(_.x, _.y, i.x, i.y),
                  f = 0;
                f < this._data.extendRightPoints.length;
                f++
              )
                (g = this._data.extendRightPoints[f]), e.lineTo(g.x, g.y);
              e.stroke(),
                this._data.leftend === c.Arrow &&
                  o.prototype.drawArrow(a, t, e, e.lineWidth),
                this._data.rightend === c.Arrow &&
                  o.prototype.drawArrow(_, i, e, e.lineWidth);
            }
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, a, o, h, d, c, _, u, f;
          if (4 === this._data.points.length) {
            if (
              ((t = this._data.points[0]),
              (i = this._data.points[1]),
              (n = this._data.points[2]),
              (a = (r = this._data.points[3]).subtract(t)),
              (o = n.subtract(a.scaled(0.25))),
              (h = n.add(a.scaled(0.25))),
              (d = i.subtract(n)),
              (c = r.subtract(d.scaled(0.25))),
              (_ = r.add(d.scaled(0.25))),
              p.quadroBezierHitTest(n, t, o, e) ||
                p.cubicBezierHitTest(n, r, h, c, e) ||
                p.quadroBezierHitTest(r, i, _, e))
            )
              return new l(l.MOVEPOINT);
            for (u = 3, f = 1; f < this._data.extendLeftPoints.length; f++)
              if (
                ((t = this._data.extendLeftPoints[f - 1]),
                (i = this._data.extendLeftPoints[f]),
                s(t, i, e).distance < u)
              )
                return new l(l.MOVEPOINT);
            for (f = 1; f < this._data.extendRightPoints.length; f++)
              if (
                ((t = this._data.extendRightPoints[f - 1]),
                (i = this._data.extendRightPoints[f]),
                s(t, i, e).distance < u)
              )
                return new l(l.MOVEPOINT);
          }
          return null;
        }),
        inherit(r, a),
        (r.prototype._updateImpl = function () {
          var e, t, i, n, r, s, o, l, h, d;
          a.prototype._updateImpl.call(this),
            (this._extendLeftPoints = []),
            (this._extendRightPoints = []),
            this._source.points().length < 4 ||
              ((e = this._source.pointToScreenPoint(
                this._source.points()[0],
              )[1]),
              (t = this._source.pointToScreenPoint(
                this._source.points()[1],
              )[1]),
              (i = this._source.pointToScreenPoint(
                this._source.points()[2],
              )[1]),
              (r = (n = this._source.pointToScreenPoint(
                this._source.points()[3],
              )[1]).subtract(e)),
              (s = i.subtract(r.scaled(0.25))),
              (o = t.subtract(i)),
              (l = n.add(o.scaled(0.25))),
              (h = this._model.timeScale().width()),
              (d = this._source.priceScale().height()),
              this._source.properties().extendLeft.value() &&
                (this._extendLeftPoints = p.extendQuadroBezier(i, e, s, h, d)),
              this._source.properties().extendRight.value() &&
                (this._extendRightPoints = p.extendQuadroBezier(
                  n,
                  t,
                  l,
                  h,
                  d,
                )));
        }),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s, a;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? new h()
              : ((n = [].concat(this._points)),
                this._source._controlPoints &&
                  (n.push(
                    this._source.pointToScreenPoint(
                      this._source._controlPoints[0],
                    )[0],
                  ),
                  n.push(
                    this._source.pointToScreenPoint(
                      this._source._controlPoints[1],
                    )[0],
                  )),
                (r = {}),
                (s = this._source.properties()),
                (r.points = n),
                (r.color = s.linecolor.value()),
                (r.linewidth = s.linewidth.value()),
                (r.linestyle = s.linestyle.value()),
                (r.leftend = s.leftEnd.value()),
                (r.rightend = s.rightEnd.value()),
                (r.fillBack = s.fillBackground.value()),
                (r.backcolor = s.backgroundColor.value()),
                (r.transparency = s.transparency.value()),
                (r.extendLeftPoints = this._extendLeftPoints),
                (r.extendRightPoints = this._extendRightPoints),
                this._renderer.setData(r),
                (a = new h()).append(this._renderer),
                i && this.addAnchors(a),
                a)
          );
        }),
        (t.BezierCubicPaneView = r);
    },
    aB9a: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l;
      i.r(t),
        i.d(t, 'LineSourcePaneView', function () {
          return l;
        }),
        (n = i('mrSG')),
        (r = i('aO4+')),
        (s = i('qFKp')),
        (a = i('VdBB')),
        (o = i('1mZ4')),
        (l = (function () {
          function e(e, t) {
            (this._invalidated = !0),
              (this._middlePoint = null),
              (this._points = []),
              (this._floatPoints = []),
              (this._source = e),
              (this._model = t);
          }
          return (
            (e.prototype.priceToCoordinate = function (e) {
              var t,
                i,
                n = this._source.priceScale();
              return null === n
                ? null
                : null ===
                  (i =
                    null !== (t = this._source.ownerSource())
                      ? t.firstValue()
                      : null)
                ? null
                : n.priceToCoordinate(e, i);
            }),
            (e.prototype.currentPoint = function () {
              var e = this._model.crossHairSource();
              return new r.Point(e.originX(), e.originY());
            }),
            (e.prototype.anchorColor = function () {
              return '#1E88E5';
            }),
            (e.prototype.isHoveredSource = function () {
              return this._source === this._model.hoveredSource();
            }),
            (e.prototype.isSelectedSource = function () {
              return this._model.selection().isSelected(this._source);
            }),
            (e.prototype.isBeingEdited = function () {
              return this._model.lineBeingEdited() === this._source;
            }),
            (e.prototype.isEditMode = function () {
              return !this._model.isSnapshot();
            }),
            (e.prototype.isAnchorsRequired = function () {
              return (
                (this.isHoveredSource() || this.isSelectedSource()) &&
                this.isEditMode()
              );
            }),
            (e.prototype.update = function () {
              this._invalidated = !0;
            }),
            (e.prototype.addAnchors = function (e) {
              var t = this._points;
              this._model.lineBeingCreated() === this._source &&
                (t = t.slice(0, -1)),
                e.append(this.createLineAnchor({ points: t }));
            }),
            (e.prototype.createLineAnchor = function (e) {
              var t = s.CheckMobile.any();
              return new o.LineAnchor(
                Object(n.__assign)(Object(n.__assign)({}, e), {
                  color: this.anchorColor(),
                  backgroundColor: this._model.backgroundColor(),
                  currentPoint: this.currentPoint(),
                  linePointBeingEdited: this.isBeingEdited()
                    ? this._model.linePointBeingEdited()
                    : null,
                  hittestResult: a.HitTestResult.CHANGEPOINT,
                  radius: t ? 15 : 7,
                  strokeWidth: (t ? 3 : 1) + (this.isSelectedSource() ? 1 : 0),
                  selectedStrokeWidth: t ? 0 : 4,
                  isDark: this._model.isDark(),
                }),
              );
            }),
            (e.prototype._updateImpl = function () {
              var e, t, i, n, r, s, a, o;
              if (
                ((this._points = []),
                (this._floatPoints = []),
                (e = this._source.priceScale()),
                (t = this._model.timeScale()),
                e && !e.isEmpty() && !t.isEmpty())
              ) {
                for (i = this._source.points(), n = 0; n < i.length; n++) {
                  if (((r = i[n]), !(s = this._source.pointToScreenPoint(r))))
                    return;
                  ((a = s[0]).data = n),
                    ((o = s[1]).data = n),
                    this._floatPoints.push(a),
                    this._points.push(o);
                }
                2 === this._points.length &&
                  (this._middlePoint = this._source.calcMiddlePoint(
                    this._points[0],
                    this._points[1],
                  )),
                  (this._invalidated = !1);
              }
            }),
            (e.prototype._getSource = function () {
              return this._source;
            }),
            (e.prototype._getPoints = function () {
              return this._points;
            }),
            (e.prototype._getModel = function () {
              return this._model;
            }),
            e
          );
        })());
    },
    'am+t': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        a.call(this, e, t);
      }
      var s = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('Tmoa');
      (n.prototype.setData = function (e) {
        this._data = e;
      }),
        (n.prototype.draw = function (e) {
          null !== this._data &&
            ((e.strokeStyle = this._data.color),
            (e.lineWidth = this._data.linewidth),
            CanvasEx.setLineStyle(e, this._data.linestyle),
            e.save(),
            e.translate(this._data.point.x + 1, this._data.point.y),
            e.scale(this._data.width, this._data.height),
            e.beginPath(),
            e.arc(0.5, 0, 0.5, Math.PI, 0, !1),
            e.restore(),
            e.stroke(),
            this._data.fillBackground &&
              ((e.fillStyle = h.generateColor(
                this._data.backcolor,
                this._data.transparency,
              )),
              e.fill()));
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, a;
          return null === this._data || e.y > this._data.point.y
            ? null
            : e.x < this._data.point.x ||
              e.x > this._data.point.x + this._data.width
            ? null
            : ((t = new s(
                this._data.point.x + this._data.width / 2,
                this._data.point.y,
              )),
              (i = e.subtract(t)),
              (n = this._data.height / this._data.width),
              (i.y /= n),
              (r = i.length()),
              (a = 3),
              Math.abs(r - this._data.width / 2) < a
                ? new o(o.MOVEPOINT)
                : null);
        }),
        inherit(r, a),
        (r.prototype.renderer = function (e, t, i) {
          var r, a, o, h, d, c, p, _, u, f, g, v, w, y, m, x, b, R;
          if (
            (this._invalidated && this._updateImpl(), this._points.length < 2)
          )
            return null;
          if (
            ((a = (r = this._source.points())[0]),
            (o = r[1]),
            (h = Math.min(a.index, o.index)),
            (c = (d = Math.max(a.index, o.index)) - h),
            (p = this._points[0]),
            (_ = this._points[1]),
            (u = Math.abs(p.x - _.x)),
            (f = new l()),
            (g = this._source.properties()),
            (v = this._model.timeScale()),
            0 === c)
          )
            return null;
          for (w = Math.min(p.x, _.x), y = [], m = h; w > -u; m -= c)
            (w = v.indexToCoordinate(m)), y.push(w);
          for (w = Math.max(p.x, _.x), m = d; w < v.width(); m += c)
            (w = v.indexToCoordinate(m)), y.push(w);
          for (x = 0; x < y.length; x++)
            (b = {
              point: new s(y[x], p.y),
              width: u,
              height: u,
              color: g.linecolor.value(),
              linewidth: g.linewidth.value(),
              linestyle: g.linestyle.value(),
              fillBackground: g.fillBackground.value(),
              backcolor: g.backgroundColor.value(),
              transparency: g.transparency.value(),
            }),
              (R = new n()).setData(b),
              f.append(R);
          return i && this.addAnchors(f), f;
        }),
        (t.TimeCyclesPaneView = r);
    },
    amUF: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l, h;
      i.r(t),
        i.d(t, 'CrossLinePaneView', function () {
          return h;
        }),
        (n = i('mrSG')),
        (r = i('aB9a')),
        (s = i('l4sv')),
        (a = i('z+cS')),
        (o = i('Zy3/')),
        (l = i('VdBB')),
        (h = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this;
            return (
              (n._horizLineRenderer = new s.HorizontalLineRenderer()),
              (n._vertLineRenderer = new a.VerticalLineRenderer()),
              n._horizLineRenderer.setHitTest(
                new l.HitTestResult(l.HitTestResult.MOVEPOINT),
              ),
              n
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.update = function () {
              this._invalidated = !0;
            }),
            (t.prototype.updateImpl = function () {
              e.prototype._updateImpl.call(this), (this._invalidated = !1);
            }),
            (t.prototype.renderer = function () {
              var e, t, i;
              return (
                this._invalidated && this.updateImpl(),
                (e = {
                  width: this._getModel().timeScale().width(),
                  points: this._getPoints(),
                  color: this._getSource().lineColor(),
                  linewidth: this._getSource().lineWidth(),
                  linestyle: this._getSource().lineStyle(),
                  height: 0,
                }),
                null !== (t = this._getSource().priceScale()) &&
                  (e.height = t.height()),
                this._horizLineRenderer.setData(e),
                this._vertLineRenderer.setData(e),
                (i = new o.CompositeRenderer()).append(this._horizLineRenderer),
                i.append(this._vertLineRenderer),
                this.addAnchors(i),
                i
              );
            }),
            t
          );
        })(r.LineSourcePaneView));
    },
    amvX: function (e, t, i) {
      'use strict';
      var n, r, s, a;
      i.d(t, 'a', function () {
        return a;
      }),
        (n = i('aO4+')),
        (r = i('Tmoa')),
        (s = i('VdBB')),
        (a = (function () {
          function e() {
            this._data = null;
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.draw = function (e) {
              var t, i, s, a, o, l;
              null !== this._data &&
                ((e.lineCap = 'butt'),
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.translate(this._data.center.x, this._data.center.y),
                (i = (t = this._data.edge.subtract(this._data.center)).y / t.x),
                (s = this._data.point.subtract(this._data.center)),
                (a = (s = new n.Point(s.x, s.y / i)).length()),
                (o = this._data.prevPoint.subtract(this._data.center)),
                (l = (o = new n.Point(o.x, o.y / i)).length()),
                e.scale(1, i),
                this._data.fillBack &&
                  (this._data.point.x < this._data.center.x &&
                    ((a = -a), (l = -l)),
                  e.beginPath(),
                  e.moveTo(l, 0),
                  e.lineTo(a, 0),
                  e.arcTo(a, a, 0, a, Math.abs(a)),
                  e.lineTo(0, l),
                  e.arcTo(l, l, l, 0, Math.abs(l)),
                  (e.fillStyle = Object(r.generateColor)(
                    this._data.color,
                    this._data.transparency,
                    !0,
                  )),
                  e.fill()),
                e.beginPath(),
                this._data.point.x > this._data.center.x
                  ? e.arc(0, 0, Math.abs(a), 0, Math.PI / 2, !1)
                  : e.arc(0, 0, Math.abs(a), -Math.PI / 2, -Math.PI, !0),
                e.scale(1, 1 / i),
                e.stroke());
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, r, a, o, l, h;
              return null === this._data
                ? null
                : ((e = e.subtract(this._data.center)),
                  (i =
                    (t = this._data.edge.subtract(this._data.center)).y / t.x),
                  (e = new n.Point(e.x, e.y / i)),
                  (r = this._data.point.subtract(this._data.center)),
                  (a = (r = new n.Point(r.x, r.y / i)).length()),
                  (o = e.length()),
                  (l = this._data.prevPoint.subtract(this._data.center)),
                  (h = (l = new n.Point(l.x, l.y / i)).length()),
                  Math.abs(o - a) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0
                    ? new s.HitTestResult(s.HitTestResult.MOVEPOINT)
                    : this._data.fillBack &&
                      o >= h &&
                      o <= a &&
                      t.x * e.x >= 0 &&
                      t.y * e.y >= 0
                    ? new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND)
                    : null);
            }),
            e
          );
        })());
    },
    bFMU: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._numericFormatter = new l()),
          (this._lineRendererPoints01 = new s()),
          (this._lineRendererPoints12 = new s()),
          (this._lineRendererPoints23 = new s()),
          (this._abRetracementTrend = new s()),
          (this._cdRetracementTrend = new s()),
          (this._abLabelRenderer = new a({})),
          (this._cdLabelRenderer = new a({})),
          (this._textRendererALabel = new a({})),
          (this._textRendererBLabel = new a({})),
          (this._textRendererCLabel = new a({})),
          (this._textRendererDLabel = new a({}));
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('pJOz').TrendLineRenderer,
        a = i('qgcf').TextRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('zXvd').NumericFormatter,
        h = i('Tmoa'),
        d = i('a7Ha').LineEnd;
      inherit(n, r),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, l, c, p, _, u;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? null
              : ((n = this._source.properties()),
                (r = new o()),
                (s = this._points),
                (a = this),
                (l = function (e, t) {
                  return {
                    points: [e],
                    text: t,
                    color: n.textcolor.value(),
                    vertAlign: 'middle',
                    horzAlign: 'center',
                    font: n.font.value(),
                    offsetX: 0,
                    offsetY: 0,
                    bold: n.bold && n.bold.value(),
                    italic: n.italic && n.italic.value(),
                    fontsize: n.fontsize.value(),
                    backgroundColor: a._source.properties().color.value(),
                    backgroundRoundRect: 4,
                  };
                }),
                (p = (c = function (e, t, i, r) {
                  return {
                    points: [e, t],
                    width: a._model.timeScale().width(),
                    height: a._source.priceScale().height(),
                    color: h.generateColor(
                      a._source.properties().color.value(),
                      i,
                    ),
                    linewidth: r || n.linewidth.value(),
                    linestyle: CanvasEx.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: d.Normal,
                    rightend: d.Normal,
                  };
                })(s[0], s[1], 0)),
                this._lineRendererPoints01.setData(p),
                r.append(this._lineRendererPoints01),
                s.length >= 3 &&
                  ((p = c(s[1], s[2], 0)),
                  this._lineRendererPoints12.setData(p),
                  r.append(this._lineRendererPoints12)),
                4 === s.length &&
                  ((p = c(s[2], s[3], 0)),
                  this._lineRendererPoints23.setData(p),
                  r.append(this._lineRendererPoints23)),
                (_ = l(this._points[0], 'A')),
                this._points[1].y > this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._textRendererALabel.setData(_),
                r.append(this._textRendererALabel),
                (_ = l(this._points[1], 'B')),
                this._points[1].y < this._points[0].y
                  ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                  : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                this._textRendererBLabel.setData(_),
                r.append(this._textRendererBLabel),
                this._points.length > 2 &&
                  ((_ = l(this._points[2], 'C')),
                  this._points[2].y < this._points[1].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererCLabel.setData(_),
                  r.append(this._textRendererCLabel)),
                this._points.length > 3 &&
                  ((_ = l(this._points[3], 'D')),
                  this._points[3].y < this._points[2].y
                    ? ((_.vertAlign = 'bottom'), (_.offsetY = -10))
                    : ((_.vertAlign = 'top'), (_.offsetY = 5)),
                  this._textRendererDLabel.setData(_),
                  r.append(this._textRendererDLabel)),
                this._points.length >= 3 &&
                  ((u = this._points[0].add(this._points[2]).scaled(0.5)),
                  (p = c(this._points[0], this._points[2], 70, 1)),
                  this._abRetracementTrend.setData(p),
                  r.append(this._abRetracementTrend),
                  (_ = l(
                    u,
                    this._numericFormatter.format(this._ABRetracement),
                  )),
                  this._abLabelRenderer.setData(_),
                  r.append(this._abLabelRenderer)),
                this._points.length >= 4 &&
                  ((u = this._points[1].add(this._points[3]).scaled(0.5)),
                  (p = c(this._points[1], this._points[3], 70, 1)),
                  this._cdRetracementTrend.setData(p),
                  r.append(this._cdRetracementTrend),
                  (_ = l(
                    u,
                    this._numericFormatter.format(this._CDRetracement),
                  )),
                  this._cdLabelRenderer.setData(_),
                  r.append(this._cdLabelRenderer)),
                i && this.addAnchors(r),
                r)
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n;
          r.prototype._updateImpl.call(this),
            this._source.points().length >= 3 &&
              ((e = this._source.points()[0]),
              (t = this._source.points()[1]),
              (i = this._source.points()[2]),
              (this._ABRetracement =
                Math.round(
                  1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
                ) / 1e3)),
            4 === this._source.points().length &&
              ((n = this._source.points()[3]),
              (this._CDRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - i.price) / (i.price - t.price)),
                ) / 1e3));
        }),
        (t.ABCDPaneView = n);
    },
    bcXK: function (e, t, i) {
      'use strict';
      function n(e, t, i) {
        (this._data = e),
          (this._hittest = t || new d(d.MOVEPOINT)),
          (this._backHittest = i || new d(d.MOVEPOINT_BACKGROUND));
      }
      function r(e, t) {
        o.call(this, e, t),
          (this._rendererCache = {}),
          (this._trendLineRenderer = new l());
      }
      var s = i('aO4+').Point,
        a = i('Hr11'),
        o = i('aB9a').LineSourcePaneView,
        l = i('pJOz').TrendLineRenderer,
        h = i('loH8'),
        d = i('VdBB').HitTestResult,
        c = i('Zy3/').CompositeRenderer,
        p = i('Tmoa'),
        _ = i('a7Ha').LineEnd;
      (n.prototype.draw = function (e) {
        (e.lineCap = 'butt'),
          (e.strokeStyle = this._data.color),
          (e.lineWidth = this._data.linewidth),
          e.translate(this._data.center.x, this._data.center.y),
          e.beginPath(),
          this._data.fullCircles
            ? e.arc(0, 0, this._data.radius, 2 * Math.PI, 0, !1)
            : this._data.dir > 0
            ? e.arc(0, 0, this._data.radius, 0, Math.PI, !1)
            : e.arc(0, 0, this._data.radius, Math.PI, 0, !1),
          e.stroke(),
          this._data.fillBackground &&
            (this._data.radius2 &&
              (this._data.fullCircles
                ? e.arc(0, 0, this._data.radius2, 2 * Math.PI, 0, !0)
                : this._data.dir > 0
                ? e.arc(0, 0, this._data.radius2, Math.PI, 0, !0)
                : e.arc(0, 0, this._data.radius2, 0, Math.PI, !0)),
            (e.fillStyle = p.generateColor(
              this._data.color,
              this._data.transparency,
              !0,
            )),
            e.fill());
      }),
        (n.prototype.hitTest = function (e) {
          var t,
            i,
            n = a.sign(e.y - this._data.center.y);
          return n === this._data.dir || this._data.fullCircles
            ? ((t = e.subtract(this._data.center).length()),
              (i = 3),
              Math.abs(t - this._data.radius) < i
                ? this._hittest
                : this._data.hittestOnBackground &&
                  Math.abs(t) <= this._data.radius + i
                ? this._backHittest
                : null)
            : null;
        }),
        inherit(r, o),
        (r.prototype._updateImpl = function () {
          var e, t, i, n, r, l, h, d, c, p, _, u;
          if (
            (o.prototype._updateImpl.call(this),
            (this._cacheState = this._model._fibSpeedResistanceArcsLabelsCache.updateSource(
              this._source,
            )),
            !(this._floatPoints.length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          )
            for (
              e = this._floatPoints[0],
                t = this._floatPoints[1],
                i = e.subtract(t).length(),
                this._levels = [],
                n = this._source.properties(),
                r = this._source.levelsCount(),
                l = 1;
              l <= r;
              l++
            )
              (h = n['level' + l]).visible.value() &&
                ((d = h.coeff.value()),
                (c = h.color.value()),
                (p = t.subtract(e).length() * d),
                (_ = a.sign(t.y - e.y)),
                (u = new s(e.x, e.y + _ * i * d)),
                this._levels.push({
                  color: c,
                  radius: p,
                  dir: _,
                  labelPoint: u,
                  linewidth: h.linewidth.value(),
                  linestyle: h.linestyle.value(),
                  index: l,
                }));
        }),
        (r.prototype.renderer = function (e, t, i) {
          var r, s, a, o, l, p, u, f, g, v, w, y, m, x, b, R;
          if (
            (this._invalidated && this._updateImpl(),
            (r = new c()),
            this._floatPoints.length < 2)
          )
            return r;
          for (
            s = this._floatPoints[0],
              o = (a = this._source.properties()).fillBackground.value(),
              l = a.transparency.value(),
              u = (p = this._model._fibSpeedResistanceArcsLabelsCache).canvas(),
              f = 0;
            f < this._levels.length;
            f++
          )
            if (
              ((g = this._levels[f]),
              ((v = {}).center = s),
              (v.color = g.color),
              (v.linewidth = g.linewidth),
              (v.radius = g.radius),
              (v.dir = g.dir),
              (v.transparency = l),
              (v.fillBackground = o),
              (v.hittestOnBackground = !0),
              (v.fullCircles = a.fullCircles.value()),
              f > 0 && (v.radius2 = this._levels[f - 1].radius),
              (w = new d(d.MOVEPOINT, null, g.index)),
              r.append(new n(v, w)),
              a.showCoeffs.value())
            ) {
              if (
                !(y = this._cacheState.preparedCells.cells[
                  this._levels[f].index - 1
                ])
              )
                continue;
              (m = {
                left: y.left,
                top: p.topByRow(this._cacheState.row),
                width: y.width,
                height: p.rowHeight(this._cacheState.row),
              }),
                (x = {
                  left: Math.round(g.labelPoint.x - m.width),
                  top: Math.round(g.labelPoint.y - m.height / 2),
                  width: y.width,
                  height: m.height,
                }),
                (b = new h(u, m, x)),
                r.append(b);
            }
          return (
            a.trendline.visible.value() &&
              ((R = {
                points: [this._floatPoints[0], this._floatPoints[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: a.trendline.color.value(),
                linewidth: a.trendline.linewidth.value(),
                linestyle: a.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: _.Normal,
                rightend: _.Normal,
              }),
              this._trendLineRenderer.setData(R),
              r.append(this._trendLineRenderer)),
            i && this.addAnchors(r),
            r
          );
        }),
        (t.FibSpeedResistanceArcsPaneView = r);
    },
    c6sA: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._vertLineRenderer1 = new a()),
          (this._vertLineRenderer2 = new a()),
          (this._medianRenderer = new l());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('gyZD').PaneRendererLine,
        c = i('Zy3/').CompositeRenderer,
        p = i('Tmoa'),
        _ = i('Ye2/').LineToolBarsPatternMode,
        u = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, a, l, f, g, v, w, y, m, x, b, R, S, T, P, L, C;
          if (
            (this._invalidated && this._updateImpl(),
            this._pattern && 2 === this._source.points().length)
          ) {
            if (
              !(n =
                this._source.points()[0].index < this._source.points()[1].index
                  ? this._points[0]
                  : this._points[1])
            )
              return new c();
            if (
              ((s = parseInt(this._source.properties().mode.value(), 10)),
              (a = Math.abs(
                (this._points[0].x - this._points[1].x) /
                  (this._pattern.length - 1),
              )),
              s === _.Bars || s === _.OpenClose)
            ) {
              for (
                l = new c(),
                  g = (f =
                    s === _.Bars ? ['high', 'low'] : ['open', 'close'])[0],
                  v = f[1],
                  w = 0;
                w < this._pattern.length;
                w++
              )
                (y = Math.round(n.x + w * a + 0.5)),
                  (m = n.y + Math.round(this._pattern[w][g])),
                  (x = n.y + Math.round(this._pattern[w][v])),
                  ((b = {}).points = [new r(y - 1, m), new r(y + 1, x)]),
                  (b.color = this._source.properties().color.value()),
                  (b.linewidth = 1),
                  (b.backcolor = this._source.properties().color.value()),
                  (b.fillBackground = !0),
                  (b.transparency = 10),
                  (R = new o()).setData(b),
                  l.append(R);
              return (
                i && l.append(this.createLineAnchor({ points: this._points })),
                l
              );
            }
            return (
              (l = new c()),
              ((b = {}).barSpacing = a),
              (b.items = this._pattern),
              (b.histogramBase = 0),
              (b.lineIndex = 0),
              (b.lineColor = p.generateColor(
                this._source.properties().color.value(),
                10,
              )),
              (b.lineStyle = CanvasEx.LINESTYLE_SOLID),
              (b.lineWidth = 2),
              (b.hittest = new h(h.MOVEPOINT)),
              l.append(new d(b)),
              i && l.append(this.createLineAnchor({ points: this._points })),
              l
            );
          }
          return (
            (l = new c()),
            this._points.length < 2
              ? l
              : ((t = this._model.timeScale().width()),
                (e = this._source.priceScale().height()),
                (S = this._points[0]),
                (T = this._points[1]),
                ((P = {}).width = t),
                (P.height = e),
                (P.points = [S]),
                (P.color = '#808080'),
                (P.linewidth = 1),
                (P.linestyle = CanvasEx.LINESTYLE_SOLID),
                this._vertLineRenderer1.setData(P),
                l.append(this._vertLineRenderer1),
                ((L = {}).width = t),
                (L.height = e),
                (L.points = [T]),
                (L.color = '#808080'),
                (L.linewidth = 1),
                (L.linestyle = CanvasEx.LINESTYLE_SOLID),
                this._vertLineRenderer2.setData(L),
                l.append(this._vertLineRenderer2),
                (C = {
                  points: [S, T],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: '#808080',
                  linewidth: 1,
                  linestyle: CanvasEx.LINESTYLE_SOLID,
                  extendleft: !1,
                  extendright: !1,
                  leftend: u.Normal,
                  rightend: u.Normal,
                }),
                this._medianRenderer.setData(C),
                l.append(this._medianRenderer),
                l)
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, a, o, l, h, d, c, p, _;
          s.prototype._updateImpl.call(this),
            !this._source.priceScale() ||
              this._source.priceScale().isEmpty() ||
              this._points.length < 2 ||
              (this._source._pattern &&
              this._source._pattern.length > 0 &&
              2 === this._source.points().length
                ? ((e = this._source.priceScale()),
                  (t = this._source.firstPatternPrice()),
                  (i = this._source.pressCoeff()),
                  (e = this._source.priceScale()),
                  (n = this._source.ownerSource().firstValue()),
                  (a = e.priceToCoordinate(t, n)),
                  (o = function (r) {
                    var s = (r - t) * i + t,
                      o = e.priceToCoordinate(s, n) - a;
                    return o;
                  }),
                  (l = parseInt(this._source.properties().mode.value())),
                  (h =
                    this._source.points()[0].index >
                    this._source.points()[1].index
                      ? 1
                      : 0),
                  (d = this._points[h]),
                  (c = d.x),
                  (p = Math.abs(
                    (this._points[0].x - this._points[1].x) /
                      (this._source._pattern.length - 1),
                  )),
                  (_ = {
                    0: function (e) {
                      return {
                        high: o(e[TradingView.HIGH_PLOT]),
                        low: o(e[TradingView.LOW_PLOT]),
                      };
                    },
                    1: function (e, t) {
                      return new r(
                        c + t * p,
                        o(e[TradingView.CLOSE_PLOT]) + d.y,
                      );
                    },
                    2: function (e) {
                      return {
                        open: o(e[TradingView.OPEN_PLOT]),
                        close: o(e[TradingView.CLOSE_PLOT]),
                      };
                    },
                    3: function (e, t) {
                      return new r(
                        c + t * p,
                        o(e[TradingView.OPEN_PLOT]) + d.y,
                      );
                    },
                    4: function (e, t) {
                      return new r(
                        c + t * p,
                        o(e[TradingView.HIGH_PLOT]) + d.y,
                      );
                    },
                    5: function (e, t) {
                      return new r(c + t * p, o(e[TradingView.LOW_PLOT]) + d.y);
                    },
                    6: function (e, t) {
                      return new r(
                        c + t * p,
                        o(
                          (e[TradingView.HIGH_PLOT] + e[TradingView.LOW_PLOT]) /
                            2,
                        ) + d.y,
                      );
                    },
                  }),
                  (this._pattern = this._source._pattern.map(_[l])))
                : delete this._pattern);
        }),
        (t.BarsPatternPaneView = n);
    },
    'cT+B': function (e, t, i) {
      'use strict';
      function n(e, t) {
        l.call(this, e, t),
          (this._medianRenderer = new h()),
          (this._sideRenderer = new h());
      }
      function r(e, t) {
        n.call(this, e, t), (this._backSideRenderer = new h());
      }
      function s(e, t) {
        r.call(this, e, t);
      }
      function a(e, t) {
        n.call(this, e, t),
          (this._backSideRenderer = new h()),
          (this._centerRenderer = new h());
      }
      var o = i('aO4+').Point,
        l = i('aB9a').LineSourcePaneView,
        h = i('pJOz').TrendLineRenderer,
        d = i('2trc').ChannelRenderer,
        c = i('VdBB').HitTestResult,
        p = i('Zy3/').CompositeRenderer,
        _ = i('a7Ha').LineEnd;
      inherit(n, l),
        (n.prototype._updateImpl = function () {
          l.prototype._updateImpl.call(this),
            0 !== this._floatPoints.length &&
              (3 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]
                    .add(this._floatPoints[2])
                    .scaled(0.5)),
                  (this._medianPoint.data = 3))
                : 2 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]),
                  (this._medianPoint.data = 3))
                : ((this._medianPoint = this._floatPoints[0]),
                  (this._medianPoint.data = 3)));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, l, u, f, g, v, w, y, m, x, b, R, S, T, P, L, C;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new p()),
            this._floatPoints.length < 2)
          )
            return n;
          if (!this._medianPoint) return n;
          if (
            ((r = {
              points: [this._floatPoints[0], this._medianPoint],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: _.Normal,
              rightend: _.Normal,
            }),
            this._medianRenderer.setData(r),
            n.append(this._medianRenderer),
            this._floatPoints.length < 3)
          )
            return i && this.addAnchors(n), n;
          for (
            s = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: _.Normal,
              rightend: _.Normal,
            },
              this._sideRenderer.setData(s),
              n.append(this._sideRenderer),
              a = this._floatPoints[2]
                .subtract(this._floatPoints[1])
                .scaled(0.5),
              o = this._medianPoint.subtract(this._floatPoints[0]),
              l = 0,
              u = this._source.properties().fillBackground.value(),
              f = this._source.properties().transparency.value(),
              g = 0;
            g <= 8;
            g++
          )
            (v = 'level' + g),
              (w = this._source.properties()[v]).visible.value() &&
                ((m = (y = this._medianPoint.addScaled(a, w.coeff.value())).add(
                  o,
                )),
                (b = (x = this._medianPoint.addScaled(a, -w.coeff.value())).add(
                  o,
                )),
                u &&
                  (((R = {}).p1 = y),
                  (R.p2 = m),
                  (R.p3 = this._medianPoint.addScaled(a, l)),
                  (R.p4 = R.p3.add(o)),
                  (R.color = w.color.value()),
                  (R.width = this._model.timeScale().width()),
                  (R.height = this._source.priceScale().height()),
                  (R.transparency = f),
                  (R.hittestOnBackground = !0),
                  (S = new d()).setData(R),
                  n.append(S),
                  ((R = {}).p1 = x),
                  (R.p2 = b),
                  (R.p3 = this._medianPoint.addScaled(a, -l)),
                  (R.p4 = R.p3.add(o)),
                  (R.color = w.color.value()),
                  (R.width = this._model.timeScale().width()),
                  (R.height = this._source.priceScale().height()),
                  (R.transparency = f),
                  (R.hittestOnBackground = !0),
                  (S = new d()).setData(R),
                  n.append(S)),
                (l = w.coeff.value()),
                (T = {
                  points: [y, m],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: w.color.value(),
                  linewidth: w.linewidth.value(),
                  linestyle: w.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (P = new h()).setData(T),
                P.setHitTest(new c(c.MOVEPOINT, null, g)),
                n.append(P),
                (L = {
                  points: [x, b],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: w.color.value(),
                  linewidth: w.linewidth.value(),
                  linestyle: w.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (C = new h()).setData(L),
                C.setHitTest(new c(c.MOVEPOINT, null, g)),
                n.append(C));
          return i && this.addAnchors(n), n;
        }),
        inherit(r, n),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, l, u, f, g, v, w, y, m, x, b, R, S, T, P, L;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new p()),
            this._floatPoints.length < 2)
          )
            return n;
          if (
            ((r = {
              points: [this._floatPoints[0], this._floatPoints[1]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: _.Normal,
              rightend: _.Normal,
            }),
            this._backSideRenderer.setData(r),
            n.append(this._backSideRenderer),
            !this._medianPoint || !this._modifiedBase)
          )
            return i && this.addAnchors(n), n;
          if (
            ((s = {
              points: [this._modifiedBase, this._medianPoint],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: _.Normal,
              rightend: _.Normal,
            }),
            this._medianRenderer.setData(s),
            n.append(this._medianRenderer),
            this._floatPoints.length < 3)
          )
            return this.addAnchors(n), n;
          for (
            a = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: _.Normal,
              rightend: _.Normal,
            },
              this._sideRenderer.setData(a),
              n.append(this._sideRenderer),
              o = this._floatPoints[2]
                .subtract(this._floatPoints[1])
                .scaled(0.5),
              l = this._medianPoint.subtract(this._modifiedBase),
              u = 0,
              f = this._source.properties().fillBackground.value(),
              g = this._source.properties().transparency.value(),
              v = 0;
            v <= 8;
            v++
          )
            (w = 'level' + v),
              (y = this._source.properties()[w]).visible.value() &&
                ((x = (m = this._medianPoint.addScaled(o, y.coeff.value())).add(
                  l,
                )),
                (R = (b = this._medianPoint.addScaled(o, -y.coeff.value())).add(
                  l,
                )),
                f &&
                  (((r = {}).p1 = m),
                  (r.p2 = x),
                  (r.p3 = this._medianPoint.addScaled(o, u)),
                  (r.p4 = r.p3.add(l)),
                  (r.color = y.color.value()),
                  (r.width = this._model.timeScale().width()),
                  (r.height = this._source.priceScale().height()),
                  (r.transparency = g),
                  (r.hittestOnBackground = !0),
                  (S = new d()).setData(r),
                  n.append(S),
                  ((r = {}).p1 = b),
                  (r.p2 = R),
                  (r.p3 = this._medianPoint.addScaled(o, -u)),
                  (r.p4 = r.p3.add(l)),
                  (r.color = y.color.value()),
                  (r.width = this._model.timeScale().width()),
                  (r.height = this._source.priceScale().height()),
                  (r.transparency = g),
                  (r.hittestOnBackground = !0),
                  (S = new d()).setData(r),
                  n.append(S)),
                (u = y.coeff.value()),
                (T = {
                  points: [m, x],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: y.color.value(),
                  linewidth: y.linewidth.value(),
                  linestyle: y.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (P = new h()).setData(T),
                P.setHitTest(new c(c.MOVEPOINT, null, v)),
                n.append(P),
                (L = {
                  points: [b, R],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: y.color.value(),
                  linewidth: y.linewidth.value(),
                  linestyle: y.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (S = new h()).setData(L),
                S.setHitTest(new c(c.MOVEPOINT, null, v)),
                n.append(S));
          return i && this.addAnchors(n), n;
        }),
        (r.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            this._floatPoints.length > 1 &&
              (this._modifiedBase = this._floatPoints[0]
                .add(this._floatPoints[1])
                .scaled(0.5));
        }),
        inherit(s, r),
        (s.prototype._updateImpl = function () {
          var e, t, i;
          n.prototype._updateImpl.call(this),
            this._floatPoints.length > 2 &&
              ((e = this._floatPoints[0].x),
              (t = 0.5 * (this._floatPoints[0].y + this._floatPoints[1].y)),
              (i = new o(e, t)),
              (this._modifiedBase = i));
        }),
        inherit(a, n),
        (a.prototype._updateImpl = function () {
          n.prototype._updateImpl.call(this),
            this._floatPoints.length > 1 &&
              (this._modifiedBase = this._floatPoints[0]
                .add(this._floatPoints[1])
                .scaled(0.5));
        }),
        (a.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, l, u, f, g, v, w, y, m, x, b, R, S, T, P, L, C;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new p()),
            this._floatPoints.length < 2)
          )
            return n;
          if (!this._medianPoint || !this._modifiedBase)
            return i && this.addAnchors(n), n;
          if (
            (3 === this._floatPoints.length &&
              ((r = {
                points: [this._modifiedBase, this._floatPoints[2]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._source.properties().median.color.value(),
                linewidth: this._source.properties().median.linewidth.value(),
                linestyle: this._source.properties().median.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: _.Normal,
                rightend: _.Normal,
              }),
              this._medianRenderer.setData(r),
              n.append(this._medianRenderer)),
            (s = {
              points: [this._floatPoints[0], this._floatPoints[1]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: _.Normal,
              rightend: _.Normal,
            }),
            this._backSideRenderer.setData(s),
            n.append(this._backSideRenderer),
            this._floatPoints.length < 3)
          )
            return i && this.addAnchors(n), n;
          for (
            a = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: _.Normal,
              rightend: _.Normal,
            },
              this._sideRenderer.setData(a),
              n.append(this._sideRenderer),
              o = this._floatPoints[2]
                .subtract(this._floatPoints[1])
                .scaled(0.5),
              l = this._floatPoints[2].subtract(this._modifiedBase),
              u = 0,
              f = this._source.properties().fillBackground.value(),
              g = this._source.properties().transparency.value(),
              v = {
                points: [this._medianPoint, this._medianPoint.add(l)],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._source.properties().median.color.value(),
                linewidth: this._source.properties().median.linewidth.value(),
                linestyle: this._source.properties().median.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: _.Normal,
                rightend: _.Normal,
              },
              this._centerRenderer.setData(v),
              n.append(this._centerRenderer),
              w = 0;
            w <= 8;
            w++
          )
            (y = 'level' + w),
              (m = this._source.properties()[y]).visible.value() &&
                ((b = (x = this._medianPoint.addScaled(o, m.coeff.value())).add(
                  l,
                )),
                (S = (R = this._medianPoint.addScaled(o, -m.coeff.value())).add(
                  l,
                )),
                f &&
                  (((s = {}).p1 = x),
                  (s.p2 = b),
                  (s.p3 = this._medianPoint.addScaled(o, u)),
                  (s.p4 = s.p3.add(l)),
                  (s.color = m.color.value()),
                  (s.width = this._model.timeScale().width()),
                  (s.height = this._source.priceScale().height()),
                  (s.transparency = g),
                  (s.hittestOnBackground = !0),
                  (T = new d()).setData(s),
                  n.append(T),
                  ((s = {}).p1 = R),
                  (s.p2 = S),
                  (s.p3 = this._medianPoint.addScaled(o, -u)),
                  (s.p4 = s.p3.add(l)),
                  (s.color = m.color.value()),
                  (s.width = this._model.timeScale().width()),
                  (s.height = this._source.priceScale().height()),
                  (s.transparency = g),
                  (s.hittestOnBackground = !0),
                  (T = new d()).setData(s),
                  n.append(T)),
                (u = m.coeff.value()),
                (P = {
                  points: [x, b],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: m.color.value(),
                  linewidth: m.linewidth.value(),
                  linestyle: m.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (L = new h()).setData(P),
                L.setHitTest(new c(c.MOVEPOINT, null, w)),
                n.append(L),
                (C = {
                  points: [R, S],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: m.color.value(),
                  linewidth: m.linewidth.value(),
                  linestyle: m.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: _.Normal,
                  rightend: _.Normal,
                }),
                (T = new h()).setData(C),
                T.setHitTest(new c(c.MOVEPOINT, null, w)),
                n.append(T));
          return i && this.addAnchors(n), n;
        }),
        (t.PitchforkLinePaneView = n),
        (t.SchiffPitchforkLinePaneView = r),
        (t.SchiffPitchfork2LinePaneView = s),
        (t.InsidePitchforkLinePaneView = a);
    },
    'ckl+': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._rendererCache = {}),
          (this._labelRenderer = new a({})),
          (this._lineRenderer = new h()),
          this._lineRenderer.setHitTest(new o(o.MOVEPOINT));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('l4sv').HorizontalLineRenderer;
      i('MMac').PaneRendererClockIcon;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, a, o, h, d, c, p, _, u;
          return (
            this._invalidated && this._updateImpl(),
            (n = new l()),
            ((s = {}).width = this._model.timeScale().width()),
            (s.height = this._source.priceScale().height()),
            (s.points = this._points),
            (s.color = this._source.properties().linecolor.value()),
            (s.linewidth = this._source.properties().linewidth.value()),
            (s.linestyle = this._source.properties().linestyle.value()),
            this._lineRenderer.setData(s),
            (a = this._source.properties()),
            n.append(this._lineRenderer),
            this._source.properties().showLabel.value() &&
              1 === this._points.length &&
              ((o = a.vertLabelsAlign.value()),
              (h = a.horzLabelsAlign.value()),
              (d = this._points[0]),
              (c = 0),
              (p = 0),
              'left' === h
                ? (d.x = 3)
                : 'right' === h
                ? ((d.x = this._model.timeScale().width()), (p = -5))
                : (d.x = this._model.timeScale().width() / 2),
              'middle' === o
                ? (c = -this._source.properties().fontsize.value() / 6)
                : 'bottom' === o && (c = -4),
              (_ = {
                points: [d],
                text: a.text.value(),
                color: a.textcolor.value(),
                vertAlign: o,
                horzAlign: h,
                font: a.font.value(),
                offsetX: p,
                offsetY: c,
                bold: this._source.properties().bold.value(),
                italic: this._source.properties().italic.value(),
                fontsize: this._source.properties().fontsize.value(),
                forceTextAlign: !0,
              }),
              this._labelRenderer.setData(_),
              n.append(this._labelRenderer)),
            1 === this._points.length &&
              i &&
              (((u = new r(
                this._model.timeScale().width() / 2,
                this._points[0].y,
              )).data = 0),
              (u.square = !0),
              n.append(this.createLineAnchor({ points: [u] }))),
            n
          );
        }),
        (t.HorzLinePaneView = n);
    },
    dKqZ: function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        p.call(this, e, t), (this._renderer = new n());
      }
      var s = i('aO4+').Point,
        a = i('GEp6').distanceToLine,
        o = i('hfHJ'),
        l = o.rotationMatrix,
        h = o.scalingMatrix,
        d = o.translationMatrix,
        c = o.transformPoint,
        p = i('aB9a').LineSourcePaneView,
        _ = i('VdBB').HitTestResult,
        u = i('Zy3/').CompositeRenderer,
        f = i('Tmoa');
      (n.prototype.setData = function (e) {
        (this._data = e),
          (this._data.angleFrom = 0),
          (this._data.angleTo = Math.PI),
          (this._data.clockwise = !1);
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, o, p, _, u, g, v, w, y, m, x;
          if (!(null === this._data || this._data.points.length < 2)) {
            if (
              ((t = this._data.points[0]),
              (i = this._data.points[1]),
              this._data.points.length < 3)
            )
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            if (((n = this._data.points[2]), (r = a(t, i, n).distance) < 1))
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            (o = i.subtract(t)),
              (p = t.add(i).scaled(0.5)),
              (_ = (_ = new s(-o.y, o.x)).normalized()),
              (n = p.add(_.scaled(r))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              (u = o.length()),
              (g = o.x / u),
              (v = o.y / u),
              (w = Math.acos(g)),
              v < 0 && (w = -w),
              (y = this._data.points[2]),
              (m = d(-p.x, -p.y)),
              (y = c(m, y)),
              (m = l(-w)),
              (y = c(m, y)),
              (m = h(1, u / (2 * r))),
              (y = c(m, y)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(t.x, t.y),
              e.rotate(w),
              (x = 1 - Math.sqrt(3) / 2),
              e.scale(1, r / (u * x)),
              this._data.clockwise
                ? e.arc(
                    0.5 * u,
                    (u * Math.sqrt(3)) / 2,
                    u,
                    (-2 * Math.PI) / 3,
                    -Math.PI / 3,
                    !1,
                  )
                : e.arc(
                    0.5 * u,
                    (-u * Math.sqrt(3)) / 2,
                    u,
                    Math.PI / 3,
                    (2 * Math.PI) / 3,
                    !1,
                  ),
              e.restore(),
              e.stroke(),
              this._data.fillBackground &&
                ((e.fillStyle = f.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                )),
                e.fill());
          }
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, o, p, u, f, g, v, w, y, m, x, b, R;
          return null === this._data || this._data.points.length < 3
            ? null
            : ((t = 5),
              (i = this._data.points[0]),
              (n = this._data.points[1]),
              (r = this._data.points[2]),
              (o = a(i, n, r).distance) < 1
                ? (o = a(i, n, e).distance) < t
                  ? new _(_.MOVEPOINT)
                  : null
                : ((u = (p = n.subtract(i)).length()),
                  (f = i.add(n).scaled(0.5)),
                  (g = (g = r.subtract(f)).normalized()),
                  (r = f.add(g.scaled(o))),
                  (v = p.x / u),
                  (w = p.y / u),
                  (y = Math.acos(v)),
                  w < 0 && (y = -y),
                  (m = d(-i.x, -i.y)),
                  (e = c(m, e)),
                  (m = l(-y)),
                  (e = c(m, e)),
                  (g = c(m, g)),
                  (x = 1 - Math.sqrt(3) / 2),
                  (m = h(1, (u * x) / o)),
                  (e = c(m, e)),
                  (g = c(m, g)),
                  e.y * g.y < 0
                    ? null
                    : ((b =
                        e.y < 0
                          ? new s(0.5 * u, (u * Math.sqrt(3)) / 2)
                          : new s(0.5 * u, (-u * Math.sqrt(3)) / 2)),
                      (R = e.subtract(b).length()),
                      Math.abs(R - u) <= t ? new _(_.MOVEPOINT) : null)));
        }),
        inherit(r, p),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, o, p, _, f, g, v, w, y, m, x, b, R, S, T, P, L, C, B;
          return (
            this._invalidated && this._updateImpl(),
            0 === this._points.length
              ? null
              : (((n = {}).points = this._points),
                (n.color = this._source.properties().color.value()),
                (n.linewidth = this._source.properties().linewidth.value()),
                (n.backcolor = this._source
                  .properties()
                  .backgroundColor.value()),
                (n.fillBackground = this._source
                  .properties()
                  .fillBackground.value()),
                (n.transparency = this._source
                  .properties()
                  .transparency.value()),
                this._renderer.setData(n),
                i
                  ? ((r = new u()).append(this._renderer),
                    (o = []),
                    (p = n.points[0]),
                    ((_ = new s(p.x, p.y)).data = 0),
                    o.push(_),
                    1 === n.points.length
                      ? r
                      : ((f = n.points[1]),
                        ((g = new s(f.x, f.y)).data = 1),
                        2 === n.points.length
                          ? (this.addAnchors(r), r)
                          : (o.push(g),
                            (v = n.points[2]),
                            (w = a(p, f, v).distance),
                            (y = f.subtract(p)),
                            (m = p.add(f).scaled(0.5)),
                            (x = (x = new s(-y.y, y.x)).normalized()),
                            (v = m.add(x.scaled(w))),
                            (b = m.add(x.scaled(-w))),
                            (R = y.length()),
                            (S = y.x / R),
                            (T = y.y / R),
                            (P = Math.acos(S)),
                            T < 0 && (P = -P),
                            (L = n.points[2]),
                            (C = d(-m.x, -m.y)),
                            (L = c(C, L)),
                            (C = l(-P)),
                            (L = c(C, L)),
                            (C = h(1, R / (2 * w))),
                            ((B =
                              (L = c(C, L)).y >= 0
                                ? new s(v.x, v.y)
                                : new s(b.x, b.y)).data = 2),
                            o.push(B),
                            r.append(this.createLineAnchor({ points: o })),
                            r)))
                  : this._renderer)
          );
        }),
        (t.ArcPaneView = r);
    },
    dMkl: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t);
      }
      var r = i('Hr11'),
        s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('VdBB').HitTestResult,
        l = i('/hKg').PaneRendererCandles,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd,
        c = i('Zp/P');
      inherit(n, s),
        (n.prototype.udpateImpl = function () {
          s.prototype._updateImpl.call(this);
          var e = this;
          (this._segments = []),
            e._points.length < 2 ||
              (this._segments = this._source
                .segments()
                .map(function (t, i) {
                  var n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    d,
                    c,
                    p,
                    _,
                    u,
                    f = e._source.points();
                  return i >= e._points.length - 1
                    ? null
                    : ((n = e._points[i].x),
                      (s = f[i].price),
                      (a = f[i + 1].price),
                      (o = f[i + 1].index - f[i].index),
                      (l = e._model.timeScale().barSpacing() * r.sign(o)),
                      (h = (a - s) / (t.bars().length - 1)),
                      (d = e._source.properties()),
                      (c = d.candleStyle.upColor.value()),
                      (p = d.candleStyle.downColor.value()),
                      (_ = d.candleStyle.borderUpColor.value()),
                      (u = d.candleStyle.borderDownColor.value()),
                      {
                        bars: t.bars().map(function (t, i) {
                          var r = t.c >= t.o;
                          return {
                            time: n + i * l,
                            open: e.priceToCoordinate(t.o + s + i * h),
                            high: e.priceToCoordinate(t.h + s + i * h),
                            low: e.priceToCoordinate(t.l + s + i * h),
                            close: e.priceToCoordinate(t.c + s + i * h),
                            color: r ? c : p,
                            borderColor: r ? _ : u,
                            hollow: !1,
                          };
                        }),
                      });
                })
                .filter(function (e) {
                  return !!e;
                }));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, p, _, u, f, g, v, w, y, m;
          for (
            this._invalidated && this.udpateImpl(), n = new h(), r = 1;
            r < this._points.length;
            r++
          )
            (s = {
              points: [this._points[r - 1], this._points[r]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: '#808080',
              linewidth: 1,
              linestyle: CanvasEx.LINESTYLE_SOLID,
              extendleft: !1,
              extendright: !1,
              leftend: d.Normal,
              rightend: d.Normal,
            }),
              (p = new a()).setData(s),
              p.setHitTest(new o(o.MOVEPOINT, null)),
              n.append(p);
          for (
            u = (_ = this._source.properties()).candleStyle.drawWick.value(),
              f = _.candleStyle.drawBorder.value(),
              g = _.candleStyle.borderColor.value(),
              v = _.candleStyle.wickColor.value(),
              (w = new h()).setGlobalAlpha(1 - _.transparency.value() / 100),
              y = this._model.timeScale().barSpacing(),
              r = 0;
            r < this._segments.length;
            r++
          )
            (m = {
              bars: this._segments[r].bars,
              barSpacing: y,
              wickVisible: u,
              borderVisible: f,
              borderColor: g,
              wickColor: v,
              barWidth: c.optimalBarWidth(y),
              hittest: new o(o.MOVEPOINT, null),
            }),
              w.append(new l(m));
          return n.append(w), i && this.addAnchors(n), n;
        }),
        (t.GhostFeedPaneView = n);
    },
    eg8N: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t), (this._numericFormatter = new d());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('qgcf').TextRenderer,
        o = i('IjC5').RectangleRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('zXvd').NumericFormatter,
        c = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          function n(e, t, i) {
            function n(t) {
              var i = new l();
              i.setData(Object.assign({}, T, { points: t })), e.append(i);
            }
            var s,
              a,
              o,
              h,
              d,
              p,
              w,
              y,
              m,
              x = new r(_, u),
              b = new r(f, u),
              R = new r(_, g),
              S = new r(f, g),
              T = {
                width: I._model.timeScale().width(),
                height: I._source.priceScale().height(),
                color: v.fans.color.value(),
                linewidth: v.linewidth.value(),
                linestyle: v.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              };
            for (s = 0; s < t.length; ++s)
              (a = i ? g : t[s]),
                (o = i ? u : t[s]),
                (h = i ? t[s] : _),
                (d = i ? t[s] : f),
                (p = new r(d, a)),
                (w = new r(h, a)),
                (y = new r(d, o)),
                (m = new r(h, o)),
                n([R, y]),
                n([S, m]),
                n([x, p]),
                n([b, w]);
          }
          var s,
            d,
            p,
            _,
            u,
            f,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I;
          if (
            (this._invalidated && this._updateImpl(),
            (s = new h()),
            this._points.length < 2)
          )
            return i && this.addAnchors(s), s;
          for (
            d = this._points[0],
              p = this._points[1],
              _ = Math.min(d.x, p.x),
              u = Math.min(d.y, p.y),
              f = Math.max(d.x, p.x),
              g = Math.max(d.y, p.y),
              v = this._source.properties(),
              w = this._source.properties().fillHorzBackground.value(),
              y = this._source.properties().horzTransparency.value(),
              m = this._source.properties().fillVertBackground.value(),
              x = this._source.properties().vertTransparency.value(),
              b = 0;
            b < this._hlevels.length;
            b++
          )
            b > 0 &&
              w &&
              ((R = this._hlevels[b - 1]),
              (d = new r(_, this._hlevels[b].y)),
              (p = new r(f, R.y)),
              ((S = {}).points = [d, p]),
              (S.color = this._hlevels[b].color),
              (S.linewidth = 0),
              (S.backcolor = this._hlevels[b].color),
              (S.fillBackground = !0),
              (S.transparency = y),
              (T = new o(void 0, void 0, !0)).setData(S),
              s.append(T)),
              (P = {
                points: [
                  (d = new r(_, this._hlevels[b].y)),
                  (p = new r(f, this._hlevels[b].y)),
                ],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[b].color,
                linewidth: v.linewidth.value(),
                linestyle: v.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              (T = new l()).setData(P),
              s.append(T),
              v.showLeftLabels.value() &&
                ((L = {
                  points: [d],
                  text: this._numericFormatter.format(this._hlevels[b].coeff),
                  color: this._hlevels[b].color,
                  vertAlign: 'middle',
                  horzAlign: 'right',
                  font: v.font.value(),
                  offsetX: -5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0,
                }),
                s.append(new a(L))),
              v.showRightLabels.value() &&
                ((C = {
                  points: [p],
                  text: this._numericFormatter.format(this._hlevels[b].coeff),
                  color: this._hlevels[b].color,
                  vertAlign: 'middle',
                  horzAlign: 'left',
                  font: v.font.value(),
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                }),
                s.append(new a(C)));
          for (b = 0; b < this._vlevels.length; b++)
            (d = new r(this._vlevels[b].x, u)),
              (p = new r(this._vlevels[b].x, g)),
              b > 0 &&
                m &&
                ((R = this._vlevels[b - 1]),
                (B = new r(R.x, u)),
                ((S = {}).points = [B, p]),
                (S.color = this._vlevels[b].color),
                (S.linewidth = 0),
                (S.backcolor = this._vlevels[b].color),
                (S.fillBackground = !0),
                (S.transparency = x),
                (T = new o(void 0, void 0, !0)).setData(S),
                s.append(T)),
              (P = {
                points: [d, p],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[b].color,
                linewidth: v.linewidth.value(),
                linestyle: v.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: c.Normal,
                rightend: c.Normal,
              }),
              (T = new l()).setData(P),
              s.append(T),
              v.showTopLabels.value() &&
                ((k = {
                  points: [d],
                  text: this._numericFormatter.format(this._vlevels[b].coeff),
                  color: this._vlevels[b].color,
                  vertAlign: 'bottom',
                  horzAlign: 'center',
                  font: v.font.value(),
                  offsetX: 0,
                  offsetY: -5,
                  fontsize: 12,
                }),
                s.append(new a(k))),
              v.showBottomLabels.value() &&
                ((O = {
                  points: [p],
                  text: this._numericFormatter.format(this._vlevels[b].coeff),
                  color: this._vlevels[b].color,
                  vertAlign: 'top',
                  horzAlign: 'center',
                  font: v.font.value(),
                  offsetX: 0,
                  offsetY: 5,
                  fontsize: 12,
                }),
                s.append(new a(O)));
          return (
            (I = this),
            n(s, this._hfans, !0),
            n(s, this._vfans, !1),
            i && this.addAnchors(s),
            s
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a, o, l, h, d, c, p, _, u, f, g, v;
          if (
            (s.prototype._updateImpl.call(this),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            for (
              e = this._source.points()[0],
                t = this._source.points()[1],
                n =
                  (i = this._source.properties()).reverse && i.reverse.value(),
                this._hlevels = [],
                r = n ? e.price - t.price : t.price - e.price,
                a = n ? t.price : e.price,
                o = this._source.ownerSource().firstValue(),
                l = 1;
              l <= 7;
              l++
            )
              (h = i['hlevel' + l]).visible.value() &&
                ((d = h.coeff.value()),
                (c = h.color.value()),
                (p = a + d * r),
                (_ = this._source.priceScale().priceToCoordinate(p, o)),
                this._hlevels.push({ coeff: d, color: c, y: _ }));
            for (
              this._vlevels = [],
                u = n ? e.index - t.index : t.index - e.index,
                f = n ? t.index : e.index,
                l = 1;
              l <= 7;
              l++
            )
              (h = i['vlevel' + l]).visible.value() &&
                ((d = h.coeff.value()),
                (c = h.color.value()),
                (g = Math.round(f + d * u)),
                (v = this._model.timeScale().indexToCoordinate(g)),
                this._vlevels.push({ coeff: d, color: c, x: v }));
            if (
              ((this._hfans = []), (this._vfans = []), i.fans.visible.value())
            )
              for (l = 1; l <= 7; l++)
                (g = Math.round(f + i['hlevel' + l].coeff.value() * u)),
                  (p = a + i['vlevel' + l].coeff.value() * r),
                  this._hfans.push(
                    this._model.timeScale().indexToCoordinate(g),
                  ),
                  this._vfans.push(
                    this._source.priceScale().priceToCoordinate(p, o),
                  );
          }
        }),
        (t.GannSquarePaneView = n);
    },
    gr7S: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._label1 = null),
          (this._label2 = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointAngleRenderer = new s()),
          (this._p1LabelRenderer = new o({})),
          (this._p2LabelRenderer = new o({})),
          (this._p3LabelRenderer = new o({})),
          (this._p4LabelRenderer = new o({}));
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('7qYS').DisjointAngleRenderer,
        a = i('pJOz').TrendLineRenderer,
        o = i('qgcf').TextRenderer,
        l = i('Zy3/').CompositeRenderer;
      i('MMac').PaneRendererClockIcon;
      inherit(n, r),
        (n.prototype._updateImpl = function () {
          var e, t, i, n;
          r.prototype._updateImpl.call(this),
            (this._label1 = null),
            (this._label2 = null),
            this._source.points().length < 2 ||
              (this._source.priceScale() &&
                ((e = this._source.points()[0]),
                (t = this._source.points()[1]),
                (i = this._source.ownerSource().firstValue()),
                (this._price1 = this._source
                  .priceScale()
                  .formatPrice(e.price, i)),
                (this._price2 = this._source
                  .priceScale()
                  .formatPrice(t.price, i)),
                3 === this._source.points().length &&
                  ((n = this._source.points()[2]),
                  (this._price3 = this._source
                    .priceScale()
                    .formatPrice(n.price, i)))));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, h, d, c, p, _, u, f, g, v;
          return (
            this._invalidated && this._updateImpl(),
            (n = new l()),
            this._points.length < 2
              ? n
              : ((r = this._points[0]),
                (s = this._points[1]),
                (h = this._source.properties()),
                (d = this._model),
                (c = this._source),
                3 === this._points.length &&
                  (((a = this._points[2]).x = s.x),
                  ((o = r.clone()).y = a.y),
                  (o.data = 3),
                  h.fillBackground.value() &&
                    ((t = d.timeScale().width()),
                    (e = c.priceScale().height()),
                    (p = h.extendLeft.value()),
                    (_ = h.extendRight.value()),
                    this._disjointAngleRenderer.setData({
                      width: t,
                      height: e,
                      extendleft: p,
                      extendright: _,
                      points: [r, s, a, o],
                      backcolor: h.backgroundColor.value(),
                      transparency: h.transparency.value(),
                      hittestOnBackground: TradingView.isMobile.any(),
                    }),
                    n.append(this._disjointAngleRenderer))),
                (u = function (e, t) {
                  return {
                    points: [e, t],
                    width: d.timeScale().width(),
                    height: c.priceScale().height(),
                    color: h.linecolor.value(),
                    linewidth: h.linewidth.value(),
                    linestyle: h.linestyle.value(),
                    extendleft: h.extendLeft.value(),
                    extendright: h.extendRight.value(),
                    leftend: h.leftEnd.value(),
                    rightend: h.rightEnd.value(),
                  };
                }),
                this._trendLineRendererPoints12.setData(u(r, s)),
                n.append(this._trendLineRendererPoints12),
                2 === this._points.length
                  ? (this.addAnchors(n), n)
                  : ((f = this),
                    (g = function (e, t, i, r, s, a) {
                      var o;
                      f._source.properties().showPrices.value() &&
                        ((o = {
                          points: [i],
                          text: s,
                          color: f._source.properties().textcolor.value(),
                          horzAlign: i.x > r.x ? 'left' : 'right',
                          vertAlign: 'middle',
                          font: f._source.properties().font.value(),
                          offsetX: i.x > r.x ? -5 : 5,
                          offsetY: -5,
                          bold: f._source.properties().bold.value(),
                          italic: f._source.properties().italic.value(),
                          fontsize: f._source.properties().fontsize.value(),
                        }),
                        e.setData(o),
                        n.append(e),
                        (o = {
                          points: [r],
                          text: a,
                          color: f._source.properties().textcolor.value(),
                          horzAlign: i.x < r.x ? 'left' : 'right',
                          vertAlign: 'middle',
                          font: f._source.properties().font.value(),
                          offsetX: i.x > r.x ? -5 : 5,
                          offsetY: -5,
                          bold: f._source.properties().bold.value(),
                          italic: f._source.properties().italic.value(),
                          fontsize: f._source.properties().fontsize.value(),
                        }),
                        t.setData(o),
                        n.append(t));
                    })(
                      this._p1LabelRenderer,
                      this._p2LabelRenderer,
                      r,
                      s,
                      this._price1,
                      this._price2,
                    ),
                    this._trendLineRendererPoints43.setData(u(o, a)),
                    n.append(this._trendLineRendererPoints43),
                    g(
                      this._p3LabelRenderer,
                      this._p4LabelRenderer,
                      a,
                      o,
                      this._price3,
                      this._price3,
                    ),
                    i &&
                      ((v = [r, s, a, o]),
                      this._model.lineBeingCreated() === this._source &&
                        v.pop(),
                      n.append(this.createLineAnchor({ points: v }))),
                    n))
          );
        }),
        (t.FlatBottomPaneView = n);
    },
    iTb9: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._label = null),
          (this._trendLineRendererPoints12 = new a()),
          (this._trendLineRendererPoints43 = new a()),
          (this._disjointAngleRenderer = new s()),
          (this._p1LabelRenderer = new o({})),
          (this._p2LabelRenderer = new o({})),
          (this._p3LabelRenderer = new o({})),
          (this._p4LabelRenderer = new o({}));
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('7qYS').DisjointAngleRenderer,
        a = i('pJOz').TrendLineRenderer,
        o = i('qgcf').TextRenderer,
        l = i('Zy3/').CompositeRenderer;
      i('MMac').PaneRendererClockIcon;
      inherit(n, r),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s;
          r.prototype._updateImpl.call(this),
            (this._label = null),
            this._source.points().length < 2 ||
              (this._source.priceScale() &&
                ((e = this._source.points()[0]),
                (t = this._source.points()[1]),
                (i = this._source.ownerSource().firstValue()),
                (this._price1 = this._source
                  .priceScale()
                  .formatPrice(e.price, i)),
                (this._price2 = this._source
                  .priceScale()
                  .formatPrice(t.price, i)),
                3 === this._source.points().length &&
                  ((n = this._source.points()[2]),
                  (this._price3 = this._source
                    .priceScale()
                    .formatPrice(n.price, i)),
                  (s = t.price - e.price),
                  (this._price4 = this._source
                    .priceScale()
                    .formatPrice(n.price + s, i)))));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, o, h, d, c, p, _, u, f, g, v, w;
          return (
            this._invalidated && this._updateImpl(),
            (n = new l()),
            this._points.length < 2
              ? n
              : ((r = this._points[0]),
                (s = this._points[1]),
                (h = this._source.properties()),
                (d = this._model),
                (c = this._source),
                this._points.length >= 3 &&
                  (((a = this._points[2]).x = s.x),
                  (a.square = !0),
                  (p = s.y - r.y),
                  ((o = r.clone()).y = a.y + p),
                  (o.data = 3),
                  h.fillBackground.value() &&
                    ((t = d.timeScale().width()),
                    (e = c.priceScale().height()),
                    (_ = h.extendLeft.value()),
                    (u = h.extendRight.value()),
                    this._disjointAngleRenderer.setData({
                      width: t,
                      height: e,
                      extendleft: _,
                      extendright: u,
                      points: [r, s, a, o],
                      backcolor: h.backgroundColor.value(),
                      transparency: h.transparency.value(),
                      hittestOnBackground: TradingView.isMobile.any(),
                    }),
                    n.append(this._disjointAngleRenderer))),
                (f = function (e, t) {
                  return {
                    points: [e, t],
                    width: d.timeScale().width(),
                    height: c.priceScale().height(),
                    color: h.linecolor.value(),
                    linewidth: h.linewidth.value(),
                    linestyle: h.linestyle.value(),
                    extendleft: h.extendLeft.value(),
                    extendright: h.extendRight.value(),
                    leftend: h.leftEnd.value(),
                    rightend: h.rightEnd.value(),
                  };
                }),
                (g = this),
                (v = function (e, t, i, r, s, a) {
                  var o;
                  g._source.properties().showPrices.value() &&
                    ((o = {
                      points: [i],
                      text: s,
                      color: g._source.properties().textcolor.value(),
                      horzAlign: i.x > r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: g._source.properties().font.value(),
                      offsetX: i.x > r.x ? -5 : 5,
                      offsetY: -5,
                      bold: g._source.properties().bold.value(),
                      italic: g._source.properties().italic.value(),
                      fontsize: g._source.properties().fontsize.value(),
                    }),
                    e.setData(o),
                    n.append(e),
                    (o = {
                      points: [r],
                      text: a,
                      color: g._source.properties().textcolor.value(),
                      horzAlign: i.x < r.x ? 'left' : 'right',
                      vertAlign: 'middle',
                      font: g._source.properties().font.value(),
                      offsetX: i.x > r.x ? -5 : 5,
                      offsetY: -5,
                      bold: g._source.properties().bold.value(),
                      italic: g._source.properties().italic.value(),
                      fontsize: g._source.properties().fontsize.value(),
                    }),
                    t.setData(o),
                    n.append(t));
                }),
                this._trendLineRendererPoints12.setData(f(r, s)),
                n.append(this._trendLineRendererPoints12),
                v(
                  this._p1LabelRenderer,
                  this._p2LabelRenderer,
                  r,
                  s,
                  this._price1,
                  this._price2,
                ),
                2 === this._points.length
                  ? (this.addAnchors(n), n)
                  : (this._trendLineRendererPoints43.setData(f(o, a)),
                    n.append(this._trendLineRendererPoints43),
                    v(
                      this._p3LabelRenderer,
                      this._p4LabelRenderer,
                      a,
                      o,
                      this._price3,
                      this._price4,
                    ),
                    i &&
                      ((w = [r, s, a, o]),
                      this._model.lineBeingCreated() === this._source &&
                        w.pop(),
                      n.append(this.createLineAnchor({ points: w }))),
                    n))
          );
        }),
        (t.DisjointAnglePaneView = n);
    },
    isd9: function (e, t, i) {
      'use strict';
      var n, r, s;
      i.r(t),
        i.d(t, 'ArcWedgeRenderer', function () {
          return s;
        }),
        (n = i('VdBB')),
        (r = i('Tmoa')),
        (s = (function () {
          function e() {
            (this._data = null),
              (this._hitTest = new n.HitTestResult(n.HitTestResult.MOVEPOINT)),
              (this._backHitTest = new n.HitTestResult(
                n.HitTestResult.MOVEPOINT_BACKGROUND,
              ));
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.setHitTest = function (e) {
              this._hitTest = e;
            }),
            (e.prototype.draw = function (e) {
              if (
                null !== this._data &&
                ((e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.arc(
                  this._data.center.x,
                  this._data.center.y,
                  this._data.radius,
                  this._data.edge1,
                  this._data.edge2,
                  !0,
                ),
                e.stroke(),
                this._data.fillBackground)
              ) {
                if (
                  (e.arc(
                    this._data.center.x,
                    this._data.center.y,
                    this._data.prevRadius,
                    this._data.edge2,
                    this._data.edge1,
                    !1,
                  ),
                  this._data.gradient)
                ) {
                  var t = e.createRadialGradient(
                    this._data.center.x,
                    this._data.center.y,
                    this._data.prevRadius,
                    this._data.center.x,
                    this._data.center.y,
                    this._data.radius,
                  );
                  t.addColorStop(
                    0,
                    Object(r.generateColor)(
                      this._data.color1,
                      this._data.transparency,
                    ),
                  ),
                    t.addColorStop(
                      1,
                      Object(r.generateColor)(
                        this._data.color2,
                        this._data.transparency,
                      ),
                    ),
                    (e.fillStyle = t);
                } else
                  e.fillStyle = Object(r.generateColor)(
                    this._data.color,
                    this._data.transparency,
                    !0,
                  );
                e.fill();
              }
            }),
            (e.prototype.hitTest = function (e) {
              var t, i, n, r, s, a, o, l, h, d;
              return null === this._data
                ? null
                : ((i = (t = e.subtract(this._data.center)).length()),
                  Math.abs(i - this._data.radius) <= 4 &&
                  ((n = e.subtract(this._data.p1).length()),
                  (r = e.subtract(this._data.p2).length()),
                  Math.max(n, r) <=
                    this._data.p1.subtract(this._data.p2).length())
                    ? this._hitTest
                    : this._data.fillBackground &&
                      i <= this._data.radius &&
                      ((s = this._data.p1
                        .subtract(this._data.center)
                        .normalized()),
                      (a = this._data.p2
                        .subtract(this._data.center)
                        .normalized()),
                      (o = t.normalized()),
                      (l = s.dotProduct(a)),
                      (h = o.dotProduct(s)),
                      (d = o.dotProduct(a)),
                      h >= l && d >= l)
                    ? this._backHitTest
                    : null);
            }),
            e
          );
        })());
    },
    jlk4: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._baseTrendRenderer = new a()),
          (this._edgeTrendRenderer = new a()),
          (this._arcWedgeRenderer = new r());
      }
      var r = i('isd9').ArcWedgeRenderer,
        s = i('1SUO').FibWedgePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('Zy3/').CompositeRenderer,
        l = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, a, h, d, c, p, _, u, f, g;
          return (
            this._invalidated && this._updateImpl(),
            (n = new o()),
            this._points.length < 2
              ? n
              : ((r = this._source.properties()),
                (d = {
                  points: [(a = (s = this._points)[0]), (h = s[1])],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: r.trendline.color.value(),
                  linewidth: r.linewidth.value(),
                  linestyle: r.trendline.linestyle.value(),
                  extendleft: !1,
                  extendright: !1,
                  leftend: l.Normal,
                  rightend: l.Normal,
                }),
                this._baseTrendRenderer.setData(d),
                n.append(this._baseTrendRenderer),
                this._points.length < 3
                  ? (i && this.addAnchors(n), n)
                  : ((p = (c = s[2]).data),
                    (_ = h.subtract(a).length()),
                    (u = c.subtract(a).normalized()),
                    ((c = a.add(u.scaled(_))).data = p),
                    (d = {
                      points: [a, c],
                      width: this._model.timeScale().width(),
                      height: this._source.priceScale().height(),
                      color: r.trendline.color.value(),
                      linewidth: r.linewidth.value(),
                      linestyle: r.trendline.linestyle.value(),
                      extendleft: !1,
                      extendright: !1,
                      leftend: l.Normal,
                      rightend: l.Normal,
                    }),
                    this._edgeTrendRenderer.setData(d),
                    n.append(this._edgeTrendRenderer),
                    (f = this._levels[0]),
                    ((g = {}).center = this._points[0]),
                    (g.radius = f.radius),
                    (g.prevRadius = 0),
                    (g.edge = this._edge),
                    (g.color = r.trendline.color.value()),
                    (g.color1 = r.color1.value()),
                    (g.color2 = r.color2.value()),
                    (g.linewidth = r.linewidth.value()),
                    (g.edge1 = this._edge1),
                    (g.edge2 = this._edge2),
                    (g.p1 = f.p1),
                    (g.p2 = f.p2),
                    (g.fillBackground = r.fillBackground.value()),
                    (g.transparency = r.transparency.value()),
                    (g.gradient = !0),
                    this._arcWedgeRenderer.setData(g),
                    n.append(this._arcWedgeRenderer),
                    i && this.addAnchors(n),
                    n))
          );
        }),
        (t.ProjectionLinePaneView = n);
    },
    l5Au: function (e, t, i) {
      'use strict';
      function n(e, t) {
        r.call(this, e, t),
          (this._medianRenderer = new a()),
          (this._sideRenderer = new a());
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('2trc').ChannelRenderer,
        a = i('pJOz').TrendLineRenderer,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer,
        h = i('a7Ha').LineEnd;
      inherit(n, r),
        (n.prototype._updateImpl = function () {
          r.prototype._updateImpl.call(this),
            0 !== this._floatPoints.length &&
              (3 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]
                    .add(this._floatPoints[2])
                    .scaled(0.5)),
                  (this._medianPoint.data = 3))
                : 2 === this._floatPoints.length
                ? ((this._medianPoint = this._floatPoints[1]),
                  (this._medianPoint.data = 3))
                : ((this._medianPoint = this._floatPoints[0]),
                  (this._medianPoint.data = 3)));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, d, c, p, _, u, f, g, v, w, y, m, x, b, R;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new l()),
            this._floatPoints.length < 2)
          )
            return n;
          if (!this._medianPoint) return n;
          if (
            ((r = {
              points: [this._floatPoints[0], this._medianPoint],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !0,
              leftend: h.Normal,
              rightend: h.Normal,
            }),
            this._medianRenderer.setData(r),
            n.append(this._medianRenderer),
            this._floatPoints.length < 3)
          )
            return i && this.addAnchors(n), n;
          for (
            d = {
              points: [this._floatPoints[1], this._floatPoints[2]],
              width: this._model.timeScale().width(),
              height: this._source.priceScale().height(),
              color: this._source.properties().median.color.value(),
              linewidth: this._source.properties().median.linewidth.value(),
              linestyle: this._source.properties().median.linestyle.value(),
              extendleft: !1,
              extendright: !1,
              leftend: h.Normal,
              rightend: h.Normal,
            },
              this._sideRenderer.setData(d),
              n.append(this._sideRenderer),
              c = 0,
              p = this._floatPoints[2]
                .subtract(this._floatPoints[1])
                .scaled(0.5),
              _ = this._source.properties().fillBackground.value(),
              u = this._source.properties().transparency.value(),
              f = 0;
            f <= 8;
            f++
          )
            (g = 'level' + f),
              (v = this._source.properties()[g]).visible.value() &&
                ((w = this._medianPoint.addScaled(p, v.coeff.value())),
                (y = this._medianPoint.addScaled(p, -v.coeff.value())),
                _ &&
                  (((m = {}).width = this._model.timeScale().width()),
                  (m.height = this._source.priceScale().height()),
                  (m.p1 = this._floatPoints[0]),
                  (m.p2 = w),
                  (m.p3 = this._floatPoints[0]),
                  (m.p4 = this._medianPoint.addScaled(p, c)),
                  (m.color = v.color.value()),
                  (m.transparency = u),
                  (m.hittestOnBackground = !0),
                  (x = new s()).setData(m),
                  n.append(x),
                  ((m = {}).width = this._model.timeScale().width()),
                  (m.height = this._source.priceScale().height()),
                  (m.p1 = this._floatPoints[0]),
                  (m.p2 = y),
                  (m.p3 = this._floatPoints[0]),
                  (m.p4 = this._medianPoint.addScaled(p, -c)),
                  (m.color = v.color.value()),
                  (m.transparency = u),
                  (m.hittestOnBackground = !0),
                  (x = new s()).setData(m),
                  n.append(x)),
                (c = v.coeff.value()),
                (b = {
                  points: [this._floatPoints[0], w],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: v.color.value(),
                  linewidth: v.linewidth.value(),
                  linestyle: v.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: h.Normal,
                  rightend: h.Normal,
                }),
                (x = new a()).setData(b),
                x.setHitTest(new o(o.MOVEPOINT, null, f)),
                n.append(x),
                (R = {
                  points: [this._floatPoints[0], y],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: v.color.value(),
                  linewidth: v.linewidth.value(),
                  linestyle: v.linestyle.value(),
                  extendleft: !1,
                  extendright: !0,
                  leftend: h.Normal,
                  rightend: h.Normal,
                }),
                (x = new a()).setData(R),
                x.setHitTest(new o(o.MOVEPOINT, null, f)),
                n.append(x));
          return i && this.addAnchors(n), n;
        }),
        (t.PitchfanLinePaneView = n);
    },
    lZ9F: function (e, t, i) {
      'use strict';
      function n(e, t) {
        a.call(this, e, t), (this._poligonRenderer = new l());
      }
      var r = i('aO4+').Point,
        s = i('GEp6').distanceToLine,
        a = i('aB9a').LineSourcePaneView,
        o = i('pJOz').TrendLineRenderer,
        l = i('BCbF').PolygonRenderer,
        h = i('Zy3/').CompositeRenderer,
        d = i('a7Ha').LineEnd;
      inherit(n, a),
        (n.prototype._updateImpl = function () {
          a.prototype._updateImpl.call(this),
            (this._distance = 0),
            3 === this._points.length &&
              (this._distance = s(
                this._points[0],
                this._points[1],
                this._points[2],
              ).distance);
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, a, l, c, p, _, u, f, g, v, w, y, m;
          return (
            this._invalidated && this._updateImpl(),
            0 === this._points.length
              ? null
              : ((n = new h()),
                (s = this._source.properties()),
                (a = this._points[0]),
                (l = this._points[1]),
                2 === this._points.length
                  ? (((f = {}).points = this._points),
                    (f.floatPoints = this._floatPoints),
                    (f.width = this._model.timeScale().width()),
                    (f.height = this._source.priceScale().height()),
                    (f.color = s.color.value()),
                    (f.linewidth = 1),
                    (f.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (f.extendleft = !1),
                    (f.extendright = !1),
                    (f.leftend = d.Normal),
                    (f.rightend = d.Normal),
                    (g = new o()).setData(f),
                    n.append(g))
                  : 3 === this._points.length &&
                    ((v = l.subtract(a)),
                    (y = (w = new r(v.y, -v.x)
                      .normalized()
                      .scaled(this._distance)).scaled(-1)),
                    (c = a.add(w)),
                    (p = l.add(w)),
                    (_ = a.add(y)),
                    (u = l.add(y)),
                    ((f = {}).points = [c, p, u, _]),
                    (f.color = s.color.value()),
                    (f.linewidth = this._source.properties().linewidth.value()),
                    (f.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (f.filled = !0),
                    (f.backcolor = s.backgroundColor.value()),
                    (f.fillBackground = s.fillBackground.value()),
                    (f.transparency = s.transparency.value()),
                    this._poligonRenderer.setData(f),
                    n.append(this._poligonRenderer)),
                i &&
                  ((m = []).push(a),
                  this._points.length >= 2 && m.push(l),
                  3 === this._points.length &&
                    ((c.data = 2),
                    (_.data = 2),
                    (p.data = 2),
                    (u.data = 2),
                    m.push(c),
                    m.push(_),
                    m.push(p),
                    m.push(u)),
                  n.append(this.createLineAnchor({ points: m }))),
                n)
          );
        }),
        (t.RotatedRectanglePaneView = n);
    },
    mjK7: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t);
      }
      var r = i('aB9a').LineSourcePaneView,
        s = i('6MfG').Pattern5PaneView;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, s;
          r.prototype._updateImpl.call(this),
            this._source.points().length >= 3 &&
              ((e = this._source.points()[0]),
              (t = this._source.points()[1]),
              (i = this._source.points()[2]),
              (this._ABRetracement =
                Math.round(
                  1e3 * Math.abs((i.price - t.price) / (t.price - e.price)),
                ) / 1e3)),
            this._source.points().length >= 4 &&
              ((n = this._source.points()[3]),
              (this._BCRetracement =
                Math.round(
                  1e3 * Math.abs((n.price - e.price) / (t.price - e.price)),
                ) / 1e3)),
            this._source.points().length >= 5 &&
              ((s = this._source.points()[4]),
              (this._CDRetracement =
                Math.round(
                  1e3 * Math.abs((s.price - n.price) / (n.price - i.price)),
                ) / 1e3),
              (this._XDRetracement =
                Math.round(
                  1e3 * Math.abs((s.price - n.price) / (e.price - n.price)),
                ) / 1e3));
        }),
        (t.CypherPaneView = n);
    },
    mr3a: function (e, t, i) {
      'use strict';
      function n(e, t, i, n, r, a, o) {
        s.call(this, e, t),
          (this._offsetX = i),
          (this._offsetY = n),
          (this._vertAlign = r),
          (this._horzAlign = a),
          (this._forceTextAlign = !!o),
          (this._renderer = null),
          (this._invalidated = !0),
          (this._noSelection = !1),
          (this._renderer = new l({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('Zy3/').CompositeRenderer,
        o = i('1mZ4').SelectionRenderer,
        l = i('qgcf').TextRenderer,
        h = i('TTFo').fromLog,
        d = i('TTFo').toLog;
      inherit(n, s),
        (n.prototype.disableSelection = function () {
          this._noSelection = !0;
        }),
        (n.prototype.isEditMode = function () {
          return !this._model.readOnly();
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, l, c, p, _, u, f, g, v, w, y, m, x, b;
          return (
            this._invalidated && this._updateImpl(),
            !(n = this._source.priceScale()) || n.isEmpty()
              ? null
              : (((s = {}).points = this._source.isFixed()
                  ? this._source.fixedPoints()
                  : this._points),
                (l = this._source.properties()),
                (s.text = l.text.value()),
                (s.color = l.color.value()),
                (s.font = l.font.value()),
                (s.offsetX = this._offsetX ? this._offsetX : 0),
                (s.offsetY = this._offsetY ? this._offsetY : 0),
                (s.vertAlign = this._vertAlign ? this._vertAlign : 'top'),
                (s.horzAlign = this._horzAlign ? this._horzAlign : 'left'),
                (s.forceTextAlign = this._forceTextAlign),
                (s.fontsize = l.fontsize.value()),
                l.fillBackground &&
                  l.fillBackground.value() &&
                  ((s.backgroundColor = l.backgroundColor.value()),
                  (s.backgroundTransparency =
                    1 - l.backgroundTransparency.value() / 100 || 0)),
                l.drawBorder &&
                  l.drawBorder.value() &&
                  (s.borderColor = l.borderColor.value()),
                l.wordWrap &&
                  l.wordWrap.value() &&
                  (s.wordWrapWidth = l.wordWrapWidth.value()),
                (s.bold = l.bold && l.bold.value()),
                (s.italic = l.italic && l.italic.value()),
                (s.highlightBorder = this._model
                  .selection()
                  .isSelected(this._source)),
                this._source.isFixed() ||
                  !l.fixedSize ||
                  l.fixedSize.value() ||
                  ((s.scaleX =
                    this._source._model.timeScale().barSpacing() /
                    this._source._barSpacing),
                  (c = n.height() / n.priceRange().length()),
                  this._source._isPriceDencityLog &&
                    !n.isLog() &&
                    ((p = n.priceRange().minValue()),
                    (_ = n.priceRange().maxValue()),
                    (p = d(p)),
                    (u = (_ = d(_)) - p),
                    (c = n.height() / u)),
                  !this._source._isPriceDencityLog &&
                    n.isLog() &&
                    ((p = n.priceRange().minValue()),
                    (_ = n.priceRange().maxValue()),
                    h(p),
                    h(_),
                    (u = _ - p),
                    (c = n.height() / u)),
                  (s.scaleY = c / this._source._priceDencity),
                  (!isFinite(s.scaleY) || s.scaleY <= 0) && delete s.scaleY),
                this._renderer.setData(s),
                this.isAnchorsRequired() &&
                1 === s.points.length &&
                !this._noSelection
                  ? ((f = new a()).append(this._renderer),
                    (g = s.points[0].clone()),
                    (v = s.wordWrapWidth || this._renderer.measure().width),
                    (w = s.lines ? s.lines.length * s.fontsize : 0),
                    (y = ~~(s.fontsize / 6)),
                    (m = s.wordWrapWidth ? y : 0),
                    (g.x -= y),
                    s.wordWrapWidth &&
                      (((x = new r(g.x + v + 2 * m, g.y + w / 2 + y)).data = 0),
                      f.append(this.createLineAnchor({ points: [x] }))),
                    ((b = new r(g.x + v / 2 + m, g.y + w + 2 * y)).data = 0),
                    f.append(
                      new o({
                        points: [b],
                        bgColor: this._model.backgroundColor(),
                      }),
                    ),
                    f)
                  : this._renderer)
          );
        }),
        (t.TextPaneView = n);
    },
    'obU/': function (e, t, i) {
      'use strict';
      function n() {
        this._data = null;
      }
      function r(e, t) {
        p.call(this, e, t), (this._renderer = new n());
      }
      var s = i('aO4+').Point,
        a = i('GEp6').distanceToLine,
        o = i('hfHJ'),
        l = o.rotationMatrix,
        h = o.scalingMatrix,
        d = o.translationMatrix,
        c = o.transformPoint,
        p = i('aB9a').LineSourcePaneView,
        _ = i('VdBB').HitTestResult,
        u = i('Zy3/').CompositeRenderer,
        f = i('Tmoa');
      (n.prototype.setData = function (e) {
        (this._data = e),
          (this._data.angleFrom = 0),
          (this._data.angleTo = 2 * Math.PI),
          (this._data.clockwise = !1);
      }),
        (n.prototype.draw = function (e) {
          var t, i, n, r, o, p, _, u, g, v, w, y, m;
          if (!(null === this._data || this._data.points.length < 2)) {
            if (
              ((t = this._data.points[0]),
              (i = this._data.points[1]),
              this._data.points.length < 3)
            )
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            if (((n = this._data.points[2]), (r = a(t, i, n).distance) < 1))
              return (
                (e.strokeStyle = this._data.color),
                (e.lineWidth = this._data.linewidth),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(i.x, i.y),
                void e.stroke()
              );
            (o = i.subtract(t)),
              (p = t.add(i).scaled(0.5)),
              (_ = (_ = new s(-o.y, o.x)).normalized()),
              (n = p.add(_.scaled(r))),
              (e.strokeStyle = this._data.color),
              (e.lineWidth = this._data.linewidth),
              (u = o.length()),
              (g = o.x / u),
              (v = o.y / u),
              (w = Math.acos(g)),
              v < 0 && (w = -w),
              (y = this._data.points[2]),
              (m = d(-p.x, -p.y)),
              (y = c(m, y)),
              (m = l(-w)),
              (y = c(m, y)),
              (m = h(1, u / (2 * r))),
              (y = c(m, y)).y < 0
                ? (this._data.clockwise = !0)
                : (this._data.clockwise = !1),
              e.save(),
              e.beginPath(),
              e.translate(p.x, p.y),
              e.rotate(w),
              e.scale(1, (2 * r) / u),
              e.arc(
                0,
                0,
                0.5 * u,
                this._data.angleFrom,
                this._data.angleTo,
                this._data.clockwise,
              ),
              e.restore(),
              e.stroke(),
              this._data.fillBackground &&
                ((e.fillStyle = f.generateColor(
                  this._data.backcolor,
                  this._data.transparency,
                )),
                e.fill());
          }
        }),
        (n.prototype._additionalPointTest = function (e, t) {
          return !0;
        }),
        (n.prototype.hitTest = function (e) {
          var t, i, n, r, o, p, u, f, g, v, w, y, m, x, b;
          return null === this._data || this._data.points.length < 3
            ? null
            : ((t = this._data.points[0]),
              (i = this._data.points[1]),
              (n = this._data.points[2]),
              (r = a(t, i, n).distance),
              (o = i.subtract(t)),
              (p = t.add(i).scaled(0.5)),
              (u = (u = new s(-o.y, o.x)).normalized()),
              (n = p.add(u.scaled(r))),
              (f = o.length()),
              (g = o.x / f),
              (v = o.y / f),
              (w = Math.acos(g)),
              v < 0 && (w = -w),
              (y = d(-p.x, -p.y)),
              (e = c(y, e)),
              (m = c(y, this._data.points[2])),
              (y = l(-w)),
              (e = c(y, e)),
              (m = c(y, m)),
              (y = h(1, f / (2 * r))),
              (e = c(y, e)),
              (m = c(y, m)),
              (x = e.length()),
              (b = 3),
              this._additionalPointTest(e, m)
                ? Math.abs(x - 0.5 * f) <= b
                  ? new _(_.MOVEPOINT)
                  : this._data.fillBackground &&
                    !this._data.noHitTestOnBackground &&
                    x <= 0.5 * f
                  ? new _(_.MOVEPOINT_BACKGROUND)
                  : null
                : null);
        }),
        inherit(r, p),
        (r.prototype.renderer = function (e, t, i) {
          var n, r, o, l, h, d, c, p, _, f, g, v, w, y;
          return (
            this._invalidated && this._updateImpl(),
            this._points.length < 2
              ? r
              : (((n = {}).points = this._points),
                (n.color = this._source.properties().color.value()),
                (n.linewidth = this._source.properties().linewidth.value()),
                (n.backcolor = this._source
                  .properties()
                  .backgroundColor.value()),
                (n.fillBackground = this._source
                  .properties()
                  .fillBackground.value()),
                (n.transparency = this._source
                  .properties()
                  .transparency.value()),
                this._renderer.setData(n),
                i
                  ? ((r = new u()).append(this._renderer),
                    (o = n.points[0]),
                    (l = n.points[1]),
                    2 === this._points.length
                      ? (this.addAnchors(r), r)
                      : ((h = n.points[2]),
                        (d = a(o, l, h).distance),
                        (c = l.subtract(o)),
                        (p = o.add(l).scaled(0.5)),
                        (_ = (_ = new s(-c.y, c.x)).normalized()),
                        (h = p.add(_.scaled(d))),
                        (f = p.add(_.scaled(-d))),
                        ((g = new s(o.x, o.y)).data = 0),
                        ((v = new s(l.x, l.y)).data = 1),
                        ((w = new s(h.x, h.y)).data = 2),
                        ((y = new s(f.x, f.y)).data = 3),
                        r.append(
                          this.createLineAnchor({ points: [g, v, w, y] }),
                        ),
                        r))
                  : this._renderer)
          );
        }),
        (t.EllipsePaneView = r);
    },
    ocVb: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._label = null),
          (this._rendererCache = {}),
          (this._labelDataInvalidated = !0),
          (this._percentageFormatter = new l()),
          (this._numericFormatter = new h()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._trendRenderer = new _());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('loH8'),
        o = (i('MMac').PaneRendererClockIcon, i('Zy3/').CompositeRenderer),
        l = i('GH0z').PercentageFormatter,
        h = i('zXvd').NumericFormatter,
        d = i('nda6').TimeSpanFormatter,
        c = i('5C6T').PipFormatter,
        p = i('1mZ4').SelectionRenderer,
        _ = i('pJOz').TrendLineRenderer,
        u = i('8xAY').LabelSettings,
        f = i('zDbI').CHART_FONT_FAMILY,
        g = i('Ialn'),
        v = g.forceLTRStr,
        w = g.startWithLTR;
      inherit(n, s),
        (n.prototype.update = function () {
          s.prototype.update.call(this), (this._labelDataInvalidated = !0);
        }),
        (n.prototype._updateImpl = function () {
          var e,
            t,
            i,
            n,
            r,
            a,
            o,
            l,
            h,
            d,
            c = this._source.points();
          c.length < 2 ||
            ((e = c[0]),
            (t = c[1]),
            null !== (i = this._model.timeScale().visibleBarsStrictRange()) &&
              ((n = this._source.properties()),
              (e.index < i.firstBar() &&
                t.index < i.firstBar() &&
                !n.extendLeft.value() &&
                !n.extendRight.value()) ||
                (s.prototype._updateImpl.call(this),
                this._points.length < 2 ||
                  ((r = n.showBarsRange.value()),
                  (a = n.showDateTimeRange.value()),
                  (o = n.showDistance.value()),
                  (l = n.showPriceRange.value()),
                  (h = n.showAngle.value()),
                  l || r || a || o || h
                    ? ((d = this),
                      (this._statCache = this._model._trendLineStatsCache.updateSource(
                        this._source,
                        function () {
                          return d._statLabelData();
                        },
                      )))
                    : (this._model._trendLineStatsCache.removeSource(
                        this._source.id(),
                      ),
                      (this._label = null),
                      this._labelData &&
                        ((this._labelData.text = ''),
                        (this._labelData.lines = [])))))));
        }),
        (n.prototype._statLabelData = function () {
          var e,
            t,
            i,
            n,
            s,
            a,
            o,
            l,
            h,
            p,
            _,
            g,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M,
            A;
          return (
            this._labelDataInvalidated &&
              ((t = (e = this._source.points())[0]),
              (i = e[1]),
              (s = []),
              (n = this._source.properties()).showPriceRange.value() &&
                this._source.priceScale() &&
                ((_ = (h = i.price - t.price) / t.price),
                (a =
                  this._source.ownerSource().formatter().format(h) +
                  ' (' +
                  this._percentageFormatter.format(100 * _) +
                  ')'),
                (g = this._model.mainSeries().symbolInfo()) &&
                  g !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new c(
                    g.pricescale,
                    g.minmov,
                    g.type,
                    g.minmove2,
                  )),
                  (this._lastSymbolInfo = g)),
                (a += this._pipFormatter
                  ? ', ' + this._pipFormatter.format(h)
                  : ''),
                s.push('priceRange')),
              (y = n.showBarsRange.value()),
              (m = n.showDateTimeRange.value()),
              (x = n.showDistance.value()),
              (y || m || x) &&
                ((o = ''),
                y &&
                  ((p = i.index - t.index),
                  (o += $.t('{0} bars').format(v(p)))),
                m &&
                  ((b = this._model.timeScale().indexToUserTime(t.index)),
                  (R = this._model.timeScale().indexToUserTime(i.index)),
                  b &&
                    R &&
                    ((S = (R.valueOf() - b.valueOf()) / 1e3),
                    (T = w(new d().format(S))) &&
                      (o += y ? ' (' + T + ')' : T))),
                x &&
                  (o && (o += ', '),
                  void 0 === h && (h = i.price - t.price),
                  void 0 === p && (p = i.index - t.index),
                  (P = Math.round(1e5 * Math.sqrt(h * h + p * p)) / 1e5),
                  (o += $.t('distance: {0}').format(
                    v(this._numericFormatter.format(P)),
                  ))),
                o && s.push('barsRange')),
              n.showAngle.value() &&
                ((L = this._source.pointToScreenPoint(t)),
                (C = this._source.pointToScreenPoint(i)),
                (L = L instanceof Array ? L[0] : L instanceof r ? L : null),
                (C = C instanceof Array ? C[0] : C instanceof r ? C : null),
                L instanceof r &&
                  C instanceof r &&
                  (k = C.subtract(L)).length() > 0 &&
                  ((k = k.normalized()),
                  (B = Math.acos(k.x)),
                  k.y > 0 && (B = -B)),
                'number' != typeof B ||
                  TradingView.isNaN(B) ||
                  ((l = Math.round((180 * B) / Math.PI) + 'º'),
                  s.push('angle'))),
              (this._label =
                [v(a), o, l]
                  .filter(function (e) {
                    return e;
                  })
                  .join('\n') || null),
              (this._icons = s),
              (this._labelDataInvalidated = !1)),
            (I = (O = this._model.isDark()) ? u.bgColorDark : u.bgColorLight),
            (M = O ? u.textColorDark : u.textColorLight),
            (A = {
              points: [this._points[1]],
              text: this._label,
              color: M,
              isDark: O,
              font: f,
              fontSize: u.fontSize,
              lineSpacing: u.lineSpacing,
              backgroundColor: I,
              backgroundRoundRect: u.rectRadius,
              paddingLeft: u.paddingLeftRight,
              paddingRight: u.paddingLeftRight,
              paddingTop: u.paddingTopBottom,
              paddingBottom: u.paddingTopBottom,
              textPadding: u.textPadding,
              doNotAlignText: !0,
              icons: this._icons,
            }),
            this._points[1].y < this._points[0].y && (A.vertAlign = 'bottom'),
            this._points[1].x < this._points[0].x && (A.horzAlign = 'right'),
            (this._labelData = A),
            A
          );
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, r, s, l, h, d, c, _, f, g;
          return (
            this._invalidated && this._updateImpl(),
            (n = new o()),
            this._invalidated
              ? n
              : this._source.priceScale()
              ? (((r = {}).points = this._points),
                (r.floatPoints = this._floatPoints),
                (r.width = this._model.timeScale().width()),
                (r.height = this._source.priceScale().height()),
                (r.color = this._source.properties().linecolor.value()),
                (r.linewidth = this._source.properties().linewidth.value()),
                (r.linestyle = this._source.properties().linestyle.value()),
                (r.extendleft = this._source.properties().extendLeft.value()),
                (r.extendright = this._source.properties().extendRight.value()),
                (r.leftend = this._source.properties().leftEnd.value()),
                (r.rightend = this._source.properties().rightEnd.value()),
                this._trendRenderer.setData(r),
                n.append(this._trendRenderer),
                (s =
                  this.isAnchorsRequired() ||
                  this._source.properties().alwaysShowStats.value()),
                (l =
                  (this.isHoveredSource() || this.isSelectedSource()) &&
                  this._source.properties().showMiddlePoint.value()),
                s &&
                  this._label &&
                  2 === this._points.length &&
                  ((h = this._source.properties().statsPosition.value()),
                  (d = this._source.getPointByPosition(
                    h,
                    this._points[0],
                    this._middlePoint,
                    this._points[1],
                  )),
                  (c = {
                    left: 0,
                    top: this._model._trendLineStatsCache.topByRow(
                      this._statCache.rowIndex,
                    ),
                    width: this._model._trendLineStatsCache.rowWidth(
                      this._statCache.rowIndex,
                    ),
                    height: this._model._trendLineStatsCache.rowHeight(
                      this._statCache.rowIndex,
                    ),
                  }),
                  ((_ = {
                    left: Math.floor(d.x),
                    top: Math.floor(d.y),
                    width: c.width,
                    height: c.height,
                  }).left += u.paddingLeftRight),
                  (this._points[1].y < this._points[0].y &&
                    this._points[1].x < this._points[0].x) ||
                  (this._points[1].y > this._points[0].y &&
                    this._points[1].x > this._points[0].x)
                    ? (_.top -= u.paddingLeftRight + _.height)
                    : (_.top += u.paddingLeftRight),
                  (f = this._model._trendLineStatsCache.canvas()),
                  (g = new a(f, c, _)),
                  n.append(g)),
                l &&
                  this._middlePoint &&
                  n.append(
                    new p({
                      points: [this._middlePoint],
                      bgColor: this._model.backgroundColor(),
                    }),
                  ),
                i && this.addAnchors(n),
                n)
              : n
          );
        }),
        (t.TrendLinePaneView = n);
    },
    piZW: function (e, t, i) {
      'use strict';
      function n(e) {
        this._data = e;
      }
      function r(e, t) {
        a.call(this, e, t);
      }
      var s = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('VdBB').HitTestResult,
        l = i('Zy3/').CompositeRenderer;
      (n.prototype.draw = function (e) {
        var t, i, n;
        for (
          e.strokeStyle = this._data.color,
            e.lineWidth = this._data.linewidth,
            CanvasEx.setLineStyle(e, this._data.linestyle),
            e.beginPath(),
            e.moveTo(this._data.point.x, this._data.point.y),
            t = 1;
          t <= 2 * this._data.width;
          t++
        )
          (i = (t * Math.PI) / this._data.width),
            (n = (Math.sin(i - Math.PI / 2) * this._data.height) / 2),
            e.lineTo(
              this._data.point.x + t,
              this._data.point.y + n + this._data.height / 2,
            );
        e.stroke();
      }),
        (n.prototype.hitTest = function (e) {
          var t, i, n;
          return e.x < this._data.point.x ||
            e.x > this._data.point.x + 2 * this._data.width
            ? null
            : ((t = ((e.x - this._data.point.x) * Math.PI) / this._data.width),
              (i = (Math.sin(t - Math.PI / 2) * this._data.height) / 2),
              (i = this._data.point.y + i + this._data.height / 2),
              (n = 3),
              Math.abs(i - e.y) <= n ? new o(o.MOVEPOINT) : null);
        }),
        inherit(r, a),
        (r.prototype.renderer = function (e, t, i) {
          var r, a, o, h, d, c, p, _, u, f, g, v, w, y, m, x, b;
          if (
            (this._invalidated && this._updateImpl(), this._points.length < 2)
          )
            return null;
          if (
            ((a = (r = this._source.points())[0]),
            (o = r[1]),
            (h = Math.min(a.index, o.index)),
            (d = 2 * (Math.max(a.index, o.index) - h)),
            (c = this._points[0]),
            (p = this._points[1]),
            (_ = Math.abs(c.x - p.x)),
            (u = p.y - c.y),
            (f = new l()),
            (g = this._source.properties()),
            (v = this._model.timeScale()),
            0 === d)
          )
            return null;
          for (w = v.indexToCoordinate(h), y = [], m = h; w > -_; m -= d)
            (w = v.indexToCoordinate(m)), y.push(w);
          for (
            w = w = v.indexToCoordinate(h + d), m = h + d;
            w < v.width();
            m += d
          )
            (w = v.indexToCoordinate(m)), y.push(w);
          for (x = 0; x < y.length; x++)
            (b = new n({
              point: new s(y[x], c.y),
              width: _,
              height: u,
              color: g.linecolor.value(),
              linewidth: g.linewidth.value(),
              linestyle: g.linestyle.value(),
            })),
              f.append(b);
          return i && this.addAnchors(f), f;
        }),
        (t.SineLinePaneView = r);
    },
    tjxb: function (e, t, i) {
      'use strict';
      function n(e, t) {
        (this._data = e), (this._adapter = t);
      }
      function r(e, t) {
        a.call(this, e, t);
      }
      var s = i('aO4+').Point,
        a = i('aB9a').LineSourcePaneView,
        o = i('jkoZ'),
        l = i('VdBB').HitTestResult;
      (n.prototype._textWidth = function (e) {
        var t, i;
        return 0 === this._adapter.getText().length
          ? 0
          : (e.save(),
            (e.font = this._adapter.getFont()),
            (t = 5),
            (i = e.measureText(this._adapter.getText()).width),
            e.restore(),
            t + i);
      }),
        (n.prototype._drawArrow = function (e, t, i) {
          var n, r;
          e.save(),
            (e.strokeStyle = this._adapter.getArrowColor()),
            (e.fillStyle = this._adapter.getArrowColor()),
            (n = this._adapter.getArrowHeight()),
            (r = this._adapter.getDirection()),
            e.translate(t, i),
            'buy' !== r && e.rotate(Math.PI),
            CanvasEx.drawArrow(e, 0, 0, 0, n),
            e.restore();
        }),
        (n.prototype._drawText = function (e, t, i) {
          var n,
            r,
            s = this._adapter.getText();
          s &&
            (e.save(),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            (e.font = this._adapter.getFont()),
            (e.fillStyle = this._adapter.getTextColor()),
            (n = t + this._textWidth(e) / 2),
            (r = i + o.fontHeight(this._adapter.getFont()) / 2),
            e.fillText(s, n, r - 1),
            e.restore());
        }),
        (n.prototype.draw = function (e) {
          var t,
            i,
            n,
            r,
            s,
            a = Math.round(this._data.points[0].x + 0.5),
            l = Math.round(this._data.points[0].y);
          this._drawArrow(e, a, l),
            0 !== (t = this._textWidth(e)) &&
              ((i = this._adapter.getArrowHeight()),
              (n = this._adapter.getArrowSpacing()),
              (r = o.fontHeight(this._adapter.getFont())),
              (s =
                'buy' === this._adapter.getDirection()
                  ? l + i + n
                  : l - i - n - r),
              this._drawText(e, Math.round(a - t / 2), s));
        }),
        (n.prototype.hitTest = function (e) {
          var t,
            i,
            n,
            r = Math.round(this._data.points[0].x),
            s = Math.round(this._data.points[0].y),
            a = this._adapter.getArrowHeight();
          return (
            'buy' === this._adapter.getDirection()
              ? ((t = s), (i = s + a))
              : ((t = s - a), (i = s)),
            e.x >= r - 2 && e.x <= r + 2 && e.y >= t && e.y <= i
              ? ((n = this._adapter.getTooltip()),
                new l(l.CUSTOM, {
                  mouseClickHandler: function () {
                    TradingView.TradingWidget &&
                      TradingView.TradingWidget.journalDialog();
                  },
                  tooltip:
                    '' !== n
                      ? { text: n, rect: { x: r, y: t, w: 2, h: i - t } }
                      : null,
                }))
              : null
          );
        }),
        inherit(r, a),
        (r.prototype._renderer = null),
        (r.prototype._rendererCached = !1),
        (r.prototype._updateImpl = function () {
          a.prototype._updateImpl.call(this),
            (this._renderer = null),
            (this._rendererCached = !1);
        }),
        (r.prototype.renderer = function (e, t, i) {
          var r, a, o, l, h, d;
          return (
            this._invalidated && this._updateImpl(),
            this._rendererCached
              ? this._renderer
              : ((this._rendererCached = !0),
                0 === (a = (r = this._source).points()).length
                  ? null
                  : ((o = r._adapter),
                    (l = r._model.timeScale()),
                    (h = this._source._model
                      .paneForSource(this._source)
                      .executionsPositionController()
                      .getXYCoordinate(o, l, a[0].index)),
                    !isFinite(h.y) || h.y < 0 || h.y > e || h.x < 0
                      ? ((this._renderer = null), null)
                      : ((d = { points: [new s(h.x, h.y)] }),
                        (this._renderer = new n(d, o)),
                        this._renderer)))
          );
        }),
        (t.ExecutionPaneView = r);
    },
    'u+oH': function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._percentageFormatter = new c()),
          (this._numericFormatter = new p()),
          (this._pipFormatter = null),
          (this._lastSymbolInfo = null),
          (this._entryLineRenderer = new a()),
          (this._stopLineRenderer = new a()),
          (this._targetLineRenderer = new a()),
          (this._positionLineRenderer = new a()),
          (this._fullStopBgRenderer = new l(
            new h(h.MOVEPOINT),
            new h(h.MOVEPOINT),
          )),
          (this._stopBgRenderer = new l(
            new h(h.MOVEPOINT),
            new h(h.MOVEPOINT),
          )),
          (this._fullTargetBgRenderer = new l(
            new h(h.MOVEPOINT),
            new h(h.MOVEPOINT),
          )),
          (this._targetBgRenderer = new l(
            new h(h.MOVEPOINT),
            new h(h.MOVEPOINT),
          )),
          (this._stopLabelRenderer = new o({})),
          (this._middleLabelRenderer = new o({})),
          (this._profitLabelRenderer = new o({}));
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('pJOz').TrendLineRenderer,
        o = i('qgcf').TextRenderer,
        l = i('IjC5').RectangleRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('GH0z').PercentageFormatter,
        p = i('zXvd').NumericFormatter,
        _ = i('5C6T').PipFormatter,
        u = i('Tmoa'),
        f = i('a7Ha').LineEnd,
        g = i('wGNx').RiskRewardPointIndex,
        v = i('Ialn').forceLTRStr;
      inherit(n, s),
        (n.prototype.i18nCache = {
          pnl: $.t('{0} P&L: {1}'),
          open: $.t('Open', { context: 'line_tool_position' }),
          closed: $.t('Closed', { context: 'line_tool_position' }),
          ratio: $.t('Risk/Reward Ratio: {0}'),
          stop: $.t('Stop: {0} ({1}) {2}, Amount: {3}'),
          target: $.t('Target: {0} ({1}) {2}, Amount: {3}'),
          qty: $.t('Qty: {0}'),
        }),
        (n.prototype._formatInTicks = function (e) {
          var t = this._model.mainSeries().base();
          return Math.round(e * t);
        }),
        (n.prototype.isLabelVisible = function () {
          return (
            this.isHoveredSource() ||
            this.isSelectedSource() ||
            this._source.properties().alwaysShowStats.value()
          );
        }),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a;
          s.prototype._updateImpl.call(this),
            (this._stopLevel = null),
            (this._profitLevel = null),
            (e = this._model.timeScale()),
            !(t = this._source.priceScale()) ||
              t.isEmpty() ||
              e.isEmpty() ||
              (0 !== this._source.points().length &&
                0 !== this._points.length &&
                null !== this._model.mainSeries().bars().last() &&
                (this._source.points().length < 2 ||
                  (0 !== this._model.mainSeries().bars().length &&
                    ((this._isClosed = 4 === this._source.points().length),
                    (i = this._source.lastBarData()) &&
                      ((n = this._source.stopPrice()),
                      (r = this._source.profitPrice()),
                      (this._pl =
                        this._source.points().length > 1
                          ? this._source.calculatePL(i.closePrice)
                          : 0),
                      (a = this._source.ownerSource().firstValue()),
                      (this._entryLevel = this._points[g.Entry].y),
                      (this._stopLevel = t.priceToCoordinate(n, a)),
                      (this._profitLevel = t.priceToCoordinate(r, a)),
                      (this._closeLevel = t.priceToCoordinate(i.closePrice, a)),
                      (this._closeBar = this._source._model
                        .timeScale()
                        .indexToCoordinate(i.index)))))));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            a,
            o,
            l,
            h,
            c,
            p,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M,
            A,
            D,
            E,
            V,
            N,
            z,
            H,
            F,
            W,
            j,
            Y,
            q;
          return (
            this._invalidated && this._updateImpl(),
            (n = new d()),
            this._points.length < 2 || this._source.points().length < 2
              ? n
              : ((s = this),
                (a = this._source.properties()),
                (o = this._points[g.Entry].x),
                (l = this._points[g.ActualEntry]
                  ? this._points[g.ActualEntry].x
                  : this._points[g.Close].x),
                (h = this._points[g.ActualClose]
                  ? this._points[g.ActualClose].x
                  : this._points[g.Close].x),
                (c = this._points[g.Close].x),
                (p = new r(o, this._entryLevel)),
                (w = new r(c, this._stopLevel)),
                ((y = {}).points = [p, w]),
                (y.color = 'white'),
                (y.linewidth = 0),
                (y.backcolor = a.stopBackground.value()),
                (y.fillBackground = !0),
                (y.transparency = a.stopBackgroundTransparency.value()),
                this._fullStopBgRenderer.setData(y),
                n.append(this._fullStopBgRenderer),
                this._pl < 0 &&
                  ((p = new r(l, this._entryLevel)),
                  (w = new r(h, this._closeLevel)),
                  ((y = {}).points = [p, w]),
                  (y.color = 'white'),
                  (y.linewidth = 0),
                  (y.backcolor = a.stopBackground.value()),
                  (y.fillBackground = !0),
                  (x =
                    100 -
                    100 *
                      (1 -
                        (m = 0.01 * a.stopBackgroundTransparency.value()) *
                          m *
                          m)),
                  (y.transparency = x),
                  this._stopBgRenderer.setData(y),
                  n.append(this._stopBgRenderer)),
                (p = new r(o, this._entryLevel)),
                (w = new r(c, this._profitLevel)),
                ((y = {}).points = [p, w]),
                (y.color = 'white'),
                (y.linewidth = 0),
                (y.backcolor = a.profitBackground.value()),
                (y.fillBackground = !0),
                (y.transparency = a.profitBackgroundTransparency.value()),
                this._fullTargetBgRenderer.setData(y),
                n.append(this._fullTargetBgRenderer),
                this._pl > 0 &&
                  ((p = new r(l, this._entryLevel)),
                  (w = new r(h, this._closeLevel)),
                  ((y = {}).points = [p, w]),
                  (y.color = 'white'),
                  (y.linewidth = 0),
                  (y.backcolor = a.profitBackground.value()),
                  (y.fillBackground = !0),
                  (b =
                    100 -
                    100 *
                      (1 -
                        (m = 0.01 * a.profitBackgroundTransparency.value()) *
                          m *
                          m)),
                  (y.transparency = b),
                  this._targetBgRenderer.setData(y),
                  n.append(this._targetBgRenderer)),
                (R = function (e, t, i, r) {
                  var a = {};
                  (a.points = [t, i]),
                    (a.width = s._model.timeScale().width()),
                    (a.height = s._source.priceScale().height()),
                    (a.color = r || s._source.properties().linecolor.value()),
                    (a.linewidth = s._source.properties().linewidth.value()),
                    (a.linestyle = CanvasEx.LINESTYLE_SOLID),
                    (a.extendleft = !1),
                    (a.extendright = !1),
                    (a.leftend = f.Normal),
                    (a.rightend = f.Normal),
                    e.setData(a),
                    n.append(e);
                }),
                this._points[g.ActualEntry] &&
                  ((p = this._points[g.ActualEntry]),
                  (w = this._isClosed
                    ? this._points[g.ActualClose]
                    : new r(this._closeBar, this._closeLevel)),
                  ((y = {}).points = [p, w]),
                  (y.width = s._model.timeScale().width()),
                  (y.height = s._source.priceScale().height()),
                  (y.color = s._source.properties().linecolor.value()),
                  (y.linewidth = 1),
                  (y.linestyle = CanvasEx.LINESTYLE_DASHED),
                  (y.extendleft = !1),
                  (y.extendright = !1),
                  (y.leftend = f.Normal),
                  (y.rightend = f.Arrow),
                  this._positionLineRenderer.setData(y),
                  n.append(this._positionLineRenderer)),
                (s = this),
                (S = function (e, t, i, r, o, l, h) {
                  if (s.isLabelVisible()) {
                    var d = {};
                    (d.points = [t]),
                      (d.text = i),
                      (d.color = a.textcolor.value()),
                      (d.font = a.font.value()),
                      (d.offsetX = 3),
                      (d.offsetY = l),
                      (d.vertAlign = o),
                      (d.horzAlign = 'center'),
                      (d.backgroundRoundRect = 4),
                      (d.backgroundColor = u.resetTransparency(r)),
                      (d.fontsize = a.fontsize.value()),
                      (d.backgroundHorzInflate = 4),
                      (d.backgroundVertInflate = 2),
                      h && (d.borderColor = h),
                      e.setData(d),
                      n.append(e);
                  }
                }),
                (T = this._source.entryPrice()),
                (P = this._source.stopPrice()),
                (L = this._source.profitPrice()),
                (C = Math.abs(P - T)),
                (B = Math.round((1e4 * C) / T) / 100),
                (k = Math.abs(L - T)),
                (O = Math.round((1e4 * k) / T) / 100),
                (I = Math.abs(T - L) / Math.abs(T - P)),
                (p = new r(o, this._points[g.Entry].y)),
                (w = new r(c, this._points[g.Entry].y)),
                R(this._entryLineRenderer, p, w),
                (M = new r((o + c) / 2, Math.round(this._points[0].y) + 0.5)),
                (A = ''),
                (D = ''),
                (E = this._numericFormatter.format(Math.round(100 * I) / 100)),
                this._points[1] &&
                  void 0 !== this._pl &&
                  (D = this._source.ownerSource().formatter().format(this._pl)),
                a.compact.value()
                  ? ((A += D ? D + ' ~ ' : ''),
                    (A += a.qty.value() + '\n'),
                    (A += E))
                  : ((V = this._isClosed
                      ? this.i18nCache.closed
                      : this.i18nCache.open),
                    (A += D ? this.i18nCache.pnl.format(V, D) + ', ' : ''),
                    (A += this.i18nCache.qty.format(a.qty.value()) + '\n'),
                    (A += this.i18nCache.ratio.format(E) + ' ')),
                (N = a.linecolor.value()),
                this._pl < 0
                  ? (N = a.stopBackground.value())
                  : this._pl > 0 && (N = a.profitBackground.value()),
                S(this._middleLabelRenderer, M, A, N, 'middle', 0, 'white'),
                (p = new r(o, this._stopLevel)),
                (w = new r(c, this._stopLevel)),
                R(this._stopLineRenderer, p, w, a.stopBackground.value()),
                (z = this._model.mainSeries().symbolInfo()) &&
                  z !== this._lastSymbolInfo &&
                  ((this._pipFormatter = new _(
                    z.pricescale,
                    z.minmov,
                    z.type,
                    z.minmove2,
                  )),
                  (this._lastSymbolInfo = z)),
                (M = new r((o + c) / 2, this._stopLevel)),
                (A = ''),
                (H = this._source.ownerSource().formatter().format(C)),
                (F = this._percentageFormatter.format(B)),
                (A = a.compact.value()
                  ? H + ' (' + F + ') ' + a.amountStop.value()
                  : this.i18nCache.stop.format(
                      v(this._source.ownerSource().formatter().format(C)),
                      v(this._percentageFormatter.format(B)),
                      this._pipFormatter ? v(this._pipFormatter.format(C)) : '',
                      v(a.amountStop.value()),
                    )),
                S(
                  this._stopLabelRenderer,
                  M,
                  A,
                  a.stopBackground.value(),
                  T < P ? 'bottom' : 'top',
                  T < P ? -12 : -1,
                ),
                (p = new r(o, this._profitLevel)),
                (w = new r(c, this._profitLevel)),
                R(this._targetLineRenderer, p, w, a.profitBackground.value()),
                (M = new r((o + c) / 2, this._profitLevel)),
                (A = ''),
                (H = this._source.ownerSource().formatter().format(k)),
                (F = this._percentageFormatter.format(O)),
                (A = a.compact.value()
                  ? H + ' (' + F + ') ' + a.amountTarget.value()
                  : this.i18nCache.target.format(
                      v(this._source.ownerSource().formatter().format(k)),
                      v(this._percentageFormatter.format(O)),
                      this._pipFormatter ? v(this._pipFormatter.format(k)) : '',
                      v(a.amountTarget.value()),
                    )),
                S(
                  this._profitLabelRenderer,
                  M,
                  A,
                  a.profitBackground.value(),
                  T < P ? 'top' : 'bottom',
                  T < P ? -1 : -12,
                ),
                i &&
                  (((W = this._points[0].clone()).data = 0),
                  ((j = new r(o, this._stopLevel)).data = 1),
                  (j.square = !0),
                  ((Y = new r(o, this._profitLevel)).data = 2),
                  (Y.square = !0),
                  ((q = new r(c, W.y)).data = 3),
                  (q.square = !0),
                  n.append(this.createLineAnchor({ points: [W, j, Y, q] }))),
                n)
          );
        }),
        (t.RiskRewardPaneView = n);
    },
    wdUH: function (e, t, i) {
      'use strict';
      var n, r, s, a, o, l, h, d, c;
      i.r(t),
        i.d(t, 'GannFixedPaneView', function () {
          return c;
        }),
        (n = i('mrSG')),
        (r = i('aO4+')),
        (s = i('aB9a')),
        (a = i('pJOz')),
        (o = i('Zy3/')),
        (l = i('a7Ha')),
        (h = i('8Uy/')),
        (d = i('amvX')),
        (c = (function (e) {
          function t(t, i) {
            var n = e.call(this, t, i) || this;
            return (
              (n._verticalLevelsRenderers = []),
              (n._horizontalLevelsRenderers = []),
              (n._fanRenderers = []),
              (n._arcRenderers = []),
              n._initRenderers(),
              n
            );
          }
          return (
            Object(n.__extends)(t, e),
            (t.prototype.renderer = function (e, t, i) {
              var n, r, s, a, l, h, d, c, p, _, u, f;
              return (
                this._invalidated && this._updateImpl(),
                (n = this._getSource()),
                (r = this._getPoints()),
                (s = new o.CompositeRenderer()),
                r.length < 2
                  ? (i && this.addAnchors(s), s)
                  : ((a = r[0]),
                    (h = (l = 3 === r.length ? r[2] : r[1]).x - a.x),
                    (d = l.y - a.y),
                    (c = a),
                    (p = l),
                    (u = {
                      paneHeight: e,
                      paneWidth: (_ = this._getModel()).timeScale().width(),
                      barsCoordsRange: h,
                      priceCoordsRange: d,
                      startPoint: c,
                      endPoint: p,
                      p1: a,
                      p2: l,
                    }),
                    this._prepareLevels(s, u),
                    this._prepareFanLines(s, u),
                    this._prepareArcs(s, u),
                    i &&
                      ((f = [a, r[1]]),
                      _.lineBeingCreated() === n && f.pop(),
                      s.append(this.createLineAnchor({ points: f }))),
                    s)
              );
            }),
            (t.prototype._updateImpl = function () {
              var t, i, n, r, s;
              e.prototype._updateImpl.call(this),
                (t = this._getSource()),
                (i = this._getPoints()),
                (n = t.getScreenPoints()),
                i.length < 2 ||
                  n.length < 2 ||
                  ((r = n[0]),
                  (s = n[1]),
                  (i[1] = r),
                  (i[1].data = 1),
                  (i[2] = s));
            }),
            (t.prototype._initRenderers = function () {
              var e,
                t,
                i,
                n = this._getSource(),
                r = n.levelsCount();
              for (e = 0; e < r; e++)
                this._verticalLevelsRenderers.push(new a.TrendLineRenderer()),
                  this._horizontalLevelsRenderers.push(
                    new a.TrendLineRenderer(),
                  );
              for (t = n.fanLinesCount(), e = 0; e < t; e++)
                this._fanRenderers.push(new a.TrendLineRenderer());
              for (i = n.arcsCount(), e = 0; e < i; e++)
                this._arcRenderers.push(new d.a());
            }),
            (t.prototype._prepareLevels = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                d,
                c,
                p,
                _,
                u,
                f = t.startPoint,
                g = t.endPoint,
                v = t.paneHeight,
                w = t.paneWidth,
                y = t.barsCoordsRange,
                m = t.priceCoordsRange,
                x = this._getSource(),
                b = x.levels();
              for (i = 0, n = b; i < n.length; i++)
                (s = n[i]).visible &&
                  ((a = s.index / 5),
                  (o = f.x + a * y),
                  (d = {
                    points: [new r.Point(o, f.y), new r.Point(o, g.y)],
                    width: w,
                    height: v,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: h.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: l.LineEnd.Normal,
                    rightend: l.LineEnd.Normal,
                  }),
                  (c = this._verticalLevelsRenderers[s.index]).setData(d),
                  e.append(c),
                  (p = f.y + a * m),
                  (_ = {
                    points: [new r.Point(f.x, p), new r.Point(g.x, p)],
                    width: w,
                    height: v,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: h.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: l.LineEnd.Normal,
                    rightend: l.LineEnd.Normal,
                  }),
                  (u = this._horizontalLevelsRenderers[s.index]).setData(_),
                  e.append(u));
            }),
            (t.prototype._prepareFanLines = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                d,
                c,
                p,
                _,
                u,
                f = t.p1,
                g = t.startPoint,
                v = t.endPoint,
                w = t.paneHeight,
                y = t.paneWidth,
                m = t.barsCoordsRange,
                x = t.priceCoordsRange,
                b = this._getSource(),
                R = b.fanLines();
              for (i = 0, n = R; i < n.length; i++)
                (s = n[i]).visible &&
                  ((d = void 0),
                  (c = void 0),
                  (a = s.x) > (o = s.y)
                    ? ((d = v.x), (p = o / a), (c = g.y + p * x))
                    : ((c = v.y), (p = a / o), (d = g.x + p * m)),
                  (_ = {
                    points: [f, new r.Point(d, c)],
                    width: y,
                    height: w,
                    color: s.color,
                    linewidth: s.width,
                    linestyle: h.LINESTYLE_SOLID,
                    extendleft: !1,
                    extendright: !1,
                    leftend: l.LineEnd.Normal,
                    rightend: l.LineEnd.Normal,
                  }),
                  (u = this._fanRenderers[s.index]).setData(_),
                  e.append(u));
            }),
            (t.prototype._prepareArcs = function (e, t) {
              var i,
                n,
                s,
                a,
                o,
                l,
                h,
                d,
                c,
                p = t.p1,
                _ = t.startPoint,
                u = t.endPoint,
                f = t.barsCoordsRange,
                g = t.priceCoordsRange,
                v = p,
                w = this._getSource(),
                y = w.isArcsBackgroundFilled(),
                m = w.arcsBackgroundTransparency(),
                x = w.arcs();
              for (i = 0, n = x; i < n.length; i++)
                (s = n[i]).visible &&
                  ((a = s.x / 5),
                  (o = s.y / 5),
                  (l = _.x + a * f),
                  (h = _.y + o * g),
                  (d = {
                    center: _,
                    point: new r.Point(l, h),
                    edge: u,
                    color: s.color,
                    linewidth: s.width,
                    fillBack: y,
                    transparency: m,
                    prevPoint: v,
                  }),
                  (c = this._arcRenderers[s.index]).setData(d),
                  e.append(c),
                  (v = d.point));
            }),
            t
          );
        })(s.LineSourcePaneView));
    },
    wgWl: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t),
          (this._levels = []),
          (this._trendRenderer = new h());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('z+cS').VerticalLineRenderer,
        o = i('qgcf').TextRenderer,
        l = i('IjC5').RectangleRenderer,
        h = i('pJOz').TrendLineRenderer,
        d = i('VdBB').HitTestResult,
        c = i('Zy3/').CompositeRenderer,
        p = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a, o, l, h;
          if (
            (s.prototype._updateImpl.call(this),
            !(this._source.points().length < 1) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty() &&
              ((e = this._source.points()[0]),
              2 === this._source.points().length &&
                (t = this._source.points()[1]),
              (i = this._source.properties()),
              (n = this._source.points()[0].index),
              null !== this._model.timeScale().visibleBarsStrictRange()))
          )
            for (
              this._levels = [], r = t ? t.index - e.index : 1, a = 1;
              a <= 11;
              a++
            )
              (o = i['level' + a]).visible.value() &&
                ((l = Math.round(n + o.coeff.value() * r)),
                (h = {
                  index: a,
                  x: this._model.timeScale().indexToCoordinate(l),
                  color: o.color.value(),
                  width: o.linewidth.value(),
                  style: o.linestyle.value(),
                }),
                i.showLabels.value() &&
                  ((h.text = o.coeff.value()),
                  (h.y = this._source.priceScale().height())),
                this._levels.push(h));
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n, s, h, _, u, f, g, v, w, y, m, x, b, R, S, T;
          for (
            this._invalidated && this._updateImpl(),
              t = this._model.timeScale().width(),
              e = this._source.priceScale().height(),
              n = new c(),
              s = this._source.properties(),
              h = 0;
            h < this._levels.length;
            h++
          )
            if (
              (((_ = {}).width = t),
              (_.height = e),
              (_.points = [new r(this._levels[h].x, 0)]),
              (_.color = this._levels[h].color),
              (_.linewidth = this._levels[h].width),
              (_.linestyle = this._levels[h].style),
              (u = new d(d.MOVEPOINT, null, this._levels[h].index)),
              (f = new a()).setData(_),
              f.setHitTest(u),
              n.append(f),
              h > 0 &&
                s.fillBackground.value() &&
                ((g = this._levels[h - 1]),
                (v = new r(this._levels[h].x, 0)),
                (w = new r(g.x, this._source.priceScale().height())),
                ((y = {}).points = [v, w]),
                (y.color = this._levels[h].color),
                (y.linewidth = 0),
                (y.backcolor = this._levels[h].color),
                (y.fillBackground = !0),
                (y.transparency = s.transparency.value()),
                (f = new l(void 0, void 0, !0)).setData(y),
                n.append(f)),
              void 0 !== this._levels[h].text)
            ) {
              switch (
                (R =
                  'left' === (R = s.horzLabelsAlign.value())
                    ? 'right'
                    : 'right' === R
                    ? 'left'
                    : 'center')
              ) {
                case 'left':
                  x = 3;
                  break;
                case 'center':
                  x = 0;
                  break;
                case 'right':
                  x = -3;
              }
              switch (s.vertLabelsAlign.value()) {
                case 'top':
                  (m = new r(this._levels[h].x, 0)), (b = 5);
                  break;
                case 'middle':
                  (m = new r(this._levels[h].x, 0.5 * this._levels[h].y)),
                    (b = 0);
                  break;
                case 'bottom':
                  (m = new r(this._levels[h].x, this._levels[h].y)), (b = -10);
              }
              (S = {
                points: [m],
                text: '' + this._levels[h].text,
                color: _.color,
                vertAlign: 'middle',
                horzAlign: R,
                font: s.font.value(),
                offsetX: x,
                offsetY: b,
                fontsize: 12,
              }),
                n.append(new o(S));
            }
          return (
            2 === this._points.length &&
              ((T = {
                points: [this._points[0], this._points[1]],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: s.trendline.color.value(),
                linewidth: s.trendline.linewidth.value(),
                linestyle: s.trendline.linestyle.value(),
                extendleft: !1,
                extendright: !1,
                leftend: p.Normal,
                rightend: p.Normal,
              }),
              this._trendRenderer.setData(T),
              n.append(this._trendRenderer)),
            i &&
              (2 === this._source.points().length
                ? n.append(this.createLineAnchor({ points: this._points }))
                : this._points.length > 0 &&
                  n.append(
                    this.createLineAnchor({
                      points: [
                        new r(
                          this._points[0].x,
                          this._source.priceScale().height() / 2,
                        ),
                      ],
                      hittestResult: d.MOVEPOINT,
                    }),
                  )),
            n
          );
        }),
        (t.FibTimeZonePaneView = n);
    },
    xp9B: function (e, t, i) {
      'use strict';
      function n(e, t) {
        s.call(this, e, t), (this._numericFormatter = new c());
      }
      var r = i('aO4+').Point,
        s = i('aB9a').LineSourcePaneView,
        a = i('2trc').ChannelRenderer,
        o = i('qgcf').TextRenderer,
        l = i('pJOz').TrendLineRenderer,
        h = i('VdBB').HitTestResult,
        d = i('Zy3/').CompositeRenderer,
        c = i('zXvd').NumericFormatter,
        p = i('a7Ha').LineEnd;
      inherit(n, s),
        (n.prototype._updateImpl = function () {
          var e, t, i, n, r, a, o, l, h, d, c, p, _, u;
          if (
            (s.prototype._updateImpl.call(this),
            !(this._source.points().length < 2) &&
              this._source.priceScale() &&
              !this._source.priceScale().isEmpty() &&
              !this._model.timeScale().isEmpty())
          ) {
            for (
              e = this._source.points()[0],
                t = this._source.points()[1],
                this._hlevels = [],
                i = t.price - e.price,
                n = this._source.ownerSource().firstValue(),
                r = 1;
              r <= 7;
              r++
            )
              (a = 'hlevel' + r),
                (o = this._source.properties()[a]).visible.value() &&
                  ((l = o.coeff.value()),
                  (h = o.color.value()),
                  (d = e.price + l * i),
                  (c = this._source.priceScale().priceToCoordinate(d, n, !0)),
                  this._hlevels.push({ coeff: l, color: h, y: c, index: r }));
            for (this._vlevels = [], p = t.index - e.index, r = 1; r <= 7; r++)
              (a = 'vlevel' + r),
                (o = this._source.properties()[a]).visible.value() &&
                  ((l = o.coeff.value()),
                  (h = o.color.value()),
                  (_ = Math.round(e.index + l * p)),
                  (u = this._model.timeScale().indexToCoordinate(_, !0)),
                  this._vlevels.push({ coeff: l, color: h, x: u, index: r }));
          }
        }),
        (n.prototype.renderer = function (e, t, i) {
          var n,
            s,
            c,
            _,
            u,
            f,
            g,
            v,
            w,
            y,
            m,
            x,
            b,
            R,
            S,
            T,
            P,
            L,
            C,
            B,
            k,
            O,
            I,
            M;
          if (
            (this._invalidated && this._updateImpl(),
            (n = new d()),
            this._floatPoints.length < 2)
          )
            return n;
          for (
            s = this._floatPoints[0],
              c = this._floatPoints[1],
              _ = Math.min(s.x, c.x),
              u = Math.min(s.y, c.y),
              f = Math.max(s.x, c.x),
              g = Math.max(s.y, c.y),
              w = (v = this._source.properties()).grid.color.value(),
              y = v.grid.linewidth.value(),
              m = v.grid.linestyle.value(),
              x = 0;
            x < this._hlevels.length;
            x++
          )
            (s = new r(_, this._hlevels[x].y)),
              (c = new r(f, this._hlevels[x].y)),
              v.grid.visible.value() &&
                ((b = {
                  points: [s, c],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: w,
                  linewidth: y,
                  linestyle: m,
                  extendleft: !1,
                  extendright: !1,
                  leftend: p.Normal,
                  rightend: p.Normal,
                }),
                (R = new l()).setData(b),
                n.append(R)),
              v.showLeftLabels.value() &&
                ((S = {
                  points: [s],
                  text: this._numericFormatter.format(this._hlevels[x].coeff),
                  color: this._hlevels[x].color,
                  vertAlign: 'middle',
                  horzAlign: 'right',
                  font: v.font.value(),
                  offsetX: -5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0,
                }),
                n.append(new o(S))),
              v.showRightLabels.value() &&
                ((T = {
                  points: [c],
                  text: this._numericFormatter.format(this._hlevels[x].coeff),
                  color: this._hlevels[x].color,
                  vertAlign: 'middle',
                  horzAlign: 'left',
                  font: v.font.value(),
                  offsetX: 5,
                  offsetY: 0,
                  fontsize: 12,
                  forceTextAlign: !0,
                }),
                n.append(new o(T)));
          for (x = 0; x < this._vlevels.length; x++)
            (s = new r(this._vlevels[x].x, u)),
              (c = new r(this._vlevels[x].x, g)),
              v.grid.visible.value() &&
                ((b = {
                  points: [s, c],
                  width: this._model.timeScale().width(),
                  height: this._source.priceScale().height(),
                  color: w,
                  linewidth: y,
                  linestyle: m,
                  extendleft: !1,
                  extendright: !1,
                  leftend: p.Normal,
                  rightend: p.Normal,
                }),
                (R = new l()).setData(b),
                n.append(R)),
              v.showTopLabels.value() &&
                ((P = {
                  points: [s],
                  text: this._numericFormatter.format(this._vlevels[x].coeff),
                  color: this._vlevels[x].color,
                  vertAlign: 'bottom',
                  horzAlign: 'center',
                  font: v.font.value(),
                  offsetX: 0,
                  offsetY: -5,
                  fontsize: 12,
                }),
                n.append(new o(P))),
              v.showBottomLabels.value() &&
                ((L = {
                  points: [c],
                  text: this._numericFormatter.format(this._vlevels[x].coeff),
                  color: this._vlevels[x].color,
                  vertAlign: 'top',
                  horzAlign: 'center',
                  font: v.font.value(),
                  offsetX: 0,
                  offsetY: 5,
                  fontsize: 12,
                }),
                n.append(new o(L)));
          for (
            C = v.fillBackground.value(),
              B = v.transparency.value(),
              s = this._floatPoints[0],
              c = this._floatPoints[1],
              x = 0;
            x < this._hlevels.length;
            x++
          )
            (k = new r(c.x, this._hlevels[x].y)),
              x > 0 &&
                C &&
                ((O = new r(c.x, this._hlevels[x - 1].y)),
                ((I = {}).width = this._model.timeScale().width()),
                (I.height = this._source.priceScale().height()),
                (I.p1 = s),
                (I.p2 = k),
                (I.p3 = s),
                (I.p4 = O),
                (I.color = this._hlevels[x].color),
                (I.transparency = B),
                (I.hittestOnBackground = !0),
                (R = new a()).setData(I),
                n.append(R)),
              (b = {
                points: [s, k],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._hlevels[x].color,
                linewidth: v.linewidth.value(),
                linestyle: v.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: p.Normal,
                rightend: p.Normal,
              }),
              (R = new l()).setData(b),
              R.setHitTest(
                new h(h.MOVEPOINT, null, {
                  type: 'h',
                  index: this._hlevels[x].index,
                }),
              ),
              n.append(R);
          for (x = 0; x < this._vlevels.length; x++)
            (M = new r(this._vlevels[x].x, c.y)),
              x > 0 &&
                C &&
                ((O = new r(this._vlevels[x - 1].x, c.y)),
                ((I = {}).width = this._model.timeScale().width()),
                (I.height = this._source.priceScale().height()),
                (I.p1 = s),
                (I.p2 = M),
                (I.p3 = s),
                (I.p4 = O),
                (I.color = this._vlevels[x].color),
                (I.transparency = B),
                (I.hittestOnBackground = !0),
                (R = new a()).setData(I),
                n.append(R)),
              (b = {
                points: [s, M],
                width: this._model.timeScale().width(),
                height: this._source.priceScale().height(),
                color: this._vlevels[x].color,
                linewidth: v.linewidth.value(),
                linestyle: v.linestyle.value(),
                extendleft: !1,
                extendright: !0,
                leftend: p.Normal,
                rightend: p.Normal,
              }),
              (R = new l()).setData(b),
              R.setHitTest(
                new h(h.MOVEPOINT, null, {
                  type: 'v',
                  index: this._vlevels[x].index,
                }),
              ),
              n.append(R);
          return i && this.addAnchors(n), n;
        }),
        (t.FibSpeedResistanceFanPaneView = n);
    },
    'z+cS': function (e, t, i) {
      'use strict';
      var n, r, s;
      i.r(t),
        i.d(t, 'VerticalLineRenderer', function () {
          return s;
        }),
        (n = i('VdBB')),
        (r = i('jFln')),
        (s = (function () {
          function e() {
            (this._data = null), (this._hitTest = null);
          }
          return (
            (e.prototype.setData = function (e) {
              this._data = e;
            }),
            (e.prototype.setHitTest = function (e) {
              this._hitTest = e;
            }),
            (e.prototype.draw = function (e) {
              if (
                null !== this._data &&
                0 !== this._data.points.length &&
                !(this._data.linewidth <= 0)
              ) {
                var t = this._data.points[0].x;
                t < 0 ||
                  t > this._data.width ||
                  (e.translate(1, 0),
                  (e.lineCap = 'square'),
                  (e.strokeStyle = this._data.color),
                  (e.lineWidth = this._data.linewidth),
                  void 0 !== this._data.linestyle &&
                    Object(r.setLineStyle)(e, this._data.linestyle),
                  Object(r.drawLine)(e, t, 0, t, this._data.height));
              }
            }),
            (e.prototype.hitTest = function (e) {
              if (null === this._data || 0 === this._data.points.length)
                return null;
              var t =
                this._hitTest || new n.HitTestResult(n.HitTestResult.MOVEPOINT);
              return Math.abs(e.x - this._data.points[0].x) <= 3 ? t : null;
            }),
            e
          );
        })());
    },
  },
]);
