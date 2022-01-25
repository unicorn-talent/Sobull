(window.webpackJsonp = window.webpackJsonp || []).push([
  ['show-theme-save-dialog'],
  {
    KeOl: function (e, t, n) {
      'use strict';
      function o(e, t) {
        var n = 'text',
          o = new a.SaveRenameDialog({
            fields: [
              new i.InputField({
                error: window.t('Please enter theme name'),
                label: window.t('Theme name'),
                maxLength: 128,
                name: n,
              }),
            ],
            title: window.t('Save Theme As'),
            confirm: {
              shouldShowDialog: function (e) {
                return Object(s.isThemeExist)(e[n]);
              },
              getMessage: function (e) {
                return window.t(
                  "Color Theme '__themeName__' already exists. Do you really want to replace it?",
                  { themeName: e[n] },
                );
              },
            },
          });
        o.show().then(function (o) {
          Object(s.saveTheme)(o[n], e).then(function () {
            t && t(o[n]);
          }),
            Object(h.trackEvent)('GUI', 'Themes', 'Save custom theme');
        });
      }
      var a, i, s, h;
      n.r(t),
        n.d(t, 'showThemeSaveDialog', function () {
          return o;
        }),
        n('YFKU'),
        (a = n('UJLt')),
        (i = n('hkLy')),
        (s = n('EsvI')),
        (h = n('PC8g'));
    },
  },
]);
