(window.webpackJsonp = window.webpackJsonp || []).push([
  ['load-chart-dialog'],
  {
    '/KDZ': function (e, t, n) {
      'use strict';
      var r, o, i;
      n.d(t, 'a', function () {
        return i;
      }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (i = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleChange = function () {
                n.forceUpdate();
              }),
              (n.state = { query: window.matchMedia(n.props.rule) }),
              n
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._subscribe(this.state.query);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.state.query !== t.query &&
                (this._unsubscribe(t.query), this._subscribe(this.state.query));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._unsubscribe(this.state.query);
            }),
            (t.prototype.render = function () {
              return this.props.children(this.state.query.matches);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.rule !== t.query.media
                ? { query: window.matchMedia(e.rule) }
                : null;
            }),
            (t.prototype._subscribe = function (e) {
              e.addListener(this._handleChange);
            }),
            (t.prototype._unsubscribe = function (e) {
              e.removeListener(this._handleChange);
            }),
            t
          );
        })(o.PureComponent));
    },
    '0lTl': function (e, t, n) {
      e.exports = {
        wrap: 'wrap-ghxWUnOu',
        'wrap--horizontal': 'wrap--horizontal-1sVOJLqZ',
        bar: 'bar-2ZGFe1r-',
        barInner: 'barInner-2f6z58Ci',
        'barInner--horizontal': 'barInner--horizontal-35zIxXob',
        'bar--horizontal': 'bar--horizontal-2ofOPj8L',
      };
    },
    '9COk': function (e, t, n) {
      e.exports = {
        container: 'container-1IsABHOv',
        labelWrap: 'labelWrap-3uvIMaQx',
        icon: 'icon-189WhVaK',
        text: 'text-14KBoXpS',
      };
    },
    AMW5: function (e, t, n) {
      'use strict';
      function r(e) {
        var t,
          n = e.items,
          r = e.countPerRender,
          o = void 0 === r ? w : r,
          i = e.initCount,
          a = void 0 === i ? j : i,
          c = e.onUpdate,
          l = Object(d.useState)(a),
          s = l[0],
          u = l[1],
          m = Object(d.useRef)(c);
        return (
          (m.current = c),
          (t = s),
          Object(d.useEffect)(
            function () {
              var e = [
                  window.requestIdleCallback ||
                    function (e) {
                      var t = Date.now(),
                        n = function () {
                          return e({
                            didTimeout: !1,
                            timeRemaining: function () {
                              return Math.max(0, 50 - (Date.now() - t));
                            },
                          });
                        };
                      return setTimeout(n, 1);
                    },
                  window.cancelIdleCallback ||
                    function (e) {
                      return clearTimeout(e);
                    },
                ],
                r = e[0],
                i = e[1],
                a = function (e) {
                  for (
                    s < n.length &&
                    ((t += o),
                    u(function (e) {
                      return e + o;
                    }));
                    s < n.length && e.timeRemaining() > 0;

                  )
                    (t += o),
                      u(function (e) {
                        return e + o;
                      });
                  (c = n.length - t > 0 ? r(a, { timeout: 500 }) : null),
                    m.current && m.current();
                },
                c = r(a, { timeout: 500 });
              return function () {
                null !== c && i(c);
              };
            },
            [n.length],
          ),
          f.a.createElement(f.a.Fragment, null, n.slice(0, s))
        );
      }
      function o(e) {
        function t(e) {
          var t = r(e, Object(v.ensureNotNull)(I.current)) - z.current;
          O(t / a / s);
        }
        function n(e) {
          R(!1);
        }
        function r(e, t) {
          var n = t.getBoundingClientRect();
          return w ? e.clientX - n.left : e.clientY - n.top;
        }
        var o,
          i,
          a,
          c,
          l,
          s,
          u,
          m,
          h = e.size,
          p = e.scrollSize,
          g = e.clientSize,
          b = e.scrollProgress,
          O = e.onScrollProgressChange,
          w = e.horizontal,
          j = e.theme,
          C = void 0 === j ? x : j,
          E = e.onDragStart,
          D = e.onDragEnd,
          N = e.minBarSize,
          L = void 0 === N ? 40 : N,
          I = Object(d.useRef)(null),
          k = Object(d.useRef)(null),
          T = Object(d.useState)(!1),
          F = T[0],
          R = T[1],
          z = Object(d.useRef)(0);
        return (
          Object(d.useEffect)(
            function () {
              if (F) {
                E && E();
                var e = Object(v.ensureNotNull)(I.current).ownerDocument;
                e &&
                  (e.addEventListener('mousemove', t),
                  e.addEventListener('mouseup', n));
              } else D && D();
              return function () {
                var e = Object(v.ensureNotNull)(I.current).ownerDocument;
                e &&
                  (e.removeEventListener('mousemove', t),
                  e.removeEventListener('mouseup', n));
              };
            },
            [F],
          ),
          (c = g * (a = h / p || 0) || 0),
          (l = Math.max(c, L)),
          (s = (h - l) / (h - c)),
          (m = Object(y.clamp)(b, 0, p - h)),
          (u = Object(_.isRtl)() && w ? m - p + g : m),
          f.a.createElement(
            'div',
            {
              ref: I,
              className: S()(C.wrap, w && C['wrap--horizontal']),
              style: ((o = {}), (o[w ? 'width' : 'height'] = h), o),
              onMouseDown: function (e) {
                var t, n, o;
                e.isDefaultPrevented() ||
                  (e.preventDefault(),
                  (t = Object(v.ensureNotNull)(
                    k.current,
                  ).getBoundingClientRect()),
                  (z.current = (w ? t.width : t.height) / 2),
                  (n = p - h),
                  (o =
                    r(e.nativeEvent, Object(v.ensureNotNull)(I.current)) -
                    z.current) < 0
                    ? ((o = 0),
                      (z.current = r(
                        e.nativeEvent,
                        Object(v.ensureNotNull)(I.current),
                      )))
                    : o > n * a * s &&
                      ((o = n * a * s),
                      (z.current =
                        r(e.nativeEvent, Object(v.ensureNotNull)(I.current)) -
                        o)),
                  O(o / a / s),
                  R(!0));
              },
            },
            f.a.createElement(
              'div',
              {
                ref: k,
                className: S()(C.bar, w && C['bar--horizontal']),
                style:
                  ((i = {}),
                  (i[w ? 'minWidth' : 'minHeight'] = L),
                  (i[w ? 'width' : 'height'] = l),
                  (i.transform =
                    'translate' +
                    (w ? 'X' : 'Y') +
                    '(' +
                    (u * a * s || 0) +
                    'px)'),
                  i),
                onMouseDown: function (e) {
                  e.preventDefault(),
                    (z.current = r(
                      e.nativeEvent,
                      Object(v.ensureNotNull)(k.current),
                    )),
                    R(!0);
                },
              },
              f.a.createElement('div', {
                className: S()(C.barInner, w && C['barInner--horizontal']),
              }),
            ),
          )
        );
      }
      function i(e) {
        function t() {
          x(!0);
        }
        function n() {
          x(!1);
        }
        var r = e.reference,
          i = e.className,
          a = e.containerHeight,
          c = void 0 === a ? 0 : a,
          l = e.containerWidth,
          s = void 0 === l ? 0 : l,
          u = e.contentHeight,
          m = void 0 === u ? 0 : u,
          v = e.contentWidth,
          p = void 0 === v ? 0 : v,
          g = e.scrollPosTop,
          b = void 0 === g ? 0 : g,
          O = e.scrollPosLeft,
          w = void 0 === O ? 0 : O,
          j = e.onVerticalChange,
          C = e.onHorizontalChange,
          E = e.visible,
          D = Object(I.b)(),
          S = D[0],
          y = D[1],
          _ = Object(d.useState)(!1),
          L = _[0],
          x = _[1],
          F = c < m,
          R = s < p,
          z = F && R ? T : 0;
        return f.a.createElement(
          'div',
          Object(h.__assign)({}, y, {
            ref: r,
            className: N(i, k.scrollWrap),
            style: { visibility: E || S || L ? 'visible' : 'hidden' },
          }),
          F &&
            f.a.createElement(o, {
              size: c - z,
              scrollSize: m - z,
              clientSize: c - z,
              scrollProgress: b,
              onScrollProgressChange: function (e) {
                j && j(e);
              },
              onDragStart: t,
              onDragEnd: n,
            }),
          R &&
            f.a.createElement(o, {
              size: s - z,
              scrollSize: p - z,
              clientSize: s - z,
              scrollProgress: w,
              onScrollProgressChange: function (e) {
                C && C(e);
              },
              onDragStart: t,
              onDragEnd: n,
              horizontal: !0,
            }),
        );
      }
      function a(e) {
        function t(e) {
          var t, n;
          return l
            ? ((n = l
                .split('')
                .map(function (e) {
                  return Object(M.regExpEscape)(e);
                })
                .join(')(.*?)(')),
              (t = new RegExp('(' + n + ')', 'i')),
              e.split(t).map(function (e, t) {
                return t % 2
                  ? f.a.createElement(
                      'span',
                      { key: t, className: S()(K.highlight, E && K.active) },
                      e,
                    )
                  : f.a.createElement(f.a.Fragment, { key: t }, e);
              }))
            : e;
        }
        function n(e) {
          D(a.id === e);
        }
        var r,
          o,
          i,
          a = e.chartItem,
          c = e.favorite,
          l = e.searchValue,
          s = e.trackEvent,
          u = e.afterItemRemove,
          m = e.setItemFavorite,
          h = e.afterRemoveDialogClose,
          v = e.chartItemIntervalText,
          g = e.chartWidgetCollection,
          O = e.onClick,
          w = Object(d.useContext)(A.b),
          j = Object(d.useState)(function () {
            return a.active();
          }),
          E = j[0],
          D = j[1];
        return (
          Object(d.useEffect)(function () {
            return (
              g && g.metaInfo.id.subscribe(n),
              function () {
                g && g.metaInfo.id.unsubscribe(n);
              }
            );
          }, []),
          (o = Object(W.a)({ chartId: a.url })),
          f.a.createElement(
            'a',
            {
              className: S()(K.itemRow, E && K.active),
              onClick: function (e) {
                e.isDefaultPrevented() ||
                  (e.preventDefault(),
                  s('Switch chart layout'),
                  a.openAction(),
                  O && O(e));
              },
              href: o,
              'data-name': 'load-chart-dialog-item',
              'data-active': E,
            },
            f.a.createElement(C.a, {
              className: S()(
                K.favoriteButton,
                'apply-common-tooltip',
                ((r = {}),
                (r[K.active] = E),
                (r[K.favorite] = c),
                (r[K.mobile] = b.CheckMobile.any()),
                r),
              ),
              title: c
                ? Object(p.t)('Remove from favorites')
                : Object(p.t)('Add to favorites'),
              icon: c ? H : U,
              onClick: function (e) {
                e.isDefaultPrevented() ||
                  (e.preventDefault(), s('Add to favorites'), m(a));
              },
              'data-name': 'load-chart-dialog-item-favorite-button',
              'data-favorite': c,
            }),
            f.a.createElement(
              'div',
              { className: K.itemInfo },
              f.a.createElement(
                'div',
                {
                  className: S()(K.title, E && K.active),
                  'data-name': 'load-chart-dialog-item-name',
                },
                t(a.title),
              ),
              f.a.createElement(
                'div',
                { className: S()(K.details, E && K.active) },
                t(a.symbol),
                ', ',
                t(v),
                ' (',
                ((i = a.modified), z.a.unix(i).format('DD.MM.YYYY HH:mm')),
                ')',
              ),
            ),
            f.a.createElement(C.a, {
              className: S()(
                K.removeButton,
                'apply-common-tooltip',
                E && K.active,
              ),
              title: Object(p.t)('Remove'),
              icon: q,
              onClick: function (e) {
                e.isDefaultPrevented() ||
                  (e.preventDefault(),
                  s('Delete chart layout'),
                  (function (e, t, n, r) {
                    Object(P.createConfirmDialog)({
                      content: Object(B.b)(e),
                      manager: r || void 0,
                    }).then(function (e) {
                      e.on('action:yes', function () {
                        t(), e.close();
                      }),
                        e.on('afterClose', function () {
                          return n();
                        }),
                        e.open();
                    });
                  })(
                    Y.format(a.title),
                    function () {
                      a.deleteAction().then(function () {
                        return u(a.id);
                      });
                    },
                    h,
                    w,
                  ));
              },
              'data-name': 'load-chart-dialog-item-remove-button',
            }),
          )
        );
      }
      function c(e) {
        var t = e.label,
          n = e.listSortField,
          r = e.itemSortField,
          o = e.listSortDirection,
          i = e.itemSortDirection,
          a = e.onClick,
          c = r === n && i === o;
        return d.createElement(X.b, {
          className: Z.container,
          label: d.createElement(
            'div',
            { className: Z.labelWrap },
            d.createElement(C.a, { className: Z.icon, icon: 0 === i ? J : Q }),
            d.createElement('span', { className: Z.text }, t),
          ),
          isActive: c,
          onClick: function () {
            a(r, i);
          },
          'data-name': 'load-chart-dialog-sort-menu-item',
          'data-active': c.toString(),
          'data-sort-field': r,
          'data-sort-direction': 0 === i ? 'asc' : 'desc',
        });
      }
      function l(e) {
        var t = e.sortField,
          n = e.sortDirection,
          r = e.onSelect,
          o = Object(d.useRef)(null),
          i = Object(d.useState)(!1),
          a = i[0],
          l = i[1],
          s = { verticalMargin: -35, verticalAttachEdge: 0 };
        return f.a.createElement(
          'div',
          {
            ref: o,
            className: N(
              $.sortButton,
              'apply-common-tooltip',
              'common-tooltip-vertical',
            ),
            title: Object(p.t)('Sort by layout name, date changed'),
            onClick: function () {
              l(!a);
            },
            'data-name': 'load-chart-dialog-sort-button',
          },
          f.a.createElement(C.a, { className: $.icon, icon: 0 === n ? J : Q }),
          f.a.createElement(
            V.a,
            {
              doNotCloseOn: o.current,
              isOpened: a,
              onClose: function () {
                l(!1);
              },
              position: Object(G.c)(o.current, s),
            },
            f.a.createElement(c, {
              label: Object(p.t)('Layout name (ascending)'),
              listSortField: t,
              itemSortField: 'title',
              listSortDirection: n,
              itemSortDirection: 0,
              onClick: r,
            }),
            f.a.createElement(c, {
              label: Object(p.t)('Layout name (descending)'),
              listSortField: t,
              itemSortField: 'title',
              listSortDirection: n,
              itemSortDirection: 1,
              onClick: r,
            }),
            f.a.createElement(c, {
              label: Object(p.t)('Date modified (oldest first)'),
              listSortField: t,
              itemSortField: 'modified',
              listSortDirection: n,
              itemSortDirection: 0,
              onClick: r,
            }),
            f.a.createElement(c, {
              label: Object(p.t)('Date modified (newest first)'),
              listSortField: t,
              itemSortField: 'modified',
              listSortDirection: n,
              itemSortDirection: 1,
              onClick: r,
            }),
          ),
        );
      }
      function s(e) {
        function t(e) {
          var t = e.currentTarget.value;
          A(t);
        }
        function n(e) {
          0;
        }
        function o() {
          F.a.fire();
        }
        function c() {
          ie();
        }
        function s(e) {
          H(Object(h.__spreadArrays)([e], q));
        }
        function u(e) {
          var t = Object(h.__assign)({}, Y);
          t[e.id] ? delete t[e.id] : (t[e.id] = !0), e.favoriteAction(t);
        }
        function m(e) {
          V(e);
        }
        function p() {
          Object(v.ensureNotNull)(U.current).focus();
        }
        function w(e) {
          var t;
          try {
            t = Object(E.getTranslatedResolution)(e.interval);
          } catch (n) {
            t = e.interval;
          }
          return t;
        }
        function j(e, t) {
          var r = { sortField: e, sortDirection: t };
          J(r),
            g.setValue('loadChartDialog.viewState', JSON.stringify(r), {
              forceFlush: !0,
            }),
            n();
        }
        function N(e) {
          0;
        }
        var S,
          y,
          _,
          L = e.charts,
          x = e.onClose,
          k = e.favoriteChartsService,
          T = e.chartWidgetCollection,
          R = Object(d.useState)(''),
          z = R[0],
          M = R[1],
          B = Object(d.useState)(z),
          P = B[0],
          A = B[1],
          W = Object(d.useState)([]),
          q = W[0],
          H = W[1],
          U = Object(d.useRef)(null),
          K = Object(d.useState)(function () {
            return k.get();
          }),
          Y = K[0],
          V = K[1],
          G = Object(d.useState)(function () {
            return g.getJSON('loadChartDialog.viewState', ne);
          }),
          X = G[0],
          J = G[1],
          Q = Object(d.useRef)(null),
          Z = (function () {
            function e() {
              var e, t, o, i, a, c, l, u;
              r.current &&
                ((e = r.current),
                (t = e.clientHeight),
                (o = e.scrollHeight),
                (i = e.scrollTop),
                (a = e.clientWidth),
                (c = e.scrollWidth),
                (l = e.scrollLeft),
                (u = n.current ? n.current.offsetTop : 0),
                s(function (e) {
                  return Object(h.__assign)(Object(h.__assign)({}, e), {
                    containerHeight: t - u,
                    contentHeight: o - u,
                    scrollPosTop: i,
                    containerWidth: a,
                    contentWidth: c,
                    scrollPosLeft: l,
                  });
                }));
            }
            function t() {
              s(function (e) {
                return Object(h.__assign)(Object(h.__assign)({}, e), {
                  scrollPosTop: Object(v.ensureNotNull)(r.current).scrollTop,
                  scrollPosLeft: Object(v.ensureNotNull)(r.current).scrollLeft,
                });
              });
            }
            var n = Object(d.useRef)(null),
              r = Object(d.useRef)(null),
              o = Object(I.b)(),
              i = o[0],
              a = o[1],
              c = Object(d.useState)({
                reference: n,
                containerHeight: 0,
                containerWidth: 0,
                contentHeight: 0,
                contentWidth: 0,
                scrollPosTop: 0,
                scrollPosLeft: 0,
                onVerticalChange: function (e) {
                  s(function (t) {
                    return Object(h.__assign)(Object(h.__assign)({}, t), {
                      scrollPosTop: e,
                    });
                  }),
                    (Object(v.ensureNotNull)(r.current).scrollTop = e);
                },
                onHorizontalChange: function (e) {
                  s(function (t) {
                    return Object(h.__assign)(Object(h.__assign)({}, t), {
                      scrollPosLeft: e,
                    });
                  }),
                    (Object(v.ensureNotNull)(r.current).scrollLeft = e);
                },
                visible: i,
              }),
              l = c[0],
              s = c[1];
            return (
              Object(d.useEffect)(
                function () {
                  i && e(),
                    s(function (e) {
                      return Object(h.__assign)(Object(h.__assign)({}, e), {
                        visible: i,
                      });
                    });
                },
                [i],
              ),
              Object(d.useEffect)(
                function () {
                  return (
                    r.current && r.current.addEventListener('scroll', t),
                    function () {
                      r.current && r.current.removeEventListener('scroll', t);
                    }
                  );
                },
                [r],
              ),
              [l, a, r, e]
            );
          })(),
          $ = Z[0],
          re = Z[1],
          oe = Z[2],
          ie = Z[3];
        return (
          Object(d.useEffect)(function () {
            b.CheckMobile.any() || Object(v.ensureNotNull)(Q.current).focus();
          }, []),
          (S = null),
          Object(d.useEffect)(
            function () {
              S && S();
            },
            [z, q],
          ),
          (y = Object(d.useRef)()),
          Object(d.useEffect)(
            function () {
              return (
                (y.current = setTimeout(function () {
                  M(P);
                }, 300)),
                function () {
                  clearTimeout(y.current);
                }
              );
            },
            [P],
          ),
          Object(d.useEffect)(function () {
            return (
              k.getOnChange().subscribe(null, m),
              function () {
                k.getOnChange().unsubscribe(null, m);
              }
            );
          }, []),
          (_ = Object(d.useMemo)(
            function () {
              var e,
                t = z.toLowerCase();
              return L.sort(
                ((e = X.sortDirection),
                function (t, n) {
                  if (Y[t.id] && !Y[n.id]) return -1;
                  if (!Y[t.id] && Y[n.id]) return 1;
                  var r = 0 === e ? 1 : -1;
                  return 'modified' === X.sortField
                    ? r * (t.modified - n.modified)
                    : r * t.title.localeCompare(n.title);
                }),
              )
                .filter(function (e) {
                  return !q.includes(e.id);
                })
                .filter(function (e) {
                  return (
                    e.title.toLowerCase().includes(t) ||
                    e.symbol.toLowerCase().includes(t) ||
                    w(e).toLowerCase().includes(t)
                  );
                })
                .map(function (e) {
                  return f.a.createElement(a, {
                    key: (Y[e.id] ? 'f_' : '') + e.id,
                    chartItem: e,
                    favorite: Boolean(Y[e.id]),
                    searchValue: z,
                    trackEvent: n,
                    afterItemRemove: s,
                    setItemFavorite: u,
                    afterRemoveDialogClose: p,
                    chartItemIntervalText: w(e),
                    chartWidgetCollection: T,
                    onClick: N,
                  });
                });
            },
            [z, X, q, Y],
          )),
          f.a.createElement(O.a, {
            ref: U,
            onClose: x,
            onClickOutside: x,
            isOpened: !0,
            title: window.t('Load layout'),
            dataName: 'load-layout-dialog',
            render: function (e) {
              var n = e.requestResize;
              return (
                (S = n),
                f.a.createElement(
                  f.a.Fragment,
                  null,
                  f.a.createElement(
                    'div',
                    { className: te.searchRow },
                    f.a.createElement('input', {
                      ref: Q,
                      className: te.searchInput,
                      type: 'text',
                      value: P,
                      autoComplete: 'off',
                      'data-role': 'search',
                      placeholder: window.t('Search'),
                      onChange: t,
                    }),
                    f.a.createElement(C.a, {
                      className: te.searchIcon,
                      icon: ee,
                    }),
                  ),
                  f.a.createElement(
                    'div',
                    { className: te.headerRow },
                    f.a.createElement(
                      'div',
                      { className: te.listTitle },
                      window.t('Layout name'),
                    ),
                    f.a.createElement(l, {
                      sortField: X.sortField,
                      sortDirection: X.sortDirection,
                      onSelect: j,
                    }),
                  ),
                  f.a.createElement(
                    D.a,
                    Object(h.__assign)({}, re, {
                      reference: oe,
                      className: te.scrollContainer,
                      onScroll: o,
                    }),
                    f.a.createElement(
                      'div',
                      { className: te.overlapScrollWrap },
                      f.a.createElement(i, Object(h.__assign)({}, $)),
                    ),
                    f.a.createElement(r, {
                      key: [z, X.sortField, X.sortDirection].join('_'),
                      initCount: 10,
                      items: _,
                      onUpdate: c,
                    }),
                  ),
                )
              );
            },
          })
        );
      }
      function u(e, t, n) {
        var r = document.createElement('div');
        m.render(
          d.createElement(s, {
            charts: e,
            favoriteChartsService: t,
            chartWidgetCollection: n,
            onClose: function () {
              m.unmountComponentAtNode(r);
            },
          }),
          r,
        );
      }
      var d,
        f,
        m,
        h,
        v,
        p,
        g,
        b,
        O,
        w,
        j,
        C,
        E,
        D,
        N,
        S,
        y,
        _,
        L,
        x,
        I,
        k,
        T,
        F,
        R,
        z,
        M,
        B,
        P,
        A,
        W,
        q,
        H,
        U,
        K,
        Y,
        V,
        G,
        X,
        J,
        Q,
        Z,
        $,
        ee,
        te,
        ne;
      n.r(t),
        (d = n('q1tI')),
        (f = n.n(d)),
        (m = n('i8i4')),
        (h = n('mrSG')),
        (v = n('Eyy1')),
        (p = n('YFKU')),
        (g = n('Vdly')),
        (b = n('qFKp')),
        (O = n('g89m')),
        (w = 25),
        (j = 25),
        (C = n('jjrI')),
        (E = n('pPtI')),
        (D = n('tmL0')),
        (N = n('TSYQ')),
        (S = n.n(N)),
        (y = n('Hr11')),
        (_ = n('Ialn')),
        (L = n('0lTl')),
        (x = L),
        (I = n('8d0Q')),
        (k = n('ya27')),
        (T = 8),
        (F = n('tWVy')),
        (R = n('ldgD')),
        (z = n.n(R)),
        (M = n('dTSQ')),
        (B = n('LIFs')),
        (P = n('oNDq')),
        (A = n('+EG+')),
        (W = n('BxxN')),
        (q = n('To8B')),
        (H = n('sg5d')),
        (U = n('XfUw')),
        (K = n('iJYK')),
        (Y = Object(p.t)("Do you really want to delete Chart Layout '{0}' ?")),
        (V = n('9dlw')),
        (G = n('Iksw')),
        (X = n('N5tr')),
        (J = n('e5nO')),
        (Q = n('UjII')),
        (Z = n('9COk')),
        ($ = n('jl0v')),
        (ee = n('hYdZ')),
        (te = n('YCUu')),
        (ne = { sortField: 'modified', sortDirection: 1 }),
        n.d(t, 'showLoadChartDialog', function () {
          return u;
        });
    },
    ASyk: function (e, t, n) {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 419px)',
      };
    },
    Iksw: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return function (n, r) {
          var u = Object(o.ensureNotNull)(e).getBoundingClientRect(),
            d = t.verticalAttachEdge,
            f = void 0 === d ? s.verticalAttachEdge : d,
            m = t.verticalDropDirection,
            h = void 0 === m ? s.verticalDropDirection : m,
            v = t.horizontalAttachEdge,
            p = void 0 === v ? s.horizontalAttachEdge : v,
            g = t.horizontalDropDirection,
            b = void 0 === g ? s.horizontalDropDirection : g,
            O = t.horizontalMargin,
            w = void 0 === O ? s.horizontalMargin : O,
            j = t.verticalMargin,
            C = void 0 === j ? s.verticalMargin : j,
            E = f === i.Top ? -1 * C : C,
            D = p === a.Right ? u.right : u.left,
            N = f === i.Top ? u.top : u.bottom,
            S = D - (b === l.FromRightToLeft ? n : 0),
            y = N - (h === c.FromBottomToTop ? r : 0);
          return { x: S + w, y: y + E };
        };
      }
      var o, i, a, c, l, s;
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return c;
        }),
        n.d(t, 'c', function () {
          return r;
        }),
        (o = n('Eyy1')),
        (function (e) {
          (e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom');
        })(i || (i = {})),
        (function (e) {
          (e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right');
        })(a || (a = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
            (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop');
        })(c || (c = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
            (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft');
        })(l || (l = {})),
        (s = {
          verticalAttachEdge: i.Bottom,
          horizontalAttachEdge: a.Left,
          verticalDropDirection: c.FromTopToBottom,
          horizontalDropDirection: l.FromLeftToRight,
          verticalMargin: 0,
          horizontalMargin: 0,
        });
    },
    ItnF: function (e, t, n) {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        dialog: 'dialog-2QwUBM-N',
        wrapper: 'wrapper-3ePvQMAQ',
        header: 'header-wLx8lLYF',
        title: 'title-1G1MZPHW',
        ellipsis: 'ellipsis-DluwX2yc',
        closeButton: 'closeButton-2yDdjHyO',
      };
    },
    LIFs: function (e, t, n) {
      'use strict';
      function r(e) {
        return e.replace(a, c);
      }
      function o(e) {
        return void 0 === e && (e = ''), e.replace(/\s+/g, '');
      }
      function i(e) {
        return (
          void 0 === e && (e = ''),
          e.replace(/\b\w/g, function (e) {
            return e.toUpperCase();
          })
        );
      }
      var a, c;
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'c', function () {
          return o;
        }),
        n.d(t, 'a', function () {
          return i;
        }),
        (a = /[<"'&>]/g),
        (c = function (e) {
          return '&#' + e.charCodeAt(0) + ';';
        });
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    UjII: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>';
    },
    XfUw: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    YCUu: function (e, t, n) {
      e.exports = {
        searchRow: 'searchRow-8yrNbvuM',
        searchInput: 'searchInput-2OB6Aem8',
        searchIcon: 'searchIcon-16f34OF5',
        headerRow: 'headerRow-1uIf2FwA',
        listTitle: 'listTitle-2cKGIeLL',
        overlapScrollWrap: 'overlapScrollWrap-3rg___mI',
        scrollContainer: 'scrollContainer-3rmq57O7',
      };
    },
    e5nO: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>';
    },
    g89m: function (e, t, n) {
      'use strict';
      var r, o, i, a, c, l, s, u, d, f, m, h, v, p, g, b, O, w, j, C;
      n.d(t, 'a', function () {
        return C;
      }),
        (r = n('mrSG')),
        (o = n('q1tI')),
        (i = n.n(o)),
        (a = n('Eyy1')),
        (c = n('TSYQ')),
        (l = n.n(c)),
        (s = n('/3z9')),
        (u = n('d700')),
        (d = n('WXjp')),
        (f = n('uhCe')),
        (m = n('/KDZ')),
        (h = n('jjrI')),
        (v = n('pafz')),
        (p = n('ZjKI')),
        (g = n('FQhm')),
        (b = n('ItnF')),
        (O = n('zztK')),
        (w = { vertical: 20 }),
        (j = { vertical: 0 }),
        (C = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._controller = null),
              (t._reference = null),
              (t._renderChildren = function (e, n) {
                return (
                  (t._controller = e),
                  t.props.render({
                    requestResize: t._requestResize,
                    isSmallWidth: n,
                  })
                );
              }),
              (t._handleReference = function (e) {
                return (t._reference = e);
              }),
              (t._handleClose = function () {
                t.props.onClose();
              }),
              (t._handleKeyDown = function (e) {
                var n, r, o;
                if (!e.defaultPrevented)
                  switch (
                    (t.props.onKeyDown && t.props.onKeyDown(e),
                    Object(s.hashFromEvent)(e))
                  ) {
                    case 27:
                      if (
                        ((n = document.activeElement),
                        (r = Object(a.ensureNotNull)(t._reference)),
                        null !== n)
                      ) {
                        if (
                          (e.preventDefault(),
                          'true' === (o = n).getAttribute('data-haspopup') &&
                            'true' !== o.getAttribute('data-expanded'))
                        )
                          return void t._handleClose();
                        if (Object(u.b)(n)) return void r.focus();
                        if (r.contains(n)) return void t._handleClose();
                      }
                  }
              }),
              (t._requestResize = function () {
                null !== t._controller && t._controller.recalculateBounds();
              }),
              t
            );
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              g.subscribe(
                p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              g.unsubscribe(
                p.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this._handleClose,
                null,
              );
            }),
            (t.prototype.focus = function () {
              Object(a.ensureNotNull)(this._reference).focus();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.className,
                r = t.isOpened,
                o = t.title,
                a = t.dataName,
                c = t.onClickOutside,
                s = t.additionalHeaderElement,
                u = t.backdrop;
              return i.a.createElement(
                m.a,
                { rule: f.a.SmallHeight },
                function (t) {
                  return i.a.createElement(
                    m.a,
                    { rule: f.a.TabletSmall },
                    function (f) {
                      return i.a.createElement(
                        d.a,
                        {
                          className: l()(b.dialog, n),
                          isOpened: r,
                          reference: e._handleReference,
                          onKeyDown: e._handleKeyDown,
                          onClickOutside: c,
                          fullscreen: f,
                          guard: t ? j : w,
                          boundByScreen: f,
                          shouldForceFocus: !0,
                          backdrop: u,
                        },
                        i.a.createElement(
                          'div',
                          {
                            className: b.wrapper,
                            'data-name': a,
                            'data-dialog-name': o,
                          },
                          i.a.createElement(
                            'div',
                            { className: b.header },
                            s,
                            i.a.createElement(
                              'div',
                              { 'data-dragg-area': !0, className: b.title },
                              i.a.createElement(
                                'div',
                                { className: b.ellipsis },
                                o,
                              ),
                            ),
                            i.a.createElement(h.a, {
                              className: b.closeButton,
                              icon: O,
                              onClick: e._handleClose,
                              'data-name': 'close',
                              'data-role': 'button',
                            }),
                          ),
                          i.a.createElement(v.a.Consumer, null, function (t) {
                            return e._renderChildren(t, f);
                          }),
                        ),
                      );
                    },
                  );
                },
              );
            }),
            t
          );
        })(i.a.PureComponent));
    },
    hYdZ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>';
    },
    iJYK: function (e, t, n) {
      e.exports = {
        itemRow: 'itemRow-2KKA9PMh',
        favoriteButton: 'favoriteButton-3Y-d861L',
        active: 'active-2WC510gK',
        itemInfo: 'itemInfo-MYjGuU8P',
        title: 'title-11bOXUH4',
        details: 'details-26jsmfcH',
        highlight: 'highlight-2-UWkYZC',
        removeButton: 'removeButton-2fSCa99u',
        mobile: 'mobile-18-9nnyl',
        favorite: 'favorite-1JYvXv4p',
      };
    },
    jl0v: function (e, t, n) {
      e.exports = { sortButton: 'sortButton-dd-5UpVN', icon: 'icon-OmqELAHN' };
    },
    sg5d: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15" fill="none"><path fill="currentColor" d="M8 0l2.35 4.76 5.26.77-3.8 3.7.9 5.24L8 12l-4.7 2.47.9-5.23L.4 5.53l5.25-.77L8 0z"/></svg>';
    },
    uhCe: function (e, t, n) {
      'use strict';
      var r, o;
      n.d(t, 'a', function () {
        return o;
      }),
        (r = n('ASyk')),
        (o = {
          SmallHeight: r['small-height-breakpoint'],
          TabletSmall: r['tablet-small-breakpoint'],
          TabletNormal: r['tablet-normal-breakpoint'],
        });
    },
    ya27: function (e, t, n) {
      e.exports = { scrollWrap: 'scrollWrap-2ycJ5xsk' };
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
