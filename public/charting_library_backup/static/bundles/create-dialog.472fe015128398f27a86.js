(window.webpackJsonp = window.webpackJsonp || []).push([
  ['create-dialog'],
  {
    '33OQ': function (t, e, i) {
      'use strict';
      (function (o) {
        function s() {
          (d.width = window.innerWidth), (d.height = p.height());
        }
        function n(t) {
          var e = d.device;
          (d.device = t), d.trigger('changeDevice', [t, e]);
        }
        var r, h, a, l, p, c, d, u, _, g, f, v;
        for (
          Object.defineProperty(e, '__esModule', { value: !0 }),
            r = i('4O8T'),
            h = (f = r) && f.__esModule ? f : { default: f },
            a = i('BI5g'),
            l = $('body'),
            p = $(window),
            c = 0,
            d = {
              width: null,
              height: null,
              device: null,
              isSafari:
                !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ||
                !!navigator.userAgent.match('CriOS'),
              getScrollbarWidth:
                ((v = void 0),
                function () {
                  var t, e, i, o;
                  return (
                    void 0 === v &&
                      (((t = document.createElement('div')).style.visibility =
                        'hidden'),
                      (t.style.width = '100px'),
                      (t.style.msOverflowStyle = 'scrollbar'),
                      document.body.appendChild(t),
                      (e = t.offsetWidth),
                      (t.style.overflow = 'scroll'),
                      ((i = document.createElement('div')).style.width =
                        '100%'),
                      t.appendChild(i),
                      (o = i.offsetWidth),
                      t.parentNode.removeChild(t),
                      (v = e - o)),
                    v
                  );
                }),
              hasScroll: function (t) {
                return t.get(0).scrollHeight > t.height();
              },
              breakpoints: a.breakpoints,
              widgetbarBreakpoint: 1064,
              setFixedBodyState: function (t) {
                var e, i;
                t && 1 == ++c
                  ? ('hidden' !==
                      $(document.body).css('overflow').toLowerCase() &&
                      document.body.scrollHeight > document.body.offsetHeight &&
                      ($('.widgetbar-wrap').css('right', d.getScrollbarWidth()),
                      l
                        .css(
                          'padding-right',
                          parseInt(l.css('padding-right').replace('px', '')) +
                            d.getScrollbarWidth() +
                            'px',
                        )
                        .data('wasScroll', !0)),
                    l.addClass('i-no-scroll'))
                  : !t &&
                    c > 0 &&
                    0 == --c &&
                    (l.removeClass('i-no-scroll'),
                    l.data('wasScroll') &&
                      ((e = l.get(0)),
                      $('.widgetbar-wrap').css('right', 0),
                      (i = $('.widgetbar-wrap').width() || 0),
                      e.scrollHeight <= e.clientHeight &&
                        (i -= d.getScrollbarWidth()),
                      l
                        .css('padding-right', (i < 0 ? 0 : i) + 'px')
                        .data('wasScroll', void 0)));
              },
            },
            u = Object.keys(d.breakpoints).sort(function (t, e) {
              return d.breakpoints[t] - d.breakpoints[e];
            }),
            o.extend(d, h.default.prototype),
            s(),
            $(s),
            p.on('resize', s),
            _ = function (t) {
              var e,
                i,
                o = u[t],
                r = 0 === t ? 0 : d.breakpoints[u[t - 1]] + 1,
                h = d.breakpoints[o],
                a =
                  ((e = r),
                  (i = h) === 1 / 0
                    ? window.matchMedia('(min-width: ' + e + 'px)')
                    : window.matchMedia(
                        '(min-width: ' + e + 'px) and (max-width: ' + i + 'px)',
                      ));
              a.matches && n(o),
                a.addListener(function (t) {
                  t.matches && (s(), n(o));
                });
            },
            g = 0;
          g < u.length;
          g++
        )
          _(g);
        (e.default = d), (t.exports = e.default);
      }.call(this, i('F/us')));
    },
    '5qpw': function (t, e, i) {
      'use strict';
      function o(t) {
        return t in $.fn
          ? Promise.resolve()
          : (r ||
              (r = new Promise(function (t) {
                Promise.all([i.e(57), i.e('lazy-jquery-ui')])
                  .then(
                    function (e) {
                      i('ONnG'), t();
                    }.bind(null, i),
                  )
                  .catch(i.oe);
              })),
            r);
      }
      function s(t) {
        return new h(t);
      }
      var n, r, h;
      i.r(e),
        i.d(e, 'LazyJqueryUI', function () {
          return h;
        }),
        i.d(e, 'lazyJqueryUI', function () {
          return s;
        }),
        (n = i('P5fv')),
        (h = (function () {
          function t(t) {
            this._$elem = t;
          }
          return (
            (t.prototype.draggable = function () {
              var t = arguments,
                e = this._$elem;
              return o('draggable').then(function () {
                return e.draggable.apply(e, t);
              });
            }),
            (t.prototype.resizable = function () {
              var t = arguments,
                e = this._$elem;
              return o('resizable').then(function () {
                return e.resizable.apply(e, t);
              });
            }),
            (t.prototype.sortable = function () {
              var t = arguments,
                e = this._$elem;
              return o('sortable').then(function () {
                return e.sortable.apply(e, t);
              });
            }),
            (t.prototype.datepicker = function () {
              var t = arguments,
                e = this._$elem;
              return o('datepicker').then(function () {
                return e.datepicker.apply(e, t);
              });
            }),
            t
          );
        })());
    },
    BI5g: function (t, e, i) {
      'use strict';
      var o, s;
      i.r(e),
        i.d(e, 'breakpoints', function () {
          return o;
        }),
        i.d(e, 'mobileFirstBreakpoints', function () {
          return s;
        }),
        (o = {
          desktop: 1 / 0,
          desktopHd: 1919,
          phone: 767,
          'phone-vertical': 479,
          tablet: 1019,
        }),
        (s = {
          base: 0,
          'phone-vertical': 330,
          phone: 480,
          tablet: 768,
          notebook: 1020,
          desktop: 1540,
          'desktop-hd': 1920,
        });
    },
    IwoD: function (t, e, i) {},
    YDhE: function (t, e, i) {
      'use strict';
      function o(t) {
        var e = t.type || 'popup';
        return delete t.type, 'modal' === e ? new s.a(t) : new n.a(t);
      }
      var s, n;
      i.r(e),
        i.d(e, 'createDialog', function () {
          return o;
        }),
        (s = i('6aJD')),
        (n = i('tKRU'));
    },
    jAh7: function (t, e, i) {
      'use strict';
      function o(t) {
        var e, i, o;
        return (
          void 0 === t && (t = document),
          null !== (e = t.getElementById('overlap-manager-root'))
            ? Object(s.ensureDefined)(h.get(e))
            : ((i = new r(t)),
              (o = (function (t) {
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
              h.set(o, i),
              i.setContainer(o),
              t.body.appendChild(o),
              i)
        );
      }
      var s, n, r, h;
      i.r(e),
        i.d(e, 'OverlapManager', function () {
          return r;
        }),
        i.d(e, 'getRootOverlapManager', function () {
          return o;
        }),
        (s = i('Eyy1')),
        (n = (function () {
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
        (r = (function () {
          function t(t) {
            void 0 === t && (t = document),
              (this._storage = new n()),
              (this._windows = new Map()),
              (this._index = 0),
              (this._document = t),
              (this._container = t.createDocumentFragment());
          }
          return (
            (t.prototype.setContainer = function (t) {
              var e = this._container,
                i = null === t ? this._document.createDocumentFragment() : t;
              !(function (t, e) {
                Array.from(t.childNodes).forEach(function (t) {
                  t.nodeType === Node.ELEMENT_NODE && e.appendChild(t);
                });
              })(e, i),
                (this._container = i);
            }),
            (t.prototype.registerWindow = function (t) {
              this._storage.has(t) || this._storage.add(t);
            }),
            (t.prototype.ensureWindow = function (t, e) {
              var i, o;
              return (
                void 0 === e && (e = { position: 'fixed' }),
                void 0 !== (i = this._windows.get(t))
                  ? i
                  : (this.registerWindow(t),
                    ((o = this._document.createElement('div')).style.position =
                      e.position),
                    (o.style.zIndex = this._index.toString()),
                    (o.dataset.id = t),
                    this._container.appendChild(o),
                    this._windows.set(t, o),
                    ++this._index,
                    o)
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
        (h = new WeakMap());
    },
    nec0: function (t, e, i) {},
    nzny: function (t, e, i) {},
    pLUm: function (t, e, i) {
      t.exports = { wrapper: 'wrapper-2KWBfDVB-', touch: 'touch-E6yQTRo_-' };
    },
    sFgq: function (t, e, i) {
      'use strict';
      (function (t) {
        function o(e, i, o) {
          var n,
            r,
            h = this;
          if (
            ((this._options = $.extend({}, this._defaultOptions, o || {})),
            (this._$wrapper = e),
            this._$wrapper.addClass(s.wrapper),
            (this._$content = i),
            (this._scroll_speed = 40),
            (this._shadow_offset = 10),
            (this._header_height = this._options.headerHeight),
            (this._scroll_margin_top = this._options.scrollMarginTop),
            (this.scrolled = new t()),
            (this.scrolltoend = new t()),
            (this.scrolltostart = new t()),
            (this.visibilityCallbacks = []),
            (this._touch = Modernizr.touch),
            this._touch)
          )
            return (
              this._$content.css('position', 'relative'),
              void this._$wrapper
                .addClass(s.touch)
                .scroll(this._onScroll.bind(this))
            );
          this._$wrapper.css('overflow', 'hidden'),
            this._$wrapper
              .on('mouseenter.sidebar-scroll', function () {
                h._bottomFixed ||
                  h._dragging ||
                  (h._options.alwaysVisible || h._$scrollBar.addClass('active'),
                  h._onScroll());
              })
              .on('mouseleave.sidebar-scroll', function () {
                h._bottomFixed ||
                  h._dragging ||
                  (h._options.alwaysVisible ||
                    h._$scrollBar.removeClass('active'),
                  h._onScroll());
              })
              .on('mousewheel.sidebar-scroll', function (t) {
                if (!t.isDefaultPrevented()) {
                  var e = t.deltaY * (t.deltaFactor / 100);
                  return h.scroll(e);
                }
              }),
            !1 !== this._options.showTopShadow &&
              (this._$shadowTop = $(
                '<div class="sb-inner-shadow top i-invisible">',
              ).appendTo(this._$wrapper)),
            !1 !== this._options.showBottomShadow &&
              (this._$shadowBottom = $(
                '<div class="sb-inner-shadow">',
              ).appendTo(this._$wrapper)),
            this._$shadowTop &&
              this._header_height &&
              this._$shadowTop.css(
                'top',
                this._header_height - this._shadow_offset,
              ),
            (n = this._options.additionalClass
              ? ' ' + this._options.additionalClass
              : ''),
            (r = this._options.alwaysVisible ? ' active-always' : ''),
            (this._$scrollBarWrapper = $(
              '<div class="sb-scrollbar-wrap">',
            ).appendTo(this._$wrapper)),
            (this._$scrollBar = $(
              '<div class="sb-scrollbar sb-scrollbar-body' + n + r + '"></div>',
            ).appendTo(this._$scrollBarWrapper)),
            this._onScroll();
        }
        var s,
          n = i('5qpw').lazyJqueryUI;
        i('nzny'),
          (s = i('pLUm')),
          (o.prototype.isTouch = function () {
            return this._touch;
          }),
          (o.prototype.getScrollBar = function () {
            return this._$scrollBar;
          }),
          (o.prototype._defaultOptions = {
            headerHeight: 0,
            additionalClass: '',
            alwaysVisible: !1,
            showBottomShadow: !0,
            scrollMarginTop: 1,
            bubbleScrollEvent: !1,
          }),
          (o.prototype.initDraggable = function () {
            if (this._dragInitialized) return this;
            var t = this;
            return (
              n(this._$scrollBar).draggable({
                axis: 'y',
                containment: this._$scrollBarWrapper,
                start: function () {
                  t._dragging = !0;
                },
                stop: function () {
                  t._dragging = !1;
                },
                drag: function (e, i) {
                  t.updateScroll();
                },
              }),
              (this._dragInitialized = !0),
              this
            );
          }),
          (o.prototype.updateScroll = function () {
            var t, e, i, o, s;
            return this._touch
              ? this
              : ((t = 1),
                (e = Math.ceil(
                  this._$scrollBar.position().top -
                    this._scroll_margin_top -
                    this._header_height,
                )),
                (i = this.getContainerHeightWithoutHeader()),
                (s = (o = this._$content.outerHeight()) - i - t),
                i <= 0
                  ? this
                  : ((this._scroll_target_top =
                      s <= 0
                        ? this._header_height
                        : Math.min(
                            (-e * o) / i + this._header_height,
                            this._header_height,
                          )),
                    e + this._$scrollBar.height() + 2 >= i
                      ? this.scrollToEnd()
                      : (this._$content.css(
                          'top',
                          this._scroll_target_top + 'px',
                        ),
                        this._onScroll()),
                    this));
          }),
          (o.prototype.getContainerHeightWithoutHeader = function () {
            return (
              this._$wrapper[0].getBoundingClientRect().height -
              this._header_height
            );
          }),
          (o.prototype.getContainerHeight = function () {
            return this._$wrapper[0].getBoundingClientRect().height;
          }),
          (o.prototype.getContentHeight = function () {
            return this._$content[0].getBoundingClientRect().height;
          }),
          (o.prototype.updateScrollBar = function () {
            var t, e, i, o, s, n, r, h, a;
            return this._touch
              ? this
              : ((t = 1),
                (e = this._$content.position().top),
                (i = this.getContentHeight()),
                (o = this.getContainerHeight()),
                (s = this.getContainerHeightWithoutHeader()),
                (n = t + this._header_height),
                (r = s - 2 * t),
                (h = ((Math.abs(e) - this._header_height) * r) / i),
                (a = (o * o) / i),
                this.isContentShort()
                  ? (this._$scrollBar.addClass('js-hidden'),
                    this._$wrapper.removeClass('sb-scroll-active'))
                  : (this._$scrollBar
                      .removeClass('js-hidden')
                      .height(a)
                      .css('top', n + h),
                    this._$wrapper.addClass('sb-scroll-active'),
                    this.initDraggable()),
                this);
          }),
          (o.prototype.scroll = function (t, e) {
            var i = this._$content.position().top,
              o = this._$content.outerHeight(),
              s = this.getContainerHeightWithoutHeader(),
              n = o - s - 1,
              r = e || this._scroll_speed;
            return (
              n <= 0 ||
              ((this._scroll_target_top = Math.max(
                -n + this._header_height,
                Math.min(this._header_height, i + t * r),
              )),
              this.setContentTop(this._scroll_target_top),
              this._onScroll())
            );
          }),
          (o.prototype.animateTo = function (t) {
            var e;
            return this._touch
              ? this
              : (e =
                  this._$content.outerHeight() -
                  this.getContainerHeightWithoutHeader() -
                  1) <= 0 ||
                  ((this._scroll_target_top = Math.max(
                    -e + this._header_height,
                    Math.min(this._header_height, -t),
                  )),
                  void this._$content.animate(
                    { top: this._scroll_target_top },
                    500,
                    function () {
                      this._onScroll();
                    }.bind(this),
                  ));
          }),
          (o.prototype.resize = function () {
            var t, e;
            this._bottomFixed ||
              ((t = this._$content.outerHeight()),
              (e = this._$wrapper.outerHeight()),
              !this._options.vAlignBottom && t < e
                ? this.atStart() || this.scrollToStart()
                : this.atEnd()
                ? this.scrollToEnd()
                : 'number' == typeof this._stickyBottom &&
                  this.setContentTop(
                    Math.min(
                      0,
                      this._stickyBottom +
                        this._$wrapper.outerHeight() -
                        this._$content.outerHeight(),
                    ),
                  ));
          }),
          (o.prototype.resizeHeader = function (t) {
            var e = t - this._header_height;
            (this._header_height = t),
              (this._scroll_target_top += e),
              this._$shadowTop &&
                this._$shadowTop.css(
                  'top',
                  this._header_height - this._shadow_offset,
                ),
              this.resize();
          }),
          (o.prototype.scrollTo = function (t, e) {
            var i, o, s, n, r;
            if (
              ((e = $.extend(
                {
                  position: 'visible',
                  areaHeight: t instanceof $ ? t.height() : 0,
                },
                e,
              )),
              t instanceof $ && (t = e.offsetTop || t.position().top),
              (i = this._$content.position().top),
              this._$content.outerHeight() -
                (o = this.getContainerHeightWithoutHeader()) -
                1 <=
                0)
            )
              return !0;
            if (
              ((n = (s = -1 * (i - this._header_height)) + o),
              (r = 0),
              'visible' === e.position)
            ) {
              if (t > s && t + e.areaHeight < n) return !1;
              r = t + e.areaHeight > n ? n - t - e.areaHeight : s - t;
            } else 'top' === e.position && (r = s - t);
            return this.scroll(r, 1), this._onScroll(), !1;
          }),
          (o.prototype.scrollToEnd = function () {
            var t = 1,
              e = this._$content.position().top,
              i = this._$content.outerHeight(),
              o = this._$wrapper.outerHeight(),
              s = i + e,
              n = i > o ? e + (o - s) + t : t;
            return this.setContentTop(n), this._onScroll(), this;
          }),
          (o.prototype.scrollToStart = function () {
            return (
              this.setContentTop(this._header_height), this._onScroll(), this
            );
          }),
          (o.prototype.currentPosition = function () {
            return Math.round(this._$content.position().top);
          }),
          (o.prototype.atStart = function () {
            return (
              Math.round(this._$content.position().top) >= this._header_height
            );
          }),
          (o.prototype.atEnd = function (t) {
            var e, i, o, s;
            return (
              ('number' == typeof t && isFinite(t)) || (t = 0),
              (e = 1),
              (i = Math.round(this._$content.position().top)),
              (o = this._$content.outerHeight()),
              (s = this._$wrapper.outerHeight()),
              o - Math.abs(i) - e <= s + t
            );
          }),
          (o.prototype._onScroll = function (t) {
            var e, i;
            return (
              this._touch || this._$content.css('bottom', 'auto'),
              this.scrolled.fire(),
              (this._dragging && !0 !== t) || this.updateScrollBar(),
              (e = this.atStart()),
              (i = this.atEnd()),
              this._$shadowTop &&
                this._$shadowTop.toggleClass('i-invisible', !!e),
              this._$shadowBottom &&
                this._$shadowBottom.toggleClass('i-invisible', !!i),
              this._onContentVisible(),
              !this._atStart && e
                ? ((this._atStart = !0), this.scrolltostart.fire())
                : this._atStart && !e && delete this._atStart,
              !this._atEnd && i
                ? ((this._atEnd = !0), this.scrolltoend.fire())
                : this._atEnd && !i && delete this._atEnd,
              this._options.vAlignBottom &&
                (this._stickyBottom =
                  this._$content.outerHeight() -
                  Math.abs(this._$content.position().top) -
                  this._$wrapper.outerHeight()),
              !(
                (!this._atStart && !this._atEnd) ||
                ('function' == typeof this._options.bubbleScrollEvent
                  ? !this._options.bubbleScrollEvent()
                  : !this._options.bubbleScrollEvent)
              )
            );
          }),
          (o.prototype.checkContentVisibility = function () {
            this._onContentVisible();
          }),
          (o.prototype.subscribeToContentVisible = function (t, e, i) {
            this.visibilityCallbacks.push({ id: t, $el: e, callback: i });
          }),
          (o.prototype.triggerVisibilityCallbacks = function (t) {
            this._onContentVisible(t);
          }),
          (o.prototype._contentIsVisible = function (t) {
            return t.$el.position().top > -1 * this.currentPosition();
          }),
          (o.prototype._onContentVisible = function (t) {
            var e, i, o;
            this.visibilityCallbacks.length &&
              ((e = t || this._contentIsVisible.bind(this)),
              (i = []),
              (o = this.visibilityCallbacks.filter(function (t, o) {
                if (!$.contains(this._$content, t.$el[0])) return !1;
                var s = e(t);
                return s && i.push(o), !s;
              }, this)),
              i.forEach(function (e) {
                this.visibilityCallbacks[e].callback(!!t);
              }, this),
              delete this.visibilityCallbacks,
              (this.visibilityCallbacks = o));
          }),
          (o.prototype.save = function () {
            return (
              (this._saved = {
                top: this._$content.position().top,
                height: this._$content.outerHeight(),
              }),
              this
            );
          }),
          (o.prototype.restore = function () {
            if (this._saved) {
              if (
                this._saved.top === this._$content.position().top &&
                this._saved.height === this._$content.outerHeight()
              )
                return delete this._saved, this;
              this._options.vAlignBottom &&
                ((this._saved.top -=
                  this._$content.outerHeight() - this._saved.height),
                this._saved.top > this._header_height &&
                  (this._saved.top = this._header_height)),
                this.setContentTop(this._saved.top),
                delete this._saved,
                this._onScroll(!0);
            }
            return this;
          }),
          (o.prototype.fixBottom = function () {
            var t, e;
            return this._bottomFixed
              ? this
              : (this._touch
                  ? ((t = this._$content.outerHeight()),
                    (e = this._$wrapper.scrollTop()),
                    (this._tempIntervalID = setInterval(
                      function () {
                        this._$wrapper.scrollTop(
                          e + (this._$content.outerHeight() - t),
                        );
                      }.bind(this),
                      0,
                    )))
                  : this._$content.css({
                      top: 'auto',
                      bottom:
                        this._$wrapper.outerHeight() -
                        this._$content.position().top -
                        this._$content.outerHeight(),
                    }),
                (this._bottomFixed = !0),
                this);
          }),
          (o.prototype.releaseBottom = function () {
            return this._bottomFixed
              ? (this._touch
                  ? clearInterval(this._tempIntervalID)
                  : this._$content.css({
                      top: this._$content.position().top,
                      bottom: 'auto',
                    }),
                delete this._bottomFixed,
                this._onScroll(),
                this)
              : this;
          }),
          (o.prototype.setContentTop = function (t) {
            return (
              this._touch
                ? this._options.vAlignBottom &&
                  this._$content.outerHeight() < this._$wrapper.outerHeight()
                  ? (this._$wrapper.css('overflow-y', 'visible'),
                    this._$content.css({ position: 'absolute', bottom: 0 }))
                  : (this._$content.css({
                      position: 'relative',
                      bottom: 'auto',
                    }),
                    this._$wrapper.css('overflow-y', 'auto'),
                    this._$wrapper.scrollTop(-t))
                : this._$content.css('top', t),
              this
            );
          }),
          (o.prototype.isContentShort = function () {
            var t = this.getContentHeight(),
              e = this.getContainerHeightWithoutHeader();
            return t <= e;
          }),
          (o.prototype.destroy = function () {
            this._$scrollBarWrapper && this._$scrollBarWrapper.remove(),
              this._$shadowBottom && this._$shadowBottom.remove(),
              this._$shadowTop && this._$shadowTop.remove(),
              this._$wrapper
                .attr('style', '')
                .off('mouseenter.sidebar-scroll')
                .off('mouseleave.sidebar-scroll')
                .off('mousewheel.sidebar-scroll'),
              this._$content.attr('style', '');
          }),
          (e.SidebarCustomScroll = o);
      }.call(this, i('aIyQ')));
    },
    uo4K: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596L1.293 2.707.586 2 2 .586l.707.707 3.889 3.889 3.889-3.889.707-.707L12.606 2l-.707.707L8.01 6.596l3.889 3.889.707.707-1.414 1.414-.707-.707L6.596 8.01l-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>';
    },
  },
]);
