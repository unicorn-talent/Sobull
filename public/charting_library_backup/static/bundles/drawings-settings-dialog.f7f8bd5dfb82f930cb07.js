(window.webpackJsonp = window.webpackJsonp || []).push([
  ['drawings-settings-dialog'],
  {
    '3UD+': function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    '5VK0': function (e, t, n) {
      e.exports = {
        scrollWrap: 'scrollWrap-hMorJ3oa',
        tabsWrap: 'tabsWrap-DW4tJckL',
        tabs: 'tabs-2ZEU3acm',
        tab: 'tab-1l4dFt6c',
        withHover: 'withHover-1_-qVdZP',
        headerBottomSeparator: 'headerBottomSeparator-1v9qLLAy',
      };
    },
    '5o6O': function (e, t, n) {
      e.exports = {
        tabs: 'tabs-1LGqoVz6',
        tab: 'tab-1Yr0rq0J',
        noBorder: 'noBorder-oc3HwerO',
        disabled: 'disabled-s8cEYElA',
        active: 'active-37sipdzm',
        defaultCursor: 'defaultCursor-Np9BHjTg',
        slider: 'slider-1-X4lOmE',
        content: 'content-2asssfGq',
      };
    },
    K3s3: function (e, t, n) {
      'use strict';
      function r(e) {
        var t,
          n = a(
            e.className,
            u.tab,
            (((t = {})[u.active] = e.isActive),
            (t[u.disabled] = e.isDisabled),
            (t[u.defaultCursor] = !!e.shouldUseDefaultCursor),
            (t[u.noBorder] = !!e.noBorder),
            t),
          );
        return s.createElement(
          'div',
          { className: n, onClick: e.onClick, ref: e.reference },
          e.children,
        );
      }
      function o(e) {
        return (function (t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.activeTab = { current: null }), e;
          }
          return (
            Object(i.__extends)(n, t),
            (n.prototype.componentDidUpdate = function () {
              var e = Object(c.ensureNotNull)(this._slider),
                t = e.style;
              (t.transition = 'transform 350ms'), this._componentDidUpdate();
            }),
            (n.prototype.componentDidMount = function () {
              this._componentDidUpdate();
            }),
            (n.prototype.render = function () {
              var t = this,
                n = this.props.className,
                r = this._generateTabs();
              return s.createElement(
                'div',
                { className: a(n, u.tabs) },
                r,
                s.createElement(e, {
                  reference: function (e) {
                    t._slider = e;
                  },
                }),
              );
            }),
            (n.prototype._generateTabs = function () {
              var e = this;
              return (
                (this.activeTab.current = null),
                s.Children.map(this.props.children, function (t) {
                  var n = t,
                    r = Boolean(n.props.isActive),
                    o = {
                      reference: function (t) {
                        r && (e.activeTab.current = t),
                          n.props.reference && n.props.reference(t);
                      },
                    };
                  return s.cloneElement(n, o);
                })
              );
            }),
            (n.prototype._componentDidUpdate = function () {
              var e,
                t,
                n = Object(c.ensureNotNull)(this._slider),
                r = n.style;
              this.activeTab.current
                ? ((e = this.activeTab.current.offsetWidth),
                  (t = this.activeTab.current.offsetLeft),
                  (r.transform = 'translateX(' + t + 'px)'),
                  (r.width = e + 'px'),
                  (r.opacity = '1'))
                : (r.opacity = '0');
            }),
            n
          );
        })(s.PureComponent);
      }
      var i, s, a, c, u, p;
      n.d(t, 'a', function () {
        return p;
      }),
        n.d(t, 'b', function () {
          return r;
        }),
        n.d(t, 'c', function () {
          return o;
        }),
        (i = n('mrSG')),
        (s = n('q1tI')),
        (a = n('TSYQ')),
        (c = n('Eyy1')),
        (u = n('5o6O')),
        (p = u),
        o(function (e) {
          return s.createElement('div', {
            className: u.slider,
            ref: e.reference,
          });
        });
    },
    QLaP: function (e, t, n) {
      'use strict';
      e.exports = function (e, t, n, r, o, i, s, a) {
        var c, u, p;
        if (!e)
          throw (
            (void 0 === t
              ? (c = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
                ))
              : ((u = [n, r, o, i, s, a]),
                (p = 0),
                ((c = new Error(
                  t.replace(/%s/g, function () {
                    return u[p++];
                  }),
                )).name = 'Invariant Violation')),
            (c.framesToPop = 1),
            c)
          );
      };
    },
    SLVX: function (e, t, n) {
      'use strict';
      function r(e) {
        var t,
          n = e.Symbol;
        return (
          'function' == typeof n
            ? n.observable
              ? (t = n.observable)
              : ((t = n('observable')), (n.observable = t))
            : (t = '@@observable'),
          t
        );
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    'W/vp': function (e, t, n) {
      'use strict';
      function r() {}
      function o(e) {
        var t,
          n,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = o.getDisplayName,
          s =
            void 0 === i
              ? function (e) {
                  return 'ConnectAdvanced(' + e + ')';
                }
              : i,
          a = o.methodName,
          c = void 0 === a ? 'connectAdvanced' : a,
          u = o.renderCountProp,
          p = void 0 === u ? void 0 : u,
          l = o.shouldHandleStateChanges,
          d = void 0 === l || l,
          f = o.storeKey,
          h = void 0 === f ? 'store' : f,
          b = o.withRef,
          m = void 0 !== b && b,
          y = (function (e, t) {
            var n,
              r = {};
            for (n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(o, [
            'getDisplayName',
            'methodName',
            'renderCountProp',
            'shouldHandleStateChanges',
            'storeKey',
            'withRef',
          ]),
          v = h + 'Subscription',
          g = X++,
          C = (((t = {})[h] = B), (t[v] = W), t),
          P = (((n = {})[v] = W), n);
        return function (t) {
          var n, o, i, a;
          return (
            U()(
              'function' == typeof t,
              'You must pass a component to the function returned by ' +
                c +
                '. Instead received ' +
                JSON.stringify(t),
            ),
            (n = t.displayName || t.name || 'Component'),
            (o = s(n)),
            (i = H({}, y, {
              getDisplayName: s,
              methodName: c,
              renderCountProp: p,
              shouldHandleStateChanges: d,
              storeKey: h,
              withRef: m,
              displayName: o,
              wrappedComponentName: n,
              WrappedComponent: t,
            })),
            ((a = (function (n) {
              function s(e, t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, s);
                var r = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t;
                })(this, n.call(this, e, t));
                return (
                  (r.version = g),
                  (r.state = {}),
                  (r.renderCount = 0),
                  (r.store = e[h] || t[h]),
                  (r.propsMode = Boolean(e[h])),
                  (r.setWrappedInstance = r.setWrappedInstance.bind(r)),
                  U()(
                    r.store,
                    'Could not find "' +
                      h +
                      '" in either the context or props of "' +
                      o +
                      '". Either wrap the root component in a <Provider>, or explicitly pass "' +
                      h +
                      '" as a prop to "' +
                      o +
                      '".',
                  ),
                  r.initSelector(),
                  r.initSubscription(),
                  r
                );
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(s, n),
                (s.prototype.getChildContext = function () {
                  var e,
                    t = this.propsMode ? null : this.subscription;
                  return ((e = {})[v] = t || this.context[v]), e;
                }),
                (s.prototype.componentDidMount = function () {
                  d &&
                    (this.subscription.trySubscribe(),
                    this.selector.run(this.props),
                    this.selector.shouldComponentUpdate && this.forceUpdate());
                }),
                (s.prototype.componentWillReceiveProps = function (e) {
                  this.selector.run(e);
                }),
                (s.prototype.shouldComponentUpdate = function () {
                  return this.selector.shouldComponentUpdate;
                }),
                (s.prototype.componentWillUnmount = function () {
                  this.subscription && this.subscription.tryUnsubscribe(),
                    (this.subscription = null),
                    (this.notifyNestedSubs = r),
                    (this.store = null),
                    (this.selector.run = r),
                    (this.selector.shouldComponentUpdate = !1);
                }),
                (s.prototype.getWrappedInstance = function () {
                  return (
                    U()(
                      m,
                      'To access the wrapped instance, you need to specify { withRef: true } in the options argument of the ' +
                        c +
                        '() call.',
                    ),
                    this.wrappedInstance
                  );
                }),
                (s.prototype.setWrappedInstance = function (e) {
                  this.wrappedInstance = e;
                }),
                (s.prototype.initSelector = function () {
                  var t = e(this.store.dispatch, i);
                  (this.selector = (function (e, t) {
                    var n = {
                      run: function (r) {
                        try {
                          var o = e(t.getState(), r);
                          (o !== n.props || n.error) &&
                            ((n.shouldComponentUpdate = !0),
                            (n.props = o),
                            (n.error = null));
                        } catch (e) {
                          (n.shouldComponentUpdate = !0), (n.error = e);
                        }
                      },
                    };
                    return n;
                  })(t, this.store)),
                    this.selector.run(this.props);
                }),
                (s.prototype.initSubscription = function () {
                  if (d) {
                    var e = (this.propsMode ? this.props : this.context)[v];
                    (this.subscription = new L(
                      this.store,
                      e,
                      this.onStateChange.bind(this),
                    )),
                      (this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(
                        this.subscription,
                      ));
                  }
                }),
                (s.prototype.onStateChange = function () {
                  this.selector.run(this.props),
                    this.selector.shouldComponentUpdate
                      ? ((this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate),
                        this.setState(z))
                      : this.notifyNestedSubs();
                }),
                (s.prototype.notifyNestedSubsOnComponentDidUpdate = function () {
                  (this.componentDidUpdate = void 0), this.notifyNestedSubs();
                }),
                (s.prototype.isSubscribed = function () {
                  return (
                    Boolean(this.subscription) &&
                    this.subscription.isSubscribed()
                  );
                }),
                (s.prototype.addExtraProps = function (e) {
                  if (!(m || p || (this.propsMode && this.subscription)))
                    return e;
                  var t = H({}, e);
                  return (
                    m && (t.ref = this.setWrappedInstance),
                    p && (t[p] = this.renderCount++),
                    this.propsMode &&
                      this.subscription &&
                      (t[v] = this.subscription),
                    t
                  );
                }),
                (s.prototype.render = function () {
                  var e = this.selector;
                  if (((e.shouldComponentUpdate = !1), e.error)) throw e.error;
                  return Object(O.createElement)(
                    t,
                    this.addExtraProps(e.props),
                  );
                }),
                s
              );
            })(O.Component)).WrappedComponent = t),
            (a.displayName = o),
            (a.childContextTypes = P),
            (a.contextTypes = C),
            (a.propTypes = C),
            A()(a, t)
          );
        };
      }
      function i(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      function s(e, t) {
        var n, r, o;
        if (i(e, t)) return !0;
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof t ||
          null === t
        )
          return !1;
        if (((n = Object.keys(e)), (r = Object.keys(t)), n.length !== r.length))
          return !1;
        for (o = 0; o < n.length; o++)
          if (!K.call(t, n[o]) || !i(e[n[o]], t[n[o]])) return !1;
        return !0;
      }
      function a(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }
      function c(e) {
        return function (t, n) {
          function r() {
            return o;
          }
          var o = e(t, n);
          return (r.dependsOnOwnProps = !1), r;
        };
      }
      function u(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function p(e, t) {
        return function (t, n) {
          n.displayName;
          var r = function (e, t) {
            return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
          };
          return (
            (r.dependsOnOwnProps = !0),
            (r.mapToProps = function (t, n) {
              (r.mapToProps = e), (r.dependsOnOwnProps = u(e));
              var o = r(t, n);
              return (
                'function' == typeof o &&
                  ((r.mapToProps = o),
                  (r.dependsOnOwnProps = u(o)),
                  (o = r(t, n))),
                o
              );
            }),
            r
          );
        };
      }
      function l(e, t, n) {
        return Ce({}, n, e, t);
      }
      function d(e, t, n, r) {
        return function (o, i) {
          return n(e(o, i), t(r, i), i);
        };
      }
      function f(e, t, n, r, o) {
        function i(o, i) {
          var u,
            b,
            m = !a(i, l),
            y = !s(o, p);
          return (
            (p = o),
            (l = i),
            m && y
              ? ((d = e(p, l)),
                t.dependsOnOwnProps && (f = t(r, l)),
                (h = n(d, f, l)))
              : m
              ? (e.dependsOnOwnProps && (d = e(p, l)),
                t.dependsOnOwnProps && (f = t(r, l)),
                (h = n(d, f, l)))
              : y
              ? ((u = e(p, l)),
                (b = !c(u, d)),
                (d = u),
                b && (h = n(d, f, l)),
                h)
              : h
          );
        }
        var s = o.areStatesEqual,
          a = o.areOwnPropsEqual,
          c = o.areStatePropsEqual,
          u = !1,
          p = void 0,
          l = void 0,
          d = void 0,
          f = void 0,
          h = void 0;
        return function (o, s) {
          return u
            ? i(o, s)
            : ((d = e((p = o), (l = s))),
              (f = t(r, l)),
              (h = n(d, f, l)),
              (u = !0),
              h);
        };
      }
      function h(e, t) {
        var n = t.initMapStateToProps,
          r = t.initMapDispatchToProps,
          o = t.initMergeProps,
          i = (function (e, t) {
            var n,
              r = {};
            for (n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(t, [
            'initMapStateToProps',
            'initMapDispatchToProps',
            'initMergeProps',
          ]),
          s = n(e, i),
          a = r(e, i),
          c = o(e, i);
        return (i.pure ? f : d)(s, a, c, e, i);
      }
      function b(e, t, n) {
        var r, o;
        for (r = t.length - 1; r >= 0; r--) if ((o = t[r](e))) return o;
        return function (t, r) {
          throw new Error(
            'Invalid value of type ' +
              typeof e +
              ' for ' +
              n +
              ' argument when connecting component ' +
              r.wrappedComponentName +
              '.',
          );
        };
      }
      function m(e, t) {
        return e === t;
      }
      function y(e) {
        var t = e.name,
          n = e.onRemove,
          r = e.onClick,
          o = Object(xe.b)(),
          i = o[0],
          s = o[1];
        return O.createElement(
          'div',
          Object(_.__assign)({}, s),
          O.createElement(je.b, {
            className: Ne.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: function () {
              r(t);
            },
            toolbox:
              n &&
              O.createElement(Ee.a, {
                hidden: !Modernizr.mobiletouch && !i,
                onClick: function () {
                  n && n(t);
                },
              }),
          }),
        );
      }
      function v(e) {
        function t() {
          n.restorePropertiesForSource(r);
        }
        var n = e.model,
          r = e.source;
        return C.a.createElement(
          Te.a,
          { rule: 'screen and (max-width: 768px)' },
          function (e) {
            return C.a.createElement(Se.a, {
              className: !e && Ne.themesButtonText,
              items: [
                {
                  value: 'defaults',
                  readonly: !0,
                  content: '',
                  selectedContent: e
                    ? C.a.createElement(_e.a, {
                        className: Ne.themesButtonIcon,
                        icon: De,
                      })
                    : window.t('Template'),
                },
                {
                  readonly: !0,
                  content: C.a.createElement(y, {
                    onClick: t,
                    name: window.t('Apply Defaults'),
                  }),
                },
              ],
              hideArrowButton: e,
              value: 'defaults',
            });
          },
        );
      }
      function g(e) {
        return C.a.createElement(v, Object(_.__assign)({}, e));
      }
      var O,
        C,
        P,
        w,
        _,
        S,
        T,
        j,
        E,
        x,
        N,
        D,
        I,
        k,
        q,
        W,
        B,
        M,
        A,
        R,
        U,
        V,
        F,
        L,
        H,
        X,
        z,
        K,
        Q,
        Y,
        G,
        J,
        Z,
        $,
        ee,
        te,
        ne,
        re,
        oe,
        ie,
        se,
        ae,
        ce,
        ue,
        pe,
        le,
        de,
        fe,
        he,
        be,
        me,
        ye,
        ve,
        ge,
        Oe,
        Ce,
        Pe,
        we,
        _e,
        Se,
        Te,
        je,
        Ee,
        xe,
        Ne,
        De,
        Ie,
        ke,
        qe,
        We,
        Be,
        Me,
        Ae,
        Re,
        Ue,
        Ve;
      n.r(t),
        n('YFKU'),
        (O = n('q1tI')),
        (C = n.n(O)),
        (P = n('i8i4')),
        (w = n('FQhm')),
        (_ = n('mrSG')),
        n('bSeV'),
        (S = n('qFKp')),
        (T = n('Vdly')),
        (j = n.n(T)),
        (E = n('ycFu')),
        (x = n('tWVy')),
        (N = n('Q+1u')),
        (D = n('aDg1')),
        (I = n('bvfV')),
        (k = n('17x9')),
        (W = (q = n.n(k)).a.shape({
          trySubscribe: q.a.func.isRequired,
          tryUnsubscribe: q.a.func.isRequired,
          notifyNestedSubs: q.a.func.isRequired,
          isSubscribed: q.a.func.isRequired,
        })),
        (B = q.a.shape({
          subscribe: q.a.func.isRequired,
          dispatch: q.a.func.isRequired,
          getState: q.a.func.isRequired,
        })),
        (function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'store',
            n = arguments[1],
            r = n || t + 'Subscription',
            o = (function (e) {
              function n(r, o) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, n);
                var i = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t;
                })(this, e.call(this, r, o));
                return (i[t] = r.store), i;
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof t,
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(n, e),
                (n.prototype.getChildContext = function () {
                  var e;
                  return ((e = {})[t] = this[t]), (e[r] = null), e;
                }),
                (n.prototype.render = function () {
                  return O.Children.only(this.props.children);
                }),
                n
              );
            })(O.Component);
          (o.propTypes = {
            store: B.isRequired,
            children: q.a.element.isRequired,
          }),
            (o.childContextTypes =
              (((e = {})[t] = B.isRequired), (e[r] = W), e));
        })(),
        (M = n('dWyf')),
        (A = n.n(M)),
        (R = n('QLaP')),
        (U = n.n(R)),
        (V = null),
        (F = { notify: function () {} }),
        (L = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.store = t),
              (this.parentSub = n),
              (this.onStateChange = r),
              (this.unsubscribe = null),
              (this.listeners = F);
          }
          return (
            (e.prototype.addNestedSub = function (e) {
              return this.trySubscribe(), this.listeners.subscribe(e);
            }),
            (e.prototype.notifyNestedSubs = function () {
              this.listeners.notify();
            }),
            (e.prototype.isSubscribed = function () {
              return Boolean(this.unsubscribe);
            }),
            (e.prototype.trySubscribe = function () {
              var e, t;
              this.unsubscribe ||
                ((this.unsubscribe = this.parentSub
                  ? this.parentSub.addNestedSub(this.onStateChange)
                  : this.store.subscribe(this.onStateChange)),
                (this.listeners =
                  ((e = []),
                  (t = []),
                  {
                    clear: function () {
                      (t = V), (e = V);
                    },
                    notify: function () {
                      var n,
                        r = (e = t);
                      for (n = 0; n < r.length; n++) r[n]();
                    },
                    get: function () {
                      return t;
                    },
                    subscribe: function (n) {
                      var r = !0;
                      return (
                        t === e && (t = e.slice()),
                        t.push(n),
                        function () {
                          r &&
                            e !== V &&
                            ((r = !1),
                            t === e && (t = e.slice()),
                            t.splice(t.indexOf(n), 1));
                        }
                      );
                    },
                  })));
            }),
            (e.prototype.tryUnsubscribe = function () {
              this.unsubscribe &&
                (this.unsubscribe(),
                (this.unsubscribe = null),
                this.listeners.clear(),
                (this.listeners = F));
            }),
            e
          );
        })()),
        (H =
          Object.assign ||
          function (e) {
            var t, n, r;
            for (t = 1; t < arguments.length; t++)
              for (r in (n = arguments[t]))
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e;
          }),
        (X = 0),
        (z = {}),
        (K = Object.prototype.hasOwnProperty),
        n('bCCX'),
        (Q = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        })(),
        Q(),
        (Y = n('XqMk')),
        (G = 'object' == typeof self && self && self.Object === Object && self),
        (J = (Y.a || G || Function('return this')()).Symbol),
        (Z = Object.prototype),
        ($ = Z.hasOwnProperty),
        (ee = Z.toString),
        (te = J ? J.toStringTag : void 0),
        (ne = function (e) {
          var t,
            n,
            r = $.call(e, te),
            o = e[te];
          try {
            (e[te] = void 0), (t = !0);
          } catch (e) {}
          return (n = ee.call(e)), t && (r ? (e[te] = o) : delete e[te]), n;
        }),
        (re = Object.prototype),
        (oe = re.toString),
        (ie = function (e) {
          return oe.call(e);
        }),
        (se = '[object Null]'),
        (ae = '[object Undefined]'),
        (ce = J ? J.toStringTag : void 0),
        (ue = function (e) {
          return null == e
            ? void 0 === e
              ? ae
              : se
            : ce && ce in Object(e)
            ? ne(e)
            : ie(e);
        }),
        (pe = (function (e, t) {
          return function (n) {
            return e(t(n));
          };
        })(Object.getPrototypeOf, Object)),
        (le = pe),
        (de = function (e) {
          return null != e && 'object' == typeof e;
        }),
        (fe = '[object Object]'),
        (he = Function.prototype),
        (be = Object.prototype),
        (me = he.toString),
        (ye = be.hasOwnProperty),
        (ve = me.call(Object)),
        (ge = [
          function (e) {
            return 'function' == typeof e ? p(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : c(function (e) {
                  return { dispatch: e };
                });
          },
          function (e) {
            return e && 'object' == typeof e
              ? c(function (t) {
                  return (function (e, t) {
                    var n, r, o, i, s;
                    if ('function' == typeof e) return a(e, t);
                    if ('object' != typeof e || null === e)
                      throw new Error(
                        'bindActionCreators expected an object or a function, instead received ' +
                          (null === e ? 'null' : typeof e) +
                          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?',
                      );
                    for (n = Object.keys(e), r = {}, o = 0; o < n.length; o++)
                      'function' == typeof (s = e[(i = n[o])]) &&
                        (r[i] = a(s, t));
                    return r;
                  })(e, t);
                })
              : void 0;
          },
        ]),
        (Oe = [
          function (e) {
            return 'function' == typeof e ? p(e) : void 0;
          },
          function (e) {
            return e
              ? void 0
              : c(function () {
                  return {};
                });
          },
        ]),
        (Ce =
          Object.assign ||
          function (e) {
            var t, n, r;
            for (t = 1; t < arguments.length; t++)
              for (r in (n = arguments[t]))
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e;
          }),
        (Pe = [
          function (e) {
            return 'function' == typeof e
              ? (function (e) {
                  return function (t, n) {
                    n.displayName;
                    var r = n.pure,
                      o = n.areMergedPropsEqual,
                      i = !1,
                      s = void 0;
                    return function (t, n, a) {
                      var c = e(t, n, a);
                      return (
                        i ? (r && o(c, s)) || (s = c) : ((i = !0), (s = c)), s
                      );
                    };
                  };
                })(e)
              : void 0;
          },
          function (e) {
            return e
              ? void 0
              : function () {
                  return l;
                };
          },
        ]),
        (we =
          Object.assign ||
          function (e) {
            var t, n, r;
            for (t = 1; t < arguments.length; t++)
              for (r in (n = arguments[t]))
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            return e;
          }),
        (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.connectHOC,
            n = void 0 === t ? o : t,
            r = e.mapStateToPropsFactories,
            i = void 0 === r ? Oe : r,
            s = e.mapDispatchToPropsFactories,
            a = void 0 === s ? ge : s,
            c = e.mergePropsFactories,
            u = void 0 === c ? Pe : c,
            p = e.selectorFactory,
            l = void 0 === p ? h : p;
        })(),
        (_e = n('jjrI')),
        (Se = n('H172')),
        (Te = n('/KDZ')),
        n('bf9a'),
        (je = n('N5tr')),
        (Ee = n('i/MG')),
        (xe = n('8d0Q')),
        (Ne = n('q2ee')),
        (De = n('HWhk')),
        (Ie = n('tmL0')),
        (ke = n('ybVX')),
        ((qe = {})['Elliott Impulse Wave (12345)Degree'] = 'normal'),
        (qe['Elliott Triangle Wave (ABCDE)Degree'] = 'normal'),
        (qe['Elliott Triple Combo Wave (WXYXZ)Degree'] = 'normal'),
        (qe['Elliott Correction Wave (ABC)Degree'] = 'normal'),
        (qe['Elliott Double Combo Wave (WXY)Degree'] = 'normal'),
        (qe.BarsPatternMode = 'normal'),
        (Be = qe),
        ((We = {}).TextText = 'big'),
        (We.AnchoredTextText = 'big'),
        (We.NoteText = 'big'),
        (We.AnchoredNoteText = 'big'),
        (We.CalloutText = 'big'),
        (We.BalloonText = 'big'),
        (Me = We),
        (Ae = n('ejTA')),
        (Re = 'properties_dialog.active_tab.drawing'),
        (Ue = (function (e) {
          function t(t) {
            var n,
              r,
              o,
              i,
              s = e.call(this, t) || this;
            return (
              (s._activePageRef = O.createRef()),
              (s._renderFooterLeft = function () {
                var e = s.props,
                  t = e.source,
                  n = e.model;
                return O.createElement(g, { source: t, model: n });
              }),
              (s._handleSelectPage = function (e) {
                j.a.setValue(Re, e),
                  s.setState({ activePageId: e }, function () {
                    s._requestResize && s._requestResize(),
                      s._focusActivePageFirstTextInput();
                  }),
                  s.props.onActiveTabChanged && s.props.onActiveTabChanged(e);
              }),
              (s._handleScroll = function () {
                x.a.fire();
              }),
              (s._handleSubmit = function () {
                s.props.onSubmit(), s._closePopupDialog();
              }),
              (s._closePopupDialog = function () {
                window.lineToolPropertiesToolbar &&
                  window.lineToolPropertiesToolbar.refresh(),
                  s.setState({ dialogIsOpened: !1 }),
                  s.props.onClose();
              }),
              (r = ''),
              (n = s.props.pages).find(function (e) {
                return e.id === s.props.activePageId;
              }) ||
                ((o = j.a.getValue(Re, '')),
                (r = (i = n.find(function (e) {
                  return e.id.toLowerCase() === o.toLowerCase();
                }))
                  ? i.id
                  : n[0].id)),
              (s.state = { dialogIsOpened: !0, activePageId: r }),
              window.lineToolPropertiesToolbar &&
                window.lineToolPropertiesToolbar.hide(),
              s
            );
          }
          return (
            Object(_.__extends)(t, e),
            (t.prototype.componentDidMount = function () {
              this._focusActivePageFirstTextInput();
            }),
            (t.prototype.componentWillUnmount = function () {
              clearTimeout(this._timeout);
            }),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.dialogIsOpened,
                n = e.activePageId;
              return O.createElement(E.a, {
                dataName: 'drawings-settings-dialog',
                title: this.props.source.title(),
                isOpened: t,
                onSubmit: this._handleSubmit,
                onCancel: this.props.onCancel,
                onClickOutside: this._handleSubmit,
                onClose: this._closePopupDialog,
                footerLeftRenderer: this._renderFooterLeft,
                render: this._renderChildren(n),
                submitOnEnterKey: !1,
              });
            }),
            (t.prototype._renderChildren = function (e) {
              var t = this;
              return function (n) {
                var r,
                  o,
                  i,
                  s = n.requestResize;
                return (
                  (t._requestResize = s),
                  (o = {
                    allIds: (r = t.props.pages).map(function (e) {
                      return e.id;
                    }),
                    byId: r.reduce(function (e, t) {
                      var n;
                      return Object(_.__assign)(
                        Object(_.__assign)({}, e),
                        (((n = {})[t.id] = { title: t.title }), n),
                      );
                    }, {}),
                  }),
                  (i = r.find(function (t) {
                    return t.id === e;
                  })),
                  O.createElement(
                    O.Fragment,
                    null,
                    O.createElement(D.a, {
                      activeTabId: e,
                      onSelect: t._handleSelectPage,
                      tabs: o,
                    }),
                    O.createElement(
                      Ie.a,
                      { className: Ae.scrollable, onScroll: t._handleScroll },
                      O.createElement(
                        ke.a.Provider,
                        { value: Me },
                        O.createElement(
                          ke.b.Provider,
                          { value: Be },
                          i &&
                            O.createElement(
                              N.a,
                              { reference: t._activePageRef },
                              i.definitions.value().map(function (e) {
                                return O.createElement(I.a, {
                                  key: e.id,
                                  definition: e,
                                });
                              }),
                            ),
                        ),
                      ),
                    ),
                  )
                );
              };
            }),
            (t.prototype._focusActivePageFirstTextInput = function () {
              if (!S.CheckMobile.any() && this._activePageRef.current) {
                var e = this._activePageRef.current.querySelector(
                  'input[type=text],textarea',
                );
                e &&
                  (this._timeout = setTimeout(function () {
                    e.focus();
                  }, 0));
              }
            }),
            t
          );
        })(O.PureComponent)),
        n.d(t, 'DrawingsSettingsDialogRenderer', function () {
          return Ve;
        }),
        (Ve = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this._isVisible = !1),
              (this._handleClose = function () {
                P.unmountComponentAtNode(t._container),
                  (t._isVisible = !1),
                  t._onClose && t._onClose();
              }),
              (this._handleSubmit = function () {
                var e = t._source;
                e.hasAlert.value() &&
                  setTimeout(function () {
                    e.localAndServerAlersMismatch && e.synchronizeAlert(!0);
                  });
              }),
              (this._handleCancel = function () {
                t._model.undoToCheckpoint(t._checkpoint);
              }),
              (this._propertyPages = e.propertyPages),
              (this._model = e.model),
              (this._activePageId = e.activePageId),
              (this._onClose = e.onClose),
              (this._source = e.source),
              (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint));
          }
          return (
            (e.prototype.hide = function (e) {
              e ? this._handleCancel() : this._handleSubmit(),
                this._handleClose();
            }),
            (e.prototype.isVisible = function () {
              return this._isVisible;
            }),
            (e.prototype.focusOnText = function () {}),
            (e.prototype.show = function () {
              P.render(
                O.createElement(Ue, {
                  source: this._source,
                  onSubmit: this._handleSubmit,
                  onClose: this._handleClose,
                  onCancel: this._handleCancel,
                  pages: this._propertyPages,
                  model: this._model,
                  activePageId: this._activePageId,
                }),
                this._container,
              ),
                (this._isVisible = !0),
                w.emit('drawings_settings_dialog', {
                  objectType: 'drawing',
                  scriptTitle: this._source.title(),
                });
            }),
            (e.prototype._ensureCheckpoint = function (e) {
              return (
                void 0 === e && (e = this._model.createUndoCheckpoint()), e
              );
            }),
            e
          );
        })());
    },
    XqMk: function (e, t, n) {
      'use strict';
      (function (e) {
        var n = 'object' == typeof e && e && e.Object === Object && e;
        t.a = n;
      }.call(this, n('yLpj')));
    },
    aDg1: function (e, t, n) {
      'use strict';
      var r,
        o,
        i = n('mrSG'),
        s = (n('bf9a'), n('q1tI')),
        a = n('TSYQ'),
        c = n('K3s3'),
        u = n('nPPD'),
        p = n('dMmr'),
        l = Object(u.a)(c.a, p),
        d = n('4Cm8'),
        f = n('5VK0');
      n.d(t, 'a', function () {
        return o;
      }),
        (r = Object(c.c)(function (e) {
          return s.createElement(
            'div',
            { className: l.slider, ref: e.reference },
            s.createElement('div', { className: l.inner }),
          );
        })),
        (o = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._createClickHandler = function (e) {
                return function () {
                  t.props.onSelect(e);
                };
              }),
              t
            );
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this._generateDialogTabs();
              return s.createElement(
                'div',
                { className: f.scrollWrap },
                s.createElement('div', { className: f.headerBottomSeparator }),
                s.createElement(
                  d.a,
                  {
                    isVisibleFade: Modernizr.mobiletouch,
                    isVisibleButtons: !Modernizr.mobiletouch,
                    isVisibleScrollbar: !1,
                  },
                  s.createElement(
                    'div',
                    { className: f.tabsWrap },
                    s.createElement(r, { className: f.tabs }, e),
                  ),
                ),
              );
            }),
            (t.prototype._generateDialogTabs = function () {
              var e = this,
                t = this.props,
                n = t.activeTabId,
                r = t.tabs;
              return r.allIds.map(function (t) {
                var o = n === t;
                return s.createElement(
                  c.b,
                  {
                    key: t,
                    className: a(f.tab, !o && f.withHover),
                    isActive: o,
                    onClick: e._createClickHandler(t),
                  },
                  r.byId[t].title,
                );
              });
            }),
            t
          );
        })(s.PureComponent));
    },
    bCCX: function (e, t, n) {
      'use strict';
      (function (e, r) {
        var o,
          i,
          s = n('SLVX');
        (o =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : void 0 !== e
            ? e
            : r),
          (i = Object(s.a)(o)),
          (t.a = i);
      }.call(this, n('yLpj'), n('3UD+')(e)));
    },
    dMmr: function (e, t, n) {
      e.exports = { slider: 'slider-2TOmsMP8', inner: 'inner-21p4mP7K' };
    },
    dWyf: function (e, t, n) {
      'use strict';
      var r = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        a = Object.getOwnPropertySymbols,
        c = Object.getOwnPropertyDescriptor,
        u = Object.getPrototypeOf,
        p = u && u(Object);
      e.exports = function e(t, n, l) {
        var d, f, h, b, m;
        if ('string' != typeof n) {
          for (
            p && (d = u(n)) && d !== p && e(t, d, l),
              f = s(n),
              a && (f = f.concat(a(n))),
              h = 0;
            h < f.length;
            ++h
          )
            if (((b = f[h]), !(r[b] || o[b] || (l && l[b])))) {
              m = c(n, b);
              try {
                i(t, b, m);
              } catch (e) {}
            }
          return t;
        }
        return t;
      };
    },
    ejTA: function (e, t, n) {
      e.exports = { scrollable: 'scrollable-3o4ssz0p' };
    },
    nPPD: function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        var r, o, i, s, a;
        for (
          void 0 === n && (n = {}),
            r = Object.assign({}, t),
            o = 0,
            i = Object.keys(t);
          o < i.length;
          o++
        )
          (a = n[(s = i[o])] || s) in e && (r[s] = [e[a], t[s]].join(' '));
        return r;
      }
      function o(e, t, n) {
        return void 0 === n && (n = {}), Object.assign({}, e, r(e, t, n));
      }
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return o;
        });
    },
    q2ee: function (e, t, n) {
      e.exports = {
        themesButtonText: 'themesButtonText-1nSylpjO',
        themesButtonIcon: 'themesButtonIcon-1g1iNDD6',
        defaultsButtonText: 'defaultsButtonText-382eZaQe',
        defaultsButtonItem: 'defaultsButtonItem-2pXzIW-S',
      };
    },
  },
]);
