(window.webpackJsonp = window.webpackJsonp || []).push([
  ['change-interval-dialog'],
  {
    MuC6: function (t, i, e) {
      'use strict';
      function s(t) {
        (this._options = t || {}),
          this._setInput(),
          (this._caption = $('<i class="interval-caption">').html('&nbsp;')),
          (this._helpTooltipTrigger = $(
            '<i class="help-tooltip-trigger apply-common-tooltip common-tooltip-below">',
          )
            .text('?')
            .attr(
              'title',
              $.t(
                'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
              ),
            )),
          (this._dialogTitle = $.t('Change Interval'));
      }
      var n = e('PT1i').linking,
        o = e('h24c').parseIntervalValue,
        a = e('h24c').intervalIsSupported,
        p = e('h24c').sanitizeIntervalValue,
        l = e('Kxc7'),
        r = e('pPtI'),
        h = e('GAqT').TVOldDialogs;
      (s.prototype._setInput = function () {
        (this._input = $(
          '<input type="text" class="change-interval-input" autocomplete="off" maxlength="5">',
        )),
          this._input
            .on('keypress', this._handleInput.bind(this))
            .on(
              'input',
              function () {
                this._validate(), this._updateCaption();
              }.bind(this),
            )
            .on(
              'blur',
              function () {
                setTimeout(this._submit.bind(this), 0);
              }.bind(this),
            );
      }),
        (s.prototype._validate = function () {
          var t,
            i = this._input.val();
          (this._parsed = o(i)),
            (this._valid = !this._parsed.error),
            (this._supported = !this._parsed.error && a(i)),
            (t = this._parsed.unit),
            this._supported &&
              ('R' === t && this._parsed.qty > r.getMaxResolutionValue('R')
                ? (this._supported = !1)
                : (null !== t && 'H' !== t) ||
                  (this._parsed.qty * ('H' === t ? 60 : 1) > 1440 &&
                    (this._supported = !1)));
        }),
        (s.prototype._updateCaption = function () {
          var t, i, e;
          this._valid && this._supported
            ? ((i = this._parsed.qty || 1),
              (e = this._parsed.unit || ''),
              (t = r.getTranslatedResolutionModel(i + e).hint),
              this._input.add(this._caption).removeClass('error'))
            : ((t = this._parsed.error ? '&nbsp;' : $.t('Not applicable')),
              this._input.add(this._caption).addClass('error')),
            this._caption.html(t);
        }),
        (s.prototype._handleInput = function (t) {
          var i, e, s;
          13 !== t.which
            ? t.ctrlKey ||
              t.metaKey ||
              !t.charCode ||
              !t.which ||
              t.which <= 32 ||
              ((i = String.fromCharCode(t.charCode)),
              (e = /[\dhdwms]/i),
              (s = /[\dhdwm]/i),
              (l.enabled('seconds_resolution') ? e.test(i) : s.test(i)) ||
                t.preventDefault())
            : this._submit();
        }),
        (s.prototype._submit = function () {
          var t, i;
          h.isOpen(this._dialogTitle) &&
            (this._valid &&
              this._supported &&
              ((t = p(this._input.val())),
              (i = n.interval.value()),
              t &&
                i !== t &&
                'function' == typeof this._options.callback &&
                this._options.callback(t)),
            h.destroy(this._dialogTitle));
        }),
        (s.prototype._setInitialValue = function (t) {
          var i, e;
          (i = ''),
            (e = !1),
            (t = t || this._options.initialValue) && ',' !== t
              ? (i = p(t) || '')
              : ((i = t = n.interval.value()), (e = !0)),
            this._input.val(i),
            e && this._input.select();
        }),
        (s.prototype.isValid = function () {
          return Boolean(this._valid);
        }),
        (s.prototype.show = function (t) {
          var i = h.createDialog(this._dialogTitle, {
              hideCloseCross: !0,
              addClass: 'change-interval-dialog',
              ownerDocument: this._options.ownerDocument,
            }),
            e = i.find('._tv-dialog-content');
          return (
            i.css('min-width', 0),
            e
              .css('min-width', 0)
              .mousedown(
                function (t) {
                  this._input.is(t.target) || t.preventDefault();
                }.bind(this),
              )
              .append(
                this._input.add(this._caption).add(this._helpTooltipTrigger),
              ),
            h.applyHandlers(i),
            h.positionDialog(i),
            this._setInitialValue(t),
            this._validate(),
            this._updateCaption(),
            i
          );
        }),
        (t.exports.ChangeIntervalDialog = s);
    },
  },
]);
