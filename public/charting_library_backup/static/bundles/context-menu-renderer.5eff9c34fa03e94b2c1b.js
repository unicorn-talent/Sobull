(window.webpackJsonp = window.webpackJsonp || []).push([
  ['context-menu-renderer'],
  {
    'G/dZ': function (e, t, n) {
      e.exports = { toolbox: 'toolbox-1zer1221-' };
    },
    Gpmm: function (e, t, n) {
      e.exports = {
        row: 'row-1Gn06tA2-',
        line: 'line-c_e_alAN-',
        hint: 'hint-18i4fysm-',
      };
    },
    K5ke: function (e, t, n) {
      e.exports = {
        loader: 'loader-3Pj8ExOX-',
        item: 'item-2n55_7om-',
        'tv-button-loader': 'tv-button-loader-SKpJjjYw-',
        black: 'black-eFIQWyf4-',
        white: 'white-2Ma0ajvT-',
        gray: 'gray-24fvVR0S-',
      };
    },
    X64X: function (e, t, n) {
      e.exports = {
        loaderWrap: 'loaderWrap-18NjkayD-',
        loader: 'loader-Cgjcl0qz-',
      };
    },
    cbq4: function (e, t, n) {
      'use strict';
      function o(e) {
        return l.createElement(
          'tr',
          { className: _.row },
          l.createElement(
            'td',
            null,
            l.createElement('div', { className: _.line }),
          ),
          l.createElement(
            'td',
            null,
            l.createElement('div', { className: _.line }),
            e.hint
              ? l.createElement('div', { className: _.hint }, e.hint)
              : null,
          ),
        );
      }
      function s(e) {
        return l.createElement(C, { icon: w, onClick: e.onClick });
      }
      function r(e) {
        return l.createElement(E, {
          label: l.createElement(
            'div',
            { className: g.loaderWrap },
            l.createElement(O.a, { className: g.loader, color: 'gray' }),
          ),
          noInteractive: !0,
          onMouseOver: e.onMouseOver,
        });
      }
      function i(e) {
        return l.createElement(E, {
          label: e.label,
          noInteractive: !0,
          disabled: !0,
          onMouseOver: e.onMouseOver,
        });
      }
      var a,
        l,
        c,
        u,
        p,
        h,
        m,
        d,
        _,
        f,
        v,
        b,
        S,
        y,
        C,
        w,
        E,
        k,
        x,
        N,
        M,
        g,
        O,
        I,
        T,
        D,
        H,
        P,
        A,
        j;
      n.r(t),
        (a = n('mrSG')),
        (l = n('q1tI')),
        (c = n('i8i4')),
        (u = n('DTHj')),
        (p = n('RgaO')),
        (h = n('ycI/')),
        (m = n('TSYQ')),
        (d = n('zRdu')),
        (_ = n('Gpmm')),
        (f = n('ycgn')),
        (v = n('euMy')),
        (b = n('hn2c')),
        n('bf9a'),
        (S = n('L/Ed')),
        (y = n('G/dZ')),
        (C = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleClick = function (e) {
                t.props.onClick(e.nativeEvent);
              }),
              t
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.render = function () {
              return l.createElement('span', {
                className: y.toolbox,
                dangerouslySetInnerHTML: { __html: this.props.icon },
                onClick: this._handleClick,
                'data-toolbox-icon': !0,
              });
            }),
            t
          );
        })(l.PureComponent)),
        (w = n('PgQx')),
        (E = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._handleMouseOver = function (e) {
                var n, o, s;
                ((n = e.nativeEvent),
                (o = n.sourceCapabilities),
                void 0 === (s = o && o.firesTouchEvents) &&
                  (s = Modernizr.touch),
                s) ||
                  (t.props.onMouseOver && t.props.onMouseOver());
              }),
              (t._handleClickToolbox = function (e) {
                e.stopPropagation(),
                  t.props.onClickToolbox && t.props.onClickToolbox();
              }),
              t
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.render = function () {
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  'tr',
                  {
                    className: m(
                      f.item,
                      !this.props.noInteractive && f.interactive,
                      this.props.hovered && f.hovered,
                      this.props.disabled && f.disabled,
                      this.props.active && f.active,
                    ),
                    onClick: this.props.onClick,
                    onMouseOver: this._handleMouseOver,
                    ref: this.props.reference,
                    'data-action-name': this.props.actionName,
                  },
                  l.createElement(
                    'td',
                    { className: m(f.iconCell), 'data-icon-cell': !0 },
                    this._icon(),
                  ),
                  l.createElement(
                    'td',
                    null,
                    l.createElement(
                      'div',
                      { className: f.content },
                      l.createElement(
                        'span',
                        {
                          className: m(
                            f.label,
                            this.props.checked && f.checked,
                          ),
                          'data-label': !0,
                        },
                        this.props.label,
                      ),
                      this._toolbox(),
                      this.props.hasSubItems
                        ? l.createElement('span', {
                            className: f.arrowIcon,
                            dangerouslySetInnerHTML: { __html: b },
                            'data-submenu-arrow': !0,
                          })
                        : null,
                      !this.props.hasSubItems && this.props.shortcutHint
                        ? l.createElement(
                            'span',
                            { className: f.shortcut },
                            this.props.shortcutHint,
                          )
                        : null,
                    ),
                  ),
                ),
                l.createElement(
                  'tr',
                  { className: f.subMenu },
                  l.createElement('td', null, this.props.children),
                ),
              );
            }),
            (t.prototype._icon = function () {
              var e, t;
              return this.props.checkable
                ? this.props.checked
                  ? ((e = !this.props.icon && !this.props.iconChecked),
                    (t = this.props.iconChecked || this.props.icon || v),
                    l.createElement('span', {
                      className: m(f.icon, e && f.checkmark),
                      dangerouslySetInnerHTML: { __html: t },
                      'data-icon-checkmark': e,
                    }))
                  : this.props.icon
                  ? l.createElement('span', {
                      className: f.icon,
                      dangerouslySetInnerHTML: { __html: this.props.icon },
                    })
                  : l.createElement('span', { className: f.icon })
                : this.props.icon
                ? l.createElement('span', {
                    className: f.icon,
                    dangerouslySetInnerHTML: { __html: this.props.icon },
                  })
                : null;
            }),
            (t.prototype._toolbox = function () {
              return this.props.toolbox
                ? l.createElement(
                    'span',
                    {
                      className: m(
                        f.toolbox,
                        this.props.showToolboxOnHover && f.showToolboxOnHover,
                      ),
                      onClick: this._handleClickToolbox,
                      'data-toolbox': !0,
                    },
                    this._renderToolboxContent(),
                  )
                : null;
            }),
            (t.prototype._renderToolboxContent = function () {
              if (this.props.toolbox)
                switch (this.props.toolbox.type) {
                  case S.ToolboxType.Delete:
                    return l.createElement(s, {
                      onClick: this.props.toolbox.action,
                    });
                }
              return null;
            }),
            t
          );
        })(l.PureComponent)),
        (k = n('tWVy')),
        (x = n('tITk')),
        (N = n('Ialn')),
        (M = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._itemRef = null),
              (n._handleClick = function (e) {
                e.isDefaultPrevented() ||
                  n.state.disabled ||
                  (n._hasSubItems()
                    ? n._showSubMenu()
                    : (n.state.doNotCloseOnClick || Object(k.b)(),
                      n.props.action.execute(),
                      n._trackEvent()));
              }),
              (n._handleClickToolbox = function () {
                Object(k.b)();
              }),
              (n._showSubMenu = function () {
                n.props.onShowSubMenu(n.props.action);
              }),
              (n._calcSubMenuPos = function (e, t) {
                var o, s, r, i, a, l, c;
                return n._itemRef
                  ? ((s = (o = n._itemRef.getBoundingClientRect()).left),
                    (r = o.right),
                    (i = o.top),
                    (a = document.documentElement.clientWidth),
                    (l = { x: s - e, y: i }),
                    (c = { x: r, y: i }),
                    N.IS_RTL ? (s <= e ? c : l) : a - r >= e ? c : l)
                  : { x: 0, y: 10 };
              }),
              (n._updateState = function (e) {
                n.setState(e.getState());
              }),
              (n._setItemRef = function (e) {
                n._itemRef = e;
              }),
              (n.state = a.__assign({}, n.props.action.getState())),
              n
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.action.onUpdate().subscribe(this, this._updateState);
            }),
            (t.prototype.componentWillUnmount = function () {
              this.props.action.onUpdate().unsubscribe(this, this._updateState);
            }),
            (t.prototype.render = function () {
              return l.createElement(
                E,
                a.__assign(
                  {
                    reference: this._setItemRef,
                    onClick: this._handleClick,
                    onClickToolbox: this._handleClickToolbox,
                    onMouseOver: this._showSubMenu,
                    hovered: this.props.isSubMenuOpened,
                    hasSubItems: this._hasSubItems(),
                    actionName: this.state.name,
                  },
                  this.state,
                ),
                l.createElement(A, {
                  isOpened: this.props.isSubMenuOpened,
                  items: this.state.subItems,
                  position: this._calcSubMenuPos,
                  menuStatName: this.props.menuStatName,
                  parentStatName: this._getStatName(),
                }),
              );
            }),
            (t.prototype._hasSubItems = function () {
              return this.state.subItems.length > 0;
            }),
            (t.prototype._trackEvent = function () {
              var e = this._getStatName();
              Object(x.trackEvent)(
                'ContextMenuClick',
                this.props.menuStatName || '',
                e,
              );
            }),
            (t.prototype._getStatName = function () {
              return [this.props.parentStatName, this.state.statName]
                .filter(function (e) {
                  return Boolean(e);
                })
                .join('.');
            }),
            t
          );
        })(l.PureComponent)),
        (g = n('X64X')),
        (O = n('ntfI')),
        (I = n('4O8T')),
        (T = n.n(I)),
        (D = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._loadEmitter = new T.a()),
              (n._onDone = function () {
                n.setState({ loaded: !0, failed: !1 });
              }),
              (n._onFail = function (e) {
                n.setState({ failed: !0, error: e });
              }),
              (n._handleMouseOver = function () {
                n.props.onShowSubMenu(n.props.action);
              }),
              (n.state = {
                loaded: n.props.action.isLoaded(),
                failed: !1,
                error: '',
              }),
              n
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              this._loadEmitter.on('done', this._onDone),
                this._loadEmitter.on('fail', this._onFail),
                this._load();
            }),
            (t.prototype.componentWillUnmount = function () {
              this._loadEmitter.removeEvent('done'),
                this._loadEmitter.removeEvent('fail');
            }),
            (t.prototype.render = function () {
              return this.state.failed
                ? l.createElement(i, {
                    label: this.state.error,
                    onMouseOver: this._handleMouseOver,
                  })
                : this.state.loaded
                ? l.createElement(M, a.__assign({}, this.props))
                : l.createElement(r, { onMouseOver: this._handleMouseOver });
            }),
            (t.prototype._load = function () {
              var e = this;
              this.props.action
                .loadOptions()
                .then(function () {
                  e._loadEmitter.emit('done');
                })
                .catch(function (t) {
                  e._loadEmitter.emit('fail', t);
                });
            }),
            t
          );
        })(l.PureComponent)),
        (H = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleShowSubMenu = function (e) {
                var t = e.getState();
                n.setState({ showSubMenuOf: t.subItems.length ? e : void 0 });
              }),
              (n.state = {}),
              n
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.render = function () {
              var e = this;
              return l.createElement(
                'table',
                null,
                l.createElement(
                  'tbody',
                  null,
                  this.props.items.map(function (t) {
                    return e._item(t);
                  }),
                ),
              );
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return !e.parentIsOpened && t.showSubMenuOf
                ? { showSubMenuOf: void 0 }
                : null;
            }),
            (t.prototype._item = function (e) {
              switch (e.type) {
                case d.a.Separator:
                  return l.createElement(o, { key: e.id, hint: e.getHint() });
                case d.a.Action:
                  return l.createElement(M, {
                    key: e.id,
                    action: e,
                    onShowSubMenu: this._handleShowSubMenu,
                    isSubMenuOpened: this.state.showSubMenuOf === e,
                    menuStatName: this.props.menuStatName,
                    parentStatName: this.props.parentStatName,
                  });
                case d.a.ActionAsync:
                  return l.createElement(D, {
                    key: e.id,
                    action: e,
                    onShowSubMenu: this._handleShowSubMenu,
                    isSubMenuOpened: this.state.showSubMenuOf === e,
                    menuStatName: this.props.menuStatName,
                    parentStatName: this.props.parentStatName,
                  });
                default:
                  return null;
              }
            }),
            t
          );
        })(l.PureComponent)),
        (P = n('t3rk')),
        (A = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._handleClose = function () {
                n.props.onClose && n.props.onClose();
              }),
              (n._handleOutsideClickClose = function (e) {
                var t = n.props,
                  o = t.doNotCloseOn,
                  s = t.onClose;
                !s || (void 0 !== o && o.contains(e.target)) || s();
              }),
              (n.state = {}),
              n
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isOpened,
                n = (e.onClose, e.items),
                o = (e.doNotCloseOn, e.menuStatName),
                s = e.parentStatName,
                r = a.__rest(e, [
                  'isOpened',
                  'onClose',
                  'items',
                  'doNotCloseOn',
                  'menuStatName',
                  'parentStatName',
                ]);
              return t
                ? l.createElement(
                    p.a,
                    {
                      handler: this._handleOutsideClickClose,
                      mouseDown: !0,
                      touchStart: !0,
                      ctor: 'div',
                    },
                    l.createElement(h.a, {
                      keyCode: 27,
                      eventType: 'keyup',
                      handler: this._handleClose,
                    }),
                    l.createElement(
                      u.a,
                      a.__assign({}, r, {
                        isOpened: this.props.isOpened,
                        className: m(P.menu, 'context-menu'),
                        onClose: this._handleClose,
                        noMomentumBasedScroll: !0,
                      }),
                      l.createElement(H, {
                        items: n,
                        menuStatName: o,
                        parentStatName: s,
                        parentIsOpened: t,
                      }),
                    ),
                  )
                : null;
            }),
            t
          );
        })(l.PureComponent)),
        n.d(t, 'ContextMenuRenderer', function () {
          return j;
        }),
        (j = (function () {
          function e(e, t, n, o) {
            (this._root = null),
              (this._isShown = !1),
              (this._props = {
                isOpened: !1,
                items: e,
                position: { x: 0, y: 0 },
                menuStatName: t.statName,
              }),
              (this._onDestroy = n),
              (this._onShow = o);
          }
          return (
            (e.prototype.show = function (e, t, n) {
              var o = this;
              this._onShow && this._onShow(),
                (this._isShown = !0),
                this._render(
                  a.__assign({}, this._props, {
                    position: function (t, o) {
                      return (
                        'function' == typeof e && (e = e(t, o)),
                        e.touches &&
                          e.touches.length > 0 &&
                          (e = {
                            clientX: e.touches[0].clientX,
                            clientY: e.touches[0].clientY,
                          }),
                        {
                          x: !n && N.IS_RTL ? e.clientX - t : e.clientX,
                          y: e.clientY,
                          overrideHeight: e.overrideHeight,
                        }
                      );
                    },
                    isOpened: !0,
                    onClose: function () {
                      o.hide(), o.destroy();
                    },
                    doNotCloseOn: t,
                  }),
                );
            }),
            (e.prototype.hide = function () {
              (this._isShown = !1),
                this._render(a.__assign({}, this._props, { isOpened: !1 }));
            }),
            (e.prototype.isShown = function () {
              return this._isShown;
            }),
            (e.prototype.destroy = function () {
              (this._isShown = !1),
                this._root &&
                  (c.unmountComponentAtNode(this._root),
                  document.body.removeChild(this._root),
                  (this._root = null)),
                this._onDestroy && this._onDestroy();
            }),
            (e.prototype._render = function (e) {
              this._root ||
                ((this._root = document.createElement('span')),
                (this._root.className = 'context-menu-wrapper'),
                document.body.appendChild(this._root)),
                c.render(l.createElement(A, e), this._root);
            }),
            e
          );
        })());
    },
    euMy: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>';
    },
    hn2c: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>';
    },
    ntfI: function (e, t, n) {
      'use strict';
      var o, s, r, i, a, l, c;
      n.d(t, 'a', function () {
        return c;
      }),
        (o = n('mrSG')),
        (s = n('q1tI')),
        (r = n('TSYQ')),
        (i = n('j1f4')),
        (a = n('K5ke')),
        (function (e) {
          (e[(e.Initial = 0)] = 'Initial'),
            (e[(e.Appear = 1)] = 'Appear'),
            (e[(e.Active = 2)] = 'Active');
        })(l || (l = {})),
        (c = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n._stateChangeTimeout = null),
              (n.state = { state: l.Initial }),
              n
            );
          }
          return (
            o.__extends(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.className,
                o = t.color,
                i = void 0 === o ? 'black' : o,
                l = r(a.item, (((e = {})[a[i]] = Boolean(i)), e));
              return s.createElement(
                'span',
                { className: r(a.loader, n, this._getStateClass()) },
                s.createElement('span', { className: l }),
                s.createElement('span', { className: l }),
                s.createElement('span', { className: l }),
              );
            }),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.setState({ state: l.Appear }),
                (this._stateChangeTimeout = setTimeout(function () {
                  e.setState({ state: l.Active });
                }, 2 * i.dur));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._stateChangeTimeout &&
                (clearTimeout(this._stateChangeTimeout),
                (this._stateChangeTimeout = null));
            }),
            (t.prototype._getStateClass = function () {
              switch (this.state.state) {
                case l.Initial:
                  return 'loader-initial';
                case l.Appear:
                  return 'loader-appear';
                default:
                  return '';
              }
            }),
            t
          );
        })(s.PureComponent));
    },
    t3rk: function (e, t, n) {
      e.exports = { menu: 'menu-1y0eDKzl-' };
    },
    'ycI/': function (e, t, n) {
      'use strict';
      var o, s, r;
      n.d(t, 'a', function () {
        return r;
      }),
        (o = n('mrSG')),
        (s = n('q1tI')),
        (r = (function (e) {
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
            o.__extends(t, e),
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
        })(s.PureComponent));
    },
    ycgn: function (e, t, n) {
      e.exports = {
        item: 'item-stVdeCwG-',
        interactive: 'interactive-3E0jwVyG-',
        hovered: 'hovered-2HCCgw6c-',
        disabled: 'disabled-2K7FyUI3-',
        active: 'active-muW4lycL-',
        shortcut: 'shortcut-2P38AivB-',
        iconCell: 'iconCell-OhwVvlgA-',
        icon: 'icon-3DDcYD-t-',
        checkmark: 'checkmark-2UE1siCn-',
        content: 'content-1GXgstZ5-',
        label: 'label-1If3beUH-',
        checked: 'checked-5eQn8630-',
        toolbox: 'toolbox-2XX2mSNw-',
        showToolboxOnHover: 'showToolboxOnHover-iCrUIcOG-',
        arrowIcon: 'arrowIcon-2FMesq_x-',
        subMenu: 'subMenu-QM4GIDtY-',
      };
    },
  },
]);
