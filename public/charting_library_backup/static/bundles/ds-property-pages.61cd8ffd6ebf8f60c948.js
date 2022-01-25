(window.webpackJsonp = window.webpackJsonp || []).push([
  ['ds-property-pages'],
  {
    '/0lf': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t, i);
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.BooleanBinder,
        p = r.SimpleComboBinder,
        d = r.SimpleStringBinder,
        h = r.ColorBinding,
        c = r.SliderBinder,
        b = i('/4PT').createLineStyleEditor;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, r, u, C, y, g, w, T;
          (this._res = $('<div>')),
            (this._table = $(
              '<table class="property-page" cellspacing="0" cellpadding="2" style="width:100%"></table>',
            ).appendTo(this._res)),
            (e = this.createLineWidthEditor()),
            (t = b()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(this._table, 'Line')),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td colspan="3">')
              .append(t.render().css('display', 'block'))
              .appendTo(o),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (o = $('<tr>').appendTo(this._table)),
            $('<td colspan="3">')
              .append($('<label>').append(n).append($.t('Show Price')))
              .prependTo(o),
            (a = $("<input type='checkbox'>")),
            (o = $('<tr>').appendTo(this._table)),
            $('<td colspan="3">')
              .append($('<label>').append(a).append($.t('Show Text')))
              .prependTo(o),
            (o = this.addLabeledRow(this._table, 'Text:')),
            (l = this.createColorPicker()),
            (r = this.createFontSizeEditor()),
            (u = this.createFontEditor()),
            (C = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (y = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            $('<td>').append(l).appendTo(o),
            $('<td>').append(u).appendTo(o),
            $('<td>').append(r).appendTo(o),
            $('<td>').append(C).appendTo(o),
            $('<td>').append(y).appendTo(o),
            (o = $('<tr>').appendTo(this._table)),
            $("<td colspan='2'>").append($.t('Text Alignment:')).appendTo(o),
            (g = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            )),
            (w = $(
              "<select><option value='bottom'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='top'>" +
                $.t('bottom') +
                '</option></select>',
            ).data('selectbox-css', { display: 'block' })),
            $('<td>').append(g).appendTo(o),
            $("<td colspan='3'>").append(w).appendTo(o),
            (T = $("<textarea rows='7' cols='60'>").css('width', '100%')),
            (o = $('<tr>').appendTo(this._table)),
            $("<td colspan='7'>").append(T).appendTo(o),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().showLabel,
                !0,
                this.model(),
                'Change Horz Line Text Visibility',
              ),
            ),
            this.bindControl(
              new p(
                g,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Horz Line Labels Alignment',
              ),
            ),
            this.bindControl(
              new p(
                w,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Horz Line Labels Alignment',
              ),
            ),
            this.bindControl(
              new d(
                T,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().showPrice,
                !0,
                this.model(),
                'Change Horz Line Price Visibility',
              ),
            ),
            this.bindControl(
              new h(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Horz Line Color',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Horz Line Style',
              ),
            ),
            this.bindControl(
              new c(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Horz Line Width',
              ),
            ),
            this.bindControl(
              new p(
                r,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new p(
                u,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new h(
                l,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new s(
                C,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new s(
                y,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._res;
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          var e, t, i;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            this._linetool.points()[0] &&
              ((e = this._linetool.properties().points[0]),
              (t = this.createPriceEditor(e.price)),
              (i = $('<tr>').appendTo(this._table)),
              $('<td>' + $.t('Price') + '</td>').appendTo(i),
              $('<td>').append(t).appendTo(i),
              this.loadData());
        }),
        (t.LineToolHorzLineStylesPropertyPage = o),
        (t.LineToolHorzLineInputsPropertyPage = n);
    },
    '/1PJ': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        s.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      function n(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.PropertyPage,
        p = r.SliderBinder,
        d = i('y/RR').createTransparencyEditor,
        h = i('QloM');
      inherit(o, l),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            r = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ),
            s = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).data({
              'layout-tab': h.TabNames.inputs,
              'layout-tab-priority': h.TabPriority.Inputs,
            });
          (this._table = r.add(s)),
            l.prototype.prepareLayoutForTable.call(this, r),
            (e = $('<tr>').appendTo(s)),
            $('<td>').append($.t('Avg HL in minticks')).appendTo(e),
            (t = $('<td>').appendTo(e)),
            (i = $("<input type='text'>").addClass('ticker').appendTo(t)),
            (e = $('<tr>').appendTo(s)),
            $('<td>').append($.t('Variance')).appendTo(e),
            (o = $('<td>').appendTo(e)),
            (n = $("<input type='text'>").addClass('ticker').appendTo(o)),
            (a = this._linetool.properties()),
            this.bindInteger(
              i,
              a.averageHL,
              $.t('Change Average HL value'),
              1,
              5e4,
            ),
            this.bindInteger(
              n,
              a.variance,
              $.t('Change Variance value'),
              1,
              100,
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, a),
        (n.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, r, s, h, c;
          (this._widget = $('<div>')),
            (e = $('<table cellspacing=4>').appendTo(this._widget)),
            (t = this.createColorPicker()),
            (i = this.createColorPicker()),
            (o = this.createColorPicker()),
            (n = this.createColorPicker()),
            (a = this.createColorPicker()),
            (l = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(n).add(a),
            )),
            (r = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(o),
            )),
            (s = this.addLabeledRow(e, $.t('Candles'))),
            $('<td>').prependTo(s),
            $('<td>').append(t).appendTo(s),
            $('<td>').append(i).appendTo(s),
            (s = this.addLabeledRow(e, $.t('Borders'), l)),
            $('<td>').append(l).prependTo(s),
            $('<td>').append(n).appendTo(s),
            $('<td>').append(a).appendTo(s),
            $('<td>').appendTo(s),
            (s = this.addLabeledRow(e, $.t('Wick'), r)),
            $('<td>').append(r).prependTo(s),
            $('<td>').append(o).appendTo(s),
            $('<td>').appendTo(s),
            (e = $('<table>').appendTo(this._widget)),
            (s = $('<tr>').appendTo(e)),
            $("<td colspan='2'>").append($.t('Transparency')).appendTo(s),
            (h = d()),
            $("<td colspan='2'>").append(h).appendTo(s),
            (c = this._linetool.properties()),
            this.bindColor(t, c.candleStyle.upColor, 'Change Candle Up Color'),
            this.bindColor(
              i,
              c.candleStyle.downColor,
              'Change Candle Down Color',
            ),
            this.bindBoolean(
              r,
              c.candleStyle.drawWick,
              'Change Candle Wick Visibility',
            ),
            this.bindColor(
              o,
              c.candleStyle.wickColor,
              'Change Candle Wick Color',
            ),
            this.bindBoolean(
              l,
              c.candleStyle.drawBorder,
              'Change Candle Border Visibility',
            ),
            this.bindColor(
              n,
              c.candleStyle.borderUpColor,
              'Change Candle Up Border Color',
            ),
            this.bindColor(
              a,
              c.candleStyle.borderDownColor,
              'Change Candle Down Border Color',
            ),
            this.bindControl(
              new p(
                h,
                c.transparency,
                !0,
                this.model(),
                'Change Guest Feed Transparency',
              ),
            );
        }),
        (n.prototype.widget = function () {
          return this._widget;
        }),
        (t.LineToolGhostFeedInputsPropertyPage = o),
        (t.LineToolGhostFeedStylesPropertyPage = n);
    },
    '/4PT': function (e, t, i) {
      'use strict';
      function o() {
        return new a([
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--solid"/>',
            value: l.LINESTYLE_SOLID,
          },
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--dotted"/>',
            value: l.LINESTYLE_DOTTED,
          },
          {
            html:
              '<div class="tv-line-style-option tv-line-style-option--dashed"/>',
            value: l.LINESTYLE_DASHED,
          },
        ]);
      }
      var n, a, l;
      i.r(t),
        i('P5fv'),
        i('oA7e'),
        (n = (function () {
          function e(e, t) {
            (this.value = e), (this.html = t), (this.jqItem = this._render());
          }
          return (
            (e.prototype.eq = function (e) {
              return this.value === e;
            }),
            (e.prototype.width = function () {
              return this.jqItem.width();
            }),
            (e.prototype.render = function () {
              return this.jqItem;
            }),
            (e.prototype.select = function (e) {
              this.jqItem.toggleClass('selected', !!e);
            }),
            (e.prototype.selectAndReturnIfValueMatch = function (e) {
              return this.eq(e)
                ? (this.select(!0), this)
                : (this.select(!1), null);
            }),
            (e.prototype._render = function () {
              return $('<div class="item">').append(
                $('<span>').html(this.html),
              );
            }),
            e
          );
        })()),
        (a = (function () {
          function e(e) {
            var t = this;
            (this._disabled = !1),
              (this._closeCb = null),
              (this.opened = !1),
              (this._value = null),
              (this.items = []),
              (this.width = 0),
              (this._jqWrapper = $('<div class="custom-select">')),
              this._jqWrapper.data({
                disable: this.disable.bind(this),
                enable: this.enable.bind(this),
              }),
              this._jqWrapper.selectable(!1),
              (this._jqSwitcher = $('<div class="switcher">').appendTo(
                this._jqWrapper,
              )),
              this._jqSwitcher.on('click', function () {
                t.toggleItems();
              }),
              (this._jqTitle = $('<span class="title">').appendTo(
                this._jqSwitcher,
              )),
              $('<span class="icon">').appendTo(this._jqSwitcher),
              (this._jqItems = $('<div class="items js-hidden">').appendTo(
                this._jqWrapper,
              )),
              (this._callback = null),
              e && this.addItems(e);
          }
          return (
            (e.prototype.toggleItems = function () {
              this.opened ? this._close() : this._open();
            }),
            (e.prototype.setWidth = function () {
              this._jqWrapper.width(this.width);
            }),
            (e.prototype.render = function () {
              return this._jqWrapper;
            }),
            (e.prototype.selectItemByValue = function (e) {
              var t,
                i,
                o,
                n = null;
              for (t = 0, i = this.items; t < i.length; t++)
                (o = i[t].selectAndReturnIfValueMatch(e)) && (n = o);
              return n;
            }),
            (e.prototype.setValue = function (e) {
              if (this._value !== e) {
                var t = this.selectItemByValue(e);
                t &&
                  ((this._value = e),
                  this._jqTitle.html(t.html),
                  this.change());
              }
            }),
            (e.prototype.change = function (e) {
              e
                ? (this._callback = e)
                : this._callback && this._callback.call(this);
            }),
            (e.prototype.value = function () {
              return this._value;
            }),
            (e.prototype.val = function (e) {
              return void 0 !== e ? void this.setValue(e) : this.value();
            }),
            (e.prototype.addItems = function (e) {
              var t, i, o;
              for (t = 0, i = e; t < i.length; t++)
                (o = i[t]), this.addItem(o.value, o.html);
            }),
            (e.prototype.addItem = function (e, t) {
              var i,
                o = this,
                a = new n(e, t);
              this.items.push(a),
                (i = a.render()).on('click', function () {
                  o.setValue(e), o.toggleItems();
                }),
                this._jqItems.append(i),
                null === this.value() && this.setValue(e);
            }),
            (e.prototype.disable = function () {
              this._disabled = !0;
            }),
            (e.prototype.enable = function () {
              this._disabled = !1;
            }),
            (e.prototype.disabled = function () {
              return this._disabled;
            }),
            (e.prototype._open = function () {
              var e = this;
              this._disabled ||
                (this._jqItems.removeClass('js-hidden'),
                this._jqSwitcher.addClass('open'),
                (this.opened = !0),
                this._closeCb ||
                  ((this._closeCb = {
                    host: this._jqSwitcher.prop('ownerDocument'),
                    cb: function (t) {
                      e._jqWrapper[0].contains(t.target) || e._close();
                    },
                  }),
                  this._closeCb.host.addEventListener(
                    'mousedown',
                    this._closeCb.cb,
                    !1,
                  )));
            }),
            (e.prototype._close = function () {
              this._jqItems.addClass('js-hidden'),
                this._jqSwitcher.removeClass('open'),
                (this.opened = !1),
                this._closeCb &&
                  (this._closeCb.host.removeEventListener(
                    'mousedown',
                    this._closeCb.cb,
                    !1,
                  ),
                  (this._closeCb = null));
            }),
            e
          );
        })()),
        (l = i('8Uy/')),
        i.d(t, 'createLineStyleEditor', function () {
          return o;
        });
    },
    '04K5': function (e, t, i) {
      'use strict';
      function o() {}
      var n = i('Kxc7'),
        a = i('DxCR'),
        l = a.PropertyPage,
        r = a.GreateTransformer,
        s = a.LessTransformer,
        p = a.ToIntTransformer,
        d = a.ToFloatTransformer,
        h = a.SimpleStringBinder,
        c = a.SimpleComboBinder,
        b = a.ColorBinding,
        u = a.BooleanBinder,
        C = a.SliderBinder,
        y = a.generateLabelElementStr,
        g = i('dfhE'),
        w = i('n5al').chartStyleStudyId,
        T = i('owyi').createPriceSourceEditor,
        _ = i('zXvd').NumericFormatter,
        m = i('PC8g').trackEvent;
      inherit(o, l),
        (o.prototype.i18nCache = [
          window.t('Style'),
          window.t('Box size assignment method'),
          window.t('Color Bars Based on Previous Close'),
          window.t('Candles'),
          window.t('Borders'),
          window.t('Wick'),
          window.t('HLC Bars'),
          window.t('Price Source'),
          window.t('Type'),
          window.t(
            'Show real prices on price scale (instead of Heikin-Ashi price)',
          ),
          window.t('Up bars'),
          window.t('Down bars'),
          window.t('Projection up bars'),
          window.t('Projection down bars'),
          window.t('Projection Up Color'),
          window.t('Projection Down Color'),
          window.t('Line'),
          window.t('Fill'),
          window.t('Up Color'),
          window.t('Down Color'),
          window.t('Traditional'),
          window.t('ATR Length'),
          window.t('Number Of Line'),
          window.t('Reversal Amount'),
          window.t('Box Size'),
          window.t('Phantom Bars'),
          window.t('One Step Back Building'),
        ]),
        (o.prototype.getInputTitle = function (e, t) {
          return 'style' === e
            ? window.t('Box size assignment method')
            : 'boxSize' === e
            ? window.t('Box Size')
            : t.inputInfo
            ? window.t(t.inputInfo[e].name.value())
            : e.toLowerCase().replace(/\b\w/g, function (e) {
                return e.toUpperCase();
              });
        }),
        (o.prototype.prepareLayoutImpl = function (e, t, i, o) {
          function n(t) {
            b.refreshStateControls(l, e.inputs, i.inputs);
          }
          function a(e) {
            return new _().format(e);
          }
          var l, b, C, T, m, f, L, v, S, k, x, B, P, R, E, F, D, I, A, W, V;
          for (o = o || {}, l = {}, b = this, C = 0; C < e.inputs.length; C++) {
            (m = (T = e.inputs[C]).id),
              (L =
                e.name === w(g.STYLE_RENKO) ||
                e.name === w(g.STYLE_KAGI) ||
                e.name === w(g.STYLE_PB)),
              e.name === w(g.STYLE_PNF) &&
                'sources' === m &&
                (T.options = T.options.filter(function (e) {
                  return 'HL' === e || 'Close' === e;
                }));
            try {
              f = this.getInputTitle(m, i);
            } catch (e) {
              continue;
            }
            if (
              !(
                (e.name === w(g.STYLE_RENKO) && 'wicks' === m) ||
                (e.name === w(g.STYLE_RANGE) && 'range' === m)
              ) &&
              (!L || 'source' !== m)
            ) {
              if (
                ((v = $('<tr/>')),
                (k = this._labelToId(m)),
                e.name === w(g.STYLE_RANGE) &&
                  'phantomBars' === m &&
                  (S = $('<table><tr></tr></table>')).appendTo(v),
                T.isHidden || v.appendTo(t),
                e.name === w(g.STYLE_RANGE) &&
                  'phantomBars' === m &&
                  (v = S.find('tr')),
                (x = $(
                  '<td' +
                    (o.nameColspan
                      ? ' colspan = "' + o.nameColspan + '"'
                      : '') +
                    '/>',
                )).addClass('propertypage-name-label'),
                x.html(y(f, k)),
                (e.name === w(g.STYLE_RANGE) && 'phantomBars' === m) ||
                  x.appendTo(v),
                (B = $(
                  '<td' +
                    (o.valueColspan
                      ? ' colspan = "' + o.valueColspan + '"'
                      : '') +
                    '/>',
                )).appendTo(v),
                (P = null),
                T.options)
              )
                for (
                  P = $("<select id='" + k + "' />"), R = 0;
                  R < T.options.length;
                  R++
                )
                  (E = T.options[R]),
                    $(
                      "<option value='" + E + "'>" + $.t(E) + '</option>',
                    ).appendTo(P);
              else
                (F = 'bool' === T.type ? 'checkbox' : 'text'),
                  (P = $("<input id='" + k + "' type='" + F + "' />"));
              P.appendTo(B),
                (e.name === w(g.STYLE_RANGE) && 'phantomBars' === m) ||
                  P.css('width', '100px'),
                e.name === w(g.STYLE_RANGE) &&
                  'phantomBars' === m &&
                  x.appendTo(v),
                (D = 'Change ' + f),
                T.options
                  ? this.bindControl(
                      new c(P, i.inputs[m], null, !0, this.model(), D),
                    )
                  : 'integer' === T.type
                  ? ((I = [p(T.defval)]),
                    T.min && I.push(r(T.min)),
                    T.max && I.push(s(T.max)),
                    this.bindControl(
                      new h(P, i.inputs[m], I, !1, this.model(), D),
                    ),
                    P.addClass('ticker'))
                  : 'float' === T.type
                  ? ((I = [d(T.defval)]),
                    T.min &&
                      ((((e.id === w(g.STYLE_RENKO) ||
                        e.id === w(g.STYLE_PNF)) &&
                        'boxSize' === T.id) ||
                        (e.id === w(g.STYLE_KAGI) &&
                          'reversalAmount' === T.id)) &&
                        null !==
                          (W = this._model.model().mainSeries().symbolInfo()) &&
                        (A = W.minmov / W.pricescale),
                      I.push(r(A || T.min))),
                    T.max && I.push(s(T.max)),
                    (V = new h(
                      P,
                      i.inputs[m],
                      I,
                      !1,
                      this.model(),
                      D,
                    )).addFormatter(a),
                    this.bindControl(V),
                    P.addClass('ticker'))
                  : 'text' === T.type
                  ? this.bindControl(
                      new h(
                        P,
                        this._property.inputs[m],
                        null,
                        !1,
                        this.model(),
                        D,
                      ),
                    )
                  : 'bool' === T.type &&
                    this.bindControl(
                      new u(P, i.inputs[m], !0, this.model(), D),
                    ),
                P.change(n),
                (l[T.id] = v);
            }
          }
          this.refreshStateControls(l, e.inputs, i.inputs);
        }),
        (o.prototype.getMetaInfo = function (e) {
          var t,
            i = this._model.m_model._studiesMetaData;
          for (t = 0; t < i.length; t++) if (i[t].id === e) return i[t];
          return null;
        }),
        (o.prototype._isShowStyleSwitcher = function () {
          return !1;
        }),
        (o.prototype._isJapaneseChartsAvailable = function () {
          return !0;
        }),
        (o.prototype._isHiLoChartsAvailable = function () {
          return n.enabled('chart_style_hilo');
        }),
        (o.prototype._prepareSeriesStyleLayout = function (e, t, i, o) {
          var a,
            l,
            d,
            y,
            w,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B,
            P,
            R,
            E,
            F,
            D,
            I,
            A,
            W,
            V,
            O,
            z,
            M,
            Y,
            q,
            H,
            N,
            G,
            j,
            U,
            K,
            Q,
            X,
            Z,
            J,
            ee,
            te,
            ie,
            oe,
            ne,
            ae,
            le,
            re,
            se,
            pe,
            de,
            he,
            ce,
            be,
            ue,
            Ce,
            ye,
            ge,
            $e,
            we,
            Te,
            _e,
            me,
            fe,
            Le,
            ve,
            Se = $('<tbody>').appendTo(e),
            ke = (this._candlesColorerTbody = $('<tbody>').appendTo(t)),
            xe = (this._barsColorerTbody = $('<tbody>').appendTo(t)),
            Be = (this._haColorerTbody = $('<tbody>').appendTo(t)),
            Pe = (this._candlesTbody = $('<tbody>').appendTo(i)),
            Re = (this._hollowCandlesTbody = $('<tbody>').appendTo(i)),
            Ee = (this._haTbody = $('<tbody>').appendTo(i)),
            Fe = (this._barsTbody = $('<tbody>').appendTo(i)),
            De = (this._lineTbody = $('<tbody>').appendTo(i)),
            Ie = (this._areaTbody = $('<tbody>').appendTo(i)),
            Ae = null;
          this._isHiLoChartsAvailable() &&
            (Ae = this._hiloTbody = $('<tbody>').appendTo(i)),
            (a = this._baselineTbody = $('<tbody>').appendTo(i)),
            this._isShowStyleSwitcher() &&
              ((d = this.addLabeledRow(Se, 'Style')),
              (y = $(document.createElement('td')).appendTo(d)).addClass(
                'property-wide-select',
              ),
              (l = $(document.createElement('select'))),
              $(
                '<option value=' +
                  g.STYLE_BARS +
                  '>' +
                  $.t('Bars') +
                  '</option>',
              ).appendTo(l),
              $(
                '<option value=' +
                  g.STYLE_CANDLES +
                  '>' +
                  $.t('Candles') +
                  '</option>',
              ).appendTo(l),
              $(
                '<option value=' +
                  g.STYLE_HOLLOW_CANDLES +
                  '>' +
                  $.t('Hollow Candles') +
                  '</option>',
              ).appendTo(l),
              this._isJapaneseChartsAvailable() &&
                $(
                  '<option value=' +
                    g.STYLE_HEIKEN_ASHI +
                    '>' +
                    $.t('Heikin Ashi') +
                    '</option>',
                ).appendTo(l),
              $(
                '<option value=' +
                  g.STYLE_LINE +
                  '>' +
                  $.t('Line') +
                  '</option>',
              ).appendTo(l),
              $(
                '<option value=' +
                  g.STYLE_AREA +
                  '>' +
                  $.t('Area') +
                  '</option>',
              ).appendTo(l),
              $(
                '<option value=' +
                  g.STYLE_BASELINE +
                  '>' +
                  $.t('Baseline') +
                  '</option>',
              ).appendTo(l),
              this._isHiLoChartsAvailable() &&
                $(
                  '<option value=' +
                    g.STYLE_HILO +
                    '>' +
                    $.t('High-Low') +
                    '</option>',
                ).appendTo(l),
              l.css('width', '100px').appendTo(y),
              this.switchStyle(),
              this.bindControl(
                new c(
                  l,
                  o.style,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Series Style',
                ),
              )),
            o.style.listeners().subscribe(this, this.switchStyle),
            (w = this.createColorPicker()),
            (_ = this.createColorPicker()),
            (m = this.createColorPicker()),
            (f = this.createColorPicker()),
            (L = this.createColorPicker()),
            (v = this.createColorPicker()),
            (S = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(L).add(v),
            )),
            (k = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(m).add(f),
            )),
            (x = $("<input type='checkbox'/>")),
            (B = this.addLabeledRow(
              ke,
              'Color Bars Based on Previous Close',
              x,
            )),
            $('<td>').append(x).prependTo(B),
            (B = this.addLabeledRow(Pe, 'Candles')),
            $('<td>').prependTo(B),
            $('<td>').append(w).appendTo(B),
            $('<td>').append(_).appendTo(B),
            (B = this.addLabeledRow(Pe, 'Borders', S)),
            $('<td>').append(S).prependTo(B),
            $('<td>').append(L).appendTo(B),
            $('<td>').append(v).appendTo(B),
            (B = this.addLabeledRow(Pe, 'Wick', k)),
            $('<td>').append(k).prependTo(B),
            $('<td>').append(m).appendTo(B),
            $('<td>').append(f).appendTo(B),
            this.bindControl(
              new b(
                w,
                o.candleStyle.upColor,
                !0,
                this.model(),
                'Change Candle Up Color',
              ),
            ),
            this.bindControl(
              new b(
                _,
                o.candleStyle.downColor,
                !0,
                this.model(),
                'Change Candle Down Color',
              ),
            ),
            this.bindControl(
              new u(
                k,
                o.candleStyle.drawWick,
                !0,
                this.model(),
                'Change Candle Wick Visibility',
              ),
            ),
            this.bindControl(
              new b(
                m,
                o.candleStyle.wickUpColor,
                !0,
                this.model(),
                'Change Candle Wick Up Color',
              ),
            ),
            this.bindControl(
              new b(
                f,
                o.candleStyle.wickDownColor,
                !0,
                this.model(),
                'Change Candle Wick Down Color',
              ),
            ),
            this.bindControl(
              new u(
                S,
                o.candleStyle.drawBorder,
                !0,
                this.model(),
                'Change Candle Border Visibility',
              ),
            ),
            this.bindControl(
              new b(
                L,
                o.candleStyle.borderUpColor,
                !0,
                this.model(),
                'Change Candle Up Border Color',
              ),
            ),
            this.bindControl(
              new b(
                v,
                o.candleStyle.borderDownColor,
                !0,
                this.model(),
                'Change Candle Down Border Color',
              ),
            ),
            this.bindControl(
              new u(
                x,
                o.candleStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                'Change Color Bars Based on Previous Close',
              ),
            ),
            (P = this.createColorPicker()),
            (R = this.createColorPicker()),
            (E = this.createColorPicker()),
            (F = this.createColorPicker()),
            (D = this.createColorPicker()),
            (I = this.createColorPicker()),
            (A = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(D).add(I),
            )),
            (W = $("<input type='checkbox' class='visibility-switch'/>").data(
              'hides',
              $(E).add(F),
            )),
            (B = this.addLabeledRow(Re, 'Candles')),
            $('<td>').prependTo(B),
            $('<td>').append(P).appendTo(B),
            $('<td>').append(R).appendTo(B),
            (B = this.addLabeledRow(Re, 'Borders', A)),
            $('<td>').append(A).prependTo(B),
            $('<td>').append(D).appendTo(B),
            $('<td>').append(I).appendTo(B),
            (B = this.addLabeledRow(Re, 'Wick', W)),
            $('<td>').append(W).prependTo(B),
            $('<td>').append(E).appendTo(B),
            $('<td>').append(F).appendTo(B),
            this.bindControl(
              new b(
                P,
                o.hollowCandleStyle.upColor,
                !0,
                this.model(),
                'Change Hollow Candle Up Color',
              ),
            ),
            this.bindControl(
              new b(
                R,
                o.hollowCandleStyle.downColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Color',
              ),
            ),
            this.bindControl(
              new u(
                W,
                o.hollowCandleStyle.drawWick,
                !0,
                this.model(),
                'Change Hollow Candle Wick Visibility',
              ),
            ),
            this.bindControl(
              new b(
                E,
                o.hollowCandleStyle.wickUpColor,
                !0,
                this.model(),
                'Change Hollow Candle Wick Up Color',
              ),
            ),
            this.bindControl(
              new b(
                F,
                o.hollowCandleStyle.wickDownColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Wick Color',
              ),
            ),
            this.bindControl(
              new u(
                A,
                o.hollowCandleStyle.drawBorder,
                !0,
                this.model(),
                'Change Hollow Candle Border Visibility',
              ),
            ),
            this.bindControl(
              new b(
                D,
                o.hollowCandleStyle.borderUpColor,
                !0,
                this.model(),
                'Change Hollow Candle Up Border Color',
              ),
            ),
            this.bindControl(
              new b(
                I,
                o.hollowCandleStyle.borderDownColor,
                !0,
                this.model(),
                'Change Hollow Candle Down Border Color',
              ),
            ),
            (V = $("<input type='checkbox'/>")),
            (B = this.addLabeledRow(
              xe,
              'Color Bars Based on Previous Close',
              V,
            )),
            $('<td>').append(V).prependTo(B),
            (O = $("<input type='checkbox'/>")),
            (B = this.addLabeledRow(xe, 'HLC Bars', O)),
            $('<td>').append(O).prependTo(B),
            (z = this.addColorPickerRow(Fe, 'Up Color')),
            (M = this.addColorPickerRow(Fe, 'Down Color')),
            (Y = this._addThinBarsEditorRow(Fe)),
            this.bindControl(
              new b(
                z,
                o.barStyle.upColor,
                !0,
                this.model(),
                'Change Bar Up Color',
              ),
            ),
            this.bindControl(
              new b(
                M,
                o.barStyle.downColor,
                !0,
                this.model(),
                'Change Bar Down Color',
              ),
            ),
            this.bindControl(
              new u(
                V,
                o.barStyle.barColorsOnPrevClose,
                !0,
                this.model(),
                'Change Color Bars Based on Previous Close',
              ),
            ),
            this.bindControl(
              new u(
                O,
                o.barStyle.dontDrawOpen,
                !0,
                this.model(),
                'Change HLC Bars',
              ),
            ),
            this.bindControl(
              new u(
                Y,
                o.barStyle.thinBars,
                !0,
                this.model(),
                'Change Thin Bars',
              ),
            ),
            o.hiloStyle &&
              ((q = this.createColorPicker()),
              (H = this.createColorPicker()),
              (N = this.createColorPicker()),
              (G = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(H),
              )),
              (j = $("<input type='checkbox' class='visibility-switch'/>").data(
                'hides',
                $(N),
              )),
              (B = this.addLabeledRow(Ae, 'Bodies')),
              $('<td>').prependTo(B),
              $('<td>').append(q).appendTo(B),
              (B = this.addLabeledRow(Ae, 'Borders', G)),
              $('<td>').append(G).prependTo(B),
              $('<td>').append(H).appendTo(B),
              (U = this.createFontSizeEditor()),
              (B = this.addLabeledRow(Ae, 'Labels', j)),
              $('<td>').append(j).prependTo(B),
              $('<td>').append(N).appendTo(B),
              $('<td>').append(U).appendTo(B),
              this.bindControl(
                new b(
                  q,
                  o.hiloStyle.color,
                  !0,
                  this.model(),
                  'Change High-Low Bodies Color',
                ),
              ),
              this.bindControl(
                new u(
                  G,
                  o.hiloStyle.showBorders,
                  !0,
                  this.model(),
                  'Change Show High-Low Borders',
                ),
              ),
              this.bindControl(
                new b(
                  H,
                  o.hiloStyle.borderColor,
                  !0,
                  this.model(),
                  'Change High-Low Border Color',
                ),
              ),
              this.bindControl(
                new u(
                  j,
                  o.hiloStyle.showLabels,
                  !0,
                  this.model(),
                  'Change Show High-Low Labels',
                ),
              ),
              this.bindControl(
                new b(
                  N,
                  o.hiloStyle.labelColor,
                  !0,
                  this.model(),
                  'Change High-Low Labels Color',
                ),
              ),
              this.bindControl(
                new c(
                  U,
                  o.hiloStyle.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  'Change High-Low Labels Font Size',
                ),
              )),
            (K = T()),
            (B = this.addLabeledRow(De, 'Price Source')),
            $('<td colspan="3">').append(K).appendTo(B),
            (Q = this.addLabeledRow(De, 'Type')),
            (X = $('<td colspan="3">').appendTo(Q)).addClass(
              'property-wide-select',
            ),
            (Z = $(document.createElement('select'))),
            $(
              '<option value=' +
                g.STYLE_LINE_TYPE_SIMPLE +
                '>' +
                $.t('Simple') +
                '</option>',
            ).appendTo(Z),
            $(
              '<option value=' +
                g.STYLE_LINE_TYPE_MARKERS +
                '>' +
                $.t('With Markers') +
                '</option>',
            ).appendTo(Z),
            $(
              '<option value=' +
                g.STYLE_LINE_TYPE_STEP +
                '>' +
                $.t('Step') +
                '</option>',
            ).appendTo(Z),
            Z.appendTo(X),
            (B = this.addLabeledRow(De, 'Line')),
            (J = this.createColorPicker()),
            (ee = this.createLineWidthEditor()),
            $('<td>').append(J).appendTo(B),
            $('<td>').append(ee).appendTo(B),
            this.bindControl(
              new c(
                K,
                o.lineStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            ),
            this.bindControl(
              new c(
                Z,
                o.lineStyle.styleType,
                parseInt,
                !0,
                this.model(),
                'Change Line Type',
              ),
            ),
            this.bindControl(
              new b(
                J,
                o.lineStyle.color,
                !0,
                this.model(),
                'Change Line Color',
              ),
            ),
            this.bindControl(
              new C(
                ee,
                o.lineStyle.linewidth,
                !0,
                this.model(),
                'Change Line Width',
              ),
            ),
            o.haStyle &&
              ((te = this.createColorPicker()),
              (ie = this.createColorPicker()),
              (oe = this.createColorPicker()),
              (ne = this.createColorPicker()),
              (ae = this.createColorPicker()),
              (le = this.createColorPicker()),
              (re = $(
                "<input type='checkbox' class='visibility-switch'/>",
              ).data('hides', $(ae).add(le))),
              (se = $(
                "<input type='checkbox' class='visibility-switch'/>",
              ).data('hides', $(oe).add(ne))),
              (pe = $("<input type='checkbox'/>")),
              (B = this.addLabeledRow(
                Be,
                $.t('Color Bars Based on Previous Close'),
                pe,
              )),
              $('<td>').append(pe).prependTo(B),
              (B = this.addLabeledRow(Ee, $.t('Candles'))),
              $('<td>').prependTo(B),
              $('<td>').append(te).appendTo(B),
              $('<td>').append(ie).appendTo(B),
              (B = this.addLabeledRow(Ee, $.t('Borders'), re)),
              $('<td>').append(re).prependTo(B),
              $('<td>').append(ae).appendTo(B),
              $('<td>').append(le).appendTo(B),
              (B = this.addLabeledRow(Ee, $.t('Wick'), se)),
              $('<td>').append(se).prependTo(B),
              $('<td>').append(oe).appendTo(B),
              $('<td>').append(ne).appendTo(B),
              this.bindControl(
                new b(
                  te,
                  o.haStyle.upColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Up Color',
                ),
              ),
              this.bindControl(
                new b(
                  ie,
                  o.haStyle.downColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Down Color',
                ),
              ),
              this.bindControl(
                new u(
                  se,
                  o.haStyle.drawWick,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Visibility',
                ),
              ),
              this.bindControl(
                new b(
                  oe,
                  o.haStyle.wickUpColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Up Color',
                ),
              ),
              this.bindControl(
                new b(
                  ne,
                  o.haStyle.wickDownColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Wick Down Color',
                ),
              ),
              this.bindControl(
                new u(
                  re,
                  o.haStyle.drawBorder,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Border Visibility',
                ),
              ),
              this.bindControl(
                new b(
                  ae,
                  o.haStyle.borderUpColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Up Border Color',
                ),
              ),
              this.bindControl(
                new b(
                  le,
                  o.haStyle.borderDownColor,
                  !0,
                  this.model(),
                  'Change Heikin Ashi Down Border Color',
                ),
              ),
              this.bindControl(
                new u(
                  pe,
                  o.haStyle.barColorsOnPrevClose,
                  !0,
                  this.model(),
                  'Change Color Bars Based on Previous Close',
                ),
              )),
            this._isJapaneseChartsAvailable() &&
              n.enabled('japanese_chart_styles'),
            (de = T()),
            (B = this.addLabeledRow(Ie, 'Price Source')),
            $('<td colspan="3">').appendTo(B).append(de),
            (he = this.createColorPicker()),
            (ce = this.createLineWidthEditor()),
            (B = this.addLabeledRow(Ie, 'Line')),
            $('<td>').appendTo(B).append(he),
            $('<td colspan="2">').appendTo(B).append(ce),
            (be = this.createColorPicker()),
            (ue = this.createColorPicker()),
            (B = this.addLabeledRow(Ie, 'Fill')),
            $('<td>').appendTo(B).append(be),
            $('<td>').appendTo(B).append(ue),
            this.bindControl(
              new c(
                de,
                o.areaStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            ),
            this.bindControl(
              new b(
                he,
                o.areaStyle.linecolor,
                !0,
                this.model(),
                'Change Line Color',
              ),
            ),
            this.bindControl(
              new C(
                ce,
                o.areaStyle.linewidth,
                !0,
                this.model(),
                'Change Line Width',
              ),
            ),
            this.bindControl(
              new b(
                be,
                o.areaStyle.color1,
                !0,
                this.model(),
                'Change Line Color',
                o.areaStyle.transparency,
              ),
            ),
            this.bindControl(
              new b(
                ue,
                o.areaStyle.color2,
                !0,
                this.model(),
                'Change Line Color',
                o.areaStyle.transparency,
              ),
            ),
            (Ce = T()),
            (B = this.addLabeledRow(a, window.t('Price Source'))),
            $('<td colspan="3">').appendTo(B).append(Ce),
            this.bindControl(
              new c(
                Ce,
                o.baselineStyle.priceSource,
                null,
                !0,
                this.model(),
                'Change Price Source',
              ),
            ),
            (ye = this.createColorPicker()),
            (ge = this.createLineWidthEditor()),
            (B = this.addLabeledRow(a, window.t('Top Line'))),
            $('<td>').appendTo(B).append(ye),
            $('<td>').appendTo(B).append(ge),
            this.bindControl(
              new b(
                ye,
                o.baselineStyle.topLineColor,
                !0,
                this.model(),
                'Change Top Line Color',
              ),
            ),
            this.bindControl(
              new C(
                ge,
                o.baselineStyle.topLineWidth,
                !0,
                this.model(),
                'Change Top Line Width',
              ),
            ),
            ($e = this.createColorPicker()),
            (we = this.createLineWidthEditor()),
            (B = this.addLabeledRow(a, window.t('Bottom Line'))),
            $('<td>').appendTo(B).append($e),
            $('<td>').appendTo(B).append(we),
            this.bindControl(
              new b(
                $e,
                o.baselineStyle.bottomLineColor,
                !0,
                this.model(),
                'Change Bottom Line Color',
              ),
            ),
            this.bindControl(
              new C(
                we,
                o.baselineStyle.bottomLineWidth,
                !0,
                this.model(),
                'Change Bottom Line Width',
              ),
            ),
            (Te = this.createColorPicker()),
            (_e = this.createColorPicker()),
            (B = this.addLabeledRow(a, window.t('Fill Top Area'))),
            $('<td>').appendTo(B).append(Te),
            $('<td>').appendTo(B).append(_e),
            this.bindControl(
              new b(
                Te,
                o.baselineStyle.topFillColor1,
                !0,
                this.model(),
                'Change Fill Top Area Color 1',
              ),
              o.baselineStyle.transparency,
            ),
            this.bindControl(
              new b(
                _e,
                o.baselineStyle.topFillColor2,
                !0,
                this.model(),
                'Change Fill Top Area Color 2',
              ),
              o.baselineStyle.transparency,
            ),
            (me = this.createColorPicker()),
            (fe = this.createColorPicker()),
            (B = this.addLabeledRow(a, window.t('Fill Bottom Area'))),
            $('<td>').appendTo(B).append(me),
            $('<td>').appendTo(B).append(fe),
            this.bindControl(
              new b(
                me,
                o.baselineStyle.bottomFillColor1,
                !0,
                this.model(),
                'Change Fill Bottom Area Color 1',
              ),
              o.baselineStyle.transparency,
            ),
            this.bindControl(
              new b(
                fe,
                o.baselineStyle.bottomFillColor2,
                !0,
                this.model(),
                'Change Fill Bottom Area Color 2',
              ),
              o.baselineStyle.transparency,
            ),
            (B = this.addLabeledRow(a, window.t('Base Level'))),
            (Le = $('<input type="text" class="ticker">')),
            $('<td colspan="2">')
              .appendTo(B)
              .append($('<span></span>').append(Le))
              .append($('<span class="percents-label">%</span>')),
            (ve = [
              p(o.baselineStyle.baseLevelPercentage.value()),
              s(100),
              r(0),
            ]),
            this.bindControl(
              new h(
                Le,
                o.baselineStyle.baseLevelPercentage,
                ve,
                !0,
                this.model(),
                'Change Base Level',
              ),
            );
        }),
        (o.prototype._addThinBarsEditorRow = function (e) {
          var t,
            i = $("<input type='checkbox'/>"),
            o = $('<table></table>'),
            n = $('<tr></tr>').appendTo(o),
            a = this.addLabeledRow(n, window.t('Thin Bars'), i);
          return (
            $('<td>').append(i).prependTo(a),
            (t = $('<td colspan="2"></td>').append(o)),
            $('<tr>').append(t).appendTo(e),
            i.change(function () {
              i.is(':checked')
                ? m('GUI', 'Style', 'Enable thin bars')
                : m('GUI', 'Style', 'Disable thin bars');
            }),
            i
          );
        }),
        (e.exports = o);
    },
    '11dv': function (e, t, i) {
      'use strict';
      (function (t) {
        function o(e, t, i) {
          var o,
            n,
            a = t.m_model.properties();
          r.call(this, a, t),
            (o = this._series = t.mainSeries()),
            (this._chart = t.m_model),
            (this._model = t),
            (this._source = i),
            (this._property = a),
            (this._seriesProperty = o.properties()),
            (this._scaleBindings = {}),
            (this._scaleProperties = this._series.priceScale().properties()),
            this._series
              .priceScaleChanged()
              .subscribe(this, this._updateScaleProperties),
            (this._mainSeriesScaleRatioProperty = t.mainSeriesScaleRatioProperty()),
            (n = null),
            t.m_model.panes().forEach(function (e) {
              e.dataSources().forEach(function (t) {
                if (t === o) return (n = e), !1;
              });
            }),
            (this._pane = n),
            this.prepareLayout(),
            (this._themes = []),
            (this.supportThemeSwitcher = !1);
        }
        var n,
          a,
          l,
          r,
          s,
          p,
          d,
          h,
          c,
          b,
          u,
          C,
          y,
          g,
          w,
          T,
          _,
          m,
          f,
          L,
          v,
          S,
          k,
          x,
          B,
          P,
          R;
        i('YFKU'),
          (n = i('04K5')),
          (a = i('QloM')),
          (l = i('DxCR')),
          (r = l.PropertyPage),
          (s = l.GreateTransformer),
          (p = l.LessTransformer),
          (d = l.ToIntTransformer),
          (h = l.SimpleStringBinder),
          (c = l.BooleanBinder),
          (b = l.SliderBinder),
          (u = l.ColorBinding),
          (C = l.SimpleComboBinder),
          (y = l.DisabledBinder),
          l.CheckboxWVBinding,
          (g = l.ToFloatTransformerWithDynamicDefaultValue),
          (w = l.ToFloatLimitedPrecisionTransformer),
          (T = i('oXaB').PriceAxisLastValueMode),
          (_ = i('dfhE')),
          (m = i('jNEI').addColorPicker),
          (f = i('/4PT').createLineStyleEditor),
          i('bR4N').bindPopupMenu,
          (L = i('Ocx9').DefaultProperty),
          (v = i('+6ja').availableTimezones),
          i('VNzU').isMultipleLayout,
          (S = i('1ANp')),
          i('oNDq').createConfirmDialog,
          (k = i('+GxX').isFeatureEnabled),
          (x = i('PC8g').trackEvent),
          (B = i('e1ZQ').availableDateFormats),
          (P = i('ZZnO').dateFormatProperty),
          (R = i('gQ5K').DateFormatter),
          inherit(o, r),
          inherit(o, n),
          (o.prototype.setScalesOpenTab = function () {
            this.scalesTab &&
              this.scalesTab.data('layout-tab-open', a.TabOpenFrom.Override);
          }),
          (o.prototype._isAlertControlsShouldBeShown = function () {
            return (
              !k('hide-alert-controls-on-property-page') && t.enabled('alerts')
            );
          }),
          (o.prototype.setTmzOpenTab = function () {
            this.tmzSessTable &&
              this.tmzSessTable.data('layout-tab-open', a.TabOpenFrom.Override);
          }),
          (o.prototype.prepareLayout = function () {
            var e,
              i,
              o,
              n,
              l,
              r,
              y,
              L,
              v,
              k,
              B,
              P,
              R,
              E,
              F,
              D,
              I,
              A,
              W,
              V,
              O,
              z,
              M,
              Y,
              q,
              H,
              N,
              G,
              j,
              U,
              K,
              Q,
              X,
              Z,
              J,
              ee,
              te,
              ie,
              oe,
              ne,
              ae,
              le,
              re,
              se,
              pe,
              de,
              he,
              ce,
              be,
              ue,
              Ce,
              ye,
              ge,
              $e,
              we,
              Te,
              _e,
              me,
              fe,
              Le,
              ve,
              Se,
              ke,
              xe,
              Be,
              Pe,
              Re,
              Ee,
              Fe,
              De,
              Ie,
              Ae,
              We,
              Ve,
              Oe,
              ze,
              Me,
              Ye,
              qe,
              He,
              Ne,
              Ge,
              je,
              Ue,
              Ke,
              Qe,
              Xe,
              Ze,
              Je,
              et,
              tt,
              it,
              ot,
              nt,
              at,
              lt,
              rt,
              st,
              pt,
              dt,
              ht,
              ct,
              bt,
              ut,
              Ct,
              yt,
              gt,
              $t,
              wt,
              Tt,
              _t,
              mt,
              ft,
              Lt = this;
            t.enabled('chart_property_page_style') &&
              ((e = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.style)),
              (i = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.style)),
              (o = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.style)),
              this._prepareSeriesStyleLayout(e, i, o, this._seriesProperty),
              (this._hasSeriesStyleLayout = !0),
              (this._priceLineTable = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.style)),
              (r = this._priceLineTable),
              this.addLabeledRow(r, window.t('Symbol Last Value'), null, 5),
              (E = $('<input type="checkbox">')),
              (F = this.addLabeledRow(r, window.t('Show Line'), E)),
              $('<td>').append(E).prependTo(F),
              $('<td>').css('width', '9px').prependTo(F),
              this.bindControl(
                new c(
                  E,
                  this._seriesProperty.showPriceLine,
                  !0,
                  this.model(),
                  'Change Price Price Line',
                ),
              ),
              (D = $('<input type="checkbox">')),
              (I = this.addLabeledRow(
                r,
                window.t('Show Label on Price Scale'),
                D,
              )),
              $('<td>').append(D).prependTo(I),
              I.prepend('<td>'),
              this.bindControl(
                new c(
                  D,
                  this._property.scalesProperties.showSeriesLastValue,
                  !0,
                  this.model(),
                  'Change Symbol Last Value Visibility',
                ),
              ),
              (A = $('<select />')),
              $(
                '<option value="' +
                  T.LastPriceAndPercentageValue +
                  '">' +
                  window.t('Last Price And Percentage Value') +
                  '</option>',
              ).appendTo(A),
              $(
                '<option value="' +
                  T.LastValueAccordingToScale +
                  '">' +
                  window.t('Last Value According To Scale') +
                  '</option>',
              ).appendTo(A),
              $('<td colspan="2">').css('width', '370px').append(A).appendTo(I),
              this.bindControl(
                new C(
                  A,
                  this._property.scalesProperties.seriesLastValueMode,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Symbol Last Value Mode',
                ),
              ),
              A.change(function () {
                x('GUI', 'Scales', 'Edit symbol last value mode');
              }),
              (W = m($('<td>').css('width', '29px').appendTo(F))),
              this.bindControl(
                new u(
                  W,
                  this._seriesProperty.priceLineColor,
                  !0,
                  this.model(),
                  'Change Price Line Color',
                ),
              ),
              (V = this.createLineWidthEditor()),
              $('<td>').append(V).appendTo(F),
              this.bindControl(
                new b(
                  V,
                  this._seriesProperty.priceLineWidth,
                  !0,
                  this.model(),
                  'Change Price Line Width',
                ),
              ),
              (L = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.style))),
              t.enabled('chart_property_page_scales') &&
                ((O = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', a.TabNames.scales)),
                (this._scaleBindings.autoScale = {}),
                (this._scaleBindings.autoScaleDisabled = {}),
                (this._scaleBindings.autoScale.control = $(
                  '<input type="checkbox">',
                ).change(function () {
                  this.checked &&
                    setTimeout(function () {
                      Lt._model.m_model.lightUpdate();
                    }, 0);
                })),
                (z = this.addLabeledRow(
                  O,
                  window.t('Auto (Fits Data to Screen)'),
                  this._scaleBindings.autoScale.control,
                )),
                $('<td>')
                  .append(this._scaleBindings.autoScale.control)
                  .prependTo(z),
                (this._scaleBindings.lockScale = {}),
                (this._scaleBindings.lockScale.control = $(
                  "<input type='checkbox'/>",
                )),
                (M = this.addLabeledRow(
                  O,
                  window.t('Lock'),
                  this._scaleBindings.lockScale.control,
                )),
                $('<td>')
                  .append(this._scaleBindings.lockScale.control)
                  .prependTo(M),
                (Y = function (e) {
                  M.toggle(e.value() === _.STYLE_PNF);
                }),
                this._seriesProperty.style.listeners().subscribe(this, Y),
                (this._scaleBindings.percentage = {}),
                (this._scaleBindings.percentageDisabled = {}),
                (this._scaleBindings.percentage.control = $(
                  '<input type="checkbox">',
                )),
                (q = this.addLabeledRow(
                  O,
                  window.t('Percent'),
                  this._scaleBindings.percentage.control,
                )),
                $('<td>')
                  .append(this._scaleBindings.percentage.control)
                  .prependTo(q),
                (this._scaleBindings.indexedTo100 = {}),
                (this._scaleBindings.indexedTo100Disabled = {}),
                (this._scaleBindings.indexedTo100.control = $(
                  '<input type="checkbox">',
                )),
                (H = this.addLabeledRow(
                  O,
                  window.t('Indexed to 100'),
                  this._scaleBindings.indexedTo100.control,
                )),
                $('<td>')
                  .append(this._scaleBindings.indexedTo100.control)
                  .prependTo(H),
                (this._scaleBindings.log = {}),
                (this._scaleBindings.logDisabled = {}),
                (this._scaleBindings.log.control = $(
                  '<input type="checkbox">',
                )),
                (N = this.addLabeledRow(
                  O,
                  window.t('Logarithmic'),
                  this._scaleBindings.log.control,
                )),
                $('<td>').append(this._scaleBindings.log.control).prependTo(N),
                (G = $('<input type="checkbox">').change(function () {
                  this.checked &&
                    setTimeout(function () {
                      Lt._model.m_model.lightUpdate();
                    }, 0);
                })),
                (j = this.addLabeledRow(
                  O,
                  window.t('Scale Price Chart Only'),
                  G,
                )),
                $('<td>').append(G).prependTo(j),
                this.bindControl(
                  new c(
                    G,
                    this._property.scalesProperties.scaleSeriesOnly,
                    !0,
                    this.model(),
                    'Scale Series Only',
                  ),
                ),
                (this._scaleBindings.invertScale = {}),
                (U = $("<input type='checkbox'/>")),
                (this._scaleBindings.invertScale.control = U),
                (K = this.addLabeledRow(
                  O,
                  window.t('Invert Scale'),
                  this._scaleBindings.invertScale.control,
                )),
                U.change(function () {
                  x('GUI', 'Scales', 'Invert Scale');
                }),
                $('<td>')
                  .append(this._scaleBindings.invertScale.control)
                  .prependTo(K),
                (Q = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', a.TabNames.scales)),
                (X = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                )),
                (Z = this.addLabeledRow(Q, window.t('Top Margin'), X)),
                $('<td>').appendTo(Z).append(X),
                $('<td>%</td>').appendTo(Z),
                (J = [d(this._property.paneProperties.topMargin.value())]).push(
                  p(25),
                ),
                J.push(s(0)),
                this.bindControl(
                  new h(
                    X,
                    this._property.paneProperties.topMargin,
                    J,
                    !0,
                    this.model(),
                    'Top Margin',
                  ),
                ),
                (ee = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                )),
                (te = this.addLabeledRow(Q, window.t('Bottom Margin'), ee)),
                $('<td>').appendTo(te).append(ee),
                $('<td>%</td>').appendTo(te),
                (ie = [
                  d(this._property.paneProperties.bottomMargin.value()),
                ]).push(p(25)),
                ie.push(s(0)),
                this.bindControl(
                  new h(
                    ee,
                    this._property.paneProperties.bottomMargin,
                    ie,
                    !0,
                    this.model(),
                    'Bottom Margin',
                  ),
                ),
                t.enabled('chart_property_page_right_margin_editor') &&
                  ((oe = $(
                    '<input type="text" class="ticker ticker--longer-sign_8">',
                  )),
                  (ne = this.addLabeledRow(Q, window.t('Right Margin'), oe)),
                  $('<td>').appendTo(ne).append(oe),
                  $(
                    '<td>' + window.t('bars', { context: 'margin' }) + '</td>',
                  ).appendTo(ne),
                  (ae = this._chart.timeScale()),
                  (le = [d(ae.defaultRightOffsetProperty().value())]).push(
                    p(~~ae.maxRightOffset()),
                  ),
                  le.push(s(0)),
                  this.bindControl(
                    new h(
                      oe,
                      ae.defaultRightOffsetProperty(),
                      le,
                      !0,
                      this.model(),
                      'Right Margin',
                    ),
                  )),
                (re = $(
                  '<input type="text" class="ticker ticker--longer-sign_8">',
                )),
                (ne = this.addLabeledRow(Q, window.t('Price/Bar Ratio'), re)),
                (se = !0),
                (pe = function (e) {
                  this._undoModel.setScaleRatioProperty(
                    this._property,
                    e,
                    this._undoText,
                  ),
                    se &&
                      (x('GUI', 'Scales', 'Edit scale ratio value'), (se = !1));
                }),
                $('<td>').appendTo(ne).append(re),
                re.TVTicker({
                  step: this._mainSeriesScaleRatioProperty.getStepChangeValue(),
                }),
                (de = w('', 7)),
                (he = [
                  g(
                    this._mainSeriesScaleRatioProperty.value.bind(
                      this._mainSeriesScaleRatioProperty,
                    ),
                  ),
                  s(this._mainSeriesScaleRatioProperty.getMinValue()),
                  p(this._mainSeriesScaleRatioProperty.getMaxValue()),
                  de,
                ]),
                (ce = new h(
                  re,
                  this._mainSeriesScaleRatioProperty,
                  he,
                  !1,
                  this.model(),
                  'Price/Bar Ratio',
                  pe,
                )).addFormatter(de),
                this.bindControl(ce),
                (be = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2" width="100%">',
                ).data('layout-tab', a.TabNames.scales)),
                t.enabled('countdown') &&
                  ((ue = $("<input type='checkbox'>")),
                  (Ce = this.addLabeledRow(
                    be,
                    window.t('Countdown To Bar Close'),
                    ue,
                  )),
                  $('<td>').append(ue).prependTo(Ce),
                  this.bindControl(
                    new c(
                      ue,
                      this._seriesProperty.showCountdown,
                      !0,
                      this.model(),
                      'Change Show Countdown',
                    ),
                  )),
                (ye = $('<input type="checkbox">')),
                (ge = this.addLabeledRow(
                  be,
                  window.t('Indicator Last Value'),
                  ye,
                )),
                $('<td width="21px">').append(ye).prependTo(ge),
                this.bindControl(
                  new c(
                    ye,
                    this._property.scalesProperties.showStudyLastValue,
                    !0,
                    this.model(),
                    'Change Indicator Last Value Visibility',
                  ),
                ),
                ($e = $('<input type="checkbox">')),
                (we = this.addLabeledRow(
                  be,
                  window.t('Symbol Name Label'),
                  $e,
                )),
                $('<td>').append($e).prependTo(we),
                this.bindControl(
                  new c(
                    $e,
                    this._property.scalesProperties.showSymbolLabels,
                    !0,
                    this.model(),
                    'Show Symbol Labels',
                  ),
                ),
                (Te = $('<input type="checkbox">')),
                (_e = this.addLabeledRow(
                  be,
                  window.t('Indicator Name Label'),
                  Te,
                )),
                $('<td>').append(Te).prependTo(_e),
                this.bindControl(
                  new c(
                    Te,
                    this._property.scalesProperties.showStudyPlotLabels,
                    !0,
                    this.model(),
                    'Show Study Plots Labels',
                  ),
                ),
                (this._scaleBindings.alignLabels = {}),
                (this._scaleBindings.alignLabels.control = $(
                  "<input type='checkbox' />",
                )),
                (me = this.addLabeledRow(
                  be,
                  window.t('No Overlapping Labels'),
                  this._scaleBindings.alignLabels.control,
                )),
                $('<td>')
                  .append(this._scaleBindings.alignLabels.control)
                  .prependTo(me),
                this._bindScaleProperties(),
                (fe = $('<div class="property-page-column-2">')
                  .append(O)
                  .append(Q)),
                (Le = $('<div class="property-page-column-2">').append(be)),
                (v = $('<div>')
                  .css('min-width', '620px')
                  .data('layout-tab', a.TabNames.scales))
                  .append(fe)
                  .append(Le),
                (this.scalesTab = v),
                (y = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', a.TabNames.style)),
                (ve = $('<tr>')),
                $(
                  '<td>' + window.t('Price Scales Placement') + '</td>',
                ).appendTo(ve),
                y.append(ve),
                (Se = this.createPriceScaleStrategyEditor()),
                $('<td>').append(Se).appendTo(ve),
                this.bindControl(
                  new C(
                    Se,
                    this._property.priceScaleSelectionStrategyName,
                    null,
                    !0,
                    this.model(),
                    'Change Price Axises Placement',
                    function (e) {
                      this._undoModel.setPriceScaleSelectionStrategy(e);
                    },
                  ),
                ),
                (ke = $('<tr>')),
                $('<td>' + window.t('Decimal Places') + '</td>').appendTo(ke),
                (xe = this.createSeriesMinTickEditor()),
                $('<td>').append(xe).appendTo(ke),
                (Be = $('<tr>').appendTo(be)),
                (Pe = $('<td colspan="2">').appendTo(Be)),
                y.append(ke).appendTo(Pe),
                this.bindControl(
                  new C(
                    xe,
                    this._seriesProperty.minTick,
                    null,
                    !0,
                    this.model(),
                    'Change Decimal Places',
                  ),
                )),
              t.enabled('chart_property_page_background') &&
                ((Re = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                )),
                (Ee = this.createColorPicker({ hideTransparency: !0 })),
                (Fe = this.addLabeledRow(Re, window.t('Background'))),
                $('<td colspan="2">').append(Ee).appendTo(Fe),
                this.bindControl(
                  new u(
                    Ee,
                    this._property.paneProperties.background,
                    !0,
                    this.model(),
                    'Change Chart Background Color',
                  ),
                ),
                (De = this.addLabeledRow(Re, window.t('Vert Grid Lines'))),
                (Ie = this.createColorPicker()),
                $('<td>').append(Ie).appendTo(De),
                this.bindControl(
                  new u(
                    Ie,
                    this._property.paneProperties.vertGridProperties.color,
                    !0,
                    this.model(),
                    'Change Vert Grid Lines Color',
                  ),
                ),
                (Ae = f()),
                $('<td colspan="2">').append(Ae.render()).appendTo(De),
                this.bindControl(
                  new C(
                    Ae,
                    this._property.paneProperties.vertGridProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Vert Grid Lines Style',
                  ),
                ),
                (We = this.addLabeledRow(Re, window.t('Horz Grid Lines'))),
                (Ve = this.createColorPicker()),
                $('<td>').append(Ve).appendTo(We),
                this.bindControl(
                  new u(
                    Ve,
                    this._property.paneProperties.horzGridProperties.color,
                    !0,
                    this.model(),
                    'Change Horz Grid Lines Color',
                  ),
                ),
                (Oe = f()),
                $('<td colspan="2">').append(Oe.render()).appendTo(We),
                this.bindControl(
                  new C(
                    Oe,
                    this._property.paneProperties.horzGridProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Horz Grid Lines Style',
                  ),
                ),
                (ze = this.createColorPicker()),
                (Me = this.addLabeledRow(Re, window.t('Scales Text'))),
                $('<td>').append(ze).appendTo(Me),
                this.bindControl(
                  new u(
                    ze,
                    this._property.scalesProperties.textColor,
                    !0,
                    this.model(),
                    'Change Scales Text Color',
                  ),
                ),
                (Ye = this.createFontSizeEditor()),
                $('<td>').append(Ye).appendTo(Me),
                this.bindControl(
                  new C(
                    Ye,
                    this._property.scalesProperties.fontSize,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Scales Font Size',
                  ),
                ),
                (qe = this.createColorPicker()),
                (He = this.addLabeledRow(Re, window.t('Scales Lines'))),
                $('<td colspan="2">').append(qe).appendTo(He),
                this.bindControl(
                  new u(
                    qe,
                    this._property.scalesProperties.lineColor,
                    !0,
                    this.model(),
                    'Change Scales Lines Color',
                  ),
                ),
                (Ne = this.addLabeledRow(Re, window.t('Crosshair'))),
                (Ge = this.createColorPicker()),
                $('<td>').append(Ge).appendTo(Ne),
                this.bindControl(
                  new u(
                    Ge,
                    this._property.paneProperties.crossHairProperties.color,
                    !0,
                    this.model(),
                    'Change Crosshair Color',
                    this._property.paneProperties.crossHairProperties.transparency,
                  ),
                ),
                (je = f()),
                $('<td>').append(je.render()).appendTo(Ne),
                this.bindControl(
                  new C(
                    je,
                    this._property.paneProperties.crossHairProperties.style,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Crosshair Style',
                  ),
                ),
                (Ue = this.createLineWidthEditor()),
                $('<td>')
                  .append(Ue)
                  .appendTo(this.addRow(Re).prepend('<td/><td/>')),
                this.bindControl(
                  new b(
                    Ue,
                    this._property.paneProperties.crossHairProperties.width,
                    !0,
                    this.model(),
                    'Change Crosshair Width',
                  ),
                ),
                null !== (Ke = this._model.watermarkSource()) &&
                  ((Qe = Ke.properties()),
                  (Xe = $('<input type="checkbox">')),
                  (Ze = this.addLabeledRow(Re, window.t('Watermark'), Xe)),
                  Xe.prependTo(Ze.find('td')),
                  this.bindControl(
                    new c(
                      Xe,
                      Qe.visibility,
                      !0,
                      this.model(),
                      'Change Symbol Watermark Visibility',
                    ),
                  ),
                  (Je = this.createColorPicker()),
                  $('<td colspan="2">').append(Je).appendTo(Ze),
                  this.bindControl(
                    new u(
                      Je,
                      Qe.color,
                      !0,
                      this.model(),
                      'Change Symbol Watermark Color',
                    ),
                  )),
                (et = $('<table class="property-page">')),
                (tt = this.addLabeledRow(
                  et,
                  window.t('Navigation Buttons'),
                  null,
                  !0,
                )),
                (it = $(document.createElement('select'))),
                S.availableValues().forEach(function (e) {
                  $(document.createElement('option'))
                    .attr('value', e.value)
                    .text(e.title)
                    .appendTo(it);
                }),
                $('<td>').append(it).appendTo(tt),
                this.bindControl(
                  new C(
                    it,
                    S.property(),
                    null,
                    !0,
                    this.model(),
                    'Change Navigation Buttons Visibility',
                  ),
                ),
                (ot = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                )),
                (nt = $('<input type="checkbox">')),
                (at = this.addLabeledRow(ot, window.t('Symbol'), nt, 2)),
                $('<td>').append(nt).prependTo(at),
                this.bindControl(
                  new c(
                    nt,
                    this._property.paneProperties.legendProperties.showSeriesTitle,
                    !0,
                    this.model(),
                    'Change Symbol Description Visibility',
                  ),
                ),
                (lt = $(document.createElement('select'))),
                (rt = [
                  {
                    value: 'description',
                    title: window.t('Description'),
                    eventLabel: 'Description',
                  },
                  {
                    value: 'ticker',
                    title: window.t('Ticker'),
                    eventLabel: 'Ticker',
                  },
                ]).forEach(function (e) {
                  $(document.createElement('option'))
                    .attr('value', e.value)
                    .text(e.title)
                    .appendTo(lt);
                }),
                this.bindControl(
                  new C(
                    lt,
                    this._seriesProperty.statusViewStyle.symbolTextSource,
                    null,
                    !0,
                    this.model(),
                    'Change symbol legend format',
                  ),
                ),
                lt.change(function () {
                  var e = lt.val(),
                    t = rt.find(function (t) {
                      return t.value === e;
                    }).eventLabel;
                  x('GUI', 'Change symbol legend format', t);
                }),
                at
                  .find('td')
                  .eq(1)
                  .append($('<span>').css('margin-left', '30px').append(lt)),
                (st = $('<input type="checkbox">')),
                (pt = this.addLabeledRow(ot, window.t('OHLC Values'), st)),
                $('<td>').append(st).prependTo(pt),
                this.bindControl(
                  new c(
                    st,
                    this._property.paneProperties.legendProperties.showSeriesOHLC,
                    !0,
                    this.model(),
                    'Change OHLC Values Visibility',
                  ),
                ),
                (dt = $('<input type="checkbox">')),
                (ht = this.addLabeledRow(
                  ot,
                  window.t('Bar Change Values'),
                  dt,
                )),
                $('<td>').append(dt).prependTo(ht),
                this.bindControl(
                  new c(
                    dt,
                    this._property.paneProperties.legendProperties.showBarChange,
                    !0,
                    this.model(),
                    'Change Bar Change Visibility',
                  ),
                ),
                (ct = $('<input type="checkbox">')),
                (bt = this.addLabeledRow(ot, window.t('Indicator Titles'), ct)),
                $('<td>').append(ct).prependTo(bt),
                this.bindControl(
                  new c(
                    ct,
                    this._property.paneProperties.legendProperties.showStudyTitles,
                    !0,
                    this.model(),
                    'Change Indicator Titles Visibility',
                  ),
                ),
                (ut = $('<input type="checkbox">')),
                (Ct = this.addLabeledRow(
                  ot,
                  window.t('Indicator Arguments'),
                  ut,
                )),
                (yt = function (e) {
                  ut.prop('disabled', !e.value());
                }),
                $('<td>').append(ut).prependTo(Ct),
                this.bindControl(
                  new c(
                    ut,
                    this._property.paneProperties.legendProperties.showStudyArguments,
                    !0,
                    this.model(),
                    'Change Indicator Arguments Visibility',
                  ),
                ),
                this._property.paneProperties.legendProperties.showStudyTitles
                  .listeners()
                  .subscribe(this, yt),
                yt(
                  this._property.paneProperties.legendProperties
                    .showStudyTitles,
                ),
                (gt = $('<input type="checkbox">')),
                ($t = this.addLabeledRow(ot, window.t('Indicator Values'), gt)),
                $('<td>').append(gt).prependTo($t),
                this.bindControl(
                  new c(
                    gt,
                    this._property.paneProperties.legendProperties.showStudyValues,
                    !0,
                    this.model(),
                    'Change Indicator Values Visibility',
                  ),
                ),
                (wt = $('<div class="property-page-column-2">').append(Re)),
                (Tt = $('<div class="property-page-column-2">').append(ot)),
                (_t = $('<div class="property-page-column-1">').append(et)),
                (k = $('<div>')
                  .css('min-width', '620px')
                  .data('layout-tab', a.TabNames.background))
                  .append(wt)
                  .append(Tt)
                  .append(_t)),
              t.enabled('chart_property_page_timezone_sessions') &&
                ((P = $(
                  '<table class="property-page" cellspacing="0" cellpadding="2">',
                ).data('layout-tab', a.TabNames.timezoneSessions)),
                (this.tmzSessTable = P),
                (ne = $('<tr>').appendTo(P)),
                (mt = $('<td>').appendTo(ne)),
                (ft = $('<table cellspacing="0" cellpadding="0">').appendTo(
                  mt,
                )),
                this.addTimezoneEditorRow(ft),
                this.addTateFormatEditorRow(ft),
                this.createSessTable(P)),
              (t.enabled('trading_options') ||
                t.enabled('chart_property_page_trading')) &&
                (R = this.createTradingTable()),
              (n = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              )),
              (l = $(
                '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
              )
                .css({ width: '100%' })
                .data('layout-separated', !0)),
              (B = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.drawings)),
              (this._table = $()
                .add(e)
                .add(i)
                .add(o)
                .add(n)
                .add(l)
                .add(r)
                .add(L)
                .add(v)
                .add(k)
                .add(B)
                .add(P)
                .add(R)
                .add(void 0)),
              this.loadData();
          }),
          (o.prototype._bindScaleProperties = function () {
            var e,
              t,
              i,
              o,
              n,
              a = this,
              l = function (t) {
                (e = { autoScale: t }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    a._series.priceScale(),
                    this._undoText,
                  );
              };
            (this._scaleBindings.autoScale.binder = new c(
              this._scaleBindings.autoScale.control,
              this._scaleProperties.autoScale,
              !0,
              this.model(),
              'Auto Scale',
              l,
            )),
              (this._scaleBindings.autoScaleDisabled.binder = new y(
                this._scaleBindings.autoScale.control,
                this._scaleProperties.autoScaleDisabled,
                !0,
                this.model(),
                'Auto Scale',
              )),
              this.bindControl(this._scaleBindings.autoScale.binder),
              this.bindControl(this._scaleBindings.autoScaleDisabled.binder),
              (t = function (t) {
                (e = { percentage: t }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    a._series.priceScale(),
                    this._undoText,
                  );
              }),
              (this._scaleBindings.percentage.binder = new c(
                this._scaleBindings.percentage.control,
                this._scaleProperties.percentage,
                !0,
                this.model(),
                'Scale Percentage',
                t,
              )),
              (this._scaleBindings.percentageDisabled.binder = new y(
                this._scaleBindings.percentage.control,
                this._scaleProperties.percentageDisabled,
                !0,
                this.model(),
                'Scale Percentage',
              )),
              this.bindControl(this._scaleBindings.percentage.binder),
              this.bindControl(this._scaleBindings.percentageDisabled.binder),
              (i = function (t) {
                (e = { indexedTo100: t }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    a._series.priceScale(),
                    this._undoText,
                  );
              }),
              (this._scaleBindings.indexedTo100.binder = new c(
                this._scaleBindings.indexedTo100.control,
                this._scaleProperties.indexedTo100,
                !0,
                this.model(),
                'Scale Indexed to 100',
                i,
              )),
              (this._scaleBindings.indexedTo100Disabled.binder = new y(
                this._scaleBindings.indexedTo100.control,
                this._scaleProperties.percentageDisabled,
                !0,
                this.model(),
                'Scale Indexed to 100',
              )),
              this.bindControl(this._scaleBindings.indexedTo100.binder),
              this.bindControl(this._scaleBindings.indexedTo100Disabled.binder),
              (o = function (t) {
                (e = { log: t }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    a._series.priceScale(),
                    this._undoText,
                  );
              }),
              (this._scaleBindings.log.binder = new c(
                this._scaleBindings.log.control,
                this._scaleProperties.log,
                !0,
                this.model(),
                'Log Scale',
                o,
              )),
              (this._scaleBindings.logDisabled.binder = new y(
                this._scaleBindings.log.control,
                this._scaleProperties.logDisabled,
                !0,
                this.model(),
                'Log Scale',
              )),
              this.bindControl(this._scaleBindings.log.binder),
              this.bindControl(this._scaleBindings.logDisabled.binder),
              (n = function (t) {
                (e = { lockScale: t }),
                  this._undoModel.setPriceScaleMode(
                    e,
                    a._series.priceScale(),
                    this._undoText,
                  );
              }),
              (this._scaleBindings.lockScale.binder = new c(
                this._scaleBindings.lockScale.control,
                this._scaleProperties.lockScale,
                !0,
                this.model(),
                'Change lock scale',
                n,
              )),
              this.bindControl(this._scaleBindings.lockScale.binder),
              (this._scaleBindings.alignLabels.binder = new c(
                this._scaleBindings.alignLabels.control,
                this._scaleProperties.alignLabels,
                !0,
                this.model(),
                'No Overlapping Labels',
              )),
              this.bindControl(this._scaleBindings.alignLabels.binder),
              (this._scaleBindings.invertScale.binder = new c(
                this._scaleBindings.invertScale.control,
                this._scaleProperties.isInverted,
                !0,
                this.model(),
                'Invert Scale',
              )),
              this.bindControl(this._scaleBindings.invertScale.binder);
          }),
          (o.prototype._unbindScaleProperties = function () {
            this.unbindControl(this._scaleBindings.autoScale.binder),
              this.unbindControl(this._scaleBindings.autoScaleDisabled.binder),
              this.unbindControl(this._scaleBindings.percentage.binder),
              this.unbindControl(this._scaleBindings.percentageDisabled.binder),
              this.unbindControl(this._scaleBindings.indexedTo100.binder),
              this.unbindControl(
                this._scaleBindings.indexedTo100Disabled.binder,
              ),
              this.unbindControl(this._scaleBindings.log.binder),
              this.unbindControl(this._scaleBindings.logDisabled.binder),
              this.unbindControl(this._scaleBindings.lockScale.binder),
              this.unbindControl(this._scaleBindings.alignLabels.binder),
              this.unbindControl(this._scaleBindings.invertScale.binder),
              this._scaleBindings.autoScale.binder.destroy(),
              this._scaleBindings.autoScaleDisabled.binder.destroy(),
              this._scaleBindings.percentage.binder.destroy(),
              this._scaleBindings.percentageDisabled.binder.destroy(),
              this._scaleBindings.indexedTo100.binder.destroy(),
              this._scaleBindings.indexedTo100Disabled.binder.destroy(),
              this._scaleBindings.log.binder.destroy(),
              this._scaleBindings.logDisabled.binder.destroy(),
              this._scaleBindings.alignLabels.binder.destroy(),
              this._scaleBindings.invertScale.binder.destroy();
          }),
          (o.prototype._updateScaleProperties = function () {
            this._unbindScaleProperties(),
              (this._scaleProperties = this._series.priceScale().properties()),
              this._bindScaleProperties();
          }),
          (o.prototype.widget = function () {
            return this._table;
          }),
          (o.prototype.loadData = function () {
            this.superclass.prototype.loadData.call(this), this.switchStyle();
          }),
          (o.prototype.loadTheme = function (e, t, i) {}),
          (o.prototype.createTemplateButton = function (e) {
            return t.enabled('chart_property_page_template_button')
              ? (this,
                e || (e = {}),
                $(
                  '<a href="#" class="_tv-button">' +
                    window.t('Template') +
                    '<span class="icon-dropdown"></span></a>',
                ))
              : $('<span />');
          }),
          (o.prototype.createApplyToAllButton = function (e) {
            var t = $(
              '<a class="_tv-button ok">' + window.t('Apply To All') + '</a>',
            );
            return t.click(e.bind(this)), t;
          }),
          (o.prototype.switchStyle = function () {
            if (this._hasSeriesStyleLayout) {
              switch (
                ($(this._barsTbody)
                  .add(this._barsColorerTbody)
                  .add(this._candlesTbody)
                  .add(this._candlesColorerTbody)
                  .add(this._hollowCandlesTbody)
                  .add(this._lineTbody)
                  .add(this._areaTbody)
                  .add(this._haTbody)
                  .add(this._haColorerTbody)
                  .add(this._baselineTbody)
                  .add(this._hiloTbody)
                  .css('display', 'none'),
                this._seriesProperty.style.value())
              ) {
                case _.STYLE_BARS:
                  this._barsTbody.css('display', 'table-row-group'),
                    this._barsColorerTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_CANDLES:
                  this._candlesTbody.css('display', 'table-row-group'),
                    this._candlesColorerTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_HOLLOW_CANDLES:
                  this._hollowCandlesTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_LINE:
                  this._lineTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_AREA:
                  this._areaTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_HILO:
                  this._hiloTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_HEIKEN_ASHI:
                  this._haTbody.css('display', 'table-row-group'),
                    this._haColorerTbody.css('display', 'table-row-group');
                  break;
                case _.STYLE_BASELINE:
                  this._baselineTbody.css('display', 'table-row-group');
              }
              this._priceLineTable.css(
                'display',
                this._seriesProperty.style.value() === _.STYLE_HILO
                  ? 'none'
                  : 'table',
              );
            }
          }),
          (o.prototype.onResoreDefaults = function () {
            var e,
              t = this._model.model().properties().paneProperties.topMargin,
              i = this._model.model().properties().paneProperties.bottomMargin;
            t.listeners().fire(t),
              i.listeners().fire(i),
              this._chart.timeScale().restoreRightOffsetPropertyToDefault(),
              (e = this._model.model().properties().timezone)
                .listeners()
                .fire(e);
          }),
          (o.prototype.defaultProperties = function () {
            var e = this,
              t = [e._seriesProperty.extendedHours].map(function (e) {
                return { property: e, previousValue: e.value() };
              });
            return (
              setTimeout(function () {
                t.forEach(function (e) {
                  e.property.value() !== e.previousValue &&
                    e.property.listeners().fire(e.property);
                });
                var i = new L('chartproperties.paneProperties.axisProperties');
                ['autoScale', 'percentage', 'log', 'indexedTo100'].forEach(
                  function (t) {
                    var o = e._scaleProperties[t],
                      n = i[t].value();
                    n !== o.value() && o.setValue(n);
                  },
                );
              }, 0),
              [this._property, this._seriesProperty]
            );
          }),
          (o.prototype.createSessTable = function (e) {
            var t,
              i = this._chart.sessions().properties().graphics,
              o = this.createTableInTable(e),
              n = $("<input type='checkbox' />"),
              a = this.addLabeledRow(o, window.t('Session Breaks'), n),
              l = f(),
              r = this.createColorPicker(),
              s = this.createLineWidthEditor();
            return (
              $('<td>').append(n).prependTo(a),
              $('<td>').append(r).appendTo(a),
              $('<td>').append(l.render()).appendTo(a),
              $('<td>').append(s).appendTo(a),
              this.bindControl(
                new c(
                  n,
                  i.vertlines.sessBreaks.visible,
                  !0,
                  this.model(),
                  'Change Sessions Breaks visibility',
                ),
              ),
              this.bindControl(
                new u(
                  r,
                  i.vertlines.sessBreaks.color,
                  !0,
                  this.model(),
                  'Change Session Breaks color',
                ),
              ),
              this.bindControl(
                new C(
                  l,
                  i.vertlines.sessBreaks.style,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Session Breaks style',
                ),
              ),
              this.bindControl(
                new b(
                  s,
                  i.vertlines.sessBreaks.width,
                  !0,
                  this.model(),
                  'Change Session Breaks width',
                ),
              ),
              (t = this._series.isDWM()),
              n.prop('disabled', t),
              o
            );
          }),
          (o.prototype.addTimezoneEditorRow = function (e) {
            var t,
              i,
              o,
              n,
              a,
              l = $('<tr>');
            for (
              l.appendTo(e),
                (t = $('<td>')).appendTo(l),
                t.text(window.t('Time Zone')),
                (i = $('<td colspan="2" class="tzeditor">')).appendTo(l),
                o = '',
                n = 0;
              n < v.length;
              n++
            )
              o +=
                '<option value="' + v[n].id + '">' + v[n].title + '</option>';
            (a = $('<select>' + o + '</select>')).appendTo(i),
              this.bindControl(
                new C(
                  a,
                  this._property.timezone,
                  null,
                  !0,
                  this.model(),
                  'Change Timezone',
                ),
              );
          }),
          (o.prototype.addTateFormatEditorRow = function (e) {
            var t,
              i,
              o,
              n,
              a,
              l,
              r,
              s,
              p = $('<tr></tr>');
            for (
              p.appendTo(e),
                (t = $('<td>')).appendTo(p),
                t.text(window.t('Date Format')),
                (i = $('<td colspan="2" class="tzeditor">')).appendTo(p),
                o = '',
                n = new Date(Date.UTC(1997, 8, 29)),
                a = 0;
              a < B.length;
              a++
            )
              (l = new R(B[a])),
                (o +=
                  '<option value="' + B[a] + '">' + l.format(n) + '</option>');
            (r = $('<select>' + o + '</select>')).appendTo(i),
              (s = new C(
                r,
                P,
                null,
                !0,
                this.model(),
                'Change Date Format',
              )).disableAffectingSave(),
              this.bindControl(s),
              r.change(function () {
                var e = P.value();
                x('GUI', 'Change Date And Time Format', e);
              });
          }),
          (o.prototype._createStudySessRow = function (e, t, i) {
            var o = $("<input type='checkbox' />"),
              n = this.addLabeledRow(e, t, o),
              a = m($('<td>').appendTo(n));
            return (
              this.bindControl(
                new c(
                  o,
                  i.visible,
                  !0,
                  this.model(),
                  'Change ' + t + ' visibility',
                ),
              ),
              this.bindControl(
                new u(
                  a,
                  i.color,
                  !0,
                  this.model(),
                  t + ' color',
                  i.transparency,
                ),
              ),
              $('<td>').append(o).prependTo(n),
              n.addClass('offset-row'),
              o
            );
          }),
          (o.prototype.createTradingTable = function () {
            var e,
              t,
              i,
              o,
              n,
              l,
              r,
              u,
              y,
              g,
              w,
              T = $(
                '<table class="property-page" cellspacing="0" cellpadding="2">',
              ).data('layout-tab', a.TabNames.trading),
              _ = $('<tr>').appendTo(T),
              m = $('<td>').appendTo(_),
              L = $('<table cellspacing="0" cellpadding="0">').appendTo(m),
              v = $('<input type="checkbox">');
            return (
              (_ = this.addLabeledRow(L, window.t('Show Positions'), v)),
              $('<td>').append(v).prependTo(_),
              this.bindControl(
                new c(
                  v,
                  this._property.tradingProperties.showPositions,
                  !0,
                  this.model(),
                  'Change Positions Visibility',
                ),
              ),
              (e = $('<input type="checkbox">')),
              (_ = this.addLabeledRow(L, window.t('Show Orders'), e)),
              $('<td>').append(e).prependTo(_),
              this.bindControl(
                new c(
                  e,
                  this._property.tradingProperties.showOrders,
                  !0,
                  this.model(),
                  'Change Orders Visibility',
                ),
              ),
              (t = $('<input type="checkbox">')),
              (i = this.addLabeledRow(L, window.t('Extend Lines Left'), t)),
              $('<td>').append(t).prependTo(i),
              this.bindControl(
                new c(
                  t,
                  this._property.tradingProperties.extendLeft,
                  !0,
                  this.model(),
                  'Extend Lines Left',
                ),
              ),
              (o = this.createLineWidthEditor()),
              this.bindControl(
                new b(
                  o,
                  this._property.tradingProperties.lineWidth,
                  !0,
                  this.model(),
                  'Change Connecting Line Width',
                ),
              ),
              (n = f()),
              this.bindControl(
                new C(
                  n,
                  this._property.tradingProperties.lineStyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Connecting Line Style',
                ),
              ),
              (l = $('<input type="text" class="ticker">')),
              (r = [
                d(this._property.tradingProperties.lineLength.value()),
                p(100),
                s(0),
              ]),
              this.bindControl(
                new h(
                  l,
                  this._property.tradingProperties.lineLength,
                  r,
                  !0,
                  this.model(),
                  'Change Connecting Line Length',
                ),
              ),
              (u = $('<tbody>')),
              (y = this.addLabeledRow(L, window.t('Connecting Line'), u)),
              $('<td>').prependTo(y),
              $('<td>').append(o).appendTo(y),
              $('<td colspan="3">').append(n.render()).appendTo(y),
              $('<td colspan="3">').append(l).appendTo(y),
              $('<td>%</td>').appendTo(y),
              (g = $('<input type="checkbox">')),
              (w = this.addLabeledRow(L, window.t('Show Executions'), g)),
              $('<td>').append(g).prependTo(w),
              this.bindControl(
                new c(
                  g,
                  this._property.tradingProperties.showExecutions,
                  !0,
                  this.model(),
                  'Change Executions Visibility',
                ),
              ),
              T
            );
          }),
          (e.exports = o);
      }.call(this, i('Kxc7')));
    },
    '1ANp': function (e, t, i) {
      'use strict';
      function o(e) {
        return e === d.AlwaysOn || e === d.AlwaysOff ? e : d.VisibleOnMouseOver;
      }
      function n() {
        if (!h) {
          (h = Object(s.a)()).setValue(
            o(p.getValue('NavigationButtons.visibility')),
          ),
            h.subscribe(h, function (e) {
              p.setValue('NavigationButtons.visibility', o(e.value()));
            });
        }
        return h;
      }
      function a() {
        return [
          {
            value: d.VisibleOnMouseOver,
            title: window.t('Visible on Mouse Over'),
          },
          { value: d.AlwaysOn, title: window.t('Always Visible') },
          { value: d.AlwaysOff, title: window.t('Always Invisible') },
        ];
      }
      function l() {
        var e, t;
        return (
          c ||
            ((c = Object(s.a)()),
            (t = function () {
              var t = e.value();
              t !== d.AlwaysOn &&
                t !== d.AlwaysOff &&
                (t = Modernizr.mobiletouch ? d.AlwaysOn : d.VisibleOnMouseOver),
                c && c.setValue(t);
            }),
            (e = n()).subscribe(c, t),
            t()),
          c
        );
      }
      var r, s, p, d, h, c;
      i.r(t),
        i.d(t, 'VisibilityType', function () {
          return d;
        }),
        i.d(t, 'property', function () {
          return n;
        }),
        i.d(t, 'availableValues', function () {
          return a;
        }),
        i.d(t, 'actualBehavior', function () {
          return l;
        }),
        i('YFKU'),
        (r = i('bf9a')),
        (s = i('m/cY')),
        (p = i('Vdly')),
        (function (e) {
          (e.AlwaysOn = 'alwaysOn'),
            (e.VisibleOnMouseOver = 'visibleOnMouseOver'),
            (e.AlwaysOff = 'alwaysOff');
        })(d || (d = {}));
    },
    '1WFa': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n, a, l, r, s, p;
      i('YFKU'),
        (n = i('Yc1q')),
        (a = i('DxCR')),
        (l = a.SimpleComboBinder),
        (r = a.ColorBinding),
        (s = a.SliderBinder),
        (p = a.BooleanBinder),
        inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = this._linetool.getDegrees()),
            (t = this.createKeyCombo(e)).width(300),
            (i = this.createColorPicker()),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.addLabeledRow(this._table, window.t('Degree'))),
            $('<td>').prependTo(n),
            $('<td>').append(t).appendTo(n),
            (n = this.addLabeledRow(this._table, window.t('Line Width'))),
            (a = this.createLineWidthEditor()),
            $('<td>').prependTo(n),
            $('<td>').append(a).appendTo(n),
            (n = this.addLabeledRow(this._table, window.t('Color'))),
            $('<td>').prependTo(n),
            $('<td>').append(i).appendTo(n),
            (n = this.addLabeledRow(this._table, window.t('Show Wave'), o)),
            $('<td>').append(o).prependTo(n),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Elliott Label Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().degree,
                parseInt,
                !0,
                this.model(),
                'Change Elliott Wave Size',
              ),
            ),
            this.bindControl(
              new p(
                o,
                this._linetool.properties().showWave,
                !0,
                this.model(),
                'Change Elliott Labels Background',
              ),
            ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().linewidth,
                parseInt,
                this.model(),
                'Change Elliott Wave Line Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '1aTc': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      var n = i('DxCR'),
        a = n.PropertyPage,
        l = n.SimpleComboBinder,
        r = n.BooleanBinder,
        s = n.SliderBinder,
        p = n.ColorBinding,
        d = i('o6hY').StudyStylesPropertyPage;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            h,
            c,
            b,
            u,
            C = this;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = this.createFontSizeEditor()),
            (t = this.createFontEditor()),
            (i = $("<input type='checkbox' class='visibility-switch'/>")),
            (o = this.createTableInTable(this._table)),
            (n = this.addLabeledRow(o, 'Labels Font')),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n),
            (a = this.createTableInTable(this._table)),
            (n = this.addLabeledRow(a, 'Show Labels')),
            $('<td>').append(i).prependTo(n),
            (this.pivotTypes = {
              Traditional: {
                'S5/R5': !0,
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              Fibonacci: { 'S3/R3': !0, 'S2/R2': !0, 'S1/R1': !0, P: !0 },
              Woodie: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              Classic: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
              DM: { 'S1/R1': !0, P: !0 },
              DeMark: { 'S1/R1': !0, P: !0 },
              Camarilla: {
                'S4/R4': !0,
                'S3/R3': !0,
                'S2/R2': !0,
                'S1/R1': !0,
                P: !0,
              },
            }),
            this.bindControl(
              new l(
                t,
                this._study.properties().font,
                null,
                !0,
                this.model(),
                'Change Pivots Font',
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._study.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Pivots Font Size',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._property.levelsStyle.showLabels,
                !0,
                C.model(),
                'Show Pivot Labels',
              ),
            ),
            (h = this._property.levelsStyle.visibility),
            (c = this._property.levelsStyle.colors),
            (b = this._property.levelsStyle.widths),
            (C._rows = []),
            (function (e, t, i, o) {
              var n, a;
              for (n = 0; n < e._childs.length; n++)
                o(e[(a = e._childs[n])], t[a], i[a], a);
            })(h, c, b, function (e, t, i, o) {
              var n,
                l,
                d,
                h = $("<input type='checkbox' class='visibility-switch'/>");
              C.bindControl(new r(h, e, !0, C.model(), 'Change ' + o)),
                (n = C.addLabeledRow(a, o, h)),
                $('<td>').append(h).prependTo(n),
                (l = C.createColorPicker()),
                $('<td>').append(l).appendTo(n),
                C.bindControl(
                  new p(l, t, !0, C.model(), 'Change ' + o + ' color'),
                ),
                (d = C.createLineWidthEditor()),
                $('<td>').append(d).appendTo(n),
                C.bindControl(
                  new s(d, i, !0, C.model(), 'Change ' + o + ' width'),
                ),
                C._rows.push({ row: n, label: o, visibilityEditor: h });
            }),
            (u = C._study._properties.inputs.kind),
            C.lockNotUsedVisEditors(u.value()),
            u.subscribe(C, function (e) {
              C.lockNotUsedVisEditors(e.value());
            }),
            d.prototype._putStudyDefaultStyles.call(this, this._table, 3);
        }),
        (o.prototype.lockNotUsedVisEditors = function (e) {
          var t,
            i,
            o,
            n,
            a = this;
          for (t = 0; t < a._rows.length; t++)
            (o = (i = a._rows[t]).label),
              (n = a.pivotTypes[e][o]),
              i.visibilityEditor.prop('disabled', !n),
              i.row.css('opacity', n ? 1 : 0.5);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '2KYr': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.FloatBinder,
        s = a.ColorBinding,
        p = a.SimpleComboBinder,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.onResoreDefaults = function () {
          this._linetool
            .properties()
            .style.listeners()
            .fire(this._linetool.properties().style);
        }),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            e
              ? ((o = $('<td>')).appendTo(_),
                (n = $(
                  "<input type='checkbox' class='visibility-switch'>",
                )).appendTo(o),
                (a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    n,
                    t.visible,
                    !0,
                    this.model(),
                    'Change Pitchfork Line Visibility',
                  ),
                ),
                this.bindControl(
                  new r(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : ($('<td></td>').appendTo(_),
                $('<td>' + $.t('Median') + '</td>').appendTo(_)),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            (w = $('<td>')).appendTo(_),
            (T = c()).render().appendTo(w),
            this.bindControl(
              new s(
                C,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new p(
                T,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new d(
                g,
                t.linewidth,
                !0,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(null, this._linetool.properties().median, !1),
              e = 0;
            e <= 8;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                $.t('Level {0}').format(e + 1),
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $('<tr>')).appendTo(this._table),
            (o = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(o).appendTo(i),
            this.createLabeledCell('Background', o).appendTo(i),
            (n = b()),
            $('<td colspan="3">').append(n).appendTo(i),
            (a = $(
              "<select><option value='0'>" +
                $.t('Original') +
                "</option><option value='3'>" +
                $.t('Schiff') +
                "</option><option value='1'>" +
                $.t('Modified Schiff') +
                "</option><option value='2'>" +
                $.t('Inside') +
                '</option></select>',
            )),
            (i = $('<tr>')).appendTo(this._table),
            $('<td>' + $.t('Style') + '</td>').appendTo(i),
            $('<td>').append(a).appendTo(i),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().style,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Style',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfork Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                n,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfork Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '5Y1l': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, $.t('Border'))).prepend(
              '<td>',
            ),
            $('<td>').append(t).appendTo(i),
            $('<td>').append(e).appendTo(i),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, $.t('Background'), o)),
            $('<td>').append(o).prependTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Triangle Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Triangle Line Color',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Triangle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Triangle Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '5fTj': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.BooleanBinder,
        p = a.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            h,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            (n = this.addLabeledRow(e, $.t('Text'))),
            (a = this.createColorPicker()),
            (h = this.createFontSizeEditor()),
            (c = this.createFontEditor()),
            (b = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            $('<td>').append(a).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(h).appendTo(n),
            $('<td>').append(b).appendTo(n),
            $('<td>').append(u).appendTo(n),
            (C = $('<tbody>').appendTo(this._table)),
            (y = $('<input type="checkbox" class="visibility-switch">')),
            (g = this.createColorPicker()),
            (n = this.addLabeledRow(C, $.t('Background'), y)),
            (w = $('<table>')),
            $('<td colspan="5">').append(w).appendTo(n),
            (n = $('<tr>').appendTo(w)),
            $('<td>').append(y).appendTo(n),
            $('<td>').append(g).appendTo(n),
            (T = $('<tbody>').appendTo(this._table)),
            (_ = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (m = $('<input type="checkbox">').appendTo(_)),
            (f = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (L = $('<input type="checkbox">').appendTo(f)),
            (v = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (S = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (n = this.addLabeledRow(T, $.t('Left End'))),
            $('<td colspan="3">').appendTo(n).append(v).append(_),
            (n = this.addLabeledRow(T, $.t('Right End'))),
            $('<td colspan="3">').appendTo(n).append(S).append(f),
            (k = $('<tbody>').appendTo(this._table)),
            (n = $('<tr>').appendTo(k)),
            (x = $("<input type='checkbox'>")),
            (B = $("<label style='display:block'>")
              .append(x)
              .append($.t('Show Prices'))),
            $("<td colspan='2'>").append(B).appendTo(n),
            this.bindControl(
              new l(
                h,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                a,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new s(
                u,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new s(
                x,
                this._linetool.properties().showPrices,
                !0,
                this.model(),
                'Change Disjoint Angle Show Prices',
              ),
            ),
            this.bindControl(
              new s(
                m,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Left',
              ),
            ),
            this.bindControl(
              new s(
                L,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Disjoint Angle Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Style',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Disjoint Angle Width',
              ),
            ),
            this.bindControl(
              new l(
                v,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Left End',
              ),
            ),
            this.bindControl(
              new l(
                S,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Right End',
              ),
            ),
            this.bindControl(
              new s(
                y,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Disjoint Angle Filling',
              ),
            ),
            this.bindControl(
              new r(
                g,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Disjoint Angle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '68pv': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createColorPicker()),
            (t = this.createFontSizeEditor()),
            (i = this.createColorPicker()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(this._table, $.t('Text'))),
            $('<td>').append(e).appendTo(n),
            $('<td>').append(t).appendTo(n),
            (n = this.addLabeledRow(this._table, $.t('Background'))),
            $('<td>').append(i).appendTo(n),
            (n = this.addLabeledRow(this._table, $.t('Border'))),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Price Text Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Price Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Border Color',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '68yv': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.FloatBinder,
        p = a.SimpleComboBinder,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            p,
            d,
            c,
            b = $('<tr>');
          b.appendTo(e),
            (o = $('<td>')).appendTo(b),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            (a = $('<td>')).appendTo(b),
            (p = $("<input type='text'>")).appendTo(a),
            p.css('width', '70px'),
            this.bindControl(
              new l(
                n,
                i.visible,
                !0,
                this.model(),
                'Change Gann Square Line Visibility',
              ),
            ),
            this.bindControl(
              new s(
                p,
                i.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            ),
            (d = $("<td class='colorpicker-cell'>")).appendTo(b),
            (c = h(d)),
            this.bindControl(
              new r(
                c,
                i.color,
                !0,
                this.model(),
                'Change Gann Square Line Color',
                0,
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            s,
            h,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page property-page-unpadded'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this._table.css({ width: '100%' }),
              e = $('<tbody>').appendTo(this._table),
              (t = $('<tr>')).appendTo(e),
              (i = $('<td width="50%">')).appendTo(t),
              (o = $('<td width="50%">')).appendTo(t),
              (n = $('<table cellspacing="0" cellpadding="2">')).appendTo(i),
              n.addClass('property-page'),
              (a = $('<table cellspacing="0" cellpadding="2">')).appendTo(o),
              a.addClass('property-page'),
              $(
                "<tr><td align='center' colspan='4'>" +
                  $.t('Price Levels') +
                  '</td></tr>',
              ).appendTo(n),
              $(
                "<tr><td align='center' colspan='4'>" +
                  $.t('Time Levels') +
                  '</td></tr>',
              ).appendTo(a),
              s = 1;
            s <= 7;
            s++
          )
            (h = 'hlevel' + s),
              this.addLevelEditor(
                n,
                'Level ' + s,
                this._linetool.properties()[h],
              );
          for (s = 1; s <= 7; s++)
            (h = 'vlevel' + s),
              this.addLevelEditor(
                a,
                'Level ' + s,
                this._linetool.properties()[h],
              );
          this.addOneColorPropertyWidget(n),
            o.css({ 'vertical-align': 'top' }),
            (u = $("<input type='checkbox' class='visibility-switch'>")),
            (C = $("<input type='checkbox' class='visibility-switch'>")),
            (y = $("<input type='checkbox' class='visibility-switch'>")),
            (g = $("<input type='checkbox' class='visibility-switch'>")),
            (w = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' })),
            (T = $('<tr>').appendTo(w)),
            (_ = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(T))),
            (m = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(T))),
            (f = this.addLabeledRow(_, $.t('Left Labels'), u)),
            $('<td>').append(u).prependTo(f),
            (f = this.addLabeledRow(m, $.t('Right Labels'), C)),
            $('<td>').append(C).prependTo(f),
            (f = this.addLabeledRow(_, $.t('Top Labels'), y)),
            $('<td>').append(y).prependTo(f),
            (f = this.addLabeledRow(m, $.t('Bottom Labels'), g)),
            $('<td>').append(g).prependTo(f),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().showLeftLabels,
                !0,
                this.model(),
                'Change Gann Square Left Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                C,
                this._linetool.properties().showRightLabels,
                !0,
                this.model(),
                'Change Gann Square Right Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                y,
                this._linetool.properties().showTopLabels,
                !0,
                this.model(),
                'Change Gann Square Top Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().showBottomLabels,
                !0,
                this.model(),
                'Change Gann Square Bottom Labels Visibility',
              ),
            ),
            (L = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (v = this.createLineWidthEditor()),
            (S = c()),
            (k = this.createColorPicker()),
            (x = $("<input type='checkbox' class='visibility-switch'>")),
            (f = this.addLabeledRow(L, $.t('Grid'), x)),
            $('<td>').append(x).prependTo(f),
            $('<td>').append(k).appendTo(f),
            $('<td>').append(v).appendTo(f),
            $('<td>').append(S.render()).appendTo(f),
            this.bindControl(
              new l(
                x,
                this._linetool.properties().grid.visible,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Visibility',
              ),
            ),
            this.bindControl(
              new r(
                k,
                this._linetool.properties().grid.color,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Color',
                0,
              ),
            ),
            this.bindControl(
              new p(
                S,
                this._linetool.properties().grid.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Style',
              ),
            ),
            this.bindControl(
              new d(
                v,
                this._linetool.properties().grid.linewidth,
                !0,
                this.model(),
                'Change Fib Speed Resistance Fan Grid Line Width',
              ),
            ),
            (this._table = this._table.add(w).add(L)),
            (f = $('<tr>')).appendTo(L),
            (x = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(x).appendTo(f),
            this.createLabeledCell('Background', x).appendTo(f),
            (B = b()),
            $('<td colspan="3">').append(B).appendTo(f),
            this.bindControl(
              new l(
                x,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Speed/Resistance Fan Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                B,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Speed/Resistance Fan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '6rcL': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SimpleComboBinder,
        p = a.SliderBinder,
        d = i('jNEI').addColorPicker,
        h = i('/4PT').createLineStyleEditor,
        c = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i, o) {
          var n,
            a,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T = $('<tr>');
          T.appendTo(this._tbody),
            (n = 'control-level-' + i + '-' + o),
            (a = $('<td>')).appendTo(T),
            (c = $(
              "<input type='checkbox' class='visibility-switch' id='" +
                n +
                "'>",
            )).appendTo(a),
            this.createLabeledCell(e).appendTo(T).find('label').attr('for', n),
            (b = $("<td class='colorpicker-cell'>")).appendTo(T),
            (u = d(b)),
            (C = $('<td>')).appendTo(T),
            (y = this.createLineWidthEditor()).appendTo(C),
            (g = $('<td>')).appendTo(T),
            (w = h()).render().appendTo(g),
            this.bindControl(
              new l(
                c,
                t.visible,
                !0,
                this.model(),
                'Change Gann Fan Line Visibility',
              ),
            ),
            this.bindControl(
              new r(
                u,
                t.color,
                !0,
                this.model(),
                'Change Gann Fan Line Color',
                0,
              ),
            ),
            this.bindControl(
              new s(
                w,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Gann Fan Line Style',
              ),
            ),
            this.bindControl(
              new p(
                y,
                t.linewidth,
                !0,
                this.model(),
                'Change Gann Fan Line Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            r,
            s,
            d,
            h,
            b = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            u = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          for (this._tbody = $('<tbody>').appendTo(b), e = 1; e <= 9; e++)
            (t = 'level' + e),
              (a =
                '<sup>' +
                (o = (i = this._linetool.properties()[t]).coeff1.value()) +
                '</sup>&frasl;<sub>' +
                (n = i.coeff2.value()) +
                '</sub>'),
              this.addLevelEditor(a, i, o, n);
          this.addOneColorPropertyWidget(this._tbody),
            (r = $("<input type='checkbox' class='visibility-switch'>")),
            (s = this.addLabeledRow(u, $.t('Labels'), r)),
            $('<td>').append(r).prependTo(s),
            this.bindControl(
              new l(
                r,
                this._linetool.properties().showLabels,
                !0,
                this.model(),
                'Change Gann Fan Labels Visibility',
              ),
            ),
            (this._table = b.add(u)),
            (s = $('<tr>')).appendTo(this._table),
            (d = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(d).appendTo(s),
            this.createLabeledCell($.t('Background'), d).appendTo(s),
            (h = c()),
            $('<td colspan="3">').append(h).appendTo(s),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfan Background Visibility',
              ),
            ),
            this.bindControl(
              new p(
                h,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    '8TiD': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.SliderBinder,
        p = a.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, h, c;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            this._linetool.properties().fillBackground &&
              ($('<td>').prependTo(n),
              (a = $('<input type="checkbox" class="visibility-switch">')),
              (h = this.createColorPicker()),
              (c = $('<tbody>').appendTo(this._table)),
              (n = $('<tr>').appendTo(c)),
              $('<td>').append(a).appendTo(n),
              $('<td>').append($.t('Background')).appendTo(n),
              $('<td>').append(h).appendTo(n)),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Time Cycles Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Time Cycles Line Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Time Cycles Line Width',
              ),
            ),
            a &&
              (this.bindControl(
                new p(
                  a,
                  this._linetool.properties().fillBackground,
                  !0,
                  this.model(),
                  'Change Time Cycles Filling',
                ),
              ),
              this.bindControl(
                new r(
                  h,
                  this._linetool.properties().backgroundColor,
                  !0,
                  this.model(),
                  'Change Time Cycles Background Color',
                  this._linetool.properties().transparency,
                ),
              ));
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    A3Hk: function (e, t, i) {
      'use strict';
      function o() {
        var e = $('<select />');
        return (
          $(
            '<option value="' +
              n.LeftToRight +
              '">' +
              $.t('Left') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              n.RightToLeft +
              '">' +
              $.t('Right') +
              '</option>',
          ).appendTo(e),
          e
        );
      }
      var n, a;
      i.r(t),
        i('P5fv'),
        i('YFKU'),
        i('mrSG'),
        i('Eyy1'),
        i('tqok'),
        i('hsV8'),
        (function (e) {
          (e.LeftToRight = 'left_to_right'), (e.RightToLeft = 'right_to_left');
        })(n || (n = {})),
        (function (e) {
          (e.Relative = 'relative'), (e.Absolute = 'absolute');
        })(a || (a = {})),
        i.d(t, 'createHHistDirectionEditor', function () {
          return o;
        });
    },
    'B0+Q': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.FloatBinder,
        s = a.ColorBinding,
        p = a.SliderBinder,
        d = i('jNEI').addColorPicker,
        h = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            p,
            h,
            c,
            b = $('<tr>');
          b.appendTo(e),
            (o = $('<td>')).appendTo(b),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            (a = $('<td>')).appendTo(b),
            (p = $("<input type='text'>")).appendTo(a),
            p.css('width', '70px'),
            this.bindControl(
              new l(
                n,
                i.visible,
                !0,
                this.model(),
                'Change Gann Square Line Visibility',
              ),
            ),
            this.bindControl(
              new r(
                p,
                i.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            ),
            (h = $("<td class='colorpicker-cell'>")).appendTo(b),
            (c = d(h)),
            this.bindControl(
              new s(
                c,
                i.color,
                !0,
                this.model(),
                'Change Gann Square Line Color',
                0,
              ),
            );
        }),
        (o.prototype.addFannEditor = function (e) {
          var t,
            i,
            o = $('<tr>').appendTo(e),
            n = $("<input type='checkbox' class='visibility-switch'>");
          n.appendTo($('<td>').appendTo(o)),
            $('<td>' + $.t('Angles') + '</td>').appendTo(o),
            (t = $("<td class='colorpicker-cell'>").appendTo(o)),
            (i = d(t)),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().fans.visible,
                !0,
                this.model(),
                'Change Gann Square Angles Visibility',
              ),
            ),
            this.bindControl(
              new s(
                i,
                this._linetool.properties().fans.color,
                !0,
                this.model(),
                'Change Gann Square Angles Color',
                0,
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, r, s, d, c, b, u, C, y, g, w, T, _, m, f;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page property-page-unpadded'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this._table.css({ width: '100%' }),
              e = $('<tbody>').appendTo(this._table),
              (t = $('<tr>')).appendTo(e),
              (i = $('<td width="50%">')).appendTo(t),
              (o = $('<td width="50%">')).appendTo(t),
              (n = $('<table cellspacing="0" cellpadding="2">')).appendTo(i),
              n.addClass('property-page'),
              (a = $('<table cellspacing="0" cellpadding="2">')).appendTo(o),
              a.addClass('property-page'),
              $(
                "<tr><td align='center' colspan='4'>" +
                  $.t('Price Levels') +
                  '</td></tr>',
              ).appendTo(n),
              $(
                "<tr><td align='center' colspan='4'>" +
                  $.t('Time Levels') +
                  '</td></tr>',
              ).appendTo(a),
              r = 1;
            r <= 7;
            r++
          )
            (s = 'hlevel' + r),
              this.addLevelEditor(
                n,
                $.t('Level {0}').format(r),
                this._linetool.properties()[s],
              );
          for (r = 1; r <= 7; r++)
            (s = 'vlevel' + r),
              this.addLevelEditor(
                a,
                $.t('Level {0}').format(r),
                this._linetool.properties()[s],
              );
          this.addFannEditor(n),
            this.addOneColorPropertyWidget(a),
            o.css({ 'vertical-align': 'top' }),
            i.css({ 'vertical-align': 'top' }),
            (d = $("<input type='checkbox' class='visibility-switch'>")),
            (c = $("<input type='checkbox' class='visibility-switch'>")),
            (b = $("<input type='checkbox' class='visibility-switch'>")),
            (u = $("<input type='checkbox' class='visibility-switch'>")),
            (C = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' })),
            (y = $('<tr>').appendTo(C)),
            (g = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(
              $('<td>')
                .css({ width: '50%', 'vertical-align': 'top' })
                .appendTo(y),
            )),
            (w = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(
              $('<td>')
                .css({ width: '50%', 'vertical-align': 'top' })
                .appendTo(y),
            )),
            (T = this.addLabeledRow(g, $.t('Left Labels'), d)),
            $('<td>').append(d).prependTo(T),
            (T = this.addLabeledRow(w, $.t('Right Labels'), c)),
            $('<td>').append(c).prependTo(T),
            (T = this.addLabeledRow(g, $.t('Top Labels'), b)),
            $('<td>').append(b).prependTo(T),
            (T = this.addLabeledRow(w, $.t('Bottom Labels'), u)),
            $('<td>').append(u).prependTo(T),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().showLeftLabels,
                !0,
                this.model(),
                'Change Gann Square Left Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().showRightLabels,
                !0,
                this.model(),
                'Change Gann Square Right Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().showTopLabels,
                !0,
                this.model(),
                'Change Gann Square Top Labels Visibility',
              ),
            ),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().showBottomLabels,
                !0,
                this.model(),
                'Change Gann Square Bottom Labels Visibility',
              ),
            ),
            (this._table = this._table.add(C)),
            (T = $('<tr>')).appendTo(g),
            (_ = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(_).appendTo(T),
            (m = h()),
            $('<td>').append(m).appendTo(T),
            this.bindControl(
              new l(
                _,
                this._linetool.properties().fillHorzBackground,
                !0,
                this.model(),
                'Change Gann Square Background Visibility',
              ),
            ),
            this.bindControl(
              new p(
                m,
                this._linetool.properties().horzTransparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            ),
            (T = $('<tr>')).appendTo(w),
            (_ = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(_).appendTo(T),
            (m = h()),
            $('<td>').append(m).appendTo(T),
            this.bindControl(
              new l(
                _,
                this._linetool.properties().fillVertBackground,
                !0,
                this.model(),
                'Change Gann Square Background Visibility',
              ),
            ),
            this.bindControl(
              new p(
                m,
                this._linetool.properties().vertTransparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            ),
            this._linetool.properties().reverse &&
              ((f = $("<input type='checkbox' class='visibility-switch'>")),
              (T = this.addLabeledRow(g, $.t('Reverse'), f)),
              $('<td>').append(f).prependTo(T),
              this.bindControl(
                new l(
                  f,
                  this._linetool.properties().reverse,
                  !0,
                  this.model(),
                  'Change Gann Box Reverse',
                ),
              )),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    CBRs: function (e, t, i) {},
    Ej6X: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(i),
            $('<td>').append(e).appendTo(i),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Background', o)),
            $('<td>').append(o).prependTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Polyline Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Polyline Line Color',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Polyline Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Polyline Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    GjuB: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.ColorBinding,
        r = a.SimpleComboBinder,
        s = a.SliderBinder,
        p = a.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, h, c, b, u, C, y, g, w, T, _;
          (this._block = $('<div>').addClass('property-page')),
            (e = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            )),
            (t = $('<tbody>').appendTo(e)),
            (i = this.createLineWidthEditor()),
            (o = d()),
            (n = this.createColorPicker()),
            (a = this.addLabeledRow(t, $.t('Line'))),
            $('<td>').append(n).appendTo(a),
            $('<td>').append(i).appendTo(a),
            $('<td colspan="3">').append(o.render()).appendTo(a),
            (h = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            )),
            (a = this.addLabeledRow(h, $.t('Background'), c)),
            (c = $('<input type="checkbox" class="visibility-switch">')),
            (b = this.createColorPicker()),
            $('<td>').append(c).prependTo(a),
            $('<td>').append(b).appendTo(a),
            (u = $('<table cellspacing="0" cellpadding="2">').appendTo(
              this._block,
            )),
            (C = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (y = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (g = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (w = $('<input type="checkbox">').appendTo(g)),
            (T = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (_ = $('<input type="checkbox">').appendTo(T)),
            (a = this.addLabeledRow(u, $.t('Left End'))),
            $('<td colspan="3">').appendTo(a).append(C).append(g),
            (a = this.addLabeledRow(u, $.t('Right End'))),
            $('<td colspan="3">').appendTo(a).append(y).append(T),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Curve Line Color',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Style',
              ),
            ),
            this.bindControl(
              new s(
                i,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Curve Line Width',
              ),
            ),
            this.bindControl(
              new p(
                c,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Curve Filling',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Curve Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                C,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Left End',
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Curve Line Right End',
              ),
            ),
            this.bindControl(
              new p(
                w,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Curve Line Extending Left',
              ),
            ),
            this.bindControl(
              new p(
                _,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Curve Line Extending Right',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._block;
        }),
        (e.exports = o);
    },
    ICcj: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      var n = i('DxCR').PropertyPage,
        a = i('L9lC').StudyInputsPropertyPage,
        l = i('n3Kh'),
        r = i('QloM');
      inherit(o, l),
        (o.prototype.prepareLayoutImpl = a.prototype.prepareLayoutImpl),
        (o.prototype.prepareControl = a.prototype.prepareControl),
        (o.prototype._symbolInfoBySymbolProperty =
          a.prototype._symbolInfoBySymbolProperty),
        (o.prototype._sortInputs = a.prototype._sortInputs),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            l,
            s,
            p,
            d = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ),
            h = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).data({
              'layout-tab': r.TabNames.inputs,
              'layout-tab-priority': r.TabPriority.Inputs,
            });
          for (
            this._table = d.add(h), e = this._linetool.points(), t = 0;
            t < e.length;
            t++
          )
            (i = $('<tr>')).appendTo(d),
              (o = $('<td>')).html($.t('Point bar', { point: t + 1 })),
              o.appendTo(i),
              (n = $('<td>')).appendTo(i),
              (l = $("<input type='text'>")).appendTo(n),
              l.addClass('ticker'),
              (s = this._linetool.properties().points[t]),
              this.bindBarIndex(
                s.bar,
                l,
                this.model(),
                'Change ' + this._linetool.title() + ' point bar index',
              );
          (p = this._model
            .model()
            .studyMetaInfoRepository()
            .findByIdSync({ type: 'java', studyId: this._linetool.studyId() })),
            a.prototype.prepareLayoutImpl.call(this, p, h);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    ISmD: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.BooleanBinder,
        s = a.ColorBinding,
        p = a.SliderBinder,
        d = i('jNEI').addColorPicker,
        h = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            h,
            c,
            b,
            u,
            C,
            y = $('<tr>');
          y.appendTo(this._table),
            (o = $('<td>')).appendTo(y),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            e
              ? ((a = $('<td>')).appendTo(y),
                (h = $("<input type='text'>")).appendTo(a),
                h.css('width', '70px'),
                this.bindControl(
                  new l(
                    h,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : this.createLabeledCell('Trend Line', n).appendTo(y),
            (c = $("<td class='colorpicker-cell'>")).appendTo(y),
            (b = d(c)),
            (u = $('<td>')).appendTo(y),
            (C = this.createLineWidthEditor()).appendTo(u),
            this.bindControl(
              new r(
                n,
                t.visible,
                !0,
                this.model(),
                'Change Fib Wedge Visibility',
              ),
            ),
            this.bindControl(
              new s(
                b,
                t.color,
                !0,
                this.model(),
                'Change Fib Wedge Line Color',
                0,
              ),
            ),
            this.bindControl(
              new p(C, t.linewidth, !0, this.model(), 'Change Fib Wedge Width'),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(
                null,
                this._linetool.properties().trendline,
                !1,
              ),
              e = 1;
            e <= 11;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                'Level ' + e,
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, 'Levels', i)),
            $('<td>').append(i).prependTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Wedge Levels Visibility',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(n).appendTo(o),
            this.createLabeledCell('Background', n).appendTo(o),
            (a = h()),
            $('<td colspan="3">').append(a).appendTo(o),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Wedge Background Visibility',
              ),
            ),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Wedge Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    IfF0: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.BooleanBinder,
        p = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            d,
            h,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(t).appendTo(o),
            (n = this.createColorPicker()),
            (a = this.createColorPicker()),
            (d = this.createFontSizeEditor()),
            (h = this.createFontEditor()),
            (c = this.createColorPicker()),
            (b = $('<input type="checkbox" class="visibility-switch">')),
            (u = this.createColorPicker()),
            (C = $('<input type="checkbox" class="visibility-switch">')),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                h,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().labelBackgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().fillLabelBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new s(
                C,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                a,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            ),
            (y = this.addLabeledRow(e, $.t('Background'), C)),
            $('<td>').append(C).prependTo(y),
            $('<td>').append(u).appendTo(y),
            (g = this.addLabeledRow(e, $.t('Label'))),
            $('<td>').prependTo(g),
            $('<td>').append(n).appendTo(g),
            $('<td>').append(h).appendTo(g),
            $('<td>').append(d).appendTo(g),
            (y = this.addLabeledRow(e, $.t('Label Background'), b)),
            $('<td>').append(b).prependTo(y),
            $('<td>').append(c).appendTo(y),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Date Range Color',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Date Range Line Width',
              ),
            ),
            void 0 !== (w = this._linetool.properties()).extendTop &&
              void 0 !== w.extendBottom &&
              ((T = $('<input type="checkbox">')),
              (_ = $('<input type="checkbox">')),
              this.bindControl(
                new s(
                  T,
                  this._linetool.properties().extendTop,
                  !0,
                  this.model(),
                  'Change Extend Top',
                ),
              ),
              this.bindControl(
                new s(
                  _,
                  this._linetool.properties().extendBottom,
                  !0,
                  this.model(),
                  'Change Extend Bottom',
                ),
              ),
              (m = this.addLabeledRow(e, $.t('Extend Top'), T)),
              $('<td>').append(T).prependTo(m),
              (f = this.addLabeledRow(e, $.t('Extend Bottom'), _)),
              $('<td>').append(_).prependTo(f)),
            void 0 !== w.extendLeft &&
              void 0 !== w.extendRight &&
              ((L = $('<input type="checkbox">')),
              (v = $('<input type="checkbox">')),
              this.bindControl(
                new s(
                  L,
                  this._linetool.properties().extendLeft,
                  !0,
                  this.model(),
                  'Change Extend Left',
                ),
              ),
              this.bindControl(
                new s(
                  v,
                  this._linetool.properties().extendRight,
                  !0,
                  this.model(),
                  'Change Extend Right',
                ),
              ),
              (S = this.addLabeledRow(e, $.t('Extend Left'), L)),
              $('<td>').append(L).prependTo(S),
              (k = this.addLabeledRow(e, $.t('Extend Right'), v)),
              $('<td>').append(v).prependTo(k)),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    JCAo: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SliderBinder,
        r = a.ColorBinding;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createColorPicker()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Background')),
            $('<td>').append(e).appendTo(i),
            $('<td>').append(t).appendTo(i),
            (o = this.createLineWidthEditor()),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Border')),
            $('<td>').append(n).appendTo(i),
            $('<td>').appendTo(i),
            $('<td>').append(o).appendTo(i),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().trendline.color,
                !0,
                this.model(),
                'Change Projection Line Color',
              ),
            ),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().color1,
                !0,
                this.model(),
                'Change Projection Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color2,
                !0,
                this.model(),
                'Change Projection Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Projection Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    JGUD: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t, i);
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.ToFloatTransformer,
        p = r.SimpleComboBinder,
        d = r.ColorBinding,
        h = r.BooleanBinder,
        c = r.SimpleStringBinder;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(e, 'Color')),
            $('<td>').append(t).appendTo(i),
            (o = $(
              '<select><option value="0">' +
                $.t('HL Bars') +
                '</option><option value="2">' +
                $.t('OC Bars') +
                '</option><option value="1">' +
                $.t('Line - Close') +
                '</option><option value="3">' +
                $.t('Line - Open') +
                '</option><option value="4">' +
                $.t('Line - High') +
                '</option><option value="5">' +
                $.t('Line - Low') +
                '</option><option value="6">' +
                $.t('Line - HL/2') +
                '</option></select>',
            )),
            (i = this.addLabeledRow(e, 'Mode')),
            $('<td>').append(o).appendTo(i),
            (i = $('<tr>').appendTo(e)),
            $('<td>' + $.t('Mirrored') + '</td>').appendTo(i),
            (n = $("<input type='checkbox'>")),
            $('<td>').append(n).appendTo(i),
            (i = $('<tr>').appendTo(e)),
            $('<td>' + $.t('Flipped') + '</td>').appendTo(i),
            (a = $("<input type='checkbox'>")),
            $('<td>').append(a).appendTo(i),
            this.bindControl(
              new h(
                n,
                this._linetool.properties().mirrored,
                !0,
                this.model(),
                'Change Bars Pattern Mirroring',
              ),
            ),
            this.bindControl(
              new h(
                a,
                this._linetool.properties().flipped,
                !0,
                this.model(),
                'Change Bars Pattern Flipping',
              ),
            ),
            this.bindControl(
              new d(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Bars Pattern Color',
              ),
            ),
            this.bindControl(
              new p(
                o,
                this._linetool.properties().mode,
                null,
                !0,
                this.model(),
                'Change Bars Pattern Mode',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, r, p;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = $('<tr>')).appendTo(this._table),
            (t = $('<td>')).html($.t('Price')),
            t.appendTo(e),
            (i = $('<td>')).appendTo(e),
            (o = $("<input type='text'>")).appendTo(i),
            (n = $('<td>')).html($.t('Bar #')),
            n.appendTo(e),
            (a = $('<td>')).appendTo(e),
            (l = $("<input type='text'>")).appendTo(a),
            l.addClass('ticker'),
            (r = this._linetool.properties().points[0]),
            (p = [s(r.price.value())]),
            this.bindControl(
              new c(
                o,
                r.price,
                p,
                !1,
                this.model(),
                'Change ' + this._linetool + ' point price',
              ),
            ),
            this.bindBarIndex(
              r.bar,
              l,
              this.model(),
              'Change ' + this._linetool + ' point bar index',
            ),
            this.loadData();
        }),
        (t.LineToolBarsPatternStylesPropertyPage = o),
        (t.LineToolBarsPatternInputsPropertyPage = n);
    },
    'JM7/': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.LessTransformer,
        r = a.GreateTransformer,
        s = a.ToFloatTransformer,
        p = a.BooleanBinder,
        d = a.SliderBinder,
        h = a.ColorBinding,
        c = a.SimpleComboBinder,
        b = a.SimpleStringBinder,
        u = i('jNEI').addColorPicker,
        C = i('y/RR').createTransparencyEditor;
      i('PVgW'),
        inherit(o, n),
        (o.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i
            .append($('<td>'))
            .append($('<td>'))
            .append(t.editor)
            .append($('<td>').append(t.label)),
            i.appendTo(e);
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B,
            P,
            R,
            E,
            F,
            D,
            I,
            A,
            W,
            V,
            O,
            z,
            M,
            Y,
            q,
            H,
            N,
            G,
            j,
            U,
            K,
            Q,
            X;
          for (y in ((this._table = $(document.createElement('table'))),
          this._table.addClass('property-page property-page-unpadded'),
          this._table.attr('cellspacing', '0'),
          this._table.attr('cellpadding', '2'),
          this._table.css({ width: '100%' }),
          (e = $('<tr>')).appendTo(this._table),
          (t = this.model()),
          (o = (i = this._linetool).properties()),
          (n = $('<table>')),
          $("<td valign='top'>").append(n).appendTo(e),
          (a = $('<tr>')),
          $("<td colspan='3'>" + $.t('Levels') + '</td>').appendTo(a),
          a.appendTo(n),
          o.levels._childs))
            (g = o.levels[y]),
              (w = $('<tr>')).appendTo(n),
              $('<td>' + y + '</td>').appendTo(w),
              (T = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(T).appendTo(w),
              (_ = $("<td class='colorpicker-cell'>")).appendTo(w),
              (m = u(_)),
              (f = $('<td>')).appendTo(w),
              (L = this.createLineWidthEditor()).appendTo(f),
              this.bindControl(
                new p(T, g.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new h(m, g.color, !0, t, 'Change Gann Line Color', 0),
              ),
              this.bindControl(
                new d(L, g.width, !0, t, 'Change Gann Line Width'),
              );
          for (y in ((v = $('<table>')),
          $("<td valign='top'>").append(v).appendTo(e),
          (S = $('<tr>')),
          $("<td colspan='4'>" + $.t('Fans') + '</td>').appendTo(S),
          S.appendTo(v),
          o.fanlines._childs))
            (k = o.fanlines[y]),
              (x = $('<tr>')).appendTo(v),
              (T = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(T).appendTo(x),
              (B = k.x.value() + 'x' + k.y.value()),
              $('<td>' + B + '</td>').appendTo(x),
              (_ = $("<td class='colorpicker-cell'>")).appendTo(x),
              (m = u(_)),
              (f = $('<td>')).appendTo(x),
              (L = this.createLineWidthEditor()).appendTo(f),
              this.bindControl(
                new p(T, k.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new h(m, k.color, !0, t, 'Change Gann Fan Color', 0),
              ),
              this.bindControl(
                new d(L, k.width, !0, t, 'Change Gann Line Width'),
              );
          for (y in ((P = $('<table>')),
          $("<td valign='top'>").append(P).appendTo(e),
          (R = $('<tr>')),
          $("<td colspan='4'>" + $.t('Arcs') + '</td>').appendTo(R),
          R.appendTo(P),
          o.arcs._childs))
            (E = o.arcs[y]),
              (F = $('<tr>')).appendTo(P),
              (T = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(T).appendTo(F),
              (B = E.x.value() + 'x' + E.y.value()),
              $('<td>' + B + '</td>').appendTo(F),
              (_ = $("<td class='colorpicker-cell'>")).appendTo(F),
              (m = u(_)),
              (f = $('<td>')).appendTo(F),
              (L = this.createLineWidthEditor()).appendTo(f),
              this.bindControl(
                new p(T, E.visible, !0, t, 'Change Gann Line Visibility'),
              ),
              this.bindControl(
                new h(m, E.color, !0, t, 'Change Gann Arc Color', 0),
              ),
              this.bindControl(
                new d(L, E.width, !0, t, 'Change Gann Line Width'),
              );
          this.addOneColorPropertyWidget(P),
            (D = $('<tbody>').appendTo(this._table)),
            (I = $('<input type="checkbox" class="visibility-switch">')),
            (A = C()),
            (W = $('<tr>').appendTo(D)),
            (V = $('<table>')),
            $('<td colspan="3">').append(V).appendTo(W),
            (W = $('<tr>').appendTo(V)),
            $('<td>').append(I).appendTo(W),
            $('<td>' + $.t('Background') + '</td>').appendTo(W),
            $('<td>').append(A).appendTo(W),
            o.reverse &&
              ((O = $("<input type='checkbox' class='visibility-switch'>")),
              (W = this.addLabeledRow(V, $.t('Reverse'), O, !0)),
              $('<td>').append(O).prependTo(W),
              (z = 'Change Gann Square Reverse'),
              this.bindControl(new p(O, o.reverse, !0, t, z))),
            this.bindControl(
              new p(
                I,
                o.arcsBackground.fillBackground,
                !0,
                t,
                'Change Gann Square Filling',
              ),
            ),
            this.bindControl(
              new d(
                A,
                o.arcsBackground.transparency,
                !0,
                t,
                'Change Gann Square Background Transparency',
              ),
            ),
            (M = $('<input type="text">')),
            (W = this.addLabeledRow(V, $.t('Price/Bar Ratio'), M, !0)),
            $('<td>').append(M).appendTo(W),
            M.TVTicker({ step: i.getScaleRatioStep() }),
            (z = 'Change Gann Square Scale Ratio'),
            (Y = this._getPropertySetter(o.scaleRatio, z)),
            (q = [s(o.scaleRatio.value()), r(1e-7), l(1e8)]),
            (H = new b(M, o.scaleRatio, q, !1, t, z, Y)).addFormatter(function (
              e,
            ) {
              return i.getScaleRatioFormatter().format(e);
            }),
            this.bindControl(H),
            (N = $('<input type="checkbox">')),
            (W = this.addLabeledRow(V, $.t('Ranges And Ratio'), N, !1)),
            $('<td>').append(N).prependTo(W),
            this.bindControl(
              new p(
                N,
                o.showLabels,
                !0,
                t,
                'Change Gann Square Lables Visibility',
              ),
            ),
            (L = this.createLineWidthEditor()),
            (m = this.createColorPicker()),
            (G = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (j = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            (U = this.createFontSizeEditor()),
            (K = this.createFontEditor()),
            (Q = o.labelsStyle),
            this.bindControl(
              new c(U, Q.fontSize, parseInt, !0, t, 'Change Text Font Size'),
            ),
            this.bindControl(new c(K, Q.font, null, !0, t, 'Change Text Font')),
            this.bindControl(new p(G, Q.bold, !0, t, 'Change Text Font Bold')),
            this.bindControl(
              new p(j, Q.italic, !0, t, 'Change Text Font Italic'),
            ),
            (X = $(
              '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
            )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(K),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(U),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .attr({ width: 1 })
                  .append(G),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .append(j),
              )
              .append($('</tr></table>'))),
            $('<td colspan="5" class="no-left-indent">').append(X).appendTo(W);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (o.prototype._getPropertySetter = function (e, t) {
          var i = this.model(),
            o = this._linetool;
          return function (n) {
            i.beginUndoMacro(t),
              i.saveLineToolState(o, 'Save Gann Square State'),
              i.setProperty(e, n, t),
              i.saveLineToolState(o, 'Save Gann Square State'),
              i.endUndoMacro();
          };
        }),
        (e.exports.LineToolGannComplexStylesPropertyPage = o);
    },
    JyhW: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('aO4+').Point,
        a = i('Yc1q'),
        l = i('DxCR'),
        r = l.ColorBinding,
        s = l.SimpleComboBinder,
        p = l.SimpleStringBinder,
        d = l.BooleanBinder,
        h = i('PT1i').linking;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n = this.createColorPicker(),
            a = this.createFontSizeEditor(),
            l = this.createFontEditor(),
            h = this.createTextEditor(350, 200),
            c = this.createColorPicker(),
            b = this.createColorPicker(),
            u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            C = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new r(
              n,
              this._linetool.properties().textColor,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().fontSize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new s(
                l,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new p(
                h,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().markerColor,
                !0,
                this.model(),
                'Change Marker and Border Color',
              ),
            ),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Background Color',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new d(
                u,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new d(
                C,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (t = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (i = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (this._table = e.add(i).add(t)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(n),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(l),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(a),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(u),
              )
              .append($(document.createElement('td')).append(C))
              .appendTo(e),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(h),
              )
              .appendTo(e),
            (o = this.addLabeledRow(i, $.t('Label'))),
            $('<td>').attr('colspan', 2).append(c).appendTo(o),
            (o = this.addLabeledRow(i, $.t('Background'))),
            $('<td>').append(b).appendTo(o),
            this.loadData(),
            setTimeout(function () {
              h.select(), h.focus();
            }, 20);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (o.prototype.dialogPosition = function (e, t) {
          var i, o, a, l, r, s, p, d, c;
          if (e && t) {
            for (
              i = 0,
                o = this._linetool._model.paneForSource(this._linetool),
                a = h.getChartWidget();
              i < a.paneWidgets().length;
              i++
            )
              if (a.paneWidgets()[i]._state === o) {
                l = $(a.paneWidgets()[i].canvasElement()).offset().left;
                break;
              }
            return (
              (r = (this._linetool.paneViews() || [])[0]),
              (s = new n(0, 0)),
              r &&
                (s = r._floatPoints[0] || this._linetool._fixedPoints[0] || s),
              (d = (l || 0) + s.x - (p = this._linetool.getTooltipWidth()) / 2),
              (c = t.outerWidth()),
              e.left < d && e.left + c + 10 > d
                ? ((e.left -= e.left + c + 10 - d), e)
                : e.left > d && e.left < d + p + 10
                ? ((e.left += d + p + 10 - e.left), e)
                : void 0
            );
          }
        }),
        (e.exports = o);
    },
    L9lC: function (e, t, i) {
      (function (e) {
        function o(e, t, i, o, n) {
          p.call(this, e, t),
            (this._study = i),
            (this._showOnlyConfirmInputs = o),
            (this._symbolSearchZindex = n),
            this.prepareLayout(),
            (this._$symbolSearchPopup = null);
        }
        var n = i('DxCR'),
          a = n.UppercaseTransformer,
          l = n.SymbolBinder,
          r = n.BarTimeBinder,
          s = n.SessionBinder,
          p = n.PropertyPage,
          d = n.GreateTransformer,
          h = n.LessTransformer,
          c = n.ToIntTransformer,
          b = n.ToFloatTransformer,
          u = n.SymbolInfoSymbolTransformer,
          C = n.SimpleComboBinder,
          y = n.BooleanBinder,
          g = n.SimpleStringBinder,
          w = i('zXvd').NumericFormatter,
          T = i('0YCj'),
          _ = i('uOxu').getLogger('Chart.Study.PropertyPage.Inputs'),
          m = i('pZll').symbolSearchUIService;
        inherit(o, p),
          (o.prototype._addSessionEditor = function (e, t, i, o) {
            var n, a, l, r, p, d;
            'session' === i.type
              ? ((n = function (e, t) {
                  var i,
                    o = $('<td/>');
                  o.appendTo(e),
                    o.css('padding-left', '0px'),
                    o.css('padding-right', '0px'),
                    (i = $('<input>')).attr('type', 'text'),
                    i.addClass('ticker'),
                    i.css('width', '40px'),
                    i.attr('id', t),
                    i.appendTo(o);
                }),
                (a = function (e, t, i) {
                  var o,
                    n = $('<td/>');
                  n.css('padding-left', i),
                    n.css('padding-right', i),
                    n.appendTo(e),
                    (o = $('<div/>')).appendTo(n),
                    o.append(t),
                    o.css('font-size', '150%');
                }),
                (l = $('<table/>')).appendTo(e),
                (r = $('<tr/>')).appendTo(l),
                (p = [
                  'start_hours',
                  'start_minutes',
                  'end_hours',
                  'end_minutes',
                ]),
                n.call(this, r, p[0]),
                a.call(this, r, ':', 0),
                n.call(this, r, p[1]),
                a.call(this, r, '-', 4),
                n.call(this, r, p[2]),
                a.call(this, r, ':', 0),
                n.call(this, r, p[3]),
                (d = !1),
                this.bindControl(new s(r, p, t, d, this.model(), o)))
              : _.logError('Session editor adding FAILED: wrong input type.');
          }),
          (o.prototype.prepareControl = function (t, i, o) {
            var n,
              a,
              l,
              r,
              s,
              p,
              d,
              h,
              c,
              b,
              u,
              C,
              y,
              g,
              w,
              f,
              L,
              v,
              S,
              k,
              x,
              B = this,
              P = null,
              R = null,
              E = null;
            if ('resolution' === t.type)
              P = $(
                '<select><option value="1">1</option><option value="3">3</option><option value="5">5</option><option value="15">15</option><option value="30">30</option><option value="45">45</option><option value="60">1' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="120">2' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="180">3' +
                  window.t('h', { context: 'interval_short' }) +
                  '</option><option value="D">1' +
                  window.t('D', { context: 'interval_short' }) +
                  '</option><option value="W">1' +
                  window.t('W', { context: 'interval_short' }) +
                  '</option></select>',
              );
            else if ('symbol' === t.type)
              (P = $('<input class="symbol-edit single">')),
                m().bindToInput(P, {
                  onPopupOpen: function (e) {
                    (this._$symbolSearchPopup = e),
                      this._symbolSearchZindex &&
                        e.css('z-index', this._symbolSearchZindex);
                  }.bind(this),
                  onPopupClose: function () {
                    this._$symbolSearchPopup = null;
                  }.bind(this),
                  callback: function (e) {
                    t.value = e;
                  },
                }),
                i.attr('colspan', 5);
            else if ('session' === t.type)
              this._addSessionEditor(i, this._property.inputs[t.id], t, o);
            else if ('source' === t.type) {
              for (
                n = {},
                  a = {
                    open: window.t('open'),
                    high: window.t('high'),
                    low: window.t('low'),
                    close: window.t('close'),
                    hl2: window.t('hl2'),
                    hlc3: window.t('hlc3'),
                    ohlc4: window.t('ohlc4'),
                  },
                  l = Object.keys(a),
                  r = 0;
                r < l.length;
                ++r
              )
                n[l[r]] || (n[l[r]] = l[r]);
              if ((s = this._study && this._study.isChildStudy()))
                for (h in ((p = this._study.source().title(!0, null, !0)),
                (d = T.getChildSourceInputTitles(
                  t,
                  this._study.source().metaInfo(),
                  p,
                )),
                n))
                  d[h] && (n[h] = 1 === Object.keys(d).length ? p : d[h]);
              if (
                e.enabled('study_on_study') &&
                this._study &&
                T.isSourceInput(t) &&
                (s || T.canBeChild(this._study.metaInfo()))
              ) {
                for (
                  c = (c = [this._study]).concat(this._study.getAllChildren()),
                    b = this._model.model().allStudies(),
                    u = 0;
                  u < b.length;
                  ++u
                )
                  if (((C = b[u]), -1 === c.indexOf(C) && C.canHaveChildren()))
                    if (
                      ((y = C.title(!0, null, !0)),
                      (g = C.sourceId() || '#' + C.id()),
                      (f = (w = C.metaInfo()).styles),
                      1 === (L = w.plots || []).length)
                    )
                      n[g + '$0'] = y;
                    else
                      for (r = 0; r < L.length; ++r)
                        (v = L[r]),
                          ~T.CHILD_STUDY_ALLOWED_PLOT_TYPES.indexOf(v.type) &&
                            (n[g + '$' + r] =
                              y +
                              ': ' +
                              ((f && f[v.id] && f[v.id].title) || v.id));
                (R = (function (e) {
                  return function (t) {
                    var i,
                      o,
                      n,
                      a = this,
                      l = null;
                    if (0 === t.indexOf('#')) {
                      if (
                        ((i = t.slice(1, t.indexOf('$'))),
                        null === (o = B._model.model().getStudyById(i)))
                      )
                        return void _.logError('Can not get Study by id ' + i);
                      if (
                        (o.isStarted() || o.start(null, !0),
                        !(n = o.sourceId()))
                      )
                        return void _.logError(
                          'Can not get source id for ' + o.metaInfo().id,
                        );
                      l = t.replace(/^[^\$]+/, n);
                    }
                    (!~t.indexOf('$') && !~t.indexOf('#')) ||
                      B._study.isStarted() ||
                      B._study.start(null, !0),
                      B._study.testInputValue(e, t)
                        ? a.setValueToProperty(l || a.value())
                        : a.setValue(B._property.inputs[e.id].value());
                  };
                })(t)),
                  (E = (function (e) {
                    return function (t) {
                      var i, o, n, a;
                      if (
                        e.hasOwnProperty(t) ||
                        0 === t.indexOf('#') ||
                        !~t.indexOf('$')
                      )
                        return t;
                      for (
                        i = t.slice(0, t.indexOf('$')),
                          o = B._model.model().allStudies(),
                          n = 0;
                        n < o.length;
                        ++n
                      )
                        if ((a = o[n]).sourceId() === i) {
                          t = t.replace(/^[^\$]+/, '#' + a.id());
                          break;
                        }
                      return t;
                    };
                  })(n));
              }
              for (S in ((P = $(document.createElement('select'))), n))
                (k = a[S] || n[S]),
                  $('<option>').attr('value', S).text(k).appendTo(P);
              i.addClass('js-value-cell');
            } else
              t.options
                ? ((P = $('<select/>')),
                  (x = t.optionsTitles),
                  t.options.forEach(function (e) {
                    var t = e,
                      i = (x && x[t]) || t,
                      o = $.t(i, { context: 'input' });
                    $("<option value='" + t + "'>" + o + '</option>').appendTo(
                      P,
                    );
                  }))
                : ((P = $('<input/>')),
                  'bool' === t.type
                    ? P.attr('type', 'checkbox')
                    : P.attr('type', 'text'));
            return (
              P &&
                (P.appendTo(i),
                P.is(':checkbox') ||
                  'symbol' === t.type ||
                  P.css('width', '100px')),
              { valueEditor: P, valueSetter: R, propertyChangedHook: E }
            );
          }),
          (o.prototype._symbolInfoBySymbolProperty = function (e) {
            return this._study.resolvedSymbolInfoBySymbol(e.value());
          }),
          (o.prototype._sortInputs = function (e) {
            return e;
          }),
          (o.prototype.prepareLayoutImpl = function (e, t) {
            function i(e) {
              return new w().format(e);
            }
            var o,
              n,
              s,
              p,
              T,
              _,
              m,
              f,
              L,
              v,
              S,
              k,
              x,
              B,
              P,
              R,
              E,
              F,
              D = this._sortInputs(e.inputs);
            for (o = 0; o < D.length; o++)
              'first_visible_bar_time' !== (s = (n = D[o]).id) &&
                'last_visible_bar_time' !== s &&
                'time' !== n.type &&
                (n.isHidden ||
                  (this._showOnlyConfirmInputs && !n.confirm) ||
                  (void 0 === n.groupId &&
                    ((T =
                      'Change ' +
                      (p =
                        n.name ||
                        s.toLowerCase().replace(/\b\w/g, function (e) {
                          return e.toUpperCase();
                        }))),
                    (_ = $('<tr/>')).appendTo(t),
                    (m = $('<td/>')).appendTo(_),
                    m.addClass('propertypage-name-label'),
                    m.text(window.t(p, { context: 'input' })),
                    (f = $('<td/>')).appendTo(_),
                    (L = this.prepareControl(n, f, T)),
                    (v = L.valueEditor),
                    (S = L.valueSetter),
                    (k = L.propertyChangedHook),
                    n.options
                      ? this.bindControl(
                          new C(
                            v,
                            this._property.inputs[s],
                            null,
                            !0,
                            this.model(),
                            T,
                            S,
                            k,
                          ),
                        )
                      : 'bar_time' === n.type
                      ? ((x = 10),
                        this.bindControl(
                          new r(
                            v,
                            this._property.inputs[s],
                            !0,
                            this.model(),
                            T,
                            this.model().mainSeries(),
                            x,
                          ),
                        ),
                        v.addClass('ticker'))
                      : 'integer' === n.type
                      ? ((B = [c(n.defval)]),
                        (0 === n.min || n.min) && B.push(d(n.min)),
                        (0 === n.max || n.max) && B.push(h(n.max)),
                        this.bindControl(
                          new g(
                            v,
                            this._property.inputs[s],
                            B,
                            !1,
                            this.model(),
                            T,
                          ),
                        ),
                        v.addClass('ticker'),
                        isFinite(n.step) &&
                          n.step > 0 &&
                          v.attr('data-step', n.step))
                      : 'float' === n.type
                      ? ((B = [b(n.defval)]),
                        (0 === n.min || n.min) && B.push(d(n.min)),
                        (0 === n.max || n.max) && B.push(h(n.max)),
                        (P = new g(
                          v,
                          this._property.inputs[s],
                          B,
                          !1,
                          this.model(),
                          T,
                        )).addFormatter(i),
                        this.bindControl(P),
                        v.addClass('ticker'),
                        isFinite(n.step) &&
                          n.step > 0 &&
                          v.attr('data-step', n.step))
                      : 'text' === n.type
                      ? this.bindControl(
                          new g(
                            v,
                            this._property.inputs[s],
                            null,
                            !1,
                            this.model(),
                            T,
                          ),
                        )
                      : 'bool' === n.type
                      ? this.bindControl(
                          new y(
                            v,
                            this._property.inputs[s],
                            !0,
                            this.model(),
                            T,
                          ),
                        )
                      : 'resolution' === n.type
                      ? this.bindControl(
                          new C(
                            v,
                            this._property.inputs[s],
                            a,
                            !0,
                            this.model(),
                            'Change Interval',
                          ),
                        )
                      : 'symbol' === n.type &&
                        ((R = this._symbolInfoBySymbolProperty.bind(
                          this,
                          this._property.inputs[s],
                        )),
                        (E = u(R, this._property.inputs[s])),
                        (F = new l(
                          v,
                          this._property.inputs[s],
                          !0,
                          this.model(),
                          'Change Symbol',
                          E,
                          this._study.symbolsResolved(),
                        )),
                        this.bindControl(F)))));
            this._property.offset &&
              ((p = this._property.offset.title
                ? this._property.offset.title.value()
                : window.t('Offset')),
              (v = this.addOffsetEditorRow(t, p)),
              (B = [c(this._property.offset.val)]).push(
                d(this._property.offset.min),
              ),
              B.push(h(this._property.offset.max)),
              this.bindControl(
                new g(
                  v,
                  this._property.offset.val,
                  B,
                  !1,
                  this.model(),
                  'Undo ' + p,
                ),
              )),
              this._property.offsets &&
                $.each(
                  e.plots,
                  function (e, i) {
                    var o, n, a;
                    this._property.offsets[i.id] &&
                      ((void 0 !==
                        (o = this._property.offsets[i.id]).isHidden &&
                        o.isHidden.value()) ||
                        ((n = o.title.value()),
                        (v = this.addOffsetEditorRow(t, n)),
                        (a = [c(o.val)]).push(d(o.min)),
                        a.push(h(o.max)),
                        this.bindControl(
                          new g(v, o.val, a, !1, this.model(), 'Undo ' + n),
                        )));
                  }.bind(this),
                );
          }),
          (o.prototype.prepareLayout = function () {
            (this._table = $('<table/>')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2');
            var e = this._study.metaInfo();
            this.prepareLayoutImpl(e, this._table), this.loadData();
          }),
          (o.prototype.symbolSearchPopup = function () {
            return this._$symbolSearchPopup;
          }),
          (o.prototype.widget = function () {
            return this._table;
          }),
          (t.StudyInputsPropertyPage = o);
      }.call(this, i('Kxc7')));
    },
    LkNV: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.FloatBinder,
        s = a.ColorBinding,
        p = a.SimpleComboBinder,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            e
              ? ((o = $('<td>')).appendTo(_),
                (n = $(
                  "<input type='checkbox' class='visibility-switch'>",
                )).appendTo(o),
                (a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    n,
                    t.visible,
                    !0,
                    this.model(),
                    'Change Pitchfork Line Visibility',
                  ),
                ),
                this.bindControl(
                  new r(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : $("<td colspan='2'>" + $.t('Median') + '</td>').appendTo(_),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            (w = $('<td>')).appendTo(_),
            (T = c()).render().appendTo(w),
            this.bindControl(
              new s(
                C,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
              ),
              0,
            ),
            this.bindControl(
              new p(
                T,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfan Line Style',
              ),
            ),
            this.bindControl(
              new d(
                g,
                t.linewidth,
                !0,
                this.model(),
                'Change Pitchfan Line Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(null, this._linetool.properties().median, !1),
              e = 0;
            e <= 8;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                $.t('Level {0}').format(e + 1),
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $('<tr>')).appendTo(this._table),
            (o = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(o).appendTo(i),
            this.createLabeledCell($.t('Background'), o).appendTo(i),
            (n = b()),
            $('<td colspan="3">').append(n).appendTo(i),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfan Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                n,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfan Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    MKMD: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.SliderBinder,
        p = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = p()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(this._table, 'Lines')),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Circle Lines Color',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Circle Lines Style',
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Circle Lines Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    NHMx: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SimpleComboBinder,
        p = a.SliderBinder,
        d = a.SimpleStringBinder,
        h = i('QloM').TabOpenFrom;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n = this.createColorPicker(),
            a = this.createFontSizeEditor(),
            c = this.createFontEditor(),
            b = this.createTextEditor(350, 200),
            u = this.createColorPicker(),
            C = this.createLineWidthEditor(),
            y = this.createColorPicker(),
            g = $('<input type="checkbox">'),
            w = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            T = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new r(
              n,
              this._linetool.properties().color,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new s(
                c,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new d(
                b,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().bordercolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new p(
                C,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Border Width',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().wordWrap,
                !0,
                this.model(),
                'Change Text Wrap',
              ),
            ),
            this.bindControl(
              new l(
                w,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new l(
                T,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ).data('layout-tab-open', h.Override)),
            (t = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (i = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (this._table = e.add(i).add(t)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(n),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(c),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(a),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(w),
              )
              .append($(document.createElement('td')).append(T))
              .appendTo(e),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(b),
              )
              .appendTo(e),
            (o = this.addLabeledRow(t, 'Text Wrap', g)),
            $('<td>').append(g).prependTo(o),
            (o = this.addLabeledRow(i, 'Background')),
            $('<td>').append(u).appendTo(o),
            (o = this.addLabeledRow(i, 'Border')),
            $('<td>').append(y).appendTo(o),
            $('<td>').append(C).appendTo(o),
            this.loadData(),
            setTimeout(function () {
              b.select(), b.focus();
            }, 20);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    PVgW: function (e, t, i) {
      'use strict';
      function o(e) {
        return (
          (e = Math.abs(e)),
          !Object(p.isInteger)(e) &&
            e > 1 &&
            (e = parseFloat(e.toString().replace(/^.+\./, '0.'))),
          0 < e && e < 1
            ? Math.pow(
                10,
                null ===
                  (o = String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))
                  ? 0
                  : ((t = o[1] ? o[1].length : 0),
                    (i = o[2] ? parseInt(o[2], 0) : 0),
                    Math.max(0, t - i)),
              )
            : 1
        );
        var t, i, o;
      }
      function n(e, t) {
        var i, n, a, l, r;
        e.trigger('tvticker-beforechange'),
          (n = (i = e.data('TVTicker')) && i.step),
          (a = 0),
          (a = i.parser
            ? i.parser(e.val())
            : Object(p.isInteger)(n)
            ? parseInt(e.val(), 10)
            : parseFloat(e.val())),
          isNaN(a) && (a = 0),
          (l = o(n)),
          (r = t(a, Math.max(l, o(a)))),
          i.formatter && (r = i.formatter(r)),
          e.val(r),
          e.change();
      }
      function a(e) {
        var t = e.data('TVTicker'),
          i = t && t.step,
          o = t && t.max;
        n(e, function (e, t) {
          var n = (Math.round(e * t) + Math.round(i * t)) / t;
          return void 0 !== o && null !== o && o < n && (n = e), n;
        });
      }
      function l(e) {
        var t = e.data('TVTicker'),
          i = t && t.step,
          o = t && t.min;
        n(e, function (e, t) {
          var n = (Math.round(e * t) - Math.round(i * t)) / t;
          return void 0 !== o && null !== o && n < o && (n = e), n;
        });
      }
      var r, s, p, d;
      i.r(t),
        (r = i('P5fv')),
        (s = i('si6p')),
        (p = i('ogJP')),
        (d = i('R4+T')),
        ($.fn.TVTicker = function (e) {
          return (
            void 0 === e && (e = {}),
            this.each(function () {
              var t,
                i,
                o,
                n = !1,
                r = $(this),
                s = r.data('TVTicker');
              s ? (n = !0) : (s = { step: Number(r.data('step')) || 1 }),
                'step' in e && (s.step = Number(e.step) || s.step),
                'min' in e && (s.min = e.min),
                'max' in e && (s.max = e.max),
                'formatter' in e && (s.formatter = e.formatter),
                'parser' in e && (s.parser = e.parser),
                r.data('TVTicker', s),
                n ||
                  ((t = $('<div class="tv-ticker">').appendTo(r.parent())),
                  (i = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                    .html(d)
                    .appendTo(t)),
                  (o = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                    .html(d)
                    .appendTo(t)),
                  t.on('mousedown', function (e) {
                    e.preventDefault(), r.focus();
                  }),
                  i.click(function () {
                    r.is(':disabled') || a(r);
                  }),
                  o.click(function () {
                    r.is(':disabled') || l(r);
                  }),
                  r.keydown(function (e) {
                    r.is(':disabled') ||
                      (38 === e.keyCode
                        ? i.addClass('i-active')
                        : 40 === e.keyCode && o.addClass('i-active'));
                  }),
                  r.keyup(function (e) {
                    r.is(':disabled') ||
                      (38 === e.keyCode
                        ? (a(r), i.removeClass('i-active'))
                        : 40 === e.keyCode &&
                          (l(r), o.removeClass('i-active')));
                  }),
                  r.mousewheel(function (e) {
                    e.deltaY * (e.deltaFactor / 100) > 0
                      ? i.click()
                      : o.click();
                  }));
            })
          );
        });
    },
    QPOT: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.ColorBinding,
        r = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            s,
            p,
            d,
            h,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            m = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' }),
            f = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            );
          (this._table = _.add(m).add(f)),
            (e = this.createColorPicker()),
            (t = this.createLineWidthEditor()),
            (i = this.addLabeledRow(_, 'Line')),
            $('<td>').append(e).appendTo(i),
            $('<td>').append(t).appendTo(i),
            (o = $('<tr>').appendTo(m)),
            (n = $('<td>')
              .appendTo(o)
              .css({ 'vertical-align': 'top', width: '50%' })),
            (a = $('<td>')
              .appendTo(o)
              .css({ 'vertical-align': 'top', width: '50%' })),
            (s = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(n)),
            (p = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo(a)),
            (d = this.addColorPickerRow(s, $.t('Source back color'))),
            (h = this.addColorPickerRow(s, $.t('Source text color'))),
            (c = this.addColorPickerRow(s, $.t('Source border color'))),
            (b = this.addColorPickerRow(s, $.t('Success back color'))),
            (u = this.addColorPickerRow(s, $.t('Success text color'))),
            (C = this.addColorPickerRow(p, $.t('Target back color'))),
            (y = this.addColorPickerRow(p, $.t('Target text color'))),
            (g = this.addColorPickerRow(p, $.t('Target border color'))),
            (w = this.addColorPickerRow(p, $.t('Failure back color'))),
            (T = this.addColorPickerRow(p, $.t('Failure text color'))),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Forecast Line Color',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Forecast Line Width',
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Forecast Line Color',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Forecast Line Width',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().sourceBackColor,
                !0,
                this.model(),
                'Forecast Source Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().sourceStrokeColor,
                !0,
                this.model(),
                'Forecast Source Border Color',
              ),
            ),
            this.bindControl(
              new l(
                h,
                this._linetool.properties().sourceTextColor,
                !0,
                this.model(),
                'Forecast Source Text Color',
              ),
            ),
            this.bindControl(
              new l(
                C,
                this._linetool.properties().targetBackColor,
                !0,
                this.model(),
                'Forecast Target Background Color',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().targetStrokeColor,
                !0,
                this.model(),
                'Forecast Target Border Color',
              ),
            ),
            this.bindControl(
              new l(
                y,
                this._linetool.properties().targetTextColor,
                !0,
                this.model(),
                'Forecast Target Text Color',
              ),
            ),
            this.bindControl(
              new l(
                b,
                this._linetool.properties().successBackground,
                !0,
                this.model(),
                'Forecast Success Back Color',
              ),
            ),
            this.bindControl(
              new l(
                u,
                this._linetool.properties().successTextColor,
                !0,
                this.model(),
                'Forecast Success Text Color',
              ),
            ),
            this.bindControl(
              new l(
                w,
                this._linetool.properties().failureBackground,
                !0,
                this.model(),
                'Forecast Failure Back Color',
              ),
            ),
            this.bindControl(
              new l(
                T,
                this._linetool.properties().failureTextColor,
                !0,
                this.model(),
                'Forecast Failure Text Color',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    QxMc: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.SliderBinder,
        s = a.ColorBinding,
        p = i('jNEI').addColorPicker,
        d = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i
            .append($('<td>'))
            .append($('<td>'))
            .append(t.editor)
            .append($('<td>').append(t.label)),
            i.appendTo(e);
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            h,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B,
            P,
            R,
            E;
          for (n in ((this._table = $(document.createElement('table'))),
          this._table.addClass('property-page property-page-unpadded'),
          this._table.attr('cellspacing', '0'),
          this._table.attr('cellpadding', '2'),
          this._table.css({ width: '100%' }),
          (e = $('<tr>')).appendTo(this._table),
          (t = this._linetool.properties()),
          (i = $('<table>')),
          $("<td valign='top'>").append(i).appendTo(e),
          (o = $('<tr>')),
          $("<td colspan='3'>" + $.t('Levels') + '</td>').appendTo(o),
          o.appendTo(i),
          t.levels._childs))
            (a = t.levels[n]),
              (h = $('<tr>')).appendTo(i),
              $('<td>' + n + '</td>').appendTo(h),
              (c = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(c).appendTo(h),
              (b = $("<td class='colorpicker-cell'>")).appendTo(h),
              (u = p(b)),
              (C = $('<td>')).appendTo(h),
              (y = this.createLineWidthEditor()).appendTo(C),
              this.bindControl(
                new l(
                  c,
                  a.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new s(
                  u,
                  a.color,
                  !0,
                  this.model(),
                  'Change Gann Line Color',
                  0,
                ),
              ),
              this.bindControl(
                new r(y, a.width, !0, this.model(), 'Change Gann Line Width'),
              );
          for (n in ((g = $('<table>')),
          $("<td valign='top'>").append(g).appendTo(e),
          (w = $('<tr>')),
          $("<td colspan='4'>" + $.t('Fans') + '</td>').appendTo(w),
          w.appendTo(g),
          t.fanlines._childs))
            (T = t.fanlines[n]),
              (_ = $('<tr>')).appendTo(g),
              (c = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(c).appendTo(_),
              (m = T.x.value() + 'x' + T.y.value()),
              $('<td>' + m + '</td>').appendTo(_),
              (b = $("<td class='colorpicker-cell'>")).appendTo(_),
              (u = p(b)),
              (C = $('<td>')).appendTo(_),
              (y = this.createLineWidthEditor()).appendTo(C),
              this.bindControl(
                new l(
                  c,
                  T.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new s(u, T.color, !0, this.model(), 'Change Gann Fan Color', 0),
              ),
              this.bindControl(
                new r(y, T.width, !0, this.model(), 'Change Gann Line Width'),
              );
          for (n in ((f = $('<table>')),
          $("<td valign='top'>").append(f).appendTo(e),
          (L = $('<tr>')),
          $("<td colspan='4'>" + $.t('Arcs') + '</td>').appendTo(L),
          L.appendTo(f),
          t.arcs._childs))
            (v = t.arcs[n]),
              (S = $('<tr>')).appendTo(f),
              (c = $("<input type='checkbox' class='visibility-switch'>")),
              $('<td>').append(c).appendTo(S),
              (m = v.x.value() + 'x' + v.y.value()),
              $('<td>' + m + '</td>').appendTo(S),
              (b = $("<td class='colorpicker-cell'>")).appendTo(S),
              (u = p(b)),
              (C = $('<td>')).appendTo(S),
              (y = this.createLineWidthEditor()).appendTo(C),
              this.bindControl(
                new l(
                  c,
                  v.visible,
                  !0,
                  this.model(),
                  'Change Gann Line Visibility',
                ),
              ),
              this.bindControl(
                new s(u, v.color, !0, this.model(), 'Change Gann Arc Color', 0),
              ),
              this.bindControl(
                new r(y, v.width, !0, this.model(), 'Change Gann Line Width'),
              );
          this.addOneColorPropertyWidget(f),
            (k = $('<tbody>').appendTo(this._table)),
            (x = $('<input type="checkbox" class="visibility-switch">')),
            (B = d()),
            (P = $('<tr>').appendTo(k)),
            (R = $('<table>')),
            $('<td colspan="3">').append(R).appendTo(P),
            (P = $('<tr>').appendTo(R)),
            $('<td>').append(x).appendTo(P),
            $('<td>' + $.t('Background') + '</td>').appendTo(P),
            $('<td>').append(B).appendTo(P),
            t.reverse &&
              ((E = $("<input type='checkbox' class='visibility-switch'>")),
              (P = this.addLabeledRow(R, $.t('Reverse'), E, !0)),
              $('<td>').append(E).prependTo(P),
              this.bindControl(
                new l(
                  E,
                  t.reverse,
                  !0,
                  this.model(),
                  'Change Gann Square Reverse',
                ),
              )),
            this.bindControl(
              new l(
                x,
                t.arcsBackground.fillBackground,
                !0,
                this.model(),
                'Change Gann Square Filling',
              ),
            ),
            this.bindControl(
              new r(
                B,
                t.arcsBackground.transparency,
                !0,
                this.model(),
                'Change Gann Square Background Transparency',
              ),
            );
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports.LineToolGannFixedStylesPropertyPage = o);
    },
    'R4+T': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
    RTm2: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      var n = i('DxCR'),
        a = n.PropertyPage,
        l = n.BooleanBinder,
        r = n.RangeBinder,
        s = i('Kxc7'),
        p = i('Ialn').isRtl;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h, c, b, u, C, y;
          (this._block = $('<table class="property-page">')),
            (e = this._linetool.properties().intervalsVisibilities),
            s.enabled('seconds_resolution') &&
              ((t = $('<tr>').appendTo(this._block)),
              (i = $('<label>').append($.t('Seconds'))),
              (o = $("<input type='checkbox'>")
                .addClass('visibility-checker')
                .prependTo(i)),
              $('<td>').css('padding-right', '15px').append(i).appendTo(t),
              (n = $("<input type='text'>").addClass('ticker-text')),
              $('<td>').append(n).appendTo(t),
              (a = $('<div>')
                .addClass('slider-range ui-slider-horizontal')
                .slider()),
              $('<td>').append(a).appendTo(t),
              (d = $("<input type='text'>").addClass('ticker-text')),
              $('<td>').append(d).appendTo(t),
              this.bindControl(
                new l(
                  o,
                  e.seconds,
                  !0,
                  this.model(),
                  'Change Line Tool Visibility On Seconds',
                ),
              ),
              this.bindControl(
                new r(
                  a,
                  [e.secondsFrom, e.secondsTo],
                  [1, 59],
                  !1,
                  this.model(),
                  [n, d],
                  [$.t('Change Seconds From'), $.t('Change Seconds To')],
                  o,
                ),
              )),
            (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Minutes'))),
            (h = $("<input type='checkbox'>")
              .addClass('visibility-checker')
              .prependTo(i)),
            (c = p() ? 'padding-left' : 'padding-right'),
            $('<td>').css(c, '15px').append(i).appendTo(t),
            (n = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(n).appendTo(t),
            (a = $('<div>')
              .addClass('slider-range ui-slider-horizontal')
              .slider()),
            $('<td>').append(a).appendTo(t),
            (d = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(d).appendTo(t),
            this.bindControl(
              new l(
                h,
                e.minutes,
                !0,
                this.model(),
                'Change Line Tool Visibility On Minutes',
              ),
            ),
            this.bindControl(
              new r(
                a,
                [e.minutesFrom, e.minutesTo],
                [1, 59],
                !1,
                this.model(),
                [n, d],
                [$.t('Change Minutes From'), $.t('Change Minutes To')],
                h,
              ),
            ),
            (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Hours'))),
            (b = $("<input type='checkbox'>")
              .addClass('visibility-checker')
              .prependTo(i)),
            $('<td>').append(i).appendTo(t),
            (n = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(n).appendTo(t),
            (a = $('<div>')
              .addClass('slider-range ui-slider-horizontal')
              .slider()),
            $('<td>').append(a).appendTo(t),
            (d = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(d).appendTo(t),
            this.bindControl(
              new l(
                b,
                e.hours,
                !0,
                this.model(),
                'Change Line Tool Visibility On Hours',
              ),
            ),
            this.bindControl(
              new r(
                a,
                [e.hoursFrom, e.hoursTo],
                [1, 24],
                !1,
                this.model(),
                [n, d],
                [$.t('Change Minutes From'), $.t('Change Hours To')],
                b,
              ),
            ),
            (t = $('<tr>').appendTo(this._block)),
            (i = $('<label>').append($.t('Days'))),
            (u = $("<input type='checkbox'>")
              .addClass('visibility-checker')
              .prependTo(i)),
            $('<td>').append(i).appendTo(t),
            (n = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(n).appendTo(t),
            (a = $('<div>')
              .addClass('slider-range ui-slider-horizontal')
              .slider()),
            $('<td>').append(a).appendTo(t),
            (d = $("<input type='text'>").addClass('ticker-text')),
            $('<td>').append(d).appendTo(t),
            this.bindControl(
              new l(
                u,
                e.days,
                !0,
                this.model(),
                'Change Line Tool Visibility On Days',
              ),
            ),
            this.bindControl(
              new r(
                a,
                [e.daysFrom, e.daysTo],
                [1, 366],
                !1,
                this.model(),
                [n, d],
                [$.t('Change Minutes From'), $.t('Change Days To')],
                u,
              ),
            ),
            (t = $('<tr>').css('height', '29px').appendTo(this._block)),
            (i = $('<label>').append($.t('Weeks'))),
            (C = $("<input type='checkbox'>").prependTo(i)),
            $('<td>').append(i).appendTo(t),
            this.bindControl(
              new l(
                C,
                e.weeks,
                !0,
                this.model(),
                'Change Line Tool Visibility On Weeks',
              ),
            ),
            (t = $('<tr>').css('height', '29px').appendTo(this._block)),
            (i = $('<label>').append($.t('Months'))),
            (y = $("<input type='checkbox'>").prependTo(i)),
            $('<td>').append(i).appendTo(t),
            this.bindControl(
              new l(
                y,
                e.months,
                !0,
                this.model(),
                'Change Line Tool Visibility On Months',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._block;
        }),
        (e.exports = o);
    },
    SA6f: function (e, t, i) {
      'use strict';
      function o() {
        var e = '<select>';
        return (
          Object.keys(a.plotShapesData).forEach(function (t) {
            var i = a.plotShapesData[t];
            e += '<option value="' + i.id + '">' + i.guiName + '</option>';
          }),
          (e += '</select>'),
          $(e)
        );
      }
      var n, a;
      i.r(t),
        i.d(t, 'createShapeStyleEditor', function () {
          return o;
        }),
        (n = i('P5fv')),
        (a = i('Nu4p'));
    },
    SSGo: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.ColorBinding,
        r = a.BooleanBinder,
        s = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(i),
            $('<td>').append(e).appendTo(i),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Background', o)),
            $('<td>').append(o).prependTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Rectangle Filling',
              ),
            ),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Rectangle Line Color',
              ),
            ),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Rectangle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Rectangle Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    SSqB: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.BooleanBinder,
        s = a.ColorBinding,
        p = a.SimpleComboBinder,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            (o = $('<td>')).appendTo(_),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            e
              ? ((a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : this.createLabeledCell($.t('Trend Line'), n).appendTo(_),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            (w = $('<td>')).appendTo(_),
            (T = c()).render().appendTo(w),
            this.bindControl(
              new r(
                n,
                t.visible,
                !0,
                this.model(),
                'Change Pitchfork Line Visibility',
              ),
            ),
            this.bindControl(
              new s(
                C,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new p(
                T,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new d(
                g,
                t.linewidth,
                parseInt,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, s, h;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              e = 1;
            e <= 11;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                'Level ' + e,
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, $.t('Show Labels'), i)),
            $('<td>').append(i).prependTo(o),
            (n = $("<table cellspacing='0' cellpadding='0'>")),
            (a = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            )),
            (l = $(
              "<select><option value='top'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='bottom'>" +
                $.t('bottom') +
                '</option></select>',
            )),
            (o = $('<tr>'))
              .append('<td>' + $.t('Labels') + '</td>')
              .append(a)
              .append('<td>&nbsp</td>')
              .append(l),
            o.appendTo(n),
            (o = $('<tr>')),
            $("<td colspan='5'>").append(n).appendTo(o),
            o.appendTo(this._table),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Alignment',
              ),
            ),
            this.bindControl(
              new p(
                l,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Alignment',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table),
            (s = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(s).appendTo(o),
            this.createLabeledCell($.t('Background'), s).appendTo(o),
            (h = b()),
            $('<td colspan="3">').append(h).appendTo(o),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().showLabels,
                !0,
                this.model(),
                'Change Fib Time Zone Labels Visibility',
              ),
            ),
            this.bindControl(
              new d(
                h,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this.bindControl(
              new r(
                s,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    To5g: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SimpleComboBinder,
        p = a.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, h, c, b, u, C, y, g, w, T, _, m;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = $('<tr>').appendTo(e)),
            $('<td></td><td>' + $.t('Channel') + '</td>').appendTo(n),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(i.render()).appendTo(n),
            (n = $('<tr>').appendTo(e)),
            (a = $('<td>').appendTo(n)),
            (h = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(a),
            this.createLabeledCell('Middle', h).appendTo(n),
            (c = this.createLineWidthEditor()),
            (b = d()),
            (u = this.createColorPicker()),
            $('<td>').append(u).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(b.render()).appendTo(n),
            (n = $('<tr>').appendTo(e)),
            (C = $('<td>').appendTo(n)),
            (y = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(C),
            this.createLabeledCell('Background', y).appendTo(n),
            (g = this.createColorPicker()),
            $('<td>').append(g).appendTo(n),
            (w = $('<tbody>').appendTo(this._table)),
            (T = this.addEditorRow(
              w,
              'Extend Left',
              $("<input type='checkbox'>"),
              2,
            )),
            (_ = this.addEditorRow(
              w,
              'Extend Right',
              $("<input type='checkbox'>"),
              2,
            )),
            (m = this._linetool.properties()),
            this.bindControl(
              new l(
                y,
                m.fillBackground,
                !0,
                this.model(),
                'Change Parallel Channel Fill Background',
              ),
            ),
            this.bindControl(
              new l(
                h,
                m.showMidline,
                !0,
                this.model(),
                'Change Parallel Channel Show Center Line',
              ),
            ),
            this.bindControl(
              new l(
                T,
                m.extendLeft,
                !0,
                this.model(),
                'Change Parallel Channel Extending Left',
              ),
            ),
            this.bindControl(
              new l(
                _,
                m.extendRight,
                !0,
                this.model(),
                'Change Parallel Channel Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                m.linecolor,
                !0,
                this.model(),
                'Change Parallel Channel Color',
              ),
            ),
            this.bindControl(
              new s(
                i,
                m.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Parallel Channel Style',
              ),
            ),
            this.bindControl(
              new p(
                t,
                m.linewidth,
                !0,
                this.model(),
                'Change Parallel Channel Width',
              ),
            ),
            this.bindControl(
              new r(
                u,
                m.midlinecolor,
                !0,
                this.model(),
                'Change Parallel Channel Middle Color',
              ),
            ),
            this.bindControl(
              new s(
                b,
                m.midlinestyle,
                parseInt,
                !0,
                this.model(),
                'Change Parallel Channel Middle Style',
              ),
            ),
            this.bindControl(
              new p(
                c,
                m.midlinewidth,
                !0,
                this.model(),
                'Change Parallel Channel Middle Width',
              ),
            ),
            this.bindControl(
              new r(
                g,
                m.backgroundColor,
                !0,
                this.model(),
                'Change Parallel Channel Back Color',
                m.transparency,
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    UDBZ: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.ColorBinding,
        r = a.SliderBinder,
        s = a.SimpleComboBinder,
        p = a.BooleanBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h, c;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.createColorPicker()),
            (o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            (a = this.createFontSizeEditor()),
            (d = this.createFontEditor()),
            (h = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(h),
            $('<td>').append(e).appendTo(h),
            (d = this.createFontEditor()),
            this.bindControl(
              new l(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Pattern Line Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new s(
                d,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new p(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new p(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (c = $(
              '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
            )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(d),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(a),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .attr({ width: 1 })
                  .append(o),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .append(n),
              )
              .append($('</tr></table>'))),
            (h = this.addLabeledRow(this._table, '')),
            $('<td colspan="5">').append(c).appendTo(h),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    XXYQ: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        l.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.LessTransformer,
        p = r.GreateTransformer,
        d = r.ToIntTransformer,
        h = r.ToFloatTransformer,
        c = r.SimpleStringBinder,
        b = r.ColorBinding,
        u = r.SliderBinder,
        C = r.SimpleComboBinder,
        y = r.BooleanBinder,
        g = i('zXvd').NumericFormatter;
      inherit(o, l),
        (o.prototype.prepareLayout = function () {
          function e(e) {
            return new g().format(e);
          }
          var t, i, o, n, a, l, r, b, u, C, y, w;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (t = $('<tbody>').appendTo(this._table)),
            (i = this.addLabeledRow(t, $.t('Stop Level. Ticks:'))),
            (o = $('<input type="text">')),
            $('<td>').append(o).appendTo(i),
            o.addClass('ticker ticker--evenlonger'),
            (n = $('<input type="text" class="ticker ticker--evenlonger">')),
            $('<td>' + $.t('Price:') + '</td>').appendTo(i),
            $('<td>').append(n).appendTo(i),
            (a = this.addLabeledRow(t, $.t('Entry price:'))),
            (l = $('<input type="text" class="ticker ticker--evenlonger">')),
            $('<td colspan="2">').append(l).appendTo(a),
            (r = this.addLabeledRow(t, $.t('Profit Level. Ticks:'))),
            (b = $('<input type="text" class="ticker ticker--evenlonger">')),
            $('<td>').append(b).appendTo(r),
            (u = $('<input type="text" class="ticker ticker--evenlonger">')),
            $('<td>' + $.t('Price:') + '</td>').appendTo(r),
            $('<td>').append(u).appendTo(r),
            'LineToolRiskRewardLong' === this._linetool.getConstructor() &&
              (i.detach().appendTo(t), r.detach().prependTo(t)),
            (C = [
              d(this._linetool.properties().stopLevel.value()),
              p(0),
              s(1e9),
            ]),
            this.bindControl(
              new c(
                o,
                this._linetool.properties().stopLevel,
                C,
                !1,
                this.model(),
                'Change ' + this._linetool + ' stop level',
              ),
            ),
            (C = [
              d(this._linetool.properties().profitLevel.value()),
              p(0),
              s(1e9),
            ]),
            this.bindControl(
              new c(
                b,
                this._linetool.properties().profitLevel,
                C,
                !1,
                this.model(),
                'Change ' + this._linetool + ' profit level',
              ),
            ),
            (C = [h(this._linetool.properties().entryPrice.value())]),
            (y = new c(
              l,
              this._linetool.properties().entryPrice,
              C,
              !1,
              this.model(),
              'Change ' + this._linetool + ' entry price',
            )).addFormatter(e),
            this.bindControl(y),
            (w = this),
            (C = [
              h(this._linetool.properties().stopPrice.value()),
              function (e) {
                return w._linetool.preparseStopPrice(e);
              },
            ]),
            (y = new c(
              n,
              this._linetool.properties().stopPrice,
              C,
              !1,
              this.model(),
              'Change ' + this._linetool + ' stop price',
            )).addFormatter(e),
            this.bindControl(y),
            (C = [
              h(this._linetool.properties().targetPrice.value()),
              function (e) {
                return w._linetool.preparseProfitPrice(e);
              },
            ]),
            (y = new c(
              u,
              this._linetool.properties().targetPrice,
              C,
              !1,
              this.model(),
              'Change ' + this._linetool + ' stop price',
            )).addFormatter(e),
            this.bindControl(y);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, a),
        (n.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            l,
            r,
            d,
            g,
            w,
            T,
            _,
            m,
            f,
            L = this._linetool,
            v = L.properties();
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(e, $.t('Lines:'))),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(t).appendTo(o),
            (o = this.addLabeledRow(e, $.t('Stop Color:'))),
            (n = this.createColorPicker()),
            $('<td>').append(n).appendTo(o),
            (o = this.addLabeledRow(e, $.t('Target Color:'))),
            (a = this.createColorPicker()),
            $('<td>').append(a).appendTo(o),
            (o = this.addLabeledRow(e, $.t('Text:'))),
            (l = this.createColorPicker()),
            (r = this.createFontSizeEditor()),
            (d = this.createFontEditor()),
            $('<td>').append(l).appendTo(o),
            $('<td>').append(d).appendTo(o),
            $('<td>').append(r).appendTo(o),
            (o = $('<tr>').appendTo(e)),
            (g = $('<label>').text($.t('Compact'))),
            (w = $('<input type="checkbox">').prependTo(g)),
            $('<td>').append(g).appendTo(o),
            (o = this.addLabeledRow(e, $.t('Account Size'))),
            (T = $('<input type="text" class="ticker">')),
            $('<td>').append(T).appendTo(o),
            (o = this.addLabeledRow(e, $.t('Risk'))),
            (this._riskEdit = $('<input type="text" class="ticker">')),
            $('<td>').append(this._riskEdit).appendTo(o),
            this._riskEdit.data(
              'step',
              L.getRiskStep(v.riskDisplayMode.value()),
            ),
            v.riskDisplayMode.subscribe(this, this._onRiskDisplayModeChange),
            (_ = this.createKeyCombo({
              percents: $.t('%'),
              money: $.t('Cash'),
            })),
            $('<td>').append(_).appendTo(o),
            this.bindControl(
              new b(
                i,
                v.linecolor,
                !0,
                this.model(),
                'Change Risk/Reward line Color',
              ),
            ),
            this.bindControl(
              new u(
                t,
                v.linewidth,
                !0,
                this.model(),
                'Change Risk/Reward line width',
              ),
            ),
            this.bindControl(
              new b(
                n,
                v.stopBackground,
                !0,
                this.model(),
                'Change stop color',
                v.stopBackgroundTransparency,
              ),
            ),
            this.bindControl(
              new b(
                a,
                v.profitBackground,
                !0,
                this.model(),
                'Change target color',
                v.profitBackgroundTransparency,
              ),
            ),
            this.bindControl(
              new C(
                r,
                v.fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new C(d, v.font, null, !0, this.model(), 'Change Text Font'),
            ),
            this.bindControl(
              new b(l, v.textcolor, !0, this.model(), 'Change Text Color'),
            ),
            this.bindControl(
              new y(w, v.compact, !0, this.model(), 'Compact mode'),
            ),
            (m = [h(v.accountSize.value()), p(1), s(1e9)]),
            this.bindControl(
              new c(
                T,
                v.accountSize,
                m,
                !1,
                this.model(),
                'Change ' + this._linetool + ' Account Size',
              ),
            ),
            this.bindControl(
              new C(_, v.riskDisplayMode, null, !0, this.model(), '% / Cash'),
            ),
            (f = [
              h(v.risk.value()),
              p(1),
              function (e) {
                var t,
                  i = v.riskDisplayMode.value();
                return (
                  (e =
                    'percents' === i
                      ? e > 100
                        ? 100
                        : e
                      : e > (t = v.accountSize.value())
                      ? t
                      : e),
                  L.riskFormatter(i).format(e)
                );
              },
            ]),
            this.bindControl(
              new c(
                this._riskEdit,
                v.risk,
                f,
                !1,
                this.model(),
                'Change ' + this._linetool + ' Risk',
              ),
            ),
            this.loadData();
        }),
        (n.prototype._onRiskDisplayModeChange = function () {
          var e = this._linetool,
            t = e.properties(),
            i = t.riskDisplayMode.value(),
            o = e.riskFormatter(i);
          this._riskEdit.data('TVTicker', {
            step: e.getRiskStep(i),
            formatter: o.format.bind(o),
          });
        }),
        (n.prototype.destroy = function () {
          this._linetool
            .properties()
            .riskDisplayMode.unsubscribe(this, this._onRiskDisplayModeChange),
            a.prototype.destroy.call(this);
        }),
        (n.prototype.onResoreDefaults = function () {
          this._linetool.recalculate();
        }),
        (n.prototype.widget = function () {
          return this._table;
        }),
        (t.LineToolRiskRewardInputsPropertyPage = o),
        (t.LineToolRiskRewardStylesPropertyPage = n);
    },
    XgUb: function (e, t, i) {
      'use strict';
      function o() {
        return $(
          '<select><option value="' +
            a.MarkLocation.AboveBar +
            '">' +
            $.t('Above Bar') +
            '</option><option value="' +
            a.MarkLocation.BelowBar +
            '">' +
            $.t('Below Bar') +
            '</option><option value="' +
            a.MarkLocation.Top +
            '">' +
            $.t('Top') +
            '</option><option value="' +
            a.MarkLocation.Bottom +
            '">' +
            $.t('Bottom') +
            '</option><option value="' +
            a.MarkLocation.Absolute +
            '">' +
            $.t('Absolute') +
            '</option></select>',
        );
      }
      var n, a;
      i.r(t),
        i.d(t, 'createShapeLocationEditor', function () {
          return o;
        }),
        (n = i('P5fv')),
        i('YFKU'),
        (a = i('972a'));
    },
    Yc1q: function (e, t, i) {
      'use strict';
      function o(e) {
        function t(t, i, o) {
          e.call(this, t, i, o), (this._linetool = o);
        }
        return (
          inherit(t, e),
          (t.prototype.applyTemplate = function (e) {
            this.model().applyLineToolTemplate(
              this._linetool,
              e,
              'Apply Drawing Template',
            ),
              this.loadData();
          }),
          t
        );
      }
      function n(e, t, i) {
        l.call(this, e, t), (this._linetool = i);
      }
      var a = i('DxCR'),
        l = a.PropertyPage,
        r = a.ColorBinding,
        s = i('jNEI').addColorPicker;
      inherit(n, l),
        (n.prototype.createOneColorForAllLinesWidget = function () {
          var e = $("<td class='colorpicker-cell'>");
          return (
            this.bindControl(
              new r(
                s(e),
                this._linetool.properties().collectibleColors,
                !0,
                this.model(),
                'Change All Lines Color',
                0,
              ),
            ),
            { label: $('<td>' + $.t('Use one color') + '</td>'), editor: e }
          );
        }),
        (n.prototype.addOneColorPropertyWidget = function (e) {
          var t = this.createOneColorForAllLinesWidget(),
            i = $('<tr>');
          i.append($('<td>')).append(t.label).append(t.editor), i.appendTo(e);
        }),
        ((n = o(n)).createTemplatesPropertyPage = o),
        (e.exports = n);
    },
    a0Rg: function (e, t, i) {
      'use strict';
      function o() {
        var e = $('<select />');
        return (
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Line +
              '">' +
              $.t('Line') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.LineWithBreaks +
              '">' +
              $.t('Line With Breaks') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.StepLine +
              '">' +
              $.t('Step Line') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Histogram +
              '">' +
              $.t('Histogram') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Cross +
              '">' +
              $.t('Cross', { context: 'chart_type' }) +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Area +
              '">' +
              $.t('Area') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.AreaWithBreaks +
              '">' +
              $.t('Area With Breaks') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Columns +
              '">' +
              $.t('Columns') +
              '</option>',
          ).appendTo(e),
          $(
            '<option value="' +
              a.LineStudyPlotStyle.Circles +
              '">' +
              $.t('Circles') +
              '</option>',
          ).appendTo(e),
          e
        );
      }
      var n, a;
      i.r(t),
        i.d(t, 'createPlotEditor', function () {
          return o;
        }),
        (n = i('P5fv')),
        i('YFKU'),
        (a = i('23IT'));
    },
    a4eO: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.SliderBinder,
        p = a.BooleanBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, h;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, 'Line')),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Fib Spiral Line Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Fib Spiral Line Style',
              ),
            ),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Fib Spiral Line Width',
              ),
            ),
            (a = $('<input type="checkbox">')),
            (h = this.addLabeledRow(
              this._table,
              window.t('Counterclockwise'),
              a,
            )),
            $('<td>').append(a).prependTo(h),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().counterclockwise,
                !0,
                this.model(),
                'Change Counterclockwise',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    bllF: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.BooleanBinder,
        s = a.SliderBinder,
        p = a.SimpleComboBinder,
        d = a.ColorBinding,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            (o = $('<td>')).appendTo(_),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            e
              ? ((a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : this.createLabeledCell($.t('Trend Line'), n).appendTo(_),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            (w = $('<td>')).appendTo(_),
            (T = c()).render().appendTo(w),
            this.bindControl(
              new r(
                n,
                t.visible,
                !0,
                this.model(),
                'Change Pitchfork Line Visibility',
              ),
            ),
            this.bindControl(
              new d(
                C,
                t.color,
                !0,
                this.model(),
                'Change Pitchfork Line Color',
                0,
              ),
            ),
            this.bindControl(
              new p(
                T,
                t.linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Pitchfork Line Style',
              ),
            ),
            this.bindControl(
              new s(
                g,
                t.linewidth,
                parseInt,
                this.model(),
                'Change Pitchfork Line Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, d, h, c, u;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(
                null,
                this._linetool.properties().trendline,
                !1,
              ),
              e = 1;
            e <= 11;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                $.t('Level {0}').format(e),
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $(
              '<table class="property-page property-page-unpadded" cellspacing="0" cellpadding="0">',
            ).css({ width: '100%' })),
            (o = $('<tr>').appendTo(i)),
            $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(o)),
            $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            ).appendTo($('<td>').css({ width: '50%' }).appendTo(o)),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (a = this.addLabeledRow(this._table, $.t('Show Labels'), n)),
            $('<td>').append(n).prependTo(a),
            (l = $("<table cellspacing='0' cellpadding='0'>")),
            (d = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            )),
            (h = $(
              "<select><option value='top'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='bottom'>" +
                $.t('bottom') +
                '</option></select>',
            )),
            (a = $('<tr>'))
              .append('<td>' + $.t('Labels') + '</td>')
              .append(d)
              .append('<td>&nbsp</td>')
              .append(h),
            a.appendTo(l),
            (a = $('<tr>')),
            $("<td colspan='5'>").append(l).appendTo(a),
            a.appendTo(this._table),
            this.bindControl(
              new p(
                d,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Trend-Based Fib Time Labels Alignment',
              ),
            ),
            this.bindControl(
              new p(
                h,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Trend-Based Fib Time Labels Alignment',
              ),
            ),
            (a = $('<tr>')).appendTo(this._table),
            (c = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(c).appendTo(a),
            this.createLabeledCell($.t('Background'), c).appendTo(a),
            (u = b()),
            $('<td colspan="3">').append(u).appendTo(a),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                u,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Retracement Extend Lines',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    cqAO: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleStringBinder,
        r = a.SimpleComboBinder,
        s = a.ColorBinding,
        p = a.BooleanBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            d = this.createFontSizeEditor(),
            h = this.createFontEditor(),
            c = this.createTextEditor(350, 200),
            b = this.createColorPicker(),
            u = $('<input type="checkbox" class="visibility-switch">'),
            C = $('<input type="checkbox" class="visibility-switch">'),
            y = $('<input type="checkbox">'),
            g = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            w = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          this.bindControl(
            new s(
              n,
              this._linetool.properties().color,
              !0,
              this.model(),
              'Change Text Color',
            ),
          ),
            this.bindControl(
              new r(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                h,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Text',
              ),
            ),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
                this._linetool.properties().backgroundTransparency,
              ),
            ),
            this.bindControl(
              new p(
                u,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new p(
                C,
                this._linetool.properties().drawBorder,
                !0,
                this.model(),
                'Change Text Border',
              ),
            ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            ),
            this.bindControl(
              new p(
                y,
                this._linetool.properties().wordWrap,
                !0,
                this.model(),
                'Change Text Wrap',
              ),
            ),
            this.bindControl(
              new p(
                g,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new p(
                w,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (e = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (t = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (i = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            )),
            (this._table = e.add(i).add(t)),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(n),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(h),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(d),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(g),
              )
              .append($(document.createElement('td')).append(w))
              .appendTo(e),
            $(document.createElement('tr'))
              .append(
                $(document.createElement('td')).attr({ colspan: 5 }).append(c),
              )
              .appendTo(e),
            (o = this.addLabeledRow(t, $.t('Text Wrap'), y)),
            $('<td>').append(y).prependTo(o),
            (o = this.addLabeledRow(i, $.t('Background'), u)),
            $('<td>').append(u).prependTo(o),
            $('<td>').append(b).appendTo(o),
            (o = this.addLabeledRow(i, $.t('Border'), C)),
            $('<td>').append(C).prependTo(o),
            $('<td>').append(a).appendTo(o),
            this.loadData(),
            setTimeout(function () {
              c.select(), c.focus();
            }, 20);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (o.prototype.dialogPosition = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s,
            p = 5,
            d = 0,
            h = this._linetool,
            c = h._model.paneForSource(h),
            b = this._model._chartWidget;
          return (
            $.each(b.paneWidgets(), function (e, t) {
              if (t._state === c)
                return (d = $(t.canvasElement()).offset().top), !1;
            }),
            e || (e = {}),
            (o = e.left),
            (n = e.top),
            (a = (this._linetool.paneViews() || [])[0]) &&
              (i = a._floatPoints[0]),
            i && ((o = i.x), (n = i.y + d)),
            (l = $(t).outerHeight()),
            (r = $(window).height()),
            {
              top: (n =
                n + l + (s = h.properties().fontsize.value()) + p <= r
                  ? n + s + p
                  : n - l - p),
              left: o,
            }
          );
        }),
        (e.exports = o);
    },
    e3Xi: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleStringBinder,
        r = a.ColorBinding,
        s = a.SimpleComboBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          ).css({ width: '100%' })),
            (e = $("<input type='text'>").css({ width: '100%' })),
            (t = $('<div class="property-page-fullwidth-wrapper">').append(e)),
            (i = this.createColorPicker()),
            (o = this.createFontEditor()),
            (n = $('<tr>').appendTo(this._table)),
            $('<td>').css({ width: '0' }).html($.t('Text')).appendTo(n),
            $('<td colspan="2">').append(t).appendTo(n),
            (n = this.addLabeledRow(this._table, $.t('Text Font')))
              .children()
              .css({ whiteSpace: 'nowrap' }),
            $('<td>').append(i).appendTo(n).css({ width: '0' }),
            $('<td>').append(o).appendTo(n),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Arrow Mark Text Color',
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Arrow Mark Text',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Arrow Mark Font',
              ),
            ),
            this.loadData(),
            setTimeout(function () {
              e.select(), e.focus();
            }, 20);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    ePt6: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t, i);
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.BooleanBinder,
        p = r.SimpleComboBinder,
        d = r.SliderBinder,
        h = r.ColorBinding,
        c = i('/4PT').createLineStyleEditor;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = c()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(this._table, 'Line')),
            $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (o = $('<tr>').appendTo(this._table)),
            $('<td>').append(n).prependTo(o),
            this.createLabeledCell(2, window.t('Show Time'), n).appendTo(o),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().showTime,
                !0,
                this.model(),
                'Change Vert Line Time Visibility',
              ),
            ),
            this.bindControl(
              new h(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Vert Line Color',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Vert Line Style',
              ),
            ),
            this.bindControl(
              new d(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Vert Line Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          var e, t, i;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            this._linetool.points()[0] &&
              ((e = $('<input type="text" class="ticker">')),
              (t = $('<tr>').appendTo(this._table)),
              $('<td>' + $.t('Bar #') + '</td>').appendTo(t),
              $('<td>').append(e).appendTo(t),
              (i = this._linetool.properties().points[0]),
              this.bindBarIndex(
                i.bar,
                e,
                this.model(),
                'Change ' + this._linetool + ' point bar index',
              ),
              this.loadData());
        }),
        (t.LineToolVertLineStylesPropertyPage = o),
        (t.LineToolVertLineInputsPropertyPage = n);
    },
    'g+Cd': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(i),
            $('<td>').append(e).appendTo(i),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, 'Background', o)),
            $('<td>').append(o).prependTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Arc Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Arc Line Color',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Arc Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Arc Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    jflP: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.BooleanBinder,
        s = a.ColorBinding,
        p = a.SliderBinder,
        d = i('/4PT').createLineStyleEditor;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            h,
            c,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            (n = this.addLabeledRow(e, $.t('Text'))),
            (a = this.createColorPicker()),
            (h = this.createFontSizeEditor()),
            (c = this.createFontEditor()),
            (b = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (u = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            $('<td>').append(a).appendTo(n),
            $('<td>').append(c).appendTo(n),
            $('<td>').append(h).appendTo(n),
            $('<td>').append(b).appendTo(n),
            $('<td>').append(u).appendTo(n),
            (C = $('<tbody>').appendTo(this._table)),
            (y = $('<input type="checkbox" class="visibility-switch">')),
            (g = this.createColorPicker()),
            (n = this.addLabeledRow(C, $.t('Background'), y)),
            (w = $('<table>')),
            $('<td colspan="5">').append(w).appendTo(n),
            (n = $('<tr>').appendTo(w)),
            $('<td>').append(y).appendTo(n),
            $('<td>').append(g).appendTo(n),
            (T = $('<tbody>').appendTo(this._table)),
            (_ = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (m = $('<input type="checkbox">').appendTo(_)),
            (f = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (L = $('<input type="checkbox">').appendTo(f)),
            (v = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (S = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (n = this.addLabeledRow(T, $.t('Left End'))),
            $('<td colspan="3">').appendTo(n).append(v).append(_),
            (n = this.addLabeledRow(T, $.t('Right End'))),
            $('<td colspan="3">').appendTo(n).append(S).append(f),
            (k = $('<tbody>').appendTo(this._table)),
            (n = $('<tr>').appendTo(k)),
            (x = $("<input type='checkbox'>")),
            (B = $("<label style='display:block'>")
              .append(x)
              .append($.t('Show Prices'))),
            $("<td colspan='2'>").append(B).appendTo(n),
            this.bindControl(
              new l(
                h,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new r(
                x,
                this._linetool.properties().showPrices,
                !0,
                this.model(),
                'Change Disjoint Angle Show Prices',
              ),
            ),
            this.bindControl(
              new r(
                m,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Left',
              ),
            ),
            this.bindControl(
              new r(
                L,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Disjoint Angle Extending Right',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Disjoint Angle Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Style',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Disjoint Angle Width',
              ),
            ),
            this.bindControl(
              new l(
                v,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Left End',
              ),
            ),
            this.bindControl(
              new l(
                S,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Disjoint Angle Right End',
              ),
            ),
            this.bindControl(
              new r(
                y,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Disjoint Angle Filling',
              ),
            ),
            this.bindControl(
              new s(
                g,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Disjoint Angle Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    k7QS: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.BooleanBinder,
        s = a.SliderBinder,
        p = a.ColorBinding,
        d = a.SimpleComboBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t) {
          var i,
            o,
            n,
            a,
            s,
            d = t || $('<tr>').appendTo(this._table),
            c = $('<td>');
          return (
            c.appendTo(d),
            (i = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(c),
            t && i.css('margin-left', '15px'),
            (o = $('<td>')).appendTo(d),
            (n = $("<input type='text'>")).appendTo(o),
            n.css('width', '70px'),
            this.bindControl(
              new l(
                n,
                e.coeff,
                !1,
                this.model(),
                'Change Pitchfork Line Coeff',
              ),
            ),
            (a = $("<td class='colorpicker-cell'>")).appendTo(d),
            (s = h(a)),
            this.bindControl(
              new r(
                i,
                e.visible,
                !0,
                this.model(),
                'Change Fib Retracement Line Visibility',
              ),
            ),
            this.bindControl(
              new p(
                s,
                e.color,
                !0,
                this.model(),
                'Change Fib Retracement Line Color',
                0,
              ),
            ),
            d
          );
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            l,
            u,
            C,
            y,
            g,
            w,
            T,
            _,
            m,
            f,
            L,
            v,
            S,
            k,
            x,
            B,
            P,
            R,
            E,
            F,
            D,
            I,
            A,
            W,
            V,
            O,
            z;
          for (
            this._div = $(document.createElement('div')).addClass(
              'property-page',
            ),
              e = this._linetool.properties().trendline,
              t = $('<table>').appendTo(this._div).css('padding-bottom', '3px'),
              e &&
                ((i = $('<tr>').appendTo(t)),
                (o = $("<input type='checkbox' class='visibility-switch'>")),
                $('<td>').append(o).appendTo(i),
                $('<td>').append($.t('Trend Line')).appendTo(i),
                this.bindControl(
                  new r(
                    o,
                    e.visible,
                    !0,
                    this.model(),
                    'Change Fib Retracement Line Visibility',
                  ),
                ),
                (n = $("<td class='colorpicker-cell'>").appendTo(i)),
                (a = h(n)),
                this.bindControl(
                  new p(
                    a,
                    e.color,
                    !0,
                    this.model(),
                    'Change Fib Retracement Line Color',
                    0,
                  ),
                ),
                (l = $('<td>').appendTo(i)),
                (u = this.createLineWidthEditor()).appendTo(l),
                this.bindControl(
                  new s(
                    u,
                    e.linewidth,
                    parseInt,
                    this.model(),
                    'Change Fib Retracement Line Width',
                  ),
                ),
                (C = $('<td>').appendTo(i)),
                (y = c()).render().appendTo(C),
                this.bindControl(
                  new d(
                    y,
                    e.linestyle,
                    parseInt,
                    !0,
                    this.model(),
                    'Change Fib Retracement Line Style',
                  ),
                )),
              g = this._linetool.properties().levelsStyle,
              w = $('<tr>').appendTo(t),
              $('<td>').appendTo(w),
              $('<td>' + $.t('Levels Line') + '</td>').appendTo(w),
              $('<td>').appendTo(w),
              l = $('<td>').appendTo(w),
              (u = this.createLineWidthEditor()).appendTo(l),
              this.bindControl(
                new s(
                  u,
                  g.linewidth,
                  parseInt,
                  this.model(),
                  'Change Fib Retracement Line Width',
                ),
              ),
              C = $('<td>').appendTo(w),
              (y = c()).render().appendTo(C),
              this.bindControl(
                new d(
                  y,
                  g.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Retracement Line Style',
                ),
              ),
              this._table = $(document.createElement('table')).appendTo(
                this._div,
              ),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              T = {},
              _ = 0;
            _ < 24;
            _++
          )
            (w = T[(m = _ % 8)]),
              (f = 'level' + (_ + 1)),
              (T[m] = this.addLevelEditor(this._linetool.properties()[f], w));
          this.addOneColorPropertyWidget(this._table),
            (L = $('<table cellpadding=0 cellspacing=0>').appendTo(this._div)),
            (v = $('<tr>').appendTo(L)),
            this._linetool.properties().extendLines &&
              ((S = $("<input type='checkbox' class='visibility-switch'>")),
              (k = $('<label>').append(S).append($.t('Extend Lines'))),
              $('<td>').append(k).appendTo(v)),
            this._linetool.properties().extendLeft &&
              ((x = $("<input type='checkbox' class='visibility-switch'>")),
              (k = $('<label>').append(x).append($.t('Extend Left'))),
              $('<td>').append(k).appendTo(v)),
            this._linetool.properties().extendRight &&
              ((B = $("<input type='checkbox' class='visibility-switch'>")),
              (k = $('<label>').append(B).append($.t('Extend Right'))),
              $('<td>').append(k).appendTo(v)),
            this._linetool.properties().reverse &&
              ((P = $("<input type='checkbox' class='visibility-switch'>")),
              (k = $('<label>').append(P).append($.t('Reverse'))),
              $('<td>').append(k).appendTo(v)),
            (R = $('<tr>').appendTo(L)),
            (E = $("<input type='checkbox' class='visibility-switch'>")),
            (k = $('<label>').append(E).append($.t('Levels'))),
            $('<td>').append(k).appendTo(R),
            (F = $("<input type='checkbox' class='visibility-switch'>")),
            (k = $('<label>').append(F).append($.t('Prices'))),
            $('<td>').append(k).appendTo(R),
            (D = $("<input type='checkbox' class='visibility-switch'>")),
            (k = $('<label>').append(D).append($.t('Percents'))),
            $('<td>').append(k).appendTo(R),
            (I = $("<table cellspacing='0' cellpadding='0'>").appendTo(
              this._div,
            )),
            (A = $(
              "<select><option value='left'>" +
                $.t('left') +
                "</option><option value='center'>" +
                $.t('center') +
                "</option><option value='right'>" +
                $.t('right') +
                '</option></select>',
            )),
            (W = $(
              "<select><option value='bottom'>" +
                $.t('top') +
                "</option><option value='middle'>" +
                $.t('middle') +
                "</option><option value='top'>" +
                $.t('bottom') +
                '</option></select>',
            )),
            (w = $('<tr>'))
              .append('<td>' + $.t('Labels') + '</td>')
              .append(A)
              .append('<td>&nbsp</td>')
              .append(W),
            w.appendTo(I),
            (V = $("<table cellspacing='0' cellpadding='0'>").appendTo(
              this._div,
            )),
            (w = $('<tr>').appendTo(V)),
            (O = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(O).appendTo(w),
            this.createLabeledCell($.t('Background'), O).appendTo(w),
            (z = b()),
            $('<td>').append(z).appendTo(w),
            this._linetool.properties().fibLevelsBasedOnLogScale &&
              ((w = $('<tr>').appendTo(V)),
              (this._fibLevelsBasedOnLogScaleEditor = $(
                "<input type='checkbox' class='visibility-switch'>",
              )),
              (this._fibLevelsBasedOnLogScaleLabel = $('<label>')
                .append(this._fibLevelsBasedOnLogScaleEditor)
                .append($.t('Fib levels based on log scale'))),
              $('<td colspan="3">')
                .append(this._fibLevelsBasedOnLogScaleLabel)
                .appendTo(w),
              this._linetool
                .priceScale()
                .modeChanged()
                .subscribe(this, this._onPriceScaleModeChanged),
              this._onPriceScaleModeChanged(
                void 0,
                this._linetool.priceScale().mode(),
              )),
            this.bindControl(
              new r(
                F,
                this._linetool.properties().showPrices,
                !0,
                this.model(),
                'Change Gann Fan Prices Visibility',
              ),
            ),
            this.bindControl(
              new r(
                E,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Gann Fan Levels Visibility',
              ),
            ),
            this.bindControl(
              new r(
                O,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Retracement Background Visibility',
              ),
            ),
            this.bindControl(
              new s(
                z,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Retracement Background Transparency',
              ),
            ),
            this._linetool.properties().extendLines &&
              this.bindControl(
                new r(
                  S,
                  this._linetool.properties().extendLines,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().extendLeft &&
              this.bindControl(
                new r(
                  x,
                  this._linetool.properties().extendLeft,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().extendRight &&
              this.bindControl(
                new r(
                  B,
                  this._linetool.properties().extendRight,
                  !0,
                  this.model(),
                  'Change Fib Retracement Extend Lines',
                ),
              ),
            this._linetool.properties().reverse &&
              this.bindControl(
                new r(
                  P,
                  this._linetool.properties().reverse,
                  !0,
                  this.model(),
                  'Change Fib Retracement Reverse',
                ),
              ),
            this.bindControl(
              new d(
                A,
                this._linetool.properties().horzLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Labels Horizontal Alignment',
              ),
            ),
            this.bindControl(
              new d(
                W,
                this._linetool.properties().vertLabelsAlign,
                null,
                !0,
                this.model(),
                'Change Fib Labels Vertical Alignment',
              ),
            ),
            this.bindControl(
              new r(
                D,
                this._linetool.properties().coeffsAsPercents,
                !0,
                this.model(),
                'Change Fib Retracement Coeffs As Percents',
              ),
            ),
            this._linetool.properties().fibLevelsBasedOnLogScale &&
              this.bindControl(
                new r(
                  this._fibLevelsBasedOnLogScaleEditor,
                  this._linetool.properties().fibLevelsBasedOnLogScale,
                  !0,
                  this.model(),
                  'Change Fib levels based on log scale',
                ),
              ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._div;
        }),
        (o.prototype.destroy = function () {
          n.prototype.destroy.call(this),
            this._linetool.priceScale().modeChanged().unsubscribeAll(this);
        }),
        (o.prototype._onPriceScaleModeChanged = function (e, t) {
          var i = !t.log;
          this._fibLevelsBasedOnLogScaleEditor.attr('disabled', i),
            this._fibLevelsBasedOnLogScaleLabel.toggleClass('disabled', i);
        }),
        (e.exports = o);
    },
    kNI9: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder,
        p = a.SimpleComboBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h, c, b, u;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.createColorPicker()),
            (o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            (a = this.createFontSizeEditor()),
            (d = this.createFontEditor()),
            (h = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(h),
            $('<td>').append(e).appendTo(h),
            (c = $('<input type="checkbox" class="visibility-switch">')),
            (b = this.createColorPicker()),
            (d = this.createFontEditor()),
            (h = this.addLabeledRow(this._table, 'Background', c)),
            $('<td>').append(c).prependTo(h),
            $('<td>').append(b).appendTo(h),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pattern Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Pattern Line Color',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Pattern Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new p(
                d,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (u = $(
              '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
            )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(d),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(a),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .attr({ width: 1 })
                  .append(o),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .append(n),
              )
              .append($('</tr></table>'))),
            (h = this.addLabeledRow(this._table, '')),
            $('<td colspan="5">').append(u).appendTo(h),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    kr49: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder,
        p = a.SimpleComboBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h, c, b, u;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.createColorPicker()),
            (o = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (n = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            (a = this.createFontSizeEditor()),
            (d = this.createFontEditor()),
            (h = this.addLabeledRow(this._table, 'Border')).prepend('<td>'),
            $('<td>').append(t).appendTo(h),
            $('<td>').append(e).appendTo(h),
            (c = $('<input type="checkbox" class="visibility-switch">')),
            (b = this.createColorPicker()),
            (d = this.createFontEditor()),
            (h = this.addLabeledRow(this._table, 'Background', c)),
            $('<td>').append(c).prependTo(h),
            $('<td>').append(b).appendTo(h),
            this.bindControl(
              new l(
                c,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pattern Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Pattern Line Color',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Pattern Text Color',
              ),
            ),
            this.bindControl(
              new r(
                b,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Pattern Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Pattern Border Width',
              ),
            ),
            this.bindControl(
              new p(
                a,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new p(
                d,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new l(
                n,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            (u = $(
              '<table class="property-page" cellspacing="0" cellpadding="2"><tr>',
            )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(i),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(d),
              )
              .append(
                $(document.createElement('td')).attr({ width: 1 }).append(a),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .attr({ width: 1 })
                  .append(o),
              )
              .append(
                $(document.createElement('td'))
                  .css('vertical-align', 'top')
                  .append(n),
              )
              .append($('</tr></table>'))),
            (h = this.addLabeledRow(this._table, '')),
            $('<td colspan="5">').append(u).appendTo(h),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    lNYe: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.BooleanBinder,
        p = a.SliderBinder,
        d = i('/4PT').createLineStyleEditor,
        h = i('bKFv').StatsPosition;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, c, b, u, C, y, g, w, T, _, m, f, L, v, S, k, x;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = d()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            (a = $('<tbody>').appendTo(this._table)),
            (c = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (b = $('<input type="checkbox">').appendTo(c)),
            (u = $('<label>' + $.t('Extend') + ' </label>').css({
              'margin-left': '8px',
            })),
            (C = $('<input type="checkbox">').appendTo(u)),
            (y = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (g = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (n = this.addLabeledRow(a, $.t('Left End'))),
            $('<td colspan="3">').appendTo(n).append(y).append(c),
            (n = this.addLabeledRow(a, $.t('Right End'))),
            $('<td colspan="3">').appendTo(n).append(g).append(u),
            (w = $(
              "<select><option value='" +
                h.Left +
                "'>" +
                $.t('Left') +
                "</option><option value='" +
                h.Center +
                "'>" +
                $.t('Center') +
                "</option><option value='" +
                h.Right +
                "'>" +
                $.t('Right') +
                '</option></select>',
            )),
            (T = this.addLabeledRow(a, $.t('Stats Position'))),
            $('<td colspan="3">').appendTo(T).append(w),
            (n = this.addLabeledRow(a, $.t('Stats Text Color'))),
            (_ = this.createColorPicker()),
            $('<td>').append(_).appendTo(n),
            this.bindControl(
              new r(
                _,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            (m = $('<input type="checkbox">')),
            (f = $('<input type="checkbox">')),
            (L = $('<input type="checkbox">')),
            (v = $('<input type="checkbox">')),
            (S = $('<input type="checkbox">')),
            (k = $('<input type="checkbox">')),
            (x = $('<input type="checkbox">')),
            (n = this.addLabeledRow(a, $.t('Show Price Range'))),
            $('<td colspan="3">').appendTo(n).append(m),
            (n = this.addLabeledRow(a, $.t('Show Bars Range'))),
            $('<td colspan="3">').appendTo(n).append(f),
            (n = this.addLabeledRow(a, $.t('Show Date/Time Range'))),
            $('<td colspan="3">').appendTo(n).append(L),
            (n = this.addLabeledRow(a, $.t('Show Distance'))),
            $('<td colspan="3">').appendTo(n).append(v),
            (n = this.addLabeledRow(a, $.t('Show Angle'))),
            $('<td colspan="3">').appendTo(n).append(S),
            (n = this.addLabeledRow(a, $.t('Always Show Stats'))),
            $('<td colspan="3">').appendTo(n).append(k),
            (n = this.addLabeledRow(a, $.t('Show Middle Point'))),
            $('<td colspan="3">').appendTo(n).append(x),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Extending Left',
              ),
            ),
            this.bindControl(
              new s(
                C,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Extending Right',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Style',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Width',
              ),
            ),
            this.bindControl(
              new l(
                y,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Left End',
              ),
            ),
            this.bindControl(
              new l(
                g,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Right End',
              ),
            ),
            this.bindControl(
              new s(
                m,
                this._linetool.properties().showPriceRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Price Range',
              ),
            ),
            this.bindControl(
              new s(
                f,
                this._linetool.properties().showBarsRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Bars Range',
              ),
            ),
            this.bindControl(
              new s(
                L,
                this._linetool.properties().showDateTimeRange,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Date/Time Range',
              ),
            ),
            this.bindControl(
              new s(
                v,
                this._linetool.properties().showDistance,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Distance',
              ),
            ),
            this.bindControl(
              new s(
                S,
                this._linetool.properties().showAngle,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Angle',
              ),
            ),
            this.bindControl(
              new s(
                k,
                this._linetool.properties().alwaysShowStats,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Always Show Stats',
              ),
            ),
            this.bindControl(
              new s(
                x,
                this._linetool.properties().showMiddlePoint,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Show Middle Point',
              ),
            ),
            this.bindControl(
              new l(
                w,
                this._linetool.properties().statsPosition,
                parseInt,
                !0,
                this.model(),
                'Change ' + this._linetool.name() + ' Stats Position',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    mBo9: function (e, t, i) {
      'use strict';
      function o() {
        return $('<input type="checkbox" class="visibility-switch"/>');
      }
      var n;
      i.r(t),
        i.d(t, 'createVisibilityEditor', function () {
          return o;
        }),
        (n = i('P5fv'));
    },
    n3Kh: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t), (this._linetool = i), this.prepareLayout();
      }
      var n = i('DxCR'),
        a = n.PropertyPage,
        l = n.GreateTransformer,
        r = n.LessTransformer,
        s = n.ToIntTransformer,
        p = n.SimpleStringBinder;
      i('PVgW'),
        inherit(o, a),
        (o.BarIndexPastLimit = -5e4),
        (o.BarIndexFutureLimit = 15e3),
        (o.prototype.bindBarIndex = function (e, t, i, n) {
          var a = [
            s(e.value()),
            l(o.BarIndexPastLimit),
            r(o.BarIndexFutureLimit),
          ];
          this.bindControl(this.createStringBinder(t, e, a, !0, i, n));
        }),
        (o.prototype.createPriceEditor = function (e) {
          var t,
            i,
            o,
            n = this._linetool,
            a = n.ownerSource().formatter(),
            l = function (e) {
              return a.format(e);
            },
            r = function (e) {
              var t = a.parse(e);
              if (t.res) return null != t.price ? t.price : t.value;
            },
            s = $("<input type='text'>");
          return (
            s.TVTicker({
              step: a._minMove / a._priceScale || 1,
              formatter: l,
              parser: r,
            }),
            e &&
              ((t = [
                function (t) {
                  var i = r(t);
                  return void 0 === i ? e.value() : i;
                },
              ]),
              (i = 'Change ' + n.title() + ' point price'),
              (o = this.createStringBinder(
                s,
                e,
                t,
                !1,
                this.model(),
                i,
              )).addFormatter(function (e) {
                return a.format(e);
              }),
              this.bindControl(o)),
            s
          );
        }),
        (o.prototype._createPointRow = function (e, t, i) {
          var o,
            n,
            a,
            l,
            r = $('<tr>'),
            s = $('<td>');
          return (
            s.html($.t('Price') + i),
            s.appendTo(r),
            (o = $('<td>')).appendTo(r),
            this.createPriceEditor(t.price).appendTo(o),
            (n = $('<td>')).html($.t('Bar #')),
            n.appendTo(r),
            (a = $('<td>')).appendTo(r),
            (l = $("<input type='text'>")).appendTo(a),
            l.addClass('ticker'),
            this.bindBarIndex(
              t.bar,
              l,
              this.model(),
              'Change ' + this._linetool.title() + ' point bar index',
            ),
            r
          );
        }),
        (o.prototype.prepareLayoutForTable = function (e) {
          var t,
            i,
            o,
            n,
            a = this._linetool.points(),
            l = a.length;
          for (t = 0; t < a.length; t++)
            (i = a[t]),
              (o = this._linetool.properties().points[t]) &&
                ((n = t || l > 1 ? ' ' + (t + 1) : ''),
                this._createPointRow(i, o, n).appendTo(e));
        }),
        (o.prototype.prepareLayout = function () {
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            this.prepareLayoutForTable(this._table),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (o.prototype.createStringBinder = function (e, t, i, o, n, a) {
          return new p(e, t, i, o, n, a);
        }),
        (e.exports = o);
    },
    nzyg: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t, i);
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.BooleanBinder,
        p = r.SimpleComboBinder,
        d = r.SliderBinder,
        h = r.ColorBinding,
        c = i('/4PT').createLineStyleEditor;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, r;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = c()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(this._table, 'Line')),
            $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(e).appendTo(o),
            $('<td>').append(t.render()).appendTo(o),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (a = $('<tr>').appendTo(this._table)),
            $('<td>').append(n).prependTo(a),
            this.createLabeledCell(2, window.t('Show Price'), n).appendTo(a),
            (l = $("<input type='checkbox' class='visibility-switch'>")),
            (r = $('<tr>').appendTo(this._table)),
            $('<td>').append(l).prependTo(r),
            this.createLabeledCell(2, window.t('Show Time'), l).appendTo(r),
            this.bindControl(
              new s(
                l,
                this._linetool.properties().showTime,
                !0,
                this.model(),
                'Change Cross Line Time Visibility',
              ),
            ),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().showPrice,
                !0,
                this.model(),
                'Change Cross Line Price Visibility',
              ),
            ),
            this.bindControl(
              new h(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Cross Line Color',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Cross Line Style',
              ),
            ),
            this.bindControl(
              new d(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Cross Line Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          var e, t, i, o;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2" width="100%">',
          )),
            this._linetool.points()[0] &&
              ((e = $('<input type="text" class="ticker">')),
              (t = $('<tr>').appendTo(this._table)),
              $('<td>' + $.t('Bar #') + '</td>').appendTo(t),
              $('<td>').append(e).appendTo(t),
              (i = this._linetool.properties().points[0]),
              this.bindBarIndex(
                i.bar,
                e,
                this.model(),
                'Change ' + this._linetool + ' point bar index',
              ),
              (o = this.createPriceEditor(i.price)),
              $('<td>' + $.t('Price') + '</td>').appendTo(t),
              $('<td>').append(o).appendTo(t),
              this.loadData());
        }),
        (t.LineToolCrossLineStylesPropertyPage = o),
        (t.LineToolCrossLineInputsPropertyPage = n);
    },
    o4FW: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.SimpleComboBinder,
        s = a.BooleanBinder,
        p = a.ColorBinding,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            (o = $('<td>')).appendTo(_),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            e
              ? ((a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : this.createLabeledCell('Trend Line', n).appendTo(_),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            e ||
              ((w = $('<td>')).appendTo(_),
              (T = c()).render().appendTo(w),
              this.bindControl(
                new r(
                  T,
                  t.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Circle Style',
                ),
              )),
            this.bindControl(
              new s(
                n,
                t.visible,
                !0,
                this.model(),
                'Change Fib Circle Visibility',
              ),
            ),
            this.bindControl(
              new p(
                C,
                t.color,
                !0,
                this.model(),
                'Change Fib Circle Line Color',
                0,
              ),
            ),
            this.bindControl(
              new d(
                g,
                t.linewidth,
                !0,
                this.model(),
                'Change Fib Circle Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(
                null,
                this._linetool.properties().trendline,
                !1,
              ),
              e = 1;
            e <= 11;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                'Level ' + e,
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, 'Levels', i)),
            $('<td>').append(i).prependTo(o),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, 'Coeffs As Percents', n)),
            $('<td>').append(n).prependTo(o),
            this.bindControl(
              new s(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Circle Levels Visibility',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table),
            (a = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(a).appendTo(o),
            this.createLabeledCell('Background', a).appendTo(o),
            (l = b()),
            $('<td colspan="3">').append(l).appendTo(o),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Pitchfork Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                l,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Pitchfork Background Transparency',
              ),
            ),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().coeffsAsPercents,
                !0,
                this.model(),
                'Change Fib Retracement Coeffs As Percents',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    o6hY: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        l.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t),
          (this._study = i),
          (this._property = e),
          this.prepareLayout();
      }
      var a = i('DxCR'),
        l = a.PropertyPage,
        r = a.GreateTransformer,
        s = a.LessTransformer,
        p = a.ToIntTransformer,
        d = a.ToFloatTransformer,
        h = a.SimpleComboBinder,
        c = a.BooleanBinder,
        b = a.DisabledBinder,
        u = a.ColorBinding,
        C = a.SliderBinder,
        y = a.SimpleStringBinder,
        g = i('jNEI').addColorPicker,
        w = i('/4PT').createLineStyleEditor,
        T = i('XgUb').createShapeLocationEditor,
        _ = i('SA6f').createShapeStyleEditor,
        m = i('mBo9').createVisibilityEditor,
        f = i('A3Hk').createHHistDirectionEditor,
        L = i('a0Rg').createPlotEditor,
        v = i('zXvd').NumericFormatter,
        S = i('0YCj'),
        k = i('23IT').LineStudyPlotStyle,
        x = i('uOxu').getLogger('Chart.Study.PropertyPage'),
        B = i('PC8g').trackEvent;
      inherit(o, l),
        (o.prototype.prepareLayout = function () {
          function e(e) {
            return new v().format(e);
          }
          var t,
            i,
            n,
            a,
            l,
            r,
            s,
            p,
            b,
            T,
            _,
            m,
            f,
            L,
            k,
            B,
            P,
            R,
            E,
            F,
            D,
            I,
            A,
            W,
            V,
            O,
            z,
            M,
            Y,
            q,
            H,
            N,
            G,
            j,
            U,
            K;
          for (
            this._table = $('<table/>'),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              t = this._study.metaInfo(),
              i = {},
              n = 0;
            n < t.plots.length;
            ++n
          )
            if (
              !(
                this._study.isSelfColorerPlot(n) ||
                this._study.isTextColorerPlot(n) ||
                this._study.isDataOffsetPlot(n) ||
                this._study.isOHLCColorerPlot(n) ||
                this._study.isAlertConditionPlot(n)
              )
            ) {
              if (((r = t.plots[n]), t.styles)) {
                if (t.styles[r.id]) a = t.styles[r.id].isHidden;
                else if (!this._study.isOHLCSeriesPlot(n)) continue;
                if (this._study.isOHLCSeriesPlot(n)) {
                  if (i[(l = t.plots[n].target)]) continue;
                  (a = t.ohlcPlots[l].isHidden), (i[l] = l);
                }
                if (a) continue;
              }
              this._study.isLinePlot(n) ||
              this._study.isBarColorerPlot(n) ||
              this._study.isBgColorerPlot(n)
                ? this._prepareLayoutForPlot(n, r)
                : this._study.isPlotArrowsPlot(n)
                ? this._prepareLayoutForArrowsPlot(n, r)
                : this._study.isPlotCharsPlot(n)
                ? this._prepareLayoutForCharsPlot(n, r)
                : this._study.isPlotShapesPlot(n)
                ? this._prepareLayoutForShapesPlot(n, r)
                : this._study.isOHLCSeriesPlot(n)
                ? ((s = { id: l, type: 'ohlc' }),
                  this._study.isOHLCBarsPlot(n)
                    ? this._prepareLayoutForBarsPlot(n, s)
                    : this._study.isOHLCCandlesPlot(n) &&
                      this._prepareLayoutForCandlesPlot(n, s))
                : x.logError('Unknown plot type: ' + r.type);
            }
          if ((p = this._study.properties().bands) && p.childCount() > 0)
            for (n = 0; n < p.childCount(); n++)
              ((b = p[n]).isHidden && b.isHidden.value()) ||
                ((T = $('<tr class="line"/>')).appendTo(this._table),
                (_ = $('<td/>')).appendTo(T),
                (m = $(
                  "<input type='checkbox' class='visibility-switch'/>",
                )).appendTo(_),
                (f = $.t(b.name.value(), { context: 'input' })),
                (L = this.createLabeledCell(f, m)
                  .appendTo(T)
                  .addClass('propertypage-name-label')),
                (k = $('<td/>')).appendTo(T),
                k.addClass('colorpicker-cell'),
                (B = g(k)),
                (P = $('<td/>')).appendTo(T),
                (R = this.createLineWidthEditor()).appendTo(P),
                (E = $('<td colspan="4">').css({
                  whiteSpace: 'nowrap',
                })).appendTo(T),
                (F = w()).render().appendTo(E),
                (D = $(
                  "<input class='property-page-bandwidth' type='text'/>",
                )).appendTo(E),
                (I = [d(b.value.value())]),
                (A = 'Change band'),
                (W = new y(D, b.value, I, !1, this.model(), A)).addFormatter(e),
                this.bindControl(W),
                this.bindControl(new c(m, b.visible, !0, this.model(), A)),
                this.bindControl(new u(B, b.color, !0, this.model(), A)),
                this.bindControl(
                  new h(F, b.linestyle, parseInt, !0, this.model(), A),
                ),
                this.bindControl(new C(R, b.linewidth, !0, this.model(), A)));
          if (
            (this._study.properties().bandsBackground &&
              ((b = this._study.properties().bandsBackground),
              (V = $.t('Background')),
              (A = $.t('Change band background')),
              (T = this._prepareFilledAreaBackground(
                b.fillBackground,
                b.backgroundColor,
                b.transparency,
                V,
                A,
              )).appendTo(this._table)),
            this._study.properties().areaBackground &&
              ((b = this._study.properties().areaBackground),
              (V = $.t('Background')),
              (A = $.t('Change area background')),
              (T = this._prepareFilledAreaBackground(
                b.fillBackground,
                b.backgroundColor,
                b.transparency,
                V,
                A,
              )).appendTo(this._table)),
            void 0 !== (O = t.filledAreas))
          )
            for (n = 0; n < O.length; ++n)
              (z = O[n]).isHidden ||
                ((A = 'Change ' + V),
                (b = this._study.properties().filledAreasStyle[z.id]),
                (V = z.title || $.t('Background')),
                z.palette
                  ? ((T = $('<tr class="line"/>')),
                    (_ = $('<td/>')).appendTo(T),
                    (m = $(
                      "<input type='checkbox' class='visibility-switch'/>",
                    )).appendTo(_),
                    this.bindControl(
                      new c(m, b.visible, !0, this.model(), A + ' visibility'),
                    ),
                    (M = $.t(V, { context: 'study' })),
                    this.createLabeledCell(M, m)
                      .appendTo(T)
                      .addClass('propertypage-name-label'),
                    T.appendTo(this._table),
                    (q = (Y = this._findPlotPalette(n, z)).palette),
                    (H = Y.paletteProps),
                    this._prepareLayoutForPalette(0, z, q, H, A))
                  : (T = this._prepareFilledAreaBackground(
                      b.visible,
                      b.color,
                      b.transparency,
                      V,
                      A,
                    )).appendTo(this._table));
          for (N in t.graphics)
            for (G in t.graphics[N])
              (b = this._property.graphics[N][G]),
                o['_createRow_' + N].call(this, this._table, b);
          1 ===
            (j = this._table.find('.visibility-switch.plot-visibility-switch'))
              .length &&
            ((_ = j.parent()).css('display', 'none'),
            1 ===
            (L = this._table.find('.propertypage-plot-with-palette')).length
              ? L.css('display', 'none')
              : ((L = this._table.find('.propertypage-name-label')).css(
                  'padding-left',
                  0,
                ),
                L.find('label').attr('for', ''))),
            (U = this._prepareStudyPropertiesLayout()),
            (this._table = this._table.add(U)),
            S.isScriptStrategy(t) &&
              ((K = this._prepareOrdersSwitches()),
              (this._table = this._table.add(K))),
            this.loadData();
        }),
        (o.prototype._prepareOrdersSwitches = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            l,
            r = $(
              '<table class="property-page study-strategy-properties" cellspacing="0" cellpadding="2">',
            ),
            s = 'chart-orders-switch_' + Date.now().toString(36),
            p = $('<tr>').appendTo(r),
            d = $('<input id="' + s + '" type="checkbox">').appendTo(
              $('<td>').appendTo(p),
            );
          return (
            $(
              '<label for="' + s + '">' + $.t('Trades on Chart') + '</label>',
            ).appendTo($('<td>').appendTo(p)),
            (e = 'chart-orders-labels-switch_' + Date.now().toString(36)),
            (t = $('<tr>').appendTo(r)),
            (i = $('<input id="' + e + '" type="checkbox">').appendTo(
              $('<td>').appendTo(t),
            )),
            $(
              '<label for="' + e + '">' + $.t('Signal Labels') + '</label>',
            ).appendTo($('<td>').appendTo(t)),
            (o = 'chart-orders-qty-switch_' + Date.now().toString(36)),
            (n = $('<tr>').appendTo(r)),
            (a = $('<input id="' + o + '" type="checkbox">').appendTo(
              $('<td>').appendTo(n),
            )),
            $(
              '<label for="' + o + '">' + $.t('Quantity') + '</label>',
            ).appendTo($('<td>').appendTo(n)),
            (l = this._study.properties()),
            this.bindControl(
              new c(
                d,
                l.strategy.orders.visible,
                !0,
                this.model(),
                'Trades on chart visibility',
              ),
            ),
            this.bindControl(
              new c(
                i,
                l.strategy.orders.showLabels,
                !0,
                this.model(),
                'Signal labels visibility',
              ),
            ),
            this.bindControl(
              new b(
                i,
                l.strategy.orders.visible,
                !0,
                this.model(),
                'Signal labels visibility',
                !0,
              ),
            ),
            this.bindControl(
              new c(
                a,
                l.strategy.orders.showQty,
                !0,
                this.model(),
                'Quantity visibility',
              ),
            ),
            this.bindControl(
              new b(
                a,
                l.strategy.orders.visible,
                !0,
                this.model(),
                'Quantity visibility',
                !0,
              ),
            ),
            r
          );
        }),
        (o.prototype._prepareLayoutForPlot = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s,
            p,
            d,
            b,
            y,
            w,
            T = t.id,
            _ = this._study.properties().styles[T],
            m = this._findPlotPalette(e, t),
            f = m.palette,
            v = m.paletteProps,
            S = 'Change ' + T;
          f
            ? ((i = $('<tr class="line"/>')).appendTo(this._table),
              (o = $('<td/>')).appendTo(i),
              o.addClass('visibility-cell'),
              (n = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>",
              )).appendTo(o),
              this.bindControl(new c(n, _.visible, !0, this.model(), S)),
              (a = $.t(_.title.value(), { context: 'input' })),
              this.createLabeledCell(a, n)
                .appendTo(i)
                .addClass(
                  'propertypage-name-label propertypage-plot-with-palette',
                ),
              this._prepareLayoutForPalette(e, t, f, v, S))
            : ((i = $('<tr class="line"/>')).appendTo(this._table),
              (o = $('<td/>')).appendTo(i),
              o.addClass('visibility-cell'),
              (n = $(
                "<input type='checkbox' class='visibility-switch plot-visibility-switch'/>",
              )).appendTo(o),
              (a = $.t(this._study.properties().styles[T].title.value(), {
                context: 'input',
              })),
              this.createLabeledCell(a, n)
                .appendTo(i)
                .addClass('propertypage-name-label'),
              (l = $('<td/>')).appendTo(i),
              l.addClass('colorpicker-cell'),
              (r = g(l)),
              (s = $('<td/>')).appendTo(i),
              (p = this.createLineWidthEditor()).appendTo(s),
              (d = $('<td>')).appendTo(i),
              (b = L()).appendTo(d),
              (y = $('<td>')).appendTo(i),
              (w = $("<input type='checkbox'>"))
                .on('change', this._trackPriceLine.bind(this))
                .appendTo(y),
              this.createLabeledCell('Price Line', w).appendTo(i),
              this.bindControl(new c(n, _.visible, !0, this.model(), S)),
              this.bindControl(
                new u(r, _.color, !0, this.model(), S, _.transparency),
              ),
              this.bindControl(
                new C(
                  p,
                  _.linewidth,
                  !0,
                  this.model(),
                  S,
                  this._study.metaInfo().isTVScript,
                ),
              ),
              this.bindControl(
                new h(b, _.plottype, parseInt, !0, this.model(), S),
              ),
              this.bindControl(
                new c(w, _.trackPrice, !0, this.model(), 'Change Price Line'),
              ));
        }),
        (o.prototype._prepareLayoutForBarsPlot = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s = t.id,
            p = this._study.properties().ohlcPlots[s],
            d = this._findPlotPalette(e, t),
            h = d.palette,
            b = d.paletteProps,
            C = 'Change ' + s,
            y = $('<tr class="line"/>');
          y.appendTo(this._table),
            (i = $('<td/>')).appendTo(y),
            i.addClass('visibility-cell'),
            (o = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(i),
            this.bindControl(new c(o, p.visible, !0, this.model(), C)),
            (n = p.title.value()),
            this.createLabeledCell(n, o)
              .appendTo(y)
              .addClass('propertypage-name-label'),
            h
              ? ((a = !0), this._prepareLayoutForPalette(e, t, h, b, C, a))
              : ((l = $('<td/>')).appendTo(y),
                l.addClass('colorpicker-cell'),
                (r = g(l)),
                this.bindControl(new u(r, p.color, !0, this.model(), C)));
        }),
        (o.prototype._prepareLayoutForCandlesPlot = function (e, t) {
          var i, o, n, a, l, r, s, p, d;
          this._prepareLayoutForBarsPlot(e, t),
            (i = t.id),
            (o = this._study.properties().ohlcPlots[i]),
            (n = 'Change ' + i),
            (a = $('<tr class="line"/>')).appendTo(this._table),
            (l = $('<td/>')).appendTo(a),
            l.addClass('visibility-cell'),
            (r = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(l),
            this.bindControl(new c(r, o.drawWick, !0, this.model(), n)),
            (s = 'Wick'),
            this.createLabeledCell(s, r).appendTo(a),
            (p = $('<td/>')).appendTo(a),
            p.addClass('colorpicker-cell'),
            (d = g(p)),
            this.bindControl(new u(d, o.wickColor, !0, this.model(), n));
        }),
        (o.prototype._prepareLayoutForShapesPlot = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s,
            p,
            d,
            b = t.id,
            C = this._study.properties().styles[b],
            y = this._findPlotPalette(e, t),
            w = y.palette,
            m = y.paletteProps,
            f = 'Change ' + b,
            L = $('<tr class="line"/>');
          L.appendTo(this._table),
            (i = $('<td/>')).appendTo(L),
            i.addClass('visibility-cell'),
            (o = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(i),
            this.bindControl(new c(o, C.visible, !0, this.model(), f)),
            (n = $.t(this._study.properties().styles[b].title.value(), {
              context: 'input',
            })),
            this.createLabeledCell(n, o)
              .appendTo(L)
              .addClass('propertypage-name-label'),
            (a = $('<td/>')).appendTo(L),
            (l = _()).appendTo(a),
            this.bindControl(new h(l, C.plottype, null, !0, this.model(), f)),
            (r = $('<td/>')).appendTo(L),
            (s = T()).appendTo(r),
            this.bindControl(new h(s, C.location, null, !0, this.model(), f)),
            w
              ? this._prepareLayoutForPalette(e, t, w, m, f)
              : ((L = $('<tr class="line"/>')).appendTo(this._table),
                $('<td/>').appendTo(L),
                $('<td/>').appendTo(L),
                (p = $('<td/>')).appendTo(L),
                p.addClass('colorpicker-cell'),
                (d = g(p)),
                this.bindControl(
                  new u(d, C.color, !0, this.model(), f, C.transparency),
                ));
        }),
        (o.prototype._prepareLayoutForCharsPlot = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s,
            p,
            d,
            b = t.id,
            C = this._study.properties().styles[b],
            w = this._findPlotPalette(e, t),
            _ = w.palette,
            m = w.paletteProps,
            f = 'Change ' + b,
            L = $('<tr class="line"/>');
          L.appendTo(this._table),
            (i = $('<td/>')).appendTo(L),
            i.addClass('visibility-cell'),
            (o = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(i),
            this.bindControl(new c(o, C.visible, !0, this.model(), f)),
            (n = $.t(this._study.properties().styles[b].title.value(), {
              context: 'input',
            })),
            this.createLabeledCell(n, o)
              .appendTo(L)
              .addClass('propertypage-name-label'),
            (a = $('<td/>')).appendTo(L),
            (l = $('<input type="text"/>')).appendTo(a),
            l.keyup(function () {
              var e = $(this),
                t = e.val();
              t && (e.val(t.split('')[t.length - 1]), e.change());
            }),
            this.bindControl(new y(l, C.char, null, !1, this.model(), f)),
            (r = $('<td/>')).appendTo(L),
            (s = T()).appendTo(r),
            this.bindControl(new h(s, C.location, null, !0, this.model(), f)),
            _
              ? this._prepareLayoutForPalette(e, t, _, m, f)
              : ((L = $('<tr class="line"/>')).appendTo(this._table),
                $('<td/>').appendTo(L),
                $('<td/>').appendTo(L),
                (p = $('<td/>')).appendTo(L),
                p.addClass('colorpicker-cell'),
                (d = g(p)),
                this.bindControl(
                  new u(d, C.color, !0, this.model(), f, C.transparency),
                ));
        }),
        (o.prototype._isStyleNeedsConnectPoints = function (e) {
          return [k.Cross, k.Circles].indexOf(e) >= 0;
        }),
        (o.prototype._prepareLayoutForPalette = function (e, t, i, o, n, a) {
          var l,
            r,
            s,
            p,
            d,
            b,
            y,
            w,
            T,
            _,
            m,
            f,
            v,
            S = e,
            k = t.id,
            x = null,
            B = k.startsWith('fill');
          for (r in ((x = a
            ? this._study.properties().ohlcPlots[k]
            : B
            ? this._study.properties().filledAreasStyle[k]
            : this._study.properties().styles[k]),
          (l = 0),
          i.colors))
            (s = o.colors[r]),
              (p = $('<tr class="line"/>')).appendTo(this._table),
              $('<td/>').appendTo(p),
              (d = $('<td/>')).appendTo(p),
              d.addClass('propertypage-name-label'),
              d.html($.t(s.name.value(), { context: 'input' })),
              (b = $('<td/>')).appendTo(p),
              b.addClass('colorpicker-cell'),
              (y = g(b)),
              this.bindControl(
                new u(y, s.color, !0, this.model(), n, x.transparency),
              ),
              !B &&
                this._study.isLinePlot(S) &&
                ((w = $('<td/>')).appendTo(p),
                (T = this.createLineWidthEditor()).appendTo(w),
                this.bindControl(
                  new C(
                    T,
                    s.width,
                    !0,
                    this.model(),
                    n,
                    this._study.metaInfo().isTVScript,
                  ),
                ),
                (_ = $('<td>')).appendTo(p),
                0 === l &&
                  ((m = L()).appendTo(_),
                  this.bindControl(
                    new h(m, x.plottype, parseInt, !0, this.model(), n),
                  ),
                  (f = $('<td>')).appendTo(p),
                  (v = $("<input type='checkbox'>"))
                    .on('change', this._trackPriceLine.bind(this))
                    .appendTo(f),
                  this.createLabeledCell('Price Line', v).appendTo(p),
                  this.bindControl(
                    new c(
                      v,
                      x.trackPrice,
                      !0,
                      this.model(),
                      'Change Price Line',
                    ),
                  ))),
              l++;
        }),
        (o.prototype._trackPriceLine = function () {
          B(
            'GUI',
            'Add Price Line',
            this._study.properties().description.value(),
          );
        }),
        (o.prototype._prepareLayoutForArrowsPlot = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            r,
            s,
            p = t.id,
            d = this._study.properties().styles[p],
            h = 'Change ' + p,
            b = $('<tr class="line"/>');
          b.appendTo(this._table),
            (i = $('<td/>')).appendTo(b),
            i.addClass('visibility-cell'),
            (o = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(i),
            (n = $.t(this._study.properties().styles[p].title.value(), {
              context: 'input',
            })),
            this.createLabeledCell(n, o)
              .appendTo(b)
              .addClass('propertypage-name-label'),
            (a = $('<td/>')).appendTo(b),
            a.addClass('colorpicker-cell'),
            (l = g(a)),
            (r = $('<td/>')).appendTo(b),
            r.addClass('colorpicker-cell'),
            (s = g(r)),
            this.bindControl(new c(o, d.visible, !0, this.model(), h)),
            this.bindControl(
              new u(l, d.colorup, !0, this.model(), h, d.transparency),
            ),
            this.bindControl(
              new u(s, d.colordown, !0, this.model(), h, d.transparency),
            );
        }),
        (o.prototype._findPlotPalette = function (e, t) {
          var i,
            o = e,
            n = t.id,
            a = null,
            l = null,
            r = this._study.metaInfo().plots;
          if (this._study.isBarColorerPlot(o) || this._study.isBgColorerPlot(o))
            (a = this._study.metaInfo().palettes[t.palette]),
              (l = this._study.properties().palettes[t.palette]);
          else
            for (i = 0; i < r.length; i++)
              if (
                r[i].target === n &&
                (this._study.isSelfColorerPlot(i) ||
                  this._study.isOHLCColorerPlot(i))
              ) {
                (a = this._study.metaInfo().palettes[r[i].palette]),
                  (l = this._study.properties().palettes[r[i].palette]);
                break;
              }
          return { palette: a, paletteProps: l };
        }),
        (o.prototype._prepareStudyPropertiesLayout = function () {
          var e = $(
              '<table class="property-page study-properties" cellspacing="0" cellpadding="2">',
            ),
            t = this.createPrecisionEditor(),
            i = $('<tr>');
          return (
            i.appendTo(e),
            $('<td>' + $.t('Precision') + '</td>').appendTo(i),
            $('<td>').append(t).appendTo(i),
            this.bindControl(
              new h(
                t,
                this._study.properties().precision,
                null,
                !0,
                this.model(),
                'Change Precision',
              ),
            ),
            'Compare@tv-basicstudies' === this._study.metaInfo().id &&
              ((t = this.createSeriesMinTickEditor()),
              (i = $('<tr>')).appendTo(e),
              $('<td>' + $.t('Override Min Tick') + '</td>').appendTo(i),
              $('<td>').append(t).appendTo(i),
              this.bindControl(
                new h(
                  t,
                  this._study.properties().minTick,
                  null,
                  !0,
                  this.model(),
                  'Change MinTick',
                ),
              )),
            this._putStudyDefaultStyles(e),
            e
          );
        }),
        (o.prototype._putStudyDefaultStyles = function (e, t) {
          var i = null,
            o = this._study;
          return (
            (!o.properties().linkedToSeries ||
              !o.properties().linkedToSeries.value()) &&
            ($.each(this._model.m_model.panes(), function (e, t) {
              $.each(t.dataSources(), function (e, n) {
                if (n === o) return (i = t), !1;
              });
            }),
            (this._pane = i),
            e)
          );
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (o.prototype._prepareFilledAreaBackground = function (e, t, i, o, n) {
          var a,
            l,
            r,
            s = $('<tr class="line"/>'),
            p = $('<td/>');
          return (
            p.appendTo(s),
            (a = $(
              "<input type='checkbox' class='visibility-switch'/>",
            )).appendTo(p),
            this.createLabeledCell(o, a)
              .appendTo(s)
              .addClass('propertypage-name-label'),
            (l = $('<td/>')).appendTo(s),
            l.addClass('colorpicker-cell'),
            (r = g(l)),
            this.bindControl(new c(a, e, !0, this.model(), n + ' visibility')),
            this.bindControl(new u(r, t, !0, this.model(), n + ' color', i)),
            s
          );
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          this._study.properties().linkedToSeries &&
            this._study.properties().linkedToSeries.value(),
            (this._table = $());
        }),
        (n.prototype.widget = function () {
          return this._table;
        }),
        (o._createRow_horizlines = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            l = this.createLineWidthEditor(),
            r = w();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(l).appendTo(i),
            $('<td>').append(r.render()).appendTo(i),
            this.bindControl(
              new c(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new u(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new h(
                r,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new C(l, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (o._createRow_vertlines = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            l = this.createLineWidthEditor(),
            r = w();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(l).appendTo(i),
            $('<td>').append(r.render()).appendTo(i),
            this.bindControl(
              new c(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new u(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new h(
                r,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new C(l, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (o._createRow_lines = function (e, t) {
          var i = this.addRow(e),
            o = t.title.value(),
            n = $("<input type='checkbox' class='visibility-switch'/>"),
            a = this.createColorPicker(),
            l = this.createLineWidthEditor(),
            r = w();
          $('<td>').append(n).appendTo(i),
            this.createLabeledCell(o, n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(l).appendTo(i),
            $('<td>').append(r.render()).appendTo(i),
            this.bindControl(
              new c(
                n,
                t.visible,
                !0,
                this.model(),
                'Change ' + o + ' visibility',
              ),
            ),
            this.bindControl(
              new u(a, t.color, !0, this.model(), 'Change ' + o + ' color'),
            ),
            this.bindControl(
              new h(
                r,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' style',
              ),
            ),
            this.bindControl(
              new C(l, t.width, !0, this.model(), 'Change ' + o + ' width'),
            );
        }),
        (o._createRow_hlines = function (e, t) {
          var i,
            o,
            n,
            a = this.addRow(e),
            l = t.name.value(),
            r = $("<input type='checkbox' class='visibility-switch'/>"),
            s = this.createColorPicker(),
            p = this.createLineWidthEditor(),
            d = w(),
            b = $("<input type='checkbox'>");
          $('<td>').append(r).appendTo(a),
            this.createLabeledCell(l, r).appendTo(a),
            $('<td>').append(s).appendTo(a),
            $('<td>').append(p).appendTo(a),
            $('<td>').append(d.render()).appendTo(a),
            $('<td>').appendTo(a),
            $('<td>').append(b).appendTo(a),
            this.createLabeledCell('Show Price', b).appendTo(a),
            this.bindControl(
              new c(
                r,
                t.visible,
                !0,
                this.model(),
                'Change ' + l + ' visibility',
              ),
            ),
            this.bindControl(
              new u(s, t.color, !0, this.model(), 'Change ' + l + ' color'),
            ),
            this.bindControl(
              new h(
                d,
                t.style,
                parseInt,
                !0,
                this.model(),
                'Change ' + l + ' style',
              ),
            ),
            this.bindControl(
              new C(p, t.width, !0, this.model(), 'Change ' + l + ' width'),
            ),
            this.bindControl(
              new c(
                b,
                t.showPrice,
                !0,
                this.model(),
                'Change ' + l + ' show price',
              ),
            ),
            t.enableText.value() &&
              ((a = this.addRow(e)),
              $('<td colspan="2">').appendTo(a),
              (i = $("<input type='checkbox'>")),
              $('<td class="text-center">').append(i).appendTo(a),
              this.createLabeledCell('Show Text', i).appendTo(a),
              this.bindControl(
                new c(
                  i,
                  t.showText,
                  !0,
                  this.model(),
                  'Change ' + l + ' show text',
                ),
              ),
              (o = TradingView.createTextPosEditor()),
              $('<td>').append(o.render()).appendTo(a),
              this.bindControl(
                new h(
                  o,
                  t.textPos,
                  parseInt,
                  !0,
                  this.model(),
                  'Change ' + l + ' text position',
                ),
              ),
              (n = this.createFontSizeEditor()),
              $('<td colspan="2">').append(n).appendTo(a),
              this.bindControl(
                new h(
                  n,
                  t.fontSize,
                  parseInt,
                  !0,
                  this.model(),
                  'Change ' + l + ' font size',
                ),
              ));
        }),
        (o._createRow_hhists = function (e, t) {
          var i,
            o,
            n,
            a,
            l,
            d,
            b = t.title.value(),
            C = [],
            g = [],
            w = this.addRow(e),
            T = m();
          for (d in ($('<td>').append(T).appendTo(w),
          this.createLabeledCell(b, T).appendTo(w),
          this.bindControl(
            new c(
              T,
              t.visible,
              !0,
              this.model(),
              'Change ' + b + ' Visibility',
            ),
          ),
          (w = this.addRow(e)),
          (i = $('<input/>')).attr('type', 'text'),
          i.addClass('ticker'),
          this.createLabeledCell($.t('Width (% of the Box)'), i).appendTo(w),
          $('<td>').append(i).appendTo(w),
          (o = [p(40)]).push(r(0)),
          o.push(s(100)),
          this.bindControl(
            new y(
              i,
              t.percentWidth,
              o,
              !1,
              this.model(),
              'Change Percent Width',
            ),
          ),
          (w = this.addLabeledRow(e, 'Placement')),
          (n = f()),
          $('<td>').append(n).appendTo(w),
          this.bindControl(
            new h(
              n,
              t.direction,
              null,
              !0,
              this.model(),
              'Change ' + b + ' Placement',
            ),
          ),
          (w = this.addRow(e)),
          (a = $("<input type='checkbox'>")),
          $('<td>').append(a).appendTo(w),
          this.createLabeledCell($.t('Show Values'), a).appendTo(w),
          this.bindControl(
            new c(
              a,
              t.showValues,
              !0,
              this.model(),
              'Change ' + b + ' Show Values',
            ),
          ),
          (w = this.addRow(e)),
          (l = this.createColorPicker()),
          this.createLabeledCell($.t('Text Color'), l).appendTo(w),
          $('<td>').append(l).appendTo(w),
          this.bindControl(
            new u(
              l,
              t.valuesColor,
              !0,
              this.model(),
              'Change ' + b + ' Text Color',
            ),
          ),
          t.colors))
            isNumber(parseInt(d, 10)) &&
              ((w = this.addRow(e)),
              (C[d] = t.titles[d].value()),
              (g[d] = this.createColorPicker()),
              $('<td>').append(C[d]).appendTo(w),
              $('<td>').append(g[d]).appendTo(w),
              this.bindControl(
                new u(
                  g[d],
                  t.colors[d],
                  !0,
                  this.model(),
                  'Change ' + C[d] + ' color',
                ),
              ));
        }),
        (o._createRow_backgrounds = function (e, t) {
          var i = this.addRow(e),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = t.name.value(),
            a = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $('<td>').append(a).appendTo(i),
            this.bindControl(
              new c(
                o,
                t.visible,
                !0,
                this.model(),
                'Change ' + n + ' visibility',
              ),
            ),
            this.bindControl(
              new u(
                a,
                t.color,
                !0,
                this.model(),
                'Change ' + n + ' color',
                t.transparency,
              ),
            );
        }),
        (o._createRow_polygons = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new u(n, t.color, !0, this.model(), 'Change ' + o + ' color'),
            );
        }),
        (o._createRow_trendchannels = function (e, t) {
          var i = this.addRow(e),
            o = t.name.value(),
            n = this.createColorPicker();
          $('<td>').append(o).appendTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new u(
                n,
                t.color,
                !0,
                this.model(),
                'Change ' + o + ' color',
                t.transparency,
              ),
            );
        }),
        (o._createRow_textmarks = function (e, t) {
          var i = this.addLabeledRow(e),
            o = t.name.value(),
            n = this.createColorPicker(),
            a = this.createColorPicker(),
            l = this.createFontEditor(),
            r = this.createFontSizeEditor(),
            s = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            ),
            p = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            );
          $('<td>').append(o).appendTo(i),
            'rectangle' !== t.shape.value() && $('<td>').append(n).appendTo(i),
            $('<td>').append(a).appendTo(i),
            $('<td>').append(l).appendTo(i),
            $('<td>').append(r).appendTo(i),
            $('<td>').append(s).appendTo(i),
            $('<td>').append(p).appendTo(i),
            this.bindControl(
              new u(
                n,
                t.color,
                !0,
                this.model(),
                'Change ' + o + ' color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new u(
                a,
                t.fontColor,
                !0,
                this.model(),
                'Change ' + o + ' text color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new h(
                r,
                t.fontSize,
                parseInt,
                !0,
                this.model(),
                'Change ' + o + ' font size',
              ),
            ),
            this.bindControl(
              new h(
                l,
                t.fontFamily,
                null,
                !0,
                this.model(),
                'Change ' + o + ' font',
              ),
            ),
            this.bindControl(
              new c(s, t.fontBold, !0, this.model(), 'Change Text Font Bold'),
            ),
            this.bindControl(
              new c(
                p,
                t.fontItalic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            );
        }),
        (o._createRow_shapemarks = function (e, t) {
          var i = this.addRow(e),
            o = $("<input type='checkbox' class='visibility-switch'/>"),
            n = t.name.value(),
            a = this.createColorPicker(),
            l = $('<input/>');
          l.attr('type', 'text'),
            l.addClass('ticker'),
            $('<td>').append(o).appendTo(i),
            this.createLabeledCell(n, o).appendTo(i),
            $('<td>').append(a).appendTo(i),
            this.createLabeledCell('Size', l).appendTo(i),
            $('<td>').append(l).appendTo(i),
            this.bindControl(
              new c(
                o,
                t.visible,
                !0,
                this.model(),
                'Change ' + n + ' visibility',
              ),
            ),
            this.bindControl(
              new u(
                a,
                t.color,
                !0,
                this.model(),
                'Change ' + n + ' back color',
                t.transparency,
              ),
            ),
            this.bindControl(
              new y(l, t.size, null, !1, this.model(), 'Change size'),
            );
        }),
        (t.StudyStylesPropertyPage = o),
        (t.StudyDisplayPropertyPage = n);
    },
    owyi: function (e, t, i) {
      'use strict';
      function o() {
        var e = $('<select>');
        return (
          $('<option value="open">' + $.t('Open') + '</option>').appendTo(e),
          $('<option value="high">' + $.t('High') + '</option>').appendTo(e),
          $('<option value="low">' + $.t('Low') + '</option>').appendTo(e),
          $('<option value="close">' + $.t('Close') + '</option>').appendTo(e),
          $('<option value="hl2">' + $.t('(H + L)/2') + '</option>').appendTo(
            e,
          ),
          $(
            '<option value="hlc3">' + $.t('(H + L + C)/3') + '</option>',
          ).appendTo(e),
          $(
            '<option value="ohlc4">' + $.t('(O + H + L + C)/4') + '</option>',
          ).appendTo(e),
          e
        );
      }
      var n;
      i.r(t),
        i.d(t, 'createPriceSourceEditor', function () {
          return o;
        }),
        (n = i('P5fv')),
        i('YFKU');
    },
    qbxA: function (e, t, i) {},
    qf46: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i);
      }
      var n = i('k7QS');
      inherit(o, n), (e.exports = o);
    },
    qpZX: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      function n(e, t, i) {
        l.call(this, e, t, i);
      }
      var a = i('Yc1q'),
        l = i('n3Kh'),
        r = i('DxCR'),
        s = r.GreateTransformer,
        p = r.LessTransformer,
        d = r.ToFloatTransformer,
        h = r.ColorBinding,
        c = r.BooleanBinder,
        b = r.SimpleComboBinder,
        u = r.SimpleStringBinder,
        C = r.SliderBinder,
        y = i('/4PT').createLineStyleEditor,
        g = i('zXvd').NumericFormatter,
        w = i('bKFv').StatsPosition;
      inherit(o, a),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l, r, s, p, d, u, g, T, _, m, f, L, v;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = y()),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').append(o).appendTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td colspan="3">').append(i.render()).appendTo(n),
            (a = $('<tbody>').appendTo(this._table)),
            (n = this.addLabeledRow(a, $.t('Text'))),
            (l = this.createColorPicker()),
            (r = this.createFontSizeEditor()),
            (s = this.createFontEditor()),
            (p = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-bold"></span></span>',
            )),
            (d = $(
              '<span class="_tv-button _tv-button-fontstyle"><span class="icon-fontstyle-italic"></span></span>',
            )),
            (u = $('<input type="checkbox">')),
            $('<td>').append(l).appendTo(n),
            $('<td>').append(s).appendTo(n),
            $('<td>').append(r).appendTo(n),
            $('<td>').append(p).appendTo(n),
            $('<td>').append(d).appendTo(n),
            (g = $(
              "<select><option value='" +
                w.Left +
                "'>" +
                $.t('Left') +
                "</option><option value='" +
                w.Center +
                "'>" +
                $.t('Center') +
                "</option><option value='" +
                w.Right +
                "'>" +
                $.t('Right') +
                '</option></select>',
            )),
            (T = this.addLabeledRow(a, $.t('Stats Position'))),
            $('<td colspan="3">').appendTo(T).append(g),
            (_ = $('<input type="checkbox">')),
            (m = $('<input type="checkbox">')),
            (n = this.addLabeledRow(a, $.t('Extend Right End'))),
            $('<td colspan="3">').appendTo(n).append(_),
            (n = this.addLabeledRow(a, $.t('Extend Left End'))),
            $('<td colspan="3">').appendTo(n).append(m),
            (f = $('<input type="checkbox">')),
            (L = $('<input type="checkbox">')),
            (v = $('<input type="checkbox">')),
            (n = this.addLabeledRow(a, $.t('Show Price Range'))),
            $('<td colspan="3">').appendTo(n).append(f),
            (n = this.addLabeledRow(a, $.t('Show Bars Range'))),
            $('<td colspan="3">').appendTo(n).append(L),
            (n = this.addLabeledRow(a, $.t('Always Show Stats'))),
            $('<td colspan="3">').appendTo(n).append(v),
            (n = this.addLabeledRow(a, $.t('Show Middle Point'))),
            $('<td colspan="3">').appendTo(n).append(u),
            this.bindControl(
              new c(
                f,
                this._linetool.properties().showPriceRange,
                !0,
                this.model(),
                'Change Trend Angle Show Price Range',
              ),
            ),
            this.bindControl(
              new c(
                L,
                this._linetool.properties().showBarsRange,
                !0,
                this.model(),
                'Change Trend Angle Show Bars Range',
              ),
            ),
            this.bindControl(
              new b(
                r,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new b(
                s,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new h(
                l,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new c(
                p,
                this._linetool.properties().bold,
                !0,
                this.model(),
                'Change Text Font Bold',
              ),
            ),
            this.bindControl(
              new c(
                d,
                this._linetool.properties().italic,
                !0,
                this.model(),
                'Change Text Font Italic',
              ),
            ),
            this.bindControl(
              new h(
                o,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Trend Angle Color',
              ),
            ),
            this.bindControl(
              new b(
                i,
                this._linetool.properties().linestyle,
                parseInt,
                !0,
                this.model(),
                'Change Trend Angle Style',
              ),
            ),
            this.bindControl(
              new C(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Trend Angle Width',
              ),
            ),
            this.bindControl(
              new c(
                _,
                this._linetool.properties().extendRight,
                !0,
                this.model(),
                'Change Trend Angle Extending Right',
              ),
            ),
            this.bindControl(
              new c(
                m,
                this._linetool.properties().extendLeft,
                !0,
                this.model(),
                'Change Trend Angle Extending Left',
              ),
            ),
            this.bindControl(
              new c(
                v,
                this._linetool.properties().alwaysShowStats,
                !0,
                this.model(),
                'Change Trend Angle Always Show Stats',
              ),
            ),
            this.bindControl(
              new c(
                u,
                this._linetool.properties().showMiddlePoint,
                !0,
                this.model(),
                'Change Trend Angle Show Middle Point',
              ),
            ),
            this.bindControl(
              new b(
                g,
                this._linetool.properties().statsPosition,
                parseInt,
                !0,
                this.model(),
                'Change Trend Angle Stats Position',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        inherit(n, l),
        (n.prototype.prepareLayout = function () {
          var e, t, i, o, n, a;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = this._linetool.points()[0]),
            (t = this._linetool.properties().points[0]),
            e &&
              t &&
              ((i = this._createPointRow(e, t, '')),
              this._table.append(i),
              (i = $('<tr>').appendTo(this._table)),
              $('<td>').append($.t('Angle')).appendTo(i),
              (o = $("<input type='text'>")),
              $('<td>').append(o).appendTo(i),
              (n = [d(t.price.value()), s(-360), p(360)]),
              (a = new u(
                o,
                this._linetool.properties().angle,
                n,
                !1,
                this.model(),
                'Change angle',
              )).addFormatter(function (e) {
                return new g().format(e);
              }),
              this.bindControl(a),
              this.loadData());
        }),
        (n.prototype.widget = function () {
          return this._table;
        }),
        (t.LineToolTrendAngleStylesPropertyPage = o),
        (t.LineToolTrendAngleInputsPropertyPage = n);
    },
    qrDX: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SliderBinder,
        r = a.BooleanBinder,
        s = a.ColorBinding,
        p = a.SimpleComboBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = $('<input type="checkbox" class="visibility-switch">')),
            (o = this.createColorPicker()),
            (n = this.addLabeledRow(this._table, 'Line')),
            $('<td>').prependTo(n),
            $('<td>').append(t).appendTo(n),
            $('<td>').append(e).appendTo(n),
            (n = this.addLabeledRow(this._table, 'Background', i)),
            $('<td>').append(i).prependTo(n),
            $('<td>').append(o).appendTo(n),
            (a = $('<tbody>').appendTo(this._table)),
            (d = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (h = $(
              "<select><option value='0'>" +
                $.t('Normal') +
                "</option><option value='1'>" +
                $.t('Arrow') +
                '</option></select>',
            )),
            (n = this.addLabeledRow(a, $.t('Left End'))),
            $('<td>').prependTo(n),
            $('<td colspan="3">').appendTo(n).append(d),
            (n = this.addLabeledRow(a, $.t('Right End'))),
            $('<td>').prependTo(n),
            $('<td colspan="3">').appendTo(n).append(h),
            this.bindControl(
              new s(
                t,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Brush Color',
              ),
            ),
            this.bindControl(
              new l(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Brush Line Width',
              ),
            ),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Brush Filling',
              ),
            ),
            this.bindControl(
              new s(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Brush Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new p(
                d,
                this._linetool.properties().leftEnd,
                parseInt,
                !0,
                this.model(),
                'Change Trend Line Left End',
              ),
            ),
            this.bindControl(
              new p(
                h,
                this._linetool.properties().rightEnd,
                parseInt,
                !0,
                this.model(),
                'Change Trend Line Right End',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    u2Ui: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR').ColorBinding;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createColorPicker()),
            (t = $.t('Color') + ':'),
            (i = this.addLabeledRow(this._table, t)),
            $('<td>').append(e).appendTo(i),
            (o = this._linetool.properties()),
            (this._div = $('<div>').append(this._table)),
            this.bindControl(
              new a(e, o.color, !0, this.model(), 'Change Icon Color'),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._div;
        }),
        (e.exports = o);
    },
    uHqD: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.FloatBinder,
        r = a.SimpleComboBinder,
        s = a.BooleanBinder,
        p = a.ColorBinding,
        d = a.SliderBinder,
        h = i('jNEI').addColorPicker,
        c = i('/4PT').createLineStyleEditor,
        b = i('y/RR').createTransparencyEditor;
      inherit(o, n),
        (o.prototype.addLevelEditor = function (e, t, i) {
          var o,
            n,
            a,
            b,
            u,
            C,
            y,
            g,
            w,
            T,
            _ = $('<tr>');
          _.appendTo(this._table),
            (o = $('<td>')).appendTo(_),
            (n = $(
              "<input type='checkbox' class='visibility-switch'>",
            )).appendTo(o),
            e
              ? ((a = $('<td>')).appendTo(_),
                (b = $("<input type='text'>")).appendTo(a),
                b.css('width', '70px'),
                this.bindControl(
                  new l(
                    b,
                    t.coeff,
                    !1,
                    this.model(),
                    'Change Pitchfork Line Coeff',
                  ),
                ))
              : $('<td>' + $.t('Trend Line') + '</td>').appendTo(_),
            (u = $("<td class='colorpicker-cell'>")).appendTo(_),
            (C = h(u)),
            (y = $('<td>')).appendTo(_),
            (g = this.createLineWidthEditor()).appendTo(y),
            e ||
              ((w = $('<td>')).appendTo(_),
              (T = c()).render().appendTo(w),
              this.bindControl(
                new r(
                  T,
                  t.linestyle,
                  parseInt,
                  !0,
                  this.model(),
                  'Change Fib Speed Resistance Arcs Style',
                ),
              )),
            this.bindControl(
              new s(
                n,
                t.visible,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Visibility',
              ),
            ),
            this.bindControl(
              new p(
                C,
                t.color,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Line Color',
                0,
              ),
            ),
            this.bindControl(
              new d(
                g,
                t.linewidth,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Width',
              ),
            );
        }),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, l;
          for (
            this._table = $(document.createElement('table')),
              this._table.addClass('property-page'),
              this._table.attr('cellspacing', '0'),
              this._table.attr('cellpadding', '2'),
              this.addLevelEditor(
                null,
                this._linetool.properties().trendline,
                !1,
              ),
              e = 1;
            e <= 11;
            e++
          )
            (t = 'level' + e),
              this.addLevelEditor(
                'Level ' + e,
                this._linetool.properties()[t],
                !1,
              );
          this.addOneColorPropertyWidget(this._table),
            (i = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, $.t('Levels'))),
            $('<td>').append(i).prependTo(o),
            this.bindControl(
              new s(
                i,
                this._linetool.properties().showCoeffs,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Levels Visibility',
              ),
            ),
            (n = $("<input type='checkbox' class='visibility-switch'>")),
            (o = this.addLabeledRow(this._table, $.t('Full Circles'))),
            $('<td>').append(n).prependTo(o),
            this.bindControl(
              new s(
                n,
                this._linetool.properties().fullCircles,
                !0,
                this.model(),
                'Change Fib Speed Resistance Arcs Full Cirlces Mode',
              ),
            ),
            (o = $('<tr>')).appendTo(this._table),
            (a = $("<input type='checkbox' class='visibility-switch'>")),
            $('<td>').append(a).appendTo(o),
            $('<td>' + $.t('Background') + '</td>').appendTo(o),
            (l = b()),
            $('<td colspan="3">').append(l).appendTo(o),
            this.bindControl(
              new s(
                a,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Fib Arcs Background Visibility',
              ),
            ),
            this.bindControl(
              new d(
                l,
                this._linetool.properties().transparency,
                !0,
                this.model(),
                'Change Fib Arcs Background Transparency',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    vDrZ: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.BooleanBinder,
        r = a.ColorBinding,
        s = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n;
          (this._table = $(document.createElement('table'))),
            this._table.addClass('property-page'),
            this._table.attr('cellspacing', '0'),
            this._table.attr('cellpadding', '2'),
            (e = this.createLineWidthEditor()),
            (t = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, $.t('Border'))).prepend(
              '<td>',
            ),
            $('<td>').append(t).appendTo(i),
            $('<td>').append(e).appendTo(i),
            (o = $('<input type="checkbox" class="visibility-switch">')),
            (n = this.createColorPicker()),
            (i = this.addLabeledRow(this._table, $.t('Background'), o)),
            $('<td>').append(o).prependTo(i),
            $('<td>').append(n).appendTo(i),
            this.bindControl(
              new l(
                o,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Ellipse Filling',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Ellipse Line Color',
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Ellipse Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Ellipse Border Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    'wt/7': function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.SimpleStringBinder,
        p = i('QloM').TabOpenFrom;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n,
            a,
            d,
            h,
            c = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            )
              .css({ width: '100%' })
              .data('layout-tab-open', p.Override),
            b = $(
              '<table class="property-page" cellspacing="0" cellpadding="0">',
            );
          (this._table = c.add(b)),
            (e = $("<input type='text'>").css({ width: '100%' })),
            (t = this.createColorPicker()),
            (i = this.createFontSizeEditor()),
            (o = this.createColorPicker()),
            (n = this.createColorPicker()),
            (a = $('<tr>').appendTo(c)),
            (d = $('<div class="property-page-fullwidth-wrapper">').append(e)),
            $('<td>').append(d).appendTo(a),
            (h = this.addLabeledRow(b, $.t('Text'))),
            $('<td>').append(t).appendTo(h),
            $('<td>').append(i).appendTo(h),
            (h = this.addLabeledRow(b, $.t('Background'))),
            $('<td>').appendTo(h).append(o),
            (h = this.addLabeledRow(b, $.t('Border'))),
            $('<td>').appendTo(h).append(n),
            $('<td>'),
            this.bindControl(
              new s(
                e,
                this._linetool.properties().text,
                null,
                !0,
                this.model(),
                'Change Balloon Text',
              ),
            ),
            this.bindControl(
              new r(
                t,
                this._linetool.properties().color,
                !0,
                this.model(),
                'Change Baloon Text Color',
              ),
            ),
            this.bindControl(
              new l(
                i,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Balloon Text Font Size',
              ),
            ),
            this.bindControl(
              new r(
                o,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Balloon Background Color',
                this._linetool.properties().transparency,
              ),
            ),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Balloon Border Color',
              ),
            ),
            this.loadData(),
            setTimeout(function () {
              e.select(), e.focus();
            }, 0);
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    xj4C: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i);
      }
      var n = i('k7QS');
      inherit(o, n), (e.exports = o);
    },
    'y/RR': function (e, t, i) {
      'use strict';
      function o(e) {
        var t = $(
            '<div class="transparency-slider"><div class="gradient"></div></div>',
          ).slider({ max: 100, min: 0, step: 1 }),
          i = [
            '-moz-linear-gradient(left, %COLOR 0%, transparent 100%)',
            '-webkit-gradient(linear, left top, right top, color-stop(0%,%COLOR), color-stop(100%,transparent))',
            '-webkit-linear-gradient(left, %COLOR 0%,transparent 100%)',
            '-o-linear-gradient(left, %COLOR 0%,transparent 100%)',
            'linear-gradient(to right, %COLOR 0%,transparent 100%)',
          ];
        return (
          (t.updateColor = function (e) {
            var o = t.find('.gradient');
            i.forEach(function (t) {
              o.css('background-image', t.replace(/%COLOR/, e));
            });
          }),
          e
            ? (t.updateColor(e.val() || 'black'),
              e.on('change', function (e) {
                t.updateColor(e.target.value);
              }))
            : t.updateColor('black'),
          t
        );
      }
      var n, a;
      i.r(t),
        i.d(t, 'createTransparencyEditor', function () {
          return o;
        }),
        (n = i('P5fv')),
        (a = i('QBwY'));
    },
    'y1L/': function (e, t, i) {},
    y4lV: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        a.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('L9lC'),
        a = n.StudyInputsPropertyPage;
      inherit(o, a),
        (o.prototype.prepareControl = function (e, t, i) {
          if ('source' === e.id) {
            var o = this.createKeyCombo({
              open: $.t('Open'),
              high: $.t('High'),
              low: $.t('Low'),
              close: $.t('Close'),
            });
            return (
              o.appendTo(t),
              { valueEditor: o, valueSetter: null, propertyChangedHook: null }
            );
          }
          return a.prototype.prepareControl.call(this, e, t, i);
        }),
        (o.prototype._sortInputs = function (e) {
          var t = e.filter(function (e) {
              return 'symbol' === e.id;
            }),
            i = e.filter(function (e) {
              return 'symbol' !== e.id;
            });
          return t.concat(i);
        }),
        (e.exports = o);
    },
    y9kM: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        l.call(this, e, t), (this._study = i), this.prepareLayout();
      }
      var n = i('04K5'),
        a = i('DxCR'),
        l = a.PropertyPage,
        r = a.BooleanBinder,
        s = a.SimpleComboBinder,
        p = i('o6hY').StudyStylesPropertyPage,
        d = i('dfhE');
      inherit(o, l),
        inherit(o, n),
        (o.prototype._isJapaneseChartsAvailable = function () {
          return !1;
        }),
        (o.prototype._isHiLoChartsAvailable = function () {
          return !1;
        }),
        (o.prototype._isShowStyleSwitcher = function () {
          return !0;
        }),
        (o.prototype.prepareLayout = function () {
          var e,
            t,
            i,
            o,
            n = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            a = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            l = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            d = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            h = $(
              '<table class="property-page" cellspacing="0" cellpadding="2">',
            ),
            c = this._study.properties();
          this._prepareSeriesStyleLayout(n, a, l, c),
            (this._table = n.add(a).add(l).add(d).add(h)),
            (e = $('<input type="checkbox">')),
            (t = this.addLabeledRow(d, 'Price Line', e)),
            $('<td>').append(e).prependTo(t),
            this.bindControl(
              new r(
                e,
                c.showPriceLine,
                !0,
                this.model(),
                'Change Price Price Line',
              ),
            ),
            (i = this.createSeriesMinTickEditor()),
            (o = $('<tr>')).appendTo(h),
            $('<td>' + $.t('Override Min Tick') + '</td>').appendTo(o),
            $('<td>').append(i).appendTo(o),
            this.bindControl(
              new s(i, c.minTick, null, !0, this.model(), 'Change MinTick'),
            ),
            p.prototype._putStudyDefaultStyles.call(this, h);
        }),
        (o.prototype.loadData = function () {
          this.superclass.prototype.loadData.call(this), this.switchStyle();
        }),
        (o.prototype.switchStyle = function () {
          switch (
            ($(this._barsTbody)
              .add(this._barsColorerTbody)
              .add(this._candlesTbody)
              .add(this._candlesColorerTbody)
              .add(this._hollowCandlesTbody)
              .add(this._lineTbody)
              .add(this._areaTbody)
              .add(this._baselineTbody)
              .css('display', 'none'),
            this._study.properties().style.value())
          ) {
            case d.STYLE_BARS:
              this._barsTbody.css('display', 'table-row-group'),
                this._barsColorerTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_CANDLES:
              this._candlesTbody.css('display', 'table-row-group'),
                this._candlesColorerTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_HOLLOW_CANDLES:
              this._hollowCandlesTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_LINE:
              this._lineTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_AREA:
              this._areaTbody.css('display', 'table-row-group');
              break;
            case d.STYLE_BASELINE:
              this._baselineTbody.css('display', 'table-row-group');
          }
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
    ytZH: function (e, t, i) {
      'use strict';
      function o(e, t, i) {
        n.call(this, e, t, i), this.prepareLayout();
      }
      var n = i('Yc1q'),
        a = i('DxCR'),
        l = a.SimpleComboBinder,
        r = a.ColorBinding,
        s = a.BooleanBinder,
        p = a.SliderBinder;
      inherit(o, n),
        (o.prototype.prepareLayout = function () {
          var e, t, i, o, n, a, d, h, c, b, u, C, y, g;
          (this._table = $(
            '<table class="property-page" cellspacing="0" cellpadding="2">',
          )),
            (e = $('<tbody>').appendTo(this._table)),
            (t = this.createLineWidthEditor()),
            (i = this.createColorPicker()),
            (o = this.addLabeledRow(e, $.t('Line'))),
            $('<td>').prependTo(o),
            $('<td>').append(i).appendTo(o),
            $('<td>').append(t).appendTo(o),
            (n = this.createColorPicker()),
            (a = this.createColorPicker()),
            (d = this.createFontSizeEditor()),
            (h = this.createFontEditor()),
            (c = this.createColorPicker()),
            (b = $('<input type="checkbox" class="visibility-switch">')),
            (u = this.createColorPicker()),
            (C = $('<input type="checkbox" class="visibility-switch">')),
            this.bindControl(
              new r(
                n,
                this._linetool.properties().textcolor,
                !0,
                this.model(),
                'Change Text Color',
              ),
            ),
            this.bindControl(
              new l(
                d,
                this._linetool.properties().fontsize,
                parseInt,
                !0,
                this.model(),
                'Change Text Font Size',
              ),
            ),
            this.bindControl(
              new l(
                h,
                this._linetool.properties().font,
                null,
                !0,
                this.model(),
                'Change Text Font',
              ),
            ),
            this.bindControl(
              new r(
                c,
                this._linetool.properties().labelBackgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new s(
                b,
                this._linetool.properties().fillLabelBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                u,
                this._linetool.properties().backgroundColor,
                !0,
                this.model(),
                'Change Text Background',
              ),
            ),
            this.bindControl(
              new s(
                C,
                this._linetool.properties().fillBackground,
                !0,
                this.model(),
                'Change Text Background Fill',
              ),
            ),
            this.bindControl(
              new r(
                a,
                this._linetool.properties().borderColor,
                !0,
                this.model(),
                'Change Text Border Color',
              ),
            ),
            (y = this.addLabeledRow(e, $.t('Background'), C)),
            $('<td>').append(C).prependTo(y),
            $('<td>').append(u).appendTo(y),
            (g = this.addLabeledRow(e, $.t('Label'))),
            $('<td>').prependTo(g),
            $('<td>').append(n).appendTo(g),
            $('<td>').append(h).appendTo(g),
            $('<td>').append(d).appendTo(g),
            (y = this.addLabeledRow(e, $.t('Label Background'), b)),
            $('<td>').append(b).prependTo(y),
            $('<td>').append(c).appendTo(y),
            this.bindControl(
              new r(
                i,
                this._linetool.properties().linecolor,
                !0,
                this.model(),
                'Change Date Range Color',
              ),
            ),
            this.bindControl(
              new p(
                t,
                this._linetool.properties().linewidth,
                !0,
                this.model(),
                'Change Date Range Line Width',
              ),
            ),
            this.loadData();
        }),
        (o.prototype.widget = function () {
          return this._table;
        }),
        (e.exports = o);
    },
  },
]);
