(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-template-dialog'],
  {
    '8RO/': function (e, t, n) {
      'use strict';
      function o(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter(function (e) {
              return Object(s.isStudy)(e) && !Object(s.isESDStudy)(e);
            })
            .map(function (e) {
              return {
                id: e.metaInfo().id,
                description: e.title(!0, void 0, !0),
              };
            }),
          interval: t,
        };
      }
      function r(e) {
        var t = new Map();
        return (
          e.forEach(function (e) {
            var n = t.get(e.id) || [e.description, 0],
              o = n[0],
              r = n[1];
            t.set(e.id, [o, r + 1]);
          }),
          Array.from(t.values())
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return t + (n > 1 ? ' x ' + n : '');
            })
            .join(', ')
        );
      }
      n.d(t, 'a', function () {
        return o;
      }),
        n.d(t, 'b', function () {
          return r;
        });
      var s = n('3ClC');
    },
    Ald9: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939" width="95.939" height="95.939"><path d="M62.82 47.97l32.53-32.534a2 2 0 0 0 0-2.828L83.332.586a2 2 0 0 0-2.827 0L47.97 33.12 15.435.587c-.75-.75-2.078-.75-2.828 0L.587 12.607a2 2 0 0 0 0 2.83L33.12 47.97.588 80.504a2 2 0 0 0 0 2.828l12.02 12.02a1.997 1.997 0 0 0 2.83 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.827 0l12.02-12.02c.78-.783.78-2.05 0-2.83L62.82 47.97z"/></svg>';
    },
    'D/i5': function (e, t, n) {
      e.exports = {
        inputWrapper: 'inputWrapper-6bNZbTW4',
        textInput: 'textInput-3WRWEmm7',
        error: 'error-v0663AtN',
        success: 'success-7iP8kTY5',
        textInputLeftDirection: 'textInputLeftDirection-mlAXPh8V',
        xsmall: 'xsmall-3Ah_Or2-',
        small: 'small-2bmxiJCE',
        large: 'large-1JDowW2I',
        iconed: 'iconed-3ZQvxTot',
        inputIcon: 'inputIcon-W_Bse-a1',
        clearable: 'clearable-2tabt_rj',
        clearIcon: 'clearIcon-389FR5J4',
      };
    },
    FaeL: function (e, t, n) {
      e.exports = {
        autocomplete: 'autocomplete-S6SpJGmW',
        caret: 'caret-3fqF_ykE',
        icon: 'icon-1POgzoN_',
        textInput: 'textInput-1mZnCCcA',
        suggestions: 'suggestions-NOVMFmSY',
        suggestion: 'suggestion-3xakscNf',
        noResults: 'noResults-1pgHgvGL',
        selected: 'selected-3wOAQHl8',
        opened: 'opened-2C-bn3cP',
      };
    },
    GtBf: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M8 0C3.586 0 0 3.586 0 8s3.586 8 8 8 8-3.586 8-8-3.586-8-8-8zm0 1c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm.09 3c-1.194 0-1.988.728-2.16 1.83-.01.07.03.108.1.12l.72.13c.07.012.118-.02.13-.09.138-.7.547-1.09 1.19-1.09.654 0 1.11.416 1.11 1.07 0 .39-.14.65-.54 1.2l-.77 1.06c-.24.333-.34.57-.34 1.03v.47c0 .07.05.11.12.11h.75c.07 0 .12-.04.12-.11v-.37c0-.39.07-.55.3-.86l.76-1.05c.39-.54.59-.95.59-1.5C10.17 4.814 9.33 4 8.09 4zm-.5 6.72c-.07 0-.12.04-.12.11v.99c0 .07.05.11.12.11h.87c.068 0 .12-.04.12-.11v-.99c0-.068-.05-.11-.12-.11h-.87z"/></svg>';
    },
    IDfV: function (e, t, n) {
      'use strict';
      function o(e, t) {
        return '' === e || -1 !== t.toLowerCase().indexOf(e.toLowerCase());
      }
      function r(e) {
        var t = e.title,
          n = e.hintText,
          o = e.indicatorsText,
          r = e.source,
          s = e.onClose,
          i = e.onSubmit,
          a = Object(c.useState)(''),
          l = a[0],
          f = a[1],
          m = Object(c.useState)(!1),
          v = m[0],
          _ = m[1],
          g = Object(c.useState)(!1),
          y = g[0],
          b = g[1],
          O = Object(c.useRef)(null),
          C = Object(c.useRef)(null);
        return (
          Object(c.useEffect)(function () {
            Object(d.ensureNotNull)(C.current).focus();
          }, []),
          u.a.createElement(
            E,
            {
              ref: O,
              isOpened: !0,
              saveDisabled: !l,
              title: t,
              onClose: s,
              onSubmit: function (e) {
                i({ title: l, saveInterval: v }, e);
              },
            },
            u.a.createElement(
              'div',
              { className: p(x.container, y && x.withSuggestions) },
              u.a.createElement('div', { className: x.title }, N),
              u.a.createElement(
                'div',
                { className: x.autocomplete },
                u.a.createElement(w, {
                  maxLength: 64,
                  value: l,
                  onChange: f,
                  onBlur: function () {
                    Object(d.ensureNotNull)(O.current).focus();
                  },
                  source: r,
                  allowUserDefinedValues: !0,
                  preventOnFocusOpen: !0,
                  noEmptyText: !0,
                  preventSearchOnEmptyQuery: !0,
                  filter: function (e, t) {
                    return Boolean(
                      '' === e ||
                        (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
                    );
                  },
                  setupHTMLInput: function (e) {
                    C.current = e;
                  },
                  onSuggestionsOpen: function () {
                    b(!0);
                  },
                  onSuggestionsClose: function () {
                    b(!1);
                  },
                }),
              ),
              u.a.createElement(
                'div',
                { className: x.saveInterval },
                u.a.createElement(h.Checkbox, {
                  label: u.a.createElement(
                    'span',
                    { className: x.hintLabel },
                    j,
                    u.a.createElement(S.a, {
                      icon: I,
                      className: p(x.hintMark, 'apply-common-tooltip'),
                      title: n,
                    }),
                  ),
                  onChange: function () {
                    _(!v), Object(d.ensureNotNull)(O.current).focus();
                  },
                  checked: v,
                }),
              ),
              u.a.createElement('div', { className: x.title }, D),
              u.a.createElement(
                'div',
                { className: p(x.indicators, y && x.withSuggestions) },
                o,
              ),
            ),
          )
        );
      }
      function s(e, t, n) {
        A.backend.saveStudyTemplate(e, function (e) {
          ('error' in e && e.error) ||
            (A.backend.invalidateStudyTemplatesList(),
            A.backend.getStudyTemplatesList(t));
        });
      }
      var i,
        a,
        c,
        u,
        l,
        p,
        h,
        d,
        f,
        m,
        v,
        _,
        g,
        y,
        b,
        w,
        S,
        O,
        C,
        E,
        I,
        x,
        N,
        D,
        j,
        T,
        L,
        k,
        A,
        V,
        B,
        M;
      n.r(t),
        (i = n('mrSG')),
        (a = n('YFKU')),
        (c = n('q1tI')),
        (u = n.n(c)),
        (l = n('i8i4')),
        n('HbRj'),
        (p = n('TSYQ')),
        (h = n('dWaX')),
        (d = n('Eyy1')),
        (f = n('ML8+')),
        (m = n('L0Sj')),
        (v = n('RgaO')),
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
        })(_ || (_ = {})),
        (g = n('FaeL')),
        (y = n('D/i5')),
        (b = function (e) {
          return Array.isArray(e.source) || !e.allowUserDefinedValues;
        }),
        (w = (function (e) {
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
                  ? (n._close(), n.props.preventOnFocusOpen && n._focus())
                  : n.props.preventOnFocusOpen
                  ? n._open()
                  : n._focus();
              }),
              (n._handleOutsideClick = function () {
                var e = n.props,
                  t = e.allowUserDefinedValues,
                  o = e.value,
                  r = e.onChange,
                  s = n.state.queryValue;
                t ? r && s !== o && r(s) : n.setState(n._valueToQuery(o)),
                  n._close();
              }),
              (n._handleFocus = function (e) {
                n.props.preventOnFocusOpen || n._open(),
                  n.props.onFocus && n.props.onFocus(e);
              }),
              (n._handleChange = function (e) {
                var t,
                  o,
                  r = n.props,
                  s = r.preventSearchOnEmptyQuery,
                  i = r.allowUserDefinedValues,
                  a = r.onChange,
                  c = r.onSuggestionsOpen,
                  u = r.onSuggestionsClose,
                  l = e.currentTarget.value;
                s && '' === l
                  ? (n.setState({
                      queryValue: l,
                      isOpened: !1,
                      active: void 0,
                    }),
                    u && u())
                  : ((t = n._suggestions(l)),
                    (o = Object.keys(t).length > 0),
                    n.setState({
                      queryValue: l,
                      isOpened: o,
                      active: i ? void 0 : n._getActiveKeyByValue(l),
                    }),
                    o && c && c()),
                  i && a && a(l);
              }),
              (n._handleItemClick = function (e) {
                var t = e.currentTarget.id;
                n.setState({ queryValue: n._source()[t] }),
                  n._close(),
                  n._focus(),
                  n.props.onChange && n.props.onChange(t);
              }),
              (n._handleKeyDown = function (e) {
                var t,
                  o,
                  r,
                  s,
                  i,
                  a,
                  c,
                  u,
                  l,
                  p,
                  h,
                  d,
                  f,
                  m,
                  v,
                  g = [_.DownArrow, _.UpArrow, _.Enter, _.Escape];
                if (-1 !== g.indexOf(e.which))
                  switch (
                    ((o = (t = n.props).allowUserDefinedValues),
                    (r = t.value),
                    (s = t.onChange),
                    (i = t.onSuggestionsOpen),
                    (c = (a = n.state).active),
                    (u = a.isOpened),
                    (l = a.queryValue),
                    u && (e.preventDefault(), e.stopPropagation()),
                    (p = n._suggestions(l)),
                    e.which)
                  ) {
                    case _.DownArrow:
                    case _.UpArrow:
                      if (
                        ((h = Object.keys(p)),
                        !u && h.length && e.which === _.DownArrow)
                      ) {
                        n.setState({ isOpened: !0, active: h[0] }), i && i();
                        break;
                      }
                      if (((d = void 0), void 0 === c)) {
                        if (e.which === _.UpArrow) {
                          n._close();
                          break;
                        }
                        d = 0;
                      } else
                        d = h.indexOf(c) + (e.which === _.UpArrow ? -1 : 1);
                      d < 0 && (d = 0),
                        d > h.length - 1 && (d = h.length - 1),
                        (f = h[d]),
                        n.setState({ active: f }),
                        (m = document.getElementById(f)) &&
                          n._scrollIfNotVisible(m, n._suggestionsElement);
                      break;
                    case _.Escape:
                      n._close(), u || n._blur();
                      break;
                    case _.Enter:
                      (v = c),
                        o &&
                          (u && v ? n.setState(n._valueToQuery(v)) : (v = l)),
                        void 0 !== v &&
                          (n._close(),
                          u || n._blur(),
                          v !== r ? s && s(v) : n.setState(n._valueToQuery(v)));
                  }
              }),
              (n._setSuggestionsRef = function (e) {
                e && (n._suggestionsElement = e);
              }),
              (n._scrollIfNotVisible = function (e, t) {
                var n = t.scrollTop,
                  o = t.scrollTop + t.clientHeight,
                  r = e.offsetTop,
                  s = e.clientHeight,
                  i = r + s;
                r <= n ? e.scrollIntoView(!0) : i >= o && e.scrollIntoView(!1);
              }),
              !b(t))
            )
              throw new Error(
                'allowUserDefinedProps === true cay only be used if source is array',
              );
            return (
              (n.state = Object(i.__assign)(
                { isOpened: !1, active: t.value },
                n._valueToQuery(t.value),
              )),
              n
            );
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.componentWillReceiveProps = function (e) {
              var t = e.allowUserDefinedValues,
                n = e.value,
                o = t
                  ? n
                  : '' === n
                  ? ''
                  : this._source()[n] || this.state.queryValue;
              this.setState({ queryValue: o, active: n });
            }),
            (t.prototype.componentWillUnmount = function () {
              this._inputElement &&
                this._inputElement.removeEventListener(
                  'keyup',
                  this._handleKeyUpEnter,
                );
            }),
            (t.prototype.render = function () {
              var e = this;
              return c.createElement(
                v.a,
                { handler: this._handleOutsideClick, click: !0 },
                function (t) {
                  var n;
                  return c.createElement(
                    'div',
                    {
                      className: p(
                        g.autocomplete,
                        ((n = {}), (n[g.opened] = e.state.isOpened), n),
                        'js-dialog-skip-escape',
                      ),
                      ref: t,
                    },
                    c.createElement(m.a, {
                      name: e.props.name,
                      rightComponent: Object.keys(
                        e._suggestions(e.state.queryValue),
                      ).length
                        ? c.createElement(
                            'div',
                            {
                              className: g.caret,
                              onClick: e._handleCaretClick,
                            },
                            c.createElement(f.a, {
                              className: g.icon,
                              dropped: e.state.isOpened,
                            }),
                          )
                        : void 0,
                      maxLength: e.props.maxLength,
                      theme: y,
                      reference: e._setInputRef,
                      className: g.textInput,
                      placeholder: e.props.placeholder,
                      value: e.state.queryValue,
                      error: e.props.error,
                      onChange: e._handleChange,
                      onFocus: e._handleFocus,
                      onBlur: e.props.onBlur,
                      onMouseOver: e.props.onMouseOver,
                      onMouseOut: e.props.onMouseOut,
                      onKeyDown: e._handleKeyDown,
                    }),
                    e._renderSuggestions(),
                  );
                },
              );
            }),
            (t.prototype._focus = function () {
              this._inputElement.focus();
            }),
            (t.prototype._blur = function () {
              this._inputElement.blur();
            }),
            (t.prototype._open = function () {
              var e = this.props.onSuggestionsOpen;
              this._focus(), this.setState({ isOpened: !0 }), e && e();
            }),
            (t.prototype._close = function () {
              var e = this.props.onSuggestionsClose;
              this.setState({ isOpened: !1, active: void 0 }), e && e();
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
              var t = this.props.filter,
                n = void 0 === t ? o : t,
                r = this._source(),
                s = {};
              return (
                Object.keys(r)
                  .filter(function (t) {
                    return n(e, r[t]);
                  })
                  .forEach(function (e) {
                    return (s[e] = r[e]);
                  }),
                s
              );
            }),
            (t.prototype._renderSuggestions = function () {
              var e = this,
                t = this._suggestions(this.state.queryValue),
                n = Object.keys(t).map(function (n) {
                  var o,
                    r = p(
                      g.suggestion,
                      (((o = {})[g.selected] = e.state.active === n), o),
                    );
                  return c.createElement(
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
                o = c.createElement(
                  'li',
                  { className: g.noResults },
                  window.t('No results found'),
                );
              return !n.length && this.props.noEmptyText
                ? null
                : c.createElement(
                    'ul',
                    { className: g.suggestions, ref: this._setSuggestionsRef },
                    n.length ? n : o,
                  );
            }),
            (t.prototype._handleKeyUpEnter = function (e) {
              e.which === _.Enter && e.stopImmediatePropagation();
            }),
            (t.prototype._getActiveKeyByValue = function (e) {
              var t,
                n,
                r,
                s = this.props.filter,
                i = void 0 === s ? o : s,
                a = this._suggestions(e),
                c = Object.keys(a);
              for (t = 0, n = c; t < n.length; t++)
                if (i(e, a[(r = n[t])])) return r;
              return c[0];
            }),
            (t.prototype._valueToQuery = function (e) {
              return { queryValue: this._source()[e] || '' };
            }),
            t
          );
        })(c.PureComponent)),
        (S = n('jjrI')),
        (O = n('ycFu')),
        (C = n('+EG+')),
        (E = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._dialogRef = c.createRef()),
              (t._manager = null),
              (t._handleSubmit = function () {
                t.props.onSubmit(t);
              }),
              t
            );
          }
          return (
            Object(i.__extends)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isOpened,
                n = e.saveDisabled,
                o = e.title,
                r = e.onClose;
              return c.createElement(O.a, {
                ref: this._dialogRef,
                onClose: r,
                onSubmit: this._handleSubmit,
                onCancel: r,
                onClickOutside: r,
                isOpened: t,
                title: o,
                dataName: 'save-rename-dialog',
                render: this._renderDialogBody(),
                defaultActionOnClose: O.b.None,
                submitButtonText: window.t('Save'),
                submitButtonDisabled: n,
              });
            }),
            (t.prototype.focus = function () {
              Object(d.ensureNotNull)(this._dialogRef.current).focus();
            }),
            (t.prototype.manager = function () {
              return this._manager;
            }),
            (t.prototype.submit = function () {
              this.props.onSubmit(this);
            }),
            (t.prototype.close = function () {
              this.props.onClose();
            }),
            (t.prototype._renderDialogBody = function () {
              var e = this;
              return function () {
                return c.createElement(C.b.Consumer, null, function (t) {
                  return (e._manager = t), e.props.children;
                });
              };
            }),
            t
          );
        })(c.PureComponent)),
        (I = n('GtBf')),
        (x = n('j+m7')),
        (N = window.t('Template name')),
        (D = window.t('Saved indicators')),
        (j = window.t('Save Interval')),
        (T = n('FQhm')),
        (L = n('ZjKI')),
        (k = (function () {
          function e(e) {
            var t = this;
            (this._container = document.createElement('div')),
              (this.close = function () {
                t.unmount(), t._onClose && t._onClose();
              }),
              (this.unmount = function () {
                T.unsubscribe(
                  L.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                  t.unmount,
                  null,
                ),
                  l.unmountComponentAtNode(t._container);
              }),
              (this._title = e.title),
              (this._hintText = e.hintText),
              (this._indicatorsText = e.indicatorsText),
              (this._source = e.source),
              (this._onSubmit = e.onSubmit),
              (this._onClose = e.onClose),
              T.subscribe(
                L.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              );
          }
          return (
            (e.prototype.mount = function () {
              l.render(
                u.a.createElement(r, {
                  title: this._title,
                  hintText: this._hintText,
                  indicatorsText: this._indicatorsText,
                  source: this._source,
                  onClose: this.close,
                  onSubmit: this._onSubmit,
                }),
                this._container,
              );
            }),
            (e.prototype.destroy = function () {
              this.unmount();
            }),
            (e.prototype.show = function () {
              this.mount();
            }),
            e
          );
        })()),
        (A = n('zUrt')),
        (V = n('oNDq')),
        (B = n('8RO/')),
        n.d(t, 'StudyTemplateSaver', function () {
          return M;
        }),
        (M = (function () {
          function e(e) {
            var t = this;
            (this._dialog = null),
              (this._onSave = function (e) {
                t._options.onSave(e), t._close();
              }),
              (this._showSaveDialog = function () {
                return Object(i.__awaiter)(t, void 0, void 0, function () {
                  var e, t;
                  return Object(i.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (e = this._controller
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
              (this._close = function () {
                t._dialog && (t._dialog.destroy(), (t._dialog = null));
              }),
              (this._options = e),
              (this._controller = e.controller);
          }
          return (
            (e.prototype.show = function () {
              window.runOrSignIn(this._showSaveDialog, {
                source: 'Study templates save as',
                sourceMeta: 'Chart',
              });
            }),
            (e.prototype._prepareData = function (e, t) {
              var n = this._controller.model().studyTemplate(t);
              return {
                name: e,
                content: JSON.stringify(n),
                meta_info: Object(B.a)(this._controller, n.interval),
              };
            }),
            (e.prototype._doSave = function (e, t, n) {
              var o,
                r,
                i,
                c = this,
                u = t.title,
                l = t.saveInterval;
              u &&
                ((o = n.manager() || void 0),
                (r = this._prepareData(u, l)),
                e.find(function (e) {
                  return e.name === u;
                })
                  ? ((i = function (e) {
                      e ? s(r, c._onSave) : n.focus();
                    }),
                    (function (e, t) {
                      return new Promise(function (n) {
                        Object(V.createConfirmDialog)({
                          type: 'modal',
                          content: document.createTextNode(
                            Object(a.t)(
                              "Study Template '{0}' already exists. Do you really want to replace it?",
                            ).format(e),
                          ),
                          manager: t,
                        }).then(function (e) {
                          var t = !1;
                          e.on('action:yes', function (e) {
                            (t = !0), n(!0), e.close();
                          }),
                            e.on('afterClose', function () {
                              n(t);
                            }),
                            e.open();
                        });
                      });
                    })(u, o).then(i))
                  : (void 0, s(r, this._onSave)));
            }),
            (e.prototype._getActualTemplateList = function () {
              return (
                A.backend.invalidateStudyTemplatesList(),
                new Promise(function (e) {
                  A.backend.getStudyTemplatesList(e);
                })
              );
            }),
            (e.prototype._showTemplateSaveRenameDialog = function (e, t) {
              var n = this,
                o = Object(B.a)(this._controller),
                r = (this._dialog = new k({
                  source: e.map(function (e) {
                    return e.name;
                  }),
                  title: Object(a.t)('Save Indicator Template'),
                  hintText: Object(a.t)(
                    'When selecting this checkbox the study template will set {0} interval on a chart',
                  ).format(t),
                  indicatorsText: Object(B.b)(o.indicators),
                  onSubmit: function (t, o) {
                    return n._doSave(e, t, o);
                  },
                  onClose: this._close,
                }));
              r.show();
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
          h = e.onClear,
          d = e.size,
          f = e.strictLeftDirectionInput,
          m = Object(r.__rest)(e, [
            'className',
            'icon',
            'clearable',
            'onClear',
            'size',
            'strictLeftDirectionInput',
          ]),
          v = i(
            u.inputWrapper,
            (((t = {})[n] = Boolean(n)),
            (t[u.iconed] = Boolean(o)),
            (t[u.clearable] = p),
            t),
          );
        return s.createElement(
          l,
          Object(r.__assign)(
            {
              theme: u,
              className: v,
              leftComponent: o
                ? s.createElement(a.a, {
                    key: 'inputIcon',
                    icon: o,
                    className: u.inputIcon,
                  })
                : void 0,
              rightComponent: p
                ? s.createElement(a.a, {
                    className: u.clearIcon,
                    icon: c,
                    key: 'clearIcon',
                    onClick: h,
                  })
                : void 0,
              sizeMode: d,
              strictLeftDirectionInput: f,
            },
            m,
          ),
        );
      }
      var r, s, i, a, c, u, l;
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return o;
        }),
        (r = n('mrSG')),
        (s = n('q1tI')),
        (i = n('TSYQ')),
        (a = n('jjrI')),
        (c = n('Ald9')),
        (u = n('D/i5')),
        (l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                o,
                a = this.props,
                c = a.theme,
                l = a.error,
                p = a.success,
                h = a.sizeMode,
                d = a.leftComponent,
                f = a.rightComponent,
                m = a.grouped,
                v = a.columnGrouped,
                _ = a.fontSize,
                g = a.reference,
                y = a.className,
                b =
                  (a.strictLeftDirectionInput,
                  Object(r.__rest)(a, [
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
                w = { fontSize: _ },
                S = i(
                  c.textInput,
                  this.props.strictLeftDirectionInput &&
                    u.textInputLeftDirection,
                  (((e = {})[c.error] = l),
                  (e[c.success] = p),
                  (e[c[h]] = Boolean(h)),
                  e),
                ),
                O = i(
                  c.inputWrapper,
                  (((t = {})[y] = Boolean(y)),
                  (t[c.grouped] = m),
                  (t[c.column] = v),
                  t),
                ),
                C = [],
                E = s.createElement(
                  'input',
                  Object(r.__assign)(
                    { ref: g, className: S, key: 'textInput', style: w },
                    b,
                  ),
                );
              return (
                d &&
                  ((n = {
                    className: i(c.leftComponent, d.props.className),
                    key: 'leftComponent',
                  }),
                  C.push(s.cloneElement(d, n))),
                C.push(E),
                f &&
                  ((o = {
                    className: i(c.rightComponent, f.props.className),
                    key: 'rightComponent',
                  }),
                  C.push(s.cloneElement(f, o))),
                s.createElement('div', { className: O }, C)
              );
            }),
            t
          );
        })(s.PureComponent));
    },
    'ML8+': function (e, t, n) {
      'use strict';
      function o(e) {
        var t,
          n = e.dropped,
          o = e.className;
        return r.createElement(i.a, {
          className: s(o, a.icon, ((t = {}), (t[a.dropped] = n), t)),
          icon: c,
        });
      }
      var r, s, i, a, c;
      n.d(t, 'a', function () {
        return o;
      }),
        (r = n('q1tI')),
        (s = n('TSYQ')),
        (i = n('jjrI')),
        (a = n('cvzQ')),
        (c = n('R4+T'));
    },
    cvzQ: function (e, t, n) {
      e.exports = { icon: 'icon-3yfDkFjY', dropped: 'dropped-50rfOQ8V' };
    },
    'j+m7': function (e, t, n) {
      e.exports = {
        container: 'container-3QIqByoJ',
        withSuggestions: 'withSuggestions-22pawmYM',
        title: 'title-2CczwBhX',
        autocomplete: 'autocomplete-2f7MJ4QF',
        saveInterval: 'saveInterval-4oPxh7GH',
        indicators: 'indicators-9neV2G7Q',
        hintLabel: 'hintLabel-35eBgBBj',
        hintMark: 'hintMark-3nV4PBLt',
      };
    },
  },
]);
