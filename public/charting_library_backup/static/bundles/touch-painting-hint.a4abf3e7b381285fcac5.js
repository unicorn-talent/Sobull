(window.webpackJsonp = window.webpackJsonp || []).push([
  ['touch-painting-hint'],
  {
    '+EG+': function (e, t, n) {
      'use strict';
      var o, r, i, s;
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return s;
        }),
        (o = n('mrSG')),
        (r = n('q1tI')),
        (i = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.shouldComponentUpdate = function () {
              return !1;
            }),
            (t.prototype.render = function () {
              return r.createElement('div', {
                style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
                ref: this.props.reference,
              });
            }),
            t
          );
        })(r.Component)),
        (s = r.createContext(null));
    },
    '79vt': function (e, t, n) {
      e.exports = {
        container: 'container-RYiwcUsM',
        content: 'content-2QNYOBPt',
        arrowHolder: 'arrowHolder-1VdSgMwV',
        'arrowHolder--below': 'arrowHolder--below-FwRPJmQk',
        'arrowHolder--above': 'arrowHolder--above-3dafVndi',
        'arrowHolder--before': 'arrowHolder--before-J9LaRkO3',
        'arrowHolder--after': 'arrowHolder--after-3LNL_hrq',
        'arrowHolder--above-fix': 'arrowHolder--above-fix-1jpQDk8-',
        'arrowHolder--before-rtl-fix': 'arrowHolder--before-rtl-fix-zFykJHSt',
        'arrowHolder--after-ltr-fix': 'arrowHolder--after-ltr-fix-1W2mlyUF',
        label: 'label-2D_bIpcf',
        closeButton: 'closeButton-2425ZrEc',
      };
    },
    AiMB: function (e, t, n) {
      'use strict';
      var o, r, i, s, a, c, l, u;
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        (o = n('mrSG')),
        (r = n('q1tI')),
        (i = n('i8i4')),
        (s = n('0waE')),
        (a = n('jAh7')),
        (c = n('+EG+')),
        (l = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._uuid = Object(s.guid)()), t;
          }
          return (
            Object(o.__extends)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this._manager().removeWindow(this._uuid);
            }),
            (t.prototype.render = function () {
              var e = this._manager().ensureWindow(this._uuid);
              return (
                (e.style.top = this.props.top || ''),
                (e.style.bottom = this.props.bottom || ''),
                (e.style.left = this.props.left || ''),
                (e.style.right = this.props.top || ''),
                (e.style.pointerEvents = this.props.pointerEvents || null),
                i.createPortal(
                  r.createElement(
                    u.Provider,
                    { value: this },
                    this.props.children,
                  ),
                  e,
                )
              );
            }),
            (t.prototype.moveToTop = function () {
              this._manager().moveToTop(this._uuid);
            }),
            (t.prototype._manager = function () {
              return null === this.context
                ? Object(a.getRootOverlapManager)()
                : this.context;
            }),
            (t.contextType = c.b),
            t
          );
        })(r.PureComponent)),
        (u = r.createContext(null));
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    bCMn: function (e, t, n) {
      'use strict';
      function o(e) {
        var t = e.className,
          n = e.reference,
          o = e.style,
          r = e.arrow,
          a = void 0 === r || r,
          c = e.arrowClassName,
          l = e.arrowReference,
          d = e.onClose,
          f = e.arrowStyle,
          m = e.children,
          w = Object(i.__rest)(e, [
            'className',
            'reference',
            'style',
            'arrow',
            'arrowClassName',
            'arrowReference',
            'onClose',
            'arrowStyle',
            'children',
          ]);
        return s.createElement(
          'div',
          Object(i.__assign)({}, w, { className: t, ref: n, style: o }),
          a && s.createElement('div', { className: c, ref: l, style: f }),
          s.createElement(
            'div',
            { className: h.container },
            s.createElement('div', { className: h.content }, m),
            d &&
              s.createElement(u.a, {
                className: h.closeButton,
                icon: p,
                onClick: d,
              }),
          ),
        );
      }
      function r(e) {
        var t = e.isOpened,
          n = e.text,
          r = e.onClose;
        return t
          ? a.a.createElement(
              'div',
              { className: f.container },
              a.a.createElement(
                'div',
                { className: f.centerElement },
                a.a.createElement(
                  o,
                  { arrow: !1, onClose: r },
                  a.a.createElement('div', { className: f.text }, n),
                ),
              ),
            )
          : null;
      }
      var i, s, a, c, l, u, d, p, h, f, m;
      n.r(t),
        (i = n('mrSG')),
        (s = n('q1tI')),
        (a = n.n(s)),
        (c = n('i8i4')),
        (l = n('TSYQ')),
        (u = n('jjrI')),
        (d = n('AiMB')),
        (p = n('To8B')),
        (h = n('79vt')),
        s.PureComponent,
        (f = n('hVcX')),
        n.d(t, 'TouchPaintingHintRenderer', function () {
          return m;
        }),
        (m = (function () {
          function e(e) {
            (this._wrap = document.createElement('div')), (this._container = e);
          }
          return (
            (e.prototype.show = function (e, t) {
              var n,
                o = this;
              this._wrap &&
                (this.hide(),
                this._container.append(this._wrap),
                (n = {
                  isOpened: !0,
                  text: e,
                  onClose: function () {
                    t && t(), o.hide();
                  },
                }),
                c.render(
                  s.createElement(r, Object(i.__assign)({}, n)),
                  this._wrap,
                ));
            }),
            (e.prototype.hide = function () {
              this._wrap &&
                (c.unmountComponentAtNode(this._wrap), this._wrap.remove());
            }),
            (e.prototype.destroy = function () {
              this.hide(), delete this._wrap;
            }),
            e
          );
        })());
    },
    hVcX: function (e, t, n) {
      e.exports = {
        container: 'container-1QhScT-c',
        centerElement: 'centerElement-1wX46nD8',
        text: 'text-1Dfio9N2',
      };
    },
    jAh7: function (e, t, n) {
      'use strict';
      function o(e) {
        var t, n, o;
        return (
          void 0 === e && (e = document),
          null !== (t = e.getElementById('overlap-manager-root'))
            ? Object(r.ensureDefined)(a.get(t))
            : ((n = new s(e)),
              (o = (function (e) {
                var t = e.createElement('div');
                return (
                  (t.style.position = 'absolute'),
                  (t.style.zIndex = (150).toString()),
                  (t.style.top = '0px'),
                  (t.style.left = '0px'),
                  (t.id = 'overlap-manager-root'),
                  t
                );
              })(e)),
              a.set(o, n),
              n.setContainer(o),
              e.body.appendChild(o),
              n)
        );
      }
      var r, i, s, a;
      n.r(t),
        n.d(t, 'OverlapManager', function () {
          return s;
        }),
        n.d(t, 'getRootOverlapManager', function () {
          return o;
        }),
        (r = n('Eyy1')),
        (i = (function () {
          function e() {
            this._storage = [];
          }
          return (
            (e.prototype.add = function (e) {
              this._storage.push(e);
            }),
            (e.prototype.remove = function (e) {
              this._storage = this._storage.filter(function (t) {
                return e !== t;
              });
            }),
            (e.prototype.has = function (e) {
              return this._storage.includes(e);
            }),
            (e.prototype.getItems = function () {
              return this._storage;
            }),
            e
          );
        })()),
        (s = (function () {
          function e(e) {
            void 0 === e && (e = document),
              (this._storage = new i()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = e),
              (this._container = e.createDocumentFragment());
          }
          return (
            (e.prototype.setContainer = function (e) {
              var t = this._container,
                n = null === e ? this._document.createDocumentFragment() : e;
              !(function (e, t) {
                Array.from(e.childNodes).forEach(function (e) {
                  e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
                });
              })(t, n),
                (this._container = n);
            }),
            (e.prototype.registerWindow = function (e) {
              this._storage.has(e) || this._storage.add(e);
            }),
            (e.prototype.ensureWindow = function (e, t) {
              var n, o;
              return (
                void 0 === t && (t = { position: 'fixed' }),
                void 0 !== (n = this._windows.get(e))
                  ? n
                  : (this.registerWindow(e),
                    ((o = this._document.createElement('div')).style.position =
                      t.position),
                    (o.style.zIndex = this._index.toString()),
                    (o.dataset.id = e),
                    this._container.appendChild(o),
                    this._windows.set(e, o),
                    ++this._index,
                    o)
              );
            }),
            (e.prototype.unregisterWindow = function (e) {
              this._storage.remove(e);
              var t = this._windows.get(e);
              void 0 !== t &&
                (null !== t.parentElement && t.parentElement.removeChild(t),
                this._windows.delete(e));
            }),
            (e.prototype.getZindex = function (e) {
              var t = this.ensureWindow(e);
              return parseInt(t.style.zIndex || '0');
            }),
            (e.prototype.moveToTop = function (e) {
              this.getZindex(e) !== this._index &&
                (this.ensureWindow(e).style.zIndex = (++this
                  ._index).toString());
            }),
            (e.prototype.removeWindow = function (e) {
              this.unregisterWindow(e);
            }),
            e
          );
        })()),
        (a = new WeakMap());
    },
    jjrI: function (e, t, n) {
      'use strict';
      function o(e) {
        var t = e.className,
          n = e.icon,
          o = void 0 === n ? '' : n,
          i = e.title,
          a = e.onClick,
          c = e.onMouseDown,
          l = e.onMouseUp,
          u = e.onMouseLeave,
          d = e.reference,
          p = Object(r.__rest)(e, [
            'className',
            'icon',
            'title',
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onMouseLeave',
            'reference',
          ]);
        return s.a.createElement(
          'span',
          Object(r.__assign)({}, p, {
            title: i,
            className: t,
            dangerouslySetInnerHTML: { __html: o },
            onClick: a,
            onMouseDown: c,
            onMouseUp: l,
            onMouseLeave: u,
            ref: d,
          }),
        );
      }
      var r, i, s;
      n.d(t, 'a', function () {
        return o;
      }),
        (r = n('mrSG')),
        (i = n('q1tI')),
        (s = n.n(i));
    },
  },
]);
