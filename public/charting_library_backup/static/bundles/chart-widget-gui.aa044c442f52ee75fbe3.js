(window.webpackJsonp = window.webpackJsonp || []).push([
  ['chart-widget-gui'],
  {
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    '0jws': function (t, e, i) {
      t.exports = {
        blockHidden: 'blockHidden-pECc1q1w',
        'pane-button': 'pane-button-3IbFaPrJ',
      };
    },
    '1ANp': function (t, e, i) {
      'use strict';
      function s(t) {
        return t === u.AlwaysOn || t === u.AlwaysOff ? t : u.VisibleOnMouseOver;
      }
      function o() {
        if (!h) {
          (h = Object(r.a)()).setValue(
            s(d.getValue('NavigationButtons.visibility')),
          ),
            h.subscribe(h, function (t) {
              d.setValue('NavigationButtons.visibility', s(t.value()));
            });
        }
        return h;
      }
      function n() {
        return [
          {
            value: u.VisibleOnMouseOver,
            title: window.t('Visible on Mouse Over'),
          },
          { value: u.AlwaysOn, title: window.t('Always Visible') },
          { value: u.AlwaysOff, title: window.t('Always Invisible') },
        ];
      }
      function l() {
        var t, e;
        return (
          c ||
            ((c = Object(r.a)()),
            (e = function () {
              var e = t.value();
              e !== u.AlwaysOn &&
                e !== u.AlwaysOff &&
                (e = Modernizr.mobiletouch ? u.AlwaysOn : u.VisibleOnMouseOver),
                c && c.setValue(e);
            }),
            (t = o()).subscribe(c, e),
            e()),
          c
        );
      }
      var a, r, d, u, h, c;
      i.r(e),
        i.d(e, 'VisibilityType', function () {
          return u;
        }),
        i.d(e, 'property', function () {
          return o;
        }),
        i.d(e, 'availableValues', function () {
          return n;
        }),
        i.d(e, 'actualBehavior', function () {
          return l;
        }),
        i('YFKU'),
        (a = i('bf9a')),
        (r = i('m/cY')),
        (d = i('Vdly')),
        (function (t) {
          (t.AlwaysOn = 'alwaysOn'),
            (t.VisibleOnMouseOver = 'visibleOnMouseOver'),
            (t.AlwaysOff = 'alwaysOff');
        })(u || (u = {}));
    },
    '1Wf8': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>';
    },
    '2CEX': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>';
    },
    '5Alx': function (t, e, i) {
      t.exports = {
        legend: 'legend-29zvAld0',
        item: 'item-3eXPhOmy',
        series: 'series-12hzsxbp',
        withAction: 'withAction-1y86Ymm9',
        selected: 'selected-2qw9PFUJ',
        last: 'last-3Xus0HXW',
        text: 'text-1pYqyE6B',
        noWrapWrapper: 'noWrapWrapper-AC879h-w',
        noWrap: 'noWrap-ODIQgNap',
        valuesAdditionalWrapper: 'valuesAdditionalWrapper-3BfAIuML',
        valueItem: 'valueItem-3JDGGSt_',
        valueTitle: 'valueTitle-1myNPdtH',
        valueValue: 'valueValue-3kA0oJs5',
        valuesWrapper: 'valuesWrapper-1ukbb5SP',
        titleWrapper: 'titleWrapper-1Zs2rjQ6',
        button: 'button-22Ex8G2W',
        buttonsWrapper: 'buttonsWrapper-3eBZpnXm',
        buttons: 'buttons-1-XhYDHM',
        has5Buttons: 'has5Buttons-3tuydZU5',
        noActions: 'noActions-1D515O5o',
        title: 'title-bcHj6pEn',
        title2nd: 'title2nd-2igtq1cH',
        disabled: 'disabled-3P6bUcMx',
        withCustomTextColor: 'withCustomTextColor-Pw_dabsC',
        study: 'study-lgC0tuTJ',
        title1st: 'title1st-2at68hKe',
        error: 'error-3bH8KJfF',
        stayInHoveredMode: 'stayInHoveredMode-3K55nNni',
        withTail: 'withTail-2tfD0t7T',
        loading: 'loading-37LPn65g',
        withDot: 'withDot-VrJCTK--',
        title3rd: 'title3rd-2bpagZ7H',
        title4th: 'title4th-28_-ZX9R',
        flagged: 'flagged-3lOrkL__',
        minimized: 'minimized-25_VM9I8',
        touchMode: 'touchMode-2jC98z1-',
        buttonIcon: 'buttonIcon-2lrp9MHZ',
        flag: 'flag-1kqFt7GH',
        eye: 'eye-3mqNMkLJ',
        hiddenLoading: 'hiddenLoading-hcuRRcWh',
        'eye-animation': 'eye-animation-1pyfCZvS',
        sourcesWrapper: 'sourcesWrapper-2JcXD9TK',
        sources: 'sources-6Hp4M7li',
        toggler: 'toggler-_SUZ7r_5 pane-button-3IbFaPrJ',
        counter: 'counter-1hG1zy7A',
        iconArrow: 'iconArrow-3q7vxxnz',
        objectTree: 'objectTree-2tLil0dm',
        closed: 'closed-1Sz6CztG',
        micro: 'micro-1-90nTmg',
      };
    },
    '6dGu': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>';
    },
    '94TV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>';
    },
    '956S': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>';
    },
    D8x7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>';
    },
    EV8o: function (t, e, i) {
      'use strict';
      function s(t, e, i, s) {
        var n,
          l = document.createElement('div');
        return (
          (l.className = e),
          l.classList.toggle(s, !t.visible.value()),
          Object.assign(l.dataset, t.dataset),
          void 0 !== t.className && l.classList.add(t.className),
          void 0 !== t.title &&
            (l.classList.add('apply-common-tooltip'),
            l.setAttribute('title', t.title.value()),
            void 0 !== t.hotKeyTitle &&
              (l.dataset.tooltipHotkey = t.hotKeyTitle)),
          l.addEventListener('touchend', t.action),
          l.addEventListener('mousedown', function (e) {
            0 === e.button && t.action(e);
          }),
          (n = document.createElement('div')).classList.add(i),
          Object(o.isString)(t.icon)
            ? (n.innerHTML = t.icon)
            : n.appendChild(t.icon),
          l.appendChild(n),
          l
        );
      }
      var o;
      i.d(e, 'a', function () {
        return s;
      }),
        (o = i('ogJP'));
    },
    H72D: function (t, e, i) {
      'use strict';
      !(function (t) {
        function e(t) {
          return t instanceof Node ? t : document.createTextNode(String(t));
        }
        var i, s, o;
        for (
          i = 0,
            s = [
              Element.prototype,
              Document.prototype,
              DocumentFragment.prototype,
            ];
          i < s.length;
          i++
        ) {
          if ((o = s[i]).hasOwnProperty('append')) return;
          Object.defineProperty(o, 'append', {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              var t,
                i,
                s,
                o,
                n,
                l = [];
              for (t = 0; t < arguments.length; t++) l[t] = arguments[t];
              if (1 !== l.length) {
                for (
                  i = document.createDocumentFragment(), s = 0, o = l;
                  s < o.length;
                  s++
                )
                  (n = o[s]), i.appendChild(e(n));
                this.appendChild(i);
              } else this.appendChild(e(l[0]));
            },
          });
        }
      })();
    },
    MQEA: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    OJSF: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>';
    },
    PXSR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>';
    },
    QEZv: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>';
    },
    R5JZ: function (t, e, i) {
      'use strict';
      function s(t, e, i, s, o) {
        function n(o) {
          if (!(t > o.timeStamp)) {
            var n = o.target;
            void 0 !== i &&
              null !== e &&
              null !== n &&
              n.ownerDocument === s &&
              (e.contains(n) || i(o));
          }
        }
        return (
          o.click && s.addEventListener('click', n, !1),
          o.mouseDown && s.addEventListener('mousedown', n, !1),
          o.touchEnd && s.addEventListener('touchend', n, !1),
          o.touchStart && s.addEventListener('touchstart', n, !1),
          function () {
            s.removeEventListener('click', n, !1),
              s.removeEventListener('mousedown', n, !1),
              s.removeEventListener('touchend', n, !1),
              s.removeEventListener('touchstart', n, !1);
          }
        );
      }
      i.d(e, 'a', function () {
        return s;
      });
    },
    RgOa: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.59 5.21a2 2 0 0 1-3.18 0c-.5.14-.98.34-1.42.6L9 6a2 2 0 0 1-2.2 2c-.25.43-.45.9-.59 1.41a2 2 0 0 1 0 3.18c.14.5.34.98.6 1.42a2 2 0 0 1 2.18 2.18c.44.26.92.46 1.42.6a2 2 0 0 1 3.18 0c.5-.14.98-.34 1.42-.6a2 2 0 0 1 2.18-2.18c.26-.44.46-.92.6-1.42a2 2 0 0 1 0-3.18c-.14-.5-.34-.98-.6-1.42a2 2 0 0 1-2.18-2.18 5.96 5.96 0 0 0-1.42-.6zm-.77-.64c.17-.24.42-.47.7-.4.82.18 1.59.5 2.27.94.23.15.26.47.22.75A1 1 0 0 0 17 7a1 1 0 0 0 .14-.01c.28-.04.6-.01.75.22.44.68.76 1.45.94 2.26.07.29-.16.54-.4.7a1 1 0 0 0 0 1.65c.24.17.47.42.4.7-.18.82-.5 1.59-.94 2.27-.15.23-.47.26-.75.22a1 1 0 0 0-1.13 1.13c.04.28.01.6-.22.75-.68.44-1.45.76-2.26.94-.29.07-.54-.16-.7-.4a1 1 0 0 0-1.65 0c-.17.24-.42.47-.7.4a6.96 6.96 0 0 1-2.27-.94c-.23-.15-.26-.47-.22-.75a1 1 0 0 0-1.13-1.13c-.28.04-.6.01-.75-.22a6.96 6.96 0 0 1-.94-2.26c-.07-.29.16-.54.4-.7a1 1 0 0 0 0-1.65c-.24-.17-.47-.42-.4-.7.18-.82.5-1.59.94-2.27.15-.23.47-.26.75-.22a1 1 0 0 0 1.13-1.13c-.04-.28-.01-.6.22-.75a6.96 6.96 0 0 1 2.26-.94c.29-.07.54.16.7.4a1 1 0 0 0 1.65 0z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>';
    },
    TGRH: function (t, e, i) {
      'use strict';
      var s,
        o,
        n,
        l,
        a,
        r,
        d,
        u,
        h,
        c,
        p,
        _,
        b,
        g,
        m,
        v,
        w,
        y,
        f,
        S,
        C,
        E,
        V,
        M,
        T,
        H,
        x,
        A,
        L,
        P;
      i.r(e),
        i.d(e, 'ControlBarNavigation', function () {
          return P;
        }),
        (s = i('Eyy1')),
        i('YFKU'),
        (o = i('1ANp')),
        (n = i('Ialn')),
        (l = i('TzTt')),
        (a = i('Tmoa')),
        (r = i('ei7k')),
        (d = i('qFKp')),
        i('PC8g'),
        (u = i('MjtL')),
        (h = i('e8Rm')),
        (c = i('e2QN')),
        (p = i('vg09')),
        (_ = i('/NcV')),
        (b = i('94TV')),
        (g = i('qfuz')),
        (m = i('MQEA')),
        (v = i('eYcT')),
        (w = i('nFx7')),
        (y = i('jrhZ')),
        (S = Object(r.b)({ keys: ['Alt', 'R'], text: '{0} + {1}' })),
        (C = Object(r.b)({
          keys: ['Alt', 'Click', 'Alt', 'Enter'],
          text: '{0} + {1}, {2} + {3}',
        })),
        (E = Object(r.b)({ keys: [g], text: '{0}' })),
        (V = Object(r.b)({ keys: [m], text: '{0}' })),
        (M =
          '<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="' +
          window.t('Zoom Out') +
          '">\n\t\t\t\t' +
          h +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="' +
          window.t('Zoom In') +
          '">\n\t\t\t\t' +
          p +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="' +
          window.t('Maximize chart') +
          '" data-tooltip-hotkey="' +
          C +
          '">\n\t\t\t\t' +
          v +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="' +
          window.t('Restore chart') +
          '" data-tooltip-hotkey="' +
          C +
          '">\n\t\t\t\t' +
          w +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="' +
          window.t('Scroll to the Left') +
          '" data-tooltip-hotkey="' +
          E +
          '">\n\t\t\t\t' +
          u +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="' +
          window.t('Scroll to the Right') +
          '" data-tooltip-hotkey="' +
          V +
          '">\n\t\t\t\t' +
          _ +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="' +
          window.t('Reset Chart') +
          '" data-tooltip-hotkey="' +
          S +
          '">\n\t\t\t\t' +
          c +
          '\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'),
        (T =
          '<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="' +
          window.t('Scroll to the Most Recent Bar') +
          '">\n\t' +
          b +
          '\n</div>'),
        (H = d.CheckMobile.any()),
        ((f = {}).moving = 'wait_finishing'),
        (f.wait_finishing = 'stop'),
        (f.stop = 'moving'),
        (x = f),
        (A = 'control-bar__btn--btn-hidden'),
        (L = {
          zoomInOut: !0,
          maximize: !0,
          scrollLeftRight: !0,
          resetScale: !0,
          goToRealtime: !0,
        }),
        (P = (function () {
          function t(t, e, i) {
            (this._widget = Object(s.ensureNotNull)(
              Object(l.parseHtml)(M).querySelector('.control-bar-wrapper'),
            )),
              (this._controlBar = Object(s.ensureNotNull)(
                this._widget.querySelector('.control-bar'),
              )),
              (this._back = Object(s.ensureNotNull)(
                Object(l.parseHtml)(T).querySelector(
                  '.control-bar__btn--back-present',
                ),
              )),
              (this._btnGroups = Array.from(
                this._controlBar.querySelectorAll('.js-btn-group'),
              )),
              (this._backButtonVisible = !1),
              (this._boundKeydownHandler = null),
              (this._boundKeyupHandler = null),
              (this._boundMouseHandler = null),
              (this._chartBackgroundProperty = null),
              (this._chartModel = null),
              (this._checkIntervalId = 0),
              (this._controlBarVisible = !1),
              (this._currentDistance = 0),
              (this._deferredFinishTimeout = 0),
              (this._finishingTimeout = 0),
              (this._moveType = ''),
              (this._movingTimeout = 0),
              (this._pressedKey = []),
              (this._priceAxisChanged = null),
              (this._resetAvailabilityChanged = null),
              (this._priceAxisName = ''),
              (this._rafId = 0),
              (this._startTime = 0),
              (this._state = 'stop'),
              (this._visibilityTypeProperty = null),
              (this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(
                this,
              )),
              (this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(
                this,
              )),
              (this._paneWidth = 0),
              (this._leftPriceScaleWidth = 0),
              (this._rightPriceScaleWidth = 0),
              (this._chart = t),
              (this._parent = e),
              (this._options = Object.assign({}, L, i)),
              (this._visibilityPrioritizedGroups = this._initGroupDescriptions()),
              this._init(),
              this._initHandlers(),
              this.updatePosition();
          }
          return (
            (t.prototype.destroy = function () {
              if (
                (null !== this._visibilityTypeProperty &&
                  (this._visibilityTypeProperty.unsubscribe(
                    this,
                    this._onVisibilityTypeChange,
                  ),
                  (this._visibilityTypeProperty = null)),
                null !== this._boundMouseHandler &&
                  (this._parent.removeEventListener(
                    'mousemove',
                    this._boundMouseHandler,
                    !1,
                  ),
                  this._parent.removeEventListener(
                    'mouseleave',
                    this._boundMouseHandler,
                    !1,
                  ),
                  (this._boundMouseHandler = null)),
                null !== this._boundKeydownHandler &&
                  (this._parent.ownerDocument.removeEventListener(
                    'keydown',
                    this._boundKeydownHandler,
                  ),
                  (this._boundKeydownHandler = null)),
                null !== this._boundKeyupHandler &&
                  (this._parent.ownerDocument.removeEventListener(
                    'keyup',
                    this._boundKeyupHandler,
                  ),
                  (this._boundKeyupHandler = null)),
                clearTimeout(this._movingTimeout),
                null !== this._priceAxisChanged &&
                  (this._priceAxisChanged.unsubscribe(
                    this,
                    this._updateBackBtnPosition,
                  ),
                  (this._priceAxisChanged = null)),
                null !== this._chartBackgroundProperty &&
                  (clearInterval(this._checkIntervalId),
                  this._chartBackgroundProperty.unsubscribe(
                    this,
                    this._updateBgBarStyle,
                  ),
                  (this._chartBackgroundProperty = null)),
                null !== this._resetAvailabilityChanged)
              ) {
                this._resetAvailabilityChanged.unsubscribe(
                  this,
                  this._updateResetScalesButtonVisibility,
                );
                var t = this._chart.getResizerDetacher();
                t.fullscreenable.unsubscribe(
                  this._boundUpdateMaximizeButtonsVisibility,
                ),
                  t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
                  (this._resetAvailabilityChanged = null);
              }
              this._chart = null;
            }),
            (t.prototype.updatePosition = function () {
              var t = this._chart.paneWidgets();
              0 !== t.length &&
                ((this._paneWidth = t[0].width()),
                (this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName(
                  'left',
                )),
                (this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName(
                  'right',
                )),
                this._updateBtnGroupVisibility());
            }),
            (t.prototype._init = function () {
              var t,
                e,
                i = this;
              if (d.CheckMobile.any())
                for (t = 0, e = this._btnGroups; t < e.length; t++)
                  e[t].classList.add('js-hidden');
              (this._buttons = {
                zoomIn: this._widget.querySelector(
                  '.control-bar__btn--zoom-in',
                ),
                zoomOut: this._widget.querySelector(
                  '.control-bar__btn--zoom-out',
                ),
                moveLeft: this._widget.querySelector(
                  '.control-bar__btn--move-left',
                ),
                moveRight: this._widget.querySelector(
                  '.control-bar__btn--move-right',
                ),
                turn: this._widget.querySelector(
                  '.control-bar__btn--turn-button',
                ),
                maximize: this._widget.querySelector(
                  '.control-bar__btn--maximize',
                ),
                minimize: this._widget.querySelector(
                  '.control-bar__btn--minimize',
                ),
              }),
                this._initVisibility(),
                this._parent.appendChild(this._widget),
                this._parent.appendChild(this._back),
                (this._backButtonVisible = !1),
                (this._priceAxisName = Object(n.isRtl)() ? 'left' : 'right'),
                this._chart.withModel(this, function () {
                  (i._chartModel = i._chart.model()),
                    (i._priceAxisChanged = i._chart.getPriceAxisWidthChangedByName(
                      i._priceAxisName,
                    )),
                    (i._resetAvailabilityChanged = i._chartModel
                      .model()
                      .isScalesResetAvailableChanged()),
                    i._priceAxisChanged.subscribe(i, i._updateBackBtnPosition),
                    i._resetAvailabilityChanged.subscribe(
                      i,
                      i._updateResetScalesButtonVisibility,
                    );
                  var t = i._chart.getResizerDetacher();
                  t.fullscreenable.subscribe(
                    i._boundUpdateMaximizeButtonsVisibility,
                  ),
                    t.fullscreen.subscribe(i._boundToggleFullscreenButtons),
                    i._updateMaximizeButtonsVisibility(),
                    i._updateBackBtnPosition(),
                    i._back.addEventListener('click', function () {
                      null !== i._chartModel &&
                        i._chartModel.timeScale().scrollToRealtime(!0);
                    }),
                    (i._checkIntervalId = setInterval(function () {
                      return i._check();
                    }, 1e3)),
                    (i._chartBackgroundProperty = i._chartModel
                      .model()
                      .properties().paneProperties.background),
                    null !== i._chartBackgroundProperty &&
                      i._chartBackgroundProperty.subscribe(
                        i,
                        i._updateBgBarStyle,
                      ),
                    i._updateBgBarStyle();
                });
            }),
            (t.prototype._initHandlers = function () {
              var t,
                e,
                i,
                s = this,
                o = Modernizr.mobiletouch ? 'touchstart' : 'mousedown',
                n = Modernizr.mobiletouch
                  ? ['touchend']
                  : ['mouseup', 'mouseout'];
              for (
                this._buttons.moveLeft.addEventListener(o, function (t) {
                  t.preventDefault(),
                    s._moveByBar(1),
                    s._trackEvent('Move Left');
                }),
                  this._buttons.moveRight.addEventListener(o, function (t) {
                    t.preventDefault(),
                      s._moveByBar(-1),
                      s._trackEvent('Move Right');
                  }),
                  t = 0,
                  e = n;
                t < e.length;
                t++
              )
                (i = e[t]),
                  this._buttons.moveLeft.addEventListener(i, function () {
                    return s._stopMoveByBar();
                  }),
                  this._buttons.moveRight.addEventListener(i, function () {
                    return s._stopMoveByBar();
                  });
              this._buttons.turn.addEventListener('click', function (t) {
                t.preventDefault(),
                  s._chart.GUIResetScales(),
                  s._trackEvent('Reset to Default Settings');
              }),
                this._buttons.zoomOut.addEventListener('click', function (t) {
                  t.preventDefault(),
                    null !== s._chartModel && s._chartModel.zoomOut(),
                    s._trackEvent('Zoom Out');
                }),
                this._buttons.zoomIn.addEventListener('click', function (t) {
                  t.preventDefault(),
                    null !== s._chartModel && s._chartModel.zoomIn(),
                    s._trackEvent('Zoom In');
                }),
                this._buttons.maximize.addEventListener('click', function (t) {
                  t.preventDefault(),
                    s._chart.setActive(!0),
                    s._chart.getResizerDetacher().requestFullscreen(),
                    s._trackEvent(' Maximize Chart');
                }),
                this._buttons.minimize.addEventListener('click', function (t) {
                  t.preventDefault(),
                    s._chart.getResizerDetacher().exitFullscreen(),
                    s._trackEvent(' Restore Chart');
                }),
                (this._boundKeydownHandler = this._keydownHandler.bind(this)),
                (this._boundKeyupHandler = this._keyupHandler.bind(this)),
                this._parent.ownerDocument.addEventListener(
                  'keydown',
                  this._boundKeydownHandler,
                ),
                this._parent.ownerDocument.addEventListener(
                  'keyup',
                  this._boundKeyupHandler,
                );
            }),
            (t.prototype._initGroupDescriptions = function () {
              var t = this;
              return [
                {
                  shouldBeHiddenOnMobile: !1,
                  available: this._isMaximizeButtonAvailable.bind(this),
                  className: 'js-btn-group-maximize',
                  element: this._getBtnGroup('js-btn-group-maximize'),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !1,
                  available: function () {
                    return t._options.resetScale;
                  },
                  className: 'js-btn-group-reset-scale',
                  element: this._getBtnGroup('js-btn-group-reset-scale'),
                  totalWidth: 50,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.zoomInOut;
                  },
                  className: 'js-btn-group-zoom',
                  element: this._getBtnGroup('js-btn-group-zoom'),
                  totalWidth: 86,
                },
                {
                  shouldBeHiddenOnMobile: !0,
                  available: function () {
                    return t._options.scrollLeftRight;
                  },
                  className: 'js-btn-group-scroll',
                  element: this._getBtnGroup('js-btn-group-scroll'),
                  totalWidth: 86,
                },
              ];
            }),
            (t.prototype._check = function () {
              if (null !== this._chartModel && this._options.goToRealtime) {
                var t = this._chartModel.timeScale().rightOffset() < 0;
                t !== this._backButtonVisible &&
                  ((this._backButtonVisible = t),
                  this._back.classList.toggle(A, !this._backButtonVisible));
              }
            }),
            (t.prototype._initVisibility = function () {
              (this._visibilityTypeProperty = Object(o.actualBehavior)()),
                this._visibilityTypeProperty.subscribe(
                  this,
                  this._onVisibilityTypeChange,
                ),
                this._onVisibilityTypeChange();
            }),
            (t.prototype._onVisibilityTypeChange = function () {
              if (null !== this._visibilityTypeProperty) {
                var t = this._visibilityTypeProperty.value();
                'alwaysOn' === t || 'alwaysOff' === t
                  ? ((this._controlBarVisible = 'alwaysOn' === t),
                    null !== this._boundMouseHandler &&
                      (this._parent.removeEventListener(
                        'mousemove',
                        this._boundMouseHandler,
                        !1,
                      ),
                      this._parent.removeEventListener(
                        'mouseleave',
                        this._boundMouseHandler,
                        !1,
                      ),
                      (this._boundMouseHandler = null)))
                  : ((this._controlBarVisible = !1),
                    this._boundMouseHandler ||
                      ((this._boundMouseHandler = this._visibilityMouseHandler.bind(
                        this,
                      )),
                      this._parent.addEventListener(
                        'mousemove',
                        this._boundMouseHandler,
                      ),
                      this._parent.addEventListener(
                        'mouseleave',
                        this._boundMouseHandler,
                      ))),
                  this._updateControlBarVisibility();
              }
            }),
            (t.prototype._visibilityMouseHandler = function (t) {
              var e, i;
              t.buttons ||
                (null !== this._chartModel &&
                  this._chartModel.lineBeingCreated()) ||
                ((e = !1),
                ('mousemove' !== t.type && 'mouseleave' !== t.type) ||
                  ((i = this._widget.getBoundingClientRect()),
                  (e =
                    t.clientX >= i.left - 100 &&
                    t.clientX <= i.right + 100 &&
                    t.clientY >= i.top - 100 &&
                    t.clientY <= i.bottom + 100)),
                this._controlBarVisible !== e &&
                  ((this._controlBarVisible = e),
                  null === this._rafId &&
                    (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                      this._updateControlBarVisibility.bind(this),
                    ))));
            }),
            (t.prototype._updateControlBarVisibility = function () {
              (this._rafId = null),
                this._controlBar.classList.toggle(
                  'control-bar--hidden',
                  !this._controlBarVisible,
                );
            }),
            (t.prototype._updateBackBtnPosition = function () {
              if (
                'left' === this._priceAxisName ||
                'right' === this._priceAxisName
              ) {
                var t =
                  this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) +
                  14;
                t && (this._back.style.marginRight = t + 'px');
              }
            }),
            (t.prototype._updateBgBarStyle = function () {
              var t, e, i;
              if (null !== this._chartModel) {
                for (
                  t =
                    Object(a.getLuminance)(
                      this._chartModel
                        .model()
                        .properties()
                        .paneProperties.background.value(),
                    ) < 0.5,
                    e = 0,
                    i = Object.values(this._buttons);
                  e < i.length;
                  e++
                )
                  i[e].classList.toggle('control-bar__btn--dark', t);
                this._back.classList.toggle('control-bar__btn--dark', t);
              }
            }),
            (t.prototype._updateBtnGroupVisibility = function () {
              var t,
                e,
                i,
                s = this._leftPriceScaleWidth + this._paneWidth,
                o = (s + this._rightPriceScaleWidth) / 2,
                n = Math.min(s - o, o - this._leftPriceScaleWidth),
                l = 2 * n - 50 - 50,
                a = !1;
              for (
                t = 0, e = this._visibilityPrioritizedGroups;
                t < e.length;
                t++
              )
                ((i = e[t]).enoughSpaceForGroup = !1),
                  i.available() &&
                    (!H || !i.shouldBeHiddenOnMobile) &&
                    ((l -= i.totalWidth),
                    (i.enoughSpaceForGroup = l >= 0 && !a),
                    (a = a || !i.enoughSpaceForGroup)),
                  !i.enoughSpaceForGroup !==
                    i.element.classList.contains('js-hidden') &&
                    i.element.classList.toggle(
                      'js-hidden',
                      !i.enoughSpaceForGroup,
                    );
              this._updateControlBarPosition();
            }),
            (t.prototype._getBtnGroup = function (t) {
              return Object(s.ensureDefined)(
                this._btnGroups.find(function (e) {
                  return e.classList.contains(t);
                }),
              );
            }),
            (t.prototype._updateControlBarPosition = function () {
              var t = this._visibilityPrioritizedGroups.reduce(function (t, e) {
                  return t + (e.enoughSpaceForGroup ? e.totalWidth : 0);
                }, 0),
                e =
                  this._paneWidth +
                  this._leftPriceScaleWidth +
                  this._rightPriceScaleWidth,
                i = e / 2,
                s = i - Math.ceil(t / 2);
              this._widget.style.left = s + 'px';
            }),
            (t.prototype._updateResetScalesButtonVisibility = function () {
              if (null !== this._chartModel) {
                var t = this._chartModel.model().isScalesResetAvailable();
                this._buttons.turn.classList.toggle(A, !t);
              }
            }),
            (t.prototype._updateMaximizeButtonsVisibility = function () {
              this._updateBtnGroupVisibility();
            }),
            (t.prototype._toggleFullscreenButtons = function () {
              var t = this._chart.getResizerDetacher().fullscreen.value();
              this._buttons.maximize.classList.toggle('js-hidden', t),
                this._buttons.minimize.classList.toggle('js-hidden', !t);
            }),
            (t.prototype._isMaximizeButtonAvailable = function () {
              return !!this._options.maximize;
            }),
            (t.prototype._move = function (t) {
              var e,
                i,
                s,
                o = this;
              null !== this._chartModel &&
                'stop' === this._state &&
                this._chartModel.beginUndoMacro(
                  1 === t ? 'Move Left' : 'Move Right',
                ),
                (this._state = x.stop),
                (this._moveType = 'animated'),
                this._deferredFinishTimeout &&
                  (clearTimeout(this._deferredFinishTimeout),
                  (this._deferredFinishTimeout = 0)),
                this._finishingTimeout &&
                  (clearTimeout(this._finishingTimeout),
                  (this._finishingTimeout = 0)),
                (this._startTime = Date.now()),
                0 === this._movingTimeout &&
                  ((e = this._startTime),
                  (i = 10),
                  (s = function () {
                    o._moveStep(e, 0, 50 * t, 1e3),
                      (o._movingTimeout = setTimeout(s, i));
                  }),
                  (this._movingTimeout = setTimeout(s, i)));
            }),
            (t.prototype._moveStep = function (t, e, i, s) {
              var o, n, l;
              return null === this._chartModel ||
                this._chartModel.timeScale().isEmpty()
                ? void 0
                : ((o = Date.now()) < t && (t = o),
                  ((n = (o - t) / s) > 1 || !isFinite(n)) && (n = 1),
                  (l = 1 - Math.pow(1 - n, 3)),
                  (this._currentDistance = (i - e) * l + e),
                  this._chartModel.scrollChart(this._currentDistance),
                  n);
            }),
            (t.prototype._finishMove = function () {
              var t,
                e,
                i,
                s = this;
              clearTimeout(this._movingTimeout),
                (this._movingTimeout = 0),
                (this._deferredFinishTimeout = 0),
                (t = this._currentDistance),
                (e = Date.now()),
                (i = function () {
                  var o = s._moveStep(e, t, 0, 700);
                  o && o < 1
                    ? (s._finishingTimeout = setTimeout(i, 10))
                    : null !== s._chartModel &&
                      ((s._state = x.wait_finishing),
                      (s._moveType = ''),
                      (s._movingTimeout = 0),
                      (s._currentDistance = 0),
                      s._chartModel.endUndoMacro());
                }),
                (this._finishingTimeout = setTimeout(i, 10));
            }),
            (t.prototype._stopMove = function () {
              'moving' === this._state &&
                ((this._state = x.moving),
                Date.now() - this._startTime < 200
                  ? (this._deferredFinishTimeout = setTimeout(
                      this._finishMove.bind(this),
                      200 - (Date.now() - this._startTime),
                    ))
                  : this._finishMove());
            }),
            (t.prototype._moveByBar = function (t) {
              var e,
                i,
                s,
                o,
                n,
                l,
                a = this;
              if (null !== this._chartModel) {
                if ((e = this._chartModel.timeScale()).isEmpty()) return;
                'stop' === this._state &&
                  this._chartModel.beginUndoMacro(
                    1 === t ? 'Move Left' : 'Move Right',
                  ),
                  null !== e.visibleBarsStrictRange() &&
                    ((i =
                      e.indexToCoordinate(
                        e.visibleBarsStrictRange().lastBar(),
                      ) +
                      e.barSpacing() / 2),
                    Math.abs(e.width() - i) > e.barSpacing() / 6 &&
                      this._chartModel.scrollChart(e.width() - i)),
                  (this._state = x.stop),
                  (this._moveType = 'by_bar'),
                  (this._startTime = Date.now()),
                  this._movingTimeout ||
                    ((s = 0),
                    (o = 150),
                    (n = 400),
                    (l = function () {
                      a._moveByBarStep(t),
                        s++,
                        o > 100 && (o -= (s / 5) * 20),
                        (a._movingTimeout = setTimeout(l, o));
                    }),
                    (this._movingTimeout = setTimeout(l, n)),
                    this._moveByBarStep(t));
              }
            }),
            (t.prototype._moveByBarStep = function (t) {
              if (null !== this._chartModel) {
                if (this._chartModel.timeScale().isEmpty()) return;
                this._chartModel.scrollChartByBar(t);
              }
            }),
            (t.prototype._stopMoveByBar = function () {
              'moving' === this._state &&
                (clearTimeout(this._movingTimeout),
                (this._movingTimeout = 0),
                (this._state = x.wait_finishing),
                (this._moveType = ''),
                (this._movingTimeout = 0),
                (this._currentDistance = 0),
                null !== this._chartModel && this._chartModel.endUndoMacro());
            }),
            (t.prototype._keydownHandler = function (t) {
              var e, i;
              t.metaKey ||
                (37 !== (e = t.which) && 39 !== e) ||
                this._pressedKey[e] ||
                ((this._pressedKey[e] = !0),
                t.target.closest('input, textarea') ||
                  ((i = 37 === e ? 1 : -1),
                  t.ctrlKey || t.altKey ? this._move(i) : this._moveByBar(i),
                  t.preventDefault()));
            }),
            (t.prototype._keyupHandler = function (t) {
              var e = t.which;
              (37 !== e && 39 !== e) ||
                t.target.closest('input, textarea') ||
                ((this._pressedKey[t.which] = !1),
                'by_bar' === this._moveType
                  ? this._stopMoveByBar()
                  : this._stopMove());
            }),
            (t.prototype._trackEvent = function (t) {
              0;
            }),
            t
          );
        })());
    },
    WYzw: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>';
    },
    'Y+EN': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>';
    },
    ZKFq: function (t, e, i) {
      t.exports = {
        paneControls: 'paneControls-3t_VmRy0',
        hasTopMargin: 'hasTopMargin-2samtQKI',
        hidden: 'hidden-3ndYaA31',
        button: 'button-1T73noHe pane-button-3IbFaPrJ',
        buttonIcon: 'buttonIcon-1vsadlK4',
        minimize: 'minimize-UL6CPYKt',
        touchMode: 'touchMode-33C2amJm',
        maximize: 'maximize-2gtRCsC0',
        'maximize-animation-up-bracket':
          'maximize-animation-up-bracket-PKA42SoI',
        'maximize-animation-down-bracket':
          'maximize-animation-down-bracket-6VpX9y4d',
        'minimize-animation-up-bracket':
          'minimize-animation-up-bracket-1ZcEx180',
        'minimize-animation-down-bracket':
          'minimize-animation-down-bracket-2sZM5-ln',
        up: 'up-3-Dp9Ytc',
        'up-animation': 'up-animation-2oGxHhg9',
        down: 'down-2qp_j-xN',
        'down-animation': 'down-animation-28i3s7Bs',
        buttonsWrapper: 'buttonsWrapper-326cDko9',
      };
    },
    e2QN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>';
    },
    e8Rm: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>';
    },
    eYcT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>';
    },
    fBig: function (t, e, i) {
      t.exports = {
        loader: 'loader-1ON1rkY9',
        loaderItem: 'loaderItem-6asdclOe',
        'loader-animation': 'loader-animation-1vbmOmyN',
        shown: 'shown-1QFCxvPl',
        touchMode: 'touchMode-I-CBM3V3',
      };
    },
    fk9O: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>';
    },
    gKdq: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>';
    },
    i9xP: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>';
    },
    jrhZ: function (t, e, i) {
      t.exports = {
        'animation-minimize-corner-left-top':
          'animation-minimize-corner-left-top-1QFR0TYG',
        'animation-minimize-corner-right-top':
          'animation-minimize-corner-right-top-2OigqFDd',
        'animation-minimize-corner-right-bottom':
          'animation-minimize-corner-right-bottom-171Xjuh0',
        'animation-minimize-corner-left-bottom':
          'animation-minimize-corner-left-bottom-Gj_EWVOk',
        'animation-maximize-corner-left-top':
          'animation-maximize-corner-left-top-1dOMET94',
        'animation-maximize-corner-right-top':
          'animation-maximize-corner-right-top-X6SjWmdM',
        'animation-maximize-corner-right-bottom':
          'animation-maximize-corner-right-bottom-2lZ_pYbV',
        'animation-maximize-corner-left-bottom':
          'animation-maximize-corner-left-bottom-28bRbB5v',
      };
    },
    ku84: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>';
    },
    lvAK: function (t, e, i) {
      'use strict';
      function s(t, e) {
        var i = Object(l.ensureNotNull)(e.target);
        return (function (t) {
          var e,
            i,
            s,
            o,
            n,
            a,
            r = [];
          t.maximize.visible.value()
            ? ((e = Object(l.ensure)(t.maximize.title)),
              (i = Object(l.ensureNotNull)(t.maximize.action)),
              r.push(
                new p.Action({
                  icon: v,
                  label: e.value(),
                  statName: 'Maximize Pane',
                  shortcutHint: w,
                  onExecute: function () {
                    return i();
                  },
                }),
              ))
            : t.minimize.visible.value() &&
              ((e = Object(l.ensure)(t.minimize.title)),
              (s = Object(l.ensureNotNull)(t.minimize.action)),
              r.push(
                new p.Action({
                  icon: v,
                  label: e.value(),
                  statName: 'Minimize Pane',
                  shortcutHint: w,
                  onExecute: function () {
                    return s();
                  },
                }),
              ));
          t.up.visible.value() &&
            ((e = Object(l.ensure)(t.up.title)),
            (o = Object(l.ensureNotNull)(t.up.action)),
            r.push(
              new p.Action({
                icon: g,
                label: e.value(),
                statName: 'Move pane up',
                onExecute: function () {
                  return o();
                },
              }),
            ));
          t.down.visible.value() &&
            ((e = Object(l.ensure)(t.down.title)),
            (n = Object(l.ensureNotNull)(t.down.action)),
            r.push(
              new p.Action({
                icon: m,
                label: e.value(),
                statName: 'Move pane down',
                onExecute: function () {
                  return n();
                },
              }),
            ));
          t.close.visible.value() &&
            ((e = Object(l.ensure)(t.close.title)),
            (a = Object(l.ensureNotNull)(t.close.action)),
            r.push(
              new p.Action({
                icon: b,
                label: e.value(),
                statName: 'Delete pane',
                onExecute: function () {
                  return a();
                },
              }),
            ));
          return _.ContextMenuManager.createMenu(r);
        })(t).then(function (t) {
          return (
            t.show(function (t) {
              var e = i.getBoundingClientRect();
              return { clientX: e.right - t, clientY: e.top + e.height + 3 };
            }),
            t
          );
        });
      }
      var o,
        n,
        l,
        a,
        r,
        d,
        u,
        h,
        c,
        p,
        _,
        b,
        g,
        m,
        v,
        w,
        y,
        f,
        S,
        C,
        E,
        V,
        M,
        T,
        H,
        x,
        A,
        L,
        P,
        B,
        k,
        O,
        D,
        z,
        j,
        W,
        N,
        R,
        I;
      i.r(e),
        (o = i('1ANp')),
        (n = i('3ClC')),
        i('H72D'),
        (l = i('Eyy1')),
        (a = i('Zo2/')),
        (r = i('EV8o')),
        (d = i('ZKFq')),
        (u = i('0jws')),
        (h = 666.65),
        (c = (function () {
          function t(t, e, i) {
            var s, o, n, l, r, u, h;
            for (
              this._parentEl = document.createElement('div'),
                this._listActionsWrapperEl = null,
                this._listActionsElements = {},
                this._actionsSpawns = {},
                this._onToggleVisibilityHandler = null,
                this._wrapEl = t,
                this._actions = e,
                this._globalVisibility = i.globalVisibility.spawn(),
                this._globalVisibility.subscribe(
                  this._setVisibility.bind(this),
                ),
                this._visibilityType = i.visibilityType.spawn(),
                this._visibilityType.subscribe(
                  this._updateVisibilityActions.bind(this),
                ),
                this._hasTopMargin = i.hasTopMargin.spawn(),
                this._hasTopMargin.subscribe(this._updateTopMargin.bind(this)),
                this._doNotSwitchToContextMenuMode =
                  i.doNotSwitchToContextMenuMode,
                this._themedColor = i.themedColor.spawn(),
                this._themedColor.subscribe(this._updateThemedColor.bind(this)),
                s = 0,
                o = Object.entries(this._actions);
              s < o.length;
              s++
            )
              (l = (n = o[s])[0]),
                (r = n[1]),
                (u = l),
                (this._actionsSpawns[u] = {
                  visible: r.visible.spawn(),
                  title: void 0 === r.title ? null : r.title.spawn(),
                }),
                this._actionsSpawns[u].visible.subscribe(
                  this._updateActionVisibilities.bind(this, u),
                ),
                null !== (h = this._actionsSpawns[u].title) &&
                  h.subscribe(this._updateActionTitle.bind(this, u));
            this._render(),
              this._updateVisibilityActions(this._visibilityType.value()),
              this._updateTopMargin(this._hasTopMargin.value()),
              this._updateThemedColor(this._themedColor.value()),
              this._parentEl.classList.toggle(
                d.touchMode,
                a.trackingModeIsAvailable,
              ),
              this._parentEl.addEventListener('contextmenu', function (t) {
                return t.preventDefault();
              });
          }
          return (
            (t.prototype.destroy = function () {
              var t, e, i, s;
              for (
                this._visibilityType.destroy(),
                  this._hasTopMargin.destroy(),
                  this._themedColor.destroy(),
                  t = 0,
                  e = Object.keys(this._actionsSpawns);
                t < e.length;
                t++
              )
                (i = e[t]),
                  this._actionsSpawns[i].visible.destroy(),
                  null !== (s = this._actionsSpawns[i].title) && s.destroy();
              null !== this._onToggleVisibilityHandler &&
                (this._wrapEl.removeEventListener(
                  'mouseenter',
                  this._onToggleVisibilityHandler,
                ),
                this._wrapEl.removeEventListener(
                  'mouseleave',
                  this._onToggleVisibilityHandler,
                ),
                (this._onToggleVisibilityHandler = null)),
                (this._parentEl.innerHTML = ''),
                delete this._parentEl;
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              var e,
                i,
                s = t < h;
              this._doNotSwitchToContextMenuMode.value() && s && (s = !1),
                (e = Object(l.ensureNotNull)(this._listActionsWrapperEl)),
                (i = Object(l.ensureNotNull)(this._listActionsElements.more)),
                e.classList.toggle(u.blockHidden, s),
                i.classList.toggle(
                  u.blockHidden,
                  !s || !this._actions.more.visible.value(),
                );
            }),
            (t.prototype._render = function () {
              this._renderActions(),
                this._parentEl.classList.add(d.paneControls),
                this._wrapEl.append(this._parentEl);
            }),
            (t.prototype._renderActions = function () {
              null === this._listActionsWrapperEl &&
                ((this._listActionsWrapperEl = document.createElement('div')),
                this._listActionsWrapperEl.classList.add(d.buttonsWrapper),
                this._parentEl.append(this._listActionsWrapperEl)),
                (this._listActionsElements.up = Object(r.a)(
                  this._actions.up,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                (this._listActionsElements.down = Object(r.a)(
                  this._actions.down,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                (this._listActionsElements.close = Object(r.a)(
                  this._actions.close,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                (this._listActionsElements.maximize = Object(r.a)(
                  this._actions.maximize,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                (this._listActionsElements.minimize = Object(r.a)(
                  this._actions.minimize,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                this._listActionsWrapperEl.append(
                  this._listActionsElements.up,
                  this._listActionsElements.down,
                  this._listActionsElements.close,
                  this._listActionsElements.maximize,
                  this._listActionsElements.minimize,
                ),
                (this._listActionsElements.more = Object(r.a)(
                  this._actions.more,
                  d.button,
                  d.buttonIcon,
                  u.blockHidden,
                )),
                this._parentEl.append(this._listActionsElements.more);
            }),
            (t.prototype._updateActionVisibilities = function (t, e) {
              Object(l.ensureNotNull)(
                this._listActionsElements[t],
              ).classList.toggle(u.blockHidden, !e);
            }),
            (t.prototype._updateActionTitle = function (t, e) {
              Object(l.ensureNotNull)(
                this._listActionsElements[t],
              ).setAttribute('title', e);
            }),
            (t.prototype._updateVisibilityActions = function (t) {
              var e = t === o.VisibilityType.AlwaysOn,
                i = !1;
              t === o.VisibilityType.AlwaysOff || e
                ? (null !== this._onToggleVisibilityHandler &&
                    (this._wrapEl.removeEventListener(
                      'mouseenter',
                      this._onToggleVisibilityHandler,
                    ),
                    this._wrapEl.removeEventListener(
                      'mouseleave',
                      this._onToggleVisibilityHandler,
                    ),
                    (this._onToggleVisibilityHandler = null)),
                  (i = e))
                : null === this._onToggleVisibilityHandler &&
                  ((this._onToggleVisibilityHandler = this._onToggleButtonsVisibility.bind(
                    this,
                  )),
                  this._wrapEl.addEventListener(
                    'mouseenter',
                    this._onToggleVisibilityHandler,
                  ),
                  this._wrapEl.addEventListener(
                    'mouseleave',
                    this._onToggleVisibilityHandler,
                  )),
                this._setVisibility(this._globalVisibility.value() && i);
            }),
            (t.prototype._onToggleButtonsVisibility = function (t) {
              this._setVisibility(
                this._globalVisibility.value() && 'mouseenter' === t.type,
              );
            }),
            (t.prototype._setVisibility = function (t) {
              this._parentEl.classList.toggle(d.hidden, !t);
            }),
            (t.prototype._updateTopMargin = function (t) {
              this._parentEl.classList.toggle(d.hasTopMargin, t);
            }),
            (t.prototype._updateThemedColor = function (t) {
              this._parentEl.style.color = t;
            }),
            t
          );
        })()),
        (p = i('7KDR')),
        (_ = i('5VQP')),
        (b = i('obM5')),
        (g = i('fk9O')),
        (m = i('gKdq')),
        (v = i('WYzw')),
        (w = window.t('Double click')),
        (y = i('hY0g')),
        (f = i.n(y)),
        (S = i('EsvI')),
        (C = i('ei7k')),
        (E = i('OJSF')),
        (V = i('PXSR')),
        (M = i('QEZv')),
        (T = i('ku84')),
        (H = i('i9xP')),
        (x = i('1Wf8')),
        (A = i('956S')),
        i.d(e, 'PaneControlsWidget', function () {
          return I;
        }),
        (L = Modernizr.mobiletouch),
        (P = L ? x : T),
        (B = L ? A : H),
        (k = window.t('Delete pane')),
        (O = window.t('Move pane up')),
        (D = window.t('Move pane down')),
        (z = window.t('Maximize pane')),
        (j = window.t('Restore pane')),
        (W = window.t('Manage panes')),
        (N = window.t('Double click')),
        (R = Object(C.b)({ keys: [''], text: N })),
        (I = (function () {
          function t(t, e, i, s, n) {
            var l = this;
            (this._actions = {}),
              (this._moreActionCM = null),
              (this._themedColor = new f.a('')),
              (this._model = t),
              (this._paneWidget = e),
              (this._callbacks = s),
              (this._closeButtonVisibility = new f.a(
                this._getCloseButtonVisibility(),
              )),
              (this._upButtonVisibility = new f.a(
                this._getUpButtonVisibility(),
              )),
              (this._downButtonVisibility = new f.a(
                this._getDownButtonVisibility(),
              )),
              (this._maximizeButtonVisibility = new f.a(
                this._getMaximizeButtonVisibility(),
              )),
              (this._minimizeButtonVisibility = new f.a(
                this._getMinimizeButtonVisibility(),
              )),
              this._createActions(),
              (this._visibilityTypeProperty = Object(o.actualBehavior)()),
              this._visibilityTypeProperty.subscribe(this, function (t) {
                l._visibilityType.setValue(t.value());
              }),
              (this._visibilityType = new f.a(
                this._visibilityTypeProperty.value(),
              )),
              (this._isPaneFirst = new f.a(this._getIsPaneFirstValue())),
              (this._isPaneMaximize = new f.a(this._getIsPaneMaximizeValue())),
              (this._isWidgetShow = new f.a(this._getIsWidgetShow())),
              (this._backgroundThemeName = i.backgroundThemeName),
              (this._renderer = new c(n, this._actions, {
                visibilityType: this._visibilityType.readonly(),
                globalVisibility: this._isWidgetShow.readonly(),
                hasTopMargin: this._isPaneFirst.readonly(),
                doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
                themedColor: this._themedColor.readonly(),
              }));
          }
          return (
            (t.prototype.destroy = function () {
              this._visibilityTypeProperty.unsubscribeAll(this),
                this._renderer.destroy();
            }),
            (t.prototype.action = function () {
              return this._actions;
            }),
            (t.prototype.update = function () {
              this._updateButtonsVisibility(),
                this._isPaneFirst.setValue(this._getIsPaneFirstValue()),
                this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
                this._isWidgetShow.setValue(this._getIsWidgetShow());
            }),
            (t.prototype.updateWidgetModeByWidth = function (t) {
              this._renderer.updateWidgetModeByWidth(t);
            }),
            (t.prototype.updateThemedColors = function (t) {
              null === t &&
                (t = Object(S.getStdThemedValue)(
                  'chartProperties.paneProperties.background',
                  this._backgroundThemeName.value(),
                )),
                this._themedColor.setValue(t || '');
            }),
            (t.prototype._updateButtonsVisibility = function () {
              this._closeButtonVisibility.setValue(
                this._getCloseButtonVisibility(),
              ),
                this._upButtonVisibility.setValue(
                  this._getUpButtonVisibility(),
                ),
                this._downButtonVisibility.setValue(
                  this._getDownButtonVisibility(),
                ),
                this._maximizeButtonVisibility.setValue(
                  this._getMaximizeButtonVisibility(),
                ),
                this._minimizeButtonVisibility.setValue(
                  this._getMinimizeButtonVisibility(),
                );
            }),
            (t.prototype._createActions = function () {
              (this._actions.up = {
                icon: V,
                action: this._onUpDownButton.bind(this, 'up'),
                visible: this._upButtonVisibility,
                title: new f.a(O),
                className: d.up,
                dataset: { name: 'pane-button-up' },
              }),
                (this._actions.down = {
                  icon: M,
                  action: this._onUpDownButton.bind(this, 'down'),
                  visible: this._downButtonVisibility,
                  title: new f.a(D),
                  className: d.down,
                  dataset: { name: 'pane-button-down' },
                }),
                (this._actions.close = {
                  icon: E,
                  action: this._onCloseButton.bind(this),
                  visible: this._closeButtonVisibility,
                  title: new f.a(k),
                  dataset: { name: 'pane-button-close' },
                }),
                (this._actions.maximize = {
                  icon: P,
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._maximizeButtonVisibility,
                  title: new f.a(z),
                  hotKeyTitle: R,
                  className: d.maximize,
                  dataset: { name: 'pane-button-maximize' },
                }),
                (this._actions.minimize = {
                  icon: P,
                  action: this._onToggleMaximizeButton.bind(this),
                  visible: this._minimizeButtonVisibility,
                  title: new f.a(j),
                  hotKeyTitle: R,
                  className: d.minimize,
                  dataset: { name: 'pane-button-minimize' },
                }),
                (this._actions.more = {
                  icon: B,
                  action: this._showButtonsInContextMenu.bind(this),
                  visible: new f.a(!L),
                  title: new f.a(W),
                  dataset: { name: 'pane-button-more' },
                });
            }),
            (t.prototype._getCloseButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = !1;
              return (
                t.containsMainSeries() ||
                  t.isMaximized() ||
                  L ||
                  (e = t.dataSources().some(function (t) {
                    return Object(n.isStudy)(t);
                  })),
                e
              );
            }),
            (t.prototype._onCloseButton = function () {
              var t = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.removePane(t);
            }),
            (t.prototype._getUpButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes().indexOf(t);
              return e > 0 && !t.isMaximized() && !L;
            }),
            (t.prototype._getDownButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes(),
                i = e.indexOf(t);
              return i < e.length - 1 && !t.isMaximized() && !L;
            }),
            (t.prototype._onUpDownButton = function (t) {
              var e = this._model
                .model()
                .panes()
                .indexOf(this._paneWidget.state());
              this._model.rearrangePanes(e, t);
            }),
            (t.prototype._getMaximizeButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes();
              return e.length > 1 && !t.isMaximized() && !L;
            }),
            (t.prototype._getMinimizeButtonVisibility = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes();
              return e.length > 1 && t.isMaximized();
            }),
            (t.prototype._onToggleMaximizeButton = function () {
              this._callbacks.toggleMaximizePane(this._paneWidget);
            }),
            (t.prototype._showButtonsInContextMenu = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : s(this._actions, t).then(function (t) {
                      e._moreActionCM = t;
                    });
            }),
            (t.prototype._getIsPaneFirstValue = function () {
              var t = this._paneWidget.state(),
                e = this._model.model().panes();
              return 0 === e.indexOf(t) || t.isMaximized();
            }),
            (t.prototype._getIsPaneMaximizeValue = function () {
              return this._paneWidget.state().isMaximized();
            }),
            (t.prototype._getIsWidgetShow = function () {
              return this._model.model().panes().length > 1;
            }),
            t
          );
        })());
    },
    nFx7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>';
    },
    obM5: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>';
    },
    qfuz: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
    },
    rGGD: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>';
    },
    sAH5: function (t, e, i) {
      'use strict';
      function s(t, e) {
        if (null === t.firstChild) {
          var i = document.createTextNode(e);
          t.appendChild(i);
        } else t.firstChild.nodeValue = e;
      }
      function o(t) {
        return void 0 !== t ? I.resetTransparency(t) : t;
      }
      function n(t, e, i) {
        t.setProperty(e, !e.value(), i);
      }
      function l(t, e, i, s, o) {
        return (function (t, e, i, s) {
          var o = [],
            l = t.model().properties().paneProperties.legendProperties;
          o.push(
            new Vt.Action({
              checkable: !0,
              checked: l.showSeriesTitle.value(),
              label: Ht,
              statName: 'Show Symbol',
              onExecute: function () {
                return n(
                  t,
                  l.showSeriesTitle,
                  'Change Symbol Description Visibility',
                );
              },
            }),
          ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: l.showSeriesOHLC.value(),
                label: xt,
                statName: 'Show OHLC Values',
                onExecute: function () {
                  return n(
                    t,
                    l.showSeriesOHLC,
                    'Change OHLC Values Visibility',
                  );
                },
              }),
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: l.showBarChange.value(),
                label: At,
                statName: 'Show Bar Change Values',
                onExecute: function () {
                  return n(t, l.showBarChange, 'Change Bar Change Visibility');
                },
              }),
            ),
            o.push(new Vt.Separator()),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: l.showStudyTitles.value(),
                label: Lt,
                statName: 'Show Indicator Titles',
                onExecute: function () {
                  return n(
                    t,
                    l.showStudyTitles,
                    'Change Indicator Titles Visibility',
                  );
                },
              }),
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: l.showStudyArguments.value(),
                label: Pt,
                statName: 'Show Indicator Arguments',
                onExecute: function () {
                  return n(
                    t,
                    l.showStudyArguments,
                    'Change Indicator Arguments Visibility',
                  );
                },
              }),
            ),
            o.push(
              new Vt.Action({
                checkable: !0,
                checked: l.showStudyValues.value(),
                label: Bt,
                statName: 'Show Indicator Values',
                onExecute: function () {
                  return n(
                    t,
                    l.showStudyValues,
                    'Change Indicator Values Visibility',
                  );
                },
              }),
            ),
            Ot ||
              (o.push(new Vt.Separator()),
              o.push(
                new Vt.Action({
                  checkable: !0,
                  checked: l.wrapText.value(),
                  label: kt,
                  statName: 'Wrap Text',
                  onExecute: function () {
                    n(t, l.wrapText, 'Change wrap text'),
                      a('Change wrap text ' + (l.wrapText ? 'on' : 'off'));
                  },
                }),
              ));
          e.settings &&
            (o.push(new Vt.Separator()),
            o.push(
              new Vt.Action({
                label: window.t('Settings...'),
                icon: Tt,
                statName: 'Settings...',
                onExecute: function () {
                  return i(Z.TabNames.legend);
                },
              }),
            ));
          return Mt.ContextMenuManager.createMenu(o, {}, s);
        })(t, e, i, o).then(function (t) {
          return t.show(s), t;
        });
      }
      function a(t) {
        Object(jt.trackEvent)('GUI', 'Legend action', t);
      }
      var r,
        d,
        u,
        h,
        c,
        p,
        _,
        b,
        g,
        m,
        v,
        w,
        y,
        f,
        S,
        C,
        E,
        V,
        M,
        T,
        H,
        x,
        A,
        L,
        P,
        B,
        k,
        O,
        D,
        z,
        j,
        W,
        N,
        R,
        I,
        F,
        G,
        K,
        Z,
        q,
        Y,
        U,
        J,
        X,
        Q,
        $,
        tt,
        et,
        it,
        st,
        ot,
        nt,
        lt,
        at,
        rt,
        dt,
        ut,
        ht,
        ct,
        pt,
        _t,
        bt,
        gt,
        mt,
        vt,
        wt,
        yt,
        ft,
        St,
        Ct,
        Et,
        Vt,
        Mt,
        Tt,
        Ht,
        xt,
        At,
        Lt,
        Pt,
        Bt,
        kt,
        Ot,
        Dt,
        zt,
        jt,
        Wt,
        Nt,
        Rt,
        It,
        Ft;
      i.r(e),
        (r = i('mrSG')),
        (d = i('eJTA')),
        (u = i('Eyy1')),
        i('H72D'),
        (h = i('efOF')),
        (c = i('EV8o')),
        (p = i('S8xo')),
        (_ = i('GUQs')),
        (b = i('R5JZ')),
        (g = i('5Alx')),
        (m = i('0jws')),
        (v = i('qFKp')),
        (w = v.CheckMobile.any()),
        (y = [g.title1st, g.title2nd, g.title3rd, g.title4th]),
        (f = 24),
        (C = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._clientHeight = null),
              (o._flagged = o._model.flagged().spawn()),
              o._flagged.subscribe(o._updateFlaggedState.bind(o)),
              o._updateStates(),
              o
            );
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                void 0 !== this._flagged && this._flagged.destroy();
            }),
            (e.prototype.getHeight = function () {
              return null === this._el
                ? null
                : (null === this._clientHeight &&
                    ((this._clientHeight = this._el.clientHeight),
                    0 === this._clientHeight && (this._clientHeight = null)),
                  this._clientHeight);
            }),
            (e.prototype._render = function () {
              var e, i, s;
              t.prototype._render.call(this),
                (this._el = document.createElement('div')),
                this._el.classList.add(g.item, g.series),
                (this._el.dataset.name = 'legend-series-item'),
                (e = document.createElement('div')).classList.add(
                  g.noWrapWrapper,
                ),
                this._el.appendChild(e),
                (i = Object(u.ensureNotNull)(this._titleParentEl)),
                e.appendChild(i),
                null !== this._actionsParentEl &&
                  e.appendChild(this._actionsParentEl),
                (s = Object(u.ensureNotNull)(this._valuesParentEl)),
                this._el.appendChild(s),
                this._parentEl.append(this._el);
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateFlaggedState();
            }),
            (e.prototype._renderValues = function () {
              var t, e, i, s, o, n, l, a;
              for (
                null === this._valuesParentEl &&
                  ((this._valuesParentEl = document.createElement('div')),
                  this._valuesParentEl.classList.add(g.valuesWrapper),
                  (this._valuesAdditionalWrapperEl = document.createElement(
                    'div',
                  )),
                  this._valuesAdditionalWrapperEl.classList.add(
                    g.valuesAdditionalWrapper,
                  ),
                  this._valuesParentEl.appendChild(
                    this._valuesAdditionalWrapperEl,
                  )),
                  t = Object(u.ensureNotNull)(this._valuesAdditionalWrapperEl),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              )
                (s = i[e]),
                  (o = document.createElement('div')).classList.add(
                    g.valueItem,
                  ),
                  o.classList.toggle(m.blockHidden, !s.visible.value()),
                  (n = document.createElement('div')),
                  (l = s.title.value() || ''),
                  n.classList.add(g.valueTitle),
                  n.classList.toggle(m.blockHidden, 0 === l.length),
                  n.appendChild(document.createTextNode(l)),
                  o.appendChild(n),
                  (a = document.createElement('div')).classList.add(
                    g.valueValue,
                  ),
                  (a.style.color = s.color.value() || ''),
                  a.appendChild(document.createTextNode(s.value.value())),
                  o.appendChild(a),
                  this._valuesElements.push({ value: a }),
                  t.appendChild(o);
            }),
            (e.prototype._updateFlaggedState = function () {
              void 0 !== this._flagged &&
                Object(u.ensureNotNull)(this._el).classList.toggle(
                  g.flagged,
                  Boolean(this._flagged.value()),
                );
            }),
            e
          );
        })(
          (S = (function () {
            function t(t, e, i) {
              var s, o;
              for (
                this._el = null,
                  this._titleParentEl = null,
                  this._titleElements = [],
                  this._valuesParentEl = null,
                  this._valuesAdditionalWrapperEl = null,
                  this._valuesElements = [],
                  this._actionsParentEl = null,
                  this._actionAdditionalWrapperEl = null,
                  this._showActionsHandler = null,
                  this._hideActionsHandler = null,
                  this._selectedSourceHandler = null,
                  this._mouseEventHandlers = [],
                  this._stayInHoveredMode = !1,
                  this._outsideEvent = null,
                  this._model = t,
                  this._parentEl = e,
                  this._disabled = this._model.disabled().spawn(),
                  this._disabled.subscribe(
                    this._updateDisabledState.bind(this),
                  ),
                  this._selected = this._model.selected().spawn(),
                  this._selected.subscribe(
                    this._updateSelectedState.bind(this),
                  ),
                  this._isTitleHidden = this._model.isTitleHidden().spawn(),
                  this._isValuesHidden = this._model.isValuesHidden().spawn(),
                  this._isRowHidden = this._model.isRowHidden().spawn(),
                  this._isTitleHidden.subscribe(
                    this._updateShowTitles.bind(this),
                  ),
                  this._isValuesHidden.subscribe(
                    this._updateShowValues.bind(this),
                  ),
                  this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
                  this._titlesSpawns = this._model.titles().map(function (t) {
                    return t.spawn();
                  }),
                  s = 0;
                s < this._titlesSpawns.length;
                s++
              )
                this._titlesSpawns[s].subscribe(
                  this._updateTitlesHandler.bind(this, s),
                );
              for (
                this._values = this._model.values().spawn(),
                  this._values.subscribe(this._updateValues.bind(this)),
                  this._valuesSpawnArray = this._values
                    .value()
                    .map(function (t) {
                      return {
                        value: t.value.spawn(),
                        color: t.color.spawn(),
                        visible: t.visible.spawn(),
                      };
                    }),
                  this._addValuesSpawnsSubscriptions(),
                  this._actionsSpawnArray = this._model
                    .actions()
                    .map(function (t) {
                      return {
                        visible: t.visible.spawn(),
                        title: void 0 === t.title ? null : t.title.spawn(),
                      };
                    }),
                  s = 0;
                s < this._actionsSpawnArray.length;
                s++
              )
                this._actionsSpawnArray[s].visible.subscribe(
                  this._updateActionVisibilities.bind(this, s),
                ),
                  null !== (o = this._actionsSpawnArray[s].title) &&
                    o.subscribe(this._updateActionTitle.bind(this, s));
              (this._withActions = i.withActions),
                this._render(),
                this._updateStates(),
                this._updateShowTitles(),
                this._updateShowValues(),
                this._updateShowLine(),
                (this._customTextColor = i.customTextColor.spawn()),
                this._customTextColor.subscribe(
                  this._updateCustomTextColor.bind(this),
                ),
                this._updateCustomTextColor(),
                this._withActions &&
                  ((this._showActionsHandler = Object(_.b)(
                    this._showActions.bind(this),
                  )),
                  (this._hideActionsHandler = Object(_.b)(
                    this._hideActions.bind(this),
                  )),
                  (this._selectedSourceHandler = Object(_.b)(
                    this._model.setSourceSelected.bind(this._model),
                  )),
                  null !== this._titleParentEl &&
                    (this._titleParentEl.addEventListener(
                      'touchend',
                      this._selectedSourceHandler,
                    ),
                    this._titleParentEl.addEventListener(
                      'mousedown',
                      this._selectedSourceHandler,
                    ),
                    w ||
                      (this._titleParentEl.addEventListener(
                        'mouseenter',
                        this._showActionsHandler,
                      ),
                      this._titleParentEl.addEventListener(
                        'mouseleave',
                        this._hideActionsHandler,
                      )),
                    this._mouseEventHandlers.push(
                      new p.MouseEventHandler(
                        this._titleParentEl,
                        {
                          contextMenuEvent: this._onShowContextMenuAndStayInHoveredMode.bind(
                            this,
                          ),
                        },
                        {
                          treatVertTouchDragAsPageScroll: !1,
                          treatHorzTouchDragAsPageScroll: !1,
                        },
                      ),
                    ),
                    this._mouseEventHandlers.push(
                      new p.MouseEventHandler(
                        this._titleParentEl,
                        {
                          mouseDoubleClickEvent: this._model.onShowSettings.bind(
                            this._model,
                          ),
                        },
                        {
                          treatVertTouchDragAsPageScroll: !1,
                          treatHorzTouchDragAsPageScroll: !1,
                        },
                      ),
                    )),
                  null === this._actionAdditionalWrapperEl ||
                    w ||
                    (this._actionAdditionalWrapperEl.addEventListener(
                      'mouseenter',
                      this._showActionsHandler,
                    ),
                    this._actionAdditionalWrapperEl.addEventListener(
                      'mouseleave',
                      this._hideActionsHandler,
                    )),
                  null !== this._valuesParentEl &&
                    this._mouseEventHandlers.push(
                      new p.MouseEventHandler(
                        this._valuesParentEl,
                        {
                          contextMenuEvent: this._model.onContextMenuShow.bind(
                            this._model,
                          ),
                        },
                        {
                          treatVertTouchDragAsPageScroll: !1,
                          treatHorzTouchDragAsPageScroll: !1,
                        },
                      ),
                    ));
            }
            return (
              (t.prototype.destroy = function () {
                var t, e, i, s, o, n, l, a;
                for (
                  this._disabled.destroy(),
                    this._selected.destroy(),
                    this._isTitleHidden.destroy(),
                    this._isValuesHidden.destroy(),
                    this._isRowHidden.destroy(),
                    this._customTextColor.destroy(),
                    t = 0,
                    e = this._titlesSpawns;
                  t < e.length;
                  t++
                )
                  e[t].destroy();
                if (null !== this._titleParentEl) {
                  for (i = 0, s = this._mouseEventHandlers; i < s.length; i++)
                    s[i].destroy();
                  (this._titleElements = []),
                    this._withActions &&
                      null !== this._selectedSourceHandler &&
                      null !== this._showActionsHandler &&
                      null !== this._hideActionsHandler &&
                      (this._titleParentEl.removeEventListener(
                        'touchend',
                        this._selectedSourceHandler,
                      ),
                      this._titleParentEl.removeEventListener(
                        'mousedown',
                        this._selectedSourceHandler,
                      ),
                      w ||
                        (this._titleParentEl.removeEventListener(
                          'mouseenter',
                          this._showActionsHandler,
                        ),
                        this._titleParentEl.removeEventListener(
                          'mouseleave',
                          this._hideActionsHandler,
                        ))),
                    (this._titleParentEl = null);
                }
                for (o = 0, n = this._actionsSpawnArray; o < n.length; o++)
                  (l = n[o]).visible.destroy(),
                    null !== (a = l.title) && a.destroy();
                null !== this._actionAdditionalWrapperEl &&
                  (this._withActions &&
                    null !== this._showActionsHandler &&
                    null !== this._hideActionsHandler &&
                    !w &&
                    (this._actionAdditionalWrapperEl.removeEventListener(
                      'mouseenter',
                      this._showActionsHandler,
                    ),
                    this._actionAdditionalWrapperEl.removeEventListener(
                      'mouseleave',
                      this._hideActionsHandler,
                    )),
                  (this._actionAdditionalWrapperEl = null)),
                  (this._actionsParentEl = null),
                  this._removeValuesSpawnsSubscriptions(),
                  this._values.destroy(),
                  null !== this._valuesParentEl &&
                    ((this._valuesElements = []),
                    (this._valuesParentEl = null)),
                  null !== this._el &&
                    (Object(u.ensureNotNull)(this._el.parentNode).removeChild(
                      this._el,
                    ),
                    (this._el = null));
              }),
              (t.prototype.getHeight = function () {
                return null === this._el ? null : f;
              }),
              (t.prototype._render = function () {
                this._renderTitle(),
                  this._renderActions(),
                  this._renderValues();
              }),
              (t.prototype._renderTitle = function () {
                var t, e, i, s;
                for (
                  null === this._titleParentEl &&
                    ((this._titleParentEl = document.createElement('div')),
                    this._titleParentEl.classList.add(g.titleWrapper)),
                    t = this._titleParentEl,
                    e = 0;
                  e < this._titlesSpawns.length;
                  e++
                )
                  (i = document.createElement('div')).classList.add(
                    g.title,
                    y[e],
                    'apply-overflow-tooltip',
                  ),
                    (i.dataset.name = 'legend-source-title'),
                    (s = this._titlesSpawns[e].value()).length > 0
                      ? (i.appendChild(document.createTextNode(s)),
                        i.classList.add(g.withDot))
                      : i.classList.add(m.blockHidden),
                    t.appendChild(i),
                    this._titleElements.push(i);
              }),
              (t.prototype._renderActions = function () {
                var t, e, i, s, o;
                if (this._withActions)
                  for (
                    null === this._actionsParentEl &&
                      ((this._actionsParentEl = document.createElement('div')),
                      this._actionsParentEl.classList.add(g.buttonsWrapper),
                      this._parentEl.append(this._actionsParentEl),
                      (this._actionAdditionalWrapperEl = document.createElement(
                        'div',
                      )),
                      this._actionAdditionalWrapperEl.classList.add(g.buttons),
                      this._actionsParentEl.appendChild(
                        this._actionAdditionalWrapperEl,
                      )),
                      t = Object(u.ensureNotNull)(
                        this._actionAdditionalWrapperEl,
                      ),
                      e = 0,
                      i = this._model.actions();
                    e < i.length;
                    e++
                  )
                    (s = i[e]),
                      (o = Object(c.a)(
                        s,
                        g.button,
                        g.buttonIcon,
                        m.blockHidden,
                      )),
                      t.appendChild(o);
              }),
              (t.prototype._updateTitlesHandler = function (t, e) {
                var i = Object(u.ensureNotNull)(this._titleElements[t]),
                  o = 0 === e.length;
                i.classList.toggle(m.blockHidden, o),
                  i.classList.toggle(g.withDot, !o),
                  s(i, e);
              }),
              (t.prototype._updateStates = function () {
                this._updateDisabledState(), this._updateSelectedState();
              }),
              (t.prototype._updateValuesHTMLElHandler = function (t, e) {
                s(Object(u.ensure)(this._valuesElements[t].value), e),
                  this._updateShowValues();
              }),
              (t.prototype._updateValueColorHandler = function (t, e) {
                void 0 === e && (e = ''),
                  (Object(u.ensure)(
                    this._valuesElements[t].value,
                  ).style.color = e);
              }),
              (t.prototype._updateValueVisibleHandler = function (t, e) {
                var i = Object(u.ensure)(this._valuesElements[t].value),
                  s = i.closest('.' + g.valueItem);
                null !== s && s.classList.toggle(m.blockHidden, !e);
              }),
              (t.prototype._updateDisabledState = function () {
                null !== this._el &&
                  this._el.classList.toggle(g.disabled, this._disabled.value());
              }),
              (t.prototype._updateShowLine = function () {
                null !== this._el &&
                  this._el.classList.toggle(
                    m.blockHidden,
                    this._isRowHidden.value(),
                  );
              }),
              (t.prototype._updateSelectedState = function () {
                null !== this._el &&
                  this._withActions &&
                  this._el.classList.toggle(g.selected, this._selected.value());
              }),
              (t.prototype._showActions = function () {
                if (null !== this._el && this._withActions) {
                  this._el.classList.add(g.withAction);
                  var t =
                    null !== this._valuesParentEl &&
                    null !== this._titleParentEl &&
                    this._valuesParentEl.offsetTop ===
                      this._titleParentEl.offsetTop;
                  this._el.classList.toggle(g.withTail, t);
                }
              }),
              (t.prototype._hideActions = function () {
                null !== this._el &&
                  this._withActions &&
                  !this._stayInHoveredMode &&
                  (this._el.classList.remove(g.withAction),
                  null !== this._valuesParentEl &&
                    this._valuesParentEl.classList.remove(g.withTail));
              }),
              (t.prototype._updateShowTitles = function () {
                null !== this._titleParentEl &&
                  (this._titleParentEl.classList.toggle(
                    m.blockHidden,
                    this._isTitleHidden.value(),
                  ),
                  null !== this._actionsParentEl &&
                    this._actionsParentEl.classList.toggle(
                      m.blockHidden,
                      this._isTitleHidden.value(),
                    ));
              }),
              (t.prototype._updateShowValues = function () {
                if (null !== this._valuesAdditionalWrapperEl) {
                  var t = this._isValuesHidden.value();
                  (t = !this._valuesSpawnArray.some(function (t) {
                    return '' !== t.value.value();
                  })),
                    this._valuesAdditionalWrapperEl.classList.toggle(
                      m.blockHidden,
                      t,
                    );
                }
              }),
              (t.prototype._updateValues = function () {
                this._removeValuesSpawnsSubscriptions(),
                  null !== this._valuesParentEl &&
                    null !== this._valuesAdditionalWrapperEl &&
                    ((this._valuesElements = []),
                    (this._valuesAdditionalWrapperEl.innerHTML = '')),
                  (this._valuesSpawnArray = this._values
                    .value()
                    .map(function (t) {
                      return {
                        value: t.value.spawn(),
                        color: t.color.spawn(),
                        visible: t.visible.spawn(),
                      };
                    })),
                  this._renderValues(),
                  this._addValuesSpawnsSubscriptions(),
                  this._updateShowValues();
              }),
              (t.prototype._removeValuesSpawnsSubscriptions = function () {
                var t, e, i;
                for (t = 0, e = this._valuesSpawnArray; t < e.length; t++)
                  (i = e[t]).value.destroy(),
                    i.color.destroy(),
                    i.visible.destroy();
                this._valuesSpawnArray = [];
              }),
              (t.prototype._addValuesSpawnsSubscriptions = function () {
                var t, e;
                for (t = 0; t < this._valuesSpawnArray.length; t++)
                  (e = this._valuesSpawnArray[t]).value.subscribe(
                    this._updateValuesHTMLElHandler.bind(this, t),
                  ),
                    e.color.subscribe(
                      this._updateValueColorHandler.bind(this, t),
                    ),
                    e.visible.subscribe(
                      this._updateValueVisibleHandler.bind(this, t),
                    );
              }),
              (t.prototype._updateActionVisibilities = function (t) {
                null !== this._actionsParentEl &&
                  this._actionsParentEl
                    .querySelectorAll('.' + g.button)
                    [t].classList.toggle(
                      m.blockHidden,
                      !this._actionsSpawnArray[t].visible.value(),
                    );
              }),
              (t.prototype._updateActionTitle = function (t) {
                var e = this._actionsSpawnArray[t].title;
                null !== this._actionsParentEl &&
                  null !== e &&
                  this._actionsParentEl
                    .querySelectorAll('.' + g.button)
                    [t].setAttribute('title', e.value());
              }),
              (t.prototype._updateCustomTextColor = function () {
                var t,
                  e,
                  i,
                  s,
                  o,
                  n = this._customTextColor.value() || null;
                for (t = 0, e = this._titleElements; t < e.length; t++)
                  null !== (i = e[t]) && (i.style.color = n);
                for (
                  s = Object(u.ensureNotNull)(
                    this._valuesParentEl,
                  ).querySelectorAll('.' + g.valueTitle),
                    o = 0;
                  o < s.length;
                  o++
                )
                  s[o].style.color = n;
                Object(u.ensureNotNull)(this._el).classList.toggle(
                  g.withCustomTextColor,
                  Boolean(n),
                );
              }),
              (t.prototype._onShowContextMenuAndStayInHoveredMode = function (
                t,
              ) {
                var e = this;
                this._addOutsideEventForCancelHoveredMode(),
                  this._model
                    .onContextMenuShow(t, function () {
                      e._updateHoveredState(!1);
                    })
                    .then(function (t) {
                      null !== t && e._updateHoveredState(!0);
                    });
              }),
              (t.prototype._cancelHoveredMode = function () {
                this._updateHoveredState(!1),
                  null !== this._outsideEvent &&
                    (this._outsideEvent(), (this._outsideEvent = null));
              }),
              (t.prototype._cancelHoveredModeAndHide = function () {
                this._cancelHoveredMode(), this._hideActions();
              }),
              (t.prototype._addOutsideEventForCancelHoveredMode = function () {
                null !== this._outsideEvent && this._outsideEvent(),
                  (this._outsideEvent = Object(b.a)(
                    new h.CustomEvent('timestamp').timeStamp,
                    this._el,
                    this._cancelHoveredModeAndHide.bind(this),
                    window.document,
                    { mouseDown: !0 },
                  ));
              }),
              (t.prototype._updateHoveredState = function (t) {
                null !== this._el &&
                  ((this._stayInHoveredMode = t),
                  this._el.classList.toggle(g.stayInHoveredMode, t));
              }),
              t
            );
          })()),
        )),
        (E = i('fBig')),
        (V = (function () {
          function t(t) {
            (this._loadingEl = null),
              (this._parentEl = t),
              this._renderLoading();
          }
          return (
            (t.prototype.toggleVisibility = function (t) {
              null !== this._loadingEl &&
                this._loadingEl.classList.toggle(E.shown, t);
            }),
            (t.prototype._renderLoading = function () {
              (this._loadingEl = document.createElement('span')),
                this._loadingEl.classList.add(E.loader),
                (this._loadingEl.innerHTML =
                  '\n\t\t\t<span class="' +
                  E.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  E.loaderItem +
                  '"></span>\n\t\t\t<span class="' +
                  E.loaderItem +
                  '"></span>\n\t\t'),
                this._parentEl.appendChild(this._loadingEl);
            }),
            t
          );
        })()),
        (M = i('JOqt')),
        (T = 'tempDisabled'),
        (H = (function (t) {
          function e(e, i, s) {
            var o = t.call(this, e, i, s) || this;
            return (
              (o._disableTimeout = null),
              (o._loader = null),
              null !== o._valuesParentEl &&
                (o._loader = new V(o._valuesParentEl)),
              (o._globalRowVisibility = o._model.globalVisibility().spawn()),
              o._globalRowVisibility.subscribe(o._updateShowLine.bind(o)),
              (o._error = o._model.error().spawn()),
              o._error.subscribe(o._updateErrorState.bind(o)),
              (o._loading = o._model.loading().spawn()),
              o._loading.subscribe(
                Object(M.debounce)(o._updateLoadingState.bind(o), 500),
              ),
              (o._has5Buttons = o._model.isPineScriptDataSource().spawn()),
              o._has5Buttons.subscribe(o._update5ButtonsStyles.bind(o)),
              o._updateStates(!o._disabled.value()),
              o
            );
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                null !== this._disableTimeout &&
                  clearTimeout(this._disableTimeout),
                void 0 !== this._error && this._error.destroy(),
                void 0 !== this._loading && this._loading.destroy(),
                this._has5Buttons.destroy(),
                this._globalRowVisibility &&
                  this._globalRowVisibility.destroy();
            }),
            (e.prototype._updateShowLine = function () {
              if (null !== this._el && void 0 !== this._globalRowVisibility) {
                var e = !this._globalRowVisibility.value();
                e
                  ? this._el.classList.toggle(m.blockHidden, e)
                  : t.prototype._updateShowLine.call(this);
              }
            }),
            (e.prototype._render = function () {
              var e, i;
              t.prototype._render.call(this),
                (this._el = document.createElement('div')),
                this._el.classList.add(g.item, g.study),
                (this._el.dataset.name = 'legend-source-item'),
                (e = Object(u.ensureNotNull)(this._titleParentEl)),
                this._el.appendChild(e),
                null !== this._actionsParentEl &&
                  this._el.appendChild(this._actionsParentEl),
                (i = Object(u.ensureNotNull)(this._valuesParentEl)),
                this._el.appendChild(i),
                this._parentEl.append(this._el);
            }),
            (e.prototype._renderValues = function () {
              var t, e, i, s, o, n;
              for (
                null === this._valuesParentEl &&
                  ((this._valuesParentEl = document.createElement('div')),
                  this._valuesParentEl.classList.add(g.valuesWrapper),
                  (this._valuesAdditionalWrapperEl = document.createElement(
                    'div',
                  )),
                  this._valuesAdditionalWrapperEl.classList.add(
                    g.valuesAdditionalWrapper,
                  ),
                  this._valuesParentEl.appendChild(
                    this._valuesAdditionalWrapperEl,
                  )),
                  t = Object(u.ensureNotNull)(this._valuesAdditionalWrapperEl),
                  e = 0,
                  i = this._values.value();
                e < i.length;
                e++
              )
                (s = i[e]),
                  (o = document.createElement('div')).classList.add(
                    g.valueItem,
                  ),
                  o.classList.toggle(m.blockHidden, !s.visible.value()),
                  (n = document.createElement('div')).classList.add(
                    g.valueValue,
                  ),
                  (n.style.color = s.color.value() || ''),
                  n.appendChild(document.createTextNode(s.value.value())),
                  o.appendChild(n),
                  this._valuesElements.push({ value: n }),
                  t.appendChild(o);
            }),
            (e.prototype._updateStates = function (e) {
              t.prototype._updateStates.call(this),
                e && this._clearDisableState(),
                this._updateErrorState(),
                this._updateLoadingState();
            }),
            (e.prototype._updateDisabledState = function () {
              var t = this;
              null !== this._el &&
                (null !== this._disableTimeout &&
                  (clearTimeout(this._disableTimeout),
                  (this._disableTimeout = null),
                  this._el.classList.remove(T),
                  this._el.classList.remove(g.hiddenLoading)),
                this._disabled.value()
                  ? this._el.classList.add(g.disabled)
                  : (this._el.classList.add(T),
                    this._el.classList.add(g.hiddenLoading),
                    (this._disableTimeout = setTimeout(function () {
                      null !== t._el &&
                        void 0 !== t._loading &&
                        !t._loading.value() &&
                        t._el.classList.contains(T) &&
                        (t._el.classList.remove(T),
                        t._el.classList.remove(g.hiddenLoading),
                        t._el.classList.toggle(
                          g.disabled,
                          t._disabled.value(),
                        ));
                    }, 1e3))));
            }),
            (e.prototype._updateErrorState = function () {
              void 0 !== this._error &&
                void 0 !== this._error.value() &&
                Object(u.ensureNotNull)(this._el).classList.toggle(
                  g.error,
                  this._error.value(),
                );
            }),
            (e.prototype._updateLoadingState = function () {
              if (
                void 0 !== this._loading &&
                void 0 !== this._loading.value() &&
                null !== this._el
              ) {
                this._el.classList.contains(T) &&
                  (this._loading.value()
                    ? this._el.classList.add(g.hiddenLoading)
                    : this._clearDisableState());
                var t = Boolean(this._loading.value());
                this._el.classList.toggle(g.loading, t),
                  null !== this._loader && this._loader.toggleVisibility(t);
              }
            }),
            (e.prototype._clearDisableState = function () {
              null !== this._el &&
                (this._el.classList.remove(g.hiddenLoading),
                this._el.classList.remove(g.disabled),
                this._el.classList.remove(T));
            }),
            (e.prototype._update5ButtonsStyles = function (t) {
              null !== this._el && this._el.classList.toggle(g.has5Buttons, t);
            }),
            e
          );
        })(S)),
        (x = i('Zo2/')),
        (A = i('6dGu')),
        (L = i('rGGD')),
        (P = i('Y+EN')),
        (B = i('vYP1')),
        (k = window.t('Hide Indicator Legend')),
        (O = window.t('Show Indicator Legend')),
        (D = window.t('Show Object Tree')),
        (z = (function () {
          function t(t, e, i) {
            (this._el = null),
              (this._counterEl = null),
              (this._arrowIconEL = null),
              (this._objectTreeEl = null),
              (this._mode = 0),
              (this._parentEl = t),
              (this._themedColor = e.spawn()),
              this._themedColor.subscribe(this._updateThemedColor.bind(this)),
              (this._sourceCount = i.visibleDataSourceCount.spawn()),
              this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
              (this._isStateOpen = i.isDataSourcesCollapsed.spawn()),
              this._isStateOpen.subscribe(this._updateState.bind(this)),
              (this._showObjectsTree = i.showObjectsTree.spawn()),
              this._showObjectsTree.subscribe(
                this._updateObjectTreeVisibility.bind(this),
              ),
              this._render(),
              this._updateState(),
              this._updateThemedColor(this._themedColor.value()),
              this._updateObjectTreeVisibility(this._showObjectsTree.value()),
              (this._toggleStateHandler = Object(_.b)(i.onCollapseDataSources)),
              (this._showObjectTreeHandler = Object(_.b)(
                i.onShowObjectsTreeDialog,
              )),
              null !== this._el &&
                (this._el.addEventListener(
                  'touchend',
                  this._toggleStateHandler,
                ),
                this._el.addEventListener(
                  'mousedown',
                  this._toggleStateHandler,
                )),
              null !== this._objectTreeEl &&
                (this._objectTreeEl.addEventListener(
                  'touchend',
                  this._showObjectTreeHandler,
                ),
                this._objectTreeEl.addEventListener(
                  'mousedown',
                  this._showObjectTreeHandler,
                ));
          }
          return (
            (t.prototype.destroy = function () {
              this._sourceCount.destroy(),
                this._isStateOpen.destroy(),
                null !== this._objectTreeEl &&
                  (this._objectTreeEl.removeEventListener(
                    'touchend',
                    this._showObjectTreeHandler,
                  ),
                  this._objectTreeEl.removeEventListener(
                    'mousedown',
                    this._showObjectTreeHandler,
                  ),
                  (this._objectTreeEl = null)),
                (this._arrowIconEL = null),
                (this._counterEl = null),
                null !== this._el &&
                  (this._el.removeEventListener(
                    'touchend',
                    this._toggleStateHandler,
                  ),
                  this._el.removeEventListener(
                    'mousedown',
                    this._toggleStateHandler,
                  ),
                  (this._el.innerHTML = ''),
                  (this._el = null));
            }),
            (t.prototype.setMode = function (t) {
              (this._mode = t ? 1 : 0), this._updateTooltip();
            }),
            (t.prototype._render = function () {
              (this._el = document.createElement('div')),
                (this._el.className = g.toggler + ' apply-common-tooltip'),
                (this._arrowIconEL = document.createElement('div')),
                this._arrowIconEL.classList.add(g.iconArrow),
                (this._arrowIconEL.innerHTML = x.trackingModeIsAvailable
                  ? L
                  : A),
                this._el.appendChild(this._arrowIconEL),
                (this._objectTreeEl = document.createElement('div')),
                this._objectTreeEl.classList.add(g.objectTree),
                (this._objectTreeEl.innerHTML = x.trackingModeIsAvailable
                  ? B
                  : P),
                this._el.appendChild(this._objectTreeEl),
                (this._counterEl = document.createElement('div')),
                this._counterEl.classList.add(g.counter),
                this._counterEl.appendChild(
                  document.createTextNode(String(this._sourceCount.value())),
                ),
                this._el.appendChild(this._counterEl),
                this._parentEl.appendChild(this._el);
            }),
            (t.prototype._updateThemedColor = function (t) {
              null !== this._el && (this._el.style.backgroundColor = t);
            }),
            (t.prototype._updateSourceCount = function (t) {
              s(Object(u.ensureNotNull)(this._counterEl), String(t)),
                this._updateCounterVisibility(t);
            }),
            (t.prototype._updateCounterVisibility = function (t) {
              if (null !== this._counterEl) {
                var e = 1 === t;
                this._counterEl.classList.toggle(m.blockHidden, e);
              }
            }),
            (t.prototype._updateState = function () {
              var t = !this._isStateOpen.value();
              this._parentEl.classList.toggle(g.closed, t),
                this._updateTooltip(),
                a((t ? 'Hide' : 'Show') + ' not main sources');
            }),
            (t.prototype._tooltip = function () {
              return 1 === this._mode ? D : this._isStateOpen.value() ? k : O;
            }),
            (t.prototype._updateTooltip = function () {
              null !== this._el &&
                this._el.setAttribute('title', this._tooltip());
            }),
            (t.prototype._updateObjectTreeVisibility = function (t) {
              null !== this._objectTreeEl &&
                this._objectTreeEl.classList.toggle(m.blockHidden, !t);
            }),
            t
          );
        })()),
        (j = i('glKZ')),
        (W = (function () {
          function t(t, e) {
            (this._renderToggler = null),
              (this._mainDataSourceRenderer = null),
              (this._dataSourceRenderers = []),
              (this._wrapText = null),
              (this._parentEl = document.createElement('div')),
              (this._dataSourcesEl = null),
              (this._dataSourcesAdditionalWrapperEl = null),
              (this._collapsedDataSourcesWrapperEl = null),
              (this._collapsedDataSourcesEl = null),
              (this._outsideEventForCollapsedTooltip = null),
              (this._options = t),
              (this._togglerOptions = e),
              (this._isStudiesLegendHidden = t.isStudiesLegendHidden.spawn()),
              this._isStudiesLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this),
              ),
              (this._isAllLegendHidden = t.isAllLegendHidden.spawn()),
              this._isAllLegendHidden.subscribe(
                this._updateLegendVisibility.bind(this),
              ),
              this._updateLegendVisibility(),
              (this._themedColor = t.themedColor.spawn()),
              this._themedColor.subscribe(this._setCustomBg.bind(this)),
              (this._showBackground = t.showBackground.spawn()),
              this._showBackground.subscribe(this._setCustomBg.bind(this)),
              (this._backgroundTransparency = t.backgroundTransparency.spawn()),
              this._backgroundTransparency.subscribe(
                this._setCustomBg.bind(this),
              ),
              (this._collapsedDataSourcesCountSpawn = t.collapsedDataSourcesCount.spawn()),
              this._collapsedDataSourcesCountSpawn.subscribe(
                this._updateCollapsedSourcesCount.bind(this),
              ),
              (this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(
                this,
              )),
              x.trackingModeIsAvailable ||
                ((this._wrapText = t.wrapText.spawn()),
                this._wrapText.subscribe(this._updateWrapText.bind(this)),
                this._updateWrapText(this._wrapText.value())),
              this._parentEl.classList.add(g.legend),
              this._parentEl.classList.toggle(
                g.noActions,
                !this._options.withActions,
              ),
              this._parentEl.classList.toggle(
                g.touchMode,
                x.trackingModeIsAvailable,
              ),
              (this._parentEl.dataset.name = 'legend'),
              this._parentEl.addEventListener('contextmenu', function (t) {
                return t.preventDefault();
              });
          }
          return (
            (t.prototype.destroy = function () {
              var t, e;
              if (
                (this._isStudiesLegendHidden.destroy(),
                this._isAllLegendHidden.destroy(),
                this._themedColor.destroy(),
                this._showBackground.destroy(),
                this._backgroundTransparency.destroy(),
                this._collapsedDataSourcesCountSpawn.destroy(),
                x.trackingModeIsAvailable &&
                  null !== this._collapsedDataSourcesWrapperEl &&
                  this._collapsedDataSourcesWrapperEl.removeEventListener(
                    'touchend',
                    this._showCollapsedDataSourcesTooltipHandler,
                  ),
                this._outsideEventForCollapsedTooltip &&
                  this._outsideEventForCollapsedTooltip(),
                null !== this._wrapText && this._wrapText.destroy(),
                null !== this._dataSourcesAdditionalWrapperEl &&
                  ((this._dataSourcesAdditionalWrapperEl.innerHTML = ''),
                  (this._dataSourcesAdditionalWrapperEl = null)),
                null !== this._dataSourcesEl &&
                  ((this._dataSourcesEl.innerHTML = ''),
                  (this._dataSourcesEl = null)),
                null !== this._renderToggler &&
                  (this._renderToggler.destroy(), (this._renderToggler = null)),
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(),
                  (this._mainDataSourceRenderer = null)),
                0 !== this._dataSourceRenderers.length)
              ) {
                for (t = 0, e = this._dataSourceRenderers; t < e.length; t++)
                  e[t].destroy();
                this._dataSourceRenderers = [];
              }
              (this._parentEl.innerHTML = ''), delete this._parentEl;
            }),
            (t.prototype.addMainDataSource = function (t) {
              var e,
                i = this;
              null === this._mainDataSourceRenderer &&
                ((e = document.createDocumentFragment()),
                (this._mainDataSourceRenderer = new C(t, e, {
                  withActions: this._options.withActions,
                  customTextColor: this._options.customTextColor,
                })),
                this._parentEl.insertBefore(e, this._dataSourcesEl),
                this._updateLegendVisibility()),
                t.onDestroy().subscribe(
                  this,
                  function () {
                    null !== i._mainDataSourceRenderer &&
                      (i._mainDataSourceRenderer.destroy(),
                      (i._mainDataSourceRenderer = null));
                  },
                  !0,
                );
            }),
            (t.prototype.addDataSources = function (t) {
              var e,
                i,
                s,
                o,
                n,
                l = this;
              for (
                null === this._dataSourcesEl &&
                  ((this._dataSourcesEl = document.createElement('div')),
                  this._dataSourcesEl.classList.add(g.sourcesWrapper),
                  this._renderToggle(this._dataSourcesEl),
                  (this._dataSourcesAdditionalWrapperEl = document.createElement(
                    'div',
                  )),
                  this._dataSourcesAdditionalWrapperEl.classList.add(g.sources),
                  this._dataSourcesEl.appendChild(
                    this._dataSourcesAdditionalWrapperEl,
                  ),
                  this._renderCollapsedCounter(
                    this._dataSourcesAdditionalWrapperEl,
                  ),
                  this._parentEl.appendChild(this._dataSourcesEl)),
                  e = Object(u.ensureNotNull)(
                    this._dataSourcesAdditionalWrapperEl,
                  ),
                  i = function (t) {
                    var i = new H(t, e, {
                      withActions: s._options.withActions,
                      customTextColor: s._options.customTextColor,
                    });
                    s._dataSourceRenderers.push(i),
                      s._updateLegendVisibility(),
                      t.onDestroy().subscribe(
                        s,
                        function () {
                          var t = l._dataSourceRenderers.indexOf(i);
                          -1 !== t &&
                            (l._dataSourceRenderers[t].destroy(),
                            l._dataSourceRenderers.splice(t, 1));
                        },
                        !0,
                      );
                  },
                  s = this,
                  o = 0,
                  n = t;
                o < n.length;
                o++
              )
                i(n[o]);
            }),
            (t.prototype.firstTitle = function () {
              return this._parentEl.firstElementChild;
            }),
            (t.prototype.getElement = function () {
              return this._parentEl;
            }),
            (t.prototype.updateMode = function (t) {
              var e = t < 213,
                i = t < 120;
              this._parentEl.classList.toggle(g.minimized, e && !i),
                this._parentEl.classList.toggle(g.micro, i),
                null !== this._renderToggler && this._renderToggler.setMode(i);
            }),
            (t.prototype.getMainSourceHeight = function () {
              return null === this._mainDataSourceRenderer
                ? 0
                : this._mainDataSourceRenderer.getHeight();
            }),
            (t.prototype.getDataSourceHeight = function () {
              return 0 === this._dataSourceRenderers.length
                ? 0
                : this._dataSourceRenderers[0].getHeight();
            }),
            (t.prototype._renderToggle = function (t) {
              this._options.showToggleButton &&
                (this._renderToggler = new z(
                  t,
                  this._options.themedColor,
                  this._togglerOptions,
                ));
            }),
            (t.prototype._renderCollapsedCounter = function (t) {
              (this._collapsedDataSourcesWrapperEl = document.createElement(
                'div',
              )),
                (this._collapsedDataSourcesWrapperEl.className =
                  g.item + ' ' + g.last),
                (this._collapsedDataSourcesEl = document.createElement('span')),
                (this._collapsedDataSourcesEl.className =
                  g.text + ' apply-common-tooltip'),
                this._collapsedDataSourcesWrapperEl.append(
                  this._collapsedDataSourcesEl,
                ),
                t.append(this._collapsedDataSourcesWrapperEl),
                x.trackingModeIsAvailable &&
                  this._collapsedDataSourcesWrapperEl.addEventListener(
                    'touchend',
                    this._showCollapsedDataSourcesTooltipHandler,
                  ),
                this._updateCollapsedSourcesCount(
                  this._collapsedDataSourcesCountSpawn.value(),
                );
            }),
            (t.prototype._showCollapsedDataSourcesTooltip = function () {
              Object(j.showOnElement)(this._collapsedDataSourcesEl, {
                text: this._options.collapsedDataSourcesTitle.value(),
              }),
                this._addOutsideEventForHideTooltip();
            }),
            (t.prototype._addOutsideEventForHideTooltip = function () {
              var t = this;
              null !== this._outsideEventForCollapsedTooltip &&
                this._outsideEventForCollapsedTooltip(),
                (this._outsideEventForCollapsedTooltip = Object(b.a)(
                  new CustomEvent('timestamp').timeStamp,
                  this._collapsedDataSourcesWrapperEl,
                  function () {
                    null !== t._outsideEventForCollapsedTooltip &&
                      t._outsideEventForCollapsedTooltip(),
                      Object(j.hide)();
                  },
                  window.document,
                  { touchEnd: !0 },
                ));
            }),
            (t.prototype._updateCollapsedSourcesCount = function (t) {
              if (
                null !== this._collapsedDataSourcesWrapperEl &&
                null !== this._collapsedDataSourcesEl
              ) {
                var e = 0 === t;
                this._collapsedDataSourcesWrapperEl.classList.toggle(
                  m.blockHidden,
                  e,
                ),
                  e ||
                    (s(this._collapsedDataSourcesEl, '+' + t),
                    this._collapsedDataSourcesEl.setAttribute(
                      'title',
                      this._options.collapsedDataSourcesTitle.value(),
                    ));
              }
            }),
            (t.prototype._updateLegendVisibility = function () {
              this._parentEl.classList.toggle(
                m.blockHidden,
                this._isAllLegendHidden.value(),
              ),
                null !== this._dataSourcesEl &&
                  this._dataSourcesEl.classList.toggle(
                    m.blockHidden,
                    this._isStudiesLegendHidden.value(),
                  );
            }),
            (t.prototype._setCustomBg = function () {
              var t,
                e,
                i,
                s,
                o = this._showBackground.value(),
                n = this._themedColor.value(),
                l = this._backgroundTransparency.value(),
                a = '';
              o &&
                ((e = (t = Object(d.parseRgb)(n))[0]),
                (i = t[1]),
                (s = t[2]),
                (a = Object(d.rgbaToString)([
                  e,
                  i,
                  s,
                  Object(d.normalizeAlphaComponent)(1 - l / 100),
                ]))),
                (this._parentEl.style.color = a);
            }),
            (t.prototype._updateWrapText = function (t) {
              this._parentEl.classList.toggle(g.noWrap, !t);
            }),
            t
          );
        })()),
        (N = i('hY0g')),
        (R = i.n(N)),
        (I = i('Tmoa')),
        (F = i('aIyQ')),
        (G = i.n(F)),
        (K = i('Ialn')),
        (Z = i('QloM')),
        (q = i('1AAW')),
        (Y = i('CLNU')),
        (U = window.t('Show')),
        (J = window.t('Hide')),
        (X = (function () {
          function t(t, e, i, s) {
            var o = this;
            (this._values = new R.a([])),
              (this._actions = []),
              (this._onDestroy = new G.a()),
              (this._moreActionCM = null),
              (this._model = t),
              (this._source = e),
              (this._options = i),
              (this._callbacks = s),
              (this._disabled = new R.a(this._getDisabledState())),
              (this._selected = new R.a(!1)),
              (this._isTitleHidden = new R.a(this._getTitleHiddenValue())),
              (this._isValuesHidden = new R.a(this._getValuesHiddenValue())),
              (this._isRowHidden = new R.a(this._getRowHiddenValue())),
              Object(q.a)(
                function () {
                  return {};
                },
                this._isTitleHidden,
                this._isValuesHidden,
                this._disabled,
              ).subscribe(this._updateRowVisibilities.bind(this)),
              this._values.subscribe(function () {
                o._isValuesHidden.setValue(o._getValuesHiddenValue());
              });
          }
          return (
            (t.prototype.destroy = function () {}),
            (t.prototype.onDestroy = function () {
              return this._onDestroy;
            }),
            (t.prototype.titles = function () {
              return this._titles.map(function (t) {
                return t.readonly();
              });
            }),
            (t.prototype.values = function () {
              return this._values.readonly();
            }),
            (t.prototype.actions = function () {
              return this._actions;
            }),
            (t.prototype.disabled = function () {
              return this._disabled.readonly();
            }),
            (t.prototype.selected = function () {
              return this._selected.readonly();
            }),
            (t.prototype.isTitleHidden = function () {
              return this._isTitleHidden.readonly();
            }),
            (t.prototype.isValuesHidden = function () {
              return this._isValuesHidden.readonly();
            }),
            (t.prototype.isRowHidden = function () {
              return this._isRowHidden.readonly();
            }),
            (t.prototype.update = function () {
              this._updateTitle(), this._updateValues(), this._updateStates();
            }),
            (t.prototype.updateSource = function (t) {
              this._source !== t && ((this._source = t), this.update());
            }),
            (t.prototype.onToggleDisabled = function () {
              var t = this._source.properties().childs().visible,
                e = !t.value();
              this._model.setProperty(
                t,
                e,
                (e ? 'Show' : 'Hide') + ' ' + this._source.title(),
              ),
                a((e ? 'Show' : 'Hide') + ' source');
            }),
            (t.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                (this.setSourceSelected(),
                this._callbacks.showChartPropertiesForSource(
                  this._source,
                  Z.TabNames.style,
                ),
                a('Settings for source'));
            }),
            (t.prototype.onShowMoreActions = function (t) {
              return this._options.readOnlyMode
                ? Promise.resolve(null)
                : (this._callbacks.updateActions(),
                  this._callbacks.showContextMenuForSources(
                    [this._source],
                    this._calcNewPosition(t),
                  ));
            }),
            (t.prototype.onContextMenuShow = function (t, e) {
              return this._options.readOnlyMode
                ? Promise.resolve(null)
                : (a('Show legend context menu'),
                  this._callbacks.showLegendWidgetContextMenu(
                    this._calcNewPosition(t),
                    e,
                  ));
            }),
            (t.prototype.setSourceSelected = function () {
              var t = this;
              this._model.selectionMacro(function (e) {
                e.clearSelection(), e.addSourceToSelection(t._source);
              });
            }),
            (t.prototype._moreActionHandler = function (t) {
              var e = this;
              t.preventDefault(),
                null !== this._moreActionCM && this._moreActionCM.isShown()
                  ? (this._moreActionCM = null)
                  : (this.setSourceSelected(),
                    this.onShowMoreActions(t).then(function (t) {
                      e._moreActionCM = t;
                    }));
            }),
            (t.prototype._updateTitle = function () {
              var t,
                e,
                i,
                s,
                o = this._source.statusView();
              if (null !== o)
                for (t = o.getSplitTitle(), e = 0; e < this._titles.length; e++)
                  (i = t[e]),
                    (s = Object(Y.clean)(
                      Array.isArray(i) ? i.join(' ') : i || '',
                      !0,
                    )),
                    this._titles[e].setValue(s);
            }),
            (t.prototype._updateStates = function () {
              this._disabled.setValue(this._getDisabledState()),
                this._selected.setValue(
                  this._model.selection().isSelected(this._source),
                );
            }),
            (t.prototype._hasValues = function () {
              return this._values.value().length > 0;
            }),
            (t.prototype._getEyeTitle = function () {
              return this._disabled.value() ? U : J;
            }),
            (t.prototype._getDisabledState = function () {
              return !this._source.properties().visible.value();
            }),
            (t.prototype._updateRowVisibilities = function () {
              this._isRowHidden.setValue(this._getRowHiddenValue());
            }),
            (t.prototype._getRowHiddenValue = function () {
              return (
                (this._options.readOnlyMode && this._disabled.value()) ||
                (this._isTitleHidden.value() &&
                  (this._isValuesHidden.value() || this._disabled.value()))
              );
            }),
            (t.prototype._calcNewPosition = function (t) {
              var e,
                i,
                s = {};
              return (
                (function (t) {
                  return t.hasOwnProperty('touches');
                })(t) && t.touches.length > 0
                  ? (s = {
                      clientX: t.touches[0].clientX,
                      clientY: t.touches[0].clientY,
                    })
                  : null !== t.target
                  ? ((e = t.target.getBoundingClientRect()),
                    (s = {
                      clientX: Object(K.isRtl)() ? e.right : e.left,
                      clientY: e.top + e.height + 3,
                    }))
                  : (s = { clientX: (i = t).clientX, clientY: i.clientY }),
                s
              );
            }),
            t
          );
        })()),
        (Q = i('z4c1')),
        ($ = i('vWJB')),
        (tt = i('Kxc7')),
        (et = !0),
        (it = window.t('More')),
        (st = window.t('Flag Symbol')),
        (ot = window.t('Unflag Symbol')),
        (nt = tt.enabled('show_hide_button_in_legend')),
        tt.enabled('marked_symbols'),
        (lt = (function (t) {
          function e(e, i, s, o) {
            var n,
              l,
              a = t.call(this, e, i, s, o) || this;
            for (
              a._titles = [new R.a(''), new R.a(''), new R.a(''), new R.a('')],
                a._symbolMarker = null,
                a._flagged = new R.a(null),
                a._symbolAction = null,
                a._symbol = null,
                a._createActions(),
                a._updateSymbolMarker(),
                a._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesTitle.subscribe(
                    a,
                    function () {
                      a._isTitleHidden.setValue(a._getTitleHiddenValue());
                    },
                  ),
                n = 0,
                l = [
                  a._model.model().properties().paneProperties.legendProperties
                    .showSeriesOHLC,
                  a._model.model().properties().paneProperties.legendProperties
                    .showBarChange,
                ];
              n < l.length;
              n++
            )
              l[n].subscribe(a, function () {
                a._isValuesHidden.setValue(a._getValuesHiddenValue());
              });
            return a.update(), a;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesTitle.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showBarChange.unsubscribeAll(
                    this,
                  ),
                this._onDestroy.fire();
            }),
            (e.prototype.flagged = function () {
              return this._flagged.readonly();
            }),
            (e.prototype.onShowSettings = function () {
              this._source.userEditEnabled() &&
                this._callbacks.showGeneralChartProperties(Z.TabNames.style);
            }),
            (e.prototype._updateValues = function () {
              var t,
                e,
                i,
                s,
                n = this._source.legendView(),
                l = this._values.value();
              if (0 === l.length)
                (t = n.items().map(function (t) {
                  return {
                    value: new R.a(t.value()),
                    color: new R.a(o(t.color())),
                    visible: new R.a(t.visible()),
                    title: new R.a(t.title()),
                  };
                })),
                  this._values.setValue(t);
              else
                for (e = n.items(), i = 0; i < e.length; i++)
                  (s = e[i]),
                    l[i].value.setValue(s.value()),
                    l[i].color.setValue(o(s.color())),
                    l[i].visible.setValue(s.visible()),
                    l[i].title.setValue(s.title());
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this), this._updateSymbolMarker();
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showSeriesTitle.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                (!this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showSeriesOHLC.value() &&
                  !this._model
                    .model()
                    .properties()
                    .paneProperties.legendProperties.showBarChange.value())
              );
            }),
            (e.prototype._createActions = function () {
              var t,
                e = this;
              et &&
                this._options.symbolMarkerEnabled &&
                ((this._symbolAction = {
                  icon: document.createElement('span'),
                  action: Object(_.b)(this._symbolActionHandler.bind(this)),
                  visible: new R.a(!0),
                  className: g.flag,
                  title: new R.a(this._getMarkerTitle()),
                  dataset: { name: 'legend-flag-action' },
                }),
                this._actions.push(this._symbolAction)),
                nt &&
                  ((t = {
                    icon: Q,
                    action: Object(_.b)(this.onToggleDisabled.bind(this)),
                    visible: new R.a(!0),
                    className: g.eye,
                    title: new R.a(this._getEyeTitle()),
                    dataset: { name: 'legend-show-hide-action' },
                  }),
                  this._actions.push(t),
                  this._disabled.subscribe(function () {
                    t.title.setValue(e._getEyeTitle());
                  })),
                this._actions.push({
                  icon: $,
                  action: this._moreActionHandler.bind(this),
                  visible: new R.a(!0),
                  title: new R.a(it),
                  dataset: { name: 'legend-more-action' },
                });
            }),
            (e.prototype._getMarkerTitle = function () {
              return null !== this._symbolMarker
                ? this._symbolMarker.isMarked()
                  ? ot
                  : st
                : '';
            }),
            (e.prototype._symbolActionHandler = function () {
              null !== this._symbolMarker &&
                (this._updateSymbolMarker(), a('Change flag state'));
            }),
            (e.prototype._updateSymbolMarker = function () {}),
            e
          );
        })(X)),
        (at = i('3ClC')),
        (rt = i('oNDq')),
        (dt = i('z61+')),
        (ut = i('uOxu')),
        (ht = i('RgOa')),
        (ct = i('2CEX')),
        (pt = i('D8x7')),
        Object(ut.getLogger)('Chart.LegendWidget'),
        (_t = window.t('Settings')),
        (bt = window.t('Show Source Code')),
        (gt = window.t('Delete')),
        (mt = window.t('More')),
        window.t('Error'),
        window.t('Could not get Pine source code.'),
        tt.enabled('study_buttons_in_legend'),
        (vt = tt.enabled('show_hide_button_in_legend')),
        (wt = tt.enabled('property_pages')),
        (yt = tt.enabled('format_button_in_legend')),
        (ft = tt.enabled('delete_button_in_legend')),
        (St = (function (t) {
          function e(e, i, s, o) {
            var n = t.call(this, e, i, s, o) || this;
            return (
              (n._titles = [new R.a(''), new R.a('')]),
              (n._error = new R.a(!1)),
              (n._loading = new R.a(!1)),
              (n._isPineScriptDataSource = new R.a(!1)),
              (n._pineAction = null),
              (n._globalVisibility = new R.a(!0)),
              n._createActions(),
              n._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.subscribe(
                  n,
                  function () {
                    n._isTitleHidden.setValue(n._getTitleHiddenValue());
                  },
                ),
              n._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyValues.subscribe(
                  n,
                  function () {
                    n._isValuesHidden.setValue(n._getValuesHiddenValue());
                  },
                ),
              n.update(),
              n
            );
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyTitles.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.unsubscribeAll(
                    this,
                  ),
                this._onDestroy.fire();
            }),
            (e.prototype.error = function () {
              return this._error.readonly();
            }),
            (e.prototype.loading = function () {
              return this._loading.readonly();
            }),
            (e.prototype.isPineScriptDataSource = function () {
              return this._isPineScriptDataSource.readonly();
            }),
            (e.prototype.updateSource = function (e) {
              this._source !== e &&
                (this._values.setValue([]),
                t.prototype.updateSource.call(this, e),
                this._updateAbleShowSourceCode());
            }),
            (e.prototype.onRemoveSource = function () {
              var t;
              this._source.isUserDeletable() &&
                (this._source.hasChildren()
                  ? ((t = this._model.removeSource.bind(
                      this._model,
                      this._source,
                      !1,
                    )),
                    Object(rt.createConfirmDialog)({
                      type: 'modal',
                      title: window.t('Confirm Remove Study Tree'),
                      content: window.t(
                        "Do you really want to delete study and all of it's children?",
                      ),
                    }).then(function (e) {
                      e.on('action:yes', function (e) {
                        t(), e.close();
                      }),
                        e.open();
                    }))
                  : this._model.removeSource(this._source, !1),
                a('Remove sources'));
            }),
            (e.prototype.onShowSourceCode = function () {}),
            (e.prototype.setGlobalVisibility = function (t) {
              this._globalVisibility.setValue(t);
            }),
            (e.prototype.globalVisibility = function () {
              return this._globalVisibility.readonly();
            }),
            (e.prototype.getFullTitle = function () {
              return this._titles
                .map(function (t) {
                  return t.value();
                })
                .join(' ');
            }),
            (e.prototype._updateValues = function () {
              var t,
                e,
                i,
                s,
                n,
                l,
                a = this._source.legendView();
              if (null !== a && 0 !== a.items().length)
                if (0 === (t = this._values.value()).length)
                  (e = a.items().map(function (t) {
                    return {
                      value: new R.a(t.value()),
                      color: new R.a(o(t.color())),
                      visible: new R.a(t.visible()),
                    };
                  })),
                    this._values.setValue(e);
                else
                  for (i = a.items(), s = 0; s < i.length; s++)
                    (n = t[s]),
                      (l = i[s]),
                      n.value.setValue(l.value()),
                      n.color.setValue(o(l.color())),
                      n.visible.setValue(l.visible());
            }),
            (e.prototype._updateStates = function () {
              t.prototype._updateStates.call(this),
                void 0 !== this._error &&
                  this._error.setValue(Boolean(this._source.isFailed())),
                void 0 !== this._loading &&
                  this._loading.setValue(Boolean(this._source.isLoading()));
            }),
            (e.prototype._getTitleHiddenValue = function () {
              return !this._model
                .model()
                .properties()
                .paneProperties.legendProperties.showStudyTitles.value();
            }),
            (e.prototype._getValuesHiddenValue = function () {
              return (
                !this._hasValues() ||
                !this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showStudyValues.value()
              );
            }),
            (e.prototype._updateAbleShowSourceCode = function () {}),
            (e.prototype._updateVisibilityPineAction = function (t) {
              null !== this._pineAction &&
                (this._pineAction.visible.setValue(t),
                this._isPineScriptDataSource.setValue(t));
            }),
            (e.prototype._createActions = function () {
              var t,
                e = this;
              this._options.readOnlyMode ||
                ((this._pineAction = {
                  icon: ct,
                  action: Object(_.b)(this.onShowSourceCode.bind(this)),
                  visible: new R.a(!1),
                  title: new R.a(bt),
                  dataset: { name: 'legend-pine-action' },
                }),
                vt &&
                  ((t = {
                    icon: Q,
                    action: Object(_.b)(this.onToggleDisabled.bind(this)),
                    visible: new R.a(!0),
                    className: g.eye,
                    title: new R.a(this._getEyeTitle()),
                    dataset: { name: 'legend-show-hide-action' },
                  }),
                  this._actions.push(t),
                  this._disabled.subscribe(function () {
                    t.title.setValue(e._getEyeTitle());
                  })),
                wt &&
                  yt &&
                  (!Object(at.isStudy)(this._source) ||
                    new dt.MetaInfoHelper(
                      this._source.metaInfo(),
                    ).hasUserEditableOptions()) &&
                  this._actions.push({
                    icon: ht,
                    action: Object(_.b)(this.onShowSettings.bind(this)),
                    visible: new R.a(!0),
                    title: new R.a(_t),
                    dataset: { name: 'legend-settings-action' },
                  }),
                ft &&
                  this._actions.push({
                    icon: pt,
                    action: Object(_.b)(this.onRemoveSource.bind(this)),
                    visible: new R.a(!0),
                    title: new R.a(gt),
                    dataset: { name: 'legend-delete-action' },
                  }),
                this._actions.push({
                  icon: $,
                  action: this._moreActionHandler.bind(this),
                  visible: new R.a(!0),
                  title: new R.a(mt),
                  dataset: { name: 'legend-more-action' },
                }));
            }),
            e
          );
        })(X)),
        (Ct = i('EsvI')),
        (Et = i('ogJP')),
        (Vt = i('7KDR')),
        (Mt = i('5VQP')),
        (Tt = i('MXV9')),
        (Ht = window.t('Show Symbol')),
        (xt = window.t('Show OHLC Values')),
        (At = window.t('Show Bar Change Values')),
        (Lt = window.t('Show Indicator Titles')),
        (Pt = window.t('Show Indicator Arguments')),
        (Bt = window.t('Show Indicator Values')),
        (kt = window.t('Wrap text')),
        (Ot = v.CheckMobile.any()),
        (Dt = i('PoSe')),
        (zt = i.n(Dt)),
        i('Vdly'),
        (jt = i('PC8g')),
        i.d(e, 'trackLegendEvent', function () {
          return a;
        }),
        i.d(e, 'LegendWidget', function () {
          return Ft;
        }),
        (Wt = {
          readOnlyMode: !1,
          contextMenu: { settings: !0 },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
        }),
        tt.enabled('hide_legend_by_default'),
        (Nt = tt.enabled('fundamental_widget')),
        (Rt = 0.9),
        (It = 2),
        (Ft = (function () {
          function t(t, e, i, s, o, n) {
            var l,
              a,
              d,
              u,
              h,
              c,
              p,
              _ = this;
            (this._mainSeriesViewModel = null),
              (this._dataSourceViewModels = []),
              (this._visibleDataSourceCount = new R.a(0)),
              (this._themedColor = new R.a('')),
              (this._mainSeriesRowHidden = null),
              (this._dataSourceRowsHidden = []),
              (this._allLegendHidden = new R.a(!1)),
              (this._studiesLegendHidden = new R.a(!1)),
              (this._onLegendVisibilityToggled = null),
              (this._availableHeight = 0),
              (this._collapsedDataSourcesCount = new R.a(0)),
              (this._collapsedDataSourcesTitle = new R.a('')),
              (this._model = t),
              (this._paneWidget = e),
              (this._options = Object(Et.merge)(Object(Et.clone)(Wt), o)),
              (this._callbacks = Object(r.__assign)(Object(r.__assign)({}, n), {
                showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(
                  this,
                ),
              })),
              (this._mainSeriesViewModelsOptions = {
                readOnlyMode: this._options.readOnlyMode,
                symbolMarkerEnabled: this._options.symbolMarkerEnabled,
              }),
              (this._dataSourceViewModelsOptions = Object(r.__assign)(
                Object(r.__assign)({}, this._mainSeriesViewModelsOptions),
                { canShowSourceCode: this._options.canShowSourceCode },
              )),
              (this._backgroundThemeName = i),
              (l = this._model.model().properties().paneProperties
                .legendProperties.showLegend),
              (this._isDataSourcesCollapsed = new R.a(l.value())),
              l.subscribe(this, function () {
                _._isDataSourcesCollapsed.setValue(l.value());
              }),
              (a = new R.a(this._getCustomTextColorValue())),
              this._model
                .model()
                .properties()
                .scalesProperties.textColor.subscribe(this, function () {
                  a.setValue(_._getCustomTextColorValue());
                }),
              (d = this._model.model().properties().paneProperties
                .legendProperties.showBackground),
              (u = new R.a(d.value())),
              d.subscribe(this, function () {
                u.setValue(d.value());
              }),
              (h = this._model.model().properties().paneProperties
                .legendProperties.backgroundTransparency),
              (c = new R.a(h.value())),
              h.subscribe(this, function () {
                c.setValue(h.value());
              }),
              (p = this._model.model().properties().paneProperties
                .legendProperties.wrapText),
              (this._wrapText = new R.a(p.value())),
              p.subscribe(this, function () {
                _._wrapText.setValue(p.value()),
                  _._updateCollapsedSourcesMode();
              }),
              (this._hideNotMainSources = s.spawn()),
              this._hideNotMainSources.subscribe(
                this._updateVisibilityNotMainSources.bind(this),
              ),
              (this._isPaneMain = new R.a(this._getIsPaneMainValue())),
              (this._updateCollapsedSourcesModeThrottle = zt()(
                this._updateCollapsedSourcesMode.bind(this),
                100,
              )),
              (this._renderer = new W(
                {
                  withActions: !this._options.readOnlyMode,
                  showToggleButton: this._options.showToggleButton,
                  isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                  isAllLegendHidden: this._allLegendHidden.readonly(),
                  customTextColor: a.readonly(),
                  themedColor: this._themedColor.readonly(),
                  showBackground: u.readonly(),
                  backgroundTransparency: c.readonly(),
                  wrapText: this._wrapText.readonly(),
                  collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
                  collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
                },
                {
                  visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                  isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                  showObjectsTree: this._isPaneMain.readonly(),
                  onCollapseDataSources: this.onCollapseDataSources.bind(this),
                  onShowObjectsTreeDialog: this._callbacks
                    .showObjectsTreeDialog,
                },
              ));
          }
          return (
            (t.prototype.destroy = function () {
              var t, e;
              for (
                this._hideNotMainSources.destroy(),
                  null !== this._mainSeriesViewModel &&
                    this._mainSeriesViewModel.destroy(),
                  t = 0,
                  e = this._dataSourceViewModels;
                t < e.length;
                t++
              )
                e[t].destroy();
              this._clearVisibilitiesSubscriptions(),
                this._renderer.destroy(),
                delete this._renderer,
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showLegend.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .scalesProperties.textColor.unsubscribeAll(this),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.showBackground.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.backgroundTransparency.unsubscribeAll(
                    this,
                  ),
                this._model
                  .model()
                  .properties()
                  .paneProperties.legendProperties.wrapText.unsubscribeAll(
                    this,
                  );
            }),
            (t.prototype.onShowLegendWidgetContextMenu = function (t, e) {
              return l(
                this._model,
                this._options.contextMenu,
                this._callbacks.showGeneralChartProperties,
                t,
                e,
              );
            }),
            (t.prototype.onCollapseDataSources = function () {
              var t = this._model.model().properties().paneProperties
                .legendProperties.showLegend;
              t.setValue(!t.value());
            }),
            (t.prototype.updateLayout = function () {
              var t,
                e,
                i,
                s,
                o = this._paneWidget
                  .state()
                  .orderedSources()
                  .filter(function (t) {
                    return null !== t.statusView();
                  }),
                n = this._model.mainSeries(),
                l = o.indexOf(n);
              if (
                (l > -1
                  ? (o.splice(l, 1),
                    Nt ||
                      null !== this._mainSeriesViewModel ||
                      ((this._mainSeriesViewModel = new lt(
                        this._model,
                        n,
                        this._mainSeriesViewModelsOptions,
                        this._callbacks,
                      )),
                      this._renderer.addMainDataSource(
                        this._mainSeriesViewModel,
                      )))
                  : null !== this._mainSeriesViewModel &&
                    (this._mainSeriesViewModel.destroy(),
                    (this._mainSeriesViewModel = null)),
                (t = []),
                0 === (e = this._dataSourceViewModels.length))
              )
                for (i = o.length - 1; i >= 0; i--)
                  t.push(
                    new St(
                      this._model,
                      o[i],
                      this._dataSourceViewModelsOptions,
                      this._callbacks,
                    ),
                  );
              else {
                for (s = 0, i = o.length - 1; i >= 0; i--)
                  this._dataSourceViewModels[s]
                    ? this._dataSourceViewModels[s].updateSource(o[i])
                    : t.push(
                        new St(
                          this._model,
                          o[i],
                          this._dataSourceViewModelsOptions,
                          this._callbacks,
                        ),
                      ),
                    s++;
                for (i = s; i < this._dataSourceViewModels.length; i++)
                  this._dataSourceViewModels[i].destroy();
                this._dataSourceViewModels.splice(
                  s,
                  this._dataSourceViewModels.length - s,
                );
              }
              0 !== t.length &&
                (this._renderer.addDataSources(t),
                (this._dataSourceViewModels = this._dataSourceViewModels.concat(
                  t,
                ))),
                e !== this._dataSourceViewModels.length &&
                  this._updateCollapsedSourcesMode(),
                this._recreateVisibilitiesSubscriptions(),
                this._isPaneMain.setValue(this._getIsPaneMainValue()),
                this.update();
            }),
            (t.prototype.update = function () {
              var t, e;
              for (
                null !== this._mainSeriesViewModel &&
                  this._mainSeriesViewModel.update(),
                  t = 0,
                  e = this._dataSourceViewModels;
                t < e.length;
                t++
              )
                e[t].update();
            }),
            (t.prototype.updateThemedColors = function (t) {
              null === t &&
                (t = Object(Ct.getStdThemedValue)(
                  'chartProperties.paneProperties.background',
                  this._backgroundThemeName.value(),
                )),
                this._themedColor.setValue(t || '');
            }),
            (t.prototype.dataSourceAtPoint = function (t, e) {
              return null;
            }),
            (t.prototype.firstTitle = function () {
              return this._renderer.firstTitle();
            }),
            (t.prototype.getElement = function () {
              return this._renderer.getElement();
            }),
            (t.prototype.updateWidgetModeBySize = function (t) {
              this._updateWidgetModeByWidth(t.w),
                this._updateWidgetModeByHeight(t.h);
            }),
            (t.prototype._updateWidgetModeByWidth = function (t) {
              this._renderer.updateMode(t);
            }),
            (t.prototype._updateWidgetModeByHeight = function (t) {
              (this._availableHeight = Rt * t),
                this._updateCollapsedSourcesModeThrottle();
            }),
            (t.prototype._updateCollapsedSourcesMode = function () {
              var t,
                e,
                i,
                s,
                o,
                n,
                l,
                a,
                r,
                d = this._dataSourceViewModels.length;
              if (
                !this._wrapText.value() &&
                this._availableHeight > 0 &&
                d > It &&
                ((t = this._renderer.getMainSourceHeight()),
                (e = this._renderer.getDataSourceHeight()),
                null !== t &&
                  null !== e &&
                  ((i = Math.floor((this._availableHeight - t) / e)),
                  d > (s = Math.max(i, It) - 1) + 1))
              ) {
                for (o = '', n = 0; n < d; n++)
                  (l = n < s),
                    this._dataSourceViewModels[n].setGlobalVisibility(l),
                    l ||
                      (o +=
                        (0 === o.length ? '' : ', ') +
                        this._dataSourceViewModels[n].getFullTitle());
                return (
                  this._collapsedDataSourcesTitle.setValue(o),
                  void this._collapsedDataSourcesCount.setValue(d - s)
                );
              }
              for (a = 0, r = this._dataSourceViewModels; a < r.length; a++)
                r[a].setGlobalVisibility(!0);
              this._collapsedDataSourcesCount.setValue(0),
                this._collapsedDataSourcesTitle.setValue('');
            }),
            (t.prototype._getCustomTextColorValue = function () {
              var t = this._model.model(),
                e = t.properties().scalesProperties.textColor.value();
              return t.isPropertyDefault(
                'chartProperties.scalesProperties.textColor',
                e,
                Object(Ct.getCurrentTheme)().name,
              )
                ? null
                : e;
            }),
            (t.prototype._clearVisibilitiesSubscriptions = function () {
              var t, e;
              for (
                null !== this._mainSeriesRowHidden &&
                  (this._mainSeriesRowHidden.destroy(),
                  (this._mainSeriesRowHidden = null)),
                  t = 0,
                  e = this._dataSourceRowsHidden;
                t < e.length;
                t++
              )
                e[t].destroy();
              this._dataSourceRowsHidden = [];
            }),
            (t.prototype._recreateVisibilitiesSubscriptions = function () {
              var t, e, i, s, o, n;
              for (
                this._clearVisibilitiesSubscriptions(),
                  null !== this._mainSeriesViewModel &&
                    ((this._mainSeriesRowHidden = this._mainSeriesViewModel
                      .isRowHidden()
                      .spawn()),
                    this._mainSeriesRowHidden.subscribe(
                      this._updateLegendVisibilities.bind(this),
                    )),
                  t = 0,
                  e = this._dataSourceViewModels;
                t < e.length;
                t++
              )
                (i = e[t]),
                  this._dataSourceRowsHidden.push(i.isRowHidden().spawn());
              for (s = 0, o = this._dataSourceRowsHidden; s < o.length; s++)
                (n = o[s]).subscribe(
                  this._updateVisibleDataSourceCount.bind(this),
                ),
                  n.subscribe(this._updateLegendVisibilities.bind(this));
              this._updateVisibleDataSourceCount(),
                this._updateLegendVisibilities();
            }),
            (t.prototype._updateLegendVisibilities = function () {
              var t,
                e = this._dataSourceRowsHidden.every(function (t) {
                  return t.value();
                }),
                i = this._hideNotMainSources.value(),
                s = i || e;
              this._studiesLegendHidden.setValue(s),
                (t =
                  null === this._mainSeriesRowHidden ||
                  this._mainSeriesRowHidden.value()),
                this._allLegendHidden.setValue(e && t);
            }),
            (t.prototype._updateVisibleDataSourceCount = function () {
              var t = this._dataSourceRowsHidden.filter(function (t) {
                return !t.value();
              }).length;
              this._visibleDataSourceCount.setValue(t);
            }),
            (t.prototype._setLegendVisibilityToggled = function () {
              0;
            }),
            (t.prototype._getIsPaneMainValue = function () {
              return this._paneWidget.containsMainSeries();
            }),
            (t.prototype._updateVisibilityNotMainSources = function () {
              this._updateLegendVisibilities(),
                this._hideNotMainSources.value() ||
                  this._updateCollapsedSourcesMode();
            }),
            t
          );
        })());
    },
    vWJB: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>';
    },
    vYP1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>';
    },
    vg09: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>';
    },
    z4c1: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>';
    },
  },
]);