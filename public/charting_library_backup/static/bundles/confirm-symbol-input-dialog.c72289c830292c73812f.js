(window.webpackJsonp = window.webpackJsonp || []).push([
  ['confirm-symbol-input-dialog'],
  {
    kzGG: function (n, o, t) {
      'use strict';
      function e(n, o, t) {
        var e,
          i,
          p,
          a = $(
            '<input type="text" class="symbol-edit single" placeholder="' +
              window.t('Symbol') +
              '" maxlength="30" style="text-transform: none; font-weight: normal;" autocomplete="off">',
          );
        a.css({ float: 'none', 'box-sizing': 'border-box', width: '100%' }),
          (e = null),
          (i = Object(c.createDialog)({
            title: o || window.t('Add Symbol'),
            width: 400,
            actions: [
              { name: 'apply', text: window.t('Apply'), type: 'primary' },
            ],
            content: a,
            isClickOutFn: function (n) {
              if (e && (n.target === e[0] || e[0].contains(n.target)))
                return !1;
            },
          })),
          (p = Object(l.symbolSearchUIService)().bindToInput(a, {
            callback: function (o) {
              n(o), i.close();
            },
            onPopupOpen: function (n) {
              n.css('z-index', i.zIndex), (e = n);
            },
            onPopupClose: function () {
              e = null;
            },
          })),
          i.on('action:apply', function () {
            p.then(function (n) {
              n.acceptTypeIn();
            });
          }),
          t &&
            i.on('beforeClose', function () {
              t();
            }),
          i.open();
      }
      var i, c, l;
      t.r(o),
        t.d(o, 'showConfirmSymbolInputDialog', function () {
          return e;
        }),
        (i = t('P5fv')),
        t('YFKU'),
        (c = t('YDhE')),
        (l = t('pZll'));
    },
  },
]);