(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
    '7HHr': function (e, t, n) {
      e.exports = {
        caret: 'caret-3_GTxtct-',
        caretRotate: 'caretRotate-98O6Gi4f-',
        caretSmall: 'caretSmall-1vg6w8eZ-',
        caretColorTransition: 'caretColorTransition-1y-c2tgp-',
      };
    },
    Ald9: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939" width="95.939" height="95.939"><path d="M62.82 47.97l32.53-32.534a2 2 0 0 0 0-2.828L83.332.586a2 2 0 0 0-2.827 0L47.97 33.12 15.435.587c-.75-.75-2.078-.75-2.828 0L.587 12.607a2 2 0 0 0 0 2.83L33.12 47.97.588 80.504a2 2 0 0 0 0 2.828l12.02 12.02a1.997 1.997 0 0 0 2.83 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.827 0l12.02-12.02c.78-.783.78-2.05 0-2.83L62.82 47.97z"/></svg>';
    },
    'D/i5': function (e, t, n) {
      e.exports = {
        inputWrapper: 'inputWrapper-6bNZbTW4-',
        textInput: 'textInput-3WRWEmm7-',
        error: 'error-v0663AtN-',
        success: 'success-7iP8kTY5-',
        textInputLeftDirection: 'textInputLeftDirection-mlAXPh8V-',
        xsmall: 'xsmall-3Ah_Or2--',
        small: 'small-2bmxiJCE-',
        large: 'large-1JDowW2I-',
        iconed: 'iconed-3ZQvxTot-',
        inputIcon: 'inputIcon-W_Bse-a1-',
        clearable: 'clearable-2tabt_rj-',
        clearIcon: 'clearIcon-389FR5J4-',
      };
    },
    Dnx6: function (e, t, n) {
      'use strict';
      var o, r, a, i;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.CheckboxField = void 0),
        (o = (function () {
          function e(e, t) {
            var n, o;
            for (n = 0; n < t.length; n++)
              ((o = t[n]).enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })()),
        (r = n('QwKQ')),
        (a = (i = r) && i.__esModule ? i : { default: i }),
        (t.CheckboxField = (function () {
          function e(t) {
            var n = t.label,
              o = t.name,
              r = t.error,
              i = void 0 === r ? '' : r,
              s = t.hint;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this._name = o),
              (this._error = i),
              (this._checkboxView = new a.default({ labelRight: n, name: o })),
              this._checkboxView.$el.addClass('tv-rename-chart-dialog__field'),
              s &&
                this._checkboxView.$el.append(
                  '<span class="tv-rename-chart-dialog__hint apply-common-tooltip" title=\'' +
                    s +
                    "'></span>",
                );
          }
          return (
            o(e, [
              {
                key: 'appendTo',
                value: function (e) {
                  e.append(this._checkboxView.$el);
                },
              },
              { key: 'focus', value: function () {} },
              { key: 'select', value: function () {} },
              {
                key: 'value',
                set: function (e) {
                  this._checkboxView.checked = e;
                },
                get: function () {
                  return this._checkboxView.checked;
                },
              },
              {
                key: 'name',
                get: function () {
                  return this._name;
                },
              },
              {
                key: 'valid',
                get: function () {
                  return !0;
                },
              },
              {
                key: 'error',
                get: function () {
                  return this._error;
                },
              },
            ]),
            e
          );
        })());
    },
    FaeL: function (e, t, n) {
      e.exports = {
        autocomplete: 'autocomplete-S6SpJGmW-',
        caret: 'caret-3fqF_ykE-',
        icon: 'icon-1POgzoN_-',
        textInput: 'textInput-1mZnCCcA-',
        suggestions: 'suggestions-NOVMFmSY-',
        suggestion: 'suggestion-3xakscNf-',
        noResults: 'noResults-1pgHgvGL-',
        selected: 'selected-3wOAQHl8-',
        opened: 'opened-2C-bn3cP-',
      };
    },
    IDfV: function (e, t, n) {
      'use strict';
      function o(e, t) {
        Object(u.saveStudyTemplate)(e, function (n) {
          var o;
          n.error ||
            ((o = e.name),
            a.setValue('defaultStudyTemplate', o),
            Object(u.invalidateStudyTemplatesList)(),
            Object(u.getStudyTemplatesList)(t));
        });
      }
      var r, a, i, s, c, l, u, p, d, h, m;
      n.r(t),
        n.d(t, 'StudyTemplateSaver', function () {
          return m;
        }),
        (r = n('mrSG')),
        (a = n('Vdly')),
        (i = n('CLNU')),
        (s = n('UJLt')),
        (c = n('z0TC')),
        (l = n('Dnx6')),
        (u = n('lhgw')),
        (p = 'text'),
        (d = 'bool'),
        (h = {
          saveRenameDialog: {
            dialogTitle: window.t('Save Indicator Template As'),
            titleFieldLabel: window.t('Template name'),
            titleFieldError: window.t('Please enter template name'),
            intervalFieldLabel: window.t('Save Interval'),
            intervalFieldHint: window.t(
              'When selecting this checkbox the study template will set {0} interval on a chart',
            ),
          },
          confirmDialog: {
            message: window.t(
              "Study Template '{0}' already exists. Do you really want to replace it?",
            ),
          },
        }),
        (m = (function () {
          function e(e) {
            var t = this;
            (this._showSaveDialog = function () {
              return r.__awaiter(t, void 0, void 0, function () {
                var e, t;
                return r.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = this._chartWidget
                          .model()
                          .model()
                          .mainSeries()
                          .interval()),
                        [4, this._getActualTemplateList()]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        [4, this._showTemplateSaveRenameDialog(t, e)]
                      );
                    case 2:
                      return n.sent(), [2];
                  }
                });
              });
            }),
              (this._chartWidget = e.chartWidget),
              e.onSave && (this._onSave = e.onSave);
          }
          return (
            (e.prototype.show = function () {
              window.runOrSignIn(this._showSaveDialog, {
                source: 'Study templates save as',
                sourceMeta: 'Chart',
              });
            }),
            (e.prototype._doSave = function (e, t) {
              var n;
              (e = Object(i.clean)(e)),
                (n = this._chartWidget.model().model().studyTemplate(t)),
                o({ name: e, content: JSON.stringify(n) }, this._onSave);
            }),
            (e.prototype._getActualTemplateList = function () {
              return (
                Object(u.invalidateStudyTemplatesList)(),
                new Promise(function (e) {
                  Object(u.getStudyTemplatesList)(e);
                })
              );
            }),
            (e.prototype._showTemplateSaveRenameDialog = function (e, t) {
              var n = this,
                o = new s.SaveRenameDialog({
                  fields: [
                    new c.AutocompleteField({
                      name: p,
                      label: h.saveRenameDialog.titleFieldLabel + ':',
                      error: h.saveRenameDialog.titleFieldError,
                      source: e,
                      valueField: 'name',
                      textField: 'name',
                      maxLength: 64,
                    }),
                    new l.CheckboxField({
                      name: d,
                      label: h.saveRenameDialog.intervalFieldLabel,
                      hint: h.saveRenameDialog.intervalFieldHint.format(t),
                    }),
                  ],
                  title: h.saveRenameDialog.dialogTitle,
                  confirm: {
                    shouldShowDialog: function (t) {
                      var n = Object(i.clean)(t[p]);
                      return e
                        .map(function (e) {
                          return e.name;
                        })
                        .includes(n);
                    },
                    getMessage: function (e) {
                      return h.confirmDialog.message.format(
                        Object(i.clean)(e[p]),
                      );
                    },
                  },
                });
              o.show().then(function (e) {
                var t = e[p],
                  o = Boolean(e[d]);
                n._doSave(t, o);
              });
            }),
            e
          );
        })());
    },
    L0Sj: function (e, t, n) {
      'use strict';
      function o(e) {
        var t,
          n = e.className,
          o = e.icon,
          p = e.clearable,
          d = e.onClear,
          h = e.size,
          m = e.strictLeftDirectionInput,
          f = r.__rest(e, [
            'className',
            'icon',
            'clearable',
            'onClear',
            'size',
            'strictLeftDirectionInput',
          ]),
          v = i(
            l.inputWrapper,
            (((t = {})[n] = Boolean(n)),
            (t[l.iconed] = Boolean(o)),
            (t[l.clearable] = p),
            t),
          );
        return a.createElement(
          u,
          r.__assign(
            {
              theme: l,
              className: v,
              leftComponent: o
                ? a.createElement(s.a, {
                    key: 'inputIcon',
                    icon: o,
                    className: l.inputIcon,
                  })
                : void 0,
              rightComponent: p
                ? a.createElement(s.a, {
                    className: l.clearIcon,
                    icon: c,
                    key: 'clearIcon',
                    onClick: d,
                  })
                : void 0,
              sizeMode: h,
              strictLeftDirectionInput: m,
            },
            f,
          ),
        );
      }
      var r, a, i, s, c, l, u;
      n.d(t, 'a', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return o;
        }),
        (r = n('mrSG')),
        (a = n('q1tI')),
        (i = n('TSYQ')),
        (s = n('jjrI')),
        (c = n('Ald9')),
        (l = n('D/i5')),
        (u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                o,
                s = this.props,
                c = s.theme,
                u = s.error,
                p = s.success,
                d = s.sizeMode,
                h = s.leftComponent,
                m = s.rightComponent,
                f = s.grouped,
                v = s.columnGrouped,
                _ = s.fontSize,
                g = s.reference,
                y = s.className,
                w =
                  (s.strictLeftDirectionInput,
                  r.__rest(s, [
                    'theme',
                    'error',
                    'success',
                    'sizeMode',
                    'leftComponent',
                    'rightComponent',
                    'grouped',
                    'columnGrouped',
                    'fontSize',
                    'reference',
                    'className',
                    'strictLeftDirectionInput',
                  ])),
                b = { fontSize: _ },
                E = i(
                  c.textInput,
                  this.props.strictLeftDirectionInput &&
                    l.textInputLeftDirection,
                  (((e = {})[c.error] = u),
                  (e[c.success] = p),
                  (e[c[d]] = Boolean(d)),
                  e),
                ),
                k = i(
                  c.inputWrapper,
                  (((t = {})[y] = Boolean(y)),
                  (t[c.grouped] = f),
                  (t[c.column] = v),
                  t),
                ),
                S = [],
                O = a.createElement(
                  'input',
                  r.__assign(
                    { ref: g, className: E, key: 'textInput', style: b },
                    w,
                  ),
                );
              return (
                h &&
                  ((n = {
                    className: i(c.leftComponent, h.props.className),
                    key: 'leftComponent',
                  }),
                  S.push(a.cloneElement(h, n))),
                S.push(O),
                m &&
                  ((o = {
                    className: i(c.rightComponent, m.props.className),
                    key: 'rightComponent',
                  }),
                  S.push(a.cloneElement(m, o))),
                a.createElement('div', { className: k }, S)
              );
            }),
            t
          );
        })(a.PureComponent));
    },
    RgaO: function (e, t, n) {
      'use strict';
      var o, r, a;
      n.d(t, 'a', function () {
        return a;
      }),
        (o = n('mrSG')),
        (r = n('q1tI')),
        (a = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._scope = null),
              (t._handleScopeRef = function (e) {
                return (t._scope = e);
              }),
              (t._handleOutsideEvent = function (e) {
                void 0 !== t.props.handler &&
                  null !== t._scope &&
                  e.target instanceof Node &&
                  (t._scope.contains(e.target) || t.props.handler(e));
              }),
              t
            );
          }
          return (
            o.__extends(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.click &&
                document.addEventListener(
                  'click',
                  this._handleOutsideEvent,
                  !1,
                ),
                this.props.mouseDown &&
                  document.addEventListener(
                    'mousedown',
                    this._handleOutsideEvent,
                    !1,
                  ),
                this.props.touchEnd &&
                  document.addEventListener(
                    'touchend',
                    this._handleOutsideEvent,
                    !1,
                  ),
                this.props.touchStart &&
                  document.addEventListener(
                    'touchstart',
                    this._handleOutsideEvent,
                    !1,
                  );
            }),
            (t.prototype.componentWillUnmount = function () {
              document.removeEventListener(
                'click',
                this._handleOutsideEvent,
                !1,
              ),
                document.removeEventListener(
                  'mousedown',
                  this._handleOutsideEvent,
                  !1,
                ),
                document.removeEventListener(
                  'touchend',
                  this._handleOutsideEvent,
                  !1,
                ),
                document.removeEventListener(
                  'touchstart',
                  this._handleOutsideEvent,
                  !1,
                );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t =
                  (e.click,
                  e.handler,
                  e.mouseDown,
                  e.touchEnd,
                  e.touchStart,
                  e.ctor),
                n = void 0 === t ? 'span' : t,
                a = o.__rest(e, [
                  'click',
                  'handler',
                  'mouseDown',
                  'touchEnd',
                  'touchStart',
                  'ctor',
                ]);
              return r.createElement(
                n,
                o.__assign({}, a, { ref: this._handleScopeRef }),
              );
            }),
            t
          );
        })(r.PureComponent));
    },
    WUqb: function (e, t, n) {
      'use strict';
      var o, r;
      n.d(t, 'a', function () {
        return r;
      }),
        n('mrSG'),
        (o = n('q1tI')),
        (function (e) {
          (e[(e.Enter = 13)] = 'Enter'),
            (e[(e.Space = 32)] = 'Space'),
            (e[(e.Backspace = 8)] = 'Backspace'),
            (e[(e.DownArrow = 40)] = 'DownArrow'),
            (e[(e.UpArrow = 38)] = 'UpArrow'),
            (e[(e.RightArrow = 39)] = 'RightArrow'),
            (e[(e.LeftArrow = 37)] = 'LeftArrow'),
            (e[(e.Escape = 27)] = 'Escape'),
            (e[(e.Tab = 9)] = 'Tab');
        })(r || (r = {}));
    },
    drvG: function (e, t, n) {
      'use strict';
      function o(e) {
        var t,
          n = e.dropped,
          o = void 0 !== n && n,
          r = e.small,
          a = void 0 !== r && r,
          l = e.colorTransition,
          u = void 0 !== l && l,
          p = e.style,
          d = void 0 === p ? {} : p,
          h = e.className,
          m = void 0 === h ? '' : h,
          f = c(
            m,
            s.caret,
            (((t = {})[s.caretRotate] = o),
            (t[s.caretSmall] = a),
            (t[s.caretColorTransition] = u),
            t),
          );
        return i.createElement('i', { className: f, style: d });
      }
      function r(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase());
      }
      var a, i, s, c, l, u, p, d, h, m, f;
      n.r(t),
        (a = n('mrSG')),
        n('YFKU'),
        (i = n('q1tI')),
        (s = n('7HHr')),
        (c = n('TSYQ')),
        (l = n('L0Sj')),
        (u = n('RgaO')),
        (p = n('WUqb')),
        (d = n('FaeL')),
        (h = n('D/i5')),
        n.d(t, 'Autocomplete', function () {
          return f;
        }),
        (m = function (e) {
          return Array.isArray(e.source) || !e.allowUserDefinedValues;
        }),
        (f = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            if (
              ((n._setInputRef = function (e) {
                e &&
                  ((n._inputElement = e),
                  n.props.setupHTMLInput && n.props.setupHTMLInput(e),
                  n._inputElement.addEventListener(
                    'keyup',
                    n._handleKeyUpEnter,
                  ));
              }),
              (n._handleCaretClick = function () {
                n.state.isOpened
                  ? n._close()
                  : n.props.preventOnFocusOpen
                  ? n._open()
                  : n._focus();
              }),
              (n._handleOutsideClick = function () {
                var e = n.props,
                  t = e.allowUserDefinedValues,
                  o = e.value,
                  r = e.onChange,
                  a = n.state.queryValue;
                t && a !== o ? r && r(a) : n.setState(n._valueToQuery(o)),
                  n._close();
              }),
              (n._handleFocus = function (e) {
                n.props.preventOnFocusOpen || n._open(),
                  n.props.onFocus && n.props.onFocus(e);
              }),
              (n._handleChange = function (e) {
                var t,
                  o = e.currentTarget.value;
                n.props.preventSearchOnEmptyQuery && '' === o
                  ? n.setState({ queryValue: o, isOpened: !1, active: void 0 })
                  : ((t = n._suggestions(o)),
                    n.setState({
                      queryValue: o,
                      isOpened: Object.keys(t).length > 0,
                      active: n.props.allowUserDefinedValues
                        ? void 0
                        : n._getActiveKeyByValue(o),
                    }));
              }),
              (n._handleItemClick = function (e) {
                var t = e.currentTarget.id;
                n.setState({ queryValue: n._source()[t] }),
                  n._close(),
                  n.props.onChange && n.props.onChange(t);
              }),
              (n._handleKeyDown = function (e) {
                var t,
                  o,
                  r,
                  a,
                  i,
                  s,
                  c,
                  l,
                  u,
                  d,
                  h,
                  m,
                  f,
                  v,
                  _ = [p.a.DownArrow, p.a.UpArrow, p.a.Enter, p.a.Escape];
                if (-1 !== _.indexOf(e.which))
                  switch (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (o = (t = n.props).allowUserDefinedValues),
                    (r = t.value),
                    (a = t.onChange),
                    (s = (i = n.state).active),
                    (c = i.isOpened),
                    (l = i.queryValue),
                    (u = n._suggestions(l)),
                    e.which)
                  ) {
                    case p.a.DownArrow:
                    case p.a.UpArrow:
                      if (
                        ((d = Object.keys(u)),
                        !c && d.length && e.which === p.a.DownArrow)
                      ) {
                        n.setState({ isOpened: !0, active: d[0] });
                        break;
                      }
                      if (((h = void 0), void 0 === s)) {
                        if (e.which === p.a.UpArrow) {
                          n._close();
                          break;
                        }
                        h = 0;
                      } else
                        h = d.indexOf(s) + (e.which === p.a.UpArrow ? -1 : 1);
                      h < 0 && (h = 0),
                        h > d.length - 1 && (h = d.length - 1),
                        (m = d[h]),
                        n.setState({ active: m }),
                        (f = document.getElementById(m)) &&
                          n._scrollIfNotVisible(f, n._suggestionsElement);
                      break;
                    case p.a.Escape:
                      n._close(), c || n._blur();
                      break;
                    case p.a.Enter:
                      (v = s),
                        o &&
                          (c && v ? n.setState(n._valueToQuery(v)) : (v = l)),
                        void 0 !== v &&
                          (n._close(),
                          c || n._blur(),
                          v !== r ? a && a(v) : n.setState(n._valueToQuery(v)));
                  }
              }),
              (n._setSuggestionsRef = function (e) {
                e && (n._suggestionsElement = e);
              }),
              (n._scrollIfNotVisible = function (e, t) {
                var n = t.scrollTop,
                  o = t.scrollTop + t.clientHeight,
                  r = e.offsetTop,
                  a = e.clientHeight,
                  i = r + a;
                r <= n ? e.scrollIntoView(!0) : i >= o && e.scrollIntoView(!1);
              }),
              !m(t))
            )
              throw new Error(
                'allowUserDefinedProps === true cay only be used if source is array',
              );
            return (
              (n.state = a.__assign(
                { isOpened: !1, active: t.value },
                n._valueToQuery(t.value),
              )),
              n
            );
          }
          return (
            a.__extends(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.setState({
                queryValue:
                  '' === e.value
                    ? ''
                    : this._source()[e.value] || this.state.queryValue,
                active: e.value,
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this._inputElement &&
                this._inputElement.removeEventListener(
                  'keyup',
                  this._handleKeyUpEnter,
                );
            }),
            (t.prototype.render = function () {
              var e;
              return i.createElement(
                u.a,
                {
                  ctor: 'div',
                  className: c(
                    d.autocomplete,
                    ((e = {}), (e[d.opened] = this.state.isOpened), e),
                    'js-dialog-skip-escape',
                  ),
                  handler: this._handleOutsideClick,
                  click: !0,
                },
                i.createElement(l.a, {
                  rightComponent: Object.keys(
                    this._suggestions(this.state.queryValue),
                  ).length
                    ? i.createElement(
                        'div',
                        { className: d.caret, onClick: this._handleCaretClick },
                        i.createElement(o, {
                          className: d.icon,
                          dropped: this.state.isOpened,
                        }),
                      )
                    : void 0,
                  theme: h,
                  reference: this._setInputRef,
                  className: d.textInput,
                  placeholder: this.props.placeholder,
                  value: this.state.queryValue,
                  error: this.props.error,
                  onChange: this._handleChange,
                  onFocus: this._handleFocus,
                  onBlur: this.props.onBlur,
                  onMouseOver: this.props.onMouseOver,
                  onMouseOut: this.props.onMouseOut,
                  onKeyDown: this._handleKeyDown,
                }),
                this._renderSuggestions(),
              );
            }),
            (t.prototype._focus = function () {
              this._inputElement.focus();
            }),
            (t.prototype._blur = function () {
              this._inputElement.blur();
            }),
            (t.prototype._open = function () {
              this.setState({ isOpened: !0 });
            }),
            (t.prototype._close = function () {
              this.setState({ isOpened: !1, active: void 0 });
            }),
            (t.prototype._source = function () {
              var e = {};
              return (
                Array.isArray(this.props.source)
                  ? this.props.source.forEach(function (t) {
                      e[t] = t;
                    })
                  : (e = this.props.source),
                e
              );
            }),
            (t.prototype._suggestions = function (e) {
              var t = this.props,
                n = t.value,
                o = t.filter,
                a = void 0 === o ? r : o,
                i = this._source(),
                s = {},
                c = Object.keys(i);
              return (
                e !== i[n] &&
                  (c = c.filter(function (t) {
                    return a(e, i[t]);
                  })),
                c.forEach(function (e) {
                  return (s[e] = i[e]);
                }),
                s
              );
            }),
            (t.prototype._renderSuggestions = function () {
              var e = this,
                t = this._suggestions(this.state.queryValue),
                n = Object.keys(t).map(function (n) {
                  var o,
                    r = c(
                      d.suggestion,
                      (((o = {})[d.selected] = e.state.active === n), o),
                    );
                  return i.createElement(
                    'li',
                    {
                      id: n,
                      key: n,
                      className: r,
                      onClick: e._handleItemClick,
                    },
                    t[n],
                  );
                }),
                o = i.createElement(
                  'li',
                  { className: d.noResults },
                  window.t('No results found'),
                );
              return !n.length && this.props.noEmptyText
                ? null
                : i.createElement(
                    'ul',
                    { className: d.suggestions, ref: this._setSuggestionsRef },
                    n.length ? n : o,
                  );
            }),
            (t.prototype._handleKeyUpEnter = function (e) {
              e.which === p.a.Enter && e.stopImmediatePropagation();
            }),
            (t.prototype._getActiveKeyByValue = function (e) {
              var t,
                n,
                o,
                a = this.props.filter,
                i = void 0 === a ? r : a,
                s = this._suggestions(e),
                c = Object.keys(s);
              for (t = 0, n = c; t < n.length; t++)
                if (i(e, s[(o = n[t])])) return o;
              return c[0];
            }),
            (t.prototype._valueToQuery = function (e) {
              return { queryValue: this._source()[e] || '' };
            }),
            t
          );
        })(i.PureComponent));
    },
    jjrI: function (e, t, n) {
      'use strict';
      function o(e) {
        var t = e.className,
          n = e.icon,
          o = void 0 === n ? '' : n,
          i = e.title,
          s = e.onClick,
          c = e.onMouseDown,
          l = e.onMouseUp,
          u = e.onMouseLeave,
          p = e.reference,
          d = r.__rest(e, [
            'className',
            'icon',
            'title',
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onMouseLeave',
            'reference',
          ]);
        return a.createElement(
          'span',
          r.__assign({}, d, {
            title: i,
            className: t,
            dangerouslySetInnerHTML: { __html: o },
            onClick: s,
            onMouseDown: c,
            onMouseUp: l,
            onMouseLeave: u,
            ref: p,
          }),
        );
      }
      var r, a;
      n.d(t, 'a', function () {
        return o;
      }),
        (r = n('mrSG')),
        (a = n('q1tI'));
    },
    z0TC: function (e, t, n) {
      'use strict';
      function o(e) {
        var t, n;
        if (e && e.__esModule) return e;
        if (((t = {}), null != e))
          for (n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      var r, a, i, s, c, l;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AutocompleteField = void 0),
        (r = (function () {
          function e(e, t) {
            var n, o;
            for (n = 0; n < t.length; n++)
              ((o = t[n]).enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })()),
        (a = n('q1tI')),
        (i = o(a)),
        (s = n('i8i4')),
        (c = o(s)),
        (l = n('drvG')),
        (t.AutocompleteField = (function () {
          function e(t) {
            var n,
              o = this,
              r = t.label,
              a = t.name,
              s = (t.maxLength, t.error),
              u = void 0 === s ? '' : s,
              p = t.source;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this._name = a),
              (this._error = u),
              (this._$field = $(
                '<label class="tv-rename-chart-dialog__field">\n\t\t\t\t<span class="tv-rename-chart-dialog__label">' +
                  r +
                  '</span>\n\t\t\t</label>',
              )),
              (this._autocompleteContainer = document.createElement('div')),
              this._$field[0].appendChild(this._autocompleteContainer),
              (n = i.createElement(l.Autocomplete, {
                source: p.map(function (e) {
                  return e.name;
                }),
                allowUserDefinedValues: !0,
                preventOnFocusOpen: !0,
                noEmptyText: !0,
                preventSearchOnEmptyQuery: !0,
                setupHTMLInput: function (e) {
                  o._autocompleteInput = e;
                },
                filter: function (e, t) {
                  return (
                    '' === e ||
                    (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase()))
                  );
                },
              })),
              c.render(n, this._autocompleteContainer);
          }
          return (
            r(e, [
              {
                key: 'appendTo',
                value: function (e) {
                  e.append(this._$field);
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._autocompleteInput.focus();
                },
              },
              {
                key: 'select',
                value: function () {
                  this._autocompleteInput.focus(),
                    this._autocompleteInput.select();
                },
              },
              {
                key: 'unmount',
                value: function () {
                  c.unmountComponentAtNode(this._autocompleteContainer);
                },
              },
              {
                key: 'value',
                get: function () {
                  return this._autocompleteInput.value;
                },
              },
              {
                key: 'name',
                get: function () {
                  return this._name;
                },
              },
              {
                key: 'valid',
                get: function () {
                  return !!this._autocompleteInput.value;
                },
              },
              {
                key: 'error',
                get: function () {
                  return this._error;
                },
              },
            ]),
            e
          );
        })());
    },
  },
]);
