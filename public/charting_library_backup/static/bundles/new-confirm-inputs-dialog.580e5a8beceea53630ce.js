(window.webpackJsonp = window.webpackJsonp || []).push([
  ['new-confirm-inputs-dialog'],
  {
    iqv3: function (t, n, e) {
      'use strict';
      function o(t) {
        function n() {
          l.a.fire();
        }
        function e() {
          O(!1), C();
        }
        var o = t.title,
          i = t.studyMetaInfo,
          f = t.model,
          p = t.confirmInputsType,
          h = t.onCancel,
          _ = t.onSubmit,
          C = t.onClose,
          I = Object(s.useState)(!0),
          w = I[0],
          O = I[1],
          S = Object(s.useMemo)(function () {
            var t = Object.assign({}, i.defaults.inputs);
            return new m.a({ inputs: t });
          }, []),
          v = Object(s.useMemo)(function () {
            var t = new d.a();
            return {
              isInputsStudy: !0,
              symbolsResolved: function () {
                return t;
              },
              resolvedSymbolInfoBySymbol: function () {
                return null;
              },
            };
          }, []),
          E = Object(s.useRef)(null);
        return (
          Object(s.useEffect)(
            function () {
              if (!b.CheckMobile.any() && w && 'symbol' === p && E.current) {
                var t = E.current.querySelector('input');
                t && t.focus();
              }
            },
            [w],
          ),
          u.a.createElement(r.a, {
            dataName: 'confirm-inputs-dialog',
            title: o,
            isOpened: w,
            onSubmit: function () {
              _(S.state().inputs), e();
            },
            onCancel: h,
            onClickOutside: e,
            onClose: e,
            render: function () {
              return u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement('div', { className: y.separator }),
                u.a.createElement(
                  a.a,
                  { className: y.scrollable, onScroll: n },
                  u.a.createElement(c.a, {
                    reference: E,
                    property: S,
                    model: f,
                    study: v,
                    inputs:
                      'symbol' === p
                        ? i.inputs.filter(function (t) {
                            return t.id === i.symbolInputId();
                          })
                        : i.inputs.filter(function (t) {
                            return t.confirm;
                          }),
                  }),
                ),
              );
            },
            defaultActionOnClose: r.b.None,
            submitButtonText: window.t('Apply'),
            submitOnEnterKey: !1,
          })
        );
      }
      var i, s, u, r, l, a, c, f, m, p, d, b, y, h;
      e.r(n),
        (i = e('i8i4')),
        (s = e('q1tI')),
        (u = e.n(s)),
        e('bSeV'),
        e('YFKU'),
        (r = e('ycFu')),
        (l = e('tWVy')),
        (a = e('tmL0')),
        (c = e('5Ssy')),
        (f = e('tc+8')),
        (m = e.n(f)),
        (p = e('aIyQ')),
        (d = e.n(p)),
        (b = e('qFKp')),
        (y = e('jOdQ')),
        e.d(n, 'ConfirmInputsDialogRenderer', function () {
          return h;
        }),
        (h = (function () {
          function t(t, n, e, o, s, u) {
            var r = this;
            (this._container = document.createElement('div')),
              (this._handleClose = function () {
                i.unmountComponentAtNode(r._container), r._onClose();
              }),
              (this._title = t),
              (this._studyMetaInfo = n),
              (this._model = e),
              (this._confirmInputsType = o),
              (this._onSubmit = s),
              (this._onClose = u);
          }
          return (
            (t.prototype.show = function () {
              i.render(
                s.createElement(o, {
                  title: this._title,
                  studyMetaInfo: this._studyMetaInfo,
                  model: this._model,
                  confirmInputsType: this._confirmInputsType,
                  onSubmit: this._onSubmit,
                  onCancel: function () {},
                  onClose: this._handleClose,
                }),
                this._container,
              );
            }),
            t
          );
        })());
    },
    jOdQ: function (t, n, e) {
      t.exports = {
        separator: 'separator-1fBbiGH4',
        scrollable: 'scrollable-1was6mON',
      };
    },
  },
]);
