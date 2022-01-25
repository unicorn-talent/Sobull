(window.webpackJsonp = window.webpackJsonp || []).push([
  ['series-pane-views'],
  {
    '+weX': function (t, e, i) {
      'use strict';
      function a() {
        this._data = null;
      }
      function s(t, e) {
        (this._gotoDateResult = e),
          (this._series = t),
          (this._invalidated = !0),
          (this._renderer = new a());
      }
      var n = i('aO4+').Point,
        o = i('Zy3/').CompositeRenderer,
        r = i('gQ5K').DateFormatter,
        l = i('4kQX').TimeFormatter,
        d = i('ikwP').calcTextHorizontalShift;
      (a.prototype.setData = function (t) {
        this._data = t;
      }),
        (a.prototype.hitTest = function () {
          return null;
        }),
        (a.prototype.draw = function (t) {
          var e, i, a, s, n, o, r, l, h, _, p, u, m, f, T, S, c, g, w;
          null !== this._data &&
            ((e = 5),
            (i = 12),
            (a = 5),
            (s = 8),
            (n = 13),
            (o = 0),
            t.save(),
            t.setFont(n + 'px Arial'),
            (h = $.t('Last available bar')),
            this._data.eod
              ? (o = t.measureText(h).width)
              : ((r = t.measureText(this._data.dateString || '').width),
                (l = t.measureText(this._data.timeString || '').width),
                (o = Math.max(r, l))),
            (_ = this._data.timeString ? 2 : 1),
            (t.fillStyle = this._data.eod ? '#FF4040' : '#58A3CD'),
            t.translate(this._data.point.x + 0.5, this._data.point.y + 0.5),
            (p = Math.round(-o / 2) - s),
            (u = -(n + e) * _ - e - i - a),
            (m = Math.round(p + o + 2 * s)),
            (f = -i - a),
            t.beginPath(),
            t.moveTo(p, u),
            t.lineTo(m, u),
            t.lineTo(m, f),
            t.lineTo(i, f),
            t.lineTo(0, f + i),
            t.lineTo(-i, f),
            t.lineTo(p, f),
            t.fill(),
            (t.fillStyle = '#FFFFFF'),
            (t.textBaseline = 'middle'),
            this._data.eod
              ? ((T = d(t, o)), t.fillText(h, p + s + T, u + (f - u) / 2))
              : ((S = p + s + (o - r) / 2),
                (c = d(t, r)),
                t.fillText(this._data.dateString, S + c, u + n / 2 + e),
                this._data.timeString &&
                  ((g = d(t, l)),
                  (w = p + s + (o - l) / 2),
                  t.fillText(
                    this._data.timeString,
                    w + g,
                    u + (n + e) * _ - 0.5 * n,
                  ))),
            t.restore());
        }),
        (s.prototype.update = function () {
          this._invalidated = !0;
        }),
        (s.prototype.updateImpl = function () {
          var t, e, i, a, s, o, d;
          delete this._point,
            delete this._dateString,
            delete this._timeString,
            delete this._eod,
            (i = null),
            (t = this._series
              .model()
              .timeScale()
              .timePointToIndex(this._gotoDateResult.timestamp)) <
              (e = this._series.bars()).firstIndex() && null !== e.first()
              ? ((t = e.firstIndex()), (i = e.first().value))
              : t > e.lastIndex() && null !== e.last()
              ? ((t = e.lastIndex()), (i = e.last().value))
              : (i = e.valueAt(t)),
            null !== i &&
              null != (a = this._series.firstValue()) &&
              ((s = this._series
                .priceScale()
                .priceToCoordinate(i[TradingView.HIGH_PLOT], a)),
              (o = this._series.model().timeScale().indexToCoordinate(t)),
              (this._point = new n(o, s)),
              this._gotoDateResult.eod
                ? (this._eod = !0)
                : ((d = this._series.model().timeScale().indexToUserTime(t)),
                  (this._dateString = new r().format(d)),
                  this._series.isDWM() ||
                    (this._timeString = new l().format(d))));
        }),
        (s.prototype.renderer = function () {
          return (
            this._invalidated && (this.updateImpl(), (this._invalidated = !1)),
            this._point
              ? (this._renderer.setData({
                  point: this._point,
                  dateString: this._dateString,
                  timeString: this._timeString,
                  eod: this._eod,
                }),
                this._renderer)
              : new o()
          );
        }),
        (t.exports.GotoDateView = s);
    },
  },
]);
