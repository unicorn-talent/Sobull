(window.webpackJsonp = window.webpackJsonp || []).push([
  ['floating-toolbars'],
  {
    '0ZwQ': function (t, e, o) {
      'use strict';
      function i() {
        return Object(d.ensureNotNull)(window.containerElement);
      }
      function n() {
        var t, e, o, n;
        return m
          ? ((t = i()),
            (o =
              ((e = getComputedStyle(t)).paddingLeft &&
                parseFloat(e.paddingLeft)) ||
              0),
            (n = (e.paddingRight && parseFloat(e.paddingRight)) || 0),
            t.clientWidth - o - n)
          : window.innerWidth;
      }
      function r() {
        var t, e, o, n;
        return m
          ? ((t = i()),
            (o =
              ((e = getComputedStyle(t)).paddingTop &&
                parseFloat(e.paddingTop)) ||
              0),
            (n = (e.paddingBottom && parseFloat(e.paddingBottom)) || 0),
            t.clientHeight - o - n)
          : window.innerHeight;
      }
      var s, a, l, d, c, p, u, h, g, _, v, f, b, y, w, m, C, x;
      o.d(e, 'a', function () {
        return x;
      }),
        (s = o('P5fv')),
        (a = o.n(s)),
        (l = o('bf9a')),
        (d = o('Eyy1')),
        (c = o('j1f4')),
        (p = o('Vdly')),
        (u = o('aIyQ')),
        (h = o.n(u)),
        (g = o('hY0g')),
        (_ = o.n(g)),
        (v = o('5qpw')),
        (f = o('69Qn')),
        (b = o('qFKp')),
        (y = o('yB98')),
        (w = o('PwLo')),
        (m = b.CheckMobile.iOS()),
        (C =
          '<div class="tv-floating-toolbar i-closed i-hidden">' +
          (Modernizr.mobiletouch
            ? '<div class="tv-floating-toolbar__drag-ext js-drag"></div>'
            : '') +
          '<div class="tv-floating-toolbar__widget-wrapper"><div class="tv-floating-toolbar__drag js-drag">' +
          y +
          '</div><div class="tv-floating-toolbar__content js-content"></div></div></div>'),
        (x = (function () {
          function t(e) {
            (this._widget = document.createElement('div')),
              (this._isVertical = !1),
              (this._hiddingTimeoutId = null),
              (this._visibility = new _.a(!1)),
              (this._windowResizeListener = this._onWindowResize.bind(this)),
              (this._reorderedDelegate = new h.a()),
              (this._responsiveResizeFunction = null),
              t._toolbars.push(this),
              (this._options = e),
              (this._widget = a()(C).get(0)),
              (this._content = this._widget
                .getElementsByClassName('js-content')
                .item(0)),
              this._setZIndex(t._startZIndex + t._toolbars.length - 1),
              this._options.addClass &&
                (this._widget.className += ' ' + this._options.addClass),
              this._options.layout &&
                'auto' !== this._options.layout &&
                ((this._isVertical = 'vertical' === this._options.layout),
                this._updateLayoutType(),
                this._updateAxisOption());
          }
          return (
            (t.prototype.destroy = function () {
              this.hide(!0),
                t._toolbars.splice(t._toolbars.indexOf(this), 1),
                document.body.contains(this._widget) &&
                  document.body.removeChild(this._widget),
                (this._widget.innerHTML = ''),
                (this._responsiveResizeFunction = null);
            }),
            (t.prototype.setResponsiveResizeFunc = function (t) {
              this._responsiveResizeFunction = t;
            }),
            (t.prototype.isVisible = function () {
              return this._visibility.value();
            }),
            (t.prototype.visibility = function () {
              return this._visibility.readonly();
            }),
            (t.prototype.isVertical = function () {
              return this._isVertical;
            }),
            (t.prototype.show = function () {
              var t = this;
              this.isVisible() ||
                (document.body.contains(this._widget) ||
                  (this._init(), document.body.appendChild(this._widget)),
                this._setHiddingTimeout(null),
                window.addEventListener('resize', this._windowResizeListener),
                this.raise(),
                this._visibility.setValue(!0),
                this._widget.classList.contains('i-hidden')
                  ? (this._widget.classList.remove('i-hidden'),
                    setTimeout(function () {
                      t.isVisible() && t._widget.classList.remove('i-closed');
                    }))
                  : this._widget.classList.remove('i-closed'),
                this._onWindowResize());
            }),
            (t.prototype.hide = function (t) {
              var e,
                o,
                i = this;
              void 0 === t && (t = !1),
                this.isVisible() &&
                  ((e = this._widget.classList.contains('i-closed')),
                  this._widget.classList.add('i-closed'),
                  this._visibility.setValue(!1),
                  t || e
                    ? (this._setHiddingTimeout(null),
                      this._widget.classList.add('i-hidden'))
                    : ((o = setTimeout(function () {
                        i._setHiddingTimeout(null),
                          i._widget.classList.add('i-hidden');
                      }, this.hideDuration())),
                      this._setHiddingTimeout(o)),
                  window.removeEventListener(
                    'resize',
                    this._windowResizeListener,
                  ));
            }),
            (t.prototype.raise = function () {
              t._toolbars.length + t._startZIndex !== this._zIndex() &&
                (t._toolbars.splice(t._toolbars.indexOf(this), 1),
                t._toolbars.push(this),
                t._updateAllZIndexes());
            }),
            (t.prototype.hideDuration = function () {
              return 0.75 * c.dur;
            }),
            (t.prototype.addWidget = function (t, e) {
              var o, i, n;
              if (
                (void 0 === e && (e = {}),
                (o = this.widgetsCount()),
                void 0 === e.index && (e.index = o),
                e.index < 0 || e.index > o)
              )
                throw new Error('Index must be in [0, ' + o + ']');
              ((i = document.createElement('div')).className =
                'tv-floating-toolbar__widget js-widget'),
                i.appendChild(t),
                (n =
                  e.index === o
                    ? null
                    : this._content.childNodes.item(e.index)),
                this._content.insertBefore(i, n),
                this._onWindowResize();
            }),
            (t.prototype.removeWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && (this._content.removeChild(e), this._onWindowResize());
            }),
            (t.prototype.widgetsCount = function () {
              return this._content.childNodes.length;
            }),
            (t.prototype.showWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && e.classList.remove('i-hidden');
            }),
            (t.prototype.hideWidget = function (t) {
              var e = this._findWrapperForWidget(t);
              e && e.classList.add('i-hidden');
            }),
            (t.prototype.removeWidgets = function () {
              for (; this._content.firstChild; )
                this._content.removeChild(this._content.firstChild);
              this._onWindowResize();
            }),
            (t.prototype.onWidgetsReordered = function () {
              return this._reorderedDelegate;
            }),
            (t.prototype.onContextMenu = function (t) {
              var e = this;
              Modernizr.mobiletouch
                ? new f.a().load().then(function (o) {
                    var i = new o(e._widget);
                    i.get('press').set({ time: 500 }),
                      i.on('press', function (o) {
                        e._preventWidgetTouchEndEvent(), t(o.srcEvent);
                      });
                  })
                : this._widget.addEventListener('contextmenu', t);
            }),
            (t.prototype._determineCurrentLayoutVertical = function (t) {
              var e = this._isVertical ? t.height : t.width;
              return n() < e;
            }),
            (t.prototype._getWidget = function () {
              return this._widget;
            }),
            (t.prototype._findWrapperForWidget = function (t) {
              var e,
                o,
                i = this._content.getElementsByClassName('js-widget');
              for (e = 0; e < i.length; ++e)
                if ((o = i.item(e)).contains(t)) return o;
              return null;
            }),
            (t.prototype._onVerticalChanged = function (t, e) {}),
            (t.prototype._setHiddingTimeout = function (t) {
              null !== this._hiddingTimeoutId &&
                clearTimeout(this._hiddingTimeoutId),
                (this._hiddingTimeoutId = t);
            }),
            (t.prototype._preventWidgetTouchEndEvent = function () {
              var t = this,
                e = function (o) {
                  o.preventDefault(),
                    t._widget.removeEventListener('touchend', e);
                };
              this._widget.addEventListener('touchend', e);
            }),
            (t.prototype._updateLayoutType = function () {
              this._widget.classList.toggle('i-vertical', this._isVertical);
            }),
            (t.prototype._updateAxisOption = function () {
              if (this._options.dragOnlyInsideToolbar) {
                var t = this._isVertical ? 'y' : 'x';
                Object(v.lazyJqueryUI)(a()(this._content)).sortable(
                  'option',
                  'axis',
                  t,
                );
              }
            }),
            (t.prototype._onWindowResize = function () {
              var t,
                e,
                o = this._options.layout || 'auto';
              'auto' === o &&
                ((t = this._isVertical),
                (e = this._getCorrectedWidgetRect()),
                (this._isVertical = this._determineCurrentLayoutVertical(e)),
                this._updateLayoutType(),
                t !== this._isVertical &&
                  (this._onVerticalChanged(this._isVertical, t),
                  this._updateAxisOption())),
                this._checkPosition(),
                this._resizeResponsive();
            }),
            (t.prototype._resizeResponsive = function () {
              var t, e, o;
              null !== this._responsiveResizeFunction &&
                ('auto' === (t = this._options.layout || 'auto') &&
                  (t = this._isVertical ? 'vertical' : 'horizontal'),
                (e =
                  'vertical' === t
                    ? this._widget.clientHeight
                    : this._widget.clientWidth),
                (o = ('vertical' === t ? r() : n()) - e),
                this._responsiveResizeFunction(e, o, t));
            }),
            (t.prototype._checkPosition = function () {
              var t = this._getCorrectedWidgetRect(),
                e = { left: t.left, top: t.top };
              this._correctPosition(e),
                (t.left === e.left && t.top === e.top) ||
                  ((this._widget.style.left = e.left + 'px'),
                  (this._widget.style.top = e.top + 'px'));
            }),
            (t.prototype._correctPosition = function (t) {
              var e = this._getCorrectedWidgetRect();
              t.left + e.width > n() && (t.left = Math.max(0, n() - e.width)),
                t.top + e.height > r() && (t.top = Math.max(0, r() - e.height)),
                (t.left = Math.max(0, t.left)),
                (t.top = Math.max(0, t.top));
            }),
            (t.prototype._setZIndex = function (t) {
              this._widget.style.zIndex = String(t);
            }),
            (t.prototype._zIndex = function () {
              return Number(this._widget.style.zIndex);
            }),
            (t.prototype._loadPosition = function () {
              var t = Object(p.getJSON)(
                this._options.positionSettingsKey,
                this._options.defaultPosition,
              );
              (this._widget.style.left = Math.round(t.left) + 'px'),
                (this._widget.style.top = Math.round(t.top) + 'px'),
                this._onWindowResize();
            }),
            (t.prototype._savePosition = function () {
              var t = this._widget.getBoundingClientRect();
              Object(p.setJSON)(this._options.positionSettingsKey, {
                left: t.left,
                top: t.top,
              });
            }),
            (t.prototype._init = function () {
              this._loadPosition(),
                Object(v.lazyJqueryUI)(a()(this._widget)).draggable({
                  containment: 'window',
                  drag: this._onDragEvent.bind(this),
                  handle: '.js-drag',
                  stop: this._savePosition.bind(this),
                }),
                this._options.allowSortable && this._initSortable(),
                this._widget.addEventListener(
                  Modernizr.mobiletouch ? 'touchstart' : 'mousedown',
                  this.raise.bind(this),
                );
            }),
            (t.prototype._onDragEvent = function (t, e) {
              this._correctPosition(e.position);
            }),
            (t.prototype._initSortable = function () {
              var t = this,
                e = -1;
              Object(v.lazyJqueryUI)(a()(this._content)).sortable({
                start: function (t, o) {
                  e = o.item.index();
                },
                stop: function (o, i) {
                  var n = i.item.index();
                  e !== n && t._reorderedDelegate.fire(e, n);
                },
                tolerance: 'pointer',
                distance: 5,
                containment: !!this._options.dragOnlyInsideToolbar && 'parent',
                scroll: !1,
                placeholder: 'sortable-placeholder',
                forcePlaceholderSize: !0,
              }),
                this._updateAxisOption();
            }),
            (t.prototype._getCorrectedWidgetRect = function () {
              var t,
                e,
                o,
                i = this._widget.getBoundingClientRect();
              return this._widget.classList.contains('i-closed')
                ? ((t = 1 / 0.925 - 1),
                  (e = i.width * t),
                  (o = i.height * t),
                  {
                    bottom: i.bottom + o / 2,
                    height: i.height + o,
                    left: i.left - e / 2,
                    right: i.right + e / 2,
                    top: i.top - o / 2,
                    width: i.width + e,
                  })
                : i;
            }),
            (t._updateAllZIndexes = function () {
              t._toolbars.forEach(function (e, o) {
                e._setZIndex(t._startZIndex + o);
              });
            }),
            (t._startZIndex = 20),
            (t._toolbars = []),
            t
          );
        })());
    },
    '2JFs': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M24.06 17.94L15.123 9l-1.41 1.41 2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM12.713 19l4.79-4.79L22.29 19h-9.58zM26.5 20.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z" class="icon"/></svg>';
    },
    '5qpw': function (t, e, o) {
      'use strict';
      function i(t) {
        return t in $.fn
          ? Promise.resolve()
          : (s ||
              (s = new Promise(function (t) {
                Promise.all([o.e(57), o.e('lazy-jquery-ui')])
                  .then(
                    function (e) {
                      o('ONnG'), t();
                    }.bind(null, o),
                  )
                  .catch(o.oe);
              })),
            s);
      }
      function n(t) {
        return new a(t);
      }
      var r, s, a;
      o.r(e),
        o.d(e, 'LazyJqueryUI', function () {
          return a;
        }),
        o.d(e, 'lazyJqueryUI', function () {
          return n;
        }),
        (r = o('P5fv')),
        (a = (function () {
          function t(t) {
            this._$elem = t;
          }
          return (
            (t.prototype.draggable = function () {
              var t = arguments,
                e = this._$elem;
              return i('draggable').then(function () {
                return e.draggable.apply(e, t);
              });
            }),
            (t.prototype.resizable = function () {
              var t = arguments,
                e = this._$elem;
              return i('resizable').then(function () {
                return e.resizable.apply(e, t);
              });
            }),
            (t.prototype.sortable = function () {
              var t = arguments,
                e = this._$elem;
              return i('sortable').then(function () {
                return e.sortable.apply(e, t);
              });
            }),
            (t.prototype.datepicker = function () {
              var t = arguments,
                e = this._$elem;
              return i('datepicker').then(function () {
                return e.datepicker.apply(e, t);
              });
            }),
            t
          );
        })());
    },
    '9On3': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1H3V2H1.5zM4 2v1h2V2H4zm3 0v1h2V2H7zm3 0v1h2V2h-2zm3 0v1h2V2h-2zm3 0v1h2V2h-2zm3 0v1h1.5a.5.5 0 0 0 0-1H19z"/></svg>';
    },
    ADFN: function (t, e, o) {},
    BiGZ: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM21 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M1.5 2H19v1H1.5z"/></svg>';
    },
    BsMi: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M22 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM4 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM13 2.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M3 2h18.5v1H3z"/></svg>';
    },
    HKvk: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M24.748 16l-3.75-3.748-9.998 10V26h3.75l9.998-10zm2.96-2.96a.996.996 0 0 0 0-1.408l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.96 1.96 3.75 3.75 1.96-1.96z" class="icon"/></svg>';
    },
    Kjbl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d="M0 0v38h38V0H0zm7 29h24v4H7v-4z" class="bg"/><path d="M23.094 25.5L22 22.17h-5.904l-1.17 3.33H12.5l6.446-16h.574l5.98 16h-2.405zM19.13 13.637l-2.46 6.95h4.712l-2.252-6.95z" class="icon"/></svg>';
    },
    NDCK: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 1a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4H2z"/></svg>';
    },
    Nz7V: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1H5V2zM7 2v1h3V2zm5 0v1h3V2zm5 0v1h3.5a.5.5 0 0 0 0-1z"/></svg>';
    },
    PwLo: function (t, e, o) {},
    RRhU: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13"><path d="M1 11.571C1 12.357 1.6 13 2.333 13h5.333c.733 0 1.333-.643 1.333-1.429V3h-8v8.571zM8.5 1L6.786 0H3.215L1.501 1h-1.5v1h10V1h-1.5z"/></svg>';
    },
    RsxI: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path d="M15.09 6.857s-.571 0-.724-.533c-.114-.457-.305-.876-.533-1.295-.229-.495.152-.876.152-.876l.571-.571c.229-.229.229-.61 0-.876l-.762-.762c-.229-.229-.61-.229-.876 0l-.571.571s-.381.381-.876.152c-.419-.229-.838-.419-1.295-.533-.533-.152-.533-.724-.533-.724v-.8a.602.602 0 0 0-.61-.61H7.966a.602.602 0 0 0-.61.61v.8s0 .571-.533.724c-.457.114-.876.305-1.295.533-.495.229-.876-.152-.876-.152l-.571-.571c-.229-.229-.61-.229-.876 0l-.762.762c-.229.229-.229.61 0 .876l.571.571s.381.381.152.876c-.229.419-.419.838-.533 1.295-.152.495-.724.533-.724.533h-.8a.602.602 0 0 0-.61.61v1.067c0 .343.267.61.61.61h.8s.571 0 .724.533c.114.457.305.876.533 1.295.229.495-.152.876-.152.876l-.571.571c-.229.229-.229.61 0 .876l.762.762c.229.229.61.229.876 0l.571-.571s.381-.381.876-.152c.419.229.838.419 1.295.533.495.152.533.724.533.724v.8c0 .343.267.61.61.61h1.067c.343 0 .61-.267.61-.61v-.8s0-.571.533-.724c.457-.114.876-.305 1.295-.533.495-.229.876.152.876.152l.571.571c.229.229.61.229.876 0l.762-.762c.229-.229.229-.61 0-.876l-.571-.571s-.381-.381-.152-.876c.229-.419.419-.838.533-1.295.152-.495.724-.533.724-.533h.8c.343 0 .61-.267.61-.61V7.467a.602.602 0 0 0-.61-.61h-.8zM8.5 11.555a3.541 3.541 0 0 1-3.556-3.556A3.541 3.541 0 0 1 8.5 4.443a3.541 3.541 0 0 1 3.556 3.556A3.561 3.561 0 0 1 8.5 11.555z"/></svg>';
    },
    TXAa: function (t, e, o) {},
    WRHa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 15"><path d="M1 0C.45 0 0 .45 0 1v11h1V1h9V0H1zm2.467 2C2.66 2 2 2.65 2 3.444v10.111c0 .794.66 1.444 1.467 1.444h8.067c.807 0 1.467-.65 1.467-1.444V3.444c0-.794-.66-1.444-1.467-1.444H3.467zM3 3h9v11H3V3z"/></svg>';
    },
    XqDt: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 2a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H2z"/></svg>';
    },
    dhuF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M20 2.5a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0zm-19 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0z"/><path d="M20.5 3H3V2h17.5z"/></svg>';
    },
    eHtW: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M0 2.5a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0zm18 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0zm-9 0a2 2 0 1 1 4 0 2 2 0 1 1-4 0z"/><path d="M19 3H.5V2H19z"/></svg>';
    },
    'fUH/': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M22 2.5L14 5V0zM2 2.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z"/><path d="M1.5 2H15v1H1.5z"/></svg>';
    },
    gPdB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12px" height="16px"><path fill-rule="evenodd" d="M10.5 5.333h-.75V3.81C9.75 1.707 8.07 0 6 0 3.93 0 2.25 1.707 2.25 3.81v1.523H1.5c-.825 0-1.5.686-1.5 1.524v7.62C0 15.313.675 16 1.5 16h9c.825 0 1.5-.686 1.5-1.524V6.857c0-.838-.675-1.524-1.5-1.524zM6 12c-.825 0-1.5-.675-1.5-1.5S5.175 9 6 9s1.5.675 1.5 1.5S6.825 12 6 12zm2.325-6.75h-4.65v-1.5A2.326 2.326 0 0 1 6 1.425 2.326 2.326 0 0 1 8.325 3.75v1.5z"/></svg>';
    },
    gmn6: function (t, e, o) {
      'use strict';
      o.r(e),
        function (t) {
          var i, n, r, s, a, l, d, c, p, u, h, g, _, v, f, b;
          o.d(e, 'FavoriteDrawingToolbar', function () {
            return b;
          }),
            (i = o('mrSG')),
            (n = o('P5fv')),
            (r = o('OiQe')),
            (s = o('bf9a')),
            o('YFKU'),
            (a = o('0ZwQ')),
            (l = o('b2d7')),
            (d = o('7KDR')),
            (c = o('5VQP')),
            (p = o('mMWL')),
            (u = o('MP+M')),
            (h = o('Vdly')),
            (g = o('hY0g')),
            (_ = o.n(g)),
            (v = o('TXAa')),
            (f =
              '<span class="tv-favorited-drawings-toolbar__widget {{#isActive}}i-active{{/isActive}} apply-common-tooltip" title="{{title}}">{{{icon}}}</span>'),
            (b = (function (e) {
              function o(t) {
                var o =
                  e.call(this, {
                    allowSortable: !Modernizr.mobiletouch,
                    dragOnlyInsideToolbar: !0,
                    defaultPosition: t,
                    positionSettingsKey: 'chart.favoriteDrawingsPosition',
                  }) || this;
                return (
                  (o._linetoolsWidgets = {}),
                  (o._canBeShownValue = new _.a(!1)),
                  o._attachHandlers(),
                  o._loadVisibilityState(),
                  o
                );
              }
              return (
                i.__extends(o, e),
                (o.prototype.show = function () {
                  this._canBeShownValue.value() &&
                    (h.setValue(o._visibilitySettingsKey, !0),
                    this.isVisible() || this._renderAllLinetools(),
                    e.prototype.show.call(this));
                }),
                (o.prototype.hide = function () {
                  h.setValue(o._visibilitySettingsKey, !1),
                    e.prototype.hide.call(this);
                }),
                (o.prototype.canBeShown = function () {
                  return this._canBeShownValue.readonly();
                }),
                (o.prototype._onFavoriteAdded = function (t) {
                  this._canBeShownValue.setValue(!0),
                    this.addWidget(this._createLinetoolWidget(t)),
                    this.show();
                }),
                (o.prototype._onFavoriteRemoved = function (t) {
                  this.removeWidget(this._linetoolsWidgets[t]),
                    delete this._linetoolsWidgets[t],
                    0 === l.a.favoritesCount() &&
                      (this._canBeShownValue.setValue(!1), this.hide());
                }),
                (o.prototype._onFavoriteMoved = function () {
                  this._renderAllLinetools();
                }),
                (o.prototype._onSelectedLinetoolChanged = function (t) {
                  var e = this;
                  Object.keys(this._linetoolsWidgets).forEach(function (o) {
                    e._linetoolsWidgets[o].classList.toggle(
                      'i-active',
                      t === o,
                    );
                  });
                }),
                (o.prototype._createLinetoolWidget = function (e) {
                  var o = $(
                    t.render(f, {
                      icon: u.a[e].icon,
                      isActive: e === p.tool.value(),
                      title: u.a[e].localizedName,
                    }),
                  )[0];
                  return (
                    o.addEventListener('click', function (t) {
                      t.preventDefault(),
                        p.tool.value() !== e && p.tool.setValue(e);
                    }),
                    (this._linetoolsWidgets[e] = o),
                    o
                  );
                }),
                (o.prototype._renderAllLinetools = function () {
                  var t = this;
                  (this._linetoolsWidgets = {}),
                    this.removeWidgets(),
                    l.a.favorites().forEach(function (e) {
                      t.addWidget(t._createLinetoolWidget(e));
                    });
                }),
                (o.prototype._attachHandlers = function () {
                  var t = this;
                  l.a.favoriteAdded.subscribe(this, this._onFavoriteAdded),
                    l.a.favoriteRemoved.subscribe(
                      this,
                      this._onFavoriteRemoved,
                    ),
                    l.a.favoriteMoved.subscribe(this, this._onFavoriteMoved),
                    l.a.favoritesSynced.subscribe(null, function () {
                      t._loadVisibilityState(), t._renderAllLinetools();
                    }),
                    this.onWidgetsReordered().subscribe(this, function (e, o) {
                      if (
                        (l.a.favoriteMoved.unsubscribe(t, t._onFavoriteMoved),
                        !l.a.moveFavorite(l.a.favorite(e), o))
                      )
                        throw new Error('Something went wrong');
                      l.a.favoriteMoved.subscribe(t, t._onFavoriteMoved);
                    }),
                    this.onContextMenu(function (e) {
                      e.preventDefault();
                      var o = new d.Action({
                        label: window.t('Hide Favorite Drawings Toolbar'),
                        onExecute: function () {
                          t.hide();
                        },
                      });
                      c.ContextMenuManager.createMenu([o]).then(function (t) {
                        t.show(e);
                      });
                    }),
                    p.tool.subscribe(
                      this._onSelectedLinetoolChanged.bind(this),
                    );
                }),
                (o.prototype._loadVisibilityState = function () {
                  var t = l.a.favoritesCount() > 0;
                  this._canBeShownValue.setValue(t),
                    h.getBool(o._visibilitySettingsKey, !0) && t
                      ? this.show()
                      : this.hide();
                }),
                (o._visibilitySettingsKey =
                  'ChartFavoriteDrawingToolbarWidget.visible'),
                o
              );
            })(a.a));
        }.call(this, o('OiQe'));
    },
    jAh7: function (t, e, o) {
      'use strict';
      function i(t) {
        var e, o, i;
        return (
          void 0 === t && (t = document),
          null !== (e = t.getElementById('overlap-manager-root'))
            ? Object(n.ensureDefined)(a.get(e))
            : ((o = new s(t)),
              (i = (function (t) {
                var e = t.createElement('div');
                return (
                  (e.style.position = 'absolute'),
                  (e.style.zIndex = (150).toString()),
                  (e.style.top = '0px'),
                  (e.style.left = '0px'),
                  (e.id = 'overlap-manager-root'),
                  e
                );
              })(t)),
              a.set(i, o),
              o.setContainer(i),
              t.body.appendChild(i),
              o)
        );
      }
      var n, r, s, a;
      o.r(e),
        o.d(e, 'OverlapManager', function () {
          return s;
        }),
        o.d(e, 'getRootOverlapManager', function () {
          return i;
        }),
        (n = o('Eyy1')),
        (r = (function () {
          function t() {
            this._storage = [];
          }
          return (
            (t.prototype.add = function (t) {
              this._storage.push(t);
            }),
            (t.prototype.remove = function (t) {
              this._storage = this._storage.filter(function (e) {
                return t !== e;
              });
            }),
            (t.prototype.has = function (t) {
              return this._storage.includes(t);
            }),
            (t.prototype.getItems = function () {
              return this._storage;
            }),
            t
          );
        })()),
        (s = (function () {
          function t(t) {
            void 0 === t && (t = document),
              (this._storage = new r()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = t),
              (this._container = t.createDocumentFragment());
          }
          return (
            (t.prototype.setContainer = function (t) {
              var e = this._container,
                o = null === t ? this._document.createDocumentFragment() : t;
              !(function (t, e) {
                Array.from(t.childNodes).forEach(function (t) {
                  t.nodeType === Node.ELEMENT_NODE && e.appendChild(t);
                });
              })(e, o),
                (this._container = o);
            }),
            (t.prototype.registerWindow = function (t) {
              this._storage.has(t) || this._storage.add(t);
            }),
            (t.prototype.ensureWindow = function (t, e) {
              var o, i;
              return (
                void 0 === e && (e = { position: 'fixed' }),
                void 0 !== (o = this._windows.get(t))
                  ? o
                  : (this.registerWindow(t),
                    ((i = this._document.createElement('div')).style.position =
                      e.position),
                    (i.style.zIndex = this._index.toString()),
                    (i.dataset.id = t),
                    this._container.appendChild(i),
                    this._windows.set(t, i),
                    ++this._index,
                    i)
              );
            }),
            (t.prototype.unregisterWindow = function (t) {
              this._storage.remove(t);
              var e = this._windows.get(t);
              void 0 !== e &&
                (null !== e.parentElement && e.parentElement.removeChild(e),
                this._windows.delete(t));
            }),
            (t.prototype.getZindex = function (t) {
              var e = this.ensureWindow(t);
              return parseInt(e.style.zIndex || '0');
            }),
            (t.prototype.moveToTop = function (t) {
              this.getZindex(t) !== this._index &&
                (this.ensureWindow(t).style.zIndex = (++this
                  ._index).toString());
            }),
            (t.prototype.removeWindow = function (t) {
              this.unregisterWindow(t);
            }),
            t
          );
        })()),
        (a = new WeakMap());
    },
    'm/4m': function (t, e, o) {},
    my99: function (t, e, o) {
      'use strict';
      var i, n, r, s, a, l, d, c;
      o.r(e),
        o.d(e, 'GroupButtonFloatingToolbar', function () {
          return c;
        }),
        (i = o('mrSG')),
        (n = o('Eyy1')),
        (r = o('0ZwQ')),
        (s = o('aIyQ')),
        (a = o.n(s)),
        (l = o('m/4m')),
        (d = o('ADFN')),
        (c = (function (t) {
          function e(o) {
            var i = t.call(this, e._prepareOptions(o)) || this;
            return (
              (i._onWidgetStateChangedDelegate = new a.a()),
              (i._statedWidgets = []),
              (i._currentPopup = null),
              (i._onWindowClickedListener = i._onWindowClicked.bind(i)),
              i
            );
          }
          return (
            i.__extends(e, t),
            (e.prototype.show = function () {
              t.prototype.show.call(this),
                document.addEventListener(
                  'mousedown',
                  this._onWindowClickedListener,
                );
            }),
            (e.prototype.hide = function () {
              t.prototype.hide.call(this),
                document.removeEventListener(
                  'mousedown',
                  this._onWindowClickedListener,
                );
            }),
            (e.prototype.destroy = function () {
              this._closePopup(), t.prototype.destroy.call(this);
            }),
            (e.prototype.addGroupedWidget = function (t, o) {
              var i, r, s;
              void 0 === o && (o = {}),
                Object(n.assert)(
                  t.states.length > 0 &&
                    -1 !== e._getStateIndexById(t, t.currentStateId),
                  'Argument is invalid (count: ' +
                    t.states.length +
                    ', state: ' +
                    t.currentStateId +
                    ')',
                ),
                ((i = document.createElement('div')).className =
                  'tv-grouped-floating-toolbar__widget-wrapper apply-common-tooltip'),
                t.widgetAddClass && i.classList.add(t.widgetAddClass),
                i.setAttribute('title', t.tooltip),
                (r = { isEnabled: !0, statedWidget: t, toolbarWidget: i }),
                (s = this._onWidgetClicked.bind(this, r)),
                (r.clickListener = s),
                i.addEventListener('click', s),
                this._updateWidgetPreview(r),
                this.addWidget(i, o),
                this._statedWidgets.push(r);
            }),
            (e.prototype.removeGroupedWidget = function (t) {
              var e,
                o,
                i = this._statedWidgets.length;
              for (e = 0; e < i; ++e)
                if ((o = this._statedWidgets[e]).statedWidget.id === t)
                  return (
                    this._isPopupCreatedForWidget(t) && this._closePopup(),
                    void 0 !== o.clickListener &&
                      o.toolbarWidget.removeEventListener(
                        'click',
                        o.clickListener,
                      ),
                    this.removeWidget(o.toolbarWidget),
                    this._statedWidgets.splice(e, 1),
                    void this._updatePopupPosition()
                  );
              Object(n.assert)(!1, 'Unknown groupId(' + t + ')');
            }),
            (e.prototype.updateGroupedWidget = function (t, e) {
              this._closePopup();
              var o = this._ensuredGetWidgetDataForId(t);
              (o.statedWidget.currentStateId = e.currentStateId),
                (o.statedWidget.states = e.states),
                this._updateWidgetPreview(o);
            }),
            (e.prototype.setGroupedWidgetEnabled = function (t, e) {
              var o = this._ensuredGetWidgetDataForId(t);
              (o.isEnabled = e),
                o.toolbarWidget.classList.toggle('i-disabled', !e);
            }),
            (e.prototype.setGroupedWidgetState = function (t, o) {
              var i = this._ensuredGetWidgetDataForId(t);
              Object(n.assert)(
                -1 !== e._getStateIndexById(i.statedWidget, o),
                'Unknown stateId (' + o + ')',
              ),
                (i.statedWidget.currentStateId = o),
                this._updateSubWidgetsState(i.statedWidget),
                this._updateWidgetPreview(i);
            }),
            (e.prototype.onWidgetStateChanged = function () {
              return this._onWidgetStateChangedDelegate;
            }),
            (e.prototype._onVerticalChanged = function (t, e) {
              this._updatePopupPosition();
            }),
            (e.prototype._ensuredGetWidgetDataForId = function (t) {
              var e, o, i;
              for (e = 0, o = this._statedWidgets; e < o.length; e++)
                if ((i = o[e]).statedWidget.id === t) return i;
              throw new Error('Unknown groupId(' + t + ')');
            }),
            (e.prototype._onWidgetClicked = function (t, e) {
              var o =
                this._currentPopup &&
                this._isPopupCreatedForWidget(t.statedWidget.id);
              this._closePopup(), !o && t.isEnabled && this._createPopup(t);
            }),
            (e.prototype._createPopup = function (t) {
              var e,
                o = this,
                i = {
                  createdFor: t.toolbarWidget,
                  element: document.createElement('div'),
                  stateWidgetId: t.statedWidget.id,
                  widgets: [],
                };
              (i.element.className +=
                'tv-grouped-floating-toolbar__popup js-popup'),
                (e = t.statedWidget.states.length),
                t.statedWidget.states.forEach(function (n, r) {
                  var s = o._createSubWidget(t, n),
                    a = o._onSubWidgetClicked.bind(o, t, n.id);
                  s.addEventListener('click', a),
                    i.widgets.push({
                      clickListener: a,
                      stateWidget: n,
                      widget: s,
                    }),
                    s.classList.add(
                      'tv-grouped-floating-toolbar__sub-widget--slide-right-' +
                        r,
                    ),
                    s.classList.add(
                      'tv-grouped-floating-toolbar__sub-widget--slide-left-' +
                        (e - r + 1),
                    ),
                    i.element.appendChild(s);
                }),
                (this._currentPopup = i),
                this._updateSubWidgetsState(t.statedWidget),
                t.toolbarWidget.classList.add('i-dropped'),
                this._getWidget().appendChild(this._currentPopup.element),
                Promise.resolve().then(function () {
                  o._currentPopup &&
                    o._currentPopup.element.classList.add('i-opened');
                }),
                this._updatePopupPosition();
            }),
            (e.prototype._closePopup = function () {
              var t,
                e,
                o = this;
              this._statedWidgets.forEach(function (t) {
                t.toolbarWidget.classList.remove('i-dropped');
              }),
                this._currentPopup &&
                  ((t = this._currentPopup.widgets),
                  (e = this._currentPopup.element),
                  (this._currentPopup = null),
                  t.forEach(function (t) {
                    t.widget.removeEventListener('click', t.clickListener);
                  }),
                  e.classList.remove('i-opened'),
                  e.addEventListener('transitionend', function (t) {
                    t.target === e && o._getWidget().removeChild(e);
                  }));
            }),
            (e.prototype._updateWidgetPreview = function (t) {
              var o,
                i = e._getStateIndexById(
                  t.statedWidget,
                  t.statedWidget.currentStateId,
                );
              Object(n.assert)(
                -1 !== i,
                'Unknown state id: ' + t.statedWidget.currentStateId,
              ),
                (o = t.statedWidget.states[i].widget.cloneNode(!0)),
                t.toolbarWidget.firstChild
                  ? t.toolbarWidget.replaceChild(o, t.toolbarWidget.firstChild)
                  : (t.toolbarWidget.appendChild(o),
                    t.toolbarWidget.appendChild(e._createCaret()));
            }),
            (e.prototype._updateSubWidgetsState = function (t) {
              this._currentPopup &&
                this._isPopupCreatedForWidget(t.id) &&
                this._currentPopup.widgets.forEach(function (o) {
                  o.widget.classList.toggle(
                    e._activeSubWidgetClass,
                    o.stateWidget.id === t.currentStateId,
                  );
                });
            }),
            (e.prototype._updatePopupPosition = function () {
              var t, e, o, i, n, r, s;
              if (this._currentPopup) {
                if (
                  ((t = this._currentPopup.createdFor),
                  (e = this._getWidget().getBoundingClientRect()),
                  !(o = this._findWrapperForWidget(t)) || !this._currentPopup)
                )
                  throw new Error(
                    "Toolbar has no wrapper for preview's widget or there is no popup",
                  );
                (i = o.getBoundingClientRect()),
                  (n = this._currentPopup.element.getBoundingClientRect()),
                  (r = this._currentPopup.element),
                  this.isVertical()
                    ? (r.classList.remove(
                        'tv-grouped-floating-toolbar__popup--at-top',
                      ),
                      (r.style.top = i.top - e.top + 1 + 'px'),
                      (r.style.left = ''),
                      e.left > window.innerWidth - e.right
                        ? r.classList.add(
                            'tv-grouped-floating-toolbar__popup--at-left',
                          )
                        : r.classList.remove(
                            'tv-grouped-floating-toolbar__popup--at-left',
                          ))
                    : (r.classList.remove(
                        'tv-grouped-floating-toolbar__popup--at-left',
                      ),
                      (s = 0),
                      i.left + n.width > window.innerWidth
                        ? e.left + n.width > window.innerWidth &&
                          (s = e.width - n.width)
                        : (s = i.left - e.left + 1),
                      (r.style.left = s + 'px'),
                      e.bottom + n.height > window.innerHeight
                        ? r.classList.add(
                            'tv-grouped-floating-toolbar__popup--at-top',
                          )
                        : (r.classList.remove(
                            'tv-grouped-floating-toolbar__popup--at-top',
                          ),
                          (r.style.top = '')));
              }
            }),
            (e.prototype._isPopupCreatedForWidget = function (t) {
              return Boolean(
                this._currentPopup && this._currentPopup.stateWidgetId === t,
              );
            }),
            (e.prototype._createSubWidget = function (t, e) {
              var o = document.createElement('div');
              return (
                (o.className += 'tv-grouped-floating-toolbar__sub-widget'),
                t.statedWidget.stateWidgetAddClass &&
                  o.classList.add(t.statedWidget.stateWidgetAddClass),
                o.appendChild(e.widget),
                o
              );
            }),
            (e.prototype._onSubWidgetClicked = function (t, e) {
              this._closePopup(),
                t.statedWidget.currentStateId !== e &&
                  (this.setGroupedWidgetState(t.statedWidget.id, e),
                  this._onWidgetStateChangedDelegate.fire(
                    t.statedWidget.id,
                    e,
                  ));
            }),
            (e.prototype._onWindowClicked = function (t) {
              if (
                this.isVisible() &&
                this._currentPopup &&
                !e._isEventInElement(t, this._currentPopup.element)
              ) {
                for (var o = 0; o < this._statedWidgets.length; ++o)
                  if (
                    e._isEventInElement(t, this._statedWidgets[o].toolbarWidget)
                  )
                    return;
                this._closePopup();
              }
            }),
            (e._getStateIndexById = function (t, e) {
              for (var o = 0; o < t.states.length; ++o)
                if (t.states[o].id === e) return o;
              return -1;
            }),
            (e._createCaret = function () {
              var t = document.createElement('div');
              return (
                (t.className =
                  'tv-caret tv-caret--small tv-caret--colored tv-grouped-floating-toolbar__caret'),
                t
              );
            }),
            (e._prepareOptions = function (t) {
              return (
                t.addClass
                  ? (t.addClass += ' tv-grouped-floating-toolbar')
                  : (t.addClass = ' tv-grouped-floating-toolbar'),
                t
              );
            }),
            (e._isEventInElement = function (t, e) {
              return t.target === e || e.contains(t.target);
            }),
            (e._activeSubWidgetClass =
              'tv-grouped-floating-toolbar__sub-widget--current'),
            e
          );
        })(r.a));
    },
    n2Ch: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M0 2.5L8 0v5zm20 0a.5.5 0 1 1 1 0 .5.5 0 1 1-1 0z"/><path d="M20.5 3H7V2h13.5z"/></svg>';
    },
    nApS: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12"><path d="M8.25 0C4.5 0 1.297 2.332 0 5.625c1.297 3.292 4.5 5.625 8.25 5.625s6.953-2.333 8.25-5.625C15.203 2.332 12 0 8.25 0zm0 9.375c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C7.005 3.375 6 4.38 6 5.625s1.005 2.25 2.25 2.25 2.25-1.005 2.25-2.25-1.005-2.25-2.25-2.25z"/></svg>';
    },
    nSyy: function (t, e, o) {},
    rXte: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 0a2 2 0 0 0-2 2v14h14a2 2 0 0 0 2-2H2zm2 0v2h3V0zm5 0v2h3V0zm5 0v2h2a2 2 0 0 0-2-2zm0 4v3h2V4zm0 5v3h2V9z"/></svg>';
    },
    tPkB: function (t, e, o) {
      'use strict';
      (function (e, i) {
        function n(t) {
          (this._chartWidgetCollection = t),
            (this._bindings = []),
            (this._hasAlertWathcedValue = null),
            (this._$templatesButton = null),
            (this._currentProperties = null),
            (this._toolbarWidgets = []),
            (this._clearProeprtiesOnHideTimeoutId = null),
            this._init(),
            this.attachHandlers();
        }
        function r(t, e) {
          t.push({
            id: e,
            widget: $(
              '<div class="tv-linetool-properties-toolbar__text">' +
                e +
                '</div>',
            )[0],
          });
        }
        function s(t, e) {
          t.push({ id: e.value, widget: $(e.iconSvgCode)[0] });
        }
        function a(t) {
          return (function (t, e) {
            return $('<div>')
              .addClass('tv-linetool-properties-toolbar__icon')
              .addClass(e)
              .append(t)[0];
          })(t, 'tv-linetool-properties-toolbar__icon--line-props');
        }
        var l,
          d,
          c,
          p,
          u,
          h,
          g,
          _,
          v,
          f,
          b,
          y,
          w,
          m,
          C,
          x = o('DxCR'),
          W = x.PropertyPage,
          T = x.ColorBinding,
          L = o('fTGZ').BarsMarksContainer,
          S = o('mMWL'),
          P = o('guTw'),
          E = o('bR4N').bindPopupMenu,
          k = o('Ocx9').DefaultProperty,
          B = o('my99').GroupButtonFloatingToolbar,
          z = o('a7Ha').LineEnd,
          V = o('VNzU').isMultipleLayout,
          A = o('yMne'),
          M = o('CW80').isLineTool,
          F = o('tITk').trackEvent;
        o('m/4m'),
          o('nSyy'),
          (n.prototype.activeChartWidget = function () {
            return this._chartWidgetCollection.activeChartWidget.value();
          }),
          (n.prototype.selectedSources = function () {
            return this._chartWidgetCollection.selectedSources.value();
          }),
          (n.prototype._init = function () {
            (this._floatingToolbar = new B({
              addClass: 'tv-linetool-properties-toolbar',
              defaultPosition: {
                top: A.HEADER_TOOLBAR_HEIGHT_EXPANDED + 15,
                left: window.innerWidth / 2,
              },
              positionSettingsKey: 'properties_toolbar.position',
            })),
              this._floatingToolbar
                .onWidgetStateChanged()
                .subscribe(this, this._onPropertyChangedInToolbar),
              (this._sourceActions = this._createSourceActions()),
              this._sourceActions.forEach(function (t) {
                this._floatingToolbar.addWidget(t.button);
              }, this);
          }),
          (n.prototype._bindPopupMenuDirection = function () {
            return this._floatingToolbar.isVertical() ? 'right' : 'down';
          }),
          (n.prototype._onPropertyChangedInToolbar = function (t, e) {
            this._currentProperties &&
              this.activeChartWidget()
                .model()
                .setProperty(this._currentProperties[t], e);
          }),
          (n.prototype._onPropertyChanged = function (t, e) {
            this._floatingToolbar.setGroupedWidgetState(t, e.value());
          }),
          (n.prototype._hideAllSourceActions = function () {
            this._sourceActions.forEach(function (t) {
              this._floatingToolbar.hideWidget(t.button);
            }, this),
              (this._sourceActionsVisible = !1);
          }),
          (n.prototype._updateSourceActionsVisibility = function (t) {
            (this._sourceActionsVisible = !1),
              this._sourceActions.forEach(function (e) {
                !e.isVisibleForSources || e.isVisibleForSources(t)
                  ? (this._floatingToolbar.showWidget(e.button),
                    (this._sourceActionsVisible = !0))
                  : this._floatingToolbar.hideWidget(e.button);
              }, this);
          }),
          (n.prototype.attachHandlers = function () {
            S.tool.subscribe(this.onToolChanged.bind(this), {
              callWithLast: !0,
            }),
              this._chartWidgetCollection.selectedSources.subscribe(
                this.onSourceChanged.bind(this),
              ),
              this._chartWidgetCollection.layout.subscribe(
                this._updateCloneButtonTitle.bind(this),
              );
          }),
          (n.prototype._updateCloneButtonTitle = function () {
            this._setButtonTitle(this._cloneButton, this._cloneButtonTitle());
          }),
          (n.prototype.onToolChanged = function (t, e) {
            if (t && -1 !== t.toLowerCase().indexOf('linetool')) {
              e = e instanceof k ? e : new k(t.toLowerCase());
              this._hideAllSourceActions(),
                this.showPropertiesOf(t, e),
                this.showTemplatesOf({ tool: t, properties: e }),
                this._updateVisibility();
            } else
              this.selectedSources()
                ? this.onSourceChanged(this.selectedSources())
                : this.hide();
          }),
          (n.prototype.findSourceOnWidget = function (t) {
            var e, o, i;
            for (
              e = 0;
              e < this.activeChartWidget().model().panes().length;
              e++
            )
              for (
                o = this.activeChartWidget()
                  .model()
                  .panes()
                  [e].orderedSources(),
                  i = 0;
                i < o.length;
                i++
              )
                if (o[i] === t) return o[i];
          }),
          (n.prototype.onSourceChanged = function (t) {
            if (
              (this._hasAlertWathcedValue &&
                (this._hasAlertWathcedValue.destroy(),
                (this._hasAlertWathcedValue = null)),
              t && t.length)
            )
              if (1 === t.length) {
                var e = t[0];
                !M(e) || e instanceof L || !this.findSourceOnWidget(e)
                  ? this.hide()
                  : (!e.userEditEnabled() ||
                    ('LineToolBrush' !== e.toolname &&
                      this.activeChartWidget().model().lineBeingCreated())
                      ? this._hideAllSourceActions()
                      : (this._updateSourceActionsVisibility(t),
                        e.canHasAlert() &&
                          ((this._hasAlertWathcedValue = e.hasAlert.spawn()),
                          this._hasAlertWathcedValue.subscribe(
                            this._updateSourceActionsVisibility.bind(this, t),
                          ))),
                    this.showPropertiesOf(e.getConstructor(), e.properties()),
                    this.showTemplatesOf({ source: e }),
                    this._setupToggleLockButton(e),
                    this._updateVisibility());
              } else
                this._clearProperties(),
                  this._$templatesButton &&
                    this._floatingToolbar.removeWidget(
                      this._$templatesButton[0],
                    ),
                  this._updateSourceActionsVisibility(t),
                  this._setupToggleLockButton(t[0]),
                  this._updateVisibility();
            else this.hide();
          }),
          (n.prototype.showTemplatesOf = function (t) {
            var i, n, r, s, a;
            e.enabled('line_tool_templates') &&
              ((i = t.source)
                ? ((n = i.getConstructor()), (r = i.properties()))
                : ((n = t.tool), (r = t.properties)),
              this._$templatesButton &&
                (this._floatingToolbar.removeWidget(this._$templatesButton[0]),
                this._$templatesButton.remove(),
                (this._$templatesButton = null)),
              (s = this),
              (a = function (t) {
                i
                  ? (s
                      .activeChartWidget()
                      .model()
                      .applyLineToolTemplate(i, t, 'Apply Drawing Template'),
                    s.onSourceChanged([i]))
                  : (r.merge(t),
                    r.listeners().fire(this),
                    r.saveDefaults(),
                    s.onToolChanged(n, r));
              }),
              (TradingView.onWidget() && !window.is_authenticated) ||
                !e.enabled('linetoolpropertieswidget_template_button') ||
                ((this._templatesList = new P(n, a, {
                  buttonInner:
                    '<div class="tv-linetool-properties-toolbar__icon">' +
                    o('rXte') +
                    '</div><span class="tv-caret tv-caret--small tv-caret--colored tv-linetool-properties-toolbar__caret"></span>',
                  buttonClass:
                    'tv-linetool-properties-toolbar__button apply-common-tooltip',
                  defaultsCallback: function () {
                    void 0 !== i
                      ? s
                          .activeChartWidget()
                          .model()
                          .restorePropertiesForSource(i)
                      : r._restoreFactoryDefaults();
                    s.showPropertiesOf(n, r);
                  },
                  saveAsText: $.t('Save Drawing Template As...'),
                  applyDefaultText: $.t('Apply Default Drawing Template'),
                  getDataForSaveAs: i
                    ? function () {
                        return i.template();
                      }
                    : null,
                  popupActiveClass: 'i-dropped',
                  popupDirection: this._bindPopupMenuDirection.bind(this),
                })),
                (this._$templatesButton = this._templatesList
                  .createButton()
                  .attr('title', $.t('Templates'))
                  .on(
                    'click',
                    function () {
                      this._trackContextAction('Templates');
                    }.bind(this),
                  )),
                this._floatingToolbar.addWidget(this._$templatesButton[0], {
                  index: 0,
                })),
              (this._templatesVisible = !0));
          }),
          (n.prototype.templatesList = function () {
            return this._templatesList;
          }),
          (n.prototype._createButton = function (t) {
            var e, o, i;
            return (
              (t = t || {}),
              (e = document.createElement('div')),
              this._setButtonTitle(e, t.title),
              (e.className +=
                'tv-linetool-properties-toolbar__button apply-common-tooltip'),
              e.addEventListener('click', t.callback),
              t.svgIcon &&
                ((o = document.createElement('div')).classList.add(
                  'tv-linetool-properties-toolbar__icon',
                ),
                o.appendChild(t.svgIcon),
                e.appendChild(o)),
              t.addCaret &&
                (((i = document.createElement('div')).className =
                  'tv-caret tv-caret--small tv-caret--colored tv-linetool-properties-toolbar__caret'),
                e.appendChild(i)),
              e
            );
          }),
          (n.prototype._setButtonTitle = function (t, e) {
            t.setAttribute('title', e);
          }),
          (n.prototype._createSettingsButton = function () {
            var t = this;
            return this._createButton({
              title: $.t('Settings'),
              callback: function () {
                t._trackContextAction('Settings'),
                  t
                    .activeChartWidget()
                    .showChartPropertiesForSource(
                      t.selectedSources()[0],
                      null,
                      { onWidget: t.activeChartWidget()._options.onWidget },
                    );
              },
              svgIcon: $(o('RsxI'))[0],
            });
          }),
          (n.prototype._createZOrderButton = function () {
            var t = this._createButton({
              title: $.t('Visual Order'),
              callback: function () {
                t.classList.contains('i-dropped') ||
                  (this._trackContextAction('Visual order'),
                  $(t).trigger('button-popup', [this._getZOrderActions()]));
              }.bind(this),
              svgIcon: $(o('tzjn'))[0],
              addCaret: !0,
            });
            return (
              E($(t), null, {
                direction: this._bindPopupMenuDirection.bind(this),
                event: 'button-popup',
                reverse: !1,
                notCloseOnButtons: !0,
                activeClass: 'i-dropped',
              }),
              t
            );
          }),
          (n.prototype._cloneButtonTitle = function () {
            var t = $.t('Clone');
            return (
              e.enabled('datasource_copypaste') && (t += ', ' + $.t('Copy')),
              V(this._chartWidgetCollection.layout.value()) &&
                (t += ', ' + $.t('Sync')),
              t
            );
          }),
          (n.prototype._createCloneButton = function () {
            var t = this._createButton({
              title: this._cloneButtonTitle(),
              callback: function () {
                t.classList.contains('i-dropped') ||
                  (this._trackContextAction('Clone'),
                  $(t).trigger('button-popup', [this._getCloneActions()]));
              }.bind(this),
              svgIcon: $(o('WRHa'))[0],
              addCaret: !0,
            });
            return (
              E($(t), null, {
                direction: this._bindPopupMenuDirection.bind(this),
                event: 'button-popup',
                reverse: !1,
                notCloseOnButtons: !0,
                activeClass: 'i-dropped',
              }),
              t
            );
          }),
          (n.prototype._createLockButton = function () {
            var t = this._createButton({
              title: $.t('Lock'),
              callback: function () {
                this._trackContextAction('Lock'),
                  this.activeChartWidget().toggleLockSelectedObject();
              }.bind(this),
              svgIcon: $(o('gPdB'))[0],
            });
            return (
              (this._lockChangeListener = function (e) {
                t.classList.toggle('i-active', !!e.value());
              }),
              t
            );
          }),
          (n.prototype._createHideButton = function () {
            return this._createButton({
              title: $.t('Hide'),
              callback: function () {
                this._trackContextAction('Hide'),
                  this.activeChartWidget().hideSelectedObject();
              }.bind(this),
              svgIcon: $(o('nApS'))[0],
            });
          }),
          (n.prototype._createRemoveButton = function () {
            return this._createButton({
              title: $.t('Remove'),
              callback: function () {
                this._trackContextAction('Remove'),
                  this.activeChartWidget().removeSelectedSources();
              }.bind(this),
              svgIcon: $(o('RRhU'))[0],
            });
          }),
          (n.prototype._createSourceActions = function () {
            var t = [];
            return (
              e.enabled('property_pages') &&
                t.push({
                  button: this._createSettingsButton(),
                  isVisibleForSources: function (t) {
                    return 1 === t.length;
                  },
                }),
              (this._cloneButton = this._createCloneButton()),
              t.push(
                { button: this._createZOrderButton() },
                {
                  button: this._cloneButton,
                  isVisibleForSources: function (t) {
                    var e = this;
                    return t.filter(function (t) {
                      var o = TradingView.className(t.constructor);
                      return !e
                        .activeChartWidget()
                        .model()
                        .model()
                        .isSingleInstanceLineTool(o);
                    }).length;
                  }.bind(this),
                },
                { button: this._createLockButton() },
                { button: this._createHideButton() },
                { button: this._createRemoveButton() },
              ),
              t
            );
          }),
          (n.prototype._getCloneActions = function () {
            var t = this.activeChartWidget().model(),
              o = this.selectedSources(),
              i = [],
              n = o.filter(function (t) {
                return t.properties().clonable.value();
              });
            return (
              n.length &&
                i.push({
                  title: $.t('Clone'),
                  action: function () {
                    t.cloneLineTools(n);
                  },
                }),
              e.enabled('datasource_copypaste')
                ? (i.push({
                    title: $.t('Copy'),
                    shortcut: 'Ctrl-C',
                    action: function () {
                      t.copySourcesToClip(o);
                    },
                  }),
                  V(this._chartWidgetCollection.layout.value())
                    ? (o.filter(function (t) {
                        return !!t.linkKey;
                      }).length
                        ? i.push({
                            title: $.t('Stop syncing'),
                            action: function () {
                              t.unlinkLines(o);
                            },
                          })
                        : i.push({
                            title: $.t('Sync to all charts'),
                            action: function () {
                              t.copyToOtherCharts(o);
                            },
                          }),
                      i)
                    : i)
                : i
            );
          }),
          (n.prototype._getZOrderActions = function () {
            var t = [],
              e = this.selectedSources(),
              o = this.activeChartWidget().model(),
              i = {
                title: $.t('Bring to Front'),
                action: function () {
                  o.bringToFront(e);
                },
              },
              n = {
                title: $.t('Send to Back'),
                action: function () {
                  o.sendToBack(e);
                },
              },
              r = {
                title: $.t('Bring Forward'),
                action: function () {
                  o.changeZOrder(e, 1);
                },
              },
              s = {
                title: $.t('Send Backward'),
                action: function () {
                  o.changeZOrder(e, -1);
                },
              },
              a = o.paneForSource(e[0]),
              l = a.getZOrderMinMax();
            return (
              1 === e.length &&
                e[0].zorder() === l.minZOrder &&
                ((n.disabled = !0), (s.disabled = !0)),
              1 === e.length &&
                e[0].zorder() === l.maxZOrder &&
                ((r.disabled = !0), (i.disabled = !0)),
              t.push(i, n, r, s),
              t
            );
          }),
          (n.prototype._getPossibleProperty = function (t) {
            var e,
              o,
              i = [],
              r = this._defaultToolProperties();
            for (e = 0; e < r.length; e++) (o = r[e]).name in t && i.push(o);
            return (
              t.extendLeft ||
                (i = i.map(function (t) {
                  return (
                    'leftEnd' === t.name &&
                      (t.comboboxOptions = t.comboboxOptions.filter(function (
                        t,
                      ) {
                        return t.value !== n.LINE_EXTEND;
                      })),
                    t
                  );
                })),
              t.extendRight ||
                (i = i.map(function (t) {
                  return (
                    'rightEnd' === t.name &&
                      (t.comboboxOptions = t.comboboxOptions.filter(function (
                        t,
                      ) {
                        return t.value !== n.LINE_EXTEND;
                      })),
                    t
                  );
                })),
              i
            );
          }),
          (n.prototype.showPropertiesOf = function (t, e) {
            var o, i, n, a, l, d, c, p;
            if (
              (this._toolExceptionCases ||
                (this._toolExceptionCases = this._createToolExceptionCases()),
              (o = this._toolExceptionCases[t] || this._getPossibleProperty(e)),
              this._clearProperties(),
              (this._propertiesVisible = !1),
              o.length)
            ) {
              for (i = {}, n = o.length - 1; n >= 0; --n)
                if (
                  ((l = e[(a = o[n]).name]),
                  'function' != typeof (d = a.showIf) || d(l, e))
                ) {
                  if (!l) continue;
                  if (
                    ((this._propertiesVisible = !0),
                    (c = []),
                    'combobox' !== a.inputType)
                  ) {
                    (p = this.colorPropertyControl(l, a, e)),
                      this._floatingToolbar.addWidget(p[0], {
                        index: this._$templatesButton ? 1 : 0,
                      }),
                      this._toolbarWidgets.push(p);
                    continue;
                  }
                  a.simple
                    ? a.comboboxOptions.forEach(r.bind(null, c))
                    : a.comboboxOptions.forEach(s.bind(null, c)),
                    a.propertyProxy &&
                      (l = a.propertyProxy(
                        e,
                        this.activeChartWidget().model(),
                      )),
                    (i[a.name] = l),
                    l.subscribe(
                      this,
                      this._onPropertyChanged.bind(this, a.name, l),
                    ),
                    this._floatingToolbar.addGroupedWidget(
                      {
                        id: a.name,
                        currentStateId: l.value(),
                        stateWidgetAddClass:
                          'tv-linetool-properties-toolbar__sub-widget',
                        states: c,
                        widgetAddClass:
                          'tv-linetool-properties-toolbar__grouped-button',
                        tooltip: a.title,
                      },
                      { index: this._$templatesButton ? 1 : 0 },
                    );
                }
              this._currentProperties = i;
            }
          }),
          (n.prototype._updateVisibility = function () {
            this._propertiesVisible ||
            this._sourceActionsVisible ||
            this._templatesVisible
              ? this._show()
              : this.hide();
          }),
          (n.prototype._clearProperties = function () {
            this._currentProperties &&
              (this._clearProeprtiesOnHideTimeoutId &&
                (clearTimeout(this._clearProeprtiesOnHideTimeoutId),
                (this._clearProeprtiesOnHideTimeoutId = null)),
              Object.keys(this._currentProperties).forEach(function (t) {
                this._currentProperties[t].unsubscribeAll(this),
                  this._floatingToolbar.removeGroupedWidget(t);
              }, this),
              (this._currentProperties = null),
              this._toolbarWidgets.forEach(function (t) {
                this._floatingToolbar.removeWidget(t[0]), t.remove();
              }, this),
              (this._toolbarWidgets = []),
              this.clearBindings());
          }),
          (n.prototype.hide = function () {
            this._floatingToolbar.hide(),
              (this._clearProeprtiesOnHideTimeoutId = setTimeout(
                this._clearProperties.bind(this),
                this._floatingToolbar.hideDuration(),
              ));
          }),
          (n.prototype._show = function () {
            this._floatingToolbar.show();
          }),
          (n.prototype.refresh = function () {
            this.onSourceChanged(this.selectedSources());
          }),
          (n.prototype._setupToggleLockButton = function (t) {
            t !== this._selectedSourceBk &&
              (this._selectedSourceBk &&
                this._selectedSourceBk.properties().frozen &&
                this._selectedSourceBk
                  .properties()
                  .frozen.unsubscribe(this, this._lockChangeListener),
              t &&
                t.properties().frozen &&
                (t
                  .properties()
                  .frozen.subscribe(this, this._lockChangeListener),
                this._lockChangeListener(t.properties().frozen)),
              (this._selectedSourceBk = t));
          }),
          (n.prototype.bindControl = function (t) {
            this._bindings.push(t);
          }),
          (n.prototype.clearBindings = function (t) {
            for (var e = this._bindings.length; e--; )
              this._bindings[e].destroy();
            this._bindings.length = 0;
          }),
          (n.prototype.colorPropertyControl = function (t, e, o) {
            var i,
              r,
              s = W.prototype.createColorPicker({
                addClass:
                  'tv-linetool-properties-toolbar__color-picker apply-common-tooltip',
                direction: this._bindPopupMenuDirection.bind(this),
              });
            return (
              s.attr('title', e.title),
              (i = s.find('input')),
              (r = $(e.iconSvgCode)).on('click', function (t) {
                i.data('tvcolorpicker') || i.focus();
              }),
              $(document).on('click', function (t) {
                i.data('tvcolorpicker')
                  ? i.addClass('i-active')
                  : i.removeClass('i-active');
              }),
              i.after(r),
              this.bindControl(
                new T(
                  s,
                  t,
                  !0,
                  this.activeChartWidget().model(),
                  null,
                  n.getTransparency(e, o),
                ),
              ),
              'string' == typeof e.addClass && s.addClass(e.addClass),
              s
            );
          }),
          (n.getTransparency = function (t, e) {
            if (t.transparency)
              return t.transparencyField
                ? e[t.transparencyField].value()
                : e.transparency.value();
          }),
          (n.prototype.createLineEndPropertyProxy = function (t, e) {
            return function (o, r) {
              var s, a;
              return (
                (s = o[e] && o[e].value() ? n.LINE_EXTEND : o[t].value()),
                (a = new i(s)).subscribe(this, function (i) {
                  var n = i.value();
                  n < 2
                    ? (r.beginUndoMacro(''),
                      o[t].setValue(n),
                      o[e] && o[e].setValue(!1),
                      r.endUndoMacro())
                    : (r.beginUndoMacro(''),
                      o[t].setValue(z.Normal),
                      o[e] && o[e].setValue(!0),
                      r.endUndoMacro());
                }),
                a
              );
            };
          }),
          (n.LINE_EXTEND = 42),
          (l = a(o('wLZl'))),
          (d = a(o('XqDt'))),
          (c = a(o('znEV'))),
          (p = a(o('NDCK'))),
          (u = a(o('9On3'))),
          (h = a(o('Nz7V'))),
          (g = a(o('dhuF'))),
          (_ = a(o('n2Ch'))),
          (v = a(o('eHtW'))),
          (f = a(o('BiGZ'))),
          (b = a(o('fUH/'))),
          (y = a(o('BsMi'))),
          (w = o('HKvk')),
          (m = o('2JFs')),
          (C = o('Kjbl')),
          (n.prototype._defaultToolProperties = function () {
            return [
              {
                name: 'color',
                inputType: 'colorPicker',
                iconSvgCode: w,
                title: $.t('Color'),
              },
              {
                name: 'linecolor',
                inputType: 'colorPicker',
                iconSvgCode: w,
                title: $.t('Color'),
              },
              {
                name: 'backgroundColor',
                inputType: 'colorPicker',
                iconSvgCode: m,
                title: $.t('Background Color'),
                transparency: !0,
              },
              {
                name: 'linewidth',
                inputType: 'combobox',
                comboboxOptions: [
                  { value: 1, iconSvgCode: l },
                  { value: 2, iconSvgCode: d },
                  { value: 3, iconSvgCode: c },
                  { value: 4, iconSvgCode: p },
                ],
                title: $.t('Width'),
              },
              {
                name: 'linestyle',
                title: $.t('Style'),
                inputType: 'combobox',
                comboboxOptions: [
                  { value: 0, iconSvgCode: l },
                  { value: 1, iconSvgCode: u },
                  { value: 2, iconSvgCode: h },
                ],
              },
              {
                name: 'leftEnd',
                title: $.t('Left End'),
                inputType: 'combobox',
                comboboxOptions: [
                  { value: z.Normal, iconSvgCode: g },
                  { value: z.Arrow, iconSvgCode: _ },
                  { value: n.LINE_EXTEND, iconSvgCode: v },
                ],
                propertyProxy: this.createLineEndPropertyProxy(
                  'leftEnd',
                  'extendLeft',
                ),
              },
              {
                name: 'rightEnd',
                title: $.t('Right End'),
                inputType: 'combobox',
                comboboxOptions: [
                  { value: z.Normal, iconSvgCode: f },
                  { value: z.Arrow, iconSvgCode: b },
                  { value: n.LINE_EXTEND, iconSvgCode: y },
                ],
                propertyProxy: this.createLineEndPropertyProxy(
                  'rightEnd',
                  'extendRight',
                ),
              },
            ];
          }),
          (n.prototype._riskPropertiesExceptionCases = function () {
            return [
              {
                name: 'textcolor',
                title: $.t('Text color'),
                inputType: 'colorPicker',
                iconSvgCode: C,
              },
              {
                name: 'profitBackground',
                title: $.t('Profit Background Color'),
                inputType: 'colorPicker',
                iconSvgCode: m,
                transparency: !0,
                transparencyField: 'profitBackgroundTransparency',
              },
              {
                name: 'stopBackground',
                title: $.t('Stop Background Color'),
                inputType: 'colorPicker',
                iconSvgCode: m,
                transparency: !0,
                transparencyField: 'stopBackgroundTransparency',
              },
              {
                name: 'linecolor',
                title: $.t('Border color'),
                inputType: 'colorPicker',
                iconSvgCode: w,
              },
            ];
          }),
          (n.prototype._elliottPropertiesExceptionCases = function () {
            return [
              {
                name: 'color',
                title: $.t('Color'),
                inputType: 'colorPicker',
                iconSvgCode: w,
              },
            ];
          }),
          (n.prototype._rangeExceptionCases = function () {
            return [
              {
                name: 'linecolor',
                inputType: 'colorPicker',
                iconSvgCode: w,
                title: $.t('Color'),
              },
              {
                name: 'backgroundColor',
                inputType: 'colorPicker',
                iconSvgCode: m,
                title: $.t('Background Color'),
                transparency: !0,
                transparencyField: 'backgroundTransparency',
              },
              {
                name: 'linewidth',
                inputType: 'combobox',
                comboboxOptions: [
                  { value: 1, iconSvgCode: l },
                  { value: 2, iconSvgCode: d },
                  { value: 3, iconSvgCode: c },
                  { value: 4, iconSvgCode: p },
                ],
                title: 'Width',
              },
            ];
          }),
          (n.prototype._textPropertiesExceptionCases = function () {
            return [
              {
                name: 'color',
                title: $.t('Text color'),
                inputType: 'colorPicker',
                iconSvgCode: C,
              },
              {
                name: 'backgroundColor',
                title: $.t('Background Color'),
                inputType: 'colorPicker',
                iconSvgCode: m,
                showIf: function (t, e) {
                  return !e || !e.fillBackground || !!e.fillBackground.value();
                },
              },
              {
                name: 'borderColor',
                title: $.t('Border Color'),
                inputType: 'colorPicker',
                iconSvgCode: w,
              },
              {
                name: 'bordercolor',
                title: $.t('Border Color'),
                inputType: 'colorPicker',
                iconSvgCode: w,
              },
              {
                name: 'fontsize',
                title: $.t('Font Size'),
                inputType: 'combobox',
                simple: !0,
                addClass: 'simple fontsize-dropdown',
                comboboxOptions: [10, 11, 12, 14, 16, 20, 24, 28, 32, 40],
              },
            ];
          }),
          (n.prototype._notePropertiesExceptionCases = function () {
            return [
              {
                name: 'markerColor',
                title: $.t('Marker Color'),
                inputType: 'colorPicker',
                iconSvgCode: w,
              },
              {
                name: 'textColor',
                title: $.t('Text color'),
                inputType: 'colorPicker',
                iconSvgCode: C,
              },
              {
                name: 'fontSize',
                title: $.t('Font Size'),
                inputType: 'combobox',
                simple: !0,
                addClass: 'simple fontsize-dropdown',
                comboboxOptions: [10, 11, 12, 14, 16, 20, 24, 28, 32, 40],
              },
            ];
          }),
          (n.prototype._brushPropertiesExceptionCases = function () {
            return [
              {
                name: 'linecolor',
                inputType: 'colorPicker',
                iconSvgCode: w,
                title: $.t('Color'),
              },
              {
                name: 'backgroundColor',
                inputType: 'colorPicker',
                iconSvgCode: m,
                transparency: !0,
                showIf: function (t, e) {
                  return e.fillBackground.value();
                },
                title: $.t('Background Color'),
              },
              {
                name: 'linewidth',
                inputType: 'combobox',
                comboboxOptions: [
                  { value: 1, iconSvgCode: l },
                  { value: 2, iconSvgCode: d },
                  { value: 3, iconSvgCode: c },
                  { value: 4, iconSvgCode: p },
                ],
                title: $.t('Line Width'),
              },
              {
                name: 'leftEnd',
                title: $.t('Left End'),
                inputType: 'combobox',
                comboboxOptions: [
                  { value: z.Normal, iconSvgCode: g },
                  { value: z.Arrow, iconSvgCode: _ },
                ],
                propertyProxy: this.createLineEndPropertyProxy(
                  'leftEnd',
                  'extendLeft',
                ),
              },
              {
                name: 'rightEnd',
                title: $.t('Right End'),
                inputType: 'combobox',
                comboboxOptions: [
                  { value: z.Normal, iconSvgCode: f },
                  { value: z.Arrow, iconSvgCode: b },
                ],
                propertyProxy: this.createLineEndPropertyProxy(
                  'rightEnd',
                  'extendRight',
                ),
              },
            ];
          }),
          (n.prototype._oneColorForAllLines = function () {
            return [
              {
                name: 'collectibleColors',
                inputType: 'colorPicker',
                iconSvgCode: w,
                title: $.t('One color for all lines'),
              },
            ];
          }),
          (n.prototype._trackContextAction = function (t) {
            F('GUI', 'Context action on drawings', t);
          }),
          (n.prototype._createToolExceptionCases = function () {
            return {
              LineToolRegressionTrend: [],
              LineToolGannSquare: n.prototype._oneColorForAllLines(),
              LineToolFibTimeZone: n.prototype._oneColorForAllLines(),
              LineToolBrush: n.prototype._brushPropertiesExceptionCases(),
              LineToolPolyline: n.prototype._brushPropertiesExceptionCases(),
              LineToolText: n.prototype._textPropertiesExceptionCases(),
              LineToolTextAbsolute: n.prototype._textPropertiesExceptionCases(),
              LineToolBalloon: n.prototype._textPropertiesExceptionCases(),
              LineToolCallout: n.prototype._textPropertiesExceptionCases(),
              LineToolPriceLabel: n.prototype._textPropertiesExceptionCases(),
              LineToolArrowMarkLeft: [],
              LineToolArrowMarkRight: [],
              LineToolArrowMarkUp: [],
              LineToolArrowMarkDown: [],
              LineToolFlagMark: [],
              LineToolThumbUp: [],
              LineToolThumbDown: [],
              LineToolElliottCircle: n.prototype._elliottPropertiesExceptionCases(),
              LineToolElliottSubminuette: n.prototype._elliottPropertiesExceptionCases(),
              LineToolElliottMinor: n.prototype._elliottPropertiesExceptionCases(),
              LineToolElliottMinorRetr: n.prototype._elliottPropertiesExceptionCases(),
              LineToolElliottMajorRetr: n.prototype._elliottPropertiesExceptionCases(),
              LineToolDateRange: n.prototype._rangeExceptionCases(),
              LineToolPriceRange: n.prototype._rangeExceptionCases(),
              LineToolDateAndPriceRange: n.prototype._rangeExceptionCases(),
              LineToolIcon: [
                {
                  name: 'color',
                  title: $.t('Color'),
                  inputType: 'colorPicker',
                  iconSvgCode: m,
                },
              ],
              LineToolNote: n.prototype._notePropertiesExceptionCases(),
              LineToolNoteAbsolute: n.prototype._notePropertiesExceptionCases(),
              LineToolThreeDrivers: [
                {
                  name: 'color',
                  title: $.t('Text color'),
                  inputType: 'colorPicker',
                  iconSvgCode: w,
                },
              ],
              LineToolRiskRewardLong: n.prototype._riskPropertiesExceptionCases(),
              LineToolRiskRewardShort: n.prototype._riskPropertiesExceptionCases(),
              LineToolBarsPattern: [
                {
                  name: 'color',
                  title: $.t('Color'),
                  inputType: 'colorPicker',
                  iconSvgCode: m,
                },
              ],
              LineToolProjection: [
                {
                  name: 'color1',
                  title: $.t('Background color 1'),
                  inputType: 'colorPicker',
                  iconSvgCode: m,
                  transparency: !0,
                },
                {
                  name: 'color2',
                  title: $.t('Background color 2'),
                  inputType: 'colorPicker',
                  iconSvgCode: m,
                  transparency: !0,
                },
                {
                  name: 'linewidth',
                  inputType: 'combobox',
                  comboboxOptions: [
                    { value: 1, iconSvgCode: l },
                    { value: 2, iconSvgCode: d },
                    { value: 3, iconSvgCode: c },
                    { value: 4, iconSvgCode: p },
                  ],
                },
              ],
              LineToolFibCircles: n.prototype._oneColorForAllLines(),
              LineToolFibChannel: n.prototype._oneColorForAllLines(),
              LineToolFibSpeedResistanceArcs: n.prototype._oneColorForAllLines(),
              LineToolFibRetracement: n.prototype._oneColorForAllLines(),
              LineToolFibSpeedResistanceFan: n.prototype._oneColorForAllLines(),
              LineToolTrendBasedFibTime: n.prototype._oneColorForAllLines(),
              LineToolFibWedge: n.prototype._oneColorForAllLines(),
              LineToolGannComplex: n.prototype._oneColorForAllLines(),
              LineToolGannFixed: n.prototype._oneColorForAllLines(),
              LineToolGannFan: n.prototype._oneColorForAllLines(),
              LineToolPitchfan: n.prototype._oneColorForAllLines(),
              LineToolPitchfork: n.prototype._oneColorForAllLines(),
              LineToolSchiffPitchfork2: n.prototype._oneColorForAllLines(),
              LineToolSchiffPitchfork: n.prototype._oneColorForAllLines(),
              LineToolInsidePitchfork: n.prototype._oneColorForAllLines(),
              LineToolTrendBasedFibExtension: n.prototype._oneColorForAllLines(),
            };
          }),
          (t.exports = n);
      }.call(this, o('Kxc7'), o('tc+8')));
    },
    tzjn: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.5 2H0v12c0 .825.675 1.5 1.5 1.5h12V14h-12V2zm13.056-2H4.445c-.794 0-1.444.65-1.444 1.444v10.111c0 .794.65 1.444 1.444 1.444h10.111c.794 0 1.444-.65 1.444-1.444V1.444C16 .65 15.35 0 14.556 0z"/></svg>';
    },
    wLZl: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M1.5 2a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1h-19z"/></svg>';
    },
    yB98: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 12"><path fill-rule="evenodd" d="M0 0h2v2H0V0zm4 0h2v2H4V0zM0 5h2v2H0V5zm4 0h2v2H4V5zm-4 5h2v2H0v-2zm4 0h2v2H4v-2z"/></svg>';
    },
    znEV: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 6" width="22" height="6"><path d="M2 1a1.5 1.5 0 0 0 0 3h18a1.5 1.5 0 0 0 0-3H2z"/></svg>';
    },
  },
]);
