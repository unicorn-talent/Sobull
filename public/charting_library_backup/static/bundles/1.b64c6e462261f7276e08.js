(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '6uNr': function (e, t, n) {
      e.exports = {
        menuWrap: 'menuWrap-1gEtmoET',
        isMeasuring: 'isMeasuring-FZ0EJCM2',
        scrollWrap: 'scrollWrap-1B5MfTJt',
        momentumBased: 'momentumBased-1Jq4gQt2',
        menuBox: 'menuBox-20sJGjtG',
        isHidden: 'isHidden-2vLQpR1t',
      };
    },
    DTHj: function (e, t, n) {
      'use strict';
      function r(e) {
        var t = Object(s.useState)(null),
          n = t[0],
          r = t[1],
          o = Object(s.useRef)(null),
          i = Object(s.useRef)(new Map());
        return (
          Object(s.useEffect)(function () {
            return function () {
              null !== o.current && clearTimeout(o.current);
            };
          }, []),
          a.a.createElement(
            g.Provider,
            {
              value: {
                current: n,
                setCurrent: function (e) {
                  null !== o.current &&
                    (clearTimeout(o.current), (o.current = null)),
                    null === n
                      ? r(e)
                      : (o.current = setTimeout(function () {
                          (o.current = null), r(e);
                        }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    i.current.set(e, t),
                    function () {
                      i.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(i.current.values()).some(function (t) {
                    return t(e);
                  });
                },
              },
            },
            e.children,
          )
        );
      }
      function o(e) {
        var t = Object(p.ensureNotNull)(Object(s.useContext)(g));
        return a.a.createElement(
          'div',
          {
            className: e.className,
            onMouseOver: function (e) {
              null !== t.current &&
                e.target instanceof Node &&
                (t.isSubmenuNode(e.target) || t.setCurrent(null));
            },
            'data-name': 'menu-inner',
          },
          e.children,
        );
      }
      var i,
        l = n('mrSG'),
        s = n('q1tI'),
        a = n.n(s),
        u = n('TSYQ'),
        c = n.n(u),
        p = n('Eyy1'),
        d = n('Hr11'),
        h = n('XAms'),
        f = n('+EG+'),
        m = n('tWVy'),
        _ = n('jAh7'),
        v = n('lxNp'),
        g = a.a.createContext(null),
        b = n('PN6A'),
        y = n('6uNr');
      n.d(t, 'a', function () {
        return i;
      }),
        (i = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._containerRef = null),
              (n._scrollWrapRef = null),
              (n._raf = null),
              (n._manager = new _.OverlapManager()),
              (n._hotkeys = null),
              (n._scroll = 0),
              (n._handleContainerRef = function (e) {
                (n._containerRef = e),
                  'function' == typeof n.props.reference &&
                    n.props.reference(e),
                  'object' == typeof n.props.reference &&
                    (n.props.reference.current = e);
              }),
              (n._handleScrollWrapRef = function (e) {
                return (n._scrollWrapRef = e);
              }),
              (n._handleMeasure = function (e) {
                var t, r, o, i, l, s, a, u, c, h, f, m, _, v, g, b;
                n.state.isMeasureValid ||
                  ((t = n.props.position),
                  (o = (r = Object(p.ensureNotNull)(
                    n._containerRef,
                  )).getBoundingClientRect()),
                  (i = document.documentElement.clientHeight),
                  (l = document.documentElement.clientWidth),
                  (s = i - 0),
                  (a = o.height > s) &&
                    ((Object(p.ensureNotNull)(
                      n._scrollWrapRef,
                    ).style.overflowY = 'scroll'),
                    (o = r.getBoundingClientRect())),
                  (u = o.width),
                  (c = o.height),
                  (f = 0),
                  (m =
                    l -
                    ((h = 'function' == typeof t ? t(u, c) : t).overrideWidth ||
                      u) -
                    0),
                  (_ = Object(d.clamp)(h.x, f, Math.max(f, m))),
                  (v = 0),
                  (g = i - (h.overrideHeight || c) - 0),
                  (b = Object(d.clamp)(h.y, v, Math.max(v, g))),
                  n.setState(
                    {
                      appearingMenuHeight: h.overrideHeight || (a ? s : void 0),
                      appearingMenuWidth: h.overrideWidth,
                      appearingPosition: { x: _, y: b },
                      isMeasureValid: !0,
                    },
                    function () {
                      n._restoreScrollPosition(), e && e();
                    },
                  ));
              }),
              (n._restoreScrollPosition = function () {
                var e = document.activeElement,
                  t = Object(p.ensureNotNull)(n._containerRef);
                if (null !== e && t.contains(e))
                  try {
                    e.scrollIntoView();
                  } catch (e) {}
                else
                  Object(p.ensureNotNull)(n._scrollWrapRef).scrollTop =
                    n._scroll;
              }),
              (n._resize = function () {
                null === n._raf &&
                  (n._raf = requestAnimationFrame(function () {
                    n.setState({
                      appearingMenuHeight: void 0,
                      appearingMenuWidth: void 0,
                      appearingPosition: void 0,
                      isMeasureValid: void 0,
                    }),
                      (n._raf = null);
                  }));
              }),
              (n._handleGlobalClose = function () {
                n.props.onClose();
              }),
              (n._handleSlot = function (e) {
                n._manager.setContainer(e);
              }),
              (n._handleScroll = function () {
                n._scroll = Object(p.ensureNotNull)(n._scrollWrapRef).scrollTop;
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(l.__extends)(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.props.isOpened &&
                !e.isOpened &&
                (this.setState({ isMeasureValid: void 0 }), (this._scroll = 0));
            }),
            (t.prototype.componentDidMount = function () {
              var e,
                t = this;
              this._handleMeasure(this.props.onOpen),
                (void 0 === (e = this.props.customCloseDelegate)
                  ? m.a
                  : e
                ).subscribe(this, this._handleGlobalClose),
                window.addEventListener('resize', this._resize),
                this._hotkeys ||
                  ((this._hotkeys = v.createGroup({ desc: 'Popup menu' })),
                  this._hotkeys.add({
                    desc: 'Close',
                    hotkey: 27,
                    handler: function () {
                      return t._handleGlobalClose();
                    },
                  }));
            }),
            (t.prototype.componentDidUpdate = function () {
              this._handleMeasure();
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props.customCloseDelegate;
              (void 0 === e ? m.a : e).unsubscribe(
                this,
                this._handleGlobalClose,
              ),
                window.removeEventListener('resize', this._resize),
                this._hotkeys &&
                  (this._hotkeys.destroy(), (this._hotkeys = null)),
                null !== this._raf &&
                  (cancelAnimationFrame(this._raf), (this._raf = null));
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                n = e.minWidth,
                i = e.theme,
                l = void 0 === i ? y : i,
                s = e.className,
                u = e.onMouseOver,
                p = e.onMouseOut,
                d = e.onKeyDown,
                m = this.state,
                _ = m.appearingMenuHeight,
                v = m.appearingMenuWidth,
                g = m.appearingPosition,
                M = m.isMeasureValid;
              return a.a.createElement(
                b.a.Provider,
                { value: this },
                a.a.createElement(
                  r,
                  null,
                  a.a.createElement(
                    f.b.Provider,
                    { value: this._manager },
                    a.a.createElement(
                      'div',
                      {
                        className: c()(s, l.menuWrap, !M && l.isMeasuring),
                        style: {
                          height: _,
                          left: g && g.x,
                          minWidth: n,
                          position: 'fixed',
                          top: g && g.y,
                          width: v,
                        },
                        ref: this._handleContainerRef,
                        onScroll: this.props.onScroll,
                        onContextMenu: h.b,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: u,
                        onMouseOut: p,
                        onKeyDown: d,
                      },
                      a.a.createElement(
                        'div',
                        {
                          className: c()(
                            l.scrollWrap,
                            !this.props.noMomentumBasedScroll &&
                              l.momentumBased,
                          ),
                          style: {
                            overflowY: void 0 !== _ ? 'scroll' : 'auto',
                          },
                          onScroll: this._handleScroll,
                          ref: this._handleScrollWrapRef,
                        },
                        a.a.createElement(o, { className: l.menuBox }, t),
                      ),
                    ),
                  ),
                  a.a.createElement(f.a, { reference: this._handleSlot }),
                ),
              );
            }),
            (t.prototype.update = function () {
              this._resize();
            }),
            t
          );
        })(a.a.PureComponent));
    },
    PN6A: function (e, t, n) {
      'use strict';
      var r, o;
      n.d(t, 'a', function () {
        return o;
      }),
        (r = n('q1tI')),
        (o = n.n(r).a.createContext(null));
    },
  },
]);
