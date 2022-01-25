(window.webpackJsonp = window.webpackJsonp || []).push([
  ['symbol-info-dialog-impl'],
  {
    '1Z/g': function (e, t, n) {
      'use strict';
      (function (e, i) {
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
        function o(e) {
          return e && e.type && 'futures' === e.type && e.front_contract;
        }
        function l(e) {
          m ||
            ((m = document.createElement('div')), document.body.appendChild(m)),
            h.render(g.createElement(S, e), m);
        }
        function a(e) {
          var t,
            n = d;
          for (t = 0; t < n.length; t++) if (n[t].id === e) return n[t].title;
          return e;
        }
        function c(e) {
          var t,
            n = new b(e);
          return ((t = n.entries()),
          _.reduce(function (e, n) {
            var i,
              r = t.filter(function (e) {
                return e.dayOfWeek() === n;
              }),
              o = w[n] + ' ';
            return 0 === r.length
              ? (e.push(o + window.t('Closed')), e)
              : ((i = r.reduce(function (e, t) {
                  var n = t.sessionStartDayOfWeek(),
                    i = Math.floor(
                      (t.alignedStart() + t.length()) / N.minutesPerDay,
                    ),
                    r = (function (e, t) {
                      for (var n = e + t; e > N.SATURDAY; ) e -= N.SATURDAY;
                      return n;
                    })(n, i),
                    o = n !== t.dayOfWeek(),
                    l = o && r !== t.dayOfWeek(),
                    a = o ? w[n] : '',
                    c = l ? w[r] : '',
                    u =
                      p(t.alignedStart()) +
                      a +
                      '-' +
                      p(t.alignedStart() + t.length()) +
                      c;
                  return e.push(u), e;
                }, [])),
                e.push(o + i.join(', ')),
                e);
          }, [])).join('<br>');
        }
        function u(e) {
          return e || '-';
        }
        function s(e, t) {
          var n,
            i,
            r,
            o = 0;
          for (n = 0; n < t.length; n++)
            (i = t[n].propName) in e &&
              ((r = e[i]),
              'minmove2' === i &&
              e.minmove2 > 0 &&
              !e.fractional &&
              e.pricescale
                ? ((t[n].value = new y(e.pricescale / r).format(
                    r / e.pricescale,
                  )),
                  (t[n].title = $.t('Pip Size')))
                : (t[n].value = (t[n].formatter || u)(r)),
              o++);
          return (
            (function (e, t) {
              var n, i;
              for (n = 0; n < t.length; n++)
                void 0 === (i = t[n]).visibility ||
                  i.visibility(e) ||
                  (t.splice(n, 1), n--);
            })(e, t),
            o
          );
        }
        function p(e) {
          var t, n;
          return (
            e > N.minutesPerDay && (e -= N.minutesPerDay),
            (n = D((e - (t = e % 60)) / 60, 2) + ':' + D(t, 2)),
            E.IS_RTL ? E.startWithLTR(n) : n
          );
        }
        var m,
          f = n('PT1i').linking,
          d = n('+6ja').availableTimezones,
          y = n('kcTO').PriceFormatter,
          v = n('0waE'),
          g = n('q1tI'),
          h = n('i8i4'),
          S = n('ZzxF').SymbolInfoDialog,
          b = n('CzJ+').ExchangeSession,
          N = n('jCNj'),
          D = n('kcTO').numberToStringWithLeadingZero,
          E = n('Ialn'),
          T = n('IWXC').getQuoteSessionInstance,
          _ = [
            N.MONDAY,
            N.TUESDAY,
            N.WEDNESDAY,
            N.THURSDAY,
            N.FRIDAY,
            N.SATURDAY,
            N.SUNDAY,
          ],
          w = _.reduce(function (t, n) {
            return (t[n < 7 ? n + 1 : 1] = e.weekdaysMin(n)), t;
          }, {});
        t.showSymbolInfoDialog = function (e, t) {
          var n, u, p, d, y, g;
          l({ isOpened: !1 }),
            null == e && (e = f.symbol.value()),
            null != e &&
              ((e += ''),
              (n = t && t.symbolInfo),
              (u = [
                {
                  title: $.t('Symbol Name'),
                  propName: i.enabled('charting_library_base')
                    ? 'name'
                    : 'pro_name',
                },
                { title: $.t('Symbol Description'), propName: 'description' },
                {
                  title: $.t('Symbol Type'),
                  propName: 'type',
                  formatter: function (e) {
                    return 'bitcoin' === e || 'crypto' === e ? 'crypto' : e;
                  },
                },
                {
                  title: $.t('Current Contract'),
                  propName: 'front_contract',
                  visibility: o,
                },
                { title: $.t('Point Value'), propName: 'pointvalue' },
                { title: $.t('Exchange'), propName: 'exchange' },
                { title: $.t('Listed Exchange'), propName: 'listed_exchange' },
                {
                  title: $.t('Currency'),
                  propName: 'currency_code',
                  formatter: function (e) {
                    return e || 'USD';
                  },
                  defValue: 'USD',
                },
                { title: $.t('Price Scale'), propName: 'pricescale' },
                { title: $.t('Min Move'), propName: 'minmov' },
                { title: $.t('Min Move 2'), propName: 'minmove2' },
                { title: $.t('Sector'), propName: 'sector' },
                {
                  title: $.t('Industry'),
                  propName: 'industry',
                },
                {
                  title: $.t('Timezone'),
                  propName: 'timezone',
                  formatter: a,
                  visibility: r,
                },
                {
                  title: $.t('Session'),
                  propName: 'session',
                  formatter: c,
                  visibility: r,
                  setHtml: !0,
                },
              ]),
              (p = 0),
              n && (p = s(n, u)),
              p < u.length &&
                ((d = 'symbolinfodialog.' + v.guid()),
                (y = T('full')).subscribe(d, e, function (t, n) {
                  s(n.values, u), y.unsubscribe(d, e), l(g);
                })),
              l(
                (g = {
                  isOpened: !0,
                  onClose: function () {
                    l({ isOpened: !1 }), (m = null);
                  },
                  fields: u,
                }),
              ));
        };
      }.call(this, n('ldgD'), n('Kxc7')));
    },
    ZzxF: function (e, t, n) {
      'use strict';
      var i, r, o, l, a, c, u, s;
      n.r(t),
        n.d(t, 'SymbolInfoDialog', function () {
          return s;
        }),
        (i = n('mrSG')),
        n('YFKU'),
        (r = n('q1tI')),
        (o = n('WXjp')),
        (l = n('AVTG')),
        (a = n('g9Yu')),
        (c = n('TSYQ')),
        (u = n('ycI/')),
        (s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            i.__extends(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                o.a,
                {
                  className: a.popupDialog,
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
                  r.createElement(u.a, {
                    keyCode: 27,
                    handler: this.props.onClose,
                  }),
                  r.createElement(
                    'div',
                    { className: a.content },
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
                      { key: e.propName, className: a.row },
                      r.createElement(
                        'div',
                        { className: c(a.column, a.columnTitle) },
                        r.createElement(
                          'span',
                          { className: a.title },
                          e.title,
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: c(a.column, a.columnValue) },
                        r.createElement(
                          'span',
                          { className: a.value },
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
    g9Yu: function (e, t, n) {
      e.exports = {
        popupDialog: 'popupDialog-2VK9ttEi-',
        content: 'content-BtJ6qB4V-',
        row: 'row-3iYHykfo-',
        column: 'column-2FlX4ngi-',
        title: 'title-22tx3Djt-',
        value: 'value-2xvVEs1a-',
        columnTitle: 'columnTitle-3ypCTDKd-',
        columnValue: 'columnValue-Xr4j0qyI-',
      };
    },
  },
]);
