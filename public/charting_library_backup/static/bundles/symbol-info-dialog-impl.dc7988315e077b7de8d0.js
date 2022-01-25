(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-info-dialog-impl'],
  {
    '1Z/g': function (e, t, n) {
      'use strict';
      (function (e, o) {
        function r(e) {
          return (
            !(function (e) {
              return e && e.type && 'economic' === e.type;
            })(e) &&
            !(function (e, t) {
              return (
                e && e.listed_exchange && t.indexOf(e.listed_exchange) >= 0
              );
            })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
          );
        }
        function i(e) {
          return e.minmove2 > 0 && !e.fractional && e.pricescale;
        }
        function l(e) {
          if (i(e))
            return new w(e.pricescale / e.minmove2).format(
              e.minmove2 / e.pricescale,
            );
        }
        function a(e) {
          return void 0 === e.minmov || void 0 === e.pricescale
            ? null
            : k(e).format(e.minmov / e.pricescale);
        }
        function s(e) {
          return e && e.type && 'futures' === e.type && e.front_contract;
        }
        function c(e) {
          y ||
            ((y = document.createElement('div')), document.body.appendChild(y)),
            b.render(N.createElement(E, e), y);
        }
        function u(e) {
          var t,
            n = h;
          for (t = 0; t < n.length; t++) if (n[t].id === e) return n[t].title;
          return e;
        }
        function p(e) {
          var t,
            n = new S('Etc/UTC', e);
          return ((t = n.entries()),
          T.reduce(function (e, n) {
            var o,
              r = t.filter(function (e) {
                return e.dayOfWeek() === n;
              }),
              i = x[n] + ' ';
            return 0 === r.length
              ? (e.push(i + window.t('Closed')), e)
              : ((o = r.reduce(function (e, t) {
                  var n = t.sessionStartDayOfWeek(),
                    o = t.sessionStartDaysOffset(),
                    r = (function (e, t) {
                      for (var n = e + t; n > D.SATURDAY; ) n -= D.SATURDAY;
                      return n;
                    })(n, o),
                    i = n !== t.dayOfWeek(),
                    l = i && r !== t.dayOfWeek(),
                    a = i ? x[n] : '',
                    s = l ? x[r] : '',
                    c = f(t.start()) + a + '-' + f(t.start() + t.length()) + s;
                  return e.push(c), e;
                }, [])),
                e.push(i + o.join(', ')),
                e);
          }, [])).join('<br>');
        }
        function m(e) {
          return e || '-';
        }
        function d(e, t) {
          var n,
            o,
            r,
            i,
            l,
            a,
            s = 0;
          for (n = 0; n < t.length; n++)
            void 0 === t[n].getter
              ? ((r = t[n].propName),
                (i = t[n].altPropName),
                void 0 !==
                  (l = r in e ? r : void 0 !== i && i in e ? i : void 0) &&
                  ((a = e[l]), (t[n].value = (t[n].formatter || m)(a)), s++))
              : (null !== (o = t[n].getter(e)) && (t[n].value = o), s++);
          return (
            (function (e, t) {
              var n, o;
              for (n = 0; n < t.length; n++)
                void 0 === (o = t[n]).visibility ||
                  o.visibility(e) ||
                  (t.splice(n, 1), n--);
            })(e, t),
            s
          );
        }
        function f(e) {
          for (var t, n; e > D.minutesPerDay; ) e -= D.minutesPerDay;
          return (
            (n = _((e - (t = e % 60)) / 60, 2) + ':' + _(t, 2)),
            C.isRtl() ? C.startWithLTR(n) : n
          );
        }
        var y,
          v = n('PT1i').linking,
          h = n('+6ja').availableTimezones,
          w = n('kcTO').PriceFormatter,
          g = n('0waE'),
          N = n('q1tI'),
          b = n('i8i4'),
          E = n('ZzxF').SymbolInfoDialog,
          S = n('5mo2').SessionSpec,
          D = n('jCNj'),
          _ = n('kcTO').numberToStringWithLeadingZero,
          C = n('Ialn'),
          O = n('IWXC').getQuoteSessionInstance,
          k = n('n5al').createSeriesFormatter,
          T = [
            D.MONDAY,
            D.TUESDAY,
            D.WEDNESDAY,
            D.THURSDAY,
            D.FRIDAY,
            D.SATURDAY,
            D.SUNDAY,
          ],
          x = T.reduce(function (t, n) {
            return (t[n < 7 ? n + 1 : 1] = e.weekdaysMin(n)), t;
          }, {});
        t.showSymbolInfoDialog = function (e, t) {
          var n, m, f, h, w, N;
          c({ isOpened: !1 }),
            null == e && (e = v.symbol.value()),
            null != e &&
              ((e += ''),
              (n = t && t.symbolInfo),
              (m = [
                {
                  title: window.t('Symbol Name'),
                  propName: o.enabled('charting_library_base')
                    ? 'name'
                    : 'pro_name',
                },
                {
                  title: window.t('Symbol Description'),
                  propName: 'description',
                },
                {
                  title: window.t('Symbol Type'),
                  propName: 'type',
                  formatter: function (e) {
                    return 'bitcoin' === e || 'crypto' === e ? 'crypto' : e;
                  },
                },
                {
                  title: window.t('Current Contract'),
                  propName: 'front_contract',
                  visibility: s,
                },
                { title: window.t('Point Value'), propName: 'pointvalue' },
                { title: window.t('Exchange'), propName: 'exchange' },
                {
                  title: window.t('Listed Exchange'),
                  propName: 'listed_exchange',
                },
                {
                  title: window.t('Currency'),
                  propName: 'currency_code',
                  formatter: function (e) {
                    return e || '';
                  },
                  defValue: '',
                },
                {
                  title: window.t('Pip Size'),
                  propName: 'pip_size',
                  getter: l,
                  visibility: i,
                },
                {
                  title: window.t('Tick Size'),
                  propName: 'tick_size',
                  getter: a,
                },
                { title: window.t('Sector'), propName: 'sector' },
                { title: window.t('Industry'), propName: 'industry' },
                {
                  title: window.t('Timezone'),
                  propName: 'timezone',
                  formatter: u,
                  visibility: r,
                },
                {
                  title: window.t('Session'),
                  propName: 'session_display',
                  altPropName: 'session',
                  formatter: p,
                  visibility: r,
                  setHtml: !0,
                },
              ]),
              (f = 0),
              n && (f = d(n, m)),
              f < m.length &&
                ((h = 'symbolinfodialog.' + g.guid()),
                (w = O('full')).subscribe(h, e, function (t, n) {
                  d(n.values, m), w.unsubscribe(h, e), c(N);
                })),
              c(
                (N = {
                  isOpened: !0,
                  onClose: function () {
                    c({ isOpened: !1 }),
                      b.unmountComponentAtNode(y),
                      (y = null);
                  },
                  fields: m,
                }),
              ));
        };
      }.call(this, n('ldgD'), n('Kxc7')));
    },
    AVTG: function (e, t, n) {
      'use strict';
      function o(e) {
        var t = e.hideIcon
          ? null
          : l.createElement(u.a, {
              className: s.close,
              icon: c,
              onClick: e.onClose,
            });
        return l.createElement(
          'div',
          {
            className: a(s.header, e.className),
            'data-dragg-area': !0,
            ref: e.reference,
          },
          e.children,
          t,
        );
      }
      function r(e) {
        return l.createElement(
          'div',
          { className: a(p.body, e.className), ref: e.reference },
          e.children,
        );
      }
      function i(e) {
        var t, n, o;
        return (
          e.text
            ? (t = l.createElement('span', null, e.text))
            : e.html &&
              (t = l.createElement('span', {
                dangerouslySetInnerHTML: { __html: e.html },
              })),
          (n = Object(m.a)({
            mouseDown: !0,
            touchStart: !0,
            handler: e.onClickOutside,
          })),
          t
            ? ((o = d.message),
              e.isError && (o += ' ' + d.error),
              l.createElement(
                'div',
                { className: o, key: '0' },
                l.createElement('span', { ref: n }, t),
              ))
            : null
        );
      }
      var l = n('q1tI'),
        a = n('TSYQ'),
        s = n('kgsH'),
        c = n('uo4K'),
        u = n('jjrI'),
        p = (n('kQXJ'), n('XYXm')),
        m = n('8Rai'),
        d = n('cJj4');
      n.d(t, 'b', function () {
        return o;
      }),
        n.d(t, 'a', function () {
          return r;
        }),
        n.d(t, 'c', function () {
          return i;
        });
    },
    XYXm: function (e, t, n) {
      e.exports = { body: 'body-2N-vuwQW' };
    },
    ZzxF: function (e, t, n) {
      'use strict';
      var o, r, i, l, a, s, c, u, p, m;
      n.r(t),
        n.d(t, 'SymbolInfoDialog', function () {
          return m;
        }),
        (o = n('mrSG')),
        n('YFKU'),
        (r = n('q1tI')),
        (i = n('WXjp')),
        (l = n('AVTG')),
        (a = n('TSYQ')),
        (s = n('ycI/')),
        (c = n('FQhm')),
        (u = n('ZjKI')),
        (p = n('g9Yu')),
        (m = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._close = function () {
                return t.props.onClose();
              }),
              t
            );
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              c.subscribe(
                u.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._close,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              c.unsubscribe(
                u.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._close,
                null,
              );
            }),
            (t.prototype.render = function () {
              return r.createElement(
                i.a,
                {
                  className: p.popupDialog,
                  isOpened: this.props.isOpened,
                  onClickOutside: this.props.onClose,
                },
                r.createElement(
                  l.b,
                  { onClose: this.props.onClose },
                  window.t('Symbol Info'),
                ),
                r.createElement(
                  l.a,
                  null,
                  r.createElement(s.a, {
                    keyCode: 27,
                    handler: this.props.onClose,
                  }),
                  r.createElement(
                    'div',
                    { className: p.content },
                    this._renderFields(),
                  ),
                ),
              );
            }),
            (t.prototype._renderFields = function () {
              return this.props.fields
                ? this.props.fields.map(function (e) {
                    return r.createElement(
                      'div',
                      { key: e.propName, className: p.row },
                      r.createElement(
                        'div',
                        { className: a(p.column, p.columnTitle) },
                        r.createElement(
                          'span',
                          { className: p.title },
                          e.title,
                        ),
                      ),
                      r.createElement(
                        'div',
                        {
                          className: a(p.column, p.columnValue),
                        },
                        r.createElement(
                          'span',
                          { className: p.value },
                          (function (e) {
                            var t = e.value || e.defValue || '-';
                            return e.setHtml
                              ? r.createElement('span', {
                                  dangerouslySetInnerHTML: { __html: t },
                                })
                              : t;
                          })(e),
                        ),
                      ),
                    );
                  })
                : [];
            }),
            t
          );
        })(r.PureComponent));
    },
    cJj4: function (e, t, n) {
      e.exports = { message: 'message-2o-rtQm0', error: 'error-2EW0C6z-' };
    },
    g9Yu: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-2VK9ttEi',
        content: 'content-BtJ6qB4V',
        row: 'row-3iYHykfo',
        column: 'column-2FlX4ngi',
        title: 'title-22tx3Djt',
        value: 'value-2xvVEs1a',
        columnTitle: 'columnTitle-3ypCTDKd',
        columnValue: 'columnValue-Xr4j0qyI',
      };
    },
    kQXJ: function (e, t, n) {
      e.exports = { footer: 'footer-2Zoji8zg' };
    },
    kgsH: function (e, t, n) {
      e.exports = { header: 'header-dpl-vtN_', close: 'close-3kPn4OTV' };
    },
    uo4K: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
    'ycI/': function (e, t, n) {
      'use strict';
      var o, r, i;
      n.d(t, 'a', function () {
        return i;
      }),
        (o = n('mrSG')),
        (r = n('q1tI')),
        (i = (function (e) {
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
            Object(o.__extends)(t, e),
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
        })(r.PureComponent));
    },
  },
]);
