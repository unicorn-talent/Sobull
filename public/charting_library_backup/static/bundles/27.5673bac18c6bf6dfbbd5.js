(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    '5qpw': function (t, o, e) {
      'use strict';
      function i(t) {
        return t in $.fn
          ? Promise.resolve()
          : (l ||
              (l = new Promise(function (t) {
                Promise.all([e.e(76), e.e('lazy-jquery-ui')])
                  .then(
                    function (o) {
                      e('ONnG'), t();
                    }.bind(null, e),
                  )
                  .catch(void 0);
              })),
            l);
      }
      function a(t) {
        return new s(t);
      }
      var n, l, s;
      e.r(o),
        e.d(o, 'LazyJqueryUI', function () {
          return s;
        }),
        e.d(o, 'lazyJqueryUI', function () {
          return a;
        }),
        (n = e('P5fv')),
        (s = (function () {
          function t(t) {
            this._$elem = t;
          }
          return (
            (t.prototype.draggable = function () {
              var t = arguments,
                o = this._$elem;
              return i('draggable').then(function () {
                return o.draggable.apply(o, t);
              });
            }),
            (t.prototype.resizable = function () {
              var t = arguments,
                o = this._$elem;
              return i('resizable').then(function () {
                return o.resizable.apply(o, t);
              });
            }),
            (t.prototype.sortable = function () {
              var t = arguments,
                o = this._$elem;
              return i('sortable').then(function () {
                return o.sortable.apply(o, t);
              });
            }),
            (t.prototype.datepicker = function () {
              var t = arguments,
                o = this._$elem;
              return i('datepicker').then(function () {
                return o.datepicker.apply(o, t);
              });
            }),
            t
          );
        })());
    },
    BhuR: function (t, o) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>';
    },
    GAqT: function (t, o, e) {
      'use strict';
      (function (o, i) {
        var a,
          n = e('Hr11').max,
          l = e('5qpw').lazyJqueryUI,
          s = e('jAh7').getRootOverlapManager;
        e('PVgW'),
          (a = {
            modalDialog: null,
            dialogs: [],
            NOTIFICATION_ANIMATION_START_OFFSET: '-33px',
            _constrainDraggableOptionsIfNeeded: function (t) {
              return (
                o.enabled('constraint_dialogs_movement') &&
                  (t.containment = '.chart-page'),
                t
              );
            },
            showNotice: function (t, o, e) {
              var n, l, s, d, r, c;
              return (
                'object' == typeof o && ((e = o), (o = '')),
                (n = (e = e || {}).doNotCloseOnBgClick || !1),
                (l = e.html || ''),
                (s = e.width || '400px'),
                ((d = {}).noClose = e.noClose || null),
                (d.addClass = e.modalDialogClass || null),
                a.createModalDialog(t, d),
                (r = e.centerCaption ? 'caption-big-center' : 'caption-big'),
                a.modalDialog.find('._tv-dialog').css('width', s),
                (c = e.customButtonCaption ? e.customButtonCaption : $.t('OK')),
                a.modalDialog
                  .find('._tv-dialog-content')
                  .html(
                    i.render(
                      '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                        l +
                        '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' +
                        c +
                        '"/></div>{{/removeOkButton}}</div>',
                      {
                        captionClassName: r,
                        classSuffix: e.classSuffix || '',
                        text: o,
                        removeOkButton: e && e.removeOkButton,
                      },
                    ),
                  ),
                a.modalDialog.find('._tv-button.ok').on('click', function () {
                  a.destroy(), e.onOkButtonClick && e.onOkButtonClick();
                }),
                a.positionDialog(),
                a.applyHandlers(!1, {
                  doNotCloseOnBgClickIfShadowbox: n,
                  beforeDestroy: e.onClose,
                }),
                a.modalDialog
              );
            },
            showCustomDialog: function (t) {
              function o(t) {
                a.destroy(), t.preventDefault();
              }
              return (
                a.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
                a.modalDialog
                  .find('._tv-dialog')
                  .css('width', t.width || '400px'),
                a.modalDialog
                  .find('._tv-dialog-content')
                  .html(
                    '<div class="main">' +
                      (t.html || $.t('Content')) +
                      '</div>',
                  ),
                a.modalDialog.find('.ok').click(o),
                a.modalDialog.find('form').submit(o),
                a.modalDialog.find('.cancel').click(o),
                a.modalDialog.find('._tv-dialog-title-close').click(o),
                a.positionDialog(),
                a.applyHandlers(),
                a.modalDialog
              );
            },
            createModalDialog: function (t, o) {
              var e, i;
              return (
                (o = o || {}),
                null !== a.modalDialog && a.destroy(),
                (a.modalDialog = $(
                  '<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' +
                    (o.addClass ? ' ' + o.addClass : '') +
                    '">' +
                    (o.noHeader
                      ? ''
                      : '<div class="_tv-dialog-title">' +
                        (o.noClose
                          ? ''
                          : '<a class="_tv-dialog-title-close"></a>') +
                        '<span class="_tv-dialog-title-text">' +
                        t +
                        '</span></div>') +
                    '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>',
                )
                  .appendTo($('body'))
                  .data('title', t)),
                a._addMessageCloseButton(
                  a.modalDialog.find('._tv-dialog-error'),
                ),
                a._addMessageCloseButton(
                  a.modalDialog.find('._tv-dialog-message'),
                ),
                o.noShadowBox && a.modalDialog.addClass('transparent'),
                o.addClass && a.modalDialog.addClass(o.addClass),
                o.width &&
                  a.modalDialog.find('._tv-dialog').css({ width: o.width }),
                o.content &&
                  a.modalDialog.find('._tv-dialog-content').html(o.content),
                (e = $('.fancybox-overlay')).length &&
                  ((i = e.css('z-index')),
                  $('._tv-dialog-shadowbox').css('z-index', i + 1)),
                o.draggable &&
                  l(a.modalDialog).draggable(
                    a._constrainDraggableOptionsIfNeeded({
                      handle: a.modalDialog.find('._tv-dialog-title'),
                    }),
                  ),
                o.zIndex && a.modalDialog.css('z-index', o.zIndex),
                a.modalDialog
              );
            },
            _addMessageCloseButton: function (t) {
              var o = $(e('BhuR')).attr({
                class: 'close',
                title: $.t('Close message'),
              });
              t.append(o),
                $(o).on('click', function () {
                  t.animate(
                    {
                      marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET,
                      opacity: 0,
                    },
                    'fast',
                    function () {
                      t.hide();
                    },
                  );
                });
            },
            createDialog: function (t, o) {
              var e, d, r, c, g, u;
              return a.isOpen(t)
                ? ((e = a.get(t)).find('._tv-dialog-content').html(''),
                  e.data('new', !1),
                  e)
                : ((d = (o = o || {}).ownerDocument || document),
                  (c = (r = s(d)).ensureWindow(t, { position: 'relative' })),
                  (e = $(
                    i.render(
                      '<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>',
                      {
                        addClass: o.addClass || '',
                        hideTitle: o.hideTitle,
                        hideCloseCross: o.hideCloseCross,
                        title: t,
                      },
                    ),
                    d,
                  ).appendTo(c)),
                  a._addMessageCloseButton(e.find('._tv-dialog-error')),
                  a._addMessageCloseButton(e.find('._tv-dialog-message')),
                  o.width && e.css({ width: o.width }),
                  o.content && e.find('._tv-dialog-content').html(o.content),
                  (g = 0),
                  (g = o.zIndex
                    ? o.zIndex
                    : a.dialogs && a.dialogs.length
                    ? n(
                        $.map(a.dialogs, function (t) {
                          return parseInt((t.dialog || t).css('z-index'), 10);
                        }),
                      ) + 1
                    : 110),
                  e.css('z-index', g),
                  e.data('new', !0),
                  e.data('title', t),
                  e.data('id', a.dialogs.length + 1),
                  a.dialogs.push({
                    title: t,
                    dialog: e,
                    id: a.dialogs.length + 1,
                  }),
                  e.on('mousedown touchstart', function () {
                    r.moveToTop(t);
                  }),
                  (u = {
                    start: function (t, o) {
                      var e,
                        i,
                        n = o.helper.css('z-index'),
                        l = 0,
                        s = null;
                      for (e = 0; e < a.dialogs.length; e++)
                        (i = a.dialogs[e].dialog.css('z-index')) > l &&
                          ((l = i), (s = a.dialogs[e].dialog));
                      o.helper.css('z-index', l), s.css('z-index', n);
                    },
                  }),
                  o.dragHandle
                    ? (u.handle = o.dragHandle)
                    : o.hideTitle || (u.handle = '._tv-dialog-title'),
                  o.dragOptions && $.extend(u, o.dragOptions),
                  l(e).draggable(a._constrainDraggableOptionsIfNeeded(u)),
                  e);
            },
            positionDialog: function (t, o, e) {
              function i() {
                n.css('margin-left', -Math.round(n.outerWidth() / 2) + 'px'),
                  n.css('margin-top', -Math.round(n.outerHeight() / 2) + 'px');
              }
              var n, l, s, d, r, c, g, u, p, f;
              (e = e || {}),
                (o = o || e.position),
                t
                  ? ((s = (l = t.prop('ownerDocument')).defaultView),
                    (d = t.width()),
                    (r = t.height()),
                    (c = $(s).width()),
                    (g = $(s).height()),
                    o && o.top && o.left
                      ? ((p = e.forcePosition
                          ? o.left
                          : Math.max(2, Math.min(c - d - 4, o.left)) + 'px'),
                        (u = e.forcePosition
                          ? o.top
                          : Math.max(2, Math.min(g - r - 4, o.top)) + 'px'))
                      : o && o.considerScroll
                      ? ((f = $(l)),
                        (p = Math.round((c - d) / 2 + f.scrollLeft()) + 'px'),
                        (u = Math.round((g - r) / 2 + f.scrollTop()) + 'px'))
                      : ((p = Math.round((c - d) / 2) + 'px'),
                        (u = Math.round((g - r) / 2) + 'px')),
                    e.fadeIn
                      ? t.css({ left: p, top: u }).hide().fadeIn('fast')
                      : e.smooth
                      ? t.animate({ left: p, top: u })
                      : t.css({ left: p, top: u }))
                  : ((t = a.modalDialog),
                    (n = t.find('._tv-dialog')),
                    i(),
                    n.resize(i));
            },
            applyHandlers: function (t, o) {
              var e,
                i,
                n,
                l = !t || t === this.modalDialog;
              (o = o || {}),
                (e = l
                  ? function () {
                      a.destroy();
                    }
                  : function () {
                      a.destroy(t.data('title'));
                    }),
                (t = t || a.modalDialog.find('._tv-dialog')),
                (i = t.prop('ownerDocument')),
                o.beforeDestroy && t.on('destroy', o.beforeDestroy),
                t
                  .find(
                    '._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close',
                  )
                  .on('click', function (t) {
                    o.closeHandler && 'function' == typeof o.closeHandler
                      ? o.closeHandler(t)
                      : e();
                  }),
                o.doNotCloseOnBgClick ||
                  setTimeout(function () {
                    $(i).on('mousedown.closeDialog', function (a) {
                      var n = $(a.target).parents().andSelf();
                      n.is(t) ||
                        (o.doNotCloseOnBgClickIfShadowbox &&
                          n.is(
                            '._tv-dialog-shadowbox, .tv-dialog__modal-wrap',
                          )) ||
                        n.is(
                          '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container, .context-menu-wrapper',
                        ) ||
                        ($(i).off('mousedown.closeDialog'), e());
                    });
                  }, 0),
                t.find('input[type="checkbox"]').change(function () {
                  var t = $(this),
                    o = t.next('._tv-dialog-checkbox-mask');
                  o.toggleClass('disabled', t.prop('disabled')).toggleClass(
                    '_tv-dialog-checkbox-mask-active',
                    t.is(':checked'),
                  );
                }),
                (n = t
                  .find('input[type="text"]')
                  .focus(function () {
                    $(this).addClass('_tv-dialog-content-textactive');
                  })
                  .blur(function () {
                    $(this).removeClass('_tv-dialog-content-textactive');
                  })
                  .first()),
                Modernizr.mobiletouch || o.notFocusFirst || n.focus(),
                t
                  .find('input[type="password"]')
                  .focus(function () {
                    $(this).addClass('_tv-dialog-content-textactive');
                  })
                  .blur(function () {
                    $(this).removeClass('_tv-dialog-content-textactive');
                  }),
                t
                  .find('textarea')
                  .focus(function () {
                    $(this).addClass('_tv-dialog-content-textareaactive');
                  })
                  .blur(function () {
                    $(this).removeClass('_tv-dialog-content-textareaactive');
                  }),
                t.find('._tv-dialog-checkbox-mask').click(function () {
                  var t = $(this).prev();
                  t.prop('disabled') ||
                    (t.prop('checked', !t[0].checked), t.change());
                }),
                o.doNotCloseOnEsc ||
                  $(i).bind('keyup.hideDialog', function (o) {
                    if (27 === o.keyCode)
                      return t ? a.destroy(t.data('title')) : a.destroy(), !1;
                  }),
                o.processEnterButton &&
                  $(i).bind('keyup.confirmAndCloseDialog', function (t) {
                    13 === t.keyCode &&
                      'textarea' !== t.target.tagName.toLowerCase() &&
                      (o.processEnterButton.click(),
                      $(i).unbind('keyup.confirmAndCloseDialog'));
                  });
            },
            showError: function (t, o, e) {
              a.showMessage(t, o, $.extend(e || {}, { isError: !0 }));
            },
            showMessage: function (t, o, e) {
              var i, n, l;
              o || (o = $('._tv-dialog')),
                (i = (e = e || {}).isError
                  ? '_tv-dialog-error'
                  : '_tv-dialog-message'),
                (l = (n = o.find('.' + i)).find('.message')),
                e.html
                  ? l.html('string' == typeof e.html ? e.html : t)
                  : l.text(t),
                l
                  .css('width', o.width())
                  .toggleClass('selectable', Boolean(e.selectable)),
                n
                  .toggleClass('with-close', Boolean(e.withClose))
                  .css({
                    marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET,
                    opacity: '0',
                  })
                  .show()
                  .animate({ marginTop: 0, opacity: 1 }, 'fast'),
                e.withClose ||
                  (e.hideWithoutAnimation
                    ? n.on(
                        'touchstartoutside mousedownoutside keydownoutside',
                        function t() {
                          n.hide(),
                            n.off(
                              'touchstartoutside mousedownoutside keydownoutside',
                              t,
                            );
                        },
                      )
                    : n.on(
                        'touchstartoutside mousedownoutside keydownoutside',
                        function t() {
                          n.animate(
                            {
                              marginTop: a.NOTIFICATION_ANIMATION_START_OFFSET,
                              opacity: 0,
                            },
                            'fast',
                            function () {
                              n.hide();
                            },
                          ),
                            n.off(
                              'touchstartoutside mousedownoutside keydownoutside',
                              t,
                            );
                        },
                      ));
            },
            isOpen: function (t) {
              for (var o = 0; o < a.dialogs.length; o++)
                if (a.dialogs[o].title === t) return !0;
              return !1;
            },
            get: function (t) {
              for (var o = 0; o < a.dialogs.length; o++)
                if (a.dialogs[o].title === t) return a.dialogs[o].dialog;
            },
            destroy: function (t, o) {
              var e,
                i = null;
              if (t && 'string' == typeof t)
                for (e = 0; e < a.dialogs.length; e++)
                  a.dialogs[e].title === t &&
                    ((i = a.dialogs[e].dialog.prop('ownerDocument')),
                    a.dialogs[e].dialog
                      .find('.apply-common-tooltip')
                      .mouseout(),
                    a.dialogs[e].dialog.trigger('destroy', o),
                    $(document).unbind('mouseup.hideDialog' + a.dialogs[e].id),
                    $('input', a.dialogs[e].dialog).blur(),
                    a.dialogs[e].dialog.remove(),
                    a.dialogs.splice(e, 1),
                    s(i).unregisterWindow(t));
              else
                a.modalDialog &&
                  ((i = a.modalDialog.prop('ownerDocument')),
                  a.modalDialog.find('.apply-common-tooltip').mouseout(),
                  a.modalDialog.find('._tv-dialog').trigger('destroy'),
                  a.modalDialog.remove(),
                  (a.modalDialog = null));
              $(i).unbind('keyup.hideDialog'),
                $(i).unbind('keyup.confirmAndCloseDialog');
            },
            resizeContent: function (t, o, e) {
              var i, a;
              null == e && (e = 20),
                (t += e),
                (i = parseInt($('body').height(), 10)),
                (a = o.height()),
                t > i && ((a -= t - i), (a = Math.max(0, a)), o.height(a));
            },
          }),
          (t.exports.TVOldDialogs = a);
      }.call(this, e('Kxc7'), e('OiQe')));
    },
    PVgW: function (t, o, e) {
      'use strict';
      function i(t) {
        return (
          (t = Math.abs(t)),
          !Object(r.isInteger)(t) &&
            t > 1 &&
            (t = parseFloat(t.toString().replace(/^.+\./, '0.'))),
          0 < t && t < 1
            ? Math.pow(
                10,
                null ===
                  (i = String(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))
                  ? 0
                  : ((o = i[1] ? i[1].length : 0),
                    (e = i[2] ? parseInt(i[2], 0) : 0),
                    Math.max(0, o - e)),
              )
            : 1
        );
        var o, e, i;
      }
      function a(t, o) {
        var e, a, n, l, s;
        t.trigger('tvticker-beforechange'),
          (a = (e = t.data('TVTicker')) && e.step),
          (n = 0),
          (n = e.parser
            ? e.parser(t.val())
            : Object(r.isInteger)(a)
            ? parseInt(t.val(), 10)
            : parseFloat(t.val())),
          isNaN(n) && (n = 0),
          (l = i(a)),
          (s = o(n, Math.max(l, i(n)))),
          e.formatter && (s = e.formatter(s)),
          t.val(s),
          t.change();
      }
      function n(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          i = o && o.max;
        a(t, function (t, o) {
          var a = (Math.round(t * o) + Math.round(e * o)) / o;
          return void 0 !== i && null !== i && i < a && (a = t), a;
        });
      }
      function l(t) {
        var o = t.data('TVTicker'),
          e = o && o.step,
          i = o && o.min;
        a(t, function (t, o) {
          var a = (Math.round(t * o) - Math.round(e * o)) / o;
          return void 0 !== i && null !== i && a < i && (a = t), a;
        });
      }
      var s, d, r, c;
      e.r(o),
        (s = e('P5fv')),
        (d = e('si6p')),
        (r = e('ogJP')),
        (c = e('R4+T')),
        ($.fn.TVTicker = function (t) {
          return (
            void 0 === t && (t = {}),
            this.each(function () {
              var o,
                e,
                i,
                a = !1,
                s = $(this),
                d = s.data('TVTicker');
              d ? (a = !0) : (d = { step: Number(s.data('step')) || 1 }),
                'step' in t && (d.step = Number(t.step) || d.step),
                'min' in t && (d.min = t.min),
                'max' in t && (d.max = t.max),
                'formatter' in t && (d.formatter = t.formatter),
                'parser' in t && (d.parser = t.parser),
                s.data('TVTicker', d),
                a ||
                  ((o = $('<div class="tv-ticker">').appendTo(s.parent())),
                  (e = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                    .html(c)
                    .appendTo(o)),
                  (i = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                    .html(c)
                    .appendTo(o)),
                  o.on('mousedown', function (t) {
                    t.preventDefault(), s.focus();
                  }),
                  e.click(function () {
                    s.is(':disabled') || n(s);
                  }),
                  i.click(function () {
                    s.is(':disabled') || l(s);
                  }),
                  s.keydown(function (t) {
                    s.is(':disabled') ||
                      (38 === t.keyCode
                        ? e.addClass('i-active')
                        : 40 === t.keyCode && i.addClass('i-active'));
                  }),
                  s.keyup(function (t) {
                    s.is(':disabled') ||
                      (38 === t.keyCode
                        ? (n(s), e.removeClass('i-active'))
                        : 40 === t.keyCode &&
                          (l(s), i.removeClass('i-active')));
                  }),
                  s.mousewheel(function (t) {
                    t.deltaY * (t.deltaFactor / 100) > 0
                      ? e.click()
                      : i.click();
                  }));
            })
          );
        });
    },
    'R4+T': function (t, o) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    'y1L/': function (t, o, e) {},
    zjLg: function (t, o, e) {},
  },
]);
