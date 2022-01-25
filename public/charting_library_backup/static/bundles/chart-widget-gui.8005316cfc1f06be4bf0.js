(window.webpackJsonp = window.webpackJsonp || []).push([
  ['chart-widget-gui'],
  {
    '/NcV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    '/vkn': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M11 7V6H7V2H6V6H2V7H6V11H7V7H11Z"/><path fill="currentColor" fill-rule="evenodd" d="M11 1H2C1.44772 1 1 1.44772 1 2V11C1 11.5523 1.44772 12 2 12H11C11.5523 12 12 11.5523 12 11V2C12 1.44772 11.5523 1 11 1ZM2 0C0.895431 0 0 0.89543 0 2V11C0 12.1046 0.89543 13 2 13H11C12.1046 13 13 12.1046 13 11V2C13 0.895431 12.1046 0 11 0H2Z"/></svg>';
    },
    '1ANp': function (t, e, i) {
      'use strict';
      function s(t) {
        return 'alwaysOn' === t || 'alwaysOff' === t ? t : 'visibleOnMouseOver';
      }
      function n() {
        if (!u) {
          (u = new h.a()).setValue(
            s(d.getValue('NavigationButtons.visibility')),
          ),
            u.subscribe(u, function (t) {
              d.setValue('NavigationButtons.visibility', s(t.value()));
            });
        }
        return u;
      }
      function o() {
        return [
          {
            value: 'visibleOnMouseOver',
            title: window.t('Visible on Mouse Over'),
          },
          { value: 'alwaysOn', title: window.t('Always Visible') },
          { value: 'alwaysOff', title: window.t('Always Invisible') },
        ];
      }
      function r() {
        var t, e;
        return (
          c ||
            ((c = new h.a()),
            (e = function () {
              var e = t.value();
              'alwaysOn' !== e &&
                'alwaysOff' !== e &&
                (e = Modernizr.mobiletouch ? 'alwaysOn' : 'visibleOnMouseOver'),
                c && c.setValue(e);
            }),
            (t = n()).subscribe(c, e),
            e()),
          c
        );
      }
      var l, a, h, d, u, c;
      i.r(e),
        i.d(e, 'property', function () {
          return n;
        }),
        i.d(e, 'availableValues', function () {
          return o;
        }),
        i.d(e, 'actualBehavior', function () {
          return r;
        }),
        i('YFKU'),
        (l = i('bf9a')),
        (a = i('tc+8')),
        (h = i.n(a)),
        (d = i('Vdly'));
    },
    '3zM7': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="9" height="6"><path fill="currentColor" d="M0.609497 1.95554L1.39045 1.04443L4.49997 3.70974L7.6095 1.04443L8.39045 1.95554L4.49997 5.29023L0.609497 1.95554Z"/></svg>';
    },
    '94TV': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>';
    },
    'C+zC': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M2 9L7 4L12 9H2Z"/></svg>';
    },
    GBBr: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M2 5L7 10L12 5H2Z"/></svg>';
    },
    LxXZ: function (t, e, i) {
      'use strict';
      (function (t) {
        function s(t) {
          t.classList.toggle('js-hidden', !0);
        }
        function n(t) {
          t.classList.toggle('js-hidden', !1);
        }
        function o(t, e, i, s) {
          var n;
          (this._options = Object.assign({}, u, s)),
            (this._model = e),
            (this._paneWidget = t),
            (this._chart = t._chart),
            (this.$el = $(document.createElement('div')).addClass(
              'pane-legend',
            )),
            (this._itemsBinding = []),
            (this._mouseEventHandlers = []),
            this._chart
              .properties()
              .paneProperties.legendProperties.showStudyTitles.listeners()
              .subscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showSeriesTitle.listeners()
              .subscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showSeriesOHLC.listeners()
              .subscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showBarChange.listeners()
              .subscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showOnlyPriceSource.listeners()
              .subscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showStudyValues.listeners()
              .subscribe(this, this.updateLayout),
            this._model
              .mainSeries()
              .properties()
              .style.listeners()
              .subscribe(this, this.updateLayout),
            this._model
              .mainSeries()
              .properties()
              .visible.listeners()
              .subscribe(this, this.updateLayout),
            (n = this._chart.properties().scalesProperties.textColor)
              .listeners()
              .subscribe(this, function (t) {
                this.$el.css('color', t.value());
              }),
            this.$el.css('color', n.value()),
            this._chart
              .properties()
              .paneProperties.legendProperties.showLegend.subscribe(
                this,
                this.updateLayout,
              ),
            (this._iconColor = null),
            this.updateLayout();
        }
        i('GVHu').Study;
        var r = i('tITk').trackEvent,
          l = (i('uOxu').getLogger('Chart.LegendWidget'), i('Tmoa')),
          a = i('Ialn').IS_RTL,
          h = (i('Vdly'), i('S8xo').MouseEventHandler),
          d = i('QloM').TabNames,
          u = {
            contextMenuEnabled: !0,
            sourceSelectionEnabled: !0,
            symbolMarkerEnabled: !1,
            miniButtonsWidgetEnabled: !0,
            alertWidgetEnabled: !0,
          };
        (o.prototype.destroy = function () {
          this._removeMouseEventHandlers(),
            this._chart
              .properties()
              .paneProperties.legendProperties.showLegend.unsubscribeAll(this),
            this._chart
              .properties()
              .paneProperties.legendProperties.showStudyTitles.listeners()
              .unsubscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showSeriesTitle.listeners()
              .unsubscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showSeriesOHLC.listeners()
              .unsubscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showBarChange.listeners()
              .unsubscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showOnlyPriceSource.listeners()
              .unsubscribe(this, this.updateLayout),
            this._chart
              .properties()
              .paneProperties.legendProperties.showStudyValues.listeners()
              .unsubscribe(this, this.updateLayout),
            this._model
              .mainSeries()
              .properties()
              .style.listeners()
              .unsubscribe(this, this.updateLayout),
            this._model
              .mainSeries()
              .properties()
              .visible.listeners()
              .unsubscribe(this, this.updateLayout);
        }),
          (o.prototype.updateThemedColors = function (t) {
            (this._iconColor = t), this._applyIconColors();
          }),
          (o.prototype._applyIconColors = function () {
            this.$el
              .find('.pane-legend-icon-container')
              .css('color', this._iconColor || '');
          }),
          (o.prototype.contextMenuEvent = function (t, e) {
            if (
              !this._model.chartModel().readOnly() &&
              this._options.contextMenuEnabled
            ) {
              this._chart.updateActions();
              var i = e.source;
              this._model.selectionMacro(function (t) {
                t.clearSelection(), t.addSourceToSelection(i);
              }),
                this._paneWidget.showContextMenuForSelection(t);
            }
          }),
          (o.prototype._removeMouseEventHandlers = function () {
            this._mouseEventHandlers.forEach(function (t) {
              t.destroy();
            }),
              (this._mouseEventHandlers = []);
          }),
          (o.prototype.updateLayout = function () {
            var e, s, n, o, r, l, a, d, u, c, p, _;
            if (
              (this._removeMouseEventHandlers(),
              (this._itemsBinding.length = 0),
              this.$el.find('.apply-common-tooltip').trigger('mouseleave'),
              this.$el.empty(),
              (this._indicatorRows = []),
              (e = this._paneWidget.state()) && this._model)
            ) {
              for (
                s = {
                  showStudyTitles: this._model
                    .model()
                    .properties()
                    .paneProperties.legendProperties.showStudyTitles.value(),
                  showSeriesTitle: this._chart
                    .properties()
                    .paneProperties.legendProperties.showSeriesTitle.value(),
                  showSeriesOHLC: this._chart
                    .properties()
                    .paneProperties.legendProperties.showSeriesOHLC.value(),
                  showStudyValues: this._chart
                    .properties()
                    .paneProperties.legendProperties.showStudyValues.value(),
                  showLegend: this._model
                    .model()
                    .properties()
                    .paneProperties.legendProperties.showLegend.value(),
                },
                  n = this._model.mainSeries(),
                  (r = (o = e.orderedSources().slice()).indexOf(n)) > -1 &&
                    (o.splice(r, 1), o.push(n)),
                  l = o.length - 1;
                l >= 0;
                l--
              )
                (d = (a = o[l]).statusView()) &&
                  ((u = a === n),
                  (c = this._options.miniButtonsWidgetEnabled),
                  (!u ||
                    s.showSeriesTitle ||
                    s.showSeriesOHLC ||
                    s.showStudyTitles ||
                    s.showStudyValues) &&
                    ((u && t.enabled('fundamental_widget')) ||
                      (!s.showLegend && u && c
                        ? this.$el.find('.expand-line').length ||
                          ((p = $('<div>').addClass(
                            'pane-legend-line pane-legend-wrap main expand-line',
                          )),
                          this._options.sourceSelectionEnabled ||
                            p.addClass('legend-selection-disabled'),
                          p.appendTo(this.$el),
                          this._chartHasStudies()
                            ? ((_ = $(
                                '<a class="pane-legend-minbtn apply-common-tooltip apply" title="' +
                                  $.t('Show Legend of Indicators') +
                                  '"></a>',
                              ).append(
                                $(i('/vkn')).attr({ class: 'expand closed' }),
                              )),
                              p.append(
                                _.on(
                                  'click touchend',
                                  this.toggleTitles.bind(this),
                                ),
                              ))
                            : p.addClass(
                                'pane-legend-line--without-child-studies',
                              ),
                          (p.source = a),
                          a.properties().visible.value() ||
                            p.addClass('disabled'),
                          (s = {
                            showStudyTitles: !1,
                            showSeriesTitle: s.showSeriesTitle,
                            showSeriesOHLC: s.showSeriesOHLC,
                            showStudyValues: !1,
                          }),
                          this._generateItemsForRow(p, d, s),
                          this._mouseEventHandlers.push(new h(p, this, !0)),
                          this.update())
                        : (u || s.showStudyTitles || s.showStudyValues) &&
                          s.showLegend &&
                          ((p = $('<div>').addClass(
                            'pane-legend-line pane-legend-wrap',
                          )),
                          this._options.sourceSelectionEnabled ||
                            p.addClass('legend-selection-disabled'),
                          p.appendTo(this.$el),
                          u || this._indicatorRows.push(p[0]),
                          (p.source = a),
                          u && c
                            ? this._chartHasStudies()
                              ? (p.addClass('main'),
                                (_ = $(
                                  '<a class="pane-legend-minbtn apply-common-tooltip apply" title="' +
                                    $.t('Hide Legend of Indicators') +
                                    '"></a>',
                                ).append(
                                  $(i('scAS')).attr({ class: 'expand' }),
                                )),
                                p.append(
                                  _.on(
                                    'click touchend',
                                    this.toggleTitles.bind(this),
                                  ),
                                ))
                              : p.addClass(
                                  'pane-legend-line--without-child-studies',
                                )
                            : p.addClass('study'),
                          a.properties().visible.value() ||
                            p.addClass('disabled'),
                          this._generateItemsForRow(p, d, s),
                          this._mouseEventHandlers.push(new h(p, this, !0))))));
              this.update();
            }
          }),
          (o.prototype._chartHasStudies = function () {
            return this._model
              .model()
              .allStudies()
              .some(function (t) {
                return t.statusView();
              });
          }),
          (o.prototype._generateItemsForRow = function (e, s, n) {
            var o,
              r,
              l,
              h,
              d,
              u,
              c,
              p,
              _,
              v,
              m,
              g = e.source,
              b = this,
              y = g === this._model.mainSeries(),
              w = g.properties().visible.value();
            if (
              (((y && n.showSeriesTitle) || (!y && n.showStudyTitles)) &&
                ((r = $('<span>')).addClass(
                  'pane-legend-line__wrap-description apply-overflow-tooltip',
                ),
                (this._options.contextMenuEnabled && !this._chart.readOnly()) ||
                  r.addClass('no-context-menu'),
                this._options.sourceSelectionEnabled ||
                  r.addClass('legend-selection-disabled'),
                y && r.addClass('main'),
                w || r.addClass('disabled'),
                r.css({
                  'font-weight': s.bold() ? 'bold' : 'normal',
                  'font-size': s.size(),
                }),
                this._options.contextMenuEnabled &&
                  r.click(function (t) {
                    b.contextMenuEvent(t, e);
                  }),
                $('<span class="pane-legend-icon-arrow">')
                  .append($(i('3zM7')))
                  .appendTo(r),
                r.appendTo(e),
                this._itemsBinding.push({
                  value: s,
                  cell: r,
                  source: e.source,
                }),
                !this._chart.readOnly() &&
                  g.userEditEnabled() &&
                  t.enabled('edit_buttons_in_legend') &&
                  ((o = $('<span class="pane-legend-icon-container">')),
                  a || o.appendTo(e),
                  (y && w) ||
                    !t.enabled('show_hide_button_in_legend') ||
                    $(
                      '<a class="pane-legend-icon apply-common-tooltip icon-hide" title="' +
                        $.t('Show/Hide') +
                        '">',
                    )
                      .append($(i('cgDJ')))
                      .appendTo(o)
                      .on(
                        'click touchend',
                        this._generateItemsForRow._onShowhideClick.bind(
                          this,
                          g,
                        ),
                      ),
                  !y &&
                    t.enabled('property_pages') &&
                    t.enabled('format_button_in_legend') &&
                    $(
                      '<a class="pane-legend-icon apply-common-tooltip format" title="' +
                        $.t('Settings') +
                        '">',
                    )
                      .append($(i('sGj7')))
                      .appendTo(o)
                      .on(
                        'click touchend',
                        this._generateItemsForRow._onFormatClick.bind(this, g),
                      ),
                  !y &&
                    t.enabled('delete_button_in_legend') &&
                    $(
                      '<a class="pane-legend-icon apply-common-tooltip delete" title="' +
                        $.t('Delete') +
                        '">',
                    )
                      .append($(i('VLql')))
                      .appendTo(o)
                      .on(
                        'click touchend',
                        this._generateItemsForRow._onDeleteClick.bind(this, g),
                      ))),
              (l = g.legendView()),
              this.isDataWindowValuesVisible(l) &&
                l.isValuesVisible() &&
                (!y || w))
            ) {
              for (
                h = [],
                  d = [],
                  u = $('<div class="pane-legend-item-value-container">').css({
                    'font-size': s.size(),
                  }),
                  this._options.contextMenuEnabled ||
                    u.addClass('no-context-menu'),
                  this._options.sourceSelectionEnabled ||
                    u.addClass('legend-selection-disabled'),
                  c = 0;
                c < l.items().length;
                c++
              )
                (p = $("<span class='pane-legend-item-value-wrap'>").appendTo(
                  u,
                )),
                  (_ = y
                    ? $("<span class='pane-legend-item-value-title'>").appendTo(
                        p,
                      )
                    : null),
                  (v = $("<span class='pane-legend-item-value'>").appendTo(p)),
                  y &&
                    (_.addClass('pane-legend-item-value-title__main'),
                    v.addClass('pane-legend-item-value__main')),
                  g.properties().visible.value() ||
                    (v.addClass('disabled'), _ && _.addClass('disabled')),
                  h.push(v),
                  _ && d.push(_);
              (m = $("<span class='pane-legend-item-additional'>").appendTo(
                u.appendTo(e),
              )),
                this._itemsBinding.push({
                  value: l,
                  cell: h,
                  titleCells: d.length ? d : null,
                  source: g,
                  additional: m,
                });
            }
            o && a && o.appendTo(e), this._applyIconColors();
          }),
          (o.prototype.isDataWindowValuesVisible = function (t) {
            return this._chart.onWidget() ? !!t && !this._chart.isSmall() : !!t;
          }),
          (o.prototype._generateItemsForRow._onShowhideClick = function (t) {
            this._model.setProperty(
              t.properties().visible,
              !t.properties().visible.value(),
              'Show/Hide ' + t.title(),
            ),
              this._trackLegendEvent('Show/Hide');
          }),
          (o.prototype._generateItemsForRow._onFormatClick = function (t, e) {
            t.userEditEnabled() &&
              this._chart.showChartPropertiesForSource(t, d.style),
              this._trackLegendEvent('Settings');
          }),
          (o.prototype._generateItemsForRow._onDeleteClick = function (t) {
            t.isUserDeletable() &&
              (t.hasChildren()
                ? showDeleteStudyTreeConfirm(
                    this._model.removeSource.bind(this._model, t),
                  )
                : this._model.removeSource(t)),
              this._trackLegendEvent('Remove');
          }),
          (o.prototype._generateItemsForRow._onAddChildSourceClick = function (
            t,
          ) {
            var e,
              i,
              s = this._chart.showIndicators(t);
            s &&
              ((e = function () {
                r('SOS', 'Apply SOS', 'Apply by Plus SOS');
              }),
              (i = this._model.model().studyInserted()).subscribe(this, e),
              s.visibilityChanged.subscribe(
                this,
                function (t) {
                  t || i.unsubscribe(this, e);
                },
                !0,
              )),
              this._trackLegendEvent('Indicator on indicator');
          }),
          (o.prototype._generateItemsForRow._onViewSorceClick = function (t) {
            var e = t.metaInfo();
            this._getPineSourceCode(e).done(function (t) {
              TradingView.bottomWidgetBar &&
                TradingView.bottomWidgetBar.activateScriptEditorTab(t);
            }),
              this._trackLegendEvent('Source code');
          }),
          (o.prototype._getPineSourceCode = function (t) {
            return $.Deferred();
          }),
          (o.prototype.setItemEnabled = function (t, e) {
            var i = !t.hasClass('disabled'),
              s = t.closest('.pane-legend-wrap');
            e && !i
              ? (t.removeClass('disabled'), s.removeClass('disabled'))
              : !e && i && (t.addClass('disabled'), s.addClass('disabled'));
          }),
          (o.prototype.valueChanged = function (t, e, i) {
            return t[e] !== i && ((t[e] = i), !0);
          }),
          (o.prototype.firstTitle = function () {
            return this.$el.find('.pane-legend-wrap:first-child');
          }),
          (o.prototype.updateTitle = function () {
            var e, i, s, n, o, r, l, a, h, d, u, c, p;
            for (s = this._itemsBinding.length; s--; )
              (i = this._itemsBinding[s]),
                Array.isArray(i.cell) ||
                  (i.last || (i.last = {}),
                  (n = i.last),
                  (e = (o = i.source).properties().visible.value()),
                  this.valueChanged(n, 'sourceVisible', e) &&
                    this.setItemEnabled(i.cell, e),
                  (r = i.value.color()),
                  (l =
                    o !== this._model.mainSeries() &&
                    this._model.selection().isSelected(o)
                      ? 'bold'
                      : 'normal'),
                  'function' == typeof i.value.getSplitTitle
                    ? ((a = (u = i.value.getSplitTitle())[0].trim()),
                      (h = u[1].trim()),
                      (d = u[2].trim()))
                    : ((a = i.value.text().trim()), (h = ''), (d = '')),
                  t.enabled('fundamental_widget') &&
                    (a =
                      ((p = (c = this._model.mainSeries()).symbolInfo())
                        ? p.name
                        : c.actualSymbol()) +
                      ' ' +
                      a),
                  i.isCellInited ||
                    ((i.isCellInited = !0),
                    d || h
                      ? ((i.titleElement = document.createElement('div')),
                        i.titleElement.classList.add(
                          'pane-legend-title__container',
                        ),
                        i.cell[0].appendChild(i.titleElement),
                        (i.descriptionElement = document.createElement('div')),
                        i.descriptionElement.classList.add(
                          'pane-legend-title__description',
                        ),
                        i.titleElement.appendChild(i.descriptionElement),
                        h &&
                          ((i.intervalElement = document.createElement('div')),
                          i.intervalElement.classList.add(
                            'pane-legend-title__interval',
                          ),
                          i.titleElement.appendChild(i.intervalElement)),
                        d &&
                          ((i.detailsElement = document.createElement('div')),
                          i.detailsElement.classList.add(
                            'pane-legend-title__details',
                          ),
                          i.titleElement.appendChild(i.detailsElement)),
                        i.titleElement.classList.add(
                          'apply-overflow-tooltip',
                          'apply-overflow-tooltip--allow-text',
                          'apply-overflow-tooltip--check-children',
                        ))
                      : ((i.titleElement = document.createElement('div')),
                        i.titleElement.classList.add(
                          'apply-overflow-tooltip',
                          'pane-legend-title__container',
                        ),
                        i.cell[0].appendChild(i.titleElement),
                        (i.descriptionElement = document.createElement('div')),
                        i.descriptionElement.classList.add(
                          'pane-legend-title__description',
                        ),
                        i.titleElement.appendChild(i.descriptionElement))),
                  (this.valueChanged(n, 'color', r) ||
                    this.valueChanged(n, 'fontWeight', l)) &&
                    ((i.titleElement.style.color = r),
                    (i.titleElement.style.borderColor = r),
                    (i.titleElement.style.fontWeight = l)),
                  a !== i.description &&
                    ((i.descriptionElement.textContent = TradingView.clean(
                      a,
                      !0,
                    )),
                    (i.description = a)),
                  i.intervalElement &&
                    h &&
                    h !== i.interval &&
                    ((i.intervalElement.textContent = TradingView.clean(h, !0)),
                    (i.interval = h)),
                  i.detailsElement &&
                    d &&
                    d !== i.details &&
                    ((i.detailsElement.textContent = TradingView.clean(d, !0)),
                    (i.details = d)));
            this._chart.resizeIndicator();
          }),
          (o.prototype.update = function (t) {
            var e,
              i,
              o,
              r,
              a,
              h,
              d,
              u,
              c,
              p,
              _,
              v =
                !this._chart.isActive() && !this._chart.crossHairSyncEnabled(),
              m = v ? s : n;
            for (
              this._indicatorRows.forEach(m),
                this.updateTitle(),
                u = this._itemsBinding.length;
              u--;

            )
              if (
                ((e = (r = this._itemsBinding[u]).cell),
                (i = r.titleCells),
                (o = r.source.properties().visible.value()),
                Array.isArray(e))
              )
                for (
                  r.last ||
                    ((r.last = {}), r.last.dwView || (r.last.dwView = {})),
                    c = r.last,
                    a = r.value.items(),
                    p = this.valueChanged(c, 'sourceVisible', o),
                    h = 0;
                  h < e.length;
                  h++
                )
                  (d = a[h]),
                    c[h] || (c[h] = {}),
                    p && this.setItemEnabled(e[h], o),
                    (_ = d.visible()),
                    e[h][0].classList.toggle('js-hidden', !_),
                    this.valueChanged(c[h], 'text', d.text()) &&
                      (e[h][0].textContent = d.text()),
                    e[h][0].classList.toggle('js-hidden', !_),
                    d.color() &&
                      this.valueChanged(c[h], 'color', d.color()) &&
                      e[h].css('color', l.resetTransparency(d.color())),
                    i &&
                      (this.valueChanged(c[h], 'sourceVisible', o) &&
                        this.setItemEnabled(i[h], o),
                      this.valueChanged(c[h], 'title', d.title()) &&
                        (i[h][0].textContent = d.title()),
                      i[h][0].classList.toggle('js-hidden', !_));
            this._chart.resizeIndicator();
          }),
          (o.prototype.dataSourceAtPoint = function (t, e) {
            return null;
          }),
          (o.prototype.renderTo = function (t, e, i) {
            var s, n, o, r, l, a, h;
            for (
              t.save(),
                t.fillStyle = this._chart
                  .properties()
                  .scalesProperties.textColor.value(),
                t.textBaseline = 'middle',
                s = 0,
                n = 0;
              n < this._itemsBinding.length;
              ++n
            )
              (r = (o = this._itemsBinding[n]).value),
                (a = (l = o.source === this._model.mainSeries()) ? 12 : 8),
                (h = l ? 25 : 17),
                Array.isArray(o.cell) ||
                  ((t.font = r.size() + "'Trebuchet MS', Verdana, Arial"),
                  t.fillText(r.text(), e, i + s + a),
                  (s += h));
            t.restore();
          }),
          (o.prototype.toggleTitles = function (t) {
            var e = this._chart.properties().paneProperties.legendProperties
              .showLegend;
            e.setValue(!e.value());
          }),
          (o.prototype._trackLegendEvent = function (t) {
            r('GUI', 'Action on indicator', t);
          }),
          (e.LegendWidget = o);
      }.call(this, i('Kxc7')));
    },
    MQEA: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    TGRH: function (t, e, i) {
      'use strict';
      var s,
        n,
        o,
        r,
        l,
        a,
        h,
        d,
        u,
        c,
        p,
        _,
        v,
        m,
        g,
        b,
        y,
        w,
        f,
        C,
        M,
        B,
        L,
        T;
      i.r(e),
        i.d(e, 'ControlBarNavigation', function () {
          return T;
        }),
        i('YFKU'),
        (s = i('1ANp')),
        (n = i('Ialn')),
        (o = i('TzTt')),
        (r = i('Tmoa')),
        (l = i('ei7k')),
        (a = i('qFKp')),
        i('tITk'),
        (h = i('MjtL')),
        (d = i('e8Rm')),
        (u = i('e2QN')),
        (c = i('vg09')),
        (p = i('/NcV')),
        (_ = i('94TV')),
        (v = i('qfuz')),
        (m = i('MQEA')),
        (g = i('jrhZ')),
        (y = Object(l.b)({ keys: ['Alt', 'R'], text: '{0} + {1}' })),
        (w = Object(l.b)({ keys: [v], text: '{0}' })),
        (f = Object(l.b)({ keys: [m], text: '{0}' })),
        (C =
          '<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-left">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="' +
          window.t('Zoom Out') +
          '">\n\t\t\t\t' +
          d +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="' +
          window.t('Zoom In') +
          '">\n\t\t\t\t' +
          c +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-right">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="' +
          window.t('Scroll to the Left') +
          '" data-tooltip-hotkey="' +
          w +
          '">\n\t\t\t\t' +
          h +
          '\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="' +
          window.t('Scroll to the Right') +
          '" data-tooltip-hotkey="' +
          f +
          '">\n\t\t\t\t' +
          p +
          '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="' +
          window.t('Reset Chart') +
          '" data-tooltip-hotkey="' +
          y +
          '">\n\t\t\t' +
          u +
          '\n\t\t</div>\n\t</div>\n</div>'),
        (M =
          '<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="' +
          window.t('Scroll to the Most Recent Bar') +
          '">\n\t' +
          _ +
          '\n</div>'),
        ((b = {}).moving = 'wait_finishing'),
        (b.wait_finishing = 'stop'),
        (b.stop = 'moving'),
        (B = b),
        (L = 'control-bar__btn--btn-hidden'),
        (T = (function () {
          function t(t, e) {
            (this._back = null),
              (this._backButtonVisible = !1),
              (this._boundKeydownHandler = null),
              (this._boundKeyupHandler = null),
              (this._boundMouseHandler = null),
              (this._chartBackgroundProperty = null),
              (this._chartModel = null),
              (this._checkIntervalId = 0),
              (this._controlBar = null),
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
              (this._widget = null),
              (this._btnGroups = null),
              (this._chart = t),
              (this._parent = e),
              this._init(),
              this._initHandlers();
          }
          return (
            (t.prototype.destroy = function () {
              null !== this._visibilityTypeProperty &&
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
                null !== this._resetAvailabilityChanged &&
                  (this._resetAvailabilityChanged.unsubscribe(
                    this,
                    this._updateResetScalesButtonVisibility,
                  ),
                  (this._resetAvailabilityChanged = null)),
                (this._chart = null);
            }),
            (t.prototype.updatePosition = function (t) {
              var e, i;
              null !== this._widget &&
                null !== this._controlBar &&
                ((e = this._chart.getPriceAxisMaxWidthByName('left')),
                (i = this._chart.getPriceAxisMaxWidthByName('right')),
                this._updateBtnGroupVisibility(t, e, i));
            }),
            (t.prototype._init = function () {
              var t,
                e,
                i = this;
              if (
                ((this._widget = Object(o.a)(C).querySelector(
                  '.control-bar-wrapper',
                )),
                (this._back = Object(o.a)(M).querySelector(
                  '.control-bar__btn--back-present',
                )),
                (this._controlBar = this._widget.querySelector('.control-bar')),
                (this._btnGroups = Array.from(
                  this._controlBar.querySelectorAll('.js-btn-group'),
                )),
                a.CheckMobile.any())
              )
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
              }),
                this._updateControlBarPosition(),
                this._initVisibility(),
                this._parent.appendChild(this._widget),
                this._parent.appendChild(this._back),
                (this._backButtonVisible = !1),
                (this._priceAxisName = n.IS_RTL ? 'left' : 'right'),
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
                    ),
                    i._updateBackBtnPosition(),
                    null !== i._back &&
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
                n = Modernizr.mobiletouch ? 'touchstart' : 'mousedown',
                o = Modernizr.mobiletouch
                  ? ['touchend']
                  : ['mouseup', 'mouseout'];
              for (
                this._buttons.moveLeft.addEventListener(n, function (t) {
                  t.preventDefault(),
                    s._moveByBar(1),
                    s._trackEvent('Move Left');
                }),
                  this._buttons.moveRight.addEventListener(n, function (t) {
                    t.preventDefault(),
                      s._moveByBar(-1),
                      s._trackEvent('Move Right');
                  }),
                  t = 0,
                  e = o;
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
            (t.prototype._check = function () {
              if (null !== this._chartModel && null !== this._back) {
                var t = this._chartModel.timeScale().rightOffset() < 0;
                t !== this._backButtonVisible &&
                  ((this._backButtonVisible = t),
                  this._back.classList.toggle(L, !this._backButtonVisible));
              }
            }),
            (t.prototype._initVisibility = function () {
              (this._visibilityTypeProperty = Object(s.actualBehavior)()),
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
                  null === this._widget ||
                  ((i = this._widget.getBoundingClientRect()),
                  (e =
                    t.clientX >= i.left - 100 &&
                    t.clientX <= i.right + 100 &&
                    t.clientY >= i.top - 100 &&
                    t.clientY <= i.bottom + 100)),
                this._controlBarVisible !== e &&
                  ((this._controlBarVisible = e),
                  null !== this._controlBar &&
                    null === this._rafId &&
                    (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                      this._updateControlBarVisibility.bind(this),
                    ))));
            }),
            (t.prototype._updateControlBarVisibility = function () {
              (this._rafId = null),
                null !== this._controlBar &&
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
                t &&
                  null !== this._back &&
                  (this._back.style.marginRight = t + 'px');
              }
            }),
            (t.prototype._updateBgBarStyle = function () {
              var t, e, i;
              if (null !== this._chartModel) {
                for (
                  t =
                    Object(r.getLuminance)(
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
                null !== this._back &&
                  this._back.classList.toggle('control-bar__btn--dark', t);
              }
            }),
            (t.prototype._updateBtnGroupVisibility = function (t, e, i) {
              var s, n, o, r, l, h, d, u, c;
              if (
                null !== this._btnGroups &&
                ((s = (t + e + i) / 2),
                (n = [
                  {
                    leftPartWidth: 86,
                    rightPartWidth: 186,
                    className: 'js-btn-group-right',
                  },
                  {
                    leftPartWidth: 43,
                    rightPartWidth: 143,
                    className: 'js-btn-group-left',
                  },
                ]),
                !a.CheckMobile.any())
              )
                for (o = 0, r = n; o < r.length; o++)
                  (h = s - e > (l = r[o]).leftPartWidth),
                    (d = s - i > l.rightPartWidth),
                    (u = !h || !d),
                    void 0 !== (c = this._getBtnGroup(l.className)) &&
                      u !== c.classList.contains('js-hidden') &&
                      (c.classList.toggle('js-hidden', u),
                      this._updateControlBarPosition());
            }),
            (t.prototype._getBtnGroup = function (t) {
              if (null !== this._btnGroups)
                return this._btnGroups.find(function (e) {
                  return e.classList.contains(t);
                });
            }),
            (t.prototype._updateControlBarPosition = function () {
              var t, e;
              null !== this._widget &&
                null !== this._controlBar &&
                ((t = 0),
                (t =
                  (e = this._controlBar.querySelectorAll(
                    '.js-btn-group:not(.js-hidden)',
                  )).length > 0
                    ? 86 * e.length
                    : 50),
                (this._widget.style.left =
                  'calc(50% - ' + Math.ceil(t / 2) + 'px)'));
            }),
            (t.prototype._updateResetScalesButtonVisibility = function () {
              if (null !== this._chartModel) {
                var t = this._chartModel.model().isScalesResetAvailable();
                this._buttons.turn.classList.toggle(L, !t);
              }
            }),
            (t.prototype._move = function (t) {
              var e,
                i,
                s,
                n = this;
              null !== this._chartModel &&
                'stop' === this._state &&
                this._chartModel.beginUndoMacro(
                  1 === t ? 'Move Left' : 'Move Right',
                ),
                (this._state = B.stop),
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
                    n._moveStep(e, 0, 50 * t, 1e3),
                      (n._movingTimeout = setTimeout(s, i));
                  }),
                  (this._movingTimeout = setTimeout(s, i)));
            }),
            (t.prototype._moveStep = function (t, e, i, s) {
              var n, o, r;
              return null === this._chartModel ||
                this._chartModel.timeScale().isEmpty()
                ? void 0
                : ((n = Date.now()) < t && (t = n),
                  ((o = (n - t) / s) > 1 || !isFinite(o)) && (o = 1),
                  (r = 1 - Math.pow(1 - o, 3)),
                  (this._currentDistance = (i - e) * r + e),
                  this._chartModel.scrollChart(this._currentDistance),
                  o);
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
                  var n = s._moveStep(e, t, 0, 700);
                  n && n < 1
                    ? (s._finishingTimeout = setTimeout(i, 10))
                    : null !== s._chartModel &&
                      ((s._state = B.wait_finishing),
                      (s._moveType = ''),
                      (s._movingTimeout = 0),
                      (s._currentDistance = 0),
                      s._chartModel.endUndoMacro());
                }),
                (this._finishingTimeout = setTimeout(i, 10));
            }),
            (t.prototype._stopMove = function () {
              'moving' === this._state &&
                ((this._state = B.moving),
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
                n,
                o,
                r,
                l = this;
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
                  (this._state = B.stop),
                  (this._moveType = 'by_bar'),
                  (this._startTime = Date.now()),
                  this._movingTimeout ||
                    ((s = 0),
                    (n = 150),
                    (o = 400),
                    (r = function () {
                      l._moveByBarStep(t),
                        s++,
                        n > 100 && (n -= (s / 5) * 20),
                        (l._movingTimeout = setTimeout(r, n));
                    }),
                    (this._movingTimeout = setTimeout(r, o)),
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
                (this._state = B.wait_finishing),
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
    VLql: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 14 14" width="14" height="14" fill="none"><path fill="currentColor" d="M5.46 4.05L4.05 5.46 7.59 9l-3.54 3.54 1.41 1.41L9 10.41l3.54 3.54 1.41-1.41L10.41 9l3.54-3.54-1.41-1.41L9 7.59 5.46 4.05z"/></svg>';
    },
    c44J: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M11 6L7 2L3 6H11ZM11 8L7 12L3 8H11Z"/></svg>';
    },
    cgDJ: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M7 2.5C2.5 2.5 1.5 7 1.5 7C1.5 7 2.5 11.5 7 11.5C11.5 11.5 12.5 7 12.5 7C12.5 7 11.5 2.5 7 2.5ZM10 7C10 8.65674 8.65686 10 7 10C5.34314 10 4 8.65674 4 7C4 5.34326 5.34314 4 7 4C8.65686 4 10 5.34326 10 7ZM7 8C7.55225 8 8 7.55225 8 7C8 6.44775 7.55225 6 7 6C6.44775 6 6 6.44775 6 7C6 7.55225 6.44775 8 7 8Z"/></svg>';
    },
    e2QN: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>';
    },
    e8Rm: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>';
    },
    jrhZ: function (t, e, i) {},
    kGiK: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M11 2L7 6L3 2H11ZM11 12L7 8L3 12H11Z"/></svg>';
    },
    koft: function (t, e, i) {
      'use strict';
      function s(t, e, i) {
        (this._model = e),
          (this._paneWidget = t),
          (this._chart = t._chart),
          (this._mainDiv = i),
          (this.jqDiv = $('<div class="pane-controls">')),
          this._initVisibility(),
          this.update(),
          this.jqDiv.appendTo(i);
      }
      var n = i('1ANp');
      (s.prototype.updateThemedColors = function (t) {
        t
          ? (this.jqDiv[0].style.color = t)
          : this.jqDiv[0].style.removeProperty('color');
      }),
        (s.prototype.update = function () {
          var t,
            e,
            s,
            n,
            o,
            r,
            l,
            a = this._paneWidget.state();
          if (a)
            if (this._visible && this._chart.isActive()) {
              if (
                (this.jqDiv[0].classList.remove('pane-controls--hidden'),
                (e = (t = this)._model.panes().indexOf(a)),
                (s = Modernizr.mobiletouch),
                this.jqDiv.toggleClass(
                  'toppane',
                  0 === e || this._chart.isMaximizedPane(),
                ),
                (n = !1),
                !a.containsMainSeries() && !this._chart.isMaximizedPane())
              ) {
                for (o = 0, l = (r = a.dataSources()).length; l--; )
                  if (r[l] instanceof TradingView.Study && ++o > 1) {
                    n = !0;
                    break;
                  }
                r = null;
              }
              e > 0 && !this._chart.isMaximizedPane() && !s
                ? (this._$upButton ||
                    (this._$upButton = $(document.createElement('a'))
                      .addClass('pane-legend-icon up')
                      .append($(i('C+zC')))
                      .attr('title', $.t('Move Up'))
                      .on('click', function () {
                        t._model.rearrangePanes(
                          t._chart,
                          t._model.panes().indexOf(t._paneWidget.state()),
                          'up',
                        );
                      })),
                  this._$upButton.appendTo(this.jqDiv))
                : this._$upButton && this._$upButton.detach(),
                e < this._model.panes().length - 1 &&
                !this._chart.isMaximizedPane() &&
                !s
                  ? (this._$downButton ||
                      (this._$downButton = $(document.createElement('a'))
                        .addClass('pane-legend-icon down')
                        .append($(i('GBBr')))
                        .attr('title', $.t('Move Down'))
                        .on('click', function () {
                          t._model.rearrangePanes(
                            t._chart,
                            t._model.panes().indexOf(t._paneWidget.state()),
                            'down',
                          );
                        })),
                    this._$downButton.appendTo(this.jqDiv))
                  : this._$downButton && this._$downButton.detach(),
                n
                  ? (this._$closeButton ||
                      (this._$closeButton = $(document.createElement('a'))
                        .addClass('pane-legend-icon delete')
                        .append($(i('VLql')))
                        .attr('title', $.t('Delete'))
                        .on('click', function () {
                          t._model.removePane(
                            t._chart,
                            t._model.panes().indexOf(t._paneWidget.state()),
                          );
                        })),
                    this._$closeButton.appendTo(this.jqDiv))
                  : this._$closeButton && this._$closeButton.detach(),
                this._model.panes().length > 1 &&
                !this._chart.isMaximizedPane() &&
                !s
                  ? (this._$maximizeButton ||
                      (this._$maximizeButton = $(document.createElement('a'))
                        .addClass('pane-legend-icon maximize')
                        .append($(i('c44J')))
                        .attr('title', $.t('Toggle Maximize Pane'))
                        .on('click', function () {
                          t._chart.toggleMaximizePane(t._paneWidget);
                        })),
                    this._$maximizeButton.appendTo(this.jqDiv))
                  : this._$maximizeButton && this._$maximizeButton.detach(),
                this._model.panes().length > 1 && this._chart.isMaximizedPane()
                  ? (this._$restoreButton ||
                      (this._$restoreButton = $(document.createElement('a'))
                        .addClass('pane-legend-icon restore')
                        .append($(i('kGiK')))
                        .attr('title', $.t('Toggle Maximize Pane'))
                        .on('click', function () {
                          t._chart.toggleMaximizePane(t._paneWidget);
                        })),
                    this._$restoreButton.appendTo(this.jqDiv))
                  : this._$restoreButton && this._$restoreButton.detach();
            } else this.jqDiv[0].classList.add('pane-controls--hidden');
        }),
        (s.prototype.destroy = function () {
          this._visibilityProperty &&
            (this._visibilityProperty.unsubscribe(
              this,
              this._onVisibilityPropertyChange,
            ),
            (this._visibilityProperty = null)),
            this._boundMouseHandler &&
              (this._mainDiv[0].removeEventListener(
                'mouseenter',
                this._boundMouseHandler,
                !1,
              ),
              this._mainDiv[0].removeEventListener(
                'mouseleave',
                this._boundMouseHandler,
                !1,
              ),
              (this._boundMouseHandler = null)),
            this.jqDiv.remove();
        }),
        (s.prototype._initVisibility = function () {
          (this._visible = !0),
            (this._visibilityProperty = n.actualBehavior()),
            this._visibilityProperty.subscribe(
              this,
              this._onVisibilityPropertyChange,
            ),
            this._onVisibilityPropertyChange();
        }),
        (s.prototype._onVisibilityPropertyChange = function () {
          var t = this._visibilityProperty.value();
          'alwaysOn' === t || 'alwaysOff' === t
            ? ((this._visible = 'alwaysOn' === t),
              this._boundMouseHandler &&
                (this._mainDiv[0].removeEventListener(
                  'mouseenter',
                  this._boundMouseHandler,
                ),
                this._mainDiv[0].removeEventListener(
                  'mouseleave',
                  this._boundMouseHandler,
                ),
                (this._boundMouseHandler = null)))
            : (this._boundMouseHandler ||
                ((this._boundMouseHandler = this._visibilityMouseHandler.bind(
                  this,
                )),
                this._mainDiv[0].addEventListener(
                  'mouseenter',
                  this._boundMouseHandler,
                ),
                this._mainDiv[0].addEventListener(
                  'mouseleave',
                  this._boundMouseHandler,
                )),
              (this._visible = !1)),
            this.update();
        }),
        (s.prototype._visibilityMouseHandler = function (t) {
          (this._visible = 'mouseenter' === t.type), this.update();
        }),
        (t.exports = s);
    },
    qfuz: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
    },
    sGj7: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="currentColor" d="M6 2H8V3.12598C8.18921 3.1748 8.37305 3.23706 8.55029 3.31152C8.71692 3.38159 8.87781 3.46265 9.03198 3.55371L9.82849 2.75732L11.2427 4.17163L10.4462 4.96802C10.6343 5.28638 10.7795 5.63306 10.874 6H12V8H10.874C10.7795 8.36694 10.6343 8.71362 10.4462 9.03198L11.2427 9.82837L9.82849 11.2427L9.03198 10.4463C8.71362 10.6343 8.36707 10.7795 8 10.874V12H6V10.874C5.63306 10.7795 5.2865 10.6343 4.96814 10.4463L4.17163 11.2427L2.75732 9.82837L3.55383 9.03198C3.45386 8.86279 3.36597 8.68555 3.29138 8.50146C3.22571 8.33936 3.17029 8.17188 3.12598 8H2V6H3.12598C3.22046 5.63306 3.36572 5.28638 3.55383 4.96802L2.75732 4.17163L4.17163 2.75732L4.96814 3.55371C5.2865 3.36572 5.63306 3.22046 6 3.12598V2ZM7 9C8.10461 9 9 8.10449 9 7C9 5.89551 8.10461 5 7 5C5.89539 5 5 5.89551 5 7C5 8.10449 5.89539 9 7 9Z"/></svg>';
    },
    scAS: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M11 6H2V7H11V6Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11 1H2C1.44772 1 1 1.44772 1 2V11C1 11.5523 1.44772 12 2 12H11C11.5523 12 12 11.5523 12 11V2C12 1.44772 11.5523 1 11 1ZM2 0C0.895431 0 0 0.89543 0 2V11C0 12.1046 0.89543 13 2 13H11C12.1046 13 13 12.1046 13 11V2C13 0.895431 12.1046 0 11 0H2Z"/></svg>';
    },
    vg09: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>';
    },
  },
]);
